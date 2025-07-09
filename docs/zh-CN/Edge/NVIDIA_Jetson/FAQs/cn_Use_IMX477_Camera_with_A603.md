---
description: 使用 IMX477 摄像头与 A603 Jetson 载板
title: 使用 IMX477 摄像头与 A603 Jetson 载板
keywords:
- reComputer
- IMX477 摄像头
- A603
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Use_IMX477_Camera_with_A603_Jetson_Carrier_Board
last_update:
  date: 05/15/2025
  author: Youjiang
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## Jetpack 5.1.2

如果需要使用 IMX477 摄像头，请下载 [此驱动包](https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/ERJdh3pvdYZOqJWugsnMJKEBMkGXtU8ngY03kJeLDWSkLw?e=TuLWmL)，并按照 [此教程](https://wiki.seeedstudio.com/reComputer_A603_Flash_System/) 重新刷写 Jetpack 系统。

:::caution
请注意，您需要使用 [ **JP5.1.2** ](https://developer.nvidia.com/embedded/jetson-linux-r3541) 的 BSP。
:::

## Jetpack 6.0

如果需要使用 IMX477 摄像头，请下载 [此驱动包](https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/ETIsoZ25I69KsSiA6TweK4UBVfo7gBrvPyKX9pJ68J8oIA?e=a9uumE)，并按照 [此教程](https://wiki.seeedstudio.com/reComputer_A603_Flash_System/) 重新刷写 Jetpack 系统。

:::caution
请注意，您需要使用 [ **JP6.0** ](https://developer.nvidia.com/embedded/jetson-linux-r363) 的 BSP。
:::

系统刷写完成后，连接 CSI 摄像头并使用以下命令启动摄像头：

```bash
nvgstcapture-1.0 --sensor-id=0
```

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/camera.png" /></div>


## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供了多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>