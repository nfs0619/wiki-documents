---
description: 开始使用 LoRaWAN 追踪器
title: 开始使用 LoRaWAN 追踪器
keywords:
- 追踪器
- LoRaWAN
image: https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/intro-e.webp
slug: /cn/get_started_with_lorawan_tracker
last_update:
  date: 05/15/2025
  author: Jessie
sidebar_position: 1
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993591-t1000-e-lorawan.jpg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-LoRaWAN-p-6408.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

T1000-E for LoRaWAN 配备了完全开源的固件。为了提升用户体验，我们在工厂生产的设备上预装了演示固件。用户可以通过演示固件进行初步体验，同时也可以开发自己的自定义固件。有关自定义开发的详细信息，请参考 [LoRaWAN 开源固件](https://wiki.seeedstudio.com/open_source_lorawan/)。

**T1000 系列版本对比**

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image2_20.png" alt="pir" width={800} height="auto" /></p>

## 硬件概览

### 示意图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/diagram.png" alt="pir" width={800} height="auto" /></p>

### 引脚描述

|编号|名称|功能|描述|
| :- | :- | :- | :- |
|1|P0.00|XL1|32.768 kHz 晶体连接|
|2|P0.01|XL2|32.768 kHz 晶体连接|
|3|P0.02|<p>数字 I/O</p><p>模拟输入</p>|电池电量检测|
|4|P0.03|<p>数字 I/O</p><p>模拟输入</p>|红色 LED IO|
|5|P0.04|<p>数字 I/O</p><p>模拟输入</p>|VCC 电压检测|
|6|P0.05|<p>数字 I/O</p><p>模拟输入</p>|充电器插入检测，必须配置为无上拉或下拉|
|7|P0.06|数字 I/O|按键 IO，必须配置为 input_pulldown|
|8|P0.07|数字 I/O|LR1110 BUSY|
|9|P0.08|数字 I/O|AG3335 VRTC EN|
|10|P0.09|NFC 输入|NC|
|11|P0.10|NFC 输入|NC|
|12|P0.11|数字 I/O|SPI SCK|
|13|P0.12|数字 I/O|SPI CS|
|14|P0.13|数字 I/O|AG3335 的 UART1 TX|
|15|P0.14|数字 I/O|AG3335 的 UART1 RX|
|16|P0.15|数字 I/O|AG3335 RTC 中断|
|17|P0.16|数字 I/O|调试用 UART1 TX|
|18|P0.17|数字 I/O|调试用 UART1 RX|
|19|P0.18|复位|复位|
|20|P0.19|数字 I/O|FLASH 的 QSPI 时钟|
|21|P0.20|数字 I/O|FLASH 的 QSPI CS|
|22|P0.21|数字 I/O|FLASH 的 QSPI IO0|
|23|P0.22|数字 I/O|FLASH 的 QSPI IO1|
|24|P0.23|数字 I/O|FLASH 的 QSPI IO2|
|25|P0.24|数字 I/O|绿色 LED IO|
|26|P0.25|数字 I/O|蜂鸣器 PWM|
|27|P0.26|数字 I/O|I2C SDA|
|28|P0.27|数字 I/O|I2C SCL|
|29|P0.28|<p>数字 I/O</p><p>模拟输入</p>|NC|
|30|P0.29|<p>数字 I/O</p><p>模拟输入</p>|光传感器 ADC 输入|
|31|P0.30|<p>数字 I/O</p><p>模拟输入</p>|NC|
|32|P0.31|<p>数字 I/O</p><p>模拟输入</p>|温度传感器 ADC 输入|
|33|P1.00|数字 I/O|FLASH 的 QSPI IO3|
|34|P1.01|数字 I/O|LR1110 DIO9|
|35|P1.02|数字 I/O|加速度计中断|
|36|P1.03|数字 I/O|充电器状态|
|37|P1.04|数字 I/O|充电完成|
|38|P1.05|数字 I/O|蜂鸣器启用|
|39|P1.06|数字 I/O|传感器 VCC 启用|
|40|P1.07|数字 I/O|加速度计启用|
|41|P1.08|数字 I/O|SPI MISO|
|42|P1.09|数字 I/O|SPI MOSI|
|43|P1.10|数字 I/O|LR1110 RESET|
|44|P1.11|数字 I/O|AG3335 PWR EN|
|45|P1.12|数字 I/O|AG3335 SLEEP 中断|
|46|P1.13|数字 I/O|Flash 启用|
|47|P1.14|数字 I/O|AG3335 RESETB OUT|
|48|P1.15|数字 I/O|AG3335 复位|

## 演示固件概览

### 定位描述

|**位置**|**描述**|
| - | - |
|GNSS|上传经纬度信息。<br/>(室内通常没有 GPS 信号，建议在室外测试设备以获取位置)|
|Wi-Fi|上传 Wi-Fi AP 的 MAC 地址和 RSSI 信息。|
|蓝牙|上传蓝牙信标的 MAC 地址和 RSSI 信息。|

### 按键

|**按键操作**|**描述**|
| - | - |
|长按 3 秒|开/关机|
|按键点击 3 次|开/关蓝牙|
|双击|开/关 SOS 警报|
|单击一次|上传位置/电池/传感器数据|

### LED

| LED | 状态 | 描述 |
|-----|------|------|
| 红色 LED | 常亮 | 充电中 |
| 红色 LED | 闪烁 | 充电异常 |
| 绿色 LED | 常亮 | 设备处于 DFU 模式。重启设备以退出 DFU 模式（按住按钮，然后在连接充电线后立即释放） |
| 绿色 LED | 亮 500ms/灭 1s | 蓝牙已开启 |
| 绿色 LED | 呼吸灯 | 正在加入 LoRaWAN 网络 |
| 绿色 LED | 快速闪烁 2 秒后熄灭 | 成功加入 LoRaWAN 网络 |

### 传感器功能

SenseCAP T1000 追踪器配备了 3 个传感器：温度传感器、光传感器和三轴加速度计。您可以选择启用或禁用这些传感器：

:::note
当传感器开启时，设备将消耗更多电量。
:::

|**传感器**|**描述**|
| - | - |
|温度|<p>板载独立温度传感器。</p><p>由于与外壳分离，可能会有一些温度测量延迟。</p><p>范围：-20 至 60℃；精度：± 1℃（最小 0.5℃，最大 1℃）；分辨率：0.1℃</p>|
|光线|<p>光传感器监测的不是实际的流明值，而是从黑暗到亮度的百分比。主要可用于防拆监测和一些光敏监测。</p><p>范围：0 至 100%（0% 为黑暗，100% 为最亮）</p>|
|三轴加速度计|通过设置加速度值，触发运动事件和震动事件。|

### 电池

电池寿命取决于上行间隔、传感器使用情况、LoRa 传输距离和工作温度等因素。预测的电池寿命基于典型工作环境（25°C），仅供参考。实际电池寿命可能有所不同。

**EU868(1C/SF12)**

| 上传间隔 | 1 分钟 | 5 分钟 | 60 分钟 | 1 天 |
|--|--|--|--|--|
| 电池寿命（天） | 2.46 | 11.72 | 84.68 | 184.86 |

**US915(1C/SF9)**

| 上传间隔 | 1 分钟 | 5 分钟 | 60 分钟 | 1 天 |
|--|--|--|--|--|
| 电池寿命（天） | 2.89 | 13.66 | 92.59 | 186.83 |


## 快速开始

长按按钮 3 秒以启动设备，设备成功启动后会有上升的提示音。

### 通过 App 连接

* **步骤 1：** 下载 `SenseCraft` App

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={500} height="auto" /></p>

登录 SenseCraft APP。

:::tip
选择服务器位置为 `Global`。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/global-version.png" alt="pir" width={200} height="auto" /></p>
:::

* **步骤 2：** 添加设备

点击右上角的 `Add Device` 标签，然后扫描设备标签上的二维码。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config.png" alt="pir" width={800} height="auto" /></p>

### 配置设备

* 导航到 `User` -> `Device Bluetooth Configuration` 页面。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/config-ppa.png" alt="pir" width={200} height="auto" /></p>

* **快速按下按钮 3 次** 进入配置模式。设备名称：**T1000-E xxxx**（MAC 地址的后四位）。

#### 快速配置

如果需要快速连接到 `SenseCAP 云平台`，可以选择 `Quick Configuration`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/quick-config.png" alt="pir" width={800} height="auto" /></p>

根据您的地区配置 `Frequency Plan`，并设置您想要的 `Uplink Interval`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/quick-1.png" alt="pir" width={200} height="auto" /></p>

#### 高级配置

如果需要高级功能，请选择 `Advanced Configuration`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/advan-config.png" alt="pir" width={800} height="auto" /></p>

您可以查看当前设备信息，包括 `device EUI`、`硬件/软件版本`、`电池`等。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/info-dev.png" alt="pir" width={250} height="auto" /></p>

导航到 `Settings` 页面设置参数。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/setting-page.png" alt="pir" width={600} height="auto" /></p>

* **LoRa 设置**

| 类别 | 参数 | 描述 |
|------|------|------|
| 平台 | SenseCAP for The Things Network（默认） | 一个 SenseCAP 的专有 TTN 服务器。与 SenseCAP 网关配对时开箱即用。[SenseCAP 户外网关](https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html) / [SenseCAP 室内网关](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html) |
| 平台 | SenseCAP for Helium | 一个 SenseCAP 的私有 Helium 控制台。与 SenseCAP Mate App 和 Portal 开箱即用。 |
| 平台 | Helium | 公共 Helium 服务器 |
| 平台 | The Things Network | 公共 TTN 服务器 |
| 平台 | 其他平台 | 其他 LoRaWAN 网络服务器 |
| 频率计划 | EU868/US915/AU915/KR920/IN865/AS923-1/AS923-2/AS923-3/AS923-4 | 默认 EU868 |
| 数据包策略 | 1C | 默认启用 |
| LoRaWAN ADR | 默认启用 | 默认启用 |
| 恢复 LoRa 配置 | 默认启用 | 默认启用 |

* **常规设置**

| 类别 | 参数 | 描述 |
|------|------|------|
| 三轴加速度计 | 启用/禁用，默认禁用 | 上传三轴加速度计的数据 |
| SOS 报告模式 | 单次（默认） | 上传数据并报告一次 SOS 事件。蜂鸣器报警 3 秒 |
| SOS 报告模式 | 连续 | 每分钟上传数据并报告 SOS 事件，持续 30 次后结束。蜂鸣器报警 30 秒 |
| 上行间隔（分钟） | 1-10080 分钟，默认 60 分钟 | 按间隔上传数据。频率越高，功耗越高 |
| 地理定位策略 | 仅 GNSS（默认） | 仅使用 GPS 卫星系统确定位置 |
| 地理定位策略 | 仅 Wi-Fi | 上传 Wi-Fi AP 的 MAC 地址和 RSSI 信息 |
| 地理定位策略 | 仅蓝牙 | 上传蓝牙信标的 MAC 地址和 RSSI 信息 |
| 地理定位策略 | GNSS + Wi-Fi | 优先使用 GPS 定位，如果 GPS 失败，则在一个地理定位周期内使用 Wi-Fi |
| 地理定位策略 | 蓝牙 + GNSS | 优先使用蓝牙定位，如果蓝牙失败，则在一个地理定位周期内使用 GNSS |
| 地理定位策略 | 蓝牙 + Wi-Fi | 优先使用蓝牙定位，如果蓝牙失败，则在一个地理定位周期内使用 Wi-Fi |
| 地理定位策略 | 蓝牙 + Wi-Fi + GNSS | 依次使用蓝牙、Wi-Fi 和 GNSS 定位（某种定位失败后切换到下一种定位） |
| GNSS（GPS） | GNSS 最大扫描时间（秒） | 10-120 秒，默认 30 秒 |
| IBeacon 扫描 | BLE 扫描的最大数量 | 3-5，默认 3 |
| IBeacon 扫描 | 扫描超时（秒） | 3-10 秒，默认 3 秒 |
| IBeacon 扫描 | 组 UUID（十六进制） | 设置 UUID 过滤器，最多 16 字节。例如，如果设置为 '01 020304'，它将过滤模式为 '0102 03 04 xx xx xx ...' 的信标 |
| Wi-Fi 扫描 | Wi-Fi 扫描的最大数量 | 3-5，默认 3 |

### 设备数据查看

#### SenseCAP Mate 应用程序

在应用程序中查看设备位置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data_view.png" alt="pir" width={800} height="auto" /></p>

#### SenseCAP Portal

SenseCAP Portal 的主要功能是管理 SenseCAP 设备并存储数据。它基于 Microsoft 的 Azure 云服务构建，提供安全可靠的服务。用户可以申请账户并将所有设备绑定到该账户。SenseCAP Portal 提供了一个网页门户和 API。网页门户包括 Dashboard、设备管理、数据管理和访问密钥管理。API 对用户开放以进行进一步开发。

- **Dashboard:** 包括设备概览、公告、场景数据和数据图表等。
- **设备管理:** 管理 SenseCAP 设备。
- **数据管理:** 管理数据，包括数据表和图表部分，提供搜索数据的方法。
- **子账户系统:** 注册具有不同权限的子账户。
- **访问密钥管理:** 管理访问密钥（用于访问 API 服务），包括密钥创建、密钥更新和密钥检查。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portal_page.png" alt="pir" width={800} height="auto" /></p>

##### 设备数据查看

登录 [SenseCAP Portal](http://sensecap.seeed.cc)

如果您已经通过应用程序创建了账户，可以直接登录。

1)  选择注册账户，输入电子邮件信息并点击“注册”，注册邮件将发送到用户的邮箱。

2)  打开 "SenseCAP…" 邮件，点击跳转链接，填写相关信息，完成注册。

3)  返回登录界面并完成登录。

查看 [SenseCAP Portal 用户指南](https://sensecap-docs.seeed.cc/quickstart.html) 了解更多详情。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portaldata1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map_view2.png" alt="pir" width={800} height="auto" /></p>

## SenseCAP API 

SenseCAP API 用于用户管理物联网设备和数据。它包括三种类型的 API 方法：HTTP 协议、MQTT 协议和 Websocket 协议。
* 使用 HTTP API，用户可以管理 LoRa 设备，获取原始数据或历史数据。
* 使用 MQTT API，用户可以通过 MQTT 协议订阅传感器的实时测量数据。
* 使用 Websocket API，用户可以通过 Websocket 协议获取传感器的实时测量数据。

请查看 [API 用户指南](https://sensecap-docs.seeed.cc/) 了解更多详情。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/api_page.png" alt="pir" width={800} height="auto" /></p>

## 解码器

* **[TTN 解码器](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/TTN/SenseCAP_T1000E_TTN_Decoder.js)**
* **[Helium 解码器](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/Helium/SenseCAP_T1000E_Helium_Decoder.js)**

## 资源

[GitHub](https://github.com/Seeed-Studio/Seeed-Tracker-T1000-E-for-LoRaWAN-dev-board)