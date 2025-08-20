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

// 估算token数量 - 使用字节数更准确
function estimateTokens(text) {
  return Math.ceil(text.length * 0.75);
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

// 检测文件操作类型
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
          console.log(`📝 检测到重命名+修改: ${oldFile} -> ${newFile} (相似度: ${similarityScore}%)`);
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

// 🔧 改进的分块函数 - 参考用户的逻辑
function chunkDocument(content, maxChunkSize = 10000) {
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
  
  // 处理正文内容 - 使用改进的分块策略
  const contentLines = lines.slice(contentStartIndex);
  const contentChunks = splitMarkdownContent(contentLines.join('\n'), maxChunkSize);
  
  // 如果没有分块或只有一块
  if (contentChunks.length <= 1) {
    return [{
      content: content,
      frontMatter: '',
      isComplete: true,
      index: 0,
      total: 1
    }];
  }
  
  console.log(`📦 文档分为 ${contentChunks.length} 块，各块大小: ${contentChunks.map(c => Math.ceil(c.length * 0.75)).join(', ')} tokens`);
  
  return contentChunks.map((chunk, index) => ({
    content: chunk,
    frontMatter: index === 0 ? frontMatter : '',
    isComplete: false,
    index: index,
    total: contentChunks.length
  }));
}

// 🔧 参考用户代码的分块函数
function splitMarkdownContent(content, chunkSize = 10000) {
  const lines = content.split('\n');
  const chunks = [];
  let currentChunk = [];
  let currentLength = 0;
  
  // 状态追踪
  let inCodeBlock = false;
  let inHtmlTable = false;
  let codeBlockFenceType = null;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // 检查代码块边界
    if (!inCodeBlock && (line.trim().startsWith('```') || line.trim().startsWith('~~~'))) {
      inCodeBlock = true;
      codeBlockFenceType = line.trim().substring(0, 3);
      console.log(`🔒 代码块开始于第 ${i} 行: ${line.trim()}`);
    } else if (inCodeBlock && line.trim().startsWith(codeBlockFenceType)) {
      inCodeBlock = false;
      codeBlockFenceType = null;
      console.log(`🔓 代码块结束于第 ${i} 行: ${line.trim()}`);
    }
    
    // 检查HTML表格边界
    if (!inCodeBlock) {
      if (line.toLowerCase().includes('<table')) {
        inHtmlTable = true;
      } else if (line.toLowerCase().includes('</table>')) {
        inHtmlTable = false;
      }
    }
    
    const lineLength = Buffer.byteLength(line, 'utf8');
    
    // 分割策略
    let shouldSplit = false;
    if (!inCodeBlock && !inHtmlTable && currentChunk.length > 0) {
      // 在大标题处分割（# 或 ##）
      if (line.trim().startsWith('#') && !line.trim().startsWith('###')) {
        shouldSplit = currentLength > chunkSize * 0.5;
      }
      // 在达到大小限制时分割
      else if (currentLength + lineLength > chunkSize) {
        // 寻找合适的分割点：空行后的非空行
        if (!line.trim() || (i > 0 && !lines[i-1].trim())) {
          shouldSplit = true;
        }
        // 如果找不到好的分割点，强制分割
        else if (currentLength > chunkSize * 1.2) {
          shouldSplit = true;
        }
      }
    }
    
    // 执行分割
    if (shouldSplit) {
      const chunkText = currentChunk.join('\n');
      chunks.push(chunkText);
      console.log(`📦 分块: ${Math.ceil(chunkText.length * 0.75)} tokens`);
      currentChunk = [];
      currentLength = 0;
    }
    
    currentChunk.push(line);
    currentLength += lineLength;
  }
  
  // 添加最后一个块
  if (currentChunk.length > 0) {
    const chunkText = currentChunk.join('\n');
    chunks.push(chunkText);
    console.log(`📦 最后分块: ${Math.ceil(chunkText.length * 0.75)} tokens`);
  }
  
  return chunks.length > 0 ? chunks : [content];
}

// 生成_category.yml翻译prompt
function generateCategoryPrompt(targetLang, pathPrefix) {
  const langName = LANGUAGE_CONFIG[targetLang].name;
  const termsList = Object.entries(PRESERVE_TERMS)
    .map(([original, preserved]) => `- ${original} → ${preserved}`)
    .join('\n');

  const cleanPathPrefix = pathPrefix.startsWith('/') ? pathPrefix.slice(1) : pathPrefix;

  return `你是一个专业的技术文档翻译专家。请将以下 _category_.yml 文件从英文翻译成${langName}。

重要规则：
1. **保持YAML格式完全不变**：缩进、冒号、引号等格式必须完全保持
2. **只翻译以下字段的值**：
   - label: 标签名称（如果不是专有产品名）
   - title: 标题
   - description: 描述
   - 注释内容（# 开头的行）
3. **不要翻译以下内容**：
   - 专有产品名称和品牌名
   - 数字、布尔值、技术参数
   - position、collapsible、collapsed、className等字段名
   - type、slug等技术字段
4. **link字段特殊处理**：
   - 如果有slug字段，在其值前添加 "${cleanPathPrefix}/" 前缀
   - 例如：slug: applications → slug: ${cleanPathPrefix}/applications
   - 翻译title和description字段的值
5. **术语保护**（保持不变）：
${termsList}
6. **换行保持**：确保输出的换行结构与输入完全一致

请只输出翻译后的YAML内容，不要添加任何解释。`;
}

// 🔧 增强的提示词 - 用具体例子说明换行保持
function generatePrompt(targetLang, pathPrefix, isChunk = false, chunkInfo = null) {
  const langName = LANGUAGE_CONFIG[targetLang].name;
  const termsList = Object.entries(PRESERVE_TERMS)
    .map(([original, preserved]) => `- ${original} → ${preserved}`)
    .join('\n');

  let prompt = `# 技术文档翻译指令

你是专业的技术文档翻译助手。请将以下Markdown文档翻译为${langName}。

## 🚨 换行格式保持（最重要）

**绝对规则**：输出必须与输入有完全相同的行数和换行位置。

**正确示例**：
输入：
\`\`\`
## Getting Started

This is a tutorial about XIAO.
It covers basic usage.
\`\`\`

输出：
\`\`\`
## 入门指南

这是关于 XIAO 的教程。
它涵盖了基本用法。
\`\`\`

**错误示例（绝对禁止）**：
❌ 合并行：
\`\`\`
## 入门指南
这是关于 XIAO 的教程。它涵盖了基本用法。
\`\`\`

❌ 拆分行：
\`\`\`
## 入门指南

这是关于 XIAO 的教程。
它涵盖了
基本用法。
\`\`\`

## 📝 翻译规则

### Front Matter处理
**只翻译这些字段的值**：
- title: [翻译内容]
- description: [翻译内容]

**这些字段保持不变**：
- keywords: [不翻译]
- slug: ${pathPrefix}[原始值] 
- last_update: [完全不变]
- image: [不翻译]

### 正文翻译
- 只翻译自然语言文本
- 专有名词保持不变：${termsList.split('\n').slice(0, 3).join(', ')}等
- 代码块（\`\`\`包围）内容不翻译
- 行内代码（\`包围）不翻译  
- HTML标签不翻译
- URL链接不翻译

## 🔒 格式保护

**表格格式**：
- Markdown表格（|格式）→ 保持Markdown
- HTML表格（<table>）→ 保持HTML

**代码格式**：
- 原文有\`\`\`就保持\`\`\`
- 原文没有\`\`\`就不要添加\`\`\`
- **不要给普通HTML内容添加\`\`\`html代码块**

## ❌ 严格禁止

1. 合并任何两行内容
2. 拆分任何一行内容  
3. 添加原文没有的\`\`\`代码块标记
4. 省略任何内容
5. 改变段落顺序

## 📋 翻译前检查

- [ ] 我将保持输入输出行数完全一致
- [ ] 我不会添加多余的代码块标记
- [ ] 我只翻译自然语言部分

---

**开始翻译**：`;

  if (isChunk && chunkInfo) {
    prompt += `

## 📄 分块信息
- 当前：第${chunkInfo.index + 1}块，共${chunkInfo.total}块
- 保持此块的完整格式`;
  }

  return prompt;
}

// 🔧 新增：换行验证和修复函数
function validateAndFixLineBreaks(translatedContent, originalContent) {
  const originalLines = originalContent.split('\n');
  const translatedLines = translatedContent.split('\n');
  
  console.log(`📏 行数检查: 原文 ${originalLines.length} 行, 译文 ${translatedLines.length} 行`);
  
  // 如果行数一致，直接返回
  if (originalLines.length === translatedLines.length) {
    console.log('✅ 行数一致，无需修复');
    return translatedContent;
  }
  
  // 如果行数不一致，尝试智能修复
  console.log('🔧 检测到行数不一致，尝试修复...');
  
  const fixedLines = [];
  let translatedIndex = 0;
  
  for (let i = 0; i < originalLines.length; i++) {
    const originalLine = originalLines[i];
    
    if (translatedIndex >= translatedLines.length) {
      // 译文行数不够，可能被合并了
      console.log(`⚠️ 译文行数不足，原文第${i+1}行可能丢失`);
      fixedLines.push(originalLine); // 暂时用原文
      continue;
    }
    
    const translatedLine = translatedLines[translatedIndex];
    
    // 如果是空行，直接保持
    if (originalLine.trim() === '') {
      fixedLines.push('');
      translatedIndex++;
      continue;
    }
    
    // 如果是标题行，保持格式
    if (originalLine.match(/^#+\s/)) {
      if (translatedLine.match(/^#+\s/)) {
        fixedLines.push(translatedLine);
        translatedIndex++;
      } else {
        // 译文标题格式错误，需要修复
        const level = originalLine.match(/^(#+)/)[1];
        const translatedTitle = translatedLine.replace(/^#+\s*/, '');
        fixedLines.push(`${level} ${translatedTitle}`);
        translatedIndex++;
      }
      continue;
    }
    
    // 检查是否有行被合并
    if (translatedLine.length > originalLine.length * 2) {
      // 可能多行被合并，尝试拆分
      const sentences = translatedLine.split(/[。！？]/);
      if (sentences.length > 1) {
        console.log(`🔧 修复可能的行合并: "${translatedLine.substring(0, 50)}..."`);
        for (let j = 0; j < sentences.length && j < 3; j++) {
          if (sentences[j].trim()) {
            fixedLines.push(sentences[j].trim() + (j < sentences.length - 1 ? '。' : ''));
          }
        }
      } else {
        fixedLines.push(translatedLine);
      }
      translatedIndex++;
      continue;
    }
    
    // 正常情况
    fixedLines.push(translatedLine);
    translatedIndex++;
  }
  
  const result = fixedLines.join('\n');
  const resultLines = result.split('\n');
  
  console.log(`🔧 修复后行数: ${resultLines.length} 行`);
  
  if (resultLines.length === originalLines.length) {
    console.log('✅ 修复成功');
  } else {
    console.log('⚠️ 修复不完全，可能需要重新翻译');
  }
  
  return result;
}

// 🔧 新增：清理多余代码块标记
function cleanExtraCodeBlocks(content, originalContent) {
  console.log('🧹 清理多余的代码块标记...');
  
  let cleaned = content;
  
  // 1. 移除错误添加的HTML代码块
  // 如果原文没有```html，但译文有，则移除
  if (!originalContent.includes('```html') && cleaned.includes('```html')) {
    console.log('🔧 移除多余的 ```html 代码块');
    cleaned = cleaned.replace(/```html\s*\n([\s\S]*?)\n```/g, '$1');
  }
  
  // 2. 移除错误添加的其他代码块（如果原文对应位置没有）
  const originalCodeBlocks = (originalContent.match(/```/g) || []).length;
  const translatedCodeBlocks = (cleaned.match(/```/g) || []).length;
  
  if (translatedCodeBlocks > originalCodeBlocks) {
    console.log(`🔧 检测到多余的代码块标记: 原文${originalCodeBlocks/2}个，译文${translatedCodeBlocks/2}个`);
    
    // 查找并移除多余的代码块
    const lines = cleaned.split('\n');
    const originalLines = originalContent.split('\n');
    const fixedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const originalLine = i < originalLines.length ? originalLines[i] : '';
      
      // 如果译文有```但原文没有，考虑移除
      if (line.includes('```') && !originalLine.includes('```')) {
        // 检查这是否是错误添加的代码块开始
        if (line.trim() === '```html' || line.trim() === '```') {
          console.log(`🔧 移除第${i+1}行多余的代码块标记: ${line}`);
          continue; // 跳过这行
        }
      }
      
      fixedLines.push(line);
    }
    
    cleaned = fixedLines.join('\n');
  }
  
  // 3. 修复代码块配对问题
  const codeBlockCount = (cleaned.match(/```/g) || []).length;
  if (codeBlockCount % 2 !== 0) {
    console.log('🔧 修复代码块配对问题');
    // 简单处理：如果是奇数个```，移除最后一个
    const lastIndex = cleaned.lastIndexOf('```');
    if (lastIndex !== -1) {
      cleaned = cleaned.substring(0, lastIndex) + cleaned.substring(lastIndex + 3);
    }
  }
  
  console.log('✅ 代码块清理完成');
  return cleaned;
}

// 处理内部链接和seeedstudio.com链接
function processInternalLinks(content, targetLang) {
  const langConfig = LANGUAGE_CONFIG[targetLang];
  if (!langConfig || !langConfig.pathPrefix) return content;
  
  const pathPrefix = langConfig.pathPrefix;
  
  // 处理 seeedstudio.com wiki 链接
  content = content.replace(
    /https:\/\/wiki\.seeedstudio\.com\/((?!zh-CN|ja|Spanish|cn)[^#\s"')]*)/gi,
    (match, path) => {
      const cleanPath = path.startsWith('/') ? path.slice(1) : path;
      return `https://wiki.seeedstudio.com${pathPrefix}/${cleanPath}`;
    }
  );
  
  // 处理 HTML 格式的相对路径链接
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
  
  // 处理 Markdown 格式的相对路径链接
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

// 中英文混排处理
function addChineseEnglishSpacing(content) {
  content = content.replace(/([一-龯])([a-zA-Z])/g, '$1 $2');
  content = content.replace(/([a-zA-Z])([一-龯])/g, '$1 $2');
  content = content.replace(/([一-龯])(\d)/g, '$1 $2');
  content = content.replace(/(\d)([一-龯])/g, '$1 $2');
  content = content.replace(/([一-龯])\s+([a-zA-Z])/g, '$1 $2');
  content = content.replace(/([a-zA-Z])\s+([一-龯])/g, '$1 $2');
  content = content.replace(/([一-龯])\s+(\d)/g, '$1 $2');
  content = content.replace(/(\d)\s+([一-龯])/g, '$1 $2');
  
  return content;
}

// 🔧 简化的Claude翻译函数
async function translateWithClaude(text, targetLang, maxRetries = 3, isChunk = false, chunkInfo = null, isCategory = false) {
  const langConfig = LANGUAGE_CONFIG[targetLang];
  if (!langConfig) {
    throw new Error(`不支持的语言: ${targetLang}`);
  }
  
  // 选择合适的prompt
  const systemPrompt = isCategory ? 
    generateCategoryPrompt(targetLang, langConfig.pathPrefix) :
    generatePrompt(targetLang, langConfig.pathPrefix, isChunk, chunkInfo);
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`📡 调用Claude API (尝试 ${attempt}/${maxRetries})${isCategory ? ' [Category]' : ''}...`);
      
      const response = await anthropic.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 20000,
        temperature: 0,
        system: systemPrompt,
        messages: [
          { role: 'user', content: text }
        ]
      });
      
      let translatedContent = response.content[0].text;
      
      // 对非category文件进行格式验证和修复
      if (!isCategory) {
        // 🔧 1. 换行验证和修复
        const originalLines = text.split('\n');
        const translatedLines = translatedContent.split('\n');
        
        console.log(`📏 行数检查: 原文 ${originalLines.length} 行, 译文 ${translatedLines.length} 行`);
        
        // 如果行数不一致，先尝试修复
        if (Math.abs(originalLines.length - translatedLines.length) > 2) {
          console.log(`⚠️ 行数差异较大，尝试修复...`);
          translatedContent = validateAndFixLineBreaks(translatedContent, text);
          
          // 修复后如果还是不行且还有重试机会，重新翻译
          const fixedLines = translatedContent.split('\n');
          if (Math.abs(originalLines.length - fixedLines.length) > 3 && attempt < maxRetries) {
            console.log(`🔄 修复效果不佳，重新翻译 (尝试 ${attempt + 1}/${maxRetries})`);
            continue;
          }
        }
        
        // 🔧 2. 清理多余的代码块标记
        translatedContent = cleanExtraCodeBlocks(translatedContent, text);
        
        // 🔧 3. 检查代码块标记是否被破坏
        let codeBlockErrors = 0;
        for (let i = 0; i < Math.min(originalLines.length, translatedContent.split('\n').length); i++) {
          const origLine = originalLines[i];
          const transLine = translatedContent.split('\n')[i];
          
          if (origLine && transLine && origLine.includes('```') && !transLine.includes('```')) {
            console.log(`🚨 第${i+1}行代码块标记被破坏: "${origLine}" → "${transLine}"`);
            codeBlockErrors++;
          }
        }
        
        if (codeBlockErrors > 0 && attempt < maxRetries) {
          console.log(`🔄 发现 ${codeBlockErrors} 个代码块错误，重新翻译`);
          continue;
        }
        
        // 处理链接
        translatedContent = processInternalLinks(translatedContent, targetLang);
        
        // 中英文混排处理
        if (targetLang === 'zh-CN') {
          translatedContent = addChineseEnglishSpacing(translatedContent);
        }
      }
      
      console.log(`✅ Claude翻译成功 (尝试 ${attempt})`);
      return translatedContent;
      
    } catch (error) {
      console.error(`❌ Claude翻译失败 (尝试 ${attempt}/${maxRetries}): ${error.message}`);
      
      if (attempt === maxRetries) {
        const errorInfo = {
          error: error.message,
          attempt: attempt,
          textLength: text.length,
          estimatedTokens: estimateTokens(text),
          targetLang: targetLang
        };
        translationStatus.errors.push(errorInfo);
        throw new Error(`Claude翻译失败 (${maxRetries}次尝试): ${error.message}`);
      }
      
      const delay = Math.pow(2, attempt) * 1000;
      console.log(`⏳ 等待 ${delay}ms 后重试...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
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
    
    const chunkTokens = estimateTokens(chunk.content);
    console.log(`📄 翻译块 ${i + 1}/${chunks.length} (${chunkTokens} tokens)`);
    
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
      translationStatus.completed++;
      
      // API限流延迟
      if (i < chunks.length - 1) {
        console.log('⏳ API限流延迟 2秒...');
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
      
    } catch (error) {
      console.error(`❌ 块 ${i + 1} 翻译失败: ${error.message}`);
      translationStatus.failed++;
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

// 翻译_category.yml文件
async function translateCategoryFile(filePath, targetLang) {
  try {
    console.log(`📋 翻译Category文件: ${filePath} -> ${targetLang}`);
    translationStatus.total++;
    
    const content = await fs.readFile(filePath, 'utf8');
    console.log(`🔍 文件大小: ${content.length} 字符`);
    
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
    return { success: true, path: targetPath, fileType: 'category' };
    
  } catch (error) {
    console.error(`❌ Category文件翻译失败 ${filePath}:`, error.message);
    translationStatus.failed++;
    return { success: false, error: error.message, path: filePath, fileType: 'category' };
  }
}

// 处理文件翻译（支持md和_category.yml）
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
    console.log(`🔍 文件大小: ${content.length} 字符 (约 ${estimateTokens(content)} tokens)`);
    
    // 分块处理 - 使用更小的分块尺寸
    const chunks = chunkDocument(content, 10000);  // 降低到10000字节
    console.log(`📦 文档分为 ${chunks.length} 块`);
    
    const translatedContent = await translateDocumentChunks(chunks, targetLang, filePath);
    
    const targetPath = generateTargetPath(filePath, targetLang);
    
    await fs.mkdir(path.dirname(targetPath), { recursive: true });
    await fs.writeFile(targetPath, translatedContent, 'utf8');
    
    console.log(`✅ 文件翻译完成: ${targetPath}`);
    return { success: true, path: targetPath };
    
  } catch (error) {
    console.error(`❌ 文件翻译失败 ${filePath}:`, error.message);
    translationStatus.failed++;
    return { success: false, error: error.message, path: filePath };
  }
}

// 处理重命名+修改的文件
async function translateRenamedAndModifiedFile(oldPath, newPath, targetLang) {
  try {
    console.log(`🔄 处理重命名+修改文件: ${oldPath} -> ${newPath} (${targetLang})`);
    
    if (isProtectedPath(oldPath) || isProtectedPath(newPath)) {
      console.log(`🛡️ 文件受保护，跳过处理: ${oldPath} -> ${newPath}`);
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
      console.log(`✅ 重命名+修改文件处理完成: ${newPath}`);
    }
    
    return result;
    
  } catch (error) {
    console.error(`❌ 处理重命名+修改文件失败: ${error.message}`);
    return { success: false, error: error.message, path: newPath, action: 'rename_modify_failed' };
  }
}

// 处理文件移动
async function moveTranslationFile(oldPath, newPath, targetLang) {
  try {
    if (isProtectedPath(oldPath) || isProtectedPath(newPath)) {
      console.log(`🛡️ 文件受保护，跳过移动: ${oldPath} -> ${newPath}`);
      translationStatus.protected++;
      return { success: true, path: newPath, action: 'protected' };
    }
    
    console.log(`📁 移动翻译文件: ${oldPath} -> ${newPath} (${targetLang})`);
    
    const oldTargetPath = generateTargetPath(oldPath, targetLang);
    const newTargetPath = generateTargetPath(newPath, targetLang);
    
    try {
      await fs.access(oldTargetPath);
    } catch (error) {
      console.log(`ℹ️ 原翻译文件不存在，跳过移动: ${oldTargetPath}`);
      return { success: true, path: newTargetPath, action: 'skipped' };
    }
    
    await fs.mkdir(path.dirname(newTargetPath), { recursive: true });
    await fs.rename(oldTargetPath, newTargetPath);
    
    try {
      await fs.rmdir(path.dirname(oldTargetPath));
    } catch (error) {
      // 目录不为空，忽略错误
    }
    
    console.log(`✅ 翻译文件移动完成: ${oldTargetPath} -> ${newTargetPath}`);
    translationStatus.moved++;
    
    return { success: true, path: newTargetPath, action: 'moved' };
    
  } catch (error) {
    console.error(`❌ 移动翻译文件失败: ${error.message}`);
    return { success: false, error: error.message, path: oldPath, action: 'move_failed' };
  }
}

// 处理文件删除
async function deleteTranslationFile(filePath, targetLang) {
  try {
    if (isProtectedPath(filePath)) {
      console.log(`🛡️ 文件受保护，跳过删除: ${filePath}`);
      translationStatus.protected++;
      return { success: true, path: filePath, action: 'protected' };
    }
    
    console.log(`🗑️ 删除翻译文件: ${filePath} (${targetLang})`);
    
    const targetPath = generateTargetPath(filePath, targetLang);
    
    try {
      await fs.access(targetPath);
    } catch (error) {
      console.log(`ℹ️ 翻译文件不存在，跳过删除: ${targetPath}`);
      return { success: true, path: targetPath, action: 'skipped' };
    }
    
    await fs.unlink(targetPath);
    
    try {
      await fs.rmdir(path.dirname(targetPath));
    } catch (error) {
      // 目录不为空，忽略错误
    }
    
    console.log(`✅ 翻译文件删除完成: ${targetPath}`);
    translationStatus.deleted++;
    
    return { success: true, path: targetPath, action: 'deleted' };
    
  } catch (error) {
    console.error(`❌ 删除翻译文件失败: ${error.message}`);
    return { success: false, error: error.message, path: filePath, action: 'delete_failed' };
  }
}

// 生成进度报告
function generateProgressReport(languages, results) {
  const successCount = results.filter(r => r.success).length;
  const failCount = results.filter(r => !r.success).length;
  const translatedCount = results.filter(r => r.success && (r.action === 'translated' || !r.action)).length;
  const categoryCount = results.filter(r => r.success && r.fileType === 'category').length;
  const movedCount = results.filter(r => r.success && r.action === 'moved').length;
  const deletedCount = results.filter(r => r.success && r.action === 'deleted').length;
  const renamedAndModifiedCount = results.filter(r => r.success && r.action === 'renamed_and_retranslated').length;
  const protectedCount = results.filter(r => r.success && r.action === 'protected').length;
  
  let report = `## 📊 翻译完成报告\n\n`;
  report += `**目标语言:** ${languages.map(l => LANGUAGE_CONFIG[l]?.name || l).join(', ')}\n`;
  report += `**处理时间:** ${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}\n\n`;
  report += `**统计信息:**\n`;
  report += `- ✅ 成功: ${successCount}\n`;
  report += `- ❌ 失败: ${failCount}\n`;
  report += `- 📊 总计: ${successCount + failCount}\n`;
  report += `- 📝 文档翻译: ${translatedCount}\n`;
  report += `- 📋 Category翻译: ${categoryCount}\n`;
  report += `- 📁 纯移动: ${movedCount}\n`;
  report += `- 🔄 移动+重译: ${renamedAndModifiedCount}\n`;
  report += `- 🗑️ 删除: ${deletedCount}\n`;
  report += `- 🛡️ 保护跳过: ${protectedCount}\n`;
  report += '\n';
  
  if (results.some(r => r.success)) {
    report += `**成功处理的文件:**\n`;
    results.filter(r => r.success).forEach(r => {
      let icon = '📝';
      if (r.fileType === 'category') icon = '📋';
      else if (r.action === 'moved') icon = '📁';
      else if (r.action === 'renamed_and_retranslated') icon = '🔄';
      else if (r.action === 'deleted') icon = '🗑️';
      else if (r.action === 'protected') icon = '🛡️';
      else if (r.action === 'skipped') icon = 'ℹ️';
      
      report += `- ${icon} ${r.path}`;
      if (r.action && r.action !== 'translated') {
        report += ` (${r.action})`;
      }
      if (r.fileType === 'category') {
        report += ` [Category]`;
      }
      report += '\n';
    });
    report += '\n';
  }
  
  if (results.some(r => !r.success)) {
    report += `**处理失败的文件:**\n`;
    results.filter(r => !r.success).forEach(r => {
      report += `- ❌ ${r.path}: ${r.error}\n`;
    });
    report += '\n';
  }
  
  if (translationStatus.errors.length > 0) {
    report += `**详细错误信息:**\n`;
    translationStatus.errors.forEach((error, index) => {
      report += `${index + 1}. **${error.targetLang}** - ${error.error}\n`;
      report += `   - 文本长度: ${error.textLength} 字符\n`;
      report += `   - 估算Token: ${error.estimatedTokens}\n`;
      report += `   - 尝试次数: ${error.attempt}\n\n`;
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
  console.log('🛡️ 保护路径:', PROTECTED_PATHS);
  
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
    
    const filesToTranslate = [...operations.added, ...operations.modified];
    for (const file of filesToTranslate) {
      const result = await translateFile(file, lang);
      allResults.push({
        ...result, 
        action: result.action || 'translated', 
        language: lang,
        operation: operations.added.includes(file) ? 'added' : 'modified'
      });
    }
    
    for (const rename of operations.renamedAndModified) {
      const result = await translateRenamedAndModifiedFile(rename.from, rename.to, lang);
      allResults.push({...result, language: lang, operation: 'renamed_and_modified'});
    }
    
    for (const rename of operations.renamed) {
      const result = await moveTranslationFile(rename.from, rename.to, lang);
      allResults.push({...result, language: lang, operation: 'renamed'});
    }
    
    for (const file of operations.deleted) {
      const result = await deleteTranslationFile(file, lang);
      allResults.push({...result, language: lang, operation: 'deleted'});
    }
  }
  
  const report = generateProgressReport(languages, allResults);
  console.log('\n' + report);
  
  await fs.writeFile('/tmp/translation-report.md', report, 'utf8');
  
  const hasChanges = allResults.some(r => r.success && 
    (r.action === 'translated' || r.action === 'renamed_and_retranslated'));
  
  if (hasChanges) {
    console.log('\n🚀 设置触发其他工作流标志...');
    await fs.writeFile('/tmp/trigger-deploy.txt', 'true', 'utf8');
  }
  
  if (allResults.some(r => !r.success)) {
    console.log('⚠️ 部分操作失败，请查看详细错误信息');
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