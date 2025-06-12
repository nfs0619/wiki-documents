---
description: Seeed Studio XIAO nRF52840 使用 CircuitPython
title: CircuitPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-BLE_CircutPython
last_update:
  date: 05/15/2025
  author: shuxu hu
---

# **Seeed Studio XIAO nRF52840 使用 CircuitPython**

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

CircuitPython 是一种编程语言，旨在简化在低成本微控制器板上进行实验和学习编程的过程。它使入门变得前所未有的简单，无需预先下载桌面软件。设置好开发板后，只需打开任意文本编辑器即可开始编辑代码，就是这么简单。

## **快速入门**

### 安装

**步骤 1** 进入 Bootloader 模式

在我们将 CircuitPython 安装到 Seeed Studio XIAO nRF52840 之前，需要进入 Bootloader 模式。我们可以通过快速按两次复位按钮进入 Bootloader 模式：

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/functional2b.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/functional2b.jpg" alt="pir" width={600} height="auto" /></p>

然后磁盘会显示出来：

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu1.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu1.png" alt="pir" width={600} height="auto" /></p>

**步骤 2** 下载适用于 Seeed Studio XIAO nRF52840 的 [固件](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-Circuitpython.uf2)

**步骤 3** 将 .uf2 文件拖到磁盘驱动器（“XIAO-SENSE”）

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu3.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu3.png" alt="pir" width={600} height="auto" /></p>

**步骤 4** 检查磁盘驱动器的名称是否已更改为 "CIRCUITPY"。

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu2.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu2.png" alt="pir" width={600} height="auto" /></p>

现在，您已经成功将 CircuitPython 安装到 Seeed Studio XIAO nRF52840 开发板上。

### 应用

**步骤 1** 下载 CircuitPython 编辑器 - [Mu Editor](https://codewith.mu/en/download) 并打开它

**步骤 2** 点击 "Mode" 并选择模式为 "CircuitPython"

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu4.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu4.png" alt="pir" width={600} height="auto" /></p>

**步骤 3** 复制并上传以下代码：

```cpp
"""Seeed Studio XIAO nRF52840 示例代码。使内置 LED 闪烁。"""
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

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu5.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu5.png" alt="pir" width={600} height="auto" /></p>

此时，Seeed Studio XIAO nRF52840 上的用户 LED 将开始闪烁。

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