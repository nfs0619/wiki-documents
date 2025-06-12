---
description: reTerminal DM RS485端口与Node-RED
title: reTerminal DM RS485端口与Node-RED
keywords:
  - Edge
  - reTerminal-DM
  - Node-Red
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal-DM-Node-Red-RS485
last_update:
  date: 05/15/2025
  author: Peter Pan
---

# reTerminal DM RS485端口与Node-RED

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 关于RS485、Modbus、Modbus RTU和Modbus Node-RED节点的简要信息

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

<br />

### RS485

RS485是一种用于设备之间数据传输的串行通信协议。RS485是一种数据传输的串行通信标准，通常用于工业应用。它使用差分信号，这意味着通信需要两条数据线（A和B）以及一条地线（GND）。这种差分信号提供了更好的抗噪性，并允许最长可达4000英尺的电缆长度。RS485的最大数据传输速率通常比RS232更高，可达10 Mbps。RS485设计用于多点通信，这意味着RS485可以在同一总线上在多个设备之间传输数据。总而言之，RS485通常用于工业控制系统中多个设备之间的长距离通信。

### Modbus RTU

Modbus RTU是一种流行的工业通信协议，用于在监督控制和数据采集（SCADA）系统中的设备之间进行数据交换。它是一种基于RS485或RS232总线标准的串行通信协议。Modbus RTU使用主从架构，其中主设备与一个或多个从设备发起通信。主设备向从设备发送请求消息，从设备则以包含请求数据的消息进行响应。Modbus RTU消息由头部、数据和错误检查字段组成。头部包含有关消息的信息，例如从设备地址和功能码。数据字段包含实际传输的数据。错误检查字段用于确保消息的完整性。Modbus RTU支持多种数据类型，包括二进制、整数、浮点数和字符串。它还支持一系列功能码，允许不同类型的数据访问，例如读取保持寄存器、写入单线圈和读取输入寄存器。Modbus RTU的一个优势是其简单性和易于实现。它被广泛支持于各种设备和软件中，使其成为工业自动化和控制系统的流行选择。它也非常适合需要实时数据交换和低延迟通信的应用。

Modbus RTU是一种在各种工业应用中使用的流行通信协议，例如：

  *  建筑自动化和控制系统：Modbus RTU通常用于监控和控制照明、暖通空调（HVAC）以及其他建筑系统。

  *  能源管理系统：Modbus RTU可用于监控和控制商业和工业建筑中的能源消耗。

  *  制造和过程控制：Modbus RTU通常用于监控和控制制造过程，例如装配线、传送系统和包装机器。

  *  水和废水处理：Modbus RTU用于监控和控制水和废水处理设施中泵、阀门及其他设备的运行。

  *  石油和天然气生产：Modbus RTU用于石油和天然气生产设施中监控和控制泵、压缩机及其他设备。

  *  可再生能源系统：Modbus RTU可用于监控和控制太阳能板、风力涡轮机及其他可再生能源系统。

  *  交通系统：Modbus RTU用于监控和控制交通信号、照明及交通系统中的其他设备。

总的来说，任何需要在工业环境中进行实时数据交换和低延迟通信的应用都可以从使用Modbus RTU中受益。

### Modbus节点

Node-RED内置了Modbus节点，允许用户轻松将Modbus设备集成到其Node-RED工作流中。Modbus节点支持Modbus TCP和Modbus RTU协议，并可用于读取和写入Modbus设备的数据。

要在Node-RED中使用Modbus节点，只需将其拖放到画布上，并使用适当的Modbus设置进行配置，例如设备地址、功能码和数据类型。一旦配置完成，Modbus节点可以连接到工作流中的其他节点以处理和显示数据。

Node-RED还具有一系列其他节点和插件，可用于扩展其功能并与其他系统和设备集成。例如，有用于MQTT、HTTP及其他通信协议的节点，以及用于数据处理、可视化和存储的节点。

总体而言，Node-RED提供了一个强大且灵活的平台，用于构建物联网和工业自动化应用，其内置的Modbus节点使得将Modbus设备集成到这些工作流中变得非常容易。

# 在 reTerminal DM 上开始使用 Modbus 节点

您可以在 [Modbus Node-RED](https://flows.nodered.org/node/node-red-contrib-modbus) 页面找到更多信息。

如果您正在使用 Senscraft Edge OS，可以跳过 Modbus 节点的安装步骤，直接前往 [如何在 reTerminal DM 上使用 Modbus 节点](#how-to-use-modbus-node-with-retermianl-dm)。

## 安装 Modbus 节点

在本节中，我们将安装 `node-red-contrib-modbus` 节点，因此请先复习如何[安装节点](/reTerminal-DM-Getting-Started-with-Node-Red#install-nodes)。

### 选项 1：命令行

首先，请复习如何通过 SSH 访问 reTerminal DM，具体步骤请查看[这里](/reterminal-dm-flash-OS#install-drivers)。

一旦通过 SSH 访问了 reTerminal DM，可以按照以下步骤操作：

步骤 1：进入 Node-RED 文件夹

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-folder.png" /></div><br />

```sh
cd .node-red/
```

步骤 2：安装 Modbus 节点

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/npm-install-node.png" /></div><br />

```sh
npm install node-red-contrib-modbus
```

步骤 3：节点安装完成后，请通过以下命令重启 Node-RED 服务：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-restart.png" /></div><br />

```sh
node-red-restart
```

### 选项 2：Node-RED 编辑器

步骤 1：点击右上角带有“三条横线”图标的 `设置` 按钮，然后选择 `管理调色板`。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/manage_palette.png" /></div>

步骤 2：在调色板选项卡中点击 `安装` 选项卡。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/install-tab.png" /></div>

步骤 3：在节点搜索栏中搜索节点，然后点击 `安装` 按钮进行安装。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/search-install.png" /></div>

步骤 4：从弹出的警告窗口中点击 `安装` 按钮以确认安装。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/confirm-click.png" /></div>

步骤 5：等待安装完成，您应该会看到 `安装` 按钮变为 `已安装`。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-installing.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-installed.png" /></div>

步骤 6：您应该可以在侧边栏中看到 Modbus 节点。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-nodes.png" /></div>

## 如何在 reTerminal DM 上使用 Modbus 节点

### 前置条件

#### 硬件

* 1 个 USB 转 RS485/RS232 转接器
* 6 根电缆
* 1 个 reTerminal DM
* 1 台主机电脑

#### 软件

* 在主机电脑上安装 MODBUS 通信 GUI 工具，例如 [`ModbusMechanic`](https://github.com/SciFiDryer/ModbusMechanic)。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/ModbusMechanic.png" /></div>

#### 准备工作

步骤 1：请按照下图连接硬件。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/rs485.png" /></div>

步骤 2：如果您想按照以下步骤操作，请安装 [`ModbusMechanic`](https://github.com/SciFiDryer/ModbusMechanic)。

步骤 2-1：下载 [`ModbusMechanic release`](https://github.com/SciFiDryer/ModbusMechanic/releases/download/v2.7/ModbusMechanic.v2.7.zip) 的发布文件。

:::note

在我们准备此文档时，`ModbusMechanic` 的最新版本是 v2.7。

:::

步骤 2-2：解压发布文件，并在 Linux 中使用以下命令运行 Java 可执行文件 `ModbusMechanic.jar`：

```sh
java -jar ModbusMechanic.jar
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/ModbusMechanic.png" /></div>

步骤 2-3：请按照下图配置 `ModbusMechanic` 的 `串口设置`。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/ModbusMechanic-config.png" /></div>

步骤 3：设置 `从机模拟器`

步骤 3-1：从 `ModbusMechanic` 工具中打开 `从机模拟器`。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/slave-sim.png" /></div>

步骤 3-2：在弹出的窗口中选择 `RTU`。

步骤 3-4-2：输入 `1` 作为 `寄存器编号`。

步骤 3-4-3：选择 `U int 16` 作为 `数据类型`。

步骤 3-4-4：输入 `120` 作为 `值`。

步骤 3-4-5：勾选 `字节交换`。

步骤 3-4-6：点击 `添加` 以确认。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/slave-sim-settings.png" /></div>

步骤 3-5：您应该看到类似下图的设置。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/add-slave-input-data.png" /></div>

步骤 3-6：重复步骤 4-4，添加另外两个寄存器，如下图所示，其中 `寄存器 2` 的值为 `12`，`寄存器 3` 的值为 `1`。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/slave-sim-sample-setting.png" /></div>

#### 编辑流程

步骤 1：将 `Modbus Read` 拖到 `流程编辑器` 面板。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/drag-modbus-read.png" /></div>

步骤 2：配置 Modbus 服务器。

步骤 2-1：双击 `Modbus Read` 打开 `节点编辑器面板`。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-read-node-editor.png" /></div>

步骤 2-2：点击 `铅笔` 图标以打开服务器配置选项。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-server-config-button.png" /></div>

当您点击 `铅笔` 图标后，您应该会看到 `添加新的 modbus-client 配置节点` 的配置面板。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-client-config.png" /></div>

步骤 2-3：请按照以下步骤仔细配置 Modbus 端口，如下图所示。

步骤 2-3-1：从下拉列表中将类型设置为 Serial Expert。

步骤 2-3-2：选择串口 `/dev/ttyCH343USB1`。

步骤 2-3-3：按照下图所示配置串口选项。

步骤 2-3-4：按照下图所示配置额外的 Modbus 服务器端口选项。

步骤 2-3-5：点击 `添加` 或 `更新` 以应用更改。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/config-modbus.png" /></div>

步骤 3：按照下图所示配置 Modbus-Read 节点并点击 `完成`。

:::note

以下步骤仅为示例步骤，您可以根据自己的情况更改配置。

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/config-modbus-read.png" /></div>

步骤 4：找到并拖出 `调试节点` 和 `Modbus 响应节点`，并像下图所示将节点连接在一起。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-responese.gif" /></div>

#### 最终结果

恭喜您，您已经成功体验并学习了如何使用 reTerminal DM 和 Node-RED 配合 Modbus，现在您的最终结果应该类似于下图所示。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/final-results.png" /></div>

您可以复制以下 JSON 代码以导入节点。

```json
[
    {
        "id": "0692ee641d6fffbc",
        "type": "tab",
        "label": "Flow 1",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "d16d0d962267f762",
        "type": "modbus-client",
        "name": "",
        "clienttype": "serial",
        "bufferCommands": true,
        "stateLogEnabled": false,
        "queueLogEnabled": false,
        "failureLogEnabled": true,
        "tcpHost": "127.0.0.1",
        "tcpPort": "502",
        "tcpType": "DEFAULT",
        "serialPort": "/dev/ttyACM1",
        "serialType": "RTU",
        "serialBaudrate": "9600",
        "serialDatabits": "8",
        "serialStopbits": "1",
        "serialParity": "none",
        "serialConnectionDelay": "100",
        "serialAsciiResponseStartDelimiter": "0x3A",
        "unit_id": "1",
        "commandDelay": "1",
        "clientTimeout": "1000",
        "reconnectOnTimeout": true,
        "reconnectTimeout": "2000",
        "parallelUnitIdsAllowed": true,
        "showWarnings": true,
        "showLogs": true
    },
    {
        "id": "aef2687aed916539",
        "type": "modbus-read",
        "z": "0692ee641d6fffbc",
        "name": "",
        "topic": "1",
        "showStatusActivities": true,
        "logIOActivities": false,
        "showErrors": true,
        "showWarnings": true,
        "unitid": "1",
        "dataType": "InputRegister",
        "adr": "1",
        "quantity": "3",
        "rate": "500",
        "rateUnit": "ms",
        "delayOnStart": false,
        "startDelayTime": "",
        "server": "d16d0d962267f762",
        "useIOFile": false,
        "ioFile": "",
        "useIOForPayload": false,
        "emptyMsgOnFail": true,
        "x": 250,
        "y": 300,
        "wires": [
            [
                "c17ac94368fd6df1"
            ],
            [
                "409e4a77818587d8"
            ]
        ]
    },
    {
        "id": "c17ac94368fd6df1",
        "type": "debug",
        "z": "0692ee641d6fffbc",
        "name": "debug 1",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 560,
        "y": 240,
        "wires": []
    },
    {
        "id": "409e4a77818587d8",
        "type": "modbus-response",
        "z": "0692ee641d6fffbc",
        "name": "",
        "registerShowMax": 20,
        "x": 530,
        "y": 380,
        "wires": []
    }
]
``` 

# 在 reTerminal DM 上探索更多节点与 Node-RED

* [reTerminal DM MQTT 与 Node-RED](/reTerminal-DM-Node-Red-mqtt)
* [reTerminal DM CAN BUS 与 Node-RED](/reTerminal-DM-Node-Red-canbus)
* 

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>