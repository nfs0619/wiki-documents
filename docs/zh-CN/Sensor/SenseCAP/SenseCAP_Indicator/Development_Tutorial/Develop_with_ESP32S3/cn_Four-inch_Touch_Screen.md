---
description: 4英寸触摸屏
title: 4英寸触摸屏
keywords:
- SenseCAP Indicator ESP32 开发教程
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_ESP32_4_inch_Touch_Screen
last_update:
  date: 05/15/2025
  author: Thomas
---

# **4英寸触摸屏**

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

SenseCAP Indicator 配备了一块4英寸触摸屏，可以自定义您需要的UI界面。
在本教程中，我们将指导您如何使用 LvGL（轻量且多功能的图形库）图形库来为 SenseCAP Indicator 开发界面。

**像素坐标系统**

数字二维图像由像素的行和列组成。图像中的像素通过指定像素所在的列和行来确定。简单来说，一个像素可以通过一对整数来标识，这对整数分别表示列号和行号。

通常情况下，列号从左上角开始向右编号，从零开始，但在某些情况下，也可以从其他角开始编号（通过设置旋转）。

**16位颜色模型**

像素也可以以颜色形式表示，因此了解一些颜色模型会更好。16位颜色模型非常适合MCU使用，因此这是一个不错的起点。该颜色模型由三个颜色组件组成——红色、绿色和蓝色。根据颜色模型，这三个颜色组件将存储到16位变量中。

| Bit  | 15   | 14   | 13   | 12   | 11   | 10   | 9   | 8   | 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
| ---  | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| **数据** | 红色   | 红色   | 红色   | 红色   | 红色   | 绿色   | 绿色   | 绿色   | 绿色   | 绿色   | 绿色   | 蓝色   | 蓝色   | 蓝色   | 蓝色   | 蓝色   |

**LCD屏幕初始化**

要在 SenseCAP Indicator 上初始化LCD屏幕：

```c
lcd init:
bsp_board_init()
```

# **技术支持**

别担心，我们为您提供支持！请访问我们的 [Seeed 官方 Discord 频道](https://discord.com/invite/QqMgVwHT3X) 提问！

如果您有大批量订单或定制需求，请联系 iot@seeed.cc
