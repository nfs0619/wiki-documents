---
description: reComputer 系列的硬件布局
title: reComputer 系列硬件布局
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_Jetson_Series_Hardware_Layout
last_update:
  date: 05/15/2025
  author: w0x7ce

---

# reComputer 的硬件布局

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian.png" alt="pir" width={600} height="auto" /></p>

在这里，您将了解 reComputer 系列（适用于 Jetson）的基本硬件布局。同时，您还将学习如何从载板上拆卸和安装核心板，如何安装摄像头、M.2 Wi-Fi 模块或硬盘等。

## reComputer 系列的放置

当面对 reComputer 接口的背板时，机箱右侧有 4 个防滑垫，便于竖立，如下图所示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian1.png" alt="pir" width={600} height="auto" /></p>

reComputer 机箱底部为悬挂结构，可通过绑带将机箱固定在一些不便的结构上。机箱底板有 4 个固定孔，便于固定在立面或斜面上。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/Jetsonbackspec2.png" alt="pir" width={800} height="auto" /></p>

## reComputer 系列的顶盖

当面对 reComputer 接口的背板时，机箱右侧有 4 个防滑垫，可以看到一个金属按钮，如下图所示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly.jpg" alt="pir" width={500} height="auto" /></p>

向上推按钮以抬起机箱的顶盖，然后可以将其打开以移除顶盖。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly1.jpg" alt="pir" width={500} height="auto" /></p>

## 从载板上拆卸核心板

打开机箱后，您可以看到插在载板上的模块，如下图所示。按照以下步骤可以将模块从载板上拆卸下来。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian2.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 1**：在拆卸核心板之前，首先需要确认风扇电源是否连接。如果已连接，则需要从插头上拔下风扇电源（对于 Jetson Nano，可能没有风扇，可以跳过此步骤）。

- **步骤 2**：使用十字螺丝刀拆卸固定核心板的螺丝。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly2.jpg" alt="pir" width={500} height="auto" /></p>

- **步骤 3**：向外打开载板上的夹子，核心板会自动弹起。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly3.jpg" alt="pir" width={500} height="auto" /></p>

- **步骤 4**：将核心板沿对角线方向向上取出。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly4.jpg" alt="pir" width={500} height="auto" /></p>

## 将模块安装到载板上

- **步骤 1**：找到载板上的 Jetson SODIMM 连接器触点和模块上的连接器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerreinstalltion.jpg" alt="pir" width={500} height="auto" /></p>

- **步骤 2**：将模块以约 20 度的角度对角插入载板的插槽中。向下按压，模块将固定在载板上。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerreinstalltion2.jpg" alt="pir" width={500} height="auto" /></p>

!!! 注意
    您可能会发现，在正确安装的情况下，接口处会露出少量连接器触点。如果暴露过多的触点，模块将不稳定。
    <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerreinstalltion3.jpg" alt="pir" width={800} height="auto" /></p>

- **步骤 3**：使用十字螺丝刀拧紧螺丝。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly2.jpg" alt="pir" width={500} height="auto" /></p>

- **步骤 4**：如果模块包含冷却风扇，将风扇的电源插头插入载板上的电源插座。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian2.jpg" alt="pir" width={600} height="auto" /></p>

## 从 reComputer 机箱中拆卸载板

当我们需要安装 M.2 模块或 CSI 摄像头等操作时，需要将载板从 reComputer 机箱中拆卸出来以便操作。载板通过 4 个螺丝固定在机箱底座上，如下图所示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian5.jpg" alt="pir" width={600} height="auto" /></p>

按照下图所示拆卸 4 个固定螺丝：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian6.jpg" alt="pir" width={600} height="auto" /></p>

将载板连同模块一起从机箱中取出：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian7.jpg" alt="pir" width={600} height="auto" /></p>

## 为 reComputer 配备摄像头模块

reComputer 的载板均配备两个 CSI 接口。这些接口通常用于连接摄像头以完成一些识别项目。这里以 J1010 载板为例，指导您如何在 reComputer 上安装和使用 [Raspberry Pi Camera Module V2](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)。

- **步骤 1**. 将摄像头模块安装到载板上

!!!注意
    在安装之前，请关闭 reComputer，拔掉电源，并打开机箱的顶盖。
    为了方便以下的演示，我们将载板从机箱和模块中取出。实际操作只需要打开顶盖即可。

选择您想使用的 CSI 接口，然后轻轻翻起两侧的黑色固定槽。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/chai.jpg" /></div>

确保在插入电缆之前，将黑色固定槽翻起。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/cha.jpg" /></div>

注意电缆的方向。可以看到电缆引脚的一侧朝向载板，而蓝色的一侧朝外。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/que.JPG" /></div>

- **步骤 2**. 开机并启动 reComputer

插入摄像头电缆后，确保模块、载板和外设都已安装到位。然后开机。

- **步骤 3**. 检查摄像头是否被识别

在命令行窗口中输入以下命令，查看当前是否有可用的摄像头设备。

```shell
ls /dev/video0 
```

如果输出如下所示，则表示摄像头已成功检测到。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/50.jpg" /></div>

如果未看到设备文件，请检查您的排线方向是否正确，并确保您的树莓派摄像头是 V2 版本，因为 V1 版本无法被识别。

- **步骤 4**. 使用摄像头

您可以使用 GStreamer 的 `nvarguscamerasrc` 元素中的 `sensor_mode` 属性来指定摄像头。有效值为 0 或 1（如果未指定，默认为 0），例如：

```shell
# 简单测试
# 按 Ctrl^C 退出
# sensor_id 选择摄像头：在 Jetson Nano B01 上为 0 或 1
$ gst-launch-1.0 nvarguscamerasrc sensor_id=0 ! nvoverlaysink
```

您可以在命令行窗口中运行以下命令来测试摄像头的使用。

运行此命令后，reComputer 将全屏显示摄像头捕获的画面，直到您按下 `Ctrl+C`。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/51.jpg" /></div>

如果您有更多摄像头使用需求，可以参考 [CSI-Camera 项目](https://github.com/JetsonHacksNano/CSI-Camera) 自行探索和学习。

## 为 reComputer 配备无线模块

这里我们将展示如何在 reComputer 上安装 M.2 Key E 无线模块。

所需设备和配件：

- reComputer
- [Intel® Dual Band Wireless-AC 8265 无线模块](https://www.intel.cn/content/www/cn/zh/products/sku/123742/intel-dual-band-wirelessac-8265-desktop-kit/specifications.html)
- 2 个 IPEX 转 SMA 外接天线适配器和 SMA 公头天线用于 WIFI 模块
- 十字螺丝刀和螺丝

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian8.jpg" alt="pir" width={600} height="auto" /></p>

!!!注意
    安装 M.2 Key E 的无线模块需要额外的天线。由于模块位于机箱内，甚至可能被压在模块和载板之间。如果没有天线，信号强度将受到很大影响。

- **步骤 1**. 从 reComputer 机箱中取下载板

在安装无线模块之前，请按照下图所示，从 reComputer 机箱中取下载板：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian9.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 2**. 移除机箱硅胶塞

机箱中有 4 个预留的天线开孔，这些开孔被硅胶塞堵住，如下图所示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian10.jpg" alt="pir" width={600} height="auto" /></p>

选择两个外侧的孔，从机箱外部将硅胶塞挤入机箱内部，然后从内部拉出硅胶塞以露出天线孔。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian11.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 3**. 安装 SAM 接头

如下图所示，将 SAM 接头的螺母和螺帽安装到 WIFI 孔上，注意将电缆端放置在机箱内。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian12.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 4**. 将无线模块插入 M.2 Key E 接口

!!!注意
    M.2 Key E 接口位于载板的底部或顶部。对于不同的载板，请参考载板硬件布局。在安装之前，您可能需要将核心板从载板上取下。

如下图所示，在载板上找到 M.2 Key E 接口，并将无线模块插入接口槽中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian13.jpg" alt="pir" width={600} height="auto" /></p>

无线模块插入牢固后，用螺丝固定。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian14.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 5**. 将 2 个 IPEX 插头插入无线模块的对应插座，连接方式为按压连接，如下图所示。只需按压即可，无需其他操作。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian15.jpg" alt="pir" width={600} height="auto" /></p>

安装应如下面的图所示。在此过程中，请注意不要损坏无线模块与 SAM 天线底座之间的连接线。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian16.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 6**. 将模块安装到机箱中

小心地将载板放入 reComputer 机箱中，然后安装螺丝。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian17.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 7**. 安装天线

将两根 SAM 公头天线安装到 SAM 母头插座上并拧紧。至此，所有硬件安装完成。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian18.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 8**. 启动 reComputer 并连接到无线网络

将外设连接到 reComputer，然后启动设备。进入系统后，打开屏幕右上角的网络选项。勾选 **启用 Wi-Fi** 选项后，您将看到附近的无线网络。选择可用的无线网络进行连接。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian19.jpg" alt="pir" width={800} height="auto" /></p>

恭喜您，您已成功安装无线模块并连接到网络。

## 硬件布局

### **J101 载板**

**顶部视图**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer/reComputerJ101v2.png" alt="pir" width={750} height="auto" /></p>

### **J202 载板**

**顶部视图**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102991695/J202%20FRONT.png" alt="pir" width={750} height="auto" /></p>

**底部视图**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102991695/J202%20BACK.png" alt="pir" width={750} height="auto" /></p>

### **Jetson A206 载板（配备 Jetson Nano）**

*点击 [这里](https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/A206-carrier-board.pdf) 查看 Jetson A206 载板（配备 Jetson Nano）的引脚与操作接口。*

**顶部视图**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/Jetsonh01carriedboard.jpg" alt="pir" width={750} height="auto" /></p>

**底部视图**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/Jetsonh01carriedboards.jpg" alt="pir" width={600} height="auto" /></p>

### **Jetson A206 载板（配备 Jetson Xavier NX）**

*点击 [这里](https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/A206-carrier-board.pdf) 查看 Jetson A206 载板（配备 Jetson Nano）的引脚与操作接口。*

**顶部视图**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/Jetsonh02carriedboard.jpg" alt="pir" width={750} height="auto" /></p>

**底部视图**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/Jetsonh02carriedboards.jpg" alt="pir" width={720} height="auto" /></p>

## 详细对比

<table>
<tr>
<th>产品</th>
<th>reComputer J1010</th>
<th>reComputer J1020</th>
<th>reComputer J2011</th>
<th>reComputer J2012</th>
</tr>
<tr>
<td>模块</td>
<td>Nano</td>
<td>Nano</td>
<td>Xavier NX</td>
<td>Xavier NX 16GB</td>
</tr>
<tr>
<td>AI 性能</td>
<td>472 GFLOPS</td>
<td>472 GFLOPS</td>
<td>21 TOPS</td>
<td>21 TOPS</td>
</tr>
<tr>
<td>GPU</td>
<td>128核 NVIDIA Maxwell™</td>
<td>128核 NVIDIA Maxwell™</td>
<td>384核 NVIDIA Volta™ GPU</td>
<td>384核 NVIDIA Volta™ GPU</td>
</tr>
<tr>
<td>CPU</td>
<td>四核 ARM A57 @ 1.43 GHz</td>
<td>四核 ARM A57 @ 1.43 GHz</td>
<td>六核 NVIDIA Carmel ARM®v8.2 64位 CPU，6 MB L2 + 4 MB L3</td>
<td>六核 NVIDIA Carmel ARM®v8.2 64位 CPU，6 MB L2 + 4 MB L3</td>
</tr>
<tr>
<td>内存</td>
<td>4GB 64位 LPDDR4 25.6GB/s</td>
<td>4GB 64位 LPDDR4 25.6GB/s</td>
<td>8GB 128位 LPDDR4x 59.7GB/s</td>
<td>8GB 128位 LPDDR4x 59.7GB/s</td>
</tr>
<tr>
<td>存储</td>
<td>16 GB eMMC</td>
<td>16 GB eMMC</td>
<td>16 GB eMMC</td>
<td>16 GB eMMC</td>
</tr>
<tr>
<td>视频编码器</td>
<td>4K30 | 2x1080p60 | 4x1080p30 | 4x720p60 | 9x720p30 (H.265 & H.264)</td>
<td>4K30 | 2x1080p60 | 4x1080p30 | 4x720p60 | 9x720p30 (H.265 & H.264)</td>
<td>2x 4K60 | 4x 4K30 | 10x 1080p60 | 22x 1080p30 (H.265) 2x 4K60 | 4x 4K30 | 10x 1080p60 | 20x 1080p30 (H.264)</td>
<td>2x 4K60 | 4x 4K30 | 10x 1080p60 | 22x 1080p30 (H.265) 2x 4K60 | 4x 4K30 | 10x 1080p60 | 20x 1080p30 (H.264)</td>
</tr>
<tr>
<td>视频解码器</td>
<td>4K60 | 2x 4K30 | 4x 1080p60 | 8x 1080p30 | 9x 720p60 (H.265 & H.264)</td>
<td>4K60 | 2x 4K30 | 4x 1080p60 | 8x 1080p30 | 9x 720p60 (H.265 & H.264)</td>
<td>2x 8K30 | 6x 4K60 | 12x 4K30 | 22x 1080p60 | 44x 1080p30 (H.265) 2x 4K60 | 6x 4K30 | 10x 1080p60 | 22x 1080p30 (H.264)</td>
<td>2x 8K30 | 6x 4K60 | 12x 4K30 | 22x 1080p60 | 44x 1080p30 (H.265) 2x 4K60 | 6x 4K30 | 10x 1080p60 | 22x 1080p30 (H.264)</td>
</tr>
<tr>
<td>千兆以太网</td>
<td>1x RJ45 千兆以太网接口 (10/100/1000)</td>
<td>1x RJ45 千兆以太网接口 (10/100/1000)</td>
<td>1x RJ45 千兆以太网接口 (10/100/1000)</td>
<td>1x RJ45 千兆以太网接口 (10/100/1000)</td>
</tr>
<tr>
<td>USB</td>
<td>1 x USB 3.0 Type A 接口；2 x USB 2.0 Type A 接口；1 x USB Type C 用于设备模式；1 x USB Type C 用于 5V 电源输入</td>
<td>4 x USB 3.0 Type A 接口；1 x Micro-USB 接口用于设备模式</td>
<td>4 x USB 3.0 Type A 接口；1 x Micro-USB 接口用于设备模式</td>
<td>4 x USB 3.0 Type A 接口；1 x Micro-USB 接口用于设备模式</td>
</tr>
<tr>
<td>CSI 摄像头接口</td>
<td>2x CSI 摄像头 (15 pos, 1mm pitch, MIPI CSI-2)</td>
<td>2x CSI 摄像头 (15 pos, 1mm pitch, MIPI CSI-2)</td>
<td>2x CSI 摄像头 (15 pos, 1mm pitch, MIPI CSI-2)</td>
<td>2x CSI 摄像头 (15 pos, 1mm pitch, MIPI CSI-2)</td>
</tr>
<tr>
<td>显示</td>
<td>1x HDMI Type A</td>
<td>1x HDMI Type A；1x DP</td>
<td>1x HDMI Type A；1x DP</td>
<td>1x HDMI Type A；1x DP</td>
</tr>
<tr>
<td>风扇</td>
<td>1x 风扇 (5V PWM)</td>
<td>1x 风扇 (5V PWM)</td>
<td>1x 风扇 (5V PWM)</td>
<td>1x 风扇 (5V PWM)</td>
</tr>
<tr>
<td>M.2 KEY E</td>
<td>1x M.2 Key E</td>
<td>1x M.2 Key E（禁用）</td>
<td>1x M.2 Key E</td>
<td>1x M.2 Key E</td>
</tr>
<tr>
<td>M.2 KEY M</td>
<td>-</td>
<td>1x M.2 Key M</td>
<td>1x M.2 Key M</td>
<td>1x M.2 Key M</td>
</tr>
<tr>
<td>RTC</td>
<td>1x RTC 插座</td>
<td>1x RTC 插座</td>
<td>1x RTC 插座</td>
<td>1x RTC 插座</td>
</tr>
<tr>
<td>多功能端口</td>
<td>1x 40针排针</td>
<td>1x 40针排针</td>
<td>1x 40针排针</td>
<td>1x 40针排针</td>
</tr>
<tr>
<td>电源</td>
<td>USB-Type C 5V⎓3A</td>
<td>DC 插孔 12V/2A</td>
<td>DC 插孔 19V/4.74A (最大 90W)</td>
<td>DC 插孔 19V/4.74A (最大 90W)</td>
</tr>
<tr>
<td>尺寸</td>
<td>130 mm x 120 mm x 50 mm</td>
<td>130 mm x 120 mm x 50 mm</td>
<td>130 mm x 120 mm x 50 mm</td>
<td>130 mm x 120 mm x 50 mm</td>
</tr>
</table>

## 载板技术规格

|  接口                     |  J1010 载板                                   |  Jetson A206 载板                                   |
|--------------------------|--------------------------------------------------|--------------------------------------------------|
|  Jetson 模块接口       |  1x Jetson SODIMM 接口，260 针              |  1x Jetson SODIMM 接口，260 针              |
|  USB Type A              |  1x USB 3.0 Type-A 接口，2x USB 2.0 Type-A 接口  |  4x USB 3.0 Type-A 接口                          |
|  USB Micro Type B        |  -                                               |  1x USB Micro B，RA 母接口                        |
|  USB Type C              |  2x Type C 接口                                  |  -                                               |
|  以太网端口              |  1x RJ45 千兆以太网接口 (10/100/1000)            |  1x RJ45 千兆以太网接口 (10/100/1000)            |
|  显示端口                |  1x HDMI Type A                                  |  1x HDMI Type A 和 1x DP                         |
|  CSI 摄像头接口          |  2x CSI 摄像头 (15 针，1mm 间距，MIPI CSI-2)     |  2x CSI 摄像头 (15 针，1mm 间距，MIPI CSI-2)     |
|  M.2 Key E               |  1x M.2 Key E 插槽 (75 针) 2230                  |  1x M.2 Key E 插槽 (75 针) 2230                  |
|  M.2 Key M               |  -                                               |  1x M.2 Key M 插槽 (75 针) NVME 2280             |
|  多功能端口              |  2.0 间距 40 针                                  |  2.0 间距 40 针                                  |
|  按钮接口                |  1x 按钮接口 (1x12，2.54mm 间距，RA)             |  1x 按钮接口 (1x12，2.54mm 间距，RA)             |
|  风扇接口                |  1x Picoblade 接口                               |  1x Picoblade 接口                               |
|  CAN                     |  禁用                                            |  1x CAN 总线接口 (1x4，2.54mm 间距，RA)          |
|  RTC                     |  1x RTC 备用纽扣电池插槽 (CR1220)                |  1x RTC 备用纽扣电池插槽 (CR1225)                |
|  电源                    |  1x Type C 接口                                  |  1x DC 输入电源 TE 接口                           |

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>