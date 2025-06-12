---
description: 探讨 Watcher 外观的自定义选项，并探索 SenseCraft 平台提供的各种工具。
title: SenseCraft APP 介绍
image: https://files.seeedstudio.com/wiki/watcher_getting_started/sensecraft_app.webp
slug: /cn/sensecap_app_introduction
last_update:
  date: 05/15/2025
  author: Citric
sidebar_position: 1
---

# SenseCraft APP 指南

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/30.png" style={{width:1000, height:'auto'}}/></div>

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

欢迎来到 Watcher 自定义和 SenseCraft 工具的世界！在本文中，我们将深入探讨如何个性化您的 Watcher 设备，并探索 SenseCraft APP 提供的强大功能。无论您是希望为 Watcher 赋予独特外观的新用户，还是想要充分挖掘设备潜力的资深爱好者，本指南都将为您提供知识和灵感，让您的 Watcher 真正与众不同。准备好踏上创意之旅，揭开 Watcher 表达设计和 SenseCraft APP 设置的秘密吧！

## Watcher 基于蓝牙的设置

此部分设置需要设备和手机均启用蓝牙功能。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/31.png" style={{width:250, height:'auto'}}/></div>

### Wi-Fi

Watcher 设备上的 Wi-Fi 设置允许您连接到可用的无线网络，从而启用在线服务。这在需要更新 Watcher 固件、与 SenseCraft APP 同步数据或将实时监控数据流传输到云端时尤为有用。

要在 Watcher 上设置 Wi-Fi，只需导航到 Wi-Fi 设置菜单并扫描可用网络。选择所需的网络并在提示时输入相应的凭据（SSID 和密码）。连接后，您的 Watcher 会在网络范围内自动重新连接到已保存的网络，确保稳定可靠的连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/32.png" style={{width:700, height:'auto'}}/></div>

:::note
请注意，Watcher 仅支持连接到 2.4GHz 网络，不支持 5GHz 网络。
:::

### 基本设置

Watcher 设备上的基本设置菜单提供了一系列选项，供您自定义用户体验。其中一个关键功能是控制 Watcher 上的 RGB LED。您可以根据自己的喜好或所处环境轻松开启或关闭 RGB LED。这在您希望节省电池电量或减少视觉干扰时非常有用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/33.png" style={{width:250, height:'auto'}}/></div>

声音设置也可以通过基本设置菜单访问。在这里，您可以调整 Watcher 音频输出的音量以满足您的需求。无论您喜欢响亮清晰的通知还是更为柔和的音频体验，都可以根据自己的喜好微调声音设置。

显示亮度是影响 Watcher 用户体验的另一个重要方面。基本设置菜单允许您调整 Watcher 显示屏的亮度，以确保在各种光照条件下的最佳可见性。通过自定义显示亮度，您可以在强烈阳光下更容易阅读 Watcher，或在低光环境中调暗亮度，同时在需要时节省电池电量。

最后，基本设置菜单还允许您设置和管理 Watcher 的日期、时间和时区。准确的时间记录对于正确的数据记录和与其他设备及服务的同步至关重要。通过设置正确的日期、时间和时区，您可以确保 Watcher 的监控数据具有准确的时间戳，并与您的本地时间保持一致。

要访问和修改这些设置，只需导航到 Watcher 设备上的基本设置菜单，并使用直观的界面进行所需更改。

### SenseCraft 远程控制

SenseCraft 远程控制功能是一个关键设置，决定了您的 Watcher 设备如何与 SenseCraft 云服务通信。启用此功能后，设备会与 SenseCraft 云建立连接通道，从而让您访问一系列高级功能和服务，例如基于云的大型语言模型（LLMs）和远程通知功能。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/34.png" style={{width:250, height:'auto'}}/></div>

然而，如果您选择禁用 SenseCraft 远程控制功能，您的 Watcher 将仅通过蓝牙与移动设备通信。虽然这对于本地控制和配置很有用，但也意味着您将无法访问强大的基于云的服务和远程通知功能。此外，如果您的 Watcher 超出与移动设备的蓝牙范围，您可能会完全失去对 Watcher 的控制。

要管理 SenseCraft 远程控制设置，只需导航到 Watcher 设备上的相应菜单，并根据需要切换该功能的启用或禁用。通过仔细考虑您的需求并权衡云连接的优势，您可以做出明智的决定，配置此 Watcher 的重要设置。

### HTTP 消息块

Watcher 的 HTTP 消息块功能是一种本地化的报警服务，与其他报警方法（如 RGB 报警、APP 报警和 UART 报警）一起运行。其主要目的是为用户提供完全本地化的消息推送服务，以保护用户隐私。与可能依赖外部平台或服务器的其他报警服务不同，HTTP 消息块设计为仅与用户自己的 HTTP 端点配合使用，确保所有数据和通知都保留在用户的本地环境中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/83.png" style={{width:250, height:'auto'}}/></div><br />

要设置 HTTP 消息块，用户需要配置两个关键信息：**HTTP URL** 和 **HTTP Token**。这些信息由您自己的 HTTP 服务器或本地部署的软件（如 [Watcher APP](https://wiki.seeedstudio.com/watcher_local_deploy/#software-preparation)）提供。如果您选择使用自己的 HTTP 服务器，请确保其正确设置并提供必要的 URL 和 Token。或者，如果您选择使用 Watcher APP，该软件将生成并管理这些配置信息。通过将配置信息保存在您自己的服务器或 Watcher APP 本地，Watcher 为用户提供了高度的隐私和安全性，确保敏感信息始终处于您的控制之下。

:::caution
如果您希望使用完全本地化的通知服务而不通过 SenseCraft，那么在配置消息通知时，请**不要**勾选 **APP 推送通知**，否则您的通知仍会通过 SenseCraft 并推送到您的应用。同时，请记得**勾选 HTTP 推送通知选项**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/84.jpg" style={{width:300, height:'auto'}}/></div>
:::

### 设备 AI 服务

Watcher 的设备 AI 服务是一项强大的功能，允许用户直接在本地设备（如 PC 或高性能设备如 Jetson）上部署 AI 功能。要设置设备 AI 服务，用户需要提供 URL 和 Watcher 服务 Token，这些信息会显示在配套设备 AI 服务软件的用户界面中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/82.png" style={{width:250, height:'auto'}}/></div>

配置完成后，设备 AI 服务使 Watcher 能够利用用户的本地计算资源来实现多种 AI 功能，包括语音交互、任务分解、图像分析和聊天机器人服务。

对于希望灵活控制并在本地运行 AI 服务的用户来说，Watcher 的设备 AI 服务提供了全面且可定制的解决方案。有关设置和配置设备 AI 服务的详细信息，以及每项 AI 功能的深入说明，请参阅 **[本地部署 Watcher 的 AI 功能](https://wiki.seeedstudio.com/watcher_local_deploy/)**。

:::caution
如果您之前点击了私有 Watcher 服务，那么您将无法使用 SenseCraft 的云服务。当您突然发现无法从云服务获取消息时，请检查是否未选择 **SenseCraft**。
:::

### 恢复设备设置

恢复设备设置功能允许您将 Watcher 重置为默认出厂设置，这在遇到无法通过其他方式解决的问题或希望从头开始时非常有用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/35.png" style={{width:250, height:'auto'}}/></div>

然而，在使用此功能时必须谨慎，因为您的 Watcher 的所有设置，包括自定义设置、历史警报记录和自定义表达式，都将被永久删除。由于没有内置的备份功能，一旦启动恢复过程，您之前的设置和数据将无法恢复。

要访问恢复设备设置功能，请导航到 Watcher 设备上的相应菜单。在确认恢复过程之前，请仔细考虑是否确实需要将 Watcher 重置为出厂默认设置。如果您继续操作，您的 Watcher 将恢复到原始状态，您可以根据需要重新配置和自定义。

:::tip
恢复设备后，您需要手动删除应用程序中的相应设备，然后重新添加。
:::

## 其他设置

以下设置不依赖于与手机的蓝牙连接，只需确保 Watcher 和手机都已连接到互联网，并且 SenseCraft 远程控制功能已开启。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/subscription2.png" style={{width:250, height:'auto'}}/></div>

### 设备名称和设备分组

设备名称和设备分组设置允许您个性化您的 Watcher 并组织多个设备以便于管理。通过为您的 Watcher 分配一个唯一名称，您可以在通过蓝牙连接或通过 SenseCraft APP 管理时快速识别它。这在您拥有多个 Watcher 设备时尤其有用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/37.png" style={{width:250, height:'auto'}}/></div>

此外，您可以将您的 Watcher 分配到特定的设备分组，这在为不同用途或位置管理大量设备时非常有用。例如，您可以为家庭、办公室或户外监控创建单独的设备分组。通过逻辑地对 Watcher 设备进行分组，您可以根据其指定用途或位置轻松定位、配置和控制它们。

### 订阅

通过订阅，您可以访问我们先进的语言模型功能。无论是分析图像还是进行智能对话，我们的平台都能满足您的需求。探索完整的功能范围，看看我们的技术如何提升您的体验。点击了解更多！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/price.png" style={{width:250, height:'auto'}}/></div>

### 检查更新

“检查更新”功能确保您的 Watcher 始终运行最新的固件和软件版本。通过定期检查更新，您可以在新功能、性能改进、错误修复和安全增强可用时立即获取。

要检查更新，只需在 Watcher 设备或 SenseCraft APP 中导航到“检查更新”菜单。如果有可用更新，系统会提示您下载并安装。建议保持 Watcher 更新，以确保最佳性能、稳定性和安全性。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/57.png" style={{width:250, height:'auto'}}/></div>

:::tip
某些 OTA 版本可能要求 Watcher 用户强制更新以继续使用。这可能是由于修复重大软件错误或后台服务升级。
:::

### 删除检测历史

“删除检测历史”功能允许您清除 SenseCraft APP 中存储的历史警报数据。当您希望整理警报历史或专注于查看最近事件时，此功能非常有用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/38.png" style={{width:250, height:'auto'}}/></div>

要删除检测历史，请在 SenseCraft APP 中访问“删除检测历史”菜单。在确认删除之前，请仔细审查其影响，因为此操作不可逆，所有历史警报数据将从 APP 中永久删除。

### 删除设备

“删除设备”功能用于从您的 SenseCraft 账户或蓝牙连接中移除 Watcher 设备。当您不再需要使用某个特定的 Watcher、希望转移设备所有权或遇到需要重新开始的持续问题时，此功能可能是必要的。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/39.png" style={{width:250, height:'auto'}}/></div>

要删除设备，请在 Watcher 的设置或 SenseCraft APP 中找到“删除设备”选项。在确认删除之前，请确保您已了解此过程不可逆。一旦删除设备，它将不再与您的账户关联，如果您希望再次使用它，则需要重新添加。

:::note
在 APP 删除设备后，如果您想重新绑定设备，还需要在设备设置中执行“恢复出厂设置”。
:::

## Watcher 动画

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/44.png" style={{width:650, height:'auto'}}/></div>

Watcher 设备通过自定义动画为您提供了一种独特且有趣的方式来个性化您的监控体验。通过上传自己的图片，您可以创建反映您风格的专属表达，传递特定信息，或为 Watcher 的状态指示添加趣味。

### 创建自定义动画

根据您的技能和偏好，有几种方法可以为 Watcher 创建自定义动画：

- **使用动画软件**：如果您熟悉 Adobe After Effects 或 Lottie 等动画软件，可以从头开始创建自己的动画。设计最多 5 帧的动画，并注意每帧将显示约 500 毫秒。创建动画后，选择最多 5 个关键帧，截取屏幕截图，并通过 SenseCraft APP 上传。

- **使用图形设计软件**：如果您更喜欢使用 Figma 或 Adobe Illustrator 等图形设计软件，可以创建一系列静态图像来组成动画。设计最多 5 帧的动画，并注意每帧将显示约 500 毫秒。将设计导出为单独的 PNG 图像，并通过 SenseCraft APP 上传。

- **使用现有的 GIF**：如果您在线找到想用于 Watcher 自定义动画的 GIF，可以轻松将其转换为一系列 PNG 图像。使用 [EZGif](https://www.ezgif.com/split) 等免费在线工具将 GIF 拆分为单独的帧。选择最多 5 帧，代表您想要实现的动画效果，然后通过 SenseCraft APP 上传这些 PNG 图像。

无论您选择哪种方法，每张图片都应为 **PNG** 格式，分辨率为 **412x412** 像素，以确保在 Watcher 屏幕上的最佳显示质量。上传后，这些图片将组合成一个无缝动画，为您的 Watcher 注入个性化表达。

### 转换和调整图片大小

如果您想要的图片尚未为 PNG 格式或不符合 412x412 的分辨率要求，可以使用各种工具轻松转换和调整大小：

- **Adobe Photoshop**：在 Photoshop 中打开图片，转到“图像” > “图像大小”，将宽度和高度设置为 412 像素（保持纵横比），然后将图片保存为 PNG 文件。

- **GIMP**：在 GIMP 中打开图片，导航到“图像” > “缩放图像”，在宽度和高度字段中输入 412（保持纵横比），然后将图片导出为 PNG 文件。

- **在线工具**：使用 [Resize Image](https://www.resizeimage.net) 或 [CloudConvert](https://www.cloudconvert.com) 等网站，将图片调整为 412x412 像素并转换为 PNG 格式。

### 上传您的自定义动画

当您的 PNG 图片系列准备好后，就可以在 Watcher 上实现您的自定义动画了。将 Watcher 连接到 SenseCraft APP，并导航到“动画”页面。在这里，您会找到多个允许动画自定义的 Watcher 状态，包括 **待机**、**监听**、**说话**、**监控空间** 和 **问候**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/43.png" style={{width:250, height:'auto'}}/></div>

要替换 Watching Space 或 Greeting 状态的动画，只需选择所需的状态并按照提示上传您的 PNG 图像。请确保**上传的图片数量与示例中每个状态所示的图片数量相同**，以确保动画体验的流畅性。

:::caution
在上传自定义动画时，请注意每张图片应为 **PNG** 格式，分辨率为 **412x412** 像素，以确保在 Watcher 屏幕上的最佳显示效果。您上传的图片将替换所选 Watcher 状态的默认动画，使您能够个性化设备的表情，为您的监控体验增添独特风格。
:::

## 致设计师的号召：让您的创意闪耀！

在 SenseCraft，我们相信创造力和协作的力量能够带来令人难以置信的创新。因此，我们邀请来自各行各业的设计师贡献他们独特的视角和技能，帮助扩展 Watcher 的动画可能性。

如果您是一位热衷于创作引人入胜且富有表现力动画的设计师，我们鼓励您参与这一激动人心的机会。通过分享您的创意想法和设计，您可以帮助塑造 Watcher 动画功能的未来，并为用户提供更生动和个性化的体验。

无论您专注于角色动画、动态图形，还是其他任何风格，您的专业知识和想象力都可以产生重大影响。我们欢迎传达各种情感的动画，从喜悦和兴奋到平静和沉思，以及展示 Watcher 独特功能和潜力的设计。

要参与其中，只需按照上述指南创建您的自定义动画，并与 SenseCraft 社区分享。您可以通过 SenseCraft APP 直接上传您的设计，或在社交媒体上使用标签 `#WatcherAnimations` 分享。我们迫不及待地想看到我们才华横溢的设计师社区带来的令人惊叹的创意和设计！

通过共同努力并利用协作的力量，我们可以突破 Watcher 动画功能的可能性界限。所以，让您的创造力尽情发挥，分享您的独特愿景，与我们一起塑造 Watcher 动画的未来。共同努力，我们可以为全球 Watcher 用户创造更具表现力、更吸引人和更个性化的监控体验。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/42.png" style={{width:250, height:'auto'}}/></div>

### 展示与灵感

在我们的 Watcher 动画展示中，发现一个充满创意和灵感的世界！这里是我们庆祝设计师社区非凡才华和想象力的地方，展示了一些为 Watcher 创作的最惊艳和创新的自定义动画。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/45.png" style={{width:1000, height:'auto'}}/></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>