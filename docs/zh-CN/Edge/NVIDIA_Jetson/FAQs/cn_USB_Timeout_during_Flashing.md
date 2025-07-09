---
description: 列出在 Jetson 刷写过程中可能导致超时问题的原因。
title: 刷写 Jetpack 时的超时问题
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/usb_timeout_during_flash
last_update:
  date: 05/15/2025
  author: Youjiang
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/timeout_issue.png"/>
</div>

在通过命令行刷写 Jetson 设备的过程中，可能会出现超时问题，其原因包括以下几种：

1. **用于刷写的 Ubuntu 主机 PC 异常：** 一个典型的例子是通过 Ubuntu 虚拟机进行刷写。由于虚拟机中的 USB 稳定性问题，常常会遇到超时现象。
2. **DC 电源适配器供电不足：** 电源输出需要满足 Jetson 设备的要求。您可以在 Seeed Bazaar 的产品详情页面上查看相关参数。
3. **Type-C 数据线的质量问题：** 尽管可以通过 USB 2.0 进行刷写，但数据线的质量会影响刷写过程的稳定性。根据实际经验，数据线需要满足以下两个关键点：(a) 至少支持 USB 2.0 通信，(b) 数据线长度应短于 1.5 米。
4. **避免使用 USB 集线器：** 某些 USB 集线器可能会影响刷写过程中数据传输的稳定性。
5. **刷写包选择错误：** 请确认选择了正确的刷写包，并重新启动刷写脚本。

请检查上述问题，并尝试重新启动刷写脚本。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>