---
description: reComputer R1000 V1.1 产品变更说明
title: reComputer R1000 V1.1 产品变更详情
keywords:
  - Edge
  - reComputer R1000 
  - Modbus RTU
  - rs485
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/recomputer_r1000_v1_1_description
last_update:
  date: 05/15/2025
  author: ShuishengPeng
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 简介
我们发现部分用户在使用 reComputer R1000 V1.0 的 Modbus 功能时，遇到了 DE 引脚控制的问题。为了提升用户体验，我们对引脚分配进行了修改，使 RS485 更加易用，并对整体产品进行了部分调整。

## 变更说明
1. 增加了一个新的天线孔。如以下图片所示，现在共有 3 个天线孔。接口的丝印也进行了相应调整。

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/PCN/before_after.png" /></div>

2. PCBA 版本从 V1.0 更改为 V1.1。

3. DSI 接口调整：从 DSI0 修改为 DSI1。

4. 删除了内部扬声器连接器。

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/PCN/delete.png" /></div>

5. 所有三个 RS485 组的 DE 收发方向控制引脚更改为支持 RTS 功能的引脚。

6. 其他一些引脚调整。请参考 [reComputer R1000 v1.1 引脚分配](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000_v1_1_Pin_Assignment.xlsx)。

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您在使用我们的产品时获得尽可能顺畅的体验。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>