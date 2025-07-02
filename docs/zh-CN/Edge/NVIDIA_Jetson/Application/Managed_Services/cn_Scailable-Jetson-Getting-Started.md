---
description: 使用 Scailable 在 NVIDIA Jetson 设备上部署 AI 模型
title: Scailable 入门指南
tags:
  - AI 模型部署
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Scailable-Jetson-Getting-Started
last_update:
  date: 05/15/2025
  author: Lakshantha
---

# 在 NVIDIA® Jetson 设备上使用 Scailable 入门指南

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center"><img width="{1000}" src="https://files.seeedstudio.com/wiki/Scailable/wiki-thumb-4.gif" /></div>

## 什么是 Scailable？

[Scailable](https://scailable.net) 提供了一个平台，用于大规模创建和管理边缘 AI 解决方案。通过 Scailable，您可以轻松配置任何支持的边缘设备（如路由器、网关或工业电脑），将其转变为“智能”设备。智能设备可以在输入数据（例如视频流）上运行高级人工智能（AI）和机器学习（ML）模型，将输入数据转化为有意义的信息，例如视频中的车辆数量统计。

## 为什么选择在 NVIDIA Jetson 上使用 Scailable？

NVIDIA Jetson 平台是运行 Scailable 的绝佳选择，因为作为边缘 AI 设备（包括 NVIDIA SoMs），它能够在大规模部署各种 AI 管道后，通过无线方式提供更好的推理性能。

本指南将逐步讲解如何在 NVIDIA Jetson 平台上轻松安装 Scailable AI Manager，并使用 Scailable 平台远程配置和管理您的 AI 解决方案。

## 前置条件

- 运行 NVIDIA JetPack 5.0+ 并连接到互联网的 NVIDIA Jetson 设备

  - 我们已使用运行 [JetPack 5.1.1](https://developer.nvidia.com/embedded/jetpack-sdk-511) 的 [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) 测试了本指南。如果您想探索 Seeed 提供的更多 NVIDIA Jetson 设备，请访问 [此页面](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)。
- 运行 Windows、Linux 或 Mac 并连接到互联网的主机电脑

## 安装 Scailable AI Manager

**步骤 1：** 在 Jetson Orin 设备上执行以下命令以安装 Scailable AI Manager

```sh
sudo bash -ic "$(wget -q -O - https://get.sclbl.net)"
```

:::note
安装过程中，您需要在提示是否启用 JetPack 5 支持时输入“y”。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/2.jpg
" style={{width:800, height:'auto'}}/></div>

**步骤 2：** 您可以在网页浏览器中输入 Jetson 设备的 IP 地址，后跟 **:8081**，或者直接输入命令行中显示的 URL，如下所示：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/4.jpg
" style={{width:800, height:'auto'}}/></div>

## 注册 Scailable 账户

**步骤 1：** 当 Scailable AI Manager 显示时，通过输入设备名称注册设备，然后点击 **Register** 按钮

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/1.jpg
" style={{width:1000, height:'auto'}}/></div>

**步骤 3：** 确认您之前创建的设备名称，点击 **Register**，然后点击 **Return to device**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/7.jpg
" style={{width:650, height:'auto'}}/></div>

如果一切正常，您将在 **Status** 标签下看到所有状态检查均成功，如下所示：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/8.jpg
" style={{width:850, height:'auto'}}/></div>

## 运行 AI 应用程序

Scailable 预装了许多不同的 AI 模型供您试用。不过，如果您想使用自己的 AI 模型，也可以导入它。

**步骤 1：** 在 **Model** 标签下的 **First Model** 部分，点击 **Assign Model**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/9.jpg
" style={{width:750, height:'auto'}}/></div>

**步骤 2：** 您可以通过点击 **add a model** 添加自己的模型，也可以使用预构建模型。在这里我们选择 **Scailable Models**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/10.jpg
" style={{width:900, height:'auto'}}/></div>

**步骤 3：** 作为示例，我们选择 **People counter within a region** 模型。点击 **Use this model**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/12.png
" style={{width:800, height:'auto'}}/></div>

现在您将看到模型已被选中

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/13.png
" style={{width:750, height:'auto'}}/></div>

**步骤 4：** 在 **Input** 标签下，为输入驱动选择 **Video driver**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/14.png
" style={{width:800, height:'auto'}}/></div>

在这里您可以选择视频流、图像或 Scailable 预加载的示例图像/视频

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/16.png
" style={{width:800, height:'auto'}}/></div>

**步骤 5：** 例如，我们选择 Scailable 附带的预加载视频源 **faces**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/15.jpg
" style={{width:800, height:'auto'}}/></div>

**步骤 6：** 在 **output** 标签下，保持设置为默认值

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/17.png
" style={{width:800, height:'auto'}}/></div>

**步骤 7：** 在 **Options** 标签下，保持设置为默认值

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/18.png
" style={{width:800, height:'auto'}}/></div>

**步骤 7：** 在 **Test** 标签下，点击 **Test configuration**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/19.png
" style={{width:800, height:'auto'}}/></div>

如果成功，您将看到以下输出：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/20.png
" style={{width:800, height:'auto'}}/></div>

**步骤 8：** 在 **Run** 标签下，点击 **Run Model**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/21.png
" style={{width:800, height:'auto'}}/></div>

如果运行成功，你将看到以下输出：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/22.png
" style={{width:800, height:'auto'}}/></div>

**步骤 9：** 点击 **View live visualization** 本地预览推理结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/23.png
" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/25.png
" style={{width:800, height:'auto'}}/></div>

**步骤 10：** 点击 **View output in cloud** 下载 CSV 或 JSON 格式的结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/26.png
" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/27.png
" style={{width:800, height:'auto'}}/></div>

## 大规模部署 AI 模型

通过 Scailable，你可以轻松地将单个模型部署到多个设备上。

**步骤 1：** 访问 [此网页](https://admin.sclbl.net/login)，登录你的 Scailable 账户，你将看到如下仪表盘：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/32.png
" style={{width:800, height:'auto'}}/></div>

**步骤 2：** 点击 **DEVICES** 后，你将看到所有与你的 Scailable 账户连接的设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/28.png
" style={{width:750, height:'auto'}}/></div>

**步骤 3：** 勾选所有设备，输入设备组的名称，然后点击 **Save new groups**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/29.png
" style={{width:750, height:'auto'}}/></div>

**步骤 4：** 点击 **Assign a model to all devices in group**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/30.png
" style={{width:750, height:'auto'}}/></div>

**步骤 5：** 选择一个模型（如之前所做），该模型将被远程部署到组内的所有设备。

成功远程部署模型后，你将看到以下输出：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/31.jpg
" style={{width:600, height:'auto'}}/></div>

## 了解更多

Scailable 提供非常详细和全面的文档，因此强烈建议你查看 [这里](https://docs.scailable.net)。

## 技术支持与产品讨论

感谢你选择我们的产品！我们为你提供多种支持渠道，以确保你使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>