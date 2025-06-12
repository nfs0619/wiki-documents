---
description: 介绍如何安装和配置 ESP-Matter 环境。
title: 使用 XIAO ESP32 系列进行 Matter 开发
keywords:
- ESP-IDF
- matter
- XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao_esp32_matter_env
last_update:
  date: 05/15/2025
  author: Citric
---

# 使用 XIAO ESP32 系列进行 Matter 开发

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

:::tip
本文是 Seeed Studio XIAO ESP32 开发 Matter 系列的第三篇教程。如果您尚未阅读前面的教程，我们建议您先阅读它们，以确保您的设备已按要求配置。

- **[使用 Espressif ESP-IDF 在 XIAO 上开发](https://wiki.seeedstudio.com/xiao_idf)**
- **[快速入门：使用 XIAO ESP32 系列进行 Matter 开发](https://wiki.seeedstudio.com/getting_started_with_matter)**
:::

在物联网 (IoT) 领域快速发展的背景下，一种新的协议正在改变智能家居设备之间的通信和交互方式。这就是 Matter，一个旨在弥合各种智能家居生态系统之间差距的统一协议，为全球用户创造无缝的互操作体验。

那么，Matter 究竟是什么？为什么它在 IoT 社区中引起了如此大的关注？Matter 是一个开源的标准化协议，能够让来自不同制造商的智能家居设备轻松协作。它通过提供一种通用语言和框架，简化了 IoT 设备的开发和部署。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/Matter-stack.png" style={{width:700, height:'auto'}}/></div>

- 智能家居设备的通信协议。
- 1.0 版本于 2022 年 10 月 4 日发布，此前曾两次推迟。
- 标准化的命令集，使得不同制造商的设备可以互相通信。
- 基于 IP 网络运行，使用 Thread、Wi-Fi 或以太网。
- 采用安全设计和零信任原则。
- 本地运行——通常通过 Matter 集线器连接到云端。
- 与 Zigbee、Z-Wave 和 433MHz 等其他智能家居标准共存。
- 电池寿命和范围取决于无线网络技术。
- 由 Matter 集线器协调。

Matter 的价值主张非常明确：它为更连接、更用户友好和更安全的智能家居体验提供了一条途径。通过采用 Matter，设备制造商可以确保其产品与多种智能家居平台和助手（如 Amazon Alexa、Google Home 和 Apple HomeKit）兼容。这种互操作性不仅惠及消费者，还为 IoT 领域的开发者和企业创造了新的机会。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/Matter-network.jpg" style={{width:800, height:'auto'}}/></div>

作为开发者，拥抱 Matter 意味着可以接触到一个庞大的设备和服务生态系统，让您能够创建能够无缝集成到现有智能家居设置中的创新解决方案。通过利用 Matter 的强大功能，您可以专注于构建引人注目的用户体验和功能，而无需担心设备通信和兼容性的复杂性。

要开始您的 Matter 开发之旅，您需要合适的工具和环境。在本教程中，我们将指导您如何使用 Seeed Studio XIAO ESP32C6 设置 Matter 开发环境。XIAO ESP32C6 是一款专为 IoT 应用设计的紧凑而强大的开发板，配备了 ESP32-C6 微控制器和丰富的外设接口，是开发 Matter 兼容设备的理想选择。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/Thread-matter-smart-homes.png" style={{width:800, height:'auto'}}/></div>

在接下来的部分中，我们将逐步讲解如何配置您的 Matter 开发环境，包括安装必要的软件、设置 Seeed Studio XIAO ESP32C6 开发板，以及运行您的第一个 Matter 示例程序。通过本教程的学习，您将掌握构建自己的 Matter 设备的基础知识，并为互操作智能家居解决方案的不断增长的生态系统做出贡献。

那么，让我们开始探索如何使用 Seeed Studio XIAO ESP32C6 解锁 Matter 开发的潜力吧！

## 准备软件

以下是本文中使用的系统版本、ESP-IDF 版本和 ESP-Matter 版本，仅供参考。这些版本已测试并能正常工作。

- **主机**：[Ubuntu 22.04 LTS (Jammy Jellyfish)](https://releases.ubuntu.com/jammy/)。
- **ESP-IDF**：标签 [v5.2.1](https://github.com/espressif/esp-idf/tree/v5.2.1)。
- **ESP-Matter**：主分支，截至 2024 年 5 月 10 日，提交 [bf56832](https://github.com/espressif/esp-matter/commit/bf568327d41ca29167fcf2743ace1941432e4aa5)。
- **connectedhomeip**：目前支持提交 [13ab158f10](https://github.com/project-chip/connectedhomeip/tree/13ab158f10)，截至 2024 年 5 月 10 日。
- **[Git](https://git-scm.com/)**
- **[Visual Studio Code](https://code.visualstudio.com/)**

## 准备硬件

在本节中，我们将详细说明如何在 Ubuntu 环境中配置 ESP-IDF 的使用，并执行 ESP-IDF 提供的 lighting 示例。因此，本文只需要准备以下任意一款 XIAO ESP32 系列开发板。

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

除了使用 XIAO，我们还需要 WS281x 型号的灯条或灯珠。目前 Espressif 提供的灯光示例仅支持单个灯珠，因此无论您使用灯条还是灯珠，它都只能点亮一个灯。我们也建议您购买 Grove Base for XIAO 以便于接线。

<div class="table-center">
	<table align="center">
		<tr>
			<th>Grove Base for XIAO</th>
			<th>Grove - RGB LED Ring (20 - WS2813 Mini)</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-20-WS2813-Mini.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a></div></td>
		</tr>
	</table>
</div>

为了统一接口，在本案例中我们将使用 **D9** 引脚作为示例，请将您的 LED 灯条或灯珠连接到 XIAO 的 **D9** 引脚。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/17.png" style={{width:400, height:'auto'}}/></div>

## 视频教程

<div class="table-center">
<iframe width="800" height="400" src="https://www.youtube.com/embed/g9hBp84xs1E?si=fzE--HA7v8H8R090?si=iH-oouOl_ItkG7vF?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## ESP-Matter 安装步骤

:::tip
在开始安装 Matter 环境之前，请确保您已经[安装并访问了 ESP-IDF 编程环境](https://wiki.seeedstudio.com/xiao_idf/#step-5-set-up-environment-variables)。
:::

### 第一步：安装依赖项

首先，您需要使用 `apt-get` 安装所需的软件包。打开终端并执行以下命令：

```bash
sudo apt-get install git gcc g++ pkg-config libssl-dev libdbus-1-dev \
     libglib2.0-dev libavahi-client-dev ninja-build python3-venv python3-dev \
     python3-pip unzip libgirepository1.0-dev libcairo2-dev libreadline-dev
```

此命令将安装构建和运行 Matter SDK 所需的各种软件包，如 `git`、编译器（`gcc`、`g++`）和相关库。

### 第二步：克隆 ESP-Matter 仓库

使用 `git clone` 命令从 GitHub 克隆 `esp-matter` 仓库，并使用深度为 1 的选项以仅获取最新快照：

```bash
cd ~/esp
git clone --depth 1 https://github.com/espressif/esp-matter.git
```

进入 `esp-matter` 目录并初始化所需的 Git 子模块：

```bash
cd esp-matter
git submodule update --init --depth 1
```

导航到 `connectedhomeip` 目录并运行 Python 脚本以管理特定平台的子模块：

```bash
cd ./connectedhomeip/connectedhomeip
./scripts/checkout_submodules.py --platform esp32 linux --shallow
```

此脚本以浅层方式（仅最新提交）更新 ESP32 和 Linux 平台的子模块。

### 第三步：安装 ESP-Matter

返回到 `esp-matter` 根目录，然后运行安装脚本：

```bash
cd ../..
./install.sh
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/1.png" style={{width:1000, height:'auto'}}/></div>

此脚本将安装 ESP-Matter SDK 特定的其他依赖项。

### 第四步：设置环境变量

运行 `export.sh` 脚本以设置开发所需的环境变量：

```bash
source ./export.sh
```

此命令将配置您的 shell 环境路径和变量。

### 第五步（可选）：快速访问 ESP-Matter 开发环境

为了将提供的别名和环境变量设置添加到您的 `.bashrc` 文件，请按照以下步骤操作。这将配置您的 shell 环境，以便轻松在 IDF 和 Matter 开发设置之间切换，并启用 ccache 加速构建。

打开终端并使用文本编辑器打开位于主目录中的 `.bashrc` 文件。您可以使用 `nano` 或任何您喜欢的编辑器。例如：

```bash
nano ~/.bashrc
```

滚动到 `.bashrc` 文件的底部并添加以下内容：

```bash
# 设置 ESP-Matter 环境的别名
alias get_matter='. ~/esp/esp-matter/export.sh'

# 启用 ccache 加速编译
alias set_cache='export IDF_CCACHE_ENABLE=1'
```

添加完成后，保存文件并退出编辑器。如果您使用的是 `nano`，可以通过按 `Ctrl+O` 保存，按 `Enter` 确认，然后按 `Ctrl+X` 退出。

为了使更改生效，您需要重新加载 `.bashrc` 文件。您可以通过运行以下命令来重新加载 `.bashrc` 文件，或者关闭并重新打开终端：

```bash
source ~/.bashrc
```

现在，您可以运行 `get_matter` 和 `set_cache` 来设置或刷新 esp-matter 环境。

```bash
get_matter
set_cache
```

## 运行灯光示例

一旦 Matter 环境配置完成，我们可以编译并上传示例应用程序 `light` 来进行测试。

### 第一步：配置项目参数

导航到 `examples/light` 目录。

```bash
cd examples/light                # 进入灯光示例目录
```

执行清理操作以删除之前的构建文件。

```bash
rm -rf build/                     # 清理之前的构建文件
```

将目标设置为 ESP32-C6。

```bash
idf.py set-target esp32c6        # 将构建目标设置为 ESP32-C6
```

进入配置菜单并进行必要的配置。

```bash
idf.py menuconfig                # 进入配置菜单
```

在 `menuconfig` 中，需要找到并启用 `Channel for console output` 选项。通常，该选项位于 **Component config** -> **ESP System Settings** 下。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/7.png" style={{width:1000, height:'auto'}}/></div>

1. 使用方向键导航到该选项。
2. 按空格键或回车键选择该选项：`USB Serial/JTAG Controller`。

对于不同的 XIAO，我们还需要更新其 GPIO 引脚编号。该选项位于 **Component config -> Board Support Package (generic) -> LEDs** 下。

- 对于 XIAO ESP32C3，D9 的 GPIO 是 9。
- 对于 XIAO ESP32S3，D9 的 GPIO 是 8。
- 对于 XIAO ESP32C6，D9 的 GPIO 是 20。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/33.png" style={{width:1000, height:'auto'}}/></div>

1. 使用方向键导航到该选项。
2. 按空格键或回车键输入 GPIO 编号。
3. 启用必要选项后，按 `q` 退出 `menuconfig`，然后按 `y` 保存退出。

### 第 2 步：编译并上传示例应用程序

继续进行构建和烧录过程：

```bash
idf.py build                      # 构建项目
```

如果编译成功，您将看到以下结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/2.png" style={{width:1000, height:'auto'}}/></div>

然后可以上传程序。

```bash
idf.py -p /dev/ttyACM0 flash monitor  # 烧录固件并监视输出
```

请将 `/dev/ttyACM0` 替换为对应于您的 XIAO ESP32 的实际 USB 设备文件（如果不同）。

请务必仔细遵循所有说明，并确保每一步成功完成后再继续。如果遇到任何错误，需要在继续之前解决。

:::tip
在烧录 Matter 固件的过程中，您可能会遇到没有权限的情况，此时可以使用以下命令为设备端口授予权限，并重新上传程序。设备插入或重启时，可能需要重新授予权限。

```
sudo chmod 666 /dev/ttyACM0       # 为 USB 设备文件授予权限
```

请将 `/dev/ttyACM0` 替换为对应于您的 XIAO ESP32 的实际 USB 设备文件（如果不同）。
:::

恭喜您，如果成功烧录固件，那么在监视器中，您将在终端中看到调试日志输出。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/3.png" style={{width:1000, height:'auto'}}/></div>

接下来，我们将学习如何使用 Matter 命令和 chip-tool 配置 Matter 设备，以完成对 Matter 设备的调试和检查。

## 主机控制和设备调试

我们在 `menuconfig` 中将 `console output` 设置为 `USB Serial`，目的是通过 USB 接口控制 XIAO，配置其加入网络或进行其他调试。这一步非常关键，决定了我们是否可以使用串口工具向设备发送命令。

以下是一些通过连接线直接控制设备的命令，通常以 `matter` 开头。

### 常用命令

- BLE 命令：启动和停止 BLE 广播：

	```
	matter ble [start|stop|state]
	```

- Wi-Fi 命令：设置和获取 Wi-Fi 模式：

	```
	matter wifi mode [disable|ap|sta]
	```

- 设备配置：导出设备静态配置：
	```
	matter config
	```

- 恢复出厂设置：

	```
	matter device factoryreset
	```

- 配对码：导出配对码信息：

	```
	matter onboardingcodes
	```

- 获取属性：（ID 为十六进制格式）：

	```
	matter esp attribute get <endpoint_id> <cluster_id> <attribute_id>
	```

	- 示例：on_off::on_off：

		```
		matter esp attribute get 0x1 0x6 0x0
		```

- 设置属性：（ID 为十六进制格式）：

	```
	matter esp attribute set <endpoint_id> <cluster_id> <attribute_id> <attribute value>
	```

	- 示例：on_off::on_off：

		```
		matter esp attribute set 0x1 0x6 0x0 1
		```

- 诊断：

	```
	matter esp diagnostics mem-dump
	```

- Wi-Fi 连接：

	```
	matter esp wifi connect <ssid> <password>
	```

### 使用方法

#### 第 1 步：安装 Minicom

Minicom 是一个基于文本的调制解调器控制和终端仿真程序，适用于类 Unix 操作系统。通过安装 Minicom，我们可以轻松向 XIAO 发送 Matter 控制命令。在 Ubuntu 上安装 Minicom，请打开终端并输入以下命令：

```bash
sudo apt update
sudo apt install minicom
```

此命令将更新您的软件包列表并安装 Minicom。

#### 第 2 步：配置用户权限

为了允许非 root 用户访问串口（如 `ttyACM0`），需要将您的用户添加到 `dialout` 组。可以使用以下命令完成此操作：

```bash
sudo usermod -a -G dialout $USER
```
将 `$USER` 替换为您的用户名，或者省略以应用于当前登录用户。运行此命令后，您**必须注销并重新登录**，以使组更改生效。

#### 第 3 步：设置 Minicom

现在需要配置 Minicom 使用 `ttyACM0` 端口。通过以下命令以设置模式运行 Minicom：

```bash
sudo minicom -s
```

在设置菜单中，按照以下步骤操作：

1. 选择 **Serial port setup**。
2. 按 'A' 更改串行设备为 `/dev/ttyACM0`。
3. 根据需要调整其他设置。默认设置通常是 9600 8N1（9600 波特率，无校验位，8 数据位，1 停止位）。我们只需将波特率更改为 **115200**。
4. 按 'Enter' 退出此屏幕。

#### 第 4 步：保存配置

设置串口后：

1. 选择 **Save setup as dfl** 将此设置保存为默认配置。
2. 在 Minicom 设置中选择 **Exit from Minicom** 退出。

#### 第 5 步：运行 Minicom

要使用默认设置启动 Minicom，只需输入：

```bash
minicom
```

如果您需要以 sudo 权限运行（例如遇到权限问题），可以使用以下命令：

```bash
sudo minicom
```

退出 Minicom 时，按 `Ctrl-A`，然后按 `Z` 调出帮助菜单，再按 `X` 退出程序。

#### 第六步：设置 XIAO 的分布式网络

使用以下命令将 XIAO 连接到您的网络。在选择网络时，请注意 XIAO 仅支持 2.4G 网络，不支持 5G 网络。

```
matter esp wifi connect <ssid> <password>
```

配对成功后，您可以使用以下命令查询 Matter 设备的重要信息：**VendorID**、**ProductId**、**Discriminator** 和 **PinCode**。这些信息在使用 Chip-tool 工具进行调试时有助于设备配对。

```
matter config
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/8.png" style={{width:1000, height:'auto'}}/></div>

最后，使用以下命令导出设备的配对码信息。

```
matter onboardingcodes onnetwork
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/9.png" style={{width:1000, height:'auto'}}/></div>

最后显示的是设备配对二维码的链接。通过二维码，您可以使用手机扫描代码绑定 Matter 设备，就像 [入门指南](https://wiki.seeedstudio.com/getting_started_with_matter/#step-2-add-a-device-by-scanning-the-code-using-the-iphone-home-app) 中的步骤一样。

## 使用 Chip-tool 远程调试 Matter 设备

Matter 设备是智能家居的重要组成部分，始终使用数据线进行调试和设置是不现实的。在 Matter 调试工具中，最常用的是 Chip-tool，它可以帮助我们在设备连接后进行远程调试。

Chip-tool 命令通常需要一个 Chip-tool 脚本，因此它们通常以 `chip-tool` 开头。

### 通过 IP 配对设备

以下命令将发现设备并尝试使用提供的设置代码与第一个发现的设备配对：

```
chip-tool pairing onnetwork ${NODE_ID_TO_ASSIGN} 20202021
```

以下命令将发现带有长识别码 3840 的设备，并尝试使用提供的设置代码与第一个发现的设备配对：

```
chip-tool pairing onnetwork-long ${NODE_ID_TO_ASSIGN} 20202021 3840
```

以下命令将根据给定的二维码（设备启动时会记录二维码）发现设备，并尝试与第一个发现的设备配对：

```
chip-tool pairing code ${NODE_ID_TO_ASSIGN} MT:#######
```

在所有这些情况下，设备将被分配节点 ID `${NODE_ID_TO_ASSIGN}`（必须是十进制数字或以 0x 为前缀的十六进制数字）。

### 忘记当前已配对的设备

```
chip-tool pairing unpair
```

### 使用客户端发送 Matter 命令

要使用客户端发送 Matter 命令，请运行已构建的可执行文件，并传递目标集群名称、目标命令名称以及端点 ID。

端点 ID 必须在 1 到 240 之间。

```
chip-tool onoff on 1
```

客户端将发送一个命令包，然后退出。

### 使用方法

当您准备好使用 Chip-tool 进行调试时，可以将 XIAO 从计算机断开连接，并连接到电源。

第一步，我们需要配对设备，可以使用 [通过 IP 配对设备](#pair-a-device-over-ip) 部分中的任意方法完成。

例如，我使用以下命令：

```
chip-tool pairing onnetwork-long 0x12 20202021 3840
```

在这种情况下，设备将被分配节点 ID `0x12`（必须是十进制数字或以 0x 为前缀的十六进制数字）。20202021 是 PinCode，3840 是 Discriminator。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/5.png" style={{width:1000, height:'auto'}}/></div>

最后，使用以下命令验证您是否可以控制灯的开关。

打开灯：

```
chip-tool onoff on 0x12 0x1
```

关闭灯：

```
chip-tool onoff off 0x12 0x1
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/6.png" style={{width:1000, height:'auto'}}/></div>

0x12 是我们配对时分配给设备的节点 ID。

恭喜大家，通过这里的教程步骤，相信您已经对 ESP-Matter 的开发框架和调试工具的使用有了初步的了解。如果还有不明白或不熟悉的地方，我们将在后续教程中继续使用和指导，敬请期待！

## 疑难解答

### 问题 1：为什么在安装环境时会遇到各种错误？

ESP-Matter 的环境要求较高，如果您使用的是经常用于开发的 Ubuntu 主机，很可能由于某些 Python 依赖项的版本不同而导致错误。由于 Matter 框架不是由 Seeed 开发的，因此我们可能无法解决这部分问题。如果您在安装过程中遇到问题，建议您向官方 **[ESP-Matter 仓库](https://github.com/espressif/esp-matter)** 提交 issue 寻求帮助。

### 问题 2：如何卸载 Matter 的环境？

如果您运行 `./install.sh` 脚本并卡在配置 Python 环境的步骤，则可能需要检查您的 Matter [版本](#prepare-the-software) 是否与 connectedhomeip 的版本匹配。

重置环境的简单方法是执行以下命令：

```
rm -r connectedhomeip/connectedhomeip/.environment
```

然后重新拉取适当版本的 connectedhomeip 分支。

```
git submodule update --init --depth 1
```

如果仍然无法解决问题，请删除整个 esp-matter 文件夹，并按照 Wiki 的内容重新运行。

## 资源

- **[ESPRESSIF Matter - 使用 SDK 进行开发](https://docs.espressif.com/projects/esp-matter/en/latest/esp32/developing.html#)**

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>