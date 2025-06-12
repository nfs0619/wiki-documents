---
description: 使用 reTerminal 和 Pi 摄像头结合 OpenCV 进行目标跟踪
title: 使用 reTerminal 和 Pi 摄像头结合 OpenCV 进行目标跟踪
keywords:
  - Edge
  - reTerminal 
  - piCamera
  - OpenCV
  - 目标跟踪
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal_DM_Face-tracking
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 简介

目标跟踪是指在视频的连续帧中持续定位特定目标的过程。在单目标跟踪器的领域中，初始帧作为参考，目标对象由一个边界矩形标记。随后，跟踪算法会在后续帧中跟踪并追踪目标的移动。通常，这些跟踪器会与目标检测器结合使用，在实际应用中结合两者的优势以提高准确性和效率。

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/facetrack.gif" /></center>

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-piCam/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

### 软件准备

我们推荐从官方网站安装 **Bullseye** 或 **Bookworm** 版本的 Raspberry Pi 64 位操作系统。如果您希望安装新的 Raspbian 操作系统，请按照此 [**指南**](https://wiki.seeedstudio.com/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc) 中的步骤操作。

:::note

我们强烈建议您查看我们之前的教程 [**OpenCV 入门**](https://wiki.seeedstudio.com/reTerminal_DM_opencv/)，因为本教程是我们系列教程的延续。

:::

## 跟踪 vs. 检测

在之前的 wiki 中，我们介绍了[**人脸检测**](https://wiki.seeedstudio.com/reTerminal_DM_Face_detection/)和[**颜色检测**](https://wiki.seeedstudio.com/reTerminal_DM_Color_detection/)，但注意到它们的间歇性特性。以下是一个快速比较：

1. **速度优势：**
跟踪比检测更快。通过利用前一帧的数据，跟踪算法可以预测对象的位置，而检测算法通常在每一帧中从头开始。
2. **处理失败：**
如果人脸检测器因遮挡而失败，跟踪算法表现出色。它们可以处理部分遮挡，在检测不足时提供更强的性能。
3. **身份持续性：**
对象检测提供检测对象的矩形框，但缺乏身份持续性。跟踪在保持跨帧的一致对象身份方面表现出色，这对于许多现实世界的应用至关重要。

## 跟踪领域有哪些算法？

以下是一些主要的对象跟踪算法及其优缺点：

**BOOSTING**
- 优点：简单且实时。对于一致的运动表现良好。
- 缺点：在复杂的运动模式和遮挡情况下表现较差。
- 速度：快。
- 准确性：中等。

**MIL (多实例学习)**
- 优点：在处理遮挡和对象外观变化方面效果显著。
- 缺点：可能对噪声和背景杂乱敏感。
- 速度：中等。
- 准确性：良好。

**KCF (核相关滤波器)**
- 优点：高速度性能。对尺度变化具有鲁棒性。
- 缺点：对对象离开视野的情况敏感。
- 速度：快。
- 准确性：中等到高。

**TLD (跟踪、学习和检测)**
- 优点：自我更新并能够重新检测丢失的对象。
- 缺点：容易漂移，可能在快速运动情况下表现困难。
- 速度：中等。
- 准确性：中等。

**MEDIANFLOW**
- 优点：在处理突然的运动变化和遮挡方面表现出色。
- 缺点：可能在对象外观发生显著变化时表现困难。
- 速度：快。
- 准确性：中等。

**MOSSE (最小输出平方误差)**
- 优点：极快，适合实时应用。
- 缺点：在复杂条件下鲁棒性有限。
- 速度：非常快。
- 准确性：中等。

**CSRT (通道和空间可靠性跟踪器)**
- 优点：高准确性，对复杂场景具有鲁棒性。
- 缺点：计算成本较高。
- 速度：中等。
- 准确性：高。

## 运行代码

确保您处于正确的文件夹。如果不是，请执行以下命令：

 ```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam

 ```
然后，或者您也可以使用 Thonny IDE 来运行 Python 脚本。

 ```sh
python Tracking.py
 ```

上述 Python 脚本旨在跟踪人脸。以下代码片段处理跟踪失败的情况，系统会启动新的检测过程，反之亦然。

 ```sh
python DetectandTrack.py
 ```

 ## 技术支持

感谢您选择我们的产品！我们为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>