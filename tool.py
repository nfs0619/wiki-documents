#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
批量移动文件脚本
根据CSV文件将缺失的文件从docs_backup移动到docs目录
"""

import os
import csv
import shutil
from pathlib import Path

def move_files_from_csv(csv_file='file_comparison.csv', docs_backup_dir='docs_backup', docs_dir='docs'):
    """
    从CSV文件读取需要移动的文件并执行移动操作
    
    Args:
        csv_file: CSV文件路径
        docs_backup_dir: 源目录（docs_backup）
        docs_dir: 目标目录（docs）
    """
    
    if not os.path.exists(csv_file):
        print(f"❌ CSV文件不存在: {csv_file}")
        return
    
    if not os.path.exists(docs_backup_dir):
        print(f"❌ 源目录不存在: {docs_backup_dir}")
        return
    
    if not os.path.exists(docs_dir):
        print(f"📁 创建目标目录: {docs_dir}")
        os.makedirs(docs_dir, exist_ok=True)
    
    moved_count = 0
    skipped_count = 0
    error_count = 0
    
    print(f"📖 读取CSV文件: {csv_file}")
    print(f"📂 源目录: {docs_backup_dir}")
    print(f"📂 目标目录: {docs_dir}")
    print("-" * 60)
    
    try:
        with open(csv_file, 'r', encoding='utf-8-sig') as file:
            reader = csv.DictReader(file)
            
            for row_num, row in enumerate(reader, 1):
                relative_path = row.get('relative_path', '').strip()
                status = row.get('status', '').strip()
                
                if not relative_path:
                    continue
                
                # 处理需要移动的文件类型
                should_move = (
                    status == '仅存在于backup' or 
                    status == '需要注意' or
                    (row.get('docs_exists') == 'False' and row.get('backup_exists') == 'True')
                )
                
                if should_move:
                    # 处理Windows路径分隔符
                    normalized_path = relative_path.replace('\\', os.sep)
                    
                    source_path = os.path.join(docs_backup_dir, normalized_path)
                    target_path = os.path.join(docs_dir, normalized_path)
                    
                    print(f"处理文件 {row_num}: {normalized_path}")
                    
                    # 检查源文件是否存在
                    if not os.path.exists(source_path):
                        print(f"  ❌ 源文件不存在: {source_path}")
                        error_count += 1
                        continue
                    
                    # 检查目标文件是否已存在
                    if os.path.exists(target_path):
                        # 对于"需要注意"的情况，检查是否需要覆盖空文件
                        if status == '需要注意':
                            target_size = os.path.getsize(target_path)
                            if target_size == 0:
                                print(f"  📝 覆盖空文件: {normalized_path}")
                            else:
                                print(f"  ⚠️ 目标文件已存在且非空，跳过: {normalized_path}")
                                skipped_count += 1
                                continue
                        else:
                            print(f"  ⚠️ 目标文件已存在，跳过: {normalized_path}")
                            skipped_count += 1
                            continue
                    
                    try:
                        # 确保目标目录存在
                        target_dir = os.path.dirname(target_path)
                        if target_dir and not os.path.exists(target_dir):
                            os.makedirs(target_dir, exist_ok=True)
                            print(f"  📁 创建目录: {target_dir}")
                        
                        # 复制文件
                        shutil.copy2(source_path, target_path)
                        print(f"  ✅ 已移动: {normalized_path}")
                        moved_count += 1
                        
                    except Exception as e:
                        print(f"  ❌ 移动失败: {normalized_path} - {str(e)}")
                        error_count += 1
                else:
                    # 跳过不需要移动的文件
                    continue
    
    except Exception as e:
        print(f"❌ 读取CSV文件时出错: {str(e)}")
        return
    
    # 输出统计结果
    print("-" * 60)
    print("📊 操作完成统计:")
    print(f"✅ 成功移动: {moved_count} 个文件")
    print(f"⚠️ 跳过文件: {skipped_count} 个文件")
    print(f"❌ 出错文件: {error_count} 个文件")
    print(f"📁 总处理数: {moved_count + skipped_count + error_count} 个文件")
    
    if moved_count > 0:
        print(f"\n🎉 成功移动了 {moved_count} 个文件到docs目录！")
    
    if error_count > 0:
        print(f"\n⚠️ 有 {error_count} 个文件处理时出现错误，请检查上述错误信息")

def main():
    """主函数"""
    print("🚀 开始批量移动文件...")
    print("=" * 60)
    
    # 可以在这里修改参数
    csv_file = 'file_comparison.csv'
    docs_backup_dir = 'docs_backup'
    docs_dir = 'docs'
    
    move_files_from_csv(csv_file, docs_backup_dir, docs_dir)

if __name__ == "__main__":
    main()