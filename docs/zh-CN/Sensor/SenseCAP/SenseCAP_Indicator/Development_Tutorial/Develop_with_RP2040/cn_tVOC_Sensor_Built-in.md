---
description: 内置 tVOC 传感器
title: 内置 tVOC 传感器
keywords:
- 指示器开发教程 RP2040
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_RP2040_tVOC
last_update:
  date: 05/15/2025
  author: Thomas
---

# **tVOC 传感器（内置）**

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

SenseCAP 指示器内置的 SGP40 传感器是一款高质量、可靠的 TVOC 传感器，可用于广泛的应用场景来监测室内和室外空气质量。其测量范围为 1-500 VOC 指数点。

TVOC 是一组有机化学物质的总称，这些物质以气体形式从各种来源释放出来，包括建筑材料、清洁产品和个人护理产品。

**示例代码：**

此示例通过 IIC 接口读取内置 SGP40 TVOC 传感器的值，并将其打印到串行监视器。

基于以下库：

[Sensirion Arduino Core 库](https://github.com/Sensirion/arduino-core/)

[SGP40 TVOC 传感器库](https://github.com/Sensirion/arduino-i2c-sgp40)

[转换指数库：Sensirion Gas Index Algorithm](https://github.com/Sensirion/arduino-gas-index-algorithm)

注意：使用内置传感器时，必须启用传感器电源。

```cpp
#include <Arduino.h>
#include <SensirionI2CSgp40.h>
#include <VOCGasIndexAlgorithm.h>
#include <Wire.h>

SensirionI2CSgp40 sgp40;
VOCGasIndexAlgorithm voc_algorithm;


// 内置传感器需要上电
void sensor_power_on(void) {
  pinMode(18, OUTPUT);
  digitalWrite(18, HIGH);
}

/************************ sgp40 tvoc  ****************************/

void sensor_sgp40_init(void) {
  uint16_t error;
  char errorMessage[256];

  sgp40.begin(Wire);

  uint16_t serialNumber[3];
  uint8_t serialNumberSize = 3;

  error = sgp40.getSerialNumber(serialNumber, serialNumberSize);

  if (error) {
    Serial.print("尝试执行 getSerialNumber() 时出错：");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  } else {
    Serial.print("序列号：");
    Serial.print("0x");
    for (size_t i = 0; i < serialNumberSize; i++) {
      uint16_t value = serialNumber[i];
      Serial.print(value < 4096 ? "0" : "");
      Serial.print(value < 256 ? "0" : "");
      Serial.print(value < 16 ? "0" : "");
      Serial.print(value, HEX);
    }
    Serial.println();
  }

  uint16_t testResult;
  error = sgp40.executeSelfTest(testResult);
  if (error) {
    Serial.print("尝试执行 executeSelfTest() 时出错：");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  } else if (testResult != 0xD400) {
    Serial.print("executeSelfTest 测试失败，错误码：");
    Serial.println(testResult);
  }
}

void sensor_sgp40_get(void) {
  uint16_t error;
  char errorMessage[256];
  uint16_t defaultRh = 0x8000;
  uint16_t defaultT = 0x6666;
  uint16_t srawVoc = 0;

  Serial.print("传感器 sgp40：");

  error = sgp40.measureRawSignal(defaultRh, defaultT, srawVoc);
  if (error) {
    Serial.print("尝试执行 measureRawSignal() 时出错：");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  } else {
    Serial.print("SRAW_VOC：");
    Serial.print(srawVoc);

    int32_t voc_index = voc_algorithm.process(srawVoc);
    Serial.print(", VOC 指数：");
    Serial.println(voc_index);
  }
}

/************************ setup & loop ****************************/

void setup() {
  Serial.begin(115200);

  sensor_power_on();

  Wire.setSDA(20);
  Wire.setSCL(21);
  Wire.begin();

  sensor_sgp40_init();
}

void loop() {
  sensor_sgp40_get();
  delay(5000);
}

```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/tvoc.png"/></div>

"SRAW_VOC" 指的是传感器对 VOC 的原始信号输出，通常是与空气中 VOC 浓度成比例的电压或电阻测量值。

"VOC 指数" 是一个计算值，用于以更用户友好的格式表示空气中 VOC 的浓度。VOC 指数是一个数值，范围从 0 到 500，数值越高表示 VOC 浓度越高。

# **技术支持**

别担心，我们为您提供支持！请访问我们的 [Seeed 官方 Discord 频道](https://discord.com/invite/QqMgVwHT3X) 提问！

如果您有大批量订单或定制需求，请联系 iot@seeed.cc