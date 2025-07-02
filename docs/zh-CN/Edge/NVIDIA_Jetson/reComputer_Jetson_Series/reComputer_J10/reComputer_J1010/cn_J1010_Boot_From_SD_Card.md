---
description: J1010 从 SD 卡启动
title: J1010 从 SD 卡启动
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/J1010_Boot_From_SD_Card
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # 用于 Disqus

---

# J1010 从 SD 卡启动

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 入门指南

在开始之前，我们需要先阅读以下两篇文章。确保 J1010 系统已正确烧录，并且 SD 卡驱动已正确安装。

- [J1010/J101 烧录 Jetpack](https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack/)
- [J101 启用 SD 卡](https://wiki.seeedstudio.com/J101_Enable_SD_Card/)

## 将系统从 J101 烧录到 SD 卡

首先，我们需要克隆包含所需工具的脚本。

```bash
git clone https://github.com/limengdu/bootFromUSB
```

其次，我们需要确保 SD 卡的格式为 ext4，可以通过 "disk" 工具直观地查看。如果不是 ext4 格式，我们需要格式化并将其更改为 ext4 格式。

点击蓝色区域，然后点击绿色区域选择 "Format Partition"（格式化分区）。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/disk_fix_1.jpg" /></div>

点击绿色区域选择 "Internal disk for use with Linux systems only (Ext4)"（仅供 Linux 系统使用的内部磁盘 (Ext4)）。在黄色区域的 "Volume Name"（卷名称）中填写您想要的名称。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/disk_fix_2.jpg" /></div>

这样我们就可以看到 SD 卡的格式已更改为 ext4。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/disk_view_1.png" /></div>

然后，进入脚本目录，执行以下命令：

```bash
cd bootFromUSB
./copyRootToUSB.sh -p /dev/mmcblk1p1
```

等待一段时间，直到自动完成。如果没有报错，则烧录完成。

## 启动配置

当驱动程序成功安装和配置后，我们可以通过类似 "lsblk" 的命令或查看 "/dev" 中的设备来简单地查看。

### 更改启动设备

我们需要修改 "/boot/extlinux/extlinux.conf" 中的配置。

- 从 SD 卡启动

    当我们从载板上的 eMMC 启动后，想要修改为从 SD 卡启动时，需要确保之前的步骤（包括将系统烧录到 SD 卡以及安装 SD 卡驱动）已正确完成。将 root 后的参数修改为我们要启动的设备地址。当完成修改后，重启系统。

    **重启前修改 "/boot/extlinux/extlinux.conf"，重启后查看 "/media/seeed/\{xxx-xxx\}/boot/extlinux/extlinux.conf"**

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/config_3.png" /></div>

    !!!注意
        系统从 SD 卡启动后的配置文件为 "/media/seeed/\{xxx-xxx\}/boot/extlinux/extlinux.conf"，而从板载 eMMC 启动后的配置文件为 "/boot/extlinux/extlinux.conf"。它们是相同的文件，设备会从中读取配置并选择在上电后从哪里启动系统。当系统完成启动后，相关路径会发生变化。

- 从板载 eMMC 启动

    当我们从 SD 卡启动后，想要切换回从 eMMC 启动，或者需要更换 SD 卡时，我们需要先将设备改回从 eMMC 启动。我们应进行以下更改。

    **重启前修改 "/media/seeed/\{xxx-xxx\}/boot/extlinux/extlinux.conf"，重启后查看 "/boot/extlinux/extlinux.conf"**

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/config_4.png" /></div>

最终，我们发现它确实运行良好。

- 从 eMMC 启动

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/lsblk_emmc.png" /></div>

- 从 SD 卡启动

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/lsblk_sd.png" /></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>