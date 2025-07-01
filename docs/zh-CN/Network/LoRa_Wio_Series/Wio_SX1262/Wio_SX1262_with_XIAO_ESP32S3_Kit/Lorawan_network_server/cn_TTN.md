---
description: 基于 Wio SX1262 和 XIAO ESP32S3 模块的 TTN LNS 连接
title: 连接到 TTN
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/40.png
slug: /cn/wio_sx1262_xiao_esp32s3_LNS_TTN
last_update:
  date: 05/15/2025
  author: Evelyn Chen
sidebar_position: 1
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/40.png" alt="pir" width={900} height="auto" /></p>

## 概述

LoRaWAN 是一种基于 LoRa 技术构建的低功耗广域网络协议。它通过无线方式将设备连接到互联网，并管理终端设备与网络网关之间的通信。

在《LoRa 入门指南》中，我们将 Wio-SX1262 配置为单通道 LoRa 网关，并与 XIAO ESP32S3 搭配使用。

本页面将详细说明如何基于 Wio-SX1262 和 XIAO ESP32S3 套件设置 LoRaWAN 单通道网关，与 TTN 交换数据。同时，还将介绍如何将 SenseCAP S210x LoRa 传感器节点连接到 Wio-SX1262 和 XIAO ESP32S3 套件，并将传感器数据传输到 TTN（The Things Network）。

## 添加 LoRaWAN 网关

点击并创建一个 TTN 新账户：https://www.thethingsnetwork.org/。

如果已有账户，可以直接访问 https://eu1.cloud.thethings.network/。

登录后，注册一个网关。

**步骤 1**. 注册网关

**步骤 2**. 填写正确的 `网关 EUI`、`网关 ID` 和 `频率计划` 信息。

**步骤 3**. 重启网关模块，等待约 2 分钟。然后可以检查网关的连接状态。

<div class="table-center">
<iframe width="700" height="600" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/video.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="false"> </iframe>
</div>

## 创建一个应用程序

在 TTN 中添加新应用程序。

<div class="table-center">
<iframe width="700" height="600" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/video1.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="false"> </iframe>
</div>

## 添加 SenseCAP LoRa 传感器

### 通过 Sensecraft APP 配置 LoRa 传感器
我们将向 TTN 添加一个 SenseCAP 传感器节点。

**步骤 1**. 下载并打开 Sensecraft 应用程序。

**步骤 2**. 按住传感器按钮 3 秒钟，LED 将以 1 秒的频率闪烁。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/41.png" alt="pir" width={300} height="auto" /></p>

**步骤 3**. 点击“扫描”以添加新设备，并开始扫描设备上的二维码。

**步骤 4**. 点击“高级配置”，选择平台为“The Things Network”。

**步骤 5**. 选择与网关一致的频率计划。我们已经将网关设置为 EU868，因此传感器也设置为 EU868。

**步骤 6**. 设备默认使用 OTAA 加入 LoRaWAN 网络。记录下 `设备 EUI`、`App EUI` 和 `APP key`。

这里有更详细的 [连接 SenseCAP S210x 传感器到 The Things Network 的说明](https://files.seeedstudio.com/products/SenseCAP/S210X/How%20to%20Connect%20SenseCAP%20S210X%20to%20The%20Things%20Network.pdf)。

### 在 TTN 上注册
注册一个终端设备。

**步骤 1**. 选择终端设备类型并填写 JoinEUI（来自 Sensecraft 的 AppEUI）。然后点击 *确认*。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/42.png" alt="pir" width={600} height="auto" /></p>

**步骤 2**. 填写 DevEUI 和 AppKey。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/43.png" alt="pir" width={600} height="auto" /></p>

**步骤 3**. 仔细检查填写的配置信息，然后点击注册终端设备。传感器数据将显示在仪表板上。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/44.png" alt="pir" width={600} height="auto" /></p>

## 资源

* [The Things Network](https://eu1.cloud.thethings.network/)
* [SenseCAP 传感器连接 TTN 的说明](https://files.seeedstudio.com/products/SenseCAP/S210X/How%20to%20Connect%20SenseCAP%20S210X%20to%20The%20Things%20Network.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。以下是我们提供的几种沟通方式，以满足不同的需求和偏好。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>