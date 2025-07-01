---
description: 开始使用 SenseCAP Indicator 原生固件
title: 原生固件
keywords:
- SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_Native_Firmware
last_update:
  date: 05/15/2025
  author: Spencer
sidebar_position: 1
---

# **原生固件**

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

SenseCAP Indicator 的 D1S 和 D1Pro 版本内置了 tVOC 和 CO2 传感器，并配备了一个外部 Grove 温湿度传感器以实现精确的数据读取。SenseCAP 原生固件提供了空气质量检测器的用户界面，用于显示传感器数据。对于不包含传感器的 D1 和 D1L 版本，数据页面将显示 N/A。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_8.png"/></div>

在设置页面中，通过简单的步骤即可配置 SenseCAP Indicator。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/setting.png"/></div>

## **Wi-Fi 设置**

选择 Wi-Fi 名称，输入密码并连接。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_9.png"/></div>
当你看到绿色的 Wi-Fi 图标时，说明设置完成。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_10.png"/></div>

## **显示设置**

- **亮度**: 调节屏幕亮度。
- **休眠模式**: 根据你设置的时间间隔关闭屏幕。在休眠模式下，屏幕将关闭且不显示任何内容。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_15.png"/></div>

## **日期和时间设置**

- **时间格式**: 你可以设置为 24 小时制或 12 小时制。
- **时间自动更新/时区自动更新**: 当设备连接到 Wi-Fi 时，它将自动获取相应的时区和日期。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_16.png"/></div>

**手动设置**: 如果通过时区获取的时间无法自动识别冬令时或设备处于离线状态，则可以手动设置时区。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_17.png"/></div>

## **传感器数据**

我们提供四种不同版本：D1、D1S、D1L 和 D1Pro。每个版本都旨在满足不同的应用需求，同时避免因不必要的硬件而增加额外成本。以下是各版本之间的差异：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/version.png"/></div>

设备的固件有两个页面，用于显示 tVOC、CO2、温度和湿度的数据。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_12.png"/></div>

:::caution **注意:**
SenseCAP Indicator 的原生固件用户界面在所有版本中保持一致。对于没有嵌入传感器的 D1 和 D1L 版本，传感器数据将显示为“N/A”。你可以连接其他 Grove 传感器并创建自定义的用户界面。
:::

点击指定的传感器进入详细信息页面，你可以选择显示过去 24 小时或一周的数据。数据将保留一周。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_13.png"/></div>

:::tip 想了解 ChatGPT x DALL·E？
前往 [SenseCAP Indicator X OpenAI](/SenseCAP_Indicator_OpenAI_X_Overview)
:::