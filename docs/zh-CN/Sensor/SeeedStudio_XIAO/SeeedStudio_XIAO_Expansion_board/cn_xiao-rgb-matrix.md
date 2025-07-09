---
description: XIAO 的 6x10 RGB 矩阵快速入门指南
title: XIAO 的 6x10 RGB 矩阵快速入门指南
keywords:
- XIAO RGB
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/rgb_matrix_for_xiao
last_update:
  date: 05/15/2025
  author: Citric
---

# XIAO 的 6x10 RGB 矩阵快速入门指南

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/1.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/6x10-RGB-MATRIX-for-XIAO-p-5771.html#">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div><br />

介绍“6x10 RGB-MATRIX for XIAO”——这是 Seeed Studio XIAO 产品系列的一个炫目新成员。现在，通过 6x10 RGB-MATRIX，您可以为您的项目增添丰富多彩的光彩。该矩阵由 60 个精心排列的 WS2812 LED 组成，不仅仅是为了美观，更是为了将您的创意变为现实。无论您是在制作交互式艺术作品、设计动态通知系统，还是只是想为您的创作增添一抹色彩，这个矩阵都是您的画布。它专为与 XIAO 主控制器无缝集成而设计，同时还包括 VCC、GND 和 DIN 焊盘，确保在多种场景下的灵活性。

## 简介

### 特性

- **60 个 WS2812 LED**：这些 LED 按照 6x10 的网格排列，非常适合创建生动的显示效果。
- **紧凑设计**：每个 LED 的尺寸仅为 1mm x 1mm，提供高密度显示且不占用太多空间。
- **多功能连接**：虽然它是为 XIAO 主控制器设计的，但我们还提供了 VCC、GND 和 DIN 焊盘，以便更广泛的应用。
- **RGB 功能**：每个 LED 都可以显示广泛的颜色，让您自由创建动态多彩的显示效果。

### 规格

- **LED 类型**：WS2812
- **LED 数量**：60
- **排列方式**：6 行 x 10 列
- **LED 尺寸**：1mm x 1mm
- **XIAO 的连接端口**：D0
- **额外焊盘**：VCC、GND、DIN、DOUT

### 应用场景

- **交互式显示**：在项目中使用 LED 矩阵实现动态视觉反馈。
- **通知系统**：为设备创建多彩的通知或警报。
- **艺术装置**：将 LED 矩阵融入艺术作品中，增添现代感。
- **可穿戴技术**：集成到服装或配饰中，打造未来感。
- **游戏**：通过生动的视觉效果增强游戏体验。
- **通用照明**：用于各种环境中的氛围照明或情景设置。

## 快速入门

欢迎使用 XIAO 的 6x10 RGB-MATRIX 快速入门指南。本指南旨在帮助您设置并开始使用新的 LED 矩阵扩展板与 XIAO RP2040 主控制器。

### 硬件准备

收到产品后，需要进行一些焊接操作。我们在包装中提供了两个针脚排，您需要将这些针脚焊接到扩展板上。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/2.png" style={{width:700, height:'auto'}}/></div>

焊接完成后，您可以继续将扩展板连接到 XIAO RP2040 主控制器。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/3.jpg" style={{width:700, height:'auto'}}/></div>

:::caution
连接时请特别小心，不要在 XIAO 通电时连接，也不要连接错误的电源引脚。否则，可能会导致板子烧毁。
:::

### 软件准备

本教程将使用 XIAO RP2040 作为主控，如果您是第一次使用 XIAO RP2040，请阅读其快速入门 Wiki。

- [Seeed Studio XIAO RP2040 与 Arduino](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/)

同时，本教程中提供的所有示例程序也适用于其他 XIAO，您可以根据所使用的 XIAO 提前配置 Arduino 开发环境。

## Arduino 库概览

:::tip

如果您是第一次使用 Arduino，我们强烈建议您参考 [Arduino 快速入门](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

### 功能

在开始开发代码之前，让我们先了解一下库中可用的功能。

- `Adafruit_NeoPixel(uint16_t n, int16_t pin = 6, neoPixelType type = NEO_GRB + NEO_KHZ800);` —— 当长度、引脚和像素类型在编译时已知时的 NeoPixel 构造函数。

  **输入参数**：

  - `n`：NeoPixel 灯带中的像素数量。
  - `p`：用于驱动 NeoPixel 数据输入的 Arduino 引脚编号。
  - `t`：像素类型——将 Adafruit_NeoPixel.h 中定义的 NEO_* 常量相加，例如 `NEO_GRB+NEO_KHZ800` 表示 NeoPixel 需要 800 KHz（而非 400 KHz）数据流，颜色字节按绿色、红色、蓝色顺序排列。

  **返回值**：Adafruit_NeoPixel 对象。在使用之前调用 `begin()` 函数。

- `void begin(void)` —— 配置 NeoPixel 引脚为输出。

- `void show(void)` —— 将 RAM 中的像素数据传输到 NeoPixel。

- `void setPin(int16_t p)` —— 设置/更改 NeoPixel 输出引脚编号。之前的引脚（如果有）将设置为 INPUT，新引脚将设置为 OUTPUT。

  **输入参数**：

  - `p`：Arduino 引脚编号（-1 = 无引脚）。

- `void setPixelColor(uint16_t n, uint8_t r, uint8_t g, uint8_t b, uint8_t w)` —— 使用单独的红、绿、蓝和白色分量（仅适用于 RGBW NeoPixel）设置像素的颜色。

  **输入参数**：

  - `n`：像素索引，从 0 开始。
  - `r`：红色亮度，0 = 最低（关闭），255 = 最高。
  - `g`：绿色亮度，0 = 最低（关闭），255 = 最高。
  - `b`：蓝色亮度，0 = 最低（关闭），255 = 最高。
  - `w`（可选）：白色亮度，0 = 最低（关闭），255 = 最高，如果使用 RGB 像素则忽略。

- `void setPixelColor(uint16_t n, uint32_t c)` —— 使用 32 位“打包”的 RGB 或 RGBW 值设置像素的颜色。

### 输入参数

- `n`: 像素索引，从 0 开始。
- `c`: 32 位颜色值。最高有效字节是白色（针对 RGBW 像素）或被忽略（针对 RGB 像素），接下来是红色，然后是绿色，最低有效字节是蓝色。

- `void fill(uint32_t c = 0, uint16_t first = 0, uint16_t count = 0)` —— 用一种颜色填充整个或部分 NeoPixel 灯带。

  **输入参数**：

  - `c`: 32 位颜色值。最高有效字节是白色（针对 RGBW 像素）或被忽略（针对 RGB 像素），接下来是红色，然后是绿色，最低有效字节是蓝色。如果所有参数都未指定，则默认为 0（关闭）。
  - `first`: 要填充的第一个像素的索引，从 0 开始。必须在范围内，不会进行裁剪。如果未指定，则默认为 0。
  - `count`: 要填充的像素数量，必须为正值。传递 0 或未指定将填充到灯带的末尾。

- `void setBrightness(uint8_t b)` —— 调整输出亮度。不会立即影响当前显示在 LED 上的内容。下一次调用 `show()` 时，LED 将以此亮度刷新。

  **输入参数**：

  - `b`: 亮度设置，0=最小（关闭），255=最亮。

- `void clear(void)` —— 用 0 / 黑色 / 关闭填充整个 NeoPixel 灯带。

- `void updateLength(uint16_t n)` —— 更改先前声明的 Adafruit_NeoPixel 灯带对象的长度。旧数据将被释放，新数据将被清除。引脚号和像素格式保持不变。

  **输入参数**：

  - `n`: 灯带的新长度，以像素为单位。

- `void updateType(neoPixelType t)` —— 更改先前声明的 Adafruit_NeoPixel 灯带对象的像素格式。如果格式从 RGB 变体之一更改为 RGBW 变体（或从 RGBW 更改为 RGB），旧数据将被释放，新数据将被清除。否则，旧数据将保留在 RAM 中，并且不会重新排序为新格式，因此建议随后调用 `clear()`。

  **输入参数**：

  - `t`: 像素类型 —— 将 Adafruit_NeoPixel.h 中定义的 NEO_* 常量相加，例如 `NEO_GRB+NEO_KHZ800`，用于期望 800 KHz（与 400 KHz 相对）数据流且每个像素的颜色字节按绿色、红色、蓝色顺序表示的 NeoPixels。

- `static uint32_t Color(uint8_t r, uint8_t g, uint8_t b)` —— 将单独的红色、绿色和蓝色值转换为单个“打包”的 32 位 RGB 颜色。

  **输入参数**：

  - `r`: 红色亮度，范围 0 到 255。
  - `g`: 绿色亮度，范围 0 到 255。
  - `b`: 蓝色亮度，范围 0 到 255。

  **返回值**：32 位打包的 RGB 值，可以分配给变量以供以后使用，或传递给 `setPixelColor()` 函数。无论 LED 灯带的颜色顺序如何，打包的 RGB 格式都是可预测的。

### 安装

- **方法一**

本教程将使用 **[Adafruit NeoPixel Library](https://github.com/adafruit/Adafruit_NeoPixel)**，您可以在 Arduino 的库管理器中搜索并下载并安装它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/4.png" style={{width:1000, height:'auto'}}/></div>

- **方法二**

通过以下按钮下载库。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/adafruit/Adafruit_NeoPixel">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

下载 ZIP 库后，打开 Arduino IDE，点击 **Sketch > Include Library > Add .ZIP Library**。选择刚刚下载的 ZIP 文件，如果库安装正确，您将在通知窗口中看到 **Library added to your libraries**，这表示库已成功安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

## 示例：流水灯效果

以下示例程序用于实现流水灯效果，灯珠将依次一个一个点亮。此程序兼容所有 XIAO。

```cpp
#include <Adafruit_NeoPixel.h>
#ifdef __AVR__
 #include <avr/power.h> // 针对 16 MHz 的 Adafruit Trinket 必需
#endif

// Arduino 上连接到 NeoPixels 的引脚
#define PIN        A0 // 对于 Trinket 或 Gemma，建议将其更改为 1

// Arduino 上连接的 NeoPixels 数量
#define NUMPIXELS 60 // 常见的 NeoPixel 环大小

// 在设置 NeoPixel 库时，我们需要告诉它像素数量，
// 以及使用哪个引脚发送信号。请注意，对于较旧的 NeoPixel 灯带，
// 您可能需要更改第三个参数 —— 请参阅 strandtest 示例以获取更多可能值的信息。
Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

#define DELAYVAL 500 // 每个像素之间暂停的时间（以毫秒为单位）

void setup() {
  // 这些代码行专门支持 Adafruit Trinket 5V 16 MHz。
  // 对于其他任何板子，您可以删除此部分（但保留也无妨）：
#if defined(__AVR_ATtiny85__) && (F_CPU == 16000000)
  clock_prescale_set(clock_div_1);
#endif
  // Trinket 特定代码结束。

  pixels.begin(); // 初始化 NeoPixel 灯带对象（必需）
}

void loop() {
  pixels.clear(); // 将所有像素颜色设置为“关闭”

  // 灯带中的第一个 NeoPixel 是 #0，第二个是 1，一直到像素数量减一。
  for(int i=0; i<NUMPIXELS; i++) { // 对于每个像素...

    // pixels.Color() 接受 RGB 值，范围从 0,0,0 到 255,255,255
    // 这里我们使用一个中等亮度的绿色：
    pixels.setPixelColor(i, pixels.Color(0, 10, 0));

    pixels.show();   // 将更新的像素颜色发送到硬件。

    delay(DELAYVAL); // 在循环的下一次迭代之前暂停
  }
}
```

上传程序后，如果一切正常，您将看到灯珠一个接一个地亮起。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/5.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
此程序特别降低了灯珠的亮度，如果将亮度调至最大，长时间直视灯珠可能会对眼睛造成伤害。
:::

## 多块灯板拼接

适用于 XIAO 的 RGB MATRIX 支持多块拼接扩展，并保证电源供应。您可以按照下图所示的方式依次拼接多块灯板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/6.jpg" style={{width:800, height:'auto'}}/></div>

:::caution
当多块灯板拼接在一起时，可能会发热并出现供电不足的情况。这时灯板可能会显示异常，请为灯板提供额外的电源，以确保每块灯板都能稳定接收到 5V 输入。
:::

## 资源

- **[ZIP]** [PCB&SCH Eagle 文件](https://files.seeedstudio.com/wiki/xiao-rgb-matrix/EAGLE_XIAO_MATRIX.zip)
- **[PDF]** [数据手册 - WS2812B](https://files.seeedstudio.com/wiki/xiao-rgb-matrix/WS2812B-1010-DATASHEET.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>