---
description: SenseCAP_T1000_tracker_and_TagoIO_Integrated
title: TagoIO 集成（通过 TTS）
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_T1000_tracker_TagoIO_TTS
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

[TagoIO](https://tago.io/) 是一个物联网云平台，专为企业管理设备、数据、用户、分析和集成而设计。其直观的界面使各类企业能够轻松构建和部署创新的物联网解决方案。

本章节内容将指导用户如何通过 TTN 将 [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) 连接到 TagoIO。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tagoio.png" alt="pir" width={800} height="auto" /></p>

在开始设置之前，请先查看 [将 SenseCAP T1000 连接到 TTS](https://wiki.seeedstudio.com/SenseCAP_T1000_tracker_TTN) 以将您的 SenseCAP T1000 Tracker 连接到 TTS。

## 配置 TagoIO

首先，创建一个 [TagoIO](https://admin.tago.io/signup) 账户。

### 添加设备

导航到 **Devices** 标签页并点击 **Add Device**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tagoio_device.png" alt="pir" width={800} height="auto" /></p>

搜索 **Seeed SenseCAP T1000** 以快速设置。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tagoio_template.png" alt="pir" width={800} height="auto" /></p>

为您的设备命名并粘贴设备 EUI，然后点击 **Create my Device**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/c_my_device.png" alt="pir" width={800} height="auto" /></p>

### 生成授权

点击 **Generate authorization** 并复制您的授权信息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/authorization.png" alt="pir" width={800} height="auto" /></p>

## 配置 The Things Stack

在 The Things Stack 中，导航到 **Integrations** → **Webhooks**，然后点击 **Add Webhook**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>

选择 TagoIO Webhook 模板。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/TTS_web_IO.png" alt="pir" width={800} height="auto" /></p>

通过填写 Webhook ID 来命名您的集成，并粘贴 Plugin ID 和 TagoIO token。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/webhook_TTS.png" alt="pir" width={800} height="auto" /></p>

设备连接后，您可以在 TagoIO 的 **Live Inspector** 标签页中检查所有连接。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/live_inspec.png" alt="pir" width={800} height="auto" /></p>

## TagoIO Dashboard（可选）

Dashboard 是一个实时可视化和交互数据的地方，您可以根据需求自定义您的 Dashboard。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tagoio_dash.png" alt="pir" width={800} height="auto" /></p>

导航到 **Dashboard** 标签页，为您的 Dashboard 命名并点击 **Create my Dashboard**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_dashfortagoio.png" alt="pir" width={800} height="auto" /></p>

**位置 Dashboard**

点击 **Add widget**，选择 **Map** 类型。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/maptagoio.png" alt="pir" width={800} height="auto" /></p>

**数据来源**：您的设备 -- 位置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map_done_io.png" alt="pir" width={800} height="auto" /></p>