---
description: Jetson-常见问题解答
title: Jetson 使用常见问题解答
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Jetson_FAQ
last_update:
  date: 05/15/2025
  author: Seraphina
---

# 技术支持

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

本文档包含与 Jetson 系列产品相关的所有常见问题。如果您在使用 Jetson 时遇到任何问题，这将对您非常有帮助。

#### 问题1：安装故障排查

详情请点击 [这里](/Troubleshooting_Installation)

#### 问题2：收到的 reComputer 中 eMMC 剩余空间只有大约 2GB，如何解决空间不足的问题？

详情请点击 [这里](/solution_of_insufficient_space)

#### 问题3：如何解决 reComputer 与 VEYE 摄像头的兼容性问题？

详情请点击 [这里](/Solution_for_the_Compatibility_Issue_between_reComputer_and_VEYE_Camera)

#### 问题4：如何解决 IMX477 摄像头与 A603 承载板的兼容性问题？

详情请点击 [这里](/Use_IMX477_Camera_with_A603_Jetson_Carrier_Board)

#### 问题5：如何获取 reComputer J30/J40 的系统日志？

详情请点击 [这里](/get_the_system_log_of_recomputer_j30_and_j40)

#### 问题6：在刷写 Jetpack 时出现超时问题。

详情请点击 [这里](/usb_timeout_during_flash)

#### 问题7：刷写设备后无法使用 USB-A 接口、以太网接口或没有 HDMI 显示。
**答：** 请检查文件完整性（例如，我们提供了 SHA256 校验和）。对于某些承载板（尤其是 A60X 系列），请确保驱动补丁已成功复制/应用到 **Linux_for_tegra** 目录中。有些文件需要 **sudo** 权限，在复制目录时，请确保命令中包含 **-r** 参数。

#### 问题8：执行 "sudo apt-get update && sudo apt-get upgrade" 命令后，系统崩溃/无法启动/黑屏/丢失外设驱动。
**答：** 这些问题可以归结为 **“为什么不能在定制承载板上使用 apt upgrade 升级系统？”** 简短的回答是：**不要** 在 **定制/第三方** 承载板上运行 apt upgrade 命令。此外，避免运行包含 apt upgrade 命令的任何脚本或在 Ubuntu 中使用 GUI 更新工具。服务器上的 Debian 包未考虑我们定制板的具体设计，强制升级可能会导致不兼容性，从而使设备变砖。此过程仅适用于官方开发套件。要解决这些问题，请按照我们的指南重新刷写 JetPack。

#### 问题9：如果不能执行 apt upgrade，我该如何升级软件包？如果不升级软件会有安全风险吗？

详情请点击 [这里](/upgrade_software_packages_for_jetson)

<!-- #### 问题10：如何使用 OTA（空中升级）方法升级 Jetson 设备的系统版本。 -->

<!-- 详情请点击 [这里](/updating_jetpack_with_ota) -->

#### 问题11：Seeed 对 NVIDIA 的 Jetson BSP 做了哪些修改？

详情请点击 [这里](/differences_of_l4t_between_seeed_and_nvidia)


感谢您选择我们的产品！我们**在这里**为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>