---
description: 从 Watcher 和 Node-RED 发送消息到 IFTTT
title: Watcher 和 Node-RED 到 IFTTT
keywords:
- watcher
- IFTTT
image: https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/ifttthead.png
slug: /cn/watcher_node_red_to_ifttt
last_update:
  date: 05/15/2025
  author: Allen
---

# Watcher 到 IFTTT 快速入门

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/watcher_ifttt.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## 第 1 部分：[IFTTT (If This Then That)](https://ifttt.com/) 是什么？

IFTTT 是一个基于网络的服务，允许开发者在无需复杂编程的情况下创建应用程序、设备和服务之间的自动化和集成。它使用户能够定义称为“Applet”的简单条件语句，这些语句根据特定事件触发操作。IFTTT 提供了一个用户友好的界面和大量预构建的 Applet 库，使开发者能够高效地创建强大的自动化和集成。

## 第 2 部分：如何配置 IFTTT

### 第 1 步：配置 Webhooks

首先，我们需要**创建**一个 IFTTT Applet。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/1.png" style={{width:1000, height:'auto'}}/></div>

我们需要**添加**一个触发器。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/2.png" style={{width:500, height:'auto'}}/></div>

搜索 **Webhooks** 并点击该服务。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/3.png" style={{width:500, height:'auto'}}/></div>

您将看到 Webhooks 触发器的简要介绍，我们将选择第二个选项。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/4.png" style={{width:500, height:'auto'}}/></div>

为您的触发器命名并创建它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/5.png" style={{width:500, height:'auto'}}/></div>

### 第 2 步：配置电子邮件

当触发器被触发时，我们需要采取行动。因此，这里是您想要采取的操作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/6.png" style={{width:500, height:'auto'}}/></div>

我们将在触发器触发时通过 Gmail 发送电子邮件。当然，您可以使用数百万种服务。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/7.png" style={{width:800, height:'auto'}}/></div>

选择 Gmail 帐户并填写您想要发送的电子邮件地址。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/8.png" style={{width:600, height:'auto'}}/></div>

根据需要或默认设置自定义 **主题** 和 **正文**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/9.png" style={{width:600, height:'auto'}}/></div>

点击 **继续** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/11.png" style={{width:600, height:'auto'}}/></div>

### 第 3 步：完成 Applet

您可以编辑您的 **Applet 标题** 或保持默认，然后点击 **完成**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/12.png" style={{width:600, height:'auto'}}/></div>

完成后，您可以保存此链接，因为我们稍后会用到它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/13.png" style={{width:600, height:'auto'}}/></div>

## 第 3 部分：在 Node-RED 中访问 IFTTT

### 第 4 步：Watcher 消息发送到 Node-RED

将这些模块拖到工作区并将它们连接在一起。如果您还不知道如何从 Watcher 发送消息到 Node-RED，[请点击这里](https://wiki.seeedstudio.com/watcher_to_node_red/)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/20.png" style={{width:1000, height:'auto'}}/></div>

### 第 5 步：处理您想要发送到 IFTTT 的消息

双击 **function** 模块并编写一些代码以获取 **value1** 和 **value2**，可能还有 **value3**。这些值将被发送到 IFTTT。

```javascript
var content = msg.payload.value[0].content;
var image_url = msg.payload.value[0].image_url;

// 将消息内容和图片 URL 作为值发送到 IFTTT
msg.payload = {
    value1: content,
    value2: image_url,
};
return msg;
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/21.png" style={{width:1000, height:'auto'}}/></div>

双击 **http request** 模块，选择 **POST** 方法并**粘贴您从 IFTTT 复制的 URL**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/22.png" style={{width:1000, height:'auto'}}/></div>

完成后，不要忘记点击 **部署**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/23.png" style={{width:800, height:'auto'}}/></div>

## 第 4 部分：通过 IFTTT 发送消息

### 第 6 步：向 Watcher 发送任务

首先，您需要按照下面的视频在 Watcher 中运行一个任务。如果您想了解更多，[请点击这里](https://wiki.seeedstudio.com/getting_started_with_watcher_task/)。

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### 第 7 步：在 IFTTT 和手机中检查这些消息

打开 **My Applets** 并点击您之前创建的 Applet。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/14.png" style={{width:1000, height:'auto'}}/></div>

向下滚动页面并点击 **查看活动** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/15.png" style={{width:800, height:'auto'}}/></div>

继续向下滚动并点击这两个按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/16.png" style={{width:800, height:'auto'}}/></div>

然后你将看到由 Watcher 发送的消息以及你的电子邮件。

<div class="table-center">
  <table align="center">
    <tr>
      <th>IFTTT 消息</th>
      <th>电子邮件消息</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/16_1.png" style={{width:1000, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/wm.png" style={{width:320, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

恭喜你完成了 Watcher 到 IFTTT 的电子邮件演示！这只是你与 IFTTT 旅程的开始。还有无数的应用和集成等待你去发现。继续探索、学习和自动化，让你的生活更加高效和富有生产力。使用 IFTTT 的可能性是无限的，祝你玩得开心，实验愉快！

## 技术支持与产品讨论

感谢你选择我们的产品！我们致力于为你提供不同的支持，以确保你使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>