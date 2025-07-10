---
description: 将 SenseCAP T1000 Tracker 连接到 Loriot
title: 连接到 Loriot
keywords:
- Tracker
- Loriot
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_T1000_Tracker_Loriot
last_update:
  date: 05/15/2025
  author: KeweiLee
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

[LORIOT](https://docs.loriot.io/display/NMS/Getting+Started) LoRAWAN 网络服务器 (LNS) 是硬件独立的，并支持市场上的所有 LoRaWAN® 网关和传感器。

:::info
如果您还没有 Loriot 账户，请点击 [这里](https://loriot.io/register.html)，选择您所在地区的一个 LORIOT 社区公共服务器并注册一个新账户。
:::

## 添加网络

网络是 LoRaWAN 网关的集合，提供一个高效的环境来监控和管理您的网关。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/AddNetwork.png" alt="pir" width={800} height="auto" /></p>

添加新网关时，需要将其分配到一个网络，可以是单独一个网关，也可以是多个网关的集合。

将网关分组到网络中的典型方法包括按地理位置、型号、客户或任何适合您的结构进行分组。

对于网络中可以包含的网关数量没有限制（只要在账户网关限制内），但每个网关只能属于一个网络。

### 添加您的第一个网关

通过添加您的第一个网关来启动您的 LoRaWAN 网络！您也可以按照 Loriot 的 [逐步指南](https://docs.loriot.io/display/NMS/Register+a+Gateway+or+Base+Station) 注册网关或基站。

这里我们以创建一个网关（Semtech Basics Station）为例。导航到 `Network`，然后点击您刚刚添加的网络。点击 `Add Gateway`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/AddGateway.png" alt="pir" width={800} height="auto" /></p>

页面下半部分会出现网关列表，点击相关网关型号的图片进行选择。
要注册网关，需要输入网关的 eth0 MAC 地址（六个八位字节，用冒号分隔）。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/NInfo.png" alt="pir" width={800} height="auto" /></p>

最后，可以设置网关的位置，可以通过两种不同的方式定义：选择地图上的位置或填写所需信息以手动注册地址。

### 配置您的网关证书

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/ConfigureGateway.png" alt="pir" width={800} height="auto" /></p>

在 `Certificate` 页面，您将找到网络服务器地址、网络服务器端口，并能够下载或复制 TLS CA 证书以配置您的网关型号。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/Certificate.png" alt="pir" width={800} height="auto" /></p>

在您的网关用户界面中，选择 "LoRa Basics Station" 作为操作模式。请确保使用上一步中获取的信息配置地址、端口和服务器证书。这是为了建立网关与 LORIOT 网络管理系统之间的连接。

返回 LORIOT 的用户界面，验证您的 LoRa Basics™ Station 是否已上线并正常运行，与 LORIOT 网络管理系统连接成功。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/GatewayOnline.png" alt="pir" width={800} height="auto" /></p>

## 添加应用程序

[应用程序](https://docs.loriot.io/display/NMS/Create+a+New+Application) 是我们注册、管理和组织设备以及选择设备数据输出目的地的地方。
添加新设备时，它会被分配到一个应用程序，这会通知服务器您的设备注册在哪个应用程序中以及您选择的数据输出详细信息。

只要设备总数不超过用户账户限制，无论传感器类型或制造商如何，都可以将任意数量的设备添加到一个应用程序中。

通常，一个应用程序会包含特定用例的所有设备（例如智能建筑中的所有传感器）或相同类型的设备（例如温度传感器）。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/AddApplicaiton.png" alt="pir" width={800} height="auto" /></p>

### 添加您的第一个设备（SenseCAP T1000 Tracker）

点击 `Enroll Device`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/AddDevice.png" alt="pir" width={800} height="auto" /></p>

LORIOT 网络服务器支持 LoRaWAN 1.0.x 和 1.1 设备。设备可以通过两种不同的注册方式添加。推荐使用 OTAA（空中激活）选项，但也可以使用 ABP（个性化激活）。成功通过 SenseCAP Mate App 蓝牙连接到 Tracker 后，您可以在此标签中获取 OTAA 信息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_3.png" alt="pir" width={600} height="auto" /></p>

将平台设置为其他平台，然后复制设备 EUI/APP EUI/APP Key。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/OTAAInfo.png" alt="pir" width={400} height="auto" /></p>

最后，选择 Enroll。一旦您添加了设备，您就可以在 Loriot 上看到数据流。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/DeviceDetails.png" alt="pir" width={800} height="auto" /></p>