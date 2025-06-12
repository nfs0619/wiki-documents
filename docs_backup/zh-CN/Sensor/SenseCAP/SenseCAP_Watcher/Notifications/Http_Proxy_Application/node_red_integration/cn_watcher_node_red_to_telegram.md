---
description: 从 Watcher 和 Node-RED 发送消息到 Telegram
title: Watcher 和 Node-RED 到 Telegram
keywords:
- watcher
- Telegram
image: https://files.seeedstudio.com/wiki/watcher_to_telegram_image/telhead.png
slug: /cn/watcher_node_red_to_telegram
last_update:
  date: 05/15/2025
  author: Allen
---

# Watcher 到 Telegram 快速入门

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/watcher_telegram.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## 什么是 [Telegram](https://telegram.org/)

Telegram 是一个流行的消息应用程序，为用户和开发者提供了广泛的功能。通过其开放的 API 和协议，开发者可以创建自定义的 Telegram 客户端、机器人，并将 Telegram 的服务集成到自己的应用程序中。Telegram 提供了一个安全可靠的实时通信平台，支持多种媒体类型、群聊和端到端加密。其基于云的基础设施确保了设备间的无缝同步，并允许轻松扩展。开发者可以利用 Telegram 的功能和工具来构建创新的解决方案，并在项目中增强用户体验。

## 如何访问 Telegram API

### 第一步：获取机器人令牌（bot token）

1. 首先，您需要下载 Telegram 应用程序并进入 **BotFather** 页面。发送 **/newbot** 并按照提示 **为您的机器人命名**。

2. 完成后，**点击页面 2 中的链接**跳转到您的机器人页面（页面 3），然后**向您的机器人发送一条消息**。记得发送消息，否则您无法获取您的 chatid。

3. 另一个重要的事情是**保存您的令牌**（在页面 2 中被马赛克遮挡的部分）。我们稍后会用到它。

<div class="table-center">
  <table align="center">
    <tr>
      <th>页面 1</th>
      <th>页面 2</th>
      <th>页面 3</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/10.png" style={{width:400, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/11.png" style={{width:400, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/12.png" style={{width:400, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

### 第二步：获取机器人 chatId

根据上一步，BotFather 会在您创建机器人后给出一些反馈。您会在反馈中找到 **Token**，格式类似于：**123456789:AoUJnnpoFlkkdfJbCXlo....**。然后使用您的 Token 访问以下链接以获取您的 **ChatId**。

```python
# 使用您的 Token 访问此链接
https://api.telegram.org/bot{Token}/getUpdates

# 示例
https://api.telegram.org/bot123456789:AoUJnnpoFlkkdfJbCXlo.../getUpdates
```

您会在以下图片中找到您的 **ChatId**。ChatId 的格式类似于：**7283028524**。**保存您的 Token 和 ChatId**，我们稍后会用到它们。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/1.png" style={{width:800, height:'auto'}}/></div>

## 在 Node-RED 中配置 Telegram 模块

### 第三步：安装 Telegram 模块

按照下图安装 Telegram 模块。如果您尚未安装 Node-RED，[请参考此处](https://wiki.seeedstudio.com/watcher_to_node_red/)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/2.png" style={{width:500, height:'auto'}}/></div>

**搜索 telegram** 并安装第三个模块。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/3.png" style={{width:800, height:'auto'}}/></div>

### 第四步：连接并配置模块

**拖动**这些模块到工作区并将它们连接在一起。如果您不知道如何配置 **OpenStream**，您可以 [参考此链接](https://wiki.seeedstudio.com/watcher_to_node_red/)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/4.png" style={{width:1000, height:'auto'}}/></div>

现在我们开始配置 **function** 模块。双击它并将以下代码粘贴进去。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/5.png" style={{width:1000, height:'auto'}}/></div>

```javascript
msg.image_url = msg.payload.value[0].image_url;
msg.content = msg.payload.value[0].content;
msg.chatId = "7098248409";  // 替换为您的 Telegram Chat ID

// 设置发送照片的 payload
var photoPayload = {
    chatId: msg.chatId,
    type: "photo",
    content: msg.image_url
};

// 设置发送消息的 payload
var messagePayload = {
    chatId: msg.chatId,
    type: "message",
    content: msg.content
};

// 发送照片
node.send({ payload: photoPayload });

// 发送消息
node.send({ payload: messagePayload });
```

接下来，我们配置 **sender** 模块，如下图所示。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/6.png" style={{width:800, height:'auto'}}/></div>

在此处粘贴您的 **机器人名称、Token 和 ChatId**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/7.png" style={{width:800, height:'auto'}}/></div>

另一个 **sender** 的配置类似，按照下图操作即可。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/14.png" style={{width:800, height:'auto'}}/></div>

## 向 Telegram 发送信息

### 第五步：在 Watcher 中运行任务

首先，您需要按照下方视频在 Watcher 中运行一个任务。如果您想了解更多，[请点击此处](https://wiki.seeedstudio.com/getting_started_with_watcher_task/)。

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### 第六步：发送消息和照片到 Telegram

当任务被触发时，您将会从 Watcher 收到消息。这些消息会同时显示在 Node-RED 和 Telegram 应用中。

<div class="table-center">
  <table align="center">
    <tr>
      <th>Node-RED</th>
      <th>Telegram</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/8.png" style={{width:1000, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/13.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

恭喜您成功将 Watcher 连接到 Telegram！您已经开启了一个充满无限可能的开发旅程。准备好探索并创建利用 Telegram 强大功能的创新应用吧！未来充满光明，我们期待看到您接下来会构建什么！

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>