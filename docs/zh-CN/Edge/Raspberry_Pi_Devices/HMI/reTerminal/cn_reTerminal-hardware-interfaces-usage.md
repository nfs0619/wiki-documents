---
description: 硬件和接口使用
title: 硬件和接口使用
keywords:
  - Edge
  - reTerminal 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal-hardware-interfaces-usage
last_update:
  date: 05/15/2025
  author: jianjing Huang
---

# 硬件和接口使用

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

本篇 Wiki 介绍了 reTerminal 上的各种硬件和接口，以及如何使用它们来扩展您的项目创意。

**注意：** 对于某些硬件和接口，在运行 Raspberry Pi OS 镜像、[Buildroot 镜像](https://wiki.seeedstudio.com/reTerminal-Buildroot-SDK) 和 [Yocto 镜像](https://wiki.seeedstudio.com/reTerminal-Yocto) 时，使用说明会有所不同。默认步骤适用于 Raspberry Pi OS 镜像。然而，如果 Buildroot 镜像和 Yocto 镜像的说明不同，将会明确标注。

## 硬件概览

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/HW_overview.png" alt="pir" width="1000" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/hw-overview-internal-v1.3.jpg" alt="pir" width="1000" height="auto"/></p>

## 40 针 Raspberry Pi 兼容引脚

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/pinout-v2.jpg" alt="pir" width="1000" height="auto"/></p>

**40 针**包括**26 个 GPIO、最多 5 × I2C、最多 5 × SPI、最多 5 × UART、1 × PCM、1 × PWM、1 × SDIO 接口、1 × DPI（并行 RGB 显示）、最多 3 × GPCLK 输出和 1 个 USB 接口**。

**USB 接口**是从 Compute Module 4 的内部 **USB 2.0 接口**扩展而来的。因此，您可以通过此接口扩展更多的 USB 连接器，并获得高达 **480 Mbit/s** 的速度。

您还可以使用这些 40 针连接 **Raspberry Pi 兼容的扩展板（HATs）**，以扩展您的项目！

[点击这里](https://www.seeedstudio.com/hats-shields-c-840.html) 探索 Seeed Studio 提供的各种 Raspberry Pi 扩展板，[点击这里](https://uk.pi-supply.com/collections/all-raspberry-pi-hats-and-phats) 查看更多第三方 Raspberry Pi 扩展板！

GPIO 引脚的最大安全电流为 **50mA**。这意味着 50mA 是分布在所有引脚上的。因此，单个 GPIO 引脚只能安全地承载 **16mA** 电流。另一方面，其余引脚的最大电流为 **2A**。在连接额外硬件到这些引脚时，请牢记这一点。

### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/40-pin_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**提示：** 点击 [这里](https://files.seeedstudio.com/wiki/ReTerminal/40-pin_sch.jpg) 查看更高分辨率的图片

### 使用方法 - GPIO

- **步骤 1.** 设置引脚为 GPIO

```sh
sudo -i   #启用 root 账户权限
cd /sys/class/gpio
echo 23 > export #GPIO23 对应引脚 16
cd gpio23
```

- **步骤 2.** 设置 GPIO 输入/输出

```sh
echo in > direction  #设置 GPIO 为输入
echo out > direction  #设置 GPIO 为输出
```

- **步骤 3.** 设置 GPIO 高/低电平

```sh
echo 1 > value  #设置 GPIO 为高电平
echo 0 > value  #设置 GPIO 为低电平
```

- **步骤 4.** 获取 GPIO 输入/输出状态

```sh
cat direction
```

- **步骤 5.** 获取 GPIO 电平状态

```sh
cat value
```

- **步骤 6.** 将引脚恢复为默认状态

```sh
cd ..
echo 23 > unexport
```

#### 在 Buildroot 镜像上的使用方法

- 将 **sudo -i** 替换为 **su -** 以启用 **root** 账户权限
- 按照上述其他步骤操作

#### 在 Yocto 镜像上的使用方法

- 不需要 **sudo -i**，因为我们已经以 **root** 身份登录
- 按照上述其他步骤操作

### 使用方法 - I2C

- **步骤 1.** 打开 reTerminal，点击 Raspberry Pi 桌面 UI 上的 Raspberry Pi 图标，导航到 `Preferences > Raspberry Pi Configuration`

- **步骤 2.** 点击 `Interfaces` 标签，然后点击 **I2C** 旁边的 **Enabled**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/i2c-enable-1.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 3.** 点击 **OK**

- **步骤 4.** 将一个 I2C 设备连接到 reTerminal

- **步骤 5.** 列出所有可用的 I2C 总线

```sh
i2cdetect -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/i2cdetect-l.png" alt="pir" width="750" height="auto"/></p>

- **步骤 6.** 扫描 I2C 总线 1（i2c-1）上的标准地址

```sh
i2cdetect -y 1
```

**注意** 1 表示 I2C 总线编号

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/i2c-detect-2.png" alt="pir" width="600" height="auto"/></p>

上图显示了检测到的 I2C 设备，其地址为 0x20、0x51、0x45、0x19、0x29 和 0x5c

#### 在 Buildroot 镜像上的使用方法

- 对于 Buildroot 镜像，您不需要启用 I2C，因为 **I2C 默认已启用**
- 按照上述其他步骤操作

#### 在 Yocto 镜像上的使用方法

- I2C 在启动时未启用。它仅在每次启动后通过 **modprobe i2c-dev** 工作。一旦修复后将更新此部分。

### 使用方法 - SPI

- **步骤 1.** 打开 reTerminal，点击 Raspberry Pi 桌面 UI 上的 Raspberry Pi 图标，导航到 `Preferences > Raspberry Pi Configuration`

- **步骤 2.** 点击 `Interfaces` 标签，然后点击 **SPI** 旁边的 **Enabled**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/spi-enable-1.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 3.** 将一个 SPI 设备连接到 reTerminal

- **步骤 4.** 列出所有可用的 SPI 设备

```sh
ls /dev/spi*
```

您将看到以下输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/spi_list.png" alt="pir" width="450" height="auto"/></p>

- **步骤 5.** 打开一个终端窗口并输入以下命令以下载 **SPI 测试工具**

```sh
wget https://files.seeedstudio.com/wiki/102110497/spidev_test
```

- **步骤 6.** 更改工具的用户权限

```sh
chmod +x spidev_test
```

- **步骤 7.** 使用跳线将 **GPIO 10 (Pin 19)** 和 **GPIO 9 (Pin 21)** 短接

**注意：** 这里我们短接了 **MOSI 和 MISO 引脚**

- **步骤 8.** 运行以下 SPI 测试工具

```sh
./spidev_test -D /dev/spidev0.0 -v -p hello
```

如果看到以下输出，说明 SPI 工作正常

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SPI_test.jpg" alt="pir" width="1000" height="auto"/></p>

#### 在 Buildroot/ Yocto 镜像上的使用

- 要启用 SPI，请通过 **vi /boot/config.txt** 命令打开 **config.txt**
- 在文件末尾添加 **dtparam=spi=on**（按 **i** 进入编辑模式）
- 按 **ESC** 退出编辑模式
- 输入 **:wq** 保存文件
- 重启设备
- spidev_test 工具运行时存在问题。一旦修复，我们会更新相关信息。

## 扩展模块的高速接口

在 reTerminal 的背面有一个高速扩展接口。它包括 1 个 PCIe 单通道 Host Gen 2（支持高达 5Gbps 的速度）、1 个 USB 2.0、1 个 PoE 和 26 个 GPIO。26 个 GPIO 引脚还可以进一步用作 2 个 I2C、2 个 SPI 和 1 个 UART。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Expansion_Schematic.png" alt="pir" width="1000" height="auto"/></p>

**提示：** 点击 [这里](https://files.seeedstudio.com/wiki/ReTerminal/Expansion_Schematic.png) 查看更高分辨率的图片

:::note
PCIe、USB 3.0、2 x CAN-FD 和 SDIO3.0 接口是为未来产品定义的，因此目前不可用
:::

我们计划未来为 reTerminal 构建扩展模块，并预留了此接口以连接这些模块到 reTerminal。我们将发布一系列模块，例如：

- 麦克风阵列和扬声器模块
- 摄像头模块
- 工业 I/O 模块
- LoRaWAN 模块
- 5G/4G 模块
- PoE 模块
- 以太网交换机模块

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/external_modules.png" alt="pir" width="750" height="auto"/></p>

在 reTerminal 的侧面有 2 个 M4 机械螺丝孔，用于帮助固定扩展模块。

## CSI 摄像头接口

reTerminal 配备了一个 2 通道 MIPI CSI 摄像头接口，这意味着您可以连接最多 2 个摄像头到 reTerminal。一个接口有 **15 个引脚**，另一个接口有 **22 个引脚**。因此，请确保使用与您打算使用的接口相对应的正确软排线。这些摄像头接口可用于目标检测和机器学习应用。

### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/CSI_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**提示：** 点击 [这里](https://files.seeedstudio.com/wiki/ReTerminal/CSI_sch.jpg) 查看更高分辨率的图片

#### 使用方法

- **步骤 1.** 将摄像头连接到 **15 引脚**或 **22 引脚**的 **FPC 接口**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FPC-label-1.jpg" alt="pir" width="800" height="auto"/></p>

- **步骤 2.** 打开 reTerminal，点击 Raspberry Pi 桌面 UI 上的 Raspberry Pi 图标，导航到 `Preferences > Raspberry Pi Configuration`

- **步骤 3.** 点击 `Interfaces` 标签，然后点击 **Camera** 旁边的 **Enabled**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Cam-enable.jpg" alt="pir" width="1000" height="auto"/></p>

- **步骤 4.** 点击 **Yes** 以重启

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/cam-reboot.jpg" alt="pir" width="1000" height="auto"/></p>

- **步骤 5.** 打开终端窗口，输入以下命令拍摄静态图片并保存到桌面

```sh
raspistill -o Desktop/image.jpg
```

**注意：** 您可以根据自己的喜好更改保存位置

- **步骤 6.** 双击桌面上生成的文件以查看图片

- **步骤 7.** 输入以下命令录制视频并保存到桌面

```sh
raspivid -o Desktop/video.h264
```

- **步骤 8.** 双击桌面上生成的文件以播放录制的视频

您可以通过访问 [官方 Raspberry Pi 文档](https://projects.raspberrypi.org/en/projects/getting-started-with-picamera/3) 了解更多关于摄像头使用的信息

#### 在 Buildroot/ Yocto 镜像上的使用

- CSI 摄像头接口尚未测试。一旦测试完成，我们会更新相关信息。

## 5 英寸 LCD

reTerminal 内置的 5 英寸 LCD 通过载板上的 **30 针 DSI 接口**连接。此 LCD 支持 **5 点多点触控**，为了启用此功能，LCD 还通过载板上的另一个 **TP 接口**连接。

### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/LCD_sch.png" alt="pir" width="1000" height="auto"/></p>

**提示：** 点击 [这里](https://files.seeedstudio.com/wiki/ReTerminal/LCD_sch.png) 查看更高分辨率的图片

## LCD 触摸面板

### 使用方法

LCD 的触摸面板通过一个 **6 针 FPC** 接口连接。您可以使用 evtest 工具进行测试。

- **步骤 1.** 输入以下命令安装 **evtest**，这是一个输入设备事件监控和查询工具：

```sh
sudo apt install evtest
```

- **步骤 2.** 打开 evtest 工具：

```sh
evtest
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/evtest-1.png" alt="pir" width="680" height="auto"/></p>

- **步骤 3.** 输入 **1**，您将看到以下输出：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/tp-1.png" alt="pir" width="720" height="auto"/></p>

- **步骤 4.** 随机触摸 reTerminal 的 LCD，您将看到以下输出：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/tp-2.png" alt="pir" width="850" height="auto"/></p>

#### 在 Buildroot 镜像上的使用

- 无需安装 **evtest 工具**，因为它已经预装。
- 在运行 **evtest** 之前，您需要通过输入 **su -** 切换到 root 用户。
- 按照上述其他步骤操作。

#### 在 Yocto 镜像上的使用

- 无需安装 **evtest 工具**，因为它已经预装。
- 按照上述其他步骤操作。

### 通过 I2C 接口连接其他设备到 FPC 接口

触摸面板通过 I2C 通信协议连接到 reTerminal。因此，如果需要，您可以轻松地将其他 I2C 设备连接到此 6 针 FPC 接口。连接图如下：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FPC-I2C-connection.png" alt="pir" width="900" height="auto"/></p>

之后，请按照前面主题中关于如何使用 I2C 的步骤操作。

## 4 个用户可编程按钮

reTerminal 前面有 4 个用户可编程按钮。这些按钮可以通过软件轻松控制，并可以根据您的应用程序分配为开启/关闭不同功能！

### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/keys_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**提示：** 点击 [这里](https://files.seeedstudio.com/wiki/ReTerminal/keys_sch.jpg) 查看更高分辨率的图片

### 使用方法

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/key-label.jpg" alt="pir" width="500" height="auto"/></p>

- **步骤 1.** 打开 evtest 工具：

```sh
evtest
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/evtest.png" alt="pir" width="680" height="auto"/></p>

- **步骤 2.** 输入 **0**，您将看到以下输出：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/button-test.jpg" alt="pir" width="680" height="auto"/></p>

- **步骤 3.** 从左到右按下按钮，您将看到以下输出：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/button-test-result.png" alt="pir" width="800" height="auto"/></p>

**注意：** 按钮默认从 **左到右** 配置为 **a s d f**。

- **步骤 4.** 如果您想配置按钮，请输入以下命令：

```sh
sudo nano /boot/config.txt
```

- **步骤 5.** 修改文件，在末尾添加以下内容：

```sh
dtoverlay=reTerminal,key0=0x100,key1=0x101,key2=0x102,key3=0x103,tp_rotate=1
```

**注意：** 这里十六进制数字 100、101、102 和 103 分别分配给 key0、key1、key2 和 key3。

#### 在 Buildroot 镜像上的使用

- 无需安装 **evtest 工具**，因为它已经预装。
- 在运行 **evtest** 之前，您需要通过输入 **su -** 切换到 root 用户。
- 按照上述其他步骤操作。

#### 在 Yocto 镜像上的使用

- 无需安装 **evtest 工具**，因为它已经预装。
- 按照上述其他步骤操作。

## 3 用户可编程 LED

在 reTerminal 的前面有 2 个用户可编程 LED。这些 LED 可以通过软件开关，并且在需要将其用作状态指示灯以监控不同硬件功能的场景中非常有用。**USR** LED 可以点亮为**绿色**，而 **STA** LED 可以点亮为**红色**或**绿色**。

### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/LEDs_sch.jpg" alt="pir" width="700" height="auto"/></p>

**提示：** 点击 [这里](https://files.seeedstudio.com/wiki/ReTerminal/LEDs_sch.jpg) 查看更高分辨率的图片

### 使用方法

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/led-label.jpg" alt="pir" width="550" height="auto"/></p>

- **步骤 1.** 启用 root 账户权限

```sh
sudo -i
```

- **步骤 2.** 进入以下目录

```sh
cd /sys/class/leds
```

- **步骤 3.** 进入以下目录以控制**绿色 USR LED**

```sh
cd usr_led0
```

- **步骤 4.** 以最大亮度打开 LED

```sh
echo 255 > brightness
```

**注意：** 您可以输入 1 - 255 的值来调整亮度级别

- **步骤 5.** 关闭 LED

```sh
echo 0 > brightness
```

- **步骤 6.** 进入以下目录以控制**红色 STA LED**

```sh
cd ..
cd usr_led1
```

- **步骤 7.** 重复步骤 4 - 5 来控制 LED

- **步骤 8.** 进入以下目录以控制**绿色 STA LED**

```sh
cd ..
cd usr_led2
```

- **步骤 9.** 重复步骤 4 - 5 来控制 LED

#### 在 Buildroot 镜像上的使用

- 将 **sudo -i** 替换为 **su -** 以启用 **root** 账户权限
- 按照上述其他步骤操作

#### 在 Yocto 镜像上的使用

- 不需要 **sudo -i**，因为我们已经以 **root** 身份登录
- 按照上述其他步骤操作

## 千兆以太网端口

reTerminal 板载一个千兆以太网连接器（RJ45）。此端口连接到 CM4 模块的**千兆以太网 PHY**，该模块基于 **Broadcom BCM54210PE**。它还符合 **IEEE 1588-2008** 标准。

### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ethernet_sch.png" alt="pir" width="900" height="auto"/></p>

**提示：** 点击 [这里](https://files.seeedstudio.com/wiki/ReTerminal/Ethernet_sch.png) 查看更高分辨率的图片

## 加密协处理器

reTerminal 提供了安全功能，例如 **Microchip ATECC608A 加密协处理器**，具有安全的基于硬件的密钥存储。它还具有最多 16 个密钥、证书或数据的受保护存储。它提供对对称签名、验证、密钥协商（ECDSA）的硬件支持。它还支持对称算法、网络密钥管理和安全启动的硬件支持。

### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Encrypt_sch.jpg" alt="pir" width="800" height="auto"/></p>

**提示：** 点击 [这里](https://files.seeedstudio.com/wiki/ReTerminal/Encrypt_sch.jpg) 查看更高分辨率的图片

### 使用方法

- **步骤 1.** 列出所有可用的 I2C 总线

```sh
i2cdetect -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/i2cdetect-l.png" alt="pir" width="750" height="auto"/></p>

- **步骤 2.** 扫描 I2C 总线 3（i2c-3）上的标准地址

```sh
i2cdetect -y 3
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/i2cdetect-y3.png" alt="pir" width="530" height="auto"/></p>

**注意：** 3 表示 I2C 总线编号

I2C 地址为 **0x60** 的设备是加密协处理器

#### 在 Buildroot 镜像上的使用

- 按上述方式操作

#### 在 Yocto 镜像上的使用

- 启动时未启用 I2C。每次启动后仅在执行 **modprobe i2c-dev** 后才能工作。一旦修复，将更新此部分内容。

## RTC

reTerminal 内置的 RTC 基于 **NXP Semiconductors PCF8563T**，并使用 **CR1220 电池**供电。它具有低备份电流；典型值为 VDD = 3.0 V 和温度 = 25°C 时的 0.25μA。它可以用于需要实现时间记录功能的项目。

**注意：** CR1220 电池已预装。

### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/RTC_sch.jpg" alt="pir" width="800" height="auto"/></p>

**提示：** 点击 [这里](https://files.seeedstudio.com/wiki/ReTerminal/RTC_sch.jpg) 查看更高分辨率的图片

### 使用方法

输入以下命令以从 RTC 获取日期和时间信息：

```sh
sudo hwclock
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/hwclock.png" alt="pir" width="370" height="auto"/></p>

#### 在 Buildroot 镜像上的使用方法

- 首先输入 **su -** 以启用 **root** 账户
- 然后输入 **hwclock**

#### 在 Yocto 镜像上的使用方法

- **sudo** 不需要，因为我们已经以 **root** 身份登录
- 直接输入 **hwclock**

## 光传感器

reTerminal 配备了 **Levelek LTR-303ALS-01** 数字光传感器，并通过 **6-pin FPC 接口**连接。它可以用于感知环境中的光线强度，还可以根据周围光线强度实现 **LCD 背光的自动亮度调节**。

### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/light_sch.jpg" alt="pir" width="700" height="auto"/></p>

**提示：** 点击 [这里](https://files.seeedstudio.com/wiki/ReTerminal/light_sch.jpg) 查看更高分辨率的图片

### 使用方法

- **步骤 1.** 启用 root 账户权限

```sh
sudo -i
```

- **步骤 2.** 进入以下目录

```sh
cd /sys/bus/iio/devices/iio:device0
```

- **步骤 3.** 输入以下命令以获取光强值（单位：Lux）

```sh
cat in_illuminance_input 
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/light-lux.png" alt="pir" width="900" height="auto"/></p>

光传感器通过 **I2C 通信协议**连接到 reTerminal。因此，如果需要，您可以轻松地将其他 I2C 设备连接到此 **6-pin FPC 接口**。连接图如下：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/light-i2c.png" alt="pir" width="1000" height="auto"/></p>

之后，请按照上一主题中的步骤使用 I2C。

#### 在 Buildroot 镜像上的使用方法

- 将 **sudo -i** 替换为 **su -** 以启用 **root** 账户权限
- 按照上述其他步骤操作

#### 在 Yocto 镜像上的使用方法

- **sudo -i** 不需要，因为我们已经以 **root** 身份登录
- 按照上述其他步骤操作

## 加速度计

内置的 **STMicroelectronics LIS3DHTR 三轴加速度计**可以用于实现许多不同的应用。您可以使用它在旋转 reTerminal 时自动更改屏幕方向，以及更多功能。

### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/accel_sch.jpg" alt="pir" width="600" height="auto"/></p>

**提示：** 点击 [这里](https://files.seeedstudio.com/wiki/ReTerminal/accel_sch.jpg) 查看更高分辨率的图片

### 使用方法

- **步骤 1.** 打开 evtest 工具

```sh
evtest
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/evtest.png" alt="pir" width="680" height="auto"/></p>

- **步骤 2.** 输入 **1**，您将看到 X、Y、Z 加速度值

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/accel-test.png" alt="pir" width="700" height="auto"/></p>

#### 在 Buildroot 镜像上的使用方法

- 您无需安装 **evtest 工具**，因为它已经安装好了
- 在运行 **evtest** 之前，您需要通过输入 **su -** 切换到 **root**
- 按照上述其他步骤操作

#### 在 Yocto 镜像上的使用方法

- 您无需安装 **evtest 工具**，因为它已经安装好了
- 按照上述其他步骤操作

## 蜂鸣器

reTerminal 内置了一个蜂鸣器，可以通过软件进行控制。该蜂鸣器可以在不同的应用中用作指示器。

### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buzzer_sch.jpg" alt="pir" width="500" height="auto"/></p>

**提示：** 点击 [这里](https://files.seeedstudio.com/wiki/ReTerminal/buzzer_sch.jpg) 查看更高分辨率的图片

### 使用方法

- **步骤 1.** 启用 root 账户权限

```sh
sudo -i
```

- **步骤 2.** 进入以下目录

```sh
cd /sys/class/leds/usr_buzzer
```

- **步骤 3.** 打开蜂鸣器

```sh
echo 1 > brightness
```

- **步骤 4.** 关闭蜂鸣器

```sh
echo 0 > brightness
```

#### 在 Buildroot 镜像上的使用

- 将 **sudo -i** 替换为 **su -** 来启用 **root** 账户权限
- 按照上述其他步骤操作

#### 在 Yocto 镜像上的使用

- 不需要使用 **sudo -i**，因为我们已经以 **root** 身份登录
- 按照上述其他步骤操作

## USB 2.0 接口

Raspberry Pi CM4 已经内置了一个 **USB 2.0 集线器**。该集线器在 reTerminal 上扩展为 **2 个 USB 2.0 接口**，作为 **USB HOST**。

### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/USB_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**提示：** 点击 [这里](https://files.seeedstudio.com/wiki/ReTerminal/USB_sch.jpg) 查看更高分辨率的图片

### 使用方法

- **步骤 1.** 将 USB 设备连接到 reTerminal 的一个 USB 2.0 接口

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/USB-port.jpg" alt="pir" width="130" height="auto"/></p>

- **步骤 2.** 在终端窗口中输入以下命令列出已连接的 USB 设备

```sh
lsusb
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/USB-connected.png" alt="pir" width="850" height="auto"/></p>

- **步骤 3.** 输入以下命令以获取有关已连接 USB 设备的更多信息，例如驱动器大小、分区、挂载点等

```sh
lsblk
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/USB-mount.png" alt="pir" width="680" height="auto"/></p>

- **步骤 4.** 访问已连接的 USB 设备并列出其中的所有文件

```sh
cd /media/pi/NEW VOLUME
ls -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/USB-access.png" alt="pir" width="730" height="auto"/></p>

**注意：** 挂载点会因 USB 设备的不同而变化

## Micro - SD 卡槽

reTerminal 配备了一个 **micro-sd 卡槽**。当使用 **没有 eMMC 的 CM4 模块**时，这在将操作系统安装到 micro-SD 卡上非常有用。建议使用至少 8GB 容量的卡。点击 [此链接](https://wiki.seeedstudio.com/reTerminal/#flash-to-micro-sd-card-cm4-non-emmc-version) 了解更多信息！

### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/SD_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**提示：** 点击 [这里](https://files.seeedstudio.com/wiki/ReTerminal/SD_sch.jpg) 查看更高分辨率的图片

## Micro HDMI 接口

reTerminal 配备了一个 micro HDMI 接口，您可以通过 **micro HDMI 转标准 HDMI 线缆**将其连接到 HDMI 显示器。它支持最高 4K 分辨率，帧率为 60fps。

### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/HDMI_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**提示：** 点击 [这里](https://files.seeedstudio.com/wiki/ReTerminal/HDMI_sch.jpg) 查看更高分辨率的图片

### 使用方法

- **步骤 1.** 使用 micro-HDMI 转标准-HDMI 线缆，将 HDMI 显示器连接到 reTerminal 的 micro-HDMI 接口

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/HDMI-port.jpg" alt="pir" width="250" height="auto"/></p>

- **步骤 2.** 打开 reTerminal，您将在 reTerminal 的 LCD 和连接的 HDMI 显示器上看到 UI 输出

**注意：** 如果在 reTerminal 已经开机的情况下连接显示器，您需要输入 **sudo service lightdm restart** 来在连接的 HDMI 显示器上显示 UI。

- **步骤 3.** 在终端窗口中输入以下命令以安装 **屏幕配置** 工具

```sh
sudo apt install arandr
```

- **步骤 4.** 点击左上角的 Raspberry Pi 图标，导航到 `Preferences > Screen Configuration`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/screen-config-setup.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 5.** 在 **Screen Layout Editor** 窗口中，导航到 `Configure > Screens > HDMI-1 > Resolution`，并选择连接的 HDMI 显示器的分辨率。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/screen-drag.png" alt="pir" width="1000" height="auto"/></p>

**注意：** 您还可以更改显示器的 **频率** 和 **方向**

- **步骤 6.** 拖动两个框以更改显示器的排列方式。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/screen-setting.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 7.** 点击 **勾选标记** 以应用设置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/screen-apply.png" alt="pir" width="1000" height="auto"/></p>

#### 在 Buildroot/Yocto 镜像上的使用

- 目前热插拔功能不可用。一旦修复后将更新此部分。
- 因此，您需要先连接 HDMI 显示器，然后再打开 reTerminal。
- 请注意，**arandr** 软件包在 Buildroot 系统镜像中不可用。

## USB Type-C 接口

reTerminal 上的 **USB Type-C 接口**可用于通过 **5V/4A（推荐）** 为 reTerminal 供电。此外，它还可以用作 **USB 设备**，您可以将 reTerminal 连接到 **主机 PC**，此时 reTerminal 将作为 **USB 大容量存储设备**。通过这种方式，您可以通过 PC 访问 reTerminal 的 **板载 eMMC**，并向 eMMC 刷写 **操作系统**。点击 [这里](https://wiki.seeedstudio.com/reTerminal/#flash-to-emmc-cm4-emmc-version) 了解更多！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/type-c.png" alt="pir" width="130" height="auto"/></p>

## 标准相机安装座（1/4英寸）

reTerminal 配备了一个**直径为 1/4 英寸的标准相机安装座**。因此，您可以将 reTerminal 连接到**标准三脚架**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/tripod.png" alt="pir" width="450" height="auto"/></p>

## reTerminal 的 Python 库

我们已经准备了一个**Python 库**，可以让您使用 reTerminal 上的板载硬件。目前可以通过此 Python 库访问**加速度计、用户 LED、用户按钮和蜂鸣器**。

### 安装

在 reTerminal 上打开终端窗口并执行以下命令：

```sh
sudo pip3 install seeed-python-reterminal
```

**注意：** 源代码可以在 [这里](https://github.com/Seeed-Studio/Seeed_Python_ReTerminal) 找到。

### 使用方法

- **步骤 1.** 创建一个新的**Python 文件**并使用 **nano 文本编辑器**打开

```sh
nano test.py
```

- **步骤 2.** 输入 Python 代码

- **步骤 3.** 按 **CTRL + X**，然后按 **Y** 保存文件

- **步骤 4.** 最后运行文件

```sh
python3 test.py
```

您可以按照上述步骤测试以下硬件功能。每个部分包含的 Python 代码可以直接输入到 test.py 文件中，然后执行该文件。

#### 用户 LED 测试

```python
import seeed_python_reterminal.core as rt
import time

print("STA ON, USR OFF")
rt.sta_led = True
rt.usr_led = False
time.sleep(1)

print("STA OFF, USR ON")
rt.sta_led = False
rt.usr_led = True
time.sleep(1)

print("STA RED, USR OFF")
rt.sta_led_green = False
rt.sta_led_red = True
rt.usr_led = False
time.sleep(1)

print("STA OFF, USR OFF")
rt.sta_led = False
rt.usr_led = False
```

#### 蜂鸣器测试

```python
import seeed_python_reterminal.core as rt
import time

print("BUZZER ON")
rt.buzzer = True
time.sleep(1)

print("BUZZER OFF")
rt.buzzer = False
```

#### 用户按钮测试

```python
import seeed_python_reterminal.core as rt
import seeed_python_reterminal.button as rt_btn


device = rt.get_button_device()
while True:
    for event in device.read_loop():
        buttonEvent = rt_btn.ButtonEvent(event)
        if buttonEvent.name != None:
            print(f"name={str(buttonEvent.name)} value={buttonEvent.value}")
```

#### 加速度计测试

```python
import seeed_python_reterminal.core as rt
import seeed_python_reterminal.acceleration as rt_accel


device = rt.get_acceleration_device()
while True:
    for event in device.read_loop():
        accelEvent = rt_accel.AccelerationEvent(event)
        if accelEvent.name != None:
            print(f"name={str(accelEvent.name)} value={accelEvent.value}")
```

#### 加速度计和按钮测试

```python
import asyncio
import seeed_python_reterminal.core as rt
import seeed_python_reterminal.acceleration as rt_accel
import seeed_python_reterminal.button as rt_btn


async def accel_coroutine(device):
    async for event in device.async_read_loop():
        accelEvent = rt_accel.AccelerationEvent(event)
        if accelEvent.name != None:
            print(f"accel name={str(accelEvent.name)} value={accelEvent.value}")


async def btn_coroutine(device):
    async for event in device.async_read_loop():
        buttonEvent = rt_btn.ButtonEvent(event)
        if buttonEvent.name != None:
            print(f"name={str(buttonEvent.name)} value={buttonEvent.value}")


accel_device = rt.get_acceleration_device()
btn_device = rt.get_button_device()

asyncio.ensure_future(accel_coroutine(accel_device))
asyncio.ensure_future(btn_coroutine(btn_device))

loop = asyncio.get_event_loop()
loop.run_forever()
```

#### 在 Buildroot 镜像上的使用

- 此库稍后将添加到 Buildroot 镜像中
- 首先输入 **su -** 以启用 root 账户
- 然后输入 **pip3 install seeed-python-reterminal**
- 创建 Python 文件时使用 **vi** 作为文本编辑器
- 加速度计和按钮演示存在问题。一旦修复，我们将更新此部分

#### 在 Yocto 镜像上的使用

- 尽管 Python 已安装，但 pip 尚未安装。我们稍后会将此库打包到系统镜像中。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>