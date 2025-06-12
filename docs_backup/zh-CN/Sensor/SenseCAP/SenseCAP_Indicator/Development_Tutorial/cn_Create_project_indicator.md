---
title: 创建一个项目（ESP-IDF） - SenseCAP 指示器
description: 使用 ESP-IDF 或 Squareline Studio 为 SenseCAP 指示器开发项目的分步指南。
keywords: 
- SenseCAP 指示器
- ESP-IDF
- Squareline
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/sensecap_indicator_project
last_update:
  date: 05/15/2025
  author: Spencer
sidebar_position: 4
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 概述
SenseCAP 指示器集成了双核微控制器 ESP32-S3 和 RP2040。本教程重点介绍如何使用 ESP32-S3 和 ESP-IDF 创建项目。

有两种简单的项目创建方法：GitHub 模板和 Squareline Studio。

## 项目创建方法

### 1. GitHub 模板
#### 步骤 1: 创建一个新项目
- 访问 [SenseCAP 指示器模板仓库](https://github.com/Seeed-Solution/indicator-esp-idf-template) 并点击 `Use this template` 来启动一个新仓库。

#### 步骤 2: 克隆仓库
```bash
git clone https://github.com/your-username/indicator-esp-idf-template.git
```

#### 步骤 3: 构建项目
进入项目目录并构建项目：
```bash
cd indicator-esp-idf-template
idf.py build
```

#### 步骤 4: 烧录项目
通过 USB 连接设备并使用以下命令烧录项目：
```bash
idf.py -p PORT flash
```

#### 步骤 5: 监控项目
使用以下命令监控输出：
```bash
idf.py -p PORT monitor
```
*注意：将 `PORT` 替换为设备的端口号。*

### 2. Squareline Studio
对于初学者，Squareline Studio 提供了一种用户友好的低代码 UI 设计选项。

有一篇博客 [使用 SquareLine 为 SenseCAP 指示器进行低代码 UI 设计](https://www.hackster.io/spenyan/low-code-ui-design-for-sensecap-indicator-with-squareline-9825fe)，详细介绍了如何使用 Squareline Studio 设计 UI。

#### 步骤 1: 设置
- 从 [Squareline 官网](https://studio.squareline.io/) 下载并安装 Squareline Studio。
- 启动软件并开始一个新项目。

![](https://hackster.imgix.net/uploads/attachments/1650386/image_4QrcVcHWtG.png?auto=compress%2Cformat&w=1280&h=960)

#### 步骤 2: 设计 UI
- 使用 Squareline Studio 设计项目的 UI。

#### 步骤 3: 生成并构建项目
- 生成 UI 代码。
- 使用 ESP-IDF 构建项目。

有关使用 Squareline Studio 的更多信息，请参考 [使用 SquareLine 为 SenseCAP 指示器进行低代码 UI 设计](https://www.hackster.io/spenyan/low-code-ui-design-for-sensecap-indicator-with-squareline-9825fe) 的指南。

### 初学者提示
- 如果是开发新手，可以从 Squareline Studio 开始，创建一个简单的闪烁项目。
- 对于更高级的自定义，可以直接修改 [SDK 示例](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32)。

## ODM 服务

Seeed Studio 提供全面的一站式 ODM 服务，以满足多样化需求的快速定制和规模化要求。如果您希望通过定制化功能来调整您的项目，或者需要高效地扩大运营规模，请联系我们。有关咨询和更详细的信息，请通过 iot@seeed.cc 联系我们。我们将帮助您将独特的创意变为现实。

## 技术支持

**需要帮助解决您的 SenseCAP 指示器问题？我们随时为您提供支持！**

如果您在按照本教程操作时遇到任何问题或有任何疑问，请随时联系我们的技术支持团队。我们始终在这里为您提供帮助！

访问我们的 [Seeed 官方 Discord 频道](https://discord.com/invite/QqMgVwHT3X) 提问，或者在 [GitHub 讨论区](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions) 分享您的想法！