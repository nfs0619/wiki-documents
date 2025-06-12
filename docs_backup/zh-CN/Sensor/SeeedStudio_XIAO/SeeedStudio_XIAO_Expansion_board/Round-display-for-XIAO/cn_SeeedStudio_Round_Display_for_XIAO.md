---
description: XIAO 圆形显示屏基础教程
title: Seeed Studio 圆形显示屏与 XIAO 入门指南
keywords:
- XIAO
- 圆形显示屏
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/get_start_round_display
last_update:
  date: 05/15/2025
  author: Spencer
---

# Seeed Studio 圆形显示屏与 XIAO 入门指南

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 简介

Seeed Studio 圆形显示屏是兼容所有 XIAO 开发板的扩展板。它在一侧配备了全覆盖触摸屏，设计为直径 39mm 的圆盘。它内置 RTC、充电芯片和 TF 卡插槽，体积小巧，非常适合智能家居、可穿戴设备等交互式显示应用。

<table align="center">
	<tr>
		<th>版本</th>
		<th>描述</th>
		<th>日期</th>
		<th>作者</th>
	</tr>
	<tr>
		<td>v1.0</td>
		<td>初始版本</td>
		<td>2023/1/29</td>
		<td>Linus.Liao</td>
	</tr>
	<tr>
		<td>v1.1</td>
		<td>1. 更换锂电池充电 IC<br />2. 在 A0 和 D6 添加开关</td>
		<td>2023/4/7</td>
		<td>Linus.Liao</td>
	</tr>
</table>

### 规格参数

<table align="center">
	<tr>
	    <th>项目</th>
	    <th>详情</th>
	</tr>
	<tr>
	    <th>电源</th>
	    <td>USB Type-C: 5V @35 mA <br></br> 电池充电: 3.7V @37mA</td>
	</tr>
	<tr>
	    <th>充电电流</th>
	    <td>~ 485 mA</td>
	</tr>
  <tr>
	    <th>可扩展存储</th>
	    <td>支持最大 32GB FAT 的 TF 卡插槽</td>
	</tr>
  <tr>
	    <th>屏幕</th>
	    <td>1.28 英寸触摸屏 <br></br> 240×240 分辨率 <br></br> 65K 色彩</td>
	</tr>
  <tr>
	    <th>其他外部设备</th>
	    <td>JST 1.25 接口</td>
	</tr>
  <tr>
	    <th>尺寸</th>
	    <td>39mm x 39mm</td>
	</tr>
</table>

### 特性

- **电容触摸屏扩展板**：配备 1.28 英寸圆形屏幕，240×240 分辨率，65K 色彩，提供清晰且丰富的图像展示
- **高兼容性**：高度兼容所有 XIAO 系列产品，轻松集成到现有项目中
- **丰富的外设**：内置 RTC、电池充电芯片、TF 卡插槽、JST 1.25 接口，体积小巧
- **手表尺寸设计**：采用 39mm 圆形设计，适用于可穿戴设备和空间受限的项目
- **即插即用**：所有引脚均已引出，无需焊接

## 硬件概览

在开始之前，我们可以参考以下图片了解圆形显示屏的引脚设计，以便更好地理解其功能。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/round-pinout.png" style={{width:800, height:'auto'}}/></div>

自 2023 年 4 月 7 日起，改进版圆形显示屏增加了一个 2 位开关，用于控制屏幕背光和电池电压读取。用户可以自由选择是否使用该引脚或释放它。点击[这里](https://wiki.seeedstudio.com/seeedstudio_round_display_usage/#ke-button--gpio)了解更多详情。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/round-display-v1.1-pinout.png" style={{width:800, height:'auto'}}/></div>

## 入门指南

### 硬件准备

如果您希望充分利用圆形显示屏的功能并获得良好的体验，我们强烈建议您购买我们的 XIAO 系列作为圆形显示屏的主板。

:::tip
XIAO SAMD21、RP2040 和 RA4M1 可能由于内存不足而 **不** 兼容圆形屏幕。
:::

<table align="center">
	<tr>
		<th>Seeed Studio XIAO nRF52840 (Sense)</th>
		<th>Seeed Studio XIAO ESP32C3</th>
	    <th>Seeed Studio XIAO ESP32S3 (Sense)</th>
		<th>Seeed Studio XIAO ESP32C6</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoblesense.jpg" style={{width:500, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:450, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

Round Display 背面的针脚排是专为 XIAO 系列设计的。如果您手头有 XIAO，无需准备任何额外的电缆，只需将 XIAO 的针脚对齐并直接插入 Round Display 即可。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/50.jpg" style={{width:500, height:'auto'}}/></div>

:::caution
请注意，在连接 XIAO 时，**XIAO 的 Type-C 接口应面向 Round Display 的外侧**。如果您不小心接反了极性，也不用过于担心，Round Display 配备了电源保护电路，不会轻易损坏，但我们不建议长时间保持反向连接。
:::

Round Display 的推荐方向是：当您面对 Round Display 时，XIAO 的 Type-C 接口面向右侧，这样 Round Display 的开关按钮位于左下角。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/51.jpg" style={{width:700, height:'auto'}}/></div>

### 软件准备

要使用 Round Display，我们需要对 XIAO 系列进行编程。推荐的编程工具是 Arduino IDE，您需要为 XIAO 配置 Arduino 环境并添加板载包。

:::tip
如果这是您第一次使用 Arduino，我们强烈建议您参考 [Arduino 入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

#### 第一步：根据您的操作系统下载并安装稳定版本的 Arduino IDE。

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>下载 Arduino IDE</font></span></strong>
    </a>
</div>

#### 第二步：启动 Arduino 应用程序。

#### 第三步：为您使用的 XIAO 配置 Arduino IDE。

- 如果您想使用 **Seeed Studio XIAO RP2350** 进行后续操作，请参考 **[此教程](https://wiki.seeedstudio.com/getting-started-xiao-rp2350/)** 完成添加。

- 如果您想使用 **Seeed Studio XIAO nRF52840** 进行后续操作，请参考 **[此教程](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup)** 完成添加。

- 如果您想使用 **Seeed Studio XIAO ESP32C3** 进行后续操作，请参考 **[此教程](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started#software-setup)** 完成添加。

- 如果您想使用 **Seeed Studio XIAO ESP32C6** 进行后续操作，请参考 **[此教程](https://wiki.seeedstudio.com/xiao_esp32c6_getting_started/#software-preparation)** 完成添加。

- 如果您想使用 **Seeed Studio XIAO ESP32S3** 进行后续操作，请参考 **[此教程](http://wiki.seeedstudio.com/xiao_esp32s3_getting_started#software-preparation)** 完成添加。

#### 第四步：将 Round Display 的库添加到 Arduino。

首先，您需要下载以下链接中的 **TFT_eSPI**、**LVGL** 和 **Round Screen** 库。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/SeeedStudio_lvgl">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载 LVGL 库</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/SeeedStudio_TFT_eSPI">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载 TFT 库</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_RoundDisplay">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载屏幕库</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

既然您已经下载了 ZIP 库，请打开 Arduino IDE，点击 **Sketch > Include Library > Add .ZIP Library**。选择您刚刚下载的 ZIP 文件，如果库安装正确，您会在通知窗口中看到 **Library added to your libraries**。这意味着库已成功安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

我们需要在圆形显示屏上使用 RTC 功能，因此您还需要搜索并安装 **I2C BM8563 RTC** 库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/63.png" style={{width:800, height:'auto'}}/></div>

然后，您需要将 `lv_conf.h` 文件剪切到 Arduino 库的根目录。

:::caution
请注意，这里的 `lv_conf.h` 文件来自 **Seeed_Arduino_RoundDisplay**，而不是 **LVGL** 库。
:::

在 Windows 系统中，Arduino 库的根目录是：

`C:\Users\${UserName}\Documents\Arduino\libraries`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/54.png" style={{width:800, height:'auto'}}/></div>

#### 第五步 (可选) 配置使用环境

圆形显示屏目前适配了基于两种不同库的显示屏，一个是 **TFT_eSPI**，另一个是 **Arduino GFX**。对于 XIAO SAMD21 和 XIAO nRF52840，由于内存不足无法运行 TFT 库，而 Arduino GFX 的性能会显著更好。您可以在 Arduino IDE 中搜索并下载它。

:::tip
如果您需要使用 **TFT_eSPI** 库，请继续执行 **第五步**。如果您使用的是 Arduino GFX，则可以跳过此步骤。

关于圆形显示屏的内容，我们的教程将重点介绍 **TFT_eSPI** 的使用。
:::



### Arduino 库概述

从上述教程中我们可以看出，圆形显示屏主要使用 **LVGL**、**TFT_eSPI** 和 **Arduino GFX** 库。为了节省空间，我们将分别介绍 **LVGL** 和 **TFT_eSPI** 库的使用，并以绘制表盘为例。

- 您可以点击 **[这里](https://wiki.seeedstudio.com/using_lvgl_and_tft_on_round_display#common-interfaces-for-tft-library)** 了解 **TFT_eSPI** 库的接口和使用方法。

- 您可以点击 **[这里](https://wiki.seeedstudio.com/using_lvgl_and_tft_on_round_display#common-interfaces-for-lvgl-library)** 了解 **LVGL** 库的接口和使用方法。

- 您可以点击 **[这里](https://github.com/moononournation/Arduino_GFX)** 了解 **Arduino GFX** 库的接口和使用方法。

## 点亮您的圆形显示屏

### 示例 1: TFT 时钟

:::tip
我们需要在圆形显示屏上使用 RTC 功能，因此您还需要搜索并安装 **I2C BM8563 RTC** 库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/63.png" style={{width:800, height:'auto'}}/></div>
:::

硬件和软件准备就绪后，我们开始上传第一个示例程序。此示例程序可用于检查圆形显示屏的 RTC 时钟是否正常工作。由于此演示需要的内存较少，适用于所有 XIAO 型号。

:::tip
如果您想修改此演示以实现更复杂的显示，请注意您使用的 XIAO 的内存大小。具体大小可以在该 XIAO 的介绍页面中找到。
:::

您可以在 Arduino IDE 中找到此示例程序，路径为 **File -> Examples -> Seeed Arduino Round display -> TFT_Clock**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/r1.png" style={{width:600, height:'auto'}}/></div>

只需选择您使用的 XIAO 和 XIAO 所在的端口号，编译并上传。

确保圆形显示屏的开关切换到 ON 位置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/59.jpg" style={{width:400, height:'auto'}}/></div>

如果程序运行顺利，您将看到以下效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/r3.png" style={{width:600, height:'auto'}}/></div>

### 示例 2: 硬件测试

由于 HardwareTest 示例较为复杂且占用较大的内存，一些 XIAO 型号可能因内存不足而无法成功运行。我们创建了一张测试表供您参考，使用 TFT 库和 Arduino GFX 库。

<table>
<tr>
<th>型号</th>
<th>TFT 库</th>
<th>Arduino GFX</th>
</tr>
<tr>
<td>&lt;&lt;XIAO&gt;&gt; SAMD21</td>
<td>❌</td>
<td>❌</td>
</tr>
<tr>
<td>&lt;&lt;XIAO&gt;&gt; RP2040</td>
<td>❌</td>
<td>❌</td>
</tr>
<tr>
<td>&lt;&lt;XIAO&gt;&gt; RA4M1</td>
<td>❌</td>
<td>❌</td>
</tr>
<tr>
<td>&lt;&lt;XIAO&gt;&gt; nRF52840 非 mbed 版本</td>
<td>✅</td>
<td>❌</td>
</tr>
<tr>
<td>&lt;&lt;XIAO&gt;&gt; nRF52840 mbed 版本</td>
<td>❌</td>
<td>✅</td>
</tr>
<tr>
<td>&lt;&lt;XIAO&gt;&gt; ESP32C3</td>
<td>✅</td>
<td>✅</td>
</tr>
<tr>
<td>&lt;&lt;XIAO&gt;&gt; ESP32C6</td>
<td>✅</td>
<td>❌</td>
</tr>
<tr>
<td>&lt;&lt;XIAO&gt;&gt; ESP32S3</td>
<td>✅</td>
<td>✅</td>
</tr>
</table>

此示例程序可用于检查圆形显示屏的 RTC 时钟、SD 卡和触摸功能是否正常工作。

:::tip
我们需要在圆形显示屏上使用 RTC 功能，因此您还需要搜索并安装 **I2C BM8563 RTC** 库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/63.png" style={{width:800, height:'auto'}}/></div>
:::

您可以在 Arduino IDE 中找到此示例程序，路径为 **File -> Examples -> Seeed Arduino Round display -> HardwareTest**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/58.png" style={{width:600, height:'auto'}}/></div>

只需选择您使用的 XIAO 和 XIAO 所在的端口号，编译并上传。

确保圆形显示屏的开关切换到 ON 位置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/59.jpg" style={{width:400, height:'auto'}}/></div>

如果程序运行顺利，您将看到以下效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/60.gif" style={{width:600, height:'auto'}}/></div>

:::note
此示例程序将测试扩展板的所有功能项，包括 RTC 功能。如果您未安装 I2C BM8563 RTC 库，则可能会报告错误，您可以注释掉函数 `lv_hardware_test()`，此时 SD 卡的功能检测也将关闭。
:::

## 校准固件更新
:::tip
如果您发现触摸有时没有响应，可以按照以下步骤更新屏幕的校准固件。
:::

1. 从此 [链接](https://github.com/Seeed-Studio/Seeed_Arduino_RoundDisplay/tree/main/examples/TP_firmware_update) 下载代码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/c1.png" style={{width:1000, height:'auto'}}/></div>

2. 将代码放在同一目录下并运行此固件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/c3.png" style={{width:600, height:'auto'}}/></div>

3. 打开串口监视器，您将看到如下图所示的成功消息，这表示更新成功，您可以上传您的程序进行尝试！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/c2.png" style={{width:600, height:'auto'}}/></div>

## 故障排除

### Q1: 为什么上传程序后显示屏没有显示任何内容？

A: 请检查圆形显示屏的开关是否已打开。如果您使用的是 XIAO ESP32C3，在上传程序后可能还需要按下复位按钮才能使其正常工作。

### Q2: 如果我想将 Seeed Studio XIAO ESP32S3 Sense 连接到此扩展屏幕，两个 TF 卡插槽会发生冲突吗？

A: 这不会产生冲突。不同的 SD 卡插槽通过芯片选择进行控制，如果您想使用 Sense 上的 microSD 卡插槽，芯片选择引脚应为 **21**；如果您想使用圆形显示屏上的 microSD 卡插槽，芯片选择引脚应为 **D2**。

我们在 S3 Sense 摄像头教程中有使用硬件和 microSD 卡的 [示例](https://wiki.seeedstudio.com/xiao_esp32s3_camera_usage/#project-i-making-a-handheld-camera)。

### Q3: 为什么我的 XIAO RP2040 在使用圆形显示屏的 HardwareTest 代码时出现非常奇怪的 C++ 错误？

A: 这可能是由于您未选择适合 XIAO RP2040 的编译选项导致的。请参考下图进行设置并重新上传程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/100.png" style={{width:1000, height:'auto'}}/></div>

## 资源

- **[PDF]** [充电 IC 数据手册](https://files.seeedstudio.com/wiki/round_display_for_xiao/charge-IC-datasheet.pdf)
- **[PDF]** [ETA3410 数据手册](https://files.seeedstudio.com/wiki/round_display_for_xiao/ETA3410-datasheet.pdf)
- **[PDF]** [RTC PCF8563 数据手册](https://files.seeedstudio.com/wiki/round_display_for_xiao/RTC-PCF8563-datasheet.pdf)
- **[PDF]** [1.28'' a-Si TFT 液晶显示屏数据手册](https://files.seeedstudio.com/wiki/round_display_for_xiao/GJX0128A4-15HY_Datasheet.pdf)
- **[PDF]** [Seeed Studio 圆形显示屏 XIAO 原理图](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.0_SCH_230308.pdf)
- **[PDF]** [Seeed Studio 圆形显示屏 XIAO 原理图 v1.1](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.1_SCH_230407.pdf)
- **[PDF]** [GJX0128A4-15HY 数据手册](https://files.seeedstudio.com/wiki/round_display_for_xiao/GJX0128A4-15HY_Datasheet.pdf)
- **[ZIP]** [Seeed Studio 圆形显示屏 XIAO 原理图和 PCB](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.0_SCH&PCB_230308.zip)
- **[ZIP]** [Seeed Studio 圆形显示屏 XIAO 原理图和 PCB v1.1](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.1_SCH&PCB_230407.zip)
- **[3DM]** [圆形显示屏 XIAO 的 3D 模型](https://grabcad.com/library/seeed-studio-round-display-for-xiao-1)
- **[STL]** [圆形显示屏外壳的 3D 模型图](https://files.seeedstudio.com/wiki/round_display_for_xiao/Round-Display-shell-3D-Model.stl)
- **[STL]** [Seeed Studio XIAO ESP32 S3 Sense 带圆形屏幕的外壳](https://files.seeedstudio.com/wiki/round_display_for_xiao/Seeed_Studio-XIAO-ESP32-S3-Sense-Case-With-Round-Screen.stl)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>