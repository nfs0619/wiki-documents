---
description: 开始使用 SenseCAP Indicator
title: 开始使用 SenseCAP Indicator
keywords:
- 开始使用 SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png
slug: /cn/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator
last_update:
  date: 05/15/2025
  author: Spencer
sidebar_position: 1
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 概述

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/IOdI5_MGbCw" title="YouTube 视频播放器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<div class="button-container">
<a class="button-style" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html">立即购买 🖱️</a>
</div>

SenseCAP Indicator 是一款由 ESP32-S3 和 RP2040 双 MCU 驱动的 4 英寸触摸屏，支持 Wi-Fi/Bluetooth/LoRa 通信。

该设备配备两个 Grove 接口，支持 ADC 和 I2C 传输协议，以及两个带有 GPIO 扩展引脚的 USB Type-C 接口，用户可以通过 USB 接口轻松扩展外部配件。

SenseCAP Indicator 是一个完全开源的强大物联网开发平台，适合开发者使用。同时还提供一站式 ODM 定制服务，支持快速定制和规模化。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png"/>
</div>

## 特性

- **双 MCU 和丰富的 GPIO**
  配备强大的 ESP32S3 和 RP2040 双 MCU，以及超过 400 个兼容 Grove 的 GPIO，提供灵活的扩展选项。
- **实时空气质量监测**
  内置 tVOC 和 CO2 传感器，并配备外部 Grove AHT20 温湿度传感器，提供更精确的温湿度读数。
- **本地 LoRa 物联网连接中心**
  集成 Semtech SX1262 LoRa 芯片（可选），可通过 Wi-Fi 将 LoRa 设备连接到主流物联网平台（如 Matter），无需额外兼容设备。
- **完全开源平台**
  利用广泛的 ESP32 和 Raspberry Pi 开源生态系统，支持无限的应用可能性。
- **提供 ODM 定制服务**
  Seeed Studio 提供一站式 ODM 服务，支持快速定制和规模化，以满足各种需求。（请联系 iot@seeed.cc）

## 硬件概览

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_2.png"/></div>
<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_3.png"/></div>

### 系统框图

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png"/></div>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_7.png"/></div>

### 按键功能
- **短按：** 关闭/唤醒屏幕。
- **长按 3 秒：** 开机/关机。
- **长按 10 秒：** 恢复出厂固件。

### Grove 接口

设备配备两个 Grove 接口，用于连接 Grove 模块，为开发者提供更多可能性。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/new-grove.png"/></div>

Grove 是一个模块化、标准化的连接原型系统，也是一个强大的开源硬件生态系统。点击 [**这里**](https://www.seeedstudio.com/category/Grove-c-1003.html) 了解更多。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_4.png"/></div>

### LoRa®
内置的 Semtech SX1262 LoRa® 模块使您能够构建 LoRa® 应用，并通过 Wi-Fi 将本地 LoRa 传感器连接到云端。例如，您可以构建一个 LoRa 集线器设备，将 LoRa 传感器连接到智能家居生态系统，实现基于 Wi-Fi 的 Matter 协议。通过这种方式，LoRa 设备可以通过 Wi-Fi 连接到 Matter 生态系统，而无需购买新的 Matter 兼容设备。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_55.png"/></div>

## 规格参数

|屏幕|3.95 英寸，电容式 RGB 触摸屏|
| :- | :- |
|**屏幕分辨率**|480 x 480 像素|
|**电源**|5V-DC, 1A|
|**电池**|无电池，仅通过 USB 接口供电|
|**处理器**|<p>**ESP32-S3：** Xtensa® 双核 32 位，最高 240 MHz</p><p>**RP2040：** 双核 ARM Cortex-M0+，最高 133 MHz</p>|
|**闪存**|<p>**ESP32-S3：** 8MB</p><p>**RP2040：** 2MB</p>|
|**外部存储**|支持最大 32GB Micro SD 卡（不包括）|
|**Wi-Fi**|802.11b/g/n, 2.4GHz|
|**蓝牙**|蓝牙 5.0 LE|
|**LoRa(SX1262)**|<p>LoRa 和 FSK 调制解调器</p><p>+21dBm 最大发射功率</p><p>-136dBm@SF12 BW=125KHz 接收灵敏度</p><p>通信距离可达 5 公里</p>|
|**传感器**（可选）|<p>**CO2（Sensirion SCD41）**</p><p>范围：0-40000ppm</p><p>精度：400ppm-5000ppm ±(50ppm+5% 读数)</p><p>**TVOC (SGP40)**</p><p>范围：1-500 VOC 指数点</p>**Grove 温湿度传感器（AHT20）**<p>温度范围：-40 ~ +85 ℃/± 0.3 ℃；0 ~ 100% RH/± 2% RH (25 ℃)</p>|

## 资源

- [**PDF**]: [RP2040 数据手册](https://datasheets.raspberrypi.com/rp2040/rp2040-datasheet.pdf)
- [**PDF**]: [ESP32-S3 数据手册](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)

## 技术支持

**需要帮助解决您的 SenseCAP Indicator 问题？我们随时为您提供支持！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
