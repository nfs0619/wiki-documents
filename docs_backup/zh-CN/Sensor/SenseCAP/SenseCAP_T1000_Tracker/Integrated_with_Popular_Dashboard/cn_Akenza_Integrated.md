---
description: 将 SenseCAP T1000 追踪器连接到 Akenza
title: Akenza 集成（通过 TTS）
keywords:
- 追踪器
- Akenza
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_T1000_Tracker_Akenza
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

[Akenza](https://akenza.io/) 是一个物联网应用赋能平台，允许您构建具有价值的物联网产品和服务。它可以连接、控制和管理物联网设备，所有功能集成在一个平台中。

在本教程中，您将学习如何将 Seeed 的 [SenseCAP T1000 追踪器](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) 与 TTN 集成到 Akenza 中。
​
<div align="right">
由 Akenza 团队撰写
</div>

[来源](https://docs.akenza.io/akenza.io/tutorials/add-devices/how-to-integrate-the-seeed-sensecap-t1000-tracker-on-akenza)

<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FBvnwVdfDW4JXHXEbrjs3%2FT1000%20tracker.png?alt=media&token=dedacd81-e952-4e83-90bf-f004e99adc08" alt="pir" width={400} height="auto" /></p>


:::info
**应用场景**：
室内/室外资产追踪，适用于多种使用场景：<br/>
国际资产追踪<br/>
设备监控<br/>
共享设备追踪等<br/>
个人安全场景（养老院、搜救），得益于 SOS 按钮和内置蜂鸣器。<br/>

**产品特点**：<br/>
室内和室外三种定位技术：GNSS、蓝牙和 Wi-Fi<br/>
温度、光线和运动传感器<br/>
SOS 按钮和蜂鸣器<br/>
卡片大小的设备，仅 6.5mm 厚度
:::


### 入门指南

在本教程中，您将学习如何使用物联网连接提供商 The Things Network (TTN) 在 Akenza 上注册 Seeed 的 T1000 追踪器。

:::info
我们假设您没有现有的 TTN 账户，并将使用 Akenza 的 [Connectivity-as-a-Service](https://docs.akenza.io/akenza.io/get-started/your-integration) 来连接设备。

如果您已经拥有 TTN 账户，当然可以通过我们的 [集成面板](https://docs.akenza.io/akenza.io/get-started/your-integration#2.-integrations)直接同步。
:::

要在平台上注册新设备，您需要创建一个 `数据流`，它定义了 Akenza 中的数据处理链。

### 创建数据流

#### 设备连接器

要创建 **数据流**，请转到 `数据流` 并选择 `创建数据流`。

选择 `LoRa` 作为您的设备连接器。如果您已集成 TTN 账户，它将显示在此处。如果您没有自己的账户，可以使用 Akenza 的 [Connectivity-as-a-Service](https://docs.akenza.io/akenza.io/get-started/your-integration)。

选择 The Things Network。
<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FBNwN5xlVesDpVxHQ3H4d%2FT1000-DF.png?alt=media&token=540e39fd-bea3-46dd-84a7-6af601e772f7" alt="pir" width={800} height="auto" /></p>

#### 设备类型

**设备类型**指定了解码设备数据所需的有效负载解码器。

使用搜索字段找到 **T1000** 设备并相应选择设备类型。继续到输出连接器。

<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FUuglz0pXA3SEsX59cdxJ%2FT1000-DF-2.png?alt=media&token=16c0dd80-f402-4477-857b-b0de9601b27b" alt="pir" width={800} height="auto" /></p>

#### 输出连接器

为您的数据流选择一个或多个输出连接器。**输出连接器**定义了设备数据的存储和/或处理位置。

选择 **Akenza DB**。

通过连接到 Akenza DB，我们确保所有通过此数据流的数据都存储在 Akenza 数据库中，从而可以供您访问。保存您的 **数据流** 并为其命名。

<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FSOGhuXN5SrmIMjchCCJP%2FT1000-DF-3.png?alt=media&token=7e43e9ab-1a9a-4609-b1c7-36ceeaf71635" alt="pir" width={800} height="auto" /></p>


### 连接 Seeed 的 T1000 设备

要创建新设备，请在资产清单菜单中选择 `创建设备`。添加设备名称以及可选的描述、[标签](https://docs.akenza.io/akenza.io/get-started/create-new-device/how-to-use-tags-on-akenza)或[自定义字段](https://docs.akenza.io/akenza.io/get-started/create-new-device/how-to-use-custom-fields-on-akenza)。

<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FI6gtMgKsAlazzNMO2Umz%2FT1000-CD-1.png?alt=media&token=ef5c5b56-1409-4b89-8893-66ca3bdb5822" alt="pir" width={800} height="auto" /></p>

在下一步中，选择您之前创建的 **数据流**。
​<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FVPZ35a4DKdujIqlP84gR%2FT1000-CD-2.png?alt=media&token=73ced82f-ea7b-436c-a42d-36dc44ec3f12" alt="pir" width={800} height="auto" /></p>

现在填写有关您的 T1000 追踪器的所有 **连接参数**。这些参数由设备制造商提供。

通过点击创建设备完成流程。

您的 T1000 追踪器设备现在将显示在 **资产清单概览**中。

要检查设备的传入数据，请从列表中选择您的设备，并在 **数据概览** 中查看状态。

​<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2Fllgd7HtP8VBZbAgeNU4M%2FT1000-Asset.png?alt=media&token=2665b736-aed6-4533-b7bb-aaa5542f5d67" alt="pir" width={800} height="auto" /></p>

**恭喜您**，您已成功通过 TTN LoRaWAN 网络在 akenza 上连接了 Seeed SenseCAP T1000-A 追踪器！

### 如何通过蓝牙配置追踪器

Seeed 提供的 SenseCAP Mate 应用程序允许您配置追踪器的不同工作模式和其他设置。<br/> 
对于 iOS，请在 App Store 中搜索“SenseCAP Mate”并下载。<br/>
对于 Android，请在 Google Store 中搜索“SenseCAP Mate”并下载。<br/>
有关不同工作模式和配置设置的详细说明，请参考设备的 [用户指南](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker/SenseCAP_Tracker_T1000-AB_User_Guide.pdf)。

### 如何通过 LoRa 下行链路配置追踪器

除了使用移动应用程序，您还可以使用 [下行链路](https://docs.akenza.io/akenza.io/get-started/connectors/downlink) 数据包直接配置 T1000 追踪器。<br/>
为此，请导航到追踪器的设备详细信息页面并选择“Downlink”选项卡。<br/>
只需输入正确的 HEX 负载和端口号，然后点击“Send message”即可。<br/>
有关不同工作模式和配置设置的详细说明，请参考设备的 [用户指南](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker/SenseCAP_Tracker_T1000-AB_User_Guide.pdf)。

​<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2F5KtoZmSstaZQ7vMLevdo%2FT1000-downlink.png?alt=media&token=e8d29de7-9b7a-4c57-8376-443ceb8c9ee1" alt="pir" width={800} height="auto" /></p>

### 🚀进一步探索地理围栏和地图视图功能

现在您已经从设备接收到位置信息，您可以利用 akenza 的其他资产追踪功能，例如地理围栏逻辑块和仪表板构建器。

#### 地理围栏逻辑块

通过我们的无代码地理围栏模块，根据设备的位置创建动作和通知。

只需指定一个数据输入（在本例中为 T1000 追踪器），添加地理围栏模块，创建自定义围栏，最后定义当设备进入或离开围栏时触发的动作。

​<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FhlQoCpjhK7JyUYmUTGSg%2FT1000-geofense.png?alt=media&token=835f6423-4474-44d6-8712-cd6c500e6f7f" alt="pir" width={800} height="auto" /></p>

#### Dashboard 构建器的地图视图

通过仪表板构建器的地图组件实时显示 T1000 追踪器的位置。

只需进入 Dashboard 构建器并创建一个新的仪表板。或者，您可以使用资产追踪模板作为起点。添加一个地图组件并选择 T1000 追踪器作为数据源。选择传感器的纬度和经度读数，并根据需要添加其他标记数据点（例如电池电量）。

现在，您可以在地图上实时跟踪您的资产，甚至可以通过点击设备图标旁边的“Track”按钮显示它们的路径。

​<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FaCi1AyERgs0q0L1Gidjq%2FT1000-map.png?alt=media&token=5d461816-1e73-48ab-bbd8-3edb8bc139f8" alt="pir" width={800} height="auto" /></p>