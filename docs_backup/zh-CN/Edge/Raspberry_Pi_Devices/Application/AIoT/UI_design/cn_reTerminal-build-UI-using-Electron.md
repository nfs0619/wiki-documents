---
description: 使用 Electron 为 reTerminal 构建用户界面
title: 使用 Electron 为 reTerminal 构建用户界面
keywords:
  - Edge
  - reTerminal 应用
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal-build-UI-using-Electron
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-17.png" alt="pir" width="1000" height="auto"/></p>

## 简介

本篇 Wiki 讲解了如何使用 Electron 构建您自己的用户界面。Electron 是一个开源框架，用于使用 HTML、CSS 和 JavaScript 等 Web 技术创建原生桌面应用程序（Windows、Mac、Linux）。这意味着如果您可以构建一个网站，那么您也可以构建一个桌面应用程序！

通过以下指南，您将能够创建一个应用程序，通过点击 LCD 上的按钮来控制 reTerminal 的 GPIO 引脚。那么让我们开始吧！

## 准备开发环境

### 在 reTerminal 上

首先，我们将在 reTerminal 上安装 **Node.js** 和 **npm**。npm 是 Node.js 包的包管理器。

- **步骤 1.** 使用 **板载 LCD、外部显示器或 SSH** 访问 reTerminal，具体操作请参考[这里](https://wiki.seeedstudio.com/reTerminal/#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet)

- **步骤 2.** 升级软件包

```sh
sudo apt update
sudo apt full-upgrade 
```

- **步骤 3.** 下载安装 Node.js 的脚本

```sh
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
```

- **步骤 4.** 安装 Node.js

```sh
sudo apt install -y nodejs
```

Node.js 现在已经安装在 reTerminal 上。要检查安装是否成功，请运行以下命令以检查 **Node.js** 和 **npm** 的版本：

```sh
node -v
npm -v
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/node-2.png" alt="pir" width="300" height="auto"/></p>

### 在主机 PC 上

现在，我们将在主机 PC 上设置 Microsoft Visual Studio Code 以进行开发。

- **步骤 1.** 下载并安装 [Microsoft Visual Studio Code](https://code.visualstudio.com/)

**注意：** 下载适合您操作系统的安装程序

- **步骤 2.** 点击左侧导航菜单中的 **扩展** 标签，然后在搜索框中输入 **remote development**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remote-dev-extension.png" alt="pir" width="800" height="auto"/></p>

- **步骤 3.** 选择 **Remote Development** 并点击 **安装**

- **步骤 4.** 按下键盘上的 **F1**，输入 **ssh** 并选择 **Remote-SSH:Connect to Host...**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remote-ssh.png" alt="pir" width="800" height="auto"/></p>

- **步骤 5.** 输入以下内容

```sh
pi@192.xxx.xx.xx
```

**注意：** **pi** 是用户名，**192.xxx.xx.xx** 是 reTerminal 的 IP 地址

- **步骤 6.** 输入用户的密码

现在，您已经成功通过 SSH 登录到 reTerminal，并成功完成了开发环境的准备工作。

## 智能灯 Electron 应用程序

现在我们将构建一个 **智能灯 Electron 应用程序**，通过按下 LCD 上的按钮来控制 reTerminal 的 GPIO。之后，您可以将继电器连接到 GPIO 并控制家用电器！

### 硬件连接

我们将把一个 **LED** 连接到 reTerminal 的 **GPIO 24** 以进行测试。稍后，您可以添加一个继电器并使用 GPIO 控制家用电器！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/LED-connection-1.png" alt="pir" width="1000" height="auto"/></p>

**注意：** GPIO 引脚和 LED 之间需要一个电阻，否则 LED 会烧毁。

### 创建并初始化应用程序

- **步骤 1.** 在主机 PC 上打开 VSCode，并按照之前的说明通过 SSH 登录到 reTerminal

- **步骤 2.** 导航到 `File > Open Folder...`，然后选择 reTerminal 上的一个文件夹

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-1.png" alt="pir" width="600" height="auto"/></p>

- **步骤 3.** 创建一个新文件夹并命名

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-2.png" alt="pir" width="550" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-3.png" alt="pir" width="550" height="auto"/></p>

- **步骤 4.** 导航到 `Terminal > New Terminal`，然后导航到新创建的文件夹

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-4.png" alt="pir" width="550" height="auto"/></p>

**注意：** 这里我们使用 **cd** 来更改目录

- **步骤 5.** 在终端窗口中输入以下内容，以创建一个带有我们 Node.js 应用程序所需配置的 **package.json** 文件

```sh
npm init
```

**注意：** 持续按 **ENTER** 使用默认答案，但将 **entry point: (index.js)** 设置为 **main.js**，并将 **test command:** 设置为 **electron .**（在 **electron** 后使用一个空格和一个点）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-5.png" alt="pir" width="550" height="auto"/></p>

如果您想稍后更改配置，可以访问主应用程序文件夹中的 **package.json** 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-6.png" alt="pir" width="650" height="auto"/></p>

- **步骤 6.** 在 VSCode 的终端中输入以下内容以安装 **Electron**

```sh
npm install --save-dev electron
```

如果 Electron 成功安装，您将看到以下输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-7.png" alt="pir" width="700" height="auto"/></p>

您还将看到生成的 **node_modules** 文件夹，其中包含运行 Electron 所需的包

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-8.png" alt="pir" width="500" height="auto"/></p>

#### 安装 onoff npm 模块

onoff npm 模块允许您通过 Electron 应用程序访问和控制 reTerminal 的 GPIO

- **步骤 1.** 按照之前的说明在 VSCode 中打开一个终端窗口，并导航到我们的主应用程序目录

- **步骤 2.** 输入以下内容以安装 **onoff** npm 模块

```sh
npm install onoff
```

#### 安装并运行 electron-rebuild npm 模块

electron-rebuild npm 模块会根据您的 Electron 项目使用的 Node.js 版本重新构建本机 Node.js 模块。这使您可以在 Electron 应用程序中使用本机 Node.js 模块，而无需系统版本的 Node.js 完全匹配（这通常不是这种情况，有时甚至不可能）。

- **步骤 1.** 安装 **electron-rebuild** npm 模块

```sh
npm install --save-dev electron-rebuild
```

- **步骤 2.** 运行 electron-rebuild

```sh
./node_modules/.bin/electron-rebuild
```

**注意：** 每当您安装新的 npm 包时，请重新运行 electron-rebuild

### 创建 HTML（基础 UI）

我们将使用 HTML 文件创建没有任何样式的基础用户界面。此 HTML 文件负责在屏幕上显示 UI 元素。

在我们的主应用程序目录中，创建一个名为 **index.html** 的新文件，并复制以下代码：

```html
<!doctype html>
<html>
    <head>
        <!-- 指定 HTML 文档的字符编码 -->
        <meta charset="UTF-8">
        <!-- 应用程序标题栏 -->
        <title>测试应用程序</title>
        <!-- 加载 material icons API -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <!-- 加载 Google 字体 API -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
        <!-- 加载带有 UI 样式的 style.css -->
        <link rel="stylesheet" href="style.css">
        <!-- 嵌入 JavaScript 代码 -->
        <script>
            // 加载 ipcRenderer 模块
            const { ipcRenderer } = require('electron');
            // 按下按钮时打开 GPIO 的函数
            function buttonclick1()
            {
                // 这将以 "msg" 作为通道名称向主进程发送 1 作为消息
                ipcRenderer.send("msg1",1)
            }
            
            // 按下按钮时关闭 GPIO 的函数
            function buttonclick2()
            {
                ipcRenderer.send("msg2",0)
            }

            // 按下按钮时关闭应用程序的函数
            function buttonclick3()
            {
                ipcRenderer.send("close-me")
            }
        </script>
    </head>
    <body>
        <!-- 应用程序关闭按钮 -->
        <button class="button3" onclick="buttonclick3()">X</button>
        <br>
        <!-- 应用程序标题 -->
        <h1>智能灯</h1>
        <!-- 来自 material icons API 的灯泡图标 -->
        <i class="material-icons">lightbulb</i>
        <br>
        <!-- 空行 -->
        <br>
        <!-- 带有样式类属性的 ON 按钮 
        和用于按钮点击事件的 onclick 属性 -->
        <button class="button1" onclick="buttonclick1()">ON</button>
        <br>
        <button class="button2" onclick="buttonclick2()">OFF</button>
    </body>
</html>
```

**注意：** **ipcRenderer 模块**是一个 EventEmitter。它提供了一些方法，可以让您从渲染进程（网页 - HTML/CSS）向主进程（main.js）发送消息。您还可以从主进程接收回复。

现在我们已经完成了 HTML 文件的创建。

运行 **npm test**，您将看到以下输出：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-15.png" alt="pir" width="1000" height="auto"/></p>

### 创建 CSS（样式）

我们将使用 CSS 文件为通过 HTML 文件创建的用户界面添加不同的样式。

在主应用程序目录中，创建一个名为 **style.css** 的新文件，并复制以下代码：

```css
/* 应用程序主体的样式 */
body {
    background-color: rgb(141, 141, 141);
}

/* 应用程序标题的样式 */
h1 {
    font-size: 60px;
    text-align: center;
    font-family: "Roboto", "Courier New", monospace;
    color: rgb(255, 255, 255);
}

/* 灯泡的样式 */
.material-icons{
    font-size: 250px;
    color: rgb(204, 202, 71);
    display: flex;
    justify-content: center;
}

/* ON 按钮的样式 */
.button1 {
    display: inline-block;
    padding: 15px 25px;
    font-size: 35px;
    text-align: center;
    outline: none;
    color: rgb(255, 255, 255);
    background-color:rgb(76, 175, 80);
    border: none;
    border-radius: 15px;
    width: 20%;
    margin:auto;
    display:grid;
  }

/* ON 按钮的按压效果 */
.button1:active {
  box-shadow: 0 5px rgb(104, 99, 99);
  transform: translateY(4px);
}

/* ON 按钮的悬停效果 */
.button1:hover {background-color: rgb(62, 142, 65)}

/* OFF 按钮的样式 */
.button2 {
    display: inline-block;
    padding: 15px 25px;
    font-size: 35px;
    text-align: center;
    outline: none;
    color: rgb(255, 255, 255);
    background-color:rgb(207, 85, 85);
    border: none;
    border-radius: 15px;
    width: 20%;
    margin:auto;
    display:grid;
}

/* OFF 按钮的按压效果 */
.button2:active {
  box-shadow: 0 5px rgb(104, 99, 99);
  transform: translateY(4px);
}
  
/* OFF 按钮的悬停效果 */  
.button2:hover {background-color: rgb(179, 44, 44)}

/* 关闭按钮的样式 */
.button3 {
  padding: 8px 25px;
  font-size: 20px;
  text-align: center;
  outline: none;
  color: rgb(255, 255, 255);
  background-color:rgb(179, 44, 44);
  border: none;
  width: 6%;
  margin:auto;
  display:grid;
  float: right;
}
```

应用程序的最终输出如下所示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-16.png" alt="pir" width="1000" height="auto"/></p>

### 创建 Javascript（加载并执行应用程序）

我们将使用 Javascript 文件来创建应用程序窗口、加载 HTML 文件并添加 GPIO 功能。

在主应用程序目录中，创建一个名为 **main.js** 的新文件，并复制以下代码：

```javascript
var Gpio = require('onoff').Gpio; // 引入 onoff 模块以与 GPIO 交互
var LED = new Gpio(24, 'out'); // 初始化 GPIO 24 为输出

// 引入 app、BrowserWindow 和 ipcMain 模块
const { app, BrowserWindow, ipcMain } = require('electron')
/* 使用 ipcMain 模块接收来自 ipcRenderer 模块的消息并打开 GPIO */
ipcMain.on("msg1",(event,data)=>{
  LED.writeSync(data);
})

/* 使用 ipcMain 模块接收来自 ipcRenderer 模块的消息并关闭 GPIO */
ipcMain.on("msg2",(event,data)=>{
  LED.writeSync(data);
})

/* 使用 ipcMain 模块接收来自 ipcRenderer 模块的消息并关闭应用程序 */
ipcMain.on("close-me", (event, arg) => {
    app.quit()
})

// 创建应用程序窗口
app.on('ready', function() {
    var mainWindow = new BrowserWindow({
        // 使应用程序全屏
        "fullscreen": true,
        webPreferences: {
            // 启用主进程与渲染进程之间的通信
            nodeIntegration: true,
            contextIsolation: false
          }
    });
    // 加载带有 CSS 样式的 HTML 页面
    mainWindow.loadFile('index.html');
});
```

**注意：** **ipcMain** 提供了一些方法，可以接收从渲染进程（网页）发送的消息。

### 测试应用程序

由于我们已经启用了 **electron-rebuild**，保存前面的文件后，您将立即看到输出。然而，如果您关闭了应用程序，可以通过运行 **npm test** 再次打开它，并看到以下输出：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-17.png" alt="pir" width="1000" height="auto"/></p>

## 准备运行应用程序的脚本

- **步骤 1.** 打开我们之前创建的根文件夹，并在该文件夹下创建一个新的 **.sh 文件**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-18.png" alt="pir" width="350" height="auto"/></p>

- **步骤 2.** 打开创建的文件并输入以下内容

```sh
#!/bin/bash
cd $HOME/Desktop/testapp
DISPLAY=:0 npm test
```

**注意:** 这里 **$HOME/Desktop/testapp** 是 Electron 项目的位置

- **步骤 3.** 在 VSCode 中打开一个终端窗口并导航到应用程序的根目录

```sh
示例:
cd ~/Desktop/testapp
```

- **步骤 4.** 将 ledstart.sh 文件设置为可执行文件

```sh
sudo chmod +x ledstart.sh
```

## 准备一个桌面文件以启动应用程序

- **步骤 1.** 打开 **Desktop 文件夹**，并在该文件夹下创建一个新的 **.desktop 文件**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-20.png" alt="pir" width="340" height="auto"/></p>

- **步骤 2.** 打开创建的文件并输入以下内容

```sh
[Desktop Entry]
Encoding=UTF-8
Name=LED Test
Comment=IconTest Link
Exec=/home/pi/Desktop/testapp/ledStart.sh
Type=Application
Categories=Application;Development;
```

**注意:** **Exec** 是我们之前创建的脚本的位置

- **步骤 3.** 在 VSCode 中打开一个终端窗口并导航到 Desktop 文件夹

```sh
示例:
cd ~/Desktop
```

- **步骤 4.** 将 **ledStart.desktop** 文件设置为可执行文件

```sh
sudo chmod +x ledStart.desktop
```

### 启动应用程序

双击 reTerminal LCD 桌面上的 **LED Test** 文件

您将看到如下输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-17.png" alt="pir" width="1000" height="auto"/></p>

现在您可以点击按钮，您将看到 LED 灯亮起！

## 调试应用程序

让我们了解在开发过程中调试应用程序的流程

- **步骤 1.** 使用 **Microsoft Visual Studio Code** 通过 **SSH** 登录到 reTerminal

- **步骤 2.** 使用支持 **X11 服务器功能** 的 SSH 应用程序（例如 [MobaXterm](https://mobaxterm.mobatek.net/)）通过 SSH 登录到 reTerminal

**注意:** X11 需要将 reTerminal 显示转发并弹出到 PC 上

- **步骤 3.** 在 Microsoft Visual Studio Code 中编写所有代码到 reTerminal 后，导航到主应用程序目录并运行以下命令

```sh
npm test
```

最终，您将在新窗口中看到输出。如果代码中有任何错误，它们将显示在 MobaXterm 的终端窗口中。

## 常见问题

### 问: 如何设置应用程序的自动更新功能以便在保存时更新？

为此，您可以使用 electron-reloader npm 模块设置热重载功能

- **步骤 1.** 安装 **electron-reloader**

```sh
npm install --save-dev electron-reloader
```

- **步骤 2.** 在 **main.js** 文件的末尾添加以下代码

```javascript
try {
  require('electron-reloader')(module)
} catch (_) {}
```

现在使用 **npm test** 运行文件一次，应用程序将在您保存文件时自动更新。您不需要每次更改项目内容时都运行 **npm test**。

## 额外演示

如果您想体验一个更有趣的基于 Electron 的演示，可以查看 [这个 GitHub 仓库](https://github.com/lakshanthad/Electron_reterminal_hardware)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/electron-reterminal-hw-demo.jpg" alt="pir" width="1000" height="auto"/></p>

## 资源

- **[GitHub]** [Electron_reTerminal_Smart_Lamp_UI](https://github.com/lakshanthad/Electron_reTerminal_Smart_Lamp_UI)
- **[网页]** [Electron 文档](https://www.electronjs.org/docs/api)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得顺畅的体验。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>