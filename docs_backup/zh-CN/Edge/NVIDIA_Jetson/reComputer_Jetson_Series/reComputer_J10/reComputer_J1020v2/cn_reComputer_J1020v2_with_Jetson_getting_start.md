---
description: 将 JetPack 刷写到 reComputer J4012 (J401 载板)
title: reComputer J1020v2 入门指南
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_J1020v2_with_Jetson_getting_start
last_update:
  date: 05/15/2025
  author: Lakshantha
---

# reComputer J1020v2 入门指南

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center"><img width ="800" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110061441.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J1020-v2-w-o-power-adapter-p-5608.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
</a></div>

## 简介
reComputer 系列是为 Jetson 打造的紧凑型边缘计算机，基于 NVIDIA 的先进 AI 嵌入式系统：J10（Jetson Nano 4GB）和 J20（Jetson [Xavier NX](https://www.seeedstudio.com/NVIDIA-Jetson-Xavier-NX-Module-p-4421.html?queryID=fa33abfaf6f67f95a4c01b60263d2793&objectID=4421&indexName=bazaar_retailer_products) 8GB 和 Jetson Xavier 16GB）。通过丰富的扩展模块、工业外设和热管理功能，reComputer for Jetson 可帮助您通过部署流行的 DNN 模型和 ML 框架到边缘并实现高性能推理，加速和扩展下一代 AI 产品。

reComputer J1020 v2 是一款功能强大且紧凑的智能边缘设备，内置 Jetson Nano 生产模块，将现代 AI 性能带到边缘。内置的 J202 载板尺寸与 Jetson Nano 开发者套件相同，包含 4 个 USB 3 接口、M.2 Key M、HDMI 和 DP。完整系统还包括风扇和电源适配器。

对于 AI 初学者，如果您希望掌握关键的 AI 技能并深入学习深度学习，[NVIDIA 的深度学习学院 (DLI)](https://www.nvidia.com/en-us/training/) 提供实用的动手培训和认证。请同时查看 Seeed [wiki](https://wiki.seeedstudio.com/reComputer_Jetson_Series_Started_Guide/) 指南，其中包括 Jetson Nano 的入门指南以及构建不同项目的教程。

对于解决方案提供商，reComputer J1020 v2 预装了 Jetpack 4.6.1，配备丰富的 I/O 接口。这款 AI 设备简化了开发流程，非常适合从事视频分析、目标检测、自然语言处理、医学影像和机器人等领域的边缘 AI 解决方案提供商，适用于智慧城市、安全、工业自动化和智能工厂等行业。

## 特性

- **NVIDIA Jetson Nano 开发套件替代品：** 手掌大小的边缘 AI 设备，内置 Jetson Nano 4GB 生产模块，载板提供丰富的 I/O 接口：GPIO、CSI、千兆以太网、4 个 USB 3.0 Type A、板载 16 GB eMMC。请点击此处了解 SSD 存储扩展。
- **128 个 NVIDIA CUDA® 核心提供 0.5 TFLOPs (FP16)**，可运行 AI 框架和模型，用于图像分类、目标检测、分割和语音处理等应用。
- **预装 NVIDIA Jetpack**，JetPack SDK 包括板级支持包 (BSP)、Linux 操作系统、NVIDIA CUDA、cuDNN 和 TensorRT 软件库，用于深度学习、计算机视觉、GPU 计算、多媒体处理等。
- **支持完整的** [Jetson 软件栈](https://developer.nvidia.com/embedded/develop/software) 和各种 [开发者工具](https://wiki.seeedstudio.com/Jetson-AI-developer-tools/)，由 Seeed Edge AI 合作伙伴提供，用于构建快速且可靠的 AI 应用。

## 规格参数

<table>
  <thead>
    <tr>
      <th>规格参数</th>
      <th><a href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html">reComputer J1010</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J1020-v2-w-o-power-adapter-p-5608.html">reComputer J1020v2</a></th>
      <th><a href="https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html">NVIDIA Jetson Nano 开发者套件-B01</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>模块</td>
      <td colspan='2'>Jetson Nano 4GB（生产版本）</td>
      <td>Nano（非生产版本）</td>
    </tr>
    <tr>
      <td>存储</td>
      <td colspan='2' align='center'>16 GB eMMC</td>
      <td>MicroSD（不包含卡）</td>
    </tr>
    <tr>
      <td>SD 卡插槽</td>
      <td>包含（在载板上）</td>
      <td>-</td>
      <td>包含（在模块上）</td>
    </tr>
    <tr>
      <td>视频编码器</td>
      <td colspan='2'>4K30 | 2x1080p60 | 4x1080p30 | 4x720p60 | 9x720p30 (H.265 & H.264)</td>
      <td>4Kp30 | 4x 1080p30 | 9x 720p30 (H.264/H.265)</td>
    </tr>
    <tr>
      <td>视频解码器</td>
      <td colspan='2'>4K60 | 2x 4K30 | 4x 1080p60 | 8x 1080p30 | 9x 720p60 (H.265 & H.264)
      </td>
      <td>4Kp60 | 2x 4Kp30 | 8x 1080p30 | 18x 720p30 (H.264/H.265)</td>
    </tr>
    <tr>
      <td>千兆以太网</td>
      <td colspan='3' align='center'>1*RJ45 千兆以太网接口 (10/100/1000)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td>1 * USB 3.0 Type A; 
2 * USB 2.0 Type A;
1 * USB Type C 用于设备模式;
1 * USB Type C 用于 5V 电源输入</td>
      <td>4 * USB 3.0 Type-A；
1 * Micro-USB 接口用于设备模式;</td>
      <td>4 * USB 3.0 Type-A; 
1 * Micro-USB 接口用于 5V 电源输入或设备模式</td>
    </tr>
    <tr>
      <td>CSI 摄像头连接</td>
      <td colspan='3' align='center'>2*CSI 摄像头 (15 pos, 1mm pitch, MIPI CSI-2 )</td>
    </tr>
    <tr>
      <td>显示</td>
      <td>1*HDMI Type A</td>
      <td colspan='2' align='center'>1*HDMI Type A; 
1*DP</td>
    </tr>
    <tr>
      <td>风扇</td>
      <td colspan='3' align='center'>1* 风扇接口 (5V PWM)</td>
    </tr>
    <tr>
      <td>M.2 KEY E</td>
      <td>1*M.2 Key E</td>
      <td>1*M.2 Key E（禁用）</td>
      <td>1*M.2 Key E</td>
    </tr>
    <tr>
      <td>M.2 KEY M</td>
      <td>-</td>
      <td>1*M.2 Key M</td>
      <td>-</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1*RTC 插槽</td>
      <td>1*RTC 插槽
1*RTC 2 针</td>
      <td>-</td>
    </tr>
    <tr>
      <td>多功能接口</td>
      <td colspan='3' align='center'>1* 40 针排针</td>
    </tr>
    <tr>
      <td>电源</td>
      <td>USB-Type C 5V⎓3A</td>
      <td>	
9-12V 电源适配器不包含（圆形插头 5.5/2.5mm）</td>
      <td>DC 插头 5V⎓4A；
Micro-USB 5V⎓2A</td>
    </tr>
    <tr>
      <td>机械尺寸</td>
      <td colspan='2'>130 mm x 120 mm x 50 mm（带外壳）</td>
      <td>100 mm x 80 mm x 29 mm</td>
    </tr>
  </tbody>
</table>

## 将 JetPack 刷写到 reComputer J1020v2

:::info
请参考此 [wiki](/reComputer_J2021_J202_Flash_Jetpack) 页面获取更多信息，因为 J1020v2 使用的是 J202 扩展板。
:::

## 资源
[reComputer J1020 v2 数据手册](https://files.seeedstudio.com/wiki/reComputer/reComputer-J1020-v2-datasheet.pdf)

[reComputer J102（也适用于 J202）扩展板原理图](https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer%20J202_V1.0_SCH_PDF_240822.pdf)

[reComputer J1010 3D 文件](https://files.seeedstudio.com/products/NVIDIA-Jetson/J2021-Xavier-NX.stp)

[Seeed Jetson 系列产品目录](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)

[Seeed Studio 边缘 AI 成功案例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)

[Seeed Jetson 系列对比](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)

[Seeed Jetson 设备一览](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)