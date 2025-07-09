---
description: 少样本目标检测 - 数据标注、AI模型训练、AI模型部署，使用 Yolov5 和 Roboflow 在 NVIDIA Jetson 平台上实现
title: 使用 Yolov5 和 Roboflow 入门
tags:
  - 数据标注
  - AI模型训练
  - AI模型部署
  - Roboflow
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/YOLOv5-Object-Detection-Jetson
last_update:
  date: 05/15/2025
  author: w0x7ce
---

# 使用 YOLOv5 和 Roboflow 实现少样本目标检测

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 简介

[YOLO](https://docs.ultralytics.com) 是目前最著名的目标检测算法之一。它只需要**少量样本进行训练**，同时提供**更快的训练时间**和**高精度**。我们将在本教程中逐步演示这些特性，同时解释完整的机器学习流程，包括**收集数据、标注数据、训练模型，最后使用训练好的模型进行目标检测**，并在边缘设备（如 **NVIDIA Jetson 平台**）上运行训练好的模型。此外，我们还将比较使用自定义数据集和公共数据集的区别。

## 什么是 YOLOv5？

YOLO 是 “You Only Look Once”（你只需看一次）的缩写。这是一种能够实时检测和识别图像中各种目标的算法。Ultralytics 的 [YOLOv5](https://ultralytics.com/yolov5) 是 YOLO 的最新版本，现在基于 PyTorch 框架。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/YOLOv5_banner.jpg" /></div>

## 什么是少样本目标检测？

传统上，如果你想训练一个机器学习模型，你需要使用像 Pascal VOC 2012 数据集这样的公共数据集，该数据集包含大约 17112 张图像。然而，我们将使用迁移学习，通过 YOLOv5 实现少样本目标检测，这只需要非常少的训练样本。我们将在本教程中演示这一点。

## 支持的硬件

YOLOv5 支持以下硬件：

- NVIDIA 官方开发套件：

  - NVIDIA® Jetson Nano 开发套件
  - NVIDIA® Jetson Xavier NX 开发套件
  - NVIDIA® Jetson AGX Xavier 开发套件
  - NVIDIA® Jetson TX2 开发套件

- NVIDIA 官方 SoM 模块：
  
  - NVIDIA® Jetson Nano 模块
  - NVIDIA® Jetson Xavier NX 模块
  - NVIDIA® Jetson TX2 NX 模块
  - NVIDIA® Jetson TX2 模块
  - NVIDIA® Jetson AGX Xavier 模块

- Seeed 提供的载板：

  - Jetson Mate
  - Jetson SUB Mini PC
  - Jetson Xavier AGX H01 套件
  - A203 载板
  - A203（版本 2）载板
  - A205 载板
  - A206 载板

## 前置条件

- 运行最新 JetPack v4.6.1 并安装所有 SDK 组件的上述任意 Jetson 设备（安装参考 [此教程](https://wiki.seeedstudio.com/reComputer_J1020_A206_Flash_JetPack/)）

- 主机电脑

  - 本地训练需要一台 Linux 电脑（推荐使用 Ubuntu）
  - 云端训练可以在任何操作系统的电脑上进行

## 入门

在边缘设备（如 Jetson 平台）上运行你的第一个目标检测项目只需 4 个主要步骤！

1. 收集数据集或使用公开可用的数据集

    - 手动收集数据集
    - 使用公开可用的数据集

2. 使用 Roboflow 标注数据集

3. 在本地电脑或云端进行训练

    - 在本地电脑（Linux）训练
    - 在 Google Colab 上训练

4. 在 Jetson 设备上进行推理

## 收集数据集或使用公开可用的数据集

目标检测项目的第一步是获取训练所需的数据。你可以下载公开可用的数据集，也可以创建自己的数据集！通常，公开数据集用于教育和研究目的。然而，如果你想构建特定的目标检测项目，而公开数据集中没有你想检测的目标，你可能需要构建自己的数据集。

### 手动收集数据集

建议你首先录制一段包含你想识别目标的视频。你需要确保覆盖目标的所有角度（360 度），并将目标置于不同的环境、不同的光照和不同的天气条件下。
我们录制的视频总时长为 9 分钟，其中 4.5 分钟是花朵，剩下的 4.5 分钟是叶子。录制内容可以分解如下：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/pink-flowers-2.gif" /></div>

1. 早晨正常天气
2. 早晨有风天气
3. 早晨下雨天气
4. 中午正常天气
5. 中午有风天气
6. 中午下雨天气
7. 傍晚正常天气
8. 傍晚有风天气
9. 傍晚下雨天气

**注意：** 稍后我们会将这段视频转换为一系列图像，作为训练数据集。

### 使用公开可用的数据集

你可以下载许多公开可用的数据集，例如 [COCO 数据集](https://cocodataset.org)、[Pascal VOC 数据集](http://host.robots.ox.ac.uk/pascal/VOC) 等。[Roboflow Universe](https://universe.roboflow.com) 是一个推荐的平台，它提供了广泛的数据集，并且拥有 [90,000+ 数据集和 66+ 百万张图像](https://blog.roboflow.com/computer-vision-datasets-and-apis)，可用于构建计算机视觉模型。此外，你还可以简单地在 Google 上搜索 **开源数据集**，从各种可用数据集中进行选择。

## 使用 Roboflow 标注数据集

接下来，我们将开始标注数据集。标注的意思是简单地在我们想检测的每个目标周围绘制矩形框，并为它们分配标签。我们将解释如何使用 Roboflow 来完成这一任务。

[Roboflow](https://roboflow.com) 是一个基于在线的标注工具。在这里，我们可以直接将之前录制的视频导入到 Roboflow 中，它会将视频导出为一系列图像。这个工具非常方便，因为它可以帮助我们将数据集分为“训练、验证和测试”集。此外，该工具还允许我们在标注后对这些图像进行进一步处理。此外，它可以轻松地将标注好的数据集导出为 **YOLOv5 PyTorch 格式**，这正是我们所需要的！

- **步骤 1.** 点击 [这里](https://app.roboflow.com/login) 注册一个 Roboflow 账户

- **步骤 2.** 点击 **Create New Project** 来开始我们的项目

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/2.jpg" /></div>

- **步骤 3.** 填写 **Project Name**，保持 **License (CC BY 4.0)** 和 **Project type (Object Detection (Bounding Box))** 为默认值。在 **What will your model predict?** 列中填写一个注释组名称。例如，在我们的案例中，我们选择 **plants**。这个名称应该概括数据集中的所有类别。最后，点击 **Create Public Project**。

<div align="center"><img width={360} src="https://files.seeedstudio.com/wiki/YOLOV5/20.jpg" /></div>

- **步骤 4.** 拖放之前录制的视频素材

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/4.jpg" /></div>

- **步骤 5.** 选择一个帧率，将视频分割成一系列图像。这里我们使用默认帧率 **1 帧/秒**，这将生成总共 542 张图像。一旦通过滑块选择帧率，点击 **Choose Frame Rate**。根据视频长度，这个过程可能需要几秒到几分钟。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/YOLOV5/5.png" /></div>

- **步骤 6.** 图像处理完成后，点击 **Finish Uploading**。耐心等待图像上传完成。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/6.jpg" /></div>

- **步骤 7.** 图像上传完成后，点击 **Assign Images**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/YOLOV5/7.jpg" /></div>

- **步骤 8.** 选择一张图像，在一朵花周围画一个矩形框，选择标签为 **pink flower**，然后按 **ENTER**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/21.jpg" /></div>

- **步骤 9.** 对剩余的花重复相同的操作

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/22.jpg" /></div>

- **步骤 10.** 在一片叶子周围画一个矩形框，选择标签为 **leaf**，然后按 **ENTER**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/23.jpg" /></div>

- **步骤 11.** 对剩余的叶子重复相同的操作

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/24.jpg" /></div>

**注意：** 尽量标注图像中看到的所有物体。如果只有物体的一部分可见，也尽量标注。

- **步骤 12.** 继续为数据集中的所有图像进行标注

Roboflow 提供了一个名为 **Label Assist** 的功能，它可以提前预测标签，从而加快标注速度。然而，它并不适用于所有类型的物体，而是针对某些特定类型的物体。要启用此功能，只需按下 **Label Assist** 按钮，**选择一个模型**，**选择类别**，然后浏览图像以查看带有边界框的预测标签。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/YOLOV5/41.png" /></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/YOLOV5/39.png" /></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/YOLOV5/40.png" /></div>

如上所示，它只能帮助预测 80 个类别的注释。如果您的图像不包含上述类别的物体，则无法使用此功能。

- **步骤 13.** 标注完成后，点击 **Add images to Dataset**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/25.jpg" /></div>

- **步骤 14.** 接下来，我们将图像分为 "Train, Valid 和 Test"。保持默认的分配百分比，然后点击 **Add Images**

<div align="center"><img width={330} src="https://files.seeedstudio.com/wiki/YOLOV5/26.png" /></div>

- **步骤 15.** 点击 **Generate New Version**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/27.jpg" /></div>

- **步骤 16.** 现在您可以根据需要添加 **Preprocessing** 和 **Augmentation**。这里我们将 **删除** **Resize** 选项，并保持原始图像尺寸。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/28.jpg" /></div>

- **步骤 17.** 接下来，保持其余默认设置并点击 **Generate**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/29.jpg" /></div>

- **步骤 18.** 点击 **Export**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/17.jpg" /></div>

- **步骤 19.** 选择 **download zip to computer**，在 "Select a Format" 下选择 **YOLO v5 PyTorch**，然后点击 **Continue**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/YOLOV5/18.jpg" /></div>

- **步骤 20.** 之后，一个 **.zip 文件** 将下载到您的计算机。我们稍后将在训练中需要这个 .zip 文件。

## 在本地 PC 或云端训练

完成数据集标注后，我们需要对数据集进行训练。我们将介绍两种训练方法。一种是基于在线平台（Google Colab），另一种是基于本地 PC（Linux）。

对于 Google Colab 训练，我们将使用两种方法。第一种方法是使用 Ultralytics HUB 上传数据集，在 Colab 上设置训练，监控训练并获取训练好的模型。第二种方法是通过 Roboflow API 从 Roboflow 获取数据集，在 Colab 上训练并下载模型。

### 使用 Google Colab 和 Ultralytics HUB

[Ultralytics HUB](https://hub.ultralytics.com) 是一个无需编写任何代码即可训练模型的平台。只需将数据上传到 Ultralytics HUB，训练模型并将其部署到现实世界！它快速、简单且易于使用，任何人都可以轻松上手！

### 使用 Ultralytics HUB 进行训练

- **步骤 1.** 访问 [此链接](https://hub.ultralytics.com) 注册一个免费的 Ultralytics HUB 账户。

- **步骤 2.** 输入您的凭证并选择 **使用邮箱注册**，或者直接使用 **Google、GitHub 或 Apple 账户**注册。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/1.png" /></div>

登录到 Ultralytics HUB 后，您将看到如下的仪表板：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/2.png" /></div>

- **步骤 3.** 解压之前从 Roboflow 下载的压缩文件，并将其中的所有文件放入一个新文件夹中。

- **步骤 4.** 确保您的 **数据集 yaml 文件** 和 **根文件夹**（我们之前创建的文件夹）名称相同。例如，如果您将 yaml 文件命名为 **pinkflowers.yaml**，那么根文件夹应该命名为 **pinkflowers**。

- **步骤 5.** 打开 **pinkflowers.yaml** 文件并编辑 **train** 和 **val** 目录，如下所示：

```sh
train: train/images
val: valid/images
```

- **步骤 6.** 将根文件夹压缩为 **.zip** 文件，并将其命名为与根文件夹相同的名称（在此示例中为 **pinkflowers.zip**）。

现在我们已经准备好了数据集，可以上传到 Ultralytics HUB。

- **步骤 7.** 点击 **Datasets** 标签，然后点击 **Upload Dataset**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/6.jpg" /></div>

- **步骤 8.** 为数据集输入一个 **名称**，如果需要可以输入 **描述**，将我们之前创建的 .zip 文件拖放到 **Dataset** 字段中，然后点击 **Upload Dataset**。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/YOLOv5-2/24.png" /></div>

- **步骤 9.** 数据集上传后，点击数据集以查看更多数据集的详细信息。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/25.png" /></div>

- **步骤 10.** 点击 **Projects** 标签，然后点击 **Create Project**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/5.jpg" /></div>

- **步骤 11.** 为项目输入一个 **名称**，如果需要可以输入 **描述**，添加一个 **封面图片**（可选），然后点击 **Create Project**。

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/YOLOv5-2/26.png" /></div>

- **步骤 12.** 进入新创建的项目并点击 **Create Model**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/27.png" /></div>

- **步骤 13.** 输入一个 **模型名称**，选择 **YOLOv5n** 作为预训练模型，然后点击 **Next**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/28.png" /></div>

**注意：** 通常推荐使用 **YOLOv5n6** 作为预训练模型，因为它适合用于边缘设备，例如 Jetson 平台。然而，Ultralytics HUB 目前尚不支持该模型，因此我们使用 **YOLOv5n**，它是一个稍微类似的模型。

- **步骤 14.** 选择我们之前上传的数据集，然后点击 **Next**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/29.png" /></div>

- **步骤 15.** 选择 **Google Colab** 作为训练平台，然后点击 **Advanced Options** 下拉菜单。在这里我们可以更改一些训练设置。例如，我们将训练的 epoch 数从 300 改为 100，其他设置保持不变。点击 **Save**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/30.png" /></div>

**注意：** 如果您计划进行本地训练，也可以选择 **Bring your own agent**。

- **步骤 16.** 复制 **API key**，然后点击 **Open Colab**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/31.png" /></div>

- **步骤 17.** 将 **MODEL_KEY** 替换为我们之前复制的 **API key**。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/YOLOv5-2/16.jpg" /></div>

- **步骤 18.** 点击 `Runtime > Run All` 运行所有代码单元，开始训练过程。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/YOLOv5-2/17.jpg" /></div>

- **步骤 19.** 返回 Ultralytics HUB，当按钮变为蓝色时点击 **Done**。您还会看到 Colab 显示为 **Connected**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/32.png" /></div>

现在您可以在 HUB 上看到训练进度。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/33.png" /></div>

- **步骤 20.** 训练完成后，点击 PyTorch 下载训练好的模型（PyTorch 格式）。PyTorch 是我们需要的格式，用于在 Jetson 设备上进行推理。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/37.png" /></div>

**注意：** 您也可以导出为其他格式，这些格式显示在 **Formats** 下。

如果您返回 Google Colab，可以看到如下更多详细信息：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/36.png" /></div>

这里的准确率 `mAP@.5` 分别为叶子约 90% 和花朵约 99.4%，总准确率 `mAP@.5` 约为 94.7%。

---

### 使用 Google Colab 和 Roboflow API

在这里我们使用 Google Colaboratory 环境在云端进行训练。此外，我们在 Colab 中使用 Roboflow API 来轻松下载数据集。

- **步骤 1.** 点击 [这里](https://colab.research.google.com/gist/lakshanthad/645de50b7cc5870f4070b720be770f8b/yolov5-training-for-jetson.ipynb) 打开一个已经准备好的 Google Colab 工作空间，并按照工作空间中提到的步骤操作。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/82.png" /></div>

训练完成后，您将看到如下输出：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/37.png" /></div>

这里的准确率 `mAP@.5` 分别为叶子约 91.6% 和花朵约 99.4%，总准确率 `mAP@.5` 约为 95.5%。

- **步骤 2.** 在 **Files** 标签下，如果你导航到 `runs/train/exp/weights`，你会看到一个名为 **best.pt** 的文件。这是训练生成的模型。下载此文件并复制到你的 Jetson 设备，因为这是我们稍后将在 Jetson 设备上进行推理时使用的模型。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/YOLOV5/52.png" /></div>

### 使用本地 PC

这里你可以使用运行 Linux 操作系统的 PC 进行训练。我们在本教程中使用了一台 Ubuntu 20.04 的 PC。

- **步骤 1.** 克隆 **YOLOv5 仓库**并在 **Python>=3.7.0** 环境中安装 **requirements.txt**

```sh
git clone https://github.com/ultralytics/yolov5 
cd yolov5
pip install -r requirements.txt
```

- **步骤 2.** 将之前从 Roboflow 下载的 .zip 文件复制并粘贴到 **yolov5** 目录中并解压

```sh
# 示例
cp ~/Downloads/pink-flowers.v1i.yolov5pytorch.zip ~/yolov5
unzip pink-flowers.v1i.yolov5pytorch.zip
```

- **步骤 3.** 打开 **data.yaml** 文件并编辑 **train** 和 **val** 目录如下

```sh
train: train/images
val: valid/images
```

- **步骤 4.** 执行以下命令开始训练

```sh
python3 train.py --data data.yaml --img-size 640 --batch-size -1 --epoch 100 --weights yolov5n6.pt
```

由于我们的数据集相对较小（约 500 张图片），**迁移学习**预计会比从头开始训练产生更好的结果。我们的模型通过将预训练的 COCO 模型的权重名称（yolov5n6）传递给 `weights` 参数来初始化。这里我们使用 **yolov5n6**，因为它非常适合边缘设备。**图像大小**设置为 **640x640**。我们将 **batch-size** 设置为 **-1**，因为这会自动确定最佳批量大小。然而，如果出现 "GPU 内存不足" 的错误，可以选择批量大小为 **32** 或 **16**。你也可以根据自己的喜好更改 **epoch**。

训练完成后，你会看到如下输出：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/65.png" /></div>

这里的准确率 `mAP@.5` 分别为叶子约 90.6% 和花朵约 99.4%，而总准确率 `mAP@.5` 约为 95%。

- **步骤 5.** 如果你导航到 `runs/train/exp/weights`，你会看到一个名为 **best.pt** 的文件。这是训练生成的模型。将此文件复制并粘贴到你的 Jetson 设备，因为这是我们稍后将在 Jetson 设备上进行推理时使用的模型。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/YOLOV5/33.jpg" /></div>

## 在 Jetson 设备上进行推理

### 使用 TensorRT

现在我们将使用 Jetson 设备，通过之前训练生成的模型对图像进行推理（检测对象）。这里我们将使用 [NVIDIA TensorRT](https://developer.nvidia.com/tensorrt) 来提高 Jetson 平台上的推理性能。

- **步骤 1.** 访问 Jetson 设备的终端，安装 pip 并升级

```sh
sudo apt update
sudo apt install -y python3-pip
pip3 install --upgrade pip
```

- **步骤 2.** 克隆以下仓库

```sh
git clone https://github.com/ultralytics/yolov5
```

- **步骤 3.** 打开 **requirements.txt**

```sh
cd yolov5
vi requirements.txt
```

- **步骤 4.** 编辑以下行。这里你需要先按 **i** 进入编辑模式。按 **ESC**，然后输入 **:wq** 保存并退出

```sh
matplotlib==3.2.2
numpy==1.19.4
# torch>=1.7.0
# torchvision>=0.8.1
```

**注意：** 我们为 **matplotlib** 和 **numpy** 包含了固定版本，以确保运行 YOLOv5 时不会出现错误。同时，暂时排除了 torch 和 torchvision，因为它们稍后会被安装。

- **步骤 5.** 安装以下依赖项

```sh
sudo apt install -y libfreetype6-dev
```

- **步骤 6.** 安装必要的包

```sh
pip3 install -r requirements.txt
```

- **步骤 7.** 安装 torch

```sh
cd ~
sudo apt-get install -y libopenblas-base libopenmpi-dev
wget https://nvidia.box.com/shared/static/fjtbno0vpo676a25cgvuqc1wty0fkkg6.whl -O torch-1.10.0-cp36-cp36m-linux_aarch64.whl
pip3 install torch-1.10.0-cp36-cp36m-linux_aarch64.whl
```

- **步骤 8.** 安装 torchvision

```sh
sudo apt install -y libjpeg-dev zlib1g-dev
git clone --branch v0.9.0 https://github.com/pytorch/vision torchvision
cd torchvision
sudo python3 setup.py install 
```

- **步骤 9.** 克隆以下仓库

```sh
cd ~
git clone https://github.com/wang-xinyu/tensorrtx
```

- **步骤 10.** 将之前训练生成的 **best.pt** 文件复制到 **yolov5** 目录中

- **步骤 11.** 将 **tensorrtx/yolov5** 中的 **gen_wts.py** 文件复制到 **yolov5** 目录中

```sh
cp tensorrtx/yolov5/gen_wts.py yolov5
```

- **步骤 12.** 使用 **.pt** 文件从 PyTorch 生成 **.wts** 文件

```sh
cd yolov5
python3 gen_wts.py -w best.pt -o best.wts
```

- **步骤 13.** 导航到 **tensorrtx/yolov5**

```sh
cd ~
cd tensorrtx/yolov5
```

- **步骤 14.** 使用 **vi 文本编辑器** 打开 **yololayer.h**

```sh
vi yololayer.h
```

- **步骤 15.** 将 **CLASS_NUM** 更改为你的模型训练的类别数量。在我们的示例中，它是 2

```sh
CLASS_NUM = 2
```

- **步骤 16.** 创建一个新的 **build** 目录并导航到其中

```sh
mkdir build 
cd build
```

- **步骤 17.** 将之前生成的 **best.wts** 文件复制到此 **build** 目录中

```sh
cp ~/yolov5/best.wts .
```

- **步骤 18.** 编译

```sh
cmake ..
make
```

- **步骤 19.** 序列化模型

```sh
sudo ./yolov5 -s [.wts] [.engine] [n/s/m/l/x/n6/s6/m6/l6/x6 or c/c6 gd gw]
# 示例
sudo ./yolov5 -s best.wts best.engine n6
```

这里我们使用 **n6**，因为它推荐用于像 NVIDIA Jetson 平台这样的边缘设备。然而，如果你使用 Ultralytics HUB 设置训练，你只能使用 **n**，因为 HUB 尚不支持 **n6**。

- **步骤 20.** 将你希望模型检测的图像复制到一个新文件夹中，例如 **tensorrtx/yolov5/images**

- **步骤 21.** 反序列化并对图像进行推理

```sh
sudo ./yolov5 -d best.engine images
```

以下是 Jetson Nano 和 Jetson Xavier NX 上推理时间的对比。

#### Jetson Nano

这里量化设置为 FP16

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/58.png" /></div>

从上述结果中，我们可以取平均值约为 **47ms**。将此值转换为每秒帧数：1000/47 = 21.2766 = **21fps**。

#### Jetson Xavier NX

这里量化设置为 FP16

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/59.jpg" /></div>

从上述结果中，我们可以取平均值约为 **20ms**。将此值转换为每秒帧数：1000/20 = **50fps**。

此外，检测到的对象输出图像如下：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/55.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/56.jpg" /></div>

### 使用 TensorRT 和 DeepStream SDK

这里我们将使用 [NVIDIA TensorRT](https://developer.nvidia.com/tensorrt) 和 [NVIDIA DeepStream SDK](https://developer.nvidia.com/deepstream-sdk) 对视频进行推理。

- **步骤 1.** 确保您已在 Jetson 设备上正确安装了所有 **SDK 组件** 和 **DeepStream SDK**。（参考[此 Wiki](https://wiki.seeedstudio.com/Tutorial-of-A20X-Carrier-Boards) 了解安装方法）

**注意：** 推荐使用 NVIDIA SDK Manager 安装所有 SDK 组件和 DeepStream SDK。

- **步骤 2.** 访问 Jetson 设备的终端，安装 pip 并升级

```sh
sudo apt update
sudo apt install -y python3-pip
pip3 install --upgrade pip
```

- **步骤 3.** 克隆以下仓库

```sh
git clone https://github.com/ultralytics/yolov5
```

- **步骤 4.** 打开 **requirements.txt**

```sh
cd yolov5
vi requirements.txt
```

- **步骤 5.** 编辑以下行。在这里，您需要先按 **i** 进入编辑模式。按 **ESC**，然后输入 **:wq** 保存并退出。

```sh
matplotlib==3.2.2
numpy==1.19.4
# torch>=1.7.0
# torchvision>=0.8.1
```

**注意：** 我们为 **matplotlib** 和 **numpy** 包含了固定版本，以确保运行 YOLOv5 时不会出现错误。同时，暂时排除了 torch 和 torchvision，因为它们将在稍后安装。

- **步骤 6.** 安装以下依赖项

```sh
sudo apt install -y libfreetype6-dev
```

- **步骤 7.** 安装必要的软件包

```sh
pip3 install -r requirements.txt
```

- **步骤 8.** 安装 torch

```sh
cd ~
sudo apt-get install -y libopenblas-base libopenmpi-dev
wget https://nvidia.box.com/shared/static/fjtbno0vpo676a25cgvuqc1wty0fkkg6.whl -O torch-1.10.0-cp36-cp36m-linux_aarch64.whl
pip3 install torch-1.10.0-cp36-cp36m-linux_aarch64.whl
```

- **步骤 9.** 安装 torchvision

```sh
sudo apt install -y libjpeg-dev zlib1g-dev
git clone --branch v0.9.0 https://github.com/pytorch/vision torchvision
cd torchvision
sudo python3 setup.py install 
```

- **步骤 10.** 克隆以下仓库

```sh
cd ~
git clone https://github.com/marcoslucianops/DeepStream-Yolo
```

- **步骤 11.** 将 **gen_wts_yoloV5.py** 从 **DeepStream-Yolo/utils** 复制到 **yolov5** 目录

```sh
cp DeepStream-Yolo/utils/gen_wts_yoloV5.py yolov5
```

- **步骤 12.** 在 yolov5 仓库中，从 YOLOv5 发布页面下载 **pt 文件**（例如 YOLOv5s 6.1）

```sh
cd yolov5
wget https://github.com/ultralytics/yolov5/releases/download/v6.1/yolov5s.pt
```

- **步骤 13.** 生成 **cfg** 和 **wts** 文件

```sh
python3 gen_wts_yoloV5.py -w yolov5s.pt
```

**注意：** 要更改推理大小（默认：640）

```sh
-s SIZE
--size SIZE
-s HEIGHT WIDTH
--size HEIGHT WIDTH

例如 1280：
-s 1280
或
-s 1280 1280
```

- **步骤 14.** 将生成的 **cfg** 和 **wts** 文件复制到 **DeepStream-Yolo** 文件夹

```sh
cp yolov5s.cfg ~/DeepStream-Yolo
cp yolov5s.wts ~/DeepStream-Yolo
```

- **步骤 15.** 打开 **DeepStream-Yolo** 文件夹并编译库

```sh
cd ~/DeepStream-Yolo
# 对于 DeepStream 6.1
CUDA_VER=11.4 make -C nvdsinfer_custom_impl_Yolo
# 对于 DeepStream 6.0.1 / 6.0
CUDA_VER=10.2 make -C nvdsinfer_custom_impl_Yolo
```

- **步骤 16.** 根据您的模型编辑 **config_infer_primary_yoloV5.txt** 文件

```sh
[property]
...
custom-network-config=yolov5s.cfg
model-file=yolov5s.wts
...
```

- **步骤 17.** 编辑 **deepstream_app_config** 文件

```sh
...
[primary-gie]
...
config-file=config_infer_primary_yoloV5.txt
```

- **步骤 18.** 运行推理

```sh
deepstream-app -c deepstream_app_config.txt
```

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/FP32-yolov5s.gif" /></div>

上述结果是在 **Jetson Xavier NX** 上运行的，使用 **FP32** 和 **YOLOv5s 640x640**。我们可以看到 **FPS** 大约为 **30**。

#### INT8 校准

如果您想使用 INT8 精度进行推理，请按照以下步骤操作：

- **步骤 1.** 安装 OpenCV

```sh
sudo apt-get install libopencv-dev
```

- **步骤 2.** 使用 OpenCV 支持编译/重新编译 **nvdsinfer_custom_impl_Yolo** 库

```sh
cd ~/DeepStream-Yolo
# 对于 DeepStream 6.1
CUDA_VER=11.4 OPENCV=1 make -C nvdsinfer_custom_impl_Yolo
# 对于 DeepStream 6.0.1 / 6.0
CUDA_VER=10.2 OPENCV=1 make -C nvdsinfer_custom_impl_Yolo
```

- **步骤 3.** 对于 COCO 数据集，下载 [val2017](https://drive.google.com/file/d/1gbvfn7mcsGDRZ_luJwtITL-ru2kK99aK/view?usp=sharing)，解压并移动到 **DeepStream-Yolo** 文件夹。

- **步骤 4.** 为校准图像创建一个新目录

```sh
mkdir calibration
```

- **步骤 5.** 运行以下命令，从 COCO 数据集中随机选择 1000 张图像进行校准

```sh
for jpg in $(ls -1 val2017/*.jpg | sort -R | head -1000); do \
    cp ${jpg} calibration/; \
done
```

**注意：** NVIDIA 推荐至少使用 500 张图像以获得良好的准确性。在此示例中，选择了 1000 张图像以获得更高的准确性（更多图像 = 更高的准确性）。更高的 INT8_CALIB_BATCH_SIZE 值将带来更高的准确性和更快的校准速度。根据您的 GPU 内存进行设置。您可以通过 **head -1000** 设置。例如，对于 2000 张图像，使用 **head -2000**。此过程可能需要较长时间。

- **步骤 6.** 使用所有选定的图像创建 **calibration.txt** 文件

```sh
realpath calibration/*jpg > calibration.txt
```

- **步骤 7.** 设置环境变量

```sh
export INT8_CALIB_IMG_PATH=calibration.txt
export INT8_CALIB_BATCH_SIZE=1
```

- **步骤 8.** 更新 **config_infer_primary_yoloV5.txt** 文件

从

```sh
...
model-engine-file=model_b1_gpu0_fp32.engine
#int8-calib-file=calib.table
...
network-mode=0
...
```

到

```sh
...
model-engine-file=model_b1_gpu0_int8.engine
int8-calib-file=calib.table
...
network-mode=1
...
```

- **步骤 9.** 运行推理

```sh
deepstream-app -c deepstream_app_config.txt
```

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/INT8-yolov5s.gif" /></div>

上述结果是在 **Jetson Xavier NX** 上运行的，使用 **INT8** 和 **YOLOv5s 640x640**。可以看到 **FPS** 大约为 **60**。

#### 基准测试结果

下表总结了不同模型在 **Jetson Xavier NX** 上的性能表现。

<table>
<thead>
  <tr>
    <th>模型名称</th>
    <th>精度</th>
    <th>推理尺寸</th>
    <th>推理时间 (ms)</th>
    <th>FPS</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="3">YOLOv5s</td>
    <td>FP32</td>
    <td>320x320</td>
    <td>16.66</td>
    <td>60</td>
  </tr>
  <tr>
    <td>FP32</td>
    <td>640x640</td>
    <td>33.33</td>
    <td>30</td>
  </tr>
  <tr>
    <td>INT8</td>
    <td>640x640</td>
    <td>16.66</td>
    <td>60</td>
  </tr>
  <tr>
    <td>YOLOv5n</td>
    <td>FP32</td>
    <td>640x640</td>
    <td>16.66</td>
    <td>60</td>
  </tr>
</tbody>
</table>

## 使用公共数据集与自定义数据集的对比

现在我们将比较使用公共数据集和自定义数据集时训练样本数量和训练时间的差异。

### 训练样本数量

#### 自定义数据集

在本教程中，我们首先收集了植物数据集的视频，然后使用 Roboflow 将视频转换为一系列图像。我们获得了 542 张图像，与公共数据集相比，这是一个非常小的数据集。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/YOLOV5/62.jpg" /></div>

#### 公共数据集

公共数据集如 **Pascal VOC 2012** 和 **Microsoft COCO 2017** 数据集分别包含大约 **17112** 和 **121408** 张图像。

##### Pascal VOC 2012 数据集

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/63.png" /></div>

##### Microsoft COCO 2017 数据集

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/64.png" /></div>

### 训练时间

#### 本地训练

训练是在一块 NVIDIA GeForce GTX 1660 Super 显卡（6GB 显存）上完成的。

##### 使用本地训练的自定义数据集

###### 540 张图像数据集

根据我们之前对植物数据集的本地训练，获得了以下结果：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/65.png" /></div>

在这里，运行 100 个 epoch 仅耗时 **2.2 小时**。与使用公共数据集的训练相比，这明显更快。

###### 240 张图像数据集

我们将数据集减少到 240 张图像，再次进行训练，获得了以下结果：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/83.png" /></div>

在这里，运行 100 个 epoch 仅耗时约 **1 小时**。与使用公共数据集的训练相比，这明显更快。

##### 使用本地训练的 Pascal VOC 2012 数据集

在这种情况下，我们使用 Pascal VOC 2012 数据集进行训练，同时保持相同的训练参数。我们发现运行 1 个 epoch 大约需要 **50 分钟 (0.846 小时 * 60)**，因此我们在 1 个 epoch 后停止了训练。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/66.png" /></div>

如果计算 100 个 epoch 的训练时间，大约需要 **50 * 100 分钟 = 5000 分钟 = 83 小时**，这远远长于自定义数据集的训练时间。

##### 使用本地训练的 Microsoft COCO 2017 数据集

在这种情况下，我们使用 Microsoft COCO 2017 数据集进行训练，同时保持相同的训练参数。我们发现运行 1 个 epoch 预计需要 **7.5 小时**，因此我们在 1 个 epoch 完成前停止了训练。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/68.png" /></div>

如果计算 100 个 epoch 的训练时间，大约需要 **7.5 小时 * 100 = 750 小时**，这远远长于自定义数据集的训练时间。

#### Google Colab 训练

训练是在一块 NVIDIA Tesla K80 显卡（12GB 显存）上完成的。

##### 自定义数据集

###### 540 张图像数据集

根据我们之前在 Google Colab 上对 540 张植物图像的训练，获得了以下结果：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/37.png" /></div>

在这里，运行 100 个 epoch 仅耗时约 **1.3 小时**。这也明显快于使用公共数据集的训练。

###### 240 张图像数据集

我们将数据集减少到 240 张图像，再次进行训练，获得了以下结果：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/79.png" /></div>

在这里，运行 100 个 epoch 仅耗时约 **42 分钟 (0.697 小时 * 60)**。这明显快于使用公共数据集的训练。

##### 使用 Google Colab 训练的 Pascal VOC 2012 数据集

在这种情况下，我们使用 Pascal VOC 2012 数据集进行训练，同时保持相同的训练参数。我们发现运行 1 个 epoch 大约需要 **9 分钟 (0.148 小时 * 60)**，因此我们在 1 个 epoch 后停止了训练。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/67.png" /></div>

如果计算 100 个 epoch 的训练时间，大约需要 **9 * 100 分钟 = 900 分钟 = 15 小时**，这远远长于自定义数据集的训练时间。

##### 使用 Google Colab 训练的 Microsoft COCO 2017 数据集

在这种情况下，我们使用 Microsoft COCO 2017 数据集进行训练，同时保持相同的训练参数。我们发现运行 1 个 epoch 预计需要 **1.25 小时**，因此我们在 1 个 epoch 完成前停止了训练。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/69.png" /></div>

如果我们计算训练 100 个 epoch 的时间，大约需要 **1.25 小时 * 100 = 125 小时**，这比自定义数据集的训练时间要长得多。

### 训练样本数量和训练时间总结

| 数据集 | 训练样本数量 | 本地 PC (GTX 1660 Super) 训练时间 | Google Colab (NVIDIA Tesla K80) 训练时间 |
|---|---|---|---|
| 自定义 | 542 | 2.2 小时 | 1.3 小时 |
|  | 240 | 1 小时 | 42 分钟 |
| Pascal VOC 2012 | 17112 | 83 小时 | 15 小时 |
| Microsoft COCO 2017 | 121408 | 750 小时 | 125 小时 |

## 预训练检查点比较

您可以从下表中了解更多关于预训练检查点的信息。以下是我们在 **Google Colab** 上训练并在 **Jetson Nano** 和 **Jetson Xavier NX** 上使用 **YOLOv5n6** 作为预训练检查点进行推理的场景。

| 模型 | 尺寸 (像素) | mAPval 0.5:0.95 | mAPval 0.5 | CPU b1 速度 (ms) | V100 b1 速度 (ms) | V100 b32 速度 (ms) | Jetson Nano FP16 速度 (ms) | Jetson Xavier NX FP16 速度 (ms) | 参数 (M) | FLOPs @640 (B) |
|---|---|---|---|---|---|---|---|---|---|---|
| YOLOv5n | 640 | 28.0 | 45.7 | 45 | 6.3 | 0.6 |  |  | 1.9 | 4.5 |
| YOLOv5s | 640 | 37.4 | 56.8 | 98 | 6.4 | 0.9 |  |  | 7.2 | 16.5 |
| YOLOv5m | 640 | 45.4 | 64.1 | 224 | 8.2 | 1.7 |  |  | 21.2 | 49.0 |
| YOLOv5l | 640 | 49.0 | 67.3 | 430 | 10.1 | 2.7 |  |  | 46.5 | 109.1 |
| YOLOv5x | 640 | 50.7 | 68.9 | 766 | 12.1 | 4.8 |  |  | 86.7 | 205.7 |
| **YOLOv5n6** | **640** | **71.7** | **95.5** | **153** | **8.1** | **2.1** | **47** | **20** | **3.1** | **4.6** |
| YOLOv5s6 | 1280 | 44.8 | 63.7 | 385 | 8.2 | 3.6 |  |  | 12.6 | 16.8 |
| YOLOv5m6 | 1280 | 51.3 | 69.3 | 887 | 11.1 | 6.8 |  |  | 35.7 | 50.0 |
| YOLOv5l6 | 1280 | 53.7 | 71.3 | 1784 | 15.8 | 10.5 |  |  | 76.8 | 111.4 |
| YOLOv5x6 + [TTA] | 1280 1536 | 55.0 55.8 | 72.7 72.7 | 3136 - | 26.2 - | 19.4 - |  |  | 140.7 - | 209.8 - |

> 参考：[YOLOv5 GitHub](https://github.com/ultralytics/yolov5)

## 应用案例

由于我们上面解释的所有步骤对于任何类型的目标检测应用都是通用的，您只需要更换数据集即可应用于您自己的目标检测任务！

### 路标检测

这里我们使用了来自 Roboflow 的 [路标数据集](https://universe.roboflow.com/usmanchaudhry622-gmail-com/traffic-and-road-signs/1)，并在 NVIDIA Jetson 上进行了推理！

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/thumb-2.png" /></div>

### 野火烟雾检测

这里我们使用了来自 Roboflow 的 [野火烟雾数据集](https://public.roboflow.com/object-detection/wildfire-smoke)，并在 NVIDIA Jetson 上进行了推理！

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Roboflow/20.jpg" /></div>

## 资源

- **[网页]** [YOLOv5 文档](https://docs.ultralytics.com)

- **[网页]** [Ultralytics HUB](https://ultralytics.com/hub)

- **[网页]** [Roboflow 文档](https://docs.roboflow.com)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>