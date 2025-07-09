---
description: 本文档演示了在 reComputer R1000 上使用 YOLOv8 进行目标检测，并结合 Raspberry-pi-AI-kit 加速。
title:  在 reComputer R1000 上使用 Hailo-8L 进行 YOLOv8 目标检测
keywords:
  - Edge
  - reComputer r1000
  - 目标检测
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l
last_update:
  date: 05/15/2025
  author: Jiahao

no_comments: false # for Disqus
---

# 在 reComputer R1000 上使用 Hailo-8L 进行 YOLOv8 目标检测

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 简介

[YOLOv8](https://github.com/ultralytics/ultralytics)（You Only Look Once 第 8 版）是 YOLO 系列中最受欢迎的实时目标检测模型。它在前几代的基础上，通过引入多项改进，在速度、准确性和灵活性方面表现出色。[Raspberry-pi-AI-kit](https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html) 用于加速推理速度，其核心是基于 Hailo-8L 芯片的 13 TOPS 神经网络推理加速器。

本文档演示了在 [reComputer R1000](https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html) 上使用 YOLOv8 进行目标检测，包括使用和不使用 Raspberry-pi-AI-kit 加速的两种方式。Raspberry Pi AI Kit 提升了 Raspberry Pi 的性能，并释放了其在人工智能和机器学习应用中的潜力，例如智能零售、智能交通等。尽管 Raspberry AI Kit 是为 Raspberry Pi 5 设计的，我们在基于 CM4 的边缘网关上进行了实验。期待将我们的边缘设备转变为智能物联网网关！

## 准备硬件

<div class="table-center">
	<table align="center">
	<tr>
		<th>reComputer r1000</th>
		<th>Raspberry Pi AI Kit</th>
	</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991274-recomputer-r1025-10-0.jpg" style={{width:600, height:'auto'}}/></div></td>
	  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113060086-raspberry-pi-ai-kit-45font.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## 运行此项目

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Method 1" label="使用 Hailo-8L 运行">

### 第 1 步：安装 AI Kit 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/install_AIkit.gif" alt="pir" width={1000} height="auto"/></p>

### 第 2 步：更新系统并将 PCIe 设置为 Gen3

#### 更新系统

在 reComputer R1000 上打开终端，输入以下命令以更新系统。

```
sudo apt update
sudo apt full-upgrade
```
#### 将 PCIe 设置为 Gen3

在 reComputer R1000 上打开终端，输入以下命令以配置 reComputer R1000。

```
sudo raspi-config
```

选择选项 "6 Advanced Options"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step1.png" alt="pir" width={1000} height="auto"/></p>

然后选择选项 "A8 PCIe Speed"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step2.png" alt="pir" width={1000} height="auto"/></p>

选择 "Yes" 以启用 PCIe Gen 3 模式

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step3.png" alt="pir" width={1000} height="auto"/></p>

点击 "Finish" 退出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step4.png" alt="pir" width={1000} height="auto"/></p>

### 第 3 步：安装 Hailo 软件并验证安装

#### 安装 Hailo 软件

在 reComputer R1000 上打开终端，输入以下命令以安装 Hailo 软件。

```
sudo apt install hailo-all
sudo reboot
```
#### 检查软件和硬件

在 reComputer R1000 上打开终端，输入以下命令以检查是否已安装 hailo-all。

```
hailortcli fw-control identify
```

正确的结果如下所示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png" alt="pir" width={1000} height="auto"/></p>


在 reComputer R1000 上打开终端，输入以下命令以检查是否已连接 hailo-8L。

```
lspci | grep Hailo
```

正确的结果如下所示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png" alt="pir" width={1000} height="auto"/></p>

### 运行 YOLOv8

在 reComputer R1000 上打开终端，输入以下命令以运行 YOLOv8。

```
git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git
cd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L
bash ./run.sh object-detection-hailo
```
### 结果

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/object_detection_with_AIkit.gif" alt="pir" width={1000} height="auto"/></p>
</TabItem>

<TabItem value="Method 2" label="不使用 Hailo-8L 运行">

### 运行 YOLOv8

在 reComputer R1000 上打开终端，输入以下命令以运行 YOLOv8。

```
git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git
cd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L
bash ./run.sh object-detection
```
### 结果

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/object_detection_withoutAIkit.gif" alt="pir" width={1000} height="auto"/></p>
</TabItem>
</Tabs>


## 结果

我们对使用 AI 套件加速前后，YOLOv8 在 640*640 分辨率输入下进行目标检测的推理速度进行了比较。结果显示，在加速之前，推理速度仅为 0.75 FPS，而加速之后，推理速度达到了 29.5 FPS。

<div align="center">
<iframe width="800" height="400" src="https://www.youtube.com/embed/yZ0IlqLZ86E" title="YOLOv8 Object Detection on reComputer R1000(CM4-Powered Edge Gateway) with Hailo-8L" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 项目展望

在本项目中，我们对 YOLOv8 在使用和不使用 AI 套件情况下的目标检测运行速度进行了基准测试。结果表明，AI 套件可以显著提升边缘设备的性能。未来，我们将对 YOLOv8 在不同场景下的运行速度进行基准测试，包括语义分割和姿态估计 AI 套件加速后的性能。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时拥有顺畅的体验。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>