---
description: 入门指南 SenseCAP Vision AI V2
title: 入门指南 SenseCAP Vision AI V2
keywords:
- SenseCAP A1102 - LoRaWAN® Vision AI 传感器
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/top.webp
slug: /cn/sensecap_a1102
last_update:
  date: 05/15/2025
  author: Zeke
sidebar_position: 1
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/A1102_shop.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-A1102-LoRaWAN-Vision-AI-Sensor-p-6347.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 简介

本地运行 TinyML AI 模型，仅通过 LoRaWAN®（863-928MHz）传输推理结果，以增强隐私性和能效。设备支持 480×480 分辨率和 10 FPS，预装了三种模型：人体检测、人数统计和仪表读数。此外，通过 [SenseCraft AI](https://sensecraft.seeed.cc/ai/#/home) 平台，无需编程即可访问 300+ 预训练模型或进行自定义模型训练。设备还支持从 [TensorFlow Lite](https://www.tensorflow.org/) 和 [PyTorch](https://pytorch.org/) 框架部署模型。用户可以通过 [SenseCraft App](https://sensecap-mate-download.seeed.cn/) 配置设备和频段，并将 IP66 级传感器部署在恶劣的室内或室外环境中。内置电池，非常适合需要远距离通信的各种 AI 应用场景。

## 特性
- **先进的边缘 AI 摄像头**：配备强大的基于 MCU 的视觉摄像头处理器，可在 480×480 分辨率下以 10 FPS 进行本地推理。仅传输推理结果，确保数据隐私并最大限度减少网络带宽使用。

- **无代码 AI 模型部署与训练**：预装三种设备端 AI 模型（人体检测、人数统计和仪表读数），即开即用。原生集成 SenseCraft AI，一个基于 Web 的平台，提供 300+ 预训练模型用于即时部署，并支持简单的三步训练工作流，用于分类和检测模型。这使得无需编程技能即可快速完成模型训练和部署。此外，设备还支持从 TensorFlow 和 PyTorch 框架转换的自定义 AI 模型进行边缘部署。

- **LoRaWAN® 连接**：支持全球频段（863-928 MHz），在最佳条件下传输范围可达 10 公里，实现可靠的远距离通信。

- **两种供电选项与电池寿命**：配备 19Ah SOCl2 D 型电池，同时兼容通过可选接线盒的外部直流电源供电。

- **IP66 级环境耐久性**：具备 IP66 级防护，防止灰尘进入和强水流喷射。在 0°C 至 70°C 的温度范围内可靠运行，适用于多种室内和室外部署场景。

- **SenseCraft 云集成**：包括 SenseCraft Mate 移动应用和 Web 门户，用于轻松配置设备、管理设备和快速数据可视化。支持开放 API，并提供 3 个月免费试用，兼容第三方物联网平台。

## 规格

<table align="center">
	<tr>
	    <th>产品型号</th>
        <th>SenseCAP A1102</th>
	</tr>
	<tr>
	    <th>微控制器</th>
        <td align="center">
        <strong>视觉 AI:</strong>Himax-6538 <br></br> 
        <strong>LoRaWAN 网络:</strong>Wio-E5 (STM32WLE5JC)<br></br>
        <strong>蓝牙:</strong> XIAO ESP32C3<br></br></td>
	</tr>
    <tr>
        <th>摄像头</th>
        <td align="center">
            <strong>模块:</strong>OV5647<br />
            <strong>镜头尺寸:</strong>1/4"<br />
            <strong>焦距:</strong>3.4 mm（可调）<br />
            <strong>分辨率:</strong> 2592 × 1944 像素<br />
            <strong>像素大小:</strong> 1.4 µm × 1.4 µm<br />
            <strong>最大帧率:</strong> 1080p @ 30 fps, 720p @ 60 fps<br />
            <strong>视场角 (FOV):</strong>62°
        </td>
    </tr>
    <tr>
	    <th>模型执行与推理</th>
        <th>480 * 480  >10 fps</th>	
    </tr>
    <tr>
        <th>LoRaWAN® 传输</th>
        <td align="center">
        <strong>协议:</strong> LoRaWAN v1.0.3 Class A<br />
        <strong>LoRaWAN® 频率:</strong> IN865/EU868/US915/AU915/ AS923<br />
        <strong>通信距离:</strong> 2 至 10 公里（取决于环境）<br />
        <strong>最大发射功率:</strong> 19dBm<br />
        </td>
    </tr>
    <tr>
        <th>电源</th>
        <td align="center">
        内置电池或 DC 12V/1A（通过外部接线盒连接）
        </td>
    </tr>
	<tr>
	    <th>功耗</th>
        <th>102mA</th>
	</tr>
	<tr>
	      <th>电池</th>
        <td align="center">
        <strong>容量:</strong> 19Ah（不可充电）<br />
        <strong>类型:</strong> 标准 D 型 SOCl2 电池<br />
        </td>
	</tr>
	<tr>
	    <th>本地存储内存</th>
        <th>8GB MicroSD 卡（Class 10），可存储多达 20,000 张带时间戳的图像，并支持导出</th>
	</tr>
	<tr>
	    <th>防护等级</th>
        <th>IP66</th>
	</tr>
	<tr>
	    <th>工作温度</th>
        <th>0-70 °C</th>
	</tr>
	<tr>
	    <th>工作湿度</th>
        <th>0-100% RH（无冷凝）</th>
	</tr>
	<tr>
	    <th>线缆长度</th>
        <th>2 米</th>
	</tr>
	<tr>
	    <th>设备重量</th>
        <th>719g</th>
	</tr>
	<tr>
	    <th>设备尺寸</th>
        <td align="center">
        <strong>摄像头:</strong>180mm*75mm*70mm<br />
        <strong>DTU: </strong> 144.5mm*63mm*57mm<br />
        </td>
	</tr>
</table>

## 电源选项
- 选项 1: SenseCAP A1102 使用内置的 19Ah D 型 Li-SOCl2 电池以循环模式运行。该电池可在市面上轻松购买，便于更换，并支持无需外部电源的独立户外部署。

- 选项 2: SenseCAP A1102 支持通过 12V DC 电源连接进行持续运行。需要额外匹配的接线盒以便于安装和组装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/39.png" style={{width:900, height:'auto'}}/></div>

## 硬件概览
- 板载照片

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/38.png" style={{width:900, height:'auto'}}/></div>



## 连接到 LoRaWAN®
LoRaWAN®（长距离广域网）是一种无线通信协议，专为物联网（IoT）设备与网关之间的低功耗、长距离通信而设计。它使用工业、科学和医疗（ISM）频段中的免许可无线电频谱，通常在欧洲为 868 MHz，美国为 915 MHz。LoRaWAN® 提供了一种低成本、节能的解决方案，用于在长距离范围内连接物联网设备。该技术支持设备与网关之间的双向通信，并支持多种数据速率以适应不同类型的应用。

## 如何选择网关和 LoRaWAN®
在使用传感器时需要 LoRaWAN® 网络覆盖，有以下两种选择。
![p21](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/4.png)

## 如何使用传感器
除了直接连接到计算机以查看实时检测数据外，您还可以通过 LoRaWAN® 传输这些数据，最终将其上传到 [SenseCAP 云平台](https://sensecap.seeed.cc/) 或第三方云平台。在 SenseCAP 云平台上，您可以循环查看数据，并通过手机或计算机以图形方式显示数据。SenseCAP 云平台和 SenseCAP Mate App 使用相同的账户系统。

由于我们在此的重点是描述模型训练过程，因此不会详细介绍云平台的数据展示。但如果您感兴趣，可以随时访问 SenseCAP 云平台，尝试添加设备并查看数据。这是更好地了解平台功能的绝佳方式！

![p22](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/11.png)


## 常见问题解答

**图像捕获的理想相机设置是什么？**

- 对于 500 万像素的相机，建议在 1 米到 5 米的范围内捕获图像，以获得最佳图像质量。在图像捕获过程中，请确保相机直接面对目标，光线充足（无眩光或过曝），并避免明显的运动或振动。

**SenseCAP Vision AI 相机可以在多远的范围内检测物体并获得良好结果？**

- 根据我们使用人体检测模型的测试，相机在 1 米到 5 米的范围内可以实现 70% 的置信度。

**是否可以更换相机或定制版本的 SenseCAP Vision AI 传感器？**

- 可以，如果您有大批量需求，请通过 sensecap@seeed.cc 联系我们。


## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>