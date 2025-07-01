const MigrationHelper = require('./migration-helper.js');

async function batchMigrate(batchSize = 5) {
  const helper = new MigrationHelper();
  let successCount = 0;
  let errorCount = 0;
  let skippedCount = 0;
  
  console.log(`开始批量迁移，批次大小: ${batchSize}`);
  
  for (let i = 0; i < batchSize; i++) {
    try {
      console.log(`\n--- 处理第 ${i + 1} 个文件 ---`);
      const result = await helper.processCurrentFile();
      
      if (result.completed) {
        console.log('🎉 所有文件迁移完成！');
        break;
      }
      
      if (result.success) {
        successCount++;
        console.log(`✅ 成功处理: ${result.file}`);
      } else if (result.skipped) {
        skippedCount++;
        console.log(`⏭️ 跳过文件: ${result.file}`);
      } else {
        errorCount++;
        console.log(`❌ 处理失败: ${result.file || '未知文件'}`);
        console.log('错误:', result.error);
        if (result.errors && result.errors.length > 0) {
          console.log('详细错误:');
          result.errors.forEach((error, index) => {
            console.log(`  ${index + 1}. ${error.type}: ${error.message || error.cause}`);
            if (error.file) console.log(`     文件: ${error.file}`);
            if (error.line) console.log(`     行号: ${error.line}`);
          });
        }
        console.log('\n⚠️ 遇到错误，停止批量处理。请手动修复后继续。');
        break;
      }
      
      // 短暂延迟，避免过快处理
      await new Promise(resolve => setTimeout(resolve, 1000));
      
    } catch (error) {
      console.error('处理过程中发生异常:', error);
      errorCount++;
      break;
    }
  }
  
  console.log(`\n=== 批量处理完成 ===`);
  console.log(`成功: ${successCount} 个`);
  console.log(`跳过: ${skippedCount} 个`);
  console.log(`错误: ${errorCount} 个`);
  
  // 显示当前进度
  const status = helper.getStatus();
  if (!status.completed) {
    console.log(`\n当前进度: ${status.currentIndex}/${status.total} (${Math.round(status.currentIndex/status.total*100)}%)`);
    console.log(`下一个文件: ${status.relativePath}`);
  }
}

// 从命令行参数获取批次大小
const batchSize = parseInt(process.argv[2]) || 5;
batchMigrate(batchSize);
