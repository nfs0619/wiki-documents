---
description: 本文档提供了使用 Jetson 串口获取 reComputer J4012（或类似设备）启动日志的分步指南。
title: 如何获取 reComputer J30/J40 的系统日志？
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/get_the_system_log_of_recomputer_j30_and_j40
last_update:
  date: 05/15/2025
  author: Youjiang
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

本文档将以 [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) 为例，演示如何通过 Jetson 串口获取设备的启动日志。

## 前置条件

- reComputer J4012/ J4011/ J3010 或 J3011
- [USB 转串口 (TTL) 模块](https://www.seeedstudio.com/CH340G-USB-to-Serial-TTL-Module-Adapter-p-2359.html)
- 一台安装了串口调试工具的电脑

:::info
您可以根据个人喜好下载并安装串口调试工具。我们推荐使用 [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)、[XShell](https://www.netsarang.com/en/xshell/) 或 [MobaXterm](https://mobaxterm.mobatek.net/)。

本教程使用 MobaXterm。
:::

## 硬件连接

1. 将 J15 接口的对应引脚连接到 USB2TTL 模块。
2. 使用安装了串口调试工具的电脑连接 USB2TTL 模块。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/hardware_connection.png"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/pin.png"/>
</div>

## 获取系统日志

**步骤1.** 获取电脑识别到的 USB2TTL 模块的标识号。

:::note
如果您的电脑运行的是 Windows 系统，可以在设备管理器中找到识别到的标识号。
:::

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/com.png"/>
</div>

**步骤2.** 打开串口调试工具，配置串口号，并将波特率设置为 `115200`。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/config_serial.png"/>
</div>

**步骤3.** 启动 Jetson。如果一切正常，您应该可以在串口调试工具窗口中看到系统启动日志。

<div align="center">
<iframe width="800" height="450" src="https://www.youtube.com/embed/rwiKgF91mNE" title="获取 reComputer J30/J40 的系统日志" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>