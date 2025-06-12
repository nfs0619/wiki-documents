---
description: Seeed Studio XIAO RP2040 使用 Arduino
title: Arduino
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg
slug: /cn/XIAO-RP2040-with-Arduino
last_update:
  date: 05/15/2025
  author: Spencer
---

# **Seeed Studio XIAO RP2040 使用 Arduino**

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

这是一个关于如何连接 Seeed Studio XIAO RP2040 并使用 Arduino 进行编程的页面。我们还将介绍一些关于引脚复用的项目。

## **入门指南**

首先，我们将连接 Seeed Studio XIAO RP2040 到电脑，并从 Arduino 上传一个简单的代码，以检查开发板是否正常工作。

### **硬件设置**

**所需材料：**

- Seeed Studio XIAO RP2040 x1
- 电脑 x1
- USB Type-C 数据线 x1

:::tip
有些 USB 数据线只能供电，不能传输数据。如果您没有 USB 数据线或不确定您的 USB 数据线是否可以传输数据，可以查看 [seeed USB type C 支持 USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)。
:::

**硬件连接：**

- 步骤 1. 按住 BOOT 按钮，然后将 Seeed Studio XIAO RP2040 连接到电脑。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" /></div>

- 步骤 2. 如果电脑上显示 "RPI-RP2" 磁盘，并且 Seeed Studio XIAO RP2040 上的电源 LED 灯亮起，则连接完成。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk.png" /></div>

### **软件设置**

- **步骤 1.** 根据您的操作系统下载并安装最新版本的 Arduino IDE。

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/software"target="_blank"><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/Download_IDE.png" /></a></p>

- **步骤 2.** 启动 Arduino 应用程序。

- **步骤 3.** 将 Seeed Studio XIAO RP2040 的开发板包添加到 Arduino IDE。

导航到 **文件** > **首选项**，并在 **附加开发板管理器 URLs** 中填写以下 URL：

`https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json`

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/5.png"/></div>

导航到 **工具 -> 开发板 -> 开发板管理器...**，在搜索框中输入关键词 "**RP2040**"。选择最新版本的 "Raspberry Pi Pico/RP2040" 并安装。

:::note 注意

名为 **Seeed XIAO RP2040 的开发板包已不再可用**，请勿下载和使用它！

请安装 "Raspberry Pi Pico/RP2040" 包，其中包含 "Seeed XIAO RP2040" 开发板。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/3.png"/></div>
:::

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/2.png"/></div>

- **步骤 4.** 选择您的开发板和端口。

- **步骤 5.** 打开 Blink 示例代码，导航到 **"文件 --> 示例 ---> 01.Basics --> Blink"**。

<div align="center"><img width ="550" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/select_blink.png"/></div>

**开发板**

安装开发板包后，导航到 **工具 -> 开发板**，找到 "**Seeed Studio XIAO RP2040**" 并选择它。现在我们已经完成了 Seeed Studio XIAO RP2040 在 Arduino IDE 中的设置。

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/4.png"/></div>

**端口**

导航到 **工具 > 端口**，选择连接的 Seeed Studio XIAO RP2040 的串口名称。这通常是 COM3 或更高（**COM1** 和 **COM2** 通常保留给硬件串口）。连接的 Seeed Studio XIAO RP2040 的串口通常包含括号，写有 "Seeed Studio XIAO RP2040"。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png"/></div>

- **步骤 6.** 点击 **上传** 按钮，将 Blink 示例代码上传到开发板。

<div align="center"><img width="500" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl5.png"/></div>

上传完成后，您应该可以看到开发板上的 25 号引脚绿色 (USER) LED 每秒闪烁一次。如果是这样，恭喜您！这意味着连接成功，现在您可以探索更多使用 Seeed Studio XIAO RP2040 的项目！

:::note
如果上传 Arduino 程序失败，请尝试按住 "BOOT" 按钮，然后点击 "RUN" 按钮。此时，Seeed Studio XIAO RP2040 将进入启动模式（您的电脑会加载一个可移动磁盘），然后您可以再次上传 Arduino 程序。
:::

## **Seeed Studio XIAO RP2040 的引脚复用**

Seeed Studio XIAO RP2040 包含 11 个数字引脚、4 个模拟引脚、11 个 PWM 引脚、1 个 I2C 接口、1 个 UART 接口、1 个 SPI 接口和 1 个 SWD 焊盘接口。我们将提供关于这些接口的教程，以帮助您的项目开发。

### **数字引脚**

将一个按钮连接到 D0 引脚，将一个 LED 连接到 25 引脚。然后上传以下代码，通过按钮控制 LED 的开关。

:::warning
请注意，Seeed Studio XIAO RP2040 的工作电压为 3.3V，如果错误地将传感器连接到 5V，主板可能无法正常工作。
:::

```cpp
const int buttonPin = D0;     // 按钮引脚的编号
const int ledPin =  25;      // LED 引脚的编号
 
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
 
  // 检查按钮是否被按下。如果是，buttonState 为 HIGH：
  if (buttonState == HIGH) {
    // 关闭 LED：
    digitalWrite(ledPin, HIGH);
  } else {
    // 打开 LED：
    digitalWrite(ledPin, LOW);
  }
}
```

### **模拟引脚**

将一个电位器连接到 A0 引脚，将一个 LED 连接到 25 引脚。然后上传以下代码，通过旋转电位器旋钮控制 LED 的闪烁间隔。

```cpp
const int sensorPin = A0;
const int ledPin =  25; 
void setup() {
  // 声明 ledPin 为输出模式:
  pinMode(sensorPin, INPUT);
  pinMode(ledPin, OUTPUT);
}
 
void loop() {
  // 从传感器读取值:
  int sensorValue = analogRead(sensorPin);
  // 打开 ledPin
  digitalWrite(ledPin, HIGH);
  // 程序暂停 <sensorValue> 毫秒:
  delay(sensorValue);
  // 关闭 ledPin:
  digitalWrite(ledPin, LOW);
  // 程序暂停 <sensorValue> 毫秒:
  delay(sensorValue);
}
```

### **串口通信**

使用引脚 D6 作为 UART 的 TX 引脚，引脚 D7 作为 UART 的 RX 引脚，发送 "Hello World!" 消息。

```cpp
void setup() {
    Serial.begin(115200);
    while (!Serial);
}

void loop() {
    Serial.println("Hello,World");
    delay(1000);
}
```

### **RGB LED**

引脚 11 是 RGB LED 的使能引脚。通过将引脚 11 设置为高电平，可以点亮 RGB LED。这里我们将让它闪烁。首先，我们需要添加一个第三方库。

- **步骤 1.** 打开 Arduino IDE，导航到 `Sketch > Include Library > Manage Libraries...` 搜索库。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png" /></div>

在 Arduino 库管理器中输入关键字 "Adafruit_NeoPixel" 并安装最新版本。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/boardurl6.png" /></div>

- **步骤 2.** 将代码复制到 Arduino 并点击 **Upload** 按钮上传。

```cpp
#include <Adafruit_NeoPixel.h>

int Power = 11;
int PIN  = 12;
#define NUMPIXELS 1

Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  pixels.begin();
  pinMode(Power,OUTPUT);
  digitalWrite(Power, HIGH);

}

void loop() { 
  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(15, 25, 205)); // 设置颜色
  delay(400);
  pixels.show();
  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(103, 25, 205)); // 设置颜色
  delay(400);
  pixels.show();
  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(233, 242, 205)); // 设置颜色
  delay(400);
  pixels.show();
  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(233, 23, 23)); // 设置颜色
  delay(400);
  pixels.show();
  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(12, 66, 101)); // 设置颜色
  delay(400);
  pixels.show();
  delay(500);

}
```

RGB LED 将显示彩虹颜色。

### **I2C**

这里我们将通过 IIC 将 Seeed Studio XIAO RP2040 连接到 [Grove - OLED Display 0.96" (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html) 并显示 "Hello world"。

**连接**：

我们将使用 PIN 5 作为 SCL 引脚，PIN 4 作为 SDA 引脚。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_15.png" /></div>

- **步骤 1.** 打开 Arduino IDE，导航到 `Sketch > Include Library > Manage Libraries...` 搜索库。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png" /></div>

在 Arduino 库管理器中输入关键字 "U8G2" 并安装最新版本。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/boardurl7.png" /></div>

- **步骤 2.** 将代码复制到 Arduino 并点击 **Upload** 按钮上传。

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
 
#ifdef U8X8_HAVE_HW_SPI
#include <SPI.h>
#endif
#ifdef U8X8_HAVE_HW_I2C
#include <Wire.h>
#endif

U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);
 
void setup(void) {
  u8g2.begin();
}
 
void loop(void) {
  u8g2.clearBuffer();                   // 清除内部内存
  u8g2.setFont(u8g2_font_ncenB08_tr);   // 选择合适的字体
  u8g2.drawStr(0,10,"Hello Wrold!");    // 写入内容到内部内存
  u8g2.drawStr(0,30,"Hello Werold!"); 
  u8g2.drawStr(0,50,"Hello Wrrrold!"); 
  u8g2.sendBuffer();                    // 将内部内存传输到显示屏
  delay(1000);  
}
```

结果如下所示：

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl8.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl8.png" alt="pir" width={600} height="auto" /></p>

### **SPI**

这里我们将通过 SPI 连接 [Grove - OLED Yellow&Blue Display 0.96 (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Yellow-Blue-Display-0-96-SSD1315-V1-0-p-5010.html) 并显示 "Hello World"。OLED 显示屏支持 IIC 和 SPI 通信，默认通信模式为 IIC。在开始之前，需要将 [IIC 功能切换为 SPI 功能](https://wiki.seeedstudio.com//Grove-OLED-Yellow&Blue-Display-0.96-SSD1315_V1.0/)。

**连接**：

我们将使用 PIN 8 作为 SCK 引脚，PIN 9 作为 MISO 引脚，PIN 10 作为 MOSI 引脚。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl9.png" /></div>

- **步骤 1.** 打开 Arduino IDE，导航到 `Sketch > Include Library > Manage Libraries...` 搜索库。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png" /></div>

在 Arduino 库管理器中输入关键字 "Adafruit_GFX" 并安装最新版本。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/board10.png" /></div>

在 Arduino 库管理器中输入关键字 "Adafruit_SSD1306" 并安装最新版本。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl11.png" /></div>

- **步骤 2.** 将代码复制到 Arduino 并点击 **Upload** 按钮上传。

```cpp
#include <SPI.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define SCREEN_WIDTH 128 // OLED 显示屏宽度，单位为像素
#define SCREEN_HEIGHT 64 // OLED 显示屏高度，单位为像素

// 使用软件 SPI 连接 SSD1306 显示屏的声明（默认情况）：
#define OLED_MOSI  MOSI   // 连接 SSD1315 D1
#define OLED_CLK  SCK     // 连接 SSD1315 D0
#define OLED_DC  D4      // 连接 SSD1315 D/C
#define OLED_CS  SS      // 连接 SSD1315 CS
#define OLED_RESET  D5   // 连接 SSD1315 RES
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT,
  OLED_MOSI, OLED_CLK, OLED_DC, OLED_RESET, OLED_CS);

void setup() {
  Serial.begin(9600);
  if(!display.begin(SSD1306_SWITCHCAPVCC)) {
    Serial.println(F("SSD1306 初始化失败"));
    for(;;); // 不继续，进入死循环
  }
}

void loop() {
  display.clearDisplay();
  display.setTextSize(1);             // 正常 1:1 像素比例
  display.setTextColor(SSD1306_WHITE);        // 绘制白色文本
  display.setCursor(0,3);             // 从左上角开始
  display.println(F("Hello"));
  display.setTextSize(2); 
  display.setCursor(0,16);  
  display.println(F("Hello"));
  display.setTextSize(3); 
  display.setCursor(0,38);  
  display.println(F("Hello"));
  display.display();
  delay(2000);
}
```

结果如下所示：

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl12.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl12.png" alt="pir" width={600} height="auto" /></p>

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