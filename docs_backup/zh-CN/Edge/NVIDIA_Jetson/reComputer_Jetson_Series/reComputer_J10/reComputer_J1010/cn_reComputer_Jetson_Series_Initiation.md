---
description: reComputer for Jetson 入门指南
title: reComputer for Jetson 入门指南
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_Jetson_Series_Initiation
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # for Disqus

---

# reComputer for Jetson 入门指南

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

所有 reComputer for Jetson 都配备了 16 GB eMMC，其中已预装 `ubuntu 18.04 LTS` 和 `NVIDIA JetPack 4.6`。按照以下说明，连接外设后，您可以在几秒钟内启动并直接使用。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaijiss.png" alt="pir" width="auto" height="auto" /></p>

## 1. 连接外设

将 reComputer 主机连接到 USB 键盘、鼠标，并通过 HDMI 接口或 DP 接口（仅限 A206 载板）连接到显示屏。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji1.jpg" alt="pir" width={600} height="auto" /></p>

:::note
对于同时具有 HDMI 和 DP 接口的 reComputer 主机，尽管它有两个显示输出端口，但不支持双显示输出，这意味着同一时间只能使用一个显示输出接口。
:::

## 2. 接通电源

连接外设后，为 reComputer 主机接通电源。

- [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html) 的电源通过 Type-C 接口供电，电源接口位于靠近 HDMI 接口的位置，如下图所示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/dc1.png" alt="pir" width={600} height="auto" /></p>

:::note
[reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html) 在两侧均有 Type-C 接口，其中靠近 LAN 接口的右侧接口为数据传输接口。严禁将 Type-C 电源插入右侧的数据传输接口，否则可能会损坏组件。
:::

- [reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html)、[reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html) 和 [reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html) 的电源通过靠近 HDMI 接口的 DC 接口供电。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/dc2.png" alt="pir" width={600} height="auto" /></p>

接通电源后，reComputer 主机将自动启动。

## 3. 初始设置

新的 reComputer 已经预装了系统。但在使用之前，仍需进行一些必要的初始设置。

### 步骤 1：等待启动

接通电源后，您首先会看到屏幕中央显示的巨大 NVIDIA 图标。在进入配置页面之前，您可能会发现 reComputer 自动重启两次，此过程大约需要一分钟。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji5.jpg" alt="pir" width={600} height="auto" /></p>

### 步骤 2：查看并接受许可协议

在配置页面，首先会要求您查看许可协议，并选择 "**I accept the terms of these licenses**"（我接受这些许可条款）以同意协议，然后进入下一步。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji6.jpg" alt="pir" width={600} height="auto" /></p>

### 步骤 3：选择系统语言和键盘布局

点击 "Continue" 按钮后，下一页面将要求您选择系统语言和键盘布局。您可以根据实际需求进行选择。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji7.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji8.jpg" alt="pir" width={600} height="auto" /></p>

### 步骤 4：连接网络

有两种方式将 reComputer 连接到互联网。一种是直接通过网线连接，另一种是通过 Wi-Fi（需要无线模块）连接。如果您不需要通过互联网进行软件更新，可以选择不连接网络，直接进入下一步。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji9.jpg" alt="pir" width={600} height="auto" /></p>

### 步骤 5：配置用户信息和密码

在下一页面，您需要输入用户名和密码。请记住您的启动密码，因为稍后启动 reComputer 时需要用到。

如果您觉得每次启动 reComputer 都输入密码很麻烦，并且确保没有其他人可以使用它，您可以选择下方的 "Require my password to log in"（需要我的密码登录）选项，但我们并不推荐这样做。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji10.jpg" alt="pir" width={600} height="auto" /></p>

### 步骤 6：选择供电模式

最后，您需要选择 reComputer 的运行供电模式。

- [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html) 和 [reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html) 均配备 Jetson Nano 模块。我们强烈推荐选择 **MAXN** 模式，以确保您的 reComputer 正常运行。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji11.jpg" alt="pir" width={600} height="auto" /></p>

- [reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html) 和 [reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html) 均配备 Jetson Xavier NX 模块，提供多种供电输出功率选项。默认模式为 10 W，即 `MODE_10W_DESKTOP - (Default)`，如下所示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji12.jpg" alt="pir" width={600} height="auto" /></p>

:::note
以下表格显示了 NVIDIA 预定义的电源模式及其相关模块资源使用限制。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/21.jpg" /></div>
:::

完成上述指令后，我们需要等待 1~2 分钟，让 reComputer 进行最终配置。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/46.jpg" /></div>

## 4. 开始使用

当 reComputer 完成初始设置后，它将自动重启。之后，它会进入系统桌面，如下图所示。这表明系统已就绪，可以使用。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji4.jpg" alt="pir" width={800} height="auto" /></p>

由于产品内置了 16 GB 的 eMMC，其中已安装了 `ubuntu 18.04 LTS` 和 `NVIDIA JetPack 4.6`，用户剩余的可用空间约为 2GB。以下图片显示了在终端中使用磁盘空间命令后的结果：

```shell
seeed@seeed-desktop:~$ df -hl
Filesystem      Size  Used Avail Use% Mounted on
/dev/mmcblk0p1   14G   12G  2.0G  86% /
none            3.5G     0  3.5G   0% /dev
tmpfs           3.8G   75M  3.8G   2% /dev/shm
tmpfs           3.8G   22M  3.8G   1% /run
tmpfs           5.0M  4.0K  5.0M   1% /run/lock
tmpfs           3.8G     0  3.8G   0% /sys/fs/cgroup
tmpfs           777M  128K  777M   1% /run/user/1000
seeed@seeed-desktop:~$
```

## 在 reComputer 上安装 NVIDIA 系统

如果您的 reComputer 设备崩溃，并且您想重新安装 NVIDIA 系统，我们在此提供了关于如何在 reComputer 上安装 NVIDIA 系统的 Wiki。提供的 Wiki 包括 A20X 承载板和 reComputer J1010 承载板：

- [基于 A20X 承载板安装 NVIDIA 系统](https://wiki.seeedstudio.com/reComputer_J2021_J202_Flash_Jetpack/)
- [基于 reComputer J1010 承载板安装 NVIDIA 系统](https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack/)

## 故障排除

### Q1: 收到的 reComputer 中 eMMC 的剩余空间只有约 2GB，如何解决空间不足的问题？

我们目前提供了三种方法来应对此特定情况，您可以根据实际情况选择适合您的解决方案。

**选项 1.** 将系统重新部署到外部存储设备

如果您尚未在 reComputer 上启动项目，您可以考虑使用此选项，将新系统重新部署到具有足够容量的存储设备上。

- 通常有两种方法为 reComputer 安装系统，第一种是使用 **NVIDIA SDK Manager**。

如果您使用的是 **reComputer J2011** 或 **reComputer J2012**，在 [使用 SDK Manager 刷写到 eMMC](reComputer_J2021_J202_Flash_Jetpack#flashing-to-emmc-with-command-line) 的 **步骤 12** 中，您可以通过更改系统烧录位置来扩展容量。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/52.png" /></div>

:::tip
此方法不适用于 Jetson Nano 模块。
:::

- 通常有两种方法为 reComputer 安装系统，第二种是使用 **命令行**。

- 如果您使用的是 **A20X 承载板**，使用命令行安装系统的方法在 [使用命令行刷写到 eMMC](/reComputer_J2021_J202_Flash_Jetpack#flashing-to-emmc-with-command-line)。

- 如果您使用的是 **reComputer J1010 承载板**，则使用命令行安装系统的方法在 [使用命令行刷写到 eMMC](/reComputer_J1010_J101_Flash_Jetpack#flashing-jetpack-os-via-command-line)。

它们本质上通过以下命令完成系统的安装：

```sh
sudo ./flash.sh [options] <board> <rootdev>
```

其中：

1. `[options]` 是一个或多个命令行选项。所有选项都是可选的。有关选项的信息，请参阅 [Flashing Script Usage](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/SD/FlashingSupport.html#flashing-script-usage)。

2. `<board>` 指定要应用于待刷写设备的配置。值列在 [Jetson 模块和配置](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/IN/QuickStart.html#in-quickstart-jetsonmodulesandconfigurations-configurations) 的表格中，主题为 [快速开始](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/IN/QuickStart.html#in-quickstart)。`flash.sh` 从名为 `<board>.conf` 的配置文件中获取配置。

3. `<rootdev>` 指定要刷写的设备类型。使用值 **mmcblk0p1** 刷写本地存储设备（eMMC 或 SD 卡，具体取决于平台），与 NFS 服务器等区分开。

从上述解释可以看出，如果我们想将系统安装到外部存储中，可以通过更改 `<rootdev>` 选项来实现。

对于连接到 reComputer 设备的 USB 存储设备上的分区，输入以下命令：

```sh
sudo ./flash.sh <board> sda<x>
```

对于连接到 reComputer 设备的 NVMe 存储设备上的分区，输入以下命令：

```sh
sudo ./flash.sh <board> nvme0n1p<x>
```

`<x>` 是一个数字，指定存储设备上 APP 分区的位置，例如 `sda1` 表示 USB 设备，或 `nvme0n1p1` 表示 NVMe 存储设备。

**选项 2.** 删除不需要的 JetPack 组件以增加 eMMC 空间

NVIDIA JetPack SDK 是构建端到端加速 AI 应用程序的最全面解决方案。所有 Jetson 模块和开发套件均由 JetPack SDK 支持。

JetPack SDK 包括 Jetson Linux 驱动程序包 (L4T)，其中包含 Linux 操作系统和 CUDA-X 加速库及 API，用于深度学习、计算机视觉、加速计算和多媒体。它还包括主机计算机和开发套件的示例、文档和开发工具，并支持更高级别的 SDK，例如用于流视频分析的 DeepStream 和用于机器人技术的 Isaac。

[此表格](https://docs.nvidia.com/jetson/jetpack/install-jetpack/index.html#jetpack-ota-packages)列出了 JetPack 4.6 中包含的所有组件。

<table align="center">
  <tbody><tr>
      <th align="center">组件组</th>
      <th colSpan={2} align="center" valign="middle">软件包</th>
    </tr>
    <tr>
      <th align="center" valign="middle">适用于 L4T 的 CUDA 工具包</th>
      <td align="center">cuda <br /> cuda-11-4 <br /> cuda-cccl-11-4 <br /> cuda-command-line-tools-11-4 <br /> cuda-compiler-11-4 <br /> cuda-cudart-11-4 <br /> cuda-cudart-dev-11-4 <br /> cuda-cuobjdump-11-4 <br /> cuda-cupti-11-4 <br /> cuda-cupti-dev-11-4 <br /> cuda-cuxxfilt-11-4 <br /> cuda-documentation-11-4 <br /> cuda-driver-dev-11-4 <br /> cuda-gdb-11-4 <br /> cuda-gdb-src-11-4 <br /> cuda-libraries-11-4 <br /> cuda-libraries-dev-11-4 <br /> cuda-minimal-build-11-4 <br /> cuda-nvcc-11-4 <br /> cuda-nvdisasm-11-4 <br /> cuda-nvml-dev-11-4 <br /> cuda-nvprof-11-4 <br /> cuda-nvprune-11-4 <br /> cuda-nvrtc-11-4 <br /> cuda-nvrtc-dev-11-4 <br /> cuda-nvtx-11-4</td>
      <td align="center">cuda-runtime-11-4 <br /> cuda-samples-11-4 <br /> cuda-sanitizer-11-4 <br /> cuda-toolkit-11-4 <br /> cuda-toolkit-11-4-config-common <br /> cuda-toolkit-11-config-common <br /> cuda-toolkit-config-common <br /> cuda-tools-11-4 <br /> cuda-visual-tools-11-4 <br /> libcublas-11-4 <br /> libcublas-dev-11-4 <br /> libcudla-11-4 <br /> libcudla-dev-11-4 <br /> libcufft-11-4 <br /> libcufft-dev-11-4 <br /> libcurand-11-4 <br /> libcurand-dev-11-4 <br /> libcusolver-11-4 <br /> libcusolver-dev-11-4 <br /> libcusparse-11-4 <br /> libcusparse-dev-11-4 <br /> libnpp-11-4 <br /> libnpp-dev-11-4</td>
    </tr>
    <tr>
      <th align="center">cuDNN</th>
      <td align="center">libcudnn8 <br /> libcudnn8-dev</td>
      <td align="center">libcudnn8-samples</td>
    </tr>
    <tr>
      <th align="center">TensorRT</th>
      <td align="center">graphsurgeon-tf <br /> libnvinfer-bin <br /> libnvinfer-dev <br /> libnvinfer-doc <br /> libnvinfer-plugin-dev <br /> libnvinfer-plugin8 <br /> libnvinfer-samples <br /> libnvinfer8</td>
      <td align="center">libnvonnxparsers-dev <br /> libnvonnxparsers8 <br /> libnvparsers-dev <br /> libnvparsers8 <br /> python3-libnvinfer <br /> python3-libnvinfer-dev <br /> tensorrt <br /> uff-converter-tf</td>
    </tr>
    <tr>
      <th align="center">OpenCV</th>
      <td align="center">libopencv <br /> libopencv-dev <br /> opencv-licenses</td>
      <td align="center">libopencv-python <br /> libopencv-samples</td>
    </tr>
    <tr>
      <th align="center">VPI</th>
      <td align="center">libnvvpi2 <br /> vpi2-dev <br /> python-vpi2</td>
      <td align="center">python3.9-vpi2 <br /> vpi2-samples <br /> vpi2-demos</td>
    </tr>
    <tr>
      <th align="center">NVIDIA 容器运行时与 Docker 集成</th>
      <td align="center">libnvidia-container0 <br /> libnvidia-container1 <br /> libnvidia-container-tools</td>
      <td align="center">nvidia-container-toolkit <br /> nvidia-container-runtime <br /> nvidia-docker2</td>
    </tr>
    <tr>
      <th align="center">多媒体 API</th>
      <td colSpan={2} align="center">nvidia-l4t-jetson-multimedia-api</td>
    </tr>
  </tbody></table>

JetPack SDK 包含了很多内容，但并不是所有开发者都需要使用这些内容。因此，选择性地移除它们以释放更多存储空间是一个不错的选择。

我们可以通过以下命令查看安装在 reComputer Jetson 上的 JetPack 信息。

```sh
sudo apt-cache show nvidia-jetpack
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/50.png" /></div>

通过此命令，您可以快速了解 JetPack 中已安装组件的内容，例如 CUDA、OpenCV 等。

要获取更详细的信息，可以使用以下命令查看 reComputer 当前安装的所有软件及其描述信息。

```sh
dpkg-query -l
```

然后，您可以根据实际需求和组件的描述信息选择性地移除不需要的内容。删除命令如下：

```sh
sudo apt autoremove ${packagesname}
```

环境变量 `${packagesname}` 表示您想要移除的组件包名称。如果您想移除某个前缀的所有软件包，可以在该前缀后添加 `*` 来表示。

例如，如果我们想移除所有与 **CUDA** 相关的组件，可以使用以下命令：

```sh
sudo apt autoremove cuda*
```

移除 CUDA 组件内容后，您可以看到 eMMC 的剩余容量也会变得更大。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/51.png" /></div>

其他 JetPack 组件也可以采用相同的方法。

**选项 3.** 通过外部存储设备扩展容量。

如果您已经正常使用 reComputer 一段时间，并且不希望破坏现有系统环境来完成扩展解决方案，可以选择此选项。

我们已经有一个完善的扩展 Wiki [reComputer 系列的内存扩展](https://wiki.seeedstudio.com/reComputer_Jetson_Memory_Expansion/)。

需要注意的是，任何扩展操作都存在风险，我们建议您在开始之前主动对系统进行 **备份**。

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您在使用产品时获得顺畅的体验。我们提供了多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
