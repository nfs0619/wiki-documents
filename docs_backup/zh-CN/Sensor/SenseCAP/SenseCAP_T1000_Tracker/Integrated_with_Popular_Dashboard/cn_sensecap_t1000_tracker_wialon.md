---
description: SenseCAP_T1000_tracker_and_Wialon_Integrated
title: Wialon 集成
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_T1000_tracker_Wialon
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

[Wialon](https://wialon.com/) 是一个用于 GPS 监控和物联网的车队管理软件平台，覆盖全球 150 多个国家，追踪超过 370 万个移动和固定设备，拥有 2500 多家合作伙伴公司、700 家硬件制造商以及数百个基于 Wialon 的解决方案开发商。

本章节内容将指导用户如何将 SenseCAP [T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) 连接到 Wialon 平台。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wialon-sensecap.png" alt="pir" width={800} height="auto" /></p>

在开始设置之前，请先查看 [快速入门](https://wiki.seeedstudio.com/Get_Started_with_SenseCAP_T1000_tracker)，将您的 SenseCAP T1000 Tracker 连接到 SenseCAP Cloud。

## 在 SenseCAP 门户获取 API

登录 [SenseCAP 门户](https://sensecap.seeed.cc/portal)，导航到 `Access API keys`，点击 `Create Access Key`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sensecap-api.png" alt="pir" width={800} height="auto" /></p>

然后您将获得 `API ID` 和 `Access API keys`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sensecap-api2.png" alt="pir" width={800} height="auto" /></p>

## Wialon 配置

登录 [Wialon Hosting](https://hosting.wialon.com/?lang=en)。

**Wialon Hosting** 是一个用于 GPS 监控和物联网的平台，存储和管理在其数据中心中。

### 添加设备单元

导航到 **Units** 标签页，点击 **New** 添加一个新设备单元。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/-add.png" alt="pir" width={800} height="auto" /></p>

为您的设备命名，并将 `Device Type` 选择为 `SenseCAP API`，点击扳手图标填写属性。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-news.png" alt="pir" width={800} height="auto" /></p>

**API host**: sensecap.seeed.cc<br/>
**API ID**: SenseCAP 门户中的 API ID<br/>
**API Password**: SenseCAP 门户中的 Access API keys<br/>
**Unique ID**: 您设备的 EUI。

保持您的设备在线，然后您可以在地图上看到设备的位置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data-monitor.png" alt="pir" width={800} height="auto" /></p>

### 地理围栏（可选）

地理围栏是地图上的一个限定区域，可用于监控目的。

导航到 `Geofences` 标签页，点击 `New` 添加一个新的地理围栏。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence-set2.png" alt="pir" width={800} height="auto" /></p>

* 指定地理围栏名称。
* 选择类型。
* 在地图上标记地理围栏的中心（双击所需位置）。
* 指定地理围栏的半径。
* 点击 `Save`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence-set.png" alt="pir" width={800} height="auto" /></p>