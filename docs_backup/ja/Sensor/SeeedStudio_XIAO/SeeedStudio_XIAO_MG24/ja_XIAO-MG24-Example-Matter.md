---
description: XIAO MG24 サンプル - Matter
title: Seeed Studio XIAO MG24 サンプル - Matter
image: https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/top.jpg
slug: /ja/xiao_mg24_matter
sidebar_position: 2
last_update:
  date: 05/15/2025
  author: Spencer
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

Matterは、スマートホーム技術のための**オープンソースで統一された標準**であり、デバイスやエコシステム間の相互運用性を促進します。Connectivity Standards Alliance (CSA) によって開発され、インターネット接続を必要とせずに、さまざまなメーカーのデバイス間でシームレスな通信を可能にします。Matterは、Apple HomeKit、Google Home、Amazon Alexaなどのプラットフォームとネイティブに互換性があり、スマートホーム環境でのデバイス統合を容易にします。Matterについての詳細は、[公式Matterドキュメント](https://project-chip.github.io/connectedhomeip-doc/index.html)をご参照ください。

> 2024年[^1]、Silicon LabsとArduinoはMatterの採用障壁を下げるために協力し、ArduinoエコシステムでMatterを簡単に使用できる開発パスを提供しました。このコラボレーションは、Matter開発をよりアクセスしやすくし、Arduino開発者が一般的な課題を克服し、Matterをスムーズに採用できるよう支援することを目的としています。

[^1]: [Silicon LabsとArduinoがMatterを民主化するために提携 - 2024年2月6日](https://news.silabs.com/2024-02-06-Silicon-Labs-and-Arduino-Partner-to-Democratize-Matter)

Matterはローカルネットワーク上で効率的に動作し、インターネットアクセスを必要とせずに信頼性が高く低遅延の通信を提供します。この機能により、セキュリティとデバイスのパフォーマンスが大幅に向上します。

このドキュメントでは、Arduinoを使用してXIAO MG24上でMatterアプリケーションを開発する手順を案内します。

## 必要条件

XIAO MG24上でMatterアプリケーションを開発するには、以下のハードウェアおよびソフトウェアコンポーネントを準備してください。

### ハードウェア

- **Seeed Studio XIAO MG24** ボード
- Matterネットワークに接続するための**対応するMatter Hub**（例：Apple HomePod mini）
- Matter対応デバイスを管理および操作するための**Matter Controller**（例：Apple HomeKitアプリ）

以下の表[^2]は、さまざまなエコシステムでのMatter対応ハブの例を示しています：

| メーカー / エコシステム | デバイス                     |
| ------------------------ | -------------------------- |
| Google Home              | Nest Hub Gen2              |
| Apple HomeKit            | HomePod Gen2, HomePod mini |
| Amazon Alexa             | Echo Gen4                  |
| Raspberry Pi OTBR        | Raspberry Pi               |

デフォルトでは、少なくとも1つの[Matter Hub](https://en.wikipedia.org/wiki/Matter_(standard)#Supported_ecosystems_and_hubs)と1つのMatter Controller（例：HomeKitをインストールしたiPhone）がテスト用に準備されていることを前提としています。

[^2]: [README - Arduino Matterライブラリ](https://github.com/SiliconLabs/arduino/blob/main/libraries/Matter/readme.md)

### ソフトウェア

必要なソフトウェアには、**Silicon LabsのArduino Coreを備えたArduino IDE**が含まれます：

- まだインストールされていない場合は、[Silicon Labs Arduino Core](https://github.com/SiliconLabs/arduino)をダウンロードしてセットアップし、XIAO MG24との互換性を確保してください。
- 詳細なセットアップ手順については、[Getting Started Guide](/xiao_mg24_getting_started/#add-board)をご参照ください。

Matterプロトコルスタックを選択することを忘れないでください：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-arduino-tool-option.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>

## Matter Bulb Example を使ったクイックスタート

[Matter Light Bulb Example](https://github.com/Silabs/arduino-matter/tree/main/examples/MatterLightBulb) は、シンプルな Matter アプリケーションを示しており、Matter ネットワークを介して `内蔵 LED` を制御することができます。この例は、XIAO MG24 上での Matter 統合に初めて取り組む開発者にとって、実践的な出発点となります。

Arduino IDE で例を開くには以下を参照してください：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-bulb-example.png" style={{width:480, height:'auto', "border-radius": '12.8px'}}/></div>

利便性を高めるため、例のコード内でデバイス名を変更する方法を以下に示します。これにより、個別のセットアップが可能になります。

```cpp
/*
   Matter lightbulb example

   この例では、Arduino Matter API を使用してシンプルなオン/オフの電球を作成する方法を示します。

   この例を使用すると、Matter を介してオンボード LED を制御できます。
   デバイスは最初に Matter ハブに登録する必要があります。

   作成者: Tamas Jozsi (Silicon Labs)
   修正者: Spencer Y (Seeed Studio)
 */
#include <Matter.h>
#include <MatterLightbulb.h>

MatterLightbulb matter_bulb;

void setup()
{
  Serial.begin(115200);
  Matter.begin();
  matter_bulb.begin();

  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);

  Serial.println("Matter lightbulb");

  matter_bulb.set_device_name("XIAO MG24 bulb");    // デフォルトのデバイス名をカスタマイズ
  matter_bulb.set_vendor_name("Seeed Studio");      // ベンダー名を設定
  matter_bulb.set_product_name("Seeed Matter Lightbulb"); // 製品名を定義

  if (!Matter.isDeviceCommissioned()) {
    Serial.println("Matter デバイスは登録されていません");
    Serial.println("手動ペアリングコードまたは QR コードを使用して Matter ハブに登録してください");
    Serial.printf("手動ペアリングコード: %s\n", Matter.getManualPairingCode().c_str());
    Serial.printf("QR コード URL: %s\n", Matter.getOnboardingQRCodeUrl().c_str());
  }
  while (!Matter.isDeviceCommissioned()) {
    delay(200);
  }

  Serial.println("Thread ネットワークを待機中...");
  while (!Matter.isDeviceThreadConnected()) {
    delay(200);
  }
  Serial.println("Thread ネットワークに接続されました");

  Serial.println("Matter デバイスの検出を待機中...");
  while (!matter_bulb.is_online()) {
    delay(200);
  }
  Serial.println("Matter デバイスがオンラインになりました");
}

void loop()
{
  static bool matter_lightbulb_last_state = false;
  bool matter_lightbulb_current_state = matter_bulb.get_onoff();

  // 状態が ON で、前回の状態が OFF の場合に LED を点灯
  if (matter_lightbulb_current_state && !matter_lightbulb_last_state) {
    matter_lightbulb_last_state = matter_lightbulb_current_state;
    digitalWrite(LED_BUILTIN, LED_BUILTIN_ACTIVE);
    Serial.println("Bulb ON");
  }

  // 状態が OFF で、前回の状態が ON の場合に LED を消灯
  if (!matter_lightbulb_current_state && matter_lightbulb_last_state) {
    matter_lightbulb_last_state = matter_lightbulb_current_state;
    digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
    Serial.println("Bulb OFF");
  }
}
```

### ファームウェアの書き込み

1. コードを Arduino IDE にコピーし、XIAO MG24 ボードにアップロードします。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-lightbulb-flash.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>
2. ファームウェアを書き込んだ後、`RESET` ボタンを押すか、XIAO MG24 を再接続してボードを再起動します。
3. シリアルモニタを開いてセットアップを確認します。以下のような出力が表示されるはずです：

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-qr-url.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>

### 登録用 QR コード

シリアルモニタには、デバイス登録に必要な QR コードを生成するための URL が表示されます。この URL をコピーしてブラウザに貼り付け、生成された QR コードを Matter コントローラー（例：HomeKit）でスキャンしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-qr-scan.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>

### デバイスのテスト

QR コードをスキャンした後、Matter コントローラー（HomeKit）はデバイスの識別を確認するよう求めます。確認が完了すると、アプリ内にデバイスが表示されます。これで、XIAO MG24 の内蔵 LED を制御し、アプリインターフェースから直接その応答性をテストすることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-device-online.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>

<iframe
  className="youtube-video-r"
  src="https://youtube.com/embed/tmCpIWuRojQ"
  title="MG24 Matter Lightbulb Example"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  style={{ width: '380px', height: '640px' }}
></iframe>

## 参考文献とリソース

Matterに初めて触れる方は、以下のリソースがMatterエコシステム内での基礎知識と開発サポートを提供します：

- **[クイックスタートガイド](https://docs.silabs.com/matter/2.2.0/matter-fundamentals/)**: Matterの基本概念とエコシステムの主要コンポーネントを学ぶための理想的な出発点です。
- **[Matter開発者ジャーニー](https://www.silabs.com/wireless/matter/matter-developer-journey)**: 必要なツール、リソース、効果的な実装のためのベストプラクティスを含む、Matter開発プロセスの包括的なガイドです。
- **[Matter仕様書](https://csa-iot.org/developer-resource/specifications-download-request/)**: Matterプロトコルとそのコンポーネントに関する技術仕様書です。このリソースは、プロトコルの機能と運用の詳細を理解するための主要な資料です。
- **[デバイスデータモデル - Google Home Developers](https://developers.home.google.com/matter/primer/device-data-model)**: デバイスの機能や特性がMatterエコシステム内でどのように標準化されているかを詳しく説明した資料です。
- **[Matter開発フレームワーク概要](/matter_development_framework)**: XIAO ESP32C6向けのMatter開発フレームワークに特化したガイドで、Matterデバイス開発の代替アプローチを提供します。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>