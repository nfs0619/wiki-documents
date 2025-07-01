---
description: 本指南将帮助您快速设置 Seeed Studio XIAO RS485 扩展板，并开始使用 RS485 通信。
title: RS485 扩展板适用于 XIAO
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/top.webp
slug: /cn/XIAO-RS485-Expansion-Board
last_update:
  date: 05/15/2025
  author: Jason
---

# Seeed Studio XIAO RS485 扩展板入门指南

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/top.jpg" style={{width:600, height:'auto'}}/></div>

## 硬件概览

### 准备材料

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO RS485 扩展板</th>
			<th>Seeed Studio XIAO ESP32-C3</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/hadware.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/esp32.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-Breakout-Board-for-XIAO-p-6306.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

### 引脚图示

<div class="table-center">
  <table align="center">
    <tr>
        <th>XIAO RS485 扩展板指示图</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/pinlist.png" style={{width:700, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

- **5V OUT/IN SWITCH**：这是 5V 端口的输入和输出开关。当从设备设置为 IN 时，作为输入；当主设备设置为 OUT 时，该端口向外放电，可连接传感器为传感器供电。

- **120R SWITCH**：120R 开关用于决定是否接入 120 欧姆电阻。在长距离布线环境中，485 通信需要在起点和终点添加 120 欧姆电阻进行匹配，以确保通信正常。

- **INT**：保留的中断端口。

:::tip
当作为输入模式使用时，需要将开关拨到 IN；如果作为输出模式使用，需要将开关拨到 OUT，以防止烧毁设备。
:::

### 连接示意图

<div class="table-center">
  <table align="center">
    <tr>
        <th>两个 RS485 扩展板连接示意图</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/connect1.png" style={{width:700, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

## 软件概览

### 发送端代码

```cpp
#include <HardwareSerial.h>

HardwareSerial mySerial(1); 

#define enable_pin D2 // 定义使能引脚为 D2

void setup() {
  Serial.begin(115200); // 初始化硬件串口，波特率为 115200
  mySerial.begin(115200, SERIAL_8N1, 7, 6); // RX=D4(GPIO4), TX=D5(GPIO5)

  // 等待硬件串口准备好
  while(!mySerial);
  // 等待硬件串口准备好
  while(!Serial);

  pinMode(enable_pin, OUTPUT); // 设置使能引脚为输出模式
  digitalWrite(enable_pin, HIGH); // 将使能引脚设置为高电平
}

void loop() {
  if (Serial.available()) {
    String receivedData = Serial.readStringUntil('\n'); // 从硬件串口读取数据直到换行符

    // 如果接收到的数据不为空
    if (receivedData.length() > 0) {
        Serial.println("发送成功"); // 打印成功消息
        mySerial.print("主机发送的信息是: "); // 向硬件串口发送提示信息
        mySerial.println(receivedData); // 将接收到的数据发送到硬件串口
    }
  }
}
```

- **HardwareSerial 库**：允许在 ESP32 上创建额外的串口，通常用于与设备（如传感器或模块）通信。
- `HardwareSerial mySerial(1);`：定义一个名为 mySerial 的 HardwareSerial 对象，使用 D5 和 D4 作为接收和发送引脚。
- `#define enable_pin D2`：定义一个使能引脚，用于控制 RS485 模块的发送和接收状态。

- `setup()`：
  - `Serial.begin(115200)`：初始化硬件串口，波特率为 115200。
  - `mySerial.begin(115200, SERIAL_8N1, 7, 6);`：RX=D4(GPIO4)，TX=D5(GPIO5)。
  - `while(!mySerial)`：等待硬件串口准备好通信。
  - `while(!Serial)`：等待硬件串口准备好通信。
  - `pinMode(enable_pin, OUTPUT)`：将 enable_pin 配置为输出引脚，用于控制 RS485 模块。
  - `digitalWrite(enable_pin, HIGH)`：将 enable_pin 设置为高电平，配置 RS485 模块为发送模式。

- `loop()`：
  - `if (receivedData.length() > 0)`：检查是否有数据可从硬件串口读取。
  - `String receivedData = Serial.readStringUntil('\n');`：从硬件串口读取数据直到换行符。
  - `Serial.println("发送成功")`：打印成功消息。
  - `mySerial.print("主机发送的信息是: ")`：向硬件串口发送提示信息。
  - `mySerial.println(receivedData)`：将需要发送的数据发送到 RS485 扩展板。

### 接收端代码

```cpp
#include <HardwareSerial.h>

HardwareSerial mySerial(1); // 使用 UART2
#define enable_pin D2 // 定义使能引脚为 D2

void setup() {
  Serial.begin(115200); // 初始化硬件串口，波特率为 115200
  mySerial.begin(115200, SERIAL_8N1, 7, 6); // RX=D4(GPIO4), TX=D5(GPIO5)
  
  // 等待硬件串口准备好
  while(!Serial);
  // 等待硬件串口准备好
  while(!mySerial);
  
  pinMode(enable_pin, OUTPUT); // 设置使能引脚为输出模式
  digitalWrite(enable_pin, LOW); // 将使能引脚设置为低电平
}

void loop() {
  // 检查硬件串口是否有数据可用
  if (mySerial.available()) {
      String receivedData = mySerial.readStringUntil('\n'); // 根据换行符读取字符串
      Serial.print("接收到的数据: ");
      Serial.println(receivedData); // 直接打印接收到的数据
  }
}
```

- **HardwareSerial 库：** 允许在 ESP32 上创建额外的串口，通常用于与设备（如传感器或模块）进行通信。
- `HardwareSerial mySerial(1);`：定义一个名为 mySerial 的 HardwareSerial 对象，使用 D5 作为 RX，D4 作为 TX。
- `define enable_pin D2`：定义一个使能引脚，用于控制 RS485 模块的发送和接收状态。

- `setup()`：
  - `Serial.begin(115200`：以 115200 的波特率初始化硬件串口。
  - `mySerial.begin(115200, SERIAL_8N1, 7, 6);` RX=D4(GPIO4)，TX=D5(GPIO5)。
  - `while(!Serial)`：等待硬件串口准备好进行通信。
  - `while(!mySerial)`：等待硬件串口准备好进行通信。
  - `pinMode(enable_pin, OUTPUT)`：将 enable_pin 配置为输出引脚，用于控制 RS485 模块。
  - `digitalWrite(enable_pin, LOW)`：将 enable_pin 设置为低电平，将 RS485 模块配置为接收模式。

- `loop()`：
  - `if (mySerial.available())`：检查是否有任何数据可以从硬件串口读取。
  - `String receivedData = mySerial.readStringUntil('\n');`：基于换行符读取字符串。
  - `Serial.print("Received data: ");`：在硬件串口上打印一条消息，指示已接收到数据。
  - `Serial.println(receivedData);`：打印发送到 RS485 接收器的数据。

## RS485 传输结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_V2AI/photo/rs485_result.png" style={{width:1000, height:'auto'}}/></div>

## 资源

- **[SCH]** [Seeed Studio XIAO-RS485-扩展板原理图](https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/Seeed_Studio_XIAO_RS485_Expansion_Board.kicad_sch)
- **[PDF]** [Seeed Studio XIAO-RS485-扩展板原理图](https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/Seeed_Studio_XIAO_RS485_Expansion_Board.pdf)

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