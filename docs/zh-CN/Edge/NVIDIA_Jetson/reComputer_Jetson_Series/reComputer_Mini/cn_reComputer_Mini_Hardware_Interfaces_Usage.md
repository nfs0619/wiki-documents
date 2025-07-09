---
description: 本文涵盖了 reComputer Mini J40 系列的硬件和接口，包括电源、显示、用于 Wi-Fi 和 SSD 的 M.2 插槽、USB 接口、RTC、风扇管理等内容。提供了设置说明和性能测试技巧，帮助用户扩展项目。
title: reComputer Mini 硬件和接口使用指南
tags:
  - reComputer
  - reComputer mini
  - 嵌入式计算机
  - 机器人
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_mini.webp
slug: /cn/recomputer_jetson_mini_hardware_interfaces_usage
last_update:
  date: 05/15/2025
  author: Youjiang
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_mini.jpg"/>
</div>

本篇 Wiki 介绍了 reComputer Mini J40 系列的各种硬件和接口，以及如何使用它们来扩展您的项目创意。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-optional-accessories.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱</font></span></strong>
    </a>
</div>

## 硬件接口概览
<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/recomputer_mini/hardware_overview.png"/>
</div>

## 电源 

reComputer Mini 配备了 **12-54V (XT30)** 电源接口，兼容宽电压输入范围（12V 至 54V），适用于各种电源环境。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/power.png"/>  
</div>


## 显示

该产品配备了一个支持 Host + DP（DisplayPort）功能的 Type-C 接口，这意味着它不仅支持数据传输，还可以通过该接口连接显示器，实现高质量的视频输出。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/display.png"/>  
</div>


## M.2 Key E 用于 Wi-Fi 和蓝牙

reComputer Mini 配备了一个 M.2 Key E 接口，通过它可以扩展设备的蓝牙和 Wi-Fi 功能。

我们推荐使用 Intel Dual Band RTL8822CE 无线网卡。

### 硬件连接

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/wifi.png"/>
</div>

### 使用说明

安装 Wi-Fi 模块并启动设备后，我们可以配置设备的 Wi-Fi 和蓝牙设置。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-wifi-bluetooth-test.gif"/>
</div>

当然，我们也可以使用以下命令检查设备的运行状态。
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

## M.2 Key M 用于 SSD

M.2 Key M 是为高速固态硬盘（SSD）设计的接口，提供超快的数据传输速度，非常适合高性能应用。

开箱即用，reComputer 工业版包含一个 128GB 工业级 SSD，连接到 M.2 Key M 插槽（x4 PCIe Gen3），并预装了 JetPack 系统。

### 硬件连接

如果您想移除附带的 SSD 并安装新的 SSD，需要确保您的 SSD 满足以下两个条件：

- 支持 **M.2 Key M 插槽，x4 PCIe Gen3** 接口。
- 符合 **2242** 尺寸规格。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/ssd.png"/>
</div>

### 使用说明

在 Jetson 设备中打开终端，输入以下命令测试 SSD 的读写速度。

```bash
sudo dd if=/dev/zero of=tempfile bs=1M count=1024 conv=fdatasync
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/test_nvme.png"/>
</div>

:::danger
测试完成后，请运行 `sudo rm tempfile` 命令删除缓存文件。
:::


## 以太网
### 硬件连接
reComputer Mini 在扩展板上配备了一个 **RJ45 千兆以太网接口 (10/100/1000M)**。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/network_photo.png"/>
</div>

### 使用说明
在终端中输入 `ifconfig`，可以看到以太网接口映射的设备名称为 `eth0`：
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/recomputer_mini/network_ifconfig.png"/>
</div>

使用千兆以太网 RJ45 网线将 **reComputer Mini** 连接到 **PC**。通过工具 `iperf`，我们可以简单测试以太网接口的传输速率。
在 **PC** 和 **reComputer Mini** 上打开终端并安装 `iperf3`。
```bash
sudo apt update
sudo apt install iperf3
```
在 PC 上打开终端并输入 `iperf3 -s`。
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/recomputer_mini/iperf3PC.jpg"/>
</div>

然后，在 **reComputer Mini** 上打开终端并输入 `iperf3 -c <PC 的 IP 地址>`。
在本例中，我的 PC 网络接口的 IP 地址是 `192.168.12.211`。示例命令如下：
```bash
iperf3 -c 192.168.12.211
```

根据下图显示的结果，可以看到 reComputer Mini 的以太网传输速度可以达到千兆级别。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/recomputer_mini/networkspeed.jpg"/>
</div>

## USB

### 硬件连接

reComputer Mini 载板总共有 4 个 USB 接口：2 个 USB 3.2 Type-A 接口，1 个用于刷机的 USB 2.0 Micro-B 接口，以及 1 个 USB 2.0 GH1.25 接口。而扩展板上有 4 个 USB 3.0 Type-A 接口。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/USBshow.jpg"/>
</div>

在 [数据手册](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf) 中，可以找到 **USB 2.0** 5-pin GH-1.25 接口的接线图，如下所示：
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/usb2.0-datasheet.png"/>
</div>

我们可以参考以下步骤，通过 USB 3.2/USB 2.0/USB 3.0 将存储设备连接到 reComputer mini，并测试 USB 的读写速度。**使用说明**将展示下一步操作。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/USBLINK.jpg"/>
</div>

### 使用说明

我们可以在 Jetson 终端中输入 `watch -n 1 lsusb -tv` 来探测 USB 端口。一旦连接了 USB 设备，该端口的详细信息将显示在这里。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/usb_lsusb.png"/>
</div>

通过 USB 3.2/USB 2.0/USB 3.0 连接存储设备后，在终端中输入以下命令以查看存储设备映射的分区：
```bash
ls /dev/sd*
```
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/sda1.png"/>
</div>

**/dev/sda1** 是通过 USB 连接的存储设备映射的分区。如果插入多个设备，它们可能会有不同的映射分区名称，例如：**/dev/sdb1**。

从 **GitHub** 拉取并运行测试程序以测量 USB 的读写速度。该程序将写入并读取 **1GB** 的临时数据，测试完成后这些数据将被删除。
`sudo ./USBIO` 后的参数取决于通过 USB 连接的存储设备的映射分区。
```bash
git clone https://github.com/jjjadand/Mini_USBIO_test.git
cd Mini_USBIO_test/
gcc -o USBIO USB_test.c
sudo ./USBIO /dev/sda1
```
通过 USB 3.2 连接的外部 SSD 进行 1GB 数据传输的读写速度如下：
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/usb-write-read.jpg"/>
</div>
该程序也适用于测试其他 USB 接口。

:::info
关于 USB Micro-B 接口的使用，请参考 [此 Wiki](https://wiki.seeedstudio.com/recomputer_jetson_mini_getting_started/) 获取详细教程。
:::

## UART
reComputer Mini 载板有两个 4-pin GH-1.25 UART 接口：**UART1** 和 **UART-DEBUG**。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/uart_photo.png"/>
</div>

### UART1
#### 硬件连接
在 [数据手册](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf) 中，可以找到 **UART1** 4-pin GH-1.25 接口的接线图，如下所示：
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/uart1_datasheet.png"/>
</div>

为了测试和监控 **UART1** 的发送和接收功能，请选择一个合适的 [UART-to-USB](https://www.seeedstudio.com/USB-To-Uart-5V-3V3-p-1832.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InVhcnQgdXNiIiwiY19zZWFyY2hfcmVzdWx0X3BvcyI6MSwiY190b3RhbF9yZXN1bHRzIjoxMywiY19zZWFyY2hfcmVzdWx0X3R5cGUiOiJQcm9kdWN0IiwiY19zZWFyY2hfZmlsdGVycyI6InN0b3JlQ29kZTpbcmV0YWlsZXJdICYmIHF1YW50aXR5X2FuZF9zdG9ja19zdGF0dXM6WzFdIn0%3D) 模块（根据您的需求），按照数据手册中的接线图连接，然后安装 cutecom。

将一端连接到 **UART1** 的 4-pin GH-1.25 接口，另一端插入 USB 端口，确保 Tx 连接到 Rx，Rx 连接到 Tx。
**使用说明**将展示下一步操作。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/UARTLINK.jpg"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/uart2usb.png"/>
</div>

#### 使用说明
系统识别的 UART1 串口号为：**/dev/ttyTHS1**。您可以通过在终端中输入以下命令进行检查：
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/ttyTHS.png"/>
</div>

安装 **Cutecom** 以测试 **UART1** 的数据传输和接收：
```bash
sudo apt update
sudo apt install cutecom
```
在两个不同的终端中打开 **Cutecom**：
```bash
sudo cutecom
```
根据下图设置参数：在一个终端中，选择 **/dev/ttyTHS1** 作为“设备”选项。在另一个终端中，“设备”应根据您使用的 UART-to-USB 模块选择。您可以在“输入”字段中输入消息以测试数据的传输和接收。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/cutecom_uart1.png"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/cutecom_uart.png"/>
</div>

### UART-DEBUG
#### 硬件连接
在 [数据手册](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf) 中，可以找到 UART-DEBUG 4-pin GH-1.25 接口的接线图，如下所示：
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/UART-DEBUG.png"/>
</div>

为了测试 **UART-DEBUG**，您还需要一个 **UART-to-USB** 模块，该模块应按照下图连接到您的 **PC**。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/UARTDBdraw.png"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/UART-DEBUG_photo.jpg"/>
</div>

#### 使用说明
完成硬件连接后。

首先在您的 PC 上安装串口登录工具 [**MobaXterm**](https://mobaxterm.mobatek.net/)。然后打开 PC 上的 **“设备管理器”** 检查 **UART-to-USB** 模块映射的 COM 端口。
为了测试 **UART-DEBUG**，您还需要一个 **UART-to-USB** 模块，该模块应按照下图连接到您的 **PC**。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/mobax1.png"/>
</div>

在 **PC** 上打开 [**MobaXterm**](https://mobaxterm.mobatek.net/)，点击 “Session”，然后点击 “Serial”。根据 **“设备管理器”** 中映射的端口选择对应的 COM 端口，并将波特率设置为 115200。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/mobax2.png"/>
</div>

输入用户名和密码后，您将通过 **UART-DEBUG** 登录到 reComputer Mini 的终端。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/mobax3.png"/>
</div>

<!-- ### 按钮和灯 -->

## RTC

reComputer Mini 配备了 RTC 接口，即使系统断电也能提供精准的时间记录。

将一块带有 JST 接头的 3V CR2032 纽扣电池连接到板上的 2 针 1.25mm JST 插座。

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/rtc.png"/>
</div>

<!-- #### 使用说明 -->

## 风扇

reComputer Mini 的板载风扇接口由 `nvfancontrol` 守护进程管理，该进程会根据 Jetson 模块的运行状态自适应调整风扇速度。我们可以通过配置文件 `/etc/nvfancontrol.conf` 配置守护进程的工作模式。

:::note
更多信息请参考 [这里](https://docs.nvidia.com/jetson/archives/r36.3/DeveloperGuide/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control)。
:::

此外，我们还可以使用 **jtop** 工具手动设置风扇速度。

在终端中输入以下命令安装 **jtop**：

```bash
sudo apt update
sudo apt install python3-pip -y
sudo pip3 install jetson-stats
```
然后重启您的 reComputer Mini：
```bash
sudo reboot
```
安装 **jtop** 后，您可以在终端中启动它：
```bash
jtop
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/jtop.png"/>
</div>

<!-- ### 5G 模块 -->

## CAN
reComputer Mini 配备了两个 CAN 接口，扩展板上有四个外部 CAN 接口。**CAN0** 包括两个 **XT30 接头 (2+2)**，而 **CAN1** 包括两个 **4 针 GH-1.25** 接头。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/can-photo.png"/>
</div>

### CAN0/CAN1 通信
#### 硬件连接
在 [数据手册](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf) 中，您可以找到 CAN0/CAN1 接口的接线图，如下所示：
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/can1-datasheet.png"/>
</div>

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/can0-datasheet.png"/>
</div>

这里我们将演示以 125 kbps 的波特率从 CAN0 向 CAN1 连续发送数据 30 秒。首先，如下图所示，将 CAN0 的信号线连接到 CAN1 的信号线。具体来说，连接 **CAN0_H 到 CAN1_H** 和 **CAN0_L 到 CAN1_L**。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/CANdraw.jpg"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/CAN0toCAN1.jpg"/>
</div>

#### 使用说明
完成硬件连接后。

在终端中输入以下命令查看映射到 CAN0 和 CAN1 的设备名称：
```bash
ifconfig -a
```
这里，`can0` 对应 **CAN0** 接口，`can1` 对应 **CAN1** 接口。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/can_express.jpg"/>
</div>

在终端中安装 `can-utils`：
```bash
sudo apt-get update
sudo apt-get install can-utils
```

打开 **终端 1**，输入以下命令监控从 `can0` 发送的数据字节数：
```bash
watch -n 1 'ifconfig can0 | grep "TX packets"'
```

打开 **终端 2**。从 GitHub 拉取测试 CAN 通信的脚本并运行：
```bash
git clone https://github.com/jjjadand/Mini_CANtest.git
cd Mini_CANtest
sudo ./canTest.sh
```
通过观察两个终端，您可以看到在 **终端 1** 中，**CAN0** 发送的数据字节数在增加。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/canTX.jpg"/>
</div>

**终端 2** 将打印 **CAN1** 从 **CAN0** 接收到的数据。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/canRX.jpg"/>
</div>

### CAN0 电源输出
**CAN0-PPOWER** 的输出电压理论上等于 reComputer Mini 当前 **DC** 输入电压。**DC** 输入电压范围为 `12-54V`。因此，**CAN0 XT30 (2+2)** 的电源输出范围也是 `12-54V`。

我们将为 **DC** 输入提供不同的电压，然后测量 **CAN0-PPOWER** 的输出电压。
使用稳定的电源和万用表，并按照下图连接。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/CAN0connet.png"/>
</div>

当 **DC** 输入为 `26.3V` 时，万用表测得 **CAN0-POWER** 输出为 `26.03V`。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/CAN0-power1.jpg"/>
</div>

当 **DC** 输入为 `12.6V` 时，万用表测得 **CAN0-POWER** 输出为 `12.48V`。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/CAN0-power2.jpg"/>
</div>

根据上述测试结果可以看出，**CAN0-POWER** 的输出接近 **DC** 输入。
如果您想了解更多详细信息，可以参考 [原理图](https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_Mini_SCH.7z)。

## I2C
### 硬件连接
reComputer 的扩展板配备了两个 **4 针 GH-1.25** IIC 接口，分别为 IIC0 和 IIC1。

在 [数据手册](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf) 中，您可以找到 IIC0/IIC1 4 针 GH-1.25 接口的接线图，如下所示：
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/IIC0-datasheet.jpg"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/IIC1-datasheet.jpg"/>
</div>

选择一个 IIC 接口设备进行测试；具体选择由您决定。这里，一个 [IIC 接口传感器](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6IkkyYyIsImNfc2VhcmNoX3Jlc3VsdF9wb3MiOjQ3LCJjX3RvdGFsX3Jlc3VsdHMiOjUxLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D) 被连接到 I2C0/I2C1 以进行测试。

测试过程包括扫描 IIC0/IIC1 上外部连接设备的地址。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/IICdraw.png"/>
</div>

### 使用说明

完成硬件连接后。

我们需要安装 IIC 测试工具。在扫描设备之前，在终端中输入以下命令：
```bash
sudo apt update
sudo apt-get install i2c-tools
```
然后，在终端中输入以下命令以查看 IIC 总线上的映射名称。

```bash
i2cdetect -l
```

扩展板上的外部接口 **IIC0-J7** 对应于 `i2c-1 i2c c240000.i2c`，外部接口 **IIC1-J7** 对应于 `i2c-7 i2c c250000.i2c`。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/iic-l.jpg"/>
</div>

连接外部 I2C 设备并设置其地址后，打开两个不同的终端并输入以下命令以分别扫描 I2C0 和 I2C1：
```bash
sudo i2cdetect -y -r 1
sudo i2cdetect -y -r 7
```
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/iic0-addr.png"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/iic1-addr.png"/>
</div>

我们可以看到，连接到 **I2C0** 的设备被设置为地址 `0x15`，连接到 **I2C1** 的设备被设置为地址 `0x19`。

## SPI
### 硬件连接
reComputer 的扩展板具有一个 **6-pin GH-1.25** 外部 SPI 接口。

在 [数据手册](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf) 中，您可以找到 SPI 6-pin GH-1.25 接口的接线图，如下所示：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/spi-datasheet.jpg"/>
</div>

如果您不使用外部 SPI-to-USB 模块，可以自行连接 **6-pin GH-1.25** SPI 接口以测试数据的发送和接收。将 **MOSI** 连接到 **MISO**，并将 **CS0** 连接到 **SCK**。
接线图如下：
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/SPIdraw.png"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/spi-photo.jpg"/>
</div>

### 使用说明
完成硬件连接后。

然后，从 GitHub 拉取 SPI 测试代码并编译：

```bash
git clone https://github.com/rm-hull/spidev-test
cd spidev-test
gcc spidev_test.c -o spidev_test
```
在终端中输入以下命令以查看 SPI 映射的设备名称。例如，`/dev/spidev0.0` 对应于扩展板上的 SPI0 (J17)。
```bash
ls -l /dev/spi*
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/spi-dev.png"/>
</div>

在终端中输入以下命令以运行 SPI 测试程序：
```bash
sudo ./spidev_test -v
```

您可以观察到扩展板 (J17) 上 SPI0 的数据发送和接收。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/spi-res.jpg"/>
</div>

## 资源
- [reComputer Mini 数据手册](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf)
- [reComputer Mini 原理图](https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_Mini_SCH.7z)
- [reComputer Mini 3D 模型](https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_Mini_3D.7z)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>