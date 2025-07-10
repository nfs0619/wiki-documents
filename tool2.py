#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
从docs_backup同步文档到docs文件夹
读取文件列表并将对应文件从docs_backup复制到docs目录
"""

import os
import shutil
from pathlib import Path

class DocsSyncer:
    def __init__(self, file_list_path='final_changes_sorted.txt', docs_backup_dir='docs_backup', docs_dir='docs'):
        self.file_list_path = file_list_path
        self.docs_backup_dir = Path(docs_backup_dir)
        self.docs_dir = Path(docs_dir)
        
        # 检查目录是否存在
        if not self.docs_backup_dir.exists():
            raise FileNotFoundError(f"源目录不存在: {self.docs_backup_dir}")
        
        # 如果docs目录不存在，创建它
        self.docs_dir.mkdir(exist_ok=True)
    
    def load_file_list(self):
        """从文件中读取需要同步的文件列表"""
        if not os.path.exists(self.file_list_path):
            raise FileNotFoundError(f"文件列表不存在: {self.file_list_path}")
        
        files = []
        with open(self.file_list_path, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith('#'):  # 忽略空行和注释
                    files.append(line)
        
        return files
    
    def get_target_path(self, backup_file_path):
        """将docs_backup路径转换为docs路径"""
        # 移除docs_backup前缀，获取相对路径
        if backup_file_path.startswith('docs_backup/'):
            relative_path = backup_file_path[12:]  # 移除'docs_backup/'
        elif backup_file_path.startswith('docs_backup\\'):
            relative_path = backup_file_path[12:]  # 移除'docs_backup\'
        else:
            # 如果不是以docs_backup开头，假设已经是相对路径
            relative_path = backup_file_path
        
        return self.docs_dir / relative_path
    
    def copy_file(self, source_path, target_path):
        """复制单个文件"""
        try:
            # 确保目标目录存在
            target_dir = target_path.parent
            target_dir.mkdir(parents=True, exist_ok=True)
            
            # 复制文件（覆盖如果存在）
            shutil.copy2(source_path, target_path)
            return True, None
        except Exception as e:
            return False, str(e)
    
    def sync_files(self):
        """同步所有文件"""
        print("🚀 开始同步文档文件...")
        print(f"📂 源目录: {self.docs_backup_dir}")
        print(f"📂 目标目录: {self.docs_dir}")
        print("-" * 60)
        
        # 加载文件列表
        try:
            file_list = self.load_file_list()
            print(f"📋 从 {self.file_list_path} 加载了 {len(file_list)} 个文件")
        except Exception as e:
            print(f"❌ 加载文件列表失败: {e}")
            return
        
        success_count = 0
        skip_count = 0
        error_count = 0
        
        for i, file_path in enumerate(file_list, 1):
            # 获取源文件路径
            if file_path.startswith('docs_backup'):
                source_path = Path(file_path)
            else:
                source_path = self.docs_backup_dir / file_path
            
            # 获取目标文件路径
            target_path = self.get_target_path(file_path)
            
            print(f"[{i:3d}/{len(file_list)}] 处理: {source_path.name}")
            
            # 检查源文件是否存在
            if not source_path.exists():
                print(f"  ⚠️ 源文件不存在: {source_path}")
                skip_count += 1
                continue
            
            # 检查目标文件是否已存在
            if target_path.exists():
                print(f"  📝 覆盖现有文件: {target_path}")
            else:
                print(f"  🆕 创建新文件: {target_path}")
            
            # 复制文件
            success, error = self.copy_file(source_path, target_path)
            
            if success:
                print(f"  ✅ 成功")
                success_count += 1
            else:
                print(f"  ❌ 失败: {error}")
                error_count += 1
        
        # 显示汇总结果
        print("-" * 60)
        print("📊 同步完成！")
        print(f"✅ 成功: {success_count} 个文件")
        print(f"⚠️ 跳过: {skip_count} 个文件")
        print(f"❌ 失败: {error_count} 个文件")
        print(f"📁 总计: {len(file_list)} 个文件")
        
        if success_count > 0:
            print(f"\n🎉 成功同步了 {success_count} 个文件到docs目录！")
        
        if error_count > 0:
            print(f"\n⚠️ 有 {error_count} 个文件同步失败，请检查错误信息")
    
    def preview_changes(self):
        """预览将要进行的更改"""
        print("👁️ 预览模式 - 将要进行的更改:")
        print("-" * 60)
        
        try:
            file_list = self.load_file_list()
        except Exception as e:
            print(f"❌ 加载文件列表失败: {e}")
            return
        
        new_files = 0
        existing_files = 0
        missing_files = 0
        
        for file_path in file_list:
            if file_path.startswith('docs_backup'):
                source_path = Path(file_path)
            else:
                source_path = self.docs_backup_dir / file_path
            
            target_path = self.get_target_path(file_path)
            
            if not source_path.exists():
                print(f"❌ 源文件缺失: {source_path}")
                missing_files += 1
            elif target_path.exists():
                print(f"📝 将覆盖: {target_path}")
                existing_files += 1
            else:
                print(f"🆕 将创建: {target_path}")
                new_files += 1
        
        print("-" * 60)
        print(f"📊 预览统计:")
        print(f"🆕 新文件: {new_files}")
        print(f"📝 覆盖文件: {existing_files}")
        print(f"❌ 缺失文件: {missing_files}")
        print(f"📁 总计: {len(file_list)} 个文件")

def main():
    """主函数"""
    print("📁 文档同步工具")
    print("=" * 60)
    
    # 创建同步器实例
    try:
        syncer = DocsSyncer()
    except Exception as e:
        print(f"❌ 初始化失败: {e}")
        return
    
    # 询问用户操作
    print("请选择操作:")
    print("1. 预览更改（不执行实际操作）")
    print("2. 执行同步")
    print("3. 退出")
    
    try:
        choice = input("\n请输入选择 (1-3): ").strip()
        
        if choice == "1":
            syncer.preview_changes()
        elif choice == "2":
            # 再次确认
            confirm = input("\n⚠️ 这将覆盖docs目录中的现有文件，确认继续？(y/N): ")
            if confirm.lower() == 'y':
                syncer.sync_files()
            else:
                print("❌ 用户取消操作")
        elif choice == "3":
            print("👋 退出程序")
        else:
            print("❌ 无效选择")
    
    except KeyboardInterrupt:
        print("\n\n👋 用户中断程序")
    except Exception as e:
        print(f"\n❌ 程序执行出错: {e}")

if __name__ == "__main__":
    main()