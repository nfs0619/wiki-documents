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

// 估算token数量
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

// 🆕 重新设计的代码块和行内代码保护机制
function protectCodeContent(content) {
  console.log('🛡️ 保护代码内容...');
  
  const protectedElements = [];
  let protectedContent = content;
  let elementIndex = 0;
  
  // 1. 保护代码块 ```
  protectedContent = protectedContent.replace(/```[\s\S]*?```/g, (match) => {
    const placeholder = `__PROTECTED_CODEBLOCK_${elementIndex}__`;
    protectedElements[elementIndex] = match;
    elementIndex++;
    return placeholder;
  });
  
  // 2. 保护行内代码 `code`
  protectedContent = protectedContent.replace(/`[^`\n]+`/g, (match) => {
    const placeholder = `__PROTECTED_INLINE_CODE_${elementIndex}__`;
    protectedElements[elementIndex] = match;
    elementIndex++;
    return placeholder;
  });
  
  // 3. 保护HTML标签
  protectedContent = protectedContent.replace(/<[^>]+>/g, (match) => {
    const placeholder = `__PROTECTED_HTML_TAG_${elementIndex}__`;
    protectedElements[elementIndex] = match;
    elementIndex++;
    return placeholder;
  });
  
  // 4. 保护链接
  protectedContent = protectedContent.replace(/\[([^\]]*)\]\([^)]+\)/g, (match) => {
    const placeholder = `__PROTECTED_LINK_${elementIndex}__`;
    protectedElements[elementIndex] = match;
    elementIndex++;
    return placeholder;
  });
  
  console.log(`🛡️ 保护了 ${protectedElements.length} 个代码/链接元素`);
  
  return {
    content: protectedContent,
    protectedElements: protectedElements
  };
}

// 恢复受保护的代码内容
function restoreCodeContent(content, protectedElements) {
  console.log('🔧 恢复代码内容...');
  
  let restoredContent = content;
  
  // 恢复所有受保护的元素
  for (let i = 0; i < protectedElements.length; i++) {
    const placeholder = `__PROTECTED_CODEBLOCK_${i}__`;
    const inlinePlaceholder = `__PROTECTED_INLINE_CODE_${i}__`;
    const htmlPlaceholder = `__PROTECTED_HTML_TAG_${i}__`;
    const linkPlaceholder = `__PROTECTED_LINK_${i}__`;
    
    if (restoredContent.includes(placeholder)) {
      restoredContent = restoredContent.replace(placeholder, protectedElements[i]);
    } else if (restoredContent.includes(inlinePlaceholder)) {
      restoredContent = restoredContent.replace(inlinePlaceholder, protectedElements[i]);
    } else if (restoredContent.includes(htmlPlaceholder)) {
      restoredContent = restoredContent.replace(htmlPlaceholder, protectedElements[i]);
    } else if (restoredContent.includes(linkPlaceholder)) {
      restoredContent = restoredContent.replace(linkPlaceholder, protectedElements[i]);
    }
  }
  
  console.log('✅ 代码内容恢复完成');
  return restoredContent;
}

// 🆕 按行分析文档结构，保持完整的换行信息
function analyzeDocumentStructure(content) {
  const lines = content.split('\n');
  const lineTypes = [];
  let inFrontMatter = false;
  let inCodeBlock = false;
  
  lines.forEach((line, index) => {
    let type = 'content';
    
    // 检测Front Matter
    if (index === 0 && line.trim() === '---') {
      inFrontMatter = true;
      type = 'frontmatter';
    } else if (inFrontMatter && line.trim() === '---') {
      inFrontMatter = false;
      type = 'frontmatter';
    } else if (inFrontMatter) {
      type = 'frontmatter';
    }
    // 检测代码块
    else if (line.trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      type = 'codeblock';
    } else if (inCodeBlock) {
      type = 'codeblock';
    }
    // 检测标题
    else if (line.match(/^#{1,6}\s+/)) {
      type = 'heading';
    }
    // 检测空行
    else if (line.trim() === '') {
      type = 'empty';
    }
    // 检测列表
    else if (line.match(/^\s*[-*+]\s+/) || line.match(/^\s*\d+\.\s+/)) {
      type = 'list';
    }
    
    lineTypes.push({
      line: line,
      type: type,
      index: index
    });
  });
  
  return lineTypes;
}

// 🆕 完全重新设计的翻译prompt - 强调行级处理
function generateAdvancedPrompt(targetLang, pathPrefix) {
  const langName = LANGUAGE_CONFIG[targetLang].name;
  const termsList = Object.entries(PRESERVE_TERMS)
    .map(([original, preserved]) => `- ${original} → ${preserved}`)
    .join('\n');

  return `你是一个专业的技术文档翻译专家。你需要将Markdown文档翻译成${langName}，但必须严格按照以下规则：

## 🚨 核心规则（绝对不能违反）

1. **保持行结构绝对不变**：
   - 原文有多少行，译文就必须有多少行
   - 绝对不能将两行合并成一行
   - 绝对不能将一行拆分成多行
   - 每一行的换行符位置必须完全保持

2. **逐行处理原则**：
   - Front Matter字段：只翻译title、description的值
   - 标题行（#开头）：只翻译文本部分，保持格式
   - 普通文本行：翻译成${langName}
   - 空行：保持为空行
   - 代码相关：绝对不翻译

3. **代码保护规则**：
   - 所有\`\`\`代码块\`\`\`：完全不动
   - 所有\`行内代码\`：完全不动
   - 所有HTML标签：完全不动
   - 所有链接：完全不动

4. **格式严格要求**：
   - slug字段值前添加${pathPrefix}前缀
   - 保持所有缩进、空格、符号
   - 保持所有Markdown格式标记

## 术语保护列表：
${termsList}

## 🔍 检查方法
翻译完成后，请验证：
- 行数是否完全一致
- Front Matter格式是否正确
- 标题格式是否保持
- 代码块是否未被翻译

**重要提醒**：这是技术文档翻译，准确性和格式一致性比流畅性更重要。严格按行处理，绝不合并或拆分行。`;
}

// 🆕 严格的格式验证函数
function strictFormatValidation(translatedContent, originalContent) {
  console.log('🔍 执行严格格式验证...');
  
  const originalLines = originalContent.split('\n');
  const translatedLines = translatedContent.split('\n');
  const issues = [];
  
  // 1. 行数验证
  if (originalLines.length !== translatedLines.length) {
    issues.push(`🚨 严重错误: 行数不匹配 - 原文${originalLines.length}行，译文${translatedLines.length}行`);
    return { valid: false, issues: issues };
  }
  
  // 2. 逐行验证
  for (let i = 0; i < originalLines.length; i++) {
    const origLine = originalLines[i];
    const transLine = translatedLines[i];
    
    // 验证空行保持
    if (origLine.trim() === '' && transLine.trim() !== '') {
      issues.push(`🚨 第${i + 1}行: 原文空行变成了内容行`);
    }
    
    // 验证标题格式
    const origHeaderMatch = origLine.match(/^(#{1,6})\s+(.*)$/);
    if (origHeaderMatch) {
      const transHeaderMatch = transLine.match(/^(#{1,6})\s+(.*)$/);
      if (!transHeaderMatch) {
        issues.push(`🚨 第${i + 1}行: 标题格式损坏 - "${origLine}" -> "${transLine}"`);
      } else if (origHeaderMatch[1] !== transHeaderMatch[1]) {
        issues.push(`🚨 第${i + 1}行: 标题级别改变 - "${origHeaderMatch[1]}" -> "${transHeaderMatch[1]}"`);
      }
    }
    
    // 验证Front Matter字段
    if (origLine.includes(':') && !origLine.startsWith('#')) {
      const origFieldMatch = origLine.match(/^(\w+):\s*(.*)$/);
      if (origFieldMatch) {
        const transFieldMatch = transLine.match(/^(\w+):\s*(.*)$/);
        if (!transFieldMatch) {
          issues.push(`🚨 第${i + 1}行: Front Matter字段格式损坏 - "${origLine}"`);
        } else if (origFieldMatch[1] !== transFieldMatch[1]) {
          issues.push(`🚨 第${i + 1}行: Front Matter字段名改变 - "${origFieldMatch[1]}" -> "${transFieldMatch[1]}"`);
        }
      }
    }
    
    // 验证代码块标记
    if (origLine.trim().startsWith('```')) {
      if (!transLine.trim().startsWith('```')) {
        issues.push(`🚨 第${i + 1}行: 代码块标记丢失`);
      }
    }
  }
  
  // 3. Front Matter结构验证
  const origFrontMatter = originalContent.match(/^---\n([\s\S]*?)\n---/);
  const transFrontMatter = translatedContent.match(/^---\n([\s\S]*?)\n---/);
  
  if (origFrontMatter && !transFrontMatter) {
    issues.push(`🚨 严重错误: Front Matter结构丢失`);
  } else if (origFrontMatter && transFrontMatter) {
    const origFields = origFrontMatter[1].split('\n').filter(line => line.includes(':'));
    const transFields = transFrontMatter[1].split('\n').filter(line => line.includes(':'));
    
    if (origFields.length !== transFields.length) {
      issues.push(`⚠️ 警告: Front Matter字段数量不匹配`);
    }
  }
  
  const isValid = issues.length === 0;
  
  if (isValid) {
    console.log('✅ 格式验证通过');
  } else {
    console.error('🚨 格式验证失败:');
    issues.forEach(issue => console.error(`  ${issue}`));
  }
  
  return { valid: isValid, issues: issues };
}

// 🆕 智能重试机制
async function translateWithRetryAndValidation(text, targetLang, maxRetries = 3) {
  const langConfig = LANGUAGE_CONFIG[targetLang];
  if (!langConfig) {
    throw new Error(`不支持的语言: ${targetLang}`);
  }
  
  // 保护代码内容
  const { content: protectedContent, protectedElements } = protectCodeContent(text);
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`📡 调用Claude API (尝试 ${attempt}/${maxRetries})...`);
      
      const systemPrompt = generateAdvancedPrompt(targetLang, langConfig.pathPrefix);
      
      const response = await anthropic.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 20000,
        temperature: 0,
        system: systemPrompt,
        messages: [
          { role: 'user', content: protectedContent }
        ]
      });
      
      let translatedContent = response.content[0].text;
      
      // 恢复代码内容
      translatedContent = restoreCodeContent(translatedContent, protectedElements);
      
      // 严格验证格式
      const validation = strictFormatValidation(translatedContent, text);
      
      if (validation.valid) {
        console.log(`✅ 翻译验证成功 (尝试 ${attempt})`);
        
        // 处理链接
        translatedContent = processInternalLinks(translatedContent, targetLang);
        
        // 中英文混排处理
        if (targetLang === 'zh-CN') {
          translatedContent = addChineseEnglishSpacing(translatedContent);
        }
        
        return translatedContent;
      } else {
        console.error(`❌ 格式验证失败 (尝试 ${attempt}/${maxRetries})`);
        if (attempt === maxRetries) {
          const errorInfo = {
            error: `格式验证失败: ${validation.issues.join('; ')}`,
            attempt: attempt,
            textLength: text.length,
            targetLang: targetLang
          };
          translationStatus.errors.push(errorInfo);
          throw new Error(`翻译格式验证失败 (${maxRetries}次尝试): ${validation.issues[0]}`);
        }
      }
      
    } catch (error) {
      console.error(`❌ 翻译失败 (尝试 ${attempt}/${maxRetries}): ${error.message}`);
      
      if (attempt === maxRetries) {
        const errorInfo = {
          error: error.message,
          attempt: attempt,
          textLength: text.length,
          targetLang: targetLang
        };
        translationStatus.errors.push(errorInfo);
        throw error;
      }
      
      const delay = Math.pow(2, attempt) * 1000;
      console.log(`⏳ 等待 ${delay}ms 后重试...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

// 按Markdown结构分块文档
function chunkDocument(content, maxTokens = 12000) {
  const lines = content.split('\n');
  const chunks = [];
  let currentChunk = '';
  let frontMatter = '';
  let inFrontMatter = false;
  let frontMatterEnded = false;
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
        frontMatterEnded = true;
        contentStartIndex = i + 1;
        break;
      }
      continue;
    }
  }
  
  // 处理正文内容
  const contentLines = lines.slice(contentStartIndex);
  
  for (let i = 0; i < contentLines.length; i++) {
    const line = contentLines[i];
    const lineWithNewline = line + '\n';
    const potentialChunk = currentChunk + lineWithNewline;
    
    if (line.match(/^#+\s/) && currentChunk.trim() && 
        estimateTokens(potentialChunk) > maxTokens) {
      chunks.push(currentChunk.trim());
      currentChunk = lineWithNewline;
    } else if (estimateTokens(potentialChunk) > maxTokens) {
      if (currentChunk.trim()) {
        chunks.push(currentChunk.trim());
      }
      currentChunk = lineWithNewline;
    } else {
      currentChunk = potentialChunk;
    }
  }
  
  if (currentChunk.trim()) {
    chunks.push(currentChunk.trim());
  }
  
  if (chunks.length === 0) {
    return [{
      content: content,
      frontMatter: '',
      isComplete: true,
      index: 0,
      total: 1
    }];
  }
  
  if (chunks.length === 1 && estimateTokens(content) <= maxTokens) {
    return [{
      content: content,
      frontMatter: '',
      isComplete: true,
      index: 0,
      total: 1
    }];
  }
  
  return chunks.map((chunk, index) => ({
    content: chunk,
    frontMatter: index === 0 ? frontMatter : '',
    isComplete: false,
    index: index,
    total: chunks.length
  }));
}

// 处理内部链接
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

// 翻译_category.yml文件
async function translateCategoryFile(filePath, targetLang) {
  try {
    console.log(`📋 翻译Category文件: ${filePath} -> ${targetLang}`);
    translationStatus.total++;
    
    const content = await fs.readFile(filePath, 'utf8');
    console.log(`🔍 文件大小: ${content.length} 字符`);
    
    const translatedContent = await translateWithRetryAndValidation(content, targetLang);
    
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
    
    console.log(`📄 翻译块 ${i + 1}/${chunks.length} (${estimateTokens(chunk.content)} tokens)`);
    
    try {
      let contentToTranslate;
      
      if (chunk.isComplete || (i === 0 && chunk.frontMatter)) {
        contentToTranslate = chunk.frontMatter + chunk.content;
      } else {
        contentToTranslate = chunk.content;
      }
      
      const translatedContent = await translateWithRetryAndValidation(contentToTranslate, targetLang);
      
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
    console.log(`🔍 文件大小: ${content.length} 字符 (约 ${estimateTokens(content)} tokens)`);
    
    const chunks = chunkDocument(content);
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
    
    // 删除旧的翻译文件
    const oldTargetPath = generateTargetPath(oldPath, targetLang);
    try {
      await fs.access(oldTargetPath);
      await fs.unlink(oldTargetPath);
      console.log(`🗑️ 已删除旧翻译文件: ${oldTargetPath}`);
    } catch (error) {
      console.log(`ℹ️ 旧翻译文件不存在: ${oldTargetPath}`);
    }
    
    // 重新翻译新文件
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
    
    // 处理新增和修改文件
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
    
    // 处理重命名+修改文件
    for (const rename of operations.renamedAndModified) {
      const result = await translateRenamedAndModifiedFile(rename.from, rename.to, lang);
      allResults.push({...result, language: lang, operation: 'renamed_and_modified'});
    }
    
    // 处理纯重命名文件
    for (const rename of operations.renamed) {
      const result = await moveTranslationFile(rename.from, rename.to, lang);
      allResults.push({...result, language: lang, operation: 'renamed'});
    }
    
    // 处理文件删除
    for (const file of operations.deleted) {
      const result = await deleteTranslationFile(file, lang);
      allResults.push({...result, language: lang, operation: 'deleted'});
    }
  }
  
  // 生成最终报告
  const report = generateProgressReport(languages, allResults);
  console.log('\n' + report);
  
  // 保存报告到文件
  await fs.writeFile('/tmp/translation-report.md', report, 'utf8');
  
  // 🆕 设置输出变量
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