---
description: |
  来自 Seeed Studio 的多功能驱动板，专为控制串行总线舵机的机器人应用而设计。它具有一个关键的跳线设置，必须根据连接方式（USB 或直接 UART）进行调整。
title: 总线舵机驱动板
image: https://files.seeedstudio.com/wiki/Bus_Servo_Driver/bus_servo_driver_board_main.webp
slug: /cn/bus_servo_driver_board
last_update:
  date: 05/15/2025
  author: w0x7ce
keywords:
    - 总线舵机
    - 机器人
    - UART
    - USB连接
    - 跳线设置
# sidebar_position: 2
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

### 总线舵机驱动板入门指南

<div class="table-center">
  <table align="center">
    <tr>
        <th>用于 XIAO ESP32S3 Sense 的 OV5640 摄像头</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/board.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Bus-Servo-Driver-Board-for-XIAO-p-6413.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>


### 概述

总线舵机驱动板是来自 Seeed Studio 的一款紧凑且强大的硬件解决方案，专为机器人和自动化项目中的串行总线舵机驱动而设计。它支持 UART 通信，可实现对多个 ST/SC 系列舵机的精确控制和反馈，非常适合需要舵机角度和负载反馈的应用场景，例如机械臂、六足机器人、人形机器人以及轮式机器人。

本指南重点介绍硬件设置、物理连接、关键规格以及**关键跳线设置**，以帮助用户有效地将该板集成到项目中。

:::warning 安全警告

在连接或断开舵机或布线之前，请务必断开电源。确保输入电压与舵机要求匹配，以避免损坏。

:::

### 物理布局和连接

总线舵机驱动板具有以下关键连接点：

**输入：**

* **DC IN (5.5 * 2.1mm)：** 这是板和连接舵机的电源输入端。请在此处连接 5~12V 电源。*关键是，该电源的电压必须与舵机的电压要求匹配。*例如，ST 系列舵机通常工作在 9V，而 SC 系列舵机可能需要 12V。

**输出：**

* **舵机接口：** 此专用端口用于连接您的 ST/SC 系列总线舵机。确保连接器正确对齐。

**控制接口：**

* **UART (RX/TX)：** 这些引脚提供用于控制舵机的串行通信。连接方式和跳线设置取决于您的主机设备。详情见下文。

### 连接方式和跳线设置

总线舵机驱动板提供两种主要连接方式：直接 UART 连接和通过 USB 转 UART 适配器的 USB 连接。*正确的跳线设置对于正常运行至关重要。*

**1. 直接 UART 连接（适用于 MCU、XIAO、ESP32 等）**

此方法用于直接连接到微控制器（MCU）的 UART 引脚，例如 ESP32、Arduino、Seeed Studio XIAO 或单板计算机。

* **布线：**
    * 将驱动板上的 `RX` 引脚连接到主机设备上的 `TX` 引脚（D7）。
    * 将驱动板上的 `TX` 引脚连接到主机设备上的 `RX` 引脚（D6）。
    * 对于像 Seeed Studio XIAO 这样的设备，您可以直接将 XIAO 插入提供的插针排，确保正确的引脚对齐。这消除了使用杜邦线进行 UART 连接的需要。

* **跳线设置（关键）：** 找到 UART 引脚附近的焊接跳线。**对于直接 UART 通信，必须确保两个焊盘连接在一起（焊接在一起）。**

* **主机供电：** 您的主机设备（例如 Raspberry Pi Zero、ESP32、XIAO）需要单独的电源。

**2. USB 连接**

此方法用于连接到带有 USB 端口的计算机或单板计算机（例如 PC 或 Raspberry Pi 4B）。您只需使用 USB 数据线将控制板连接到计算机即可。

* **布线：**
    * 只需使用 USB 数据线将控制板连接到计算机。

* **跳线设置（关键）：**

**步骤1：** 找到板背面的焊接跳线。**对于 USB 通信，必须确保两个焊盘连接在一起（焊接桥接）。**

<br />
<div style={{ textAlign: 'center' }}>  
    <img   
        src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/change-1.png"   
        style={{   
            width: '400px',   
            height: '400px',   
            borderRadius: '15px',   
            filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))'   
        }}   
    />  
</div>  
<br />

**步骤2：** 使用一个 2.54mm 跳线帽短接板正面的 2pin 引脚。

<br />
<div style={{ textAlign: 'center' }}>  
    <img   
        src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/change-2.png"   
        style={{   
            width: '400px',   
            height: '400px',   
            borderRadius: '15px',   
            filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))'   
        }}   
    />  
</div>  
<br />

### 所需组件（开始之前）

在连接任何设备之前，请确保您拥有以下组件：

* **总线舵机驱动板**
* **兼容的 ST/SC 系列总线舵机**
* **5~12V 电源：** 电池或电源适配器。*电压必须与舵机的规格匹配。*
* **主机设备：**
    * **对于直接 UART：** 支持 UART 的设备，例如 Raspberry Pi、Arduino、ESP32 或 Seeed Studio XIAO。
    * **对于 USB：** 一台计算机（PC、Mac、Linux）或单板计算机（例如 Raspberry Pi 4B），*以及* 一个 USB 转 UART 适配器。
* **连接线/适配器：** 如果使用直接 UART 连接（除非使用 XIAO 的直接插针连接），需要杜邦线。使用 USB 连接方式时需要 USB 转 UART 适配器。

:::caution

如果使用 SC 系列舵机，请确认电源与其电压要求匹配。板子的直流输入标签是为 ST 系列舵机设计的，但也支持 SC 系列的电压。**错误的跳线设置将导致无法与驱动板通信。**

:::

### 安全与维护

- 定期检查舵机和电源连接是否有磨损或接触不良。
- 避免将板子暴露在潮湿环境或极端温度下。
- 使用具有足够电流容量的电源以支持所有连接的舵机。

### 常见问题解答

:::tip

建议在开始项目之前阅读这些常见问题解答，它们涵盖了常见问题和潜在问题。

:::

<details>
<summary>如果电源电压与我的舵机不匹配怎么办？</summary>

板子和舵机可能会发生故障或损坏。始终确保输入电压与舵机的要求相匹配。
</details>

<details>
<summary>我可以同时连接多个舵机吗？</summary>

可以支持多个舵机，但请确保您的电源能够处理所有舵机的总电流需求。
</details>

### 资源

* **原理图:** [Bus_Servo_Driver_Board_SCH.pdf](https://files.seeedstudio.com/wiki/bus_servo_driver_board/202004237_Servo_Driver_Board_for_Seeed_Studio_XIAO_SCH_PDF_250225.pdf) *(请确保此 PDF 文件在您的 Docusaurus 项目中可以通过此相对路径访问。)*
<!-- * **3D 模型:** [Bus_Servo_Driver_Board_STEP.stp](Bus_Servo_Driver_Board_STEP.stp) *(请确保此 STEP 文件在您的 Docusaurus 项目中可以通过此相对路径访问。)* -->

### 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">

<a href="https://forum.seeedstudio.com/" class="button_forum"></a>

<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>

</div>

<div class="button_tech_support_container">

<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>

<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>

</div>