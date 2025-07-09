---
description: 基于 Edge Impulse 的运动识别
title: 基于 Edge Impulse 的运动识别
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAOEI
last_update:
  date: 05/15/2025
  author: Citric
---

# Seeed Studio XIAO nRF52840 Sense Edge Impulse 入门指南

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/50.jpg" style={{width:1000, height:'auto'}}/></div>

欢迎来到使用 Edge Impulse 和 Seeed Studio XIAO nRF52840 Sense 的快速入门教程！在本指南中，我们将探索如何使用板载 IMU 传感器检测人体运动并分类不同的动作。无论您是经验丰富的开发者还是刚刚入门，本教程都将为您提供开始使用 XIAO nRF52840 Sense 板上的 Edge Impulse 所需的知识和技能。那么，让我们开始吧！

<iframe width={560} height={315} src="https://www.youtube.com/embed/hLKKorpDlYw" title="YouTube 视频播放器" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## 入门

在本教程中，我们将展示如何利用 Seeed Studio XIAO nRF52840 Sense 上的加速度计结合 Edge Impulse 实现运动识别。我们提供的代码支持最新版本的 Seeed nRF52 Boards。

> 在嵌入式 AI 应用方面，我们强烈推荐使用 "Seeed nrf52 mbed-enabled Boards Library"。

### 硬件

在本教程中，我们需要准备以下材料：

- [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- Li-po 电池 (702025)
- [Grove - OLED 显示屏 0.66"](https://www.seeedstudio.com/Grove-OLED-Display-0-66-SSD1306-v1-0-p-5096.html)
- 杜邦线或 Grove 线
- 3D 打印外壳
- 光导塑料光纤

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/BLEmotion.png" alt="pir" width={600} height="auto" /></p>

**硬件设置**

- **步骤 1**. 使用电烙铁移除 Grove - OLED 显示屏 0.66" 上的 Grove 基座
- **步骤 2**. 使用剪线钳将杜邦线处理到约 3 厘米的长度，并在两端暴露约 2 毫米的内部线
- **步骤 3**. 将光纤穿过外壳前的小孔，并将末端放置在 LED 处

- **步骤 4**. 根据下图焊接 Seeed Studio XIAO nRF52840 Sense 与其他元件：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition2.png" alt="pir" width={500} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition3.png" alt="pir" width={500} height="auto" /></p>

:::note
    如果使用热熔胶加强焊点会更好。
:::

- **步骤 5**. 组装所有组件：

  1. 将光纤穿过外壳前的小孔
  2. 将屏幕安装到固定位置
  3. 将电池夹在 Seeed Studio XIAO nRF52840 和屏幕之间
  4. 小心处理电线
  5. 将光导塑料光纤的末端放置在 Seeed Studio XIAO nRF52840 的 RGB 灯处，并剪掉多余部分
  6. 组装外壳

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition4.png" alt="pir" width={400} height="auto" /></p>

组装完成后的样子：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition6.png" alt="pir" width={400} height="auto" /></p>

### 软件

以下是所需的库。强烈建议使用这里的代码检查硬件是否正常工作。如果您在安装库时遇到问题，请参考[这里](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/)。

- [Seeed_Arduino_LSM6DS3-master](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Seeed_Arduino_LSM6DS3-master.zip)
- [U8g2](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/U8g2.zip)

要在 Edge Impulse 中设置 Seeed Studio XIAO nRF52840 Sense，您需要安装以下软件：

1. [Node.js v12](https://nodejs.org/en/) 或更高版本。
2. [Arduino CLI](https://arduino.github.io/arduino-cli/latest/)
3. Edge Impulse CLI 和串口监视器。通过打开命令提示符或终端运行以下命令安装：

```sh
npm install -g edge-impulse-cli 
```

:::note
安装 CLI 时遇到问题？请查看 [安装和故障排除](https://docs.edgeimpulse.com/docs/cli-installation) 以获取更多参考。
:::

## 连接到 Edge Impulse

安装好所有软件后，现在是时候将开发板连接到 Edge Impulse。

- **步骤 1.** 使用 USB Type-C 数据线将 Seeed Studio XIAO nRF52840 Sense 连接到您的电脑。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/bletpyecconnect.png" alt="pir" width={600} height="auto" /></p>

- **步骤 2.** 在 [Edge Impulse](https://studio.edgeimpulse.com/) 中创建一个新项目

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition9.png" alt="pir" width={800} height="auto" /></p>

- **步骤 3.** 选择 "Accelerometer data" 并点击 "Let’s get started!"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition10.png" alt="pir" width={1000} height="auto" /></p>


## 数据采集与训练

:::note
在这一步中，我们尝试从 Seeed Studio XIAO nRF52840 Sense 板载 IMU 采集 "加速度计数据"，以构建数据集，然后使用 Edge Impulse 平台训练模型。
:::

- **步骤 4.** 将 "Accelerometer Raw Data" 示例代码上传到 Seeed Studio XIAO nRF52840 Sense。

[下载 Seeed_Arduino_LSM6DS3 库](https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3) 为 zip 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/LSM6DS3-github-zip.png" alt="pir" width={1000} height="auto" /></p>

打开 Arduino IDE，导航到 `Sketch > Include Library > Add .ZIP Library...`，然后打开下载的 zip 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

上传以下代码并打开 **串口监视器**。

```
// XIAO BLE Sense LSM6DS3 加速度计原始数据

#include "LSM6DS3.h"
#include "Wire.h"

// 创建 LSM6DS3 类的实例
LSM6DS3 myIMU(I2C_MODE, 0x6A);  // I2C 设备地址 0x6A

#define CONVERT_G_TO_MS2 9.80665f
#define FREQUENCY_HZ 50
#define INTERVAL_MS (1000 / (FREQUENCY_HZ + 1))

static unsigned long last_interval_ms = 0;

void setup() {
  Serial.begin(115200);
  while (!Serial)
    ;

  if (myIMU.begin() != 0) {
    Serial.println("设备错误");
  } else {
    Serial.println("设备正常！");
  }
}

void loop() {
  if (millis() > last_interval_ms + INTERVAL_MS) {
    last_interval_ms = millis();
    Serial.print(myIMU.readFloatAccelX() * CONVERT_G_TO_MS2, 4);
    Serial.print('\t');
    Serial.print(myIMU.readFloatAccelY() * CONVERT_G_TO_MS2, 4);
    Serial.print('\t');
    Serial.println(myIMU.readFloatAccelZ() * CONVERT_G_TO_MS2, 4);
  }
}
```

现在，你将在串口监视器上看到加速度计和陀螺仪的数据依次显示，如下所示：

<p style={{textAlign: 'center'}}><img src="https://workshop.makergram.com/assets/images/raawIMUSerial-095365f65dd0cde808620906ab5a7ab8.png" alt="IMU Raw" width={800} height="auto" /></p>

- **步骤 5.** 在你的 `终端` 或 `cmd` 或 `powershell` 中运行以下命令以启动它。

```
edge-impulse-data-forwarder
```

- **步骤 6.** 我们需要使用 CLI 将 Seeed Studio XIAO nRF52840 Sense 连接到 Edge Impulse。首先，登录你的账户并选择你的项目。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition11.png" alt="pir" width={800} height="auto" /></p>

为加速度计和设备命名。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition12.png" alt="pir" width={800} height="auto" /></p>

- **步骤 7.** 将 XIAO nRF52840 Sense 连接到 Edge Impulse。

进入 Edge Impulse 的 "数据采集" 页面，如果连接成功，结果应如下所示。你可以在页面右侧找到设备 "Seeed Studio XIAO nRF52840 Sense"。

- **步骤 8.** 选择传感器为 "3 轴"。将标签命名为 `up` 和 `down`，将采样长度（ms）修改为 20000，然后点击开始采样。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition13.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 9.** 上下摆动 Seeed Studio XIAO nRF52840 Sense 并保持运动 20 秒。你会发现采集结果如下所示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition14.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 10.** 点击右上角的原始数据并选择 "Split Sample" 来分割数据。点击 +Add Segment，然后点击图表。重复操作超过 20 次以添加分段。点击 Split，你将看到每段 1 秒的样本数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition30.png" alt="pir" width={600} height="auto" /></p>

- **步骤 11.** 重复 **步骤 8** 和 **步骤 9**，并用不同的名称标记数据以捕获不同的运动数据，例如 `left` 和 `right`，`clockwise`，`anticlockwise` 等。示例中提供的是分类上下、左右和圆周运动。你可以根据需要更改。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition16.png" alt="pir" width={1000} height="auto" /></p>

:::note
在步骤 9 中，分割时间为 1 秒，这意味着在步骤 8 中，你至少需要在 1 秒内完成一次上下摆动。否则，结果将不准确。同时，你可以根据自己的运动速度调整分割时间。
:::

## 构建机器学习模型

- **步骤 12.** 重新平衡数据集，点击 **Dashboard**，下拉页面找到 **Perform train** / **test split**。

点击 Perform train / test split，选择 Yes 并确认。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition17.png" alt="pir" width={800} height="auto" /></p>

- **步骤 13.** 创建 Impulse。

点击 **Create impulse** -> 添加一个处理块 -> 选择 **Spectral Analysis** -> 添加一个学习块 -> 选择 **Classification (Keras)** -> 保存 Impulse。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew1.png" alt="pir" width={800} height="auto" /></p>

- **步骤 14.** 光谱特征。

点击并设置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew2.png" alt="pir" width={800} height="auto" /></p>

点击 **Spectral features** -> 下拉页面点击 Save parameters -> 点击 **Generate features**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew3.png" alt="pir" width={800} height="auto" /></p>

输出页面应如下所示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew4.png" alt="pir" width={800} height="auto" /></p>

- **步骤 15.** 训练你的模型。

点击 NN Classifier -> 点击 Start training -> 选择 Unoptimized (float32)。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew5.png" alt="pir" width={800} height="auto" /></p>

:::note
训练模型的精度对最终结果非常重要。如果您的输出训练结果低于 65%，我们强烈建议您多次进行训练。
:::

## 部署到 Seeed Studio XIAO nRF52840 Sense

- **第 16 步.** 模型测试

点击 Model testing -> 点击 Classify all

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition23.png" alt="pir" width={800} height="auto" /></p>

:::note
如果您的精度较低，可以通过增加训练集和延长采样时间来检查您的数据集。
:::

- **第 17 步.** 构建 Arduino 库

点击 Deployment -> 点击 Arduino Library -> 点击 **Build** -> 下载 .ZIP 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew7.png" alt="pir" width={400} height="auto" /></p>

- **第 18 步.** .ZIP 文件的名称非常重要，默认情况下，它会设置为您的 Edge Impulse 项目名称。例如，这里的项目名称是 "XIAO-BLE-gestures_inferencing"。选择该文件并将其添加为 Arduino 库中的 ".ZIP 文件"。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition35.png" alt="pir" width={300} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition36.png" alt="pir" width={500} height="auto" /></p>

- **第 19 步.** 点击[这里](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEI.ino)下载代码。将头文件的名称更改为您自己的名称并上传。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition33.png" alt="pir" width={800} height="auto" /></p>

- **第 20 步.** 移动或保持 Seeed Studio XIAO nRF52840 Sense 并检查结果：

点击 Arduino 右上角的监视器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew15a.png" alt="pir" width={800} height="auto" /></p>

当您将 Seeed Studio XIAO nRF52840 Sense 向**左右**方向移动时：

监视器将输出如下内容：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew11a.png" alt="pir" width={500} height="auto" /></p>

输出显示如下：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew14a.png" alt="pir" width={300} height="auto" /></p>

当您将 Seeed Studio XIAO nRF52840 Sense 向**上下**方向移动时：

监视器将输出如下内容：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew9a.png" alt="pir" width={500} height="auto" /></p>

输出显示如下：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew12a.png" alt="pir" width={300} height="auto" /></p>

当您将 Seeed Studio XIAO nRF52840 Sense 保持在空闲状态时：

监视器将输出如下内容：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew10a.png" alt="pir" width={500} height="auto" /></p>

输出显示如下：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew13a.png" alt="pir" width={300} height="auto" /></p>

恭喜！您已完成该项目。我们鼓励您尝试更多方向并检查哪个方向会产生最佳输出。

## 资源

- [Seeed Studio XIAO nRF52840 外壳文件](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/xiao-case-pink.stl)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>