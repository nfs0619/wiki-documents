---
description: 使用 Seeed Studio XIAO ESP32S3 的蓝牙功能。
title: 两个版本的蓝牙功能
keywords:
- esp32s3
- xiao
- ble
- 蓝牙
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao_esp32s3_bluetooth
last_update:
  date: 05/15/2025
  author: Citric
---

# 使用 Seeed Studio XIAO ESP32S3 的蓝牙功能 (Sense)

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/64.jpg" style={{width:700, height:'auto'}}/></div>

Seeed Studio XIAO ESP32S3 是一款强大的开发板，支持蓝牙 5、BLE 和 Mesh 网络，使其成为需要无线连接的各种物联网应用的理想选择。凭借其卓越的射频性能，XIAO ESP32S3 能够在各种距离范围内提供可靠且高速的无线通信，是短距离和长距离无线应用的多功能解决方案。在本教程中，我们将重点介绍 XIAO ESP32S3 蓝牙功能的基本特性，例如如何扫描附近的蓝牙设备、如何建立蓝牙连接，以及如何通过蓝牙连接传输和接收数据。

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3</th>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## 入门

### 天线安装

在 XIAO ESP32S3 的正面左下角，有一个独立的“WiFi/BT 天线连接器”。为了获得更好的 WiFi/蓝牙信号，需要将包装内的天线取出并安装到连接器上。

安装天线有一个小技巧，如果直接用力按压，会发现很难按下去，而且手指会疼！正确的安装方法是先将天线连接器的一侧插入连接块，然后稍微按压另一侧，天线就会安装好。

拆卸天线也是如此，不要直接用蛮力拉扯天线，而是从一侧用力抬起，天线就很容易取下。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/5.gif" style={{width:500, height:'auto'}}/></div>

:::note
如果没有安装天线，可能无法使用蓝牙功能。

如果条件允许，建议使用大棒天线，这样会获得更好的体验。
:::

## 蓝牙低功耗 (BLE) 使用

蓝牙低功耗（简称 BLE）是蓝牙的一种节能变体。BLE 的主要应用是短距离传输少量数据（低带宽）。与始终开启的传统蓝牙不同，BLE 除非建立连接，否则始终处于休眠模式。

由于其特性，BLE 适用于需要周期性交换少量数据并运行于纽扣电池上的应用。例如，BLE 在医疗保健、健身、追踪、信标、安全和家庭自动化行业中具有重要用途。

这使得它的功耗非常低。BLE 的功耗大约比传统蓝牙低 100 倍（取决于使用场景）。

关于 XIAO ESP32S3 的 BLE 部分，我们将在以下三个部分中介绍其使用方法：

- [一些基础概念](#some-fundamental-concepts) —— 我们将首先了解一些在 BLE 中可能经常使用的概念，以帮助我们理解 BLE 程序的执行过程和思路。
- [BLE 扫描器](#ble-scanner) —— 本节将解释如何搜索附近的蓝牙设备并将其打印到串口监视器中。
- [BLE 服务端/客户端](#ble-serverclient) —— 本节将解释如何将 XIAO ESP32S3 用作服务端和客户端来发送和接收指定的数据消息。还将介绍如何从手机接收或发送消息到 XIAO。
- [BLE 传感器数据交换](#ble-sensor-data-exchange) —— 这是完整教程的最后一部分，我们将通过一个传感器示例来解释如何通过 BLE 发送传感器数据。

### 一些基础概念

#### 服务端和客户端

在蓝牙低功耗中，有两种设备类型：服务端和客户端。XIAO ESP32S3 可以作为客户端或服务端。

服务端广播其存在，以便被其他设备发现，并包含客户端可以读取的数据。客户端扫描附近的设备，当找到目标服务端时，建立连接并监听传入数据。这被称为点对点通信。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/49.png" style={{width:800, height:'auto'}}/></div>

#### 属性

属性实际上是一段数据。每个蓝牙设备用于提供一个服务，而服务是数据的集合，这个集合可以称为数据库，数据库中的每一项就是一个属性。因此，这里将属性翻译为数据条目。你可以将蓝牙设备想象成一张表格，表格中的每一行就是一个属性。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/52.png" style={{width:600, height:'auto'}}/></div>

#### GATT

当两个蓝牙设备建立连接时，它们需要一个协议来确定如何进行通信。GATT（通用属性协议）就是这样一个协议，它定义了蓝牙设备之间数据的传输方式。

在 GATT 协议中，设备的功能和属性被组织成称为服务（Service）、特性（Characteristic）和描述符（Descriptor）的结构。服务表示设备提供的一组相关功能和特性。每个服务可以包含多个特性，这些特性定义了服务的某种属性或行为，例如传感器数据或控制命令。每个特性都有一个唯一的标识符和一个值，可以通过读取或写入这些值来进行通信。描述符用于描述特性的元数据，例如特性值的格式和访问权限。

通过使用 GATT 协议，蓝牙设备可以在不同的应用场景中进行通信，例如传输传感器数据或控制远程设备。

#### BLE 特性

ATT，全称属性协议（Attribute Protocol）。最终，ATT 是由一组 ATT 命令组成的，即请求和响应命令。ATT 也是蓝牙空包的最高层，即我们分析蓝牙数据包时最常接触的部分。

ATT 命令，正式名称为 ATT PDU（协议数据单元）。它包括四类：读取（read）、写入（write）、通知（notify）和指示（indicate）。这些命令可以分为两种类型：如果需要响应，则会跟随一个请求；相反，如果只需要 ACK 而不需要响应，则不会跟随请求。

服务（Service）和特性（Characteristic）是在 GATT 层中定义的。服务端提供服务，服务是数据，而数据是属性。服务和特性是数据的逻辑表示，用户最终看到的数据会转化为服务和特性。

让我们从移动端的角度来看服务和特性是什么样子。nRF Connect 是一个应用程序，它可以非常直观地展示每个数据包的具体样子。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/62.png" style={{width:400, height:'auto'}}/></div>

如图所示，在蓝牙规范中，每个具体的蓝牙应用由多个服务组成，每个服务由多个特性组成。一个特性由 UUID、属性（Properties）和值（Value）组成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/50.png" style={{width:300, height:'auto'}}/></div>

属性用于描述对特性进行操作的类型和权限，例如是否支持读取、写入、通知等。这类似于 ATT PDU 中包含的四类操作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/51.png" style={{width:800, height:'auto'}}/></div>

#### UUID

每个服务、特性和描述符都有一个 UUID（通用唯一标识符）。UUID 是一个唯一的 128 位（16 字节）数字。例如：

```
ea094cbd-3695-4205-b32d-70c1dea93c35
```

对于所有类型、服务和由 [SIG（蓝牙特别兴趣组）](https://www.bluetooth.com/specifications/gatt/services) 指定的配置文件，都有缩短的 UUID。如果您的应用需要自己的 UUID，可以使用 [UUID 生成器网站](https://www.uuidgenerator.net/) 来生成。

### BLE 扫描器

创建一个 XIAO ESP32S3 BLE 扫描器非常简单。以下是一个创建扫描器的示例程序。

```cpp
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEScan.h>
#include <BLEAdvertisedDevice.h>

int scanTime = 5; //In seconds
BLEScan* pBLEScan;

class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
    void onResult(BLEAdvertisedDevice advertisedDevice) {
      Serial.printf("Advertised Device: %s \n", advertisedDevice.toString().c_str());
    }
};

void setup() {
  Serial.begin(115200);
  Serial.println("Scanning...");

  BLEDevice::init("");
  pBLEScan = BLEDevice::getScan(); //create new scan
  pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
  pBLEScan->setActiveScan(true); //active scan uses more power, but get results faster
  pBLEScan->setInterval(100);
  pBLEScan->setWindow(99);  // less or equal setInterval value
}

void loop() {
  // put your main code here, to run repeatedly:
  BLEScanResults foundDevices = pBLEScan->start(scanTime, false);
  Serial.print("Devices found: ");
  Serial.println(foundDevices.getCount());
  Serial.println("Scan done!");
  pBLEScan->clearResults();   // delete results fromBLEScan buffer to release memory
  delay(10000);
}
```

:::tip
如果您已经将 ESP32 开发板升级到 3.0.0 以上版本，则需要更改一些代码以使其兼容：
1. ```BLEScanResults foundDevices = pBLEScan->start(scanTime, false);``` 改为 ```BLEScanResults* foundDevices = pBLEScan->start(scanTime, false);```
2. ```Serial.println(foundDevices.getCount());``` 改为 ```Serial.println(foundDevices->getCount());```
:::

现在您可以选择 XIAO ESP32S3 主板并上传程序。如果程序运行顺利，打开串行监视器并将波特率设置为 115200，您可以看到以下结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/54.png" style={{width:700, height:'auto'}}/></div>

该程序打印出扫描到的蓝牙设备的名称、MAC 地址、制造商数据和信号。

#### 程序注释

首先导入了 BLE 功能所需的库。

然后定义了一个名为 `MyAdvertisedDeviceCallbacks` 的类，该类继承自 `BLEAdvertisedDeviceCallbacks` 类。它有一个名为 `onResult` 的函数，当在扫描过程中发现广告蓝牙设备时会调用该函数。该函数使用 `Serial.printf` 函数将设备的信息打印到串行端口。此类可用于在扫描过程中处理蓝牙设备信息。

```c
class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
    void onResult(BLEAdvertisedDevice advertisedDevice) {
      Serial.printf("Advertised Device: %s \n", advertisedDevice.toString().c_str());
    }
};
```

在 `Setup` 函数中，我们设置了一个具有指定参数的 BLE 扫描，包括扫描间隔和窗口值。它还初始化了 BLE 设备，并设置了一个回调函数，用于在扫描过程中处理找到的广播设备。

```c
BLEDevice::init("");
pBLEScan = BLEDevice::getScan();
pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
pBLEScan->setActiveScan(true);
pBLEScan->setInterval(100);
pBLEScan->setWindow(99);
```

最后，`loop` 函数以指定的扫描时间和阻塞标志启动 BLE 扫描。然后，它将找到的设备数量打印到串口，并清空结果缓冲区以释放内存。

```c
BLEScanResults foundDevices = pBLEScan->start(scanTime, false);
Serial.print("Devices found: ");
Serial.println(foundDevices.getCount());
Serial.println("Scan done!");
pBLEScan->clearResults();
```

### BLE 服务器/客户端

如前所述，XIAO ESP32S3 可以同时作为服务器和客户端。让我们来看一下作为服务器的程序以及如何使用它。在将以下程序上传到 XIAO 后，它将作为服务器并向所有连接到 XIAO 的蓝牙设备发送 "Hello World" 消息。

```cpp
//服务器代码
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEServer.h>

#define SERVICE_UUID        "4fafc201-1fb5-459e-8fcc-c5c9c331914b"
#define CHARACTERISTIC_UUID "beb5483e-36e1-4688-b7f5-ea07361b26a8"

void setup() {
  Serial.begin(115200);
  Serial.println("Starting BLE work!");

  BLEDevice::init("XIAO_ESP32S3");
  BLEServer *pServer = BLEDevice::createServer();
  BLEService *pService = pServer->createService(SERVICE_UUID);
  BLECharacteristic *pCharacteristic = pService->createCharacteristic(
                                         CHARACTERISTIC_UUID,
                                         BLECharacteristic::PROPERTY_READ |
                                         BLECharacteristic::PROPERTY_WRITE
                                       );

  pCharacteristic->setValue("Hello World");
  pService->start();
  // BLEAdvertising *pAdvertising = pServer->getAdvertising();  // 仍然兼容旧版本
  BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();
  pAdvertising->addServiceUUID(SERVICE_UUID);
  pAdvertising->setScanResponse(true);
  pAdvertising->setMinPreferred(0x06);  // 帮助解决 iPhone 连接问题的功能
  pAdvertising->setMinPreferred(0x12);
  BLEDevice::startAdvertising();
  Serial.println("Characteristic defined! Now you can read it in your phone!");
}

void loop() {
  // 在此处放置主代码，重复运行：
  delay(2000);
}
```

同时，您可以在主要的手机应用商店中搜索并下载 **nRF Connect** 应用程序，该应用程序允许您的手机搜索并连接蓝牙设备。

- 安卓：[nRF Connect](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en)
- IOS：[nRF Connect](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)

下载软件后，按照以下步骤搜索并连接 XIAO ESP32S3，您将看到广播的 "Hello World"。

<table align="center">
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/55.jpg" style={{width:200, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/56.jpg" style={{width:200, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/58.jpg" style={{width:200, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/59.jpg" style={{width:200, height:'auto'}}/></div></td>
	</tr>
</table>

如果您希望使用另一个 XIAO ESP32S3 作为客户端来接收来自服务器的消息，则可以为客户端 XIAO 使用以下程序。

```cpp
// 客户端代码
#include "BLEDevice.h"
//#include "BLEScan.h"

// 我们希望连接的远程服务。
static BLEUUID serviceUUID("4fafc201-1fb5-459e-8fcc-c5c9c331914b");
// 我们感兴趣的远程服务的特征。
static BLEUUID    charUUID("beb5483e-36e1-4688-b7f5-ea07361b26a8");

static boolean doConnect = false;
static boolean connected = false;
static boolean doScan = false;
static BLERemoteCharacteristic* pRemoteCharacteristic;
static BLEAdvertisedDevice* myDevice;

static void notifyCallback(
  BLERemoteCharacteristic* pBLERemoteCharacteristic,
  uint8_t* pData,
  size_t length,
  bool isNotify) {
    Serial.print("Notify callback for characteristic ");
    Serial.print(pBLERemoteCharacteristic->getUUID().toString().c_str());
    Serial.print(" of data length ");
    Serial.println(length);
    Serial.print("data: ");
    Serial.write(pData, length);
    Serial.println();
}

class MyClientCallback : public BLEClientCallbacks {
  void onConnect(BLEClient* pclient) {
  }

  void onDisconnect(BLEClient* pclient) {
    connected = false;
    Serial.println("onDisconnect");
  }
};

bool connectToServer() {
    Serial.print("Forming a connection to ");
    Serial.println(myDevice->getAddress().toString().c_str());
    
    BLEClient*  pClient  = BLEDevice::createClient();
    Serial.println(" - Created client");

    pClient->setClientCallbacks(new MyClientCallback());

    // 连接到远程 BLE 服务器。
    pClient->connect(myDevice);  // 如果传递 BLEAdvertisedDevice 而不是地址，它将识别对等设备地址的类型（公共或私有）
    Serial.println(" - Connected to server");
    pClient->setMTU(517); // 设置客户端请求服务器的最大 MTU（默认值为 23）

    // 获取远程 BLE 服务器中我们需要的服务的引用。
    BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
    if (pRemoteService == nullptr) {
      Serial.print("Failed to find our service UUID: ");
      Serial.println(serviceUUID.toString().c_str());
      pClient->disconnect();
      return false;
    }
    Serial.println(" - Found our service");

    // 获取远程 BLE 服务器中服务的特征的引用。
    pRemoteCharacteristic = pRemoteService->getCharacteristic(charUUID);
    if (pRemoteCharacteristic == nullptr) {
      Serial.print("Failed to find our characteristic UUID: ");
      Serial.println(charUUID.toString().c_str());
      pClient->disconnect();
      return false;
    }
    Serial.println(" - Found our characteristic");

    // 读取特征的值。
    if(pRemoteCharacteristic->canRead()) {
      std::string value = pRemoteCharacteristic->readValue();
      Serial.print("The characteristic value was: ");
      Serial.println(value.c_str());
    }

    if(pRemoteCharacteristic->canNotify())
      pRemoteCharacteristic->registerForNotify(notifyCallback);

    connected = true;
    return true;
}
/**
 * 扫描 BLE 服务器并找到第一个广播我们需要的服务的服务器。
 */
class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
 /**
   * 为每个广播的 BLE 服务器调用。
   */
  void onResult(BLEAdvertisedDevice advertisedDevice) {
    Serial.print("BLE Advertised Device found: ");
    Serial.println(advertisedDevice.toString().c_str());

    // 我们找到了一个设备，现在看看它是否包含我们需要的服务。
    if (advertisedDevice.haveServiceUUID() && advertisedDevice.isAdvertisingService(serviceUUID)) {

      BLEDevice::getScan()->stop();
      myDevice = new BLEAdvertisedDevice(advertisedDevice);
      doConnect = true;
      doScan = true;

    } // 找到我们的服务器
  } // onResult
}; // MyAdvertisedDeviceCallbacks

void setup() {
  Serial.begin(115200);
  Serial.println("Starting Arduino BLE Client application...");
  BLEDevice::init("");

  // 获取扫描器并设置回调函数，当检测到新设备时通知我们。
  // 指定我们希望进行主动扫描，并启动扫描运行 5 秒。
  BLEScan* pBLEScan = BLEDevice::getScan();
  pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
  pBLEScan->setInterval(1349);
  pBLEScan->setWindow(449);
  pBLEScan->setActiveScan(true);
  pBLEScan->start(5, false);
} // setup 结束。

// 这是 Arduino 主循环函数。
void loop() {
  // 如果标志 "doConnect" 为 true，则表示我们已经扫描并找到了所需的
  // BLE 服务器，现在我们连接到它。一旦连接，我们将连接标志设置为 true。
  if (doConnect == true) {
    if (connectToServer()) {
      Serial.println("We are now connected to the BLE Server.");
    } else {
      Serial.println("We have failed to connect to the server; there is nothin more we will do.");
    }
    doConnect = false;
  }

  // 如果我们已连接到对等 BLE 服务器，则每次访问时更新特征值
  // 为自启动以来的当前时间。
  if (connected) {
    String newValue = "Time since boot: " + String(millis()/1000);
    Serial.println("Setting new characteristic value to \"" + newValue + "\"");
    
    // 将特征值设置为实际上是字符串的字节数组。
    pRemoteCharacteristic->writeValue(newValue.c_str(), newValue.length());
  }else if(doScan){
    BLEDevice::getScan()->start(0);  // 这是一个示例，在断开连接后启动扫描，可能有更好的方法在 Arduino 中实现
  }
  
  delay(1000); // 循环之间延迟一秒。
} // loop 结束
```

:::tip
如果您已经将 ESP32 开发板升级到 3.0.0 或更高版本，您需要更改一些代码以与其兼容。
1. 将 ```std::string value = pRemoteCharacteristic->readValue();``` 更改为 ```String value = pRemoteCharacteristic->readValue();```
:::

上述程序将把 XIAO 转变为一个客户端，并搜索附近的蓝牙设备。当蓝牙设备的 UUID 与您提供的 UUID 匹配时，它将连接到该设备并获取其特征值。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/60.png" style={{width:800, height:'auto'}}/></div>

#### 程序注释

让我们快速了解 BLE 服务器示例代码的工作原理。首先，它通过导入必要的库来启用 BLE 功能。然后，您需要为服务和特征定义一个 UUID。

```c
#define SERVICE_UUID "4fafc201-1fb5-459e-8fcc-c5c9c331914b"
#define CHARACTERISTIC_UUID "beb5483e-36e1-4688-b7f5-ea07361b26a8"
```

您可以保留默认的 UUID，也可以访问 [uuidgenerator.net](https://www.uuidgenerator.net/) 为您的服务和特征生成随机 UUID。

接下来，您创建一个名为“XIAO_ESP32S3”的 BLE 设备。您可以将此名称更改为您喜欢的任何名称。在接下来的代码中，您将 BLE 设备设置为服务器。之后，您为 BLE 服务器创建一个服务，并使用之前定义的 UUID。

```c
BLEServer *pServer = BLEDevice::createServer();
BLEService *pService = pServer->createService(SERVICE_UUID);
```

然后，您为该服务设置特征。正如您所看到的，您也使用了之前定义的 UUID，并且需要传递特征的属性作为参数。在本例中，属性为：READ 和 WRITE。

```c
BLECharacteristic *pCharacteristic = pService->createCharacteristic(
                                     CHARACTERISTIC_UUID,
                                     BLECharacteristic::PROPERTY_READ |
                                     BLECharacteristic::PROPERTY_WRITE
                                     );
```

创建特征后，您可以使用 `setValue()` 方法设置其值。在本例中，我们将值设置为文本“Hello World”。您可以将此文本更改为您喜欢的任何内容。在未来的项目中，此文本可以是传感器读数或灯的状态，例如。

最后，您可以启动服务和广告，使其他 BLE 设备能够扫描并找到此 BLE 设备。

```c
BLEAdvertising *pAdvertising = pServer->getAdvertising();
pAdvertising->start();
```

这只是一个创建 BLE 服务器的简单示例。在此代码中，`loop()` 中没有任何操作，但您可以添加新客户端连接时发生的操作（请查看 `BLE_notify` 示例以获取一些指导）。

### BLE 传感器数据交换

接下来，我们将进入现实世界完成一个案例。在此案例中，我们将使用 XIAO ESP32S3 连接到一个光强传感器，然后通过蓝牙将光传感器的值发送到另一个 XIAO ESP32S3，并在扩展板的屏幕上显示。

为了方便布线，我们将使用两个 XIAO 扩展板，示例程序仅供参考，您可以根据实际项目需求选择产品。

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3</th>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
        <th>Grove - Digital Light Sensor - TSL2561</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:200, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/hardware%20overview.jpg" style={{width:180, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Digital-Light-Sensor-TSL2561.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

除了上述硬件准备，您可能需要准备以下库，下载并添加到 Arduino IDE 环境中。

- **OLED 显示屏库 u8g2**：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

- **Grove - 数字光传感器 - TSL2561 的库**：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Grove_Digital_Light_Sensor">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

我们需要准备两个 XIAO，一个作为服务器，一个作为客户端。以下是作为服务器的示例程序。作为服务器的 XIAO 具有以下主要任务：
- 首先，从光传感器获取实时值；
- 其次，创建蓝牙服务器；
- 第三，通过蓝牙广播光强值；
- 第四，在显示屏上显示实时光强值并发送数据。

```c
//server
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLE2902.h>
#include <BLEServer.h>
#include <Wire.h>
#include <Digital_Light_TSL2561.h>
#include <Arduino.h>
#include <U8x8lib.h>
#include <Wire.h>

// 无复位引脚的 OLED 显示屏
U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);

// BLE 服务器名称（运行服务器代码的另一个 ESP32 名称）
#define bleServerName "XIAOESP32S3_BLE"

BLECharacteristic *pCharacteristic;
bool deviceConnected = false;

int light_val = 0;

class MyServerCallbacks: public BLEServerCallbacks {
  void onConnect(BLEServer* pServer) {
    deviceConnected = true;
  };
  
  void onDisconnect(BLEServer* pServer) {
    deviceConnected = false;
  }
};

void setup() {
  Serial.begin(115200);
  
  // OLED 显示屏设置
  u8x8.begin();
  u8x8.setFlipMode(1);

  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.drawString(0, 3, "Starting...");

  Wire.begin();
  TSL2561.init();
  
  BLEDevice::init(bleServerName);
  BLEServer *pServer = BLEDevice::createServer();
  pServer->setCallbacks(new MyServerCallbacks());
  
  BLEService *pService = pServer->createService(BLEUUID((uint16_t)0x181A)); // 环境感知服务
  pCharacteristic = pService->createCharacteristic(
    BLEUUID((uint16_t)0x2A59), // 模拟输出
    BLECharacteristic::PROPERTY_NOTIFY
  );
  pCharacteristic->addDescriptor(new BLE2902());
  
  pService->start();
  BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();
  pAdvertising->addServiceUUID(pService->getUUID());
  pAdvertising->setScanResponse(true);
  pAdvertising->setMinPreferred(0x0);
  pAdvertising->setMinPreferred(0x1F);
  BLEDevice::startAdvertising();
  u8x8.clearDisplay();
}

void loop() {
  if (deviceConnected) {
    light_val = TSL2561.readVisibleLux();
    pCharacteristic->setValue(light_val);
    pCharacteristic->notify();
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 0);
    u8x8.print("Light Value:");
    u8x8.clearLine(2);
    u8x8.setCursor(0, 2);
    u8x8.print(light_val);
    u8x8.drawString(0, 4, "Sending...");
    delay(10); // 如果发送的数据包过多，蓝牙堆栈会出现拥塞
  }
}
```

在为其中一个 XIAO 上传程序后，如果程序运行顺利，您可以拿出手机并使用 nRF Connect APP 搜索名为 **XIAOESP32S3_BLE** 的蓝牙设备，连接它并点击下图所示的按钮，您将收到传感器数据信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/63.jpg" style={{width:300, height:'auto'}}/></div>

在这里您会发现，我们操作软件的方式与之前的示例有所不同，因为通常情况下，当我们发送传感器类型的消息时，我们会选择使用 **notify** 属性以确保消息的高效传递。

接下来，我们需要拿出另一个 XIAO，它将作为客户端来收集和显示数据。

```c
//client
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEClient.h>
#include <BLEServer.h>
#include <Arduino.h>
#include <U8x8lib.h>
#include <Wire.h>

// 无复位引脚的 OLED 显示屏
U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);

BLEClient*  pClient;
bool doconnect = false;

// BLE 服务器名称（运行服务器代码的另一个 ESP32 名称）
#define bleServerName "XIAOESP32S3_BLE"

// 外围设备的地址。地址将在扫描期间找到...
static BLEAddress *pServerAddress;

BLEUUID serviceUUID("181A"); // 环境感知服务
BLEUUID charUUID("2A59");    // 模拟输出

char light_val[1024];

// 当接收到其他设备的广播时调用的回调函数
class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
  void onResult(BLEAdvertisedDevice advertisedDevice) {
    if (advertisedDevice.getName() == bleServerName) { // 检查广播者的名称是否匹配
      advertisedDevice.getScan()->stop(); // 找到目标设备后停止扫描
      pServerAddress = new BLEAddress(advertisedDevice.getAddress()); // 获取广播者的地址
      Serial.println("Device found. Connecting!");
    }
  }
};

// 打印 OLED 显示屏上的最新传感器读数
void printReadings(){
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 0);
  u8x8.print("Light Value:");
  u8x8.drawString(0, 2, light_val);
}

void setup() {
  Serial.begin(115200);
  // OLED 显示屏设置
  u8x8.begin();
  u8x8.setFlipMode(1);

  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.drawString(0, 3, "Starting...");
  
  Serial.println("Starting BLE client...");

  BLEDevice::init("XIAOESP32S3_Client");

  // 获取扫描器并设置回调函数以在检测到新设备时通知我们。
  // 指定我们希望进行主动扫描，并启动扫描运行 30 秒。
  BLEScan* pBLEScan = BLEDevice::getScan();
  pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
  pBLEScan->setActiveScan(true);
  pBLEScan->start(30);

  pClient = BLEDevice::createClient();
  // 连接到远程 BLE 服务器。
  pClient->connect(*pServerAddress);
  Serial.println(" - Connected to server");

  // 获取远程 BLE 服务器中目标服务的引用。
  BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
  if (pRemoteService == nullptr) {
    u8x8.clearDisplay();
    u8x8.drawString(0, 3, "False UUID");
    Serial.print("Failed to find our service UUID: ");
    Serial.println(serviceUUID.toString().c_str());
    return;
  }

  // 获取远程 BLE 服务器中目标特征的引用。
  BLERemoteCharacteristic* pCharacteristic = pRemoteService->getCharacteristic(charUUID);
  if (pCharacteristic == nullptr) {
    u8x8.clearDisplay();
    u8x8.drawString(0, 3, "False UUID");
    Serial.print("Failed to find our characteristic UUID");
    return;
  }
  Serial.println(" - Found light value characteristics");
  u8x8.clearDisplay();
  u8x8.drawString(0, 3, "Connected!");
  
  pCharacteristic->registerForNotify([](BLERemoteCharacteristic* pBLERemoteCharacteristic, uint8_t* pData, size_t length, bool isNotify) {
    Serial.println("Notify received");
    Serial.print("Value: ");
    Serial.println(*pData);
    snprintf(light_val, sizeof(light_val), "%d", *pData);
  });

  doconnect = true;
  u8x8.clearDisplay();
  u8x8.drawString(0, 4, "Receiving...");
}

void loop() {
  if (doconnect) {
    BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
    BLERemoteCharacteristic* pCharacteristic = pRemoteService->getCharacteristic(charUUID);
    pCharacteristic->registerForNotify([](BLERemoteCharacteristic* pBLERemoteCharacteristic, uint8_t* pData, size_t length, bool isNotify) {
      Serial.println("Notify received");
      Serial.print("Value: ");
      Serial.println(*pData);
      snprintf(light_val, sizeof(light_val), "%d", *pData);
    });
  }
  printReadings();
  delay(1000);
  u8x8.clearLine(2);
}
```

在使用上述示例时，我们建议先上传服务器程序并确保其成功运行，然后再使用客户端程序。如果程序运行顺利，您将看到以下结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/65.gif" style={{width:700, height:'auto'}}/></div>

#### 程序注释

对于上述程序，我们将挑选一些重要部分进行解释。我们从服务器程序开始。

在程序的开头，我们定义了蓝牙服务器的名称，这个名称可以是您设置的任何名称，但您需要记住它，因为需要依赖这个名称来搜索蓝牙设备。

```c
#define bleServerName "XIAOESP32S3_BLE"
```

在教程的前面部分，我们已经提到，在服务器下会有 Characteristic（特征），而在 Characteristic 下会有值和其他内容。因此，在创建广告时，我们需要遵循这一原则。

```c
BLEService *pService = pServer->createService(BLEUUID((uint16_t)0x181A)); // 环境感知
  pCharacteristic = pService->createCharacteristic(
    BLEUUID((uint16_t)0x2A59), // 模拟输出
    BLECharacteristic::PROPERTY_NOTIFY
  );
  pCharacteristic->addDescriptor(new BLE2902());
```

在上述程序中，您可以看到使用 `createService()` 创建了一个服务。参数是一个特定的 UUID：**0x181A**。根据 GATT 的规则，**0x181A** 表示环境监测类型的数据，而相同 Characteristic 的 UUID：**0x2A59** 也有特殊含义。在 GATT 中，它表示模拟输出。这与我们的光传感器值的情况相符，因此我在这里将其定义为这样。您可以在 [这里](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/GATT.pdf) 阅读 GATT 为我们准备的一些特定 UUID 的含义。

当然，您也可以不按照 GATT 标准设置 UUID，只需确保这两个值是唯一的，并且不会影响客户端通过识别这些 UUID 来找到值。您可以访问 [uuidgenerator.net](https://www.uuidgenerator.net/) 来为您的服务和特征生成随机 UUID。

`createCharacteristic()` 函数的第二个参数用于设置属性。请注意，这里我们需要将其设置为 **PROPERTY_NOTIFY**，以确保数据能够连续发送。

```c
pCharacteristic->setValue(light_val);
pCharacteristic->notify();
```

最后，在 `loop` 中，我们每 10 毫秒广播一次读取的光传感器值。

接下来的步骤是客户端程序，这部分看起来会更加复杂。

在程序的开头，仍然是非常熟悉的内容。您需要确保这些内容与服务器端配置的一致。

```c
//BLE 服务器名称（运行服务器程序的另一个 ESP32 的名称）
#define bleServerName "XIAOESP32S3_BLE"

BLEUUID serviceUUID("181A"); // 环境感知
BLEUUID charUUID("2A59");    // 模拟输出
```

接下来我们编写一个回调函数，该函数的主要作用是搜索附近的蓝牙设备，然后将其与您提供的蓝牙设备名称进行比较，捕获并获取其 MAC 地址。

```c
class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
  void onResult(BLEAdvertisedDevice advertisedDevice) {
    if (advertisedDevice.getName() == bleServerName) { //检查广告设备名称是否匹配
      advertisedDevice.getScan()->stop(); //可以停止扫描，我们找到了目标设备
      pServerAddress = new BLEAddress(advertisedDevice.getAddress()); //广告设备的地址是我们需要的
      Serial.println("Device found. Connecting!");
    }
  }
};
```

以下过程是找到服务器中光强值的关键。首先，我们需要找到服务器的 UUID，然后在服务器下找到 Characteristic 的 UUID，最后找到光值。这种解析方法与蓝牙的数据结构是一一对应的。

```c
// 获取远程 BLE 服务器中我们需要的服务的引用。
BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
if (pRemoteService == nullptr) {
  Serial.print("Failed to find our service UUID: ");
  Serial.println(serviceUUID.toString().c_str());
  return;
}

// 获取远程 BLE 服务器服务中的特征引用。
BLERemoteCharacteristic* pCharacteristic = pRemoteService->getCharacteristic(charUUID);
if (pCharacteristic == nullptr) {
  Serial.print("Failed to find our characteristic UUID");
  return;
}
Serial.println(" - Found light value characteristics");

pCharacteristic->registerForNotify([](BLERemoteCharacteristic* pBLERemoteCharacteristic, uint8_t* pData, size_t length, bool isNotify) {
    Serial.println("Notify received");
    Serial.print("Value: ");
    Serial.println(*pData);
  });
```

最后，光值被放置在指针 pData 中。

:::tip
上述示例展示了单个传感器单个值的最简单示例。如果您希望通过蓝牙广播多个传感器或多个传感器值，我们建议您阅读以下教程示例。

- [ESP32 BLE Server and Client (Bluetooth Low Energy)](https://randomnerdtutorials.com/esp32-ble-server-client/)
:::

## 故障排除

### Q1：在 XIAO ESP32S3 示例中没有 BletoothSerial？

[ESP32-S3 芯片中没有蓝牙经典硬件](https://github.com/espressif/arduino-esp32/issues/8023)。只有“旧版”ESP32 支持蓝牙经典 - 其他 Espressif SoC 都不支持。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord">加入我们的 Discord 社区</a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion">参与 GitHub 讨论</a>
</div>