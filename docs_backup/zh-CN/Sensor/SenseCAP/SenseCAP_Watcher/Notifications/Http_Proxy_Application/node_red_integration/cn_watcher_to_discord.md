---
description: 从 Watcher 和 Node-RED 发送数据到 Discord
title: Watcher 和 Node-RED 到 Discord
keywords:
- Watcher
- Discord
- Node-RED
image: https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Watcher_Discord_Cover.png
slug: /cn/watcher_node_red_to_discord
last_update:
  date: 05/15/2025
  author: Vincent
---

# Watcher 到 Discord 快速入门

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Watcher_Discord_Cover.png" style={{width:1000, height:'auto'}}/></div>

[**Discord**](https://discord.com/) 是一个即时通讯和 VoIP 社交平台，支持通过语音通话、视频通话、文本消息和媒体共享进行交流。Discord 上的对话可以是私密的，也可以发生在称为“服务器”的虚拟社区中。

本教程将指导您如何将 Watcher API 与 Node-RED 集成，以便将数据从 Watcher 无缝发送到 Discord。这种集成提供了一种简单高效的方法来**接收通知，并为进一步的应用和集成打开了大门**。

## 第 1 部分：在 Node-RED 中设置 Watcher

### 第 1 步：设置 Node-RED

首先，您需要按照以下视频在 Watcher 中运行一个任务。如果您想了解更多信息，请[点击这里](https://wiki.seeedstudio.com/getting_started_with_watcher_task/)。

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

本次设置需要使用 Node-RED 和 Watcher API。如果您尚未安装 Node-RED 或将其与 Watcher API 连接，请从这里开始：[**Watcher 到 Node-RED 快速入门**](https://wiki.seeedstudio.com/watcher_to_node_red)。

### 第 2 步：准备来自 Watcher 的数据

在设置好 Watcher 与 Node-RED 的连接后，下一步是为 Discord 准备来自 Watcher 的数据。双击功能节点以适当地格式化数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_1.png" style={{width:1000, height:'auto'}}/></div>

在本教程中，我们将发送内容以及图像。不过，您可以根据自己的应用需求对数据进行转换。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_2.png" style={{width:700, height:'auto'}}/></div>

#### 格式化数据的 Node-RED 功能示例

```sh
node.send({ payload: msg.payload.value[0].content });

node.send({ payload: msg.payload.value[0].image_url });
```

## 第 2 部分：设置 Discord Bot

### 第 3 步：注册 Discord

需要一个 Discord 账户才能继续。如果您还没有账户，请[**点击这里**](https://discord.com)并完成创建账户的步骤。

如果您已有账户，请继续前往[**第 4 步**](#step-4-create-development-application)。

如果您已有一个想要在 Node-RED 中配置的 Discord bot，请跳到[**第 3 部分**](#part-3-integrate-discord-with-node-red)。

### 第 4 步：创建开发应用程序

在设置并登录 Discord 账户后，前往 [**Discord 开发者门户**](https://discord.com/developers/applications) 并创建一个新应用程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_1.png" style={{width:1000, height:'auto'}}/></div>

为您的应用程序输入一个名称，同意 Discord 的[**开发者服务条款**](https://support-dev.discord.com/hc/articles/8562894815383-Discord-Developer-Terms-of-Service)和[**开发者政策**](https://support-dev.discord.com/hc/articles/8563934450327-Discord-Developer-Policy)，然后点击 **Create**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_2.png" style={{width:1000, height:'auto'}}/></div>

:::note
您的 Discord 账户需要绑定一个有效的电子邮件地址才能继续。如果您的账户尚未绑定电子邮件，请按照以下说明操作：[如何更改账户的电子邮件地址](https://support.discord.com/hc/en-us/articles/4423385681175-How-to-Change-Your-Account-s-Email-Address)
:::

### 第 5 步：配置 Bot 设置

现在我们将配置 bot 设置。请按照以下步骤操作：

1. 在应用程序页面的左侧边栏中，点击 **Settings** 下的 **Bot** 标签。

2. 在 **Privileged Gateway Intents** 部分，您会看到几个选项。本教程中，我们只需要启用 **MESSAGE CONTENT INTENT**。这允许您的 bot 读取消息内容。切换 **MESSAGE CONTENT INTENT** 开关以启用它。启用后，开关将变为蓝色。

每当您对 bot 进行更改时，页面底部会弹出提示，要求您 **Save Changes**。请确保在继续之前保存更改。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_3.png" style={{width:1000, height:'auto'}}/></div>

:::note
根据您应用程序的用途，可能需要启用其他意图。对于更复杂的 bot 功能，您可能需要启用其他意图，例如 **PRESENCE INTENT** 或 **SERVER MEMBERS INTENT**。不过，对于本教程中仅发送消息的场景，启用 **MESSAGE CONTENT INTENT** 即可。
:::

在 Bot 页面顶部，您还会看到一个名为 **Token** 的部分。点击 **Reset Token** 按钮为您的 bot 生成一个新令牌。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_4.png" style={{width:1000, height:'auto'}}/></div>

请注意，重置令牌会导致您的 bot 停止工作，直到您在 bot 的代码中更新令牌。在继续重置之前，请确保您已准备好更新 bot 的配置。

您可能会被要求进行多因素身份验证。如果是这样，请按要求完成此步骤后再继续。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_5.png" style={{width:1000, height:'auto'}}/></div>

复制此令牌并妥善保存。稍后您需要使用此令牌在 Node-RED 中验证您的机器人。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_6.png" style={{width:1000, height:'auto'}}/></div>

:::warning
切勿公开分享您的机器人令牌。任何拥有您的令牌的人都可以控制您的机器人。如果您不小心泄露了令牌，请立即在此页面上重置它。
:::

### 第6步：配置 OAuth2 设置

现在，切换到 **Settings** 下的 **OAuth2** 标签，然后向下滚动直到看到 **OAuth2 URL Generator**。在这里，我们将勾选 **bot** 范围，因为我们正在创建一个机器人应用程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_7.png" style={{width:1000, height:'auto'}}/></div>

选择机器人范围后，将出现一个新框，允许您选择 **Bot Permissions**。在本教程中，我们将为机器人授予 **Administrator** 权限，这将使机器人能够访问所有功能。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_8.png" style={{width:1000, height:'auto'}}/></div>

:::warning
授予机器人管理员权限将使其能够完全访问服务器的所有功能。在生产环境中，建议遵循最小权限原则，仅授予机器人完成其预期功能所需的特定权限。
:::

最后，向下滚动以查看您新生成的 URL。复制此 URL 并将其粘贴到您的网页浏览器的地址栏中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_9.png" style={{width:1000, height:'auto'}}/></div>

### 第7步：授予机器人访问服务器的权限

系统会提示您选择要添加机器人的服务器。从下拉菜单中选择适当的服务器，然后点击 **Continue**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_10.png" style={{width:1000, height:'auto'}}/></div>

在下一个屏幕中，您将看到您授予机器人的权限的详细列表。这些权限基于您在 [**第6步**](#step-6-configure-oauth2-settings) 的 OAuth2 URL 生成器中选择的内容。仔细检查每个权限，然后点击 **Authorize**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_11.png" style={{width:1000, height:'auto'}}/></div>

与 [**第5步**](#step-5-configure-bot-settings) 类似，您可能会再次被要求进行多因素身份验证。如果是这样，请按要求完成此步骤后再继续。

授权成功后，您将看到一条确认消息，表明机器人已添加到您选择的 Discord 服务器。现在，返回您的 Discord 服务器继续操作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_12.png" style={{width:1000, height:'auto'}}/></div>

### 第8步：获取频道 ID

进入您的 Discord 服务器后，点击屏幕底部靠近您的个人资料信息的齿轮图标 (⚙️)。这将打开您的用户设置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_13.png" style={{width:1000, height:'auto'}}/></div>

在用户设置侧边栏中，向下滚动到 **App Settings** 部分并点击 **Advanced**。确保 **Developer Mode** 开关已打开。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_14.png" style={{width:1000, height:'auto'}}/></div>

关闭用户设置并返回到您的 Discord 服务器。右键点击您想要使用的频道（在本教程中，我们使用的是 **general** 频道）。在出现的上下文菜单底部，点击 **Copy Channel ID**。保存此频道 ID，以便在您的 Node-RED 流中使用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_15.png" style={{width:1000, height:'auto'}}/></div>

:::note
频道 ID 是每个 Discord 频道的唯一标识符。请确保将其保密，不要公开分享。
:::

## 第3部分：将 Discord 与 Node-RED 集成

### 第9步：安装 Discord 模块

点击三条横线图标，然后点击 **Manage palette** 选项。这将打开一个新窗口，您可以在其中添加或移除节点。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_2.5.png" style={{width:1000, height:'auto'}}/></div>

切换到调色板管理窗口中的 **Install** 标签。在搜索栏中输入 `discord` 以找到模块。然后，点击 **node-red-contrib-discord-advanced** 条目旁边的 **install** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_3.png" style={{width:1000, height:'auto'}}/></div>

我们还建议查看 [**节点文档**](https://github.com/Markoudstaal/node-red-contrib-discord-advanced/blob/main/README.md) 和相关的 [**Github 仓库**](https://github.com/Markoudstaal/node-red-contrib-discord-advanced)，以便更深入地了解模块的工作原理以及如何最大化其潜力。

:::note
**node-red-contrib-discord-advanced** 模块因其在撰写本教程（2024年8月）时的兼容性和可靠性而被推荐。然而，Node-RED 模块的可用性和功能可能会随时间变化。建议在 Node-RED 库或 GitHub 仓库中查看最新的用户反馈和兼容性说明。如果您在使用此模块时遇到问题，可以考虑探索 Node-RED 库中列出的其他 Discord 模块，以找到更适合的选项。
:::

### 第 10 步：配置 Discord 节点

安装 Discord 模块后，将 **discordMessageManager** 节点拖到 Node-RED 流程中，并将其连接到函数节点。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_4.png" style={{width:1000, height:'auto'}}/></div>

双击 **discordMessageManager** 节点以打开其配置面板。点击 **token** 字段旁边的加号图标，添加一个新的 Discord API 令牌配置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_5.png" style={{width:700, height:'auto'}}/></div>

在新窗口中，输入以下信息：
- Token：输入你在 [**第 5 步**](#step-5-configure-bot-settings) 中获取的令牌
- Name：为你的令牌配置命名

然后，点击 **Add** 或 **Update** 保存配置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_6.png" style={{width:700, height:'auto'}}/></div>

在 **Channel** 字段中，输入你在 [第 8 步](#step-8-obtain-channel-id) 中获取的频道 ID。然后点击 **Done** 关闭配置面板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_6.5.png" style={{width:700, height:'auto'}}/></div>

:::note
对于具有多个频道和触发条件的更复杂设置，你可以将 Channel 字段留空，并使用 `msg.channel` 动态设置频道。然而，在本基础教程中，我们将使用静态频道 ID。
:::

### 第 11 步：部署

最后，点击 Node-RED 界面右上角的 **Deploy** 按钮。一旦部署完成，你的 Watcher 将向 Node-RED 发送消息，随后消息会被转发到你的 Discord 频道。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_7.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_16.png" style={{width:1000, height:'auto'}}/></div>

恭喜你！你已成功配置 Watcher，通过 Node-RED 将消息发送到 Discord。这一设置确保了每当 Watcher 被触发时，你都能在 Discord 频道中实时收到通知。通过这种方式，你为开发项目解锁了无数激动人心的可能性。我们期待你创造出更多创新的解决方案！

## 故障排除

在将 Discord 与 Node-RED 集成时，你可能会遇到一些错误。以下是两个常见错误及其详细解决步骤：

### 错误：使用了不允许的 intents

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_Error_1.png" style={{width:1000, height:'auto'}}/></div>

此错误发生在你的机器人尝试使用尚未在 Discord 开发者门户中启用的 intents 时。解决方法如下：

1. 访问 [**Discord 开发者门户**](https://discord.com/developers/applications)。
2. 选择你的应用程序。
3. 点击左侧边栏中的 **Bot**。
4. 向下滚动到 **Privileged Gateway Intents** 部分。
5. 启用你的机器人需要的 intents（通常是 **Presence Intent**、**Server Members Intent** 和 **Message Content Intent**）。
6. 点击页面底部的 **Save Changes**。
7. 重新部署你的 Node-RED 流程。

### DiscordAPIError&#91;50001&#93;：缺少访问权限

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_Error_2.png" style={{width:1000, height:'auto'}}/></div>

此错误表明你的机器人没有执行操作所需的权限。解决方法如下：

1. 确保你的机器人已被邀请到服务器并具有正确的权限：
- 访问 [**Discord 开发者门户**](https://discord.com/developers/applications)。
- 选择你的应用程序并进入 **OAuth2** 部分。
- 在 **URL Generator** 中，选择 **bot** 作为 **SCOPES**。
- 在 **BOT PERMISSIONS** 下，选择你的机器人需要的权限（至少需要 **Send Messages** 和 **View Channels**）。
- 复制生成的 URL 并在新标签页中打开，以这些权限邀请机器人加入你的服务器。

2. 检查频道权限：
- 在 Discord 中，右键点击你尝试发送消息的频道。
- 点击 **Edit Channel** > **Permissions**。
- 确保你的机器人角色具有必要的权限，尤其是 **View Channel** 和 **Send Messages**。

3. 验证频道 ID：
- 仔细检查你在 Node-RED 配置中输入的频道 ID 是否正确。
- 确保你使用的是文本频道的 ID，而不是语音频道或分类的 ID。

4. 检查你的机器人令牌：
- 确保 Node-RED 配置中的令牌是正确且最新的。
- 如果不确定，可以在 Discord 开发者门户的 **Bot** 部分重新生成令牌。

5. 在完成这些更改后，重新部署你的 Node-RED 流程。

如果尝试这些步骤后仍然遇到问题，请查看 [**Discord API 文档**](https://discord.com/developers/docs/reference) 或在 [**Discord 开发者社区**](https://discord.com/invite/discord-developers) 中寻求更具体的帮助。

## 技术支持与产品讨论

感谢你选择我们的产品！我们致力于为你提供多种支持，以确保你使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>