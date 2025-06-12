---
description: CircuitPython 适用于 XIAO ESP32S3
title: XIAO ESP32S3 项目 CircuitPython
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao_esp32s3_project_circuitpython
last_update:
  date: 05/15/2025
  author: Isaac, Djair Guilherme
---

# 项目概述

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

此 Wiki 已更新至: https://wiki.seeedstudio.com/xiao_esp32s3_with_micropython/

CircuitPython 是一种非常适合 XIAO ESP32S3 的编程语言，因为它简化了物理计算项目。基于 Python，它具有对初学者友好的语法，并包含用于访问传感器和显示屏等硬件的模块。由于 CircuitPython 已经支持 ESP32S3 芯片，本项目尝试在 Seeed Studio XIAO ESP32S3 开发板上编译 CircuitPython。

## 搭载 OLED 显示屏的 XIAO ESP32S3

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/13.jpg" /></div>

### 硬件准备

这里我使用了 Seeed Studio XIAO ESP32S3 和 Seeed Studio Grove OLED Display 0.96 作为硬件。

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3</th>
        <th>Seeed Studio Grove OLED Display 0.96</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove-oled-displey-0.96-ssd1315-preview.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### 软件准备

我使用了 Thonny IDE 软件（Windows）以及一些相关库和文件。

<div class="table-center">
  <table align="center">
    <tr>
        <th>Thonny IDE</th>
        <th>相关文件（库）</th>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://thonny.org/">
              <strong><span><font color={'FFFFFF'} size={"4"}> 下载 ⏬</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/related-mpy.zip">
              <strong><span><font color={'FFFFFF'} size={"4"}> 下载 ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg" style={{width:500, height:'auto'}}/></div>

### 入门指南

#### 下载 XIAO ESP32S3 CircuitPython 固件

[CircuitPython 固件 9.1.1 和 9.20 Alpha for XIAO ESP32S3 Sense](https://github.com/djairjr/Seeed_Xiao_ESPS3_Sense_Circuitpython/tree/main/seeed_xiao_esp32s3_sense/seeed_xiao_esp32s3_sense)

#### 将 XIAO ESP32S3 开发板连接到 PC 并进入 BootLoader 模式

具体方法如下：

- **步骤 1**. 按住 XIAO ESP32S3 的 BOOT 按钮并保持不松开。

- **步骤 2**. 在按住 BOOT 按钮的同时，通过数据线将开发板连接到电脑。连接后松开 BOOT 按钮。

- **步骤 3**. 上传 **Blink** 程序以检查 XIAO ESP32S3 的运行状态。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/15.gif" style={{width:500, height:'auto'}}/></div>

#### 打开 Thonny 并配置选项

1. 运行 Thonny 后，导航到 "Tools -> Options"，点击 "Options" 选项。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/03.png" /></div>

2. 选择 "Interpreter" 选项，然后点击 "CircuitPython (generic)"。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/04.png" /></div>

### 将 CircuitPython 固件烧录到 XIAO ESP32S3 开发板

1. 在 Thonny 中点击 "(esptool)"。它会提示您下载最新的 CircuitPython 固件并将其烧录到开发板。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/06.png" /></div>

2. 在 Thonny 中的 "(esptool)" 界面中，首先选择正确的 "Target port"。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/07.png" /></div>

3. 选择 CircuitPython 系列为 "ESP32-S3"，然后点击安装按钮旁边的三横线图标，选择您下载的固件文件。
例如: (seeed_xiao_esp32s3_911.bin 或 seeed_xiao_esp32s3_920.bin)

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/08.png" /></div>

4. Thonny 会自动完成复位，您可以点击 "Install" 按钮。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/09.png" /></div>

5. 显示 "Done" 后，窗口可以关闭。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/10.png" /></div>

6. 在 PC 上会出现一个名为 "CIRCUITPY" 的驱动器，这表明开发板已成功烧录固件。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/11.png" /></div>

#### 将相关文件（库）添加到 "CIRCUITPY" 驱动器

将所有文件从[相关文件（库）](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/related-mpy.zip)复制到 "CIRCUITPY" 驱动器。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/12.png" /></div>

:::note
在使用 "Seeed Studio Grove OLED Display 0.96" 时，"adafruit_ssd1306.mpy" 文件和 "adafruit_framebuf.mpy" 文件是必需的。

adafruit_framebuf 库使用一个名为 font5x8.bin 的字体文件来渲染文本。此文件需要在代码执行的环境中可访问。
:::

#### 编写代码（IIC）并上传以实现 OLED 显示

1. 添加文件后，可以通过命令 `import adafruit_ssd1306` 将 adafruit_ssd1306 库导入代码中，现在环境已配置好可以驱动 OLED 显示屏。代码如下所示：

```python
from board import *
from busio import I2C
import busio
import adafruit_ssd1306

i2c = I2C(IO6,IO5)  # 使用 IO6 和 IO5 引脚初始化 I2C 通信

# 创建一个分辨率为 128x64 且 I2C 地址为 0x3C 的显示对象
display = adafruit_ssd1306.SSD1306_I2C(128, 64, i2c, addr=0x3C)

# 清空显示屏
display.fill(0)
display.show()

# 在显示屏上写入文本
display.text('SeeedStudio ESP32S3', 0, 0 , 1)
display.text('Code by CircuitPython!', 0, 20 , 2)
display.show()
```

2. 点击 "Run" 按钮上传代码。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/14.png" /></div>

3. 最终效果：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/13.jpg" /></div>

## XIAO ESP32S3 Sense 使用 XIAO 圆形显示屏和 Sense 摄像头

### 硬件准备

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>适用于 XIAO 的圆形显示屏</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### 软件准备

1. 为 XIAO ESP32S3 Sense 安装固件。

<div className="table-center">
  <table align="center">
    <tr>
      <th>固件</th>
      <td>
        <div className="get_one_now_container" style={{ textAlign: 'center' }}>
          <a
            className="get_one_now_item"
            href="https://github.com/djairjr/Seeed_Xiao_ESPS3_Sense_Circuitpython/tree/main/seeed_xiao_esp32s3_sense/seeed_xiao_esp32s3_sense"
            style={{ color: '#FFFFFF', fontSize: '16px', textDecoration: 'none' }}
          >
            <strong>下载 ⏬</strong>
          </a>
        </div>
      </td>
    </tr>
  </table>
</div>

2. 安装必要的模块和依赖项。

您可以使用 Adafruit 提供的工具 [circup](https://learn.adafruit.com/keep-your-circuitpython-libraries-on-devices-up-to-date-with-circup/install-circup) 安装 CircuitPython 库。安装后，只需输入命令即可安装任何库。

```linux
# 安装 circup
pip install setuptools
pip install circup
pip install --upgrade circup
# 将模块安装到库中
circup install gc9a01 adafruit_ticks 
```

### 入门

安装所有所需的库后，只需将以下代码写入 CIRCUITPY 的 code.py 或 main.py 文件，即可在圆形显示屏上显示摄像头画面。

```python
import board
import busio
import displayio
import espcamera
import adafruit_ticks
import gc9a01
import struct

i2c = busio.I2C(board.SCL, board.SDA)
spi = busio.SPI(clock=board.SCK, MOSI=board.MOSI)
cam_i2c = busio.I2C(board.CAM_SCL, board.CAM_SDA)

tft_dc  = board.D3
tft_cs  = board.D1
tft_bl  = board.D6

display_bus = displayio.FourWire(spi, command=tft_dc, chip_select=tft_cs)
display = gc9a01.GC9A01(display_bus, width=240, height=240, rotation=0)

# 该示例似乎完全不使用 Displayio
# 直接在 display_bus 上打印帧以提高速度
# 因此，旋转设置不起作用...

main = displayio.Group()
display.root_group = main

# 摄像头初始化
cam = espcamera.Camera(
    data_pins=board.CAM_DATA,
    external_clock_pin=board.CAM_XCLK,
    pixel_clock_pin=board.CAM_PCLK,
    vsync_pin=board.CAM_VSYNC,
    href_pin=board.CAM_HREF,
    pixel_format=espcamera.PixelFormat.RGB565,
    frame_size=espcamera.FrameSize.R240X240,
    i2c=cam_i2c,
    external_clock_frequency=20_000_000,
    framebuffer_count=2,
    grab_mode=espcamera.GrabMode.WHEN_EMPTY)

# 向 display_bus 发送初始化字节
display_bus.send(36, struct.pack(">hh", 0, 239))
display_bus.send(42, struct.pack(">hh", 0, 239))
display_bus.send(43, struct.pack(">hh", 0, 80+239))
display.auto_refresh = False

t0 = adafruit_ticks.ticks_ms()

while True:
    frame = cam.take(1)                                                         
    if isinstance(frame, displayio.Bitmap):                                     
        display_bus.send(44, frame)                                             
        t1 = adafruit_ticks.ticks_ms()                                          
        fps = 1000 / adafruit_ticks.ticks_diff(t1, t0)
        print(f"{fps:3.1f}fps")  # 通常运行速度约为 25fps
        t0 = t1
```

## 更多内容

- 相关文件均来自组装好的 [Adafruit CircuitPython library bundle](https://github.com/adafruit/Adafruit_CircuitPython_Bundle/releases/download/20230718/adafruit-circuitpython-bundle-8.x-mpy-20230718.zip)，可以从 https://circuitpython.org/libraries 获取，并且您可以使用 CircuitPython 找到所有支持的硬件文件。
- "font5x8.bin" 文件来源于 [这里](https://github.com/adafruit/Adafruit_CircuitPython_framebuf/blob/main/examples/font5x8.bin)。
- [固件](https://github.com/djairjr/Seeed_Xiao_ESPS3_Sense_Circuitpython/tree/main/seeed_xiao_esp32s3_sense/seeed_xiao_esp32s3_sense) 用于圆形显示屏和摄像头。

## ✨ 贡献者项目

- 本项目由 Seeed Studio [贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) 支持。
- 感谢 [Isaac 的努力](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35178340)，您的工作将会被 [展示](https://wiki.seeedstudio.com/Honorary-Contributors/)。
- 以及 [Djair Guilherme](https://github.com/Seeed-Studio/wiki-documents/issues/1237#issuecomment-2295415274)。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时拥有顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>