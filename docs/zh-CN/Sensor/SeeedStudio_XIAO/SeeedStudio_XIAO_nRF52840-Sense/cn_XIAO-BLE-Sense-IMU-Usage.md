---
description: Seeed Studio XIAO nRF52840 Sense 的 6轴 IMU 使用方法
title: XIAO nRF52840 Sense 的 IMU 使用方法
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-BLE-Sense-IMU-Usage
last_update:
  date: 05/15/2025
  author: shuxu hu
---

# Seeed Studio XIAO nRF52840 Sense 的 6轴 IMU 使用方法

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

**Seeed Studio XIAO nRF52840 Sense** 配备了高精度的 **6轴惯性测量单元 (IMU)**，其中包括 **3轴加速度计** 和 **3轴陀螺仪**。此外，该模块还内置了一个 **温度传感器**。我们相信，这个模块可以极大地帮助您的 TinyML 项目。本篇 Wiki 将介绍如何在该开发板上使用 IMU 的基础知识。

**注意**

- **Seeed Studio XIAO nRF52840** 不配备此 IMU 模块。
- 使用 "Seeed nrf52 mbed-enabled Boards Library" 时，IMU 功能表现会更好，因此我们强烈推荐使用该库。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new7.png" alt="pir" width={600} height="auto" /></p>

## 在串口监视器上查看加速度计、陀螺仪和温度数据

在这个示例中，我们将通过 Arduino 串口监视器查看来自 **Seeed Studio XIAO nRF52840 Sense** 的加速度计、陀螺仪和温度数据。

- **步骤 1**：[下载 Seeed_Arduino_LSM6DS3 库](https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3)为 ZIP 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/LSM6DS3-github-zip.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 2**：打开 Arduino IDE，导航到 `Sketch > Include Library > Add .ZIP Library...`，然后打开下载的 ZIP 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

- **步骤 3**：导航到 `File > Examples > Accelerometer And Gyroscope LSM6DS3 > HighLevelExample` 打开 **HighLevelExample**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/IMU-install.png" alt="pir" width={550} height="auto" /></p>

- **步骤 4**：上传代码并打开 **串口监视器**

**注意**：上传代码后，代码不会自动执行，直到您点击 Arduino 窗口右上角的 **串口监视器**。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/IMU-example-output.png" alt="pir" width={600} height="auto" /></p>

现在，您将看到加速度计、陀螺仪和温度数据依次显示在串口监视器上，如上图所示！

## 更多内容？

如果您想尝试更多示例，可以导航到 `File > Examples > Accelerometer And Gyroscope LSM6DS3`，查看 **Accelerometer And Gyroscope LSM6DS3** 下的所有示例。