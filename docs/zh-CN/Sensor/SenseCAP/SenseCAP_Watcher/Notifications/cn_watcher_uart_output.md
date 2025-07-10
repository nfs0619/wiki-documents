---
description: 用户将学习如何将 Watcher 与 Grove 系统集成，从而扩展其功能并连接各种传感器和外设。
title: UART 输出
image: https://files.seeedstudio.com/wiki/watcher_getting_started/64.jpg
slug: /cn/uart_output
last_update:
  date: 05/15/2025
  author: Citric
sidebar_position: 1
---

# 作为传感器 & 使用 Grove

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/64.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买</font></span></strong>
    </a>
</div><br />

在本篇 Wiki 中，我们将探索当 Watcher 作为传感器使用时，通过其 UART（通用异步收发器）功能所带来的激动人心的可能性。通过启用 UART 通信，Watcher 可以通过设备背面的 UART 接口传输重要数据，例如捕获的图像和识别结果。这为将 Watcher 集成到各种硬件平台并创建创新应用程序打开了大门。

在整个 Wiki 中，我们将深入探讨如何读取和解释来自 Watcher UART 接口的数据输出。此外，我们还将提供全面的教程，讲解如何使用流行的开发板和平台（包括 XIAO、Arduino、Raspberry Pi 和 Jetson）解析和利用这些数据。

## SenseCAP Watcher 高级配置

<div class="table-center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ono_v759R0Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

SenseCAP Watcher 是首款用于智能场所的物理 LLM 代理，能够监控场景、触发动作并基于命令进行交互。此视频将介绍 SenseCAP Watcher 如何根据任务分析选择场景触发模型：设备端模型和 LLM 模型。我们还将展示如何配置 RGB 灯、显示和声音警报，以及通知推送模式：APP、UART、HTTP。

## Watcher UART 接线

当您准备使用 UART 进行消息警报时，请按照以下方式将 Watcher 连接到您的 MCU。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/58.png" style={{width:800, height:'auto'}}/></div>

:::note
请注意，如果您的 Watcher 和 MCU 是分别供电的，那么您 **不需要** 连接 Watcher 和 MCU 的 **3.3V 或 5V** 引脚。

如果您计划使用 Watcher 为 MCU 供电，那么在图片中的接线基础上，您可以使用 **3.3V** 为 MCU 供电。（不要使用 5V 引脚，它们仅用于输入）

如果您计划使用 MCU 为 Watcher 供电，那么您需要使用 **5V** 输入。（3.3V 可能不足以让 Watcher 正常工作）
:::

## 启用 Watcher 的 UART 功能

要充分发挥 Watcher UART 功能的潜力，我们首先需要在设备内启用 UART 功能。这在 Watcher 用作报警系统的场景中特别有用。当触发报警时，Watcher 可以激活其 UART 通信，将捕获的图像和识别结果等关键信息传输到外部设备以进行进一步处理和分析。

启用 UART 报警功能有两种方法：

1. 在使用 SenseCraft APP 分配任务时，明确请求 Watcher 通过 UART 通知您。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/60.png" style={{width:250, height:'auto'}}/></div>

2. 在任务的详细设置中手动启用 UART 报警功能：

   - 进入您想要配置的任务的 **详细配置**。
   - 找到 **动作** 部分。
   - 勾选以启用 **串口 / UART 输出**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/86.png" style={{width:250, height:'auto'}}/></div><br />

:::tip
请根据您的实际应用场景选择是否需要启用图像输出。如果启用了 **包含 base64 图像**，那么您的 MCU 需要 **至少 70k 内存** 来缓存图像。
:::

一旦通过上述任一方法启用了 UART 报警功能，当 Watcher 检测到指定的报警内容时，它将通过 UART 输出必要的报警信息。请确保 Watcher 已连接到适当的接收设备，例如带有串口终端的微控制器或计算机，以捕获和处理通过 UART 传输的报警信息。

## 读取来自 Watcher 的 UART 输出

启用 UART 功能后，Watcher 将开始通过其 UART 接口传输数据。在本节中，我们将提供有关如何读取和解释来自 Watcher UART 输出数据的详细指南。我们将涵盖必要的硬件连接、通信协议和数据格式，以确保数据检索过程顺利且成功。

默认情况下，Watcher 使用以下 UART 配置：波特率为 **115200**，**8 数据位**，**无校验位**，**1 停止位**，以及 **无硬件流控制**。在连接到 Watcher 的 UART 接口时，请确保您的接收设备配置了相同的设置，以确保通信正常。

当 Watcher 通过 UART 发送报警信息时，它遵循基于 `tf_module_uart_alarm_t` 结构（定义在 `tf_module_uart_alarm.h` 头文件中）的特定协议和格式。Watcher UART 报警模块的 UART 协议和格式如下：

### 输出格式

UART 输出的格式由 `output_format` 字段控制。

- 当 `output_format` 设置为 0 时，输出为二进制格式。
- 当 `output_format` 设置为 1 时，输出为 JSON 格式。

:::note
`output_format` 默认设置为 1，以 JSON 格式输出。
:::

### 二进制输出格式

当 `output_format` 设置为 0 时，UART 输出数据包的结构如下：

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/api.png" style={{width:1000, height:'auto'}}/></div><br />

- `PKT_MAGIC_HEADER`：数据包的魔术头，固定为 "SEEED"（5 字节）。
- `Prompt Str Len`：提示字符串的长度，4 字节无符号整数，采用小端字节序。
- `Prompt Str`：提示字符串，用于简要说明 Watcher 正在执行的任务。如果设置了 `text` 参数，则使用其值。
- `Big Image Len`：大图的长度，4 字节无符号整数，采用小端字节序。仅当 `include_big_image` 为 `true` 时包含。
- `Big Image`：640*480 的 JPG 图像，经过 base64 编码，不包含检测到的对象框。仅当 `include_big_image` 为 `true` 时包含。
- `Small Image Len`：小图的长度，4 字节无符号整数，采用小端字节序。仅当 `include_small_image` 为 `true` 时包含。
- `Small Image`：240*240 的 JPG 图像，经过 base64 编码，包含检测到的对象框。仅当 `include_small_image` 为 `true` 时包含。
- `Boxes Count`：检测到的对象框数量，4 字节无符号整数，采用小端字节序。仅当 `include_boxes` 为 `true` 时包含。
- `Box Structure`：检测到的对象框的结构，每个框占用 10 字节，包括坐标、置信度和目标类别 ID。仅当 `include_boxes` 为 `true` 时包含。

:::note
目前不会接收到识别框（boxes）的消息，因为 Watcher 的相关功能仍在开发中，并未在最新的 v1.1 版本中报告。
:::

### JSON 输出格式

当 `output_format` 设置为 1 时，UART 输出数据包的结构如下：

```json
{
      "prompt": "检测到人员",
      "big_image": "base64 编码的 JPG 图像，如果启用了 include_big_image，否则该字段省略",
      "inference":{
        "boxes": [
            {
                "x": 100,
                "y": 100,
                "w": 50,
                "h": 60,
                "score": 0.8,
                "target_cls_id": 1
            }
        ],
        "classes_name": ["person"]
      },

}
```
其中，**(x,y)** 是识别对象的中心点位置，**(w,h)** 是识别框的宽度和高度，如下图所示。**score** 是置信度，**target_cls_id** 是识别对象的 ID。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/xyhw.png" style={{width:400, height:'auto'}}/></div>

### 配置选项

- `output_format`：控制 UART 输出的格式，默认值为 1（JSON 格式）。
- `text`：用于填充输出数据包中的 `prompt` 字段。
- `include_big_image`：布尔值（true | false），控制是否在输出中包含大图，默认值为 `true`。
- `include_boxes`：布尔值（true | false），控制是否在输出中包含检测框，默认值为 `true`。

注意：如果省略任何配置字段，将使用默认值。

:::note
目前不会接收到识别框（boxes）的消息，因为 Watcher 的相关功能仍在开发中，并未在最新的 v1.1 版本中报告。
:::

## XIAO ESP32 系列与 Watcher

了解如何将 Watcher 连接到 XIAO ESP32 系列开发板，并使用 Arduino 解析 UART 数据。本节将指导您如何将 Watcher 连接到 XIAO ESP32 系列开发板，并使用 Arduino 解析 UART 数据。

### 接线

本教程支持 XIAO 系列：

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO ESP32C3</th>
			<th>XIAO ESP32S3</th>
            <th>XIAO ESP32C6</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:110, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

:::tip
这并不意味着其他 XIAO 系列不支持。主要原因是 Watcher 报告的消息数据大约占用 **100k**（至少 70k）内存，我们建议您使用 ESP32 系列的 XIAO 进行 Watcher 的 UART 开发。如果您不需要解析图像数据，那么其他 XIAO 的内存完全足够。
:::

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/63.png" style={{width:700, height:'auto'}}/></div><br />

- 将 Watcher 的 TX 引脚连接到 XIAO 的 UART 接口的 RX 引脚。

- 将 Watcher 的 RX 引脚连接到 XIAO 的 UART 接口的 TX 引脚。

- 将 Watcher 的 GND 引脚连接到 XIAO 的一个 GND 引脚。

### 代码解释

您可以使用任何 XIAO ESP32 系列开发板，或者任何其他 ESP32 系列开发板来运行以下程序，以读取 Watcher 的 UART 数据流。

:::note
目前仅支持输出 JSON 数据流，因此仅提供解析 JSON 数据流的程序。

其他 XIAO 开发板可能不支持，主要原因是解析 JSON 数据流至少需要 70k 的内存。
:::

```cpp
#include <ArduinoJson.h>

long int count = 0;  // 报警次数

void setup() {
  Serial.begin(115200);
  Serial1.begin(115200, SERIAL_8N1, D7, D6);  // RX, TX
  while(!Serial);
  delay(100);

  Serial.println("设备已准备好。等待 Watcher 的 JSON 数据...");
}

void loop() {
  if (Serial1.available()) {
    // 设置足够的空间来存储解析的 JSON 对象
    const size_t capacity = 1024 * 100 + 512; // 至少 70k，保险值 100k
    DynamicJsonDocument doc(capacity);

    // 从 Serial1 流式解析
    DeserializationError error = deserializeJson(doc, Serial1);

    if (error) {
      Serial.print("deserializeJson() 失败: ");
      Serial.println(error.c_str());
      return;
    }

    // 打印解析的键值对
    if (doc.containsKey("prompt")) {
      Serial.print("提示: ");
      Serial.println(doc["prompt"].as<String>());
    }

    if (doc.containsKey("inference")) {
      Serial.print("推断: ");
      Serial.println(doc["inference"].as<String>());
    }

    if (doc.containsKey("inference")) {
      JsonArray boxes = doc["inference"]["boxes"][0].as<JsonArray>();
      Serial.println();
      Serial.println("您可以获取 boxes 中的数值。");
      Serial.print("Box -> ");
      Serial.print("x: ");
      Serial.print(boxes[0].as<int>());
      Serial.print(", y: ");
      Serial.print(boxes[1].as<int>());
      Serial.print(", 宽度: ");
      Serial.print(boxes[2].as<int>());
      Serial.print(", 高度: ");
      Serial.print(boxes[3].as<int>());
      Serial.print(", 分数: ");
      Serial.print(boxes[4].as<int>());
      Serial.print(", 目标类别 ID: ");
      Serial.println(boxes[5].as<int>());
    }
    
    // 您需要在应用程序中打开 "包含 base64 图像" 按钮，默认是关闭的。
    // 然后，取消注释以下代码。
    /*
    if (doc.containsKey("big_image")) {
      Serial.print("大图像: ");
      String big_imageData = doc["big_image"].as<String>();
      // 示例中仅打印图像数据的前 100 个字符
      Serial.println(big_imageData.substring(0, 100) + "...");
    }
    */

    count++;
    if(count > 2147483646){  // 防止溢出
      count = 0;
    }
    Serial.print("第 ");
    Serial.print(count);
    Serial.println(" 条报警消息接收完成。等待下一条消息...");
    Serial.println("------------------------------------------------------------------");
  }
}
```

提供的代码演示了如何使用 Arduino IDE 和 ArduinoJson 库接收并解析来自 Watcher 的 JSON 数据。以下是代码的简要说明：

1. 引入了必要的库 **ArduinoJson** 来处理 JSON 解析。您可以在 Arduino 的库管理器中搜索并安装它。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://github.com/bblanchon/ArduinoJson">
            <strong><span><font color={'FFFFFF'} size={"4"}>前往 Github 🖱️</font></span></strong>
    </a>
</div>

2. 在 `setup()` 函数中，初始化了 USB 串口（用于调试）和 UART 串口（用于接收来自 Watcher 的数据）。

3. 在 `loop()` 函数中，代码检查 UART 串口是否有可用数据。

4. 如果有数据可用，则创建一个 `DynamicJsonDocument`，并指定容量以存储解析的 JSON 对象。

5. 使用 `deserializeJson()` 函数解析 JSON 数据，并处理任何解析错误。

6. 代码检查解析的 JSON 对象中是否存在特定的键，例如 "prompt"、"big_image" 和 "small_image"。

:::note
目前无法解析识别框（boxes）相关的信息，因为 Watcher 的对应功能仍在开发中，在最新的 v1.0.1 版本中尚未报告此信息。
:::

7. 如果找到某个键，则将其对应的值打印到 USB 串口以进行调试。

8. 代码还使用 `count` 变量跟踪接收到的报警消息数量。

9. 最后，打印一条消息以指示每条报警消息接收完成，并等待下一条消息。

### 将代码上传到 XIAO ESP32 系列

要将代码上传到您的 XIAO ESP32 系列开发板，请按照以下步骤操作：

1. 使用 USB 数据线将您的 XIAO ESP32 系列开发板连接到计算机。

2. 打开 Arduino IDE，并确保您已安装适用于 XIAO ESP32 系列的必要板支持包。

   - 如果您想使用 **Seeed Studio XIAO ESP32C3** 进行操作，请参考 **[此教程](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started#software-setup)** 完成添加。

   - 如果您想使用 **Seeed Studio XIAO ESP32S3** 进行操作，请参考 **[此教程](http://wiki.seeedstudio.com/xiao_esp32s3_getting_started#software-preparation)** 完成添加。

   - 如果您想使用 **Seeed Studio XIAO ESP32C6** 进行操作，请参考 **[此教程](https://wiki.seeedstudio.com/xiao_esp32c6_getting_started/)** 完成添加。

3. 在 Arduino IDE 的工具菜单中选择适当的开发板和端口。

4. 在 Arduino IDE 中打开提供的代码。

5. 点击 **上传** 按钮，将代码编译并上传到您的 XIAO ESP32 系列开发板。

### 预期结果

代码上传并在您的 XIAO ESP32 系列开发板上运行后，当 Watcher 识别到目标报警时，您应该看到以下行为：

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/62.png" style={{width:800, height:'auto'}}/></div><br />

您也可以尝试使用其他 Arduino 开发板，但请确保它具有足够的内存。

## 树莓派 & Watcher

探索将 Watcher 连接到树莓派并使用 Python 脚本解析和分析 UART 数据的过程。

### 接线

本节将以树莓派 5 为例进行说明，如果需要，可以通过以下链接购买。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 购买树莓派 🖱️</font></span></strong>
    </a>
</div>

如果您使用的是其他系列的树莓派，其代码和使用教程基本相同。

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/65.png" style={{width:800, height:'auto'}}/></div><br />

- 将 Watcher 的 TX 引脚连接到树莓派的 RX 引脚（GPIO 15）。

- 将 Watcher 的 RX 引脚连接到树莓派的 TX 引脚（GPIO 14）。

- 将 Watcher 的 GND 引脚连接到树莓派的 GND 引脚。

### 代码说明

在运行 Python 脚本之前，请确保安装所需的依赖项：

```
sudo apt update
sudo apt install python3-pip
pip3 install pyserial pillow
```

检查树莓派上 UART 接口的设备名称：

```
ls /dev/ttyAMA*
```

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/67.png" style={{width:700, height:'auto'}}/></div><br />

第一个 Python 脚本通过 UART 从 Watcher 读取 JSON 数据并打印：

```python
import serial

# 设置串口
ser = serial.Serial('/dev/ttyAMA0', 115200, timeout=1) 

def read_json_from_serial():
    while True:
        if ser.in_waiting > 0:
            data = ser.readline()
            print(data.decode().strip())

if __name__ == "__main__":
    print("在树莓派上启动串口 JSON 读取器...")
    read_json_from_serial()
```

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/68.png" style={{width:900, height:'auto'}}/></div><br />

:::note
1. 我的 UART 接口对应 `/dev/ttyAMA0`，如果您的接口不同，请自行修改。

2. 这是一个测试脚本，您可以用它来检查树莓派/Watcher 的 UART 是否正常工作。
:::

第二个 Python 脚本在第一个脚本的基础上增加了 JSON 解析和图像数据保存功能：

```python
import json
import serial  
import base64
from PIL import Image
import io

# 设置串口
ser = serial.Serial('/dev/ttyAMA0', 115200, timeout=1)

# 初始化图像计数器
big_image_counter = 1
small_image_counter = 1

def read_json_from_serial(): 
    buffer = ""
    try:
        while True:
            if ser.in_waiting > 0:
                data = ser.read(ser.in_waiting).decode()  
                buffer += data

                if '}' in buffer:
                    end = buffer.rfind('}')
                    json_data = buffer[:end+1]
                    buffer = buffer[end+1:]

                    try:  
                        data = json.loads(json_data)
                        print("接收到 JSON 数据，正在处理...")
                        process_json_data(data)
                    except json.JSONDecodeError:
                        print("JSON 解码错误")  
                        buffer = json_data + buffer
    except Exception as e:
        print(f"发生错误: {e}")

def process_json_data(data):
    global big_image_counter, small_image_counter  # 声明全局变量

    # 处理提示信息
    if "prompt" in data:  
        print(f"提示: {data['prompt']}")
    
    # 处理框信息
    #if "boxes" in data:
        #for index, box in enumerate(data['boxes']):
            #print(f"框 {index + 1} - x: {box['x']}, y: {box['y']}, w: {box['w']}, h: {box['h']}, 分数: {box['score']}, 目标类别 ID: {box['target_cls_id']}")

    if "big_image" in data:  
        filename = f'big_image_{big_image_counter}.png'
        decode_and_save_image(data['big_image'], filename) 
        print(f"大图像已处理并保存为 {filename}。")
        big_image_counter += 1  # 更新全局变量 

    if "small_image" in data:
        filename = f'small_image_{small_image_counter}.png' 
        decode_and_save_image(data['small_image'], filename)
        print(f"小图像已处理并保存为 {filename}。")  
        small_image_counter += 1  # 更新全局变量

def decode_and_save_image(base64_data, filename):
    image_bytes = base64.b64decode(base64_data)
    image = Image.open(io.BytesIO(image_bytes))
    image.save(filename)  # 保存为 PNG 文件
    return image

if __name__ == "__main__": 
    print("在树莓派上启动串口 JSON 读取器...")
    read_json_from_serial()
```

:::note
目前仅支持输出 JSON 数据流，因此仅提供解析 JSON 数据流的程序。
:::

此脚本的功能包括：

- 循环从 UART 读取 JSON 数据

- 解码 JSON 数据并调用 `process_json_data` 进行处理

- 从 JSON 中提取提示信息和图像数据

:::note
关于识别框（boxes）的信息解析目前不可用，因为 Watcher 的相应功能仍在开发中，在最新的 v1.0.1 版本中尚未报告此信息。
:::

- 解码 base64 编码的图像数据并通过 `decode_and_save_image` 保存为 PNG 文件

- 打印提取的信息和保存的图像文件名

### 在树莓派上运行代码

1. 在树莓派上创建一个新的 Python 文件，例如 watcher_uart.py：

```
nano watcher_uart.py
```

2. 将完整的 Python 代码复制并粘贴到文件中。

3. 按 Ctrl+X，然后按 Y 和 Enter 保存并退出编辑器。

4. 运行 Python 脚本：

```
python watcher_uart.py
```

### 预期结果

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/69.png" style={{width:1000, height:'auto'}}/></div><br />

运行脚本后：

- 从 Watcher 接收到的解析后的 JSON 数据将实时打印在终端中。

- 接收到的大图和小图将会自动保存为 big_image_x.png 和 small_image_x.png 文件。

就是这样！现在你已经学会了如何将 Watcher 连接到 Raspberry Pi，使用 Python 读取 UART 数据，解析 JSON，并保存传输的图像。可以尝试进一步实验，例如尝试将接收到的数据实时显示在连接到 Raspberry Pi 的屏幕上。

## reComputer Jetson & Watch

探索将 Watcher 连接到 reComputer（基于 NVIDIA Jetson 的设备）并使用 Python 脚本解析和分析 UART 数据的过程。

### 接线

本教程将以适合开发者的 J401 reComputer 载板为例进行说明，如果你想购买 reComputer，可以通过以下链接获取。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-w-o-power-adapter-p-5628.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 购买 reComputer 🖱️</font></span></strong>
    </a>
</div>

理论上，本节中的内容和代码适用于所有 NVIDIA Jetson 系列产品。

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/66.png" style={{width:800, height:'auto'}}/></div><br />

- 将 Watcher 的 TX 引脚连接到 reComputer UART 接口的 RX 引脚。

- 将 Watcher 的 RX 引脚连接到 reComputer UART 接口的 TX 引脚。

- 将 Watcher 的 GND 引脚连接到 reComputer 的一个 GND 引脚。

### 代码说明

在运行 Python 脚本之前，请确保安装所需的依赖项：

```
sudo apt-get update
sudo apt-get install python3-serial
sudo apt-get install python3-pillow
```

如果你不打算在 UART 上使用串口控制台，则应禁用串口控制台：

```
systemctl stop nvgetty
systemctl disable nvgetty
udevadm trigger
```

此时可能需要重启 reComputer 以使更改生效。

检查 reComputer 上 UART 接口的设备名称：

```
ls /dev/ttyTHS*
```

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/71.png" style={{width:700, height:'auto'}}/></div><br />

第一个 Python 脚本通过 UART 从 Watcher 读取 JSON 数据并打印出来：

```python
import serial

# 设置串口
ser = serial.Serial('/dev/ttyTHS0', 115200, timeout=1) 

def read_json_from_serial():
    while True:
        if ser.in_waiting > 0:
            data = ser.readline()
            print(data.decode().strip())

if __name__ == "__main__":
    print("在 reComputer 上启动串口 JSON 读取器...")
    read_json_from_serial()
```

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/70.png" style={{width:1000, height:'auto'}}/></div><br />

:::note
1. 我的 UART 接口对应 `/dev/ttyTHS0`，如果你的不同，请自行修改。

2. 这是一个测试脚本，你可以用它来检查 reComputer/Watcher 的 UART 是否正常工作。
:::

第二个 Python 脚本在第一个脚本的基础上增加了 JSON 解析和图像数据保存功能：

```python
import json
import serial  
import base64
from PIL import Image
import io

# 设置串口
ser = serial.Serial('/dev/ttyTHS0', 115200, timeout=1)

# 初始化图像计数器
big_image_counter = 1
small_image_counter = 1

def read_json_from_serial(): 
    buffer = ""
    try:
        while True:
            if ser.in_waiting > 0:
                data = ser.read(ser.in_waiting).decode()  
                buffer += data

                if '}' in buffer:
                    end = buffer.rfind('}')
                    json_data = buffer[:end+1]
                    buffer = buffer[end+1:]

                    try:  
                        data = json.loads(json_data)
                        print("接收到 JSON 数据，正在处理...")
                        process_json_data(data)
                    except json.JSONDecodeError:
                        print("JSON 解码错误")  
                        buffer = json_data + buffer
    except Exception as e:
        print(f"发生错误: {e}")

def process_json_data(data):
    global big_image_counter, small_image_counter  # 声明全局变量

    # 处理提示信息
    if "prompt" in data:  
        print(f"提示: {data['prompt']}")
    
    # 处理框信息
    #if "boxes" in data:
        #for index, box in enumerate(data['boxes']):
            #print(f"框 {index + 1} - x: {box['x']}, y: {box['y']}, w: {box['w']}, h: {box['h']}, 分数: {box['score']}, 目标类别 ID: {box['target_cls_id']}")

    if "big_image" in data:  
        filename = f'big_image_{big_image_counter}.png'
        decode_and_save_image(data['big_image'], filename) 
        print(f"大图已处理并保存为 {filename}。")
        big_image_counter += 1  # 更新全局变量 

    if "small_image" in data:
        filename = f'small_image_{small_image_counter}.png' 
        decode_and_save_image(data['small_image'], filename)
        print(f"小图已处理并保存为 {filename}。")  
        small_image_counter += 1  # 更新全局变量

def decode_and_save_image(base64_data, filename):
    image_bytes = base64.b64decode(base64_data)
    image = Image.open(io.BytesIO(image_bytes))
    image.save(filename)  # 保存为 PNG 文件
    return image

if __name__ == "__main__": 
    print("在 reComputer 上启动串口 JSON 读取器...")
    read_json_from_serial()
```

:::note
目前仅支持输出 JSON 数据流，因此仅提供了解析 JSON 数据流的程序。
:::

此脚本的功能包括：

- 循环从 UART 读取 JSON 数据

- 解码 JSON 数据并调用 `process_json_data` 处理

- 从 JSON 中提取提示信息和图像数据

- 解码 Base64 编码的图像数据，并使用 `decode_and_save_image` 保存为 PNG 文件

:::note
关于识别框（boxes）信息的解析目前不可用，因为 Watcher 的相应功能仍在开发中，并且在最新的 v1.0.1 版本中尚未报告此信息。
:::

- 打印提取的信息以及保存图像的文件名

### 将代码上传到 reComputer

在 reComputer 上创建一个新的 Python 文件，例如 `watcher_uart.py`：

```
nano watcher_uart.py
```

将完整的 Python 代码复制并粘贴到文件中。按 Ctrl+X，然后按 Y 和 Enter 保存并退出编辑器。运行 Python 脚本：

```
sudo python watcher_uart.py
```

### 预期结果

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/72.png" style={{width:1000, height:'auto'}}/></div><br />

运行脚本后：

- 从 Watcher 接收到的解析后的 JSON 数据将实时打印到终端，包括提示信息。

- 接收到的大图和小图将自动保存为 big_image_x.png 和 small_image_x.png 文件。

就是这样！您现在已经学会了如何将 Watcher 连接到 reComputer，使用 Python 读取 UART 数据，解析 JSON，并保存传输的图像。可以随意进一步实验并根据您的具体使用场景在 reComputer 平台上调整代码。


## 资源

- [SenseCAP Watcher 入门指南](https://wiki.seeedstudio.com/getting_started_with_watcher/)

- [Watcher 快速入门系列 1#：如何为 Watcher 分配任务](https://wiki.seeedstudio.com/getting_started_with_watcher_task/)

- [Watcher 快速入门系列 2#：Watcher 外观与 SenseCraft 工具](https://wiki.seeedstudio.com/cn/integrate_watcher_to_ha/#%E7%AC%AC%E5%85%AD%E6%AD%A5%E8%AE%BE%E7%BD%AE%E4%BB%BB%E5%8A%A1%E5%B9%B6%E9%85%8D%E7%BD%AE-http-%E6%B6%88%E6%81%AF%E5%9D%97)

- [Watcher 快速入门系列 3#：作为传感器并使用 Grove](https://wiki.seeedstudio.com/watcher_as_grove)

- [Watcher 快速入门系列 4#：本地部署 Watcher 的 AI 功能](https://wiki.seeedstudio.com/watcher_local_deploy)

- Watcher 快速入门系列 5#：为 Watcher 训练模型

- [Watcher 快速入门系列 6#：Watcher 的功能](https://wiki.seeedstudio.com/what_does_watcher_do)


## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>