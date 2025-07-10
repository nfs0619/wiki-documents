---
description: 将您自己的 AI 模型训练并部署到 SenseCAP A1101
title: 将您自己的 AI 模型训练并部署到 SenseCAP A1101
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Train-Deploy-AI-Model-A1101
last_update:
  date: 05/15/2025
  author: Yvonne
---

# 将您自己的 AI 模型训练并部署到 SenseCAP A1101

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 概述

在本篇 Wiki 中，我们将教您如何为您的特定应用训练自己的 AI 模型，然后轻松将其部署到 SenseCAP A1101 - LoRaWAN Vision AI Sensor。让我们开始吧！

:::caution **注意：**
我们当前的设备固件与 [EI](https://wiki.seeedstudio.com/One-Stop-Model-Training-with-Edge-Impulse/) 兼容。如果您是在 **2023年3月30日**之后购买的设备，则需要将设备刷回[默认固件](https://wiki.seeedstudio.com/Train-Deploy-AI-Model-A1101/#change-device-firmware-after-image-collection)，以便按照本篇 Wiki 操作。
:::

## 硬件介绍

在本篇 Wiki 中，我们将主要使用 SenseCAP A1101 - LoRaWAN Vision AI Sensor。因此，首先让我们熟悉一下这款硬件。

[SenseCAP A1101 - LoRaWAN Vision AI Sensor](https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html) 将 TinyML AI 技术与 LoRaWAN 长距离传输相结合，为户外使用提供了一种低功耗、高性能的 AI 设备解决方案。该传感器采用 Himax 的高性能、低功耗 AI 视觉解决方案，支持 Google TensorFlow Lite 框架和多个 TinyML AI 平台。不同的模型可以实现不同的 AI 功能，例如害虫检测、人数统计、物体识别。用户可以采用 Seeed 提供的模型，通过 AI 训练工具生成自己的模型，或者从 Seeed 的合作伙伴模型提供商处采购可部署的商业模型。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/60.jpg"/></div>

## 软件介绍

在本篇 Wiki 中，我们将使用以下软件技术：

- Roboflow - 用于标注
- YOLOv5 - 用于训练
- TensorFlow Lite - 用于推理

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/57.png"/></div>

### 什么是 Roboflow？

[Roboflow](https://roboflow.com) 是一个基于在线的标注工具。该工具允许您轻松标注所有图像，对这些图像进行进一步处理，并将标注后的数据集导出为不同格式，例如 YOLOV5 PyTorch、Pascal VOC 等！Roboflow 还提供了公共数据集，供用户使用。

### 什么是 YOLOv5？

YOLO 是 “You Only Look Once”（你只需看一次）的缩写。它是一种实时检测和识别图像中各种对象的算法。Ultralytics [YOLOv5](https://ultralytics.com/yolov5) 是基于 PyTorch 框架的 YOLO 版本。

### 什么是 TensorFlow Lite？

[TensorFlow Lite](https://www.tensorflow.org/lite) 是一个开源的、产品级的、跨平台的深度学习框架，它将 TensorFlow 中的预训练模型转换为一种特殊格式，可以针对速度或存储进行优化。这种特殊格式的模型可以部署到边缘设备，例如使用 Android 或 iOS 的手机，或者基于 Linux 的嵌入式设备（如 Raspberry Pi 或微控制器），以在边缘进行推理。

## Wiki 结构

本 Wiki 将分为三个主要部分：

1. [使用公共数据集训练您自己的 AI 模型](https://wiki.seeedstudio.com/Train-Deploy-AI-Model-A1101#1-train-your-own-ai-model-with-a-public-dataset)
2. [使用您自己的数据集训练您自己的 AI 模型](https://wiki.seeedstudio.com/Train-Deploy-AI-Model-A1101#2-train-your-own-ai-model-with-your-own-dataset)
3. [将训练好的 AI 模型部署到 SenseCAP A1101](https://wiki.seeedstudio.com/Train-Deploy-AI-Model-A1101#3-deploy-the-trained-model-and-perform-inference)

第一部分是通过最少的步骤快速构建您自己的 AI 模型的最快方法。第二部分需要一些时间和精力来构建您自己的 AI 模型，但这将是非常值得的学习过程。关于部署 AI 模型的第三部分可以在完成第一部分或第二部分后进行。

因此，有两种方式可以遵循本 Wiki：

1. 按照 [第一部分](https://wiki.seeedstudio.com/Train-Deploy-AI-Model-A1101#1-train-your-own-ai-model-with-a-public-dataset) 然后是 [第三部分](https://wiki.seeedstudio.com/Train-Deploy-AI-Model-A1101#3-deploy-the-trained-model-and-perform-inference) - 快速上手

2. 按照 [第二部分](https://wiki.seeedstudio.com/Train-Deploy-AI-Model-A1101#2-train-your-own-ai-model-with-your-own-dataset) 然后是 [第三部分](https://wiki.seeedstudio.com/Train-Deploy-AI-Model-A1101#3-deploy-the-trained-model-and-perform-inference) - 需要更多时间

然而，我们建议首先按照第一种方式，然后再转向第二种方式。

## 1. 使用公共数据集训练您自己的 AI 模型

对象检测项目的第一步是获取用于训练的数据。您可以下载公开可用的数据集，也可以创建自己的数据集！

但是，开始对象检测的最快和最简单的方法是什么？嗯……使用公共数据集可以节省您自己收集和标注数据所需的大量时间。这些公共数据集已经预先标注好，让您有更多时间专注于您的 AI 视觉应用。

### 硬件准备

- SenseCAP A1101 - LoRaWAN 视觉 AI 传感器
- USB Type-C 数据线
- 具有互联网连接的 Windows/ Linux/ Mac 设备

### 软件准备

- 无需准备额外的软件

### 使用公开可用的标注数据集

您可以下载许多公开可用的数据集，例如 [COCO 数据集](https://cocodataset.org)、[Pascal VOC 数据集](http://host.robots.ox.ac.uk/pascal/VOC) 等。[Roboflow Universe](https://universe.roboflow.com) 是一个推荐的平台，它提供了广泛的数据集，并且拥有 [90,000+ 数据集和 66+ 百万张图像](https://blog.roboflow.com/computer-vision-datasets-and-apis)，可用于构建计算机视觉模型。此外，您还可以简单地在 Google 上搜索 **开源数据集**，并从各种可用数据集中进行选择。

- **步骤 1.** 访问 [此 URL](https://universe.roboflow.com/lakshantha-dissanayake/apple-detection-5z37o/dataset/1) 以访问 Roboflow Universe 上公开可用的 Apple Detection 数据集

- **步骤 2.** 点击 **Create Account** 创建一个 Roboflow 账户

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/53.png"/></div>

- **步骤 3.** 点击 **Download**，选择 **YOLO v5 PyTorch** 作为 **Format**，点击 **show download code** 并点击 **Continue**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/51.png"/></div>

这将生成一个代码片段，我们稍后将在 Google Colab 训练中使用它。因此，请将此窗口保持打开状态。

<div align="center"><img width="{700}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/52.png"/></div>

### 在 Google Colab 上使用 YOLOv5 进行训练

在选择了公共数据集之后，我们需要对数据集进行训练。在这里，我们使用 Google Colaboratory 环境在云端进行训练。此外，我们在 Colab 中使用 Roboflow API 来轻松下载数据集。

点击 [这里](https://colab.research.google.com/github/Seeed-Studio/yolov5-swift/blob/master/tutorial.ipynb) 打开一个已经准备好的 Google Colab 工作区，按照工作区中提到的步骤逐一运行代码单元。

**注意：** 在 Google Colab 中，在 **步骤 4** 的代码单元中，您可以直接从 Roboflow 复制上述提到的代码片段。

它将引导您完成以下内容：

- 设置训练环境
- 下载数据集
- 执行训练
- 下载训练好的模型

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/18.png"/></div>

对于一个包含 699 张图像的苹果检测数据集，在运行于 NVIDIA Tesla T4 GPU（16GB GPU 内存）的 Google Colab 上，训练过程大约需要 7 分钟。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/43.png"/></div>

如果您按照上述 Colab 项目操作，您会发现可以一次性加载 4 个模型到设备中。然而，请注意一次只能加载一个模型。这可以由用户指定，稍后将在本 Wiki 中进行解释。

### 部署和推理

如果您想直接跳到 **第三部分**，了解如何将训练好的 AI 模型部署到 SenseCAP A1101 并执行推理，[点击这里](https://wiki.seeedstudio.com/Train-Deploy-AI-Model-A1101/#3-deploy-the-trained-model-and-perform-inference)。

## 2. 使用您自己的数据集训练 AI 模型

如果您想构建特定的目标检测项目，而公共数据集中没有您想要检测的目标，那么您可能需要构建自己的数据集。在为自己的数据集录制数据时，您需要确保覆盖目标的所有角度（360 度），并将目标放置在不同的环境、不同的光照条件和不同的天气条件下。录制完自己的数据集后，您还需要对数据集中的图像进行标注。本节将涵盖所有这些步骤。

尽管有多种数据收集方法，例如使用手机摄像头，但使用 SenseCAP A1101 内置摄像头是收集数据的最佳方式。这是因为在 SenseCAP A1101 上进行推理时，颜色、图像质量和其他细节会保持一致，从而使整体检测更加准确。

### 硬件准备

- SenseCAP A1101 - LoRaWAN 视觉 AI 传感器
- USB Type-C 数据线
- 具有互联网连接的 Windows/Linux/Mac 电脑

### 软件准备

现在让我们设置软件。Windows、Linux 和 Intel Mac 的软件设置相同，而 M1/M2 Mac 的设置会有所不同。

#### Windows、Linux、Intel Mac

- **步骤 1.** 确保计算机上已安装 Python。如果尚未安装，请访问 [此页面](https://www.python.org/downloads/) 下载并安装最新版本的 Python。

- **步骤 2.** 安装以下依赖项：

```sh
pip3 install libusb1
```

#### M1/M2 Mac

- **步骤 1.** 安装 Homebrew：

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- **步骤 2.** 安装 conda：

```sh
brew install conda
```

- **步骤 3.** 下载 libusb：

```sh
wget https://conda.anaconda.org/conda-forge/osx-arm64/libusb-1.0.26-h1c322ee_100.tar.bz2
```

- **步骤 4.** 安装 libusb：

```sh
conda install libusb-1.0.26-h1c322ee_100.tar.bz2
```

:::caution
在执行以下操作之前，您需要确保 BootLoader 版本大于 2.0.0。如果不确定，请按照 [此部分](#check-bootloader-version) 中提到的步骤检查 BootLoader 版本。如果版本低于 2.0.0，请按照 [此部分](#update-bootloader) 中提到的步骤更新 BootLoader。
:::

### 收集数据集

- **步骤 1.** 使用 USB Type-C 数据线将 SenseCAP A1101 连接到 PC。

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/38.png"/></div>

- **步骤 2.** 双击启动按钮进入 **boot 模式**。

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/39.png"/></div>

完成后，您将在文件资源管理器中看到一个名为 **SENSECAP** 的新存储驱动器。

<div align="center"><img width="{280}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"/></div>

- **步骤 3.** 将 [此 .uf2 文件](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v1.1.0/sensecap_ai_capture_firmware_v01-00.uf2) 拖放到 **SENSECAP** 驱动器中。

当 .uf2 文件复制完成后，驱动器将消失。这意味着 .uf2 文件已成功上传到模块。

- **步骤 4.** 将 [此 Python 脚本](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/blob/master/tools/capture_images_script.py) 复制并粘贴到 PC 上新创建的名为 **capture_images_script.py** 的文件中。

- **步骤 5.** 执行 Python 脚本以开始捕获图像：

```sh
python3 capture_images_script.py
```

默认情况下，它每 300 毫秒捕获一张图像。如果您想更改此设置，可以以以下格式运行脚本：

```sh
python3 capture_images_script.py --interval <time_in_ms>
```

例如，每秒捕获一张图像：

```sh
python3 capture_images_script.py --interval 1000
```

执行上述脚本后，SenseCAP A1101 将开始连续从内置摄像头捕获图像，并将所有图像保存到名为 **save_img** 的文件夹中。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/41.png"/></div>

同时，它将在录制时打开一个预览窗口。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/40.jpg"/></div>

当您捕获了足够的图像后，点击终端窗口并按以下键组合停止捕获过程：

- Windows: Ctrl + Break
- Linux: Ctrl + Shift + \
- Mac: CMD + Shift + \

### 图像采集后更改设备固件

完成数据集图像录制后，您需要确保将 SenseCAP A1101 内的固件更改回原始版本，以便再次加载目标检测模型进行检测。以下是步骤：

- **步骤 1.** 按照之前的说明进入 SenseCAP A1101 的 **Boot 模式**。

- **步骤 2.** 将 [此 .uf2 文件](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v1.1.0/sensecap_ai_v01-30.uf2) 拖放到 **SENSECAP** 驱动器中。

当 .uf2 文件复制完成后，驱动器将消失。这意味着 .uf2 文件已成功上传到模块。

### 使用 Roboflow 标注数据集

如果您使用自己的数据集，则需要对数据集中的所有图像进行标注。标注的意思是简单地在我们想要检测的每个目标周围绘制矩形框并为其分配标签。我们将解释如何使用 Roboflow 来完成此操作。

[Roboflow](https://roboflow.com) 是一个基于在线的标注工具。在这里，我们可以直接将录制的视频导入到 Roboflow 中，它会将其导出为一系列图像。这个工具非常方便，因为它可以帮助我们将数据集分为“训练、验证和测试”部分。此外，该工具还允许我们在标注后对这些图像进行进一步处理。此外，它可以轻松地将标注后的数据集导出为 **YOLOV5 PyTorch 格式**，这正是我们所需要的！

在本教程中，我们将使用包含苹果的图像数据集，以便后续可以检测苹果并进行计数。

- **步骤 1.** 点击[这里](https://app.roboflow.com/login)注册一个 Roboflow 账户

- **步骤 2.** 点击 **Create New Project** 来开始我们的项目

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/2.jpg"/></div>

- **步骤 3.** 填写 **Project Name**，保持 **License (CC BY 4.0)** 和 **Project type (Object Detection (Bounding Box))** 为默认值。在 **What will your model predict?** 栏目中，填写一个注释组名称。例如，在我们的案例中，我们选择 **apples**。这个名称应该突出数据集中的所有类别。最后，点击 **Create Public Project**。

<div align="center"><img width="{350}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/6.jpg"/></div>

- **步骤 4.** 拖放您使用 SenseCAP A1101 捕获的图像

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/7.png"/></div>

- **步骤 5.** 图像处理完成后，点击 **Finish Uploading**。耐心等待图像上传完成。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/4.jpg"/></div>

- **步骤 6.** 图像上传完成后，点击 **Assign Images**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/5.jpg"/></div>

- **步骤 7.** 选择一张图像，在苹果周围画一个矩形框，选择标签为 **apple**，然后按 **ENTER**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/9.png"/></div>

- **步骤 8.** 对其余的苹果重复相同的操作

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/10.png"/></div>

**注意：** 尽量标注图像中看到的所有苹果。如果只有部分苹果可见，也请尝试标注。

- **步骤 9.** 继续为数据集中的所有图像进行标注

Roboflow 提供了一个名为 **Label Assist** 的功能，它可以提前预测标签，从而加快标注速度。然而，这个功能并不适用于所有对象类型，而是针对特定类型的对象。要启用此功能，只需按下 **Label Assist** 按钮，**选择一个模型**，**选择类别**，然后浏览图像以查看带有边界框的预测标签。

<div align="center"><img width="{200}" src="https://files.seeedstudio.com/wiki/YOLOV5/41.png"/></div>

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/YOLOV5/39.png"/></div>

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/YOLOV5/40.png"/></div>

如上所示，它只能帮助预测上述 80 个类别的注释。如果您的图像不包含上述对象类别，则无法使用 Label Assist 功能。

- **步骤 10.** 标注完成后，点击 **Add images to Dataset**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/25.jpg"/></div>

- **步骤 11.** 接下来，我们将图像分为 "Train, Valid 和 Test"。保持默认的分配百分比，然后点击 **Add Images**

<div align="center"><img width="{330}" src="https://files.seeedstudio.com/wiki/YOLOV5/26.png"/></div>

- **步骤 12.** 点击 **Generate New Version**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/27.jpg"/></div>

- **步骤 13.** 现在，您可以根据需要添加 **Preprocessing** 和 **Augmentation**。这里我们将 **Resize** 选项更改为 **192x192**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/11.png"/></div>

<div align="center"><img width="{450}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/13.png"/></div>

这里我们将图像大小更改为 192x192，因为我们将在训练中使用该大小，这样训练速度会更快。否则，在训练过程中需要将所有图像转换为 192x192，这会消耗更多的 CPU 资源并减慢训练速度。

- **步骤 14.** 接下来，保持其余默认设置并点击 **Generate**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/14.png"/></div>

- **步骤 15.** 点击 **Export**，选择 **Format** 为 **YOLO v5 PyTorch**，选择 **show download code**，然后点击 **Continue**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/54.png"/></div>

这将生成一个代码片段，我们稍后将在 Google Colab 训练中使用。因此，请将此窗口保持打开状态。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/55.png"/></div>

### 使用 YOLOv5 在 Google Colab 上进行训练

完成数据集标注后，我们需要对数据集进行训练。跳转到[此部分](https://wiki.seeedstudio.com/Train-Deploy-AI-Model-A1101/#train-using-yolov5-on-google-colab)，了解如何使用 YOLOv5 在 Google Colab 上运行 AI 模型训练。

## 3. 部署训练好的模型并进行推理

现在我们将训练结束后获得的 **model-1.uf2** 文件移动到 SenseCAP A1101 中。

- **步骤 1.** 安装最新版本的 [Google Chrome](https://www.google.com/chrome) 或 [Microsoft Edge 浏览器](https://www.microsoft.com/en-us/edge?r=1) 并打开它

- **步骤 2.** 使用 USB Type-C 数据线将 SenseCAP A1101 连接到您的电脑

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/38.png"/></div>

- **步骤 3.** 双击 SenseCAP A1101 上的启动按钮以进入大容量存储模式

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/39.png"/></div>

完成后，您将在文件资源管理器中看到一个新的存储驱动器，显示为 **SENSECAP**

<div align="center"><img width="{280}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"/></div>

- **步骤 4.** 将 **model-1.uf2** 文件拖放到 **SENSECAP** 驱动器中

当 uf2 文件完成复制到驱动器后，驱动器将消失。这意味着 uf2 文件已成功上传到模块。

**注意：** 如果您有 4 个模型文件准备好，可以逐个拖放每个模型。先拖放第一个模型，等待复制完成后，再次进入启动模式，拖放第二个模型，以此类推。如果您仅加载了一个模型（索引为 1）到 SenseCAP A1101 中，它将加载该模型。

- **步骤 5.** 打开 **SenseCAP Mate App**。如果您没有该应用，请根据您的操作系统下载并安装到您的手机上

  - [Android](https://play.google.com/store/apps/details?id=cc.seeed.sensecapmate&hl=zh&gl=US)
  - [iOS](https://apps.apple.com/gb/app/sensecap-mate/id1619944834)

- **步骤 6.** 打开应用，在 **Config** 屏幕下选择 **Vision AI Sensor**

<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/21.jpg"/></div>

- **步骤 7.** 长按 SenseCAP A1101 上的配置按钮 3 秒钟以进入蓝牙配对模式

<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/37.png"/></div>

- **步骤 8.** 点击 **Setup**，它将开始扫描附近的 SenseCAP A1101 设备

<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/23.jpg"/></div>

- **步骤 9.** 点击找到的设备

<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/24.jpg"/></div>

- **步骤 10.** 进入 **Settings** 并确保选择了 **Object Detection**。如果没有，请选择它并点击 **Send**

<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/25.jpg"/></div>

- **步骤 11.** 进入 **General** 并点击 **Detect**

<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/26.jpg"/></div>

- **步骤 12.** [点击这里](https://files.seeedstudio.com/grove_ai_vision/index.html) 打开摄像头流的预览窗口

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/31.png"/></div>

- **步骤 13.** 点击 **Connect** 按钮。然后您将在浏览器上看到一个弹出窗口。选择 **SenseCAP Vision AI - Paired** 并点击 **Connect**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/32.png"/></div>

- **步骤 14.** 使用预览窗口查看实时推理结果！

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/33.jpg"/></div>

如上图所示，苹果被检测到并在周围绘制了边界框。这里的“0”对应于同一类别的每次检测。如果您有多个类别，它们将被命名为 0、1、2、3、4 等。此外，每个检测到的苹果的置信度分数（如上演示中的 0.8 和 0.84）也会显示出来！

## 附加内容

如果你想更具冒险精神，可以继续阅读本 Wiki 的其余部分！

### 我可以在我的电脑上训练 AI 模型吗？

你也可以使用自己的电脑来训练一个目标检测模型。然而，训练性能将取决于你的硬件配置。此外，你需要一台运行 Linux 操作系统的电脑来进行训练。在本 Wiki 中，我们使用的是 Ubuntu 20.04 系统的电脑。

- **步骤 1.** 克隆 **yolov5-swift 仓库**并在 **Python>=3.7.0** 环境中安装 **requirements.txt**

```sh
git clone https://github.com/Seeed-Studio/yolov5-swift
cd yolov5-swift
pip install -r requirements.txt
```

- **步骤 2.** 如果你之前按照本 Wiki 的步骤操作过，你可能还记得我们在 Roboflow 中标注后导出了数据集。此外，在 Roboflow Universe 中，我们下载了数据集。在这两种方法中，都有一个如下所示的窗口，询问你要以何种格式下载数据集。因此，现在请选择 **download zip to computer**，在 **Format** 下选择 **YOLO v5 PyTorch**，然后点击 **Continue**。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/16.png"/></div>

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/17.png"/></div>

之后，一个 **.zip 文件** 将会下载到你的电脑上。

- **步骤 3.** 将我们下载的 .zip 文件复制并粘贴到 **yolov5-swift** 目录中并解压

```sh
# 示例
cp ~/Downloads/Apples.v1i.yolov5pytorch.zip ~/yolov5-swift
unzip Apples.v1i.yolov5pytorch.zip
```

- **步骤 4.** 打开 **data.yaml** 文件并编辑 **train** 和 **val** 目录如下

```sh
train: train/images
val: valid/images
```

- **步骤 5.** 下载一个适合我们训练的预训练模型

```sh
sudo apt install wget
wget https://github.com/Seeed-Studio/yolov5-swift/releases/download/v0.1.0-alpha/yolov5n6-xiao.pt
```

- **步骤 6.** 执行以下命令开始训练

在这里，我们可以传递多个参数：

- **img:** 定义输入图像的大小
- **batch:** 确定批量大小
- **epochs:** 定义训练的轮数
- **data:** 设置 yaml 文件的路径
- **cfg:** 指定模型配置
- **weights:** 指定权重的自定义路径
- **name:** 结果名称
- **nosave:** 仅保存最终的检查点
- **cache:** 缓存图像以加快训练速度

```sh
python3 train.py --img 192 --batch 64 --epochs 100 --data data.yaml --cfg yolov5n6-xiao.yaml --weights yolov5n6-xiao.pt --name yolov5n6_results --cache
```

对于一个包含 987 张图像的苹果检测数据集，在一台配备 NVIDIA GeForce GTX 1660 Super GPU（6GB 显存）的本地电脑上，训练过程大约耗时 30 分钟。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/44.png"/></div>

如果你按照上述 Colab 项目操作，你会知道设备可以一次加载 4 个模型。然而，请注意一次只能加载一个模型。这可以由用户指定，稍后将在本 Wiki 中解释。

- **步骤 7.** 如果你导航到 `runs/train/exp/weights`，你会看到一个名为 **best.pt** 的文件。这是训练生成的模型。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/YOLOV5/33.jpg"/></div>

- **步骤 8.** 将训练好的模型导出为 TensorFlow Lite 格式

```sh
python3 export.py --data {dataset.location}/data.yaml --weights runs/train/yolov5n6_results/weights/best.pt --imgsz 192 --int8 --include tflite
```

- **步骤 9.** 将 TensorFlow Lite 转换为 UF2 文件

UF2 是一种由微软开发的文件格式。Seeed 使用这种格式将 .tflite 转换为 .uf2，从而允许 tflite 文件存储在 Seeed 推出的 AIoT 设备上。目前，Seeed 的设备最多支持 4 个模型，每个模型（.tflite）小于 1M。

你可以通过 `-t` 指定模型放置在相应的索引位置。

例如：

- `-t 1`: 索引 1
- `-t 2`: 索引 2

```sh
# 将模型放置在索引 1
python3 uf2conv.py -f GROVEAI -t 1 -c runs//train/yolov5n6_results//weights/best-int8.tflite -o model-1.uf2
```

尽管你可以一次将 4 个模型加载到设备中，但请注意一次只能加载一个模型。这可以由用户指定，稍后将在本 Wiki 中解释。

- **步骤 10.** 现在，一个名为 **model-1.uf2** 的文件将被生成。这就是我们将加载到 SenseCAP A1101 模块中以执行推理的文件！

## 检查 BootLoader 版本
- 双击 BOOT 按钮并等待可移动驱动器挂载
- 打开可移动驱动器中的 INFO_UF2.TXT 文件
<div align="center"><img width="{600}" src="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/raw/master/assert/q2.png"/></div>

## 更新 BootLoader

如果您的 SenseCAP A1101 无法被电脑识别并且没有显示端口号，则可能需要更新 BootLoader。

- **步骤 1**. 在 Windows 电脑上下载 BootLoader `.bin` 文件。

请通过以下链接下载最新版本的 BootLoader 文件。BootLoader 的名称通常为 `tinyuf2-sensecap_vision_ai_vx.x.x.bin`。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载固件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

这是控制 BL702 芯片的固件，该芯片负责建立电脑与 Himax 芯片之间的连接。最新版本的 BootLoader 已修复 Vision AI 无法被 Mac 和 Linux 识别的问题。

- **步骤 2**. 下载并打开 [**BLDevCube.exe**](https://files.seeedstudio.com/wiki/Grove_AI_Module/BouffaloLabDevCube-1.6.6-win32.rar) 软件，选择 **BL702/704/706**，然后点击 **Finish**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI01a.png" style={{width:300, height:'auto'}}/></div>

- **步骤 3**. 点击 **View**，首先选择 **MCU**。然后移动到 **Image file**，点击 **Browse** 并选择刚刚下载的固件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/1.png" style={{width:800, height:'auto'}}/></div>

- **步骤 4**. 确保没有其他设备连接到电脑。然后按住模块上的 Boot 按钮，将其连接到电脑。

- **步骤 5**. 回到电脑上的 BLDevCube 软件，点击 **Refresh** 并选择一个合适的端口。然后点击 **Open UART**，将 **Chip Erase** 设置为 **True**，接着点击 **Create&Program**，等待过程完成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI07.png" style={{width:800, height:'auto'}}/></div>

## 资源

- **[网页]** [YOLOv5 文档](https://docs.ultralytics.com)

- **[网页]** [Ultralytics HUB](https://ultralytics.com/hub)

- **[网页]** [Roboflow 文档](https://docs.roboflow.com)

- **[网页]** [TensorFlow Lite 文档](https://www.tensorflow.org/lite/guide)

- **[PDF]** [SenseCAP A1101 LoRaWAN 视觉 AI 传感器规格书](https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_spec.pdf)

- **[PDF]** [SenseCAP A1101 LoRaWAN 视觉 AI 传感器用户指南](https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_LoRaWAN_Vision_AI_Sensor_User_Guide_V1.0.2.pdf)

- **[PDF]** [SenseCAP S210X LoRaWAN 传感器目录](https://files.seeedstudio.com/products/114992867/SenseCAP%20S210X%20LoRaWAN%20Sensor%20Catalogue.pdf)

- **[PDF]** [SenseCAP A1101 LoRaWAN 视觉 AI 传感器常见问题解答](https://files.seeedstudio.com/wiki/SenseCAP-A1101/FAQ_for_SenseCAP_A1101_LoRaWAN_AI_Vision_Sensor_v1.0.0.pdf)

## 技术支持与产品讨论

 <br />

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得流畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>