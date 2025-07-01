---
description: XIAO ESP32-C3 使用 BME680 传感器的 iBeacon 项目教程
title: XIAO ESP32-C3 使用 BME680 传感器的 iBeacon 项目教程
keywords:
  - ESP-IDF
  - XIAO
image: https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/8.webp
slug: /cn/xiao-c3-ibeacon
last_update:
  date: 05/15/2025
  author: Priyanshu Roy
---

# XIAO ESP32-C3 使用 BME680 传感器的 iBeacon 项目教程

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

在本教程中，我们将构建一个低功耗的温度监测系统，该系统通过蓝牙低功耗（BLE）以 iBeacon 格式广播环境数据。我们将使用 Seeed Studio XIAO ESP32-C3、XIAO 扩展板和 Grove BME680 环境传感器。本项目展示了如何使用 Espressif 的官方开发框架 ESP-IDF 构建可靠的嵌入式应用程序。

## 概述

我们的系统将：

1. 从 BME680 传感器读取温度、湿度和气压数据
2. 将这些数据打包到 BLE 广播数据包中
3. 周期性地唤醒、测量数据、广播数据，并进入休眠状态以节省电池电量

### 系统流程图

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/1.png" style={{width:300, height:800}}/></div>

此流程图展示了系统的主要操作周期，从唤醒到返回深度睡眠。

## 硬件需求

<table align="center">
<tr>
    <th>Seeed Studio XIAO ESP32C3</th>
    <th>Seeed Studio Grove Base for XIAO</th>
    <th>Grove BME680 环境传感器</th>
</tr>
<tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{height: 150, objectFit: 'contain'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{height: 150, objectFit: 'contain'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/main.jpg" style={{height: 150, objectFit: 'contain'}}/></div></td>
</tr>
<tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
    </div></td>
</tr>
</table>

- USB Type-C 数据线
- 安装了 ESP-IDF 的电脑

## 软件需求

- [ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/esp32c3/get-started/index.html) (v5.0 或更高版本)
- Git
- [项目 GitHub 仓库](https://github.com/Priyanshu0901/xiao_ibeacon)

## 第一步：硬件设置

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/2.webp" style={{width:800, height:'auto'}}/></div>

1. **将 BME680 传感器连接到 XIAO 扩展板**：

   - 将 Grove BME680 传感器连接到 XIAO 扩展板上的任意 I2C 接口。
   - 传感器通过 I2C 通信，因此任何兼容 I2C 的 Grove 接口都可以使用。

2. **将 XIAO ESP32-C3 安装到扩展板上**：

   - 小心对齐并插入 XIAO ESP32-C3 模块到扩展板上。
   - 确保引脚正确对齐并牢固安装模块。

3. **连接到电脑**：
   - 使用 USB Type-C 数据线将 XIAO 扩展板连接到电脑。

## 第二步：设置开发环境

1. **安装 ESP-IDF**：
   按照 [官方安装说明](https://docs.espressif.com/projects/esp-idf/en/latest/esp32c3/get-started/index.html) 为您的操作系统安装。

   对于 Linux，可以使用以下命令：

   ```bash
   mkdir -p ~/esp
   cd ~/esp
   git clone --recursive https://github.com/espressif/esp-idf.git
   cd esp-idf
   ./install.sh
   . ./export.sh
   ```

2. **克隆项目仓库**：

   ```bash
   cd ~/Desktop
   git clone --recurse-submodules https://github.com/Priyanshu0901/xiao_ibeacon.git
   cd xiao_ibeacon
   ```

   :::caution
   `--recurse-submodules` 参数非常重要，因为项目依赖于作为 Git 子模块包含的外部库。如果没有此参数，编译将失败。

   如果您已经克隆但没有包含子模块，请运行：

   ```bash
   git submodule update --init --recursive
   ```

   :::

## 第三步：项目结构和组件理解

项目由三个主要组件组成：

1. **BME680 传感器组件 (`sensor_t_a_h`)**：

   - 负责与 BME680 传感器通信
   - 管理传感器初始化、读取和数据处理
   - 提供温度、湿度和气压数据

2. **BLE Beacon 组件 (`ble_beacon`)**：

   - 配置 BLE 堆栈
   - 创建并广播包含传感器数据的 BLE 广播包
   - 管理 BLE 初始化和清理

3. **电源管理组件 (`power_manager`)**：
   - 处理深度睡眠功能
   - 管理节能操作
   - 控制唤醒源和睡眠时间

### 组件交互

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/3.png" style={{width:800, height:'auto'}}/></div>

此图展示了不同软件组件如何与系统硬件元素交互。

## 第四步：理解配置

在构建之前，让我们了解关键配置：

1. **主应用程序设置**（位于 `main.c`）：

   - `ADV_TIME_MS`：BLE 广播持续时间（500ms）
   - `POLL_INTERVAL_MS`：传感器轮询间隔（150ms）
   - `TIMEOUT_MS`：传感器读取的最大等待时间（2000ms）
   - `SLEEP_TIME_MS`：测量之间的睡眠时间（约 29.3 秒）

### 2. **传感器配置**（位于 `components/sensor_t_a_h/Kconfig` 文件中）：

```
menu "BME68X Configuration"
    config BME68X_I2C_ADDR
        hex "BME68X I2C Address"
        default 0x76
        help
            BME68X 传感器的 I2C 地址。默认值为 0x76。
            如果 SDO 引脚被拉高，则使用 0x77。

    choice BME68X_INTERFACE
        prompt "BME68X Interface"
        default BME68X_USE_I2C
        help
            选择用于 BME68X 传感器的接口。

        config BME68X_USE_I2C
            bool "I2C Interface"

        config BME68X_USE_SPI
            bool "SPI Interface"
    endchoice

    if BME68X_USE_I2C
        config BME68X_I2C_PORT
            int "I2C Port Number"
            range 0 1
            default 0
            help
                BME68X 的 I2C 端口号。

        config BME68X_I2C_SDA_PIN
            int "I2C SDA GPIO"
            range 0 48
            default 12
            help
                I2C SDA 的 GPIO 引脚。

        config BME68X_I2C_SCL_PIN
            int "I2C SCL GPIO"
            range 0 48
            default 13
            help
                I2C SCL 的 GPIO 引脚。

        config BME68X_I2C_CLOCK_SPEED
            int "I2C Clock Frequency (Hz)"
            range 100000 400000
            default 100000
            help
                BME68X 的 I2C 时钟频率。标准模式（100 KHz）或快速模式（400 KHz）。
    endif
endmenu
```

### 3. **BLE 配置**（位于 `components/ble_beacon/common.h` 文件中）：
BLE 设备名称在 `common.h` 文件中定义：

```c
#define DEVICE_NAME "Xiao_TempSensor"
```

---

### 修改配置参数

#### 使用 ESP-IDF 的 menuconfig 工具

ESP-IDF 框架提供了一个强大的配置工具 **menuconfig**，它提供了一个基于文本的用户界面，用于修改项目设置。此工具基于 Kconfig，与 Linux 内核使用的配置系统相同。

要启动配置界面：

```bash
idf.py menuconfig
```

这将显示一个基于文本的 UI，包含以下配置类别：

```
    Application Configuration  --->
    ESP-IDF Components         --->
    SDK tool configuration     --->
    Compiler options          --->
    Component config          --->
    Bootloader config         --->
    Serial flasher config     --->
```

**在 menuconfig 中的导航：**

- 使用 `↑` 和 `↓` 箭头键导航
- 按 `Enter` 进入子菜单
- 按 `Esc` 返回上一级菜单
- 按 `Space` 切换选项
- 对于布尔选项，按 `Y` 表示“是”，按 `N` 表示“否”
- 按 `?` 查看当前选项的帮助信息
- 按 `Q` 或多次按 `Esc` 退出，然后按 `Y` 保存更改

**查找传感器配置：**

1. 导航到 `Component config`
2. 向下滚动找到 `BME68X Configuration`
3. 按 `Enter` 查看传感器设置

**查找 BLE 配置：**

1. 导航到 `Component config`
2. 找到并进入 `Bluetooth`
3. 选择 `NimBLE Options`
4. 在此处可以配置各种 BLE 参数

---

#### 配置 BME680 的 I2C 引脚

要配置 BME680 传感器的 I2C 引脚：

1. 在 menuconfig 中，导航到：`Component config` → `BME68X Configuration`
2. 选择 `I2C SDA GPIO` 更改 SDA 引脚
3. 输入 SDA 的 GPIO 编号（默认值为 12，但对于 XIAO ESP32-C3 扩展板，使用 6）
4. 选择 `I2C SCL GPIO` 更改 SCL 引脚
5. 输入 SCL 的 GPIO 编号（默认值为 13，但对于 XIAO ESP32-C3 扩展板，使用 7）
6. 如果传感器有不同的 I2C 地址，选择 `BME68X I2C Address` 并进行修改

---

#### 通过 menuconfig 配置 BLE 参数

虽然设备名称在代码中定义，但其他 BLE 参数可以通过 menuconfig 配置：

1. 导航到：`Component config` → `Bluetooth` → `NimBLE Options`
2. 在此处可以修改：
   - 最大并发连接数
   - BLE 角色（Central/Peripheral/Observer/Broadcaster）
   - 安全设置
   - GAP 和 GATT 参数
   - BLE 堆栈的内存分配

---

#### 高级配置选项

对于高级用户，还可以使用以下配置选项：

1. **电源管理：**

   - 导航到：`Component config` → `Power Management`
   - 启用/禁用自动轻睡眠
   - 配置 DFS（动态频率调整）

2. **闪存加密：**

   - 导航到：`Security features`
   - 配置闪存加密选项以实现安全部署

3. **分区表：**

   - 导航到：`Partition Table`
   - 根据不同的应用需求修改闪存分区

4. **日志：**
   - 导航到：`Component config` → `Log output`
   - 配置调试日志级别和输出目标

完成更改后，按 `Q` 退出并按 `Y` 保存更改。然后使用以下命令重新构建项目：

```bash
idf.py build
```

---

#### 更改 BLE 设备名称

要更改 BLE 设备名称，需要修改 `components/ble_beacon/common.h` 文件中的 `DEVICE_NAME` 宏：

1. 打开文件：

   ```bash
   nano components/ble_beacon/common.h
   ```

2. 找到 `DEVICE_NAME` 定义并更改为您想要的名称：

   ```c
   #define DEVICE_NAME "MyCustomSensor"
   ```

3. 保存文件并重新构建项目。

---

## 第 5 步：构建和烧录项目

1. **进入项目目录**：

   ```bash
   cd ~/Desktop/xiao_ibeacon
   ```

2. **配置项目**：

   ```bash
   idf.py set-target esp32c3
   idf.py menuconfig
   ```

   在菜单中导航以检查或调整设置：

   - Component Config → BME680 传感器设置
   - Component Config → BLE Beacon 设置
   - Component Config → 电源管理

3. **构建项目**：

   ```bash
   idf.py build
   ```

4. **将项目烧录到 XIAO ESP32-C3**：

   ```bash
   idf.py -p /dev/ttyUSB0 flash
   ```

   注意：您的端口可能不同（Windows 系统中可能是 COM3、COM4 等）

5. **监控输出**（可选）：

   ```bash
   idf.py -p /dev/ttyUSB0 monitor
   ```

   按 `Ctrl+]` 退出监控。

---

## 第 6 步：测试 iBeacon

1. **在智能手机上下载 BLE 扫描器应用程序**：

   - iOS: "LightBlue" 或 "nRF Connect"
   - Android: "nRF Connect" 或 "BLE Scanner"

2. **打开应用程序并扫描 BLE 设备**：

   - 查找名为 "Xiao_TempSensor" 的设备
   - 选择该设备以查看其广播数据

3. **了解广播数据**：
   BLE 广播数据包含以下内容：

   - 温度（单位：摄氏度，乘以 100 的缩放值）
   - 湿度（单位：百分比）
   - 气压（单位：hPa，乘以 10 的缩放值）

4. **预期行为**：
   - 设备大约每 30 秒唤醒一次
   - 从 BME680 传感器读取数据
   - 广播此数据 500 毫秒
   - 然后进入深度睡眠以节省电量

### Python 测试脚本

该项目包含用于测试和验证 BLE 信标功能的 Python 脚本。以下是相关内容：

#### 配置 Python 环境

1. 导航到测试脚本目录：

   ```bash
   cd ~/Desktop/xiao_ibeacon/test_scripts
   ```

2. 运行设置脚本以创建并配置虚拟环境：

   ```bash
   # 在 Linux/macOS 上
   chmod +x setup_venv.sh
   ./setup_venv.sh

   # 在 Windows 上
   setup_venv.bat
   ```

3. 激活虚拟环境：

   ```bash
   # 在 Linux/macOS 上
   source venv/bin/activate

   # 在 Windows 上
   venv\Scripts\activate
   ```

设置脚本将安装所需的软件包：

- `bleak`：用于 BLE 通信
- `colorama`：用于彩色终端输出

#### 使用 BLE 扫描器脚本

BLE 扫描器脚本 (`ble_beacon_scanner.py`) 用于扫描 BLE 广播并显示来自信标的传感器数据。

扫描器的主要功能：

- 查找名为 "Xiao_TempSensor" 的设备
- 解码制造商特定数据以提取温度、湿度和气压
- 在格式化的终端界面中显示值
- 在接收到新广播时持续更新

运行扫描器：

```bash
python ble_beacon_scanner.py
```

脚本将以格式化的输出显示最新的传感器读数：

```
╔═══════════════════════════════════════════════╗
║ Xiao Temperature Sensor Beacon Scanner        ║
╠═══════════════════════════════════════════════╣
║ Last Update: 15:42:27                         ║
║ Signal Strength: -63 dBm                      ║
╠═══════════════════════════════════════════════╣
║ Temperature: 23.45 °C                         ║
║ Humidity: 48 %                                ║
║ Pressure: 1013.2 hPa                          ║
╠═══════════════════════════════════════════════╣
║ Press Ctrl+C to exit                          ║
╚═══════════════════════════════════════════════╝
```

如果在脚本中启用了调试模式（将 `DEBUG_MODE = True`），您将看到有关 BLE 广播和数据解析的更多信息。

#### 信标数据格式

信标以压缩格式传输数据，以适应 BLE 广播的限制：

1. 公司 ID：0x02E5（Espressif Systems）
2. 温度：16 位有符号整数，乘以 100（除以 100 得到摄氏度）
3. 湿度：8 位无符号整数（直接表示百分比值）
4. 气压：16 位无符号整数，乘以 10（除以 10 得到 hPa）

Python 脚本会解码此格式并显示实际值。

#### 测试流程

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/4.png" style={{width:600, height:'auto'}}/></div>

## 第 7 步：工作原理 - 深入解析

### 传感器初始化和读取

BME680 传感器的初始化包括以下步骤：

1. **I2C 配置**：在适当的引脚上设置 I2C 通信（对于 XIAO ESP32-C3 和扩展板，SDA/SCL 分别为 GPIO6/GPIO7）
2. **传感器初始化**：配置 BME680 传感器的温度、湿度、气压和气体测量设置
3. **读取过程**：启动测量并等待数据准备就绪
4. **数据处理**：将原始传感器值转换为人类可读的测量值

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/5.png" style={{width:800, height:'auto'}}/></div>

### BLE 广播

BLE 功能的操作流程如下：

1. **BLE 栈初始化**：设置 ESP32 的 BLE 栈
2. **广播配置**：配置广播参数（间隔、数据格式）
3. **数据打包**：获取传感器读数并将其打包为制造商特定数据
4. **广播启动/停止**：控制广播的时序

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/6.png" style={{width:800, height:'auto'}}/></div>

### 电源管理

电源管理系统利用 ESP32-C3 的内置睡眠功能：

1. **深度睡眠配置**：使用 ESP-IDF 的睡眠 API (`esp_sleep_enable_timer_wakeup()`) 配置唤醒定时器
2. **唤醒源**：设置定时器为唯一的唤醒源（系统将在指定时间后唤醒）
3. **进入睡眠**：在进入深度睡眠前安全关闭活动外设，使用 `esp_deep_sleep_start()`
4. **唤醒过程**：当定时器到期时，系统执行复位并从头开始重新启动应用程序

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/7.png" style={{width:800, height:'auto'}}/></div>

电源管理组件 (`power_manager.c`) 提供了一个简单的接口来处理睡眠模式：

```c
// 初始化电源管理器
power_manager_init();

// 稍后，当需要进入睡眠时：
power_manager_enter_deep_sleep(30000); // 睡眠 30 秒
```

当设备进入深度睡眠时，功耗会显著降低（约为 10-20 μA），从而实现较长的电池寿命。设备会完全关闭，并在定时器到期时重新启动，因此任何需要保留的状态必须存储在 RTC 内存或非易失性存储中。

### 功耗分析

#### 功耗分析设置

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/8.webp" style={{width:600, height:'auto'}}/></div>

#### 功耗阶段

系统具有不同的功耗阶段，如下图所示：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/9.png" style={{width:800, height:'auto'}}/></div>

**功耗阶段：**

1. **休眠阶段**：深度休眠模式下约 150μA（ESP32-C3 RTC 控制器活动 + bme680 休眠）
2. **唤醒与初始化**：启动和传感器初始化期间约 40mA
3. **活动 BLE 广播**：BLE 传输期间峰值约 16mA
4. **清理与进入休眠**：进入休眠前资源清理期间约 5mA

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/10.png" style={{width:800, height:'auto'}}/></div>

**电池寿命计算：**

- 深度休眠平均电流（28 秒）：150μA
- 活动阶段平均电流（2 秒）：约 40mA
- 有效平均电流：3.92 mA（以 1 分钟为周期测量）
- 使用典型的 1500 mAh 锂离子电池：
  - 1500 mAh ÷ 3.92 mA ≈ 382 小时 ≈ 15.9 天

**功耗优化建议：**

- 减少广播时间以最小化高电流阶段
- 使用最低可行的广播功率
- 禁用未使用的外设
- 优化传感器读取流程
- 考虑延长休眠时间

## 步骤 8：自定义项目

您可以自定义项目的各个方面：

1. **更改休眠时间**：

   - 编辑 `main.c` 中的 `SLEEP_TIME_MS` 来调整读取数据的频率

2. **修改传感器设置**：

   - 使用 `idf.py menuconfig` 更改传感器采样率、滤波器等

3. **调整 BLE 参数**：

   - 在 BLE beacon 组件中更改设备名称或广播间隔

4. **添加额外的传感器**：
   - 扩展传感器组件以包括其他 Grove 传感器

### 添加您自己的传感器

要将其他传感器集成到此项目中，请按照以下步骤操作：

1. **创建一个新的传感器组件**：

   ```bash
   # 创建组件目录结构
   mkdir -p components/my_new_sensor/include
   touch components/my_new_sensor/CMakeLists.txt
   touch components/my_new_sensor/Kconfig
   touch components/my_new_sensor/my_new_sensor.c
   touch components/my_new_sensor/include/my_new_sensor.h
   ```

2. **实现组件接口**：

   - 定义初始化函数
   - 创建数据读取函数
   - 设置任何必要的配置

   示例头文件（`my_new_sensor.h`）：

   ```c
   #pragma once
   #include <stdbool.h>
   #include "esp_err.h"

   typedef struct {
       float value1;
       float value2;
       // 其他传感器值
   } my_sensor_data_t;

   /**
    * @brief 初始化传感器
    * @return 成功时返回 ESP_OK
    */
   esp_err_t my_sensor_init(void);

   /**
    * @brief 从传感器读取数据
    * @param data 指向存储读取数据的结构体的指针
    * @return 成功时返回 ESP_OK
    */
   esp_err_t my_sensor_read(my_sensor_data_t *data);
   ```

3. **配置构建系统**：
   示例 `CMakeLists.txt`：

   ```cmake
   idf_component_register(
       SRCS "my_new_sensor.c"
       INCLUDE_DIRS "include"
       REQUIRES driver
   )
   ```

4. **更新主应用程序**：

   - 将您的组件添加到主应用程序的依赖项中
   - 在主应用程序流程中初始化您的传感器
   - 在 BLE 广播数据中包含您的传感器读取值

   示例在 `main.c` 中的集成：

   ```c
   #include "my_new_sensor.h"

   void app_main(void) {
       // 初始化其他组件
       // ...

       // 初始化您的新传感器
       ESP_ERROR_CHECK(my_sensor_init());

       // 从您的传感器读取数据
       my_sensor_data_t sensor_data;
       ESP_ERROR_CHECK(my_sensor_read(&sensor_data));

       // 修改 BLE 数据以包含您的传感器读取值
       // ...
   }
   ```

5. **扩展 BLE 广播数据**：

   - 更新 BLE beacon 组件以在广播中包含您的传感器数据
   - 为您的新测量值分配适当的数据类型 ID

6. **更新配置**：
   - 在 `components/my_new_sensor/Kconfig` 中为您的传感器添加 Kconfig 选项
   - 这允许用户通过 menuconfig 配置您的传感器

通过遵循这种结构化的方法，您可以在保持项目模块化架构的同时无缝集成其他传感器。

## 故障排除

### 重要提示

:::tip
**正常操作期间无串口输出**  
为了实现最佳的功耗效率，设备在正常操作期间不会通过串口输出调试信息。在深度休眠模式下，LED 也不会闪烁。这是为了最大限度地减少功耗而有意为之。

**重新烧录设备**  
要重新烧录设备：

1. 在开始烧录过程时按下 XIAO 板上的复位按钮
2. 将烧录命令的时间与设备的短暂活动周期（设备未处于深度休眠时）同步
3. 或者，按住复位按钮，启动烧录命令，然后在烧录开始时释放复位按钮

**重新启用开发时的调试输出**  
在开发自己的模块或调试时，可以重新启用串口输出：

1. 运行 `idf.py menuconfig`
2. 导航到 `Component config` → `Log output`
3. 将默认日志级别设置为 `INFO` 或 `DEBUG`
4. 将日志输出目标配置为 `UART0`
5. 在部署前记得再次禁用详细日志以节省电池寿命

:::

### 传感器未检测到

如果遇到传感器检测问题：

1. **检查连接**：

   - 确保 Grove 电缆正确连接到传感器和扩展板
   - 确认您使用的是 I2C Grove 接口

2. **I2C 地址问题**：

   - BME680 的默认 I2C 地址是 0x76。一些模块可能使用 0x77。
   - 如果需要，请在配置中编辑 I2C 地址

3. **电源问题**：
   - 确保 XIAO 获得足够的电源
   - 尝试更换 USB 电缆或端口

### BLE 未广播

如果未检测到 BLE 广播：

1. **检查 BLE 扫描器应用**：

   - 尝试使用其他 BLE 扫描器应用
   - 确保手机上的蓝牙已启用

2. **监控调试输出**：

   - 使用 `idf.py monitor` 检查错误信息

3. **广播持续时间**：
   - 默认设置仅广播 500ms。如果错过了，可以在 `main.c` 中增加 `ADV_TIME_MS`

### 构建或烧录失败

如果遇到构建或烧录问题：

1. **ESP-IDF 版本**：

   - 确保使用的是 ESP-IDF v5.0 或更新版本
   - 在运行命令前执行 `. $IDF_PATH/export.sh` (Linux/macOS) 或 `%IDF_PATH%\export.bat` (Windows)

2. **USB 连接**：

   - 确保 USB 连接稳定
   - 在烧录前尝试按下 XIAO 扩展板上的复位按钮

3. **端口问题**：
   - 使用 `ls /dev/tty*` (Linux/macOS) 或设备管理器 (Windows) 确认正确的端口
   - 使用 `-p` 参数指定正确的端口

## 结论

现在你已经构建了一个高效的环境监测系统，它通过 BLE 广播温度、湿度、气压和空气质量数据。该项目展示了以下几个重要概念：

1. **传感器集成**：在 ESP-IDF 中使用 I2C 传感器
2. **BLE 通信**：创建和管理 BLE 广播
3. **电源管理**：实现深度睡眠以提高电池效率
4. **ESP-IDF 开发**：使用 Espressif 官方框架进行 ESP32 开发

### 整体系统架构

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/11.png" style={{width:800, height:'auto'}}/></div>

这个基础可以扩展为更复杂的物联网传感器节点、环境监测系统或资产追踪解决方案。

## 资源

- [ESP-IDF 编程指南](https://docs.espressif.com/projects/esp-idf/en/latest/esp32c3/)
- [XIAO ESP32-C3 Wiki](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/)
- [BME680 数据手册](https://www.bosch-sensortec.com/products/environmental-sensors/gas-sensors/bme680/)
- [项目 GitHub 仓库](https://github.com/Priyanshu0901/xiao_ibeacon)

## ✨ 贡献者项目

- 本项目由 Seeed Studio [贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) 支持。
- 特别感谢 [Priyanshu Roy](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=106309063&issue=Seeed-Studio%7Cwiki-documents%7C2422) 的辛勤努力。您的工作将被 [展示](https://wiki.seeedstudio.com/contributors/)。

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您在使用我们的产品时获得顺畅的体验。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>