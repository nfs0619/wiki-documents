---
description: Seeed Studio XIAO nRF52840 (Sense) 的引脚复用
title: 两个版本的引脚复用
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-BLE-Sense-Pin-Multiplexing
last_update:
  date: 05/15/2025
  author: shuxu hu
---

# Seeed Studio XIAO nRF52840 (Sense) 的引脚复用

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

Seeed Studio XIAO nRF52840 (Sense) 拥有丰富的接口。它有 **11 个数字 I/O 引脚**，可以用作 **PWM 引脚**，以及 **6 个模拟输入引脚**，可以用作 **ADC 引脚**。它支持所有三种常见的串行通信接口，例如 **UART、I2C 和 SPI**。本教程将帮助您了解这些接口并在您的下一个项目中实现它们！

> 此处的基本功能在 Seeed Studio XIAO nRF52840 Arduino 库中均表现良好。

## 数字引脚

将一个按钮连接到引脚 D6，将一个 LED 连接到引脚 D10。然后上传以下代码，通过按钮控制 LED 的开/关。

```cpp
const int buttonPin = 6;     // 按钮连接到数字引脚 6
const int ledPin =  10;      // LED 连接到数字引脚 10
 
int buttonState = 0;         // 用于读取按钮状态的变量
 
void setup() {
  // 初始化 LED 引脚为输出模式：
  pinMode(ledPin, OUTPUT);
  // 初始化按钮引脚为输入模式：
  pinMode(buttonPin, INPUT);
}
 
void loop() {
  // 读取按钮的状态值：
  buttonState = digitalRead(buttonPin);
 
  // 检查按钮是否被按下。如果按下，buttonState 为 HIGH：
  if (buttonState == HIGH) {
    // 关闭 LED：
    digitalWrite(ledPin, HIGH);
  } else {
    // 打开 LED：
    digitalWrite(ledPin, LOW);
  }
}
```

## 数字引脚作为 PWM

将一个 LED 连接到引脚 D10。然后上传以下代码，观察 LED 渐渐变亮和变暗。

```cpp
int ledPin = 10;    // LED 连接到数字引脚 10

void setup() {

}

void loop() {
  // 从最小值到最大值以 5 的增量渐渐变亮：
  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 5) {
    // 设置值（范围从 0 到 255）：
    analogWrite(ledPin, fadeValue);
    // 等待 30 毫秒以观察渐变效果
    delay(30);
  }

  // 从最大值到最小值以 5 的增量渐渐变暗：
  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 5) {
    // 设置值（范围从 0 到 255）：
    analogWrite(ledPin, fadeValue);
    // 等待 30 毫秒以观察渐变效果
    delay(30);
  }
}
```

## 模拟引脚

将一个电位器连接到引脚 A5，将一个 LED 连接到引脚 D10。然后上传以下代码，通过旋转电位器旋钮控制 LED 的闪烁间隔。

```cpp
const int sensorPin = 5;
const int ledPin =  10; 
void setup() {
  // 声明 ledPin 为输出：
  pinMode(sensorPin, INPUT);
  pinMode(ledPin, OUTPUT);
}
 
void loop() {
  // 从传感器读取值：
  int sensorValue = analogRead(sensorPin);
  // 打开 ledPin
  digitalWrite(ledPin, HIGH);
  // 停止程序 <sensorValue> 毫秒：
  delay(sensorValue);
  // 关闭 ledPin：
  digitalWrite(ledPin, LOW);
  // 停止程序 <sensorValue> 毫秒：
  delay(sensorValue);
}
```

## 串行通信
使用 Serial1 通过 GPIO 使用 UART，而不是 USB。您可以同时使用两者。
使用引脚 D6 作为 UART 的 TX 引脚，引脚 D7 作为 UART 的 RX 引脚，发送 "Hello World!" 消息。

```cpp
void setup() {
    Serial1.begin(115200);
    while (!Serial1);
}
 
void loop() {
    Serial1.println("Hello World!");
    delay(1000);
}
```

## I2C

- **步骤 1.** 将 [Grove - OLED Display 1.12 (SH1107) V3.0](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html) 连接到 Seeed Studio XIAO nRF52840 (Sense)，硬件连接如下。

|  Grove - OLED Display 1.12 (SH1107) |  Seeed Studio XIAO nRF52840 (Sense) |
|-----------|-----------|
| GND       | GND       |
| VCC       | 5V        |
| SDA       | SDA       | 
| SCL       | SCL       |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/OLED-I2C-2.png" alt="pir" width={1000} height="auto" /></p>


- **步骤 2.** 打开 Arduino IDE，导航到 `Sketch > Include Library > Manage Libraries...`

- **步骤 3.** 搜索 **u8g2** 并安装它

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/u8g2-install.png" alt="pir" width={600} height="auto" /></p>


- **步骤 4.** 上传以下代码，在 OLED 显示屏上显示文本字符串

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>
 
U8G2_SH1107_SEEED_128X128_1_SW_I2C u8g2(U8G2_R0, /* clock=*/ 5, /* data=*/ 4, /* reset=*/ U8X8_PIN_NONE);
 
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

## SPI

- **步骤 1.** 将 [Grove - OLED Display 1.12 (SH1107) V3.0](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html) 连接到 Seeed Studio XIAO nRF52840 (Sense)，硬件连接如下。

| Grove - OLED Display 1.12 (SH1107) | Seeed Studio XIAO nRF52840 (Sense) |
|-----------|------------|
| GND        | GND       |
| 5V         | 5V        |
| SCL        | SCK       | 
| SI         | MOSI      |
| RES        | D3        |
| D/C        | D4        |
| CS         | D5        |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/OLED-SPI.png" alt="pir" width={1000} height="auto" /></p>


- **步骤 2.** 此 OLED 显示屏支持 I2C 和 SPI 通信，默认模式为 I2C。要使用 SPI 模式，您需要参考 [Grove - OLED Display 1.12 (SH1107) V3.0 wiki](https://wiki.seeedstudio.com/Grove-OLED-Display-1.12-SH1107_V3.0/#software-i2c) 将 OLED 显示屏通信更改为 SPI，然后继续。

**注意：** 请确保之前步骤中已安装 U8g2 库。

- **步骤 3.** 上传以下代码，在 OLED 显示屏上显示文本字符串

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>
 
U8G2_SH1107_128X128_1_4W_HW_SPI u8g2(U8G2_R3, /* cs=*/ 5, /* dc=*/ 4, /* reset=*/ 3);
 
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
