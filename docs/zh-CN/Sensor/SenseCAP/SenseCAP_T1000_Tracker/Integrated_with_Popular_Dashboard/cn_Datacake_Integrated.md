---
description: SenseCAP_T1000_tracker_and_Datacake_Integrated
title: Datacake 集成（通过 TTS）
keywords:
- SenseCAP
- tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_T1000_tracker_Datacake_TTS
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

[Datacake](https://datacake.co/) 是一个多功能的物联网平台，它提供了无需编程技能即可构建自定义物联网应用的可能性。

为了满足构建物联网应用的日益增长的需求，我们与 Datacake 合作创建了模板，使社区能够方便快捷地通过 The Things Network 将 [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) 添加到 Datacake 中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_sense.png" alt="pir" width={800} height="auto" /></p>

在开始设置之前，请先查看 [将 SenseCAP T1000 连接到 TTS](https://wiki.seeedstudio.com/SenseCAP_T1000_tracker_TTN) 以先将您的 SenseCAP T1000 Tracker 连接到 TTS。

## 配置 Datacake

首先，在 [Datacake](https://app.datacake.de/signup) 上注册一个账户。

### 创建工作区

首先，通过点击左上角的 **Create Workspace** 按钮在 Datacake 上创建一个工作区。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake-workspace.png" alt="pir" width={800} height="auto" /></p>

### 添加设备

点击左侧菜单中的 **Devices**。  
要添加新设备，点击右侧的 **Add Device** 按钮。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_add.png" alt="pir" width={800} height="auto" /></p>

选择 **LoRaWAN** 来添加 LoRaWAN 设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/lorawan.png" alt="pir" width={800} height="auto" /></p>

我们为用户上传了一个模板，您只需选择产品型号并粘贴您的设备 EUI 即可快速设置。

:::info
设备模板：Seeed SenseCAP T1000
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_tem.png" alt="pir" width={800} height="auto" /></p>

### 获取 API Token

在 Datacake 工作区中，导航到 **Account Settings**，然后复制您的 API Token。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_api.png" alt="pir" width={800} height="auto" /></p>

## 配置 The Things Stack

在 The Things Stack 中，导航到 **Integrations** → **Webhooks**，然后点击 **Add Webhook**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>

选择 Datacake Webhook 模板。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_ts.png" alt="pir" width={800} height="auto" /></p>

通过填写 Webhook ID 为您的集成命名，并粘贴从 Datacake 获取的 API Token 以进行授权。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_webhook2.png" alt="pir" width={800} height="auto" /></p>

## Datacake Dashboard

然后，您可以在 Dashboard 上查看您的设备数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_dashbaord.png" alt="pir" width={800} height="auto" /></p>