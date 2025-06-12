---
description: Seeed Studio XIAO SAMD21 使用 CircuitPython
title: CircuitPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino-XIAO-CircuitPython
last_update:
  date: 05/15/2025
  author: shuxu hu
---

# 在 Seeed Studio XIAO SAMD21 上使用 CircuitPython

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<!-- ![](https://files.seeedstudio.com/wiki/Circuitpython-XIAO/XIAO-CP.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/XIAO-CP.png" alt="pir" width={600} height="auto" /></p>

本篇 Wiki 介绍如何在 [Seeed Studio XIAO SAMD21 开发板](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) 上安装并运行 Adafruit Industries 官方的 [CircuitPython](https://circuitpython.org/)！

CircuitPython 是一种编程语言，旨在简化在低成本微控制器板上进行实验和学习编程的过程。它使入门变得前所未有的简单，无需预先下载桌面软件。设置好开发板后，只需打开任意文本编辑器即可开始编辑代码。有关更多信息，请参考 [这里](https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython)。

## 安装 CircuitPython

1. 下载官方的 [**Seeed Studio XIAO SAMD21 的 CircuitPython Bootloader**](https://circuitpython.org/board/seeeduino_xiao/)。一个 `.uf2` 文件将被下载。

2. 使用 USB Type-C 将 Seeed Studio XIAO SAMD21 插入您的电脑。

3. 使用跳线快速短接两次 RST 引脚进入 DFU 引导模式。有关更多参考，请参见 [这里](https://wiki.seeedstudio.com/Seeeduino-XIAO/#reset)。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" /></div>

4. 您的电脑上应该会出现一个名为 `Arduino` 的外部驱动器。将下载的 CircuitPython uf2 文件拖到 `Arduino` 驱动器中。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2.png" /></div>

5. 加载 CircuitPython 引导程序后，拔下 USB Type-C 并重新连接。一个名为 `CIRCUITPY` 的新外部驱动器应该会出现。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2-2.png" /></div>

6. 现在，CircuitPython 已加载到 Seeed Studio XIAO SAMD21 上！您只需编写 Python 程序并将其命名为 `main.py`，然后将其拖到 `CIRCUITPY` 驱动器中即可。

## CircuitPython 基础

使用 CircuitPython 运行 `Blink` 示例：

**注意：** 只需复制并保存以下代码，将其命名为 `main.py`，然后拖到 `CIRCUITPY` 驱动器中。

```py
import time
import board
from digitalio import DigitalInOut, Direction

led = DigitalInOut(board.LED_INVERTED)
led.direction = Direction.OUTPUT

while True:
    led.value = True
    time.sleep(1)
    led.value = False
    time.sleep(1)
```

您应该会看到内置 LED 开始闪烁！

### 使用 Grove 模块

您可以在 CircuitPython 上使用具有简单模拟/数字接口的 Grove 模块。例如，将 Grove - 光传感器连接到 Seeeduino XIAO 的 `A0` 端口并运行以下代码：

```py
import time
import board
from analogio import AnalogIn

analog_in = AnalogIn(board.A0) # Seeeduino XIAO 的模拟引脚

def get_voltage(pin):
    return (pin.value * 3.3) / 65536
 
while True:
    print("电压: ", get_voltage(analog_in))
    time.sleep(0.1)
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/CP.png" /></div>

有关更多 CircuitPython API 参考，请访问 [**CircuitPython Essentials**](https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials)。

## 资源

- [**CircuitPython Essentials**](https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials)

- [**在 Seeed Studio Xiao SAMD21 上安装 CircuitPython**](https://makeandymake.github.io/2020/05/02/installing-circuitpython-on-seeeduino-xiao.html)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>