---
description: reComputer for Jetson 系列
title: reComputer for Jetson 系列简介
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_Jetson_Series_Introduction
last_update:
  date: 05/15/2025
  author: w0x7ce

---

# reComputer for Jetson 系列简介

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerheadline.png" /></div>

## ✨ 贡献者项目

- 公共 Seeed Studio Wiki 平台更新
- 我们为更新此页面制定了任务列表，该页面归类于我们的[贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)，因为我们致力于通过改进 Wiki 平台来增强用户体验并提供更好的支持。
- [您对本页面的贡献](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35025656)对我们至关重要！我们非常重视您的意见，并非常感谢您为我们提供创意支持。

## 简介

reComputer for Jetson 系列是基于 NVIDIA 高级 AI 嵌入式系统构建的紧凑型边缘计算机：reComputer J10 (Nano) 和 reComputer J20 (Xavier NX)。结合丰富的扩展模块、工业外设、热管理以及 Seeed 多年的硬件专业知识，reComputer for Jetson 准备好帮助您在各种 AI 场景中加速和扩展下一代 AI 产品。

该系列兼容 NVIDIA Jetson 软件栈、云原生工作流和行业领先的 AI 框架，帮助实现无缝的 AI 集成。目前，我们已推出以下四款产品：

<table>
  <tr>
    <th>产品</th>
    <th><a href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html">reComputer J1010</a></th>
    <th><a href="https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html">reComputer J1020</a></th>
    <th><a href="https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html">reComputer J2011</a></th>
    <th><a href="https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html">reComputer J2012</a></th>
  </tr>
  <tr>
    <td>SKU</td>
    <td>110061362</td>
    <td>110061361</td>
    <td>110061363</td>
    <td>110061401</td>
  </tr>
  <tr>
    <td>侧视图</td>
    <td><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview3_1.png" /></td>
    <td><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png" /></td>
    <td><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png" /></td>
    <td><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png" /></td>
  </tr>
  <tr>
    <td>配备模块</td>
    <td>Jetson Nano 4GB</td>
    <td>Jetson Nano 4GB</td>
    <td>Jetson Xavier NX 8GB</td>
    <td>Jetson Xavier NX 16GB</td>
  </tr>
  <tr>
    <td>运行载板</td>
    <td>J1010 Carrier Board</td>
    <td>Jetson A206</td>
    <td>Jetson A206</td>
    <td>Jetson A206</td>
  </tr>
  <tr>
    <td>电源接口</td>
    <td>Type-C 接口</td>
    <td>DC 电源适配器</td>
    <td>DC 电源适配器</td>
    <td>DC 电源适配器</td>
  </tr>
  <tr>
    <td>链接</td>
    <td><a href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/getonenow.png" alt="pir" width="200" height="auto"/></a></td>
    <td><a href="https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/getonenow.png" alt="pir" width="200" height="auto"/></a></td>
    <td><a href="https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/getonenow.png" alt="pir" width="200" height="auto"/></a></td>
    <td><a href="https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/getonenow.png" alt="pir" width="200" height="auto"/></a></td>
  </tr>
</table>

## 接口详情

目前的 4 款 reComputer 产品外观相同，区别在于背面的接口。[reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html) 使用一种接口组合，而其他三款产品使用相同的另一种接口组合，因为机箱中使用了两种不同的载板。

### J1010 载板

此载板适用于 [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html)。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-a01mark.png" alt="pir" width={900} height="auto" /></p>

| 标记 | 名称                    | 备注                  |
|-------|-------------------------|-----------------------|
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num1.png" width="30px" height="30px"></image> | DCIN(Type-C 接口)  | 仅供电                 |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num5.png" width="30px" height="30px"></image>     | HDMI               |                       |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num4.png" width="30px" height="30px"></image>    | 1x USB 3.0 Type-A 接口  |                       |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num3.png" width="30px" height="30px"></image>    | 2x USB 2.0 Type-A 接口 |                       |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num2.png" width="30px" height="30px"></image>    | LAN                     |                       |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num6.png" width="30px" height="30px"></image>   | USB Type-C 接口         | 仅数据传输             |

### Jetson A206 载板

此载板适用于 [reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html)、[reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html) 和 [reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html)。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-h01mark.png" alt="pir" width={900} height="auto" /></p>

| 标记 | 名称                     | 备注                  |
|-------|-------------------------|-----------------------|
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num1.png" width="30px" height="30px"></image>    | DCIN（圆形接口）| 仅供电用     |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num5.png" width="30px" height="30px"></image>    | DP
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num4.png" width="30px" height="30px"></image>    | HDMI |                       |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num3.png" width="30px" height="30px"></image>    | 4个 USB 3.0 Type-A 接口                     |                       |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num2.png" width="30px" height="30px"></image>    | LAN        |             |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num6.png" width="30px" height="30px"></image>    | Micro-B 接口         | 仅用于数据传输 |

## 包装内容

在通电和启动之前，您需要完成所有检查和准备工作，以确保首次启动 reComputer 时一切正常。打开收到的产品包装，并根据您购买的产品型号检查包装内容是否完整。

### [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-10-1-A0shangxiang.png" alt="pir" width={500} height="auto" /></p>

**包装清单：**

- reComputer J1010，包括：
  - 4G Jetson Nano 模块 x1
  - J1010 承载板 x1

**未包含但启动所需的配件：**

- USB 键盘和鼠标
- 显示屏
- Type-C 电源线和电源适配器

:::note
    产品中不包含 Type-C 电源线和电源适配器。
:::

---

### [reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-10-1-H0shangxiang.png" alt="pir" width={500} height="auto" /></p>

**包装清单：**

- reComputer J1020，包括：
  - 4G Jetson Nano 模块 x1
  - Jetson A206 承载板 x1
- 12V/2A 电源适配器（带 5 个可更换适配插头）x1

**未包含但启动所需的配件：**

- USB 键盘和鼠标
- 显示屏

:::note
产品中包含 5 个可选电源适配器插头。Type-C 电源线和电源适配器已包含在产品中。因此，您可以选择适合您所在国家或地区的插头为 reComputer 供电，无需额外购买电源适配器。
:::

---

### [reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-20-1-H1shangxiang.png" alt="pir" width={500} height="auto" /></p>

**包装清单：**

- reComputer Jetson J2011，包括：
  - 8G Jetson Xavier NX 模块 x1
  - Jetson A206 承载板 x1
- 19V/4.74A（最大 90W）电源适配器（不含电源线）x1

**未包含但启动所需的配件：**

- USB 键盘和鼠标
- 显示屏
- 电源适配器电源线

:::note
请根据您当地的电源插头标准匹配电源适配器的电源线。
:::

---

### [reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-20-1-H2shangxiang.png" alt="pir" width={500} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-20-1-H2shangxiang1.png" alt="pir" width={500} height="auto" /></p>

**包装清单：**

- reComputer J2012，包括：
  - 16G Jetson Xavier NX 模块 x1
  - Jetson A206 承载板 x1
- 19V/4.74A（最大 90W）电源适配器（不含电源线）x1

**未包含但启动所需的配件：**

- USB 键盘和鼠标
- 显示屏
- 电源适配器电源线

:::note
请根据您当地的电源插头标准匹配电源适配器的电源线。
:::

---

## 更多信息

我们为您提供了更完整的 NVIDIA® Jetson 模块驱动设备对比表和 NVIDIA® Jetson 模块兼容承载板对比表。您可以点击图片或标题查看更详细的信息。

### <a href="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_00.png" target="_blank"><span>NVIDIA® Jetson 模块驱动设备对比表</span></a>

<div class="document">
<div class="document">
<p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
<p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><a href="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_00.png" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_00.png" alt="" /></a></p>
</div>
</div>

### <a href="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_01.png" target="_blank"><span>NVIDIA® Jetson 模块兼容承载板对比表</span></a>

<div class="document">
<div class="document">
<p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
<p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><a href="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_01.png" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_01.png" alt="" /></a></p>
</div>
</div>

## 资源

- **[PDF]** [NVIDIA Jetson 设备和载板比较](https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>