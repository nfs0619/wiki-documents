---
description: 涵盖设备的结构和操作，详细说明每个组件如何为 SenseCAP Indicator 的整体功能做出贡献。
title: 深入了解硬件
keywords:
- Indicator 开发教程
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_Dive_into_the_Hardware
last_update:
  date: 05/15/2025
  author: Spencer
sidebar_position: 1
---

# **概述**

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

SenseCAP Indicator 是一款 4 英寸触摸屏设备，由 ESP32 和 RP2040 双微控制器（MCU）驱动。ESP32 和 RP2040 都是功能强大的微控制器，提供了一系列功能和特性。

本章将详细介绍 SenseCAP Indicator 中的 ESP32 和 RP2040，包括它们的功能和使用方法。内容涵盖编程、与传感器的接口以及与其他设备的通信等。

# **深入了解硬件**

## **硬件框图**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png"/></div>

如图所示，SenseCAP Indicator 主要由 ESP32 和 RP2040 微控制器驱动，它们与 LoRa 收发器、LCD 和其他外围电路相连。
在接下来的章节中，我们将概述 ESP32 和 RP2040 的开发及其各自的能力。

## **ESP32-S3**

ESP32-S3 是一款高度集成的片上系统（SoC），结合了强大的 CPU、2.4 GHz Wi-Fi 和蓝牙 5.0 功能，还包括一系列输入/输出引脚和接口，例如 UART、SPI、I2C 和 PWM，这些接口使其能够与其他设备和传感器进行交互。

## **RP2040**

SenseCAP Indicator 内嵌了 [RP2040](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html?)，RP2040 配备了双核 ARM Cortex-M0+ 处理器，时钟速度高达 133 MHz，拥有 264KB 的 RAM，以及 USB、UART、SPI 和 I2C 等多种外设。它还包括一个独特的功能——可编程 I/O (PIO)，允许用户无需专用硬件即可实现自定义数字接口。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/rppinout.png"/></div>

## **ESP32-S3 和 RP2040 的通信**

ESP32 和 RP2040 使用串口通信，并采用 [COBS](http://www.stuartcheshire.org/papers/COBSforToN.pdf) 通信协议。

ESP32 使用的库:  https://github.com/cmcqueen/cobs-c  
RP2040 使用的 Arduino 库:  https://github.com/bakercp/PacketSerial  

在终端演示中，以下数据帧用于传输：

| Byte0    | Byte1-4          |
| -------- | ---------------- |
| PKT_TYPE | PKT_PARA (小端序) |

**PKT_TYPE 列表**

**注意**: 以下命令仅供参考，当然您也可以定义自己的命令。

| PKT_TYPE  | DIR	 | 说明  |
|:----------|:----------|:----------|
| 0x00    | ESP32↔RP2040    |   ACK，字符串，值为：'ACK'  |
| 0xA0    | ESP32→RP2040    |  采集间隔命令，PKT_PARA 为 uint32_t |
| 0xA1    | ESP32→RP2040    |  蜂鸣器开启命令，PKT_PARA 为 uint32_t   |
| 0xA2    | ESP32→RP2040    |  蜂鸣器关闭命令，PKT_PARA 为 uint32_t  |
| 0xA3    | ESP32→RP2040    |  关机命令，PKT_PARA 为 uint32_t  |
| 0xA4    | ESP32→RP2040    |  开机命令，PKT_PARA 为 uint32_t  |
| 0xA0~0xAF  | ESP32→RP2040    |  其他数据或命令   |
| 0xB0    | RP2040→ESP32    | SCD41 温度数据，PKT_PARA 为 float    |
| 0xB1    | RP2040→ESP32    | SCD41 湿度数据，PKT_PARA 为 float    |
| 0xB2    | RP2040→ESP32    | SCD41 CO2 数据，PKT_PARA 为 float    |
| 0xB3    | RP2040→ESP32    | ATH20 温度数据，PKT_PARA 为 float    |
| 0xB4    | RP2040→ESP32    | ATH20 湿度数据，PKT_PARA 为 float    |
| 0xB5    | RP2040→ESP32    | SGP40 tVOC 数据，PKT_PARA 为 float，范围 0~500 指数   |
| 0xB6~0xBF    | RP2040→ESP32    | 其他数据或命令，PKT_PARA 为 float    |

# **技术支持**

**需要帮助解决您的 SenseCAP Indicator 问题？我们随时为您提供支持！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>