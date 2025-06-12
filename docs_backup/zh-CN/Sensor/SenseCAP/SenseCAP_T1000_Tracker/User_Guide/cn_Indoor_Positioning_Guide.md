---
description: SenseCAP_Tracker_T1000-A/B_IPS
title: SenseCAP T1000 室内定位系统指南
keywords:
- Tracker
- BLE
- 定位
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/IPS_For_SenseCAP_T1000_Traker
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

本章节将为您提供如何使用 Traxmate 将 [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) 集成到室内定位解决方案中的整体指导。

[Traxmate](https://traxmate.io/) 是一个物联网平台，使您或您的客户能够轻松高效地部署全面的物联网跟踪解决方案，具备无缝的室内和室外定位、跟踪和路由功能。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/system-archi.png" alt="pir" width={800} height="auto" /></p>

## 架构概览

以下是简要总结，但请阅读本文档的其余部分以获取完整信息。

● 登录 Traxmate 并创建您的建筑物。<br/>
● 部署更多的 Wi-Fi 和/或 [E5 蓝牙定位信标](https://wiki.seeedstudio.com/bluetooth_beacon_for_SenseCAP_Traker/#deployment-guidelines)（如有需要）。<br/>
● 进行室内调查以检查您已安装的 Wi-Fi 和/或蓝牙基础设施提供的精度。<br/>
● 进行新的室内调查以验证结果。<br/>
● 重复上述步骤或开始使用室内定位解决方案。<br/>
● 将设备连接到 [TTN](https://www.thethingsnetwork.org/) 并将数据发送到 Traxmate。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/flow.png" alt="pir" width={800} height="auto" /></p>

## 部署 Wi-Fi/蓝牙信标

如果您尚未安装 Wi-Fi 接入点和/或蓝牙信标的基础设施，可以进行优化定位的部署。大多数已部署的 Wi-Fi 接入点基础设施可能是为了优化数据连接的范围和性能而放置的。在考虑定位时，请遵循以下原则：“分散布置，靠近角落和墙壁，并在需要更高精度的区域增加密度”。

:::tip
蓝牙信标通常由电池供电，因此更容易部署。Wi-Fi 接入点的范围更长。密集的蓝牙信标网格比稀疏的 Wi-Fi 接入点网格提供更高的精度。
:::

查看 [E5 蓝牙定位信标部署](https://wiki.seeedstudio.com/bluetooth_beacon_for_SenseCAP_Traker/#deployment-guidelines) 以获取更多详细信息。

## 添加地点

导航到 `Places` -> `Add New`，然后点击地图或搜索地址或名称，点击 `Add place` 弹出窗口并提交详细信息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-new-place.png" alt="pir" width={800} height="auto" /></p>

下一步是指定建筑物的楼层数量，并将楼层地图上传到您希望启用室内定位的楼层。楼层地图上传支持 PNG 和 JPEG 文件。上传文件后，您可以使用工具对其进行缩放、旋转并正确放置在地图上。还有一个工具可以沿着建筑物的形状裁剪 PNG/JPEG 文件。

设置好建筑物后，点击 `SAVE`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/buildings.png" alt="pir" width={800} height="auto" /></p>

## 进行调查

一旦添加了建筑物并上传了楼层地图，就可以使用 Traxmate App（安卓版本）进行调查。

:::note
Traxmate App 的 iOS 版本无法使用，因为 iOS 不支持第三方应用程序进行 Wi-Fi 扫描。
:::

:::tip
安卓通常限制应用程序扫描 Wi-Fi 的频率，默认设置为每 30 秒一次。为了获得更准确的调查结果，建议关闭此限制。您需要将安卓设备设置为开发者模式才能执行此操作。

进入 `Settings` > `Developer options` > 找到 "Wi-Fi scan throttling" > 禁用它（或 Settings > System > Advanced > Developer options）。<br/>
禁用 Wi-Fi 扫描限制后，您的安卓设备可以确保 NetSpot 在调查、扫描和分析无线网络区域时发挥最佳性能。<br/>
查看更多信息 [这里](https://developer.android.com/guide/topics/connectivity/wifi-scan)。
:::

打开应用并登录，选择 `Places` -> `Select your Place` -> `Select Floor` -> `Start Survey`。

应用程序将连续扫描 Wi-Fi 和蓝牙信号。您需要通过反复放置参考点来训练室内定位系统。参考点越多越好。参考点应放置在地图上代表您实际所在的位置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/survey1.png" alt="pir" width={600} height="auto" /></p>

● 您可以通过缩放和移动地图，将您所在的位置置于十字准线下放置参考点。当您瞄准正确时，点击带有加号（+）的按钮。<br/><br/>
● 然后继续行走，尽量以恒定速度直线行走。建议比正常步行速度稍慢。选择一个新的合适位置作为参考点。好的参考点是地图上容易识别的地方，例如角落、交叉路口、门、电梯、楼梯等。<br/><br/>
● 每隔 5-10 米放置一个参考点。参考点放置得越精确，室内定位的准确性就越高。<br/><br/>
● 当您完成整个区域或楼层的调查后，按下红色停止按钮停止调查。调查结果将发送到服务器端进行处理。一到几分钟内，如果调查结果有助于提高精度，将自动为您的建筑物发布新的建筑模型（详见建筑模型章节）。

## 评估当前提供的精度

完成室内测绘后，需要对结果进行评估。登录 [Traxmate 门户](https://online.traxmate.io/)，访问您场所/建筑的 Positioning 标签页。  
测绘的原始数据将由后端服务器处理，结果将以建筑模型的形式提供。最新发布的建筑模型的详细信息显示在 Positioning 标签页中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/51.png" alt="pir" width={800} height="auto" /></p>

<center><i>此图片显示中位误差为 4.33 米。已完成的测绘覆盖了建筑的 51%，Wi-Fi 和蓝牙（RF 覆盖）覆盖了建筑的 13%。</i></center>

### 建筑模型和中位误差

建筑模型是建筑内信标位置的电子表示。当用户（或多个用户）执行测绘或参考轨迹时，会生成建筑模型。一旦这些操作完成，它们将被发送到系统中计算为建筑模型。

对于每个建筑模型，都会计算一个中位误差。中位误差基于地面真实值/参考轨迹（由测绘期间放置的参考点生成）与计算轨迹（基于 Combain Location API 提供的室内定位）的差异（误差）。系统会自动选择发布最佳可用的建筑模型。“最佳”的算法基于覆盖率和中位误差的组合。

此自动过程可以通过手动发布选定的建筑模型来覆盖。建筑模型可以被编辑。用户可以添加或编辑信标以进一步增强定位效果。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/model98.png" alt="pir" width={400} height="auto" /></p>

<center><i>显示建筑 Mattehuset1 的已发布建筑模型 1892。总共有 98 个可用的建筑模型。当前建筑模型包括 179 个唯一的 Wi-Fi MAC 地址，覆盖了 6 层中的 4 层。所有楼层的中位误差为 4.33 米。最佳楼层（见图片 9）是第 3 层，其中位误差为 3.9 米。</i></center>

### 测绘覆盖、RF 覆盖和中位误差地图

在评估特定建筑模型时，查看测绘覆盖、RF 覆盖和中位误差地图可能会有助于了解精度是否以及如何改进。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sc-rf.png" alt="pir" width={800} height="auto" /></p>

### 如何提高室内定位精度

当查看中位误差地图时，如果发现提供的中位误差不符合您的用例需求，则需要考虑如何提高精度。

● **步骤 1** - 增加测绘<br/>
您是否在建筑中计划使用室内定位的所有区域进行了测绘？  
如果没有，请进行更多测绘。

● **步骤 2** - 增加 Wi-Fi 和蓝牙覆盖<br/>
您是否在建筑中计划使用室内定位的所有区域都部署了 Wi-Fi 和蓝牙？  
如果没有，请在这些区域部署更多的 Wi-Fi 和蓝牙信标，并在这些区域进行测绘。

● **步骤 3** - 增加 Wi-Fi 和蓝牙密度<br/>
您在建筑的所有区域都部署了 Wi-Fi 和蓝牙，但精度仍然不够好。  
检查这些区域的 Wi-Fi 和蓝牙密度。与附录 1 中的表格进行比较，看看从理论和模拟的角度是否建议增加 Wi-Fi 和蓝牙的密度以满足您的需求。如果是，请在这些区域部署更多的 Wi-Fi 和蓝牙信标。

● **步骤 4** - 提高测绘精度<br/>
您在建筑的所有区域都部署了 Wi-Fi 和蓝牙，并且密度符合附录 1 中建议的理论水平以满足您的需求，但精度仍然不够好。  
进行更详细的测绘。确保尽可能频繁地放置参考点（每平方米一次是最佳的），并尽可能准确地放置。将参考点放置在地图上的正确位置非常重要。很容易出错，将其放置在与实际位置不同的地方。

## 开始使用

SenseCAP T1000 Tracker 收集 Wi-Fi 和蓝牙扫描信息、MAC 地址和信号强度，并将其发送到 The Things Stack，然后通过 API 发送到 Traxmate 门户。

请先查看 [连接到 TTN](https://wiki.seeedstudio.com/SenseCAP_T1000_tracker_TTN/) 以正确设置追踪器。

### 添加设备

登录 Traxmate 门户，导航到 `Devices` -> `Add new` -> `Device`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-new-devices.png" alt="pir" width={800} height="auto" /></p>

### TTS 配置

登录 [The Things Stack](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-end-nodes/developer-walk-through/?url=lns.html#the-things-network-v3)，导航到 `Integrations` → `Webhooks`，然后点击 `Add Webhook`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>

选择 `Custom Webhook` 模板。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trax-web.png" alt="pir" width={800} height="auto" /></p>

命名您的 Webhook ID，并将格式选择为 `JSON`，然后复制 Base URL。

```cpp
https://capture.v1.traxmate.io/service/<Service Token>/device
```

:::tip
导航到 `Settings` -> `Account`，并复制 Service Token。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/service-token.png" alt="pir" width={800} height="auto" /></p>
:::

启用以下推荐的事件类型，然后点击 `Add webhook`（添加 webhook）。
* 上行消息
* 标准化上行消息

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/websettings.png" alt="pir" width={800} height="auto" /></p>

### 检查设备数据

当设备成功连接后，返回到 Traxmate 门户，您将看到设备的数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trax-data.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trax-map.png" alt="pir" width={800} height="auto" /></p>

## 附录

### 精度要求

**本章中描述的方法和技术适用于需要大约 2-10 米中位误差的使用场景。**

所有的精度要求都应基于使用场景的需求。一些使用场景对精度的要求较高，而另一些使用场景对室内定位基础设施的预算较高。解决方案应在精度要求和可用预算之间找到平衡。经验法则是，投入到基础设施中的资金和精力越多，精度就越高。但请注意，许多使用场景可以通过使用现有的基础设施来支持。

以下图表显示了在一定面积内部署一定数量的 Wi-Fi 或蓝牙设备时，可以预期的精度。

### 估算的室内精度矩阵

以下表格显示了在室内环境中使用基于 AI（人工神经网络，ANN）的室内定位技术时，可以预期的精度。精度将取决于覆盖的区域以及部署的 Wi-Fi 接入点（AP）或蓝牙信标的数量。

中位误差精度为：

● 绿色：1 到 5 米<br/>
● 黄色：5 到 10 米<br/>
● 红色：10 米以上<br/>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/table1.png" alt="pir" width={700} height="auto" /></p><center><i>表格显示了如果每平方米有一个参考点并进行了非常详细的调查时的精度。</i></center>
<br/>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/table2.png" alt="pir" width={700} height="auto" /></p><center><i>表格显示了如果每 4 平方米有一个参考点并进行了详细调查时的精度。</i></center>
<br/>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/table3.png" alt="pir" width={700} height="auto" /></p><center><i>表格显示了如果每 100 平方米有一个参考点并进行了稀疏调查时的精度。</i></center>