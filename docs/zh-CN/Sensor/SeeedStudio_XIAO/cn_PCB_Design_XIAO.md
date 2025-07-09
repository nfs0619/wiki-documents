---
description: XIAO 的 PCB 设计
title: XIAO 的 PCB 设计
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/PCB_Design_XIAO
last_update:
  date: 05/15/2025
  author: Matthew
---

# 在 Flux.ai 上创建 XIAO 组件

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

Flux 是一个基于浏览器的 PCB 设计工具，可实现电子团队之间的无缝协作。该工具的直观界面允许用户快速轻松地创建原理图和布局，同时其内置的仿真功能有助于确保设计的准确性和无误性。

在本节中，我们将介绍如何在 Flux.ai 上创建 Seeed Studio XIAO 系列组件。

## 浏览 Seeed Studio XIAO 系列 PCB 设计

### Seeed Studio XIAO SAMD21

<iframe height={450} width={800} allowFullScreen src="https://www.flux.ai/cnaville89/seeed-xiao-samd21?editor=pcb_3d&embed=1">
</iframe>

### Seeed Studio XIAO RP2040

<iframe height="450" width="800" allowfullscreen src="https://www.flux.ai/seeedstudio/seeed-studio-xiao-rp2040?editor=pcb_3d&embed=1" />

### Seeed Studio XIAO nRF52840

<iframe height="450" width="800" allowfullscreen src="https://www.flux.ai/seeedstudio/seeed-studio-xiao-nrf52840?editor=pcb_3d&embed=1" />

### Seeed Studio XIAO nRF52840 Sense

<iframe height={450} width={800} allowFullScreen src="https://www.flux.ai/gokux/seeed-studio-xiao-nrf52840-sense?editor=pcb_3d&embed=1">
</iframe>

### Seeed Studio XIAO ESP32C3

<iframe height="450" width="800" allowfullscreen src="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32c3?editor=pcb_3d&embed=1" />

### Seeed Studio XIAO ESP32S3

<iframe height={450} width={800} allowFullScreen src="https://www.flux.ai/gokux/seeed-studio-xiao-esp32s3?editor=schematic&embed=1">
</iframe>

### Seeed Studio XIAO ESP32S3 Sense

<iframe height="450" width="800" allowfullscreen src="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32s3-sense?editor=pcb_3d&embed=1" />

## 关于 Flux.ai 的知识 - 创建零件

在 Flux 中，零件由 5 个主要组件组成。所有这些组件都是可选的，但缺少某个组件的零件将无法提供其全部功能：

| 概念 | 描述 |
| --- | --- |
| Schematic | 零件的“内部”视图，仅由端子表示。 |
| Symbol | 零件拖入其他项目时的表示形式，通常是用户从其他工具中熟悉的形式。 |
| Footprint | 表示物理零件如何放置在电路板上。 |
| 3D model | 显示零件的 3D 形状和尺寸。 |
| Simulation model | 描述零件在仿真期间应如何表现。 |

## 入门指南

### 第一步 - 创建新的零件原理图

第一步是创建一个新的空白项目，您可以在 Flux 菜单的右上角完成此操作。端子是 Flux 中创建的每个零件的基础。它们允许零件与电路的其余部分交互。要为新零件添加端子，请转到库中，搜索“Terminal”，然后拖入所需数量的端子。

在本示例中，我们将添加 Seeed Studio XIAO ESP32S3，因此我添加了 14 个端子引脚，并为它们命名和编号。

您可以在零件属性中提供有关零件的更多信息，例如制造商零件编号 (MPN)、制造商名称、数据表 URL 等。输入组件的 MPN 将帮助您找到当前的库存可用性和组件价格。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO.png" /></div>

### 第二步 - 创建符号

Flux 的工作方式与您可能习惯的其他工具略有不同。在 Flux 中，零件有两种不同的视图：原理图和符号。第一步中的原理图视图仅包含端子。符号仅在将零件放置到项目中时可见。现在让我们为我们的 XIAO 创建一个符号，但我们需要使用一些外部工具，例如 Illustrator 或 Inkscape。设计的符号格式需要为 .svg。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO2.png" /></div>

设计符号时需要考虑以下事项：
- 每个形状和线条应为白色，线条宽度为 1px，无填充。
- 引脚通常为 10 到 18 像素长。

现在将符号导出为 SVG 文件。

### 第三步 - 将 SVG 添加为资产

一旦有了 SVG 文件，将其添加为资产。要将外部文件添加为资产，请确保未选择任何对象（单击空白画布）。在右侧抽屉中向下滚动，直到找到资产面板。打开它并点击“Add”（或“Manage”）。这将打开资产对话框。然后点击“Add item”，并从本地驱动器中选择文件。

**匹配引脚位置与自定义符号。**  
默认情况下，所有端子都位于符号的中心。要将端子定位到所需位置，还需要执行以下几个步骤：

1. 将零件发布到库中。
2. 创建一个新的空白项目并拖入您正在导入的零件。
3. 您会注意到两个端子都位于符号的中心。现在返回到导入的零件。
4. 您需要为零件中的每个端子执行此过程。
   a) 选择端子，并在右侧面板的“Properties”菜单中找到“Symbol Pin Position”字段。  
   b) 在字段中输入端子在符号上的所需 x 和 y 坐标。  
   c) 发布零件并返回到新项目。您会在左下角看到“Update available for your parts”（零件有更新）提示。点击“Review”并接受更改。  
   d) 您会注意到端子已移动。您可能需要重复此过程几次以达到完美的位置。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO3.png" /></div>

### 第四步 - 创建封装

在 Flux 中创建封装非常简单。它由焊盘、线条、形状和文本节点组成，可以直接在 Flux PCB 编辑器中添加。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO4.png" /></div>

当你第一次在 Flux 上创建一个封装时，所有的焊盘都会集中在一个地方，显示为小点。

- **更改焊盘位置**  
  - 在右侧面板中选择要移动的焊盘，在对象特定规则中找到位置规则。  
  - 输入所需的 x 和 y 位置（以毫米为单位）。

### 第五步 - 修改焊盘的大小和形状

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO5.png" /></div>

通过点击一个焊盘，你可以更改其形状、位置、孔径和其他属性。对于 XIAO，我选择了 3mm*2mm 的焊盘和 1.1mm 的孔径。通过使用 x 和 y 的毫米位置，将每个引脚间隔 2.54mm 放置。

**添加 3D 模型**

现在我们需要为 XIAO 添加一个 3D 模型。Flux 支持 .step 文件格式的 3D 模型，你可以从官方 Wiki 页面下载。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO6.png" /></div>

你可以从辅助部分上传 3D 模型。关于添加 3D 模型的更多详细信息可以在视频中找到。  
你可以通过对象特定规则更改 x、y、z 位置和旋转。利用这些功能，你可以将 3D 模型定位在焊盘的顶部。

**发布到库中**

创建组件后，就可以将其发布了。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO7.png" /></div>

点击左上角的 Flux 图标，然后选择“发布更改”。  
现在，我们的组件将会出现在我们的个人资料中，并且会显示在公共库的搜索结果中。

## 更多内容 - 教程视频

<iframe width={560} height={315} src="https://www.youtube.com/embed/5cGg5n6sXJE?si=nSYvVSl-q3axb4Ss" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />

## ✨ 贡献者项目

- 本项目由 [Seeed Studio 贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6) 支持。
- 感谢 [Gokul](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=42323283) 的努力，你的工作将会被 [展示](https://wiki.seeedstudio.com/Honorary-Contributors/)。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>