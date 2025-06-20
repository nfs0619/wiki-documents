---
description: Data_OpenStream_API_Quickstart
title: Data OpenStream API Reference
keywords:
- Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
slug: /Cloud_Chain/SenseCAP_API/Data_OpenStream_API/Data_OpenStream_API_Reference
last_update:
  date: 02/14/2023
  author: Matthew
---

# Data OpenStream API Reference

## The Connection Information

- Host: China Station: sensecap-openstream.seeed.cn Global Station: sensecap-openstream.seeed.cc
- Port: 1883 for MQTT, or 8083 for MQTT Over WebSocket
- ClientID: org-&lt;Organization ID&gt;-&lt;Random ID&gt;，replace &lt;Organization ID&gt; with you got from SenseCAP Portal, and replace &lt;Random ID&gt; with you randomly generated Numbers and lowercase letters.
- Username: org-&lt;Organization ID&gt;，replace &lt;Organization ID&gt; with you got from dashboard (refer to the quickstart).
- Password: Get Access API keys on your SenseCAP Portal “security /API Access Key” (refer to the quickstart).

## Publish And Subscribe Model

SenseCAP OpenStream API implements “Publish And Subscribe Model”，as the MQTT protocol does。You can connect your server to SenseCAP OpenStream API through MQTT or MQTT Over WebSocket to communicate with the standard pub-sub protocol。

You can “subscribe” to receive messages。“subscribe” is the most common way to continuously monitor the telemetry data from devices。

## Message Topic

### Receive Device's Telemeasuring Data

Topic Format: `/device_sensor_data/&lt;OrgID&gt;/&lt;DeviceEUI&gt;/&lt;Channel&gt;/&lt;Reserved&gt;/&lt;MeasurementID&gt;`

| Field         | Description                                                                 |
|---------------|-----------------------------------------------------------------------------|
| OrgID         | Your “Organization ID”, you can find this on SenseCAP Portal. You own a unique Organization ID, and all the topics will need it. |
| DeviceEUI     | Unique identification of device                                              |
| Channel       | A physical socket on the device for a sensor to be connected                |
| Reserved      | Reserved                                                                    |
| MeasurementID | Please refer to “List of Measurement IDs” in this documentation             |

> **Note:** “+” means that there is no filtering condition for this field, matching all possible configurations. So, `/+/+/+/+` means to listen for all “&lt;DeviceEUI&gt;”, “&lt;Channel&gt;”, “&lt;SensorEUI&gt;”, “&lt;MeasurementID&gt;”

Topic can specify filtering conditions to implement listening on specified devices, channels and measurement types. For example, you can only listen for Device whose device ID is “2F000000000000”, then you can replace the &lt;DeviceEUI&gt; field with 2F000000000000.

The “2F000000000000” in this example must be a device that you have already bound to your account. And you should always remember to replace &lt;OrgID&gt; with your own “Organization ID”。

#### Message Body

```json
{
    "value": "437",
    "timestamp": "1544151922137"
}
```

This is a sensor measurement data uploaded by a device, which conforms to the JSON format and can be parsed by JSON parser. In general, for most functional requirements, a body needs to be used in conjunction with some fields in the topic.

| Field     | Description                                 |
|-----------|---------------------------------------------|
| value     | Sensor's Measurement Value                  |
| timestamp | The collection timestamp of the data, unit millisecond |

### Receive Device's Status Data

Topic Format: `/device_status_event/&lt;OrgID&gt;/&lt;DeviceEUI&gt;/&lt;Reserved&gt;/&lt;StatusID&gt;`

| Field     | Description                                 |
|-----------|---------------------------------------------|
| OrgID     | Your “Organization ID”, you can find this on SenseCAP Portal. You own a unique Organization ID, and all the topics will need it. |
| DeviceEUI | Unique identification of device              |
| Reserved  | Reserved                                    |
| StatusID  | Please refer to “List of Device Status IDs” in this documentation |

Subscribe to the required StatusID according to the list of device state IDs to avoid subscribing to unexpected IDs

#### Message Body

```json
{
    "value": "437",
    "timestamp": "1544151922137"
}
```

| Field     | Description                                 |
|-----------|---------------------------------------------|
| value     | Sensor's Status Value                       |
| timestamp | The collection timestamp of the data, unit millisecond |
