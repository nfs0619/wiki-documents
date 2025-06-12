---
description: 开始使用 XIAO CAN 总线扩展板
title: XIAO CAN 总线扩展板
keywords:
- Grove
- can bus
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao-can-bus-expansion
last_update:
  date: 05/15/2025
  author: Stephen Lo
---

# XIAO CAN 总线扩展板

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/main.jpg" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-CAN-Bus-Breakout-Board-for-XIAO-and-QT-Py-p-5702.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

<br />

XIAO CAN 总线扩展板专为 Seeed Studio XIAO 开发板设计，提供了一种简单便捷的方式，为您的项目添加 CAN 总线通信功能。CAN 总线（控制器局域网）是一种广泛应用于汽车、工业和其他嵌入式系统的通信协议，能够在不同节点之间实现可靠且稳健的数据交换。

扩展板集成了 MCP2515 控制器和 SN65HVD230 收发器芯片，确保 CAN 总线通信的无缝和高效。MCP2515 控制器负责协议管理、消息过滤和错误处理，而 SN65HVD230 收发器将控制器的数字信号转换为 CAN 总线通信所需的差分信号。

通过使用 XIAO CAN 总线扩展板，您可以利用 Seeed Studio XIAO 开发板及其广泛的生态系统，创建需要 CAN 总线通信的项目。无论您正在开发汽车应用、工业控制系统、机器人项目还是物联网设备，此扩展板都为您提供了一种可靠且紧凑的解决方案，将 CAN 总线功能集成到您的设计中。

扩展板配备了用户友好的端子连接器，允许您轻松将 CANH 和 CANL 线路连接到 CAN 总线网络。板子的紧凑设计确保了与各种项目外壳的兼容性，并便于无缝集成到现有设置中。

通过利用 XIAO CAN 总线扩展板，您可以充分发挥 CAN 总线协议的稳健性、可靠性和可扩展性，从而在您的项目中实现高效的数据交换、系统控制和互联。

## 简介

### 特性

- **兼容性**：专为与 Seeed Studio XIAO 开发板无缝配合而设计。
- **MCP2515 控制器**：板载 MCP2515 芯片提供可靠的 CAN 总线通信控制和处理。
- **SN65HVD230 收发器**：集成的 SN65HVD230 芯片确保了准确的信号转换和稳健的 CAN 总线通信。
- **端子连接**：通过 3 针端子方便地访问 CANH 和 CANL 线路，便于连接到 CAN 总线。
- **紧凑设计**：扩展板采用紧凑的外形设计，适用于各种应用场景。

### 规格

- **兼容性**：Seeed Studio XIAO 开发板。
- **通信接口**：CAN 总线（控制器局域网）。
- **CAN 收发器**：SN65HVD230。
- **CAN 控制器**：MCP2515。
- **端子连接**：用于 CANH 和 CANL 线路的 2 针端子。

### 应用

XIAO CAN 总线扩展板可用于各种需要 CAN 总线通信的项目。以下是一些应用灵感：

- **汽车项目**：将扩展板连接到 XIAO，构建需要 CAN 总线通信的汽车应用，例如车辆诊断或数据记录。
- **工业控制系统**：利用 CAN 总线功能与工业设备和系统进行接口，实现高效的数据交换和控制。
- **机器人**：将扩展板集成到您的机器人项目中，以实现不同机器人模块和组件之间的通信。
- **物联网应用**：将扩展板与物联网设备集成，以便通过 CAN 总线协议实现通信和数据交换。

请参考 XIAO CAN 总线扩展板数据手册和示例，获取详细的使用说明和代码示例。

## 硬件概览

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/hw.jpg" alt="pir" width={500} height="auto" /></p>

1. GND  
2. CAN-H  
3. CAN-L  
4. RX/TX LED 指示灯  
5. SN65NVD230  
6. MCP2515  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/3.png" alt="pir" width={500} height="auto" /></p>

XIAO CAN 总线扩展板背面有一个 P1 焊盘，短接后会为设备添加一个终端电阻。考虑到某些用户的通信设备可能已经有终端电阻，XIAO CAN 总线默认未短接 P1。如果您发现 CAN 通信无法发送或接收消息，可以尝试短接 P1 焊盘以获得 120 欧姆的终端电阻。

## Arduino 库概览

我们提供了一个 [适用于 MCP2515 板的 Arduino 库](https://github.com/limengdu/Arduino_CAN_BUS_MCP2515)。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Arduino_CAN_BUS_MCP2515">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

该库包含以下几个示例：

- ***OBDII-PIDs*** - 从 OBD-II 接口检索数据
- ***send*** - 向 CAN 总线发送一帧数据
- ***recv*** - 从 CAN 总线接收一帧数据
- ***set_mask_filter_recv*** - 使用掩码和过滤器设置从 CAN 总线接收一帧数据

### 1. 设置波特率

此功能用于初始化 CAN 总线系统的波特率。

可用的波特率如下所列：

```cpp
#define CAN_5KBPS    1
#define CAN_10KBPS   2
#define CAN_20KBPS   3
#define CAN_25KBPS   4
#define CAN_31K25BPS 5
#define CAN_33KBPS   6
#define CAN_40KBPS   7
#define CAN_50KBPS   8
#define CAN_80KBPS   9
#define CAN_83K3BPS  10
#define CAN_95KBPS   11
#define CAN_100KBPS  12
#define CAN_125KBPS  13
#define CAN_200KBPS  14
#define CAN_250KBPS  15
#define CAN_500KBPS  16
#define CAN_666kbps  17
#define CAN_1000KBPS 18
```

### 2. 设置接收掩码和过滤器

控制器芯片有 2 个接收掩码寄存器和 5 个过滤器寄存器，可用于确保从目标设备接收数据。这些寄存器在具有许多节点的大型网络中特别有用。我们提供了两个函数，允许您使用这些掩码和过滤器寄存器。

**掩码：**

```c
init_Mask(unsigned char num, unsigned char ext, unsigned char ulData);
```

**过滤器：**

```c
init_Filt(unsigned char num, unsigned char ext, unsigned char ulData);
```

- **num** 表示使用哪个寄存器。掩码可以填 0 或 1，过滤器可以填 0 到 5。
- **ext** 表示帧的状态。0 表示这是标准帧的掩码或过滤器，1 表示这是扩展帧的掩码或过滤器。
- **ulData** 表示掩码或过滤器的内容。

### 3. 检查接收

MCP2515 控制器芯片可以在轮询模式或中断模式下运行。在轮询模式下，软件会定期检查是否有接收到的帧。在中断模式下，可以使用额外的引脚来指示帧已接收或传输已完成。这种方式可以更高效地利用资源，因为处理器不需要不断检查是否有数据到来。

此功能用于检查接收缓冲区中是否有等待的接收帧。如果有，函数将返回 true，否则返回 false。您可以在循环中使用此函数以持续检查接收帧。

```c
INT8U MCP_CAN::checkReceive(void);
```

### 4. 获取 CAN ID

您可以使用以下函数获取从“发送”节点接收到的数据长度。

```c
INT32U MCP_CAN::getCanId(void)
```

### 5. 发送一帧数据

```c
CAN.sendMsgBuf(INT8U id, INT8U ext, INT8U len, data_buf);
```

此功能用于将数据发送到 CAN 总线。参数说明如下：

- **id** - CAN 帧的 ID。
- **ext** - 一个布尔值，表示帧的状态。'0' 表示标准帧，'1' 表示扩展帧。
- **len** - 帧的长度。
- **data_buf** - 消息的内容。

例如，在 'send' 示例中，我们有：

```c
unsigned char stmp[8] = {0, 1, 2, 3, 4, 5, 6, 7};
CAN.sendMsgBuf(0x00, 0, 8, stmp); // 将消息 'stmp' 发送到总线，并告诉其他设备这是来自 0x00 的标准帧。
```

### 6. 接收一帧数据

以下函数用于在“接收”节点上接收数据：

```c
CAN.readMsgBuf(unsigned char len, unsigned char buf);
```

在设置了掩码和过滤器的情况下，此函数只能获取符合掩码和过滤器要求的帧。

- **len** 表示数据长度。
- **buf** 是存储数据的地方。

## 入门指南

#### 硬件

此产品不包含 XIAO 模块，因此您需要单独购买一个 XIAO 模块。在本示例中，我们使用 XIAO ESP32C3 进行演示，但其他版本的 XIAO 模块也可以类似工作。硬件连接非常简单，只需将 XIAO 模块插入扩展板即可。

请参考下图连接 XIAO。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/connect.jpg" alt="pir" width={500} height="auto" /></p>

#### 软件

- **步骤 1.** 从 [CAN Bus Library](https://github.com/limengdu/Arduino_CAN_BUS_MCP2515) 下载 CAN 总线库。

- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) 为 Arduino 安装库。

- **步骤 3.** 在正确下载并安装库后，您可以在示例文件夹中找到一个名为 send.ino 的示例程序。此程序专为 D7S 模块设计。

```cpp
#include <mcp_can.h>
#include <SPI.h>

/* 请根据不同的板子修改 SPI_CS_PIN。

   CANBed V1        - 17
   CANBed M0        - 3
   CAN Bus Shield   - 9
   CANBed 2040      - 9
   CANBed Dual      - 9
   OBD-2G Dev Kit   - 9
   OBD-II GPS Kit   - 9
   Hud Dev Kit      - 9
*/

#define SPI_CS_PIN  D7

MCP_CAN CAN(SPI_CS_PIN);                                    // 设置 CS 引脚

void setup()
{
    Serial.begin(115200);
    while(!Serial);
    
    // 以下代码适用于 OBD-II GPS Dev Kit Atemga32U4 版本
    // pinMode(A3, OUTPUT);
    // digitalWrite(A3, HIGH);
    
    // 以下代码适用于 OBD-II GPS Dev Kit RP2040 版本
    // pinMode(12, OUTPUT);
    // digitalWrite(12, HIGH);
    
    while (CAN_OK != CAN.begin(CAN_500KBPS))    // 初始化 CAN 总线：波特率 = 500k
    {
        Serial.println("CAN 总线初始化失败！");
        delay(100);
    }
    Serial.println("CAN 总线初始化成功！");
}

unsigned char stmp[8] = {0, 1, 2, 3, 4, 5, 6, 7};
void loop()
{
    CAN.sendMsgBuf(0x00, 0, 8, stmp);
    delay(100);                       // 每 100ms 发送一次数据
}

// 文件结束
```

- **步骤 4.** 上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。

- **步骤 5.** 成功上传代码后，您会注意到 RX 和 TX LED 灯亮起，表示 CAN 总线正在主动传输数据。如果您的 CAN 总线连接到其他设备，这些 LED 灯将闪烁而不是常亮。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/CAN_DEV_XIAO.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 故障排查

### Q1: XIAO CAN Bus 扩展板支持的最大波特率是多少？

扩展板上的 MCP2515 控制器支持的最大波特率为 1 Mbps。请确保您的 CAN 总线网络的波特率设置与此限制兼容。

### Q2: 我可以在同一个 CAN 总线网络中使用多个 XIAO CAN Bus 扩展板吗？

可以，您可以在同一个 CAN 总线网络中使用多个扩展板。每个扩展板都需要分配一个唯一的节点 ID，以确保正确通信并避免总线上的冲突。

### Q3: 我可以将 XIAO CAN Bus 扩展板与其他微控制器或开发板一起使用吗？

XIAO CAN Bus 扩展板专为 Seeed Studio XIAO 开发板设计。然而，通过正确的引脚映射和配置，它可能可以与支持必要 CAN 总线通信协议的其他微控制器或开发板一起使用。

### Q4: CAN 总线连接的最大电缆长度是否有限制？

CAN 总线连接的最大电缆长度取决于波特率、电缆质量和电磁干扰等因素。通常，对于较低的波特率，可以支持较长的电缆长度（最长可达几百米）。然而，对于较高的波特率，建议将电缆长度保持较短（几米以内），以确保可靠的通信。

### Q5: 如何排查 CAN 总线通信问题？

如果您遇到 CAN 总线通信问题，可以按照以下步骤进行故障排查：

- 检查 CAN 总线网络的物理连接，确保接线和终端正确。
- 检查波特率设置，确保所有连接到 CAN 总线的设备的波特率一致。
- 使用 CAN 总线分析仪或终端软件监控 CAN 总线流量，以识别传输消息中的任何错误或问题。
- 仔细检查程序代码，确保正确初始化和配置 MCP2515 控制器。
- 确保 XIAO 开发板和 CAN 总线网络的电源稳定，并在指定的电压范围内。
- 如果您有其他问题或本 FAQ 部分未涵盖的问题，请随时联系我们的技术支持团队以获得进一步帮助。

## 资源

- **[ZIP]** [XIAO CAN Bus 扩展板原理图和 PCB](https://files.seeedstudio.com/wiki/xiao_can_bus_board/CAN_DEV_XIAO.zip)
- **[PDF]** [数据手册 - MCP2515](https://files.seeedstudio.com/wiki/xiao_can_bus_board/MCP2515-Stand-Alone-CAN-Controller-with-SPI-200018-708845.pdf)
- **[PDF]** [数据手册 - SN65HVD230](https://files.seeedstudio.com/wiki/xiao_can_bus_board/20001667G-1115479.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>