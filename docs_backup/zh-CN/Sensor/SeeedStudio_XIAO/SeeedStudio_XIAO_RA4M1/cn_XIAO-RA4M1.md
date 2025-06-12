---
title: 入门指南 Seeed Studio XIAO RA4M1
description: |
  XIAO RA4M1 - 基于 32 位 Renesas RA4M1 的最小开发板，支持 Arduino IDE，拥有 19 个 GPIO、RGB LED、CAN BUS、USB 2.0
image: https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/1-102010551-Seeed-Studio-XIAO-RA4M1.jpg
slug: /cn/getting_started_xiao_ra4m1
last_update:
  date: 05/15/2025
  author: Carla
keywords:
  - XIAO
  - RA4M1
sidebar_position: 0
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<!-- 产品描述 -->

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" 
    style={{ width: 480, height: 'auto', "border-radius": '12.8px' }} 
  />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1">
  <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
  </a>
</div><br></br>

## 简介

XIAO RA4M1 将 Renesas 的 RA4M1 芯片（32 位 ARM® Cortex®-M4 MCU，最高 48 MHz）集成到经典的 XIAO 外形中。这款开发板提供 256KB Flash、32KB SRAM、8KB EEPROM、USB 2.0 接口、复位和启动按钮、3 个 LED、14 位 A/D 转换器、12 位 D/A 转换器以及 CAN BUS 接口。它配备了板载充电电路和低功耗模式（最低 45μA），非常适合电池供电的应用。与 Arduino Uno R4 使用相同的 32 位 R7FA4M1AB3CFM 微控制器，原生兼容 Arduino IDE 和丰富的 XIAO 配件，是电子项目的完美起点。

### 特性

<!-- 关键特性列表 -->

- **流行的板载微控制器：** 搭载 Renesas RA4M1，32 位 ARM® Cortex®-M4 R7FA4M1AB3CFM MCU，运行频率最高可达 48 MHz，拥有 256 KB Flash 内存和 32 KB SRAM。
- **突出的板载资源：** 配备 14 位 ADC、12 位 DAC、CAN BUS、USB 2.0 和板载 RGB LED。
- **新增 8 个 IO：** 相较于之前的 XIAO 板，背面新增 8 个 IO 引脚（总计 19 个 GPIO），支持更复杂的应用。
- **强大的安全功能：** 内置硬件加密、安全启动、密钥存储等功能，确保应用安全。
- **软件兼容性：** 完全兼容 Arduino IDE，支持无缝项目开发和原型制作。
- **高效的电源设计：** 提供 4 种工作模式，深度睡眠功耗低至 45μA，并支持锂电池充电管理。
- **紧凑的拇指大小设计：** 尺寸为 21 x 17.8mm，采用 Seeed Studio 的经典 XIAO 外形，非常适合空间受限的应用。
- **适合量产：** 表面贴装器件（SMD）设计，所有组件位于正面，两侧带有焊盘孔，便于高效量产。

### 规格

<!-- 技术规格 | 表格 | 或列表 -->

<table>
    <thead>
        <tr>
            <th>产品</th>
            <th>XIAO RA4M1</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th rowspan="2">处理器</th>
            <td><a href="https://www.renesas.com/us/en/products/microcontrollers-microprocessors/ra-cortex-m-mcus/ra4m1-32-bit-microcontrollers-48mhz-arm-cortex-m4-and-lcd-controller-and-cap-touch-hmi">Renesas RA4M1</a>
            </td>
        </tr>
        <tr>
            <td>48-MHz Arm® Cortex®-M4 核心</td>
        </tr>
        <tr>
            <th>RAM</th>
            <td>32 KB SRAM</td>
        </tr>
        <tr>
            <th>Flash</th>
            <td>256 KB</td>
        </tr>
        <tr>
            <th>LED</th>
            <td>1 用户 LED，1 电源 LED，1 RGB LED</td>
        </tr>
        <tr>
            <th>接口</th>
            <td>19 引脚：14x 模拟，19x 数字，2x IIC，2x UART，2x SPI</td>
        </tr>
        <tr>
            <th>按钮</th>
            <td>1 RESET 按钮，1 BOOT 按钮</td>
        </tr>
        <tr>
            <th>安全性</th>
            <td>AES128/256</td>
        </tr>
        <tr>
            <th>低功耗</th>
            <td>45μA</td>
        </tr>
        <tr>
            <th>软件兼容性</th>
            <td>Arduino IDE</td>
        </tr>
        <tr>
            <th>工作温度</th>
            <td>-20°C-70°C</td>
        </tr>
        <tr>
            <th>尺寸</th>
            <td>21x17.8 mm</td>
        </tr>
        <tr>
            <th>电源</th>
            <td>Type-C: 5V<br />BAT: 3.8V</td>
        </tr>
    </tbody>
</table>

### 硬件概览

在开始之前，了解产品的一些基本参数非常重要。以下表格提供了有关 Seeed Studio XIAO RA4M1 特性的详细信息。

<!-- 硬件相关 -->

<!-- 引脚等的定义 -->
<table>
	<tr>
	    <th>XIAO RA4M1 正面指示图</th>
	</tr>
    <tr>
        <br />
        <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/XIAO-RA4M1-components.png" style={{width:380, height:'auto'}}/></div>
        <br />        
    </tr>
    <tr>
        <th>XIAO RA4M1 引脚列表</th>
    </tr>
    <tr>
        <br />
        <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/XIAO-RA4M1-pinout.png" style={{width:880, height:'auto'}}/></div>
        <br />
    </tr>
</table>

## 入门指南

### 硬件准备

您需要准备以下物品：

- 1 x [Seeed Studio XIAO RA4M1](https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1)
- 1 x 电脑
- 1 x USB Type-C 数据线

<br></br>

:::tip
有些 USB 数据线只能供电，无法传输数据。如果您没有 USB 数据线或不确定您的 USB 数据线是否可以传输数据，可以查看 [Seeed USB Type-C 支持 USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)。
:::

### 软件准备

XIAO RA4M1 推荐的编程工具是 Arduino IDE，因此作为软件准备的一部分，您需要完成 Arduino 的安装。

:::tip
如果这是您第一次使用 Arduino，我们强烈建议您参考 [Arduino 入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 根据您的操作系统下载并安装稳定版本的 Arduino IDE。

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>下载 Arduino IDE</font></span></strong>
    </a>
</div>

- **步骤 2.** 启动 Arduino 应用程序。

- **步骤 3.** 将 RA4M1 开发板包添加到您的 Arduino IDE。

    进入 **文件 > 首选项**，在 **"附加开发板管理器 URLs"** 中填写以下 URL：
    *<https://files.seeedstudio.com/arduino/package_renesas_1.2.0_index.json>*
    
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/arduino_preference.png" style={{width:800, height:'auto'}}/></div>

    进入 **工具 > 开发板 > 开发板管理器...**，在搜索框中输入关键字 **RA4M1**，选择最新版本的 **Seeed Renesas Board**，并安装。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/board_manager.png" style={{width:600, height:'auto'}}/></div>
- **步骤 4.** 选择您的开发板和端口。

    在 Arduino IDE 顶部，您可以在左侧的开发板中搜索 **xiao**，选择 XIAO_RA4M1，并直接选择端口。
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/select_port.png" style={{width:800, height:'auto'}}/></div>


## BootLoader 模式

有时，使用错误的程序可能会导致 XIAO 丢失端口或无法正常工作。常见问题包括：

- XIAO 已连接到计算机，但未找到端口号。
- XIAO 已连接并显示端口号，但程序上传失败。

当您遇到上述两种情况时，可以尝试将 XIAO 置于 BootLoader 模式，这可以解决大多数设备无法识别和上传失败的问题。具体方法如下：

- **方法 1.** 按住 XIAO RA4M1 上的 `BOOT` 按钮并保持不放。
- **方法 2.** 按住 `BOOT` 按钮的同时，通过数据线连接到计算机。连接到计算机后松开 `BOOT` 按钮。

## 重置

当程序运行异常时，您可以在上电时按一次 `Reset` 按钮，让 XIAO 重新执行已上传的程序。
当您在上电时按住 `BOOT` 键，然后按一次 `Reset` 键，也可以进入 BootLoader 模式。

## 运行您的第一个 Blink 程序

到目前为止，我相信您已经对 XIAO RA4M1 的功能和硬件有了很好的了解。接下来，让我们以最简单的 Blink 程序为例，为您的 XIAO RA4M1 执行第一个闪烁！

- **步骤 1.** 启动 Arduino 应用程序。
- **步骤 2.** 进入 **文件 > 示例 > 01.Basics > Blink**，打开程序。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/blink_code.png" style={{width:700, height:'auto'}}/></div>

- **步骤 3.** 将开发板型号选择为 **XIAO RA4M1**，并选择正确的端口号上传程序。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/choose_board.png" style={{width:700, height:'auto'}}/></div>

程序成功上传后，您将看到以下输出消息，并可以观察到 XIAO RA4M1 右侧的橙色 LED 正在闪烁。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/blink.gif" style={{width:700, height:'auto'}}/></div>

恭喜您，您已经学会了如何为 XIAO RA4M1 编写和上传程序！
:::note
当 XIAO RA4M1 上的用户 LED 引脚设置为高电平时，LED 将熄灭；当引脚设置为低电平时，LED 将点亮。
:::

## 玩转 RGB LED
XIAO RA4M1 配备了一个内置的 RGB LED，您可以对其进行控制，以下是一个如何在红色、绿色和蓝色之间平滑变换 LED 颜色的示例。

- **步骤 1.** 下载 `Adafruit_NeoPixel` 库

进入 **草图 > 包含库 > 管理库...**，搜索 **Adafruit_NeoPixel**，安装最新版本。

- **步骤 2.** 将以下代码复制到一个新草图中：

```cpp
#include <Adafruit_NeoPixel.h>

#define LED_PIN RGB_BUILTIN  // 定义内置 RGB LED 的引脚
#define NUM_PIXELS 1         // WS2812 LED 的数量

Adafruit_NeoPixel pixels(NUM_PIXELS, LED_PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  pinMode(PIN_RGB_EN, OUTPUT); // 设置电源引脚
  digitalWrite(PIN_RGB_EN, HIGH); // 打开 LED 电源
  pixels.begin();  // 初始化 NeoPixel 库
}

void loop() {
    // 从红色过渡到绿色
  for (int i = 0; i <= 255; i++) {
    pixels.setPixelColor(0, pixels.Color(255 - i, i, 0));  // 红色减少，绿色增加
    pixels.show();
    delay(10);  // 调整延迟以实现平滑过渡
  }

  // 从绿色过渡到蓝色
  for (int i = 0; i <= 255; i++) {
    pixels.setPixelColor(0, pixels.Color(0, 255 - i, i));  // 绿色减少，蓝色增加
    pixels.show();
    delay(10);  // 调整延迟以实现平滑过渡
  }

  // 从蓝色过渡到红色
  for (int i = 0; i <= 255; i++) {
    pixels.setPixelColor(0, pixels.Color(i, 0, 255 - i));  // 蓝色减少，红色增加
    pixels.show();
    delay(10);  // 调整延迟以实现平滑过渡
  }
}

```
- **步骤 3.** 将开发板型号选择为 **XIAO RA4M1**，并选择正确的端口号上传程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/rgb_led.gif" style={{width:600, height:'auto'}}/></div>

## 电池与电源管理

是否可以在没有额外组件的情况下读取电池电压？是的，使用 XIAO RA4M1，比以往更简单。在之前的 XIAO 系列成员中，例如 [XIAO ESP32C3](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/#check-the-battery-voltage)，读取电池电压需要手动通过电阻连接到 A0。

但是使用 XIAO RA4M1，这个过程变得更加简化。您现在可以直接使用 `BAT_DET_PIN/P105` 引脚读取电池电压水平，从而简化您的设计和开发。只需记住将 `BAT_READ_EN/P400` 引脚设置为高电平，因为这是启用电池电压读取所必需的。

- **步骤 1.** 硬件准备

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO RA4M1</th>
        <th>Seeed Studio 带 Grove OLED 的 XIAO 扩展底板</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

XIAO 扩展板上的 OLED 显示屏使用 I2C 协议，并通过板上的 I2C 电路连接到 XIAO 的 I2C 接口。因此，我们可以直接将 XIAO 插入扩展板并编程以在屏幕上显示内容。

- **步骤 2.** 安装 u8g2 库。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

- **步骤 3.** 复制以下代码并粘贴到 Arduino IDE 中。

```cpp
#include <Arduino.h>
#include <U8x8lib.h>
#include <Wire.h>

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ WIRE_SCL_PIN, /* data=*/ WIRE_SDA_PIN, /* reset=*/ U8X8_PIN_NONE);   // 无复位引脚的 OLED 显示屏

#define enablePin  BAT_READ_EN  // 用于启用电池电压读取的引脚
#define adcPin BAT_DET_PIN     // 模拟输入引脚（在您的情况下为 GPIO29）
const float referenceVoltage = 3.3;  // ADC 的参考电压
const float voltageDivider = 2.0;    // 分压器系数

void setup() {
  Serial.begin(9600);          // 初始化串口通信，波特率为 9600
  pinMode(enablePin, OUTPUT);  // 将启用引脚设置为输出
  digitalWrite(enablePin, HIGH); // 将引脚设置为高电平以启用电池电压读取
  u8x8.begin();
  u8x8.setFlipMode(1);   // 设置屏幕旋转模式，数字范围为 1 到 3，屏幕内容将旋转 180 度
  u8x8.setFont(u8x8_font_chroma48medium8_r);
}

void loop() {
  int rawValue = analogRead(adcPin);    // 读取模拟输入值
  float voltage = rawValue * (referenceVoltage / 1023.0) * voltageDivider; // 计算电压
  // 打印原始值和计算出的电压
  u8x8.setCursor(0, 0);
  u8x8.print("Raw value:0x");
  u8x8.print(rawValue, HEX);
  u8x8.setCursor(0, 2);
  u8x8.print("Voltage:");
  u8x8.print(voltage, 2);
  u8x8.print("V");

  delay(500); // 延迟 500 毫秒
}

```
- **步骤 4.** 将板卡型号选择为 **XIAO RA4M1**，并选择正确的端口号上传程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/voltage.png" style={{width:600, height:'auto'}}/></div>

## 资源

- 📄 **[PDF]** [RA4M1 数据手册](https://www.renesas.com/us/en/document/dst/ra4m1-group-datasheet)
- 📄 **[PDF]** [Seeed Studio XIAO RA4M1 原理图](https://files.seeedstudio.com/wiki/XIAO-R4AM1/res/XIAO-RA4M1_SCH_PDF_v1.0_240719.pdf)
- 📄 **[ZIP]** [KiCAD 库](https://files.seeedstudio.com/wiki/XIAO-R4AM1/res/XIAO-RA4M1_SCH%26PCB_v1.0_240719.zip)
- 🔗 **[Kicad]** [Seeed Studio XIAO RA4M1 封装库](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

## 故障排除

### 问题 1：焊接引脚时需要注意什么？

由于 XIAO RA4M1 的尺寸非常小，在焊接排针时请务必小心，不要将不同的引脚焊接在一起，也不要将焊锡粘到屏蔽罩或其他元件上。否则可能会导致 XIAO 短路或无法正常工作，由此引发的后果将由用户自行承担。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>