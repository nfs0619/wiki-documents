---
description: ESPHome 支持 Seeed Studio XIAO ESP32C3
title: ESPHome 支持 Seeed Studio XIAO ESP32C3
keywords:
- ESPHome
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/XIAO-ESP32C3-for-ESPHome-Support
last_update:
  date: 05/15/2025
  author: Zachary
---

# XIAO ESP32C3 通过 ESPHome 与 Home Assistant 连接（支持所有端口）

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<!-- # ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3 -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/43.png"style={{width:900, height:'auto'}}/></div>

本指南将逐步演示如何将 [Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html) 与运行在 Home Assistant 上的 ESPHome 连接，并在连接 Grove 模块到 XIAO ESP32C3 后发送传感器数据或控制设备。我在这里应用了所有类型的端口，包括 **数字端口、模拟端口、IIC、SPI 和 UART**。现在让我们开始吧！

## 什么是 ESPHome 和 Home Assistant？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/2.png" style={{width:900, height:'auto'}}/></div>

[ESPHome](https://esphome.io/) 是一个旨在简化 ESP 板管理的工具。它读取 YAML 配置文件并创建自定义固件，然后将其安装到 ESP 设备上。在 ESPHome 配置中添加的设备或传感器会自动显示在 Home Assistant 的用户界面中。ESPHome 可以帮助您将数据连接并发送到 Home Assistant 设备。

## 硬件准备

我使用 XIAO ESP32C3 作为控制板，使用 [reRouter](https://www.seeedstudio.com/reRouter-CM4102032-p-5734.html) 作为硬件，同时搭配多个 Grove 传感器。

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32C3</th>
      <th>Seeed Studio 扩展板</th>
      <th>Home Assistant 设备</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Home-Assistant/1.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html">
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

**Grove 传感器**

- [Grove - 温湿度传感器 (BME680)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html)
- [Grove - 智能空气质量传感器 (SGP41)](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html)
- [Grove - 模拟麦克风](https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html)
- [Grove - 数字 PIR 传感器](https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html)

## 软件准备

### 安装 Home Assistant

确保您已经安装并运行了 Home Assistant。这里有多个指南介绍如何将 Home Assistant 刷入 [产品](https://wiki.seeedstudio.com/home_assistant_topic/#-devices-for-home-assistant-) 中。我使用的是基于 Raspberry Pi CM4 的 reRouter，因此我可以 [直接使用官方方法将操作系统刷入 reRouter](https://www.home-assistant.io/installation/raspberrypi)。

### 在 Home Assistant 上安装 ESPHome

ESPHome 可作为 **Home Assistant 插件** 使用，可以通过插件商店简单安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/1.png" style={{width:900, height:'auto'}}/></div>

<!-- - **步骤 1.** 要快速在 Home Assistant 上设置 ESPHome，请点击以下按钮 -->

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/4.png"style={{width:300, height:'auto'}}/></div> -->
<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/4.png" style={{width:300, height:'auto'}}/></div> -->

<!-- - **步骤 2.** 当您看到以下弹窗时，点击 **OPEN LINK** -->

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/5.png"style={{width:300, height:'auto'}}/></div> -->

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/5.png" style={{width:300, height:'auto'}}/></div> -->

- **步骤 1.** 点击 **INSTALL**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/2.png" style={{width:900, height:'auto'}}/></div>

- **步骤 2.** 启用所有选项并点击 **START**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/3.png" style={{width:900, height:'auto'}}/></div>

您将看到以下窗口，如果 ESPHome 成功加载

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/4.png" style={{width:900, height:'auto'}}/></div>

## 入门指南

当所有软件和硬件都准备好后，我们就可以开始了。

### 1. 将 Seeed Studio XIAO ESP32C3 添加到 ESPHome

- **步骤 1.** 点击 **+ NEW DEVICE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/5.png" style={{width:900, height:'auto'}}/></div>

- **步骤 2.** 点击 **CONTINUE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/6.png" style={{width:900, height:'auto'}}/></div>

- **步骤 3.** 输入设备的 **Name**，并输入 WiFi 凭据，例如 **Network name** 和 **Password**。然后点击 **NEXT**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/7.png" style={{width:900, height:'auto'}}/></div>

- **步骤 4.** 选择 **ESP32-C3** 并点击

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/8.png" style={{width:900, height:'auto'}}/></div>

- **步骤 5.** 点击 **SKIP**，因为我们将手动配置此开发板

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/14.png" style={{width:400, height:'auto'}}/></div>

- **步骤 6.** 点击新创建开发板下的 **EDIT**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/9.png" style={{width:900, height:'auto'}}/></div>

- **步骤 7.** 这将打开一个 **YAML** 文件，此文件将用于设置所有开发板配置。按照以下内容编辑 **esp32** 下的内容

``` 
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

# Enable Home Assistant API
api:
  password: "Your password"

ota:
  password: "Your password"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "Your Password"
```

:::note 在这里我们使用了最新版本的 [Arduino core](https://github.com/espressif/arduino-esp32/releases) 用于 ESP32 和 [PlatformIO 的 ESP32 支持](https://github.com/platformio/platform-espressif32/releases)
:::

- **步骤 8.** 点击 **SAVE**，然后点击 **INSTALL**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/10-2.png" style={{width:900, height:'auto'}}/></div>

- **步骤 9.** 将 USB Type-C 数据线的一端连接到 Seeed Studio XIAO ESP32C3，另一端连接到 reRouter CM4 1432 的一个 USB 端口

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/17.png" style={{width:900, height:'auto'}}/></div>

- **步骤 10.** 点击 **Plug into the computer running ESPHome Dashboard**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/12-1.png" style={{width:900, height:'auto'}}/></div>

- **步骤 11.** 选择已连接的端口。可能是 ```/dev/ttyACM1，因为 /dev/ttyACM0``` 已连接到 reRouter CM4 1432

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/13-1.png" style={{width:900, height:'auto'}}/></div>

:::tip
最好使用 2.4GHz Wi-Fi
:::

现在，它将下载所有必要的开发板包并将 ESPHome 固件烧录到 XIAO ESP32C3。如果烧录成功，您将看到以下输出。如果出现错误，请尝试重启您的 xiao esp32c3 或通过按住 BOOT 按钮并连接 XIAO ESP32C3 进入引导模式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/20.png" style={{width:900, height:'auto'}}/></div>

- **步骤 12.** 上述窗口显示了来自连接开发板的实时日志。通过点击 **STOP** 关闭它

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/14.png" style={{width:900, height:'auto'}}/></div>

- **步骤 13.** 如果您看到开发板状态为 **ONLINE**，这意味着开发板已成功连接到 WiFi

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/15.png" style={{width:900, height:'auto'}}/></div>

- **步骤 14.** 前往 **Settings** 并选择 **Devices & Services**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/19.png" style={{width:900, height:'auto'}}/></div>

- **步骤 15.** 您将看到 **ESPHome** 作为一个已发现的集成。点击 **CONFIGURE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/20.png"style={{width:900, height:'auto'}}/></div>

- **步骤 16.** 点击 **SUBMIT**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/21.png"style={{width:900, height:'auto'}}/></div>

- **步骤 17.** 输入您的密码。这是您在 **步骤 8** 中设置的 api 密码

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/22.png"style={{width:900, height:'auto'}}/></div>

### 第18步. 点击 **FINISH**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/23.png"style={{width:900, height:'auto'}}/></div>

### 2. 连接 Grove 模块并发送数据

现在我们将 Grove 模块连接到 Seeed Studio XIAO ESP32C3，以便我们可以使用 Home Assistant 显示传感器数据或控制设备！

### 开发知识

#### XIAO 扩展板

为了在 Seeed Studio XIAO ESP32C3 上使用 Grove 模块，我们将使用 [Seeed Studio XIAO 扩展基板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)，并将 XIAO ESP32C3 安装到扩展板上。

之后，扩展板上的 Grove 接口即可用于连接 Grove 模块。以下是引脚定义。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:900, height:'auto'}}/></div>

#### 引脚定义

当将 Grove 模块连接到 Seeed Studio XIAO 的 Grove Shield 上的 Grove 接口时，需要按照下图使用适当的内部引脚编号。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/pin_map.png"style={{width:900, height:'auto'}}/></div>

例如，如果您想将 Grove 模块连接到 D0 接口，则需要在 ESPHome 中将引脚定义为 GPIO2。

#### Grove 模块与 ESPHome 的兼容性列表

目前以下 Grove 模块已被 ESPHome 支持。点击 [这里](https://esphome.io/components/sensor/index.html#see-also) 查看详细信息。

### 3. Grove 连接与数据传输

现在我们将选择几个 Grove 模块，并解释如何将它们与 ESPHome 和 Home Assistant 连接。

#### Grove - 温湿度传感器 (DHT20)

此温湿度传感器提供预校准的数字输出。独特的电容传感器元件测量相对湿度，温度由负温度系数 (NTC) 热敏电阻测量。它具有出色的可靠性和长期稳定性。[点击这里](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html) 购买。

##### 设置配置

- **第1步.** 将 Grove - DHT20 连接到 Seeed Studio XIAO 扩展基板上的一个 I2C 接口。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/pic1.png"style={{width:300, height:'auto'}}/></div>

- **第2步.** 在我们之前创建的 **xiao-esp32c3.yaml** 文件中修改配置文件，并通过 OTA 推送到 XIAO ESP32C3。

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

api:
  password: "F4MQG/rBhNmqP8Nud+AJ+5CYu7LuIhIFTOcRwOm5Nw4="

ota:
  password: "999afa1f8a07e85959a9f89f8f6aebb2"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "YtpCwOqLoYlp"

captive_portal:

# 0x28 is the I2C address of DHT20
i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_0x38

sensor:
  - platform: aht10
    temperature:
      name: "Living Room Temperature"
    humidity:
      name: "Living Room Humidity"
    update_interval: 60s
```

您可以在 [DHT20 组件](https://esphome.io/components/sensor/aht10) 中了解更多信息。这里我们添加了 I²C 总线组件，因为 DHT20 使用 I2C 协议进行通信。

##### 在 Dashboard 上可视化

- **第1步.** 在 Home Assistant 的概览页面，点击右上角的三个点并选择 **Edit Dashboard**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/35.png"style={{width:900, height:'auto'}}/></div>

- **第2步.** 点击 **+ ADD CARD**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/36.png"style={{width:900, height:'auto'}}/></div>

- **第3步.** 选择 **By ENTITY**，输入 **temperature** 并勾选 **Temperature** 旁边的复选框。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/37.png"style={{width:900, height:'auto'}}/></div>

- **第4步.** 点击 **ADD TO DASHBOARD**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/38.png"style={{width:900, height:'auto'}}/></div>

- **第5步.** 您还可以将传感器数据以仪表形式可视化。点击 **Gauge**，在 **BY CARD** 下选择。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/37-1.png"style={{width:900, height:'auto'}}/></div>

现在您的 Home Assistant 仪表盘将如下图所示：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/39.png"style={{width:900, height:'auto'}}/></div>

#### Grove - 光传感器 (LS06-S)

Grove - 光传感器 v1.2 是一个模拟模块，可以输出各种电信号并转换为不同的范围。它集成了 LS06-S 光敏电阻，一个高灵敏度和可靠的光电二极管，用于检测环境中的光强度。它是一个完美的 Arduino 光传感器模块，用于光测量、光检测和光控开关。

[点击这里](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html) 购买。

##### 设置配置

- **第1步.** 将 Grove - 光传感器连接到 Seeed Studio XIAO 扩展基板上的一个模拟/数字接口。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/pic2.png"style={{width:300, height:'auto'}}/></div>

- **第2步.** 在我们之前创建的 **xiao-esp32c3.yaml** 文件中修改配置文件，并通过 OTA 推送到 XIAO ESP32C3。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/41-1.png"style={{width:900, height:'auto'}}/></div>

如果一切正常，您将看到以下结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/42.png"style={{width:900, height:'auto'}}/></div>

##### 在 Dashboard 上可视化

- **步骤 1.** 在 Home Assistant 的概览页面，点击右上角的三个点，然后点击 **Edit Dashboard**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/35.png"style={{width:900, height:'auto'}}/></div>

- **步骤 2.** 点击 **+ ADD CARD**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/36.png"style={{width:900, height:'auto'}}/></div>

- **步骤 3.** 选择 **By ENTITY**，然后选择 **Light Sensor**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/43.png"style={{width:900, height:'auto'}}/></div>

- **步骤 4.** 选择 **PICK DIFFERENT CARD**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/44.png"style={{width:900, height:'auto'}}/></div>

- **步骤 5.** 选择 **Gauge**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/45.png"style={{width:900, height:'auto'}}/></div>

- **步骤 6.** 设置最小值和最大值

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/46.png"style={{width:900, height:'auto'}}/></div>

- **步骤 7.** 然后您将在仪表板上看到光传感器的值。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/47.png"style={{width:900, height:'auto'}}/></div>


<!-- #### Grove - Temperature and Humidity Sensor (BME680)

Grove-Temperature&Humidity&Pressure&Gas Sensor(BME680) 是一个多功能传感器，可以同时测量温度、压力、湿度和气体。它基于 BME680 模块，您可以将此传感器用于 GPS、物联网设备或其他需要这四个参数的设备。[点击这里](https://www.seeedstudio.com/Grove-Temperature%2C-Humidity%2C-Pressure-and-Gas-Sensor-(BME680)-p-3109.html) 购买。

##### 设置配置

- **步骤 1.** 将 Grove - [Temperature, Humidity, Pressure and Gas Sensor (BME680)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html) 连接到 Seeed Studio Expansion Base for XIAO 的其中一个 I2C 接口

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/30.jpg"style={{width:700, height:'auto'}}/></div>

- **步骤 2.** 在我们之前创建的 **xiao-esp32c3.yaml** 文件中，修改文件并通过 OTA 推送到 XIAO ESP32C3

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

# Enable Home Assistant API
api:
  password: "Your password"

ota:
  password: "Your password"

wifi:
  ssid: "UMASS fried chicken"
  password: "Zacharyloveschicken"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:

i2c:
  sda: GPIO6
  scl: GPIO7

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

您可以在 [BME680 组件](https://esphome.io/components/sensor/bme680) 中了解更多信息。它允许您使用基于 BME280、BME680、BMP085、BMP280、AHT10、AHT20 和 AHT21 的传感器。这里我们添加了 I²C 总线组件，因为 AHT20 使用 I2C 协议进行通信。


##### 在 Dashboard 上可视化

- **步骤 1.** 在 Home Assistant 的概览页面，点击右上角的三个点，然后点击 **Edit Dashboard**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/31.png"style={{width:900, height:'auto'}}/></div>

- **步骤 2.** 点击 **+ ADD CARD**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/32.png"style={{width:900, height:'auto'}}/></div>

- **步骤 3.** 选择 **By ENTITY**，输入 **temperature**，然后勾选 **Temperature** 旁边的复选框

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/33.png"style={{width:900, height:'auto'}}/></div>

- **步骤 4.** 对 **Humidity**、**Gas Resistance** 和 **Pressure** 重复相同操作

- **步骤 5.** 点击 **CONTINUE**

- **步骤 6.** 点击 **ADD TO DASHBOARD**

现在您的 Home Assistant 仪表板将如下所示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/34.png"style={{width:900, height:'auto'}}/></div>

- **步骤 7.** 您还可以将传感器数据可视化为仪表。点击 **BY CARD** 下的 **Gauge**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/35.png"style={{width:900, height:'auto'}}/></div>

- **步骤 8.** 从下拉菜单中选择 **Temperature**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/36.png"style={{width:900, height:'auto'}}/></div>

- **步骤 9.** 点击 **SAVE**

- **步骤 10.** 对 **Humidity**、**Gas Resistance** 和 **Pressure** 重复相同操作

- 现在您的仪表板将如下所示：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/37.png"style={{width:900, height:'auto'}}/></div>
 -->

<!-- #### Grove - 智能空气质量传感器 (SGP41)

SGP41 数字气体传感器采用 Sensirion 的 CMOSens® 技术，该技术在单芯片上提供了一个完整且易于使用的传感器系统。它可以测量室内空气中挥发性有机化合物 (VOCs) 和氮氧化物 (NOx) 的浓度，并提供数字输出信号。此外，该传感器具有出色的长期稳定性和使用寿命。[点击这里](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html?queryID=3ac9c3a1ed9e1a56a66b142e8282868a&objectID=5687&indexName=bazaar_retailer_products) 进行购买。

##### 设置配置

- **步骤 1.** 将 Grove - [智能空气质量传感器 (SGP41)](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html?queryID=3ac9c3a1ed9e1a56a66b142e8282868a&objectID=5687&indexName=bazaar_retailer_products) 连接到 Seeed Studio 的 XIAO 扩展基板上的一个 I2C 接口

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/38.jpg"style={{width:900, height:'auto'}}/></div>

- **步骤 2.** 在我们之前创建的 **xiao-esp32c3.yaml** 文件中，修改文件并通过 OTA 将其推送到 XIAO ESP32C3

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# 启用日志记录
logger:
 hardware_uart: UART0

# 启用 Home Assistant API
api:
  password: "Your password"

ota:
  password: "Your password"

wifi:
  ssid: "UMASS fried chicken"
  password: "Zacharyloveschicken"

  # 如果 WiFi 连接失败，启用回退热点（捕获门户）
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:

spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_a
  frequency: 1MHz

sensor:
  - platform: sgp4x
    voc:
      id: sgp41_voc
      name: "VOC Index"
    nox:
      id: sgp41_nox
      name: "NOx Index"

``` 

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# 启用日志记录
logger:
 hardware_uart: UART0

# 启用 Home Assistant API
api:
  password: "Your password"

ota:
  password: "Your password"

wifi:
  ssid: "UMASS fried chicken"
  password: "Zacharyloveschicken"

  # 如果 WiFi 连接失败，启用回退热点（捕获门户）
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:

spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_a
  frequency: 1MHz
sensor:
  - platform: bme680
    temperature:
      id:  bme680_temp
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
  
  - platform: sgp4x
    voc:
      name: "VOC Index"
    nox:
      name: "NOx Index"
    compensation:
      humidity_source: bme680_hum
      temperature_source: bme680_temp
```
**注意：** 此传感器需要 90 个周期来收集足够的数据样本，目前无法避免警告。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/38.png"style={{width:700, height:'auto'}}/></div>

##### 在 Dashboard 上可视化

参考之前的内容。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/39.png"style={{width:700, height:'auto'}}/></div> -->

<!-- #### Grove - 模拟麦克风

Grove - 模拟麦克风基于高性能的 SiSonic MEMS 技术，提供了一个极低噪声、低功耗、可靠且小巧的麦克风，适用于开源硬件行业，并且在恶劣条件下性能有所提升。[点击这里](https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html) 进行购买。

##### 设置配置

- **步骤 1.** 将 Grove - [模拟麦克风](https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html) 连接到 Seeed Studio 的 XIAO 扩展基板上的 A0 接口

- **步骤 2.** 在我们之前创建的 **xiao-esp32c3.yaml** 文件中，修改文件并通过 OTA 将其推送到 XIAO ESP32C3
```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# 启用日志记录
logger:
 hardware_uart: UART0

# 启用 Home Assistant API
api:

ota:

wifi:
  ssid: "UMASS fried chicken"
  password: "Zacharyloveschicken"

  # 如果 WiFi 连接失败，启用回退热点（捕获门户）
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:

spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_a
  frequency: 1MHz

binary_sensor:
  - platform: gpio
    pin: GPIO2
    name: "Sound level"
    device_class: sound
```

您可以查看有关 [Binary Sensor Component](https://esphome.io/components/binary_sensor/index.html#binary-sensor-component) 的更多信息。

##### 在 Dashboard 上可视化

参考之前的内容。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/41.png"style={{width:700, height:'auto'}}/></div> -->

<!-- #### Grove - 数字 PIR 传感器

PIR 传感器是一种用于检测人体运动的红外传感器。这款 Grove 数字 PIR 传感器是 PIR 系列中最便宜的一款，但它能够快速响应并从 "sig" 引脚生成高信号。[点击这里](https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html) 进行购买。

##### 配置设置

- **步骤 1.** 将 [Grove - Digital PIR Sensor](https://wiki.seeedstudio.com/Grove-Digital-PIR-Sensor/) 连接到 Seeed Studio 扩展基板的 D7 接口 XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/42.jpg"style={{width:700, height:'auto'}}/></div>

- **步骤 2.** 在我们之前创建的 **xiao-esp32c3.yaml** 文件中修改内容，并通过 OTA 推送到 XIAO ESP32C3

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# 启用日志记录
logger:
 hardware_uart: UART0

# 启用 Home Assistant API
api:

ota:

wifi:
  ssid: "UMASS fried chicken"
  password: "Zacharyloveschicken"

  # 如果 WiFi 连接失败，启用备用热点（捕获门户）
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:

spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_a
  frequency: 1MHz

binary_sensor:
  - platform: gpio
    pin: GPIO20
    name: "PIR Sensor"
    device_class: motion
```

##### 在 Dashboard 上可视化

如前所述。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/43.png"style={{width:700, height:'auto'}}/></div> -->

<!-- #### 显示屏(SSD1306)在 XIAO 扩展板上

##### 配置设置

- **步骤 1.** 下载显示屏的字体文件，[点击这里](https://esphome.io/components/display/index.html#fonts) 查看参考

- **步骤 2.** 在 **设置** >>> **附加组件** >>> **文件编辑器** 中安装 "文件编辑器"

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/44.png"style={{width:700, height:'auto'}}/></div>

- **步骤 3.** 点击 **文件编辑器** >>> 输入路径: **config/esphome** >>> **上传** 你的字体文件

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/45.png"style={{width:700, height:'auto'}}/></div>

- **步骤 4.** 在我们之前创建的 **xiao-esp32c3.yaml** 文件中修改内容，并通过 OTA 推送到 XIAO ESP32C3

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# 启用日志记录
logger:
 hardware_uart: UART0

# 启用 Home Assistant API
api:

ota:

wifi:
  ssid: "UMASS fried chicken"
  password: "Zacharyloveschicken"

  # 如果 WiFi 连接失败，启用备用热点（捕获门户）
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:

spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_a
  frequency: 1MHz

display:
  - platform: ssd1306_i2c
    model: "SSD1306 128x64"
    address: 0x3C
    lambda: |-
      it.print(0, 0, id(font), "Wi-fi Connected");

sensor:
  - platform: bme680
    temperature:
      id:  bme680_temp
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
  
  - platform: sgp4x
    voc:
      name: "VOC Index"
    nox:
      name: "NOx Index"
    compensation:
      humidity_source: bme680_hum
      temperature_source: bme680_temp

binary_sensor:
  - platform: gpio
    pin: GPIO20
    name: "PIR Sensor"
    device_class: motion
    
  - platform: gpio
    pin: GPIO2
    name: "Sound level"
    device_class: sound
```
你可以通过 [点击这里](https://esphome.io/components/display/#display-engine) 探索更多关于显示组件和 ESPHome 强大的渲染与显示引擎的内容。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/46.jpg"style={{width:700, height:'auto'}}/></div> -->

## ✨ 贡献者项目

- 此项目由 Seeed Studio [贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) 支持。
- 感谢 [Zachary 的努力](https://github.com/Seeed-Studio/wiki-documents/issues/603)，你的工作将会被 [展示](https://wiki.seeedstudio.com/Honorary-Contributors/)。

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供不同的支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>