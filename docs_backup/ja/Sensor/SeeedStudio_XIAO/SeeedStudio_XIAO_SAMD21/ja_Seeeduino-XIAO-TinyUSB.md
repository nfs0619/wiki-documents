---
description: Seeed Studio XIAO SAMD21 と TinyUSB の使用方法
title: Seeed Studio XIAO SAMD21 と TinyUSB
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino-XIAO-TinyUSB
last_update:
  date: 05/15/2025
  author: shuxu hu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio XIAO SAMD21 を USB デバイスとして使用 (TinyUSB)

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-TinyUSB/XIAO-USB.png" /></div>

この Wiki では、TinyUSB ライブラリを使用して Seeed Studio XIAO SAMD21 を USB クライアントとして使用する方法を紹介します。これにより、Seeed Studio XIAO SAMD21 をキーボードやマウスなどの HID デバイスとして使用することが可能になります。

この機能は [Adafruit TinyUSB Library for Arduino](https://github.com/adafruit/Adafruit_TinyUSB_Arduino) に依存しています。このライブラリは [**Seeed Studio XIAO SAMD21**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) および [**Wio Terminal(SAMD51)**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) でテストされ、正常に動作しています。

## Adafruit TinyUSB Library for Arduino のインストール

:::note
  "Adafruit TinyUSB Library for Arduino" ライブラリの大規模なアップデートにより、バージョン V1.0.0 以降は Seeed Studio XIAO SAMD21 では使用できません。このライブラリを使用する場合は、V0.10.5 バージョンを使用してください。
:::
1. [Adafruit TinyUSB Library for Arduino](https://github.com/adafruit/Adafruit_TinyUSB_Arduino) のリポジトリにアクセスし、リポジトリ全体をローカルドライブにダウンロードします。

2. 次に、このライブラリを Arduino IDE にインストールします。Arduino IDE を開き、`スケッチ` -> `ライブラリをインクルード` -> `ZIP形式のライブラリを追加` をクリックし、先ほどダウンロードした `Adafruit_TinyUSB_Arduino` ファイルを選択します。

<!-- ![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" alt="pir" width={600} height="auto" /></p>

## 簡単なサンプルコード

TinyUSB ライブラリには多くのサンプルが用意されています。ここでは、`ファイル` -> `スケッチ例` -> `Adafruit TinyUSB Library` -> `HID` -> `hid_mouse` に移動して、簡単なマウスの例を確認できます。Seeed Studio XIAO SAMD21 の **D0** ピンにボタンを接続し、コード内で (#28) 設定します。以下のようにします：

:::note
      コンパイルエラーを回避するために、`ArduinoCore-samd` を最新バージョンに更新してください。
:::
```cpp
/*********************************************************************
 Adafruit はこのオープンソースコードの提供に時間とリソースを投資しています。
 Adafruit 製品を購入することで Adafruit とオープンソースハードウェアをサポートしてください！

 MIT ライセンス、詳細は LICENSE を参照してください。
 著作権 (c) 2019 Ha Thach for Adafruit Industries
 上記のすべてのテキストおよび以下のスプラッシュスクリーンは、
 再配布時に含める必要があります。
*********************************************************************/

#include "Adafruit_TinyUSB.h"

/* このスケッチは USB HID マウスをデモンストレーションします。
 * ボタンピンを押すと、モニターの右下にマウスが移動します。
 * 
 * ボードによって、ボタンピンとそのアクティブ状態（押されたとき）は異なります。
 */
#if defined ARDUINO_SAMD_CIRCUITPLAYGROUND_EXPRESS
  const int pin = 4; // 左ボタン
  bool activeState = true;
#elif defined ARDUINO_NRF52840_FEATHER
  const int pin = 7; // UserSw
  bool activeState = false;
#else
  const int pin = 0;
  bool activeState = true;
#endif
  

// TinyUSB のテンプレートを使用した HID レポート記述子
// 単一レポート（IDなし）記述子
uint8_t const desc_hid_report[] =
{
  TUD_HID_REPORT_DESC_MOUSE()
};

// USB HID オブジェクト
Adafruit_USBD_HID usb_hid;

// setup 関数は、リセットまたはボードの電源投入時に一度だけ実行されます
void setup()
{
  // ボタンを設定し、アクティブ状態とは逆のプルアップを設定
  pinMode(pin, activeState ? INPUT_PULLDOWN : INPUT_PULLUP);

  usb_hid.setPollInterval(2);
  usb_hid.setReportDescriptor(desc_hid_report, sizeof(desc_hid_report));

  usb_hid.begin();

  Serial.begin(115200);

  // デバイスがマウントされるまで待機
  while( !USBDevice.mounted() ) delay(1);

  Serial.println("Adafruit TinyUSB HID マウスの例");
}

void loop()
{
  // GPIO を 10ms ごとにポーリング
  delay(10);

  // ボタンが押されているかどうか
  bool btn_pressed = (digitalRead(pin) == activeState);

  // ボタンが押されていない場合は何もしない
  if (!btn_pressed) return;

  // リモートウェイクアップ
  if ( USBDevice.suspended() )
  {
    // サスペンドモードの場合、ホストが REMOTE_WAKEUP 機能を有効にしていればホストをウェイクアップ
    USBDevice.remoteWakeup();
  }

  if ( usb_hid.ready() )
  {
    int8_t const delta = 5;
    usb_hid.mouseMove(0, delta, delta); // IDなし: 右 + 下
  }
}
```

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>