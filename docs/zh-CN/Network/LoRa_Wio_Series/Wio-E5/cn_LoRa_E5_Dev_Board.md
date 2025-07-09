---
description: Wio-E5 开发板入门指南。
title: Wio-E5 开发套件
keywords:
  - wio 
image: https://wiki.seeedstudio.com/wio_gps_board/
slug: /cn/LoRa_E5_Dev_Board
last_update:
  date: 05/15/2025
  author: hushuxu
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<!-- ![](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-07.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-07.png" alt="pir" width={600} height="auto" /></p>

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/LoRa-E5-Dev-Kit-p-4868.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LoRa-E5-Dev-Kit-p-4868.html"><strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong></a>
</div>

> LoRaWAN® 是 LoRa Alliance® 授权使用的标志。LoRa® 是 Semtech Corporation 或其子公司的商标。

Wio-E5 开发套件是一个紧凑的开发工具集，可帮助您释放 [Wio-E5 STM32WLE5JC](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html) 的强大性能。套件包括一个 Wio-E5 开发板、一根天线（EU868/US915）、一根 USB Type-C 数据线和一个 2*AA 3V 电池座。

Wio-E5 开发板内嵌 Wio-E5 STM32WLE5JC 模块，支持全球频段的 LoRaWAN® 协议。它引出了 Wio-E5 的全部 GPIO，支持多种数据协议和接口，包括 RS-485、Grove、母/公接头等。这是快速测试和快速原型设计 LoRa® IoT 项目的理想选择。

Wio-E5 开发板内嵌 [Wio-E5 STM32WLE5JC 模块](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html)，这是全球首款将 LoRa RF 和 MCU 芯片集成到单一小芯片中的模块，并通过了 FCC 和 CE 认证。它由 ARM Cortex-M4 内核和 Semtech SX126X LoRa® 芯片驱动，支持全球频段的 LoRaWAN® 和 LoRa® 协议，以及 (G)FSK、BPSK、(G)MSK 和 LoRa® 调制。

在此处了解更多关于 [Wio-E5](https://wiki.seeedstudio.com/LoRa-E5_STM32WLE5JC_Module/) 的信息。

Wio-E5 开发板在空旷区域的传输距离可达 10 公里。板载 Wio-E5 模块的睡眠电流低至 2.1 uA（WOR 模式）。它采用工业标准设计，工作温度范围为 -40 ℃ ~ 85℃，高灵敏度范围为 -116.5 dBm ~ -136 dBm，输出功率在 3.3V 时可达 +20.8dBm。

Wio-E5 开发板还具有丰富的接口。为了充分发挥 Wio-E5 模块的功能，Wio-E5 开发板引出了 Wio-E5 的全部 28 个引脚，并提供了丰富的接口，包括 Grove 接口、RS-485 端子、公/母针脚接头，方便您连接不同接口和数据协议的传感器和模块，节省焊接时间。您还可以通过连接 2 节 AA 电池的电池座为开发板供电，在缺少外部电源时实现临时使用。这是一款用户友好的开发板，适用于轻松测试和快速原型设计。

由于 Wio-E5 是一款带有 MCU 的 LoRaWAN® 芯片，主要有以下三种使用方式：

**1: 通过 USB 将 Wio-E5 开发板连接到 PC，并通过 AT 指令控制**

开发板内置 USB 转 UART 功能，您只需使用 USB Type-C 数据线将 Wio-E5 开发板连接到 PC，并使用串口通信软件发送 AT 指令并读取数据。

**2: 通过 UART 将 Wio-E5 开发板连接到另一块主板，并通过 AT 指令控制**

例如，通过 UART 将 Wio-E5 开发板连接到 Seeeduino XIAO 和扩展板，并通过 Arduino IDE 串口监视器发送 AT 指令并读取数据。

**3: 使用 SDK 开发用户应用程序**

通过使用 STM32Cube Programmer（由 STMicroelectronics 官方提供的 SDK）开发带有 MCU 功能的 LoRa® 开发板。要下载此 SDK 资源，请在下方的学习和文档资源中查找。

凭借上述所有卓越功能，Wio-E5 开发板将成为物联网设备开发、测试、原型设计以及在远距离、超低功耗物联网场景（如智能农业、智能办公和智能工业）中的应用的优秀选择。

如果您对 LoRa® 和 LoRaWAN® 技术不熟悉，请详细查看此博客 [LoRapedia](https://www.seeedstudio.com/blog/2020/08/03/lorapedia-an-introduction-of-lora-and-lorawan-technology/)。

## 特性

- 超低功耗和高性能

- 轻松测试和快速原型设计

- 全 GPIO 引出至丰富接口，包括 RS-485、Grove 等

- 支持全球 LoRaWAN® 和 LoRa® 频率计划

- 长距离传输范围可达 10 公里（空旷区域理想值）

## 硬件概览

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/hardware%20overview/4071615359366_.pic_hd.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/3011615286741_.pic_hd.jpg" alt="pir" width={600} height="auto" /></p>

## 规格参数

<table class="tg">
<thead>
<tr><th class="tg-6cwf">参数</th><th class="tg-6cwf">规格</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-g9rn">尺寸</td>
<td class="tg-g9rn">Wio-E5 开发板：85.6*54mm  包装：200*130*50mm</td>
</tr>
<tr>
<td class="tg-g9rn">电压 - 输入</td>
<td class="tg-g9rn">3-5V（电池）/ 5V（USB Type-C）</td>
</tr>
<tr>
<td class="tg-g9rn">电压 - 输出</td>
<td class="tg-g9rn">EN 3V3 / 5V</td>
</tr>
<tr>
<td class="tg-g9rn">功率 - 输出</td>
<td class="tg-g9rn">在 3.3V 时可达 +20.8dBm</td>
</tr>
<tr>
<td class="tg-g9rn">频率</td>
<td class="tg-g9rn">EU868 / US915 / AU915 / AS923 / KR920 / IN865</td>
</tr>
<tr>
<td class="tg-g9rn">协议</td>
<td class="tg-g9rn">LoRaWAN®</td>
</tr>
<tr>
<td class="tg-g9rn">灵敏度</td>
<td class="tg-g9rn">-116.5dBm ~ -136dBm</td>
</tr>
<tr>
<td class="tg-g9rn">接口</td>
<td class="tg-g9rn">USB Type-C / JST2.0 / Grove*3（IIC*2/UART*1）/ RS485 / SMA-K / IPEX</td>
</tr>
<tr>
<td class="tg-g9rn">调制</td>
<td class="tg-g9rn">LoRa®、(G)FSK、(G)MSK、BPSK</td>
</tr>
<tr>
<td class="tg-g9rn">工作温度</td>
<td class="tg-g9rn">-40℃ ~ 85℃</td>
</tr>
<tr>
<td class="tg-g9rn">电流</td>
<td class="tg-g9rn">LoRa-E5 模块睡眠电流低至 2.1uA（WOR 模式）</td>
</tr>
</tbody>
</table>

<table class="tg">
<thead>
<tr><th class="tg-f2tp" colspan="2">零件清单：</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-uu1j" colspan="2">Wio-E5 开发板 *1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">天线(EU868/US915)*1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">USB TypeC (20cm) *1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">2*AA 3V 电池盒 *1</td>
</tr>
</tbody>
</table>

## 应用场景

- Wio-E5 模块的便捷测试
- 使用 Wio-E5 快速构建 LoRa® 设备原型
- 任意远距离无线通信应用开发
- LoRa® 和 LoRaWAN® 应用学习与研究

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/317990687/image/application.png" alt="pir" width={600} height="auto" /></p>

## 应用说明

**1. 出厂 AT 固件**

Wio-E5 系列内置了 AT 指令固件，支持 LoRaWAN® Class A/B/C 协议和广泛的频率计划：EU868/US915/AU915/AS923/KR920/IN865。借助此 AT 指令固件，开发者可以轻松快速地构建原型或应用。

AT 指令固件包含用于 DFU 的引导加载程序和 AT 应用程序。"PB13/SPI_SCK/BOOT" 引脚用于控制 Wio-E5 停留在引导加载程序中或跳转到 AT 应用程序。当 PB13 为高电平时，模块将在复位后跳转到 AT 应用程序，默认波特率为 9600。当 PB13 为低电平时（按下 Wio-E5 开发套件上的 "Boot" 按钮），模块将停留在引导加载程序中，并以 115200 波特率每秒发送一次 "C" 字符。

:::note

- 出厂 AT 固件已设置为 RDP（读取保护）等级 1，开发者需要先使用 STM32Cube Programmer 移除 RDP。请注意，将 RDP 回归到等级 0 会导致闪存存储器被完全擦除，且无法恢复出厂 AT 固件。
- Wio-E5 模块上的 "PB13/SPI_SCK/BOOT" 引脚只是一个普通 GPIO 引脚，并非 MCU 的 "BOOT0" 引脚。此 "PB13/SPI_SCK/BOOT" 引脚在出厂 AT 固件的引导加载程序中用于决定跳转到 APP 或停留在引导加载程序（用于 DFU）。实际的 "BOOT0" 引脚未引出到模块，因此在开发低功耗应用时需特别注意。
:::

**2. 时钟配置**

2.1 HSE

- 32MHz TCXO

- TCXO 电源：PB0-VDD_TCXO

2.2 LSE

- 32.768KHz 晶体振荡器

**3. 射频开关**

**Wio-E5 模块仅通过 RFO_HP 进行传输：**

- 接收：PA4=1, PA5=0

- 传输（高输出功率，SMPS 模式）：PA4=0, PA5=1

## 入门指南

### 快速开始使用 AT 指令

#### 准备工作

- **步骤 1.** 通过 Type-C 数据线将 Wio-E5 开发套件连接到 PC

- **步骤 2.** 打开串口工具（例如 Arduino 串口监视器），选择正确的 COM 端口，将波特率设置为 9600，并选择 Both NL & CR

- **步骤 3.** 尝试发送 "AT"，您将看到响应。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/4.png" alt="pir" width={600} height="auto" /></p>

#### 基本 AT 指令

- AT+ID // 读取所有信息，包括 DevAddr(ABP)、DevEui(OTAA)、AppEui(OTAA)

- AT+ID=DevAddr // 读取 DevAddr

- AT+ID=DevEui // 读取 DevEui

- AT+ID=AppEui // 读取 AppEui

- AT+ID=DevAddr,"devaddr" // 设置新的 DevAddr

- AT+ID=DevEui,"deveui" // 设置新的 DevEui

- AT+ID=AppEui,"appeui" // 设置新的 AppEui

- AT+KEY=APPKEY,"16 bytes length key" // 更改应用会话密钥

- AT+DR=band // 更改频段计划

- AT+DR=SCHEME // 检查当前频段

- AT+CH=NUM, 0-7 // 启用通道 0~7

- AT+MODE="mode" // 选择工作模式：LWOTAA、LWABP 或 TEST

- AT+JOIN // 发送 JOIN 请求

- AT+MSG="Data to send" // 用于发送无需服务器确认的字符串格式帧

- AT+CMSG="Data to send" // 用于发送必须由服务器确认的字符串格式帧

- AT+MSGHEX="xx xx xx xx" // 用于发送无需服务器确认的十六进制格式帧

- AT+CMSGHEX="xx xx xx xx" // 用于发送必须由服务器确认的十六进制格式帧

#### 连接并向 The Things Network 发送数据

- **步骤 1.** 访问 [The Things Network](https://www.thethingsnetwork.org) 网站并注册新账户

- **步骤 2.** 登录后，点击您的个人资料并选择 **Console**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/1.png" alt="pir" width={600} height="auto" /></p>

- **步骤 3.** 选择一个集群以开始添加设备和网关

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/2.png" alt="pir" width={600} height="auto" /></p>

- **步骤 4.** 点击 **Go to applications**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/4.png" alt="pir" width={600} height="auto" /></p>

- **步骤 5.** 点击 **+ Add application**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/5.png" alt="pir" width={600} height="auto" /></p>

- **步骤 6.** 填写 **Application ID** 并点击 **Create application**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/6.png" alt="pir" width={600} height="auto" /></p>

**注意：** 此处 **Application name** 和 **Description** 并非必填字段。如果 **Application name** 留空，默认将使用与 **Application ID** 相同的名称。

以下是新创建的应用程序

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/7.png" alt="pir" width={600} height="auto" /></p>

- **步骤 7.** 点击 **+ Add end device**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/8.png" alt="pir" width={600} height="auto" /></p>

- **步骤 8.** 点击 **Manually**，手动输入注册凭据

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/9.png" alt="pir" width={600} height="auto" /></p>

- **步骤 9.** 根据您的地区选择 **Frequency plan**。同时确保您使用的频率与将连接此设备的网关频率一致。选择 **MAC V1.0.2** 作为 **LoRaWAN® 版本**，并选择 **PHY V1.0.2 REV B** 作为 **区域参数版本**。这些设置符合 Wio-E5 的 LoRaWAN® 协议栈。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/10.png" alt="pir" width={600} height="auto" /></p>

- **步骤 10.** 当 Wio-E5 模块仍然可以通过串口控制台访问时，在串口监视器上发送以下 AT 命令：

  - `AT+ID=DevEui` 获取设备 EUI
  - `AT+ID=AppEui` 获取应用 EUI
  - `AT+KEY=APPKEY,"2B7E151628AED2A6ABF7158809CF4F3C"` 设置应用密钥

输出结果如下：

```
Tx: AT+ID=DevEui
Rx: +ID: DevEui, 2C:F7:F1:20:24:90:03:63
Tx: AT+ID=AppEui
Rx: +ID: AppEui, 80:00:00:00:00:00:00:07
Tx: AT+KEY=APPKEY,"2B7E151628AED2A6ABF7158809CF4F3C"
Rx: +KEY: APPKEY 2B7E151628AED2A6ABF7158809CF4F3C
```

- **步骤 11.** 将上述信息复制并粘贴到 **DevEUI**、**AppEUI** 和 **AppKey** 字段中。**End device ID** 字段将在填写 **DevEUI** 时自动填充。最后点击 **Register end device**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/12.png" alt="pir" width={600} height="auto" /></p>

- **步骤 12.** 在 TTN 控制台中注册您的 LoRaWAN® 网关。请参考[此处](https://wiki.seeedstudio.com/The-Things-Indoor-Gateway/#step-2-gateway-registration-on-ttn-console)提供的说明。

- **步骤 13.** 输入以下 AT 命令以连接到 TTN：

```
// 如果使用 US915
AT+DR=US915
AT+CH=NUM,8-15

// 如果使用 EU868
AT+DR=EU868
AT+CH=NUM,0-2

AT+MODE=LWOTAA
AT+JOIN
```

串口监视器上的输出如下：

```
Tx: AT+DR=US915
Rx: +DR: US915
Tx: AT+CH=NUM,8-15
Rx: +CH: NUM, 8-15

Tx: AT+MODE=LWOTAA
Rx: +MODE: LWOTAA

Tx: AT+JOIN
Rx: +JOIN: Start
+JOIN: NORMAL
+JOIN: Network joined
+JOIN: NetID 000013 DevAddr 26:01:5F:66
+JOIN: Done
```

如果您在串口控制台上看到 **+JOIN: Network joined**，这表示您的设备已成功连接到 TTN！

您还可以在 **End devices** 页面上检查设备状态。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/13.png" alt="pir" width={600} height="auto" /></p>

- **步骤 14.** 输入以下 AT 命令以向 TTN 发送数据：

```
// 向 TTN 发送字符串 "HELLO"
Tx: AT+MSG=HELLO
Rx: +MSG: Start
+MSG: FPENDING
+MSG: RXWIN2, RSSI -112, SNR -1.0
+MSG: Done
// 发送十六进制 "00 11 22 33 44"
Tx: AT+MSGHEX="00 11 22 33 44"
Rx: +MSGHEX: Start
+MSGHEX: Done
```

有关 AT 命令的更多信息，请参考 [Wio-E5 AT Command Specification](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)。

### 使用 STM32Cube MCU Package 开发

本节适用于 Wio-E5 开发套件，旨在使用 STM32WL 系列（SDK）的 STM32Cube MCU Package 构建多个应用程序。

**注意：** 我们已更新库以支持 v1.1.0，这是 STM32WL 系列的 STM32Cube MCU Package 的最新版本。

:::note
请先阅读 [Erase Factory AT Firmware](https://wiki.seeedstudio.com/LoRa_E5_Dev_Board/#application-notes) 部分，因为如果需要使用 SDK 进行编程，我们需要擦除工厂 AT 固件。擦除工厂 AT 固件后无法恢复。
:::

#### 准备工作

软件：

- [STM32CubeIDE](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-ides/stm32cubeide.html)：用于编译和调试

- [STM32CubeProgrammer](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-programmers/stm32cubeprog.license=1614563305396.product=STM32CubePrg-W64.version=2.6.0.html)：用于编程 STM32 设备

硬件：

- 连接到 LoRaWAN® 网络服务器（例如 TTN）的 LoRaWAN® 网关

- 一根 USB Type-C 数据线和一个 ST-LINK。将 Type-C 数据线连接到开发板的 Type-C 接口以供电和进行串口通信。将 ST-LINK 连接到 SWD 引脚，连接如下图所示：

![connection](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/connection.png)

#### GPIO 配置概览

- 由于 Wio-E5 系列的硬件设计与 ST 官方的 STM32WL55JC 开发板 NUCLEO-WL55JC 略有不同，开发者需要重新配置一些 GPIO，以适配 SDK 示例到 Wio-E5 系列。我们已经重新配置了 GPIO，但我们认为有必要指出差异。

|SDK 示例标签|NUCLEO-WL55JC 的 GPIO|Wio-E5 开发套件的 GPIO|
|---------|---------------------|------------------------------------------|
|RF_CTRL1|PC4|PA4|
|RF_CTRL2|PC5|PA5|
|RF_CTRL3|PC3|None|
|BUT1|PA0|PB13 (Boot 按钮)|
|BUT2|PA1|None|
|BUT3|PC6|None|
|LED1|PB15|None|
|LED2|PB9|PB5|
|LED3|PB11|None|
|DBG1|PB12|PA0 (D0 按钮)|
|DBG2|PB13|PB10|
|DBG3|PB14|PB3|
|DBG4|PB10|PB4|
|Usart|Usart2(PA2/PA3)|Usart1(PB6/PB7)|

### 应用程序

现在我们将探索使用 STM32WL 系列（SDK）的 STM32Cube MCU Package 为 Wio-E5 开发套件构建的几个应用程序。

#### LoRaWAN® 终端节点

此应用程序将连接 Wio-E5 开发套件到 TTN（The Things Network），并在连接到 LoRaWAN® 网关后发送数据。

- **步骤 1.** 点击[此处](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian)访问 **Seeed-Studio/LoRaWan-E5-Node** 仓库，并将其下载为 ZIP 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **步骤 2.** 解压 ZIP 文件并导航到 `LoRaWan-E5-Node > Projects > Applications > LoRaWAN > LoRaWAN_End_Node > STM32CubeIDE`

- **步骤 3.** 双击 **.project** 文件。

- **步骤 4.** 右键点击项目并选择 **Properties**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/properties-open-2.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 5.** 导航到 `C/C++ Build > Settings > MCU Post build outputs`，勾选 **Convert to Intel Hex file (-O ihex)** 并点击 **Apply and Close**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/set-hex.png" alt="pir" width={600} height="auto" /></p>

- **步骤 6.** 点击 **Build 'Debug'**，编译应无任何错误。

![build](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/build.png)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lorawan-debug-2.png" alt="pir" width={600} height="auto" /></p>

现在我们将修改 **Device EUI**、**Application EUI**、**Application KEY** 和 **LoRawan Region**。

- **步骤 7.** 请按照[此指南](https://wiki.seeedstudio.com/LoRa_E5_mini/#13-connect-and-send-data-to-the-things-network)设置您的 TTN 应用程序，获取您的 **Application EUI** 并将其复制到 `LoRaWAN/App/se-identity.h` 中的宏定义 `LORAWAN_JOIN_EUI`。例如，这里的 Application EUI 是 `80 00 00 00 00 00 00 0x07`：

```cpp
// LoRaWAN/App/se-identity.h

/*!
 * App/Join server IEEE EUI (big endian)
 */
#define LORAWAN_JOIN_EUI                                   { 0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x07 }
```

- **步骤 8.** 同样，您可以通过设置 `LoRaWAN/App/se-identity.h` 中的宏定义 `LORAWAN_DEVICE_EUI` 和 `LORAWAN_NWK_KEY` 来修改您的 **Device EUI** 和 **Application Key**。确保 `LORAWAN_DEVICE_EUI` 和 `LORAWAN_NWK_KEY` 与 TTN 控制台中的 `Device EUI` 和 `App Key` 一致。

```cpp
// LoRaWAN/App/se-identity.h

/*!
 * end-device IEEE EUI (big endian)
 */
#define LORAWAN_DEVICE_EUI                                 { 0x2C, 0xF7, 0xF1, 0x20, 0x24, 0x90, 0x03, 0x63 }

/*!
 * Network root key
 */
#define LORAWAN_NWK_KEY                                    2B,7E,15,16,28,AE,D2,A6,AB,F7,15,88,09,CF,4F,3C
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/se-identity.png" alt="pir" width={600} height="auto" /></p>

- **步骤 9.** 默认的 LoRaWAN® 区域是 `EU868`，您可以通过设置 `LoRaWAN/App/lora_app.h` 中的宏定义 `ACTIVE_REGION` 来修改它。

```c
// LoRaWAN/App/lora_app.h

/* LoraWAN application configuration (Mw is configured by lorawan_conf.h) */
/* Available: LORAMAC_REGION_AS923, LORAMAC_REGION_AU915, LORAMAC_REGION_EU868, LORAMAC_REGION_KR920, LORAMAC_REGION_IN865, LORAMAC_REGION_US915, LORAMAC_REGION_RU864 */
#define ACTIVE_REGION                               LORAMAC_REGION_US915
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lora-app-h.png" alt="pir" width={600} height="auto" /></p>

- **步骤 10.** 完成上述修改后，**重新构建**示例并将其编程到您的 Wio-E5。打开 `STM32CubeProgrammer`，将 ST-LINK 连接到您的电脑，按住设备的 `RESET 按钮`，然后点击 `Connect` 并释放 `RESET 按钮`：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width={600} height="auto" /></p>

- **步骤 11.** 确保 Read Out Protection 为 `AA`，如果显示为 `BB`，请选择 `AA` 并点击 `Apply`：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width={600} height="auto" /></p>

- **步骤 12.** 现在，进入 `Erasing & Programming` 页面，选择您的 hex 文件路径（例如：`C:\Users\user\Downloads\LoRaWan-E5-Node\Projects\Applications\LoRaWAN\LoRaWAN_End_Node\STM32CubeIDE\Debug\LoRaWAN_End_Node.hex`），按照下图选择编程选项，然后点击 `Start Programming`！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width={600} height="auto" /></p>

编程完成后，您将看到消息 **Download verified successfully**。

- **步骤 13.** 如果您的 LoRaWAN® 网关和 TTN 已设置，Wio-E5 在复位后将成功加入！每 30 秒会向 TTN 发送一个确认的 LoRaWAN® 数据包。如果加入成功，以下日志将打印在串口监视器上（这里使用 Arduino 串口监视器）：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/TTN-joined.png" alt="pir" width={600} height="auto" /></p>

- 恭喜！现在您已将 Wio-E5 连接到 LoRaWAN® 网络！您现在可以继续开发更多令人兴奋的 LoRaWAN® 终端节点应用程序！

**注意：** Wio-E5 仅支持高功率输出模式，因此您不能在 `radio_board_if.h` 中使用以下宏定义：

```
#define RBI_CONF_RFO     RBI_CONF_RFO_LP_HP
// 或
#define RBI_CONF_RFO     RBI_CONF_RFO_LP
```

即使 **RBI_CONF_RFO** 在 `radio_board_if.h` 中定义为 **RBI_CONF_RFO_LP_HP**，它也不会被使用，因为 **USE_BSP_DRIVER** 已定义，并且 **BSP_RADIO_GetTxConfig()** 函数返回 **RADIO_CONF_RFO_HP**。

#### FreeRTOS LoRaWAN®

此应用程序也将 Wio-E5 开发套件连接到 TTN（The Things Network），并在连接到 LoRaWAN® 网关后发送数据。与之前的 LoRaWAN® 终端节点应用程序的区别在于，前者运行在裸机上，而此应用程序运行在 FreeRTOS 下。

- **步骤 1.** 点击[这里](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian)访问 **Seeed-Studio/LoRaWan-E5-Node** 仓库并将其下载为 ZIP 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **步骤 2.** 解压 ZIP 文件并导航到 `LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN`

- **步骤 3.** 双击 **.project** 文件。

- **步骤 4.** 参考之前 **LoRaWAN® 终端节点** 应用程序的 **步骤 4 - 步骤 13**，将 Wio-E5 开发套件连接到 TTN！

#### FreeRTOS LoRaWAN® AT

此应用程序也将 Wio-E5 开发套件连接到 TTN（The Things Network），并在连接到 LoRaWAN® 网关后发送数据。与之前的 FreeRTOS LoRaWAN® 应用程序的区别在于，您可以使用 AT 命令。

- **步骤 1.** 点击[这里](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian)访问 **Seeed-Studio/LoRaWan-E5-Node** 仓库并将其下载为 ZIP 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **步骤 2.** 解压 ZIP 文件并导航到 `LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN_AT`

- **步骤 3.** 双击 **.project** 文件

- **步骤 4.** 参考之前 **LoRaWAN® End Node** 应用中的 **步骤 4 - 步骤 12**

- **步骤 5.** 打开一个串口监视器，例如 **Arduino Serial Monitor**，你将看到以下输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-serial-open-2.png" alt="pir" width={600} height="auto" /></p>

- **步骤 6.** 输入 **AT?** 并按 **ENTER** 键即可查看所有可用的 AT 命令

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/at-commands.png" alt="pir" width={600} height="auto" /></p>

- **步骤 7.** 如果你仍然想更改 **Device EUI**、**Application EUI**、**Application KEY** 和 **LoRawan Region**，可以使用 AT 命令进行更改。然而，在本示例中，这些参数已经在 **se-identity.h** 和 **lora_app.h** 中设置好了

- **步骤 8.** 输入 **AT+JOIN=1**，当加入成功时，你将看到以下输出！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-join.png" alt="pir" width={600} height="auto" /></p>

**注意：** 此处应使用 **AT+JOIN=(Mode)** 格式。**Mode** 对应于 **0 表示 ABP** 或 **1 表示 OTAA**

#### FreeRTOS 低功耗

此应用程序将在 Wio-E5 开发套件上启用低功耗模式。一旦应用程序被烧录，开发板将正常消耗电能 2 秒，然后进入低功耗模式 2 秒，如此循环。

- **步骤 1.** 点击 [这里](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) 访问 **Seeed-Studio/LoRaWan-E5-Node** 仓库并下载为 ZIP 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **步骤 2.** 解压 ZIP 文件并导航到 `LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LowPower`

- **步骤 3.** 双击 **.project** 文件

- **步骤 4.** 右键点击项目并选择 **Properties**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-properties.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 5.** 导航到 `C/C++ Build > Settings > MCU Post build outputs`，勾选 **Convert to Intel Hex file (-O ihex)** 并点击 **Apply and Close**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-hex.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 6.** 点击 **Build 'Debug'**，编译应无错误

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-build.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-success.png" alt="pir" width={600} height="auto" /></p>

- **步骤 7.** 打开 `STM32CubeProgrammer`，将 ST-LINK 连接到你的电脑，按住设备的 `RESET 按钮`，然后点击 `Connect` 并释放 `RESET 按钮`：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width={600} height="auto" /></p>

- **步骤 8.** 确保 Read Out Protection 为 `AA`，如果显示为 `BB`，请选择 `AA` 并点击 `Apply`：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width={600} height="auto" /></p>

- **步骤 9.** 现在，进入 `Erasing & Programming` 页面，选择你的 hex 文件路径（例如：`C:\Users\user\Downloads\LoRaWan-E5-Node\Projects\Applications\FreeRTOS\FreeRTOS_LowPower\Debug\FreeRTOS_LowPower.hex`），按照下图选择编程选项，然后点击 `Start Programming`！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width={600} height="auto" /></p>

编程完成后，你将看到消息 **Download verified successfully**。

- **步骤 10.** 将 Wio-E5 开发套件连接到电脑并接入功率计。你会注意到开发板上的红色 LED 每秒闪烁一次，开发板在正常和低功耗状态之间切换（功率计上的电流在低功耗状态下会下降 1 秒，然后在正常工作状态下恢复 1 秒）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/low-power-demo-2.gif" alt="pir" width={600} height="auto" /></p>

#### 低功耗

此应用程序也将在 Wio-E5 开发套件上启用低功耗模式。与之前的 FreeRTOS 低功耗应用程序的区别在于，前者运行在 FreeRTOS 上，而此应用程序运行在裸机环境下。

- **步骤 1.** 点击 [这里](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) 访问 **Seeed-Studio/LoRaWan-E5-Node** 仓库的 **qian** 分支并下载为 ZIP 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/lora-e5-qian-github.png" alt="pir" width={600} height="auto" /></p>

- **步骤 2.** 解压 ZIP 文件并导航到 `LoRaWan-E5-Node > Projects > Applications > LowPower`

- **步骤 3.** 双击 **.project** 文件

- **步骤 4.** 参考之前 **FreeRTOS LowPower** 应用程序的 **步骤 4 - 步骤 10**，你将在功率计上看到相同的输出！

## 资源

Wio-E5 开发板数据表：

- <p><a href="http://files.seeedstudio.com/products/113990934/LoRa-E5%20Dev%20Board%20v1.0.brd">Wio-E5 开发板 v1.0.brd</a></p>

- <p><a href="https://files.seeedstudio.com/products/113990934/LoRa-E5%20Dev%20Board%20v1.0.pdf">Wio-E5 开发板 v1.0.pdf</a></p>

- <p><a href="http://files.seeedstudio.com/products/113990934/LoRa-E5%20Dev%20Board%20v1.0.sch">Wio-E5 开发板 v1.0.sch</a></p>

Wio-E5 数据手册：

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.1.pdf">Wio-E5 数据手册和规格</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf">Wio-E5 AT 指令规范</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf">STM32WLE5JC 数据手册</a></p>

Wio-E5 认证：

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf">Wio-E5-HF 认证 CE-VOC-RED</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf">Wio-E5-HF FCC 认证 -DSS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf">Wio-E5-HF FCC 认证 -DTS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/Telec.zip">WWio-E5-HF TELEC 认证</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20IC%20ID.pdf">Wio-E5-HF IC 认证</a></p>

相关 SDK：

- <p><a href="https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview" target="_blank">STM32WL 系列的 STM32Cube MCU 软件包</a></p>

## 技术支持与产品讨论

请将任何技术问题提交到我们的 [论坛](http://forum.seeedstudio.com/)。

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得顺畅的体验。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>