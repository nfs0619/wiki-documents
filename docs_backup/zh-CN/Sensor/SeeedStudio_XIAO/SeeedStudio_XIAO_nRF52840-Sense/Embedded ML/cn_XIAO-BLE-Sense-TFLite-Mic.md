---
description: 语音识别
title: 语音识别
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-BLE-Sense-TFLite-Mic
last_update:
  date: 05/15/2025
  author: shuxu hu
---

# 在 Seeed Studio XIAO nRF52840 Sense 上实现语音识别

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/TFLite-mic-thumb.png" alt="pir" width={1000} height="auto" /></p>

本教程将演示如何在 Seeed Studio XIAO nRF52840 Sense 上使用 TensorFlow Lite，并通过板载麦克风实现语音识别。

> 在嵌入式 AI 应用中，我们强烈推荐使用 "Seeed nrf52 mbed-enabled Boards Library"。

## 软件设置

请确保首先按照 ["Getting Started with Seeed Studio XIAO nRF52840 (Sense)"](https://wiki.seeedstudio.com/XIAO_BLE/) 教程完成硬件和软件的初始设置。

现在让我们继续完成其余的软件设置。

- **步骤 1**. 下载 [tflite-micro-arduino-examples 库](https://github.com/lakshanthad/tflite-micro-arduino-examples) 的 zip 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/tflite-mic-github.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 2**. 打开 Arduino IDE，导航到 `Sketch > Include Library > Add .ZIP Library...`，然后打开下载的 zip 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

## 训练数据并生成 TensorFlow Lite 模型

现在我们将使用 Google Colab 笔记本进行数据训练并生成一个 TensorFlow Lite 模型。

- **步骤 1.** 打开 [这个 Python 笔记本](https://colab.research.google.com/github/tensorflow/tflite-micro/blob/main/tensorflow/lite/micro/examples/micro_speech/train/train_micro_speech_model.ipynb)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/TF-notebook-mic.jpg" alt="pir" width={1000} height="auto" /></p>

默认情况下，它会加载 [这个数据集](https://storage.googleapis.com/download.tensorflow.org/data/speech_commands_v0.02.tar.gz)，可以识别以下单词：**"yes", "no", "up", "down", "left", "right", "on", "off", "stop", "go", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "bed", "bird", "cat", "dog", "happy", "house", "marvin", "sheila", "tree", "wow"**

- **步骤 2.** 在 **Configure Defaults** 栏目下，根据您希望模型识别的单词更改 **WANTED_WORDS** 参数。您可以从以下单词中选择：**"yes", "no", "up", "down", "left", "right", "on", "off", "stop", "go", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "bed", "bird", "cat", "dog", "happy", "house", "marvin", "sheila", "tree", "wow"**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/TF-notebook-wanted-words.png" alt="pir" width={600} height="auto" /></p>

**注意：** 在本示例中，选择了单词 **yes, no, up, down**

- **步骤 3.** 导航到 `Runtime > Run all` 以运行所有代码单元

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/micro-speech-run-all.png" alt="pir" width={450} height="auto" /></p>

- **步骤 4.** 对弹出的错误消息点击 **Run anyway**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/run-anyway.png" alt="pir" width={600} height="auto" /></p>

**注意：** 此过程大约需要 2 小时完成

- **步骤 5.** 一旦所有代码单元执行完毕，导航到左上角的 **files** 标签，您会在 **models** 文件夹下找到一个新生成的 **model.cc** 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/model-cc.png" alt="pir" width={300} height="auto" /></p>

**注意：** 如果看不到上述 **model.cc** 文件，请刷新页面。

- **步骤 6.** 右键点击文件并选择 **Download** 将文件下载到您的电脑

## 推理

现在我们将使用下载的 TensorFlow Lite 模型文件 **(model.cc)**，通过 Seeed Studio XIAO nRF52840 Sense 的麦克风识别不同的单词。

- **步骤 1.** 导航到 **tflite-micro-arduino-examples** 库的路径（通常在 **Documents > Arduino > libraries > tflite-micro-arduino-examples**），访问 **examples > micro_speech** 并打开 **micro_features_model.cpp**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/micro-features-model-open.png" alt="pir" width={550} height="auto" /></p>

- **步骤 2.** 用 **model.cc** 文件中的新值替换 **const unsigned char g_model[] DATA_ALIGN_ATTRIBUTE = {** 下的值

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/model-values.png" alt="pir" width={550} height="auto" /></p>

- **步骤 3.** 根据 **model.cc** 中的值更改 **g_model_len**。这里我们得到 **26720**

```cpp
const int g_model_len = 26720;
```

- **步骤 4.** 打开 **micro_features_micro_model_settings.cpp** 文件夹中的 **micro_speech** 文件夹，并添加我们在训练过程中定义的所有单词。这里我们使用了 **yes, no, up, down**

```cpp
#include "micro_features_micro_model_settings.h"

const char* kCategoryLabels[kCategoryCount] = {
    "silence",
    "unknown",
    "yes",
    "no",
    "up",
    "down",
};
```

- **步骤 5.** 打开 **micro_features_micro_model_settings.h** 文件夹中的 **micro_speech** 文件夹，并根据定义的类别数量更改 **constexpr int kCategoryCount**。这里我们有 6 个类别

```cpp
constexpr int kCategoryCount = 6;
```

- **步骤 6.** 打开 **micro_speech.ino** 文件夹中的 **micro_speech** 文件夹，并将代码上传到 Seeed Studio XIAO nRF52840 Sense

- **步骤 7.** 打开 **串口监视器窗口**，大声说出我们之前定义的单词。您会看到串口监视器在识别后输出正确的单词。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/mic-capture.png" alt="pir" width={300} height="auto" /></p>


## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时拥有顺畅的体验。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>