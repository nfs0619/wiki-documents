---
description: SenseCAP_Tracker_T1000-A/B_FAQ
title: 常见问题
keywords:
- Tracker
- 常见问题
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/faq_for_SenseCAP_T1000
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 位置相关

### GPS 定位精度

GPS 卫星在空间中以一定的精度广播信号，但您接收到的信号取决于其他因素，包括卫星几何结构、信号阻塞、大气条件以及接收器设计特性/质量。

许多因素可能会降低 GPS 定位精度。常见原因包括：

* 由于建筑物、桥梁、树木等导致的卫星信号阻塞。
* 室内或地下使用。
* 信号被建筑物或墙壁反射（“多路径”）。

因此，在宽阔无遮挡的区域中，您将获得更好的 GPS 信号，从而获得更准确的定位结果。

### 为什么没有 GPS 位置数据？

* 当追踪器在室内时，可能无法获取 GPS 位置。GNSS 定位需要开放的室外环境。如果您在室内，由于信号较弱，GPS 位置可能会超时。请确保设备放置在室外以提高 GPS 精度。

* 确保设备正确安装，将设备正面朝上以避免天线位置被遮挡。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/install.png" alt="pir" width={700} height="auto" /></p>

### 为什么 Wi-Fi 或蓝牙位置没有显示在 SenseCAP App 地图上？

* Wi-Fi 定位需要第三方地图解析服务，用户必须调用该服务进行解析。目前，Mate App 仅支持 GNSS 定位显示。

* 蓝牙定位依赖于蓝牙信标及其各自的位置以实现准确追踪。

## 网络相关

### Helium 网络

:::caution 注意
对于使用 **EU868**/**RU864** 区域的用户：

**不建议**将上传间隔设置为少于 4 分钟。

如果您将上传间隔设置为少于 4 分钟，您可能会注意到设备上行数据的时间戳与当前时间不一致。
:::

**原因如下**：

根据 [1% 占空比](https://www.thethingsnetwork.org/docs/lorawan/duty-cycle/#maximum-duty-cycle) 的限制，在 EU868 区域，设备必须等待大约 4 分钟才能进行每次上行传输。此外，Helium 网络仅在累积 20 个连续上行数据包且 [ADR](https://docs.helium.com/console/profiles/#adr-algorithm) 位设置为 1 后，才会启动数据速率和功率校正。

因此，如果您设置的上传间隔少于 4 分钟，实时数据将暂时存储在 RAM 中，直到 Helium 网络触发数据速率和功率校正后才会上传。

### 如何获取密钥

在设置页面中，选择 SenseCAP 以外的平台以获取密钥。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/get-keys.png" alt="pir" width={700} height="auto" /></p>

## 按钮相关

### 加入网络

长按按钮 3 秒，绿灯会慢闪，然后按一次按钮，绿灯会呼吸闪烁，设备将尝试加入 LoRaWAN 网络。

### 强制重启

按住按钮，然后连接充电线，连接后松开按钮，绿灯会呼吸闪烁，设备将被强制重启。

## 电池相关

### 电池寿命

电池寿命取决于上传间隔、传感器使用情况、LoRa 传输距离和工作温度等因素。预测的电池寿命基于典型工作环境（25°C），仅供参考。实际电池寿命可能有所不同。

#### EU868(1C/SF12)

|上传间隔|1 分钟|5 分钟|60 分钟|1 天|
|--|--|--|--|--|
|电池寿命（天）|2.62|27.21|106.78|209.3|

#### US915(1C/SF9)

|上传间隔|1 分钟|5 分钟|60 分钟|1 天|
|--|--|--|--|--|
|电池寿命（天）|3.02|37.52|117.32|210.7|

有关详细的电池寿命计算，请参考 [电池寿命计算表](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker/Trcaker_Battery_%20Life_Calculation_T1000_AB.xlsx)。

### 充电状态

|状态|指示灯|
|----|----|
|充电中|LED 每 3 秒闪烁一次。|
|充满电|LED 常亮。|
|充电异常|当设备在 0°C 以下或 45°C 以上充电时，设备将进入充电保护状态，无法充电。<br/>LED 会快速闪烁。|

:::caution 充电异常警报
如果指示灯在充电时“快速闪烁”，可能是电源电压不足或接触不良。

请检查您的电源或尝试更换其他电源适配器。
:::

### 充满电需要多长时间？

通常需要大约 **2 小时**充满电。

### 充电时可以继续上传数据吗？

是的，充电时可以继续上传数据。

## 传感器相关

### 没有传感器数据

为了节省电量，温度/光线传感器功能默认关闭，因此您需要先在 SenseCAP Mate APP 上启用它。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/enable-sensor.png" alt="pir" width={500} height="auto" /></p>

## 缓存数据

### 它是如何工作的？

当 LoRaWAN 信号较弱或没有网络覆盖时，数据将保存在设备中。当设备返回到有 LoRaWAN 网络覆盖的区域时，它将优先发送实时数据，然后上传缓存数据。

在每个上传周期中，它将优先上传最新位置，然后是缓存数据。每个周期仅上传少量历史数据，因此不会影响占空比。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={700} height="auto" /></p>

### 注意事项

由于设备只能缓存大约 1,000 条离线数据，如果您长时间处于没有 LoRaWAN 网络覆盖的地方，当离线数据达到上限时，一些旧数据将被新数据覆盖，因此您可能会“丢失”一些数据。

## 如何批量配置

请参考[快速入门](https://wiki.seeedstudio.com/Get_Started_with_SenseCAP_T1000_tracker/#connect-to-sensecap-mate-app)来设置第一个设备，然后点击右上角的 `Template` 模块。

点击 `Save as Template`，为模板命名，然后点击 `Confirm`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/template-save.png" alt="pir" width={600} height="auto" /></p>

当您稍后配置其他设备时，可以直接选择您保存的模板。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/choose-template.png" alt="pir" width={600} height="auto" /></p>

如果您想将模板分享给其他人，可以选择 `Copy Link to Share` 或 `Download Template`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/share-temp.png" alt="pir" width={600} height="auto" /></p>

其他用户可以通过复制共享的 URL 或导入模板文件来选择使用您的模板。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/import-temp.png" alt="pir" width={600} height="auto" /></p>

## 时间戳错误

如果您发现载荷中的时间戳错误，请将固件升级到最新版本。

查看[固件升级和发布说明](https://wiki.seeedstudio.com/fm_release_for_SenseCAP_T1000/)以获取更多详细信息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/time-error.png" alt="pir" width={400} height="auto" /></p>

## 集成

根据您的需求和目标，集成应用程序可以通过多种方式完成。以下是一些常见的集成选项：

* **SenseCAP API**：

使用应用程序编程接口（API）是一种常见的方法，可以让您的应用程序与其他应用程序或服务进行通信。您可以将设备连接到 SenseCAP Cloud，然后使用 SenseCAP API 获取数据。

SenseCAP API 用于用户管理物联网设备和数据。它结合了三种类型的 API 方法：HTTP 协议、MQTT 协议和 WebSocket 协议。

查看 [SenseCAP API](https://wiki.seeedstudio.com/Cloud_Chain/SenseCAP_API/SenseCAP_API_Introduction/) 以获取更多详细信息。

* **LoRaWAN 网络服务器**：

您可以使用 [SenseCAP M2 多平台网关](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)，然后直接使用内置的 LoRaWAN 网络服务器进行集成。

查看 [LNS 配置](https://wiki.seeedstudio.com/SenseCAP_m2_LNS_config) 以获取更多详细信息。