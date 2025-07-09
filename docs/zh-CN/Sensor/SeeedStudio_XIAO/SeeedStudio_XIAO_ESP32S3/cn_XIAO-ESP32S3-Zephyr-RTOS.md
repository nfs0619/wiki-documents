---
description: XIAO ESP32S3(sense) 与 Zephyr(RTOS)
title:  XIAO ESP32S3(sense) 与 Zephyr(RTOS)
keywords:
- 软件
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/xiao_esp32s3_zephyr_rtos
last_update:
  date: 05/15/2025
  author: timo614
---

# XIAO ESP32S3(sense) 与 Zephyr(RTOS)

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-esp32s3.png"/></div>

本篇 Wiki 介绍了 [Zephyr](https://www.zephyrproject.org/) 对 [Seeed Studio XIAO ESP32S3](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/) 的支持。通过本指南，您将能够利用该开发板的功能集。

## 什么是 [Zephyr](https://www.zephyrproject.org/)

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

[**Zephyr**](https://www.zephyrproject.org/) 操作系统基于一个小型内核，专为资源受限和嵌入式系统设计：从简单的嵌入式环境传感器和 LED 可穿戴设备到复杂的嵌入式控制器、智能手表和 IoT 无线应用。

对于每个支持的设备，Zephyr 都有一个 [devicetree](https://docs.zephyrproject.org/latest/build/dts/index.html) 文件，用于描述开发板及其功能。[Xiao ESP32S3 Zephyr 开发板页面](https://docs.zephyrproject.org/latest/boards/seeed/xiao_esp32s3/doc/index.html#supported-features) 描述了当前可用的支持功能，这些功能由 [开发板的 dts 文件](https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/seeed/xiao_esp32s3/xiao_esp32s3_esp32s3_procpu.yaml#L7) 定义。

*参考：[**Zephyr 项目**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## 入门指南

使用 Zephyr 的第一步是设置本地开发所需的 SDK 和工具链。请参考 [Zephyr 入门指南](https://docs.zephyrproject.org/latest/develop/getting_started/index.html) 了解与您的环境相关的设置步骤。

一旦 Zephyr 工具链设置完成并下载了相关 SDK，您就可以开始应用开发。

对于 Xiao ESP32S3，可以参考 [开发板描述文件](https://docs.zephyrproject.org/latest/boards/seeed/xiao_esp32s3/doc/index.html) 获取更多设置信息。

要获取使用 ESP32S3 所需的 blobs，请运行以下命令：

```
west blobs fetch hal_espressif
```

完成后，可以构建示例并将其烧录到开发板上。

最简单的示例是运行开发板上的 "Hello World" 示例。在切换到 Zephyr 安装目录后，运行以下命令：

```
west build -p always -b xiao_esp32s3 samples/hello_world
west flash
west espressif monitor
```

在最后一条命令中，您应该会看到显示 "Hello World!" 问候语的响应：

```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
Hello World! xiao_esp32s3
```

为了简化在 Xiao 和其扩展板上使用 Zephyr 的过程，我们构建了一个包含多个覆盖和配置的仓库。本文中的命令假设该仓库位于 Zephyr 根目录的 `../applications/xiao-zephyr-examples` 路径下。如果路径不同，可以在以下命令中更新它。

```
git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples
```

## 硬件准备

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32S3 Sense</th>
      <th>Seeed Studio 扩展板</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
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

### 开发者须知

#### XIAO 扩展板

为了使用 Grove 模块与 Seeed Studio XIAO ESP32S3 进行连接，我们将使用 [Seeed Studio XIAO 扩展底板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) 并将 XIAO ESP32S3 插入其中。

随后，扩展板上的 Grove 接口可以用于连接 Grove 模块。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### 引脚定义

在将 Grove 模块连接到 Seeed Studio XIAO 的 Grove 接口时，请参考以下图示使用适当的内部引脚编号。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg"style={{width:900, height:'auto'}}/></div>

### 主要功能

- 蓝牙
- Wi-Fi
- TFLite

#### 蓝牙

为了测试蓝牙功能，我们可以使用 Zephyr 提供的现有示例：

```
west build -p always -b xiao_esp32s3 samples/bluetooth/observer
west flash
west espressif monitor
```

您将在控制台中看到一个可用于向开发板发送命令的界面：

```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
Starting Observer Demo
Started scanning...
Exiting main thread.
Device found: EC:11:27:22:AF:D2 (public) (RSSI -77), type 0, AD data len 31
Device found: 02:96:58:9A:B4:64 (random) (RSSI -78), type 3, AD data len 31
Device found: 66:A5:E1:CF:8C:35 (random) (RSSI -58), type 0, AD data len 17
Device found: 62:09:50:DB:85:D0 (random) (RSSI -92), type 0, AD data len 14
Device found: C4:5A:95:A7:96:7D (random) (RSSI -78), type 0, AD data len 20
Device found: E5:44:60:88:DB:99 (random) (RSSI -82), type 0, AD data len 27
Device found: 66:18:ED:DD:74:1C (random) (RSSI -71), type 0, AD data len 17
Device found: 37:D2:FC:F8:FA:B8 (random) (RSSI -75), type 3, AD data len 31
Device found: 40:B8:84:E5:5F:A4 (random) (RSSI -70), type 2, AD data len 28
Device found: 44:EB:7C:AA:89:0B (random) (RSSI -83), type 0, AD data len 18
Device found: 71:AC:4A:98:5E:73 (random) (RSSI -72), type 2, AD data len 4
Device found: 60:D9:62:70:EF:4C (random) (RSSI -95), type 2, AD data len 4
Device found: D8:7D:FC:AE:37:F0 (random) (RSSI -67), type 3, AD data len 8
Device found: 48:1F:C0:29:77:C2 (random) (RSSI -73), type 2, AD data len 4
Device found: 46:B7:35:F5:D7:BE (random) (RSSI -86), type 3, AD data len 17
Device found: E5:4A:F1:1C:3C:39 (random) (RSSI -88), type 3, AD data len 8
```

```
CONFIG_BT=y
CONFIG_BT_OBSERVER=y
```

[配置文件](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/bluetooth/observer/prj.conf) 启用了 Zephyr 构建中与蓝牙相关的功能。

#### Wi-Fi

要测试此设置，我们可以使用 Zephyr 的现有示例：

```
west build -p always -b xiao_esp32s3 samples/net/wifi
west flash
west espressif monitor
```

您将看到一个控制台，用于向开发板发送命令：
```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
uart:~$
```

有几个命令可以让您查看并连接到本地网络，请参阅 [示例 readme](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/README.rst) 以获取更多信息。
```
uart:~$ wifi scan
Scan requested

Num  | SSID                             (len) | Chan (Band)   | RSSI | Security        | BSSID             | MFP
1    | Zephytopia                       10    | 6    (2.4GHz) | -42  | WPA2-PSK        |                   | Disable
2    | Maceronia                        9     | 6    (2.4GHz) | -43  | WPA2-PSK        |                   | Disable

```

让我们深入了解这个示例，看看它为什么能工作：
```
&wifi {
	status = "okay";
};
```

应用程序的 [overlay 文件](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/boards/xiao_esp32s3.overlay) 用于设置各种开发板组件。通过使用此文件，示例可以正常运行，因为 overlay 文件通知示例逻辑启用 Wi-Fi。

```
CONFIG_WIFI=y

CONFIG_NETWORKING=y
CONFIG_NET_L2_ETHERNET=y

CONFIG_NET_IPV6=n
CONFIG_NET_IPV4=y
CONFIG_NET_DHCPV4=y
CONFIG_ESP32_WIFI_STA_AUTO_DHCPV4=y

CONFIG_NET_LOG=y
```

[配置文件](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/boards/xiao_esp32s3.conf) 启用了 Zephyr 构建中与网络相关的多个功能。

#### TFLite - Hello World

启用 TFLite 并更新：
```
west config manifest.project-filter -- +tflite-micro
west update
```

构建示例并烧录到开发板：
```
west build -p always -b xiao_esp32s3 samples/modules/tflite-micro/hello_world
west flash
west espressif monitor
```

您将在控制台中看到返回的结果：
```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
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

关于 TFLite 的更多信息超出了本指南的范围，但此示例展示了设备的功能以及运行 TFLite 所需的组件。

### 附加组件

- [Grove - 扩展板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - I2C 显示屏
- [Grove - 扩展板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - 按钮
- [Grove - 扩展板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - 蜂鸣器
- [Grove - 扩展板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - SD 卡
- [Grove - 温湿度传感器 (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [1.69 英寸 LCD 显示模块，240×280 分辨率，SPI 接口](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)
- [Xiao 圆形显示屏](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)

#### Grove - 扩展板 - I2C 显示屏

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32s3/xiao_expansion_oled.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23s3_zephyr/xiao_expansion_oled.jpg" style={{width:600, height:'auto'}}/></div>

要测试此设置，我们可以使用 Zephyr 的现有示例：

```
west build -p always -b xiao_esp32s3 samples/drivers/display --  -DSHIELD=seeed_xiao_expansion_board
west flash
```

您将看到显示屏显示多个黑色方块，并且角落里有一个闪烁的方块，因为此显示屏仅支持两种颜色。

让我们深入了解这个示例，看看它为什么能工作：
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

此扩展板在 0x3C 寄存器处设置了一个 SSD1306 OLED 屏幕。在 `chosen` 部分中，它被选择为 Zephyr 的显示屏。

#### Grove - 扩展板 - 按钮

要测试此设置，我们可以使用 Zephyr 的现有示例：

```
west build -p always -b xiao_esp32s3 samples/basic/button -- -DSHIELD=seeed_xiao_expansion_board
west flash
west espressif monitor
```

按下按钮时，示例会触发板载 LED 点亮。

您将在控制台中看到返回的结果：

```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
Set up button at gpio@60004000 pin 2
Set up LED at gpio@60004000 pin 21
Press the button
Button pressed at 842621292
Button pressed at 1164489270
Button pressed at 1329015357
Button pressed at 1577684271
Button pressed at 1728636675
Button pressed at 1728755988
Button pressed at 1822426500
```

让我们深入了解这个示例，看看它为什么能工作：
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

屏蔽/覆盖文件用于设置各种板载组件。通过此文件，可以利用按钮示例，因为覆盖文件允许 Zephyr 配置按钮并使其可用于相关代码。

在本例中，D1 引脚在 Xiao ESP32S3 上被设置为按钮，并通过覆盖文件别名为 `sw0`，以便用于需要此名称的示例代码。

#### Grove - 扩展板 - 蜂鸣器

我们将使用 blinky PWM 示例通过 PWM 信号控制蜂鸣器的激活。为此，我们将使用一个自定义覆盖文件，该文件启用了 A3 引脚的 PWM 功能。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_esp32s3 samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-esp32s3/xiao_expansion_buzzer.overlay"
```

烧录后，你应该会听到一系列的蜂鸣声，随着示例运行过程，声音会发生变化。

让我们看看为什么这会起作用：
```
#include <zephyr/dt-bindings/pwm/pwm.h>

/ {
    aliases {
        pwm-0 = &ledc0;
        pwm-led0 = &pwm_buzzer;
    };

    pwmleds {
        compatible = "pwm-leds";
        pwm_buzzer: pwm_led_gpio0_4 {
            label = "PWM Buzzer";
            pwms = <&ledc0 0 1000 PWM_POLARITY_NORMAL>;
        };
    };
};

&pinctrl {
    ledc0_default: ledc0_default {
        group1 {
            pinmux = <LEDC_CH0_GPIO4>;
            output-enable;
        };
    };
};

&ledc0 {
    pinctrl-0 = <&ledc0_default>;
    pinctrl-names = "default";
    status = "okay";
    #address-cells = <1>;
    #size-cells = <0>;
    channel0@0 {
        reg = <0x0>;
        timer = <0>;
    };
};
```

覆盖文件为引脚 4 配置了 PWM 逻辑，该引脚对应于 ESP32S3 引脚图上的 A3 引脚。

#### Grove - 扩展板 - SD 卡

我们将在这里使用文件系统示例以及 Xiao 扩展板屏蔽来尝试通过 SPI 与 SD 卡读卡器进行交互。扩展板屏蔽已将 CS 引脚配置为与 `&xiao_d 2` 引脚关联，因此除了添加屏蔽外，无需为板关联此功能执行其他操作。为了进一步准备，我们使用了一个自定义配置来启用 SD 卡功能。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_esp32s3 samples/subsys/fs/fs_sample -- -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

现在烧录并监控：
```
west flash
west espressif monitor
```

你应该会看到类似以下的响应：
```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
[00:00:00.208,000] <inf> sd: Maximum SD clock is under 25MHz, using clock of 24000000Hz
[00:00:00.208,000] <inf> main: Block count 15519744
Sector size 512
Memory Size(MB) 7578
Disk mounted.
Listing dir /SD: ...
[FILE] IMAGE1.JPG (size = 58422)
[FILE] IMAGE2.JPG (size = 97963)
```

在本例中，我的 SD 卡上有两个文件。它们的名称和大小被输出到控制台。

让我们看看这里涉及的相关元素：
```
CONFIG_SPI=y
CONFIG_DISK_DRIVER_SDMMC=y
CONFIG_GPIO=y
```

在相关配置中，我们启用了 SPI、SDMMC 磁盘驱动程序和 GPIO。如果没有此配置，覆盖文件将导致错误，因为示例无法找到 SD 卡。

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

如前所述，`&xiao_d 2` 引脚映射用于允许选择 D2 引脚，无论使用的板是什么，只要它支持 `&xiao_d` 引脚设置即可。

#### Grove - 温湿度传感器 (SHT31)

首先焊接引脚并将 Xiao ESP32S3 连接到扩展板。然后使用 Grove 连接线将 Grove SHT31 与扩展板上的一个 I2C 接口连接。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32s3/xiao_sht31.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23s3_zephyr/xiao_sht31.jpg" style={{width:600, height:'auto'}}/></div>

为了测试此设置，我们可以使用 Zephyr 的现有示例：

```
west build -p always -b xiao_esp32s3 samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay
west flash
west espressif monitor
```

你将在控制台上看到返回的结果：
```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
SHT3XD: 25.54 Cel ; 53.39 %RH
SHT3XD: 25.58 Cel ; 53.42 %RH
SHT3XD: 25.60 Cel ; 53.57 %RH
SHT3XD: 25.68 Cel ; 53.71 %RH
SHT3XD: 25.68 Cel ; 53.72 %RH
SHT3XD: 25.71 Cel ; 53.67 %RH
SHT3XD: 25.75 Cel ; 53.60 %RH
SHT3XD: 25.76 Cel ; 53.48 %RH
SHT3XD: 25.82 Cel ; 53.31 %RH
SHT3XD: 25.84 Cel ; 53.16 %RH
```

让我们深入了解这个示例，看看为什么它能正常工作：
```
 &xiao_i2c {
	sht3xd@44 {
			compatible = "sensirion,sht3xd";
			reg = <0x44>;
		};
	};
```

应用覆盖文件用于设置各种板载组件。通过此文件，可以利用 SHT31 示例，因为覆盖文件告知[示例逻辑](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c)如何为我们的板配置传感器。

#### 1.69 英寸 LCD 显示模块，240×280 分辨率，SPI 接口

在此示例中，我们将使用 SPI 连接到一个 240x280 分辨率的 1.69 英寸 LCD。

首先按照以下图片的引导，将开发板连接到 LCD 屏幕（在本例中，我们使用 Xiao ESP32S3，但连接时使用相同的引脚布局）。

| 1.69 英寸 LCD SPI 显示屏 | XIAO ESP32S3 |
| ------------- | ------------------------- |
| VCC | 3V3 |
| GND | GND |
| DIN | D10 |
| CLK | D8 |
| CS | D1 |
| DC | D3 |
| RST | D0 |
| BL | D6 |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/10.png" style={{width:700, height:'auto'}}/></div>

我们现在可以构建并烧录固件：
```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_esp32s3 samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf
west flash
```

烧录新固件后，设备现在显示的是之前扩展板上的相同演示屏幕，只是现在更新为通过 SPI 连接的彩色 LCD。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32s3/spi_lcd.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23s3_zephyr/spi_lcd.jpg" style={{width:600, height:'auto'}}/></div>


#### Xiao 的圆形显示屏

为了测试此设置，我们可以使用 Zephyr 中的一个现有示例：

```
west build -p always -b xiao_esp32s3 samples/drivers/display --  -DSHIELD=seeed_xiao_round_display
```

进入引导加载模式并烧录设备：
```
west flash
```

你会看到显示屏显示多个彩色角落，其中一个黑色角落会闪烁。

另一个示例展示了触摸屏的使用：

```
west build -p always -b xiao_esp32s3 samples/modules/lvgl/demos --  -DSHIELD=seeed_xiao_round_display -DCONFIG_LV_Z_DEMO_MUSIC=y
```

这里展示的音乐演示仅是实际屏幕的一部分，但仍然展示了触摸屏的功能。正如你所看到的，点击播放按钮会启动音乐动画。

从 [shield 文件](https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/shields/seeed_xiao_round_display/seeed_xiao_round_display.overlay) 中可以看出，这通过 SPI 接口与 GC9A01 圆形显示驱动程序以及通过 I2C 接口与 CHSC6X 触摸模块进行交互。

让我们深入了解这个示例的工作原理：
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

这个 shield 文件完成了以下操作：
- 选择 GC9A01 显示屏作为 Zephyr 的显示设备
- 设置 LVGL 指针逻辑以使用 CHSC6X 模块
- 禁用串口通信，因为引脚被用于背光和触摸中断（如上所示：`irq-gpios = <&xiao_d 7 GPIO_ACTIVE_LOW>;`）
- 使用 D1、D2 和 D3 引脚通过 SPI 配置圆形显示屏

[示例逻辑](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/modules/lvgl/demos/src/main.c)依赖于 [LVGL 演示示例代码](https://github.com/lvgl/lvgl/tree/master/demos/music)，可以进一步研究。


## ✨ 贡献者项目

- 本项目由 Seeed Studio [贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=56649975) 支持。
- 感谢 **Tim 的努力**，你的工作将被[展示](https://wiki.seeedstudio.com/Honorary-Contributors/)。


## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持，以确保您在使用我们的产品时拥有顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>