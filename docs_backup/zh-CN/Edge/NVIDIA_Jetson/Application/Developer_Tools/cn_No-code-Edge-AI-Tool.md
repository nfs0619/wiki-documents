---
description: 无代码边缘 AI 工具
title: 无代码边缘 AI 工具
keywords:
  - Edge
  - reComputer 应用
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/No-code-Edge-AI-Tool
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # 用于 Disqus

---

# 无代码边缘 AI 工具

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

我们很高兴为您带来基于 Jetson Nano 构建的 reComputer 的新体验，用于快速和简单的对象识别。

只需几个简单的命令，就可以下载和部署环境，监控、识别和从实时屏幕输出结果的过程只需三个模块即可完成。

## 演示视频

**仓库安全演示**

<iframe width={560} height={315} src="https://www.youtube.com/embed/QI_3g5kkh0I" title="YouTube 视频播放器" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

**农场守卫演示**

<iframe width={560} height={315} src="https://www.youtube.com/embed/Jt66IG4E6uM" title="YouTube 视频播放器" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## 初步准备

在本示例中，我们将介绍如何在全新的 NVIDIA Jetson 系统下下载和安装所需内容，然后打开边缘 AI 工具并使用实时摄像头进行对象检测。以下是步骤概述。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/node-red/step.png" /></div>

1. 下载和部署
2. 放置模块
3. 显示结果

### 硬件需求

在开始之前，您需要准备以下硬件。

<table>
  <thead>
    <tr>
      <th>硬件图片</th>
      <th>硬件名称</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/node-red/reComputer-Jetson-Nano.jpg" width={210} /></td>
      <td><a href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html">reComputer J1010 搭载 Jetson Nano 模块</a><br />或 <br /><a href="https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html">reComputer J1020 搭载 Jetson Nano 模块</a></td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/node-red/3.png" width={210} /></td>
      <td>Logitech C270 高清摄像头<br />或<br /><a href="https://developer.nvidia.com/embedded/jetson-partner-supported-cameras?t1_camera-interface=USB&t1_max-resolution=4K&t1_supported-jetson-products=Nano" target="_blank" rel="noopener noreferrer">其他由 Jetson 支持的 V4L2 USB 摄像头</a></td>
    </tr>
  </tbody>
</table>

!!!注意
    本示例仅适用于搭载 Jetson Nano 的 reComputer。请注意，目前不支持搭载 Jetson Xavier NX 的 reComputer，但未来会支持。

### 软件需求

在开始之前，请确保您的设备已刷入 [JetPack 4.6.1](https://developer.nvidia.com/embedded/jetpack-sdk-461)。如果您想将 Jetson Nano eMMC 重新刷入 JetPack 4.6.1，请参考[这里](https://docs.nvidia.com/sdk-manager/install-with-sdkm-jetson/index.html)。

您可以通过在终端中输入以下命令来检查已安装的 JetPack 版本：

```sh
cat /etc/nv_tegra_release
```

输出应如下所示：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/node-red/check-jp-version.png" /></div>

**注意：** R32.7.1 对应 JetPack 4.6.1

## 入门指南

当硬件和软件准备好后，如上所述，我们可以开始体验边缘 AI 工具。在本示例中，请根据需要连接显示器、鼠标或键盘，您也可以通过 SSH 或 VNC 远程控制您的 NVIDIA Jetson。

### 步骤 1. 下载和部署

在 NVIDIA Jetson 中打开命令行窗口，并输入以下命令将所需文件下载到 Jetson。

```sh
git clone https://github.com/Seeed-Studio/node-red-contrib-ml.git
```

下载完成后，运行以下命令启动所需的 Docker。

```sh
cd node-red-contrib-ml
sudo ./docker-ubuntu.sh
```

整个安装和启动过程大约需要 7 到 9 分钟。

### 步骤 2. 放置模块

安装完成后，使用 NVIDIA Jetson 系统自带的 Google Chrome 浏览器，输入以下 URL 访问操作界面。

```
127.0.0.1:1880
```

您也可以在地址栏中输入 IP 地址加端口号（1880）来访问操作页面。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/6.png" /></div>

我们可以在下图中看到边缘 AI 工具操作的分布。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/8.png" /></div>

- **模块区域：** 此区域包含用户可以操作的多个模块。

- **编程区域：** 此区域是用户的编程区域。用户可以将模块从模块区域拖放到编程区域以完成程序。

- **设置区域：** 最右侧是设置区域。在这里我们可以看到编程区域的流程，并可以完成一些必要的设置或对模块进行操作等。

在模块区域中，有一个名为 **seeed recomputer** 的部分，我们将重点使用这三个模块。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/7.png" /></div>

- **video input：** 此模块用于从摄像头输入获取视频流。可以设置此模块以选择网络摄像头或本地 V4L2 USB 摄像头等。

- **detection：** 此模块用于选择要识别的模型。输入的视频流将使用您选择的模型进行识别。目前，此版本仅支持 **COCO 数据集**。

- **video view：** 此模块用于在屏幕上输出处理后的视频流。

接下来我们可以看看模块的组成。以模块 **video input** 为例。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/12.png" /></div>

在该块的左侧有一个蓝色的方块区域。当该区域隐藏时，表示视频流输入已关闭。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/11.png" /></div>

当该区域显示时，表示视频流输入已开启。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/13.png" /></div>

类似地，视频查看块在右侧也有一个这样的方块。隐藏时表示关闭视频流输出显示，反之亦然。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/14.png" /></div>

如果块的右上角有一个蓝点，这表示该块已被编辑但尚未部署。此外，整个项目需要通过块进行编程并部署后，才能显示结果。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/15.png" /></div>

块右侧的灰色方块是块之间的连接点。左键单击此处并拖动到下一个块的左侧连接点，即可将两个块连接起来，形成程序流。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/16.png" /></div>

需要注意的是，程序流按照**从左到右**的顺序执行，并且左侧连接点只能连接到右侧连接点。

如果块的左侧没有连接点，则应将其用作程序流的起始节点。如果块的右侧没有连接点，则应将其用作整个程序流的结束节点。

像 **object detection** 这样的块有两个连接点，表示可以向该块输出多种不同的内容。例如，可以同时输出视频流和日志。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/17.png" /></div>

这些块的使用非常简单快捷。您可以通过长按鼠标左键拖动所需的块，然后将其拖动到主屏幕的编程区域。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/9.png" /></div>

基于上述对块的描述，我们可以设计一个简单的块程序，如下所示。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/18.png" /></div>

上图所示的程序是从摄像头获取输入视频流，然后使用模型检测来输出识别对象的结果。

### 第三步：显示结果

将块放置好后，我们仍需对块进行简单配置才能使用。如果要设置某个特定块，可以双击它，右侧会弹出相应的设置框。

我们先来设置 **video input** 块。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/19.png" /></div>

- **设备类型 (Device type):** 在这里可以设置您的摄像头类型，目前支持两种类型的摄像头：网络摄像头和本地摄像头。

- **视频 (Video):** 在这里选择您的摄像头。如果此处没有可用的摄像头，请仔细检查摄像头是否受支持或是否已成功连接。

- **URL:** 如果您选择了网络摄像头，视频字段将变为 URL。在此请填写网络摄像头的输入源。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/20.png" /></div>

- **分辨率 (Resolution):** 在这里选择您的摄像头分辨率。选择错误的分辨率可能会导致运行时错误。

对于 **object detection** 块，设置如下。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/21.png" /></div>

- **模型名称 (Model name):** 在这里选择用于对象识别的模型名称，目前仅支持 COCO 数据集。

!!!注意
    COCO 是一个大规模的对象检测、分割和标注数据集。COCO 具有以下特点：
    - 对象分割
    - 上下文中的识别
    - 超像素内容分割
    - 33 万张图片（>20 万张标注图片）
    - 150 万个对象实例
    - 80 个对象类别
    - 91 个内容类别
    - 每张图片 5 个描述
    - 25 万个人体关键点

    <div align=center><img width = 700 src="https://files.seeedstudio.com/wiki/node-red/22.png"/></div>

完成设置后，点击界面右上角的 **deploy** 按钮，程序流将开始运行。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/23.png" /></div>

如果一切正常，您可以看到视频流中识别出的对象被框选，并显示置信度值。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/24.png" /></div>

## 深入操作

在上一章中，我们体验了 Edge AI Tool 程序的最简单形式。在本节中，我们将带您了解 Edge AI Tool 的更多扩展功能。

<iframe width={560} height={315} src="https://www.youtube.com/embed/QI_3g5kkh0I" title="YouTube 视频播放器" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

### 块下载

除了块部分中已有的块外，我们还可以根据需要下载更多块来完成更复杂的项目。

在右侧的设置区域，有一个更多选项按钮，我们选择 **Manage palette**。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/25.png" /></div>

在弹出的页面中，您可以看到已安装的块，并选择 **Install** 下载更多块。这里以邮箱块为例。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/27.png" /></div>

安装完成后，可以在块部分的底部看到新安装的块。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/30.png" /></div>

### 导入其他项目

有时候，您可能希望分享您的有趣项目供他人体验，或者您想使用其他人的项目，那么您可以参考以下方法。

在右侧的设置区域，有一个用于更多选项的按钮，我们选择 **Import**（导入）。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/33.png" /></div>

接下来，我们可以在弹出窗口中粘贴我们共享或获取的代码。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/34.png" /></div>

在这个示例中，我们将与您分享一个精彩的项目，该项目专注于实时检测是否有人通过摄像头进入环境，并在检测到有人时发送电子邮件通知。

```json
[
    {
        "id": "7963f97f362cdfc6",
        "type": "tab",
        "label": "warning email",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "41a8f267df4eb722",
        "type": "video input",
        "z": "7963f97f362cdfc6",
        "name": "",
        "deviceType": "rtsp",
        "rtsp": "",
        "local": "video0",
        "resolution": "2560",
        "frequency": "60",
        "senderr": true,
        "active": false,
        "x": 160,
        "y": 140,
        "wires": [
            [
                "c5fef75b0ab418c6"
            ]
        ]
    },
    {
        "id": "c5fef75b0ab418c6",
        "type": "detection",
        "z": "7963f97f362cdfc6",
        "name": "",
        "modelName": "coco_dataset",
        "showResult": true,
        "senderr": true,
        "x": 380,
        "y": 200,
        "wires": [
            [
                "40523cc8b61cfcc9"
            ],
            [
                "689c67f6610be9e2"
            ]
        ]
    },
    {
        "id": "40523cc8b61cfcc9",
        "type": "video view",
        "z": "7963f97f362cdfc6",
        "name": "",
        "width": 640,
        "data": "payload",
        "dataType": "msg",
        "thumbnail": false,
        "active": false,
        "pass": false,
        "outputs": 0,
        "x": 650,
        "y": 140,
        "wires": []
    },
    {
        "id": "689c67f6610be9e2",
        "type": "switch",
        "z": "7963f97f362cdfc6",
        "name": "person intrusion detected",
        "property": "payload.labels",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "person",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 410,
        "y": 540,
        "wires": [
            [
                "40f6ca0fbb322dd5"
            ]
        ]
    },
    {
        "id": "40f6ca0fbb322dd5",
        "type": "e-mail",
        "z": "7963f97f362cdfc6",
        "server": "",
        "port": "465",
        "secure": true,
        "tls": true,
        "name": "",
        "dname": "warning email",
        "credentials": {
            "userid": "",
            "password": ""
        },
        "x": 720,
        "y": 620,
        "wires": []
    },
    {
        "id": "80a51065a9ee835e",
        "type": "ui_spacer",
        "z": "7963f97f362cdfc6",
        "name": "spacer",
        "group": "529bf2dedebe9911",
        "order": 2,
        "width": 12,
        "height": 1
    },
    {
        "id": "529bf2dedebe9911",
        "type": "ui_group",
        "name": "Default",
        "tab": "ad4ccf9922566f44",
        "order": 1,
        "disp": true,
        "width": 20,
        "collapse": false,
        "className": ""
    },
    {
        "id": "ad4ccf9922566f44",
        "type": "ui_tab",
        "name": "Home",
        "icon": "dashboard",
        "disabled": false,
        "hidden": false
    }
]
```

注意，这段代码不能直接使用，您需要将 `"rtsp": "",` 填写为您的摄像头输入源。将 `"server": "",` 填写为您的电子邮件服务器地址，并将 `"credentials": {
            "userid": "",
            "password": ""
        },` 填写您的用户名和密码。

当一切准备就绪时，程序块将开始工作，并在检测到活动时向您发送电子邮件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/36.png" /></div>

在这个项目中，使用了两个新的模块，**switch** 和 **email**。

**switch** 模块是根据您设置的判断信息决定程序的走向。例如，在这个程序中，我将 switch 模块命名为 **person intrusion detected**（检测到人员入侵），并填写了属性 **payload.labels**。**payload.labels** 是前一个模块 **object detection**（对象检测）的关键值。当属性的值等于 **person** 时，switch 后连接的模块将被执行。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/31.png" /></div>

**email** 模块的设置稍微简单一些，您只需要根据您的邮箱支持的协议填写您希望接收消息的电子邮件地址和服务器地址。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/32.png" /></div>

当然，如果您直接复制代码并完成代码修改，您可以无需对模块进行进一步更改。如果您更习惯使用图形界面，也可以在模块设置中完成这些元素的配置。

## 故障排除

### 如果 Docker 未成功启动并且模块中没有 Seed Recomputer，我该怎么办？

我们可以关闭 Docker 并使用以下命令重新启动它。

```sh
cd node-red-contrib-ml/
sudo docker-compose --file docker-compose.yaml down
sudo docker-compose --file docker-compose.yaml up
```

### 如果我无法观察到结果或调试中出现错误，我该怎么办？

请使用以下命令检查 Docker 安装是否正确。您应该看到图中显示的三个 Docker。如果其中任何一个缺失，请返回 **Getting Started**（入门）中的第一步并重新安装 Docker。

```sh
sudo docker image ls
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/37.png" /></div>

如果安装结果与图片一致，那么可以使用以下命令检查已启动的 Docker 的运行状态。

```sh
sudo docker ps
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/38.png" /></div>

如果如上图所示没有启动任何 Docker，请尝试重新启动 Docker，或者检查设备的型号和系统版本是否符合要求。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时拥有顺畅的体验。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>