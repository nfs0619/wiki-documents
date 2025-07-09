---
description: 在 reComputer 上使用英飞凌 Wi-Fi 模块
title: 在 reComputer 上使用英飞凌 Wi-Fi 模块
keywords:
- reComputer
- Wifi
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Use_Infineon_Wifi_Module_on_reComputer
last_update:
  date: 05/15/2025
  author: Youjiang
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 简介

在本文档中，您将学习如何在 reComputer J4012 上使用英飞凌的 Wi-Fi 6/6E 模块。

## reComputer

reComputer J4012 配备了 Jetson Orin NX 16GB，是一个强大且紧凑的智能边缘设备，可为边缘提供高达 100 TOPS 的现代 AI 性能。它的性能是 Jetson Xavier NX 的 5 倍，是 Jetson AGX Xavier 的 3 倍。结合 NVIDIA Ampere™ GPU 架构和 64 位操作能力，Orin NX 集成了先进的多功能视频和图像处理功能，以及 NVIDIA 深度学习加速器。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/5.png"/></div>

## 英飞凌 Wi-Fi 模块

英飞凌的 Wi-Fi 解决方案支持 Wi-Fi 6/6E 功能，支持三频段（2.4G、5G、6G）。其功能改善了范围、功耗效率、网络鲁棒性和安全性，同时降低了总物料成本和板空间。该解决方案在拥挤的网络环境中提供了卓越的高质量视频/音频流体验和无缝连接，并通过在 6G 频谱中运行显著减少了延迟。

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/wifi_module.png"/></div>

<div align="center">(图片来源于 Embedded Artists：2EA M.2 模块由 Embedded Artists 和 Murata 联合开发，旨在评估、集成和易用性。)</div>

## 硬件连接

**步骤 1.** 准备所有将使用的材料。
- 配备 Jetpack 5.1.2 的 reComputer J4012
- 英飞凌 Wi-Fi 模块
- 2 个 IPEX 转 SMA 母头外部天线适配器和 SMA 公头天线用于 Wi-Fi 模块
- 十字螺丝刀和螺丝

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/hardware.jpg"/></div>

**步骤 2.** 将无线模块插入 M.2 Key E 接口，并将 2 个 IPEX 插头插入无线模块的对应插座。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/hardware_connection.jpg"/></div>

## 安装软件驱动

**步骤 1.** 下载并上传英飞凌 [WiFi 驱动](https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EQzCwQWQOwhNhhW-VHhKqogBYhan7liy9UY44QE4vhq95A?e=qq0ANC) 到 reComputer。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/download_package.png"/></div>

**步骤 2.** 运行以下命令以安装英飞凌 WiFi 驱动。

对于 Jetpack 5.1.x：

```sh
sudo dpkg -i cyw55573-nvidia-jetson-v5.15.58-backports-2.0-1-arm64.deb
```

对于 Jetpack 6：

```sh
sudo rm /lib/modules/5.15.136-tegra/build

sudo ln -s /usr/src/linux-headers-5.15.136-tegra-ubuntu22.04_aarch64/3rdparty/canonical/linux-jammy/kernel-source/ /lib/modules/5.15.136-tegra/build

sudo dpkg -i cyw55573-nvidia-jetson-v5.15.58-backports-2.0-1-arm64.deb
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/install_driver.png"/></div>

驱动编译需要一些时间。

然后，您需要重启 reComputer：

```sh
sudo reboot
```

**步骤 3.** 使用以下命令检查 wlan0 接口是否可用：

```sh
ifconfig
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/ifconfig.png"/></div>

:::caution
如果您之前通过 `sudo apt-get install iwlwifi-modules -y` 安装了 Intel 无线驱动程序，则需要在继续之前卸载该软件包。由于存在已知的回溯兼容性问题。

Intel 和英飞凌的无线驱动程序都使用了回溯兼容模块，您不能同时安装它们，否则内核会出现 `compat: exports duplicate symbol backport dependency symbol (owned by iwlwifi compat)` 错误。

通过卸载 Intel 的无线驱动程序，您可以使用英飞凌的无线驱动程序：

```sh
sudo apt-get remove backport-iwlwifi-dkms
```

通过卸载英飞凌的无线驱动程序，您可以使用 Intel 的无线驱动程序：

```sh
sudo dpkg -r cyw55573-nvidia-jetson-v5.15.58-backports
```

:::

**步骤 4.** 连接到 Wi-Fi 网络

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/connect_to_wifi.png"/></div>

## 可行性测试

使用浏览器打开网页以测试网络是否正常工作。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/test.png"/></div>

## 技术支持

如果您有任何问题，请随时在我们的 [论坛](https://forum.seeedstudio.com/) 中提交问题。

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>