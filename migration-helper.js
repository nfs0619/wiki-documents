const fs = require('fs');
const path = require('path');
const { spawn, exec } = require('child_process');

class MigrationHelper {
  constructor() {
    this.backupDir = './docs_backup';
    this.targetDir = './docs';
    this.progressFile = './migration-progress.json';
  }

  /**
   * 获取所有需要迁移的文件列表
   * @returns {string[]} 排序后的文件路径数组
   */
  getAllFiles() {
    const files = [];
    this.walkDirectory(this.backupDir, files);
    return files.sort((a, b) => {
      const relativeA = path.relative(this.backupDir, a);
      const relativeB = path.relative(this.backupDir, b);
      return relativeA.localeCompare(relativeB);
    }).reverse();
  }

  /**
   * 递归遍历目录，收集 .md 和 .mdx 文件
   * @param {string} dir - 目录路径
   * @param {string[]} fileList - 文件列表数组
   */
  walkDirectory(dir, fileList) {
    if (!fs.existsSync(dir)) return;

    const items = fs.readdirSync(dir).sort();

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        this.walkDirectory(fullPath, fileList);
      } else if (item.match(/\.(md|mdx)$/)) {
        fileList.push(fullPath);
      }
    }
  }

  /**
   * 加载迁移进度
   * @returns {Object} 进度对象
   */
  loadProgress() {
    if (fs.existsSync(this.progressFile)) {
      try {
        return JSON.parse(fs.readFileSync(this.progressFile, 'utf8'));
      } catch {
        return { currentIndex: 0, completed: [] };
      }
    }
    return { currentIndex: 0, completed: [] };
  }

  /**
   * 保存迁移进度
   * @param {Object} progress - 进度对象
   */
  saveProgress(progress) {
    fs.writeFileSync(this.progressFile, JSON.stringify(progress, null, 2));
  }

  /**
   * 获取当前迁移状态
   * @returns {Object} 状态对象
   */
  getStatus() {
    const allFiles = this.getAllFiles();
    const progress = this.loadProgress();

    if (progress.currentIndex >= allFiles.length) {
      return {
        completed: true,
        message: '🎉 所有文件迁移完成！'
      };
    }

    const currentFile = allFiles[progress.currentIndex];
    const relativePath = path.relative(this.backupDir, currentFile);
    const targetPath = path.join(this.targetDir, relativePath);
    const exists = fs.existsSync(targetPath);

    return {
      completed: false,
      currentIndex: progress.currentIndex,
      total: allFiles.length,
      currentFile: currentFile,
      relativePath: relativePath,
      targetPath: targetPath,
      exists: exists,
      message: `当前需要处理: ${relativePath} (${progress.currentIndex + 1}/${allFiles.length})`
    };
  }

  /**
   * 移动当前文件到目标位置
   * @returns {boolean} 是否成功移动
   */
  moveCurrentFile() {
    const status = this.getStatus();

    if (status.completed) {
      console.log(status.message);
      return false;
    }

    if (status.exists) {
      console.log(`⚠️ 文件已存在: ${status.relativePath}`);
      console.log('请在 Cursor 中询问用户是否要跳过这个文件');
      return false;
    }

    // 确保目标目录存在
    const targetDirPath = path.dirname(status.targetPath);
    if (!fs.existsSync(targetDirPath)) {
      fs.mkdirSync(targetDirPath, { recursive: true });
    }

    // 复制文件
    fs.copyFileSync(status.currentFile, status.targetPath);
    console.log(`✅ 已移动: ${status.relativePath}`);

    return true;
  }

  /**
   * 自动处理单个文件的完整流程
   * @returns {Promise<Object>} 处理结果
   */
  async processCurrentFile() {
    const status = this.getStatus();

    if (status.completed) {
      console.log('🎉 所有文件迁移完成！');
      return { completed: true };
    }

    console.log(`📁 处理文件: ${status.relativePath} (${status.currentIndex + 1}/${status.total})`);

    // 如果文件已存在，跳过
    if (status.exists) {
      console.log(`⚠️ 文件已存在，跳过: ${status.relativePath}`);
      this.completeCurrentFile();
      return { skipped: true, file: status.relativePath };
    }

    // 移动文件
    console.log('📋 移动文件...');
    const moved = this.moveCurrentFile();
    if (!moved) {
      return { error: '文件移动失败' };
    }

    // 测试编译
    console.log('🔧 测试编译...');
    const buildResult = await this.testBuild();

    if (buildResult.success) {
      console.log('✅ 编译成功！');
      this.completeCurrentFile();
      return { success: true, file: status.relativePath };
    } else {
      console.log('❌ 编译失败，需要手动修复');
      console.log('错误信息:', buildResult.errors);
      return {
        error: '编译失败',
        file: status.relativePath,
        errors: buildResult.errors
      };
    }
  }

  /**
   * 使用 yarn build 进行快速编译测试
   * @returns {Promise<Object>} 编译结果
   */
  async testBuild() {
    return new Promise((resolve) => {
      console.log('⚡ 运行 yarn build...');

      const buildProcess = spawn('yarn', ['build'], {
        stdio: ['ignore', 'pipe', 'pipe'],
        shell: true
      });

      let output = '';
      let hasError = false;

      // 超时保护：60秒后强制结束
      const timeout = setTimeout(() => {
        buildProcess.kill('SIGTERM');
        setTimeout(() => {
          if (!buildProcess.killed) {
            buildProcess.kill('SIGKILL');
          }
        }, 2000);
      }, 60000);

      buildProcess.stdout.on('data', (data) => {
        output += data.toString();
      });

      buildProcess.stderr.on('data', (data) => {
        const text = data.toString();
        output += text;

        // 检测严重错误（不包括警告）
        if (text.includes('ERROR') && !text.includes('WARNING')) {
          hasError = true;
        }
      });

      buildProcess.on('close', (code) => {
        clearTimeout(timeout);

        const result = {
          success: code === 0 && !hasError,
          exitCode: code,
          output: output,
          errors: hasError ? this.parseCompilationErrors(output) : []
        };

        resolve(result);
      });

      buildProcess.on('error', (error) => {
        clearTimeout(timeout);
        resolve({
          success: false,
          error: error.message,
          errors: [{ type: 'BUILD_ERROR', message: error.message }]
        });
      });
    });
  }

  /**
   * 自动测试编译功能（解决 yarn start 不退出问题）
   * @returns {Promise<Object>} 编译测试结果
   */
  async testCompilation() {
    return new Promise((resolve) => {
      console.log('⚡ 开始编译测试...');

      // 检测可用的包管理器
      const useYarn = this.checkYarn();
      const cmd = useYarn ? 'yarn' : 'npm';
      const args = useYarn ? ['start', '--no-open'] : ['run', 'start', '--', '--no-open'];

      const startProcess = spawn(cmd, args, {
        stdio: ['ignore', 'pipe', 'pipe'],
        shell: true
      });

      let output = '';
      let hasStarted = false;
      let hasError = false;

      // 超时保护：10秒后强制结束
      const timeout = setTimeout(() => {
        startProcess.kill('SIGTERM');
        setTimeout(() => {
          if (!startProcess.killed) {
            startProcess.kill('SIGKILL');
          }
        }, 2000);
      }, 10000);

      startProcess.stdout.on('data', (data) => {
        const text = data.toString();
        output += text;

        // 检测编译成功
        if (text.includes('webpack compiled successfully') ||
            text.includes('Local:') ||
            text.includes('ready - started server')) {
          hasStarted = true;
          // 检测到编译成功，立即停止进程
          clearTimeout(timeout);
          startProcess.kill('SIGTERM');
        }
      });

      startProcess.stderr.on('data', (data) => {
        const text = data.toString();
        output += text;

        // 检测编译错误
        if (text.includes('ERROR') ||
            text.includes('MDX compilation failed') ||
            text.includes('Module build failed')) {
          hasError = true;
          // 检测到错误，也立即停止进程
          clearTimeout(timeout);
          startProcess.kill('SIGTERM');
        }
      });

      startProcess.on('close', (code) => {
        clearTimeout(timeout);

        // 解析错误信息
        const parsedErrors = this.parseCompilationErrors(output);

        const result = {
          success: hasStarted && !hasError && parsedErrors.length === 0,
          hasStarted: hasStarted,
          hasError: hasError,
          errors: parsedErrors,
          output: output,
          exitCode: code
        };

        console.log(hasStarted && !hasError ?
          '✅ 编译成功' :
          `❌ 编译失败 (${parsedErrors.length} 个错误)`);

        resolve(result);
      });

      startProcess.on('error', (error) => {
        clearTimeout(timeout);
        console.error('❌ 启动失败:', error.message);
        resolve({
          success: false,
          hasStarted: false,
          hasError: true,
          errors: [{ type: 'STARTUP_ERROR', message: error.message }],
          output: output,
          error: error
        });
      });
    });
  }

  /**
   * 检查 yarn 是否可用
   * @returns {boolean} yarn 是否可用
   */
  checkYarn() {
    try {
      require('child_process').execSync('yarn --version', { stdio: 'ignore' });
      return true;
    } catch {
      return false;
    }
  }

  /**
   * 解析编译错误信息
   * @param {string} output - 编译输出
   * @returns {Array} 错误信息数组
   */
  parseCompilationErrors(output) {
    const errors = [];
    const lines = output.split('\n');

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // MDX 编译错误
      if (line.includes('MDX compilation failed')) {
        const nextLines = lines.slice(i, i + 10);
        const errorInfo = this.extractMDXError(nextLines);
        if (errorInfo) {
          errors.push(errorInfo);
        }
      }

      // 一般编译错误
      if (line.includes('Module build failed') && !line.includes('MDX')) {
        errors.push({
          type: 'BUILD_ERROR',
          message: line.trim(),
          line: i + 1
        });
      }
    }

    return errors;
  }

  /**
   * 提取 MDX 错误详细信息
   * @param {string[]} lines - 错误信息行数组
   * @returns {Object|null} 错误信息对象或 null
   */
  extractMDXError(lines) {
    const errorText = lines.join('\n');

    const fileMatch = errorText.match(/file "([^"]+)"/);
    const causeMatch = errorText.match(/Cause: (.+)/);
    const lineMatch = errorText.match(/\((\d+):(\d+)/);

    if (fileMatch && causeMatch) {
      return {
        type: 'MDX_ERROR',
        file: fileMatch[1],
        cause: causeMatch[1],
        line: lineMatch ? parseInt(lineMatch[1]) : null,
        column: lineMatch ? parseInt(lineMatch[2]) : null,
        fullError: errorText
      };
    }

    return null;
  }

  /**
   * 标记当前文件为已完成
   * @returns {boolean} 是否成功标记
   */
  completeCurrentFile() {
    const progress = this.loadProgress();
    const allFiles = this.getAllFiles();

    if (progress.currentIndex < allFiles.length) {
      const currentFile = allFiles[progress.currentIndex];
      const relativePath = path.relative(this.backupDir, currentFile);

      progress.completed.push({
        file: relativePath,
        completedAt: new Date().toISOString(),
        index: progress.currentIndex
      });
      progress.currentIndex++;
      progress.lastCompleted = new Date().toISOString();

      this.saveProgress(progress);

      console.log(`✅ 已完成: ${relativePath}`);
      console.log(`📊 进度: ${progress.currentIndex}/${allFiles.length}`);

      return true;
    }

    return false;
  }

  /**
   * 跳过当前文件
   * @returns {boolean} 是否成功跳过
   */
  skipCurrentFile() {
    const progress = this.loadProgress();
    const allFiles = this.getAllFiles();

    if (progress.currentIndex < allFiles.length) {
      const currentFile = allFiles[progress.currentIndex];
      const relativePath = path.relative(this.backupDir, currentFile);

      progress.currentIndex++;
      progress.lastSkipped = relativePath;

      this.saveProgress(progress);

      console.log(`⏭️ 已跳过: ${relativePath}`);
      return true;
    }

    return false;
  }
}

/**
 * 命令行接口
 */
if (require.main === module) {
  const helper = new MigrationHelper();
  const command = process.argv[2];

  switch (command) {
    case 'status':
      const status = helper.getStatus();
      console.log(JSON.stringify(status, null, 2));
      break;

    case 'move':
      helper.moveCurrentFile();
      break;

    case 'test':
      // 自动测试命令
      helper.testCompilation().then(result => {
        console.log(JSON.stringify(result, null, 2));
      });
      break;

    case 'complete':
      helper.completeCurrentFile();
      break;

    case 'skip':
      helper.skipCurrentFile();
      break;

    default:
      console.log('可用命令:');
      console.log('  node migration-helper.js status    # 查看当前状态');
      console.log('  node migration-helper.js move      # 移动当前文件');
      console.log('  node migration-helper.js test      # 测试编译(自动启动和停止yarn start)');
      console.log('  node migration-helper.js complete  # 标记当前文件完成');
      console.log('  node migration-helper.js skip      # 跳过当前文件');
  }
}

module.exports = MigrationHelper;
