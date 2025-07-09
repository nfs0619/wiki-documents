---
description: 使用 L76-L GNSS 模块快速上手 XIAO
title: L76-L GNSS 模块适配 XIAO
keywords:
- gps
- gnss
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/gnss_for_xiao
last_update:
  date: 05/15/2025
  author: Stephen Lo
---

# L76-L GNSS 模块适配 XIAO

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

:::danger
此产品暂时搁置。
:::

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/Longan-Labs/XIAO_GPS/main/IMG/back.png" alt="pir" width={250} height="auto" /></p>

欢迎使用 L76-L GNSS 模块适配 XIAO ——这是 Seeed Studio XIAO 产品系列的最新成员。此 GNSS 模块不仅为您的项目提供精准定位功能，还能与 XIAO 主控制器无缝集成，使其成为一个强大的工具。无论您是在设计移动应用、追踪设备，还是希望为项目添加地理定位功能，这款模块都是您的首选。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/gnss_for_xiao">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 简介

### 特性

- 多星座支持：支持 GPS、GLONASS、Galileo 和 QZSS。
- 高性能：配备 33 个跟踪通道、99 个捕获通道和 210 个 PRN 通道。
- XIAO 兼容性：专为与 XIAO 主控制器无缝集成而设计。
- 灵活连接：除了与 XIAO 的连接，还提供 VCC、GND 等焊盘以适应更广泛的应用。

### 规格

- GNSS 类型：L76-L
- 支持的卫星系统：GPS、GLONASS、Galileo 和 QZSS。
- 连接端口：专为 XIAO 设计。
- XIAO 连接端口：D2/D3(TX/RX)
- 额外焊盘：VCC、GND、TX、RX

### 应用场景

- 移动应用：为您的移动应用提供精准的地理定位功能。
- 追踪设备：设计和构建定位与追踪设备。
- 地理定位功能：为您的项目添加地理定位功能。

## 快速上手

欢迎使用 L76-L GNSS 模块适配 XIAO 的快速上手指南。本指南旨在帮助您设置并开始使用与 XIAO nRF52840 主控制器配合的 GPS 扩展板。

### 硬件准备

#### 焊接针脚

收到产品后，您需要进行一些焊接操作。我们随包装提供了两个针脚，您需要将这些针脚焊接到扩展板上。

#### 连接 XIAO 到扩展板

焊接完成后，您可以将扩展板连接到 XIAO 主控制器。

### 软件准备

#### EspSoftwareSerial（仅适用于 XIAO ESP32 系列）

如果您使用 XIAO ESP32 系列作为主控，则需要单独下载软串口库。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://www.arduino.cc/reference/en/libraries/espsoftwareserial/">
    <strong><span><font color={'FFFFFF'} size={"4"}>下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

您可以直接在 Arduino IDE 的库管理器中搜索并安装 `EspSoftwareSerial` 库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/gnss-xiao/1.png" style={{width:400, height:'auto'}}/></div>

:::note
如果您使用其他系列的 XIAO，则无需单独下载软串口库。
:::

#### TinyGPSPlus

我们还需要一个库来解析扩展板报告的 GPS 数据消息。您可以通过点击下方按钮下载 **TinyGPSPlus** 库。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://www.arduino.cc/reference/en/libraries/tinygpsplus/">
    <strong><span><font color={'FFFFFF'} size={"4"}>下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

您可以直接在 Arduino IDE 的库管理器中搜索并安装 `TinyGPSPlus` 库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/gnss-xiao/2.png" style={{width:400, height:'auto'}}/></div>

## XIAO nRF52840 示例

L76-L 模块每秒通过串口输出一次 GPS 信息。在此示例中，我们打印从串口接收到的内容。您将能够看到大量信息，包括时间、卫星数量以及经纬度。以下是代码示例：

```cpp
#include <TinyGPSPlus.h>
#include <SoftwareSerial.h>

static const int RXPin = D3, TXPin = D2;
static const uint32_t GPSBaud = 9600;

// TinyGPSPlus 对象
TinyGPSPlus gps;

// 与 GPS 设备的串口连接
SoftwareSerial ss(RXPin, TXPin);

void setup()
{
    Serial.begin(115200);
    ss.begin(GPSBaud);

    Serial.println(F("DeviceExample.ino"));
    Serial.println(F("一个简单的 TinyGPSPlus 示例，连接了一个 GPS 模块"));
    Serial.print(F("测试 TinyGPSPlus 库版本: ")); Serial.println(TinyGPSPlus::libraryVersion());
    Serial.println(F("作者: Mikal Hart"));
    Serial.println();
}

void loop()
{
    // 每次正确编码新句子时，此代码会显示信息。
    while (ss.available() > 0)
    if (gps.encode(ss.read()))
    displayInfo();

    if (millis() > 5000 && gps.charsProcessed() < 10)
    {
        Serial.println(F("未检测到 GPS：请检查连接。"));
        while(true);
    }
}

void displayInfo()
{
    Serial.print(F("位置: "));
    if (gps.location.isValid())
    {
        Serial.print(gps.location.lat(), 6);
        Serial.print(F(","));
        Serial.print(gps.location.lng(), 6);
    }
    else
    {
        Serial.print(F("无效"));
    }

    Serial.print(F("  日期/时间: "));
    if (gps.date.isValid())
    {
        Serial.print(gps.date.month());
        Serial.print(F("/"));
        Serial.print(gps.date.day());
        Serial.print(F("/"));
        Serial.print(gps.date.year());
    }
    else
    {
        Serial.print(F("无效"));
    }

    Serial.print(F(" "));
    if (gps.time.isValid())
    {
        if (gps.time.hour() < 10) Serial.print(F("0"));
        Serial.print(gps.time.hour());
        Serial.print(F(":"));
        if (gps.time.minute() < 10) Serial.print(F("0"));
        Serial.print(gps.time.minute());
        Serial.print(F(":"));
        if (gps.time.second() < 10) Serial.print(F("0"));
        Serial.print(gps.time.second());
        Serial.print(F("."));
        if (gps.time.centisecond() < 10) Serial.print(F("0"));
        Serial.print(gps.time.centisecond());
    }
    else
    {
        Serial.print(F("无效"));
    }

    Serial.println();
}
```

确保 GPS 模块在较为开阔的环境中使用，以便能够接收到良好的 GPS 信号。在良好的 GPS 信号条件下，五分钟内串口将显示由 GPS 模块返回的纬度、经度和时间信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/gnss-xiao/3.png" style={{width:700, height:'auto'}}/></div>

## 不使用 XIAO

如果希望将 GPS 模块与其他微控制器一起使用，可以利用电路板上的四个焊盘：3V、GND、TX 和 RX。

通过将这些焊盘连接到目标微控制器的对应引脚，可以集成并操作 L76-L 模块，而无需使用 XIAO。请确保参考具体微控制器的文档以正确配置引脚和连接。

|L76-L 模块|其他 MCU|
|----------|--------|
|3V|3.3V|
|GND|GND|
|TX|RX|
|RX|TX|

## 资源

- **[Zip]** [Eagle 文件](https://files.seeedstudio.com/wiki/gnss-xiao/XIAO_GPS_SCH&PCB.zip)
- **[PDF]** [数据手册 - L76-L](https://files.seeedstudio.com/wiki/gnss-xiao/L76-L_doc.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>