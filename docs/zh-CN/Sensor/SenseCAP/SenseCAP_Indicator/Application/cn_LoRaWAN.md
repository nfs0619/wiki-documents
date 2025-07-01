---
description: 预览 SenseCAP Indicator 的 LoRaWAN 功能
title: LoRaWAN 终端节点 - SenseCAP Indicator
keywords:
- 指示器
- 触摸
- 屏幕
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/lorawan_landing_page.png
slug: /cn/SenseCAP_Indicator_Application_LoRaWAN
last_update:
  date: 05/15/2025
  author: Spencer
toc_max_heading_level: 4
sidebar_position: 4
tags:
  - 设备
categories:
  - SenseCAP
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/lorawan_landing_page.png"/>
</div>

## 实操演示

在本节中，我们将通过实际演示深入了解 SenseCAP Indicator 的基本 LoRaWAN（*Class C* 和 *OTAA*）功能。整个过程分为三个主要步骤：

1. [获取固件](#flash_firmware)：根据需要定制并安装固件。
2. [注册设备](#HEAD_register_device)：将您的设备添加到 LoRaWAN 网络服务器。
3. [配置 LoRaWAN 凭据](#configure_credentials)：在 SenseCAP Indicator 上输入必要的网络详细信息。

在开始之前，让我们先了解一下 LoRaWAN 的背景知识。

## LoRaWAN

LoRaWAN 是一种低功耗广域（LPWA）网络协议，用于在大范围或网络内将电池供电的设备无线连接到互联网。它是 LoRa 无线系统的一部分，运行在免许可频谱中，支持长距离通信但带宽有限。其特点包括长距离通信（可达 10 英里）、长电池寿命（可达 10 年）、低成本和低功耗，数据负载大小根据数据不同范围在 51 到 241 字节之间[^1]。

[^1]: [LoRaWAN 网关与节点的简要介绍](https://www.seeedstudio.com/blog/2021/04/27/a-gentle-introduction-to-lorawan-gateways-nodes/)

<div style={{ textAlign: 'center' }}>

<img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/3.png" alt="LoRaWAN 框架" />
<div style={{ marginTop: '-8px' }}><em>LoRaWAN 网络框架</em></div>

</div>  

## 高级感知系统

Seeed Studio 的“高级感知系统”是一种 [物联网解决方案](/SenseCAP_introduction)，提供全面的传感、网络、边缘计算工具和云服务，旨在增强各行业的环境感知能力。该系统配备了多种模块和设备[^2]，充当数字化的“眼睛和耳朵”，促进对现实世界的变革性理解。

<div style={{ textAlign: 'center' }}>

<img class='border-radius: 10px;' width={680} src="https://www.seeedstudio.com/blog/wp-content/uploads/2023/03/Seeed-Studio-Advanced-Perception-System-2048x1150.png" alt="高级感知系统" />
<div style={{ marginTop: '-8px' }}><em>高级感知系统层级</em></div>
<br/>
</div>

SenseCAP 团队主要专注于传感器和网络组件，致力于提供高质量和定制化的行业解决方案。他们的工作成果包括创新的 [智慧乡村解决方案](https://www.seeedstudio.com/smart-village)，因其实用性和前瞻性设计而备受赞誉。

在 Helium 网络领域，该团队的贡献尤为显著。像 SenseCAP M1、M2 和 M4 这样的设备不仅是高性能的 Helium 热点，还在帮助用户赚取 HNT 加密货币的同时，构建去中心化的无线 LoRaWAN® 网络基础设施。SenseCAP M4 Square 因其能够运行多个 Web 3.0 应用程序而脱颖而出，从而简化了复杂多应用系统的部署[^3]。

凭借深厚的专业知识和与多样化客户群的持续互动，SenseCAP 团队战略性地决定将 LoRa 功能集成到 SenseCAP Indicator 中。

[^2]: [SenseCAP 产品 - Bazaar](https://www.seeedstudio.com/SenseCAP-c-1825.html)
[^3]: [SenseCAP MX](https://www.sensecapmx.com/)

让我们更深入地了解 [SenseCAP Indicator](https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html) 的 LoRaWAN 功能。

## 概览

| 功能                              | 详情                                                         |
|:---:|:---:|
| 无线收发器                        | SX1262                                                      |
| 支持的类别                        | Class A/B/C                                                 |
| 支持的频段                        | AS923, AU915, CN779, EU433, EU868, KR920, IN865, US915, RU864, US915 |
| LoRaWAN Mac 版本              | 1.0.4/1.1.0                                                 |
| 终端设备 LoRaWAN 协议栈采用    | [LoRaMac-node](https://github.com/Lora-net/LoRaMac-node/releases/tag/v4.7.0)     |
| 文档                              | [LoRaMac 文档](http://stackforce.github.io/LoRaMac-doc/) |

<!-- |区域参数|RP002-1.0.3| -->

## 第一步：获取固件 {#flash_firmware}

### 1.1 下载固件：

首先，从 GitHub Release 页面下载适用于 SenseCAP Indicator 的 LoRaWAN 固件 `indicator_lorawan.bin`。

<div class="github_container" style={{textAlign: 'center'}}>

<a class="github_item" href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases">

<strong><span><font color={'FFFFFF'} size={"4"}> 下载固件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>

</a>

</div>
<br />

:::info 对自定义固件感兴趣？
[ESP-IDF 编程指南](https://docs.espressif.com/projects/esp-idf/en/release-v5.1/esp32/get-started/index.html#ide)(v5.1) 提供了构建您自己的固件的相关信息。您可以访问并修改[源代码](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32)以满足您的具体需求。
:::



### 1.2 烧录固件：

要将固件烧录到 SenseCAP 指示器上，请先下载固件，然后使用 esptool（或如果您有 ESP-IDF 环境，则使用 `esptool.py`）进行烧录（有关详细指南，请参考[说明](/SenseCAP_Indicator_Application_LoRaWAN)）。

**在 Windows 上使用 esptool 烧录固件：**

在 Windows 命令提示符中使用以下命令烧录固件：

```jsx
<tool_path>/esptool.exe --chip esp32s3 --baud 921600 write_flash -z 0x0 <firmware_path>/indicator_lorawan.bin 
```

例如，如果您的 `flash_bin` 文件夹位于 `D:` 驱动器中，并包含以下结构：

```sh
flash_bin/
├── esptool.exe
└── indicator_lorawan.bin
```

您的命令将如下所示：

```sh
./esptool.exe --chip esp32s3 --baud 921600 write_flash -z 0x0 ./indicator_lorawan.bin
```

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/esptool_nonport_flash.png.png"/>
</div>

如果您有多个端口并需要指定一个端口，请使用 `-p` 或 `--port` 参数：

```sh
./esptool.exe --chip esp32s3 -p COM20 --baud 921600 write_flash -z 0x0 ./indicator_lorawan.bin
```

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/esptool_port_flash.png"/>
</div>

:::note
Mac 用户应将 `./esptool.exe` 替换为 `./esptool`。

如果在烧录过程中遇到问题，可以尝试降低 **波特率** 或参考[这些故障排除步骤](https://askubuntu.com/questions/1411463/dev-ttyusb0-file-disappears-from-dev-directory-while-using-device)。
:::

固件成功烧录后，从后续步骤中从 LoRaWAN 网络服务器检索设备 EUI 和 APPkey 等必要参数。

## 步骤 2. 在 LoRaWAN 网络服务器上注册设备 {#HEAD_register_device}

> 在开始之前，请确保您的设备位于 LoRaWAN 网络的覆盖范围内。

本节将指导您如何连接到本地 LoRaWAN 网络服务器。我们将以 [ChirpStack](https://www.chirpstack.io/) 平台为例，并使用 [SenseCAP M2 多平台 LoRaWAN 室内网关 (EU868)](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)。*如果您使用的是其他网络服务器，过程类似*；您需要收集激活所需的关键信息：

- OTAA（空中激活）：
  - DevEUI
  - AppKey
  - JoinEUI/AppEUI（需要 Mac 版本 1.1.0）
- ABP（个性化激活）： 
  - DevEUI
  - DevAddr
  - AppSKey
  - NwkSKey

<!-- lorawan --eui c53364863bca6cad --app_key 220a52c272e2b1151ef5b626c0dab025 -->
<!-- lorawan --eui 97752c0092d12add --apps_key 22222222222222222222222222222222 --nwks_key 11111111111111111111111111111111 --dev_addr 33333333 -->
### 2.1 配置 SenseCAP LoRaWAN 网关

要配置您的 SenseCAP 网关，请访问其 Web 界面，在那里您将开始设置 ChirpStack 网络服务器。以下是显示配置页面的视觉指南：

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/gateway_config.png"/>
</div>

调整设置后，点击 `Save & Apply` 保存更改。然后，您可以使用提供的 URL（例如 `http://192.168.1.102:8080`）访问 ChirpStack 界面。

使用以下默认凭据登录：

- **用户名：** `admin`
- **密码：** `admin`

有关更多详细信息和高级配置选项，请访问 [SenseCAP M2 网关 LNS 配置指南](https://wiki.seeedstudio.com/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_MP_Gateway_LNS_Configuration/)。


### 2.2 配置本地网络服务器 (ChirpStack)
有关 ChirpStack 文档的详细功能和 LoRaWAN 版本支持，请参考：[ChirpStack 网络服务器文档](https://www.chirpstack.io/network-server/features/lorawan-versions/)。

以下是使用 ChirpStack 配置本地网络服务器的步骤：

1. **[创建设备配置文件](#create_dev_profile)：** 此步骤标准化设备的设置和功能。确保设备能够在网络中有效通信。
2. **[添加应用程序](#add_appication)：** 此步骤有助于组织和管理设备。应用程序用于将具有相同用途或特性的设备分组，使管理更加简单。
3. **[在应用程序下注册设备](#register_device)：** 此步骤将设备与您在应用程序中建立的特定设置和数据处理规则链接起来。这是确保设备在网络中正常运行的关键步骤。

#### 2.2.1 创建设备配置文件 {#create_dev_profile}

要在 `Device profiles` 中创建新的设备配置文件，请转到侧边栏中的 'Tenant'，然后选择 'Device profiles'。

<div align="center">
  <img class='border-radius: 10px;' width={220} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/sidebar_device_profile.png"/>
</div>

创建设备配置文件是确保设备能够通过 LoRaWAN 网络有效通信的重要步骤。这涉及选择影响设备性能和兼容性的技术参数。以下是设置方法：

- **MAC 版本：** 指设备使用的媒体访问控制（MAC）协议版本。MAC 协议对于管理设备如何访问网络至关重要。您可以选择 v1.0.4 或 v1.1.0 版本。
- **区域参数修订：** 根据设备的地理位置需要配置的特定参数。这些参数确保设备符合当地法规和网络规范。

**选择 MAC 版本**

您选择的 MAC 版本至关重要，因为它决定了您的设备所需的凭证集：

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value='MAC Version 1.0.4'>

  您需要以下凭证：

  - **DevEUI:** 这是分配给设备的唯一标识符，确保全球唯一性。
  - **AppKey:** 用于加密和保护设备通信的密钥。

</TabItem>

<TabItem value='MAC Version 1.1.0'>

  您的设备将需要以下凭证：

  - **DevEUI:** 设备的全球唯一标识符。
  - **AppEUI/JoinEUI:** 设备连接到的应用程序的唯一标识符。
  - **AppKey:** 用于保护通信的加密密钥。

</TabItem>
</Tabs>


**选择区域参数版本**

在为 LoRaWAN 网络设置设备配置文件时，选择的区域参数（RP）版本对于确保设备符合特定区域标准和规范至关重要。



**当前设置**

目前，我们正在设置一个 MAC 版本为 `1.0.4` 和区域参数版本为 `RP002-1.0.2` 的设备配置文件。

:::info 区域参数版本
在 LoRaWAN 网络上配置设备配置文件时，`RP002-1.0.2` 是当前需求的合适选择。根据 [代码](https://github.com/Lora-net/LoRaMac-node/blob/v4.7.0/src/mac/region/Region.h) 和 `v4.7.0` LoRaMac-node 规范，推荐使用 `RP002-1.0.3`。
:::

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_device_profile_check.png"/>
</div>

正确理解和配置必要的元素是确保您的设备能够在 LoRaWAN 网络上有效且安全通信的关键。

要使用 **Class C** 设备类型，必须在设备配置文件中专门启用此功能。

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_104_classC_enable.png"/>
</div>


**解码器功能**

确实，为了使设备传输的有效负载数据具有意义并可解释，必须在设备配置文件中实现解码器。此解码器将把原始二进制数据转换为可读格式，使您能够有效地理解和利用设备发送的信息。

<details>

<summary>点击复制 Decoder.js</summary>

解码器来自 [GitHub 仓库](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/main/examples/indicator_lorawan/docs/ChirpStackV4_Decoder.js)

```js
function decodeUplink(input) {
    var decoded = {
        data:[]
    };
    var type;
    var floatNumber;

    // 检查输入字节长度是否为5的倍数
    if ( (input.bytes.length  % 5) !== 0) {
        decoded.data.push({
            type: "error",
            Value: -1
        });

        return { data: decoded }
    }

    const arrayBuffer = new ArrayBuffer(4);
    const dataView = new DataView(arrayBuffer);
    
    for(let j =0 ; j < input.bytes.length; j+=5) {
        var num =0;
        switch ( input.bytes[j]) {
            case 0:
                type = '温度';
                num  = 2;
                break;
            case 1:
                type = '湿度';
                num  = 2;
                break;
            case 2:
                type = '二氧化碳';
                num  = 0;
                break;
            case 3:
                type = 'TVOC';
                num  = 0;
                break;
            case 4:
                type = '光照';
                num  = 0;
                break;
            default:
                type = '未知';
                break;
        }
        for (let i = 0; i < 4; i++) {
            dataView.setUint8(i, input.bytes[j+i+1]);
        }
        floatNumber = dataView.getFloat32(0, true); 
        decoded.data.push({
            type:  type,
            Value: floatNumber.toFixed(num)
        });
    }
    return { data: decoded }
}

function encodeDownlink(input) {
  return {
    bytes: [225, 230, 255, 0]
  };
}
```

</details>

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_add_decoder.png"/>
</div>

创建设备配置文件后，下一步是添加一个应用程序。

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_104_profile.png"/>
</div>


#### 2.2.2 添加应用程序 {#add_appication}

在您的 LoRaWAN 网络服务器中创建并配置一个应用程序以管理您的设备。

要创建新的应用程序，请转到侧边栏中的“Tenant”，然后选择“Application”。

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_app_create.png"/>
</div>

提交时，设置名称并可选地提供描述。

#### 2.2.3 在应用程序下注册设备 {#register_device}

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_add_device.png"/>
</div>

在您的应用程序中按下 `Add device` 按钮。

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_app_device_add.png"/>
</div>

要添加设备，您需要指定一个 `Name` 并提供一个 `Device EUI`，以及您之前创建的 `Device Profile`。

您可以选择自动生成设备 EUI 或使用设备的现有 EUI。

在此过程中，我们将使用自动生成的设备 EUI。提交这些详细信息后，设备将被添加到应用程序中，并自动重定向到 OTAA 密钥部分。

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_app_otaa.png"/>
</div>

点击按钮以生成一个随机的 **Application Key (AppKey)**，或者选择使用已有的 AppKey。确保您拥有所有必要的凭证和参数。对于 *MAC Version 1.0.4*，所需的凭证包括：

- **DevEUI (示例)：** `5d61e4648dc926e2`
- **AppKey (示例)：** `ec2b966c2c4bbe94a6ef79d0479db0e5`

基于这些信息，我们可以使用以下命令：

```sh
lorawan --eui 5d61e4648dc926e2 --app_key ec2b966c2c4bbe94a6ef79d0479db0e5
```

有关其他命令和帮助，请参考 [console command](#commands) 部分。

## 第 3 步 配置 SenseCAP 指示器以加入网络 {#configure_credentials}

要与您的 SenseCAP 指示器建立连接，您可以使用任何 **串口工具**（如 [Minicom](https://wiki.emacinc.com/wiki/Getting_Started_With_Minicom)、[Putty](https://www.putty.org/) 等），或者直接使用 `idf monitor`（请参考 [ESP-IDF 文档中提供的详细说明](https://docs.espressif.com/projects/esp-idf/en/v5.1.2/esp32/api-guides/tools/idf-monitor.html)）：

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/esp_idf_monitor.png"/>
</div>

:::caution
确保您的设备在此步骤之前尚未启动 LoRaWAN 连接。
如果已经启动，您需要先停止它。
:::

在控制台中输入包含凭证的命令。

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/indicator_otaa_config.png"/>
</div>

现在，您应该能够在 SenseCAP 指示器上查看密钥。如果需要，可以对配置进行必要的更新。

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/bin_press_join.png"/>
</div>

当您按下 *Join* 按钮时，您可以直接通过 *控制台* 观察连接过程，从而监控并验证连接是否成功建立。

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/bin_console.png"/>
</div>

## 第 4 步 **发送和接收消息** {#uplink_and_downlink}

在本节中，我们将引导您完成监控设备与 LoRaWAN 网络之间的上行和下行通信的过程。[^4]

[^4]: [深入了解：使用 LoRaWAN® 发送和接收消息](https://lora-developers.semtech.com/documentation/tech-papers-and-guides/sending-and-receiving-messages-with-lorawan/sending-and-receiving-messages/)

### 上行消息

上行消息是 LoRaWAN 网络中的基础功能，使像 SenseCAP 指示器这样的设备能够向网络服务器传输数据。这些消息对于报告 *传感器数据*、设备状态和其他遥测信息至关重要。

<details>

<summary>上行消息的概念</summary>

**LoRaWAN 中的上行：**

在 LoRaWAN 网络中，上行消息是由终端设备（如 SenseCAP 指示器）发起并通过网关发送到网络服务器的任何通信。这些消息通常用于传输传感器读数或设备状态。

1. **数据采集**：SenseCAP 指示器从其传感器或内部流程中采集数据。这可能包括环境读数、设备状态或其他相关指标。

2. **数据打包**：采集到的数据会被打包成适合传输的 *预定义格式*。这可能涉及对数据进行编码，以优化有效载荷大小并确保高效传输。

3. **发送消息**：设备通过 LoRaWAN 网络发送上行消息。此传输通常基于特定的时间间隔（例如，每 5 分钟）或由某些事件触发（例如，阈值超出）。

**在网络服务器上的接收和处理：**

一旦上行消息由 SenseCAP 指示器发送，它会通过网关被 LoRaWAN 网络服务器接收。网络服务器随后按以下步骤处理消息：

1. **消息接收**：网络服务器从网关接收上行消息并对其进行解码。

2. **数据处理和分析**：解码后，服务器会处理数据，这可能包括记录数据、触发警报或进行进一步分析。数据可能包括温度读数、湿度水平或其他传感器数据，具体取决于设备的功能。

3. **响应操作**：根据接收到的数据，网络服务器可能采取行动，例如向设备发送下行消息以提供指令或更新。此响应可以基于预定义规则自动化，也可以由监控系统的用户手动触发。

</details>

#### 上行消息：上传传感器数据

在使用 SenseCAP 指示器的 LoRaWAN 演示中，上行消息可能包含简单的传感器数据，例如温度或湿度读数。

一旦 *加入过程* 成功，您可以在 `LoRaWAN frames` 部分查看日志，以监控数据传输并详细了解设备与网络的通信情况。

:::tip
导航到您创建的应用程序中设备的 *LoRaWAN frames* 部分，找到您的特定设备。在这里，您可以监控和管理设备传输和接收的数据包，确保设备在 LoRaWAN 网络中的通信和操作顺畅。
:::

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_frame.png"/>
</div>

现在，启用解码器功能后，您应该能够在事件部分看到解析后的数据（可以通过按下 `+up` 按钮显示）。这将帮助您更有效地理解和分析来自设备的传入数据。

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_event_view.png"/>
</div>

### 下行消息

在 LoRaWAN 网络中，下行过程对于双向通信至关重要，它允许从网络服务器向 SenseCAP Indicator 设备传输数据和命令。这种功能在执行各种操作命令、配置更改或固件更新时尤为有用。

<details>

<summary>下行消息的概念</summary>

**LoRaWAN 中的下行：**

在 LoRaWAN 演示环境中，下行消息用于控制 SenseCAP Indicator 上的一个动画灯泡，用户可以通过下行消息将其打开或关闭。然而，这种功能可以扩展为执行特定命令或配置。

**发送下行消息**

1. **启动下行消息**：要发送下行消息，通常需要使用网络服务器的界面。导航到可以为设备调度下行消息的部分。

2. **消息格式**：确保消息的格式符合 SenseCAP Indicator 的要求。这可能包括特定的有效载荷格式或编码方法，具体取决于下行消息的用途。

3. **调度消息**：在撰写消息后，将其调度为在适当的时间发送。时间安排可能取决于各种因素，例如设备的数据传输计划或其预期的活动时间。

**设备接收和处理下行消息**

一旦下行消息由 LoRaWAN 网络服务器传输，SenseCAP Indicator 将在其下一个接收窗口中接收消息。设备处理消息的过程如下：

1. **消息接收**：SenseCAP Indicator 在预定义的接收窗口期间监听下行消息。确保设备在这些时间段处于接收状态至关重要。

2. **处理消息**：收到下行消息后，设备将处理其内容。这可能涉及更改设置、更新参数或触发某些操作，例如切换继电器或调整传感器阈值[^5]。

[^5]: [TxData Function - GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/11bf6165f0e815a1dc6b83be253972ac320ecdd5/examples/indicator_lorawan/main/lorawan/indicator_lorawan.c#L445)

3. **反馈和确认**：如果下行消息需要确认（例如确认下行消息），设备将在其下一次上行消息中发送确认。

</details>

#### 演示消息：控制灯泡

在本次演示中，我们将展示如何通过 LoRaWAN 网络使用下行消息控制 Indicator 上的模拟灯泡。此示例展示了下行通信在远程设备管理中的实际应用。

**1. 场景概述：**

- 在本次演示中，SenseCAP Indicator 配置了一个虚拟灯泡，代表一个简单的可控设备。
- 灯泡有两个状态：“开”和“关”，通过从 LoRaWAN 网络服务器发送的下行消息进行控制。

**2. 准备下行消息：**

- 为了控制灯泡，为下行消息定义了一个特定的有效载荷结构。为了简单起见，假设：
  - 发送有效载荷 `0001` 将灯泡打开。
  - 发送有效载荷 `0000` 将灯泡关闭。

- 这些有效载荷以一种 SenseCAP Indicator 能够理解并执行的格式进行编码[^6]。

[^6]: [lorawan_rx_data_handle function - GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/11bf6165f0e815a1dc6b83be253972ac320ecdd5/examples/indicator_lorawan/main/lorawan/indicator_lorawan.c#L591C33-L591C33)

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/bulb_payload.png"/>
</div>

**3. 发送下行消息：**

- 通过网络服务器的界面，可以调度具有相应有效载荷的下行消息。
- 消息随后被排队，并在 SenseCAP Indicator 的下一个可用接收窗口中发送（因此会有延迟）。

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/queue_packet.png"/>
</div>

**4. 接收下行消息：**

为了打开灯泡，可以调度一个有效载荷为 `0001` 的下行消息。要关闭灯泡，则使用有效载荷 `0000`。例如，我已经排队了一个下行消息 `0001`，现在我想发送一个下行消息 `0000` 来关闭灯泡。

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/console_bulb.png"/>
</div>

可以看到灯泡已被**关闭**。

## 等待探索的功能 {#function}

在 SenseCAP Indicator 中，有许多功能等待探索。在本次演示中，我们展示了上传传感器数据以及使用下行消息控制 SenseCAP Indicator 的虚拟灯泡。

**关键功能点：**

**1. 命令接收与执行：**

- SenseCAP Indicator 高效接收下行消息。
- 它处理这些消息，解释命令，例如打开或关闭虚拟灯泡。
- 灯泡的状态随之改变，提供了设备控制的真实模拟。

**2. 确认与验证：**

- 在执行命令后，SenseCAP Indicator 会发送一个上行消息作为确认。
- 通过网络服务器的界面可以跟踪此确认，确保命令已被有效接收并执行。

**3. 实际应用：**

- 这个简单的演示突出了 LoRaWAN 下行消息在操作 IoT 设备中的实用性。
- 它展示了 IoT 生态系统的一个关键方面：远程指挥和管理设备的能力，体现了其实际价值。

这个演示只是一个开始。SenseCAP 指示器为各种物联网应用提供了一个多功能的平台，从环境监测到智能自动化。通过深入了解其功能，您可以释放这一强大工具的全部潜力，为您的物联网项目开辟创新解决方案和增强控制的道路。我们鼓励您进行实验，探索 SenseCAP 指示器如何提升您的物联网工作。

## 控制台手册页面 {#commands}

<!-- 查看 [indicator_lorawan - README](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/main/examples/indicator_lorawan/README.md)): -->

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/indicator_cmd_all.png"/>
</div>

以下是设置 LoRaWAN 网络信息的终端命令介绍，风格类似于手册条目：

### **lorawan**
此命令用于配置设备的 LoRaWAN 网络信息。它允许您设置 OTAA（空中激活）和 ABP（个性化激活）方法所需的各种参数。

##### 用法：
```sh
lorawan [--eui=] [--join_eui=] [--app_key=] [--dev_addr=] [--apps_key=] [--nwks_key=]
```

##### 选项：
- `--eui=`: 设置设备的 EUI（扩展唯一标识符）。需要 8 个十六进制数字，按 MSB（最高有效位）优先顺序。
  
- `--join_eui=`: 设置 JOIN EUI（以前称为 APP EUI），这是 OTAA 中的应用标识符。需要 8 个十六进制数字，按 MSB 优先顺序。

- `--app_key=`: 设置 APP KEY，这是 OTAA 加入过程中使用的加密密钥。需要 16 个十六进制数字，按 MSB 优先顺序。

- `--dev_addr=`: 设置 ABP 的设备地址。这是一个 4 个十六进制数字的标识符，按 MSB 优先顺序。

- `--apps_key=`: 设置 ABP 的 APPS KEY，用于加密应用负载。需要 16 个十六进制数字，按 MSB 优先顺序。

- `--nwks_key=`: 设置 ABP 的 NWKS KEY，用于加密网络负载和设备认证。需要 16 个十六进制数字，按 MSB 优先顺序。

## 常见问题解答

<details>
<summary>SenseCAP 指示器可以作为我的 LoRaWAN 网关吗？</summary>

不，SenseCAP 指示器根据 SX1262 LoRa 收发器的设计，并不能作为 LoRaWAN 网关。它主要是 LoRaWAN 网络架构中的终端设备。LoRaWAN 网关通常具有不同的硬件和软件功能，旨在将多个终端设备（如 SenseCAP 指示器）连接到网络服务器。如果您需要 LoRaWAN 网关，建议选择专门为此目的设计的设备。
</details>

<details>
<summary>为什么网络服务器没有发送 joinAccept？</summary>

**注意：** 以下几种情况可能导致设备未能从网络服务器接收到 `joinAccept`：

- **频率更改：** 如果您更改了频率设置，但在网络服务器上保留了相同的设备凭据，设备可能无法正确同步。

- **设备闪存被清除：** 如果您清除了设备的闪存，但继续使用相同的凭据，这可能导致同步问题。

在这两种情况下，确保 OTAA（空中激活）设备的随机数（一次性使用的数字）保持同步至关重要。为了解决此问题，请使用网络服务器上的 `Flush OTAA device nonces` 功能。此操作将重置随机数并帮助重新建立正确的连接。

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_flush_nonces.png"/>
</div>
</details>

<details>
<summary>发送下行消息的 FPort 是哪个？</summary>

在我们当前的 LoRaWAN 演示设置中，没有预定义的端口用于发送下行消息。演示代码设计为灵活的，可以根据您的具体需求进行调整。

如果您需要在特定端口上以特定方式处理消息，可以选择相应地修改代码。这种定制允许根据不同端口对下行消息进行定制化处理，从而更好地控制设备如何解释和响应这些通信。
</details>

<details>
<summary>如何使用 MAC 版本 1.1.0？</summary>

要使用 LoRaWAN MAC 版本 1.1.0 的功能，需要适当配置加密设置。您可以通过使用 `idf.py menuconfig` 命令启用 `USE LRWAN_1_1_X_CRYPTO` 选项来完成此操作。

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/menuconfig_110.png"/>
</div>

LoRaWAN 版本 `1.1.0` 的实现需要特定的加密算法以增强安全性。通过设置此选项，您可以确保您的设备与此版本引入的增强安全功能和协议兼容。
</details>

## ODM 服务

Seeed Studio 提供全面的一站式 ODM 服务，以满足多样化需求的快速定制和扩展要求。如果您希望通过专门的功能定制您的项目，或者需要高效地扩大运营规模，请联系我们。有关咨询和更详细的信息，请发送邮件至 iot@seeed.cc。我们将帮助您将独特的想法变为现实。

## 技术支持

**需要帮助解决您的 SenseCAP 指示器问题？我们随时为您提供支持！**

如果您在遵循本教程时遇到任何问题或有任何疑问，请随时联系我们的技术支持团队。我们始终乐意为您提供帮助！

访问我们的 [Seeed 官方 Discord 频道](https://discord.gg/kpY74apCWj) 提问，或者在 [GitHub discussions](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions) 上分享您的想法！