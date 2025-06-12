---
description: 烧录原生固件
title: 更新和烧录固件  
keywords:
- SenseCAP 指示器
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_How_To_Flash_The_Default_Firmware
last_update:
  date: 05/15/2025
  author: Spencer
toc_max_heading_level: 4
sidebar_position: 3
---

# **如何烧录原生固件**

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


SenseCAP 指示器拥有两个MCU，分别是 ESP32-S3 和 RP2040。本教程提供了全面的指导，帮助开发者快速上手，包括烧录开箱即用的原生工厂固件以及将早期出厂设备更新到最新固件。

固件更新特别适用于以下两种场景：

1. 如果您在 2023 年 6 月之前购买了没有 OpenAI 固件的产品，固件版本为 `1.0.0`，您可以下载并更新到包含 OpenAI 功能的最新固件。最新固件可从 [这里](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases) 下载。
2. 如果您开发了一个应用程序并希望烧录自定义固件，可以按照 [下面提供的教程](#flash-esp32-s3-frimware-using-espressif-idf) 进行操作。

简而言之，您需要本教程，因为：
1. 您有一个固件需要烧录到 ESP32-S3 或 RP2040。
2. 您修改了代码，需要编译并烧录到设备。

让我们开始本教程。

## 准备工作

开始之前，您只需要准备您的 SenseCAP 指示器和一台 Windows/Mac/Linux 电脑。

<div align="center"><img width={200} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/usb1.png"/></div>

## 获取原生固件

SenseCAP 指示器的默认出厂固件是完全开源的，适用于 ESP32-S3 和 RP2040。

:::tip 您有两种方式获取开箱即用的固件：

- **源码：** 在烧录之前，您可以根据需求修改代码。您需要一个工具链（[ESP-IDF](#ESP-IDF)、[Arduino](#RP_Arduino)）来**编译**代码。
- **固件：** 直接烧录预编译的二进制文件，无需任何代码修改或编译。可以使用 [Esptool](#ESPTOOL) 和 [Flash Download Tools](#Flash_Tools) 等工具。
:::

**源码**

- [🖱️点击获取 ESP32-S3 固件源码](https://github.com/Seeed-Solution/sensecap_indicator_esp32)
- [🖱️点击获取 RP2040 Arduino 示例源码](https://github.com/Seeed-Solution/sensecap_indicator_rp2040)

**固件**

- [🖱️点击下载 ESP32-S3 固件](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases/tag/v1.0.0)
- [🖱️点击下载 RP2040 固件](https://github.com/Seeed-Solution/SenseCAP_Indicator_RP2040/releases/tag/v1.0.0)

## 针对 **ESP32-S3**

### **ESP-IDF** {#ESP-IDF}

> ESP-IDF（Espressif IoT Development Framework）是由 Espressif Systems 提供的软件开发框架，用于专门设计适用于其 ESP32 和 ESP8266 系列微控制器的固件和应用程序。有关更多信息，您可以参考 [ESP-IDF 编程指南](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/index.html)。

如果您选择将源码编译成固件，则需要使用 ESP-IDF 来完成编译过程。

:::note **注意**：
ESP-IDF 版本必须大于 v5.0。如果您使用的是旧版本，则需要更新到最新版本。
:::

对于新用户，以下视频可能会帮助您更好地理解以下步骤：

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/oqJz6zKfc4A?si=glzTFfR7m392eITb" title="在 Windows 上为 SenseCAP 指示器设置 ESP-IDF 工具链" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

#### **工具链安装**

<Tabs
groupId="operating-systems"
defaultValue='Win'
values={[
{label: 'Windows', value: 'Win'},
{label: 'Linux 和 MacOS', value: 'Unix'},
]}>
<TabItem value="Win">

  > 官方 Espressif 文档：[Windows 工具链标准设置](https://docs.espressif.com/projects/esp-idf/en/release-v5.1/esp32/get-started/windows-setup.html)

  **选项 1：使用离线安装程序**

  对于 Windows 用户，您可以直接下载 ESP-IDF 离线安装程序。以下是直接下载链接：[🖱️下载离线安装程序 v5.1.1](https://dl.espressif.com/dl/idf-installer/esp-idf-tools-setup-offline-5.1.1.exe)

  **选项 2：使用推荐的脚本**

  请参考 [使用命令提示符](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/windows-setup.html#using-the-command-prompt)

</TabItem>

<TabItem value="Unix">

  > 官方 Espressif 文档：[Linux 和 macOS 工具链标准设置](https://docs.espressif.com/projects/esp-idf/en/release-v5.1/esp32/get-started/linux-macos-setup.html)

  如果您使用 Linux 或 MacOS，可以按照以下指南更改 git 仓库版本。

  ```
  git clone --recursive https://github.com/espressif/esp-idf.git
  ```

**导航到 esp-idf 目录**：
1. 运行 `./install.sh esp32s3`，以添加 ESP32-S3 支持（SenseCAP 指示器需要）。
2. 输入 `./export.sh`，以在当前终端会话中设置 PATH 和 IDF_PATH 变量。

如果您希望在任何 shell 会话中调用，可以将以下行添加到您的 shell 配置文件（例如 ~/.bash_profile）：

```
alias get_idf='. $HOME/esp/esp-idf/export.sh'
```

然后您可以使用 `get_idf` 激活环境。[^refer](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/linux-macos-setup.html#step-4-set-up-the-environment-variables)

</TabItem>
</Tabs>

#### 构建项目并烧录 {#BUILD}

如果您选择将源码编译成固件，则需要使用 ESP-IDF 来完成编译过程。

<!-- 请区分使用 IDF 烧录编译固件和直接下载固件的操作！ -->

要构建、烧录并监控您的项目，请执行以下命令：

```
cd  <your_sdk_path>/examples/indicator_basis/
idf.py -p PORT build flash monitor
```

:::tip
如果没有指定 `PORT`，IDF 将自动选择可用的端口。
:::

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/upgrade.png"/></div>

<!-- 需要更换图片 -->

到目前为止，通过输入命令 `idf.py -p PORT flash`，固件已经成功烧录到 ESP32-S3 上。

<!-- 为什么这个补丁没有放在后面的 Q/A 部分？另外，编译代码的说明是否太少了？没有编译代码的说明，直接就是烧录。 -->

### **Esptool** {#ESPTOOL}

> [ESPtool - GitHub](https://github.com/espressif/esptool) 是一个基于 Python 的开源工具，提供了一种跨平台的方式与 Espressif 芯片中的 ROM 引导程序通信。

Esptool 可以作为 Python 脚本的一部分使用。在本指南中，我们将使用 [Esptool 发布页面](https://github.com/espressif/esptool/releases) 上提供的 `打包软件`。请选择与您计算机操作系统对应的软件。

#### 使用 Esptool 烧录固件

以下提供了两个脚本，展示了如何有效利用 Esptool 将固件烧录到 ESP32-S3 微控制器上。

:::note **注意**:
请注意，提供的脚本是为 Windows 操作系统量身定制的。如果您使用的是其他操作系统，则需要根据您的环境调整脚本。
:::

`merge.bat` 脚本特别有用，它可以智能地将引导程序、分区表和基础指示器二进制文件合并为一个固件文件。合并后，可以使用 `flash.bat` 脚本将该固件无缝烧录到 ESP32-S3 上。当提示时，输入与您的设备对应的 COM 端口，烧录过程将开始。完整操作总结如下：

```sh title="merge.bat"
esptool.exe --chip esp32s3 ^
merge_bin -o sensecap_indicator_basis_v1.0.0.bin ^ # 目标文件名
--flash_mode dio ^
--flash_size 8MB ^
0x0 ../../build/bootloader/bootloader.bin ^
0x8000 ../../build/partition_table/partition-table.bin ^
0x10000 ../../build/indicator_basis.bin
```

或者，如果您更喜欢分别烧录二进制文件而不是合并后再烧录，可以直接使用 `just_flash.bat` 脚本：

```sh title="just_flash.bat"
esptool.exe --chip esp32s3 --port COMx --baud 921600 write_flash -z ^
0x0 ../../build/bootloader/bootloader.bin ^
0x8000 ../../build/partition_table/partition-table.bin ^
0x10000 ../../build/indicator_basis.bin
```

对于使用合并固件进行简单烧录的过程：

```sh title="flash.bat"
esptool.exe --chip esp32s3 --port COMx --baud 921600 write_flash -z 0x0 indicator_basis_v1.0.0.bin
```

> 特别注意起始地址（0x0），尤其是在不合并二进制文件的情况下。对于单独的二进制文件，请参考 [单独二进制文件的烧录工具说明](#Address_Note)。遵循这些指南可以确保烧录无误。

要使用这些脚本，请将代码保存为项目文件夹中的 `merge.bat` 和 `flash.bat` 两个单独的文本文件。这种组织方式简化了访问和使用。

通过使用这些脚本，您可以简化固件准备和烧录阶段，从而实现更顺畅、更可靠的流程。

```
├── indicator_basis
│   ├── CMakeLists.txt
│   ├── build
│   ├── docs
│   ├── main
│   ├── partitions.csv
│   ├── sdkconfig
│   └── .defaults
│   └── flash.bat
│   └── merge.bat
```

1. 使用 `merge.bat` 合并二进制文件。
2. 使用 `flash.bat` 烧录合并后的固件。

#### 烧录固件

要烧录固件，可以使用提供的 `flash.bat` 脚本。此脚本旨在简化将固件烧录到 ESP32-S3 微控制器的过程。

<details>
   <summary>显示 flash.bat 代码</summary>
   ```bat
   @echo off
   setlocal
   cd /d "%~dp0"
   :: 设置芯片
   set chip=esp32s3
   :: 设置波特率
   set baud=921600
   :: 列出 COM 端口
   echo 可用端口和设备：
   echo.
   for /F "tokens=* delims=" %%A in ('wmic path Win32_PnPEntity get Name ^| findstr /C:"COM" ^| findstr /C:"CH340"') do (
   echo %%A
   )
   :: 提示输入端口
   :chooseport
   echo.
   echo 请输入要使用的 COM 端口（例如：COM5）：
   set /p port=
   :: 检查选择的端口是否有效并包含 "CH340"
   for /F "tokens=* delims=" %%A in ('wmic path Win32_PnPEntity get Name ^| findstr /C:"%port%" ^| findstr /C:"CH340"') do (
   set device=%%A
   goto :flash
   )
   echo 端口 %port% 未找到
   goto :chooseport
   :flash:: 打印选择的参数
   echo.
   echo 您选择了：
   echo 芯片: %chip%
   echo 端口: %port% - %device%
   echo 波特率: %baud%
   @REM echo 按任意键继续...
   @REM pause >nul
   :: 使用单个文件运行 esptool
   esptool.exe --chip %chip% --port %port% --baud %baud% write_flash -z 0x0 indicator_basis_v1.0.0.bin
   if ERRORLEVEL 1 (
   echo 使用单个文件烧录失败，错误代码 %ERRORLEVEL%。
   goto :end
   )
   :: 脚本结束
   :end
   endlocal
   ```
</details>

#### 合并二进制文件
提供的 `merge.bat` 脚本可用于将必要的二进制文件合并为一个固件文件。此脚本简化了流程并确保正确合并，从而成功烧录，允许您烧录单个 bin 文件，而无需 [分别烧录文件](#Address_Note)。

<details>
   <summary>显示 merge.bat 代码</summary>
   ```bat
   @echo off
   SETLOCAL
   SET CurrentDir=%cd%
   SET ScriptDir=%~dp0
   SET CurrentDir=%CurrentDir:~0,-1%
   SET ScriptDir=%ScriptDir:~0,-1%
   IF NOT "%CurrentDir%"=="%ScriptDir%" (
   cd /d "%ScriptDir%"
   )
   esptool.exe --chip esp32s3 ^
   merge_bin -o indicator_basis_v1.0.0.bin ^
   --flash_mode dio ^
   --flash_size 8MB ^
   0x0 ../../build/bootloader/bootloader.bin ^
   0x8000 ../../build/partition_table/partition-table.bin ^
   0x10000 ../../build/indicator_basis.bin
   ENDLOCAL
   ```
</details>

### **Flash Download Tools**（仅限 Windows） {#Flash_Tools}

> **Flash Download Tools** 是用于对 ESP8266 和 ESP32 系列微控制器编程或烧录固件的工具。它们提供了一个图形用户界面（GUI），使用户可以轻松地将固件烧录到 ESP 微控制器上。

按照以下步骤烧录预编译的固件：

**下载：**  
[Flash Download Tools（仅限 Windows）](https://www.espressif.com.cn/en/support/download/other-tools?keys=&field_type_tid%5B%5D=842)

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_18.png"/></div>

- **步骤 1**：**双击** `.exe` 文件进入工具的主界面。

- **步骤 2**：选择以下选项：

<div class="table-center">
  <table align="center">
    <tr>
        <th>选项</th>
        <th>参数</th>
    </tr>
    <tr>
        <td>
        <div style={{textAlign: 'center'}}><strong>芯片类型</strong></div>
        </td>
        <td><div  style={{textAlign: 'center'}}>ESP32-S3</div>
        </td>
    </tr>
    <tr>
      <td>
      <div  style={{textAlign: 'center'}}> <strong>工作模式</strong></div>
      </td>
      <td>
      <div  style={{textAlign: 'center'}}> 开发 </div>
      </td>
    </tr>
    <tr>
      <td>
      <div  style={{textAlign: 'center'}}> <strong>加载模式</strong></div>
      </td>
      <td>
      <div  style={{textAlign: 'center'}}> UART </div>
      </td>
    </tr>
  </table>
</div>

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_59.png"/></div>

- **步骤 3**：使用 USB Type-C 数据线将 SenseCAP 指示器连接到您的笔记本电脑。

- **步骤 4**：在 SPI 下载选项卡中，点击 "..." 并导航到您刚刚下载的固件。

- **步骤 5**：配置 SPI Flash：

<div class="table-center">
  <table align="center">
    <tr>
        <th>选项</th>
        <th>参数</th>
    </tr>
    <tr>
        <td>
        <div style={{textAlign: 'center'}}><strong>SPI 速度</strong></div>
        </td>
        <td><div  style={{textAlign: 'center'}}>40MHz</div>
        </td>
    </tr>
    <tr>
      <td>
      <div  style={{textAlign: 'center'}}> <strong>SPI 模式</strong></div>
      </td>
      <td>
      <div  style={{textAlign: 'center'}}> DIO </div>
      </td>
    </tr>
  </table>
</div>

- **步骤 6**：配置下载面板：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator23.png"/></div>

- **COM**：检查设备管理器中的端口，USB-SERIAL 是正确的端口。  
（`这里我们选择 COM4`）  
- **波特率**：921600（推荐值）

然后点击 `START` 开始烧录。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/start.png"/></div>

当显示 `FINISH` 时，固件烧录已完成。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/finish.png"/></div>

#### 针对单独二进制文件的 Flash Download Tools {#Address_Note}

在前面提到的指南中，二进制文件 "Default_Factory_Firmware_ESP32-S3.bin" 将三个二进制文件合并为一个。

然而，如果您使用 ESP-IDF 构建固件，直接烧录单个文件可能会导致错误。相反，您需要找到 **三个单独的二进制文件** 并指定正确的地址（您可以使用自己的地址），如下所示：

- **bootloader.bin** ----> **0x0**  
- **partion-table.bin** ----> **0x6800**  
- **termial_demo.bin** ----> **0x10000**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/3binfiles.png"/></div>

## 针对 **RP2040**

### 使用 Arduino IDE 烧录 {#RP_Arduino}

RP2040 开发工具利用 Arduino 提升您的编码体验。

> Arduino IDE 是一款免费的软件，用于为 Arduino 板编写代码。它具有用户友好的界面，您可以轻松编写和上传代码。基于简化版的 C++，它提供了丰富的库和示例，非常适合初学者。

**下载：**

- **步骤 1**：安装 [Arduino IDE](https://www.arduino.cc/en/software)

- **步骤 2**：添加 Raspberry Pi Pico 板

打开 Arduino IDE，点击 **Arduino IDE** > **Preferences**，并将以下 URL 复制到 **Additional Boards Manager URLs**：

`https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json`

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_29.png" style={{width:680, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_80.png" style={{width:680, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

点击 **Tools** > **Board** > **Board Manager**。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_30.png"/></div>

搜索 "indicator" 并在板管理器中安装 "Raspberry Pi Pico/RP2040"。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator.png"/></div>

- **步骤 3**：添加库

:::note **参考库**
* Sensirion Core: [Sensirion Arduino Core library](https://github.com/Sensirion/arduino-core)  
* PacketSerial : [串行通信协议库](https://github.com/bakercp/PacketSerial)  
* Sensirion I2C SGP40 : [SGP40 TVOC 传感器库](https://github.com/Sensirion/arduino-i2c-sgp40)  
* Sensirion I2C SCD4x : [SCD41 CO2 传感器库](https://github.com/Sensirion/arduino-i2c-scd4x)  
* Sensirion Gas Index Algorithm : [气体指数算法库](https://github.com/Sensirion/arduino-gas-index-algorithm)  
* Seeed_Arduino_AHT20 : [AHT20 温湿度传感器库](https://github.com/Seeed-Studio/Seeed_Arduino_AHT20)  
:::

在 Arduino IDE 中，你可以在 `Library Manager` 中搜索，例如 `Seeed_Arduino_AHT20`，然后安装它。

<details>
<summary>点击查看离线安装</summary>

要进行离线安装，你可以从 GitHub **下载仓库的 zip 文件**，然后导航到 **Sketch** -> **Include Library** -> **Add .ZIP Library**，选择你下载的库文件。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_32.png"/></div>

</details>

- **步骤 4**：使用提供的 USB Type-C 数据线将设备连接到你的电脑。

- **步骤 5**：选择开发板和端口

搜索 "Indicator"，选择 `Seeed INDICATOR RP2040` 开发板，并选择 `usbmodem` 串口。

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/board.png" style={{width:680, height:'auto'}}/></div></td>
    </tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/portport.png" style={{width:680, height:'auto'}}/></div></td>
  </table>
</div>

- **步骤 6**：打开示例代码文件

导航到 **File** -> **Open**，然后选择示例代码文件（[.ino 文件](https://github.com/Seeed-Solution/sensecap_indicator_rp2040/tree/main/examples/terminal_rp2040)）。

我们提供了一个示例代码文件，你可以根据需要修改代码。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_35.png"/></div>

- **步骤 7**：验证并上传文件。
<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_36.png" style={{width:680, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_37.png" style={{width:680, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_38.png"style={{width:680, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

到这里，我们已经完成了在 RP2040 上构建和烧录（下载）固件。

### 烧录 .uf2 文件

- **步骤 1**：将设备连接到你的电脑

使用针长按设备上的内部按钮，然后通过提供的 USB Type-C 数据线将设备连接到你的电脑，连接后松开按钮。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_56.png"/></div>

- **步骤 2**：固件烧录

连接成功后，你的电脑会显示一个磁盘。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/disk.png"/></div>

将 [.uf2](https://github.com/Seeed-Solution/sensecap_indicator_rp2040/releases/download/v1.0.0/terminal_rp2040_v1.0.0.uf2) 文件复制到磁盘中，随后磁盘会自动退出。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/uf2.png"/></div>

升级将自动运行。

## ESP32 和 RP2040 通信协议

ESP32 和 RP2040 使用串口通信，采用 [cobs](http://www.stuartcheshire.org/papers/COBSforToN.pdf) 通信协议。示例中使用的命令列表如下：

命令格式由数据包类型和数据包参数组成。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_41.png"/></div>

## 资源

[SenseCAP Indicator ESP32 SDK](https://github.com/Seeed-Solution/sensecap_indicator_esp32.git)

[SenseCAP Indicator RP2040 示例](https://github.com/Seeed-Solution/sensecap_indicator_rp2040/tree/main)

## 常见问题

<details>
    <summary>如何区分串口？</summary>
    <Tabs
    groupId="operating-systems"
    defaultValue='Win'
    values={[
    {label: 'Windows', value: 'Win'},
    {label: 'MacOS', value: 'Unix'},
    ]}
    >
    <TabItem value="Win" >
      在设备管理器中检查端口
      - "USB Serial Device(COMx)" 或 "USB 串行设备" 是 RP2040 的端口
      - "USB-SERIAL CH340" 是 ESP32 的端口
      简而言之，CH340 端口是 ESP32 的。
      <div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_39.png"/></div>
    </TabItem>
    <TabItem value="Unix">
      - "/dev/cu.usbmodem" 是 RP2040 的端口
      <div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_40.png"/></div>
    </TabItem>
    </Tabs>
</details>

# **最近更新**

- 2023-11-17 
  - 移除了补丁部分
- 2023-08-25
  - 使补丁部分更清晰
- 2023-07-25
  - 添加了使用 Esptool 烧录固件的内容
- 2023-05-29
  - 添加了补丁部分

# **技术支持**

**需要帮助解决 SenseCAP Indicator 的问题？我们随时为您提供支持！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>