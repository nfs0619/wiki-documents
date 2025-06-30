---
description: Seeed Studio XIAO RP2040 を Arduino で使用する
title: Arduino
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg
slug: /ja/XIAO-RP2040-with-Arduino
last_update:
  date: 05/15/2025
  author: Spencer
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# **Seeed Studio XIAO RP2040 を Arduino で使用する**

このページでは、Seeed Studio XIAO RP2040 をコンピュータに接続し、Arduino を使用してプログラムを行います。また、ピンマルチプレクシングに関するいくつかのプロジェクトも紹介します。

## **はじめに**

まず、Seeed Studio XIAO RP2040 をコンピュータに接続し、Arduino から簡単なコードをアップロードして、ボードが正常に動作しているか確認します。

### **ハードウェアのセットアップ**

**必要な材料:**

- Seeed Studio XIAO RP2040 x1
- PC x1
- USB Type-C ケーブル x1

:::tip
一部の USB ケーブルは電力供給のみでデータ転送ができない場合があります。USB ケーブルを持っていない場合や、使用している USB ケーブルがデータ転送可能かどうかわからない場合は、[seeed USB type C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html) を確認してください。
:::

**ハードウェアの接続:**

- ステップ 1. BOOT ボタンを押し続けながら、Seeed Studio XIAO RP2040 を PC に接続します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" /></div>

- ステップ 2. PC に「RPI-RP2」ディスクが表示され、Seeed Studio XIAO RP2040 の電源 LED が点灯している場合、接続は完了です。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk.png" /></div>

### **ソフトウェアのセットアップ**

- **ステップ 1.** オペレーティングシステムに応じて最新バージョンの Arduino IDE をダウンロードしてインストールします。

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/software"target="_blank"><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/Download_IDE.png" /></a></p>

- **ステップ 2.** Arduino アプリケーションを起動します。

- **ステップ 3.** Arduino IDE に Seeed Studio XIAO RP2040 ボードパッケージを追加します。

**File** > **Preferences** に移動し、以下の URL を **Additional Boards Manager URLs** に入力します:

`https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json`

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/5.png"/></div>

**Tools-> Board-> Boards Manager...** に移動し、検索欄に「**RP2040**」と入力します。「Raspberry Pi Pico/RP2040」の最新バージョンを選択してインストールします。

:::note 注意

**Seeed XIAO RP2040** という名前のオンボードパッケージはもう利用できませんので、ダウンロードして使用しないでください！

「Raspberry Pi Pico/RP2040」パッケージをインストールしてください。このパッケージには「Seeed XIAO RP2040」ボードが含まれています。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/3.png"/></div>
:::

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/2.png"/></div>

- **ステップ 4.** ボードとポートを選択します。

- **ステップ 5.** **"File --> Examples --->01.Basics --> Blink"** に移動して Blink の例を開きます。

<div align="center"><img width ="550" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/select_blink.png"/></div>

**ボード**

ボードパッケージをインストールした後、**Tools-> Board** に移動し、「**Seeed Studio XIAO RP2040**」を見つけて選択します。これで Seeed Studio XIAO RP2040 を Arduino IDE 用に設定する作業が完了しました。

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/4.png"/></div>

**ポート**

**Tools > Port** に移動し、接続されている Seeed Studio XIAO RP2040 のシリアルポート名を選択します。これは通常 COM3 以上になります (**COM1** と **COM2** は通常ハードウェアシリアルポート用に予約されています)。接続されている Seeed Studio XIAO RP2040 のシリアルポートには通常「Seeed Studio XIAO RP2040」と記載されています。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png"/></div>

- **ステップ 6.** **Upload** ボタンをクリックして Blink の例コードをボードにアップロードします。

<div align="center"><img width="500" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl5.png"/></div>

アップロードが完了すると、ボード上のピン 25 の緑色 (USER) LED が 1 秒ごとに点滅するはずです。点滅している場合、おめでとうございます！接続が成功したことを意味し、これで Seeed Studio XIAO RP2040 を使ったさらなるプロジェクトを探索できます。

:::note
Arduino プログラムのアップロードに失敗した場合は、「BOOT」ボタンを押し続けながら「RUN」ボタンをクリックしてみてください。この時点で Seeed Studio XIAO RP2040 はブートモードに入り (コンピュータにリムーバブルディスクが読み込まれます)、Arduino プログラムを再度アップロードできるようになります。
:::

## **Seeed Studio XIAO RP2040 のピンマルチプレクシング**

Seeed Studio XIAO RP2040 には、11個のデジタルピン、4個のアナログピン、11個のPWMピン、1つのI2Cインターフェース、1つのUARTインターフェース、1つのSPIインターフェース、1つのSWDボンディングパッドインターフェースが含まれています。これらのインターフェースに関するチュートリアルを提供し、プロジェクトに役立てていただけるようにします。

### **デジタル**

ピンD0にプッシュボタンを接続し、ピン25にLEDを接続します。その後、以下のコードをアップロードして、プッシュボタンを使用してLEDのON/OFFを制御します。

:::warning
Seeed Studio XIAO RP2040の動作電圧は3.3Vです。センサーを誤って5Vに接続すると、マザーボードが正常に動作しない可能性がありますのでご注意ください。
:::

```cpp
const int buttonPin = D0;     // プッシュボタンのピン番号
const int ledPin =  25;       // LEDのピン番号
 
int buttonState = 0;          // プッシュボタンの状態を読み取るための変数
 
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

### **アナログ**

ピンA0にポテンショメータを接続し、ピン25にLEDを接続します。その後、以下のコードをアップロードして、ポテンショメータのノブを回すことでLEDの点滅間隔を制御します。

```cpp
const int sensorPin = A0;
const int ledPin =  25; 
void setup() {
  // ledPinを出力として宣言
  pinMode(sensorPin, INPUT);
  pinMode(ledPin, OUTPUT);
}
 
void loop() {
  // センサーから値を読み取る
  int sensorValue = analogRead(sensorPin);
  // ledPinをオンにする
  digitalWrite(ledPin, HIGH);
  // <sensorValue>ミリ秒間プログラムを停止
  delay(sensorValue);
  // ledPinをオフにする
  digitalWrite(ledPin, LOW);
  // <sensorValue>ミリ秒間プログラムを停止
  delay(sensorValue);
}
```

### **シリアル通信**

ピンD6をUARTのTXピン、ピンD7をUARTのRXピンとして使用し、「Hello World!」メッセージを送信します。

```cpp
void setup() {
    Serial.begin(115200);
    while (!Serial);
}

void loop() {
    Serial.println("Hello,World");
    delay(1000);
}
```

### **RGB LED**

ピン11はRGB LEDのイネーブルピンです。ピン11をHIGHに設定することでRGB LEDを点灯させることができます。ここでは、RGB LEDを点滅させます。まず、サードパーティライブラリを追加する必要があります。

- **ステップ1.** Arduino IDEを開き、`スケッチ > ライブラリをインクルード > ライブラリを管理...`を選択してライブラリを検索します。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png" /></div>

Arduinoライブラリマネージャで「Adafruit_NeoPixel」ライブラリを検索し、最新バージョンをインストールします。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/boardurl6.png" /></div>

- **ステップ2.** 以下のコードをArduinoにコピーし、**アップロード**ボタンをクリックしてアップロードします。

```cpp
#include <Adafruit_NeoPixel.h>

int Power = 11;
int PIN  = 12;
#define NUMPIXELS 1

Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  pixels.begin();
  pinMode(Power,OUTPUT);
  digitalWrite(Power, HIGH);

}

void loop() { 
  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(15, 25, 205));
  delay(400);
  pixels.show();
  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(103, 25, 205));
  delay(400);
  pixels.show();
  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(233, 242, 205));
  delay(400);
  pixels.show();
  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(233, 23, 23));
  delay(400);
  pixels.show();
  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(12, 66, 101));
  delay(400);
  pixels.show();
  delay(500);

}
```

RGB LEDは虹色を表示します。

### **I2C**

ここでは、Seeed Studio XIAO RP2040を[I2C接続のGrove - OLED Display 0.96" (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html)に接続し、「Hello world」を表示します。

**接続**:

PIN 5をSCLピン、PIN 4をSDAピンとして使用します。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_15.png" /></div>

- **ステップ1.** Arduino IDEを開き、`スケッチ > ライブラリをインクルード > ライブラリを管理...`を選択してライブラリを検索します。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png" /></div>

Arduinoライブラリマネージャで「U8G2」ライブラリを検索し、最新バージョンをインストールします。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/boardurl7.png" /></div>

- **ステップ2.** 以下のコードをArduinoにコピーし、**アップロード**ボタンをクリックしてアップロードします。

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
 
#ifdef U8X8_HAVE_HW_SPI
#include <SPI.h>
#endif
#ifdef U8X8_HAVE_HW_I2C
#include <Wire.h>
#endif

U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);
 
void setup(void) {
  u8g2.begin();
}
 
void loop(void) {
  u8g2.clearBuffer();                   // 内部メモリをクリア
  u8g2.setFont(u8g2_font_ncenB08_tr);   // 適切なフォントを選択
  u8g2.drawStr(0,10,"Hello Wrold!");    // 内部メモリに文字列を描画
  u8g2.drawStr(0,30,"Hello Werold!"); 
  u8g2.drawStr(0,50,"Hello Wrrrold!"); 
  u8g2.sendBuffer();                    // 内部メモリをディスプレイに転送
  delay(1000);  
}
```

結果は以下のようになります：

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl8.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl8.png" alt="pir" width={600} height="auto" /></p>

### **SPI**

ここでは、[Grove - OLED Yellow&Blue Display 0.96 (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Yellow-Blue-Display-0-96-SSD1315-V1-0-p-5010.html) を SPI 経由で接続し、「Hello World」を表示します。この OLED ディスプレイは IIC と SPI の両方の通信をサポートしていますが、デフォルトの通信モードは IIC です。開始する前に、[IIC 機能を SPI 機能に変更する](https://wiki.seeedstudio.com/ja//Grove-OLED-Yellow&Blue-Display-0.96-SSD1315_V1.0/) 必要があります。

**接続**:

PIN 8 を SCK ピン、PIN 9 を MISO ピン、PIN 10 を MOSI ピンとして使用します。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl9.png" /></div>

- **ステップ 1.** Arduino IDE を開き、`スケッチ > ライブラリをインクルード > ライブラリを管理...` に移動してライブラリを検索します。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png" /></div>

Arduino ライブラリマネージャで「Adafruit_GFX」ライブラリを検索し、最新バージョンをインストールします。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/board10.png" /></div>

Arduino ライブラリマネージャで「Adafruit_SSD1306」ライブラリを検索し、最新バージョンをインストールします。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl11.png" /></div>

- **ステップ 2.** 以下のコードを Arduino にコピーし、**アップロード** ボタンをクリックしてアップロードします。

```cpp
#include <SPI.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define SCREEN_WIDTH 128 // OLED ディスプレイの幅（ピクセル単位）
#define SCREEN_HEIGHT 64 // OLED ディスプレイの高さ（ピクセル単位）

// ソフトウェア SPI を使用して接続された SSD1306 ディスプレイの宣言（デフォルトケース）:
#define OLED_MOSI  MOSI   // SSD1315 D1 に接続
#define OLED_CLK  SCK     // SSD1315 D0 に接続
#define OLED_DC  D4      // SSD1315 D/C に接続
#define OLED_CS  SS      // SSD1315 CS に接続
#define OLED_RESET  D5   // SSD1315 RES に接続
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT,
  OLED_MOSI, OLED_CLK, OLED_DC, OLED_RESET, OLED_CS);

void setup() {
  Serial.begin(9600);
  if(!display.begin(SSD1306_SWITCHCAPVCC)) {
    Serial.println(F("SSD1306 の割り当てに失敗しました"));
    for(;;); // 続行せず、無限ループ
  }
}

void loop() {
  display.clearDisplay();
  display.setTextSize(1);             // 通常の 1:1 ピクセルスケール
  display.setTextColor(SSD1306_WHITE);        // 白いテキストを描画
  display.setCursor(0,3);             // 左上隅から開始
  display.println(F("Hello"));
  display.setTextSize(2); 
  display.setCursor(0,16);  
  display.println(F("Hello"));
  display.setTextSize(3); 
  display.setCursor(0,38);  
  display.println(F("Hello"));
  display.display();
  delay(2000);
}
```

結果は以下のように表示されます：

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl12.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl12.png" alt="pir" width={600} height="auto" /></p>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>