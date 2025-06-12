---
description: Seeed nRF52 mbed対応ボード用
title: Seeed nRF52 mbed対応ボード用
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO-BLE-Sense-Bluetooth-Usage
last_update:
  date: 05/15/2025
  author: shuxu hu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Bluetoothの使用方法 (Seeed nrf52 mbed対応ボードライブラリ)

**Seeed Studio XIAO nRF52840** および **Seeed Studio XIAO nRF52840 Sense** はどちらもBluetooth接続をサポートしています。このWikiでは、基本的なBluetooth機能を紹介し、「Seeed nrf52 mbed対応ボードライブラリ」を使用して24GHz呼吸睡眠検出モジュールを用いたデモを提供します。

## はじめに

### 必要なハードウェア

- 1 x [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) または [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- 1 x Bluetooth接続可能なスマートフォン/PC
- 1 x USB Type-Cケーブル

### 必要なソフトウェア

- [nRF Connect for Mobile (Android)](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp)
- [LightBlue App (Apple)](https://apps.apple.com/us/app/lightblue/id557428110)

## Arduinoライブラリの概要

:::tip
Arduinoを初めて使用する場合は、[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::
Seeed Studio XIAO nRF52840のBluetooth機能を使用するには、公式のArduino BLEライブラリを使用する必要があります。

<div>
  <p style={{}}><a href="https://github.com/arduino-libraries/ArduinoBLE" target="_blank" /></p><div align="center"><a href="https://github.com/arduino-libraries/ArduinoBLE" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

24GHz睡眠呼吸レーダーを使用したデモを適用したい場合は、対応するライブラリもダウンロードする必要があります。

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed_24GHz_SleepBreathingRadar_BLE" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed_24GHz_SleepBreathingRadar_BLE" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

### 機能

ArduinoBLEコードライブラリの機能と使用方法については、[Arduino公式サイト](https://www.arduino.cc/reference/en/libraries/arduinoble/)を参照してください。

Seeed 24GHz Sleep Breathing Radar BLEコードライブラリの機能と使用方法については、[Wiki](https://wiki.seeedstudio.com/ja/Radar_MR24BSD1/#function)を参照してください。

### インストール

- **方法1**（上記の両方のコードライブラリに適用可能）

ZIPライブラリをダウンロードした後、Arduino IDEを開き、**スケッチ > ライブラリをインクルード > .ZIPライブラリを追加**をクリックします。ダウンロードしたZIPファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウに**ライブラリがライブラリに追加されました**と表示されます。これでライブラリが正常にインストールされたことを意味します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" /></div>

- **方法2**（ArduinoBLEライブラリのみインストール可能）

ライブラリマネージャーはArduino IDEバージョン1.5以降（1.6.x）で追加されました。「スケッチ」メニューの「ライブラリをインクルード」内の「ライブラリを管理...」にあります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/seeed_logo/Library.jpg" /></div>

ライブラリマネージャーを開くと、ワンクリックでインストール可能なライブラリのリストが表示されます。製品名や「k type」や「digitizer」などのキーワードで検索すると、目的のライブラリが表示されます。目的のライブラリをクリックすると、「インストール」ボタンが表示されます。このボタンをクリックすると、ライブラリが自動的にインストールされます。インストールが完了したら、ライブラリマネージャーを閉じます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRFmbed.png" /></div>

## アプリケーション例

ライブラリをインストールし、基本的な機能を理解したところで、Seeed Studio XIAO nRF52840 の動作を確認するためにいくつかの例を実行してみましょう。

**ステップ 1.** Arduino アプリケーションを起動します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>

**ステップ 2.** 開発ボードのモデルを選択し、Arduino IDE に追加します。ここでは「Seeed nrf52 mbed-enabled Boards Library」を使用しています。

> ボードライブラリのインストールについては、[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_BLE/#software-setup)を参照してインストールを完了してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528404.png" /></div>

### デモ 1 スマートフォンを使用して内蔵 LED を制御する

この例では、Seeed Studio XIAO nRF52840 (Sense) とスマートフォンを Bluetooth で接続し、スマートフォンからメッセージを送信して Seeed Studio XIAO nRF52840 (Sense) の内蔵赤色 LED を ON/OFF します。

以下のコードを Arduino IDE に貼り付けて、Seeed Studio XIAO nRF52840 にアップロードしてください。

```cpp
#include <ArduinoBLE.h>

BLEService ledService("19B10000-E8F2-537E-4F6C-D104768A1214"); // Bluetooth® Low Energy LED サービス

// Bluetooth® Low Energy LED スイッチ特性 - カスタム 128 ビット UUID、中央デバイスによる読み取りおよび書き込み可能
BLEByteCharacteristic switchCharacteristic("19B10001-E8F2-537E-4F6C-D104768A1214", BLERead | BLEWrite);

const int ledPin = LED_BUILTIN; // LED 用のピン

void setup() {
  Serial.begin(9600);
  while (!Serial);

  // LED ピンを出力モードに設定
  pinMode(ledPin, OUTPUT);

  // 初期化開始
  if (!BLE.begin()) {
    Serial.println("Bluetooth® Low Energy モジュールの起動に失敗しました!");

    while (1);
  }

  // 広告されるローカル名とサービス UUID を設定
  BLE.setLocalName("LED");
  BLE.setAdvertisedService(ledService);

  // 特性をサービスに追加
  ledService.addCharacteristic(switchCharacteristic);

  // サービスを追加
  BLE.addService(ledService);

  // 特性の初期値を設定
  switchCharacteristic.writeValue(0);

  // 広告開始
  BLE.advertise();

  Serial.println("BLE LED Peripheral");
}

void loop() {
  // Bluetooth® Low Energy ペリフェラルが接続されるのを待機
  BLEDevice central = BLE.central();

  // ペリフェラルに中央デバイスが接続された場合
  if (central) {
    Serial.print("中央デバイスに接続されました: ");
    // 中央デバイスの MAC アドレスを出力
    Serial.println(central.address());

    // 中央デバイスがペリフェラルに接続されている間
    while (central.connected()) {
        if (switchCharacteristic.written()) {
          if (switchCharacteristic.value()) {   
            Serial.println("LED on");
            digitalWrite(ledPin, LOW); // HIGH から LOW に変更       
          } else {                              
            Serial.println(F("LED off"));
            digitalWrite(ledPin, HIGH); // LOW から HIGH に変更     
          }
        }
      }

    // 中央デバイスが切断された場合、その情報を出力
    Serial.print(F("中央デバイスから切断されました: "));
    Serial.println(central.address());
  }
}
```

この例の実装の鍵となる部分は以下のコードです。

```cpp
  while (central.connected()) {
        if (switchCharacteristic.written()) {
          if (switchCharacteristic.value()) {   
            Serial.println("LED on");
            digitalWrite(ledPin, LOW); // HIGH から LOW に変更       
          } else {                              
            Serial.println(F("LED off"));
            digitalWrite(ledPin, HIGH); // LOW から HIGH に変更     
          }
        }
      }
```

このコードの目的は、Seeed Studio XIAO nRF52840 が Bluetooth デバイスに接続されている場合 `central.connected()` と、Bluetooth デバイスから内容を受信した場合 `switchCharacteristic.written()` に判定を行うことです。判定値が 0 以外の場合 `switchCharacteristic.value()` はライトがオンになり、判定値が 0 の場合はライトがオフになります。

シリアルモニターを開き、ボーレートを 9600 に設定すると、LED がオンまたはオフになります。出力は以下の画像のようになります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO-BLE/2.png" /></div>

この時点で、以下の手順に従ってモバイルアプリを使用して Bluetooth 経由で Seeed Studio XIAO nRF52840 のライトを制御することができます。

<table align="center">
 <tr>
     <th align="center">iPhone</th>
     <th align="center">Android</th>  
      <th align="center">説明</th>
 </tr>
 <tr>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/IPhone1.jpg"/></td>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/and1.jpeg"/></td>
      <td align="center">ソフトウェアを開き、<strong>LED</strong> という名前の Bluetooth デバイスを検索して接続をクリックします。一部のデバイスは <strong>Arduino</strong> と表示される場合があります。</td>
 </tr>
 <tr>
     <td><img width ={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/IPhone2.jpg"/></td>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/and2.jpeg"/></td>
      <td align="center">Seeed Studio XIAO nRF52840 の Bluetooth インターフェースに移動し、デバイスをクリックしてデバイスの詳細を表示します。</td>
 </tr>
 <tr>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/IPhone4.jpg"/></td>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/and3.jpeg"/></td>
      <td align="center">Seeed Studio XIAO nRF52840 に送信するデータを入力し、1 を送信してライトをオンにし、0 を送信してライトをオフにします。</td>
 </tr>
 <tr>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/iPhone5.jpg"/></td>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/and4.jpeg"/></td>
      <td align="center">Bluetooth 制御インターフェースに戻ると、値が変更され、Seeed Studio XIAO nRF52840 の赤色ライトがオン（またはオフ）になっていることが確認できます。</td>
 </tr>
 <tr>
      <td colspan="3"><img width = {800} src="https://files.seeedstudio.com/wiki/XIAO-BLE/3.png"/></td>
 </tr>
</table>

### デモ 2 XIAO BLE を使用して 24GHz スリープ検出モジュールのデータを BLE 経由で取得

この例では、センサーの値を取得し、センサーで検出されたデータに関する情報を Bluetooth を介してモバイルデバイスに送信する方法を説明します。使用するのは Seeed Studio XIAO nRF52840 です。

以下の画像に従って、Seeed Studio XIAO nRF52840 ボードと 24GHz 呼吸スリープ検出モジュールを接続してください。詳細については、[こちら](https://wiki.seeedstudio.com/ja/Radar_MR24BSD1)をクリックしてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/60GHzradar/20.png" /></div>

ライブラリ内のサンプルコードを開き、Seeed Studio XIAO nRF52840 にアップロードしてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO-BLE/6.png" /></div>

```cpp
//Radar_with_XIAOBLE_example

#include <ArduinoBLE.h>
#include <sleepbreathingradarBLE.h>

SleepBreathingRadarBLE radar;
BLEService radarService("19B10000-E8F2-537E-4F6C-D104768A1214"); // Bluetooth® Low Energy LED サービス

// Bluetooth® Low Energy LED スイッチ特性 - カスタム 128 ビット UUID、中央デバイスによる読み取りおよび書き込み可能
BLEStringCharacteristic switchCharacteristic("19B10001-E8F2-537E-4F6C-D104768A1214", BLERead | BLENotify, 20);

int last_val = 0;

void setup() {
  Serial.begin(9600);
  radar.SerialInit();
  while (!Serial);

  // 初期化の開始
  if (!BLE.begin()) {
    Serial.println("Seeed Studio XIAO nRF52840 と 60GHz レーダーセンサーのデモの開始に失敗しました！");
    while (1);
  }

  // 広告されるローカル名とサービス UUID を設定
  BLE.setLocalName("Seeed Studio XIAO nRF52840");
  BLE.setAdvertisedService(radarService);

  // サービスに特性を追加
  radarService.addCharacteristic(switchCharacteristic);

  // サービスを追加
  BLE.addService(radarService);

  // 広告の開始
  BLE.advertise();

  Serial.println("Seeed Studio XIAO nRF52840 がアクティブです。接続を待っています...");
}

void loop() {
  // Bluetooth® Low Energy 周辺機器の接続を待機
  BLEDevice central = BLE.central();

  // 中央デバイスが周辺機器に接続された場合
  if (central) {
    Serial.print("中央デバイスに接続されました: ");
    // 中央デバイスの MAC アドレスを出力
    Serial.println(central.address());

    // 中央デバイスが周辺機器に接続されている間
    while (central.connected()){
       radar.recvRadarBytes();                       // レーダーデータを受信して処理を開始
       if (radar.newData == true) {                  // データが受信され、新しいリスト dataMsg[] に転送された場合
          byte dataMsg[radar.dataLen+3] = {0x00};
          dataMsg[0] = 0x53;                         // 配列の最初の要素としてヘッダーフレームを追加
          for (byte n = 0; n < radar.dataLen; n++)dataMsg[n+1] = radar.Msg[n];  // フレームごとに転送
          dataMsg[radar.dataLen+1] = 0x54;
          dataMsg[radar.dataLen+2] = 0x43;
          radar.newData = false;                     // 完全なデータフレームセットが保存される
          int new_val = radar.Sleep_inf(dataMsg);    // レーダー内蔵アルゴリズムを使用して人間の動作状態を出力
          if(new_val != last_val){
            radar.OutputAssignment(new_val);
            switchCharacteristic.setValue(radar.str);
            last_val = new_val;
          }
        }
    }

    // 中央デバイスが切断された場合、出力
      Serial.print(F("中央デバイスから切断されました: "));
      Serial.println(central.address());
    }
}
```

この例では、モバイルデバイスにデータを送信する関数は `setValue()` です。リアルタイムでデータを表示したい場合は、以下のコードに `BLENotify` を追加する必要があります。最後のパラメータ 20 は、送信可能なデータの最大長を示します。

```cpp
BLEStringCharacteristic switchCharacteristic("19B10001-E8F2-537E-4F6C-D104768A1214", BLERead | BLENotify, 20);
```

シリアルモニタを開き、ボーレートを 9600 に設定すると、センサーと対象物との距離がミリメートルとフィートの両方で表示されるはずです。出力は以下の画像のようになります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO-BLE/4.png" /></div>

次に、以下の手順に従って Bluetooth 経由で送信されたライブデータを取得します。

<table align="center">
 <tr>
     <th align="center">iPhone</th>
     <th align="center">Android</th>  
      <th align="center">説明</th>
 </tr>
 <tr>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/IPhone1.jpg"/></td>
     <td><img width ={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/and5.jpeg"/></td>
      <td align="center">ソフトウェアを開き、<strong>Seeed Studio XIAO nRF52840</strong> という名前の Bluetooth デバイスを検索して接続をクリックします。一部のデバイスは <strong>Arduino</strong> として表示される場合があります。</td>
 </tr>
 <tr>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/IPhone2.jpg"/></td>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/and2.jpeg"/></td>
      <td align="center">Seeed Studio XIAO nRF52840 Bluetooth インターフェースに移動し、デバイスをクリックしてデバイスの詳細を表示します。</td>
 </tr>
 <tr>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/iPhone8.jpg"/></td>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/and6.jpeg"/></td>
      <td align="center">ソフトウェアのライブ更新データを開きます。</td>
 </tr>
 <tr>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/iPhone7.jpg"/></td>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/and7.jpeg"/></td>
      <td align="center">次に、レーダーがスリープメッセージを検出するたびに、Seeed Studio XIAO nRF52840 の Bluetooth を介して電話に送信されます。</td>
 </tr>
 <tr>
      <td colspan="3"><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/5.png"/></td>
 </tr>
</table>

### デモ 3 2つの XIAO nRF52840 を使用して Bluetooth 通信で LED を制御

この例では、2つのXIAO nRF52840を使用し、それらのBluetooth機能を利用して通信を行います。1つのXIAOはホストとして動作し、XIAO拡張ボードに接続され、拡張ボードのボタンを介して制御コマンドを送信します。もう1つのXIAOはスレーブとして動作します。

開始する前に、以下の準備をしてください。

|              |              |
|:--------------:|:--------------:|
|<img width = {210} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg"/>|<img width ={210} src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg"/>|
|[**Seeed Studio XIAO Expansion board**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)| 2 x [**Seeed XIAO BLE nRF52840 Sense**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html?queryID=4bbd8c09f20216aa26f6b5a9040504d0&objectID=5253&indexName=bazaar_retailer_products)|

デバイスが接続されていないXIAO nRF52840を1つ選択し、以下のプログラムを直接アップロードしてください。

```cpp
#include <ArduinoBLE.h>

BLEService ledService("19B10000-E8F2-537E-4F6C-D104768A1214"); // Bluetooth® Low Energy LEDサービス

// Bluetooth® Low Energy LEDスイッチ特性 - カスタム128ビットUUID、中央から読み取りおよび書き込み可能
BLEByteCharacteristic switchCharacteristic("19B10001-E8F2-537E-4F6C-D104768A1214", BLERead | BLEWrite);

const int ledPin = LED_BUILTIN; // LEDに使用するピン

void setup() {
  Serial.begin(9600);
  while (!Serial);

  // LEDピンを出力モードに設定
  pinMode(ledPin, OUTPUT);

  // 初期化開始
  if (!BLE.begin()) {
    Serial.println("Bluetooth® Low Energyモジュールの開始に失敗しました!");

    while (1);
  }

  // 広告されるローカル名とサービスUUIDを設定
  BLE.setLocalName("XIAO");
  BLE.setAdvertisedService(ledService);

  // 特性をサービスに追加
  ledService.addCharacteristic(switchCharacteristic);

  // サービスを追加
  BLE.addService(ledService);

  // 特性の初期値を設定
  switchCharacteristic.writeValue(0);

  // 広告開始
  BLE.advertise();

  // アドレスを出力
  Serial.print("アドレス: ");
  Serial.println(BLE.address());

  Serial.println("XIAO nRF52840 Peripheral");
}

void loop() {
  // Bluetooth® Low Energyペリフェラルが接続を待機
  BLEDevice central = BLE.central();

  // ペリフェラルに中央が接続された場合
  if (central) {
    Serial.print("中央に接続: ");
    // 中央のMACアドレスを出力
    Serial.println(central.address());

    // 中央がペリフェラルに接続されている間
    while (central.connected()) {
      // リモートデバイスが特性に書き込んだ場合、
      // 値を使用してLEDを制御
      if (switchCharacteristic.written()) {
        if (switchCharacteristic.value()) {   // 0以外の値
          Serial.println("LEDオン");
          digitalWrite(ledPin, HIGH);         // LEDをオンにする
        } else {                              // 0の値
          Serial.println(F("LEDオフ"));
          digitalWrite(ledPin, LOW);          // LEDをオフにする
        }
      }
    }

    // 中央が切断された場合、それを出力
    Serial.print(F("中央から切断: "));
    Serial.println(central.address());
  }
}
```

このプログラムの主な目的は、XIAOを「XIAO」という名前のBluetoothデバイスとして動作させ、他のBluetoothデバイスから検索および接続可能にすることです。接続後、0または1を送信することでXIAOのLEDをそれぞれオフまたはオンに制御できます。

Seeed Studio XIAO nRF52840を拡張ボードに取り付けます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/XIAO-to-board.png" /></div>

この目的のために、拡張ボードに接続されたXIAOに以下の手順をアップロードします。

```cpp
#include <ArduinoBLE.h>
#include <U8x8lib.h>
#include <Wire.h>

// ボタン用変数
const int buttonPin = D1;
int oldButtonState = LOW;

void setup() {
  Serial.begin(9600);
  while (!Serial);

  // ボタンピンを入力として設定
  pinMode(buttonPin, INPUT_PULLUP);

  // Bluetooth® Low Energyハードウェアを初期化
  BLE.begin();

  Serial.println("Bluetooth® Low Energy Central - LED制御");

  // ペリフェラルのスキャンを開始
  BLE.scanForName("XIAO");
}

void loop() {
  // ペリフェラルが発見されたか確認
  BLEDevice peripheral = BLE.available();
  if (peripheral) {
    // ペリフェラルが発見された場合、アドレス、ローカル名、広告サービスを出力
    Serial.print("発見: ");
    Serial.print(peripheral.address());
    Serial.print(" '");
    Serial.print(peripheral.localName());
    Serial.print("' ");
    Serial.print(peripheral.advertisedServiceUuid());
    Serial.println();

    if (peripheral.localName() != "XIAO") {
      return;
    }

    // スキャンを停止
    BLE.stopScan();

    system_control(peripheral);

    // ペリフェラルが切断された場合、再度スキャンを開始
    BLE.scanForName("XIAO");
  }
  delay(100);
}

void system_control(BLEDevice peripheral) {
  // ペリフェラルに接続
  Serial.println("接続中...");

  if (peripheral.connect()) {
    Serial.println("接続成功");
  } else {
    Serial.println("接続失敗!");
    return;
  }

  // ペリフェラル属性を発見
  Serial.println("属性を発見中...");
  if (peripheral.discoverAttributes()) {
    Serial.println("属性発見成功");
  } else {
    Serial.println("属性発見失敗!");
    peripheral.disconnect();
    return;
  }

  // LED特性を取得
  BLECharacteristic ledCharacteristic = peripheral.characteristic("19b10001-e8f2-537e-4f6c-d104768a1214");

  if (!ledCharacteristic) {
    Serial.println("ペリフェラルにLED特性がありません!");
    peripheral.disconnect();
    return;
  } else if (!ledCharacteristic.canWrite()) {
    Serial.println("ペリフェラルに書き込み可能なLED特性がありません!");
    peripheral.disconnect();
    return;
  }

  while (peripheral.connected()) {
    // ペリフェラルが接続されている間
    // ボタンピンを読み取る
    int buttonState = digitalRead(buttonPin);

    if (oldButtonState != buttonState) {
      // ボタンが変更された場合
      oldButtonState = buttonState;

      if (buttonState) {
        Serial.println("ボタンが押されました");

        // ボタンが押された場合、0x01を書き込んでLEDをオンにする
        ledCharacteristic.writeValue((byte)0x01);
      } else {
        Serial.println("ボタンが離されました");

        // ボタンが離された場合、0x00を書き込んでLEDをオフにする
        ledCharacteristic.writeValue((byte)0x00);
      }
    }
  }

  Serial.println("ペリフェラルが切断されました");
}
```

プログラムをアップロードしたら、シリアルモニターをオンにしてください。プログラムは近くの Bluetooth デバイスを検索し、ローカル名 "XIAO" を持つデバイスに接続を試みます（接続には 1～3 分ほどかかる場合があります）。

シリアルモニターに接続成功のメッセージが表示されたら、拡張ボードのキー D1 を使用して、もう一方の XIAO nRF52840 の LED を制御することができます。

もちろん、拡張ボードをお持ちでない場合でも、独自のボタンや他のデバイスを使用することが可能です。

## その他の情報

さらに多くのサンプルを試したい場合は、`File > Examples > INCOMPATIBLE > ArduinoBLE` に移動し、**ArduinoBLE** の下にあるすべてのサンプルを確認してください。

## 技術サポートと製品に関するディスカッション

弊社の製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>