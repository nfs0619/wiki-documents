---
description: 在 Seeed Studio XIAO SAMD21 上进行 SPI 通信
title: 在 Seeed Studio XIAO SAMD21 上进行 SPI 通信
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-SPI-Communication-Interface
last_update:
  date: 05/15/2025
  author: shuxu hu
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

### SPI 通信接口

### 硬件

**所需材料**

- [Seeed Studio XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) x 1

- [Grove-高精度压力传感器](https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html)

- Type-C 数据线 x1

**硬件连接**

- **步骤 1.** Grove-高精度压力传感器的 **CSK** 接到 Seeed Studio XIAO 的 **SCK**。

- **步骤 2.** 传感器的 **CS** 接到 Seeed Studio XIAO 的 **D3**。

- **步骤 3.** 传感器的 **SDO** 接到 Seeed Studio XIAO 的 **MISO**。

- **步骤 4.** 传感器的 **SDI** 接到 Seeed Studio XIAO 的 **MOSI**。

- **步骤 5.** 传感器的 **GND** 接到 Seeed Studio XIAO 的 **GND**。

- **步骤 6.** 传感器的 **3V3** 接到 Seeed Studio XIAO 的 **3.3V**。

- **步骤 7.** 使用 Type-C 数据线将 Seeed Studio XIAO 连接到电脑。

### 软件

:::note

如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从 Github 下载 [DPS310-Pressure-Sensor](https://github.com/Infineon/DPS310-Pressure-Sensor.git) 库。

- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) 来为 Arduino 安装库。

- **步骤 3.** 将以下代码复制到 Arduino IDE 并上传。

```c
#include <Dps310.h>

// Dps310 对象
Dps310 Dps310PressureSensor = Dps310();

void setup()
{
  // 从机选择线的引脚号
  // XMC2GO
  int16_t pin_cs = 3;
  // 对于 XMC 1100 Bootkit 和 XMC4700 Relax Kit，取消注释以下行
  // int16_t pin_cs = 10;

  Serial.begin(9600);
  while (!Serial);

  // 调用 begin 初始化 Dps310
  // 参数 pin_nr 是微控制器上 CS 引脚的编号
  Dps310PressureSensor.begin(SPI, pin_cs);

  // 温度测量速率（值范围为 0 到 7）
  // 2^temp_mr 每秒的温度测量结果数量
  int16_t temp_mr = 2;
  // 温度过采样率（值范围为 0 到 7）
  // 2^temp_osr 每个结果的内部温度测量次数
  // 较高的值会提高精度
  int16_t temp_osr = 2;
  // 压力测量速率（值范围为 0 到 7）
  // 2^prs_mr 每秒的压力测量结果数量
  int16_t prs_mr = 2;
  // 压力过采样率（值范围为 0 到 7）
  // 2^prs_osr 每个结果的内部压力测量次数
  // 较高的值会提高精度
  int16_t prs_osr = 2;
  // startMeasureBothCont 启用后台模式
  // 温度和压力会自动测量
  // 高精度和高测量速率不能同时使用。
  // 请参考数据手册（或通过试验）了解更多信息
  int16_t ret = Dps310PressureSensor.startMeasureBothCont(temp_mr, temp_osr, prs_mr, prs_osr);
  // 使用以下注释的行之一来仅测量温度或压力
  // int16_t ret = Dps310PressureSensor.startMeasureTempCont(temp_mr, temp_osr);
  // int16_t ret = Dps310PressureSensor.startMeasurePressureCont(prs_mr, prs_osr);

  if (ret != 0)
  {
    Serial.print("初始化失败！返回值 = ");
    Serial.println(ret);
  }
  else
  {
    Serial.println("初始化完成！");
  }
}

void loop()
{
  uint8_t pressureCount = 20;
  float pressure[pressureCount];
  uint8_t temperatureCount = 20;
  float temperature[temperatureCount];

  // 此函数将连续测量的结果写入作为参数传递的数组
  // 参数 temperatureCount 和 pressureCount 应在函数调用时保存数组 temperature 和 pressure 的大小
  // 函数结束后，temperatureCount 和 pressureCount 保存写入数组的值数量
  // 注意：Dps310 无法保存超过 32 个结果。当其结果缓冲区满时，它将不保存任何新的测量结果
  int16_t ret = Dps310PressureSensor.getContResults(temperature, temperatureCount, pressure, pressureCount);

  if (ret != 0)
  {
    Serial.println();
    Serial.println();
    Serial.print("失败！返回值 = ");
    Serial.println(ret);
  }
  else
  {
    Serial.println();
    Serial.println();
    Serial.print(temperatureCount);
    Serial.println(" 个温度值：");
    for (int16_t i = 0; i < temperatureCount; i++)
    {
      Serial.print(temperature[i]);
      Serial.println(" 摄氏度");
    }

    Serial.println();
    Serial.print(pressureCount);
    Serial.println(" 个压力值：");
    for (int16_t i = 0; i < pressureCount; i++)
    {
      Serial.print(pressure[i]);
      Serial.println(" 帕斯卡");
    }
  }

  // 等待一段时间，以便 Dps310 可以重新填充其缓冲区
  delay(10000);
}
```

- **步骤 4.** 点击 **工具** > **串口监视器**，或者同时按下 **Ctrl+Shift+M**，在成功上传后打开串口监视器，输出如下所示：

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/spi.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/spi.png" alt="pir" width={600} height="auto" /></p>