---
description: 入门指南 LoRaWAN® 网关模块 WM1302。
title: LoRaWAN® 网关模块 WM1302
keywords:
  - wio 
  - docusaurus
image: https://files.seeedstudio.com/wiki/WM1302_module/WM1302_3.webp
slug: /cn/WM1302_module
last_update:
  date: 05/15/2025
  author: Leo
---

# GPIO mapping has to be adapted with HW

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/WM1302_3.jpeg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_3.jpeg" alt="pir" width={600} height="auto" /></p>

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html)
> LoRaWAN® 是 LoRa Alliance® 授权使用的标志。  
LoRa® 标志是 Semtech Corporation 或其子公司的商标。

:::note
我们最近发布了基于 Wio-E5 模块的 Wio-E5 系列。

点击[这里](https://www.seeedstudio.com/lora-c-755.html?product_list_stock=3)了解 LoRa-E5 系列的新成员，包括 [Wio-E5 模块](https://wiki.seeedstudio.com/LoRa-E5_STM32WLE5JC_Module/)、[Grove 模块](https://wiki.seeedstudio.com/Grove_LoRa_E5_New_Version/)、[迷你开发板](https://wiki.seeedstudio.com/LoRa_E5_mini/) 和 [开发套件](https://wiki.seeedstudio.com/LoRa_E5_Dev_Board/)。

如果想了解如何使用 STM32WL 系列的 STM32Cube MCU 软件包 (SDK) 创建一个 LoRaWAN® 终端节点，加入并发送数据到 LoRaWAN® 网络，请参阅 [迷你开发板](https://wiki.seeedstudio.com/LoRa_E5_mini/) 和 [开发套件](https://wiki.seeedstudio.com/LoRa_E5_Dev_Board/) 的 Wiki 页面。
:::

WM1302 模块是一款新一代的 LoRaWAN® 网关模块，采用 mini-PCIe 形式。基于 Semtech® SX1302 基带 LoRaWAN® 芯片，WM1302 为网关产品解锁了更大的长距离无线传输潜力。与之前的 SX1301 和 SX1308 LoRa® 芯片相比，它具有更高的灵敏度、更低的功耗和更低的工作温度。

WM1302 LoRaWAN® 网关模块提供 SPI 和 USB 两种版本，支持 US915 和 EU868 频段，您可以选择包括 EU868、US915、AS923、AS920、AU915、KR920 和 IN865 在内的多种 LoRaWAN® 频率计划。

WM1302 模块已通过 CE、FCC 和 Telec 认证，有助于简化 LoRaWAN® 网关设备的开发和认证流程。

WM1302 专为 M2M 和 IoT 应用设计，可广泛应用于支持 LPWAN 网关的场景。它是开发 LoRa® 网关设备（包括 LoRaWAN® 网关、热点等）的理想选择，可以显著降低技术难度和开发时间。

## 特性

- **由 Semtech® SX1302 基带 LoRa® 芯片驱动**，超低功耗，高性能。
- **采用标准 52 针金手指的 Mini-PCIe 形式**，易于集成到各种网关设备中。
- **超低工作温度**，无需额外散热，减少 LoRaWAN® 网关的体积。
- **高灵敏度**，使用 SX1250 TX/RX 前端，灵敏度低至 -139 dBm @SF12；TX 功率高达 26 dBm @3.3V。
- **通过 CE、FCC 和 TELEC 认证**，简化最终产品认证流程。

## 硬件概览

### 结构图

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/diagram.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/diagram.jpg" alt="pir" width={600} height="auto" /></p>

### 引脚图

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/WM1302_1.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_1.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_2.jpeg" alt="pir" width={600} height="auto" /></p>

## 规格参数

<table class="tg">
<thead>
<tr><th class="tg-4onr">区域</th><th class="tg-ev79">EU868</th><th class="tg-ev79">US915</th></tr>
</thead>
<tbody>
  <tr>
    <td class="tg-4onr">频率</td>
    <td class="tg-f42p">863-870MHz</td>
    <td class="tg-f42p">902-928MHz</td>
  </tr>
  <tr>
    <td class="tg-4onr">灵敏度</td>
    <td class="tg-f42p">-125dBm @125K/SF7<br />-139dBm @125K/SF12</td>
    <td class="tg-f42p">-125dBm @125K/SF7<br />-139dBm @125K/SF12</td>
  </tr>
  <tr>
    <td class="tg-4onr">发射功率</td>
    <td class="tg-f42p">26 dBm (3.3V 电源供电)</td>
    <td class="tg-f42p">25 dBm (3.3V 电源供电)</td>
  </tr>
  <tr>
    <td class="tg-4onr">LED 指示灯</td>
    <td class="tg-f42p" colspan="2">电源：绿色 配置：红色 发送：绿色 接收：蓝色</td>
  </tr>
  <tr>
    <td class="tg-4onr">外形尺寸</td>
    <td class="tg-f42p" colspan="2">Mini PCIe，52 针金手指</td>
  </tr>
  <tr>
    <td class="tg-4onr">功耗 (SPI 版本)</td>
    <td class="tg-f42p" colspan="2">待机：7.5 mA<br />最大发射功率：415 mA<br />接收：40 mA</td>
  </tr>
  <tr>
    <td class="tg-4onr">功耗 (USB 版本)</td>
    <td class="tg-f42p" colspan="2">待机：20 mA<br />最大发射功率：425 mA<br />接收：53 mA</td>
  </tr>
  <tr>
    <td class="tg-4onr">LBT (Listen Before Talk)</td>
    <td class="tg-f42p" colspan="2">支持</td>
  </tr>
  <tr>
    <td class="tg-4onr">天线接口</td>
    <td class="tg-f42p" colspan="2">U.FL</td>
  </tr>
  <tr>
    <td class="tg-4onr">工作温度</td>
    <td class="tg-f42p" colspan="2">-40°C 至 85°C</td>
  </tr>
  <tr>
    <td class="tg-4onr">尺寸</td>
    <td class="tg-f42p" colspan="2">30 mm (宽) × 50.95 mm (长)</td>
  </tr>
  <tr>
    <td class="tg-4onr">认证</td>
    <td class="tg-f42p" colspan="2">CE</td>
  </tr>
</tbody>
</table>

## 应用

- LPWAN 网关设备开发

- 任何远距离无线通信应用开发

- LoRa® 和 LoRaWAN® 应用学习与研究

## 尺寸

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/WM1302_4.jpeg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_4.jpeg" alt="pir" width={600} height="auto" /></p>

## 入门指南

### SPI版本和USB版本的区别

对于 WM1302 LoRaWAN® 网关模块 SPI 版本，Semtech SX1302 和 SX126x 芯片通过同一个 SPI 总线连接到 Raspberry Pi，使用不同的片选（CS）引脚。

对于 WM1302 LoRaWAN® 网关模块 USB 版本，Semtech SX1302 和 SX126x 芯片连接到 STM32L4 MCU，该 MCU 已由工厂编程，将作为 USB 设备工作，充当 Raspberry Pi 和 SX1302/SX126x 之间的桥梁。

### 快速开始使用 WM1302

#### 所需硬件

- WM1302 LoRaWAN® 网关模块

- 带有 40 针 GPIO 接口的 Raspberry Pi 板（例如 Raspberry Pi 4B 或 Raspberry 3B+）

- WM1302 Raspberry Pi 的 Pi Hat

- Raspberry Pi 的电源适配器

- 一个 LoRa® 天线

- 一个 8G 或更大的 SD 卡和一个读卡器

- 如果使用 WM1302 LoRaWAN® 网关模块 USB 版本，则需要一根 Type C USB 数据线

#### 所需软件

- [最新的 Raspberry Pi OS 镜像](https://www.raspberrypi.org/software/operating-systems/)：建议使用 Raspberry Pi OS Lite

- [Balena Etcher](https://www.balena.io/etcher/)：用于将 Raspberry Pi OS 镜像写入 SD 卡

- [putty](https://www.putty.org/)：用于在 Windows 上通过 SSH 连接到 Raspberry Pi

#### 第一步：安装 WM1302 Raspberry Pi Hat 并安装 WM1302 模块

将 Pi Hat 安装到 Raspberry Pi 的 40 针接口非常简单。首先关闭 Raspberry Pi 的电源，将 WM1302 模块插入 Pi Hat，如下图所示并拧紧。

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki1.jpg" alt="pir" width={600} height="auto" /></p>
如果使用的是 USB 版本的 WM1302 模块，请将其 Type C 接口通过 Type C USB 数据线连接到 Raspberry Pi 的 USB 接口。

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki2.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki2.jpg" alt="pir" width={600} height="auto" /></p>

#### 第二步：启用 Raspbian 的 I2C 和 SPI 接口

WM1302 模块通过 SPI 和 I2C 与 Raspberry Pi 通信。但在 Raspbian 中，这两个接口默认未启用，因此开发者需要在使用 WM1302 之前启用它们。这里介绍一种通过命令行启用 SPI 和 I2C 接口的方法。

首先，通过 SSH 登录到 Raspberry Pi 或使用显示器（不要使用串口控制台，因为 Pi Hat 上的 GPS 模块占用了 Pi 的硬件 UART 引脚），然后在命令行中输入 `sudo raspi-config` 打开 Raspberry Pi 软件配置工具：

```shell
sudo raspi-config
```

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki3.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki3.png" alt="pir" width={600} height="auto" /></p>

1. 选择 `Interface Options`

2. 选择 `SPI`，然后选择 `Yes` 启用它

3. 选择 `I2C`，然后选择 `Yes` 启用它

4. 选择 `Serial Port`，然后选择 `No` 对于 "Would you like a login shell..." 并选择 `Yes` 对于 "Would you like the serial port hardware..."

5. 完成后，请重新启动 Raspberry Pi 以确保这些设置生效。

#### 第三步：获取并编译 SX1302 源代码

现在安装 `git` 并从 GitHub 下载 `sx1302_hal`（SX1302 LoRa 网关的库和程序）：

```shell
sudo apt update
sudo apt install -y git
cd ~
git clone https://github.com/Lora-net/sx1302_hal
```

进入 `sx1302_hal` 文件夹并编译所有内容：

```shell
cd ~/sx1302_hal
make
```

#### 第四步：运行 Semtech SX1302 数据包转发器

:::caution 注意
在新的 Linux 内核中，**sysfs 接口**已被 **chardev 接口**取代。

这导致 sx_1302 仓库中提供的 reset_lgw.sh 无法正确重置模块，并输出以下日志：

```shell
...
./reset_lgw.sh: 26: echo: echo: I/O error
./reset_lgw.sh: 27: echo: echo: I/O error
./reset_lgw.sh: 28: echo: echo: I/O error
./reset_lgw.sh: 29: echo: echo: I/O error
./reset_lgw.sh: 32: cannot create /sys/class/gpio/gpio17/direction: Directory nonexistent
./reset_lgw.sh: 33: cannot create /sys/class/gpio/gpio5/direction: Directory nonexistent
./reset_lgw.sh: 34: cannot create /sys/class/gpio/gpio18/direction: Directory nonexistent
./reset_lgw.sh: 35: cannot create /sys/class/gpio/gpio13/direction: Directory nonexistent
CoreCell reset through GPIO17...
SX1261 reset through GPIO17...
CoreCell power enable through GPIO18...
CoreCell ADC reset through GPIO13...
./reset_lgw.sh: 45: cannot create /sys/class/gpio/gpio18/value: Directory nonexistent
./reset_lgw.sh: 47: cannot create /sys/class/gpio/gpio17/value: Directory nonexistent
./reset_lgw.sh: 48: cannot create /sys/class/gpio/gpio17/value: Directory nonexistent
./reset_lgw.sh: 50: cannot create /sys/class/gpio/gpio5/value: Directory nonexistent
./reset_lgw.sh: 51: cannot create /sys/class/gpio/gpio5/value: Directory nonexistent
./reset_lgw.sh: 53: cannot create /sys/class/gpio/gpio13/value: Directory nonexistent
./reset_lgw.sh: 54: cannot create /sys/class/gpio/gpio13/value: Directory nonexistent
...
```

要确定运行的系统是否仍具有 **sysfs 接口**，可以运行以下命令：

```shell
ls /sys/class/gpio
```

:::

**对于具有 sysfs 接口的 Linux：**

如果其中出现一系列 `gpiox` 文件夹，则说明系统内核仍具有 **sysfs 接口**，可以使用上述脚本重置模块。

使用文本编辑器 `nano` 修改 `reset_lgw.sh` 脚本中的 SX1302 和 SX1261 的 `reset pin`：

```shell
nano tools/reset_lgw.sh
```

在文本编辑器的开头显示以下代码：

```shell

#

SX1302_RESET_PIN=23     # SX1302 reset
SX1302_POWER_EN_PIN=18  # SX1302 power enable
SX1261_RESET_PIN=22     # SX1261 reset (LBT / Spectral Scan)
AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

使用导航键移动光标，将 `SX1302_RESET_PIN=23` 更改为 `SX1302_RESET_PIN=17`，并将 `SX1261_RESET_PIN=22` 更改为 `SX1261_RESET_PIN=5`，如下所示：

```shell
# GPIO 映射需要根据硬件进行调整
#

SX1302_RESET_PIN=17     # SX1302 复位
SX1302_POWER_EN_PIN=18  # SX1302 电源启用
SX1261_RESET_PIN=5      # SX1261 复位 (LBT / 频谱扫描)
AD5338R_RESET_PIN=13    # AD5338R 复位 (全双工 CN490 参考设计)
```

通过按下 `CTRL + x` 保存这些更改，然后按 `y`，最后按下 `Enter` 关闭文本编辑器。

**对于没有 sysfs 接口的 Linux：**

如果其中没有名为 `gpiox` 的文件夹，则需要使用 **Libgpiod 包** 调用 GPIO。

使用 Libgpiod 包控制 GPIO 的 reset_lgw.sh 脚本如下：

<details>
<summary>reset_lgw.sh</summary>

```shell
SX1302_RESET_PIN=17     # SX1302 复位
SX1302_POWER_EN_PIN=18  # SX1302 电源启用
SX1261_RESET_PIN=5      # SX1261 复位 (LBT / 频谱扫描)


WAIT_GPIO() {
    sleep 0.1
}

reset() {
    echo "通过 GPIO$SX1302_RESET_PIN 重置 CoreCell..."
    echo "通过 GPIO$SX1261_RESET_PIN 重置 SX1261..."
    echo "通过 GPIO$SX1302_POWER_EN_PIN 启用 CoreCell 电源..."

    # 为 SX1302 CoreCell 电源启用和复位写入输出
    gpioset gpiochip0 $SX1302_POWER_EN_PIN=1; WAIT_GPIO
    
    gpioset gpiochip0 $SX1302_RESET_PIN=1; WAIT_GPIO
    gpioset gpiochip0 $SX1302_RESET_PIN=0; WAIT_GPIO

    gpioset gpiochip0 $SX1261_RESET_PIN=0; WAIT_GPIO
    gpioset gpiochip0 $SX1261_RESET_PIN=1; WAIT_GPIO
}

case "$1" in
    start)
    reset
    ;;
    stop)
    reset
    ;;
    *)
    echo "用法: $0 {start|stop}"
    exit 1
    ;;
esac

exit 0
```

</details>

将 `reset_lgw.sh` 复制到 `packet_forwarder` 文件夹，然后运行 `lora_pkt_fwd`。请注意，您应该根据所使用的模块选择一个 `global_conf.json.sx1250.xxxx` 配置文件：

```shell
cp tools/reset_lgw.sh packet_forwarder/
cd packet_forwarder

# 请根据您的模块选择以下命令之一
# 对于 WM1302 LoRaWAN 网关模块 (SPI) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868

# 对于 WM1302 LoRaWAN 网关模块 (USB) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB

# 对于 WM1302 LoRaWAN 网关模块 (SPI) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915

# 对于 WM1302 LoRaWAN 网关模块 (USB) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB
```

现在，packet forwarder 可以正常运行。但如果开发者需要将 LoRa® 数据包转发到他们的 LoRa® 服务器（例如 TTN 或 chirpstack），仍需进行一些操作。

为了实现这一目标，开发者必须首先将 Raspberry Pi 网关添加到 LoRa 服务器。以 [TTNv3](https://www.thethingsindustries.com/docs/getting-started/) 为例，登录 [TTNv3 控制台](https://eu1.cloud.thethings.network/console)，点击 `Go to gateways` 并点击 `Add gateway`，在 `Add gateway` 页面中，您会看到需要填写的多个设置。您需要关注的是 `Gateway EUI`、`Gateway Server address` 和 `Frequency plan`，其他设置保持默认即可。

- `Gateway EUI`：网关的 64 位扩展唯一标识符，我们在此 wiki 中将其设置为 `AA555A0000000000`

- `Gateway Server address`：网关将连接的服务器地址，将其复制到剪贴板，开发者稍后需要将其保存到配置文件中

- `Frequency plan`：如果使用 EU868 模块，请选择 `Europe 863-870 MHz (SF9 for RX2)`；如果使用 US915 模块，请选择 `United States 902-928 MHz, FSB 2`
<!-- 
![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki4.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki4.png" alt="pir" width={600} height="auto" /></p>
添加网关后，返回 Raspberry Pi，按 `CTRL + c` 停止 `lora_pkt_fwd`，然后使用文本编辑器 `nano` 编辑刚才使用的 `global_conf.json.sx1250.xxxx` 配置文件：

```shell
# 请根据您的模块选择以下命令之一
# 对于 WM1302 LoRaWAN 网关模块 (SPI) - EU868
nano global_conf.json.sx1250.EU868

# 对于 WM1302 LoRaWAN 网关模块 (USB) - EU868
nano global_conf.json.sx1250.EU868.USB

# 对于 WM1302 LoRaWAN 网关模块 (SPI) - US915
nano global_conf.json.sx1250.US915

# 对于 WM1302 LoRaWAN 网关模块 (USB) - US915
nano global_conf.json.sx1250.US915.USB
```

基本上，您需要修改以下参数：`"gateway_ID" "server_address" "serv_port_up" "serv_port_down"`，这些参数可以在配置文件的尾部找到。将 `Gateway Server address` 复制到 `"server_address"`，将 `"serv_port_up"` 和 `"serv_port_down"` 更改为 `1700`，这些参数应编辑如下：

```json
"gateway_conf": {
    "gateway_ID": "AA555A0000000000",
    /* 使用默认服务器地址/端口进行更改 */
    "server_address": "eu1.cloud.thethings.network",
    "serv_port_up": 1700,
    "serv_port_down": 1700,
```

通过按下 `CTRL + x` 保存这些更改，然后按 `y`，最后按下 `Enter` 关闭文本编辑器。

重新启动 `lora_pkt_fwd`，您会发现您的 Raspberry Pi 网关已连接到 TTNv3。

```shell
# 请根据您的模块选择以下命令之一
# 对于 WM1302 LoRaWAN 网关模块 (SPI) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868

# 对于 WM1302 LoRaWAN 网关模块 (USB) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB

# 对于 WM1302 LoRaWAN 网关模块 (SPI) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915

# 对于 WM1302 LoRaWAN 网关模块 (USB) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB
```

## 参考资料

- [Semtech SX1302 数据手册](https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/2R000000Hkyg/U8CIV3e9yI9T_aILFMxuzLNs_6_0Io1WIaksrNYyCMQ)

## 证书

- [WM1302(USB) CE 证书](https://files.seeedstudio.com/products/114992549/SHEA587_EU_Cert.pdf)
- [WM1302(SPI) CE 证书](https://files.seeedstudio.com/products/114992549/SHEA588_EU_Cert.pdf)

## 技术支持与产品讨论

请将任何技术问题提交到我们的 [论坛](http://forum.seeedstudio.com/)。

感谢您选择我们的产品！我们提供多种支持方式，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>