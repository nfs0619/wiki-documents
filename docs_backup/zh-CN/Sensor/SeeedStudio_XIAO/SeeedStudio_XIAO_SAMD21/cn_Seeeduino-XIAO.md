---
description: Seeed Studio XIAO SAMD21 入门指南
title: Seeed Studio XIAO SAMD21 入门指南
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino-XIAO
last_update:
  date: 05/15/2025
  author: shuxu hu
---

# Seeed Studio XIAO SAMD21 入门指南

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" alt="pir" width={600} height="auto" /></p>

Seeed Studio XIAO SAMD21（曾用名 Seeeduino XIAO）是 [Seeed Studio XIAO 系列的首款产品，这是一系列兼容 Arduino 的强大拇指大小开发板](https://www.seeedstudio.com/xiao-series-page)。它搭载了功能强大的 ATSAMD21G18A-MU，这是一款低功耗微控制器。另一方面，这块小板在处理性能方面表现良好，同时功耗较低。它设计为微型尺寸，可用于可穿戴设备和小型项目。

Seeed Studio XIAO SAMD21 具有 14 个引脚，可用于 11 个数字接口、11 个模拟接口、10 个 PWM 接口（d1-d10）、1 个 DAC 输出引脚 D0、1 个 SWD 焊盘接口、1 个 I2C 接口、1 个 SPI 接口、1 个 UART 接口、串行通信指示灯（T/R）、通过引脚复用的闪烁灯（L）。LED 的颜色（电源、L、RX、TX）分别为绿色、黄色、蓝色和蓝色。此外，Seeed Studio XIAO SAMD21 具有 Type-C 接口，可供电和下载代码。板上有两个复位按钮，可以短接它们来复位板子。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## **文档**

关于 **Seeed Studio XIAO SAMD21** 的使用有两份文档，分别侧重于不同领域，请参考下表：

|[**Seeed 官方文档**](https://wiki.seeedstudio.com/Seeeduino-XIAO/)|[**Nanase 文档**](https://wiki.seeedstudio.com/Seeeduino-XIAO-by-Nanase/)|
|---|---|
|引脚图|接口|
|Seeed Studio XIAO SAMD21 入门指南|Seeed Studio XIAO SAMD21 与 MicroSD 卡（SPI）|
|Seeed Studio XIAO SAMD21 GPIO 使用|Seeed Studio XIAO SAMD21 与 GPS（UART）|
|Seeed Studio XIAO SAMD21 资源|单周期 IOBUS|

### **Seeed Studio XIAO SAMD21 上的 CircuitPython**

- 开始使用 [**Seeed Studio XIAO SAMD21 上的 CircuitPython**](http://wiki.seeedstudio.com/Seeeduino-XIAO-CircuitPython)。

## **特点**

- 强大的 CPU：ARM® Cortex®-M0+ 32 位 48MHz 微控制器（SAMD21G18），具有 256KB Flash 和 32KB SRAM。
- 灵活的兼容性：兼容 Arduino IDE。
- 简单的项目操作：适合面包板使用。
- 小巧尺寸：拇指大小（21x17.8mm），适用于可穿戴设备和小型项目。
- 多种开发接口：11 个数字/模拟引脚、10 个 PWM 引脚、1 个 DAC 输出、1 个 SWD 焊盘接口、1 个 I2C 接口、1 个 UART 接口、1 个 SPI 接口。

## **规格**

|项目|参数|
|---|---|
|CPU|ARM Cortex-M0+ CPU（SAMD21G18），最高运行频率 48MHz|
|Flash 内存|256KB|
|SRAM|32KB|
|数字 I/O 引脚|11|
|模拟 I/O 引脚|11|
|I2C 接口|1|
|SPI 接口|1|
|QTouch|7 (A0,A1,A6,A7,A8,A9,A10)|
|UART 接口|1|
|供电和下载接口|Type-C|
|电源|3.3V/5V DC|
|尺寸|21×17.8×3.5mm|

## **硬件概览**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout-1.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https:///files.seeedstudio.com/wiki/Seeeduino-XIAO/img/new1.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino%20XIAO%20pinout%202.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/regulator_to_3.3v.png" alt="pir" width={600} height="auto" /></p>

:::caution
关于通用 I/O 引脚：
MCU 的工作电压为 3.3V。如果连接到通用 I/O 引脚的电压输入高于 3.3V，可能会导致芯片损坏。

关于电源引脚：
内置的 DC-DC 转换电路能够将 5V 电压转换为 3.3V，因此可以通过 VIN-PIN 和 5V-PIN 使用 5V 电源为设备供电。

XIAO SAMD21 当前仅支持电池供电，**当连接电池时不能同时连接 Type-C 接口**，因为这可能存在安全风险。

请注意使用，不要抬起屏蔽盖。
:::   

### **进入 Bootloader 模式**

有时在用户编程过程中失败时，Seeed Studio XIAO SAMD21 的端口可能会消失。我们可以通过以下操作解决此问题：

- 将 Seeed Studio XIAO SAMD21 连接到您的电脑。
- 使用镊子或短线两次短接图中的 RST 引脚。
- 橙色 LED 灯闪烁并点亮。

此时，芯片进入 Bootloader 模式，烧录端口再次出现。因为 SAMD21 芯片有两个分区，一个是 Bootloader，另一个是用户程序。产品出厂时会在系统内存中烧录 Bootloader 代码。我们可以通过执行上述步骤切换模式。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" alt="pir" width={600} height="auto" /></p>

### **复位**

如果您想复位 Seeed Studio XIAO SAMD21，请执行以下步骤：

- 将 Seeed Studio XIAO SAMD21 连接到您的电脑。
- 使用镊子或短线 **仅短接一次** RST 引脚。
- 橙色 LED 灯闪烁并点亮。

请注意：内置 LED 的行为与 Arduino 上的 LED 相反。在 Seeed Studio XIAO SAMD21 上，引脚必须拉低，而在其他微控制器上则必须拉高。

### **中断**

Seeed Studio XIAO SAMD21 上的所有引脚都支持中断，但有两个引脚不能同时使用：5 引脚和 7 引脚。有关中断的更多详细信息，请查看 [这里](https://github.com/Seeed-Studio/ArduinoCore-samd/blob/master/variants/XIAO_m0/variant.cpp)。

### **引脚复用**

我们不需要自己配置引脚，在使用引脚后，可以直接调用一个函数。

#### **数字输入和输出**

- 使用引脚 6 作为数字引脚：

```c
const int buttonPin = 6;     // 按钮引脚的编号
const int ledPin =  13;      // LED 引脚的编号

int buttonState = 0;         // 用于读取按钮状态的变量

void setup() {
  // 将 LED 引脚初始化为输出模式：
  pinMode(ledPin, OUTPUT);
  // 将按钮引脚初始化为输入模式：
  pinMode(buttonPin, INPUT);
}

void loop() {
  // 读取按钮的状态值：
  buttonState = digitalRead(buttonPin);

  // 检查按钮是否被按下。如果按下，buttonState 为 HIGH：
  if (buttonState == HIGH) {
    // 打开 LED：
    digitalWrite(ledPin, HIGH);
  } else {
    // 关闭 LED：
    digitalWrite(ledPin, LOW);
  }
}
```

#### **模拟读取**

- 使用引脚 6 作为模拟引脚：

```c
void setup() {
  // 将 ledPin 声明为输出模式：
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // 从传感器读取值：
  sensorValue = analogRead(sensorPin);
  // 打开 ledPin：
  digitalWrite(ledPin, HIGH);
  // 程序暂停 <sensorValue> 毫秒：
  delay(sensorValue);
  // 关闭 ledPin：
  digitalWrite(ledPin, LOW);
  // 程序暂停 <sensorValue> 毫秒：
  delay(sensorValue);
}
```

#### **串口通信**

- 使用引脚 6 作为 UART 的 TX 引脚（UART 的 RX 引脚为引脚 7）：

```c
void setup() {
    Serial1.begin(115200);
    while (!Serial);
}

void loop() {
    Serial1.println("你好，世界");
    delay(1000);
}
```

#### **I2C**

- 使用引脚 5 作为 IIC 的 SCL 引脚（IIC 的 SDA 引脚为引脚 4）：

```c
// Wire 主机写入示例
// 作者：Nicholas Zambetti <http://www.zambetti.com>

// 演示如何使用 Wire 库
// 向 I2C/TWI 从设备写入数据
// 请参考 "Wire 从机接收" 示例以配合使用

// 创建于 2006 年 3 月 29 日

// 此示例代码属于公共领域。

#include <Wire.h>

void setup()
{
  Wire.begin(); // 加入 I2C 总线（主机地址可选）
}

byte x = 0;

void loop()
{
  Wire.beginTransmission(4); // 传输到设备 #4
  Wire.write("x 是 ");        // 发送五个字节
  Wire.write(x);              // 发送一个字节  
  Wire.endTransmission();    // 停止传输
  x++;
  delay(500);
}
```

#### **SPI**

- 使用引脚 8 作为 SPI 的 SCK 引脚（SPI 的 MISO 引脚为引脚 9，MOSI 引脚为引脚 10）：

```c
#include <SPI.h>
const int CS = 7;
void setup (void) {
   digitalWrite(CS, HIGH); // 禁用从设备选择
   SPI.begin ();
   SPI.setClockDivider(SPI_CLOCK_DIV8); // 将时钟分频为 8
}

void loop (void) {
   char c;
   digitalWrite(CS, LOW); // 启用从设备选择
   // 发送测试字符串
   for (const char * p = "你好，世界！\r" ; c = *p; p++) {
      SPI.transfer (c);
   }
   digitalWrite(CS, HIGH); // 禁用从设备选择
   delay(2000);
}
```

#### **QTouch**

关于如何使用 QTouch，我们提供了一个示例项目：[如何在 Seeed Studio XIAO SAMD21 上实现水果钢琴的 Q-Touch 功能](https://www.seeedstudio.com/blog/2020/07/20/how-to-make-a-fruit-piano-on-seeeduino-xiaos-q-touch-function-m/)。

#### **模拟输入和输出**

虽然它仍然具有基于 PWM 的“模拟输出”，但 SAMD21 还具有真正的模拟输出形式，即数字-模拟转换器（DAC）。该模块可以产生 0 到 3.3V 之间的模拟电压。它可以用于生成更自然的音频，或者作为一种“数字电位器”来控制模拟设备。

DAC 仅在 Arduino 引脚 A0 上可用，并通过 （analogWrite(A0, `<value>`） 控制。DAC 可以设置为 10 位分辨率（请确保在设置中调用 [**analogWriteResolution(10)**](https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogwriteresolution/)），这意味着 0 到 1023 之间的值将设置为 0 到 3.3V 之间的电压。

除了 DAC，SAMD21 的 ADC 通道也与 ATmega328 不同：它们配备了高达 12 位的分辨率。这意味着模拟输入值可以在 0-4095 之间，表示 0 到 3.3V 之间的电压。要以 12 位模式使用 ADC，请确保在设置中调用 [**analogReadResolution(12)**](https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogreadresolution/)。

**串口绘图 DAC**

以下是一个同时演示 DAC 和 ADC 的示例。要设置实验，请将 A0 连接到 A1 —— 我们将用模拟电压驱动 A0，然后用 A1 读取它。这是我们教程中最简单的电路：

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/AO_A1.jpg" /></div>

:::note
使用 [**Seeed Studio XIAO SAMD21 扩展板**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) 的 Seeed Studio XIAO SAMD21。
:::

此代码在 A0 上生成一个正弦波输出，值范围为 0 到 3.3V。然后它使用 A1 将该输出读取到其 ADC 中，并将其转换为 0 到 3.3V 之间的电压。

当然，您可以打开串口监视器查看电压值流。但如果通过文本难以直观地看到正弦波，请尝试 Arduino 的新串口绘图工具，路径为 Tools > Serial Plotter。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Serial%20poltting.png" /></div>

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO_DAC_wave.gif" /></div>

#### **DAC**

感谢 [Aleksei Tertychnyi](https://github.com/WeSpeakEnglish) 提交的代码，所有相关功能均由他开发和贡献。

```cpp
#define DAC_PIN A0 // 使代码更具可读性
float x = 0; // 用于计算正弦值的变量
float increment = 0.02;  // 每次增加 x 的值
int frequency = 440; // 正弦波的频率

void setup() 
{
  analogWriteResolution(10); // 将模拟输出分辨率设置为最大值 10 位
  analogReadResolution(12); // 将模拟输入分辨率设置为最大值 12 位

  Serial.begin(9600);
}

void loop() 
{
  // 生成 0 到 1023 之间的电压值。
  // 将正弦波缩放到这些值之间：
  // 偏移 511.5，然后将正弦值乘以 511.5。
  int dacVoltage = (int)(511.5 + 511.5 * sin(x));
  x += increment; // 增加 x 的值

  // 生成 0 到 3.3V 之间的电压。
  // 0= 0V，1023=3.3V，512=1.65V，等等。
  analogWrite(DAC_PIN, dacVoltage);

  // 现在读取 A1（连接到 A0），并将
  // 12 位 ADC 值转换为 0 到 3.3V 之间的电压。
  float voltage = analogRead(A1) * 3.3 / 4096.0;
  Serial.println(voltage); // 打印电压值。
  delay(1); // 延迟 1 毫秒
}
```

**结果**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/THonny_DAC.jpg" alt="pir" width={600} height="auto" /></p>

## **快速入门**

### **硬件**

**所需材料**

- Seeed Studio XIAO SAMD21 x1
- 电脑 x1
- USB Type-C 数据线 x1

:::tip

有些 USB 数据线只能供电，无法传输数据。如果您没有 USB 数据线，或者不确定您的 USB 数据线是否可以传输数据，可以查看 [Seeed USB Type-C 支持 USB 3.1](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html)。
:::

- 第 1 步：准备一块 Seeed Studio XIAO SAMD21 和一根 Type-C 数据线。

- 第 2 步：将 Seeed Studio XIAO SAMD21 连接到您的电脑。此时黄色电源 LED 应该会亮起。

### **软件**

:::note

如果这是您第一次使用 Arduino，我们强烈建议您参考 [Arduino 入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino)。
:::

- **第 1 步：安装 Arduino 软件。**

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>下载 Arduino IDE</font></span></strong>
    </a>
</div>

**启动 Arduino 应用程序**

双击您之前下载的 Arduino 应用程序 (arduino.exe)。

:::note

如果 Arduino 软件以其他语言加载，您可以在首选项对话框中更改语言。详情请参阅 [Arduino 软件 (IDE) 页面](https://www.arduino.cc/en/Guide/Environment#languages)。
:::

- **第 2 步：打开 Blink 示例**  

打开 LED 闪烁示例代码：**文件 > 示例 > 01.Basics > Blink**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" alt="pir" width={600} height="auto" /></p>

- **第 3 步：将 Seeeduino 添加到 Arduino IDE**

点击 **文件 > 首选项**，在附加开发板管理器 URL 中填写以下 URL：

*<https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json>*

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" alt="pir" width={600} height="auto" /></p>

点击 **工具 -> 开发板 -> 开发板管理器...**，在搜索框中输入关键字 "**Seeed Studio XIAO SAMD21**"。找到 "Seeed SAMD Boards"，然后安装它。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-board.png" alt="pir" width={600} height="auto" /></p>

- **第 4 步：选择您的开发板和端口**

安装开发板后，点击 **工具 -> 开发板**，找到 "**Seeed Studio XIAO **" 并选择它。现在，您已经在 Arduino IDE 中设置好了 Seeed Studio XIAO SAMD21 开发板。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/1.jpg" alt="pir" width={600} height="auto" /></p>

从工具菜单的串口选项中选择 Arduino 开发板的串行设备。这通常是 COM3 或更高（**COM1** 和 **COM2** 通常保留给硬件串口）。要确认，可以断开 Arduino 开发板并重新打开菜单；消失的条目应该就是 Arduino 开发板。重新连接开发板并选择该串口。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/2.jpg" alt="pir" width={600} height="auto" /></p>

- **第 5 步：上传程序**  

现在，只需点击环境中的 "上传" 按钮。等待几秒钟，如果上传成功，状态栏中会显示 "上传完成" 的消息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" alt="pir" width={800} height="auto" /></p>

上传完成几秒钟后，您应该会看到开发板上的 13 号引脚 (L) LED 开始闪烁（橙色）。如果是这样，恭喜您！您已经成功运行了 Arduino。如果遇到问题，请查看故障排除建议。

:::note
最大闪存大小为 8KB，更多信息请参考资源中的 ATSAMD218A-MU 数据手册。
:::

## 示例应用

- [如何使用 Seeed Studio XIAO SAMD21 登录到您的 Raspberry PI](https://wiki.seeedstudio.com/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI)

- [SPI 通信接口](https://wiki.seeedstudio.com/XIAO-SPI-Communication-Interface)

- [如何使用 Raspberry Pi 修复损坏的 Xiao](https://forum.seeedstudio.com/t/how-to-unbrick-a-dead-xiao-using-raspberry-pi-guide-openocd/253990)。感谢 John_Doe 的分享。

## 资源

- **[PDF]** [ATSAMD218A-MU 数据手册](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/ATSAMD21G18A-MU-Datasheet.pdf)

- **[PDF]** [Seeed Studio XIAO SAMD21 原理图](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0-SCH-191112.pdf)

- **[电子书]** [XIAO: 大能量，小板子，掌握 Arduino 和 TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

- **[ZIP]** [Seeed Studio XIAO SAMD21 KiCAD 文件](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-KICAD.zip)

- **[ZIP]** [Seeed Studio XIAO SAMD21 Eagle 文件](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0.zip)

- **[DXF]** [Seeed Studio XIAO SAMD21 尺寸 DXF 文件](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_Dimension.rar)

- **[LBR]** [Seeed Studio XIAO SAMD21 Eagle 封装](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-footprint-eagle.lbr)

- **[ZIP]** [Seeed Studio XIAO SAMD21 工厂固件](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_final_firmware.zip)

- **[XLSX]** [Seeed Studio XIAO SAMD21 引脚分布表](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/XIAO-SAMD21-pinout_sheet.xlsx)

- **[STEP]** [Seeed Studio XIAO SAMD21 3D 模型](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/seeeduino-xiao-samd21-3d-model.zip)

- 🔗 **[Kicad]** [Seeed Studio XIAO SAMD21 FootPrint](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

## 课程资源

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[电子书]** [XIAO: 强大性能，小巧板载——掌握 Arduino 和 TinyML](https://tinkergen.cn/book_xiao)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时获得顺畅的体验。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>