---
description: 使用 alwaysAI 在 NVIDIA Jetson 设备上进行数据上传和标注
title: 使用 alwaysAI 入门指南
tags:
  - 数据标注
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/alwaysAI-Jetson-Getting-Started
last_update:
  date: 05/15/2025
  author: jianjing Huang
---

# 使用 alwaysAI 入门指南（适用于 NVIDIA® Jetson 设备）

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/thumb-5.gif"/></div>

[alwaysAI](https://alwaysai.co) 是一个重要的计算机视觉开发平台，用于在边缘设备（如 NVIDIA® Jetson 设备）上创建和部署机器学习应用程序。开发和部署这些应用程序通常过于复杂且耗时，需要对大量计算机视觉技术和方法有深入了解，这些知识通常更适合专家而非普通开发者。alwaysAI 消除了这些障碍，使创建计算机视觉应用程序变得简单、快速且高效。

## 支持的硬件

alwaysAI 支持以下与 Jetson 相关的硬件：

- Seeed 提供的开发套件：

  - 基于 Jetson Nano 的 reComputer J1010
  - 基于 Jetson Nano 的 reComputer J1020
  - 基于 Jetson Xavier NX 8GB 的 reComputer J2011
  - 基于 Jetson Xavier NX 16GB 的 reComputer J2012

- Seeed 提供的载板：

  - Jetson Mate
  - Jetson SUB Mini PC
  - Jetson Xavier AGX H01 套件
  - A203 载板
  - A203（版本 2）载板
  - A205 载板
  - A206 载板

- NVIDIA 提供的官方开发套件：

  - NVIDIA® Jetson Nano 开发套件
  - NVIDIA® Jetson Xavier NX 开发套件
  - NVIDIA® Jetson AGX Xavier 开发套件
  - NVIDIA® Jetson TX2 开发套件
  - NVIDIA® Jetson AGX Orin 开发套件

- NVIDIA 提供的官方 SoM 模块：
  
  - NVIDIA® Jetson Nano 模块
  - NVIDIA® Jetson Xavier NX 模块
  - NVIDIA® Jetson TX2 NX 模块
  - NVIDIA® Jetson TX2 模块
  - NVIDIA® Jetson AGX Xavier 模块

## 前置条件

- 运行 JetPack 4.6 并安装所有 SDK 组件的上述任意 Jetson 设备（安装参考请查看 [此 Wiki](https://wiki.seeedstudio.com/reComputer_J1020_A206_Flash_JetPack/)）
- 运行 Windows、Linux 或 Mac 的主机电脑
- 与 Jetson 设备兼容的 USB 摄像头或 MIPI CSI 摄像头

## 入门指南

部署您的第一个计算机视觉项目只需几分钟！在完成本指南后，您将能够在连接到 Jetson 设备的摄像头的实时视频流以及预加载的视频文件上检测对象。

1. 设置开发电脑的环境
2. 设置 Jetson 设备的环境
3. 注册 alwaysAI 账户
4. 使用 alwaysAI 仪表板创建项目
5. 使用开发电脑将项目部署到 Jetson 设备
6. 在摄像头的实时视频流上进行对象检测
7. 在预加载的视频文件上进行对象检测

### 设置开发电脑的环境

现在您需要设置开发环境。您可以使用 Windows、Linux 或 Mac 电脑。

:::note
在本指南中，我们将使用 Windows 开发电脑。如果您想将 Mac 或 Linux 设置为开发电脑，请 [点击此处](https://alwaysai.co/docs/get_started/development_computer_setup.html) 了解更多。
:::

- **步骤 1.** 下载并安装 alwaysAI 桌面应用程序和命令行界面，点击 [此处](https://alwaysai.co/installer/windows)

- **步骤 2.** 安装完成后，打开命令行界面并输入以下命令：

```sh
aai -v
```

如果您看到打印的版本号，说明您已成功安装 alwaysAI CLI。撰写本指南时的版本号为 **1.4.3**。

- **步骤 3.** 检查您的操作系统是否已安装 OpenSSH。您需要在开发电脑上安装 OpenSSH 以连接到边缘设备并部署机器学习项目。

```sh
ssh -V
```

如果您看到打印的版本号，说明 OpenSSH 已安装。例如 **OpenSSH_for_Windows_8.1p1, LibreSSL 3.0.2**。自 2018 年底起，Windows 10 已原生支持 OpenSSH。有关在 Windows 上安装 OpenSSH 的更多信息，请查看 Microsoft 文档网站上的 [此文章](https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse)。

### 设置 Jetson 设备的环境

接下来，您需要在边缘设备（本例中为 Jetson 设备）上设置环境。

**步骤 1.** 在 Jetson 设备上运行机器学习项目时，使用的是 edgeIQ 运行时，它作为 [docker 镜像](https://hub.docker.com/r/alwaysai/edgeiq) 提供。您无需安装 Docker，因为 JetPack 已预装 Docker。但您需要将 "docker" 用户组添加到您的用户中，以便无需 root 权限（sudo）即可访问 Docker。访问 Jetson 设备并在终端中执行以下命令：

```sh
sudo usermod -aG docker $USER
```

**步骤 2.** 为应用新的用户组权限，注销 Jetson 设备并重新登录，或者输入以下命令：

```sh
su - $USER
```

**步骤 3.** 测试无需 **sudo** 的 Docker 安装：

```sh
docker run hello-world
```

<div align="center"><img width= "{630}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/2.png"/></div>

### 注册 alwaysAI 账户

- **步骤 1.** 访问 [此页面](https://console.alwaysai.co/auth?register=true) 注册 alwaysAI 账户

- **步骤 2.** 填写表单并点击 **Sign Up for Free** 完成注册流程

### 使用 alwaysAI 仪表板创建项目

完成开发电脑和 Jetson 设备的环境设置以及 alwaysAI 账户注册后，我们可以开始使用 alwaysAI 仪表板创建一个新的对象检测项目。

**步骤 1.** 访问 [alwaysAI 仪表板](https://console.alwaysai.co/dashboard)，点击 **New Project** 按钮创建新项目

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/4.png"/></div>

**步骤 2.** 选择 **Object Detection** 作为起始模板，输入项目名称并点击 **Create Project**

<div align="center"><img width="{550}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/5.png"/></div>

**步骤 3.** 点击 **Click Here To View Your Project** 进入你新创建的项目

现在你将看到有关新创建项目的信息，例如所使用的模型和其他有用的细节。

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/6.png"/></div>

对于默认的 **Object Detection Project**（对象检测项目），使用的模型是 **mobilenet_ssd**，它是用 **Pascal VOC 数据集**训练的。这意味着该应用程序可以识别 **20 个对象类别**，例如人、鸟、猫、牛、狗、马、羊、飞机、自行车、船、公共汽车、汽车、摩托车、火车、瓶子、椅子、餐桌、盆栽植物、沙发、电视/显示器。

然而，该模型并未针对 Jetson 硬件进行优化，因此运行时帧率会非常低。因此，我们将选择一个针对 **Jetson Xavier NX** 并支持 **TensorRT** 的优化模型。

**步骤 4.** 点击模型旁边的三点图标，然后点击 **Delete**（删除）

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/32.png"/></div>

**步骤 5.** 点击 **Add New Model**（添加新模型），然后点击 **Go to Model Catalog**（进入模型目录）进入 alwaysAI 模型目录。

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/33.png"/></div>

**步骤 6.** 在搜索框中输入 **ssd_mobilenet_v1_coco_2018_01_28_xavier_nx**，然后点击 **+ Use this Model**（使用此模型）

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/34.png"/></div>

此模型是用 **COCO 数据集**训练的，可以识别 **80 个对象类别**，例如人、自行车、汽车、摩托车、飞机、公共汽车、火车、卡车、船、交通信号灯、消防栓、停车标志、停车计时器、长椅、鸟、猫、狗、马、羊、牛、大象、熊、斑马、长颈鹿、背包、雨伞、手提包、领带、手提箱、飞盘、滑雪板、单板滑雪、运动球、风筝、棒球棒、棒球手套、滑板、冲浪板、网球拍、瓶子、酒杯、杯子、叉子、刀子、勺子、碗、香蕉、苹果、三明治、橙子、西兰花、胡萝卜、热狗、披萨、甜甜圈、蛋糕、椅子、沙发、盆栽植物、床、餐桌、马桶、电视、笔记本电脑、鼠标、遥控器、键盘、手机、微波炉、烤箱、烤面包机、水槽、冰箱、书、时钟、花瓶、剪刀、泰迪熊、吹风机、牙刷。

**步骤 7.** 选择之前创建的项目（在本例中为 My First Project），然后点击 **Add To Project**（添加到项目）

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/35.png"/></div>

现在我们已经成功将模型添加到项目中！

### 使用开发计算机将项目部署到 Jetson 设备

现在我们将通过 SSH 使用开发计算机将之前创建的项目部署到 Jetson 设备。

**步骤 1.** 在开发计算机上创建一个新文件夹，在新文件夹中打开命令行界面并输入以下命令：

```sh
aai app configure
```

:::note
首次运行上述命令时，系统会提示你输入 alwaysAI 账户的用户名和密码。
:::

**步骤 2.** 选择你之前在 alwaysAI 仪表板上创建的项目。

<div align="center"><img width= "{720}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/7.png"/></div>

**步骤 3.** 选择 **Remote device**（远程设备）作为 **destination**（目标）。

<div align="center"><img width= "{600}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/8.png"/></div>

**步骤 4.** 按 **Y** 创建私钥文件。

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/9.png"/></div>

**步骤 5.** 点击 **Add a new device**（添加新设备）将你的 Jetson 设备添加为远程设备。

<div align="center"><img width="{570}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/10.png"/></div>

**步骤 6.** 选择 **device mode**（设备模式）为 **Development**（开发）。

<div align="center"><img width="{570}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/11.png"/></div>

**步骤 7.** 输入一个 **device name**（设备名称）。

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/36.png"/></div>

**步骤 8.** 输入 Jetson 设备的 **用户名** 和 **主机名/IP 地址**，格式如下：

```sh
lakshanthad@192.168.2.156
```

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/37.png"/></div>

:::note
这里 Jetson 设备的用户名是 **lakshanthad**，IP 地址是 **192.168.2.156**。
:::

**步骤 9.** 当系统提示时，输入 Jetson 设备的 **密码**。

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/38.png"/></div>

**步骤 10.** 当系统询问运行应用程序的 **位置** 时，保留默认位置并按 **ENTER**。这里默认位置设置为 **alwaysai/test**，这是 Jetson 设备中的项目目录。

<div align="center"><img width="{750}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/39.png"/></div>

现在我们已经通过 SSH 使用开发计算机成功在 Jetson 设备上初始化了项目。

<div align="center"><img width="{750}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/17.png"/></div>

在将应用程序安装到 Jetson 设备之前，我们需要对主代码进行一个小改动，以更改模型名称和推理引擎类型。

**步骤 11.** 在 PC 上为 alwaysAI 创建的目录中，打开 **app.py** 文件，并将模型名称和推理引擎类型更改如下：

```python
def main():
    obj_detect = edgeiq.ObjectDetection("alwaysai/ssd_mobilenet_v1_coco_2018_01_28_xavier_nx")
    obj_detect.load(engine=edgeiq.Engine.TENSOR_RT)
```

**步骤 12.** 输入以下命令安装应用程序：

```sh
aai app install
```

如果安装成功，你将看到以下输出：

<div align="center"><img width= "{600}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/40.png"/></div>

:::note
如果在此步骤中遇到错误，可以尝试使用 `aai app install --clean` 方法重新部署。请仔细检查 Jetpack 版本是否为 **要求的版本 4.6**。可以通过输入命令 `sudo apt-cache show nvidia-jetpack` 检查版本号是否正确。如果版本号正确，请确保你完成了 Jetson 系统安装以及 **Jetson SDK 组件**的安装。这将帮助你解决大多数问题。
:::

### 在实时摄像头视频流上进行目标检测

现在我们将在连接到 Jetson 设备的 USB 摄像头的实时视频流上运行目标检测。您也可以使用 Jetson 设备支持的 MIPI CSI 摄像头。

**步骤 1.** 将 USB 摄像头/MIPI CSI 摄像头连接到 Jetson 设备

**步骤 2.** 运行以下命令

```sh
aai app start
```

现在您将在命令行上看到以下输出：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/alwaysAI/pics/41.png"/></div>

**步骤 3.** 打开一个网页浏览器并输入 **http://localhost:5000** 来打开视频流

```sh
http://localhost:5000
```

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/alwaysAI/pics/person-small.gif"/></div>

如您所见，人群正在被实时检测，并且每个标签的置信度百分比显示在界面上。此外，在 **Jetson Xavier** 上的推理时间为 **0.009 秒，相当于约 111 帧每秒（fps）**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/alwaysAI/pics/car-small.gif"/></div>

上图是使用相同模型的另一个演示。

### 在预加载的视频文件上进行目标检测

这里我们将在预加载的视频文件上运行目标检测。

**步骤 1.** 将视频文件放置在 Jetson 设备的 alwaysAI 项目目录中。根据我们的示例，它是 **/home/\{username\}/alwaysai/test**

**步骤 2.** 在开发计算机上，打开我们之前创建的 **test** 文件夹中的 **app.py** 文件，并将以下代码段

```sh
with edgeiq.WebcamVideoStream(cam=0) as video_stream, \
                edgeiq.Streamer() as streamer:
```

替换为

```sh
with edgeiq.FileVideoStream(
            'file name goes here', play_realtime=True) as video_stream, \
                edgeiq.Streamer() as streamer:
```

然后将 **file name goes here** 替换为视频文件的名称和文件扩展名。确保文件名用单引号括起来。

**步骤 3.** 重新安装应用程序

```sh
aai app install
```

**步骤 4.** 最后运行应用程序

```sh
aai app start
```

在这里，您将在命令行上看到与之前相同的输出，并且一旦使用之前提到的相同地址打开网页浏览器，您将看到在预加载视频上执行的目标检测，输出与之前类似。

### 筛选要检测的对象

您还可以筛选模型要检测的特定对象。例如，上述使用的 COCO 数据集能够检测 80 种对象类型。然而，我们可以筛选仅检测人。

您只需在 **app.py** 文件中的 **results** 后添加 **results.predictions** 行：

```python
while True:
    frame = video_stream.read()
    results = obj_detect.detect_objects(frame, confidence_level=.5)
    results.predictions = edgeiq.filter_predictions_by_label(results.predictions, ['person'])
    frame = edgeiq.markup_image(
```

## alwaysAI 在 GitHub 上的应用程序

alwaysAI 在 alwaysAI GitHub 仓库中提供了多种可直接使用的应用程序。您可以在 [这里](https://github.com/alwaysai/Reference-Applications) 查看不同的应用程序。

### 车牌检测器

为了演示，我们将说明如何将这些应用程序之一 [车牌检测器](https://github.com/alwaysai/license-plate-detector) 部署到 Jetson 设备上。因此，您可以对其他应用程序重复相同的步骤。

**步骤 1.** 在开发计算机上，为我们的项目创建一个新文件夹并进入该文件夹

**步骤 2.** 下载 [此仓库](https://github.com/alwaysai/license-plate-detector) 为 **.zip** 文件，或者如果您的 PC 上安装了 **Git**，则克隆它

默认情况下，此示例使用的模型未优化以在 Jetson Nano 上运行。因此，我们将首先加载一个为 Jetson Nano 优化的模型。

**步骤 3.** 进入新下载/克隆的仓库，在其中打开命令行并执行以下命令

```sh
aai app models add alwaysai/vehicle_license_mobilenet_ssd_nano
```

**步骤 4.** 打开 **app.py**，更改模型名称和推理引擎

```python
def main():
    obj_detect = edgeiq.ObjectDetection(
            "alwaysai/vehicle_license_mobilenet_ssd_nano")
    obj_detect.load(engine=edgeiq.Engine.TENSOR_RT)
```

**步骤 5.** 执行以下命令

```sh
aai app configure
```

:::note
当您第一次运行上述命令时，系统会提示您输入 alwaysAI 账户的用户名和密码。
:::

**步骤 6.** 选择 **Create new project**

<div align="center"><img width={720} src="https://files.seeedstudio.com/wiki/alwaysAI/pics/21.jpg"/></div>

**步骤 7.** 输入一个 **项目名称**

**步骤 8.** 选择初始化项目 **作为一个空应用程序**

<div align="center"><img width={720} src="https://files.seeedstudio.com/wiki/alwaysAI/pics/26.jpg"/></div>

**步骤 9.** 重复 **使用开发计算机将项目部署到 Jetson 设备** 部分的相同步骤，从 **步骤 3** 到 **步骤 11**

**步骤 10.** 一旦应用程序安装到 Jetson 上，运行以下命令启动应用程序

```sh
aai app start
```

现在您将在命令行上看到以下输出：

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/alwaysAI/pics/23.jpg"/></div>

如您所见，我们正在使用 **vehicle_license_mobilenet_ssd 模型**，该模型能够识别车辆和车牌。

**步骤 11.** 在您的 PC 上打开一个网页浏览器并输入以下内容以打开视频流

```sh
http://localhost:5000
```

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/alwaysAI/pics/25.gif"/></div>

在此演示中，推理正在对 [这里](https://github.com/alwaysai/license-plate-detector/tree/main/video) 的两个视频进行处理。如您所见，视频流中的车辆和车牌正在被检测，并且每个标签的置信度百分比显示在界面上。

### 使用摄像头进行推理

如果您希望对来自摄像头的实时视频流执行与上述相同的推理，请按照以下步骤操作。

**步骤 1.** 导航到我们之前为项目创建的文件夹并打开 **app.py**

**步骤 2.** 从 [这里](https://github.com/lakshanthad/license-plate-detector-webcam/blob/main/app.py) 复制并粘贴代码

**步骤 3.** 再次安装应用程序

```sh
aai app install
```

**步骤 4.** 最后运行应用程序

```sh
aai app start
```

在命令行中，您将看到与之前相同的输出，并且当您使用之前提到的相同地址打开网页浏览器时，您将看到实时视频流中的对象检测，输出与之前类似。

## alwaysAI 企业版

alwaysAI 还提供企业版，具有以下功能：

- 一年的 Freemium 访问权限，支持 1 个生产设备部署
- 20 小时的 alwaysAI 云模型训练
- 30 天的 alwaysAI 云数据集存储访问权限

您可以在这里了解更多关于 alwaysAI 企业版的信息。

### 训练您自己的模型并部署

**步骤 1.** 准备您的训练数据集。确保您的数据集为 **PascalVOC 格式**，然后将所有图像和标签分别放入两个目录中，并按以下方式压缩文件

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/alwaysAI/pics/27.jpg"/></div>

**步骤 2.** 前往 [alwaysAI dashboard](https://console.alwaysai.co/dashboard)，点击左侧导航栏中的 **Datasets**，然后点击 **Upload a Dataset**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/alwaysAI/pics/28.jpg"/></div>

**步骤 3.** 数据集上传完成后，点击 **Train**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/alwaysAI/pics/29.jpg"/></div>

**步骤 4.** 在这里，您可以根据自己的偏好更改训练设置，然后点击 **Start training**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/alwaysAI/pics/30.jpg"/></div>

训练完成后，您将看到以下输出

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/alwaysAI/pics/31.jpg"/></div>

现在，训练好的模型已存储在您的账户中。您可以在对象检测项目中使用此模型，具体如下：

**步骤 5.** 导航到 `Models > My Models`，然后点击我们刚刚训练的模型

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/alwaysAI/pics/42.png"/></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/alwaysAI/pics/43.png"/></div>

**步骤 6.** 如您所见，可以在对象检测应用程序的根目录中使用以下命令

```sh
aai app models add lakshanthad/roadsign-mobilenet
```

**步骤 7.** 然后在 **app.py** 中更改模型名称并再次运行应用程序

```sh
lakshanthad/roadsign-mobilenet
```

## 资源

- **[网页]** [AlwaysAI 文档](https://alwaysai.co/docs)

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