---
description: 连接到 The Things Network
title: 连接到 Helium
keywords:
- SenseCAP_T1000_tracker
- Helium
image: https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker.webp
slug: /cn/SenseCAP_T1000_tracker_Helium
last_update:
  date: 05/15/2025
  author: Jessie
---

# 将 SenseCAP T1000 连接到 Helium

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 设备配置

在连接到 Helium 之前，您需要在 SenseCAP Mate APP 上配置设备的基本参数，详细信息请查看 [快速入门](https://wiki.seeedstudio.com/Get_Started_with_SenseCAP_T1000_tracker)。

* 将平台设置为 `Helium`，然后复制 `Device EUI`/`APP EUI`/`APP Key`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/heliumdevice.png" alt="pir" width={300} height="auto" /></p>

## Helium 控制台配置

Helium 控制台不再开放新账户注册。以下描述适用于已经拥有账户的用户，说明如何将 T1000 连接到 Helium 控制台。对于新用户，请参考上文中的 ChirpStack LNA 步骤，或根据此处的两个示例确定适合您特定 LNA 的必要步骤。

### 添加新设备

登录您的 [Helium 控制台](https://console.helium.com)，然后进入 `Devices` 部分并点击 `Add device` 按钮。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-new-helium.png" alt="pir" width={800} height="auto" /></p>

填写所需字段，例如设备名称、LoRaWAN 凭据等。<br/>
然后点击 **Save Device** 按钮。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-new-helium2.png" alt="pir" width={800} height="auto" /></p>

### 创建解码器函数

下一步是设置一个函数，将原始字节解码为可读的形式。<br/>
在左侧面板中进入 `Function` 标签页。然后点击 `Add New Function` 按钮并为其命名：

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788631256/c066827c0eaebdc9dbf629d3/Group+3%282%29.png" alt="pir" width={800} height="auto" /></p>

复制以下代码并保存更改。

<details>

<summary>适用于 Helium 的解码器</summary>

```cpp
function Decoder (bytes, port) {
    const bytesString = bytes2HexString(bytes)
    const originMessage = bytesString.toLocaleUpperCase()
    const fport = parseInt(port)
    const decoded = {
        valid: true,
        err: 0,
        payload: bytesString,
        messages: []
    }

    if (fport === 199 || fport === 192) {
        decoded.messages.push({fport: fport, payload: bytesString})
        return { data: decoded }
    }
    if (fport !== 5) {
        decoded.valid = false
        return { data: decoded }
    }

    let measurement = messageAnalyzed(originMessage)
    if (measurement.length === 0) {
        decoded.valid = false
        return { data: decoded }
    }

    for (let message of measurement) {
        if (message.length === 0) {
            continue
        }
        let elements = []
        for (let element of message) {
            if (element.errorCode) {
                decoded.err = element.errorCode
                decoded.errMessage = element.error
            } else {
                elements.push(element)
            }
        }
        if (elements.length > 0) {
            decoded.messages.push(elements)
        }
    }
    // decoded.messages = measurement
    return { data: decoded }
}

function messageAnalyzed (messageValue) {
    try {
        let frames = unpack(messageValue)
        let measurementResultArray = []
        for (let i = 0; i < frames.length; i++) {
            let item = frames[i]
            let dataId = item.dataId
            let dataValue = item.dataValue
            let measurementArray = deserialize(dataId, dataValue)
            measurementResultArray.push(measurementArray)
        }
        return measurementResultArray
    } catch (e) {
        return e.toString()
    }
}

function unpack (messageValue) {
    let frameArray = []

    for (let i = 0; i < messageValue.length; i++) {
        let remainMessage = messageValue
        let dataId = remainMessage.substring(0, 2).toUpperCase()
        let dataValue
        let dataObj = {}
        let packageLen
        switch (dataId) {
            case '01':
                packageLen = 94
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                dataValue = remainMessage.substring(2, packageLen)
                messageValue = remainMessage.substring(packageLen)
                dataObj = {
                    'dataId': dataId, 'dataValue': dataValue
                }
                break
            case '02':
                packageLen = 32
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                dataValue = remainMessage.substring(2, packageLen)
                messageValue = remainMessage.substring(packageLen)
                dataObj = {
                    'dataId': dataId, 'dataValue': dataValue
                }
                break
            case '03':
                packageLen = 64
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                dataValue = remainMessage.substring(2, packageLen)
                messageValue = remainMessage.substring(packageLen)
                dataObj = {
                    'dataId': dataId, 'dataValue': dataValue
                }
                break
            case '04':
                packageLen = 20
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                dataValue = remainMessage.substring(2, packageLen)
                messageValue = remainMessage.substring(packageLen)
                dataObj = {
                    'dataId': dataId, 'dataValue': dataValue
                }
                break
            case '05':
                packageLen = 10
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                dataValue = remainMessage.substring(2, packageLen)
                messageValue = remainMessage.substring(packageLen)
                dataObj = {
                    'dataId': dataId, 'dataValue': dataValue
                }
                break
            case '06':
                packageLen = 44
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                dataValue = remainMessage.substring(2, packageLen)
                messageValue = remainMessage.substring(packageLen)
                dataObj = {
                    'dataId': dataId, 'dataValue': dataValue
                }
                break
            case '07':
                packageLen = 84
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                dataValue = remainMessage.substring(2, packageLen)
                messageValue = remainMessage.substring(packageLen)
                dataObj = {
                    'dataId': dataId, 'dataValue': dataValue
                }
                break
            case '08':
                packageLen = 70
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                dataValue = remainMessage.substring(2, packageLen)
                messageValue = remainMessage.substring(packageLen)
                dataObj = {
                    'dataId': dataId, 'dataValue': dataValue
                }
                break
            case '09':
                packageLen = 36
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                dataValue = remainMessage.substring(2, packageLen)
                messageValue = remainMessage.substring(packageLen)
                dataObj = {
                    'dataId': dataId, 'dataValue': dataValue
                }
                break
            case '0A':
                packageLen = 76
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                dataValue = remainMessage.substring(2, packageLen)
                messageValue = remainMessage.substring(packageLen)
                dataObj = {
                    'dataId': dataId, 'dataValue': dataValue
                }
                break
            case '0B':
                packageLen = 62
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                dataValue = remainMessage.substring(2, packageLen)
                messageValue = remainMessage.substring(packageLen)
                dataObj = {
                    'dataId': dataId, 'dataValue': dataValue
                }
                break
            case '0C':
                packageLen = 2
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                break
            case '0D':
                packageLen = 10
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                dataValue = remainMessage.substring(2, packageLen)
                messageValue = remainMessage.substring(packageLen)
                dataObj = {
                    'dataId': dataId, 'dataValue': dataValue
                }
                break
            case '0E':
                packageLen = getInt(remainMessage.substring(8, 10)) * 2 + 10
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                dataValue = remainMessage.substring(2, 8) + remainMessage.substring(10, packageLen)
                messageValue = remainMessage.substring(packageLen)
                dataObj = {
                    'dataId': dataId, 'dataValue': dataValue
                }
                break
            case '0F':
                packageLen = 34
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                dataValue = remainMessage.substring(2, packageLen)
                messageValue = remainMessage.substring(packageLen)
                dataObj = {
                    'dataId': dataId, 'dataValue': dataValue
                }
                break
            case '10':
                packageLen = 26
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                dataValue = remainMessage.substring(2, packageLen)
                messageValue = remainMessage.substring(packageLen)
                dataObj = {
                    'dataId': dataId, 'dataValue': dataValue
                }
                break
            case '11':
                packageLen = 28
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                dataValue = remainMessage.substring(2, packageLen)
                messageValue = remainMessage.substring(packageLen)
                dataObj = {
                    'dataId': dataId, 'dataValue': dataValue
                }
                break
            default:
                return frameArray
        }
        if (dataValue.length < 2) {
            break
        }
        frameArray.push(dataObj)
    }
    return frameArray
}

function deserialize (dataId, dataValue) {
    let measurementArray = []
    let eventList = []
    let measurement = {}
    let collectTime = 0
    let groupId = 0
    let shardFlag = {}
    let payload = ''
    let result = []
    let dataArr = []
    switch (dataId) {
        case '01':
            measurementArray = getUpShortInfo(dataValue)
            measurementArray.push(...getMotionSetting(dataValue.substring(30, 40)))
            measurementArray.push(...getStaticSetting(dataValue.substring(40, 46)))
            measurementArray.push(...getShockSetting(dataValue.substring(46, 52)))
            measurementArray.push(...getTempSetting(dataValue.substring(52, 72)))
            measurementArray.push(...getLightSetting(dataValue.substring(72, 92)))
            break
        case '02':
            measurementArray = getUpShortInfo(dataValue)
            break
        case '03':
            measurementArray.push(...getMotionSetting(dataValue.substring(0, 10)))
            measurementArray.push(...getStaticSetting(dataValue.substring(10, 16)))
            measurementArray.push(...getShockSetting(dataValue.substring(16, 22)))
            measurementArray.push(...getTempSetting(dataValue.substring(22, 42)))
            measurementArray.push(...getLightSetting(dataValue.substring(42, 62)))
            break
        case '04':
            let interval = 0
            let workMode = getInt(dataValue.substring(0, 2))
            let heartbeatInterval = getMinsByMin(dataValue.substring(4, 8))
            let periodicInterval = getMinsByMin(dataValue.substring(8, 12))
            let eventInterval = getMinsByMin(dataValue.substring(12, 16))
            switch (workMode) {
                case 0:
                    interval = heartbeatInterval
                    break
                case 1:
                    interval = periodicInterval
                    break
                case 2:
                    interval = eventInterval
                    break
            }
            measurementArray = [
                {measurementId: '3940', type: '工作模式', measurementValue: workMode},
                {measurementId: '3942', type: '心跳间隔', measurementValue: heartbeatInterval},
                {measurementId: '3943', type: '周期间隔', measurementValue: periodicInterval},
                {measurementId: '3944', type: '事件间隔', measurementValue: eventInterval},
                {measurementId: '3941', type: 'SOS模式', measurementValue: getSOSMode(dataValue.substring(16, 18))},
                {measurementId: '3900', type: '上行间隔', measurementValue: interval}
            ]
            break;
        case '05':
            measurementArray = [
                {measurementId: '3000', type: '电池电量', measurementValue: getBattery(dataValue.substring(0, 2))},
                {measurementId: '3940', type: '工作模式', measurementValue: getWorkingMode(dataValue.substring(2, 4))},
                {measurementId: '3965', type: '定位策略', measurementValue: getPositioningStrategy(dataValue.substring(4, 6))},
                {measurementId: '3941', type: 'SOS模式', measurementValue: getSOSMode(dataValue.substring(6, 8))}
            ]
            break
        case '06':
            collectTime = getUTCTimestamp(dataValue.substring(8, 16))
            measurementArray = [
                {measurementId: '4200', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '事件状态', measurementValue: getEventStatus(dataValue.substring(0, 6))},
                {measurementId: '4197', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '经度', measurementValue: parseFloat(getSensorValue(dataValue.substring(16, 24), 1000000))},
                {measurementId: '4198', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '纬度', measurementValue: parseFloat(getSensorValue(dataValue.substring(24, 32), 1000000))},
                {measurementId: '4097', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '空气温度', measurementValue: getSensorValue(dataValue.substring(32, 36), 10)},
                {measurementId: '4199', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '光照', measurementValue: getSensorValue(dataValue.substring(36, 40))},
                {measurementId: '3000', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '电池电量', measurementValue: getBattery(dataValue.substring(40, 42))}
            ]
            break
        case '07':
            eventList = getEventStatus(dataValue.substring(0, 6))
            collectTime = getUTCTimestamp(dataValue.substring(8, 16))
            measurementArray = [
                {measurementId: '4200', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '事件状态', measurementValue: getEventStatus(dataValue.substring(0, 6))},
                {measurementId: '5001', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'Wi-Fi扫描', measurementValue: getMacAndRssiObj(dataValue.substring(16, 72))},
                {measurementId: '4097', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '空气温度', measurementValue: getSensorValue(dataValue.substring(72, 76), 10)},
                {measurementId: '4199', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '光照', measurementValue: getSensorValue(dataValue.substring(76, 80))},
                {measurementId: '3000', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '电池电量', measurementValue: getBattery(dataValue.substring(80, 82))}
            ]
            break
        case '08':
            collectTime = getUTCTimestamp(dataValue.substring(8, 16))
            measurementArray = [
                {measurementId: '4200', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '事件状态', measurementValue: getEventStatus(dataValue.substring(0, 6))},
                {measurementId: '5002', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '蓝牙扫描', measurementValue: getMacAndRssiObj(dataValue.substring(16, 58))},
                {measurementId: '4097', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '空气温度', measurementValue: getSensorValue(dataValue.substring(58, 62), 10)},
                {measurementId: '4199', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '光照', measurementValue: getSensorValue(dataValue.substring(62, 66))},
                {measurementId: '3000', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '电池电量', measurementValue: getBattery(dataValue.substring(66, 68))}
            ]
            break
        case '09':
            collectTime = getUTCTimestamp(dataValue.substring(8, 16))
            measurementArray = [
                {measurementId: '4200', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '事件状态', measurementValue: getEventStatus(dataValue.substring(0, 6))},
                {measurementId: '4197', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '经度', measurementValue: parseFloat(getSensorValue(dataValue.substring(16, 24), 1000000))},
                {measurementId: '4198', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '纬度', measurementValue: parseFloat(getSensorValue(dataValue.substring(24, 32), 1000000))},
                {measurementId: '3000', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '电池电量', measurementValue: getBattery(dataValue.substring(32, 34))}
            ]
            break
        case '0A':
            collectTime = getUTCTimestamp(dataValue.substring(8, 16))
            measurementArray = [
                {measurementId: '4200', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '事件状态', measurementValue: getEventStatus(dataValue.substring(0, 6))},
                {measurementId: '5001', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'Wi-Fi扫描', measurementValue: getMacAndRssiObj(dataValue.substring(16, 72))},
                {measurementId: '3000', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '电池电量', measurementValue: getBattery(dataValue.substring(72, 74))}
            ]
            break
        case '0B':
            collectTime = getUTCTimestamp(dataValue.substring(8, 16))
            measurementArray = [
                {measurementId: '4200', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '事件状态', measurementValue: getEventStatus(dataValue.substring(0, 6))},
                {measurementId: '5002', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '蓝牙扫描', measurementValue: getMacAndRssiObj(dataValue.substring(16, 58))},
                {measurementId: '3000', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '电池电量', measurementValue: getBattery(dataValue.substring(58, 60))},
            ]
            break
        case '0D':
            let errorCode = getInt(dataValue)
            let error = ''
            switch (errorCode) {
                case 1:
                    error = '获取UTC时间戳失败'
                    break
                case 2:
                    error = '历书过期'
                    break
                case 3:
                    error = '多普勒误差'
                    break
            }
            measurementArray.push({errorCode, error})
            break
        case '0E':
            shardFlag = getShardFlag(dataValue.substring(0, 2))
            groupId = getInt(dataValue.substring(2, 6))
            payload = dataValue.substring(6)
            measurement = {
                measurementId: '6152',
                groupId: groupId,
                index: shardFlag.index,
                count: shardFlag.count,
                type: 'GNSS-NG载荷',
                measurementValue: payload
            }
            measurementArray.push(measurement)
            break
        case '0F':
            collectTime = getUTCTimestamp(dataValue.substring(8, 16))
            shardFlag = getShardFlag(dataValue.substring(26, 28))
            groupId = getInt(dataValue.substring(28, 32))
            measurementArray.push({
                measurementId: '4200',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                groupId: groupId,
                index: shardFlag.index,
                count: shardFlag.count,
                type: '事件状态',
                measurementValue: getEventStatus(dataValue.substring(0, 6))
            })
            measurementArray.push({
                measurementId: '4097',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                groupId: groupId,
                index: shardFlag.index,
                count: shardFlag.count,
                type: '空气温度',
                measurementValue: '' + getSensorValue(dataValue.substring(16, 20), 10)
            })
            measurementArray.push({
                measurementId: '4199',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                groupId: groupId,
                index: shardFlag.index,
                count: shardFlag.count,
                type: '光照',
                measurementValue: '' + getSensorValue(dataValue.substring(20, 24))
            })
            measurementArray.push({
                measurementId: '3000',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                groupId: groupId,
                index: shardFlag.index,
                count: shardFlag.count,
                type: '电池电量',
                measurementValue: '' + getBattery(dataValue.substring(24, 26))
            })
            break
        case '10':
            collectTime = getUTCTimestamp(dataValue.substring(8, 16))
            shardFlag = getShardFlag(dataValue.substring(18, 20))
            groupId = getInt(dataValue.substring(20, 24))
            measurementArray.push({
                measurementId: '4200',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                groupId: groupId,
                index: shardFlag.index,
                count: shardFlag.count,
                type: '事件状态',
                measurementValue: getEventStatus(dataValue.substring(0, 6))
            })
            measurementArray.push({
                measurementId: '3000',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                groupId: groupId,
                index: shardFlag.index,
                count: shardFlag.count,
                type: '电池电量',
                measurementValue: '' + getBattery(dataValue.substring(16, 18))
            })
            break
        case '11':
            collectTime = getUTCTimestamp(dataValue.substring(8, 16))
            measurementArray.push({
                measurementId: '3576',
                timestamp: collectTime,
                type: '定位状态',
                measurementValue: getPositingStatus(dataValue.substring(0, 2))
            })
            measurementArray.push({
                timestamp: collectTime,
                measurementId: '4200',
                type: '事件状态',
                measurementValue: getEventStatus(dataValue.substring(2, 8))
            })
            if (!isNaN(parseFloat(getSensorValue(dataValue.substring(16, 20), 10)))) {
                measurementArray.push({
                    timestamp: collectTime,
                    measurementId: '4097',
                    type: '空气温度',
                    measurementValue: '' + getSensorValue(dataValue.substring(16, 20), 10)
                })
            }
            if (!isNaN(parseFloat(getSensorValue(dataValue.substring(20, 24))))) {
                measurementArray.push({
                    timestamp: collectTime,
                    measurementId: '4199',
                    type: '光照',
                    measurementValue: '' + getSensorValue(dataValue.substring(20, 24))
                })
            }
            measurementArray.push({
                timestamp: collectTime,
                measurementId: '3000',
                type: '电池电量',
                measurementValue: '' + getBattery(dataValue.substring(24, 26))
            })
            break
    }
    return measurementArray
}

function getMotionId (str) {
    return getInt(str)
}

function getPositingStatus (str) {
    let status = getInt(str)
    switch (status) {
        case 0:
            return {id:status, statusName:"定位成功。"}
        case 1:
            return {id:status, statusName:"GNSS扫描超时，未能获取位置。"}
        case 2:
            return {id:status, statusName:"Wi-Fi扫描超时，未能获取位置。"}
        case 3:
            return {id:status, statusName:"Wi-Fi + GNSS扫描超时，未能获取位置。"}
        case 4:
            return {id:status, statusName:"GNSS + Wi-Fi扫描超时，未能获取位置。"}
        case 5:
            return {id:status, statusName:"蓝牙扫描超时，未能获取位置。"}
        case 6:
            return {id:status, statusName:"蓝牙 + Wi-Fi扫描超时，未能获取位置。"}
        case 7:
            return {id:status, statusName:"蓝牙 + GNSS扫描超时，未能获取位置。"}
        case 8:
            return {id:status, statusName:"蓝牙 + Wi-Fi + GNSS扫描超时，未能获取位置。"}
        case 9:
            return {id:status, statusName:"位置服务器解析GNSS位置失败。"}
        case 10:
            return {id:status, statusName:"位置服务器解析Wi-Fi位置失败。"}
        case 11:
            return {id:status, statusName:"位置服务器解析蓝牙位置失败。"}
        case 12:
            return {id:status, statusName:"由于精度较差，解析GNSS位置失败。"}
        case 13:
            return {id:status, statusName:"时间同步失败。"}
        case 14:
            return {id:status, statusName:"由于历书过期，获取位置失败。"}
    }
    return getInt(str)
}

function getUpShortInfo (messageValue) {
    return [
        {
            measurementId: '3000', type: '电池电量', measurementValue: getBattery(messageValue.substring(0, 2))
        }, {
            measurementId: '3502', type: '固件版本', measurementValue: getSoftVersion(messageValue.substring(2, 6))
        }, {
            measurementId: '3001', type: '硬件版本', measurementValue: getHardVersion(messageValue.substring(6, 10))
        }, {
            measurementId: '3940', type: '工作模式', measurementValue: getWorkingMode(messageValue.substring(10, 12))
        }, {
            measurementId: '3965', type: '定位策略', measurementValue: getPositioningStrategy(messageValue.substring(12, 14))
        }, {
            measurementId: '3942', type: '心跳间隔', measurementValue: getMinsByMin(messageValue.substring(14, 18))
        }, {
            measurementId: '3943', type: '周期间隔', measurementValue: getMinsByMin(messageValue.substring(18, 22))
        }, {
            measurementId: '3944', type: '事件间隔', measurementValue: getMinsByMin(messageValue.substring(22, 26))
        }, {
            measurementId: '3945', type: '传感器启用', measurementValue: getInt(messageValue.substring(26, 28))
        }, {
            measurementId: '3941', type: 'SOS模式', measurementValue: getSOSMode(messageValue.substring(28, 30))
        }
    ]
}

function getMotionSetting (str) {
    return [
        {measurementId: '3946', type: '运动启用', measurementValue: getInt(str.substring(0, 2))},
        {measurementId: '3947', type: '任意运动阈值', measurementValue: getSensorValue(str.substring(2, 6), 1)},
        {measurementId: '3948', type: '运动开始间隔', measurementValue: getMinsByMin(str.substring(6, 10))},
    ]
}

function getStaticSetting (str) {
    return [
        {measurementId: '3949', type: '静止启用', measurementValue: getInt(str.substring(0, 2))},
        {measurementId: '3950', type: '设备静止超时', measurementValue: getMinsByMin(str.substring(2, 6))}
    ]
}

function getShockSetting (str) {
    return [
        {measurementId: '3951', type: '冲击启用', measurementValue: getInt(str.substring(0, 2))},
        {measurementId: '3952', type: '冲击阈值', measurementValue: getInt(str.substring(2, 6))}
    ]
}

function getTempSetting (str) {
    return [
        {measurementId: '3953', type: '温度启用', measurementValue: getInt(str.substring(0, 2))},
        {measurementId: '3954', type: '事件温度间隔', measurementValue: getMinsByMin(str.substring(2, 6))},
        {measurementId: '3955', type: '事件温度采样间隔', measurementValue: getSecondsByInt(str.substring(6, 10))},
        {measurementId: '3956', type: '温度最大阈值', measurementValue: getSensorValue(str.substring(10, 14), 10)},
        {measurementId: '3957', type: '温度最小阈值', measurementValue: getSensorValue(str.substring(14, 18), 10)},
        {measurementId: '3958', type: '温度警告类型', measurementValue: getInt(str.substring(18, 20))}
    ]
}

function getLightSetting (str) {
    return [
        {measurementId: '3959', type: '光照启用', measurementValue: getInt(str.substring(0, 2))},
        {measurementId: '3960', type: '事件光照间隔', measurementValue: getMinsByMin(str.substring(2, 6))},
        {measurementId: '3961', type: '事件光照采样间隔', measurementValue: getSecondsByInt(str.substring(6, 10))},
        {measurementId: '3962', type: '光照最大阈值', measurementValue: getSensorValue(str.substring(10, 14), 10)},
        {measurementId: '3963', type: '光照最小阈值', measurementValue: getSensorValue(str.substring(14, 18), 10)},
        {measurementId: '3964', type: '光照警告类型', measurementValue: getInt(str.substring(18, 20))}
    ]
}

function getShardFlag (str) {
    let bitStr = getByteArray(str)
    return {
        count: parseInt(bitStr.substring(0, 4), 2),
        index: parseInt(bitStr.substring(4), 2)
    }
}

function getBattery (batteryStr) {
    return loraWANV2DataFormat(batteryStr)
}
function getSoftVersion (softVersion) {
    return `${loraWANV2DataFormat(softVersion.substring(0, 2))}.${loraWANV2DataFormat(softVersion.substring(2, 4))}`
}
function getHardVersion (hardVersion) {
    return `${loraWANV2DataFormat(hardVersion.substring(0, 2))}.${loraWANV2DataFormat(hardVersion.substring(2, 4))}`
}

function getSecondsByInt (str) {
    return getInt(str)
}

function getMinsByMin (str) {
    return getInt(str)
}

function getSensorValue (str, dig) {
    if (str === '8000') {
        return null
    } else {
        return loraWANV2DataFormat(str, dig)
    }
}

function bytes2HexString (arrBytes) {
    var str = ''
    for (var i = 0; i < arrBytes.length; i++) {
        var tmp
        var num = arrBytes[i]
        if (num < 0) {
            tmp = (255 + num + 1).toString(16)
        } else {
            tmp = num.toString(16)
        }
        if (tmp.length === 1) {
            tmp = '0' + tmp
        }
        str += tmp
    }
    return str
}
function loraWANV2DataFormat (str, divisor = 1) {
    let strReverse = bigEndianTransform(str)
    let str2 = toBinary(strReverse)
    if (str2.substring(0, 1) === '1') {
        let arr = str2.split('')
        let reverseArr = arr.map((item) => {
            if (parseInt(item) === 1) {
                return 0
            } else {
                return 1
            }
        })
        str2 = parseInt(reverseArr.join(''), 2) + 1
        return '-' + str2 / divisor
    }
    return parseInt(str2, 2) / divisor
}

function bigEndianTransform (data) {
    let dataArray = []
    for (let i = 0; i < data.length; i += 2) {
        dataArray.push(data.substring(i, i + 2))
    }
    return dataArray
}

function toBinary (arr) {
    let binaryData = arr.map((item) => {
        let data = parseInt(item, 16)
            .toString(2)
        let dataLength = data.length
        if (data.length !== 8) {
            for (let i = 0; i < 8 - dataLength; i++) {
                data = `0` + data
            }
        }
        return data
    })
    return binaryData.toString().replace(/,/g, '')
}

function getSOSMode (str) {
    return loraWANV2DataFormat(str)
}

function getMacAndRssiObj (pair) {
    let pairs = []
    if (pair.length % 14 === 0) {
        for (let i = 0; i < pair.length; i += 14) {
            let mac = getMacAddress(pair.substring(i, i + 12))
            if (mac) {
                let rssi = getInt8RSSI(pair.substring(i + 12, i + 14))
                pairs.push({mac: mac, rssi: rssi})
            } else {
                continue
            }
        }
    }
    return pairs
}

function getMacAddress (str) {
    if (str.toLowerCase() === 'ffffffffffff') {
        return null
    }
    let macArr = []
    for (let i = 1; i < str.length; i++) {
        if (i % 2 === 1) {
            macArr.push(str.substring(i - 1, i + 1))
        }
    }
    let mac = ''
    for (let i = 0; i < macArr.length; i++) {
        mac = mac + macArr[i]
        if (i < macArr.length - 1) {
            mac = mac + ':'
        }
    }
    return mac
}

function getInt8RSSI (str) {
    return loraWANV2DataFormat(str)
}

function getInt (str) {
    return parseInt(str, 16)
}

function getEventStatus (str) {
    // return getInt(str)
    let bitStr = getByteArray(str)
    let bitArr = []
    for (let i = 0; i < bitStr.length; i++) {
        bitArr[i] = bitStr.substring(i, i + 1)
    }
    bitArr = bitArr.reverse()
    let event = []
    for (let i = 0; i < bitArr.length; i++) {
        if (bitArr[i] !== '1') {
            continue
        }
        switch (i){
            case 0:
                event.push({id:1, eventName:"开始移动事件。"})
                break
            case 1:
                event.push({id:2, eventName:"结束移动事件。"})
                break
            case 2:
                event.push({id:3, eventName:"静止事件。"})
                break
            case 3:
                event.push({id:4, eventName:"冲击事件。"})
                break
            case 4:
                event.push({id:5, eventName:"温度事件。"})
                break
            case 5:
                event.push({id:6, eventName:"光照事件。"})
                break
            case 6:
                event.push({id:7, eventName:"SOS事件。"})
                break
            case 7:
                event.push({id:8, eventName:"单次按压事件。"})
                break
        }
    }
    return event
}

function getByteArray (str) {
    let bytes = []
    for (let i = 0; i < str.length; i += 2) {
        bytes.push(str.substring(i, i + 2))
    }
    return toBinary(bytes)
}

function getWorkingMode (workingMode) {
    return getInt(workingMode)
}

function getPositioningStrategy (strategy) {
    return getInt(strategy)
}

function getUTCTimestamp(str){
    return parseInt(loraWANV2PositiveDataFormat(str)) * 1000
}

function loraWANV2PositiveDataFormat (str, divisor = 1) {
    let strReverse = bigEndianTransform(str)
    let str2 = toBinary(strReverse)
    return parseInt(str2, 2) / divisor
}
```
</details>

### 检查数据

当设备尝试连接到网络时，呼吸灯会闪烁。如果设备成功加入网络，呼吸灯会快速闪烁，并播放一段轻快的旋律。

然后，您可以在 Helium 控制台上检查数据。

## 注意

:::caution 注意
对于使用 **EU868**/**RU864** 区域的用户：

**不建议**将上传间隔设置为少于 4 分钟。

如果您将上传间隔设置为少于 4 分钟，可能会注意到设备上行数据的时间戳与当前时间不一致。
:::

**原因如下**：

根据 [1% 占空比](https://www.thethingsnetwork.org/docs/lorawan/duty-cycle/#maximum-duty-cycle) 的限制，在 EU868 区域，设备每次上行传输后必须耐心等待大约 4 分钟。此外，Helium 网络仅在累积了 20 个连续的、带有 [ADR](https://docs.helium.com/console/profiles/#adr-algorithm) 位设置为 1 的上行数据包后，才会启动数据速率和功率校正。

因此，如果您设置的上传间隔少于 4 分钟，实时数据将暂时存储在 RAM 中，直到 Helium 网络触发数据速率和功率校正后再上传。

## ChirpStack LNS

对于新用户，要从 Helium 网络接收设备的数据，设备必须与 LNS（LoRaWAN 网络服务器）关联，通常使用 [公共 LNS](https://docs.helium.com/iot/find-a-lns-provider/) 之一，其中许多使用 **ChirpStack**，但也可以将自己的 LNS 连接到 Helium。

对于熟悉一般流程的用户，简要步骤如下：

- 创建一个具有适当区域和编解码器的设备配置文件（请参见下文来源）<br/>
- 使用 `devEUI`、`appKey` 和一个名为 `app_eui` 的变量（值为 AppEUI）创建设备，这三个值均来自 `SenseCraft` 应用程序

### 添加设备配置文件

第一步是在您的 ChirpStack LNS 中为 T1000 追踪器添加设备配置文件。这将告诉 LNS 如何解码从 T1000 接收到的数据包以及其他一些设置。

在 ChirpStack 仪表板中选择 `Device Profiles`，然后点击 `Add device profile`。

![image](https://github.com/user-attachments/assets/7e6984e2-178b-446e-afda-29dd033c662f)

在常规选项卡中，输入一个您能识别的设备配置文件名称，并选择适当的区域参数。

LoRaWAN MAC 版本：`1.0.4`<br/>

您也可以设置预期的上行间隔，其主要作用是控制 LNS 用户界面显示设备为活动或非活动状态。它对通过 LNS 的数据包传递没有影响。

![image](https://github.com/user-attachments/assets/bb83141f-a447-437b-a29d-27e16a20ce7a)

在 Codec 选项卡中选择 `JavaScript functions`，并输入编解码器：

:::tip
ChirpStack 有两个版本，请选择适合您的版本：

[ChirpStack V4 的解码器](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/TTN/SenseCAP_T1000_TTN_Decoder.js)

[ChirpStack V3 的解码器](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/ChirpStack/SenseCAP_T1000_ChirpStackV3_Decoder.js)
:::

![image](https://github.com/user-attachments/assets/bc572786-9853-4b29-baf1-d6f4349b4aa5)

### 添加应用程序和设备

下一步是创建一个应用程序并向其中添加实际设备。

进入 `Applications` 部分并添加一个新应用程序。

![image](https://github.com/user-attachments/assets/5dc700c6-7faa-4d65-9d94-aa2543f06254)

然后向应用程序添加一个设备，并输入之前在 SenseCraft 应用程序中获取的 `devEUI`。

![image](https://github.com/user-attachments/assets/93febc5b-bc8f-430b-83e0-55d89690355c)

在变量选项卡中添加一个名为 `app_eui` 的变量，其值为 SenseCraft 应用程序中的 `AppEUI`：

![image](https://github.com/user-attachments/assets/90e529d7-811b-49cd-902d-85e36b2f6313)

点击提交后，将显示一个页面，要求输入 `AppKey`，再次使用之前通过 SenseCraft 应用程序获取的值：

![image](https://github.com/user-attachments/assets/db33a84c-c31f-402f-b9b1-53fa47fc497d)

### 查看设备连接

在 `LoRaWAN frames` 选项卡中，您将看到一个加载动画，然后会显示接收/发送的数据包。

按下 T1000 追踪器的按钮，使其进行测量并发送一个 `join request` 以连接到 LNS。一旦完成，您应该会看到如下内容：

![image](https://github.com/user-attachments/assets/060873cb-c1d8-40bd-9ad3-7333966d3558)

完成加入过程后，T1000 将发送数据。LNS 会返回一些关于网络频率等的信息，但随后应该只有带有数据的上行数据包。

## 资源

[SenseCAP T1000 追踪器解码器用于 Helium](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/Helium/SenseCAP_T1000_Helium_Decoder.js)