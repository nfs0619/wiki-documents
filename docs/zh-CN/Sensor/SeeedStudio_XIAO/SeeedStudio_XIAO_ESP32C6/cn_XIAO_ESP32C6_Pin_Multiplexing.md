---
description: 使用 Seeed Studio XIAO ESP32C6 进行引脚复用。
title: 使用 Seeed Studio XIAO ESP32C6 进行引脚复用
keywords:
  - esp32c6
  - xiao
  - 引脚复用
image: https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg
slug: /cn/xiao_pin_multiplexing_esp33c6
last_update:
  date: 05/15/2025
  author: Spencer
sidebar_position: 2
---

# 使用 Seeed Studio XIAO ESP32C6 进行 Arduino 编程

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

Seeed Studio XIAO ESP32C6 由高度集成的 [ESP32-C6 SoC](https://www.espressif.com/en/products/socs/esp32-c6) 提供支持，基于**两个 32 位 RISC-V 处理器**构建，其中高性能 (HP) 处理器**运行频率高达 160 MHz**，低功耗 (LP) 32 位 RISC-V 处理器的时钟频率可达 20 MHz。芯片内置**512KB SRAM 和 4 MB Flash**，提供了更大的编程空间，为物联网控制场景带来了更多可能性。

## 入门指南

### 引脚概览

在开始之前，让我们通过以下示意图了解 XIAO ESP32C6 的所有引脚及其功能。

<table align="center">
	<tr>
	    <th>XIAO ESP32C6/XIAO ESP32C6 指示图</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1Nzc0ODUwMjM3NA_556525_Slxs4ARdyuXRrJK-_1711096256?w=9854&h=3367&type=image/png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>XIAO ESP32C6/XIAO ESP32C6 引脚列表</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1Nzc0ODUwMjM3NA_318648_dMoXitoaQiq2N3-a_1711678067?w=1486&h=1228" style={{width:1000, height:'auto'}}/></div></td>
	</tr>
</table>

- 5V - 这是 USB 端口的 5V 输出。您也可以将其用作电压输入，但必须在外部电源和此引脚之间使用某种二极管（肖特基、信号或功率二极管），阳极连接到电池，阴极连接到 5V 引脚。
- 3V3 - 这是板载稳压器的输出，您可以从中获取 700mA 电流。
- GND - 电源/数据/信号地 <!-- 需要确认 -->

## 串行通信

XIAO ESP32C6 提供两种串行通信方式：`软件串口`和`硬件串口`。软件串口通常用于灵活性，而硬件串口则提供更好的性能。

### 硬件连接

1. 将外部设备的 **TX 引脚** 连接到 XIAO ESP32C6 的 RX 引脚（`D7`）。
2. 将外部设备的 **RX 引脚** 连接到 XIAO ESP32C6 的 TX 引脚（`D6`）。

### 代码示例

#### 软件串口

要使用软件串口，请安装 [EspSoftwareSerial](https://github.com/plerup/espsoftwareserial) 库。

:::tip
目前我们推荐使用 **7.0.0** 版本的 EspSoftwareSerial 库。其他版本可能会存在不同程度的问题，导致软件串口无法正常工作。
:::

```cpp
#include <SoftwareSerial.h>

SoftwareSerial mySerial(D7, D6); // RX, TX

void setup() {
  Serial.begin(9600);
  mySerial.begin(9600);
}

void loop() {
  if (mySerial.available()) {
    char data = mySerial.read();
    Serial.print("通过软件串口接收: ");
    Serial.println(data);
  }

  if (Serial.available()) {
    char data = Serial.read();
    mySerial.print("通过硬件串口接收: ");
    mySerial.println(data);
  }
}
```

此示例在引脚 `D7 (RX)` 和 `D6 (TX)` 上以 9600 波特率设置了软件串口。它同时监控硬件串口（USB）和软件串口，并在它们之间回显接收到的数据。

#### 硬件串口

XIAO ESP32C6 提供一个硬件 UART（UART0）用于串行通信，对应引脚 D7/D6。

```cpp
#include <HardwareSerial.h>

HardwareSerial mySerial(0); // UART0 (Serial0)

void setup() {
  Serial.begin(9600);  // USB 串口
  mySerial.begin(9600); // UART0
}

void loop() {
  if (Serial.available()) {
    char data = Serial.read();
    Serial.print("通过 USB 接收: ");
    Serial.println(data);
  }
  
  if (mySerial.available()) {
    char data = mySerial.read();
    Serial.print("通过 UART0 接收: ");
    Serial.println(data);
  }
}
```

此示例使用硬件 UART0 (Serial0) 进行通信。它初始化了 USB 串口和 UART0，然后监控两个端口的输入数据，并将接收到的消息打印到 USB 串口。

#### 使用 Serial1

根据上述 XIAO ESP32C6 引脚图，我们可以看到有 TX 和 RX 引脚。  
这与普通串行通信不同，但使用方法非常相似，只需添加一些参数即可。  
接下来，我们将使用芯片引出的引脚进行串行通信。

需要包含的核心函数：

- `Serial1.begin(BAUD,SERIAL_8N1,RX_PIN,TX_PIN);` -- 启用 Serial1，函数原型为：`<Serial.Type>.begin(unsigned long baud, uint32_t config, int8_t rxPin, int8_t txPin);`
  - `baud`：波特率
  - `config`：配置位
  - `rxPin`：接收引脚
  - `txPin`：发送引脚

值得注意的是，如果我们使用数字引脚端口进行定义，此处应为 `#define RX_PIN D7`、`#define TX_PIN D6`，具体参数请参考不同 XIAO 系列的引脚图。

以下是一个示例程序：

```c
#define RX_PIN D7
#define TX_PIN D6
#define BAUD 115200

void setup() {
    Serial1.begin(BAUD,SERIAL_8N1,RX_PIN,TX_PIN);
}
 
void loop() {
  if(Serial1.available() > 0)
  {
    char incominByte = Serial1.read();
    Serial1.print("我接收到: ");
    Serial1.println(incominByte);
  }
  delay(1000);
}
```

上传程序后，在 Arduino IDE 中打开串口监视器并将波特率设置为 115200。然后，您可以通过串口监视器向 XIAO ESP32C6 发送内容，XIAO 将打印出您发送的每个字节。在这里，我输入的内容是 "Hello Everyone"，我的结果如下图所示。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/114.png" style={{width:600, height:'auto'}}/></div>

## 数字 I/O

XIAO ESP32C6 具有 12 个 GPIO 引脚，可配置为输入或输出。

### 硬件准备

1. 将按钮连接到引脚 `D1`：
   - 使用外部上拉电阻（如果使用内部上拉电阻则可选）。
2. 将 LED 连接到引脚 `D10`：
   - 在 LED 串联一个限流电阻。

### 软件实现

GPIO API 提供了配置和操作 GPIO 引脚的功能。有关详细信息，请参考 [GPIO API](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/gpio.html) 文档。

```cpp
const int buttonPin = D1; // 按钮引脚
const int ledPin = D10; // LED 引脚

void setup() {
  pinMode(ledPin, OUTPUT); // 设置 LED 引脚为输出
  pinMode(buttonPin, INPUT); // 设置按钮引脚为输入
  // 如果不使用外部上拉电阻
  pinMode(buttonPin, INPUT_PULLUP); // 启用内部上拉电阻
}

void loop() {
  int buttonState = digitalRead(buttonPin); // 读取按钮状态
  digitalWrite(ledPin, buttonState); // 将按钮状态写入 LED
}
```

#### 中断方法

您也可以使用中断更高效地处理按钮按下事件。

```cpp
// 定义按钮和 LED 的引脚编号
const int buttonPin = D1;
const int ledPin = D10;

// 定义一个结构体来保存按钮相关数据
struct Button {
    const uint8_t PIN; // 按钮的引脚编号
    uint32_t numberKeyPresses; // 按钮按下次数计数器
    bool pressed; // 标志按钮当前是否被按下
};

// 为按钮创建一个结构体实例
Button my_button = {buttonPin, 0, false};

// 中断服务程序 (ISR) 用于处理按钮按下事件
void ARDUINO_ISR_ATTR isr(void* arg) {
    Button* s = static_cast<Button*>(arg); // 将参数转换为 Button 指针
    s->numberKeyPresses += 1; // 增加按钮按下次数
    s->pressed = true; // 设置按下标志
}

void setup() {
    Serial.begin(115200);
    pinMode(my_button.PIN, INPUT_PULLUP); // 设置按钮引脚为输入并启用内部上拉电阻
    attachInterruptArg(my_button.PIN, isr, &my_button, FALLING); // 将 ISR 附加到按钮引脚，触发方式为下降沿
}

void loop() {
    if (my_button.pressed) { // 检查按钮是否被按下
        Serial.printf("按钮 1 已被按下 %lu 次\n", my_button.numberKeyPresses); // 打印按钮按下次数
        my_button.pressed = false; // 重置按下标志
    }

    static uint32_t lastMillis = 0; // 存储上次中断分离时间的变量
    if (millis() - lastMillis > 10000) { // 检查是否经过了 10 秒
        lastMillis = millis(); // 更新上次分离时间
        detachInterrupt(my_button.PIN); // 从按钮引脚分离中断
    }
}
```

在此示例中，我们使用一个 `Button` 结构体来保存按钮相关数据，包括引脚编号、按键次数和标志按钮当前是否被按下。

`isr` 函数是一个中断服务程序 (ISR)，用于处理按钮按下事件。它会增加按钮按下次数并将按下标志设置为 true。

在 `setup` 函数中，我们初始化串行通信，将按钮引脚设置为输入并启用内部上拉电阻，并将 `isr` 函数附加到按钮引脚作为中断处理程序，触发方式为下降沿（按钮按下）。

在 `loop` 函数中，我们检查按钮是否被按下。如果是，则将按钮按下次数打印到串行监视器，并重置按下标志。此外，我们还包含一个部分，每隔 10 秒从按钮引脚分离中断，可能是为了进行其他操作或防止意外中断。

---

## ADC - 模拟到数字转换器

XIAO ESP32C6 具有多个模拟输入引脚，可用于读取模拟电压。

有关详细信息，请参考 [ADC API](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/adc.html) 文档。

### 硬件设置

1. 将一个电位器连接到引脚 A0，一端连接到 3.3V，另一端连接到 GND。

### 软件实现

以下是一个读取模拟值的 Arduino 示例代码：

```cpp
const int analogPin = A0; 

void setup() {
  // 初始化串行通信，速率为 115200 位/秒
  Serial.begin(115200);
  
  // 设置分辨率为 12 位（0-4095）
  analogReadResolution(12);
}

void loop() {
  // 读取模拟值和模拟电压值
  int analogValue = analogRead(analogPin);
  int analogVolts = analogReadMilliVolts(analogPin);
  
  // 将值打印到串行监视器
  Serial.printf("ADC 模拟值 = %d\n", analogValue);
  Serial.printf("ADC 毫伏值 = %d\n", analogVolts);
  
  delay(100); // 延迟以便串行读取清晰
}
```

此代码从指定引脚读取模拟值，并将其与毫伏值一起打印到串行监视器。

---

## PWM 信号 / LED 控制

XIAO ESP32-C6 具有 6 个 LEDC 通道，可生成独立波形，例如用于驱动 RGB LED 设备。

有关详细信息，请参考 [LEDC API](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/ledc.html) 文档。

### 硬件设置

1. 将一个 LED 连接到引脚 `D2`，并串联一个限流电阻。

### 软件实现

以下是一些演示 PWM 输出的 Arduino 示例代码：

#### 通用 PWM

```cpp
const int ledPin = D2;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  for (int dutyCycle = 0; dutyCycle <= 255; dutyCycle++) {
    analogWrite(ledPin, dutyCycle);
    delay(10);
  }
}
```

此代码通过 PWM 逐渐增加 LED 的亮度。

#### LED 控制

```cpp
/*
 LEDC 软件渐变

 此示例演示如何使用 ledcWrite 函数实现 LED 的软件渐变。

 代码改编自原始 Arduino 渐变示例：
 https://www.arduino.cc/en/Tutorial/Fade

 此示例代码属于公共领域。
 */

// 使用 12 位精度作为 LEDC 定时器
#define LEDC_TIMER_12_BIT  12

// 使用 5000 Hz 作为 LEDC 基频
#define LEDC_BASE_FREQ     5000

// 渐变 LED 引脚（替换为 LED_BUILTIN 常量以使用内置 LED）
#define LED_PIN            D5

int brightness = 0;    // LED 的亮度
int fadeAmount = 5;    // LED 渐变的增量

// Arduino 类似的 analogWrite
// 值必须在 0 到 valueMax 之间
void ledcAnalogWrite(uint8_t pin, uint32_t value, uint32_t valueMax = 255) {
  // 计算占空比，4095 来自 2 ^ 12 - 1
  uint32_t duty = (4095 / valueMax) * min(value, valueMax);

  // 将占空比写入 LEDC
  ledcWrite(pin, duty);
}

void setup() {
  // 设置定时器并将定时器附加到 LED 引脚
  ledcAttach(LED_PIN, LEDC_BASE_FREQ, LEDC_TIMER_12_BIT);
}

void loop() {
  // 在 LEDC 通道上设置亮度
  ledcAnalogWrite(LED_PIN, brightness);

  // 更改亮度以进行下一次循环迭代
  brightness = brightness + fadeAmount;

  // 在渐变的两端反转方向
  if (brightness <= 0 || brightness >= 255) {
    fadeAmount = -fadeAmount;
  }
  // 等待 30 毫秒以观察渐变效果
  delay(30);
}
```

此代码演示了如何使用 `ledcWrite` 函数使 LED 渐变。LED 的亮度在一个连续循环中逐渐增加和减少。

## I2C

XIAO ESP32C6 具有硬件 I2C 接口，用于与 I2C 设备通信。

有关更多详细信息，请参考 [I2C API](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/i2c.html) 文档。

### 硬件准备

1. 将 I2C 设备的 SDA 引脚连接到 XIAO 的 SDA 引脚 (`D4`)。
2. 将 I2C 设备的 SCL 引脚连接到 XIAO 的 SCL 引脚 (`D5`)。

### 软件实现

#### 主模式

以下是一个演示如何从 I2C 传感器读取数据的 Arduino 示例代码：

```cpp
#include <Wire.h>

const int sensorAddress = 0x40;

void setup() {
  Wire.begin();
  Serial.begin(115200);
}

void loop() {
  Wire.beginTransmission(sensorAddress);
  Wire.write(0x01);  // 寄存器地址
  Wire.endTransmission();

  Wire.requestFrom(sensorAddress, 2);
  if (Wire.available() >= 2) {
    int data = Wire.read() << 8 | Wire.read();
    Serial.println(data);
  }

  delay(100);
}
```

此代码从 I2C 传感器的寄存器 `0x01` 读取一个 16 位值。

#### 从模式

以下是一个演示如何将 XIAO ESP32C6 配置为 I2C *从设备* 的 Arduino 示例代码：

```cpp
#include "Wire.h"

#define I2C_DEV_ADDR 0x55

uint32_t i = 0;

void onRequest() {
  Wire.print(i++);
  Wire.print(" Packets.");
  Serial.println("onRequest");
}

void onReceive(int len) {
  Serial.printf("onReceive[%d]: ", len);
  while (Wire.available()) {
    Serial.write(Wire.read());
  }
  Serial.println();
}

void setup() {
  Serial.begin(115200);
  Serial.setDebugOutput(true);
  Wire.onReceive(onReceive);
  Wire.onRequest(onRequest);
  Wire.begin((uint8_t)I2C_DEV_ADDR);

#if CONFIG_IDF_TARGET_ESP32
  char message[64];
  snprintf(message, 64, "%lu Packets.", i++);
  Wire.slaveWrite((uint8_t *)message, strlen(message));
#endif
}

void loop() {
  // 从设备代码在此处编写
}
```

在此从模式示例中，XIAO ESP32C6 被配置为地址为 `0x55` 的 I2C 从设备。`onReceive` 回调函数在从设备接收到主设备的数据时被调用，而 `onRequest` 回调函数在主设备请求从设备的数据时被调用。

## SPI

XIAO ESP32C6 微控制器板具有内置 SPI 接口，可实现与其他支持 SPI 的设备之间的快速数据交换。这在需要设备间快速通信的项目中非常有用。

- 有关详细技术规格，请参考 [XIAO ESP32C6 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-c6_datasheet_en.pdf)。
- 了解如何使用 XIAO ESP32C6 的 SPI 接口，请参考 [SPI API Documentation](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/spi.html#)。

### 硬件准备

要将 XIAO ESP32C6 连接到另一个 SPI 设备，请按照以下步骤操作：

1. **MOSI (主输出从输入):** 将 SPI 设备的 `MOSI` 引脚连接到 XIAO 的引脚 `D10`。
2. **MISO (主输入从输出):** 将 SPI 设备的 `MISO` 引脚连接到 XIAO 的引脚 `D9`。
3. **SCK (串行时钟):** 将 SPI 设备的 `SCK` 引脚连接到 XIAO 的引脚 `D8`。
4. **CS (片选):** 将 SPI 设备的 `CS` 引脚连接到 XIAO 的一个数字引脚（例如 `D3`）。

```
MOSI -> D10
MISO -> D9
SCK -> D8
CS -> D3 (示例)
```

### 软件实现

以下是一个简化的 Arduino 示例代码，演示了使用 XIAO ESP32C6 与 SPI 设备进行基本 SPI 通信。此代码向 SPI 设备发送命令并读取响应数据。

```cpp
#include <SPI.h>

const int csPin = 3;  // 使用引脚 D3 作为片选 (CS)

void setup() {
  // 初始化 SPI 通信
  SPI.begin();            
  // 将 CS 引脚设置为输出
  pinMode(csPin, OUTPUT); 
  // 将 CS 引脚设置为高电平，表示没有活动通信
  digitalWrite(csPin, HIGH);
}

void loop() {
  // 开始与设备通信
  digitalWrite(csPin, LOW);
  SPI.transfer(0x01);  // 向设备发送命令
  int data = SPI.transfer(0);  // 读取响应数据
  digitalWrite(csPin, HIGH);  // 结束通信

  // 打印接收到的数据
  Serial.println(data);       
  delay(100);  // 等待短时间
}
```
:::note
确保代码中的引脚分配与硬件设置中的实际连接相匹配。上述示例使用了基于 XIAO ESP32-C6 的 `pin_arduino.h` 文件中预定义的引脚号，并额外定义了 CS 引脚。
:::

## 资源

- [XIAO ESP32C6 文档](https://wiki.seeedstudio.com/xiao_esp32c6_getting_started/)
- [ESP32-C6 数据手册](https://www.espressif.com/sites/default/files/documentation/esp32-c6_datasheet_en.pdf)
- [Arduino 参考](https://www.arduino.cc/reference/en/)
- [Arduino ESP32 参考](https://docs.espressif.com/projects/arduino-esp32/en/latest/index.html)