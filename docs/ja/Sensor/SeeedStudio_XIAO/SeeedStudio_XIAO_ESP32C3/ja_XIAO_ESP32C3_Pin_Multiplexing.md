---
description: Seeed Studio XIAO ESP32C3 のピンマルチプレクシング
title: ピンマルチプレクシング
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO_ESP32C3_Pin_Multiplexing
last_update:
  date: 05/15/2025
  author: Spencer
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# ピンマルチプレクシング

Seeed Studio XIAO ESP32C3 は豊富なインターフェースを備えています。**11個のデジタルI/O**は**PWMピン**として使用でき、**4つのアナログ入力**は**ADCピン**として使用できます。また、**UART、I2C、SPI、I2S**などの4つのシリアル通信インターフェースをサポートしています。このWikiは、これらのインターフェースについて学び、次のプロジェクトでそれらを実装するのに役立ちます！

## デジタル

プッシュボタンをピンD6に接続し、LEDをピンD10に接続します。その後、以下のコードをアップロードして、プッシュボタンを使用してLEDのON/OFFを制御します。

```c
const int buttonPin = D6;     // プッシュボタンをデジタルピン6に接続
const int ledPin =  D10;      // LEDをデジタルピン10に接続
 
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
 
  // プッシュボタンが押されたか確認。押された場合、buttonStateはHIGHになる
  if (buttonState == HIGH) {
    // LEDを点灯
    digitalWrite(ledPin, HIGH);
  } else {
    // LEDを消灯
    digitalWrite(ledPin, LOW);
  }
}
```

## デジタルをPWMとして使用

LEDをピンD10に接続します。その後、以下のコードをアップロードして、LEDが徐々に明るくなったり暗くなったりする様子を確認します。

```cpp
int ledPin = D10;    // LEDをデジタルピン10に接続

void setup() {
  // LEDピンを出力として宣言
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // 最小値から最大値まで5ポイントずつ増加してフェードイン
  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 5) {
    // 値を設定（範囲は0から255）
    analogWrite(ledPin, fadeValue);
    // 30ミリ秒待機して暗くなる効果を確認
    delay(30);
  }

  // 最大値から最小値まで5ポイントずつ減少してフェードアウト
  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 5) {
    // 値を設定（範囲は0から255）
    analogWrite(ledPin, fadeValue);
    // 30ミリ秒待機して暗くなる効果を確認
    delay(30);
  }
}
```

## アナログ

ポテンショメータをピンA0に接続し、LEDをピンD10に接続します。その後、以下のコードをアップロードして、ポテンショメータのノブを回すことでLEDの点滅間隔を制御します。

:::tip
ADCのマッピング範囲は0-2500mVです。
:::

```c
const int sensorPin = A0;
const int ledPin =  D10; 

void setup() {
  pinMode(sensorPin, INPUT);  // sensorPinを入力として宣言
  pinMode(ledPin, OUTPUT);   // ledPinを出力として宣言
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

## シリアル - UART

### 通常の方法 - USBシリアルまたはUART0シリアルのいずれかを選択して使用

このボードには2つのシリアルインターフェースがあります：

- USBシリアル
- UART0シリアル

:::note
XIAO ESP32 C3には`Serial2`はありません。  
また、`Serial1`を使用する場合はピンを定義する必要があります。そうしないとデータを受信できない可能性があります。XIAO ESP32シリーズでは、以下のように`Serial1`を使用します：

```cpp
Serial1.begin(115200, SERIAL_8N1, D7, D6); // RX, TX
```
:::

デフォルトではUSBシリアルが有効になっています。つまり、USB Type-Cを介してボードをPCに接続し、Arduino IDEのシリアルモニタを開いてシリアル経由で送信されたデータを確認できます。

ただし、UART0をシリアルとして使用したい場合は、D6ピンをTXピン、D7ピンをRXピンとしてUSB-シリアルアダプタに接続する必要があります。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-3.png" alt="pir" width={1000} height="auto" /></div>

また、Arduino IDEで**USB CDC On Boot**を**Disabled**に設定する必要があります。

**注意: ボードがArduino Board Managerに表示されたら写真を変更してください**

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-1.png" alt="pir" width={600} height="auto" /></div>

以下のコードをArduino IDEにアップロードして、シリアル経由で文字列「Hello World!」を送信します。

```cpp
void setup() {
    Serial.begin(115200);
    while (!Serial);
}
 
void loop() {
    Serial.println("Hello World!");
    delay(1000);
}
```

Arduinoシリアルモニタでの出力は以下のようになります。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-2.jpg" alt="pir" width={450} height="auto" /></div>

### 特殊な方法 - USBシリアルとUART0/UART1を同時に使用

多くの場合、UARTセンサーをXIAO ESP32C3のハードウェアシリアルポートに接続してデータを取得し、同時にUSBシリアルを使用してシリアルモニタにデータを表示する必要があります。これを実現するための特殊な方法があります。

- サンプルプログラム：

```c
// 低レベルアクセスの設定に必要です。
#include <HardwareSerial.h>

// 2つの内部UARTにマッピングされた2つのシリアルデバイスを定義
HardwareSerial MySerial0(0);
HardwareSerial MySerial1(1);

void setup()
{
    // USB用には通常通りSerialを使用：
    Serial.begin(115200);

    // MySerial0をTX=D6、RX=D7に設定（-1, -1はデフォルトを使用）
    MySerial0.begin(9600, SERIAL_8N1, -1, -1);
    MySerial0.print("MySerial0");

    // MySerial1をRX=D9、TX=D10に設定
    MySerial1.begin(115200, SERIAL_8N1, 9, 10);
    MySerial1.print("MySerial1");
}

void loop()
{

}
```

ご覧の通り、XIAO ESP32C3には実際には3つのUARTが利用可能です。

以下では、販売中の[60GHz mmWave Sensor - Human Resting Breathing and Heartbeat Module](https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html)を例に取り、D6およびD7のハードウェアシリアルポートとUSBシリアルポートの使用方法を説明します。

以下の準備をしてください。

<table align="center">
 <tr>
     <th>XIAO ESP32C3</th>
        <th>60GHz mmWave Sensor -<br/>Human Resting Breathing<br/>and Heartbeat Module</th>
 </tr>
    <tr>
        <td><div align="center"><img width = {120} src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png"/></div></td>
        <td><div align="center"><img width = {240} src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"/></div></td>
    </tr>
 <tr>
        <td align = "center"><a href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html">今すぐ購入</a></td>
        <td align = "center"><a href="https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html">今すぐ購入</a></td>
 </tr>
</table>

センサーライブラリをコンピュータにダウンロードし、Arduino IDEに追加してください。

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed-Studio-MR60BHA1-Sensor/" target="_blank"><div align="center"><img width = {300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></div></a></p>

ここでは、心拍数と呼吸データ情報を解析するために、以下のようにプログラムを再作成できます。

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>
#include <HardwareSerial.h>

HardwareSerial MySerial(0);   // 新しいHardwareSerialクラスを作成 -- D6/D7

// ハードウェアシリアルでも試すことができます
BreathHeart_60GHz radar = BreathHeart_60GHz(&MySerial);

void setup() {
  // 初回実行時のセットアップコード
  Serial.begin(115200);
  MySerial.begin(115200, SERIAL_8N1, -1, -1); // CPU周波数が40MHzの場合、定義された速度の半分で動作

  while(!Serial);   // シリアルポートが開かれるとプログラムが実行開始

  Serial.println("準備完了");

  // radar.ModeSelect_fuc(1);  // 1: リアルタイム送信モード、2: スリープ状態モード
  // モードを設定した後、データが返されない場合はセンサーの電源を再投入する必要があるかもしれません。
}

void loop()
{
  // 繰り返し実行されるメインコード
  radar.Breath_Heart();           // 呼吸と心拍情報の出力
  if(radar.sensor_report != 0x00){
    switch(radar.sensor_report){
      case HEARTRATEVAL:
        Serial.print("センサーが現在の心拍数を監視しました: ");
        Serial.println(radar.heart_rate, DEC);
        Serial.println("----------------------------");
        break;
      case HEARTRATEWAVE:  // リアルタイムデータ転送モードがオンの場合のみ有効
        Serial.print("心拍波形（正弦波） -- 点1: ");
        Serial.print(radar.heart_point_1);
        Serial.print(", 点2 : ");
        Serial.print(radar.heart_point_2);
        Serial.print(", 点3 : ");
        Serial.print(radar.heart_point_3);
        Serial.print(", 点4 : ");
        Serial.print(radar.heart_point_4);
        Serial.print(", 点5 : ");
        Serial.println(radar.heart_point_5);
        Serial.println("----------------------------");
        break;
      case BREATHNOR:
        Serial.println("センサーが現在の呼吸速度が正常であることを検出しました。");
        Serial.println("----------------------------");
        break;
      case BREATHRAPID:
        Serial.println("センサーが現在の呼吸速度が速すぎることを検出しました。");
        Serial.println("----------------------------");
        break;
      case BREATHSLOW:
        Serial.println("センサーが現在の呼吸速度が遅すぎることを検出しました。");
        Serial.println("----------------------------");
        break;
      case BREATHNONE:
        Serial.println("まだ呼吸情報がありません。お待ちください...");
        Serial.println("----------------------------");
        break;
      case BREATHVAL:
        Serial.print("センサーが現在の呼吸速度を監視しました: ");
        Serial.println(radar.breath_rate, DEC);
        Serial.println("----------------------------");
        break;
      case BREATHWAVE:  // リアルタイムデータ転送モードがオンの場合のみ有効
        Serial.print("呼吸波形（正弦波） -- 点1: ");
        Serial.print(radar.breath_point_1);
        Serial.print(", 点2 : ");
        Serial.print(radar.breath_point_2);
        Serial.print(", 点3 : ");
        Serial.print(radar.breath_point_3);
        Serial.print(", 点4 : ");
        Serial.print(radar.breath_point_4);
        Serial.print(", 点5 : ");
        Serial.println(radar.breath_point_5);
        Serial.println("----------------------------");
        break;
    }
  }
  delay(200);                       // プログラムのフリーズを防ぐために遅延を追加
}
```

プログラムをアップロードした後、シリアルモニターを開き、ボーレートを115200に設定してください。

次に、以下の接続方法を使用してセンサーをXIAO ESP32C3に接続します。

<div align="center"><img width = {700} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/62.jpg"/></div>

すべてが正常に動作すれば、シリアルモニターにデータメッセージが表示されます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/2.png" alt="pir" width="800" height="auto"/></div>

### Serial1の使用

上記のXIAO ESP32C3のピン図に基づいて特定のパラメータを確認すると、TXピンとRXピンがあることがわかります。
これは通常のシリアル通信とは異なりますが、使用方法は非常に似ています。ただし、いくつかのパラメータを追加する必要があります。
次に、チップから引き出されたピンを使用してシリアル通信を行います。

含める必要があるコア関数：

- `Serial1.begin(BAUD,SERIAL_8N1,RX_PIN,TX_PIN);` -- Serial1を有効化する関数プロトタイプ : `<Serial.Type>.begin(unsigned long baud, uint32_t config, int8_t rxPin, int8_t txPin);`
  - `baud`  : ボーレート
  - `config`: 設定ビット
  - `rxPin` : 受信ピン
  - `txPin` : 送信ピン

デジタルピンポートを使用して定義する場合、この部分は`#define RX_PIN D7`、`#define TX_PIN D6`とする必要があります。異なるXIAOシリーズのピン図を参照して特定のパラメータを確認してください。

以下はサンプルプログラムです：

```c
#define RX_PIN D7
#define TX_PIN D6
#define BAUD 115200

void setup() {
    Serial1.begin(BAUD,SERIAL_8N1,RX_PIN,TX_PIN);
}
 
void loop() {
  if(Serial1.available() > 0)
  {
    char incominByte = Serial1.read();
    Serial1.print("I received : ");
    Serial1.println(incominByte);
  }
  delay(1000);
}
```

プログラムをアップロードした後、Arduino IDEのシリアルモニターを開き、ボーレートを115200に設定してください。その後、シリアルモニターを通じてXIAO ESP32C3に送信したい内容を入力できます。XIAOは送信された内容の各バイトを出力します。ここでは、入力した内容が"Hello Everyone"であり、結果の図は以下の通りです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/114.png" style={{width:600, height:'auto'}}/></div>

### ソフトウェアシリアル

ソフトウェアシリアルを使用するには、[EspSoftwareSerial](https://github.com/plerup/espsoftwareserial)ライブラリをインストールしてください。

:::tip
現在、EspSoftwareSerialライブラリのバージョン7.0.0を推奨しています。他のバージョンでは、ソフトシリアルポートが正常に動作しない問題が発生する可能性があります。
:::

```cpp
#include <SoftwareSerial.h>

SoftwareSerial mySerial(D7, D6); // RX, TX

void setup() {
  Serial.begin(9600);
  mySerial.begin(9600);
}

void loop() {
  if (mySerial.available()) {
    char data = mySerial.read();
    Serial.print("Received via software serial: ");
    Serial.println(data);
  }

  if (Serial.available()) {
    char data = Serial.read();
    mySerial.print("Received via hardware serial: ");
    mySerial.println(data);
  }
}
```

この例では、ピン`D7 (RX)`と`D6 (TX)`で9600ボーレートのソフトウェアシリアルを設定します。ハードウェアシリアル（USB）とソフトウェアシリアルポートの両方を監視し、受信したデータを相互にエコーします。

## I2C

### ハードウェア接続

[Grove - OLED Yellow&Blue Display 0.96 (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Yellow-Blue-Display-0-96-SSD1315-V1-0-p-5010.html) を XIAO ESP32C3 に以下のハードウェア接続に従って接続してください。

|  Grove - OLED Yellow&Blue Display 0.96 (SSD1315) |  XIAO ESP32C3 |
|-----------|-----------|
| SCL       | SCL       |
| SDA       | SDA       |
| VCC       | 5V        |
| GND       | GND       |

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-7.png" alt="pir" width={1000} height="auto" /></div>

### ソフトウェア設定

- **ステップ 1.** Arduino IDE を開き、`スケッチ > ライブラリを含める > ライブラリを管理...` に移動します。

- **ステップ 2.** **u8g2** を検索してインストールします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/u8g2-install.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 3.** 以下のコードをアップロードして、OLEDディスプレイにテキスト文字列を表示します。

```cpp
//#include <Arduino.h>
#include <U8g2lib.h>
 
#ifdef U8X8_HAVE_HW_SPI
#include <SPI.h>
#endif
#ifdef U8X8_HAVE_HW_I2C
#include <Wire.h>
#endif

U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);    //低速I2C
 
void setup(void) {
  u8g2.begin();
//  u8x8.setFlipMode(1);   // 数値を1から3に設定すると、画面の文字が180度回転します
}
 
void loop(void) {
  u8g2.clearBuffer();                   // 内部メモリをクリア
  u8g2.setFont(u8g2_font_ncenB08_tr);   // 適切なフォントを選択
  u8g2.drawStr(0,15,"Hello World!");    // 内部メモリに文字列を書き込む
  u8g2.drawStr(0,30,"Hello World!");
  u8g2.drawStr(0,40,"Hello World!");
  u8g2.sendBuffer();                    // 内部メモリをディスプレイに転送
//  delay(1000);  
}
```

## SPI

### ハードウェア接続

[Grove - 高精度気圧センサー (DPS310)](https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html) を XIAO ESP32C3 に以下のハードウェア接続に従って接続してください。

| Grove - 高精度気圧センサー (DPS310) | XIAO ESP32C3 |
|-----------|------------|
| 3V3        | 3V3       |
| SDI        | MOSI      |
| GND        | GND       |
| SDO        | MISO      |
| CSK        | SCK       |
| CS         | CS        |

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-4.png" alt="pir" width={1000} height="auto" /></div>

### ソフトウェア設定

- **ステップ 1.** [Seeed_Arduino_DPS310 ライブラリ](https://github.com/Seeed-Studio/Seeed_Arduino_DPS310) を zip ファイルとしてダウンロードします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-5.png" alt="pir" width={1000} height="auto" /></div>

- **ステップ 2.** Arduino IDE を開き、`スケッチ > ライブラリを含める > .ZIP ライブラリを追加...` に移動し、ダウンロードした zip ファイルを開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 3.** `ファイル > サンプル > DigitalPressureSensor > spi_background` に移動して **spi_background** サンプルを開きます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-6.png" alt="pir" width={450} height="auto" /></div>

または、以下のコードをコピーして使用することもできます。

```cpp
#include <Dps310.h>

// Dps310 オブジェクト
Dps310 Dps310PressureSensor = Dps310();

void setup() {
    // スレーブセレクトラインのピン番号
    // XMC2GO
    int16_t pin_cs = SS;
    // XMC 1100 Bootkit & XMC4700 Relax Kitの場合は以下の行をコメント解除してください
    // int16_t pin_cs = 10;

    Serial.begin(9600);
    while (!Serial);

    // Dps310 を初期化するために begin を呼び出します
    // パラメータ pin_nr はマイクロコントローラー上の CS ピンの番号です
    Dps310PressureSensor.begin(SPI, pin_cs);

    // 温度測定レート (0から7の値)
    // 2^temp_mr 温度測定結果/秒
    int16_t temp_mr = 2;
    // 温度オーバーサンプリングレート (0から7の値)
    // 2^temp_osr 内部温度測定/結果
    // 高い値は精度を向上させます
    int16_t temp_osr = 2;
    // 圧力測定レート (0から7の値)
    // 2^prs_mr 圧力測定結果/秒
    int16_t prs_mr = 2;
    // 圧力オーバーサンプリングレート (0から7の値)
    // 2^prs_osr 内部圧力測定/結果
    // 高い値は精度を向上させます
    int16_t prs_osr = 2;
    // startMeasureBothCont はバックグラウンドモードを有効にします
    // 温度と圧力が自動的に測定されます
    // 高精度と高測定レートを同時に使用することはできません。
    // 詳細についてはデータシートを参照してください (または試行錯誤)
    int16_t ret = Dps310PressureSensor.startMeasureBothCont(temp_mr, temp_osr, prs_mr, prs_osr);
    // 以下のコメントアウトされた行を使用して、温度または圧力のみを測定することもできます
    // int16_t ret = Dps310PressureSensor.startMeasureTempCont(temp_mr, temp_osr);
    // int16_t ret = Dps310PressureSensor.startMeasurePressureCont(prs_mr, prs_osr);

    if (ret != 0) {
        Serial.print("初期化失敗! ret = ");
        Serial.println(ret);
    } else {
        Serial.println("初期化完了!");
    }
}

void loop() {
    uint8_t pressureCount = 20;
    float pressure[pressureCount];
    uint8_t temperatureCount = 20;
    float temperature[temperatureCount];

    // この関数は連続測定の結果を指定された配列に書き込みます
    // temperatureCount と pressureCount のパラメータは、関数が呼び出されたときに temperature と pressure 配列のサイズを保持する必要があります
    // 関数終了後、temperatureCount と pressureCount は配列に書き込まれた値の数を保持します
    // 注意: Dps310 は32以上の結果を保存できません。結果バッファが満杯になると、新しい測定結果を保存しません
    int16_t ret = Dps310PressureSensor.getContResults(temperature, temperatureCount, pressure, pressureCount);

    if (ret != 0) {
        Serial.println();
        Serial.println();
        Serial.print("失敗! ret = ");
        Serial.println(ret);
    } else {
        Serial.println();
        Serial.println();
        Serial.print(temperatureCount);
        Serial.println(" 個の温度値が見つかりました: ");
        for (int16_t i = 0; i < temperatureCount; i++) {
            Serial.print(temperature[i]);
            Serial.println(" 度 Celsius");
        }

        Serial.println();
        Serial.print(pressureCount);
        Serial.println(" 個の圧力値が見つかりました: ");
        for (int16_t i = 0; i < pressureCount; i++) {
            Serial.print(pressure[i]);
            Serial.println(" Pascal");
        }
    }

    // Dps310 がバッファを補充できるように少し待機します
    delay(10000);
}
```

- **ステップ 4.** コードをアップロードし、**シリアルモニター**を開く

**注意:** コードをアップロードしても、Arduino ウィンドウの右上にある **シリアルモニター** をクリックするまで自動的には実行されません。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-8.jpg" alt="pir" width={600} height="auto" /></div>

これで、上記のようにシリアルモニターに温度と気圧のデータが順番に表示されるのが確認できます！


## XIAO ESP32C3 の IO 割り当てに関する注意

### D9

XIAO ESP32C3 の D9 は、ESP32-C3 の GPIO9 (15)、プルアップ抵抗 (R6)、および BOOT ボタンに接続されています。BOOT ボタン（および RESET ボタン）は、ESP32-C3 のブートモードを手動で切り替えることができます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/10.png" alt="pir" width={600} height="auto" /></div>

BOOT ボタンを押すと、D9 が GND に接続されます。**そのため、D9 をスイッチ入力として使用するのが望ましいです**。

### D6

XIAO ESP32C3 の D6 は、ESP32-C3 の U0TXD (28) に接続されています。1段目/2段目のブートローダーの動作状態がテキストとして U0TXD に出力されます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/11.png" alt="pir" width={400} height="auto" /></div>

D6 は起動時に UART 出力として設定されているため、D6 を入力として使用すると、誤って大電流が発生する可能性があります。**そのため、D6 ピンは出力モードでのみ使用することを推奨します**。

ただし、この D6 は UART 出力であるため、いくつか注意が必要です。一つは、通信していない待機モードでは HIGH になることです。もう一つは、1段目/2段目のブートローダーのテキスト出力です。起動直後に信号が HIGH/LOW を繰り返すため、必要に応じて対策を講じる必要があります。

そのため、D6 の使用は避けるようにしてください。（もちろん、理解した上で使用するのは問題ありません。）

### D8

Seeed Studio XIAO ESP32C3 の D8 は、ESP32-C3 の GPIO8 (14) に接続されています。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/12.png" alt="pir" width={300} height="auto" /></div>

GPIO8 は、BOOT ボタンを押しながらダウンロードブートモードを設定する際に参照され、このとき HIGH である必要があります。（[こちら](https://www.espressif.com/sites/default/files/documentation/esp32-c3_datasheet_en.pdf) に記載されています: 「GPIO8 = 0 と GPIO9 = 0 のストラップ組み合わせは無効であり、予期しない動作を引き起こします。」）

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/13.png" alt="pir" width={700} height="auto" /></div>

ダウンロードブートを使用する場合、**起動時に GPIO8 を HIGH にするためにプルアップ抵抗を追加してください**。

SeeedJP の同僚 **matsujirushi** 氏がこのセクションのテストと貢献をしてくれたことに感謝します。以下は元記事への参照リンクです。

- [Seeed Studio XIAO ESP32C3のI/O割り付けに注意](https://lab.seeed.co.jp/entry/2023/04/03/120000)