---
description: SenseCAP Watcher 的硬件组件。
title: 硬件概览
image: https://files.seeedstudio.com/wiki/watcher_getting_started/hardware_overview_1.webp
slug: /cn/watcher_hardware_overview
last_update:
  date: 05/15/2025
  author: Citric, Djair
sidebar_position: 1
---

# SenseCAP Watcher 硬件概览

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/hardware_overview.jpg" style={{width:1000, height:'auto'}}/></div>


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE">
            <strong><span><font color={'FFFFFF'} size={"4"}> Watcher 视频</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher">
            <strong><span><font color={'FFFFFF'} size={"4"}> Github 仓库</font></span></strong>
    </a>
</div><br />

在本 Wiki 的这一部分，我们将重点介绍 SenseCAP Watcher 的硬件组件、其结构以及附加配件的使用。

## 规格

<div class="table-center">
	<table align="center">
        <tr>
            <th>硬件</th>
            <th>描述</th>
        </tr>
        <tr>
            <td align="center">MCU</td>
            <td align="center">ESP32-S3 @240MHz 8MB PSRAM</td>
        </tr>
        <tr>
            <td align="center">内置 AI 处理器</td>
            <td align="center">Himax HX6538 (Cortex M55 + Ethos-U55)</td>
        </tr>
        <tr>
            <td align="center">摄像头</td>
            <td align="center">OV5647 120° FOV <br /> 固定焦距 3 米</td>
        </tr>
        <tr>
            <td align="center">Wi-Fi</td>
            <td align="center">符合 IEEE 802.11b/g/n 标准<br />2.4GHz 频段<br />无线范围：最多 100 米（开放空间测试）</td>
        </tr>
        <tr>
            <td align="center">蓝牙 LE</td>
            <td align="center">蓝牙 5</td>
        </tr>
        <tr>
            <td align="center">天线</td>
            <td align="center">内置 Wi-Fi 和 BLE 天线</td>
        </tr>
        <tr>
            <td align="center">显示屏</td>
            <td align="center">触摸屏，1.45 英寸，分辨率 412×412</td>
        </tr>
        <tr>
            <td align="center">麦克风</td>
            <td align="center">单麦克风</td>
        </tr>
        <tr>
            <td align="center">扬声器</td>
            <td align="center">1W 扬声器输出</td>
        </tr>
        <tr>
            <td align="center">滚轮</td>
            <td align="center">支持上下滚动和按钮功能</td>
        </tr>
        <tr>
            <td align="center">LED</td>
            <td align="center">1xRGB 指示灯</td>
        </tr>
        <tr>
            <td align="center">microSD 卡槽</td>
            <td align="center">支持最多 32GB FAT32 microSD 卡</td>
        </tr>
        <tr>
            <td align="center">闪存</td>
            <td align="center">32MB ESP32-S3 闪存<br />16MB Himax HX6538 闪存</td>
        </tr>
        <tr>
            <td align="center">扩展接口</td>
            <td align="center">1xGrove IIC 接口<br />2x4 母头（1xIIC，2xGPIO，2xGND，1x3.3V_OUT，1x5V_IN）</td>
        </tr>
        <tr>
            <td align="center">USB-C</td>
            <td align="center">背部 1x USB-C（仅供电）<br />底部 1x USB-C（供电和编程）</td>
        </tr>
        <tr>
            <td align="center">复位按钮</td>
            <td align="center">底部孔内 1xRST 按钮</td>
        </tr>
        <tr>
            <td align="center">电源</td>
            <td align="center">5V DC 电源</td>
        </tr>
        <tr>
            <td align="center">电池</td>
            <td align="center">3.7V 400mAh 锂离子电池作为备用电源</td>
        </tr>
        <tr>
            <td align="center">工作温度</td>
            <td align="center">0 ~ 45°C</td>
        </tr>
        <tr>
            <td align="center">安装支架</td>
            <td align="center">支持墙面、桌面和支架安装<br />1 x 万向轮和带粘贴底板<br />1 x 1/4" 母适配器套件</td>
        </tr>
    </table>
</div>


## 特性

- 高效架构，支持设备端 + 服务器端 AI 处理
- 无限模式扩展
- 通过开源和本地部署确保隐私
- 可定制的情感响应


## 正面视图

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/hardware-1.png" style={{width:1000, height:'auto'}}/></div>

## 背面视图

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/hardware-2.png" style={{width:1000, height:'auto'}}/></div>

## 内部结构

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/hardware-3.png" style={{width:1000, height:'auto'}}/></div>

## 安装接口

在 Watcher 设备的背面，您会发现一个安装支架，可将设备安全地固定在各种表面或配件上。目前，我们提供两种类型的安装支架，以满足不同的放置需求：

:::tip
请注意，Watcher 主体仅配备 360° 旋转支架。如果您需要 1/4 螺纹三脚架支架，请单独[购买](https://www.seeedstudio.com/Mini-Tripod-p-5978.html)。
:::

### 360° 旋转支架

   - 此支架设计用于轻松安装在墙壁或其他垂直表面。
   - 它提供完整的 360 度旋转，使您可以调整 Watcher 设备的方向以获得所需的视角。
   - 旋转支架在定位方面提供灵活性，并确保设备牢固地固定在墙上。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/omni_wheel_bracket.gif" style={{width:650, height:'auto'}}/></div><br />

### 1/4 螺纹三脚架支架

   - 该支架非常适合将 Watcher 放置在平坦的表面上，例如桌子、台面或架子。
   - 它具有标准的 1/4 英寸螺纹，使其兼容大多数三脚架和其他安装配件。
   - 三脚架支架提供稳定性，并允许您根据具体需求将 Watcher 调整到不同的高度和角度。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/threaded_bracket.gif" style={{width:650, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Mini-Tripod-p-5978.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买</font></span></strong>
    </a>
</div>

使用这些安装支架，请按照以下通用步骤操作：

1. 根据预期的放置位置（墙壁或平面）选择合适的支架。

2. 将选定的支架连接到 Watcher 设备背面的安装支架上。确保连接牢固，以防止意外脱落。

3. 对于 360° 旋转支架：
   - 确定您希望安装 Watcher 的墙壁位置。
   - 使用提供的螺钉和膨胀螺栓（如有必要）将支架牢固地固定在墙上。
   - 通过旋转调整 Watcher 的方向到所需角度。

4. 对于 1/4 螺纹三脚架支架：
   - 选择一个稳定的平面放置 Watcher。
   - 如果使用三脚架，通过 1/4 英寸螺纹将三脚架连接到支架上。
   - 调整三脚架的高度和角度，以获得 Watcher 的最佳观看位置。

5. 使用任一支架将 Watcher 安装牢固后，您可以继续连接电源并根据您的偏好进行配置。

通过提供这两种安装支架选项，我们旨在为将 Watcher 设备集成到各种环境中提供灵活性和便利性。无论您喜欢墙壁安装还是桌面友好的布置，我们的支架都能确保安全且可调的安装。

:::tip
请注意，Watcher 本体不附带以下任何支架，如果您需要支架，请单独购买。
:::

## 硬件结构图

继续了解 Watcher 的硬件架构，让我们深入研究图中提供的详细信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/Diagram.png" style={{width:1000, height:'auto'}}/></div>

Watcher 的核心是主 MCU，即 **ESP32-S3** 芯片。这款强大的微控制器运行频率为 240MHz，并配备 8MB 的 PSRAM，用于高效的处理和内存管理。

ESP32-S3 与各种外设和接口通信：

1. **显示屏**：通过 SPI/I2C 接口连接到 **1.45 英寸 412*412** LCD 触摸屏，提供直观的用户交互和生动的视觉输出。

2. **音频**：I2S 接口使 ESP32-S3 能够与扬声器和麦克风通信，实现音频输入和输出功能。

3. **存储**：Watcher 配备了通过 SPI 接口连接的 32M 闪存模块，为固件、数据和用户文件提供充足的存储空间。

4. **无线连接**：ESP32-S3 集成了 Wi-Fi 和 BLE 功能，实现与其他设备和网络的无缝无线通信。

5. **扩展性**：通过 I2C 接口连接的扩展端口，支持未来的硬件扩展和定制。

6. **用户输入**：一个通过 GPIO/PWM 连接的旋钮，为用户提供直观的导航和功能控制方式。

7. **外部存储**：一个通过 SPI 接口的 Micro SD 卡槽，允许用户扩展 Watcher 的存储容量以存储更多数据和媒体文件。

8. **电源与数据**：一个 USB 接口用于为 400mAh 电池充电，并在 Watcher 与其他设备之间传输数据。

AI MCU 是一颗 Himax HX6538 芯片，具有 Cortex M55 和 US5 核心，与主 MCU 协同工作，处理与 AI 相关的任务和计算，增强 Watcher 的智能功能。

最后，Watcher 配备了一个 Camera OV5647 模块，可能通过 MIPI 接口连接，支持计算机视觉应用和视觉感知。

这种全面的硬件架构使 Watcher 能够提供功能丰富且多用途的用户体验，将显示、音频、无线连接、存储和 AI 功能集成到紧凑高效的设计中。

## 为 Watcher 充电

Watcher 上共有两个 USB-C 接口，允许用户根据不同的 Watcher 放置位置选择最合适的电源。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/charging.png" style={{width:1000, height:'auto'}}/></div>

为 Watcher 充电时，请确保使用正规厂商的电源适配器，我们推荐使用 **5V/1A** 的电源规格为 Watcher 供电。如果您需要与 Watcher 通信，可能需要使用带有信号线的合规 USB-C 数据线。

:::caution
请使用与 Watcher 兼容的电源插头；Watcher 必须由 5V 电源供电，如果使用不合规的电源适配器或电压超过 5V 的电源，可能会烧毁设备！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/adapter.jpg" style={{width:350, height:'auto'}}/></div>

上图显示了推荐的适配器规格。如果您不知道在哪里可以购买合适的适配器，可以选择通过以下链接直接购买。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/USB-Power-Adapter-for-Raspberry-Pi-4-5V-3A-p-4089.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>
:::

## 连接到串行控制台

当你通过 USB 连接 Watcher 时，Windows 会注册两个新的串行端口。在我的情况下是 COM23 和 COM24。我决定做一个实验，看看在串行终端上会出现什么，因为我是 Circuitpython 的粉丝，我喜欢 REPL！为此，我使用了 Putty，并将其配置为以 115200 波特率使用串行端口（我很幸运，第一个 COM23 端口正是我需要的，用来发现命令控制台）。而另一个端口 COM24 则用于通过 Xmodem 协议升级固件，与 Grove Vision AI V2 的方式相同。

连接后，终端会立即显示设备内存的一系列信息。如果按下回车键，会出现一个提示符，你可以输入一些命令，以下是命令列表：

```
help  [<string>] 
打印所有已注册命令的摘要，如果没有提供参数，则打印所有命令的摘要；否则打印指定命令的摘要，其中 <string> 是命令名称。

wifi_sta  [-s <ssid>] [-p <password>]
WiFi 处于站点模式，加入指定的软 AP
s <ssid> AP 的 SSID
p <password> AP 的密码

ota  [-t <int>] [--url=<string>] 强制 OTA，忽略版本检查
-t, --ota_type=<int> 0: AI 模型, 1: Himax, 2: ESP32
-url=<string> AI 模型、Himax 或 ESP32 固件的 URL

taskflow  [-iej] [-f <string>]
i, --import 导入任务流
e, --export 导出任务流
f, --file=<string> 文件路径，通过 SD 导入或导出任务流 JSON 字符串，例如：test.json
j, --json 通过标准输入导入任务流 JSON 字符串

示例：通过 JSON 字符串或 SD 文件导入任务流：taskflow -i -f "test.json"。
示例：导出任务流到标准输出或 SD 文件：taskflow -e -f "test.json"。

factory_info
获取工厂信息

battery
获取电池百分比

bsp  subcmd [subcmd args] 
调用 BSP 函数

示例：扫描指定的 I2C 总线：bsp i2cdetect <0|1>

reboot 
重启设备

factory_reset 
恢复出厂设置并重启设备

record  [-t <int>] [-f <string>]
录制音频并保存到 SD 卡。
-t, --time=<int> 录制时间，单位秒
-f, --file=<string> 文件路径，将 PCM 音频数据存储到 SD 卡

vi_ctrl  [-sec] [-z <int>] 
语音交互控制（可能会与按键对讲功能一起使用）
-s, --start 开始唤醒并开始录音
-e, --end 结束录音
-c, --stop 在分析或播放时停止语音交互，将其置于空闲状态。
-z, --exit=<int> 0: 退出语音交互, 1: 退出语音交互并运行新的任务流

iperf  [-suVa] [-c <ip>] [-p <port>] [-l <length>] [-i <interval>] [-t <time>] [-b <bandwidth>]
检查连接性能。类似于 Linux 的 iperf 命令。
-c, --client=<ip> 以客户端模式运行，连接到 <host>
-s, --server 以服务器模式运行
-u, --udp 使用 UDP 而不是 TCP
-V, --ipv6_domain 使用 IPV6 地址而不是 IPV4
-p, --port=<port> 服务器监听/连接的端口
-l, --len=<length> 设置读/写缓冲区大小
-i, --interval=<interval> 周期性带宽报告之间的秒数
-t, --time=<time> 传输时间，单位秒（默认 10 秒）
-b, --bandwidth=<bandwidth> 发送带宽，单位 Mbits/sec
-a, --abort 中止正在运行的 iperf

rgb  [-r <int>] [-g <int>] [-b <int>] [-m <int>] [-v <int>] [-t <int>]
设置 RGB LED 的值。例如：rgb -r 255 -g 0 -b 0 -m 3
-r, --red=<int> 红色值，范围 0~255
-g, --green=<int> 绿色值，范围 0~255
-b, --blue=<int> 蓝色值，范围 0~255
-m, --mode=<int> 1: 呼吸模式, 2: 闪烁模式, 3: 固定模式，默认 3
-v, --step_value=<int> RGB 步进值，默认 3
-t, --step_time_ms=<int> RGB 步进时间（毫秒），默认 5
```

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>