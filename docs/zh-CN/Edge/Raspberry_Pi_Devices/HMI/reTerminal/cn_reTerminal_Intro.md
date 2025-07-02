---
description: reTerminal 指南
title: reTerminal 指南
keywords:
- reRouter
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal_Intro
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/New/reTerminal_new.jpg" style={{width:800, height:'auto'}}/></div>

## 开始使用 reTerminal

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>开始使用 reTerminal</font></th>
      <th class="table-trnobg"><font size={"4"}>硬件和接口使用</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/reterminal.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/hw-overview-internal-v1.3.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 我们将在本 Wiki 中讨论如何在 reTerminal 设备上安装操作系统，提供逐步的操作指南，并涵盖驱动程序的安装。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本 Wiki 介绍了 reTerminal 上的各种硬件组件和接口，例如 GPIO、CSI 摄像头接口、内置传感器、LCD 显示屏等。它将指导您如何利用这些功能来扩展您的项目创意。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-hardware-interfaces-usage/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reTerminal 和 Pi 摄像头模块</font></th>
      <th class="table-trnobg"><font size={"4"}>reTerminal 扩展板 - reTerminal E10-1</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/cam_images.jpg" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/expansion.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 在本 Wiki 中，我们将讨论如何安装 Pi 摄像头并进行配置的逐步说明。这些初始步骤对于使用 Seeed Studio reTerminal 设备启动您的目标检测项目至关重要。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> reTerminal E10-1 扩展板为 reTerminal 增强了可充电功能、改进的无线通信、工业数据传输和音频功能。这使得 reTerminal 更加坚固，适用于高速工业、农业或增强型无线家庭应用。让我们深入了解 Wiki 的详细内容。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-piCam/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminalBridge/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

## 操作系统安装

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Raspbian OS 或 Ubuntu</font></th>
      <th class="table-trnobg"><font size={"4"}>Buildroot</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/URPi.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/build.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本维基将指导您完成 Raspberry Pi OS 和 Ubuntu 的安装过程。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Buildroot 是一个用户友好的工具，旨在通过交叉编译简化和自动化嵌入式系统完整 Linux 系统的构建过程。在本维基中，我们将深入探讨 Buildroot 的安装过程。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-Buildroot-SDK/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Yocto</font></th>
      <th class="table-trnobg"><font size={"4"}>Stream-pi 和 OBS Studio</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/yocto-wiki-thumb.jpg" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/12.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Yocto 项目是一个开源协作计划，帮助开发者为嵌入式产品创建基于 Linux 的定制系统，无论硬件架构如何。在本维基中，我们将探讨 Yocto 的安装过程。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Stream-Pi 是一个强大的宏键盘软件，是一个具有可定制 UI 的开源替代方案。OBS Studio 是一个免费开源的应用程序，支持实时捕获和流媒体。现在让我们探索它们的安装过程。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-Yocto/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Streampi_OBS_On_reTerminal/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

## 应用

### 嵌入式机器学习应用

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">在 reTerminal 上入门 MediaPipe</th>
      <th class="table-trnobg">在 reTerminal 上入门 TensorFlow Lite</th>
      <th class="table-trnobg">使用 Edge Impulse 和 reTerminal 进行目标检测</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/mediapipeadd.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/ml/emotion/emotions.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/edgeimpulse.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>在本 Wiki 中，我们深入探讨了 MediaPipe，这是 Google 提供的一个开源框架，用于构建多模态和跨平台的应用机器学习管道，并针对设备端推理进行了优化。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本 Wiki 提供了关于 TFlite 和各种应用的见解。TensorFlow Lite 是一组工具，旨在实现设备端机器学习，使开发者能够在移动设备、嵌入式设备和物联网设备上运行模型。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>在本 Wiki 中，我们探讨了使用 Edge Impulse 和 reTerminal 进行目标检测。Edge Impulse 使开发者能够使用真实世界的数据创建和优化嵌入式机器学习解决方案。让我们深入了解细节。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal_ML_MediaPipe/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal_ML_TFLite/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal_ML_Edgeimpulse/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

### 计算机视觉

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">使用 OpenCV 在 reTerminal 和 Pi 摄像头上入门</th>
      <th class="table-trnobg">使用 OpenCV 在 reTerminal 和 Pi 摄像头上进行人脸检测</th>
      <th class="table-trnobg">使用 reTerminal 和 Pi 摄像头进行目标检测</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/videostream.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/facedetection.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/objectdetection2.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>在本指南中，我们将集成 Raspberry Pi 摄像头，通过 Python 代码片段捕获视频流，并实现按键保存图像的功能。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>在本指南中，我们将探索使用 Haar Cascade 方法进行人脸检测，这是一种利用机器学习模型识别人脸特征的关键技术。我们将特别关注如何在 reTerminal 上结合 Raspberry Pi 摄像头实现这一功能。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本指南探讨了如何利用 Raspberry Pi 摄像头和 reTerminal，通过基于 COCO 数据集的预训练 EfficientNet 模型检测大约 90 种目标。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal_DM_opencv/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal_DM_Face_detection/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal_DM_Object_detection/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>
    
  <div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">使用 reTerminal Pi 摄像头和 OpenCV 进行颜色检测</th>
      <th class="table-trnobg">使用 reTerminal Pi 摄像头和 OpenCV 进行目标跟踪</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/colordetect.gif" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/facetrack.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>颜色检测是计算机视觉的核心组成部分，涉及识别和分析数字图像或视频中的颜色。在本 Wiki 中，我们将解释如何处理颜色并检测它们。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>当检测失败时，可以实现跟踪功能。探索算法并了解跟踪的优势。Seeed Studio Wiki 提供了全面的指南。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal_DM_Color_detection/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal_DM_Face-tracking/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

### Home Assistant

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
    <th class="table-trnobg">在 reTerminal 上开始使用 Home Assistant</th>
    <th class="table-trnobg">如何自定义 Home Assistant</th>
      <th class="table-trnobg">Frigate 与 reTerminal 的集成</th>
      </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home-Assistant/3.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home-Assistant/105.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate2.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>在本 Wiki 中，我们将逐步指导您如何使用 reTerminal 将普通的房屋变成智能家居。最终，您将在 reTerminal 的 LCD 上拥有一个美观的仪表板，可以轻松控制家用电器并访问传感器数据。让我们开始吧！</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本 Wiki 将逐步指导您如何通过必要的配置构建仪表板，以及如何使用 Home Assistant 附带的一些重要插件。让我们开始吧！</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Frigate 是一个开源的 NVR，专为实时 AI 目标检测而设计。所有处理都在您的硬件上本地完成，确保您的摄像头视频流保持在家中。本 Wiki 将指导您安装 NVR 并展示其目标检测功能。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal_Home_Assistant/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-Home-Assistant-Customize/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reterminal_frigate/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

### 创建强大的用户界面

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
    <th class="table-trnobg">使用 Python 的 Qt for reTerminal</th>
    <th class="table-trnobg">Flutter for reTerminal</th>
      <th class="table-trnobg">Electron for reTerminal</th>
      </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Qt-Demo.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/smart_home_demo.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/electron-reterminal-hw-demo.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本 Wiki 解释了如何在 reTerminal 上使用 Python 的 Qt 构建您自己的用户界面。这里我们使用了 PySide2 进行开发。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本 Wiki 指导您如何使用 Flutter 构建自己的用户界面。Flutter 是 Google 提供的开源 UI 软件开发工具包，支持通过单一代码库进行 Android、iOS、Linux、Mac、Windows、Google Fuchsia 和 Web 的跨平台应用开发。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本 Wiki 指导您如何使用 Electron 构建自己的用户界面。Electron 是一个开源框架，用于使用 HTML、CSS 和 JavaScript 等 Web 技术创建原生桌面应用程序（Windows、Mac、Linux）。如果您可以构建网站，那么您也可以构建桌面应用程序！</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-build-UI-using-Qt-for-Python/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-build-UI-using-Flutter/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-build-UI-using-Electron/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>
    <br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
    <th class="table-trnobg">LVGL 用于 reTerminal</th>
    <th class="table-trnobg">使用 Grafana 构建您的天气 仪表盘</th>
      </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl_reterminal.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124164221791.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>LVGL 提供了构建嵌入式 GUI 所需的基本功能，包括用户友好的图形元素、惊艳的视觉效果以及极小的内存占用。这款图形库专为资源有限的微控制器设计。在本篇 Wiki 文章中，我们将使用带有 SDL2 的 PC 模拟器示例，并进行一些小的修改以全屏显示 UI，而不是在窗口中显示。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 感谢 </font><strong><font color={'8DC215'} size={"2"}>Michaelm Klementsk.</font></strong><br /><font size={"2"}> 在本篇 Wiki 中，我们将使用 ESP32 收集温度、湿度和气压数据，并将其发送到托管在云服务器上的 InfluxDB 时间序列数据库。最后，我们将使用 Grafana 可视化并分析这些数据。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-build-UI-using-LVGL/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/weather-dashboard-with-Grafana-reTerminal/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

## 杂项

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reTerminal 安装选项</font></th>
      <th class="table-trnobg"><font size={"4"}>在 reTerminal 上安装 Mender 客户端</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Mount_Options/9.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/mender.png" style={{width:300, height:'auto'}}/></div></td>
				</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 在本节中，我们将探讨 reTerminal 的安装解决方案，包括硬件螺钉规格和社区设计方面的内容。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本篇 Wiki 解释了如何在 reTerminal 上设置 Mender 客户端，以从托管或自托管的 Mender 服务器接收 OTA 更新。指南重点介绍了使用通过 Yocto 项目编译的自定义 Linux 系统的 reTerminal。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal_Mount_Options/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Mender-Client-reTerminal/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
    </tr>
	</table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/banner.png" style={{width:1000, height:'auto'}}/></div> 
<table>
	<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/raspberry-pi"><strong><span><font color={'FFFFFF'} size={"4"}>🔍 探索更多</font></span></strong></a></div></td>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/raspberry-pi-devices/"><strong><span><font color={'FFFFFF'} size={"4"}>🔙 返回 Pi 设备</font></span></strong></a></div></td>
		</tr>
	</table>

## ✨ 贡献者项目

- 我们为更新此页面制定了一个任务列表，该任务被归类在我们的[贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)中，因为我们致力于通过改进我们的 Wiki 平台来增强用户体验并提供更好的支持。
- [您对本页面的贡献](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33963038)对我们来说至关重要！我们非常重视您的意见，并非常感谢您为我们提供创意支持。

## 常见问题解答 (FAQ)

- [如何解决 reTerminal 黑屏问题](https://wiki.seeedstudio.com/reterminal_black_screen)
- [如何将 Raspberry Pi OS/64 位 Ubuntu OS 或其他操作系统刷入 eMMC](https://wiki.seeedstudio.com/flash_different_os_to_emmc)
- [通过 Wi-Fi/以太网使用 SSH 登录 Raspberry Pi OS/++Ubuntu OS 或其他操作系统](https://wiki.seeedstudio.com/log_rpios_use_ssh_over_wifi_ethernet)
- [了解更多](https://wiki.seeedstudio.com/reTerminal-new_FAQ/)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>