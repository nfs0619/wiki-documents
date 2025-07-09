---
description: 在本教程中，我们将指导您在由树莓派驱动的 reComputer R1000 上安装 Grafana。我们还将向您展示如何将 Grafana 连接到现有的 InfluxDB 数据库，并创建一个详细的、直观的仪表板。
title: reComputer R1000 与 Grafana
keywords:
  - reComputer R1000
  - 工业物联网 (IIoT)
  - Grafana
  - 仪表板
  - SCADA
image: https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/grafana2.gif
slug: /cn/recomputer_r1000_grafana
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 简介

[Grafana](https://grafana.com/oss/grafana/) 是一个开源的可视化和分析软件，它使您能够从任何存储位置查询、可视化、警报和探索您的指标、日志和跟踪。它提供了将时间序列数据库 (TSDB) 数据转换为有洞察力的图表和可视化工具。作为一个强大的监控解决方案，Grafana 有助于做出明智的决策、提高系统性能并简化故障排除。在本教程中，我们将指导您在由树莓派驱动的 reComputer R1000 上安装 Grafana，将其连接到现有的 InfluxDB 数据库，并创建一个直观的仪表板。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/grafana2.gif" /></center>

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### 软件准备

建议参考之前的教程：[如何创建 InfluxDB 数据库](https://wiki.seeedstudio.com/recomputer_r1000_node_red_influxdb/)。在本教程中，我们将使用现有的 InfluxDB 连接进行设置。

## 添加 Grafana 仓库

**确保您树莓派操作系统上当前安装的所有软件包都是最新的**：

```bash
sudo apt update
```

**添加 Grafana APT 密钥：**

要将 Grafana APT 密钥添加到树莓派的密钥链中，请运行以下命令：

```bash
curl https://apt.grafana.com/gpg.key | gpg --dearmor | sudo tee /usr/share/keyrings/grafana-archive-keyrings.gpg >/dev/null
```

**添加 Grafana 仓库：**

在树莓派上使用以下命令将 Grafana 仓库添加到列表中：

```bash
echo "deb [signed-by=/usr/share/keyrings/grafana-archive-keyrings.gpg] https://apt.grafana.com stable main" | sudo tee /etc/apt/sources.list.d/grafana.list
```

**更新软件包列表：**

由于我们对软件包列表进行了更改，因此需要运行更新命令：

```bash
sudo apt update
```

## 在 reComputer R1000 上安装 Grafana

通过运行以下命令安装最新版本的 Grafana：

```bash
sudo apt install grafana
```

**配置 Grafana 开机启动**

启用 Grafana 开机启动：

```bash
sudo systemctl enable grafana-server
```

**启动 Grafana**

通过运行以下命令启动 Grafana 服务器软件：

```bash
sudo systemctl start grafana-server
```

**访问 Grafana**

要访问 Grafana 的网页界面，请打开浏览器并导航到：

```
http://<IPADDRESS>:3000
```

将 `<IPADDRESS>` 替换为您的 reComputer R1000 RPi 200 的 IP 地址。

**登录**

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/login.PNG" /></center>

默认的用户名和密码是：

- **用户名:** `admin`
- **密码:** `admin`

登录后，系统会提示您更改默认密码。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/updatepsw.PNG" /></center>

## 创建您的第一个 Dashboard

**导航到 Dashboards:**
   
点击左侧菜单中的 **Dashboards**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/dashboard1.PNG" /></center>

**创建一个新的 Dashboard:**
   
在 Dashboards 页面，点击 **New** 并选择 **New Dashboard**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/dashboard2.PNG" /></center>

**添加可视化:**
   
在 Dashboard 页面，点击 **+ Add visualization**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/dashboard3.PNG" /></center>

**选择数据源:**
   
系统会将您重定向到选择数据源页面。在上一个教程中，我们创建了一个 InfluxDB 数据库。点击 **Configure a new data source**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/configuresource.PNG" /></center>

**配置 InfluxDB:**
   
   - 在时间序列数据库中选择 **InfluxDB**。
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/addsource.PNG" /></center>

   - 提供 **URL**、**数据库名称** 和 **用户权限**。
  
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/configuresource2.PNG" /></center>

   - 点击 **Save & Test**。如果没有警告，说明配置成功。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/saveandtest.PNG" /></center>

**构建您的 Dashboard:**
   
您会看到一条确认数据源配置的消息。点击 **Building a dashboard**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/saveandtest2.png" /></center>

**添加可视化:**
   
系统会将您重定向到新的 Dashboard 页面。点击 **Add visualization**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/dashboard3.PNG" /></center>

**选择数据源:**
   
系统会将您重定向到选择数据源页面。我们已经创建了一个 InfluxDB 数据库连接。点击 **InfluxDB**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/datasource.PNG" /></center>

**配置可视化**

Grafana 提供了一个用户友好的界面，用于选择测量值、字段和其他相关数据点。我们将创建一个时间序列可视化。在左侧，您会看到用于输入面板标题、图例、轴设置和图表设置的选项。
请注意以下视觉元素，以便在您的第一个 Dashboard 中添加一个简单的图表。
有关更详细的设置和自定义，请参考 [Grafana 文档](https://grafana.com/docs/grafana/latest/panels-visualizations/visualizations/)。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/grafana.gif" /></center>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>