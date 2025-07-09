---
description: 介绍如何安装和配置 IDF 环境。
title: 使用 Espressif ESP-IDF 开发 XIAO
keywords:
- ESP-IDF
- XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao_idf
last_update:
  date: 05/15/2025
  author: Citric
---

# 使用 Espressif ESP-IDF 开发 XIAO

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

:::tip
本文是 Seeed Studio XIAO ESP32 开发 Matter 系列的第一篇教程。如果您希望使用 XIAO ESP32 系列开始您的 Matter 设备开发之旅，请从这里开始。

本教程适用于 XIAO ESP32C3、XIAO ESP32S3 和 XIAO ESP32C6。
:::

在物联网开发领域，ESP-IDF（Espressif 物联网开发框架）因其强大的功能和对 ESP32 系列微控制器的广泛支持而备受欢迎。随着 Matter 协议的出现，该协议旨在为智能家居设备提供统一的标准，开发者们渴望探索这一新领域。然而，目前 Matter 开发尚不支持 Arduino 框架，因此 ESP-IDF 成为开发的主要选择。在本教程中，我们将引导您在 Ubuntu 系统上安装 ESP-IDF，从而开启您在 XIAO ESP32 系列上的 Matter 开发之旅。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/matter-sdk.png" style={{width:800, height:'auto'}}/></div>

## 基于 Ubuntu 22.04

在进行 Matter 开发时，操作系统的选择是一个重要的考虑因素。虽然 Windows 不提供对 Matter 开发的原生支持，但开发者仍然可以使用 Windows Subsystem for Linux (WSL) 来**[创建兼容环境](https://docs.espressif.com/projects/esp-matter/en/latest/esp32/developing.html#windows-10)**。**[WSL](https://learn.microsoft.com/en-us/windows/wsl/install)** 允许直接在 Windows 上运行 Linux 发行版（如 Ubuntu），从而提供 Matter 开发所需的工具和库。

另一方面，macOS 因其基于 Unix 的基础和全面的开发工具而受到开发者的欢迎。

最终，操作系统的选择取决于您的个人偏好和 Matter 项目的具体需求。作为 Linux 发行版的 Ubuntu，为 Matter 开发提供了原生且简化的体验。然而，如果您更熟悉 Windows 或 macOS，仍然可以使用 WSL（在 Windows 上）或 macOS 内置终端来设置合适的开发环境。

:::caution
我们不建议在 Windows 上开发 ESP-Matter，即使使用 WSL。Windows 不支持将 COM 端口暴露给 WSL 发行版。您可能需要频繁切换终端，或者安装 [usbipd-win](https://github.com/dorssel/usbipd-win) 来解决端口问题，包括使用 [chip-tool 也是一个难点](https://github.com/espressif/esp-matter/blob/main/docs/en/using_chip_tool.rst)。
:::

**总之，我们将在接下来的开发步骤中使用 Ubuntu，并使用目前 Matter 支持的最新版本 Ubuntu 22.04**。如果您希望使用本文以外的操作系统进行 Matter 开发，可以参考乐鑫的官方文档。本文将不再赘述。

- **[ESPRESSIF IDF - 入门](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html)**

## 准备软件

以下是本文中使用的系统版本和 ESP-IDF 版本的列表，供参考。这是一个经过测试能够正常工作的稳定版本。

- **主机**：[Ubuntu 22.04 LTS (Jammy Jellyfish)](https://releases.ubuntu.com/jammy/)。
- **ESP-IDF**：标签 [v5.2.1](https://github.com/espressif/esp-idf/tree/v5.2.1)。
- **[Git](https://git-scm.com/)**
- **[Visual Studio Code](https://code.visualstudio.com/)**

## 准备硬件

在本节中，我们将详细说明如何在 Ubuntu 环境中配置 ESP-IDF 的使用，并执行 ESP-IDF 提供的 lighting 示例。因此，本文中您只需准备以下任意一种 XIAO ESP32 系列设备。

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO ESP32C3</th>
			<th>XIAO ESP32S3</th>
            <th>XIAO ESP32C6</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:110, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

:::caution
XIAO ESP32C3 没有板载 LED，因此如果您使用的是 XIAO ESP32C3，可能需要额外准备一个 LED。
:::

## 视频教程

由于 ESP-IDF 开发框架针对的是更专业的软件开发者，其使用门槛比 Arduino 更高，相关文档和资料也比 Arduino 少。为了让 XIAO 用户尽快上手使用 ESP-IDF，并减少在配置开发环境时遇到问题的可能性，我们将以视频和图文的形式展示环境的配置。本节为视频部分，如果您希望跟随视频操作，可以参考此视频安装和配置 ESP-IDF 环境，并最终点亮 XIAO ESP32C6 的板载 LED。

<div class="table-center">
<iframe width="900" height="450" src="https://www.youtube.com/embed/QdPmsGDd7zs?si=5r_OO2EwZMX8D_HM?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## 安装 ESP-IDF 的分步教程

本节是 ESP-IDF 环境配置的图形化教程部分。

### 第 1 步：安装必要的依赖

首先更新并升级您的 Ubuntu 系统，以确保您拥有最新的软件包和依赖项。打开终端并运行以下命令：

```
sudo apt update
sudo apt upgrade
```

通过运行以下命令安装 ESP-IDF 所需的依赖项。如果您确定以下软件包已经安装，可以跳过此步骤，但我们仍然建议您运行此命令以再次检查。

```
sudo apt-get install git wget flex bison gperf python3 python3-pip python3-venv cmake ninja-build ccache libffi-dev libssl-dev dfu-util libusb-1.0-0
```

:::note
ESP-IDF 需要 CMake 版本 3.16 或更高版本。如果您的操作系统没有合适的版本，请运行 "[tools/idf_tools.py](https://github.com/espressif/esp-idf/blob/v5.2.1/tools/idf_tools.py) install cmake" 来安装合适的版本。
:::

### 第 2 步：安装 Python3

通常，完整版本的 Ubuntu 22.04 LTS 默认安装 Python 3.12。如果您不确定，可以按以下步骤检查。如果未安装或曾经卸载过，也可以按照以下步骤重新安装。如果您确定已经安装了 Python 3，可以跳过此步骤。

检查当前安装的 Python 版本：

```
python --version
```

如果输出类似于 `Python 2.7.17`，说明默认解释器是 `Python 2.7`。如果是这样，还需要检查是否已经安装了 Python 3：

```
python3 --version
```

如果上述命令返回错误，说明未安装 Python 3。

以下是安装 Python 3 的步骤概述：

- 使用 HomeBrew 安装可以按如下操作：
    ```
    brew install python3
    ```

- 如果您使用 MacPorts，可以运行：
    ```
    sudo port install python38
    ```

### 第 3 步：获取 ESP-IDF

要获取 ESP-IDF，请导航到您的安装目录并使用 `git clone` 克隆存储库，按照以下针对您的操作系统的说明操作。打开终端并运行以下命令：

```
mkdir -p ~/esp
cd ~/esp
git clone -b v5.2.1 --recursive https://github.com/espressif/esp-idf.git
```

通过执行上述命令，ESP-IDF 将下载到 `~/esp/esp-idf`。

### 第 4 步：设置工具

除了 ESP-IDF，您还需要安装 ESP-IDF 使用的工具，例如编译器、调试器、Python 包等，用于支持 ESP32 的项目。

```
cd esp-idf/
./install.sh
```

### 第 5 步：设置环境变量

安装的工具尚未添加到 PATH 环境变量中。为了使这些工具可以从命令行使用，需要设置一些环境变量。ESP-IDF 提供了一个脚本来完成此操作。

在您将要使用 ESP-IDF 的终端中运行：

```
source ./export.sh
cd ..
```

此时，整个 ESP-IDF 环境实际上已经配置完成。要验证 ESP-IDF 是否正确安装，运行以下命令：

```
idf.py --version
```

如果安装成功，您应该会看到 ESP-IDF 的版本信息。

### 第 6 步（可选）：快速访问 ESP-IDF 开发环境

如上所述，每次启动终端或重启计算机时，我们都需要在新终端中导入 ESP-IDF 的环境变量，这给我们带来了很大的不便，特别是如果我们需要频繁开发 ESP32。我们可以通过以下步骤修改 Shell 的配置文件，以便通过 `get_idf` 命令启动 ESP-IDF 环境。

通过在终端中输入以下命令打开 `.bashrc` 文件。

```
nano ~/.bashrc
```

在 `.bashrc` 文件末尾添加以下内容：

```
alias get_idf='. ~/esp/esp-idf/export.sh'
```

通过重新启动终端会话或运行 `source [配置文件路径]`（例如 `source ~/.bashrc`）刷新配置。

现在，您可以在任何终端会话中运行 `get_idf` 来设置或刷新 esp-idf 环境。

:::caution
从技术上讲，您可以直接将 `export.sh` 添加到 Shell 的配置文件中；但不推荐这样做。这样会在每个终端会话中（包括那些不需要使用 IDF 的会话）激活 IDF 虚拟环境，这违背了虚拟环境的初衷，并可能影响其他软件。
:::

## 运行 LED 示例程序

为了确保您的 ESP-IDF 环境已正确设置，让我们运行一个简单的 LED 示例程序。

### 第 1 步：连接 XIAO ESP32C6 到 PC

现在将您的 XIAO ESP32 系列开发板连接到计算机，并检查开发板在哪个串口下可见。我们将以 XIAO ESP32C6 为例。

串口的命名模式如下：`/dev/tty`。通常，您的计算机可能有许多以 `tty` 开头的端口。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/11.png" style={{width:800, height:'auto'}}/></div>

确定端口也很简单，您可以使用查询命令查看在未连接 XIAO 时默认存在的端口。

```
ls /dev/tty*
```

然后，在将 XIAO 连接到计算机后再次查询，新增的串口名称就是 XIAO 的端口号。

请记住端口名称，因为接下来的步骤需要用到它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/12.png" style={{width:800, height:'auto'}}/></div>

如上图所示，我的计算机上 XIAO 的端口号应该是 **ttyACM0**。

### 第 2 步：启动一个项目

导航到示例目录：

```
cd ~/esp/esp-idf/examples/get-started/blink
```

设置目标设备：

```
idf.py set-target esp32c6
```

:::tip
- 如果您使用的是 **XIAO ESP32C3**，则需要使用命令 `idf.py set-target esp32c3`。
- 如果您使用的是 **XIAO ESP32S3**，则需要使用命令 `idf.py set-target esp32s3`。
:::

由于此示例项目的主要效果是让板载 LED 闪烁，我们需要配置 LED 所在的 GPIO 以及闪烁时间和其他参数。ESP-IDF 提供了 `menuconfig` 命令来设置项目的一些可调参数。

```
idf.py menuconfig
```

此命令将打开一个配置菜单，您可以在其中修改各种设置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/14.png" style={{width:800, height:'auto'}}/></div>

以 blink 项目为例，有三个参数可以调整：

1. **Blink LED type**：设置使用的 LED 类型，在本例中我们将其设置为 **GPIO**。

2. **Blink GPIO number**：设置 LED 所在的 GPIO 引脚编号，这里设置为 **15**。XIAO ESP32C6 的 LED 连接到 GPIO15。

3. **Blink period in ms**：灯光闪烁的时间间隔。默认值为 **1000** 毫秒，即 1 秒。

设置完成后，按 **q** 退出设置菜单，然后按 **y** 确认更改。

### 第三步：构建并烧录示例

通过运行以下命令构建项目：

```
idf.py build
```

此命令会编译应用程序和所有 ESP-IDF 组件，然后生成引导程序、分区表和应用程序二进制文件。如果没有错误，构建过程将完成并生成固件二进制 `.bin` 文件。

要将您在上一步中为 ESP32 构建的二进制文件烧录到设备上，需要运行以下命令：

```
idf.py -p PORT flash
```

将 `PORT` 替换为您的 XIAO ESP32 板的 USB 端口名称。如果未定义 **PORT**，`idf.py` 将尝试使用可用的 USB 端口自动连接。根据我们在第一步中查询的设备端口号，对于我来说，我应该输入以下命令来烧录程序：

```
idf.py -p /dev/ttyACM0 flash
```

如果烧录过程结束时没有问题，XIAO 将重新启动并启动 "blink" 应用程序。

要查看 LED 示例程序的输出，请运行以下命令：

```
idf.py monitor
```

您应该看到 XIAO 上的 LED 闪烁，这表明示例程序运行成功。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/13.png" style={{width:800, height:'auto'}}/></div>

如果您希望退出串口监视器，可以使用快捷键 `Ctrl+]`。

:::tip
以下是 ESP-IDF 环境中一些常用命令：

- `idf.py menuconfig`：打开项目配置菜单。
- `idf.py build`：构建项目。
- `idf.py flash`：将构建的固件烧录到连接的设备。
- `idf.py monitor`：启动串口监视器以查看设备输出。
- `idf.py clean`：清理构建目录。
- `idf.py fullclean`：执行完全清理，包括下载的依赖项。
- `idf.py set-target`：设置项目的目标芯片。
- `idf.py size`：显示构建的固件的大小信息。
- `idf.py app`：管理项目中的应用程序。
- `idf.py component`：管理项目中的组件。
:::

恭喜您！您已成功在 Ubuntu 系统上安装 ESP-IDF，为您的 Matter 开发旅程奠定了基础。Seeed Studio 将继续增强和扩展 XIAO ESP32 系列在 Matter 上的开发文档。随着 ESP-IDF 设置和配置的完成，您现在可以开始 Matter 开发旅程的下一部分。

Seeed Studio 致力于提供全面的资源和支持，以促进您的 Matter 开发体验。请关注即将发布的专为 XIAO ESP32 系列量身定制的 Matter 文档和教程。这些资源将指导您利用 ESP-IDF 框架构建符合 Matter 协议的尖端智能家居设备。

在深入进行 Matter 开发时，请务必参考官方 ESP-IDF 文档，以获取有关框架功能和最佳实践的深入信息。与充满活力的开发者和爱好者社区互动，交流知识、寻求指导并合作开展创新项目。

借助 ESP-IDF 的强大功能以及 Seeed Studio 即将推出的 Matter 开发资源，您将能够创造出突破互操作性和用户体验边界的卓越智能家居解决方案。拥抱未来的无限可能，信心满满地开启您的 Matter 开发旅程。祝您编码愉快！

## 故障排除

### 为什么在安装环境时会出现各种错误？

ESP-IDF 的环境要求较高，如果您使用的是经常用于开发的 Ubuntu 主机，可能会由于某些 Python 依赖项的版本不同而导致错误。由于 Matter 框架并非由 Seeed 开发，因此这部分问题可能无法解决，因此如果您在安装过程中遇到问题，我们建议您向官方 **[ESP-IDF 仓库](https://github.com/espressif/esp-idf)** 提交 issue 以寻求帮助。

## 资源

- **[ESPRESSIF IDF - 入门指南](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html)**

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您在使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>