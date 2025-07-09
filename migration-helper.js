const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const { spawn, exec } = require('child_process');

class MigrationHelper {
  constructor(csvFilePath = 'file_comparison.csv') {
    this.csvFilePath = csvFilePath;
    this.backupDir = './docs_backup';
    this.targetDir = './docs';
    this.progressFile = './migration-progress.json';
    this.fileList = null;
  }

  // 从CSV文件获取所有需要处理的文件
  async getAllFiles() {
    if (this.fileList) {
      return this.fileList;
    }

    return new Promise((resolve, reject) => {
      if (!fs.existsSync(this.csvFilePath)) {
        reject(new Error(`CSV文件不存在: ${this.csvFilePath}`));
        return;
      }

      const files = [];
      let lineNumber = 0;
      let headerShown = false;
      
      console.log(`📖 正在读取CSV文件: ${this.csvFilePath}`);
      
      // 先读取文件的原始内容进行调试
      const rawContent = fs.readFileSync(this.csvFilePath, 'utf8');
      const lines = rawContent.split('\n');
      console.log(`📋 CSV文件前3行原始内容:`);
      lines.slice(0, 3).forEach((line, index) => {
        console.log(`行 ${index + 1}: "${line}"`);
      });
      
      fs.createReadStream(this.csvFilePath, { encoding: 'utf8' })
        .pipe(csv({
          skipEmptyLines: true,
          skipLinesWithError: true
        }))
        .on('data', (row) => {
          lineNumber++;
          
          // 显示CSV的列名（只显示一次）
          if (!headerShown) {
            console.log(`📋 CSV列名:`, Object.keys(row));
            headerShown = true;
          }
          
          // 调试：显示前几行的完整数据
          if (lineNumber <= 3) {
            console.log(`行 ${lineNumber} 完整数据:`, JSON.stringify(row, null, 2));
          }
          
          // 直接从对象中获取字段值，不依赖属性访问
          const rowKeys = Object.keys(row);
          const relativePathKey = rowKeys.find(key => key.includes('relative_path') || key.includes('path'));
          const relativePath = row[relativePathKey];
          
          if (lineNumber <= 5) {
            console.log(`行 ${lineNumber} 调试:`);
            console.log(`  找到的路径字段: "${relativePathKey}"`);
            console.log(`  路径值: "${relativePath}"`);
            console.log(`  路径类型: ${typeof relativePath}`);
          }
          
          if (relativePath && relativePath.trim() !== '') {
            const cleanPath = relativePath.trim();
            // 处理Windows风格的路径分隔符
            const normalizedPath = cleanPath.replace(/\\/g, '/');
            const fullPath = path.join(this.backupDir, normalizedPath);
            
            if (lineNumber <= 5) {
              console.log(`  检查文件: "${cleanPath}" -> "${normalizedPath}" -> "${fullPath}"`);
            }
            
            // 检查文件是否存在于backup目录中，支持md/mdx/yml文件
            if (fs.existsSync(fullPath) && normalizedPath.match(/\.(md|mdx|yml)$/)) {
              files.push(fullPath);
              if (lineNumber <= 5) {
                console.log(`  ✅ 添加文件: ${normalizedPath}`);
              }
            } else {
              if (lineNumber <= 5) {
                console.log(`  ❌ 文件不存在或不支持的格式: ${normalizedPath}`);
                console.log(`    文件存在: ${fs.existsSync(fullPath)}`);
                console.log(`    匹配扩展名: ${normalizedPath.match(/\.(md|mdx|yml)$/) ? true : false}`);
              }
            }
          } else {
            if (lineNumber <= 5) {
              console.log(`⚠️ 行 ${lineNumber}: 未找到有效的路径字段`);
              console.log(`   所有字段:`, rowKeys);
            }
          }
        })
        .on('end', () => {
          console.log(`📊 CSV读取完成，共处理 ${lineNumber} 行`);
          
          // 按相对路径排序
          files.sort((a, b) => {
            const relativeA = path.relative(this.backupDir, a);
            const relativeB = path.relative(this.backupDir, b);
            return relativeA.localeCompare(relativeB);
          });
          
          this.fileList = files;
          console.log(`📊 从CSV加载了 ${files.length} 个文件`);
          
          // 显示前几个文件
          if (files.length > 0) {
            console.log(`📋 前5个文件:`);
            files.slice(0, 5).forEach((file, index) => {
              const relativePath = path.relative(this.backupDir, file);
              console.log(`  ${index + 1}. ${relativePath}`);
            });
          }
          
          resolve(files);
        })
        .on('error', (error) => {
          console.error(`❌ CSV读取错误:`, error);
          reject(error);
        });
    });
  }

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

  saveProgress(progress) {
    fs.writeFileSync(this.progressFile, JSON.stringify(progress, null, 2));
  }

  async getStatus() {
    const allFiles = await this.getAllFiles();
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

  async moveCurrentFile() {
    const status = await this.getStatus();

    if (status.completed) {
      console.log(status.message);
      return false;
    }

    if (status.exists) {
      console.log(`⚠️ 文件已存在，自动跳过: ${status.relativePath}`);
      this.skipCurrentFile();
      return 'skipped';
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

  // 自动处理单个文件的完整流程
  async processCurrentFile() {
    const status = await this.getStatus();

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
    const moved = await this.moveCurrentFile();
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

  // 使用yarn build进行快速编译测试
  async testBuild() {
    return new Promise((resolve) => {
      console.log('⚡ 运行 yarn build...');

      const { spawn } = require('child_process');
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

  // 自动测试编译功能（解决yarn start不退出问题）
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
      const errors = [];

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

  // 检查yarn是否可用
  checkYarn() {
    try {
      require('child_process').execSync('yarn --version', { stdio: 'ignore' });
      return true;
    } catch {
      return false;
    }
  }

  // 解析编译错误
  parseCompilationErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // MDX编译错误
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

  completeCurrentFile() {
    const progress = this.loadProgress();
    
    return this.getAllFiles().then(allFiles => {
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
    });
  }

  skipCurrentFile() {
    const progress = this.loadProgress();
    
    return this.getAllFiles().then(allFiles => {
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
    });
  }
}

// 命令行接口
if (require.main === module) {
  const csvPath = process.argv[3] || 'file_comparison.csv';
  const helper = new MigrationHelper(csvPath);
  const command = process.argv[2];
  
  switch (command) {
    case 'status':
      helper.getStatus().then(status => {
        console.log(JSON.stringify(status, null, 2));
      });
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

    case 'process':
      // 新增：自动处理当前文件
      helper.processCurrentFile().then(result => {
        console.log(JSON.stringify(result, null, 2));
      });
      break;

    default:
      console.log('可用命令:');
      console.log('  node migration-helper.js status [csv文件]     # 查看当前状态');
      console.log('  node migration-helper.js move [csv文件]       # 移动当前文件');
      console.log('  node migration-helper.js test [csv文件]       # 测试编译');
      console.log('  node migration-helper.js complete [csv文件]   # 标记当前文件完成');
      console.log('  node migration-helper.js skip [csv文件]       # 跳过当前文件');
      console.log('  node migration-helper.js process [csv文件]    # 自动处理当前文件');
      console.log('');
      console.log('默认CSV文件: file_comparison.csv');
  }
}

module.exports = MigrationHelper;