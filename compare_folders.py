#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
文件夹文件名对比脚本
对比docs和docs_backup文件夹中的文件名（相对路径），并检查空文档问题
"""

import os
import csv
from pathlib import Path
from typing import Dict, List

class SimpleFolderComparator:
    def __init__(self, folder1: str, folder2: str, output_csv: str = "file_comparison.csv"):
        """
        初始化文件夹比较器
        
        Args:
            folder1: docs文件夹路径
            folder2: docs_backup文件夹路径
            output_csv: 输出CSV文件路径
        """
        self.docs_folder = Path(folder1)
        self.backup_folder = Path(folder2)
        self.output_csv = output_csv
        
        # 检查文件夹是否存在
        if not self.docs_folder.exists():
            raise FileNotFoundError(f"文件夹不存在: {self.docs_folder}")
        if not self.backup_folder.exists():
            raise FileNotFoundError(f"文件夹不存在: {self.backup_folder}")

    def get_all_files(self, folder: Path) -> Dict[str, Path]:
        """
        获取文件夹中所有文件的相对路径映射
        
        Returns:
            Dict[相对路径, 绝对路径]
        """
        files = {}
        for file_path in folder.rglob('*'):
            if file_path.is_file():
                relative_path = file_path.relative_to(folder)
                files[str(relative_path)] = file_path
        return files

    def get_file_size(self, file_path: Path) -> int:
        """获取文件大小，出错返回-1"""
        try:
            return file_path.stat().st_size
        except Exception:
            return -1

    def is_empty_file(self, file_path: Path) -> bool:
        """判断文件是否为空（大小为0）"""
        return self.get_file_size(file_path) == 0

    def compare_folders(self) -> List[Dict]:
        """
        比较两个文件夹中的文件名和空文档情况
        
        Returns:
            比较结果列表
        """
        print(f"开始比较文件夹:")
        print(f"  docs文件夹: {self.docs_folder}")
        print(f"  docs_backup文件夹: {self.backup_folder}")
        
        # 获取两个文件夹中的所有文件
        docs_files = self.get_all_files(self.docs_folder)
        backup_files = self.get_all_files(self.backup_folder)
        
        print(f"找到文件数量: docs={len(docs_files)}, docs_backup={len(backup_files)}")
        
        results = []
        all_relative_paths = set(docs_files.keys()) | set(backup_files.keys())
        
        for relative_path in sorted(all_relative_paths):
            result = {
                'relative_path': relative_path,
                'status': '',
                'docs_exists': relative_path in docs_files,
                'backup_exists': relative_path in backup_files,
                'docs_size': '',
                'backup_size': '',
                'issue_description': ''
            }
            
            if relative_path in docs_files and relative_path in backup_files:
                # 两个文件都存在 - 这是正常情况
                docs_path = docs_files[relative_path]
                backup_path = backup_files[relative_path]
                
                docs_size = self.get_file_size(docs_path)
                backup_size = self.get_file_size(backup_path)
                
                result['docs_size'] = docs_size
                result['backup_size'] = backup_size
                
                # 检查空文档问题
                if backup_size > 0 and docs_size == 0:
                    result['status'] = '需要注意'
                    result['issue_description'] = 'docs中是空文档，但backup中有内容'
                elif docs_size == 0 and backup_size == 0:
                    result['status'] = '都是空文档'
                else:
                    result['status'] = '正常'
                    
            elif relative_path in docs_files:
                # 只存在于docs文件夹
                docs_size = self.get_file_size(docs_files[relative_path])
                result['docs_size'] = docs_size
                result['backup_size'] = '文件不存在'
                result['status'] = '仅存在于docs'
                result['issue_description'] = '备份文件夹中缺少此文件'
                
            else:
                # 只存在于backup文件夹
                backup_size = self.get_file_size(backup_files[relative_path])
                result['docs_size'] = '文件不存在'
                result['backup_size'] = backup_size
                result['status'] = '仅存在于backup'
                result['issue_description'] = 'docs文件夹中缺少此文件'
            
            results.append(result)
        
        return results

    def save_to_csv(self, results: List[Dict]):
        """将结果保存到CSV文件，仅保存有问题的文件"""
        fieldnames = [
            'relative_path', 'status', 'docs_exists', 'backup_exists',
            'docs_size', 'backup_size', 'issue_description'
        ]
        
        # 过滤出需要关注的文件（排除正常文件）
        filtered_results = [r for r in results if r['status'] != '正常']
        
        with open(self.output_csv, 'w', newline='', encoding='utf-8-sig') as csvfile:
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(filtered_results)
        
        print(f"结果已保存到: {self.output_csv}")
        print(f"CSV中包含 {len(filtered_results)} 个需要关注的文件（已排除正常文件）")

    def generate_summary(self, results: List[Dict]):
        """生成摘要报告"""
        total_files = len(results)
        normal_files = len([r for r in results if r['status'] == '正常'])
        empty_issue_files = len([r for r in results if r['status'] == '需要注意'])
        both_empty_files = len([r for r in results if r['status'] == '都是空文档'])
        only_in_docs = len([r for r in results if r['status'] == '仅存在于docs'])
        only_in_backup = len([r for r in results if r['status'] == '仅存在于backup'])
        
        print("\n" + "="*50)
        print("比较结果摘要:")
        print("="*50)
        print(f"总文件数: {total_files}")
        print(f"正常文件: {normal_files}")
        print(f"需要注意的文件: {empty_issue_files} (backup有内容但docs为空)")
        print(f"都是空文档: {both_empty_files}")
        print(f"仅存在于docs: {only_in_docs}")
        print(f"仅存在于backup: {only_in_backup}")
        print("="*50)
        
        # 列出需要注意的文件
        if empty_issue_files > 0:
            print("\n需要注意的文件列表 (backup有内容但docs为空):")
            for result in results:
                if result['status'] == '需要注意':
                    print(f"  - {result['relative_path']} (backup大小: {result['backup_size']} 字节)")

def main():
    """主函数"""
    # 配置参数
    docs_folder = "docs"
    backup_folder = "docs_backup"
    output_file = "file_comparison.csv"
    
    try:
        # 创建比较器实例
        comparator = SimpleFolderComparator(docs_folder, backup_folder, output_file)
        
        # 执行比较
        results = comparator.compare_folders()
        
        # 保存结果
        comparator.save_to_csv(results)
        
        # 显示摘要
        comparator.generate_summary(results)
        
    except FileNotFoundError as e:
        print(f"错误: {e}")
        print("请确保docs和docs_backup文件夹存在于当前目录中")
    except Exception as e:
        print(f"发生错误: {e}")

if __name__ == "__main__":
    main()