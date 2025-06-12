---
description: 在您的 XIAO RP2350 板上使用 Arduino
title: 使用 Seeed Studio XIAO RP2350（Arduino）快速入门
image: https://files.seeedstudio.com/wiki/XIAO-RP2350/img/2-102010550_XIAO_RP2350-45font_1.webp
slug: /cn/xiao_rp2350_arduino
last_update:
  date: 05/15/2025
  author: Spencer
sidebar_position: 1
---

# 使用 Seeed Studio XIAO RP2350 和 Arduino

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


得益于 [arduino-pico core](https://github.com/earlephilhower/arduino-pico)，Seeed Studio XIAO RP2350 板现在支持通过 Arduino 编程。本指南将帮助您设置并开始在 RP2350 板上使用 Arduino。

## 前置条件

开始之前，请确保您已准备好以下内容：

- 一块 RP2350 板
- Arduino IDE
- 一根 USB 数据线

## 软件设置

### 1. 安装 Arduino IDE

从官方网站下载并安装最新的 Arduino IDE：[Arduino 软件](https://www.arduino.cc/en/software)。

### 2. 添加 RP2350 板支持

1. 打开 Arduino IDE，导航到 **文件** > **首选项**。
2. 在 **附加开发板管理器 URLs** 字段中，添加以下 URL：

    ```shell
    https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json
    ```

    <div style={{ textAlign: 'center' }}>
    <img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/arduino-url.png" style={{ width: 680, height: 'auto', "border-radius": '12.8px' }} />
    </div>

3. 点击 **确定** 保存设置。
4. 转到 **工具** > **开发板** > **开发板管理器**。
5. 在开发板管理器中，搜索 **pico** 并点击 **安装**。
6. 安装完成后，转到 **工具** > **开发板**，选择下图所示的开发板作为您的开发板。

:::note
请确保安装 4.2.0 或更高版本，以完全支持 XIAO RP2350 板。
:::

<div style={{ textAlign: 'center' }}>
<img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/arduino-board-option.png" style={{ width: 680, height: 'auto', "border-radius": '12.8px' }} />
</div>

### 3. 上传代码

在上传代码之前，请将您的 XIAO RP2350 置于 BOOT 模式。可以使用以下方法之一：

<Tabs>
<TabItem value="method1" label="方法 1：连接电脑前" default>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-no-charge.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/><div style={{ marginTop: '-8px' }}><em>按住 Boot -> 插入数据线 -> 松开 Boot</em></div></div>

</TabItem>

<TabItem value="method2" label="方法 2：已连接电脑时">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-charged.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/><div style={{ marginTop: '-8px' }}><em>按住 Boot -> 点击 Reset -> 松开 Boot</em></div></div>

</TabItem>
</Tabs>

1. 打开 Arduino IDE 并创建一个新代码文件。
2. 编写您的代码。例如，使用 `Blink` 示例代码。
3. 转到 **工具** > **端口**，选择连接 RP2350 的端口。

<div style={{ textAlign: 'center' }}>
<img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/arduino-firmware-upload.png" style={{ width: 680, height: 'auto', "border-radius": '12.8px' }} />
</div>

## 其他资源

- [arduino-pico GitHub](https://github.com/earlephilhower/arduino-pico)
- [Arduino-Pico Core 文档](https://arduino-pico.readthedocs.io/en/latest/install.html)

## 支持与讨论

感谢您使用 Seeed 产品！我们提供多种支持渠道和社区讨论平台：

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>