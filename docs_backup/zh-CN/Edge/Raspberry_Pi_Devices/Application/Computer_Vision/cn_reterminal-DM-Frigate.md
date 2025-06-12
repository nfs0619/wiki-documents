---
description: Frigate 集成 reTerminal DM
title: Frigate 集成 reTerminal DM
keywords:
  - reTerminal DM
  - 入门指南
  - Frigate
  - Home Assistant
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reterminal-DM-Frigate
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---

# 技术支持

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 简介

在当前智能技术无缝融入我们日常生活的时代，对智能且安全的家庭自动化的需求比以往任何时候都更强烈。想象一个场景：您的家不仅满足您的需求，还能及时检测并提醒您后院的可疑活动。这就是先进硬件与开源软件结合的魅力所在。在本文中，我们将探讨 Seeed Studio reTerminalDM、Home Assistant OS 和 Frigate 插件与 Coral AI USB TPU 的协同作用。这三者的结合提供了一个独特的机会，打造一个集中化、注重隐私且由 AI 驱动的家庭自动化设置，既提升您的生活品质，又确保安全性。加入我们，一起深入了解这种现代智能生活前沿融合的优势和无限潜力。

### Frigate

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate2.png" alt="pir" width="200" height="auto"/></p>

Frigate 是一个出色的开源网络视频记录器 (NVR)，专为实时 AI 驱动的对象检测而设计。Frigate 的独特之处在于其本地化处理，确保所有计算都在您的个人硬件上完成。这种方法保证了最高的隐私性，因为您的摄像头视频流不会离开您的家庭网络。通过 Frigate，您可以利用先进的对象识别技术增强安全性和监控，同时完全掌控您的数据。

### Home Assistant

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/HA.png" alt="pir" width="200" height="auto"/></p>

Home Assistant OS 是专为运行 Home Assistant 而设计的操作系统，Home Assistant 是一个开源的家庭自动化平台。Home Assistant 允许您控制和自动化家中的各种智能设备和服务。
Home Assistant OS 提供了一个简化且优化的环境，用于运行 Home Assistant。它预装了设置和管理智能家居设备所需的组件，支持与不同协议和平台的集成，并创建自动化流程。

## 入门指南

在开始这个项目之前，您需要提前准备好硬件和软件，如下所述。此外，您还需要支持该项目的 IP 摄像头。您可以在 Frigate [官方网站](https://docs.frigate.video/frigate/hardware) 查看支持的摄像头。

### 硬件准备

<div class="table-center">
  <table align="center">
    <tr>
        <th>reTerminal DM</th>
        <th>Coral USB 加速器</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/HA/reterminal-dm.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/coral.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html?queryID=26220f25bcce77bc420c9c03059787c0&objectID=4904&indexName=bazaar_retailer_products">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Coral-USB-Accelerator-p-2899.html?queryID=852f9c8543fee2db0ee8b47f6d5dbda2&objectID=2899&indexName=bazaar_retailer_products">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

:::note

考虑到 USB Coral 加速器的功耗需求，我们强烈建议投资一个高质量的 USB 供电集线器。该集线器将提供足够的电力以满足 Coral 加速器的需求，确保稳定和最佳性能。

:::

### 软件准备

我们建议从 Raspberry Pi 官方网站安装最新版本的 64 位操作系统。如果您希望安装新的 Raspbian OS，请按照此 [指南](https://wiki.seeedstudio.com/reterminal-dm-flash-OS/) 中的步骤操作。

## 安装 Home Assistant Supervised OS 到 Raspberry Pi

在基于 Raspberry Pi CM4 的 reTerminal DM 上安装 Home Assistant Supervised 是一个综合性的过程，包含多个关键步骤以确保成功设置。

:::note
在某些步骤中，如果您通过 Wi-Fi 连接，可能会失去连接。建议使用 LAN 连接。

:::

### 第一步：增强您的系统

- **首先通过以下命令执行系统更新日志：**

```sh
sudo apt update
```

- **接下来，安装以下依赖项：**

```sh
sudo apt-get install \
apparmor \
jq \
wget \
curl \
udisks2 \
libglib2.0-bin \
network-manager \
dbus \
systemd-journal-remote -y
```

- **修复损坏的安装**

```sh
sudo apt --fix-broken install
```

- **重启 reTerminal**

```sh
sudo reboot
```

### 第二步：集成 Docker

安装 Docker 是至关重要的。请务必避免安装 Portainer，因为它可能会对整体安装过程产生负面影响。执行以下命令：

```sh
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

- **将 Docker 用户添加到系统**

```sh
sudo usermod -aG docker pi
```

- **检查 Docker 是否正常工作**

```sh
docker --version
```

### 第三步：解决 CGroup 版本问题

- **Home Assistant Supervisor 的兼容性依赖于特定的 Docker CGroup v1。为了确保这种兼容性，需要进行以下更改：**

```sh
sudo nano /etc/default/grub
```

- **添加以下行并保存。**

```sh
systemd.unified_cgroup_hierarchy=false
```

- **打开以下文件**

```sh
sudo nano /boot/cmdline.txt
```

- **在短语末尾添加以下行并保存。**

```sh
systemd.unified_cgroup_hierarchy=false apparmor=1 security=apparmor
```

### 第四步：安装 OS-Agent（版本 1.3）

根据您的 CPU 架构下载适合的 OS-Agent，然后进行安装：**对于 Raspberry Pi 64 位操作系统，选择 linux aarch64**。

```sh
wget https://github.com/home-assistant/os-agent/releases/download/1.3.0/os-agent_1.3.0_linux_aarch64.deb
```

- **安装 Home Assistant OS Agent**

```sh
sudo dpkg -i os-agent_1.3.0_linux_aarch64.deb
```

- **通过运行以下命令确保安装成功**

```sh
gdbus introspect --system --dest io.hass.os --object-path /io/hass/os
```

### 第五步：获取 Home Assistant Supervised

- **下载最新的 Home Assistant Supervised 包：**

```sh
wget https://github.com/home-assistant/supervised-installer/releases/download/1.3.0/homeassistant-supervised.deb
```

### 第六步：安装 Home Assistant Supervised

重要提示：此步骤需要 LAN 连接，因为在安装过程中 Wi-Fi 可能会中断：

```sh
sudo dpkg -i homeassistant-supervised.deb
```

### 第七步：解决安装错误

如果出现安装错误，通过运行以下命令进行修复：

```sh
sudo apt --fix-broken install
```

修复成功后，将出现一个蓝屏，您可以选择 **Raspberry Pi4 64** 模型。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/bluescreen.png" /></center>

### 第八步：完成安装并设置 Wi-Fi

等待几分钟后，Home Assistant 将可以通过 http://[your_raspberry_IP]:8123 访问。

:::note

如果在重启后遇到 Wi-Fi 连接问题，请按照以下步骤操作：

:::

- 要启用 'dhcpcd'，执行以下命令：
```sh
sudo systemctl enable dhcpcd
```

- 使用以下命令禁用网络服务：
```sh
sudo systemctl disable networking
```

- 重启 Raspberry Pi 以应用更改：
```sh
sudo reboot
```

:::note

为解决 "网络管理器问题"（在设置中找到），您可以通过启动并启用网络管理器来解决问题。使用以下命令完成此操作：

:::

```sh
sudo systemctl enable NetworkManager
```

## 安装 MQTT Broker

- 导航到 Settings > Add-on > 点击 MQTT Broker。
<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/mqqt.png" /></center>

- 点击安装，安装完成后启用开机启动。
<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate1.PNG" /></center>

- 导航到 Settings > Devices and Services > 配置 MQTT Broker。

## 安装 Frigate（完全访问权限）

### 第 1 步：克隆仓库

- 导航到 Settings > Add-on > Add on Store > Menu > repositories。
<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/step1.png" /></center>

- 添加仓库 URL：https://github.com/blakeblackshear/frigate-hass-addons。然后你可以在 Add on Store 中看到 Frigate 插件。

### 第 2 步：安装完全访问权限的 Frigate NVR 插件。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate3.PNG" /></center>

### 第 3 步：创建 frigate.yml

- 要完成此步骤，你需要一个文件编辑器。访问文件编辑器左上角的 "Browse File System" 选项。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/fileeditor1.png" /></center>

- 创建一个名为 frigate.yml 的新文件。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/fileeditor2.png" /></center>

- 接下来，你可以使用以下代码片段来测试是否能够成功从 IP 摄像机获取 RTSP 视频流。将提供的代码复制并粘贴到你的 `frigate.yml` 文件中。强烈建议遵循 [Frigate 官方网站](https://docs.frigate.video/guides/getting_started) 上提供的指南以获取全面的说明。记得用你的具体摄像机名称、分辨率和摄像机流 IP 替换占位符。这种定制将确保与你的摄像机设置准确集成。

```sh
mqtt:
  enabled: False
  

cameras:
  RPIcam: # <------ 给摄像机命名
    ffmpeg:
      inputs:
        - path: rtsp://192.168.8.151:8554/stream # <----- 你想用于检测的流
          roles:
            - detect
    detect:
      enabled: False # <---- 在摄像机流正常工作之前禁用检测
      width: 1280 # <---- 根据你的摄像机分辨率更新
      height: 720 # <---- 根据你的摄像机分辨率更新
      fps: 5
```

### 第 4 步：启动 Frigate

- 在启动 Frigate 之前，确保禁用保护模式。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate4.PNG" /></center>

- 一旦启动 Frigate，务必密切监控日志以检查是否有任何潜在问题。如果没有问题出现，继续点击侧边栏中的 Frigate 图标。这将使你能够访问 Frigate 的界面和功能。

### 第 5 步：检查视频流

如果一切正常，你将能够看到视频流。
<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate5.png" /></center>

### 第 6 步：启用目标检测

为实现此功能，Coral USB Accelerator Edge TPU 是必需的。虽然你可以直接将其插入 USB 端口，但由于其较高的功耗需求，有时可能无法正常工作。因此，我们强烈建议使用可靠的 USB 供电集线器。这将确保稳定的电力供应和 Coral USB Accelerator 的最佳性能，从而提高其兼容性和效果。

- 使用以下代码更改 frigate.yml 文件：

```sh
mqtt:
  enabled: False
  
detectors: # <---- 添加检测器
  coral:
    type: edgetpu
    device: usb

cameras:
  RPIcam: # <------ 给摄像机命名
    ffmpeg:
      input_args: preset-rtsp-udp
      inputs:
        - path: rtsp://192.168.8.151:8554/stream # <----- 你想用于检测的流
          roles:
            - detect
    detect:
      enabled: True # <---- 在摄像机流正常工作之前禁用检测
      width: 1280 # <---- 根据你的摄像机分辨率更新
      height: 720 # <---- 根据你的摄像机分辨率更新
      fps: 5
```

- 重启 Frigate 插件。然后点击侧边栏中的 Frigate 图标。接着点击视频流，你将能够完整查看视频流。默认情况下，你可以检测到人并绘制边界框。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/ui.jpeg" /></center>

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate_debug.jpg" /></center>

以下是演示：

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/HA/reterminalDM.gif" /></center>

你可以检测许多不同的目标并将通知发送到你的手机。为此，你需要更改 frigate.yml 文件。因此，我们强烈建议快速浏览以下指南。

## 资源

- **[网页]** [Frigate 官方文档](https://docs.frigate.video/)

- **[网页]** [Home Assistant 论坛](https://community.home-assistant.io/)


感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>