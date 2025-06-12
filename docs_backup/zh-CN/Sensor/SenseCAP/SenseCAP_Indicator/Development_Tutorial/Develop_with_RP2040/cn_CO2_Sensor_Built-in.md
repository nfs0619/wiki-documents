---
description: 内置 CO2 传感器
title: 内置 CO2 传感器
keywords:
- SenseCAP Indicator RP2040 开发教程
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_RP2040_CO2
last_update:
  date: 05/15/2025
  author: Thomas
---

# **CO2 传感器（内置）**

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

SenseCAP Indicator（D1S/D1Pro 版本）内置了 SCD41 传感器，可以检测范围为 0-40000ppm 的 CO2 值。  
CO2 含量是评估空气质量的重要标准，确保空气对所有呼吸者来说是安全和健康的。

空气中 CO2 的水平：
* 正常室外水平：350 - 450 ppm
* 可接受水平：< 600 ppm
* 感到闷热和有异味的水平：600 - 1000 ppm
* ASHRAE 和 OSHA 标准：1000 ppm
* 一般嗜睡：1000 - 2500 ppm
* 可能出现不良健康影响：2500 - 5000 ppm

**示例代码**：

此示例通过 IIC 接口读取内置 SCD41 CO2 传感器的值，并将其打印到串行监视器。

基于以下库：

[Sensirion Arduino Core library](https://github.com/Sensirion/arduino-core/)  
[SCD41 CO2 sensor library](https://github.com/Sensirion/arduino-i2c-scd4x)

**注意**：使用内置传感器时，必须启用传感器电源。

```cpp
#include <Arduino.h>
#include <Wire.h>
#include <SPI.h>
#include <SD.h>
#include <SensirionI2CScd4x.h>

SensirionI2CScd4x scd4x;
String SDDataString = "";

// 内置传感器需要通电
void sensor_power_on(void) {
  pinMode(18, OUTPUT);
  digitalWrite(18, HIGH);
}

void sensor_scd4x_init(void) {
  uint16_t error;
  char errorMessage[256];

  scd4x.begin(Wire);

  // 停止可能之前启动的测量
  error = scd4x.stopPeriodicMeasurement();
  if (error) {
    Serial.print("尝试执行 stopPeriodicMeasurement() 时出错：");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  }

  // 启动测量
  error = scd4x.startPeriodicMeasurement();
  if (error) {
    Serial.print("尝试执行 startPeriodicMeasurement() 时出错：");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  }
}

void sensor_scd4x_get(void) {
  uint16_t error;
  char errorMessage[256];

  Serial.print("传感器 scd4x: ");
  // 读取测量值
  uint16_t co2;
  float temperature;
  float humidity;
  error = scd4x.readMeasurement(co2, temperature, humidity);
  if (error) {
    Serial.print("尝试执行 readMeasurement() 时出错：");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  } else if (co2 == 0) {
    Serial.println("检测到无效样本，跳过。");
  } else {
    Serial.print("CO2:");
    Serial.print(co2);
    Serial.print("\t");
    Serial.print("温度:");
    Serial.print(temperature);
    Serial.print("\t");
    Serial.print("湿度:");
    Serial.println(humidity);
  }
}

int cnt = 0;
void setup() {
  Serial.begin(115200);

  sensor_power_on();

  Wire.setSDA(20);
  Wire.setSCL(21);
  Wire.begin();

  sensor_scd4x_init();
}

void loop() {
  delay(5000);
  sensor_scd4x_get();
}
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/scd4xsensor.png"/></div>

**注意：** 此内置 SCD41 传感器中的温度和湿度值并不能完全代表空气的温度和湿度。

# **技术支持**

别担心，我们为您提供支持！请访问我们的 [Seeed 官方 Discord 频道](https://discord.com/invite/QqMgVwHT3X) 提问！

如果您有大批量订单或定制需求，请联系 iot@seeed.cc