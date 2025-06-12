---
description: Seeed Studio XIAO nRF52840 使用 PlatformIO
title: XIAO nRF52840-Sense 使用 PlatformIO
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/nRF52840_PlatformIO/1.png
slug: /cn/xiao_nrf52840_with_platform_io
last_update:
  date: 05/15/2025
  author: Jason
---

# **Seeed Studio XIAO nRF52840 使用 PlatformIO**

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/nRF52840_PlatformIO/1.png" /></div>


PlatformIO 是一个集成了多种开发板并具有良好扩展性的开发平台。如果平台中没有您需要的开发板类型，您可以手动添加开发板类型。您在 Arduino 上编写的代码也可以使用它，只需添加相应的库即可。

在本教程中，我们将介绍如何在 PlatformIO 中安装并运行示例代码。

## 使用 PlatformIO 进行 XIAO nRF52840 开发

### 步骤 1：在官网安装 [PlatformIO](https://platformio.org/platformio-ide)

如果您尚未安装 PlatformIO 软件，可以点击上方链接进行安装。

### 步骤 2：在 PlatformIO 中创建任意项目

由于平台已经包含了我们的 XIAO ESP32S3 和 XIAO ESP32C3 开发板选项，我们可以选择其中之一来创建文件。当然，选择其他文件也可以，这并不重要。项目名称也可以随意选择。这里我以 XIAO ESP32 C3 为例。

<table align="center">
  <tr>
      <th>操作一</th>
        <th>操作二</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_platformio/4.png" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_platformio/3.png" style={{width:700, height:'auto'}}/></div></td>
  </tr>
</table>

:::tip
在此之前，我已经安装了 XIAO ESP32C6 和 XIAO nRF52840 的安装包，因此您可以看到操作二中的图像有 XIAO ESP32C6 和 XIAO nRF52840 的选项，但在您执行操作时可能没有这些选项。
:::

### 步骤 3：修改 platformio.ini 文件

当您成功创建 PlatformIO 文件后，左侧列中会出现许多文件。我们可以看到一个名为 platform.ini 的文件。接下来，我们需要替换其中的内容。

<table align="center">
  <tr>
      <th>操作三</th>
  </tr>
  <tr>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO_PlatformIO/platformIO_file.jpg" /></div>
  </tr>
</table>

您需要复制以下代码并替换 platform.ini 文件中的内容：

```
[env:seeed_xiao_nrf52840_sense]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-afruitnrf52-nrf52840
framework = arduino
```
:::tip
记得保存文件，使用快捷键 ctrl+s，保存后会自动加载。
:::

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>