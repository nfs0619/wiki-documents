---
description: SenseCAP_T1000_tracker_and_Ubidots_Integrated(Helium)
title: Ubidots 集成（通过 Helium）
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_T1000_tracker_Ubidots_Helium
last_update:
  date: 05/15/2025
  author: Jessie
---

# 设置为 true 以启用热点信息

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

本文将说明如何通过 Helium LNS 将 [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) 连接到 Ubidots。

<div align="right">
由 Juan David Tangarife 撰写 - 来自 Ubidots 团队
</div>

[来源](https://help.ubidots.com/en/articles/8144778-connect-seeed-studio-sensecap-t1000-x-lorawan-tracker-to-ubidots-helium-lns)

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788772796/62a6662b1c9082f3ffc2b26b/image+5.png" alt="pir" width={400} height="auto" /></p>

### 要求

- 一个激活的 Ubidots 账户  
- 一个 [SenseCAP T1000 Tracker](https://www.seeedstudio.com/sensecap-t1000-tracker?utm_source=emailsig&utm_medium=emailsig&utm_campaign=emailsig)  
- 一个激活的 Helium 控制台账户，并拥有一些 DC  
- 一部支持 Google Play Store 或 AppStore 且支持蓝牙的手机  

### 安装 SenseCAP Mate 应用并配置追踪器

扫描以下二维码，它将引导您前往 Seeed Studio 的 SenseCAP Mate 应用官方下载页面。

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788590034/a636320e04a17ad23cec9ac6/image+2%282%29.png" alt="pir" width={200} height="auto" /></p>

安装完成后，启用手机上的蓝牙并启动应用。如果您尚未注册账户，则需要注册以使用该应用。

之后，按住追踪器上的按钮至少 3 秒或直到 LED 开始闪烁。然后，从设备列表中选择 **Tracker T1000**。

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788602896/e42a8ef20f1c0ecfd5b20b17/2.gif" alt="pir" width={800} height="auto" /></p>

点击您的设备：

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788612522/9015280b3a7eb52f8451f9f7/Group+1%284%29.png" alt="pir" width={300} height="auto" /></p>

进入 **设置** 标签页，然后进入 **LoRa** 标签页。在这里选择 _平台_ 为 **Helium**，并根据您的需求选择 _频率计划_。同时，请确保复制 **Device EUI**、**APP EUI** 和 **APP Key**，因为后续步骤中需要用到这些信息。完成后，点击 **发送** 按钮保存设置。

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788613272/545654eedd7d0c4be47a7177/Group+2%283%29.png" alt="pir" width={300} height="auto" /></p>

### 在 Helium LNS 上注册追踪器

登录您的 Helium 控制台，然后进入 **“Devices”** 部分并点击 **“Add device”** 按钮。

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597484015/8c15e6c54b08e7f4fa3d1a7e/image300.png" alt="pir" width={800} height="auto" /></p>

填写所需字段，例如设备名称、LoRaWAN 凭证等。然后点击 **保存设备** 按钮。

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597505603/72dec54d6bb3f6ca4f44d628/image504.png" alt="pir" width={800} height="auto" /></p>

### 在 Helium 上创建解码器函数

下一步是设置一个函数，将原始字节解码为可读的形式。进入左侧面板的 **Function** 标签页，然后点击 **Add New Function** 按钮并为其命名：

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788631256/c066827c0eaebdc9dbf629d3/Group+3%282%29.png" alt="pir" width={800} height="auto" /></p>

Seeed Studio 为此设备提供了一个专用解码器，您可以在以下 [仓库](https://github.com/Seeed-Solution/TTN-Payload-Decoder/blob/master/SenseCAP_LoRaWAN_V4_Decoder_For_Helium.js) 中找到。将该解码器粘贴到文本字段中，然后保存更改。

### 创建到 Ubidots 的集成

进入 **Integrations** 部分，然后点击 **Add integration** 并搜索 Ubidots 集成：

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597507996/c47773268f7810506757ee6e/image566.png" alt="pir" width={800} height="auto" /></p>

点击 **+Add integration**。

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597508059/9e279e2f7f3c94081457e409/image3369.png" alt="pir" width={800} height="auto" /></p>

在相应字段中输入您的 Ubidots 令牌，然后点击 **继续** 按钮并等待确认弹出消息。之后，为您的集成命名并点击 **添加集成** 按钮：

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597508025/8576db8c4413b16e710aee9f/image2619.png" alt="pir" width={800} height="auto" /></p>

完成此步骤后，您的 Ubidots 账户中将创建一个新的 **Helium 插件**。

### 创建连接到 Ubidots 的流程

进入 **Flows** 部分，然后从左上角的下拉菜单中拖放设备、解码器函数和集成到空白区域中，并按照下图 GIF 所示连接点：

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788706473/fa87a7bbb8f32f6e10b41f51/last.gif" alt="pir" width={800} height="auto" /></p>

在此示例中，设备和解码器函数均命名为 "sensecap-lorawan-tracker"，集成命名为 "send data to ubidots"。

由于 Seeed Studio 的解码器返回的 JSON 对象与 Ubidots 的架构不兼容，因此在提取感兴趣的数据后需要进行转换。  
进入 Helium 插件的解码器部分，删除所有代码并替换为以下代码：

```cpp

HOTSPOT_INFO_ENABLE = False

def format_payload(args):

    messages = args.get("decoded", {}).get("payload", {}).get("data", {}).get("messages", [])
    ubidots_payload = {}

    error = assert_error(messages[0][0])
    if error is not None:
        return error

    if HOTSPOT_INFO_ENABLE:
        hotspot_info = args.get('hotspots', None)
        ubidots_payload['SNR'] = hotspot_info[0].get('snr') if hotspot_info is not None else None
        ubidots_payload['RSSI'] = hotspot_info[0].get('rssi') if hotspot_info is not None else None
        ubidots_payload["port"] = args.get("port", None)
        ubidots_payload['Frame Counter'] = args.get('fcnt', None)

    for msg in messages:
        for sensor in msg:
            message_type = sensor.get("type", None)
            value = sensor.get("measurementValue")
            if message_type == "Latitude" or message_type == "Longitude":
                position = ubidots_payload.setdefault("position", {})
                position.update({message_type.lower(): value})
                continue
            elif message_type == "Timestamp":
                ubidots_payload["timestamp"] = value
                continue
            ubidots_payload[message_type] = value

    print(ubidots_payload)
    return ubidots_payload
    

def assert_error(data : dict):
    if "error" in data:
        return {"ERROR" : { "value" :  data["errorCode"], "context" : { "status" : data["error"]}}}
    return None
```

如果所有连接都正确完成，您应该会在 Ubidots 上新创建的设备中看到以下内容：

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788764383/864309856f8e7c43f7ab5317/image+4.png" alt="pir" width={800} height="auto" /></p>