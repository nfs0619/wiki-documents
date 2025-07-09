---
description: XIAO nRF52840(sense) 与 Zephyr(RTOS)
title:  XIAO nRF52840(sense) 与 Zephyr(RTOS)
keywords:
- 软件
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-nRF52840-Zephyr-RTOS
last_update:
  date: 05/15/2025
  author: Tim
---

# XIAO nRF52840(sense) 与 Zephyr(RTOS)

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-ble.png"/></div>

## 什么是 RTOS

当今嵌入式系统中最重要的组件之一是 **RTOS**，即 **实时操作系统**，它负责从任务调度到执行应用程序的所有工作。

**RTOS** 旨在提供可预测的执行模式。当处理必须满足系统的时间限制时，就会使用 RTOS。因此，与 GPOS（通用操作系统）相比，RTOS 通常重量轻、体积小，通常仅提供运行特定类型应用程序所需的功能。在某些情况下，开发人员可以修改现有的 RTOS，将其缩减为仅提供特定应用程序所需的功能，并/或定制其功能或性能特性。

## 什么是 [Zephyr](https://www.zephyrproject.org/)

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

[**Zephyr**](https://www.zephyrproject.org/) 操作系统基于一个小型内核，专为资源受限和嵌入式系统设计：从简单的嵌入式环境传感器和 LED 可穿戴设备到复杂的嵌入式控制器、智能手表和物联网无线应用。

## 特性
Zephyr 提供了大量且不断增长的功能，包括：

### 广泛的内核服务套件

Zephyr 提供了许多熟悉的开发服务：

- *多线程服务*：支持协作、基于优先级、非抢占式和抢占式线程，以及可选的循环时间片。包括与 POSIX pthreads 兼容的 API 支持。
- *中断服务*：用于在编译时注册中断处理程序。
- *内存分配服务*：用于动态分配和释放固定大小或可变大小的内存块。
- *线程间同步服务*：支持二进制信号量、计数信号量和互斥信号量。
- *线程间数据传递服务*：支持基本消息队列、增强消息队列和字节流。
- *电源管理服务*：包括全局、应用程序或策略定义的系统电源管理，以及细粒度的驱动程序定义设备电源管理。

### 多种调度算法

Zephyr 提供了一套全面的线程调度选项：
- 协作和抢占式调度
- 最早截止时间优先（EDF）
- Meta IRQ 调度实现“中断底半部”或“任务处理”行为
- 时间片：在具有相同优先级的抢占线程之间启用时间片
- 多种队列策略：
  - 简单链表就绪队列
  - 红黑树就绪队列
  - 传统多队列就绪队列

### 支持蓝牙低功耗 5.0
符合蓝牙 5.0 标准（ESR10）并支持蓝牙低功耗控制器（LE 链路层）。包括蓝牙 Mesh 和蓝牙认证准备的蓝牙控制器。

- 通用访问配置文件（GAP），支持所有可能的 LE 角色
- 通用属性配置文件（GATT）
- 配对支持，包括蓝牙 4.2 的安全连接功能
- 干净的 HCI 驱动抽象
- 原始 HCI 接口，可将 Zephyr 作为控制器而不是完整的主机堆栈运行
- 已通过多个流行控制器验证
- 高度可配置

Mesh 支持：

- 中继、好友节点、低功耗节点（LPN）和 GATT 代理功能
- 支持两种配置承载（PB-ADV 和 PB-GATT）
- 高度可配置，适合至少 16k RAM 的设备

*参考：[**Zephyr 项目**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## 入门指南

一旦设置了 Zephyr 工具链并下载了相关 SDK，就可以开始应用程序开发。

对于 Xiao nrf52840，可以参考 [板描述文件](https://docs.zephyrproject.org/latest/boards/seeed/xiao_ble/doc/index.html) 以获取更多设置信息。

要对 Xiao nrf52840 进行编程，可以按照以下步骤操作：
1. 构建示例或您的应用程序
2. 插入 Xiao nrf52840
3. 双击 `RST` 按钮，将设备设置为 uf2 引导加载模式
4. 运行命令 `west flash -r uf2` 以烧录设备

最简单的示例是在板上运行 "Hello World" 样例。在切换到 Zephyr 安装目录后运行以下命令：

```
west build -p always -b xiao_ble samples/hello_world
```

如果您使用的是 Xiao nRF52840 Sense 板，可以通过使用 `xiao_ble/nrf52840/sense` 替代 `xiao_ble` 来构建其板定义文件（对于此示例没有区别）：

```
west build -p always -b xiao_ble/nrf52840/sense samples/hello_world
```

完成后，进入 uf2 引导加载模式并输入：
```
west flash -r uf2
```

找到您的设备端口，在 Ubuntu 中可以通过运行 `ls /dev/tty*` 并确认插入 USB 后出现的设备来完成。

在我的示例中，我看到 `/dev/ttyACM0`：

使用 screen 可以连接并监控串口响应：
```
screen /dev/ttyACM0 115200
```

您应该会看到类似以下的响应：
```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
Hello World! xiao_ble/nrf52840
```

为了帮助使用 Zephyr 与 Xiao 及其扩展板的过程，已构建了一个包含多个覆盖和配置的仓库。此 Wiki 文章中包含的命令假设它位于 Zephyr 根目录的 `../applications/xiao-zephyr-examples` 相对路径。可以通过更新路径提供替代路径。

```
git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples
```

## 硬件准备

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO nrf52840 Sense</th>
      <th>Seeed Studio 扩展板</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

### 开发者知识

#### XIAO 扩展板

为了使用 Grove 模块与 Seeed Studio XIAO nrf52840，我们将使用 [Seeed Studio XIAO 扩展底板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) 并将 XIAO nrf52840 连接到扩展板上。

之后，扩展板上的 Grove 接口可以用于连接 Grove 模块。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### 引脚定义

您需要按照下面的图示，在将 Grove 模块连接到 Seeed Studio XIAO 的 Grove Shield 上的 Grove 接口时使用适当的内部引脚编号。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/pinout2.png"style={{width:900, height:'auto'}}/></div>

### 主要功能

- 板载 LED
- 板载 IMU（传感器）
- 板载麦克风（传感器）
- 蓝牙
- TFLite

#### 板载 LED

在这个示例中，我们将使用 blinky 示例来让板载 LED 闪烁。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/basic/blinky
```

双击 RESET 按钮，然后烧录：

```
west flash -r uf2
```

您将看到板载红色 LED 开启和关闭，形成闪烁效果。

让我们深入了解这个示例为何能够工作。

相关的示例代码引用了 led0：
```
#define LED0_NODE DT_ALIAS(led0)
static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);
```

这在 Xiao nRF52840 的设备树代码中通过别名定义：
```
	aliases {
		led0 = &led0;
	};

	leds {
		compatible = "gpio-leds";
		led0: led_0 {
			gpios = <&gpio0 26 GPIO_ACTIVE_LOW>;
			label = "Red LED";
		};
  ...
  }
```

它对应于板上的 26 号引脚。

对于 Xiao 的引脚，您不需要直接使用 &gpio0 引脚映射，因为板文件提供了一个 Xiao 接口，简化了接口使用。

例如，如果我要引用 D0，我可以将其引用为 `&gpio 2` 或 `&xiao_d 0`。

```
/ {
	xiao_d: connector {
		compatible = "seeed,xiao-gpio";
		#gpio-cells = <2>;
		gpio-map-mask = <0xffffffff 0xffffffc0>;
		gpio-map-pass-thru = <0 0x3f>;
		gpio-map
			= <0 0 &gpio0 2 0>		/* D0 */
			, <1 0 &gpio0 3 0>		/* D1 */
			, <2 0 &gpio0 28 0>		/* D2 */
			, <3 0 &gpio0 29 0>		/* D3 */
			, <4 0 &gpio0 4 0>		/* D4 */
			, <5 0 &gpio0 5 0>		/* D5 */
			, <6 0 &gpio1 11 0>		/* D6 */
			, <7 0 &gpio1 12 0>		/* D7 */
			, <8 0 &gpio1 13 0>		/* D8 */
			, <9 0 &gpio1 14 0>		/* D9 */
			, <10 0 &gpio1 15 0>		/* D10 */
			;
	};
};
```

#### 板载 IMU（传感器）

Xiao nrf52840 的主要功能之一是其内置的 IMU 传感器。通过这些数据，可以训练机器学习模型、检测手势、板子的运动等。

为了测试这个功能，我们将使用一个内置的示例，该示例利用 IMU，并查看相关代码为何能够工作。

```
cd ~/zephyrproject/zephyr
west build -p -b xiao_ble/nrf52840/sense samples/sensor/lsm6dsl
```

双击 RESET 按钮，然后烧录：

```
west flash -r uf2
```

接下来，您需要连接以查看输出：

```
screen /dev/ttyACM0 115200
```

这应该显示如下内容：
```
3LSM6DSL sensor samples:

accel x:1.330409 ms/2 y:-1.705484 ms/2 z:9.957133 ms/2
gyro x:0.049632 dps y:-0.070860 dps z:-0.006184 dps
loop:46 trig_cnt:9677

3LSM6DSL sensor samples:

accel x:1.314257 ms/2 y:-1.734198 ms/2 z:9.902696 ms/2
gyro x:-0.220216 dps y:0.032833 dps z:-0.000458 dps
loop:47 trig_cnt:9892

3LSM6DSL sensor samples:

accel x:1.414158 ms/2 y:-1.476371 ms/2 z:9.835697 ms/2
gyro x:0.035430 dps y:-0.132252 dps z:-0.007788 dps
loop:48 trig_cnt:10107
```

为什么它能够工作？我们可以通过 Zephyr 的 [示例代码](https://github.com/zephyrproject-rtos/zephyr/tree/main/samples/sensor/lsm6dsl) 来查看。

```
	const struct device *const lsm6dsl_dev = DEVICE_DT_GET_ONE(st_lsm6dsl);
```

示例逻辑找到目标板的相关 `st_lsm6dsl` 设备树对象。我们可以查看 Xiao nrf52840 sense 的设备树，进一步了解其配置：

```
	lsm6ds3tr-c-en {
		compatible = "regulator-fixed-sync", "regulator-fixed";
		enable-gpios = <&gpio1 8 (NRF_GPIO_DRIVE_S0H1 | GPIO_ACTIVE_HIGH)>;
		regulator-name = "LSM6DS3TR_C_EN";
		regulator-boot-on;
		startup-delay-us = <3000>;
	};
```

```
&i2c0 {
	compatible = "nordic,nrf-twim";
	/* Cannot be used together with spi0. */
	status = "okay";
	pinctrl-0 = <&i2c0_default>;
	pinctrl-1 = <&i2c0_sleep>;
	pinctrl-names = "default", "sleep";
	clock-frequency = <I2C_BITRATE_FAST>;

	lsm6ds3tr_c: lsm6ds3tr-c@6a {
		compatible = "st,lsm6dsl";
		reg = <0x6a>;
		irq-gpios = <&gpio0 11 GPIO_ACTIVE_HIGH>;
		status = "okay";
	};
};
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/imu.jpg" style={{width:500, height:'auto'}}/></div>

一个 GPIO 被用于启用引脚电源。从定义文件中可以看到它使用了 GPIO1 8。以下是 [Xiao nRF52840 原理图](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf) 的相关部分：

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/schematic-pin-highlight-imu.png?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/schematic-pin-highlight-imu.png" style={{width:500, height:'auto'}}/></div>

从这个原理图的高亮部分可以看到 GPIO1 8 是 IMU 的启用引脚。此外 GPIO0 11 是中断引脚。因此，这在上述设备树片段中得到了反映。

#### 板载麦克风（传感器）

Xiao nrf52840 的主要功能之一是其内置麦克风。与 IMU 类似，它通过使用麦克风支持许多机器学习应用。

为了测试这个功能，我们将使用一个内置的示例，该示例利用麦克风，并查看相关代码为何能够工作。

```
cd ~/zephyrproject/zephyr
west build -p -b xiao_ble/nrf52840/sense samples/drivers/audio/dmic
```

双击 RESET 按钮，然后烧录固件：

```
west flash -r uf2
```

接下来，您需要连接以查看输出：

```
screen /dev/ttyACM0 115200
```

这应该会显示如下内容：
```
[00:00:00.297,088] <inf> dmic_sample: PCM 输出速率: 16000, 通道数: 1
[00:00:00.297,119] <inf> dmic_nrfx_pdm: PDM 时钟频率: 1280000, 实际 PCM 速率: 16000
[00:00:00.397,216] <inf> dmic_sample: 0 - 获取到缓冲区 0x20008380，大小为 3200 字节
[00:00:00.497,222] <inf> dmic_sample: 1 - 获取到缓冲区 0x20006a80，大小为 3200 字节
[00:00:00.597,229] <inf> dmic_sample: 2 - 获取到缓冲区 0x20005180，大小为 3200 字节
[00:00:00.697,235] <inf> dmic_sample: 3 - 获取到缓冲区 0x20008380，大小为 3200 字节
[00:00:00.797,241] <inf> dmic_sample: 4 - 获取到缓冲区 0x20006a80，大小为 3200 字节
[00:00:00.897,247] <inf> dmic_sample: 5 - 获取到缓冲区 0x20005180，大小为 3200 字节
[00:00:00.997,222] <inf> dmic_sample: 6 - 获取到缓冲区 0x20008380，大小为 3200 字节
[00:00:01.097,229] <inf> dmic_sample: 7 - 获取到缓冲区 0x20006a80，大小为 3200 字节
[00:00:01.097,259] <inf> dmic_sample: PCM 输出速率: 16000, 通道数: 2
[00:00:01.097,259] <inf> dmic_nrfx_pdm: PDM 时钟频率: 1280000, 实际 PCM 速率: 16000
[00:00:01.197,387] <inf> dmic_sample: 0 - 获取到缓冲区 0x20008380，大小为 6400 字节
[00:00:01.297,393] <inf> dmic_sample: 1 - 获取到缓冲区 0x20005180，大小为 6400 字节
[00:00:01.397,399] <inf> dmic_sample: 2 - 获取到缓冲区 0x20006a80，大小为 6400 字节
[00:00:01.497,375] <inf> dmic_sample: 3 - 获取到缓冲区 0x20008380，大小为 6400 字节
[00:00:01.597,381] <inf> dmic_sample: 4 - 获取到缓冲区 0x20005180，大小为 6400 字节
[00:00:01.697,387] <inf> dmic_sample: 5 - 获取到缓冲区 0x20006a80，大小为 6400 字节
[00:00:01.797,393] <inf> dmic_sample: 6 - 获取到缓冲区 0x20008380，大小为 6400 字节
[00:00:01.897,399] <inf> dmic_sample: 7 - 获取到缓冲区 0x20005180，大小为 6400 字节
[00:00:01.897,399] <inf> dmic_sample: 退出
```

### 为什么它能工作？
我们可以通过 Zephyr 的 GitHub 仓库查看 [示例代码](https://github.com/zephyrproject-rtos/zephyr/tree/main/samples/drivers/audio/dmic)。

此示例展示了以下内容：

> 这是一个非常简单的应用程序，旨在展示如何使用 :ref:`Audio DMIC API`，同时也为开发实现此 API 的驱动程序提供帮助。它执行了两次 PDM 传输，使用了不同的配置（单通道和双通道），但并未对接收到的音频数据进行任何处理。

```
const struct device *const dmic_dev = DEVICE_DT_GET(DT_NODELABEL(dmic_dev));
```

示例逻辑会找到目标板的 `dmic_dev` 设备树对象。我们可以查看 Xiao nRF52840 Sense 的设备树，进一步了解其配置方式：

```
/ {
	msm261d3526hicpm-c-en {
		compatible = "regulator-fixed";
		enable-gpios = <&gpio1 10 (NRF_GPIO_DRIVE_S0H1 | GPIO_ACTIVE_HIGH)>;
		regulator-name = "MSM261D3526HICPM-C-EN";
	};
}

&pdm0 {
	pinctrl-0 = <&pdm0_default>;
	pinctrl-1 = <&pdm0_sleep>;
	pinctrl-names = "default", "sleep";
	clock-source = "PCLK32M";
};
```

在示例项目的 overlay 文件中，此调节器被启用：
```
/ {
	msm261d3526hicpm-c-en {
		regulator-boot-on;
	};
};

dmic_dev: &pdm0 {
	status = "okay";
};
```

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/mic.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/mic.jpg" style={{width:500, height:'auto'}}/></div>

一个 GPIO 被用来启用引脚电源。以下是 [Xiao nRF52840 原理图](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf) 中相关部分的高亮：

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/schematic-pin-highlight-mic.png?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/schematic-pin-highlight-mic.png" style={{width:500, height:'auto'}}/></div>

从该原理图高亮部分可以看到，GPIO1 10 是麦克风的使能引脚。

#### 蓝牙

要测试此设置，我们可以使用 Zephyr 的现有示例：

```
west build -p always -b xiao_ble samples/bluetooth/observer
```

烧录到开发板：
```
west flash -r uf2
```

烧录完成后，等待 MCU 重置并连接监控：
```
screen /dev/ttyACM0 115200
```

您将看到一个控制台，可以向开发板发送命令：
```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
Starting Observer Demo
Started scanning...
Exiting main thread.
Device found: EC:11:27:22:AF:D2 (public) (RSSI -74), type 0, AD data len 31
Device found: 0D:9A:BE:8D:10:FC (random) (RSSI -81), type 3, AD data len 31
Device found: D2:70:D8:F2:6F:C4 (random) (RSSI -68), type 0, AD data len 20
Device found: 72:7C:3C:87:E2:17 (random) (RSSI -77), type 0, AD data len 17
Device found: 65:65:23:B9:AD:EC (random) (RSSI -68), type 0, AD data len 17
Device found: 6D:39:26:C2:94:B5 (random) (RSSI -70), type 0, AD data len 18
```

```
CONFIG_BT=y
CONFIG_BT_OBSERVER=y
```

[配置文件](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/bluetooth/observer/prj.conf) 启用了 Zephyr 构建的蓝牙相关功能。

#### TFLite - Hello World

启用 Zephyr 的 TFLite 并更新：
```
west config manifest.project-filter -- +tflite-micro
west update
```

构建示例并烧录到开发板：
```
west build -p always -b xiao_ble samples/modules/tflite-micro/hello_world
```

烧录到开发板：
```
west flash -r uf2
```

烧录完成后，等待 MCU 重置并连接监控：
```
screen /dev/ttyACM0 115200
```

您将从控制台看到返回的结果：
```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
x_value: 1.0*2^-127, y_value: 1.0*2^-127

x_value: 1.2566366*2^-2, y_value: 1.4910772*2^-2

x_value: 1.2566366*2^-1, y_value: 1.1183078*2^-1

x_value: 1.8849551*2^-1, y_value: 1.677462*2^-1

x_value: 1.2566366*2^0, y_value: 1.9316229*2^-1

x_value: 1.5707957*2^0, y_value: 1.0420598*2^0

x_value: 1.8849551*2^0, y_value: 1.9146791*2^-1

x_value: 1.0995567*2^1, y_value: 1.6435742*2^-1

x_value: 1.2566366*2^1, y_value: 1.0674761*2^-1

x_value: 1.4137159*2^1, y_value: 1.8977352*2^-3
```

关于 TFLite 的更多信息超出了本指南的范围，但示例展示了设备的功能以及运行 TFLite 设置所需的组件。

### 额外组件

- [Grove - 扩展板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - I2C 显示屏
- [Grove - 扩展板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - 按钮
- [Grove - 扩展板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - 蜂鸣器
- [Grove - 扩展板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - SD 卡
- [Grove - 温湿度传感器 (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [1.69 英寸 LCD 显示模块，240×280 分辨率，SPI 接口](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)
- [Xiao 圆形显示屏](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)
- [Xiao 圆形显示屏](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html) - SD 卡

#### Grove - 扩展板 - I2C 显示屏

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/xiao_expansion_oled-nrf.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/xiao_expansion_oled-nrf.jpg" style={{width:500, height:'auto'}}/></div>

要测试此设置，我们可以使用 Zephyr 的现有示例：

```
west build -p always -b xiao_ble samples/drivers/display --  -DSHIELD=seeed_xiao_expansion_board
west flash -r uf2
```

您将看到显示屏显示多个黑色方块，并在角落有一个闪烁的方块，因为此显示屏仅支持两种颜色。

让我们深入了解此示例为何有效：
```
/ {
    chosen {
      zephyr,display = &ssd1306;
    };
};

&xiao_i2c {
  status = "okay";

  ssd1306: ssd1306@3c {
    compatible = "solomon,ssd1306fb";
    reg = <0x3c>;
    width = <128>;
    height = <64>;
    segment-offset = <0>;
    page-offset = <0>;
    display-offset = <0>;
    multiplex-ratio = <63>;
    segment-remap;
    com-invdir;
    prechargep = <0x22>;
  };
};
```

扩展板在 0x3C 寄存器上设置了一个 SSD1306 OLED 屏幕。它在 `chosen` 部分中被选为 Zephyr 的显示屏。

#### Grove - 扩展板 - 按钮

要测试此设置，我们可以使用 Zephyr 的现有示例：

```
west build -p always -b xiao_ble samples/basic/button -- -DSHIELD=seeed_xiao_expansion_board
```

烧录到您的开发板：
```
west flash -r uf2
```

烧录后等待 MCU 重置，并连接到监视器：
```
screen /dev/ttyACM0 115200
```

按下按钮时，示例会触发板载 LED 点亮。

您将在控制台上看到返回的结果：

```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
Set up button at gpio@50000000 pin 3
Set up LED at gpio@50000000 pin 26
Press the button
Button pressed at 839637
Button pressed at 857904
Button pressed at 883367
Button pressed at 1001258
```

让我们深入了解此示例为何有效：
```
/ {
    aliases {
      sw0 = &xiao_button0;
    };

    buttons {
      compatible = "gpio-keys";
      xiao_button0: button_0 {
        gpios = <&xiao_d 1 (GPIO_PULL_UP | GPIO_ACTIVE_LOW)>;
        label = "SW0";
        zephyr,code = <INPUT_KEY_0>;
      };
    };
};
```

扩展板/覆盖文件用于设置各种板载组件。通过此文件，按钮示例可以被利用，因为覆盖文件允许 Zephyr 配置按钮并使其可用于相关代码。

在此示例中，Xiao nrf52840 的 D1 引脚被设置为按钮，并通过覆盖文件将其别名为 `sw0`，以便示例代码可以使用它。

#### Grove - 扩展板 - 蜂鸣器

我们将使用 `blinky PWM` 示例通过 PWM 信号控制蜂鸣器的激活。为此，我们将使用一个自定义覆盖文件，该文件为 A3 引脚启用了 PWM。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-nrf52480/xiao_expansion_buzzer.overlay"
```

烧录后，您应该会听到一系列的蜂鸣声，随着示例的运行，声音会发生变化。

让我们看看为什么它有效：
```
&pwm0 {
	status = "disabled";
};

&sw_pwm {
	status = "okay";
	channel-gpios = <&gpio0 29 PWM_POLARITY_INVERTED>;
};

&pwm_led0 {
	pwms = <&sw_pwm 0 PWM_MSEC(20) PWM_POLARITY_INVERTED>;
};
```

覆盖文件为引脚 29 配置了 PWM 逻辑，该引脚对应于 Xiao nrf52840 引脚图中的 A3 引脚。

#### Grove - 扩展板 - SD 卡

我们将在此处使用文件系统示例以及 Xiao 扩展板屏蔽来尝试通过 SPI 与 SD 卡读卡器交互。扩展板屏蔽已将 CS 引脚配置为与 `&xiao_d 2` 引脚关联，因此除了添加屏蔽外，您无需为板子关联此功能做任何工作。为了进一步准备，我们使用了一个启用 SD 卡功能的自定义配置。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/subsys/fs/fs_sample -- -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

现在烧录并监视（首先按两次 RESET 进入 uf2 引导加载模式）：
```
west flash -r uf2
```

您应该会看到类似以下的响应：
```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
[00:00:00.483,367] <inf> sd: Maximum SD clock is under 25MHz, using clock of 24000000Hz
[00:00:00.483,856] <inf> main: Block count 15519744
Sector size 512
Memory Size(MB) 7578
Disk mounted.

Listing dir /SD: ...
[FILE] IMAGE1.JPG (size = 58422)
[FILE] IMAGE2.JPG (size = 97963)
```

在此示例中，我的 SD 卡中有两个文件。它们的名称和大小被输出到控制台。

让我们看看这里的相关元素：
```
CONFIG_SPI=y
CONFIG_DISK_DRIVER_SDMMC=y
CONFIG_GPIO=y
```

在相关配置中，我们启用了 SPI、SDMMC 磁盘驱动程序和 GPIO。如果没有这个配置，覆盖文件会导致错误，因为示例无法找到 SD 卡。

Xiao 扩展板屏蔽的相关部分如下所示：

```
&xiao_spi {
	status = "okay";
	cs-gpios = <&xiao_d 2 GPIO_ACTIVE_LOW>;

	sdhc0: sdhc@0 {
		compatible = "zephyr,sdhc-spi-slot";
		reg = <0>;
		status = "okay";
		mmc {
			compatible = "zephyr,sdmmc-disk";
			status = "okay";
		};
		spi-max-frequency = <24000000>;
	};
};
```

如前所述，`&xiao_d 2` 引脚映射用于允许选择 D2 引脚，无论使用的板子是什么，只要它支持 `&xiao_d` 引脚设置即可。

#### Grove - 温湿度传感器 (SHT31)

首先焊接引脚并将 Xiao nrf52840 连接到扩展板。然后使用 Grove 连接线将 Grove SHT31 连接到扩展板上的一个 I2C 端口。

为了测试此设置，我们可以使用 Zephyr 的现有示例：

```
west build -p always -b xiao_ble samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay
```

将板子切换到 uf2 引导模式后进行烧录：
```
west flash -r uf2
```

烧录完成后等待 MCU 重置并连接到监视器：
```
screen /dev/ttyACM0 115200
```

您将在控制台中看到返回的结果：
```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
SHT3XD: 25.68 Cel ; 54.73 %RH
SHT3XD: 25.75 Cel ; 55.44 %RH
SHT3XD: 25.79 Cel ; 55.95 %RH
SHT3XD: 25.82 Cel ; 55.93 %RH
SHT3XD: 25.84 Cel ; 56.07 %RH
SHT3XD: 25.84 Cel ; 55.69 %RH
```

让我们深入了解这个示例，看看它为什么有效：
```
 &xiao_i2c {
	sht3xd@44 {
			compatible = "sensirion,sht3xd";
			reg = <0x44>;
		};
	};
```

应用覆盖文件用于设置各种板子组件。使用此文件，SHT31 示例可以被利用，因为覆盖文件通知 [示例逻辑](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c) 如何为我们的板子配置传感器。

#### 1.69 英寸 LCD 显示模块，240×280 分辨率，SPI 接口

在此示例中，我们将使用 SPI 连接到一个 240x280 分辨率的 1.69 英寸 LCD。

首先根据以下图像将板子连接到 LCD 屏幕（在此示例中，我们使用 Xiao nrf52840，但连接的引脚布局相同）。

| 1.69 英寸 LCD SPI 显示屏 | XIAO nrf52840 |
| ----------------------- | ------------------------- |
| VCC | 3V3 |
| GND | GND |
| DIN | D10 |
| CLK | D8 |
| CS | D1 |
| DC | D3 |
| RST | D0 |
| BL | D6 |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/10.png" style={{width:700, height:'auto'}}/></div>

现在我们可以构建并烧录固件：
```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf
west flash -r uf2
```

烧录新固件后，设备现在显示与之前扩展板上的演示屏幕相同的内容，只是更新为通过 SPI 的彩色 LCD。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/spi_lcd-nrf.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/spi_lcd-nrf.jpg" style={{width:500, height:'auto'}}/></div>

#### Xiao 圆形显示屏

为了测试此设置，我们可以使用 Zephyr 的现有示例：

```
west build -p always -b xiao_ble samples/drivers/display --  -DSHIELD=seeed_xiao_round_display
```

进入引导模式并烧录设备：
```
west flash -r uf2
```

您将看到一个显示屏，显示多个彩色角落，其中一个黑色角落在闪烁。

另一个示例展示了触摸屏的使用：

```
west build -p always -b xiao_ble samples/modules/lvgl/demos --  -DSHIELD=seeed_xiao_round_display -DCONFIG_LV_Z_DEMO_MUSIC=y
```

这里展示的音乐演示只是实际屏幕的一部分，但仍然展示了触摸屏的功能。如您所见，触摸播放按钮会启动音乐动画。

从 [屏蔽文件](https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/shields/seeed_xiao_round_display/seeed_xiao_round_display.overlay) 可以看出，这通过 SPI 接口与 GC9A01 圆形显示驱动程序和通过 I2C 接口与 CHSC6X 触摸模块进行交互。

让我们深入了解这个示例，看看它如何工作：
```
/ {
    chosen {
      zephyr,display = &gc9a01_xiao_round_display;
    };

	lvgl_pointer {
		compatible = "zephyr,lvgl-pointer-input";
		input = <&chsc6x_xiao_round_display>;
	};
};

/*
 * xiao_serial 使用 Xiao 的 D6 和 D7 引脚，这些引脚分别用于
 * 控制屏幕背光和作为触摸控制器中断。
 */
&xiao_serial {
	status = "disabled";
};

&xiao_i2c {
	clock-frequency = < I2C_BITRATE_FAST >;

	chsc6x_xiao_round_display: chsc6x@2e {
		status = "okay";
		compatible = "chipsemi,chsc6x";
		reg = <0x2e>;
		irq-gpios = <&xiao_d 7 GPIO_ACTIVE_LOW>;
	};
};

&xiao_spi {
	status = "okay";
	cs-gpios = <&xiao_d 1 GPIO_ACTIVE_LOW>, <&xiao_d 2 GPIO_ACTIVE_LOW>;

	gc9a01_xiao_round_display: gc9a01@0 {
		status = "okay";
		compatible = "galaxycore,gc9x01x";
		reg = <0>;
		spi-max-frequency = <DT_FREQ_M(100)>;
		cmd-data-gpios = <&xiao_d 3 GPIO_ACTIVE_HIGH>;
		pixel-format = <PANEL_PIXEL_FORMAT_RGB_565>;
		width = <240>;
		height = <240>;
		display-inversion;
	};
};
```

此屏蔽文件完成以下操作：
- 选择 GC9A01 显示屏作为 Zephyr 的选定显示屏
- 设置 LVGL 指针逻辑以使用 CHSC6X 模块
- 禁用串口，因为引脚用于背光和触摸中断（如上所示：`irq-gpios = <&xiao_d 7 GPIO_ACTIVE_LOW>;`）
- 使用 D1、D2 和 D3 引脚通过 SPI 配置圆形显示屏

[示例逻辑](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/modules/lvgl/demos/src/main.c)依赖于 [LVGL 演示示例代码](https://github.com/lvgl/lvgl/tree/master/demos/music)，可以进一步研究。

#### Xiao 圆形显示屏 - SD 卡

我们将在这里使用文件系统示例以及 Xiao 扩展板盾尝试通过 SPI 接口与 SD 卡读卡器进行交互。扩展板盾已将 CS 引脚配置为与 `&xiao_d 2` 引脚关联，因此除了添加扩展板外，您无需为将此功能与板子关联做额外工作。为了进一步准备，我们使用了一个启用 SD 卡功能的自定义配置。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/subsys/fs/fs_sample -- -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_round_display
```

现在进行烧录和监控（首先按两次 RESET 进入 uf2 引导模式）：
```
west flash -r uf2
```

烧录完成后等待 MCU 重置并连接监控：
```
screen /dev/ttyACM0 115200
```

您应该会看到类似以下的响应：
```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
[00:00:00.491,485] <inf> sd: Maximum SD clock is under 25MHz, using clock of 24000000Hz
[00:00:00.491,973] <inf> main: Block count 15519744
Sector size 512
Memory Size(MB) 7578
Disk mounted.

Listing dir /SD: ...
[FILE] IMAGE1.JPG (size = 58422)
[FILE] IMAGE2.JPG (size = 97963)
```

如预期，文件内容以类似 Xiao 扩展板 SD 卡示例的方式显示。

以下是圆形显示屏扩展板相关部分的配置：

```
&xiao_spi {
	status = "okay";
	cs-gpios = <&xiao_d 1 GPIO_ACTIVE_LOW>, <&xiao_d 2 GPIO_ACTIVE_LOW>;

	sdhc_xiao_round_display: sdhc@1 {
		compatible = "zephyr,sdhc-spi-slot";
		reg = <1>;
		status = "okay";
		mmc {
			compatible = "zephyr,sdmmc-disk";
			status = "okay";
		};
		spi-max-frequency = <DT_FREQ_M(24)>;
	};
};
```

D2 被用作 SD 卡的 CS 引脚。

## ✨ 贡献者项目

- 本项目由 Seeed Studio [贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=57293418) 支持。
- 感谢 **Tim 的努力**，您的工作将被[展示](https://wiki.seeedstudio.com/Honorary-Contributors/)。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>