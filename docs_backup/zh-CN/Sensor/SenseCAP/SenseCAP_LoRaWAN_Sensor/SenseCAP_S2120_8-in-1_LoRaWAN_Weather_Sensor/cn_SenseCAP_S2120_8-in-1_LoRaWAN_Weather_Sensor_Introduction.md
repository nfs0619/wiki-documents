---
description: SenseCAP S2120 8合1 LoRaWAN 气象传感器介绍
title: SenseCAP S2120 8合1 LoRaWAN 气象传感器介绍
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S2120_8-in-1_LoRaWAN_Weather_Sensor/SenseCAP_S2120_8-in-1_LoRaWAN_Weather_Sensor_Introduction
last_update:
  date: 05/15/2025
  author: Yvonne
---

# SenseCAP S2120 8合1 LoRaWAN 气象传感器

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

[![](https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Introduction.files/Introduction146.png)](https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html)

SenseCAP S2120 是一款电池供电的 8合1 LoRaWAN 气象传感器，可测量空气温度、湿度、风速、风向、降雨量、光强、紫外线指数和气压。它具有超低功耗、可靠性能、内置蓝牙以及用于 OTA 配置和远程设备管理的应用服务，从而实现低维护成本。它支持多场景应用，例如后院、花园、智慧农业、气象、智慧城市等。SenseCAP S21XX 兼容 LoRaWAN® V1.0.3 协议，并可与 [LoRaWAN® 网关](https://www.seeedstudio.com/LoRaWAN-Gateway-c-1936.html) 一起使用。

![](https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Introduction.files/Introduction914.png)

LoRaWAN® 网关可以提供使用此类传感器所需的 LoRaWAN® 网络覆盖。S210X 可以连接到不同的 LoRaWAN® 网关，而 Seeed 提供的网关为您带来无缝的用户体验。

Helium 网络：传感器可在 Helium 网络覆盖的区域工作（请在 [Helium Explorer](https://explorer.helium.com/) 上查看）。您可以查看 [SenseCAP M1](https://www.seeedstudio.com/SenseCAP-M1-LoRaWAN-Indoor-Gateway-US915-p-5023.html) 和 [SenseCAP M2](https://www.seeedstudio.com/SenseCAP-M2-Data-Only-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5342.html)。

LoRaWAN 网络：传感器可在 LoRaWAN® 网络中工作，例如 The Things Network、Loriot、Chirpstack 等。您可以查看 [SenseCAP 户外网关](https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html) 和 [SenseCAP M2 多平台网关](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html)。

# 应用场景

-   后院和花园：测量后院和花园中的空气温度和湿度、降雨量、紫外线指数等，以保护您的家人。

-   智慧农业：帮助农民及时获取气候数据和信息，采取科学管理措施，提高农业生产能力和水平。

-   气象：支持专业气象领域的应用，例如及时反映交通运输领域各种异常气象条件的变化，为交通管理部门提供实时科学数据依据。

-   城市天气：为城市广场、公园、景区、高尔夫球场等城市区域提供实时数据。

# ![](https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Introduction.files/Introduction3232.png)



# **现场部署**

![](https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Introduction.files/Introduction3252.png)

图片来源：Ted Urbaniak, Mapping Network, Nibiaa

# 

# 规格

![](https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Introduction.files/Introduction3325.png)

# LoRaWAN 频率

*注意：无频率限制。气象站可以随时切换到其他频率计划。*

*S2120 设计支持 863MHz \~928MHz 的通用频率计划，适用于一个 SKU。这意味着它可以支持以下频率计划：*

|频率计划|常用名称|子频段|
| :- | :- | :- |
|EU863-870|EU868|\_\_\_|
|US902-928|US915|子频段 1 至 8|
|AU915-928|AU915|子频段 1 至 8|
|AS923|AS923|AS923\_1, AS923\_2, AS923\_3, AS923\_4|
|IN865-867|IN865|\_\_\_|
|KR920-923|KR920|\_\_\_|
|RU864-867|RU864|\_\_\_|

默认情况下，频率计划设置为空，并且在首次上电时通过蓝牙由应用程序设置之前不会传输 RF 信号。并且可以随时更改为其他频率计划。

# 部件清单

![](https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Introduction.files/Introduction3841.png)

ECCN/HTS

|HSCODE|9031809090|
| :- | :- |
|USHSCODE|9026104000|
|UPC||
|EUHSCODE|8517180000|
|COO|中国|

|CE|1|
| :- | :- |
|EU DoC|1|
|FCC|1|
|ROHS|1|
|UK DoC|1|