---
description: 使用 Flutter 为 reTerminal 开发
title: 使用 Flutter 为 reTerminal 开发
keywords:
  - Edge
  - reTerminal 应用
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal-build-UI-using-Flutter
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-13.png" alt="pir" width="800" height="auto"/></p>

## 简介

本篇 Wiki 介绍了如何使用 Flutter 构建自己的用户界面。Flutter 是由 Google 创建的开源 UI 软件开发工具包，用于从单一代码库开发适用于 Android、iOS、Linux、Mac、Windows、Google Fuchsia 和 Web 的跨平台应用程序。这意味着您可以使用一种编程语言和一个代码库来创建两个不同的应用程序（适用于 iOS、Android 等）。

要使用 Flutter 开发，您需要一种名为 Dart 的编程语言。Dart 是一种开源的、通用的、面向对象的编程语言，具有 C 风格的语法，由 Google 开发。

在这里，我们将使用 Flutter 在 PC 上开发一个应用程序，然后使用 flutter-pi 在 reTerminal 上运行该应用程序。flutter-pi 是一个轻量级的 Flutter 引擎嵌入器，适用于无需 X 的 Raspberry Pi。这意味着您无需启动到 Raspberry Pi OS 桌面并加载 X11 和 LXDE。您只需启动到命令行并运行您的应用程序。

通过以下指南，您将能够创建一个应用程序，通过点击 LCD 上的按钮来控制 reTerminal 的 GPIO 引脚。那么让我们开始吧！

## 准备开发环境

### 在 reTerminal 上

首先，我们需要在 reTerminal 上安装 **flutter-pi**。

> 点击 [这里](https://github.com/ardera/flutter-pi) 访问 flutter-pi 的 GitHub 仓库

- **步骤 1.** 按照 [此 Wiki](https://wiki.seeedstudio.com/reTerminal/#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet) 中的说明登录到 reTerminal，并在 reTerminal 上安装 **flutter 引擎二进制文件**

```sh
git clone --depth 1 https://github.com/ardera/flutter-engine-binaries-for-arm.git engine-binaries
cd engine-binaries
sudo ./install.sh
```

- **步骤 2.** 安装 cmake、图形库、系统库和字体

```sh
sudo apt install cmake libgl1-mesa-dev libgles2-mesa-dev libegl1-mesa-dev libdrm-dev libgbm-dev ttf-mscorefonts-installer fontconfig libsystemd-dev libinput-dev libudev-dev  libxkbcommon-dev
```

- **步骤 3.** 更新系统字体

```sh
sudo fc-cache
```

- **步骤 4.** 克隆 flutter-pi 并进入克隆的目录

```sh
git clone https://github.com/ardera/flutter-pi
cd flutter-pi
```

- **步骤 5.** 编译 flutter-pi

```sh
mkdir build && cd build
cmake ..
make -j`nproc`
```

- **步骤 6.** 安装 flutter-pi

```sh
sudo make install
```

- **步骤 7.** 打开 raspi-config

```sh
sudo raspi-config
```

- **步骤 8.** 切换到控制台模式，导航到 `System Options > Boot / Auto Login` 并选择 **Console 或 Console (Autologin)**

- **步骤 9.** 启用 V3D 图形驱动程序，导航到 `Advanced Options > GL Driver > GL (Fake KMS)`

- **步骤 10.** 配置 GPU 内存，导航到 `Performance Options -> GPU Memory` 并输入 **64**

- **步骤 11.** 按 **ESC** 键退出 **rasp-config** 窗口

- **步骤 12.** 赋予 reTerminal 使用 3D 加速的权限。（注意：可能存在安全隐患。如果您不想这样做，可以使用 **sudo** 启动 flutter-pi。）

```sh
usermod -a -G render pi
```

- **步骤 13.** 重启 reTerminal

```sh
sudo reboot
```

现在我们已经完成了在 reTerminal 上安装必要工具的步骤。

### 在主机 PC 上

接下来，我们需要为开发准备主机 PC。在这里，我们将安装 **Flutter SDK**（包含 Flutter 开发所需的必要包）、**Android Studio**（用于代码编辑）以及 **Android Emulator**（用于运行和测试代码）。

- **步骤 1.** 根据您的操作系统下载并安装 [Flutter SDK](https://flutter.dev/docs/get-started/install)

- **步骤 2.** 在终端窗口中输入以下命令，检查 Flutter SDK 是否成功安装

```sh
flutter --version
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/flutter-version.png" alt="pir" width="800" height="auto"/></p>

- **步骤 3.** 根据您的操作系统下载并安装 [Android Studio](https://developer.android.com/studio)

- **步骤 4.** 打开 Android Studio 并导航到 `Configure > Plugins`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-6.png" alt="pir" width="650" height="auto"/></p>

- **步骤 5.** 在 **Marketplace** 下的搜索框中输入 **flutter** 并点击 **Install**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-7.png" alt="pir" width="650" height="auto"/></p>

- **步骤 6.** 在提示窗口中点击 **Install** 以安装 **Dart** 插件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-8.png" alt="pir" width="650" height="auto"/></p>

- **步骤 7.** 点击 **Restart IDE** 以重启 IDE 并加载已安装的插件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-9.png" alt="pir" width="650" height="auto"/></p>

- **步骤 8.** 当 IDE 再次打开时，导航到 `Configure > AVD Manager`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/android-studio-open.png" alt="pir" width="800" height="auto"/></p>

- **步骤 9.** 点击 **Create Virtual Device**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-1.png" alt="pir" width="800" height="auto"/></p>

- **步骤 10.** 点击 **New Hardware Profile**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-2.png" alt="pir" width="800" height="auto"/></p>

- **步骤 11.** 按以下设置进行配置：

  - 设备名称：reTerminal
  - 设备类型：手机/平板
  - 屏幕：

- 屏幕尺寸：5英寸  
- 分辨率：1280 x 720  
- 内存：RAM：2048MB  
- 输入：[✓] 有硬件按钮（返回/主页/菜单）  
- 支持的设备状态：[✓] 横屏  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-3.png" alt="pir" width="800" height="auto"/></p>

- **步骤 12.** 点击 **Finish** 然后点击 **Next**

- **步骤 13.** 选择最新的 Android 镜像并点击 **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-4.png" alt="pir" width="800" height="auto"/></p>

- **步骤 14.** 在 **Emulated Performance** 下，选择 **Hardware - GLES 2.0** 以加速性能

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-5.png" alt="pir" width="800" height="auto"/></p>

- **步骤 15.** 最后点击 **Finish**

现在我们已经成功完成了开发环境的准备工作。

## 智能灯 Flutter 应用程序

### 硬件连接

我们将连接一个 LED 到 reTerminal 的 GPIO 24 以进行测试。稍后您可以添加一个继电器并使用 GPIO 控制家用电器！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/LED-connection-1.png" alt="pir" width="800" height="auto"/></p>

**注意：** GPIO 引脚和 LED 之间需要一个电阻，否则 LED 会烧毁。

### 创建并初始化应用程序

- **步骤 1.** 打开 Android Studio 并点击 **Create New Flutter Project**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-10.png" alt="pir" width="550" height="auto"/></p>

- **步骤 2.** **Flutter SDK 路径** 将自动配置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-11.png" alt="pir" width="800" height="auto"/></p>

**注意：** 如果此窗口中未列出 Flutter SDK 路径，您可以手动指向 Flutter SDK 的位置。

- **步骤 3.** 按如下填写项目详细信息并点击 **Finish**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-12.png" alt="pir" width="800" height="auto"/></p>

现在您的示例项目将打开，并显示 **main.dart**

### 创建 main.dart（主应用程序）

我们将在 **lib** 文件夹中的 **main.dart** 文件中创建 Flutter 应用程序。

打开 **main.dart** 文件并复制以下代码：

```dart
//库导入
import 'package:flutter/material.dart';
import 'package:flutter_gpiod/flutter_gpiod.dart';

//应用程序的入口点
void main() {
  runApp(MyApp());
}

// 这是主应用程序小部件。
class MyApp extends StatelessWidget {
  // GPIO 控制功能
  void ledState(state) {
    // 获取 GPIO 芯片列表。
    final chips = FlutterGpiod.instance.chips;

    // 获取第一个芯片的索引为 24 的线路。
    // 这是树莓派的 BCM 引脚 24。
    final chip = chips.singleWhere(
          (chip) => chip.label == 'pinctrl-bcm2711',
      orElse: () =>
          chips.singleWhere((chip) => chip.label == 'pinctrl-bcm2835'),
    );

    final line2 = chip.lines[24];

    // 请求 BCM 24 作为输出。
    line2.requestOutput(consumer: "flutter_gpiod test", initialValue: false);
    line2.setValue(state);
    line2.release();
  }

  @override
  Widget build(BuildContext context) {
    // MaterialApp 小部件
    return MaterialApp(
      // 隐藏右上角的调试横幅
      debugShowCheckedModeBanner: false,
      // Scaffold 小部件
      home: Scaffold(
        // 应用程序的背景颜色。
        // 在这里输入 "Colors." 后，Android Studio 将推荐可用的颜色。
        // 您还可以将鼠标悬停以检查由 [ ] 包围的数字分配的不同颜色变化。
        backgroundColor: Colors.grey[700],
        // AppBar 小部件
        appBar: AppBar(
          // 应用栏的背景颜色
          backgroundColor: Colors.black,
          // 在应用栏小部件中居中对齐文本
          title: Center(
            child: Text(
              'LIVING ROOM',
            ),
          ),
        ),
        body: Center(
          // Row 小部件
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              // ON 按钮功能
              ElevatedButton(
                child: Text('ON'),
                onPressed: () {
                  print('ON');
                  ledState(true);
                },
                // ON 按钮样式
                style: ElevatedButton.styleFrom(
                    primary: Colors.orange[700],
                    padding: EdgeInsets.symmetric(horizontal: 30, vertical: 10),
                    textStyle:
                    TextStyle(fontSize: 40, fontWeight: FontWeight.normal)),
              ),
              // Google Material 图标：灯泡
              Icon(
                Icons.lightbulb_outline,
                color: Colors.white,
                size: 200,
              ),
              // OFF 按钮功能
              ElevatedButton(
                child: Text('OFF'),
                onPressed: () {
                  print('OFF');
                  ledState(false);
                },
                // OFF 按钮样式
                style: ElevatedButton.styleFrom(
                    primary: Colors.orange[300],
                    padding: EdgeInsets.symmetric(horizontal: 30, vertical: 10),
                    textStyle:
                    TextStyle(fontSize: 40, fontWeight: FontWeight.normal)),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
```

#### 使用的 Flutter 小部件

Flutter 小部件使用一个现代框架构建，该框架受 React 的启发。核心思想是您通过小部件构建用户界面。小部件根据其当前配置和状态描述其视图应该是什么样子。

**StatelessWidget（无状态组件）：**  
无状态组件在描述用户界面时非常有用，当该界面部分仅依赖于对象本身的配置信息和组件被加载的 BuildContext 时，可以使用无状态组件。

**MaterialApp（Material 应用）：**  
MaterialApp 组件是一个封装了许多常用于 Material Design 应用程序的组件的组件。

**Scaffold（脚手架）：**  
Scaffold 组件提供了一个框架，用于实现 Flutter 应用的基本 Material Design 视觉布局结构。它提供了显示抽屉、Snackbar 和底部弹出框的 API。

**Appbar（应用栏）：**  
Appbar 是一个包含工具栏的组件，用于 Flutter 应用程序中。

**Row（行）：**  
Row 组件用于以水平数组的形式显示其子组件。我们将在此组件中使用 UI 元素。

**ElevatedButton（凸起按钮）：**  
ElevatedButton 组件包含一个按钮，可以按下并根据需要做出响应。

#### Google Material Icons（谷歌 Material 图标）

我们在应用中使用了来自 **Google Material Icons** 的 **lightbulb（灯泡）** 图标。要了解更多 Google Material Icons，请访问 [此链接](https://fonts.google.com/icons)，搜索一个按钮，选择按钮并查看该按钮的 Flutter 代码。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-14.png" alt="pir" width="800" height="auto"/></p>

### 安装 GPIO 库

接下来，我们将继续在 Flutter 应用程序中安装 GPIO 控制库。在这里，我们将使用一个名为 [flutter_gpiod](https://pub.dev/packages/flutter_gpiod/versions/0.4.0-nullsafety) 的 GPIO 库。

- **步骤 1.** 要安装 GPIO 库，请进入 Flutter 项目中的 **pubspec.yaml** 文件，并在 **dependencies:** 下添加以下内容：

```yaml
dependencies:
  flutter_gpiod: ^0.4.0-nullsafety
```

- **步骤 2.** 保存文件并点击 **Pub get**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-17.jpg" alt="pir" width="520" height="auto"/></p>

### 测试应用程序

- **步骤 1.** 打开 **main.dart** 文件

- **步骤 2.** 点击 **no device selected（未选择设备）** 按钮，并选择我们之前创建的 Android 设备

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-13.1.jpg" alt="pir" width="800" height="auto"/></p>

现在，您将看到以下输出：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-5.png" alt="pir" width="800" height="auto"/></p>

- **步骤 3.** 点击 **播放按钮** 运行应用程序

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-14.png" alt="pir" width="800" height="auto"/></p>

现在，您将在 Android 模拟器上看到以下应用程序运行：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-13.png" alt="pir" width="800" height="auto"/></p>

### 构建应用程序并传输到 reTerminal

接下来，我们将构建 Flutter 应用程序并将其传输到 reTerminal。

- **步骤 1.** 在 Android Studio 中打开一个终端窗口，导航到 `View > Tool Windows > Terminal`

- **步骤 2.** 输入以下命令以准备构建：

```sh
flutter clean
```

- **步骤 3.** 构建项目：

```sh
flutter build bundle
```

- **步骤 4.** 打开 reTerminal

**注意：** 您会注意到 reTerminal 启动到命令行模式。

- **步骤 5.** 将构建的项目传输到 reTerminal：

```sh
scp -r ./build/flutter_assets pi@<ip_address_of_reTerminal>:/home/pi/testapp
```

## 在 reTerminal 上启动应用程序

- **步骤 1.** 在 reTerminal 的命令行中输入以下内容：

```sh
flutter-pi /home/pi/testapp
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-13.png" alt="pir" width="800" height="auto"/></p>

当您按下 **ON** 和 **OFF** 按钮时，您会注意到连接到 GPIO 24 的 LED 会根据按钮的状态做出相应反应！

您还可以通过在 GPIO 引脚上添加继电器来扩展功能，从而控制家用电器，并在 reTerminal 上构建完整的智能家居解决方案！

## 额外演示

如果您想体验一个更有趣的 Flutter 演示，可以查看 [这个 GitHub 仓库](https://github.com/lakshanthad/Flutter_reTerminal_Smart_Home_UI)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/smart_home_demo.gif" alt="pir" width="800" height="auto"/></p>

## 资源

- **[GitHub]** [flutter-pi](https://github.com/ardera/flutter-pi)
- **[网页]** [官方 Flutter 文档](https://flutter.dev/docs)
- **[GitHub]** [Flutter 演示源代码](https://github.com/lakshanthad/Flutter_reTerminal_LED_UI)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时拥有流畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>