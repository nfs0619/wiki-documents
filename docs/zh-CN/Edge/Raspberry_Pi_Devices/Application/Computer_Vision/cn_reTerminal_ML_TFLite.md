---
description: 开始使用 TensorFlow Lite
title: 开始使用 TensorFlow Lite
keywords:
  - Edge
  - reTerminal 应用
  - 嵌入式机器学习
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal_ML_TFLite
last_update:
  date: 05/15/2025
  author: jianjing Huang
---

# 在 reTerminal 上开始使用 TensorFlow Lite

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<p align="center">
  <img alt="Light" src="https://www.tensorflow.org/site-assets/images/project-logos/tensorflow-lite-logo-social.png" width="45%"/>
&nbsp; &nbsp;
  <img alt="Dark" src="https://raw.githubusercontent.com/lakshanthad/Image/master/CM4_wiki/wiki_thumb.png" width="45%"/>
</p>

TensorFlow Lite 是一组工具，能够通过帮助开发者在移动设备、嵌入式设备和物联网设备上运行模型来实现设备端机器学习。  
TensorFlow Lite 的关键特性是针对设备端机器学习进行了优化，重点关注延迟、隐私、连接性、大小和功耗。该框架旨在支持多个平台，包括 Android 和 iOS 设备、嵌入式 Linux 和微控制器。它还内置支持多种语言，例如 Java、Swift、Objective-C、C++ 和 Python，并通过硬件加速和模型优化提供高性能。它为常见的机器学习任务（如图像分类、目标检测、姿态估计、问答和文本分类）在多个平台上提供了端到端的示例。

## TensorFlow Lite 运行时包安装

`tflite_runtime` 包是一个更小、更简化的 Python 包，包含运行 TensorFlow Lite 推理所需的最少代码。当您只想执行 `.tflite` 模型并避免因大型 TensorFlow 库浪费磁盘空间时，此包是理想选择。

为了获得最佳性能，建议使用 64 位操作系统和相应的 TFLite 包，并启用优化的 XNNPACK 委托。这些可以通过自行从源代码编译，或者使用 Seeed Studio 提供的预构建二进制文件安装。此外，您也可以通过 pip 安装最新的稳定版本。

#### 最新稳定版本（官方构建）

```
pip3 install --index-url https://google-coral.github.io/py-repo/ tflite_runtime
```

#### 针对 64 位操作系统启用 XNNPACK 优化的性能优化包

在撰写本文时，官方尚未提供针对 Python 3.7 64 位操作系统的 XNNPACK 优化的预构建轮文件，因此我们自行编译并共享了这些文件。

```
wget www.files.seeedstudio.com/ml/TFLite/tflite_runtime-2.6.0-cp37-cp37m-linux_aarch64.whl
pip3 install tflite_runtime-2.6.0-cp37-cp37m-linux_aarch64.whl
```

安装完成后，尝试导入 tflite 包：

```
pi@raspberrypi:~ $ python3
Python 3.7.3 (default, Jul 25 2020, 13:03:44) 
[GCC 8.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import tflite_runtime
>>> tflite_runtime.__version__
'2.6.0'
```

## 示例

可以使用 TFLite Converter 将任何 TensorFlow 模型转换为 `.tflite` 格式，前提是它仅包含 TFLite Runtime 支持的操作。以下是目前在 reTerminal 上测试的演示列表，未来将进一步扩展和完善：

<table style={{tableLayout: 'fixed', width: 743}}>
  <colgroup>
    <col style={{width: 146}} />
    <col style={{width: 198}} />
    <col style={{width: 399}} />
  </colgroup>
  <thead>
    <tr>
      <th>模型</th>
      <th>结果</th>
      <th>备注</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>目标检测</td>
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_ML/000402.jpg" alt="pir" width={600} height="auto" /></p></td>
      <td>
        演示：车辆检测 <br />
        <a href="https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/blob/main/jupyter_notebooks/aXeleRate_multi_stage.ipynb" target="_top">Jupyter Notebook</a><br />
        <a href="https://github.com/AIWintermuteAI/aXeleRate/tree/master/example_scripts/tensorflow_lite/detector" target="_top">示例脚本</a> <br />
        alpha 0.25 224x224 66.7 FPS (15 ms.)<br />
        alpha 0.5 224x224 40 FPS (25 ms.)<br />
        alpha 0.75 320x320 14.9 FPS (67 ms.)<br />
        alpha 1.0 320x320 10.4 FPS (96 ms.)<br />
      </td>
    </tr>
    <tr>
      <td>图像分类</td>
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_ML/belt.png" alt="pir" width={600} height="auto" /></p> </td>
      <td>
        演示：工业传送带裂纹识别<br />
        <a href="https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/blob/main/jupyter_notebooks/aXeleRate_conveyor_belt_rip_recognition.ipynb" target="_top">Jupyter Notebook</a><br />
        <a href="https://github.com/AIWintermuteAI/aXeleRate/tree/master/example_scripts/tensorflow_lite/classifier" target="_top">示例脚本</a>
      </td>
    </tr>
    <tr>
      <td>语义分割</td>
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_ML/CHNCXR_0331_1.png" alt="pir" width={600} height="auto" /></p></td>
      <td>
        演示：肺部分割 <br />
        <a href="https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/blob/main/jupyter_notebooks/aXeleRate_lung_segmentation.ipynb" target="_top">Jupyter Notebook</a><br />
        <a href="https://github.com/AIWintermuteAI/aXeleRate/tree/master/example_scripts/tensorflow_lite/segnet" target="_top">示例脚本</a>
      </td>
    </tr>
    <tr>
      <td>人脸年龄/性别识别</td>
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_ML/output.gif" alt="pir" width={600} height="auto" /></p></td>
      <td>
        演示：多阶段推理：MobileNet YOLOv3 alpha 0.25 -&gt; MobileFaceNet <br />
        <a href="https://github.com/AIWintermuteAI/edge_ml_age_gender_recognition/tree/master" target="_top">Github 仓库</a><br />
        <a href="https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/tree/main/examples/tensorflow_lite/multi_stage_inference_age_gender" target="_top">示例脚本</a> <br />
        ~16-20 FPS (使用 <a href="https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/tree/main/examples/armnn/face_age-gender" target="_top">ARM NN</a>)
      </td>
    </tr>
    <tr>
      <td>人脸表情识别</td>
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/ml/emotion/emotions.gif" alt="pir" width={600} height="auto" /></p></td>
      <td>
        演示：多阶段推理：MobileNet YOLOv3 alpha 0.25 -&gt; MobileFaceNet <br />
        <a href="https://github.com/AIWintermuteAI/edge_ml_emotion_recognition/tree/master" target="_top">Github 仓库</a><br />
        <a href="https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/tree/main/examples/tensorflow_lite/multi_stage_inference_emotion" target="_top">示例脚本</a> <br />
        ~11 FPS
      </td>
    </tr>
    <tr>
      <td>人脸防伪</td>
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/ml/face_anti-spoofing/face_anti-spoofing.gif" alt="pir" width={600} height="auto" /></p></td>
      <td>
        演示：多阶段推理：MobileNet YOLOv3 alpha 0.25 -&gt; MobileNet v1 alpha 0.25<br />
        <a href="https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/blob/main/jupyter_notebooks/aXeleRate_face_anti_spoofing.ipynb" target="_top">Jupyter Notebook</a><br />
        <a href="https://github.com/AIWintermuteAI/aXeleRate/tree/master/example_scripts/tensorflow_lite/classifier" target="_top">示例脚本</a>  <br />
        ~23 FPS (ARM NN)
      </td>
    </tr>
    <tr>
      <td>人脸识别</td>
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_ML/face_recognition.gif" alt="pir" width={600} height="auto" /></p></td>
      <td>
        演示：多阶段推理：超轻量人脸检测器与关键点检测 -&gt; MobileFaceNet<br />
         <a href="#" target="_top">Jupyter Notebook</a><br /> 
        <a href="https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/tree/main/examples/armnn/face_recognition" target="_top">示例脚本</a>  <br />
        ~15 FPS (ARM NN)
      </td>
    </tr>
  </tbody>
</table>

## 进一步优化

除非另有说明，示例表中的 FPS 和推理结果均基于 Tensorflow Lite 中的 INT8 量化模型推理。<br />
由于 reTerminal 基于 Raspberry Pi 4，它没有额外的硬件加速器用于神经网络推理，因此只能应用标准的 CPU 推理优化方法。
关于该主题的视频概述如下：

<iframe width="800" height="450" src="https://www.youtube.com/embed/BEDEscDQFxk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

以下是 CPU 推理优化方法的简要概述：

1) **设计更小的网络**。如果目标足够简单（例如图像分类少于 100 类或目标检测少于 10 类或类似任务），较小的网络可以实现可接受的准确性并运行得非常快。例如，MobileNet v1 alpha 0.25 YOLOv2 网络经过训练仅检测一种对象类别（人脸），在没有进一步优化的情况下实现了 62.5 FPS。

**原始 Tensorflow Lite FP32 推理：**
MobileNetv1(alpha 0.25) YOLOv2 1 类 0.89 MB 62.5 FPS  
MobileNetv1(alpha 1.0) YOLOv3 20 类 13.1 MB 7 FPS  

2) **量化**。量化是将神经网络权重的精度通常从 FP32 降低到 INT8 的过程。它将模型大小减少 4 倍，并使用默认的 Tensorflow Lite 内核将延迟减少约 60-80%。通过使用 QAT（量化感知训练），可以将准确性损失最小化，这是通过插入量化节点对网络进行微调的过程。

**原始 Tensorflow Lite INT8 推理：**
MobileNetv1(alpha 0.25) YOLOv2 1 类 0.89 MB 77 FPS  
MobileNetv1(alpha 1.0) YOLOv3 20 类 13.1 MB 11.5 FPS  

3) 使用 **优化内核**。通过利用针对特定 CPU 指令集（例如 ARM 的 NEON SIMD 指令）优化的 CNN 内核，可以提高推理速度。这类网络的示例包括 ARM NN 和 XNNPACK。

Arm NN SDK 是一组开源软件和工具，可在高效能设备上实现机器学习工作负载。  
其描述和提供的基准测试看起来很有前景，但目前在最新的 Raspberry Pi OS 上安装过程较为困难——目前安装最新版本 ARM NN 的唯一正确方法是从源代码交叉编译。虽然有适用于 Debian Bullseye 的二进制文件，但 Raspberry Pi OS 仍基于 Debian Buster。使用基准测试脚本进行推理测试的结果参差不齐，对于单一模型，它的性能甚至比原始 Tensorflow Lite 更差，但在多模型推理中表现更快，这可能是由于更高效的多进程利用。

**ARM NN FP32 推理：**
MobileNetv1(alpha 0.25) YOLOv2 1 类 0.89 MB 83 FPS  
MobileNetv1(alpha 1.0) YOLOv3 20 类 13.1 MB 7.2 FPS  

XNNPACK 是一个用于加速神经网络推理的库，支持 ARM、x86 和 WebAssembly 架构，可在 Android、iOS、Windows、Linux 和 macOS 环境中运行。它作为 Tensorflow Lite 的一个委托集成，默认在 Android 构建中启用，但在其他环境中需要手动启用——因此如果您希望在 Raspberry Pi 4 上使用 XNNPACK，您需要从源代码构建 TensorFlow Lite 解释器包或下载我们提供的第三方二进制文件。

**XNNPACK 委托 Tensorflow Lite FP32 推理：**
MobileNetv1(alpha 0.25) YOLOv2 1 类 0.89 MB 83 FPS  
MobileNetv1(alpha 1.0) YOLOv3 20 类 13.1 MB 7.2 FPS  

优化内核的主要问题是不同框架对不同架构/神经网络操作符/精度类型的支持不均。例如，INT8 优化内核在 ARM NN 和 XNNPACK 中仍在开发中。XNNPACK 对 INT8 优化内核的支持最近刚刚添加，似乎带来了约 30% 的适度性能提升，具体取决于模型中使用的操作符。  
[XNNPACK INT8 支持讨论](https://github.com/google/XNNPACK/issues/999#issuecomment-870791779)

另一个有前景的方向是针对动态量化模型的优化内核，请参阅开发者的讨论：  
[动态量化模型优化讨论](https://github.com/tensorflow/tensorflow/pull/48751#issuecomment-869111116)

开发者声称延迟改善了 3-4 倍，但目前仅限于非常特定的一组模型。一个允许更方便使用的 PR 正在开发中。

4) **剪枝和稀疏推理**。剪枝是对训练好的神经网络进行微调以找到不影响正确预测的权重的过程。这可以减少模型的大小和延迟——准确性减少取决于稀疏设置。实验表明，可以实现高达 80% 的稀疏性，同时对准确性的影响可以忽略不计。详情请参阅  
[移动设备上的神经网络加速](https://ai.googleblog.com/2021/03/accelerating-neural-networks-on-mobile.html)  
以及 [TensorFlow 剪枝指南](https://www.tensorflow.org/model_optimization/guide/pruning/pruning_for_on_device_inference)。  
不幸的是，目前只有非常有限的一组模型支持使用 XNNPACK 进行剪枝和稀疏推理。

## 常见问题解答

#### 问题 1: 我们公司的政策不允许使用第三方二进制文件

您可以使用官方的 TFLite 解释器包，或者按照[这里](https://github.com/PINTO0309/TensorflowLite-bin#2-tensorflow-v230-version-or-later)的说明从源码编译。

## 资源

- **[网页]** [TensorFlow Lite 官方网页](https://www.tensorflow.org/lite)

- **[网页]** [TensorFlow Lite 官方文档](https://www.tensorflow.org/lite/guide)