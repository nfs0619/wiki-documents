---
description: SenseCAP_T1000_tracker_and_InfluxDB_Integrated
title: InfluxDB 集成（通过 TTS）
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_T1000_tracker_InfluxDB_TTS
last_update:
  date: 05/15/2025
  author: Jessie
---

# MQTT broker URLs 使用的格式为 scheme://host:port，scheme 可以是 tcp、ssl 或 ws。

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

[InfluxDB](https://docs.influxdata.com/influxdb/v2.0/get-started/) 是一个开源的时间序列数据库，专注于高性能读取、高性能写入、高效存储以及海量时间序列数据的实时分析。除了支持 HTTP 和 UDP 等原生协议外，它还兼容 CollectD、Graphite、OpenTSDB 和 Prometheus 等组件的通信协议。广泛应用于 DevOps 监控、物联网监控、实时分析等场景。

本章节内容将指导用户如何通过 TTN 将 [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) 连接到 InfluxDB。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/influx_sense.png" alt="pir" width={800} height="auto" /></p>

在开始设置之前，请先查看 [连接 SenseCAP T1000 到 TTS](https://wiki.seeedstudio.com/SenseCAP_T1000_tracker_TTN)，以确保您的 SenseCAP T1000 Tracker 已成功连接到 TTS。

## 准备工作

在设置 InfluxDB 之前，我们需要安装 Telegraf 代理（版本 1.9.2 或更高）。

[Telegraf 配置](https://docs.influxdata.com/influxdb/v2.0/telegraf-configs/)

## 设置 InfluxDB Cloud

登录到您的 [InfluxDB Cloud](https://us-east-1-1.aws.cloud2.influxdata.com/)。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/buckets.png" alt="pir" width={800} height="auto" /></p>

### 创建 Bucket

在 **Buckets** 标签页中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/buckets.png" alt="pir" width={800} height="auto" /></p>

点击 **Create Bucket** 按钮以创建一个新的 bucket。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/createbucket.png" alt="pir" width={800} height="auto" /></p>

为您的 bucket 命名，选择数据在数据库中保留的时间，然后点击 **Create**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_done.png" alt="pir" width={800} height="auto" /></p>

### 生成 Tokens

导航到 **API TOKENS** 标签页，点击 **GENERATE API TOKEN** 按钮以创建一个 token。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/get_token.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_done.png" alt="pir" width={800} height="auto" /></p>

## 配置 Telegraf

### MQTT 集成

本节将展示如何使用 MQTT Consumer 插件配置您的 Telegraf 代理，以连接到 TTS MQTT 服务器。

导航到 **TELEGRAF** 标签页并点击 **CREATE CONFIGURATION**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/telegraf.png" alt="pir" width={800} height="auto" /></p>

选择我们之前创建的 bucket，并选择系统。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_telegraf.png" alt="pir" width={800} height="auto" /></p>

为您的配置命名，选择 Create and Verify，然后点击 Finish。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/download_config.png" alt="pir" width={800} height="auto" /></p>

按照 InfluxDB Cloud 2.0 设置中描述的步骤下载 Telegraf 配置文件后，更新文件并添加以下内容，并根据您的 MQTT 服务器信息进行修改：

```cpp
[[inputs.mqtt_consumer]]
#

  servers = ["tcp://localhost:1883"]
#
# 订阅的主题
  topics = ["#"]
#
# 用户名和密码
  username = "example"
  password = "NNSXS.JNSBLIV34VXYXS7D4ZWV2IKPTGJM3DFRGO.........."
#
# 仅当您的 payload 类型为字符串时需要，因为 Telegraf 默认不转发此类型的数据
  json_string_fields = ["uplink_message_frm_payload"]
#
# 定义消息格式
  data_format = "json"
```

:::info
您可以在以下标签页中查看 TTS 信息。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/TTS_info.png" alt="pir" width={800} height="auto" /></p>

接下来，您需要从 Tokens 标签页复制之前生成的 token，并将其导出为环境变量以供 InfluxDB 输出插件使用，或者直接将其作为 token 值传递到配置文件中。您可以使用以下命令在终端中设置环境变量：

```cpp
INFLUX_TOKEN="在此粘贴您的 token"
```

在终端中运行 Telegraf 代理，使用以下命令：

```cpp
telegraf --config /path/to/custom/telegraf.conf
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/connected_MQTT.png" alt="pir" width={800} height="auto" /></p>

### HTTP 集成

本节将展示如何使用 HTTP Listener v2 插件配置 Telegraf 代理，以及如何在 The Things Stack 上创建对应的 Webhook 集成。

按照 InfluxDB Cloud 2.0 设置中描述的步骤更新您之前下载的 Telegraf 配置文件，添加以下内容并根据您的设置进行修改：

```cpp
[[inputs.http_listener_v2]]
#
# 托管 HTTP 监听器的地址和端口
  service_address = ":8080"
#
# 监听的路径
  path = "/telegraf"
#
# 接受的 HTTP 方法
  methods = ["POST"]
#
# 仅当您的 payload 类型为字符串时需要，因为 Telegraf 默认不转发此类型的数据
  json_string_fields = ["uplink_message_frm_payload"]
#
# 定义消息格式
  data_format = "json"
```

从 Tokens 标签页复制生成的 token，并将其用作 Telegraf 配置文件中输出插件的 token 值，或者使用以下命令在终端中将其导出为环境变量：

```cpp
INFLUX_TOKEN="在此处粘贴您的令牌"
```

通过在终端运行以下命令启动 Telegraf 代理：

```cpp
telegraf --config /path/to/custom/telegraf.conf
```

## 数据浏览器

选择您的浏览器类型，在过滤窗口的下拉菜单中选择 **_measurement**，然后勾选 **mqtt_consumer** 选项。接着，您可以选择您希望监控的主题和参数。

**位置数据**

FROM: 您的 bucket <br />
MEASUREMENT: matt_sonsumer <br />
_field: uplink_message_decoded_payload <br />
topic: v3/...

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map-done.png" alt="pir" width={800} height="auto" /></p>

您还可以点击右上角的 **SAVE AS** 按钮，将此浏览器保存为 Dashboard 的一个单元格。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/saveas.png" alt="pir" width={800} height="auto" /></p>

## 仪表板（可选）

仪表板是您实时可视化和交互数据的地方。您可以根据自己的需求自定义仪表板。

导航到 **Dashboard** 标签页并点击 **Create Dashboard**。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_dashboard.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/influx_dashbaord.png" alt="pir" width={800} height="auto" /></p>