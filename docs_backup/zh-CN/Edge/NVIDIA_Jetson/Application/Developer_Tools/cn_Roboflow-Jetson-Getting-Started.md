---
description: 在 NVIDIA Jetson 设备上快速入门 Roboflow
title: Roboflow 快速入门
tags:
  - 数据标注
  - AI 模型训练
  - AI 模型部署
  - Roboflow
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Roboflow-Jetson-Getting-Started
last_update:
  date: 05/15/2025
  author: Lakshantha
---

# 在 NVIDIA® Jetson 设备上快速入门 Roboflow 推理

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

本指南介绍了如何在 NVIDIA Jetson 设备上使用 [Roboflow](https://roboflow.com) 推理服务器轻松部署 AI 模型。我们将使用 [Roboflow Universe](https://universe.roboflow.com) 选择一个已经训练好的模型，将其部署到 Jetson 设备上，并在实时摄像头流上进行推理！

[Roboflow 推理](https://github.com/roboflow/inference) 是使用和部署计算机视觉模型的最简单方式，提供了一个用于运行推理的 HTTP Roboflow API。Roboflow 推理支持以下功能：

- 目标检测
- 图像分割
- 图像分类

以及基础模型如 CLIP 和 SAM。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Roboflow-inference/9.gif
" style={{width:1000, height:'auto'}}/></div>

## 前置条件

- Ubuntu 主机电脑（本地或使用 VMware Workstation Player 的虚拟机）
- [reComputer Jetson](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) 或其他 NVIDIA Jetson 设备

:::note
本指南已在 [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) 和 [reComputer Industrial J4012](https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html) 上测试和验证，这些设备由 NVIDIA Jetson Orin NX 16GB 模块提供支持。
:::

## 为 Jetson 刷入 JetPack

现在需要确保 Jetson 设备已刷入 [JetPack](https://developer.nvidia.com/embedded/jetpack) 系统。可以使用 NVIDIA SDK Manager 或命令行将 JetPack 刷入设备。

有关 Seeed Jetson 设备的刷机指南，请参考以下链接：
- [reComputer J2021 | J202](https://wiki.seeedstudio.com/reComputer_J2021_J202_Flash_Jetpack)
- [reComputer J1020 | A206](https://wiki.seeedstudio.com/reComputer_J1020_A206_Flash_JetPack)
- [reComputer J4012 | J401](https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack)
- [A203 扩展板](https://wiki.seeedstudio.com/reComputer_A203_Flash_System)
- [A205 扩展板](https://wiki.seeedstudio.com/reComputer_A205_Flash_System)
- [A206 扩展板](https://wiki.seeedstudio.com/reComputer_J1020_A206_Flash_JetPack)
- [A603 扩展板](https://wiki.seeedstudio.com/reComputer_A603_Flash_System)
- [A607 扩展板](https://wiki.seeedstudio.com/reComputer_A607_Flash_System)
- [Jetson Xavier AGX H01 套件](https://wiki.seeedstudio.com/Jetson_Xavier_AGX_H01_Driver_Installation)
- [Jetson AGX Orin 32GB H01 套件](https://wiki.seeedstudio.com/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack)
- [reComputer 工业版](https://wiki.seeedstudio.com/reComputer_Industrial_Getting_Started/#flash-jetpack)
- [reServer 工业版](https://wiki.seeedstudio.com/reServer_Industrial_Getting_Started/#flash-jetpack)

:::note
请确保刷入 JetPack 版本 5.1.1，因为本指南已在该版本上验证。
:::

## 探索 Roboflow Universe 中的 50,000+ 模型

Roboflow 提供了 50,000+ 可直接使用的 AI 模型，帮助用户以最快的方式开始计算机视觉部署。您可以在 [Roboflow Universe](https://universe.roboflow.com) 中探索这些模型。此外，Roboflow Universe 还提供了 200,000+ 数据集，您可以使用这些数据集在 Roboflow 云服务器上[训练模型](https://docs.roboflow.com/train/train)，或者上传自己的数据集，使用 [Roboflow 在线图像标注工具](https://docs.roboflow.com/annotate/use-roboflow-annotate) 开始训练。

- **步骤 1：** 我们将使用 Roboflow Universe 中的 [人群检测模型](https://universe.roboflow.com/mohamed-traore-2ekkp/people-detection-general/model/7) 作为参考。

- **步骤 2：** 模型名称的格式为 "model_name/version"。在本例中，模型名称为 **people-detection-general/7**。稍后在推理时，我们将使用该模型名称。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Roboflow-inference/1.png
" style={{width:1000, height:'auto'}}/></div>

## 获取 Roboflow API 密钥

接下来，我们需要获取 Roboflow API 密钥，以便 Roboflow 推理服务器正常工作。

- **步骤 1：** [注册](https://app.roboflow.com) 一个新的 Roboflow 账户，输入您的凭据。

- **步骤 2：** 登录账户，导航到 `Projects > Workspaces > <your_workspace_name> > Roboflow API`，然后点击 "Private API Key" 部分旁边的 **Copy** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Roboflow-inference/2.jpg
" style={{width:1000, height:'auto'}}/></div>

请妥善保存此私钥，因为稍后我们将需要它。

## 运行 Roboflow 推理服务器

您可以通过以下三种方式在 NVIDIA Jetson 上开始使用 Roboflow 推理：

1. **使用 pip 包** - 使用 pip 包是最快的入门方式，但需要安装 SDK 组件（CUDA、cuDNN、TensorRT）以及 JetPack。
2. **使用 Docker Hub** - 使用 Docker Hub 会稍慢一些，因为它需要先拉取一个约 19GB 的 Docker 镜像，但无需安装 SDK 组件，因为镜像中已包含这些组件。
3. **使用本地 Docker 构建** - 本地 Docker 构建是 Docker Hub 方法的扩展，您可以根据所需应用修改 Docker 镜像的源代码（例如启用 TensorRT 的 INT8 精度）。

在运行 Roboflow 推理服务器之前，您需要获取一个用于推理的 AI 模型和一个 Roboflow API 密钥。我们将首先介绍如何获取这些内容。

<!-- 代码 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="pip Package" label="pip 包">

### 使用 pip 包

- **步骤 1：** 如果您仅为 Jetson 设备刷入了 Jetson L4T 系统，则需要先安装 SDK 组件

```sh
sudo apt update
sudo apt install nvidia-jetpack -y
```

- **步骤 2：** 在终端中执行以下命令以安装 Roboflow 推理服务器的 pip 包

```sh
sudo apt update
sudo apt install python3-pip -y
pip install inference-gpu
```

- **步骤 3：** 执行以下命令并替换为您之前获取的 Roboflow 私有 API 密钥

```sh
export ROBOFLOW_API_KEY=your_key_here
```

- **步骤 4：** 将摄像头连接到 Jetson 设备，并执行以下 Python 脚本，在您的摄像头流上运行一个开源的人体检测模型

<details>

<summary> webcam.py</summary>

```python
import cv2
import inference
import supervision as sv

annotator = sv.BoxAnnotator()

inference.Stream(
    source="webcam", 
    model=" people-detection-general/7", 

    output_channel_order="BGR",
    use_main_thread=True, 
    
    on_prediction=lambda predictions, image: (
        print(predictions), 
        
        cv2.imshow(
            "Prediction", 
            annotator.annotate(
                scene=image, 
                detections=sv.Detections.from_roboflow(predictions)
            )
        ),
        cv2.waitKey(1)
    )
)
```

</details>

最终，您将看到如下结果：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Roboflow-inference/11.gif
" style={{width:1000, height:'auto'}}/></div>

---

</TabItem>
<TabItem value="Docker Hub" label="Docker Hub">

### 使用 Docker Hub

要使用此方法，只需将设备刷入 Jetson L4T 即可。这种方法采用客户端-服务器架构，其中 Roboflow 推理服务器将在 Jetson 上的特定网络端口运行，您可以使用同一网络中的任何 PC 访问此推理服务器，甚至可以同时将 Jetson 用作服务器和客户端。

#### 服务器设置 - Jetson

执行以下命令以下载并运行 Roboflow 推理服务器的 Docker 容器

```sh
sudo docker run --network=host --runtime=nvidia roboflow/roboflow-inference-server-jetson-5.1.1
```

如果您看到以下输出，则推理服务器已成功启动

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Roboflow-inference/3.png
" style={{width:1000, height:'auto'}}/></div>

#### 客户端设置 - Jetson/ PC

- **步骤 1：** 安装必要的包

```sh
sudo apt update
sudo apt install python3-pip -y
git clone https://github.com/roboflow/roboflow-api-snippets
cd Python/webcam
pip install -r requirements.txt
```

- **步骤 2：** 在同一目录中创建一个 `roboflow_config.json` 文件，其中包括您的 Roboflow API 密钥和模型名称。您可以参考此 GitHub 仓库中包含的示例 `roboflow_config.sample.json` 文件。

- **步骤 3：** 在同一设备的另一个终端窗口中，或者在与 Jetson 相同网络中的另一台 PC 上，执行以下 Python 脚本，在您的摄像头流上运行一个开源的人体检测模型

```sh
python infer-simple.py
```

---

</TabItem>
<TabItem value="Local Docker Build" label="Local Docker Build">

### 使用本地 Docker 构建

#### 服务器设置 - Jetson

要使用此方法，只需将设备刷入 Jetson L4T 即可。这种方法采用客户端-服务器架构，其中 Roboflow 推理服务器将在 Jetson 上的特定网络端口运行，您可以使用同一网络中的任何 PC 访问此推理服务器，甚至可以同时将 Jetson 用作服务器和客户端。

- **步骤 1：** 克隆 Roboflow 推理服务器仓库

```sh
git clone https://github.com/roboflow/inference
```

- **步骤 2：** 进入 "inference" 目录并开始编译您自己的 Docker 镜像

```sh
cd inference
sudo docker build \
    -f docker/dockerfiles/Dockerfile.onnx.jetson.5.1.1 \
    -t roboflow/roboflow-inference-server-jetson-5.1.1:seeed1 .
```

这里 `-t` 后面的文本是我们正在构建的容器的名称。您可以为其指定任何名称。

- **步骤 3：** 执行以下命令以检查我们编译的 Docker 镜像是否已列出

```sh
sudo docker ps
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Roboflow-inference/5.png
" style={{width:1000, height:'auto'}}/></div>

- **步骤 4：** 基于您刚刚构建的 Docker 镜像启动一个 Docker 容器

```sh
docker run --privileged --net=host --runtime=nvidia roboflow/roboflow-inference-server-jetson-5.1.1:seeed1
```

如果您看到以下输出，则推理服务器已成功启动

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Roboflow-inference/6.png
" style={{width:1000, height:'auto'}}/></div>

#### 客户端设置 - Jetson/ PC

执行以下 Python 脚本，在您的摄像头流上运行一个开源的人体检测模型

<details>

<summary> webcam.py</summary>

```python
import cv2
import base64
import requests
import time


upload_url = ("http://<ip_address_of_jetson>:9001/"
              "people-detection-general/7"
              "?api_key=xxxxxxxx"
              "&stroke=5")
video = cv2.VideoCapture(0)

while True:
    start = time.time()

    ret, img = video.read()
    if ret:
        # 调整大小（保持纵横比）以提高速度并节省带宽
        height, width, channels = img.shape
        scale = 416 / max(height, width)
        img = cv2.resize(img, (round(scale * width), round(scale * height)))

        # 将图像编码为 base64 字符串
        retval, buffer = cv2.imencode('.jpg', img)
        img_str = base64.b64encode(buffer)

        # 从 Roboflow Infer API 获取预测
        resp = requests.post(upload_url, data=img_str, headers={
            "Content-Type": "application/x-www-form-urlencoded"
        }, stream=True)
        resp = resp.json()

        for bbox in resp["predictions"]:
            img = cv2.rectangle(
                img,
                (int(bbox['x']-(bbox['width']/2)), int(bbox['y']-(bbox['height']/2))),
                (int(bbox['x']+(bbox['width']/2)), int(bbox['y']+(bbox['height']/2))),
                (0, 255, 0),
                2)
            cv2.putText(
                img, f"{bbox['class']}",
                (int(bbox['x']-(bbox['width']/2)), int(bbox['y']-(bbox['height']/2)-5)),
                0, 0.9,
                (0, 255, 0), thickness=2, lineType=cv2.LINE_AA
            )
        cv2.imshow('image', img)
        print((1/(time.time()-start)), " fps")

    if cv2.waitKey(1) == ord('q'):
        break
video.release()
cv2.destroyAllWindows()
```

</details>

请注意，在脚本中的 `upload_url` 需要包含以下元素：

- Roboflow 推理服务器的 IP 地址
- 您想要运行的模型
- Roboflow API 密钥

模型可以在 Roboflow Universe 中选择。

#### 启用 TensorRT

默认情况下，Roboflow 推理服务器使用的是 CUDA 运行时。然而，如果您希望切换到 TensorRT 运行时以提高推理速度，可以在文件 "inference/docker/dockerfiles/Dockerfile.onnx.jetson.5.1.1" 中添加以下内容，并重新构建 Docker 镜像：

```sh
ENV ONNXRUNTIME_EXECUTION_PROVIDERS=TensorrtExecutionProvider
```

---

</TabItem>
</Tabs>

<!-- 代码结束 -->

## 了解更多

Roboflow 提供了非常详细和全面的文档。因此，我们强烈建议您在 [这里](https://docs.roboflow.com) 查看相关内容。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您在使用我们的产品时获得尽可能顺畅的体验。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>