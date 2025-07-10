---
description: SenseCAP Watcher 是一个 AI 监控助手，帮助您监控空间内的异常并采取行动。只需对 Watcher 说出指令，它将在事件发生时执行您期望的任务。
title: 快速入门指南
image: https://files.seeedstudio.com/wiki/watcher_getting_started/watcherKS.jpg
slug: /cn/getting_started_with_watcher
last_update:
  date: 05/15/2025
  author: Citric
sidebar_position: 2
---

# SenseCAP Watcher 快速入门指南

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcherKS.jpg" style={{width:1000, height:'auto'}}/></div>


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
</div>

## 快速入门指南视频

这是 SenseCAP Watcher 快速入门指南，它将帮助您首次开箱并上手设备。

<div class="table-center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/yufEUFEB0Ic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## 简介

SenseCAP Watcher 是一个 AI 监控助手，帮助您监控空间内的异常并采取行动。只需对 Watcher 说出指令，它将在事件发生时执行您期望的任务。

作为智能建筑/智能家居系统的新成员，SenseCAP Watcher 比现有的传感器和执行器更加智能。它能够理解空间内发生的事情，并据此采取行动。

## 必做事项

在将 Watcher 用作空间助手之前，我们必须确保成功完成以下三个步骤，这是所有后续操作的基础。

### 第一步：安装包装

Watcher 配备了一个独特的包装，它同时也是一个时尚的日历式支架。将 Watcher 放入这个支架中，可以为您的家增添一件吸引人的装饰品。请按照以下分步说明，并参考随附的视频，了解如何将 Watcher 安装到支架中。

<div class="table-center">
<iframe width="760" height="415" src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher-packaging.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### 第二步：开机

:::caution
请使用与 Watcher 兼容的电源插头；Watcher 必须由 5V 电源供电，如果使用不符合要求的电源适配器或电压超过 5V 的电源，可能会烧毁设备！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/adapter.jpg" style={{width:350, height:'auto'}}/></div>

上图显示了推荐的适配器规格。如果您不知道在哪里可以购买合适的适配器，可以通过以下链接直接购买。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/USB-Power-Adapter-for-Raspberry-Pi-4-5V-3A-p-4089.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>
:::

要启动您的 Watcher 设备，请按住右上角的旋钮按钮约 3 秒，直到屏幕上出现 Seeed Studio 的标志。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/power_on.gif" style={{width:650, height:'auto'}}/></div>

<br />

当标志显示后，松开按钮并等待设备完成初始化过程。几秒钟后，Watcher 将显示其主菜单，表明设备已准备好使用。

:::tip
如果设备无法通过长按启动，可能是设备电量不足，您需要连接电缆为其充电，然后才能唤醒 Watcher。
:::

### 第三步：设备绑定

:::caution
[SenseCraft Pro](https://wiki.seeedstudio.com/watcher_price/) 在您的设备绑定到 SenseCraft APP 时会自动激活试用服务。
:::

启动 Watcher 后，如果设备尚未绑定，它会提示您连接到 SenseCraft 应用程序。或者，您可以在设置菜单中找到“连接到 APP”选项。Watcher 随后会显示一个二维码，用于下载 SenseCraft 应用程序。

您可以扫描二维码或使用提供的链接下载应用程序。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft-app-download.seeed.cc">
            <strong><span><font color={'FFFFFF'} size={"4"}> 下载 APP 🖱️</font></span></strong>
    </a>
</div>

<br />

要将您的 Watcher 绑定到 SenseCraft 应用程序，请按照以下步骤操作：

**1.** 在您的 Watcher 上，顺时针旋转旋钮按钮，进入设备绑定的二维码界面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/1.svg" style={{width:550, height:'auto'}}/></div>

**2.** 在您的移动设备上打开 SenseCraft 应用程序，点击右上角的加号 (+)，通过扫描二维码添加您的 Watcher。

:::tip
确保您的移动设备已启用蓝牙权限，因为绑定过程需要蓝牙连接。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/2.svg" style={{width:550, height:'auto'}}/></div>

**3.** 成功扫描二维码后，应用程序将跳转到网络配置页面。选择一个 2.4GHz Wi-Fi 网络，将 Watcher 连接到互联网。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/3.svg" style={{width:550, height:'auto'}}/></div>

点击“下一步”按钮继续。

**4.** 为您的 Watcher 选择一个名称，并为其选择一个合适的分组。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/4.svg" style={{width:550, height:'auto'}}/></div>

点击“完成”按钮以完成设置过程。

**5.** SenseCraft 应用程序将显示一个教程页面，提供有关如何使用 Watcher 的指导。花点时间熟悉这些说明。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/5.svg" style={{width:550, height:'auto'}}/></div>

设置完成后，应用程序将打开一个聊天窗口，用于与您的 Watcher 进行通信，而 Watcher 将返回其主菜单。

绑定过程完成后，您的 Watcher 现在已连接到 SenseCraft 应用程序，您可以开始探索其功能和能力。该应用程序是与 Watcher 交互、调整设置以及远程接收通知的便捷方式。

## 为 Watcher 安排任务

接下来，选择您希望使用的方法为 Watcher 安排一个可执行任务。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Built-in task templates" label="内置任务模板">

要在您的 Watcher 上运行任务模板，请按照以下步骤操作：

**1.** 从主菜单中，使用滚轮按钮导航到 **任务模板** 选项。

**2.** 按下滚轮按钮进入任务模板子菜单。

**3.** 使用滚轮按钮滚动浏览可用的任务模板，直到找到所需的模型任务。

**4.** 按下滚轮按钮选择并开始运行所选任务。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/run_template.gif" style={{width:650, height:'auto'}}/></div>

<br />

任务开始后，Watcher 将在屏幕上显示一个动画表情符号。该表情符号表示设备正在根据所选任务模板监控目标对象。

当 Watcher 检测到目标对象时，显示屏将从表情动画切换到目标对象的实时视图。这样您可以看到 Watcher 识别的内容。

如果目标对象移出 Watcher 的视野或不再被检测到，显示屏将自动返回到动画表情符号，表示设备仍在监控目标。

任务模板：

- 人体检测：
   - 此任务模板旨在检测人类的存在。
   - 当 Watcher 识别到 **人** 时，它将触发警报通知。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task-temp-people-detected.png" style={{width:210, height:'auto'}}/></div><br />

- 宠物检测：
   - 宠物检测任务模板专注于识别猫或狗。
   - 如果 Watcher 检测到 **猫**，它将触发警报通知。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task-temp-pet.png" style={{width:210, height:'auto'}}/></div><br />

- 手势检测：
   - 此任务模板配置为识别“剪刀”手势。
   - 当 Watcher 识别到 **剪刀手势** 时，它将触发警报通知。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task-temp-gesture.png" style={{width:210, height:'auto'}}/></div><br />

每个任务模板都有基于其各自目标（如人类、猫或剪刀手势）检测的特定警报触发条件。通过使用这些模板，您可以快速设置 Watcher 以监控所需的对象，而无需进行复杂的配置。

</TabItem>

<TabItem value="Through the APP" label="通过应用程序">

:::danger
使用 SenseCraft AI 的某些服务可能会产生费用，请参考以下文档了解详细信息：

**[SenseCraft AI for Watcher 计划和福利](https://wiki.seeedstudio.com/watcher_price/)**
:::

SenseCraft 应用程序允许您向 Watcher 设备发送任务。在此示例中，我们将演示如何使用 Watcher 提供的示例任务发送任务。让我们使用命令 *如果你看到蜡烛，请通知我*。

**1.** 打开 SenseCraft 应用程序，导航到已连接 Watcher 设备的聊天窗口。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/6.svg" style={{width:550, height:'auto'}}/></div><br />

**2.** 在聊天窗口中，选择可用选项中的所需任务，或手动输入命令 *如果你看到蜡烛，请通知我*。通过点击发送按钮或按下回车键将命令发送给 Watcher。

**3.** Watcher 接收到命令后，将对其进行解析，并将其分解为包含 **当...时**、**执行** 和 **捕获频率** 组件的任务流程。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/7.svg" style={{width:550, height:'auto'}}/></div>

<br />

检查解析后的任务流程，确保 Watcher 正确理解了您的命令。应用程序将显示解析后的任务详细信息供您验证。如果任务流程的任何部分与您的预期命令不符，您可以通过应用程序中的 **详细配置** 部分修改任务详细信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/8.svg" style={{width:550, height:'auto'}}/></div>

<br />

**4.** 一旦确认或调整任务详情后，点击 **运行** 按钮，将最终任务发送到您的 Watcher。

Watcher 将下载任务指令，下载完成后，它将转变为一个警觉的监控系统，准备检测任何蜡烛的出现。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/9.svg" style={{width:700, height:'auto'}}/></div>

<br />

**5.** 如果 Watcher 识别到蜡烛，它将根据预定义的设置发送警报，这可能包括闪烁灯光、声音警报以及通过 SenseCraft APP 的通知。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/10.svg" style={{width:550, height:'auto'}}/></div>

:::note
请注意，由于任务流程的时间限制，**连续警报之间将有最小间隔以避免过多通知**。
:::

通过遵循这些步骤，您可以使用 SenseCraft APP 有效地向您的 Watcher 发送指令，使其执行特定的监控任务，并在满足指定条件时通知您。

请记得定期查看和调整 Watcher 的设置和任务流程，以确保最佳性能并符合您的监控需求。有关 APP 任务和选项的更详细描述以及间隔的详细说明，请阅读 **[Watcher 任务分配指南](https://wiki.seeedstudio.com/getting_started_with_watcher_task/)** 了解更多信息。

</TabItem>

<TabItem value="By Voice" label="通过语音">

:::danger
使用 SenseCraft AI 的某些服务可能会产生费用，请参考以下文档了解详情：

**[SenseCraft AI for Watcher 计划和福利](https://wiki.seeedstudio.com/watcher_price/)**
:::

Watcher 提供了一种方便直观的方式，通过语音命令发送任务或进行对话，这得益于其 "按住说话" 功能。此功能可以从设备上的任何屏幕或界面访问，使您无需导航菜单即可轻松与 Watcher 互动。以下是使用此功能的分步指南：

1. 激活按住说话：

   - 找到 Watcher 顶部右侧的滚轮按钮。
   - 按住滚轮按钮进入语音输入界面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/push_to_talk.gif" style={{width:650, height:'auto'}}/></div><br />

2. 说出您的命令或消息：

   - 按住滚轮按钮时，清晰地向 Watcher 说出您的任务或消息。
   - 您可以分配任务，例如 "告诉我宝宝是否在哭" 或 "如果狗在偷食物，说停下 Copper"。（Copper 是我的狗的名字。）

3. 松开滚轮按钮：

   - 完成讲话后，松开滚轮按钮。
   - Watcher 将处理您的语音输入并确定是否为任务分配。

4. 任务分配：

   - 如果 Watcher 识别您的语音输入为任务分配，它将自动将任务分解为相关组件。
   - Watcher 将在其屏幕上显示卡片，展示 **对象**（监控什么）、**行为**（观察什么动作）、**通知**（如何提醒您）、**时间范围**（何时监控）和 **频率**（监控频率）。
   - 查看显示的信息以确保其准确反映您的任务意图。
   - 如果详情正确，请确认任务，Watcher 将根据指定参数开始执行任务。
   - 如果 Watcher 误解了您的任务，长按滚轮按钮，您可以通过对话继续尝试纠正 Watcher 对任务的理解。如果多次尝试后仍无法正确理解，建议您使用 SenseCraft APP 来分配任务。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/80.jpg" style={{width:650, height:'auto'}}/></div>

使用技巧：

- 清晰且适中速度地讲话，以确保准确的语音识别。
- 讲话时请尽量靠近 Watcher，大约 **3 ~ 10cm** 的距离语音识别准确性最佳。
- 尽量减少背景噪音，以提高 Watcher 理解语音命令的能力。
- 分配任务时尽量具体和简洁，以帮助 Watcher 准确解读您的意图。

通过利用按住说话功能，您可以轻松发送任务并与 Watcher 进行对话，使您与设备的互动更加自然和高效。

:::note
如果您遇到 **0x7002** 错误，这意味着当前 Watcher 的网络状态不佳，音频服务调用失败，请更换网络或位置后重试。
:::

</TabItem>

</Tabs>


## 结束正在运行的任务

1. 点击屏幕一次或按下滚轮按钮。

2. 一个确认弹窗将出现，提供两个选项：**主菜单** 和 **结束任务**。要终止任务，可以点击屏幕上的 **结束任务** 或使用滚轮导航到 "结束任务"，然后按下滚轮按钮确认。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/end_task.png" style={{width:210, height:'auto'}}/></div><br />

3. 或者，您可以通过移动设备上的 SenseCraft APP 结束任务，点击任务卡上的 **结束** 按钮即可。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/end-task-phone.png" style={{width:250, height:'auto'}}/></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供了多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

翻译内容：

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord">加入 Discord 技术支持</a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion">参与 GitHub 讨论</a>
</div>