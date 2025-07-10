---
description: 您将获得关于 Watcher 可执行的不同类型任务及其在 SenseCraft 生态系统中的组织方式的扎实基础。
title: 任务分配指南
image: https://files.seeedstudio.com/wiki/watcher_getting_started/85_1.webp
slug: /cn/getting_started_with_watcher_task
last_update:
  date: 05/15/2025
  author: Citric
sidebar_position: 3
---

# SenseCAP Watcher 任务分配指南

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/85.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE">
            <strong><span><font color={'FFFFFF'} size={"4"}> Watcher 视频</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher">
            <strong><span><font color={'FFFFFF'} size={"4"}> Github 仓库</font></span></strong>
    </a>
</div><br />

欢迎来到 Watcher 任务分配教程。在本指南中，我们将引导您完成向 Watcher 发出命令的过程，使您能够有效利用其功能来满足您的监控需求。

Watcher 是一个强大的工具，它依赖用户发出的命令来执行各种监控和分析任务。通过发送精准的指令，您可以引导 Watcher 专注于特定目标、收集数据并提供有价值的洞察。

在接下来的章节中，我们将深入探讨任务分类、模型选择和定价信息的细节。我们的目标是让您掌握必要的知识和技能，以高效地分配任务给 Watcher，并充分利用其功能。我们将探索可用的不同类型任务，指导您选择适合您需求的模型，并提供相关成本的清晰说明。

通过本教程的学习，您将能够深入了解如何有效地向 Watcher 传达您的监控需求。您将能够自信地分配任务、定制设置并获得所需的结果。

准备好掌控 Watcher，释放其全部潜力吧！让我们开始任务分配的旅程，探索 Watcher 如何帮助您实现监控目标！

## SenseCAP Watcher 高级配置

<div class="table-center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ono_v759R0Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

SenseCAP Watcher 是首个用于智能场所的物理 LLM 代理，能够监控场景、触发动作并基于命令进行交互。此视频将介绍 SenseCAP Watcher 如何根据任务分析选择场景触发模型：设备端模型和 LLM 模型。我们还将展示如何配置 RGB 灯、显示与声音警报，以及通知推送模式：APP、UART、HTTP。

## 任务的概念

要开始使用 Watcher，并让 Watcher 能够理解您希望它执行的任务，您需要阅读本文关于任务以及任务设置的注意事项。

### 任务的三个主要组成部分

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_1.png" style={{width:1000, height:'auto'}}/></div>

Watcher 任务由三个主要组成部分构成：

- **对象**：指定的对象直接影响 Watcher 调用的本地识别任务模型。如果 SenseCraft AI 中没有可用的选定模型，则直接调用基于云的大模型引擎进行识别。

- **执行某些操作（可选）**：任务指令中是否包含动作描述决定了 Watcher 是否调用基于云的大语言模型引擎。

- **动作**：触发 Watcher 任务时执行的动作。例如 RGB 灯闪烁、推送通知、Watcher 声音、SNS 等。

这些组成部分共同定义了 Watcher 在触发特定任务时的行为。通过结合对象、可选的动作描述和期望的动作，用户可以创建定制任务以满足其监控需求。

:::caution
图片中的任务示例仅用于便于阅读和理解，语法和条件不一定需要完全按照图片中的显示，但请确保您提供的任务指令包含上述三个组成部分。
:::

接下来，我们将通过一些任务示例来理解相关概念和调用的服务。

### Watcher 本地 AI 服务

当在 Watcher 任务中将“人”设置为对象时，设备会自动选择本地 AI 服务模式。在此模式下，Watcher 首先检查 SenseCraft AI 库中是否有可用的预训练模型用于人检测。如果模型存在，Watcher 会下载该模型并在设备本地执行检测，而无需依赖任何基于云的服务。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_2.png" style={{width:1000, height:'auto'}}/></div>

图片展示了这一过程。当“人”被指定为对象时，Watcher 调用**本地 AI 模型**进行人检测。该模型分析设备摄像头捕获的视频流，并实时检测是否存在人。如果检测到人，Watcher 会触发指定的动作，在本例中是通过设备扬声器播放“Hi, I'm Watcher”的声音。

通过利用本地 AI 服务，Watcher 可以高效且独立地执行人检测，无需持续连接云端或使用大语言模型（LLMs）。这确保了快速响应时间，同时维护用户隐私，因为所有处理都在设备本地完成。

然而，如果所需的对象模型在 SenseCraft AI 库中不可用，Watcher 将切换为使用基于云的 LLM 服务来执行检测。这种回退机制确保即使本地没有特定模型，设备仍然可以完成其任务。参见 [纯 LLM 模式](#pure-llm-mode)。

接着，如果您设置了一个被判断为使用本地 AI 服务的任务，那么在 SenseCraft APP 上，任务配置页面将大致显示如下。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/local-app.png" style={{width:1000, height:'auto'}}/></div>

### Watcher 基于云的 LLM 服务

#### 纯云端 LLM 服务

如果您在 Watcher 任务中将对象设置为“蜡烛”，但 SenseCraft AI 库中没有用于蜡烛检测的预训练模型，设备将**自动切换为使用基于云的大型语言模型（LLM）服务进行检测**。

:::danger
使用 SenseCraft AI 的某些服务可能会产生费用，请参阅以下文档了解详细信息：

**[SenseCraft AI for Watcher 计划与福利](https://wiki.seeedstudio.com/watcher_price/)**
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_3.png" style={{width:1000, height:'auto'}}/></div>

如图所示，当 Watcher 使用 LLM 服务检测到蜡烛时，它会执行指定的操作，在此例中是向连接的移动应用程序发送推送通知。**这确保了即使设备无法本地检测到蜡烛，用户也能及时收到蜡烛存在的警报**。

通过利用基于云的 LLM 服务的强大功能，Watcher 即使在 SenseCraft AI 库中没有特定模型时，也能准确识别对象并触发适当的操作。这种回退机制增强了设备的多功能性，并确保其能够适应各种检测场景。

然而，需要注意的是，与本地检测相比，使用基于云的 LLM 服务可能会导致响应时间略慢，因为数据需要远程处理。此外，此模式需要设备具备活动的互联网连接以与云服务通信。

:::note
用户只需对这三种任务模式有基本的了解，而无需深入了解完整的过程和复杂的细节。引入这些模式是为了确保用户在任务配置过程中遇到不同的用户界面时不会感到困惑或担忧。每种模式都有其独特的应用配置页面，可能会因所选模式而有所不同。用户应根据其具体需求按照说明有效地设置 Watcher 任务。
:::

如果您设置了一个被判断为使用纯 LLM 的任务，那么在 SenseCraft APP 上，任务配置页面将大致显示如下。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/llm-app.png" style={{width:1000, height:'auto'}}/></div>

除了任务配置和执行功能外，纯云端 LLM 服务还允许用户与语言学习模型（LLM）进行纯文本对话。

此功能使您可以直接与 LLM 交互，而无需 Watcher 设备或任何基于图像的输入。您只需在聊天界面中输入消息或查询，LLM 将相应地作出回应。详情请参见 [输入任务](#type-the-task)。

#### 本地 AI + 云端 LLM 服务

Watcher 设备的第三种操作模式是本地 AI 服务和基于云的 LLM 服务的组合。**当 Watcher 的本地 AI 服务识别出指定对象，但需要 LLM 云服务进一步分析对象的行为或状态时，此模式将发挥作用**。

:::danger
使用 SenseCraft AI 的某些服务可能会产生费用，请参阅以下文档了解详细信息：

**[SenseCraft AI for Watcher 计划与福利](https://wiki.seeedstudio.com/watcher_price/)**
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_4.png" style={{width:1000, height:'auto'}}/></div>

如图所示，设置的对象为“猫”，操作为“闪烁灯光”。当 Watcher 使用其本地 AI 模型检测到宠物（猫）时，它会调用 LLM 云服务分析猫的行为，并判断其是否正在“进食”。

如果 LLM 云服务确认猫确实在进食，Watcher 将执行指定的操作，在此例中为使设备上的 RGB 灯闪烁。这种本地和云服务的结合允许更复杂的检测和分析，使 Watcher 不仅能够识别对象，还能理解其行为或状态。

通过结合本地 AI 服务和 LLM 云服务，Watcher 能够处理需要多层次分析的复杂场景。本地 AI 模型首先检测到指定对象的存在，而 LLM 云服务则提供对象行为的额外上下文和理解。

如果您设置了一个被判断为使用本地 + LLM 的任务，那么在 SenseCraft APP 上，任务配置页面将大致显示如下。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/local_llm-app.png" style={{width:1000, height:'auto'}}/></div>

### 总结

以下是基于效率、成本和选择的三种模式的比较表：

<div class="table-center">
	<table align="center">
		<tr>
            <th rowspan="2"> </th>
			<th>完全本地服务</th>
			<th colspan="2">依赖云服务</th>
		</tr>
        <tr>
            <th>本地 AI 服务</th>
			<th>基于云的 LLM 服务</th>
			<th>本地 AI + 基于云的 LLM 服务</th>
		</tr>
		<tr>
            <th>效率</th>
			<td align="center">报警时间：<strong>2秒</strong><br />触发报警的最小时间间隔：<strong>5秒</strong></td>
			<td align="center">报警时间：<strong>10秒</strong><br />触发报警的最小时间间隔：<strong>30秒</strong></td>
			<td align="center">报警时间：<strong>10秒</strong><br />触发报警的最小时间间隔：<strong>30秒</strong></td>
		</tr>
		<tr>
            <th>成本</th>
			<td align="center">❎</td>
			<td align="center">☑️</td>
			<td align="center">☑️</td>
		</tr>
		<tr>
            <th>如何选择</th>
            <td><strong>优点</strong>：完全依赖 Watcher 的本地 AI 服务，无需额外费用，识别和响应速度更快。如果有针对性模型，理论上还会有更高的识别准确性。<br /><strong>缺点</strong>：如果没有模型，则无法使用该服务。如果需要对象的行为分析，也无法仅使用本地服务。</td>
            <td><strong>优点</strong>：即使 SenseCraft AI 库中没有预训练模型，也可以识别广泛的对象。适用于需要对象行为分析的任务。<br /><strong>缺点</strong>：需要活动的互联网连接。使用云服务可能会产生额外费用，尤其是在免费公开测试阶段结束后。响应时间比本地 AI 服务模式略慢。</td>
            <td><strong>优点</strong>：与基于云的 LLM 服务模式相比，此模式使用本地 AI 服务过滤掉非特定对象后再调用云端 LLM 服务。对于并非始终存在但有模型可用的对象，此模式可以通过仅对包含已识别对象的图像进行行为分析，大大降低调用云端 LLM 服务的成本。<br /><strong>缺点</strong>：结合本地 AI 服务使用云端 LLM 服务可能仍会产生额外费用，但成本会低于单独使用云端 LLM 服务模式。需要活动的互联网连接以进行云端行为分析。总体响应时间比本地 AI 服务模式略慢。</td>
		</tr>
	</table>
</div>

1. “报警时间”的含义因模式而异：

    - **本地 AI 服务模式**：
        “报警时间”指的是当报警触发后，Watcher 的 RGB 灯或扬声器保持激活的持续时间。

    - **基于云的 LLM 服务模式**：
        “报警时间”不仅指 RGB 灯和扬声器激活的持续时间，还包括显示的摄像头画面暂停的时间。这段暂停时间是为了将图像传输到云服务器进行分析所需的时间。

2. “触发报警的最小时间间隔”设置独立于“报警时间”，两者之间不存在顺序关系。此设置指定了两次连续报警触发之间必须经过的最短时间。在配置任务时，用户**不允许**设置比此最小间隔更短的报警时间。此限制确保系统有足够的时间处理和响应每个报警事件，然后才能触发下一个报警。这一限制确保了系统有足够的处理时间，并防止过度或连续的报警触发，从而促进系统的稳定和可靠运行。

:::danger
使用 SenseCraft AI 的某些服务可能会产生费用，请参考以下文档了解详情：

**[SenseCraft AI for Watcher 计划与福利](https://wiki.seeedstudio.com/watcher_price/)**
:::

## 通过 SenseCraft APP 下发任务

在了解任务的分类和基本概念后，让我们详细了解如何通过 SenseCraft APP 向 Watcher 下发命令。假设您已经完成了 Watcher 的匹配过程，并进入了 Watcher 聊天页面。如果您还不知道如何绑定设备，请参考 [设备绑定和 OTA 升级](https://wiki.seeedstudio.com/getting_started_with_watcher/#device-binding-and-ota-upgrade)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/workflow.png" style={{width:1000, height:'auto'}}/></div>

### 输入任务

每个 Watcher 设备在 SenseCraft APP 中都有一个专属的聊天窗口。要向特定的 Watcher 下发命令，请导航到其聊天窗口，并使用输入框输入您想要的命令。您可以手动输入命令，也可以使用键盘的语音输入功能以提高便利性。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/21.png" style={{width:250, height:'auto'}}/></div>

在编写命令时，务必提供清晰且详细的指令，以确保 Watcher 能够准确理解并执行任务。您的命令应包括以下信息：

- 您希望 Watcher 识别的特定对象或对象组。

- 与对象相关的任何附加动作或行为（如果适用）。

- 在成功识别对象后，您期望 Watcher 执行的动作或响应。

通过提供全面的指令，您可以使 Watcher 有效地理解并执行分配的任务。请记住，尽可能具体和详细，以获得最佳效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/22.png" style={{width:250, height:'auto'}}/></div>

除了任务配置和执行功能外，纯云端 LLM 服务还允许用户与语言学习模型（LLM）进行纯文本对话。

纯云端 LLM 服务的文本聊天功能为用户直接与 LLM 互动开辟了新可能。它提供了一种无需物理 Watcher 设备即可访问 LLM 知识和能力的便捷方式。

无论您有问题、需要特定主题的帮助，还是只是想探索 LLM 的能力，文本聊天功能都提供了一种无缝且直观的方式与 AI 模型交流。

当您需要信息、指导或只是想与 LLM 进行一场有益的对话时，请随时利用此功能。

:::danger
使用 SenseCraft AI 的某些服务可能会产生费用，请参考以下文档了解详情：

**[SenseCraft AI for Watcher 计划与福利](https://wiki.seeedstudio.com/watcher_price/)**
:::

### 确认或配置拆解任务

在完成任务命令输入后，请按照以下步骤确认并执行命令：

1. 点击聊天窗口右下角的 **发送** 按钮提交您的命令。

2. 后端系统将处理并拆解您的任务命令为其组成部分。

3. 系统会返回一张小卡片，显示 Watcher 对您任务的理解。卡片主要展示以下信息：

   - **When**：触发任务执行的条件或触发器。
   - **Do**：Watcher 在成功识别对象后将执行的动作或响应。
   - **Capture Frequency**：任务触发和执行的时间间隔。

4. 审核卡片上的信息，确保 Watcher 正确理解了您的任务指令。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/23.png" style={{width:250, height:'auto'}}/></div>

5. 如果您对 Watcher 的理解感到满意，点击卡片上的 **运行** 按钮，将任务部署到 Watcher 并开始执行。

6. （可选）如需更详细地查看任务拆解，点击卡片上的 **详细配置** 按钮。这将为您提供有关任务配置的更多信息。

    如果您发现任何误解或希望更改任务配置，请使用“详细配置”选项根据您的需求手动修改设置。如 [任务概念章节](#concept-of-the-task) 中所述，详细配置页面因模式而异。您只需根据实际情况选择或修改配置项即可。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/24.png" style={{width:800, height:'auto'}}/></div>

在“详细配置”部分，您可以找到各种设置，这些设置允许您微调任务配置。以下是可用设置的概述：

1. **使用本地模型**：
   - 当任务需要使用本地 AI 服务时，此设置会出现。
   - 系统会根据您提供的任务自动从 SenseCraft AI 库中选择适当的模型。
   - 您可以选择禁用本地 AI 服务的使用，这将导致直接利用基于云的服务进行图像分析。
   - 您还可以手动修改模型选择，并从 SenseCraft AI 库中的公开模型中进行选择。
   - 请注意，如果任务完全是本地的，则不允许禁用“使用本地模型”选项。<br /><br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/25.png" style={{width:250, height:'auto'}}/></div>

2. **场景**：
   - 此部分显示触发动作的条件。
   - 您可以根据需要调整类别数量并修改触发语句。
   - 如果涉及更复杂的场景，可以通过添加条件灵活调整。<br /><br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/26.png" style={{width:600, height:'auto'}}/></div>

3. **动作**：
   - 在这里，您可以配置报警触发后 Watcher 的行为。
   - 指定您希望 Watcher 执行的动作，例如打开 RGB 灯、通过扬声器播放声音或发送通知。<br /><br />

4. **捕获频率**：
   - 此设置决定任务执行的时间间隔。
   - 根据您期望的监控间隔和任务的具体要求调整频率。<br /><br />

:::caution
在“详细配置”部分，**捕获频率**会自动设置一个默认值。对于基于云的 Watcher LLM 服务，“捕获频率”**不能低于 60 秒**。如果您使用的是 Watcher 本地 AI 服务，则不会提供“捕获频率”设置，因为设备会提供实时警报。
:::

5. **工作时间范围**：
   - 此设置允许您定义任务活动的时间范围。
   - 指定任务运行的开始和结束时间，确保监控仅在指定的时间范围内进行。
   - 请注意，为了使此设置正常工作，Watcher 的内部时钟必须与您的移动设备系统时间同步。如果两者之间存在不一致，可能会导致任务流程出现问题。<br />

通过探索和配置“详细配置”部分中的这些设置，您可以根据您的具体需求自定义任务。花时间仔细审查和调整每个设置，以确保最佳性能并与您的监控目标保持一致。

7. 一旦您确认所有设置正确无误并符合您的期望，点击 **运行** 按钮以启动任务执行。

通过遵循这些步骤，您可以确保 Watcher 准确理解您的任务命令，并且执行与您的预期目标一致。确认过程允许您在将任务部署到 Watcher 之前进行最终审查并进行必要的调整。

### 运行任务

在您仔细审查并配置“详细配置”部分中的任务设置后，您就可以将任务部署到您的 Watcher 设备。要启动任务执行，请按照以下步骤操作：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/27.png" style={{width:800, height:'auto'}}/></div>

1. 点击任务配置卡上的“运行”按钮。

2. 点击“运行”后，配置的任务将通过网络传输到 Watcher。

3. 任务部署过程可能需要一些时间，因为它涉及两个主要阶段：

   - **任务接收**：Watcher 需要接收并处理从 SenseCraft APP 发送的任务配置数据。

   - **模型下载（如果适用）**：如果任务需要使用本地 AI 服务，Watcher 可能需要下载必要的 AI 模型以在本地执行任务。

4. 在任务部署过程中，您可以通过 SenseCraft APP 监控进度：

   - 任务卡的状态将更改，以指示部署的当前阶段。

   - 注意状态更新，以跟踪任务接收和模型下载（如果适用）的进度。

5. 一旦任务部署完成，您会注意到 Watcher 的行为发生变化：

   - Watcher 将自动显示监控表情或指示其已准备好开始任务。

   - Watcher 行为的这种变化表明任务执行已经开始。

### 查看当前任务和检查警报

SenseCraft APP 提供了一种方便的方式来监控运行任务的进度和状态，以及查看任何触发的警报和相关的关键帧。

- 在此部分，您将找到有关您的 Watcher 设备上当前运行任务的信息。

- 当前任务将以一个小卡片的形式显示，显示任务名称和相关的 Watcher 设备。

- 卡片将指示任务是否正在进行，为任务状态提供快速概览。

当任务根据配置条件触发警报时，SenseCraft APP 将通过推送通知或应用内警报通知您。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/28.png" style={{width:250, height:'auto'}}/></div>

在“检测历史”部分，您将看到所有由运行任务触发的警报列表。每个警报将以卡片或列表项的形式显示，显示任务名称、Watcher 设备、时间戳以及触发条件的简要描述。点击警报卡片可以查看有关警报的更详细信息，包括相关的关键帧图像。

关键帧图像由 Watcher 设备在警报触发时捕获，提供了检测场景的视觉证据。您可以查看关键帧图像以分析情况，并在必要时采取适当的行动。根据您的偏好和情况的严重性，应用程序还可能提供确认或忽略警报的选项。

### 任务结束

当您需要停止 Watcher 设备上当前运行的任务时，有两种便捷的选项可供选择：

选项 1：通过 SenseCraft APP 结束任务  
1. 在您的移动设备上打开 SenseCraft APP，并导航到“当前任务”部分。  
2. 找到代表 Watcher 设备上当前运行任务的任务卡片，然后点击“结束”按钮。  
3. 应用程序将向 Watcher 设备发送停止任务的请求，任务卡片将更新为任务已终止的状态。

选项 2：直接在 Watcher 设备上结束任务  
1. 轻触 Watcher 设备的屏幕或按下滚轮按钮以显示菜单或选项。  
2. 选择“结束任务”选项，Watcher 设备将立即终止任务并返回空闲状态。  
3. SenseCraft APP 中的任务卡片将自动更新为任务已终止的状态。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/29.png" style={{width:250, height:'auto'}}/></div><br />

这两种方法都提供了一种简单直观的方式来在需要时停止任务执行。根据您当前的情况和与 Watcher 设备的距离，选择最方便的方法。

## 通过语音发送任务

Watcher 提供了一种通过语音命令发送任务的便捷直观方式，这得益于其“按住说话”功能。此功能可从设备上的任何屏幕或界面访问，使您无需通过菜单即可轻松与 Watcher 交互。以下是使用此功能的分步指南：

1. 激活按住说话功能：

   - 找到 Watcher 右上角的滚轮按钮。  
   - 按住滚轮按钮以进入语音输入界面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/push_to_talk.gif" style={{width:650, height:'auto'}}/></div><br />

2. 说出您的命令或消息：

   - 按住滚轮按钮时，清晰地对 Watcher 说出您的任务或消息。  
   - 您可以分配任务，例如“告诉我宝宝是否在哭”或“如果狗在偷食物，说‘停下铜’”。  
   - 或者，您可以通过提问或发表声明与设备对话，例如“讲个笑话给我听”。

3. 释放滚轮按钮：

   - 说完后，释放滚轮按钮。  
   - Watcher 将处理您的语音输入，并确定它是任务分配还是对话。

4. 任务分配：

   - 如果 Watcher 识别您的语音输入为任务分配，它将自动将任务分解为相关组件。  
   - Watcher 将在其屏幕上显示卡片，显示 **对象**（监控什么）、**行为**（观察什么动作）、**通知**（如何提醒您）、**时间范围**（何时监控）和 **频率**（监控频率）。  
   - 查看显示的信息以确保其准确反映您的预期任务。  
   - 如果详细信息正确，请确认任务，Watcher 将根据指定参数开始执行任务。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/80.jpg" style={{width:650, height:'auto'}}/></div>

使用提示：

- 清晰且以适中的速度说话，以确保语音识别的准确性。  
- 说话时尽量靠近 Watcher，约 **3 ~ 10cm** 的距离语音识别效果最佳。  
- 尽量减少背景噪音，以提高 Watcher 理解语音命令的能力。  
- 分配任务时要具体且简洁，以帮助 Watcher 准确解释您的意图。  
- 如果 Watcher 误解了您的任务或对话，只需再次按住滚轮按钮以提供澄清或更正。

通过利用按住说话功能，您可以轻松发送任务并与 Watcher 进行对话，使您与设备的交互更加自然高效。

:::note
如果您遇到 **0x7002** 错误，这意味着当前 Watcher 的网络状态不佳，音频服务调用失败，请更换网络或位置后重试。
:::

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>