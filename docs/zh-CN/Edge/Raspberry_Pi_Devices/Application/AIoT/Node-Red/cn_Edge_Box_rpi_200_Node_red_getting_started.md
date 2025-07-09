---
description: Edge Box RPi 200 使用 Node-RED 入门指南
title: Edge Box RPi 200 使用 Node-RED 入门指南
keywords:
  - Edge Controller
  - Edge-Box
  - Node-Red
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Edge-Box-Getting-Started-with-Node-Red
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 简介

[Node-RED](https://nodered.org/) 是一个多功能的编程工具，旨在无缝连接硬件设备、API 和在线服务。它的基于浏览器的流程编辑器简化了通过调色板中的各种节点将不同组件连接在一起的过程。Node-RED 的轻量级运行时基于 Node.js 构建，能够高效利用 Raspberry Pi 和其他低成本硬件，非常适合边缘网络应用。

## 开始准备

在开始这个项目之前，您可能需要提前准备好硬件和软件，如下所述。

### 硬件准备

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Edge Box RPi 200</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### 软件准备

Edge Box-200 随设备预装了 Raspberry Pi OS。如果您是第一次启动此设备，请阅读我们的 [入门指南](https://wiki.seeedstudio.com/Edge_Box_introduction/) Wiki。

## 在 Edge Box 上安装 Node-RED

- **步骤 01**: SSH 到 Edge Box  
请打开 PowerShell（如果您使用的是 Windows）或打开终端应用程序（如果您使用的是其他操作系统），然后输入以下命令：`ssh \{USERNAME\}@\{EDGEBOX_IP_ADDRESS\}`。例如：

```sh
ssh pi@192.168.43.100
```

然后请输入您在 Edge Box 操作系统上设置的 `\{USER\}` 的密码。

- **步骤 02**: 安装 Node-RED  

Node-RED 团队为我们准备了一个一体化脚本，您只需在 EdgeBox 的原生终端应用程序（通过 VNC 查看器）或上述步骤中的 SSH Shell 中输入以下命令即可：

```sh
bash <(curl -sL https://raw.githubusercontent.com/node-red/linux-installers/master/deb/update-nodejs-and-nodered)
```

安装结束时，提示会询问您几个问题，您需要根据提示回答。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/nodered.PNG" style={{width:600, height:'auto'}}/></div>

- **步骤 03**: 设置 Node-RED  
使用一体化脚本完成安装后，您可以根据需要使用以下命令：

使用 `node-red-start`                   启动 Node-RED<br />
使用 `node-red-stop`                    停止 Node-RED<br />
使用 `node-red-start`                   再次启动 Node-RED<br />
使用 `node-red-log`                     查看最近的日志输出<br />
使用 `sudo systemctl enable nodered.service` 使 Node-RED 在每次启动时自动启动<br />
使用 `sudo systemctl disable nodered.service` 禁用启动时自动启动<br />

- **步骤 04**: 访问 Node-RED 编辑器  

现在请打开您喜欢的 Web 浏览器，并输入以下 URL：

* 选项 1: 如果 Web 浏览器在 Edge Box 上本地运行（通过 VNC），请使用 `http://127.0.0.1:1880` 。

* 选项 2: 如果 Web 浏览器在主机计算机上远程运行，请使用 http://\{EdgeBox_IP_ADDRESS\}:1880，并将 \{EdgeBox_IP_ADDRESS\} 替换为 EdgeBox 的 IP 地址。

## 熟悉 Node-RED

现在，您应该看到与下图类似的结果：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/noderedinterface.PNG" style={{width:600, height:'auto'}}/></div>

### Node-RED 编辑器概览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/node-editor.png" style={{width:600, height:'auto'}}/></div>

* **节点面板**: 用户可以从调色板中浏览和选择节点以添加到其流程中的区域。
* **流程编辑器**: 用户可以在此工作区中通过可视化方式将节点连接在一起以创建流程。
* **配置面板**: 用户可以在此部分配置所选节点的属性和设置。
* **设置按钮**: 允许用户访问并调整 Node-RED 编辑器的各种设置和偏好。
* **部署按钮**: 使用户能够将其流程部署到 Node-RED 运行时，从而使其生效并开始运行。

### 安装节点

有几种方法可以安装节点：一种是使用命令行，另一种是使用 Node-RED 编辑器。在这里，我将解释最简单的方法，即使用 Node-RED 编辑器。

- **步骤 1**: 点击右上角带有 **三条横线** 图标的设置按钮，然后选择“管理调色板”。

- **步骤 2**: 在调色板选项卡中，点击“安装”选项卡。

- **步骤 3**: 在节点搜索栏中搜索所需的节点，然后点击“安装”按钮进行安装。

- **步骤 4**: 在下拉警告窗口中点击 **安装** 按钮以确认安装。

- **步骤 5**: 等待安装完成，您应该会看到“安装”按钮变为“已安装”。

- **步骤 6**: 您应该可以在侧边栏中看到已安装的节点。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/nodered-edgebox1.gif" style={{width:800, height:'auto'}}/></div>

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