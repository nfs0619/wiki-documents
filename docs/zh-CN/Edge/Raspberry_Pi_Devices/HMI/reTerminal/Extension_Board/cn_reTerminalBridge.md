---
description:   reTerminal E10-1
title:   reTerminal E10-1
keywords:
  - Edge
  - reTerminal Extension_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminalBridge
last_update:
  date: 05/15/2025
  author: jianjing Huang
---

# **reTerminal E10-1 入门指南**

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

### **所需材料**

| reTerminal | reTerminal E10-1 |
|--------------|--------------|
|<div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/ReTerminal/wiki_thumb.png" /></div>|<div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reterminale10overviewnew.jpeg" /></div>
|[**立即购买**](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html)|[**立即购买**](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html)|

### **初步准备**

#### **连接**

注意方向，将 reTerminal 放置在 reTerminal E10-1 上，并用力使其紧密贴合。如果此时 reTerminal E10-1 已通电，reTerminal 将会唤醒并启动系统。如果您想了解更多关于 reTerminal 的信息，请点击 [**reTerminal**](https://wiki.seeedstudio.com/reTerminal/)。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image3.png"/></div>

#### **安装与拆卸**

在使用 reTerminal E10-1 的过程中，可能需要拆卸其外壳以添加外设。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image002.png"/></div>

#### **驱动安装**

如果希望 reTerminal 使用 reTerminal E10-1 的功能，需要在开始前为 reTerminal 安装驱动程序。请在 reTerminal 的终端窗口中按照以下命令操作。

```sh
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays.git
cd seeed-linux-dtoverlays
sudo ./scripts/reTerminal.sh
```
:::note
对于 **32 位操作系统**，在执行 `sudo ./scripts/reTerminal.sh` 之前需要添加以下步骤：

```
echo arm_64bit=0 | sudo tee -a /boot/config.txt
```
:::

安装完成后，请重启设备。然后使用以下命令检查 `reTerminal-bridge.dtbo` 文件是否存在，以确保驱动安装完成。

```sh
ls /boot/overlays/reTerminal-bridge.dtbo
```

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image1.jpg"/></div>

#### **安装库**

安装 python3 库。

```sh
sudo apt-get update
sudo apt-get install python3-pip
sudo pip3 install RPi.GPIO
sudo apt-get install python3-serial
```

安装 git 库。

```sh
sudo apt install -y git
```

### **电源供电**

以下是三种供电方式：

- DC 插孔
- PoE
- UPS - 18650 电池

此设备使用 NCR18650B 可充电锂离子电池。请注意，包装中不包含电池，电池可在普通便利店购买，用户需自行准备。我们推荐使用 Panasonic NCR18650B 3.6V 3400mAh 电池。

#### **DC 插孔**

为 reTerminal、扩展板和电池提供 DC 12V @4A 的电源。

#### **PoE**

PoE 电源输入为 RJ45，支持最大 25W 的电源输入。

#### **UPS - 18650 电池**

2 个带固定针脚的电池槽。

### **风扇**

**所需材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- 风扇（已包含） x1

为了在高负载下保持 reTerminal 和 reTerminal E10-1 的正常温度水平，reTerminal E10-1 内部配备了一个 3 针风扇。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image29.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image031.jpg"/></div>

以下示例介绍如何控制 reTerminal E10-1 上的风扇。

**步骤 1.** 我们可以通过以下命令直接控制风扇开关。

```sh
# 打开风扇
raspi-gpio set 23 op pn dh

# 关闭风扇
raspi-gpio set 23 op pn dl
```

**步骤 2.** 我们还可以通过检测 CPU 温度来启用和禁用风扇。请按照以下步骤下载并运行程序。

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_Fan_control.git
cd Seeed_reTerminal_Bridge_Fan_control/
sudo python3 fan.py
```

以下是 **fan.py** 代码供参考。

```python
import sys 
import time
try:
 import RPi.GPIO as GPIO 
except RuntimeError:
 print("导入 RPi.GPIO 时出错")

MAX_TEMP = 40.0
MIN_TEMP = 20.0
 
def cpu_temp():
 f = open("/sys/class/thermal/thermal_zone0/temp",'r') 
 return float(f.read())/1000
 
def main():
 channel = 23
 GPIO.setmode(GPIO.BCM)
 
 # 初始化 23 关闭
 GPIO.setup(channel,GPIO.OUT,initial=GPIO.LOW)
 is_close = True
 while 1:
  temp = cpu_temp()
  if is_close:
   if temp > MAX_TEMP:
    GPIO.output(channel,GPIO.HIGH)
    is_close = False
  else:
   if temp < MIN_TEMP:
    GPIO.output(channel,GPIO.LOW)
    is_close = True
  time.sleep(2.0)
  GPIO.setwarnings(False) 
 
if __name__ == '__main__':
 main() 
```

代码成功运行后，当检测到 CPU 温度高于 40°C 时，风扇将开启。当温度低于 20°C 时，风扇将关闭。

### **CAN 通信**

控制器局域网（CAN）是一种强大的车辆总线标准，旨在允许微控制器和设备在没有主机计算机的情况下相互通信。

**所需材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x2
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x2
- 公对公电缆 x2

以下示例介绍如何在 reTerminal E10-1 上使用 CAN。

**步骤 1.** 使用公对公电缆通过 CAN 接口连接两个 reTerminal E10-1。

H -> H  
L -> L  
GND -> GND  

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/can.jpg"/></div>

**步骤 2.** 为两个 reTerminal 单独安装 **CAN-utils**。

```sh
sudo apt install can-utils
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image4.jpg"/></div>

CAN-utils 是一组使用 CAN 接口的非常有用的调试工具。它包括以下应用程序：

- candump – 转储 CAN 数据包 – 显示、过滤并记录到磁盘。
- canplayer – 重放 CAN 日志文件。
- cansend – 发送单个帧。
- cangen – 生成随机流量。
- canbusload – 显示当前 CAN 总线的利用率。

CAN-utils 的源码可以从 [GitHub 仓库](https://github.com/linux-can/can-utils) 获取。

**步骤 3.** 为两个 reTerminal 添加配置信息。使用编辑器打开 **/boot/config.txt** 文件，在文件末尾添加 `dtoverlay=seeed-can-fd-hat-v2` 后保存，然后重启 reTerminal。

:::note
如果“帽子”上没有指定硬件的 ID EEPROM，Linux 内核将无法自动发现 SPI 接口上的 CAN 控制器。要加载适当的驱动程序，必须在启动时指定设备树覆盖设置。
:::

```sh
sudo nano /boot/config.txt
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image5.jpg"/></div>

**步骤 4.** CAN 接口的行为与网络接口类似。您可以使用 ```ifconfig -a```（接口配置）获取各种统计信息。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image6.jpg"/></div>

使用命令 `cangen can0 -v` 发送随机数据，以测试 CAN 通信是否正常。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image7.jpg"/></div>

**步骤 5.** 您可以使用以下命令手动启动 CAN 接口：

```sh
sudo ip link set can0 up type can bitrate 500000
```

**步骤 6.** 下载 [代码](https://github.com/limengdu/Seeed_reTerminal_Bridge_CAN_exmaple) 到 reTerminal。

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_CAN_exmaple
```

其中一个 reTerminal 编译并运行发送数据的代码。

```sh
cd Seeed_reTerminal_Bridge_CAN_exmaple/
gcc cantransmit.c -o cantransmit
```

以下是 **cantransmit.c** 代码供参考。

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#include <net/if.h>
#include <sys/ioctl.h>
#include <sys/socket.h>

#include <linux/can.h>
#include <linux/can/raw.h>

int main(int argc, char **argv)
{
 int s; 
 struct sockaddr_can addr;
 struct ifreq ifr;
 struct can_frame frame;

 printf("CAN Sockets Demo\r\n");

 if ((s = socket(PF_CAN, SOCK_RAW, CAN_RAW)) < 0) {
  perror("Socket");
  return 1;
 }

 strcpy(ifr.ifr_name, "can0" );
 ioctl(s, SIOCGIFINDEX, &ifr);

 memset(&addr, 0, sizeof(addr));
 addr.can_family = AF_CAN;
 addr.can_ifindex = ifr.ifr_ifindex;

 if (bind(s, (struct sockaddr *)&addr, sizeof(addr)) < 0) {
  perror("Bind");
  return 1;
 }

 frame.can_id = 0x555;
 frame.can_dlc = 5;
 sprintf(frame.data, "Hello");

 if (write(s, &frame, sizeof(struct can_frame)) != sizeof(struct can_frame)) {
  perror("Write");
  return 1;
 }

 if (close(s) < 0) {
  perror("Close");
  return 1;
 }

 return 0;
}
```

另一个 reTerminal 编译并运行接收数据的代码。

```sh
gcc canreceive.c -o canreceive
```

以下是 **canreceive.c** 代码供参考。

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#include <net/if.h>
#include <sys/ioctl.h>
#include <sys/socket.h>

#include <linux/can.h>
#include <linux/can/raw.h>

int main(int argc, char **argv)
{
 int s, i; 
 int nbytes;
 struct sockaddr_can addr;
 struct ifreq ifr;
 struct can_frame frame;

 printf("CAN Sockets Receive Demo\r\n");

 if ((s = socket(PF_CAN, SOCK_RAW, CAN_RAW)) < 0) {
  perror("Socket");
  return 1;
 }

 strcpy(ifr.ifr_name, "can0" );
 ioctl(s, SIOCGIFINDEX, &ifr);

 memset(&addr, 0, sizeof(addr));
 addr.can_family = AF_CAN;
 addr.can_ifindex = ifr.ifr_ifindex;

 if (bind(s, (struct sockaddr *)&addr, sizeof(addr)) < 0) {
  perror("Bind");
  return 1;
 }

 nbytes = read(s, &frame, sizeof(struct can_frame));

  if (nbytes < 0) {
  perror("Read");
  return 1;
 }

 printf("0x%03X [%d] ",frame.can_id, frame.can_dlc);

 for (i = 0; i < frame.can_dlc; i++)
  printf("%02X ",frame.data[i]);

 printf("\r\n");

 if (close(s) < 0) {
  perror("Close");
  return 1;
 }

 return 0;
}
```

您可以看到两个 reTerminal 成功通过 CAN 接口发送和接收数据。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image8.jpg"/></div>

除了读取数据，您可能希望过滤掉不相关的 CAN 帧。这可以在驱动程序级别完成，比在用户模式应用程序中逐帧读取更高效。

```sh
gcc canfilter.c -o canfilter
```

以下是 **canfilter.c** 代码供参考。

```c

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#include <net/if.h>
#include <sys/ioctl.h>
#include <sys/socket.h>

#include <linux/can.h>
#include <linux/can/raw.h>

int main(int argc, char **argv)
{
 int s, i; 
 int nbytes;
 struct sockaddr_can addr;
 struct ifreq ifr;
 struct can_frame frame;

 printf("CAN Sockets Receive Filter Demo\r\n");

 if ((s = socket(PF_CAN, SOCK_RAW, CAN_RAW)) < 0) {
  perror("Socket");
  return 1;
 }

 strcpy(ifr.ifr_name, "can0" );
 ioctl(s, SIOCGIFINDEX, &ifr);

 memset(&addr, 0, sizeof(addr));
 addr.can_family = AF_CAN;
 addr.can_ifindex = ifr.ifr_ifindex;

 if (bind(s, (struct sockaddr *)&addr, sizeof(addr)) < 0) {
  perror("Bind");
  return 1;
 }

 /*
 要设置过滤器，请初始化一个 can_filter 结构或结构数组，并填充 can_id 和 can_mask。
 然后调用 setsockopt()：
 */
 struct can_filter rfilter[1];

 rfilter[0].can_id   = 0x550;
 rfilter[0].can_mask = 0xFF0;
 //rfilter[1].can_id   = 0x200;
 //rfilter[1].can_mask = 0x700;

 setsockopt(s, SOL_CAN_RAW, CAN_RAW_FILTER, &rfilter, sizeof(rfilter));

 nbytes = read(s, &frame, sizeof(struct can_frame));

 if (nbytes < 0) {
  perror("Read");
  return 1;
 }

 printf("0x%03X [%d] ",frame.can_id, frame.can_dlc);

 for (i = 0; i < frame.can_dlc; i++)
  printf("%02X ",frame.data[i]);

 printf("\r\n");

 // 最后，如果不再需要该套接字，请关闭它：
 if (close(s) < 0) {
  perror("Close");
  return 1;
 }

 return 0;
}
```

:::note
大多数 CAN 控制器在硬件中包含了接收过滤器和掩码。不幸的是，目前的架构在内核中执行过滤，这并不是最优的，但仍然比将所有帧传递到用户模式应用程序要好。
:::

### **RS485 通信**

RS485，也被称为 TIA-485(-A) 或 EIA-485，是一个定义用于串行通信系统的驱动器和接收器电气特性的标准。电气信号是平衡的，并支持多点系统。实现该标准的数字通信网络可以在长距离和电气噪声环境中有效使用。多个接收器可以以线性、多点总线的形式连接到这样的网络中。

**所需材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- [USB 转 RS485 工业隔离转换器](https://www.seeedstudio.com/USB-TO-RS232--RS485--TTL-Industrial-Isolated-Converter-p-3231.html) 和连接线

本示例介绍如何在 reTerminal E10-1 上使用 RS485。

**步骤 1.** 由于 RS485 功能使用 ttyS0，因此在开始之前需要关闭 ttyS0 的系统交互功能。

```sh
sudo raspi-config
```

依次选择 **Interface Options** 和 **Serial port**。

在下一个屏幕中，系统会提示您是否希望通过串口访问登录 shell，选择 **No**。

然后在“Do you want to use serial port hardware”中，确保选择 **Yes**。

当 reTerminal 完成更改后，您将看到以下文本出现在屏幕上。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image9.jpg"/></div>

**步骤 2.** 使用电缆通过 RS485 接口将 reTerminal E10-1 连接到计算机。

A -> A  
B -> B  
GND -> GND  

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/rs485.jpg"/></div>

**步骤 3.** 使用命令 `dmesg | grep tty` 查看串口名称。确定用于与计算机进行 RS485 通信的串口名称。此名称可能因计算机而异。通常为 **ttyS0**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image10.png"/></div>

**步骤 4.** 下载 [代码](https://github.com/limengdu/Seeed_reTerminal_Bridge_RS485_exmaple) 到 reTerminal。

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_RS485_exmaple
cd Seeed_reTerminal_Bridge_RS485_exmaple/
```

在计算机上打开串口软件。执行命令 `sudo python3 rs485.py`，以获得以下效果。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image11.png"/></div>

同时，您还可以在接收到消息后的 5 秒内通过串口助手向 reTerminal 发送 16 字节的数据。

以下是 **rs485.py** 代码供参考。

```c
import serial, time
try:
    import RPi.GPIO as GPIO
except RuntimeError:
    print("Error importting Rpi.GPIO")

GPIO.setmode(GPIO.BCM)

ser = serial.Serial()
ser.port = "/dev/ttyS0"
channel1 = 25
channel2 = 17

#9600,N,8,1
ser.baudrate = 9600
ser.bytesize = serial.EIGHTBITS    # 每字节的位数
ser.parity = serial.PARITY_NONE    # 设置奇偶校验
ser.stopbits = serial.STOPBITS_ONE # 停止位的数量

ser.timeout = 0.5                  # 非阻塞读取 0.5 秒
ser.writeTimeout = 0.5             # 写入超时 0.5 秒
ser.xonxoff = False                # 禁用软件流控制
ser.rtscts = False                 # 禁用硬件 (RTS/CTS) 流控制
ser.dsrdtr = False                 # 禁用硬件 (DSR/DTR) 流控制

GPIO.setup(channel1,GPIO.OUT,initial=GPIO.LOW)
GPIO.setup(channel2,GPIO.OUT,initial=GPIO.LOW)

try:
    ser.open()
except Exception as ex:
    print ("打开串口错误 " + str(ex))
    exit()

if ser.isOpen():
    try:
        ser.flushInput() # 清空输入缓冲区
        ser.flushOutput() # 清空输出缓冲区
        GPIO.output(channel1,GPIO.HIGH)
        GPIO.output(channel2,GPIO.HIGH)
        time.sleep(0.1)
        # 写入数据
        ser.write("rs485 通信已开启，您可以尝试发送数据...\n".encode())
        print("发送成功\n")
        GPIO.output(channel2,GPIO.LOW)
        time.sleep(5)  # 等待 5 秒
        # 读取数据
        response = ser.read(16)
        print("读取 16 字节数据:")
        print(response)
        ser.close()
    except Exception as e1:
        print ("通信错误 " + str(e1))
else:
    print ("打开串口错误")
```

### **RS232 通信**

RS-232 或推荐标准 232 是一种最初于 1960 年引入的用于数据串行通信传输的标准。它正式定义了 DTE 和 DCE 之间的信号连接。与后来的接口（如 RS-422、RS-485 和以太网）相比，RS-232 的传输速度较低、最大电缆长度较短、电压摆幅较大、标准连接器较大、不支持多点能力且多点连接能力有限。

**所需材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- [USB 转 RS232 工业隔离转换器](https://www.seeedstudio.com/USB-TO-RS232--RS485--TTL-Industrial-Isolated-Converter-p-3231.html) 和连接线

本示例介绍如何在 reTerminal E10-1 上使用 RS232。

**步骤 1.** 由于 RS485 功能使用 ttyS0，因此在开始之前需要关闭 ttyS0 的系统交互功能。

```sh
sudo raspi-config
```

依次选择 **Interface Options** 和 **Serial port**。

在下一个屏幕中，系统会提示您是否希望通过串口访问登录 shell，选择 **No**。

然后在“Do you want to use serial port hardware”中，确保选择 **Yes**。

当 reTerminal 完成更改后，您将看到以下文本出现在屏幕上。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image9.jpg"/></div>

**步骤 2.** 使用一根电缆通过 RS232 接口将 reTerminal E10-1 连接到计算机。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/rs232.jpg"/></div>

**步骤 3.** 使用命令 `dmesg | grep tty` 查看串口名称。确定用于与计算机进行 RS232 通信的串口名称。此名称可能因计算机而异。通常情况下，它是 **ttyS0**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image12.jpg"/></div>

**步骤 4.** 下载 [代码](https://github.com/limengdu/Seeed_reTerminal_Bridge_RS232_exmaple) 到 reTerminal。

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_RS232_exmaple
cd Seeed_reTerminal_Bridge_RS232_exmaple/
```

其中一个 reTerminal 编译并运行发送数据的代码。

```sh
sudo python3 rs232_send.py
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image13.jpg"/></div>

以下是 **rs232_send.py** 代码供参考。

```python
#!/usr/bin/env python
import time
import serial

ser = serial.Serial(
        port='/dev/ttyS0',              # 请根据 reTerminal 显示的串口名称在此处修改
        baudrate = 9600,
        parity=serial.PARITY_NONE,
        stopbits=serial.STOPBITS_ONE,
        bytesize=serial.EIGHTBITS,
        timeout=1
)
counter=0
try:
        print("rs232 开始运行！\n")
        ser.write("rs232 开始运行！\n".encode())
        while 1:
                ser.write(("写入计数器:{}\n".format(counter)).encode())
                time.sleep(1)
                counter += 1
except KeyboardInterrupt:
    exit()
```

另一个 reTerminal 编译并运行接收数据的代码。

```sh
sudo python3 rs232_receive.py
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image14.jpg"/></div>

以下是 **rs232_receive.py** 代码供参考。

```python
#!/usr/bin/env python
import time
import serial

ser = serial.Serial(
        port='/dev/ttyS0',
        baudrate = 9600,
        parity=serial.PARITY_NONE,
        stopbits=serial.STOPBITS_ONE,
        bytesize=serial.EIGHTBITS,
        timeout=1
)
try:
    print("现在开始接收数据！\n")
    while 1:
            x=ser.readline()
            if x != b'':
                print(x)
except KeyboardInterrupt:
        exit()
```

### **以太网**

**所需材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1

本示例介绍如何在 reTerminal E10-1 上测试以太网连接。

**步骤 1.** 下载 **iperf3** 到 reTerminal 和计算机。

```sh
git clone https://github.com/esnet/iperf.git
```

**步骤 2.** 使用以下代码安装 **iperf3**

```
cd iperf
sudo ./configure
sudo make
sudo make install
```

**步骤 3.** 将 reTerminal 用作服务器。

```sh
iperf3 -s
```

使用计算机测试连接到 reTerminal 的网络速度。此时，请确保计算机和 reTerminal 在同一个局域网内。

```sh
iperf3 -c 192.168.xxx.xxx
```

*上述地址 "192.168.xxx.xxx" 是 reTerminal 的地址。*

例如，在我的设置中，reTerminal 的 IP 地址是 ```192.168.31.187```：

```sh
iperf3 -c 192.168.31.187
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image17.jpg"/></div>

如果需要完成更多网络测试功能，可以参考 [iperf](https://github.com/esnet/iperf) 项目网站上的查询参数使用方法。

### **WM1302 (USB/SPI) LoRaWAN 网关**

**所需材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- [WM1302 LoRaWAN 网关模块 (USB/SPI) US/EU](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-USB-EU868-p-4892.html) x1

USB 和 SPI 模块之间的区别如下所示：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reTerminalLoRa.png"/></div>

本示例介绍如何在 reTerminal E10-1 上使用 WM1302 LoRaWAN 网关。

**步骤 1.** 将 WM1302 模块安装到 reTerminal E10-1 上，然后用螺丝固定。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/039.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image18.jpg"/></div>

然后将风扇旁边的按钮拨到 PCIE。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/045.jpg"/></div>

**步骤 2.** 在命令行中输入 `sudo raspi-config` 打开 Raspberry Pi 软件配置工具：

- 选择 Interface Options
- 选择 SPI，然后选择 **Yes** 启用它
- 选择 I2C，然后选择 **Yes** 启用它
- 选择 Serial Port，然后对 "Would you like a login shell..." 选择 **No**，对 "Would you like the serial port hardware..." 选择 **Yes**

完成后，请重启 Raspberry Pi 以确保这些设置生效。

**步骤 3.** 下载 [WM1302 代码](https://github.com/Lora-net/sx1302_hal) 到 reTerminal 并编译。

```sh
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo make
```

**步骤 4.** 配置重置脚本。首先使用以下命令将文件下载到 **sx1302_hal/packet_forwarder**：

```
cd sx1302_hal/packet_forwarder
wget https://files.seeedstudio.com/wiki/reTerminal_Bridge/reset_lgw.sh
```

然后根据您的 WM1302 版本运行以下代码进行测试。

```sh
USB 版本
$ cd packet_forwarder
$ ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

```sh
SPI 版本
$ cd packet_forwarder
$ ./lora_pkt_fwd -c global_conf.json.sx1250.EU868
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image20.jpg"/></div>

**步骤 5.** 在 [TTN 网站](https://www.thethingsnetwork.org/)注册并登录您的账户。如果您没有账户，请注册。然后进入网关界面并点击“Get Starting”。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reTerminalLoRa1.png"/></div>

选择您的区域。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reTerminalLoRa2.png"/></div>

选择“Go to gateways”。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reTerminalLoRa3.png"/></div>

点击 **Add gateway** 添加设备：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image22.jpg"/></div>

其中，**Gateway EUI** 的值将在 **步骤 4** 中运行测试时显示在日志中。在 LoRa 选项中的频率计划（以欧洲版本为例）选择 **Europe 863-870 MHz (SF9 for RX2 - recommended)**。然后点击 **Create gateway**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image23.jpg"/></div>

**步骤 6.** （以欧洲版本为例）  
如果是 SPI 版本，编辑 **sx1302_hal/packet_forwarder** 中的 **global_conf.json.sx1250.EU868**。

如果是 USB 版本，编辑 **sx1302_hal/packet_forwarder** 中的 **global_conf.json.sx1250.EU868.USB**。

在对应的文件中搜索 **gateway_conf**。

- 然后将 **gateway_ID** 更改为网页中填写的 **Gateway EUI**。
- **server_address** 修改为网页中的 **Gateway Server address**。
- **serv_port_up** 和 **serv_port_down** 都修改为 **1700**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image24.jpg"/></div>

**步骤 7.** 再次运行 **步骤 4** 中的命令，稍后您可以在网页上看到设备的连接信息。

```sh
USB 版本
$ ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

```sh
SPI 版本
$ ./lora_pkt_fwd -c global_conf.json.sx1250.EU868
```

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image25.jpg"/></div>

:::note
上述教程基于欧洲版本的 WM1302。如果您使用的是美国版本的 WM1302，步骤基本相同，但教程中需要修改和运行的文件会有所不同。文件名参考您购买的版本以及[以下页面](https://github.com/Lora-net/sx1302_hal/tree/master/packet_forwarder)。
:::

### **硬盘扩展**

**所需材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- M.2 B 键连接器 x1

本示例介绍如何在 reTerminal E10-1 上安装和检查硬盘操作。

**步骤 1.** 打开 reTerminal E10-1 的后盖，将 M.2 SSD 插入 Mini-PCIe 连接器并用螺丝固定。关闭后盖，连接 reTerminal 并通电。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/040.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image26.jpg"/></div>

然后将风扇旁边的按钮转到 M.2。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/046.jpg"/></div>

**步骤 2.** 输入命令以查看是否检测到 SSD 存储设备。

```sh
sudo fdisk -l
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/025.png"/></div>

**步骤 3.** 我们还可以使用 dd 命令测试硬盘的读写速度。

```sh
读取
$ sudo dd if=/dev/sda3 of=/dev/null bs=512k count=500
```

```sh
写入
$ sudo dd if=/dev/zero of=/dev/sda3 bs=512k count=500
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/28.jpg"/></div>

:::note
确保您使用的是 M.2 B 键。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/add_pic_1.png"/></div>
:::

#### 格式化硬盘

:::caution
以下步骤将擦除您连接到 reTerminal E10-1 的 SSD 上的所有数据，如果您选择了错误的驱动器介质也会导致数据丢失，因此请确保您仔细遵循以下步骤并理解每一步的目的。
:::

- **使用的软件工具**: ```lsblk```, ```fdisk```, ```mkfs```, ```mount```, ```umount```

**步骤 1.** 找到您的 SSD 设备名称  
将 SSD 连接到 reTerminal E10-1 并连接到 reTerminal 后，系统启动后打开终端，然后输入以下命令：

```sh
lsblk
```

您应该看到类似的内容：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/lsblk.png"/></div>

**步骤 2.** 使用 fdisk 对 SSD 进行分区

:::caution
完成此步骤后，您连接到 reTerminal E10-1 的 SSD 上的数据将丢失。
:::

按照上述步骤，在终端中输入以下命令，注意 /dev/**sdX**，其中 **X** 是您选择格式化的 **SSD 设备名称**，确保没有其他 USB 驱动器连接到 reTerminal，除非您确信设备名称正确。

```sh
sudo fdisk /dev/sdX
```

例如，在我的情况下：

```sh
sudo fdisk /dev/sda
```

您应该看到如下内容：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/fdisk.png"/></div>

在 fdisk 提示符下：

```bash
Welcome to fdisk (util-linux 2.36.1).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.


Command (m for help):
```

首先输入 **```d```** 删除 SSD 设备上的分区。

然后输入 **```n```** 在 SSD 设备上创建新分区。

之后您应该看到以下消息：

```sh
Partition type
   p   primary (0 primary, 0 extended, 4 free)
   e   extended (container for logical partitions)
```

键入 **```p```** 以创建一个主分区，然后输入 **```1```**。

对于第一个扇区，您可以按 **ENTER** 使用驱动器的起始扇区作为默认值，或者您可以指定分区 1 在 SSD 上的起始扇区位置。在我的情况下，我按了 Enter 使用默认值。

接下来选择分区 1 的最后一个扇区，如果您希望将整个驱动器空间用于分区 1，只需按 **ENTER**，或者您可以输入分区 1 结束位置的具体扇区位置，这也决定了您创建的分区 1 的存储大小。

然后按 **```Y```** 删除签名。

接着输入 **```w```** 写入更改并退出 fdisk 提示符。

以下是该过程的示例：
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/fdisk_sample.png"/></div>

**步骤 3.** 将您的 SSD 分区格式化为 ext4 格式  
现在您已经为 SSD 创建了分区，您需要将分区格式化为 ext4 格式以便挂载和使用。可以使用 mkfs.ext4 命令完成此操作：

```bash
sudo mkfs.ext4 /dev/sdXX
```

其中 ```sdXX``` 是您的 SSD 的设备名称，在我的情况下，我使用的是 ```/dev/sda1```，如下所示：

```bash
sudo mkfs.ext4 /dev/sda1
```

在提示 ```Proceed anyway? (y,N)``` 时，输入 **```y```** 并按 **```ENTER```**，然后等待几秒钟直到过程完成。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/mkfs.png"/></div>

**步骤 4.** 挂载分区  
现在您可以挂载 SSD，将其用作额外存储的外部磁盘。

```bash
sudo mkdir /media/"YOUR USER NAME"/"THE NAME YOU WANT TO MOUNT THE DRIVE"

sudo mount /dev/sdXX /media/"YOUR USER NAME"/"THE NAME YOU WANT TO MOUNT THE DRIVE"
```

其中 **"YOUR USER NAME"** 是您的 reTerminal 系统的用户名，**"THE NAME YOU WANT TO MOUNT THE DRIVE"** 是您为挂载驱动器创建的名称，**/dev/sdXX** 是您要挂载的 SSD 分区的设备名称。

例如，在我的情况下：

```bash
sudo mkdir /media/seeed/SSD

sudo mount /dev/sda1 /media/seeed/SSD/
```

通过以下命令检查 SSD 是否成功挂载：

```bash
lsblk
```

您应该会看到类似的输出，其中 **```/dev/sda1```** 挂载到 **```/media/seeed/SSD```**：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/mount.png"/></div>

### **EC25-EUX 4G 模块**

**所需材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- EC25-EUX 4G 模块 x1
- SIM 卡 x1

**步骤 1.** 打开 reTerminal E10-1 的后盖，然后将 EC25-EUX 和 SIM 卡安装到 reTerminal E10-1 上。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/039.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/041.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/042.jpg"/></div>

然后将风扇旁边的按钮切换到 PCIE。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/045.jpg"/></div>

**步骤 2.** 使用 ```lsusb``` 检查 EC25-EUX 是否被检测到

```
lsusb
lsusb -t
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/lsusb.png"/></div>

**步骤 3.** 安装串行通信工具 minicom。

```sh
sudo apt install minicom
```

**步骤 4.** 通过 minicom 连接 EC25-EUX 4G 模块。

```sh
sudo minicom -D /dev/ttyUSB2 -b 1152008n1
```

一旦串行连接打开，输入 AT 并按下 'Enter'，您应该会看到 OK。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image31.png"/></div>

**步骤 5.** 启用 4G 模块连接到 4G 网络  

请将支持 4G 的 SIM 卡插入 Li-Po 电池托架上的 SIM 卡槽，该 SIM 卡槽支持 micro SIM 卡，因此如果您有 nano SIM 卡，则需要找到一个 micro SIM 卡适配器将其转换为 micro SIM 卡。

在相同的 minicom 串行窗口中输入以下命令：

```sh
AT+QCFG="usbnet"
```

它会返回类似 ```+QCFG: "usbnet",0,``` 的内容，但我们需要将其设置为 1（ECM 模式），因此输入以下命令：

```sh
AT+QCFG="usbnet",1
```

然后输入以下命令强制调制解调器重启：

```sh
AT+CFUN=1,1
```

然后您可以重启设备或等待一段时间，让模块从您的 SIM 卡运营商获取网络。

您还可以使用命令 `ifconfig` 查询 reTerminal 的网络状态。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image33.png"/></div>

### **音频**

为了满足不同用户的多媒体需求，reTerminal E10-1 内部安装了一个扬声器模块和两个麦克风模块，以实现播放声音和录音的需求。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/028.jpg"/></div>

**所需材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1

**步骤 1.** 下载并安装驱动程序。

```sh
git clone https://github.com/Seeed-Projects/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh
```

**步骤 2.** 添加配置项。将 `dtoverlay=seeed-2mic-voicecard` 添加到 `/boot/config.txt` 文件中。然后重启设备。

```sh
sudo sed -i '$s/$/\ndtoverlay=seeed-2mic-voicecard/'  /boot/config.txt
```

要检查是否已修改 `/boot/config.txt`，您可以使用 `nano` 文本编辑器打开文件并滚动到最后一行进行检查：

```bash
nano /boot/config.txt
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image35.jpg"/></div>

一旦将其添加到 `/boot/config.txt`，您现在可以重启设备：

```bash
sudo reboot
```

在等待重启完成后，使用命令 `arecord -l` 查看录音设备。

```bash
arecord -L
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/030.png"/></div>

如上图所示，**卡 0 设备 0** 是我们需要用来录音的设备。

**步骤 3.** 根据上述信息，使用命令进行录音并保存操作。

```sh
arecord -Dhw:0,0 -d 10 -f cd -r 44100 -c 2 -t wav test.wav
```

:::note
**参数解析**

- **-D** 指定录音设备，0,0 表示卡 0 设备 0，即 bcm2835-i2s-wm8960-hifi wm8960-hifi-0。
- **-d** 指定录音时长，单位为秒。
- **-f** 指定录音格式，仅支持 cd、cdr、dat。
- **-r** 指定采样率，单位为 Hz。
- **-c** 指定通道数。
- **-t** 指定生成的文件格式。
:::

**步骤 4.** 检查播放设备。

```sh
aplay -l
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/031.png"/></div>

**步骤 5.** 调整合适的音量以播放声音。

```sh
sudo alsamixer
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image38.jpg"/></div>

```sh
sudo aplay -Dhw:0 test.wav
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image39.jpg"/></div>

## 资源

## 常见问题解答

1. 哪种类型的 18650 电池兼容？

答：推荐使用 Panasonic NCR18650B 3.6V 3400mAh。

2. 电池是否需要自带过流/欠压/过压保护？

答：不需要，因为 reTerminal E10-1 已经内置了电池保护电路。

3. 它使用的 CAN 和 RS485 控制器型号是什么？

答：

- 485 控制器：TP485E
- CAN 控制器：MCP2518FDT-E/QBB

4. 昨天安装了 E10，电池信息（电量）是否正确？即使刚从充电器取出，仍显示为红色（0%）。

```
内核：5.10.103-v8+ aarch64 位：64 控制台：tty 0 发行版：Debian GNU/Linux 10
```

电量显示功能：尚未开发，但我们已收到您的反馈，并将安排开发此功能。

5. reTerminal 扩展是否提供另一个（独立的）以太网端口 --> 因此我们有两个以太网端口？

这两个端口可以同时使用，互不影响。

6. RS232 和 RS485 是否独立/分离（有时在某些硬件中只能使用一个）？

您只能同时使用 RS232 或 RS485 中的一个。

## 资源

* [DSN 格式原理图文件](https://files.seeedstudio.com/wiki/reTerminal_Bridge/source/reTerminal_Bridge.DSN)
* [PCB 板设计文件](https://files.seeedstudio.com/wiki/reTerminal_Bridge/source/reTerminal_Bridge.brd)
* [原理图 PDF 版本](https://files.seeedstudio.com/wiki/reTerminal_Bridge/source/reTerminal_Bridge_SCH.pdf)

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