---
description: 描述如何在本地将 Watcher 集成到 Home Assistant。
title: 将 Watcher 集成到 Home Assistant
image: https://files.seeedstudio.com/wiki/watcher_ha/10.png
slug: /cn/integrate_watcher_to_ha
last_update:
  date: 05/15/2025
  author: Citric
sidebar_position: 1
---

# 将 Watcher 集成到 Home Assistant

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/10.png" style={{width:1000, height:'auto'}}/></div>

人工智能（AI）的集成已经彻底改变了智能家居技术的世界，而 Watcher 作为一款尖端的 AI 驱动设备，成为了行业的变革者。通过将 Watcher 无缝集成到 Home Assistant（一款流行的开源家庭自动化平台）中，用户可以在智能家居中解锁全新的便利性、安全性和效率。

在这篇全面的教程中，我们将指导您如何将 Watcher 集成到 Home Assistant 中，从而充分利用 AI 在智能家居设置中的潜力。无论您是经验丰富的 Home Assistant 用户，还是家庭自动化的新手，这种集成都将为您打开令人兴奋的可能性，让您的家变得更智能、更灵活，并根据您的独特需求量身定制。

以下是本文的主要内容框架：

1. [安装 HACS 插件](#installing-the-hacs-plugin)：安装 Home Assistant Community Store (HACS)，以便在 Home Assistant 中启用 Seeed Studio 的 SenseCraft 插件。
2. [安装 SenseCraft 插件](#installing-the-sensecraft-plugin)：安装 Seeed Studio 的 SenseCraft 插件，快速将 Seeed Studio 的产品部署到 Home Assistant 中。
3. [将 SenseCAP Watcher 集成到 Home Assistant](#integrate-sensecap-watcher-into-home-assistant)：将 SenseCAP Watcher 集成到 Home Assistant 中，并设置一个可视化仪表板进行配置。

## 入门

在开始本教程内容之前，您可能需要准备以下硬件。

### 所需材料

<div class="table-center">
  <table align="center">
    <tr>
      <th>SenseCAP Watcher</th>
      <th>Home Assistant Green</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/1.png" style={{width:180, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Home Assistant Green 是实现家庭自动化最简单且最注重隐私的方式。它提供了轻松的设置，允许您通过一个系统控制所有智能设备，所有数据默认存储在本地。该设备受益于蓬勃发展的 Home Assistant 生态系统，并将通过开源社区每月得到改进。

我们建议在本教程中使用 Home Assistant Green 作为 Home Assistant 主机，或者您也可以使用任何带有 Supervisor 的 Home Assistant 主机。

## 安装 HACS 插件

### 第一步：在 Home Assistant 中启用高级模式

为了充分利用 Home Assistant 的功能并访问高级功能，您可以在用户界面中启用“高级模式”。

导航到您的 [Home Assistant 网页界面](http://homeassistant.local:8123)。点击 Home Assistant 侧边栏左下角的个人资料图标。在您的个人资料页面，向下滚动找到 **高级模式** 开关。将开关切换到开启状态。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/2.png" style={{width:1000, height:'auto'}}/></div>

### 第二步：安装 Terminal & SSH

点击侧边栏中的 **设置** 以访问设置菜单。点击 **附加组件** 以访问附加组件商店。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/3.png" style={{width:1000, height:'auto'}}/></div>

使用搜索栏或浏览可用的附加组件，找到 **Terminal & SSH**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/4.png" style={{width:1000, height:'auto'}}/></div>

找到 **Terminal & SSH** 后，点击它查看详细信息。在附加组件页面，您将看到概述、文档和配置选项。点击 **安装** 按钮以安装附加组件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/5.png" style={{width:1000, height:'auto'}}/></div>

### 第三步：安装 HACS

在侧边栏中找到最近下载的 **Terminal & SSH**。在终端中，导航到配置目录，即 Home Assistant 配置的根目录：

```
cd /config
```

执行以下命令下载并运行 HACS 安装脚本：

```
wget -q -O - https://install.hacs.xyz | bash -
```

安装脚本完成后，您需要重新启动 Home Assistant 以应用更改。您可以通过 UI 重新启动 Home Assistant，路径为 **设置 > 系统 > 重启**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/6.png" style={{width:1000, height:'auto'}}/></div>

重启后，点击侧边栏中的 **设置** 打开设置菜单。在设置菜单中，导航到 **设备与服务**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/7.png" style={{width:1000, height:'auto'}}/></div>

点击 **添加集成** 来将新的集成添加到您的 Home Assistant 设置中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/8.png" style={{width:1000, height:'auto'}}/></div>

在搜索栏中输入 **HACS** 来查找 Home Assistant Community Store 集成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/9.png" style={{width:1000, height:'auto'}}/></div>

如果找到 HACS，它应该会出现在可用集成列表中。点击它以开始安装过程。

可能会弹出许可协议或服务条款。仔细阅读协议内容，如果您同意条款，请勾选所有复选框以表示您的同意。点击 **提交** 继续安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/10.png" style={{width:600, height:'auto'}}/></div>

接下来，系统会提示您使用 GitHub 账户登录。这是必要的，因为 HACS 需要与 GitHub 集成以管理社区创建的集成和插件的安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/11.png" style={{width:600, height:'auto'}}/></div>

按照指示授权 Home Assistant 访问您的 GitHub 账户。这通常需要输入 GitHub 提供的验证码以确认您的身份。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/12.png" style={{width:600, height:'auto'}}/></div>

一旦您授权 Home Assistant 使用您的 GitHub 账户，HACS 将完成安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/13.png" style={{width:1000, height:'auto'}}/></div>

您可能需要重启 Home Assistant 以使 HACS 完全集成到您的系统中。

## 安装 SenseCraft 插件

### 第四步：通过 HACS 安装 SenseCraft 插件

在侧边栏中找到 HACS 并点击它以打开 HACS 界面。在右下角，您会找到一个菜单按钮（根据您的 HACS 版本可能是三个点或加号）。点击 **自定义仓库**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/14.png" style={{width:1000, height:'auto'}}/></div>

一个对话框会弹出，要求您输入仓库 URL。在这里，您需要输入 SenseCraft 集成的自定义仓库 URL。输入 URL 后，选择类别（对于 SenseCraft 集成，您需要选择 **Integration**）。

```
https://github.com/Seeed-Solution/SenseCraft-HomeAssistant.git
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/15.png" style={{width:1000, height:'auto'}}/></div>

点击 **添加**。仓库现在已添加到您的 HACS 中，您应该能够在 **Integrations** 列表中找到 SenseCraft 集成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/16.png" style={{width:1000, height:'auto'}}/></div>

找到 SenseCraft 集成并点击 "下载"。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/17.png" style={{width:1000, height:'auto'}}/></div>

到此为止，我们已经成功完成了 SenseCraft 插件的安装。

## 将 SenseCAP Watcher 集成到 Home Assistant

### 第五步：通过 SenseCraft 添加 Watcher

在 **设置** 页面中，选择 **设备与服务**。

然后点击右下角的 **添加集成** 按钮并搜索 **SenseCraft**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/38.png" style={{width:1000, height:'auto'}}/></div>

点击 SenseCraft 并选择操作为 **通过主机/ID 添加设备（局域网集成）**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/39.png" style={{width:500, height:'auto'}}/></div>

:::note
目前，**通过 SenseCraft 账户添加设备（账号集成）** 尚不可用。
:::

然后在设备选项中选择 **Watcher**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/4.png" style={{width:500, height:'auto'}}/></div>

在接下来的页面中，请输入 Watcher 的设备 EUI，您可以在 [SenseCraft APP 的 Watcher 设置](https://wiki.seeedstudio.com/cn/integrate_watcher_to_ha/#%E7%AC%AC%E5%85%AD%E6%AD%A5%E8%AE%BE%E7%BD%AE%E4%BB%BB%E5%8A%A1%E5%B9%B6%E9%85%8D%E7%BD%AE-http-%E6%B6%88%E6%81%AF%E5%9D%97) 中找到 Watcher 的 EUI。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/5.png" style={{width:500, height:'auto'}}/></div>

:::note
请确保 EUI 全部为大写！
:::

点击 **提交** 后，Watcher 的 Home Assistant 组件将自动添加到 Dashboard 中显示，此时应该处于无数据状态。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/6.png" style={{width:1000, height:'auto'}}/></div>

### 第六步：设置任务并配置 HTTP 消息块

为了使 Watcher 的数据能够到达 Home Assistant，您需要将 Watcher 置于任务运行状态，并配置 HTTP 消息块以将警报流发送到 Home Assistant。

例如，我现在在 Watcher 上设置一个任务来检测是否有猫在进食。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/23.png" style={{width:250, height:'auto'}}/></div><br />

在 **详细配置** 中，找到 "如果是，则执行以下操作"，并勾选下面的 **HTTP 推送通知** 选项。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/7.png" style={{width:250, height:'auto'}}/></div><br />

然后点击 **去设置** 按钮，并在其中配置 Home Assistant 的信息，以确保数据能够到达 Home Assistant。

- **HTTP URL**：填写 Home Assistant 的完整 IP 地址，端口号为 8887。例如 `http://192.168.1.151:8887`。

- **HTTP Token**: 在填写时留空。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/8.png" style={{width:250, height:'auto'}}/></div><br />

确认填写正确后，点击底部的“Update Now”（立即更新）。然后任务会下发到 Watcher。

接下来，当 Watcher 检测到您的猫正在进食时，它会触发警报并将传感器的数据报告给 Home Assistant。基于此，您可以自由设置智能家居的自动化操作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/10.png" style={{width:1000, height:'auto'}}/></div>

<details>

<summary>点击查看示例 Dashboard 代码</summary>

```javascript
views:
  - type: sections
    title: Home Assistant
    path: home
    icon: mdi:home-assistant
    sections:
      - cards:
          - type: tile
            entity: sensor.air_humidity
            name: SenseCAP Watcher 空气湿度
            color: blue
            show_entity_picture: true
          - type: tile
            entity: sensor.co2
            name: SenseCAP Watcher 二氧化碳
            color: deep-orange
          - type: tile
            entity: sensor.temperature
            name: SenseCAP Watcher 空气温度
            color: purple
            show_entity_picture: true
          - type: tile
            entity: sensor.alarm
            name: SenseCAP Watcher 警报信息
            color: red
            show_entity_picture: true
          - type: picture
            image_entity: image.alarm_image
```

</details>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>