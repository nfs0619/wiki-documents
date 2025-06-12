---
description: 适用于 Seeed nRF52 Boards Library
title: 适用于 Seeed nRF52 Boards Library
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-BLE-Sense-Bluetooth_Usage
last_update:
  date: 05/15/2025
  author: shuxu hu
---

# 蓝牙使用 (Seeed nRF52 Boards Library)

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

**Seeed Studio XIAO nRF52840** 和 **Seeed Studio XIAO nRF52840 Sense** 均支持蓝牙连接。本篇 Wiki 将介绍 "Seeed nRF52 Boards Library" 中使用的基本蓝牙功能。

## 入门指南

### 所需硬件

- 1 个 [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) 或 [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- 1 部支持蓝牙连接的智能手机
- 1 根 USB Type-C 数据线

### 所需软件

- [nRF Connect for Mobile (Android)](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp)
- [LightBlue App (Apple)](https://apps.apple.com/us/app/lightblue/id557428110)

### 安装

> 由于我们使用的功能已经包含在 "Seeed nRF52 Boards Library" 中，因此无需安装其他第三方库。可以跳过此步骤。

- **方法一**（此方法适用于上述代码库）

下载库的 ZIP 文件后，打开 Arduino IDE，点击 **Sketch > Include Library > Add .ZIP Library**。选择刚下载的 ZIP 文件，如果库安装正确，您会在通知窗口中看到 **Library added to your libraries**，表示库已成功安装。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" /></div>

- **方法二**（仅适用于安装 ArduinoBLE 库）

库管理器从 Arduino IDE 1.5 及更高版本（1.6.x）开始添加。它位于菜单中的 'Sketch' 下的 'Include Library' 和 'Manage Libraries...'。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/seeed_logo/Library.jpg" /></div>

打开库管理器后，您会看到一个包含大量库的列表，可以一键安装。要找到适合您产品的库，请搜索产品名称或关键字，例如 'k type' 或 'digitizer'，您需要的库应该会显示出来。点击所需的库，'Install' 按钮会出现。点击该按钮，库会自动安装。安装完成后，关闭库管理器。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRF.png" /></div>

## 应用示例

这里我们将介绍蓝牙应用。

### 将 PC 键盘无线连接到手机

**步骤 1.** 启动 Arduino 应用程序。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>

**步骤 2.** 选择您的开发板型号并将其添加到 Arduino IDE 中。这里我们使用 "Seeed nRF52 Boards Library"。

> 有关开发板库安装，请参考 [此教程](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup) 完成安装。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new.png" /></div>

**步骤 3.** 导航到 **"File -> Examples -> Adafruit Bluefruit nRF52 Libraries -> Peripheral -> blehid_keyboard"** 并打开 "blehid_keyboard" 示例文件。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new1.png" /></div>

**步骤 4.** 点击 "Upload"，然后在 Arduino IDE 的右上角打开 "monitor"。监视器将显示如下内容：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new3.png" /></div>

**步骤 5.** 在手机上打开 "nRF Connect for Mobile" 应用或 "LightBlue" 应用，同时确保手机已连接蓝牙。一段时间后，您会发现一个名为 "XIAO nRF52840" 的设备列出。

- 对于 **nRF Connect for Mobile APP** 应用，界面如下：

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new5.jpg" /></div>

- 对于 **LightBlue APP** 应用，界面如下：

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new4.jpg" /></div>

**步骤 6.** 点击设备，连接将自动完成。之后，我们可以使用 PC 键盘在监视器中输入字符，然后查看手机上的变化。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new6.gif" /></div>

## 更多内容？

如果您想尝试更多示例，可以导航到 `File > Examples > INCOMPATIBLE > ArduinoBLE` 并查看 **ArduinoBLE** 下的所有示例。

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>