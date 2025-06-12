---
description: 交通管理 DeepStream SDK
title: 交通管理 DeepStream SDK
keywords:
  - Edge
  - reComputer 应用
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Traffic-Management-DeepStream-SDK
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # 用于 Disqus

---

# 使用 DeepStream SDK 的智能交通管理系统

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/DeepStream/demo-optimized.gif" /></div>

## 概述

随着城市日益发展，道路上的车辆数量也在不断增加。因此，交通拥堵问题迅速加剧，这可能会对一个国家的发展产生重大影响。本 Wiki 提出了一种使用 AI 视觉解决此问题的方案。通过捕获部署在每个交通灯处的 CCTV 摄像头的实时视频流，进行对象检测以识别所有车辆，然后根据车辆拥堵情况控制交通灯。此外，这些数据可以与车辆品牌和行人数量一起发送到数据库进行进一步分析。

对于此 AI 视觉应用，我们将使用 NVIDIA 的 DeepStream SDK，并在 NVIDIA Jetson 设备上进行边缘推理。此外，我们将使用 [NVIDIA NGC Model Catalog](https://catalog.ngc.nvidia.com/models) 中的预训练模型来快速轻松地完成部署过程。NVIDIA NGC Model Catalog 提供了许多其他不同应用的预训练模型。

## 什么是 DeepStream SDK？

NVIDIA 的 [DeepStream SDK](https://developer.nvidia.com/deepstream-sdk) 提供了一个完整的流分析工具包，用于基于 AI 的多传感器处理、视频、音频和图像理解。DeepStream 通过提供开发人员使用 C/C++、Python 或低代码图形编程（使用 Graph Composer）的选项，带来了开发灵活性。DeepStream 配备了各种硬件加速插件和扩展。

<div align="center"><img width={1000} src="https://developer.nvidia.com/sites/default/files/akamai/ds-workflow.png" /></div>

DeepStream 专为开发人员和企业设计，支持广泛的 AI 模型，包括流行的对象检测和分割模型，如先进的 SSD、YOLO、FasterRCNN 和 MaskRCNN。您还可以在 DeepStream 中集成自定义功能和库。

DeepStream 提供了从快速原型到完整生产级解决方案的灵活性。它还允许您选择推理路径。通过与 NVIDIA Triton Inference Server 的原生集成，您可以在 PyTorch 和 TensorFlow 等原生框架中部署模型进行推理。使用 NVIDIA TensorRT 进行高吞吐量推理，并支持多 GPU、多流和批处理选项，您可以实现最佳性能。

## 支持的硬件

DeepStream SDK 支持以下硬件：

- Seeed 的套件：

  - reComputer J1010，基于 Jetson Nano
  - reComputer J1020，基于 Jetson Nano
  - reComputer J2011，基于 Jetson Xavier NX 8GB
  - reComputer J2012，基于 Jetson Xavier NX 16GB

- Seeed 的载板：

  - Jetson Mate
  - Jetson SUB Mini PC
  - Jetson Xavier AGX H01 套件
  - A203 载板
  - A203（版本 2）载板
  - A205 载板
  - A206 载板

- NVIDIA 的官方开发套件：

  - NVIDIA® Jetson Nano 开发套件
  - NVIDIA® Jetson Xavier NX 开发套件
  - NVIDIA® Jetson AGX Xavier 开发套件
  - NVIDIA® Jetson TX2 开发套件
  - NVIDIA® Jetson AGX Orin 开发套件

- NVIDIA 的官方 SoMs：

  - NVIDIA® Jetson Nano 模块
  - NVIDIA® Jetson Xavier NX 模块
  - NVIDIA® Jetson TX2 NX 模块
  - NVIDIA® Jetson TX2 模块
  - NVIDIA® Jetson AGX Xavier 模块

## 前置条件

- 运行 JetPack 的上述任意 Jetson 设备
- 键盘和 HDMI 显示器
- 运行 Windows、Linux 或 Mac 的主机 PC
- 支持 Jetson 设备的 USB 摄像头或 MIPI CSI 摄像头

## 入门指南

在这里，我们将使用 [DashCamNet 模型](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/tao/models/dashcamnet) 作为主要检测器，用于检测感兴趣的对象。对于每辆检测到的汽车，[VehicleTypeNet 模型](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/tao/models/vehicletypenet) 和 [VehicleMakeNet 模型](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/tao/models/vehiclemakenet) 将作为次级分类器，分别确定汽车的类型和品牌。VehicleTypeNet 分类如下：轿跑车、轿车、SUV、货车、大型车辆和卡车。而 VehicleMakeNet 分类如下品牌：Acura、Audi、BMW、Chevrolet、Chrysler、Dodge、Ford、GMC、Honda、Hyundai、Infiniti、Jeep、Kia、Lexus、Mazda、Mercedes、Nissan、Subaru、Toyota 和 Volkswagen。

> 以下工作流程已在运行 [JetPack 4.6.1](https://developer.nvidia.com/embedded/jetpack-sdk-461) 的 [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html) 上测试

**步骤 1：** 确保您已在 Jetson 设备上正确安装所有 **SDK 组件** 和 **DeepStream SDK**。（参考 [此 Wiki](https://wiki.seeedstudio.com/reComputer_J1020_A206_Flash_JetPack/) 了解安装过程）

**注意：** 推荐使用 **NVIDIA SDK Manager** 安装所有 SDK 组件和 DeepStream SDK。

**步骤 2：** 下载配置文件

```sh
git clone https://github.com/NVIDIA-AI-IOT/deepstream_reference_apps.git
cd deepstream_reference_apps/deepstream_app_tao_configs/
sudo cp -a * /opt/nvidia/deepstream/deepstream/samples/configs/tao_pretrained_models/
```

**步骤 3：** 下载模型

```sh
sudo apt install -y wget zip
cd /opt/nvidia/deepstream/deepstream/samples/configs/tao_pretrained_models/
sudo ./download_models.sh
```

**步骤 4：** 打开 **deepstream_app_source1_dashcamnet_vehiclemakenet_vehicletypenet.txt**

```sh
vi deepstream_app_source1_dashcamnet_vehiclemakenet_vehicletypenet.txt
```

**步骤 5：** 将 [sink0] 下的 **sync=1** 更改为 **sync=0**

```sh
[sink0]
enable=1
#Type - 1=FakeSink 2=EglSink 3=File
type=2
sync=0
source-id=0
gpu-id=0
```

**步骤 6：** 在 [primary-gie] 下，将 `model-engine-file` 修改为 **../../models/tao_pretrained_models/dashcamnet/resnet18_dashcamnet_pruned.etlt_b1_gpu0_fp16.engine**

```sh
[primary-gie]
enable=1
gpu-id=0
# 根据需要修改
model-engine-file=../../models/tao_pretrained_models/dashcamnet/resnet18_dashcamnet_pruned.etlt_b1_gpu0_fp16.engine
batch-size=1
# 应用程序需要用于 OSD 的配置，不是插件属性
bbox-border-color0=1;0;0;1
bbox-border-color1=0;1;1;1
bbox-border-color2=0;0;1;1
bbox-border-color3=0;1;0;1
gie-unique-id=1
config-file=config_infer_primary_dashcamnet.txt
```

**步骤 7：** 在 [secondary-gie0] 下，将 `model-engine-file` 修改为 **../../models/tao_pretrained_models/vehiclemakenet/resnet18_vehiclemakenet_pruned.etlt_b4_gpu0_fp16.engine**

```sh
[secondary-gie0]
enable=1
model-engine-file=../../models/tao_pretrained_models/vehiclemakenet/resnet18_vehiclemakenet_pruned.etlt_b4_gpu0_fp16.engine
gpu-id=0
batch-size=4
gie-unique-id=4
operate-on-gie-id=1
operate-on-class-ids=0;
config-file=config_infer_secondary_vehiclemakenet.txt
```

**步骤 8：** 在 [secondary-gie1] 下，将 `model-engine-file` 修改为 **../../models/tao_pretrained_models/vehicletypenet/resnet18_vehicletypenet_pruned.etlt_b4_gpu0_fp16.engine**

```sh
[secondary-gie1]
enable=1
model-engine-file=../../models/tao_pretrained_models/vehicletypenet/resnet18_vehicletypenet_pruned.etlt_b4_gpu0_fp16.engine
gpu-id=0
batch-size=4
gie-unique-id=5
operate-on-gie-id=1
operate-on-class-ids=0;
config-file=config_infer_secondary_vehicletypenet.txt
```

**步骤 9：** 将摄像头、键盘和 HDMI 显示器连接到 Jetson 设备，并执行以下命令

```sh
sudo deepstream-app -c deepstream_app_source1_dashcamnet_vehiclemakenet_vehicletypenet.txt
```

现在，您可以在连接的 HDMI 显示器上可视化演示，如下所示：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/DeepStream/demo-optimized.gif" /></div>

如果您想尝试位于 **/opt/nvidia/deepstream/deepstream/samples/configs/tao_pretrained_models/** 下的其他演示，可以通过以下命令运行：

```sh
sudo deepstream-app -c deepstream_app_source1_$MODEL.txt
```

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>