---
description: SenseCAP Card Tracker T1000-E 针对 Meshtastic 的介绍
title: T1000-E 追踪器介绍
keywords:
- 追踪器
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/t1000_e_intro
last_update:
  date: 05/15/2025
  author: Jessie
sidebar_position: 1
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/intro-e.png" alt="pir" width={800} height="auto" /></p>

这是一款针对 Meshtastic 设计的高性能追踪器，大小如信用卡，轻松放入口袋或附着在您的资产上。它集成了 Semtech 的 LR1110、Nordic 的 nRF52840 和 Mediatek 的 AG3335 GPS 模块，为 Meshtastic 用户提供高精度、低功耗的定位和通信解决方案。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

<br></br>

:::tip 版本对比
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/versions-duibi.png" alt="pir" width={600} height="auto" /></p>
:::

### 特性

* **多协议支持**：配备 nRF52840 和 LR1110，支持 Bluetooth 5.0、Thread、Zigbee 和 LoRa，确保与多种设备和网络兼容。
* **强大的定位能力**：集成 Mediatek 的 AG3335 GPS 芯片，提供高精度定位服务。
* **可扩展接口**：设计有四个 pogo 引脚，支持 USB 接口用于 DFU（设备固件升级）、串行日志记录和 API 接口，简化设备管理和调试。
* **开源支持**：兼容 Meshtastic 开源网状网络协议，适用于远距离和低功耗通信需求。

### 规格

**通用**

|**网络协议**|LoRa, Bluetooth v5.1|
| :- | :- |
|**温度**|<p>范围：-20 至 60℃;</p><p>精度：± 1℃（最小 ±0.5℃，最大 ±1℃）</p><p>分辨率：0.1℃</p>|
|**光线**|0 至 100%（0% 是黑暗，100% 是最亮）|
|**LED 和蜂鸣器**|1\*LED 和 1\*蜂鸣器用于指示状态|
|**按钮**|1\*按钮用于操作|
|**天线**|内置（GNSS/LoRa/Wi-Fi/BLE）|
|**通信距离**|2 至 5 公里（取决于天线、安装和环境）|
|**防护等级**|IP65|
|**尺寸**|85 \* 55 \* 6.5 mm|
|**设备重量**|32g|
|**工作温度**|-20℃ 至 +60℃|
|**工作湿度**|5% - 95%（无冷凝）|
|**认证**|CE /FCC|

**电池**

|**电池容量**|可充电锂电池，700mAh|
| :- | :- |
|**电池寿命监测**|周期性上传电池电量|
|<p>**充电线**</p><p>**（不包含适配器）**</p>|USB 磁性充电线，1 米|
|**电源输入电压**|4\.7 至 5.5V DC|
|**充电温度限制**|0 至 +45℃|

### 硬件概览

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/4-pogo.png" alt="pir" width={800} height="auto" /></p>

### 引脚列表

||||
|- |- |- |
|传感器供电|P0.4|GPIO|
|温度|P0.31|NTC（模拟）|
|光线|P0.29|LUX（模拟）|
|三轴加速度计<br/>(当前未在 Meshtastic 固件中使用)|SDA: P0.26<br/>SCL: P0.27|通过 IIC|
|加速度计供电|P1.7|GPIO|
|LED|P0.24|GPIO|
|蜂鸣器|P0.25|GPIO|
|启用蜂鸣器|P1.05|GPIO|
|按钮|P0.6|GPIO|
|传感器供电|P1.6|GPIO|
|LR1110|P1.08: SPI MISO<br/>P1.09: SPI MOSI<br/>P0.11: SPI 时钟<br/>P0.12: SPI NSS<br/>P1.10: LoRa 重置<br/>P1.01: LoRa DIO1<br/>P0.07: LoRa DIO2<br/>LR11X0\_DIO3\_TCXO\_VOLT<br/>AGE 1.6V|SPI|
|GPS|RX: P0.14<br/>TX: P0.13|Serial1 <br/>波特率:115200|

### 按钮

|按钮操作|描述|蜂鸣器|
|- |- |- |
|按一次|开机|上升旋律|
|按两次|更新节点/位置信息|-|
|按三次|开启/关闭 GPS|-|
|按住 5 秒|关机|下降旋律|

### LED

|设备操作|描述|
|- |- |
|开机|亮起然后快速闪烁|
|DFU 模式|常亮|
|工作状态|随机闪烁|