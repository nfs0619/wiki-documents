---
description: SenseCAP T1000 追踪器与 ThingsBoard 集成
title: ThingsBoard 集成（通过 TTS）
keywords:
- ThingsBoard
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/thingsboard_integrated
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

[ThingsBoard](https://thingsboard.io/) 是一个开源的物联网平台，能够快速开发、管理和扩展物联网项目。我们的目标是提供开箱即用的物联网云端或本地解决方案，为您的物联网应用提供服务器端基础设施。

本章节内容将指导用户如何通过 TTN 将 [SenseCAP T1000 追踪器](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) 连接到 ThingsBoard。

## 开始

在开始设置之前，请先查看 [将 SenseCAP T1000 连接到 TTS](https://wiki.seeedstudio.com/SenseCAP_T1000_tracker_TTN)，以先将您的 SenseCAP T1000 追踪器连接到 TTS。

## 配置 ThingsBoard

首先，创建一个 [ThingsBoard](https://thingsboard.cloud/) 账户。

### 创建转换器

首先，我们需要创建一个上行数据转换器，用于接收来自 TTS 的消息。

导航到 `Data converters`，点击 `Create new converter`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/converter.png" alt="pir" width={800} height="auto" /></p>

为转换器命名，启用 `Debug mode`，复制以下代码并点击 `Add`。

```cpp
var data = decodeToJson(payload);
var deviceName = data.end_device_ids.device_id;
var deviceType = data.end_device_ids.application_ids.application_id;

var telemetry = {};

var messages = data.uplink_message.decoded_payload.messages[0];
for (var i = 0; i < messages.length; i++) {
    var measurement = messages[i];
    
    var type = measurement.type.toLowerCase();
    var typeKey = '';
    for (var j = 0; j < type.length; j++) {
        if (type[j] === ' ') {
            typeKey += '_';
        } else {
            typeKey += type[j];
        }
    }

    telemetry[typeKey] = measurement.measurementValue;
}

var result = {
    deviceName: deviceName,
    deviceType: deviceType,
    telemetry: telemetry
};

function decodeToString(payload) {
    return String.fromCharCode.apply(String, payload);
}

function decodeToJson(payload) {
    var str = decodeToString(payload);
    var data = JSON.parse(str);
    return data;
}

return result;
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/converter2.png" alt="pir" width={800} height="auto" /></p>

### 添加集成

导航到 `Integration`，点击 `Add Integration`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/integrate1.png" alt="pir" width={800} height="auto" /></p>

**类型**: `The Things Stack Community`<br/>
**启用**: `Enable integration`  `Debug mode`  `Allow create devices or assets`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tts-inte.png" alt="pir" width={800} height="auto" /></p>

选择 `Select existing`，并选择我们之前创建的转换器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/choose-converter.png" alt="pir" width={800} height="auto" /></p>

跳过 `Downlink data converter`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/skip-down.png" alt="pir" width={800} height="auto" /></p>

**区域**: 您的应用在 TTS 中注册的区域<br/>
**用户名**: 来自 TTS 的用户名<br/>
**密码**: 来自 TTS 的密码<br/>
**使用 API v3**: 设置为 `Enable`

:::tip
信息可以在 TTS MQTT 集成中找到。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/createNEW.png" alt="pir" width={800} height="auto" /></p>
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-inte2.png" alt="pir" width={800} height="auto" /></p>

### 数据查看

导航到 `Entities` -> `Devices`，您可以看到：

* 一个新设备已在 ThingsBoard 中注册。
* 在 `Latest Telemetry` 部分，您将看到设备的更新数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/telemetry.png" alt="pir" width={800} height="auto" /></p>

### 添加 Dashboard

导航到 `Dashboards`，点击 `Create new dashboard`。

输入仪表板标题，然后点击 `Next`。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-dash.png" alt="pir" width={800} height="auto" /></p>

添加 `widget`，选择要添加的小部件。

### 位置地图

选择一个 `map` 小部件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map1.png" alt="pir" width={800} height="auto" /></p>

**类型**: `Device`<br/>
**设备**: 我们创建的设备。<br/>
**数据键**: `latitude`, `longitude`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-map.png" alt="pir" width={800} height="auto" /></p>

### 其他参数

参考上述步骤添加其他小部件。

#### 温度

**设备**: 我们创建的设备。<br/>
**数据键**: `air_temperature`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-temp.png" alt="pir" width={800} height="auto" /></p>

#### 电池

**设备**: 我们创建的设备。<br/>
**数据键**: `battery`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-battery.png" alt="pir" width={800} height="auto" /></p>

以下是一个基本示例，您可以自定义自己的仪表板。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/dashboard3.png" alt="pir" width={800} height="auto" /></p>