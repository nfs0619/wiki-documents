---
description: balena 是一个多功能的物联网平台，能够帮助开发者轻松构建、部署和管理跨多种设备架构的物联网应用，利用容器化部署实现无缝更新和强大的设备管理。reComputer R1000 边缘物联网控制器由 Raspberry Pi CM4 提供支持，具备高性能能力，可满足苛刻的边缘计算任务需求。balena 与 reComputer R1000 携手提供高效、安全的物联网应用部署和管理解决方案，适用于多种环境。

title: reComputer R1000 与 balena
keywords:
  - 边缘
  - reComputer R1000
  - balena
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_r1000_balena
last_update:
  date: 05/15/2025
  author: ShuishengPeng 和 Kasun Thushara
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 什么是 balena？

[balena](https://www.balena.io/) 是一个物联网 (IoT) 平台，旨在帮助开发者构建、部署和管理跨设备群的物联网应用。它支持多种设备架构，并包含容器化应用部署功能，使您能够轻松更新物联网软件和 HostOS，修复漏洞并为物联网应用引入新功能。balena 提供了一种统一的方式来推送代码更新、管理设备配置，并确保设备在现场可靠、安全地运行，无论其位置或网络条件如何。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena.png" alt="pir" width="700" height="auto" /></div>

## 入门指南

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

### 软件

* 一个 [balenaCloud](https://balena.io) 账户（在此注册），前 10 个设备免费。
* [balenaEtcher](https://etcher.balena.io/) 用于烧录 CM4 内存。

### 硬件配置

**步骤 1**：您需要将 R1000 侧面的开关设置为启动模式，然后为设备供电。

<div class="table-center">

| 开关位置                                                    | 模式        | 描述            | nRPI-BOOT |
| ------------------------------------------------------------ | ----------- | ---------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | 普通模式    | 从 eMMC 启动     | 低        |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | 烧录模式    | 从 USB 启动      | 高        |

</div>

**步骤 2**：请使用 USB Type-C 数据线将 reComputer R1000 连接到您的电脑。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/type-cport.png" alt="pir" width="250" height="auto" /></div>

### 镜像文件获取

**步骤 1**：访问 balenaCloud，创建一个免费账户，然后创建一个 fleet，默认设备类型选择 `Raspberry Pi CM4 IO Board`。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/create_fleet.gif" alt="pir" width="700" height="auto" /></div>

**步骤 2**：点击“添加设备”，选择您需要的版本信息和配置信息，然后在右下角下载 balenaOS 镜像文件。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/dowload_img.gif" alt="pir" width="700" height="auto" /></div>

:::note
建议先下载 balenaOS 镜像文件后再进行烧录。如果直接点击窗口右下角的“Flash”进行烧录，可能会导致烧录失败。
:::

### 烧录 balena OS 的步骤

**步骤 1**：打开 [**rpiboot**](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe) 软件，系统将显示新磁盘。

**步骤 2**：打开烧录工具 [balenaEtcher](https://etcher.balena.io/)，选择之前下载的 balena 镜像文件，然后选择目标磁盘，最后点击烧录。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/burn_image.gif" alt="pir" width="700" height="auto" /></div>

### 修改配置

**步骤 1**：将 [reComputer-R100x.dtbo](https://files.seeedstudio.com/wiki/reComputer-R1000/balena/reComputer-R100x.dtbo) 文件复制到 `resin-boot => overlays` 文件夹。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/dtbo_file.png" alt="pir" width="700" height="auto" /></div>

**步骤 2**：在 `config.txt` 文件中添加以下内容：
```shell
dtparam=i2c_arm=on
dtoverlay=i2c1,pins_44_45
dtoverlay=i2c3,pins_2_3
dtoverlay=i2c6,pins_22_23
dtoverlay=audremap,pins_18_19
dtoverlay=reComputer-R100x,uart2
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/change_config.png" alt="pir" width="700" height="auto" /></div>

**步骤 3**：将 reComputer R1000 的 DIP 开关设置为普通模式，然后重新上电。稍等片刻后，您可以在 balenaCloud 上看到新设备已成功添加。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/device_online.png" alt="pir" width="700" height="auto" /></div>

如果设备显示为 `Online (Heartbeat only)`，这可能是由于我所在地区的防火墙限制。如果你遇到同样的问题，可以连接一个 VPN 到设备，以便它能够正常显示为 `Online`。

### 部署测试
**步骤 1**：输入以下命令以下载资源并进行部署：
```shell
balena login
git clone https://github.com/mpous/seeed-recomputer-r100x.git
cd seeed-recomputer-r100x
balena push recomputerR1000
```
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/push_program.png" alt="pir" width="700" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/updating_two.png" alt="pir" width="700" height="auto" /></div>

**步骤 2**：部署完成后，终端上会出现一个独角兽图标，并且所有服务的状态将变为 `Running`。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/unicorn.png" alt="pir" width="700" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/Deployment_Complete.png" alt="pir" width="700" height="auto" /></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>