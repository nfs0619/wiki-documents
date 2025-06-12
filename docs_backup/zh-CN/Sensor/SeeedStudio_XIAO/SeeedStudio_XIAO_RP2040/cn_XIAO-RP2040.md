---
description: 概述
title: 入门 Seeed Studio XIAO RP2040
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg
slug: /cn/XIAO-RP2040
last_update:
  date: 05/15/2025
  author: shuxu hu
---

# 入门 Seeed Studio XIAO RP2040

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" alt="pir" width={600} height="auto" /></p>

Seeed Studio XIAO RP2040 的尺寸与 Seeed Studio XIAO SAMD21 一样小，但性能更强大。一方面，它搭载了功能强大的双核 RP2040 处理器，时钟频率可灵活运行至 133 MHz，是一种低功耗微控制器。Seeed Studio XIAO RP2040 还配备了 264KB 的 SRAM 和 2MB 的板载 Flash 存储器，可提供更多的程序存储和运行空间。另一方面，这块小板在处理性能上表现出色，但功耗却很低。  
总而言之，它的设计尺寸小巧，仅有拇指大小（21x17.8mm），适用于可穿戴设备和小型项目。

Seeed Studio XIAO RP2040 拥有 14 个 GPIO 引脚，其中包括 11 个数字引脚、4 个模拟引脚、11 个 PWM 引脚、1 个 I2C 接口、1 个 UART 接口、1 个 SPI 接口和 1 个 SWD 焊盘接口。

Seeed Studio XIAO RP2040 兼容 Seeed Studio XIAO 扩展板。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## **特性**

- 强大的 MCU：双核 ARM Cortex M0+ 处理器，时钟频率可灵活运行至 133 MHz
- 丰富的片上资源：264KB 的 SRAM 和 2MB 的板载 Flash 存储器
- 灵活的兼容性：支持 Micropython/Arduino/CircuitPython
- 简单的项目操作：面包板友好 & SMD 设计，背面无元件
- 小巧尺寸：仅有拇指大小（21x17.8mm），适用于可穿戴设备和小型项目
- 多种接口：11 个数字引脚、4 个模拟引脚、11 个 PWM 引脚、1 个 I2C 接口、1 个 UART 接口、1 个 SPI 接口、1 个 SWD 焊盘接口

## **规格**

<table>
<tr>
<th>项目</th>
<th>参数</th>
</tr>
<tr>
<td>CPU</td>
<td>双核 ARM Cortex M0+ 处理器，最高 133MHz</td>
</tr>
<tr>
<td>Flash 存储</td>
<td>2MB</td>
</tr>
<tr>
<td>SRAM</td>
<td>264KB</td>
</tr>
<tr>
<td>数字 I/O 引脚</td>
<td>11</td>
</tr>
<tr>
<td>模拟 I/O 引脚</td>
<td>4</td>
</tr>
<tr>
<td>PWM 引脚</td>
<td>11</td>
</tr>
<tr>
<td>I2C 接口</td>
<td>1</td>
</tr>
<tr>
<td>SPI 接口</td>
<td>1</td>
</tr>
<tr>
<td>UART 接口</td>
<td>1</td>
</tr>
<tr>
<td>电源和下载接口</td>
<td>Type-C</td>
</tr>
<tr>
<td>电源</td>
<td>3.3V/5V DC</td>
</tr>
<tr>
<td>尺寸</td>
<td>21×17.8×3.5mm</td>
</tr>
</table>

## **硬件概览**

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinpin.jpg" alt="pir" width={600} height="auto" /></p>

:::caution
关于通用 I/O 引脚：  
MCU 的工作电压为 3.3V。如果输入电压连接到通用 I/O 引脚高于 3.3V，可能会导致芯片损坏。

关于电源引脚：  
内置的 DC-DC 转换电路能够将 5V 电压转换为 3.3V，因此可以通过 VIN-PIN 和 5V-PIN 使用 5V 电源为设备供电。

XIAO RP2040 当前仅支持电池供电，连接电池时不能同时连接 Type-C 接口，否则可能存在安全风险。

请注意使用，不要掀起屏蔽罩。
:::

### **进入 Bootloader 模式**

有时在用户编程失败时，Seeed Studio XIAO RP2040 的端口可能会消失。我们可以通过以下操作解决此问题：

- 长按 "B" 按钮。
- 将 Seeed Studio XIAO RP2040 连接到电脑。
- 电脑会显示一个磁盘驱动器。

此时，芯片进入 Bootloader 模式，烧录端口再次出现。因为 RP2040 芯片有两个分区，一个是 Bootloader，另一个是用户程序。产品出厂时会在系统内存中烧录一个 Bootloader 代码。我们可以通过上述步骤切换模式。

### **复位**

如果需要复位 Seeed Studio XIAO RP2040，请执行以下步骤：

- 将 Seeed Studio XIAO RP2040 连接到电脑。
- **按下 "R" 引脚一次**。

请注意：内置的可编程单色 LED（红色、蓝色和绿色）的行为与 Arduino 上的 LED 相反。在 Seeed Studio XIAO RP2040 上，需要将引脚拉低以启用。

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" alt="pir" width={600} height="auto" /></p>

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[PDF]** [RP2040 数据手册](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_datasheet.pdf)

- **[PDF]** [Seeed Studio XIAO RP2040 原理图](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeed-Studio-XIAO-RP2040-v1.3.pdf)

- **[电子书]** [XIAO: 大能量，小板子，掌握 Arduino 和 TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

- **[ZIP]** [Seeed Studio XIAO RP2040 KiCAD 文件](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeeduino-xiao-rp2040-KiCAD-Library.zip)

- **[ZIP]** [Seeed Studio XIAO RP2040 Eagle 文件](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip)

- **[DXF]** [Seeed Studio XIAO RP2040 DXF 尺寸文件](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-DXF.zip)

- **[LBR]** [Seeed Studio XIAO RP2040 Eagle 封装库](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeed-Studio-XIAO-RP2040-footprint-eagle.lbr)

- **[XLSX]** [Seeed Studio XIAO RP2040 引脚分布表](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-pinout_sheet.xlsx)

- **[STEP]** [Seeed Studio XIAO RP2040 3D 模型](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/seeed-studio-xiao-rp2040-3d-model.zip)

- 🔗 **[Kicad]** [Seeed Studio XIAO RP2040 封装库](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

## 课程资源

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[电子书]** [XIAO: 强大性能，小巧板载——掌握 Arduino 和 TinyML](https://tinkergen.cn/book_xiao)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>