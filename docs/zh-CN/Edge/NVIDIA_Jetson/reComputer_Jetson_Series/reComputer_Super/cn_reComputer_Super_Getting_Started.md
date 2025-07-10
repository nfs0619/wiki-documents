---
description: reComputer Super 入门指南
title: reComputer Super
keywords:
  - reComputer Super
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/recomputer_jetson_super_getting_started
last_update:
  date: 05/15/2025
  author: Yaohui
---

# reComputer Super 入门指南

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

reComputer Super 系列对 reComputer Classic 进行了性能升级，AI 性能提升高达 1.7 倍，达到 157 TOPS。它包括搭载 Jetson Orin Nano (11410311, 11410312) 和 Jetson Orin NX (11410313, 11410314) 的型号。  
该系列设计适用于开发和生产，配备丰富的接口，包括 M.2 Key E/M、双 RJ45 以太网、Mini-PCIe、4xUSB 3.2、HDMI 2.1、4xCSI 和 CAN。预装 Jetpack 6.2 和 Linux OS BSP，支持快速市场部署。  
此外，它支持广泛的 LLM 和物理 AI 框架，例如 NVIDIA、Hugging Face、ONNX、PyTorch 和 ROS2/1，能够在边缘无缝集成，甚至将这些多模态能力与机器人应用相结合，丰富物理 AI 开发。

<div align="center">
  <img width ="900" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/super/1.png"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-Bundle.html">
<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
</a></div>


## 主要特点  

### 🚀 ​**性能提升**  
- ​**AI 性能提升 1.7 倍**，达到 ​**157 TOPS**  
- 搭载 ​**Jetson Orin Nano** (型号: 11410311, 11410312) 和 ​**Jetson Orin NX** (型号: 11410313, 11410314)  

### 🔌 ​**丰富的连接性与接口**  
- ​**M.2 Key E/M** + ​**Mini-PCIe**，支持扩展  
- ​**双 RJ45 以太网**端口，支持高速网络连接  
- ​**4x USB 3.2**、​**HDMI 2.1**、​**4x CSI** (摄像头串行接口)  
- ​**CAN 总线**支持工业/机器人应用  

### 🛠️ ​**开发与生产就绪**  
- 预装 ​**Jetpack 6.2** 和 ​**Linux OS BSP**，开箱即用  
- 无缝集成边缘 AI 框架：  
  - ​**NVIDIA**、​**Hugging Face**、​**ONNX**、​**PyTorch**  
  - ​**ROS2/1**，支持机器人应用  
- 支持 ​**多模态 AI** 和 ​**物理 AI** 开发  

### 🤖 ​**优化的边缘 AI 与机器人应用**  
- 将 ​**LLM (大型语言模型)** 能力与 ​**物理 AI** 在边缘融合  
- 适用于机器人、工业自动化和实时 AI 推理  
- 通过预配置的软件堆栈加速 ​**市场部署**  

:::tip

### ⚠️ 电源与配件指南  

#### 1. ​**电源适配器**  
- ​**Jetson Orin Nano**: 12V 5A (5525 圆柱插孔)  
- ​**Jetson Orin NX**: 19V 4.74A (5525 圆柱插孔)  
- 始终使用 ​**官方适配器**并满足电源要求。  

#### 2. ​**交流电源线**  
- 使用 ​**符合地区标准**的三叶草电源线。  

#### 3. ​**配件**  
- 仅使用 ​**官方推荐**的配件（例如摄像头、无线模块），以确保最佳性能和兼容性。

:::

## 规格参数

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Jetson Orin Super 系统模块</th>
    </tr>
    <tr>
      <th>规格参数</th>
      <th>reComputer Super J3010</th>
      <th>reComputer Super J3011</th>
      <th>reComputer Super J4011</th>
      <th>reComputer Super J4012</th>
    </tr>
    <tr>
      <td>模块</td>
      <td>NVIDIA Jetson Orin™ Nano 4GB</td>
      <td>NVIDIA Jetson Orin™ Nano 8GB</td>
      <td>NVIDIA Jetson Orin™ NX 8GB</td>
      <td>NVIDIA Jetson Orin™ NX 16GB</td>
    </tr>
    <tr>
      <td>AI 性能</td>
      <td>34 TOPS</td>
      <td>67 TOPS</td>
      <td>117 TOPS</td>
      <td>157 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td>512 核 NVIDIA Ampere 架构 GPU，带 16 个 Tensor 核心</td>
      <td colSpan={3}>1024 核 NVIDIA Ampere 架构 GPU，带 32 个 Tensor 核心</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td colSpan={2}>6 核 Arm® Cortex®-A78AE v8.2 64 位 CPU<br />1.5MB L2 + 4MB L3</td>
      <td>6 核 Arm® Cortex®-A78AE v8.2 64 位 CPU 1.5MB L2 + 4MB L3</td>
      <td>8 核 Arm® Cortex®-A78AE v8.2 64 位 CPU 2MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>CPU 最大频率</td>
      <td colSpan={2}>1.7 GHz (MAXN_SUPER)</td>
      <td colSpan={2}>2 GHz</td>
    </tr>
    <tr>
      <td>内存</td>
      <td>4GB 64 位 LPDDR5<br />34 GB/s</td>
      <td>8GB 128 位 LPDDR5<br />68 GB/s</td>
      <td>8GB 128 位 LPDDR5 102.4GB/s</td>
      <td>16GB 128 位 LPDDR5 102.4GB/s</td>
    </tr>
    <tr>
      <td>深度学习加速器</td>
      <td colSpan={2}>/</td>
      <td>1x NVDLA v2</td>
      <td>2x NVDLA v2</td>
    </tr>
    <tr>
      <td>视频编码器</td>
      <td colSpan={2}>支持 1-2 个 CPU 核心的 1080p30</td>
      <td colSpan={2}>1x 4K60 (H.265) | 3x 4K30 (H.265)<br />6x 1080p60 (H.265) | 12x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>视频解码器</td>
      <td colSpan={2}>1x 4K60 (H.265)<br />2x 4K30 (H.265)<br />5x 1080p60 (H.265)<br />11x 1080p30 (H.265)</td>
      <td colSpan={2}>1x 8K30 (H.265)<br />2x 4K60 (H.265)<br />4x 4K30 (H.265)<br />9x 1080p60 (H.265)<br />18x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>CSI</td>
      <td colSpan={5}>支持最多 4 个摄像头<br />(通过虚拟通道支持 8 个摄像头)<br />8 通道 MIPI CSI-2<br />D-PHY 2.1 (最高 20Gbps)</td>
    </tr>
    <tr>
      <td>机械尺寸</td>
      <td colSpan={5}>69.6mm x 45mm<br />260 针 SO-DIMM 连接器</td>
    </tr>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>载板</th>
    </tr>
    <tr>
      <td>存储</td>
      <td colSpan={4}>1x M.2 KEY M PCIe (包含 M.2 NVMe 2242 SSD 128G)</td>
    </tr>
    <tr>
      <td rowSpan={3}>网络</td>
      <td>M.2 KEY E</td>
      <td colSpan={3}>1x M.2 Key E，用于 WiFi/蓝牙模块</td>
    </tr>
    <tr>
      <td>Mini PCIe</td>
      <td colSpan={3}>1x mini-PCIe，用于 LTE 4G 模块</td>
    </tr>
    <tr>
      <td>以太网</td>
      <td colSpan={3}>2x RJ45 千兆以太网</td>
    </tr>
    <tr>
      <td rowSpan={11}>I/O</td>
      <td >USB</td>
      <td colSpan={3}>4x USB 3.2 Type-A (5Gbps); <br />1x USB 2.0 Type-C (设备模式/调试);</td>
    </tr>
    <tr>
      <td>摄像头</td>
      <td colSpan={3}>4x mipi CSI(2 通道 15 针)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan={3}>1 x CAN(4 针插头)</td>
    </tr>
    <tr>
      <td>显示</td>
      <td colSpan={3}>1x HDMI 2.1</td>
    </tr>
    <tr>
      <td>风扇</td>
      <td colSpan={3}>1x 4 针风扇连接器 (5V PWM); <br />1x 4 针风扇连接器 (12V PWM);</td>
    </tr>
    <tr>
      <td>扩展端口</td>
      <td colSpan={3}>1x 40 针扩展插头;<br />1x 12 针控制和 UART 插头;</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={3}>1x RTC 2 针;<br />1x RTC 插座</td>
    </tr>
    <tr>
      <td>LED</td>
      <td colSpan={3}>2x LED(PWR 和 ACT)</td>
    </tr>
    <tr>
      <td>针孔按钮</td>
      <td colSpan={3}>1x PWR;<br />1x RESET;</td>
    </tr>
    <tr>
      <td>DIP 开关</td>
      <td colSpan={3}>1x REC</td>
    </tr>
    <tr>
      <td>天线孔</td>
      <td colSpan={3}>4x 天线孔</td>
    </tr>
    <tr>
      <td>电源</td>
      <td colSpan={4}>12-19V 5525 圆柱 DC 插孔 </td>
    </tr>
    <tr>
      <td>Jetpack 版本</td>
      <td colSpan={4}>Jetpack 6.2 </td>
    </tr>
    <tr>
      <td>机械尺寸</td>
      <td colSpan={4}>130mm x 120mm x 66mm</td>
    </tr>
    <tr>
      <td>安装方式</td>
      <td colSpan={4}>桌面安装，墙面安装</td>
    </tr>
    <tr>
      <td>工作温度</td>
      <td colSpan={4}>-10℃~60℃</td>
    </tr>
    <tr>
      <td>保修</td>
      <td colSpan={4}>2 年</td>
    </tr>
    <tr>
      <td>认证</td>
      <td colSpan={4}>CE,FCC,RoHS,REACH,Telec, KC, 振动测试(GB/T 2423)</td>
    </tr>
  </tbody>
</table>
</div>

:::tip
更多信息即将到来
:::

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>