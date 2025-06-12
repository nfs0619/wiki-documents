---
description: 针对 Seeed nRF52 mbed-enabled Boards 的文档
title: 针对 Seeed nRF52 mbed-enabled Boards 的文档
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-BLE-Sense-Bluetooth-Usage
last_update:
  date: 05/15/2025
  author: shuxu hu
---

# 蓝牙使用指南 (Seeed nrf52 mbed-enabled Boards Library)

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

**Seeed Studio XIAO nRF52840** 和 **Seeed Studio XIAO nRF52840 Sense** 均支持蓝牙连接。本篇 Wiki 将介绍蓝牙功能的基础知识，并提供一个结合 24GHz 呼吸睡眠检测模块的演示，使用 "Seeed nrf52 mbed-enabled Boards Library"。

## 入门指南

### 所需硬件

- 1 x [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) 或 [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- 1 x 支持蓝牙连接的智能手机/PC
- 1 x USB Type-C 数据线

### 所需软件

- [nRF Connect for Mobile (Android)](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp)
- [LightBlue App (Apple)](https://apps.apple.com/us/app/lightblue/id557428110)

## Arduino 库概览

:::tip
如果您是第一次使用 Arduino，我们强烈建议您参考 [Arduino 入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::
要使用 Seeed Studio XIAO nRF52840 的蓝牙功能，我们需要使用官方的 Arduino BLE 库。

<div>
  <p style={{}}><a href="https://github.com/arduino-libraries/ArduinoBLE" target="_blank" /></p><div align="center"><a href="https://github.com/arduino-libraries/ArduinoBLE" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

如果您想运行 24GHz 睡眠呼吸雷达的演示，还需要下载支持的库。

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed_24GHz_SleepBreathingRadar_BLE" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed_24GHz_SleepBreathingRadar_BLE" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

### 功能

关于 ArduinoBLE 库的功能和使用介绍，请参考 [Arduino 官方网站](https://www.arduino.cc/reference/en/libraries/arduinoble/)。

关于 Seeed 24GHz 睡眠呼吸雷达 BLE 库的功能和使用介绍，请参考 [Wiki](https://wiki.seeedstudio.com/Radar_MR24BSD1/#function)。

### 安装

- **方法一**（适用于上述两个代码库）

下载 ZIP 格式的库文件后，打开 Arduino IDE，点击 **Sketch > Include Library > Add .ZIP Library**。选择刚刚下载的 ZIP 文件，如果安装成功，通知窗口中会显示 **Library added to your libraries**，表示库已成功安装。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" /></div>

- **方法二**（仅适用于 ArduinoBLE 库）

从 Arduino IDE 1.5 及更高版本（1.6.x）开始，库管理器被添加到 IDE 中。您可以通过 'Sketch' 菜单下的 'Include Library' 和 'Manage Libraries...' 找到它。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/seeed_logo/Library.jpg" /></div>

打开库管理器后，您会看到一个可以一键安装的大量库列表。要找到适合您产品的库，可以搜索产品名称或关键字，例如 'k type' 或 'digitizer'，然后找到所需的库。点击所需库后，会出现 'Install' 按钮。点击该按钮，库会自动安装。安装完成后，关闭库管理器即可。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRFmbed.png" /></div>

## 应用示例

现在我们已经安装了库并了解了基本功能，接下来让我们运行一些示例，看看 Seeed Studio XIAO nRF52840 的表现。

**步骤 1.** 启动 Arduino 应用程序。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>

**步骤 2.** 选择您的开发板型号并将其添加到 Arduino IDE 中。这里我们使用的是 "Seeed nrf52 mbed-enabled Boards Library"。

> 关于开发板库的安装，请参考 [本教程](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup) 完成安装。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528404.png" /></div>

### 示例 1 使用智能手机控制内置 LED

在此示例中，我们将通过蓝牙连接 Seeed Studio XIAO nRF52840 (Sense) 和智能手机，并从手机发送消息以打开/关闭 Seeed Studio XIAO nRF52840 (Sense) 上的内置红色 LED。

请将以下代码粘贴到 Arduino IDE 中，并上传到 Seeed Studio XIAO nRF52840。

```cpp
#include <ArduinoBLE.h>

BLEService ledService("19B10000-E8F2-537E-4F6C-D104768A1214"); // 蓝牙低功耗 LED 服务

// 蓝牙低功耗 LED 开关特性 - 自定义 128 位 UUID，可被中心设备读取和写入
BLEByteCharacteristic switchCharacteristic("19B10001-E8F2-537E-4F6C-D104768A1214", BLERead | BLEWrite);

const int ledPin = LED_BUILTIN; // 用于 LED 的引脚

void setup() {
  Serial.begin(9600);
  while (!Serial);

  // 设置 LED 引脚为输出模式
  pinMode(ledPin, OUTPUT);

  // 开始初始化
  if (!BLE.begin()) {
    Serial.println("启动蓝牙低功耗模块失败！");

    while (1);
  }

  // 设置广播的本地名称和服务 UUID：
  BLE.setLocalName("LED");
  BLE.setAdvertisedService(ledService);

  // 将特性添加到服务中
  ledService.addCharacteristic(switchCharacteristic);

  // 添加服务
  BLE.addService(ledService);

  // 为特性设置初始值：
  switchCharacteristic.writeValue(0);

  // 开始广播
  BLE.advertise();

  Serial.println("BLE LED 外围设备");
}

void loop() {
  // 监听蓝牙低功耗外围设备的连接：
  BLEDevice central = BLE.central();

  // 如果有中心设备连接到外围设备：
  if (central) {
    Serial.print("已连接到中心设备：");
    // 打印中心设备的 MAC 地址：
    Serial.println(central.address());

    // 当中心设备仍然连接到外围设备时：
    while (central.connected()) {
        if (switchCharacteristic.written()) {
          if (switchCharacteristic.value()) {   
            Serial.println("LED 开启");
            digitalWrite(ledPin, LOW); // 从 HIGH 改为 LOW       
          } else {                              
            Serial.println(F("LED 关闭"));
            digitalWrite(ledPin, HIGH); // 从 LOW 改为 HIGH     
          }
        }
      }

    // 当中心设备断开连接时，打印信息：
    Serial.print(F("已从中心设备断开连接："));
    Serial.println(central.address());
  }
}
```

以下是翻译后的简体中文技术文档：

---

此示例实现的关键是以下代码段：

```cpp
  while (central.connected()) {
        if (switchCharacteristic.written()) {
          if (switchCharacteristic.value()) {   
            Serial.println("LED on"); // LED 开启
            digitalWrite(ledPin, LOW); // 从 HIGH 改为 LOW       
          } else {                              
            Serial.println(F("LED off")); // LED 关闭
            digitalWrite(ledPin, HIGH); // 从 LOW 改为 HIGH     
          }
        }
      }
```

此代码的目的是在 Seeed Studio XIAO nRF52840 被蓝牙设备连接时 `central.connected()`，并从蓝牙设备接收到内容 `switchCharacteristic.written()` 时，进入判断。如果判断值为非零 `switchCharacteristic.value()`，则灯亮；如果判断值为 0，则灯灭。

打开串口监视器，设置波特率为 9600，LED 应该会亮或灭。输出应类似于下图所示。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO-BLE/2.png" /></div>

此时，可以通过蓝牙使用手机应用程序控制 Seeed Studio XIAO nRF52840 的灯光，具体操作如下所述。

<table align="center">
 <tr>
     <th align="center">iPhone</th>
     <th align="center">Android</th>  
      <th align="center">描述</th>
 </tr>
 <tr>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/IPhone1.jpg"/></td>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/and1.jpeg"/></td>
      <td align="center">打开软件，搜索名为 <strong>LED</strong> 的蓝牙设备并点击连接。有些设备可能显示为 <strong>Arduino</strong>。</td>
 </tr>
 <tr>
     <td><img width ={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/IPhone2.jpg"/></td>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/and2.jpeg"/></td>
      <td align="center">进入 Seeed Studio XIAO nRF52840 的蓝牙界面，点击设备以显示设备详情。</td>
 </tr>
 <tr>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/IPhone4.jpg"/></td>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/and3.jpeg"/></td>
      <td align="center">填写要发送到 Seeed Studio XIAO nRF52840 的数据，发送 1 开灯，发送 0 关灯。</td>
 </tr>
 <tr>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/iPhone5.jpg"/></td>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/and4.jpeg"/></td>
      <td align="center">返回蓝牙控制界面，可以看到值已更改，Seeed Studio XIAO nRF52840 的红灯亮起（或熄灭）。</td>
 </tr>
 <tr>
      <td colspan="3"><img width = {800} src="https://files.seeedstudio.com/wiki/XIAO-BLE/3.png"/></td>
 </tr>
</table>

### 示例 2 使用 XIAO BLE 通过蓝牙获取 24GHz 睡眠检测模块的数据

在此示例中，我们将描述如何获取传感器的值，并通过蓝牙将传感器检测到的数据发送到移动设备，使用 Seeed Studio XIAO nRF52840。

按照下图连接 Seeed Studio XIAO nRF52840 开发板和 24GHz 呼吸睡眠检测模块。有关更多信息，请点击[这里](https://wiki.seeedstudio.com/Radar_MR24BSD1)。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/60GHzradar/20.png" /></div>

请打开库中的示例代码并将其上传到 Seeed Studio XIAO nRF52840。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO-BLE/6.png" /></div>

```cpp
// Radar_with_XIAOBLE_example

#include <ArduinoBLE.h>
#include <sleepbreathingradarBLE.h>

SleepBreathingRadarBLE radar;
BLEService radarService("19B10000-E8F2-537E-4F6C-D104768A1214"); // 蓝牙低功耗 LED 服务

// 蓝牙低功耗 LED 开关特性 - 自定义 128 位 UUID，可被中心设备读取和通知
BLEStringCharacteristic switchCharacteristic("19B10001-E8F2-537E-4F6C-D104768A1214", BLERead | BLENotify, 20);

int last_val = 0;

void setup() {
  Serial.begin(9600);
  radar.SerialInit();
  while (!Serial);

  // 开始初始化
  if (!BLE.begin()) {
    Serial.println("启动 Seeed Studio XIAO nRF52840 和 60GHz 雷达传感器示例失败！");
    while (1);
  }

  // 设置广播的本地名称和服务 UUID：
  BLE.setLocalName("Seeed Studio XIAO nRF52840");
  BLE.setAdvertisedService(radarService);

  // 将特性添加到服务中
  radarService.addCharacteristic(switchCharacteristic);

  // 添加服务
  BLE.addService(radarService);

  // 开始广播
  BLE.advertise();

  Serial.println("Seeed Studio XIAO nRF52840 已激活，等待连接...");
}

void loop() {
  // 监听蓝牙低功耗外围设备的连接：
  BLEDevice central = BLE.central();

  // 如果中心设备连接到外围设备：
  if (central) {
    Serial.print("已连接到中心设备：");
    // 打印中心设备的 MAC 地址：
    Serial.println(central.address());

    // 当中心设备仍然连接到外围设备时：
    while (central.connected()){
       radar.recvRadarBytes();                       // 接收雷达数据并开始处理
       if (radar.newData == true) {                  // 数据已接收并传输到新列表 dataMsg[]
          byte dataMsg[radar.dataLen+3] = {0x00};
          dataMsg[0] = 0x53;                         // 添加帧头作为数组的第一个元素
          for (byte n = 0; n < radar.dataLen; n++)dataMsg[n+1] = radar.Msg[n];  // 帧逐帧传输
          dataMsg[radar.dataLen+1] = 0x54;
          dataMsg[radar.dataLen+2] = 0x43;
          radar.newData = false;                     // 一整套数据帧已保存
          int new_val = radar.Sleep_inf(dataMsg);    // 使用雷达内置算法输出人体运动状态
          if(new_val != last_val){
            radar.OutputAssignment(new_val);
            switchCharacteristic.setValue(radar.str);
            last_val = new_val;
          }
        }
    }

    // 当中心设备断开连接时，打印信息：
      Serial.print(F("中心设备已断开连接："));
      Serial.println(central.address());
    }
}
```

在这个示例中，发送数据到移动设备的函数是 `setValue()`。如果您希望实时显示数据，需要在以下代码中添加 `BLENotify`。最后一个参数 20 表示您可以发送的最大数据长度。

```cpp
BLEStringCharacteristic switchCharacteristic("19B10001-E8F2-537E-4F6C-D104768A1214", BLERead | BLENotify, 20);
```

打开串口监视器并设置波特率为 9600，应该会显示传感器与目标物体之间的距离，单位为毫米和英尺。输出应类似于以下图像。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO-BLE/4.png" /></div>

接下来，我们可以通过以下步骤获取通过蓝牙发送的实时数据。

<table align="center">
 <tr>
     <th align="center">iPhone</th>
     <th align="center">Android</th>  
      <th align="center">描述</th>
 </tr>
 <tr>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/IPhone1.jpg"/></td>
     <td><img width ={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/and5.jpeg"/></td>
      <td align="center">打开软件，搜索名为 <strong>Seeed Studio XIAO nRF52840</strong> 的蓝牙设备并点击连接。有些设备可能显示为 <strong>Arduino</strong>。</td>
 </tr>
 <tr>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/IPhone2.jpg"/></td>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/and2.jpeg"/></td>
      <td align="center">进入 Seeed Studio XIAO nRF52840 蓝牙界面并点击设备以显示设备详情。</td>
 </tr>
 <tr>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/iPhone8.jpg"/></td>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/and6.jpeg"/></td>
      <td align="center">打开软件的实时更新数据功能。</td>
 </tr>
 <tr>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/iPhone7.jpg"/></td>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/and7.jpeg"/></td>
      <td align="center">接下来，每当雷达检测到睡眠消息时，它会通过 Seeed Studio XIAO nRF52840 的蓝牙发送到手机。</td>
 </tr>
 <tr>
      <td colspan="3"><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/5.png"/></td>
 </tr>
</table>

### 示例 3 两个 XIAO nRF52840 通过蓝牙通信控制 LED

在这个示例中，我们将使用两个 XIAO nRF52840，通过它们的蓝牙功能进行通信。其中一个 XIAO 作为主机并连接到 XIAO 扩展板，通过扩展板上的按钮发送控制命令。另一个 XIAO 作为从机。

在开始之前，请准备以下内容。

|              |              |
|:--------------:|:--------------:|
|<img width = {210} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg"/>|<img width ={210} src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg"/>|
|[**Seeed Studio XIAO 扩展板**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)| 2 x [**Seeed XIAO BLE nRF52840 Sense**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html?queryID=4bbd8c09f20216aa26f6b5a9040504d0&objectID=5253&indexName=bazaar_retailer_products)|

请选择一个 XIAO nRF52840，不需要连接任何设备，直接上传以下程序。

```cpp
#include <ArduinoBLE.h>

BLEService ledService("19B10000-E8F2-537E-4F6C-D104768A1214"); // 蓝牙低功耗 LED 服务

// 蓝牙低功耗 LED 开关特性 - 自定义 128 位 UUID，可由中央设备读取和写入
BLEByteCharacteristic switchCharacteristic("19B10001-E8F2-537E-4F6C-D104768A1214", BLERead | BLEWrite);

const int ledPin = LED_BUILTIN; // 用于 LED 的引脚

void setup() {
  Serial.begin(9600);
  while (!Serial);

  // 设置 LED 引脚为输出模式
  pinMode(ledPin, OUTPUT);

  // 开始初始化
  if (!BLE.begin()) {
    Serial.println("启动蓝牙低功耗模块失败！");

    while (1);
  }

  // 设置广播的本地名称和服务 UUID：
  BLE.setLocalName("XIAO");
  BLE.setAdvertisedService(ledService);

  // 将特性添加到服务中
  ledService.addCharacteristic(switchCharacteristic);

  // 添加服务
  BLE.addService(ledService);

  // 为特性设置初始值：
  switchCharacteristic.writeValue(0);

  // 开始广播
  BLE.advertise();

  // 打印地址
  Serial.print("地址: ");
  Serial.println(BLE.address());

  Serial.println("XIAO nRF52840 外围设备");
}

void loop() {
  // 监听蓝牙低功耗外围设备的连接：
  BLEDevice central = BLE.central();

  // 如果中央设备连接到外围设备：
  if (central) {
    Serial.print("连接到中央设备: ");
    // 打印中央设备的 MAC 地址：
    Serial.println(central.address());

    // 当中央设备仍然连接到外围设备时：
    while (central.connected()) {
      // 如果远程设备写入了特性，
      // 使用该值控制 LED：
      if (switchCharacteristic.written()) {
        if (switchCharacteristic.value()) {   // 任何非 0 值
          Serial.println("LED 开启");
          digitalWrite(ledPin, HIGH);         // 将 LED 打开
        } else {                              // 值为 0
          Serial.println(F("LED 关闭"));
          digitalWrite(ledPin, LOW);          // 将 LED 关闭
        }
      }
    }

    // 当中央设备断开连接时，打印信息：
    Serial.print(F("与中央设备断开连接: "));
    Serial.println(central.address());
  }
}
```

这个程序的主要目的是使 XIAO 成为一个名为 "XIAO" 的蓝牙设备，其他蓝牙设备可以搜索并连接到它。一旦连接，您可以通过发送 0 或 1 来分别关闭或打开 XIAO 上的 LED。

将 Seeed Studio XIAO nRF52840 放置在扩展板上。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/XIAO-to-board.png" /></div>

为了实现这个目的，将 XIAO 与扩展板连接，并上传以下程序。

```cpp
#include <ArduinoBLE.h>
#include <U8x8lib.h>
#include <Wire.h>

// 按钮相关变量
const int buttonPin = D1;
int oldButtonState = LOW;

void setup() {
  Serial.begin(9600);
  while (!Serial);

  // 将按钮引脚配置为输入
  pinMode(buttonPin, INPUT_PULLUP);

  // 初始化蓝牙低功耗硬件
  BLE.begin();

  Serial.println("蓝牙低功耗中心 - LED 控制");

  // 开始扫描外围设备
  BLE.scanForName("XIAO");
}

void loop() {
  // 检查是否发现了外围设备
  BLEDevice peripheral = BLE.available();
  if (peripheral) {
    // 发现了一个外围设备，打印地址、本地名称和广播的服务
    Serial.print("发现 ");
    Serial.print(peripheral.address());
    Serial.print(" '");
    Serial.print(peripheral.localName());
    Serial.print("' ");
    Serial.print(peripheral.advertisedServiceUuid());
    Serial.println();

    if (peripheral.localName() != "XIAO") {
      return;
    }

    // 停止扫描
    BLE.stopScan();

    system_control(peripheral);

    // 外围设备断开连接，重新开始扫描
    BLE.scanForName("XIAO");
  }
  delay(100);
}

void system_control(BLEDevice peripheral) {
  // 连接到外围设备
  Serial.println("正在连接...");

  if (peripheral.connect()) {
    Serial.println("已连接");
  } else {
    Serial.println("连接失败！");
    return;
  }

  // 发现外围设备属性
  Serial.println("正在发现属性...");
  if (peripheral.discoverAttributes()) {
    Serial.println("属性已发现");
  } else {
    Serial.println("属性发现失败！");
    peripheral.disconnect();
    return;
  }

  // 获取 LED 特性
  BLECharacteristic ledCharacteristic = peripheral.characteristic("19b10001-e8f2-537e-4f6c-d104768a1214");

  if (!ledCharacteristic) {
    Serial.println("外围设备没有 LED 特性！");
    peripheral.disconnect();
    return;
  } else if (!ledCharacteristic.canWrite()) {
    Serial.println("外围设备的 LED 特性不可写！");
    peripheral.disconnect();
    return;
  }

  while (peripheral.connected()) {
    // 当外围设备连接时
    // 读取按钮引脚状态
    int buttonState = digitalRead(buttonPin);

    if (oldButtonState != buttonState) {
      // 按钮状态发生变化
      oldButtonState = buttonState;

      if (buttonState) {
        Serial.println("按钮被按下");

        // 按钮被按下，写入 0x01 以打开 LED
        ledCharacteristic.writeValue((byte)0x01);
      } else {
        Serial.println("按钮被释放");

        // 按钮被释放，写入 0x00 以关闭 LED
        ledCharacteristic.writeValue((byte)0x00);
      }
    }
  }

  Serial.println("外围设备已断开连接");
}
```

上传程序后，打开串口监视器，程序将开始搜索本地名称为 "XIAO" 的附近蓝牙设备并连接（需要等待 1 到 3 分钟）。

一旦串口监视器中显示成功连接的消息，您可以通过扩展板的 D1 按键控制另一个 XIAO nRF52840 的 LED 开关。

当然，如果您没有扩展板，也可以使用自己的按钮或其他设备。

## 还有什么？

如果您想尝试更多示例，可以导航到 `文件 > 示例 > INCOMPATIBLE > ArduinoBLE` 并查看 **ArduinoBLE** 下的所有示例。

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>