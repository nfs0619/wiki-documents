---
description: 本文是关于使用 OTA 或增量更新可能导致系统不稳定和安全风险的常见问题解答，因此建议执行完整的 ROM 更新以维护系统的安全性和稳定性，避免部分更新。
title: 为 Jetson 升级软件包
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/upgrade_software_packages_for_jetson
last_update:
  date: 05/15/2025
  author: Youjiang
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

#### 如果您告诉我不能执行 apt upgrade，我该如何升级软件包？如果我不升级软件，会有安全风险吗？

答：首先，需要理解的是，**OTA（空中下载）/增量更新/部分更新**可能会对您的操作系统造成潜在危害，因为它们允许用户仅更新部分软件包。这种方式可能导致依赖关系不匹配、系统不稳定以及错过安全补丁，从而增加软件故障或漏洞的风险。此外，管理部分升级通常需要手动干预，这可能容易出错。相反，**完整 ROM/完整更新**可以确保所有软件包和依赖项一起更新，从而保持系统的兼容性和稳定性。通过在整个系统中应用安全补丁和错误修复，完整升级有助于保持系统的安全性和一致性，减少冲突的可能性。尽管完整升级可能需要更多时间，但从长远来看，它通常被认为更安全、更可靠。

对于我们的 Jetson 设备，我们会在 NVIDIA 发布 JetPack 后发布相应的 JetPack（驱动程序发布和自定义 JetPack 也遵循相同原则），这确保了与使用 apt 升级相比，系统更加稳定和安全。如果您担心软件过时并希望更新特定软件包，可以考虑以下选项：

1. 如果您确定您的软件包不依赖于系统软件包，请运行 `sudo apt-get install <Your_Package>` 来升级该软件包。
2. 对于大多数开源软件，可以下载源文件并自行编译。
3. 等待新的 JetPack 发布。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>