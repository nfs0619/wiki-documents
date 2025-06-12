---
description: Seeed Studio XIAO ESP32C3 的引脚复用
title: 引脚复用
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO_ESP32C3_Pin_Multiplexing
last_update:
  date: 05/15/2025
  author: Spencer
---

# 引脚复用

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

Seeed Studio XIAO ESP32C3 提供丰富的接口。它有 **11 个数字 I/O** 可用作 **PWM 引脚**，以及 **4 个模拟输入** 可用作 **ADC 引脚**。它支持四种串行通信接口，如 **UART、I2C、SPI 和 I2S**。本篇 Wiki 将帮助您了解这些接口并在下一个项目中实现它们！

## 数字接口

将一个按钮连接到引脚 D6，将一个 LED 连接到引脚 D10。然后上传以下代码，通过按钮控制 LED 的开/关。

```c
const int buttonPin = D6;     // 按钮连接到数字引脚 6
const int ledPin =  D10;      // LED 连接到数字引脚 10
 
int buttonState = 0;         // 用于读取按钮状态的变量
 
void setup() {
  // 将 LED 引脚初始化为输出：
  pinMode(ledPin, OUTPUT);
  // 将按钮引脚初始化为输入：
  pinMode(buttonPin, INPUT);
}
 
void loop() {
  // 读取按钮的状态值：
  buttonState = digitalRead(buttonPin);
 
  // 检查按钮是否被按下。如果是，buttonState 为 HIGH：
  if (buttonState == HIGH) {
    // 打开 LED：
    digitalWrite(ledPin, HIGH);
  } else {
    // 关闭 LED：
    digitalWrite(ledPin, LOW);
  }
}
```

## 数字接口作为 PWM 使用

将一个 LED 连接到引脚 D10。然后上传以下代码，观察 LED 渐亮和渐暗的效果。

```cpp
int ledPin = D10;    // LED 连接到数字引脚 10

void setup() {
  // 声明 LED 引脚为输出
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // 从最小值到最大值以 5 为步长渐亮：
  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 5) {
    // 设置值（范围从 0 到 255）：
    analogWrite(ledPin, fadeValue);
    // 等待 30 毫秒以观察渐变效果
    delay(30);
  }

  // 从最大值到最小值以 5 为步长渐暗：
  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 5) {
    // 设置值（范围从 0 到 255）：
    analogWrite(ledPin, fadeValue);
    // 等待 30 毫秒以观察渐变效果
    delay(30);
  }
}
```

## 模拟接口

将一个电位器连接到引脚 A0，将一个 LED 连接到引脚 D10。然后上传以下代码，通过旋转电位器旋钮控制 LED 的闪烁间隔。

:::tip
ADC 映射范围为 0-2500mV。
:::

```c
const int sensorPin = A0;
const int ledPin =  D10; 

void setup() {
  pinMode(sensorPin, INPUT);  // 声明 sensorPin 为输入
  pinMode(ledPin, OUTPUT);   // 声明 ledPin 为输出
}

void loop() {
  // 从传感器读取值：
  int sensorValue = analogRead(sensorPin);
  // 打开 ledPin
  digitalWrite(ledPin, HIGH);
  // 程序暂停 <sensorValue> 毫秒：
  delay(sensorValue);
  // 关闭 ledPin：
  digitalWrite(ledPin, LOW);
  // 程序暂停 <sensorValue> 毫秒：
  delay(sensorValue);
}
```

## 串口 - UART

### 常规方法 - 选择使用 USB 串口或 UART0 串口

该板载有 2 个串口接口：

- USB 串口
- UART0 串口

:::note
对于 XIAO ESP32 C3，没有 `Serial2`。  
如果需要使用 `Serial1`，必须定义引脚，否则可能无法接收数据。对于 XIAO ESP32 系列，使用 `Serial1` 的方式如下：

```cpp
Serial1.begin(115200, SERIAL_8N1, D7, D6); // RX, TX
```
:::

默认情况下，USB 串口已启用，这意味着您可以通过 USB Type-C 将板连接到 PC，并在 Arduino IDE 上打开串口监视器查看通过串口发送的数据。

但是，如果您想使用 UART0 作为串口，需要将引脚 D6 作为 TX 引脚，D7 作为 RX 引脚，并连接到 USB-串口适配器。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-3.png" alt="pir" width={1000} height="auto" /></div>

同时，您需要在 Arduino IDE 中将 **USB CDC On Boot** 设置为 **Disabled**。

**注意：当板在 Arduino Board Manager 中显示时更换图片**

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-1.png" alt="pir" width={600} height="auto" /></div>

上传以下代码到 Arduino IDE，通过串口发送字符串 "Hello World!"。

```cpp
void setup() {
    Serial.begin(115200);
    while (!Serial);
}
 
void loop() {
    Serial.println("Hello World!");
    delay(1000);
}
```

在 Arduino 串口监视器上的输出如下所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-2.jpg" alt="pir" width={450} height="auto" /></div>

### 特殊方法 - 同时使用 USB 串口和 UART0/UART1

在许多情况下，我们需要使用 UART 传感器连接到 XIAO ESP32C3 的硬件串口以获取数据，同时可能需要使用 USB 串口在串口监视器上显示数据。这可以通过一些特殊方法实现。

- 示例程序：

```c
// 需要此库以进行底层访问设置。
#include <HardwareSerial.h>

// 定义两个映射到内部 UART 的串口设备
HardwareSerial MySerial0(0);
HardwareSerial MySerial1(1);

void setup()
{
    // 对于 USB，只需正常使用 Serial：
    Serial.begin(115200);

    // 在引脚 TX=D6 和 RX=D7 上配置 MySerial0（-1, -1 表示使用默认值）
    MySerial0.begin(9600, SERIAL_8N1, -1, -1);
    MySerial0.print("MySerial0");

    // 在引脚 RX=D9 和 TX=D10 上配置 MySerial1
    MySerial1.begin(115200, SERIAL_8N1, 9, 10);
    MySerial1.print("MySerial1");
}

void loop()
{

}
```

如您所见，XIAO ESP32C3 实际上有三个可用的 UART。

接下来，我们以 [60GHz mmWave Sensor - Human Resting Breathing and Heartbeat Module](https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html) 为例，说明如何使用 D6 和 D7 硬件串口以及 USB 串口。

请准备以下设备。

<table align="center">
 <tr>
     <th>XIAO ESP32C3</th>
        <th>60GHz mmWave Sensor -<br/>Human Resting Breathing<br/>and Heartbeat Module</th>
 </tr>
    <tr>
        <td><div align="center"><img width = {120} src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png"/></div></td>
        <td><div align="center"><img width = {240} src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"/></div></td>
    </tr>
 <tr>
        <td align = "center"><a href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html">立即购买</a></td>
        <td align = "center"><a href="https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html">立即购买</a></td>
 </tr>
</table>

将传感器库下载到您的计算机，并将其添加到 Arduino IDE。

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed-Studio-MR60BHA1-Sensor/" target="_blank"><div align="center"><img width = {300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></div></a></p>

在这里，我们希望解析心跳和呼吸数据的信息，您可以像下面这样重写您的程序。

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>
#include <HardwareSerial.h>

HardwareSerial MySerial(0);   //创建一个新的 HardwareSerial 类 -- D6/D7

// 也可以尝试硬件串口
BreathHeart_60GHz radar = BreathHeart_60GHz(&MySerial);

void setup() {
  // 在这里放置您的 setup 代码，程序将运行一次：
  Serial.begin(115200);
  MySerial.begin(115200, SERIAL_8N1, -1, -1); // 在 CPU 频率为 40MHz 时，工作速度为定义的一半。

  while(!Serial);   //当串口打开时，程序开始执行。

  Serial.println("准备就绪");

  // radar.ModeSelect_fuc(1);  //1: 表示实时传输模式，2: 表示睡眠状态模式。
  //设置模式后，如果您没有看到数据返回，可能需要重新给传感器供电。
}

void loop()
{
  // 在这里放置您的主代码，程序将重复运行：
  radar.Breath_Heart();           //呼吸和心跳信息输出
  if(radar.sensor_report != 0x00){
    switch(radar.sensor_report){
      case HEARTRATEVAL:
        Serial.print("传感器监测到当前心率值为: ");
        Serial.println(radar.heart_rate, DEC);
        Serial.println("----------------------------");
        break;
      case HEARTRATEWAVE:  //仅在实时数据传输模式开启时有效
        Serial.print("心率波形（正弦波）-- 点 1: ");
        Serial.print(radar.heart_point_1);
        Serial.print(", 点 2 : ");
        Serial.print(radar.heart_point_2);
        Serial.print(", 点 3 : ");
        Serial.print(radar.heart_point_3);
        Serial.print(", 点 4 : ");
        Serial.print(radar.heart_point_4);
        Serial.print(", 点 5 : ");
        Serial.println(radar.heart_point_5);
        Serial.println("----------------------------");
        break;
      case BREATHNOR:
        Serial.println("传感器检测到当前呼吸速率正常。");
        Serial.println("----------------------------");
        break;
      case BREATHRAPID:
        Serial.println("传感器检测到当前呼吸速率过快。");
        Serial.println("----------------------------");
        break;
      case BREATHSLOW:
        Serial.println("传感器检测到当前呼吸速率过慢。");
        Serial.println("----------------------------");
        break;
      case BREATHNONE:
        Serial.println("目前没有呼吸信息，请稍候...");
        Serial.println("----------------------------");
        break;
      case BREATHVAL:
        Serial.print("传感器监测到当前呼吸速率值为: ");
        Serial.println(radar.breath_rate, DEC);
        Serial.println("----------------------------");
        break;
      case BREATHWAVE:  //仅在实时数据传输模式开启时有效
        Serial.print("呼吸速率波形（正弦波）-- 点 1: ");
        Serial.print(radar.breath_point_1);
        Serial.print(", 点 2 : ");
        Serial.print(radar.breath_point_2);
        Serial.print(", 点 3 : ");
        Serial.print(radar.breath_point_3);
        Serial.print(", 点 4 : ");
        Serial.print(radar.breath_point_4);
        Serial.print(", 点 5 : ");
        Serial.println(radar.breath_point_5);
        Serial.println("----------------------------");
        break;
    }
  }
  delay(200);                       //添加时间延迟以避免程序卡住
}
```

请上传程序，然后打开串口监视器并将波特率设置为 115200。

接下来，我们可以通过以下连接方法将传感器连接到 XIAO ESP32C3。

<div align="center"><img width = {700} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/62.jpg"/></div>

如果一切正常，您将在串口监视器上看到数据消息。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/2.png" alt="pir" width="800" height="auto"/></div>

### Serial1 使用方法

根据上述 XIAO ESP32C3 引脚图的具体参数，我们可以观察到有 TX 引脚和 RX 引脚。 
这与串行通信不同，但使用方法非常相似，只是需要添加一些参数。 
因此接下来，我们将使用芯片引出的引脚进行串行通信。

需要包含的核心功能：

- `Serial1.begin(BAUD,SERIAL_8N1,RX_PIN,TX_PIN);` -- 启用 Serial1，函数原型为：`<Serial.Type>.begin(unsigned long baud, uint32_t config, int8_t rxPin, int8_t txPin);`
  - `baud`  :波特率
  - `config`:配置位
  - `rxPin` :接收引脚
  - `txPin` :发送引脚

值得注意的是，如果我们使用数字引脚端口进行定义，这里应该是`#define RX_PIN D7`、`#define TX_PIN D6`，请参考不同 XIAO 系列的引脚图获取具体参数。

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
    Serial1.print("我收到: ");
    Serial1.println(incominByte);
  }
  delay(1000);
}
```

上传程序后，在 Arduino IDE 中打开串口监视器并将波特率设置为 115200。然后，您可以通过串口监视器 Serial 在 XIAO ESP32C3 中发送您想要的内容，XIAO 会打印出您发送的每个字节内容。在这里，我输入的内容是 "Hello Everyone"，我的结果图如下所示：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/114.png" style={{width:600, height:'auto'}}/></div>

### 软件串口

要使用软件串口，请安装 [EspSoftwareSerial](https://github.com/plerup/espsoftwareserial) 库。

:::提示
目前我们推荐使用 EspSoftwareSerial 库的 7.0.0 版本。其他版本可能存在不同程度的问题，导致软串口无法正常工作。
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
    Serial.print("Received via software serial: ");
    Serial.println(data);
  }

  if (Serial.available()) {
    char data = Serial.read();
    mySerial.print("Received via hardware serial: ");
    mySerial.println(data);
  }
}
```

此示例在引脚 `D7 (RX)` 和 `D6 (TX)` 上设置软件串口，波特率为 9600。它同时监控硬件串口（USB）和软件串口，并在它们之间回显接收到的数据。

## I2C

### 硬件连接

按照以下硬件连接方式，将 [Grove - OLED Yellow&Blue Display 0.96 (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Yellow-Blue-Display-0-96-SSD1315-V1-0-p-5010.html) 连接到 XIAO ESP32C3。

|  Grove - OLED Yellow&Blue Display 0.96 (SSD1315) |  XIAO ESP32C3 |
|-----------|-----------|
| SCL       | SCL       |
| SDA       | SDA       |
| VCC       | 5V        |
| GND       | GND       |

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-7.png" alt="pir" width={1000} height="auto" /></div>

### 软件设置

- **步骤 1.** 打开 Arduino IDE，导航到 `Sketch > Include Library > Manage Libraries...`

- **步骤 2.** 搜索 **u8g2** 并安装它

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/u8g2-install.png" alt="pir" width={600} height="auto" /></p>

- **步骤 3.** 上传以下代码以在 OLED 显示屏上显示文本字符串

```cpp
//#include <Arduino.h>
#include <U8g2lib.h>
 
#ifdef U8X8_HAVE_HW_SPI
#include <SPI.h>
#endif
#ifdef U8X8_HAVE_HW_I2C
#include <Wire.h>
#endif

U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);    //Low spped I2C
 
void setup(void) {
  u8g2.begin();
//  u8x8.setFlipMode(1);   // set number from 1 to 3, the screen word will rotary 180
}
 
void loop(void) {
  u8g2.clearBuffer();                   // clear the internal memory
  u8g2.setFont(u8g2_font_ncenB08_tr);   // choose a suitable font
  u8g2.drawStr(0,15,"Hello World!");    // write something to the internal memory
  u8g2.drawStr(0,30,"Hello World!");
  u8g2.drawStr(0,40,"Hello World!");
  u8g2.sendBuffer();                    // transfer internal memory to the display
//  delay(1000);  
}
```

## SPI

### 硬件连接

按照以下硬件连接方式，将 [Grove - High Precision Barometric Pressure Sensor (DPS310)](https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html) 连接到 XIAO ESP32C3。

| Grove - High Precision Barometric Pressure Sensor (DPS310) | XIAO ESP32C3 |
|-----------|------------|
| 3V3        | 3V3       |
| SDI        | MOSI      |
| GND        | GND       |
| SDO        | MISO      |
| CSK        | SCK       |
| CS         | CS        |

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-4.png" alt="pir" width={1000} height="auto" /></div>

### 软件设置

- **步骤 1.** 下载 [Seeed_Arduino_DPS310 Library](https://github.com/Seeed-Studio/Seeed_Arduino_DPS310) 为 zip 文件

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-5.png" alt="pir" width={1000} height="auto" /></div>

- **步骤 2.** 打开 Arduino IDE，导航到 `Sketch > Include Library > Add .ZIP Library...` 并打开下载的 zip 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

- **步骤 3.** 导航到 `File > Examples > DigitalPressureSensor > spi_background` 打开 **spi_background** 示例

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-6.png" alt="pir" width={450} height="auto" /></div>

或者，你也可以从下面复制代码

```cpp
#include <Dps310.h>

// Dps310 Opject
Dps310 Dps310PressureSensor = Dps310();

void setup() {
    //pin number of your slave select line
    //XMC2GO
    int16_t pin_cs = SS;
    //for XMC 1100 Bootkit  & XMC4700 Relax Kit uncomment the following line
    //int16_t pin_cs = 10;

    Serial.begin(9600);
    while (!Serial);


    //Call begin to initialize Dps310
    //The parameter pin_nr is the number of the CS pin on your Microcontroller
    Dps310PressureSensor.begin(SPI, pin_cs);

    //temperature measure rate (value from 0 to 7)
    //2^temp_mr temperature measurement results per second
    int16_t temp_mr = 2;
    //temperature oversampling rate (value from 0 to 7)
    //2^temp_osr internal temperature measurements per result
    //A higher value increases precision
    int16_t temp_osr = 2;
    //pressure measure rate (value from 0 to 7)
    //2^prs_mr pressure measurement results per second
    int16_t prs_mr = 2;
    //pressure oversampling rate (value from 0 to 7)
    //2^prs_osr internal pressure measurements per result
    //A higher value increases precision
    int16_t prs_osr = 2;
    //startMeasureBothCont enables background mode
    //temperature and pressure ar measured automatically
    //High precision and hgh measure rates at the same time are not available.
    //Consult Datasheet (or trial and error) for more information
    int16_t ret = Dps310PressureSensor.startMeasureBothCont(temp_mr, temp_osr, prs_mr, prs_osr);
    //Use one of the commented lines below instead to measure only temperature or pressure
    //int16_t ret = Dps310PressureSensor.startMeasureTempCont(temp_mr, temp_osr);
    //int16_t ret = Dps310PressureSensor.startMeasurePressureCont(prs_mr, prs_osr);


    if (ret != 0) {
        Serial.print("Init FAILED! ret = ");
        Serial.println(ret);
    } else {
        Serial.println("Init complete!");
    }
}



void loop() {
    uint8_t pressureCount = 20;
    float pressure[pressureCount];
    uint8_t temperatureCount = 20;
    float temperature[temperatureCount];

    //This function writes the results of continuous measurements to the arrays given as parameters
    //The parameters temperatureCount and pressureCount should hold the sizes of the arrays temperature and pressure when the function is called
    //After the end of the function, temperatureCount and pressureCount hold the numbers of values written to the arrays
    //Note: The Dps310 cannot save more than 32 results. When its result buffer is full, it won't save any new measurement results
    int16_t ret = Dps310PressureSensor.getContResults(temperature, temperatureCount, pressure, pressureCount);

    if (ret != 0) {
        Serial.println();
        Serial.println();
        Serial.print("FAIL! ret = ");
        Serial.println(ret);
    } else {
        Serial.println();
        Serial.println();
        Serial.print(temperatureCount);
        Serial.println(" temperature values found: ");
        for (int16_t i = 0; i < temperatureCount; i++) {
            Serial.print(temperature[i]);
            Serial.println(" degrees of Celsius");
        }

        Serial.println();
        Serial.print(pressureCount);
        Serial.println(" pressure values found: ");
        for (int16_t i = 0; i < pressureCount; i++) {
            Serial.print(pressure[i]);
            Serial.println(" Pascal");
        }
    }

    //Wait some time, so that the Dps310 can refill its buffer
    delay(10000);
}
```

- **步骤 4.** 上传代码并打开 **串口监视器**

**注意：** 上传代码后，它不会自动执行，直到您点击 Arduino 窗口右上角的 **串口监视器**。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-8.jpg" alt="pir" width={600} height="auto" /></div>

现在，您将在串口监视器上看到温度和压力数据一个接一个地显示，如上图所示！

## 关于 XIAO ESP32C3 IO 分配的注意事项

### D9

XIAO ESP32C3 的 D9 连接到 ESP32-C3 的 GPIO9 (15)、上拉电阻 (R6) 和 BOOT 按钮。BOOT 按钮（以及 RESET 按钮）允许您手动切换 ESP32-C3 的启动模式。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/10.png" alt="pir" width={600} height="auto" /></div>

按下 BOOT 按钮会将 D9 连接到 GND。**因此，最好将 D9 用作开关输入**。

### D6

XIAO ESP32C3 的 D6 连接到 ESP32-C3 的 U0TXD (28)。第一级/第二级引导加载程序的运行状态以文本形式输出到 U0TXD。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/11.png" alt="pir" width={400} height="auto" /></div>

D6 在启动时设置为 UART 输出，因此如果将 D6 用作输入，可能会意外产生高电流。**因此建议仅将 D6 引脚用于输出模式**。

然而，由于 D6 是 UART 输出，因此需要注意以下几点：第一，它在未通信时处于待机模式下为 HIGH；第二，第一级/第二级引导加载程序的文本输出。在启动后信号会立即在 HIGH/LOW 之间波动，如果需要，必须进行处理。

因此尽量不要使用 D6。（当然，在完全理解它后使用是可以的。）

### D8

Seeed Studio XIAO ESP32C3 的 D8 连接到 ESP32-C3 的 GPIO8 (14)。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/12.png" alt="pir" width={300} height="auto" /></div>

当通过按住 BOOT 按钮设置启动模式为下载启动时，会参考 GPIO8，并且此时必须为 HIGH。([此处](https://www.espressif.com/sites/default/files/documentation/esp32-c3_datasheet_en.pdf)提到："GPIO8 = 0 和 GPIO9 = 0 的组合是无效的，会触发意外行为。")

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/13.png" alt="pir" width={700} height="auto" /></div>

如果您使用下载启动模式，**请添加一个上拉电阻以确保 GPIO8 在启动时为 HIGH**。

特别感谢 SeeedJP 的同事 **matsujirushi** 测试并贡献了这一部分内容。以下是原文的参考链接。

- [Seeed Studio XIAO ESP32C3のI/O割り付けに注意](https://lab.seeed.co.jp/entry/2023/04/03/120000)