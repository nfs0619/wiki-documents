---
description: reComputer 工业 J20 系列的硬件和接口使用
title: reComputer 工业 J20 硬件和接口使用
tags:
  - reComputer 工业
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_Industrial_J20_Hardware_Interfaces_Usage
last_update:
  date: 05/15/2025
  author: Lakshantha
---

# USB 915

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

本 Wiki 介绍了 reComputer 工业 J2012、J2011 上的各种硬件和接口，以及如何使用它们来扩展您的项目创意。

## 拆解 reComputer 工业设备

首先，最好拆解外壳以访问所有接口。按照以下步骤卸下位于背面的 4 个螺丝，以拆解 reComputer 工业设备。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/98.png"/></div>

## CSI 摄像头

reComputer 工业设备配备了 **2 个 2 通道 15 针 MIPI CSI 摄像头连接器**，支持以下摄像头：

- IMX219 摄像头

  - [Raspberry Pi Camera V2](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)
  - [IMX219-130 8MP 摄像头，130° 视场角](https://www.seeedstudio.com/IMX219-130-Camera-130-FOV-Applicable-for-Jetson-Nano-p-4606.html)
  - [IMX219-160 8MP 摄像头，160° 视场角](https://www.seeedstudio.com/IMX219-160-Camera-160-FOV-Applicable-for-Jetson-Nano-p-4603.html)
  - [IMX219-200 8MP 摄像头，200° 视场角](https://www.seeedstudio.com/IMX219-200-Camera-200-FOV-Applicable-for-Jetson-Nano-p-4609.html)
  - [IMX219-77 8MP 摄像头，77° 视场角](https://www.seeedstudio.com/IMX219-77-Camera-77-FOV-Applicable-for-Jetson-Nano-p-4608.html)
  - [IMX219 M12/CS 安装 CMOS 摄像头模块](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)
  - [IMX219-83 8MP 3D 立体摄像头模块](https://www.seeedstudio.com/IMX219-83-Stereo-Camera-8MP-Binocular-Camera-Module-Depth-Vision-Applicable-for-Jetson-Nano-p-4610.html)
  - [IMX219-77IR 8MP 红外夜视摄像头，77° 视场角](https://www.seeedstudio.com/IMX219-77IR-Camera-77-FOV-Infrared-Applicable-for-Jetson-Nano-p-4607.html)
  - [IMX219-160IR 8MP 摄像头，160° 视场角](https://www.seeedstudio.com/IMX219-160IR-Camera160-FOV-Infrared-Applicable-for-Jetson-Nano-p-4602.html)
  - [IMX219 M12/CS 安装 CMOS 摄像头模块](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)

- IMX477 摄像头

  - [Raspberry Pi 高质量摄像头](https://www.seeedstudio.com/Raspberry-Pi-High-Quality-Cam-p-4463.html)
  - [Raspberry Pi HQ 摄像头 - M12 安装](https://www.seeedstudio.com/Raspberry-Pi-HQ-Camera-M12-mount-p-5578.html)
  - [Raspberry Pi 高质量摄像头](https://www.seeedstudio.com/High-Quality-Camera-For-Raspberry-Pi-Compute-Module-Jetson-Nano-p-4729.html)

### 连接概览

这里的 2 个 CSI 摄像头连接器标记为 **CAM0 和 CAM1**。您可以将一个摄像头连接到任意一个连接器，或者同时将两个摄像头分别连接到两个连接器。

- **步骤 1：** 轻轻拉出 CSI 连接器上的黑色锁扣。

<div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/5.png"/></div>

- **步骤 2：** 将 15 针排线插入连接器，确保金手指朝下。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/6.png"/></div>

- **步骤 3：** 推入黑色锁扣以固定排线。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/10.png"/></div>

### 使用方法

首先，您需要配置开发板以加载适用于您将使用的特定摄像头的驱动程序。JetPack 系统内置了一个工具来支持 IMX219 和 IMX477 摄像头。

- **步骤 1：** 打开终端并执行以下命令：

```sh
sudo /opt/nvidia/jetson-io/jetson-io.py
```

- **步骤 2：** 选择 **Configure Jetson Nano CSI Connector**。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/119.jpg"/></div>

- **步骤 3：** 选择 **Configure for compatible hardware**。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/120.jpg"/></div>

- **步骤 4：** 选择您想使用的摄像头。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/121.jpg"/></div>

- **步骤 5：** 选择 **Save pin changes**。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/122.jpg"/></div>

- **步骤 6：** 选择 **Save and reboot to reconfigure pins**。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/123.jpg"/></div>

- **步骤 7：** 按下键盘上的任意键，设备将以应用的摄像头配置重新启动。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/124.jpg"/></div>

您可以通过两种不同的方法使用 CSI 摄像头。根据摄像头连接器，执行以下命令：

- 方法 1：

对于 CAM0 端口：

```sh
nvgstcapture-1.0 sensor-id=0 
```

对于 CAM1 端口：

```sh
nvgstcapture-1.0 sensor-id=1  
```

:::note
如果您想更改摄像头的其他设置，可以输入 **"nvgstcapture-1.0 --help"** 来访问所有可配置选项。
:::

- 方法 2：

对于 CAM0 端口：

```sh
gst-launch-1.0 nvarguscamerasrc sensor-id=0 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

对于 CAM1 端口：

```sh
gst-launch-1.0 nvarguscamerasrc sensor-id=1 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

:::note
如果您想更改摄像头的其他设置，可以更新参数，例如 **width, height, framerate, format** 等。
:::

## RTC

reComputer 工业设备配备了两种不同的方式来连接 RTC 电池。

### 连接概述

- 方法 1：

将 **3V CR1220 纽扣电池** 连接到板上的 RTC 插槽，如下图所示。确保电池的 **正极 (+)** 面朝上。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/11.jpg"/></div>

- 方法 2：

将带有 JST 接头的 **3V CR2302 纽扣电池** 连接到板上的 2 针 1.25mm JST 插槽，如下图所示。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/12.jpg"/></div>

### 使用方法

- **步骤 1：** 按上述方法连接 RTC 电池。

- **步骤 2：** 打开 reComputer Industrial。

- **步骤 3：** 在 Ubuntu 桌面上，点击右上角的下拉菜单，导航到 `设置 > 日期和时间`，通过以太网线连接到网络，并选择 **自动日期和时间** 以自动获取日期/时间。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/></div>

:::note
如果您未通过以太网连接到互联网，可以在此手动设置日期/时间。
:::

- **步骤 4：** 打开终端窗口，执行以下命令检查硬件时钟时间：

```sh
sudo hwclock
```

您将看到类似以下的输出，但这不是正确的日期/时间：

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/14.png"/></div>

- **步骤 5：** 通过输入以下命令，将硬件时钟时间更改为当前系统时钟时间：

```sh
sudo hwclock --systohc
```

- **步骤 6：** 移除任何连接的以太网线，以确保不会从互联网获取时间，然后重启设备：

```sh
sudo reboot
```

- **步骤 7：** 检查硬件时钟时间，验证即使设备断电，日期/时间仍保持不变。

现在我们将创建一个脚本，在每次启动时始终从硬件时钟同步系统时钟。

- **步骤 8：** 使用您喜欢的任何文本编辑器创建一个新的 shell 脚本。这里我们使用 **vi** 文本编辑器：

```sh
sudo vi /usr/bin/hwtosys.sh 
```

- **步骤 9：** 按 **i** 键进入 **插入模式**，然后复制并粘贴以下内容到文件中：

```sh
#!/bin/bash

sudo hwclock --hctosys
```

- **步骤 10：** 使脚本可执行：

```sh
sudo chmod +x /usr/bin/hwtosys.sh 
```

- **步骤 11：** 创建一个 systemd 文件：

```sh
sudo nano /lib/systemd/system/hwtosys.service 
```

- **步骤 12：** 在文件中添加以下内容：

```sh
[Unit]
Description=Change system clock from hardware clock

[Service]
ExecStart=/usr/bin/hwtosys.sh

[Install]
WantedBy=multi-user.target
```

- **步骤 13：** 重新加载 systemctl 守护进程：

```sh
sudo systemctl daemon-reload 
```

- **步骤 14：** 启用新创建的服务以在启动时运行，并启动该服务：

```sh
sudo systemctl enable hwtosys.service
sudo systemctl start hwtosys.service
```

- **步骤 15：** 验证脚本是否作为 systemd 服务正常运行：

```sh
sudo systemctl status hwtosys.service
```

- **步骤 16：** 重启设备，您将看到系统时钟现在与硬件时钟同步。

## M.2 Key M

开箱即用，reComputer Industrial 包含一个连接到 M.2 Key M 插槽的 128GB SSD，并预装了 JetPack 系统。

### 连接概述

如果您想移除预装的 SSD 并安装新的 SSD，可以按照以下步骤操作。我们仅推荐使用 Seeed 的 [128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)、[256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html) 和 [512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html) 存储 SSD，因为我们仅测试了这些 SSD。此外，该接口支持 PCIe Gen4.0 SSD。

- **步骤 1：** 移除预装 SSD 的螺丝。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/15.png"/></div>

- **步骤 2：** 将 SSD 从 SSD 连接器中滑出以移除。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/16.png"/></div>

- **步骤 3：** 插入新的 SSD 并重新拧紧螺丝。

### 使用方法

我们将解释如何对连接的 SSD 进行简单的基准测试。

- **步骤 1：** 执行以下命令检查写入速度：

```sh
sudo dd if=/dev/zero of=/home/nvidia/test bs=1M count=512 conv=fdatasync
```

- **步骤 2：** 执行以下命令检查读取速度。在执行写入速度测试后再执行此命令：

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/home/nvidia/test of=/dev/null bs=1M count=512
```

## mini PCIe

reComputer Industrial 配备了一个 mini PCIe 接口，支持 4G 和 LoRa 模块。然而，您一次只能连接一个 4G 模块或一个 LoRa 模块。

### 4G 模块连接概述

目前该板支持 EC25EUXGA 和 EC20CEHCLG 模块。

- **步骤 1：** 如果设备已开启，请将其关闭。

- **步骤 2：** 移除预装的支架。仅当您使用 M.2 Key B 接口时才需要此支架。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/110.jpg"/></div>

- **步骤 3：** 将 4G 模块滑入 mini PCIe 插槽，使用预装的螺丝固定模块到两个孔中。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/17.png"/></div>

- **步骤 4：** 将天线连接到标记为 **MAIN** 的天线连接器。这里需要使用 IPEX 接头。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/18.png"/></div>

- **步骤 5：** 将支持 4G 的 nano SIM 卡插入板上的 SIM 卡槽，确保 SIM 卡的金属面朝下。将卡完全插入，直到弹簧锁定到位。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/19.png"/></div>

:::note
如果您想移除 SIM 卡，按下卡片以触发内部弹簧，SIM 卡将弹出。
:::

- **步骤 6：** 在 **J8 (Control and UART) Header** 上，将 **SIM_MUX_SEL** 和 **GND** 引脚之间添加一个跳线。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/20.png"/></div>

- **步骤 6：** 打开开发板电源。

### 4G 模块使用 - 测试拨号

使用 EC25 模块时，模块会自动启动并准备就绪。然而，使用 EC20 模块时，需要重置模块才能正常工作。

- **步骤 1：** 如果您使用的是 EC25 模块，可以跳过此步骤。如果您使用的是 EC20 模块，请输入以下命令访问负责重置 4G 模块的 GPIO298 引脚：

```sh
sudo su 
cd /sys/class/gpio
echo 298 > export 
cd gpio298
echo out > direction
echo 1 > value
```

对于 EC25 模块，LED2 在开发板启动后会亮起绿色。对于 EC20 模块，按照上述步骤重置模块后，LED2 会亮起绿色。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/118.jpg"/></div>

- **步骤 2：** 安装 minicom：

```sh
sudo apt update
sudo apt install minicom -y
```

- **步骤 3：** 进入连接的 4G 模块的串口控制台，以便输入 AT 命令并与 4G 模块交互：

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

- **步骤 4：** 按 **Ctrl+A**，然后按 **E** 打开本地回显。

- **步骤 5：** 输入命令 **"AT"** 并按回车。如果看到响应为 "OK"，则说明 4G 模块工作正常。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/22.jpg"/></div>

- **步骤 6：** 输入命令 **"ATI"** 检查模块信息。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/23.png"/></div>

- **步骤 7：** 测试模块，输入以下命令拨打另一个电话号码：

```sh
ATD<phone_number>;
```

您将看到以下输出：

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/24.jpg"/></div>

如果输入的电话号码可以接收到电话，则模块工作正常。

### 4G 模块使用 - 连接到互联网

#### EC25 模块

如果您使用的是 EC25 模块，请按照以下步骤操作：

- **步骤 1：** 按照上述步骤打开 4G 模块的串口控制台（参见 4G 模块使用 - 测试拨号部分），执行以下命令连接到互联网。将 **YOUR_APN** 替换为您的网络提供商的 APN：

```sh
AT+CGDCONT=1,"IP","YOUR_APN"
```

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/89.jpg"/></div>

成功连接后，应该输出 **OK**，如上图所示。

- **步骤 2：** 执行以下命令重启 4G 模块：

```sh
AT+CFUN=1,1
```

此时，您将在串口终端上失去与 4G 模块的连接。

- **步骤 3：** 按 **CTRL + A**，然后按 **Q** 关闭 **minicom**。

- **步骤 4：** 输入 **ifconfig**，您将在 **usb0** 接口上看到一个 IP 地址。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/93.png"/></div>

- **步骤 5：** 您可以尝试以下命令 ping 一个网站，以检查是否有互联网连接：

```sh
ping -I usb0 www.bing.com -c 5
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/94.png"/></div>

#### EC20 模块

如果您使用的是 EC20 模块，请按照以下步骤操作：

- **步骤 1：** 如果您已经按照前一部分（4G 模块使用 - 测试拨号部分）为 EC20 模块重置了 4G 模块，可以跳过此步骤。如果尚未完成，请立即执行。

- **步骤 2：** 进入 4G 模块的串口控制台，输入以下命令将其设置为 ECM 模式：

```sh
AT+QCFG="usbnet",1
```

- **步骤 3：** 重置 4G 模块。

- **步骤 4：** 在 4G 模块控制台中，执行以下命令连接到互联网。将 **YOUR_APN** 替换为您的网络提供商的 APN：

```sh
AT+CGDCONT=1,"IP","YOUR_APN"
```

- **步骤 6：** 输入 **ifconfig**，您将在 **usb1** 接口上看到一个 IP 地址。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/90.jpg"/></div>

- **步骤 7：** 您可以尝试以下命令 ping 一个 URL，以检查是否有互联网连接：

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/92.png"/></div>

### LoRa 模块连接概述

目前此开发板支持 WM1302 SPI 模块。您可以选择 [美国版本](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html) 或 [欧洲版本](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html)，它们均可在我们的 Bazaar 上购买。

- **步骤 1：** 如果开发板已通电，请关闭电源。

- **步骤 2：** 将 LoRa 模块插入 mini PCIe 插槽，并使用预装的螺丝将其固定在两个孔位上。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/25.png"/></div>

- **步骤 3：** 将天线连接到天线接口。此处需要使用 IPEX 接口。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/26.png"/></div>

:::note
确保 **J8 (Control and UART) Header** 上的 **SIM_MUX_SEL** 和 **GND** 引脚之间没有跳线。此跳线仅在使用 4G 模块时需要。
:::

- **步骤 4：** 打开开发板电源。

### LoRa 模块使用 - 测试 LoRa RF

当 LoRa 模块连接后，您会看到模块上的绿色和蓝色 LED 灯亮起。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/27.png"/></div>

- **步骤 1：** 输入以下命令检查系统是否检测到 LoRa 模块：

```sh
i2cdetect -r -y 7
```

如果看到以下输出，说明系统已检测到模块。

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/29.png"/></div>

- **步骤 2：** 输入以下命令以编译和构建 LoRa 信号发送工具

```sh
git clone https://github.com/lakshanthad/sx1302_hal
cd sx1302_hal
make
cd libloragw
cp ../tools/reset_lgw.sh .
sudo ./test_loragw_hal_tx -r 1250 -m LORA -f 867.1 -s 12 -b 125 -n 1000 -z 100 --dig 3 --pa 0 --pwid 13 -d /dev/spidev2.0
```

如果看到以下结果，并且 LoRa 模块上的 LED 变为红色，这表示模块已成功发送 RF 信号。

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/78.jpg"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/28.png"/></div>

要停止发送，可以按键盘上的 **CTRL + C**。

### LoRa 模块使用 - 连接到 TTN

现在我们将连接到 TTN（The Things Network），并使用 reComputer Industrial 作为 TTN LoRaWAN 网关。

- **步骤 1：** 输入以下命令以准备数据包转发器
```sh
cd ..
cd packet_forwarder
cp ../tools/reset_lgw.sh .
```

- **步骤 2：** 根据您使用的 LoRa 模块运行以下命令。这里我们测试了 SPI US915 版本。

```sh
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

然而，不同模块的命令如下：

```sh

sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB

# SPI EU868
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.EU868

# USB EU868
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

运行上述命令后，您将看到以下输出，最后一行显示 **concentrator EUI** 信息。请保存此信息，因为稍后在 TTN 设置网关时会用到。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/79.jpg"/></div>

- **步骤 3：** 访问 [此链接](https://console.cloud.thethings.network) 进入 TTN 控制台，并选择您所在的区域。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/80.png"/></div>

- **步骤 4：** 如果已有账户，请登录；如果没有账户，请注册一个新账户。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/81.png"/></div>

- **步骤 5：** 点击 **Go to gateways**。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/82.png"/></div>

- **步骤 6：** 点击 **+ Register gateway**。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/83.png"/></div>

- **步骤 7：** 在 **Gateway EUI** 部分输入之前获取的 **Concentrator EUI**，然后点击 **Confirm**。

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/84.jpg"/></div>

- **步骤 8：** 根据您使用的 LoRa 模块输入 **Frequency plan**。这里我们使用的是 US915 版本的模块，因此选择 **United States 902-928 MHz, FSB 2 (used by TTN)**。然后点击 **Register gateway**。

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/85.jpg"/></div>

:::note
**Gateway ID** 已自动为您填写。不过，您可以根据需要更改它。**Gateway name** 不是必填项，但您可以根据需要填写。
:::

- **步骤 9：** 在网关主页上记下 **Gateway Server Address**。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/86.jpg"/></div>

- **步骤 10：** 在 reTerminal Industrial 上，编辑我们与 **lora_pkt_fwd** 命令一起使用的 **global_conf_json** 文件。您需要更改以下选项：

  - gateway_ID: 来自设备的 Concentrator EUI
  - server_address: 来自 TTN 的 Gateway Server Address
  - serv_port_up: 1700
  - serv_port_down: 1700

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/87.png"/></div>

- **步骤 11：** 重新运行数据包转发器。

```sh
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

如果看到以下输出，表示设备已成功连接到 TTN。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/88.jpg"/></div>

## M.2 Key B

reComputer Industrial 配备了一个支持 4G 和 5G 模块的 M.2 Key B 接口。目前我们已测试 **SIM8202G-M2 5G 模块**。

### 5G 模块连接概览

- **步骤 1：** 如果设备已开启，请关闭电源。

- **步骤 2：** 确保支架已就位，然后移除支架上的顶部螺丝。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/111.jpg"/></div>

- **步骤 3：** 将 5G 模块滑入 M.2 Key B 插槽，并用支架螺丝固定模块（确保支架到位）。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/112.jpg"/></div>

- **步骤 4：** 将 4 根天线连接到模块上的天线接口。这里需要使用 IPEX 4 接头。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/113.jpg"/></div>

- **步骤 5：** 将支持 5G 的 nano SIM 卡插入板上的 SIM 卡槽，确保 SIM 卡的金色表面朝下。将卡完全插入，直到内部弹簧锁定到位。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/19.png"/></div>

:::note
如果需要移除 SIM 卡，按下卡片以触发内部弹簧，SIM 卡会从卡槽弹出。
:::

- **步骤 6：** 打开设备电源。

### 5G 模块使用 - 测试拨号

使用 SIM8202G-M2 5G 模块时，模块不会自动启动。因此，我们首先需要切换一些 GPIO 以使其启动。

- **步骤 1：** 输入以下命令以启动 5G 模块

```sh
sudo su 
cd /sys/class/gpio
echo 298 > export 
cd gpio298
echo out > direction
echo 0 > value

cd..
echo 330 > export 
cd PEE.02
echo out > direction
echo 1 > value

cd..
echo 319 > export 
cd PCC.02
echo out > direction
echo 0 > value
```

执行上述命令后，LED2 将点亮为绿色，如下图所示：

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/117.jpg"/></div>

- **步骤 2：** 安装 minicom

```sh
sudo apt update
sudo apt install minicom -y
```

- **步骤 3：** 进入连接的 5G 模块的串行控制台，以便输入 AT 命令并与 5G 模块交互

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

- **步骤 4：** 输入命令 **"AT"** 并按回车键。如果看到响应为 "OK"，则说明 5G 模块工作正常。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/107.png"/></div>

- **步骤 6：** 输入命令 **"ATI"** 以检查模块信息

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/108.png"/></div>

- **步骤 7：** 为测试模块，输入以下命令拨打另一个电话号码

```sh
ATD<phone_number>;
```

您将看到以下输出：

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/109.png"/></div>

### 5G 模块使用 - 连接到互联网

敬请期待

## DI/ DO

reComputer 工业版支持 4 个数字输入和 4 个数字输出通道，所有通道均光电隔离，可有效保护主板免受电压尖峰或其他电气干扰。此外，同一连接器上还有一个 CAN 接口，我们将在本 Wiki 的后续部分讨论。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/37.png"/></div>

### DI/ DO 引脚分配表

<table>
  <thead>
    <tr>
      <th>类型</th>
      <th>标签名称</th>
      <th>原理图信号</th>
      <th>模块引脚编号</th>
      <th>BGA 编号</th>
      <th>GPIO 编号</th>
      <th>电压/电流限制</th>
      <th>备注</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>输入</td>
      <td>DI1</td>
      <td>DI_1_GPIO01</td>
      <td>118</td>
      <td>PQ.05</td>
      <td>440</td>
      <td rowSpan={4}>总电流 12V/ 20mA</td>
      <td rowSpan={4}>12V 数字输入，地信号需要连接到<br />GND_DI (引脚2/4/6)</td>
    </tr>
    <tr>
      <td>DI2</td>
      <td>DI_2_GPIO09</td>
      <td>211</td>
      <td>PS.04</td>
      <td>453</td>
    </tr>
    <tr>
      <td>DI3</td>
      <td>DI_3_GPIO11</td>
      <td>216</td>
      <td>PQ.06</td>
      <td>441</td>
    </tr>
    <tr>
      <td>DI4</td>
      <td>DI_4_GPIO13</td>
      <td>228</td>
      <td>PN.01</td>
      <td>419</td>
    </tr>
    <tr>
      <td rowSpan={4}>输出</td>
      <td>DO1</td>
      <td>DO_1_GPIO</td>
      <td>193</td>
      <td>PT.06</td>
      <td>463</td>
      <td rowSpan={4}>每个引脚负载 40V/40mA</td>
      <td rowSpan={4}>数字输出，最大耐压<br />40V，地信号需要连接到<br />GND_DO (引脚8/10)</td>
    </tr>
    <tr>
      <td>DO2</td>
      <td>DO_2_GPIO</td>
      <td>195</td>
      <td>PT.07</td>
      <td>464</td>
    </tr>
    <tr>
      <td>DO3</td>
      <td>DO_3_GPIO</td>
      <td>197</td>
      <td>PU.00</td>
      <td>465</td>
    </tr>
    <tr>
      <td>DO4</td>
      <td>DO_4_GPIO</td>
      <td>199</td>
      <td>PT.05</td>
      <td>462</td>
    </tr>
    <tr>
      <td rowSpan={2}>CAN</td>
      <td>CH</td>
      <td colSpan={5} rowSpan={2}>/</td>
      <td rowSpan={2}>CAN 总线，标准差分信号，<br />地信号需要连接到 GND_ISO (引脚12)</td>
    </tr>
    <tr>
      <td>CL</td>
    </tr>
    <tr>
      <td rowSpan={3}>地</td>
      <td>GND_DI</td>
      <td colSpan={5} rowSpan={3}>/</td>
      <td>12V 数字输入的参考地信号，<br />也是 DI 的回路</td>
    </tr>
    <tr>
      <td>GND_DO</td>
      <td>数字输出的参考地信号，也是 DO 的回路</td>
    </tr>
    <tr>
      <td>CG</td>
      <td>CAN 的参考地信号</td>
    </tr>
  </tbody>
</table>

### DI 连接概览

您可以按照下图进行 DI 的连接。最好在 DI 线上串联一个电阻。在这里，我们测试了一个 4.7kΩ 电阻连接到 DI1 引脚。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/38.png"/></div>

### DI 使用方法

您需要在 DI 线上输入 12V 电压才能被检测为输入。

- **步骤 1：** 按照上图连接到 **DI1 引脚** 并输入 **12V**

- **步骤 2：** 打开 DI1 的 GPIO，如下所示：

```sh
sudo su 
cd /sys/class/gpio
echo 440 > export 
cd PQ.05
```

:::note
您可以参考 **DI/ DO 引脚分配表** 找到 GPIO 编号和 BGA 编号。在上述示例中，对于 DI1 引脚，GPIO 编号为 440，BGA 编号为 PQ.05。
:::

- **步骤 3：** 执行以下命令检查状态：

```sh
cat value
```

如果输出为 0，则表示有 12V 输入。如果输出为 1，则表示没有输入电压。

### DO 连接概览

您可以按照下图进行 DO 的连接。最好在 DO 线上串联一个电阻。在这里，我们测试了一个 4.7kΩ 电阻。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/39.png"/></div>

### DO 使用方法

在这里，您需要按照上图连接一个负载。测试的最简单方法是连接一个万用表（如果您有的话），或者连接一个最大电压低于 40V 的负载。

- **步骤 1：** 按照上图连接到 **DO1 引脚** 并输入 **最大 40V**

- **步骤 2：** 按如下方式打开 D01 的 GPIO

```sh
sudo su 
cd /sys/class/gpio
echo 463 > export 
cd PT.06
echo out > direction
```

:::note
您可以参考 **DI/DO 引脚分配表** 来查找 GPIO 编号和 BGA 编号。在上述示例中，对于 DO1 引脚，GPIO 编号为 463，BGA 编号为 PT.06。
:::

- **步骤 3：** 执行以下命令以打开引脚

```sh
echo 1 > value
```

如果负载被打开或万用表输出了您输入的电压，则测试正常运行。

## CAN

reComputer Industrial 配备了一个支持 CAN FD（控制器局域网灵活数据速率）协议的 CAN 接口，速率为 5Mbps。CAN 接口通过电容隔离实现隔离，这提供了出色的 EMI 保护，并确保在工业和自动化应用中的可靠通信。默认情况下已安装一个 120Ω 的终端电阻，您可以通过 GPIO 开关打开或关闭该电阻。

注意：CAN 接口使用隔离电源，这意味着连接到 CAN 接口的外部设备的地信号应连接到 CG 引脚。

### 使用 USB 转 CAN 适配器的连接概览

要测试和连接 CAN 总线，请将 USB 转 CAN 适配器连接到板上的 CAN 接口，如下图所示：

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/40.png"/></div>

这里我们使用了 [USB 转 CAN 分析仪适配器及 USB 线缆](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)，可在我们的 Bazaar 上购买。

### 使用 USB 转 CAN 适配器

- **步骤 1：** 从制造商网站下载您使用的 USB 转 CAN 适配器的驱动程序并安装。在我们的案例中，根据我们使用的适配器，驱动程序可以在 [这里](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Driver/driver%20for%20USBCAN(CHS40)/windows-driver) 找到。

- **步骤 2：** 一些适配器还附带必要的软件，用于 PC 与 CAN 设备通信。在我们的案例中，根据我们使用的适配器，我们下载并安装了可以在 [这里](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program) 找到的软件。

- **步骤 3：** 在 reComputer Industrial 上打开一个终端窗口，并执行以下命令以配置和启用 CAN 接口：

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **步骤 4：** 在终端中输入 **ifconfig**，您将看到 CAN 接口已启用。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/41.png"/></div>

- **步骤 5：** 打开您之前安装的 CAN 软件。在本案例中，我们将打开根据我们使用的 CAN 适配器安装的软件。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/42.jpg"/></div>

- **步骤 6：** 将 USB 转 CAN 适配器连接到 PC，并通过 Windows 搜索栏搜索 **设备管理器** 打开它。现在，您将在 **端口 (COM & LPT)** 下看到已连接的适配器。记下此处列出的串口号。根据下图，串口号为 **COM9**。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/43.png"/></div>

- **步骤 7：** 打开 CAN 软件，点击 **COM** 部分旁边的 **刷新**，点击下拉菜单并选择与适配器对应的串口号。保持 **COM bps** 为默认值并点击 **打开**。

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/44.jpg"/></div>

- **步骤 8：** 保持 **模式** 和 **CAN bps** 为默认值，将 **类型** 更改为 **标准帧**，然后点击 **设置并启动**。

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/45.png"/></div>

- **步骤 9：** 在 reComputer Industrial 上执行以下命令以向 PC 发送 CAN 信号：

```sh
cansend can0 123#abcdabcd
```

现在，您将在软件中看到接收到的信号，如下所示：

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/46.png"/></div>

- **步骤 10：** 在 reComputer Industrial 上执行以下命令以等待接收来自 PC 的 CAN 信号：

```sh
candump can0 &
```

- **步骤 11：** 在 CAN 软件中，点击 **发送单帧**。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/47.png"/></div>

现在，您将在 reComputer Industrial 上看到接收到的信号，如下所示：

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

### 使用 reTerminal DM 的连接概览

如果您有 [reTerminal DM](https://www.seeedstudio.com/reTerminal-DM-p-5616.html)，您可以直接与其通信，因为 reTerminal DM 也具有 CAN 接口。

请参考下图，通过 CAN 连接 reComputer Industrial 和 reTerminal DM：

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/49.png"/></div>

### 使用 reTerminal DM

- **步骤 1：** 在使用 reTerminal DM 之前，请访问 [此 Wiki](https://wiki.seeedstudio.com/reterminal-dm) 以开始使用 reTerminal DM。

- **步骤 2：** 在 reComputer Industrial 上打开一个终端窗口，并执行以下命令以配置和启用 CAN 接口：

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **步骤 3：** 在 reTerminal DM 上打开一个终端窗口，并执行以下命令以配置和启用 CAN 接口：

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **步骤 4：** 在 reTerminal DM 上打开一个终端窗口，并执行以下命令以配置和启用 CAN 接口：

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **步骤 5：** 如果在两个设备上输入 **ifconfig**，您将看到 CAN 接口已启用。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/41.png"/></div>

- **步骤 6：** 在 reTerminal DM 上，执行以下命令以等待接收来自 reComputer Industrial 的 CAN 信号：

```sh
candump can0 &
```

- **步骤 7：** 在 reComputer Industrial 上，执行以下命令以向 reTerminal Industrial 发送 CAN 信号：

```sh
cansend can0 123#abcdabcd
```

现在您将在 reTerminal DM 上看到接收到的信号，如下所示：

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

- **步骤 8：** 重复 **步骤 6 和步骤 7**，但交换设备。使用 reTerminal DM 发送 CAN 信号，并使用 reComputer Industrial 接收信号。

## RS232/ RS422/ RS485 接口

reComputer Industrial 配备了一个 DB9 接口，支持 RS232、RS422 和 RS485 通信协议，并且板载有一个 DIP 开关面板，用于在不同接口选项之间切换。

您可以看到下面的 DIP 开关面板：

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/51.png"/></div>

:::note
在使用 DIP 开关面板之前，请确保移除黄色塑料盖。
:::

以下表格解释了根据 DIP 开关位置的不同模式：

<table>
  <thead>
    <tr>
      <th />
      <th>MODE_0</th>
      <th>MODE_1</th>
      <th>MODE_2</th>
      <th>模式</th>
      <th>状态</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/52.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>RS-422 全双工</td>
      <td>1T/1R RS-422</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/53.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>纯 RS-232</td>
      <td>3T/5R RS-232</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/54.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>RS-485 半双工</td>
      <td>1T/1R RS-485，TX ENABLE 低电平有效</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/55.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>1</td>
      <td>1</td>
      <td>RS-485 半双工</td>
      <td>1T/1R RS-485，TX ENABLE 高电平有效</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/56.png" alt="Image" width={200} height={127} /></td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>RS-422 全双工</td>
      <td>1T/1R RS-422 带终端电阻</td>
    </tr>
    <tr>
      <td rowSpan={3}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/57.png" alt="Image" width={200} height={127} /></td>
      <td rowSpan={3}>1</td>
      <td rowSpan={3}>0</td>
      <td rowSpan={3}>1</td>
      <td rowSpan={3}>纯 RS-232</td>
      <td>1T/1R RS-232 与 RS485 共存</td>
    </tr>
    <tr>
      <td>无需总线的应用</td>
    </tr>
    <tr>
      <td>切换 IC（用于特殊用途）。</td>
    </tr>
    <tr>
      <td rowSpan={2}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/58.png" alt="Image" width={200} height={127} /></td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>0</td>
      <td rowSpan={2}>RS-485 半双工</td>
      <td>1T/1R RS-485 带终端电阻</td>
    </tr>
    <tr>
      <td>TX ENABLE 低电平有效</td>
    </tr>
    <tr>
      <td rowSpan={2}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/59.png" alt="Image" width={200} height={127} /></td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>1</td>
      <td>低功耗</td>
      <td rowSpan={2}>所有 I/O 引脚为高阻态</td>
    </tr>
    <tr>
      <td>关机</td>
    </tr>
  </tbody>
</table>

:::note
出厂时，开关的默认模式设置为 RS485，DIP 开关位置为 010。
:::

上述表格仅考虑了 DIP 开关面板的前三个开关。然而，第四个开关负责切换斜率速率，这与数据速率直接相关。

<table>
  <thead>
    <tr>
      <th />
      <th>状态</th>
      <th>备注</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/62.png" alt="Image" width={200} height={127} /></td>
      <td>1</td>
      <td>SLEW= Vcc<br />此 RS232/RS422/RS485 多协议收发器限制通信速率如下：<br />RS-232：最大数据速率为 1.5Mbps<br />RS-485/RS-422：最大数据速率为 10Mbps<br />实际最大数据速率取决于所使用的 Jetson SOM。</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/63.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>SLEW = GND<br />RS-232：最大数据速率为 250Kbps<br />RS-485/RS-422：最大数据速率为 250kbps</td>
    </tr>
  </tbody>
</table>

这里我们将使用 USB 转 RS232、RS485 和 RS422 适配器来测试这些接口。因此，在继续之前，您需要在 PC 上安装一个串行终端应用程序。我们推荐您安装 **Putty**，它易于设置和使用。

- **步骤 1：** 访问 [此网站](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) 并根据您的 PC 架构下载 Putty。

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/60.png"/></div>

这里我们根据所用的 PC（X86 Windows 64 位机器）选择了 Putty。

- **步骤 2：** 打开下载的安装程序并按照提示安装应用程序。

### 通用连接概述

您可以参考 DB9 接头的引脚编号和下表进行连接。

<div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/61.png"/></div>

<table>
  <thead>
    <tr>
      <th>模式</th>
      <th>001/101</th>
      <th>000/100</th>
      <th>010/011/110</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>引脚</td>
      <td>RS232</td>
      <td>RS422</td>
      <td>RS485</td>
    </tr>
    <tr>
      <td>1</td>
      <td />
      <td>TXD-</td>
      <td>Data-</td>
    </tr>
    <tr>
      <td>2</td>
      <td>RXD</td>
      <td>TXD+</td>
      <td>Data+</td>
    </tr>
    <tr>
      <td>3</td>
      <td>TXD</td>
      <td>RXD+</td>
      <td />
    </tr>
    <tr>
      <td>4</td>
      <td />
      <td>RXD-</td>
      <td />
    </tr>
    <tr>
      <td>5</td>
      <td>GND</td>
      <td>GND</td>
      <td>GND</td>
    </tr>
    <tr>
      <td>6</td>
      <td />
      <td />
      <td />
    </tr>
    <tr>
      <td>7</td>
      <td>RTS</td>
      <td />
      <td />
    </tr>
    <tr>
      <td>8</td>
      <td>CTS</td>
      <td />
      <td />
    </tr>
    <tr>
      <td>9</td>
      <td />
      <td />
      <td />
    </tr>
  </tbody>
</table>

### RS232 连接概述

在这里，您可以使用 USB 转 RS232 适配器测试接口。我们使用了 [UGREEN USB 转 RS232 适配器](https://www.amazon.com/UGREEN-Converter-Adapter-Chipset-Windows/dp/B00QUZY4UG?th=1) 进行测试。

- **步骤 1：** 关闭开发板。

- **步骤 2：** 这里有两种设置 DIP 开关的选项，可以选择 001 模式或 101 模式。每种模式的开关位置如下所示：

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/64.png"/></div>

- **步骤 3：** 将 USB 转 RS232 适配器连接到 DB9 接头。我们使用了上述提到的适配器。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/68.jpg"/></div>

- **步骤 4：** 将适配器的另一端连接到 PC 的 USB 接口。

- **步骤 5：** 打开开发板。

### RS232 使用方法

- **步骤 1：** 您可能需要为所使用的适配器安装驱动程序，或者 Windows 会自动为您安装驱动程序。在 Windows 搜索框中输入 **设备管理器** 打开设备管理器，检查是否可以看到连接的适配器作为 COM 设备。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/67.jpg"/></div>

- **步骤 2：** 如果看不到适配器，您需要根据所使用的适配器安装驱动程序。通常可以在制造商的网站上找到这些驱动程序。对于我们使用的适配器，您可以访问 [此页面](https://www.ugreen.com/pages/download)，搜索 **20201** 作为型号并下载相应的驱动程序。

- **步骤 3：** 在 PC 上打开 Putty，选择 **Terminal** 部分并设置以下内容：

  - 本地回显：强制开启
  - 本地行编辑：强制开启

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **步骤 4：** 选择 **Session**，在 **Connection type** 下选择 **Serial**，根据您在 **设备管理器** 中看到的内容设置串口号，保持速度为默认值（9600），然后点击 **Open**。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/71.jpg"/></div>

- **步骤 5：** 在 reTerminal 工业终端窗口中，输入以下命令，从 reComputer 向 PC 发送信号：

```sh
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS232 message from reComputer Industrial" > /dev/ttyTHS0
```

现在，您将在 Putty 上看到此消息。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/72.jpg"/></div>

- **步骤 6：** 在 reTerminal 工业终端窗口中，输入以下命令以等待从 PC 接收信号：

```sh
sudo cat /dev/ttyTHS0
```

- **步骤 7：** 在 Putty 上输入任意内容，按 **ENTER**，它将显示在 reComputer 工业终端窗口中。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/73.png"/></div>

### RS422 连接概述

在这里，您可以使用 USB 转 RS422 适配器测试接口。我们使用了 [DTech USB 转 RS485 适配器](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) 进行测试。

- **步骤 1：** 关闭开发板。

- **步骤 2：** 这里有两种设置 DIP 开关的选项，可以选择 000 模式或 100 模式。每种模式的开关位置如下所示：

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/65.png"/></div>

- **步骤 3：** 使用跳线将 USB 转 RS422 适配器连接到 DB9 接头，如下图所示。我们使用了上述提到的适配器。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/74.png"/></div>

- **步骤 4：** 将适配器的另一端连接到 PC 的 USB 接口。

- **步骤 5：** 打开开发板。

### RS422 使用方法

- **步骤 1：** 您可能需要为所使用的适配器安装驱动程序，或者 Windows 会自动为您安装驱动程序。在 Windows 搜索框中输入 **设备管理器** 打开设备管理器，检查是否可以看到连接的适配器作为 COM 设备。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

- **步骤 2：** 如果看不到适配器，您需要根据所使用的适配器安装驱动程序。通常可以在制造商的网站上找到这些驱动程序。对于我们使用的适配器，您可以访问 [此页面](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)。

- **步骤 3：** 在 PC 上打开 Putty，选择 **Terminal** 部分并设置以下内容：

  - 本地回显：强制开启
  - 本地行编辑：强制开启

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

### 第四步：选择 **Session**，在 **Connection type** 下选择 **Serial**，根据 **设备管理器** 中显示的内容设置串口号，保持速率为默认值（9600），然后点击 **Open**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

### 第四步：在 reTerminal 工业终端窗口中，输入以下命令以从 reComputer 向 PC 发送信号

```sh
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS422 message from reComputer Industrial" > /dev/ttyTHS0
```

现在你将在 Putty 上看到此消息显示。

### 第五步：在 reTerminal 工业终端窗口中，输入以下命令以等待接收来自 PC 的信号

```sh
sudo cat /dev/ttyTHS0
```

### 第六步：在 Putty 中输入任意内容，按下 **ENTER**，它将在 reComputer 工业终端窗口中显示。

---

### RS485 连接概述

在这里，你可以使用 USB 转 RS422 适配器来测试接口。我们使用了 [DTech USB 转 RS485 适配器](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) 进行测试。

- **第一步：** 关闭开发板。

- **第二步：** 这里有三种选项可以设置 DIP 开关。可以设置为 010 模式、011 模式或 110 模式。每种模式的开关位置如下所示：

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/66.png"/></div>

- **第三步：** 使用跳线将 USB 转 RS422 适配器连接到 DB9 接头，如下图所示。我们连接了上述提到的适配器。

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/77.png"/></div>

- **第四步：** 将另一端连接到 PC 的一个 USB 端口。

- **第五步：** 打开开发板。

---

### RS485 使用方法

- **第一步：** 你可能需要为所使用的适配器安装驱动程序，或者 Windows 会自动安装驱动程序。在 Windows 搜索中输入 **Device Manager** 打开设备管理器，并检查是否可以看到连接的适配器作为 COM 设备。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

- **第二步：** 如果看不到适配器，则需要根据所使用的适配器安装驱动程序。通常可以在制造商网站上找到这些驱动程序。对于我们使用的适配器，可以参考 [此页面](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)。

- **第三步：** 在 PC 上打开 Putty，选择 **Terminal** 部分并设置以下内容：

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **第四步：** 选择 **Session**，在 **Connection type** 下选择 **Serial**，根据 **设备管理器** 中显示的内容设置串口号，保持速率为默认值（9600），然后点击 **Open**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

- **第四步：** 在 reTerminal 工业终端窗口中，输入以下命令以从 reComputer 向 PC 发送信号

```sh
sudo su 
cd /sys/class/gpio 
echo 447 > export 
cd PR.04
echo out > direction
echo 0 > value
echo "RS485 message from reComputer Industrial" > /dev/ttyTHS0
```

现在你将在 Putty 上看到此消息显示。

- **第五步：** 在 reTerminal 工业终端窗口中，输入以下命令以等待接收来自 PC 的信号

```sh
sudo su
cd /sys/class/gpio
echo 447 > export
cd PR.04
echo out > direction
echo 1 > value
cat /dev/ttyTHS0
```

- **第六步：** 在 Putty 中输入任意内容，按下 **ENTER**，它将在 reComputer 工业终端窗口中显示。

---

## 千兆以太网接口

reComputer 工业版上有两个千兆以太网（10/100/1000M）接口，它们的功能不同：

- 最左侧的接口直接连接到 Jetson 模块，并能够提供 **PSE 802.3 af, 15W** 规格的 PoE 功能。这意味着你可以将 PoE IP 摄像头或任何其他 PoE 设备连接到此端口，为连接的设备供电。
- 另一个接口通过 PCIe 转以太网（LAN7430-I/Y9X）模块连接。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/36.png"/></div>

每个以太网端口上有两个 LED（绿色和黄色），指示以下内容：

- 绿色 LED：仅在连接到 1000M 网络时亮起。
- 黄色 LED：显示网络活动状态。

---

## USB

reComputer 工业版配备了 3 个 USB3.2 接口，具有以下特点：
- 在双层堆叠 USB 接口上，上下 USB 端口共享一个限流 IC，总供电能力为最大 2.1A 输出电流（单个也可以达到 2.1A）。如果超过 2.1A，将进入过流保护状态。
- 在双层堆叠 USB 接口旁的单个 USB 接口上，总供电能力为最大 2.1A 输出电流。如果超过 2.1A，将进入过流保护状态。
- Orin NX 模块配备了 3 个 USB3.2，其中只有一个在 reComputer 中使用，并转换为 3 路（USB3.1 TYPE-A x2 - J4 和 USB3.1 TYPE-A x1 - J3）。
- 仅支持 USB 主机模式，不支持设备模式。
- 提供 5V 2.1A。
- 支持热插拔。

---

### 使用方法

我们将解释如何对连接的 USB 闪存驱动器进行简单的基准测试。

- **第一步：** 执行以下命令检查写入速度：

```sh
sudo dd if=/dev/zero of=/dev/$1 bs=100M count=10 conv=fdatasync
```

- **第二步：** 执行以下命令检查读取速度。在执行写入速度测试后再执行此命令。

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/dev/$1 of=/dev/null bs=100M count=10
```

---

## 可配置 LED

开发板上有一个绿色 LED，如下图所示。默认情况下，它作为指示设备正常运行的 LED。然而，你也可以通过系统编程控制此 LED 的开关状态。

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/21.png"/></div>

### 使用方法

- **步骤 1：** 在终端窗口中输入以下命令以访问绿色 LED

```sh
sudo -i
cd /sys/class/gpio
echo 318 > export 
cd PCC.01
echo out > direction 
```

- **步骤 2：** 关闭 LED

```sh
echo 0 > value 
```

- **步骤 3：** 打开 LED

```sh
echo 1 > value 
```

如果您已完成对 LED 的使用，可以执行以下命令：

```sh
cd ..
echo 318 > unexport
```

## 监控系统性能

我们可以使用 **jetson stats** 应用程序来监控系统组件的温度，并检查其他系统详细信息，例如：

- 查看 CPU、GPU、RAM 的使用情况
- 更改电源模式
- 设置为最大时钟频率
- 检查 JetPack 信息

- **步骤 1：** 在 reComputer Industrial 的终端窗口中输入以下命令：

```sh
sudo apt update
sudo apt install python3-pip -y
sudo pip3 install jetson-stats
```

- **步骤 2：** 重启开发板

```sh
sudo reboot
```

- **步骤 3：** 在终端中输入以下命令：

```sh
jtop
```

现在 **jtop** 应用程序将如下图所示打开：

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/30.png"/></div>

- **步骤 4：** 您可以浏览应用程序的不同页面并探索所有功能！

## WiFi 和蓝牙

reComputer Industrial 默认不带 WiFi 和蓝牙功能。但在 PCB 上预留了一个区域，可以焊接 WiFi/蓝牙模块。我们预留了空间以支持 **BL-M8723DU1** 模块。

### 连接概览

- **步骤 1：** 如果您想自行焊接 **BL-M8723DU1** 模块，可以进行焊接。但我们不推荐这样做，因为如果在此过程中损坏了开发板，保修将失效。我们建议您使用我们的专业服务来帮助您将此模块焊接到开发板上，您可以发送电子邮件至 order@seeed.cc 提出请求。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/31.jpg"/></div>

- **步骤 2：** 将两个天线连接到开发板上的两个天线连接器，用于 WiFi 和蓝牙。这里需要使用 IPEX 连接器。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/32.png"/></div>

### 使用方法

- **步骤 1：** 打开开发板，当设备启动到 Ubuntu 桌面后，点击右上角的下拉菜单，导航到 `Settings > Wi-Fi`，并切换标题栏上的按钮以启用 WiFi。之后选择一个 WiFi 网络，输入所需密码并连接。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/33.png"/></div>

- **步骤 2：** 在同一窗口中，选择 **Bluetooth**，并切换标题栏上的按钮以启用蓝牙。之后选择一个蓝牙设备进行连接。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/34.png"/></div>

## TPM

reComputer Industrial 配备了一个 TPM 接口，用于连接外部 TPM 模块。我们已使用基于 Infineon SLB9670 的 TPM2.0 模块进行了测试。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/114.jpg"/></div>

### 连接概览

将 TPM 模块连接到如下图所示的 TPM 接口：

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/115.jpg"/></div>

### 使用方法

通过执行以下命令检查 TPM 模块是否正确加载：

```sh
sudo dmesg | grep TPM
ls /dev/tpm* -l
```

您将看到如下输出：

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/116.png"/></div>

## reComputer Industrial 的最大性能

如果您想在 reComputer Industrial 上启用最大性能，请按照以下说明操作：

- **步骤 1：** 输入以下命令以启用最大功率模式：

```sh
sudo nvpmodel -m 0
```

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/35.jpg"/></div>

此时系统会提示您输入 **YES** 以重启开发板。

- **步骤 2：** 开发板启动后，输入以下命令将 CPU 时钟设置为最大频率：

```sh
sudo jetson_clocks
```

## GPIO 表

您可以访问 reComputer Industrial 的 GPIO 表，以熟悉所有引脚映射。

在终端中执行以下命令以访问：

```sh
sudo cat /sys/kernel/debug/gpio
```

您将看到如下输出：

```sh
gpiochip3: GPIOs 289-304, parent: i2c/1-0021, 1-0021, can sleep:
 gpio-289 (wl_dis              |gpio_xten_pin@0     ) out hi
 gpio-290 (hst_wake_wl         |gpio_xten_pin@1     ) out hi
 gpio-291 (wl_wake_hst         |gpio_xten_pin@2     ) out hi ACTIVE LOW
 gpio-292 (bt_dis              |gpio_xten_pin@3     ) out hi
 gpio-293 (hst_wake_bt         |gpio_xten_pin@4     ) out hi
 gpio-294 (bt_wake_hst         |gpio_xten_pin@5     ) out hi ACTIVE LOW
 gpio-295 (spi0_rst_3v3        |gpio_xten_pin@6     ) out lo ACTIVE LOW
 gpio-296 (gpio_pin7           |gpio_xten_pin@7     ) out lo ACTIVE LOW
 gpio-297 (can_120R_en         )
 gpio-298 (M2B_PCIe_rst        )
 gpio-299 (USB_HUB_rst         |gpio_xten_pin@10    ) out hi
 gpio-300 (PCIe_ETH_rst        )
 gpio-301 (M2B_WOWWAN          |gpio_xten_pin@12    ) out hi ACTIVE LOW
 gpio-302 (M2B_DPR_3V3         |gpio_xten_pin@13    ) out hi ACTIVE LOW
 gpio-303 (SIM_MUX_SEL         |gpio_xten_pin@14    ) out hi ACTIVE LOW
 gpio-304 (gpio_pin15          |gpio_xten_pin@15    ) out hi ACTIVE LOW

gpiochip2: GPIOs 305-334, parent: platform/c2f0000.gpio, tegra194-gpio-aon:
 gpio-305 (PAA.00              )
 gpio-306 (PAA.01              )
 gpio-307 (PAA.02              )
 gpio-308 (PAA.03              )
 gpio-309 (PAA.04              )
 gpio-310 (PAA.05              )
 gpio-311 (PAA.06              )
 gpio-312 (PAA.07              )
 gpio-313 (PBB.00              )
 gpio-314 (PBB.01              )
 gpio-315 (PBB.02              )
 gpio-316 (PBB.03              )
 gpio-317 (PCC.00              )
 gpio-318 (PCC.01              |pwr                 ) out hi
 gpio-319 (PCC.02              )
 gpio-320 (PCC.03              |mux                 ) out hi
 gpio-321 (PCC.04              )
 gpio-322 (PCC.05              )
 gpio-323 (PCC.06              )
 gpio-324 (PCC.07              )
 gpio-325 (PDD.00              )
 gpio-326 (PDD.01              )
 gpio-327 (PDD.02              )
 gpio-328 (PEE.00              )
 gpio-329 (PEE.01              )
 gpio-330 (PEE.02              )
 gpio-331 (PEE.03              )
 gpio-332 (PEE.04              |power-key           ) in  hi IRQ ACTIVE LOW
 gpio-333 (PEE.05              )
 gpio-334 (PEE.06              )
gpiochip1: GPIOs 335-503, parent: platform/2200000.gpio, tegra194-gpio:
 gpio-335 (PA.00               )
 gpio-336 (PA.01               )
 gpio-337 (PA.02               )
 gpio-338 (PA.03               )
 gpio-339 (PA.04               )
 gpio-340 (PA.05               )
 gpio-341 (PA.06               )
 gpio-342 (PA.07               )
 gpio-343 (PB.00               )
 gpio-344 (PB.01               )
 gpio-345 (PC.00               )
 gpio-346 (PC.01               )
 gpio-347 (PC.02               )
 gpio-348 (PC.03               )
 gpio-349 (PC.04               )
 gpio-350 (PC.05               )
 gpio-351 (PC.06               )
 gpio-352 (PC.07               )
 gpio-353 (PD.00               )
 gpio-354 (PD.01               )
 gpio-355 (PD.02               )
 gpio-356 (PD.03               )
 gpio-357 (PE.00               )
 gpio-358 (PE.01               )
 gpio-359 (PE.02               )
 gpio-360 (PE.03               )
 gpio-361 (PE.04               )
 gpio-362 (PE.05               )
 gpio-363 (PE.06               )
 gpio-364 (PE.07               )
 gpio-365 (PF.00               )
 gpio-366 (PF.01               )
 gpio-367 (PF.02               )
 gpio-368 (PF.03               )
 gpio-369 (PF.04               )
 gpio-370 (PF.05               )
 gpio-371 (PG.00               |force-recovery      ) in  hi IRQ ACTIVE LOW
 gpio-372 (PG.01               )
 gpio-373 (PG.02               |fixed-regulators:reg) out lo
 gpio-374 (PG.03               |wifi-enable         ) out hi
 gpio-375 (PG.04               )
 gpio-376 (PG.05               )
 gpio-377 (PG.06               )
 gpio-378 (PG.07               )
 gpio-379 (PH.00               )
 gpio-380 (PH.01               )
 gpio-381 (PH.02               )
 gpio-382 (PH.03               )
 gpio-383 (PH.04               )
 gpio-384 (PH.05               )
 gpio-385 (PH.06               )
 gpio-386 (PH.07               )
 gpio-387 (PI.00               )
 gpio-388 (PI.01               )
 gpio-389 (PI.02               )
 gpio-390 (PI.03               )
 gpio-391 (PI.04               )
 gpio-392 (PJ.00               )
 gpio-393 (PJ.01               )
 gpio-394 (PJ.02               )
 gpio-395 (PJ.03               )
 gpio-396 (PJ.04               )
 gpio-397 (PJ.05               )
 gpio-398 (PK.00               )
 gpio-399 (PK.01               )
 gpio-400 (PK.02               )
 gpio-401 (PK.03               )
 gpio-402 (PK.04               )
 gpio-403 (PK.05               )
 gpio-404 (PK.06               )
 gpio-405 (PK.07               )
 gpio-406 (PL.00               )
 gpio-407 (PL.01               )
 gpio-408 (PL.02               )
 gpio-409 (PL.03               )
 gpio-410 (PM.00               )
 gpio-411 (PM.01               |hdmi2.0_hpd         ) in  lo IRQ
 gpio-412 (PM.02               )
 gpio-413 (PM.03               )
 gpio-414 (PM.04               )
 gpio-415 (PM.05               )
 gpio-416 (PM.06               )
 gpio-417 (PM.07               )
 gpio-418 (PN.00               |fixed-regulators:reg) out lo
 gpio-419 (PN.01               )
 gpio-420 (PN.02               )
 gpio-421 (PO.00               )
 gpio-422 (PO.01               )
 gpio-423 (PO.02               )
 gpio-424 (PO.03               )
 gpio-425 (PO.04               )
 gpio-426 (PO.05               )
 gpio-427 (PP.00               )
 gpio-428 (PP.01               )
 gpio-429 (PP.02               )
 gpio-430 (PP.03               )
 gpio-431 (PP.04               )
 gpio-432 (PP.05               )
 gpio-433 (PP.06               )
 gpio-434 (PP.07               )
 gpio-435 (PQ.00               )
 gpio-436 (PQ.01               )
 gpio-437 (PQ.02               )
 gpio-438 (PQ.03               )
 gpio-439 (PQ.04               )
 gpio-440 (PQ.05               )
 gpio-441 (PQ.06               )
 gpio-442 (PQ.07               )
 gpio-443 (PR.00               )
 gpio-444 (PR.01               |phy_reset           ) out hi
 gpio-445 (PR.02               )
 gpio-446 (PR.03               )
 gpio-447 (PR.04               )
 gpio-448 (PR.05               )
 gpio-449 (PS.00               )
 gpio-450 (PS.01               )
 gpio-451 (PS.02               )
 gpio-452 (PS.03               )
 gpio-453 (PS.04               )
 gpio-454 (PS.05               )
 gpio-455 (PS.06               )
 gpio-456 (PS.07               )
 gpio-457 (PT.00               )
 gpio-458 (PT.01               )
 gpio-459 (PT.02               )
 gpio-460 (PT.03               )
 gpio-461 (PT.04               )
 gpio-462 (PT.05               )
 gpio-463 (PT.06               )
 gpio-464 (PT.07               )
 gpio-465 (PU.00               )
 gpio-466 (PV.00               )
 gpio-467 (PV.01               )
 gpio-468 (PV.02               )
 gpio-469 (PV.03               )
 gpio-470 (PV.04               )
 gpio-471 (PV.05               )
 gpio-472 (PV.06               )
 gpio-473 (PV.07               )
 gpio-474 (PW.00               )
 gpio-475 (PW.01               )
 gpio-476 (PX.00               )
 gpio-477 (PX.01               )
 gpio-478 (PX.02               )
 gpio-479 (PX.03               )
 gpio-480 (PX.04               )
 gpio-481 (PX.05               )
 gpio-482 (PX.06               )
 gpio-483 (PX.07               )
 gpio-484 (PY.00               )
 gpio-485 (PY.01               )
 gpio-486 (PY.02               )
 gpio-487 (PY.03               )
 gpio-488 (PY.04               )
 gpio-489 (PY.05               )
 gpio-490 (PY.06               )
 gpio-491 (PY.07               )
 gpio-492 (PZ.00               )
 gpio-493 (PZ.01               |vbus                ) in  hi IRQ ACTIVE LOW
 gpio-494 (PZ.02               )
 gpio-495 (PZ.03               )
 gpio-496 (PZ.04               )
 gpio-497 (PZ.05               )
 gpio-498 (PZ.06               |cs_gpio             ) out lo
 gpio-499 (PZ.07               |cs_gpio             ) out hi
 gpio-500 (PFF.00              )
 gpio-501 (PFF.01              )
 gpio-502 (PGG.00              )
 gpio-503 (PGG.01              )

gpiochip0: GPIOs 504-511, parent: i2c/4-003c, max77620-gpio, can sleep:
 gpio-510 (                    |gpio_default        ) in  hi
 gpio-511 (                    |gpio_default        ) in  hi
```

## 技术支持

请随时在我们的 [论坛](https://forum.seeedstudio.com/) 中提交问题。

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>