---
description: 使用 Deci 在 NVIDIA Jetson 设备上优化 AI 模型
title: Deci 入门指南
tags:
  - AI 模型优化
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/DeciAI-Getting-Started
last_update:
  date: 05/15/2025
  author: w0x7ce
---

# 在 NVIDIA® Jetson 设备上使用 Deci 入门

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/Deci-thumb.jpg" alt="pir" width={1000} height="auto" /></p>

Deci 平台使您能够轻松地在生产环境中管理、优化、部署和服务模型。您可以继续使用流行的深度学习框架，例如 TensorFlow、PyTorch、Keras 和 ONNX。您只需要使用基于 Web 的 Deci 平台或 Deci Python 客户端即可从代码中运行它。

Deci 提供以下功能：

- **性能加速** – 使用 Deci 的自动神经架构构建 (AutoNAC) 技术，在任何硬件上将模型推理性能加速 2 倍至 10 倍，而不会影响准确性。
- **适配任何硬件的扩展性** – 减少高达 80% 的云计算成本和物料清单 (BOM)，无论是在私有云还是公共云，从您自己的服务器或任何计算机、边缘设备或移动设备上实现大规模推理。
- **推理基准测试** – 在任何目标硬件环境和批量大小上对模型进行基准测试，以找到模型的最佳吞吐量、延迟、内存使用和云成本。
- **模型打包** – 快速轻松地部署到生产环境 – 从 Deci Lab 无缝部署训练好的模型到任何生产环境，包括所有环境库依赖项在一个单一封装容器中。
- **模型服务** – Deci 的专有深度学习运行时推理引擎可以部署在您自己的机器上（任何硬件 – 本地 / 边缘 / 云）。Deci 提供以下选项来将您的 Deci 优化模型部署为独立高效的运行时服务器：

  - Deci 的运行时推理容器 (RTiC)，这是一个容器化的机器学习运行时引擎。
  - Deci 的 INFERY（来源于单词 inference），使您可以从 Python 包中运行模型。

## 支持的硬件

Deci 支持以下与 Jetson 相关的硬件：

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
  - A203 (版本 2) 载板
  - A205 载板
  - A206 载板

- NVIDIA 官方开发套件：

  - NVIDIA® Jetson Nano 开发套件
  - NVIDIA® Jetson Xavier NX 开发套件
  - NVIDIA® Jetson AGX Xavier 开发套件
  - NVIDIA® Jetson TX2 开发套件
  - NVIDIA® Jetson AGX Orin 开发套件

- NVIDIA 官方 SoM 模块：
  
  - NVIDIA® Jetson Nano 模块
  - NVIDIA® Jetson Xavier NX 模块
  - NVIDIA® Jetson TX2 NX 模块
  - NVIDIA® Jetson TX2 模块
  - NVIDIA® Jetson AGX Xavier 模块

如果您拥有上述任何硬件，您可以继续在您的硬件上使用 Deci。

## 硬件准备条件

准备以下硬件：

- 运行 JetPack 4.6 的任何上述 Jetson 设备
- 显示器、键盘、鼠标（可选）

## 注册 Deci 账户

- **步骤 1.** 访问 [此页面](https://console.deci.ai/sign-up) 注册 Deci 账户

- **步骤 2.** 输入所需信息并完成注册流程

完成后，您将进入 Deci Lab 平台。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/2.png" alt="pir" width={1000} height="auto" /></p>

## Deci Lab 模型库中的预优化模型

默认情况下，Deci Lab 包含 **ResNet50 Baseline** 模型，该模型已经针对不同硬件进行了几种优化。这还不是全部。Deci 提供了一个庞大的基础模型集合，以及针对不同硬件优化的模型版本，统称为 Deci 模型库。点击 **Model Zoo** 和 **List** 查看所有可用模型。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/3.png" alt="pir" width={1000} height="auto" /></p>

例如，我们可以在搜索栏中搜索 **YOLOX**，以查看所有 YOLOX 模型。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/4.png" alt="pir" width={1000} height="auto" /></p>

如您所见，有基础模型如 **YOLOX_Nano**、**YOLOX_Small**，以及优化模型如 **YOLOX_Nano Jetson Nano Optimized**、**YOLOX_Nano Jetson Xavier Optimized**。

## 优化您自己的模型

如上所述，您可以直接使用预优化模型，而无需手动优化它们。然而，如果您想使用自己的模型，可以将模型上传到 Deci Lab，并根据目标硬件进行优化。

**步骤 1:** 在 Deci Lab 上，点击 **+ New Model**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/5.png" alt="pir" width={1000} height="auto" /></p>

**步骤 2:** 根据您的模型选择一个合适的任务。这里我们选择了 **Object Detection**（目标检测）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/6.png" alt="pir" width={500} height="auto" /></p>

**步骤 3:** 输入模型名称并点击 **Next**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/7.png" alt="pir" width={500} height="auto" /></p>

**步骤 4:** 选择一个模型框架（此处为 ONNX），根据所选框架上传模型并点击 **Next**。这里我们上传了 [yolov6n.onnx 模型](https://github.com/meituan/YOLOv6/releases/tag/0.1.0)。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/8.png" alt="pir" width={500} height="auto" /></p>

**步骤 5:** 选择 **Primary hardware**（主要硬件）、**Inference batch size**（推理批量大小）、**Quantization level**（量化级别），然后点击 **Next**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/9.png" alt="pir" width={500} height="auto" /></p>

**步骤 6：** 添加性能目标和约束。这在使用 **AutoNAC**（包含在 **高级版本** 中的功能）时非常有用。AutoNAC 可以显著提高模型推理性能，同时减少模型大小以及更多优化。如果您没有使用 AutoNAC，则需要为 **Throughput（吞吐量）** 填写一个值，这里我们设置为 40（可以是一个随机值）。最后，点击 **start** 开始优化过程。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/10.png" alt="pir" width={500} height="auto" /></p>

现在优化过程将显示其进度，如下所示，并将在几分钟后完成。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/11.png" alt="pir" width={1000} height="auto" /></p>

## 比较模型性能

我们可以使用 Deci Lab 平台比较基础模型和优化模型之间的性能，也可以将模型部署到目标硬件并运行基准测试。尽管在 Deci Lab 上可视化所有内容更容易，但建议将模型部署并在目标设备上运行基准测试，以确保性能指标对特定硬件是准确的。

### 在 Deci Lab 上可视化

这里我们将使用 **YOLOX_Nano** 基础模型和 **YOLOX_Nano Jetson Xavier NX Optimized** 优化模型进行比较。

**步骤 1：** 导航到 Model Zoo（模型库），然后点击 **YOLOX_Nano** 基础模型和 **YOLOX_Nano Jetson Xavier NX Optimized** 优化模型旁边的 **clone**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/12.png" alt="pir" width={1000} height="auto" /></p>

**步骤 2：** 在 Deci Lab 上，点击 **MODEL_VERSIONS** 下的 **YOLOX_Nano** 模型，进入 **model insights（模型洞察）** 部分。

**步骤 3：** 选择 **Jetson Xavier** 作为 **Target Hardware（目标硬件）**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/13.png" alt="pir" width={1000} height="auto" /></p>

现在您将看到 **YOLOX_Nano** 模型的所有性能指标，如果它被部署到 Jetson Xavier NX 设备。

**步骤 4：** 返回 Deci Lab 的主页，点击 **MODEL_VERSIONS** 下的 **YOLOX_Nano Jetson Xavier NX Optimized** 优化模型。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/14.png" alt="pir" width={1000} height="auto" /></p>

现在您将看到 **YOLOX_Nano Jetson Xavier NX Optimized** 优化模型的所有性能指标，如果它被部署到 Jetson Xavier NX 设备。

#### 性能比较

我们可以使用下表比较之前针对 Jetson Xavier 目标硬件获得的结果：

<table>
<tr>
<th></th>
<th>YOLOX_Nano</th>
<th>YOLOX_Nano Jetson Xavier NX Optimized</th>
</tr>
<tr>
<td>Accuracy（准确率）</td>
<td>25.8</td>
<td>25.8</td>
</tr>
<tr>
<td>Throughput（吞吐量）</td>
<td>62.8fps</td>
<td>175.8fps</td>
</tr>
<tr>
<td>Latency（延迟）</td>
<td>15.9361ms</td>
<td>5.6897ms</td>
</tr>
<tr>
<td>GPU memory footprint（GPU 内存占用）</td>
<td>1.05MB</td>
<td>1.01MB</td>
</tr>
<tr>
<td>Model size（模型大小）</td>
<td>3.66MB</td>
<td>9.74MB</td>
</tr>
</table>

如您所见，主要的性能提升是吞吐量，优化后的模型几乎比基础模型快 **2.7 倍**。

### 在 Jetson 设备上部署并运行基准测试

我们现在将上述两个模型部署到 Jetson Xavier NX 设备，并执行基准测试以确保获得准确的性能结果。

#### 安装 INFERY

- **步骤 1：** 在 Jetson 设备上打开终端窗口并更新软件包列表

```sh
sudo apt update 
```

- **步骤 2：** 安装 pip 包管理器

```sh
sudo apt install python3-pip
```

- **步骤 3：** 更新 pip 到最新版本

```sh
python3 -m pip install -U pip
```

- **步骤 4：** 为 Jetson 安装 INFERY

```sh
sudo python3 -m pip install https://deci-packages-public.s3.amazonaws.com/infery_jetson-3.2.2-cp36-cp36m-linux_aarch64.whl
```

#### 加载模型

- **步骤 1：** 在 Deci Lab 上，将鼠标悬停在模型名称上，然后从弹出窗口中点击 **Deploy（部署）**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/15.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 2：** 点击 **Download model（下载模型）** 将模型下载到 PC，然后将此模型文件复制到 Jetson 设备的主目录。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/16.png" alt="pir" width={500} height="auto" /></p>

- **步骤 3：** 在 Jetson 设备上打开终端窗口并执行以下命令：

```sh
lakshanthad@nano:~$ python3
Python 3.6.9 (default, Dec  8 2021, 21:08:43)
[GCC 8.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import infery, numpy as np
```

- **步骤 4：** 将 Deci Lab **Deploy Model（部署模型）** 窗口下 **LOAD MODEL（加载模型）** 部分的第二条命令复制到 Jetson 设备的终端窗口（确保目标硬件选择为 Jetson）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/17.png" alt="pir" width={500} height="auto" /></p>

```
例如：model = infery.load(model_path='YOLOX_Nano.onnx', framework_type='onnx', inference_hardware='gpu')
```

**注意：** 请确保根据您之前复制模型的位置调整 **model_path** 参数。如果您将模型文件复制到主目录，可以保持路径不变。

如果模型加载成功，您将看到以下输出：

```sh
infery_manager -INFO- Loading model YOLOX_Nano.onnx to the GPU
infery_manager -INFO- Successfully loaded YOLOX_Nano.onnx to the GPU.
```

#### 测量模型性能

要使用 INFERY 测量模型性能，请从您的应用程序运行 **model.benchmark** 命令：

```sh
model.benchmark(batch_size=1)
```

以下是 **YOLOX_Nano** 模型的输出：

```sh
base_inferencer -INFO- Benchmarking the model in batch size 1 and dimensions [(3, 416, 416)]...
<ModelBenchmarks: {
    "batch_size": 1,
    "batch_inf_time": "13.63 ms",
    "batch_inf_time_variance": "1.12 ms",
    "memory": "3537.89 mb",
    "pre_inference_memory_used": "3532.94 mb",
    "post_inference_memory_used": "3537.89 mb",
    "total_memory_size": "7765.41 mb",
    "throughput": "73.36 fps",
    "sample_inf_time": "13.63 ms",
    "include_io": true,
    "framework_type": "onnx",
    "framework_version": "1.8.0",
    "inference_hardware": "GPU",
    "infery_version": "3.2.2",
    "date": "18:23:57__07-06-2022",
    "ctime": 1657112037,
    "h_to_d_mean": null,
    "d_to_h_mean": null,
    "h_to_d_variance": null,
    "d_to_h_variance": null
}>
```

### 说明：

- **'batch_size'** – 指定用于基准测试的批量大小。
- **'batch_inf_time'** – 指定整个批量的推理延迟时间。
- **'sample_inf_time'** – 指定批量中单个样本的推理延迟时间，相当于 `batch_inf_time` 除以 `batch_size`。
- **'memory'** – 指定模型在推理过程中使用的内存占用。
- **'throughput'** – 指定每秒处理的请求数量（前向传播次数）。
- **'batch_inf_time_variance'** – 指定基准测试期间批量推理时间的方差。如果方差较高，建议增加传递给 **'repetitions'** 的次数以提高基准测试的可靠性。

重复相同的步骤，针对 **YOLOX_Nano Jetson Xavier NX 优化模型** 进行基准测试，您将看到如下结果：

```sh
base_inferencer -INFO- 正在对模型进行基准测试，批量大小为 1，维度为 [(3, 416, 416)]...
<ModelBenchmarks: {
    "batch_size": 1,
    "batch_inf_time": "5.28 ms",
    "batch_inf_time_variance": "0.05 ms",
    "memory": "2555.62 mb",
    "pre_inference_memory_used": "2559.38 mb",
    "post_inference_memory_used": "2555.62 mb",
    "total_memory_size": "7765.41 mb",
    "throughput": "189.25 fps",
    "sample_inf_time": "5.28 ms",
    "include_io": true,
    "framework_type": "trt",
    "framework_version": "8.0.1.6",
    "inference_hardware": "GPU",
    "infery_version": "3.2.2",
    "date": "18:30:05__07-06-2022",
    "ctime": 1657112405,
    "h_to_d_mean": "0.43 ms",
    "d_to_h_mean": "0.20 ms",
    "h_to_d_variance": "0.00 ms",
    "d_to_h_variance": "0.00 ms"
}>
```

#### 性能对比

我们主要可以通过 **吞吐量（throughput）** 来比较这些结果：

|            | YOLOX_Nano | YOLOX_Nano Jetson Xavier NX 优化模型 |
|------------|------------|---------------------------------------|
| 吞吐量     | 73.36fps   | 189.25fps                             |

可以看出，优化后的模型比基础模型快了近 **2.57 倍**。

## 资源

- **[网页]** [Deci AI 文档](https://docs.deci.ai/docs)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>