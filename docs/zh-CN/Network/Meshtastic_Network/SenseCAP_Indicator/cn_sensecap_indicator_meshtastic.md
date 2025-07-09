---
description: SenseCAP Indicator Meshtastic版本入门指南
title: SenseCAP Indicator入门指南
keywords:
- Meshtastic
- Indicator
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/indicator-page_1.webp
slug: /cn/sensecap_indicator_meshtastic
last_update:
  date: 4/25/2025
  author: Jessie
---




<div className="table-center">
  <video width="730" height="500" controls autoPlay muted>
    <source
      src="https://media-cdn.seeedstudio.com/media/catalog/product/1/-/1-114993532_sensecap_indicator_for_meshtastic_lora__2.mp4"
      type="video/mp4"
    />
  </video>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1L-for-Meshtastic-p-6304.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>



SenseCAP Indicator Meshtastic版本一款专为 Meshtastic® 设计的 4 英寸触摸屏设备，搭载 ESP32 和 RP2040 双 MCU，支持 Wi-Fi、BLE 和 LoRa®。它是一个开源且功能强大的物联网开发平台。

## 基本介绍

### 产品特点


* **支持 Meshtastic：**预装 Meshtastic 固件，开机即可使用。您也可以使用 Meshtastic Flasher 升级固件。<br/>
* **双 MCU 和丰富的 GPIO 接口：**配备强大的 ESP32S3 和 RP2040 双 MCU，以及超过 400 个 Grove 兼容 GPIO，提供灵活的扩展选项。<br/>
* **用于物联网连接的本地 LoRa® 集线器：**该设备集成了 Semtech SX1262 LoRa® 芯片，可通过教程转换为 LoRaWAN® 单通道网关。或者，您也可以通过 Wi-Fi 将 LoRa® 设备连接到 Matter 等热门物联网平台。<br/>
* **完全开源平台**：利用广泛的 ESP32 和 Raspberry Pi 开源生态系统，实现无限的应用可能性。<br/>
* **适用于多种应用场景**：可用作 Meshtastic 桌面节点或车载节点，以及 LoRaWAN® 单通道网关。


### 规格参数

|屏幕|3\.95 英寸, 电容式RGB触摸屏|
| :- | :- |
|**屏幕分辨率**|480 x 480 像素|
|**供电**|5V-DC, 1A|
|**处理器**|<p>**ESP32-S3:** Xtensa® dual-core 32-bit up to 240 MHz</p><p>**RP2040:** Dual ARM Cortex-M0+ up to 133MHz</p>|
|**Flash**|<p>**ESP32-S3:** 8MB</p><p>**RP2040:** 2MB</p>|
|**外部存储**|支持高达 32GB 的 Micro SD 卡（不包括）|
|**Wi-Fi**|802\.11b/g/n, 2.4GHz|
|**蓝牙**|Bluetooth 5.0 LE|
|**LoRa(SX1262**)|支持 862-930MHz|
|**蜂鸣器(暂未开发)**|MLT-8530, 谐振频率：2700Hz|
|**认证**|CE/FCC|

### 硬件概览


<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/HO-114993532.png" alt="pir" width={800} height="auto" /></p>



## 固件烧录

### 烧录应用固件

**视频指导**

<iframe width="100%" height="500" src="https://www.youtube.com/embed/55Sz8kHSyV4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


访问[Meshtastic Web Flasher](https://flasher.meshtastic.org/).

选择 `Seeed SenseCAP Indicator`，然后选择最新版固件，点击 `Flash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/indicator-flash.png" alt="pir" width={800} height="auto" /></p>


按住顶部按键，然后将设备连接到电脑。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/press-button.png" alt="pir" width={400} height="auto" /></p>



打开 `Full Erase and Install`, 然后点击 `Erase Flash and Install`.

你的电脑会出现两个端口，请选择 `USB serial port` ，然后点击`Connect`.

:::caution 注意
请选择`USB Serial` 端口, 不要选择INDICATOR RP2040.
:::



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect11.png" alt="pir" width={800} height="auto" /></p>



### 烧录GPS固件


SenseCAP 指示灯没有内置 GPS，要获取 GPS 位置，需要一个 [Grove GPS 模块](https://www.seeedstudio.com/Grove-GPS-Air530-p-4584.html)。<br/>
将 GPS 模块连接到 Grove 端口，然后刷新 GPS 固件。


* **[GPS 固件下载](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/meshtastic_gps.ino.uf2)**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps-connect.png" alt="pir" width={800} height="auto" /></p>



使用镊子或其他工具长按此内部按钮，然后将设备连接到电脑，连接后松开按钮，此时你的电脑会出现一个`RPI-RP2` 盘。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_56.png" alt="pir" width={600} height="auto" /></p>


下载`UF2` 文件然后将其拖拽到`RPI-RP2` 盘，设备会自动开始烧录固件，然后重启。



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/disk.png" alt="pir" width={600} height="auto" /></p>






## 入门指南

下载 `Meshtastic` App:

* [IOS App](https://meshtastic.org/docs/category/apple-apps/)
* [Android App](https://meshtastic.org/docs/category/android-app/)



### 连接到APP

* 将设备上电开机, 屏幕上会显示设备的MAC地址。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name4.png" alt="pir" width={700} height="auto" /></p>


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS App">

* 在蓝牙界面选择目标设备

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>


* 输入屏幕中显示的PIN码 ，然后点击连接。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair111.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">


* 点击 `+` 并选择目标设备

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>


* 输入屏幕中显示的PIN码 ，然后点击连接。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

  
</TabItem>
</Tabs>





### 配置参数



要开始使用 Mesh 网络通信，您必须设置所在区域。该设置决定设备使用的频率范围，应根据您的地理位置进行选择。

<Tabs>
<TabItem value="ios" label="IOS App">


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>



</TabItem>

<TabItem value="android" label="Android App">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>


</TabItem>
</Tabs>




**Region List**



|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Unset|N/A|N/A|N/A|
|US|United States|902\.0 - 928.0|100|30|
|EU\_868|European Union 868MHz|869\.4 - 869.65|10|27|


参考 [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) 获取完整列表.


:::info
**EU_868**区域必须遵守每小时 10% 的占空比限制，每分钟按滚动 1 小时计算。如果达到限制，设备将暂停发射，直到允许为止。
:::


现在你已经设置好了设备的 LoRa Region,已经可以正常使用设备，更多的配置请见官方文档[LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/).

### 防范措施

#### 角色选择

:::caution
请勿选择`Repeater`角色，这将导致设备反复重启。
:::


#### GPS模组相关


如果您没有连接GPS模块，请在`Meshtastic`应用程序中禁用GPS功能，否则设备将不断尝试寻找GPS模块，这将导致设备需要很长时间才能启动屏幕。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps-module.png" alt="pir" width={600} height="auto" /></p>



