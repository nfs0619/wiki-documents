---
description: reCamera的开箱教程
title: reCamera开箱快速指导
keywords:
  - Edge
  - reCamera
  - 边缘计算
  - AI摄像机
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /cn/recamera_getting_started
sidebar_position: 1
last_update:
  date: 03/11/2025
  author: Evelyn Chen
---


# reCamera 快速入门指南
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" /></div>
欢迎使用 reCamera！本指南将帮助你快速设置设备，并开始使用它来解锁强大的 AI-Vision 功能。无论你是初学者还是有经验的用户，这个分步指南都将引导你完成安装、配置和首次使用。

<div class="get_one_now_container" style={{textAlign: 'center'}}> <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html"> <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱</font></span></strong> </a> </div>
产品系列
reCamera 有 4 个版本：

<table border="1"> <tr> <th> </th> <th>reCamera 2002 8GB</th> <th>reCamera 2002 64GB</th> <th>reCamera 2002w 8GB</th> <th>reCamera 2002w 64GB</th> </tr> <tr> <td>主板</td> <td>Core 2002 8GB</td> <td>Core 2002 64GB</td> <td>Core 2002w 8GB</td> <td>Core 2002w 64GB</td> </tr> <tr> <td>传感器板</td> <td>S101(OV5647)</td> <td>S101(OV5647)</td> <td>S101(OV5647)</td> <td>S101(OV5647)</td> </tr> <tr> <td>底板</td> <td>B101</td> <td>B101</td> <td>B101</td> <td>B101</td> </tr> <tr> <td>无线 (Wi-Fi/蓝牙)</td> <td> </td> <td> </td> <td>✅</td> <td>✅</td> </tr> <tr> <td>安装方式</td> <td>磁吸/相机支架安装</td> <td>磁吸/相机支架安装</td> <td>磁吸/相机支架安装</td> <td>磁吸/相机支架安装</td> </tr> <tr> <td>供电</td> <td>Type-C 数据线</td> <td>Type-C 数据线</td> <td>Type-C 数据线</td> <td>Type-C 数据线</td> </tr> </table>
## 设备开箱与开机指导
首先拆开你的 reCamera 包装盒。盒内应包含：

- reCamera
- Type-C 数据线
- 网线

请确保所有部件齐全。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/part_list.jpg" /></div>
只需使用附带的 Type-C 数据线为设备供电。当你看到绿灯亮起时，即表示 reCamera 已经可以连接到网络。

**指示灯状态：**

| LED（颜色） | 状态 | 说明                   |
| ----------- | ---- | ---------------------- |
| LED1 - 绿灯 | 常量 | 已通电                 |
| LED2 - 红灯 | 闪烁 | CPU 工作（用户自定义） |
| LED3 - 蓝灯 | 闪烁 | eMMC 读写              |

## 网络连接

连接 reCamera 到网络有三种方式：

### 方法1：USB 数据线

**通过 USB 数据线进行有线网络配置**

将 reCamera 通过 USB 数据线连接到你的 PC，然后访问 192.168.42.1 查看 reCamera 的加载页面。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/usbmode.png" /></div>
如果你的 reCamera 具备无线功能，我们建议设置 Wi-Fi 连接。仅 2002w 版本提供 Wi-Fi 选择界面。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Wi-Fi_list.png" /></div>

如果遇到任何问题，请参考[网络故障排除](https://wiki.seeedstudio.com/recamera_network_connection/)。

### 方法2：以太网

**以太网端口网络配置**

如果你想使用以太网端口，可以使用盒内附带的网线连接到路由器。注意，这不是 POE（以太网供电），你仍需使用 Type-C 数据线为设备供电。你可以卸下摄像头背部螺丝，通过端口连接。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/IPmode.png" /></div> <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/ethernet_cable.png" /></div>
连接后，你可以在路由器后台查找 reCamera 的 IP 地址，然后访问其网站和 Node-RED 平台。

### 方法3：AP 模式（仅适用于 2002w 版本）

**AP 模式下的无线网络配置**

开机时，reCamera 会自动开启接入点 (AP) 以便你更改网络设置。打开手机或笔记本的 Wi-Fi 列表，你应该能看到一个名为 `reCamera_******` 的 Wi-Fi。

该设备的命名规则为` "recamera_" + MAC` 地址的后六位。
默认密码为 `12345678`。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/laptop_wifi_list.png" /></div>
连接到该 AP 后，网页会自动弹出。如果没有自动弹出，你可以在浏览器中输入 `192.168.16.1` 访问该页面，然后选择 reCamera 要连接的 Wi-Fi。
如果你有多台 reCamera，可参考[设备管理](https://wiki.seeedstudio.com/recamera_getting_started/#multi-devices-management)以区分各设备。

## 基本网页访问

一旦 reCamera 连接到网络，你可以在浏览器中通过 IP 地址访问其网页界面：

USB 连接 IP：`192.168.42.1`
Wi-Fi 或以太网连接 IP：使用` ifconfig `命令查看，或通过路由器网络管理查找。
网页地址：

主页：`ip_address/#/init`
工作区：`ip_address/#/workspace`（适用于 OS 版本 0.1.4 及以上）
网络配置：`ip_address/#/network`
安全性：`ip_address/#/security`
终端：`ip_address/#/terminal`
系统：`ip_address/#/system`
电源：`ip_address/#/power`
原始 Node-RED：`ip_address:1880`
**请检查你的设备操作系统版本。**

0.1.3 与 0.1.4 之间存在重大升级。为获得更流畅的体验，我们建议升级到 0.1.5 及以上版本。请前往 Sidebar -> System -> Software Update 检查软件版本，并安装最新 OS。更新说明请参考 [OTA 升级指南](https://wiki.seeedstudio.com/recamera_getting_started/#ota-upgrade-from-013-to-latest-version)。

### 从 0.1.3 升级到最新版本 OTA

如果你是第一批 reCamera 用户，可以按照以下步骤将操作系统升级到最新版本。

**步骤 1**：打开网页并导航至 `Sidebar -> System -> Software Update`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade1.png" /></div>

**步骤 2**：检查你的操作系统版本，然后点击 **Check** 和 **Apply**。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade2.png" /></div>

**步骤 3**：等待几分钟完成系统更新。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade3.png" /></div>

**步骤 4**：重启设备并刷新网页。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade4.png" /></div>

**步骤 5**：你将进入加载页面以更改密码。现在，你可以按照[此下载说明](https://wiki.seeedstudio.com/recamera_getting_started/#access-recamera-preview-dashboard)体验带有 Node-RED 仪表盘的最新版本 reCamera。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade5.png" /></div>

### 访问 reCamera 预览可视化网页

通过集成 Node-RED，设备内置了一个仪表盘 UI 示例，你可以预览视频流、切换所需模型，并可自由修改、集成到你自己的应用中。

如果你的 OS 版本为 0.1.5 或以上，登录后会自动显示预览仪表盘。
如果你自行升级了 OS，可以从 Sensecraft AI 下载仪表盘的 json flow。

**步骤 1**：升级完成后，通过 42.1 或网络 IP 访问网页，然后点击 `Download dashborad flow`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload1.png" /></div>

**步骤 2**：进入 Sensecraft AI 平台，选择第一个官方仪表盘演示并点击 `Clone`。（此网站需登录）

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload2.png" /></div>

**步骤 3**：选择你的设备连接方式。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload3.png" /></div>

**步骤 4**：此时将显示带有预构建 flow 的 Node-RED 工作区。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload4.png" /></div>

**步骤 5**：点击 `Deploy` 并确认 flow 已启动，然后点击 `dashboard`，仪表盘将显示。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload5.png" /></div>
请确保 flow 已启动。有时导入 flow 后不会自动启动，导致仪表盘为空。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload6.png" /></div>
成功！

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload7.png" /></div>

**步骤 6**：你可以调整 `IoU` 和 `Confidence` 的阈值以获得更准确的结果。

- IoU=0, Confidence=0:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard2.png" /></div>
- IoU=25, Confidence=33:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard3.png" /></div>

### Flow 解析

在此示例 flow 中，我们构建了一个通过 Counting Selection 下拉列表来计数所选对象（如人员、猫、狗和瓶子）的演示。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard1.png" /></div>
通过修改 flow 中的 `function nodes`，你可以添加更多需要计数的对象，或将此功能完全改为其他计算机视觉应用。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/counting_demo.png" /></div>

你可以通过查看 `model node` 来了解可检测的对象种类。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/model_list.png" /></div>
请随意修改和尝试 flow，但注意不要在模型节点后放置过多的 `debug nodes` 或 `preview nodes`，因为大量输出 AI 模型结果会消耗 CPU 资源，可能导致设备崩溃。

计算机视觉模型
在这些预置工作流程中，默认选择的是 `YOLO11n detection model`，这是最新的实时目标检测计算机视觉模型。你也可以在节点中替换为其他模型。如果想了解其他可用模型，请参考此 [wiki](https://wiki.seeedstudio.com/recamera_on_device_models/)。

**交并比 (IoU)**：IoU 是一种评估预测边界框与真实边界框重叠程度的指标，计算方法为两个框交集面积与并集面积的比例。IoU 的数值通常介于 0 到 1 之间。我们将其标准化为 0 - 100 的比例，IoU 值为 0 表示预测框与真实框完全不重叠，100 表示完全匹配，即两个框完全重合。

**置信度**：在 YOLO 模型中，置信度表示预测边界框内包含目标的概率及预测准确性，其数值介于 0 到 100 之间。

## 定制你的仪表盘并分享至社区

我们鼓励用户在社区中分享他们开发和创建的仪表盘。我们已在 [GitHub](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main/Node-RED_Flow/public_flow) 上创建了一个文件夹，希望大家通过 pull request 分享他们的仪表盘，我们将整理并展示这些作品。
这里我们以在仪表盘中添加补光功能为例，展示如何简单添加一个节点并控制 reCamera。

**步骤 1**：将 **button group** 节点拖到工作区，并按以下设置进行编辑。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard1.png" /></div> <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard2.png" /></div>

**步骤 2**：添加一个名为 "Control Button" 的新的 ui-group 配置节点，然后保存。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard3.png" /></div>

**步骤 3**：进入仪表盘 2.0，将控制按钮框放置在模型选择下方。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard4.png" /></div> <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard5.png" /></div>

**步骤 4**：部署 flow 并进入仪表盘。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard6.png" /></div>

**演示**：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard5.gif" /></div>

**步骤 5**：别忘了导出 flow 的 json 文件，并将其分享至我们的 GitHub。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard7.png" /></div>

## 端口列表

以下是 reCamera 使用的端口：

**端口 22**：用于远程 SSH 登录，并保持开启。
**端口 53**：用于 DNS 域名解析，是网页重定向的关键，默认开启。
**端口 80**：作为 Node-RED 应用的网页仪表盘接口，用于 HTTP 显示。
**端口 554**：用于 RTSP 视频流传输。
**端口 9090**：用于网页终端访问，需密码登录。
**端口 1880**：专用于 Node-RED 操作。

## 恢复出厂设置

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-12.png" /></div>
如果你想重置设备（例如忘记设备密码），可以长按 User 按钮，然后接通电源。当设备的**红灯**持续亮起（而非闪烁）时，松开 User 按钮。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-1.gif" /></div>
这将删除用户信息，包括你开发的应用程序以及任何本地存储的图片和视频。请谨慎操作。

如果你想将设备固件恢复到特定版本，请访问[操作系统版本控制](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main/Node-RED_Flow/public_flow)。

## 多设备管理

如果你拥有多台 reCamera，可以通过设备背面的 **MAC 地址** 或 **序列号** 来区分。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/mac_address_tag.png" /></div>
或者，一旦通过 USB 或 AP 将设备连接到笔记本电脑，可使用以下命令查看 MAC 地址：

```bash
ifconfig wlan0
```



<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/last_six_digits.png" /></div>

## 摄像头方向

默认的摄像头视角方向如下图所示，其中 **Type-C 接口朝下**。请注意，其他方向可能会影响你所训练检测模型的准确性。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/default_orientation.jpeg" /></div>

## 相关资源链接

- [reCamera Flyer](https://files.seeedstudio.com/wiki/reCamera/reCamera_one_pager.pdf)

- [reCamera OS](https://github.com/Seeed-Studio/reCamera-OS)

- [reCamera Series](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

- [reCamera SSCMA](https://github.com/Seeed-Studio/sscma-example-sg200x)


## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
