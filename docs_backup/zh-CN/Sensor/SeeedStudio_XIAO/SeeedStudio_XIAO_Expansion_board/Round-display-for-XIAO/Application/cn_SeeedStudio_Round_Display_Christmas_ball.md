---
description: XIAO 圆形显示屏圣诞球
title: 为你的圣诞树制作一个小型圣诞球
keywords:
- XIAO
- 圆形显示屏
- 圣诞节
image: https://files.seeedstudio.com/wiki/Christmas_round_display/Christmas_ball_1.gif
slug: /cn/round_display_christmas_ball
last_update:
  date: 05/15/2025
  author: Bruno Santos
---

# Seeed Studio 圆形显示屏用于 XIAO 圣诞球

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Christmas_round_display/Christmas_ball.gif" style={{width:400, height:'auto'}}/>
</div>

在本教程中，我将向你展示如何制作一个带有飘落雪花和背景图片切换效果的圣诞球。

程序实现以下功能：
- 显示存储为 C 数组的背景图片。
- 模拟雪花粒子飘落在图片上，并带有风效应。
- 检测触摸输入并循环切换背景图片。
- 使用双缓冲技术实现流畅动画。

## 环境准备
### 硬件
在这个项目中，我们需要以下硬件：
- [Seeed Studio 圆形显示屏用于 XIAO](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)
- [XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)

我选择使用 XIAO ESP32S3 是因为它的内存容量。PNGDEC 需要大约 40KB 的内存才能运行。

### 软件准备

要使用圆形显示屏，请访问 [圆形显示屏快速入门教程](https://wiki.seeedstudio.com/get_start_round_display/#getting-started) 安装必要的库。

尝试一些示例代码以确保所有功能正常运行。

### 库
在这个项目中，我们将使用 [Seeed Studio 圆形显示屏用于 XIAO](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html) 附带的库。

按照教程 [圆形显示屏快速入门教程](https://wiki.seeedstudio.com/get_start_round_display/#getting-started) 中的说明安装所有库。
之后，你还需要以下内容：
- PNGdec 库。
- **更新 LVGL 库**（或者不要安装 Seeed Studio GitHub 提供的版本）。

## 图片
我们的图片是存储在 Flash 数组中的 PNG 格式图片。它们通过 PNGdec 库进行显示。

**所有图片必须是 PNG 格式**

以下是我使用的图片——全部由 AI 生成：
<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/Christmas_round_display/background1.png" style={{width:200, height:'auto'}}/>
<img src="https://files.seeedstudio.com/wiki/Christmas_round_display/background2.png" style={{width:200, height:'auto'}}/>
<img src="https://files.seeedstudio.com/wiki/Christmas_round_display/background3.png" style={{width:200, height:'auto'}}/>
</div>

我们的背景图片需要进行处理，以便 TFT_eSPI 可以显示它们，并且它们能够很好地适配 XIAO 圆形显示屏。

### 准备图片
#### 调整图片大小
XIAO 圆形显示屏的分辨率为 240x240。我们需要调整图片大小。我将展示如何使用 [GIMP](https://www.gimp.org/) 来完成这一操作。

1. 打开图片。
2. 进入 **图片 > 缩放图片**。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot1.jpg" style={{width:600, height:'auto'}}/></div>

3. 将宽度和高度设置为 240。由于选中了 **保持比例**（链条图标），当你更改 **宽度** 时，**高度** 也会自动更改。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot2.jpg" style={{width:400, height:'auto'}}/></div>

4. 点击 **缩放** 按钮。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot3.jpg" style={{width:400, height:'auto'}}/></div>

5. 保存图片（我将覆盖原来的图片）。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot4.jpg" style={{width:400, height:'auto'}}/></div>

#### 创建 Flash 数组

**注意：** 这些说明包含在 TFT_eSPI 的 Flash_PNG 示例中。

要创建 Flash 数组，请访问 [文件到 C 风格数组转换器](https://notisrac.github.io/FileToCArray/)。

接下来的步骤如下：
1. 使用 **浏览** 上传图片。上传图片后：
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot5.jpg" style={{width:800, height:'auto'}}/></div>

2. 我们需要设置一些选项：
- **作为二进制处理**。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot6.jpg" style={{width:800, height:'auto'}}/></div>

其他选项会变成灰色不可选。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot7.jpg" style={{width:600, height:'auto'}}/></div>

3. 将 **数据类型** 更改为 **char**。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot8.jpg" style={{width:800, height:'auto'}}/></div>

4. 点击转换。这将把图片转换为数组。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot9.jpg" style={{width:800, height:'auto'}}/></div>

5. 你现在可以点击 **保存为文件** 按钮，将图片保存并添加到 Arduino Sketch 中，或者点击 **复制到剪贴板** 按钮。
如果选择 **复制到剪贴板**，需要点击 Arduino 编辑器右侧的三个点，然后选择 **新建标签**。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot10.jpg" style={{width:400, height:'auto'}}/></div>

为其命名（通常使用图片名称并加上 .h 扩展名）。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot11.jpg" style={{width:600, height:'auto'}}/></div>

最终，你会得到所有图片的 *.h* 文件。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot12.jpg" style={{width:800, height:'auto'}}/></div>

## 代码
以下是圣诞球的代码。
同时对代码中的主要功能进行了简单说明。代码中也包含了一些注释。

### 头文件和库
我们首先引入一些库。
```cpp
#include <PNGdec.h>
#include <TFT_eSPI.h>
#include <Wire.h>

#include "background1.h"
#include "background2.h"
#include "background3.h"

#define USE_TFT_ESPI_LIBRARY
#include "lv_xiao_round_screen.h"
```
请记住，您需要安装 Seeed Studio 的相关库。

### 背景图片
以下是管理背景图片的函数：
```cpp
struct Background {
  const uint8_t *data;
  size_t size;
};

const Background backgrounds[] = {
    {(const uint8_t *)background1, sizeof(background1)},
    {(const uint8_t *)background2, sizeof(background2)},
    {(const uint8_t *)background3, sizeof(background3)},
};
```
- **结构体**：每个背景图片存储为一个 `Background` 结构体，包含：
  - `data`：指向 PNG 数据的指针。
  - `size`：PNG 文件的大小。

- **数组**：`backgrounds` 数组存储所有背景图片。`currentBackground` 变量用于跟踪当前显示的背景。

### 雪花粒子模拟
1. 初始化粒子
```cpp
void initParticles() {
  for (int i = 0; i < numParticles; i++) {
    particles[i].x = random(0, sprite.width());
    particles[i].y = random(0, sprite.height());
    particles[i].speed = random(3, 8);
  }
}
```
- 它使用随机位置和速度初始化 *numParticles*。

2. 更新粒子
```cpp
void updateParticles() {
  for (int i = 0; i < numParticles; i++) {
    particles[i].speed += random(-1, 2); // 速度变化
    particles[i].speed = constrain(particles[i].speed, 3, 8);
    particles[i].y += particles[i].speed; // 向下移动
    particles[i].x += random(-1, 2);      // 风效应
    // 环绕逻辑
    if (particles[i].y > sprite.height()) {
      particles[i].y = 0;
      particles[i].x = random(0, sprite.width());
      particles[i].speed = random(3, 8);
    }
    if (particles[i].x < 0) particles[i].x = sprite.width();
    if (particles[i].x > sprite.width()) particles[i].x = 0;
  }
}
```
- 更新粒子位置：
  - **下落效果**：每个粒子向下移动。
  - **风效应**：添加轻微的水平漂移。
  - **环绕逻辑**：粒子从底部退出后会重置到顶部。

3. 渲染粒子：
```cpp
void renderParticlesToSprite() {
  for (int i = 0; i < numParticles; i++) {
    sprite.fillCircle(particles[i].x, particles[i].y, 2, TFT_WHITE);
  }
}
```
- 将每个粒子渲染为一个小的白色圆点。

### PNG 解码
```cpp
int16_t rc = png.openFLASH((uint8_t *)backgrounds[currentBackground].data,
                           backgrounds[currentBackground].size,
                           pngDrawToSprite);
if (rc != PNG_SUCCESS) {
  Serial.println("Failed to open PNG file!");
  return;
}
png.decode(NULL, 0);
```
- 使用 *png.openFLASH()* 函数加载并解码当前背景 PNG。

### 触摸交互
```cpp
if (chsc6x_is_pressed()) {
  currentBackground = (currentBackground + 1) % numBackgrounds; // 切换背景
  delay(300); // 防抖
}
```
- 使用 *chsc6x_is_pressed()* 检测触摸事件，并通过递增 *currentBackground* 来更改背景图片。

### 设置和循环
- **设置：**
```cpp
void setup() {
  Serial.begin(115200);
  tft.begin();
  tft.fillScreen(TFT_BLACK);
  sprite.createSprite(240, 240); // 匹配显示屏大小
  pinMode(TOUCH_INT, INPUT_PULLUP);
  Wire.begin();
  initParticles();
}
```
- 初始化显示屏、触摸输入和雪花粒子。

- **主循环：**
```cpp
void loop() {
  sprite.fillScreen(TFT_BLACK);
  // 渲染背景和雪花
  int16_t rc = png.openFLASH((uint8_t *)backgrounds[currentBackground].data,
                             backgrounds[currentBackground].size,
                             pngDrawToSprite);
  if (rc == PNG_SUCCESS) {
    png.decode(NULL, 0);
    updateParticles();
    renderParticlesToSprite();
    sprite.pushSprite(0, 0);
  }
  // 处理触摸输入
  if (chsc6x_is_pressed()) {
    currentBackground = (currentBackground + 1) % numBackgrounds;
    delay(300);
  }
  delay(10); // ~100 FPS
}
```
- 清除缓冲区，渲染当前帧（背景 + 粒子），并检查用户输入。

### 双缓冲
为了减少闪烁并改善雪花动画的流畅性，我们使用 **双缓冲**。

这允许我们在屏幕外的缓冲区中绘制内容，然后再显示到屏幕上。
#### 双缓冲实现
在此项目中，TFT_eSPI 库的 `TFT_eSprite` 类实现了双缓冲。
1. **创建缓冲区**
- 在 `setup()` 函数中创建缓冲区：
```cpp
sprite.createSprite(240, 240); // 匹配显示屏大小
```
2. **绘制到缓冲区**
- 所有绘制操作（背景渲染和雪花粒子动画）都在缓冲区中完成：
```cpp
sprite.fillScreen(TFT_BLACK); // 清除缓冲区
renderParticlesToSprite();   // 绘制雪花粒子
```

3. **更新显示屏**
- 在缓冲区中完成帧绘制后，将其一次性推送到显示屏：
```cpp
sprite.pushSprite(0, 0);
```
- 这会将缓冲区的内容瞬间传输到屏幕。

4. **复用**
- 在 *loop()* 的开头清除缓冲区以复用：
```cpp
sprite.fillScreen(TFT_BLACK);
```
### 使用双缓冲的优势
- **流畅的雪花动画**：雪花粒子的下落更新无闪烁。
- **动态背景切换**：触摸触发的背景切换无可见延迟或伪影。
- **高效渲染**：在内存（RAM）中绘制比逐行更新显示屏更快。

**以下是项目的完整代码**：
```cpp
/**
*
* 要将图像转换为 C 数组，请访问：
* https://notisrac.github.io/FileToCArray/
*
*/
#include <PNGdec.h>
#include <TFT_eSPI.h>

#include "background1.h"
#include "background2.h"
#include "background3.h"

#define USE_TFT_ESPI_LIBRARY
#include "lv_xiao_round_screen.h"

// PNG 解码器和 TFT 显示实例
PNG png;
//TFT_eSPI tft = TFT_eSPI();
TFT_eSprite sprite = TFT_eSprite(&tft); // 屏幕外缓冲区

#define MAX_IMAGE_WIDTH 240 

// 雪球的背景
struct Background {
  const uint8_t *data;
  size_t size;
};

// 显式定义背景
const Background backgrounds[] = {
    {(const uint8_t *)background1, sizeof(background1)},
    {(const uint8_t *)background2, sizeof(background2)},
    {(const uint8_t *)background3, sizeof(background3)},
};
const size_t numBackgrounds = sizeof(backgrounds) / sizeof(backgrounds[0]);

int currentBackground = 0; // 当前背景的索引

// 雪花粒子属性
const int numParticles = 100; // 雪花粒子数量
struct Particle {
  int16_t x, y;   // 位置
  int16_t speed;  // 垂直速度
};
Particle particles[numParticles];

// 将 PNG 绘制到缓冲区的函数（PNG 解码器的回调）
void pngDrawToSprite(PNGDRAW *pDraw) {
  uint16_t lineBuffer[MAX_IMAGE_WIDTH];
  png.getLineAsRGB565(pDraw, lineBuffer, PNG_RGB565_BIG_ENDIAN, 0xffffffff);
  sprite.pushImage(0, pDraw->y, pDraw->iWidth, 1, lineBuffer);
}

// 初始化雪花粒子
void initParticles() {
  for (int i = 0; i < numParticles; i++) {
    particles[i].x = random(0, sprite.width());
    particles[i].y = random(0, sprite.height());
    particles[i].speed = random(3, 8); // 每个雪花的随机速度
  }
}

// 更新雪花粒子位置
void updateParticles() {
  for (int i = 0; i < numParticles; i++) {
    particles[i].speed += random(-1, 2); // 随机速度变化
    particles[i].speed = constrain(particles[i].speed, 3, 8);
    particles[i].y += particles[i].speed;
    particles[i].x += random(-1, 2); // 风效应

    // 屏幕环绕
    if (particles[i].y > sprite.height()) {
      particles[i].y = 0;
      particles[i].x = random(0, sprite.width());
      particles[i].speed = random(3, 8);
    }
    if (particles[i].x < 0) particles[i].x = sprite.width();
    if (particles[i].x > sprite.width()) particles[i].x = 0;
  }
}

// 将雪花粒子渲染到缓冲区
void renderParticlesToSprite() {
  for (int i = 0; i < numParticles; i++) {
    sprite.fillCircle(particles[i].x, particles[i].y, 2, TFT_WHITE);
  }
}

void setup() {
  Serial.begin(115200);
  Serial.println("\n\n使用 PNGdec 库并支持触摸交互");

  // 初始化 TFT
  tft.begin();
  tft.fillScreen(TFT_BLACK);
  sprite.createSprite(240, 240); // 匹配显示屏大小

  // 初始化触摸中断引脚
  pinMode(TOUCH_INT, INPUT_PULLUP);
  Wire.begin();

  // 初始化粒子
  initParticles();

  Serial.println("设置完成。");
}

void loop() {
  // 清除缓冲区以准备新帧
  sprite.fillScreen(TFT_BLACK);

  // 将当前背景渲染到缓冲区  
  int16_t rc = png.openFLASH((uint8_t *)backgrounds[currentBackground].data,
                           backgrounds[currentBackground].size,
                           pngDrawToSprite);


  if (rc != PNG_SUCCESS) {
    Serial.println("无法打开 PNG 文件！");
    return;
  }
  png.decode(NULL, 0); // 解码并渲染背景

  // 更新并渲染雪花粒子
  updateParticles();
  renderParticlesToSprite();

  // 将缓冲区推送到显示屏
  sprite.pushSprite(0, 0);

  // 使用 chsc6x_is_pressed 检查触摸输入
  if (chsc6x_is_pressed()) {
    currentBackground = (currentBackground + 1) % numBackgrounds; // 循环切换背景
    delay(300); // 防抖延迟
  }

  delay(10); // ~100 FPS
}
```

现在，您可以使用自己的图片来创建一个神奇的圣诞球。

## ✨ 贡献者项目

- 本项目由 Seeed Studio [贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) 支持。
- 感谢 [Bruno Santos](https://github.com/orgs/Seeed-Studio/projects/6/views/1?sliceBy%5Bvalue%5D=feiticeir0&pane=issue&itemId=90657934&issue=Seeed-Studio%7Cwiki-documents%7C1993)，您的作品将会被[展示](https://wiki.seeedstudio.com/contributors/)。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时拥有尽可能顺畅的体验。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>