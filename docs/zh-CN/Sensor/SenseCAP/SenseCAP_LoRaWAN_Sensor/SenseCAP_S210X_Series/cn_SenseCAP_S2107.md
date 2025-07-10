---
description: SenseCAP S2107
title: SenseCAP S2107
keywords:
- SenseCAP Sensor_Probe&Accessories
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_S2107
last_update:
  date: 05/15/2025
  author: KeweiLee
---

# 产品描述

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/0.jpg" /></div>


SenseCAP LoRaWAN® S2107 温度传感器可测量 -50°C~300°C 范围内的温度。它采用高精度的 PT1000 温度传感器，能够支持宽温度范围和工业场景的温度检测。  
Pt1000 传感器（1000 欧姆温度传感器）是最常见的铂电阻温度计类型。S2107 支持 PT1000 传感器的三线电路，并允许同时连接多达三个传感器。  
直接接触温度是许多场景中的重要指标，尤其是在液体检测、食品监测、冷链存储、工业锅炉、水产养殖解决方案中。S2107 专为 OTA 优化，内置蓝牙，可实现快速设置和更新。得益于 LoRa 和 IP66 设计，该传感器具有稳定性和可靠性，能够覆盖长距离传输范围，同时保持低功耗。与有线设备不同，它由电池供电，减少了部署的工作量和复杂性，并且可以在几分钟内拆卸和安装。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html)

# 特性

- 兼容全球 LoRaWAN® 网络：兼容不同类型的 LoRaWAN® 网关，支持快速连接到 LoRaWAN® 网络（支持 863MHz ~928MHz 的通用频率计划）。
- 长距离传输 & 电池供电：在城市场景中传输范围可达 2 公里，在视距场景中可达 10 公里。由易于更换的标准 Li-SOCl2 电池（类型：ER34615）供电，最长电池寿命可达 10 年。
- 适用于恶劣环境：-40℃ ~ 85℃ 的工作温度和 IP66 级外壳，适合户外使用、高紫外线暴露、强降雨、多尘环境等。
- 简单配置和校准：SenseCAP 提供无代码体验，用户可通过 SenseCAP Mate APP 完成配置和校准。
- **本地存储：当 LoRaWAN 网络断开时，设备可本地存储多达 2000 条上行记录**。

# 应用场景

- 液体检测
- 食品监测
- 冷链存储
- 水产养殖解决方案

# 规格参数

|**温度**||
| :- | :- |
|范围|<p>-50 至 300 ℃ </p><p>（其他范围定制请联系销售）</p>|
|精度|±0.5℃|
|分辨率|0\.1℃|
|**通用参数**||
|产品型号|S2107|
|微控制器|Wio-E5|
|支持协议|LoRaWAN v1.0.3 Class A|
|内置蓝牙|用于通过 App 工具更改参数|
|LoRaWAN 频道计划|IN865/EU868/US915/AU915/ AS923/KR920/RU864 \*|
|最大传输功率|19dBm|
|灵敏度|-136dBm@SF12 BW=125KHz|
|通信距离|2 至 10 公里（取决于网关天线和环境）|
|IP 等级|IP66|
|工作温度|-40 至 +85 °C (LoRa DTU);-50 至 200℃(电缆); -50 至 300℃ (探头)|
|工作湿度|0 至 100 %RH（无冷凝）|
|设备重量|360g|
|电缆长度|3 米|
|认证|CE / FCC / RoHS / TELEC|
|**电池（设备内置）**||
|电池寿命|最长可达 10 年\*\*|
|电池容量|19Ah（不可充电）|
|电池类型|标准 D 型 SOCl2 电池|

# 如何将 3 个 PT1000 传感器添加到 S2107

## 硬件准备

按照图示连接 3 个 PT1000 传感器  
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/1.jpg" /></div>

## 软件准备

使用 SenseCAP Mate App 配置 PT1000 传感器。  
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/2.png" /></div>

# 载荷解码器

## 解码器代码

请访问 SenseCAP [S210X 解码器](https://github.com/Seeed-Solution/SenseCAP-Decoder/tree/main/S210X)

## 数据解析示例

温度传感器测量数据包：  
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/3.png" /></div>

离线恢复时发送的数据包：  
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/4.png" /></div>

S2107 的电池信息：  
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/5.png" /></div>

# SenseCAP 技术支持

感谢您选择我们的产品！我们为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>