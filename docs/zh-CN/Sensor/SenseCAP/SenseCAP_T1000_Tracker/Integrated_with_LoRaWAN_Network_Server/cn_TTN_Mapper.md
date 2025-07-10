---
description: SenseCAP_Tracker_T1000-A/B_TTN_Mapper
title: TTN Mapper 配置
keywords:
- Tracker
- TTN
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ttn_mapper_for_SenseCAP_T1000
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

[TTN Mapper](https://ttnmapper.org/) 是一个用于映射连接到 The Things Stack 的网关网络覆盖范围的便捷工具。有关更多详细信息，请查看官方 [TTN Mapper 文档站点](https://docs.ttnmapper.org/)。

本教程将指导用户将 [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) 添加到 TTN Mapper。

为了探索下一步，请先参考 [连接到 The Things Network](https://wiki.seeedstudio.com/SenseCAP_T1000_tracker_TTN/) 注册您的设备。

### 配置 Payload 格式化器

创建一个 `自定义 JavaScript 格式化器` 并复制以下代码。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/decoder.png" alt="pir" width={800} height="auto" /></p>

<details>

<summary>TTN Mapper 解码器</summary>

```cpp
function decodeUplink (input) {
    const bytes = input['bytes']
    const fport = parseInt(input['fPort'])
    const bytesString = bytes2HexString(bytes)
    const originMessage = bytesString.toLocaleUpperCase()
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
                if (element.measurementId === '4197') {
                    decoded.longitude = element.measurementValue
                }
                if (element.measurementId === '4198') {
                    decoded.latitude = element.measurementValue
                }
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
                {measurementId: '3941', type: 'SOS 模式', measurementValue: getSOSMode(dataValue.substring(16, 18))},
                {measurementId: '3900', type: '上行间隔', measurementValue: interval}
            ]
            break;
        case '05':
            measurementArray = [
                {measurementId: '3000', type: '电池', measurementValue: getBattery(dataValue.substring(0, 2))},
                {measurementId: '3940', type: '工作模式', measurementValue: getWorkingMode(dataValue.substring(2, 4))},
                {measurementId: '3965', type: '定位策略', measurementValue: getPositioningStrategy(dataValue.substring(4, 6))},
                {measurementId: '3941', type: 'SOS 模式', measurementValue: getSOSMode(dataValue.substring(6, 8))}
            ]
            break
        case '06':
            collectTime = getUTCTimestamp(dataValue.substring(8, 16))
            measurementArray = [
                {measurementId: '4200', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '事件状态', measurementValue: getEventStatus(dataValue.substring(0, 6))},
                {measurementId: '4197', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '经度', measurementValue: parseFloat(getSensorValue(dataValue.substring(16, 24), 1000000))},
                {measurementId: '4198', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '纬度', measurementValue: parseFloat(getSensorValue(dataValue.substring(24, 32), 1000000))},
                {measurementId: '4097', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '空气温度', measurementValue: getSensorValue(dataValue.substring(32, 36), 10)},
                {measurementId: '4199', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '光线', measurementValue: getSensorValue(dataValue.substring(36, 40))},
                {measurementId: '3000', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '电池', measurementValue: getBattery(dataValue.substring(40, 42))}
            ]
            break
        case '07':
            eventList = getEventStatus(dataValue.substring(0, 6))
            collectTime = getUTCTimestamp(dataValue.substring(8, 16))
            measurementArray = [
                {measurementId: '4200', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '事件状态', measurementValue: getEventStatus(dataValue.substring(0, 6))},
                {measurementId: '5001', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'Wi-Fi 扫描', measurementValue: getMacAndRssiObj(dataValue.substring(16, 72))},
                {measurementId: '4097', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '空气温度', measurementValue: getSensorValue(dataValue.substring(72, 76), 10)},
                {measurementId: '4199', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '光线', measurementValue: getSensorValue(dataValue.substring(76, 80))},
                {measurementId: '3000', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '电池', measurementValue: getBattery(dataValue.substring(80, 82))}
            ]
            break
        case '08':
            collectTime = getUTCTimestamp(dataValue.substring(8, 16))
            measurementArray = [
                {measurementId: '4200', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '事件状态', measurementValue: getEventStatus(dataValue.substring(0, 6))},
                {measurementId: '5002', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'BLE 扫描', measurementValue: getMacAndRssiObj(dataValue.substring(16, 58))},
                {measurementId: '4097', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '空气温度', measurementValue: getSensorValue(dataValue.substring(58, 62), 10)},
                {measurementId: '4199', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '光线', measurementValue: getSensorValue(dataValue.substring(62, 66))},
                {measurementId: '3000', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '电池', measurementValue: getBattery(dataValue.substring(66, 68))}
            ]
            break
        case '09':
            collectTime = getUTCTimestamp(dataValue.substring(8, 16))
            measurementArray = [
                {measurementId: '4200', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '事件状态', measurementValue: getEventStatus(dataValue.substring(0, 6))},
                {measurementId: '4197', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '经度', measurementValue: parseFloat(getSensorValue(dataValue.substring(16, 24), 1000000))},
                {measurementId: '4198', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '纬度', measurementValue: parseFloat(getSensorValue(dataValue.substring(24, 32), 1000000))},
                {measurementId: '3000', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '电池', measurementValue: getBattery(dataValue.substring(32, 34))}
            ]
            break
        case '0A':
            collectTime = getUTCTimestamp(dataValue.substring(8, 16))
            measurementArray = [
                {measurementId: '4200', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '事件状态', measurementValue: getEventStatus(dataValue.substring(0, 6))},
                {measurementId: '5001', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'Wi-Fi 扫描', measurementValue: getMacAndRssiObj(dataValue.substring(16, 72))},
                {measurementId: '3000', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '电池', measurementValue: getBattery(dataValue.substring(72, 74))}
            ]
            break
        case '0B':
            collectTime = getUTCTimestamp(dataValue.substring(8, 16))
            measurementArray = [
                {measurementId: '4200', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '事件状态', measurementValue: getEventStatus(dataValue.substring(0, 6))},
                {measurementId: '5002', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'BLE 扫描', measurementValue: getMacAndRssiObj(dataValue.substring(16, 58))},
                {measurementId: '3000', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: '电池', measurementValue: getBattery(dataValue.substring(58, 60))},
            ]
            break
        case '0D':
            let errorCode = getInt(dataValue)
            let error = ''
            switch (errorCode) {
                case 1:
                    error = '获取 UTC 时间戳失败'
                    break
                case 2:
                    error = '星历太旧'
                    break
                case 3:
                    error = '多普勒错误'
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
                type: 'gnss-ng payload',
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
                type: '光线',
                measurementValue: '' + getSensorValue(dataValue.substring(20, 24))
            })
            measurementArray.push({
                measurementId: '3000',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                groupId: groupId,
                index: shardFlag.index,
                count: shardFlag.count,
                type: '电池',
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
                type: '电池',
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
                    type: '光线',
                    measurementValue: '' + getSensorValue(dataValue.substring(20, 24))
                })
            }
            measurementArray.push({
                timestamp: collectTime,
                measurementId: '3000',
                type: '电池',
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
            return {id:status, statusName:"GNSS 扫描超时，无法获取位置。"}
        case 2:
            return {id:status, statusName:"Wi-Fi 扫描超时，无法获取位置。"}
        case 3:
            return {id:status, statusName:"Wi-Fi + GNSS 扫描超时，无法获取位置。"}
        case 4:
            return {id:status, statusName:"GNSS + Wi-Fi 扫描超时，无法获取位置。"}
        case 5:
            return {id:status, statusName:"蓝牙扫描超时，无法获取位置。"}
        case 6:
            return {id:status, statusName:"蓝牙 + Wi-Fi 扫描超时，无法获取位置。"}
        case 7:
            return {id:status, statusName:"蓝牙 + GNSS 扫描超时，无法获取位置。"}
        case 8:
            return {id:status, statusName:"蓝牙 + Wi-Fi + GNSS 扫描超时，无法获取位置。"}
        case 9:
            return {id:status, statusName:"位置服务器解析 GNSS 位置失败。"}
        case 10:
            return {id:status, statusName:"位置服务器解析 Wi-Fi 位置失败。"}
        case 11:
            return {id:status, statusName:"位置服务器解析蓝牙位置失败。"}
        case 12:
            return {id:status, statusName:"由于精度差，解析 GNSS 位置失败。"}
        case 13:
            return {id:status, statusName:"时间同步失败。"}
        case 14:
            return {id:status, statusName:"由于星历过旧，无法获取位置。"}
    }
    return getInt(str)
}

function getUpShortInfo (messageValue) {
    return [
        {
            measurementId: '3000', type: '电池', measurementValue: getBattery(messageValue.substring(0, 2))
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
            measurementId: '3941', type: 'SOS 模式', measurementValue: getSOSMode(messageValue.substring(28, 30))
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
        {measurementId: '3951', type: '震动启用', measurementValue: getInt(str.substring(0, 2))},
        {measurementId: '3952', type: '震动阈值', measurementValue: getInt(str.substring(2, 6))}
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
        {measurementId: '3959', type: '光线启用', measurementValue: getInt(str.substring(0, 2))},
        {measurementId: '3960', type: '事件光线间隔', measurementValue: getMinsByMin(str.substring(2, 6))},
        {measurementId: '3961', type: '事件光线采样间隔', measurementValue: getSecondsByInt(str.substring(6, 10))},
        {measurementId: '3962', type: '光线最大阈值', measurementValue: getSensorValue(str.substring(10, 14), 10)},
        {measurementId: '3963', type: '光线最小阈值', measurementValue: getSensorValue(str.substring(14, 18), 10)},
        {measurementId: '3964', type: '光线警告类型', measurementValue: getInt(str.substring(18, 20))}
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
                event.push({id:4, eventName:"震动事件。"})
                break
            case 4:
                event.push({id:5, eventName:"温度事件。"})
                break
            case 5:
                event.push({id:6, eventName:"光线事件。"})
                break
            case 6:
                event.push({id:7, eventName:"SOS 事件。"})
                break
            case 7:
                event.push({id:8, eventName:"按下一次事件。"})
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

### 添加 Webhook 模板

导航到 `Integrations` -> `Webhooks`，然后选择 `TTN Mapper`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/webhook-map.png" alt="pir" width={800} height="auto" /></p>

通过填写 Webhook ID 字段，为您的集成命名。

在 Email address 字段中填写一个有效的电子邮件地址，这是 TTN Mapper 接受您的数据所必需的。终端设备发送的所有数据都将与此电子邮件地址相关联，并且它将提供一些数据质量的保证。

要了解更多关于实验的信息，请阅读此处的实验部分。

最后点击 `Create TTN Mapper webhook` 按钮完成操作。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/webhook2.png" alt="pir" width={800} height="auto" /></p>

### 观察网络覆盖范围

导航到 [TTN Mapper](https://ttnmapper.org/) 并在顶部菜单中选择 `Advanced Maps`。

在 `Device data` 部分，填写 `Device ID` 字段，使用来自 The Things Stack 的设备 ID。<br/>
选择今天作为 `Start Date` 和 `End Date`。<br/>
点击 `View Map` 按钮查看来自终端设备上行数据的数据点。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/view-map.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map2.png" alt="pir" width={800} height="auto" /></p>