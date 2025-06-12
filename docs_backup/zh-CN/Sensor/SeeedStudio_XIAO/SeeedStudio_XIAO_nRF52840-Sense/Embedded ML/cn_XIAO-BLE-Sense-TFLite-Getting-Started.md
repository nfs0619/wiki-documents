---
description: 入门指南
title: 在 Seeed Studio XIAO nRF52840 Sense 上使用 TensorFlow Lite 入门
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-BLE-Sense-TFLite-Getting-Started
last_update:
  date: 05/15/2025
  author: shuxu hu
---

# 在 Seeed Studio XIAO nRF52840 Sense 上使用 TensorFlow Lite 入门

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite-thumb.jpg" alt="pir" width={1000} height="auto" /></p>

本教程将演示如何在 Seeed Studio XIAO nRF52840 Sense 上使用 TensorFlow Lite，并通过板载加速度计检测诸如挥拳和弯曲等手势。这里的数据训练将在设备本身上完成。

> 对于嵌入式 AI 应用，我们强烈推荐使用 "Seeed nrf52 mbed-enabled Boards Library"。

## 软件设置

请确保首先按照 ["Getting Started with Seeed Studio XIAO nRF52840 (Sense)"](https://wiki.seeedstudio.com/XIAO-BLE-Sense-Getting-Started) 教程完成初始硬件和软件设置。

现在让我们继续完成其余的软件设置。

- **步骤 1**. 下载 [Seeed_Arduino_LSM6DS3 库](https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3) 的 zip 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/LSM6DS3-github-zip.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 2**. 下载 [tflite-micro-arduino-examples 库](https://github.com/lakshanthad/tflite-micro-arduino-examples) 的 zip 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/tflite-micro-github.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 3**. 打开 Arduino IDE，导航到 `Sketch > Include Library > Add .ZIP Library...`，依次打开下载的两个 zip 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

- **步骤 4.** 导航到 `File > Examples > Seeeed Arduino LSM6DS3 > IMU_Capture` 打开 **IMU_Capture.ino**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/select-IMUCapture-2.png" alt="pir" width={500} height="auto" /></p>

- **步骤 5.** 上传代码并打开 **串口监视器**

**注意：** 上传代码后，代码不会自动执行，直到您点击 Arduino 窗口右上角的 **串口监视器**。

## 数据训练

### 挥拳动作

打开串口监视器后，开始为挥拳动作训练数据。

- **步骤 1.** 将 Seeed Studio XIAO nRF52840 Sense 放在手掌中，开始向前挥拳，您会在串口监视器上看到一些数据打印出来

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/train-punch.gif" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/punch-serial.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 2.** 重复挥拳动作大约 10 次，您会看到每次挥拳后生成的新数据

- **步骤 3.** 将串口监视器的完整输出复制并粘贴到一个文本文件中，并将该文件保存为 **punch.csv**

**注意：** 请复制第一行内容，该行包含 **aX,aY,aZ,gX,gY,gZ**

### 弯曲动作

- **步骤 1.** 重新连接 USB 电缆到 Seeed Studio XIAO nRF52840 Sense，打开串口监视器，将 Seeed Studio XIAO nRF52840 Sense 放在手掌中，开始向内弯曲，您会在串口监视器上看到一些数据打印出来

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/train-flex.gif" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/flex-serial.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 2.** 重复弯曲动作大约 10 次，您会看到每次弯曲后生成的新数据

- **步骤 3.** 将串口监视器的完整输出复制并粘贴到一个文本文件中，并将该文件保存为 **flex.csv**

**注意：** 请复制第一行内容，该行包含 **aX,aY,aZ,gX,gY,gZ**

## 生成 TensorFlow Lite 模型文件

现在我们将使用之前创建的 **punch.csv** 和 **flex.csv** 文件生成一个 TensorFlow Lite 模型文件 **(model.h)**。

- **步骤 1.** 打开 [这个 Python notebook](https://colab.research.google.com/github/arduino/ArduinoTensorFlowLiteTutorials/blob/master/GestureToEmoji/arduino_tinyml_workshop.ipynb)，它将帮助生成我们需要的 model.h 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TF-notebook-1.png" alt="pir" width={7500} height="auto" /></p>

- **步骤 2.** 导航到左侧导航面板的文件选项卡，将 **punch.csv** 和 **flex.csv** 文件拖放到其中

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/drop-punch-flex.png" alt="pir" width={350} height="auto" /></p>

- **步骤 3.** 在 **Setup Python Environment** 部分，将代码从 **pip install tensorflow==2.0.0-rc1** 修改为 **pip install tensorflow**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/tensorflow-install.png" alt="pir" width={550} height="auto" /></p>

- **步骤 4.** 导航到 `Runtime > Run all` 运行所有代码单元

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/run-all.png" alt="pir" width={450} height="auto" /></p>

- **步骤 5.** 对弹出的错误消息点击 **Run anyway**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/run-anyway.png" alt="pir" width={600} height="auto" /></p>

- **步骤 6.** 一旦所有代码单元执行完毕，您将在之前看到的 **files** 选项卡下找到一个新的 **model.h** 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/model.h.png" alt="pir" width={350} height="auto" /></p>

**注意：** 如果您无法看到上方的 **model.h** 文件，请刷新页面。

- **步骤 7.** 右键点击文件并选择 **下载**，将文件下载到您的电脑。

## 推理

现在我们将使用下载的 TensorFlow Lite 模型文件 **(model.h)** 来识别 Seeed Studio XIAO nRF52840 Sense 的挥拳和弯曲动作。

- **步骤 1.** 导航到 **Seeed_Arduino_LSM6DS3** 库的路径（通常位于 **Documents > Arduino > libraries > Seeed_Arduino_LSM6DS3**），然后访问 **examples > IMU_Classifier**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/file-explorer-imu.png" alt="pir" width={650} height="auto" /></p>

- **步骤 2.** 用之前下载的 **model.h** 文件替换原有文件。

- **步骤 3.** 双击 **IMU_Classifier.ino** 并将代码上传到 Seeed Studio XIAO nRF52840 Sense。

### 挥拳动作

打开 **串口监视器** 并执行一个挥拳动作。您将看到在 **punch** 旁边的结果接近 **1**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/punch-result.png" alt="pir" width={300} height="auto" /></p>

### 弯曲动作

执行一个弯曲动作。您将看到在 **flex** 旁边的结果接近 **1**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/flex-result.png" alt="pir" width={300} height="auto" /></p>

## 资源

- **[网页]** [TensorFlow Lite 文档](https://www.tensorflow.org/lite/guide)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供了多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>