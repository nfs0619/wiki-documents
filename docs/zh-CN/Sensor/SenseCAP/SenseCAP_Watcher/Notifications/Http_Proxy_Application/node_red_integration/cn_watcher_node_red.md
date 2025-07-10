---
description: 从 Watcher 发送消息到 Node-RED
title: Watcher 到 Node-RED
keywords:
- watcher
- Node-Red
image: https://files.seeedstudio.com/wiki/watcher_getting_started/cover.png
slug: /cn/watcher_to_node_red
last_update:
  date: 05/15/2025
  author: Allen
sidebar_position: 1
---

# Watcher 到 Node-RED 快速入门

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div class="table-center">
<iframe width="800" height="450" src="https://www.youtube.com/embed/Ono_v759R0Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[**Node-RED**](https://nodered.org/) 是一个用于将硬件设备、API 和在线服务以新颖有趣的方式连接起来的编程工具。

它提供了一个基于浏览器的编辑器，使用户可以轻松地使用调色板中的各种节点来连接流程，并通过单击即可部署到其运行时环境。

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/cover.png" style={{width:1000, height:'auto'}}/></div> -->

为了让用户更方便地**将 Watcher 的数据连接到各种其他 PaaS 平台以进行更深入的数据处理**，例如从 Watcher 到 IFTTT、Telegram、Twilio 等，我们将进行一系列关于 **Watcher 和 Node-RED** 的教程。

本教程是系列教程中的第一篇，将指导您安装和使用 Node-RED，并调用 Watcher API 连接到 Node-RED。

## 第 1 部分：安装 Node.js®

要在本地安装 Node-RED，您需要一个 [支持的 Node.js 版本](https://nodered.org/docs/faq/node-versions)。

从官方 [Node.js 首页](https://nodejs.org/en/) 下载最新的 14.x LTS 版本。这将为您的系统提供最佳版本。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100-nodered/1.png" /></div>

:::note
运行下载的 MSI 文件。安装 Node.js 需要本地管理员权限；如果您不是本地管理员，安装时会提示您输入管理员密码。安装时接受默认设置。安装完成后，关闭所有打开的命令提示符并重新打开，以确保新的环境变量被加载。
:::
在安装 Node.js 时，如果您使用的计算机尚未安装任何编程环境，我们建议您在安装 Node.js 时勾选安装必要工具的选项，这将为您节省许多麻烦。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100-nodered/2.png" /></div>

安装 Node-RED 的最简单方法是使用 Node 的包管理工具 **npm**。然而，我们不建议使用 npm 1.x 安装 Node-RED，而是建议升级到最新的 **npm 2.x** 版本。

:::note
在 **Windows** 上（需要 Windows 10 及以上版本），使用 **Win+R** 快捷键并在弹出的窗口中输入 `cmd` 打开终端，然后执行以下命令。

如果您使用的是 **MacOS** 或 **Linux**，请在终端中执行以下命令，并为非 root 用户在命令前添加 `sudo`。
:::

```sh
npm install -g npm@2.x
```

安装完成后，打开命令提示符并运行以下命令以确保 Node.js 和 npm 已正确安装。

```sh
node --version && npm --version
```

您应该会收到类似以下的输出：

```sh
> v16.17.0
> 2.15.12
```

## 第 2 部分：安装 Node-RED

将 Node-RED 安装为全局模块会将命令 `node-red` 添加到您的系统路径中。在命令提示符中执行以下命令：

```sh
npm install -g --unsafe-perm node-red
```

如果 Node-RED 被安装为全局 npm 包，则可以直接执行命令 `node-red`：

```sh
node-red
```

这将在终端中输出 Node-RED 的日志。您必须保持终端打开以确保 Node-RED 运行。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100-nodered/3.png" /></div>

这将允许您在 http://localhost:1880 上查看 Node-RED 编辑器。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/4.png" /></div>

## 第 3 部分：在 Watcher 中运行任务

告诉 Watcher 您希望它帮助您完成什么。您只需在输入框中输入一些命令，例如 **检测到有人时通知我** 或 **告诉我是否有火灾** 等。如果您想了解更多，[**请点击这里**](https://wiki.seeedstudio.com/getting_started_with_watcher_task/)。

因此，当 Watcher 检测到火灾时，它会通过 SenseCraft APP 通知您，同时发出音频警报并闪烁 RGB 灯。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/svg10.svg" style={{width:600, height:'auto'}}/></div>

## 第 4 部分：Watcher 发送消息到 Node-RED

我们提供了两种方法将消息从 Watcher 发送到 Node-RED，SenseCAP 节点和 HTTP 协议。您可以选择任何您喜欢的方法。

### 方法 1：使用 SenseCAP 节点

#### 第一步：获取 Watcher API Key

打开您的 SenseCraft APP，并按照以下步骤获取 **Organization ID** 和 **API Key**。我们稍后会用到它们。

<div class="table-center">
  <table align="center">
    <tr>
      <th>页面 1</th>
      <th>页面 2</th>
      <th>页面 3</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/first.png" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/1.svg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/2.svg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <th>页面 4</th>
      <th>页面 5</th>
      <th>页面 6</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/3.svg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/4.svg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/5.svg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

#### 步骤 2. 安装 SenseCAP 节点

点击三条横线图标，然后点击 **Manage palette** 选项。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/1.png" style={{width:800, height:'auto'}}/></div>

点击 **Install** 选项，输入 **sensecap** 进行搜索，然后点击 **install**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/2.png" style={{width:600, height:'auto'}}/></div>

将 **OpenStream** 和 **debug** 模块拖到工作区，并用线将它们 **连接** 起来。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/3.png" style={{width:800, height:'auto'}}/></div>

**双击** OpenStream 模块，然后会打开一个侧边窗口。为其命名并创建一个新账户。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/4.png" style={{width:800, height:'auto'}}/></div>

为你的账户命名，并输入刚刚获取的 **Organization ID** 和 **API key**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/5.png" style={{width:800, height:'auto'}}/></div>

点击 **Done** 按钮以接收平台的所有消息，或者你可以选择接收指定的消息。例如，如果你只想接收 Watcher 的消息，可以填写设备 **Setting** -> **About Device** 中的 **EUI** 代码，或者在 **步骤 6** 中找到的消息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/6.png" style={{width:800, height:'auto'}}/></div>

点击 **Deploy** 按钮。这个按钮就像编译和运行按钮一样。无论你做了什么更改，都需要点击这个按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/7.png" style={{width:800, height:'auto'}}/></div>

完成后，你会看到一个连接标志，这意味着它按预期工作。当 Watcher 发送消息时，你将在 Node-RED 中接收到它们。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/9.png" style={{width:800, height:'auto'}}/></div>

### 方法 2：使用 HTTP 协议

#### 步骤 1. 打开 HTTP 块功能

运行任务时，点击 **Detail Configs** 按钮，然后打开 **HTTP Push Notification** 并点击 **Go Setup**。你需要填写 **你的电脑 IP 地址** 和 **Node-RED 访问端口**（默认端口是 1880）。然后点击 **Update Now** 和 **Run Task**。

<div class="table-center">
  <table align="center">
    <tr>
      <th>页面 1</th>
      <th>页面 2</th>
      <th>页面 3</th>
      <th>页面 4</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/26.png" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/27.png" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/28.png" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/29.png" style={{width:200, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

#### 步骤 2. 在 Node-RED 中配置

首先，你需要在 Node-RED 中导入工作流。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/24.png" style={{width:600, height:'auto'}}/></div>

将以下代码粘贴到其中，然后点击 **Import** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/25.png" style={{width:600, height:'auto'}}/></div>

```
[
    {
        "id": "99b783856e77b41f",
        "type": "tab",
        "label": "Flow 2",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "2791b077ca7367c9",
        "type": "http in",
        "z": "99b783856e77b41f",
        "name": "",
        "url": "/v1/notification/event",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 450,
        "y": 460,
        "wires": [
            [
                "5de4e51231d87d00"
            ]
        ]
    },
    {
        "id": "61c50a0666f83a50",
        "type": "http response",
        "z": "99b783856e77b41f",
        "name": "",
        "statusCode": "200",
        "headers": {},
        "x": 830,
        "y": 460,
        "wires": []
    },
    {
        "id": "5de4e51231d87d00",
        "type": "function",
        "z": "99b783856e77b41f",
        "name": "",
        "func": "// 在这里处理数据\n// 例如，提取警报信息\n// msg.payload = {\n//     alertMsg: msg.payload.events.text\n// }\n msg.payload = {\n    code: 200,\n    msg:\"ok\",\n    data: msg.payload\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 660,
        "y": 460,
        "wires": [
            [
                "61c50a0666f83a50",
                "852490a1c300cd94"
            ]
        ]
    },
    {
        "id": "852490a1c300cd94",
        "type": "debug",
        "z": "99b783856e77b41f",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 840,
        "y": 520,
        "wires": []
    }
]
```

现在，当 Watcher 检测到有人时，它会自动向 Node-RED 发送消息~

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/23.png" style={{width:800, height:'auto'}}/></div>

## 第 5 部分. 预览图像

如果你想预览来自 Watcher 的图像，你需要在 Node-RED 中安装一个库。

如果不需要，可以忽略此部分。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/n1.png" style={{width:800, height:'auto'}}/></div>

安装完成后，您可以在 **输出部分** 找到它，将其拖动到您希望预览图像的位置并连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/n3.png" style={{width:800, height:'auto'}}/></div>

这一步非常重要。您需要 **双击图像预览节点** 并 **在此节点中填写 base64 URL**。别忘了点击右上角的 **完成（Done）按钮** 和 **部署（Deploy）按钮**。完成后，当 Watcher 消息再次到来时，我们将预览图像~

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/n2.png" style={{width:800, height:'auto'}}/></div>

恭喜您！现在数据已经成功从 Watcher 传输到 Node-RED。在下一篇 Wiki 中，我们将向您展示如何将 Watcher 的数据传输到其他平台，欢迎尝试！

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>