---
description: 将 Seeed Studio XIAO SAMD21 连接到你的 Raspberry Pi
title: 将 Seeed Studio XIAO SAMD21 连接到你的 Raspberry Pi
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI
last_update:
  date: 05/15/2025
  author: shuxu hu
---

# 如何使用 Seeed Studio XIAO SAMD21 登录到你的 Raspberry Pi

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

有时在使用 Raspberry Pi 时，我们可能会遇到以下令人困扰的情况：没有多余的 HDMI 显示器，鼠标和键盘连接不方便，选择使用 USB 转串口适配器登录 Raspberry Pi，但成本太高。现在，有了 Seeed Studio XIAO SAMD21，所有问题都可以轻松解决。

## 硬件

## 所需材料

- [Seeed Studio XIAO SAMD21 x1](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [Raspberry PI Zero x1](https://www.seeedstudio.com/Raspberry-Pi-Zero-W-p-4257.html)

- [跳线 x3](https://www.seeedstudio.com/Breadboard-Jumper-Wire-Pack-200mm-100m-p-1032.html)

- [Type-C 数据线 x1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)

### 硬件连接

- **步骤 1.** 将 Raspberry Pi 的 **TX** 连接到 Seeed Studio XIAO SAMD21 的 **RX**

- **步骤 2.** 将 Raspberry Pi 的 **RX** 连接到 Seeed Studio XIAO SAMD21 的 **TX**

- **步骤 3.** 将 Raspberry Pi 的 **GND** 连接到 Seeed Studio XIAO SAMD21 的 **GND**

- **步骤 4.** 使用 Type-C 数据线将 Seeed Studio XIAO SAMD21 连接到电脑。

- **步骤 5.** 将 Raspberry Pi 连接到电源。

<!-- ![](https://files.seeedstudio.com/products/102010328/img/pin-with-marks.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102010328/img/pin-with-marks.png" alt="pir" width={600} height="auto" /></p>

## 软件

找到安装了 Raspberry Pi 官方系统的 TF 卡上的 `config.txt` 文件，并在文件末尾添加以下内容：

```c
enable_uart=1
```

### 配置 Seeed Studio XIAO SAMD21

- **步骤 1.** 打开 [Arduino IDE](https://www.arduino.cc/en/Main/Software)，并按照[此处](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software)的说明添加 Seeed Studio XIAO SAMD21。

- **步骤 2.** 将以下代码复制到 Arduino IDE 中，并将代码上传到 Seeed Studio XIAO SAMD21。

```cpp
uint32_t baud;
uint32_t old_baud;
void setup() {

  // 在此处放置初始化代码，仅运行一次：
  SerialUSB.begin(115200);
  baud = SerialUSB.baud();
  old_baud = baud;
  Serial1.begin(baud);
  while (!Serial);
  while (!SerialUSB);
}

void loop() {
  // 在此处放置主代码，重复运行：
  baud = SerialUSB.baud();
  if (baud != old_baud) {
    Serial1.begin(baud);
    while (!Serial);
    old_baud = baud;
    //     SerialUSB.println(baud);
  }
  if (SerialUSB.available() > 0)
  {
    char c = SerialUSB.read();
    Serial1.write(c);
  }
  if (Serial1.available() > 0) {
    char c = Serial1.read();
    SerialUSB.write(c);
  }
}
```

### 配置 Putty

- **步骤 1.** 通过[此链接](https://www.putty.org/)下载并安装 Putty。

- **步骤 2.** 将串口波特率设置为 115200（这是默认的串口波特率。如果与 Raspberry Pi 的串口波特率一致，则可以正确通信）。

<p align="center">
  <img src="https://files.seeedstudio.com/products/102010328/img/Putty%20config.png" />
</p>

- **步骤 3.** 然后你将在终端窗口中看到启动信息。

<p align="center">
  <img src="https://files.seeedstudio.com/products/102010328/img/Terminal.png" />
</p>

现在你可以通过 Seeed Studio XIAO SAMD21 访问 Raspberry Pi 了！

<p align="center">
  <img src="https://files.seeedstudio.com/products/102010328/img/new%20pins.gif" />
</p>