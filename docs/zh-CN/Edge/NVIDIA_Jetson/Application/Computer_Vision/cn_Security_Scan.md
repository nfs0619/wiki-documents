---
description: 安全X光扫描刀具检测
title: 安全X光扫描刀具检测
keywords:
  - Edge
  - reComputer 应用
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Security_Scan
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # 用于 Disqus

---

# 刀具检测：基于 reComputer 部署在 Triton 推理服务器上的目标检测模型

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<iframe width={560} height={315} src="https://www.youtube.com/embed/niS0TLzyn-s" title="YouTube 视频播放器" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

安全检查是为了乘客和交通部门的安全考虑，旨在将危险隔离开，通常应用于机场、火车站、地铁站等。在现有的安全检查领域，安全检查设备通常部署在公共交通的入口通道上。通常情况下，需要多个设备同时工作。

然而，由于安全检查过程中检测物体的重叠，X光图像中违禁物品的检测性能仍然不理想。为了解决这个问题，基于 Triton 接口服务器中的去遮挡模块，在 X光图像中部署违禁物品检测算法可以实现更好的效果。

因此，感谢 [Yanlu Wei, Renshuai Tao 等人](https://arxiv.org/abs/2004.08656)，我们提供了这个基础项目，我们将在 [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html) 上部署一个深度学习模型，该模型可以检测违禁物品（如刀具）。我们使用一个 reComputer J1010 作为推理服务器，并使用两个 Raspberry Pi 模拟安全检查设备发送图像。[reComputer 1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html)、[reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html)、[reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html) 和 [Nvidia Jetson AGX Xavier](https://www.seeedstudio.com/Jetson-Xavier-AGX-H01-Kit-p-5283.html) 也都支持。

## 入门指南

[Triton 推理服务器](https://developer.nvidia.com/nvidia-triton-inference-server) 提供了一个云端和边缘推理解决方案，针对 CPU 和 GPU 进行了优化。Triton 支持 HTTP/REST 和 GRPC 协议，允许远程客户端请求服务器管理的任何模型的推理。在这里，我们将使用 Triton（Triton 推理服务器）作为本地服务器来部署检测模型。

### 硬件

#### 所需硬件

在本项目中，所需设备如下所示：

- [Raspberry Pi 4B](https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM-4-p-4898.html)*2
- [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html)
- HDMI 显示屏、鼠标和键盘
- PC

#### 硬件设置

两台 Raspberry Pi 和 reComputer 应该通电，并且它们都应该在**同一网络**下。在本项目中，我们使用两台 Raspberry Pi 来模拟安全检查设备的工作，因为在大多数情况下，安全检查设备是由多个设备使用的。因此，两台设备需要协同工作。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_23.png" /></div>

当然，仅使用一台 Raspberry Pi 也可以应用于本项目。然而，在两台设备上同时进行刀具检测的演示可以更好地展示 Triton 推理服务器的动态批处理能力。在接下来的说明中，我们将介绍如何在 Raspberry Pi 和 reComputer J1010 上设置软件。

### 软件

我们在这里使用 [X光图像数据集](https://drive.google.com/file/d/12moaa-ylpVu0KmUCZj_XXeA5TxZuCQ3o/view) 作为我们的**输入数据**，这些数据将被放置在**Raspberry Pi** 上。之后，reComputer 将输出处理后的推理结果到 Raspberry Pi。最后，Raspberry Pi 将完成最终的工作并显示在屏幕上，即推理模型的最后一层将部署在 Raspberry Pi 上。

#### 设置 Raspberry Pi

我们将在这里展示如何在 Raspberry Pi 上设置所需的软件，包括：

**步骤 1.** 从[官方网站](https://www.raspberrypi.com/documentation/computers/getting-started.html#using-network-installation)安装 Raspbian Buster 系统并进行基本配置。在本项目中，我们使用 RASPBERRY PI OS（64 位）作为我们的操作系统。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_1.png" /></div>

**步骤 2.** 配置 Raspberry Pi 的 SSH 端口（可选）。

在部署环境之前，我们可以打开 Raspberry Pi 的 SSH 端口，并通过 PC 上的 [SSH 接口](https://wiki.seeedstudio.com/remote_connect/) 远程调用它。

> 注意：确保 PC 和 Raspberry Pi 在同一局域网下。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_7.png" /></div>

**步骤 3.** 配置 Python 环境。

我们需要为推理模型部署所需的环境，包括 **Python、PyTorch、Tritonclient 和 TorchVision**，以及用于图像显示的 **OpenCV**。以下是具体的安装说明：

**Python**

我们可以执行 `python –V` 并确保 Python 版本为 3.9.2。我们需要安装与 Python 3.9.2 版本对应的 PyTorch、Torchclient 和 TorchVision。您可以参考[这里](https://www.python.org/downloads/)下载并安装。

**PyTorch**

如果 Python 版本正确，我们现在可以安装 PyTorch。

> 注意：在安装 PyTorch 之前，我们需要检查 Raspbian 的版本。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_10.png" /></div>

执行以下命令安装 PyTorch：

```python
# 获取最新更新
sudo apt-get update
sudo apt-get upgrade

# 安装依赖项
sudo apt-get install python3-pip libjpeg-dev libopenblas-dev libopenmpi-dev libomp-dev

# setuptools 版本需为 58.3.0 以上，否则会有版本问题
sudo -H pip3 install setuptools==58.3.0
sudo -H pip3 install Cython

# 安装 gdown 以从 Google Drive 下载文件
sudo -H pip3 install gdown

# 对于 Buster OS
# 下载 wheel 文件
gdown https://drive.google.com/uc?id=1gAxP9q94pMeHQ1XOvLHqjEcmgyxjlY_R
# 安装 PyTorch 1.11.0
sudo -H pip3 install torch-1.11.0a0+gitbc2c6ed-cp39-cp39-linux_aarch64.whl
# 清理
rm torch-1.11.0a0+gitbc2c6ed-cp39-cp39m-linux_aarch64.whl
```

在成功安装后，我们可以通过以下命令**在启动** `python` 后检查 PyTorch：

```python
import torch as tr
print(tr.__version__)
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_11.png" /></div>

>注意：Raspberry Pi 4 的 PyTorch 安装包可以在 https://github.com/Qengineering/PyTorch-Raspberry-Pi-64-OS 找到。

**Tritonclient**

我们可以通过执行 `pip3 install tritonclient[all]` 来下载 Tritonclient。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_9.png" /></div>

**TorchVision**

在安装 PyTorch 后，我们可以继续安装 TorchVision。以下是相关命令：

```python
# 下载安装包
gdown https://drive.google.com/uc?id=1oDsJEHoVNEXe53S9f1zEzx9UZCFWbExh
# 安装 torchvision 0.12.0
sudo -H pip3 install torchvision-0.12.0a0+9b5a3fe-cp39-cp39-linux_aarch64.whl
# 清理安装包
rm torchvision-0.12.0a0+9b5a3fe-cp39-cp39-linux_aarch64.whl
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_12.png" /></div>

**OpenCV**

我们可以直接执行 `pip3 install opencv-python` 来安装 OpenCV：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_13.png" /></div>

### 设置 reComputer J1010

在本项目中，我们将在 reComputer J1010 上部署 Triton 推理服务器。为了增强训练模型的交互性和部署便利性，我们将模型转换为 **ONNX 格式**。

**步骤 1.** [安装](https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack/) Jetpack 4.6.1 到 reComputer J1010。

**步骤 2.** 在 “home/server/docs/examples/model_repository” 中创建一个新文件夹 “opi/1”，然后下载已训练并转换的 [model.onnx](https://drive.google.com/file/d/1RcHK_gthCXHsJLeDOUQ6c3r0RlAUgRfV/view?usp=sharing)，并将其放入 “1” 文件夹中。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_15.jpg" /></div>

>如果您需要另一个通用服务器，可以执行以下步骤。

打开一个新的终端并执行：

```python
git clone https://github.com/triton-inference-server/server
cd ~/server/docs/examples
sh fetch_models.sh
```

**步骤 3.** 安装适用于 JetPack 4.6.1 的 Triton 版本，相关文件在以下压缩包中：[tritonserver2.21.0-jetpack5.0.tgz](https://github.com/triton-inference-server/server/releases/download/v2.19.0/tritonserver2.19.0-jetpack4.6.1.tgz)。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_16.png" /></div>

此压缩包包含 Triton 服务器可执行文件和共享库，包括 C++ 和 Python 客户端库及示例。有关如何在 JetPack 上安装和使用 Triton 的更多信息，请参考 [这里](https://github.com/triton-inference-server/server/blob/r22.04/docs/jetson.md)。

**步骤 4.** 执行以下命令：

```python
mkdir ~/TritonServer && tar -xzvf tritonserver2.19.0-jetpack4.6.1.tgz -C ~/TritonServer
cd ~/TritonServer/bin
./tritonserver --model-repository=/home/seeed/server/docs/examples/model_repository --backend-directory=/home/seeed/TritonServer/backends --strict-model-config=false --min-supported-compute-capability=5.3
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_17.png" /></div>

现在，我们已经完成了所有准备工作。

## 运行程序

由于所有所需环境已部署，我们可以按照以下步骤运行项目。

**步骤 1.** 下载模型及相关文件。

1. 从 GitHub 克隆模块。

打开一个新的终端并执行：

```python
git clone https://github.com/LemonCANDY42/Seeed_SMG_AIOT.git
cd Seeed_SMG_AIOT/
git clone https://github.com/LemonCANDY42/OPIXray.git
```

2. 创建一个新文件夹 “weights” 来存储该算法的训练权重文件 “DOAM.pth”。下载 [权重文件](https://files.seeedstudio.com/wiki/SecurityCheck/DOAM.pth.zip) 并执行：

- `cd OPIXray/DOAM`
- `mkdir weights`

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_19.png" /></div>

3. 创建一个新的 “Dataset” 文件夹来存储 [Xray 图像数据集](https://drive.google.com/file/d/12moaa-ylpVu0KmUCZj_XXeA5TxZuCQ3o/view?usp=sharing)。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_20.png" /></div>

**步骤 2.** 运行推理模型。

执行 `python OPIXray_grpc_image_client.py -u 192.168.8.230:8001 -m opi Dataset`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_21.png" /></div>

结果将显示如下图所示：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan22.jpg" /></div>

## 故障排除

> 当您启动 Triton 服务器时，可能会遇到以下错误：

>1. 如果出现 libb64.so.0d 错误，请执行：
`sudo apt-get install libb64-0d`

>2. 如果出现 libre2.so.2 错误，请执行：
`sudo apt-get install libre2-dev`

>3. 如果出现错误：创建服务器失败：内部错误 - 无法加载所有模型，请执行：
`--exit-on-error=false`

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>