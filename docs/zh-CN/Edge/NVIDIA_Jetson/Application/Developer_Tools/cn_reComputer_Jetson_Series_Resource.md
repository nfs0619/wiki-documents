---
description: Jetson 资源
title: Jetson 资源
keywords:
  - 边缘
  - reComputer 应用
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_Jetson_Series_Resource
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # 用于 Disqus

---

# Jetson 资源

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## [Jetson 软件](https://developer.nvidia.com/embedded/develop/software)

所有 NVIDIA® Jetson™ 模块和开发套件都由相同的软件栈支持，使您能够一次开发并部署到任何地方。Jetson 软件旨在为 AI 应用提供端到端加速，并加速您的上市时间。我们将支持数据中心和云部署的强大 NVIDIA 技术带到边缘设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rewendang.png" alt="pir" width={800} height="auto" /></p>

### [NVIDIA JetPack SDK](https://developer.nvidia.com/embedded/jetpack)

Jetson 软件栈从 NVIDIA JetPack™ SDK 开始，它提供了一个完整的开发环境，包括 CUDA-X 加速库和其他 NVIDIA 技术，以帮助您快速开始开发。JetPack 包括 Jetson Linux 驱动程序包，提供 Linux 内核、引导加载程序、NVIDIA 驱动程序、闪存工具、示例文件系统以及 Jetson 平台的工具链。它还包括安全功能、空中更新等。JetPack 包括 NVIDIA 容器运行时，以支持边缘设备上的云原生技术和工作流。

了解更多：

- [JetPack SDK](https://developer.nvidia.com/embedded/jetpack)
- [Jetson Linux](https://developer.nvidia.com/embedded/linux-tegra)
- [Jetson 云原生](https://developer.nvidia.com/embedded/jetson-cloud-native)

### [NVIDIA TAO 和预训练 AI 模型](https://developer.nvidia.com/tao)

NVIDIA TAO 简化了深度学习工作流中耗时的部分，从数据准备到训练再到优化，减少了实现价值的时间。

了解更多：

- [TAO](https://developer.nvidia.com/tao)
- [预训练模型](https://developer.nvidia.com/tao-toolkit)

### [NVIDIA Triton 推理服务器](https://developer.nvidia.com/nvidia-triton-inference-server)

NVIDIA Triton™ 推理服务器简化了 AI 模型的大规模部署。Triton 推理服务器是开源的，提供了一个单一的标准化推理平台，可以支持不同部署环境（如数据中心、云、嵌入式设备和虚拟化环境）中的多帧模型推理。它支持不同类型的推理查询，具有高级批处理和调度算法，并支持实时模型更新。

了解更多：

- [NVIDIA Triton 推理服务器](https://developer.nvidia.com/nvidia-triton-inference-server)

### [NVIDIA Riva](https://developer.nvidia.com/riva)

NVIDIA Riva 是一个完全加速的 SDK，用于使用端到端深度学习管道构建多模态对话式 AI 应用程序。Riva SDK 包括预训练的对话式 AI 模型、NVIDIA TAO 工具包，以及针对语音、视觉和自然语言处理 (NLP) 任务的优化端到端技能。

了解更多：

- [Riva](https://developer.nvidia.com/riva)

### [NVIDIA DeepStream SDK](https://developer.nvidia.com/deepstream-sdk)

NVIDIA DeepStream SDK 提供了一个完整的流分析工具包，用于 Jetson 上基于 AI 的多传感器处理以及视频和图像理解。DeepStream 是 NVIDIA Metropolis 的重要组成部分，这是一个构建端到端服务和解决方案的平台，将像素和传感器数据转化为可操作的洞察。

了解更多：

- [DeepStream >](https://developer.nvidia.com/deepstream-sdk)

### [NVIDIA Isaac](https://developer.nvidia.com/isaac-sdk)

NVIDIA Isaac ROS GEM 是一个硬件加速包，使 ROS 开发者能够更轻松地在 NVIDIA 硬件上构建高性能解决方案。NVIDIA Isaac Sim 由 Omniverse 提供支持，是一个可扩展的机器人模拟应用程序。它包括 Replicator——一个生成各种合成数据集以训练感知模型的工具。Isaac Sim 还支持开发、测试和管理基于 AI 的机器人的真实、物理精确的虚拟环境。

了解更多：

- [Isaac ROS GEM](https://developer.nvidia.com/isaac-ros-gems)
- [Isaac Sim](https://developer.nvidia.com/isaac-sim)

---

## [Jetson 模块](https://developer.nvidia.com/embedded/jetson-modules)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rewendang2.png" alt="pir" width={500} height="auto" /></p>

NVIDIA ® Jetson™ 将加速的 AI 性能带到边缘设备，以节能且紧凑的形式呈现。Jetson 模块系列都使用相同的 NVIDIA CUDA-X™ 软件，并支持云原生技术，如容器化和编排，以在边缘构建、部署和管理 AI。

[了解所有 Jetson 模块 >](https://developer.nvidia.com/embedded/jetson-modules)

**reComputer Jetson 应用这些模块：**

### Jetson Xavier NX 系列

<table align="center">
  <tbody><tr>
      <th align="center" />
      <th align="center" />
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rewendang3.jpg" alt="pir" width={300} height="auto" /></p></td>
      <td align="left">Jetson Xavier NX 将高达 21 TOPs 的 AI 计算能力带到边缘设备，以小型模块形式呈现。它可以并行运行多个现代神经网络，并处理来自多个高分辨率传感器的数据，以满足完整 AI 系统的需求。Jetson Xavier NX 系列可用于生产应用，并支持所有流行的 AI 框架。<br /> Jetson Xavier NX - <a href="https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html">reComputer J2011</a><br /> Jetson Xavier NX 16GB - <a href="https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html">reComputer J2012</a></td>
    </tr>
  </tbody>
</table>

### Jetson Nano

<table align="center">
  <tbody><tr>
      <th align="center" />
      <th align="center" />
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rewendang4.jpg" alt="pir" width={300} height="auto" /></p></td>
      <td align="left">Jetson Nano 是一款小型且强大的计算机，专为嵌入式 AI 系统和物联网设计，能够在低功耗平台上提供现代 AI 的强大功能。通过 NVIDIA Jetpack SDK 和完整的桌面 Linux 环境，您可以快速上手并开始探索嵌入式产品的新世界。<br /> Jetson Nano - <a href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html">reComputer J1010</a>, <a href="https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html">reComputer J1020</a></td>
    </tr>
  </tbody>
</table>

## 刷机指南

由于 reComputer Jetson 系列产品已配备 16 GB eMMC，并预装了 `ubuntu 18.04 LTS` 和 `NVIDIA JetPack 4.6`，您可以直接将其用于开发项目。如果您需要重新刷机，请访问以下相应的文档：

- [J1010 载板版本](https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack/)
- [Jetson A206 载板](https://wiki.seeedstudio.com/reComputer_J1020_A206_Flash_JetPack/)

## 支持

在 Jetson 论坛上提问并获取解答。NVIDIA 工程师、社区开发者以及 Jetson 合作伙伴都会在这里提供支持。请查看以下链接：

- [Jetson Nano 论坛](https://forums.developer.nvidia.com/c/agx-autonomous-machines/jetson-embedded-systems/jetson-nano)：适用于 Jetson Nano 开发套件和生产模块。
- [Jetson Xavier NX 论坛](https://forums.developer.nvidia.com/c/agx-autonomous-machines/jetson-embedded-systems/jetson-xavier-nx)：适用于 Jetson Xavier NX 开发套件和生产模块。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得最佳体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>