---
description: 在 NVIDIA Jetson 上使用 TensorRT 部署 YOLOv8 - 数据标注、AI 模型训练、AI 模型部署
title: 使用 TensorRT 部署 YOLOv8
tags:
  - 数据标注
  - AI 模型训练
  - AI 模型部署
  - Yolov8
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/YOLOv8-TRT-Jetson
last_update:
  date: 05/15/2025
  author: Lakshantha
---

# 在 NVIDIA Jetson 上使用 TensorRT 部署 YOLOv8

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

本指南介绍了如何将 YOLOv8 模型部署到 NVIDIA Jetson 平台，并使用 TensorRT 进行推理。在这里，我们使用 TensorRT 来最大化 Jetson 平台上的推理性能。

本指南将介绍不同的计算机视觉任务，例如：

- 目标检测
- 图像分割
- 图像分类
- 姿态估计
- 目标跟踪

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/8.gif
" style={{width:1000, height:'auto'}}/></div>

## 前置条件

- Ubuntu 主机电脑（原生或使用 VMware Workstation Player 的虚拟机）
- [reComputer Jetson](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) 或任何运行 JetPack 5.1.1 或更高版本的 NVIDIA Jetson 设备

:::note
本指南已在 [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) 和 reComputer 工业版 J4012 [https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html]（由 NVIDIA Jetson Orin NX 16GB 模块提供支持）上测试和验证。
:::

## 将 JetPack 刷写到 Jetson

现在，您需要确保 Jetson 设备已刷写 [JetPack](https://developer.nvidia.com/embedded/jetpack) 系统。您可以使用 NVIDIA SDK Manager 或命令行将 JetPack 刷写到设备上。

有关 Seeed Jetson 支持设备的刷写指南，请参考以下链接：
- [reComputer J1010 | J101](https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack)
- [reComputer J2021 | J202](https://wiki.seeedstudio.com/reComputer_J2021_J202_Flash_Jetpack)
- [reComputer J1020 | A206](https://wiki.seeedstudio.com/reComputer_J1020_A206_Flash_JetPack)
- [reComputer J4012 | J401](https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack)
- [A203 载板](https://wiki.seeedstudio.com/reComputer_A203_Flash_System)
- [A205 载板](https://wiki.seeedstudio.com/reComputer_A205_Flash_System)
- [Jetson Xavier AGX H01 套件](https://wiki.seeedstudio.com/Jetson_Xavier_AGX_H01_Driver_Installation)
- [Jetson AGX Orin 32GB H01 套件](https://wiki.seeedstudio.com/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack)

:::note
请确保刷写 JetPack 版本 5.1.1，因为这是我们为本指南验证的版本。
:::

## 一行代码将 YOLOv8 部署到 Jetson！

在您使用 JetPack 刷写 Jetson 设备后，只需运行以下命令即可运行 YOLOv8 模型。这将首先下载并安装必要的软件包、依赖项，设置环境，并从 YOLOv8 下载预训练模型以执行目标检测、图像分割、姿态估计和图像分类任务！

```sh
wget files.seeedstudio.com/YOLOv8-Jetson.py && python YOLOv8-Jetson.py
```

:::note
上述脚本的源代码可以在 [这里](https://github.com/yuyoujiang/Run-YOLOv8-in-One-Line-on-Jetson) 找到。
:::

## 使用预训练模型

使用 YOLOv8 提供的预训练模型是快速入门的最佳方式。然而，这些是 PyTorch 模型，因此在 Jetson 上推理时仅能使用 CPU。如果您希望在 Jetson 上运行这些模型时利用 GPU 获得最佳性能，可以按照本 Wiki 的本节内容将 PyTorch 模型导出为 TensorRT。

<!-- 代码 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="detec" label="目标检测">

YOLOv8 提供了 5 个用于目标检测的预训练 PyTorch 模型权重，这些模型在 COCO 数据集上以 640x640 的输入图像尺寸进行训练。您可以在下方找到它们的信息：

<table>
  <thead>
    <tr>
      <th>模型</th>
      <th>尺寸<br />(像素)</th>
      <th>mAPval<br />50-95</th>
      <th>速度<br />CPU ONNX<br />(毫秒)</th>
      <th>速度<br />A100 TensorRT<br />(毫秒)</th>
      <th>参数<br />(百万)</th>
      <th>FLOPs<br />(十亿)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8n.pt" target="_blank" rel="noopener noreferrer">YOLOv8n</a></td>
      <td>640</td>
      <td>37.3</td>
      <td>80.4</td>
      <td>0.99</td>
      <td>3.2</td>
      <td>8.7</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8s.pt" target="_blank" rel="noopener noreferrer">YOLOv8s</a></td>
      <td>640</td>
      <td>44.9</td>
      <td>128.4</td>
      <td>1.20</td>
      <td>11.2</td>
      <td>28.6</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8m.pt" target="_blank" rel="noopener noreferrer">YOLOv8m</a></td>
      <td>640</td>
      <td>50.2</td>
      <td>234.7</td>
      <td>1.83</td>
      <td>25.9</td>
      <td>78.9</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8l.pt" target="_blank" rel="noopener noreferrer">YOLOv8l</a></td>
      <td>640</td>
      <td>52.9</td>
      <td>375.2</td>
      <td>2.39</td>
      <td>43.7</td>
      <td>165.2</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8x.pt" target="_blank" rel="noopener noreferrer">YOLOv8x</a></td>
      <td>640</td>
      <td>53.9</td>
      <td>479.1</td>
      <td>3.53</td>
      <td>68.2</td>
      <td>257.8</td>
    </tr>
  </tbody>
</table>

参考文档：https://docs.ultralytics.com/tasks/detect

您可以从上表中选择并下载所需的模型，然后执行以下命令对图像进行推理：

```sh
yolo detect predict model=yolov8n.pt source='https://ultralytics.com/images/bus.jpg' show=True
```

在 `model` 参数中，您可以更改为 yolov8s.pt、yolov8m.pt、yolov8l.pt 或 yolov8x.pt，它将下载相应的预训练模型。

您还可以连接一个摄像头并执行以下命令：

```sh
yolo detect predict model=yolov8n.pt source='0' show=True
```

:::note
如果在执行上述命令时遇到任何错误，请尝试在命令末尾添加 `"device=0"`。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/2.gif
" style={{width:1000, height:'auto'}}/></div>

:::note
上述示例运行在 reComputer J4012/ reComputer Industrial J4012 上，使用了 YOLOv8s 模型，输入尺寸为 640x640，并采用 TensorRT FP16 精度。
:::

</TabItem>
<TabItem value="classfiy" label="图像分类">

YOLOv8 提供了 5 个用于图像分类的预训练 PyTorch 模型权重，这些模型在 ImageNet 数据集上以 224x224 的输入图像尺寸进行训练。您可以在下方找到它们的信息：

<table>
  <thead>
    <tr>
      <th>模型</th>
      <th>尺寸<br />(像素)</th>
      <th>准确率<br />top1</th>
      <th>准确率<br />top5<br /></th>
      <th>速度<br />CPU ONNX<br />(毫秒)<br /></th>
      <th>速度<br />A100 TensorRT<br />(毫秒)<br /><br /></th>
      <th>参数<br />(百万)<br /></th>
      <th>FLOPs<br />(十亿) at 640</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>YOLOv8n-cls</td>
      <td>224</td>
      <td>66.6</td>
      <td>87.0</td>
      <td>12.9</td>
      <td>0.31</td>
      <td>2.7</td>
      <td>4.3</td>
    </tr>
    <tr>
      <td>YOLOv8s-cls</td>
      <td>224</td>
      <td>72.3</td>
      <td>91.1</td>
      <td>23.4</td>
      <td>0.35</td>
      <td>6.4</td>
      <td>13.5</td>
    </tr>
    <tr>
      <td>YOLOv8m-cls</td>
      <td>224</td>
      <td>76.4</td>
      <td>93.2</td>
      <td>85.4</td>
      <td>0.62</td>
      <td>17.0</td>
      <td>42.7</td>
    </tr>
    <tr>
      <td>YOLOv8l-cls</td>
      <td>224</td>
      <td>78.0</td>
      <td>94.1</td>
      <td>163.0</td>
      <td>0.87</td>
      <td>37.5</td>
      <td>99.7</td>
    </tr>
    <tr>
      <td> YOLOv8x-cls</td>
      <td>224</td>
      <td>78.4</td>
      <td>94.3</td>
      <td>232.0</td>
      <td>1.01</td>
      <td>57.4</td>
      <td>154.8</td>
    </tr>
  </tbody>
</table>

参考文档：https://docs.ultralytics.com/tasks/classify

您可以选择所需的模型并执行以下命令对图像进行推理：

```sh
yolo classify predict model=yolov8n-cls.pt source='https://ultralytics.com/images/bus.jpg' show=True
```

在 `model` 参数中，您可以更改为 yolov8s-cls.pt、yolov8m-cls.pt、yolov8l-cls.pt 或 yolov8x-cls.pt，它将下载相应的预训练模型。

您还可以连接一个摄像头并执行以下命令：

```sh
yolo classify predict model=yolov8n-cls.pt source='0' show=True
```

:::note
如果在执行上述命令时遇到任何错误，请尝试在命令末尾添加 `"device=0"`。
:::

（更新为 224 推理）
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/5.gif
" style={{width:1000, height:'auto'}}/></div>

:::note
上述示例运行在 reComputer J4012/ reComputer Industrial J4012 上，使用了 YOLOv8s-cls 模型，输入尺寸为 224x224，并采用 TensorRT FP16 精度。此外，请确保在使用 TensorRT 导出的推理命令中传递参数 **imgsz=224**，因为使用 TensorRT 模型时，推理引擎默认接受 640 的图像尺寸。
:::

</TabItem>
<TabItem value="segment" label="图像分割">

YOLOv8 提供了 5 个用于图像分割的预训练 PyTorch 模型权重，这些模型在 COCO 数据集上以 640x640 的输入图像尺寸进行训练。您可以在下方找到它们：

<table>
  <thead>
    <tr>
      <th>模型</th>
      <th>尺寸<br />(像素)</th>
      <th>mAPbox<br />50-95</th>
      <th>mAPmask<br />50-95</th>
      <th>速度<br />CPU ONNX<br />(毫秒)</th>
      <th>速度<br />A100 TensorRT<br />(毫秒)</th>
      <th>参数<br />(百万)</th>
      <th>FLOPs<br />(十亿)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8n-seg.pt">YOLOv8n-seg</a></td>
      <td>640</td>
      <td>36.7</td>
      <td>30.5</td>
      <td>96.1</td>
      <td>1.21</td>
      <td>3.4</td>
      <td>12.6</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8s-seg.pt">YOLOv8s-seg</a></td>
      <td>640</td>
      <td>44.6</td>
      <td>36.8</td>
      <td>155.7</td>
      <td>1.47</td>
      <td>11.8</td>
      <td>42.6</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8m-seg.pt">YOLOv8m-seg</a></td>
      <td>640</td>
      <td>49.9</td>
      <td>40.8</td>
      <td>317.0</td>
      <td>2.18</td>
      <td>27.3</td>
      <td>110.2</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8l-seg.pt">YOLOv8l-seg</a></td>
      <td>640</td>
      <td>52.3</td>
      <td>42.6</td>
      <td>572.4</td>
      <td>2.79</td>
      <td>46.0</td>
      <td>220.5</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8x-seg.pt">YOLOv8x-seg</a></td>
      <td>640</td>
      <td>53.4</td>
      <td>43.4</td>
      <td>712.1</td>
      <td>4.02</td>
      <td>71.8</td>
      <td>344.1</td>
    </tr>
  </tbody>
</table>

参考链接: https://docs.ultralytics.com/tasks/segment

您可以选择所需的模型，并执行以下命令对图像进行推理：

```sh
yolo segment predict model=yolov8n-seg.pt source='https://ultralytics.com/images/bus.jpg' show=True
```

在 `model` 参数中，您可以更改为 yolov8s-seg.pt、yolov8m-seg.pt、yolov8l-seg.pt 或 yolov8x-seg.pt，它将自动下载相应的预训练模型。

您还可以连接一个网络摄像头并执行以下命令：

```sh
yolo segment predict model=yolov8n-seg.pt source='0' show=True
```

:::note
如果在执行上述命令时遇到任何错误，请尝试在命令末尾添加 `"device=0"`。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/3.gif
" style={{width:1000, height:'auto'}}/></div>

:::note
上述操作是在 reComputer J4012/ reComputer Industrial J4012 上运行的，使用了 YOLOv8s-seg 模型，该模型以 640x640 的输入尺寸训练，并使用 TensorRT FP16 精度。
:::

</TabItem>
<TabItem value="pose" label="姿态估计">

YOLOv8 提供了 6 个用于姿态估计的预训练 PyTorch 模型权重，这些模型在 COCO 关键点数据集上以 640x640 的输入图像尺寸进行训练。您可以在下方找到它们：

<table>
  <thead>
    <tr>
      <th>模型</th>
      <th>尺寸<br />(像素)</th>
      <th>mAPpose<br />50-95</th>
      <th>mAPpose<br />50</th>
      <th>速度<br />CPU ONNX<br />(毫秒)</th>
      <th>速度<br />A100 TensorRT<br />(毫秒)</th>
      <th>参数<br />(百万)</th>
      <th>FLOPs<br />(十亿)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8n-pose.pt">YOLOv8n-pose</a></td>
      <td>640</td>
      <td>50.4</td>
      <td>80.1</td>
      <td>131.8</td>
      <td>1.18</td>
      <td>3.3</td>
      <td>9.2</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8s-pose.pt">YOLOv8s-pose</a></td>
      <td>640</td>
      <td>60.0</td>
      <td>86.2</td>
      <td>233.2</td>
      <td>1.42</td>
      <td>11.6</td>
      <td>30.2</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8m-pose.pt">YOLOv8m-pose</a></td>
      <td>640</td>
      <td>65.0</td>
      <td>88.8</td>
      <td>456.3</td>
      <td>2.00</td>
      <td>26.4</td>
      <td>81.0</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8l-pose.pt">YOLOv8l-pose</a></td>
      <td>640</td>
      <td>67.6</td>
      <td>90.0</td>
      <td>784.5</td>
      <td>2.59</td>
      <td>44.4</td>
      <td>168.6</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8x-pose.pt">YOLOv8x-pose</a></td>
      <td>640</td>
      <td>69.2</td>
      <td>90.2</td>
      <td>1607.1</td>
      <td>3.73</td>
      <td>69.4</td>
      <td>263.2</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8x-pose-p6.pt">YOLOv8x-pose-p6</a></td>
      <td>1280</td>
      <td>71.6</td>
      <td>91.2</td>
      <td>4088.7</td>
      <td>10.04</td>
      <td>99.1</td>
      <td>1066.4</td>
    </tr>
  </tbody>
</table>

参考链接: https://docs.ultralytics.com/tasks/pose

您可以选择所需的模型，并执行以下命令对图像进行推理：

```sh
yolo pose predict model=yolov8n-pose.pt source='https://ultralytics.com/images/bus.jpg'
```

在 `model` 参数中，您可以更改为 yolov8s-pose.pt、yolov8m-pose.pt、yolov8l-pose.pt、yolov8x-pose.pt 或 yolov8x-pose-p6，它将自动下载相应的预训练模型。

您还可以连接一个网络摄像头并执行以下命令：

```sh
yolo pose predict model=yolov8n-pose.pt source='0'
```

:::note
如果在执行上述命令时遇到任何错误，请尝试在命令末尾添加 `"device=0"`。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/4.gif
" style={{width:1000, height:'auto'}}/></div>

</TabItem>
<TabItem value="track" label="目标跟踪">

对象跟踪是一项任务，涉及识别对象的位置和类别，然后在视频流中为该检测分配一个唯一的 ID。

基本上，对象跟踪的输出与对象检测相同，只是多了一个对象 ID。

参考：https://docs.ultralytics.com/modes/track

您可以根据对象检测/图像分割选择所需的模型，并执行以下命令对视频进行推理：

```sh
yolo track model=yolov8n.pt source="https://youtu.be/Zgi9g1ksQHc"
```

在这里，`model` 参数可以更改为 `yolov8n.pt`、`yolov8s.pt`、`yolov8m.pt`、`yolov8l.pt`、`yolov8x.pt`、`yolov8n-seg.pt`、`yolov8s-seg.pt`、`yolov8m-seg.pt`、`yolov8l-seg.pt`、`yolov8x-seg.pt`，它将下载相关的预训练模型。

您还可以连接一个网络摄像头并执行以下命令：

```sh
yolo track model=yolov8n.pt source="0"
```

:::note
如果在执行上述命令时遇到任何错误，请尝试在命令末尾添加 `"device=0"`。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/6.gif
" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/7.gif
" style={{width:1000, height:'auto'}}/></div>

</TabItem>
</Tabs>

<!-- 代码结束 -->

---

## 使用 TensorRT 提高推理速度

如前所述，如果您希望在运行 YOLOv8 模型的 Jetson 上提高推理速度，首先需要将原始 PyTorch 模型转换为 TensorRT 模型。

按照以下步骤将 YOLOv8 PyTorch 模型转换为 TensorRT 模型。

:::note
这适用于我们之前提到的所有四种计算机视觉任务。
:::

- **步骤 1.** 通过指定模型路径执行导出命令

```sh
yolo export model=<path_to_pt_file> format=engine device=0
```

例如：

```sh
yolo export model=yolov8n.pt format=engine device=0
```

:::note
如果遇到关于 cmake 的错误，可以忽略它。请耐心等待 TensorRT 导出完成，这可能需要几分钟。
:::

在创建 TensorRT 模型文件（`.engine`）后，您将看到如下输出：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/1.jpg
" style={{width:800, height:'auto'}}/></div>

- **步骤 2.** 如果您想传递其他参数，可以参考下表：

<table>
<thead>
  <tr>
    <th>键</th>
    <th>值</th>
    <th>描述</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>imgsz</td>
    <td>640</td>
    <td>图像大小，标量或 (h, w) 列表，例如 (640, 480)</td>
  </tr>
  <tr>
    <td>half</td>
    <td>False</td>
    <td>FP16 量化</td>
  </tr>
  <tr>
    <td>dynamic</td>
    <td>False</td>
    <td>动态轴</td>
  </tr>
  <tr>
    <td>simplify</td>
    <td>False</td>
    <td>简化模型</td>
  </tr>
  <tr>
    <td>workspace</td>
    <td>4</td>
    <td>工作区大小（GB）</td>
  </tr>
</tbody>
</table>

例如，如果您希望将 PyTorch 模型转换为 FP16 量化的 TensorRT 模型，可以执行以下命令：

```sh
yolo export model=yolov8n.pt format=engine half=True device=0
```

一旦模型成功导出，您可以直接在 **yolo** 的 **predict** 命令中使用 **model=** 参数替换此模型，用于运行检测、分类、分割、姿态估计的所有四种任务。

例如，对于对象检测：

```sh
yolo detect predict model=yolov8n.engine source='0' show=True
```

## 使用您自己的 AI 模型

### 数据收集与标注

如果您有特定的 AI 应用，并希望使用适合您应用的自定义 AI 模型，您可以收集自己的数据集，对其进行标注，然后使用 YOLOv8 进行训练。

如果您不想自己收集数据，也可以选择现成的公共数据集。您可以下载许多公开可用的数据集，例如 [COCO 数据集](https://cocodataset.org)、[Pascal VOC 数据集](http://host.robots.ox.ac.uk/pascal/VOC) 等。[Roboflow Universe](https://universe.roboflow.com) 是一个推荐的平台，它提供了广泛的数据集，并且拥有 [90,000+ 数据集和 66+ 百万张图像](https://blog.roboflow.com/computer-vision-datasets-and-apis)，可用于构建计算机视觉模型。此外，您还可以在 Google 上搜索开源数据集，并从各种可用的数据集中进行选择。

如果您有自己的数据集并希望对图像进行标注，我们推荐您使用 [Roboflow](https://roboflow.com) 提供的标注工具。请参考 [Wiki 的这一部分](https://wiki.seeedstudio.com/YOLOv5-Object-Detection-Jetson/#annotate-dataset-using-roboflow) 了解更多信息。您也可以参考 Roboflow 的 [这篇指南](https://docs.roboflow.com/annotate/use-roboflow-annotate) 了解标注相关内容。

### 训练

这里我们提供了三种训练模型的方法。

1. 第一种方法是使用 [Ultralytics HUB](https://ultralytics.com/hub)。您可以轻松将 Roboflow 集成到 Ultralytics HUB 中，这样您的所有 Roboflow 项目都可以直接用于训练。它提供了一个 Google Colab 笔记本，可以轻松启动训练过程，并实时查看训练进度。

2. 第二种方法是使用我们创建的 Google Colab 工作空间，以简化训练过程。在这里，我们使用 Roboflow API 从 Roboflow 项目中下载数据集。

3. 第三种方法是使用本地 PC 进行训练。在这种情况下，您需要确保拥有足够强大的 GPU，并且需要手动下载数据集。

<!-- 代码 -->

<Tabs>
<TabItem value="Ultralytics" label="Ultralytics HUB + Roboflow + Google Colab">

这里我们使用 Ultralytics HUB 加载 Roboflow 项目，然后在 Google Colab 上进行训练。

- **步骤 1.** 访问 [此 URL](https://hub.ultralytics.com/signup) 并注册一个 Ultralytics 账户

- **步骤 2.** 使用新创建的账户登录后，您将看到以下仪表板

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/2.jpg
" style={{width:1000, height:'auto'}}/></div>

- **步骤 3.** 访问 [此 URL](https://app.roboflow.com/login) 并注册一个 Roboflow 账户

- **步骤 4.** 使用新创建的账户登录后，您将看到以下仪表板

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/11.jpg
" style={{width:1000, height:'auto'}}/></div>

- **步骤 5.** 创建一个新的工作空间，并按照 [我们准备的 Wiki 指南](https://wiki.seeedstudio.com/YOLOv5-Object-Detection-Jetson/#annotate-dataset-using-roboflow) 在工作空间下创建一个新项目。您也可以 [点击这里](https://blog.roboflow.com/getting-started-with-roboflow) 从 Roboflow 官方文档中了解更多信息。

- **步骤 6.** 一旦您的工作空间中有几个项目，它将如下所示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/12.jpg
" style={{width:1000, height:'auto'}}/></div>

- **步骤 7.** 转到 **设置** 并点击 **Roboflow API**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/13.jpg
" style={{width:300, height:'auto'}}/></div>

- **步骤 8.** 点击 **复制** 按钮以复制 **私有 API 密钥**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/14.jpg
" style={{width:1000, height:'auto'}}/></div>

- **步骤 9.** 返回到 Ultralytics HUB 仪表板，点击 **集成**，将之前复制的 API 密钥粘贴到空白列中，然后点击 **添加**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/15.jpg
" style={{width:1000, height:'auto'}}/></div>

- **步骤 10.** 如果您看到列出了您的工作空间名称，则说明集成成功

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/16.jpg
" style={{width:550, height:'auto'}}/></div>

- **步骤 11.** 导航到 **数据集**，您将在这里看到所有的 Roboflow 项目

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/17.jpg
" style={{width:1000, height:'auto'}}/></div>

- **步骤 12.** 点击一个项目以了解更多关于数据集的信息。这里我选择了一个可以检测健康和受损苹果的数据集

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/18.jpg
" style={{width:1000, height:'auto'}}/></div>

- **步骤 13.** 点击 **训练模型**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/19.jpg
" style={{width:500, height:'auto'}}/></div>

- **步骤 14.** 选择 **架构**，设置一个 **模型名称（可选）**，然后点击 **继续**。这里我们选择 YOLOv8s 作为模型架构

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/22.jpg
" style={{width:1000, height:'auto'}}/></div>

- **步骤 15.** 在 **高级选项** 下，根据您的偏好配置设置，复制并粘贴 Colab 代码（稍后将粘贴到 Colab 工作空间中），然后点击 **打开 Google Colab**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/24.jpg
" style={{width:1000, height:'auto'}}/></div>

- **步骤 16.** 如果您尚未登录，请登录您的 Google 账户


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/25.jpg
" style={{width:1000, height:'auto'}}/></div>

- **步骤 17** 导航到 `Runtime > Change runtime type`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/26.jpg
" style={{width:500, height:'auto'}}/></div>

- **步骤 18** 在 **Hardware accelerator** 下选择 **GPU**，在 **GPU type** 下选择最高可用选项，然后点击 **Save**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/27.jpg
" style={{width:500, height:'auto'}}/></div>

- **步骤 19** 点击 **Connect**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/28.jpg
" style={{width:250, height:'auto'}}/></div>

- **步骤 20** 点击 **RAM, Disk** 按钮以检查硬件资源使用情况

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/31.jpg
" style={{width:600, height:'auto'}}/></div>

- **步骤 21** 点击 **Play** 按钮运行第一个代码单元格

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/29.jpg
" style={{width:750, height:'auto'}}/></div>

- **步骤 22** 将之前从 Ultralytics HUB 复制的代码单元粘贴到 **Start** 部分下并运行它以开始训练

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/30.jpg
" style={{width:650, height:'auto'}}/></div>

- **步骤 23** 现在返回到 Ultralytics HUB，你会看到消息 **Connected**。点击 **Done**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/32.jpg
" style={{width:1000, height:'auto'}}/></div>

- **步骤 24** 在模型使用 Google Colab 进行训练时，你将实时看到 **Box Loss, Class Loss 和 Object Loss**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/33.jpg
" style={{width:1000, height:'auto'}}/></div>

- **步骤 25** 训练完成后，你将在 Google Colab 上看到以下输出

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/34.jpg
" style={{width:1000, height:'auto'}}/></div>

- **步骤 26** 现在返回到 Ultralytics HUB，进入 **Preview** 标签页并上传测试图像以检查训练模型的性能

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/35.jpg
" style={{width:1000, height:'auto'}}/></div>

- **步骤 27** 最后进入 **Deploy** 标签页并以你喜欢的格式下载训练好的模型以便使用 YOLOv8 进行推理。这里我们选择了 PyTorch。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/36.png
" style={{width:1000, height:'auto'}}/></div>

现在你可以使用这个下载的模型完成我们之前在本 Wiki 中解释的任务。你只需要用你的模型替换模型文件即可。

例如：
```
yolo detect predict model=<your_model.pt> source='0' show=True
```

</TabItem>
<TabItem value="Roboflow" label="Roboflow + Google Colab">

这里我们使用 Google Colaboratory 环境在云端进行训练。此外，我们在 Colab 中使用 Roboflow API 来轻松下载数据集。

- **步骤 1.** 点击 [这里](https://colab.research.google.com/gist/lakshanthad/9fbe33058cb7cab49ac8fc345143d849/yolov5-training-for-jetson.ipynb) 打开一个已准备好的 Google Colab 工作区，并按照工作区中提到的步骤操作

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/39.jpg
" style={{width:800, height:'auto'}}/></div>

训练完成后，你将看到如下输出：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/40.jpg
" style={{width:800, height:'auto'}}/></div>

- **步骤 2.** 在 Files 标签下，导航到 `runs/train/exp/weights`，你会看到一个名为 **best.pt** 的文件。这是训练生成的模型。下载此文件并复制到你的 Jetson 设备，因为这是我们稍后将在 Jetson 设备上进行推理时使用的模型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/41.jpg
" style={{width:500, height:'auto'}}/></div>

现在你可以使用这个下载的模型完成我们之前在本 Wiki 中解释的任务。你只需要用你的模型替换模型文件即可。

例如：
```
yolo detect predict model=<your_model.pt> source='0' show=True
```

</TabItem>
<TabItem value="PC" label="Roboflow + Local PC">

这里你可以使用运行 Linux 操作系统的 PC 进行训练。我们在本 Wiki 中使用了一台 Ubuntu 20.04 的 PC。

- **步骤 1.** 如果你的系统中没有 pip，请安装 pip

```sh
sudo apt install python3-pip -y
```

- **步骤 2.** 安装 Ultralytics 及其依赖项

```sh
pip install ultralytics
```

- **步骤 3.** 在 Roboflow 中，在你的项目内，进入 **Versions**，选择 **Export Dataset**，将 **Format** 选择为 **YOLOv8**，选择 **download zip to computer** 并点击 **Continue**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/42.jpg
" style={{width:1000, height:'auto'}}/></div>

- **步骤 4.** 解压下载的 zip 文件

- **步骤 5.** 执行以下命令开始训练。这里你需要将 **path_to_yaml** 替换为解压后的 zip 文件中 .yaml 文件的位置

```sh
yolo train data=<path_to_yaml> model=yolov8s.pt epochs=100 imgsz=640 batch=-1
```

:::note
这里图像大小设置为 640x640。我们将 batch-size 设置为 -1，因为这会自动确定最佳批量大小。你也可以根据自己的偏好更改 epoch。这里你可以将预训练模型更改为任何 detect、segment、classify 或 pose 模型。
:::

训练完成后，你将看到如下输出：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/43.png
" style={{width:1000, height:'auto'}}/></div>

- **步骤 6.** 在 **runs/detect/train/weights** 文件夹下，你会看到一个名为 **best.pt** 的文件。这是训练生成的模型文件。下载此文件并复制到你的 Jetson 设备上，因为这是我们稍后将在 Jetson 设备上进行推理时使用的模型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/44.png
" style={{width:500, height:'auto'}}/></div>

现在，你可以使用这个下载的模型来完成我们之前在本 Wiki 中解释的任务。你只需要用你的模型文件替换默认的模型文件即可。

例如：
```
yolo detect predict model=<your_model.pt> source='0' show=True
```

</TabItem>
</Tabs>

<!-- 代码结束 -->

---

## 性能基准测试

### 准备工作

我们对运行在 reComputer J4012/ reComputer Industrial J4012（由 NVIDIA Jetson Orin NX 16GB 模块驱动）上的 YOLOv8 所支持的所有计算机视觉任务进行了性能基准测试。

在示例目录中包含一个名为 [trtexec](https://docs.nvidia.com/deeplearning/tensorrt/developer-guide/index.html#trtexec) 的命令行包装工具。trtexec 是一个无需开发自己的应用程序即可使用 TensorRT 的工具。trtexec 工具有三个主要用途：

- 基于随机或用户提供的输入数据对网络进行基准测试。
- 从模型生成序列化引擎。
- 从构建器生成序列化的时间缓存。

在这里，我们可以使用 trtexec 工具快速对具有不同参数的模型进行基准测试。但首先，你需要一个 ONNX 模型，我们可以通过使用 ultralytics yolov8 来生成这个 ONNX 模型。

- **步骤 1.** 使用以下命令生成 ONNX 模型：

```sh
yolo mode=export model=yolov8s.pt format=onnx
```

- **步骤 2.** 使用 trtexec 生成引擎文件，命令如下：

```sh
cd /usr/src/tensorrt/bin
./trtexec --onnx=<path_to_onnx_file> --saveEngine=<path_to_save_engine_file>
```

例如：

```sh
./trtexec --onnx=/home/nvidia/yolov8s.onnx --saveEngine=/home/nvidia/yolov8s.engine
```

这将输出性能结果，同时生成一个 .engine 文件。默认情况下，它会将 ONNX 转换为 FP32 精度的 TensorRT 优化文件，你可以看到如下输出：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/46.jpg
" style={{width:1000, height:'auto'}}/></div>

如果你需要 **FP16** 精度（相比 **FP32** 提供更好的性能），可以执行以下命令：

```sh
./trtexec --onnx=/home/nvidia/yolov8s.onnx --fp16 --saveEngine=/home/nvidia/yolov8s.engine 
```

然而，如果你需要 **INT8** 精度（相比 **FP16** 提供更好的性能），可以执行以下命令：

```sh
./trtexec --onnx=/home/nvidia/yolov8s.onnx --int8 --saveEngine=/home/nvidia/yolov8s.engine 
```

### 结果

以下是我们在 reComputer J4012/ reComputer Industrial J4012 上运行的四个计算机视觉任务的结果总结。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/45.png
" style={{width:1000, height:'auto'}}/></div>

## 额外演示：使用 YOLOv8 的运动检测与计数器

我们基于 YOLOv8-Pose 模型构建了一个用于运动检测和计数的姿态估计演示应用程序。你可以在 [这里](https://github.com/yuyoujiang/Exercise-Counter-with-YOLOv8-on-NVIDIA-Jetson) 查看该项目，了解更多关于此演示的信息，并将其部署到你自己的 Jetson 设备上！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/9.gif
" style={{width:1000, height:'auto'}}/></div>

## 手动设置 YOLOv8 于 NVIDIA Jetson

如果之前提到的一键脚本出现错误，您可以按照以下步骤逐步为 Jetson 设备准备 YOLOv8。

### 安装 Ultralytics 包

- **步骤 1.** 访问 Jetson 设备的终端，安装 pip 并升级

```sh
sudo apt update
sudo apt install -y python3-pip -y
pip3 install --upgrade pip
```

- **步骤 2.** 安装 Ultralytics 包

```sh
pip3 install ultralytics
```

- **步骤 3.** 升级 numpy 到最新版本

```sh
pip3 install numpy -U
```

- **步骤 4.** 重启设备

```sh
sudo reboot
```

### 卸载 Torch 和 Torchvision

上述 Ultralytics 的安装会自动安装 Torch 和 Torchvision。然而，通过 pip 安装的这两个包并不兼容运行在基于 **ARM aarch64 架构** 的 Jetson 平台。因此，我们需要手动安装预编译的 PyTorch pip wheel 并从源码编译/安装 Torchvision。

```sh
pip3 uninstall torch torchvision
```

### 安装 PyTorch 和 Torchvision

访问 [此页面](https://forums.developer.nvidia.com/t/pytorch-for-jetson) 获取所有 PyTorch 和 Torchvision 的链接。

以下是 JetPack 5.0 及以上版本支持的一些版本。

**PyTorch v2.0.0**

支持 JetPack 5.1 (L4T R35.2.1) / JetPack 5.1.1 (L4T R35.3.1)，Python 3.8

**文件名:** torch-2.0.0+nv23.05-cp38-cp38-linux_aarch64.whl  
**URL:** https://nvidia.box.com/shared/static/i8pukc49h3lhak4kkn67tg9j4goqm0m7.whl

**PyTorch v1.13.0**

支持 JetPack 5.0 (L4T R34.1) / JetPack 5.0.2 (L4T R35.1) / JetPack 5.1 (L4T R35.2.1) / JetPack 5.1.1 (L4T R35.3.1)，Python 3.8

**文件名:** torch-1.13.0a0+d0d6b1f2.nv22.10-cp38-cp38-linux_aarch64.whl  
**URL:** https://developer.download.nvidia.com/compute/redist/jp/v502/pytorch/torch-1.13.0a0+d0d6b1f2.nv22.10-cp38-cp38-linux_aarch64.whl

- **步骤 1.** 根据您的 JetPack 版本安装 torch，格式如下：

```sh
wget <URL> -O <file_name>
pip3 install <file_name>
```

例如，这里我们运行的是 **JP5.1.1**，因此选择 **PyTorch v2.0.0**

```sh
sudo apt-get install -y libopenblas-base libopenmpi-dev
wget https://nvidia.box.com/shared/static/i8pukc49h3lhak4kkn67tg9j4goqm0m7.whl -O torch-2.0.0+nv23.05-cp38-cp38-linux_aarch64.whl
pip3 install torch-2.0.0+nv23.05-cp38-cp38-linux_aarch64.whl
```

- **步骤 2.** 根据您安装的 PyTorch 版本安装对应的 torchvision。例如，我们选择了 PyTorch v2.0.0，因此需要选择 Torchvision v0.15.2

```sh
sudo apt install -y libjpeg-dev zlib1g-dev
git clone https://github.com/pytorch/vision torchvision
cd torchvision
git checkout v0.15.2
python3 setup.py install --user
```

以下是根据 PyTorch 版本需要安装的对应 torchvision 版本列表：

- PyTorch v2.0.0 - torchvision v0.15
- PyTorch v1.13.0 - torchvision v0.14

如果需要更详细的列表，请查看 [此链接](https://github.com/pytorch/vision)。

### 安装 ONNX 并降级 Numpy

如果您需要将 PyTorch 模型转换为 TensorRT，则需要执行以下步骤：

- **步骤 1.** 安装 ONNX（这是一个必要的依赖）

```sh
pip3 install onnx
```

- **步骤 2.** 降级到较低版本的 Numpy 以修复错误

```sh
pip3 install numpy==1.20.3
```

## 资源

- [YOLOv8 文档](https://docs.ultralytics.com)
- [Roboflow 文档](https://docs.roboflow.com)
- [TensorRT 文档](https://docs.nvidia.com/deeplearning/tensorrt/developer-guide/index.html)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>