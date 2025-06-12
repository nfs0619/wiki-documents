---
description: SenseCAP_T1000_tracker_and_Qubitro_Integrated
title: Qubitro 集成（通过 TTS）
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_T1000_tracker_Qubitro_TTS
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

[Qubitro](https://www.qubitro.com/) 是一个面向开发者的设备数据平台（DDP），提供开发解决方案所需的工具、工作流程和基础设施，无需手动集成多个服务。Qubitro 开箱即支持流行的数据源，并提供用于实时协作的工具，结合可扩展的基础设施。

本章节内容将指导用户如何通过 TTN 将 SenseCAP [T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) 连接到 Qubitro。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/qubitro_in1.png" alt="pir" width={800} height="auto" /></p>

在开始设置之前，请先查看 [将 SenseCAP T1000 连接到 TTS](https://wiki.seeedstudio.com/SenseCAP_T1000_tracker_TTN)，以便先将您的 SenseCAP T1000 Tracker 连接到 TTS。

## 配置 Qubitro

首先，创建一个 [Qubitro](https://portal.qubitro.com/login) 账户。创建账户后，您将自动进入 Starter 计划。

### 从 Qubitro Dashboard 获取凭证

创建一个新项目。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_new_project.png" alt="pir" width={800} height="auto" /></p>

点击 **New source** 按钮，然后在列表中选择 **The Things Stack**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/new_source.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_TTS.png" alt="pir" width={800} height="auto" /></p>

然后您将获得 Project ID 和 Webhook Signing Keys。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/TTN_source.png" alt="pir" width={800} height="auto" /></p>

## 配置 The Things Stack

导航到 [TTS Console](https://eu1.cloud.thethings.network/console/) 以配置 webhook 集成。

在 The Things Stack 中，导航到 **Integrations** → **Webhooks**，然后点击 **Add Webhook**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>

选择 Qubitro Webhook 模板。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/TTN_Q.png" alt="pir" width={800} height="auto" /></p>

通过填写 Webhook ID 命名您的集成，并粘贴在 Qubitro Portal 第一步中提供的值。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_kyes.png" alt="pir" width={800} height="auto" /></p>

点击 **Create Qubitro Webhook** 按钮，然后返回 Qubitro Portal。

## 设备状态

点击 **Go to project** 按钮，然后点击 **Refresh** 按钮以验证设备是否成功列出。

:::info 提示
一旦集成配置完成，连接到 The Things Stack 上同一项目的所有设备将自动同步。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_status_device.png" alt="pir" width={800} height="auto" /></p>

## 在 Qubitro 上配置解码器

导航到您的设备页面，然后点击 **Create function button**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_create_function.png" alt="pir" width={800} height="auto" /></p>

选择 **Decoder function**，然后点击 **Get started**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_function.png" alt="pir" width={800} height="auto" /></p>

我们为用户上传了一个模板，您只需选择产品型号即可快速设置。

:::info
**Formatter type**: Device template<br />
**Manufacturer Brand**: Seeed Studio<br />
**Model**: SenseCAP_T1000
:::

然后点击 **Save and complete**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/function_setup.png" alt="pir" width={800} height="auto" /></p>

## 检查数据

导航到设备并点击 **Data** 标签以验证接收的数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_data_view.png" alt="pir" width={800} height="auto" /></p>

## 自定义仪表板（可选）

**位置 Dashboard**

导航到您的仪表板页面，然后点击 **Create new**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_dash.png" alt="pir" width={800} height="auto" /></p>

命名您的仪表板并点击 **Create**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/new_dash.png" alt="pir" width={800} height="auto" /></p>

选择 **Map** 作为小部件类型。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_setmap.png" alt="pir" width={800} height="auto" /></p>

选择您的设备和 **coordinates** 值。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/coordi.png" alt="pir" width={800} height="auto" /></p>

然后您可以在仪表板上查看您的位置。
您还可以自定义其他小部件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/dashboard_view.png" alt="pir" width={800} height="auto" /></p>