---
description: Seeed Studio XIAO ESP32C3 的蓝牙使用
title: 蓝牙使用
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO_ESP32C3_Bluetooth_Usage
last_update:
  date: 05/15/2025
  author: shuxu hu
---

# 蓝牙使用

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

Seeed Studio XIAO ESP32C3 支持蓝牙 5（LE）连接。本篇 Wiki 将介绍在该开发板上使用蓝牙的基础知识。

## 硬件设置

- **步骤 1.** 将附带的 **WiFi/蓝牙天线** 连接到开发板上的 **IPEX 接口**

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-6.png" alt="pir" width={130} height="auto" /></div>

- **步骤 2.** 使用 USB Type-C 数据线将 XIAO ESP32C3 连接到电脑

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png" alt="pir" width={120} height="auto" /></div>

## 扫描蓝牙设备

在此示例中，我们将使用 XIAO ESP32C3 扫描其周围可用的蓝牙设备。

- **步骤 1.** 将以下代码复制并粘贴到 Arduino IDE 中

```cpp
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEScan.h>
#include <BLEAdvertisedDevice.h>

int scanTime = 5; //单位：秒
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
  pBLEScan = BLEDevice::getScan(); //创建新的扫描
  pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
  pBLEScan->setActiveScan(true); //主动扫描消耗更多电量，但能更快获取结果
  pBLEScan->setInterval(100);
  pBLEScan->setWindow(99);  // 小于或等于 setInterval 的值
}

void loop() {
  // 在此处放置主代码以重复运行：
  BLEScanResults foundDevices = pBLEScan->start(scanTime, false);
  Serial.print("Devices found: ");
  Serial.println(foundDevices.getCount());
  Serial.println("Scan done!");
  pBLEScan->clearResults();   // 从 BLEScan 缓冲区中删除结果以释放内存
  delay(2000);
}
```

:::tip
如果您已经将 ESP32 开发板升级到 3.0.0 或更高版本，则需要更改一些代码以使其兼容：
1. ```BLEScanResults foundDevices = pBLEScan->start(scanTime, false);``` 改为 ```BLEScanResults* foundDevices = pBLEScan->start(scanTime, false);```
2. ```Serial.println(foundDevices.getCount());``` 改为 ```Serial.println(foundDevices->getCount());```
:::

**步骤 2.** 上传代码并打开串口监视器以开始扫描蓝牙设备

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-1.jpg" alt="pir" width={1000} height="auto" /></div>

## 将 XIAO ESP32C3 用作蓝牙服务器

在此示例中，我们将使用 XIAO ESP32C3 作为蓝牙服务器。我们将使用智能手机搜索 XIAO ESP32C3 开发板，并发送字符串以显示在串口监视器上。

- **步骤 1.** 将以下代码复制并粘贴到 Arduino IDE 中

```cpp
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEServer.h>

// 参见以下链接以生成 UUID：
// https://www.uuidgenerator.net/

#define SERVICE_UUID        "4fafc201-1fb5-459e-8fcc-c5c9c331914b"
#define CHARACTERISTIC_UUID "beb5483e-36e1-4688-b7f5-ea07361b26a8"

class MyCallbacks: public BLECharacteristicCallbacks {
    void onWrite(BLECharacteristic *pCharacteristic) {
      std::string value = pCharacteristic->getValue();

      if (value.length() > 0) {
        Serial.println("*********");
        Serial.print("New value: ");
        for (int i = 0; i < value.length(); i++)
          Serial.print(value[i]);

        Serial.println();
        Serial.println("*********");
      }
    }
};

void setup() {
  Serial.begin(115200);

  BLEDevice::init("MyESP32");
  BLEServer *pServer = BLEDevice::createServer();

  BLEService *pService = pServer->createService(SERVICE_UUID);

  BLECharacteristic *pCharacteristic = pService->createCharacteristic(
                                         CHARACTERISTIC_UUID,
                                         BLECharacteristic::PROPERTY_READ |
                                         BLECharacteristic::PROPERTY_WRITE
                                       );

  pCharacteristic->setCallbacks(new MyCallbacks());

  pCharacteristic->setValue("Hello World");
  pService->start();

  BLEAdvertising *pAdvertising = pServer->getAdvertising();
  pAdvertising->start();
}

void loop() {
  // 在此处放置主代码以重复运行：
  delay(2000);
}
```

:::tip
如果您已经将 ESP32 开发板升级到 3.0.0 或更高版本，则需要更改一些代码以使其兼容：
1. ```std::string value = pCharacteristic->getValue();``` 改为 ```String value = pCharacteristic->getValue();```
:::

- **步骤 2.** 上传代码并打开串口监视器

- **步骤 3.** 在智能手机上下载并安装 LightBlue 应用程序

  - [LightBlue 应用程序（Android）](https://play.google.com/store/apps/details?id=com.punchthrough.lightblueexplorer&hl=en_US&gl=US)
  - [LightBlue 应用程序（Apple）](https://apps.apple.com/us/app/lightblue/id557428110)

- **步骤 4.** 打开手机的蓝牙，将手机靠近 XIAO ESP32C3，扫描设备并连接到 **MyESP32** 设备

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-2.jpg" alt="pir" width={300} height="auto" /></div>

- **步骤 5.** 打开 LightBlue 应用程序并点击 **Bonded** 标签

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-3.jpg" alt="pir" width={350} height="auto" /></div>

- **步骤 6.** 点击 **MyESP32** 旁边的 **CONNECT**

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-4.jpg" alt="pir" width={350} height="auto" /></div>

- **步骤 7.** 点击最底部显示 **Readable, Writable** 的部分

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-5.jpg" alt="pir" width={300} height="auto" /></div>

- **步骤 8.** 在 **Data format** 下拉菜单中，选择 **UTF-8 String**

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-6.jpg" alt="pir" width={300} height="auto" /></div>

- **步骤 9.** 在 **WRITTEN VALUES** 下输入 "Hello"，然后点击 **WRITE**  
<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-7.jpg" alt="pir" width={300} height="auto" /></div>

您将在 Arduino IDE 的串行监视器上看到输出的文本字符串 "Hello"。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-9.jpg" alt="pir" width={500} height="auto" /></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时拥有顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>