---
description: reComputer J1010 | J101
title: J101 载板
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_J1010_J101_Flash_Jetpack
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # for Disqus

---

# J101 载板

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

在本篇 Wiki 中，我们将向您展示如何将 Jetpack OS 刷写到 reComputer J1010 上。由于其承载板的设计类似于官方的 NVIDIA Nano 开发者承载板，因此我们可以通过两种方式刷写 JetPack。

## 入门指南

我们可以使用 **NVIDIA SDK Manager** Linux 软件，或者直接通过 Linux 命令行使用 **NVIDIA Linux 驱动包** 将 JetPack OS 刷写到 reComputer J1010 上。对于 NVIDIA Jetson 的初学者，我们强烈推荐使用 NVIDIA SDK Manager。

- [选项 1 - 通过 NVIDIA SDK Manager 刷写 JetPack OS](#flashing-jetpack-os-via-nvidia-sdk-manager)
- [选项 2 - 通过命令行刷写 JetPack OS](#flashing-jetpack-os-via-command-line)

在开始之前，我们需要进行一些准备工作：

### 软件准备

- <a href="https://developer.nvidia.com/login" target="_blank"><span>NVIDIA 账户</span></a>
- 安装了 Ubuntu 18.04 或更高版本的 Linux 主机电脑

:::note
在本教程中，我们将使用基于 Ubuntu 18.04 LTS 的系统完成安装。
:::

### 硬件准备（强制恢复模式）

在进行安装步骤之前，我们需要确保 reComputer 处于强制恢复模式。

**步骤 1.** 在开始之前，您需要断开 reComputer 的电源。

**步骤 2.** 使用跳线帽连接 **FC REC** 引脚和 **GND** 引脚。

<table align="center">
  <tbody><tr>
      <th> </th>
      <th align="center">按钮引脚</th>
      <th align="center">描述</th>  
      <th align="center">按钮引脚</th>
      <th align="center">描述</th>
    </tr>
    <tr>
      <td rowSpan="{6}"><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/4_3.jpg" /></div></td>
      <td align="center">1</td>
      <td align="center">PWR BTN</td>
      <td align="center">7</td>
      <td align="center">AUTO ON</td>
    </tr>
    <tr>
      <td align="center">2</td>
      <td align="center">GND</td>
      <td align="center">8</td>
      <td align="center">DIS</td>
    </tr>
    <tr>
      <td align="center">3</td>
      <td align="center">FC REC</td>
      <td align="center">9</td>
      <td align="center">UART TXD</td>
    </tr>
    <tr>
      <td align="center">4</td>
      <td align="center">GND</td>
      <td align="center">10</td>
      <td align="center">UART RXD</td>
    </tr>
    <tr>
      <td align="center">5</td>
      <td align="center">SYS RET</td>
      <td align="center">11</td>
      <td align="center">LED +</td>
    </tr>
    <tr>
      <td align="center">6</td>
      <td align="center">GND</td>
      <td align="center">12</td>
      <td align="center">LED -</td>
    </tr>
  </tbody>
</table>

**步骤 3.** 使用 Type-C 数据线为 reComputer 供电（连接到 reComputer 左侧），并使用另一根数据线将其连接到 Linux 主机电脑（连接到 reComputer 右侧）。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ1010_J101_flash_Jetpack.png" /></div>

!!!注意
    在接线之前，请注意电源连接器和数据连接器，请勿将数据连接器直接连接到直流电源。

**步骤 4.** 在主机电脑的命令行窗口中，输入命令 `lsusb`。当返回的内容中包含 `ID 0955:7f21 NVidia Corp.` 时，表示 reComputer 已进入强制恢复模式，我们可以继续后续操作。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5.png" /></div>

## 通过 NVIDIA SDK Manager 刷写 JetPack OS

接下来，我们将通过 NVIDIA SDK Manager 安装系统的教程。NVIDIA SDK Manager 是一个集成工具，捆绑了开发者软件，并为 NVIDIA SDK 提供端到端的开发环境设置解决方案。因此，推荐初学者使用。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png" /></div>

### 步骤 1. 在 Linux 主机电脑上安装 NVIDIA SDK Manager

我们需要在 Linux 主机电脑上打开浏览器，并从 NVIDIA 官方网站<a href="https://developer.nvidia.com/nvidia-sdk-manager" target="_blank"><span>下载 NVIDIA SDK Manager</span></a>。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk.png" /></div>

### 步骤 2. 打开 NVIDIA SDK Manager 并登录

在 Linux 主机电脑屏幕上，右键单击鼠标并打开终端。然后输入以下命令启动 SDK Manager：

`sdkmanager`

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_system_installation1.png" /></div>

首次使用 NVIDIA SDK Manager 时，会弹出一个网页提示您使用之前注册的 NVIDIA 账户登录。

### 步骤 3. 选择目标设备

登录后，您将进入安装的第一步界面。由于我们已经连接了 reComputer J1010，会弹出一个窗口让您选择硬件设备。

reComputer J1010 配备了 **NVIDIA Jetson Nano 4GB 模块**，因此我们可以选择第一个选项。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/6.jpg" /></div>

在第一步界面中，您可以选择以下内容：

- 在产品类别面板中选择 **Jetson**。
- 在硬件配置面板中，我们建议 **不要选择主机机器**。如果选择此项，将需要更多时间为当前 Ubuntu 主机安装 NVIDIA 组件。如果需要，可以选择。
- 在目标操作系统面板中，我们可以选择不同的 **操作系统** 和 **JetPack 版本**。但请注意 JetPack 的版本，不同模块可能支持不同类型的 JetPack。这里推荐选择 "JetPack 4.6.1"。
- 在附加 SDK 中，由于 eMMC 的存储空间只有 16GB，如果在此安装 DeepStream，可能会导致内存不足。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png" /></div>

点击“Continue”继续下一步。

### 第4步. 检查所需的组件

在 **Details and License** 中，您可以展开主机组件和目标组件面板，以查看将安装在系统上的组件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8.png" /></div>

如果您只需要安装系统，可以取消勾选 SDK 组件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8_1.png" /></div>

!!!提示
    在选择安装哪些组件时，您可能需要注意使用的容量。内置的 eMMC 大小仅为 16GB，请根据实际需求合理分配和使用这部分空间。
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/9.png" /></div>
    经过实际测试，安装完整的 SDK 组件后，eMMC 空间仅剩约 500MB。
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/10_1.jpg" /></div>
    如果您想了解如何解决容量不足的问题，请参考 [故障排除](https://wiki.seeedstudio.com/reComputer_Jetson_Series_Initiation/#q1-the-remaining-space-in-the-emmc-in-the-received-recomputer-jetson-is-only-about-2gb-how-can-i-solve-the-problem-of-insufficient-space)。

如果您希望 SDK Manager 将所有文件下载到默认路径以外的位置，请转到屏幕底部的 Download & Install Options，然后选择您希望使用的路径。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/11.png" /></div>

选择“Continue”继续下一步。

### 第5步. 安装系统

在安装开始之前，SDK Manager 会提示您输入 `sudo` 密码。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/12.png" /></div>

过一会儿，我们将被要求为 reComputer 设置新系统。由于我们手动强制进入恢复模式，此处选择 `Manual setup: set the target to Force Recovery Mode via manual operations`。同时，我们选择默认的 **Pre-Config**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/13.png" /></div>

之后，我们需要为 reComputer 的新 Jetson 系统输入名称和密码，这些是您自行设置的。

准备好后，点击 `Flash` 继续。

显示屏将显示软件下载和安装的进度。请耐心等待安装完成。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/14.png" /></div>

### （可选）第6步. 安装 SDK 组件

如果您在之前的 **第4步** 中勾选了组件的安装，则需要完成此步骤。

过一会儿，您将在 NVIDIA SDK Manager 中看到一个新窗口弹出，提示您需要通过 IP 地址连接到设备。这意味着系统已经安装完成，接下来的组件安装将继续进行。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png" /></div>

在这种情况下，我们可以 **拔掉跳线帽** 并重新启动 reComputer。然后需要通过 HDMI 将 reComputer 连接到显示器，输入您在 **第4步** 中设置的密码，并登录到主界面。

此时，您需要将 reComputer 连接到与 Linux 主机 PC 相同的局域网，并通过命令 `ifconfig` 确定 Jetson 的 **IP 地址**。

返回 Linux 主机 PC，输入刚刚获取的 IP 地址。NVIDIA SDK Manager 将尝试连接到 Jetson 设备，并继续完成下一步 SDK 组件的安装。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/16.png" /></div>

当您看到以下窗口出现时，安装已完成。您可以开始使用 Jetson，或者继续按照以下步骤完成新系统的一些基本配置。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17.png" /></div>

!!!注意
    在重新上电进入系统之前，请务必拔掉跳线帽并退出强制恢复模式。

## 通过命令行刷写 JetPack OS

得益于对 BSP（NVIDIA Linux 驱动包）的自由定制，对于熟悉 Linux 的用户来说，通过命令行刷写 JetPack OS 非常简单。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png" /></div>

### 第1步. 下载合适的 NVIDIA Linux 驱动包

在 **Linux 主机 PC** 上，我们需要打开浏览器并访问 <a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>。首先，我们需要检查 Jetson Linux 的版本是否支持我们的 reComputer Jetson 模块。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk1.png" /></div>

找到合适的版本后，点击进入下载页面。找到并点击 "L4T Driver Package (BSP)" 和 "Sample Root Filesystem" 下载驱动文件。文件名类似于 `Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2` 和 `Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk2.png" /></div>

例如，我们选择 NVIDIA L4T 32.7.1 版本，因为它包含在 JetPack4.6.1 中，并支持 Jetson Nano 模块。文件名如下：

- Tegra_Linux_Sample-Root-Filesystem_R32.7.2_aarch64.tbz2
- Jetson-210_Linux_R32.7.2_aarch64.tbz2

### 第 2 步：解压缩包文件并通过命令行组装 Rootfs

在 Linux 主机 PC 上，我们需要找到一个文件夹来存储之前下载的包文件。然后在该文件夹中打开命令行窗口（终端），并使用以下命令解压文件并组装 rootfs：

```sh
tar xf ${L4T_RELEASE_PACKAGE}
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
cd ..
sudo ./apply_binaries.sh
```

:::tip
`${}` 是您需要替换为文件名的地方。
:::

**以 NVIDIA L4T 32.7.1 为例**，下载的文件存储在 `/Desktop/L4T_Drivers` 中，因此在 `/Desktop/L4T_Drivers` 路径下打开命令行窗口（终端）并执行以下命令：

```sh
tar xf Jetson-210_Linux_R32.7.1_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

输出应如下所示：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/18.png" /></div>

### 第 3 步：将系统刷写到 reComputer

由于我们已经将 reComputer J1010 强制进入恢复模式，并且模块是 Jetson Nano。我们可以直接将系统刷写到 reComputer，执行以下命令：

```sh
sudo ./flash.sh jetson-nano-devkit-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

刷写 L4T 大约需要 10 分钟，如果主机计算机较慢可能需要更长时间。

此时，我们可以拔掉跳线帽，然后重新为 reComputer 上电以使用它。

## 使用 Seeed BSP 刷写 Jetpack OS
:::info

最近，NVIDIA 更新了 DRAM 模块，Seeed 目前发布了与此模块更新兼容的新固件。

如果在刷写官方 NVIDIA 镜像的过程中，由于 DP 信号导致系统冻结（表现为无法刷写并卡在 NVIDIA 界面），这表明您购买了更新的模块。在这种情况下，您需要刷写我们目前提供的工厂镜像。

当前工厂镜像与原始镜像的主要区别如下：
1. 修改了 DP 配置（防止某些模块因 DP 信号导致系统冻结）。
2. 默认将 SD 卡槽设置为可用状态，无需额外修改设备树以启用 SD 卡槽功能。
3. 镜像包含 Jetpack4.6.6。
4. 集成了最新的 PCN。

:::

### 第 1 步：下载适配的 NVIDIA Linux 驱动包

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>JetPack 版本</th>
      <th>下载链接</th>
      <th>SHA265</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>4.6.6</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EV7LGr3R0VRDsgfFibgOgfsBam44-zEqOrQJoUKpHXEmRw?e=gJEHhU" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td>138547DF526D19F737DEC27856C078217D15FE9160F2669DF57823916BAA260E</td>
    </tr>
  </tbody>
</table>
</div>

### 第 2 步：解压缩包文件并通过命令行组装 Rootfs

在 Linux 主机 PC 上，我们需要找到一个文件夹来存储之前下载的包文件。然后在该文件夹中打开命令行窗口（终端），并使用以下命令解压文件并组装 rootfs：

```sh
tar xpf  mfi_recomputer-nano-4g-4.6.6-32.7.6-2024-12-23.tbz2
cd mfi_jetson-nano-devkit-emmc
```

### 第 3 步：将系统刷写到 reComputer

由于我们已经将 reComputer J1010 强制进入恢复模式，并且模块是 Jetson Nano。我们可以直接将系统刷写到 reComputer，执行以下命令：

```bash
sudo ./nvmflash.sh --showlogs
```

## 故障排查

### 使用 NVIDIA SDK Manager 进行安装时的故障排查

安装错误可能由多种原因引起。以下是常见安装问题的检查清单，可能有助于您从损坏的安装中恢复。

1. 查看摘要表以确定哪个组件失败。

    a. 展开状态为“Error”的组。

    b. 找到失败的组件后，点击安装错误右侧的详情图标，跳转到终端选项卡以查看具体错误。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/31.png" /></div>

2. 如果错误与环境问题相关，例如损坏的 apt 仓库或缺少的前置条件，请尝试手动修复，然后点击“Retry Failed Items”按钮。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/32.png" /></div>

3. 还有两种方法可以重试安装：

    a. 在 **使用 SDK Manager 刷写到 eMMC -- 第 3 步** 中，使用“Repair/Uninstall”按钮进入“Manage NVIDIA SDKs”页面。如果需要，展开状态为“Broken”的 SDK，然后点击相关部分（主机或目标）的“Repair”。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/33.png" /></div>

4. 在 **使用 SDK Manager 刷写到 eMMC -- 第 3 步** 中，选择所需的 SDK 并重新运行安装。

5. 最后，尝试卸载并重新安装相关的 SDK。

### 使用命令行安装时的故障排查

命令行安装方法相对简单，但在使用强制恢复模式的场景中容易出错。

如果在 **使用命令行刷写到 eMMC -- 第 2 步** 中遇到如下错误，可能是您未成功将 Jetson-101 载板进入强制恢复模式。请特别注意，不要在 Jetson-101 载板通电的情况下进入强制恢复模式，因为这是无效的。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/34.jpg" /></div>

如果在 **使用命令行刷写到 eMMC -- 第 3 步** 中无法进入系统，并卡在启动显示命令行界面，可能是您未退出强制恢复模式。同样，在 Jetson-101 载板通电的情况下拔掉跳线帽以退出强制恢复模式也是无效的，这些操作都需要在断电状态下完成。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/35.jpg" /></div>

:::note
如果需要更多存储空间，我们可以使用 SD 卡扩展容量，或者将系统烧录到 SD 卡上。您可以参考我们推荐的解决方案 [在 SD 卡上烧录系统](https://wiki.seeedstudio.com/J1010_Boot_From_SD_Card/)
:::

## 资源
[reComputer J1010 数据手册](https://files.seeedstudio.com/wiki/reComputer/reComputer-J1010-datasheet.pdf)

[reComputer J101 载板原理图](https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer%20J101_V2.0_SCH_240822.pdf)

[reComputer J1010 3D 文件](https://files.seeedstudio.com/products/NVIDIA-Jetson/J1010-Jetson-Nano.stp)

[Seeed Jetson 系列产品目录](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)

[Seeed Studio 边缘 AI 成功案例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)

[Seeed Jetson 系列比较](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)

[Seeed Jetson 设备一览](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>