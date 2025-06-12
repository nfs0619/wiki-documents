---
description: Seeed Studio XIAO RP2040 与 PlatformIO
title: XIAO RP2040 与 PlatformIO
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2040/img/rp2040_with_platformio.webp
slug: /cn/xiao_rp2040_with_platform_io
last_update:
  date: 05/15/2025
  author: Hugo
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/rp2040_with_platformio.jpg" /></div>

## PlatformIO 介绍

PlatformIO 是一个集成了多种开发板的开发平台，并且具有良好的扩展性。如果平台没有您需要的开发板类型，您可以手动添加开发板类型。您在 Arduino 上编写的代码可以直接使用，只需添加相应的库。

在本教程中，我们将介绍如何在 PlatformIO 中安装并运行示例代码。

## 使用 PlatformIO 开发 XIAO RP2040

### 步骤 1. 在官方网站安装 [PlatformIO](https://platformio.org/platformio-ide)

如果您尚未安装 PlatformIO 软件，可以点击上方链接进行安装。

### 步骤 2. 在 PlatformIO 中创建任意项目

由于平台已经包含了我们的 XIAO ESP32S3 和 XIAO ESP32C3 开发板选项，我们可以选择其中一个来创建文件。当然，其他文件也可以，这并没有关系。项目名称也可以随意选择。

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
在此之前，我已经安装了 XIAO RP2040 的安装包，因此您可以看到操作二中的图片有 XIAO RP2040 的选项，但当您执行操作时可能没有该选项。
:::

### 步骤 3. 修改 platformio.ini 文件

当您成功创建 PlatformIO 文件后，左侧栏会出现许多文件。我们可以看到一个名为 platform.ini 的文件。接下来，我们需要替换其中的内容。

<table align="center">
  <tr>
      <th>操作三</th>
  </tr>
  <tr>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/esp32c6_platformio/2.png" /></div>
  </tr>
</table>

您需要复制以下代码并替换 platform.ini 文件中的内容。

```
[env:seeed_xiao_rp2040]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-rp2040
framework = arduino
```

:::tip
记得按 Ctrl + S 保存文件；保存后它会开始加载。
:::

### 步骤 4. 编译并烧录

<table align="center">  
  <tr>  
      <th>操作四</th>  
  </tr>  
  <tr>  
      <td>  
          <div align="center">  
              <img width="500" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/rp2040_platformio_complied.png" />  
          </div>  
      </td>  
  </tr>  
</table>  

最后，如果您看到与上图相同的结果，说明您已经成功添加了 XIAO RP2040 开发板。当您再次创建项目时，您会看到 XIAO RP2040 的选项可用。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>