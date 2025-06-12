---
description: XIAO 的 LED 驱动板是一款智能模块，旨在通过智能 LED 灯定制您的空间。
title: XIAO 的 LED 驱动板
keywords:
- xiao
- 灯光
- LED
image: https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/LED_Driver_Board_for_Seeed_Studio_XIAO.webp
slug: /cn/led_driver_board
last_update: 
  date: 05/21/2025
  author: Carla
---

# XIAO 的 LED 驱动板入门指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/dimension.jpg" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LED-Driver-Board-for-Seeed-Studio-XIAO-p-6451.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div><br />

XIAO 的 LED 驱动板是一款紧凑而强大的解决方案，支持 5V 和 12V LED 灯条，包括流行的可寻址 RGB LED，如 NeoPixel WS2812、WS2813、WS2815。它兼容所有 XIAO 板，通过使用 XIAO ESP32 系列实现 WLED 和 Home Assistant 的智能控制和自动化，同时提供灵活的电源选项和全面的保护，确保您的照明设置安全可靠。

## 简介

### 特性

- **广泛的 LED 兼容性**

    多功能驱动器支持 **5V/3A** 和 **12V/2A** LED 灯条，内置电源调节。兼容单色和可寻址 RGB LED，包括 NeoPixel **WS2811、WS2812(B)、WS2813、WS2815、SK6812 以及其他 1-wire 协议 LED**，提供广泛的照明选择。

- **XIAO 兼容性实现智能控制** 
 
    专为所有 [Seeed Studio XIAO 板](https://www.seeedstudio.com/xiao-series-page)设计。与 XIAO ESP32 系列（ESP32-C3/S3/C6）搭配使用时，可通过以下方式解锁智能功能：
    - **[WLED](https://kno.wled.ge/)** 应用支持 - 控制颜色、效果、亮度，并创建自定义动画（强烈推荐 [XIAO ESP32C3](https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html)）
    - **[Home Assistant](https://www.home-assistant.io/)** 通过 ESPHome 集成 - 实现远程控制、自动化和智能家居场景

- **Grove 生态系统兼容性**

    板载即插即用 Grove 接口兼容超过 400 个 Seeed Studio 模块，使您能够轻松增强照明与环境和运动的交互，实现更智能、更个性化的效果：
    - `用于 AI 视觉检测` 

        [Grove - Vision AI Module V2](https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html)

        [Grove 智能红外手势传感器 (PAJ7660)](https://www.seeedstudio.com/Grove-Smart-IR-Gesture-Sensor-p-5721.html)

    - `用于温度和湿度检测` 

        [Grove - 温湿度传感器 (DHT11)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html)

        [Grove - AHT20 I2C 工业级温湿度传感器](https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html)

        [Grove - 温湿度传感器 (SHT31)](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp-Humi-Sensor-SHT35.html)
    
    - `用于运动检测`

        [Grove - PIR运动传感器](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html)

        [Grove - 三轴模拟加速度计](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-ADXL335.html)

        [Grove - IMU 9DOF (ICM20600+AK09918)](https://www.seeedstudio.com/Grove-IMU-9DOF-ICM20600-AK09918.html)

    - **[`以及更多 400+`](https://wiki.seeedstudio.com/Grove_System/)**


### 规格

<table style={{textAlign:'center'}}>
	<tr>
        <th>项目</th>
        <th>详情</th>
	</tr>
    <tr>
        <td>电源输入</td>
        <td>DC 12V/2A</td>
    </tr>
    <tr>
        <td>LED 电源支持</td>
        <td>DC 12V / DC 5V</td>
    </tr>
    <tr>
        <td>工作电流</td>
        <td>工作电流</td>
    </tr>
    <tr>
        <td>LED 连接器</td>
        <td>4 针 3.81mm 螺丝端子块连接器：<br></br>12V | 5V | A0 | GND</td>
    </tr>
    <tr>
        <td>Grove I²C 连接器</td>
        <td>D5 | D4 | 5V | GND</td>
    </tr>
    <tr>
        <td>用户按钮</td>
        <td>D3</td>
    </tr>
    <tr>
        <td>用户针脚</td>
        <td>SPI x1, Uart x1, Digital x2</td>
    </tr>
</table>



### 硬件概览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/hardware_overview.png" style={{width:1000, height:'auto'}}/></div>

#### 适配电源输入

- [电源适配器，12V/2A/24W，欧标插头，DC 输出](https://www.seeedstudio.com/Power-Adapter-12V-2A-EU-p-5732.html)
- [电源适配器，12V/2A/24W，美标插头，DC 输出](https://www.seeedstudio.com/Power-Adapter-12V-2A-US-p-5731.html)
- 其他 DC 12V 电源适配器，插头规格为 **5.5mm x 2.1mm x 10±0.3mm**
- DC 12V 电线
#### 支持的 LED 指南

<div class="table-center">
	<table style={{textAlign:'center'}}>
		<tr>
            <th>产品</th>
            <th>名称</th>
            <th>工作电压</th>
            <th>连接方式</th>
		</tr>
        <tr>
            <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-WS2813-Mini.png
            " style={{width:150, height:'auto'}}/></td>
            <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-WS2813-Mini-p-4269.html">Grove - RGB LED (WS2813 Mini)</a></td>
            <td>5V</td>
            <td>Grove</td>
        </tr>
        <tr>
            <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-Stick-10-WS2813-Mini.png
            " style={{width:150, height:'auto'}}/></td>
            <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-10-WS2813-Mini.html">Grove - RGB LED Stick (10-WS2813 Mini)</a></td>
            <td>5V</td>
            <td>Grove</td>
        </tr>
        <tr>
            <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-Stick-15-WS2813-Mini.png
            " style={{width:150, height:'auto'}}/></td>
            <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-15-WS2813-Mini-p-4270.html">Grove - RGB LED Stick (15-WS2813 Mini)</a></td>
            <td>5V</td>
            <td>Grove</td>
        </tr>
        <tr>
            <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-Stick-20-WS2813-Mini.png
            " style={{width:150, height:'auto'}}/></td>
            <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-20-WS2813-Mini-p-4271.html">Grove - RGB LED Stick (20-WS2813 Mini)</a></td>
            <td>5V</td>
            <td>Grove</td>
        </tr>
        <tr>
            <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-Ring-16-WS2813-Mini.png
            " style={{width:150, height:'auto'}}/></td>
            <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-16-WS2813-Mini-p-4201.html">Grove - RGB LED Ring (16-WS2813 Mini)</a></td>
            <td>5V</td>
            <td>Grove</td>
        </tr>
        <tr>
            <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-Ring-20-WS2813-Mini.png
            " style={{width:150, height:'auto'}}/></td>
            <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-20-WS2813-Mini.html">Grove - RGB LED Ring (20-WS2813 Mini)</a></td>
            <td>5V</td>
            <td>Grove</td>
        </tr>
        <tr>
            <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-Ring-24-WS2813-Mini.png
            " style={{width:150, height:'auto'}}/></td>
            <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-24-WS2813-Mini-p-4202.html">Grove - RGB LED Ring (24-WS2813 Mini)</a></td>
            <td>5V</td>
            <td>Grove</td>
        </tr>
        <tr>
            <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-Ultimate-RGB-LED-Ring.png
            " style={{width:150, height:'auto'}}/></td>
            <td><a href="https://www.seeedstudio.com/Grove-Ultimate-RGB-LED-Ring-p-4203.html">Grove - Ultimate RGB LED Ring</a></td>
            <td>5V</td>
            <td>Grove</td>
        </tr>
        <tr>
            <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Digital-RGB-LED-Flexi-Strip-30-LED-1-Meter.png
            " style={{width:150, height:'auto'}}/></td>
            <td><a href="https://www.seeedstudio.com/Digital-RGB-LED-Flexi-Strip-30-LED-1-Meter-p-1665.html">Grove - WS2813B RGB LED Flexi-Strip 30 LED/m - 1m</a></td>
            <td>5V</td>
            <td>端子块</td>
        </tr>
        <tr>
            <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Digital-RGB-LED-Flexi-Strip-60-LED-1-Meter.png
            " style={{width:150, height:'auto'}}/></td>
            <td><a href="https://www.seeedstudio.com/WS2813B-Digital-RGB-LED-Flexi-Strip-60-LED-1-Meter-p-2817.html">Grove - WS2813B RGB LED Flexi-Strip 60 LED/m - 1m</a></td>
            <td>5V</td>
            <td>端子块</td>
        </tr>
        <tr>
            <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/RGB-LED-Strip-Waterproof-30-LED-m-1m.png
            " style={{width:150, height:'auto'}}/></td>
            <td><a href="https://www.seeedstudio.com/Grove-WS2813-RGB-LED-Strip-Waterproof-30-LED-m-1m.html">Grove - WS2813 RGB LED Strip Waterproof - 30 LED/m - 1m</a></td>
            <td>5V</td>
            <td>Grove</td>
        </tr>
        <tr>
            <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/RGB-LED-Strip-Waterproof-60-LED-m-1m.png
            " style={{width:150, height:'auto'}}/></td>
            <td><a href="https://www.seeedstudio.com/Grove-WS2813-RGB-LED-Strip-Waterproof-60-LED-m-1m.html">Grove - WS2813 RGB LED Strip Waterproof - 60 LED/m - 1m</a></td>
            <td>5V</td>
            <td>Grove</td>
        </tr>  
	</table>
</div>

## 入门指南

此 LED 驱动板专为 Seeed Studio XIAO 系列设计。其功能因搭配的 XIAO 微控制器而异。例如，与 XIAO nRF52840 配合使用时，可以读取板载 IMU 数据以动态改变 LED 颜色。与 ESP32 系列板搭配时，可以集成到 Home Assistant 中，实现无缝智能家居控制。此外，与 XIAO ESP32-C3 配合使用时，它支持运行 WLED 以实现高级 LED 效果。请按照以下教程详细探索这些功能。

### 使用 Arduino

您需要为 XIAO 配置 Arduino 环境并添加板载包。

:::提示
如果这是您第一次使用 Arduino，我们强烈建议您参考 [Arduino 入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

#### 软件准备

**步骤 1.** 启动 Arduino 应用程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>下载 Arduino IDE</font></span></strong>
    </a>
</div>

**步骤 2.** 选择您的开发板型号并将其添加到 Arduino IDE。

- 如果您希望使用 **Seeed Studio XIAO SAMD21** 进行后续操作，请参考 **[此教程](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software)** 完成添加。

- 如果您希望使用 **Seeed Studio XIAO RP2040** 进行后续操作，请参考 **[此教程](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup)** 完成添加。

- 如果您希望使用 **Seeed Studio XIAO RP2350** 进行后续操作，请参考 **[此教程](https://wiki.seeedstudio.com/xiao_rp2350_arduino/#setting-up-the-software)** 完成添加。

- 如果您希望使用 **Seeed Studio XIAO nRF52840** 进行后续操作，请参考 **[此教程](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup)** 完成添加。

- 如果您希望使用 **Seeed Studio XIAO ESP32C3** 进行后续操作，请参考 **[此教程](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started#software-setup)** 完成添加。

- 如果您希望使用 **Seeed Studio XIAO ESP32C6** 进行后续操作，请参考 **[此教程](https://wiki.seeedstudio.com/xiao_esp32c6_getting_started/#software-preparation)** 完成添加。

- 如果您希望使用 **Seeed Studio XIAO ESP32S3** 进行后续操作，请参考 **[此教程](http://wiki.seeedstudio.com/xiao_esp32s3_getting_started#software-preparation)** 完成添加。

- 如果您希望使用 **Seeed Studio XIAO RA4M1** 进行后续操作，请参考 **[此教程](https://wiki.seeedstudio.com/getting_started_xiao_ra4m1/#software-preparation)** 完成添加。

- 如果您希望使用 **Seeed Studio XIAO MG24** 进行后续操作，请参考 **[此教程](https://wiki.seeedstudio.com/xiao_mg24_getting_started/#software-preparation)** 完成添加。

**步骤 3.** 安装所需的库。

- 打开 Arduino IDE，导航到 **Sketch > Include Library > Manage Libraries...**，在 Arduino 库管理器中搜索库，输入关键字 "**Adafruit_NeoPixel**"，并安装最新版本。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/boardurl6.png" style={{width:800, height:'auto'}}/></div>

- [下载 Seeed_Arduino_LSM6DS3 库](https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3)为 zip 文件，打开 Arduino IDE，导航到 **Sketch > Include Library > Add .ZIP Library...** 并打开下载的 zip 文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/LSM6DS3-github-zip.png" style={{width:800, height:'auto'}}/></div>

:::注意

MG24 当前不支持标准 NeoPixel 库。然而，Silicon Labs 在官方 MG24 核心中提供了一个替代方案：<strong>[ezWS2812](https://github.com/SiliconLabs/arduino/tree/refs/heads/main)</strong> 驱动程序，该驱动程序通过硬件 SPI 或 GPIO 支持 WS2812 LED。您可以在 <strong>[这里](https://forum.seeedstudio.com/t/driving-an-led-strip-with-xiao-mg24-neopixel-fastled-ezws2812/284695)</strong> 找到更多详细信息。

:::

#### 简单示例

**步骤 1.** 硬件准备

<table align="center">
	<tr>
		<th>Seeed Studio XIAO RP2350</th>
        <th>适用于 XIAO 的 LED 驱动板</th>
        <th>Grove - RGB LED Stick (15-WS2813 Mini)</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/2-102010550%20XIAO%20RP2350-45font.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/45-front.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-Stick-15-WS2813-Mini.png" style={{width:400, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html">
            <strong><span><font color={'FFFFFF'} size={"4"}>立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/LED-Driver-Board-for-Seeed-Studio-XIAO-p-6451.html">
            <strong><span><font color={'FFFFFF'} size={"4"}>立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-15-WS2813-Mini-p-4270.html">
            <strong><span><font color={'FFFFFF'} size={"4"}>立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

**步骤 2.** 按如下所示连接 Seeed Studio XIAO RP2350、LED 驱动板（适用于 XIAO）和 Grove - RGB LED Stick (15-WS2813 Mini)：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/rp2350_ledDriver_led.jpg" style={{width:700, height:'auto'}}/></div>

**步骤 3.** 以下示例程序用于控制包含 3 个 NeoPixel 的 LED，使每个灯珠分别显示 **红色**、**绿色** 和 **蓝色**。

```cpp
#include <Adafruit_NeoPixel.h>

// Arduino 上连接到 NeoPixel 的引脚
#define PIN D5

// 连接到 Arduino 的 NeoPixel 数量
#define NUMPIXELS 3 

// 在设置 NeoPixel 库时，我们需要告诉它像素数量和使用的引脚。
// 注意，对于较旧的 NeoPixel 灯条，可能需要更改第三个参数 —— 
// 请参阅 strandtest 示例以获取更多可能值的信息。
Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  pixels.begin(); // 初始化 NeoPixel 灯条对象
}

void loop() {
  pixels.clear(); // 将所有像素颜色设置为“关闭”

  // pixels.Color() 接受 RGB 值，范围从 0,0,0 到 255,255,255
  // 灯条中的第一个 NeoPixel 是 #0，第二个是 1，以此类推
  pixels.setPixelColor(0, pixels.Color(255, 0, 0)); 
  pixels.setPixelColor(1, pixels.Color(0, 255, 0));
  pixels.setPixelColor(2, pixels.Color(0, 0, 255));
  // pixels.setBrightness() 接受亮度值，范围从 0 到 255
  pixels.setBrightness(255);

  pixels.show();   // 将更新后的像素颜色发送到硬件
}
```

上传程序并为 LED 驱动板供电，如果一切正常，您将看到如下效果：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/rp2350_ledDriver_led_result.jpg" style={{width:700, height:'auto'}}/></div>

#### 动作-颜色同步 LED

**步骤 1.** 硬件准备

<table align="center">
	<tr>
		<th>XIAO nRF52840</th>
        <th>LED 驱动板（适用于 XIAO）</th>
        <th>WS2812 LED</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102010469-seeed-studio-xiao-nrf52840-sense-45font-logo.jpg" style={{width:300, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/45-front.jpg" style={{width:300, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ws2812_led.png" style={{width:300, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/LED-Driver-Board-for-Seeed-Studio-XIAO-p-6451.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href=""></a>
		</div></td>
	</tr>
</table>

**步骤 2.** 按如下所示连接 Seeed Studio XIAO nRF52840、LED 驱动板（适用于 XIAO）和 WS2812 LED：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/nRF52840_ledDriver_led_result.jpg" style={{width:700, height:'auto'}}/></div>

**步骤 3.** 以下代码通过读取 XIAO nRF52840 板载 LSM6DS3 加速度传感器的数据，并根据当前加速度值实时更改 LED 灯条的颜色。

```cpp
#include <Arduino.h>
#include "LSM6DS3.h"              
#include <Adafruit_NeoPixel.h>     
#include "Wire.h"                  
#include "math.h"                  

// 定义连接到 NeoPixel 数据输入的引脚
#define PIN A0

// NeoPixel LED 的总数量
#define NUMPIXELS 300

// 创建一个 NeoPixel 灯条对象
Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

// 加速度计数据变量
float ax = 0;
float ay = 0;
float az = 0;

// RGB 颜色分量
uint8_t r = 0;
uint8_t g = 0;
uint8_t b = 0;

// 打包的 24 位 RGB 颜色值
uint32_t packedRGB = 0;

// 创建一个 LSM6DS3 IMU 的实例，使用 I2C 模式，地址为 0x6A
LSM6DS3 myIMU(I2C_MODE, 0x6A);

void setup() {

    Serial.begin(9600);

    // 初始化 IMU 传感器并检查错误
    if (myIMU.begin() != 0) {
        Serial.println("设备错误"); 
    } else {
        Serial.println("设备正常！");   
    }

    // 初始化 NeoPixel 灯条
    pixels.begin();
}

void loop() {
    // 从 IMU 读取加速度值
    ax = myIMU.readFloatAccelX();
    ay = myIMU.readFloatAccelY();
    az = myIMU.readFloatAccelZ();

    // 将加速度值（-1g 到 +1g）映射到 RGB 值（0 到 255）
    // 以 128 为中心，允许正负变化
    r = constrain(ax * 100 + 128, 0, 255);
    g = constrain(ay * 100 + 128, 0, 255);
    b = constrain(az * 100 + 128, 0, 255);

    // 将 RGB 分量组合成一个 24 位颜色值
    packedRGB = (r << 16) | (g << 8) | b;

    // 清除所有现有像素
    pixels.clear();

    // 用计算出的颜色填充所有 LED
    pixels.fill(packedRGB, 0, NUMPIXELS);
    pixels.setBrightness(255);
    pixels.show();
    delay(100);
}
```

上传程序并为 LED 驱动板供电，如果一切正常，您将看到如下效果：

<div style={{textAlign:'center'}}>
<video width={225} height={400} controls preload> 
  <source src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/nRF52840_ledDriver_led_result.mp4" />
  <source src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/nRF52840_ledDriver_led_result.webm" />
</video>
</div>

当你摇动模块时，灯带的颜色会发生变化。摇动越剧烈，颜色越亮。

### 使用 ESPHome 与 Home Assistant 互动

#### 硬件准备

<div class="table-center">
<table style={{textAlign:'center'}}>
    <tr>
        <th>Home Assistant 设备</th>
    </tr>
    <tr>
        <td><img src="https://files.seeedstudio.com/wiki/Home-Assistant/1.png" style={{width:300, height:'auto'}}/></td>
    </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://wiki.seeedstudio.com/home_assistant_topic/#-devices-for-home-assistant-">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    		</a>
		</div></td>
    </tr>
</table>
</div>

#### 软件准备

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/2.png" style={{width:700, height:'auto'}}/></div>

[ESPHome](https://esphome.io/) 是一个旨在让管理 ESP 板尽可能简单的工具。它读取 YAML 配置文件并创建自定义固件，然后安装到你的 ESP 设备上。在 ESPHome 的配置中添加的设备或传感器会自动显示在 Home Assistant 的用户界面中。ESPHome 可以帮助你连接并将数据发送到 Home Assistant 设备。

:::note
如果这是你第一次使用 Home Assistant 和 ESPHome，可以按照 <strong>[这里](https://www.home-assistant.io/installation/)</strong> 的分步指南安装 Home Assistant。
:::

ESPHome 可作为 **Home Assistant 插件**，可以通过插件商店轻松安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/1.png" style={{width:900, height:'auto'}}/></div>

- **步骤 1.** 点击 **安装**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/2.png" style={{width:900, height:'auto'}}/></div>

- **步骤 2.** 启用所有选项并点击 **启动**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/3.png" style={{width:900, height:'auto'}}/></div>

如果 ESPHome 成功加载，你将看到以下窗口：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/4.png" style={{width:900, height:'auto'}}/></div> 

#### 温度-颜色同步 LED

**步骤 1.** 硬件准备

<table align="center" style={{textAlign:'center', overflowX: 'scroll', border: '1px solid #ccc', }}>
	<tr>
		<th>XIAO ESP32S3</th>
        <th>LED 驱动板（适用于 XIAO）</th>
        <th>Grove - 温湿度传感器 (DHT11)</th>
        <th>WS2812 LED</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991114-xiao-esp32s3-font_1.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/45-front.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove-temperature-humidity-sensor-dht11-preview.png" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ws2812_led.png" style={{width:400, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/LED-Driver-Board-for-Seeed-Studio-XIAO-p-6451.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href=""></a>
		</div></td>
	</tr>
</table>

**步骤 2.** 按如下所示连接 Seeed Studio XIAO ESP32S3、LED 驱动板和 WS2812 LED：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/esp32s3_ledDriver_led.jpg" style={{width:700, height:'auto'}}/></div>

**步骤 3.** 打开 ESPHome 页面，点击 **+ 新设备**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/5.png" style={{width:900, height:'auto'}}/></div>

**步骤 4.** 点击 **继续**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/6.png" style={{width:900, height:'auto'}}/></div>

**步骤 5.** 为设备输入一个 **名称**，并输入 WiFi 凭据，例如 **网络名称** 和 **密码**。然后点击 **下一步**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/1.png" style={{width:400, height:'auto'}}/></div>

**步骤 6.** 选择 **ESP32-S3** 并点击

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/2.png" style={{width:400, height:'auto'}}/></div>

**步骤 7.** 点击 **SKIP**，因为我们将手动配置此开发板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/14.png" style={{width:400, height:'auto'}}/></div>

**步骤 8.** 点击新创建的开发板下的 **EDIT**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/3.png" style={{width:400, height:'auto'}}/></div>

**步骤 9.** 将以下代码复制到 .yaml 文件的末尾，XIAO ESP32S3 从 DHT11 传感器读取温度，并根据温度与目标值的差异改变 RGB LED 的颜色，使用蓝色表示冷，红色表示热，绿色表示正常。

```yaml
# DHT11 温湿度传感器
sensor:
  - platform: dht
    pin: GPIO6
    model: DHT11  # 如果使用其他型号，请更改为 DHT22 或 AM2302
    temperature:
      name: "Temperature"
      id: temp_sensor
    humidity:
      name: "Humidity"
    update_interval: 3s # 每 3 秒读取新值

# RGB LED (WS2812 单颗 LED)
light:
  - platform: neopixelbus
    variant: ws2813  # ⚠️ 根据实际 LED 类型调整 (例如 ws2812, ws2813, sk6812)
    type: GRB  # 颜色顺序 (绿色-红色-蓝色)
    pin: GPIO1
    num_leds: 50 # NeoPixel LED 的总数量
    name: "Temperature Color LED"
    id: rgb_led
    restore_mode: ALWAYS_ON
    default_transition_length: 0s

# 可调节的中心温度阈值
number:
  - platform: template
    name: "Target Temperature" # 中心温度值
    id: target_temp
    optimistic: true 
    min_value: 0 
    max_value: 40
    step: 0.1
    initial_value: 20.0 # 默认中心温度 (°C)

  - platform: template
    name: "Temperature Tolerance" # 中心温度的容差
    id: temp_tolerance
    optimistic: true
    min_value: 0
    max_value: 10
    step: 0.1
    initial_value: 5.0 # 默认容差值 (°C)

# 每 3 秒更新 LED 颜色：
# - 如果温度低于中心值减去容差，显示蓝色；
# - 如果温度高于中心值加上容差，显示红色；
# - 如果温度接近中心值，显示绿色；
# - 在过渡范围内显示蓝-绿-红的渐变；
# - 如果温度不可用，LED 闪烁紫色以指示传感器错误。

interval:
  - interval: 3s
    then:
      - lambda: |-
          float t = id(temp_sensor).state;
          float center = id(target_temp).state;
          float tolerance = id(temp_tolerance).state;
          float r = 0.0, g = 0.0, b = 0.0;
          float ratio = 0.0;

          if (isnan(t)) {
            // 闪烁紫色以指示温度缺失
            static bool blink = false;
            blink = !blink;
            auto call = id(rgb_led).turn_on();
            call.set_rgb(blink ? 0.5 : 0.0, 0.0, blink ? 0.5 : 0.0);
            call.perform();
            return;
          }

          // 根据温度计算 RGB 值
          if (t <= (center - tolerance)) {
            b = 1.0;
            g = 0.0;
          } else if (t >= (center + tolerance)) {
            r = 1.0;
            g = 0.0;
          } else if (t <= center) {
            ratio = (center - t) / tolerance;
            b = ratio;
            g = 1.0 - ratio;
          } else {
            ratio = (t - center) / tolerance;
            r = ratio;
            g = 1.0 - ratio;
          }

          // 更新 LED
            auto call = id(rgb_led).turn_on();
            call.set_rgb(r, g, b);
            call.perform();
```

**步骤 10.** 点击右上角的 Install 按钮。然后选择最后一项 **Manual download**，选择 **Modern format**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/31.png" style={{width:500, height:'auto'}}/></div>

此过程需要较长时间来下载和编译，请耐心等待。一旦准备就绪，固件将自动下载到您的计算机。

**步骤 11.** 使用 [ESPhome Web 工具](https://web.esphome.io/?dashboard_install) 将固件上传到 XIAO ESP32S3，点击 **CONNECT**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/34.png" style={{width:800, height:'auto'}}/></div>

在弹出窗口中选择 XIAO ESP32 的串口，点击 **INSTALL**，然后选择从上述步骤下载的 .bin 文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/35.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/38.png" style={{width:500, height:'auto'}}/></div>

**步骤 11.** 安装成功后，您可以看到如下界面：

<div style={{textAlign:'center'}}>
<video width={600} height={338} controls preload> 
  <source src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ha_led_result.mp4" />
  <source src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ha_led_result.webm" />
</video>
</div>

当冷空气吹向温湿度传感器时，随着温度下降，灯带的颜色会逐渐从红色变为蓝色。

**步骤 12.** 添加到 Dashboard

打开 **Setting** >> **Devices & Services**，您可以找到您的 ESPhome 设备，点击 **ADD** 并将其添加到仪表盘，您可以看到如下界面：

<div class="img-container" align="center">
    <img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ha_led1.png"/>
    <img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ha_led2.png"/>
    <img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ha_led3.png"/>
    <img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ha_led4.png"/>
    <img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ha_led5.png"/>
</div>

### 运行 WLED

#### 硬件准备

<table align="center">
	<tr>
		<th>XIAO ESP32C3</th>
        <th>适用于 XIAO 的 LED 驱动板</th>
        <th>WS2812 LED</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991054-seeed-studio-xiao-esp32c3-45font_1.jpg" style={{width:300, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/45-front.jpg" style={{width:300, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ws2812_led.png" style={{width:300, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/LED-Driver-Board-for-Seeed-Studio-XIAO-p-6451.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href=""></a>
		</div></td>
	</tr>
</table>

将 Seeed Studio XIAO nRF52840、适用于 XIAO 的 LED 驱动板和 WS2812 LED 按如下所示连接：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/esp32c3_ledDriver_led.jpg" style={{width:600, height:'auto'}}/></div>

#### 安装 WLED

**步骤 1.** 打开 <strong>[WLED 安装网页](https://install.wled.me/)</strong>，将 XIAO ESP32C3 连接到您的电脑，点击 **Install**，选择您的端口。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/wled_install.png" style={{width:800, height:'auto'}}/></div>

**步骤 2.** 安装成功后，需要配置设备的 WiFi，建议将您的 XIAO ESP32C3 和您的电脑/手机保持在同一局域网内。

**步骤 3.** 现在，您可以点击 **VISIT DEVICE** 来控制您的 LED 灯带。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/visit_device.png" style={{width:800, height:'auto'}}/></div>

**步骤 4.** 或者，您可以在手机应用市场安装 **WLED** 应用，并通过软件右上角的 + 号找到您的 LED 设备。

如果一切正常，您将看到如下效果：

<div style={{textAlign:'center'}}>
<video width={600} height={338} controls preload> 
  <source src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/wled_result.webm" />
  <source src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/wled_result.mp4" />
</video>
</div>

## 资源

- **[PDF]**: [LED驱动板适用于Seeed Studio XIAO原理图PDF](https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/LED_Driver_Board_for_Seeed_Studio_XIAO_SCH_PDF_20250417.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得流畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>