---
description: XIAO RP2350 搭载 NuttX(RTOS)
title: XIAO RP2350 搭载 NuttX(RTOS)
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-nRF52840-NuttX/nuttx.webp
slug: /cn/xiao_rp2350_nuttx
last_update:
  date: 05/15/2025
  author: rcsim
sidebar_position: 3
---

# Seeed Studio XIAO RP2350 搭载 NuttX(RTOS)

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 简介

[NuttX](https://nuttx.apache.org/) 是一个成熟的实时操作系统 (RTOS)，以其标准兼容性和小巧的占用空间而广受认可。NuttX 的主要特点之一是其可扩展性，使其能够在从 8 位微控制器到 64 位系统的环境中使用。这种灵活性通过遵循 POSIX 和 ANSI 标准得以实现，使您可以在不同架构、系列和半导体厂商的芯片上尝试类似的 NuttX 功能。

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/NuttX/nuttx.svg"/></div>

此外，NuttX 提供了许多先进且实用的功能，例如 USB、以太网、音频和图形子系统。这些特性使 NuttX 成为开发人员的一个有吸引力的选择，它能够在各种硬件上运行，具有多功能性和稳健性。

NuttX 支持大量且不断扩展的开发板。[官方文档](https://nuttx.apache.org/docs/latest/platforms/) 提供了按架构和系统芯片 (SoC) 系列组织的支持板列表。

例如，NuttX 文档中的 [Seeed Studio XIAO RP2350](https://nuttx.apache.org/docs/latest/platforms/arm/rp23xx/boards/xiao-rp2350/index.html) 页面详细描述了每个支持的功能以及如何使用它们。此外，NuttX 文档中还有一个专门针对 [Raspberry Pi RP2350](https://nuttx.apache.org/docs/latest/platforms/arm/rp23xx/index.html) 系列芯片的页面。

## 安装

NuttX 文档提供了一个 [指南](https://nuttx.apache.org/docs/latest/quickstart/install.html) 适用于不同平台。对于 Seeed Studio XIAO RP2350，请按照以下步骤操作：

1. 下载 picotool 工具（可选）：

    ```bash
    git clone https://github.com/raspberrypi/picotool.git picotool
    cd picotool
    mkdir build
    cd build
    cmake ..
    make
    cp picotool ~/local/bin # 放置在您的 PATH 中的某个位置
    ```

2. 创建一个工作空间

    ```bash
    mkdir nuttxspace
    ```

3. 克隆代码库

    ```bash
    cd nuttxspace
    git clone https://github.com/apache/nuttx.git nuttx
    git clone https://github.com/apache/nuttx-apps apps
    ```

Apache NuttX 被分为两个项目：

- Nuttx：包含内核、驱动程序和子系统的实现。
- Apps：包含工具、shell、网络实用程序、库和解释器的集合。

## 应用程序

要启动一个应用程序，需要在 NuttX 上加载一个配置，使用以下命令：

```bash
./tools/configurate.sh board_name:your_application
```

也可以通过运行以下命令查看支持的开发板列表：

```bash
./tools/configurate.sh -L
```

4. 构建 NuttX（构建过程将生成固件二进制文件，包括 nuttx.uf2）：

    ```bash
    cd nuttx
    make distclean
    ./tools/configure.sh xiao-rp2350:nsh
    make V=1
    ```

5. 使用 picotool 加载固件：

    ```bash
    picotool load nuttx -t elf
    ```

6. 使用 RESET 和 BOOT 按钮进入引导加载模式：按住 BOOT 按钮，然后按下并释放 RESET 按钮。然后，开发板将作为存储设备通过 USB 连接到计算机。将 .UF2 文件保存到此设备将替换 RP2350 上的 Flash ROM 内容。

## 实践操作

现在是时候实际探索 NuttX 了。在本节中，有三个可用的应用程序：NSH、USBNSH 和 COMBO。

### NSH

NuttShell (NSH) 是一个用于 NuttX 的 shell 系统，类似于 bash 和其他类似选项。它支持一组丰富的内置命令、脚本功能以及运行您自己的应用程序作为“内置”应用程序（与 NuttX 二进制文件一起）。NSH 配置启用了 UART0 控制台，波特率为 115200 bps。

我们可以通过清除之前的配置开始构建过程：

```bash
cd ~/nuttxspace/nuttx
make distclean
```

现在我们为 xiao-nrf5200 开发板选择 NSH 配置：

```bash
./tools/configurate.sh xiao-rp2350:nsh
```

编译源代码：

```bash
make -j
```

将固件加载到开发板中，并将 USB-to-Serial 连接到 TX 和 RX 引脚，然后运行一个串行通信程序，例如 minicom 或 picocom：

```bash
picocom -b 115200 /dev/ttyUSB0
```

访问 NuttShell 控制台：

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> 
```

输入 `?`，您将看到可用的命令和内置应用程序选项：

```bash
nsh> ?
help usage: [-v] [<cmd>]

    .           cp          exec        ls          reboot      truncate    
    [           cmp         exit        mkdir       rm          uname       
    ?           dirname     expr        mkrd        rmdir       umount      
    alias       date        false       mount       set         unset       
    unalias     dd          fdinfo      mv          sleep       uptime      
    basename    df          free        pidof       source      usleep      
    break       dmesg       help        printf      test        xd          
    cat         echo        hexdump     ps          time        
    cd          env         kill        pwd         true        

Builtin Apps:
    getprime    hello       nsh         ostest      sh 
```

让我们向 NuttX 打个招呼，输入 `hello`，然后执行命令：

```bash
nsh> hello
Hello, World!!
```

恭喜，您已完成与 NuttX 的第一次交互。

### USBNSH

与 NSH 配置类似，但使用 CDC/ACM 串口（控制台启用在 USB 端口，波特率为 115200 bps）。

我们可以通过清除之前的配置开始构建过程：

```bash
cd ~/nuttxspace/nuttx
make distclean
```

现在我们为 xiao-nrf5200 开发板选择 USBNSH 配置：

```bash
./tools/configurate.sh xiao-rp2350:usbnsh
```

编译源代码：

```bash
make -j
```

将固件加载到您的开发板中，运行一个串行通信程序，例如 minicom 或 picocom：

```bash
picocom -b 115200 /dev/ttyACM0
```

您需要按下回车键 3 次，然后终端中会显示以下消息：

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> 
```

### COMBO

此配置启用了三个示例应用程序：gpio、leds 和 ws2812。通用输入/输出 (GPIO) 是微控制器最基本的部分，使其能够连接到外部世界。通过这种方式，我们将使用 NSH 来访问和配置这些引脚。但首先，让我们清除之前的配置。

```bash
cd ~/nuttxspace/nuttx
make distclean
```

为 xiao-rp2350 开发板选择 combo 配置。

```bash
./tools/configurate.sh xiao-rp2350:combo
```

编译源代码。

```bash
make -j
```

将固件加载到您的开发板中，运行一个串行通信程序，例如 minicom 或 picocom：

```bash
picocom -b 115200 /dev/ttyUSB0
```

```bash
NuttShell (NSH) NuttX-12.8.0
nsh>
```

要查看与此应用程序交互时接受的选项，请输入 `gpio -h`，它将返回参数列表。

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> gpio -h
USAGE: gpio [-t <pintype>] [-w <signo>] [-o <value>] <driver-path>
       gpio -h
Where:
 <driver-path>: The full path to the GPIO pin driver.
 -t <pintype>:  Change the pin to this pintype (0-10):
 -w <signo>:    Wait for a signal if this is an interrupt pin.
 -o <value>:    Write this value (0 or 1) if this is an output pin.
mation and exit.
Pintypes:
  0: GPIO_INPUT_PIN
  1: GPIO_INPUT_PIN_PULLUP
IO_INPUT_PIN_PULLDOWN
  3: GPIO_OUTPUT_PIN
  4: GPIO_OUTPUT_PIN_OPENDRAIN
  5: GPIO_INTERRUPT_PIN
  6: GPIO_INTERRUPT_HIGH_PIN
  7: GPIO_INTERRUPT_LOW_PIN
  8: GPIO_INTERRUPT_RISING_PIN
  9: GPIO_INTERRUPT_FALLING_PIN
 10: GPIO_INTERRUPT_BOTH_PIN
```

要确认 GPIO 设备文件是否已创建，请输入 `ls/dev`。输入后，您可以看到一些 GPIO 已在 `boards/arm/rp23xx/xiao-rp2350/include/board.h` 中定义，具体表示如下：

- 板载 LED：
  - 黄色            -> GPIO25
 
- GPIOs：
  - 1 输入           -> GPIO27
  - 1 中断输入       -> GPIO26
  - 1 输出           -> GPIO28

```bash
nsh> ls /dev
/dev:
 console
 gpio26
 gpio27
 gpio28
 leds0
 null
 ttyS0
 userleds
 zero
nsh> 
```

按照以下命令读取 gpio27 和 gpio26（带中断）并写入 gpio28。

```bash
nsh> gpio -w 1 /dev/gpio26
Driver: /dev/gpio26
  Interrupt pin: Value=0
  Verify:        Value=0
nsh> gpio /dev/gpio27
Driver: /dev/gpio27
  Input pin:     Value=0
nsh> gpio /dev/gpio27
Driver: /dev/gpio27
  Input pin:     Value=1
nsh> gpio -o 1 /dev/gpio28
Driver: /dev/gpio28
  Output pin:    Value=0
  Writing:       Value=1
  Verify:        Value=1
nsh> gpio -o 0 /dev/gpio28
Driver: /dev/gpio28
  Output pin:    Value=1
  Writing:       Value=0
  Verify:        Value=0
```

USERLEDS 是一个子系统，允许通过单一操作控制 LED。此外，您还可以像使用 printf 一样使用命令行。在此演示中，我们将每隔 1 秒打开和关闭一次板载黄色 LED。

输入 `leds`，您会观察到 LED 同时闪烁。

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> leds
leds_main: Starting the led_daemon
leds_main: led_daemon started

led_daemon (pid# 3): Running
led_daemon: Opening /dev/userleds
led_daemon: Supported LEDs 0x01
led_daemon: LED set 0x01
nsh> led_daemon: LED set 0x00
led_daemon: LED set 0x01
led_daemon: LED set 0x00
led_daemon: LED set 0x01
led_daemon: LED set 0x00
```

Seeed Studio XIAO RP2350 还具有一个 WS2812 可寻址 LED，可以通过 ws2812 应用程序进行测试：
```bash
NuttShell (NSH) NuttX-12.8.0
nsh> ws2812
```

查看以下视频，了解 gpio、leds 和 ws2812 示例的演示：

<div style={{ maxWidth: '100%', textAlign: 'center' }}>
  <video style={{ width: '100%', height: 'auto' }} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/Nuttx/xiao-rp2350-nuttx-demo.mp4" type="video/mp4" />
  </video>
</div>

有关 NuttX RTOS 的更多信息，请访问 [NuttX Documentation](https://nuttx.apache.org/docs/latest/index.html)

## ✨ 贡献者项目

- 此项目由 Seeed Studio [贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) 支持。
- 特别感谢 [Rodrigo](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=92947609) 的辛勤努力。您的工作将被[展示](https://wiki.seeedstudio.com/contributors/)。

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>