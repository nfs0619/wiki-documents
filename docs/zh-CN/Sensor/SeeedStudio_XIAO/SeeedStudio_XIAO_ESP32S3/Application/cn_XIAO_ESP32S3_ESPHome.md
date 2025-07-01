---
description: ESPHome 支持 Seeed Studio XIAO ESP32S3
title: ESPHome 支持 Seeed Studio XIAO ESP32S3
keywords:
- ESPHome
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/XIAO_ESP32S3_esphome
last_update:
  date: 05/15/2025
  author: Zachay-NAU
---

# XIAO ESP32S3 通过 ESPHome 连接 Home Assistant（支持所有端口）

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

本 Wiki 将逐步指导如何将 [Seeed Studio XIAO ESP32S3](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/) 与运行在 Home Assistant 上的 ESPHome 连接，并在连接 Grove 模块到 XIAO ESP32S3 后发送传感器数据/控制设备。让我们开始吧！

## 什么是 ESPHome 和 Home Assistant？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/2.png" style={{width:600, height:'auto'}}/></div>
<br />

[ESPHome](https://esphome.io/) 是一个旨在让管理 ESP 板尽可能简单的工具。它读取 YAML 配置文件并创建自定义固件，然后将其安装到 ESP 设备上。在 ESPHome 配置中添加的设备或传感器会自动显示在 Home Assistant 的用户界面中。ESPHome 可以帮助您连接并将数据发送到 Home Assistant 设备。

## 硬件准备

如果您希望完整地按照本教程操作，您需要准备以下物品。

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32S3 Sense</th>
      <th>Seeed Studio 扩展板</th>
      <th>Home Assistant 设备</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Home-Assistant/1.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://wiki.seeedstudio.com/home_assistant_topic/#-devices-for-home-assistant-">
            <strong><span><font color={'FFFFFF'} size={"4"}> 查看更多 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

#### 使用的传感器

- [Grove - 温湿度传感器 (BME680)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html)<br />
- [Grove - 智能空气质量传感器 (SGP41)](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html)<br />
- [6x10 RGB 矩阵模块适配 XIAO](https://www.seeedstudio.com/6x10-RGB-MATRIX-for-XIAO-p-5771.html#)

## 软件准备

### 安装 Home Assistant

确保您已经安装并运行 Home Assistant。您可以参考 [此 Wiki](https://wiki.seeedstudio.com/ODYSSEY-X86-Home-Assistant) 了解如何在 ODYSSEY-X86 SBC 上安装 Home Assistant 的分步指南，或者参考 [此链接](https://www.mbreviews.com/how-to-home-assistant-seeed-mini-router/) 了解如何在 Seeed Mini Router 上使用 Home Assistant 的详细说明。

### 在 Home Assistant 上安装 ESPHome

ESPHome 可作为 **Home Assistant 插件**，可以通过插件商店简单安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/1.png" style={{width:900, height:'auto'}}/></div>

- **步骤 1.** 点击 **INSTALL**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/2.png" style={{width:900, height:'auto'}}/></div>

- **步骤 2.** 启用所有选项并点击 **START**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/3.png" style={{width:900, height:'auto'}}/></div>

<br />
如果 ESPHome 成功加载，您将看到以下窗口：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/4.png" style={{width:900, height:'auto'}}/></div>

## 入门指南

当所有软件和硬件都准备就绪后，我们就可以开始了。

### 1. 将 Seeed Studio XIAO ESP32S3 (Sense) 添加到 ESPHome

- **步骤 1.** 点击 **+ NEW DEVICE**

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/10.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/5.png" style={{width:900, height:'auto'}}/></div>

- **步骤 2.** 点击 **CONTINUE**

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/11.png" width="300"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/6.png" style={{width:900, height:'auto'}}/></div>

- **步骤 3.** 输入设备的 **Name**，并输入 WiFi 凭据，例如 **Network name** 和 **Password**。然后点击 **NEXT**

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/12.png" width="300"> 1.png-->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/1.png" style={{width:400, height:'auto'}}/></div>

- **步骤 4.** 选择 **ESP32-S3** 并点击

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/13.png" width="300"> 2.png-->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/2.png" style={{width:400, height:'auto'}}/></div>

- **步骤 5.** 点击 **SKIP**，因为我们将手动配置此板

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/14.png" width="300"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/14.png" style={{width:400, height:'auto'}}/></div>

- **步骤 6.** 点击新创建的板下的 **EDIT**

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/15.png" width="300"> 3.png-->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/3.png" style={{width:400, height:'auto'}}/></div>

- **步骤 7.** 这将打开一个 **YAML** 文件，此文件将用于设置所有板配置。按照以下内容编辑 **esp32** 下的内容：

```
esphome:
  name: esp32s3
  platformio_options:
    build_flags: -DBOARD_HAS_PSRAM
    board_build.arduino.memory_type: qio_opi
    board_build.f_flash: 80000000L
    board_build.flash_mode: qio 

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:

ota:

wifi:
  ssid: "your wifi name"
  password: "your password"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32s3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

```

**注意：** 我们这里使用的是最新版本的 [Arduino core](https://github.com/espressif/arduino-esp32/releases) for ESP32 和 [ESP32 support for PlatformIO](https://github.com/platformio/platform-espressif32/releases)。

- **步骤 8.** 点击 **SAVE**，然后点击 **INSTALL**

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/16.png" width="700"> 4.png-->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/4.png" style={{width:900, height:'auto'}}/></div>

- **步骤 9.** 将 USB Type-C 数据线的一端连接到 Seeed Studio XIAO ESP32S3，另一端连接到 reRouter CM4 1432 的 USB 端口之一

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/17.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/17.png" style={{width:900, height:'auto'}}/></div>

- **步骤 10.** 点击 **Plug into the computer running ESPHome Dashboard**

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/18.png" width="300"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/5.png" style={{width:900, height:'auto'}}/></div>

- **步骤 11.** 选择已连接的端口。它可能是 ```/dev/ttyACM1```，因为 ```/dev/ttyACM0``` 已连接到 reRouter CM4 1432

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/19.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/6.png" style={{width:900, height:'auto'}}/></div>

:::tip
建议使用 2.4GHz Wi-Fi
:::

现在它将下载所有必要的板包，并将 ESPHome 固件刷入 XIAO ESP32S3。如果刷写成功，您将看到以下输出。如果出现错误，请尝试重启您的 XIAO ESP32S3 或通过按住 BOOT 按钮并连接 XIAO ESP32S3 进入引导模式。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/20.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/7.png" style={{width:900, height:'auto'}}/></div>

- **步骤 12.** 上面的窗口显示了来自已连接板的实时日志。通过点击 **STOP** 关闭它。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/21.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/8.png" style={{width:900, height:'auto'}}/></div>

- **步骤 13.** 如果您看到开发板状态为 **ONLINE**，这意味着开发板已成功连接到 WiFi。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/9.png" style={{width:400, height:'auto'}}/></div>

:::提示

现在您可以将 XIAO ESP32S3 从 reRouter CM4 1432 上断开，仅通过 USB 电缆为其供电。这是因为从现在开始，如果您想为 XIAO ESP32S3 刷写固件，可以直接通过 OTA（无线更新）完成，而无需通过 USB 电缆连接到 X86 开发板。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/22.png" width="300"> -->

- 1. 点击 **三点图标**，然后点击 **Install**。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/23.png" width="300"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/10.png" style={{width:400, height:'auto'}}/></div>

- 2. 选择 **Wirelessly**，它将通过无线方式将更改推送到开发板。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/24.png" width="300"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/11.png" style={{width:400, height:'auto'}}/></div>

:::

- **步骤 14.** 转到 **Settings** 并选择 **Devices & Services**。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/25.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/19.png" style={{width:900, height:'auto'}}/></div>

- **步骤 15.** 您将看到 **ESPHome** 作为一个被发现的集成。点击 **CONFIGURE**。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/26.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/12.png" style={{width:900, height:'auto'}}/></div>

- **步骤 16.** 点击 **SUBMIT**。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/27.png" width="300"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/13.png" style={{width:900, height:'auto'}}/></div>

- **步骤 17.** 点击 **FINISH**。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/28.png" width="300"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/14.png" style={{width:400, height:'auto'}}/></div>

### 2. 使用 ESPHome 和 Home Assistant 连接 Grove 模块

现在我们将 Grove 模块连接到 Seeed Studio XIAO ESP32S3（感知版），以便通过 Home Assistant 显示传感器数据或控制设备！

### 开发知识

#### XIAO 扩展板

为了将 Grove 模块与 Seeed Studio XIAO ESP32S3 一起使用，我们需要使用 [Seeed Studio XIAO 扩展基板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) 并将 XIAO ESP32S3 安装在其上。

之后，扩展板上的 Grove 接口可以用来连接 Grove 模块。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### 引脚定义

当将 Grove 模块连接到 Seeed Studio XIAO 的 Grove Shield 上的 Grove 接口时，您需要按照下图使用适当的内部引脚编号。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/pinout.png" width="1000"> -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg"style={{width:900, height:'auto'}}/></div>
<br />

例如，如果您想将 Grove 模块连接到 D0 接口，您需要在 ESPHome 中将引脚定义为 GPIO1。您可以通过 [点击这里](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/#resources) 查看更多详情。

#### ESPHome 支持的 Grove 模块兼容性列表

目前，以下 Grove 模块受 ESPHome 支持。

请查看 [这里](https://esphome.io/components/sensor/index.html#see-also)。

现在我们将从上述列表中选择 6 个 Grove 模块，并解释它们如何与 ESPHome 和 Home Assistant 连接。

### 3. Grove 连接和数据传输

现在我们将选择几个 Grove 模块，并解释它们如何与 ESPHome 和 Home Assistant 连接。

#### Grove - 温湿度传感器（BME680）

##### 设置配置

- **步骤 1.** 将 Grove - [温度、湿度、气压和气体传感器（BME680）](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html) 连接到 Seeed Studio XIAO 扩展基板上的一个 I2C 接口。

- **步骤 2.** 在我们之前创建的 **xiao-esp32s3-bme680.yaml** 文件中，修改文件并通过 OTA 推送到 XIAO ESP32S3。

```
# Configuration for ESPHome
esphome:
  # Name of the ESP32-S3 device
  name: esp32s3
  
  # PlatformIO build options
  platformio_options:
    build_flags: -DBOARD_HAS_PSRAM
    board_build.arduino.memory_type: qio_opi
    board_build.f_flash: 80000000L
    board_build.flash_mode: qio 

# Configuration for ESP32
esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

# Enable logging
logger:

# Enable Home Assistant API
api:

# Over-the-Air update configuration
ota:

# Wi-Fi configuration
wifi:
  ssid: "your wifi name"
  password: "your password"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32s3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

# Captive portal configuration
captive_portal:

# I2C configuration for BME680 sensor
i2c:
  sda: GPIO5
  scl: GPIO6

# BME680 sensor configuration
sensor:
  - platform: bme680
    temperature:
      name: "BME680 Temperature"
      oversampling: 16x
    pressure:
      name: "BME680 Pressure"
    humidity:
      name: "BME680 Humidity"
    gas_resistance:
      name: "BME680 Gas Resistance"
    address: 0x76
    update_interval: 60s
```

您可以在 [BME680 组件](https://esphome.io/components/sensor/bme680) 页面了解更多信息。它允许您使用基于 BME280、BME680、BMP085、BMP280、AHT10、AHT20 和 AHT21 的传感器。在这里，我们添加了 I²C 总线组件，因为 AHT20 使用 I2C 协议进行通信。

##### 在 Dashboard 中可视化

- **步骤 1.** 在 Home Assistant 的概览页面，点击右上角的三个点，然后点击 **编辑 Dashboard**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/15.png" style={{width:900, height:'auto'}}/></div>

- **步骤 2.** 点击 **+ 添加卡片**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/16.png" style={{width:900, height:'auto'}}/></div>

- **步骤 3.** 选择 **按实体**，输入 **temperature**，并勾选 **Temperature** 旁边的复选框

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/17.png" style={{width:900, height:'auto'}}/></div>

- **步骤 4.** 对 **Humidity**、**Gas Resistance** 和 **Pressure** 重复相同操作

- **步骤 5.** 点击 **继续**

- **步骤 6.** 点击 **添加到仪表盘**

现在，您的 Home Assistant 仪表盘将如下所示：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/18.png" style={{width:900, height:'auto'}}/></div>

- **步骤 7.** 您还可以将传感器数据可视化为仪表。点击 **按卡片** 下的 **仪表**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/19.png" style={{width:900, height:'auto'}}/></div>

- **步骤 8.** 从下拉菜单中选择 **Temperature**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/20.png" style={{width:900, height:'auto'}}/></div>

- **步骤 9.** 点击 **保存**

- **步骤 10.** 对 **Humidity**、**Gas Resistance** 和 **Pressure** 重复相同操作

- 现在，您的仪表盘将如下所示：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/21.png" style={{width:900, height:'auto'}}/></div>

<br />

#### Grove - 智能空气质量传感器 (SGP41)

- **步骤 1.** 将 Grove - [智能空气质量传感器 (SGP41)](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html?queryID=3ac9c3a1ed9e1a56a66b142e8282868a&objectID=5687&indexName=bazaar_retailer_products) 连接到 Seeed Studio 扩展基座的一个 I2C 接口上

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/22.jpg" style={{width:900, height:'auto'}}/></div>

- **步骤 2.** 在我们之前创建的 **xiao-esp32S3.yaml** 文件中进行修改，并通过 OTA 推送到 XIAO ESP32S3 sense

```
# Configuration for ESPHome
esphome:
  # Name of the ESP32-S3 device
  name: esp32s3
  
  # PlatformIO build options
  platformio_options:
    build_flags: -DBOARD_HAS_PSRAM
    board_build.arduino.memory_type: qio_opi
    board_build.f_flash: 80000000L
    board_build.flash_mode: qio 

# Configuration for ESP32
esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

# Enable logging
logger:

# Enable Home Assistant API
api:

# Over-the-Air update configuration
ota:

# Wi-Fi configuration
wifi:
  ssid: "your wifi name"
  password: "your password"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32s3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

# Captive portal configuration
captive_portal:

# SPI configuration
spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

# I2C configuration for BME680 sensor
i2c:
  sda: GPIO5
  scl: GPIO6
  scan: True
  id: bus_a
  frequency: 1MHz

# Sensor configuration for SGP4X
sensor:
  - platform: sgp4x
    voc:
      id: sgp41_voc
      name: "VOC Index"
    nox:
      id: sgp41_nox
      name: "NOx Index"
```

- **步骤 3.** 使用补偿的示例  
补偿（可选）：包含用于补偿的传感器的块。如果未设置，将使用默认值。  
我们将使用温湿度传感器 (BME680) 来补偿智能空气质量传感器 (SGP41)。  
以下是更新后的 **xiao-esp32S3.yaml** 文件：

```
# Configuration for ESPHome
esphome:
  # Name of the ESP32-S3 device
  name: esp32s3
  
  # PlatformIO build options
  platformio_options:
    build_flags: -DBOARD_HAS_PSRAM
    board_build.arduino.memory_type: qio_opi
    board_build.f_flash: 80000000L
    board_build.flash_mode: qio 

# Configuration for ESP32
esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

# Enable logging
logger:

# Enable Home Assistant API
api:

# Over-the-Air update configuration
ota:

# Wi-Fi configuration
wifi:
  ssid: "your wifi name"
  password: "your password"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32s3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

# Captive portal configuration
captive_portal:

# SPI configuration
spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

# I2C configuration for BME680 sensor
i2c:
  sda: GPIO5
  scl: GPIO6
  scan: True
  id: bus_a
  frequency: 1MHz

# BME680 sensor configuration
sensor:
  - platform: bme680
    temperature:
      id: bme680_temp
      name: "BME680 Temperature"
      oversampling: 16x
    pressure:
      name: "BME680 Pressure"
    humidity:
      id: bme680_hum
      name: "BME680 Humidity"
    gas_resistance:
      name: "BME680 Gas Resistance"
    address: 0x76

# SGP4X sensor configuration
  - platform: sgp4x
    voc:
      name: "VOC Index"
    nox:
      name: "NOx Index"
    compensation:
      humidity_source: bme680_hum
      temperature_source: bme680_temp
```

**注意：** 该传感器需要消耗 90 个循环以收集足够的数据样本，目前无法避免警告。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/38.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/23.png" style={{width:900, height:'auto'}}/></div>

##### 在 Dashboard 上可视化

与之前相同。
<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/43.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/24.png" style={{width:900, height:'auto'}}/></div>
<br />

#### OV2640 摄像头（XIAO ESP32S3 Sense）

##### 设置配置

- **步骤 1.** 将 OV2640 摄像头外部板连接到 xiao esp32s3 sense

- **步骤 2.** 在我们之前创建的 **xiao-esp32s3-camera.yaml** 文件中，修改文件并通过 OTA 将其推送到 XIAO ESP32S3 sense

```
# ESPHome 配置
esphome:
  # ESP32-S3 设备的名称
  name: esp32s3
  
  # PlatformIO 构建选项
  platformio_options:
    build_flags: -DBOARD_HAS_PSRAM
    board_build.arduino.memory_type: qio_opi
    board_build.f_flash: 80000000L
    board_build.flash_mode: qio 

# ESP32 配置
esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

# 启用日志记录
logger:

# 启用 Home Assistant API
api:

# OTA 更新配置
ota:

# Wi-Fi 配置
wifi:
  ssid: "your wifi name"
  password: "your password"

  # 启用回退热点（捕获门户），以防 Wi-Fi 连接失败
  ap:
    ssid: "Xiao-Esp32s3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

# 捕获门户配置
captive_portal:

# ESP32 摄像头配置
esp32_camera:
  id: espcam
  name: My Camera
  external_clock:
    pin: GPIO10
    frequency: 20MHz
  i2c_pins:
    sda: GPIO40
    scl: GPIO39
  data_pins: [GPIO15, GPIO17, GPIO18, GPIO16, GPIO14, GPIO12, GPIO11, GPIO48]
  vsync_pin: GPIO38
  href_pin: GPIO47
  pixel_clock_pin: GPIO13
  resolution: 800x600
  
# ESP32 摄像头 Web 服务器配置
esp32_camera_web_server:
  - port: 8080
    mode: stream
  - port: 8081
    mode: snapshot
```

**注意**：有关更多信息，请阅读[此处](https://esphome.io/components/esp32_camera.html?highlight=camera)。

##### 在 Dashboard 上可视化

- **步骤 1.** 在 Home Assistant 的概览页面上，点击右上角的 3 个点并选择 **Edit Dashboard**

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/31.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/15.png" style={{width:900, height:'auto'}}/></div>

- **步骤 2.** 点击 **+ ADD CARD**

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/32.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/16.png" style={{width:900, height:'auto'}}/></div>

- **步骤 3.** 选择 **By ENTITY**，输入 **Camera** 并选择 **My Camera**
<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/cameravisulization.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/25.png" style={{width:900, height:'auto'}}/></div>

- **步骤 4.** 点击 **Add to Dashboard**
<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/cameravisulization2.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/26.png" style={{width:400, height:'auto'}}/></div>

- **步骤 5.** 在仪表板上查看网络流时，它处于空闲模式，每分钟仅刷新几帧。当我们点击卡片时，它会切换到活动模式，通常刷新率为每秒 1 到 10 帧。在本教程中，刷新率约为每秒 4 帧。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/camera.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/27.png" style={{width:400, height:'auto'}}/></div>

#### 用于语音助手的 PDM 麦克风

##### 设置配置

- **步骤 1.** 在我们之前创建的 **xiao-esp32s3-microphone.yaml** 文件中，修改文件并通过 OTA 将其推送到 XIAO ESP32S3 sense

```
# ESPHome 配置
esphome:
  name: esp32s3
  platformio_options:
    build_flags: -DBOARD_HAS_PSRAM
    board_build.arduino.memory_type: qio_opi
    board_build.f_flash: 80000000L
    board_build.flash_mode: qio 

# ESP32 配置
esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

# 启用日志记录
logger:

# 启用 Home Assistant API
api:

# OTA 更新配置
ota:

# Wi-Fi 配置
wifi:
  ssid: "your wifi name"
  password: "your password"

  # 启用回退热点（捕获门户），以防 Wi-Fi 连接失败
  ap:
    ssid: "Xiao-Esp32s3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

# 捕获门户配置
captive_portal:

# 状态 LED 灯的配置
light:
  - platform: status_led
    id: light0
    name: "Voice Assistant State"
    pin:
      number: GPIO21
      inverted: true

# I2S 音频配置
i2s_audio:
  i2s_lrclk_pin: GPIO46 # 注意：标记为“无用”
  i2s_bclk_pin: GPIO42

# 使用 I2S 音频的麦克风配置
microphone:
  - platform: i2s_audio
    id: echo_microphone
    i2s_din_pin: GPIO41
    adc_type: external
    pdm: true

# 语音助手配置
voice_assistant:
  microphone: echo_microphone

# 二进制传感器（启动开关）配置
binary_sensor:    
  - platform: gpio
    pin: 
      number: GPIO2
      mode:
        input: true
        pullup: true
    name: Boot Switch
    internal: true
    on_press:
      - voice_assistant.start:
      - light.turn_off: light0
    on_release:
      - voice_assistant.stop:
      - light.turn_on: light0
```

**注意**：更多信息请阅读[这里](https://esphome.io/components/microphone/i2s_audio)。

##### 在仪表板上可视化

- **步骤 1.** 在 Home Assistant 的概览页面，点击右上角的三点图标，然后点击 **编辑仪表板**

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/31.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/15.png" style={{width:900, height:'auto'}}/></div>

- **步骤 2.** 点击 **+ 添加卡片**

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/32.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/16.png" style={{width:900, height:'auto'}}/></div>

- **步骤 3.** 选择 **按实体**，然后选择 **Esp32S3 Assist in progress**、**Esp32S3 Assist in progress**、**Esp32S3 Finished speaking detection**、**Status** 和 **voice assistant state**。
<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/va1.png" width="700">
<img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/va2.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/28.png" style={{width:900, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/29.png" style={{width:900, height:'auto'}}/></div>

- **步骤 4.** 点击 **添加到仪表板**
<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/va3.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/30.png" style={{width:400, height:'auto'}}/></div>

- **步骤 5.** 当你按下 Seeed Studio XIAO 扩展基座上的 **按钮(D1)** 时，esp32s3 上的用户定义 LED (GPIO2) 将点亮，你可以通过 **语音助手** 与 ESPHome 进行交互。
<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/va4.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/31.png" style={{width:600, height:'auto'}}/></div>

**注意：** 更多信息请[阅读此处](https://esphome.io/components/voice_assistant.html)。

#### 6x10 RGB 矩阵 for XIAO

##### 设置配置

- **步骤 1.** 首先需要将 6x10 RGB 矩阵连接到 XIAO，具体请参见[此 Wiki](https://wiki.seeedstudio.com/rgb_matrix_for_xiao/#hardware-preparation)。

- **步骤 2.** 复制以下 .yaml 信息并通过 OTA 推送到 XIAO ESP32S3。

```
esphome:
  name: sixtyled
  friendly_name: sixtyled

esp32:
  board: seeed_xiao_esp32s3
  variant: esp32s3
  framework:
    type: arduino
    version: latest
    platform_version: 6.4.0

# 启用日志
logger:

# 启用 Home Assistant API
api:

ota:

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

  # 如果 WiFi 连接失败，启用回退热点（捕获门户）
  ap:
    ssid: "Sixtyled Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:
    
light:
  - platform: esp32_rmt_led_strip
    rgb_order: GRB
    pin: GPIO1
    num_leds: 60
    rmt_channel: 0
    chipset: ws2812
    name: "XIAO LEDS"

```

##### 在仪表板上可视化

- **步骤 1.** 打开路径 `设置 - 设备与服务 - ESPHome - sixtyled（你设置的名称）`，将卡片添加到仪表板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/sixty_dashboard_add.png" style={{width:900, height:'auto'}}/></div>

- **步骤 2.** 在 Home Assistant 的概览页面，点击右上角的三点图标，然后点击 **编辑仪表板**

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/31.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/15.png" style={{width:900, height:'auto'}}/></div>

- **步骤 3.** 点击 **+ 添加卡片**

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/32.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/16.png" style={{width:900, height:'auto'}}/></div>

- **步骤 4.** 选择 **按实体**，输入 **xiao**，然后勾选 **sixtyled XIAO LEDS**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/add_card.png" style={{width:900, height:'auto'}}/></div>

- **步骤 5.** 点击 **继续** 并 **添加到仪表板**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/sixty_dashboard_add2.png" style={{width:900, height:'auto'}}/></div>

- **步骤 6.** 随后，你可以在“概览”部分找到一个卡片，通过它可以控制 XIAO 的 6x10 RGB 矩阵。在这里，你可以切换其开/关状态并自定义颜色和亮度。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/LEDdemo.gif" style={{width:600, height:'auto'}}/></div>

## ✨ 贡献者项目

- 此项目由 Seeed Studio [贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)支持。
- 感谢 **Zachary 的努力**，你的工作将被[展示](https://wiki.seeedstudio.com/Honorary-Contributors/)。
- 感谢 **python 的努力**，项目源码分享在[这里](https://community.home-assistant.io/t/seeed-studio-6x10-rgb-matrix-on-xiao-esp32s3/629867)。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>