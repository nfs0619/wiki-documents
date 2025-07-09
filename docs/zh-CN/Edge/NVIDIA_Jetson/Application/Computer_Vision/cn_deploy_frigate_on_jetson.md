---
description: Frigate 是一个开源的 NVR（网络视频录像机），支持 IP 摄像头的实时目标检测。在本指南中，我们将逐步讲解如何在 NVIDIA Jetson 设备上部署 Frigate。
title: 在 Jetson 上部署 Frigate
image: https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/3.png
slug: /cn/deploy_frigate_on_jetson
last_update:
  date: 05/15/2025
  author: kourosh
---

# 在 reComputer(NVIDIA Jetson) 设备上部署 Frigate

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

![image1](https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/3.png)

Frigate 是一个开源的 NVR（网络视频录像机），支持 IP 摄像头的实时目标检测。在本指南中，我们将逐步讲解如何在 NVIDIA Jetson 设备上部署 Frigate。NVIDIA Jetson 是一个边缘 AI 平台，可高效部署 AI 工作负载。将 Frigate 与 Jetson 结合使用，可以利用硬件加速的机器学习高效处理视频流并检测目标。

项目目标：

* 在 NVIDIA Jetson 设备上设置 Frigate 环境，以实现高效的视频处理。
* 启用来自多个 IP 摄像头的视频流的实时目标检测。

完成本项目后，用户将拥有一个完全可操作的监控系统，可以实时检测目标、发送警报，并与其他智能设备集成。此解决方案不仅增强了安全性，还确保处理在本地完成，保护隐私并减少对云服务的依赖。

<p style={{textAlign: 'center'}}><img src="https://docs.frigate.video/assets/images/media_browser-min-1f8a7c629d1bdbee1c78f99a97a0219a.png" alt="pir" width={900} height="auto" /></p>

## 硬件准备

要成功在 NVIDIA Jetson 上使用 IP 摄像头部署 Frigate，您需要准备以下硬件组件。本节列出了必要的设备，并提供了简要说明以帮助您入门。

### 1. NVIDIA Jetson 设备：

NVIDIA Jetson 设备是运行 Frigate 和执行实时目标检测的核心处理单元。根据您的需求和预算，您可以选择以下几种型号：

* Jetson Nano：一种经济实惠的选择，具有足够的处理能力，可用于少量摄像头的小型监控设置。
* Jetson Xavier NX：提供更强的性能，可处理更大规模的部署或更复杂的目标检测任务。
* Jetson Orin 系列：最强大的选项，适用于高性能应用和多摄像头设置。

:::info
**所需配件**：

* 适用于 Jetson 型号的电源。
* MicroSD 卡（适用于 Jetson Nano 和 Orin）或 eMMC（适用于 Jetson Xavier NX/AGX Orin），容量至少为 32GB。
* 冷却解决方案（例如风扇或散热片），以确保最佳工作温度。
* 初始设置所需的显示器、键盘和鼠标。
:::


### 2. IP 摄像头：
IP 摄像头提供高质量的视频流，是实现有效目标检测的关键。您至少需要一个兼容 RTSP（实时流协议）的 Dahua IP 摄像头，以便 Frigate 接收视频流。

### 3. 所需硬件总结：

* Jetson 设备：Jetson Nano、Xavier NX 或 Orin 系列
* IP 摄像头：兼容 RTSP
* MicroSD 卡/eMMC：至少 32GB（用于 Jetson 设置）
* 电源和冷却设备：用于 Jetson 设备
* 网络设备：以太网线
* 可选：外部存储、PoE 注入器/交换机


## 软件准备

设置软件环境是部署 Frigate 到 NVIDIA Jetson 设备的重要步骤。本节概述了必要的软件组件及安装步骤，以确保您的系统准备好运行 Frigate 并处理来自 IP 摄像头的视频流。

### 1. 操作系统（Jetpack）：

确保您的 NVIDIA Jetson 设备运行最新版本的 NVIDIA JetPack SDK。JetPack 提供基于 Linux 的操作系统以及 AI 开发所需的基本库和工具。

* 下载 JetPack SDK：访问 NVIDIA JetPack 下载页面，下载与您的 Jetson 设备兼容的最新 JetPack SDK（本文使用 Jetpack 5.1.3 和 Xavier NX）。

* 刷写 Jetson 设备：使用 SDK Manager 将 JetPack 镜像刷写到 Jetson 设备的 SD 卡（适用于 Jetson Nano）或 eMMC（适用于 Jetson Xavier NX/AGX Orin）。

有关 Seeed Jetson 设备的刷写指南，请参考以下链接：

* [reComputer J1010 | J101](https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack)
* [reComputer J2021 | J202](https://wiki.seeedstudio.com/reComputer_J2021_J202_Flash_Jetpack)
* [reComputer J1020 | A206](https://wiki.seeedstudio.com/reComputer_J1020_A206_Flash_JetPack)
* [reComputer J4012 | J401](https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack)
* [A203 扩展板](https://wiki.seeedstudio.com/reComputer_A203_Flash_System)
* [A205 扩展板](https://wiki.seeedstudio.com/reComputer_A205_Flash_System)
* [Jetson Xavier AGX H01 套件](https://wiki.seeedstudio.com/Jetson_Xavier_AGX_H01_Driver_Installation)
* [Jetson AGX Orin 32GB H01 套件](https://wiki.seeedstudio.com/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack)

### 2. 系统更新和依赖项：

设置操作系统后，执行系统更新并安装所需的依赖项。

:::info
**更新系统：在 Jetson 设备上打开终端并运行以下命令：**

```
sudo apt-get update && sudo apt-get upgrade
```

**安装额外依赖项：安装 Jetson 上构建和运行软件所需的常见依赖项：**
```
sudo apt-get install -y \
python3-pip \
python3-dev \
python3-venv \
build-essential \
libssl-dev \
libffi-dev \
git
```

:::



### 2. Docker 安装：

Frigate 作为 Docker 容器运行。在 Jetson 设备上安装 Docker 的步骤如下：

##### 1. 安装 Docker：
* 安装 Docker 的依赖项：
```
sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common
```
* 添加 Docker 的官方 GPG 密钥：
```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```
* 添加 Docker 仓库：
```
sudo add-apt-repository "deb [arch=arm64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
```
* 安装 Docker：
```
sudo apt-get update
sudo apt-get install -y docker-ce
```

##### 2. Docker Compose 安装：
Docker Compose 用于定义和运行多容器的 Docker 应用程序，例如 Frigate，并处理 yaml 文件以运行 Docker 容器。

* 安装 Docker Compose：使用以下命令安装 Docker Compose：
```
sudo apt-get install -y python3-pip
sudo pip3 install docker-compose
```
* 验证 Docker Compose 安装：
```
docker-compose --version
```

##### 3. NVIDIA Container Toolkit:

要安装 Nvidia 容器工具包，可以参考文档中的链接。根据您的系统，您可以按照以下安装指南进行操作。您需要安装它以便在 Docker 容器中使用 GPU。

##### 4. Frigate 配置：
* 设置配置目录：创建一个目录来保存 Frigate 配置文件：
```
mkdir ~/frigate
cd ~/frigate
```
* 创建配置文件：您需要在 `~/frigate` 目录中创建 `docker-compose.yml` 和 `config.yml` 文件。这些文件将定义 Frigate 的部署方式以及它如何连接到您的 IP 摄像头。`docker-compose.yml` 定义了 Frigate 的 Docker 服务，而 `config.yml` 指定了 Frigate 的设置，例如摄像头流、检测设置和 MQTT 集成。

完成这些步骤后，您的 NVIDIA Jetson 设备将完全准备好运行 Frigate，您可以继续部署 Frigate 并集成您的 IP 摄像头以进行实时对象检测。

---

## 入门指南

现在您已经准备好了硬件并设置了软件环境，是时候在您的 NVIDIA Jetson 设备上部署 Frigate 并将其连接到您的 Dahua IP 摄像头了。按照以下步骤开始部署：

### 1. 拉取 Frigate Docker 镜像：

在 Frigate 网站中，使用 Docker Compose 是推荐的安装方法。首先，您需要拉取专为 TensorRT 优化的 Frigate Docker 镜像。此镜像专门设计用于利用 NVIDIA Jetson 设备的 GPU 功能以实现高效的对象检测。

我们正在使用 JP5.1.3，拉取请求如下：
```
docker pull ghcr.io/blakeblackshear/frigate:stable-tensorrt-jp5
```

当前稳定版本的官方 Docker 镜像标签包括：

* **stable**：标准 Frigate 构建，适用于 amd64 和 RPi；优化的 Frigate 构建，适用于 arm64。
* **stable-standard-arm64**：标准 Frigate 构建，适用于 arm64。
* **stable-tensorrt**：专为运行 Nvidia GPU 的 amd64 设备构建的 Frigate。

当前稳定版本的社区支持 Docker 镜像标签包括：

* **stable-tensorrt-jp5**：优化的 Frigate 构建，适用于运行 Jetpack 5 的 Nvidia Jetson 设备。
* **stable-tensorrt-jp4**：优化的 Frigate 构建，适用于运行 Jetpack 4.6 的 Nvidia Jetson 设备。
* **stable-rk**：适用于带有 Rockchip SoC 的 SBC 的 Frigate 构建。
* **stable-rocm**：适用于 AMD GPU 和 iGPU 的 Frigate 构建。

您可以根据您的部署选择这些标签。但在这里，我们使用 Jetson、TensorRT 和 Jetpack 5.1.3，因此我们需要拉取 `stable-tensorrt-jp5`。此 Docker 镜像包含运行 Frigate 所需的所有软件包，无需额外安装 TensorRT 等。

---

### 2. 准备 Frigate 配置文件：

在开始部署之前，您需要配置 Frigate 以适应您的具体设置，包括摄像头流和检测设置。

**config.yml 文件**：此文件将包含 Frigate 的配置，包括摄像头设置和检测参数。使用文本编辑器创建一个名为 `config.yml` 的新文件，并添加以下内容。此配置在 NVIDIA Jetson 设备上设置 Frigate，使用 TensorRT 从 Dahua IP 摄像头进行高效对象检测。
```
mqtt:
  enabled: False

cameras:
  dummy_camera: # <--- 之后将替换为您的实际摄像头
    enabled: True
    ffmpeg:
      hwaccel_args: preset-jetson-h264
      inputs:
        - path: rtsp://admin:admin1234@192.168.1.108:554/cam/realmonitor?channel=1&subtype=0
          roles:
            - detect

birdseye:

  enabled: True
  mode: objects
         
detectors:
  tensorrt:
    type: tensorrt
    device: 0 # 默认值，选择第一个 GPU

model:
  path: /config/model_cache/tensorrt/yolov7-320.trt
  input_tensor: nchw
  input_pixel_format: rgb
  width: 320
  height: 320

detect:
  fps : 20
  width: 1280
  height: 720
  
objects:
  track:
    - person 
```

关键点包括：

**MQTT 禁用**：MQTT 集成已关闭，因此 Frigate 不会通过 MQTT 发送检测事件。

**摄像头设置**：启用了一个名为 `dummy_camera` 的占位摄像头，使用 FFmpeg 的硬件加速处理 H.264 视频流。它通过 RTSP URL 连接到 Dahua IP 摄像头进行检测。

**鸟瞰视图启用**：提供一个概览，仅显示所有摄像头流中的检测对象。

**TensorRT 检测器**：使用 TensorRT 在主 GPU 上进行推理，优化检测速度和效率。

**模型详情**：指定了一个 TensorRT 优化的 YOLOv7 模型用于对象检测，输入大小为 320x320，格式为 RGB。

**检测设置**：以每秒 20 帧处理视频，检测分辨率为 1280x720。

**对象跟踪**：配置为仅跟踪人，减少计算负载并专注于相关检测。

---

### 3. 准备 docker-compose.yml 文件：

此文件定义了 Frigate 服务以及如何使用 Docker Compose 运行它。在同一目录中创建一个名为 `docker-compose.yml` 的新文件，并添加以下内容：
```
services:
  frigate:
    privileged: true
    environment:
      - YOLO_MODELS=yolov7-320
      - USE_FP16=false
    container_name: frigate
    runtime: nvidia 
    #devices:
      #- /dev/video0:/dev/video0 
    volumes:
      - /home/jetson/frigate/config:/config
      - /home/jetson/frigate/storage:/media/frigate
      #- type: tmpfs # 可选：1GB 内存，减少 SSD/SD 卡磨损
        #target: /tmp/cache
        #tmpfs:
          #size: 1000000000
    ports:
      - "5000:5000"
      - "8554:8554"
    image: ghcr.io/blakeblackshear/frigate:stable-tensorrt-jp5
```

上述代码片段是 Docker Compose 设置中 Frigate 服务的配置。Frigate 是一个开源的 AI 驱动视频监控系统，可用于实时检测和跟踪对象。

以下是配置的详细说明：

1. **services**: 此部分定义了将成为 Docker Compose 设置一部分的服务。

2. **frigate**: 这是 Frigate 容器的服务名称。

3. **privileged: true**: 这为 Frigate 容器授予特权访问权限，这通常是访问摄像头等硬件设备所必需的。

4. **environment**: 此部分为 Frigate 容器设置了两个环境变量：
   - `YOLO_MODELS=yolov7-320`: 指定用于目标检测的 YOLO（You Only Look Once）模型。
   - `USE_FP16=false`: 禁用 16 位浮点精度的使用，这可能会在某些硬件上提高性能。

5. **container_name: frigate**: 设置 Frigate 容器的名称。

6. **runtime: nvidia**: 指定 Frigate 容器使用的运行时环境，在此情况下为 NVIDIA 运行时，用于 GPU 加速处理。

7. **volumes**: 挂载以下目录：
   - `/home/jetson/frigate/config:/config`: 将本地配置目录挂载到容器的 `/config` 目录。
   - `/home/jetson/frigate/storage:/media/frigate`: 将本地存储目录挂载到容器的 `/media/frigate` 目录。
   - 注释掉的行显示了一个可选配置，用于使用 tmpfs（内存文件系统）进行缓存，这可以帮助减少存储设备的磨损。

8. **ports**: 暴露以下端口：
   - `5000:5000`: 将容器的 5000 端口映射到主机的 5000 端口。
   - `8554:8554`: 将容器的 8554 端口映射到主机的 8554 端口。

9. **image: ghcr.io/blakeblackshear/frigate:stable-tensorrt-jp5**: 指定用于 Frigate 容器的 Docker 镜像，在此情况下为 GitHub Container Registry 上 `blakeblackshear/frigate` 仓库的 `stable-tensorrt-jp5` 标签。

此配置在 Docker Compose 环境中设置了一个 Frigate 服务，提供运行 Frigate 视频监控系统的方式，并支持自定义设置和硬件加速。

### 3. 使用 Docker Compose 部署 Frigate：
在设置好配置文件并拉取 Docker 镜像后，现在可以使用 Docker Compose 部署 Frigate。

1.  进入 Frigate 目录：确保您位于创建配置文件的目录中：
```
cd ~/frigate
```

2.  使用 Docker Compose 启动 Frigate：运行以下命令启动 Frigate：
```
docker-compose up -d
```
此命令以分离模式启动 Frigate 服务。Docker 容器现在将在后台运行。

3.  验证 Frigate 是否正在运行：使用以下命令检查 Frigate 容器是否正在运行：
```
docker ps
```
4.  运行 Docker 后，您可以看到 Tensorrt 的日志，这表明 Frigate 正在 GPU 上运行。

![image1](https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/1.png)

### 4. 访问 Frigate Web 界面：
一旦 Frigate 启动并运行，您可以访问 Web 界面来监控视频流并配置设置：

1.  打开一个 Web 浏览器：在连接到与 Jetson 设备相同网络的设备上，打开一个 Web 浏览器。
2.  输入 Jetson 设备的 IP 地址：在地址栏中输入 Jetson 设备的 IP 地址，后跟端口 5000（例如：http://jetson-ip-address 或 127.0.0.1:5000）。
3. 查看 Dashboard：Frigate 仪表板将显示来自连接的 Dahua IP 摄像头的实时视频流、检测事件和配置选项。
4.  现在，您可以通过 jtop 或 Frigate 系统检查 Jetson 是否正在使用 GPU 进行检测。如下图所示，检测部分每帧运行约 33 毫秒。

![image1](https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/2.png)

![image1](https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/4.png)

## 故障排除

在硬件连接、软件调试或上传过程中可能会遇到一些问题，尤其是在运行 Docker 时。您可以使用 Docker 日志来解决错误。
```
docker logs frigate
```

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 参考资料
1.  [Frigate 官方网站](https://frigate.video/)
2.  [Frigate Github](https://github.com/blakeblackshear/frigate)
3.  [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html)