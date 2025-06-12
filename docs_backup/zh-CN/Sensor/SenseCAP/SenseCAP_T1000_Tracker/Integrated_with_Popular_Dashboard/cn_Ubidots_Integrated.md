---
description: SenseCAP_T1000_tracker_and_Ubidots_Integrated
title: Ubidots 集成（通过 TTS）
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_T1000_tracker_Ubidots_TTS
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

[Ubidots](https://ubidots.com/?_gl=1%2a89g1t2%2a_ga%2aMzUzMzM3MDY5LjE2NjE5MzcyMTI.%2a_ga_VEME7QQ5EZ%2aMTY2MzY0Mzc4NS44LjEuMTY2MzY0NTI3MC4wLjAuMA..) 是一个低代码物联网应用开发平台，可以快速组装和启动物联网应用，而无需编写代码或雇佣软件开发团队。目前，已有超过 40,000 个应用通过 Ubidots 实现了连接。

为了满足构建物联网应用的日益增长的需求，我们与 Ubidots 合作，支持社区通过 The Things Network 轻松将 [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) 添加到 Ubidots。

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/09/%E5%8D%9A%E5%AE%A2%E6%8F%92%E5%9B%BE.jpg" alt="pir" width={800} height="auto" /></p>

在开始设置之前，请先查看 [将 SenseCAP T1000 连接到 TTS](https://wiki.seeedstudio.com/SenseCAP_T1000_tracker_TTN)，以先将您的 SenseCAP T1000 Tracker 连接到 TTS。

## 配置 Ubidots

首先，创建一个 [Ubidots](https://stem.ubidots.com/accounts/signin/) 账户。

登录到您的 Ubidots 账户，在仪表板顶部找到 **Devices** 标签。在下拉列表中选择 **Plugins**。

### Ubidots 插件

点击 **+** 或 **Create Data Plugin** 按钮以创建一个新插件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/plugins.png" alt="pir" width={800} height="auto" /></p>

当显示可用插件时，选择 **The Things Stack** 插件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/addtts.png" alt="pir" width={800} height="auto" /></p>

接下来，您需要选择一个 Ubidots token。您可以使用 **Default token**，也可以创建一个新 token。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/default_token.png" alt="pir" width={800} height="auto" /></p>

要创建一个新 token，首先点击右上角的头像并选择 **API Credentials**。然后在 Default token 下选择 **More**，并在 API Credentials 页面中添加一个新 token。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/new_toekn.png" alt="pir" width={800} height="auto" /></p>

选择 **>** 继续，然后点击复选标记完成。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/name-description.png" alt="pir" width={800} height="auto" /></p>

### 配置解码器

创建插件后，进入解码器部分，删除所有代码并替换为以下内容：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/decoding_function.png" alt="pir" width={800} height="auto" /></p>

```cpp
const HOTSPOT_INFO = false;

// 检查数据中是否存在错误
function handleErrorIfExists(data){
	const error = 'error' in data;
	if (error) {
        const errorMsg = { "error": { "value": data.errorCode, "context" : { "reason": data.error } } };
		return errorMsg;
	}
	return false;
}

// 添加纬度信息
function addLat(lat, ubidotsPayload){
	ubidotsPayload.position.context.lat = lat;
}

// 添加经度信息
function addLng(lng, ubidotsPayload){
	ubidotsPayload.position.context.lng = lng;
}

const coordinateActions = {
	"Longitude": addLng,
	"Latitude": addLat,
}

// 分配数据键值到 Ubidots 负载
const assignPayloadKeys = (data, ubidotsPayload) => {
	const { type, measurementValue } = data;

	if (type === "Longitude" || type === "Latitude") {
		if (!ubidotsPayload.position) {
			ubidotsPayload.position = { "value": 1, "context": { "lat": undefined, "lng": undefined } };
		}
		coordinateActions[type](measurementValue, ubidotsPayload);
	}
	else if (data.type === "Timestamp") {
		ubidotsPayload.timestamp = data.measurementValue;
	}
	else {
		ubidotsPayload[type] = measurementValue;
	}
};

// 构建 Ubidots 负载
function buildUbidotsPayload(data){
	const ubidotsPayload = {};
	data.forEach(innerData => {
		innerData.forEach(innerInnerData => {
			assignPayloadKeys(innerInnerData, ubidotsPayload);
		});
	});
	return ubidotsPayload;
}

// 格式化负载
async function formatPayload(args){

	const data = args.uplink_message.decoded_payload.messages;
	let ubidotsPayload = {};

	const error = handleErrorIfExists(data[0][0]);
	if (error) return error;

	if (HOTSPOT_INFO) {
		const { hotspots, port, fcnt } = args;
		const { snr, rssi } = hotspots[0];
		Object.assign(ubidotsPayload, { SNR: snr, RSSI: rssi, port, 'Frame Counter': fcnt });
	}
	ubidotsPayload = buildUbidotsPayload(data);
	console.log(ubidotsPayload);
	return ubidotsPayload;
};

module.exports = { formatPayload };
```

## 配置 The Things Stack

当您在 Ubidots 上完成设置后，需要通过使用 Ubidots Webhook 模板在 The Things Stack 上创建一个 Webhook 集成。

在 The Things Stack 上，导航到 **Integrations** → **Webhooks**，然后点击 **Add Webhook**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>

选择 Ubidots Webhook 模板。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tts-ubidots.png" alt="pir" width={800} height="auto" /></p>

通过填写 Webhook ID，并粘贴 Plugin ID 和 Ubidots token 值来命名您的集成。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ubi_web.png" alt="pir" width={800} height="auto" /></p>

:::info
要找到插件 ID，点击您新创建的插件并导航到左侧的 Decoder 标签。插件 ID 可在 HTTPs Endpoint URL 中找到（如下图所示）。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ids.png" alt="pir" width={800} height="auto" /></p>

## 监控您的数据

完成集成后，导航到 **Devices** 菜单。只要您的终端设备发送上行消息，您就会在终端设备列表中看到它的出现。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/check_data_ubi.png" alt="pir" width={800} height="auto" /></p>