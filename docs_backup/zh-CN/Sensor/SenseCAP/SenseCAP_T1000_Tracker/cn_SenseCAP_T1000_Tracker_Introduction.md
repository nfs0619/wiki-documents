---
description: SenseCAP_T1000_tracker_介绍
title: 介绍
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_T1000_tracker/Introduction
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

[**SenseCAP T1000**](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) 是一款紧凑型 LoRaWAN® 追踪器，利用 GNSS/Wi-Fi/Bluetooth 实现精准的室内和室外定位追踪。它具有自适应地理定位功能、本地数据存储以及长达数月的电池续航。此外，它还配备了温度、光线和运动传感器，非常适合各种基于位置的应用场景。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_1.png" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 </font></span></strong>
    </a>
</div>

---

:::tip 版本对比

||兼容网络|温度|光线|加速度计|
|--|--|--|--|--|
|[SenseCAP T1000-A](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)|<ul><li>LoRaWAN</li><li>Helium</li></ul>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|
|[SenseCAP T1000-B](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-B-p-5698.html)|<ul><li>LoRaWAN</li><li>Helium</li></ul>|||
|[SenseCAP T1000-E](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html)|<ul><li>Meshtastic</li></ul>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|
:::

## 特性

### 精准定位

GNSS、Wi-Fi、BLE三种定位技术，适用于室内和室外解决方案。

**GNSS定位（室外）**

追踪器通过卫星系统（GPS/北斗/其他）获取室外位置，然后通过 LoRa 无线将数据上传到服务器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/located_by_Gnss.png" alt="pir" width={800} height="auto" /></p>

**Wi-Fi定位（室内）**

追踪器扫描附近 Wi-Fi/Bluetooth 的 MAC 地址和 RSSI，并通过 LoRaWAN 上传。应用服务器需要根据 MAC 地址和信号强度（RSSI）计算实际地理位置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/by_wifi.png" alt="pir" width={800} height="auto" /></p>

### 离线数据存储

能够本地存储超过1000条记录。以1小时上传间隔计算，存储容量超过40天。

当 LoRaWAN 信号覆盖较弱或没有网络覆盖时，数据将被保存并进入下一个周期。当设备返回到有 LoRaWAN 网络覆盖的区域时，它会自动发送离线数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={800} height="auto" /></p>

### 跨区域适应性

T1000 提供无缝的全球 LoRaWAN® 区域切换，能够根据检测到的位置坐标自动调整到适当的 LoRaWAN® 频率计划，确保在欧洲、美洲及其他地区的最佳性能。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/earth.gif" alt="pir" width={800} height="auto" /></p>

### 数月电池续航

采用 LR1110 芯片并具有低功耗特性，在仅 GPS 模式下以1小时上传间隔运行，电池续航可达3个月。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/battery_life.png" alt="pir" width={800} height="auto" /></p>

### 温度、光线、运动传感器

内置温度和光线传感器，可随时追踪环境数据。例如，温度数据可用于推断食品或疫苗是否变质；光线数据可显示是否被不必要的观察者看到。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sensor.png" alt="pir" width={800} height="auto" /></p>

### 基于去中心化网关网络的位置验证

Helium 的去中心化网络基于信任机制，每个网关共享其位置，Helium 验证这些位置的真实性。当使用 Helium 与 T1000 时，通过交叉检查网关的位置，可以获得 T1000 的大致位置。这为数据增加了额外的验证层，与其他网络相比提高了数据的有效性。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/helium_map.png" alt="pir" width={800} height="auto" /></p>

### 紧急报告

运动传感器用于检测异常，SOS按钮用于紧急报告，并自动切换到高频数据传输模式。

<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/blog/wp-content/uploads/2023/06/%E7%94%BB%E6%9D%BF-4@1.5x.png" alt="pir" width={800} height="auto" /></p>

## 架构

<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/blog/wp-content/uploads/2023/06/%E7%B4%A0%E6%9D%9033.png" alt="pir" width={800} height="auto" /></p>

## 应用场景

* 国际资产追踪
* 搜救
* 设备监控

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/applications.png" alt="pir" width={800} height="auto" /></p>

## 规格

### 型号规格

我们为用户提供两种不同的解决方案，并分为四个版本：A、B、C 和 D。T1000 A/B 支持常规 GNSS 定位，而 T1000 C/D 支持 LoRa Cloud 地理定位服务。

* **T1000-A/T1000-B**：GNSS 数据无特殊加密。

* **T1000-C/T1000-D**: GNSS 数据通过 Semtech LoRa Edge 加密，GNSS 数据需要通过 [LoRa Cloud](https://www.loracloud.com/) 解密。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/model_spec2.png" alt="pir" width={800} height="auto" /></p>


<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/blog/wp-content/uploads/2023/06/%E7%94%BB%E6%9D%BF-11@1.5x.png" alt="pir" width={800} height="auto" /></p>



### 通用参数

|产品型号|T1000-A/T1000-B/T1000-C/T1000-D|
| :- | :- |
|回传方式|LoRaWAN® (v1.0.4 Class A)|
|蓝牙|蓝牙 v5.1，通过 App 设置|
|LoRaWAN 频段计划|IN865/EU868/US915/AU915/AS923/KR920/RU864|
|温度|<p>范围：-20 至 60℃;</p><p>精度：± 1℃ (最小 ±0.5℃，最大 ±1℃)</p><p>分辨率：0.1℃</p>|
|光线|0 至 100%（0% 为黑暗，100% 为最亮）|
|三轴加速度计|三轴加速度计用于检测运动|
|LED 和蜂鸣器|1 个 LED 和 1 个蜂鸣器用于指示状态|
|按钮|1 个按钮用于操作和触发事件（SOS）|
|天线|内置天线（GNSS/LoRa/Wi-Fi/BLE）|
|通信距离|2 至 5 公里（取决于网关天线、安装和环境）|
|防护等级|IP65|
|尺寸|85 x 55 x 6.5 mm|
|设备重量|32g|
|工作温度|-20℃ 至 +60<a name="ole_link12"></a>℃|
|工作湿度|5% - 95%（无冷凝）|
|认证|CE /FCC /TELEC /RoHS /REACH|

**定位**

|GNSS 星座|<p>T1000-A/B: GPS/GLONASS/Galileo/BeiDou/QZSS</p><p>T1000-C/D: GPS/ BeiDou</p>|
| :- | :- |
|GNSS 灵敏度|-145dBm 冷启动 / -160 dBm 跟踪|
|GNSS 定位精度|2\.5m CEP 50%|
|Wi-Fi 定位|被动扫描，上传扫描到的 4 个 MAC 地址|
|蓝牙定位|上传信号最强的 3 个 Beacon 的 MAC 地址|
|数据缓存|当没有 LoRaWAN 网络时可缓存 1000 条数据|

**电池**

|电池容量|可充电锂电池，700mAh|
| :- | :- |
|\*电池寿命估算|单次充电可使用 4 个月（每小时上行一次，仅 GNSS 数据）|
|电池寿命监控|定期上行电池电量|
|充电线（不包括适配器）|USB 磁吸充电线，1 米|
|<a name="ole_link9"></a>电源输入电压|4\.7 至 5.5V DC|
|充电温度限制|0 至 +45℃（超出温度范围时，充电将受限，LED 会快速闪烁）|