---
description: LoRaWAN 追踪器蓝牙 AT 指令说明
title: LoRaWAN 追踪器蓝牙 AT 指令说明
keywords:
- 追踪器
- 应用
image: https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/intro-e.webp
slug: /cn/tracker_at_command
last_update:
  date: 05/15/2025
  author: Jessie
sidebar_position: 3
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

本章节将简要说明如何使用蓝牙 AT 指令，通过蓝牙 AT 指令建立蓝牙连接并查询/配置设备信息。

## 前置条件

- 一台带有 LoRaWAN 固件的 T1000-E 设备。
- 支持蓝牙 4.0+ 的手机。
- [LoRaWAN 追踪器 AT 指令列表](https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/LoRaWAN%20Tracker%20AT%20Command.pdf)
- 移动开发框架（例如 React Native + react-native-ble-plx）。

### 发现 BLE 服务和特性

在应用程序中发现并筛选您的 BLE 设备：

* 扫描附近的蓝牙设备。
* 根据 `["2886", "A886", "a6ed0701-d344-460a-8075-b9e8ec90d71b"]` 筛选扫描结果。

* 可选：根据设备的广播名称进行筛选：

在 `react-native-ble-plx` 中，本地名称可以通过 `(Device).localName` 访问。

仅保留 `localName` 包含 `T1000` 的设备。

### 检查设备状态

* 如果扫描到的服务是 `2886` 或 `A886`，则需要建立蓝牙连接。

### 连接蓝牙并发现服务

* 连接后，发现所有服务和特性。

* 找到具有以下 UUID 的 UART 服务：
`49535343-FE7D-4AE5-8FA9-9FAFD205E455`

* 在此服务中，有两个关键特性：

|特性 UUID|用途|
|--|--|
|49535343-8841-43F4-A8D4-ECBE34729BB3|	TX: 发送指令|
|49535343-1E4D-4BD9-BA61-23C647249616|	RX: 接收数据|

* ✅ 指令成功检查

成功的 AT 指令通常返回：

`\r\nok\r\n`、`\r\nOK\r\n` 或 `\r\nOk\r\n`

### AT 指令示例

**示例**：检查设备信息

**指令：**

通过 `49535343-8841-43F4-A8D4-ECBE34729BB3` 发送 `AT+CONFIG=?\r\n` 指令。

**返回值：**

响应将以 JSON 格式返回：

```json
{
	"devMdl": "Tracker T1000-A",
	"deviceEui": "2C:F7:F1:C0:53:00:04:AD",
	"defEui": "2C:F7:F1:C0:53:00:04:AD",
	"appEui": "80:00:00:00:00:00:00:09",
	"version": {
		"sw_ver": "V2.5",
		"hw_ver": "V1.6",
		"LoRaWAN": "V1.0.4",
	},
	"classType": "A",
	"batPct": 38,
	"frequency": 8,
	"subBand": 1,
	"3c": 1,
	"joinType": 2,
	"appKey": "0E:32:B3:94:4E:B6:DA:55:E9:1C:75:77:98:57:62:CC",
	"nwkSkey": "0E:32:B3:94:4E:B6:DA:55:E9:1C:75:77:98:57:62:CC",
	"appSkey": "0E:32:B3:94:4E:B6:DA:55:E9:1C:75:77:98:57:62:CC",
	"devAddr": "00:00:00:00",
	"devCode": "FD:E1:AD:47:40:18:3A:92",
	"platform": 0,
	"devKey": "FD:E1:AD:47:40:18:3A:92:45:9B:05:82:05:BC:ED:25",
	"lrAdrEn": 1,
	"lrDrMin": 0,
	"lrDrMax": 4,
	"wkMode": 0,
	"posStrategy": 3,
	"posInt": 5,
	"hbInt": 6,
	"sosMode": 1,
	"cacheEn": 1,
	"senEn": 1,
	"illMin": 0,
	"illMax": 100,
	"illInt": 1,
	"illEvtEn": 0,
	"illEvtInt": 5,
	"illWarnType": 0,
	"tempMin": 50,
	"tempMax": 500,
	"tempInt": 2,
	"tempEvtEn": 1,
	"tempEvtInt": 2,
	"tempWarnType": 0,
	"staOt": 10,
	"motEvtEn": 0,
	"stcEvtEn": 0,
	"shkEvtEn": 0,
	"motThr": 30,
	"shkThr": 300,
	"motEvtInt": 5,
	"stcOt": 360,
	"evtPosInt": 2,
	"buzEn": 0,
	"beacOt": 3,
	"beacUuid": 
}
```