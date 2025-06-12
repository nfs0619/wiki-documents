---
description: J101 启用 SD 卡
title: J101 启用 SD 卡
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/J101_Enable_SD_Card
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # 用于 Disqus

---

# J101 启用 SD 卡

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<!-- # 从 SD 卡启动 NVIDIA JetPack OS 适用于 J101 扩展板 -->


此方法是在 J101 扩展板上将 NVIDIA JetPack OS 刷写到 SD 卡，并在 reComputer J1010 上操作。因此，首先需要<a href="https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack/" target="_blank"><span>将 JetPack OS 刷写到 reComputer J1010</span></a>。

## 驱动配置

首先，我们需要启动 reComputer 并进入如下所示的桌面：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/S.png" /></div>

### 第 1 步：克隆仓库

右键单击并打开终端，然后执行以下命令以下载相关代码：

```sh
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays.git
```

### 第 2 步：编译 jetson-sdmmc-overlay

进入工作区目录：

```bash
cd seeed-linux-dtoverlays
```

对于 J101 扩展板，我们需要修改文件 "overlays\jetsonnano\jetson-sdmmc-overlay.dts" 中的 "compatible" 值。

```bash
sed -i '17s#JETSON_COMPATIBLE#\"nvidia,p3449-0000-b00+p3448-0002-b00\"\, \"nvidia\,jetson-nano\"\, \"nvidia\,tegra210\"#' overlays/jetsonnano/jetson-sdmmc-overlay.dts
```

<!-- 如下所示。

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/change.png"/></div> -->

然后我们编译修改过的文件以确保其被正确修改。

```bash
make overlays/jetsonnano/jetson-sdmmc-overlay.dtbo
```

### 第 3 步：确保 SD 卡可以被识别

将 SD 卡插入 **J101 扩展板**。

```bash
sudo cp overlays/jetsonnano/jetson-sdmmc-overlay.dtbo /boot/
cd /boot/
sudo /opt/nvidia/jetson-io/config-by-hardware.py -l
```

执行上述命令后，我们应该会得到**类似**（可能不完全相同，具体取决于已安装的外设和驱动程序）的输出，并确认 SD 卡已被识别：

```txt
    Header 1 [default]: Jetson 40pin Header
    Available hardware modules:
    1. Adafruit SPH0645LM4H
    2. Adafruit UDA1334A
    3. FE-PI Audio V1 and Z V2
    4. MCP251x CAN Controller
    5. ReSpeaker 4 Mic Array
    6. ReSpeaker 4 Mic Linear Array
    7. reComputer sdmmc
    Header 2: Jetson Nano CSI Connector


    Available hardware modules:
    1. Camera IMX219 Dual
    2. Camera IMX477 Dual
    3. Camera IMX477-A and IMX219-B
    Header 3: Jetson M.2 Key E Slot
    No hardware configurations found!
```

### 第 4 步：命名设备并完成驱动安装

```bash
sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "reComputer sdmmc"
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/fix01.png" /></div>

!!!注意
    完成首次安装后，您可能需要**重启**以运行 jtop。

<!-- ## 将系统迁移到 SD 卡

首先，我们需要克隆包含所需工具的脚本。

```bash
git clone https://github.com/limengdu/bootFromUSB
```

其次，我们需要确保 SD 卡的格式为 ext4，可以通过 "disk" 工具直观地查看。如果不是 ext4 格式，我们需要格式化并将其更改为 ext4 格式。

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/disk_view_1.png"/></div>

然后，进入脚本目录，执行以下命令：

```bash
cd bootFromUSB
./copyRootToUSB.sh -p /dev/mmcblk1p1
```

等待一段时间，直到自动完成。如果没有报错，则烧录完成。

## 启动配置

一旦驱动成功安装并配置，我们可以通过 "lsblk" 命令或查看 "/dev" 中的设备来简单地查看。

### 更改启动设备

我们需要修改 "/boot/extlinux/extlinux.conf" 中的配置。

- 从 SD 卡启动

    当我们从扩展板上的 emmc 启动后，想要修改为从 SD 卡启动时，需要确保之前的步骤（包括将系统烧录到 SD 卡以及安装 SD 卡驱动）已正确完成。修改 root 后的参数为我们要启动设备的地址。完成修改后，重启系统。

    **重启前修改 "/boot/extlinux/extlinux.conf"，重启后查看 "/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf"**

    <div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/config_3.png"></div>

    !!!注意
        从 SD 卡启动系统后，配置文件路径为 "/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf"，而从板载 emmc 启动系统后的配置文件路径为 "/boot/extlinux/extlinux.conf"。它们是相同的文件，设备从中读取配置并选择启动系统的位置，但系统启动完成后相对路径会发生变化。

- 从板载 emmc 启动

    如果我们从 SD 卡启动后想要切换回从 emmc 启动，或者需要更换 SD 卡，则需要先将设备改回从 emmc 启动。我们应进行以下更改。

    **重启前修改 "/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf"，重启后查看 "/boot/extlinux/extlinux.conf"**

    <div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/config_4.png"></div>

最终，我们发现一切运行良好。

- 从 emmc 启动

    <div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/lsblk_emmc.png"></div>

- 从 SD 卡启动

    <div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/lsblk_sd.png"></div> -->

## 更多

### 更改 SD 卡 I/O 速度

我们在 <a href="https://wiki.seeedstudio.com/install_NVIDIA_software_to_Jetson-101" target="_blank"><span>reComputer J101 扩展板</span></a> 上提供了 SD 卡功能，支持 CLK 频率 48MHz。这里的 CLK 设计是为了满足认证要求（例如 CE/FCC）。如果您希望自行提高 CLK，可以按照以下说明操作。

<div>
  <p style={{}}><a href="https://github.com/Seeed-Studio/seeed-linux-dtoverlays/blob/master/overlays/jetsonnano/jetson-sdmmc-overlay.dts" target="_blank" /></p><div align="center"><a href="https://github.com/Seeed-Studio/seeed-linux-dtoverlays/blob/master/overlays/jetsonnano/jetson-sdmmc-overlay.dts" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

- **步骤 1**. 克隆此仓库并修改以下代码。

    ```bash
    git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays
    ```

- **步骤 2**. 修改并编译 max-clk-limit 值

    ```bash
    cd seeed-linux-dtoverlays
    sed -i '10s#48000000#208000000#' overlays/jetsonnano/jetson-sdmmc-overlay.dts
    make overlays/jetsonnano/jetson-sdmmc-overlay.dtbo
    sudo cp overlays/jetsonnano/jetson-sdmmc-overlay.dtbo /boot/
    sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "reComputer sdmmc"
    ```

- **步骤 3**. 重启设备

    ```bash
    reboot
    ```

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>