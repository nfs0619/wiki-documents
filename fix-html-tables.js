const fs = require('fs');
const path = require('path');

// 需要修复的文件列表
const filesToFix = [
    'docs/ja/Seeed_Elderly/Bee/ja_Atom_Node.md',
    'docs/ja/Seeed_Elderly/Bee/ja_BLE_dual_Bee_v1.0.md',
    'docs/ja/Seeed_Elderly/Bee/ja_Bluetooth_Bee_v2.0.md',
    'docs/ja/Seeed_Elderly/Bee/ja_Bluetooth_V4.0_HM_11_BLE_Module.md',
    'docs/ja/Seeed_Elderly/Bee/ja_GPS_Bee_kit.md',
    'docs/ja/Seeed_Elderly/Bee/ja_Grove-XBee_Carrier.md',
    'docs/ja/Seeed_Elderly/Bee/ja_Mesh_Bee.md',
    'docs/ja/Seeed_Elderly/Bee/ja_UartSBee_V4.md',
    'docs/ja/Seeed_Elderly/Bee/ja_XBee_Shield.md',
    'docs/ja/Seeed_Elderly/Discrete Product/ja_4WD_Driver_Platform_V1.0.md',
    'docs/ja/Seeed_Elderly/Discrete Product/ja_4WD_Mecanum_Wheel_Robot_Kit_Series.md',
    'docs/ja/Seeed_Elderly/Discrete Product/ja_Basic_Fastener_Kit.md'
];

function fixHtmlTags(content) {
    // 修复HTML表格标签的常见问题
    let fixed = content;

    // 修复多行 <th> 标签 - 更强大的正则表达式
    fixed = fixed.replace(/<th([^>]*)>\s*([^<\n]+(?:\n[^<]*)*?)\s*\n\s*<\/th>/gm, '<th$1>$2</th>');

    // 修复多行 <td> 标签 - 更强大的正则表达式
    fixed = fixed.replace(/<td([^>]*)>\s*([^<\n]+(?:\n[^<]*)*?)\s*\n\s*<\/td>/gm, '<td$1>$2</td>');

    // 修复 <caption> 标签
    fixed = fixed.replace(/<caption>\s*([^<]+)\s*\n\s*<\/caption>/g, '<caption>$1</caption>');

    // 修复简单的单行标签
    fixed = fixed.replace(/<th([^>]*)>\s*([^<\n]+)\s*<\/th>/g, '<th$1>$2</th>');
    fixed = fixed.replace(/<td([^>]*)>\s*([^<\n]+)\s*<\/td>/g, '<td$1>$2</td>');

    // 修复跨行的标签（内容在下一行）
    fixed = fixed.replace(/<th([^>]*)>\s*\n\s*([^<]+)\s*\n\s*<\/th>/gm, '<th$1>$2</th>');
    fixed = fixed.replace(/<td([^>]*)>\s*\n\s*([^<]+)\s*\n\s*<\/td>/gm, '<td$1>$2</td>');

    // 清理多余的空白字符
    fixed = fixed.replace(/(<th[^>]*>)\s+/g, '$1');
    fixed = fixed.replace(/\s+(<\/th>)/g, '$1');
    fixed = fixed.replace(/(<td[^>]*>)\s+/g, '$1');
    fixed = fixed.replace(/\s+(<\/td>)/g, '$1');

    return fixed;
}

function fixFile(filePath) {
    try {
        if (!fs.existsSync(filePath)) {
            console.log(`❌ 文件不存在: ${filePath}`);
            return false;
        }
        
        const content = fs.readFileSync(filePath, 'utf8');
        const fixedContent = fixHtmlTags(content);
        
        if (content !== fixedContent) {
            fs.writeFileSync(filePath, fixedContent, 'utf8');
            console.log(`✅ 已修复: ${filePath}`);
            return true;
        } else {
            console.log(`ℹ️  无需修复: ${filePath}`);
            return false;
        }
    } catch (error) {
        console.error(`❌ 修复失败 ${filePath}:`, error.message);
        return false;
    }
}

function main() {
    console.log('🔧 开始批量修复HTML表格标签...\n');
    
    let fixedCount = 0;
    let totalCount = filesToFix.length;
    
    for (const filePath of filesToFix) {
        if (fixFile(filePath)) {
            fixedCount++;
        }
    }
    
    console.log(`\n📊 修复完成: ${fixedCount}/${totalCount} 个文件`);
    
    if (fixedCount > 0) {
        console.log('\n🔧 请运行 yarn build 测试编译结果');
    }
}

if (require.main === module) {
    main();
}

module.exports = { fixHtmlTags, fixFile };
