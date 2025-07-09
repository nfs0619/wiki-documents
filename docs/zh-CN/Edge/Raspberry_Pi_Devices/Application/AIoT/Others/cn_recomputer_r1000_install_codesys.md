---
description: 本文主要介绍如何安装 CODESYS 以及如何在 R1000 上部署新项目

title: 如何为 reComputer R1000 安装 CODESYS
keywords:
  - 边缘控制器
  - reComputer R1000
  - CODESYS
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/recomputer_r1000_install_codesys
last_update:
  date: 05/15/2025
  author: ShuishengPeng
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 简介
CODESYS 是一个广泛应用于工业控制和自动化系统的流行自动化软件开发平台。其全称为控制器开发系统（Controller Development System），最初由德国公司 3S-Smart Software Solutions 开发。
本文主要介绍如何下载和安装 CODESYS，并最终将 CODESYS 项目部署到 reComputer R1000。

在开始这个项目之前，您可能需要提前准备好硬件和软件，如下所述。

## 硬件准备

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

## 软件准备

* [CODESYS Development System V3](https://store.codesys.com/de/codesys.html)
* [CODESYS Control for Raspberry Pi SL](https://store.codesys.com/de/codesys-control-for-raspberry-pi-sl.html)

## 开始

### 安装 CODESYS
**步骤 1**：访问 CODESYS 商店，找到 `CODESYS Development System V3` 并下载，然后找到 `CODESYS Control for Raspberry Pi SL` 并下载。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/1.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/2.png" /></center>

**步骤 2**：双击下载的 `CODESYS 64 3.5.20.30.exe` 文件并点击 `install` 下载 `CODESYS Installer`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/3.png" /></center>

**步骤 3**：下载完成后，`InstallShield Wizard` 将自动弹出。点击 `Next` 开始安装 `CODESYS`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/4.png" /></center>

**步骤 4**：点击接受许可协议，然后点击 `Next` 进入下一步。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/5.png" /></center>

**步骤 5**：点击 `I have read the information`，然后点击 `Next`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/6.png" /></center>

**步骤 6**：修改安装目录，完成修改后点击 `Next`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/7.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/8.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/9.png" /></center>

**步骤 7**：选择 `Complete` 完全安装 CODESYS，然后点击 `Next`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/10.png" /></center>

**步骤 8**：点击 `Install` 开始安装。安装过程需要一些时间，请耐心等待安装完成。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/11.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/12.png" /></center>

### 更新依赖包

**步骤 1**：安装完成后，打开 `CODESYS V3.5 SP20 Patch 3`，点击 `Tools`--->`CODESYS Installer..`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p1.png" /></center>

**步骤 2**：在新窗口中，点击 `Install File(s)`，然后选择要安装的包。选择后，包将被解析。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p2.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p3.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p4.png" /></center>

**步骤 3**：点击 `I accept the license agreement(s)`，然后点击 `Continue` 开始安装。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p5.png" /></center>

**步骤 4**：弹出窗口会提示您关闭 `CODESYS V3.5 SP20 Patch 3`。关闭 CODESYS 后点击 `OK`。CODESYS 将开始安装新包。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p6.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p7.png" /></center>

**步骤 5**：等待安装完成。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p8.png" /></center>

### 部署 CODESYS 运行时


CODESYS Runtime 指的是 CODESYS 运行时系统，它是一种安装在目标设备上的软件，用于执行通过 CODESYS 开发环境创建的 PLC 程序。CODESYS Runtime 将目标设备（如嵌入式系统、工业计算机、Raspberry Pi 等）转变为可编程逻辑控制器（PLC）。

**步骤 1**：确保 reComputer R1000 和主机电脑处于同一网络段

**步骤 2**：点击 `Tools`--->`Update Raspberry Pi`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_run_time/r1.png" /></center>

**步骤 3**：输入 reComputer R1000 的用户名和密码、IP 地址，然后点击 Install 下载 `run time` 到 reComputer R1000，最后点击 `Start` 启动 `run time`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_run_time/r2.png" /></center>

**步骤 4**：当消息栏中出现以下信息时，表示 reComputer R1000 已成功运行 `run time`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_run_time/r3.png" /></center>


### 部署一个新项目

**步骤 1**：点击 `File`--->`New project` 创建一个新项目

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n1.png" /></center>

**步骤 2**：输入项目名称，选择 `Project`--->`Standard project`，最后点击 `OK`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n2.png" /></center>

**步骤 3**：在 `Device` 栏中选择 `CODESYS Control for Raspberry Pi 64 SL (CODESYS)`，在 `PLC_PRG in` 中选择 `Structured Text (ST)`，最后点击 `OK`。一个新项目就创建完成了。稍后我们将演示如何部署该项目。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n3.png" /></center>

**步骤 4**：创建项目后，双击它。在新弹出的窗口中，点击 `Scan Network`，可以找到同一网络段中的 reComputer R1000。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n4.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n5.png" /></center>

**步骤 5**：选择 R1000 并点击 `OK`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n6.png" /></center>

**步骤 6**：在 `Add Device User` 窗口中，填写 reComputer R1000 的用户名和密码，最后点击 `OK`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n7.png" /></center>

**步骤 7**：随后会弹出 `Device User Login` 窗口，再次填写 reComputer R1000 的用户名和密码，最后点击 `OK`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n8.png" /></center>

**步骤 8**：连接成功后，可以看到状态指示灯全部为绿色

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n9.png" /></center>

**步骤 9**：点击工具栏上的 Deploy 按钮，如图所示，将当前项目编译并部署到 reComputer R1000

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n10.png" /></center>

**步骤 10**：点击工具栏上的 Start 按钮，在 reComputer R1000 中启动当前项目

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n11.png" /></center>

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