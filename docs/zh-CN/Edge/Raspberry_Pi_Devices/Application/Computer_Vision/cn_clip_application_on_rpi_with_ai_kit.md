---
description: 本文档演示如何在带有 AI 套件的 Raspberry Pi 5 上使用 CLIP。
title: 在带有 AI 套件的 Raspberry Pi 上运行 CLIP 应用
keywords:
  - Edge
  - reComputer r1000
  - 目标检测
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/clip_application_on_rpi5_with_ai_kit
last_update:
  date: 05/15/2025
  author: Jiahao

no_comments: false # 用于 Disqus
---

# 在带有 AI 套件的 Raspberry Pi 上运行 CLIP 应用

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 简介

[CLIP](https://github.com/openai/CLIP)（对比语言-图像预训练）是一种在多种（图像，文本）对上训练的神经网络。它可以通过自然语言指令，在不直接针对任务优化的情况下，根据图像预测最相关的文本片段，类似于 GPT-2 和 GPT-3 的零样本能力。我们发现 CLIP 在 ImageNet 的“零样本”任务中表现与原始 ResNet50 相当，而无需使用原始的 128 万标注样本，从而克服了计算机视觉中的几个主要挑战。

本文档将教您如何在 [Raspberry Pi5](https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html) 或 [Recomputer r1000](https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html) 上部署 CLIP 应用，CLIP 将在 [AI 套件](https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html) 上进行推理。

## 准备硬件

### 对于 Recomputer R1000

<div class="table-center">
	<table align="center">
	<tr>
		<th>reComputer r1000</th>
		<th>Raspberry Pi AI 套件</th>
	</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991274-recomputer-r1025-10-0.jpg" style={{width:600, height:'auto'}}/></div></td>
	  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113060086-raspberry-pi-ai-kit-all.jpg" style={{width:600, height:'auto'}}/></div></td>
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

### 对于 Raspberry Pi 5

<div class="table-center">
	<table align="center">
	<tr>
		<th>reComputer AI R2130</th>
	</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## 安装 Hailo 软件并验证安装

### 更新系统：

```
sudo apt update
sudo apt full-upgrade
```

:::note
有时在更新过程中可能会遇到以下问题。
```
Get:1 http://deb.debian.org/debian bookworm InRelease [151 kB]
Get:2 http://deb.debian.org/debian-security bookworm-security InRelease [48.0 kB]
Get:3 http://deb.debian.org/debian bookworm-updates InRelease [55.4 kB]
Get:4 http://archive.raspberrypi.com/debian bookworm InRelease [39.0 kB]
Reading package lists... Done                                   
E: Release file for http://deb.debian.org/debian/dists/bookworm/InRelease is not valid yet (invalid for another 58d 8h 26min 35s). Updates for this repository will not be applied.
E: Release file for http://deb.debian.org/debian-security/dists/bookworm-security/InRelease is not valid yet (invalid for another 84d 18h 23min 59s). Updates for this repository will not be applied.
E: Release file for http://archive.raspberrypi.com/debian/dists/bookworm/InRelease is not valid yet (invalid for another 84d 13h 13min 5s). Updates for this repository will not be applied.
E: Release file for http://deb.debian.org/debian/dists/bookworm-updates/InRelease is not valid yet (invalid for another 85d 0h 52min 29s). Updates for this repository will not be applied.	
```
这是因为 Raspberry Pi 的时间设置不正确，需要使用以下命令手动设置 Raspberry Pi 的时间：
```
# 此命令仅在您可以连接到 google.com 时使用
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"
```
设置好 Raspberry Pi 的时间后，您可以更新 Raspberry Pi。
:::

### 将 PCIe 设置为 gen2/gen3（gen3 比 gen2 更快）：

在 ```/boot/firmware/config.txt``` 中添加以下文本：

```
#启用 PCIe 外部连接器

dtparam=pciex1

#强制使用 Gen 3.0 速度

dtparam=pciex1_gen=3

```
:::note
如果您想使用 gen2，请注释掉 dtparam=pciex1_gen=3。
:::

### 安装 hailo-all 并重启：

在 Raspberry Pi5 上打开终端，输入以下命令以安装 Hailo 软件。

```
sudo apt install hailo-all
sudo apt-get -y install libblas-dev nlohmann-json3-dev
sudo reboot
```
### 检查软件和硬件：

在 Raspberry Pi5 上打开终端，输入以下命令以检查是否已安装 hailo-all。

```
hailortcli fw-control identify
```

正确的结果如下所示：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png" alt="pir" width={1000} height="auto"/></p>

在 Raspberry Pi5 上打开终端，输入以下命令以检查是否已连接 hailo-8L。

```
lspci | grep Hailo
```

正确的结果如下所示：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png" alt="pir" width={1000} height="auto"/></p>

## 运行项目

### 安装项目

```
git clone https://github.com/hailo-ai/hailo-CLIP.git
cd hailo-CLIP
python3 -m pip install -v -e .
```

### 运行项目
输入以下命令，您将看到一个 clip 演示：
```
 clip_app --input demo
```
如果您想使用自己的摄像头，请确保 Raspberry Pi 已连接您的摄像头后输入以下命令：
```
clip_app --input /dev/video0
```

## 结果

在下面的视频中，你可以看到，当我输入“香蕉”时，CLIP模型识别出香蕉；当我输入“苹果”时，模型识别出苹果。你只需要输入不同的单词，CLIP模型就会识别出不同的物体。

<iframe width="800" height="400" src="https://www.youtube.com/embed/JMHtqSmAGCA" title="CLIP Zero Shot Classification on Raspberry Pi 5 with Hailo AI Accelerator" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时拥有尽可能顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>