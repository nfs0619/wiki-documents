---
description: 在 reTerminal DM 上运行 Azure IoT Edge Runtime
title: 在 reTerminal DM 上运行 Azure IoT Edge Runtime
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal-DM_Azure_IoT
last_update:
  date: 05/15/2025
  author: Takashi
---

# 在运行 Debian 11 (ARM32v7) 的 reTerminal DM 设备上运行 Azure IoT Edge Runtime

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><iframe width={270} height={358} frameBorder={0} src="https://devicecatalog.azure.com/embed/c40637ad-a9bf-494e-8975-f4d37e43cf6f" title="reTerminal DM - Azure Certified Device" /></div>


## 简介

reTerminal DM 是一个集成了面板电脑、HMI、PLC、IIoT 网关的多合一设备，基于 Raspberry Pi CM4，配备 10.1'' IP65 前面板和丰富的工业接口，原生集成 Node-RED 并支持基于 Raspberry Pi 的软件生态系统。

本文档描述了如何将运行 Debian 11 (ARM32v7) 的 reTerminal DM 设备与预安装的 Azure IoT Edge Runtime 和设备管理连接起来。此多步骤过程包括：

- 配置 Azure IoT Hub
- 注册您的 IoT 设备
- 构建和部署客户端组件以测试设备管理功能

## 第一步：准备工作

在开始之前，您需要准备以下项目：

1. [创建一个 Azure 账户](https://azure.microsoft.com/en-us/free/)
2. [登录 Azure 门户](https://portal.azure.com/#home)
3. [设置您的 IoT Hub](https://github.com/Azure/azure-iot-device-ecosystem/blob/master/setup_iothub.md)
4. [添加 Edge 设备](https://docs.microsoft.com/en-us/azure/iot-edge/quickstart-linux)
5. [添加 Edge 模块](https://docs.microsoft.com/en-us/azure/iot-edge/quickstart-linux?view=iotedge-2018-06#deploy-a-module)

## 第二步：准备您的设备

1. 打开设备电源。将 12~24V 电源连接到 2 针电源端子块连接器。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Azure-IoT/reTerminal-DM-Azure-IoT-EDGE.png" style={{width:300, height:'auto'}}/></div>

2. 检查操作系统版本、位数和架构。

```
$ lsb_release -irc
Distributor ID: Raspbian
Release: 11
Codename: bullseye
$ getconf LONG_BIT
32
$ uname -m
armv7l
```

:::tip
如果您的操作系统版本低于 Debian 11 (Bullseye) 或 LOG_BIT 为 64，请安装最新的 Raspberry Pi OS 32 位版本。请参考 [闪存 Raspbian OS 的步骤](https://wiki.seeedstudio.com/reterminal-dm-flash-OS/#steps-for-flashing-raspbian-os)。
:::

:::tip
如果 uname -m 显示为 aarch64，您的操作系统正在运行 64 位内核。请切换到 32 位内核。参考 [32 位操作系统驱动](https://wiki.seeedstudio.com/reterminal-dm-flash-OS/#32-bit-os-driver)。
:::

## 第三步：在设备上手动测试 Azure IoT Edge

### 3.1 启用 Edge Runtime

1. [注册您的设备](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#register-your-device)

2. [查看已注册设备并检索配置信息](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#view-registered-devices-and-retrieve-provisioning-information)

3. [安装 IoT Edge](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#install-iot-edge)

```
$ curl https://packages.microsoft.com/config/debian/11/packages-microsoft-
prod.deb > ./packages-microsoft-prod.deb
$ sudo apt install ./packages-microsoft-prod.deb
$ rm ./packages-microsoft-prod.deb
```

4. [安装容器引擎](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#install-a-container-engine)

```
$ sudo apt-get update
$ sudo apt-get install moby-engine
$ sudo vi /etc/docker/daemon.json
$ sudo systemctl restart docker
```

将默认日志驱动设置为本地日志驱动，如下示例所示。

```cpp
"log-driver": "local"
```

5. [安装 IoT Edge Runtime](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#install-the-iot-edge-runtime)

```
$ sudo apt-get update
$ sudo apt-get install aziot-edge defender-iot-micro-agent-edge
```

6. [为设备配置云身份](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#provision-the-device-with-its-cloud-identity)

```
$ sudo iotedge config mp --connection-string 'PRIMARY_CONNECTION_STRING'
$ sudo iotedge config apply
```

### 3.2 检查 iotedge 守护进程

在 IoT Edge 设备上打开命令提示符，确认 Azure IoT Edge 守护进程处于运行状态。

```
sudo iotedge system status
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Azure-IoT/reTerminal-DM-Azure-IoT-EDGE2.png" style={{width:900, height:'auto'}}/></div>

在 IoT Edge 设备上打开命令提示符，确认从云端部署的模块正在设备上运行。

```
$ sudo iotedge list
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Azure-IoT/reTerminal-DM-Azure-IoT-EDGE3.png" style={{width:900, height:'auto'}}/></div>

在 Azure 的设备详情页面上，您应该看到运行时模块 - edgeAgent、edgeHub 和 SimulatedTemperatureSensor 模块处于运行状态。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Azure-IoT/reTerminal-DM-Azure-IoT-EDGE4.png" style={{width:900, height:'auto'}}/></div>

## 其他链接

- [什么是 Azure IoT Edge](https://learn.microsoft.com/en-us/azure/iot-edge/about-iot-edge)
- [Azure IoT Edge 支持的平台](https://docs.microsoft.com/en-us/azure/iot-edge/support)
- [开发您自己的 IoT Edge 模块](https://docs.microsoft.com/en-us/azure/iot-edge/module-development)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时能够获得流畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>