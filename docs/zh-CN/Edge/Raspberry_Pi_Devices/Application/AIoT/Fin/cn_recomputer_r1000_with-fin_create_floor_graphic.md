---
description: 本文将向您展示如何创建一个楼层图形

title: 使用 reComputer R1000 和 FIN 创建楼层图形
keywords:
  - 边缘控制器
  - reComputer R1000
  - FIN
  - ModbusTCP
  - 图形
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/reComputer_r1000_fin_floor_gaphic
last_update:
  date: 05/15/2025
  author: ShuishengPeng
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 简介
FIN Framework (FIN) 是一个包含应用套件的软件框架，可用于集成、控制、管理、分析、可视化和连接。其功能可以被 OEM 集成到各种产品和服务中。

本文将向您展示如何使用 FIN Framework 的 `Graphics Builder`，并通过 `Graphics Builder` 创建一个 `楼层图形`。

## 开始之前

在开始此项目之前，您需要按照以下说明提前准备好硬件和软件。

### 硬件准备

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### 软件准备
* 关于如何安装 FIN Framework，您可以参考此 [wiki](https://wiki.seeedstudio.com/reComputer_r1000_install_fin/)。
* 关于如何使用 FIN Framework 的 Modbus 功能，您可以参考此 [wiki](https://wiki.seeedstudio.com/reComputer_r1000_fin_modbus_tcp_and_rtu/)。

## 创建楼层图形的步骤
### 创建新的楼层图形
**步骤 1**：我们建立了一个 Modbus TCP 连接和一个 Modbus RTU 连接，并创建了相应的设备（Equip）。每个设备都有一个 `humidity` 和 `temperature` 标签。关于如何实现此步骤，您可以参考此 [wiki](https://wiki.seeedstudio.com/reComputer_r1000_fin_modbus_tcp_and_rtu/)。同时，请将 FIN Framework 的上下文放置在相应的 `楼层` 下。在这里，我们将上下文放置在 `Tower => Floor1` 下。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_sit_path_and_equip.png" /></center>

**步骤 2**：创建一个新的楼层图形并进入编辑界面。点击 `Graphic Builder => new`，将弹出 `Create a Floorplan Graphic` 的窗口。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_sit_new_floor_graphic.png" /></center>
它有四个属性：

  - 图形名称（Craphic Name）
  - 选择一个示例设备（Pick a Sample Equip）
  - 选择默认点（Pick Default Point）：将在图形中显示的属性
  - 选择比较点（Pick Comparison Point）：颜色范围的参考点

点击 'OK' 后，将弹出一个新窗口，列出与 `Pick Default Point` 属性相同的设备（Equip）。在这里，我们选择所有设备，最后点击 'OK'。
之后，我们新创建的图形将出现在右侧。点击 `CCFloor1 => Edit` 进入编辑界面。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_1.gif" /></center>

### 配置新的站点图形

**步骤 1**：导入背景图片。首先，在左下角的属性栏中选择 `BACGROUND`，将 `TYPE` 设置为 `IMAGE`，然后将背景图片导入工作区。将 `POSITION` 选项设置为 `Center`，将 `REPEAT` 选项设置为 `NO REPEAT`。导入背景图片有两种方式。第一种方式是直接从文件夹中拖动图片到编辑框中；第二种方式是点击左下角的 `BROWSE`。如果您之前已经导入过某张图片，可以在这里找到该图片。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_2.gif" /></center>

**步骤 2**：绘制多边形。我们使用 `polygon Tool` 绘制多边形，以标记每个设备（Equip）的位置。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_3.gif" /></center>

**步骤 3**：添加 `虚拟点`。切换到左侧的 `Virtual points` 面板，选择与我们选定设备（Equip）匹配的 `虚拟点`，并将其拖动到绘制的多边形中。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_4.gif" /></center>

**步骤 4**：添加智能标签。点击 `Magic Buttons => Smart Label to Polys`，自动将标签放置到对应的 `虚拟点` 上。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_5.gif" /></center>

**步骤 5**：调整智能标签的大小。您可以点击智能标签调整其大小。如果您想同时修改多个智能标签的大小，可以点击 `Compulsions=>Smart label=>Select` 选择所有智能标签，然后调整它们的大小。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_6.gif" /></center>

**步骤 6**：将智能标签更改为 `非交互`，以便标签不会干扰您的操作。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_7.gif" /></center>

**步骤 7**：保存并显示效果。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_8.gif" /></center>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>