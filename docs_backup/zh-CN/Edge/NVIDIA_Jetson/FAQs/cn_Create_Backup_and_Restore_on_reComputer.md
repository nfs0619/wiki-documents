---
description: 本指南解释了如何在 reComputer J3011 上备份和恢复系统，以便将已配置的环境和软件迁移到新设备。备份过程包括进入恢复模式、下载 JetPack BSP，并使用备份脚本复制数据。在恢复过程中，插入新的 SSD，重新进入恢复模式并运行恢复命令。此过程可以高效地复制已配置的系统环境。
title: 在 reComputer 上创建备份和恢复
keywords:
- jetson
- BSP
- L4T
- 备份
- 恢复
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop2.webp
slug: /cn/create_backup_and_restore_on_recomputer
last_update:
  date: 05/15/2025
  author: Zibo
---

# 在 reComputer 上创建备份和恢复

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 简介
reComputer 是一个强大且紧凑的智能边缘设备，能够为边缘计算提供高达 275TOPS 的现代 AI 性能。当您在 reComputer 上配置并安装了业务所需的软件和环境，并需要将项目复制到另一台新的 reComputer 时，重新安装软件并不是一个高效的选择。因此，本页面将以 [reComputer J3011](https://www.seeedstudio.com/reComputer-J3011B-p-6405.html) 为例，介绍如何备份现有的软件和环境，从而方便地将其恢复并迁移到新的设备上。

:::note
我们的测试平台是 reComputer J3011，JetPack 5.1.3 提供参考。
:::

## 前提条件
- Ubuntu 主机电脑
- USB Type-C 数据传输线
- reComputer J3011（运行 JetPack 5.1.3 操作系统）

:::info
在您的 reComputer 上安装并配置必要的软件和应用程序。确保这些修改不会影响设备的启动功能。建议在更改后重启设备以确认稳定性。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop.png"/></div>
如上图所示，我们安装了 jtop 软件，可以直接在终端中使用这些命令。
<a id="Recovery"></a>
:::

## 系统备份

**步骤 1.** 将设备设置为恢复模式，请参考此 [wiki 页面](https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack/#enter-force-recovery-mode)。

**步骤 2.** 获取与您的 Jetson 模块对应的 JetPack BSP。对于 JetPack 5.1.3，请从 [NVIDIA 官方网站](https://developer.nvidia.com/embedded/jetson-linux-r3550) 下载 Jetson Linux R35.5.0 BSP。
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/download_bsp.jpg"/></div>

**步骤 3.** 解压 BSP 文件以访问 Linux_for_Tegra 目录。

```bash
tar -xvzf jetson-linux-*.tbz2
# 对于 JetPack 5.1.3: tar -xvzf Jetson_Linux_R35.5.0_aarch64.tbz2
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/zip.jpg"/></div>
  
**步骤 4.** 将 Linux_for_Tegra 的内容复制到您的 JetPack 刷机包目录（例如 mfi_recomputer-orin）。
:::note
“刷机包目录”是刷机过程中使用的目录文件。
:::

使用 `-rn` 选项以保留现有文件：
```bash
sudo cp -rn Linux_for_Tegra/* mfi_recomputer-orin
```

**步骤 5.** 进入您的 JetPack 刷机包目录：

```bash
cd /path/to/mfi_recomputer-orin
```

**步骤 6.** 执行备份脚本，指定您的存储设备和所需的备份名称：
```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b recomputer-orin
```
:::info
-b `<target_board>` 替换为您的设备
:::

:::note
您可以导航到您的 JetPack 刷机包目录并找到一个 `xxx.conf` 文件。
`xxx` 是您的 `<target_board>`。
```bash
ls | grep *.conf
```
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/conf_file1.jpg"/></div>
:::

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/backup_start.png"/></div>

耐心等待直到完成。
如果一切顺利，您将在终端中看到类似于以下截图的内容：

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/success_back1.png"/></div>

:::note
在此过程中，您的设备可能会像刷机过程一样多次重启。我们不建议使用虚拟机或 WSL，因为这可能导致连接丢失并使备份/恢复过程失败。您可能会遇到一些缺失文件；您可以打开 `recomputer-orin.conf` 并移除不存在的文件。
通常这些是临时的设备树覆盖对象文件，它们不会影响备份和恢复结果。但如果您对 BSP 进行了修改，则需要合并您的覆盖文件。
:::

## 系统恢复

**步骤 1.** 将一个新的、空的 [SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html) 插入您的 reComputer。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/new_ssd.jpg"/></div>

**步骤 2.** 按照[之前描述](#Recovery)的方式进入强制恢复模式。

**步骤 3.** 在您的主机系统上，导航到您的 JetPack 刷机包目录，并在主机上执行恢复命令：

```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r recomputer-orin
```

如果一切顺利，您将在终端中看到类似于以下截图的内容：
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/finish_store1.png"/></div>

**步骤 4.** 启动 Jetson 设备，使用我们之前设置的用户名和密码。测试一些我们之前安装的软件。如果它们正常工作，则说明恢复成功。
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop2.png"/></div>
由于我们在之前的系统中安装了 jtop，因此可以直接在新系统的终端中启动 jtop。

:::info
此外，以下情况已针对备份和恢复进行了测试：  
- 将备份恢复到原始 SSD。  
- 将备份恢复到不同的 SSD。  
- 将备份恢复到相同的载板上，使用同一批次的 Jetson 模块，但不同的 SSD。  
:::

## 资源
- [将 JetPack OS 刷写到 J401 载板](https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack/)
- [reComputer J30x 数据手册](https://files.seeedstudio.com/products/NVIDIA/reComputer-J301x-datasheet.pdf)
- [reComputer J40x 数据手册](https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf)
- [reComputer J30/J40 原理图](https://files.seeedstudio.com/wiki/J401/reComputer_J401_SCH_V1.0.pdf)
- [reComputer J30/J40 3D 文件](https://files.seeedstudio.com/wiki/reComputer-J4012/reComputer-J4012.stp)
- [Seeed Jetson 系列产品目录](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed Studio 边缘 AI 成功案例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson 系列对比](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Jetson 设备一览](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)
- [Jetson 示例](https://github.com/Seeed-Projects/jetson-examples)
- [reComputer-Jetson-入门指南](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>