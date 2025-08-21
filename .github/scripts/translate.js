const Anthropic = require('@anthropic-ai/sdk');
const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

const anthropic = new Anthropic({
  apiKey: process.env.TRANSLATION_API_KEY
});

// 语言配置
const LANGUAGE_CONFIG = {
  'zh-CN': {
    folder: 'zh-CN',
    name: '简体中文',
    pathPrefix: '/cn'
  },
  'ja': {
    folder: 'ja',
    name: '日本語',
    pathPrefix: '/ja'
  },
  'es': {
    folder: 'Spanish',
    name: 'Español',
    pathPrefix: '/es'
  }
};

// 术语保护列表
const PRESERVE_TERMS = {
    'reCamera': 'reCamera',
    'Grove': 'Grove',
    'SenseCAP': 'SenseCAP',
    'LoRa-E5': 'LoRa-E5',
    'API': 'API',
    'GitHub': 'GitHub',
    'Seeed': 'Seeed',
    'IoT': 'IoT',
    'WiFi': 'WiFi',
    'USB': 'USB',
    'reComputer': 'reComputer',
    'XIAO': 'XIAO',
    'ReSpeaker': 'ReSpeaker',
    'LinkStar': 'LinkStar',
    'reTerminal': 'reTerminal',
    'reserver': 'reserver',
    'BeagleBone': 'BeagleBone',
    'SenseCraft': 'SenseCraft',
    'Home Assistant': 'Home Assistant'
};

// 文档保护列表
const PROTECTED_PATHS = [
  'docs/Getting_Started.md',
  'docs/index.md',
  'docs/README.md',
  'docs/CONTRIBUTING.md',
  'docs/LICENSE.md',
];

// 翻译状态跟踪
const translationStatus = {
  total: 0,
  completed: 0,
  failed: 0,
  moved: 0,
  deleted: 0,
  protected: 0,
  errors: []
};

// 🔥 核心改进1：预处理文档，添加行号标记（保留缩进）
function preprocessDocument(content) {
  const lines = content.split('\n');
  const processedLines = [];
  const lineMetadata = [];
  
  lines.forEach((line, index) => {
    // 计算缩进（空格和制表符）
    const indentMatch = line.match(/^(\s*)/);
    const indent = indentMatch ? indentMatch[1] : '';
    const trimmedContent = line.slice(indent.length);
    
    // 保存每行的元数据
    lineMetadata.push({
      originalLine: line,
      indent: indent,
      content: trimmedContent,
      isEmpty: line.trim() === ''
    });
    
    // 为每行添加唯一标识符，保留缩进
    const lineId = `[LINE_${index}]`;
    
    if (line.trim() === '') {
      // 空行
      processedLines.push(`${lineId}[EMPTY_LINE]`);
    } else {
      // 保留缩进在标记后面
      processedLines.push(`${lineId}${indent}${trimmedContent}`);
    }
  });
  
  return {
    processed: processedLines.join('\n'),
    lineMetadata: lineMetadata,
    totalLines: lines.length
  };
}

// 🔥 核心改进2：后处理移除标记并恢复缩进
function postprocessDocument(translatedContent, lineMetadata, totalLines) {
  const translatedLines = translatedContent.split('\n');
  const finalLines = [];
  
  for (let i = 0; i < totalLines; i++) {
    const metadata = lineMetadata[i];
    
    if (i >= translatedLines.length) {
      // 如果译文行数不够，使用原文
      console.log(`⚠️ 第${i+1}行缺失，使用原文`);
      finalLines.push(metadata.originalLine);
      continue;
    }
    
    let translatedLine = translatedLines[i];
    
    // 移除行号标记
    translatedLine = translatedLine.replace(/^\[LINE_\d+\]/, '');
    
    // 处理空行
    if (translatedLine.includes('[EMPTY_LINE]')) {
      finalLines.push('');
      continue;
    }
    
    // 恢复原始缩进
    if (metadata.indent) {
      // 移除译文中可能存在的缩进（避免双重缩进）
      const translatedTrimmed = translatedLine.trimStart();
      // 添加原始缩进
      finalLines.push(metadata.indent + translatedTrimmed);
    } else {
      finalLines.push(translatedLine);
    }
  }
  
  // 确保行数完全一致
  if (finalLines.length !== totalLines) {
    console.log(`⚠️ 行数修复: 期望 ${totalLines} 行，实际 ${finalLines.length} 行`);
    
    // 强制修正行数
    while (finalLines.length < totalLines) {
      const missingIndex = finalLines.length;
      const metadata = lineMetadata[missingIndex];
      finalLines.push(metadata ? metadata.originalLine : '');
    }
    
    // 如果行数过多，截断
    if (finalLines.length > totalLines) {
      finalLines.length = totalLines;
    }
  }
  
  return finalLines.join('\n');
}

// 🔥 核心改进3：智能分块，避免在关键位置切断
function smartChunkDocument(content, maxChunkSize = 10000) {
  const lines = content.split('\n');
  const chunks = [];
  let frontMatter = '';
  let inFrontMatter = false;
  let contentStartIndex = 0;
  
  // 提取Front Matter
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (i === 0 && line.trim() === '---') {
      inFrontMatter = true;
      frontMatter += line + '\n';
      continue;
    }
    
    if (inFrontMatter) {
      frontMatter += line + '\n';
      if (line.trim() === '---') {
        inFrontMatter = false;
        contentStartIndex = i + 1;
        break;
      }
      continue;
    }
  }
  
  // 智能分块正文内容
  const contentLines = lines.slice(contentStartIndex);
  const contentChunks = intelligentSplit(contentLines, maxChunkSize);
  
  // 构建最终chunks
  if (contentChunks.length <= 1) {
    return [{
      content: content,
      frontMatter: '',
      isComplete: true,
      index: 0,
      total: 1
    }];
  }
  
  return contentChunks.map((chunk, index) => ({
    content: chunk,
    frontMatter: index === 0 ? frontMatter : '',
    isComplete: false,
    index: index,
    total: contentChunks.length
  }));
}

// 🔥 核心改进4：智能分割，保持段落和代码块完整性
function intelligentSplit(lines, maxSize) {
  const chunks = [];
  let currentChunk = [];
  let currentSize = 0;
  let inCodeBlock = false;
  let inTable = false;
  let lastHeaderIndex = -1;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lineSize = Buffer.byteLength(line, 'utf8');
    
    // 检测代码块
    if (line.trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
    }
    
    // 检测表格
    if (!inCodeBlock && line.includes('|') && line.trim().startsWith('|')) {
      inTable = true;
    } else if (inTable && !line.includes('|')) {
      inTable = false;
    }
    
    // 检测标题
    if (!inCodeBlock && line.match(/^#{1,6}\s/)) {
      lastHeaderIndex = currentChunk.length;
    }
    
    // 决定是否分割
    let shouldSplit = false;
    if (currentSize + lineSize > maxSize && !inCodeBlock && !inTable) {
      // 寻找最佳分割点
      if (line.trim() === '') {
        // 空行是理想的分割点
        shouldSplit = true;
      } else if (lastHeaderIndex > 0 && currentChunk.length - lastHeaderIndex > 10) {
        // 在最近的标题处分割（但要确保标题后有足够内容）
        shouldSplit = true;
      } else if (currentSize > maxSize * 1.2) {
        // 超过120%必须分割
        shouldSplit = true;
      }
    }
    
    if (shouldSplit && currentChunk.length > 0) {
      chunks.push(currentChunk.join('\n'));
      currentChunk = [];
      currentSize = 0;
      lastHeaderIndex = -1;
    }
    
    currentChunk.push(line);
    currentSize += lineSize;
  }
  
  // 添加最后一个块
  if (currentChunk.length > 0) {
    chunks.push(currentChunk.join('\n'));
  }
  
  return chunks.length > 0 ? chunks : [lines.join('\n')];
}

// 🔥 核心改进5：增强的提示词生成（强调缩进保持）
function generateEnhancedPrompt(targetLang, pathPrefix, isChunk = false, chunkInfo = null) {
  const langName = LANGUAGE_CONFIG[targetLang].name;
  const termsList = Object.entries(PRESERVE_TERMS)
    .map(([original, preserved]) => `- ${original} → ${preserved}`)
    .join('\n');

  let prompt = `<instruction>
你是一个专业的技术文档翻译助手。你的任务是将Markdown文档从英文翻译成${langName}。

<critical_rule>
**最重要的规则：保持格式完全一致**
1. 输出必须与输入有完全相同的行数
2. 每个[LINE_X]标记必须保持在对应行的开始
3. [LINE_X]标记后的缩进（空格或制表符）必须完全保留
4. [EMPTY_LINE]表示空行，必须保持为空行
5. 绝对不能合并或拆分任何行
6. 绝对不能改变任何行的缩进级别
</critical_rule>

<translation_rules>
1. **只翻译自然语言文本**，保持以下内容不变：
   - 所有[LINE_X]标记
   - 所有[EMPTY_LINE]标记
   - 标记后的所有缩进（空格和制表符）
   - 代码块内容（\`\`\`之间的内容）
   - 行内代码（\`之间的内容）
   - URL链接
   - HTML标签
   - 专有名词：${termsList.split('\n').slice(0, 5).join(', ')}等

2. **Front Matter处理**：
   - 只翻译title和description字段的值
   - slug字段添加前缀：${pathPrefix}

3. **缩进保持**：
   - 如果原文有缩进，译文必须保持相同的缩进
   - 列表项的缩进级别必须保持不变
   - 代码块内的缩进必须完全保留

4. **严格禁止**：
   - 添加或删除任何行
   - 改变任何缩进
   - 添加原文没有的\`\`\`代码块标记
   - 改变[LINE_X]标记的位置
</translation_rules>

<example>
输入：
[LINE_0] ## Getting Started
[LINE_1][EMPTY_LINE]
[LINE_2] This is a tutorial about:
[LINE_3]   - First item
[LINE_4]   - Second item
[LINE_5]     - Nested item

正确输出：
[LINE_0] ## 入门指南
[LINE_1][EMPTY_LINE]
[LINE_2] 这是一个关于以下内容的教程：
[LINE_3]   - 第一项
[LINE_4]   - 第二项
[LINE_5]     - 嵌套项

错误输出（绝对禁止）：
[LINE_0] ## 入门指南
[LINE_1][EMPTY_LINE]
[LINE_2] 这是一个关于以下内容的教程：
[LINE_3] - 第一项  ❌ 缩进丢失
[LINE_4] - 第二项  ❌ 缩进丢失
[LINE_5]   - 嵌套项  ❌ 缩进级别错误
</example>
</instruction>

请直接翻译以下内容，保持所有标记、缩进和格式：`;

  if (isChunk && chunkInfo) {
    prompt += `\n\n注意：这是第${chunkInfo.index + 1}/${chunkInfo.total}块。`;
  }

  return prompt;
}

// 🔥 核心改进6：验证翻译结果（包括缩进检查）
function validateTranslation(original, translated) {
  const originalLines = original.split('\n');
  const translatedLines = translated.split('\n');
  
  const issues = [];
  
  // 检查行数
  if (originalLines.length !== translatedLines.length) {
    issues.push({
      type: 'line_count',
      message: `行数不匹配: 原文${originalLines.length}行，译文${translatedLines.length}行`
    });
  }
  
  // 检查代码块标记
  const originalCodeBlocks = (original.match(/```/g) || []).length;
  const translatedCodeBlocks = (translated.match(/```/g) || []).length;
  
  if (originalCodeBlocks !== translatedCodeBlocks) {
    issues.push({
      type: 'code_blocks',
      message: `代码块标记不匹配: 原文${originalCodeBlocks}个，译文${translatedCodeBlocks}个`
    });
  }
  
  // 检查关键格式和缩进
  for (let i = 0; i < Math.min(originalLines.length, translatedLines.length); i++) {
    const origLine = originalLines[i];
    const transLine = translatedLines[i];
    
    // 检查缩进级别
    const origIndent = origLine.match(/^(\s*)/)[1].length;
    const transIndent = transLine.match(/^(\s*)/)[1].length;
    
    if (origIndent !== transIndent && origLine.trim() !== '' && transLine.trim() !== '') {
      issues.push({
        type: 'indent',
        line: i + 1,
        message: `缩进不一致: 第${i + 1}行，原文${origIndent}个空格，译文${transIndent}个空格`
      });
    }
    
    // 检查标题级别
    const origHeader = origLine.match(/^(\s*)(#{1,6})\s/);
    const transHeader = transLine.match(/^(\s*)(#{1,6})\s/);
    
    if (origHeader && (!transHeader || origHeader[2] !== transHeader[2])) {
      issues.push({
        type: 'header',
        line: i + 1,
        message: `标题格式不一致: 第${i + 1}行`
      });
    }
    
    // 检查列表标记（保持缩进后的列表标记）
    const origList = origLine.match(/^(\s*)[-*+]\s/);
    const transList = transLine.match(/^(\s*)[-*+]\s/);
    
    if (origList && !transList) {
      issues.push({
        type: 'list',
        line: i + 1,
        message: `列表格式丢失: 第${i + 1}行`
      });
    }
    
    // 检查表格分隔符
    if (origLine.includes('|') && origLine.trim().startsWith('|')) {
      if (!transLine.includes('|')) {
        issues.push({
          type: 'table',
          line: i + 1,
          message: `表格格式丢失: 第${i + 1}行`
        });
      }
    }
  }
  
  return issues;
}

// 🔥 核心改进7：增强的Claude翻译函数
async function translateWithClaude(text, targetLang, maxRetries = 3, isChunk = false, chunkInfo = null, isCategory = false) {
  const langConfig = LANGUAGE_CONFIG[targetLang];
  if (!langConfig) {
    throw new Error(`不支持的语言: ${targetLang}`);
  }
  
  // 对于category文件，使用原有逻辑
  if (isCategory) {
    const systemPrompt = generateCategoryPrompt(targetLang, langConfig.pathPrefix);
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const response = await anthropic.messages.create({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 20000,
          temperature: 0,
          system: systemPrompt,
          messages: [
            { role: 'user', content: text }
          ]
        });
        
        return response.content[0].text;
      } catch (error) {
        console.error(`❌ Category翻译失败 (尝试 ${attempt}/${maxRetries}): ${error.message}`);
        if (attempt === maxRetries) throw error;
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
  }
  
  // 对于markdown文件，使用改进的流程
  const { processed, lineMetadata, totalLines } = preprocessDocument(text);
  const systemPrompt = generateEnhancedPrompt(targetLang, langConfig.pathPrefix, isChunk, chunkInfo);
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`📡 调用Claude API (尝试 ${attempt}/${maxRetries})...`);
      
      const response = await anthropic.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 20000,
        temperature: 0,
        system: systemPrompt,
        messages: [
          { role: 'user', content: processed }
        ]
      });
      
      let translatedContent = response.content[0].text;
      
      // 后处理：移除标记并恢复缩进
      translatedContent = postprocessDocument(translatedContent, lineMetadata, totalLines);
      
      // 验证翻译结果
      const issues = validateTranslation(text, translatedContent);
      
      if (issues.length > 0) {
        console.log(`⚠️ 发现${issues.length}个格式问题:`);
        issues.forEach(issue => {
          if (issue.type === 'indent') {
            console.log(`  - ${issue.message}`);
          } else {
            console.log(`  - ${issue.message}`);
          }
        });
        
        // 如果问题太多且还有重试机会，重新翻译
        if (issues.length > 3 && attempt < maxRetries) {
          console.log(`🔄 问题较多，重新翻译...`);
          continue;
        }
      }
      
      // 处理链接
      translatedContent = processInternalLinks(translatedContent, targetLang);
      
      // 中英文混排处理
      if (targetLang === 'zh-CN') {
        translatedContent = addChineseEnglishSpacing(translatedContent);
      }
      
      console.log(`✅ 翻译成功 (尝试 ${attempt})`);
      return translatedContent;
      
    } catch (error) {
      console.error(`❌ 翻译失败 (尝试 ${attempt}/${maxRetries}): ${error.message}`);
      
      if (attempt === maxRetries) {
        throw error;
      }
      
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
}

// Category翻译prompt（保持原有）
function generateCategoryPrompt(targetLang, pathPrefix) {
  const langName = LANGUAGE_CONFIG[targetLang].name;
  const termsList = Object.entries(PRESERVE_TERMS)
    .map(([original, preserved]) => `- ${original} → ${preserved}`)
    .join('\n');

  const cleanPathPrefix = pathPrefix.startsWith('/') ? pathPrefix.slice(1) : pathPrefix;

  return `你是一个专业的技术文档翻译专家。请将以下 _category_.yml 文件从英文翻译成${langName}。

重要规则：
1. **保持YAML格式完全不变**
2. **只翻译以下字段的值**：
   - label: 标签名称
   - title: 标题
   - description: 描述
3. **不要翻译**：
   - 专有产品名称
   - 技术字段名
4. **link字段处理**：
   - slug值前添加 "${cleanPathPrefix}/" 前缀
5. **术语保护**：
${termsList}

只输出翻译后的YAML内容。`;
}

// 处理内部链接（保持原有）
function processInternalLinks(content, targetLang) {
  const langConfig = LANGUAGE_CONFIG[targetLang];
  if (!langConfig || !langConfig.pathPrefix) return content;
  
  const pathPrefix = langConfig.pathPrefix;
  
  // 处理各种链接格式
  content = content.replace(
    /https:\/\/wiki\.seeedstudio\.com\/((?!zh-CN|ja|Spanish|cn)[^#\s"')]*)/gi,
    (match, path) => {
      const cleanPath = path.startsWith('/') ? path.slice(1) : path;
      return `https://wiki.seeedstudio.com${pathPrefix}/${cleanPath}`;
    }
  );
  
  content = content.replace(
    /<a\s+([^>]*\s+)?href="(\/[^"]*)"([^>]*)>/gi, 
    (match, beforeAttrs, url, afterAttrs) => {
      if (url.startsWith('http') || url.match(/^\/(zh-CN|ja|es|cn)\//)) {
        return match;
      }
      const newUrl = pathPrefix + url;
      const before = beforeAttrs || '';
      const after = afterAttrs || '';
      return `<a ${before}href="${newUrl}"${after}>`;
    }
  );
  
  content = content.replace(
    /\[([^\]]*)\]\((\/[^)]*)\)/gi,
    (match, text, url) => {
      if (url.startsWith('http') || url.match(/^\/(zh-CN|ja|es|cn)\//)) {
        return match;
      }
      const newUrl = pathPrefix + url;
      return `[${text}](${newUrl})`;
    }
  );
  
  return content;
}

// 中英文混排处理（保持原有）
function addChineseEnglishSpacing(content) {
  content = content.replace(/([一-龯])([a-zA-Z])/g, '$1 $2');
  content = content.replace(/([a-zA-Z])([一-龯])/g, '$1 $2');
  content = content.replace(/([一-龯])(\d)/g, '$1 $2');
  content = content.replace(/(\d)([一-龯])/g, '$1 $2');
  
  return content;
}

// 检查文件是否受保护
function isProtectedPath(filePath) {
  const normalizedPath = filePath.replace(/\\/g, '/');
  
  for (const protectedPath of PROTECTED_PATHS) {
    const normalizedProtected = protectedPath.replace(/\\/g, '/');
    
    if (normalizedPath === normalizedProtected) {
      return true;
    }
    
    if (normalizedProtected.endsWith('/') && normalizedPath.startsWith(normalizedProtected)) {
      return true;
    }
  }
  
  return false;
}

// 生成目标文件路径
function generateTargetPath(originalPath, targetLang) {
  const langConfig = LANGUAGE_CONFIG[targetLang];
  const relativePath = path.relative('docs', originalPath);
  
  const parsedPath = path.parse(relativePath);
  
  if (parsedPath.base === '_category_.yml') {
    const targetPath = path.join('docs', langConfig.folder, relativePath);
    return targetPath;
  }
  
  const langPrefix = targetLang === 'zh-CN' ? 'cn_' : 
                    targetLang === 'ja' ? 'ja_' : 
                    targetLang === 'es' ? 'es_' : '';
  
  const newFileName = langPrefix + parsedPath.name + parsedPath.ext;
  const newRelativePath = path.join(parsedPath.dir, newFileName);
  
  const targetPath = path.join('docs', langConfig.folder, newRelativePath);
  
  return targetPath;
}

// 翻译_category.yml文件
async function translateCategoryFile(filePath, targetLang) {
  try {
    console.log(`📋 翻译Category文件: ${filePath} -> ${targetLang}`);
    translationStatus.total++;
    
    const content = await fs.readFile(filePath, 'utf8');
    
    const translatedContent = await translateWithClaude(
      content, 
      targetLang, 
      3, 
      false, 
      null, 
      true
    );
    
    const targetPath = generateTargetPath(filePath, targetLang);
    
    await fs.mkdir(path.dirname(targetPath), { recursive: true });
    await fs.writeFile(targetPath, translatedContent, 'utf8');
    
    console.log(`✅ Category文件翻译完成: ${targetPath}`);
    translationStatus.completed++;
    return { success: true, path: targetPath, fileType: 'category' };
    
  } catch (error) {
    console.error(`❌ Category文件翻译失败 ${filePath}:`, error.message);
    translationStatus.failed++;
    return { success: false, error: error.message, path: filePath, fileType: 'category' };
  }
}

// 翻译文档块
async function translateDocumentChunks(chunks, targetLang, filePath) {
  const langConfig = LANGUAGE_CONFIG[targetLang];
  const translatedChunks = [];
  
  console.log(`📚 开始翻译文档 ${filePath} 到 ${langConfig.name} (共${chunks.length}块)`);
  
  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    const chunkInfo = { index: i, total: chunks.length };
    
    console.log(`📄 翻译块 ${i + 1}/${chunks.length}`);
    
    try {
      let contentToTranslate;
      
      if (chunk.isComplete || (i === 0 && chunk.frontMatter)) {
        contentToTranslate = chunk.frontMatter + chunk.content;
      } else {
        contentToTranslate = chunk.content;
      }
      
      const translatedContent = await translateWithClaude(
        contentToTranslate, 
        targetLang, 
        3, 
        chunks.length > 1, 
        chunkInfo
      );
      
      translatedChunks.push(translatedContent);
      
      // API限流延迟
      if (i < chunks.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
      
    } catch (error) {
      console.error(`❌ 块 ${i + 1} 翻译失败: ${error.message}`);
      throw error;
    }
  }
  
  // 合并翻译结果
  let finalContent;
  if (chunks.length === 1) {
    finalContent = translatedChunks[0];
  } else {
    const firstChunk = translatedChunks[0];
    const otherChunks = translatedChunks.slice(1);
    
    const frontMatterMatch = firstChunk.match(/^---\n[\s\S]*?\n---\n/);
    
    if (frontMatterMatch) {
      const frontMatter = frontMatterMatch[0];
      const firstContent = firstChunk.replace(frontMatterMatch[0], '').trim();
      
      finalContent = frontMatter + '\n' + firstContent;
      if (otherChunks.length > 0) {
        finalContent += '\n\n' + otherChunks.join('\n\n');
      }
    } else {
      finalContent = translatedChunks.join('\n\n');
    }
  }
  
  return finalContent;
}

// 处理文件翻译
async function translateFile(filePath, targetLang) {
  try {
    if (isProtectedPath(filePath)) {
      console.log(`🛡️ 文件受保护，跳过翻译: ${filePath}`);
      translationStatus.protected++;
      return { success: true, path: filePath, action: 'protected' };
    }
    
    if (filePath.endsWith('_category_.yml')) {
      return await translateCategoryFile(filePath, targetLang);
    }
    
    console.log(`📝 翻译文件: ${filePath} -> ${targetLang}`);
    translationStatus.total++;
    
    const content = await fs.readFile(filePath, 'utf8');
    console.log(`🔍 文件大小: ${content.length} 字符`);
    
    // 使用智能分块
    const chunks = smartChunkDocument(content, 10000);
    console.log(`📦 文档分为 ${chunks.length} 块`);
    
    const translatedContent = await translateDocumentChunks(chunks, targetLang, filePath);
    
    const targetPath = generateTargetPath(filePath, targetLang);
    
    await fs.mkdir(path.dirname(targetPath), { recursive: true });
    await fs.writeFile(targetPath, translatedContent, 'utf8');
    
    console.log(`✅ 文件翻译完成: ${targetPath}`);
    translationStatus.completed++;
    return { success: true, path: targetPath };
    
  } catch (error) {
    console.error(`❌ 文件翻译失败 ${filePath}:`, error.message);
    translationStatus.failed++;
    return { success: false, error: error.message, path: filePath };
  }
}

// 其他辅助函数（检测文件操作、移动、删除等）保持不变...
// 为了篇幅，这里省略了其他未修改的函数

// 检测文件操作
async function detectFileOperations(baseSha) {
  try {
    console.log(`🔍 检测文件操作 (基于 ${baseSha})...`);
    
    const statusOutput = execSync(
      `git diff --name-status ${baseSha}..HEAD -- docs/`,
      { encoding: 'utf8' }
    );
    
    const operations = {
      added: [],
      modified: [],
      deleted: [],
      renamed: [],
      renamedAndModified: []
    };
    
    const lines = statusOutput.split('\n').filter(line => line.trim());
    
    for (const line of lines) {
      const parts = line.split('\t');
      const status = parts[0];
      const file = parts[1];
      
      if ((!file.match(/\.(md|mdx)$/) && !file.endsWith('_category_.yml')) || 
          file.match(/\/(zh-CN|ja|Spanish)\//)) {
        continue;
      }
      
      if (status === 'A') {
        operations.added.push(file);
      } else if (status === 'M') {
        operations.modified.push(file);
      } else if (status === 'D') {
        operations.deleted.push(file);
      } else if (status.startsWith('R')) {
        const oldFile = file;
        const newFile = parts[2];
        
        const similarity = status.match(/R(\d+)/);
        const similarityScore = similarity ? parseInt(similarity[1]) : 100;
        
        if (similarityScore < 100) {
          operations.renamedAndModified.push({ from: oldFile, to: newFile, similarity: similarityScore });
        } else {
          operations.renamed.push({ from: oldFile, to: newFile });
        }
      }
    }
    
    console.log(`📊 文件操作统计:`);
    console.log(`  新增: ${operations.added.length} 个`);
    console.log(`  修改: ${operations.modified.length} 个`);
    console.log(`  删除: ${operations.deleted.length} 个`);
    console.log(`  移动: ${operations.renamed.length} 个`);
    console.log(`  移动+修改: ${operations.renamedAndModified.length} 个`);
    
    return operations;
    
  } catch (error) {
    console.warn(`⚠️ 检测文件操作失败: ${error.message}`);
    return null;
  }
}

// 处理重命名+修改的文件
async function translateRenamedAndModifiedFile(oldPath, newPath, targetLang) {
  try {
    console.log(`🔄 处理重命名+修改文件: ${oldPath} -> ${newPath} (${targetLang})`);
    
    if (isProtectedPath(oldPath) || isProtectedPath(newPath)) {
      console.log(`🛡️ 文件受保护，跳过处理`);
      translationStatus.protected++;
      return { success: true, path: newPath, action: 'protected' };
    }
    
    const oldTargetPath = generateTargetPath(oldPath, targetLang);
    try {
      await fs.access(oldTargetPath);
      await fs.unlink(oldTargetPath);
      console.log(`🗑️ 已删除旧翻译文件: ${oldTargetPath}`);
    } catch (error) {
      console.log(`ℹ️ 旧翻译文件不存在: ${oldTargetPath}`);
    }
    
    const result = await translateFile(newPath, targetLang);
    
    if (result.success) {
      result.action = 'renamed_and_retranslated';
    }
    
    return result;
    
  } catch (error) {
    console.error(`❌ 处理重命名+修改文件失败: ${error.message}`);
    return { success: false, error: error.message, path: newPath };
  }
}

// 处理文件移动
async function moveTranslationFile(oldPath, newPath, targetLang) {
  try {
    if (isProtectedPath(oldPath) || isProtectedPath(newPath)) {
      console.log(`🛡️ 文件受保护，跳过移动`);
      translationStatus.protected++;
      return { success: true, path: newPath, action: 'protected' };
    }
    
    console.log(`📁 移动翻译文件: ${oldPath} -> ${newPath} (${targetLang})`);
    
    const oldTargetPath = generateTargetPath(oldPath, targetLang);
    const newTargetPath = generateTargetPath(newPath, targetLang);
    
    try {
      await fs.access(oldTargetPath);
      await fs.mkdir(path.dirname(newTargetPath), { recursive: true });
      await fs.rename(oldTargetPath, newTargetPath);
      
      console.log(`✅ 翻译文件移动完成`);
      translationStatus.moved++;
      
      return { success: true, path: newTargetPath, action: 'moved' };
    } catch (error) {
      console.log(`ℹ️ 原翻译文件不存在，跳过移动`);
      return { success: true, path: newTargetPath, action: 'skipped' };
    }
    
  } catch (error) {
    console.error(`❌ 移动翻译文件失败: ${error.message}`);
    return { success: false, error: error.message, path: oldPath };
  }
}

// 处理文件删除
async function deleteTranslationFile(filePath, targetLang) {
  try {
    if (isProtectedPath(filePath)) {
      console.log(`🛡️ 文件受保护，跳过删除`);
      translationStatus.protected++;
      return { success: true, path: filePath, action: 'protected' };
    }
    
    console.log(`🗑️ 删除翻译文件: ${filePath} (${targetLang})`);
    
    const targetPath = generateTargetPath(filePath, targetLang);
    
    try {
      await fs.access(targetPath);
      await fs.unlink(targetPath);
      
      console.log(`✅ 翻译文件删除完成`);
      translationStatus.deleted++;
      
      return { success: true, path: targetPath, action: 'deleted' };
    } catch (error) {
      console.log(`ℹ️ 翻译文件不存在，跳过删除`);
      return { success: true, path: targetPath, action: 'skipped' };
    }
    
  } catch (error) {
    console.error(`❌ 删除翻译文件失败: ${error.message}`);
    return { success: false, error: error.message, path: filePath };
  }
}

// 生成进度报告
function generateProgressReport(languages, results) {
  const successCount = results.filter(r => r.success).length;
  const failCount = results.filter(r => !r.success).length;
  
  let report = `## 📊 翻译完成报告\n\n`;
  report += `**目标语言:** ${languages.map(l => LANGUAGE_CONFIG[l]?.name || l).join(', ')}\n`;
  report += `**处理时间:** ${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}\n\n`;
  report += `**统计信息:**\n`;
  report += `- ✅ 成功: ${successCount}\n`;
  report += `- ❌ 失败: ${failCount}\n`;
  report += `- 📊 总计: ${successCount + failCount}\n\n`;
  
  if (results.some(r => r.success)) {
    report += `**成功处理的文件:**\n`;
    results.filter(r => r.success).forEach(r => {
      report += `- ${r.path}\n`;
    });
    report += '\n';
  }
  
  if (results.some(r => !r.success)) {
    report += `**处理失败的文件:**\n`;
    results.filter(r => !r.success).forEach(r => {
      report += `- ❌ ${r.path}: ${r.error}\n`;
    });
  }
  
  return report;
}

// 主函数
async function main() {
  const languages = process.env.TARGET_LANGUAGES ? process.env.TARGET_LANGUAGES.split(' ') : [];
  const baseSha = process.env.BASE_SHA;
  
  console.log('🌍 开始翻译任务...');
  console.log('目标语言:', languages);
  
  if (!process.env.TRANSLATION_API_KEY) {
    console.error('❌ 缺少TRANSLATION_API_KEY环境变量');
    process.exit(1);
  }
  
  if (!baseSha) {
    console.error('❌ 缺少BASE_SHA环境变量');
    process.exit(1);
  }
  
  const operations = await detectFileOperations(baseSha);
  if (!operations) {
    console.error('❌ 无法检测文件操作');
    process.exit(1);
  }
  
  const allResults = [];
  
  for (const lang of languages) {
    if (!LANGUAGE_CONFIG[lang]) {
      console.log(`⚠️ 跳过未知语言: ${lang}`);
      continue;
    }
    
    const langConfig = LANGUAGE_CONFIG[lang];
    console.log(`\n📄 开始处理 ${langConfig.name}...`);
    
    // 处理新增和修改的文件
    const filesToTranslate = [...operations.added, ...operations.modified];
    for (const file of filesToTranslate) {
      const result = await translateFile(file, lang);
      allResults.push(result);
    }
    
    // 处理重命名+修改
    for (const rename of operations.renamedAndModified) {
      const result = await translateRenamedAndModifiedFile(rename.from, rename.to, lang);
      allResults.push(result);
    }
    
    // 处理纯重命名
    for (const rename of operations.renamed) {
      const result = await moveTranslationFile(rename.from, rename.to, lang);
      allResults.push(result);
    }
    
    // 处理删除
    for (const file of operations.deleted) {
      const result = await deleteTranslationFile(file, lang);
      allResults.push(result);
    }
  }
  
  const report = generateProgressReport(languages, allResults);
  console.log('\n' + report);
  
  await fs.writeFile('/tmp/translation-report.md', report, 'utf8');
  
  const hasChanges = allResults.some(r => r.success && 
    (r.action === 'translated' || r.action === 'renamed_and_retranslated' || !r.action));
  
  if (hasChanges) {
    console.log('\n🚀 设置触发其他工作流标志...');
    await fs.writeFile('/tmp/trigger-deploy.txt', 'true', 'utf8');
  }
  
  if (allResults.some(r => !r.success)) {
    console.log('⚠️ 部分操作失败');
    process.exit(1);
  }
  
  console.log('\n🎉 翻译任务完成！');
}

// 异常处理
process.on('unhandledRejection', (reason, promise) => {
  console.error('未处理的Promise拒绝:', reason);
  process.exit(1);
});

process.on('uncaughtException', (error) => {
  console.error('未捕获的异常:', error);
  process.exit(1);
});

main().catch(error => {
  console.error('❌ 翻译任务失败:', error);
  process.exit(1);
});