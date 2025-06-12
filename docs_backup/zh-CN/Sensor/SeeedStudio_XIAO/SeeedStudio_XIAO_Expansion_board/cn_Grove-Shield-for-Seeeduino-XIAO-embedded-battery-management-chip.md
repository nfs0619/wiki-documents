---
description: Grove Shield for Seeed Studio XIAO，内置电池管理芯片
title: Grove Shield for XIAO with battery management chip
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Shield-for-Seeeduino-XIAO-embedded-battery-management-chip
last_update:
  date: 05/15/2025
  author: shuxu hu
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" alt="pir" width={600} height="auto" /></p>

## 概述

Seeed Studio Grove Base for XIAO 是一款即插即用的 Grove 扩展板，适用于 **[Seeed Studio XIAO](https://wiki.seeedstudio.com/Seeeduino-XIAO/)**。通过板载电池管理芯片和电池焊盘，您可以轻松使用锂电池为 Seeed Studio XIAO 供电并为其充电。板载的 8 个 Grove 接口包括两个 Grove I2C 和一个 UART。它充当 Seeed Studio XIAO 和 Seeed Grove 系统之间的桥梁。Flash SPI 焊盘允许您为 Seeed Studio XIAO 添加 Flash，以扩展其内存空间，为 Seeed Studio XIAO 提供更多可能性。

通过板载电池管理芯片和电池焊盘，您可以轻松使用 3.7V 锂电池为 Seeed Studio XIAO 供电并为其充电，使您的项目，尤其是可穿戴设备项目，更加灵活和便携。您甚至可以根据项目的实际需求，通过板载 PCB 打孔将板子分离（分离后尺寸仅为 25*39mm），使其更小巧，重量也会从 13g 减少到 10g！
<!-- 图有问题 
<p style={{textAlign: 'center'}}><a href="target=&quot;_blank&quot;"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/01.png" border={0} /></a></p> -->

作为一块扩展板，Seeed Studio Grove Base for XIAO 还引出了 Seeed Studio XIAO 的全部 14 个引脚，并且其板载电源开关和充电状态指示灯使其更加用户友好。该扩展板甚至为高级开发者预留了 SPI-Flash 焊盘，方便需要为 Seeed Studio XIAO 添加 Flash 以扩展内存空间的用户，为 Seeed Studio XIAO 提供更多可能性。

与 Seeed Studio XIAO 的外形尺寸一致，所有 Seeed Studio XIAO 板均支持 [Grove Shield for XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) 和 [Seeed Studio XIAO 扩展板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)。两者的引脚略有不同，参考引脚图即可轻松管理。

:::note
此产品不包含 Seeed Studio XIAO 板，如果需要，请点击 [这里](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

#### 硬件概览

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/hardware-overview.png" border={0} /></p>


#### 引脚描述

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/pinout.png" border={0} /></p>

## 特性

- 板载锂电池充电和管理功能
- Grove 接口（Grove IIC x 2，Grove UART x 1），全部 14 个 GPIO 引出
- 紧凑且可分离设计
- 预留 Flash SPI 焊盘
- 板载电源开关和充电状态指示灯

## 规格参数

|项目|参数|
|---|---|
|工作电压|3.3V / 3.7V 锂电池|
|负载能力|800mA|
|充电电流|400mA（最大值）|
|工作温度|- 40°C 至 85°C|
|存储温度|-55°C 至 150°C|
|Grove 接口|I2C *2 / UART *1|

## 应用场景

- 可穿戴设备
- 快速原型开发
- Grove 模块测试
- 需要小尺寸的项目

## 支持的平台

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## 入门指南

### 所需材料

| Seeed Studio Seeed Studio XIAO | Grove-Doppler-Radar| Seeed Studio Grove Base for XIAO|
|--------------|--------------|--------------|
|<p><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/seeeduino-XIAO-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/small.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Thumbnail-27.png" alt="pir" width={600} height="auto" /></p>
|[立即购买](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[立即购买](https://www.seeedstudio.com/Grove-Doppler-Radar-BGT24LTR11-p-4572.html)|[立即购买](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)|

<!-- 如果需要使用 Seeed Studio XIAO Grove Shield 背面的焊盘为 SOIC8 封装的闪存，请焊接 PIN1。 -->

<!-- 图有问题<p style={{textAlign: 'center'}}><a href="target=&quot;_blank&quot;"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/Grove-shield-XIAO.png" border={0} /></a></p> -->

#### Grove-Doppler Radar 外部引脚描述

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/pin-1.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/pin-1.png" alt="pir" width={600} height="auto" /></p>

|引脚编号|信号名称|引脚描述|
|---|---|----|
|1| DIV_OUT |来自 BGT24LTR11 的频率分频输出|
|2|GND|地|
|3|VCC_5V_EXT|外部+5.0V 输入电源引脚（最大值=5.5V）|
|4|VTUNE|VCO 频率调谐电压|
|5|IFQ_HG|BGT24LTR11 Q 通道模拟信号输出 - 第二增益级|
|6|IFI_HG|BGT24LTR11 I 通道模拟信号输出 - 第二增益级|
|7|PWM_OUT|带有 CCU4 的外部用户可配置 GPIO|
|8|OUT1|外部 GPIO 引脚（用户可配置）|
|9|OUT2|外部 GPIO 引脚（用户可配置）|

### 硬件连接

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/hardware_connection.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/hardware_connection.jpg" alt="pir" width={600} height="auto" /></p>

:::tip
请轻轻插入 USB 数据线和 Doppler Radar 接口到 Seeed Studio XIAO 扩展板接口，否则可能会损坏端口。
:::

- **步骤 1.** 使用 Grove 数据线将 Doppler Radar 插入 Seeed Studio XIAO 扩展板。

- **步骤 2.** 使用 USB 数据线将 Seeed Studio XIAO 连接到电脑。

- **步骤 3.** 下载代码，请参考软件部分。

- **步骤 4.** 运行代码，结果将显示在 Arduino IDE 的 **串行监视器** 屏幕上。

### 软件

:::note
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 下载 [示例代码](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Seeed_Arduino_DopplerRadar.rar)。

- **步骤 2.** 将整个 **Seeed_Arduino_DopplerRadar** 文件复制并粘贴到 Arduino IDE 的库文件中。

- **步骤 3.** 使用 Arduino IDE 打开 **BGT24LTR11_DETECTION_TARGET** 文件。

- **步骤 4.** 上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。

#### 软件代码

```cpp
#include "GBT24LTR11.h"

#ifdef __AVR__
    #include <SoftwareSerial.h>
    SoftwareSerial SSerial(2, 3); // RX, TX
    #define COMSerial SSerial
    #define ShowSerial Serial

    GBT24LTR11<SoftwareSerial> GBT;
#endif

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
    #define COMSerial Serial1
    #define ShowSerial SerialUSB

    GBT24LTR11<Uart> GBT;
#endif

#ifdef ARDUINO_ARCH_STM32F4
    #define COMSerial Serial
    #define ShowSerial SerialUSB

    GBT24LTR11<HardwareSerial> GBT;
#endif

void setup() {
    // 在此处放置您的设置代码，仅运行一次：
    ShowSerial.begin(9600);
    COMSerial.begin(115200);
    GBT.init(COMSerial);
    while (!ShowSerial)
        ;
    while (!COMSerial)
        ;
    /*
        MODE 0 --> 检测目标模式
        MODE 1 --> I/Q ADC 模式
    */
    while (!GBT.setMode(0))
        ;
}

void loop() {
    // 在此处放置您的主代码，重复运行：
    uint16_t state = 0;
    ShowSerial.print("目标速度:");
    ShowSerial.println(GBT.getSpeed());
    state = GBT.getTargetState();
    //2 --> 目标接近
    //1 --> 目标离开
    //0 --> 未找到目标
    if (state == 2) {
        ShowSerial.println("目标接近");
    } else if (state == 1) {
        ShowSerial.println("目标离开");
    }
    delay(200);
}
```

:::success
  如果一切正常，您可以在 **串行监视器** 中看到如下结果：
:::
<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/outcome_1.png" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
    <figcaption><b>图 3</b>. <i>没有物体接近</i></figcaption>
  </figure>
</div>

如果有物体接近雷达或经过雷达，结果将如下改变：

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/outcome2.png" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
    <figcaption><b>图 3</b>. <i>物体接近</i></figcaption>
  </figure>
</div>

:::note
传感器能够检测的最低速度精度为 52cm/s，相当于 0.52m/s、3.6km/h 和 2.23mph。此外，函数 getSpeed() 返回的结果是 52cm/s 的倍数，并且是绝对值。
:::

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/res/Grove_Shield_for_Seeeduino_XIAO_v1.0.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[ZIP]** [Seeed Studio Grove Base for XIAO 附件](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/res/Grove_Shield_for_Seeeduino_XIAO_v1.0.rar)
- **[ZIP]** [示例代码库](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Seeed_Arduino_DopplerRadar.zip)
- **[PDF]** [Grove DopplerRadar (BGT24LTR11) 雷达模块通信协议 v1.1.pdf](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Grove_DopplerRadar(BGT24LTR11)Radar_module_communication_protocol_v1.1.pdf)
- **[PDF]** [ETA 3410 数据手册](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/res/ETA3410.pdf)

## 项目

<p><iframe src="https://www.youtube.com/embed/-HMEW2DN6Wg" width="560" height="315" frameborder="0" allowfullscreen=""></iframe></p>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>