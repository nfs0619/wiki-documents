---
description: Seeed Studio XIAO SAMD21 使用 TinyUSB
title: Seeed Studio XIAO SAMD21 使用 TinyUSB
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino-XIAO-TinyUSB
last_update:
  date: 05/15/2025
  author: shuxu hu
---

# Seeed Studio XIAO SAMD21 作为 USB 设备 (TinyUSB)

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-TinyUSB/XIAO-USB.png" /></div>

本篇 Wiki 介绍如何使用 TinyUSB 库将 Seeed Studio XIAO SAMD21 配置为 USB 客户端。通过该库，Seeed Studio XIAO SAMD21 可以用作 HID 设备，例如键盘、鼠标等。

此功能依赖于 [Adafruit TinyUSB Library for Arduino](https://github.com/adafruit/Adafruit_TinyUSB_Arduino)。该库已在 [**Seeed Studio XIAO SAMD21**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) 和 [**Wio Terminal(SAMD51)**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) 上测试，并正常工作。

## 安装 Adafruit TinyUSB Library for Arduino

:::note
  由于 "Adafruit TinyUSB Library for Arduino" 库进行了重大更新，版本 V1.0.0 及以上版本无法与 Seeed Studio XIAO SAMD21 一起使用。如果需要使用该库，请使用 V0.10.5 版本。
:::
1. 访问 [Adafruit TinyUSB Library for Arduino](https://github.com/adafruit/Adafruit_TinyUSB_Arduino) 仓库，并将整个仓库下载到本地。

2. 现在可以将库安装到 Arduino IDE 中。打开 Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`，选择刚刚下载的 `Adafruit_TinyUSB_Arduino` 文件。

<!-- ![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" alt="pir" width={600} height="auto" /></p>

## 简单示例代码

TinyUSB 库提供了许多示例代码，这里我们可以导航到 `Files` -> `Examples` -> `Adafruit TinyUSB Library` -> `HID` -> `hid_mouse`，找到一个简单的鼠标示例。将一个按钮连接到 Seeed Studio XIAO SAMD21 的 **D0** 引脚，并在代码中进行配置（#28），如下所示：

:::note
      请确保已将 `ArduinoCore-samd` 更新到最新版本，以避免编译错误。
:::
```cpp
/*********************************************************************
 Adafruit 投资时间和资源提供此开源代码，
 请通过购买 Adafruit 的产品支持 Adafruit 和开源硬件！

 MIT 许可证，更多信息请查看 LICENSE
 版权所有 (c) 2019 Ha Thach for Adafruit Industries
 上述所有文本以及以下启动画面必须包含在任何再分发中
*********************************************************************/

#include "Adafruit_TinyUSB.h"

/* 此代码演示 USB HID 鼠标
 * 按下按钮引脚将使鼠标移动到
 * - 显示器的右下角
 * 
 * 根据开发板的不同，按钮引脚
 * 和其活动状态（按下时）可能不同
 */
#if defined ARDUINO_SAMD_CIRCUITPLAYGROUND_EXPRESS
  const int pin = 4; // 左按钮
  bool activeState = true;
#elif defined ARDUINO_NRF52840_FEATHER
  const int pin = 7; // 用户按钮
  bool activeState = false;
#else
  const int pin = 0;
  bool activeState = true;
#endif
  

// 使用 TinyUSB 模板的 HID 报告描述符
// 单报告（无 ID）描述符
uint8_t const desc_hid_report[] =
{
  TUD_HID_REPORT_DESC_MOUSE()
};

// USB HID 对象
Adafruit_USBD_HID usb_hid;

// setup 函数在按下复位或为开发板供电时运行一次
void setup()
{
  // 设置按钮，拉高或拉低与活动状态相反
  pinMode(pin, activeState ? INPUT_PULLDOWN : INPUT_PULLUP);

  usb_hid.setPollInterval(2);
  usb_hid.setReportDescriptor(desc_hid_report, sizeof(desc_hid_report));

  usb_hid.begin();

  Serial.begin(115200);

  // 等待设备挂载
  while( !USBDevice.mounted() ) delay(1);

  Serial.println("Adafruit TinyUSB HID 鼠标示例");
}

void loop()
{
  // 每 10 毫秒轮询一次 GPIO
  delay(10);

  // 检查按钮是否被按下
  bool btn_pressed = (digitalRead(pin) == activeState);

  // 如果按钮未按下，则无需执行任何操作
  if (!btn_pressed) return;

  // 远程唤醒
  if ( USBDevice.suspended() )
  {
    // 如果我们处于挂起模式，并且主机启用了 REMOTE_WAKEUP 功能，则唤醒主机
    USBDevice.remoteWakeup();
  }

  if ( usb_hid.ready() )
  {
    int8_t const delta = 5;
    usb_hid.mouseMove(0, delta, delta); // 无 ID：向右 + 向下
  }
}
```

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>