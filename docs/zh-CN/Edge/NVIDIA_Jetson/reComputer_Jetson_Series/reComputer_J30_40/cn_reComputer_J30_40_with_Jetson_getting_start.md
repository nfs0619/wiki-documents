---
description: 将 JetPack 刷写到 reComputer J4012（J401 载板）
title: reComputer J30/40 入门指南
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_J30_40_with_Jetson_getting_start
last_update:
  date: 05/15/2025
  author: Lakshantha
---

# reComputer J30/40 入门指南

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center">
  <iframe width="800" height="480" src="https://www.youtube.com/embed/-KAyUHzRxHc" title="开箱及连接 reComputer J4012 - 由 NVIDIA Jetson Orin NX 提供支持" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
</a></div>

## 简介
reComputer J30/40 搭载 Jetson Orin，是一款功能强大且紧凑的智能边缘设备，可为边缘提供高达 100TOPS 的现代 AI 性能。它结合了 NVIDIA Ampere™ GPU 架构和 64 位操作能力。

完整系统包括一个 NVIDIA Jetson Orin 生产模块、一个散热器和一个电源适配器。reComputer J30/40 预装了 Jetpack 5.1.1，简化了开发过程，非常适合从事视频分析、目标检测、自然语言处理、医学影像和机器人技术的边缘 AI 解决方案提供商，适用于智慧城市、安全、工业自动化和智能工厂等行业。

如果您需要不带电源适配器的版本，请查看 [reComputer-Jetson](https://www.seeedstudio.com/reComputer-J4012-w-o-power-adapter-p-5628.html)。

## 特性

- **卓越的生产级 AI 性能：** 设备端处理，提供高达 100 TOPS 的 AI 性能，低功耗和低延迟
- **手掌大小的边缘 AI 设备：** 紧凑尺寸为 130mm x 120mm x 58.5mm，包括 NVIDIA Jetson Orin 生产模块、散热器、外壳和电源适配器。支持桌面、壁挂，适合各种场景
- **丰富的 I/O 扩展能力：** 4 个 USB3.2、HDMI 2.1、2 个 CSI、1 个 RJ45 千兆以太网、M.2 Key E、M.2 Key M、CAN 和 GPIO
- **加速解决方案上市：** 预装 Jetpack 和 NVIDIA JetPack™ 5.1，内置 128GB NVMe SSD，Linux OS BSP，128GB SSD，WiFi BT 组合模块，2 根天线，支持 Jetson 软件和主流 AI 框架及软件平台
- **全面认证：** FCC、CE、RoHS、UKCA

## 规格参数

<table>
  <thead>
    <tr>
      <th>规格参数</th>
      <th><a href="https://www.seeedstudio.com/reComputer-J3010-w-o-power-adapter-p-5631.html?queryID=e8d0ae9b2e338e8a860f07dacef58f6e&objectID=5631&indexName=bazaar_retailer_products">reComputer J3010</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J3011-p-5590.html">reComputer J3011</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J4011-w-o-power-adapter-p-5629.html?queryID=5577f61da645361a7aad9179bc04efc2&objectID=5629&indexName=bazaar_retailer_products">reComputer J4011</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J4012-w-o-power-adapter-p-5628.html?queryID=639ef60cde4a38ccc9ff2f82070d4854&objectID=5628&indexName=bazaar_retailer_products">reComputer J4012</a></th>
    </tr>
  </thead>
  <tbody>
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
      <td>512 核 NVIDIA Ampere 架构 GPU，16 个 Tensor 核心</td>
      <td>1024 核 NVIDIA Ampere 架构 GPU，32 个 Tensor 核心</td>
      <td colspan='2' align='center'>1024 核 NVIDIA Ampere 架构 GPU，32 个 Tensor 核心</td>
    </tr>
    <tr>
      <td>GPU 最大频率</td>
      <td colSpan='2' align='center'>625 MHz</td>
      <td>765 MHz</td>
      <td>918 MHz</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td colSpan='2'>6 核 Arm® Cortex®-A78AE v8.2 64 位 CPU<br />1.5MB L2 + 4MB L3</td>
      <td>6 核 Arm® Cortex®-A78AE v8.2 64 位 CPU 1.5MB L2 + 4MB L3</td>
      <td>8 核 Arm® Cortex®-A78AE v8.2 64 位 CPU 2MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>CPU 最大频率</td>
      <td colSpan='2' align='center'>1.5 GHz</td>
      <td colSpan='2' align='center'>2 GHz</td>
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
      <td colSpan='2' align='center'>/</td>
      <td>1x NVDLA v2</td>
      <td>2x NVDLA v2</td>
    </tr>
    <tr>
      <td>DLA 最大频率</td>
      <td colSpan='2' align='center'>/</td>
      <td colSpan='2' align='center'>614 MHz</td>
    </tr>
    <tr>
      <td>视觉加速器</td>
      <td colSpan='2' align='center'>/</td>
      <td colSpan='2' align='center'>1x PVA v2</td>
    </tr>
    <tr>
      <td>存储</td>
      <td colSpan='4' align='center'>128GB NVMe SSD</td>
    </tr>
    <tr>
      <td>视频编码器</td>
      <td colSpan='2' align='center'>支持 1080p30，由 1-2 个 CPU 核心处理</td>
      <td colSpan='2' align='center'>1x 4K60 (H.265) | 3x 4K30 (H.265)<br />6x 1080p60 (H.265) | 12x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>视频解码器</td>
      <td colSpan='2' align='center'>1x 4K60 (H.265)<br />2x 4K30 (H.265)<br />5x 1080p60 (H.265)<br />11x 1080p30 (H.265)</td>
      <td colSpan='2' align='center'>1x 8K30 (H.265) | 2x 4K60 (H.265) | 4x 4K30 (H.265)<br />9x 1080p60 (H.265) | 18x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>显示</td>
      <td colSpan='4' align='center'>1* HDMI 2.1</td>
    </tr>
    <tr>
      <td>CSI 摄像头</td>
      <td colSpan='4' align='center'>2* CSI （2-lane 15pin）</td>
    </tr>
    <tr>
      <td>网络</td>
      <td colSpan='4' align='center'>1* 千兆以太网 (10/100/1000M)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan='4' align='center'>4* USB 3.2 Type-A (10Gbps); 1* USB2.0 Type-C (设备模式)</td>
    </tr>
    <tr>
      <td>M.2 Key M</td>
      <td colSpan='4' align='center'>1* M.2 Key M</td>
    </tr>
    <tr>
      <td>M.2 Key E</td>
      <td colSpan='4' align='center'>1* M.2 Key E</td>
    </tr>
    <tr>
      <td>风扇</td>
      <td colSpan='4' align='center'>1* 4 针风扇接口 (5V PWM)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan='4' align='center'>1* CAN</td>
    </tr>
    <tr>
      <td>多功能端口</td>
      <td colSpan='4' align='center'>1* 40 针扩展头，1* 12 针控制和 UART 头</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan='4' align='center'>RTC 2 针，RTC 插槽（支持 CR1220，但不包括）</td>
    </tr>
    <tr>
      <td>电源</td>
      <td colSpan='4' align='center'>9-19V</td>
    </tr>
    <tr>
      <td>电源适配器</td>
      <td colSpan='4' align='center'>不包括电源适配器</td>
    </tr>
    <tr>
      <td>温度</td>
      <td colSpan='4' align='center'>-10℃~60℃</td>
    </tr>
    <tr>
      <td>机械尺寸</td>
      <td colSpan='4' align='center'>130mm x 120mm x 58.5mm</td>
    </tr>
  </tbody>
</table>

## 刷写 JetPack

:::info
reComputer J30/40 由 J401 承载板驱动。  
请参考此 [wiki 页面](/reComputer_J4012_Flash_Jetpack) 了解更多关于刷写 JetPack 的信息。
:::

## 接口使用

:::info
reComputer J30/40 由 J401 承载板驱动。  
请参考此 [wiki 页面](/J401_carrierboard_Hardware_Interfaces_Usage) 了解更多关于接口使用的信息。
:::

## 资源
- [reComputer J30x 数据手册](https://files.seeedstudio.com/products/NVIDIA/reComputer-J301x-datasheet.pdf)
- [reComputer J40x 数据手册](https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf)
- [reComputer J30/J40 原理图](https://files.seeedstudio.com/wiki/J401/reComputer_J401_SCH_V1.0.pdf)
- [reComputer J30/J40 3D 文件](https://files.seeedstudio.com/wiki/reComputer-J4012/reComputer-J4012.stp)
- [Seeed Jetson 系列目录](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed Studio 边缘 AI 成功案例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson 系列对比](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Jetson 设备一览](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)
- [Jetson 示例](https://github.com/Seeed-Projects/jetson-examples)
- [reComputer-Jetson-入门指南](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时获得顺畅的体验。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>