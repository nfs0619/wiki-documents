---
title: 开始使用 Seeed Studio XIAO MG24
description: |
image: https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/top.jpg
slug: /cn/xiao_mg24_getting_started
last_update:
  date: 05/15/2025
  author: Jason
keywords:
  - XIAO
  - MG24
sidebar_position: 0
---

# 开始使用 Seeed Studio XIAO MG24(Sense)

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/top.jpg" style={{width:600, height:'auto'}}/></div>
<br />


<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO MG24</th>
			<th>Seeed Studio XIAO MG24 Sense</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop0.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html">
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
</div>

## 简介

**Seeed Studio XIAO MG24** 是一款基于 Silicon Labs MG24 的迷你开发板。XIAO MG24 基于 **ARM Cortex-M33 内核**，**32 位 RISC** 架构，最高时钟速度为 78MHz，支持 DSP 指令和 FPU 浮点运算，具备强大的计算能力，并内置 **AI/ML 硬件加速器 MVP**，能够高效处理 AI/机器学习算法。此外，它具有出色的射频性能，传输**功率高达 +19.5 dBm**，接收灵敏度低至 **-105.4 dBm**。支持多种物联网和无线传输协议，如 **Matter、Thread、Zigbee、Bluetooth LE 5.3、Bluetooth mesh** 等。

### 规格参数

<table align="center">
	<tr>
	    <th>项目</th>
	    <th>Seeed Studio XIAO MG24</th>
        <th>Seeed Studio XIAO MG24 Sense</th>
	</tr>
	<tr>
	    <th>处理器</th>
	    <td align="center" colspan="2">Silicon Labs EFR32MG24 <br></br>ARM Cortex-M33 @ 78MHz </td>
	</tr>
	<tr>
	    <th>无线</th>
	    <td align="center" colspan="2">完整的 2.4GHz Wi-Fi 子系统 <br></br> BLE: Bluetooth 5.3, Bluetooth mesh</td>
	</tr>
    <tr>
	    <th>内置传感器</th>
	    <td align="center"> - </td>
        <td align="center">6 轴 IMU(LSM6DS3TR-C) <br></br>模拟麦克风(MSM381ACT001)</td>
	</tr>
    <tr>
	    <th>内存</th>
	    <td align="center">256kB RAM & 1538KB + 4MB Flash</td>
        <td align="center">256kB RAM & 1538KB + 4MB Flash</td>
	</tr>
    <tr>
	    <th>接口</th>
	    <td>2x UART, 1x IIC, 2x SPI, 18x 模拟, 18x 数字, 全 PWM, 1x 用户 LED, 1x 充电 LED <br></br> 1x 重置按钮</td>
	    <td>2x UART, 1x IIC, 2x SPI, 18x 模拟, 18x 数字, 全 PWM, 1x 用户 LED, 1x 充电 LED <br></br> 1x 重置按钮</td>
	</tr>
    <tr>
	    <th>尺寸</th>
	    <td align="center">21 x 17.8mm</td>
        <td align="center">21 x 17.8mm</td>
	</tr>
    <tr>
	    <th rowspan="2">电源</th>
	    <td colspan="2" align="center">输入电压 (Type-C): 5V@14mA <br></br> 输入电压 (BAT): 3.7V@7mA</td>
	</tr>
    <tr>
	    <td align="center">电池充电电流: <strong>200mA</strong></td>
		<td align="center">电池充电电流: <strong>200mA</strong></td>
	</tr>
    <tr>
        <th>低功耗模式</th>
        <td>正常模式: <strong>3.7V/6.71 mA</strong> <br></br> 睡眠模式: <strong>3.7V/1.91mA</strong> <br></br> 深度睡眠模式: <strong>3.7V/1.95μA</strong></td>
        <td>正常模式: <strong>3.7V/6.71 mA</strong> <br></br> 睡眠模式: <strong>3.7V/1.91mA</strong> <br></br> 深度睡眠模式: <strong>3.7V/1.95μA</strong></td>
    </tr>
    <tr>
        <th>工作温度</th>
        <td colspan="2" align="center">-20°C ~ 70°C</td>
    </tr>
</table>

### 特性

- **强大的 CPU**：ARM Cortex-M33 内核，最高时钟速度 78MHz，支持 DSP 指令和 FPU 浮点运算，32 位 RISC 架构。
- **超低功耗**：RX 电流 4.6mA/TX 电流 5mA (0dBm)，多种低功耗睡眠模式。
- **强大的 AI 能力**：内置 AI/ML 硬件加速器 MVP，能够高效处理 AI/机器学习算法。
- **多样化无线传输**：集成 2.4GHz 多协议无线收发器，支持 Matter、OpenThread、Zigbee、Bluetooth LE 5.3、Bluetooth mesh 等多种物联网协议。
- **更好的射频性能**：出色的射频性能，传输功率高达 +19.5 dBm，接收灵敏度低至 -105.4 dBm (250kbps DSSS)。
- **强大的安全性**：Secure Vault 提供强大的安全功能，包括安全启动、加密、随机数生成、防篡改、安全调试等。
- **超小尺寸**：21 x 17.8mm。
- **丰富的片上资源**：最大 1536KB Flash 和 256KB RAM，存储空间充足。
- **丰富的接口**：集成 12 位 1Msps ADC、温度传感器、模拟比较器、DCDC 等丰富的外设，以及多达 22 个引脚、2 个 USART、2 个低功耗 UART、1 个 IIC 等接口。

## 硬件概览

<table align="center">
	<tr>
	    <th>XIAO MG24 Sense 指示图</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mg24sense_pinlist.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
  	<tr>
	    <th>XIAO MG24 指示图</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mg24_pinlist.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>XIAO MG24/ XIAO MG24(Sense) 引脚列表</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/modifyMG24.png" style={{width:1000, height:'auto'}}/></div></td>
	</tr>
</table>

:::tip
两款开发板的区别在于 MG24 Sense 配备了一个麦克风传感器和一个六轴加速度传感器，而 MG24 没有这些传感器。
:::

- 5V - 这是来自 USB 接口的 5V 输出。您也可以将其用作电压输入，但必须在外部电源和此引脚之间使用某种二极管（肖特基、信号、功率），二极管的正极接电池，负极接 5V 引脚。
- 3V3 - 这是板载稳压器的稳压输出。
- GND - 电源/数据/信号地

## 入门指南

为了让您更快地开始使用 XIAO MG24，请阅读以下硬件和软件准备内容，以准备好 XIAO。

### 出厂程序

我们为每个新的 XIAO MG24 和 XIAO MG24 Sense 预编程了一个简单的出厂程序。

1. **XIAO MG24**

常规版本中预设的出厂程序是闪烁灯。当您为 XIAO 通电时，橙色的用户指示灯将亮起。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/00.gif" style={{width:500, height:'auto'}}/></div>

2. **XIAO MG24 Sense**

常规版本中预设的出厂程序是“您喊得越大声，灯就会越亮”。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/99.gif" style={{width:500, height:'auto'}}/></div>

### 硬件准备

您需要准备以下物品：

- 1 x [Seeed Studio XIAO MG24](https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html)
- 1 x 电脑
- 1 x USB Type-C 数据线

:::tip
有些 USB 数据线只能供电，无法传输数据。如果您没有 USB 数据线，或者不知道您的 USB 数据线是否可以传输数据，可以查看 [Seeed USB Type-C 支持 USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)。
:::

### 软件准备

推荐的 XIAO MG24 编程工具是 Arduino IDE，因此您需要完成 Arduino 的安装作为软件准备的一部分。

:::tip
如果您是第一次使用 Arduino，我们强烈建议您参考 [Arduino 入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 根据您的操作系统下载并安装稳定版本的 Arduino IDE。

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>下载 Arduino IDE</font></span></strong></a>
</div>

<br></br>

- **步骤 2.** 启动 Arduino 应用程序。
- **[步骤 3](#add-board).** 将 XIAO MG24 板载包添加到 Arduino IDE 并点击 `OK`。
- **步骤 4.** 关闭 Arduino IDE 并重新打开。

#### 添加 XIAO MG24 开发板 {#add-board}

按照以下步骤安装 XIAO MG24 开发板：

```
https://siliconlabs.github.io/arduino/package_arduinosilabs_index.json 
```

1. 将上述开发板管理器 URL 添加到 Arduino IDE 的首选项中。

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/13(1).png" style={{width: 'auto', height: 'auto'}}/></div>

2. 下载 XIAO MG24 开发板包。

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/14(1).png" style={{width: 'auto', height: 'auto'}}/></div>

:::tip 
如果输入后找不到，请重新打开 Arduino IDE。
:::

3. 选择 `XIAO_MG24` 变体。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/15.png" style={{width:1000, height:'auto'}}/></div>

现在开始编程吧 ✨。

#### 运行您的第一个 Blink 程序

- **步骤 1.** 启动 Arduino 应用程序。

- **步骤 2.** 导航到 **File > Examples > 01.Basics > Blink**，打开程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/12(1).png" style={{width:1000, height:'auto'}}/></div>

- **步骤 3.** 选择开发板型号为 **XIAO MG24**，并选择正确的端口号以上传程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/16.png" style={{width:1000, height:'auto'}}/></div>

一旦程序成功上传，您将看到以下输出消息，并可以观察到 XIAO MG24 右侧的橙色 LED 灯在闪烁。

<div class="table-center">
	<table align="center">
		<tr>
			<th>MG24 闪烁代码</th>
			<th>LED 闪烁显示</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/7.png" style={{width:700, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/8.gif" style={{width:400, height:'auto'}}/></div></td>
		</tr>
	</table>
</div>

## 电池使用

XIAO MG24 内置了一个电源管理芯片，可以通过电池独立供电，或者通过 XIAO MG24 的 USB 接口为电池充电。

如果您想为 XIAO 连接电池，我们建议您购买符合规格的可充电 3.7V 锂电池。在焊接电池时，请注意区分正负极。电源的负极应靠近 USB 接口的一侧，电源的正极应远离 USB 接口的一侧。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/4444.png" alt="pir" width="800" height="auto"/></div>

:::caution
焊接时请注意不要短路正负极，以免烧毁电池和设备。
:::

**电池使用说明：**

1. 请使用符合规格的合格电池。
2. 使用电池时，XIAO 可以通过数据线连接到您的计算机设备，请放心，XIAO 内置了电路保护芯片，是安全的。
3. 当使用电池供电时，XIAO MG24 不会有任何 LED 灯亮（除非您编写了特定程序），请不要通过 LED 的状态来判断 XIAO MG24 是否工作，请根据您的程序合理判断。
4. 很抱歉，目前我们无法通过软件帮助您检查剩余电池电量（因为没有多余的芯片引脚可用），您需要定期为电池充电或使用万用表检查电池电量。

同时，我们为电池充电设计了一个红色指示灯，通过指示灯显示来告知用户当前电池的充电状态。

1. 当 XIAO MG24 未连接电池时，插入 Type-C 线缆后红灯亮起，并在 30 秒后熄灭。
2. 当电池连接且 Type-C 线缆插入进行充电时，红灯闪烁。
3. 当通过 Type-C 充满电池后，红灯熄灭。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/battery_mg24.jpg" style={{width:600, height:'auto'}}/></div>

## 读取电池电压

**软件代码**
```cpp
/*
  AnalogReadSerial

  读取引脚 0 上的模拟输入，并将结果打印到串行监视器。
  可以使用串行绘图器（工具 > 串行绘图器菜单）查看图形表示。
  将电位器的中心引脚连接到引脚 A0，外侧引脚连接到 +5V 和地。

  此示例代码属于公共领域。

  https://www.arduino.cc/en/Tutorial/BuiltInExamples/AnalogReadSerial
*/

// setup 函数在按下复位时运行一次：
void setup() {
  Serial.begin(115200);
  pinMode(PD3, OUTPUT);
  digitalWrite(PD3, HIGH);
}

void loop() {
  int voltageValue = analogRead(PD4);
  float voltage = voltageValue * (5.0 / 4095.0);
  
  Serial.print("电压: ");
  Serial.print(voltage, 2);
  Serial.println(" V");
  delay(1000);  // 读取之间的延迟以保持稳定
}
```
**显示结果**

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/55.png" alt="pir" width="800" height="auto"/></div>

## 深度睡眠和睡眠示例

#### 示例1：睡眠模式和唤醒

```cpp

/*
   ArduinoLowPower 定时睡眠示例

   此示例展示了 Arduino Low Power 库的基本用法，通过将设备置于睡眠状态一段时间。
   设备将进入睡眠模式 2000 毫秒。在睡眠期间，CPU 停止运行，但 RAM 保留其内容。

   此示例兼容所有 Silicon Labs Arduino 板。

   作者: Tamas Jozsi (Silicon Labs)
 */

#include "ArduinoLowPower.h"

void setup()
{
  Serial.begin(115200);
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  Serial.println("定时唤醒的睡眠模式");
}

void loop()
{
  digitalWrite(LED_BUILTIN, LED_BUILTIN_ACTIVE);
  delay(500);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  delay(500);

  Serial.printf("进入睡眠模式，当前时间: %lu\n", millis());
  LowPower.sleep(2000);
  Serial.printf("唤醒，当前时间: %lu\n", millis());
}
```

#### 示例2：深度睡眠模式和唤醒

```cpp
/*
   ArduinoLowPower 深度睡眠示例，带外部或定时唤醒

   此示例展示了 Arduino Low Power 库的基本用法，通过将设备置于深度睡眠状态。
   设备将保持深度睡眠，直到睡眠计时器到期。
   在深度睡眠期间，除了少量外设（如备份 RAM 和 RTC），整个设备都将断电。
   这意味着 CPU 停止运行，RAM 内容丢失——设备唤醒后将从草稿的开头重新开始。

   此示例兼容所有 Silicon Labs Arduino 板。

   作者: Tamas Jozsi (Silicon Labs)
 */

#include "ArduinoLowPower.h"

void setup()
{
  Serial.begin(115200);
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  Serial.println("定时唤醒的深度睡眠模式");
}

void loop()
{
  digitalWrite(LED_BUILTIN, LED_BUILTIN_ACTIVE);
  delay(500);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  delay(500);

  Serial.printf("进入深度睡眠 10 秒，当前时间: %lu\n", millis());
  LowPower.deepSleep(10000);
}
```

#### 示例3：带闪存的深度睡眠模式和唤醒

:::tip
如果您希望将闪存设置为深度睡眠，需要启用 0xb9 寄存器。
:::

```cpp
/*
   ArduinoLowPower 深度睡眠示例，带外部或定时唤醒

   此示例展示了 Arduino Low Power 库的基本用法，通过将设备置于深度睡眠状态。
   设备将保持深度睡眠，直到睡眠计时器到期。
   在深度睡眠期间，除了少量外设（如备份 RAM 和 RTC），整个设备都将断电。
   这意味着 CPU 停止运行，RAM 内容丢失——设备唤醒后将从草稿的开头重新开始。

   此示例兼容所有 Silicon Labs Arduino 板。

   作者: Tamas Jozsi (Silicon Labs)
 */
#include <Arduino.h>
#include "ArduinoLowPower.h"

#define CS_PIN PA6
#define CLK_PIN PA3
#define MOSI_PIN PA5
#define MISO_PIN PA4

#define READ_DATA 0x03
#define WRITE_ENABLE 0x06
#define PAGE_PROGRAM 0x02
#define SECTOR_ERASE 0x20

void sendSPI(byte data) {
  for (int i = 0; i < 8; i++) {
    digitalWrite(MOSI_PIN, data & 0x80);
    data <<= 1;
    digitalWrite(CLK_PIN, HIGH);
    delayMicroseconds(1);
    digitalWrite(CLK_PIN, LOW);
    delayMicroseconds(1);
  }
}

void writeEnable() {
  digitalWrite(CS_PIN, LOW);
  sendSPI(WRITE_ENABLE);
  digitalWrite(CS_PIN, HIGH);
}

void setup()
{
  //Serial.begin(115200);
  pinMode(PA7, OUTPUT);
  digitalWrite(PA7, LOW);

  pinMode(CS_PIN, OUTPUT);
  pinMode(CLK_PIN, OUTPUT);
  pinMode(MOSI_PIN, OUTPUT);
  pinMode(MISO_PIN, INPUT);


  //SW
  pinMode(PD3, OUTPUT);
  pinMode(PB5, OUTPUT);
  pinMode(PB1, OUTPUT);
  pinMode(PB0, OUTPUT);
  pinMode(PA6, OUTPUT);
  digitalWrite(PD3, LOW); //VBAT
  digitalWrite(PB5, LOW); //RF_SW
  digitalWrite(PB1, LOW); //IMU
  digitalWrite(PB0, LOW); //MIC
  digitalWrite(PA6, HIGH);  //FLASH

  //Serial.println("定时唤醒的深度睡眠模式");
  writeEnable();
  digitalWrite(CS_PIN, LOW);
  sendSPI(0xB9);
  digitalWrite(CS_PIN, HIGH);
}

void loop()
{
  delay(12000);  
  digitalWrite(PA7, HIGH);
  delay(500);

  //Serial.printf("进入深度睡眠 10 分钟，当前时间: %lu\n", millis());
  LowPower.deepSleep(600000);
}

```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/100.png" style={{width:1000, height:'auto'}}/></div>

### 防止 XIAO MG24 在深度睡眠期间变砖

**XIAO MG24** 是来自 Seeed Studio 的一款强大的微控制器板，但用户报告在进入深度睡眠模式后设备可能变得无响应（“变砖”）。本教程解释了问题的原因，提供了详细的恢复方法，并提出了防止 XIAO MG24 变砖的措施。

XIAO MG24 进入 **深度睡眠模式** (EM4) 以节省电能，但在某些情况下，它可能无法正常唤醒，从而阻止新草图的上传。与其他 XIAO 开发板不同，MG24 没有专用的 **BOOT 按钮**或进入引导模式的文档化方法，这使得恢复变得具有挑战性。

#### 预防措施

为了避免在使用深度睡眠模式时使您的 XIAO MG24 变砖，请遵循以下步骤：

1. 使用逃生引脚 (PC0)

XIAO MG24 内置了一个 **逃生机制** 来防止变砖。如果在复位期间将 **PC0** 拉低 (**LOW**)，设备将进入一个无限循环，从而允许您上传新的草图。  
- 在复位设备之前，将 **PC0** 连接到 **GND**。  
- 复位后，在设备处于循环状态时上传您的草图。

2. 修改您的草图  
在您的草图中添加以下代码，以检测用户开关的状态。如果按下开关，设备将进入无限循环，从而允许您在循环期间上传新草图：

```cpp
#define USER_SW  PC3   // 用户开关的示例引脚

void setup() {
  // 其他设置代码...

  pinMode(USER_SW, INPUT_PULLUP);
  if (digitalRead(USER_SW) == LOW) {
    Serial.println("启用上传新草图");
    while (true) {
      digitalWrite(LED_BUILTIN, LOW);
      delay(50);
      digitalWrite(LED_BUILTIN, HIGH);
      delay(50);
    }
  }
}
```

3. 避免不必要的 Flash 睡眠

确保您的草图不会将闪存置于睡眠模式（`深度掉电`），除非绝对必要。这可以防止上传新草图时出现问题。

#### 致谢
特别感谢 **Seeed Studio 社区**对解决此问题的宝贵贡献。本教程中讨论的恢复方法和预防措施是基于社区成员如 **[msfujino](https://forum.seeedstudio.com/u/msfujino)** 和 **[PJ_Glasso](https://forum.seeedstudio.com/u/PJ_Glasso)** 的见解开发的。

有关更多详细信息和讨论，请访问原始论坛帖子：  
[DeepSleep bricks XIAO_MG24 - Seeed Studio Forum](https://forum.seeedstudio.com/t/deepsleep-bricks-xiao-mg24/284889)

## 解砖方法

XIAO MG24 是目前唯一配备串口芯片的 XIAO 型号。与其他 XIAO 型号不同，它没有 BOOT 按钮或 BOOT 恢复方法。这种设计上的疏忽可能会导致设备进入睡眠模式或遇到软件异常时无法通过串口上传程序。为了解决这个问题，我们提供了一种唤醒串口并恢复功能的方法。

### Windows 解决方案

1. **下载并解压文件包**  
   - 下载提供的 ZIP 文件。
<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO_MG24/xiao_mg24_flash_erase_windows.zip">
            <strong><span><font color={'FFFFFF'} size={"4"}> 下载 ZIP 🖱️</font></span></strong>
    </a>
</div><br />
   - 将内容解压到您的计算机文件夹中。

2. **连接 XIAO MG24**  
   - 使用 USB 数据线将无法响应的 XIAO MG24 连接到您的计算机。

3. **运行脚本**  
   - 打开解压后的文件夹，找到脚本 `flash_erase.bat`。  
   - 双击脚本以运行它。  
   - 脚本将擦除闪存并重置设备。

4. **验证恢复**  
   - 脚本完成后，XIAO MG24 应该已恢复并可以正常使用。

### macOS 解决方案

1. **下载并解压文件包**  
   - 下载提供的 ZIP 文件（链接将在此处添加）。
<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO_MG24/xiao_mg24_flash_erase_macos.zip">
            <strong><span><font color={'FFFFFF'} size={"4"}> 下载 ZIP 🖱️</font></span></strong>
    </a>
</div><br />
   - 将内容解压到您的计算机文件夹中。

2. **连接 XIAO MG24**  
   - 使用 USB 数据线将无法响应的 XIAO MG24 连接到您的计算机。

3. **允许终端访问**  
   - 打开 **系统偏好设置** > **安全与隐私** > **隐私**。  
   - 在 **辅助功能** 下，确保 **终端** 被允许控制您的计算机。  
   - 如果终端未列出，请点击 **+** 按钮手动添加。

4. **运行脚本**  
   - 打开 **终端**。  
   - 使用 `cd` 命令导航到解压后的文件夹。例如：  
     ```bash
     cd /path/to/extracted/folder
     ```  
   - 使用以下命令运行脚本 `xiao_mg24_erase.sh`：  
     ```bash
     ./xiao_mg24_erase.sh
     ```  
   - 脚本将使用 OpenOCD 擦除闪存并重置设备。

5. **验证恢复**  
   - 脚本完成后，XIAO MG24 应该已恢复并可以正常使用。

:::note
- 如果 macOS 无法识别 OpenOCD，请确保已安装 OpenOCD 并在脚本中使用正确的路径。  
- 提供的脚本专为 XIAO MG24 设计，不应与其他 XIAO 型号一起使用。  
:::

## 资源

### 针对 Seeed Studio XIAO MG24 Sense

- 📄 **[PDF]** [Seeed Studio XIAO MG24 Sense 数据手册](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mg24-group-datasheet.PDF)
- 📄 **[PDF]** [Seeed Studio XIAO MG24 Sense 原理图](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/XIAO_MGM240S_KICAD_Prj.pdf)
- 📄 **[PDF]** [Seeed Studio XIAO MG24 Sense 无线 SoC](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/efr32xg24_rm.pdf)
- 🔗 **[Kicad]** [Seeed Studio XIAO MG24 Sense 封装库](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)
- 📄 **[ZIP]** [Seeed Studio XIAO MG24 Sense PCB&原理图](https://files.seeedstudio.com/wiki/XIAO_MG24/XIAO_MG24_Sense_v1.0_SCH&PCB.zip)

### 针对 Seeed Studio XIAO MG24

- 📄 **[PDF]** [Seeed Studio XIAO MG24 数据手册](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mg24-group-datasheet.PDF)
- 📄 **[PDF]** [Seeed Studio XIAO MG24 原理图](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/XIAO_MGM240S_KICAD_Prj.pdf)
- 📄 **[PDF]** [Seeed Studio XIAO MG24 无线 SoC](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/efr32xg24_rm.pdf)
- 🔗 **[Kicad]** [Seeed Studio XIAO MG24 封装库](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)
- 📄 **[ZIP]** [Seeed Studio XIAO MG24 PCB&原理图](https://files.seeedstudio.com/wiki/XIAO_MG24/XIAO_MG24_v1.0_SCH&PCB.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时能够获得顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>