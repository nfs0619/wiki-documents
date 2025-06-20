---
description: Data_OpenStream_API_Quickstart
title: Data OpenStream API Quickstart
keywords:
- Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
slug: /Cloud_Chain/SenseCAP_API/Data_OpenStream_API/Data_OpenStream_API_Quickstart
last_update:
  date: 02/14/2023
  author: Matthew
---

# Data OpenStream API Quickstart

This guide will walk you through how to subscribe your devices' messages as well as how to send a command to a specific device, using Eclipse Mosquitto's CLIs to subscribe or publish messages.

## Setup

- Install or [download](https://mosquitto.org/download/) Mosquitto.

## Credentials

Browse SenseCAP Portal, navigate to "Security/Access API keys", click the "Create Access Key", and you can get the "Access API keys", set down it as &lt;Password&gt;, and also "Organization ID" as &lt;OrgID&gt;.

![access_key_en](https://sensecap-docs.seeed.cc/images/open_api/access_key_en.png)
![access_key_en_2](https://sensecap-docs.seeed.cc/images/open_api/access_key_en_2.png)
![access_key_en_3](https://sensecap-docs.seeed.cc/images/open_api/access_key_en_3.png)

## Receive Devices' Messages

Let's listen for all of your devices' messages.

1. Open a terminal window and execute the following command.
   - OrgID = Organization ID
   - Password = Access API keys

```shell
mosquitto_sub \
    -h sensecap-openstream.seeed.cn \
    -t `/device_sensor_data/&lt;OrgID&gt;/+/+/+/+` \
    -u `org-&lt;OrgID&gt;` \
    -P `<Password>` \
    -I `org-&lt;OrgID&gt;-quickstart` \
    -v
```
Please replace the Organization ID and Access API Key you just obtained with the `<OrgID>` and `<Password>` above.

2. Power up devices, while devices keep sending messages, you should receive the data like:

```text
/device_sensor_data/1234/2CF7F12000000001/1/vs/4105 {"value":2,"timestamp":1544151824139}
/device_sensor_data/xxxx/2CF7F12XXXXXXXXX/1/vs/4097 {"value":23,"timestamp":1544151900992}
/device_sensor_data/xxxx/2CF7F12XXXXXXXXX/1/vs/4101 {"value":101629,"timestamp":1544151901112}
/device_sensor_data/xxxx/2CF7F12XXXXXXXXX/1/vs/4098 {"value":71,"timestamp":1544151900992}
/device_sensor_data/xxxx/2CF7F12XXXXXXXXX/1/vs/4099 {"value":69.12,"timestamp":1544151902224}
/device_sensor_data/xxxx/2CF7F12XXXXXXXXX/1/vs/4100 {"value":437,"timestamp":1544151922137}
```

| example                | field      | description                                         |
|------------------------|------------|-----------------------------------------------------|
| 1234                   | OrgId      | Organization ID                                     |
| 2CF7F12000000001       | DeviceEUI  | Unique identification of device                     |
| 1                      | Channel    | A physical socket on the device for a sensor to be connected |
| vs                     | Reserved   | The reserved field                                  |
| 4105                   | MeasureID  | The type of measurement, 4105 is the Wind Speed     |
| 2                      | value      | Collected measurements, the Wind Speed is 2m/s      |
| 1544151824139          | timestamp  | The collection timestamp of the data                |

## Subscribe a Specific Key

Specifying a specific key enables you to subscribe to data for a particular device or channel.

Example:
Subscribe to the temperature value collected by the Air Temperature and Humidity Sensor (DeviceEUI: 2CF7F12210400083;Channel: 1;).The temperature measurement ID is 4097.
Replace `<OrgID>` as Organization ID, `<Password>` as Access API Key, execute the command:

```shell
mosquitto_sub \
    -h sensecap-openstream.seeed.cn \
    -t `/device_sensor_data/&lt;OrgID&gt;/2CF7F12210400083/1/vs/4097` \
    -u `org-&lt;OrgID&gt;` \
    -P `<Password>` \
    -I `org-&lt;OrgID&gt;-quickstart` \
    -v
```

Received the data:
```text
/device_sensor_data/521853156991/2CF7F12210400083/1/vs/4097 {"value":28,"timestamp":1561373812474}
```
Congratulations! Now you know how to monitor and receive messages via MQTT. Go build something awesome!
