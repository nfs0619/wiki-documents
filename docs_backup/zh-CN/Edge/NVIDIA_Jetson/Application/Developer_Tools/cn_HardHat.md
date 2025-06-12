---
description: 安全帽检测 - 数据标注、AI模型训练、AI模型部署，使用 Edge Impulse 在 NVIDIA Jetson 上实现
title: 使用 Edge Impulse 入门
tags:
  - 数据标注
  - AI 模型训练
  - AI 模型部署
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/HardHat
last_update:
  date: 05/15/2025
  author: Bill
---

# 基于 Edge Impulse 的安全帽检测

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<iframe width={560} height={315} src="https://www.youtube.com/embed/e5pZdJhoeqM" title="YouTube 视频播放器" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## 简介

在工业或建筑工地等工作环境中，安全帽是必需且重要的，用于保护人们的头部免受坠落物体、与其他物体碰撞、碎片、雨水和电击的伤害。它提高了安全性，但有时人们会低估其重要性，无论是个人还是工业层面。因此，基于视频的安全帽检测监控可以成为解决这一安全问题的优化方案。

因此，感谢 Louis Moreau 和 Mihajlo Raljic，我们提供了这个基础项目，我们将训练一个嵌入式机器学习模型来检测安全帽，并将其部署到 **Jetson Nano** 上。**Jetson NX** 和 **Jetson AGX** 也都支持。

<div align="center"><img width="auto" src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonedge.png" /></div>

## 入门

Edge Impulse 使开发者能够通过嵌入式机器学习创建下一代智能设备解决方案。在边缘设备上进行机器学习将使得今天由于成本、带宽或功耗限制而被丢弃的 99% 的传感器数据得到有价值的利用。在这里，我们将应用 Edge Impulse 来训练一个嵌入式机器学习模型。

### 硬件

**所需硬件**

在本项目中，所需设备如下：

- NVIDIA Jetson Nano 或 [NVIDIA Xavier NX](https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html) 或 [NVIDIA Xavier AGX](https://www.seeedstudio.com/Jetson-Xavier-AGX-H01-Kit-p-5283.html)
- PC
- USB 接口摄像头
- HDMI 显示屏

**硬件设置**

PC 和 NVIDIA Jetson Nano 都需要通电并连接到互联网。建议将 NVIDIA Jetson Nano 设置为一台 PC。

<div align="center"><img width={650} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/Jetsongsa.jpg" /></div>

### 软件

- [Edge Impulse](https://www.edgeimpulse.com)
- NVIDIA Jetson Nano 的 [Ubuntu 系统](https://www.linux.org/pages/download/)

在这里，我们将训练一个嵌入式机器学习模型来检测安全帽。有几种方法可以实现这一目标。

### 准备工作

在开始项目之前，需要先完成一些准备工作。

- **步骤 1**. 打开 [Edge Impulse 网站](https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fselect-project%3Fautoredirect%3D1)，并注册一个账户。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs.png" /></div>

- **步骤 2**. 点击“Create new project”（创建新项目），并输入项目名称。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Alots/Alots2.png" /></div>

这里我们输入“Hard hat detection”（安全帽检测）。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs1.png" /></div>

- **步骤 3**. 我们将训练一个嵌入式机器学习模型来检测安全帽，因此在这里应选择“image”（图像）选项。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs2.png" /></div>

- **步骤 4**. 将配置设置为“Classify multiple objects (object detection)”（分类多个对象（对象检测））。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs3.png" /></div>

现在我们可以开始这个项目了。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs4.png" /></div>

## 安全帽检测 ML 模型训练

### 基于输入公共数据集的 ML 模型训练

Edge Impulse 提供了几种收集数据的方法。首先，我们将公共数据上传到网站，并尝试开发一个嵌入式机器学习模型。

- **步骤 1**. 在左侧列中选择“Data acquisition”（数据采集）页面并收集数据。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup.png" /></div>

- **步骤 2**. 从 [Flickr-Faces-HQ Dataset Github](https://github.com/NVlabs/ffhq-dataset) 中选择并下载数据集。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup1.png" /></div>

点击“upload data”（上传数据）按钮，在“Data acquisition”（数据采集）页面上传下载的数据集。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup2.png" /></div>

可以选择将现有数据以数据采集格式（CBOR、JSON、CSV）上传到项目中，也可以上传 WAV、JPG 或 PNG 文件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs2b.png" /></div>

- **步骤 3**. 上传完成后，收集到的数据将包含标注的图像。继续点击页面左侧的“Impulse design”（脉冲设计）。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup3.png" /></div>

- **步骤 4**. 选择合适的图像处理模块和图像学习模块，并保存脉冲。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup5.png" /></div>

- **步骤 5**. 点击页面左侧的“image”（图像）。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup6.png" /></div>

将配置设置为“GRB”，然后点击“Save Parameters”（保存参数），页面将自动跳转到“Generate features”（生成特征）页面。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup7a.png" /></div>

然后我们就可以生成特征了。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup8a.png" /></div>

- **步骤 6**. 当页面显示“Job completed”（任务完成）时，点击页面左侧的“Object detection”（目标检测）。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup9.png" /></div>

点击“start training”（开始训练），让 Edge Impulse 根据生成的特征训练模型。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup10.png" /></div>

- **步骤 7**. 当页面显示“job done”（任务完成）时，点击“Model testing”（模型测试）以检查模型的运行效果。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup11.png" /></div>

### 基于自定义 PC 摄像头数据集的机器学习模型训练

Edge Impulse 提供了多种数据采集方式。在这里，我们将通过 PC 摄像头捕捉图片，定制自己的图像并上传到网站。

- **步骤 1**. 保持在“Dashboard”页面，然后点击“LET'S COLLECT SOME DATA”（让我们收集一些数据）。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc.png" /></div>

我们可以选择多种选项来收集数据，这里我们使用电脑进行操作。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc1.png" /></div>

- **步骤 2**. 过一会儿，页面会显示已连接到电脑。点击“Collecting images?”（采集图像？），然后点击“Give access to the camera”（授予摄像头访问权限）。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc2.png" /></div>

- **步骤 3**. 点击“Capture”（捕捉）拍摄自己或他人的照片。图像数据需要在该部分标记为“Hard Hat”（安全帽）和“Head”（头部）。为了快速标记图片，强烈建议在进行下一类数据采集之前完成一类数据采集，例如，建议先完成“Hard Hat”的图片采集，然后再进行“Head”的图片采集。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc3a.png" /></div>

捕获的图片会自动存储在“Data acquisition”（数据采集）中。为了提高训练模型的性能，强烈建议尽可能多地收集图片，并在不同类别中收集相同数量的数据。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc4.png" /></div>

- **步骤 4**. 点击“Labeling queue”（标记队列）通过在图片上用方框圈出头部来标记数据。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc5.png" /></div>

使用鼠标拖动一个框圈住对象以添加标签。然后点击“Save labels”（保存标签）以进入下一项。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc6.png" /></div>

将标签设置为“Head”和“Hard Hat”，并填写对话框。请确保方框框住人头的区域。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc7.png" /></div>

- **步骤 5**. 当数据标记完成后，点击“Save labels”（保存标签）并进入“Impulse design”（脉冲设计）。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc8a.png" /></div>

- **步骤 6**. 选择合适的图像处理块和图像学习块，并保存脉冲。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup5.png" /></div>

- **步骤 7**. 点击页面左侧的“image”（图像）。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup6.png" /></div>

配置为“GRB”，然后点击“Save Parameters”（保存参数），页面会自动跳转到“Generate features”（生成特征）页面。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup7a.png" /></div>

然后我们就可以生成特征了。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup8a.png" /></div>

- **步骤 8**. 当页面显示“Job completed”（任务完成）时，点击页面左侧的“Object detection”（目标检测）。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup9.png" /></div>

点击“start training”（开始训练），让 Edge Impulse 根据生成的特征训练模型。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup10.png" /></div>

- **步骤 9**. 当页面显示“job done”（任务完成）时，点击“Model testing”（模型测试）以检查模型的运行效果。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup11.png" /></div>

### 基于自定义 NVIDIA Jetson 摄像头数据集的机器学习模型训练

Edge Impulse 提供了多种数据采集方式。在这里，我们将通过连接到 NVIDIA Jetson Nano 的摄像头捕捉图片，定制自己的图像并上传到网站。

- **步骤 1**. 根据硬件设置 [NVIDIA Jetson Nano Developer Kit](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-devkit#write) 或 [NVIDIA Jetson Nano 2GB Developer Kit](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-2gb-devkit#write)，以连接外部显示器和键盘。将显示屏连接到 Jetson Nano。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/Jetsonnano.png" /></div>

- **步骤 2**. 确保您的 Jetson Nano 已连接到互联网，并在 Edge Impulse 中设置设备。

您可以使用以下命令检查网络连接：

```cpp
ping -c 3 www.google.com
```

如果网络正常，结果应如下所示：

```cpp
3 packets transmitted, 3 received, 0% packet loss, time 2003ms
```

设置开始运行以下命令：

```cpp
edge-impulse-linux
```

然后网站会请求 Edge Impulse 账户。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnanoa.png" /></div>

如下所示的内容表示连接已完成。我们在 Edge Impulse 中保存的所有项目都可以选择。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano1a.png" /></div>

我们正在捕捉照片，因此需要选择我们的 USB 摄像头并在网站上应用。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano2a.png" /></div>

为我们希望连接到网站的设备命名。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano3a.png" /></div>

可以清楚地看到设备 Jetson Nano 现在已连接到项目。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano4a.png" /></div>

- **步骤 3**. 返回 Edge Impulse 页面并选择“Devices”列。连接的 Jetson Nano 如下所示：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano5.png" /></div>

- **步骤 4**. 选择我们连接到 Edge Impulse 的设备并转到“Data acquisition”页面。点击“Capture”拍摄自己或其他人的照片。图像数据需要在该部分中标记为“Hard Hat”和“Head”。为了快速标记图片，强烈建议在进入下一个类别之前完成一个类别的数据采集，例如建议先完成“Hard Hat”的图片采集，然后再进行“Head”的图片采集。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc4.png" /></div>

捕获的图片将自动存储在“Data acquisition”中。为了更好地训练模型的性能，强烈建议尽可能多地收集图片，并在不同类别中收集相同数量的数据。

- **步骤 5**. 数据采集完成后，转到“Impulse design”。

- **步骤 6**. 选择合适的图像处理块和图像学习块并保存设计。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup5.png" /></div>

- **步骤 7**. 点击页面左侧的“image”。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup6.png" /></div>

配置为“GRB”并点击“Save Parameters”，页面将自动跳转到“Generate features”页面。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup7a.png" /></div>

然后我们可以生成特征。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup8a.png" /></div>

- **步骤 8**. 当页面显示“Job completed”时，点击页面左侧的“Object detection”。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup9.png" /></div>

点击“start training”，让 Edge Impulse 根据生成的特征训练模型。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup10.png" /></div>

- **步骤 9**. 当页面显示“job done”时，点击“Model testing”检查模型的工作效果。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup11.png" /></div>

建议结合我们提供的方法并检查每个模型的性能，以确定哪个模型更好。

## 将机器学习模型部署到 Jetson Nano

现在我们将训练好的机器学习模型部署到 Jetson Nano，并应用代码使其运行。

### 通过 Edge Impulse Linux CLI 部署机器学习模型

- **步骤 1**. 根据硬件设置 [NVIDIA Jetson Nano Developer Kit](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-devkit#write) 或 [NVIDIA Jetson Nano 2GB Developer Kit](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-2gb-devkit#write)，以连接外部显示器和键盘。将屏幕显示器连接到 Jetson Nano。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/Jetsonnano.png" /></div>

- **步骤 2**. 确保您的 Jetson Nano 已连接到互联网，并在 Edge Impulse 中设置设备。

!!!注意 如果您已经在“基于定制的 NVIDIA Jetson 摄像头数据集的机器学习模型训练”部分中将 Jetson Nano 连接到 Edge Impulse，则可以跳过此步骤。

您可以使用以下命令检查网络连接：

```cpp
ping -c 3 www.google.com
```

如果网络正常工作，结果应如下所示：

```cpp
3 packets transmitted, 3 received, 0% packet loss, time 2003ms
```

设置开始运行以下命令：

```cpp
edge-impulse-linux
```

然后网站会请求 Edge Impulse 账户。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnanoa.png" /></div>

如下所示的内容表示连接已完成。我们在 Edge Impulse 中保存的所有项目都可以选择。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano1a.png" /></div>

我们正在捕捉照片，因此需要选择我们的 USB 摄像头并在网站上应用。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano2a.png" /></div>

为我们希望连接到网站的设备命名。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano3a.png" /></div>

可以清楚地看到设备 Jetson Nano 现在已连接到项目。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano4a.png" /></div>

- **步骤 3**. 通过以下代码将 ML 模型下载到 Jetson Nano。

```cpp
edge-impulse-linux-runner
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy.png" /></div>

成功连接后会显示如下内容，模型将自动激活。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy1.png" /></div>

- **步骤 4**. 复制显示的地址并用浏览器打开。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy2.png" /></div>

检测结果将显示在浏览器上。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy3a.png" /></div>

数据输出结果如下所示：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy4.png" /></div>

### 通过 Linux Python SDK 部署 ML 模型

在本项目中，我们将应用模型在屏幕上显示安全帽检测结果，通过显示“禁止进入”和“欢迎”来实现。Edge Impulse 提供了一个库，使得在 Linux 机器上运行 ML 模型和传感器数据采集成为可能。该 SDK 是开源的，托管在 [GitHub](https://github.com/edgeimpulse/linux-sdk-python)。您也可以尝试我们已经设置好的[镜像](https://github.com/Zachay-NAU/Hard-Hat-Detectation)。

- **步骤 1**. 为 Linux 安装最新版本的 [Python 3](https://www.python.org/downloads/)（>=3.7）。

- **步骤 2**. 使用以下命令安装 Linux Python SDK：

```cpp
sudo apt-get install libatlas-base-dev libportaudio2 libportaudiocpp0 portaudio19-dev
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk.png" /></div>

```cpp
pip3 install edge_impulse_linux
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk1.png" /></div>

- **步骤 3**. 使用以下命令安装 [Edge Impulse for Linux CLI](https://docs.edgeimpulse.com/docs/edge-impulse-for-linux)：

```cpp
sudo apt install python3.7-dev
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk2.png" /></div>

```cpp
wget -q -0 - https://cdn.edgeimpulse.com/firmware/linux/jetson.sh | bash
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk3.png" /></div>

- **步骤 4**. 使用以下命令将 ML 模型下载到 Jetson Nano：

```cpp
edge-impulse-linux-runner --download modelfile.eim
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk5.png" /></div>

如果这是 Jetson Nano 和 Edge Impulse 之间的首次连接，网站将要求您输入 Edge Impulse 账户信息进行登录。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk4.png" /></div>

!!!注意 这会将文件下载为 modelfile.eim，如果您想切换项目，可以通过添加 '--clean' 来完成。

- **步骤 5**. 使用以下命令运行 [hardhat_detectation.py](https://files.seeedstudio.com/wiki/2.23jetsonedge/hardhat_detectation.py) 来应用 ML 模型。代码可能需要一个外部[文件](https://files.seeedstudio.com/wiki/2.23jetsonedge/device_patches.py)。

```cpp
python3 hardhat_detectation.py /home/jetson-nano/modelfile.eim
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk8.png" /></div>

- **步骤 6**. 结果应类似于以下内容：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/nvresult.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/nvresult1.png" /></div>

或者它可以是一个图像，在 5 分钟内部署您的 ML 应用程序用于 PPE 检测管道？敬请关注我们！

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