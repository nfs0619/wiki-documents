---
description: BLE
title: BLE
keywords:
- SenseCAP Indicator ESP32 开发教程
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_ESP32_BLE
last_update:
  date: 05/15/2025
  author: Thomas
---

# **BLE**

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

[**示例**](https://github.com/espressif/esp-idf/tree/master/examples/bluetooth)

此[目录](https://github.com/espressif/esp-idf/tree/master/examples/bluetooth)包含一系列展示蓝牙功能的项目示例，并提供可以复制和适配到您自己项目中的代码。

**使用示例**

在构建示例之前，请务必按照 ESP-IDF 入门指南操作，以确保您拥有所需的开发环境。

构建示例的步骤与构建其他项目相同：

- 第一步：进入您想要构建的新示例的目录。

运行以下命令以选择正确的芯片目标进行构建，然后打开项目配置菜单：

`idf.py set-target esp32s3`

（默认目标是 esp32。有关所有选项，请参阅 idf.py set-target --help）

- 第二步：运行以下命令以打开项目配置菜单：

`idf.py menuconfig`

大多数示例在此处都有一个项目特定的“示例配置”部分（例如，设置要使用的 WiFi SSID 和密码）。

- 第三步：构建示例：

`idf.py build`

按照打印的说明进行烧录，或者运行  
`idf.py -p PORT flash`

# **技术支持**

别担心，我们为您提供支持！请访问我们的 [Seeed 官方 Discord 频道](https://discord.com/invite/QqMgVwHT3X) 提问！

如果您有大批量订单或定制需求，请联系 iot@seeed.cc