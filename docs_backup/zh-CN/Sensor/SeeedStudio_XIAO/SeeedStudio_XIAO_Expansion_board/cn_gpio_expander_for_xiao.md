---
description: 创建一个包含丰富内容的文档页面。
title: XIAO 的 IO 扩展板
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/io_expander_for_xiao
last_update:
  date: 05/15/2025
  author: Stephen Lo
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/1.jpg" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/GPIO-Expander-for-XIAO-p-5795.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div><br />

XIAO 的 IO 扩展板是一款先进的扩展板，旨在增强 Seeed Studio XIAO 系列的功能。该扩展板由 MCP23017 芯片驱动，提供额外的 16 个 IO 引脚，使用户能够在项目中实现更多功能，无需受限。无论您是希望尝试更多组件的爱好者，还是寻求可靠 IO 扩展解决方案的专业人士，这款扩展板都能满足您的需求。其与 XIAO 系列的兼容性确保了无缝集成，使您的开发过程更加顺畅高效。

## 特性

- 与 XIAO 无缝集成：专为 Seeed Studio XIAO 系列设计。
- 16 个额外的 IO 引脚：由 MCP23017 提供支持，为您的项目提供额外的 16 个 IO 引脚。
- 可配置地址的 I2C 接口：默认 I2C 地址为 0x21，可配置为 0x20。
- 坚固设计：采用高质量材料制造，确保耐用性和可靠性。

## 规格

- 芯片：MCP23017
- IO 引脚数量：16
- 通信协议：I2C
- 默认 I2C 地址：0x21（可配置为 0x20）
- 工作电压：3.3V
- 尺寸：21mm x 17mm

## 应用场景

XIAO 的 IO 扩展板用途广泛，可用于多种应用场景，包括但不限于：

- **家庭自动化系统**：扩展您智能家居设置中可控制的设备数量。
- **机器人**：为您的机器人添加更多传感器、电机或其他组件，而无需担心 IO 引脚不足。
- **游戏控制台**：设计带有大量按钮和开关的自定义控制器或其他外设。
- **工业控制系统**：在工业设置中管理更多设备和传感器。
- **教育项目**：在教学中使用微控制器和电子产品，不受 IO 引脚数量限制。

## 硬件概览

本节详细介绍了 XIAO IO 扩展板上的各种组件和接口。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/2.png" alt="pir" width={800} height="auto" /></p>

### 0. 标准 XIAO 焊盘

这些是用于连接 XIAO 微控制器的标准焊盘。

### 1. J1 焊盘

J1 焊盘允许用户通过焊接决定是否将 MCP23017 的 RST、INTB 和 INTA 引脚连接到 XIAO 的 D6、D1 和 D0 引脚。从上到下分别是 RST、INTB、INTA。

默认情况下，当您使用扩展板时，区域 8 的额外输出焊盘是启用的。如果您不想启用它们，需要用刀切断 J1 区域中两个相邻的焊盘。

### 2. MCP23017 芯片

这是主要的 I/O 扩展芯片，提供额外的 16 个 IO。

### 3. J2 焊盘

此焊盘用于选择 I2C 地址。默认地址为 0x21。如果焊接此焊盘，地址可更改为 0x20。

### 4. MCP23017 输出引脚

这些是 MCP23017 芯片的输出引脚。每个引脚的定义可以在板子的背面看到。范围从 PA0 到 PB7，总共提供 16 个 IO。

### 5. Grove 焊盘

如果您希望连接 Grove 模块，可以焊接提供的 Grove 插座。此 Grove 接口连接到 I2C 总线。如果您选择在此处使用 IIC 引脚，则无法使用区域 4 的扩展 IO 引脚。

### 6. VCC 引脚

这是一个输出引脚，可用于为其他组件供电。

### 7. GND 引脚

这是另一个输出引脚，可用于为其他组件接地。

### 8. 额外输出焊盘

这些是一些额外的输出焊盘，包括 GND、INTB、INTA、RST。如果您希望将这些引脚焊接到其他地方使用，可以进行焊接。

## 快速入门

欢迎使用 XIAO IO 扩展板快速入门指南。本指南旨在帮助您设置并开始使用新的 IO 扩展板与 XIAO RP2040 主控板。

### 硬件准备

使用此扩展板主要有三种方式：

**模式 1：SMD**

如果您的 XIAO 未焊接引脚，则可以选择直接通过 SMD 方法将 XIAO 和扩展板焊接到 PCB 板上，以使用 GPIO 扩展功能。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/4.jpg" alt="pir" width={800} height="auto" /></p>

:::note
图片中的 PCB 板仅供展示，截至本文发布时尚未上架销售。
:::

**模式 2：通过排针直接连接 XIAO 和扩展板**

在这种方式中，您可以选择直接将连接线焊接到 GPIO 扩展板上，以连接目标设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/5.jpg" alt="pir" width={800} height="auto" /></p>

**模式 3：通过长排针连接 XIAO 和扩展板，并通过焊接排针扩展扩展板**

通过这种连接方式，您可以自由地将杜邦线安装到 GPIO 扩展板上，方便您的应用布线。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/6.jpg" alt="pir" width={800} height="auto" /></p>

焊接完成后，您可以将扩展板连接到 XIAO RP2040 主控板。

要对 XIAO RP2040 进行编程，您需要一根 TYPE-C USB 数据线。将一端连接到 XIAO RP2040，另一端连接到您的计算机。有关编程 XIAO RP2040 的详细指南，请参考此 [Wiki](https://wiki.seeedstudio.com/XIAO-RP2040/)。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/3.jpg" alt="pir" width={600} height="auto" /></p>

### 软件准备

在开始为板子编程之前，您需要为 XIAO 准备一个特定的库。从这个 [GitHub 链接](https://github.com/limengdu/Adafruit-MCP23017-Arduino-Library) 下载 MCP23017 库。下载完成后，将库安装到您的编程环境中。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Adafruit-MCP23017-Arduino-Library">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

## 演示：IO 输出高低电平

在 Arduino IDE 中，打开一个新草图并复制以下示例代码：

```cpp
#include <Adafruit_MCP23X17.h>

Adafruit_MCP23X17 mcp;

void setup() {
    Serial.begin(9600);
    Serial.println("MCP23xxx 闪烁测试！");
    if (!mcp.begin_I2C()) {
        Serial.println("错误。");
        while (1);
    }

    Serial.println("循环中...");

    for(int i=0; i<16; i++) {
        mcp.pinMode(i, OUTPUT); // 设置所有引脚为输出模式
    }
}

void loop() {
    mcp.digitalWrite(15, LOW); //PB7 设置为低电平
    mcp.digitalWrite(14, HIGH); //PB6 设置为高电平
    mcp.digitalWrite(13, HIGH); //PB5 设置为高电平
    mcp.digitalWrite(12, HIGH); //PB4 设置为高电平
    mcp.digitalWrite(11, HIGH); //PB3 设置为高电平
    mcp.digitalWrite(10, HIGH); //PB2 设置为高电平
    mcp.digitalWrite(9, HIGH); //PB1 设置为高电平
    mcp.digitalWrite(8, HIGH); //PB0 设置为高电平
    mcp.digitalWrite(7, HIGH); //PA7 设置为高电平
    mcp.digitalWrite(6, HIGH); //PA6 设置为高电平
    mcp.digitalWrite(5, HIGH); //PA5 设置为高电平
    mcp.digitalWrite(4, HIGH); //PA4 设置为高电平
    mcp.digitalWrite(3, HIGH); //PA3 设置为高电平
    mcp.digitalWrite(2, HIGH); //PA2 设置为高电平
    mcp.digitalWrite(1, HIGH); //PA1 设置为高电平
    mcp.digitalWrite(0, HIGH); //PA0 设置为高电平
    delay(1000); // 延迟 1 秒
}
```

将上述代码上传到您的 XIAO。代码成功上传后，您会看到除 PB7 引脚外，所有引脚均为 3.3V 高电平。

:::caution
此扩展板只能使用数字输入和输出功能，不能使用 PWM 或模拟输入输出功能。
:::

### 引脚地址

当使用单个引脚操作（如 _pinMode(pinId, dir)_、_digitalRead(pinId)_ 或 _digitalWrite(pinId, val)_）时，引脚通过以下 ID 进行寻址。例如，要设置 _GPB0_ 的模式，请使用 _pinMode(8, ...)_。**注意** MCP23008 和 MCP23S08 仅有 _GPAx_ 引脚。

<table>
<thead>
<tr>
<th>MCP23x17 引脚号</th>
<th>引脚名称</th>
<th>引脚 ID</th>
</tr>
</thead>
<tbody>
<tr>
<td>21</td>
<td>GPA0</td>
<td>0</td>
</tr>
<tr>
<td>22</td>
<td>GPA1</td>
<td>1</td>
</tr>
<tr>
<td>23</td>
<td>GPA2</td>
<td>2</td>
</tr>
<tr>
<td>24</td>
<td>GPA3</td>
<td>3</td>
</tr>
<tr>
<td>25</td>
<td>GPA4</td>
<td>4</td>
</tr>
<tr>
<td>26</td>
<td>GPA5</td>
<td>5</td>
</tr>
<tr>
<td>27</td>
<td>GPA6</td>
<td>6</td>
</tr>
<tr>
<td>28</td>
<td>GPA7</td>
<td>7</td>
</tr>
<tr>
<td>1</td>
<td>GPB0</td>
<td>8</td>
</tr>
<tr>
<td>2</td>
<td>GPB1</td>
<td>9</td>
</tr>
<tr>
<td>3</td>
<td>GPB2</td>
<td>10</td>
</tr>
<tr>
<td>4</td>
<td>GPB3</td>
<td>11</td>
</tr>
<tr>
<td>5</td>
<td>GPB4</td>
<td>12</td>
</tr>
<tr>
<td>6</td>
<td>GPB5</td>
<td>13</td>
</tr>
<tr>
<td>7</td>
<td>GPB6</td>
<td>14</td>
</tr>
<tr>
<td>8</td>
<td>GPB7</td>
<td>15</td>
</tr>
</tbody>
</table>

## 常见问题解答

### 1. 为什么我的 XIAO IO 扩展板没有响应？

**答**：请确保 XIAO 模块正确插入扩展板。此外，检查是否已安装必要的库，并在 Arduino IDE 中选择了正确的板子和端口。

### 2. 我可以将 XIAO IO 扩展板与其他微控制器一起使用吗？

**答**：可以。虽然 IO 扩展板主要为 XIAO 模块设计，但它也可以与支持 I2C 通信的其他微控制器一起使用。您可能需要相应调整代码和连接。

### 3. 如何更改 IO 扩展板上 MCP23017 芯片的 I2C 地址？

**答**：默认 I2C 地址设置为 0x21。如果您想将其更改为 0x20，板子上有一个标记为 "J2" 的跳线。您需要焊接 J2 跳线以更改地址。

### 4. 我的 IO 引脚出现噪声或不稳定行为，可能的原因是什么？

**答**：请确保连接牢固且没有干扰。使用上拉或下拉电阻可以帮助稳定输入引脚。此外，请确保电源稳定并能为所有连接设备提供必要的电流。

## 资源

- **[ZIP]** [Eagle 文件](https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/XIAO_IO.zip)
- **[PDF]** [数据手册 - MCP23017](https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/MCP23017_Data_Sheet_DS20001952-2998473.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>