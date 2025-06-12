---
description: 使用 Seeed Studio XIAO SAMD21 构建一个 DAPLink 设备
title: 使用 Seeed Studio XIAO SAMD21 构建一个 DAPLink 设备
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino-XIAO-DAPLink
last_update:
  date: 05/15/2025
  author: shuxu hu
---

# Seeed Studio XIAO SAMD 21 DAPLink

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

现在，我们已经**开发了可以运行在 Arduino 开发板（*SAMD 系列*）上的 DAPLink 固件**，例如 [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) 和 [Seeeduino Xiao](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)，这样您可以以最具成本效益的方式上传和调试支持 DAPLink 的开发板！

## 特性

- 调试和烧录 Arm Cortex CPU
- 提供虚拟串口，无需 USB 转串口
- 拖放上传固件（即将推出）

## 快速开始

请访问 Arduino DAPLink 快速开始 Wiki 页面。

### `uf2` 方法

为了方便，我们还提供了通过 `uf2` 方法上传 Wio Terminal 固件的方式。只需从以下链接下载 `uf2` 文件。

- 下载 [**simple_daplink_xiao**](http://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/simple_daplink_xiao.uf2) `uf2` 文件。

通过快速滑动电源开关两次进入引导加载模式。有关更多参考，请参阅[此处](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#faq)。

在您的电脑上应该会出现一个名为 `Arduino` 的外部驱动器。将下载的 uf2 文件拖放到 `Arduino` 驱动器中。

### 连接引脚图

您可以参考以下内容：

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/daplink-xiao.jpg" /></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>