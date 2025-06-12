---
description: 从 Watcher 和 Node-RED 发送消息到 p5.js
title: Watcher 和 Node-RED 到 P5JS
keywords:
- watcher
- p5js
image: https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/headpic.png
slug: /cn/watcher_node_red_to_p5js
last_update:
  date: 05/15/2025
  author: Allen
---

# Watcher 和 Node-RED 到 p5.js 快速入门

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div class="table-center">
<iframe width="800" height="450" src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/p5js_video.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## 什么是 [p5.js](https://p5js.org/)

p5.js 是一个 JavaScript 库，它让编码对艺术家和设计师来说更加容易。它提供了一种简单的语法，用于创建图形、动画和交互式应用程序。通过支持在画布上绘图、处理用户输入以及多媒体功能，p5.js 非常适合创意编码项目、教育用途和数字艺术。它活跃的社区和丰富的资源帮助各个技能水平的用户快速入门。

## Node-RED 配置

### 第一步：在 Watcher 中运行任务

首先，您需要按照以下视频在 Watcher 中运行一个任务。如果您想了解更多，请点击 [这里](https://wiki.seeedstudio.com/getting_started_with_watcher_task/)。

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### 第二步：配置

您需要配置以下 4 个模块：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/1.png" style={{width:800, height:'auto'}}/></div>

1. **OpenStream:** 从 Watcher 获取数据到 Node-RED。[详细信息请点击这里](https://wiki.seeedstudio.com/watcher_to_node_red/)。

2. **function:** 处理来自 Watcher 的数据。**双击** function 模块并将以下代码粘贴到其中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/2.png" style={{width:800, height:'auto'}}/></div>

```javascript
msg.payload = {
    content: msg.payload.value[0].content,
    image_url: msg.payload.value[0].image_url
};
return msg;
```

3. **http request:** 发送一个 <span id="post">POST 请求</span>到 **服务器**，然后再发送到 p5.js。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/3.png" style={{width:800, height:'auto'}}/></div>

4. **debug:** 查看输出信息以进行调试。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/4.png" style={{width:600, height:'auto'}}/></div>

### 第三步：部署

完成配置后，别忘了点击 **Deploy** 部署。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/5.png" style={{width:800, height:'auto'}}/></div>

## 构建服务器

### 第四步：下载服务器代码

[请点击此链接](https://github.com/Seeed-Projects/SenseCAP_Watcher_WebSocket_P5js) 下载整个项目代码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/7.png" style={{width:1000, height:'auto'}}/></div>

### 第五步：运行服务器

在运行服务器之前，您需要先安装一些依赖包。

```npm install express body-parser cors ws```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/14.png" style={{width:600, height:'auto'}}/></div>

解压下载的包并进入文件夹，然后运行 ```node server.js``` 启动服务器。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/8.png" style={{width:800, height:'auto'}}/></div>

现在服务器正在监听端口 3000，因此来自 [Node-RED](#post) 的消息将被发送到此服务器，然后再发送到 p5.js。

## VScode 配置

### 第六步：安装扩展

您需要安装两个扩展，分别是 **Live Server** 和 **p5.vscode**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/6.png" style={{width:600, height:'auto'}}/></div>

### 第七步：打开项目

打开您刚刚下载的项目。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/12.png" style={{width:600, height:'auto'}}/></div>

打开后项目结构如下图所示。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/13.png" style={{width:600, height:'auto'}}/></div>

### 第八步：运行项目

打开 **sketch.js** 文件并点击 **Go Live** 按钮，这将在默认浏览器上本地运行项目。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/9.png" style={{width:1000, height:'auto'}}/></div>

效果如下图所示，此服务运行在端口 5500。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/10.png" style={{width:1000, height:'auto'}}/></div>

当检测到人员时，效果如下图所示。

:::tip
您需要保持 Node-RED 和 server.js 运行。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/11.png" style={{width:1000, height:'auto'}}/></div>

恭喜您成功完成了从 Watcher 到 p5.js 的旅程！您已经掌握了宝贵的技能，还有许多令人兴奋的功能等待您探索。继续尝试并享受创造的无限可能吧！

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式以满足不同的需求和偏好。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>