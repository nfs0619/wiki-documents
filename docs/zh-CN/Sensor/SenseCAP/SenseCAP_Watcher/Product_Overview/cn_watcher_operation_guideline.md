---
description: SenseCAP Watcher 的操作指南。
title: 操作指南
image: https://files.seeedstudio.com/wiki/watcher_getting_started/0_1.webp
slug: /cn/watcher_operation_guideline
last_update:
  date: 05/15/2025
  author: Citric
sidebar_position: 2
---

# SenseCAP Watcher 操作指南

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/0.JPG" style={{width:800, height:'auto'}}/></div>

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

在本 Wiki 部分中，我们将为您提供有关 SenseCAP Watcher 的操作逻辑、任务以及设备功能使用的信息。

## 基本操作

请阅读此部分以了解和掌握 Watcher 的基本操作，从而成功掌握使用 Watcher 的方法和理念。

### 开机

:::caution
请使用与 Watcher 兼容的电源插头；Watcher 必须由 5V 电源供电，如果使用不符合要求的电源适配器或电压超过 5V 的电源，可能会导致设备烧毁！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/adapter.jpg" style={{width:350, height:'auto'}}/></div>

上图显示了推荐的适配器规格。如果您不知道在哪里可以购买合适的适配器，可以通过以下链接直接购买。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/USB-Power-Adapter-for-Raspberry-Pi-4-5V-3A-p-4089.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>
:::

要启动您的 Watcher 设备，请按住右上角的旋钮按钮约 3 秒钟，直到屏幕上出现 Seeed Studio 的标志。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/power_on.gif" style={{width:650, height:'auto'}}/></div>

<br />

当标志显示后，松开按钮并允许设备完成初始化过程。几秒钟后，Watcher 将显示其主菜单，表明设备已准备好使用。

:::tip
如果长按后设备无法启动，可能是设备电量不足，您需要连接电缆为其供电后才能唤醒 Watcher。
:::

### 关机

要关闭 Watcher，您需要进入设置菜单。使用旋钮按钮导航到“设置”选项并按下按钮进入菜单。进入后，向下滚动到“关机”选项并按下旋钮按钮选择它。最后，从左向右滑动滑块以确认关机过程，Watcher 将关闭电源。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/power_off.gif" style={{width:650, height:'auto'}}/></div>

:::tip
如果您的 Watcher 连接了电源线，设备的“关机”按钮将变为“重启”按钮，此时设备无法关机。同样，关闭的设备在连接电源线时会自动开机。
:::

在您的 Watcher 设备底部，您会发现一个小孔。此小孔提供了硬件关机按钮的访问权限，允许您在需要时关闭设备。

要使用硬件按钮关闭 Watcher，请按照以下步骤操作：

1. 找到一个细小的尖锐物体，例如回形针或小针。

2. 小心地将尖锐物体插入 Watcher 底部的小孔中。

3. 轻轻按下小孔内的关机按钮，您的 Watcher 将关闭电源。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/power_off_button.gif" style={{width:650, height:'auto'}}/></div><br />

:::note
使用尖锐物体按下复位按钮时，请务必小心。轻轻操作，避免用力过猛以防止损坏设备。

请注意，执行硬件复位不会擦除存储在 Watcher 上的任何用户数据。复位操作旨在在遇到与软件相关的问题或设备无响应时重新启动设备。

如果您的 Watcher 遇到持续性问题，硬件复位无法解决，您可能需要通过设备的设置菜单执行出厂重置。然而，请记住，出厂重置将擦除所有用户数据，因此应仅作为最后的解决手段。

请小心操作您的 Watcher，仅在必要时使用硬件复位按钮，以确保设备的长久使用和正常运行。
:::

### 操作逻辑

Watcher 的操作逻辑围绕旋钮按钮展开，该按钮是导航和选择的主要手段。逆时针旋转旋钮按钮可以在菜单中向上或向左移动，而顺时针旋转则可以向下或向右移动。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/logic.gif" style={{width:650, height:'auto'}}/></div>

<br />

要确认选择或进入子菜单，只需按下旋钮按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/enter.gif" style={{width:650, height:'auto'}}/></div>

<br />

然而，需要注意的是，在某些可能存在操作歧义的情况下，滚轮按钮的选择和确认逻辑可能会偏离标准。在这种情况下，触摸屏界面提供了一种替代的交互方式，允许您通过点击屏幕上的相应元素完成所需操作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/touch.gif" style={{width:650, height:'auto'}}/></div><br />

在整个 Wiki 中，将提供具体的说明，指导您如何在每个菜单中导航和选择选项，同时考虑到滚轮按钮逻辑的任何例外情况。通过熟悉滚轮按钮和触摸屏控件，您将能够高效地操作 Watcher 设备并访问其各种功能和设置。

### 按下说话（Push to Talk）

Watcher 的按下说话功能允许您通过语音命令与设备交互，无论当前处于哪个屏幕或界面。只需按住设备右上角的滚轮按钮即可激活语音输入界面。在按住按钮的同时，说出您的命令或消息，例如分配任务或发起对话。一旦释放按钮，Watcher 将处理您的语音输入并作出相应响应。如果需要进一步澄清，请再次按住按钮以提供额外的语音输入。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/push_to_talk.gif" style={{width:650, height:'auto'}}/></div><br />

:::tip
1. 当前语音对话仅支持使用英语。如果您使用其他语言，可能会出现意外情况。

2. 如果在 Watcher 正在运行任务时启动对话，Watcher 将首先暂停当前任务，并在对话结束后重新进入原始任务。

3. 要了解如何分配任务，请先阅读 **[运行 - 通过语音向 Watcher 发送任务](#run---sending-task-to-watcher-by-speaking)** 和 **[如何向 Watcher 分配任务](https://wiki.seeedstudio.com/getting_started_with_watcher_task/)** 教程。
:::

## 功能概览

Watcher 提供四个主要菜单选项：**任务模板**、**当前任务**、**扩展** 和 **设置**。这些菜单提供了访问设备各种功能的入口。

### 任务模板

任务模板菜单包含一系列预配置的任务，随时可用。这些任务包括人体检测、宠物检测和手势检测。通过选择这些模板之一，您可以快速设置 Watcher 执行所需任务，而无需进行复杂的配置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_templates.gif" style={{width:700, height:'auto'}}/></div>

### 当前任务

当前任务菜单选项提供了一种方便的方式来访问和管理 Watcher 上正在运行的任务。如果您需要离开当前任务以调整设备设置（如音量、亮度或 LED 灯开关），可以通过主菜单选择当前任务选项轻松返回任务，确保流畅高效的用户体验。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/current_task.gif" style={{width:700, height:'auto'}}/></div>

### 扩展

Watcher 上的扩展菜单目前作为一个中心，用于显示来自特定 Grove 传感器的连接数据，包括 **[Grove SHT41](https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT41-p-5383.html)**、**[Grove SHT40](https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT40-p-5384.html)** 和 **[Grove SCD41](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD41-p-5025.html)**。

此功能允许用户将这些支持的 Grove 传感器之一与 Watcher 设备无缝集成，实现传感器数据的实时监控和可视化。通过导航到扩展菜单，用户可以查看连接传感器的数值和读数，从而收集洞察并根据收集的数据做出明智决策。

随着 Watcher 平台的不断发展，扩展菜单可能会增加对更多 Grove 传感器的支持，以及额外的功能和特性，从而进一步增强设备的能力和用户体验。请关注有关扩展菜单未来增强功能的更新和公告。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/connect_grove.gif" style={{width:700, height:'auto'}}/></div>

### 设置

最后，设置菜单是您访问和修改 Watcher 常规设置的地方。此菜单提供了自定义设备各个方面的选项，例如显示亮度、声音音量、连接设置等。通过探索设置菜单，您可以根据自己的偏好调整 Watcher 的性能和行为，确保个性化的用户体验。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/settings.gif" style={{width:700, height:'auto'}}/></div>

## Watcher 设置

本指南将引导您了解 Watcher 设备上可用的各种设置选项，并解释其功能。

- **连接应用**：
   - 连接应用设置允许您在 Watcher 和配套的移动应用之间建立连接。
   - 通过将 Watcher 连接到应用，您可以访问额外功能、远程控制能力，并在移动设备上接收通知。

- **Wi-Fi**：
   - Watcher 设备上的 Wi-Fi 设置显示当前连接的无线网络信息。
   - 如果尚未配置网络，Wi-Fi 设置将不会显示任何信息。
   - 请注意，Wi-Fi 网络的配置只能通过配套的移动应用完成，Watcher 设备本身不支持此功能。

- **蓝牙**:
   - 蓝牙设置允许您打开或关闭蓝牙功能。

- **声音**:
   - 声音设置让您调整 Watcher 的音频输出音量。
   - 您可以根据自己的喜好或环境增加或减少音量。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/sound_setting.gif" style={{width:650, height:'auto'}}/></div>

<br />

- **亮度**:
   - 亮度设置允许您控制 Watcher 显示屏的亮度级别。
   - 调节亮度可以帮助在不同的光线条件下提高可见性，并节省电池寿命。

- **RGB 灯**:
   - RGB 灯设置是一个切换开关，允许您打开或关闭 LED 指示灯。

- **关于设备**:
   - “关于设备”部分提供有关您的 Watcher 的重要信息，例如型号、固件版本和序列号。
   - 这些信息在排查问题或检查可用更新时非常有用。

- **关机/重启**:
   - 关机/重启设置允许您根据电源状态重启或关闭 Watcher 设备。
   - 当 Watcher 连接到电源时，将显示“重启”选项，允许您重启设备。连接电源时不允许关机。
   - 当 Watcher 使用电池供电时，将显示“关机”选项，允许您关闭设备。

- **恢复出厂设置**:
   - 恢复出厂设置选项会将您的 Watcher 恢复到原始出厂设置。
   - 此操作将删除所有用户数据、偏好设置和配置，将设备恢复到默认状态。
   - 请谨慎使用此选项，因为此操作无法撤销，恢复出厂设置后您需要重新设置您的 Watcher。

通过熟悉这些设置选项，您可以根据自己的需求自定义和优化 Watcher 的使用体验。请注意，某些设置（如 Wi-Fi 和蓝牙配置）只能通过配套的移动应用程序访问和修改。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>