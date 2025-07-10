---
description: 从 SenseCraft 部署 AI 模型到 Watcher
title: 为 Watcher 训练模型
image: "https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/top3.png"
slug: /cn/training_model_for_watcher
last_update:
  date: 05/15/2025
  author: Jason
sidebar_position: 2
---

# 为 Watcher 训练模型

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/top3.png" style={{width:1000, height:'auto'}}/></div>

这篇 WiKi 文章将教您如何使用我们的 SenseCraft 训练自己的 AI 模型并将其部署到我们的 Watcher 上。这将是一个非常有趣的过程。如果您还不知道什么是 SenseCraft，请点击[这里](https://sensecraft.seeed.cc/)。这是一个允许我们在 Seeed Studio 设备上部署各种开源 AI 模型的平台。

## 在 SenseCraft 网站上设置 AI 模型

### 第 1 步：打开 [SenseCraft](https://sensecraft.seeed.cc/) 网站

点击顶部菜单栏中的“Products”以查看下拉选项，然后选择“SenseCraft AI”。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/1.png" style={{width:800, height:'auto'}}/></div>

### 第 2 步：设置训练类型

:::tip
**_我们推荐使用 Grove Vision AI (V2) 从摄像头采集训练数据，因为 Watcher 使用与 Grove Vision AI V2 相同的芯片（Arm Cortex-M55），因此选择 Grove Vision AI V2 来训练 Watcher 的模型是最佳选择。用于拍照的设备直接影响最终的准确性。_**
:::

为了方便，这里使用电脑摄像头来采集数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/2.png" style={{width:800, height:'auto'}}/></div>

### 第 3 步：采集数据

**训练步骤**

- 添加类别
- 修改您的类别标签
- 在您选择的类别中点击“Hold to Record”
- 选择 Grove Vision AI(V2)
- 开始训练

在“Collect Classification Data”中，您可以添加所需的类别。在这里，我添加了“car”和“doll”作为我的类别并修改了标签。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/3.png" style={{width:800, height:'auto'}}/></div>

:::tip
采集的数据越多，像素越清晰，训练结果会越好。
:::

训练完成后，您需要点击“Click here”标签下的“Start Training”。

### 第 4 步：选择模型

训练完成后，您可以看到您的模型文件。

- 点击您的模型文件
- 点击“Save to SenseCraft”

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/4.png" style={{width:800, height:'auto'}}/></div>

### 第 5 步：描述模型

请提供您的 **模型名称**、**模型摘要**、**模型介绍**、**模型部署准备**。如果您将模型设为公开，这些信息将对所有人非常有帮助。这只是一个测试，因此内容写得比较简单。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/5(2).png" style={{width:800, height:'auto'}}/></div>

:::tip
在支持的设备中选择 SenseCAP Watcher 和 Grove-Vision AI V2。
:::

### 第 6 步：设置模型参数

您可以根据您的模型选择所需的 AI 框架。

**Confidence Threshold（置信度阈值）**
- 置信度是模型对其预测结果的确定性或概率的衡量。

- 置信度通常以百分比表示，范围从 0% 到 100%。

**IOU Threshold（IoU 阈值）**
- IoU 用于评估预测边界框与真实边界框的准确性。

- IoU 是评估目标检测模型性能的重要指标。它衡量预测边界框与实际边界框之间的重叠程度。

- 0% 表示没有重叠。
- 100% 表示完全重叠。

设置完成后，点击“Confirm”。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/6.png" style={{width:800, height:'auto'}}/></div>

返回“Pretrained Models”并点击“My Own Models”以查看您训练的模型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/7.png" style={{width:800, height:'auto'}}/></div>

## 在 SenseCraft APP 上设置 Watcher

### 第 1 步：选择您的 Watcher
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/20.jpg" style={{width:300, height:'auto'}}/></div>

### 第 2 步：找到“Manually Set Up Task”并进入
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/21.jpg" style={{width:300, height:'auto'}}/></div>

### 第 3 步：勾选“Use TinyML Model”
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/22.jpg" style={{width:300, height:'auto'}}/></div>

### 第 4 步：找到您部署的模型

输入名称或向下滚动找到您部署的 AI 模型并勾选它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/23.jpg" style={{width:300, height:'auto'}}/></div>

### 第 5 步：设置阈值和条件

置信度是模型对其预测结果的信心程度，通常表示为 0 到 1 之间的值，或 0% 到 100% 之间的百分比。例如，模型输出的置信度为 80%，表示它认为预测正确的概率为 80%。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/24.jpg" style={{width:300, height:'auto'}}/></div>

### 第 6 步：设置任务名称

设置任务名称，以便您可以直接将其发送到查看器以执行您的模型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/25.jpg" style={{width:300, height:'auto'}}/></div>

### 第 7 步：等待 Watcher 部署模型

当您选择了 AI 模型并设置了相应的参数后，您可以等待查看器下载它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/26.jpg" style={{width:500, height:'auto'}}/></div>

:::tip
在此期间，由于其他外部问题，下载可能会失败。您只需重新选择并设置参数，然后继续下载即可。
:::

## Watcher AI 模型展示

### 结果演示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/gif.gif" style={{width:500, height:'auto'}}/></div>

这是我的 AI 模型在 Watcher 上的简单展示效果，期待大家的 AI 模型在 Watcher 上大放异彩！

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供不同的支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>