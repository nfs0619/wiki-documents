---
description: MicroSD
title: MicroSD
keywords:
- 开发教程
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_RP2040_MicroSD
last_update:
  date: 05/15/2025
  author: Thomas
---

# **MicroSD**

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

RP2040 提供了一组 GPIO 引脚，可以用于与外部 MicroSD 卡模块进行接口连接。

为了在 RP2040 上使用 MicroSD 卡，我们使用 SPI（串行外设接口）协议将 SD 卡模块连接到微控制器的 GPIO 引脚。这需要将 RP2040 上的以下引脚连接到 MicroSD 卡模块的对应引脚：

SPI SCK（例如 GPIO10）连接到 SD_SCK  
SPI TX（例如 GPIO11）连接到 SD_MOSI  
SPI RX（例如 GPIO12）连接到 SD_MISO  
一个单独的 GPIO 引脚（例如 GPIO13）连接到 SD 卡模块的 CS（芯片选择）引脚  

```cpp
 // 初始化 SD 卡的 SPI 接口
  const int chipSelect = 13;
  SPI1.setSCK(10);
  SPI1.setTX(11);
  SPI1.setRX(12);
```

一旦硬件连接建立后，可以使用软件库（例如 Arduino 的 SD 库）来读写 MicroSD 卡上的数据。SD 库提供了初始化 SD 卡、打开和关闭文件、读写文件数据以及执行其他文件系统操作的功能。

**注意**：RP2040 上 MicroSD 卡接口的性能将取决于 SD 卡的速度、接线质量和软件效率等因素，最大支持 32GB 的 SD 卡。

## **示例代码**

以下示例代码实现了读取 CO2 数据并将数据存储到 SD 卡中。

```cpp
#include <Arduino.h>
#include <Wire.h>
#include <SPI.h>
#include <SD.h>
#include <SensirionI2CScd4x.h>


SensirionI2CScd4x scd4x;
// 初始化一个字符串用于存储写入 SD 卡的数据
String SDDataString = "";

void sensor_power_on(void) {
  pinMode(18, OUTPUT);
  digitalWrite(18, HIGH);
}
// 函数：打开传感器电源
void sensor_scd4x_init(void) {
  uint16_t error;
  char errorMessage[256];

  scd4x.begin(Wire);

  // 停止可能之前启动的测量
  error = scd4x.stopPeriodicMeasurement();
  if (error) {
    Serial.print("执行 stopPeriodicMeasurement() 时出错: ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  }

  // 启动测量
  error = scd4x.startPeriodicMeasurement();
  if (error) {
    Serial.print("执行 startPeriodicMeasurement() 时出错: ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  }
}

void sensor_scd4x_get(void) {
  uint16_t error;
  char errorMessage[256];

  Serial.print("传感器 scd4x: ");
  // 读取测量数据
  uint16_t co2;
  float temperature;
  float humidity;
  error = scd4x.readMeasurement(co2, temperature, humidity);
  if (error) {
    Serial.print("执行 readMeasurement() 时出错: ");
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
  // 将数据添加到 SD 数据字符串中
  SDDataString += "scd4x,";
  if (error) {
    SDDataString += "-,-,-,";
  } else {
    SDDataString += String(co2);
    SDDataString += ',';
    SDDataString += String(temperature);
    SDDataString += ',';
    SDDataString += String(humidity);
    SDDataString += ',';
  }
}



int cnt = 0;
void setup() {
  Serial.begin(115200);

  sensor_power_on();
  Wire.setSDA(20);
  Wire.setSCL(21);
  Wire.begin();
 // 初始化 SD 卡的 SPI 接口
  const int chipSelect = 13;
  SPI1.setSCK(10);
  SPI1.setTX(11);
  SPI1.setRX(12);
// 检查 SD 卡是否初始化
  if (!SD.begin(chipSelect, 1000000, SPI1)) {
    Serial.println("卡初始化失败，或卡不存在");
  } else {
    Serial.println("卡已初始化。");
  }

  sensor_scd4x_init();
}

void loop() {

  delay(5000);
  // 清空 SD 数据字符串并在串口监视器中打印消息
  SDDataString = "";
  Serial.printf("\r\n\r\n--------- 开始测量 %d-------\r\n", cnt);

  SDDataString += String(cnt);
  SDDataString += ',';

  cnt++;
  sensor_scd4x_get();
  // 打开 datalog.csv 文件以进行写入
  File dataFile = SD.open("datalog.csv", FILE_WRITE);
  // 如果文件可用，则写入文件：
  if (dataFile) {
    dataFile.println(SDDataString);
    dataFile.close();
    // 同时打印到串口：
    Serial.print("SD 写入: ");
    Serial.println(SDDataString);
  } else {
    Serial.println("打开 datalog.txt 时出错");
  }

}
```

# **技术支持**

别担心，我们为您提供支持！请访问我们的 [Seeed 官方 Discord 频道](https://discord.com/invite/QqMgVwHT3X) 提问！

如果您有大批量订单或定制需求，请联系 iot@seeed.cc