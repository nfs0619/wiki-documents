---
description: reTerminal-常见问题解答
title: reTerminal 使用常见问题解答
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal-FAQ
last_update:
  date: 05/15/2025
  author: jianjing Huang
---

# reTerminal 使用常见问题解答

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

本文档包含与 reTerminal 相关的所有常见问题。如果您在使用 reTerminal 时遇到任何问题，这将非常有帮助。

## 问题 1：如何更新 reTerminal LCD 的 STM32 固件

**注意：** 如果您的 reTerminal 是在 2021 年 9 月 26 日之后生产的，则 STM32 已预装 V1.8 固件。

确保将最新的固件刷写到 reTerminal 上的 STM32G030 芯片上非常重要。STM32G030 负责驱动 reTerminal 的 LCD。将 STM32 芯片更新到最新版本将有助于解决您在使用 reTerminal LCD 时遇到的大多数问题。

刷写 STM32 芯片有两种方法：

- **方法 1：** 使用 reTerminal 上的 CM4 直接连接到 STM32 芯片并刷写固件
- **方法 2：** 使用跳线将 STM32 芯片引脚物理连接到 reTerminal 的 40 针 GPIO，然后使用 OpenOCD 刷写固件

如果您的 reTerminal 上的 STM32 固件是**新版本（v1.7 或更高）**，则可以使用**方法 1**；如果您的 STM32 固件是**旧版本（低于 v1.7）**，则需要使用**方法 2**。

### 确定使用哪种刷写方法

现在让我们按照以下步骤确定我们拥有的板卡版本，以便选择合适的刷写方法。

- **步骤 1.** 进入 reTerminal 的终端窗口并输入以下命令以打开配置文件

```sh
sudo nano /boot/config.txt
```

- **步骤 2.** 在文件的最底部，注释掉 **dtoverlay=reTerminal** 这一行

```sh
#dtoverlay=reTerminal
```

**注意：** 这将卸载所有 reTerminal 驱动程序。因此，当您下次启动 reTerminal 时，所有驱动程序都不会加载。

- **步骤 3.** 重启 reTerminal

```sh
sudo reboot
```

- **步骤 4.** 通过 **i2c-tools** 使 STM32 进入 **boot 模式**

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x01
```

- **步骤 5.** 列出已连接的 I2C 设备

```sh
i2cdetect -y 1
```

如果您可以看到 I2C 地址 **0x56**，如下表所示，则说明您的板卡上安装了**新版本（v1.7 或更高）**的 STM32 固件。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/i2c-new-board.png" alt="pir" width={600} height="auto" /></p>

然而，如果您看到 I2C 地址 **0x45**，如下面的表所示，则说明您的板卡上安装了**旧版本（低于 v1.7）**的 STM32 固件。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/i2c-old-board.png" alt="pir" width={600} height="auto" /></p>

- **步骤 6.** 打开之前使用的配置文件

```sh
sudo nano /boot/config.txt
```

- **步骤 7.** 在文件的最底部，取消注释 **dtoverlay=reTerminal** 这一行以重新加载驱动程序

```sh
dtoverlay=reTerminal
```

- **步骤 8.** 关闭 reTerminal

```sh
sudo poweroff
```

**注意：** 如果您已经运行 **STM32 v1.8 固件**，一旦通过 **i2c-tools** 进入 **boot 模式**，退出 boot 模式的唯一方法是刷写 STM32 固件。

### 使用 CM4 连接到 STM32 并刷写固件

如果您的板卡上安装了**新版本（v1.7 或更高）**的 STM32 固件，请按照此方法操作。

- **步骤 1.** 进入 reTerminal 的终端窗口并输入以下命令以打开配置文件

```sh
sudo nano /boot/config.txt
```

- **步骤 2.** 在文件的最底部，注释掉 **dtoverlay=reTerminal** 这一行

```sh
#dtoverlay=reTerminal
```

- **步骤 3.** 重启 reTerminal

```sh
sudo reboot
```

- **步骤 4.** 在 reTerminal 内创建一个新目录并进入该目录

```sh
mkdir STM32
cd STM32
```

<!-- - **步骤 5.** 访问 [此链接](https://github.com/Seeed-Studio/seeed-linux-dtoverlays/releases) 并从**最新发布版本**下载 **stm32flash** 文件和 **STM32G030F6_R2.bin** 文件。

**注意：** 您可以点击它们开始下载 -->

- **步骤 5.** 下载 **stm32flash** 文件和 **STM32G030F6_R2.bin**

```sh
wget https://sourceforge.net/projects/stm32flash/files/stm32flash-0.7.tar.gz 
```

```sh
wget https://github.com/Seeed-Studio/seeed-linux-dtoverlays/releases/download/2022-05-29-reTerminal-V1.9/STM32G030F6_R2.bin
```

- **步骤 6.** 解压 **stm32flash-0.7.tar.gz**

```sh
tar -xvf stm32flash-0.7.tar.gz
```

- **步骤 7.** 进入名为 **stm32flash-0.7** 的文件夹并使刷写工具可执行

```sh
cd stm32flash-0.7/
make
```

- **步骤 8.** 通过 **i2c-tools** 使 STM32 进入 **boot 模式**

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x01
```

- **步骤 9.** 使用 **stm32flash 工具**擦除 STM32 芯片中的闪存

```sh
./stm32flash -a 0x56 -o /dev/i2c-1
```

- **步骤 10.** 使用 stm32flash 工具将固件刷写到 STM32

```sh
./stm32flash -a 0x56 -w ../STM32G030F6_R2.bin -v -g 0x0 /dev/i2c-1
```

**注意：** **STM32G030F6_R2.bin** 是新固件的文件名

- **步骤 11.** 修改 OPTR 寄存器如下

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x00
```

- **步骤 12.** 打开之前使用的配置文件

```sh
sudo nano /boot/config.txt
```

- **步骤 13.** 在文件的最底部，取消注释 **dtoverlay=reTerminal** 这一行

```sh
dtoverlay=reTerminal
```

- **步骤 14.** 重启 reTerminal

```sh
sudo reboot
```

<!-- - **步骤 6.** 在 PC 上打开命令提示符并导航到之前下载文件的位置

```sh
cd C:\Users\user\Downloads
```

- **步骤 7.** 将文件传输到我们之前在 reTerminal 上创建的 **STM32** 目录

```sh
scp -r .\stm32flash .\STM32G030F6_R2.bin pi@192.168.x.xx:\home\pi\STM32
```

**注意：** **pi** 是用户名，**192.168.x.xx** 是 reTerminal 的 IP 地址。您也可以将其替换为 reTerminal 的主机名。

- **步骤 8.** 在 reTerminal 的终端窗口中，进入 **STM32** 目录

```sh
cd STM32
```

然后你将看到我们之前复制的文件

- **步骤 9.** 使烧录工具 **可执行**

```sh
chmod +x stm32flash
``` -->

<!-- - **步骤 10.** 通过 **i2c-tools** 使 STM32 进入 **boot 模式**

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x01
```

- **步骤 11.** 使用 **stm32flash 工具** 擦除 STM32 芯片中的闪存

```sh
./stm32flash -a 0x56 -o /dev/i2c-1
```

- **步骤 12.** 使用 stm32flash 工具将固件烧录到 STM32

```sh
./stm32flash -a 0x56 -w STM32G030F6_R2.bin -v -g 0x0 /dev/i2c-1
```

**注意：** **STM32G030F6_R2.bin** 是新固件的文件名

- **步骤 13.** 按如下方式修改 OPTR 寄存器

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x00
```

- **步骤 14.** 打开我们之前使用的配置文件

```sh
sudo nano /boot/config.txt
```

- **步骤 15.** 在文件的最底部，取消注释 **dtoverlay=reTerminal** 这一行

```sh
dtoverlay=reTerminal
```

- **步骤 16.** 重启 reTerminal

```sh
sudo reboot
``` -->

现在你已经成功将固件烧录到 STM32！

### 使用跳线和 OpenOCD 连接到 STM32

如果你的板载 STM32 固件是 **旧版本（低于 v1.7）**，请按照此方法操作。

- **步骤 1.** 进入 reTerminal 的终端窗口并输入以下命令以更新软件包列表

```sh
sudo apt-get update
```

- **步骤 2.** 安装以下软件包

```sh
sudo apt-get install git autoconf libtool make pkg-config libusb-1.0-0 libusb-1.0-0-dev
```

- **步骤 3.** 克隆以下仓库并进入该目录

```sh
git clone http://openocd.zylin.com/openocd
cd openocd
```

- **步骤 4.** 访问 [此链接](https://github.com/Seeed-Studio/seeed-linux-dtoverlays/releases) 并从 **最新发布** 版本中下载 **STM32G030F6_R2.bin** 文件。

**注意：** 你可以点击链接开始下载

- **步骤 5.** 在 PC 上打开命令提示符并导航到之前下载文件的位置

```sh
cd C:\Users\user\Downloads
```

- **步骤 6.** 将文件传输到我们之前创建的 reTerminal 的 **openocd** 目录

```sh
scp -r .\STM32G030F6_R2.bin pi@192.168.x.xx:\home\pi\openocd
```

**注意：** **pi** 是用户名，**192.168.x.xx** 是 reTerminal 的 IP 地址。你也可以用 reTerminal 的主机名替代。

- **步骤 7.** 回到 reTerminal 的终端窗口，并在 **openocd** 目录中输入以下命令

```sh
./bootstrap
```

- **步骤 8.** 输入以下命令

```sh
./configure --enable-sysfsgpio --enable-bcm2835gpio
```

- **步骤 9.** 编译

```sh
make
```

- **步骤 10.** 安装

```sh
sudo make install
```

- **步骤 11.** 按以下连接方式将 STM32 的引脚连接到 40 针 GPIO

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/pinout-stm32.png" alt="pir" width={600} height="auto" /></p>

**注意：** STM32 的引脚位于 reTerminal PCB 的背面。

- **步骤 12.** 保持连接状态，输入以下命令将固件烧录到 STM32

```sh
openocd -f interface/sysfsgpio-raspberrypi.cfg -c "transport select swd" -f target/stm32g0x.cfg -c "program STM32G030F6_R2.bin verify 0x08000000;shutdown"
```

**注意：** 通常烧录大约需要 3 秒钟。因此你需要 **保持** 上述连接约 **3 秒钟**，直到烧录过程完成。

如果你看到以下日志，说明 STM32 固件已成功烧录！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/openocd-log.jpg" alt="pir" width={350} height="auto" /></p>

- **步骤 13.** 断开连接并 **直接物理断开电源线**，不要使用 **poweroff** 命令

**注意：** 如果你不物理拔掉电源线，STM32 固件将无法成功加载。

现在你已经成功将固件烧录到 STM32！

### 检查已安装的 STM32G030 固件版本

现在让我们检查已安装的 STM32 固件版本。

- **步骤 1.** 进入 reTerminal 的终端窗口并输入以下命令以打开配置文件

```sh
sudo nano /boot/config.txt
```

- **步骤 2.** 在文件的最底部，注释掉 **dtoverlay=reTerminal** 这一行

```sh
#dtoverlay=reTerminal
```

- **步骤 3.** 重启 reTerminal

- **步骤 4.** 在 reTerminal 的终端窗口中输入以下命令以检查 STM32 固件版本

```sh
i2ctransfer -y 1 w1@0x45 0x97 r2
```

如果输出类似于 **0x01 0x07**，说明你正在使用固件版本 1.7。

- **步骤 5.** 打开我们之前使用的配置文件

```sh
sudo nano /boot/config.txt
```

- **步骤 6.** 在文件的最底部，取消注释 **dtoverlay=reTerminal** 这一行

```sh
dtoverlay=reTerminal
```

- **步骤 7.** 重启 reTerminal

```sh
sudo reboot
```

## Q2: 如何刷写原装随 reTerminal 提供的 Raspberry Pi OS？

如果您已经刷写了其他操作系统，并希望切换回随 reTerminal 提供的默认 Raspberry Pi OS，可以按照以下步骤操作：

- **步骤 1.** 通过以下链接下载 Raspberry Pi OS

  - [32-bit 2022-07-21-Raspbian-reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/32bit-20220721T012743Z-001.zip)
  - [64-bit 2022-07-21-Raspbian-reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/64bit-20220721T012743Z-001.zip)

**注意：** reTerminal 原装提供的是 32 位操作系统。不过，您也可以下载 64 位版本。

- **步骤 2.** 解压 **.zip 文件**

- **步骤 3.** 打开 Raspberry Pi Imager 软件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width={600} height="auto" /></p>

- **步骤 4.** 在键盘上按下 **CTRL + SHIFT + X** 打开 **高级选项** 窗口

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width={600} height="auto" /></p>

在这里，您可以**设置主机名、启用 SSH、设置密码、配置 WiFi、设置区域设置**等。

- **步骤 5.** 点击 **CHOOSE OS** 并选择 **Use custom**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/factory-os.png" alt="pir" width={600} height="auto" /></p>

- **步骤 6.** 导航到之前解压的镜像文件，选择它并点击 **open**

- **步骤 7.** 点击 **CHOOSE STORAGE** 并选择连接的 eMMC 驱动器

- **步骤 8.** 最后，点击 **WRITE**

## Q3: 如何升级 Raspberry Pi OS 和已安装的软件包

我们将更新所有软件包以及 Raspberry Pi OS 到最新版本。

- **步骤 1.** 在 reTerminal 上打开终端窗口并输入以下命令：

```sh
sudo apt update
sudo apt full-upgrade
```

- **步骤 2.** 重新安装内核头文件：

```sh
sudo apt install raspberrypi-kernel-headers
```

- **步骤 3.** 重启 reTerminal：

```sh
sudo reboot
```

现在您的 Raspberry Pi OS 和所有必要的软件包都已更新到最新版本！

## Q4: 如果将 CM4 替换为非 eMMC 版本，如何刷写操作系统？

如果您希望在 reTerminal 上使用没有 eMMC 的 Compute Module 4，那么您需要插入一张 micro-SD 卡并刷写您选择的操作系统。根据您的操作系统，按照以下步骤操作：

- **步骤 1.** 使用连接到计算机的 **micro-SD 卡读卡器** 或笔记本电脑上的 **内置读卡器**，将 micro-SD 卡插入计算机。

- **步骤 2.** 通过访问[此链接](https://www.raspberrypi.org/software/)下载 **Raspberry Pi Imager** 软件。

**注意：** 您可以选择下载适用于 **Windows、Mac 或 Ubuntu** 的版本。

- **步骤 3.** 打开 Raspberry Pi Imager 软件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width={600} height="auto" /></p>

- **步骤 4.** 在键盘上按下 **CTRL + SHIFT + X** 打开 **高级选项** 窗口

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width={600} height="auto" /></p>

在这里，您可以**设置主机名、启用 SSH、设置密码、配置 WiFi、设置区域设置**等。

- **步骤 5.** 点击 **CHOOSE OS** 并选择您偏好的操作系统

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width={600} height="auto" /></p>

**注意：** 您可以通过导航到 **Other general purpose OS** 选择操作系统，例如 **64-bit Ubuntu**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width={1000} height="auto" /></p>

- **步骤 6.** 点击 **CHOOSE STORAGE** 并选择连接的 micro-SD 卡

- **步骤 7.** 最后，点击 **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width={600} height="auto" /></p>

请等待几分钟，直到刷写过程完成。

- **步骤 8.** 从计算机中弹出 micro-SD 卡并将其插入 reTerminal。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/micro-sd.jpg" alt="pir" width={600} height="auto" /></p>

**注意：** 您需要打开 reTerminal 的外壳才能访问 micro-SD 卡插槽。

## Q5: 如何使用 USB 转串口转换器登录 Raspberry Pi OS/ Ubuntu OS 或其他操作系统

如果您有一个 **USB 转串口转换器**，可以按照以下步骤登录 Raspberry Pi OS。

将跳线从 USB 转串口转换器连接到 reTerminal 的 40-pin GPIO 接口上的 **UART 引脚**，连接方式如下：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/USB-UART.png" alt="pir" width={1000} height="auto" /></p>

现在让我们在电脑上配置软件。请根据您的操作系统进行操作。

### 对于 Windows

- **步骤 1.** 将 USB 转串口转换器连接到电脑

- **步骤 2.** 在 Windows 搜索框中输入 **设备管理器** 打开 **设备管理器**

- **步骤 3.** 点击 **端口 (COM & LPT)** 下拉箭头，找到连接的串口名称（例如：**COM7**）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/COM7-dev-show.jpg" alt="pir" width={320} height="auto" /></p>

- **步骤 4.** 通过访问 [此链接](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) 下载并安装 **Putty**

**注意：** Putty 是一个 SSH 和 Telnet 客户端，您可以使用它通过 SSH 连接到 reTerminal。如果您已经安装了 Putty，可以跳过此步骤。

- **步骤 5.** 打开 Putty，将电脑连接到 reTerminal

- **步骤 6.** 在 **连接类型** 中选择 **Serial**

- **步骤 7.** 按以下方式配置设置：

  - 串口线：COM7（选择您的 COM 端口）
  - 速率：9600

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/COM7-Putty-connect.jpg" alt="pir" width={450} height="auto" /></p>

- **步骤 8.** 点击 **Open**

- **步骤 9.** 在 Putty 窗口中输入以下登录信息：

```sh
- 用户名：pi
- 密码：raspberry
```

- **步骤 10.** 如果您成功登录到 Raspberry Pi OS，您将看到以下输出：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi.png" alt="pir" width={900} height="auto" /></p>

### 对于 Mac/Linux

- **步骤 1.** 将 USB 转串口转换器连接到电脑

- **步骤 2.** 在 Mac/Linux 上打开一个 **终端窗口**

- **步骤 3.** 输入以下命令更新 **软件包列表**：

```sh
sudo apt-get update
```

- **步骤 4.** 输入以下命令安装 **minicom**：

```sh
sudo apt-get install minicom
```

- **步骤 5.** 在终端中输入以下命令查看连接的串口设备：

```sh
dmesg | grep tty
```

> <p style={{fontSize: 16}}>例如：<br/>
    [ 1562.048241] cdc_acm 1-3:1.0: ttyACM0: USB ACM device</p>

- **步骤 6.** 输入以下命令连接到串口设备：

```sh
minicom -D /dev/ttyACM0 -b 9600
```

**注意：** 波特率设置为 9600。

- **步骤 7.** 按照上述硬件连接后，从墙壁插座打开电源以启动 reTerminal。

现在您已成功登录到 Raspberry Pi OS。

## Q6: 我无法唤醒 reTerminal 的 LCD 屏幕

通过 SSH 或 VNC 连接后打开终端窗口，并输入以下命令：

```sh
DISPLAY=:0 xset dpms force off
DISPLAY=:0 xset dpms force on
```

这将重新初始化 reTerminal 的 LCD 屏幕。

## Q7: 如何从 USB 闪存驱动器启动操作系统

您可以按照以下步骤从 USB 闪存驱动器启动操作系统。这里我们将启动顺序更改为 **USB 启动 > eMMC 启动**，这意味着如果 USB 启动失败，它将从 eMMC 启动。

**注意：** 此方法需要使用 Ubuntu 或 MacOS 作为主机电脑。

- **步骤 1.** 移除 4 个橡胶盖，并拧下下面的 4 个螺丝，打开 reTerminal 的后壳

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-1.png" alt="pir" width={450} height="auto" /></p>

- **步骤 2.** 拆下 2 个螺丝以拆卸散热片，同时拆下其余的 4 个螺丝以分解整个外壳

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-3.jpg" alt="pir" width={500} height="auto" /></p>

- **步骤 3.** 根据下图向下拨动 **启动模式开关**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flip-switch.jpg" alt="pir" width={700} height="auto" /></p>

- **步骤 4.** 将 reTerminal 连接到主机电脑后，在主机电脑中打开一个 **终端** 窗口，并输入以下命令更新 **软件包列表**

```sh
sudo apt update
```

- **步骤 5.** 使用以下命令安装 **Git**

```sh
sudo apt install git
```

- **步骤 6.** 如果日期未正确设置，Git 可能会产生错误。输入以下命令以更正日期

```sh
sudo date MMDDhhmm
```

**注意：** 其中 **MM** 是月份，**DD** 是日期，**hh** 和 **mm** 分别是小时和分钟。

- **步骤 7.** 克隆并进入 **usbboot** 工具的代码库

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **步骤 8.** 输入以下命令安装 **libusb**

```sh
sudo apt install libusb-1.0-0-dev
```

- **步骤 9.** 构建并安装 usbboot 工具

```sh
make
```

- **步骤 10.** 打开引导加载程序配置文件

```sh
sudo nano recovery/boot.conf
```

- **步骤 11.** 将 **BOOT_ORDER** 字段更改为以下内容

```sh
BOOT_ORDER=0xf15
```

**注意：** 如果 USB 启动失败，它将切换到 eMMC 启动。

- **步骤 12.** 运行以下命令更新 EEPROM 镜像

```sh
cd recovery
./update-pieeprom.sh
```

现在 pieeprom.bin 文件已准备好刷写到 Compute Module 4。

- **步骤 13.** 返回到 **usbboot** 目录

```sh
cd ..
```

- **步骤 14.** 运行 usbboot 工具以刷写引导加载程序 EEPROM

```sh
sudo ./rpiboot -d recovery
```

- **步骤 15.** 使用 USB Type-C 数据线将 reTerminal 连接到电脑

现在需要几秒钟时间将必要的文件传输到 reTerminal。

- **步骤 16.** 关闭 reTerminal，将启动模式开关拨回原始位置，并重新组装 reTerminal 外壳

- **步骤 17.** 连接一个包含合适操作系统的可启动 USB 闪存驱动器，将其插入 reTerminal 的一个 USB 端口，然后打开 reTerminal

现在您将看到 reTerminal 从连接的 USB 驱动器启动。

## Q8: 为什么 CM4 芯片周围有黑色胶水？

我们在 CM4 的芯片周围特别涂抹了 **环氧树脂底填粘合剂**（看起来像黑色胶水），以确保 IC 得到良好的保护。这也使整个 CM4 更加可靠。

## Q9: 为什么安装 reTerminal 驱动后蜂鸣器、LED 和按钮无法工作？

reTerminal 配备了两种版本的 I/O 扩展芯片。旧版本使用 MCP23008，新版本使用 PCA9554。如果您是[手动安装 reTerminal 驱动](https://wiki.seeedstudio.com/reTerminal/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os)，请检查以下内容。

首先检查您的 reTerminal 上安装的是哪种芯片。

- 打开终端窗口
- 输入命令 `i2cdetect -y 1`

如果您看到 0x20 的 I2C 地址，说明 reTerminal 配备的是 MCP23008 芯片。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/IO-extend/0x20.png" alt="pir" width={500} height="auto" /></p>

如果您看到 0x38 的 I2C 地址，说明 reTerminal 配备的是 PCA9554 芯片。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/IO-extend/0x38.jpg" alt="pir" width={500} height="auto" /></p>

对于配备 MCP23008 芯片的 reTerminal，您需要执行以下操作：

- 输入命令 `sudo nano /boot/config.txt`
- 在文件末尾添加 `dtoverlay=reTerminal,addr=0x20,mcp23008`
- 按 `Ctrl + x > y > ENTER` 保存并关闭文件
- 输入命令 `sudo reboot` 重启设备

对于配备最新 PCA9554 芯片的 reTerminal，您无需进行任何更改。

## Q10: 如何在 reTerminal 上安装 Ubuntu？

- **步骤 1.** 将 [Ubuntu Server 21.10](https://ubuntu.com/download/raspberry-pi/thank-you?version=21.10&architecture=server-arm64+raspi) 刷写到 reTerminal 的 eMMC 存储中。

**注意：** 请参考[刷写说明](https://wiki.seeedstudio.com/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc)。打开 **Raspberry Pi Imager** 后，导航到 `CHOOSE OS > Use custom` 并选择上述镜像进行刷写。

- **步骤 2.** 使用 SSH 登录到 reTerminal，并依次运行以下命令。请确保使用 **ubuntu** 作为用户名和 **ubuntu** 作为密码。

```sh
wget https://files.seeedstudio.com/wiki/ReTerminal/ubuntu/script1.sh
wget https://files.seeedstudio.com/wiki/ReTerminal/ubuntu/script2.1.sh
chmod +x script1.sh script2.1.sh
sudo ./script1.sh
sudo reboot
sudo ./script2.1.sh
sudo reboot
```

- **步骤 3.** 此时，reTerminal 将启动到 Ubuntu 桌面，但屏幕方向错误。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-portrait.jpg" alt="pir" width={1000} height="auto" /></p>

- **步骤 4.** 点击右上角的 **电源图标**，然后点击 **设置**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-settings-2.jpg" alt="pir" width={350} height="auto" /></p>

- **步骤 5.** 选择 **显示器**，在 **方向** 下选择 **Portrait Left**，然后点击 **应用**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-portrait-left-2.jpg" alt="pir" width={400} height="auto" /></p>

最后，您将看到正确方向的 Ubuntu 桌面！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-landscape.jpg" alt="pir" width={1000} height="auto" /></p>

## Q11: 安装 Raspberry Pi OS Bullseye 后屏幕方向不正确

- **步骤 1.** 将 **Raspberry Pi OS Bullseye** 刷写到 reTerminal 的 eMMC 后，按照[此指南](https://wiki.seeedstudio.com/reTerminal/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os)安装必要的驱动程序。

- **步骤 2.** 在 **.config** 目录下创建一个名为 **monitors.xml** 的新文件。

```sh
sudo vi ~/.config/monitors.xml
```

- **步骤 3.** 将以下内容复制到上述文件中，以明确设置 LCD 显示屏 (DSI-1)，然后按 **ESC** 键后输入 **:wq** 保存文件。

```sh
<monitors version="2">
  <configuration>
    <logicalmonitor>
      <x>0</x>
      <y>0</y>
      <primary>yes</primary>
      <monitor>
        <monitorspec>
          <connector>DSI-1</connector>
          <vendor>unknown</vendor>
          <product>unknown</product>
          <serial>unknown</serial>
        </monitorspec>
        <mode>
          <width>720</width>
          <height>1280</height>
          <rate>60.000</rate>
        </mode>
      </monitor>
      <transform>
        <rotation>right</rotation>
      </transform>
    </logicalmonitor>
  </configuration>
</monitors>
```

- **步骤 4.** 打开 **/boot/config.txt** 文件。

```sh
sudo vi /boot/config.txt
```

- **步骤 5.** 在文件中添加以下内容。

```sh
dtoverlay=reTerminal,tp_rotate=1
```

- **步骤 6.** 重启 reTerminal。

```sh
sudo reboot
```

现在屏幕将以正确的方向显示！

## Q12: 触摸屏不准确的故障排除

在将屏幕配置为正确方向后，触摸位置可能仍然不准确，当您触摸显示屏的特定区域时，光标可能会朝意外的方向移动。为了解决此问题，请按照以下步骤操作。

- **步骤 1** : 打开终端并通过以下命令进入 xorg.conf.d 文件夹。

```sh
cd /usr/share/X11/xorg.conf.d
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/lcd_touch2.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 2** : 您将看到 "40-libinput.conf" 文件，可以通过以下命令编辑该文件。

```sh
sudo nano 40-libinput.conf
```

- **步骤 3**: 找到 **touchscreen** InputClass 的 InputClass 部分。

- **步骤 4**: 添加以下内容。您可以参考截图。

```sh
Option "TransformationMatrix" "0 1 0 -1 0 1 0 0 1
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/lcd_touch1.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 5** : 按 Ctrl+O 保存并按回车键，然后按 Ctrl+X 退出，之后重启设备。

```sh
Sudo reboot 
```

重启后，您可能会注意到触摸位置现在是准确的。这意味着当您触摸显示屏的特定区域时，光标会按照预期方向移动。

## Q13: 安装 reTerminal 驱动程序后 LED 和蜂鸣器无法工作

此问题不会持续很久。我们将在未来通过 reTerminal 驱动程序完全解决此问题。

- **步骤 1.** 打开 **/boot/config.txt** 文件。

```sh
sudo vi /boot/config.txt
```

- **步骤 2.** 注释掉以下行，并按 **ESC** 键后输入 **:wq** 保存文件。

```sh
#dtoverlay=reTerminal-bridge
```

- **步骤 3.** 重启 reTerminal。

```sh
sudo reboot
```

现在 LED 和蜂鸣器将正常工作。

## Q14: 如何检查加密芯片是 ATECC608A-SSHDA-B 还是 ATECC608A-TNGTLSS-G

| 发布日期 | 加密芯片 IC 版本 |
|---|---|
| 2021 年 9 月 3 日之前 | ATECC608A-SSHDA-B |
| 2021 年 9 月至 2022 年 1 月 | ATECC608A-SSHDA-B 或 ATECC608A-TNGTLSS-G |
| 2022 年 2 月 1 日之后 | ATECC608A-TNGTLSS-G |

要检查加密芯片的类型，可以在终端中输入命令 ```i2cdetect -y 3```。如果在输出表中看到 ```0x35```，则说明 reTerminal 配备了 ATECC608A-TNGTLSS-G 芯片，否则配备的是 ATECC608A-SSHDA-B。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/i2cdetect_03.png" alt="pir" width={500} height="auto" /></p>

## 资源

- **[PDF]** [reTerminal 原理图](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.3_SCH.pdf)

- **[ZIP]** [reTerminal 原理图](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.3_SCH.zip)

- **[PDF]** [Raspberry Pi Compute Module 4 数据手册](https://datasheets.raspberrypi.org/cm4/cm4-datasheet.pdf)

- **[网页]** [Raspberry Pi 官方文档](https://www.raspberrypi.org/documentation/)

# 技术支持

感谢您选择我们的产品！我们为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>