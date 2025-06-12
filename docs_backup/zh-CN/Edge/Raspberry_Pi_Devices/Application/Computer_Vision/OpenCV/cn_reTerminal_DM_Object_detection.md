---
description: 使用 reTerminal 和 Pi 摄像头进行目标检测
title: 使用 reTerminal 和 Pi 摄像头进行目标检测
keywords:
  - Edge
  - reTerminal 
  - piCamera
  - OpenCV
  - 目标检测
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal_DM_Object_detection
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/objectdetection2.gif" /></center>

## 简介

在边缘计算设备上进行目标检测已成为计算机视觉领域的一个关键方向，使设备能够自主感知并响应周围环境。**EfficientDet** 是一种先进的目标检测模型，在该领域占据重要地位。它被设计为**资源高效，能够在准确性和计算需求之间取得平衡，非常适合在处理能力有限的边缘设备上部署**。以 EfficientDet 为代表的边缘计算目标检测应用场景包括智能监控摄像头、自动驾驶车辆以及物联网 (IoT) 设备。它能够实时识别和定位多个目标，是增强边缘计算系统自主性和智能化的关键推动力。

## 开始准备

在开始这个项目之前，您需要按照以下说明提前准备好硬件和软件。

### 硬件准备

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal</th>
      <th class="table-trnobg">PiCam</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/reterminal.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam2.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html?queryID=26220f25bcce77bc420c9c03059787c0&objectID=4904&indexName=bazaar_retailer_products">
              <strong><span><font color={'FFFFFF'} size={"4"}>立即购买 🖱️</font></span></strong>
          </a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-piCam/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

### 软件准备

我们建议从 Raspberry Pi 官方网站安装 **Bullseye** 或 **Bookworm** 版本的 64 位 Raspberry Pi 操作系统。如果您希望安装新的 Raspbian 操作系统，请按照此 [**指南**](https://wiki.seeedstudio.com/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc) 中的步骤进行操作。

:::note

我们强烈建议您查看我们之前的教程 [**OpenCV 入门**](https://wiki.seeedstudio.com/reTerminal_DM_opencv/)，因为本教程是我们系列教程的延续。本指南专为 **Bullseye OS** 和 **Bookworm OS** 设计。请注意安装依赖项，因为这里列出了两种不同的方法。

:::

## TinyML

TinyML 革新了机器学习，使轻量级模型能够在资源有限的边缘设备上运行。在目标检测的背景下，TensorFlow Lite 是 TinyML 的关键框架，它优化了模型的效率，使其能够部署在微控制器和嵌入式系统等设备上。这种集成支持实时的设备端处理，例如目标识别，使得 TinyML 与 [**TensorFlow Lite**](https://www.tensorflow.org/lite) 成为智能传感器、可穿戴设备和物联网设备应用的理想选择，而无需持续的云连接。

### EfficientDet

[**EfficientDet**](https://arxiv.org/abs/1911.09070) 是一个高效且准确的目标检测模型，以其在边缘设备上的性能表现脱颖而出。EfficientDet 由 Google 开发，优化了模型的准确性与计算效率之间的平衡，使其非常适合在资源受限的环境（如边缘设备和移动平台）中部署。它采用了一种复合缩放方法，能够高效地扩展模型参数，在不牺牲速度的情况下实现更高的准确性。EfficientDet 的架构包括一个特征网络，用于有效捕获图像特征，以及一种复合缩放方法，用于平衡模型的准确性与计算效率。它的成功在于在各种目标检测基准测试中取得了令人印象深刻的性能，同时保持了轻量级结构，使其成为需要实时目标检测的边缘设备应用的首选。

## 在 Bullseye OS 中运行代码

确保您处于正确的文件夹。如果不是，请执行以下命令：

 ```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam/ObjectDetection
 ```
确保安装了依赖项和 EfficientDet 模型。如果您已经在我们的 [**第一篇教程**](https://wiki.seeedstudio.com/Getting-start-opencv/) 中完成了此步骤，则无需担心。

 ```sh
sh setup.sh
 ```
运行代码：
 ```sh
python3 detect_mod.py
 ```

## 在 BookWorm OS 中运行代码

- **步骤 1** 首先，您需要创建一个虚拟环境。

:::note

在早期的操作系统版本中，可以使用 pip（Python 包安装工具）直接在系统范围内安装 Python 库。然而，在 Bookworm 及后续版本中发生了变化。为了减少安装过程中可能出现的问题，现在需要通过 venv 在 Python 虚拟环境中安装包。

:::

逐一执行以下命令，您将创建一个虚拟环境：

 ```sh
mkdir my_project
cd my_project
python -m venv --system-site-packages env
source env/bin/activate
 ```
- **步骤 2** 接下来，将此 Git 仓库克隆到您的 Raspberry Pi 虚拟环境中，如下所示：

```sh
git clone https://github.com/Seeed-Studio/Seeed_Python_ReTerminal
 ```

- **步骤 3** 然后，使用我们的脚本轻松安装所需的 Python 包并下载 EfficientDet-Lite 模型。导航到以下文件夹：

```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam/ObjectDetection_bookworm
```

- **步骤 3** 脚本将安装所需的依赖项并下载 TFLite 模型以用于本教程系列。

```sh
sh setup.sh
```

运行代码：
 ```sh
python3 detect_picam.py
 ```

## 技术支持

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>