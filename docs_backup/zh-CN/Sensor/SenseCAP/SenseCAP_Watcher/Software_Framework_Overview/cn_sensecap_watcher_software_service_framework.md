---
description: 本文提供了配置 Watcher 设备的三种不同处理部署流程的详细设置指南，包括云高效处理流程、混合智能处理流程和本地安全处理流程。文章概述了 Watcher 软件服务框架，展示了用户、SenseCraft Mate 应用程序和 Watcher 设备之间的交互。
title: Watcher 软件服务介绍
image: https://files.seeedstudio.com/wiki/watcher_getting_started/50.jpg
slug: /cn/watcher_software_service_framework
last_update:
  date: 05/15/2025
  author: Evelyn Chen
sidebar_position: 2
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 框架概述

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/1.png" style={{width:800, height:'auto'}}/></div>

这是 Watcher 的软件服务框架，展示了用户、SenseCraft Mate 应用程序和 Watcher 设备之间的交互和任务流程。我们提供多种配置选项，允许用户根据数据安全性和服务质量需求自定义服务部署。

该框架集成了云端 AI 服务和本地 AI 部署，结合了数据服务、设备通信服务、任务编排、图像分析服务、警报通道代理和模型训练服务。  
您可以选择在云端或本地基础设施中部署您的 LLM（大语言模型）。原始数据和结果也可以选择存储或传输到云端或本地设备。  
云存储与本地存储解决方案相比，以及在启用 GPU 的虚拟机中对高性能存储的需求。

这些组件形成了三种供用户选择的部署选项：

1. **云高效处理流程**
2. **混合智能处理流程**
3. **本地安全处理流程**

以下章节将详细解释框架并指导您配置这三种部署选项中的每一种。

**数据服务**

Watcher 提供灵活的数据服务，允许您连接到 SenseCraft 数据平台以上传警报数据、设备状态和预览图像。SenseCraft 平台通过 HTTP 请求提供 MQTT 代理地址和令牌。或者，您可以选择通过应用程序上的蓝牙配置将数据上传到第三方平台，完全绕过 SenseCraft 平台。

**设备通信服务**

在设备通信方面，Watcher 支持通过 MQTT 进行远程任务流程和固件 OTA 更新。您可以使用 SenseCraft Mate 应用程序创建任务，并通过 SenseCraft 平台将其发送到设备。应用程序还会检查最新的固件版本，如果有更新，会通知您。确认后，平台会将更新发送到设备。

**任务编排服务**

Watcher 的任务编排服务支持直接的语音交互，您的对话通过 HTTP 发送到服务进行处理，然后将任务流程返回到设备。SenseCraft Mate 应用程序还可以检索任务流程并远程发送到设备。

**视觉分析服务**

在视觉分析方面，Watcher 提供统一的图像分析服务。您可以通过蓝牙配置选择 SenseCraft、OpenAI 或第三方 AI 代理，并输入相关的 API 密钥。当设备发送图像时，它将利用所选服务，无论是本地的 llava 还是第三方服务（如 OpenAI）。

**警报通知服务**

对于警报通知，Watcher 提供多种选项，包括来自 SenseCraft 云的应用程序推送通知、与其他硬件的 UART 连接，以及与本地服务器或第三方平台的 HTTP 连接。警报还可以使用标准数据格式发送到 Discord 等平台。此外，Watcher 可以将这些通知转发到其他平台，如 Home Assistant、IFTTT 或 Webhooks，使用兼容的格式。有关更多详细信息，请参阅 HTTP 代理应用程序。

您可以灵活选择多种部署选项，并轻松配置个性化的 Watcher 助手。无论您的优先事项是数据安全还是处理效率，我们都提供三种可适应的解决方案：云高效处理流程、混合智能处理流程和本地安全处理流程。定制您的 Watcher 助手，为您提供最佳的智能服务体验！

## 云高效处理流程

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/20.png" style={{width:500, height:'auto'}}/></div>

此图展示了云高效处理流程的概述，说明了用户、云服务和本地应用程序之间的交互。在此设置中，所有服务均通过 SenseCraft 云执行，以提供简化且高效的工作流程。在您开始使用并完成设备绑定后，可以根据需要选择适当的云端或本地服务。

以下部分解释了云高效处理流程的每个部分，并提供配置指南：

**步骤 1**. 初始设置：  
完成 [设置](https://www.seeedstudio.com/getting_started_with_watcher/#device-binding-and-ota-upgrade) 并选择 SenseCraft AI 服务后，您可以开始使用 Watcher 的云服务。

**步骤 2**. 用户交互：  
有两种方式可以激活 SenseCraft 服务并将任务分配给 Watcher，具体如下（参见章节 XXX）：

* 选项 1：通过应用程序：用户可以通过移动应用程序启用 SenseCraft AI 服务，然后在聊天中发送任务消息。
* 选项 2：通过语音命令：用户可以直接通过语音聊天向 Watcher 分配任务。

**步骤 3**. 任务编排：  
一旦 SenseCraft 被激活，它将作为平台即服务（PaaS）提供任务编排服务。这包括三个核心元素：

* STT（语音转文本）：将语音命令转换为文本。
* TTS（文本转语音）：将基于文本的响应转换为语音输出。
* AI 服务：负责理解、处理和编排任务。根据任务的内容，服务从 SenseCraft 模型库中选择最合适的模型，包括大语言模型（LLMs）和 TinyML 模型。

除了在手动配置中手动选择本地 TinyML 模型外，还可以根据您的输入提示自动处理任务。当任务编排模型解释您的提示后，它可以从 SenseCraft 库中调用适当的 TinyML 模型。例如，如果用户请求“当你看到鸟时通知我”，任务编排服务将从 TinyML 库中选择一个鸟类识别模型，以优化响应速度。

在*手动配置*中，您可以选择 **Vision LLM**（更高的准确性）或 **TinyML 模型**（更快的处理速度）。

**步骤 4**. 编排后的任务分发  
一旦任务编排完成，任务分发的方法将取决于 SenseCraft 远程控制功能的状态：

* 如果启用了远程控制：系统将利用 PaaS 数据服务和设备通信服务，通过 MQTT broker 将任务结果发送到 Watcher。
* 如果未启用远程控制：任务将通过蓝牙分发到 Watcher。如果设备超出蓝牙范围，您需要启用远程控制以进行任务传输。

**步骤 5**. 视觉分析任务处理  
从 SenseCraft 接收到任务后，Watcher 设备将调用视觉分析服务。它将使用用户选择的 AI 模型或由任务编排服务确定的模型来分析任务。

**步骤 6**. 系统通知  
Watcher 可以通过多种方式通知用户或本地系统：

* 应用推送通知  
* 串口/UART 输出  
* HTTP 推送通知  

Watcher 还可以将数据发送到本地服务器、第三方应用程序或警报服务，例如 Discord、Home Assistant 或 IFTTT。  
有关更多详细信息，请参阅 HTTP Proxy Application 部分。

## 混合智能处理流程  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/3.png" style={{width:800, height:'auto'}}/></div>

此图展示了混合智能处理流程，其中涉及用户交互、部分云服务和本地应用程序。混合方法通过结合基于云的任务编排和本地视觉模型，平衡了数据安全性、用户体验和效率。

**步骤 1**. 初始设置  
在[开始使用和设备绑定](https://wiki.seeedstudio.com/getting_started_with_watcher/#device-binding-and-ota-upgrade)后，用户可以根据需求选择适当的本地服务，启用私人 Watcher 服务，并输入 Watcher 服务器 URL。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/1.gif" style={{width:400, height:'auto'}}/></div>

**步骤 2**. 用户交互  
用户可以通过 SenseCraft 应用发送任务，这将启动平台内的任务编排服务。

**步骤 3**. 任务编排  
一旦接收到任务，SenseCraft 平台作为 PaaS（平台即服务）将使用三个核心服务来编排任务：

* STT（语音转文本服务）  
* TTS（文本转语音服务）  
* AI 服务，用于理解、处理和任务编排  

任务编排服务会解释任务，并根据任务需求从 SenseCraft 模型库或 LLM（大型语言模型）中选择适当的模型。

除了在手动配置中手动选择本地 TinyML 模型外，还可以根据您的输入提示自动处理任务。当任务编排模型解释您的提示后，它可以从 SenseCraft 库中调用适当的 TinyML 模型。例如，如果用户请求“当你看到鸟时通知我”，任务编排服务将从 TinyML 库中选择一个鸟类识别模型，以优化响应速度。

在*手动配置*中，您可以选择 **Vision LLM**（更高的准确性）或 **TinyML 模型**（更快的处理速度）。

**步骤 4**. 编排后的任务分发  
任务编排完成后，系统将根据 SenseCraft 远程控制的状态选择分发方法：

* 如果启用了远程控制：系统将使用 PaaS 数据服务和设备通信服务，通过 MQTT broker 将任务结果发送到 Watcher。  
* 如果未启用远程控制：任务将通过蓝牙分发到 Watcher。如果设备超出蓝牙范围，必须启用远程控制以继续操作。

**步骤 5**. 视觉分析任务处理  
一旦 Watcher 接收到任务，它将调用部署在本地服务器上的本地视觉分析服务。任务将使用用户选择的 AI 模型或由 SenseCraft 任务服务编排的模型进行分析。

**步骤 6**. 系统通知  
Watcher 可以通过多种方式通知用户或本地系统：

* 应用推送通知  
* 串口/UART 输出  
* HTTP 推送通知  

Watcher 还可以将数据发送到本地服务器、第三方应用程序或警报服务，例如 Discord、Home Assistant 或 IFTTT。  
有关更多详细信息，请参阅 HTTP Proxy Application 部分。

## 本地安全处理流程  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/4.png" style={{width:800, height:'auto'}}/></div>

此图概述了“本地安全处理流程”，该流程专注于与本地部署应用程序的完整用户交互。为了确保数据隐私，任务编排和图像分析服务完全部署在本地服务器上，提供全面的隐私保护。然而，这种方法限制了功能，因为无法使用 SenseCraft 云服务。任务只能通过现场语音命令启动，用户必须配置通知服务以查看历史数据。

**步骤 1**. 初始设置  
在[开始使用和设备绑定](https://wiki.seeedstudio.com/getting_started_with_watcher/#device-binding-and-ota-upgrade)后，用户可以根据需求选择适当的本地服务，启用私人 Watcher 服务，并输入 Watcher 服务器 URL。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/1.gif" style={{width:400, height:'auto'}}/></div>

**步骤 2**. 用户交互：
用户可以通过按下 Watcher 设备上的滚轮按钮并通过语音聊天发送命令来发布任务。

**步骤 3**. 任务编排：

托管在本地服务器上的 Watcher 服务器提供任务编排服务，类似于 SenseCraft 任务编排系统。该本地系统由三个核心服务组成：

* STT（语音转文本服务）
* TTS（文本转语音服务）
* AI 服务，用于理解、处理和编排任务。

在解释任务后，本地任务编排服务会将任务分派给 Watcher。

**步骤 4**. 视觉分析任务处理
一旦 Watcher 接收到任务，它将调用部署在本地服务器上的本地视觉分析服务。任务将使用任务编排期间选择的 AI 模型进行分析。

**步骤 5**. 系统通知
Watcher 可以通过以下方法通知用户或本地系统：

* 串口/UART 输出
* HTTP 推送通知

此外，Watcher 可以将数据发送到本地服务器、第三方应用程序或警报服务，例如 Discord、Home Assistant 和 IFTTT。
有关更多详细信息，请参阅章节 HTTP Proxy Application。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>