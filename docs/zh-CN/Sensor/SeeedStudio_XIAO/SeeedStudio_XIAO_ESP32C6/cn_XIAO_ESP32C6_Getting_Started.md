---
description: 入门指南：Seeed Studio XIAO ESP32C6。
title: 入门指南：Seeed Studio XIAO ESP32C6
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113991254-seeedxiao-esp32c6-font.jpg
keywords:
- XIAO
- ESP32C6
- Seeeduino
slug: /cn/xiao_esp32c6_getting_started
last_update:
  date: 05/15/2025
  author: Spencer
toc_max_heading_level: 4
sidebar_position: 1
---

# 入门指南：Seeed Studio XIAO ESP32C6

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32C6</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html
        ">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## 简介

Seeed Studio XIAO ESP32C6 搭载高度集成的 [ESP32-C6 SoC](https://www.espressif.com/en/products/socs/esp32-c6)，基于 **两个 32 位 RISC-V 处理器**，其中高性能 (HP) 处理器运行频率高达 **160 MHz**，低功耗 (LP) 32 位 RISC-V 处理器运行频率可达 20 MHz。芯片内置 **512KB SRAM 和 4 MB Flash**，提供了更多的编程空间，为物联网控制场景带来了更多可能性。

XIAO ESP32C6 **原生支持 Matter 协议，得益于其增强的无线连接能力**。无线栈支持 **2.4 GHz WiFi 6、Bluetooth® 5.3、Zigbee 和 Thread (802.15.4)**。作为首款支持 Thread 的 XIAO 成员，它非常适合构建符合 Matter 标准的项目，从而实现智能家居的互操作性。

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

### 规格参数

<table class="sp-table-c6">
    <thead>
        <tr>
            <th colspan="2">产品</th>
            <th><Highlight color="#92c52a">XIAO ESP32C6</Highlight></th>
            <th>XIAO ESP32C3</th>
            <th>XIAO ESP32S3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th colspan="2" rowspan="2">处理器</th>
            <td>Espressif ESP32-C6 SoC</td>
            <td>Espressif ESP32-C3 SoC</td>
            <td>Espressif ESP32-S3R8</td>
        </tr>
        <tr>
            <td>两个 32 位 RISC-V 处理器，高性能处理器运行频率高达 160 MHz，低功耗处理器运行频率高达 20 MHz</td>
            <td>RISC-V 单核 32 位芯片处理器，四级流水线，运行频率高达 160 MHz</td>
            <td>Xtensa LX7 双核 32 位处理器，运行频率高达 240 MHz</td>
        </tr>
        <tr>
            <th colspan="2" rowspan="3">无线连接</th>
            <td>完整的 2.4GHz <strong>Wi-Fi 6</strong> 子系统</td>
            <td colspan="2">完整的 2.4GHz Wi-Fi 子系统</td>
        </tr>
        <tr>
            <td>BLE：Bluetooth 5.0，支持 Bluetooth Mesh</td>
            <td>BLE：Bluetooth 5.0，支持 Bluetooth Mesh</td>
            <td>BLE：Bluetooth 5.0，支持 Bluetooth Mesh</td>
        </tr>
        <tr>
            <td><strong>Zigbee、Thread、IEEE 802.15.4</strong></td>
            <td>/</td>
            <td>/</td>
        </tr>
        <tr>
            <th colspan="2" rowspan="1">芯片内存</th>
            <td>512KB SRAM &amp; 4MB Flash</td>
            <td>400KB SRAM &amp; 4MB Flash</td>
            <td>8M PSRAM &amp; 8MB Flash</td>
        </tr>
        <tr>
            <th colspan="2" rowspan="2">接口</th>
            <td>1x UART, 1x LP_UART, 1x IIC, 1x LP_IIC, 1x SPI, 11x GPIO(PWM), 7x ADC, 1x SDIO</td>
            <td>1x UART, 1x IIC, 1x SPI, 11x GPIO(PWM), 4x ADC</td>
            <td>1x UART, 1x IIC, 1x IIS, 1x SPI, 11x GPIO(PWM), 9x ADC, 1x 用户 LED, 1x 充电 LED</td>
        </tr>
        <tr>
            <td colspan="3">1x 重置按钮, 1x 启动按钮</td>
        </tr>
        <tr>
            <th colspan="2" rowspan="1">尺寸</th>
            <td colspan="3">21 x 17.8 mm</td>
        </tr>
        <tr>
            <th colspan="1" rowspan="3">电源</th>
            <th colspan="1">输入电压</th>
            <td colspan="3">Type-C: 5V<br></br>BAT: 4.2V</td>
        </tr>
        <tr>
            <th>电路工作电压（准备运行）</th>
            <td colspan="2">USB: 5V@9mA<br></br>BAT: 3.8V@9mA</td>
            <td>Type-C: 5V@19mA<br></br>BAT: 3.8V@22mA</td>
        </tr>
        <tr>
            <th>电池充电电流</th>
            <td>100mA</td>
            <td>350mA</td>
            <td>100mA</td>
        </tr>
        <tr>
            <th colspan="1" rowspan="3">功耗模式（供电电压：3.8V）</th>
            <th>Modem-sleep 模式</th>
            <td>~ 30 mA</td>
            <td>~ 24 mA</td>
            <td>~ 25 mA</td>
        </tr>
        <tr>
            <th>Light-sleep 模式</th>
            <td>~ 2.5 mA</td>
            <td>~ 3 mA</td>
            <td>~ 2 mA</td>
        </tr>
        <tr>
            <th>Deep Sleep 模式</th>
            <td>~ 15 μA</td>
            <td>~ 44 μA</td>
            <td>~ 14 μA</td>
        </tr>
        <tr>
            <th colspan="2">工作温度</th>
            <td colspan="2">-40°C ~ 85°C</td>
            <td>-40°C ~ 65°C</td>
        </tr>
    </tbody>
</table>

### 特性

- **增强的连接性**：集成 ***2.4*** GHz Wi-Fi 6 (802.11ax)、Bluetooth 5 (LE) 和 IEEE 802.15.4 无线连接，支持 **Thread** 和 **Zigbee** 协议。
- **原生支持 Matter**：支持构建符合 Matter 标准的智能家居项目，确保不同智能设备之间的互操作性。
- **芯片级安全加密**：利用 ESP32-C6 提供安全启动、加密和可信执行环境 (TEE) 功能，增强智能家居项目的安全性。
- **卓越的射频性能**：配备板载天线，BLE/Wi-Fi 范围可达 *80m*，并提供外部 UFL 天线接口，确保可靠的连接。
- **优化功耗**：提供四种工作模式，包括深度睡眠模式，功耗低至 *15* μA，并支持锂电池充电管理。
- **双 RISC-V 处理器**：集成两个 32 位 RISC-V 处理器，高性能处理器运行频率高达 160 MHz，低功耗处理器运行频率高达 *20 MHz*。
- **经典 XIAO 设计**：保持 21 x 17.8mm 的拇指大小外形和单面安装设计，非常适合空间受限的项目，如可穿戴设备。

## 硬件概览

<table align="center">
 <tr>
     <th>XIAO ESP32C6 指示图</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1Nzc0ODUwMjM3NA_556525_Slxs4ARdyuXRrJK-_1711096256?w=9854&h=3367&type=image/png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO ESP32C6 引脚列表</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1Nzc0ODUwMjM3NA_318648_dMoXitoaQiq2N3-a_1711678067?w=1486&h=1228" style={{width:1000, height:'auto'}}/></div></td>
 </tr>
</table>

:::tip RF开关

**RF开关**功能允许您通过配置`GPIO14`在内置陶瓷天线和外部天线之间切换。要启用此功能，*您必须首先将`GPIO3`设置为低电平*，因为这会激活RF开关控制。

- **GPIO14 低电平（默认设置）**：设备使用内置陶瓷天线。
- **GPIO14 高电平**：设备切换到外部天线。

默认情况下，`GPIO14`设置为低电平，启用内置天线。要使用外部天线，请将`GPIO14`设置为高电平。请参考以下示例代码，了解如何配置`GPIO3`和`GPIO14`以激活外部天线：

```cpp
void setup() {
  pinMode(WIFI_ENABLE, OUTPUT); // pinMode(3, OUTPUT);
  digitalWrite(WIFI_ENABLE, LOW); // digitalWrite(3, LOW); // 激活RF开关控制

  delay(100);

  pinMode(WIFI_ANT_CONFIG, OUTPUT); // pinMode(14, OUTPUT);
  digitalWrite(WIFI_ANT_CONFIG, HIGH); // digitalWrite(14, HIGH); // 使用外部天线
}
```

:::

## 入门指南

为了让您更快地开始使用 XIAO ESP32C6，请阅读以下硬件和软件准备部分，为 XIAO 做好准备。

### 硬件准备

您需要准备以下物品：

- 1 x [Seeed Studio XIAO ESP32C6](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html)
- 1 x 电脑
- 1 x USB Type-C 数据线

:::tip
某些USB线只能供电，无法传输数据。如果您没有USB线或不确定您的USB线是否可以传输数据，可以查看 [Seeed USB Type-C 支持 USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)。
:::

#### 焊接引脚

XIAO ESP32C6 默认出厂时没有焊接引脚，您需要准备自己的引脚并将其焊接到 XIAO 的相应引脚上，以便连接扩展板或传感器。

由于 XIAO ESP32C6 的尺寸较小，焊接引脚时请小心，不要将不同的引脚焊接在一起，也不要将焊锡粘到屏蔽罩或其他组件上。否则可能导致 XIAO 短路或无法正常工作，由此产生的后果由用户自行承担。

#### BootLoader 模式

有时我们可能会因为使用了错误的程序而导致 XIAO 无法识别端口或无法正常工作。具体表现为：

- 连接到电脑，但未找到 XIAO 的端口号。
- 连接到电脑后出现端口号，但上传程序失败。

当您遇到上述两种情况时，可以尝试将 XIAO 置于 BootLoader 模式，这可以解决大多数设备无法识别和上传失败的问题。具体方法如下：

- **步骤 1**. 按住 XIAO ESP32C6 上的 BOOT 按钮不要松开。
- **步骤 2**. 在按住 BOOT 按钮的同时，通过数据线连接到电脑。连接到电脑后松开 BOOT 按钮。
- **步骤 3**. 上传 **Blink** 程序以检查 XIAO ESP32C6 的运行情况。

#### 复位

当程序运行异常时，您可以在通电时按一次 Reset 键，让 XIAO 重新执行已上传的程序。

当您在通电时按住 BOOT 键，然后按一次 Reset 键，也可以进入 BootLoader 模式。

### 软件准备

推荐的 XIAO ESP32C6 编程工具是 Arduino IDE，因此您需要完成 Arduino 的安装作为软件准备的一部分。

:::tip
如果这是您第一次使用 Arduino，我们强烈建议您参考 [Arduino 入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。

XIAO ESP32C6 的板载包要求至少使用版本 **2.0.8**。
:::

- **步骤 1.** 根据您的操作系统下载并安装稳定版本的 Arduino IDE。

  <div class="download_arduino_container" style={{textAlign: 'center'}}>
      <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>下载 Arduino IDE</font></span></strong></a>
  </div>

  <br></br>
- **步骤 2.** 启动 Arduino 应用程序。
- **[步骤 3](#add-board).** 将 XIAO ESP32C6 的板载包添加到 Arduino IDE 并点击 `OK`。
- **步骤 4.** 关闭 Arduino IDE 并重新打开。

#### 添加 XIAO-C6 板 {#add-board}

按照以下步骤安装 XIAO ESP32C6 板：

```
https://espressif.github.io/arduino-esp32/package_esp32_index.json
```

1. 将上述板管理器URL添加到 Arduino IDE 的首选项中，该URL来源于 [安装 - Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html#installing-using-arduino-ide)。

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/boards_url.png" style={{width: 'auto', height: 'auto'}}/></div>

2. 下载 XIAO ESP32C6 板包。

:::note
仅当 esp32 板的版本大于 `3.0.0` 时可用。
:::

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/install_board.png" style={{width: 'auto', height: 'auto'}}/></div>

3. 选择 `XIAO_ESP32C6` 变体。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/select_xiao_c6.png" style={{width:1000, height:'auto'}}/></div>

现在开始享受编码的乐趣吧 ✨。

#### 运行您的第一个 Blink 程序

- **步骤 1.** 启动 Arduino 应用程序。

- **步骤 2.** 导航到 **File > Examples > 01.Basics > Blink**，打开程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/11.png" style={{width:700, height:'auto'}}/></div>

- **步骤 3.** 将开发板型号选择为 **XIAO ESP32C6**，并选择正确的端口号以上传程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/upload_program.png" style={{width:1000, height:'auto'}}/></div>

当程序成功上传后，您将看到以下输出信息，并可以观察到 XIAO ESP32C6 右侧的橙色 LED 灯正在闪烁。

<table>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/XIAOC6_flash_firmware.png" style={{width:680, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/XIAOC6-blink.gif" style={{width:400, height:'auto'}}/></div></td>
 </tr>
</table>

## 电池使用

XIAO ESP32C6 系列配备了内置电源管理芯片，可以通过电池独立供电，或者通过 USB 接口为电池充电。

要将电池连接到您的 XIAO，我们建议使用符合标准的可充电 3.7V 锂电池。在焊接电池时，请仔细区分正负极。负极焊盘应位于靠近丝印标记 "D8" 的左侧，而正极焊盘应位于靠近丝印标记 "D5" 的右侧。

:::caution
当使用电池供电时，5V 引脚上将没有电压。
:::

:::tip 红色指示灯

XIAO ESP32C6 配备了一个用于电池充电的红色指示灯，与 [XIAO ESP32S3](/xiao_esp32s3_getting_started/#battery-usage) 类似：

XIAO ESP32C6 的红灯行为如下：

- 当没有连接电池时：
  - 当连接 Type-C 电缆时，红灯亮起，并在 30 秒后熄灭。
- 当连接电池并通过 Type-C 电缆充电时：
  - 红灯闪烁。
- 当通过 Type-C 连接充满电时：
  - 红灯熄灭。

:::

## 读取电池电压

要在 XIAO ESP32C6 上监测电池电压，与 [XIAO ESP32C3](/XIAO_ESP32C3_Getting_Started/#check-the-battery-voltage) 类似，您需要以 1:2 的配置焊接一个 200k 电阻。这种设置将电压减半，从而可以通过 A0 模拟端口安全地进行监测。

### 示例代码

以下代码在 A0 端口初始化 ADC，并对 16 次读取进行平均，计算电池电压，并根据电压分压器的 1:2 衰减比进行调整。

```cpp
#include <Arduino.h>

void setup() {
  Serial.begin(115200);
  pinMode(A0, INPUT);         // 将 A0 配置为 ADC 输入
}

void loop() {
  uint32_t Vbatt = 0;
  for(int i = 0; i < 16; i++) {
    Vbatt += analogReadMilliVolts(A0); // 读取并累加 ADC 电压
  }
  float Vbattf = 2 * Vbatt / 16 / 1000.0;     // 根据 1:2 分压器调整并转换为伏特
  Serial.println(Vbattf, 3);                  // 输出电压，精确到小数点后三位
  delay(1000);                                // 等待 1 秒
}
```

此代码从 ADC 获取 16 次测量值，进行平均后补偿分压器的 1:2 比例，并以三位小数的精度输出电池电压。

## 深度睡眠模式与唤醒

XIAO ESP32C6 提供了完整的深度睡眠模式和唤醒功能。以下是 ESP 提供的两个常见示例。

### 示例1：使用外部唤醒的深度睡眠

此代码展示了如何使用外部触发器作为唤醒源进行深度睡眠，以及如何在 RTC 内存中存储数据以便在重启时使用。

```cpp
/*
硬件连接
======================
将按钮连接到 GPIO 0，并使用 10K 欧姆电阻下拉

注意：
======
可以引发唤醒的 GPIO 编号位掩码。只有具有 RTC 功能的 GPIO 可以用于此位图。
对于不同的 SoC，相关的 GPIO 如下：
- ESP32: 0, 2, 4, 12-15, 25-27, 32-39
- ESP32-S2: 0-21
- ESP32-S3: 0-21
- ESP32-C6: 0-7
- ESP32-H2: 7-14
*/

#define BUTTON_PIN_BITMASK (1ULL << GPIO_NUM_0) // GPIO 0 的 ext1 位掩码

RTC_DATA_ATTR int bootCount = 0;

/*
打印 ESP32 从睡眠中唤醒的原因
*/
void print_wakeup_reason(){
  esp_sleep_wakeup_cause_t wakeup_reason;

  wakeup_reason = esp_sleep_get_wakeup_cause();

  switch(wakeup_reason)
  {
    case ESP_SLEEP_WAKEUP_EXT0 : Serial.println("由 RTC_IO 外部信号引发的唤醒"); break;
    case ESP_SLEEP_WAKEUP_EXT1 : Serial.println("由 RTC_CNTL 外部信号引发的唤醒"); break;
    case ESP_SLEEP_WAKEUP_TIMER : Serial.println("由定时器引发的唤醒"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD : Serial.println("由触摸板引发的唤醒"); break;
    case ESP_SLEEP_WAKEUP_ULP : Serial.println("由 ULP 程序引发的唤醒"); break;
    default : Serial.printf("唤醒不是由深度睡眠引发的: %d\n",wakeup_reason); break;
  }
}

void setup(){
  Serial.begin(115200);
  delay(1000); // 给串口监视器一些时间打开

  // 每次重启时递增启动次数并打印
  ++bootCount;
  Serial.println("启动次数: " + String(bootCount));

  // 打印 ESP32 的唤醒原因
  print_wakeup_reason();

  /*
  首先我们配置唤醒源
  我们将 ESP32 设置为通过外部触发器唤醒。
  对于 ESP32，有 ext0 和 ext1 两种类型，
  但 ext0 不支持 ESP32C6，因此我们使用 ext1。
  */

  // 如果使用 ext1，可以如下配置
  esp_sleep_enable_ext1_wakeup(BUTTON_PIN_BITMASK,ESP_EXT1_WAKEUP_ANY_HIGH);

  // 现在进入睡眠
  Serial.println("现在进入睡眠");
  esp_deep_sleep_start();
  Serial.println("这行代码永远不会被打印");
}

void loop(){
  // 此函数不会被调用
}
```

### 示例2：使用定时器唤醒的深度睡眠

ESP32 提供了一种深度睡眠模式，用于有效节省电能，这是物联网应用中的重要因素。在此模式下，CPU、大部分 RAM 和所有由 APB_CLK 时钟驱动的数字外设将关闭。芯片中仍然可以保持供电的部分包括：RTC 控制器、RTC 外设和 RTC 内存。

以下是翻译后的简体中文版本：

---

此代码展示了最基本的深度睡眠功能，使用计时器唤醒以及如何在 RTC 内存中存储数据以便在重启时使用。

```cpp
/*
简单的深度睡眠与计时器唤醒
=====================================
此代码基于公共领域许可证。

作者：
Pranav Cherukupalli <cherukupallip@gmail.com>
*/

#define uS_TO_S_FACTOR 1000000ULL  /* 微秒到秒的转换因子 */
#define TIME_TO_SLEEP  5        /* ESP32 进入睡眠的时间（以秒为单位） */

RTC_DATA_ATTR int bootCount = 0;

/*
打印 ESP32 从睡眠中唤醒的原因的方法
*/
void print_wakeup_reason(){
  esp_sleep_wakeup_cause_t wakeup_reason;

  wakeup_reason = esp_sleep_get_wakeup_cause();

  switch(wakeup_reason)
  {
    case ESP_SLEEP_WAKEUP_EXT0 : Serial.println("由使用 RTC_IO 的外部信号引起的唤醒"); break;
    case ESP_SLEEP_WAKEUP_EXT1 : Serial.println("由使用 RTC_CNTL 的外部信号引起的唤醒"); break;
    case ESP_SLEEP_WAKEUP_TIMER : Serial.println("由计时器引起的唤醒"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD : Serial.println("由触摸板引起的唤醒"); break;
    case ESP_SLEEP_WAKEUP_ULP : Serial.println("由 ULP 程序引起的唤醒"); break;
    default : Serial.printf("唤醒不是由深度睡眠引起的: %d\n",wakeup_reason); break;
  }
}

void setup(){
  Serial.begin(115200);
  delay(1000); //给串口监视器一些时间打开

  //每次重启时增加启动计数并打印
  ++bootCount;
  Serial.println("启动次数: " + String(bootCount));

  //打印 ESP32 的唤醒原因
  print_wakeup_reason();

  /*
  首先我们配置唤醒源
  我们设置 ESP32 每 5 秒唤醒一次
  */
  esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);
  Serial.println("设置 ESP32 每 " + String(TIME_TO_SLEEP) +
  " 秒进入睡眠");

  /*
  接下来我们决定关闭/保留哪些外设
  默认情况下，ESP32 会自动关闭唤醒源不需要的外设，
  但如果您想成为高级用户，可以使用此功能。
  详细内容请参考 API 文档：
  http://esp-idf.readthedocs.io/en/latest/api-reference/system/deep_sleep.html
  以下是如何配置外设的示例，注释掉的代码会关闭所有 RTC 外设。
  */
  //esp_deep_sleep_pd_config(ESP_PD_DOMAIN_RTC_PERIPH, ESP_PD_OPTION_OFF);
  //Serial.println("配置所有 RTC 外设在睡眠时关闭");

  /*
  现在我们已经设置了唤醒原因，如果需要还设置了
  深度睡眠中的外设状态，现在可以开始进入深度睡眠。
  如果没有提供唤醒源但启动了深度睡眠，它将永远睡眠，
  除非发生硬件重置。
  */
  Serial.println("现在进入睡眠");
  Serial.flush(); 
  esp_deep_sleep_start();
  Serial.println("这行代码永远不会被打印");
}

void loop(){
  //此函数不会被调用
}
```

:::tip
如果您想学习更多关于深度睡眠模式和唤醒功能的使用，可以在 Arduino IDE 中找到官方为芯片编写的更多示例程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/16.png" style={{width:600, height:'auto'}}/></div>
:::

## 资源

- **[PDF]** [ESP32C6 数据手册](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/res/esp32-c6_datasheet_en.pdf)

- **[ZIP]** [Seeed Studio XIAO ESP32C6 KiCAD 库](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/XIAO-ESP32-C6_v1.0_SCH&PCB_24028.zip)

- **[PDF]** [Seeed Studio XIAO ESP32C6 原理图](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/XIAO-ESP32-C6_v1.0_SCH_PDF_24028.pdf)

- **[XLSX]** [Seeed Studio XIAO ESP32C6 引脚表](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/res/XIAO_ESP32C6_Pinout.xlsx)

- 🔗 **[Kicad]** [Seeed Studio XIAO ESP32C6 封装库](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

- **[STEP]** [Seeed Studio XIAO ESP32C6 Step 文件](https://grabcad.com/library/seeed-studio-xiao-esp32-c6-1)

## 课程资源

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[电子书]** [XIAO: 大能量，小板子，掌握 Arduino 和 TinyML](https://tinkergen.cn/book_xiao)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>