---
title: L76Kを使用したUbidotsでの経路追跡
description: L76K GNSSモジュールとSeeedStudio XIAOを接続し、地図上で位置経路を追跡する方法
keywords: 
  - XIAO
  - XIAO用拡張ボード
  - XIAO用GPSモジュール
  - UbidotsでのL76K経路追跡
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/L76K_Path_Tracking_on_Ubidots
last_update: 
  date: 05/15/2025
  author: Harrison Xu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# L76K GNSSモジュールとSeeedStudio XIAOを接続して地図上で位置経路を追跡する

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic00_Track.png" alt="pir" width={600} height="auto"/>
</p>

## はじめに
[L76K GNSSモジュールを使用したSeeedStudio XIAOの使い方](https://wiki.seeedstudio.com/ja/get_start_l76k_gnss/)を学んだ後、L76K GNSSモジュールを使用してオブジェクトの位置を特定し、地図上で経路を表示したいと思うかもしれません。この目的のために、SeeedStudio XIAO開発ボードとUbidots IoTデータプラットフォームを組み合わせて実現できます。

[Ubidots](https://ubidots.com/)は、エンジニアや開発者が完全なプロダクション対応のIoTアプリケーションを自分で構築する時間や労力を節約するためのローコードIoT開発プラットフォームです。デバイスに優しいAPIからエンドユーザー向けのクリーンなUIまで、Ubidotsは市場投入を迅速化するための基本的な構成要素を提供し、高価なエンジニアチームを雇ってカスタマイズソリューションを開発・維持する必要をなくします。

### 特徴
- Wi-Fi接続時にリアルタイムの位置データ（緯度と経度）をアップロード
- 地図上で位置ポイントを結んだ経路を表示

## 始めるにあたって
### ステップ1: Ubidotsトークンを取得
まず、ブラウザでhttps://ubidots.comを開き、アカウントを登録します。メールを確認して、Ubidotsコンソールにログインします。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic02_SignUp.png" alt="pir" width={600} height="auto"/>
</p>

右上のアバターをクリックして「My Profile」を選択し、スクロールして「Decimal places」を2から6に変更して、緯度と経度の精度を向上させます。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic04_Setting.png" alt="pir" width={600} height="auto"/>
</p>

次に、左側の「API Credentials」に移動し、トークン（**APIキーではありません**）をコピーして後で使用します。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic05_Token.png" alt="pir" width={600} height="auto"/>
</p>

### ステップ2: XIAOにコードをアップロード
SeeedStudio XIAO開発ボード（ここではSeeedStudio XIAO ESP32S3を例に使用）、L76K GNSSモジュール、GNSSアンテナ、Wi-Fiアンテナをすべて接続し、コンピュータにリンクします。

:::danger **警告**
モジュールの取り付け方向に特に注意してください。逆に差し込むと、モジュールやXIAOが焼損する可能性があります。
:::

次に、Arduino IDEを起動します。ライブラリマネージャで`EspSoftwareSerial`と`TinyGPSPlus`ライブラリを追加し、[Ubidots ESP32 Library](https://github.com/ubidots/ubidots-esp32)をダウンロードして追加します。

対応するボードとポートを選択し、以下のコードを貼り付けます：

```cpp
#include <SoftwareSerial.h>
#include <TinyGPSPlus.h>
#include <WiFi.h>
#include <Ubidots.h>

static const int RXPin = D7, TXPin = D6;
static const uint32_t GPSBaud = 9600;
const char WIFI_SSID[]     = "ここにWi-Fi名を入力してください";
const char WIFI_PASS[]     = "ここにWi-Fiパスワードを入力してください";
const char UBIDOTS_TOKEN[] = "ここにUbidotsトークンを入力してください";

SoftwareSerial MySerial(RXPin, TXPin);
TinyGPSPlus gps;
Ubidots ubidots(UBIDOTS_TOKEN, UBI_UDP);
double lat;
double lng;

void setup() {
  Serial.begin(115200);
  MySerial.begin(GPSBaud);
  ubidots.setDebug(true);    // Ubidotsアップロードログを観察するため。より簡略化されたシリアルモニタを希望する場合は"false"に変更できます。
  Serial.println("\nTinyGPSPlusライブラリバージョン: " + String(TinyGPSPlus::libraryVersion()));

  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  while (WiFi.status() != 3) {
    WiFi.begin(WIFI_SSID, WIFI_PASS);
    Serial.println(WiFi.status());
    delay(5000);
  }

  /*
    WL_NO_SHIELD        = 255,    // WiFi Shieldライブラリとの互換性のため
    WL_IDLE_STATUS      = 0,
    WL_NO_SSID_AVAIL    = 1,
    WL_SCAN_COMPLETED   = 2,
    WL_CONNECTED        = 3,
    WL_CONNECT_FAILED   = 4,
    WL_CONNECTION_LOST  = 5,
    WL_DISCONNECTED     = 6
  */

  Serial.println("WiFiに接続されました！");
}

void loop() {
  while (MySerial.available() > 0) {
    if (gps.encode(MySerial.read())) {
      getLocation();
      sendToUbidots();
      delay(10 * 1000);  // 位置取得とアップロードの間隔を変更するにはここを調整します。
    }
  }

  if (millis() > 5000 && gps.charsProcessed() < 10) {
    Serial.println("GPSが検出されません。配線を確認してください。");
  }
}

void getLocation() {
  if (gps.location.isValid()) {
    lat = gps.location.lat();
    lng = gps.location.lng();

    Serial.print("位置: ");
    Serial.print(gps.location.lat(), 6);
    Serial.print(", ");
    Serial.print(gps.location.lng(), 6);
    Serial.println();
  } else {
    Serial.println("現在位置を取得できません");
  }
}

void sendToUbidots() {
  if (lat != 0 && lng != 0) {
    char charLat[20];
    char charLng[20];
    sprintf(charLat, "%.6lf", lat);
    sprintf(charLng, "%.6lf", lng);

    ubidots.addContext("lat", charLat);
    ubidots.addContext("lng", charLng);
    char* context = (char*)malloc(sizeof(char) * 60);
    ubidots.getContext(context);
    ubidots.add("position", 1, context);

    if (ubidots.send()) {
      Serial.println("値が送信されました");
    } else {
      Serial.println("値が送信されませんでした");
    }
    free(context);
  }
}
```

ボードにアップロードすると、シリアルモニタに以下のような出力が表示されます：

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic06_SerialMonitor.png" alt="pir" width={600} height="auto"/>
</p>

<!--ハードウェア接続が正常に動作していることとスクリーンショットを一緒に表示-->

Wi-Fiネットワークへの接続や衛星からの位置情報の取得には、上記の画像のようにしばらく時間がかかるのが通常です。これらのエラー出力が数分間続く場合は、USB-Cポートの横にある小さな「R」ボタンを押してXIAOボードを再起動してみてください。

:::tip
L76K GNSSモジュールは屋外で使用するため、障害物のない開けた場所に設置してください。そうしないと、位置情報を取得できない場合があります。
:::

### ステップ3: 地図上にデータを表示する
現在、L76K GNSSモジュールとSeeedStudio XIAOはGNSSから位置情報を取得し、緯度と経度の情報をUbidotsに送信しています。それでは、Ubidotsに戻って確認してみましょう。https://industrial.ubidots.com/app/devices にアクセスすると、新しい「デバイス」がUbidotsによって自動的に作成されていることがわかります。これは、トークンを介して新しいデータを送信したためです。デバイス名をクリックすると、アップロードしたデータに基づいてこのデバイスの位置が自動的に設定されているのがわかります。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic08_DeviceInfo.png" alt="pir" width={600} height="auto"/>
</p>

次に、軌跡を表示する地図を作成しましょう。上部の「Data」-「Dashboards」に移動し、「Demo Dashboard」の横にあるハンバーガーメニューボタンをクリックして、新しいダッシュボードを「CREATE」します。このように設定を変更するか、自分のニーズに合わせてカスタマイズしてください。新しいダッシュボードを「SAVE」するのを忘れないでください。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic10_NewDashboard.png" alt="pir" width={600} height="auto"/>
</p>

新しいダッシュボードで「Add new widget」をクリックし、下にスクロールして「Map」を見つけます。「ADD MARKER GROUP」をクリックし、先ほど確認したデバイスを設定すると、地図が表示されます。地図の右下隅にカーソルを移動してサイズを大きく調整してください。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic11_NewWidget.png" alt="pir" width={600} height="auto"/>
</p>

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic12_MapSetting.png" alt="pir" width={600} height="auto"/>
</p>

やったー！位置ポイントでつながれた軌跡が目の前に表示されました！

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic00_Track.png" alt="pir" width={600} height="auto"/>
</p>

:::tip
L76K GNSSモジュールが固定された位置に留まって動かない場合、地図には軌跡ではなく点のみが表示されることになります。
:::

## 参考リンク
- [GPS Location | Ubidots API Reference](https://docs.ubidots.com/reference/gps-location)

- [Create Map Widgets in Ubidots | Ubidots Help Center](https://help.ubidots.com/en/articles/1712418-create-map-widgets-in-ubidots)

- [How to create a real-time map? | Ubidots Help Center](https://help.ubidots.com/en/articles/693652-how-to-create-a-real-time-map)

- [Ubidots ESP32 Library on GitHub](https://github.com/ubidots/ubidots-esp32)

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>
<div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>