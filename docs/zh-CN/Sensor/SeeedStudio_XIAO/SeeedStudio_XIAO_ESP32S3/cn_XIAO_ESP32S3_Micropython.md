---
description: 用于 XIAO ESP32S3 Sense 的 MicroPython
title: XIAO ESP32S3 项目 MicroPython
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/XIAO_ESP32S3_Micropython
last_update:
  date: 05/15/2025
  author: Hendra
---

# 用于 XIAO ESP32S3 Sense（摄像头、Wi-Fi）的 MicroPython

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

MicroPython 是 Python 3 编程语言的精简高效实现，它包含 Python 标准库的小子集，并针对微控制器和受限环境进行了优化。

自 2014 年首次推出以来，MicroPython 已支持许多微控制器，包括 Xiao ESP32S3 Sense 开发板中的主要芯片 ESP32S3。

在本页面中，我将指导您如何使用 MicroPython 的简单易用语法来发挥 Xiao ESP32S3 Sense 的功能。

## 硬件准备

这里我使用的是 Seeed Studio XIAO ESP32S3 Sense 开发板。

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## 软件准备

在本指南中，我将使用 **Windows 10**，以及 Thonny IDE 和 esptool。为了使用 esptool，请确保您的 Windows 操作系统上已安装 Python 3 环境。在开始之前，请下载固件并安装 Thonny。

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
          <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/XIAO_ESP32S3_Micropython.zip">
              <strong><span><font color={'FFFFFF'} size={"4"}> 下载 ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### 👍 特别感谢

<strong><font color={'8DC215'} size={"3"}>本 Wiki 中使用的 XIAO ESP32S3 Sense 板的固件由我们的朋友 shariltumin 设计，我们对此深表感谢。</font></strong>

## 开始使用

该固件仅为 XIAO ESP32S3 的 MicroPython 编程设计。我们将首先刷入固件，然后使用其中的示例代码。

### 第一步：刷入固件

通过打开设备管理器找到 USB 到串口的地址。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/device_manager.jpg" alt="pir" width={600} height="auto" /></p>

解压下载的 zip 文件并导航到文件夹。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/firmware%20folder.jpg" alt="pir" width={600} height="auto" /></p>

点击路径框，然后输入 "CMD" 并按回车键。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/cmd_on_folder.jpg" alt="pir" width={600} height="auto" /></p>

您将进入 CMD 终端。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/on_cmd.jpg" alt="pir" width={600} height="auto" /></p>

使用 pip 命令安装 esptool（确保已安装 Python 3）。
```cpp
pip install esptool
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/esptool_install.jpg" alt="pir" width={600} height="auto" /></p>

使用以下命令擦除 Xiao ESP32S3 的闪存：

```cpp
esptool.py --port COMXX erase_flash
```

现在使用以下命令安装 MicroPython 固件：
```cpp
esptool.py --port COMXX --baud 460800 --before default_reset --after hard_reset --chip esp32s3  write_flash --flash_mode dio --flash_size detect --flash_freq 80m 0x0 firmware.bin 
```

:::tip
将 COMXX 替换为您电脑上的 COM 端口号。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/device_manager.jpg" alt="pir" width={600} height="auto" /></p>

### 第二步：上传示例代码

现在我们将示例代码上传到 Xiao ESP32S3 Sense 的内部闪存。

在这部分中，我使用 Thonny IDE。首先，我配置端口。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/configure_port_thonny.png" alt="pir" width={600} height="auto" /></p>

然后在视图菜单中勾选文件选项。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/check_the_files.png" alt="pir" width={600} height="auto" /></p>

导航到解压后的示例代码文件夹，然后通过右键点击文件并选择如下图所示的选项上传文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/upload_the_file.png" alt="pir" width={600} height="auto" /></p>

在所有示例代码上传到 Xiao ESP32S3 板后，根据您的本地 Wi-Fi 配置更改 `streamin_server.py` 文件和 `Wifi.py` 文件中的 Wi-Fi 凭据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/wifi_configuration.png" alt="pir" width={600} height="auto" /></p>

### 第三步：测试流媒体示例

在测试流媒体之前，请确保使用 pip 安装 opencv Python 库：

```cpp
pip install opencv-python
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/install_opencv.png" alt="pir" width={600} height="auto" /></p>

成功安装 opencv Python 库后，返回 Thonny 并运行 `streamin_server.py`，然后复制 Xiao ESP32S3 板子的 IP 地址。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/run_the_script.png" alt="pir" width={600} height="auto" /></p>

接着，返回解压的 zip 文件夹，使用 Python 的 IDLE 打开 `steamin_client.py` 文件，并将 IP 地址部分修改为与 Xiao ESP32S3 板子相同。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/change_ip.png" alt="pir" width={600} height="auto" /></p>

然后尝试运行文件，你应该会看到一个新窗口显示来自 Xiao ESP32S3 Sense 板子的流媒体图像。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/run_the_client.jpeg" alt="pir" width={600} height="auto" /></p>

:::caution
在启动流媒体示例时，Xiao ESP32S3 Sense 板可能会变得非常热。
:::

## 更多内容

通过使用这些示例，你可以快速制作一个简单的 CCTV 项目。由于 Xiao ESP32S3 Sense 的尺寸较小，项目可以非常简洁。

## 故障排除

如果摄像头未成功初始化（显示一帧后冻结）或无法重新连接到 WiFi，请尝试拔掉板子并重新启动 Thonny IDE。

## ✨ 贡献者项目

- 此项目由 Seeed Studio [贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) 支持。
- 感谢 [Hendra 和 shariltumin 的努力](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35979545)，你的工作将被 [展示](https://wiki.seeedstudio.com/Honorary-Contributors/)。

## 技术支持与产品讨论

感谢你选择我们的产品！我们提供多种支持渠道，确保你在使用我们的产品时体验顺畅。以下是我们提供的沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>