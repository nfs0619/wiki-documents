---
description: reTerminal DM Ignition Edge Panel Builder Hello World
title: reTerminal DM Ignition Edge Panel Builder Hello World
keywords:
  - Edge
  - reTerminal-DM
  - Ignition Edge
  - Panel Builder
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal-DM-Ignition-Edge-Panel-Builder
last_update:
  date: 05/15/2025
  author: Corey Thompson
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

:::note
本文假设您已经在网络中运行了一个 Ignition Edge Gateway。  
在尝试以下操作之前，如果需要帮助，请先参考 [Ignition Edge 入门指南](./cn_reTerminal-DM-Getting-Started-with-Ignition-Edge.md)。
:::

## 硬件需求
- 具有 SSH 终端功能的 PC / Mac
- 具有足够硬盘容量以安装 Ignition 设计器应用程序的 PC / Mac
- 12-24V DC 电源
- 以太网线
- reTerminal DM x 1

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

<br />

## 授权
本教程不需要激活任何产品，但在您按照教程操作时，可能会因进度不同而导致一些中断。Ignition Edge 产品需要许可证才能在生产环境中完全使用。该产品提供一个试用版本，具有完整功能支持，但每两小时会清除其数据。

要获取产品许可证，您需要联系 Inductive Automation 的销售代表，或者可以在 [Inductive Automation Ignition 定价页面](https://inductiveautomation.com/pricing/ignition) 上自行购买。

要输入许可证，只需按照 Ignition Edge Gateway 首页上的绿色横幅提示激活 Ignition。确保您的边缘设备已连接到互联网，输入 6 或 8 个字符的字符串，设备将在几秒钟内完成激活。

## 使用 Panel Designer 创建 Hello World 视图

为了演示如何创建一个基本页面并在固定 URL 上显示，我们将创建一个“hello world”透视项目，并使用网络浏览器在网关上查看它。

要加载网关的主页，请在 reTerminal 本地的浏览器中访问 `localhost:8088`，或者在网络中的其他设备上访问 `{reterminalhostname}:8088`，或者通过 reTerminal 的 IP 地址在网络中的任何地方访问 `{reterminalip}:8088`。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-launch-screen.png" />
</p>

### 安装和设置 Ignition Edge Panel Builder

在网关的主页上，有一个按钮可以下载 Designer Launcher。Designer Launcher 是 HMI 设计器软件，它安装在您的本地 PC/Mac 上，并将设计远程加载到 reTerminal DM。

首先下载并运行此安装程序。它会检测您的操作系统，并通过一个非常简单的安装程序在您的机器上安装一个应用程序。安装完成后，它会提示您是否要从网关导入设置——点击 **是**。

启动新安装的 Ignition Designer Launcher，它应该显示与您的设备的连接。点击您的设备，然后点击右下角现在已启用的“打开设计器”按钮。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-designer-launcher.png" />
</p>

此时您应该会看到一个登录提示。输入您在设置 Edge Gateway 时输入的 Ignition 管理员凭据。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-designer-login.png" />
</p>

### 创建并加载一个面板

1. 在左侧列中，展开“Perspectives”，右键点击“Views”。
2. 创建一个新视图，并命名为“hello-world”。
3. 找到组件面板（有时在右侧的隐藏选项卡容器中）。搜索“label”，并将其拖到画布上。
4. 双击标签并将文本更改为“hello world”。
5. 保存文件，并在顶部菜单栏中导航到 File -> Update Project，以将更新的项目（即“透视会话”）发布到网关。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-panel-create-helloworld.gif" />
</p>

现在，您已更新了透视会话，它已上线，您可以使用网络浏览器访问它！  
要获取我们刚刚创建的视图的 URL，可以返回到 Edge Gateway Launcher 并查看活动的透视会话。这将打开一个浏览器并导航到会话的主页 URL。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-panel-view-helloworld.gif" />
</p>

## 扩展您的 HMI
您现在已经设置了 Ignition 的 Perspective 模块的基础功能，用于驱动 ReTerminal 的可视化界面。为了利用完整的 Ignition 平台创建更强大的可视化界面，您可能需要设置 Tag 服务器、历史数据库等，这些内容超出了本教程的范围。要了解更多关于 Ignition 平台的信息，可以免费使用他们的优秀文档和教程：[Inductive University](https://inductiveuniversity.com/)。

## Perspective 与 Vision
Ignition 提供了两种面板构建软件，选择使用哪一种是一个常见的问题。这两者在功能上有很多重叠，但有几个关键因素可以帮助您做出决定。

### 您的用户是否以移动设备为优先？选择 Perspective。
如果您希望使用 iOS 或 Android 的原生功能包，例如定位服务或摄像头，这些功能只能通过 Perspective 实现。

### 您是否希望体验比网页浏览器更原生？选择 Vision。
如果您想避免许多现代网页应用（如 Google Drive、网页版 Outlook、网页版 Zoom 等）的感觉，并完全沉浸于用户体验中，那么您应该选择 Vision。

### 您的用户是否会在此设备上进行多任务处理？选择 Perspective。
Perspective 基于 JavaScript 技术栈，并依赖于网页浏览器来显示应用程序。而 Vision 是一个基于 Java 的应用程序，最初是为专用 HMI 面板构建的，并假设主机设备将完全用于您的应用程序。如果您的用户有时需要最小化 HMI 以使用操作系统上的其他应用程序，那么您应该选择 Perspective。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>