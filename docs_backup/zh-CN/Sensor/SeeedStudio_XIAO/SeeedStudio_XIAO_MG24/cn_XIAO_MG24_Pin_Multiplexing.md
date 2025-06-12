---
title: 使用 Seeed Studio XIAO MG24 进行引脚复用
description: 使用 Seeed Studio XIAO MG24(Sense) 进行引脚复用。
image: https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/2.webp
slug: /cn/xiao_mg24_pin_multiplexing
last_update:
  date: 05/15/2025
  author: Jason
keywords:
  - XIAO
  - MG24
sidebar_position: 1
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/top.png" style={{width:700, height:'auto'}}/></div>

***XIAO MG24*** 提供多达 ***22 个常规引脚***、***18 个模拟引脚***、***18 个数字引脚***、***2 个 SPI***、***2 个 UART***、***2 个 I2C***，并支持 ***所有 PWM***。它为我们提供了丰富的引脚资源。在本教程中，我将教您如何驱动这些引脚，从而有效地利用它们 😀！

## 数字引脚

### 硬件准备

<table align="center">
  <tr>
      <th>Seeed Studio XIAO MG24 Sense</th>
        <th>Seeed Studio XIAO 扩展底板（带 Grove OLED）</th>
        <th>Grove - 继电器</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg" style={{width:600, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Relay.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

请将 XIAO MG24(Sense) 安装到扩展板上，并通过 Grove 电缆将继电器连接到扩展板的 **A0/D0** 接口。最后，通过 USB-C 电缆将 XIAO 连接到计算机。

### 软件实现

在此示例中，我们将实现通过连接到 XIAO 扩展板的按钮来控制继电器的开/关状态。当按下按钮时，继电器打开；当松开按钮时，继电器关闭。

```c
const int buttonPin = D1;     // 按钮引脚编号
int buttonState = 0;          // 用于读取按钮状态的变量
const int relayPin = D0;

void setup() {
  // 将继电器引脚初始化为输出模式：
  pinMode(relayPin, OUTPUT);
  // 将按钮引脚初始化为输入模式：
  pinMode(buttonPin, INPUT_PULLUP);
}

void loop() {
  // 读取按钮的状态值：
  buttonState = digitalRead(buttonPin);

  // 检查按钮是否被按下。如果按下，buttonState 为 HIGH：
  if (buttonState == HIGH) {
    // 打开继电器：
    digitalWrite(relayPin, HIGH);
  } else {
    // 关闭继电器：
    digitalWrite(relayPin, LOW);
  }
}
```

### 结果图

如果一切顺利，上传程序后，您应该会看到如下效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/2.gif" style={{width:500, height:'auto'}}/></div>

## 数字引脚作为 PWM

XIAO MG24(Sense) 的所有 GPIO 引脚均支持 PWM 输出。因此，您可以使用任意引脚输出 PWM 来调节灯光亮度、控制舵机等功能。

### 硬件准备

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO MG24 Sense</th>
        <th>Seeed Studio XIAO 扩展底板（带 Grove OLED）</th>
        <th>Grove - 可变色 LED</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/10.jpg" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-V1-1.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

:::tip
请将 XIAO MG24(Sense) 安装到扩展板上，然后通过 Grove 电缆将可变色 LED 连接到扩展板的 A0/D0 接口。最后，通过 USB-C 电缆将 XIAO 连接到您的计算机。
:::

### 软件实现

在这个示例中，我们将演示如何使用 PWM 输出来控制灯光的亮度。

```cpp
int LED_pin = D0;    // LED连接到数字引脚10

void setup() {
  // 将LED引脚声明为输出
  pinMode(LED_pin, OUTPUT);
}

void loop() {
  // 从最小值到最大值以5点的增量渐亮：
  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 3) {
    // 设置值（范围从0到255）：
    analogWrite(LED_pin, fadeValue);
    // 等待30毫秒以观察渐变效果
    delay(30);
  }

  // 从最大值到最小值以5点的增量渐暗：
  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 3) {
    // 设置值（范围从0到255）：
    analogWrite(LED_pin, fadeValue);
    // 等待30毫秒以观察渐变效果
    delay(30);
  }
}
```

### 结果图

如果程序运行成功，您将看到以下运行效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/5.gif" style={{width:500, height:'auto'}}/></div>

## 模拟信号

XIAO MG24(Sense)开发板具有12位ADC，用于高分辨率读取模拟传感器值，这可以帮助我们读取更准确的值。

接下来，我们将选择两个传感器来反映ADC的特性。

### 硬件准备

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO MG24 Sense</th>
        <th>Grove-可变颜色LED</th>
	    <th>Grove-旋转角度传感器</th>
	    <th>Seeed Studio Grove Base for XIAO </th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/10.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/rotary.png" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-V1-1.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

### 软件实现

<Tabs>
  <TabItem value="Without DMA" label="analogRead 无DMA" default>

```cpp
const int analogInPin = D1;  // 模拟输入引脚，连接到电位器
const int analogOutPin = 9;  // 模拟输出引脚，连接到LED

int sensorValue = 0;  // 从电位器读取的值
int outputValue = 0;  // 输出到PWM（模拟输出）的值

void setup() {
  Serial.begin(115200);
}

void loop() {
  sensorValue = analogRead(analogInPin);
  outputValue = map(sensorValue, 0, 4095, 0, 255);
  analogWrite(analogOutPin, outputValue);

  Serial.print("传感器值 = ");
  Serial.print(sensorValue);
  Serial.print("\t 输出值 = ");
  Serial.println(outputValue);
  delay(100);
}
```

  </TabItem>
  <TabItem value="With DMA" label="analogRead 使用DMA">

```cpp
#define ANALOG_VALUE_MIN 0     // 定义模拟值的最小值
#define ANALOG_VALUE_MAX 4095  // 定义12位ADC的最大模拟值
#define NUM_SAMPLES 128        // 定义每次采集的样本数量

const int analogInPin = D1;            // 模拟输入引脚，连接到电位器
const int analogOutPin = LED_BUILTIN;  // 模拟输出引脚，连接到LED

// 用于存储样本的缓冲区
uint32_t analog_buffer[NUM_SAMPLES];        // 全局缓冲区，用于存储采样值
uint32_t analog_buffer_local[NUM_SAMPLES];  // 局部缓冲区，用于存储采样值以进行计算

volatile bool data_ready_flag = false;  // 数据就绪标志，指示新样本数据可用

void analog_samples_ready_cb();                         // 样本准备好时调用的回调函数
void calculate_and_display_analog_level();              // 计算并显示模拟电平的函数
float getAverage(uint32_t *buffer, uint32_t buf_size);  // 计算给定缓冲区平均值的函数

void setup() {
  Serial.begin(115200);
  pinMode(analogOutPin, OUTPUT);

  // 开始DMA采样，将样本存储在analog_buffer中，完成后调用回调函数
  analogReadDMA(analogInPin, analog_buffer, NUM_SAMPLES, analog_samples_ready_cb);
  Serial.println("开始采样...");
}

void loop() {
  // 如果数据就绪，则处理数据
  if (data_ready_flag) {
    data_ready_flag = false;
    calculate_and_display_analog_level();
  }
}

void analog_samples_ready_cb() {
  // 将数据复制到局部缓冲区以防止被覆盖
  memcpy(analog_buffer_local, analog_buffer, NUM_SAMPLES * sizeof(uint32_t));
  data_ready_flag = true;
}

void calculate_and_display_analog_level() {
  // 滚动平均值，用于平滑模拟电平
  static uint32_t rolling_average = 0u;

  // 停止采样以防止覆盖当前数据
  ADC.scan_stop();

  // 获取采样值的平均值
  uint32_t analog_level = (uint32_t)getAverage(analog_buffer_local, NUM_SAMPLES);
  // 调整模拟电平
  analog_level = constrain(analog_level, ANALOG_VALUE_MIN, ANALOG_VALUE_MAX);
  // 计算滚动平均值
  rolling_average = (analog_level + rolling_average) / 2;

  // 将当前平均电平映射到亮度
  int brightness = map(rolling_average, ANALOG_VALUE_MIN, ANALOG_VALUE_MAX, 0, 255);
  if (LED_BUILTIN_ACTIVE == LOW) {
    analogWrite(analogOutPin, 255 - brightness);
  } else {
    analogWrite(analogOutPin, brightness);
  }
  // 打印平均模拟电平和亮度输出
  Serial.print("传感器值 = ");
  Serial.print(rolling_average);
  Serial.print("\t 输出值 = ");
  Serial.println(brightness);

  // 重新开始采样
  analogReadDMA(analogInPin, analog_buffer, NUM_SAMPLES, analog_samples_ready_cb);
}

// 获取提供样本的平均值
float getAverage(uint32_t *buffer, uint32_t buf_size) {
  if (!buffer) {
    return 0.0f;
  }

  float sum = 0.0f;
  for (uint32_t i = 0u; i < buf_size; i++) {
    sum += buffer[i];
  }
  return sum / buf_size;
}
```

</TabItem>
</Tabs>

:::提示
需要注意的是，如果您想使用 DMA 读取模拟信号，您的库版本需要高于 2.2.0。目前，新版本尚未获得批准，您需要手动安装。
:::

### 结果图
如果一切顺利，在上传程序后，您应该会看到以下效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/4.gif" style={{width:500, height:'auto'}}/></div>

## UART

在使用 Arduino IDE 时，串行通信是许多项目的重要组成部分。要在 Arduino IDE 中使用串行通信，您需要首先打开串行监视器窗口。这可以通过点击工具栏中的 **Serial Monitor** 图标或按下 **Ctrl+Shift+M** 快捷键来完成。

### 常规串行通信使用

一些常用的串行函数包括：

- `Serial.begin()` -- 用于以指定的波特率初始化通信；
- `Serial.print()` -- 以可读格式将数据发送到串行端口；
- `Serial.write()` -- 将二进制数据发送到串行端口；
- `Serial.available()` -- 检查是否有数据可从串行端口读取；
- `Serial.read()` -- 从串行端口读取一个字节的数据；
- `Serial.flush()` -- 等待传输完成所有的输出串行数据。

通过使用这些串行函数，您可以在 Arduino 板和计算机之间发送和接收数据，从而为创建交互式项目打开了许多可能性。

以下是一个示例程序：

```c
void setup() {
  // 以 9600 比特每秒初始化串行通信：
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
  
  // 在重复循环之前等待一秒
  delay(1000);
}
```

### 使用 Serial1

根据上述 XIAO MG24(Sense) 引脚图的具体参数，我们可以看到有 TX 引脚和 RX 引脚。这与串行通信不同，但使用方法非常相似，只需添加一些参数即可。因此，接下来我们将使用芯片引出的引脚进行串行通信。

```c
#define BAUD 115200

void setup() {
    Serial1.begin(BAUD);
}
 
void loop() {
  if(Serial1.available() > 0)
  {
    char incominByte = Serial1.read();
    Serial1.print("我收到：");
    Serial1.println(incominByte);
  }
  delay(1000);
}
```

## I2C

XIAO MG24(Sense) 具有一个 I2C 接口，可用于许多传感器的数据传输和解析，以及一些 OLED 屏幕的使用。

### 硬件准备

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO MG24 Sense</th>
        <th>Seeed Studio XIAO 扩展底板带 Grove OLED</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:400, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

XIAO 扩展板上的 OLED 显示屏使用 I2C 协议，并通过板上的 I2C 电路连接到 XIAO 的 I2C 接口。因此，我们可以直接将 XIAO 插入扩展板并对其编程以在屏幕上显示内容。

### 软件实现

此示例介绍如何使用 Seeed Studio 扩展底板上的 OLED 显示屏为 XIAO MG24(Sense)。

***步骤 1. 将 Seeed Studio XIAO MG24(Sense) 安装到扩展板上，然后连接 Type-C 数据线。***

***步骤 2. 安装 u8g2 库。***

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

***步骤 3. 将代码复制到 Arduino IDE 中并上传。***
- 下载以下 zip 文件

📄 **[ZIP]** [smiley_face Header](https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/smiley_face.zip)

- 创建一个名为 "smiley_face.h" 的头文件，并将下载的 zip 文件内容复制到您创建的头文件中。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/8.png" style={{width:800, height:'auto'}}/></div>

```c
#include <Arduino.h>
#include <U8g2lib.h>
#include <Wire.h>
#include "smiley_face.h" 

U8G2_SSD1306_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);

int xx = 20; 
int yy = 10; 

void setup() {
    u8g2.begin();
}

void loop() {
    smeil_display();
    delay(500); 
}

void smeil_display() {
    const unsigned char* smileImages[] = {
        semil1, semil2, semil3, semil4, semil5,
        semil6, semil7, semil8, semil9, semil10,
        semil11, semil12, semil13, semil14, semil15,
        semil16, semil17, semil18, semil19, semil20,
        semil21, semil22, semil23, semil24, semil25,
        semil26, semil27
    };

    int delays[] = {
        40, 50, 40, 40, 40,
        40, 40, 50, 40, 40,
        40, 40, 40, 50, 40,
        40, 50, 40, 40, 50,
        40, 50, 40, 40, 50,
        50, 50, 40, 50
    };

    for (int i = 0; i < sizeof(smileImages) / sizeof(smileImages[0]); i++) {
        u8g2.firstPage();
        do {
            u8g2.drawXBMP(xx, yy, 48, 48, smileImages[i]); 
        } while (u8g2.nextPage());
        delay(delays[i]); 
    }
}
```

### 结果图形

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/7.gif" style={{width:500, height:'auto'}}/></div>

## SPI

XIAO MG24(Sense) 芯片集成了多个外设，包括一个 SPI 接口，可用于连接外部 SPI 设备，例如闪存、显示屏、传感器等。

### Arduino 库概述

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO_ST7789V2_LCD_Display/tree/main">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

基于 **Waveshare** 提供的 Arduino 示例程序，我们编写了适用于整个 XIAO 系列的 Arduino 库，您可以通过以下按钮直接访问该库的 Github 页面。

### 硬件准备

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO MG24 Sense</th>
			<th>1.69 英寸 LCD SPI 显示屏</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:300, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/6.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

### 引脚连接

在准备好上述硬件后，使用跳线将 XIAO 的 SPI 接口与 OLED 连接。请参考以下连接示意图。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/3.png" style={{width:700, height:'auto'}}/></div>

### 安装

下载 ZIP 库文件后，打开 Arduino IDE，点击 **Sketch > Include Library > Add .ZIP Library**。选择刚刚下载的 ZIP 文件，如果库安装正确，您会在通知窗口中看到 **Library added to your libraries**，这表示库已成功安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

### 软件实现

在正确下载并安装库后，您可以在示例文件夹中找到两个示例程序，分别是 **helloworld.ino** 和 **bgcolor.ino**。bgcolor.ino 是一个显示背景颜色的示例，我们默认设置为红色。而 helloworld.ino 是一个显示公司 logo 动画的示例，该示例包含 bgcolor 示例中的效果。

```cpp
#include <st7789v2.h>
#include "SPI.h"
#include "seeed.h"

st7789v2 Display;

void setup() {
  // 在这里放置初始化代码，仅运行一次：
  Display.SetRotate(270);
  Display.Init();
  Display.SetBacklight(100);
  Display.Clear(WHITE);
}

void loop() {
  // 在这里放置主代码，循环运行：
  // Display.SetPixel(100, 100, RED);
  // Display.DrawPoint(50, 50, YELLOW, DOT_PIXEL_8X8, DOT_FILL_AROUND);

  Display.DrawImage(gImage_seeed, 20, 90, 240, 47);

  Display.DrawLine(15, 65, 65, 65, MAGENTA, DOT_PIXEL_2X2, LINE_STYLE_SOLID);
  Display.DrawLine(15, 70, 80, 70, MAGENTA, DOT_PIXEL_2X2, LINE_STYLE_SOLID);
  
  Display.DrawRectangle(15, 80, 265, 150, GRAY, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  
  Display.DrawCircle(10, 10, 25, BLUE, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 10, 20, BLACK, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 10, 15, RED, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 10, 10, GREEN, DOT_PIXEL_2X2, DRAW_FILL_FULL);

  Display.DrawCircle(270, 10, 25, BLUE, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 10, 20, BLACK, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 10, 15, RED, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 10, 10, GREEN, DOT_PIXEL_2X2, DRAW_FILL_FULL);

  Display.DrawCircle(10, 230, 25, BLUE, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 230, 20, BLACK, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 230, 15, RED, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 230, 10, GREEN, DOT_PIXEL_2X2, DRAW_FILL_FULL);

  Display.DrawCircle(270, 230, 25, BLUE, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 230, 20, BLACK, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 230, 15, RED, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 230, 10, GREEN, DOT_PIXEL_2X2, DRAW_FILL_FULL);

  Display.DrawLine(200, 160, 265, 160, GRAYBLUE, DOT_PIXEL_2X2, LINE_STYLE_SOLID);
  Display.DrawLine(215, 165, 265, 165, GRAYBLUE, DOT_PIXEL_2X2, LINE_STYLE_SOLID);
  
  Display.DrawString_EN(20, 180, "By: Jason", &Font20, WHITE, BLACK);
  // Display.DrawNum(100, 220, 123456, &Font24, RED, BRED);
  Display.DrawFloatNum(100, 210, 1.00, 2, &Font16, WHITE, BLACK);
}
```

您会发现 Seeed Studio 的标志动态显示在屏幕上。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/1.gif"style={{width:500, height:'auto'}}/></div>

## 完成
您已经学习了 XIAO MG24 (Sense) 引脚的基本功能。现在，让我们进一步探索内置传感器。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/6.png" style={{width:1000, height:'auto'}}/></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>