---
description: Seeed Studio XIAO RP2040 使用 CircuitPython
title: CircuitPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-RP2040-with-CircuitPython
last_update:
  date: 05/15/2025
  author: shuxu hu
---

# **Seeed Studio XIAO RP2040 使用 CircuitPython**

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

CircuitPython 是一种编程语言，旨在简化在低成本微控制器板上进行实验和学习编程的过程。它无需预先下载桌面软件，使入门变得前所未有的简单。一旦设置好开发板，只需打开任意文本编辑器，即可开始编辑代码。就是这么简单。

## **快速入门**

### 安装

**步骤 1** 进入 Bootloader 模式

在我们为 Seeed Studio XIAO RP2040 安装 CircuitPython 之前，需要进入 Bootloader 模式。可以通过以下操作进入 Bootloader 模式：

- 长按 "BOOT" 按钮。（板子上标有 "B"，如右图所示）
- 在按住按钮的同时，将 Seeed Studio XIAO RP2040 连接到电脑。
- 电脑上会出现一个磁盘驱动器（RP1-RP2）。

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" alt="pir" width={600} height="auto" /></p>

磁盘驱动器显示为 (RP1-RP2)：

<div align="center"><img width={150} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu.png" /></div>


**步骤 2** 下载适用于 Seeed Studio XIAO RP2040 的 [固件](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-CircuitPython.uf2)

**步骤 3** 将 .uf2 文件拖到磁盘驱动器 ("RP1-RP2")

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu9.png" /></div>


**步骤 4** 检查磁盘驱动器的名称是否已更改为 "CIRCUITPY"。

<div align="center"><img width={150} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu2.png" /></div>


现在，您已经成功将 CircuitPython 安装到 Seeed Studio XIAO RP2040 开发板上。

### LED 闪烁教程

**步骤 1** 下载 CircuitPython 编辑器 - [Mu Editor](https://codewith.mu/en/download)

**步骤 2** 打开编辑器并选择模式为 "CircuitPython"

<div align="center"><img width={750} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu7.png" /></div>


**步骤 3** 复制并上传以下代码：

```cpp
"""Pico 示例代码。控制内置 LED 闪烁。"""
import time
import board
import digitalio

led = digitalio.DigitalInOut(board.LED)
led.direction = digitalio.Direction.OUTPUT

while True:
    led.value = True
    time.sleep(0.5)  # LED 点亮 0.5 秒
    led.value = False
    time.sleep(0.5)  # LED 熄灭 0.5 秒
```

点击 "Serial" 打开 REPL，将代码保存为 'code.py' 或 'main.py'

<div align="center"><img width={750} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu6.png" /></div>


此时，Seeed Studio XIAO RP2040 上的用户 LED 将开始闪烁。

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