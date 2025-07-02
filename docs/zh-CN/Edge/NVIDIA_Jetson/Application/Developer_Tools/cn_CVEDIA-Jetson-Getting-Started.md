---
description: 使用 CVEDIA-RT 在 NVIDIA Jetson 设备上部署 AI 模型
title: CVEDIA-RT 入门指南
tags:
  - AI 模型部署
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/CVEDIA-Jetson-Getting-Started
last_update:
  date: 05/15/2025
  author: Lakshantha
---

# 在 NVIDIA® Jetson 设备上使用 CVEDIA-RT 入门指南

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/CVEDIA/thumb.gif" style={{width:1000, height:'auto'}}/></div>

[CVEDIA-RT](https://www.cvedia.com/cvedia-rt) 是一个模块化的跨平台 AI 推理引擎，为构建决策支持系统提供了坚实的基础。它从零开始设计，专为开发人员和集成商打造，提供高层和低层接口。

本指南将逐步讲解如何在 NVIDIA Jetson 平台上轻松安装 CVEDIA-RT，并开始构建令人兴奋的应用程序。

## 支持的硬件

CVEDIA-RT 支持以下平台：

- Windows
- Linux 
- NVIDIA Jetson
- Ambarella

然而，本指南将仅专注于如何在 NVIDIA Jetson 平台上部署 CVEDIA-RT。

## 前置条件

- 运行 NVIDIA JetPack 的 NVIDIA Jetson 设备，已安装所有 SDK 组件并连接到互联网

  - 我们使用 [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) 运行 [JetPack 5.1](https://developer.nvidia.com/embedded/jetpack-sdk-51) 测试了本指南
- 运行 Windows、Linux 或 Mac 的主机电脑，并连接到互联网
 
## 下载 NVIDIA Jetson 的 CVEDIA-RT 安装程序

**步骤 1：** 访问 [此页面](https://rt.cvedia.com/) 并点击 **Sign in**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/CVEDIA/10.png" /></div>

**步骤 2：** 注册一个新的 CVEDIA 账户或使用 Google 账户登录

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/CVEDIA/14.png" /></div>

**步骤 3：** 点击 **Download** 下的 **NVIDIA Jetson**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/CVEDIA/12.jpg" /></div>

**步骤 4：** 点击 **Docker(Recommended)** 下载包含 CVEDIA-RT 安装程序的 tar.gz 文件

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/13.png" /></div>

## 在 NVIDIA Jetson 上安装 CVEDIA-RT

**步骤 1：** 将之前下载的文件移动到 Jetson 设备上的新文件夹中，并通过以下命令解压：

```sh
tar -xzvf <filename.tar.gz>
```

**步骤 2：** 在 Jetson 设备上解压后的文件夹中运行安装脚本：

```sh
sudo ./install.sh
```

根据安装脚本中的提示，根据您的需求进行响应。

## 在 NVIDIA Jetson 上运行 CVEDIA-RT

运行应用程序：

```sh
./run.sh
```

现在您将看到 CVEDIA-RT 应用程序打开，并且它已经预加载了许多不同的应用程序，例如：

- 人群估算
- 无人机检测
- 跌倒检测
- 车道占用
- 车辆类型计数
- 包裹检测等！

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/15.png" /></div>

如果您希望在没有互联网连接的情况下本地运行 CVEDIA-RT，请运行以下命令：

```sh
./run.sh -U
```

然而，您需要至少运行一次特定应用程序并连接互联网，以便下载必要的文件和模型。

## 探索预加载的应用程序

现在我们将探索几个开箱即用的应用程序，并了解如何配置它们。

**步骤 1：** 点击 **intelligent-transportation-systems**，然后点击 **lane-occupancy** 解决方案旁边的运行按钮。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/2.jpg" /></div>

现在它将下载必要的文件，例如模型文件、配置文件、示例视频文件，并启动演示。在这里，您将看到根据车道绘制的区域，每个区域指示该区域内有多少车辆。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/lane-GIF.gif" /></div>

**步骤 2：** 根据您的偏好更改应用程序中的设置，例如打开/关闭边界框和标签、更改区域、区域颜色等。

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/CVEDIA/3.jpg" /></div>

**步骤 3：** 使用 **lane-occupancy** 旁边的两个图标停止或暂停演示。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/CVEDIA/4.jpg" /></div>

**步骤 4：** 点击 **lane-occupancy** 旁边的齿轮图标，点击 **Edit Source** 以根据您的偏好更改视频流。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/CVEDIA/5.jpg" /></div>

这里您有多个选项可供选择：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/CVEDIA/6.jpg" /></div>

**步骤 5：** 选择您想要的视频源后，点击 **Save Instance** 以使用您选择的视频源运行应用程序。

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/CVEDIA/7.jpg" /></div>

**注意：** 确保停止应用程序并重新运行，以使更改生效。

**步骤 6：** 同样，您可以导航到另一个解决方案，例如 **crowd-estimation** 下的 **people_walking**，然后点击播放按钮运行解决方案。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/Crowd-GIF-small.gif" /></div>

在这里，您可以进一步配置设置并更改视频流，就像之前提到的解决方案一样。

<div align="center"><img width={180} src="https://files.seeedstudio.com/wiki/CVEDIA/9.jpg" /></div>

## 了解更多

CVEDIA-RT 提供非常详细和全面的文档。因此，强烈建议您在 [这里](http://docs.cvedia.com) 查看。

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

---

### 技术支持按钮说明

- **论坛支持**：点击 [论坛链接](https://forum.seeedstudio.com/) 访问 Seeed Studio 官方论坛，与社区成员交流技术问题。
- **邮件支持**：点击 [邮件链接](https://www.seeedstudio.com/contacts) 联系 Seeed Studio 技术支持团队，获取直接帮助。

- **Discord 社区**：点击 [Discord 链接](https://discord.gg/eWkprNDMU7) 加入 Seeed Studio 的 Discord 社区，与开发者实时互动。
- **GitHub 讨论**：点击 [GitHub 讨论链接](https://github.com/Seeed-Studio/wiki-documents/discussions/69) 参与相关技术话题的讨论。