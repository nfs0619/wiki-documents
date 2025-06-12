---
description: 本教程将解释如何正确使用 XIAO ESP32S3 Sense 上的摄像头。
title: Sense 版本摄像头使用指南
keywords:
- xiao esp32s3
- esp32s3
- 摄像头
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao_esp32s3_camera_usage
last_update:
  date: 05/15/2025
  author: Citric
---

# Seeed Studio XIAO ESP32S3 Sense 的摄像头使用指南

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

:::tip
本教程内容仅适用于 Seeed Studio XIAO ESP32S3 Sense。
:::

在本教程中，我们将带您了解如何使用 XIAO ESP32S3 Sense 上的摄像头模块。本教程分为以下几个部分：首先，我们将解释 ESP32 提供的摄像头功能及其作用。其次，我们将从拍照和录制视频两个维度教您如何使用摄像头，最后，我们将围绕拍照和录制视频创建一些有趣的项目。

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## 入门指南

本教程可能涉及使用 microSD 卡、摄像头、天线等。请根据您的项目需求准备以下材料并正确安装。

#### 天线安装

在 XIAO ESP32S3 正面左下角，有一个独立的 "WiFi/BT 天线连接器"。为了获得更好的 WiFi/Bluetooth 信号，您需要取出包装内的天线并将其安装到连接器上。

安装天线有一个小技巧，如果直接用力按压，您会发现很难按下且手指会疼！正确的安装方法是先将天线连接器的一侧插入连接块，然后稍微按压另一侧，天线即可安装完成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/5.gif" style={{width:500, height:'auto'}}/></div>

### 扩展板安装（适用于 Sense）

安装扩展板非常简单，只需将扩展板上的连接器与 XIAO ESP32S3 上的 B2B 连接器对齐，用力按下并听到 "咔哒" 一声，安装即完成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

我们现在推出了一款全新的完全兼容 XIAO ESP32S3 Sense 的强大摄像头 OV5640，如果您购买了它，可以更换摄像头进行使用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/ov5640.gif" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/OV5640-Camera-for-XIAO-ESP32S3-Sense-With-Heat-Sink-p-5739.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
</div>

如果您需要了解 OV5640 的详细参数信息，可以参考下表。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/datasheet.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Wiki 中关于摄像头的所有程序均兼容 OV5640 和 OV2640 摄像头。
:::

### 准备 microSD 卡

XIAO ESP32S3 Sense 支持最大 **32GB** 的 microSD 卡，因此如果您准备为 XIAO 购买 microSD 卡，请参考此规格。在使用 microSD 卡之前，请将其格式化为 **FAT32** 格式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/67.png" style={{width:250, height:'auto'}}/></div>

格式化后，您可以将 microSD 卡插入 microSD 卡槽。请注意插入方向，带有金手指的一侧应朝内。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/66.jpg" style={{width:500, height:'auto'}}/></div>

### 扩展板的摄像头插槽电路设计

XIAO ESP32S3 Sense 卡槽占用了 ESP32-S3 的 14 个 GPIO，具体占用的引脚详情如下表所示。

<div class="table-center">
    <table align="center">
        <tr>
            <th align="center">ESP32-S3 GPIO</th>
            <th align="center">摄像头</th>
            <th align="center">ESP32-S3 GPIO</th>
            <th align="center">摄像头</th>
        </tr>
        <tr>
            <td align="center">GPIO10</td>
            <td align="center">XMCLK</td>
            <td align="center">GPIO11</td>
            <td align="center">DVP_Y8</td>
        </tr>
        <tr>
            <td align="center">GPIO12</td>
            <td align="center">DVP_Y7</td>
            <td align="center">GPIO13</td>
            <td align="center">DVP_PCLK</td>
        </tr>
        <tr>
            <td align="center">GPIO14</td>
            <td align="center">DVP_Y6</td>
            <td align="center">GPIO15</td>
            <td align="center">DVP_Y2</td>
        </tr>
        <tr>
            <td align="center">GPIO16</td>
            <td align="center">DVP_Y5</td>
            <td align="center">GPIO17</td>
            <td align="center">DVP_Y3</td>
        </tr>
        <tr>
            <td align="center">GPIO18</td>
            <td align="center">DVP_Y4</td>
            <td align="center">GPIO38</td>
            <td align="center">DVP_VSYNC</td>
        </tr>
        <tr>
            <td align="center">GPIO39</td>
            <td align="center">CAM_SCL</td>
            <td align="center">GPIO40</td>
            <td align="center">CAM_SDA</td>
        </tr>
        <tr>
            <td align="center">GPIO47</td>
            <td align="center">DVP_HREF</td>
            <td align="center">GPIO48</td>
            <td align="center">DVP_Y9</td>
        </tr>
    </table>
</div>

### 打开 PSRAM 选项

ESP32 的 PSRAM 指的是 ESP32 芯片上的外部 PSRAM（伪静态随机存取存储器），它提供了额外的内存空间，用于增加 ESP32 系统的可用内存。在 ESP32 系统中，PSRAM 主要有以下用途：

1. **扩展可用 RAM**：ESP32 的内置 RAM 是有限的，尤其是对于一些需要大量内存的应用，例如图像处理、音频处理等，内置 RAM 可能不足。通过使用 PSRAM，可以扩展 ESP32 的可用 RAM，以满足这些应用的需求。

2. **加速内存访问**：由于 PSRAM 是外部存储器，其访问速度比内部 RAM 慢，但它可以用作缓存或临时内存，以加速内存访问和数据处理。

3. **存储缓冲区**：对于需要大缓冲区的应用，例如网络缓冲区、音频缓冲区等，PSRAM 可以提供足够的存储空间，避免内存不足的情况。

在本教程的内容中，您**需要打开 Arduino IDE 的 PSRAM 功能**，以确保摄像头能够正常工作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/94.png" style={{width:700, height:'auto'}}/></div>

## 摄像头库概述

在开始之前，我们建议您阅读本章节以了解常见的摄像头功能。这样，您可以使用这些功能完成自己的项目开发，或者更轻松地阅读程序。

### 第一部分：esp_camera.h

1. **摄像头初始化的配置结构**

以下是配置示例，只需根据实际的引脚情况填写即可。

```cpp
static camera_config_t camera_example_config = {
        .pin_pwdn       = PWDN_GPIO_NUM, // 电源控制引脚
        .pin_reset      = RESET_GPIO_NUM, // 复位引脚
        .pin_xclk       = XCLK_GPIO_NUM, // 外部时钟引脚
        .pin_sccb_sda   = SIOD_GPIO_NUM, // SCCB 数据引脚
        .pin_sccb_scl   = SIOC_GPIO_NUM, // SCCB 时钟引脚
        .pin_d7         = Y9_GPIO_NUM, // 数据引脚 D7
        .pin_d6         = Y8_GPIO_NUM, // 数据引脚 D6
        .pin_d5         = Y7_GPIO_NUM, // 数据引脚 D5
        .pin_d4         = Y6_GPIO_NUM, // 数据引脚 D4
        .pin_d3         = Y5_GPIO_NUM, // 数据引脚 D3
        .pin_d2         = Y4_GPIO_NUM, // 数据引脚 D2
        .pin_d1         = Y3_GPIO_NUM, // 数据引脚 D1
        .pin_d0         = Y2_GPIO_NUM, // 数据引脚 D0
        .pin_vsync      = VSYNC_GPIO_NUM, // 垂直同步引脚
        .pin_href       = HREF_GPIO_NUM, // 水平参考引脚
        .pin_pclk       = PCLK_GPIO_NUM, // 像素时钟引脚

        .xclk_freq_hz   = 20000000, // 图像传感器的时钟频率
        .fb_location = CAMERA_FB_IN_PSRAM, // 设置帧缓冲区的存储位置
        .pixel_format   = PIXFORMAT_JPEG, // 图像的像素格式：PIXFORMAT_ + YUV422|GRAYSCALE|RGB565|JPEG
        .frame_size     = FRAMESIZE_UXGA, // 图像的分辨率大小：FRAMESIZE_ + QVGA|CIF|VGA|SVGA|XGA|SXGA|UXGA
        .jpeg_quality   = 12, // JPEG 图像的质量，范围为 0 到 63
        .fb_count       = 2, // 使用的帧缓冲区数量
        .grab_mode      = CAMERA_GRAB_WHEN_EMPTY // 图像捕获模式
    };
```

2. **初始化摄像头驱动程序**

在以上格式配置好 `camera_example_config` 后，我们需要使用以下函数初始化摄像头驱动程序。

```cpp
esp_err_t esp_camera_init(const camera_config_t* config);
```

- **输入参数**：摄像头配置参数

- **输出**：成功时返回 ESP_OK

:::note
目前此函数只能调用一次，且无法反初始化该模块。
:::

3. **获取帧缓冲区的指针**

```cpp
camera_fb_t* esp_camera_fb_get();
```

摄像头帧缓冲区的数据结构：

```cpp
typedef struct {
    uint8_t * buf;              /*!< 像素数据的指针 */
    size_t len;                 /*!< 缓冲区的字节长度 */
    size_t width;               /*!< 缓冲区的像素宽度 */
    size_t height;              /*!< 缓冲区的像素高度 */
    pixformat_t format;         /*!< 像素数据的格式 */
    struct timeval timestamp;   /*!< 帧的第一个 DMA 缓冲区的时间戳（自启动以来） */
} camera_fb_t;
```

4. **返回帧缓冲区以供再次使用**

```cpp
void esp_camera_fb_return(camera_fb_t * fb);
```

- **输入参数**：帧缓冲区的指针

5. **获取图像传感器控制结构的指针**

```cpp
sensor_t * esp_camera_sensor_get();
```

- **输出**：传感器的指针

6. **将摄像头设置保存到非易失性存储（NVS）**

```cpp
esp_err_t esp_camera_save_to_nvs(const char *key);
```

- **输入参数**：摄像头设置的唯一 NVS 键名

7. **从非易失性存储（NVS）加载摄像头设置**

```cpp
esp_err_t esp_camera_load_from_nvs(const char *key);
```

- **输入参数**：摄像头设置的唯一 NVS 键名

### 第二部分：img_converters.h

1. **将图像缓冲区转换为 JPEG**

```cpp
bool fmt2jpg_cb(uint8_t *src, size_t src_len, uint16_t width, uint16_t height, pixformat_t format, uint8_t quality, jpg_out_cb cb, void * arg);
```

- **输入参数**：
    - **src**：       源缓冲区，格式为 RGB565、RGB888、YUYV 或 GRAYSCALE
    - **src_len**：   源缓冲区的字节长度
    - **width**：     源图像的像素宽度
    - **height**：    源图像的像素高度
    - **format**：    源图像的格式
    - **quality**：   生成图像的 JPEG 质量
    - **cp**：        用于写入输出 JPEG 字节的回调函数
    - **arg**：       传递给回调函数的指针

- **输出**：成功时返回 true

2. **将摄像头帧缓冲区转换为 JPEG**

```cpp
bool frame2jpg_cb(camera_fb_t * fb, uint8_t quality, jpg_out_cb cb, void * arg);
```

- **输入参数**：
    - **fb**：       源摄像头帧缓冲区
    - **quality**：  生成图像的 JPEG 质量
    - **cp**：       用于写入输出 JPEG 字节的回调函数
    - **arg**：      传递给回调函数的指针

- **输出**：成功时返回 true

3. **将图像缓冲区转换为 JPEG 缓冲区**

```cpp
bool fmt2jpg(uint8_t *src, size_t src_len, uint16_t width, uint16_t height, pixformat_t format, uint8_t quality, uint8_t ** out, size_t * out_len);
```

- **输入参数**:
    - **src**:       源缓冲区，格式为 RGB565、RGB888、YUYV 或 GRAYSCALE
    - **src_len**:   源缓冲区的字节长度
    - **width**:     源图像的像素宽度
    - **height**:    源图像的像素高度
    - **format**:    源图像的格式
    - **quality**:   生成图像的 JPEG 质量
    - **out**:       指针，用于存储生成缓冲区的地址。使用完后必须释放该指针。
    - **out_len**:   指针，用于存储输出缓冲区的长度

- **输出**: 成功时返回 true

4. 将摄像头帧缓冲区转换为 JPEG 缓冲区。

```cpp
bool frame2jpg(camera_fb_t * fb, uint8_t quality, uint8_t ** out, size_t * out_len);
```

- **输入参数**:
    - **fb**:       源摄像头帧缓冲区
    - **quality**:  生成图像的 JPEG 质量
    - **out**:      指针，用于存储生成缓冲区的地址
    - **out_len**:  指针，用于存储输出缓冲区的长度

- **输出**: 成功时返回 true

5. 将图像缓冲区转换为 BMP 缓冲区。

```cpp
bool fmt2bmp(uint8_t *src, size_t src_len, uint16_t width, uint16_t height, pixformat_t format, uint8_t ** out, size_t * out_len);
```

- **输入参数**:
    - **src**:       源缓冲区，格式为 RGB565、RGB888、YUYV 或 GRAYSCALE
    - **src_len**:   源缓冲区的字节长度
    - **width**:     源图像的像素宽度
    - **height**:    源图像的像素高度
    - **format**:    源图像的格式
    - **quality**:   生成图像的 JPEG 质量
    - **out**:       指针，用于存储生成缓冲区的地址
    - **out_len**:   指针，用于存储输出缓冲区的长度

- **输出**: 成功时返回 true

6. 将摄像头帧缓冲区转换为 BMP 缓冲区。

```cpp
bool frame2bmp(camera_fb_t * fb, uint8_t ** out, size_t * out_len);
```

- **输入参数**:
    - **fb**:       源摄像头帧缓冲区
    - **quality**:  生成图像的 JPEG 质量
    - **cp**:       回调函数，用于写入输出 JPEG 的字节
    - **arg**:      指针，用于传递给回调函数

- **输出**: 成功时返回 true

### 第三部分: app_httpd.cpp

:::note
此部分库的介绍基于 [创建视频保存终端——基于 WebServer](#project-iii-create-a-video-preservation-terminal----based-webserver) 部分。此库主要用于为 Web 服务器执行图像采集和人脸识别功能。它未直接包含在 ESP 的板载包中。
:::

1. 人脸识别功能。

```cpp
static int run_face_recognition(fb_data_t *fb, std::list<dl::detect::result_t> *results)
```

- **输入参数**:
    - **fb**: 指向包含图像数据的帧缓冲区结构的指针。
    - **results**: 指向检测到的人脸结果列表的指针。

2. 处理 BMP 图像文件的 HTTP 请求。

```cpp
static esp_err_t bmp_handler(httpd_req_t *req)
```

- **输入参数**: 指向表示 HTTP 请求的结构的指针。

3. 以流式方式编码 JPEG 图像数据。

```cpp
static size_t jpg_encode_stream(void *arg, size_t index, const void *data, size_t len)
```

- **输入参数**:
    - **arg**: 指向用户定义的参数的指针，该参数会传递给函数。
    - **index**: 表示图像数据当前位置的索引值。
    - **data**: 指向包含要编码的图像数据的缓冲区的指针。
    - **len**: 数据缓冲区的长度。

4. 处理摄像头捕获和图像流的 HTTP 请求。

```cpp
static esp_err_t capture_handler(httpd_req_t *req)
```

- **输入参数**: 指向表示 HTTP 请求的结构的指针。

5. 处理摄像头视频流的 HTTP 请求。

```cpp
static esp_err_t stream_handler(httpd_req_t *req)
```

- **输入参数**: 指向表示 HTTP 请求的结构的指针。

6. 初始化并启动摄像头服务器，通过 HTTP 捕获和流式传输视频。

```cpp
void startCameraServer()
```

## 使用摄像头拍照

接下来我们从摄像头的最基本使用开始，例如，我们将首先使用摄像头完成图像采集。第一个项目我们将使用 microSD 卡，程序的主要任务是每分钟获取摄像头画面并将画面保存到 microSD 卡中。

在开始之前，请像我一样安装 microSD 卡和摄像头。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/91.jpg" style={{width:300, height:'auto'}}/></div>

您可以在以下链接找到完整的程序代码和所需的依赖文件。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/take_photos">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载代码</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

以下是此项目的 Arduino 程序。

```cpp
#include "esp_camera.h"
#include "FS.h"
#include "SD.h"
#include "SPI.h"

#define CAMERA_MODEL_XIAO_ESP32S3 // 有 PSRAM

#include "camera_pins.h"

unsigned long lastCaptureTime = 0; // 上次拍摄时间
int imageCount = 1;                // 文件计数器
bool camera_sign = false;          // 检查摄像头状态
bool sd_sign = false;              // 检查 SD 卡状态

// 将照片保存到 SD 卡
void photo_save(const char * fileName) {
  // 拍摄照片
  camera_fb_t *fb = esp_camera_fb_get();
  if (!fb) {
    Serial.println("获取摄像头帧缓冲区失败");
    return;
  }
  // 将照片保存到文件
  writeFile(SD, fileName, fb->buf, fb->len);
  
  // 释放图像缓冲区
  esp_camera_fb_return(fb);

  Serial.println("照片已保存到文件");
}

// SD 卡写入文件
void writeFile(fs::FS &fs, const char * path, uint8_t * data, size_t len){
    Serial.printf("写入文件: %s\n", path);

    File file = fs.open(path, FILE_WRITE);
    if(!file){
        Serial.println("打开文件写入失败");
        return;
    }
    if(file.write(data, len) == len){
        Serial.println("文件写入成功");
    } else {
        Serial.println("写入失败");
    }
    file.close();
}

void setup() {
  Serial.begin(115200);
  while(!Serial); // 当串口监视器打开时，程序开始执行

  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.frame_size = FRAMESIZE_UXGA;
  config.pixel_format = PIXFORMAT_JPEG; // 用于流式传输
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;
  
  // 如果存在 PSRAM IC，则使用 UXGA 分辨率和更高的 JPEG 质量进行初始化
  //                      为更大的预分配帧缓冲区。
  if(config.pixel_format == PIXFORMAT_JPEG){
    if(psramFound()){
      config.jpeg_quality = 10;
      config.fb_count = 2;
      config.grab_mode = CAMERA_GRAB_LATEST;
    } else {
      // 如果 PSRAM 不可用，则限制帧大小
      config.frame_size = FRAMESIZE_SVGA;
      config.fb_location = CAMERA_FB_IN_DRAM;
    }
  } else {
    // 面部检测/识别的最佳选项
    config.frame_size = FRAMESIZE_240X240;
#if CONFIG_IDF_TARGET_ESP32S3
    config.fb_count = 2;
#endif
  }

  // 摄像头初始化
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("摄像头初始化失败，错误代码 0x%x", err);
    return;
  }
  
  camera_sign = true; // 摄像头初始化检查通过

  // 初始化 SD 卡
  if(!SD.begin(21)){
    Serial.println("SD 卡挂载失败");
    return;
  }
  uint8_t cardType = SD.cardType();

  // 判断 SD 卡类型是否可用
  if(cardType == CARD_NONE){
    Serial.println("未连接 SD 卡");
    return;
  }

  Serial.print("SD 卡类型: ");
  if(cardType == CARD_MMC){
    Serial.println("MMC");
  } else if(cardType == CARD_SD){
    Serial.println("SDSC");
  } else if(cardType == CARD_SDHC){
    Serial.println("SDHC");
  } else {
    Serial.println("未知");
  }

  sd_sign = true; // SD 卡初始化检查通过

  Serial.println("拍照将在一分钟后开始，请准备好。");
}

void loop() {
  // 摄像头和 SD 卡可用，开始拍照
  if(camera_sign && sd_sign){
    // 获取当前时间
    unsigned long now = millis();
  
    // 如果距离上次拍摄时间超过 1 分钟，则拍摄照片并保存到 SD 卡
    if ((now - lastCaptureTime) >= 60000) {
      char filename[32];
      sprintf(filename, "/image%d.jpg", imageCount);
      photo_save(filename);
      Serial.printf("保存的图片：%s\n", filename);
      Serial.println("拍照将在一分钟后开始，请准备好。");
      imageCount++;
      lastCaptureTime = now;
    }
  }
}
```

:::note
编译和上传此程序需要另外两个依赖项，请前往 GitHub 并完整下载它们。
:::

请将程序上传到 XIAO ESP32S3，程序成功上传后，请打开串口监视器，将摄像头对准您想拍摄的物体，等待一分钟，拍摄的照片将保存到 SD 卡中。接下来，XIAO 将每分钟拍摄一张照片。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/89.png" style={{width:700, height:'auto'}}/></div>

取出 microSD 卡，并借助读卡器，您可以查看保存在卡中的照片。

### 程序注释

程序开始时引入了我们需要使用的摄像头和 SD 卡库，以及我们为 XIAO ESP32S3 定义的一些引脚依赖文件。

然后，为了便于阅读，我们依次定义了两个函数，一个是将捕获的图像保存到 SD 卡的函数 `photo_save()`，另一个是写入文件的函数 `writeFile()`。

```cpp
// 将图片保存到 SD 卡
void photo_save(const char * fileName) {
  // 拍摄照片
  camera_fb_t *fb = esp_camera_fb_get();
  if (!fb) {
    Serial.println("获取摄像头帧缓冲区失败");
    return;
  }
  // 将照片保存到文件
  writeFile(SD, fileName, fb->buf, fb->len);
  
  // 释放图像缓冲区
  esp_camera_fb_return(fb);

  Serial.println("照片已保存到文件");
}
```

在将图像保存到 microSD 卡的函数中，主要完成了两个任务。第一个是获取图片，第二个是调用写入文件的函数。

获取图像可以通过 `esp_camera_fb_get()` 完成，图像信息将保存在指针 `fb` 中，然后我们可以将 `fb` 的 `buf` 写入到 SD 卡中。

在 `Setup()` 函数中，程序的大部分内容是配置摄像头引脚和摄像头初始化，我们可以直接默认应用。如果您对摄像头的像素或质量有要求，可以根据 [摄像头库概述](#camera-library-overview) 章节中描述的功能调整内部的值。

在 `loop()` 函数中，最后需要做的是控制每分钟拍摄一次照片，并以递增的数字作为拍摄照片的文件名后缀。

```cpp
if(camera_sign && sd_sign){
    // 获取当前时间
    unsigned long now = millis();
  
    // 如果距离上次拍摄已超过 1 分钟，则拍摄照片并保存到 SD 卡
    if ((now - lastCaptureTime) >= 60000) {
      char filename[32];
      sprintf(filename, "/image%d.jpg", imageCount);
      photo_save(filename);
      Serial.printf("已保存照片：%s\n", filename);
      Serial.println("照片将在一分钟后开始，请做好准备。");
      imageCount++;
      lastCaptureTime = now;
    }
  }
```

在执行 `loop()` 之前，我们配置了两个标志检查 `camera_sign` 和 `sd_sign`。这确保了拍摄和保存照片的任务必须在 `Setup()` 中成功执行摄像头和 SD 卡检查后才能运行。

## 项目 I：制作一个手持相机

接下来，我们使用上述理论知识创建一个超小型的拍照神器。此项目的最终结果是实时摄像头画面显示在 Seeed Studio 的 XIAO 圆形显示屏上，当您锁定想要拍摄的物体时，触摸屏幕即可拍照并记录到 microSD 卡中。

### 前期准备

在开始此项目之前，您需要提前准备以下硬件。

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio 圆形显示屏 for XIAO</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

由于此项目将使用 XIAO 的圆形显示屏，请阅读 **[显示扩展板的 Wiki 环境配置](https://wiki.seeedstudio.com/get_start_round_display#software-preparation)** 的内容，在运行此项目的例程之前，安装必要的库并配置 TFT 环境。

由于 XIAO ESP32S3 Sense 设计中有三个上拉电阻 R4~R6 连接到 SD 卡槽，而圆形显示屏也有上拉电阻，因此两者同时使用时无法读取 SD 卡。为了解决此问题，我们需要切断 XIAO ESP32S3 Sense 扩展板上的 J3。

:::tip
然而，**我们需要感谢工程师 Mjrovai 提供了一种新的方法，可以同时使用 XIAO ESP32S3 Sense 上的 microSD 卡槽**，这也可以通过软件级别实现。我们可以参考 **[他的方法和步骤](https://github.com/Mjrovai/XIAO-ESP32S3-Sense/tree/main/camera_round_display_save_jpeg)**。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/33.png" style={{width:500, height:'auto'}}/></div>

切断 J3 后，XIAO ESP32S3 Sense 上的 SD 卡槽将无法正常工作，因此您需要将 microSD 卡插入圆形显示屏上的 SD 卡槽中。

接下来，请按顺序安装 microSD 卡、XIAO ESP32S3 Sense 和圆形显示屏。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/101.gif" style={{width:500, height:'auto'}}/></div>

:::tip
我们建议您先移除摄像头模块，以避免在用刀片切断 J3 连接时刮伤摄像头。
:::

### 具体操作

您可以通过以下链接找到完整的程序代码和所需的依赖文件。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/round_display_take_picture">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载代码</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

以下是此项目的 Arduino 程序。

```c
#include <Arduino.h>
#include <TFT_eSPI.h>
#include <SPI.h>
#include "esp_camera.h"
#include "FS.h"
#include "SD.h"
#include "SPI.h"

#define CAMERA_MODEL_XIAO_ESP32S3 // 有 PSRAM
#define TOUCH_INT D7

#include "camera_pins.h"

// 圆形显示屏的宽度和高度
const int camera_width = 240;
const int camera_height = 240;

// 文件计数器
int imageCount = 1;
bool camera_sign = false;          // 检查摄像头状态
bool sd_sign = false;              // 检查 SD 卡状态

TFT_eSPI tft = TFT_eSPI();

// SD 卡写入文件
void writeFile(fs::FS &fs, const char * path, uint8_t * data, size_t len){
    Serial.printf("写入文件: %s\n", path);

    File file = fs.open(path, FILE_WRITE);
    if(!file){
        Serial.println("打开文件失败");
        return;
    }
    if(file.write(data, len) == len){
        Serial.println("文件写入成功");
    } else {
        Serial.println("写入失败");
    }
    file.close();
}

bool display_is_pressed(void)
{
    if(digitalRead(TOUCH_INT) != LOW) {
        delay(3);
        if(digitalRead(TOUCH_INT) != LOW)
        return false;
    }
    return true;
}

void setup() {
  // 在此处放置您的设置代码，仅运行一次：
  Serial.begin(115200);
//  while(!Serial);

  // 摄像头引脚配置
  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
//  config.frame_size = FRAMESIZE_UXGA;
  config.frame_size = FRAMESIZE_240X240;
//  config.pixel_format = PIXFORMAT_JPEG; // 用于流式传输
  config.pixel_format = PIXFORMAT_RGB565;
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;
  
  // 如果存在 PSRAM IC，则使用 UXGA 分辨率和更高的 JPEG 质量进行初始化
  //                      为更大的预分配帧缓冲区。
  if(config.pixel_format == PIXFORMAT_JPEG){
    if(psramFound()){
      config.jpeg_quality = 10;
      config.fb_count = 2;
      config.grab_mode = CAMERA_GRAB_LATEST;
    } else {
      // 如果 PSRAM 不可用，则限制帧大小
      config.frame_size = FRAMESIZE_SVGA;
      config.fb_location = CAMERA_FB_IN_DRAM;
    }
  } else {
    // 面部检测/识别的最佳选项
    config.frame_size = FRAMESIZE_240X240;
#if CONFIG_IDF_TARGET_ESP32S3
    config.fb_count = 2;
#endif
  }

  // 摄像头初始化
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("摄像头初始化失败，错误代码 0x%x", err);
    return;
  }
  Serial.println("摄像头准备就绪");
  camera_sign = true; // 摄像头初始化检查通过

  // 显示屏初始化
  tft.init();
  tft.setRotation(1);
  tft.fillScreen(TFT_WHITE);

  // 初始化 SD 卡
  if(!SD.begin(D2)){
    Serial.println("SD 卡挂载失败");
    return;
  }
  uint8_t cardType = SD.cardType();

  // 判断 SD 卡类型是否可用
  if(cardType == CARD_NONE){
    Serial.println("未连接 SD 卡");
    return;
  }

  Serial.print("SD 卡类型: ");
  if(cardType == CARD_MMC){
    Serial.println("MMC");
  } else if(cardType == CARD_SD){
    Serial.println("SDSC");
  } else if(cardType == CARD_SDHC){
    Serial.println("SDHC");
  } else {
    Serial.println("未知类型");
  }

  sd_sign = true; // SD 卡初始化检查通过

}

void loop() {
  if( sd_sign && camera_sign){

    // 拍摄照片
    camera_fb_t *fb = esp_camera_fb_get();
    if (!fb) {
      Serial.println("获取摄像头帧缓冲区失败");
      return;
    }
    
    if(display_is_pressed()){
      Serial.println("显示屏被触摸");
      char filename[32];
      sprintf(filename, "/image%d.jpg", imageCount);
      // 保存照片到文件
      writeFile(SD, filename, fb->buf, fb->len);
      Serial.printf("保存图片：%s\n", filename);
      imageCount++;
    }
  
    // 解码 JPEG 图像
    uint8_t* buf = fb->buf;
    uint32_t len = fb->len;
    tft.startWrite();
    tft.setAddrWindow(0, 0, camera_width, camera_height);
    tft.pushColors(buf, len);
    tft.endWrite();
      
    // 释放图像缓冲区
    esp_camera_fb_return(fb);

    delay(10);
  }
}
```

将程序上传到 XIAO ESP32S3 Sense，如果上传成功后屏幕没有点亮，可能需要点击 XIAO 上的 Reset 按钮，然后您将看到监控画面实时显示在圆形屏幕上。点击屏幕上的任意位置，图像将被记录并保存到 microSD 卡中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/95.gif" style={{width:800, height:'auto'}}/></div>

### 程序注释

摄像头和 microSD 卡的配置在前面的内容中已经介绍过，因此这里不再重复。关于 microSD 卡的使用，您可以参考 [XIAO ESP32S3 Sense 文件系统](https://wiki.seeedstudio.com/xiao_esp32s3_sense_filesystem) Wiki 来学习如何使用它。

```cpp
// 拍摄照片
camera_fb_t *fb = esp_camera_fb_get();
if (!fb) {
  Serial.println("获取摄像头帧缓冲区失败");
  return;
}

...
  
// 释放图像缓冲区
esp_camera_fb_return(fb);

delay(10);
```

上述程序是调用摄像头的基本代码块，分为三部分：屏幕捕获、异常退出和释放照片缓冲区。

```cpp
if(display_is_pressed()){
  Serial.println("屏幕被触摸");
  char filename[32];
  sprintf(filename, "/image%d.jpg", imageCount);
  // 将照片保存到文件
  writeFile(SD, filename, fb->buf, fb->len);
  Serial.printf("图片已保存：%s\n", filename);
  imageCount++;
}
```

上述程序用于检查屏幕是否被触摸。如果是，则代码将捕获的图像保存到 microSD 卡上的文件中。

```cpp
// 解码 JPEG 图像
uint8_t* buf = fb->buf;
uint32_t len = fb->len;
tft.startWrite();
tft.setAddrWindow(0, 0, camera_width, camera_height);
tft.pushColors(buf, len);
tft.endWrite();
```

这部分代码将捕获的图像显示在屏幕上。它首先从 `camera_fb_t` 结构中获取图像缓冲区及其长度。然后，它设置屏幕以接收图像数据，并使用 `pushColors()` 函数将图像显示在屏幕上。

## 录制短视频并保存到 microSD 卡

:::note
我们不推荐在 MCU 上进行视频编码导出，因为当前支持的编码库资源太少，操作非常复杂且繁琐。

本示例不涉及视频编码，导出的视频是每帧的 MJPG 组合 AVI，因此视频录制可能不是特别好或令人满意。本教程的目的是为您提供录制短视频的简单方法和思路，我们欢迎有更好解决方案的合作伙伴向我们提交 PR。
:::

在前面的章节中，我们掌握了如何使用摄像头捕获图像。我们知道单个图像拼接在一起可以形成动态视频画面。基于这一理论，本章的项目将指导您如何编写程序，每隔 1 分钟录制一个 10 秒的视频，并将其保存到 microSD 卡中。

您可以在以下链接中找到完整的程序代码和所需的依赖文件。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/record_video">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载代码</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

以下是本项目的 Arduino 程序。

```cpp
#include "esp_camera.h"
#include "FS.h"
#include "SD.h"
#include "SPI.h"
#include "esp_timer.h"

#define CAMERA_MODEL_XIAO_ESP32S3 // 带有 PSRAM

#include "camera_pins.h"

const int SD_PIN_CS = 21;

File videoFile;
bool camera_sign = false;
bool sd_sign = false;
unsigned long lastCaptureTime = 0;
unsigned long captureDuration = 10000; // 10 秒
int imageCount = 0;

void setup() {
  Serial.begin(115200);
  while(!Serial);
  
  // 初始化摄像头
  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.pixel_format = PIXFORMAT_JPEG;
  config.frame_size = FRAMESIZE_SVGA;
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;

  // 摄像头初始化
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("摄像头初始化失败，错误代码 0x%x", err);
    return;
  }
  
  camera_sign = true;
  
  // 初始化 SD 卡
  if (!SD.begin(SD_PIN_CS)) {
    Serial.println("SD 卡初始化失败！");
    return;
  }

  uint8_t cardType = SD.cardType();

  // 判断 SD 卡类型是否可用
  if(cardType == CARD_NONE){
    Serial.println("未检测到 SD 卡");
    return;
  }

  Serial.print("SD 卡类型: ");
  if(cardType == CARD_MMC){
    Serial.println("MMC");
  } else if(cardType == CARD_SD){
    Serial.println("SDSC");
  } else if(cardType == CARD_SDHC){
    Serial.println("SDHC");
  } else {
    Serial.println("未知");
  }
  
  sd_sign = true;

  Serial.println("视频将在一分钟后开始，请做好准备。");
}

void loop() {
  // 摄像头和 SD 卡可用，开始录制视频
  if (camera_sign && sd_sign) {
    // 获取当前时间
    unsigned long now = millis();

    // 如果距离上次视频录制已超过 1 分钟，开始录制新视频
    if ((now - lastCaptureTime) >= 60000) {
      char filename[32];
      sprintf(filename, "/video%d.avi", imageCount);
      videoFile = SD.open(filename, FILE_WRITE);
      if (!videoFile) {
        Serial.println("打开视频文件失败！");
        return;
      }
      Serial.printf("正在录制视频：%s\n", filename);
      lastCaptureTime = now;
      
      // 开始捕获视频帧
      while ((millis() - lastCaptureTime) < captureDuration) {
        camera_fb_t *fb = esp_camera_fb_get();
        if (!fb) {
          Serial.println("获取帧缓冲区失败！");
          break;
        }
        videoFile.write(fb->buf, fb->len);
        esp_camera_fb_return(fb);
      }
      
      // 关闭视频文件
      videoFile.close();
      Serial.printf("视频已保存：%s\n", filename);
      imageCount++;

      Serial.println("视频将在一分钟后开始，请做好准备。");

      // 等待剩余的一分钟时间
      delay(60000 - (millis() - lastCaptureTime));
    }
  }
}
```

将代码上传到 XIAO ESP32S3 Sense，打开串口监视器，此时请调整摄像头位置对准您想要录制的对象。一分钟后，XIAO 上的橙色 LED 将开始闪烁，录制将开始并保存到 microSD 卡中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/96.png" style={{width:800, height:'auto'}}/></div>

:::note
由于程序未涉及编码和帧率等设置，如果录制的画面每帧没有变化，视频可能只会播放一秒钟。
:::

### 程序注释

录制视频的核心和关键在于持续获取照片流 10 秒钟，并将其连续写入 microSD 卡。

```cpp
// 开始捕获视频帧
while ((millis() - lastCaptureTime) < captureDuration) {
  camera_fb_t *fb = esp_camera_fb_get();
  if (!fb) {
    Serial.println("获取帧缓冲区失败！");
    break;
  }
  videoFile.write(fb->buf, fb->len);
  esp_camera_fb_return(fb);
}
```

在此基础上，我们在外部嵌套了一层 1 分钟的等待判断，以确保每隔 1 分钟开始录制新的视频。

```cpp
// 如果距离上次视频捕获已经超过 1 分钟，则开始捕获新视频
if ((now - lastCaptureTime) >= 60000) {

  ...

  delay(60000 - (millis() - lastCaptureTime));
}
```

## 项目二：视频流

在本教程的最后，我们展示一个视频流项目。该项目允许您在由 XIAO ESP32S3 Sense 创建的网页上查看实时视频流，并通过设置一些参数更改屏幕显示。

您可以通过以下链接找到完整的程序代码和所需的依赖文件。

如果您在 Arduino 中使用的是 **2.0.x** 版本的 esp32 板包，请下载以下内容：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/CameraWebServer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载代码</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

如果您在 Arduino 中使用的是 **3.0.x** 版本的 esp32 板包，请下载以下内容：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/CameraWebServer_for_esp-arduino_3.0.x">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载代码</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

以下是该项目的 Arduino 程序。

```cpp
#include "esp_camera.h"
#include <WiFi.h>

#define CAMERA_MODEL_XIAO_ESP32S3 // 带有 PSRAM

#include "camera_pins.h"

// ===========================
// 输入您的 WiFi 凭据
// ===========================
const char* ssid = "**********";
const char* password = "**********";

void startCameraServer();
void setupLedFlash(int pin);

void setup() {
  Serial.begin(115200);
  while(!Serial);
  Serial.setDebugOutput(true);
  Serial.println();

  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.frame_size = FRAMESIZE_UXGA;
  config.pixel_format = PIXFORMAT_JPEG; // 用于流媒体
  //config.pixel_format = PIXFORMAT_RGB565; // 用于人脸检测/识别
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;
  
  // 如果存在 PSRAM IC，则使用 UXGA 分辨率和更高的 JPEG 质量初始化
  //                      以获得更大的预分配帧缓冲区。
  if(config.pixel_format == PIXFORMAT_JPEG){
    if(psramFound()){
      config.jpeg_quality = 10;
      config.fb_count = 2;
      config.grab_mode = CAMERA_GRAB_LATEST;
    } else {
      // 如果没有 PSRAM，限制帧大小
      config.frame_size = FRAMESIZE_SVGA;
      config.fb_location = CAMERA_FB_IN_DRAM;
    }
  } else {
    // 人脸检测/识别的最佳选项
    config.frame_size = FRAMESIZE_240X240;
#if CONFIG_IDF_TARGET_ESP32S3
    config.fb_count = 2;
#endif
  }

  // 摄像头初始化
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("摄像头初始化失败，错误代码 0x%x", err);
    return;
  }

  sensor_t * s = esp_camera_sensor_get();
  // 初始传感器垂直翻转，颜色有点饱和
  if (s->id.PID == OV3660_PID) {
    s->set_vflip(s, 1); // 翻转回来
    s->set_brightness(s, 1); // 稍微提高亮度
    s->set_saturation(s, -2); // 降低饱和度
  }
  // 降低帧大小以提高初始帧速率
  if(config.pixel_format == PIXFORMAT_JPEG){
    s->set_framesize(s, FRAMESIZE_QVGA);
  }

// 如果在 camera_pins.h 中定义了 LED 引脚，则设置 LED 闪光灯
#if defined(LED_GPIO_NUM)
  setupLedFlash(LED_GPIO_NUM);
#endif

  WiFi.begin(ssid, password);
  WiFi.setSleep(false);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi 已连接");

  startCameraServer();

  Serial.print("摄像头已准备好！使用 'http://");
  Serial.print(WiFi.localIP());
  Serial.println("' 进行连接");
}

void loop() {
  // 什么都不做。一切都由网络服务器的另一个任务完成
  delay(10000);
}
```

在上传程序之前，您需要将代码中的 WiFi 名称和密码更改为您自己的。上传程序后，如果 XIAO ESP32C3 成功连接到您的 WiFi，其 IP 地址将会打印出来。

:::caution
XIAO ESP32S3 如果您长时间运行此项目，请注意散热，XIAO 会变得非常热，请小心烫伤！
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/97.png" style={{width:800, height:'auto'}}/></div>

:::tip
如上图所示，如果您打开调试信息的输出，那么您可能会在串口监视器中看到一些芯片内核的调试信息。例如 `[0;31mE (2947) MFN: Partition Not found[0m`，请不要担心，这不会影响程序的运行。
:::

请打开您的浏览器，我们推荐使用 Edge 或 Google Chrome，并输入该 IP 地址，您将看到视频的配置页面。

:::note
请注意，您使用浏览器的设备需要与 XIAO 在同一个局域网内。
:::

在配置您想要设置的视频流规格后，点击左侧工具栏底部的 **Start Stream**，您将看到摄像头的实时画面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/98.png" style={{width:1000, height:'auto'}}/></div>

幸运的是，ESP32 官方还为程序添加了人脸识别功能。您可以通过降低画质并打开人脸识别的开关来体验该功能。

:::tip
出于性能原因，屏幕质量不能高于 **CIF**，否则当您打开人脸识别开关时，网页会弹出错误提示。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/99.png" style={{width:400, height:'auto'}}/></div>

哦，我的大脸被圈出来了。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/100.png" style={{width:600, height:'auto'}}/></div>

## OV5640 自动对焦

### 硬件准备

<div class="table-center">
  <table align="center">
    <tr>
        <th>适用于 XIAO ESP32S3 Sense 的 OV5640 摄像头</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/OV5640.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/OV5640-Camera-for-XIAO-ESP32S3-Sense-With-Heat-Sink-p-5739.html?qid=UXYOXT_08tfc9pt_1746512260418">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### 软件准备

#### 方法 1
特别感谢 **@Eric** 提供的开源代码

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/0015/ESP32-OV5640-AF/tree/main">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

**代码示例**
``` cpp
#include "esp_camera.h"
#include <WiFi.h>
#include "ESP32_OV5640_AF.h"

#define CAMERA_MODEL_XIAO_ESP32S3 // 有 PSRAM

#include "camera_pins.h"

const char* ssid = ""; // WiFi 名称
const char* password = ""; // WiFi 密码

void startCameraServer();
void setupLedFlash(int pin);
OV5640 ov5640 = OV5640();

void setup() {
  Serial.begin(115200);
  while(!Serial);
  Serial.setDebugOutput(true);
  Serial.println();

  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.frame_size = FRAMESIZE_UXGA;
  config.pixel_format = PIXFORMAT_JPEG; // 用于流媒体
  //config.pixel_format = PIXFORMAT_RGB565; // 用于人脸检测/识别
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;
  
  // 如果存在 PSRAM IC，则使用 UXGA 分辨率和更高的 JPEG 质量进行初始化
  // 为更大的预分配帧缓冲区。
  if(config.pixel_format == PIXFORMAT_JPEG){
    if(psramFound()){
      config.jpeg_quality = 10;
      config.fb_count = 2;
      config.grab_mode = CAMERA_GRAB_LATEST;
    } else {
      // 如果没有 PSRAM，限制帧大小
      config.frame_size = FRAMESIZE_SVGA;
      config.fb_location = CAMERA_FB_IN_DRAM;
    }
  } else {
    // 人脸检测/识别的最佳选项
    config.frame_size = FRAMESIZE_240X240;
#if CONFIG_IDF_TARGET_ESP32S3
    config.fb_count = 2;
#endif
  }

  // 摄像头初始化
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("摄像头初始化失败，错误代码 0x%x", err);
    return;
  }

  sensor_t * s = esp_camera_sensor_get();
  ov5640.start(s);

    if (ov5640.focusInit() == 0) {
    Serial.println("OV5640_Focus_Init 成功！");
  }

  if (ov5640.autoFocusMode() == 0) {
    Serial.println("OV5640_Auto_Focus 成功！");
  }

// 如果在 camera_pins.h 中定义了 LED 引脚，则设置 LED 闪光灯
#if defined(LED_GPIO_NUM)
  setupLedFlash(LED_GPIO_NUM);
#endif

  WiFi.begin(ssid, password);
  WiFi.setSleep(false);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi 已连接");

  startCameraServer();

  Serial.print("摄像头已准备好！使用 'http://");
  Serial.print(WiFi.localIP());
  Serial.println("' 进行连接");
}

void loop() {
  uint8_t rc = ov5640.getFWStatus();
  Serial.printf("FW_STATUS = 0x%x\n", rc);

  if (rc == -1) {
    Serial.println("检查您的 OV5640");
  } else if (rc == FW_STATUS_S_FOCUSED) {
    Serial.println("已对焦！");
  } else if (rc == FW_STATUS_S_FOCUSING) {
    Serial.println("正在对焦！");
  }
}
```

### 结果图表

:::tip
分辨率需要高于 1280*1024 才能看到对焦效果，屏幕会有延迟，在对焦时需要等待一会儿。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/OV5640.gif" style={{width:700, height:'auto'}}/></div>

#### 方法 2

:::tip
分辨率需要高于 1600*1200 才能看到对焦效果，屏幕会有延迟，在对焦时需要等待一会儿。
:::

下载以下 zip 文件并添加到 Arduino 中：
- **[ZIP]** [OV5640 Auto](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/OV5640_AF.zip)

:::tip
方法 1 和方法 2 的库中的 OV5640 不能同时存在。
:::

```cpp
#include "esp_camera.h"
#include <WiFi.h>
#include "ESP32_OV5640_AF.h"

#define CAMERA_MODEL_XIAO_ESP32S3 // 带有 PSRAM

#include "camera_pins.h"

const char *ssid = ""; // WiFi 名称
const char *password = ""; // WiFi 密码

void startCameraServer();
void setupLedFlash(int pin);
OV5640 ov5640 = OV5640();

void setup() {
  Serial.begin(115200);

  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.frame_size = FRAMESIZE_UXGA;
  config.pixel_format = PIXFORMAT_JPEG;
  config.grab_mode = CAMERA_GRAB_LATEST;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 10;
  config.fb_count = 2;

  if(psramFound()){
    config.jpeg_quality = 10;
    config.fb_count = 2;
    config.grab_mode = CAMERA_GRAB_LATEST;
  } else {
    // 如果没有 PSRAM，限制帧大小
    config.frame_size = FRAMESIZE_SVGA;
    config.fb_location = CAMERA_FB_IN_DRAM;
  }

  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("摄像头初始化失败，错误代码 0x%x", err);
    return;
  }

  // 自动对焦
#if 1
  sensor_t* sensor = esp_camera_sensor_get();
  int ret = 0;
  ov5640.start(sensor);

  if (ov5640.focusInit() == 0) {
      Serial.println("OV5640_Focus_Init 成功！");
  } else {
      Serial.println("OV5640_Focus_Init 失败！");
  }

  ret = ov5640.autoFocusMode(false);
  if (ret == 0) {
    Serial.println("OV5640_Auto_Focus 成功！");
  } else {
    Serial.printf("OV5640_Auto_Focus 失败！ - [%d]\n", ret);
  }
#endif

  WiFi.begin(ssid, password);
  WiFi.setSleep(false);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nWiFi 已连接");

  startCameraServer();

  Serial.printf("摄像头已准备好！使用 'http://%s' 连接\n", WiFi.localIP().toString().c_str());
}

void loop() {
  if (Serial.available()) {
    sensor_t* sensor = esp_camera_sensor_get();
    int ret = 0;

    switch (Serial.read()) {
      case 'b':
        ret = sensor->set_reg(sensor, 0x3022, 0xff, 0x03);
        Serial.printf("开始自动对焦 - %d\n", ret);
        break;
      case 's':
        ret = sensor->set_reg(sensor, 0x3022, 0xff, 0x06);
        Serial.printf("对焦停止 - %d\n", ret);
        break;
    }
  }

  uint8_t rc = ov5640.getFWStatus();
  Serial.printf("FW_STATUS = 0x%x\n", rc);

  if (rc == -1) {
    Serial.println("检查你的 OV5640");
  } else if (rc == FW_STATUS_S_FOCUSED) {
    Serial.println("已对焦！");
  } else if (rc == FW_STATUS_S_FOCUSING) {
    Serial.println("正在对焦！");
  } else {
  }

  delay(1000);
}
```

:::tip
推荐使用方法 1，因为它的对焦效果比方法 2 更明显，并且提供更清晰的图像。
:::

## 故障排除

### Q1: 当 XIAO ESP32S3 Sense 和圆形显示屏一起使用时，我是否必须切断 J3 引脚？可以使用哪个 SD 卡插槽？

答：原则上，当 XIAO ESP32S3 Sense 和圆形显示屏一起使用时，为了使用 microSD 卡，需要切断 J3 引脚。原因是两个扩展板的电路设计中都有上拉电阻，因此理论上，如果两个上拉电阻同时工作，SD 卡插槽将无法正常工作，会出现 SD 卡挂载失败的错误信息。由于圆形显示屏上的上拉电阻无法屏蔽，因此需要切断 Sense 扩展板上的 J3，以确保两者一起使用时只有一个上拉电阻在工作。这也决定了当两者一起使用时，只有圆形显示屏上的 SD 卡插槽是活动的。

然而，**我们要感谢工程师 Mjrovai 提供了一种新的方法，可以同时使用 XIAO ESP32S3 Sense 上的 microSD 卡插槽**，这在软件层面也是可行的。我们可以参考 **[他的方法和步骤](https://github.com/Mjrovai/XIAO-ESP32S3-Sense/tree/main/camera_round_display_save_jpeg)**。

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>