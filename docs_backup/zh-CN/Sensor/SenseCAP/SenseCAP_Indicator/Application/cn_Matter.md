---
description: SenseCAP 指示器 - Matter 应用开发
title: Matter - SenseCAP 指示器
keywords:
- SenseCAP 指示器
- Matter
- ESP32S3
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_Application_Matter
last_update:
  date: 05/15/2025
  author: Tim
sidebar_position: 8
---

# SenseCAP 指示器 - Matter 应用开发

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<iframe class="youtube-video" src="https://www.youtube.com/embed/LCIWqwmCZ54" title="YouTube 视频播放器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 简介

这是一个关于如何使用 [Matter SDK](https://project-chip.github.io/connectedhomeip-doc/index.html) 为您的 SenseCAP 指示器构建丰富应用的演示。

SenseCAP 指示器配备触摸屏，使其能够作为强大的家庭自动化界面。Matter 使这一过程变得前所未有的简单，因为它消除了许多复杂的配置方面的问题。借助 Matter 的 SDK，用户可以快速扫描二维码并将设备配置到家庭网络中。

在本文中，我们将逐步介绍如何让您的设备运行此演示。

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

<br />

Matter SDK 提供了一套标准设备，并允许访问其数据以及将其状态上传到控制器。ESP-Matter 是由 Espressif 开发的官方 Matter 开发框架，适用于 ESP32 系列 SoC。

要让您的 SenseCAP 指示器与 Matter 一起工作，您需要遵循以下几个主要步骤：

1. [安装 esp-idf 和 esp-matter](#install_sdks)
2. [配置您的环境并构建](#configure_and_build)
3. [使用应用程序](#using_application)
4. [进一步配置 Home Assistant 界面](#going_beyond)

## 前置条件

在开始之前，请确保您已阅读 SenseCAP 指示器板的 [用户指南](/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator)，以熟悉其软件和硬件信息。

## 安装 ESP IDF 和 ESP Matter {#install_sdks}

您需要按照 [ESP-Matter SDK 文档提供的说明](https://docs.espressif.com/projects/esp-matter/en/latest/esp32/developing.html#getting-the-repositories) 安装 ESP-IDF 的 5.0.1 版本和 ESP-Matter 的 1.1 发布版本。

安装这些版本后，请安装由 Seeed Studio 提供的补丁 [应用提供的补丁](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/tree/main/tools/patch)。

## 配置您的环境并构建 {#configure_and_build}

### 使用 CLI 配置和构建

```sh
~/esp/esp-idf/install.sh
~/.espressif/esp-matter/install.sh

. ~/esp/esp-idf/export.sh
. ~/.espressif/esp-matter/export.sh

cd examples/indicator_matter
idf.py set-target esp32s3
idf.py fullclean
idf.py erase-flash
idf.py build flash monitor
```

## 使用应用程序 {#using_application}

固件刷写完成后，屏幕会显示一个二维码。打开您的家庭自动化手机应用程序，进入设备配置流程（根据制造商的不同可能有所差异）。

在以下示例中，您可以看到我使用 Home Assistant 移动应用程序连接到运行 Matter Beta 服务的 Home Assistant Yellow。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-1.jpg"/></div>

扫描设备后，我的手机立即开始配置流程。配置流程安全地将您的凭据传递给设备，使其能够通过 WiFi 连接到家庭自动化控制器设备。通过这种方式，您无需实际手动输入 WiFi 凭据。

配置完成后，设备将以 10 秒的间隔向 Home Assistant 控制器报告其温度和湿度。

### 标准功能

<iframe class="youtube-video" src="https://www.youtube.com/embed/mBhrYeyQQeg" title="YouTube 视频播放器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

指示器 Matter 应用程序允许以类似于标准固件的方式浏览传感器数据。设备加载后会显示时钟屏幕，该屏幕根据您的位置配置以提供准确的时间。屏幕支持左右滑动事件，可在时间、传感器显示和设置屏幕之间切换。

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-2.jpg" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-3.jpg" style={{width:480, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-4.jpg" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-5.jpg" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

点击传感器后会显示该传感器状态的更多信息，并可以通过这种方式查看历史记录。

设置屏幕允许配置设备功能的多个元素。可以配置 12 小时或 24 小时制时钟，时区可以被覆盖，并且显示亮度是可调的。

### Matter Home Assistant Dashboard 

要访问 Matter Home Assistant Dashboard，从主时钟屏幕向下滑动即可进入。此仪表板包含多个不同的组件，这些组件与 Matter 端的演示设备相关联。在设备配置过程中，这些设备会创建端点，可用于访问常见功能，例如调节灯光亮度或完全关闭灯光。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-6.jpg"/></div>

在本次演示中，设置了两个可调光灯和一个门锁。当您点击按钮时，Home Assistant 端也会更新以反映这些更改。滑块可以移动以设置灯光的亮度。

在 Home Assistant 端，设备可以根据需要启用、禁用或修改，同时 SenseCAP Indicator 也会更新以反映这些更改。通过这种方式，您可以通过额外的自动化功能禁用或启用 Indicator 设备上的功能，并让屏幕实时反映其状态。

虚拟仪表板和所使用的家庭控制器的自动化功能允许实现各种有趣的组合。借助 SenseCAP Indicator，您可以构建自己想象中的仪表板，以控制家庭环境中的设备。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-7.jpg"/></div>

## 进一步配置 Home Assistant UI {#going_beyond}

UI 本身是使用 [LVGL](https://lvgl.io/) 构建的。有关配置 LVGL 的更多详细信息，请参阅[以下文章](https://wiki.seeedstudio.com/using_lvgl_and_tft_on_round_display/)。

仪表板的 UI 由 LVGL 组件组成，并设置了事件回调，以便其数据同时保存在本地存储和 Matter 端点中。虚拟仪表板控制器 (`indicator_virtual_dashboard_controller.c`) 负责更新表单，并在基础数据更改时为其他消费者发布相关事件。

在初始示例中，设置了三个设备，Matter 模型中的底层逻辑负责响应来自视图的事件，并将数据持久化到 Matter 端点或更新 UI 的状态。

在更新 UI 并将数据持久化到 Matter 时，通常需要考虑以下事项：
- 在初始化过程中，`indicator_matter.cpp` 模型的 `indicator_matter_setup()` 方法会设置与 Matter 相关的设备以供使用。此外，还会为视图事件设置回调，以便在更改时更新 Matter 端点。
- `indicator_virtual_dashboard.c` 模型监听与虚拟仪表板相关的视图事件，并将数据持久化到存储中，以便在初始化时检索。
- Matter 逻辑订阅与 Matter 数据修改（无论是远程还是本地）的相关事件。
- 虚拟仪表板控制器根据通过 `indicator_matter.cpp` Matter 回调发送的事件，在需要时更新表单的状态，以响应来自 Matter 控制器的更改。

## 资源

1. **Demo SDK**: SenseCAP Indicator 的 Demo SDK 可在 [GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32) 上获取。
2. **用户指南**: 用户指南提供了有关 SenseCAP Indicator 板的软件和硬件的详细信息。您可以在[这里](/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator)阅读。
3. **ESP-IDF 入门指南**: 此指南提供了配置和使用 ESP-IDF 构建项目的完整步骤。您可以在[这里](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html)访问。
4. **Matter 安装指南**: 如果您是 ESP-Matter 的新手，此指南将帮助您完成安装和设置。您可以在[这里](https://docs.espressif.com/projects/esp-matter/en/latest/esp32/developing.html)找到。

## 技术支持

**需要帮助解决您的 SenseCAP Indicator 问题？我们随时为您提供支持！**

如果您在遵循本教程时遇到任何问题或有任何疑问，请随时联系我们的技术支持团队。我们始终乐意为您提供帮助！

访问我们的 [Seeed 官方 Discord 频道](https://discord.gg/kpY74apCWj) 提问，或在 [GitHub discussions](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions) 中分享您的想法！