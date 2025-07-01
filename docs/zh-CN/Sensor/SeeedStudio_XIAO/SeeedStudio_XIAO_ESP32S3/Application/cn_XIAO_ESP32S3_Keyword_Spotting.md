---
description: 我们继续探索 Seeed XIAO 系列的新型微型设备 ESP32S3 Sense 上的机器学习。
title: XIAO ESP32S3 Sense 关键词识别
keywords:
- 语音
- 关键词
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao_esp32s3_keyword_spotting
last_update:
  date: 05/15/2025
  author: Citric
---

# XIAO ESP32S3 Sense 与 Edge Impulse 关键词识别

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/1.png" style={{width:1000, height:'auto'}}/></div>

本教程将指导您使用 TinyML 在 XIAO ESP32S3 Sense 微控制器板上实现一个关键词识别（KWS）系统，并借助 Edge Impulse 进行数据采集和模型训练。关键词识别是语音识别系统的核心功能，通过 TinyML 的强大功能，可以在小型、低功耗设备上实现。让我们使用 Edge Impulse 和 XIAO ESP32S3 Sense 构建自己的关键词识别系统吧！

## 入门

在开始这个项目之前，请按照以下准备步骤准备好项目所需的软件和硬件。

### 硬件

为了成功完成此项目，您需要准备以下硬件：

- XIAO ESP32S3 Sense
- microSD 卡（不超过 32GB）
- microSD 卡读卡器
- USB-C 数据线

通过为 XIAO ESP32S3 Sense 安装扩展板，您可以使用扩展板上的麦克风。

安装扩展板非常简单，您只需将扩展板上的连接器与 XIAO ESP32S3 上的 B2B 连接器对齐，用力按下并听到“咔哒”一声，安装即完成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

XIAO ESP32S3 Sense 支持最大 **32GB** 的 microSD 卡，因此如果您准备为 XIAO 购买 microSD 卡，请参考此规格。在使用 microSD 卡之前，请将其格式化为 **FAT32** 格式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/67.png" style={{width:250, height:'auto'}}/></div>

格式化后，您可以将 microSD 卡插入 microSD 卡槽。请注意插入方向，带有金手指的一侧应朝内。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/66.jpg" style={{width:500, height:'auto'}}/></div>

### 软件

如果这是您第一次使用 XIAO ESP32S3 Sense，那么在开始之前，我们建议您阅读以下两个 Wiki 来了解如何使用它。

- [Seeed Studio XIAO ESP32S3 (Sense) 入门指南](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/)
- [Seeed Studio XIAO ESP32S3 麦克风使用指南](https://wiki.seeedstudio.com/xiao_esp32s3_sense_mic/)

## 采集（离线）音频数据

### 第一步：将录制的声音样本保存为 .wav 音频文件到 microSD 卡。

让我们使用板载 SD 卡读卡器保存 .wav 音频文件，首先需要启用 XIAO 的 PSRAM。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/94.png" style={{width:600, height:'auto'}}/></div>

然后编译并上传以下程序到 XIAO ESP32S3。

:::tip
此代码使用 Seeed XIAO ESP32S3 Sense 板的 I2S 接口录制音频，将录音保存为 SD 卡上的 .wav 文件，并允许通过串行监视器发送命令来控制录音过程。音频文件的名称是可自定义的（应为训练所用的类别标签），可以进行多次录音，每次录音都会保存为一个新文件。代码还包括增加录音音量的功能。
:::

<details>

<summary>如果您的 ESP32 版本是 2.0.x，请点击此处查看完整程序</summary>

```cpp
/* 
 * WAV Recorder for Seeed XIAO ESP32S3 Sense 
 * 
 * NOTE: To execute this code, we will need to use the PSRAM 
 * function of the ESP-32 chip, so please turn it on before uploading.
 * Tools>PSRAM: "OPI PSRAM"
 * 
 * Adapted by M.Rovai @May23 from original Seeed code
*/

#include <I2S.h>
#include "FS.h"
#include "SD.h"
#include "SPI.h"

// make changes as needed
#define RECORD_TIME   10  // seconds, The maximum value is 240
#define WAV_FILE_NAME "data"

// do not change for best
#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16
#define WAV_HEADER_SIZE 44
#define VOLUME_GAIN 2

int fileNumber = 1;
String baseFileName;
bool isRecording = false;

void setup() {
  Serial.begin(115200);
  while (!Serial) ;
  
  I2S.setAllPins(-1, 42, 41, -1, -1);
  if (!I2S.begin(PDM_MONO_MODE, SAMPLE_RATE, SAMPLE_BITS)) {
    Serial.println("Failed to initialize I2S!");
    while (1) ;
  }
  if(!SD.begin(21)){
    Serial.println("Failed to mount SD Card!");
    while (1) ;
  }
  Serial.printf("Enter with the label name\n");
  //record_wav();
}

void loop() {
  if (Serial.available() > 0) {
    String command = Serial.readStringUntil('\n');
    command.trim();
    if (command == "rec") {
      isRecording = true;
    } else {
      baseFileName = command;
      fileNumber = 1; // reset file number each time a new base file name is set
      Serial.printf("Send rec for starting recording label \n");
    }
  }
  if (isRecording && baseFileName != "") {
    String fileName = "/" + baseFileName + "." + String(fileNumber) + ".wav";
    fileNumber++;
    record_wav(fileName);
    delay(1000); // delay to avoid recording multiple files at once
    isRecording = false;
  }
}

void record_wav(String fileName)
{
  uint32_t sample_size = 0;
  uint32_t record_size = (SAMPLE_RATE * SAMPLE_BITS / 8) * RECORD_TIME;
  uint8_t *rec_buffer = NULL;
  Serial.printf("Start recording ...\n");
   
  File file = SD.open(fileName.c_str(), FILE_WRITE);
  // Write the header to the WAV file
  uint8_t wav_header[WAV_HEADER_SIZE];
  generate_wav_header(wav_header, record_size, SAMPLE_RATE);
  file.write(wav_header, WAV_HEADER_SIZE);

  // PSRAM malloc for recording
  rec_buffer = (uint8_t *)ps_malloc(record_size);
  if (rec_buffer == NULL) {
    Serial.printf("malloc failed!\n");
    while(1) ;
  }
  Serial.printf("Buffer: %d bytes\n", ESP.getPsramSize() - ESP.getFreePsram());

  // Start recording
  esp_i2s::i2s_read(esp_i2s::I2S_NUM_0, rec_buffer, record_size, &sample_size, portMAX_DELAY);
  if (sample_size == 0) {
    Serial.printf("Record Failed!\n");
  } else {
    Serial.printf("Record %d bytes\n", sample_size);
  }

  // Increase volume
  for (uint32_t i = 0; i < sample_size; i += SAMPLE_BITS/8) {
    (*(uint16_t *)(rec_buffer+i)) <<= VOLUME_GAIN;
  }

  // Write data to the WAV file
  Serial.printf("Writing to the file ...\n");
  if (file.write(rec_buffer, record_size) != record_size)
    Serial.printf("Write file Failed!\n");

  free(rec_buffer);
  file.close();
  Serial.printf("Recording complete: \n");
  Serial.printf("Send rec for a new sample or enter a new label\n\n");
}

void generate_wav_header(uint8_t *wav_header, uint32_t wav_size, uint32_t sample_rate)
{
  // See this for reference: http://soundfile.sapp.org/doc/WaveFormat/
  uint32_t file_size = wav_size + WAV_HEADER_SIZE - 8;
  uint32_t byte_rate = SAMPLE_RATE * SAMPLE_BITS / 8;
  const uint8_t set_wav_header[] = {
    'R', 'I', 'F', 'F', // ChunkID
    file_size, file_size >> 8, file_size >> 16, file_size >> 24, // ChunkSize
    'W', 'A', 'V', 'E', // Format
    'f', 'm', 't', ' ', // Subchunk1ID
    0x10, 0x00, 0x00, 0x00, // Subchunk1Size (16 for PCM)
    0x01, 0x00, // AudioFormat (1 for PCM)
    0x01, 0x00, // NumChannels (1 channel)
    sample_rate, sample_rate >> 8, sample_rate >> 16, sample_rate >> 24, // SampleRate
    byte_rate, byte_rate >> 8, byte_rate >> 16, byte_rate >> 24, // ByteRate
    0x02, 0x00, // BlockAlign
    0x10, 0x00, // BitsPerSample (16 bits)
    'd', 'a', 't', 'a', // Subchunk2ID
    wav_size, wav_size >> 8, wav_size >> 16, wav_size >> 24, // Subchunk2Size
  };
  memcpy(wav_header, set_wav_header, sizeof(set_wav_header));
}
```

</details>

<details>

<summary>如果您的 ESP32 版本是 3.0.x，请点击这里查看完整程序</summary>

```cpp
/* 
 * WAV 录音机适用于 Seeed XIAO ESP32S3 Sense 
 * 
 * 注意：要执行此代码，我们需要使用 ESP-32 芯片的 PSRAM 功能，因此请在上传之前启用它。
 * 工具>PSRAM: "OPI PSRAM"
 * 
 * 由 M.Rovai 于 2023年5月从 Seeed 原始代码改编
*/

#include <ESP_I2S.h>
#include "FS.h"
#include "SD.h"
#include "SPI.h"

// 根据需要进行更改
#define RECORD_TIME   10  // 秒，最大值为 240
#define WAV_FILE_NAME "data"

// 为了最佳效果，请勿更改
#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16
#define WAV_HEADER_SIZE 44
#define VOLUME_GAIN 2

I2SClass I2S;
String baseFileName;

int fileNumber = 1;
bool isRecording = false;

void setup() {
  Serial.begin(115200);
  while (!Serial) ;
  
  // 设置 42 PDM 时钟和 41 PDM 数据引脚
  I2S.setPinsPdmRx(42, 41);
  if (!I2S.begin(I2S_MODE_PDM_RX, 16000, I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_MONO)) {
    Serial.println("I2S 初始化失败！");
    while (1) ;
  }
  if(!SD.begin(21)){
    Serial.println("SD 卡挂载失败！");
    while (1) ;
  }
  Serial.printf("请输入标签名称\n");
  //record_wav();
}

void loop() {
  if (Serial.available() > 0) {
    String command = Serial.readStringUntil('\n');
    command.trim();
    if (command == "rec") {
      isRecording = true;
    } else {
      baseFileName = command;
      fileNumber = 1; // 每次设置新基础文件名时重置文件编号
      Serial.printf("发送 rec 开始录制标签 \n");
    }
  }
  if (isRecording && baseFileName != "") {
    String fileName = "/" + baseFileName + "." + String(fileNumber) + ".wav";
    fileNumber++;
    record_wav(fileName);
    delay(1000); // 延迟以避免一次录制多个文件
    isRecording = false;
  }
}

void record_wav(String fileName)
{
  uint32_t sample_size = 0;
  uint32_t record_size = (SAMPLE_RATE * SAMPLE_BITS / 8) * RECORD_TIME;
  uint8_t *rec_buffer = NULL;
  Serial.printf("开始录制...\n");
   
  File file = SD.open(fileName.c_str(), FILE_WRITE);
  // 将头文件写入 WAV 文件
  uint8_t wav_header[WAV_HEADER_SIZE];
  generate_wav_header(wav_header, record_size, SAMPLE_RATE);
  file.write(wav_header, WAV_HEADER_SIZE);

  // PSRAM 分配内存用于录制
  rec_buffer = (uint8_t *)ps_malloc(record_size);
  if (rec_buffer == NULL) {
    Serial.printf("内存分配失败！\n");
    while(1) ;
  }
  Serial.printf("缓冲区: %d 字节\n", ESP.getPsramSize() - ESP.getFreePsram());

  // 开始录制
  esp_i2s::i2s_read(esp_i2s::I2S_NUM_0, rec_buffer, record_size, &sample_size, portMAX_DELAY);
  if (sample_size == 0) {
    Serial.printf("录制失败！\n");
  } else {
    Serial.printf("录制 %d 字节\n", sample_size);
  }

  // 增加音量
  for (uint32_t i = 0; i < sample_size; i += SAMPLE_BITS/8) {
    (*(uint16_t *)(rec_buffer+i)) <<= VOLUME_GAIN;
  }

  // 将数据写入 WAV 文件
  Serial.printf("写入文件...\n");
  if (file.write(rec_buffer, record_size) != record_size)
    Serial.printf("写入文件失败！\n");

  free(rec_buffer);
  file.close();
  Serial.printf("录制完成：\n");
  Serial.printf("发送 rec 录制新样本或输入新标签\n\n");
}

void generate_wav_header(uint8_t *wav_header, uint32_t wav_size, uint32_t sample_rate)
{
  // 参考此文档: http://soundfile.sapp.org/doc/WaveFormat/
  uint32_t file_size = wav_size + WAV_HEADER_SIZE - 8;
  uint32_t byte_rate = SAMPLE_RATE * SAMPLE_BITS / 8;
  const uint8_t set_wav_header[] = {
    'R', 'I', 'F', 'F', // ChunkID
    file_size, file_size >> 8, file_size >> 16, file_size >> 24, // ChunkSize
    'W', 'A', 'V', 'E', // Format
    'f', 'm', 't', ' ', // Subchunk1ID
    0x10, 0x00, 0x00, 0x00, // Subchunk1Size (16 for PCM)
    0x01, 0x00, // AudioFormat (1 for PCM)
    0x01, 0x00, // NumChannels (1 channel)
    sample_rate, sample_rate >> 8, sample_rate >> 16, sample_rate >> 24, // SampleRate
    byte_rate, byte_rate >> 8, byte_rate >> 16, byte_rate >> 24, // ByteRate
    0x02, 0x00, // BlockAlign
    0x10, 0x00, // BitsPerSample (16 bits)
    'd', 'a', 't', 'a', // Subchunk2ID
    wav_size, wav_size >> 8, wav_size >> 16, wav_size >> 24, // Subchunk2Size
  };
  memcpy(wav_header, set_wav_header, sizeof(set_wav_header));
}
```

</details>

现在，将代码上传到 XIAO 并从关键词（如 **hello** 和 **stop**）中获取样本。您还可以捕获噪声和其他单词。串口监视器会提示您输入要录制的标签。

发送标签（例如，**hello**）。程序会等待另一个命令：**rec**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/2.png" style={{width:600, height:'auto'}}/></div>

程序会在每次发送命令 **rec** 时开始录制新样本。文件将保存为 hello.1.wav、hello.2.wav、hello.3.wav 等，直到发送新标签（例如，**stop**）。在这种情况下，您需要为每个新样本发送命令 **rec**，这些样本将保存为 stop.1.wav、stop.2.wav、stop.3.wav 等。

最终，我们将在 SD 卡上获得保存的文件。

:::note
我们建议为每个标签样本录制足够的声音。您可以在每次 10 秒的录制会话中多次重复您的关键词，我们将在后续步骤中对样本进行分段。但关键词之间需要有一定的间隔。
:::

## 训练数据采集

### 步骤 2. 上传收集的声音数据

当原始数据集被定义并收集后，我们应该在 [Edge Impulse](https://edgeimpulse.com/) 上启动一个新项目。一旦项目创建完成，在 **Data Acquisition** 部分选择 **Upload Existing Data** 工具。选择要上传的文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/3.png" style={{width:1000, height:'auto'}}/></div>

并将它们上传到 Studio（您可以自动将数据分为训练/测试集）。对所有类别和所有原始数据重复此操作。

数据集中所有数据的长度为 1 秒，但在前一部分中录制的样本长度为 10 秒，因此必须将其分割为 1 秒的样本以保持兼容性。点击样本名称后的三个点并选择 **Split sample**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/5.png" style={{width:600, height:'auto'}}/></div>

进入工具后，将数据分割为1秒的记录。如果需要，可以添加或删除片段。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/4.png" style={{width:1000, height:'auto'}}/></div>

此过程应对所有样本重复进行。

### 第3步：创建 Impulse（预处理/模型定义）

Impulse 将原始数据作为输入，使用信号处理提取特征，然后通过学习模块对新数据进行分类。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/6.png" style={{width:1000, height:'auto'}}/></div>

首先，我们将以1秒的窗口获取数据点，并增强数据，每500毫秒滑动一次窗口。请注意，选项 **zero-pad data** 已启用。这对于用零填充小于1秒的样本非常重要（在某些情况下，我在 **split tool** 中将1000毫秒的窗口缩短以避免噪声和尖峰）。

每个1秒的音频样本都需要进行预处理并转换为图像（例如，13 x 49 x 1）。我们将使用 MFCC（Mel Frequency Cepstral Coefficients），它通过提取音频信号特征非常适合处理人声。

接下来，我们选择 **KERAS** 进行分类，通过卷积神经网络（Convolution Neural Network）从头构建我们的模型以进行图像分类。

### 第4步：预处理（MFCC）

下一步是创建将在下一阶段训练的图像。我们可以保留默认参数值，或者利用 DSP 的 **Autotuneparameters option**，我们将选择后者。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/7.png" style={{width:1000, height:'auto'}}/></div>

## 构建机器学习模型

### 第5步：模型设计与训练

我们将使用卷积神经网络（CNN）模型。基本架构由两个 Conv1D + MaxPooling 块（分别具有8和16个神经元）和一个0.25的 Dropout 组成。在最后一层，经过 Flatten 后有四个神经元，每个类别对应一个。

作为超参数，我们将使用0.005的学习率，并对模型进行100个周期的训练。我们还将包括数据增强，例如添加一些噪声。结果看起来不错。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/8.png" style={{width:600, height:'auto'}}/></div>

## 部署到 XIAO ESP32S3 Sense

### 第6步：部署到 XIAO ESP32S3 Sense

Edge Impulse 将打包所有需要的库、预处理函数和训练好的模型，并将其下载到您的计算机中。您应选择 Arduino Library 选项，并在底部选择 Quantized (Int8)，然后按下 Build 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/9.png" style={{width:600, height:'auto'}}/></div>

尽管 Edge Impulse 尚未发布其针对 ESP32S3 使用 ESP NN 加速器的 SDK，但感谢 Dmitry Maslov，我们可以恢复并修复其针对 ESP32-S3 的汇编优化。此解决方案尚未正式发布，EI 将在解决与其他板的冲突后将其包含在 EI SDK 中。

:::caution
目前，这仅适用于非 EON 版本。因此，您还应确保未选择 **Enable EON Compiler** 选项。
:::

当选择 Build 按钮时，将创建一个 Zip 文件并下载到您的计算机上。

在使用下载的库之前，我们需要启用 **ESP NN** 加速器。为此，您可以从 [项目 GitHub](https://github.com/Mjrovai/XIAO-ESP32S3-Sense/blob/main/ESP-NN.zip) 下载一个初步版本，解压缩后，将其替换到 Arduino 库文件夹中的 `src/edge-impulse-sdk/porting/espressif/ESP-NN` 下。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/10.png" style={{width:800, height:'auto'}}/></div>

在 Arduino IDE 中，转到 Sketch 选项卡，选择 Add .ZIP Library 选项，然后选择由 Edge Impulse 下载的 .zip 文件。

您可以在 [项目的 GitHub](https://github.com/Mjrovai/XIAO-ESP32S3-Sense/tree/main/xiao_esp32s3_microphone_led) 上找到完整代码。将草图上传到您的板子上，并测试一些实际推理。

:::tip
代码中导入的库需要更新为您的库名称。点亮逻辑也需要根据您实际训练的标签顺序进行修改。
:::

<details>

<summary>如果您的 ESP32 版本是 2.0.x，请点击此处预览完整程序</summary>

```cpp
/* Edge Impulse Arduino examples
 * Copyright (c) 2022 EdgeImpulse Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

// If your target is limited in memory remove this macro to save 10K RAM
#define EIDSP_QUANTIZE_FILTERBANK   0

/*
 ** NOTE: If you run into TFLite arena allocation issue.
 **
 ** This may be due to may dynamic memory fragmentation.
 ** Try defining "-DEI_CLASSIFIER_ALLOCATION_STATIC" in boards.local.txt (create
 ** if it doesn't exist) and copy this file to
 ** `<ARDUINO_CORE_INSTALL_PATH>/arduino/hardware/<mbed_core>/<core_version>/`.
 **
 ** See
 ** (https://support.arduino.cc/hc/en-us/articles/360012076960-Where-are-the-installed-cores-located-)
 ** to find where Arduino installs cores on your machine.
 **
 ** If the problem persists then there's not enough memory for this model and application.
 */

/* Includes ---------------------------------------------------------------- */
#include <XIAO-ESP32S3-KWS_inferencing.h>

#include <I2S.h>
#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16

#define LED_BUILT_IN 21 

/** Audio buffers, pointers and selectors */
typedef struct {
    int16_t *buffer;
    uint8_t buf_ready;
    uint32_t buf_count;
    uint32_t n_samples;
} inference_t;

static inference_t inference;
static const uint32_t sample_buffer_size = 2048;
static signed short sampleBuffer[sample_buffer_size];
static bool debug_nn = false; // Set this to true to see e.g. features generated from the raw signal
static bool record_status = true;

/**
 * @brief      Arduino setup function
 */
void setup()
{
    // put your setup code here, to run once:
    Serial.begin(115200);
    // comment out the below line to cancel the wait for USB connection (needed for native USB)
    while (!Serial);
    Serial.println("Edge Impulse Inferencing Demo");

    pinMode(LED_BUILT_IN, OUTPUT); // Set the pin as output
    digitalWrite(LED_BUILT_IN, HIGH); //Turn off
    
    I2S.setAllPins(-1, 42, 41, -1, -1);
    if (!I2S.begin(PDM_MONO_MODE, SAMPLE_RATE, SAMPLE_BITS)) {
      Serial.println("Failed to initialize I2S!");
    while (1) ;
  }
    
    // summary of inferencing settings (from model_metadata.h)
    ei_printf("Inferencing settings:\n");
    ei_printf("\tInterval: ");
    ei_printf_float((float)EI_CLASSIFIER_INTERVAL_MS);
    ei_printf(" ms.\n");
    ei_printf("\tFrame size: %d\n", EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE);
    ei_printf("\tSample length: %d ms.\n", EI_CLASSIFIER_RAW_SAMPLE_COUNT / 16);
    ei_printf("\tNo. of classes: %d\n", sizeof(ei_classifier_inferencing_categories) / sizeof(ei_classifier_inferencing_categories[0]));

    ei_printf("\nStarting continious inference in 2 seconds...\n");
    ei_sleep(2000);

    if (microphone_inference_start(EI_CLASSIFIER_RAW_SAMPLE_COUNT) == false) {
        ei_printf("ERR: Could not allocate audio buffer (size %d), this could be due to the window length of your model\r\n", EI_CLASSIFIER_RAW_SAMPLE_COUNT);
        return;
    }

    ei_printf("Recording...\n");
}

/**
 * @brief      Arduino main function. Runs the inferencing loop.
 */
void loop()
{
    bool m = microphone_inference_record();
    if (!m) {
        ei_printf("ERR: Failed to record audio...\n");
        return;
    }

    signal_t signal;
    signal.total_length = EI_CLASSIFIER_RAW_SAMPLE_COUNT;
    signal.get_data = &microphone_audio_signal_get_data;
    ei_impulse_result_t result = { 0 };

    EI_IMPULSE_ERROR r = run_classifier(&signal, &result, debug_nn);
    if (r != EI_IMPULSE_OK) {
        ei_printf("ERR: Failed to run classifier (%d)\n", r);
        return;
    }

    int pred_index = 0;     // Initialize pred_index
    float pred_value = 0;   // Initialize pred_value

    // print the predictions
    ei_printf("Predictions ");
    ei_printf("(DSP: %d ms., Classification: %d ms., Anomaly: %d ms.)",
        result.timing.dsp, result.timing.classification, result.timing.anomaly);
    ei_printf(": \n");
    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: ", result.classification[ix].label);
        ei_printf_float(result.classification[ix].value);
        ei_printf("\n");

        if (result.classification[ix].value > pred_value){
           pred_index = ix;
           pred_value = result.classification[ix].value;
      }
    }
    // Display inference result
    if (pred_index == 3){
      digitalWrite(LED_BUILT_IN, LOW); //Turn on
    }
    else{
      digitalWrite(LED_BUILT_IN, HIGH); //Turn off
    }

    
#if EI_CLASSIFIER_HAS_ANOMALY == 1
    ei_printf("    anomaly score: ");
    ei_printf_float(result.anomaly);
    ei_printf("\n");
#endif
}

static void audio_inference_callback(uint32_t n_bytes)
{
    for(int i = 0; i < n_bytes>>1; i++) {
        inference.buffer[inference.buf_count++] = sampleBuffer[i];

        if(inference.buf_count >= inference.n_samples) {
          inference.buf_count = 0;
          inference.buf_ready = 1;
        }
    }
}

static void capture_samples(void* arg) {

  const int32_t i2s_bytes_to_read = (uint32_t)arg;
  size_t bytes_read = i2s_bytes_to_read;

  while (record_status) {

    /* read data at once from i2s - Modified for XIAO ESP2S3 Sense and I2S.h library */
    // i2s_read((i2s_port_t)1, (void*)sampleBuffer, i2s_bytes_to_read, &bytes_read, 100);
    esp_i2s::i2s_read(esp_i2s::I2S_NUM_0, (void*)sampleBuffer, i2s_bytes_to_read, &bytes_read, 100);

    if (bytes_read <= 0) {
      ei_printf("Error in I2S read : %d", bytes_read);
    }
    else {
        if (bytes_read < i2s_bytes_to_read) {
        ei_printf("Partial I2S read");
        }

        // scale the data (otherwise the sound is too quiet)
        for (int x = 0; x < i2s_bytes_to_read/2; x++) {
            sampleBuffer[x] = (int16_t)(sampleBuffer[x]) * 8;
        }

        if (record_status) {
            audio_inference_callback(i2s_bytes_to_read);
        }
        else {
            break;
        }
    }
  }
  vTaskDelete(NULL);
}

/**
 * @brief      Init inferencing struct and setup/start PDM
 *
 * @param[in]  n_samples  The n samples
 *
 * @return     { description_of_the_return_value }
 */
static bool microphone_inference_start(uint32_t n_samples)
{
    inference.buffer = (int16_t *)malloc(n_samples * sizeof(int16_t));

    if(inference.buffer == NULL) {
        return false;
    }

    inference.buf_count  = 0;
    inference.n_samples  = n_samples;
    inference.buf_ready  = 0;

//    if (i2s_init(EI_CLASSIFIER_FREQUENCY)) {
//        ei_printf("Failed to start I2S!");
//    }

    ei_sleep(100);

    record_status = true;

    xTaskCreate(capture_samples, "CaptureSamples", 1024 * 32, (void*)sample_buffer_size, 10, NULL);

    return true;
}

/**
 * @brief      Wait on new data
 *
 * @return     True when finished
 */
static bool microphone_inference_record(void)
{
    bool ret = true;

    while (inference.buf_ready == 0) {
        delay(10);
    }

    inference.buf_ready = 0;
    return ret;
}

/**
 * Get raw audio signal data
 */
static int microphone_audio_signal_get_data(size_t offset, size_t length, float *out_ptr)
{
    numpy::int16_to_float(&inference.buffer[offset], out_ptr, length);

    return 0;
}

/**
 * @brief      Stop PDM and release buffers
 */
static void microphone_inference_end(void)
{
    free(sampleBuffer);
    ei_free(inference.buffer);
}

#if !defined(EI_CLASSIFIER_SENSOR) || EI_CLASSIFIER_SENSOR != EI_CLASSIFIER_SENSOR_MICROPHONE
#error "Invalid model for current sensor."
#endif
```

</details>

<details>

<summary>如果您的 ESP32 版本是 3.0.x，请点击此处查看完整程序</summary>

```cpp
/* Edge Impulse Arduino 示例
 * 版权所有 (c) 2022 EdgeImpulse Inc.
 *
 * 特此免费授予任何获得本软件及相关文档文件（“软件”）副本的人，
 * 以不受限制地使用本软件，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售
 * 本软件的副本的权利，条件是以下版权声明和本许可声明应包含在本软件的所有副本或主要部分中。
 *
 * 本软件按“原样”提供，不提供任何明示或暗示的担保，包括但不限于适销性、
 * 适用于特定目的和非侵权的保证。在任何情况下，作者或版权持有人均不对因本软件或本软件的使用或其他交易
 * 而产生的任何索赔、损害或其他责任负责，无论是在合同诉讼、侵权诉讼或其他诉讼中。
 */

// 如果您的目标设备内存有限，请移除此宏以节省 10K RAM
#define EIDSP_QUANTIZE_FILTERBANK   0

/*
 ** 注意：如果遇到 TFLite 内存分配问题。
 **
 ** 这可能是由于动态内存碎片化引起的。
 ** 尝试在 boards.local.txt 中定义 "-DEI_CLASSIFIER_ALLOCATION_STATIC"（如果不存在则创建该文件），
 ** 并将此文件复制到
 ** `<ARDUINO_CORE_INSTALL_PATH>/arduino/hardware/<mbed_core>/<core_version>/`。
 **
 ** 请参阅
 ** (https://support.arduino.cc/hc/en-us/articles/360012076960-Where-are-the-installed-cores-located-)
 ** 以查找 Arduino 在您的计算机上安装核心的位置。
 **
 ** 如果问题仍然存在，则说明此模型和应用程序没有足够的内存。
 */

/* 包含 ---------------------------------------------------------------- */
#include <XIAO-ESP32S3-KWS_inferencing.h>
#include <ESP_I2S.h>
I2SClass I2S;

#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16

#define LED_BUILT_IN 21 

/** 音频缓冲区、指针和选择器 */
typedef struct {
    int16_t *buffer;
    uint8_t buf_ready;
    uint32_t buf_count;
    uint32_t n_samples;
} inference_t;

static inference_t inference;
static const uint32_t sample_buffer_size = 2048;
static signed short sampleBuffer[sample_buffer_size];
static bool debug_nn = false; // 设置为 true 以查看从原始信号生成的特征等
static bool record_status = true;

/**
 * @brief      Arduino 初始化函数
 */
void setup()
{
    // 在此处放置您的初始化代码，仅运行一次：
    Serial.begin(115200);
    // 注释掉以下行以取消等待 USB 连接（适用于原生 USB）
    while (!Serial);
    Serial.println("Edge Impulse 推理演示");

    pinMode(LED_BUILT_IN, OUTPUT); // 设置引脚为输出
    digitalWrite(LED_BUILT_IN, HIGH); // 关闭 LED
    
    // 设置 42 PDM 时钟和 41 PDM 数据引脚
    I2S.setPinsPdmRx(42, 41);
    if (!I2S.begin(I2S_MODE_PDM_RX, 16000, I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_MONO)) {
      Serial.println("初始化 I2S 失败！");
    while (1) ;
  }
    
    // 推理设置摘要（来自 model_metadata.h）
    ei_printf("推理设置:\n");
    ei_printf("\t间隔: ");
    ei_printf_float((float)EI_CLASSIFIER_INTERVAL_MS);
    ei_printf(" 毫秒.\n");
    ei_printf("\t帧大小: %d\n", EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE);
    ei_printf("\t采样长度: %d 毫秒.\n", EI_CLASSIFIER_RAW_SAMPLE_COUNT / 16);
    ei_printf("\t类别数量: %d\n", sizeof(ei_classifier_inferencing_categories) / sizeof(ei_classifier_inferencing_categories[0]));

    ei_printf("\n2 秒后开始连续推理...\n");
    ei_sleep(2000);

    if (microphone_inference_start(EI_CLASSIFIER_RAW_SAMPLE_COUNT) == false) {
        ei_printf("错误: 无法分配音频缓冲区（大小 %d），这可能是由于您的模型窗口长度导致的\r\n", EI_CLASSIFIER_RAW_SAMPLE_COUNT);
        return;
    }

    ei_printf("正在录音...\n");
}

/**
 * @brief      Arduino 主函数。运行推理循环。
 */
void loop()
{
    bool m = microphone_inference_record();
    if (!m) {
        ei_printf("错误: 录音失败...\n");
        return;
    }

    signal_t signal;
    signal.total_length = EI_CLASSIFIER_RAW_SAMPLE_COUNT;
    signal.get_data = &microphone_audio_signal_get_data;
    ei_impulse_result_t result = { 0 };

    EI_IMPULSE_ERROR r = run_classifier(&signal, &result, debug_nn);
    if (r != EI_IMPULSE_OK) {
        ei_printf("错误: 运行分类器失败 (%d)\n", r);
        return;
    }

    int pred_index = 0;     // 初始化 pred_index
    float pred_value = 0;   // 初始化 pred_value

    // 打印预测结果
    ei_printf("预测结果 ");
    ei_printf("(DSP: %d 毫秒, 分类: %d 毫秒, 异常: %d 毫秒)",
        result.timing.dsp, result.timing.classification, result.timing.anomaly);
    ei_printf(": \n");
    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: ", result.classification[ix].label);
        ei_printf_float(result.classification[ix].value);
        ei_printf("\n");

        if (result.classification[ix].value > pred_value){
           pred_index = ix;
           pred_value = result.classification[ix].value;
      }
    }
    // 显示推理结果
    if (pred_index == 3){
      digitalWrite(LED_BUILT_IN, LOW); // 打开 LED
    }
    else{
      digitalWrite(LED_BUILT_IN, HIGH); // 关闭 LED
    }

    
#if EI_CLASSIFIER_HAS_ANOMALY == 1
    ei_printf("    异常分数: ");
    ei_printf_float(result.anomaly);
    ei_printf("\n");
#endif
}

static void audio_inference_callback(uint32_t n_bytes)
{
    for(int i = 0; i < n_bytes>>1; i++) {
        inference.buffer[inference.buf_count++] = sampleBuffer[i];

        if(inference.buf_count >= inference.n_samples) {
          inference.buf_count = 0;
          inference.buf_ready = 1;
        }
    }
}

static void capture_samples(void* arg) {

  const int32_t i2s_bytes_to_read = (uint32_t)arg;
  size_t bytes_read = i2s_bytes_to_read;

  while (record_status) {

    /* 一次性从 i2s 读取数据 - 为 XIAO ESP2S3 Sense 和 I2S.h 库修改 */
    // i2s_read((i2s_port_t)1, (void*)sampleBuffer, i2s_bytes_to_read, &bytes_read, 100);
    esp_i2s::i2s_read(esp_i2s::I2S_NUM_0, (void*)sampleBuffer, i2s_bytes_to_read, &bytes_read, 100);

    if (bytes_read <= 0) {
      ei_printf("I2S 读取错误: %d", bytes_read);
    }
    else {
        if (bytes_read < i2s_bytes_to_read) {
        ei_printf("部分 I2S 读取");
        }

        // 缩放数据（否则声音太小）
        for (int x = 0; x < i2s_bytes_to_read/2; x++) {
            sampleBuffer[x] = (int16_t)(sampleBuffer[x]) * 8;
        }

        if (record_status) {
            audio_inference_callback(i2s_bytes_to_read);
        }
        else {
            break;
        }
    }
  }
  vTaskDelete(NULL);
}

/**
 * @brief      初始化推理结构并设置/启动 PDM
 *
 * @param[in]  n_samples  采样数量
 *
 * @return     { 返回值描述 }
 */
static bool microphone_inference_start(uint32_t n_samples)
{
    inference.buffer = (int16_t *)malloc(n_samples * sizeof(int16_t));

    if(inference.buffer == NULL) {
        return false;
    }

    inference.buf_count  = 0;
    inference.n_samples  = n_samples;
    inference.buf_ready  = 0;

//    if (i2s_init(EI_CLASSIFIER_FREQUENCY)) {
//        ei_printf("启动 I2S 失败！");
//    }

    ei_sleep(100);

    record_status = true;

    xTaskCreate(capture_samples, "CaptureSamples", 1024 * 32, (void*)sample_buffer_size, 10, NULL);

    return true;
}

/**
 * @brief      等待新数据
 *
 * @return     完成时返回 True
 */
static bool microphone_inference_record(void)
{
    bool ret = true;

    while (inference.buf_ready == 0) {
        delay(10);
    }

    inference.buf_ready = 0;
    return ret;
}

/**
 * 获取原始音频信号数据
 */
static int microphone_audio_signal_get_data(size_t offset, size_t length, float *out_ptr)
{
    numpy::int16_to_float(&inference.buffer[offset], out_ptr, length);

    return 0;
}

/**
 * @brief      停止 PDM 并释放缓冲区
 */
static void microphone_inference_end(void)
{
    free(sampleBuffer);
    ei_free(inference.buffer);
}

#if !defined(EI_CLASSIFIER_SENSOR) || EI_CLASSIFIER_SENSOR != EI_CLASSIFIER_SENSOR_MICROPHONE
#error "当前传感器的模型无效。"
#endif
```

</details>

这个想法是，每当检测到关键词 **HELLO** 时，LED 将会点亮。同样地，除了点亮 LED，这也可以作为触发外部设备的“触发器”，正如我们在介绍中看到的那样。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/11.png" style={{width:700, height:'auto'}}/></div>

## 特别感谢

特别感谢 **[MJRoBot (Marcelo Rovai)](https://mjrobot.org/)** 提供关于 XIAO ESP32S3 Sense 接入 Edge Impulse 的教程内容。原始文章非常详细，包含了许多关于机器学习的知识。

如果您想阅读本文的原始内容，可以通过向下滚动直接访问原始文章。

- [TinyML Made Easy: KeyWord Spotting (KWS)](https://www.hackster.io/mjrobot/tinyml-made-easy-keyword-spotting-kws-5fa6e7#toc-capturing--offline--audio-data-with-the-xiao-esp32s3-sense-5)

MJRoBot 还拥有许多关于 XIAO ESP32S3 的有趣项目。

- [Exploring Machine Learning with the new XIAO ESP32S3](https://www.hackster.io/mjrobot/exploring-machine-learning-with-the-new-xiao-esp32s3-6463e5)
- [TinyML Made Easy: Image Classification](https://www.hackster.io/mjrobot/tinyml-made-easy-image-classification-cb42ae)

## 资源

- **[GITHUB]** [项目 Github](https://github.com/Mjrovai/XIAO-ESP32S3-Sense)
- **[EDGE-IMPULSE]** [Edge Impulse 演示](https://studio.edgeimpulse.com/public/256022/latest)


## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时获得顺畅的体验。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>