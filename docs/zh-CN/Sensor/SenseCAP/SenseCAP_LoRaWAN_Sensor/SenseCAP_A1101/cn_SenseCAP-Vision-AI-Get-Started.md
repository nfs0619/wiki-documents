---
description: 入门指南 - SenseCAP Vision AI
title: 入门指南 - SenseCAP Vision AI
keywords:
- 传感器 Vision_AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP-Vision-AI-Get-Started
last_update:
  date: 05/15/2025
  author: Kewei Li
---

# 简介

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center"><img width ={400} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/101990962-a1101-first-new-10.17.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>


SenseCAP A1101 - LoRaWAN Vision AI Sensor 是一款支持 TinyML 边缘 AI 的智能图像传感器。它支持多种 AI 模型，例如图像识别、人数统计、目标检测、仪表识别等。同时，它还支持使用 TensorFlow Lite 进行模型训练。<br />

# 特性
- 超低功耗且强大的 Himax 摄像头：400Mhz DSP，最大摄像头帧率 640*480*VGA 60 FPS，本地推理

- 低功耗和长距离传输：睡眠模式功耗低至 2.3uWh，由 Wio-E5 LoRaWAN 模块供电，数据传输距离可达数英里

- 边缘计算提供高数据安全性：本地图像推理并将最终结果数据传输到云端，适用于需要有限数据传输和高数据隐私的应用

- 数据可视化简单：通过 SenseCAP Mate App 和 SenseCAP Dashboard 轻松点击即可显示和管理数据，与其他第三方工具广泛兼容

- 高工业防护等级：-40 ~ 85℃ 工作温度和 IP66 防护等级，适合室内和室外部署

- 易于扩展部署：通过扫描设备二维码 1 分钟即可添加和配置设备，低 LoRaWAN 网络成本和维护成本确保业务可扩展性

# 规格

请参考 [规格](https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_spec.pdf) 了解更多详细信息。

# 入门指南

1. A1101 内置了多个 AI 模型，用户可以根据需求选择模型。目前可用的算法和模型如下：

|**算法**|**AI 模型**|
|---|---|
|目标检测|人体检测；用户自定义|
|目标计数|人数统计；用户自定义|
|图像分类|人类&熊猫识别；用户自定义|

模型选择和配置在设置界面完成。首先选择算法，不同的算法实现不同的功能，并在 APP 预览中显示不同的结果。点击算法后面的下拉三角形会弹出选择框。然后选择 AI 模型，点击模型，选择框弹出，选择模型。

2. 如果您想训练自己的 AI 模型，有两种方法，请参考：

**1.[使用 Edge Impulse 进行一站式模型训练](https://wiki.seeedstudio.com/One-Stop-Model-Training-with-Edge-Impulse)** 快速上手。

**2.[使用 Roboflow、YOLOv5、TensorFlow Lite 训练 AI 模型](https://wiki.seeedstudio.com/Train-Deploy-AI-Model-A1101)** 详细教程。

# 连接到 LoraWAN®
LoRaWAN®（长距离广域网）是一种为物联网（IoT）设备和网关之间的低功耗、长距离通信设计的无线通信协议。它使用工业、科学和医疗（ISM）频段中的未授权无线电频谱，通常在欧洲为 868 MHz，在美国为 915 MHz。LoRaWAN® 提供了一种低成本、节能的解决方案，用于长距离连接物联网设备。该技术支持设备与网关之间的双向通信，并支持一系列数据速率以适应不同类型的应用。

## 如何选择网关和 LoraWAN®
使用传感器时需要 LoRaWAN® 网络覆盖，有两种选择。
![p21](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/4.png)

## 如何使用传感器
除了直接连接到计算机以查看实时检测数据外，您还可以通过 LoraWAN® 传输这些数据，最终将其上传到 [SenseCAP 云平台](https://sensecap.seeed.cc/) 或第三方云平台。在 SenseCAP 云平台上，您可以循环查看数据，并通过手机或计算机以图形方式显示数据。SenseCAP 云平台和 SenseCAP Mate App 使用相同的账户系统。

由于我们这里的重点是描述模型训练过程，因此不会详细介绍云平台数据展示。但如果您感兴趣，可以随时访问 SenseCAP 云平台，尝试添加设备和查看数据。这是更好地了解平台功能的好方法！

![p22](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/11.png)

# 技术支持

感谢您选择我们的产品！我们为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>