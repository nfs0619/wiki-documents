---
description: Seeed Studio XIAO SAMD21 使用 MicroPython
title: MicroPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-SAMD21-MicroPython
last_update:
  date: 05/15/2025
  author: shuxu hu
---

# **Seeed Studio XIAO SAMD21 使用 MicroPython**

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## **MicroPython 简介**

[MicroPython](https://github.com/micropython/micropython/wiki) 是一个带有部分原生代码编译功能的 Python 解释器。它提供了 Python 3.5 的一个子集功能，专为嵌入式处理器和受限系统实现。它与 CPython 不同，您可以在 [这里](https://github.com/micropython/micropython/wiki/Differences) 阅读更多关于它们之间差异的信息。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/MicroPython-Logo.png" /></div>

## **快速入门**

首先，我们将把 Seeed Studio XIAO SAMD21 连接到计算机，并通过 MicroPython 上传一个简单的代码，以检查开发板是否正常工作。

### **硬件准备**

- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) x1
- Type-C 数据线 x1
- 电脑 x1

### **软件准备**

- **步骤 1**. 根据您的操作系统下载并安装最新版本的 [Thonny 编辑器](https://thonny.org/)

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_6.png" /></div>

- **步骤 2**. 启动 Thonny

- **步骤 3**. 点击 **"Tools-->Options"** 打开设置。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_8.png" /></div>

- **步骤 4**. 选择 "Interpreter" 界面，将设备设置为 **"MicroPython(generic)"**，端口设置为 **"Try to detect port automatically"**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/1.jpg" /></div>

### **连接 Seeed Studio XIAO SAMD21 到电脑并点亮**

- **步骤 1**. 按住 "BOOT" 按钮，然后通过 Type-C 数据线将 Seeed Studio XIAO SAMD21 连接到电脑。如果连接正常，电脑上会显示一个名为 "Arduino" 的磁盘。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/2.jpg" /></div>

- **步骤 2**. 刷写固件

访问官方 [链接](https://micropython.org/download/SEEED_XIAO_SAMD21/) 下载最新固件。

您也可以通过 [编译自己的固件](https://wiki.seeedstudio.com/Compiling_MicroPython_for_embedded_devices/) 来确保安全性和支持最新功能，但这不是必须的。

## 软件开发

### SEEED XIAO SAMD21 引脚分配表

<table>
<tr>
<th>Pin</th>
<th>GPIO</th>
<th>Xiao Pin 名称</th>
<th>IRQ</th>
<th>ADC</th>
</tr>
<tr>
<td>2</td>
<td>PA02</td>
<td>0</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>4</td>
<td>PA04</td>
<td>1</td>
<td>4</td>
<td>4</td>
</tr>
<tr>
<td>10</td>
<td>PA10</td>
<td>2</td>
<td>10</td>
<td>18</td>
</tr>
<tr>
<td>11</td>
<td>PA11</td>
<td>3</td>
<td>11</td>
<td>19</td>
</tr>
<tr>
<td>8</td>
<td>PA08</td>
<td>4</td>
<td>*</td>
<td>16</td>
</tr>
<tr>
<td>9</td>
<td>PA09</td>
<td>5</td>
<td>9</td>
<td>17</td>
</tr>
<tr>
<td>40</td>
<td>PB082</td>
<td>6</td>
<td>8</td>
<td>2</td>
</tr>
<tr>
<td>41</td>
<td>PB09</td>
<td>7</td>
<td>9</td>
<td>3</td>
</tr>
<tr>
<td>7</td>
<td>PA07</td>
<td>8</td>
<td>7</td>
<td>7</td>
</tr>
<tr>
<td>5</td>
<td>PA05</td>
<td>9</td>
<td>5</td>
<td>5</td>
</tr>
<tr>
<td>6</td>
<td>PA06</td>
<td>10</td>
<td>6</td>
<td>6</td>
</tr>
<tr>
<td>18</td>
<td>PA18</td>
<td>RX_LED</td>
<td>2</td>
<td>*</td>
</tr>
<tr>
<td>30</td>
<td>PA30</td>
<td>SWCLK</td>
<td>10</td>
<td>*</td>
</tr>
<tr>
<td>31</td>
<td>PA31</td>
<td>SWDIO</td>
<td>11</td>
<td>*</td>
</tr>
<tr>
<td>19</td>
<td>PA19</td>
<td>TX_LED</td>
<td>3</td>
<td>*</td>
</tr>
</table>

### 上传代码

通过点击 "Run current script" 按钮上传代码。第一次运行时，Thonny 会询问您希望将代码文件保存在哪里。**This Computer** 和 **MicroPython device** 都可以。

如果您希望离线运行程序，应将程序保存到 XIAO SAMD21。

同时按住 Ctrl + Shift + S，然后选择保存到 **MicroPython device**。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/6.jpg" /></div>

### GPIO 测试 (LED)

我们需要准备：
- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

将以下代码复制到 Thonny。

运行后可以看到蓝色的 RX_LED 点亮并以每秒一次的频率闪烁。

```python
from machine import Pin, Timer
 
led = Pin(18, Pin.OUT)
Counter = 0
Fun_Num = 0
 
def fun(tim):
    global Counter
    Counter = Counter + 1 
    print(Counter)
    led.value(Counter%2)
 
tim = Timer(-1)
tim.init(period=500, mode=Timer.PERIODIC, callback=fun)
```

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/3.gif" /></div>

### GPIO 控制继电器

我们需要准备：
- [Seeeduino-XIAO-扩展板](https://wiki.seeedstudio.com/Seeeduino-XIAO-Expansion-Board/)
- [Grove-继电器](https://www.seeedstudio.com/Grove-Relay.html)
- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

```python
from machine import Pin, Timer

output_4 = Pin(8, Pin.OUT)
detect_1 = Pin(4, Pin.IN, Pin.PULL_UP)
output_value = Pin(2, Pin.OUT)
Counter = 0
     
def fun(tim):
    global Counter
    Counter = Counter + 1
    output_4.value(Counter%2)
    print(Counter%2,detect_1.value())
    if detect_1.value() :
        output_value.value(1)
    else:
        output_value.value(0)
 
tim = Timer(-1)
tim.init(period=200, mode=Timer.PERIODIC, callback=fun)
```

<div align="center"><video width={600} height={240} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/4.mp4" type="video/mp4" />
    您的浏览器不支持视频标签。
  </video></div>

### 人体检测自动控制

我们需要准备：

- [用于人体检测的多普勒雷达](https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Sleep-Breathing-Monitoring-Module-p-5304.html?queryID=32e8107bce436db9b886cf1b8c698667&objectID=5304&indexName=bazaar_retailer_products)
- [Seeeduino-XIAO-扩展板](https://wiki.seeedstudio.com/Seeeduino-XIAO-Expansion-Board/)
- [Grove-继电器](https://www.seeedstudio.com/Grove-Relay.html)
- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

```python
from machine import Pin, Timer

led = Pin(8, Pin.OUT)

input_value_1 = Pin(4, Pin.IN, Pin.PULL_UP)
input_value_2 = Pin(10, Pin.IN, Pin.PULL_UP)
output_value = Pin(2, Pin.OUT)

Counter = 0
Fun_Num = 0
     
def fun(tim):
    global Counter
    Counter = Counter + 1
    led.value(Counter%2)
    print(input_value_1.value(),input_value_2.value())
    if input_value_1.value() :
        output_value.value(1)
    else:
        output_value.value(0)
 
tim = Timer(-1)
tim.init(period=50, mode=Timer.PERIODIC, callback=fun)
```

<div align="center"><video width={600} height={240} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/5.mp4" type="video/mp4" />
    您的浏览器不支持 video 标签。
  </video></div>


### I2C 支持

```python
from machine import Pin, SoftI2C

i2c = SoftI2C(scl=Pin(9), sda=Pin(8), freq=100000)
devices = i2c.scan()
for device in devices:  
    print("十进制地址: ", device, " | 十六进制地址: ", hex(device))

i2c.writeto(0x51, 'b')
print(i2c.readfrom(0x51, 4))   # 从地址为 0x51 的设备读取 4 个字节
i2c.writeto(0x51, 'a') # 向地址为 0x51 的设备写入 'a'
print(i2c.readfrom(0x51, 4))   # 从地址为 0x51 的设备读取 4 个字节
i2c.writeto(0x51, 'b')
print(i2c.readfrom(0x51, 4)) 

```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/8.png" /></div>


熟悉 MicroPython 可以让您实现更多功能，我们期待为您创造更多价值。也欢迎随时与我们分享您的项目！

### DAC 支持
感谢 Aleksei Tertychnyi 提交的代码，所有相关功能均由他开发和贡献。
```python
from machine import Pin, Timer, DAC
 
led = Pin(18, Pin.OUT)
counter = 0

dac = DAC(0) # DAC 输出到 A0 引脚
 
def loop(tim):
    global counter
    led.value(counter % 2)
    print('DAC 值: ', end =" ")
    print(counter)
    dac.write(counter % 1024)
    counter = counter + 1
 
tim = Timer(-1)
tim.init(period=1000, mode=Timer.PERIODIC, callback=loop)
```
**A0 引脚**上的电压将逐渐增加，在达到大约 *3.3V* 的最大值后，会降至 *0V*，然后循环重复。

## MicroPython 设备控制台

我们的合作伙伴 **Neil** 为 XIAO 编写了一个基于 MicroPython 的命令行控制台程序。通过该程序，您可以轻松上传、下载和删除文件。我们感谢他对 XIAO 的贡献！

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://gitlab.cba.mit.edu/pub/upy/-/blob/main/upy.py"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，确保您在使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>