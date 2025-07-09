---
description: 本文提供了基于 NVIDIA Jetson Orin 平台的 reComputer Mini 的入门指南，包括设备规格以及初始设置和配置步骤。
title: reComputer Mini 入门指南
keywords:
  - reComputer
  - reComputer mini
  - 嵌入式计算机
  - 机器人
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_mini.webp
slug: /cn/recomputer_jetson_mini_getting_started
last_update:
  date: 05/15/2025
  author: Youjiang
---

# reComputer Mini 入门指南

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<!-- 更换图片 -->

reComputer Mini 是一款由 NVIDIA Jetson Orin Nano/Orin NX 模块驱动的小型 AI 计算机，提供高达 100 TOPS 的 AI 性能。它底部配备了 PCIe 接口，提供丰富的扩展能力，同时支持灵活定制。整个系统设计用于嵌入无人机、巡逻机器人、配送机器人等自主机器中。它可以直接支持 54V DC 输入，广泛应用于电池供电系统。

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-optional-accessories.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlY29tcHUiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjoyLCJjX3RvdGFsX3Jlc3VsdHMiOjg4LCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0ifQ%3D%3D">
<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
</a></div>

<!-- 购买链接 -->

## 特性

- **卓越的生产级 AI 性能：** 通过 NVIDIA Orin SoC 实现高达 **100 TOPS** 的 AI 性能，具有低功耗和低延迟。Orin SoC 集成了 NVIDIA Ampere™ GPU 架构、64 位操作能力、先进的多功能视频和图像处理，以及 NVIDIA 深度学习加速器。
- **手掌大小的边缘 AI 设备：** 紧凑尺寸为 **63mmx95mmx42mm**，配备 NVIDIA Jetson Orin NX 16GB 模块、Mini J401 载板、风扇和外壳。支持桌面和墙壁安装。
- **丰富的 I/O 扩展能力：** 包括最多 7 个 USB 接口、1 个 DP 2.1 接口、2 个 CSI 接口、1 个 RJ45 千兆以太网接口、M.2 Key E、M.2 Key M、双通道 CAN 和 GPIO 扩展板。
- **加速解决方案上市：** 预装 **JetPack 6.0** 于 128GB NVMe SSD，支持 Linux OS BSP、Jetson 软件和主流 AI 框架。
- **规模化部署：** 支持 OTA 和由 Allxon 和 Balena 提供的远程管理服务。
- **灵活定制：** 包括更换配件模块、定制 Logo 和基于 reComputer Mini J4012 原始设计修改硬件接口。

## 规格

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Jetson Orin 系统模块</th>
    </tr>
    <tr>
      <th>规格</th>
      <th>reComputer Mini J3010</th>
      <th>reComputer Mini J3011</th>
      <th>reComputer Mini J4011</th>
      <th>reComputer Mini J4012</th>
    </tr>
    <tr>
      <td>模块</td>
      <td>Jetson Orin Nano 4GB</td>
      <td>Jetson Orin Nano 8GB</td>
      <td>Jetson Orin NX 8GB</td>
      <td>Jetson Orin NX 16GB</td>
    </tr>
    <tr>
      <td>AI 性能</td>
      <td>20 TOPS</td>
      <td>40 TOPS</td>
      <td>70 TOPS</td>
      <td>100 TOPS</td>
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
      <td colSpan={2}>1.5 GHz</td>
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
      <td colSpan={2}>支持 1080p30，由 1-2 个 CPU 核心驱动</td>
      <td colSpan={2}>1x 4K60 (H.265) | 3x 4K30 (H.265)<br />6x 1080p60 (H.265) | 12x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>视频解码器</td>
      <td colSpan={2}>1x 4K60 (H.265)<br />2x 4K30 (H.265)<br />5x 1080p60 (H.265)<br />11x 1080p30 (H.265)</td>
      <td colSpan={2}>1x 8K30 (H.265)<br />2x 4K60 (H.265)<br />4x 4K30 (H.265)<br />9x 1080p60 (H.265)<br />18x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>载板</th>
    </tr>
    <tr>
      <td>存储</td>
      <td colSpan={4}>128GB NVMe SSD</td>
    </tr>
    <tr>
      <td>网络</td>
      <td>M.2 KEY E</td>
      <td colSpan={3}>1x M.2 Key E 用于 WiFi/蓝牙模块</td>
    </tr>
    <tr>
      <td rowSpan={7}>I/O</td>
      <td >USB</td>
      <td colSpan={3}>2x USB 3.2 Type-A (10Gbps)<br />1x USB 2.0 Micro-B (设备模式)<br />1x USB 2.0 Type-C (主机模式)<br />1x USB 2.0 JST-4pin (主机模式)</td>
    </tr>
    <tr>
      <td>UART</td>
      <td colSpan={3}>1x UART; 1x UART 用于调试</td>
    </tr>
    <tr>
      <td>显示</td>
      <td colSpan={3}>1x DP 2.1 (包含在 Type-C 接口中)</td>
    </tr>
    <tr>
      <td>风扇</td>
      <td colSpan={3}>1x 4 针风扇接口 (5V PWM)</td>
    </tr>
    <tr>
      <td>按钮</td>
      <td colSpan={3}>1x 重置按钮; 1x 恢复按钮</td>
    </tr>
    <tr>
      <td>扩展接口</td>
      <td colSpan={3}>2x 60 针高速连接器 (用于扩展板)<br />1x 10 针电源连接器 (用于扩展板)</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={3}>1x RTC 2 针</td>
    </tr>
    <tr>
      <td>电源</td>
      <td colSpan={4}>1x XT30 接口 (12-54V DC)</td>
    </tr>
    <tr>
      <td colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>扩展板</td>
    </tr>
    <tr>
      <td>网络</td>
      <td>以太网</td>
      <td colSpan={3}>1x RJ-45 千兆以太网 (10/100/1000M)</td>
    </tr>
    <tr>
      <td rowSpan={5}>I/O</td>
      <td >USB</td>
      <td colSpan={3}>4x USB 3.2 Type-A (10 Gbps)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan={3}>1x CAN JST 4 针 (3.3V); 1x CAN (XT30 2+2)</td>
    </tr>
    <tr>
      <td>风扇</td>
      <td colSpan={3}>1x 4 针风扇接口 (5V PWM)</td>
    </tr>
    <tr>
      <td>I2C</td>
      <td colSpan={3}>2x I2C JST 4 针 (3.3V)</td>
    </tr>
    <tr>
      <td>SPI</td>
      <td colSpan={3}>1x I2S JST 6 针 (3.3V)</td>
    </tr>
    <tr>
      <td>电源</td>
      <td colSpan={4}>2x XT30 2+2 接口 (12-54V DC)</td>
    </tr>
    <tr>
      <td colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>其他</td>
    </tr>
    <tr>
      <td rowSpan={3}>机械</td>
      <td >尺寸 (宽 x 深 x 高)</td>
      <td colSpan={3}>63mm * 95mm * 42mm (无扩展)<br />63mm * 95mm * 66.7mm (带扩展)</td>
    </tr>
    <tr>
      <td>重量</td>
      <td colSpan={3}>345g (无扩展)<br />462g (带扩展)</td>
    </tr>
    <tr>
      <td>安装方式</td>
      <td colSpan={3}>桌面安装，墙壁安装</td>
    </tr>
    <tr>
      <td>工作温度</td>
      <td colSpan={4}>-10℃ ~ 50℃</td>
    </tr>
    <tr>
      <td>保修</td>
      <td colSpan={4}>1 年</td>
    </tr>
  </tbody>
</table>
</div>

## 硬件概览

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/hardware_overview.png"/>  
</div>

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/B1.png"/>  
</div>

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/B2.png"/>  
</div>

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/B3.png"/>  
</div>

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/B4.png"/>  
</div>

## 刷写 JetPack 操作系统

在这里，我们将向您展示如何将 [Jetpack 6.0](https://developer.nvidia.com/embedded/jetson-linux-archive) 刷写到连接到 reComputer Mini 的 NVMe SSD 上。

### 支持的 Nvidia Jetson 模块

- [NVIDIA® Jetson Orin™ Nano 模块 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5554.html) 
- [NVIDIA® Jetson Orin™ Nano 模块 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5552.html) 
- [NVIDIA® Jetson Orin™ NX 模块 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5523.html) 
- [NVIDIA® Jetson Orin™ NX 模块 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5524.html) 

### 前置条件

- Ubuntu 主机电脑
- reComputer Mini J4012/ J4011/ J3010 或 J3011
- USB Micro-B 数据传输线

:::info

我们建议您使用物理 Ubuntu 主机设备，而不是虚拟机。  
请参考下表准备主机设备。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td rowspan="2"> JetPack 版本 </td>
        <td class="dbon" colspan="3"> Ubuntu 版本（主机电脑） </td>
    </tr>
    <tr>
        <td> 18.04 </td>
        <td> 20.04 </td>
        <td> 22.04 </td>
    </tr>
    <tr>
        <td>JetPack 5.x</td>
        <td> ✅ </td>
        <td> ✅ </td>
        <td> </td>
    </tr>
    <tr>
        <td>JetPack 6.x</td>
        <td> </td>
        <td> ✅ </td>
        <td> ✅ </td>
    </tr>
  </tbody>
</table>

:::

### 准备 Jetpack 镜像

在这里，我们需要根据所使用的 Jetson 模块下载对应的系统镜像到我们的 Ubuntu 电脑上：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Jetpack 版本</th>
      <th>Jetson 模块</th>
      <th>下载链接</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>5.1.3</td>
      <td>Orin Nx 16GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZDMO2dBwiJIjw82nlOmxpgBpaKBuRk2a2coH0sIl2rlAA?e=xF3X5M" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td>8C3E89F54198DA2AC6094B7602C8AA2<br />CE14A2AB2C75A885A915BF2D04EDF2BD4</td>
    </tr>
    <tr>
      <td>Orin Nx 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcvT_P3RFzRGtzWfQQrofw0Bi8CptGEHqKDIUs6j7kI5Tw?e=VWh5Ww" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td>B7C50661695C7E42360B6DCD8E5679B<br />E2807DC1B10C94FF12BB43B223FF3CFCB</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ERyWCoUKxZ5NkussOSSiX4AB0uKN8Mo_DhKsXhi1x_SGqA?e=bdhxnE" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td>9A7EEE111D8175EF8286A276BE2668A<br />AA9DE1AB4E850D722351B5BE76C8610B1</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUJePP-bzqJAoQQ2pLw_VaABpJfj4K4EbCja9QH-OYqWSg?e=vI1M1K" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td>24A37D1EB26B65CEA9830961F0270AA<br />CCF4909C06D8CC1FCC91DB560C1B9060E</td>
    </tr>
    <tr>
      <td rowSpan={4}>6.0</td>
      <td>Orin Nx 16GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZojl6PUN4FFkshyt9a8kFEBUVVrQVO669V-pB_PNJvCuQ?e=YzFd1Z" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td>C579FF60F6F140E43C592F784EA5417<br />91DD8F7DDA49924F36EFBB63196FC1C35</td>
    </tr>
    <tr>
      <td>Orin Nx 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUNTXrMsDcJCnIN2RvmXg6EBBLY6PRZiegvUjqI_N2i0YQ?e=SXEXXz" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td>3A96643CF7CF8D765FD7B1B43CA7BEE<br />AAD97AF6094E073CE392AF6E1BAD45B91</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EabRgwAjKaJFv11KtK2r06QB_fn91IFoC97qV0LGKGPyWQ?e=fy7LwO" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td>C0D23150DE73F3E6D31203F7BA1B198<br />D26A7A67F109264D049B3E0F9EEE1EE7A</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVGTsdS4n-RLhFxn6tx1NFgB4axESjVlifNXHaFzNAsmWw?e=1oNQeE" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td>029F135F8A86E55892F1AD4C3049C9D<br />9908D4503C1BBEEAB324AB038A77B4027</td>
    </tr>
    <tr>
      <td rowSpan={2}>6.2</td>
      <td>Orin Nano 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVjuq6G9y_5OjIxMIHFiBj0BVckYdcRQBunaXMHFBLZ3tw?e=tY89se" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td>23855098982DD1E05C025D3F078BCA0<br />2F396C1FB68DC58E539D83569A894571D</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcdaeIBdGRpCp0Dev5R3o1sB2Tr4HIwjgtp3d_XX7lE9Gg?e=bxteCW" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td>A1C5F44B19B6C06E11AC38ABDA79AD6<br />CBFF2AAFBEEA7BF3A14B2FE08EA37267F</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
Jetpack6 镜像文件大小约为 **16.7GB**，下载大约需要 60 分钟。请耐心等待下载完成。
:::

:::info
为了验证下载固件的完整性，您可以比较 SHA256 哈希值。

在 Ubuntu 主机上，打开终端并运行命令 `sha256sum <File>` 来获取下载文件的 SHA256 哈希值。如果生成的哈希值与 Wiki 中提供的 SHA256 哈希值一致，则说明您下载的固件是完整且无损的。
:::

### 进入强制恢复模式

:::info
在进行安装步骤之前，我们需要确保开发板处于强制恢复模式。
:::

<div align="center">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/HEIXFkizP5Y" title="Enter Force Recovery Mode (reComputer Mini)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<details>

<summary> 分步操作 </summary>

<div align="center">
  <img width="{600}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_mini_rec.png" />
</div>

- **步骤 1.** 使用 USB Micro-B 数据线将 USB2.0 DEVICE 接口与 Ubuntu 主机 PC 连接。
- **步骤 2.** 使用针插入 RECOVERY 孔按下恢复按钮，并保持按住。
- **步骤 3.** 连接电源。
- **步骤 4.** 松开恢复按钮。

</details>

在 Linux 主机 PC 上，打开终端窗口并输入命令 `lsusb`。如果返回的内容中包含以下根据您使用的 Jetson SoM 的输出之一，则说明开发板已进入强制恢复模式：
- 对于 Orin NX 16GB: 0955:7323 NVidia Corp
- 对于 Orin NX 8GB: 0955:7423 NVidia Corp
- 对于 Orin Nano 8GB: 0955:7523 NVidia Corp
- 对于 Orin Nano 4GB: 0955:7623 NVidia Corp

以下是 Orin NX 16GB 的示例图片：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/3.png"/>
</div>

### 使用单条命令刷写到 Jetson

<details>

<summary> 使用单条命令刷写设备 </summary>

reComputer Jetson J30/40 Mini 提供了一键刷写脚本，支持刷写 Jetpack 6.0。

```bash
wget -O ./flashing.sh https://files.seeedstudio.com/OSHW_Jetson/flashing.sh  && sudo chmod 777 ./flashing.sh && ./flashing.sh
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZFBzTlyOjhE?si=uNN-l5VVGbAyGnot" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

:::caution
免责声明：一键刷写脚本旨在加快 Jetpack 的刷写速度。目前版本为测试版，可能存在许多问题。希望您能理解。如果遇到刷写问题，请按照下文的 `逐步刷写设备` 进行操作，并在我们的 [Discord Jetson 频道](https://discord.com/channels/862602258452578314/930732339624026152) 中反馈问题。我们会及时修复并在未来改进此功能。
:::

</details>

### 逐步刷写到 Jetson

**步骤 1:** 在 Ubuntu 主机 PC 上解压下载的镜像文件：

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# 例如：sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz
```

**步骤 2:** 执行以下命令将 Jetpack 系统刷写到 NVMe SSD：

```bash
cd mfi_xxxx
# 例如：cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

如果刷写成功，您将看到以下输出：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
刷写命令可能需要运行 2-10 分钟。
:::

**步骤 3:** 使用板载 HDMI 接口将 J501 连接到显示器，并完成初始配置设置：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
请根据您的需求完成 **系统配置**。
:::

**步骤 4（可选）:** 安装 Nvidia Jetpack SDK

请在 Jetson 设备上打开终端并执行以下命令：

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

## 硬件接口使用

:::info
如果您想了解硬件接口的详细规格和使用方法，请参考 [此 Wiki](https://wiki.seeedstudio.com/recomputer_jetson_mini_hardware_interfaces_usage/)。
:::

## 资源
- [reComputer Mini 数据手册](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf)
- [reComputer Mini 原理图](https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_Mini_SCH.7z)
- [reComputer Mini 3D 文件](https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_Mini_3D.7z)
- [Seeed Jetson 系列产品目录](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed Studio 边缘 AI 成功案例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson 系列对比](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Jetson 设备一览](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

翻译说明：  
- 第一个链接指向 Discord 技术支持社区。  
- 第二个链接指向 GitHub 的讨论页面。