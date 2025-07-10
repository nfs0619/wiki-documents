---
description: 从 Watcher 和 Node-RED 发送数据到 WhatsApp
title: Watcher 和 Node-RED 到 WhatsApp
keywords:
- Watcher
- WhatsApp
- Node-RED
image: https://files.seeedstudio.com/wiki/Watcher_WhatsApp/watcher_whatsapp.png
slug: /cn/watcher_node_red_to_whatsapp
last_update:
  date: 05/15/2025
  author: Vincent
---

# Watcher 到 WhatsApp 快速入门

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/watcher_whatsapp.png" style={{width:1000, height:'auto'}}/></div>

[**WhatsApp**](https://web.whatsapp.com/) 是由 Meta 拥有的一项即时消息和语音通话服务。它允许用户发送文本、语音和视频消息，进行语音和视频通话，并分享图片、文档、位置和其他内容。

本教程将指导您如何将 Watcher API 与 Node-RED 集成，以便无缝地将数据从 Watcher 发送到 WhatsApp。这种集成提供了一种简单高效的方法来**接收通知，并为进一步的应用和集成打开了大门**。

## 第 1 部分：在 Node-RED 中设置 Watcher

### 第 1 步：设置 Node-RED

首先，您需要按照以下视频在 Watcher 中运行一个任务。如果您想了解更多信息，请[点击这里](https://wiki.seeedstudio.com/getting_started_with_watcher_task/)。

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

本次设置需要使用 Node-RED 和 Watcher API。如果您尚未安装 Node-RED 或将其与 Watcher API 连接，请从这里开始：[**Watcher 到 Node-RED 快速入门**](https://wiki.seeedstudio.com/watcher_to_node_red)。

### 第 2 步：从 Watcher 获取数据

在设置好 Watcher 与 Node-RED 的连接后，下一步是准备从 Watcher 获取的数据以发送到 WhatsApp。双击功能节点以适当格式化数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_1.png" style={{width:1000, height:'auto'}}/></div>

在本教程中，我们将发送内容以及图片 URL。不过，您可以根据自己的应用需求对数据进行转换。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_2.png" style={{width:1000, height:'auto'}}/></div>

#### 格式化数据的 Node-RED 功能示例

```sh
node.send({ payload: msg.payload.value[0].content });

node.send({ payload: msg.payload.value[0].image_url });
```

## 第 2 部分：设置 WhatsApp API

### 第 3 步：注册 WhatsApp

需要一个 WhatsApp 账户才能继续。如果您还没有账户，请[**点击这里**](https://www.whatsapp.com)并完成创建账户的步骤。

如果您已经有账户，请继续[**第 4 步**](#step-4-get-callmebot-api-key)。

### 第 4 步：获取 CallMeBot API 密钥

在设置好 WhatsApp 账户并登录后，现在是时候设置 CallMeBot API 了。这是连接 Node-RED 和 WhatsApp 的 API。

要获取您的 CallMeBot API 密钥，请按照以下步骤操作（摘自[**此 GitHub 仓库**](https://github.com/PfisterDaniel/node-red-contrib-whatsapp-cmb/blob/main/README.md#create-api-key)）：

1. 将电话号码 +34 644 66 32 62 添加到您的手机联系人中。（可以随意命名）
2. 向新创建的联系人发送消息 "I allow callmebot to send me messages"（当然是通过 WhatsApp）。
3. 等待，直到您收到来自机器人的消息 "API Activated for your phone number. Your APIKEY is 123123"。由于仍处于测试阶段，激活可能需要长达 2 分钟。
4. 来自机器人的 WhatsApp 消息将包含用于通过 API 发送消息的 API 密钥。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/WhatsApp_API.png" style={{width:1000, height:'auto'}}/></div>

:::note
本教程中提供的 CallMeBot API 电话号码可能会因请求过多而无法接受更多请求。如果发生这种情况，CallMeBot 会通过 WhatsApp 向您发送一条消息，提供备用电话号码。

如果您没有收到这样的消息，并且所有提供的电话号码都已满，您可能需要寻找其他 API 来将 Node-RED 与 WhatsApp 连接。请确保查看 CallMeBot 网站上的最新更新和文档，或探索其他与 Node-RED 兼容的 WhatsApp 消息 API。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/WhatsApp_Full.png" style={{width:1000, height:'auto'}}/></div>
:::

## 第 3 部分：将 WhatsApp 与 Node-RED 集成

### 第 5 步：安装 WhatsApp 模块

点击三条横线图标，然后点击 **Manage palette** 选项。这将打开一个新窗口，您可以在其中添加或移除节点。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_3.png" style={{width:1000, height:'auto'}}/></div>

在调色板管理窗口中切换到 **Install** 选项卡。在搜索栏中输入 `whatsapp` 以找到模块。然后，点击 **node-red-contrib-whatsapp-cmb** 条目旁边的 **install** 按钮。

我们还建议查看[**节点文档**](https://github.com/PfisterDaniel/node-red-contrib-whatsapp-cmb/blob/main/README.md)和相关的[**GitHub 仓库**](https://github.com/PfisterDaniel/node-red-contrib-whatsapp-cmb)，以便更深入地了解模块的工作原理以及如何最大化其潜力。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_4.png" style={{width:1000, height:'auto'}}/></div>

:::note
**node-red-contrib-whatsapp-cmb** 模块在撰写本教程时（2024 年 7 月）因其当前的兼容性和可靠性而被推荐。然而，Node-RED 模块的可用性和功能可能会随着时间变化。建议查看 Node-RED 库或 GitHub 仓库中的最新用户反馈和兼容性说明。如果您在使用此模块时遇到问题，可以考虑探索 Node-RED 库中列出的其他 WhatsApp 模块，以找到更适合的选项。
:::

### 第六步：配置 WhatsApp 节点

安装 WhatsApp 模块后，将 **Send Message** 节点拖到 Node-RED 流中，并将其连接到功能节点。

双击 **Send Message** 节点进行配置。然后，点击账户字段旁边的加号图标以添加新的账户配置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_5.png" style={{width:1000, height:'auto'}}/></div>

1. 输入您希望用于此账户的名称。
2. 输入与您的 WhatsApp 账户关联的电话号码。
3. 输入您的 API 密钥。

然后，点击 **Add** 或 **Update** 保存账户配置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_6.png" style={{width:1000, height:'auto'}}/></div>

账户配置完成后，将消息字段旁边的下拉菜单更改为 **msg.**，并在文本字段中输入 `payload`。最后，点击 **Done** 完成 WhatsApp 节点的配置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_7.png" style={{width:1000, height:'auto'}}/></div>

### 第七步：部署

最后，通过点击 Node-RED 界面右上角的部署按钮来部署您的流。此操作将激活您配置的节点，使数据能够从功能节点流向 CallMeBot API。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_8.png" style={{width:1000, height:'auto'}}/></div>

现在，每当您的 Watcher 被触发时，您将收到来自 WhatsApp 的通知。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/WhatsApp_Result.png" style={{width:1000, height:'auto'}}/></div>

## 调试：Node-RED 错误

在尝试将 Node-RED 与 WhatsApp 集成时，您可能会遇到类似以下的错误。如果发生这种情况，您可以按照以下步骤进行修复。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_Error.png" style={{width:300, height:'auto'}}/></div>

要解决此问题，您可以尝试以下步骤：

1. 在您的 Node-RED 用户目录中安装缺失的 `aws4` 模块：

   ```sh
   npm install aws4
   ```

2. 如果这不起作用，您可能需要重新安装 `request` 包：

   ```sh
   npm install request
   ```

3. 如果问题仍然存在，您可能需要重新安装 WhatsApp 节点：

   ```sh
   npm install node-red-contrib-whatsapp-cmb
   ```

4. 如果以上方法都无效，您可以尝试清除 npm 缓存并重新安装所有依赖项：

   ```sh
    npm cache clean --force
    npm install
   ```

尝试这些步骤后，重新启动 Node-RED，查看错误是否已解决。如果问题仍然存在，您可能需要检查您的 Node.js 版本、Node-RED 版本以及您使用的包版本之间的兼容性。

恭喜您成功将 Watcher 与 WhatsApp 集成！您已经开启了开发工作中令人兴奋的机会之门。准备好探索利用 WhatsApp 强大功能创建创新应用程序的旅程吧。我们期待看到您接下来开发的卓越解决方案！

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>