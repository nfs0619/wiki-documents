---
description: 本文介绍了 Watcher 在使用 SenseCraft AI 时的收费计划。
title: 价格与优势
image: https://files.seeedstudio.com/wiki/watcher_getting_started/price_month_simpler_1.webp
slug: /cn/watcher_price
last_update:
  date: 05/15/2025
  author: Citric
sidebar_position: 3
---

# Watcher 的 SenseCraft AI 计划与优势

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

在 Watcher，我们致力于为开发者提供清晰透明的定价结构，以便将人工智能集成到他们的项目中。我们理解每位开发者的需求各不相同，因此我们提供了一系列定价计划，以满足各种需求和预算。为了帮助您做出明智的选择，我们概述了我们的定价模型的关键方面以及每个计划中包含的具体功能。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/price_month_simpler.png" style={{width:1000, height:'auto'}}/></div>

## 我们的定价计划

<div class="table-center">
	<table align="center">
		<tr>
			<th> </th>
      <th>本地部署</th>
			<th>SenseCraft 标准版</th>
      <th>SenseCraft 专业版</th>
		</tr>
		<tr>
			<th>数据保留</th>
			<td align="center">用户保存</td>
			<td align="center">3 个月</td>
			<td align="center">3 个月</td>
		</tr>
		<tr>
			<th>数据 API</th>
			<td align="center">本地 HTTP API</td>
			<td align="center">MQTT/HTTP API</td>
			<td align="center">MQTT/HTTP API</td>
		</tr>
		<tr>
			<th>任务分析</th>
			<td align="center">无限制</td>
			<td align="center">无限制</td>
			<td align="center">无限制</td>
		</tr>
		<tr>
			<th>图像分析</th>
			<td align="center">无限制</td>
			<td align="center">15 分钟/请求</td>
			<td align="center">20000 请求</td>
		</tr>
		<tr>
			<th>与 LLM 聊天</th>
			<td align="center">无限制</td>
			<td align="center">200 请求/月</td>
			<td align="center">1000 请求</td>
		</tr>
		<tr>
			<th>TinyML 模型与模型训练</th>
			<td align="center">无限制</td>
			<td align="center">无限制</td>
			<td align="center">无限制</td>
		</tr>
    <tr>
			<th>价格</th>
			<td align="center">免费</td>
			<td align="center">免费</td>
			<td align="center">一次免费试用 & 6.9 美元计划</td>
		</tr>
	</table>
</div>

:::caution
1. SenseCraft 专业版的付费计划与每台设备的 EUI 绑定。这意味着如果您有五台设备都需要使用 SenseCraft 专业版，则需要分别为每台设备付费。

2. SenseCraft 专业版的计费服务基于请求数量。当您购买服务时，您将获得服务提供的请求数量，这些请求没有有效期。

3. 当您的设备绑定到 SenseCraft APP 时，SenseCraft 专业版会自动激活试用服务。

4. SenseCraft 专业版会在激活试用时一次性计算所有请求数量，使用完后会自动切换到 SenseCraft 标准版。
:::

在 Watcher，我们致力于为开发者提供灵活性和可扩展性，以便在 AI 集成中取得成功。我们的定价计划旨在满足从日常实验到大规模部署的各种需求。选择最符合您 AI 使用强度和项目需求的计划，让 Watcher 帮助您充分释放 SenseCraft AI 的潜力。立即开始，按照您的方式体验 AI 的强大功能！

## 理解我们的定价模型

### 数据存储

所有计划均提供慷慨的 **3 个月** 数据存储，包括警报图像、时间戳和警报计数的存储。

### 任务分析

任务分析是指 Watcher 理解和解释用户分配任务的能力，将其分解为更小的可执行组件。这包括确定任务是否可以使用小模型执行，识别要使用的具体模型，识别要检测的行为，以及定义要采取的行动。作为 Watcher 功能的基础，我们努力在所有计划中保持任务分析免费。

### 图像分析

图像分析涉及对 Watcher 捕获的图像进行高级检查，从而识别图像中的对象、活动和上下文。此功能需要使用大型模型，并按使用收费。当您的任务需要使用大型模型进行图像分析时，将计为一次请求。

- 如果您使用的是 **[纯云端 LLM 服务](https://wiki.seeedstudio.com/getting_started_with_watcher_task/#pure-cloud-based-llm-service)**，请求数量将根据您设置的 **捕获频率** 计算。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/llm-app.png" style={{width:1000, height:'auto'}}/></div>

- 对于 **[本地 AI + 云端 LLM 服务](https://wiki.seeedstudio.com/getting_started_with_watcher_task/#local-ai--cloud-based-llm-service)**，当小模型触发检测后调用大型模型进行图像识别时，将计为一次请求。请注意，请求之间的最小间隔不会短于您配置的 **捕获频率**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/local_llm-app.png" style={{width:1000, height:'auto'}}/></div>

图像分析也是 Watcher 的一项非常重要的功能。因此，即使您没有订阅 SenseCraft 专业版，我们也保证至少提供 15 分钟的图像分析服务供您使用。

### 与大型语言模型聊天

与我们强大的大型语言模型进行对话互动是一项高级功能，需要按使用收费。当 SenseCraft 确定您与 Watcher 的对话是一次往返交流，并且 Watcher 生成了响应时，将计为一次请求。

一旦请求数量用完，将无法继续与 Watcher 聊天。

### 模型库、训练与上传

访问我们广泛的 [模型库](https://sensecraft.seeed.cc/ai/#/model?redirect=%2Fdevice)，以及训练和上传您自己的模型的能力，在所有计划中均免费提供。

## 如何订阅？

如果您需要订阅 SenseCraft Pro，您需要在 SenseCraft APP 内完成订阅。第一步是先在 APP 上[绑定您的 SenseCAP Watcher](https://wiki.seeedstudio.com/getting_started_with_watcher/#step-3-device-binding)。目前，SenseCraft Pro 订阅仅对 SenseCAP Watcher 用户开放。

进入 SenseCAP Watcher 的聊天界面，点击右上角的设置齿轮按钮，然后在页面底部附近会有一个 **Subscription（订阅）** 的选项。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/subscription.png" style={{width:250, height:'auto'}}/></div>

在这里，您可以看到当前订阅服务剩余的请求次数。您也可以在此完成订阅。目前我们提供三种不同价格的订阅服务，请根据您的实际使用情况选择不同的计划。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/pay_page1.png" style={{width:250, height:'auto'}}/></div>

一旦您确认了所需的订阅计划，请同意服务协议以进入支付页面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/pay_page2.png" style={{width:250, height:'auto'}}/></div>

目前 SenseCraft APP 支持使用 Paypal 进行支付。一旦支付成功，您将在订阅页面看到已购买的请求次数更新。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/pay_page3.png" style={{width:250, height:'auto'}}/></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时获得顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>