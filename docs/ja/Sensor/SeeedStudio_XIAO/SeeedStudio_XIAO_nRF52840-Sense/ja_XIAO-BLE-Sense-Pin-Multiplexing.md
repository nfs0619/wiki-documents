---
description: Seeed Studio XIAO nRF52840 (Sense) のピンマルチプレクシング
title: 両バージョンのピンマルチプレクシング
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO-BLE-Sense-Pin-Multiplexing
last_update:
  date: 05/15/2025
  author: shuxu hu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio XIAO nRF52840 (Sense) のピンマルチプレクシング

Seeed Studio XIAO nRF52840 (Sense) は豊富なインターフェースを備えています。**11個のデジタルI/O**は**PWMピン**として使用でき、**6個のアナログ入力**は**ADCピン**として使用できます。また、**UART、I2C、SPI**といった3つの一般的なシリアル通信インターフェースすべてをサポートしています。このWikiは、これらのインターフェースについて学び、次のプロジェクトでそれらを実装するのに役立ちます！

> ここで紹介する基本機能は、どちらのSeeed Studio XIAO nRF52840 Arduinoライブラリでも問題なく動作します。

## デジタル

プッシュボタンをピンD6に接続し、LEDをピンD10に接続します。その後、以下のコードをアップロードして、プッシュボタンを使用してLEDのON/OFFを制御します。

```cpp
const int buttonPin = 6;     // プッシュボタンをデジタルピン6に接続
const int ledPin =  10;      // LEDをデジタルピン10に接続
 
int buttonState = 0;         // プッシュボタンの状態を読み取るための変数
 
void setup() {
  // LEDピンを出力として初期化
  pinMode(ledPin, OUTPUT);
  // プッシュボタンピンを入力として初期化
  pinMode(buttonPin, INPUT);
}
 
void loop() {
  // プッシュボタンの状態を読み取る
  buttonState = digitalRead(buttonPin);
 
  // プッシュボタンが押されているか確認。押されている場合、buttonStateはHIGH
  if (buttonState == HIGH) {
    // LEDをオフにする
    digitalWrite(ledPin, HIGH);
  } else {
    // LEDをオンにする
    digitalWrite(ledPin, LOW);
  }
}
```

## デジタルをPWMとして使用

LEDをピンD10に接続します。その後、以下のコードをアップロードして、LEDが徐々に明るくなったり暗くなったりする様子を確認します。

```cpp
int ledPin = 10;    // LEDをデジタルピン10に接続

void setup() {

}

void loop() {
  // 最小値から最大値まで5ポイントずつ増加してフェードイン
  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 5) {
    // 値を設定（範囲は0から255）
    analogWrite(ledPin, fadeValue);
    // 30ミリ秒待機して減光効果を確認
    delay(30);
  }

  // 最大値から最小値まで5ポイントずつ減少してフェードアウト
  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 5) {
    // 値を設定（範囲は0から255）
    analogWrite(ledPin, fadeValue);
    // 30ミリ秒待機して減光効果を確認
    delay(30);
  }
}
```

## アナログ

ポテンショメータをピンA5に接続し、LEDをピンD10に接続します。その後、以下のコードをアップロードして、ポテンショメータのノブを回すことでLEDの点滅間隔を制御します。

```cpp
const int sensorPin = 5;
const int ledPin =  10; 
void setup() {
  // ledPinをOUTPUTとして宣言
  pinMode(sensorPin, INPUT);
  pinMode(ledPin, OUTPUT);
}
 
void loop() {
  // センサーから値を読み取る
  int sensorValue = analogRead(sensorPin);
  // ledPinをオンにする
  digitalWrite(ledPin, HIGH);
  // プログラムを<sensorValue>ミリ秒間停止
  delay(sensorValue);
  // ledPinをオフにする
  digitalWrite(ledPin, LOW);
  // プログラムを<sensorValue>ミリ秒間停止
  delay(sensorValue);
}
```

## シリアル通信
USBではなくGPIOを介してUARTを使用する場合はSerial1を使用します。USBとGPIOの両方を同時に使用することも可能です。  
UARTのTXピンとしてD6、RXピンとしてD7を使用し、「Hello World!」メッセージを送信します。

```cpp
void setup() {
    Serial1.begin(115200);
    while (!Serial1);
}
 
void loop() {
    Serial1.println("Hello World!");
    delay(1000);
}
```

## I2C

- **ステップ 1.** [Grove - OLED Display 1.12 (SH1107) V3.0](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html) を Seeed Studio XIAO nRF52840 (Sense) に接続します。以下のハードウェア接続を行ってください。

|  Grove - OLED Display 1.12 (SH1107) |  Seeed Studio XIAO nRF52840 (Sense) |
|-----------|-----------|
| GND       | GND       |
| VCC       | 5V        |
| SDA       | SDA       | 
| SCL       | SCL       |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/OLED-I2C-2.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 2.** Arduino IDEを開き、`スケッチ > ライブラリを含める > ライブラリを管理...` に移動します。

- **ステップ 3.** **u8g2** を検索してインストールします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/u8g2-install.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 4.** 以下のコードをアップロードして、OLEDディスプレイにテキスト文字列を表示します。

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>
 
U8G2_SH1107_SEEED_128X128_1_SW_I2C u8g2(U8G2_R0, /* clock=*/ 5, /* data=*/ 4, /* reset=*/ U8X8_PIN_NONE);
 
void setup(void) {
  u8g2.begin();
}
 
void loop(void) {
  u8g2.firstPage();
 
  do {
    u8g2.setFont(u8g2_font_luBIS08_tf);
    u8g2.drawStr(0,24,"Hello Seeed!");
  } while ( u8g2.nextPage() );
}
```

## SPI

- **ステップ 1.** [Grove - OLED Display 1.12 (SH1107) V3.0](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html) を Seeed Studio XIAO nRF52840 (Sense) に接続します。以下のハードウェア接続を行ってください。

| Grove - OLED Display 1.12 (SH1107) | Seeed Studio XIAO nRF52840 (Sense) |
|-----------|------------|
| GND        | GND       |
| 5V         | 5V        |
| SCL        | SCK       | 
| SI         | MOSI      |
| RES        | D3        |
| D/C        | D4        |
| CS         | D5        |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/OLED-SPI.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 2.** このOLEDディスプレイはI2CとSPI通信の両方をサポートしており、デフォルトの通信モードはI2Cです。SPIモードを使用するには、[Grove - OLED Display 1.12 (SH1107) V3.0 wiki](https://wiki.seeedstudio.com/ja/Grove-OLED-Display-1.12-SH1107_V3.0/#software-i2c) を参照して、OLEDディスプレイの通信をSPIに変更してください。

**注意:** 前のステップでU8g2ライブラリがインストールされていることを確認してください。

- **ステップ 3.** 以下のコードをアップロードして、OLEDディスプレイにテキスト文字列を表示します。

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>
 
U8G2_SH1107_128X128_1_4W_HW_SPI u8g2(U8G2_R3, /* cs=*/ 5, /* dc=*/ 4, /* reset=*/ 3);
 
void setup(void) {
  u8g2.begin();
}
 
void loop(void) {
  u8g2.firstPage();
 
  do {
    u8g2.setFont(u8g2_font_luBIS08_tf);
    u8g2.drawStr(0,24,"Hello Seeed!");
  } while ( u8g2.nextPage() );
}
```