---
description: 使用 A1102 训练 AI
title: 使用 SenseCraft AI 在 SenseCAP A1102 上部署 AI 模型
keywords:
- Sensor Vision_AI_V2
- SenseCAP A1102
- SenseCraft AI
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/20.webp
slug: /cn/train_ai_with_a1102
last_update:
  date: 05/15/2025
  author: Zeke
sidebar_position: 2
# sidebar_class_name: hidden
---

# 使用 SenseCraft AI 在 SenseCAP A1102 上部署 AI 模型

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

SenseCAP A1102 是一款强大的传感器设备，结合了先进的 AI 功能和便捷的部署方式。本指南将逐步引导您使用 **SenseCraft AI** 应用在 A1102 上部署 AI 模型，包括配对、配置和测试的详细步骤。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/20.jpg" style={{width:800, height:'auto'}}/></div>


## **开始使用 SenseCAP A1102**

### **什么是 SenseCAP A1102？**
SenseCAP A1102 是一款专为边缘 AI 应用设计的智能摄像传感器。它配备了 8GB 内存，能够：
- 部署自定义 AI 模型。
- 自动保存识别的图像。
- 实现高精度的实时识别。

### **需求**
开始之前，请确保您拥有以下设备和工具：
- SenseCAP A1102 设备。
- 已安装在智能手机上的 **SenseCraft AI** 应用。
- 用于部署的任何预训练 AI 模型。

## **配置 SenseCAP A1102**

### 启动 Vision AI 摄像头

:::tip
如果您需要修改 AI 摄像头设置，请按照以下步骤启动 AI 摄像头。

如果您只需要修改 LoRaWAN 传输相关设置，可以跳过此部分。
:::

根据以下说明，将 Type-C 接口连接到 A1102 和您的计算机。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/power_up_camera.png" style={{width:700, height:'auto'}}/></div>

如果连接正确，您会看到两个指示灯亮起。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/check_indicators.png" style={{width:400, height:'auto'}}/></div>

### **访问高级设置**

在底部导航栏中选择“用户”，然后点击“设备蓝牙配置”。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/step1.png" style={{width:400, height:'auto'}}/></div>

滑动到底部并选择“SenseCAP A1102”。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/step2.png" style={{width:400, height:'auto'}}/></div>

长按 SenseCAP A1102 的电源按钮 **三秒钟**以启用配对模式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/11.png" style={{width:400, height:'auto'}}/></div>

配对完成后，在 SenseCraft AI 应用中点击 **高级设置**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/1.png" style={{width:400, height:'auto'}}/></div>

再次点击 **高级设置**，进入其他配置选项。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/2.png" style={{width:400, height:'auto'}}/></div>

## **部署 AI 模型**

### **选择 AI 模型**
从设置菜单中选择您想要部署的 AI 模型。可以选择预加载的模型，也可以上传自定义模型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/3.png" style={{width:400, height:'auto'}}/></div>

### **配置模型参数**

设置以下参数：
- **置信度水平**：调整目标识别的阈值（例如，80% 的置信度）。
- **保存识别的图像**：启用或禁用将识别的图像保存到存储卡。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/5.png" style={{width:400, height:'auto'}}/></div>


## **测试和运行模型**

### **预览摄像头捕获**
部署模型后，可直接在应用程序中预览摄像头捕获的图像，以确保模型正常工作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/7.png" style={{width:400, height:'auto'}}/></div>

### **查看设备信息**
返回应用程序主页，检查 A1102 的设备信息，例如模型状态、连接情况等。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/18.png" style={{width:400, height:'auto'}}/></div>

### **查看识别结果**
查看识别数据和日志。例如，可以设置报告间隔（例如每 5 分钟）来跟踪识别的目标。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/11.jpg" style={{width:400, height:'auto'}}/></div>


### **访问 SD 卡**
找到 A1102 单元上的缝隙，轻轻插入螺丝刀。施加一点力将其撬开。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/8.jpg" style={{width:400, height:'auto'}}/></div>

找到四个螺丝孔并旋转旋钮将其打开。确保在旋转时施加均匀的压力，以确保螺丝松动。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/9.jpg" style={{width:400, height:'auto'}}/></div>

当螺丝松开后，移除盖子以访问 SD 卡插槽。然后可以取出 SD 卡读取其中存储的信息。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/A1102_10.jpg" style={{width:400, height:'auto'}}/></div>

### **自动保存图像**
A1102 配备 8GB 内部存储，可自动将识别的图像保存到存储卡中。稍后可以访问并提取这些图像用于分析或报告。

:::tip
A1102 配备 8GB 内存，当目标被识别时，能够自动将图像保存到存储卡中。当我们需要访问这些图像信息时，可以直接从存储卡中提取并访问所需的图像数据。
:::

## **技术支持与产品讨论**

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>