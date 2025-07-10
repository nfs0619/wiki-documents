---
description: 从 Watcher 和 Node-RED 发送数据到 MongoDB
title: Watcher 和 Node-RED 到 MongoDB
keywords:
- Watcher
- MongoDB
- Node-RED
image: https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Watcher_MongoDB_Cover.jpg
slug: /cn/watcher_node_red_to_mongodb
last_update:
  date: 05/15/2025
  author: Vincent
---

# Watcher 到 MongoDB 快速入门

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Watcher_MongoDB_Cover.jpg" style={{width:1000, height:'auto'}}/></div>

[**MongoDB**](https://www.mongodb.com/) 是一个强大的跨平台文档数据库，擅长处理结构化和非结构化数据。它灵活的、无模式的数据模型基于类似 JSON 的文档，非常适合需要动态查询和索引的应用程序。

使用 MongoDB 提供了一种简单的方法来**存储和利用来自 Watcher 的数据，以便进一步处理或用于其他项目应用。**

本教程将指导您如何使用 Watcher API 和 Node-RED 无缝地将数据发送到 MongoDB，这种设置非常适合需要实时数据处理和持久化的项目。

## 第 1 部分：在 Node-RED 中设置 Watcher

### 步骤 1：安装 Node-RED

首先，您需要按照以下视频在 Watcher 中运行一个任务。如果您想了解更多，请[点击这里](https://wiki.seeedstudio.com/getting_started_with_watcher_task/)。

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

此设置需要安装 Node-RED 和 Watcher API。如果您尚未安装 Node-RED 或将其与 Watcher API 连接，请从这里开始：[**Watcher 到 Node-RED 快速入门**](https://wiki.seeedstudio.com/watcher_to_node_red)。

### 步骤 2：为 MongoDB 准备数据

将 Watcher 与 Node-RED 集成后，下一步是为 MongoDB 准备来自 Watcher 的数据。在 Node-RED 中使用一个函数节点来适当地格式化数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_1.png" style={{width:1000, height:'auto'}}/></div>

在本教程中，我们将简单地返回所有 Watcher 数据。然而，您可以根据应用需求对数据进行转换。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_2.png" style={{width:1000, height:'auto'}}/></div>

#### 示例 Node-RED 函数节点格式化数据

```sh
msg.payload = {
    "tlid": msg.payload.value[0].tlid,
    "tn": msg.payload.value[0].tn,
    "content": msg.payload.value[0].content,
    "image_url": msg.payload.value[0].image_url,
    "timestamp": msg.payload.timestamp,
    "orgId": msg.payload.orgId,
    "eui": msg.payload.eui,
    "channel": msg.payload.channel,
    "measurementID": msg.payload.value[0].measurementID
};
return msg;
```

## 第 2 部分：设置 MongoDB

### 步骤 3：创建账户

接下来，创建一个 MongoDB 账户或登录您的现有账户。如果您是 MongoDB 的新用户，请访问 [**mongodb.com**](https://www.mongodb.com) 并注册一个免费账户。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_1.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 4：部署新集群

登录后，继续部署一个新集群：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_4.png" style={{width:1000, height:'auto'}}/></div>

1. **选择集群配置**：对于开发，我们推荐使用 M0 配置，因为它是免费的并且足够用于小规模测试。然而，您可以选择其他更符合项目需求的配置。
2. **选择云提供商**：我们选择了 AWS，因为它广泛可用且可靠，但其他提供商如 Google Cloud 或 Azure 也同样适合，具体取决于您的地理位置或技术需求。
3. **选择区域**：应选择离您的主要用户群最近的区域，以最大限度地减少延迟并提高性能。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_5.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 5：配置数据库安全性

集群创建完成后，导航到左侧边栏的 **Quickstart** 菜单下的 **Security**。在这里，您可以通过指定用户名和密码来创建一个数据库用户。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_6.png" style={{width:1000, height:'auto'}}/></div>

:::note
默认情况下，用户被授予对任何数据库的*读写*权限。您可以选择稍后更新这些权限和/或创建其他用户。
:::

设置用户后，保持在 **Quickstart** 页面并向下滚动，将您的当前 IP 地址添加到 IP 访问列表中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_7.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 6：创建数据库和集合

在左侧边栏中，点击 **Deployment** 类别下的 **Databases** 菜单。然后点击 **Browse Collections** 打开数据库管理页面。在这里，您可以管理所有的数据库和集合。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_8.png" style={{width:1000, height:'auto'}}/></div>

在数据库管理器中，点击 **Add My Own Data** 开始创建新的数据库和集合的过程。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_9.png" style={{width:1000, height:'auto'}}/></div>

一个提示框会出现，要求您输入新数据库和集合的名称。填写您希望的名称。

输入名称后，点击 **Create** 按钮以完成新数据库和集合的创建。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_10.png" style={{width:1000, height:'auto'}}/></div>

### 第 7 步：获取您的主机名

首先登录到您的 MongoDB Atlas 仪表板。从这里，导航到左侧边栏的 **Database** 菜单以找到您的集群。定位到您需要的集群并点击与之关联的 **Connect** 按钮。这将打开一系列连接选项。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_11.png" style={{width:1000, height:'auto'}}/></div>

在显示的连接选项中，点击 **Shell**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_12.png" style={{width:1000, height:'auto'}}/></div>

选择 MongoDB Shell 选项后，您将被引导到一个标题为 **Run your connection string in your command line** 的部分。在这里，您将看到完整的连接字符串。

在连接字符串中，找到 `mongodb+srv://` 之后到 `/` 字符之前的部分。这部分就是您的主机名。它通常包含您的集群名称，后接 `.mongodb.net`。

例如，如果您的连接字符串是：
```sh
mongosh "mongodb+srv://my-cluster123.mongodb.net" --apiVersion 1 --username my-username
```
主机名将是：
```sh
my-cluster123.mongodb.net
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_13.png" style={{width:1000, height:'auto'}}/></div>

## 第 3 部分：将 MongoDB 数据库连接到 Node-RED

### 第 8 步：安装 MongoDB 模块

点击三条横线图标，然后点击 **Manage palette** 选项。这将打开一个新窗口，您可以在其中添加或移除节点。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_3.png" style={{width:1000, height:'auto'}}/></div>

切换到调色板管理窗口中的 **Install** 标签。在搜索栏中输入 `mongodb-aleph` 以找到该模块。然后，点击 **node-red-contrib-mongodb-aleph** 条目旁边的 **install** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_4.png" style={{width:1000, height:'auto'}}/></div>

:::note
**node-red-contrib-mongodb-aleph** 模块在撰写本教程时（2024 年 7 月）因其当前的兼容性和可靠性而被推荐。然而，Node-RED 模块的可用性和功能可能会随时间变化。建议查看 Node-RED 库或 GitHub 仓库中的最新用户反馈和兼容性说明。如果您在使用此模块时遇到问题，可以考虑探索 Node-RED 库中列出的其他 MongoDB 模块，以找到更合适的选项。
:::

### 第 9 步：配置 MongoDB 节点

安装 MongoDB 模块后，将 **mongodb - aleph - out** 节点拖到您的 Node-RED 流程中，并将其连接到函数节点。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_5.png" style={{width:1000, height:'auto'}}/></div>

双击 MongoDB 节点进行配置。然后，点击服务器字段旁边的加号图标以添加新的服务器配置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_6.png" style={{width:1000, height:'auto'}}/></div>

1. 输入您之前获取的主机名。
2. 从下拉菜单中将连接拓扑更改为 **DNS Cluster \(mongodb+srv://\)**。
3. 输入您的 MongoDB 数据库名称。
4. 输入您在安全设置中配置的用户名。
5. 输入相应的密码。
6. 为您的 MongoDB 连接提供一个描述性名称，该名称将在 Node-RED 中使用。

然后，点击 **Add** 或 **Update** 以保存服务器配置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_7.png" style={{width:1000, height:'auto'}}/></div>

配置服务器后，您现在可以指定数据插入的详细信息：

1. 输入您希望插入数据的 MongoDB 集合名称。
2. 将操作设置为 **Insert**，这将向集合中添加新文档。

点击 **Done** 完成设置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_8.png" style={{width:1000, height:'auto'}}/></div>

### 第 10 步：部署

最后，通过点击 Node-RED 界面右上角的 Deploy 按钮来部署您的流程。此操作将激活您配置的节点，使数据从函数节点流向 MongoDB。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_9.png" style={{width:1000, height:'auto'}}/></div>

现在，您将在 MongoDB 中看到数据填充。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Watcher_Collection_Finished.png" style={{width:1000, height:'auto'}}/></div>

恭喜您成功将 Watcher 与 MongoDB 集成！您已经打开了开发工作中一系列令人兴奋的机会的大门。准备好创建利用 MongoDB 强大功能的创新应用程序吧。我们期待看到您接下来开发的卓越解决方案！

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>