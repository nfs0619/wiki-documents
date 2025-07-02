---
description: 使用 TensorRT 和 DeepStream SDK 在 NVIDIA Jetson 上部署 YOLOv8 - 数据标注、AI 模型训练、AI 模型部署
title: 使用 TensorRT 和 DeepStream SDK 部署 YOLOv8
tags:
  - 数据标注
  - AI 模型训练
  - AI 模型部署
  - Yolov8
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/YOLOv8-DeepStream-TRT-Jetson
last_update:
  date: 05/15/2025
  author: Lakshantha
---

# 使用 TensorRT 和 DeepStream SDK 在 NVIDIA Jetson 上部署 YOLOv8

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

本指南解释了如何将训练好的 AI 模型部署到 NVIDIA Jetson 平台，并使用 TensorRT 和 DeepStream SDK 进行推理。在这里，我们使用 TensorRT 来最大化 Jetson 平台上的推理性能。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/car.gif" style={{width:1000, height:'auto'}}/></div>

## 前置条件

- Ubuntu 主机 PC（本地或使用 VMware Workstation Player 的虚拟机）
- [reComputer Jetson](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) 或任何运行 JetPack 4.6 或更高版本的 NVIDIA Jetson 设备

## DeepStream 版本与 JetPack 版本对应关系

为了使 YOLOv8 与 DeepStream 一起工作，我们使用了这个 [DeepStream-YOLO](https://github.com/marcoslucianops/DeepStream-Yolo) 仓库，它支持不同版本的 DeepStream。因此，请确保根据正确的 DeepStream 版本使用正确的 JetPack 版本。

<table>
  <thead>
    <tr>
      <th>DeepStream 版本</th>
      <th>JetPack 版本</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={2}>6.2</td>
      <td>5.1.1</td>
    </tr>
    <tr>
      <td>5.1</td>
    </tr>
    <tr>
      <td>6.1.1</td>
      <td>5.0.2</td>
    </tr>
    <tr>
      <td>6.1</td>
      <td>5.0.1 DP</td>
    </tr>
    <tr>
      <td rowSpan={3}>6.0.1</td>
      <td>4.6.3</td>
    </tr>
    <tr>
      <td>4.6.2</td>
    </tr>
    <tr>
      <td>4.6.1</td>
    </tr>
    <tr>
      <td>6.0</td>
      <td>4.6</td>
    </tr>
  </tbody>
</table>

为了验证本指南，我们在运行 JetPack 5.1.1 的 [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) 系统上安装了 **DeepStream SDK 6.2**。

## 将 JetPack 刷写到 Jetson

现在，您需要确保 Jetson 设备已刷写了包含 SDK 组件（如 CUDA、TensorRT、cuDNN 等）的 [JetPack](https://developer.nvidia.com/embedded/jetpack) 系统。您可以使用 NVIDIA SDK Manager 或命令行将 JetPack 刷写到设备。

有关 Seeed Jetson 设备的刷写指南，请参考以下链接：
- [reComputer J1010 | J101](https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack)
- [reComputer J2021 | J202](https://wiki.seeedstudio.com/reComputer_J2021_J202_Flash_Jetpack)
- [reComputer J1020 | A206](https://wiki.seeedstudio.com/reComputer_J1020_A206_Flash_JetPack)
- [reComputer J4012 | J401](https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack)
- [A203 扩展板](https://wiki.seeedstudio.com/reComputer_A203_Flash_System)
- [A205 扩展板](https://wiki.seeedstudio.com/reComputer_A205_Flash_System)
- [Jetson Xavier AGX H01 套件](https://wiki.seeedstudio.com/Jetson_Xavier_AGX_H01_Driver_Installation)
- [Jetson AGX Orin 32GB H01 套件](https://wiki.seeedstudio.com/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack)

## 安装 DeepStream

有多种方法可以将 DeepStream 安装到 Jetson 设备上。您可以参考 [此指南](https://docs.nvidia.com/metropolis/deepstream/dev-guide/text/DS_Quickstart.html) 了解更多信息。然而，我们建议您通过 SDK Manager 安装 DeepStream，因为它可以保证成功且简单的安装。

如果您使用 SDK Manager 安装 DeepStream，则在系统启动后需要执行以下命令来安装 DeepStream 的额外依赖项：

```sh
sudo apt install \
libssl1.1 \
libgstreamer1.0-0 \
gstreamer1.0-tools \
gstreamer1.0-plugins-good \
gstreamer1.0-plugins-bad \
gstreamer1.0-plugins-ugly \
gstreamer1.0-libav \
libgstreamer-plugins-base1.0-dev \
libgstrtspserver-1.0-0 \
libjansson4 \
libyaml-cpp-dev
```

## 安装必要的包

- **步骤 1.** 访问 Jetson 设备的终端，安装 pip 并升级它

```sh
sudo apt update
sudo apt install -y python3-pip
pip3 install --upgrade pip
```

- **步骤 2.** 克隆以下仓库

```sh
git clone https://github.com/ultralytics/ultralytics.git
```

- **步骤 3.** 打开 requirements.txt 文件

```sh
cd ultralytics
vi requirements.txt
```

- **步骤 4.** 编辑以下行。首先需要按 `i` 进入编辑模式。编辑完成后按 `ESC`，然后输入 `:wq` 保存并退出

```sh
# torch>=1.7.0
# torchvision>=0.8.1
```

**注意：** 目前暂时排除 torch 和 torchvision，因为它们将在后续步骤中安装。

- **步骤 5.** 安装必要的包

```sh
pip3 install -r requirements.txt
```

如果安装程序提示 **python-dateutil** 包版本过旧，请通过以下命令升级它：

```sh
pip3 install python-dateutil --upgrade
```

## 安装 PyTorch 和 Torchvision

我们无法通过 pip 安装 PyTorch 和 Torchvision，因为它们与基于 **ARM aarch64 架构** 的 Jetson 平台不兼容。因此，我们需要手动安装预构建的 PyTorch pip wheel 并从源码编译/安装 Torchvision。

访问 [此页面](https://forums.developer.nvidia.com/t/pytorch) 获取所有 PyTorch 和 Torchvision 的链接。

以下是 JetPack 5.0 及以上版本支持的一些版本。

**PyTorch v1.11.0**

支持 JetPack 5.0 (L4T R34.1.0) / JetPack 5.0.1 (L4T R34.1.1) / JetPack 5.0.2 (L4T R35.1.0)，Python 3.8

**文件名：** torch-1.11.0-cp38-cp38-linux_aarch64.whl  
**URL：** https://nvidia.box.com/shared/static/ssf2v7pf5i245fk4i0q926hy4imzs2ph.whl

**PyTorch v1.12.0**

支持 JetPack 5.0 (L4T R34.1.0) / JetPack 5.0.1 (L4T R34.1.1) / JetPack 5.0.2 (L4T R35.1.0)，Python 3.8

**文件名：** torch-1.12.0a0+2c916ef.nv22.3-cp38-cp38-linux_aarch64.whl  
**URL：** https://developer.download.nvidia.com/compute/redist/jp/v50/pytorch/torch-1.12.0a0+2c916ef.nv22.3-cp38-cp38-linux_aarch64.whl

- **步骤 1.** 根据您的 JetPack 版本安装 torch，格式如下

```sh
wget <URL> -O <file_name>
pip3 install <file_name>
```

例如，这里我们运行的是 **JP5.0.2**，因此我们选择 **PyTorch v1.12.0**

```sh
sudo apt-get install -y libopenblas-base libopenmpi-dev
wget https://developer.download.nvidia.com/compute/redist/jp/v50/pytorch/torch-1.12.0a0+2c916ef.nv22.3-cp38-cp38-linux_aarch64.whl -O torch-1.12.0a0+2c916ef.nv22.3-cp38-cp38-linux_aarch64.whl
pip3 install torch-1.12.0a0+2c916ef.nv22.3-cp38-cp38-linux_aarch64.whl
```

- **步骤 2.** 根据已安装的 PyTorch 版本安装 torchvision。例如，我们选择了 PyTorch v1.12.0，这意味着我们需要选择 Torchvision v0.13.0。

```sh
sudo apt install -y libjpeg-dev zlib1g-dev
git clone --branch v0.13.0 https://github.com/pytorch/vision torchvision
cd torchvision
python3 setup.py install --user
```

以下是根据 PyTorch 版本需要安装的对应 torchvision 版本列表：

- PyTorch v1.11 - torchvision v0.12.0
- PyTorch v1.12 - torchvision v0.13.0

如果需要更详细的列表，请查看 [此链接](https://github.com/pytorch/vision/blob/main/README.rst)。

## YOLOv8 的 DeepStream 配置

- **步骤 1.** 克隆以下仓库

```sh
cd ~
git clone https://github.com/marcoslucianops/DeepStream-Yolo
```

- **步骤 2.** 切换到以下提交版本

```sh
cd DeepStream-Yolo
git checkout 68f762d5bdeae7ac3458529bfe6fed72714336ca
```

- **步骤 3.** 将 **gen_wts_yoloV8.py** 从 **DeepStream-Yolo/utils** 复制到 **ultralytics** 目录中

```sh
cp utils/gen_wts_yoloV8.py ~/ultralytics
```

- **步骤 4.** 在 ultralytics 仓库中，从 [YOLOv8 releases](https://github.com/ultralytics/assets/releases/) 下载 **pt 文件**（以 YOLOv8s 为例）

```sh
wget https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8s.pt
```

**注意：** 你可以使用自定义模型，但重要的是在 **cfg** 和 **weights/wts** 文件名中保留 YOLO 模型的引用 **(yolov8_)**，以正确生成引擎。

- **步骤 5.** 生成 cfg、wts 和 labels.txt（如果可用）文件（以 YOLOv8s 为例）

```sh
python3 gen_wts_yoloV8.py -w yolov8s.pt
```

**注意：** 要更改推理尺寸（默认：640）

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

- **步骤 6.** 将生成的 **cfg**、**wts** 和 **labels.txt**（如果生成了）文件复制到 **DeepStream-Yolo** 文件夹中

```sh
cp yolov8s.cfg ~/DeepStream-Yolo
cp yolov8s.wts ~/DeepStream-Yolo
cp labels.txt ~/DeepStream-Yolo
```

- **步骤 7.** 打开 **DeepStream-Yolo** 文件夹并编译库

```sh
cd ~/DeepStream-Yolo
CUDA_VER=11.4 make -C nvdsinfer_custom_impl_Yolo  # 对于 DeepStream 6.2/ 6.1.1 / 6.1
CUDA_VER=10.2 make -C nvdsinfer_custom_impl_Yolo  # 对于 DeepStream 6.0.1 / 6.0
```

- **步骤 8.** 根据你的模型编辑 **config_infer_primary_yoloV8.txt** 文件（以 YOLOv8s 和 80 类为例）

```sh
[property]
...
custom-network-config=yolov8s.cfg
model-file=yolov8s.wts
...
num-detected-classes=80
...
```

- **步骤 9.** 编辑 **deepstream_app_config.txt** 文件

```sh
...
[primary-gie]
...
config-file=config_infer_primary_yoloV8.txt
```

- **步骤 10.** 在 **deepstream_app_config.txt** 文件中更改视频源。这里加载了一个默认视频文件，如下所示

```sh
...
[source0]
...
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
```

## 运行推理

```sh
deepstream-app -c deepstream_app_config.txt
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/FP32-1.gif" style={{width:1000, height:'auto'}}/></div>

上述结果是在 Jetson AGX Orin 32GB H01 Kit 上以 FP32 和 YOLOv8s 640x640 运行的。我们可以看到 FPS 大约为 60，但这并不是真实的 FPS，因为当我们在 **deepstream_app_config.txt** 文件的 **[sink0]** 下设置 **type=2** 时，FPS 被限制为显示器的刷新率，而我们用于测试的显示器是 60Hz。然而，如果将此值更改为 **type=1**，则可以获得最大 FPS，但不会有实时检测输出。

对于相同的视频源和上述相同的模型，在 **[sink0]** 下将 **type=1** 更改后，可以获得以下结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/FP32-no-screen.gif" style={{width:1000, height:'auto'}}/></div>

如你所见，我们可以获得大约 139 的 FPS，这与真实的 FPS 值一致。

## INT8 校准

如果你想使用 INT8 精度进行推理，需要按照以下步骤操作：

- **步骤 1.** 安装 OpenCV

```sh
sudo apt-get install libopencv-dev
```

- **步骤 2.** 使用 OpenCV 支持编译/重新编译 **nvdsinfer_custom_impl_Yolo** 库

```sh
cd ~/DeepStream-Yolo
CUDA_VER=11.4 OPENCV=1 make -C nvdsinfer_custom_impl_Yolo  # 对于 DeepStream 6.2/ 6.1.1 / 6.1
CUDA_VER=10.2 OPENCV=1 make -C nvdsinfer_custom_impl_Yolo  # 对于 DeepStream 6.0.1 / 6.0
```

- **步骤 3.** 对于 COCO 数据集，下载 [val2017](https://drive.google.com/file/d/1gbvfn7mcsGDRZ_luJwtITL-ru2kK99aK/view?usp=sharing)，解压并移动到 **DeepStream-Yolo** 文件夹

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

**注意：** NVIDIA 建议至少使用 500 张图像以获得良好的准确性。在此示例中，选择了 1000 张图像以获得更好的准确性（更多图像 = 更高准确性）。更高的 INT8_CALIB_BATCH_SIZE 值将带来更高的准确性和更快的校准速度。根据你的 GPU 内存设置它。你可以从 head -1000 设置。例如，对于 2000 张图像，使用 head -2000。此过程可能需要较长时间。

- **步骤 6.** 使用所有选定的图像创建 **calibration.txt** 文件

```sh
realpath calibration/*jpg > calibration.txt
```

- **步骤 7.** 设置环境变量

```sh
export INT8_CALIB_IMG_PATH=calibration.txt
export INT8_CALIB_BATCH_SIZE=1
```

## 第 8 步：更新 **config_infer_primary_yoloV8.txt** 文件

从以下内容：

```sh
...
model-engine-file=model_b1_gpu0_fp32.engine
#int8-calib-file=calib.table
...
network-mode=0
...
```

修改为：

```sh
...
model-engine-file=model_b1_gpu0_int8.engine
int8-calib-file=calib.table
...
network-mode=1
...
```

## 第 9 步：运行推理之前，在 **deepstream_app_config.txt** 文件的 **[sink0]** 部分下设置 **type=2**，以获得最大 FPS 性能。

## 第 10 步：运行推理

```sh
deepstream-app -c deepstream_app_config.txt
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/2.png" style={{width:1000, height:'auto'}}/></div>

在这里，我们获得了大约 350 FPS 的值！

## 多流配置

NVIDIA DeepStream 允许您在单个配置文件中轻松设置多流，以构建多流视频分析应用程序。在本教程的后续部分，我们将演示高 FPS 性能的模型如何在多流应用中发挥作用，并提供一些基准测试。

这里我们以 9 个流为例。我们将修改 **deepstream_app_config.txt** 文件。

### 第 1 步：在 **[tiled-display]** 部分中，将行和列更改为 3 和 3，以便我们可以有一个 3x3 的网格，包含 9 个流。

```sh
[tiled-display]
rows=3
columns=3
```

### 第 2 步：在 **[source0]** 部分中，设置 **num-sources=9** 并添加更多的 **uri**。这里我们将简单地将当前示例视频文件复制 8 次，总共组成 9 个流。不过，您可以根据应用需求更改为不同的视频流。

```sh
[source0]
enable=1
type=3
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
num-sources=9
```

现在，如果您再次使用 **deepstream-app -c deepstream_app_config.txt** 命令运行应用程序，您将看到以下输出：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/7.jpg" style={{width:1000, height:'auto'}}/></div>

## trtexec 工具

在示例目录中包含一个名为 [trtexec](https://docs.nvidia.com/deeplearning/tensorrt/developer-guide/index.html#trtexec) 的命令行工具。trtexec 是一个无需开发您自己的应用程序即可使用 TensorRT 的工具。trtexec 工具有以下三个主要用途：

- 在随机或用户提供的输入数据上对网络进行基准测试。
- 从模型生成序列化引擎。
- 从构建器生成序列化的时间缓存。

在这里，我们可以使用 trtexec 工具快速对具有不同参数的模型进行基准测试。但首先，您需要一个 ONNX 模型，我们可以通过 ultralytics YOLOv8 生成该 ONNX 模型。

### 第 1 步：使用以下命令生成 ONNX：

```sh
yolo mode=export model=yolov8s.pt format=onnx
```

### 第 2 步：使用 trtexec 构建引擎文件：

```sh
cd /usr/src/tensorrt/bin
./trtexec --onnx=<path_to_onnx_file> --saveEngine=<path_to_save_engine_file>
```

例如：

```sh
./trtexec --onnx=/home/nvidia/yolov8s.onnx --saveEngine=/home/nvidia/yolov8s.engine
```

这将输出性能结果，并生成一个 **.engine** 文件。默认情况下，它会将 ONNX 转换为 **FP32** 精度的 TensorRT 优化文件，您可以看到如下输出：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/3.png" style={{width:1000, height:'auto'}}/></div>

在这里，我们可以将平均延迟视为 7.2ms，这相当于 139FPS。这与之前 DeepStream 演示中获得的性能相同。

然而，如果您需要 **INT8** 精度以获得更好的性能，可以执行以下命令：

```sh
./trtexec --onnx=/home/nvidia/yolov8s.onnx --int8 --saveEngine=/home/nvidia/yolov8s.engine 
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/4.jpg" style={{width:1000, height:'auto'}}/></div>

在这里，我们可以将平均延迟视为 3.2ms，这相当于 313FPS。

## YOLOv8 基准测试结果

我们对 [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)、[AGX Orin 32GB H01 Kit](https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html) 和 [reComputer J2021](https://www.seeedstudio.com/reComputer-J2021-p-5438.html) 上运行的不同 YOLOv8 模型进行了性能基准测试。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/14.png" style={{width:1000, height:'auto'}}/></div>

要了解我们使用 YOLOv8 模型进行的更多性能基准测试，请查看 [我们的博客](https://www.seeedstudio.com/blog/2023/03/30/yolov8-performance-benchmarks-on-nvidia-jetson-devices)。

## 多流模型基准测试

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer/Application/YOLOv8-DeepStream-TRT-Jetson/1.jpg" style={{width:1000, height:'auto'}}/></div>

在 reComputer Jetson Orin 系列产品上运行多个 DeepStream 应用程序后，我们使用 YOLOv8s 模型进行了基准测试。

- 首先，我们使用单个 AI 模型并在该模型上运行多个流。
- 其次，我们使用多个 AI 模型并在多个模型上运行多个流。

所有这些基准测试均在以下条件下进行：

- YOLOv8s 640x640 图像输入
- 禁用 UI
- 开启最大功率和最大性能模式

<iframe src="https://jetson-camera-selection-tool.seeedstudio.com/" width="100%" height="690px"></iframe>

从这些基准测试中可以看出，对于最高端的 Orin NX 16GB 设备，使用单个 YOLOv8s 模型在 INT8 模式下，可以支持大约 40 个摄像头，每个摄像头约 5fps。而对于每个流使用多个 YOLOv8s 模型在 INT8 模式下，可以支持大约 11 个摄像头，每个摄像头约 15fps。对于多模型应用，由于设备的 RAM 限制以及每个模型占用大量 RAM，摄像头数量会减少。

总而言之，当边缘设备仅运行 YOLOv8 模型且没有其他应用程序时，<strong> Jetson Orin Nano 8GB 可以支持 4-6 个流，而 Jetson Orin NX 16GB 可以在最大容量下支持 16-18 个流。</strong> 然而，在实际应用中，由于 RAM 资源的使用，这些数字可能会减少。因此，建议将这些数据作为参考，并根据您的具体条件进行测试。

## 资源

- [YOLOv8 文档](https://docs.ultralytics.com)
- [TensorRT 文档](https://docs.nvidia.com/deeplearning/tensorrt/developer-guide/index.html)
- [DeepStream SDK 文档](https://docs.nvidia.com/metropolis/deepstream/dev-guide)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>