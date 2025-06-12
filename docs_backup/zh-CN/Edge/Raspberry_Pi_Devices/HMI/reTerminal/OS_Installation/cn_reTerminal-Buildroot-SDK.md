---
description: 为 reTerminal 构建 Buildroot
title: 为 reTerminal 构建 Buildroot
keywords:
  - Edge
  - reTerminal OS_安装
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal-Buildroot-SDK
last_update:
  date: 05/15/2025
  author: jianjing Huang
---

# 为 reTerminal 构建 Buildroot

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/thumb.jpg" alt="pir" width="500" height="auto"/></p>

## 简介

[Buildroot](https://buildroot.org) 是一个易于使用的工具，它通过交叉编译简化并自动化了为嵌入式系统构建完整 Linux 系统的过程。

为了实现这一点，Buildroot 能够为目标设备生成交叉编译工具链、根文件系统、Linux 内核镜像和引导加载程序。Buildroot 可以独立用于这些选项的任意组合（例如，您可以使用现有的交叉编译工具链，仅使用 Buildroot 构建根文件系统）。

它具有简单的结构，易于理解和扩展。它仅依赖于众所周知的 Makefile 语言。Buildroot 是一个开源项目，许多开发者每天都在为其贡献代码。

通过以下指南，您将能够使用 Buildroot 构建您自己的 [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) 系统镜像。那么让我们开始吧！

## 编译 Buildroot 源代码

### 在本地机器上手动编译

现在我们将继续使用 Buildroot 手动为 reTerminal 编译系统镜像。

**注意：** 本指南是在安装了 Ubuntu 20.04 的主机 PC 上测试后编写的。然而，它也适用于其他 Linux 系统。

- **步骤 1.** 在主机 PC 上准备开发环境，安装以下软件包（git、gcc 和 make）

```sh
sudo apt update
sudo apt install git
sudo apt install build-essential
```

**注意：** 如果您已经安装了上述软件包，可以跳过此步骤。

- **步骤 2.** 克隆以下 GitHub 仓库

```sh
git clone --depth=1 https://github.com/Seeed-Studio/seeed-linux-buildroot.git -b master
```

- **步骤 3.** 进入 **seeed-linux-buildroot** 目录

```sh
cd seeed-linux-buildroot
```

#### 使用 reTerminal 的默认配置进行编译

输入以下命令以使用 reTerminal 的默认配置开始编译

```sh
make reTerminal_64_defconfig
make
```

#### 使用您自己的配置为 reTerminal 编译

输入以下命令以安装必要的软件包，用于使用您自己的配置进行编译

```sh
sudo apt install libncurses-dev
```

- **步骤 5.** 输入以下命令以打开 Buildroot 配置窗口

```sh
make menuconfig
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/menuconfig.png" alt="pir" width="1000" height="auto"/></p>

您可以使用此配置窗口浏览可用选项，并根据您的需求**自定义镜像**。此外，如果您在此窗口中点击 **Save** 并 **Exit** 而不进行任何更改，将加载 reTerminal 的默认配置。

#### 查找已编译的镜像

编译成功后，进入 `seeed-linux-buildroot/output/images`，您将找到已编译的镜像文件 **sdcard.img**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/image-location-1.png" alt="pir" width="1000" height="auto"/></p>

### 下载已编译的镜像

如果您想下载已经使用 Buildroot 编译好的 reTerminal 系统镜像，可以按照以下步骤操作。

- **步骤 1.** 打开 [此链接](https://github.com/Seeed-Studio/seeed-linux-buildroot/actions) 进入 **seeed-linux-buildroot** GitHub 仓库的 **Actions** 页面

- **步骤 2.** 点击最新的 **Seeed reTerminal buildroot** 工作流

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/workflow.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 3.** 在 **Artifacts** 下，点击 **buildroot deploy** 开始下载镜像

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/download.jpg" alt="pir" width="1000" height="auto"/></p>

**注意：** 下载镜像后，解压镜像以获取 **sdcard.img** 文件

## 将镜像刷写到 reTerminal

现在我们将继续将镜像刷写到 reTerminal 的 CM4 的 eMMC 上。

请按照 [此维基](https://wiki.seeedstudio.com/reTerminal/#getting-started-with-reterminal-extended) 中的步骤操作，并注意以下步骤：

**注意：** 当您打开 **Raspberry Pi Imager** 时，点击 **CHOOSE OS**，选择 **Use custom** 并选择下载的 **sdcard.img** 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/RPi-imager-1.png" alt="pir" width="600" height="auto"/></p>

## reTerminal 的首次启动

在我们将系统镜像刷写到 reTerminal 后，打开 reTerminal 的电源。此时您会看到内核日志在 reTerminal 的 LCD 上弹出，最后会打开一个使用 Qt 制作的演示应用程序。

默认系统镜像的启动时间大约为 30 秒。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/bootup.gif" alt="pir" width="1000" height="auto"/></p>

## 分析 Buildroot 镜像

如前所述，Buildroot 是一个非常强大的工具，它可以依赖第三方库和工具，快速构建我们需要的内容。如果您想了解 Buildroot 的编译时间、依赖关系、编译所消耗的资源大小等，通过代码检查会非常不方便。然而，Buildroot 提供了可视化分析工具来分析上述内容，我们只需要几个简单的命令即可使用它们。

首先安装以下软件包：

```sh
sudo apt install python3-matplotlib python3-numpy
```

### 生成依赖关系图

Buildroot 的一个任务是理解包之间的依赖关系，并确保它们以正确的顺序构建。这些依赖关系有时可能很复杂，对于一个给定的系统，通常不容易理解为什么某个包被 Buildroot 引入并成功构建。为了帮助理解依赖关系以及更好地理解嵌入式 Linux 系统中不同组件的作用，Buildroot 能够生成依赖关系图（PDF 格式）。

- **步骤 1.** 安装以下软件包：

```sh
sudo apt install graphviz
```

- **步骤 2.** 生成依赖关系图：

```sh
make graph-depends
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/depends-command.png" alt="pir" width="1000" height="auto"/></p>

执行上述命令后，依赖关系图将生成在 `seeed-linux-buildroot > output > graphs` 文件夹中，文件包括：

- graph-depends.pdf
- graph-depends.dot

[![](https://files.seeedstudio.com/wiki/ReTerminal/buildroot/graph-depends-img.png)](https://files.seeedstudio.com/wiki/ReTerminal/buildroot/graph-depends-img.png)

**注意：** 点击上方图片查看放大版本。

### 生成编译所消耗资源大小的分析

Buildroot 可以生成编译所消耗资源大小的分析。

输入以下命令：

```sh
make graph-size
```

执行上述命令后，可视化分析文件将生成在 `seeed-linux-buildroot > output > graphs` 文件夹中，文件包括：

- graph-size.pdf
- file-size-stats.csv
- package-size-stats.csv

[![](https://files.seeedstudio.com/wiki/ReTerminal/buildroot/graph-size-img.png)](https://files.seeedstudio.com/wiki/ReTerminal/buildroot/graph-size-img.png)

**注意：** 点击上方图片查看放大版本。

## 测试 Buildroot 镜像

要在 reTerminal 上测试上述 Buildroot 镜像，您可以访问 [reTerminal 硬件和接口使用 Wiki](https://wiki.seeedstudio.com/reTerminal-hardware-interfaces-usage) 并参考其中提到的步骤。

## 资源

- **[网页]** [Buildroot 文档](https://buildroot.org/docs.html)
- **[GitHub]** [seeed-linux-buildroot](https://github.com/Seeed-Studio/seeed-linux-buildroot)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时拥有顺畅的体验。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>