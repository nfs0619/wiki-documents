---
description: Seeed Studio XIAO ESP32C3 の WiFi 使用方法
title: WiFi 使用方法
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO_ESP32C3_WiFi_Usage
last_update:
  date: 05/15/2025
  author: Spencer
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 開始

Seeed Studio XIAO ESP32C3 は IEEE 802.11b/g/n に対応した WiFi 接続をサポートしています。この Wiki では、このボードでの WiFi 使用の基本を紹介します。

:::caution 注意
⚠️ ボードをホットスポット（アクセスポイント）として使用する際は注意してください。過熱して火傷の原因となる可能性があります。
:::

## ハードウェアのセットアップ

- **ステップ 1.** 同梱されている **WiFi/Bluetooth アンテナ** をボードの **IPEX コネクタ** に接続します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-6.png" alt="pir" width={130} height="auto" /></div>

- **ステップ 2.** USB Type-C ケーブルを使用して XIAO ESP32C3 をコンピュータに接続します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png" alt="pir" width={120} height="auto" /></div>

## モード 1: STA モード（ステーションモード） - WiFi ネットワークのスキャン

### Wi-Fi アクセスポイントのスキャン

この例では、XIAO ESP32C3 を使用して周囲の利用可能な WiFi ネットワークをスキャンします。この場合、ボードはステーション（STA）モードに設定されます。

- **ステップ 1.** 以下のコードを Arduino IDE にコピー＆ペーストします。

<Tabs>
  <TabItem value="basic wifi scan" label="基本 Wi-Fi スキャン" default>

```cpp
#include "WiFi.h"

void setup() {
  Serial.begin(115200);

  // WiFi をステーションモードに設定し、以前接続されていた AP から切断
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);

  Serial.println("セットアップ完了");
}

void loop() {
  Serial.println("スキャン開始");

  // WiFi.scanNetworks は見つかったネットワークの数を返します
  int n = WiFi.scanNetworks();
  Serial.println("スキャン完了");
  if (n == 0) {
    Serial.println("ネットワークが見つかりません");
  } else {
    Serial.print(n);
    Serial.println(" 個のネットワークが見つかりました");
    for (int i = 0; i < n; ++i) {
      // 見つかった各ネットワークの SSID と RSSI を出力
      Serial.print(i + 1);
      Serial.print(": ");
      Serial.print(WiFi.SSID(i));
      Serial.print(" (");
      Serial.print(WiFi.RSSI(i));
      Serial.print(")");
      Serial.println((WiFi.encryptionType(i) == WIFI_AUTH_OPEN) ? " " : "*");
      delay(10);
    }
  }
  Serial.println("");

  // 再スキャンする前に少し待機
  delay(5000);
}
```

  </TabItem>
  <TabItem value="advan-wifi-scan" label="高度な Wi-Fi スキャン">

```cpp title="https://github.com/espressif/arduino-esp32/blob/master/libraries/WiFi/examples/WiFiScan/WiFiScan.ino"
/*
 *  このスケッチは WiFi ネットワークのスキャン方法を示します。
 *  API は Arduino WiFi Shield ライブラリに基づいていますが、新しい WiFi 機能がサポートされているため大幅に変更されています。
 *  例: `encryptionType()` の戻り値は、よりモダンな暗号化がサポートされているため異なります。
 */
#include "WiFi.h"

void setup() {
  Serial.begin(115200);

  // WiFi をステーションモードに設定し、以前接続されていた AP から切断
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);

  Serial.println("セットアップ完了");
}

void loop() {
  Serial.println("スキャン開始");

  // WiFi.scanNetworks は見つかったネットワークの数を返します
  int n = WiFi.scanNetworks();
  Serial.println("スキャン完了");
  if (n == 0) {
    Serial.println("ネットワークが見つかりません");
  } else {
    Serial.print(n);
    Serial.println(" 個のネットワークが見つかりました");
    Serial.println("番号 | SSID                             | RSSI | CH | 暗号化");
    for (int i = 0; i < n; ++i) {
      // 見つかった各ネットワークの SSID と RSSI を出力
      Serial.printf("%2d", i + 1);
      Serial.print(" | ");
      Serial.printf("%-32.32s", WiFi.SSID(i).c_str());
      Serial.print(" | ");
      Serial.printf("%4ld", WiFi.RSSI(i));
      Serial.print(" | ");
      Serial.printf("%2ld", WiFi.channel(i));
      Serial.print(" | ");
      switch (WiFi.encryptionType(i)) {
        case WIFI_AUTH_OPEN:            Serial.print("オープン"); break;
        case WIFI_AUTH_WEP:             Serial.print("WEP"); break;
        case WIFI_AUTH_WPA_PSK:         Serial.print("WPA"); break;
        case WIFI_AUTH_WPA2_PSK:        Serial.print("WPA2"); break;
        case WIFI_AUTH_WPA_WPA2_PSK:    Serial.print("WPA+WPA2"); break;
        case WIFI_AUTH_WPA2_ENTERPRISE: Serial.print("WPA2-EAP"); break;
        case WIFI_AUTH_WPA3_PSK:        Serial.print("WPA3"); break;
        case WIFI_AUTH_WPA2_WPA3_PSK:   Serial.print("WPA2+WPA3"); break;
        case WIFI_AUTH_WAPI_PSK:        Serial.print("WAPI"); break;
        default:                        Serial.print("不明");
      }
      Serial.println();
      delay(10);
    }
  }
  Serial.println("");

  // スキャン結果を削除してメモリを解放
  WiFi.scanDelete();

  // 再スキャンする前に少し待機
  delay(5000);
}
```
  </TabItem>
</Tabs>

**ステップ 2.** コードをアップロードし、シリアルモニタを開いて WiFi ネットワークのスキャンを開始します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-1.jpg" alt="pir" width={500} height="auto" /></div>

### WiFi ネットワークへの接続

この例では、XIAO ESP32C3 を使用して WiFi ネットワークに接続します。

- **ステップ 1.** 以下のコードを Arduino IDE にコピー＆ペーストします。

<Tabs>
  <TabItem value="basic wifi connect" label="基本 Wi-Fi 接続" default>

```cpp
#include <WiFi.h>

const char* ssid = "your-ssid";
const char* password = "your-password";

void setup() {
  Serial.begin(115200);
  delay(10);

  // WiFi ネットワークへの接続を開始
  Serial.println();
  Serial.println();
  Serial.print("接続中: ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi に接続しました");
  Serial.println("IP アドレス: ");
  Serial.println(WiFi.localIP());
}
void loop() {}
```

  </TabItem>
  <TabItem value="advan-wifi-connect" label="高度な Wi-Fi 接続">

```cpp title="https://github.com/espressif/arduino-esp32/blob/master/libraries/WiFi/examples/WiFiClientConnect/WiFiClientConnect.ino"
#include <WiFi.h>

const char *ssid = "your-ssid";
const char *password = "your-password";

void setup() {
  Serial.begin(115200);
  delay(10);

  // WiFi ネットワークへの接続を開始
  Serial.println();
  Serial.println();
  Serial.print("接続中: ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  // 約 10 秒間試行（500ms x 20 回）
  int tryDelay = 500;

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  while (true) {
      switch (WiFi.status()) {
        case WL_NO_SSID_AVAIL: Serial.println("[WiFi] SSID が見つかりません"); break;
        case WL_CONNECT_FAILED:
          Serial.print("[WiFi] 接続失敗 - WiFi に接続できません！理由: ");
          return;
          break;
        case WL_CONNECTION_LOST: Serial.println("[WiFi] 接続が失われました"); break;
        case WL_SCAN_COMPLETED:  Serial.println("[WiFi] スキャンが完了しました"); break;
        case WL_DISCONNECTED:    Serial.println("[WiFi] WiFi が切断されました"); break;
        case WL_CONNECTED:
          Serial.println("[WiFi] WiFi に接続されました！");
          Serial.print("[WiFi] IP アドレス: ");
          Serial.println(WiFi.localIP());
          return;
          break;
        default:
          Serial.print("[WiFi] WiFi ステータス: ");
          Serial.println(WiFi.status());
          break;
      }
          delay(tryDelay);

    if (numberOfTries <= 0) {
      Serial.print("[WiFi] WiFi への接続に失敗しました！");
      // 接続を強制停止するために disconnect 関数を使用
      WiFi.disconnect();
      return;
    } else {
      numberOfTries--;
    }
  }

  Serial.println("");
  Serial.println("WiFi に接続しました");
  Serial.println("IP アドレス: ");
  Serial.println(WiFi.localIP());
}
void loop() {}
```

</TabItem>
</Tabs>

**ステップ 2.** コードをアップロードし、シリアルモニターを開いてボードがWiFiネットワークに接続されていることを確認します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-2.jpg" alt="pir" width={500} height="auto" /></div>

## モード 2: Soft-AP モード (STAとして動作) - アクセスポイントとして使用

この例では、XIAO ESP32C3をWiFiアクセスポイントとして使用し、他のデバイスがそれに接続できるようにします。これは、携帯電話のWiFiホットスポット機能に似ています。

- **ステップ 1.** 以下のコードをArduino IDEにコピー＆ペーストします。

```cpp
#include "WiFi.h"
void setup() {
  Serial.begin(115200);
  WiFi.softAP("ESP_AP", "123456789");
}

void loop() {
  Serial.print("ホスト名:");
  Serial.println(WiFi.softAPgetHostname());
  Serial.print("ホストIP:");
  Serial.println(WiFi.softAPIP());
  Serial.print("ホストIPV6:");
#if ESP_ARDUINO_VERSION_MAJOR < 3
  Serial.println(WiFi.softAPIPv6());
#else
  Serial.println(WiFi.softAPlinkLocalIPv6());
#endif
  Serial.print("ホストSSID:");
  Serial.println(WiFi.SSID());
  Serial.print("ホストブロードキャストIP:");
  Serial.println(WiFi.softAPBroadcastIP());
  Serial.print("ホストMACアドレス:");
  Serial.println(WiFi.softAPmacAddress());
  Serial.print("ホスト接続数:");
  Serial.println(WiFi.softAPgetStationNum());
  Serial.print("ホストネットワークID:");
  Serial.println(WiFi.softAPNetworkID());
  Serial.print("ホストステータス:");
  Serial.println(WiFi.status());
  delay(1000);
}
```

:::caution 注意
ESP32開発ボードのバージョンがすでに3.0.0に更新されている場合、コード内の```softAPIPv6()```を```softAPlinkLocalIPv6()```に変更する必要があります。
:::

**ステップ 2.** コードをアップロードし、シリアルモニターを開いてWiFiアクセスポイントに関する詳細を確認します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-3.png" alt="pir" width={700} height="auto" /></div>

**ステップ 3.** PCまたは携帯電話でWiFiネットワークをスキャンすると、コードで指定したパスワードを使用してこの新しいネットワークに接続できるようになります。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-4.png" alt="pir" width="{300}" height="auto" /></div>

これで、シリアルモニター上の**ホスト接続数**が**1**に更新されていることが確認できます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-5.png" alt="pir" width={700} height="auto" /></div>

## XIAO ESP32C3 & Home Assistant

XIAO ESP32C3がESPHomeおよびHome Assistantに対応したことをお知らせします！

このセクションの詳細については、関連するチュートリアルをご参照ください。

- [GroveモジュールをESPHomeを使用してHome Assistantに接続する](https://wiki.seeedstudio.com/ja/Connect-Grove-to-Home-Assistant-ESPHome/)
- [LinkStar Home Assistant](https://wiki.seeedstudio.com/ja/h68k-ha-esphome/)

## 参考資料

- [Wi-Fi API - esp-arduino](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/wifi.html)

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