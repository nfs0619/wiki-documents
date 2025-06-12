---
description: 基于 Edge Impulse 的语音识别
title: 基于 Edge Impulse 的语音识别
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-BLE-PDM-EI
last_update:
  date: 05/15/2025
  author: Bruno Santos (Feiticeir0)
---

# 使用 XIAO nRF52840 基于 Edge Impulse 的语音识别

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

:::caution
本教程的内容可能已不再有效，且不再提供新的软件维护和技术支持。
:::


在本 Wiki 中，我将展示如何使用 Edge Impulse 和 Seeed Studio XIAO nRF52840 的机器学习功能进行语音识别。我们将使用 XIAO nRF52840 Sense 上已经集成的麦克风。

## 项目前的知识准备

XIAO nRF52840 并未被 Edge Impulse 官方支持，也未作为数据采集设备列出，但我将演示如何使用它通过设备麦克风运行推理。

## 开始使用

要完成本教程，您需要以下硬件：

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO nRF52840-Sense</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### 硬件准备

我们不需要任何额外的硬件准备。XIAO nRF52840 已经具备完成此项目所需的一切。我们只需要 PDM 麦克风。

#### 以下是 XIAO nRF52840 Sense 的硬件引脚图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/XIAO_nrf82840_hardware.png" alt="XIAO nrf82840 hardware" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}></p>

## 软件准备

要尝试此项目，我们只需要以下三样东西：

1. Google 语音命令数据集（见下文）
2. [Edge Impulse 账户](https://edgeimpulse.com/)
3. [Arduino IDE](https://www.arduino.cc/)

### 数据集

- 我将使用 Google 语音命令数据集，但不是整个数据集，只选取其中的一些单词。
- 首先，下载数据集并解压。完整数据集大小为 2.3GB。
- 此 <a href="https://www.tensorflow.org/lite/microcontrollers" target="_blank">Google 语音命令数据集</a> 是 Google 在其 TensorFlow Lite for MicroControllers 的微语音示例中使用的。
- <a href="https://github.com/tensorflow/tflite-micro/blob/main/tensorflow/lite/micro/examples/micro_speech/train/train_micro_speech_model.ipynb" target="_blank">您可以在这里找到相关代码。</a>

我们可以从上面的第一个链接下载数据集，解压后文件结构如下：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/dataset_extracted.png" alt="Dataset extracted" alt="Speech commands dataset" width={600} height="auto" /></p>

## 开始使用

现在让我们开始使用 Edge Impulse 基于数据集创建一个机器学习模型。

### 第一步 - 打开 Edge Impulse

- Edge Impulse 是一个机器学习（ML）开发平台，允许开发者创建并部署自定义 ML 模型到边缘设备，例如微控制器和智能手机。
- 它提供了多种工具和资源，帮助构建和优化针对特定任务的 ML 模型，例如关键词识别、异常检测和分类。

让我们创建一个新项目并命名。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge1.png" alt="Edge Impulse New project" width={600} height="auto" /></p>

创建新项目后，进入数据采集页面。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge2.png" alt="Edge Impulse Data Aquisition" width="{600}" height="auto" /></p>

### 第二步 - 添加数据

因为我们将使用 Google 语音命令数据集，选择“添加现有数据”。接下来，选择“上传数据”。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge3.png" alt="Edge Impulse upload data" width={600} height="auto" /></p>

接下来，我们选择数据——选择语音数据集中的一个文件夹。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge4.png" alt="Edge Impulse upload data screen" width={600} height="auto" /></p>

数据集中有许多单词可供训练。我们选择 3 个文件夹（我们的标签）进行训练，并添加背景噪声。我们将获得 4 个标签。
点击“浏览”按钮。
第一个标签是“go”。选择文件夹——您可以看到所有的 .wav 文件——然后点击“上传”。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge5.png" alt="Files to upload" width={600} height="auto" /></p>

接下来，保持类别的默认选项，让 Edge Impulse 分割数据。
对于标签，请手动输入标签名称。完成后，点击“上传数据”。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge6.png" alt="Edge Impulse upload data screen" width={600} height="auto" /></p>

在右侧，您会看到文件正在上传。这可能需要一些时间，因为文件数量较多。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge7.png" alt="Files upload progress" width={600} height="auto" /></p>

一段时间后，上传完成，并显示上传文件的小摘要。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge8.png" alt="文件上传恢复" width={600} height="auto" /></p>

接下来，这是屏幕显示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge9.png" alt="Edge Impulse 数据集屏幕" width={600} height="auto" /></p>

要上传更多数据，请点击右侧文件列表上方的小上传按钮。  
重复此操作 3 次——添加 2 个更多标签和背景噪声。  
我将选择 "happy"（开心）、"bird"（鸟）以及带有标签 "noise"（噪声）的 "background noise"（背景噪声）文件夹。  
最后，这就是我们拥有的所有标签：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge10.png" alt="Edge Impulse 数据集屏幕" width={600} height="auto" /></p>

接下来，让我们创建一个网络来学习我们的单词。点击 "Impulse design"（脉冲设计）来创建脉冲。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge11.png" alt="Edge Impulse 数据集屏幕" width={600} height="auto" /></p>

### 第 3 步 - 选择训练方法

由于剪辑每段为 1 秒且采样率为 16Khz，我们保持窗口大小和频率不变。现在，让我们添加一个处理块。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge12.png" alt="Edge Impulse 数据集屏幕" width={600} height="auto" /></p>

Edge Impulse 在这里也为我们提供了很大的帮助。点击 "Add a processing block"（添加处理块）并选择 Audio (MFCC)。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge13.png" alt="Edge Impulse 数据集屏幕" width={600} height="auto" /></p>

接下来，点击 "Add learning block"（添加学习块）并选择 Classification（分类）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge14.png" alt="Edge Impulse 数据集屏幕" width={600} height="auto" /></p>

到现在为止，我们的最后一列——"Output features"（输出特征）——已经包含了我们的 4 个标签（bird、go、happy、noise）。  
点击 "Save Impulse"（保存脉冲）以保存我们目前的工作。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge15.png" alt="Edge Impulse 数据集屏幕" width={600} height="auto" /></p>

### 第 4 步 - 生成特征

现在，让我们看一下 MFCC 参数。如果需要，可以更改这些值。  
目前，我们保持默认值。点击 "Save Parameters"（保存参数）。  
保存参数后，我们会看到一个新窗口 "Generate features"（生成特征）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge16.png" alt="Edge Impulse 数据集屏幕" width={600} height="auto" /></p>

点击后，Edge Impulse 将开始生成特征。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge17.png" alt="生成特征" width={600} height="auto" /></p>

过一会儿，我们的特征生成完成，并可以进行可视化。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge18.png" alt="特征浏览器" width={600} height="auto" /></p>

现在我们可以用选择的参数训练我们的网络了。点击 "Classifier"（分类器）。

### 第 5 步 - 分类器

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge19.png" alt="分类器" width={600} height="auto" /></p>

在这里，我们可以调整网络设置，例如训练周期、是否启用数据增强等。  
Edge Impulse 提供了一个简单但有效的神经网络架构用于关键词检测。该架构包括以下层：
  - <b>输入层：</b> 输入层将 MFCC 特征作为输入。
  - <b>隐藏层：</b> 隐藏层学习从 MFCC 特征中提取更高级别的特征。Edge Impulse 支持多种隐藏层类型，例如卷积层和循环层。
  - <b>输出层：</b> 输出层预测音频输入中包含关键词的概率。

我们可以更改默认参数，但默认值已经足够。点击 "Start Training"（开始训练）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge20.png" alt="网络架构" width={600} height="auto" /></p>

开始训练后，在屏幕右侧可以看到训练进度。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge21.png" alt="训练进度" width={600} height="auto" /></p>

我们可以将目标设备更改为 nRF52840，例如我们的 XIAO nRF52840 Sense，以查看性能计算和优化。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge22.png" alt="目标设备" width={600} height="auto" /></p>

训练完成后，我们会看到混淆矩阵和数据浏览器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge23.png" alt="混淆矩阵" width={600} height="auto" /></p>

现在网络已经准备好，让我们尝试一些样本并进行实时分类。  
如果进入实时分类，我们可以选择一个样本并查看分类结果。这里，对于一个鸟的样本，我们得到了 "bird"（鸟）的结果。这很棒，模型正常工作。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge24.png" alt="实时分类" width={600} height="auto" /></p>

现在，让我们进入模型测试。  
通过使用分割样本进行测试来验证模型。点击 "Classify all"（全部分类）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge25.png" alt="测试数据" width={600} height="auto" /></p>

我们获得了接近 90% 的准确率。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge26.png" alt="准确率" width={600} height="auto" /></p>

### 第六步 - 部署并获取 Arduino 库

现在，让我们进行部署以获取微控制器所需的文件。

#### 部署选项

选择 Arduino

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge27.png" alt="准确率" width={600} height="auto" /></p>

接下来，保持选择 Quantized(int8)，然后点击“Build”以下载用于 Arduino IDE 的文件。  
我们可以稍微调整优化选项。如果发现准确率较低，可以尝试关闭 EON 编译器并重新尝试。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge28.png" alt="准确率" width={600} height="auto" /></p>

过一会儿，文件会自动下载。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge29.png" alt="Arduino 文件下载" width={600} height="auto" /></p>

### 第七步 - 将库添加到 Arduino IDE

在 Arduino IDE 中，添加刚刚下载的文件。  
进入 Sketch > Include Library > Add .ZIP Library

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge30.png" alt="Arduino IDE 添加库" width={600} height="auto" /></p>

选择下载的文件。过一会儿，输出窗口会显示一条消息，提示库已安装。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge31.png" alt="库已安装" width={600} height="auto" /></p>

### 第八步 - 使用 XIAO nRF52840 Sense 通过语音控制 RGB 灯

打开示例文件  
进入 Examples > <your_files_names> > nano_ble33_sense > nano_ble33_sense_microphone

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge32.png" alt="库已安装" width={600} height="auto" /></p>

为什么选择 Arduino BLE 33 Sense？它们使用相同的库——PDM（脉冲密度调制）——来控制麦克风。Arduino Nano BLE 33 Sense 配备 MP34DT05，而 XIAO nRF52840 Sense 配备 MSM261D3526H1CPM。  
打开草图后，编译代码并检查是否没有错误。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge33.png" alt="打开草图" width={600} height="auto" /></p>

过一会儿，草图编译完成且没有报告错误。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge34.png" alt="打开草图" width={600} height="auto" /></p>

现在，连接 XIAO nRF52840 Sense（如果尚未连接），并将代码上传到板子上。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge35.png" alt="打开草图" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge36.png" alt="编译结果" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge37.png" alt="上传代码" width={600} height="auto" /></p>

现在，打开串口（Ctrl+Shift+M），检查推理结果（板子已经开始录音、进行推理和预测）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge38.png" alt="串口监视器" width={600} height="auto" /></p>

尝试说出选择的单词之一。我说了“go”。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge39.png" alt="串口监视器" width={600} height="auto" /></p>

如果正确检测到单词，最可能的单词结果会接近 1.0，其他单词的值会接近 0.0。  
现在，让我们稍微修改代码，玩一玩。  
XIAO nRF52840 Sense 内置了一个 LED，具有 3 种颜色：

- 红色 - LED_BUILTIN 或 LED_RED  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge40.gif" alt="红色 LED" width={600} height="auto" /></p>
- 绿色 - LED_GREEN  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge41.gif" alt="绿色 LED" width={600} height="auto" /></p>
- 蓝色 - LED_BLUE  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge42.gif" alt="蓝色 LED" width={600} height="auto" /></p>

由于我们有 3 个单词，让我们为每个单词分配一个颜色，并根据单词点亮相应的颜色：  
- 红色对应 bird  
- 绿色对应 Go  
- 蓝色对应 happy  

为了方便，我检查了板子的 PIN 定义，以下 PIN 分配给 LED 颜色：  
- 红色 - Pin 11  
- 绿色 - Pin 13  
- 蓝色 - Pin 12  

首先，我们需要定义一个阈值。我们知道预测值范围是 0.0 到 1.0。越接近 1.0，单词分类的准确性越高。这个值可以稍后调整。我将其设置为 0.7。

首先定义一些变量。我在包含库之后定义了以下变量：

```cpp
/* 预测的阈值 */
float threshold = 0.7;

/** 
  标签索引：
  0 - bird
  1 - go
  2 - happy
  3 - noise
*/
// 用于点亮 LED 的 PIN（定义颜色）
/**
 PIN 11 - 红色
 PIN 12 - 蓝色
 PIN 13 - 绿色
*/
int LED = 0;
int oldLED;
```

<i>int oldLED</i> 将定义之前点亮的 LED，这样当没有预测结果或预测结果发生变化时，我们可以将其关闭。

<i>int LED</i> 是当前我们将点亮的 LED。

接下来，在 `loop()` 函数中，在 `for` 循环指令中，我们遍历 `CLASSIFIER_LABEL_COUNT`（大约在第 129 行，包含上方的代码）：

```cpp
for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
```

我们使用 `if` 指令检查分类值。如果它高于定义的阈值，我们将使用 `switch` 指令检查记录了哪个单词。

完整的 `for` 循环（包含我们的修改）如下：

```cpp
for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: %.5f\n", result.classification[ix].label, result.classification[ix].value);
        // 让我们点亮一些 LED

        if (result.classification[ix].value > threshold) {
          // 现在让我们看看是哪个标签
          switch (ix) {
            case 0: LED = 11; break;
            case 1: LED = 13; break;
            case 2: LED = 12; break;
            default: LED = 0;
          }
          // 在 Sense 中，LOW 会点亮 LED
          if (LED != 0) {
            digitalWrite (oldLED, HIGH); // 如果我们进入了一个紧邻之前的单词，我们关闭之前的 LED
            digitalWrite (LED, LOW);            
            oldLED = LED;
          }
          else // 关闭 LED
            digitalWrite (oldLED, HIGH);
        }
    }
```

完成修改后，只需将代码上传到您的微控制器，然后尝试说出训练过的单词，观察 LED 根据单词点亮。

就是这样。尽管没有直接支持，我们现在可以使用 XIAO nRF52840 Sense 来运行一些使用 Edge Impulse 的机器学习模型。

---

## ✨ 贡献者项目

- 本项目由 Seeed Studio [贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) 支持。
- 感谢 [Bruno 的努力](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=35979237)，您的工作将被 [展示](https://wiki.seeedstudio.com/Honorary-Contributors/)。

---

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>