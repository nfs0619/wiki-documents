---
description: Seeed Studio XIAO RP2350 的引脚复用
title: 引脚复用 (Arduino)
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/2350image.png
slug: /cn/XIAO_RP2350_Pin_Multiplexing
last_update:
  date: 05/15/2025
  author: Allen
sidebar_position: 2
---

# 引脚复用 (Arduino)

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/2350image.png" style={{width:800, height:'auto'}}/></div>

Seeed Studio XIAO RP2350 拥有丰富的接口。它有 **19 个数字 I/O** 可用作 **PWM 引脚**，以及 **3 个模拟输入** 可用作 **ADC 引脚**。它支持四种串行通信接口，例如 **UART、I2C 和 SPI**。本教程将帮助您了解这些接口并在您的下一个项目中实现它们！

## 准备工作

目前，由于兼容性问题，XIAO RP2350 的引脚使用存在一些问题。我们已经修复了此问题，并合并了 Raspberry Pi 官方库。当前版本为 4.2.0，更新将在下一个版本 **4.2.1** 中完成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/12.png" style={{width:500, height:'auto'}}/></div>

在此期间，请通过以下路径替换文件：**Arduino15/packages/rp2040/hardware/rp2040/4.2.0/variants/seeed_xiao_rp2350（您的 Arduino 库地址）**，并[点击此处下载文件](https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/file.zip)。完成后，您就可以开始您的工作了！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/3.png" style={{width:800, height:'auto'}}/></div>

## 数字引脚

### 硬件准备

<table align="center">
  <tr>
        <th>Seeed Studio XIAO RP2350</th>
        <th>Seeed Studio XIAO 扩展基板（带 Grove OLED）</th>
        <th>Grove - LED</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102010550-xiao-rp2350.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-09bazaar939479_1040300054.jpg" style={{width:600, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

请将 XIAO RP2350 安装到扩展板上，并通过 Grove 电缆将 Grove LED 连接到扩展板的 **A0/D0** 接口。最后，通过 USB-C 电缆将 XIAO 连接到计算机。

### 软件实现

在此示例中，我们将实现通过按钮控制继电器的开/关状态。当按下按钮时，继电器打开；当释放按钮时，继电器关闭。

```c
// 定义使用的引脚
int LED_BUILTIN = D0;
// setup 函数在按下复位或为板供电时运行一次
void setup() {
  // 初始化数字引脚 LED_BUILTIN 为输出模式
  pinMode(LED_BUILTIN, OUTPUT);
}

// loop 函数会不断重复运行
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);  // 打开 LED (HIGH 表示高电平)
  delay(1000);                      // 等待一秒
  digitalWrite(LED_BUILTIN, LOW);   // 关闭 LED (LOW 表示低电平)
  delay(1000);                      // 等待一秒
}
```

### 效果

如果一切顺利，上传程序后，您应该看到以下效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/1.gif" style={{width:500, height:'auto'}}/></div>

## 数字引脚作为 PWM

XIAO RP2350 的所有 GPIO 引脚都支持 PWM 输出。因此，您可以使用任何引脚输出 PWM 来调节灯光亮度、控制舵机等功能。

### 硬件准备

<table align="center">
  <tr>
        <th>Seeed Studio XIAO RP2350</th>
        <th>Seeed Studio XIAO 扩展基板（带 Grove OLED）</th>
        <th>Grove - LED</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102010550-xiao-rp2350.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-09bazaar939479_1040300054.jpg" style={{width:600, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

请将 XIAO RP2350 安装到扩展板上，并通过 Grove 电缆将 Grove LED 连接到扩展板的 **A0/D0** 接口。最后，通过 USB-C 电缆将 XIAO 连接到计算机。

### 软件实现

在本示例中，我们将演示如何使用 PWM 输出来控制灯光的亮度。

```cpp
int LED_pin = D0;    // LED 连接到数字引脚 10

void setup() {
  // 声明 LED 引脚为输出
  pinMode(LED_pin, OUTPUT);
}

void loop() {
  // 从最小值到最大值以 5 点为增量逐渐变亮：
  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 3) {
    // 设置值（范围从 0 到 255）：
    analogWrite(LED_pin, fadeValue);
    // 等待 30 毫秒以观察渐变效果
    delay(30);
  }

  // 从最大值到最小值以 5 点为增量逐渐变暗：
  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 3) {
    // 设置值（范围从 0 到 255）：
    analogWrite(LED_pin, fadeValue);
    // 等待 30 毫秒以观察渐变效果
    delay(30);
  }
}
```

### 效果

如果程序运行成功，您将看到以下运行效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/2.gif" style={{width:500, height:'auto'}}/></div>

## 模拟信号

XIAO MG24(Sense) 开发板配备了 12 位 ADC，用于高分辨率读取模拟传感器值，这可以帮助我们读取更精确的值。

接下来，我们将选择两个传感器来反映 ADC 的特性。

### 硬件准备

<table align="center">
  <tr>
        <th>Seeed Studio XIAO RP2350</th>
        <th>Seeed Studio 带 Grove OLED 的 XIAO 扩展底板</th>
        <th>Grove - 声音传感器</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102010550-xiao-rp2350.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comimagesproductloudness20sensor.jpg" style={{width:600, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Loudness-Sensor.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

### 软件实现

```cpp
int loudness;

void setup()
{
    Serial.begin(9600); // 初始化串口
}

void loop()
{
    loudness = analogRead(A0); // 从 A0 引脚读取模拟数据
    Serial.println(loudness);
    delay(200);
}
```

### 效果

如果一切顺利，在上传程序后，您应该看到以下效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/5.png" style={{width:800, height:'auto'}}/></div>

## UART

在使用 Arduino IDE 时，串行通信是许多项目的重要组成部分。要在 Arduino IDE 中使用串行通信，您需要首先打开串行监视器窗口。这可以通过单击工具栏中的 **串行监视器** 图标或按下 **Ctrl+Shift+M** 快捷键来完成。

### 常规用法

一些常用的串行函数包括：

- `Serial.begin()` -- 初始化通信并指定波特率；
- `Serial.print()` -- 以可读格式将数据发送到串行端口；
- `Serial.write()` -- 将二进制数据发送到串行端口；
- `Serial.available()` -- 检查串行端口是否有可读取的数据；
- `Serial.read()` -- 从串行端口读取一个字节的数据；
- `Serial.flush()` -- 等待传输的串行数据发送完成。

通过使用这些串行函数，您可以在 Arduino 板和计算机之间发送和接收数据，从而为创建交互式项目打开了许多可能性。

以下是一个示例程序：

```c
void setup() {
  // 初始化串行通信，波特率为 9600 位每秒：
  Serial.begin(9600);
}

void loop() {
  // 向串行端口发送数据
  Serial.println("你好，世界！");

  // 从串行端口读取数据
  if (Serial.available() > 0) {
    // 读取传入的字节：
    char incomingByte = Serial.read();
    // 将传入的字节打印到串行监视器：
    Serial.print("我收到：");
    Serial.println(incomingByte);
  }
  
  // 等待一秒后重复循环
  delay(1000);
}
```

### 效果

如果一切顺利，在上传程序后，您应该看到以下效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/2.png" style={{width:500, height:'auto'}}/></div>

### 使用 Serial1

根据上述 XIAO RP2350 引脚图的具体参数，我们可以看到有 TX 和 RX 引脚（D6, D7）。  
用法也非常相似，但我们需要使用 **串口监控工具** 来监控 D6 和 D7 引脚以获取数据。  
接下来，我们将使用 D6 和 D7 引脚来使用 **serial1**。

:::tip
通常情况下，我们使用 **Serial** 在设备和计算机之间进行通信，以便了解程序中发生了什么。

基于此，如果您希望使用该设备与另一个设备通信，在这种情况下，我们将使用 **Serial1**。
:::

```c
void setup() {
    Serial1.begin(115200);
}
 
void loop() {
  if(Serial1.available() > 0)
  {
    char incominByte = Serial1.read(); // 读取接收到的字节
    Serial1.print("I received : "); // 打印接收到的内容
    Serial1.println(incominByte); // 打印接收到的字节
  }
  delay(1000); // 延迟 1 秒
}
```

### 效果

如果一切顺利，在上传程序后，您应该看到以下效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/1.png" style={{width:500, height:'auto'}}/></div>

## I2C

XIAO RP2350 具有一个 I2C 接口，可用于许多传感器的数据传输和解析，也可用于一些 OLED 屏幕。

### 硬件准备

<table align="center">
  <tr>
        <th>Seeed Studio XIAO RP2350</th>
        <th>Seeed Studio XIAO 扩展底板（带 Grove OLED）</th>
        <th>Grove - DHT20 温湿度传感器</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102010550-xiao-rp2350.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/101020932_preview-07-min_1.jpg" style={{width:600, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

DHT20 传感器使用 I2C 协议，因此我们可以使用 XIAO 扩展板上的 I2C 接口获取传感器数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/7.png" style={{width:500, height:'auto'}}/></div>

### 软件实现

本示例介绍如何通过 Seeed Studio XIAO RP2350 扩展底板获取 DHT20 传感器数据。

步骤 1. 将 Seeed Studio XIAO RP2350 安装到扩展板上，然后连接 Type-C 数据线。

步骤 2. 安装 **Grove Temperature And Humidity Sensor** 库。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

步骤 3. 将库添加到 Arduino。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/10.png" style={{width:800, height:'auto'}}/></div>

步骤 4. 打开刚下载库中的 DHTtester 示例。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/11.png" style={{width:800, height:'auto'}}/></div>

因为我们使用的是 DHT20，因此需要取消注释 DHT20 的代码，如下所示。

```c
// 用于各种 DHT 湿度/温度传感器的测试示例代码
// 由 ladyada 编写，公共领域

#include "Grove_Temperature_And_Humidity_Sensor.h"

// 取消注释您正在使用的传感器类型！
//#define DHTTYPE DHT11   // DHT 11
// #define DHTTYPE DHT22   // DHT 22  (AM2302)
//#define DHTTYPE DHT21   // DHT 21 (AM2301)
//#define DHTTYPE DHT10   // DHT 10
#define DHTTYPE DHT20   // DHT 20

/*注意：DHT10 和 DHT20 与其他 DHT* 传感器不同，它使用 I2C 接口而不是单线接口*/
/*因此不需要定义引脚。*/
// #define DHTPIN 2     // 我们连接的引脚（DHT10 和 DHT20 不需要定义它）
// DHT dht(DHTPIN, DHTTYPE);   //   DHT11 DHT21 DHT22
DHT dht(DHTTYPE);         //   DHT10 DHT20 不需要定义引脚

// 将传感器的引脚 1（左侧）连接到 +5V
// 将传感器的引脚 2 连接到您的 DHTPIN
// 将传感器的引脚 4（右侧）连接到 GND
// 在引脚 2（数据）和引脚 1（电源）之间连接一个 10K 电阻

#if defined(ARDUINO_ARCH_AVR)
    #define debug  Serial

#elif defined(ARDUINO_ARCH_SAMD) ||  defined(ARDUINO_ARCH_SAM)
    #define debug  SerialUSB
#else
    #define debug  Serial
#endif

void setup() {

    debug.begin(115200);
    debug.println("DHTxx 测试！");
    Wire.begin();

    /*如果使用 WIO link，必须拉高电源引脚。*/
    // pinMode(PIN_GROVE_POWER, OUTPUT);
    // digitalWrite(PIN_GROVE_POWER, 1);

    dht.begin();
}

void loop() {
    float temp_hum_val[2] = {0};
    // 读取温度或湿度大约需要 250 毫秒！
    // 传感器读数可能最多延迟 2 秒（这是一个非常慢的传感器）

    if (!dht.readTempAndHumidity(temp_hum_val)) {
        debug.print("湿度: ");
        debug.print(temp_hum_val[0]);
        debug.print(" %\t");
        debug.print("温度: ");
        debug.print(temp_hum_val[1]);
        debug.println(" *C");
    } else {
        debug.println("获取温度和湿度值失败。");
    }

    delay(1500); // 延迟 1.5 秒
}
```

### 效果

如果一切顺利，在上传程序后，你应该会看到以下效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/4.png" style={{width:800, height:'auto'}}/></div>

## SPI

XIAO RP2350 芯片集成了多个外设，包括一个 SPI 接口，可用于连接外部 SPI 设备，例如闪存、显示屏、传感器等。XIAO RP2350 还支持高速 SPI 传输模式，最高可实现 80 MHz 的 SPI 传输速率，满足大多数 SPI 设备的数据传输需求。

### 硬件准备

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO RP2350</th>
      <th>Grove - OLED Display 1.12 (SH1107) V3.0 - SPI/IIC</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/2-102010550%20XIAO%20RP2350-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/10402050_Main-02.png" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

按照上述硬件准备后，使用跳线连接 XIAO 和 OLED 的 SPI 接口。请参考以下表格进行连接。

|XIAO RP2350| OLED 显示屏|
|-----------|-------------|
|D8|SCL|
|D10|SI|
|D5|RES|
|D4|D/C|
|D7|CS|
|VCC(VBUS)|5V|
|GND|GND|

### 软件实现

接下来，我们将以以下程序为例，介绍如何使用 SPI 接口控制 OLED 屏幕显示。

安装 u8g2 库。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

```c
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>
 
U8G2_SH1107_128X128_1_4W_HW_SPI u8g2(U8G2_R3, /* cs=*/ D7, /* dc=*/ D4, /* reset=*/ D5);
 
void setup(void) {
  u8g2.begin();
}
 
void loop(void) {
  u8g2.firstPage();

  do {
    u8g2.setFont(u8g2_font_luBIS08_tf);
    u8g2.drawStr(0,24,"Hello Seeed!");
  } while ( u8g2.nextPage() );
}
```

在 `setup()` 函数中，使用适当的构造函数参数实例化 `U8G2_SH1107_128X128_1_4W_HW_SPI` 类，这些参数指定了用于芯片选择 (cs)、数据/命令 (dc) 和复位 (reset) 的引脚。然后调用 `u8g2.begin()` 函数初始化显示屏。

在 `loop()` 函数中，使用 `u8g2.firstPage()`、`u8g2.setFont()` 和 `u8g2.drawStr()` 函数更新显示内容。`u8g2.firstPage()` 函数设置显示缓冲区以进行写入，而 `u8g2.nextPage()` 显示更新的内容。do-while 循环确保内容持续显示，直到程序停止。

总体而言，这段代码展示了如何使用 U8g2 库控制 OLED 显示屏并在其上显示文本。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/15.png" style={{width:700, height:'auto'}}/></div>


## 完成

你已经学习了 XIAO RP2350 引脚的基本功能。现在，尽情享受它吧~
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/6.png" style={{width:1000, height:'auto'}}/></div>



## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>