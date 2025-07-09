---
description: Seeed Studio XIAO MG24 使用 PlatformIO
title: XIAO MG24 使用 PlatformIO
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/mg24_platform/top_mg24_platform02.webp
slug: /cn/xiao_mg24_with_platform_io
last_update:
  date: 05/15/2025
  author: Jason
  sidebar_position: 5
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/mg24_platform/top_mg24_platform02.webp" /></div>

## PlatformIO 简介

PlatformIO 是一个集成了多种开发板的开发平台，具有良好的扩展性。如果平台中没有您需要的开发板类型，您可以手动添加开发板类型。在 Arduino 上编写的代码也可以在 PlatformIO 中使用，只需添加相应的库即可。

在本篇文档中，我们将介绍如何在 PlatformIO 中安装并运行示例代码。

## 使用 PlatformIO 开发 XIAO MG24

### 步骤 1：在官网安装 [PlatformIO](https://platformio.org/platformio-ide)

如果您尚未安装 PlatformIO 软件，可以点击上方链接进行安装。

### 步骤 2：在 PlatformIO 中创建任意项目

在这里，您可以选择任意一个开发版本来创建项目文件。本文以 XIAO ESP32 C3 为例。

<table align="center">
  <tr>
      <th>操作一</th>
      <th>操作二</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_platform/mg24patform2.jpg" style={{width:400, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_PlatformIO/mg24_platformIO.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
</table>

### 步骤 3：修改 platformio.ini 文件

当您成功创建 PlatformIO 文件后，左侧栏会出现许多文件。我们可以看到一个名为 `platform.ini` 的文件。接下来，我们需要替换其中的内容。

<table align="center">
  <tr>
      <th>操作三</th>
  </tr>
  <tr>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/mg24_platform/mg24platform.jpg"/></div>
  </tr>
</table>

您需要复制以下代码并替换 `platform.ini` 文件中的内容：

```
[env:seeed_xiao_mg24]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-mg24
framework = arduino
```

:::tip
记得保存文件，使用快捷键 `Ctrl+S`，保存后会自动加载。
:::

### 步骤 4：编译和烧录

**接下来我们使用以下代码进行编译和烧录：**

```cpp
#include <Arduino.h>
void setup() {
  // 将数字引脚 LED_BUILTIN 初始化为输出模式
  pinMode(LED_BUILTIN, OUTPUT);
}

// 循环函数会一直重复运行
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);  // 打开 LED（HIGH 表示高电平）
  delay(1000);                      // 等待一秒
  digitalWrite(LED_BUILTIN, LOW);   // 关闭 LED（LOW 表示低电平）
  delay(1000);                      // 等待一秒
}
```

<table align="center">
  <tr>
      <th>操作四</th>
  </tr>
  <tr>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/mg24_platform/mg.png" /></div>
  </tr>
</table>

当显示编译成功后，我们就可以将代码烧录到 XIAO MG24 上。

### 步骤 5：查看结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/00.gif" style={{width:500, height:'auto'}}/></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您在使用我们的产品时获得顺畅的体验。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>