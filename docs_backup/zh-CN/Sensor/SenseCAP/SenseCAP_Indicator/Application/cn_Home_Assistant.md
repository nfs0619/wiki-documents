---
description: SenseCAP 指示器 - Home Assistant 应用开发
title: Home Assistant - SenseCAP 指示器
keywords:
- SenseCAP 指示器
- Home Assistant
- ESP32S3
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-ha-thumbnail.jpg
slug: /cn/SenseCAP_Indicator_Application_Home_Assistant
last_update:
  date: 05/15/2025
  author: Spencer
sidebar_position: 1
---

# SenseCAP 指示器 - Home Assistant 应用开发

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## 简介

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/PKMcutZDjDg" title="YouTube 视频播放器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<div class="button-container">
<a class="button-style" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html">
        立即购买 🖱️</a>
</div>

通过将 SenseCAP 指示器与 Home Assistant 集成，解锁智能家居的全部潜力。这种强大的组合使您能够以前所未有的轻松方式监控和控制您的环境。

在本全面指南中，学习如何使用 MQTT 无缝集成您的 SenseCAP 指示器与 Home Assistant。

在开始之前，让我们探索设置 Home Assistant 的选项。Home Assistant 可以轻松安装在两种专用硬件选项上：

:::note
当然，您可以通过 [Installation - Home Assistant (home-assistant.io)](https://www.home-assistant.io/installation/) 了解各种安装选项。
:::

<Tabs>
<TabItem value='Home Assistant Green'>

<div align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA/HA_Green.png" style={{ width: 680, height: 'auto', "border-radius": '6.66px' }}/></div>

> 经济实惠的 **[Home Assistant Green](https://www.home-assistant.io/green)** 是开始使用 Home Assistant 的最简单方式。它即插即用，并预装了 Home Assistant。

</TabItem>

<TabItem value='Home Assistant Yellow'>

<div align="center"><img width={680} src="https://www.home-assistant.io/images/yellow/home-assistant-yellow-exploded-and-labeled.png"style={{ width: 680, height: 'auto', "border-radius": '6.66px' }}/></div>

> **[Home Assistant Yellow](https://www.home-assistant.io/yellow)** 预装在定制外壳中，配备 Raspberry Pi Compute Module 4 (CM4) 和定制散热器，实现无风扇静音操作。CM4 是一个没有无线功能的版本，具有 2 GB RAM 和 16 GB eMMC 存储。预装了 Home Assistant。

</TabItem>
</Tabs>

为了最大化 Home Assistant 的功能，我们建议使用 Home Assistant OS 或 Home Assistant Supervised。这两种选项提供高级功能和更大的定制选项，使您能够根据自己的需求量身定制智能家居体验。

现在，让我们开始集成过程。按照以下三个主要步骤，让您的 SenseCAP 指示器与 Home Assistant 一起工作：

1. [安装 Home Assistant OS](#install_HA)
   1. [安装附加组件](#mqtt-addons)
   2. [设置 MQTT 集成](#mqtt-integration)
2. [构建并烧录固件](#build-flash-firmware)
3. [添加 MQTT 设备](#add-mqtt-devices)
4. [设置一个 Dashboard](#set-up-dashboard)

## 前提条件

在开始之前，请确保您已阅读 SenseCAP 指示器板的 [用户指南](/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator)，以熟悉其软件和硬件信息。

## 安装 Home Assistant OS {#install_HA}

> Home Assistant 是一个强大的开源家庭自动化平台，专注于隐私和本地控制。它提供了一个可定制且灵活的框架，可以从单一统一平台管理和自动化所有家庭设备。

使用 **Home Assistant Yellow**，您可以按照 [此处](https://www.home-assistant.io/installation/yellow) 提供的说明进行操作。此外，要在任何类型的 Raspberry Pi 或本地服务器上运行，您可以按照 [此说明](https://www.home-assistant.io/installation/) 逐步操作。

安装完成后，进入以下页面意味着您可以进入下一步。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Installed.png"/></div>

<br />

:::tip 不知道如何设置 Home Assistant？
安装 Home Assistant 后，请查看 [Onboarding Home Assistant - Home Assistant](https://www.home-assistant.io/getting-started/onboarding/) 了解详细信息。
:::

### 步骤 1：安装附加组件 {#mqtt-addons}

:::caution 需要附加组件功能
Home Assistant Yellow 配备 **Home Assistant 操作系统**，可以轻松安装附加组件。然而，**Home Assistant 容器**不支持附加组件，这意味着您需要在 Home Assistant 之外安装一个 MQTT broker 应用程序。有关详细信息，请查看 [安装方法](https://www.home-assistant.io/installation/#compare-installation-methods)。
:::

下一步是安装 **Mosquitto Broker** 和 **File Editor**。**Mosquitto** 是一个实现 MQTT 协议的开源消息代理，而 **File Editor** 允许您无需访问终端即可修改 `configuration.yaml` 文件。

在 Home Assistant Yellow 中，您可以使用附加组件功能安装 Mosquitto Broker 和 File Editor。

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_Setting.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_Add-ons.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Press_Add.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add-on_Store.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

:::tip
为了方便起见，可以在侧边栏中显示“文件编辑器”：

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_editor_show.png"/></div>

:::

现在我们有两个附加组件。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Two_Adds.png"/></div>

### 第 2 步：设置 MQTT 集成 {#mqtt-integration}

MQTT（消息队列遥测传输）是一种轻量级的消息传输协议，对于将 SenseCAP 指示器板连接到 Home Assistant 至关重要。为了启用此功能，您需要将 [MQTT 集成](https://www.home-assistant.io/integrations/mqtt) 添加到您的 Home Assistant 设置中。

> 添加 MQTT 集成允许 Home Assistant 与您的 SenseCAP 指示器板无缝通信，实现实时数据交换和控制。这种双向通信对于监控传感器数据和向设备发送命令至关重要。

设置 MQTT 集成的步骤如下：

1. 在 Home Assistant 仪表板中，导航到集成页面（`设备与服务` -> `集成`）。
2. 搜索“MQTT”，并从列表中选择它。（如果未自动发现）
3. 按照屏幕上的说明完成设置。

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_Devices.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Config_MQTT.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

:::tip
如果您使用的是非官方的 MQTT Broker（例如 EMQX Broker）而不是标准的 Mosquitto Broker，自动发现可能无法正常工作。在这种情况下，您需要手动输入 Broker 的 IP 地址以建立连接。这可以确保 Home Assistant 能够与您的自定义 MQTT 设置通信。
:::

### 为 MQTT 附加组件添加用户

在 Home Assistant 中使用官方的 Mosquitto Broker 附加组件时，您可能需要为 MQTT 连接设置凭据。此步骤可确保设备与 Home Assistant 之间的安全通信。以下是添加用户的步骤：

1. 在 Home Assistant 界面中导航到 Mosquitto Broker 附加组件。
2. 在附加组件配置中找到“用户”部分或选项卡。
3. 点击“添加用户”或“+”按钮以创建新用户。

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add_User.png" style={{width:480, height:'auto'}} alt="添加用户按钮"/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Create_User.png" style={{width:480, height:'auto'}} alt="创建用户表单"/></div></td>
    </tr>
  </table>
</div>

[^ref]: [MQTT 默认凭据 - GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/ba2fe1c04d486f802e12b763ffb6efbc71bb5d80/examples/indicator_ha/main/ha_config.h#L10C1-L14C70)

4. 在用户创建表单中：
   - 输入您选择的用户名。默认是 `indicator-usr`[^ref]。
   - 创建一个强密码。默认是 `indicator-password`。
   - 可选地，您可以根据需要设置特定权限。
5. 保存新用户凭据。

:::tip
请确保在配置您的 SenseCAP 指示器或任何其他 MQTT 设备以连接到 Home Assistant 时使用这些凭据。
:::

添加用户后，您可能需要重新启动 Mosquitto Broker 附加组件以使更改生效。现在，您应该能够使用这些凭据建立安全的 MQTT 连接。

请记得更新您的 SenseCAP 指示器的 MQTT 设置，使用新的用户名和密码，以确保它可以与 Home Assistant 通信。

## 设置 SenseCAP Indicator ESP32 项目 {#build-flash-firmware}

在将您的 SenseCAP 指示器与 Home Assistant 集成之前，您需要为设备设置适当的固件。按照以下步骤下载、构建并将项目烧录到您的 SenseCAP 指示器。

### 第 1 步：下载项目

有两个项目可用于将 SenseCAP 指示器与 Home Assistant 集成。选择最适合您需求的项目：

<Tabs groupId="project-ha">
<TabItem value="sensecap-indicator-ha" label="sensecap-indicator-ha" default>

此项目专为 Home Assistant 集成设计。

<div class="github_container" style={{textAlign: 'center'}}>
<a class="github_item" href="https://github.com/Love4yzp/sensecap-indicator-ha">

<strong><span><font color={'FFFFFF'} size={"4"}>获取固件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>

</a>
</div>

或者使用 Git 克隆仓库：

```bash
git clone https://github.com/Love4yzp/sensecap-indicator-ha
```

</TabItem> 
<TabItem value="SenseCAP_Indicator_ESP32" label="SenseCAP_Indicator_ESP32">

此项目包含更多 SenseCAP 指示器的示例和功能。

<div class="github_container" style={{textAlign: 'center'}}>
<a class="github_item" href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32">

<strong><span><font color={'FFFFFF'} size={"4"}>获取固件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>

</a>
</div>

或者使用 Git 克隆仓库：

```bash
git clone https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32
```

</TabItem> 
</Tabs>

### 第 2 步：导航到项目目录

下载或克隆项目后，导航到相应的目录：

<Tabs groupId="project-ha"> 
<TabItem value="sensecap-indicator-ha" label="sensecap-indicator-ha">

```bash
cd sensecap-indicator-ha
```

</TabItem> 
<TabItem value="SenseCAP_Indicator_ESP32" label="SenseCAP_Indicator_ESP32">

```bash
cd SenseCAP_Indicator_ESP32/examples/indicator_ha
```

</TabItem> 
</Tabs>

### 第 3 步：构建、烧录和监控项目

现在，您可以构建固件，将其烧录到 SenseCAP 指示器，并监控设备的输出。使用以下命令：

```bash
idf.py -p PORT build flash monitor
```

将 `PORT` 替换为设备的相应端口（例如，Windows 上的 `COM3` 或 Linux 上的 `/dev/ttyUSB0`）。

:::tip 
如果您不确定设备的端口：

- 在 Windows 上：检查设备管理器中的“端口 (COM & LPT)”
- 在 Linux/macOS 上：在终端中运行 `ls /dev/tty*` 
:::

此命令将执行以下操作：

1. 构建项目
2. 将固件烧录到 SenseCAP 指示器
3. 打开串口监视器以显示设备的输出

要退出串口监视器，请按 `Ctrl-]`。

### 第 4 步：验证设置

烧录固件后，串口监视器将显示来自 SenseCAP 指示器的输出。查找指示成功连接到 Wi-Fi 网络和 MQTT 代理的消息。

:::caution 
确保您的 SenseCAP 指示器连接到与 Home Assistant 实例相同的网络，并且您的 MQTT 代理已正确配置且可访问。 
:::

成功烧录并验证 SenseCAP 指示器上的固件后，您可以继续使用 MQTT 集成将其集成到 Home Assistant 中。

接下来，我们将配置 Home Assistant 以识别并与您的 SenseCAP 指示器通信。

## 添加 MQTT 设备 {#add-mqtt-devices}

在 Home Assistant 中设置 MQTT 集成后，下一步是添加 MQTT 设备。此过程涉及配置 Home Assistant 以通过 MQTT 识别并与您的 SenseCAP 指示器板通信。

### 第 1 步：添加指示器实体

要将 SenseCAP 指示器实体添加到 Home Assistant，您需要修改 `configuration.yaml` 文件。此文件对于定义 Home Assistant 如何与您的设备交互至关重要。

:::tip
如果您使用的是 Home Assistant Yellow 或任何带有 **文件编辑器** 插件的系统，可以通过 Web 界面轻松修改 `configuration.yaml` 文件。对于其他设置（如 Home Assistant 容器），您可能需要通过终端访问修改文件。
:::

修改 `configuration.yaml` 文件：

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_File_editor.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_Choose_config.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_edit.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

1. 在 Home Assistant 仪表板中导航到文件编辑器插件。
2. 从文件列表中选择 `configuration.yaml` 文件。
3. 将以下 MQTT 配置添加到文件中：

<details>
<summary>点击展开并复制 SenseCAP 指示器的 MQTT 配置</summary>


```yaml
# 示例 configuration.yaml 条目 | SenseCAP 指示器 MQTT 配置
mqtt:
  sensor:
    - unique_id: indicator_temperature
      name: "指示器温度"
      state_topic: "indicator/sensor"
      suggested_display_precision: 1
      unit_of_measurement: "°C"
      value_template: "{{ value_json.temp }}"
    - unique_id: indicator_humidity
      name: "指示器湿度"
      state_topic: "indicator/sensor"
      unit_of_measurement: "%"
      value_template: "{{ value_json.humidity }}"
    - unique_id: indicator_co2
      name: "指示器 CO2"
      state_topic: "indicator/sensor"
      unit_of_measurement: "ppm"
      value_template: "{{ value_json.co2 }}"
    - unique_id: indicator_tvoc
      name: "指示器 tVOC"
      state_topic: "indicator/sensor"
      unit_of_measurement: ""
      value_template: "{{ value_json.tvoc }}"
  switch:
    - unique_id: indicator_switch1
      name: "指示器开关1"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch1 }}"
      payload_on: '{"switch1":1}'
      payload_off: '{"switch1":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch2
      name: "指示器开关2"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch2 }}"
      payload_on: '{"switch2":1}'
      payload_off: '{"switch2":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch3
      name: "指示器开关3"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch3 }}"
      payload_on: '{"switch3":1}'
      payload_off: '{"switch3":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch4
      name: "指示器开关4"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch4 }}"
      payload_on: '{"switch4":1}'
      payload_off: '{"switch4":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch6
      name: "指示器开关6"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch6 }}"
      payload_on: '{"switch6":1}'
      payload_off: '{"switch6":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch7
      name: "指示器开关7"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch7 }}"
      payload_on: '{"switch7":1}'
      payload_off: '{"switch7":0}'
      state_on: 1
      state_off: 0
  number:
    - unique_id: indicator_switch5
      name: "指示器开关5"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      command_template: '{"switch5": {{ value }} }'
      value_template: "{{ value_json.switch5 }}"
    - unique_id: indicator_switch8
      name: "指示器开关8"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      command_template: '{"switch8": {{ value }} }'
      value_template: "{{ value_json.switch8 }}"
```

</details>

1. 保存对 `configuration.yaml` 文件的更改。

:::caution
如果你的 Home Assistant 设置不支持附加组件（例如，Home Assistant Container），你需要通过终端或 SSH 连接来修改 `configuration.yaml` 文件。
:::

### 第 2 步：应用配置更改

在修改 `configuration.yaml` 文件后，你需要应用这些更改：

1. 在 Home Assistant 仪表板中导航到 `开发者工具`。
2. 找到并点击 "YAML" 标签。
3. 通过 `重新加载所有 YAML 配置` 来重新加载配置。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_ALL_YAML.png" alt="开发者工具中的 YAML 配置"/></div>

:::note
如果出现问题，你可以：
- 点击 "检查配置" 按钮来验证你的更改。
- 如果配置检查通过，点击 "重启" 按钮以应用新配置。

重启后，Home Assistant 将识别你的 SenseCAP 指示器实体，你应该能够在仪表板中看到它们。如果实体没有立即出现，你可能需要等待几分钟以完成 MQTT 发现过程。

请确保你的 SenseCAP 指示器已正确配置，以将其数据发布到配置中定义的正确 MQTT 主题。
:::

通过完成这些步骤，你已经成功通过 MQTT 将你的 SenseCAP 指示器设备添加到 Home Assistant。现在，你可以在自动化、脚本和仪表板中使用这些实体，从而实现更集成的智能家居体验。

## 设置 仪表板 {#set-up-dashboard}

将你的 SenseCAP 指示器与 Home Assistant 集成的最后一步是设置一个自定义仪表板。这将使你能够轻松地可视化和控制设备的数据和功能。

### 创建新的 仪表板（可选）

如果你想为你的 SenseCAP 指示器创建一个专用仪表板：

1. 在 Home Assistant 侧边栏中导航到 `设置 -> 仪表板`。
2. 点击 "添加 仪表板" 按钮。
3. 设置一个标题（例如 "SenseCAP 指示器"）并选择一个图标。
4. 点击 "创建" 以完成新仪表板的创建。

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add_dashboard_info.png" style={{width:480, height:'auto'}} alt="创建 仪表板"/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Dashboard.png" style={{width:480, height:'auto'}} alt="新 仪表板"/></div></td>
    </tr>
  </table>
</div>

### 配置 仪表板

要将 SenseCAP 指示器实体添加到你的仪表板：

1. 打开你想要编辑的仪表板。
2. 点击右上角的三点菜单并选择 "编辑 仪表板"。
3. 点击 "接管控制" 按钮以启用手动配置。

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_SenseCAP.png" style={{width:480, height:'auto'}} alt="编辑 仪表板"/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Edit_Dashboard.png" style={{width:480, height:'auto'}} alt="接管控制"/></div></td>
    </tr>
  </table>
</div>

4. 在仪表板编辑器中，再次点击三点菜单并选择 "原始配置编辑器"。
5. 用以下配置替换现有的 YAML 内容：

<details>

<summary>点击复制 仪表板 YAML 以更改 UI</summary>

> 注意：这不是用于 `configuration.yaml` 的配置。

```yaml
views:
  - title: Indicator device
    icon: ''
    badges: []
    cards:
      - graph: line
        type: sensor
        detail: 1
        icon: mdi:molecule-co2
        unit: ppm
        entity: sensor.indicator_co2
      - graph: line
        type: sensor
        entity: sensor.indicator_temperature
        detail: 1
        icon: mdi:coolant-temperature
      - graph: line
        type: sensor
        detail: 1
        entity: sensor.indicator_humidity
      - graph: line
        type: sensor
        entity: sensor.indicator_tvoc
        detail: 1
        icon: mdi:air-filter
      - type: entities
        entities:
          - entity: switch.indicator_switch1
          - entity: switch.indicator_switch2
          - entity: switch.indicator_switch3
          - entity: switch.indicator_switch4
          - entity: number.indicator_switch5
          - entity: switch.indicator_switch6
          - entity: switch.indicator_switch7
          - entity: number.indicator_switch8
        title: Indicator control
        show_header_toggle: false
        state_color: true
```

</details>

:::caution
此 YAML 配置专用于仪表板，不应添加到你的 `configuration.yaml` 文件中。
:::

1. 点击 "保存" 以应用更改。

<div class="table-center">
   <table align="center">
      <tr>
         <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Edit_Dashboard_config.png" style={{width:480, height:'auto'}} alt="原始配置编辑器"/></div>
         </td>
         <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Dashboard_Save.png" style={{width:480, height:'auto'}} alt="保存配置"/></div>
         </td>
      </tr>
   </table>
</div>

恭喜！你已成功配置 Home Assistant 仪表板以显示和控制你的 SenseCAP 指示器。现在，你可以直接从 Home Assistant 界面监控 CO2 浓度、温度、湿度和 TVOC，并控制各种开关。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_data_show.gif"/></div>

## 资源

1. **Demo SDK**：SenseCAP 指示器的 Demo SDK 可在 [GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32) 上获取。
2. **`indicator_ha.c` 文件**：此文件包含 Home Assistant 集成的主要功能。你可以在 [这里](https://raw.githubusercontent.com/Seeed-Solution/SenseCAP_Indicator_ESP32/main/examples/indicator_ha/main/model/indicator_ha.c) 查看。
3. **用户指南**：用户指南提供了有关 SenseCAP 指示器板硬件和软件的详细信息。你可以在 [这里](/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator) 阅读。
4. **Home Assistant 安装指南**：如果你是 Home Assistant 的新用户，此指南将帮助你完成安装和设置。你可以在 [这里](https://www.home-assistant.io/installation/) 找到。
5. **ESP-IDF 入门指南**：此指南提供了配置和使用 ESP-IDF 构建项目的完整步骤。你可以在 [这里](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html) 访问。
6. [Home Assistant 概念和术语](https://www.home-assistant.io/getting-started/concepts-terminology/)

## 参考

- 🔗 **[链接]** [Home Assistant 和 MQTT：你可以构建的 4 件事 | EMQ (emqx.com)](https://www.emqx.com/en/blog/home-assistant-and-mqtt-4-things-you-could-build#home-assistant-mqtt-with-emqx)

## 技术支持

**需要帮助解决您的 SenseCAP Indicator 问题？我们随时为您提供支持！**

如果您在按照本教程操作时遇到任何问题或有任何疑问，请随时联系我们的技术支持团队。我们始终在这里为您提供帮助！

访问我们的 [Seeed 官方 Discord 频道](https://discord.gg/kpY74apCWj) 提问，或者前往 [GitHub 讨论区](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions) 分享您的想法！