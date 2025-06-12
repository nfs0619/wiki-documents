---
description: 使用 Lumeo 在 NVIDIA Jetson 设备上部署 AI 模型
title: Lumeo 入门指南
tags:
  - AI 模型部署
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Lumeo-Jetson-Getting-Started
last_update:
  date: 05/15/2025
  author: Lakshantha
---

# 在 NVIDIA® Jetson 设备上使用 Lumeo 入门指南

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/thumb.gif" /></div>

[Lumeo](https://lumeo.com) 是一个无代码视频分析平台，可帮助您快速设计、部署和监控定制的视频分析以及其他视觉 AI 应用程序。

本指南将逐步讲解如何轻松地在 NVIDIA Jetson 平台上安装 Lumeo，并将其设置为网关，以便您能够执行管道并处理来自流媒体、同一网络上的 IP 摄像头或连接的 USB 摄像头的视频。

## 支持的硬件

Lumeo 支持以下平台：

- NVIDIA Jetson
- 配备 Nvidia GPU 的 x86 服务器
- AWS、GCP、Azure 等云平台上的 GPU 实例

然而，本指南将重点讲解如何在 NVIDIA Jetson 平台上部署 Lumeo。

## 前提条件

- 运行 NVIDIA JetPack 的 NVIDIA Jetson 设备，安装了所有 SDK 组件并连接到互联网

  - 我们使用运行 [JetPack 5.1](https://developer.nvidia.com/embedded/jetpack-sdk-51) 的 [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) 测试了本指南。
- 运行 Windows、Linux 或 Mac 的主机电脑，并连接到互联网

## 创建 Lumeo 账户

**步骤 1：** 访问 [此页面](https://console.lumeo.com/register)，输入电子邮件、密码，勾选同意条款的复选框，然后点击 **Sign up**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/9.jpg" /></div>

**步骤 2：** 注册新账户后，您可以通过访问 [此页面](https://console.lumeo.com/login)，使用之前创建的电子邮件和密码登录您的账户。

**步骤 3：** 输入 **组织名称** 和 **工作空间名称**，然后点击 **Start using Lumeo**。

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Lumeo/10.png" /></div>

现在您将看到如下的 Lumeo 控制台界面：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/11.jpg" /></div>

## 在 NVIDIA Jetson 上安装 Lumeo 网关

**步骤 1：** 在 Jetson 设备上运行安装脚本

```sh
bash <(wget -qO- https://link.lumeo.com/setup)
```

根据安装脚本中的提示进行操作，您可以保持所有设置为默认值。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/1.png" /></div>

如果看到以下输出，则表示安装程序已成功完成：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/2.png" /></div>

**步骤 2：** 在提示 **Enter the command:** 后输入 **Install**，以安装包含网关的新容器。

```
Enter the command: 
install
```

**注意：** 免费的 Lumeo 账户仅允许部署一个网关。因此，在将网关部署到 Jetson 设备之前，您需要先删除 Lumeo 默认提供的云网关。只需进入预加载的云网关并点击 **Delete** 即可删除该网关。

**步骤 3：** 在提示时为容器输入一个名称，并在提示时使用您的 Lumeo 账户凭据登录。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/4.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/12.jpg" /></div>

**步骤 4：** 容器安装完成后，输入 **list** 以列出刚刚安装的容器。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/5.png" /></div>

**步骤 5：** 输入 **exit** 以退出运行中的脚本。

现在您已经成功在 NVIDIA Jetson 上安装了 Lumeo 网关。如果您进入 Lumeo 控制台并导航到 **Gateways**，您将看到新部署的 Jetson 网关。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/13.png" /></div>

**步骤 6：** 点击网关以查看有关该网关的更多信息。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/14.jpg" /></div>

## 向网关添加摄像头

现在我们将向已经在 Jetson 设备上设置的网关添加摄像头。

**步骤 1：** 将 USB 摄像头连接到 Jetson 设备的一个 USB 端口，或者将 ONVIF 摄像头连接到与 Jetson 设备相同的网络。

**步骤 2：** 在我们之前设置的网关下，点击 **Add Camera**。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/15.jpg" /></div>

**步骤 3：** 它将尝试自动发现所有连接的 USB 摄像头以及同一网络上的 ONVIF 摄像头。点击摄像头旁边的 **Link** 以将摄像头添加到网关。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/16.png" /></div>

如果未检测到任何连接的摄像头，请点击 **Discover** 以重新启动自动检测过程。如果仍然失败，请点击 **+ Manually add cameras** 并手动配置您的摄像头。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/17.png" /></div>

**步骤 4：** 输入 **摄像头名称**，如果摄像头需要凭据，请提供凭据，最后点击 **Connect camera**。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Lumeo/18.png" /></div>

现在您将看到摄像头成功链接。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/19.png" /></div>

**步骤 5：** 点击链接的摄像头以输出预览快照，如下所示：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/20.png" /></div>

**步骤 6：** 如果您想添加 RTSP 或 HTTP 流，可以导航到 **Deploy > Streams**，点击 **Add input stream** 并配置流媒体。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/21.jpg" /></div>

## 构建人员检测管道

Lumeo 提供了许多开箱即用的解决方案，这些解决方案包含预配置的管道和预加载的模型。我们将尝试使用 Lumeo 创建一个简单的人员检测应用程序。

**步骤 1：** 在 **Design > Solutions** 部分中选择 **Basics - Detect Objects**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/22.jpg" /></div>

现在，您将看到为您创建的模板，它采用基于块的样式，允许您为解决方案添加更多自定义和功能。在这里，您可以根据自己的喜好添加、修改或删除块。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/23.jpg" /></div>

**步骤 2：** 此模板默认加载一个 **人员检测** 模型，跟踪对象，对视频进行编码并通过 WebRTC 流式传输。我们将保持所有配置块为默认状态，然后点击 **Deploy**。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Lumeo/24.jpg" /></div>

**步骤 3：** 在 **Select Gateway** 下，选择您已部署在 Jetson 上的网关，选择您之前配置的摄像头，然后点击 **Deploy** 开始将应用程序部署到 Jetson 设备。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/25.png" /></div>

如果部署成功，您将看到一个名为 **running** 的绿色图标，如下所示：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/26.png" /></div>

**步骤 4：** 点击 **播放按钮** 通过 WebRTC 查看输出流。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Lumeo/27.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/28.png" /></div>

## 了解更多

Lumeo 提供非常详细和全面的文档。因此，我们强烈建议您在 [这里](https://docs.lumeo.com) 查看相关内容。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>