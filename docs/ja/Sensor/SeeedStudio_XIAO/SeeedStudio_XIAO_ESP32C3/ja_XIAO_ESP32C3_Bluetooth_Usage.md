---
description: Seeed Studio XIAO ESP32C3でのBluetoothの使用
title: Bluetoothの使用
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO_ESP32C3_Bluetooth_Usage
last_update:
  date: 05/15/2025
  author: shuxu hu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Bluetoothの使用

Seeed Studio XIAO ESP32C3はBluetooth 5 (LE)接続をサポートしています。このWikiでは、このボードでのBluetooth使用の基本を紹介します。

## ハードウェアのセットアップ

- **ステップ1.** 同梱されている**WiFi/Bluetoothアンテナ**をボードの**IPEXコネクタ**に接続します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-6.png" alt="pir" width={130} height="auto" /></div>

- **ステップ2.** USB Type-Cケーブルを使用してXIAO ESP32C3をコンピュータに接続します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png" alt="pir" width={120} height="auto" /></div>

## Bluetoothデバイスのスキャン

この例では、XIAO ESP32C3を使用して周囲の利用可能なBluetoothデバイスをスキャンします。

- **ステップ1.** 以下のコードをArduino IDEにコピー＆ペーストします。

```cpp
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEScan.h>
#include <BLEAdvertisedDevice.h>

int scanTime = 5; // 秒単位
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
  pBLEScan = BLEDevice::getScan(); // 新しいスキャンを作成
  pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
  pBLEScan->setActiveScan(true); // アクティブスキャンは電力を多く消費しますが、結果を早く取得できます
  pBLEScan->setInterval(100);
  pBLEScan->setWindow(99);  // setInterval値以下または同等
}

void loop() {
  // メインコードをここに記述し、繰り返し実行します
  BLEScanResults foundDevices = pBLEScan->start(scanTime, false);
  Serial.print("Devices found: ");
  Serial.println(foundDevices.getCount());
  Serial.println("Scan done!");
  pBLEScan->clearResults();   // BLEScanバッファから結果を削除してメモリを解放
  delay(2000);
}
```

:::tip
ESP32開発ボードをバージョン3.0.0以上にアップグレードしている場合、互換性を保つために以下のコードを変更する必要があります。
1. ```BLEScanResults foundDevices = pBLEScan->start(scanTime, false);``` を ```BLEScanResults* foundDevices = pBLEScan->start(scanTime, false);``` に変更
2. ```Serial.println(foundDevices.getCount());``` を ```Serial.println(foundDevices->getCount());``` に変更
:::

**ステップ2.** コードをアップロードし、シリアルモニタを開いてBluetoothデバイスのスキャンを開始します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-1.jpg" alt="pir" width={1000} height="auto" /></div>

## XIAO ESP32C3をBluetoothサーバーとして使用

この例では、XIAO ESP32C3をBluetoothサーバーとして使用します。ここでは、スマートフォンを使用してXIAO ESP32C3ボードを検索し、文字列を送信してシリアルモニタに表示します。

- **ステップ1.** 以下のコードをArduino IDEにコピー＆ペーストします。

```cpp
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEServer.h>

// UUIDを生成するには以下を参照してください:
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
  // メインコードをここに記述し、繰り返し実行します
  delay(2000);
}
```

:::tip
ESP32開発ボードをバージョン3.0.0以上にアップグレードしている場合、互換性を保つために以下のコードを変更する必要があります。
1.  ```std::string value = pCharacteristic->getValue();``` を ```String value = pCharacteristic->getValue();``` に変更
:::

- **ステップ2.** コードをアップロードし、シリアルモニタを開きます。

- **ステップ3.** スマートフォンにLightBlueアプリをダウンロードしてインストールします。

  - [LightBlueアプリ (Android)](https://play.google.com/store/apps/details?id=com.punchthrough.lightblueexplorer&hl=ja&gl=US)
  - [LightBlueアプリ (Apple)](https://apps.apple.com/us/app/lightblue/id557428110)

- **ステップ4.** スマートフォンでBluetoothをオンにし、XIAO ESP32C3に近づけてデバイスをスキャンし、**MyESP32**デバイスに接続します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-2.jpg" alt="pir" width={300} height="auto" /></div>

- **ステップ5.** LightBlueアプリを開き、**Bonded**タブをクリックします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-3.jpg" alt="pir" width={350} height="auto" /></div>

- **ステップ6.** **MyESP32**の横にある**CONNECT**をクリックします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-4.jpg" alt="pir" width={350} height="auto" /></div>

- **ステップ7.** 一番下にある**Readable, Writable**と表示されたセクションをクリックします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-5.jpg" alt="pir" width={300} height="auto" /></div>

- **ステップ 8.** **Data format** ドロップダウンメニューで、**UTF-8 String** を選択します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-6.jpg" alt="pir" width={300} height="auto" /></div>

- **ステップ 9.** **WRITTEN VALUES** の下に「Hello」と入力し、**WRITE** をクリックします。
<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-7.jpg" alt="pir" width={300} height="auto" /></div>

Arduino IDE のシリアルモニターに「Hello」というテキスト文字列が出力されるのが確認できます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-9.jpg" alt="pir" width={500} height="auto" /></div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを用意しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>