---
description: 用于 Home Assistant 的 BTHome 协议在 Seeed Studio XIAO nRF52840 Sense 上的使用
title: 使用 XIAO nRF52840 Sense (CircuitPython) 实现 BTHome 协议
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/XIAO_BLE_HA
last_update:
  date: 05/15/2025
  author: Bruno Santos (Feiticeir0)
---

# 项目概述

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

在本教程中，我们将展示如何利用 Seeed Studio XIAO nRF52840 的蓝牙 5.0 BLE 功能，结合 Seeed Studio Grove 温湿度传感器 (DHT20)，通过 BTHome 协议将温度和湿度测量值广播到 Home Assistant。

我们将使用 **CircuitPython** 编写代码。

## 入门指南

要完成本教程，您需要以下硬件：

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO nRF52840-Sense</th>
        <th>Seeed Studio Grove 温湿度传感器 V2.0 (DHT20)</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Tem-humidity-sensor1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### 硬件准备

Grove DHT20 传感器使用 I2C 进行通信。我们需要将其连接到 XIAO nRF52840 Sense 的 I2C 引脚：

- 我们可以使用 XIAO Grove 扩展板和通用 4 针未扣线缆
- 使用 4 针母跳线到 Grove 4 针转换线缆直接将 DHT20 传感器连接到 XIAO nRF52840 Sense

#### 以下是 XIAO nRF52840 Sense 和 XIAO Grove 扩展板的引脚图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/XIAO_nRF52840_pinout.png" alt="引脚图" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/XIAO_shield_Pinout.png" alt="引脚图" width={600} height="auto" /></p>

### 硬件设置

连接非常简单。无论是否使用扩展板，以下 Fritzing 原理图展示了如何将组件连接在一起。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/wiring.jpg" alt="连接图" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/XIAO_Shield_wiring.jpg" alt="连接图" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/Simple_Wiring.jpg" alt="连接图" width={600} height="auto" /></p>

## 软件准备

我们将使用 Thonny IDE 软件（Linux）以及一些相关的库和文件。以下是我们将要完成的步骤：

1. 在 XIAO nRF52840 Sense 上安装 CircuitPython
2. 安装必要的库
3. 使用 BTHome 协议为传感器编写代码
4. 配置 Home Assistant

### 第一步 - 安装 CircuitPython

让我们安装 CircuitPython。

访问 <a  href="https://circuitpython.org/" target="_blank"><span>CircuitPython</span></a> 并下载适用于 XIAO nRF52840 Sense 的版本。
选择“Downloads”，然后在搜索框中输入 XIAO nRF52840，直到结果显示出该设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython1.png" alt="CircuitPython 下载" width={600} height="auto" /></p>

接下来，点击下载按钮获取适用于我们设备的文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython2.png" alt="CircuitPython 下载" width="{600}" height="auto" /></p>

您应该会得到一个 .uf2 文件。要安装它，我们需要进入引导加载模式。将 XIAO nRF52840 Sense 连接到您的计算机，然后按两次复位按钮。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/functional2b.jpg" alt="CircuitPython 下载" width={600} height="auto" /></p>

您的计算机上应该会出现一个名为 XIAO-SENSE 的新驱动器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython3.png" alt="XIAO nRF52840 Sense 驱动器" width={600} height="auto" /></p>

接下来，将下载的文件复制到该驱动器中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython4.png" alt="XIAO nRF52840 Sense 驱动器" width={600} height="auto" /></p>

过一会儿，一个名为 CIRCUITPY 的新驱动器会出现。我们已经在微控制器上安装了 CircuitPython。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython5.png" alt="XIAO nRF52840 Sense 驱动器" width={600} height="auto" /></p>

### 第二步 - 安装库

为了使用我们的 Grove 温湿度传感器 V2.0 (DHT20)，我们需要 <a  href="https://learn.adafruit.com/adafruit-aht20/python-circuitpython" target="_blank"><span> Adafruit 的 AHT20 库</span></a>。

上述网站提供了安装库的说明。

安装完成后，我们应该有以下文件（这是 DHT20 传感器所需的文件）：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython6.png" alt="XIAO nRF52840 Sense 驱动器" width={600} height="auto" /></p>

### 第三步 - 上传代码

在开始编写代码之前，我们需要了解什么是 BTHome。

<p style={{textAlign: 'center'}}><img src="https://bthome.io/images/logo.png" alt="BTHome logo" width="25%" height="auto" /></p>

#### BTHome

BTHome 是一个开放标准，用于通过蓝牙低功耗（BLE）广播传感器数据和按钮按压信息。它设计为节能、高效、灵活且安全。BTHome 被流行的家庭自动化平台（如 Home Assistant）原生支持。

BTHome 的一些优势：

- 是开放标准，因此来自不同制造商的设备可以协同工作。
- 设备设计为节能，因此可以在单个电池上运行很长时间。
- 数据是加密的，因此可以防止未经授权的访问。
- 是一种灵活的格式，可以用于传输各种传感器数据和按钮按压信息。

BTHome 是一种功能强大的标准，用于通过 BLE 广播传感器数据和按钮按压信息。对于希望将传感器数据和按钮按压集成到智能家居中的用户来说，这是一个不错的选择。

您可以在<a href="https://bthome.io/" target="_blank"><span>官方网站</span></a>上阅读更多内容并了解数据格式。

#### 代码

以下是 CircuitPython 的代码。

<details>
<summary>点击复制 CircuitPython 代码</summary>

```python
# 使用 BTHome 和 DHT20
# 此代码基于 Koen Vervloesem 的优秀代码
# https://github.com/koenvervloesem/BTHome-Inertial-Sensor-in-CircuitPython
# 我们没有使用深度睡眠，因为它在 XIAO nRF52840 Sense 上不起作用。
# 这很遗憾。

from _bleio import adapter
from time import sleep
import board
# 用于 Grove 传感器
import adafruit_ahtx0


# 设备名称的长度很重要。
DEVICE_NAME = "XIAO nRF52840 Sense"
INTERVAL = 0.1

# 由于此代码仅延迟 0.1 秒（100 毫秒），我们不需要每次都读取传感器值。
# 这样做太过频繁了——我们只需每 5 分钟读取一次。
# 我们创建一个计时器，每次增加 INTERVAL。
# 当计时器达到 30 时——即 5 分钟过去了，
# 然后我们读取传感器。
# INTERVAL * 60 秒 * 5 分钟
# 将 0.1 毫秒转换为秒 * 60 秒 * 分钟 = 300
MINUTES_PER_READING = 5
readTimer = INTERVAL * 10 * 60 * MINUTES_PER_READING


# 将测量值转换为 BTHome 格式的小端字节序
def value_to_little_endian(measurement):
    
    # 通过因子将温度除以，计算整数值
    integer_value = int(measurement / 0.01)

    # 提取低字节和高字节以表示小端字节序
    lower_byte = integer_value & 0xFF
    upper_byte = (integer_value >> 8) & 0xFF

    # 反转字节顺序
    little_endian_bytes = bytes([upper_byte, lower_byte])
    return little_endian_bytes

class BTHomeAdvertisement:
    _ADV_FLAGS = [0x02, 0x01, 0x06]
    _ADV_SVC_DATA = [0x0a, 0x16, 0xd2, 0xfc, 0x40, 0x02, 0x00, 0x00, 0x03, 0xbf, 0x13]    

    def _name2adv(self, local_name):
        adv_element = bytearray([len(local_name) + 1, 0x09])
        adv_element.extend(bytes(local_name, "utf-8"))
        return adv_element

    def __init__(self, local_name=None):
        if local_name:
            self.adv_local_name = self._name2adv(local_name)
        else:
            self.adv_local_name = self._name2adv(adapter.name)

    def adv_data(self, temperature, humidity):
        adv_data = bytearray(self._ADV_FLAGS)
        adv_svc_data = bytearray(self._ADV_SVC_DATA)
        # 温度
        # 根据值进行更改 - 
        temp = value_to_little_endian(temperature)
        # 返回值是列表
        adv_svc_data[6] = temp[1]
        adv_svc_data[7] = temp[0]
        # 湿度
        # 根据值进行更改 - 
        hum = value_to_little_endian(humidity)
        # 返回值是列表
        adv_svc_data[9] = hum[1]
        adv_svc_data[10] = hum[0]
        adv_data.extend(adv_svc_data)
        adv_data.extend(self.adv_local_name)
        return adv_data


# BTHome
bthome = BTHomeAdvertisement(DEVICE_NAME)

# 创建传感器对象
sensor = adafruit_ahtx0.AHTx0(board.I2C())

# 因为我们需要初始读取
# 我们用 readTimer 变量初始化
# 这样我们可以强制脚本读取值
currentTimer = 0
# 初始读取
temp = sensor.temperature
hum = sensor.relative_humidity

#DEBUG
#print("\nTemperature: %0.1f C" % temp)
#print("Humidity: %0.1f %%" % hum)
 
while True:
    adv_data = bthome.adv_data(temp, hum)
    adapter.start_advertising(
        adv_data, scan_response=None, connectable=False, interval=INTERVAL * 2
    )
    sleep(INTERVAL)
    adapter.stop_advertising()
    # 增加 currentTimer
    currentTimer += INTERVAL
    #print (f"Current timer: {currentTimer}")
    if (currentTimer >= readTimer):
        #print (f'Read new values')
        # 读取新值
        temp = sensor.temperature
        hum = sensor.relative_humidity
        # 重置计数器
        currentTimer = 0


```
</details>

请记住将其保存为 `code.py`，这样它会在启动时执行。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython6.png" alt="BTHome logo" width="500" height="auto" /></p>

#### 一些代码解释

- 代码中包含大量注释以进行解释。
- 基本上，每 0.2 秒，它会广播来自 DHT20 传感器的温度和湿度。
- 因为我们不希望每 0.2 秒读取一次传感器值以避免过载，我们设置了一个计时器。它每 5 分钟才会读取一次值。这个时间由 `MINUTES_PER_READING` 变量控制。

### 第四步 - 在 Home Assistant 上显示数据

#### 第 4.1 步 - 在 Home Assistant 上添加 XIAO nRF52840 Sense

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/home-assistant-icon-flat.png" alt="Home Assistant Logo" width="15%" height="auto" /></p>

Home Assistant 是一个免费的开源家庭自动化软件。它旨在成为智能家居设备的中央控制系统，专注于本地控制和隐私。

Home Assistant 充当中央智能家居控制中心，通过将不同的设备和服务组合到一个地方并将它们集成为实体。提供的基于规则的自动化系统允许根据触发事件、条件和动作（包括脚本）创建自定义例程。这些功能使得可以构建自动化、安全报警管理和家庭安全系统的视频监控，以及能源测量设备的监控。

您可以在<a href="https://www.home-assistant.io/" target="_blank"><span>官方网站</span></a>上阅读更多相关信息。

#### 要求

一个关键要求是 HA（Home Assistant）**必须支持蓝牙**。如果您在 Raspberry PI 上运行 HA，那么很可能已经具备蓝牙功能。这取决于您的 RPi 版本。

#### 配置

在“步骤 3 - 上传代码”中，我们已经为 XIAO nRF52840 编写了代码。在下一步中，它必须运行，以便 HA 可以检测到它。

打开您的 HA 安装。进入设置 -> 设备和服务  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/0_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>  
现在，您的集成页面会显示出来。选择蓝牙  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/1_HA.png" alt="Home Assistant" width="90%" height="auto" /></p>  

集成应该会出现。  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/2_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>  

<b>注意：</b>如果某些功能无法正常工作，请检查是否<b>未选择被动扫描</b>  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/3_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>  

进入集成页面后，如果您已连接 XIAO nRF52840 Sense，它应该已经被检测到并显示在页面上。  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/5_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>  

点击“配置”以配置此新集成。点击提交。  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/6_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>  

现在您只需选择放置此新传感器的区域即可完成设置。  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/7_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>  

接下来，再次进入设置 -> 集成并选择新的 BTHome 集成  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/10_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>  
然后我们会进入集成页面。我们可以看到有 1 个设备和 3 个实体。  
这些实体包括温度、湿度和信号强度  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/11_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>  

如果我们点击实体，会进入一个新页面，可以查看所有实体。  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/12_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>  

如果我们点击设备，会进入设备页面，显示所有选项以及当前值。通过此页面，我们可以将其添加到仪表板。  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/13_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>  
点击“添加到仪表板”，我们可以选择放置的视图。  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/14_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>  

之后，我们会看到卡片视图。只需点击“添加到仪表板”即可将其添加到仪表板。  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/15_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>  

如果我们进入仪表板，我们会看到刚刚添加的卡片，其中显示了 XIAO nRF52840 Sense 广播的温度和湿度。  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/17_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>  

## 更多内容 - 深度睡眠功能

我无法使其正常工作。如果有人有解决方案，请留下评论。您可以在 [GitHub](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=35979237) 上分享您的想法。

## ✨ 贡献者项目

- 此项目由 Seeed Studio [贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)支持。
- 感谢 [Bruno 的努力](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=35979237)，您的工作将被 [展示](https://wiki.seeedstudio.com/Honorary-Contributors/)。

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>