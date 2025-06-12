---
description: 入门指南 - Seeed Studio XIAO nRF52840 系列
title: 入门指南 - Seeed Studio XIAO nRF52840 系列
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg
slug: /cn/XIAO_BLE
last_update:
  date: 05/15/2025
  author: Clara
---

# 入门指南 - Seeed Studio XIAO nRF52840 系列

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<meta name="google-site-verification" content="2bq3L0F_PFVokQM-qT-al7x9FcSNJOO8TtJfAHW43lE" />

<div className="w-full overflow-x-auto">
  <table className="min-w-full">
    <tr>
      <th>XIAO nRF52840</th>
      <th>XIAO nRF52840 Sense</th>
      <th>XIAO nRF52840 Plus</th>
      <th>XIAO nRF52840 Sense Plus</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img 
            src="https://files.seeedstudio.com/wiki/XIAO-BLE/nrf52840_front.jpg"
            style={{width: '100%', maxWidth: '250px', height: 'auto'}}
          />
        </div>
      </td>
      <td>
        <div style={{textAlign: 'center'}}>
          <img 
            src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840sence.png"
            style={{width: '100%', maxWidth: '250px', height: 'auto'}}
          />
        </div>
      </td>
      <td>
        <div style={{textAlign: 'center'}}>
          <img 
            src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840plus.png"
            style={{width: '100%', maxWidth: '250px', height: 'auto'}}
          />
        </div>
      </td>
      <td>
        <div style={{textAlign: 'center'}}>
          <img 
            src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840senceplus.png"
            style={{width: '100%', maxWidth: '250px', height: 'auto'}}
          />
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a 
            className="get_one_now_item" 
            href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html"
          >
            <strong>
              <span>
                <font color={'FFFFFF'} size={"4"}> 立即购买 🖱</font>
              </span>
            </strong>
          </a>
        </div>
      </td>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a 
            className="get_one_now_item" 
            href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html"
          >
            <strong>
              <span>
                <font color={'FFFFFF'} size={"4"}> 立即购买 🖱</font>
              </span>
            </strong>
          </a>
        </div>
      </td>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a 
            className="get_one_now_item" 
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html"
          >
            <strong>
              <span>
                <font color={'FFFFFF'} size={"4"}> 立即购买 🖱</font>
              </span>
            </strong>
          </a>
        </div>
      </td>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a 
            className="get_one_now_item" 
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html"
          >
            <strong>
              <span>
                <font color={'FFFFFF'} size={"4"}> 立即购买 🖱</font>
              </span>
            </strong>
          </a>
        </div>
      </td>
    </tr>
  </table>
</div>

作为 Seeed Studio XIAO 系列的首款无线产品，**Seeed Studio XIAO nRF52840** 配备了强大的 **Nordic nRF52840 MCU**，集成了 **蓝牙 5.0** 功能。同时，它具有**小巧精致的外形尺寸**，可用于可穿戴设备和物联网项目。其**单面表面贴装设计**和板载**蓝牙天线**能够极大地促进物联网项目的快速部署。

此外，该系列还有一个高级版本，**Seeed Studio XIAO nRF52840 Sense**。它集成了两个额外的板载传感器。其中一个是 **脉冲密度调制 (PDM) 数字麦克风**，可以实时接收音频数据，从而支持音频识别功能。另一个是 **6轴惯性测量单元 (IMU)**，在手势识别等 TinyML 项目中非常有用。这些板载传感器为用户提供了极大的便利，同时该板仍然保持超小尺寸。

新升级的 **XIAO nRF52840 Plus 和 XIAO nRF52840 Sense Plus** 在功能和可用性上有了显著提升。多功能引脚数量增加到 **20 个**，新增了 **I2S** 和 **SPI** 资源以支持更复杂的项目，**NFC 引脚**被暴露以便更轻松地集成到物联网和智能卡应用中，**BAT 引脚**重新定位以便更方便焊接，从而带来更友好的硬件体验。

与 Seeed Studio XIAO RP2040 相比，Seeed Studio XIAO nRF52840 提供了**更丰富的接口**。首先需要注意的是，板载的 **近场通信 (NFC) 接口**是可用的。其次，在 Type-C 接口旁边有一个小型的**复位按钮**。另一侧有一个**三合一 LED（用户 LED）**以及一个**充电 LED**，当连接电池时可指示充电状态。它有 **11 个数字 I/O** 可用作 **PWM 引脚**，以及 **6 个模拟 I/O** 可用作 **ADC 引脚**。它支持所有三种常见的串行接口，例如 **UART、I2C 和 SPI**。与 Seeed Studio XIAO RP2040 一样，它配备了**板载 2 MB 闪存**，这意味着它也可以使用 **Arduino、MicroPython、CircuitPython 或其他编程语言**进行编程。

Seeed Studio XIAO nRF52840 Sense 兼容 Seeed Studio XIAO 扩展板。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 特性

- 强大的无线功能：支持 Bluetooth 5.0，带有板载天线
- 强大的处理器：Nordic nRF52840，ARM® Cortex®-M4 32位处理器，带有 FPU，主频 64 MHz
- 超低功耗：待机功耗低于 5μA
- 电池充电芯片：支持锂电池充放电管理
- 板载 2 MB 闪存
- 板载 PDM 麦克风（仅限 Seeed Studio XIAO nRF52840 Sense）
- 板载 6 轴 LSM6DS3TR-C IMU（仅限 Seeed Studio XIAO nRF52840 Sense）
- 超小尺寸：21 x 17.8mm，Seeed Studio XIAO 系列经典外形，适用于可穿戴设备
- 丰富的接口：在 XIAO nRF52840 (Sense) 中提供 1xUART、1xI2C、1xSPI、1xNFC、1xSWD、11xGPIO(PWM)、6xADC；在 XIAO nRF52840 (Sense) Plus 中提供 2xUART、1xI2C、2xSPI、1xI2S、1xNFC、1xSWD、18xGPIO(PWM)、6xADC
- 单面元件，表面贴装设计

## 规格对比

<div class="table-center">
	<table align="center">
  <tr>
      <th>项目</th>
      <th style={{width:220, height:'auto'}}>Seeed Studio XIAO nRF52840</th>
      <th style={{width:220, height:'auto'}}>Seeed Studio XIAO nRF52840 Sense</th>
      <th style={{width:220, height:'auto'}}>Seeed Studio XIAO nRF52840 Plus</th>
      <th style={{width:220, height:'auto'}}>Seeed Studio XIAO nRF52840 Sense Plus</th>
  </tr>
  <tr>
      <th>处理器</th>
      <td colspan="4" align="center">Nordic nRF52840，ARM® Cortex®-M4 32位处理器，带有 FPU，主频 64 MHz</td>
  </tr>
  <tr>
      <th>无线连接</th>
      <td colspan="4" align="center">Bluetooth 5.0/BLE/NFC</td>
  </tr>
  <tr>
      <th>内存</th>
      <td colspan="4" align="center">256 KB RAM，1MB 闪存，2MB 板载闪存</td>
  </tr>
  <tr>
      <th>内置传感器</th>
      <td align="center">无</td>
      <td align="center">6 DOF IMU (LSM6DS3TR-C)，PDM 麦克风</td>
      <td align="center">无</td>
      <td align="center">6 DOF IMU (LSM6DS3TR-C)，PDM 麦克风</td>
  </tr>
  <tr>
      <th>接口</th>
      <td colspan="2" align="center">1xI2C，1xUART，1xSPI</td>
      <td colspan="2" align="center">1xI2C，2xUART，2xSPI，1xI2S</td>
  </tr>
  <tr>
      <th>PWM/模拟引脚</th>
      <td colspan="2" align="center">11/6</td>
      <td colspan="2" align="center">20/6</td>
  </tr>
  <tr>
      <th>板载按钮</th>
      <td colspan="4" align="center">复位按钮</td>
  </tr>
  <tr>
      <th>板载 LED</th>
      <td colspan="4" align="center">三合一 LED/充电 LED</td>
  </tr>
  <tr>
      <th>电池充电芯片</th>
      <td colspan="4" align="center">BQ25101</td>
  </tr>
  <tr>
      <th>编程语言</th>
      <td colspan="4" align="center">Arduino/MicroPython/CircuitPython</td>
  </tr>
  </table>
</div>

## 硬件概览

<Tabs>
<TabItem  value="52540(Sense)" label="XIAO nRF52840/XIAO nRF52840 Sense" default>

<table align="center">
  <tr>
    <th>XIAO nRF52840/XIAO nRF52840 Sense 前视图标注图</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/front-pinout-4.jpg" style={{width:700, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF52840/XIAO nRF52840 Sense 背视图标注图</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https:///files.seeedstudio.com/wiki/XIAO-BLE/back-pinout-5.jpg" style={{width:700, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF52840/XIAO nRF52840 Sense 引脚列表</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https:///files.seeedstudio.com/wiki/XIAO-BLE/pinout2.png" style={{width:1000, height:'auto'}}/></div></td>
  </tr>
</table>

 </TabItem>
 <TabItem value="52840Plus" label="XIAO nRF52840 Plus/XIAO nRF52840 Sense Plus" default>

 <table align="center">
  <tr>
    <th>XIAO nRF52840 Plus 前视图标注图</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/plus_front.png" style={{width:700, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF52840 Plus 背视图标注图</th>
  </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/plus_back.png" style={{width:700, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF52840 Plus 引脚列表</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/plus_pinout.png" style={{width:1000, height:'auto'}}/></div></td>
  </tr>
 </table>

</TabItem>

</Tabs>

## 两个 Arduino 库

Seeed Studio XIAO nRF52840 集成了许多功能于一个小型板卡中，有时可能无法发挥其最佳性能。因此，Seeed 发布了两个 Arduino 库，以便**最大化每个功能的性能**。因此：

- 如果您想应用 **蓝牙功能** 和 "**低功耗功能**"，推荐使用 `Seeed nRF52 Boards` 库。
- 如果您想在 **嵌入式机器学习应用** 中使用，或应用 "**IMU 和 PDM 高级功能**"，推荐使用 `Seeed nRF52 mbed-enabled Boards` 库。
- 这两个库在基本使用（如 **LED、数字、模拟、串口、I2C、SPI**）方面都支持得很好。

这两个库支持的引脚定义可能略有不同，Seeed 将持续更新 Wiki 以确保清晰。

:::tip
1. 如果您使用 Seeed nRF52 Boards 的板载包，串口功能可能无法编译。解决方法是在代码中添加行 `#include <Adafruit_TinyUSB.h>`。您可以从以下链接下载此包：https://github.com/adafruit/Adafruit_TinyUSB_Arduino

2. 如果您更喜欢更简单的方法，可以从一开始选择 Seeed nRF52 mbed-enabled Boards。它支持串口功能的编译，无需额外修改。
:::

## 入门指南

首先，我们将把 Seeed Studio XIAO nRF52840 (Sense) 连接到计算机，并从 Arduino IDE 上传一个简单的代码，以检查板卡是否正常工作。

### 硬件设置

您需要准备以下物品：

- 1 x [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) 或 [Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- 1 x 计算机
- 1 x USB Type-C 数据线

:::tip
有些 USB 数据线只能供电，无法传输数据。如果您没有 USB 数据线，或者不确定您的 USB 数据线是否可以传输数据，可以查看 [Seeed USB Type-C 支持 USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)。
:::
通过 USB Type-C 数据线将 Seeed Studio XIAO nRF52840 (Sense) 连接到您的电脑。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/bletpyecconnect.png" alt="pir" width={500} height="auto" /></p>

### 软件设置

- **步骤 1.** 根据您的操作系统下载并安装最新版本的 Arduino IDE

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/software"><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" alt="pir" width={700} height="auto" /></a></p>

- **步骤 2.** 启动 Arduino 应用程序

- **步骤 3.** 将 Seeed Studio XIAO nRF52840 (Sense) 板卡包添加到 Arduino IDE

进入 **File > Preferences**，并在 **"Additional Boards Manager URLs"** 中填写以下 URL：
    *<https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json>*

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" alt="pir" width={700} height="auto" /></p>

进入 **Tools > Board > Boards Manager...**，在搜索框中输入关键字 "**seeed nrf52**"，选择您需要的最新版本板卡并安装。您可以安装多个。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528401.png" alt="pir" width={700} height="auto" /></p>

- **步骤 4.** 选择您的板卡和端口

**板卡**

安装板卡包后，进入 **Tools > Board** 并选择您需要的板卡，继续选择 "**Seeed XIAO nRF52840 Sense**"。现在我们已经完成了在 Arduino IDE 中设置 Seeed Studio XIAO nRF52840 (Sense)。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528402.png" alt="pir" width={700} height="auto" /></p>

**端口**

进入 **Tools > Port** 并选择已连接的 Seeed Studio XIAO nRF52840 (Sense) 的串口名称。通常是 COM3 或更高（**COM1** 和 **COM2** 通常保留给硬件串口）。已连接的 Seeed Studio XIAO nRF52840 (Sense) 的串口名称通常包含括号，显示为 **Seeed Studio XIAO nRF52840** 或 **Seeed Studio XIAO nRF52840 Sense**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/port.png" alt="pir" width={550} height="auto" /></p>

- **步骤 5.** 进入 **File > Examples > 01.Basics > Blink** 打开 **Blink** 示例

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" alt="pir" width={550} height="auto" /></p>

- **步骤 6.** 点击 **Upload** 按钮将 Blink 示例代码上传到板卡

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" alt="pir" width={500} height="auto" /></p>

上传完成后，您将看到内置的红色 LED 以 1 秒的间隔闪烁。这表示连接成功，现在您可以使用 Seeed Studio XIAO nRF52840 (Sense) 探索更多项目！

## 使用内置三合一 LED

Seeed Studio XIAO nRF52840 (Sense) 配备了一个**板载三合一 LED**，用户可以对其进行编程。现在您将学习如何使用 Arduino 分别控制 RGB 颜色！

首先，您需要了解，当通过代码控制此 LED 时，其行为与通常的 LED 不同。当我们给出**低电平信号**时，**LED 会亮起**；当我们给出**高电平信号**时，**LED 会熄灭**。这是因为此 LED 由共阳极控制，仅在低电平信号下点亮。

以下是一个示例代码：

```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);   
}
```

在这里，即使使用了 **HIGH**，LED 也会**熄灭**。您需要将 **HIGH** 替换为 **LOW** 才能点亮 LED。

参考以下 LED 的引脚映射，并在代码中使用它们：

- 红色 LED = LED_BUILTIN 或 LED_RED
- 蓝色 LED = LED_BLUE
- 绿色 LED = LED_GREEN

## 功耗验证

Seeed Studio XIAO nRF52840 的功耗较低，以下是验证方法。强烈建议使用 `Seeed nRF52 Boards` 库。

- **步骤 1.** 使用 **JLink** 下载器刷写 Seeed Studio XIAO nRF52840 (Sense) 的 [bootloader 固件](https://github.com/0hotpotman0/BLE_52840_Core/blob/main/bootloader/Seeed_XIAO_nRF52840_Sense/Seeed_XIAO_nRF52840_Sense_bootloader-0.6.1_s140_7.3.0.hex)。

:::note
如果您使用的是 Seeed Studio XIAO nRF52840 的出厂固件，或者从未更改过 Seeed Studio XIAO nRF52840 的固件，可以跳过此步骤。
:::

- **步骤 2.** 使用 `Seeed nRF52 Boards` 库。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528403.png" alt="pir" width={800} height="auto" /></p>

- **步骤 3.** 上传 deep_sleep 示例代码并使用 **Arduino** 运行

```cpp
// MIT 许可证 (MIT)
// 版权所有 (c) 2019 Ha Thach for Adafruit Industries

#include "SdFat.h"
#include "Adafruit_SPIFlash.h"

// 取消注释以使用自定义 SPI 和 SS，例如 FRAM 扩展板
// #define CUSTOM_CS   A5
// #define CUSTOM_SPI  SPI

#if defined(CUSTOM_CS) && defined(CUSTOM_SPI)
  Adafruit_FlashTransport_SPI flashTransport(CUSTOM_CS, CUSTOM_SPI);

#elif defined(ARDUINO_ARCH_ESP32)
  // ESP32 使用相同的闪存设备存储代码。
  // 因此无需指定 SPI 和 SS
  Adafruit_FlashTransport_ESP32 flashTransport;

#else
  // 板载外部闪存 (QSPI 或 SPI) 宏应已在您的板卡变体中定义（如果支持）
  // - EXTERNAL_FLASH_USE_QSPI
  // - EXTERNAL_FLASH_USE_CS/EXTERNAL_FLASH_USE_SPI
  #if defined(EXTERNAL_FLASH_USE_QSPI)
    Adafruit_FlashTransport_QSPI flashTransport;

  #elif defined(EXTERNAL_FLASH_USE_SPI)
    Adafruit_FlashTransport_SPI flashTransport(EXTERNAL_FLASH_USE_CS, EXTERNAL_FLASH_USE_SPI);

  #else
    #error 您的板卡变体中未定义 QSPI/SPI 闪存！
  #endif
#endif

Adafruit_SPIFlash flash(&flashTransport);

/* 如果您想使用特定的闪存设备，例如用于自定义板卡，请首先在 Adafruit_SPIFlash\src\flash_devices.h 中查找它。
 * 如果它不在其中，您需要创建自己的定义，例如以下 W25Q80DLX_EXAMPLE 示例。
 * 这些定义需要根据您想使用的闪存设备的数据表进行编辑。
 * 如果您不确定制造商 ID、内存类型和容量值应该是什么，请尝试运行草图并查看串行输出。
 * 闪存设备会将这些值报告为单个十六进制值（JDEC ID）。
 * 例如，列表中的第一个设备 - W25Q80DLX - 将其 JDEC ID 报告为 0xef4014，由以下三个值组成：
 * manufacturer_id = 0xef
 * memory_type     = 0x40
 * capacity        = 0x14
 * 使用正确定义的宏，您可以创建设备定义数组，如下所示。
 */
// 用户定义闪存设备示例：
//#define W25Q80DLX_EXAMPLE                                                               \
//  {                                                                            \
//    .total_size = (1 << 20), /* 1 MiB */                                       \
//        .start_up_time_us = 5000, .manufacturer_id = 0xef,                     \
//    .memory_type = 0x40, .capacity = 0x14, .max_clock_speed_mhz = 80,         \
//    .quad_enable_bit_mask = 0x02, .has_sector_protection = false,              \
//    .supports_fast_read = true, .supports_qspi = true,                         \
//    .supports_qspi_writes = false, .write_status_register_split = false,       \
//    .single_status_byte = false, .is_fram = false,                             \
//  }

/*
 * 创建数据结构数组并填充我们上面定义的设置。
 * 我们使用两个设备，但如果需要可以添加更多。
 */
//static const SPIFlash_Device_t my_flash_devices[] = {
//    W25Q80DLX_EXAMPLE,
//};
/*
 * 指定我们刚刚创建的数组中列出的不同设备数量。如果向数组中添加更多设备，请更新此值以匹配。
 */
//const int flashDevices = 1;

#include <bluefruit.h>
void setup()
{
  flash.begin();
  Bluefruit.begin(); 
  if(flash.deepPowerDown() == false){
    pinMode(LED_BUILTIN, OUTPUT);
    digitalWrite(LED_BUILTIN, LOW);
    while(1)
    {
      yield();
    }
  }
  flash.end();

  sd_power_system_off(); 
}

void loop()
{
  // 无需操作
}
```

:::tip
在此，我们特别感谢作者提供的代码 -> ***daCoder*** <-
:::

**如果您想了解此示例的更多详细信息，请点击 [这里](https://forum.seeedstudio.com/t/xiao-sense-accelerometer-examples-and-low-power/270801)**

## 电池充电电流

电池充电电流可选择为 50mA 或 100mA，您可以通过将 **Pin13** 设置为高或低来切换到 50mA 或 100mA。低电流充电电流在输入模式下设置为高电平，高电流充电电流在输出模式下设置为低电平。

**低充电电流**

```cpp
void setup(){
pinMode (P0_13, OUTPUT);
}
void loop() {
digitalWrite(P0_13, HIGH);
}
```

**高充电电流**

```cpp
void setup(){
pinMode (P0_13, OUTPUT);
}
void loop() {
digitalWrite(P0_13, LOW);
}
```

## 访问 SWD 引脚进行调试和重新刷写 Bootloader

**所需硬件**

- [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- Jlink

**所需软件**

需要从网站下载 [Segger](https://www.segger.com/downloads/jlink/) 软件。

- **步骤 1.** 使用 Jlink 连接以下引脚：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SWD1.png" alt="pir" width={300} height="auto" /></p>

- **步骤 2.** 启动 J-Flash 并搜索 nRF52840，创建一个新项目：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SWD2.png" alt="pir" width={500} height="auto" /></p>

- **步骤 3.** 点击“Target”，然后选择“Connect”。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SWD3.png" alt="pir" width={500} height="auto" /></p>

- **步骤 4.** 将 bin 或 [hex 文件](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_XIAO_nRF52840_Sense_bootloader-0.6.1_s140_7.3.0.hex) 拖入软件。然后依次按 F4 和 F5。重新刷写完成。

## 常见问题

### Q1: 我的 Arduino IDE 在向板上传代码时卡住了

您可以首先尝试通过单击“复位按钮”一次来 **复位** 板。如果这不起作用，请快速单击两次以进入 **bootloader 模式**。如果仍然不起作用，请断开板与 PC 的连接，然后重新连接板。

### Q2: 我的板未在 Arduino IDE 中显示为串行设备

您可以首先尝试通过单击“复位按钮”一次来 **复位** 板。如果这不起作用，请快速单击两次以进入 **bootloader 模式**。

### Q3: 使用 XIAO nRF52840 (Sense) 进行电池充电时有哪些注意事项？

当 P0.14 (D14) 在高电平 3.3V 时关闭 ADC 功能时，P0.31 的输入电压限制为 3.6V，存在烧毁 P0.31 引脚的风险。

针对该问题，目前建议用户在电池充电时不要关闭 P0.14 (D14) 的 ADC 功能或将 P0.14 (D14) 设置为高电平。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/14.png" alt="pir" width={800} height="auto" /></p>

### Q4: 绿色指示灯在通电时的行为如何？

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/nRF_RGB.png" alt="nRF52840 RGB Schematic" width="120" height="auto" /></p>

`P0.17` 引脚用于控制绿色指示灯的行为，指示充电状态：

- 低电平：表示正在 **充电**。
- 高电平：表示电池 **未充电** 或 **已充满**。

当处于低电平时，`RED_CHG` LED 会亮起。

更多详情请查看 PMIC 数据手册：[BQ25100](https://www.ti.com/lit/ds/symlink/bq25100a.pdf) 和 [XIAO nRF52840 数据手册](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf)。

## 资源

### Seeed Studio XIAO nRF52840

- **[电子书]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

- **[PDF]** [nRF52840 数据手册](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf)

- **[PDF]** [Seeed Studio XIAO nRF52840 原理图](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf)

- **[ZIP]** [Seeed Studio XIAO nRF52840 KiCAD 文件](https://files.seeedstudio.com/wiki/XIAO-BLE/SeeedStudio_XIAO_nRF52840_v1.1_SCH&PCB.zip)

- **[ZIP]** [Seeed Studio XIAO nRF52840 Eagle 文件](https://files.seeedstudio.com/wiki/XIAO-BLE/SeeedStudio_XIAO_nRF52840_v1.1_KiCAD.zip)

- **[DXF]** [Seeed Studio XIAO nRF52840 尺寸 DXF 文件](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-DXF.zip)

- **[LBR]** [Seeed Studio XIAO nRF52840 Eagle 封装库](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-footprint-eagle.lbr)

- **[XLSX]** [Seeed Studio XIAO nRF52840 引脚表](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-pinout_sheet.xlsx)

- 🔗 **[KiCAD]** [Seeed Studio XIAO nRF52840 封装库](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

### Seeed Studio XIAO nRF52840 Sense

- **[PDF]** [nRF52840 数据手册](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf)

- **[PDF]** [Seeed Studio XIAO nRF52840 Sense 原理图](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf)

- **[ZIP]** [Seeed Studio XIAO nRF52840 KiCAD 文件](https://files.seeedstudio.com/wiki/XIAO-BLE/SeeedStudio_XIAO_nRF52840_v1.1_KiCAD.zip)

- **[ZIP]** [Seeed Studio XIAO nRF52840 Eagle 文件](https://files.seeedstudio.com/wiki/XIAO-BLE/SeeedStudio_XIAO_nRF52840_v1.1_SCH&PCB.zip)

- **[DXF]** [Seeed Studio XIAO nRF52840 Sense 尺寸 DXF 文件](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Sense-DXF.zip)

- **[LBR]** [Seeed Studio XIAO nRF52840 Sense Eagle 封装库](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-footprint-eagle.lbr)

- **[XLSX]** [Seeed Studio XIAO nRF52840 Sense 引脚表](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Senese-pinout_sheet.xlsx)

- **[STEP]** [Seeed Studio XIAO nRF52840 Sense 3D 模型](https://files.seeedstudio.com/wiki/XIAO-BLE/seeed-studio-xiao-nrf52840-3d-model.zip)

- 🔗 **[Kicad]** [Seeed Studio XIAO nRF52840 Sense FootPrint](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

### Seeed Studio XIAO nRF52840 (Sense) Plus

- **[PDF]** [nRF52840 数据手册](https://files.seeedstudio.com/wiki/XIAO-BLE/nrf52840_datasheet.pdf)

- **[ZIP]** [Seeed Studio XIAO nRF52840 (Sense) Plus 原理图](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_Studio_XIAO_nRF52840_Plus_SCH_PCB_v1.1.zip)

- **[ZIP]** [Seeed Studio XIAO nRF52840 (Sense) Plus KiCAD 文件](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_Studio_XlAO_nRF52840_Plus_KiCAD_file.zip)

- **[DXF]** [Seeed Studio XIAO nRF52840 Sense 尺寸（DXF 格式）](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_Studio_XlA0_nRF52840_Sense_Dimension_in_DXF.dxf)

- **[ZIP]** [Seeed Studio XIAO Plus 基板（带底部焊盘引出）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_with_botton_pad_lead_out_V1.0.zip)

- **[ZIP]** [Seeed Studio XIAO Plus 基板（无底部焊盘引出）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_without_botton_pad_lead_out_V1.0.zip)

- **[Kicad]** [Seeed Studio XIAO nRF52840 (Sense) Plus 封装](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Plus-SMD.kicad_mod)


## 课程资源

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[电子书]** [XIAO: 强大性能，小巧板卡——掌握 Arduino 和 TinyML](https://tinkergen.cn/book_xiao)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>