---
description: 学习如何使用 Cursor 的 AI 驱动聊天功能，通过 XIAO ESP32C6 和传感器开发 Zigbee 应用
title: 使用 Cursor 创建 Zigbee 项目与 XIAO ESP32C6
image: https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/13.webp
slug: /cn/use_cursor_create_zigbee_prj
last_update:
  date: 05/15/2025
  author: Citric
---

# 使用 Cursor 创建 Zigbee 项目与 XIAO ESP32C6

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


本指南将引导您使用 Cursor 的 AI 驱动聊天功能，通过 XIAO ESP32C6 和传感器开发 Zigbee 应用程序。在本教程结束时，您将能够独立使用 Cursor 的聊天功能开发 Zigbee 应用程序，结合您的 XIAO 开发板和传感器。

## 什么是 Cursor？

Cursor 是一个基于 Visual Studio Code 构建的 AI 驱动代码编辑器。它集成了强大的 AI 功能，可以帮助您更高效地编写、理解和调试代码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/cursor.png" style={{width:600, height:'auto'}}/></div>

### 为什么在嵌入式开发中使用 Cursor？

Cursor 在嵌入式软件开发中提供了以下优势：

1. **代码生成**：Cursor 可以根据您的需求生成代码，节省时间和精力。
2. **上下文感知辅助**：Cursor 理解您的项目结构，并提供相关建议。
3. **调试帮助**：Cursor 可以帮助识别和修复代码中的错误。
4. **学习工具**：对于初学者，Cursor 可以解释复杂概念并提供教育性见解。
5. **高效性**：Cursor 可以帮助您快速浏览大型代码库并理解不熟悉的库。

对于像 XIAO ESP32C6 这样的嵌入式系统，Cursor 可以帮助您理解硬件特定的 API，生成与传感器交互的样板代码，并解决硬件与软件集成中的问题。

## 所需材料

在本教程中，您需要以下材料：

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO ESP32C6</th>
			<th>Grove DHT11 温湿度传感器</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

- Grove 连接线
- USB-C 数据线
- 安装了 Arduino IDE 的电脑
- Cursor 应用程序（我们将在下一节中安装）

:::tip
本教程以 DHT11 温湿度传感器为示例。如果您有其他传感器，也可以尝试使用它们。为了获得最佳体验，我们建议使用 [ESP Zigbee SDK](https://github.com/espressif/esp-zigbee-sdk) 当前支持的传感器类型。这将确保在构建 Zigbee 项目时具有更好的兼容性和更流畅的实现。
:::

## 安装 Cursor

按照以下步骤在您的操作系统上安装 Cursor：

<Tabs>
<TabItem value="Windows" label="Windows" default>

1. 访问 [Cursor 下载页面](https://cursor.sh/)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/windows_download_cursor.png" style={{width:1000, height:'auto'}}/></div>

2. 点击“Windows”。
3. 运行下载的安装程序。
4. 按照屏幕上的说明完成安装。

</TabItem>
<TabItem value="MACOS" label="MACOS">

1. 访问 [Cursor 下载页面](https://cursor.sh/)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/mac_download_cursor.png" style={{width:1000, height:'auto'}}/></div>

2. 点击“MacOS”。
3. 打开下载的 .dmg 文件。
4. 将 Cursor 应用拖动到您的 Applications 文件夹。
5. 从 Applications 文件夹中打开 Cursor。

</TabItem>
</Tabs>

## Cursor 订阅计划

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/cursor_price.png" style={{width:1000, height:'auto'}}/></div>

Cursor 提供不同的订阅计划，以满足各种用户需求：

**免费 Hobby 计划**

Cursor 可以通过 Hobby 计划免费使用，包括：
- 2000 次补全
- 50 次慢速高级请求
- 两周的 Pro 功能试用

此免费计划足以开始并探索 Cursor 的功能。

**付费计划**

对于更高级的功能和更高的使用限制，Cursor 提供付费订阅选项：

**Pro 计划（$20/月）**

- 无限次补全
- 每月 500 次快速高级请求
- 无限次慢速高级请求

**企业计划（$40/用户/月）**

- 包含所有 Pro 功能
- 在整个组织范围内强制启用隐私模式
- 集中团队账单管理
- 带有使用统计的管理员仪表盘
- SAML/OIDC 单点登录（SSO）

您可以在 [Cursor 价格页面](https://www.cursor.com/pricing) 查看完整的定价详情。

需要注意的是，无论您使用哪个计划，在 Cursor 中生成的所有代码都属于您，可以随意使用，包括商业用途。

## 设置 Cursor

安装 Cursor 后，按照以下步骤进行设置：

1. 启动 Cursor
2. 使用您的账户登录或创建一个新账户
3. 确认聊天面板可用（通常位于界面的右侧）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/1.png" style={{width:1000, height:'auto'}}/></div>

## 打开 Zigbee 示例

在使用 Cursor 为您的项目生成代码时，提供示例代码可以显著提高生成项目的准确性。示例代码为 Cursor 提供了参考点，使其能够理解项目的结构、语法和具体需求。通过分析这些示例，Cursor 可以生成更精确且更相关的代码，从而更好地满足您的需求。

在我们的 Zigbee 项目中，找到合适的示例可以帮助 Cursor：
- 理解所需的具体功能
- 确定需要使用的适当库和函数
- 生成与您使用的硬件和接口兼容的代码

通过提供相关的示例，您可以确保生成的代码更有可能正确运行并满足项目需求，从而节省调试和修改的时间和精力。

现在，让我们定位并打开 ESP32 Arduino 包提供的 Zigbee 示例：

1. 首先，确保您已在 Arduino IDE 中安装了**最新的 ESP32 板卡包**：
  - 打开 Arduino IDE
  - 转到 **工具 > 开发板 > 开发板管理器**
  - 搜索 **esp32**
  - 找到 **esp32 by Espressif Systems**
  - 点击 **安装** 或 **更新** 以获取最新版本
  - 等待安装完成

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/3.png" style={{width:1000, height:'auto'}}/></div>

2. 导航到 Zigbee 示例目录：

以下路径以 ESP32 板卡包版本 3.1.3 为例。如果您的版本不同，请将 `3.1.3` 替换为您安装的版本号：
   
- 在 Windows 上： 

```
C:\Users\[YourUsername]\AppData\Local\Arduino15\packages\esp32\hardware\esp32\3.1.3\libraries\Zigbee\
```

- 在 macOS 上：
```
/Users/[YourUsername]/Library/Arduino15/packages/esp32/hardware/esp32/3.1.3/libraries/Zigbee/
```

3. 打开 Cursor 并从文件菜单中选择 **打开文件夹**。

4. 导航到步骤 2 中的 Zigbee 目录路径并点击 **打开**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/4.png" style={{width:1000, height:'auto'}}/></div>


## 选择合适的示例

在使用 Cursor 的 Chat 功能生成代码之前，您需要确定最适合作为起点的示例代码：

### 确定设备类型

Zigbee 设备通常分为两大类，了解这一点对于选择正确的示例代码至关重要：

1. **传感器**：
   - 传感器是“感知”环境并收集数据的设备
   - 它们将现实世界的物理信息转换为电子信号
   - 传感器仅“读取”数据，然后将其传输到网络

   - **示例**：
     - 温度传感器：测量周围的温度
     - 湿度传感器：测量空气中的湿度水平
     - 光传感器：检测环境光强度
     - 动作传感器：检测附近物体是否移动
     - 气体传感器：检测特定气体的浓度

2. **执行器**：
   - 执行器是“执行动作”的设备
   - 它们接收命令并影响物理世界
   - 执行器负责“改变”某些事物的状态

   - **示例**：
     - 灯开关：打开或关闭灯
     - 电机控制器：控制电机旋转
     - 继电器：控制高功率电气设备
     - 阀门控制器：控制水或空气流量
     - 门锁：锁定或解锁门

**如何确定您的设备类型**：

- 如果您的设备主要是收集数据（读取信息），那么它是传感器
- 如果您的设备主要是执行动作（改变状态），那么它是执行器
- 某些设备可能同时具有这两种功能，在这种情况下，您应根据主要功能进行选择

在我们的示例中，DHT11 是一个典型的传感器，因为它读取温度和湿度数据，但不会改变环境。

### 确定接口类型

接下来，确定传感器使用的接口类型：

- **GPIO**：简单的数字或模拟引脚
- **I2C**：用于通信的双线接口
- **SPI**：串行外设接口
- **UART**：串行通信

DHT11 使用带有单条数据线的简单 GPIO 接口。

### 检查 Zigbee 设备支持情况

在继续之前，验证您的目标设备类型是否受 ESP Zigbee SDK 支持非常重要。您可以在以下位置检查支持的设备类型：

- [ESP Zigbee 设备类型](https://github.com/espressif/esp-zigbee-sdk/blob/main/components/esp-zigbee-lib/include/esp_zigbee_type.h)

此头文件包含 ESP 的 Zigbee 实现当前支持的所有设备类型。查看此文件以：

1. 确认您的设备类型是否受支持
2. 记录您需要的具体设备 ID 和集群 ID
3. 了解您的设备类型可用的功能

如果您的设备类型未列出，您可能需要：
- 选择一个与您的需求匹配的类似支持设备类型
- 考虑实现自定义设备类型（高级）
- 联系 ESP 支持以获取指导

### 找到最接近的示例

浏览 Zigbee 库中的示例，找到最符合您需求的示例。对于我们的 DHT11 传感器，可以寻找以下示例：

- `ZigbeeTemperatureSensor`
- `ZigbeeHumiditySensor`
- 任何演示如何从 GPIO 传感器读取数据的示例

幸运的是，ESP 在其 Zigbee 示例中提供了一个 "Zigbee_Temp_Hum_Sensor_Sleepy" 示例，它非常适合我们创建温湿度传感器项目的需求。此示例演示了：

- 如何实现温湿度传感器设备
- 如何将设备配置为节能的休眠终端设备
- 如何定期报告传感器读数
- 如何处理 Zigbee 网络和数据传输

您可以在以下位置找到此示例：
`zigbee/example/Zigbee_Temp_Hum_Sensor_Sleepy`

此示例将是我们基于 DHT11 的 Zigbee 传感器项目的绝佳起点。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/5.png" style={{width:1000, height:'auto'}}/></div>

## 确定引脚连接

对于 XIAO ESP32C6 和 DHT11 传感器，我们需要决定使用哪些引脚：

1. DHT11 传感器需要一个数据引脚。

2. 我们将其连接到 XIAO ESP32C6 的 D0 (GPIO1) 引脚。

:::tip
对于 XIAO 示例，仅 GPIO（数字/模拟）和 SPI 协议设备需要手动配置引脚。对于 I2C 和 UART 设备，引脚定义已在 XIAO 的板卡包中预先配置，因此可以跳过此步骤。
:::

## 收集技术文档

拥有传感器的技术文档至关重要。如果您使用的是 Seeed 的产品，可以在 **[Seeed Studio 官方 Wiki](https://wiki.seeedstudio.com/)** 上找到传感器或执行器的详细文档和资源。Wiki 的资源部分还包含 Grove 产品的数据手册，您可以将其提供给 Cursor。例如，对于本项目中使用的 DHT11 传感器：

- [Grove DHT11 Wiki 页面](https://wiki.seeedstudio.com/Grove-TemperatureAndHumidity_Sensor/)

如果您使用的是其他制造商的传感器，请直接联系他们以获取必要的技术文档。

## 使用 Cursor 的 Chat 生成代码

现在我们已经收集了所有必要的信息，可以使用 Cursor 的 Chat 来生成 Zigbee 应用代码。

以下是创建 Cursor Chat 提示的步骤。

### 传感器项目模板

如果您和我一样选择使用传感器作为设备，可以参考以下提示模板。

```
Please refer to the code and then create an Arduino sensor project with ESP32-C6 using Zigbee protocol.

Project name: [project name]

Sensor details:
- Type: [sensor model]
- Connections: [pin connections]

Sensing specifications:
- Parameters to measure: [measurement values]
- Transmission frequency: [sending interval]

Reference materials:
- Documentation: [documentation links]

Generate a complete project in the Example directory. Name the main file [project name with spaces replaced by underscores].ino with comprehensive code comments.
```

以下是如何填写提示模板的分步骤说明，并以 DHT11 传感器为例：

1. **项目名称**：选择一个描述性的项目名称。
2. **传感器详情**：
   - 类型：指定传感器的具体型号。
   - 连接：列出传感器与 XIAO ESP32C6 之间的所有引脚连接。
3. **传感规格**：
   - 参数：列出您想测量的内容（温度、湿度等）。
   - 传输频率：您希望发送数据的频率（例如，每 5 秒）。
4. **参考资料**：包括数据手册或文档的链接。

以下是一个完整的 DHT11 温湿度传感器项目提示示例：

```
Please refer to the code and then create an Arduino sensor project with ESP32-C6 using Zigbee protocol.

Project name: Zigbee_DHT11_XIAO

Sensor details:
- Type: DHT11 Temperature and Humidity Sensor
- Connections: DHT11 data pin connected to D2 of XIAO ESP32C6

Sensing specifications:
- Parameters to measure: Temperature (°C) and Relative Humidity (%)
- Transmission frequency: Every 1 hour

Reference materials:
- Documentation: 
  - DHT11 Sensor: https://wiki.seeedstudio.com/Grove-TemperatureAndHumidity_Sensor/
  - XIAO ESP32C6: https://wiki.seeedstudio.com/xiao_pin_multiplexing_esp33c6/

Generate a complete project in the Example directory. Name the main file [project name with spaces replaced by underscores].ino with comprehensive code comments.
```

### 执行器项目模板

如果您想使用执行器，可以使用以下提示模板。以下是如何为执行器项目构建提示的结构：

```
Please refer to the code and then create an Arduino actuator project with ESP32-C6 using Zigbee protocol.

Project name: [project name]

Actuator details:
- Type: [actuator model]
- Connections: [pin connections]

Control specifications:
- Default behavior: [startup state]

Reference materials:
- Documentation: [documentation links]

Generate a complete project in the Example directory. Name the main file [project name with spaces replaced by underscores].ino with comprehensive code comments.
```

:::tip
在使用 Cursor 构建第一个项目时，建议从简单的基本功能开始，而不是复杂的逻辑和需求。这种方法可以显著降低 Cursor 生成错误代码的可能性。首先让 Cursor 创建一个可以验证正常工作的基础程序。一旦有了可靠的基础，您可以逐步添加更多功能和复杂性来增强项目。这种迭代方法可以生成更可靠和可维护的代码。
:::

准备好包含项目所有具体细节的提示后，请按照以下步骤操作：

1. 打开 Cursor 的 Chat 面板（通常通过点击侧边栏中的聊天图标）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/6.png" style={{width:1000, height:'auto'}}/></div>

2. 找到最符合您项目需求的示例代码。对于我们的 DHT11 温湿度传感器项目，我们将使用 "Zigbee_Temp_Hum_Sensor_Sleepy" 示例。

3. 将 Zigbee 示例目录中的示例代码文件拖放到 Cursor Chat 窗口中。这有助于 Cursor 理解 Zigbee 传感器实现的结构和需求。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/7.png" style={{width:1000, height:'auto'}}/></div>

4. 将我们预先编写的提示复制并粘贴到聊天输入框中，然后按 Enter。等待 Cursor 根据提示和示例代码生成您的项目。

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/9.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

5. 点击 **Accept** 按钮保存生成的代码。这将在您的工作区中创建项目文件。

## 审核生成的代码

在 Cursor 生成代码后，上传到设备之前仔细审核代码非常重要。以下是需要检查的关键方面：

## 引脚配置

- 验证所有引脚分配是否与您的实际连接相匹配  
- 检查指定的引脚是否确实可用于 XIAO ESP32C6  
- 确保不存在引脚冲突（例如，同一个引脚被用于多个用途）  
- 确认引脚支持所需的功能（模拟、数字、I2C 等）  

## 功能检查

将生成的代码与您的需求进行比较：  
- 它是否实现了所有请求的功能？  

例如，在提供的程序中，引脚是以 GPIO 编号定义的，这可能需要查阅 wiki，然后检查 XIAO 的 A/D 编号是否与正确的 GPIO 编号匹配，这样会比较麻烦。为此，我们可以要求 Cursor 按照 A/D 的方式使用引脚。

<details>

<summary>点击此处预览完整代码</summary>

```cpp
/**
 * @brief 使用 Zigbee 的 DHT11 温湿度传感器示例，适用于 XIAO ESP32C6
 * 
 * 本示例演示如何创建一个 Zigbee 终端设备，该设备使用 DHT11 传感器测量温度和湿度，
 * 并每小时报告一次数据。
 * 
 * 硬件需求：
 * - XIAO ESP32C6 开发板
 * - DHT11 温湿度传感器
 * 
 * 连接方式：
 * - DHT11 数据引脚 -> XIAO ESP32C6 的 D2 (GPIO8)
 * - DHT11 VCC -> 3.3V
 * - DHT11 GND -> GND
 * 
 * 设备作为 Zigbee 终端设备运行，并在测量之间进入深度睡眠以节省电量。
 */

#ifndef ZIGBEE_MODE_ED
#error "未在 Tools->Zigbee mode 中选择 Zigbee 终端设备模式"
#endif

#include "Zigbee.h"
#include "DHT.h"

/* 引脚定义 */
#define DHT_PIN 8  // XIAO ESP32C6 的 D2 引脚
#define BOOT_BUTTON 9  // XIAO ESP32C6 的 Boot 按钮

/* DHT11 传感器配置 */
#define DHT_TYPE DHT11
DHT dht(DHT_PIN, DHT_TYPE);

/* Zigbee 配置 */
#define TEMP_SENSOR_ENDPOINT_NUMBER 10

/* 睡眠配置 */
#define uS_TO_S_FACTOR 1000000ULL  // 微秒到秒的转换因子
#define TIME_TO_SLEEP  3600        // 睡眠 1 小时（3600 秒）

/* 全局变量 */
ZigbeeTempSensor zbTempSensor = ZigbeeTempSensor(TEMP_SENSOR_ENDPOINT_NUMBER);

/************************ 传感器功能 *****************************/
void measureAndSleep() {
  // 从 DHT11 读取温度和湿度
  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();

  // 检查读取值是否有效
  if (isnan(temperature) || isnan(humidity)) {
    Serial.println("无法从 DHT11 传感器读取数据！");
    delay(1000);
    return;
  }

  // 更新温度和湿度值到温度传感器端点
  zbTempSensor.setTemperature(temperature);
  zbTempSensor.setHumidity(humidity);

  // 报告温度和湿度值
  zbTempSensor.report();
  Serial.printf("报告的温度：%.2f°C，湿度：%.2f%%\r\n", temperature, humidity);

  // 添加短暂延迟以确保数据发送完成后再进入睡眠
  delay(100);

  // 设备进入深度睡眠
  // Serial.println("进入睡眠 1 小时");
  // esp_deep_sleep_start();
}

/********************* Arduino 初始化 **************************/
void setup() {
  Serial.begin(115200);
  
  // 初始化 DHT11 传感器
  dht.begin();

  // 初始化按钮开关
  pinMode(BOOT_BUTTON, INPUT_PULLUP);

  // 配置唤醒源
  // esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);

  // 设置 Zigbee 设备信息
  zbTempSensor.setManufacturerAndModel("Seeed", "XIAO_DHT11_Sensor");

  // 设置温度测量范围（DHT11 的范围为 -20°C 至 60°C）
  zbTempSensor.setMinMaxValue(-20, 60);

  // 设置温度测量的容差（DHT11 的精度为 ±2°C）
  zbTempSensor.setTolerance(2);

  // 配置湿度传感器（DHT11 的范围为 20-90% RH，精度为 ±5% RH）
  zbTempSensor.addHumiditySensor(20, 90, 5);

  // 设置电源来源为电池（假设设备由电池供电）
  zbTempSensor.setPowerSource(ZB_POWER_SOURCE_BATTERY, 100);

  // 将端点添加到 Zigbee 核心
  Zigbee.addEndpoint(&zbTempSensor);

  // 创建 Zigbee 终端设备配置
  esp_zb_cfg_t zigbeeConfig = ZIGBEE_DEFAULT_ED_CONFIG();
  zigbeeConfig.nwk_cfg.zed_cfg.keep_alive = 60000; // 60 秒保活时间

  // 启动 Zigbee
  if (!Zigbee.begin(&zigbeeConfig, false)) {
    Serial.println("Zigbee 启动失败！");
    Serial.println("正在重启...");
    ESP.restart();
  }

  Serial.println("正在连接到 Zigbee 网络");
  while (!Zigbee.connected()) {
    Serial.print(".");
    delay(100);
  }
  Serial.println("\n成功连接到 Zigbee 网络");

  // 允许时间用于建立连接
  delay(1000);
}

/********************* Arduino 主循环 **************************/
void loop() {
  // 检查 Boot 按钮是否用于恢复出厂设置
  if (digitalRead(BOOT_BUTTON) == LOW) {
    delay(100); // 消抖
    int startTime = millis();
    while (digitalRead(BOOT_BUTTON) == LOW) {
      delay(50);
      if ((millis() - startTime) > 3000) {
        Serial.println("已启动恢复出厂设置。1 秒后重启...");
        delay(1000);
        Zigbee.factoryReset();
      }
    }
  }

  // 测量传感器数据并进入睡眠
  measureAndSleep();
} 
```

</details>

您只需选择想要更改的部分，输入提示词，然后按回车键即可。

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/11.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## 验证并上传程序

现在 Cursor 已经生成了我们的 Zigbee 项目代码，我们需要验证它是否正常工作。最好的方法是使用 Arduino IDE，它提供了出色的工具来编译和上传代码到我们的 XIAO ESP32C6 开发板。让我们切换到 Arduino IDE 并完成验证过程：

1. 在 Arduino IDE 中打开主文件。  
2. 从 Boards 菜单中选择 **XIAO ESP32C6** 板。  
3. 选择合适的端口。  
4. 点击 **Verify** 按钮以编译代码。  
5. 如果出现任何错误，请返回 Cursor 的聊天界面并请求帮助修复。  
6. 一旦代码成功编译，将其上传到您的 XIAO ESP32C6。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/10.png" style={{width:1000, height:'auto'}}/></div>

如果一切顺利，现在您应该拥有一个可以被 Home Assistant 发现的 Zigbee 设备（前提是您的 Home Assistant 设置中有一个 Zigbee 网关）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/12.png" style={{width:1000, height:'auto'}}/></div>

## 使用 Cursor 进行故障排查

如果您在生成的代码中遇到问题，可以向 Cursor 寻求帮助：

1. 描述您遇到的具体错误或问题
2. 包括 Arduino IDE 中的任何错误消息
3. 请求 Cursor 提出修复或改进建议
4. 实施建议的更改并再次测试

Cursor 的 AI 在调试方面表现尤为出色，通常可以发现手动检查时难以发现的问题。

例如，如果您首次使用 Zigbee 功能或遇到类似以下的编译错误：

```
#error Zigbee end device mode is not selected in Tools->Zigbee mode
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/15.png" style={{width:1000, height:'auto'}}/></div>

由于疏忽导致的错误，您可以随时向 Cursor 寻求指导。只需提示：

***I got a compilation error in Arduino IDE saying 'Compilation error: #error Zigbee end device mode is not selected in Tools->Zigbee mode'. What should I do?***

Cursor 很可能会建议您检查 Arduino IDE 的 Tools 菜单，并选择适当的 Zigbee 模式：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/16.png" style={{width:400, height:'auto'}}/></div>

您可以就遇到的任何错误向 Cursor 提问，它将指导您完成解决过程。其他一些常见问题可能包括：

- 库安装问题
- 引脚配置错误
- 传感器连接问题
- 通信协议设置
- 电源管理问题

只需在提示中清楚地描述问题，Cursor 就会提供相关建议和解决方案。

## 使用 Cursor 增强您的程序

在实现基本的 Zigbee 功能后，您可以使用 Cursor 为程序添加更多功能和改进。以下是通过添加串口初始化检查来增强代码的示例。

这在开发和调试过程中特别有用，因为它确保在继续设置之前不会错过任何串口输出。

1. 在 Cursor 中打开您的项目，并找到代码中的 `setup()` 函数。

2. 在 Chat 面板中描述您想要添加的内容。例如：
   "Add code to wait for serial port to be ready before proceeding with setup"

3. Cursor 将建议如下修改：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/13.png" style={{width:1000, height:'auto'}}/></div>

除了这些小的增强功能之外，我们还可以在基本功能之上实现省电功能，以最大化 Zigbee 的价值。Zigbee 的一个关键优势是其低功耗能力，通过正确实现睡眠模式可以进一步优化。

以下是如何请求 Cursor 为您的传感器项目添加深度睡眠功能：

1. 打开 Chat 面板并请求实现深度睡眠：

***Modify the programme so that the temperature and humidity values are reported once every three hours. Deep sleep the rest of the time to save power.***

2. Cursor 将建议包括以下内容的代码修改：

- 更新睡眠持续时间
- 更新睡眠消息以提供更好的反馈
- 更新文档以反映新的报告间隔
- 返回深度睡眠状态 3 小时

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/14.png" style={{width:1000, height:'auto'}}/></div>

这种电源优化对电池供电的传感器节点特别有价值，可能会将电池寿命从几天延长到几个月甚至几年，具体取决于报告频率和传感器类型。

Cursor 可以帮助您实现所有这些功能——只需在请求帮助时明确您的需求。

## 总结

您现在已经了解了如何使用 Cursor 的 AI 驱动聊天功能为 XIAO ESP32C6 和传感器开发 Zigbee 应用程序。这种方法可以显著加快开发过程，并帮助您克服技术挑战。

随着您对 Cursor 的熟悉，您将发现更多方法来利用其功能为嵌入式项目服务。请记住，提示的质量会极大地影响生成代码的质量，因此在描述需求时要具体和详细。

本教程代表了使嵌入式开发更易于访问的重要一步。通过将 Cursor 等 AI 工具与 XIAO ESP32C6 等强大硬件结合起来，我们正在降低 IoT 和传感器网络开发的门槛。这对以下人群尤其有价值：

- 刚开始嵌入式系统旅程的初学者
- 希望加速原型开发过程的经验丰富的开发人员
- 教授 IoT 和无线通信概念的教育工作者
- 想要创建智能家居解决方案的创客和爱好者

AI 辅助开发工具与 Zigbee 技术的结合，为创建节能、可靠的无线传感器网络开辟了新的可能性。这种技术组合能够在保持高代码质量的同时加快开发周期，从而最终推动 IoT 领域的创新。

:::tip
本文由 Citric 编写，并由 Cursor 协助完成。
:::

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供多种支持，以确保您在使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord">加入我们的 Discord 社区</a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion">参与 GitHub 讨论</a>
</div>