---
description: 如何自定义 Home Assistant
title: 如何自定义 Home Assistant
keywords:
  - Edge
  - reTerminal 应用
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal-Home-Assistant-Customize
last_update:
  date: 05/15/2025
  author: jianjing Huang
---

# 如何自定义 Home Assistant

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/105.png"/></div>

## 简介

在之前的文档中，我们已经解释了如何在 [reTerminal](https://wiki.seeedstudio.com/reTerminal_Home_Assistant)、[ODYSSEY-X86](https://wiki.seeedstudio.com/ODYSSEY-X86-Home-Assistant) 上安装 Home Assistant，并在 PC、智能手机、平板电脑以及 reTerminal LCD 的 Kiosk 模式下显示仪表盘界面。

本篇文档将逐步讲解如何通过必要的配置来构建仪表盘，以及如何使用 Home Assistant 提供的一些重要附加组件。让我们开始吧！

## 附加组件、HACS 和集成

Home Assistant 提供了三种主要方式来扩展其功能：

- 附加组件
- 集成
- HACS (Home Assistant 社区商店)

[附加组件](https://www.home-assistant.io/addons) 允许通过安装额外的应用程序来扩展 Home Assistant 的功能。例如，与 ESPHome 智能传感器连接、将 Home Assistant 自动备份到 Google Drive 等。

[集成](https://www.home-assistant.io/integrations) 允许将 Home Assistant 与其他服务连接。例如，与智能灯、CCTV 摄像头等连接。

[HACS (Home Assistant 社区商店)](https://hacs.xyz/) 允许您为 Home Assistant 添加自定义前端集成的组件。例如，支持新的硬件/传感器、新主题等。

本篇文档将简要介绍上述功能。如果您想了解更多，有大量关于 Home Assistant 的在线资源，以下是一些可以很好地指导您的 YouTube 频道：

- [EverythingSmartHome](https://www.youtube.com/c/EverythingSmartHome)
- [TheHookUp](https://www.youtube.com/c/TheHookUp)
- [PaulHibbert](https://www.youtube.com/c/PaulHibbert)
- [MakeItWorkTech](https://www.youtube.com/c/MakeItWorkTech)
- [MarkWattTech](https://www.youtube.com/c/MarkWattTech)
- [SmartHomeSolver](https://www.youtube.com/c/SmartHomeSolver)
- [mostlychris](https://www.youtube.com/c/mostlychris)
- [KPeyanski](https://www.youtube.com/c/KPeyanski)

## 附加组件

默认情况下，并非所有附加组件都会启用。因此，要启用所有附加组件，您需要开启“高级模式”。

- **步骤 1.** 点击 **用户名** 并启用 **高级模式**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/17.png"/></div>

现在我们需要访问附加组件面板。

- **步骤 2.** 导航到 **设置 > 附加组件**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/18.png"/></div>

- **步骤 3.** 点击 **附加组件商店**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/19.png"/></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/20.png"/></div>

除了 Home Assistant 提供的默认附加组件，您还可以添加由社区开发的 **第三方附加组件**。然而，这些组件并非由 Home Assistant 开发者维护。稍后我们将展示如何添加这些第三方附加组件。

### 开始使用附加组件

现在让我们设置一些附加组件。这里我们将展示如何设置以下附加组件：

- Terminal & SSH
- 文件编辑器
- Glances
- Google Drive 备份

您还可以设置其他附加组件，例如 **Node-RED、ESPHome、Adguard Home、BitWarden、Samba Share、Mosquitto broker、BookStack、Uptime Kuma、Cloudflared Tunnel 等**。

#### 安装附加组件

安装附加组件的过程对所有附加组件都是通用的。因此，我们将在这里进行说明。

- **步骤 1.** 按照之前的说明访问 **附加组件商店**

- **步骤 2.** 选择一个附加组件或在搜索栏中输入。例如，这里我们选择 **Terminal & SSH** 附加组件。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/21.png"/></div>

- **步骤 3.** 点击 **安装**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/22.png"/></div>

- **步骤 4.** 配置更多设置，例如 **开机启动、看门狗、自动更新和在侧边栏显示**。如果您愿意，可以全部启用，然后点击 **启动**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/23.png"/></div>

如果附加组件已启动并运行，您将看到这个 **绿色圆点**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/25.png"/></div>

- **步骤 5.** 附加组件启动后，点击 **日志** 标签，检查附加组件是否正确启动。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/24.png"/></div>

#### 文件编辑器附加组件

虽然您可以直接从 **设置** 下的用户界面配置大部分 Home Assistant，但某些部分需要您编辑一些文件，例如 **configuration.yaml**，其中包含要加载的集成及其配置。您可以向此配置文件添加代码片段以启用特定功能。

然而，为了访问这些配置文件，我们需要一个文件编辑器。这就是 **文件编辑器** 附加组件的用途。

- **步骤 1.** 在 **附加组件商店** 中查找 **文件编辑器** 附加组件，点击 **安装** 并 **启动**。

- **步骤 2.** 您可以点击 **打开 Web 界面** 或左侧导航栏中的 **文件编辑器** 来访问它。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/26.png"/></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/27.png"/></div>

#### Glances 附加组件

在安装 Home Assistant 后，您可能希望检查主机设备上的硬件资源使用情况。**Glances** 插件可以提供所有硬件资源使用情况的概览。

- **步骤 1.** 在 **插件商店** 中查找 **Glances** 插件，点击 **安装** 并 **启动**。

- **步骤 2.** 您可以点击 **打开 Web 界面** 或在左侧导航栏中点击 **Glances** 来访问它。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/28.png"/></div>

**注意：** 请确保 **保护模式** 已禁用，否则 Glances 将无法启动。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/29.png"/></div>

#### Google Drive Backup 插件

如前所述，您可以为 Home Assistant 安装第三方插件，**Google Drive Backup** 就是其中之一。在花费大量时间和精力设置 Home Assistant 以满足您的需求后，如果系统崩溃，所有努力都将付诸东流。这时备份功能可以拯救您。

默认情况下，Home Assistant 具有备份功能，并可以将备份离线保存到运行 Home Assistant 的主机设备上。然而，如果主机设备无法响应，您甚至无法访问它时，该如何从之前的备份中恢复呢？

Google Drive Backup 插件允许您配置自动备份功能，它会每天将备份上传到您的 Google Drive。因此，如果您无法访问主机设备，可以从 Google Drive 下载保存的备份并在设备上恢复。

- **步骤 1.** 访问 **插件商店**，点击右上角的 **三个点**，然后点击 **Repositories（存储库）**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/30.png"/></div>

- **步骤 2.** 将 **https://github.com/sabeechen/hassio-google-drive-backup** 复制并粘贴到空白栏中，然后点击 **添加**。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Home-Assistant/31.png"/></div>

如果添加成功，您将看到如下界面：

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Home-Assistant/32.png"/></div>

- **步骤 3.** 前往 **设置 > 系统**，点击 **重启** 以重启 Home Assistant。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/33.png"/></div>

- **步骤 4.** 访问 **插件商店**，查找 **Home Assistant Google Drive Backup** 插件，点击 **安装** 并 **启动**。

- **步骤 5.** 您可以点击 **打开 Web 界面** 或在左侧导航栏中点击 **备份** 来访问它。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/34.png"/></div>

- **步骤 6.** 点击 **使用 Google Drive 进行身份验证**，它将打开一个新窗口。使用您的 Google 账户登录并允许访问。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/36.png"/></div>

- **步骤 7.** 点击 **复制** 以复制授权字符串。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/37.png"/></div>

- **步骤 8.** 返回 Home Assistant 界面，粘贴复制的字符串并点击 **保存**。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Home-Assistant/38.png"/></div>

现在我们已经成功设置了 Google Drive 备份。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/39.png"/></div>

如果您想配置其他设置，例如备份频率、保留的备份数量，可以点击 **设置** 进入配置页面。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/40.png"/></div>

## 集成

现在让我们来探索 Home Assistant 上的集成功能！在这里，我们将向您展示如何设置以下集成。

- 智能灯光控制
- CCTV 摄像头流媒体

您还可以设置其他集成，例如 **Philips Hue、Shelly、Tuya、Sonos、Z-Wave、HomeKit、WLED 等**。

- **步骤 1.** 导航到 **设置 > 设备与服务**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/41.png"/></div>

- **步骤 2.** 点击 **+ 添加集成**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/42.png"/></div>

在这里，您会发现许多集成选项！

### 智能灯光集成

让我们添加 **小米智能灯光集成**，以便我们可以打开/关闭智能灯。在继续之前，请确保您拥有一个小米智能灯。如果您有其他智能灯，例如 **Philips Hue**，您可以添加 **Philips Hue 集成**，步骤几乎相同。

- **步骤 1.** 搜索 **Yeelight** 并选择它

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/43.png"/></div>

- **步骤 2.** 输入智能灯的 IP 地址并点击 **提交**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Home-Assistant/44.png"/></div>

- **步骤 3.** 点击 **完成**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Home-Assistant/45.png"/></div>

- **步骤 4.** 在 **概览** 页面，点击左上角的三点图标，然后点击 **编辑 仪表板**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/46.png"/></div>

- **步骤 5.** 在这里我们不需要带有用户名的卡片。因此，点击 **三点图标** 并选择 **删除卡片** 来删除它。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/47.png"/></div>

- **步骤 6.** 确认删除

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Home-Assistant/48.png"/></div>

- **步骤 7.** 点击 **+ 添加卡片**，然后选择 **灯光** 卡片

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/49.png"/></div>

- **步骤 8.** 更改 **名称** 并点击 **保存**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/50.png"/></div>

- **步骤 9.** 点击 **完成**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/51.png"/></div>

- **步骤 10.** 现在您可以打开灯光并控制亮度

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Home-Assistant/52.png"/></div>

- **步骤 11.** 如果您点击 **三点图标**，您可以获得更多灯光控制功能，例如更改颜色和色温的能力。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/53.png"/></div>

### CCTV IP 摄像头集成

在这里我们将添加一个摄像头集成，以便能够通过 RTSP 协议查看 CCTV 摄像头的实时视频流！在继续之前，请确保您拥有一个支持 IP 功能并能够通过 RTSP 进行流媒体的 CCTV 摄像头。

- **步骤 1.** 在 **集成** 页面下的 **设置新集成** 中，搜索 **通用摄像头** 并选择它。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/54.png"/></div>

- **步骤 2.** 添加 **RTSP 流 URL**，如果需要，输入 **用户名、密码**，更改 **帧率**，然后点击 **提交**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Home-Assistant/55.png"/></div>

- **步骤 3.** 在 **概览** 页面，像之前一样进入 **+ 添加卡片** 页面，然后点击 **图片实体** 卡片

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/56.png"/></div>

- **步骤 4.** 在 **实体** 下输入 **camera**，您将看到我们之前设置的摄像头。点击它。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/57.png"/></div>

- **步骤 5.** 更改 **名称**，将 **摄像头视图** 更改为 **实时**，然后点击 **保存**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/58.png"/></div>

现在您将在仪表板上看到实时视频流！

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/59.png"/></div>

## HACS (Home Assistant Community Store)

现在让我们在 Home Assistant 上探索 HACS！HACS 提供了许多集成和前端自定义选项。这里我们将向您展示如何设置以下内容：

- 更改 Home Assistant 主题
- 向仪表板添加天气卡片

### 安装 HACS

- **步骤 1.** 打开我们之前安装的 **Terminal & SSH** 插件

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Home-Assistant/60.png"/></div>

- **步骤 2.** 在终端窗口中输入以下命令以安装 HACS

```sh
wget -O - https://get.hacs.xyz | bash -
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/61.png"/></div>

- **步骤 3.** HACS 安装完成后，使用以下命令重新启动 Home Assistant

```sh
ha ha restart
```

- **步骤 4.** 在 **Integrations** 页面中，点击 **Set up a new integration**，搜索 **HACS** 并选择它。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant/62.png"/></div>

- **步骤 5.** 选择所有选项以同意条款，然后点击 **SUBMIT**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant/63.png"/></div>

- **步骤 6.** 复制授权代码，然后点击链接登录 GitHub。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Home-Assistant/70.jpg"/></div>

- **步骤 7.** 登录 GitHub，粘贴复制的代码并点击 **Continue**

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Home-Assistant/71.jpg"/></div>

- **步骤 8.** 点击 **Authorize HACS**

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Home-Assistant/72.jpg"/></div>

- **步骤 9.** 点击 **FINISH**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Home-Assistant/68.png"/></div>

HACS 现在已安装！

- **步骤 10.** 最好现在通过导航到 **Settings > System > Hardware**，点击右上角的 **3-dots**，然后点击 **Reboot Host** 来重启系统。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/69.png"/></div>

- **步骤 11.** 系统重启后，您将在左侧导航栏中看到 **HACS**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/73.png"/></div>

### 更改 Home Assistant 主题

现在让我们使用 HACS 更改默认主题！开箱即用，Home Assistant 仅提供一个深色模式主题。然而，如果您想自定义它，请按照以下步骤操作：

- **步骤 1.** 在安装自定义主题之前，我们需要在 **configuration.yaml** 文件中添加一些代码。打开 **File editor** 并点击 **Folder icon** 浏览文件系统。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/76.jpg"/></div>

- **步骤 2.** 点击 **configuration.yaml**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/77.png"/></div>

- **步骤 3.** 在文件末尾添加以下内容：

```sh
frontend:
  themes: !include_dir_merge_named themes
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Home-Assistant/78.jpg"/></div>

- **步骤 4.** 点击保存按钮

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/79.png"/></div>

- **步骤 5.** 最好检查我们所做的配置是否有效。否则，下次 Home Assistant 将无法启动。转到 **Developer Tools** 并点击 **CHECK CONFIGURATION**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/80.png"/></div>

如果您看到消息 **Configuration valid!**，那么一切正常！

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/81.png"/></div>

- **步骤 6.** 点击 **RESTART** 重新启动 Home Assistant

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/82.png"/></div>

- **步骤 7.** 在 **HACS** 窗口中，点击 **Frontend**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/74.png"/></div>

- **步骤 8.** 点击 **+ EXPLORE & DOWNLOAD REPOSITORIES**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/75.jpg"/></div>

- **步骤 9.** 您将在这里看到许多主题。例如，我们将安装一个 iOS 主题。搜索 **iOS** 并选择 **iOS Themes - Dark Mode and Light Mode**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/85.png"/></div>

- **步骤 10.** 点击 **DOWNLOAD**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/86.png"/></div>

- **步骤 11.** 在提示框中再次点击 **DOWNLOAD**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/87.png"/></div>

- **步骤 12.** 下载完成后，点击您的用户名，在 **Theme** 下选择 **ios-dark-mode-blue-red**。如果您喜欢，也可以选择此主题的其他颜色。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/88.jpg"/></div>

现在加载新主题后，**Overview** 页面将如下所示！

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/89.png"/></div>

**注意：** 如果您无法正确加载主题，请重新启动 Home Assistant。

### 向仪表板添加天气卡片

现在我们将使用 HACS 安装一个天气卡片并将其添加到仪表板！

在安装此天气卡片之前，我们需要连接 **openweathermap** 以获取天气信息。在连接 openweathermap 之前，我们需要从 openweathermap 获取一个 API 密钥。

- **步骤 1.** 访问 [此链接](https://home.openweathermap.org/users/sign_up) 注册一个 openweathermap 账户

- **步骤 2.** 访问 [此链接](https://home.openweathermap.org/users/sign_in) 登录新创建的账户

- **步骤 3.** 在账户名称下，点击 **My API keys**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/97.png"/></div>

- **步骤 4.** 输入一个 API 密钥名称并点击 **Generate**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/98.png"/></div>

- **步骤 5.** 复制生成的 API 密钥

<div align="center"><img width={650} src="https://files.seeedstudio.com/wiki/Home-Assistant/99.png"/></div>

现在我们将添加这个 API 密钥

- **步骤 6.** 在 Home Assistant 中，导航到 **Settings > Devices & Services > Integrations > + ADD INTEGRATION**，搜索 **OpenWeathermap** 并点击它

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/96.png"/></div>

- **步骤 7.** 粘贴复制的 **API 密钥**，根据您的位置更改 **纬度和经度**（可以通过简单的 Google 搜索找到），将模式更改为 **hourly** 并点击 **SUBMIT**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Home-Assistant/101.png"/></div>

- **步骤 8.** 点击 **Finish**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Home-Assistant/102.png"/></div>

现在我们将从 HACS 安装天气卡片

- **步骤 9.** 导航到 **HACS > Frontend > + EXPLORE & DOWNLOAD REPOSITORIES**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/90.jpg"/></div>

- **步骤 10.** 输入 **weather** 并点击 **Weather Card**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/91.png"/></div>

- **步骤 11.** 点击 **DOWNLOAD**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/92.png"/></div>

- **步骤 12.** 在提示框中再次点击 **DOWNLOAD**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/93.png"/></div>

- **步骤 13.** 在 **Overview** 页面，进入 **+ ADD CARD** 页面，如之前一样，点击 **Custom: Weather Card**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/103.png"/></div>

- **步骤 14.** 根据之前输入的 **纬度和经度** 输入 **城市名称** 并点击 **SAVE**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/104.png"/></div>

现在完成的仪表板将如下所示

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/105.png"/></div>

## 资源

- [Home Assistant 文档](https://www.home-assistant.io/docs)