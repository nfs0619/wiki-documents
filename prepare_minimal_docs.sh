#!/bin/bash

# ==============================================================================
# Docusaurus 最小化文档准备脚本
#
# 功能：
# 1. 将原始的 `docs` 文件夹重命名为 `docs_backup`，作为安全备份。
# 2. 创建一个全新的、空的 `docs` 文件夹。
# 3. 从备份中仅复制核心文件到新的 `docs` 文件夹，以供最小化构建测试。
#
# 使用方法：
# 1. 将此脚本放置在 Docusaurus 项目的根目录。
# 2. 在终端中运行 `chmod +x prepare_minimal_docs.sh` 使其可执行。
# 3. 运行 `./prepare_minimal_docs.sh`。
# ==============================================================================

# --- 配置 ---
# 原始文档目录
SOURCE_DIR="docs"
# 备份目录名
BACKUP_DIR="docs_backup"
# 需要保留的文件列表 (相对于 docs 目录的路径)
# **重要**: 请确保这里的路径和你的实际文件名/路径完全一致，包括大小写和.md后缀
KEEP_FILES=(
  "Getting_Started.md"
  "weekly_wiki.md"
  "Sensor.md"
  "Sensor/Grove/Grove_System.md"
)

# --- 脚本主体 ---

# 安全检查：如果备份目录已存在，则退出以防意外覆盖
if [ -d "$BACKUP_DIR" ]; then
  echo "❌ 错误: 备份目录 '$BACKUP_DIR' 已存在。"
  echo "   请先处理旧的备份（删除或重命名），或将此脚本中的 BACKUP_DIR 变量更改为其他名称。"
  exit 1
fi

# 安全检查：如果源目录不存在，则退出
if [ ! -d "$SOURCE_DIR" ]; then
  echo "❌ 错误: 源目录 '$SOURCE_DIR' 未找到。"
  echo "   请确保您在 Docusaurus 项目的根目录下运行此脚本。"
  exit 1
fi

# 最后的确认
echo "⚠️  警告：此脚本将执行以下操作："
echo "   1. 将 '$SOURCE_DIR' 重命名为 '$BACKUP_DIR'"
echo "   2. 创建一个新的空目录 '$SOURCE_DIR'"
echo "   3. 从 '$BACKUP_DIR' 仅复制 ${#KEEP_FILES[@]} 个指定文件到新的 '$SOURCE_DIR'"
read -p "您确定要继续吗？(y/n) " -n 1 -r
echo # 移到新行
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  echo "操作已取消。"
  exit 1
fi

# 1. 备份原始目录
echo "正在备份 '$SOURCE_DIR' -> '$BACKUP_DIR'..."
mv "$SOURCE_DIR" "$BACKUP_DIR"
echo "✅ 备份完成。"

# 2. 创建新目录
echo "正在创建新的空目录 '$SOURCE_DIR'..."
mkdir "$SOURCE_DIR"
echo "✅ 新目录已创建。"

# 3. 复制保留的文件
echo "正在从备份中复制保留的文件..."
for file_path in "${KEEP_FILES[@]}"; do
  # 检查源文件是否存在
  if [ -f "$BACKUP_DIR/$file_path" ]; then
    # 为文件创建目标目录结构
    mkdir -p "$SOURCE_DIR/$(dirname "$file_path")"
    # 复制文件
    cp "$BACKUP_DIR/$file_path" "$SOURCE_DIR/$file_path"
    echo "  - 已复制: $file_path"
  else
    echo "  - ⚠️  警告: 在备份中未找到文件 '$file_path'，已跳过。"
  fi
done

echo "🎉 脚本执行完毕！"
echo "现在 '$SOURCE_DIR' 目录只包含核心文件，您可以尝试运行 'yarn start' 了。"
echo "您的所有原始文件都安全地存放在 '$BACKUP_DIR' 文件夹中。"