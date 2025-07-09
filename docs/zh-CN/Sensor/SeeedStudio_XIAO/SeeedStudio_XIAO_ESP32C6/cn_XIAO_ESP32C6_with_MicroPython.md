---
description: XIAO ESP32C6 的 MicroPython 使用指南
title: 使用 MicroPython 的 XIAO ESP32C6
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao_esp32c6_micropython
last_update:
  date: 05/15/2025
  author: Hendra
---

# 用于 XIAO ESP32C6 的 MicroPython

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

MicroPython 是 Python 3 编程语言的一种精简高效的实现版本，它包含了 Python 标准库的一小部分，并针对微控制器和受限环境进行了优化。

自 2014 年首次发布以来，MicroPython 已支持许多微控制器，包括 ESP32 系列，但目前尚未正式支持 ESP32C6 芯片。本文档中的固件是自行编译的，官方固件正在开发中，请耐心等待。

在本页面中，我们将指导您如何使用 MicroPython 的简单语法来发挥 XIAO ESP32C6 的功能。

## 硬件准备

本文档中使用的是 Seeed Studio XIAO ESP32C6 开发板。

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32C6</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991254-seeedxiao-esp32c6-45font_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## 软件准备

在本指南中，我将使用 **Windows 10** 操作系统，并结合 Thonny IDE 和 esptool 工具。为了使用 esptool，请确保在 Windows 系统上安装了 Python 3 环境。在开始之前，请先下载固件并安装 Thonny。

<div class="table-center">
  <table align="center">
    <tr>
        <th>Thonny IDE</th>
        <th>固件和示例代码</th>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://thonny.org/">
              <strong><span><font color={'FFFFFF'} size={"4"}> 下载 ⏬</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/ESP32C6-MicroPy/XIAO_ESP32C6_Micropython.zip">
              <strong><span><font color={'FFFFFF'} size={"4"}> 下载 ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### 👍 特别感谢

<strong><font color={'8DC215'} size={"3"}>本文档中用于 XIAO ESP32C6 开发板的固件由我们的朋友 Zhishuo Song 制作，我们对此深表感谢。</font></strong>

## 入门指南

此固件专为 XIAO ESP32C6 的 MicroPython 编程设计。我们将首先刷入固件，然后运行示例代码。

### 第 1 步：刷入固件

通过打开设备管理器找到 USB 转串口的地址。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/device_manager.jpg" alt="pir" width={600} height="auto" /></p>

解压下载的压缩文件并导航到文件夹。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022205037972.png" alt="pir" width={600} height="auto" /></p>

点击路径框，然后输入 "CMD" 并按回车键。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022205105289.png" alt="pir" width={600} height="auto" /></p>

您将进入命令提示符窗口。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022204711119.png" alt="pir" width={600} height="auto" /></p>

使用 pip 命令安装 esptool（确保已安装 Python 3）。

```cpp
pip install esptool
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/esptool_install.jpg" alt="pir" width={600} height="auto" /></p>

使用以下命令擦除 XIAO ESP32C6 的闪存：

```cpp
esptool.py --port COMXX --chip esp32c6 erase_flash
```

接下来，使用以下命令安装 MicroPython 固件：

```cpp
esptool.py --port COMXX --baud 460800 --before default_reset --after hard_reset --chip esp32c6  write_flash --flash_mode dio --flash_size detect --flash_freq 80m 0x0 ESP32C6_MicroPython.bin
```

:::tip
将 COMXX 替换为您电脑上的端口号。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022205457866.png" alt="pir" width={600} height="auto" /></p>

### 第 2 步：上传示例代码

现在我们将示例代码上传到 XIAO ESP32C6 的内部闪存。

在此部分，我使用 Thonny IDE，首先配置端口。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022205437800.png" alt="pir" width={600} height="auto" /></p>

运行 `blinker.py` 示例程序。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022220104960.png" alt="pir" width={600} height="auto" /></p>

## 使用 NTP 从 WiFi 获取当前时间

### 第 1 步：在 Thonny 中打开 `wifi_Ntp.py` 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022220645986.png" alt="pir" width={600} height="auto" /></p>

### 第 2 步：修改第 8 行中的 WiFi 路由器 SSID 和密码

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022220714175.png" alt="pir" width={600} height="auto" /></p>

### 第 3 步：运行代码

运行程序时，您可以在 Shell 窗口中看到 XIAO 已连接到指定的 WiFi，并获取了 NTP 网络时间。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022220808948.png" alt="pir" width={600} height="auto" /></p>

## 故障排查

如果程序无法烧录，请尝试使用 BOOT 按钮和 RST 按钮将开发板设置为启动下载模式。

## ✨ 贡献者项目

- 本项目由 Seeed Studio [贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) 支持。
- 感谢 [Hendra 和 shariltumin 的努力](https://github.com/orgs/Seeed-Studio/projects/6/views/1?filterQuery=c6&pane=issue&itemId=59874459&issue=Seeed-Studio%7Cwiki-documents%7C1117)，您的工作将被[展示](https://wiki.seeedstudio.com/contributors/)。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>