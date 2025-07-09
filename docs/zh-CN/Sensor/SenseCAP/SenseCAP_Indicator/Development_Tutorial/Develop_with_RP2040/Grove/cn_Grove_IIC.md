---
description: Grove IIC
title: Grove IIC
keywords:
- 开发教程
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_RP2040_Grove_IIC
last_update:
  date: 05/15/2025
  author: Thomas
---

# **概述**

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

SenseCAP 指示器中有两个 Grove 接口用于连接 Grove 模块，一个是默认的 I2C 接口，另一个是可配置的数字/模拟引脚，它也可以用于 PWM 输出。两个 Grove 接口都可以用作数字接口，为开发者提供了更多可能性。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/grove.png"/></div>

本仓库将介绍如何在 SenseCAP 指示器上使用 Grove IOs。这使您能够享受 [Grove 生态系统](https://www.seeedstudio.com/category/Grove-c-1003.html) 的即插即用功能，同时也可以使用与 RP2040 兼容的 GPIO！

# **Grove(IIC)**

为了扩展更多应用，您可以使用 IIC 接口连接更多传感器。  
与内置传感器不同，您只需要定义 SCL 和 SDA 引脚连接。

## **示例代码**：

以下示例代码介绍了如何连接 [Grove TH 传感器](/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor)：

[AHT20 温湿度传感器库](https://github.com/Seeed-Studio/Seeed_Arduino_AHT20/)

```cpp
#include <Arduino.h>
#include <Wire.h>
#include "AHT20.h"

AHT20 AHT;

// 初始化 AHT20 传感器
void sensor_aht_init(void) {
  AHT.begin();
}

// 获取 AHT20 传感器数据
void sensor_aht_get(void) {
  float humi, temp;
  int ret = AHT.getSensor(&humi, &temp);
  if (ret)  // 获取数据成功
  {
    Serial.print("湿度: ");
    Serial.print(humi * 100);
    Serial.print("  温度: ");
    Serial.println(temp);
  } else  // 获取数据失败
  {
    Serial.println("从 AHT20 获取数据失败");
  }
}

void setup() {
  Serial.begin(115200);

  // 设置 SDA 和 SCL 引脚
  Wire.setSDA(20);
  Wire.setSCL(21);
  Wire.begin();

  // 初始化传感器
  sensor_aht_init();
}

void loop() {
  // 获取传感器数据
  sensor_aht_get();
  delay(5000);  // 每 5 秒获取一次数据
}
```