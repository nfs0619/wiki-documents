---
description: XIAO MG24 示例 - Matter
title: Seeed Studio XIAO MG24 示例 - Matter
image: https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/top.jpg
slug: /cn/xiao_mg24_matter
last_update:
  date: 05/15/2025
  author: Spencer
sidebar_position: 2
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 简介

Matter 是一个**开源的、统一的标准**，用于智能家居技术，旨在促进设备和生态系统之间的互操作性。由连接标准联盟（CSA）开发，它使来自不同制造商的设备能够在无需互联网连接的情况下无缝通信。Matter 支持与 Apple HomeKit、Google Home 和 Amazon Alexa 等平台的原生兼容性，从而更容易将设备集成到智能家居设置中。有关 Matter 的更深入了解，请参考 [官方 Matter 文档](https://project-chip.github.io/connectedhomeip-doc/index.html)。

> 在 2024 年[^1]，Silicon Labs 和 Arduino 联手降低 Matter 采用的门槛，提供了一条简化的开发路径，使得在 Arduino 生态系统中使用 Matter 更加简单。这一合作旨在让 Matter 开发更易于访问，帮助 Arduino 开发者克服典型挑战并无缝采用 Matter。

[^1]: [Silicon Labs 和 Arduino 合作推动 Matter 普及 - 2024 年 2 月 6 日](https://news.silabs.com/2024-02-06-Silicon-Labs-and-Arduino-Partner-to-Democratize-Matter)

Matter 在本地网络上高效运行，提供可靠、低延迟的通信，而无需互联网访问。这一特性显著提高了设备的安全性和性能。

本指南将引导您在 XIAO MG24 上开发一个 Matter 应用程序，使用 Arduino。

## 前置条件

在 XIAO MG24 上开发 Matter 应用程序之前，请确保以下硬件和软件组件已准备就绪。

### 硬件

- **Seeed Studio XIAO MG24** 开发板。
- **支持的 Matter Hub**（例如 Apple HomePod mini），用于连接到 Matter 网络。
- **Matter 控制器**（例如 Apple HomeKit 应用），用于管理和与您的 Matter 设备交互。

以下表格[^2]列出了不同生态系统中支持 Matter 的 Hub 示例：

<table>
  <tr>
    <th>制造商 / 生态系统</th>
    <th>设备</th>
  </tr>
  <tr>
    <td>Google Home</td>
    <td>Nest Hub Gen2</td>
  </tr>
  <tr>
    <td>Apple HomeKit</td>
    <td>HomePod Gen2, HomePod mini</td>
  </tr>
  <tr>
    <td>Amazon Alexa</td>
    <td>Echo Gen4</td>
  </tr>
  <tr>
    <td>Raspberry Pi OTBR</td>
    <td>Raspberry Pi</td>
  </tr>
</table>

默认情况下，假设您至少有一个 [Matter Hub](https://en.wikipedia.org/wiki/Matter_(standard)#Supported_ecosystems_and_hubs) 和一个 Matter 控制器（例如安装了 HomeKit 的 iPhone）用于测试。

[^2]: [README - Arduino Matter 库](https://github.com/SiliconLabs/arduino/blob/main/libraries/Matter/readme.md)

### 软件

所需的软件包括 **带有 Silicon Labs Arduino Core 的 Arduino IDE**：

- 如果尚未安装，请下载并设置 [Silicon Labs Arduino Core](https://github.com/SiliconLabs/arduino)，以确保与 XIAO MG24 的兼容性。
- 有关详细的设置说明，请参考 [入门指南](/xiao_mg24_getting_started/#add-board)。

请务必选择 Matter 协议栈：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-arduino-tool-option.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>

## 快速开始：Matter 灯泡示例

[Matter 灯泡示例](https://github.com/Silabs/arduino-matter/tree/main/examples/MatterLightBulb) 展示了一个简单的 Matter 应用程序，允许通过 Matter 网络控制 `内置 LED`。此示例为新接触 Matter 集成的开发者提供了一个实用的起点。

在 Arduino IDE 中访问该示例：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-bulb-example.png" style={{width:480, height:'auto', "border-radius": '12.8px'}}/></div>

为了方便起见，以下提供了示例代码中设备名称的修改，以便进行个性化设置。

```cpp
/*
   Matter 灯泡示例

   该示例展示了如何使用 Arduino Matter API 创建一个简单的开/关灯泡。

   该示例允许用户通过 Matter 控制板载 LED。
   设备需要先被添加到一个 Matter Hub。

   作者: Tamas Jozsi (Silicon Labs)
   修改者: Spencer Y (Seeed Studio)
 */
#include <Matter.h>
#include <MatterLightbulb.h>

MatterLightbulb matter_bulb;

void setup()
{
  Serial.begin(115200);
  Matter.begin();
  matter_bulb.begin();

  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);

  Serial.println("Matter 灯泡");

  matter_bulb.set_device_name("XIAO MG24 灯泡");    // 自定义默认设备名称
  matter_bulb.set_vendor_name("Seeed Studio");      // 设置厂商名称
  matter_bulb.set_product_name("Seeed Matter 灯泡");    // 定义产品名称

  if (!Matter.isDeviceCommissioned()) {
    Serial.println("Matter 设备尚未被添加");
    Serial.println("使用手动配对码或二维码将其添加到您的 Matter Hub");
    Serial.printf("手动配对码: %s\n", Matter.getManualPairingCode().c_str());
    Serial.printf("二维码 URL: %s\n", Matter.getOnboardingQRCodeUrl().c_str());
  }
  while (!Matter.isDeviceCommissioned()) {
    delay(200);
  }

  Serial.println("等待 Thread 网络...");
  while (!Matter.isDeviceThreadConnected()) {
    delay(200);
  }
  Serial.println("已连接到 Thread 网络");

  Serial.println("等待 Matter 设备发现...");
  while (!matter_bulb.is_online()) {
    delay(200);
  }
  Serial.println("Matter 设备现已上线");
}

void loop()
{
  static bool matter_lightbulb_last_state = false;
  bool matter_lightbulb_current_state = matter_bulb.get_onoff();

  // 如果状态为 ON 且之前状态为 OFF，则点亮 LED
  if (matter_lightbulb_current_state && !matter_lightbulb_last_state) {
    matter_lightbulb_last_state = matter_lightbulb_current_state;
    digitalWrite(LED_BUILTIN, LED_BUILTIN_ACTIVE);
    Serial.println("灯泡已开启");
  }

  // 如果状态为 OFF 且之前状态为 ON，则关闭 LED
  if (!matter_lightbulb_current_state && matter_lightbulb_last_state) {
    matter_lightbulb_last_state = matter_lightbulb_current_state;
    digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
    Serial.println("灯泡已关闭");
  }
}
```

### 烧录固件

1. 将代码复制到 Arduino IDE 中，并上传到 XIAO MG24 开发板。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-lightbulb-flash.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>
2. 烧录固件后，按下 `RESET` 按钮或重新连接 XIAO MG24 开发板以重启设备。
3. 打开串口监视器以确认设置。您应该会看到类似以下的输出：

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-qr-url.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>

### 用于设备注册的二维码

串口监视器将显示一个用于生成二维码的 URL，该二维码是设备注册所需的。复制该 URL，将其粘贴到浏览器中，并使用您的 Matter 控制器（例如 HomeKit）扫描生成的二维码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-qr-scan.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>

### 测试设备

扫描二维码后，Matter 控制器（HomeKit）将提示您确认设备的身份。一旦确认，设备将在应用中可见。您现在可以通过应用界面控制 XIAO MG24 的内置 LED，并直接测试其响应能力。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-device-online.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>

<iframe
  className="youtube-video-r"
  src="https://youtube.com/embed/tmCpIWuRojQ"
  title="MG24 Matter Lightbulb Example"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  style={{ width: '380px', height: '640px' }}
></iframe>

## 参考与资源

如果您是 Matter 的新手，以下资源提供了基础知识和开发支持，帮助您在 Matter 生态系统中开展工作：

- **[快速入门指南](https://docs.silabs.com/matter/2.2.0/matter-fundamentals/)**：学习 Matter 基础知识的理想起点，涵盖生态系统的基本概念和组件。
- **[Matter 开发者旅程](https://www.silabs.com/wireless/matter/matter-developer-journey)**：全面指导 Matter 开发过程，包括必要的工具、资源以及有效实施的最佳实践。
- **[Matter 规范](https://csa-iot.org/developer-resource/specifications-download-request/)**：Matter 协议及其组件的技术规范。这是了解协议功能和操作细节的主要资源。
- **[设备数据模型 - Google Home 开发者](https://developers.home.google.com/matter/primer/device-data-model)**：深入解释设备数据模型，该模型标准化了设备功能和能力在 Matter 生态系统中的表示方式。
- **[Matter 开发框架概述](/matter_development_framework)**：专门针对 XIAO ESP32C6 的 Matter 开发框架指南，提供了开发 Matter 设备的替代方法。

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>