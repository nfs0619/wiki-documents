---
description: Seeed Studio XIAO ESP32C3 使用 CircuitPython
title: XIAO ESP32C3 使用 CircuitPython
keywords:
- xiao
- esp32c3
- circuitpython
image: https://files.seeedstudio.com/wiki/esp32c3_circuitpython/title.png
slug: /cn/xiao_esp32c3_with_circuitpython
last_update:
  date: 05/15/2025
  author: Evelyn Chen
---

# **Seeed Studio XIAO ESP32C3 使用 CircuitPython**

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/title.png" /></div>

本篇 Wiki 介绍如何在 Seeed Studio XIAO ESP32C3 开发板上安装并运行 Adafruit Industries 官方的 CircuitPython！  
CircuitPython 是一种编程语言，旨在简化在低成本微控制器板上进行实验和学习编程的过程。它使入门变得前所未有的简单，无需预先下载桌面软件。设置好开发板后，只需打开任意文本编辑器即可开始编辑代码。有关更多信息，请参考 [这里](https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython)。

## 安装 CircuitPython

### 方法 1：使用命令行工具 esptool

#### 安装 Esptool
如果尚未安装 esptool.py，可以通过 pip 在您的电脑上安装：

``` linux
pip install esptool
```

#### 下载 XIAO ESP32C3 CircuitPython 固件
您需要从 [circirtpython.org](https://circuitpython.org/board/seeed_xiao_esp32c3/) 下载固件二进制文件。  
下载正确的 bin 文件后，导航到该文件所在的文件夹，并在此处打开命令行终端。  
截至最终草稿，最新的 bin 文件版本为：

```
adafruit-circuitpython-seeed_xiao_esp32c3-en_GB-9.1.1.bin
```

#### 将 XIAO ESP32C3 连接到您的电脑

您需要按住 XIAO ESP32C3 板上的 BOOT 按钮，同时将其通过 Type-C USB 数据线连接到电脑，以进入“引导加载程序”模式。

#### 检查端口

查找电脑上的所有串行设备。

* Linux 

在 Linux 上，可以使用 *dmesg* 命令查看已连接的设备：

```Linux
dmesg | grep tty
```

或者，您可以使用 *ls* 列出串行设备：

```
ls /dev/ttyS* /dev/ttyUSB*
```

* Windows

在 Windows 上，可以通过设备管理器检查串行端口。在“端口 (COM 和 LPT)”部分查看可用的串行端口。您也可以在命令提示符中使用 mode 命令列出串行端口：

```
mode
```

* macOS

在 macOS 上，可以使用 *ls* 命令列出可用的串行端口：

```
ls /dev/cu*
```

这将显示所有串行端口设备。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/1.png" /></div>

:::tip
如果端口被占用，可以使用以下命令查找并终止占用端口的进程（适用于 macOS）：  
识别占用端口的进程：

```
lsof | grep port
```

此命令列出打开的文件并搜索使用指定端口的任何进程。  
从输出中找到进程 ID (PID)，并终止该进程：

```
kill -9 <PID>
```

将 *PID* 替换为实际的进程 ID。
:::

#### 擦除闪存

```linux
esptool.py --chip esp32c3 --port /dev/cu.usbmodem11301 erase_flash
```

将 '/dev/cu.usbmodem11301' 替换为系统中的正确端口名称（例如，在 Windows 上为 `COM3`，在 Linux 上为 `/dev/ttyUSB0`）。

#### 写入闪存
将固件刷写到 XIAO ESP32C3：

```linux
esptool.py --chip esp32c3 --port /dev/cu.usbmodem11301 --baud 460800 write_flash -z 0x0 adafruit-circuitpython-seeed_xiao_esp32c3-en_GB-9.1.1.bin
```

同样，将 '/dev/cu.usbmodem11301' 替换为正确的端口名称，并将 'adafruit-circuitpython-seeed_xiao_esp32c3-en_GB-9.1.1.bin' 替换为您的固件文件路径。  
通过 RTS 引脚进行硬重置...

### 方法 2：使用 Web Serial esptool
WebSerial ESPTool 是为编程 Espressif ESP 系列微控制器板设计的基于 Web 的选项，这些微控制器板具有基于串行的 ROM 引导加载程序。它允许您擦除微控制器的内容，并在不同的偏移量处编程最多 4 个文件。请参考 [Web Serial ESPtool](https://learn.adafruit.com/circuitpython-with-esp32-quick-start/web-serial-esptool)。

然后，您可以使用您喜欢的工具开始为 XIAO ESP32C3 编写脚本！

## CircuitPython 推荐编辑器

通常，当 CircuitPython 安装完成后，或者您将已安装 CircuitPython 的开发板插入电脑时，开发板会显示为名为 CIRCUITPY 的 USB 驱动器。  
然而，ESP32 或 ESP32-C3 微控制器不支持原生 USB，因此无法显示 CIRCUITPY 驱动器。  
在这些开发板上，有其他方式传输和编辑文件。您可以使用 [Thonny](https://thonny.org/)，它通过发送隐藏命令到 REPL 来读取和写入文件。或者，您可以使用 CircuitPython 8 中引入的 [CircuitPython Web Workflow](https://code.circuitpython.org/)，该功能提供基于浏览器的 WiFi 访问 CircuitPython 文件系统的方式。请参考 [使用代码编辑器开始使用 Web Workflow](https://learn.adafruit.com/getting-started-with-web-workflow-using-the-code-editor/overview)。

### 1. Thonny
安装并打开 Thonny，然后按照以下说明配置 Thonny：

```
pip install thonny
# 安装完成后打开 thonny
thonny
```

进入 Run --> Configure Interpreter，并确保 Thonny 选项中的 Interpreter 选项卡如下所示，选择 "CircuitPython (generic)" 和端口：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/2.png" /></div>

点击对话框中的 "OK"，您应该会在 Thonny 窗口底部看到 Micropython shell，如下图所示。  
然后，您可以使用 **R**ead-**E**valuate-**P**rint-**L**oop（REPL）进行串行连接，这允许您输入单独的代码行并立即在 shell 中运行。它对于调试特定程序的问题非常有用。它是交互式的，因此非常适合测试新想法。请参考 [REPL](https://learn.adafruit.com/welcome-to-circuitpython/the-repl) 了解更多信息。

通过输入 *help()* 与 REPL 交互，它会告诉您从哪里开始探索 REPL。要在 REPL 中运行代码，请在 REPL 提示符后输入代码。  
要列出内置模块，请输入 *help("modules")*，这将显示 CircuitPython 中所有核心模块的列表，包括 "*board*"。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/3.png" /></div>

然后可以在 REPL 中输入 *"import board"* 并按回车键。接下来，输入 *"dir(board)"* 并按回车键，就可以获得板子上所有引脚的列表。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/4.png" /></div>

### 2. CircuitPython Web 工作流

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/5.png" /></div>

[The CircuitPython Code Editor](https://code.circuitpython.org/) 提供了一个更全面、更丰富的体验，用于编辑运行最新版本 CircuitPython 的 ESP32 系列设备上的文件。
该编辑器支持通过 Web Bluetooth、USB 和 WiFi 的 Web Workflow 来编辑文件。

## 引脚/端口信息

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/6.png" /></div>

* 更多信息请参考 [硬件概述](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/#hardware-overview)
* [Seeed Studio XIAO ESP32C3 原理图](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeeduino-XIAO-ESP32C3-SCH.pdf)

## 在 XIAO ESP32C3 上开始使用 CircuitPython

### 网络-WLAN

对于没有原生 USB 的板子（如 ESP32-C3 或 ESP32），需要通过 REPL 来连接 Wi-Fi。当在 CircuitPython 文件系统的根文件夹中添加名为 *settings.toml* 的文件时，Wi-Fi 功能会被启用。
通过 REPL 创建 *settings.toml* 文件：

```r
f = open('settings.toml', 'w')
f.write('CIRCUITPY_WIFI_SSID = "wifissid"\n')
f.write('CIRCUITPY_WIFI_PASSWORD = "wifipassword"\n')
f.write('CIRCUITPY_WEB_API_PASSWORD = "webpassword"\n')
f.close()
```

* 将 *wifissid* 替换为你的本地 Wi-Fi 网络名称
* 将 *wifipassword* 替换为你的本地 Wi-Fi 密码
* 另一个密码用于通过网页浏览器访问板子。可以设置为任意值 *webpassword*

连接后，可以按下 **Reset** 按钮重启固件，然后按几次回车键进入 REPL 提示符。然后重新连接设备到 Thonny，XIAO ESP32C3 的 IP 地址会显示出来。

:::note
请记住，ESP32 不支持 5 GHz 网络，因此如果你有两个 SSID，请使用 2.4 GHz 的 SSID。
:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/7.png" /></div>

### 延迟和计时

*time* 模块：

```python
import time
time.sleep(1)           # 休眠 1 秒
time.sleep_ms(500)      # 休眠 500 毫秒
time.sleep_us(10)       # 休眠 10 微秒
start = time.ticks_ms() # 获取毫秒计数器
delta = time.ticks_diff(time.ticks_ms(), start) # 计算时间差
```

### 引脚和 GPIO

可以使用 "*board*" 和 "*microcontroller*" 模块控制 GPIO，以下代码示例连接一个 LED 到 D5：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/14.png" /></div>

```python
# 使用 board 模块
import board
import digitalio
import time

led = digitalio.DigitalInOut(board.D5)
led.direction = digitalio.Direction.OUTPUT

while True:
    led.value = True  # 打开 LED
    time.sleep(1)
    led.value = False  # 关闭 LED
    time.sleep(1)
    
# 使用 microcontroller 模块
import microcontroller
import digitalio
import time

led = digitalio.DigitalInOut(microcontroller.pin.GPIO7)
led.direction = digitalio.Direction.OUTPUT

while True:
    led.value = True  # 打开 LED
    time.sleep(1)
    led.value = False  # 关闭 LED
    time.sleep(1)
```
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/8.png" /></div>

### UART（串行总线）

使用 *busio* 模块：

```python
import board
import busio

# 初始化 UART
uart = busio.UART(board.TX, board.RX, baudrate=9600)

# 发送数据
uart.write(b"Hello UART\n")

# 接收数据
while True:
    if uart.in_waiting > 0:
        data = uart.read()
        print("Received:", data)
```

XIAO ESP32C3 有一个硬件 UART，以下是引脚列表：

| UART | 引脚 |
|------|-----|
| TX   | D6  |
| RX   | D7  |

### PWM（脉宽调制）

使用 *pwmio* 模块：

```python
import board
import pwmio
from digitalio import DigitalInOut
import time

# 初始化 PWM
pwm = pwmio.PWMOut(board.D5, frequency=5000, duty_cycle=0)

# 一个渐变亮度的 LED
while True:
    for duty_cycle in range(0, 65535, 1000):
        pwm.duty_cycle = duty_cycle
        time.sleep(0.1)
```

### ADC（模拟到数字转换）

使用 *analogio* 模块：

```python
import board
import analogio
import time

# 初始化 ADC
adc = analogio.AnalogIn(board.A0)

while True:
    value = adc.value
    print("ADC Value:", value)
    time.sleep(1)
```

### SPI

```python
import board
import busio
import digitalio

# 初始化 SPI
spi = busio.SPI(board.SCK, board.MOSI, board.MISO)

# 选择一个芯片
cs = digitalio.DigitalInOut(board.D5)
cs.direction = digitalio.Direction.OUTPUT
cs.value = True 

# 发送和接收数据
data_out = bytearray([0x01, 0x02, 0x03])
data_in = bytearray(3)
spi.write_readinto(data_out, data_in)
print("Received:", data_in)
```

| SPI  | 引脚 |
|------|-----|
| SCK  | D8  |
| MOSI | D10 |
| MISO | D9  |

### I2C

```python
import board
import busio

# 初始化 I2C
i2c = busio.I2C(board.SCL, board.SDA, frequency=400000)
```

### XIAO 扩展板底座

*前提条件*：

<table align="center">
  <tbody><tr>
      <th>XIAO ESP32C3<br /> 焊接了针脚</th>
      <th>XIAO 扩展板底座</th>
      <th>Grove 光传感器</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/15.png" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/16.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

#### 读取光传感器数据

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/9.png" /></div>

```python
import time
import board
import analogio

# 初始化 A0 上的模拟输入
analog_in = analogio.AnalogIn(board.A0)

def get_voltage(pin):
    return (pin.value * 3.3) / 65536

while True:
    # 读取原始模拟值
    raw_value = analog_in.value
    # 将原始值转换为电压
    voltage = get_voltage(analog_in)
    
    # 将原始值和电压打印到串行控制台
    print("[Light] Raw value: {:5d} Voltage: {:.2f}V".format(raw_value, voltage))
    
    # 延迟一小段时间后再读取
    time.sleep(1)
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/10.png" /></div>

#### 点亮 OLED 屏幕

**下载并解压库文件包**：
* 前往 [library](https://circuitpython.org/libraries) 下载 CircuitPython 的库文件包。根据您的 CircuitPython 版本下载相应的文件包。

**将库文件复制到 CIRCUITPY**：

* 解压库文件包 ZIP 文件。您会找到一个名为 `lib` 的文件夹，其中包含各种 *.mpy* 文件。
* 打开 Thonny-->View-->Files，然后将所需的 .mpy 文件和 lib 文件夹复制到 CircuitPython 设备的 `lib` 文件夹中。
您需要从文件包中手动安装以下必要的库：
  * adafruit_ssd1306
  * adafruit_bus_device
  * adafruit_register
  * adafruit_framebuf.mpy

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/11.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/12.png" /></div>

**创建您的 CircuitPython 代码**：

* 创建一个 `code.py` 文件（或 `main.py`）。该文件应包含您的 CircuitPython 代码。

```python
import board
import busio
import displayio
import adafruit_ssd1306
import terminalio

# 初始化 I2C
i2c = busio.I2C(board.SCL, board.SDA)

# 定义显示参数
oled_width = 128
oled_height = 64

# 初始化 OLED 显示屏
oled = adafruit_ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)

# 用颜色 0 填充显示屏
oled.fill(0)
# 将第一个像素设置为白色
oled.pixel(0, 0, 1)
oled.show()
```
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/13.png" /></div>

## “卸载” CircuitPython

我们的许多开发板可以支持多种编程语言。例如，Circuit Playground Express 可以用于 MakeCode、Code.org CS Discoveries、CircuitPython 和 Arduino。您可能希望切换回 Arduino 或 MakeCode。实际上并不需要卸载 CircuitPython。CircuitPython 只是加载到您的开发板中的“另一个程序”。因此，您只需加载另一个程序（如 Arduino 或 MakeCode），它就会覆盖 CircuitPython。

### 备份您的代码

在替换 CircuitPython 之前，请务必备份您在 CIRCUITPY 驱动器上的代码。这包括您的 *code.py* 文件以及其他文件、lib 文件夹等。当您移除 CircuitPython 时，可能会丢失这些文件，因此备份非常重要！只需像操作任何 USB 驱动器一样，将文件拖到您的笔记本电脑或台式电脑中的某个文件夹即可。

### 切换到 Arduino

如果您想使用 Arduino，只需使用 Arduino IDE 加载一个 Arduino 程序即可。以下是上传一个简单的“Blink” Arduino 程序的示例，但您不必使用这个特定程序。
首先插入您的开发板，然后双击复位按钮，直到板载 LED 开始闪烁。

感谢您阅读本文！欢迎在评论中分享您的想法。

## 资源

* [适用于 XIAO ESP32C3 的 CircuitPython 固件二进制文件](https://circuitpython.org/board/seeed_xiao_esp32c3/)
* [CircuitPython 的库文件包](https://circuitpython.org/libraries)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>