---
description: 从图像中分类狗和猫。
title: 图像分类
keywords:
  - tinyml课程
image: https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/image_classification.webp
slug: /cn/tinyml_course_Image_classification_project
last_update:
  date: 05/15/2025
  author: Salman
---

# XIAO ESP32S3-Sense 图像分类

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

在这里，我们将使用 XIAO ESP32S3-Sense 构建一个 tinyML 项目，用于从照片中分类狗和猫。让我们开始吧。

## 它是如何工作的

我们将在 XIAO 上运行机器学习模型，并将摄像头流输入到模型中。然后，XIAO 利用我们实现的板载神经网络进行推理并预测结果。让我们来构建一个。

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/digram.png?raw=true" style={{width:1000, height:'auto'}}/></div>

### 所需物品

- XIAO ESP32-Sense
- \<32GB MicroSD卡
- Type-C 数据线
- Arduino IDE
- Edge Impulse 账户

:::info

1. 使用 arduino-esp32 版本 2.x，因为它与 3.x 不兼容。
2. 启用 PSRAM 以启用摄像头模块/功能。

:::

## 第一步：收集猫和狗的图像

机器学习项目的第一步是收集数据集，在这里我们需要收集狗和猫的图像。我们可以通过两种方法收集图像。

1. 直接通过 XIAO-ESP32S3 Sense 收集图像并保存到 SD 卡，然后上传到 Edge Impulse。
2. 直接通过手机、互联网或开放数据集收集图像，然后上传到 Edge Impulse。

### 1.1 方法一：通过 XIAO-ESP32S3 Sense 收集图像

在这里，我们使用 Sense 摄像头模块收集图像并保存到 SD 卡，然后稍后将其上传到 Edge Impulse。

#### 1.1.1 连接摄像头

如果您正在购买 XIAO ESP32S3 Sense，那么您还应该包括一个扩展板。此扩展板具有一个 1600\*1200 OV2640 摄像头传感器、板载 SD 卡插槽和数字麦克风。

通过将扩展板安装到 XIAO ESP32S3 Sense 上，您可以使用扩展板上的功能。

安装扩展板非常简单，您只需将扩展板上的连接器与 XIAO ESP32S3 上的 B2B 连接器对齐，用力按压并听到“咔嗒”一声，安装即完成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

我们现在有一个新的完全兼容 XIAO ESP32S3 Sense 的强大摄像头 OV5640，如果您购买它，可以更换摄像头使用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/ov5640.gif" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/OV5640-Camera-for-XIAO-ESP32S3-Sense-With-Heat-Sink-p-5739.html">
    <strong><span><font color={'FFFFFF'} size={"4"}>立即购买 🖱️</font></span></strong>
    </a>
</div>

- **步骤 1.** 根据您的操作系统下载并安装稳定版本的 Arduino IDE。

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>下载 Arduino IDE</font></span></strong></a>
</div>

#### 1.1.2 在 Arduino 上安装 XIAO-ESP32S3 Sense

- **步骤 1.** 将 ESP32 板包添加到您的 Arduino IDE。

  导航到 **文件 > 首选项**，并在 **“附加开发板管理器 URLs”** 中填写以下 URL：
  _https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json_

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/6.png" style={{width:800, height:'auto'}}/></div>

  导航到 **工具 > 开发板 > 开发板管理器...**，在搜索框中输入关键字 **esp32**，选择最新版本的 **esp32**，并安装它。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/9.png" style={{width:1000, height:'auto'}}/></div>

:::caution
XIAO ESP32S3 的板载包至少需要版本 **2.0.8**。
:::

- **步骤 2.** 选择您的开发板和端口。

在 Arduino IDE 顶部，您可以直接选择端口。通常是 COM3 或更高（**COM1** 和 **COM2** 通常保留给硬件串口）。

同时，在左侧的开发板中搜索 **xiao**。选择 **XIAO_ESP32S3**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/10.png" style={{width:600, height:'auto'}}/></div>

完成这些准备工作后，您可以开始为 XIAO ESP32S3 编写程序并进行编译和上传。

#### 1.1.3 上传拍摄图像并保存到 SD 卡的草图

从[这里](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/take_photos_command.ino.zip)下载草图文件，在您的电脑上解压缩并点击“take_photos_command.ino”打开草图。然后选择正确的端口和 XIAO 的开发板进行上传。

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/img_CaptureSketch01.png?raw=true
" style={{width:600, height:'auto'}}/></div>

拍摄照片时，请确保对准我们需要收集作为数据集的图像或对象。

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/cat_image_snap.png?raw=true" style={{width:600, height:'auto'}}/></div>

由于这是一个图像分类项目，我们需要收集尽可能多的图像以使系统更加稳定。因此，请收集更多可爱的狗和猫的图像。

### 1.2 方法二：直接将图像上传到 EdgeImpulse

对于此方法，我们需要从互联网上或通过手机收集图像。幸运的是，我们有像 [Kaggle](https://www.kaggle.com/) 这样的服务可以为我们提供狗和猫图像的数据集，请[点击这里](https://www.kaggle.com/datasets/tongpython/cat-and-dog)。

一旦收集了数据集，打开您的 EdgeImpulse 项目并进入 **Data acquisition**，选择 **+ Add data**，然后选择 **Upload data** 选项。

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/collectData1.png" style={{width:600, height:'auto'}}/></div>

在页面中，选择上传模式为 **"Select a folder"**，然后从下方选项中选择文件。确保选择 **"Automaticlly split between training and testing"** 并将标签设置为 **"Infer from file name"**。

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/DataCollection01.png?raw=true" style={{width:600, height:'auto'}}/></div>

上传完成后，您可以看到如下窗口。

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/DataCollection02.png?raw=true" style={{width:600, height:'auto'}}/></div>

## 第 2 步：设计 Impulse 并训练我们的神经网络

在为项目收集数据后，您现在可以创建您的 Impulse。一个完整的 Impulse 包括三个主要构建块：输入块、处理块和学习块。

1. 要设计一个 Impulse，请在 **Impulse design** 下选择 **Create an impulse**。
2. **输入块**：输入块表示您正在使用哪种类型的输入数据训练模型。这可以是时间序列（音频、振动、运动）或图像。在这里我们选择图像数据作为输入块。
3. **处理块**：处理块基本上是一个特征提取器。它由 DSP（数字信号处理）操作组成，用于提取模型学习的特征。这些操作根据项目中使用的数据类型而有所不同。在这里我们使用 EdgeImpulse 的预构建图像处理块。
4. **学习块**：添加处理块后，现在是时候添加学习块以完成您的 Impulse。学习块是一个神经网络，它被训练来学习您的数据。在这里我们使用迁移学习（图像），它会在您的数据上微调一个预训练的图像分类模型。即使是相对较小的图像数据集也能获得良好的性能。
5. 设计完成后，点击 **save impulse** 继续。

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/Impulse01.png?raw=true" style={{width:600, height:'auto'}}/></div>

### 第 2.1 步：使用处理块进行特征提取

在这里我们将使用 DSP（数字信号处理）操作来提取模型学习的特征。这些操作根据项目中使用的数据类型而有所不同。首先我们需要设置如下所示的参数。

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/Impulse02.png?raw=true
" style={{width:600, height:'auto'}}/></div>

设置参数后，我们需要生成特征，点击 **generate features** 开始操作。

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/feature03.png?raw=true" style={{width:600, height:'auto'}}/></div>

生成特征后，我们需要配置神经网络以学习您的数据。在这里我们使用迁移学习（图像），它会在您的数据上微调一个预训练的图像分类模型。即使是相对较小的图像数据集也能获得良好的性能。按照下方所示选择神经网络并点击 **Start Training**。训练需要一些时间，请耐心等待。

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/train2.png?raw=true" style={{width:600, height:'auto'}}/></div>

训练完成后，我们就可以下载创建的 tinyML 库了。进入 **Deployment option** 并选择 **Arduino library** 作为部署选项，然后点击 **Build** 生成库。

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/deployment1.png?raw=true" style={{width:600, height:'auto'}}/></div>

库将自动下载。下载完成后，将其添加到 Arduino IDE。打开 Arduino IDE，点击 Sketch > Include Library > Add .ZIP Library。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:1000, height:'auto'}}/></div>

选择您刚刚下载的 zip 文件，如果库安装正确，您将在通知窗口中看到 "Library added to your libraries"。这意味着库已成功安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/upload_complete.png" style={{width:1000, height:'auto'}}/></div>

## 第 3 步：运行示例代码

尽管 Edge Impulse 尚未发布其针对 ESP32S3 的 SDK（使用 ESP NN 加速器），但感谢 Dmitry Maslov，我们可以恢复并修复其汇编优化以支持 ESP32-S3。此解决方案尚未正式发布，EI 将在解决与其他板的冲突后将其包含在 EI SDK 中。

:::caution
目前，这仅适用于非 EON 版本。因此，您还需要确保未选择 **Enable EON Compiler** 选项。
:::

当选择 Build 按钮时，一个 Zip 文件将被创建并下载到您的计算机。

在使用下载的库之前，我们需要启用 **ESP NN** 加速器。为此，您可以从 [项目 GitHub](https://github.com/Mjrovai/XIAO-ESP32S3-Sense/blob/main/ESP-NN.zip) 下载一个初步版本，解压缩后，将其替换为 Arduino 库文件夹中的 `src/edge-impulse-sdk/porting/espressif/ESP-NN` 下的 ESP NN 文件夹。

:::warning 注意

- 请记住替换 ESP-NN 文件夹，不要保留现有文件夹或更改其名称进行恢复。只需删除它即可。
- 头文件的顺序可能会影响编译，因此请确保保持头文件的正确顺序。

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/10.png" style={{width:800, height:'auto'}}/></div>

将以下推理代码复制并粘贴到您的 Arduino IDE 中。

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

/* Includes ---------------------------------------------------------------- */
#include <XIAO_esp32S3_CatDog2_inferencing.h>
#include "edge-impulse-sdk/dsp/image/image.hpp"

#include "esp_camera.h"

// 选择摄像头型号 - 在 camera_pins.h 文件中找到更多摄像头型号
// https://github.com/espressif/arduino-esp32/blob/master/libraries/ESP32/examples/Camera/CameraWebServer/camera_pins.h

#define CAMERA_MODEL_XIAO_ESP32S3 // 具有 PSRAM

#define PWDN_GPIO_NUM     -1
#define RESET_GPIO_NUM    -1
#define XCLK_GPIO_NUM     10
#define SIOD_GPIO_NUM     40
#define SIOC_GPIO_NUM     39

#define Y9_GPIO_NUM       48
#define Y8_GPIO_NUM       11
#define Y7_GPIO_NUM       12
#define Y6_GPIO_NUM       14
#define Y5_GPIO_NUM       16
#define Y4_GPIO_NUM       18
#define Y3_GPIO_NUM       17
#define Y2_GPIO_NUM       15
#define VSYNC_GPIO_NUM    38
#define HREF_GPIO_NUM     47
#define PCLK_GPIO_NUM     13

#define LED_GPIO_NUM      21


/* 常量定义 -------------------------------------------------------- */
#define EI_CAMERA_RAW_FRAME_BUFFER_COLS           320
#define EI_CAMERA_RAW_FRAME_BUFFER_ROWS           240
#define EI_CAMERA_FRAME_BYTE_SIZE                 3

/* 私有变量 ------------------------------------------------------- */
static bool debug_nn = false; // 设置为 true 以查看例如从原始信号生成的特征
static bool is_initialised = false;
uint8_t *snapshot_buf; // 指向捕获的输出

static camera_config_t camera_config = {
    .pin_pwdn = PWDN_GPIO_NUM,
    .pin_reset = RESET_GPIO_NUM,
    .pin_xclk = XCLK_GPIO_NUM,
    .pin_sscb_sda = SIOD_GPIO_NUM,
    .pin_sscb_scl = SIOC_GPIO_NUM,

    .pin_d7 = Y9_GPIO_NUM,
    .pin_d6 = Y8_GPIO_NUM,
    .pin_d5 = Y7_GPIO_NUM,
    .pin_d4 = Y6_GPIO_NUM,
    .pin_d3 = Y5_GPIO_NUM,
    .pin_d2 = Y4_GPIO_NUM,
    .pin_d1 = Y3_GPIO_NUM,
    .pin_d0 = Y2_GPIO_NUM,
    .pin_vsync = VSYNC_GPIO_NUM,
    .pin_href = HREF_GPIO_NUM,
    .pin_pclk = PCLK_GPIO_NUM,

    // XCLK 20MHz 或 OV2640 双 FPS 的 10MHz（实验性）
    .xclk_freq_hz = 20000000,
    .ledc_timer = LEDC_TIMER_0,
    .ledc_channel = LEDC_CHANNEL_0,

    .pixel_format = PIXFORMAT_JPEG, // YUV422, GRAYSCALE, RGB565, JPEG
    .frame_size = FRAMESIZE_QVGA,    // QQVGA-UXGA 不要在非 JPEG 模式下使用高于 QVGA 的尺寸

    .jpeg_quality = 12, // 0-63 数字越小质量越高
    .fb_count = 1,       // 如果多于一个，i2s 将运行在连续模式下。仅在 JPEG 模式下使用
    .fb_location = CAMERA_FB_IN_PSRAM,
    .grab_mode = CAMERA_GRAB_WHEN_EMPTY,
};

/* 函数定义 ------------------------------------------------------- */
bool ei_camera_init(void);
void ei_camera_deinit(void);
bool ei_camera_capture(uint32_t img_width, uint32_t img_height, uint8_t *out_buf) ;

/**
* @brief      Arduino setup 函数
*/
void setup()
{
    // 在此处放置您的设置代码，仅运行一次：
    Serial.begin(115200);
    // 注释掉下面的行以在上传后立即开始推理
    while (!Serial);
    Serial.println("Edge Impulse 推理演示");
    if (ei_camera_init() == false) {
        ei_printf("摄像头初始化失败！\r\n");
    }
    else {
        ei_printf("摄像头已初始化\r\n");
    }

    ei_printf("\n将在 2 秒内开始连续推理...\n");
    ei_sleep(2000);
}

/**
* @brief      获取数据并运行推理
*
* @param[in]  debug  如果为 true，则获取调试信息
*/
void loop()
{

    // 替代 wait_ms，我们将等待信号，这允许线程取消我们...
    if (ei_sleep(5) != EI_IMPULSE_OK) {
        return;
    }

    snapshot_buf = (uint8_t*)malloc(EI_CAMERA_RAW_FRAME_BUFFER_COLS * EI_CAMERA_RAW_FRAME_BUFFER_ROWS * EI_CAMERA_FRAME_BYTE_SIZE);

    // 检查分配是否成功
    if(snapshot_buf == nullptr) {
        ei_printf("错误：分配快照缓冲区失败！\n");
        return;
    }

    ei::signal_t signal;
    signal.total_length = EI_CLASSIFIER_INPUT_WIDTH * EI_CLASSIFIER_INPUT_HEIGHT;
    signal.get_data = &ei_camera_get_data;

    if (ei_camera_capture((size_t)EI_CLASSIFIER_INPUT_WIDTH, (size_t)EI_CLASSIFIER_INPUT_HEIGHT, snapshot_buf) == false) {
        ei_printf("捕获图像失败\r\n");
        free(snapshot_buf);
        return;
    }

    // 运行分类器
    ei_impulse_result_t result = { 0 };

    EI_IMPULSE_ERROR err = run_classifier(&signal, &result, debug_nn);
    if (err != EI_IMPULSE_OK) {
        ei_printf("错误：运行分类器失败 (%d)\n", err);
        return;
    }

    // 打印预测结果
    ei_printf("预测结果 (DSP: %d ms., 分类: %d ms., 异常: %d ms.): \n",
                result.timing.dsp, result.timing.classification, result.timing.anomaly);

#if EI_CLASSIFIER_OBJECT_DETECTION == 1
    bool bb_found = result.bounding_boxes[0].value > 0;
    for (size_t ix = 0; ix < result.bounding_boxes_count; ix++) {
        auto bb = result.bounding_boxes[ix];
        if (bb.value == 0) {
            continue;
        }
        ei_printf("    %s (%f) [ x: %u, y: %u, width: %u, height: %u ]\n", bb.label, bb.value, bb.x, bb.y, bb.width, bb.height);
    }
    if (!bb_found) {
        ei_printf("    未找到对象\n");
    }
#else
    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: %.5f\n", result.classification[ix].label,
                                    result.classification[ix].value);
    }
#endif

#if EI_CLASSIFIER_HAS_ANOMALY == 1
        ei_printf("    异常分数: %.3f\n", result.anomaly);
#endif


    free(snapshot_buf);

}

/**
 * @brief   设置图像传感器并开始流式传输
 *
 * @retval  如果初始化失败则返回 false
 */
bool ei_camera_init(void) {

    if (is_initialised) return true;

#if defined(CAMERA_MODEL_ESP_EYE)
  pinMode(13, INPUT_PULLUP);
  pinMode(14, INPUT_PULLUP);
#endif

    // 初始化摄像头
    esp_err_t err = esp_camera_init(&camera_config);
    if (err != ESP_OK) {
      Serial.printf("摄像头初始化失败，错误代码 0x%x\n", err);
      return false;
    }

    sensor_t * s = esp_camera_sensor_get();
    // 初始传感器垂直翻转，颜色有点饱和
    if (s->id.PID == OV3660_PID) {
      s->set_vflip(s, 1); // 翻转回来
      s->set_brightness(s, 1); // 提升亮度
      s->set_saturation(s, 0); // 降低饱和度
    }

#if defined(CAMERA_MODEL_M5STACK_WIDE)
    s->set_vflip(s, 1);
    s->set_hmirror(s, 1);
#elif defined(CAMERA_MODEL_ESP_EYE)
    s->set_vflip(s, 1);
    s->set_hmirror(s, 1);
    s->set_awb_gain(s, 1);
#endif

    is_initialised = true;
    return true;
}

/**
 * @brief      停止传感器数据流
 */
void ei_camera_deinit(void) {

    // 取消初始化摄像头
    esp_err_t err = esp_camera_deinit();

    if (err != ESP_OK)
    {
        ei_printf("摄像头取消初始化失败\n");
        return;
    }

    is_initialised = false;
    return;
}


/**
 * @brief      捕获、重新缩放和裁剪图像
 *
 * @param[in]  img_width     输出图像的宽度
 * @param[in]  img_height    输出图像的高度
 * @param[in]  out_buf       指向存储输出图像的指针，如果使用 ei_camera_frame_buffer 进行捕获和重新缩放/裁剪，可以使用 NULL。
 *
 * @retval     如果未初始化、图像捕获、重新缩放或裁剪失败则返回 false
 *
 */
bool ei_camera_capture(uint32_t img_width, uint32_t img_height, uint8_t *out_buf) {
    bool do_resize = false;

    if (!is_initialised) {
        ei_printf("错误：摄像头未初始化\r\n");
        return false;
    }

    camera_fb_t *fb = esp_camera_fb_get();

    if (!fb) {
        ei_printf("摄像头捕获失败\n");
        return false;
    }

   bool converted = fmt2rgb888(fb->buf, fb->len, PIXFORMAT_JPEG, snapshot_buf);

   esp_camera_fb_return(fb);

   if(!converted){
       ei_printf("转换失败\n");
       return false;
   }

    if ((img_width != EI_CAMERA_RAW_FRAME_BUFFER_COLS)
        || (img_height != EI_CAMERA_RAW_FRAME_BUFFER_ROWS)) {
        do_resize = true;
    }

    if (do_resize) {
        ei::image::processing::crop_and_interpolate_rgb888(
        out_buf,
        EI_CAMERA_RAW_FRAME_BUFFER_COLS,
        EI_CAMERA_RAW_FRAME_BUFFER_ROWS,
        out_buf,
        img_width,
        img_height);
    }


    return true;
}

static int ei_camera_get_data(size_t offset, size_t length, float *out_ptr)
{
    // 我们已经有了 RGB888 缓冲区，因此重新计算偏移到像素索引
    size_t pixel_ix = offset * 3;
    size_t pixels_left = length;
    size_t out_ptr_ix = 0;

    while (pixels_left != 0) {
        out_ptr[out_ptr_ix] = (snapshot_buf[pixel_ix] << 16) + (snapshot_buf[pixel_ix + 1] << 8) + snapshot_buf[pixel_ix + 2];

        // 转到下一个像素
        out_ptr_ix++;
        pixel_ix+=3;
        pixels_left--;
    }
    // 完成！
    return 0;
}

#if !defined(EI_CLASSIFIER_SENSOR) || EI_CLASSIFIER_SENSOR != EI_CLASSIFIER_SENSOR_CAMERA
#error "当前传感器的模型无效"
#endif
```

确保将 **"#include \<XIAO_esp32S3_CatDog2_inferencing.h\>"** 替换为您生成的库。然后上传代码并指向猫或狗的图片，或者实际的猫狗，我们可以在串口监视器中看到结果。

恭喜您 🙌 完成了这个 tinyML 图像分类项目。

## 资源

[PDF] **[ESP32-S3 数据手册](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)**

### 适用于 Seeed Studio XIAO ESP32S3

- **[PDF]** [Seeed Studio XIAO ESP32S3 原理图](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_SCH_v1.2.pdf)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Eagle 库](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_SCH&PCB_230327.zip)

- **[DXF]** [Seeed Studio XIAO ESP32S3 DXF 格式尺寸图](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_Dimensioning.dxf)

- **[LBR]** [Seeed Studio XIAO ESP32S3 Eagle 封装库](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed-Studio-XIAO-ESP32S3-footprint-eagle.lbr)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 工厂固件](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-firmware.zip)

- **[XLSX]** [Seeed Studio XIAO ESP32S3 引脚分布表](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)

<!-- - **[STEP]** [Seeed Studio XIAO ESP32S3 3D 模型]() -->

### 适用于 Seeed Studio XIAO ESP32S3 Sense

- **[PDF]** [Seeed Studio XIAO ESP32S3 Sense 原理图](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_SCH.pdf)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense KiCAD 库](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeeduino-xiao-ESP32S3-KiCAD-Library.zip)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense Eagle 库](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_SCH&PCB_230324.zip)

- **[DXF]** [Seeed Studio XIAO ESP32S3 Sense DXF 格式尺寸图（顶部）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_top.dxf)

- **[DXF]** [Seeed Studio XIAO ESP32S3 Sense DXF 格式尺寸图（底部）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_bot.dxf)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense 工厂固件](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAOESP32S3-Sense-firmware.zip)

- **[XLSX]** [Seeed Studio XIAO ESP32S3 Sense 引脚分布表](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)

<!-- - **[STEP]** [Seeed Studio XIAO ESP32S3 Sense 3D 模型]() -->

### 其他

- **[STP]** [XIAO ESP32S3 Sense 外壳设计（顶部）](<https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(top).stp>)

- **[STP]** [XIAO ESP32S3 Sense 外壳设计（底部）](<https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(bottom).stp>)

_其余的开源材料正在整理中，敬请期待！_

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您在使用我们的产品时获得顺畅的体验。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>