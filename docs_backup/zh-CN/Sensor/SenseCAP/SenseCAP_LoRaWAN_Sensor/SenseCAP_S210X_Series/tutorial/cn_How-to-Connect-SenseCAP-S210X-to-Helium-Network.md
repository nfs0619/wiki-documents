---
description: 连接到 Helium 网络
title: 连接到 Helium 网络
keywords:
- SenseCAP Sensor_Probe&Accessories
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/How-to-Connect-SenseCAP-S210X-to-Helium-Network
last_update:
  date: 05/15/2025
  author: Leo
---

# 连接到 Helium 网络

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## Helium 控制台

Helium 控制台是由 Helium 基金会托管的基于网页的设备管理工具，允许开发者在 Helium 网络上注册、认证和管理他们的设备。除了设备管理之外，控制台还提供预构建的连接（称为集成），可以通过 HTTPs 或 MQTT 路由设备数据；或者直接连接到云服务，例如 AWS IoT。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/003.png)

## 连接到 Helium 网络
### 创建新账户
请访问 <https://console.helium.com/> 并注册您的账户。
### 设置传感器
(1) 打开 SenseCAP Mate 应用程序

(2) 按住按钮并保持 3 秒，LED 将以 1 秒的频率闪烁。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/004.png)

(3) 请点击“设置”按钮以打开蓝牙，然后点击“扫描”以开始扫描传感器的蓝牙。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/005.png)

(4) 根据 S/N（标签）选择传感器。然后，进入后将显示传感器的基本信息。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/006.png)       ![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/007.png)

### 通过 SenseCAP Mate 应用程序设置传感器频率
根据网关的频率设置相应的频段。

(1) 点击“设置”，并选择平台为“**Helium**”。

![wecom-temp-114185-2959d45aab4ab735f22b5fbf68a22c91](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/008.png)     ![wecom-temp-88582-e758abc6d2f73925e20290cddfebc421](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/009.png)

(2) 选择频率计划，如果网关是 US915，则将传感器设置为 US915。

(3) 点击“发送”按钮，将设置发送到传感器以使其生效。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0010.png)

(4) 点击“主页”按钮，应用程序将断开蓝牙连接。

然后，传感器将重新启动。

(5) 当设备断开蓝牙连接时，LED 会亮起 **15 秒**，然后以 **呼吸灯** 的形式闪烁。

(6) 成功加入网络后，LED **快速闪烁 2 秒**。

# Helium 控制台配置
## 添加新设备
(1) 点击“设备” –> “添加新设备”

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0011.png)

(2) 输入设备 EUI、App EUI、App Key：请参考 SenseCAP Mate 应用程序获取详细信息。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0012.png)

(3) 保存设备。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0013.png)

(4) 添加一个新标签，然后将标签添加到设备。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0014.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0015.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0016.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0017.png)

## 在 Helium 上检查数据
(1) 进入设备详情页面，找到 REAL TIME PACKETS（实时数据包）。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0018.png)

(2) 打开传感器电源，它将显示原始数据。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0019.png)




## 将数据从 Helium 上传到 Datacake
### 创建 Datacake 账户
(1) 创建一个新账户，网站：<https://datacake.co/> 

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0020.png)

(2) 点击 “Edit Profile”（编辑个人资料） -> “API” -> 获取 API token。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0021.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0022.png)

### 在 Helium 控制台添加新集成
(1) 点击 “Integrations”（集成） -> “Add New Integration”（添加新集成） -> “Datacake”。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0023.png)

(2) 输入 Datacake Token（参考[该部分](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/#_Create_a_Datacake)）并命名您的集成。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0024.png)

### 在 Helium 上配置 Flows
(1) 点击 “Flows”（流程）。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0025.png)

(2) 将 Label（标签）拖到空白处。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0026.png)

(3) 将 Integration（集成）拖到空白处。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0027.png)

(4) 连接这两个模块。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0028.png)

(5) 保存更改。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0029.png)

### 在 Datacake 上添加传感器
(1) 返回 Datacake Dashboard（仪表盘），点击 “Device”（设备） -> “Add Device”（添加设备）。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0030.png)

(2) 搜索 “Seeed”，您可以直接选择一些传感器。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0031.png)

(3) 选择传感器模板。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0032.png)

(4) 选择 “Helium”。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0033.png)

(5) 输入您的设备 EUI 和名称。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0034.png)

(6) 选择您的计划并添加设备。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0035.png)


### 从 Datacake 检查数据
点击 Debug 按钮，它将显示调试日志。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0036.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0037.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0038.png)