---
description: 使用 XIAO ESP32C3 访问 ESPHome
title: XIAO ESP32C3 通过 ESPHome 服务访问 Home Assistant
keywords:
- ESPHome
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao-esp32c3-esphome
last_update:
  date: 05/15/2025
  author: Citric
---

# XIAO ESP32C3 通过 ESPHome 服务访问 Home Assistant

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/78.jpg" style={{width:700, height:'auto'}}/></div>

本文将指导您在自己的 Home Assistant 环境中安装 ESPHome 服务。通过使用 XIAO ESP32C3 的 WiFi 功能，您可以非常顺畅地将 XIAO 连接到 Home Assistant，作为您家庭终端的一部分。

此外，我们将结合最流行的 24GHz 毫米波人体静态存在模块 Lite，构建一个基于 Home Assistant 的人体存在检测功能。

## 开始

:::tip
截至 2023 年 7 月 31 日，之前导致雷达完全失效的问题现已修复，因此请更新库文件和配置器，以确保本教程能够正常运行。
:::

如果您希望完整地跟随本教程，您需要准备以下物品。

<table align="center">
  <tbody><tr>
      <th>XIAO ESP32C3</th>
      <th>24GHz 毫米波人体静态<br />存在模块 Lite</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/0.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

本项目的最终目标是将 24GHz 毫米波人体静态存在模块 Lite 部署到 Home Assistant 中。

我们已经为 24GHz 毫米波人体静态存在模块 Lite 编写了完整的配置文件和库，以便您能够快速部署传感器到 Home Assistant。

本教程的内容将主要涵盖以下步骤：

1. [选择您的 Home Assistant 环境](#select-your-home-assistant-environment)
2. [在 Home Assistant 中安装和配置 ESPHome](#install-and-configure-esphome-in-home-assistant)
3. [配置 XIAO ESP32C3 和 ESPHome 的连接](#configure-the-xiao-esp32c3-and-esphome-connection)
4. [配置 Home Assistant 面板](#configure-home-assistant-panel)

当然，如果您对 XIAO ESP32C3 如何在 Home Assistant 中使用 Grove 感兴趣，可以直接阅读这一章节。

- [使用 XIAO ESP32C3 将 Grove 连接到 Home Assistant](#connect-grove-to-home-assistant-using-xiao-esp32c3)

## 选择您的 Home Assistant 环境

在本教程中，我们不会详细说明如何安装 Home Assistant 环境，我们假设您已经有一个正常运行的 Home Assistant 设备。

如果您希望了解如何安装 Home Assistant，可以参考 [官方教程](https://www.home-assistant.io/installation/)。我们强烈建议您使用 x86 设备安装 Home Assistant，因为这是安装 Supervised Home Assistant 最用户友好的方式。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/77.png" /></div>

根据上表，安装 **Home Assistant OS** 和 **Home Assistant Supervised** 是最合适的选择，这将为您省去许多麻烦。如果您在 Docker 上运行 Home Assistant，并使用 OpenWRT（例如使用 LinkStar H68K），请放心，我们也会为您提供详细的参考资料。

我们还编写了关于如何为一些 Seeed Studio 产品安装 Home Assistant 的教程，请参考以下内容：

- [在 ODYSSEY-X86 上开始使用 Home Assistant](https://wiki.seeedstudio.com/ODYSSEY-X86-Home-Assistant/)
- [在 reTerminal 上开始使用 Home Assistant](https://wiki.seeedstudio.com/reTerminal_Home_Assistant/)
- [在 LinkStar H68K/reRouter CM4 上开始使用 Home Assistant](https://wiki.seeedstudio.com/h68k-ha-esphome/)

## 在 Home Assistant 中安装 ESPHome

### 第一步：安装 ESPHome

- **场景 1：在 Home Assistant OS 下安装 ESPHome（通过 Add-on Store）**

如果您安装了 Home Assistant OS，它包含一个 Add-on Store，这使得安装 ESPHome 更加简单。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/79.png" /></div>

在 Add-on Store 中，您可以搜索并安装 ESPHome。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/80.png" /></div>

- **场景 2：在 OpenWRT Docker/Docker 下的 Home Assistant 中安装 ESPHome（没有 Add-on Store）**

由于我们安装的是 Home Assistant Container，无法通过 Add-on Store 简单地下载 ESPHome 服务，因此需要采取折衷方法。

我们需要下载 ESPHome 镜像。

```
esphome/esphome:latest
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/17.png" /></div>

在创建容器的页面上，我们需要进行一些简单的设置：
- 容器名称：您的容器名称
- Docker 镜像：选择刚刚下载的 **esphome** 镜像
- 网络：选择 **host** 模式
- 环境变量(-e)：您的环境变量

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/18.png" /></div>

填写完上述内容后，保存并应用。您将看到容器已被创建。您还需要启动它。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/19.png" /></div>

为了实现与在 Home Assistant 中下载 ESPHome 相同的效果，我们需要修改 Home Assistant 下的配置文件。

进入 Home Assistant 容器。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/55.png" /></div>

我们进入 Home Assistant 的终端。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/56.png" /></div>

在终端中输入以下命令。

```sh
vi configuration.yaml
```

在 `configuration.yaml` 的末尾添加以下内容。

```
# Example configuration.yaml entry
panel_iframe:
  esphome:
    title: "ESPHome"
    url: "http://192.168.100.1:6052"
    icon: mdi:chip
```

通过在 Home Assistant 容器的 shell 中输入 ```exit``` 退出 docker 容器。完成后，重新启动 Home Assistant 容器。

创建一个新的浏览器页面，输入地址 `http://homeassistant:8123/` 并登录您的 Home Assistant 账户，您将在左侧工具栏中看到 ESPHome。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/57.png" /></div>

## 配置 XIAO ESP32C3 和 ESPHome 的连接

### 第 2 步：硬件准备

本教程的目标是能够在 Home Assistant 仪表板中看到 24GHz 毫米波人体静态存在模块 Lite 的数据信息。

通过主板将设备连接到计算机。接线图如下表所示。

<div class="table-center">
<table align="center">
  <tbody>
    <tr>
      <td colspan="3"><div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/esphome-pinconnect.png" /></div></td>
    </tr>
    <tr>
      <td align="center">XIAO ESP32C3</td>
      <td align="center" />
      <td align="center">24GHz 毫米波人体静态<br />存在模块 Lite</td>
    </tr>
    <tr>
      <td align="center">5V</td>
      <td align="center">--&gt;</td>
      <td align="center">5V</td>
    </tr>
    <tr>
      <td align="center">GND</td>
      <td align="center">--&gt;</td>
      <td align="center">GND</td>
    </tr>
    <tr>
      <td align="center">D2</td>
      <td align="center">--&gt;</td>
      <td align="center">RX</td>
    </tr>
    <tr>
      <td align="center">D3</td>
      <td align="center">--&gt;</td>
      <td align="center">TX</td>
    </tr>
  </tbody></table>
</div>

### 第 3 步：确保 XIAO ESP32C3 和 Home Assistant 在同一局域网中

我相信您的 Home Assistant 已经完成了联网工作，例如通过网线连接到您的设备。接下来您只需要开启一个本地网络（例如 WiFi），以便 XIAO ESP32C3 也可以连接到该网络。

以下我将以 LinkStar H68K 为例。我的目标是让 XIAO 连接到 LinkStar H68K 的热点。

在 OpenWRT 的 **Network** 标签下，选择 **Wireless** --> **ADD**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/58.png" /></div>

在 **Device Configuration** 中的 **Transmit Power**，选择 **auto**。

在 **Interface Configuration** 设置中，请按照以下说明填写。

- General Setup
    - Mode: 取决于 LinkStar 如何接入互联网。如果您使用的是有线连接，则选择 **Client**；如果您通过 WiFi 连接，则选择 **Access Point**。
    - ESSID: 输入您的 WiFi 名称，请尽量不要包含空格或特殊字符。
    - Network: 勾选 **lan**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/23.png" /></div>

- Wireless Security
    - Encryption: WPA2-PSK
    - Key: 输入您希望设置的 WiFi 密码。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/24.png" /></div>

填写完上述信息后，点击右下角的 **Save and Apply**，并等待片刻，LinkStar 将开启一个热点。

当没有设备连接到该热点时，它将显示为无信号。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/60.png" /></div>

综上所述，让我们返回到 Home Assistant 页面。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/61.png" /></div>

点击 **NEW DEVICE**。然后点击 **Continue**。

在弹出的新窗口中，请输入您希望设置的应用程序名称，以及您在 LinkStar 中设置的热点名称和密码（或您自己的 WiFi）。确保 XIAO ESP32C3 和 Home Assistant 在 **同一局域网** 中。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/25.png" /></div>

然后点击 **Next**。

在设备类型中，请选择 **ESP32-C3**。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/26.png" /></div>

然后点击 **Next**。

<span id="jump1">点击 <strong>Encryption key</strong> 并将其保存在安全的位置，我们将在后续步骤中使用此密钥。</span>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/27.png" /></div>

然后点击 **SKIP**。

### 第 4 步：修改 XIAO ESP32C3 的配置 yaml 文件

接下来，我们点击刚刚创建的设备标签，点击左下角的 **EDIT** 按钮。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/28.png" /></div>

请注意，我们需要对该 yaml 文件进行修改。我们将需要修改的内容分为两个主要部分，分别对应下图中的一和二。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/62.png" /></div>

- 在内容的 **①** 部分，请不要更改设备名称，除非是您已经配置的名称，其他内容请参考以下代码。

```css
# part 1:
substitutions:
  name: "xiao-esp32c3"
  friendly_name: "XIAO ESP32C3"

esphome:
  name: "${name}"
  friendly_name: "${friendly_name}"
  name_add_mac_suffix: true
  project:
    name: "seeedstudio.mmwave_kit"
    version: "2.0"
  platformio_options:
    board_build.flash_mode: dio
    board_build.mcu: esp32c3

external_components:
  - source: github://limengdu/mmwave-kit-external-components@main
    refresh: 0s

esp32:
  board: esp32-c3-devkitm-1
  variant: esp32c3
  framework:
    type: esp-idf

# 启用日志记录
logger:
  hardware_uart: USB_SERIAL_JTAG
  level: DEBUG
```

- 在内容的 **②** 部分，请在 `captive_portal:` 之后复制以下代码。

<details>

<summary>点击此处预览完整代码</summary>

```yml
# 设置 Bluetooth LE（仅适用于 ESP32），允许用户向设备配置 Wi-Fi 凭据。
esp32_improv:
  authorizer: none

# 设置通过串口客户端的 improv，用于 Wi-Fi 配置。
# 如果您的设备有 USB 端口，用户可以在首次使用时添加凭据。
# improv_serial: # 暂时注释，直到 improv 在 idf 上支持 usb-jtag

uart:
  id: uart_bus
  baud_rate: 115200
  rx_pin: 4
  tx_pin: 5
  parity: NONE
  stop_bits: 1

seeed_mr24hpc1:
  id: my_seeed_mr24hpc1

text_sensor:
  - platform: seeed_mr24hpc1
    heart_beat:
      name: "心跳"
    product_model:
      name: "产品型号"
    product_id:
      name: "产品 ID"
    hardware_model:
      name: "硬件型号"
    hardware_version:
      name: "硬件版本"
    keep_away:
      name: "主动报告接近状态"
    motion_status:
      name: "运动信息"
    custom_mode_end:
      name: "自定义模式状态"

binary_sensor:
  - platform: seeed_mr24hpc1
    has_target:
      name: "存在信息"

sensor:
  - platform: seeed_mr24hpc1
    custom_presence_of_detection:
      name: "静态距离"
    movement_signs:
      name: "身体运动参数"
    custom_motion_distance:
      name: "运动距离"
    custom_spatial_static_value:
      name: "存在能量"
    custom_spatial_motion_value:
      name: "运动能量"
    custom_motion_speed:
      name: "运动速度"
    custom_mode_num:
      name: "当前自定义模式"

switch:
  - platform: seeed_mr24hpc1
    underlying_open_function:
      name: "底层开放功能信息输出开关"

button:
  - platform: seeed_mr24hpc1
    restart:
      name: "模块重启"
    custom_set_end:
      name: "自定义模式设置结束"

select:
  - platform: seeed_mr24hpc1
    scene_mode:
      name: "场景"
    unman_time:
      name: "进入无人状态时间（标准功能）"
    existence_boundary:
      name: "存在边界"
    motion_boundary:
      name: "运动边界"

number:
  - platform: seeed_mr24hpc1
    sensitivity:
      name: "灵敏度"
    custom_mode:
      name: "自定义模式"
    existence_threshold:
      name: "存在能量阈值"
    motion_threshold:
      name: "运动能量阈值"
    motion_trigger:
      name: "运动触发时间"
    motion_to_rest:
      name: "运动到静止时间"
    custom_unman_time:
      name: "进入无人状态时间（底层开放功能）"
```

</details>

然后，请点击右上角的 **保存** 按钮。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/63.png" /></div>

### 步骤 5. 将固件上传到 XIAO ESP32C3

- **方法 1：直接编译并上传**

如果您使用的是 x86 设备，并且可以在设备端口中看到 XIAO，那么您可以将程序编译并上传到 XIAO。

将 XIAO 连接到您的设备。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ESPHome/49.png" style={{width:700, height:'auto'}}/></div>

点击设备栏右下角的三个点，然后选择 **安装**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/84.png" /></div>

点击 **插入运行 ESPHome Dashboard 的计算机**。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/85.png" /></div>

选择已连接的端口。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ESPHome/18.png" /></div>

现在，它将下载所有必要的板包，并将 ESPHome 固件刷入 XIAO ESP32C3。如果刷写成功，您将看到以下输出。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/ESPHome/19.png" /></div>

如果在将 XIAO 连接到您的设备后无法找到端口，您可以尝试使用第二种方法。

- **方法 2：通过主机上传已编译的固件**

像 LinkStar H68K 这样的软路由不支持识别外部 MCU 设备，我们需要先下载已编译的固件，然后通过另一台 PC 上传固件。

点击右上角的 **安装** 按钮。然后选择最后一项 **手动下载**。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/30.png" /></div>

选择 **现代格式**。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/31.png" /></div>

然后将花费较长时间下载和编译，请耐心等待。一旦一切准备就绪，固件将自动下载到您的计算机。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/33.png" /></div>

要将固件上传到 XIAO ESP32C3，有几种选择，这里展示两种方法：

- 选项 1：使用 [ESPHome Web 工具](https://web.esphome.io/?dashboard_install) 上传。

确保您安装了正确的驱动程序。以下是常用 ESP 设备芯片的驱动程序：

1. CP2102 驱动程序：[Windows & Mac](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)

2. CH342, CH343, CH9102 驱动程序：[Windows](https://www.wch.cn/downloads/CH343SER_ZIP.html)，[Mac](https://www.wch.cn/downloads/CH34XSER_MAC_ZIP.html)

3. CH340, CH341 驱动程序：[Windows](https://www.wch.cn/downloads/CH341SER_ZIP.html)，[Mac](https://www.wch.cn/downloads/CH341SER_MAC_ZIP.html)

打开 [ESPhome Web 工具](https://web.esphome.io/?dashboard_install)，请使用 Chrome 或 Edge 浏览器。

点击 **CONNECT**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/34.png" /></div>

在弹出窗口中选择 XIAO ESP32 的串口。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/64.png" /></div>

点击 **INSTALL**，然后选择从上述步骤下载的 `.bin` 文件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/35.png" /></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/38.png" /></div>

- 选项 2：使用 [esphome-flasher 工具](https://github.com/esphome/esphome-flasher)。

如果安装驱动程序并更换浏览器后仍无法使用方法一上传固件，那么可以尝试使用方法二。请参考官方教程获取具体的安装方法和说明。

:::tip
如果您希望查看 XIAO ESP32C3 的日志信息，也可以通过此软件的 View Logs 按钮进行查看。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/41.png" /></div>
:::

上传完成后，您可以断开 XIAO ESP32C3 与 PC 的连接（除非您需要查看日志），并单独为 XIAO 供电。

如果一切正常，XIAO ESP32C3 将搜索并连接到您为其设置的 WiFi。

就像我一样，我使用 LinkStar H68K 的网络。您可以在网络选项中找到它，并查看 LinkStar H68K 为其分配的 IP 地址。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/42.png" /></div>

通常，此时在 Home Assistant 中，设备的状态也会从离线变为在线。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/65.png" /></div>

## 配置 Home Assistant 面板

### 第 6 步：连接到 XIAO ESP32C3

如果您的局域网中没有很多 Home Assistant 设备，Home Assistant 可以自动搜索并将您的 ESP 设备添加到设备选项卡中。您可以在 **Settings** 的 **Devices & Services** 选项卡中看到此设备。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/66.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/67.png" /></div>

如果没有自动搜索，您也可以基于其 IP 地址连接到 XIAO ESP32C3。

点击 **ADD INTEGRATION** 并搜索 **esphome**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/43.png" /></div>

然后输入 XIAO ESP32C3 的 IP 地址及端口号 **6053**，然后点击 **SUBMIT**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/44.png" /></div>

如果输入的 IP 地址和端口号正确，您将看到要求输入加密密钥的提示，这是我们在 [第 4 步](#jump1) 中要求保存的密钥。

然后点击 **SUBMIT**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/68.png" /></div>

至此，添加设备的步骤已成功完成。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/51.png" /></div>

### 第 7 步：24GHz 毫米波模块 Lite 功能概览

为了帮助您快速了解套件的全部功能及这些功能的使用，您需要仔细阅读本节内容。如果您需要更详细的信息，我们建议您花时间阅读 [产品用户手册](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V1.5.pdf)。

关于仪表板的配置和参数的详细信息，我们在 ESPHome Docs 中编写了详细的说明，请移步阅读完整的内容和细节。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://deploy-preview-3383--esphome.netlify.app/components/sensor/seeed_mr24hpc1">
            <strong><span><font color={'FFFFFF'} size={"4"}>ESPHome Docs 📕</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/49.png" style={{width:700, height:'auto'}}/></div>

### 第 8 步：配置 Home Assistant 面板

如果您发现默认卡片非常单调且不适合呈现数据，Home Assistant 提供了多种现成的仪表板供您选择。

您可以根据自己的喜好制作自己的仪表板。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/73.png" /></div>

例如，将信息输出选项变成一个漂亮的开关。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/74.png" /></div>

将人体运动速度变成一个可视化的仪表板显示。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/75.png" /></div>

这是我设计的样式，看起来像是一个智能家居控制中心的雏形。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/76.png" /></div>

到目前为止，我们的教程内容已经圆满结束。

## 使用 XIAO ESP32C3 将 Grove 连接到 Home Assistant

当然，XIAO ESP32C3 的功能不仅限于在 Home Assistant 中支持 24GHz 毫米波人体静态存在模块 Lite，您可以在本文档中找到更多适合您使用的教程。

- [将 Grove 连接到 Home Assistant 使用 XIAO ESP32C3](https://wiki.seeedstudio.com/Connect-Grove-to-Home-Assistant-ESPHome/)

激发您的创造力！

## 故障排查

### FAQ1: 在使用 ESPhome Web 工具上传固件时出现以下错误，我该如何解决？

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/37.png" /></div>

> 答：如果在上传时出现此提示，请断开 XIAO ESP32C3 与 PC 的连接。然后，按住 BOOT 按钮，在按住 BOOT 按钮的同时将开发板连接到您的 PC，然后松开按钮以进入引导模式。此时，只需重新连接并再次上传固件即可。

### FAQ2: 按照 esphome flasher 的教程在 Linux 下无法安装 esphome flasher？

> 答：在执行以下命令时，您需要选择您的系统版本，否则会报错。例如，我的电脑是 Ubuntu 22.04，那么应该执行的命令如下：

```
sudo apt install python3

pip3 install -U \
    -f https://extras.wxpython.org/wxPython4/extras/linux/gtk3/ubuntu-22.04/ \
    wxPython

pip3 install esphomeflasher
```

### FAQ3: 我填写了正确的 WiFi 和密码，为什么看不到 XIAO ESP32C3 的 IP 地址？

> 答：当您遇到此问题时，请检查 XIAO ESP32C3 的天线是否已正确连接。如果天线已经连接，请确保 XIAO 尽可能不超过 3 米远离 LinkStar（除非您更换了更强大的天线）。  
如果仍然看不到 XIAO，您可以使用 [esphome flasher](https://github.com/esphome/esphome-flasher) 软件检查 XIAO 的日志信息，并通过日志检查 XIAO 的连接情况。  
您可以重新插拔 XIAO 以尝试重新搜索 WiFi 并重新连接。

<!-- ### FAQ4: 我的 XIAO ESP32C3 已连接到网络，但为什么看不到传感器数据刷新？

:::caution
截至 2023 年 6 月 1 日的故障排查显示，如果您在 ESPHome 的仪表板中设置任何值或更改任何场景，可能会导致雷达停止工作。

截至 2023 年 7 月 31 日，之前会导致雷达完全失效的问题现已修复，因此请更新库文件和配置器以使本教程正常运行。
:::

> 答：在之前的 Wiki 内容中，我们使用默认的 UART 引脚（D6、D7）接收和发送雷达数据，但许多用户反馈需要重新上电雷达才能工作。对此，我们**更新了 Wiki** 内容和步骤，将雷达的串口替换为 **D2 和 D3**，经过测试，这很好地解决了问题。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/esphome-pinconnect.png" style={{width:600, height:'auto'}}/></div>

> **如果您没有注意到 Wiki 更新，建议您重新连接雷达并按照本教程的[步骤 2 和步骤 5](#configure-the-xiao-esp32c3-and-esphome-connection) 重新编译和上传过程。**

> 然而，一些用户反馈即使更换了串口引脚，雷达仍然无法正常工作。因此，我们提出以下方法和步骤来检查问题出在哪里。如果您仍然无法解决雷达工作的问题，**请将您的操作步骤提供给技术支持邮箱**，这将加快售后问题的处理速度。

**请按以下排除顺序检查。**

> **排除 1：确保 XIAO ESP32C3 与 ESPHome 部署设备处于同一局域网中。**

> 如果 XIAO ESP32C3 不在与 ESPHome 设备相同的局域网中，您在 Home Assistant 中看到的日志是不完整的，无法作为数据收集的依据。因此，请仔细检查路由器，查看是否出现了 XIAO 的 IP 地址。

> **排除 2：检查数据实时传输按钮是否开启。**

> 当 XIAO 上网并成功添加设备后，您将能够在仪表板中看到雷达组件。请注意，默认情况下实时数据传输按钮是关闭的，您需要将其打开才能看到雷达数据被持续报告。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/69.png" /></div>

> **排除 3：检查雷达是否能正常工作。**

> 我们需要确保雷达与 XIAO ESP32C3 配合良好，这将帮助我们快速判断问题是出在 ESPHome 还是产品本身。请在 Arduino IDE 中将以下代码上传到 XIAO ESP32C3，请注意，雷达的 **RX/TX 引脚应连接到 XIAO 的 D2/D3**。

```cpp
#include "Arduino.h"
#include <humanstaticLite.h>
#include <HardwareSerial.h>

// can also try hardware serial with
HumanStaticLite radar = HumanStaticLite(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200, SERIAL_8N1, 4, 5);
  while(!Serial);   //When the serial port is opened, the program starts to execute.
  Serial.println("Ready");
}

void loop() {
  // put your main code here, to run repeatedly:
  radar.recvRadarBytes();           //Receive radar data and start processing
  radar.showData();                 //Serial port prints a set of received data frames
  delay(200);                       //Add time delay to avoid program jam
}
```

> 打开串口监视器并将波特率设置为 115200，如果雷达工作正常，您应该会看到大量数字被打印出来。

> 如果在执行此步骤时没有看到任何数据输出，请根据 Wiki 重新刷新雷达的固件。我们提供两种方式供您更新固件：[固件版本更新](https://wiki.seeedstudio.com/Radar_MR24HPC1/#firmware-version-updates)。

> 如果更新固件后仍然没有任何反应，请不要犹豫，直接联系我们的技术支持团队，并告知您已经完成的所有操作步骤。

> **排除项 4：XIAO 和雷达在上述检查点工作正常，但更换串口引脚后，仍然无法获取雷达的实时数据。**

> 如果您已将雷达的 RX 和 TX 引脚更换为 D2/D3，并且按照上述步骤仔细排查后仍然无法获取实时数据消息，请联系技术支持团队。在此之前，**请告知我们雷达在 Arduino 环境中是否正常工作**，以便我们分析并解决问题。 -->

<!-- > A: 当我们遇到此问题时，需要通过日志了解传感器未返回数据的具体原因。目前已知可能遇到的情况是传感器无响应，其日志可能如下所示。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/71.png" /></div>

> 如果您看到类似的日志，请再次检查以下三个方面：
> 1. 传感器是否供电 5V。
> 2. 传感器的 RX 和 TX 引脚是否连接正确。
> 3. 仅断开传感器到 XIAO 的 5V 线，然后重新连接以重新为传感器供电。

> 通常来说，第三点可以解决此问题。正常的数据传输日志流程应如下所示。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/72.png" /></div> -->

### FAQ4: 我使用 Jlink 刷写固件时，出现错误 "Programming of range @address 0x08000000 failed (block verification error) Program failed Failed to program and verify target"，该怎么办？

当您使用 Jlink 刷写固件时出现此错误，可能是以下情况之一：

1. 您的传感器完全无法正常工作，且无法接收任何消息。
2. 您尝试使用了无效或错误的固件。

:::caution
如果您的雷达原本工作正常，请再次确认您使用的是正确的固件！不同雷达和传感器型号使用的固件可能不同！通过 UART 升级固件与通过 Jlink 升级固件的方式也不同！请停止继续以下步骤。
:::

<details>

<summary><strong>我已确认我的产品在异常情况下会出现此错误消息</strong></summary>

如果您的雷达完全无法工作，那么出现此错误消息可能是正常的。

由于雷达的异常操作可能触发了读/写保护机制，通常情况下用户将无法继续对产品进行刷写操作，因此我们需要解锁雷达的读/写保护机制。

由于解除读/写保护存在较高风险，我们不会在此公开解除读/写保护的方法。需要此方法的用户可以在[此处下载](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/ArteryICPProgrammer_V2.4.23.zip)的压缩文件中找到相关内容。一旦异常雷达解除保护后，即可再次更新固件以恢复正常运行。

</details>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同用户的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>