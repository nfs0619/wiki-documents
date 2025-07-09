---
description: 本文将向您展示如何创建设备图形

title: reComputer R1000 与 FIN 创建设备图形
keywords:
  - 边缘控制器
  - reComputer R1000
  - FIN
  - ModbusTCP
  - 图形
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/reComputer_r1000_fin_equip_gaphic
last_update:
  date: 05/15/2025
  author: ShuishengPeng
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 简介
FIN Framework (FIN) 是一个软件框架，包含应用套件，可用于集成、控制、管理、分析、可视化和连接。其功能可以被 OEM 集成到各种产品和服务中。

本文将向您展示如何使用 FIN Framework 的 `Graphics Builder`，并通过 `Graphics Builder` 创建一个 `设备图形`。

## 开始准备

在开始这个项目之前，您需要提前准备好硬件和软件，如下所述。

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

## 创建设备图形的步骤
### 创建新的设备图形
**步骤 1**：请将上下文放置在路径 `Tower => Floor1 => ModbusEquip` 下。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_path.png" /></center>

**步骤 2**：创建一个新的 `设备图形`。点击 `Graphic Builder => new`，根据系统上下文，将弹出一个名为 `Create a Graphic` 的窗口：

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_create_new_gtaphic.png" /></center>

弹出窗口主要包含以下属性：
- **Graphic Name:** 允许您为图形输入一个名称。
- **Graphic Template:** 允许您从可用的预构建“管道模板”列表中选择一个起始模板。这不是必填参数，只是提供一个管道工作的起点。（您也可以创建自己的模板以供使用）。
- **Graphic On Filter:** 图形过滤器指的是图形的 "graphicOn" 标签，这些标签决定了该图形将运行在哪些数据库记录上。默认情况下，此过滤器将根据您的上下文设备自动填充。（在我们的示例中，我在 VAV 上创建了图形，这就是为什么截图中的过滤器填充了该 VAV 的标签）。如果需要，可以在之后更改此过滤器。
- **Relative - By Tags:** 此选项使点根据其当前标签自动以相对方式加载。当点是相对的时，它们不会“硬编码”到一组设备的数据中。它们是相对的，并将在具有类似点的任何设备上加载，基于点的标签。
- **Relative - By navName:** 此选项使点根据其当前 navName 自动以相对方式加载。当点是相对的时，它们不会“硬编码”到一组设备的数据中。它们是相对的，并将在具有类似点的任何设备上加载，基于点的 navName。
- **Absolute - by Point Ids:** 此选项使点以绝对方式加载（或 `硬编码`）到您当前所在的设备。当点以 "Absolute by Point id" 引入时，路径会自动硬编码以从该确切点获取数据，无论图形加载在哪里。
- **Points:** 允许您选择要引入图形的点。通过使用 *CTRL* 和/或 *SHIFT* 键，您可以选择多个点。这些点是根据您的上下文设备填充的。您还可以获得与该设备的引用相关联的点。（在我们的示例中，VAV 有一个 ahuRef，因此我们能够选择来自 ahuRef 的点以显示在我们的图形中）。
- **Add Components For:** 此列表由您在前一个 "Points" 部分中选择的点填充。通过在此部分中突出显示点，您告诉 FIN 自动创建一个图形组件（基于其标签）并将点绑定到图形组件。这不是必需的，但可以节省时间，因为它选择组件，将其引入，将点绑定到它，并为其引入一个显示标签。

完成配置后，点击 `OK` 按钮。一个新的图形将出现在右侧。点击 `EquipGraphic => Edit` 进入编辑界面。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_1.gif" /></center>

### 配置新的设备图形
**步骤 1**：进入编辑界面后，系统将根据 `Add Components for` 属性中选择的内容自动生成智能标签和组件。移动控件并点击 `Magic Button => Smart Label to GraphicObjects`，使智能标签自动与控件对齐。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_2.gif" /></center>

**步骤 2**：检查 `虚拟点`。您可以通过电子邮件点击控件并选择 `编辑属性`。在新弹出的窗口中，您可以看到 `虚拟点`，并可以在此处进行修改；您还可以通过左下角的 `高级` 查看控件对应的 `虚拟点`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_3.gif" /></center>

**步骤 3**：添加新组件并连接 `虚拟点`。除了系统为我们自动生成的组件外，我们还可以自行添加。在左侧的 `组件` 框中有许多组件。用鼠标左键将控件拖动到工作控件中，然后在 `虚拟点` 列中选择相应的 `虚拟点`，并将其拖动到新的主控件中。这样，新控件与虚拟点的绑定就完成了。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_4.gif" /></center>

**步骤 4**：添加 `概览框`。我们可以添加一个 `概览框` 来一起显示所有的值。点击 `概览框 => 新建`，会弹出一个新窗口：

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_create_overview_box.png" /></center>

- **迷你组**：如果启用，这将使概览框以更大的值和更小的标题区域显示。此框比常规框更小，推荐用于需要将框放置在图形上的场景，例如 VFD（速度、命令、启用、状态）。
- **点**：这将允许您选择要包含在概览框中的点。**提示**：如果在打开概览框向导之前选择了任何智能标签，这些点将已经在向导的点列表中被选中。

选择点后，在下一个窗口中输入窗口标题，最后点击 `应用`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_5.gif" /></center>

**步骤 5**：显示结果

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_6.gif" /></center>

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>