---
description: Seeed Studio XIAO ESP32S3 系列入门指南。
title: Seeed Studio XIAO ESP32S3 系列入门指南
keywords:
- esp32s3
- xiao
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao_esp32s3_getting_started
last_update:
  date: 05/15/2025
  author: Spencer
sku: 113991114, 113991115, 102010671
type: gettingstarted
---

# Seeed Studio XIAO ESP32S3 系列入门指南

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO ESP32S3</th>
   <th>Seeed Studio XIAO ESP32S3 Sense</th>
   <th>Seeed Studio XIAO ESP32S3 Plus</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3plus.png" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Plus-p-6361.html">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## 简介

Seeed Studio XIAO 系列是迷你型开发板，具有类似的硬件结构，尺寸仅为拇指大小。代码名称 "XIAO" 代表其特点之一“微小”，而另一特点则是“强大”。  
Seeed Studio XIAO ESP32S3 Sense 集成了摄像头传感器、数字麦克风和支持 SD 卡的功能。结合嵌入式机器学习计算能力和摄影功能，这款开发板是您入门智能语音和视觉 AI 的绝佳工具。

### 规格参数

<table align="center">
 <tr>
     <th>项目</th>
     <th style={{width:300, height:'auto'}}>Seeed Studio XIAO ESP32S3</th>
        <th style={{width:300, height:'auto'}}>Seeed Studio XIAO ESP32S3 Sense</th>
  <th style={{width:300, height:'auto'}}>Seeed Studio XIAO ESP32S3 Plus</th>
 </tr>
 <tr>
     <th>处理器</th>
     <td align="center" colspan="3">ESP32-S3R8 <br></br> Xtensa LX7 双核，32 位处理器，最高运行频率为 240 MHz </td>
 </tr>
 <tr>
     <th>无线功能</th>
     <td align="center" colspan="3">完整的 2.4GHz Wi-Fi 子系统 <br></br> BLE：蓝牙 5.0，蓝牙 Mesh</td>
 </tr>
    <tr>
     <th>内置传感器</th>
     <td align="center"> - </td>
        <td align="center">OV2640 摄像头传感器，分辨率 1600*1200 <br></br> 数字麦克风</td>
  <td align="center"> - </td>
 </tr>
    <tr>
     <th>存储</th>
     <td align="center">芯片内置 8M PSRAM 和 8MB Flash</td>
        <td align="center">芯片内置 8M PSRAM 和 8MB Flash <br></br> 板载 SD 卡插槽，支持 32GB FAT</td>
  <td align="center">芯片内置 8M PSRAM 和 <strong>16MB</strong> Flash</td>
 </tr>
    <tr>
     <th>接口</th>
     <td>1x UART, 1x IIC, 1x IIS, 1x SPI, 11x GPIOs (PWM), 9x ADC, 1x 用户 LED, 1x 充电 LED  <br></br> 1x 重置按钮, 1x 启动按钮</td>
        <td>1x UART, 1x IIC, 1x IIS, 1x SPI, 11x GPIOs (PWM), 9x ADC, 1x 用户 LED, 1x 充电 LED, 1x B2B 接口（含额外 2 个 GPIOs）, 1x 重置按钮, 1x 启动按钮</td>
  <td><strong>2</strong>x UART, 1x IIC, 1x IIS, <strong>2</strong>x SPI, <strong>18</strong>x GPIOs (PWM), 9x ADC, 1x 用户 LED, 1x 充电 LED, 1x B2B 接口, 1x 重置按钮, 1x 启动按钮</td>
 </tr>
    <tr>
     <th>尺寸</th>
     <td align="center">21 x 17.8mm</td>
        <td align="center">21 x 17.8 x 15mm（含扩展板）</td>
  <td align="center">21 x 17.8mm</td>
 </tr>
    <tr>
     <th rowspan="5">电源</th>
     <td colspan="3" align="center">输入电压（Type-C）：5V <br></br> 输入电压（BAT）：4.2V</td>
 </tr>
    <tr>
     <td>电路工作电压（准备运行）： <br></br> - Type-C：5V@<strong>19mA</strong> <br></br> - BAT：3.8V@<strong>22mA</strong></td>
        <td>电路工作电压（准备运行）： <br></br> - Type-C：5V@<strong>38.3mA</strong> <br></br> - BAT：3.8V@<strong>43.2mA</strong>（含扩展板）</td>
  <td>电路工作电压（准备运行）： <br></br> - Type-C：5V@<strong>28mA</strong> <br></br> - BAT：3.8V@<strong>35mA</strong></td>
 </tr>
 <tr>
     <td align="center"> - </td>
        <td align="center">网络摄像头 Web 应用： <br></br> - Type-C： <br></br> - - 平均功耗：5V/<strong>138mA</strong> <br></br> - - 拍照瞬间：5V/<strong>341mA</strong> <br></br> - 电池： <br></br> - - 平均功耗：3.8V/<strong>154mA</strong> <br></br> - - 拍照瞬间：3.8V/<strong>304mA</strong></td>
  <td align="center"> - </td>
 </tr>
 <tr>
     <td align="center"> - </td>
        <td align="center">麦克风录音与 SD 卡写入：  <br></br> - Type-C： <br></br> - - 平均功耗：5V/<strong>46.5mA</strong> <br></br> - - 峰值功耗：5V/<strong>89.6mA</strong> <br></br> - 电池： <br></br> - - 平均功耗：3.8V/<strong>54.4mA</strong> <br></br> - - 峰值功耗：3.8V/<strong>108mA</strong></td>
  <td align="center"> - </td>
 </tr>
    <tr>
  <td align="center" colspan="3">电池充电电流：<strong>100mA</strong></td>
 </tr>
    <tr>
        <th>低功耗模式</th>
        <td>Modem-sleep 模式：<strong>3.8V/25 mA</strong> <br></br> Light-sleep 模式：<strong>3.8V/2 mA</strong> <br></br> Deep Sleep 模式：<strong>3.8V/14 μA</strong></td>
        <td>无任何外设： <br></br> - Modem-sleep 模式：<strong>3.8V/25.5 mA</strong> <br></br> - Light-sleep 模式：<strong>3.8V/2.4 mA</strong> <br></br> - Deep Sleep 模式：<strong>3.8V/63.768 μA</strong> <br></br> 连接摄像头： <br></br> - Modem-sleep 模式：<strong>3.8V/44.57 mA</strong> <br></br> - Light-sleep 模式：<strong>3.8V/5.47 mA</strong> <br></br> - Deep Sleep 模式：<strong>3.8V/3.00 mA</strong> <br></br> 连接 SD 卡： <br></br> - Modem-sleep 模式：<strong>3.8V/32.8 mA</strong> <br></br> - Light-sleep 模式：<strong>3.8V/3.48 mA</strong> <br></br> - Deep Sleep 模式：<strong>3.8V/1.08 mA</strong><br></br> 同时连接摄像头和 SD 卡： <br></br> - Modem-sleep 模式：<strong>3.8V/55.72 mA</strong> <br></br> - Light-sleep 模式：<strong>3.8V/6.56 mA</strong> <br></br> - Deep Sleep 模式：<strong>3.8V/3.98 mA</strong></td>
  <td>Modem-sleep 模式：<strong>3.8V/26.5 mA</strong> <br></br> Light-sleep 模式：<strong>3.8V/2.2 mA</strong> <br></br> Deep Sleep 模式：<strong>3.8V/69 μA</strong></td>
    </tr>
    <tr>
        <th>Wi-Fi 启用功耗</th>
        <td align="center">活动模式：<strong>~ 100 mA</strong></td>
        <td align="center">活动模式：<strong>~ 110 mA</strong>（含扩展板）</td>
  <td align="center">活动模式：<strong>~ 85 mA</strong></td>
    </tr>
    <tr>
        <th>BLE 启用功耗</th>
        <td align="center">活动模式：<strong>~ 85 mA</strong></td>
        <td align="center">活动模式：<strong>~ 102 mA</strong>（含扩展板）</td>
  <td align="center">活动模式：<strong>~ 77 mA</strong></td>
    </tr>
    <tr>
        <th>工作温度</th>
        <td colspan="3" align="center">-40°C ~ 65°C</td>
    </tr>
</table>

### 特性

- **强大的 MCU 板**：集成 ESP32S3 32 位双核 Xtensa 处理器芯片，最高运行频率达 240 MHz，配备多个开发端口，支持 Arduino / MicroPython
- **高级功能**（针对 Sense）：可拆卸的 OV2640 摄像头传感器，支持 1600*1200 分辨率，兼容 OV5640 摄像头传感器，集成额外的数字麦克风
- **精心设计的电源管理**：具备锂电池充电管理功能，提供 4 种功耗模式，深度睡眠模式功耗低至 14μA
- **强大的内存，更多可能性**：提供 8MB PSRAM 和 8MB FLASH（**Plus** 版本为 16MB），支持 SD 卡插槽，外部存储容量最高可达 32GB FAT（仅适用于 XIAO ESP32S3）
- **卓越的射频性能**：支持 2.4GHz Wi-Fi 和 BLE 双无线通信，连接 U.FL 天线时支持 100m+ 远程通信
- **拇指大小的紧凑设计**：尺寸为 21 x 17.8mm，采用经典的 XIAO 外形设计，适用于空间受限的项目，如可穿戴设备

## 硬件概述

在开始之前，了解产品的一些基本参数是非常重要的。以下表格提供了关于 Seeed Studio XIAO ESP32S3 的特性信息。

<Tabs>
<TabItem value="(Sense)" label="XIAO ESP32S3/XIAO ESP32S3 Sense" default>

<table align="center">
 <tr>
     <th>XIAO ESP32S3/XIAO ESP32S3 Sense 前视图标示图</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/front-indication.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO ESP32S3/XIAO ESP32S3 Sense 背视图标示图</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/back-indication.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO ESP32S3/XIAO ESP32S3 Sense 引脚列表</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg" style={{width:1000, height:'auto'}}/></div></td>
 </tr>
</table>

</TabItem>
<TabItem value="Plus" label="XIAO ESP32S3 Plus" default>

<table align="center">
 <tr>
  <th>XIAO ESP32S3 Plus 前视图标示图</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/plus_front.png
  " style={{width:700, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <th>XIAO ESP32S3 Plus 背视图标示图</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/plus_back.png
  " style={{width:700, height:'auto'}}/></div></td>
 </tr>
 <tr>
 <th>XIAO ESP32S3 Plus 引脚列表</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/plus_pinout.png
  " style={{width:1000, height:'auto'}}/></div></td>
 </tr>
</table>

:::tip
XIAO ESP32S3 Plus 的 B2B 连接器兼容 [Wio-SX1262 扩展板](https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html)，但不兼容插入式摄像头传感器板。
:::

</TabItem>

</Tabs>

### 电源引脚

- 5V - 这是 USB 端口提供的 5V 输出。您也可以将其用作电压输入，但必须在外部电源和此引脚之间使用某种二极管（肖特基、信号或功率二极管），二极管的正极接电池，负极接 5V 引脚。
- 3V3 - 这是板载稳压器的调节输出。您可以输出 700mA。
- GND - 电源/数据/信号地

### 配置引脚

每次启动或复位时，芯片需要一些初始配置参数，例如加载芯片的启动模式、闪存电压等。这些参数通过配置引脚传递。在复位后，配置引脚作为常规 IO 引脚运行。

以下是芯片复位时由配置引脚控制的参数：

- **芯片启动模式** – GPIO0 和 GPIO46
- **VDD_SPI 电压** – GPIO45
- **ROM 消息打印** – GPIO46
- **JTAG 信号源** – GPIO3

在芯片复位时，GPIO0、GPIO45 和 GPIO46 连接到芯片内部的弱上拉/下拉电阻。这些电阻决定了配置引脚的默认位值。如果配置引脚连接到外部高阻电路，这些电阻也会决定位值。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/110.png" style={{width:400, height:'auto'}}/></div>

要更改位值，配置引脚应连接到外部下拉/上拉电阻。如果 ESP32-S3 作为主 MCU 的设备使用，配置引脚的电压水平也可以由主 MCU 控制。

所有配置引脚都有锁存器。在系统复位时，锁存器会采样各自配置引脚的位值并存储，直到芯片断电或关闭。锁存器的状态无法通过其他方式改变。这使得配置引脚的值在整个芯片操作过程中可用，并且在复位后引脚可以作为常规 IO 引脚使用。

关于配置引脚的时间要求，有设置时间和保持时间等参数。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/111.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/112.png" style={{width:600, height:'auto'}}/></div>

## 入门指南

为了帮助您更快地开始使用 XIAO ESP32S3，请阅读以下硬件和软件准备部分，以准备 XIAO。

1. **XIAO ESP32S3**

普通版本中预设的工厂程序是触摸引脚点亮程序。当您为 XIAO 供电时，触摸其某些引脚，橙色用户指示灯将亮起。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/105.jpg" style={{width:600, height:'auto'}}/></div>

### **XIAO ESP32S3 Sense**

XIAO ESP32S3 Sense 预装了 WebCam 示例程序。通过正确安装天线并为其供电，您可以直接使用该程序。有关详细信息，请参阅关于该程序的 Wiki。

- [视频流](https://wiki.seeedstudio.com/xiao_esp32s3_camera_usage#project-ii-video-streaming)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/98.png" style={{width:900, height:'auto'}}/></div>

### 硬件准备

#### 焊接排针

XIAO ESP32S3 默认情况下未焊接排针，您需要准备自己的排针并将其焊接到 XIAO 的对应引脚上，以便连接扩展板或传感器。

由于 XIAO ESP32S3 的尺寸较小，焊接排针时请小心，不要将不同的引脚焊接在一起，也不要将焊锡粘到屏蔽罩或其他元件上。否则可能会导致 XIAO 短路或无法正常工作，由此引发的后果需由用户自行承担。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/4.jpg" style={{width:400, height:'auto'}}/></div>

#### 天线安装

在 XIAO ESP32S3 正面左下角，有一个独立的 "WiFi/BT 天线连接器"。为了获得更好的 WiFi/Bluetooth 信号，您需要取出包装内的天线并将其安装到连接器上。

安装天线有一个小技巧，如果直接用力按压，您会发现很难按下且手指会疼！正确的安装方法是先将天线连接器的一侧插入连接块，然后稍微按压另一侧，天线即可安装完成。

拆卸天线时也是如此，不要用蛮力直接拉扯天线，而是从一侧用力抬起，天线就容易取下。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/5.gif" style={{width:500, height:'auto'}}/></div>

#### 安装扩展板（适用于 Sense）

如果您购买的是 XIAO ESP32S3 Sense，那么您还应包括一个扩展板。此扩展板配备了 1600*1200 OV2640 摄像头传感器、板载 SD 卡槽和数字麦克风。

通过将扩展板安装到 XIAO ESP32S3 Sense 上，您可以使用扩展板上的功能。

安装扩展板非常简单，只需将扩展板上的连接器与 XIAO ESP32S3 上的 B2B 连接器对齐，用力按压并听到“咔哒”一声，安装即完成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

我们现在有一款全新的完全兼容 XIAO ESP32S3 Sense 的强大摄像头 OV5640 上架。如果您购买它，可以更换摄像头使用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/ov5640.gif" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/OV5640-Camera-for-XIAO-ESP32S3-Sense-With-Heat-Sink-p-5739.html">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

如果您需要了解 OV5640 的详细参数信息，可以参考下表。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/datasheet.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Wiki 中关于摄像头的所有程序均兼容 OV5640 和 OV2640 摄像头。
:::

#### 安装升级版散热片

通过安装升级版散热片，为您的 XIAO ESP32S3 Sense 提供最佳散热效果。此新设计专为解决先前型号在高强度操作（如摄像头使用）期间的散热不足问题而开发。用户反馈表明，原始散热片无法有效散热，因此开发了更高效的解决方案。

<details><summary>点击查看性能对比</summary>

我们的测试展示了升级版散热片相较于原始设置的优势：

| 测试样本            | 背面峰值温度          |
| --------------------- | --------------------- |
| **无散热片**         | 63.6°C               |
| **双散热片**         | 53.5°C (🔻10°C)     |

***测试详情:***

- **环境**: 空调房（约 27°C）
- **温度测量工具**: OMEGA CL3515R 热电偶
- **测量位置**: XIAO ESP32S3 背面的散热垫
- **测试固件**: WebCamera
- **电源**: Type-C 5V
- **运行时长**: 1 小时

***关键结果:***

- 配备散热片的设备在运行超过一小时后保持稳定，达到峰值温度时性能无下降。
- 在 SVGA (800x600) 模式下测试 WebCamera 时：
  - XIAO ESP32S3 运行流畅。
  - 视频输出稳定。
  - 温度显著降低，确保可靠性能且无帧丢失或断连。

</details>

***开始安装前请准备以下物品:***

- 选定的散热片（单个或双散热片）
- 干净的 ESP32S3

确保设备断电并从任何电源上拔下后再开始操作。

:::tip 注意

***购买提示:*** 购买 XIAO ESP32S3 Sense 时，请注意仅 **配备摄像头的型号** 附带散热片。如果您购买的是不带摄像头的 ESP32S3 版本，则需要单独购买散热片。

***安装提示:*** 优先覆盖散热垫区域，因为它直接位于 ESP32S3 芯片上，是主要的热源。正确对齐可确保最佳散热效果，并注意尽量保持 BAT 引脚不被遮挡。
:::

现在，让我们开始安装过程：

***步骤 1. 准备散热片：***  
首先移除散热片上的保护盖，露出热粘合剂。这将使散热片能够牢固地附着在 ESP32S3 芯片上。

<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/heat-sink.jpg" style={{width:400, height:'auto'}}/></div></td>
<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/remove-heat-sink-cover.jpg" style={{width:400, height:'auto'}}/></div></td>

***步骤 2. 安装散热片：***

<Tabs>
  <TabItem value="single" label="单散热片" default>

这种较小的紧凑选项适合常规使用，并且可以完全访问所有 GPIO 引脚。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/pin-single-heat-sink-install.jpg" style={{width:400, height:'auto'}}/></div>

  </TabItem>
  <TabItem value="dual" label="双散热片">

较大的选项提供更好的散热性能，非常适合高性能任务，但可能会限制对某些 GPIO 引脚的访问。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/pin-dual-heat-sink-install.png" style={{width:400, height:'auto'}}/></div>

:::note
如果您想使用 XIAO ESP32S3 Plus 的 BAT 引脚，这种双散热片方案并不适合。
:::

  </TabItem>
</Tabs>

***步骤 3: 最终检查和测试***  
安装完成后，确保所有部件都牢固固定，并且没有短路风险。检查散热片是否对齐并牢固附着。

### 软件准备

推荐的 XIAO ESP32S3 编程工具是 Arduino IDE，因此作为软件准备的一部分，您需要完成 Arduino 的安装。

:::tip
如果您是第一次使用 Arduino，我们强烈建议您参考 [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 根据您的操作系统下载并安装稳定版本的 Arduino IDE。

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>下载 Arduino IDE</font></span></strong>
    </a>
</div>

- **步骤 2.** 启动 Arduino 应用程序。

- **步骤 3.** 将 ESP32 板包添加到您的 Arduino IDE。

<Tabs>
<TabItem value='For Windows'>

导航到 **File > Preferences**，并在 **"Additional Boards Manager URLs"** 中填写以下 URL：

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/6.png" style={{width:800, height:'auto'}}/></div>

导航到 **Tools > Board > Boards Manager...**，在搜索框中输入关键字 **esp32**，选择最新版本的 **esp32** 并安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/9.png" style={{width:1000, height:'auto'}}/></div>

:::caution
XIAO ESP32S3 的板载包需要 **2.0.8** 及以上版本。
:::

- **步骤 4.** 选择您的开发板和端口。

在 Arduino IDE 的顶部，您可以直接选择端口。这通常是 COM3 或更高（**COM1** 和 **COM2** 通常保留给硬件串口）。

</TabItem>
<TabItem value='For Mac OS'>

导航到 **Arduino IDE > Preferences**，并在 **"Additional Boards Manager URLs"** 中填写以下 URL：

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_29.png" style={{width:680, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_80.png" style={{width:680, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

导航到 **Tools > Board > Boards Manager...**，在搜索框中输入关键字 **esp32**，选择最新版本的 **esp32** 并安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/9.png" style={{width:1000, height:'auto'}}/></div>

:::caution
XIAO ESP32S3 的板载包需要 **2.0.8** 及以上版本。
:::

- **步骤 4.** 选择您的开发板和端口。

在 Arduino IDE 的顶部，您可以直接选择端口。这通常是名称中带有 "usbmodem" 或 "usbserial" 的端口。如果不确定，请拔插设备以查看哪个端口消失或重新出现。

</TabItem>
</Tabs>

<!-- :::tip
我们已经向 ESP32 提交了合并请求，当 ESP32 发布下一版本的板载包更新时，您将可以在 Arduino IDE 中直接搜索并使用 XIAO ESP32S3。

在此之前，您可以手动将 XIAO ESP32S3 的板载包添加到 Arduino 目录中以使用它。
:::

<div class="github_container" style={{textAlign: 'center'}}><a class="github_item" href="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/XIAO_ESP32S3_Package.zip"><strong><span><font color={'FFFFFF'} size={"4"}> 下载包文件</font></span></strong></a></div>

下载上述 zip 文件后，请解压，您将看到两个文件：一个是 **XIAO_ESP32S3 文件夹**，另一个是 **boards.txt**。

- **在 Windows PC 上**

    Windows 中 ESP32 的默认板载包存储路径为：

    `C:\Users\${UserName}\AppData\Local\Arduino15\packages\esp32\hardware\esp32\2.0.7`

    我们需要将下载的 **boards.txt** 文件复制到上述路径，覆盖该路径中的原始 **boards.txt** 文件。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/8.png" style={{width:600, height:'auto'}}/></div>

```markdown
    `C:\Users\${UserName}\AppData\Local\Arduino15\packages\esp32\hardware\esp32\2.0.7\variants`

    然后进入 **variants 文件夹**，将 **XIAO_ESP32S3 文件夹**复制到该目录下。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/7.png" style={{width:800, height:'auto'}}/></div>

- **在 MacOS 系统下**

    `~/Library/Arduino15/packages/esp32/hardware/esp32/2.0.7`

    我们需要将下载的 **boards.txt** 文件复制到上述路径，覆盖该路径下原有的 **boards.txt** 文件。

    `~/Library/Arduino15/packages/esp32/hardware/esp32/2.0.7/variants`

    然后进入 **variants 文件夹**，将 **XIAO_ESP32S3 文件夹**复制到该目录下。

- **步骤 4.** 关闭 Arduino IDE 并重新打开它。

<Tabs>
<TabItem value="(Sense)" label="适用于 XIAO ESP32S2 (Sense)" default>

同时，在左侧的开发板中搜索 **xiao**，选择 **XIAO_ESP32S3**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/10.png" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="Plus" label="适用于 XIAO ESP32S3 Plus" default>

即将发布，敬请期待后续更新。

</TabItem>
</Tabs>

完成以上准备后，您可以开始为 XIAO ESP32S3 编写程序并进行编译和上传。

### BootLoader 模式

有时，使用错误的程序可能会导致 XIAO 无法识别端口或无法正常工作。常见问题包括：

- XIAO 已连接到电脑，但*未找到端口号*。
- XIAO 已连接，端口号出现，但*程序上传失败*。

当您遇到上述两种情况时，可以尝试将 XIAO 置于 BootLoader 模式，这可以解决大多数设备无法识别和上传失败的问题。具体方法如下：

- **步骤 1**. 按住 XIAO ESP32S3 上的 `BOOT` 按钮并保持不放。
- **步骤 2**. 在按住 `BOOT` 按钮的同时，通过数据线连接到电脑。连接后松开 `BOOT` 按钮。
- **步骤 3**. 上传 **文件 > 示例 > 01.Basics > Blink** 程序以检查 XIAO ESP32S3 的运行情况。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/15.gif" style={{width:500, height:'auto'}}/></div>

### 重置

当程序运行异常时，您可以在上电时按一次 `Reset` 按钮，让 XIAO 重新执行已上传的程序。

当您在上电时按住 `BOOT` 键，然后按一次 `Reset` 键，也可以进入 BootLoader 模式。

### 运行第一个 Blink 程序

到目前为止，我相信您已经对 XIAO ESP32S3 的功能和硬件有了很好的了解。接下来，我们以最简单的 Blink 程序为例，为您的 XIAO ESP32S3 执行第一个闪烁实验！

- **步骤 1.** 启动 Arduino 应用程序。
- **步骤 2.** 导航到 **文件 > 示例 > 01.Basics > Blink**，打开程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/11.png" style={{width:700, height:'auto'}}/></div>

- **步骤 3.** 选择开发板型号为 **XIAO ESP32S3**，并选择正确的端口号上传程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/12.png" style={{width:1000, height:'auto'}}/></div>

程序成功上传后，您将看到以下输出消息，并可以观察到 XIAO ESP32S3 右侧的橙色 LED 灯正在闪烁。

<table align="center">
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/13.png" style={{width:800, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/14.gif" style={{width:400, height:'auto'}}/></div></td>
	</tr>
</table>

恭喜您，您已经学会了如何为 XIAO ESP32S3 编写和上传程序！

:::note
只有当 XIAO ESP32S3 的用户 LED 引脚设置为高电平时，LED 才会熄灭；当引脚设置为低电平时，LED 才会点亮。
:::

## 电池使用

XIAO ESP32S3 系列内置电源管理芯片，可以通过电池独立为 XIAO ESP32S3 供电，或通过 XIAO ESP32S3 的 USB 接口为电池充电。

如果您想为 XIAO 连接电池，我们推荐您购买合格的可充电 3.7V 锂电池。在焊接电池时，请注意区分正负极。电源负极应靠近 USB 接口的一侧，电源正极应远离 USB 接口的一侧。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/16.jpg" style={{width:400, height:'auto'}}/></div>

:::note
由于 XIAO ESP32S3 的所有 GPIO 引脚都已分配了各自的功能，我们没有为电池引脚配置 GPIO。这意味着我们无法通过读取某个 GPIO 的模拟值在软件层面获取电池电压。如果有必要，您可以考虑将电池的正负极连接到两个引脚，以测量电池电压。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/17.png" style={{width:800, height:'auto'}}/></div>
:::

:::caution
当您使用电池供电时，5V 引脚将没有电压输出。
:::

同时，我们为电池充电设计了一个红色指示灯，通过指示灯的显示来告知用户当前电池的充电状态。

1. 当 XIAO ESP32S3 未连接电池时，连接 Type-C 数据线时红灯亮起，30 秒后熄灭。
2. 当电池已连接并通过 Type-C 数据线充电时，红灯闪烁。
3. 当通过 Type-C 数据线将电池充满时，红灯熄灭。
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/104.jpg" style={{width:600, height:'auto'}}/></div>

## UF2 BootLoader

我们了解到一些用户希望直接将 UF2 文件烧录到 XIAO，以便实现批量烧录程序的功能。以下将描述这一方法。

<Tabs>
<TabItem value="method1" label="方法一" default>

:::note
此方法目前仅适用于 Windows 系统。
:::

**步骤 1**：下载并解压脚本

下载所需的脚本压缩文件并将其解压到本地计算机：

*https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/xiaos3-bin2uf2.zip*

**步骤 2**：将 BIN 文件转换为 UF2 文件

在编译并保存 Arduino 程序后，可以导出二进制 `BIN` 文件。此文件将生成在 Arduino 项目文件夹中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/106.png" style={{width:600, height:'auto'}}/></div>

将 `BIN` 文件复制到之前解压的 **xiaos3-bin2uf2** 目录中。然后运行 **convert_uf2.bat** 脚本以生成 UF2 文件，此过程需要输入您的 `bin` 文件名称。

**步骤 3**：进入 UF2 BootLoader 模式

将 XIAO 连接到计算机，并运行 **boot_uf2.bat** 脚本。此时，XIAO 会作为 USB 驱动器出现在您的计算机上，表明已成功进入 UF2 BootLoader 模式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/107.png" style={{width:800, height:'auto'}}/></div>

**步骤 4**：将 UF2 文件复制到 XIAO ESP32S3

访问 XIAO ESP32S3 的 USB 驱动器，并将转换后的 UF2 文件复制到其中。复制完成后，XIAO 的 USB 驱动器将自动消失，程序将开始运行。

:::tip
1. 请确保您的程序已正确编译并运行，否则 UF2 文件可能无法正常执行。
2. **xiaos3-bin2uf2** 文件夹中提供了一个用于测试的 Blink 示例 UF2 文件。上传后，XIAO ESP32S3 上的橙色 LED 将闪烁。您可以使用此 UF2 文件进行测试。
:::

**步骤 5**：重新进入 UF2 BootLoader 模式

如果需要重新进入 UF2 BootLoader 模式以上传另一个 UF2 文件，请快速按下 **Reset** 按钮，然后按下 **Boot** 按钮。无需再次运行 boot_uf2.bat 脚本。

:::note
快速按下 Reset，然后按下 Boot！
:::

</TabItem>

<TabItem value="method2" label="方法二" >

该项目由 IDF 的第二阶段 BootLoader 定制和作为第三阶段 BootLoader 的 UF2 工厂应用组成。

**注意**：由于 IDF 正在积极开发且经常变更，因此它作为子模块包含在 lib/esp-idf 中，请在该目录下运行 export 脚本以正确设置环境。

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://github.com/adafruit/tinyuf2/tree/master/ports/espressif"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div>

</TabItem>
</Tabs>

## 故障排查

### 问题 1：如果上传程序失败/程序运行异常/找不到设备端口，我该怎么办？

如果遇到上述问题，建议您首先尝试按下 XIAO ESP32S3 的复位按钮，以尝试重新运行程序。如果问题仍然存在，请重新检查您的程序，并阅读 **[BootLoader 模式](#bootloader-mode)** 中提供的方法以恢复设备。

### 问题 2：为什么我的 XIAO 存在圆角不平整的问题？这是质量问题吗？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/corners.png" style={{width:500, height:'auto'}}/></div>

首先需要说明，这不是质量问题，不会影响 XIAO 的正常功能。

XIAO ESP32S3 是所有 XIAO 中集成度最高的一个，其 PCB 在工厂生产中需要拼接。由于集成度高，拼接板的连接只能放置在四个圆角处，这会导致图片中所示的圆角不平整问题。我们将努力改进工艺，确保在后续生产中解决此问题。

### 问题 3：如何将资源部分提供的工厂固件烧录到 XIAO ESP32S3？

资源部分提供的脚本支持 Windows 系统。下载压缩文件后，您将看到以下文件：

<Tabs>
<TabItem value="normal" label="XIAO ESP32S3 工厂固件" >

```shell
.
├── boot_app0.bin
├── esp32_flasher.py
├── esptool.exe
├── project_config.json
├── xiao_esp32s3_firmware.bin
├── xiao_esp32s3_firmware.bootloader.bin
├── xiao_esp32s3_firmware.partitions.bin
└── xiao_esp32s3_firmware_win.bat
```
</TabItem>
<TabItem value="sense" label="XIAO ESP32S3 Sense 工厂固件" >

```shell
.
├── CameraWebServer.bin
├── boot_app0.bin
├── bootloader.bin
├── esp32_flasher.py
├── esptool.exe
├── partition-table.bin
├── project_config.json
└── xiao_esp32s3_sense_firmware_win.bat
```

</TabItem>
</Tabs>

要烧录固件，只需运行相应的 `.bat` 文件。如果烧录过程失败，请从提示中复制命令行，并在包含这些文件的终端中手动运行。

## 资源

[PDF] **[ESP32-S3 数据手册](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)**

### 针对 Seeed Studio XIAO ESP32S3

- **[PDF]** [Seeed Studio XIAO ESP32S3 原理图](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_SCH_v1.2.pdf)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Eagle 库](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_SCH&PCB_230327.zip)
- **[DXF]** [Seeed Studio XIAO ESP32S3 尺寸 DXF 文件](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_Dimensioning.dxf)
- **[LBR]** [Seeed Studio XIAO ESP32S3 Eagle 封装](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed-Studio-XIAO-ESP32S3-footprint-eagle.lbr)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 工厂固件](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-firmware-20240814.zip)
- **[XLSX]** [Seeed Studio XIAO ESP32S3 引脚表](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)
- **[STEP]** [Seeed Studio XIAO ESP32S3 3D 模型](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-3d_model.zip)

- 🔗 **[Kicad]** [Seeed Studio XIAO ESP32S3 FootPrint](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

### 针对 Seeed Studio XIAO ESP32S3 Sense

<!-- - **[PDF]** [Seeed Studio XIAO Step By Step Course](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-in-Action-Minitype&Wearable-Projects-Step-by-Step.pdf) -->
- **[PDF]** [Seeed Studio XIAO ESP32S3 Sense 原理图](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_SCH.pdf)
- **[Ebook]** [XIAO: 强大性能，小巧板载——掌握 Arduino 和 TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense KiCAD 库](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeeduino-xiao-ESP32S3-KiCAD-Library.zip)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense Eagle 库](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_SCH&PCB_230324.zip)
- **[DXF]** [Seeed Studio XIAO ESP32S3 Sense 尺寸 DXF 文件（顶部）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_top.dxf)
- **[DXF]** [Seeed Studio XIAO ESP32S3 Sense 尺寸 DXF 文件（底部）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_bot.dxf)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense 出厂固件](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-firmware-20240814.zip)
- **[XLSX]** [Seeed Studio XIAO ESP32S3 Sense 引脚分布表](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)
- **[STEP]** [Seeed Studio XIAO ESP32S3 Sense 3D 模型](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-sense-3d_model.zip)
- 🔗 **[Kicad]** [Seeed Studio XIAO ESP32S3 Sense FootPrint](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

### 针对 Seeed Studio XIAO ESP32S3 Plus

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Plus 原理图](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Plus_V1.0_SCH_PCB.zip)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Plus KiCAD 库](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed_Studio_XIAO_ESP32S3_Plus_KiCAD_Library2.zip)
- **[DXF]** [Seeed Studio XIAO ESP32S3 Plus 尺寸 DXF 文件（顶部）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/TOP.dxf)
- **[DXF]** [Seeed Studio XIAO ESP32S3 Plus 尺寸 DXF 文件（底部）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/BOTTOM.dxf)
- **[XLSX]** [Seeed Studio XIAO ESP32S3 Plus 引脚分布表](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed_Studio_XIAO_ESP32S3_Plus_Pinout.xlsx)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Plus KiCAD 文件](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed_Studio_XIAO_ESP32S3_Plus_V1.0_SCH%26PCB_KICAD.zip)
- **[ZIP]** [Seeed Studio XIAO Plus 基板（带底部焊盘引出）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_with_botton_pad_lead_out_V1.0.zip)
- **[ZIP]** [Seeed Studio XIAO Plus 基板（不带底部焊盘引出）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_without_botton_pad_lead_out_V1.0.zip)

## 课程资源

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: 强大性能，小巧板载——掌握 Arduino 和 TinyML](https://tinkergen.cn/book_xiao)

### 其他

- **[STP]** [XIAO ESP32S3 Sense 外壳设计（顶部）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(top).stp)
- **[STP]** [XIAO ESP32S3 Sense 外壳设计（底部）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(bottom).stp)

*其余开源资料正在整理中，敬请期待！*

## 技术支持和产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持方式，确保您在使用我们的产品时拥有顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
