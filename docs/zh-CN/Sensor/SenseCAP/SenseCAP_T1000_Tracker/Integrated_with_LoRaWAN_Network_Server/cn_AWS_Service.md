---
description: 将 SenseCAP T1000 追踪器连接到 AWS
title: AWS 云服务
keywords:
- 追踪器
- AWS
image: https://files.seeedstudio.com/wiki/SenseCAP/Tracker/t1000.webp
slug: /cn/SenseCAP_T1000_Tracker_AWS
last_update:
  date: 05/15/2025
  author: Leo
---

# 使用 AWS 云服务连接 SenseCAP T1000 追踪器

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

[AWS IoT](https://docs.aws.amazon.com/iot/latest/developerguide/iot-gs.html) 提供了将您的 IoT 设备连接到其他设备和 AWS 云服务的云服务。AWS IoT 提供设备软件，帮助您将 IoT 设备集成到基于 AWS IoT 的解决方案中。如果您的设备可以连接到 AWS IoT，AWS IoT 可以将它们连接到 AWS 提供的云服务。

登录 [AWS IoT 控制台](https://console.aws.amazon.com/iot/home)

:::info
如果您没有 AWS 账户，请点击 [这里](https://portal.aws.amazon.com/billing/signup) 创建一个账户。
:::

## 添加网关

导航到 `Internet of Things`，然后点击 `IoT Core`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/iot=core.png" alt="pir" width={800} height="auto" /></p>

在左侧菜单中选择 `LPWAN devices` → `Gateways`，点击 `Add gateway`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-gateway.png" alt="pir" width={800} height="auto" /></p>

`Gateway's EUI`：您的网关的 EUI，可以在设备标签上找到。<br/>
`Frequency`：网关的频段。<br/>
`Name`：为您的网关命名（可选）。<br/>
`SubBand`：您还可以选择指定 LoRaWAN 配置数据，例如您希望使用的子频段和可以控制流量的过滤器。有关更多信息，请参阅 [使用 AWS IoT Core 配置无线资源位置](https://docs.aws.amazon.com/iot/latest/developerguide/connect-iot-lorawan-configure-location.html)。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/gateway-eui.png" alt="pir" width={800} height="auto" /></p>

## 配置您的网关

### 网关证书

为了验证您的网关，使其能够安全地与 AWS IoT 通信，您的 LoRaWAN 网关必须向 AWS IoT Core for LoRaWAN 提交私钥和证书。

点击 `Create certificate`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create-cer.png" alt="pir" width={800} height="auto" /></p>

下载并保存证书文件和服务器信任证书。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS6.PNG" alt="pir" width={800} height="auto" /></p>

文件夹中应该有四个文件，稍后您将使用它们来配置网关。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/files.png" alt="pir" width={800} height="auto" /></p>

### 网关权限

如果您尚未为您的账户创建 IoTWirelessGatewayCertManagerRole IAM 角色，请在继续添加网关之前创建该角色。
如果没有此角色，您的网关将无法与 AWS IoT 通信。

选择角色：`IoT Wireless Gateway Cert Manager Role`，然后提交配置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/permissions.png" alt="pir" width={800} height="auto" /></p>

复制 CUPS URL，我们将在下一步中使用它。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cups.png" alt="pir" width={800} height="auto" /></p>

### 网关配置

登录网关的 Luci 配置页面，详细信息请参考 [快速入门指南](https://files.seeedstudio.com/products/SenseCAP%20M2/Quick%20Start%20for%20SenseCAP%20M2%20Multi-Platfrom%20Gateway%20&%20Sensors.pdf)。

导航到 `LoRa` > `LoRa Network`。

`Mode`：Basic Station<br/>
`Gateway EUI`：您的网关 EUI<br/>
`Server`：CUPS Server<br/>
`URL`：我们之前复制的 CUPS URL<br/>
`Authentication Mode`：TLS Server 和 Client Authentication

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS21.PNG" alt="pir" width={800} height="auto" /></p>

复制我们之前下载的证书文件的内容（证书可以以文本形式打开）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS23.PNG" alt="pir" width={800} height="auto" /></p>

导航到网关页面，选择您添加的网关。

在网关详情页面的 LoRaWAN 特定详情部分，您将看到连接状态以及最后一次上行数据接收的日期和时间。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/gate-connected.png" alt="pir" width={800} height="auto" /></p>

## 添加配置文件

设备和服务配置文件可以定义常见的设备配置。这些配置文件描述设备共享的配置参数，使添加这些设备变得更加容易。AWS IoT Core for LoRaWAN 支持设备配置文件和服务配置文件。

### 添加设备配置文件

导航到 `Devices` > `Profiles`，点击 `Add device profile`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS11.PNG" alt="pir" width={800} height="auto" /></p>

提供一个设备配置文件名称，选择您用于设备和网关的频段 (RfRegion)，并保持其他设置为默认值。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/proflie2.png" alt="pir" width={800} height="auto" /></p>

### 添加服务配置文件

导航到 `Devices` > `Profiles`，点击 `Add service profile`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS13.PNG" alt="pir" width={800} height="auto" /></p>

建议您保持设置 `AddGWMetaData` 启用，这样您将收到每个负载的额外网关元数据，例如数据传输的 RSSI 和 SNR。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/profile4.png" alt="pir" width={800} height="auto" /></p>

### 添加目标

导航到 `Devices` > `Destination`，点击 `Add destination`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS15.PNG" alt="pir" width={800} height="auto" /></p>

在这里选择 `Publish to AWS IoT Core Message Broker` 并命名目标的 `MQTT topic`。

权限：选择一个现有的服务角色 > `IoT Wireless Gateway Cert Manager Role`

:::info
目标名称只能包含字母数字、-（连字符）和 _（下划线）字符，且不能包含空格。
:::
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS14.png" alt="pir" width={800} height="auto" /></p>

## 添加 LoRaWAN 设备

### 添加无线设备

导航到 `LPWAN devices` > `Devices`，点击 `Add wireless device`。

`Wireless device specification`：OTAAv1.0x

`DevEUI/APP EUI/APP key`：可以在 SenseCAP Mate APP 中找到，详细信息请查看 [Get_Started](https://wiki.seeedstudio.com/Get_Started_with_SenseCAP_T1000_tracker/#get-started)。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS17.PNG" alt="pir" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS20.PNG" alt="pir" width={800} height="auto" /></p>

选择您在上一步中创建的设备配置文件和目标。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/device-eui2.png" alt="pir" width={800} height="auto" /></p>

导航到设备页面并选择您之前添加的设备。

在无线设备详情页面的详细信息部分，您将看到接收到的数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS19.PNG" alt="pir" width={800} height="auto" /></p>

## 配置解码器

### 创建消息规则

导航到 `Message routing` 标签 → `Rules`，点击 `Create Rule` 按钮。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules.png" alt="pir" width={800} height="auto" /></p>

命名您的规则并提交。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules2.png" alt="pir" width={800} height="auto" /></p>

`SQL version`：2016-03-23<br/>
`SQL statement`：SELECT * FROM **"YourDestinationTopic"**

这里我们根据 [Add Destination](#add-destination) 填写 `t1000-raw`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sql.png" alt="pir" width={800} height="auto" /></p>

向下滚动到 `Rule actions` 部分，从 `Action 1` 中选择 `Lambda`，然后点击 `Create a Lambda function`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rule-action.png" alt="pir" width={800} height="auto" /></p>

`Function name`：命名您的函数。<br/>
`Runtime`：Node.js 20.x<br/>
`Architexture`：x86_64

点击 `Create function` 按钮以创建新函数。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cre-function.png" alt="pir" width={800} height="auto" /></p>

创建函数后，将进入函数的配置页面。我们稍后会配置它，因此现在返回规则页面。

点击刷新按钮并选择您之前创建的 Lambda 函数。然后点击 `Next` 进入第 4 步。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sel-function.png" alt="pir" width={800} height="auto" /></p>

检查规则的所有详细信息是否正确，然后点击 `Create` 创建规则。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules3.png" alt="pir" width={800} height="auto" /></p>

### 配置 Lambda 函数

返回到 `Message routing` 标签 → `Rules`，选择您之前创建的规则。

点击 `Lambda` 从 `Actions` 中，然后点击链接进入 Lambda 函数配置页面。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules4.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules5.png" alt="pir" width={800} height="auto" /></p>

在接下来的函数配置页面中，将 `index.mjs` 文件重命名为 `index.js`，删除所有代码并替换为 [Resource](#resource) 中的脚本，然后点击 `Deploy` 按钮。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/decod.png" alt="pir" width={800} height="auto" /></p>

:::tip 注意
根据您的设备替换 `region` 和 `device id`。
:::

配置解码器后，点击 `Configuration` → `Permissions` → `Edit`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/decod-per.png" alt="pir" width={800} height="auto" /></p>

点击底部的 `View the xxxxxxxxxxx` 角色。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/existing-role.png" alt="pir" width={800} height="auto" /></p>

点击 `Add permissions` → `Attach policies`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/policies.png" alt="pir" width={800} height="auto" /></p>

搜索 `AdministratorAccess`，勾选左侧的框，然后点击 `Add Permissions`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/policies2.png" alt="pir" width={800} height="auto" /></p>

### 检查数据

在页面 `MQTT test client` 上检查数据，输入 `#` 并点击 `Subscribe` 按钮，您将看到数据。

T1000 Tracker 的原始负载从 `t1000-raw` 发布，解码后的数据从 `tracker/measurement` 发布。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/dataview1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/dataview2.png" alt="pir" width={800} height="auto" /></p>

## 资源

[SenseCAP T1000 Tracker 解码器用于 AWS](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/AWS/SenseCAP_T1000_AWS_Decoder.js)