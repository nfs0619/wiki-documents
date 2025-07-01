---
description: "在 XIAO RP2350 上使用 Pico SDK"
title: Seeed Studio XIAO RP2350 与 C/C++ SDK
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao-rp2350-c-cpp-sdk
last_update:
  date: 05/15/2025
  author: Spencer
sidebar_position: 4
---

# 初始化 Raspberry Pi Pico SDK

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 简介

Seeed Studio XIAO RP2350 由 RP2350 微控制器驱动，在小巧的外形中提供了强大的性能。本指南提供了设置和使用 XIAO RP2350 的 C/C++ SDK 的基本步骤。

## 前置条件

在开始之前，请确保您具备以下条件：

- 一台运行 Windows、macOS 或 Linux 的计算机。
- 一根用于将 XIAO RP2350 连接到计算机的 USB 数据线。
- 基本的 C/C++ 编程知识。

## 通过 VSCode 的安装指南

:::info
如果您更喜欢原生开发体验，可以参考 [Raspberry Pi Pico C/C++ SDK 文档](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf) 或 [Raspberry Pi Pico SDK | GitHub](https://github.com/raspberrypi/pico-sdk)。
:::

对于 SDK 编程的新手，您可以安装适用于 Visual Studio Code (VSCode) 的 [Raspberry Pi Pico](https://marketplace.visualstudio.com/items?itemName=raspberry-pi.raspberry-pi-pico) 扩展，以获得更简单、更流畅的体验。

此扩展通过引导您完成必要的工具链安装，简化了设置过程，避免了手动逐一安装工具的麻烦。然而，您仍需确保您的系统满足以下平台要求：Windows x64、macOS（Sonoma 或更新版本）、Linux x64 或 arm64。

有关针对您的操作系统的详细安装说明，请参阅 [Raspberry Pi Pico Extension for VSCode](https://marketplace.visualstudio.com/items?itemName=raspberry-pi.raspberry-pi-pico) 页面。

#### 第 1 步：安装扩展

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/0-install-pico-extension.png" style={{width:500, height:'auto'}}/>
<div style={{ marginTop: '-8px' }}><em>在 VSCode 上安装扩展</em></div>
<br></br>
</div>

#### 第 2 步：创建新项目

页面加载后，您可以看到所需的内容。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/1-new-example-project.png" style={{width:500, height:'auto'}}/>
<div style={{ marginTop: '-8px' }}><em>从示例创建新项目</em></div>
<br></br>
</div>

尝试通过 `New Project From Examples` 创建一个项目。

#### 第 3 步：配置您的项目

- **名称：** 通常为示例项目名称；在本例中，我们选择 `blink` 项目。
- **板类型：** `Pico 2`
- **位置：** 选择您希望存储 XIAO RP2350 项目的位置。
- **SDK 版本：** 必须为 `v2.0.0` 或更高版本。
- **调试器：** 如果您计划使用 SWD 调试接口，请勾选 SWD Debugger 选项以启用调试功能。

<Tabs>
<TabItem value="c1" label="配置项目">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/2-create-blink-project.png" style={{width:500, height:'auto'}}/></div>

</TabItem>

<TabItem value="c2" label="高级选项">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/3-advanced-options.png" style={{width:500, height:'auto'}}/></div>

如果您希望微调工具链设置并避免下载冗余资源，请勾选 **Advanced Options**。在这里，您可以为 Ninja 和 CMake 等工具指定路径。如果您之前未安装 CMake 或 Python 环境，或者不想担心这些问题，可以跳过此步骤。

在本例中，我将使用已安装在 Windows 机器上的系统版本，并将其添加到系统 PATH。因此，我选择 **Use system version**。

</TabItem>
</Tabs>

如果这是您第一次运行设置，当您点击 `Create` 时，扩展将为您下载并管理 SDK。在 Windows 上，SDK 通常会放置在 `%userprofile%\.pico-sdk` 中。设置所需时间取决于您的网络速度。完成后，将打开一个新窗口，显示您的项目。

#### 第 4 步：构建项目

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/4-blink-example-created.png" style={{width:500, height:'auto'}}/></div>

:::caution 注意

首次设置项目时，您需要手动修改 CMake 项目中的板类型，因为扩展默认不包含 XIAO RP2350 板。将板设置为 `seeed_xiao_rp2350`，如下所示：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/set-xiao-rp2350-board.png" style={{width:500, height:'auto'}}/></div>

**修改板类型后，请清理 `build` 文件夹**，以确保使用正确的板配置文件 `%userprofile%/.pico-sdk/sdk/2.0.0/src/boards/include/boards/seeed_xiao_rp2350.h`。然后在 `build` 文件夹中输入以下命令以生成 CMake 缓存：
```shell
cmake .. # 在 build 文件夹中
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/get-cmake-cache.png" style={{width:500, height:'auto'}}/></div>

这将使扩展的编译任务正常工作。

:::

<Tabs>
<TabItem value="compile" label="编译项目">

现在您可以按下 **Compile** 按钮来构建项目。这将在 `build` 文件夹中生成 `blink.uf2` 文件，您可以将其拖放到计算机识别的 RP2350 驱动器中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/5-compile-project.png" style={{width:500, height:'auto'}}/></div>

</TabItem>

<TabItem value="run" label="运行项目">

如果您的设备处于 BOOT 模式，您可以按下 **Run** 按钮来编译并自动将 `.uf2` 文件复制到 RP2350，从而无需手动拖放文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/6-run-project.png" style={{width:500, height:'auto'}}/></div>

</TabItem>
</Tabs>

我们刚刚设置好了开发环境，并使用 VSCode 的 Raspberry Pi Pico 扩展成功创建了一个新项目。项目已准备就绪，工具也已配置好，您可以轻松地在 XIAO RP2350 上编译并运行代码，从而简化开发流程。

## 示例 1：LED 闪烁

为了演示基本的 SDK 使用，以下示例详细说明了如何编程控制板载 LED 闪烁：

```c title="blink.c"
#include "pico/stdlib.h"

const int sleep_time = 250;

int main() {
    const uint LED_PIN = PICO_DEFAULT_LED_PIN; // GPIO25
    gpio_init(LED_PIN);
    gpio_set_dir(LED_PIN, GPIO_OUT);
    while (true) {
        gpio_put(LED_PIN, 1);
        sleep_ms(sleep_time);
        gpio_put(LED_PIN, 0);
        sleep_ms(sleep_time);
    }
}
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/rp2350-blink.gif" style={{width:400, height:'auto', "border-radius": '12.8px'}}/></div>

## 示例 2：RGB 闪烁

<Tabs>
<TabItem value="ws2812.c" label="ws2812.c">

```c
/**
 * 版权所有 (c) 2020 Raspberry Pi (Trading) Ltd.
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

#include <stdio.h>
#include <stdlib.h>

#include "pico/stdlib.h"
#include "hardware/pio.h"
#include "hardware/clocks.h"
#include "ws2812.pio.h"

#define IS_RGBW true
#define NUM_PIXELS 1

#ifdef PICO_DEFAULT_WS2812_PIN
#define WS2812_PIN PICO_DEFAULT_WS2812_PIN
#else
// 如果板子没有定义默认的 WS2812 引脚，则默认为引脚 22
#define WS2812_PIN 22
#endif

static inline void put_pixel(uint32_t pixel_grb) {
    pio_sm_put_blocking(pio0, 0, pixel_grb << 8u);
}

static inline uint32_t urgb_u32(uint8_t r, uint8_t g, uint8_t b) {
    return
            ((uint32_t) (r) << 8) |
            ((uint32_t) (g) << 16) |
            (uint32_t) (b);
}

void pattern_snakes(uint len, uint t) {
    for (uint i = 0; i < len; ++i) {
        uint x = (i + (t >> 1)) % 64;
        if (x < 10)
            put_pixel(urgb_u32(0xff, 0, 0));
        else if (x >= 15 && x < 25)
            put_pixel(urgb_u32(0, 0xff, 0));
        else if (x >= 30 && x < 40)
            put_pixel(urgb_u32(0, 0, 0xff));
        else
            put_pixel(0);
    }
}

void pattern_random(uint len, uint t) {
    if (t % 8)
        return;
    for (int i = 0; i < len; ++i)
        put_pixel(rand());
}

void pattern_sparkle(uint len, uint t) {
    if (t % 8)
        return;
    for (int i = 0; i < len; ++i)
        put_pixel(rand() % 16 ? 0 : 0xffffffff);
}

void pattern_greys(uint len, uint t) {
    int max = 100; // 避免消耗过多电流！
    t %= max;
    for (int i = 0; i < len; ++i) {
        put_pixel(t * 0x10101);
        if (++t >= max) t = 0;
    }
}

typedef void (*pattern)(uint len, uint t);
const struct {
    pattern pat;
    const char *name;
} pattern_table[] = {
        {pattern_snakes,  "Snakes!"},
        {pattern_random,  "Random data"},
        {pattern_sparkle, "Sparkles"},
        {pattern_greys,   "Greys"},
};

int main() {
    //set_sys_clock_48();
    stdio_init_all();

    const int RGB_POWER = 23;
    gpio_init(RGB_POWER);
    gpio_set_dir(RGB_POWER, GPIO_OUT);
    gpio_put(RGB_POWER, 1);

    printf("WS2812 烟雾测试，使用引脚 %d", WS2812_PIN);

    // todo 获取空闲状态机
    PIO pio = pio0;
    int sm = 0;
    uint offset = pio_add_program(pio, &ws2812_program);

    ws2812_program_init(pio, sm, offset, WS2812_PIN, 800000, IS_RGBW);

    int t = 0;
    while (1) {
        int pat = rand() % count_of(pattern_table);
        int dir = (rand() >> 30) & 1 ? 1 : -1;
        puts(pattern_table[pat].name);
        puts(dir == 1 ? "(正向)" : "(反向)");
        for (int i = 0; i < 1000; ++i) {
            pattern_table[pat].pat(NUM_PIXELS, t);
            sleep_ms(10);
            t += dir;
        }
    }
}
```
</TabItem>
<TabItem value="ws2812.pio" label="ws2812.pio">

```assembly
;
; 版权所有 (c) 2020 Raspberry Pi (Trading) Ltd.
;
; SPDX-License-Identifier: BSD-3-Clause
;

.program ws2812
.side_set 1

.define public T1 2
.define public T2 5
.define public T3 3

.lang_opt python sideset_init = pico.PIO.OUT_HIGH
.lang_opt python out_init     = pico.PIO.OUT_HIGH
.lang_opt python out_shiftdir = 1

.wrap_target
bitloop:
    out x, 1       side 0 [T3 - 1] ; 当指令暂停时，仍然会进行 Side-set
    jmp !x do_zero side 1 [T1 - 1] ; 根据移出的位分支。正脉冲
do_one:
    jmp  bitloop   side 1 [T2 - 1] ; 继续保持高电平，形成长脉冲
do_zero:
    nop            side 0 [T2 - 1] ; 或者驱动低电平，形成短脉冲
.wrap

% c-sdk {
#include "hardware/clocks.h"

static inline void ws2812_program_init(PIO pio, uint sm, uint offset, uint pin, float freq, bool rgbw) {

    pio_gpio_init(pio, pin);
    pio_sm_set_consecutive_pindirs(pio, sm, pin, 1, true);

    pio_sm_config c = ws2812_program_get_default_config(offset);
    sm_config_set_sideset_pins(&c, pin);
    sm_config_set_out_shift(&c, false, true, rgbw ? 32 : 24);
    sm_config_set_fifo_join(&c, PIO_FIFO_JOIN_TX);

    int cycles_per_bit = ws2812_T1 + ws2812_T2 + ws2812_T3;
    float div = clock_get_hz(clk_sys) / (freq * cycles_per_bit);
    sm_config_set_clkdiv(&c, div);

    pio_sm_init(pio, sm, offset, &c);
    pio_sm_set_enabled(pio, sm, true);
}
%}

.program ws2812_parallel

.define public T1 2
.define public T2 5
.define public T3 3

.wrap_target
    out x, 32
    mov pins, !null [T1-1]
    mov pins, x     [T2-1]
    mov pins, null  [T3-2]
.wrap

% c-sdk {
#include "hardware/clocks.h"

static inline void ws2812_parallel_program_init(PIO pio, uint sm, uint offset, uint pin_base, uint pin_count, float freq) {
    for(uint i=pin_base; i<pin_base+pin_count; i++) {
        pio_gpio_init(pio, i);
    }
    pio_sm_set_consecutive_pindirs(pio, sm, pin_base, pin_count, true);

    pio_sm_config c = ws2812_parallel_program_get_default_config(offset);
    sm_config_set_out_shift(&c, true, true, 32);
    sm_config_set_out_pins(&c, pin_base, pin_count);
    sm_config_set_set_pins(&c, pin_base, pin_count);
    sm_config_set_fifo_join(&c, PIO_FIFO_JOIN_TX);

    int cycles_per_bit = ws2812_parallel_T1 + ws2812_parallel_T2 + ws2812_parallel_T3;
    float div = clock_get_hz(clk_sys) / (freq * cycles_per_bit);
    sm_config_set_clkdiv(&c, div);

    pio_sm_init(pio, sm, offset, &c);
    pio_sm_set_enabled(pio, sm, true);
}
%}
```
</TabItem>

<TabItem value="ws2812-cmake" label="CMakeLists.txt">

将以下代码片段复制并追加到您的 `CMakeLists.txt` 文件中。

```cmake title="CMakeLists.txt"
project(pio_ws2812 C CXX ASM)

pico_sdk_init()

# 为 pio_ws2812 添加可执行目标
add_executable(pio_ws2812)

# 为生成的文件创建一个目录
file(MAKE_DIRECTORY ${CMAKE_CURRENT_LIST_DIR}/generated)

# 从 ws2812.pio 生成 PIO 头文件
pico_generate_pio_header(pio_ws2812 ${CMAKE_CURRENT_LIST_DIR}/ws2812.pio OUTPUT_DIR ${CMAKE_CURRENT_LIST_DIR}/generated)

# 将源文件添加到 pio_ws2812 目标
target_sources(pio_ws2812 PRIVATE ws2812.c)

# 将必要的库链接到 pio_ws2812 目标
target_link_libraries(pio_ws2812 PRIVATE pico_stdlib hardware_pio)

# 生成额外的输出格式（例如 UF2、BIN）
pico_add_extra_outputs(pio_ws2812)

# 可选：从 PIO 汇编生成 Python 文件以供进一步分析或文档使用
add_custom_command(OUTPUT ${CMAKE_CURRENT_LIST_DIR}/generated/ws2812.py
    DEPENDS ${CMAKE_CURRENT_LIST_DIR}/ws2812.pio
    COMMAND pioasm -o python ${CMAKE_CURRENT_LIST_DIR}/ws2812.pio ${CMAKE_CURRENT_LIST_DIR}/generated/ws2812.py
    VERBATIM)
add_custom_target(pio_ws2812_datasheet DEPENDS ${CMAKE_CURRENT_LIST_DIR}/generated/ws2812.py)
add_dependencies(pio_ws2812 pio_ws2812_datasheet)
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/11-ws2812-rgb-cmake.png" style={{width:500, height:'auto'}}/></div>

</TabItem>
</Tabs>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/rp2350-rgb.gif" style={{width:240, height:'auto', "border-radius": '12.8px' }}/></div>

## 示例 3：UART 打印

:::tip USB 串口
如果您希望通过 USB 将 `printf` 输出到计算机，您需要在项目的 `CMakeLists.txt` 文件中添加以下行：

```cmake
pico_enable_stdio_usb(your_project_name 1)
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/10-cmake-usb-enabled.png" alt="CMake USB Enabled" style={{width:400, height:'auto'}}/></div>

此外，请确保在代码中通过在主函数中添加 `stdio_init_all();` 来初始化标准 I/O。

:::

```c title="hello_uart.c"
#include "hardware/uart.h"
#include "pico/stdlib.h"
#include <pico/stdio.h>
#include <pico/time.h>
#include <stdio.h>

#define UART_ID uart0
#define BAUD_RATE 115200

// 我们使用的是引脚 0 和 1，但请参阅数据手册中的 GPIO 功能选择表，了解可以使用的其他引脚。
#define UART_TX_PIN 0
#define UART_RX_PIN 1

int main() {
   stdio_init_all();
  // 设置所需速度的 UART。
  uart_init(UART_ID, BAUD_RATE);

  // 使用 GPIO 的功能选择设置 TX 和 RX 引脚
  // 有关功能选择的更多信息，请参阅数据手册
  gpio_set_function(UART_TX_PIN, UART_FUNCSEL_NUM(UART_ID, UART_TX_PIN));
  gpio_set_function(UART_RX_PIN, UART_FUNCSEL_NUM(UART_ID, UART_RX_PIN));

  // 使用各种 UART 函数发送数据
  // 在默认系统中，printf 也会通过默认 UART 输出

  // 发送一个字符，不进行任何转换
  uart_putc_raw(UART_ID, 'A');

  // 发送一个字符，但进行 CR/LF 转换
  uart_putc(UART_ID, 'B');

  // 发送一个字符串，带有 CR/LF 转换
  uart_puts(UART_ID, " Hello, UART!\n");

  // 打印测试
  int i = 0;
  for (;;) {
    sleep_ms(500);
    printf("Hello %d", i++);
  }
}
```

## 示例 4：读取电池电压

```c title="hello_adc.c"
#include <stdio.h>
#include "pico/stdlib.h"
#include "hardware/gpio.h"
#include "hardware/adc.h"

void init_gpio() {
    const int gpio = 19;

    gpio_init(gpio);
    gpio_set_dir(gpio, GPIO_OUT);
    gpio_put(gpio, 1);
}

int main() {
    stdio_init_all();
    printf("ADC 电池示例 - GPIO29 A3\n");

    init_gpio();
    adc_init();

    // 确保 GPIO 是高阻抗的，没有上拉等
    adc_gpio_init(29);
    // 选择 ADC 输入 0（GPIO26）
    adc_select_input(3);

    while (1) {
        // 12 位转换，假设最大值 == ADC_VREF == 3.3 V
        const float conversion_factor = 3.3f / (1 << 12);
        uint16_t result = adc_read();
        printf("原始值: 0x%03x, 电压: %f V\n", result, result * conversion_factor * 2);
        sleep_ms(500);
    }
}
```

## 常见问题解答

#### TinyUSB 子模块未初始化；USB 支持不可用

**问题：**
在构建项目时，您可能会看到以下警告：

```plaintext
TinyUSB submodule has not been initialized; USB support will be unavailable
```

**解决方案：**

1. **打开终端**（Linux/macOS）或命令提示符/PowerShell/Git Bash（Windows）。
2. **导航到 Pico SDK 目录：**

   ```bash
   cd /path/to/your/pico-sdk
   ```

3. **初始化子模块：**

   ```bash
   git submodule update --init
   ```

这将启用项目中的 USB 支持。

## 资源

- 🔗 **[链接]** [Raspberry Pi Pico SDK | GitHub](https://github.com/raspberrypi/pico-sdk)
- 📄 **[PDF]** [Raspberry Pi Pico 系列 C/C++ SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf) - SDK API 文档。
- 📄 **[PDF]** [Raspberry Pi Pico 系列入门指南](https://datasheets.raspberrypi.com/pico/getting-started-with-pico.pdf) - 官方 Raspberry Pi 文档。
- 📽️ **[视频]** [Raspberry Pi Pico 和 RP2040 简介](https://www.youtube.com/watch?v=B5rQSoOmR5w) - 视频教程。

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>  