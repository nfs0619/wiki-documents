---
description: 快速上手 Seeed Studio XIAO ESP32C3
title: 快速上手 Seeed Studio XIAO ESP32C3
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO_ESP32C3_Getting_Started
last_update:
  date: 05/15/2025
  author: Spencer
sku: 113991054
type: gettingstarted
---

# 快速上手 Seeed Studio XIAO ESP32C3

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:300, height:'auto', "border-radius": '12.8px'}}/></div>
<br></br>

## 简介

**Seeed Studio XIAO ESP32C3** 是一款基于 Espressif **ESP32-C3** WiFi/Bluetooth 双模芯片的物联网迷你开发板，配备了 **32 位 RISC-V CPU**，其高效架构提供了强大的计算性能。它具有出色的射频性能，支持 **IEEE 802.11 b/g/n WiFi** 和 **Bluetooth 5 (BLE)** 协议。该开发板附带一个外置天线，以增强无线应用的信号强度。它还具有**小巧精致的外形尺寸**，并采用了**单面贴装设计**。板载丰富的接口，拥有 **11 个数字 I/O**（可用作 **PWM 引脚**）和 **3 个模拟 I/O**（可用作 **ADC 引脚**）。支持四种串行接口，如 **UART、I2C 和 SPI**。板上还有一个小型的**复位按钮**和一个**引导模式按钮**。XIAO ESP32C3 完全兼容 [Grove Shield for Seeeduino XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) 和 [Seeeduino XIAO 扩展板](https://wiki.seeedstudio.com/Seeeduino-XIAO-Expansion-Board)，但对于 Seeeduino XIAO 扩展板，板上的 SWD 弹簧触点将不兼容。

基于上述特点，XIAO ESP32C3 被定位为一款**高性能、低功耗、性价比高的物联网迷你开发板**，适用于**低功耗物联网应用和无线可穿戴应用**。

本教程将向您展示如何快速上手 XIAO ESP32C3！

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html"><strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>


### 规格参数

<table>
    <thead>
        <tr>
            <th>项目</th>
            <th>Seeed Studio XIAO ESP32C3</th>
            <th>Seeeduino XIAO</th>
            <th>Seeed XIAO RP2040</th>
            <th>Seeed XIAO nRF52840</th>
            <th>Seeed XIAO nRF52840 Sense</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>处理器</th>
            <td>ESP32-C3 32 位 RISC-V @160MHz</td>
            <td>SAMD21 M0+@48MHz</td>
            <td>RP2040 双核 M0+@133Mhz</td>
            <td>nRF52840 M4F@64MHz</td>
            <td>nRF52840 M4F@64MHz</td>
        </tr>
        <tr>
            <th>无线连接</th>
            <td>WiFi 和 Bluetooth 5 (BLE)</td>
            <td>无</td>
            <td>无</td>
            <td>Bluetooth 5.0/BLE/NFC</td>
            <td>Bluetooth 5.0/BLE/NFC</td>
        </tr>
        <tr>
            <th>内存</th>
            <td>400KB SRAM，4MB 板载 Flash</td>
            <td>32KB SRAM 256KB FLASH</td>
            <td>264KB SRAM 2MB 板载 Flash</td>
            <td>256KB RAM，1MB Flash 2MB 板载 Flash</td>
            <td>256KB RAM，1MB Flash 2MB 板载 Flash</td>
        </tr>
        <tr>
            <th>内置传感器</th>
            <td>无</td>
            <td>无</td>
            <td>无</td>
            <td>无</td>
            <td>6 DOF IMU (LSM6DS3TR-C)，PDM 麦克风</td>
        </tr>
        <tr>
            <th>接口</th>
            <td>I2C/UART/SPI</td>
            <td>I2C/UART/SPI</td>
            <td>I2C/UART/SPI</td>
            <td>I2C/UART/SPI</td>
            <td>I2C/UART/SPI</td>
        </tr>
        <tr>
            <th>PWM/模拟引脚</th>
            <td>11/4</td>
            <td>11/11</td>
            <td>11/4</td>
            <td>11/6</td>
            <td>11/6</td>
        </tr>
        <tr>
            <th>板载按钮</th>
            <td>复位/引导按钮</td>
            <td>无</td>
            <td>复位/引导按钮</td>
            <td>复位按钮</td>
            <td>复位按钮</td>
        </tr>
        <tr>
            <th>板载 LED</th>
            <td>充电 LED</td>
            <td>无</td>
            <td>全彩 RGB/三合一 LED</td>
            <td>三合一 LED/充电 LED</td>
            <td>三合一 LED/充电 LED</td>
        </tr>
        <tr>
            <th>电池充电芯片</th>
            <td>ETA4054S2F</td>
            <td>无</td>
            <td>无</td>
            <td>BQ25101</td>
            <td>BQ25101</td>
        </tr>
        <tr>
            <th>编程语言</th>
            <td>Arduino/MicroPython</td>
            <td>Arduino/CircuitPython</td>
            <td colspan="3" align="center">Arduino/MicroPython/CircuitPython</td>
        </tr>
    </tbody>
</table>


### 特性

- **强大的 CPU：** ESP32-C3，32 位 RISC-V 单核处理器，运行频率高达 160 MHz
- **完整的 WiFi 子系统：** 符合 IEEE 802.11b/g/n 协议，支持 Station 模式、SoftAP 模式、SoftAP + Station 模式和混杂模式
- **蓝牙 LE 子系统：** 支持 Bluetooth 5 和 Bluetooth mesh 功能
- **超低功耗：** 深度睡眠功耗约为 43μA
- **更好的射频性能：** 配备外置 RF 天线
- **电池充电芯片：** 支持锂电池充放电管理
- **丰富的片上资源：** 400KB SRAM 和 4MB 板载 Flash 内存
- **超小尺寸：** 小如拇指（21x17.8mm），XIAO 系列经典外形尺寸，适用于可穿戴设备和小型项目
- **可靠的安全特性：** 支持 AES-128/256、Hash、RSA、HMAC、数字签名和安全启动的加密硬件加速器
- **丰富的接口：** 1xI2C、1xSPI、2xUART、11xGPIO(PWM)、4xADC、1xJTAG 焊盘接口
- 单面元件，表面贴装设计

## 硬件概述

> *A3(GP105) - 使用 ADC2，可能由于错误的采样信号而无法正常工作。为了可靠的模拟读取，请使用 ADC1(A0/A1/A2)。请参考 ESP32-C3 数据手册。

<table align="center">
	<tr>
	    <th>XIAO ESP32C3 正面指示图</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/front-label-3.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>XIAO ESP32C3 背面指示图</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/back-label-6.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>XIAO ESP32C3 引脚列表</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pin_map-2.png" style={{width:1000, height:'auto'}}/></div></td>
	</tr>
</table>

### 电源引脚

- 5V - 这是来自 USB 端口的 5V 输出。您也可以将其用作电压输入，但必须在外部电源和此引脚之间使用某种二极管（肖特基、信号或功率二极管），阳极连接到电池，阴极连接到 5V 引脚。
- 3V3 - 这是板载稳压器的稳压输出。您可以抽取 700mA 电流。
- GND - 电源/数据/信号地

### 配置引脚

根据 ESP32C3 芯片手册，芯片中的 **GPIO2**、**GPIO8** 和 **GPIO9** 是配置引脚，这些引脚的高低电平配置可能会使芯片进入不同的启动模式。在使用这些引脚时请注意这一点，否则可能会导致 XIAO 无法上传或执行程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/20.png" style={{width:800, height:'auto'}}/></div>

## 入门指南

首先，我们将 XIAO ESP32C3 连接到电脑，连接一个 LED 到开发板，并从 Arduino IDE 上传一个简单的代码，通过让连接的 LED 闪烁来检查开发板是否正常工作。

### 硬件准备

您需要准备以下物品：

- 1 x [Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html)
- 1 x 电脑
- 1 x USB Type-C 数据线

:::提示

有些 USB 数据线只能供电，无法传输数据。如果您没有 USB 数据线或不确定您的 USB 数据线是否能够传输数据，可以查看 [Seeed USB Type-C 支持 USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)。

:::

- **步骤 1.** 使用 USB Type-C 数据线将 XIAO ESP32C3 连接到您的电脑。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png" style={{width:120, height:'auto'}}/></div>

- **步骤 2.** 按如下方式将 LED 连接到 D10 引脚。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/connect-led-2.png" style={{width:500, height:'auto'}}/></div>

**注意：** 请确保串联一个电阻（约 150Ω）以限制通过 LED 的电流，防止过大的电流烧毁 LED。

### 软件准备

- **步骤 1.** 根据您的操作系统下载并安装最新版本的 Arduino IDE。

<p style={{textAlign:'center'}}><a href="https://www.arduino.cc/en/software" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></p>

- **步骤 2.** 启动 Arduino 应用程序。

- **步骤 3.** 在 Arduino IDE 中添加 ESP32 开发板包。

导航到 **文件 > 首选项**，并在 **"Additional Boards Manager URLs"** 中填写以下 URL：
*<https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json>*

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/add_board.png" style={{width:550, height:'auto'}}/></div>

导航到 **工具 > 开发板 > 开发板管理器...**，在搜索框中输入关键字 "**esp32**"，选择最新版本的 **esp32** 并安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/add_esp32c3.png" style={{width:550, height:'auto'}}/></div>

- **步骤 4.** 选择您的开发板和端口。

**开发板**

导航到 **工具 > 开发板 > ESP32 Arduino** 并选择 "**XIAO_ESP32C3**"。开发板列表较长，您需要滚动到列表底部才能找到。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Studio-XIAO-ESP32/XIAO_ESP32_board.png" style={{width:800, height:'auto'}}/></div>

**端口**

导航到 **工具 > 端口** 并选择连接的 XIAO ESP32C3 的串口名称。通常是 COM3 或更高（**COM1** 和 **COM2** 通常保留给硬件串口）。

### 运行您的第一个 Blink 程序

- **步骤 1.** 将以下代码复制到 Arduino IDE。

确保您的 `D10` 按上图所示连接到一个 LED。

```cpp

// 根据文章中的引脚图定义 LED
const int led = D10; // XIAO ESP32C3 没有可用的 LED_BUILTIN。

void setup() {
  // 初始化数字引脚 LED 为输出
  pinMode(led, OUTPUT);
}

void loop() {
  digitalWrite(led, HIGH);   // 打开 LED
  delay(1000);               // 等待一秒
  digitalWrite(led, LOW);    // 关闭 LED
  delay(1000);               // 等待一秒
}
```

- **步骤 2.** 点击 **上传** 按钮将代码上传到开发板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" style={{width:500, height:'auto'}}/></div>

上传完成后，您将看到连接的 LED 每隔 1 秒闪烁一次。这意味着连接成功，现在您可以探索更多基于 XIAO ESP32C3 的项目！

## 电池使用

XIAO ESP32C3 可以使用 3.7V 锂电池作为电源输入。您可以参考以下接线图进行连接。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/battery_connect.png" alt="pir" width="600" height="auto"/></div>

:::caution
请在焊接时小心不要短路正负极，以免烧毁电池和设备。
:::

**电池使用说明：**

1. 请使用符合规格的合格电池。
2. 在使用电池时，XIAO 可以通过数据线连接到您的计算机设备，请放心，XIAO 内置了电路保护芯片，非常安全。
3. 当 XIAO ESP32C3 使用电池供电时，不会有任何 LED 指示灯亮起（除非您编写了特定的程序），请不要通过 LED 的状态来判断 XIAO ESP32C3 是否工作，而是通过您的程序合理判断。
4. 很抱歉，目前我们无法通过软件帮助您检查剩余电量（因为没有多余的芯片引脚可用），您需要定期为电池充电或使用万用表检查电池电量。

### 检查电池电压

由于 ESP32C3 引脚数量的限制，为了确保 XIAO ESP32C3 与其他 XIAO 系列具有相同数量的可用 GPIO，工程师没有额外的引脚分配给电池电压测量。

但如果您希望单独使用一个引脚进行电池电压测量，可以参考 [msfujino](https://forum.seeedstudio.com/u/msfujino) 的巧妙操作。我们也特别感谢 [msfujino](https://forum.seeedstudio.com/u/msfujino) 为 XIAO ESP32C3 分享的所有经验和努力。

基本的操作思路是：使用 200k 电阻将电池电压分压为 1/2，并连接到 A0 端口，从而可以监测电压。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/3.png" alt="pir" width="300" height="auto"/></div>

数据手册标称满量程 AD 转换为 2500mV，但不同芯片之间存在较大差异，实际上为 ±10%。我的芯片满量程为 2700mV。

幸运的是，每个芯片的校准修正值都写在熔丝区域，通过使用函数 `analogReadMilliVolts()`，可以直接读取修正后的电压值，无需额外操作。

AD 转换结果与万用表测量的电压相差约 5 mV，在实际使用中没有问题。

此外，特别是在通信过程中，会出现尖峰误差，需要进行 16 次平均以消除这些误差。

以下是测试电池电压的步骤。

```cpp
void setup() {
  Serial.begin(115200);
  pinMode(A0, INPUT);         // ADC
}

void loop() {
  uint32_t Vbatt = 0;
  for(int i = 0; i < 16; i++) {
    Vbatt = Vbatt + analogReadMilliVolts(A0); // 带修正的 ADC   
  }
  float Vbattf = 2 * Vbatt / 16 / 1000.0;     // 衰减比 1/2，mV --> V
  Serial.println(Vbattf, 3);
  delay(1000);
}
```

:::tip
以上内容来自 Seeed Studio 论坛用户 **msfujino**，原帖地址：
[https://forum.seeedstudio.com/t/battery-voltage-monitor-and-ad-conversion-for-xiao-esp32c/267535](https://forum.seeedstudio.com/t/battery-voltage-monitor-and-ad-conversion-for-xiao-esp32c/267535)。
我们建议您在尝试基于上述方法测量电池电压之前，具备良好的动手能力和焊接技能，并谨慎避免短路电池等危险操作。
:::

## 深度睡眠模式和唤醒

XIAO ESP32C3 设计支持深度睡眠模式和唤醒功能。关于这两个功能的使用，我们提供以下示例代码。

```cpp
#define BUTTON_PIN_BITMASK 0x200000000 // 2^33 in hex

RTC_DATA_ATTR int bootCount = 0;

/*
打印 ESP32 唤醒原因的方法
*/
void print_wakeup_reason(){
  esp_sleep_wakeup_cause_t wakeup_reason;

  wakeup_reason = esp_sleep_get_wakeup_cause();

  switch(wakeup_reason)
  {
    case ESP_SLEEP_WAKEUP_EXT0 : Serial.println("由 RTC_IO 外部信号唤醒"); break;
    case ESP_SLEEP_WAKEUP_EXT1 : Serial.println("由 RTC_CNTL 外部信号唤醒"); break;
    case ESP_SLEEP_WAKEUP_TIMER : Serial.println("由定时器唤醒"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD : Serial.println("由触摸板唤醒"); break;
    case ESP_SLEEP_WAKEUP_ULP : Serial.println("由 ULP 程序唤醒"); break;
    default : Serial.printf("唤醒原因不是深度睡眠: %d\n",wakeup_reason); break;
  }
}

void setup(){
  Serial.begin(115200);
  delay(1000); // 给串口监视器一些时间打开

  // 每次重启递增启动次数并打印
  ++bootCount;
  Serial.println("启动次数: " + String(bootCount));

  // 打印 ESP32 的唤醒原因
  print_wakeup_reason();

  esp_deep_sleep_enable_gpio_wakeup(BIT(D1), ESP_GPIO_WAKEUP_GPIO_LOW);

  // 现在进入睡眠
  Serial.println("现在进入睡眠");
  esp_deep_sleep_start();
  Serial.println("这行代码永远不会被打印");
}

void loop(){
  // 这个函数不会被调用
}
```

如果您足够快地在 XIAO 进入深度睡眠之前打开串口监视器，您将看到如下所示的消息输出。这意味着 XIAO 现在已经“睡着了”。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/15.png" style={{width:700, height:'auto'}}/></div>

:::tip
进入深度睡眠模式后，XIAO 的端口将消失，您需要唤醒它才能再次看到其端口号！
:::

在程序中，我们使用 **D1** 低电平唤醒。这意味着我们可以将一个按钮连接到 D1 引脚，当按下按钮时，XIAO 将被唤醒。

:::caution
目前 XIAO ESP32C3 仅支持 GPIO 唤醒，且仅支持唤醒的引脚为 D0~D3。此程序可能无法在其他引脚上运行。
:::

## 故障排除

### Q1: 我的 Arduino IDE 在向板子上传代码时卡住

您可以先尝试点击 **RESET 按钮** 一次以重置板子（确保板子已连接到您的 PC）。如果这不起作用，请按住 **BOOT 按钮**，在按住 **BOOT** 按钮的同时将板子连接到您的 PC，然后松开按钮以进入 **bootloader 模式**。

### Q2: 我的开发板未显示为 Arduino IDE 中的串行设备

请按照 **Q1** 中的相同解决方法。

### Q3: 我想重新刷入带有出厂固件的引导程序

您可以通过 **USB Type-C** 将开发板连接到 PC，并使用 **ESP RF Test Tool** 重新刷入带有出厂固件的引导程序。

- **步骤 1.** 按住 **BOOT BUTTON**，将 XIAO ESP32C3 连接到 PC 以进入 **引导程序模式**

- **步骤 2.** 连接后，释放 BOOT BUTTON

- **步骤 3.** 访问 [此页面](https://www.espressif.com/en/support/download/other-tools) 并下载 **ESP RF Test Tool 和 Test Guide**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-download.png" style={{width:1000, height:'auto'}}/></div>

- **步骤 4.** 解压 **.zip** 文件，导航到 `ESP_RF_Test_EN\ESP_RF_Test_EN\EspRFTestTool_v2.8_Manual` 并打开 **EspRFTestTool_v2.8_Manual.exe**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-open.png" style={{width:500, height:'auto'}}/></div>

- **步骤 5.** 选择 **ESP32C3** 作为 ChipType，选择您的 COM 端口，设置 BaudRate 为 **115200**，然后点击 **open**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-2.png" style={{width:500, height:'auto'}}/></div>

您将看到以下输出：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-5.png" style={{width:500, height:'auto'}}/></div>

- **步骤 6.** 选择 **Flash** 并点击 **Select Bin**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-6.jpg" style={{width:500, height:'auto'}}/></div>

- **步骤 7.** 下载 [XIAO ESP32C3 的出厂固件](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/ESP32-C3_RFTest_108_2b9b157_20211014.bin) 并选择它。

- **步骤 8.** 最后点击 **Load Bin**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-8.png" style={{width:500, height:'auto'}}/></div>

当刷入成功时，您将看到以下输出：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-9.png" style={{width:500, height:'auto'}}/></div>

## MicroPython GitHub 仓库

- [XIAO ESP32C3 MicroPython Repo](https://github.com/IcingTomato/micropython_xiao_esp32c3)

## 资源

<!-- - **[PDF]** [Seeed Studio XIAO Step By Step Course](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-in-Action-Minitype&Wearable-Projects-Step-by-Step.pdf) -->

- 📄**[PDF]** [ESP32C3 数据手册](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/esp32-c3_datasheet.pdf)
- 📄 **[PDF]** [Seeed Studio XIAO ESP32C3 原理图](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeeduino-XIAO-ESP32C3-SCH.pdf)
- 🗃️ **[ZIP]** [Seeed Studio XIAO ESP32C3 KiCAD 库](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeeduino-XIAO-ESP32C3-KiCAD-Library.zip)
- 🗃️ **[ZIP]** [Seeed Studio XIAO ESP32C3 Eagle 库](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-v1.2_SCH-PCB.zip)
- 🗃️ **[ZIP]** [Seeed Studio XIAO ESP32C3 出厂固件](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/ESP32-C3_RFTest_108_2b9b157_20211014.bin)

- 📄 **[DXF]** [Seeed Studio XIAO ESP32C3 尺寸 DXF 文件](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-DXF.zip)
- 📄 **[LBR]** [Seeed Studio XIAO ESP32C3 Eagle 尺寸库](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeed-Studio-XIAO-ESP32C3-footprint-eagle.lbr)
- 📄 **[XLSX]** [Seeed Studio XIAO ESP32C3 引脚表](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-pinout_sheet.xlsx)
- 🔗 **[STEP]** [Seeed Studio XIAO ESP32C3 3D 模型](https://grabcad.com/library/seeed-studio-xiao-esp32-c3-1)
- 🔗 **[GitHub]** [Seeed Studio XIAO ESP32C3 MicroPython 库](https://github.com/IcingTomato/micropython_xiao_esp32c3)
- 🔗 **[Link]** [Platform IO for Seeed Studio XIAO ESP32](https://docs.platformio.org/en/latest/boards/espressif32/seeed_xiao_esp32c3.html)
- 🔗 **[WiKi]** [初探 Seeed Studio XIAO ESP32C3](https://sigmdel.ca/michel/ha/xiao/xiao_esp32c3_intro_en.html)  一篇关于 XIAO ESP32C3 的优秀介绍，涵盖关键功能和基本使用。
- 📚 **[电子书]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/) 一本关于在 XIAO 开发板上掌握 Arduino 和 TinyML 的优秀指南。
- 🔗 **[Kicad]** [Seeed Studio XIAO ESP32C3 尺寸库](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

## 课程资源

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[电子书]** [Arduino小型化与TinyML应用 从入门到精通](https://tinkergen.cn/book_xiao)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持方式，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>