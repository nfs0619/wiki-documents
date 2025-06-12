---
description: SenseCAP_Tracker_T1000-A/B_Bluetooth_Beacon
title: E5 蓝牙信标
keywords:
- BLE
- 定位
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/bluetooth_beacon_for_SenseCAP_Traker
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

BLE（低功耗蓝牙）定位信标是一种小型无线设备，可定期发送蓝牙信号。这些信号可以被支持蓝牙的设备（例如 SenseCAP T1000 Tracker）检测到，从而确定设备与信标的距离，构建基于位置的解决方案，用于室内定位、资产追踪及其他应用。

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_169626_-1Pgt7bfhzJ786G5_1693376261?w=1400&h=1050&type=image/jpeg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/E5-Location-Beacon-p-5791.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 </font></span></strong>
    </a>
</div>

### 蓝牙室内定位系统

GPS 已经证明了其在室外定位的能力。现在，我们也倾向于室内定位，而蓝牙信标使得室内精准定位成为可能。结合 SenseCAP T1000 Tracker，可以构建室内定位解决方案。

在目标区域部署蓝牙信标，追踪器接收信标发送的信号，定位精度可达到米级（2-3 米）。它可以实现资产追踪、路线规划、反向寻车等功能，并可集成到小程序和 APP 中。

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_594585_HptIoexn6zqh4-oS_1692694140?w=1424&h=328&type=image/png" alt="pir" width={800} height="auto" /></p>

:::tip
查看 [室内定位系统](https://wiki.seeedstudio.com/IPS_For_SenseCAP_T1000_Traker) 了解更多详情。
:::

### 特性

* **蓝牙® LE 5.0**
* **长电池寿命**：可更换锂电池，默认配置下（0dBm/500ms）使用寿命超过 5 年。
* **远距离传输**：在开阔区域内传输距离可达 120 米。
* **高兼容性**：兼容 iOS 7.0+ 和 Android 4.3+ 系统。

### 按钮功能
|开机|关机|
| :-: | :-: |
|打开产品背盖，按住按钮 3 秒，蓝色 LED 灯亮 5 秒，表示开机成功。|在开机状态下，打开产品背盖，按住按钮 3 秒，蓝色 LED 灯闪烁 5 次，表示关机成功。|

## 部署指南

* 蓝牙信标通常安装在距地面 2.5-3 米的高度，水平间距为 5-10 米。根据环境，可以采用柱状排列或三角形均匀分布。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble1.png" alt="pir" width={600} height="auto" /></p>

* 不同场景的部署策略有所不同。例如，室内环境可能采用中心（窄）布置或三角网格分布（稀疏）。在室内走廊中，可以选择中心线部署（适用于宽度约 3 米的走廊）或双列排列（较宽的走廊）。避免在高层建筑（楼层高度 > 4 米）中安装在天花板上，而是选择墙面或低位安装，间距约 5 米。室外则采用三角网格模式用于开阔空间。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble2.png" alt="pir" width={700} height="auto" /></p>

<center><i>红色为错误示例，蓝色为正确示例。</i></center>

* 在潮湿环境中，部署时需考虑产品的防水等级，以避免长时间接触水。

* 安装时应远离金属、玻璃或其他阻挡物，且不应靠近角落。

:::tip
以上部署指南仅供参考。实际部署应根据客户定位算法、产品安装环境及测试条件进行定制。
:::

### 磁吸安装说明

#### 安装条件

* 产品安装的工具或平台材料表面应为设备或支架表面，可被磁铁吸附；
* 推荐安装温度范围：20~40°C；
* 安装产品时，尽量远离角落、其他周围磁场及大型障碍物。

#### 安装步骤

产品的磁性接触面可直接吸附到待安装的支架或设备表面。

:::tip
由于磁性产品的体积比普通产品（无磁吸）更重，建议不要将此类产品安装在天花板等表面，以避免掉落风险。
:::

### 3M 胶/免钉胶安装说明

#### 安装条件

* 产品安装的平台材料表面应为平整、干燥的表面，例如陶瓷、玻璃/环氧树脂、亚克力、PBT、ABS、PC 和硬质 PVC。由于不同双面胶型号的粘性和可安装性不同，不建议将默认双面胶用于灰质纹理墙面、未完全干燥、老化及潮湿的墙面（如水泥、石膏板等），否则存在脱落风险；
* 推荐安装温度范围：20~40℃；
* 产品应远离金属、玻璃屏蔽或其他障碍物；产品不应靠近角落部署。

#### 安装步骤

* 安装前：清洁待粘贴的应用平台或工具表面，确保粘贴表面干燥且无灰尘；
* 粘贴时，用手或工具将双面胶贴到设备上，并按压 1-2 秒。重复按压几次，使产品的双面胶或免钉胶与应用粘贴表面更好地粘合。

:::tip
如果需要在低温环境或恶劣环境中安装产品，建议使用双面胶 + 强力免钉胶来安装产品，以获得最佳效果。有关免钉胶的更多信息，请联系我们的销售人员。
:::

### 规格

**通用规格**

<table>
<tr>
<th>UUID</th>
<th>PC</th>
</tr>
<tr>
<td>颜色</td>
<td>白色</td>
</tr>
<tr>
<td>防护等级</td>
<td>无</td>
</tr>
<tr>
<td>尺寸 (长\*宽\*高)</td>
<td>Φ50\*20.5mm</td>
</tr>
<tr>
<td>重量</td>
<td>39g（含电池）</td>
</tr>
<tr>
<td>电池</td>
<td>锂电池，2400mAh</td>
</tr>
<tr>
<td>芯片</td>
<td>nRF52 系列</td>
</tr>
<tr>
<td>蓝牙版本</td>
<td>BLE 5.0</td>
</tr>
<tr>
<td>蓝牙协议</td>
<td>iBeacon</td>
</tr>
<tr>
<td>传感器</td>
<td>支持加速度计</td>
</tr>
<tr>
<td>LED</td>
<td>包含</td>
</tr>
<tr>
<td>APP</td>
<td>BeaconSET</td>
</tr>
<tr>
<td>工作温度</td>
<td>-30~60°C</td>
</tr>
<tr>
<td>电池寿命</td>
<td>
<p>超过 5 年</p>
<p>（默认配置下 0dBm/500ms）。</p>
</td>
</tr>
</table>

**默认广播参数**

<table>
<tr>
<th>参数</th>
<th>默认值</th>
</tr>
<tr>
<td>UUID</td>
<td>FDA50693-A4E2-4FB1-AFCF-C6EB07647825</td>
</tr>
<tr>
<td>Major</td>
<td>10001</td>
</tr>
<tr>
<td>Minor</td>
<td>19641</td>
</tr>
<tr>
<td>测量功率</td>
<td>-59dBm</td>
</tr>
<tr>
<td>发射功率 (Tx Power)</td>
<td>-30 - +4dBm，默认 0dBm</td>
</tr>
<tr>
<td>广播间隔 (Adv Interval)</td>
<td>100ms~10s，默认 500ms</td>
</tr>
<tr>
<td>密码</td>
<td>minew123 （字母和数字）</td>
</tr>
<tr>
<td>序列号</td>
<td>无</td>
</tr>
<tr>
<td>设备名称</td>
<td>E5 (1-7 个字符)</td>
</tr>
<tr>
<td>连接模式</td>
<td>是/否</td>
</tr>
<tr>
<td>软重启</td>
<td>minew123 （与密码相同）</td>
</tr>
<tr>
<td>电池服务</td>
<td>
<p>电池图标显示，实时检测</p>
<p>满格为 100%</p>
</td>
</tr>
</table>

**兼容性信息**

<table>
<tr>
<th>系统</th>
<th>设备</th>
</tr>
<tr>
<td>BLE</td>
<td>BLE 4.2+</td>
</tr>
<tr>
<td>IOS 7.0+</td>
<td>
<p>iPhone 4S, iPhone 5/5C/5S, </p>
<p>iPhone 6/6Plus/6S/6SPlus, iPhone 7/7Plus, </p>
<p>iPad mini/mini2/4/Air/Pro 等。</p>
</td>
</tr>
<tr>
<td>Android 4.3+</td>
<td>
<p>三星，XIAOMI，小米，华为，ONEPLUS，一加，ViVO，OPPO 等。</p>
</td>
</tr>
</table>

## 配置

* **步骤 1**：下载 `Beaconset` APP

* **步骤 2**：连接 Beacon，可以通过 MAC 地址区分设备，MAC 地址也贴在 Beacon 标签上。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/set-beacon2.png" alt="pir" width={600} height="auto" /></p>

* **步骤 3**：设置

根据需要修改参数，然后点击 `Save` 保存。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/setting-beacon.png" alt="pir" width={600} height="auto" /></p>