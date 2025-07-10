---
description: 使用 SenseCAP T1000 追踪器快速入门
title: 快速入门
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Get_Started_with_SenseCAP_T1000_tracker
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

本章节将指导您通过 SenseCAP Mate APP 设置 SenseCAP T1000 追踪器。

<center><iframe width="666" height="360" src="https://www.youtube.com/embed/NBSr06NXC7U" title="YouTube 视频播放器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/products/SenseCAP/T1000_Tracker/SenseCAP_Tracker_T1000-AB_User_Guide_v1.2.pdf">
            <strong><span><font color={'FFFFFF'} size={"4"}> 用户指南 </font></span></strong>
    </a>
</div>

## 设备功能

### 工作模式

为了适应不同的场景，SenseCAP T1000 追踪器提供了多种工作模式，您可以根据需求进行选择。

|**工作模式**|**描述**|**场景**|
| - | - | - |
|待机模式|<p>仅上传心跳包，仅包含电池信息。</p><p>可以通过 LoRa 下行命令获取位置。</p>|如果需要长时间定位设备，并且设备在充电前可以运行很长时间，云平台可以发出定位请求命令来定位设备。|
|周期模式|设置一个间隔，设备会周期性上传位置和传感器数据。|推荐用于大多数场景。|
|事件模式|根据追踪器的温度、光线和加速度传感器调整上传间隔，包括温度事件、光线事件、运动事件、静止超时和震动事件。|适用于复杂场景，例如监控重要物品的运输。但功耗会显著增加。|

### 传感器功能

SenseCAP T1000 追踪器配备了 3 个传感器：温度传感器、光线传感器和三轴加速度计。您可以选择启用或禁用这些传感器：

* 关闭所有传感器，但您也可以选择没有传感器的版本以降低成本。
* 仅启用温度和光线传感器，以低功耗周期性监控数据。
* 当温度、光照和加速度计用作触发条件时，传感器将始终供电，设备会消耗大量电量。

|**传感器**|**描述**|
| - | - |
|温度|<p>这是一个独立的板载温度传感器，**精度为 ±0.5~1℃**。需要注意的是，由于与外壳分离，可能会有一些温度测量延迟。</p><p>范围：-20 至 60℃；精度：± 1℃（最小 0.5℃，最大 1℃）；分辨率：0.1℃</p>|
|光线|<p>光线传感器监测的不是实际的流明值，而是从黑暗到亮度的百分比。主要用于防拆监控和一些光敏监控。</p><p>范围：0 至 100%（0% 为黑暗，100% 为最亮）</p>|
|三轴加速度计|通过设置加速度值，触发运动事件和震动事件。|

### 数据缓存

设备可以缓存数据，可通过蓝牙配置启用“GNSS 数据缓存”。设备上传确认包。当 LoRaWAN 信号覆盖较弱或没有网络覆盖时，设备在上传数据时无法接收到确认。在这种情况下，数据将被保存并进入下一个周期。当设备在某个时间点成功上传数据时，它将发送离线数据。最多可以缓存 1000 条记录。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={800} height="auto" /></p>

### 按键功能

<table>
<tr><th colspan="1"><a name="_hlk134103971"></a><b>操作</b></th><th colspan="1"><b>描述</b></th><th colspan="1"><b>LED 状态</b></th><th colspan="1"><b>蜂鸣器</b></th></tr>
<tr><td colspan="1" rowspan="2">按住按钮 3 秒</td><td colspan="1">如果追踪器已关机，按住按钮 3 秒可开机。蓝牙配对将自动激活，用户可以使用 APP 扫描并连接。</td><td colspan="1">LED 每秒闪烁一次。</td><td colspan="1">上升的旋律</td></tr>
<tr><td colspan="1">如果设备已开机，按住按钮 3 秒可激活蓝牙配对。</td><td colspan="1">LED 每秒闪烁一次。</td><td colspan="1">无</td></tr>
<tr><td colspan="1">按住按钮 9 秒</td><td colspan="1">关机。</td><td colspan="1">无</td><td colspan="1">下降的旋律</td></tr>
<tr><td colspan="1">加入 LoRa 网络</td><td colspan="1">退出蓝牙设置后，尝试加入 LoRaWAN 网络。</td><td colspan="1">尝试接入网络时呼吸灯闪烁，成功加入网络时快速闪烁。</td><td colspan="1">成功加入网络时会有快速欢快的旋律。</td></tr>
<tr><td colspan="1" rowspan="2">按一次</td><td colspan="1">获取位置/传感器数据，上传数据，并立即触发“按一次”事件。</td><td colspan="1">LED 亮 2 秒。</td><td colspan="1">数据上传成功时会有提示音。</td></tr>
<tr><td colspan="1">如果蓝牙配对已打开，按一次可关闭蓝牙。</td><td colspan="1">LED 熄灭。</td><td colspan="1">无</td></tr>
<tr><td colspan="1" rowspan="3">连续按两次</td><td colspan="1">如果 SOS 设置为单次模式，双击按钮将激活单次 SOS 模式，并上传位置/传感器数据和 SOS 事件一次。</td><td colspan="1">伴随声音闪烁。</td><td colspan="1">3 秒报警声。</td></tr>
<tr><td colspan="1">如果 SOS 设置为连续模式，双击按钮将激活连续 SOS 模式。每分钟上传一次位置、传感器数据和 SOS 事件，模式将在 30 次后自动结束。</td><td colspan="1">伴随声音闪烁。</td><td colspan="1">持续报警声。</td></tr>
<tr><td colspan="1">双击两次退出 SOS 模式。</td><td colspan="1">无。</td><td colspan="1">无。</td></tr>
</table>

:::info 注意
* 如果设备未使用，建议关闭电源。
* 第一次开机时，建议在室外测试，因为 GPS 需要通过卫星更新时间。
* 请确保频段与您的网关频段匹配。
:::

## 快速开始

### 连接到 SenseCAP Mate 应用

* **步骤 1**：下载 SenseCAP Mate 应用

SenseCAP Mate 应用用于配置 LoRa 参数、设置间隔时间、将设备绑定到您的账户以及查看设备的基本信息。

* 对于 iOS，请在 App Store 中搜索“SenseCAP Mate”并下载。
* 对于 Android，请在 Google Store 中搜索“SenseCAP Mate”并下载。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={600} height="auto" /></p>

* **步骤 2**：添加设备

登录 SenseCAP Mate 应用。
点击右上角的“添加设备”选项卡，然后扫描设备标签上的二维码。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config.png" alt="pir" width={800} height="auto" /></p>

按下按钮 3 秒钟，然后通过 SN 选择设备。

有两种配置模式：

* **快速配置**：对于快速开始，您可以选择快速配置基本参数。
* **高级配置**：要设置更多参数，请参考以下步骤。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/setup.png" alt="pir" width={500} height="auto" /></p>

### 快速配置

对于快速配置，您只需设置以下参数：

* **频率**：应与您的网关一致。
* **上行间隔**：周期模式（默认模式）的上行间隔，您可以通过“用户”页面中的“设备蓝牙配置”设置其他模式。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/advanced1.png" alt="pir" width={500} height="auto" /></p>

追踪器将尝试加入 LoRaWAN 网络，尝试加入网络时呼吸灯会闪烁，成功加入网络后会快速闪烁并伴随一段欢快的提示音。

### 高级配置

* 按住按钮 3 秒钟以打开设备，然后自动开启蓝牙配对，用户可以使用应用扫描并连接。
* 打开应用并点击“Tracker T1000”。选择“设置”以配置追踪器。
* 通过 S/N 选择设备（S/N 位于设备标签上）。进入后将显示传感器的基本信息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_3.png" alt="pir" width={800} height="auto" /></p>

点击“测量”，然后您将获得传感器的数值：

|温度|范围：-20 至 60℃；精度：± 1℃（最小 0.5℃，最大 1℃）；分辨率：0.1℃|
| - | - |
|光照|0 至 100%（0% 是黑暗，100% 是最亮）|

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_4.png" alt="pir" width={500} height="auto" /></p>

#### LoRa 参数设置

追踪器支持从 863MHz 到 928MHz 的通用频率计划，单个设备支持 7 种频率计划。

<table align="center">
  <caption> <h2>平台</h2> </caption>
  <tbody>
    <tr>
    <td><h4>平台</h4></td>
    <td><h4>描述</h4></td>
    </tr>
    <tr>
      <td>SenseCAP for The Things Network</td>
    <td>默认平台。
必须与 SenseCAP 网关一起使用。SenseCAP 构建了一个专有的 TTN 服务器，使传感器在与 SenseCAP 网关配对时可以开箱即用。<br />
    <a href="https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html" target="_blank"><span>SenseCAP 室外网关</span></a><br />
    <a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html" target="_blank"><span>SenseCAP 室内网关</span></a></td>
    </tr>
    <tr>
    <td>SenseCAP for Helium</td>
    <td>当有 Helium 网络覆盖时，数据可以通过 Helium 上传。设备运行在 SenseCAP 的私有 Helium 控制台上。用户无需在 Helium 控制台上创建设备，使用 SenseCAP Mate 应用和门户即可开箱即用。<br /><a href="https://explorer.helium.com/" target="_blank"><span>Helium 覆盖</span></a></td>
    </tr>
        <tr>
    <td>Helium</td>
    <td>将设备连接到您的公共 Helium 控制台</td>
    </tr>
            <tr>
    <td>The Things Network</td>
    <td>将设备连接到您的 TTN(TTS) 服务器</td>
    </tr>
            <tr>
    <td>其他平台</td>
    <td>其他 LoRaWAN 网络服务器</td>
    </tr>
  </tbody></table>

<table align="center">
  <caption> <h2></h2> </caption>
  <tbody>
    <tr>
    <td><h4>参数</h4></td>
    <td><h4>描述</h4></td>
    <td><h4></h4></td>
    </tr>
    <tr>
    <td>频率计划</td>
    <td>EU868 / US915 / AU915 / KR920 / IN865 / AS923-1 / AS923-2 / AS923-3 / AS923-4</td>
    <td>默认 EU868</td>
    </tr>
        <tr>
    <td>数据包策略</td>
    <td>1C</td>
    <td>LoRaWAN 使用确认数据包</td>
    </tr>
            <tr>
    <td>LoRaWAN ADR</td>
    <td>默认开启</td>
    <td>推荐默认开启 LoRaWAN 参数</td>
    </tr>
            <tr>
    <td>恢复 LoRa 配置</td>
    <td>当“平台”从其他平台切换回 SenseCAP 时，需要恢复 LoRa 参数（EUI/App EUI/App Key 等）</td>
    <td>当您需要将 LoRa 参数恢复为出厂默认值时，可以使用此功能</td>
    </tr>
  </tbody>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_5.png" alt="pir" width={800} height="auto" /></p>

传感器支持两种网络接入模式，默认使用 OTAA。

|**参数**|**描述**|
| - | - |
|OTAA（默认）|空中激活，通过设备 EUI、App EUI 和 App Key 加入网络。|
|ABP|个性化激活，通过 DevAddr、NwkSkey 和 AppSkey 加入网络。|

设备默认使用 OTAA 加入 LoRaWAN 网络。因此，可以设置设备 EUI、App EUI 和 App Key。

|**参数**|**类型**|
| - | - |
|设备 EUI|<a name="ole_link10"></a>16 位，十六进制，从 0 ~ F|
|App EUI|16 位，十六进制，从 0 ~ F|
|App Key|32 位，十六进制，从 0 ~ F|

:::info 注意
当使用 SenseCAP 平台时，EUI、APP EUI 和 APP Key 是固定的，与传感器标签相同。<br />
当选择将传感器用于公共平台（如 Helium 或 TTN）时，EUI 不会更改，传感器将生成新的固定 App EUI 和 App Key 用于网络接入。<br />
如需批量获取 EUI 信息，请联系销售团队。
:::

<table>
<tr><th colspan="1" valign="top"><b>频率</b></th><th colspan="1" valign="top"><b>常用名称</b></th><th colspan="2" valign="top"><b>子频段</b></th></tr>
<tr><td colspan="1"><a name="ole_link14"></a>EU863-870</td><td colspan="1">EU868</td><td colspan="1">--------</td></tr>
<tr><td colspan="1">US902-928</td><td colspan="1">US915</td><td colspan="1">子频段从 1 到 8（默认子频段为 2）</td></tr>
<tr><td colspan="1">AU915-928</td><td colspan="1">AU915</td><td colspan="1">子频段从 1 到 8（默认子频段为 2）</td></tr>
<tr><td colspan="1">KR920-923</td><td colspan="1">KR920</td><td colspan="1">--------</td></tr>
<tr><td colspan="1">IN865-867</td><td colspan="1">IN865</td><td colspan="1">--------</td></tr>
<tr><td colspan="1">AS923-1-TTN</td><td colspan="1">AS1</td><td colspan="1">TTN 的频率计划</td></tr>
<tr><td colspan="1">AS923-2-TTN</td><td colspan="1">AS2</td><td colspan="1">TTN 的频率计划</td></tr>
<tr><td colspan="1" rowspan="4">AS923</td><td colspan="1">AS923-1</td><td colspan="1" rowspan="4">Helium 的频率计划</td></tr>
<tr><td colspan="1">AS923-2</td></tr>
<tr><td colspan="1">AS923-3</td></tr>
<tr><td colspan="1">AS923-4</td></tr>
</table>

:::info 注意
不同国家和 LoRaWAN 网络服务器使用不同的频率计划。<br />
对于 Helium 网络，请参考：[Helium-frequency-plans](https://docs.helium.com/lorawan-on-helium/frequency-plans)<br />
对于 The Things Network，请参考：[TTN-frequency-plans](https://www.thethingsnetwork.org/docs/lorawan/frequency-plans/)
:::

#### 工作模式设置

请根据需求设置工作模式。

<table>
<tr><th colspan="1"><b>参数</b></th><th colspan="1"><b>描述</b></th><th colspan="1"></th></tr>
<tr><td colspan="1">心跳间隔</td><td colspan="1">当设备在心跳间隔内没有上传数据时，将触发一个心跳包。该包仅包含电池信息。</td><td colspan="1">默认 720 分钟。</td></tr>
<tr><td colspan="1">启用温度和光照</td><td colspan="1">如果打开此开关，将采集并上传温度和光照数据，但会增加功耗。</td><td colspan="1">默认关闭。</td></tr>
<tr><td colspan="1" rowspan="2">SOS 报告模式</td><td colspan="1">单次模式</td><td colspan="1"><a name="ole_link7"></a>如果将 SOS 设置为单次模式，双击按钮将启用单次 SOS 模式，并上传一次位置/传感器数据和 SOS 事件。</td></tr>
<tr><td colspan="1">连续模式</td><td colspan="1"><p>默认使用连续模式。</p><p>如果将 SOS 设置为连续模式，双击按钮将开启 SOS 的连续模式，每分钟上传一次位置、传感器数据和 SOS 事件，连续 30 次后自动结束。</p></td></tr>
<tr><td colspan="1" rowspan="3">工作模式</td><td colspan="1">待机模式</td><td colspan="1">根据心跳间隔上传心跳包（仅电池电量）。</td></tr>
<tr><td colspan="1">周期模式</td><td colspan="1">根据上传间隔上传位置和传感器数据。</td></tr>
<tr><td colspan="1">事件模式</td><td colspan="1"><a name="ole_link15"></a>根据温度、光照和运动等测量值设置阈值触发条件，并在触发后调整上传间隔。</td></tr>
<tr><td colspan="1">上传间隔（分钟）– 周期模式</td><td colspan="1">周期性定位并上传数据。</td><td colspan="1"><p>默认 60 分钟。</p><p>频率越高，功耗越高。</p></td></tr>
<tr><td colspan="1">恢复所有设置</td><td colspan="1">将所有配置参数恢复为出厂设置，包括 LoRa、工作模式和地理定位。</td><td colspan="1"></td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/work_mode.png" alt="pir" width={800} height="auto" /></p>

对于事件模式，有五种事件：

<table>
<tr><th><b>事件模式</b></th><th><b>描述</b></th><th></th></tr>
<tr><td>上传间隔 – 非事件（分钟）</td><td><a name="ole_link16"></a>这是未触发事件时的上传间隔。</td><td><p>默认 60 分钟。</p><p>范围：1~10080 分钟。</p></td></tr>
<tr><td rowspan="2">震动事件</td><td>当震动事件启用时，追踪器的震动将触发数据报告，包括震动事件、位置和传感器数据。</td><td>默认关闭。</td></tr>
<tr><td>三轴运动阈值（mg）</td><td>默认值为 300。当加速度超过 300mg 时，触发震动事件。</td></tr>
<tr><td rowspan="3">运动事件</td><td>当加速度超过设定值时，设备开始移动；当 2 分钟内无运动时，设备停止移动。根据开始运动和停止运动设置上传间隔。</td><td>默认关闭。</td></tr>
<tr><td>三轴运动阈值（mg）</td><td>默认值为 30。当加速度超过 30mg 时，判断设备处于运动状态；当低于此值 2 分钟时，判断设备处于静止状态。</td></tr>
<tr><td>运动时上传间隔（分钟）</td><td>设置设备处于运动状态时的当前状态上传间隔。</td></tr>
<tr><td rowspan="2">静止事件</td><td>当设备在某个位置静止超过一定时间时，触发静止超时事件。</td><td></td></tr>
<tr><td>静止超时时间（分钟）</td><td>默认值为 360 分钟。</td></tr>
<tr><td rowspan="4">温度事件</td><td>如果启用温度事件，可以根据温度设置上传间隔。</td><td>例如，上传间隔=10，值≥30，如果温度高于 30°C，设备将以 10 分钟的间隔上传位置。</td></tr>
<tr><td>采样间隔（秒）</td><td><p>默认 30 秒。</p><p>每 30 秒检测一次温度。当触发阈值时，上传位置和传感器数据。</p></td></tr>
<tr><td>上传间隔（分钟）</td><td>当温度超过阈值时，根据此间隔上传位置和传感器数据。</td></tr>
<tr><td>值规则</td><td>可以设置四种阈值规则之一。</td></tr>
<tr><td rowspan="3">光照事件</td><td>如果启用光照事件，可以根据光照设置上传间隔。</td><td>例如，上传间隔=10，值≥30，如果光照高于 30%，设备将以 10 分钟的间隔上传位置。</td></tr>
<tr><td>上传间隔（分钟）</td><td>当光照超过阈值时，根据此间隔上传位置和传感器数据。</td></tr>
<tr><td>值规则</td><td>可以设置四种阈值规则之一。</td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/work_mode2.png" alt="pir" width={800} height="auto" /></p>

#### 地理定位模式设置

该追踪器支持通过 GNSS、Wi-Fi 和蓝牙进行定位。

- **GNSS**: 可直接通过 GPS 和其他卫星定位获取经纬度，然后通过 LoRa 上传数据。
- **Wi-Fi**: 被动扫描，通过 LoRa 上传扫描到的 4 个 MAC 地址。
- **BLE**: 通过 LoRa 上传信号最强的 3 个 Beacon 的 MAC 地址。

<table>
<tr><th colspan="1"><b>地理定位</b></th><th colspan="1"><b>描述</b></th><th colspan="1"></th></tr>
<tr><td colspan="1" rowspan="8">地理定位策略</td><td colspan="1">仅 GNSS</td><td colspan="1"><p>默认使用 GNSS。</p><p>仅使用 GNSS 进行定位。</p></td></tr>
<tr><td colspan="1">仅 Wi-Fi</td><td colspan="1">仅使用 Wi-Fi 扫描进行定位。</td></tr>
<tr><td colspan="1">Wi-Fi+GNSS</td><td colspan="1">优先使用 Wi-Fi。如果 Wi-Fi 失败，则在一个地理定位周期内使用 GNSS。</td></tr>
<tr><td colspan="1">GNSS + Wi-Fi</td><td colspan="1">优先使用 GNSS。如果 GNSS 失败，则在一个地理定位周期内使用 Wi-Fi。</td></tr>
<tr><td colspan="1">仅蓝牙</td><td colspan="1">仅使用蓝牙扫描进行定位。</td></tr>
<tr><td colspan="1">蓝牙 + Wi-Fi</td><td colspan="1">优先使用蓝牙。如果蓝牙失败，则在一个地理定位周期内使用 Wi-Fi。</td></tr>
<tr><td colspan="1">蓝牙 + GNSS</td><td colspan="1">优先使用蓝牙。如果蓝牙失败，则在一个地理定位周期内使用 GNSS。</td></tr>
<tr><td colspan="1">蓝牙 + Wi-Fi + GNSS</td><td colspan="1">依次使用蓝牙、Wi-Fi 和 GNSS 进行定位（某种定位方式失败后切换到下一种定位方式）。</td></tr>
<tr><td colspan="1">GNSS 超时</td><td colspan="1"><p>等待 GNSS 获取粗略位置修正的最长时间。</p></td><td colspan="1"><p>默认是 60 秒。</p><p>不建议修改，时间越长，功耗越大。</p></td></tr>
<tr><td colspan="1"><a name="ole_link17"></a>GNSS 数据缓存</td><td colspan="1">当无法通过 LoRa 上传数据时，数据会保存在本地，并在 LoRa 信号恢复时上传。</td><td colspan="1">默认关闭。</td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/mode3.png" alt="pir" width={500} height="auto" /></p>

在所有参数配置完成后，点击“发送”。  
如果不需要修改任何参数，退出蓝牙配置，返回主页。此时，设备会发起 LoRa 网络接入请求。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/send.png" alt="pir" width={400} height="auto" /></p>

### 设备数据查看

#### SenseCAP Mate 应用

在 APP 上查看位置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data_view.png" alt="pir" width={800} height="auto" /></p>

#### SenseCAP 门户

SenseCAP 门户的主要功能是管理 SenseCAP 设备和存储数据。它基于 Microsoft 提供的安全可靠的 Azure 云服务构建。用户可以申请一个账户，并将所有设备绑定到该账户。SenseCAP 门户提供一个 Web 门户和 API。Web 门户包括 Dashboard、设备管理、数据管理和访问密钥管理。API 对用户开放以便进一步开发。

- **Dashboard:** 包括设备概览、公告、场景数据和数据图表等。
- **设备管理:** 管理 SenseCAP 设备。
- **数据管理:** 管理数据，包括数据表和图表部分，提供数据搜索方法。
- **子账户系统:** 注册具有不同权限的子账户。
- **访问密钥管理:** 管理访问密钥（用于访问 API 服务），包括密钥创建、密钥更新和密钥检查。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portal_page.png" alt="pir" width={800} height="auto" /></p>

##### 设备数据查看

登录 [SenseCAP 门户](http://sensecap.seeed.cc)

如果您已通过 APP 创建账户，可以直接登录。

1) 选择注册账户，输入邮箱信息并点击“注册”，注册邮件将发送到用户邮箱。

2) 打开“SenseCAP…”邮件，点击跳转链接，填写相关信息并完成注册。

3) 返回登录界面并完成登录。

查看 [SenseCAP 门户用户指南](https://sensecap-docs.seeed.cc/quickstart.html) 了解更多详情。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portaldata1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map_view2.png" alt="pir" width={800} height="auto" /></p>

## SenseCAP API 

SenseCAP API 用于用户管理物联网设备和数据。它包括 3 种 API 方法：HTTP 协议、MQTT 协议和 Websocket 协议。
* 使用 HTTP API，用户可以管理 LoRa 设备，获取原始数据或历史数据。
* 使用 MQTT API，用户可以通过 MQTT 协议订阅传感器的实时测量数据。
* 使用 Websocket API，用户可以通过 Websocket 协议获取传感器的实时测量数据。

请查看 [API 用户指南](https://sensecap-docs.seeed.cc/) 了解更多详情。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/api_page.png" alt="pir" width={800} height="auto" /></p>