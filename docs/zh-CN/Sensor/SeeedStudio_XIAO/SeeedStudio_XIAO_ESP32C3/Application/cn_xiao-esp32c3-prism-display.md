---
description: XIAO Prism Display 使用 ESP32C3
title: XIAO ESP32C3 Prism Display
keywords:
- Xiao
- Prism
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao-esp32c3-prism-display
last_update:
  date: 05/15/2025
  author: timo614
---

# XIAO ESP32C3 Prism Display

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<iframe class="youtube-video" src="https://www.youtube.com/embed/wSJa8HP0BkM" title="YouTube 视频播放器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


## 快速开始

如果您希望完整地按照本教程操作，您需要准备以下物品。

<table align="center">
  <tbody><tr>
      <th>XIAO ESP32C3</th>
      <th>Grove Shield for XIAO <br />带电池管理芯片</th>
      <th>Grove Smart IR Gesture <br />Sensor (PAJ7660)</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/main.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Smart-IR-Gesture-Sensor-p-5721.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

<div align="center">
    <img width={400} src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/enclosure/assembled.jpg" />
</div>

本项目使用 ESP32C3 和分光棱镜创建一个三维显示器。本指南将解释如何构建外壳、连接相关电子元件以及安装固件的步骤。此外，还提供了更新加密货币追踪列表以及调整和处理用于图像浏览器的动画图像的额外文档。

主要步骤：

1. [下载并 3D 打印外壳](#download-and-3d-print-enclosure)
2. [连接相关电子元件](#attach-associated-electronics)
3. [设置环境](#setup-environment)
4. [配置 XIAO ESP32C3](#configure-the-xiao-esp32c3)

附加文档：

1. [添加新的加密货币](#adding-new-cryptocurrencies)
2. [调整和处理动画图像](#downsizing-and-processing-animated-images)

## 下载并 3D 打印外壳

<div align="center">
    <img width={400} src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/enclosure/3d-render-bottom.png" />
</div>

3D 外壳由两部分组成，设计为在组装内部零件后压合在一起。打印零件时应使用支撑，以确保结构正确组装。

零件可以在 GitHub 仓库中找到，并可通过其 STL 查看器预览：<br />
https://github.com/Timo614/xiao-prism-buddy/blob/main/docs/enclosure/xiao-prism-top.stl<br />
https://github.com/Timo614/xiao-prism-buddy/blob/main/docs/enclosure/xiao-prism-bottom.stl<br />

## 连接相关电子元件

<div align="center">
    <img width={400} src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/enclosure/xiao_screwed_in.jpg" />
</div>

Grove Shield 简化了棱镜显示器的设置，因为它允许使用简单的面包板导线完成组装，无需焊接。Grove Shield 应在靠近 Xiao 引脚的开放引脚处焊接第二组母头针脚。此 Shield 应通过外壳上的两个螺孔固定。这可能有点棘手，因此建议先将螺钉放入，然后再将 Shield 放下并拧紧每个螺钉。

从这里开始，有两个主要连接：
- 与手势传感器的 i2c 连接
- 与显示器的 spi 连接

对于 i2c 连接，使用 Grove 4 针连接器从 Shield 到手势传感器。

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/enclosure/inward_bend_install.jpg" style={{width:400, height:'auto'}}/></div>

外壳设计为允许手势传感器紧密贴合，并通过螺钉将其牢牢固定在外壳外侧。为了正确定位手势传感器，应先定位 USB 侧，然后在主体贴合后安装螺钉。

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/enclosure/sensor_screwed_in.jpg" style={{width:400, height:'auto'}}/></div>

spi 连接稍微复杂一些，因为它需要更多的针脚。

```
Xiao 的 3V3 引脚连接到显示器的 VCC 引脚
Xiao 的 GND 引脚连接到显示器的 GND 引脚
Xiao 的 D0 引脚连接到显示器的 CS 引脚
Xiao 的 D1 引脚连接到显示器的 BL 引脚
Xiao 的 D2 引脚连接到显示器的 DC 引脚
Xiao 的 D3 引脚连接到显示器的 RST 引脚
Xiao 的 D8 (SCK) 引脚连接到显示器的 SCL 引脚
Xiao 的 D10 (MOSI) 引脚连接到显示器的 SDA 引脚
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pin_map-2.png" style={{width:700, height:'auto'}}/></div>

将所有组件的线缆连接好后，设备即可完全组装完成。如果使用类似的公差打印，外壳设计允许通过压配合方式闭合。

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/enclosure/press_fit_close.jpg" style={{width:400, height:'auto'}}/></div>

组装完成后，将棱镜放置在屏幕顶部。

## 设置环境

设置本地环境的最简单方法是使用 Visual Studio Code，因为它简化了机器配置。

- 从 GitHub 克隆仓库：https://github.com/Timo614/xiao-prism-buddy
- 在 Visual Studio Code 中打开该仓库
- 安装 ESP-IDF 扩展
- 安装 ESP-IDF 5.0.4
- 将 ESP-IDF Espressif 设备目标设置为 esp32c3
- 为您的 WiFi 网络配置环境变量（参见以下步骤）
- 构建、烧录并监控您的设备

## 配置 XIAO ESP32C3

准备应用程序的下一步是为 WiFi 网络配置凭据。

按下 `Ctrl` + `Shift` + `P` 打开快速菜单，并输入 `menuconfig`。这将过滤列表以包含 `ESP-IDF: SDK Configuration editor (Menuconfig)` 条目。

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/menuconfig.png" style={{width:400, height:'auto'}}/></div>

在此菜单中，请设置 WiFi 网络名称和密码以进行访问。

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/config.png" style={{width:400, height:'auto'}}/></div>

## 添加新的加密货币

Xiao Prism Buddy 可以通过 CoinGecko 修改以显示不同的加密货币。CoinGecko 为其 API 提供了一个免费层，允许用户在速率限制下访问。

该应用程序每 15 分钟调用一次 `/simple/price` 端点，更新一组配置的加密货币。调用中使用的货币可以通过仓库中的 `config.h` [文件](https://github.com/Timo614/xiao-prism-buddy/blob/main/main/config.h#L26) 进行配置，同时应用中显示的货币符号也可以配置。有关调用本身的更多信息，可以参考 [API 文档](https://www.coingecko.com/api/documentation)。

目前添加新加密货币的过程稍显复杂，但可以通过以下步骤完成：

1. 更新加密货币总数以反映正确的数量（此硬编码值用于页面本身的循环显示）
https://github.com/Timo614/xiao-prism-buddy/blob/main/main/controller/prism_controller.cpp#L29  
2. 在加密货币模型文件中，搜索现有的加密货币（例如：bitcoin），并在代码的每个相关部分添加新条目（数据初始化、CoinGecko 响应解析、CoinGecko GET 请求字符串等）  
https://github.com/Timo614/xiao-prism-buddy/blob/main/main/model/prism_cryptocurrency.c  
3. 更新加密货币视图数据结构以反映新的加密货币  
https://github.com/Timo614/xiao-prism-buddy/blob/main/main/view_data.h#L54  
4. 在控制器逻辑中，搜索现有的加密货币（例如：bitcoin），并复制相关逻辑以处理事件数据和渲染  
https://github.com/Timo614/xiao-prism-buddy/blob/main/main/controller/prism_controller.cpp  
5. 为新加密货币提供合适大小的 PNG 文件，使用 LVGL 在线图像转换器将 PNG 转换为 C 文件，并在上述控制器中按需引用  
https://lvgl.io/tools/imageconverter  

## 缩小和处理动画图像

使用微控制器的一个限制是可用的闪存较少。GIF 文件占用了相当大的闪存，这使得它们的使用变得更加困难。以下记录了用于转换应用程序中使用的图像的一组流程，以便其他人希望替换为自己的图像时可以参考。

1. 选择一个合适的动画图像。理想情况下，图像应具有透明背景、设置为循环播放，并且尺寸适中。为了简化流程，我发现特别是寻找 Lottie 文件非常有帮助。对于该应用程序，我能够通过 https://lottiefiles.com/ 找到几个有用的图像。
2. 使用 Lottie 到 GIF 转换器将 Lottie 文件转换为透明的 GIF 文件（例如 https://lottiefiles.com/lottie-to-gif）。

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/gif-compression/convert-lottie.png" style={{width:400, height:'auto'}}/></div>

3. 使用您选择的 GIF 编辑器进行以下修改（我发现在线工具 https://ezgif.com 提供了这些优化 GIF 的功能，适用于本应用程序的需求）：

3.1. 减少帧之间的数量，直到只剩下大约 20 帧。

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/gif-compression/remove-frames.png" style={{width:400, height:'auto'}}/></div>

3.2. 将图像大小调整到大约 100x100 或更小。

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/gif-compression/resize.png" style={{width:400, height:'auto'}}/></div>

3.3. 减慢图像速度，因为在减少帧后，动画会变得非常快。

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/gif-compression/slow-speed.png" style={{width:400, height:'auto'}}/></div>

3.4. 减少 GIF 的颜色组成以减小其大小。

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/gif-compression/reduce-colors.png" style={{width:400, height:'auto'}}/></div>

### 3.5. 根据需要进一步压缩 GIF

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/gif-compression/compress.png" style={{width:400, height:'auto'}}/></div>

### 4. 使用 [LVGL 在线图片转换器](https://lvgl.io/tools/imageconverter) 将 GIF 文件转换为 C 数组，具体操作请参考 [LVGL 的文档。](https://docs.lvgl.io/8.3/libs/gif.html#convert-gif-files-to-c-array) 注意：`选择 "Raw" 颜色格式和 "C array" 输出格式。`

按照以上步骤操作后，您将获得一个经过处理的 GIF 图像文件，文件大小已减少，同时仍然适合在 Prism 设备上显示。最简单的方法是替换现有的火焰或西瓜图像进行测试。

---

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>