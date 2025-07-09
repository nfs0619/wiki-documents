---
description: 在 Seeed Studio XIAO SAMD21 上实现 TinyML
title: 在 Seeed Studio XIAO SAMD21 上实现 TinyML
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino-XIAO-TinyML
last_update:
  date: 05/15/2025
  author: shuxu hu
---

# 在 Seeed Studio XIAO 系列上实现 TinyML

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/Seeeduino-XIAO-pinout.jpg" /></div>

得益于模型优化的最新进展以及专门为在微控制器上运行机器学习模型推理而创建的框架的出现，现在可以为这些微型设备赋予更多智能。我们现在可以在微控制器上部署神经网络，用于音频场景识别（例如大象活动或玻璃破碎的声音）、热词检测（通过特定短语激活设备）甚至简单的图像识别任务。嵌入微控制器的设备可以为旧传感器赋予新的生命和意义，例如使用安装在机械上的加速度计进行异常检测和预测性维护——或者像[这个演示](https://wiki.seeedstudio.com/Wio-Terminal-Edge-Impulse-Distinguish-Alochol/)中那样区分各种酒类！
<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/booze.jpg" /></div>

**TinyML 的可能性确实非常巨大。**

我们已经制作了[一整套关于部署微型机器学习模型的教程](https://wiki.seeedstudio.com/Wio-Terminal-TinyML/)，用于另一个 Seeed Studio 产品——一个带塑料外壳的紧凑型开发板 Wio Terminal。但我们可以更进一步，将类似的模型部署到 ARM Cortex M0+ 和小巧的 [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) 开发板上，该开发板围绕它构建——板子小到只有拇指大小（21×17.8mm），仅消耗 1.33 mAh 的电量（这意味着它可以在 150 mA 电池上工作约 112 小时，如果进入深度睡眠则时间更长），成本仅为 4.3 美元。

本项目涵盖了在 Seeed Studio XIAO SAMD21 和 Seeed Studio XIAO RP2040 开发板上训练和部署模型的过程。有关更多信息，请查看相关视频！

<iframe width={560} height={315} src="https://www.youtube.com/embed/04_7U8MzVKg" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## 数据采集和模型训练

软件工程师花费大量时间坐在椅子上盯着发光的屏幕。到了晚上，保持正确的姿势变得困难。如果有一种设备可以学习你的特定身体姿势，区分正确和错误的姿势，并在你过度弯腰或进入“Python 姿势”时提醒你，那该多好……等等，这种设备是可以实现的！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/utxkrcg5yss61.png" /></div>

为机器学习模型提供数据的最佳传感器显然是加速度计。原始的 Seeed Studio XIAO SAMD21 和 Seeed Studio XIAO RP2040 由于体积非常小，没有配备加速度计传感器，而较新的 Seeed Studio XIAO nRF52840 Sense 则内置了加速度计。

如果你使用原始的 Seeed Studio XIAO SAMD21 和 Seeed Studio XIAO RP2040，可以将 [Grove LIS3DH 加速度计](https://wiki.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR/) 模块连接到 [Seeed Studio XIAO 扩展板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)，然后开始收集数据。为每种姿势收集 3 个数据样本，每个样本 60 秒，设备固定在背部的 T 恤上。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/image-31.png" /></div>

对于每个样本，保持相同的姿势，但包括一些手臂、头部和躯干的运动，以模拟正常活动。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/image-32.png" /></div>

选择 5 秒时间窗口，窗口移动为 1 秒，并使用 Flatten 处理块，因为我们处理的是非常缓慢移动的数据。一个非常简单的全连接网络提供了良好的准确性。在文章底部的参考部分，你可以找到 Edge Impulse 项目的公共版本链接。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/image-33.png" /></div>

通过收集更多数据并确保能够通过设备在衣物上的不同位置变化识别正确和错误的姿势，可以进行一些改进。由于设备被设计为个人使用设备，因此不需要对不同人的姿势进行泛化，并且可以轻松重新训练。你可以在 Live classification 标签中检查训练后它对你的姿势检测效果。

## 模型部署

在对准确性满意后，将生成的模型下载为 Arduino 库，并将其复制到 Arduino 的 sketches/libraries 文件夹中。你可以在文章底部的参考部分找到示例代码。示例代码收集 5 秒样本，执行推理，并在检测到错误姿势之一时打开蜂鸣器。

```cpp
void loop()
{

    ei_printf("正在采样...\n");

    // 在这里分配一个缓冲区，用于存储从 IMU 读取的值
    float buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE] = { 0 };

    for (size_t ix = 0; ix < EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE; ix += 3) {
        // 确定下一个时间点（然后稍后休眠）
        uint64_t next_tick = micros() + (EI_CLASSIFIER_INTERVAL_MS * 1000);

        lis.getAcceleration(&buffer[ix], &buffer[ix+1], &buffer[ix + 2]);
        buffer[ix + 0] *= CONVERT_G_TO_MS2;
        buffer[ix + 1] *= CONVERT_G_TO_MS2;
        buffer[ix + 2] *= CONVERT_G_TO_MS2;

        delayMicroseconds(next_tick - micros());
    }

    // 将原始缓冲区转换为可以分类的信号
    signal_t signal;
    int err = numpy::signal_from_buffer(buffer, EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE, &signal);
    if (err != 0) {
        ei_printf("从缓冲区创建信号失败 (%d)\n", err);
        return;
    }

    // 运行分类器
    ei_impulse_result_t result = { 0 };

    err = run_classifier(&signal, &result, debug_nn);
    if (err != EI_IMPULSE_OK) {
        ei_printf("错误：运行分类器失败 (%d)\n", err);
        return;
    }

    // 打印预测结果
    ei_printf("预测结果 ");
    ei_printf("(DSP: %d 毫秒, 分类: %d 毫秒, 异常: %d 毫秒)",
        result.timing.dsp, result.timing.classification, result.timing.anomaly);
    ei_printf(": \n");
    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: %.5f\n", result.classification[ix].label, result.classification[ix].value);
    }
#if EI_CLASSIFIER_HAS_ANOMALY == 1
    ei_printf("    异常分数: %.3f\n", result.anomaly);
#endif
    
  if (result.classification[1].value > ALARM_THRESHOLD || result.classification[2].value > ALARM_THRESHOLD)
  {     
  tone(BUZZER_PIN, 523, 250);
  delay(250);
  noTone(BUZZER_PIN);
  delay(250);  
  tone(BUZZER_PIN, 523, 250);
  delay(250);  
  noTone(BUZZER_PIN);    
  }

}
```

由于这是相对缓慢变化的数据，并且我们不需要快速响应时间，普通的顺序推理管道非常适合这个应用场景。

更进一步的选择是使用最新的 Seeed Studio XIAO nRF52840，并将设备连接到用户的智能手机，这样可以实现更好的警报、统计等功能。

祝您玩得开心，并记得保持良好的姿势！

## 参考

- [Edge Impulse 公共项目](https://studio.edgeimpulse.com/public/20025/latest)

- [项目 Github](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/SeeeduinoXIAO_TinyML_7_Posture_Detection)