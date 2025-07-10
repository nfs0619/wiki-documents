---
description: SenseCAP_T1000_tracker_and_Trackpac_Integrated
title: Trackpac 集成
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_T1000_tracker_trackpac
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

[Trackpac](https://trackpac.io/) 是一个创新的物联网 (IoT) 仪表盘 管理系统，旨在简化对各种物联网设备的监督、控制和通知流程。这些设备涵盖了多种功能，包括追踪器、温度传感器、湿度传感器、液位指示器以及其他基于传感器的数据测量工具。

本章节内容将指导用户如何将 [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) 连接到 Trackpac。

## 配置设备

请查看 [快速入门指南](https://wiki.seeedstudio.com/Get_Started_with_SenseCAP_T1000_tracker/) 以正确设置您的设备。

选择平台为 `Other Platform`，将 `APP EUI` 配置为推荐值：
```cpp 
545241434B504143
```

:::tip
如果您想恢复原始配置，可以通过 `reset` 恢复原始密钥。
:::

然后复制 `Device EUI`、`APP EUI` 和 `APP key`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trackpac.png" alt="pir" width={300} height="auto" /></p>

## 配置 Trackpac 门户

登录到 [Trackpac 门户](https://v2.trackpac.io)。

### 添加设备

导航到 `Devices`，点击 `+` 图标以添加新设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-device-trackpac.png" alt="pir" width={800} height="auto" /></p>

选择 `Enter Keys Manually`，为设备命名，并配置 `Device EUI`、`APP EUI` 和 `APP key`。

**LoRaWAN 网络**: Helium

:::note
请检查 [Helium 网络覆盖范围](https://explorer.helium.com/)。
:::

**设备类型**: SenseCAP T1000

然后点击 `Add Device`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-trackpac.png" alt="pir" width={800} height="auto" /></p>

## 追踪

现在您的 SenseCAP T1000 已成功集成到 Trackpac，您可以查看数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/check-trackpac.png" alt="pir" width={800} height="auto" /></p>

## 添加地理围栏（可选）

在添加地理围栏之前，您需要先添加联系人。

导航到 `Contacts` 部分，点击右上角的 `+` 按钮。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/contact1.png" alt="pir" width={800} height="auto" /></p>

输入 `Name` 并选择 `Select Contact Type`：在提供的字段中输入联系人的姓名。选择您要添加的联系人类型——他们将通过 SMS、Email 或两者接收警报。

在相应字段中输入联系人的电子邮件和/或电话号码。

输入所有必要信息后，点击 `Add` 按钮完成并添加联系人。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/contact2.png" alt="pir" width={800} height="auto" /></p>

导航到 `Geofences` 选项。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence1.png" alt="pir" width={800} height="auto" /></p>

点击 `+` 箭头。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence2.png" alt="pir" width={800} height="auto" /></p>

输入地理围栏名称并设置半径：使用滑块或输入字段设置地理围栏的半径（以米为单位）。

**配置警报**：切换是否在地理围栏边界被跨越时接收警报。

* 非工作时间：指定是否仅在某些时间段外接收警报。

* 开始和结束时间：如果选择了“非工作时间”，输入您不希望接收警报的时间范围。

**选择警报联系人**：

通过输入姓名或点击框并从列表中选择，选择哪些已保存的联系人应接收地理围栏警报。

**设置地理围栏中心**：

* 点击地图：使用鼠标点击您希望设置为地理围栏中心的位置。

* 使用地理定位：或者，您可以使用地理定位功能（通常表示为指南针或位置图标）放大到您的当前位置并将其设置为地理围栏中心。

点击 `Add Geofence` 保存。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence3.png" alt="pir" width={800} height="auto" /></p>

然后，当追踪器进入或离开地理围栏时，您将收到警报。