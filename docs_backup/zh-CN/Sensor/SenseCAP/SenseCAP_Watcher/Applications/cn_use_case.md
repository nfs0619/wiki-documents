---
description: 提供对 Watcher 各种应用和使用场景的深入探讨，展示其在不同监控场景中的多功能性和潜力。
title: 使用案例
image: https://files.seeedstudio.com/wiki/watcher_getting_started/50.jpg
slug: /cn/use_case
last_update:
  date: 05/15/2025
  author: Citric
sidebar_position: 1
---

# SenseCAP Watcher 的功能是什么

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/50.jpg" style={{width:800, height:'auto'}}/></div>

准备好踏上重新定义智能空间的旅程吧！Watcher 是一个突破性的物理 AI 代理，它无缝融入您的环境，改变您与周围世界互动和体验的方式。通过利用面部识别、物体检测和多场景感知等先进技术，Watcher 创造了更智能、更直观且高度适应性的空间。

在本 Wiki 中，我们将探索三个变革性的应用，展示 Watcher 作为物理 AI 代理的巨大潜力。这些应用不仅展示了 Watcher 的能力，还将激发您设想和开发自己的创新解决方案。

- **[Watcher 应用案例 #1：为访客指引方向](#watcher-应用案例-1为访客指引方向)**：见证 Watcher 如何通过充当智能向导来革新访客体验。凭借其面部识别能力，Watcher 可以识别访客并为他们提供个性化的方向和帮助，从而提高空间的效率和可访问性。

- **[Watcher 应用案例 #2：花店的虚拟收银员](#watcher-应用案例-2花店的虚拟收银员)**：了解 Watcher 如何通过在无人花店中充当虚拟收银员来改变零售格局。通过检测顾客准备购买的时刻，Watcher 可以迅速显示二维码以实现无缝自助结账，确保顺畅且安全的交易过程，同时优化店铺运营。

- **[Watcher 应用案例 #3：您的全能传感器——跌倒检测、宠物监控和遗失物品提醒](#watcher-应用案例-3您的全能传感器跌倒检测宠物监控和遗失物品提醒)**：解锁 Watcher 作为全能传感器解决方案的多功能性。从检测跌倒到监控宠物以及提醒您遗失物品，Watcher 适应各种长尾场景，创造更安全、更可靠且高度响应的环境。

通过深入了解这些应用，您将更深刻地理解 Watcher 作为物理 AI 代理如何重塑和优化我们所居住的空间。无论您是创新者、企业主，还是对未来技术充满热情的人，本 Wiki 都将为您提供利用 Watcher 的能力并创造更智能、更适应性空间所需的知识和灵感。

加入我们，一起踏上这场变革之旅，重新定义智能环境的边界！

## 演示 1. 为访客指引方向

在此应用中，我们将探索如何利用 Watcher 来提升访客体验，特别是在别墅场景中为快递人员指引方向。通过战略性地放置两个 Watcher 设备并为其配置特定命令，我们可以创建一个无缝且高效的访客引导流程，确保包裹的准确投递。

### 第一步：放置第一个 Watcher

第一个 Watcher 应安装在别墅入口处，位于快递人员容易看到的位置。此 Watcher 将作为初始接触点，识别携带包裹的访客，并为他们提供明确的指示，告知包裹存放位置。

### 第二步：放置第二个 Watcher

第二个 Watcher 应放置在别墅内指定的包裹存放区域。此 Watcher 将负责确认包裹的准确放置，并向快递人员表达感谢。

### 第三步：为第一个 Watcher 配置命令

使用 SenseCraft APP，向第一个 Watcher 发出以下命令：

**如果有人拿着包裹，请说：“您好，快递员，请将包裹放到右边的桌子上，直走 3 米，谢谢。”**

此命令确保 Watcher 为快递人员提供清晰简洁的指示，引导他们到指定的包裹存放区域。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/51.png" style={{width:600, height:'auto'}}/></div>

### 第四步：为第二个 Watcher 配置命令

使用 SenseCraft APP，向第二个 Watcher 发出以下命令：

**如果有人将包裹放到桌子上，请说：“谢谢。”**

此命令使第二个 Watcher 能够确认包裹的成功放置，并向快递人员表达感谢。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/52.png" style={{width:600, height:'auto'}}/></div>

Watcher 应用案例 #1 展示了如何通过战略性部署 Watcher 设备并结合精心设计的命令，显著提升访客体验并简化别墅场景中的包裹投递流程。

此应用证明了 Watcher 作为物理 AI 代理的多功能性和潜力，展示了其能够转变和优化我们日常生活及智能空间互动的各个方面。

## 演示 2. 花店的虚拟收银员

在此应用中，我们将探索 Watcher 如何通过充当虚拟收银员来革新花店的购物体验。通过利用 Watcher 的物体检测能力和 SenseCraft APP，我们可以创建一个无缝且高效的自助结账流程，提升顾客体验并简化店铺运营。

### 第一步：生成支付二维码

首先，使用 PayPal 或其他首选支付平台生成一个支付二维码。这个二维码将作为自助结账流程中的关键元素，方便顾客为他们购买的花卉进行支付。

### 第二步：通过 SenseCraft APP 将二维码上传到 Watcher

打开 SenseCraft APP，进入 **Animation**（动画）部分。找到 **Watching Space**（观察空间），并用生成的支付二维码替换现有的动画。此步骤确保 Watcher 在被触发时会显示二维码，从而实现流畅的自助结账流程。

### 第三步：将 Watcher 安装在三脚架上

为了确保最佳性能和稳定性，使用 1/4 螺纹三脚架支架将 Watcher 安装在三脚架上。此设置便于调整 Watcher 的位置和角度，确保结账区域清晰可见。

### 第四步：将 Watcher 放置在结账柜台

将安装在三脚架上的 Watcher 放置在结账柜台，面向顾客可能前来支付的区域。确保 Watcher 能清楚地看到柜台，并能轻松检测到手持花卉的顾客。

### 第五步：通过 SenseCraft APP 配置 Watcher 的任务

使用 SenseCraft APP，向 Watcher 发出以下命令：

**当你检测到一个手持花卉并面向你的顾客时，请说“请扫描二维码完成购买。”**

此命令指示 Watcher 监测手持花卉的顾客，显示上传的支付二维码，并提示他们通过扫描二维码启动自助结账流程。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/53.png" style={{width:600, height:'auto'}}/></div>

### 第六步：实施自助结账流程

当 Watcher 检测到手持花卉的顾客时，它将自动显示支付二维码并触发预先配置的语音提示，引导顾客扫描二维码进行支付。

顾客扫描二维码后，将被引导至移动支付界面，在那里他们可以使用首选的支付方式完成交易。

Watcher 应用场景 #2 展示了 Watcher 作为虚拟收银员在花店环境中的变革潜力。通过结合 Watcher 的物体检测能力和 SenseCraft APP，花店店主可以创建一个无缝高效的自助结账体验，从而提升顾客满意度并优化店铺运营。

此应用场景展示了 Watcher 的多功能性和适应性，突显了其在各种零售环境中变革的潜力。作为一个物理 AI 代理，Watcher 可以根据不同业务的具体需求进行定制和配置，推动创新并改善整体购物体验。

---

## 演示 3：您的全能传感器——跌倒检测、宠物监控和遗失物品提醒

在此应用场景中，我们将探索 Watcher 作为全能传感器解决方案的多功能性和适应性，能够处理各种长尾场景。通过在不同位置战略性地放置多个 Watcher 设备并配置它们以应对特定情况，我们可以展示 Watcher 在提升安全性、保障和便利性方面的潜力。

### 场景 1：会议室中的遗失物品提醒

**步骤 1**：使用 360° 旋转支架将第一个 Watcher 安装在会议室墙上，确保覆盖整个房间。

**步骤 2**：使用 SenseCraft APP，向 Watcher 发出以下命令：

**当你检测到会议室为空且桌上有电脑时，请向 APP 发送通知。**

此任务使 Watcher 能够监控会议室，并在有贵重物品（如电脑）无人看管时通过 APP 向用户发出警报。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/54.png" style={{width:600, height:'auto'}}/></div>

### 场景 2：宠物监控与威慑

**步骤 1**：使用 1/4 螺纹三脚架支架将第二个 Watcher 安装在三脚架上，并将其放置在花瓶或猫容易造成破坏的区域附近。

**步骤 2**：通过 SenseCraft APP 配置以下任务：

**如果你检测到一只猫，请播放音频消息“危险，请远离”。**

以威慑猫靠近。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/55.png" style={{width:600, height:'auto'}}/></div>

**步骤 3**：将 Watcher 的音量调至最高，以有效地惊吓并阻止猫进入限制区域。

### 场景 3：父母家中的跌倒检测

**步骤 1**：将第三个 Watcher 安装在父母家中的墙上，确保其能清楚地看到主要生活区域。

**步骤 2**：通过 SenseCraft APP 分配以下任务：

**如果你检测到有人躺在地上，请立即通知我。**

此设置使 Watcher 能够监测潜在的跌倒或事故，并及时向用户发出警报，确保快速响应和援助。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/56.png" style={{width:600, height:'auto'}}/></div>

Watcher 应用场景 #3 展示了 Watcher 作为全能传感器解决方案的非凡多功能性和适应性。通过应对跌倒检测、宠物监控和遗失物品提醒等各种长尾场景，Watcher 展示了其在提升安全性、保障和便利性方面的潜力。

此应用场景突显了 Watcher 根据具体需求进行定制和配置的能力，使其成为个人、家庭和企业的宝贵工具。作为一个物理 AI 代理，Watcher 无缝集成到不同环境中，提供主动监控、实时警报和用户的安心体验。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时能够获得顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>