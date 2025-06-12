---
description: SenseCraft Model Assistant 入门指南，适用于 Seeed Studio XIAO ESP32S3。
title: SenseCraft Model Assistant 与 XIAO ESP32S3 (Sense)
keywords:
- esp32s3
- xiao
- tinyml
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao_esp32s3_edgelab
last_update:
  date: 05/15/2025
  author: LynnL4
---

# SenseCraft Model Assistant 入门指南，适用于 Seeed Studio XIAO ESP32S3

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 简介
[SenseCraft Model Assistant](https://edgelab.readthedocs.io/en/latest/) 是一个专注于嵌入式 AI 的开源项目。我们对 OpenMMLab 的优秀算法进行了优化，使其更适合实际场景，并简化了实现过程，从而在嵌入式设备上实现更快、更准确的推理。

## 所需硬件
- [Seeed Studio XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)
- [Seeed Studio 圆形显示屏适配 XIAO](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)
- Type-C 数据线

## 所需软件
- ESP-IDF v4.4
- SenseCraft Model Assistant v0.1.0
- 示例代码: [SenseCraft Model Assistant-example-esp32](https://github.com/Seeed-Studio/edgelab-example-esp32)

## 安装步骤 
### 安装 ESP-IDF

按照 [ESP-IDF 入门指南](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html) 的说明，设置工具链并安装 ESP-IDF。

以下步骤假设安装已成功完成，并且 [IDF 环境变量已设置](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html#step-4-set-up-the-environment-variables)。具体来说：
* `IDF_PATH` 环境变量已设置
* `idf.py` 和 Xtensa-esp32 工具（例如 `xtensa-esp32-elf-gcc`）已添加到 `$PATH`

### 获取子模块
进入项目根目录并运行以下命令以获取子模块：

```
git clone https://github.com/Seeed-Studio/edgelab-example-esp32 && cd edgelab-example-esp32
git submodule init
git submodule update
```

## 使用方法
### 构建示例

进入示例目录 (`examples/<example_name>`) 并构建示例。

设置 IDF_TARGET（对于 ESP32-S3 目标，需要 IDF 版本 `release/v4.4`）

```
idf.py set-target esp32s3
```

配置示例

```
idf.py menuconfig
```

- 在 `Component config` -> `SenseCraft Model Assistant Configuration` -> `Camera Configuration` -> `Select Camera Pinout` 中选择摄像头模块
![img](https://raw.githubusercontent.com/Seeed-Studio/sscma-example-esp32/1.0.0/docs/_static/esp32/images/esp32s3-xiao-camera.png)
- 在 `Component config` -> `SenseCraft Model Assistant Configuration` -> `LCD Configuration` -> `Select LCD Pinout` 中选择 LCD 模块
![img](https://raw.githubusercontent.com/Seeed-Studio/sscma-example-esp32/1.0.0/docs/_static/esp32/images/esp32s3-xiao-lcd.png)

运行以下命令进行构建：

```
idf.py build
```

### 加载并运行示例

烧录程序（将 `/dev/ttyUSB0` 替换为设备的串口）：
```
idf.py --port /dev/ttyUSB0 flash
```

监控串口输出：
```
idf.py --port /dev/ttyUSB0 monitor
```

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的需求和偏好。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>