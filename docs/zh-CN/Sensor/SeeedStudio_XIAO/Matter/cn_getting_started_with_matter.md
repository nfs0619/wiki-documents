---
description: 快速体验使用 Espressif 的 Matter 部署工具进行 Matter 照明的介绍。
title: 使用 XIAO ESP32 快速入门 Matter
keywords:
- ESP-IDF
- XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/getting_started_with_matter
last_update:
  date: 05/15/2025
  author: Citric
---

# 使用 XIAO ESP32 系列快速入门 Matter

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

:::tip
本文是 Seeed Studio XIAO ESP32 开发 Matter 系列的第二篇教程。如果您尚未配置 ESP-IDF 环境，请先阅读第一篇教程：

- **[使用 Espressif ESP-IDF 在 XIAO 上开发](https://wiki.seeedstudio.com/xiao_idf)**

本教程适用于 XIAO ESP32C3 和 XIAO ESP32S3。由于 GPIO8 引脚未引出，Espressif 提供的 Matter 示例暂时不支持 XIAO ESP32C6。
:::

在智能家居技术领域，Matter 已成为一项变革性技术，承诺彻底改变设备之间的通信和交互方式。Matter 是一个开源的标准化协议，能够实现来自不同制造商的智能家居设备之间的无缝互操作性。通过提供通用语言和框架，Matter 旨在简化物联网设备的开发和部署，创造一个更加互联且用户友好的智能家居体验。

作为开发者或爱好者，您可能迫不及待地想探索 Matter 的潜力并开始构建自己的 Matter 兼容设备。这时，XIAO ESP32 系列和 ESPLaunchPad 就派上用场了。XIAO ESP32 系列，特别是 XIAO ESP32C3、XIAO ESP32S3 和 XIAO ESP32C6，是紧凑且强大的开发板，为创建 Matter 设备提供了理想的平台。这些开发板具有强大的功能和广泛的外设接口，为您的 Matter 项目提供了必要的硬件基础。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/15.png" style={{width:800, height:'auto'}}/></div>

为了简化开发流程并使其更易于访问，Espressif Systems 推出了 ESPLaunchPad，这是一个综合平台，可以简化 ESP32 设备的固件烧录和配置。ESPLaunchPad 利用 ESP RainMaker 生态系统的强大功能，使您能够轻松使用智能手机应用程序配置和控制设备。通过将 XIAO ESP32 系列与 ESPLaunchPad 结合使用，您可以快速开始 Matter 开发并体验这一变革性协议的优势。

在本教程中，我们将指导您如何使用 ESPLaunchPad 快速将固件烧录到 XIAO ESP32 开发板，并通过二维码将其与您的 iPhone 配对。通过遵循这些步骤，您将能够在手机和 XIAO ESP32 设备之间建立连接，从而实现无缝控制和交互。这种实践经验将为您提供对 Matter 及其在智能家居生态系统中潜力的基础理解。

在整个教程中，您将学习如何：
1. 设置您的 XIAO ESP32 开发板并为固件烧录做好准备。
2. 使用 ESPLaunchPad 轻松将 Matter 固件烧录到 XIAO ESP32 设备。
3. 使用二维码将 XIAO ESP32 开发板与 iPhone 配对。
4. 使用 iPhone 应用程序控制和交互您的 Matter 设备。
5. 在实际场景中探索 Matter 的基本功能和能力。

通过本教程的学习，您将对 Matter 及其使用 XIAO ESP32 系列和 ESPLaunchPad 的实现有一个扎实的理解。您将掌握知识和技能，进一步推动您的 Matter 开发，创建利用这一突破性协议的创新智能家居解决方案。

那么，让我们开始这段激动人心的旅程，探索 XIAO ESP32 系列和 ESPLaunchPad 带来的 Matter 世界吧！

## 准备软件

以下列出了本教程支持的系统及版本。

- **主机**：[Ubuntu 22.04 LTS (Jammy Jellyfish)](https://releases.ubuntu.com/jammy/) 或 macOS 10.15 或更高版本。

<!-- Matter 的 ESPLaunchPad **不支持 Windows**。 -->

## 准备硬件

在本教程的最后，我们将向您展示如何将 XIAO ESP32 系列作为 Matter 端点添加到 Apple Home，以通过 Apple 的生态系统控制 LED 灯条。目前，本教程支持以下 XIAO，您可以直接选择它们作为本课程的内容。

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO ESP32C3</th>
			<th>XIAO ESP32S3</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:110, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a></div></td>
		</tr>
	</table>
</div>

除了 XIAO，我们还需要 WS281x 型号的灯条或灯珠。目前 Espressif 提供的灯光示例仅支持单颗灯珠，因此无论您使用灯条还是灯珠，都只能点亮一个灯。我们还建议您购买 Grove Base for XIAO 以便于布线。

<div class="table-center">
	<table align="center">
		<tr>
			<th>Grove Base for XIAO</th>
			<th>Grove - RGB LED Ring (20 - WS2813 Mini)</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-20-WS2813-Mini.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a></div></td>
		</tr>
	</table>
</div>

如果你使用的是 XIAO ESP32C3，请将 LED 灯带连接到引脚 **D8**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/16.png" style={{width:400, height:'auto'}}/></div>

如果你使用的是 XIAO ESP32S3，请将 LED 灯带连接到引脚 **D9**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/17.png" style={{width:400, height:'auto'}}/></div>

本教程将以 **XIAO ESP32C3** 为例，向你概述如何烧录固件、添加设备及其他操作。

## 视频教程

<div class="table-center">
<iframe width="750" height="450" src="https://www.youtube.com/embed/bhHVbRe_Gtw?si=iH-oouOl_ItkG7vF?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## 第一步：为 XIAO ESP32 烧录 Matter 固件

使用 USB 数据线将 XIAO ESP32C3 开发板连接到你的电脑。确保开发板被电脑正确识别。

<!-- :::caution
请不要使用 Windows 电脑，你会发现 Flash 按钮在 Windows 电脑上始终是灰色的。
::: -->

在你的电脑上打开 ESPLaunchPad 网站。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://espressif.github.io/esp-launchpad/?flashConfigURL=https://espressif.github.io/esp-matter/launchpad.toml">
            <strong><span><font color={'FFFFFF'} size={"4"}>前往 ESPLaunchPAD</font></span></strong>
    </a>
</div>

<br />

在 **Select Application** 中选择 **light**，在 **ESP Chipset Type** 中选择 **ESP32C3**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/18.png" style={{width:800, height:'auto'}}/></div>

然后点击右上角的 **Connect** 按钮，选择已连接到电脑的 XIAO 设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/19.png" style={{width:800, height:'auto'}}/></div>

接着点击下方的 **flash** 按钮，等待固件上传。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/20.png" style={{width:800, height:'auto'}}/></div>

当固件上传完成后，你会看到一些操作提示框以及一个二维码，我们只需点击 **Done**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/21.png" style={{width:800, height:'auto'}}/></div>

然后点击屏幕右侧的 **Reset Device** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/22.png" style={{width:800, height:'auto'}}/></div>

当你看到调试信息时，说明一切进展顺利。现在我们可以继续进行设备绑定。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/23.png" style={{width:800, height:'auto'}}/></div>

## 第二步：通过 iPhone Home APP 扫码添加设备

在添加设备的部分，我们将以苹果设备为例（因为手头只有苹果设备）。如果你有 [Google 的设备](https://support.google.com/googlenest/answer/12391458?hl=en&co=GENIE.Platform%3DAndroid) 或 [Amazon 的设备](https://developer.amazon.com/en-US/alexa/matter)，也许你可以使用它们。

如果像本文一样，你想使用 iPhone 的 Home APP 添加设备，你需要有一个苹果设备作为家庭中枢。目前支持 Home Hub 的设备包括 HomePod 和 Apple TV，详情请阅读 [苹果官网](https://support.apple.com/en-hk/102557)。本教程假设你已经在 Home APP 中添加了 Home Hub。

Home APP 在 iOS 设备上默认安装。如果你曾经删除过它，可以在 [App Store 中重新搜索](https://apps.apple.com/cn/app/home/id1110145103?l=en-GB)并下载。

在你的 iPhone 上打开 Home APP。点击屏幕右上角的 **+** 按钮。从菜单中选择 **Add or Scan Accessory**。使用你的 iPhone 摄像头扫描 XIAO ESP32C3 提供的二维码。Home APP 会识别 Matter 配件并将其显示为新配件。点击 **Add to Home** 将 XIAO ESP32C3 添加到你的 Home APP。请参考以下详细操作图片。

<div class="table-center">
  <table align="center">
    <tr>
      <th>页面 1</th>
      <th>页面 2</th>
      <th>页面 3</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/24.png" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/25.png" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/26.png" style={{width:600, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <th>页面 4</th>
      <th>页面 5</th>
      <th>页面 6</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/27.png" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/28.png" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/32.png" style={{width:600, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <th>页面 7</th>
      <th>页面 8</th>
      <th>页面 9</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/29.png" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/31.png" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

## 第三步：在 Home APP 中使用 XIAO

在 Home App 中，找到新添加的 XIAO ESP32C3 配件。点击该配件以访问其控制界面。使用亮度滑块调整连接灯光的亮度。点击颜色图标更改灯光的颜色。您可以选择多种预定义颜色，也可以使用颜色选择器创建自定义颜色。连接到 XIAO ESP32C3 的灯光会实时响应您在 Home App 中的调整。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/30.png" style={{width:300, height:'auto'}}/></div>

恭喜您！您已经成功使用 ESPLaunchPad 将灯光固件烧录到 XIAO ESP32C3 板，并将其与 iPhone 的 Home App 配对。现在，您可以直接通过 iPhone 控制连接灯光的亮度和颜色，打造个性化且便捷的照明体验。

欢迎探索 Home App 中更多高级功能和自定义选项，并尝试与 XIAO ESP32C3 板兼容的不同灯光配件。有了这个基础，您可以进一步扩展您的智能家居设置，创建一个真正互联且自动化的生活空间。

## 故障排除

### Q1：在 Home APP 中长时间无法连接设备。

如果您长时间无法连接设备，请确保在上传固件后看到日志消息。如果此时您长时间未配对设备，XIAO 可能会进入待机模式，此时您需要按下 XIAO 上的 Reset 按钮或使用 ESPLaunchPad 上的 Reset Device 来重启设备。之后再尝试添加设备。

除此之外，也可能是网络问题。请确保 XIAO 和您的 iPhone 在同一个局域网内，并且它们都需要连接到 2.4GHz 网络，而不是 5GHz 网络。配置完成后，手机可以使用其他网络，但 XIAO 仅支持 2.4GHz 网络。

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