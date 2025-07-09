---
description: NFC 使用 XIAO nRF52840 (Sense)
title: 两个版本的 NFC 使用
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-BLE-Sense-NFC-Usage
last_update:
  date: 05/15/2025
  author: Matthew
---

# Seeed Studio XIAO nRF52840 (Sense) 的 NFC 使用

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<!-- :::note
Seeed Studio XIAO nRF52840 开发板的 NFC 功能暂时无法使用。一旦新的 NFC 库发布，我们将尽快更新新的 Wiki。
::: -->

:::note
已测试并批准使用 Seeed nRF52 Boards 版本 1.1.3 和 Seeed nRF52 mbed-enabled Boards 版本 2.9.2。
:::

**Seeed Studio XIAO nRF52840** 和 **Seeed Studio XIAO nRF52840 Sense** 均配备了 **NFC（近场通信）模块**。本 Wiki 将帮助您开始在这些开发板上使用 NFC。我们将演示一个基本示例：将手机放置在 NFC 天线附近后，从开发板向手机发送文本字符串。

## 准备工作

> 使用 "Seeed nRF52 mbed-enabled Boards Library" 时，NFC 功能表现良好。

有关开发板库的安装，请参考[此教程](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup)完成安装。如果您已经安装好，可以继续进行项目。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new7.png" /></div>

## 所需硬件

- 1 x [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) 或 [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- 1 x NFC 天线
- 1 x USB Type-C 数据线
- 1 x 智能手机

## 所需软件

- [NFC TagInfo 应用 (Android)](https://play.google.com/store/apps/details?id=com.nxp.taginfolite&hl=en&gl=US)
- [NFC TagInfo 应用 (Apple)](https://apps.apple.com/us/app/nfc-taginfo-by-nxp/id1246143596)

## 硬件连接

将 NFC 天线焊接到 Seeed Studio XIAO nRF52840 (Sense) 上，如下所示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFC-antenna-3.png" alt="pir" width={550} height="auto" /></p>

## 使用 NFC 发送文本字符串

- **步骤 1.** 打开 Arduino IDE 并上传以下代码

```cpp
#include <NFCT.h>

void setup() { 
  // 设置 NFC 消息为第一个参数，语言代码为第二个参数
  NFC.setTXTmessage("Hello World!", "en");
  // 启动 NFC 模块
  NFC.start();
}

void loop() {
}

```

这里我们简单地发送文本字符串 "Hello World!"。

- **步骤 2.** 打开 "NFC TagInfo" 手机应用并点击 **Scan & Launch**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFCconnect3.jpg" alt="pir" width={300} height="auto" /></p>

- **步骤 3.** 将 NFC 天线靠近手机，您将看到以下输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFCconnect2.png" alt="pir" width={850} height="auto" /></p>