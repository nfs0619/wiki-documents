---
description: 使用 Seeed Studio XIAO ESP32C6 的蓝牙功能。
title: 蓝牙使用
keywords:
- esp32c6
- xiao
- ble
- bluetooth
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao_esp32c6_bluetooth
last_update:
  date: 05/15/2025
  author: Citric
---

# 使用 Seeed Studio XIAO ESP32C6 的蓝牙功能

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32C6</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

Seeed Studio XIAO ESP32C6 是一款强大的开发板，支持蓝牙 5、BLE 和 Mesh 网络，非常适合需要无线连接的各种物联网应用。凭借其卓越的射频性能，XIAO ESP32C6 可以在各种距离范围内提供可靠且高速的无线通信，使其成为短距离和长距离无线应用的多功能解决方案。在本教程中，我们将重点介绍 XIAO ESP32C6 蓝牙功能的基本特性，例如如何扫描附近的蓝牙设备、如何建立蓝牙连接以及如何通过蓝牙连接传输和接收数据。

## 蓝牙低功耗（BLE）使用

蓝牙低功耗（Bluetooth Low Energy，简称 BLE）是一种节能的蓝牙变体。BLE 的主要应用是短距离传输少量数据（低带宽）。与始终开启的传统蓝牙不同，BLE 除非启动连接，否则始终处于休眠模式。

由于其特性，BLE 适用于需要定期交换少量数据并运行在纽扣电池上的应用。例如，BLE 在医疗保健、健身、跟踪、信标、安全和家庭自动化行业中非常有用。

这使得 BLE 消耗非常低的功率。根据使用场景，BLE 的功耗约为传统蓝牙的 1/100。

关于 XIAO ESP32C6 的 BLE 部分，我们将在以下三个部分中介绍其使用方法：

- [一些基本概念](#some-fundamental-concepts) —— 我们将首先了解 BLE 中可能经常使用的一些概念，以帮助我们理解 BLE 程序的执行过程和思路。
- [BLE 扫描器](#ble-scanner) —— 本节将解释如何搜索附近的蓝牙设备并在串口监视器中打印它们。
- [BLE 服务器/客户端](#ble-serverclient) —— 本节将解释如何使用 XIAO ESP32C6 作为服务器和客户端发送和接收指定的数据消息。它还将用于从手机接收或发送消息到 XIAO。
- [BLE 传感器数据交换](#ble-sensor-data-exchange) —— 这是完整教程的最后一部分，我们将通过一个传感器示例来解释如何通过 BLE 发送传感器数据。

### 一些基本概念

#### 服务器和客户端

在蓝牙低功耗中，有两种类型的设备：服务器和客户端。XIAO ESP32C6 可以充当客户端或服务器。

服务器广播其存在，以便其他设备可以找到它，并包含客户端可以读取的数据。客户端扫描附近的设备，当找到它正在寻找的服务器时，它会建立连接并监听传入的数据。这称为点对点通信。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/ble.png" style={{width:800, height:'auto'}}/></div>

#### 属性

属性实际上是一段数据。每个蓝牙设备用于提供服务，而服务是数据的集合，这个集合可以称为数据库，数据库中的每一条记录就是一个属性，因此这里将属性翻译为数据条目。你可以将蓝牙设备想象成一张表格，表格中的每一行就是一个属性。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/52.png" style={{width:600, height:'auto'}}/></div>

#### GATT

当两个蓝牙设备建立连接时，它们需要一个协议来确定如何通信。GATT（通用属性配置文件，Generic Attribute Profile）就是这样一个协议，它定义了蓝牙设备之间如何传输数据。

在 GATT 协议中，设备的功能和属性被组织成称为服务、特性和描述符的结构。服务表示设备提供的一组相关功能和特性。每个服务可以包含多个特性，这些特性定义了服务的某个属性或行为，例如传感器数据或控制命令。每个特性都有一个唯一标识符和一个值，可以通过读取或写入来进行通信。描述符用于描述特性元数据，例如特性值的格式和访问权限。

通过使用 GATT 协议，蓝牙设备可以在不同的应用场景中进行通信，例如传输传感器数据或控制远程设备。

#### BLE 特性

ATT，全称为属性协议（Attribute Protocol）。最终，ATT 是由一组 ATT 命令组成的，即请求和响应命令，ATT 也是蓝牙空包的最上层，即 ATT 是我们分析蓝牙包时最常接触的部分。

ATT 命令，正式名称为 ATT PDU（协议数据单元，Protocol Data Unit）。它包括 4 类：读取、写入、通知和指示。这些命令可以分为两种类型：如果需要响应，则会附带请求；相反，如果只需要 ACK 而不需要响应，则不会附带请求。

服务和特征是在 GATT 层中定义的。服务端提供服务，服务是数据，数据是属性，而服务和特征是数据的逻辑表示，用户可以看到的数据最终会被转换为服务和特征。

让我们从移动设备的角度来看看服务和特征的样子。nRF Connect 是一个应用程序，它可以非常直观地展示每个数据包的具体样子。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/62.png" style={{width:400, height:'auto'}}/></div>

如你所见，在蓝牙规范中，每个特定的蓝牙应用程序由多个服务组成，每个服务由多个特征组成。一个特征由 UUID、属性和值组成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/50.png" style={{width:300, height:'auto'}}/></div>

属性用于描述对特征的操作类型和权限，例如是否支持读取、写入、通知等。这类似于 ATT PDU 中包含的四个类别。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/51.png" style={{width:800, height:'auto'}}/></div>

#### UUID

每个服务、特征和描述符都有一个 UUID（通用唯一标识符）。UUID 是一个唯一的 128 位（16 字节）数字。例如：

```
ea094cbd-3695-4205-b32d-70c1dea93c35
```

对于 [SIG (Bluetooth Special Interest Group)](https://www.bluetooth.com/specifications/gatt/services) 中指定的所有类型、服务和配置文件，都有简化的 UUID。但如果你的应用程序需要自己的 UUID，可以使用这个 [UUID 生成器网站](https://www.uuidgenerator.net/) 来生成。

### BLE 扫描器

创建一个 XIAO ESP32C6 BLE 扫描器非常简单。以下是一个创建扫描器的示例程序。

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
  BLEScanResults foundDevices = *pBLEScan->start(scanTime, false);
  Serial.print("Devices found: ");
  Serial.println(foundDevices.getCount());
  Serial.println("Scan done!");
  pBLEScan->clearResults();   // delete results fromBLEScan buffer to release memory
  delay(10000);
}
```

现在你可以选择 XIAO ESP32C6 主板并上传程序。如果程序运行顺利，打开串口监视器并将波特率设置为 115200，你可以看到如下结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/54.png" style={{width:700, height:'auto'}}/></div>

该程序会打印出扫描到的蓝牙设备的名称、MAC 地址、制造商数据和信号。

#### 程序注释

首先导入 BLE 功能所需的库。

然后定义了一个名为 `MyAdvertisedDeviceCallbacks` 的类，该类继承自 `BLEAdvertisedDeviceCallbacks`。它有一个名为 `onResult` 的函数，当扫描过程中发现广告蓝牙设备时会调用该函数。该函数使用 `Serial.printf` 函数将设备的信息打印到串口。这一类可以用于处理扫描过程中发现的蓝牙设备信息。

```c
class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
    void onResult(BLEAdvertisedDevice advertisedDevice) {
      Serial.printf("Advertised Device: %s \n", advertisedDevice.toString().c_str());
    }
};
```

在 `Setup` 函数中，我们设置了一个 BLE 扫描器，并指定了扫描间隔和窗口值。它还初始化了 BLE 设备，并设置了一个回调函数来处理扫描过程中发现的广告设备。

```c
BLEDevice::init("");
pBLEScan = BLEDevice::getScan();
pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
pBLEScan->setActiveScan(true);
pBLEScan->setInterval(100);
pBLEScan->setWindow(99);
```

最后，`loop` 函数启动 BLE 扫描器，并指定扫描时间和阻塞标志。然后，它将发现的设备数量打印到串口，并清空结果缓冲区以释放内存。

```c
BLEScanResults foundDevices = *pBLEScan->start(scanTime, false);
Serial.print("Devices found: ");
Serial.println(foundDevices.getCount());
Serial.println("Scan done!");
pBLEScan->clearResults();
```

### BLE 服务端/客户端

如前所述，XIAO ESP32C6 可以同时充当服务端和客户端。让我们看看作为服务端的程序以及如何使用它。将以下程序上传到 XIAO 后，它将作为服务端，并向所有连接到 XIAO 的蓝牙设备发送 "Hello World" 消息。

```cpp
//Server Code
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEServer.h>

#define SERVICE_UUID        "4fafc201-1fb5-459e-8fcc-c5c9c331914b"
#define CHARACTERISTIC_UUID "beb5483e-36e1-4688-b7f5-ea07361b26a8"

void setup() {
  Serial.begin(115200);
  Serial.println("Starting BLE work!");

  BLEDevice::init("XIAO_ESP32C6");
  BLEServer *pServer = BLEDevice::createServer();
  BLEService *pService = pServer->createService(SERVICE_UUID);
  BLECharacteristic *pCharacteristic = pService->createCharacteristic(
                                         CHARACTERISTIC_UUID,
                                         BLECharacteristic::PROPERTY_READ |
                                         BLECharacteristic::PROPERTY_WRITE
                                       );

  pCharacteristic->setValue("Hello World");
  pService->start();
  // BLEAdvertising *pAdvertising = pServer->getAdvertising();  // this still is working for backward compatibility
  BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();
  pAdvertising->addServiceUUID(SERVICE_UUID);
  pAdvertising->setScanResponse(true);
  pAdvertising->setMinPreferred(0x06);  // functions that help with iPhone connections issue
  pAdvertising->setMinPreferred(0x12);
  BLEDevice::startAdvertising();
  Serial.println("Characteristic defined! Now you can read it in your phone!");
}

void loop() {
  // put your main code here, to run repeatedly:
  delay(2000);
}
```

同时，您可以在主流移动应用商店中搜索并下载 **nRF Connect** 应用程序，该应用程序允许您的手机搜索并连接到蓝牙设备。

- Android: [nRF Connect](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en)
- IOS: [nRF Connect](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)

下载软件后，请按照以下步骤搜索并连接 XIAO ESP32C6，您将看到广播的 "Hello World"。

<table align="center">
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/55.jpg" style={{width:200, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/ble_app.png" style={{width:200, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/58.jpg" style={{width:200, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/59.jpg" style={{width:200, height:'auto'}}/></div></td>
	</tr>
</table>

如果您想使用另一个 XIAO ESP32C6 作为客户端接收来自服务器的消息，可以按照以下步骤为客户端 XIAO 设置。

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
    Serial.print("特征的通知回调 ");
    Serial.print(pBLERemoteCharacteristic->getUUID().toString().c_str());
    Serial.print(" 数据长度 ");
    Serial.println(length);
    Serial.print("数据: ");
    Serial.write(pData, length);
    Serial.println();
}

class MyClientCallback : public BLEClientCallbacks {
  void onConnect(BLEClient* pclient) {
  }

  void onDisconnect(BLEClient* pclient) {
    connected = false;
    Serial.println("断开连接");
  }
};

bool connectToServer() {
    Serial.print("建立连接到 ");
    Serial.println(myDevice->getAddress().toString().c_str());
    
    BLEClient*  pClient  = BLEDevice::createClient();
    Serial.println(" - 创建客户端");

    pClient->setClientCallbacks(new MyClientCallback());

    // 连接到远程 BLE 服务器。
    pClient->connect(myDevice);  // 如果传递 BLEAdvertisedDevice 而不是地址，它将识别对等设备地址的类型（公共或私有）
    Serial.println(" - 已连接到服务器");
    pClient->setMTU(517); // 设置客户端请求服务器的最大 MTU（默认是 23）

    // 获取远程 BLE 服务器中我们需要的服务的引用。
    BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
    if (pRemoteService == nullptr) {
      Serial.print("未找到服务 UUID: ");
      Serial.println(serviceUUID.toString().c_str());
      pClient->disconnect();
      return false;
    }
    Serial.println(" - 找到服务");

    // 获取远程 BLE 服务器服务中特征的引用。
    pRemoteCharacteristic = pRemoteService->getCharacteristic(charUUID);
    if (pRemoteCharacteristic == nullptr) {
      Serial.print("未找到特征 UUID: ");
      Serial.println(charUUID.toString().c_str());
      pClient->disconnect();
      return false;
    }
    Serial.println(" - 找到特征");

    // 读取特征的值。
    if(pRemoteCharacteristic->canRead()) {
      String value = pRemoteCharacteristic->readValue();
      Serial.print("特征值为: ");
      Serial.println(value);
    }

    if(pRemoteCharacteristic->canNotify())
      pRemoteCharacteristic->registerForNotify(notifyCallback);

    connected = true;
    return true;
}
/**
 * 扫描 BLE 服务器并找到第一个广播我们需要的服务的设备。
 */
class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
 /**
   * 为每个广播的 BLE 服务器调用。
   */
  void onResult(BLEAdvertisedDevice advertisedDevice) {
    Serial.print("发现 BLE 广播设备: ");
    Serial.println(advertisedDevice.toString().c_str());

    // 我们发现了一个设备，现在检查它是否包含我们需要的服务。
    if (advertisedDevice.haveServiceUUID() && advertisedDevice.isAdvertisingService(serviceUUID)) {

      BLEDevice::getScan()->stop();
      myDevice = new BLEAdvertisedDevice(advertisedDevice);
      doConnect = true;
      doScan = true;

    } // 找到服务器
  } // onResult
}; // MyAdvertisedDeviceCallbacks

void setup() {
  Serial.begin(115200);
  Serial.println("启动 Arduino BLE 客户端应用程序...");
  BLEDevice::init("");

  // 获取扫描器并设置回调函数，当检测到新设备时通知我们。
  // 指定我们需要主动扫描并启动扫描运行 5 秒。
  BLEScan* pBLEScan = BLEDevice::getScan();
  pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
  pBLEScan->setInterval(1349);
  pBLEScan->setWindow(449);
  pBLEScan->setActiveScan(true);
  pBLEScan->start(5, false);
} // setup 结束。

// 这是 Arduino 主循环函数。
void loop() {
  // 如果标志 "doConnect" 为 true，则表示我们已扫描并找到所需的 BLE 服务器，现在连接到它。
  // 一旦连接成功，将 connected 标志设置为 true。
  if (doConnect == true) {
    if (connectToServer()) {
      Serial.println("我们现在已连接到 BLE 服务器。");
    } else {
      Serial.println("连接服务器失败；没有更多操作。");
    }
    doConnect = false;
  }

  // 如果我们已连接到对等 BLE 服务器，每次循环时更新特征值。
  if (connected) {
    String newValue = "自启动以来的时间: " + String(millis()/1000);
    Serial.println("设置新的特征值为 \"" + newValue + "\"");
    
    // 将特征值设置为实际为字符串的字节数组。
    pRemoteCharacteristic->writeValue(newValue.c_str(), newValue.length());
  }else if(doScan){
    BLEDevice::getScan()->start(0);  // 这是一个示例，在断开连接后启动扫描，可能有更好的方式在 Arduino 中实现。
  }
  
  delay(1000); // 每次循环之间延迟一秒。
} // loop 结束
```

上述程序将把 XIAO 转变为一个客户端，并搜索附近的蓝牙设备。当蓝牙设备的 UUID 与您提供的 UUID 匹配时，它将连接到该设备并获取其特征值。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/60.png" style={{width:800, height:'auto'}}/></div>

#### 程序注释

让我们快速了解一下 BLE 服务端示例代码是如何工作的。程序首先导入了 BLE 功能所需的库。然后，您需要为服务和特征定义一个 UUID。

```c
#define SERVICE_UUID "4fafc201-1fb5-459e-8fcc-c5c9c331914b"
#define CHARACTERISTIC_UUID "beb5483e-36e1-4688-b7f5-ea07361b26a8"
```

您可以保留默认的 UUID，或者访问 [uuidgenerator.net](https://www.uuidgenerator.net/) 为您的服务和特征生成随机 UUID。

接下来，您创建一个名为 “XIAO_ESP32C6” 的 BLE 设备。您可以将此名称更改为您喜欢的任何名称。在接下来的代码中，您将 BLE 设备设置为服务端。然后，您为 BLE 服务端创建一个使用先前定义的 UUID 的服务。

```c
BLEServer *pServer = BLEDevice::createServer();
BLEService *pService = pServer->createService(SERVICE_UUID);
```

然后，您为该服务设置特征。正如您所看到的，您也使用了之前定义的 UUID，并且需要传递特征的属性作为参数。在本例中，属性是：READ 和 WRITE。

```c
BLECharacteristic *pCharacteristic = pService->createCharacteristic(
                                     CHARACTERISTIC_UUID,
                                     BLECharacteristic::PROPERTY_READ |
                                     BLECharacteristic::PROPERTY_WRITE
                                     );
```

创建特征后，您可以使用 `setValue()` 方法设置其值。在本例中，我们将值设置为文本 “Hello World”。您可以将此文本更改为您喜欢的任何内容。在未来的项目中，此文本可以是传感器读数，或者是灯的状态等。

最后，您可以启动服务和广播，以便其他 BLE 设备可以扫描并找到此 BLE 设备。

```c
BLEAdvertising *pAdvertising = pServer->getAdvertising();
pAdvertising->start();
```

这只是一个创建 BLE 服务端的简单示例。在此代码中，`loop()` 中没有执行任何操作，但您可以添加当新客户端连接时的操作（请参考 `BLE_notify` 示例以获取一些指导）。

### BLE 传感器数据交换

接下来，我们将进入实际场景完成一个案例。在此案例中，我们将让 XIAO ESP32C6 连接到一个光强传感器，然后通过蓝牙将光传感器的值发送到另一个 XIAO ESP32C6，并在扩展板的屏幕上显示。

为了方便布线，我们将使用两个 XIAO 扩展板。示例程序仅供参考，您可以根据实际项目需求选择产品。

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32C6</th>
        <th>Seeed Studio 带 Grove OLED 的 XIAO 扩展基座</th>
        <th>Grove - 数字光传感器 - TSL2561</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/hardware%20overview.jpg" style={{width:180, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Digital-Light-Sensor-TSL2561.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

除了上述硬件准备，您可能还需要准备以下库，下载并添加到 Arduino IDE 环境中。

- **OLED 显示屏库 u8g2**:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

- **Grove - 数字光传感器 - TSL2561 的库**:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Grove_Digital_Light_Sensor">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

我们需要准备两个 XIAO，一个作为服务器，一个作为客户端。以下是作为服务器的示例程序。作为服务器的 XIAO 主要有以下任务：
- 首先，从光线传感器获取实时值；
- 其次，创建蓝牙服务器；
- 第三，通过蓝牙广播光强值；
- 第四，在显示屏上显示实时光强值并发送。

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
#define bleServerName "XIAOESP32C6_BLE"

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
    delay(10); // 如果发送过多数据包，蓝牙堆栈会发生拥塞
  }
}
```

将程序上传到其中一个 XIAO 后，如果程序运行顺利，可以拿出手机并使用 nRF Connect APP 搜索名为 **XIAOESP32C6_BLE** 的蓝牙设备，连接后点击如下图所示的按钮，即可接收到传感器数据信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/63.jpg" style={{width:300, height:'auto'}}/></div>

在这里你会发现，我们操作软件的方式与之前的示例不太相同，因为通常情况下，当我们发送传感器类型的消息时，会选择使用 **notify** 属性来确保消息的高效性。

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
#define bleServerName "XIAOESP32C6_BLE"

// 外围设备地址。地址将在扫描过程中找到...
static BLEAddress *pServerAddress;

BLEUUID serviceUUID("181A"); // 环境感知服务
BLEUUID charUUID("2A59");    // 模拟输出

char light_val[1024];

// 当接收到其他设备的广告时调用的回调函数
class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
  void onResult(BLEAdvertisedDevice advertisedDevice) {
    if (advertisedDevice.getName() == bleServerName) { // 检查广告设备名称是否匹配
      advertisedDevice.getScan()->stop(); // 找到目标设备后停止扫描
      pServerAddress = new BLEAddress(advertisedDevice.getAddress()); // 获取广告设备的地址
      Serial.println("Device found. Connecting!");
    }
  }
};

// 打印最新传感器读数到 OLED 显示屏的函数
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

  BLEDevice::init("XIAOESP32C6_Client");

  // 获取扫描器并设置回调函数，以便在检测到新设备时通知我们。
  // 指定我们需要主动扫描，并启动扫描运行 30 秒。
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

  // 获取远程 BLE 服务器中服务的特征引用。
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

在程序的开头，我们定义了蓝牙服务器的名称，这个名称可以是您设置的任意名称，但需要记住它，因为您需要依赖此名称来搜索该蓝牙设备。

```c
#define bleServerName "XIAOESP32C6_BLE"
```

在教程的前面部分，我们已经提到，在服务器下会有 Characteristic，而在 Characteristic 下会有值和其他内容。因此，在创建广告时，我们需要遵循这一原则。

```c
BLEService *pService = pServer->createService(BLEUUID((uint16_t)0x181A)); // 环境感知
  pCharacteristic = pService->createCharacteristic(
    BLEUUID((uint16_t)0x2A59), // 模拟输出
    BLECharacteristic::PROPERTY_NOTIFY
  );
  pCharacteristic->addDescriptor(new BLE2902());
```

在上述程序中，您可以看到使用了 `createService()` 来创建一个服务器。参数是一个特定的 UUID：**0x181A**。在 GATT 规则中，**0x181A** 表示环境监测类型的数据，而相同 Characteristic 的 UUID：**0x2A59** 也有特殊含义。在 GATT 中，它表示模拟输出。这与我们的光传感器值的情况相符，因此这里我将其定义为这样。您可以在[这里](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/GATT.pdf)阅读 GATT 为我们准备的一些特定 UUID 的含义。

当然，您也可以不遵循 GATT 标准来设置 UUID，只需确保这两个值是唯一的，并且不会影响客户端通过识别这些 UUID 来找到值。您可以访问 [uuidgenerator.net](https://www.uuidgenerator.net/) 来为您的服务和特性生成随机 UUID。

`createCharacteristic()` 函数的第二个参数是设置属性。请注意，这里需要将其设置为 **PROPERTY_NOTIFY**，以确保数据能够连续发送。

```c
pCharacteristic->setValue(light_val);
pCharacteristic->notify();
```

最后，在 `loop` 中，我们只是每 10 毫秒广播一次读取的光传感器值。

接下来是客户端程序，这部分看起来会复杂得多。

在程序的开头，仍然是非常熟悉的内容。您需要确保这些内容与服务器端配置的一致。

```c
// 蓝牙服务器名称（运行服务器代码的另一个 ESP32 的名称）
#define bleServerName "XIAOESP32C6_BLE"

BLEUUID serviceUUID("181A"); // 环境感知
BLEUUID charUUID("2A59");    // 模拟输出
```

接下来我们编写一个回调函数，该函数的主要功能是搜索附近的蓝牙设备，然后将其与您提供的蓝牙设备名称进行比较，捕获它并获取其 MAC 地址。

```c
class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
  void onResult(BLEAdvertisedDevice advertisedDevice) {
    if (advertisedDevice.getName() == bleServerName) { // 检查广告设备名称是否匹配
      advertisedDevice.getScan()->stop(); // 可以停止扫描，我们找到了目标设备
      pServerAddress = new BLEAddress(advertisedDevice.getAddress()); // 广告设备的地址是我们需要的
      Serial.println("Device found. Connecting!");
    }
  }
};
```

以下过程是找到服务器中光强值的关键。首先，我们需要找到服务器的 UUID，然后在服务器下寻找 Characteristic 的 UUID，最后找到光值。这种解析方法与蓝牙的数据结构是一一对应的。

```c
// 获取远程 BLE 服务器中我们需要的服务的引用。
BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
if (pRemoteService == nullptr) {
  Serial.print("Failed to find our service UUID: ");
  Serial.println(serviceUUID.toString().c_str());
  return;
}

// 获取远程 BLE 服务器中服务的特性的引用。
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
上述示例展示了单个传感器的单个值的最简单示例。如果您希望通过蓝牙广播多个传感器或多个传感器值，我们建议您阅读此处的教程示例。

- [ESP32 BLE Server and Client (Bluetooth Low Energy)](https://randomnerdtutorials.com/esp32-ble-server-client/)
:::



## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持方式，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
