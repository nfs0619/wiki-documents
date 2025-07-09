---
description: Grove ADC
title: Grove ADC
keywords:
- 开发教程
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_RP2040_Grove_ADC
last_update:
  date: 05/15/2025
  author: Thomas
---

# **概述**

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

SenseCAP Indicator 中有两个 Grove 接口用于连接 Grove 模块，一个是默认的 I2C 接口，另一个是可配置的数字/模拟引脚，它也可以用于 PWM 输出。两个 Grove 接口都可以用作数字接口，为开发者提供了更多的可能性。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/new-grove.png"/></div>

本仓库将介绍如何在 SenseCAP Indicator 上使用 Grove IO。这使您能够享受 [Grove 生态系统](https://www.seeedstudio.com/category/Grove-c-1003.html) 的即插即用功能，同时也可以使用 RP2040 兼容的 GPIO！

# **Grove(ADC)**

要将 Grove 可配置的 A/D 接口用作模拟接口，只需按如下方式定义：

```cpp
#define ADC1  27
```

## **示例代码**：

以下示例代码介绍了如何在 Grove ADC 接口中连接 [光线传感器](/Grove-Light_Sensor)。  
输出信号为模拟值，光线越亮，值越大。

```cpp
#include <Arduino.h>

#define ADC1  27

void setup() {
  Serial.begin(115200);
}

void loop() {
  int adc0_data = analogRead(ADC1); // 读取 ADC1 引脚的模拟值
  Serial.println(adc0_data); // 打印读取的模拟值
  delay(1000); // 延迟 1 秒
}
```