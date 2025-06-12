---
description: J501载板的硬件和接口使用
title: 接口使用
tags:
  - J501
  - Jetson
  - 接口
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/j501_carrier_board_interfaces_usage
last_update:
  date: 05/15/2025
  author: Youjiang
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/j501.png"/>
</div>

本篇 Wiki 介绍了 J501 载板上的各种硬件和接口，以及如何使用它们来扩展您的项目创意。

## GMSL 摄像头

我们需要将 J501 载板与 [GMSL 扩展板](https://www.seeedstudio.com/reServer-Industrial-J501-GMSL-extension-board-p-5949.html)结合使用，以激活 GMSL 功能。J501 GMSL 扩展板设计用于与 NVIDIA® Jetson AGX Orin™ 兼容的 reServer 工业 J501 载板连接多达 8 个 GMSL 摄像头。此扩展板使用反序列化器 'MAX96724'。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/gmsl.png"/>
</div>

### 兼容摄像头
- [[3MP] SG3S-ISX031C-GMSL2F](https://www.sensing-world.com/en/pd.jsp?recommendFromPid=0&id=23&fromMid=1544)

### 硬件连接

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/gmsl_connectoin.png"/>
</div>

- **步骤1.** 在 J501 载板上安装铜柱。
- **步骤2.** 将 GMSL 扩展板连接到 J501 载板，并用螺丝固定。
- **步骤3.** 连接 GMSL 摄像头。

### 使用说明

:::note
在启用 GMSL 功能之前，请确保您已安装带有 GMSL 扩展板驱动程序的 JetPack 版本。
:::

**步骤1.** 在 Jetson 设备终端中输入以下命令，检查连接的摄像头是否被正确识别。

```bash
ls /dev/video*
```

<div align="center">
  <img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/ls_cam.png"/>
</div>

**步骤2.** 安装视频接口配置工具。

```bash
sudo apt install v4l-utils
```

**步骤3.** 为串行器和反串行器设置通道格式。

```bash
media-ctl -d /dev/media0 --set-v4l2 '"ser_0_ch_0":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_1_ch_1":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_2_ch_2":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_3_ch_3":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_4_ch_0":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_5_ch_1":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_6_ch_2":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_7_ch_3":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_0":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_1":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_2":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_3":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_0":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_1":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_2":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_3":0[fmt:YUYV8_1X16/1920x1536]'
```

:::note
每次设备重启后，我们都需要为串行器和反串行器设置通道格式。
:::

**步骤4.** 我们可以使用以下命令快速启动摄像头并打开窗口显示视频流。

```bash
gst-launch-1.0 v4l2src device=/dev/video0  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video1  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video2  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video3  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video4  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video5  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video6  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video7  ! xvimagesink -ev 
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/gmsl_result.png"/>
</div>


## 千兆以太网接口

J501 上有 2 个以太网端口：
- eth0：标准千兆以太网端口，支持 10/100/1000Mbps。
- eth1：10 千兆以太网端口。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/internet.png"/>
</div>

每个以太网端口上有 2 个 LED（绿色和黄色）：
- 绿色 LED：仅在连接到 1000M/10G 网络时亮起。
- 黄色 LED：显示网络活动状态。


## SATA 接口

reServer J501 载板支持 2 个 SATA 2.5" HDD/SSD，并配备 SATA 数据和电源连接器。您可以按以下步骤连接 HDD/SSD：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/sata_connection.jpeg"/>
</div>

### 使用说明
在 Jetson 设备系统启动后，您可以通过 `lsblk` 验证连接的 SATA 驱动器。

<div align="center">
  <img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/lsblk.png"/>
</div>


## M.2 Key M 

M.2 Key M 是为高速固态硬盘（SSD）设计的接口，提供超快的数据传输速度，非常适合高性能应用。

### 支持的 SSD 如下：
- [128GB NVMe M.2 PCle Gen3x4 2280 内部 SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 内部 SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 内部 SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 内部 SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)

### 使用说明

在 Jetson 设备中打开终端，输入以下命令测试 SSD 的读写速度。

```bash
sudo dd if=/dev/zero of=tempfile bs=1M count=1024 conv=fdatasync
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/test_nvme.png"/>
</div>

:::danger
请在测试完成后运行 `sudo rm tempfile` 命令以删除缓存文件。
:::

## M.2 Key E

J501载板配备了一个M.2 Key E接口，通过该接口可以扩展设备的蓝牙和Wi-Fi功能。

我们推荐使用 Intel Dual Band Wireless-Ac 8265 w/Bluetooth 8265.NGWMG 模块。

### 硬件连接

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/wifi_connection.jpeg"/>
</div>

### 使用说明

安装Wi-Fi模块并启动设备后，我们可以配置设备的Wi-Fi和蓝牙设置。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-wifi-bluetooth-test.gif"/>
</div>

当然，我们也可以通过以下命令检查设备的运行状态。
```bash
ifconfig
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/wifi_ifconfig.png"/>
</div>

```bash
bluetoothctl
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/bluetoothctl.png"/>
</div>

## M.2 Key B

J501载板配备了一个M.2 Key B连接器，支持4G和5G模块。目前我们已经测试了 **SIM8202G-M2 5G模块**。

### 硬件连接

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/5G_connection.png"/>
</div>
  

## Mini PCIe

J501载板配备了一个Mini PCIe连接器，支持4G和LoRa模块。然而，您只能同时连接一个4G模块或一个LoRa模块。一些4G模块还嵌入了GPS功能，我们也会讨论这一点。

### 4G模块

#### 硬件连接

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/minipcie_4g.jpeg"/>
</div>


- **步骤1.** 在20Pin Header上的 **SIM_MUX_SEL** 和 **GND** 引脚之间添加一个跳线。

- **步骤2.** 将4G模块插入Mini PCIe插槽并用螺丝固定。

- **步骤3.** 将支持4G的Nano SIM卡插入板上的SIM卡槽。

:::note
如果您想移除SIM卡，请按压卡片以触发内部弹簧，使SIM卡从卡槽弹出。
:::

### 使用说明

**步骤1.** 安装minicom：

```bash
sudo apt update
sudo apt install minicom -y
```

**步骤2.** 进入连接的4G模块的串行控制台，以便输入AT命令并与4G模块交互：

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

**步骤3.** 按Ctrl+A，然后按E以打开本地回显。

**步骤4.** 输入命令 "AT" 并按回车。如果看到响应 "OK"，则说明4G模块工作正常。

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/22.jpg"/>
</div>

**步骤5.** 输入命令 "ATI" 以检查模块信息。

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/23.png"/>
</div>

## DI/DO/CAN

J501载板支持4个数字输入通道和4个数字输出通道，所有通道均光电隔离，可有效保护主板免受电压尖峰或其他电气干扰。此外，该连接器还提供两个CAN接口，我们将在本Wiki的后续部分讨论。

<div align="center">
  <img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/dido.jpeg"/>
</div>

<table>
  <thead>
    <tr>
      <th>类型</th>
      <th>标签名称</th>
      <th>原理图信号</th>
      <th>模块引脚编号</th>
      <th>BGA编号</th>
      <th>GPIO编号</th>
      <th>电压/电流限制</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>输入</td>
      <td>DI1</td>
      <td>DI_12V_1/DI_1_GPIO17</td>
      <td>A54</td>
      <td>PP.04</td>
      <td>444</td>
      <td rowSpan={4}>12V/ 总电流20mA</td>
    </tr>
    <tr>
      <td>DI2</td>
      <td>DI_12V_2/DI_2_GPIO18</td>
      <td>C55</td>
      <td>PQ.04</td>
      <td>452</td>
    </tr>
    <tr>
      <td>DI3</td>
      <td>DI_12V_3/DI_3_GPIO19</td>
      <td>K56</td>
      <td>PN.02</td>
      <td>434</td>
    </tr>
    <tr>
      <td>DI4</td>
      <td>DI_12V_4/DI_4_GPIO33</td>
      <td>C54</td>
      <td>PM.07</td>
      <td>431</td>
    </tr>
    <tr>
      <td rowSpan={4}>输出</td>
      <td>DO1</td>
      <td>DO_40V_1/DI_1_GPIO</td>
      <td>E59</td>
      <td>PAA.04</td>
      <td>320</td>
      <td rowSpan={4}>40V/ 每引脚负载40mA</td>
    </tr>
    <tr>
      <td>DO2</td>
      <td>DO_40V_2/DI_2_GPIO</td>
      <td>F59</td>
      <td>PAA.07</td>
      <td>323</td>
    </tr>
    <tr>
      <td>DO3</td>
      <td>DO_40V_3/DI_3_GPIO</td>
      <td>B62</td>
      <td>PBB.01</td>
      <td>325</td>
    </tr>
    <tr>
      <td>DO4</td>
      <td>DO_40V_4/DI_4_GPIO</td>
      <td>C61</td>
      <td>PBB.00</td>
      <td>324</td>
    </tr>
  </tbody>
</table>

:::note
- 12V数字输入，地信号需要连接到 **GND_DI**。

- 数字输出，最大耐压40V，地信号需要连接到 **GND_DO**。

- CAN总线采用标准差分信号，地信号需要连接到 **GND_ISO**。
:::

### DI连接概述

我们可以按照下图进行DI连接。建议在DI线上串联一个电阻。在测试中，我们使用了一个4.7kΩ电阻连接到DI1引脚。

<div align="center">
  <img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/dido_di.png"/>
</div>

### DI使用说明

我们需要在DI线上输入12V电压才能被检测为输入。

**步骤1.** 按照上图连接到DI1引脚并输入12V。

**步骤2.** 按如下方式打开DI1的GPIO：

```bash
sudo su 
cd /sys/class/gpio
echo 444 > export 
cd PP.04
```

:::note
我们可以参考DI/DO引脚分配表找到GPIO编号和BGA编号。在上述示例中，对于DI1引脚，GPIO编号为444，BGA编号为PP.04。
:::

**步骤3.** 执行以下命令检查状态：

```bash
cat value
```

如果输出为 0，表示有 12V 输入。如果输出为 1，表示没有输入电压。

### DO 的连接概览

我们可以按照下图为 DO 进行连接。建议在 DO 线上串联一个电阻。在这里，我们测试使用了一个 4.7kΩ 的电阻。

<div align="center">
  <img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/dido_do.png"/>
</div>

### DO 的使用说明

在这里，我们需要按照上图所示连接一个负载。测试的最简单方法是连接一个万用表（如果你有的话），否则可以连接一个最大电压小于 40V 的负载。

**步骤1.** 按照上图所示将连接完成到 DO1 引脚，并输入最大 40V。

**步骤2.** 按如下方式打开 D01 的 GPIO：

```bash
sudo su 
cd /sys/class/gpio
echo 320 > export 
cd PAA.04
echo out > direction
```

**步骤3.** 执行以下命令打开引脚：

```bash
echo 1 > value
```

如果负载被打开，或者万用表输出了你输入的电压，则测试正常。

### CAN

J501 载板具有两个支持 CAN FD（控制器局域网灵活数据速率）协议的 CAN 接口，速率为 5Mbps。CAN 接口通过电容隔离实现隔离，这提供了出色的 EMI 保护，并确保在工业和自动化应用中的可靠通信。默认安装了一个 120Ω 的终端电阻，你可以通过 GPIO 开关来打开或关闭该电阻。

:::note
CAN 接口使用隔离电源，这意味着连接到 CAN 接口的外部设备的地信号应连接到 **GND_ISO** 引脚。
:::

### 使用 USB 转 CAN 适配器的连接概览

要测试和与 CAN 总线接口，请将 USB 转 CAN 适配器连接到板上的 CAN 接口，如下图所示：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/dido_can.png"/>
</div>

这里我们使用了 [USB 转 CAN 分析仪适配器](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html) 和 Bazaar 上提供的 USB 电缆。

### 使用 USB 转 CAN 适配器的使用说明

**步骤1.** 从制造商网站下载并安装你所使用的 USB 转 CAN 适配器的驱动程序。在我们的案例中，根据我们使用的适配器，驱动程序可以在 [这里](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Driver/driver%20for%20USBCAN(CHS40)/windows-driver) 找到。

**步骤2.** 一些适配器还附带了用于 PC 与 CAN 设备通信的必要软件。在我们的案例中，根据我们使用的适配器，我们下载并安装了可以在 [这里](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program) 找到的软件。

**步骤3.** 初始化 Jetson 的 CAN 接口。

在 Jetson 中创建一个名为 **`can_init.sh`** 的新文件，并写入以下内容：

```bash
#!/bin/bash

sudo gpioset gpiochip2 9=0 
sudo gpioset gpiochip2 8=0

sudo busybox devmem 0x0c303018 w 0xc458
sudo busybox devmem 0x0c303010 w 0xc400
sudo busybox devmem 0x0c303008 w 0xc458
sudo busybox devmem 0x0c303000 w 0xc400

sudo modprobe can
sudo modprobe can_raw
sudo modprobe mttcan

sudo ip link set can0 down
sudo ip link set can1 down

sudo ip link set can0 type can bitrate 125000
sudo ip link set can1 type can bitrate 125000
sudo ip link set can0 up
sudo ip link set can1 up
```

然后，在 Jetson 的终端窗口中运行我们刚刚创建的文件：

```bash
sudo apt-get install gpiod
cd <path to can_init.sh>
sudo chmod +x can_init.sh
./can_init.sh
```

**步骤4.** 在终端中输入 `ifconfig`，你将看到 CAN 接口已启用。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/can.png"/>
</div>

**步骤5.** 打开之前安装的 CAN 软件。在本例中，我们将打开根据我们使用的 CAN 适配器安装的软件。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/42.jpg"/>
</div>

**步骤6.** 将 USB 转 CAN 适配器连接到 PC，并通过 Windows 搜索栏搜索 **设备管理器** 打开它。现在你将在 **端口 (COM & LPT)** 下看到已连接的适配器。记下此处列出的串口。根据下图，串口为 **COM9**。

<div align="center">
  <img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/43.png"/>
</div>

**步骤7.** 打开 CAN 软件，点击 **COM** 部分旁边的 **刷新**，点击下拉菜单并选择与适配器对应的串口。保持 **COM bps** 为默认值，然后点击 **打开**。

<div align="center">
  <img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/44.jpg"/>
</div>

**步骤8.** 保持 **模式** 和 **CAN bps** 为默认值，将 **类型** 更改为 **标准帧**，然后点击 **设置并启动**。

<div align="center">
  <img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/45.png"/>
</div>

**步骤9.** 在 reComputer Industrial 上，执行以下命令向 PC 发送 CAN 信号：

```sh
cansend can0 123#abcdabcd
```

现在你将在软件中看到接收到的信号，如下所示：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/46.png"/>
</div>

**步骤10.** 在 reComputer Industrial 上，执行以下命令等待接收来自 PC 的 CAN 信号：

```sh
candump can0 &
```

**步骤11.** 在 CAN 软件中，点击 **发送单帧**：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/47.png"/>
</div>

现在你将在 reComputer Industrial 上看到接收到的信号，如下所示：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/>
</div>

:::info
我们还可以参考 [这里](https://wiki.seeedstudio.com/reComputer_Industrial_J40_J30_Hardware_Interfaces_Usage/#connection-overview-with-reterminal-dm) 来通过 CAN 建立 J501 载板与 reTerminal DM 之间的通信。
:::

## USB

reServer J501 载板共有 5 个 USB 接口：3 个 USB 3.1 Type-A 接口，1 个 USB 3.1 Type-C 接口，以及 1 个用于调试的 USB 2.0 Type-C 接口。

### 使用说明

我们可以在 Jetson 终端中输入 `watch -n 1 lsusb -tv` 来探测 USB 接口。一旦连接了 USB 设备，该接口的详细信息将显示在这里。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/usb_lsusb.png"/>
</div>

此外，您可以参考 [M.2 Key M](#m2-key-m) 来测试 USB 存储设备的读写速度。

:::note
请注意，在测试之前，请使用 `cd` 命令导航到 USB 存储设备挂载的文件夹。
:::


## RTC

J501 载板具有 RTC 接口，即使系统断电也能提供精确的时间记录。

### 连接方式

J501 载板提供两种不同方式连接 RTC 电池。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="RTC socket" label="RTC 插槽">

将 3V CR1220 纽扣电池连接到板上的 RTC 插槽，如下图所示。确保电池的 **正极 (+)** 朝上。

<div align="center">
  <img width ="220" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/11.jpg"/>
</div>

</TabItem>

<TabItem value="JST socket" label="JST 插槽">

将带有 JST 接头的 3V CR2302 纽扣电池连接到板上的 **2 针 1.25mm** JST 插槽，如下图所示。

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/12.jpg"/>
</div>

</TabItem>
</Tabs>

### 使用说明

**步骤1.** 按上述方式连接 RTC 电池。

**步骤2.** 打开 J501。

**步骤3.** 在 Ubuntu 桌面上，点击右上角的下拉菜单，导航到 `Settings > Date & Time`，通过以太网连接网络并选择 **Automatic Date & Time** 以自动获取日期/时间。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/>
</div>

:::note
如果您未通过以太网连接到互联网，可以在此手动设置日期/时间。
:::

**步骤4.** 打开终端窗口，执行以下命令检查硬件时钟时间：

```bash
sudo hwclock
```

您将看到类似以下的输出，但这不是正确的日期/时间：

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/14.png"/>
</div>

**步骤5.** 输入以下命令，将硬件时钟时间更改为当前系统时钟时间：

```bash
sudo hwclock --systohc
```

**步骤6.** 移除任何连接的以太网线，以确保不会从互联网获取时间，然后重启板子：

```bash
sudo reboot
```

**步骤7.** 检查硬件时钟时间，验证即使设备断电，日期/时间也保持不变。

现在我们将创建一个脚本，在每次启动时始终从硬件时钟同步系统时钟。

**步骤8.** 使用您喜欢的文本编辑器创建一个新的 shell 脚本。这里我们使用 **vi** 文本编辑器：

```bash
sudo vi /usr/bin/hwtosys.sh 
```

**步骤9.** 按 **i** 进入 **插入模式**，然后复制并粘贴以下内容到文件中：

```bash
#!/bin/bash

sudo hwclock --hctosys
```

**步骤10.** 使脚本可执行：

```bash
sudo chmod +x /usr/bin/hwtosys.sh 
```

**步骤11.** 创建一个 systemd 文件：

```bash
sudo vim /lib/systemd/system/hwtosys.service 
```

**步骤12.** 在文件中添加以下内容：

```bash
[Unit]
Description=Change system clock from hardware clock

[Service]
ExecStart=/usr/bin/hwtosys.sh

[Install]
WantedBy=multi-user.target
```

**步骤13.** 重新加载 systemctl 守护进程：

```bash
sudo systemctl daemon-reload 
```

**步骤14.** 启用新创建的服务以在启动时运行，并启动该服务：

```bash
sudo systemctl enable hwtosys.service
sudo systemctl start hwtosys.service
```

**步骤15.** 验证脚本是否作为 systemd 服务正常运行：

```bash
sudo systemctl status hwtosys.service
```

**步骤16.** 重启板子，您将看到系统时钟现在与硬件时钟同步。


## 风扇

J501 板载风扇接口由 nvfancontrol 守护进程管理，该进程根据 Jetson 模块的运行状态自适应调整风扇速度。我们可以通过其配置文件 `/etc/nvfancontrol.conf` 配置守护进程的工作模式。

:::note
更多信息请参考 [这里](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control)。
:::

此外，我们可以使用 jtop 工具手动设置风扇速度。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/jtop.png"/>
</div>

## HDMI 
J501 配备了一个 HDMI 2.1 Type A 接口，支持 7680x4320 的分辨率。这允许超高清的视频输出。


## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>