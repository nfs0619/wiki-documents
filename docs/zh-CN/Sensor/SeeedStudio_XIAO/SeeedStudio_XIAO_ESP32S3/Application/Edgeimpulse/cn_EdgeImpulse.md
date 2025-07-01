---
description: EdgeImpulse 简介
title: Edgeimpulse
keywords:
- tinyml 课程
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/edgeimpulse
last_update:
  date: 05/15/2025
  author: Salman
---

# 待办事项

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## Edge Impulse

Edge Impulse 是一个领先的边缘设备机器学习开发平台，免费提供给开发者，并受到全球企业的信赖。

* 使用 Edge Impulse，软件开发人员、工程师和领域专家无需博士学位或高级嵌入式工程技能即可在边缘设备上使用机器学习解决实际问题。从入门到生产中的 MLOps，Edge Impulse 在从微控制器 (MCU) 到中央处理器 (CPU) 的广泛硬件范围内提供了最高的效率和速度。

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/MakerGram/workshops/main/docs/tiny-ml-workshop/img/edgeimpulse/EI_homepage.png" style={{width:1000, height:'auto'}}/></div> 

通过 Edge Impulse，我们可以：
* 直接从设备收集数据集
* 从其他来源（如 .zip 文件、API 或第三方云服务）收集数据集
* 创建测试和训练数据，并将它们分类到不同的标签中
* 训练我们的模型
* 能够选择合适的机器学习算法 - Edge Impulse 根据我们的数据集提供推荐的机器学习算法
* 将模型部署到我们的硬件上
* TinyML 项目协作与版本控制
* 以及更多功能，帮助您构建 TinyML 应用程序。

### 快速上手体验

在全面学习 Edge Impulse 的完整流程之前，我们提供了预生成的 Arduino 库，您可以通过直接从草图中将此 Arduino 程序烧录到 XIAO ESP32S3 Sense 来查看结果。

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/EdgeImpulse/src/img/EdegeImpulse-lib.png" style={{width:1000, height:'auto'}}/></div> 

### 在 Arduino 上设置 XIAO ESP32S3 Sense

在开始使用 Edge Impulse 库之前，我们需要在 Arduino IDE 上设置 XIAO ESP32S3，请参考[此处](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/)的指南。

#### 编译并上传 Blink 示例

```cpp
// setup 函数在按下复位或为板供电时运行一次
void setup() {
  // 初始化数字引脚 LED_BUILTIN 为输出。
  pinMode(LED_BUILTIN, OUTPUT);
}

// loop 函数会不断重复运行
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);  // 打开 LED（HIGH 是电压高电平）
  delay(1000);                      // 等待一秒
  digitalWrite(LED_BUILTIN, LOW);   // 关闭 LED（LOW 是电压低电平）
  delay(1000);                      // 等待一秒
}
```

确保在上传之前选择正确的板子和端口。

#### 待办事项
- [ ] 在 Arduino IDE 上安装 XIAO ESP32S3 板
- [ ] 在 XIAO ESP32S3 上编译并上传 Blink 示例

### 可用的 Edge Impulse 库

我们还在并行推进一些 Edge Impulse 导出的 Arduino 库，这些库已被验证并编辑为可以直接在 XIAO ESP32S3 Sense 上运行。使用这些库时，我们可以更好地控制程序并做出决策。

- [语音关键词识别（Yes 和 No）Arduino 库](https://github.com/salmanfarisvp/TinyML/raw/main/XIAO-esp32-S3-Sense/KeyWordSpotting(KWS)/src/lib/XIAO_Esp32_KWS_inferencing.zip)
- [水果识别（苹果、香蕉、葡萄）Arduino 库](https://files.seeedstudio.com/wiki/tinyml-topic/res/xiao-esp32s3-fruits-classify_inferencing.zip)

### 如何使用 Edge Impulse Arduino 库

它类似于一个通用的 Arduino 库，我们需要先在 Arduino IDE 上安装它，然后使用示例代码运行 Demo。

### 语音关键词识别（Yes 和 No）Arduino 库

#### 演示

<iframe width="560" height="315" src="https://www.youtube.com/embed/oa0BGRXnb8w" title="YouTube 视频播放器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### 它是如何工作的！

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/XIAO-esp32-S3-Sense/KeyWordSpotting(KWS)/src/img/KWS_Diagram.png" style={{width:1000, height:'auto'}}/></div> 

#### 第一步：下载 KWS Demo 库
下载 [语音关键词识别（Yes 和 No）Arduino 库](https://github.com/salmanfarisvp/TinyML/raw/main/XIAO-esp32-S3-Sense/KeyWordSpotting(KWS)/src/lib/XIAO_esp32S3_YesNo_inferencing.zip) 作为 .Zip 文件。

#### 第二步：将 ZIP 库添加到 Arduino IDE

下载 ZIP 库后，打开 Arduino IDE，点击 Sketch > Include Library > Add .ZIP Library。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:1000, height:'auto'}}/></div> 

选择刚刚下载的 ZIP 文件，如果库安装成功，您将在通知窗口中看到“Library added to your libraries”的提示，这意味着库已成功安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/upload_complete.png" style={{width:1000, height:'auto'}}/></div> 

#### 第三步：运行推理草图

```cpp
/* Edge Impulse Arduino 示例
 * 版权所有 (c) 2022 EdgeImpulse Inc.
 *
 * 在此授予任何获得本软件及相关文档文件（“软件”）副本的人员免费使用的权限，
 * 包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售软件副本的权利，
 * 并允许软件提供者这样做，条件是上述版权声明和本许可声明包含在软件的所有副本或主要部分中。
 *
 * 软件按“原样”提供，不附带任何明示或暗示的保证，包括但不限于适销性、
 * 特定用途适用性和非侵权的保证。在任何情况下，作者或版权持有人均不对因软件或
 * 软件使用或其他交易产生的任何索赔、损害或其他责任负责，无论是在合同诉讼、
 * 侵权诉讼或其他诉讼中。
 * 
 * 本代码由 Marcelo Rovai 修改以在 XIAO ESP32S3 上运行
 * 日期：2023年5月29日
 * 修改者：Salman Faris
 * 日期：2023年8月14日
 * 
 */

// 如果目标设备的内存有限，请移除此宏定义以节省 10K 的 RAM
#define EIDSP_QUANTIZE_FILTERBANK 0

/*
 ** 注意：如果遇到 TFLite 的 arena 分配问题。
 **
 ** 这可能是由于动态内存碎片化导致的。
 ** 请尝试在 boards.local.txt 中定义 "-DEI_CLASSIFIER_ALLOCATION_STATIC"（如果不存在请创建该文件），
 ** 并将该文件复制到
 ** `<ARDUINO_CORE_INSTALL_PATH>/arduino/hardware/<mbed_core>/<core_version>/`。
 **
 ** 参见
 ** (https://support.arduino.cc/hc/en-us/articles/360012076960-Where-are-the-installed-cores-located-)
 ** 来查找 Arduino 在你的计算机上安装核心的位置。
 **
 ** 如果问题仍然存在，说明此模型和应用程序可用的内存不足。
 */

/* 引入头文件 ---------------------------------------------------------------- */
#include <XIAO_esp32S3_YesNo_inferencing.h>

#include <I2S.h>
#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16

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
static bool debug_nn = false;  // 设置为 true 可查看例如从原始信号生成的特征
static bool record_status = true;

/**
 * @brief      Arduino 初始化函数
 */
void setup() {
  // 在此处放置初始化代码，仅运行一次：
  Serial.begin(115200);

  pinMode(LED_BUILTIN, OUTPUT);
  // 注释掉以下代码行以跳过等待 USB 连接（用于原生 USB）
  while (!Serial)
    ;
  Serial.println("Edge Impulse 推理演示");

  I2S.setAllPins(-1, 42, 41, -1, -1);
  if (!I2S.begin(PDM_MONO_MODE, SAMPLE_RATE, SAMPLE_BITS)) {
    Serial.println("I2S 初始化失败！");
    while (1)
      ;
  }

  // 推理设置摘要（来自 model_metadata.h）
  ei_printf("推理设置:\n");
  ei_printf("\t间隔: ");
  ei_printf_float((float)EI_CLASSIFIER_INTERVAL_MS);
  ei_printf(" ms.\n");
  ei_printf("\t帧大小: %d\n", EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE);
  ei_printf("\t样本长度: %d ms.\n", EI_CLASSIFIER_RAW_SAMPLE_COUNT / 16);
  ei_printf("\t类别数量: %d\n", sizeof(ei_classifier_inferencing_categories) / sizeof(ei_classifier_inferencing_categories[0]));

  ei_printf("\n2 秒后开始持续推理...\n");
  ei_sleep(2000);

  if (microphone_inference_start(EI_CLASSIFIER_RAW_SAMPLE_COUNT) == false) {
    ei_printf("错误: 无法分配音频缓冲区（大小 %d），这可能是由于模型的窗口长度导致的\r\n", EI_CLASSIFIER_RAW_SAMPLE_COUNT);
    return;
  }

  ei_printf("录音中...\n");
}

/**
 * @brief      Arduino 主函数。运行推理循环。
 */
void loop() {
  bool m = microphone_inference_record();
  if (!m) {
    ei_printf("错误：录音失败...\n");
    return;
  }

  signal_t signal;
  signal.total_length = EI_CLASSIFIER_RAW_SAMPLE_COUNT;
  signal.get_data = &microphone_audio_signal_get_data;
  ei_impulse_result_t result = { 0 };

  EI_IMPULSE_ERROR r = run_classifier(&signal, &result, debug_nn);
  if (r != EI_IMPULSE_OK) {
    ei_printf("错误：运行分类器失败（%d）\n", r);
    return;
  }

  int pred_index = 0;    // 初始化预测索引
  float pred_value = 0;  // 初始化预测值

  // 打印预测结果
  ei_printf("预测结果 ");
  ei_printf("(DSP: %d 毫秒，分类: %d 毫秒，异常: %d 毫秒)",
            result.timing.dsp, result.timing.classification, result.timing.anomaly);
  ei_printf(": \n");
  for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
    ei_printf("    %s: ", result.classification[ix].label);
    ei_printf_float(result.classification[ix].value);
    ei_printf("\n");

    if (result.classification[ix].value > pred_value) {
      pred_index = ix;
      pred_value = result.classification[ix].value;
    }
  }

    // 显示推理结果
    if ((pred_index == 0 && (pred_value > 0.8))) {
      digitalWrite(LED_BUILTIN, HIGH);  // 打开 LED
    } else if ((pred_index == 2) && (pred_value > 0.8)) {
      digitalWrite(LED_BUILTIN, LOW);  // 关闭 LED
    } else {
      // 无需处理
    }

#if EI_CLASSIFIER_HAS_ANOMALY == 1
    ei_printf("    异常分数: ");
    ei_printf_float(result.anomaly);
    ei_printf("\n");
#endif
  }

  // 音频推理回调函数
  static void audio_inference_callback(uint32_t n_bytes) {
    for (int i = 0; i < n_bytes >> 1; i++) {
      inference.buffer[inference.buf_count++] = sampleBuffer[i];

      if (inference.buf_count >= inference.n_samples) {
        inference.buf_count = 0;
        inference.buf_ready = 1;
      }
    }
  }

  // 捕获音频样本
  static void capture_samples(void *arg) {

    const int32_t i2s_bytes_to_read = (uint32_t)arg;
    size_t bytes_read = i2s_bytes_to_read;

    while (record_status) {

      /* 从 I2S 一次性读取数据 */
      esp_i2s::i2s_read(esp_i2s::I2S_NUM_0, (void *)sampleBuffer, i2s_bytes_to_read, &bytes_read, 100);

      if (bytes_read <= 0) {
        ei_printf("I2S 读取错误 : %d", bytes_read);
      } else {
        if (bytes_read < i2s_bytes_to_read) {
          ei_printf("I2S 读取不完整");
        }

        // 放大数据（否则声音太小）
        for (int x = 0; x < i2s_bytes_to_read / 2; x++) {
          sampleBuffer[x] = (int16_t)(sampleBuffer[x]) * 8;
        }

        if (record_status) {
          audio_inference_callback(i2s_bytes_to_read);
        } else {
          break;
        }
      }
    }
    vTaskDelete(NULL);
  }

  /**
   * @brief      初始化推理结构体并设置/启动 PDM
   *
   * @param[in]  n_samples  采样数量
   *
   * @return     返回是否初始化成功
   */
  static bool microphone_inference_start(uint32_t n_samples) {
    inference.buffer = (int16_t *)malloc(n_samples * sizeof(int16_t));

    if (inference.buffer == NULL) {
      return false;
    }

    inference.buf_count = 0;
    inference.n_samples = n_samples;
    inference.buf_ready = 0;

    //    if (i2s_init(EI_CLASSIFIER_FREQUENCY)) {
    //        ei_printf("启动 I2S 失败！");
    //    }

    ei_sleep(100);

    record_status = true;

    xTaskCreate(capture_samples, "CaptureSamples", 1024 * 32, (void *)sample_buffer_size, 10, NULL);

    return true;
  }

  /**
   * @brief      等待新数据
   *
   * @return     完成时返回 true
   */
  static bool microphone_inference_record(void) {
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
  static int microphone_audio_signal_get_data(size_t offset, size_t length, float *out_ptr) {
    numpy::int16_to_float(&inference.buffer[offset], out_ptr, length);

    return 0;
  }

  /**
   * @brief      停止 PDM 并释放缓冲区
   */
  static void microphone_inference_end(void) {
    free(sampleBuffer);
    ei_free(inference.buffer);
  }

#if !defined(EI_CLASSIFIER_SENSOR) || EI_CLASSIFIER_SENSOR != EI_CLASSIFIER_SENSOR_MICROPHONE
#error "当前传感器与模型不匹配。"
#endif

```

复制上述代码或从[这里](https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/KeyWordSpotting(KWS)/src/XIAO_esp32_s3_sense_kWS_Yes_No.ino)下载，然后将代码上传到 XIAO。

```cpp
 // 打印预测结果
  ei_printf("Predictions ");
  ei_printf("(DSP: %d ms., Classification: %d ms., Anomaly: %d ms.)",
            result.timing.dsp, result.timing.classification, result.timing.anomaly);
  ei_printf(": \n");
  for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
    ei_printf("    %s: ", result.classification[ix].label);
    ei_printf_float(result.classification[ix].value);
    ei_printf("\n");

    if (result.classification[ix].value > pred_value) {
      pred_index = ix;
      pred_value = result.classification[ix].value;
    }
  }

    // 显示推断结果
    if ((pred_index == 0 && (pred_value > 0.8))) {
      digitalWrite(LED_BUILTIN, HIGH);  // 打开
    } else if ((pred_index == 2) && (pred_value > 0.8)) {
      digitalWrite(LED_BUILTIN, LOW);  // 关闭
    } else {
      // 无需操作
    }
```

在上述代码中，我们可以看到如何做出**打开**和**关闭**LED的决策。我们也可以在这里添加其他逻辑，让 KWS（关键词识别）控制我们的项目。
<hr></hr>

### 水果识别（苹果、香蕉、葡萄）Arduino 库
#### 第一步：下载水果识别库
下载 [水果识别（苹果、香蕉、葡萄）Arduino 库](https://files.seeedstudio.com/wiki/tinyml-topic/res/xiao-esp32s3-fruits-classify_inferencing.zip) 作为 .Zip 文件。

#### 第二步：将 ZIP 库添加到 Arduino IDE

下载 ZIP 库后，打开 Arduino IDE，点击 Sketch > Include Library > Add .ZIP Library。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:1000, height:'auto'}}/></div> 

选择刚刚下载的 ZIP 文件，如果库安装正确，您将在通知窗口中看到 Library added to your libraries。这意味着库已成功安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/upload_complete.png" style={{width:1000, height:'auto'}}/></div> 

#### 第三步：运行示例草图

您可以在 **Files -> Examples -> xiao-esp323-fruits-classify_inferencing -> XIAO-ESP32S3-Sense** 下找到示例草图。

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/fruitClassifications_Lib_path.png" style={{width:1000, height:'auto'}}/></div> 

#### 尝试演示

从[这里](https://www.kaggle.com/kritikseth/fruit-and-vegetable-image-recognition)打开数据集示例页面并打开水果图像，然后将 XIAO ESP32S3 摄像头对准水果图像，并在屏幕上查看结果。

- [ ] 在 Arduino 上安装 XIAO ESP32S3
- [ ] 编译并上传
- [ ] 安装 KWS Arduino 库并运行示例
- [ ] 安装图像识别库并运行示例

## 资源

- **[GITHUB]** [SenseCraft 模型助手模型](https://github.com/Seeed-Studio/edgelab-model-zoo/tree/main/detection)
- **[GITHUB]** [项目 Github](https://github.com/Mjrovai/XIAO-ESP32S3-Sense)
- **[EDGE-IMPULSE]** [Edge Impulse KWS 演示](https://studio.edgeimpulse.com/public/270277/latest)
- **[EDGE-IMPULSE]** [Edge Impulse 水果分类演示](https://studio.edgeimpulse.com/public/269519/latest)