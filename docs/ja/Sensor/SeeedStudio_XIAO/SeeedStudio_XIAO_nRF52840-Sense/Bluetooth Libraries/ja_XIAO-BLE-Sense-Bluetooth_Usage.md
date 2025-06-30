---
description: Seeed nRF52 Boards Library 用
title: Seeed nRF52 Boards Library 用
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO-BLE-Sense-Bluetooth_Usage
last_update:
  date: 05/15/2025
  author: shuxu hu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Bluetooth 使用方法 (Seeed nRF52 Boards Library)

**Seeed Studio XIAO nRF52840** および **Seeed Studio XIAO nRF52840 Sense** はどちらも Bluetooth 接続をサポートしています。この Wiki では、"Seeed nRF52 Boards Library" を使用した基本的な Bluetooth 機能を紹介します。

## はじめに

### 必要なハードウェア

- 1 x [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) または [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- 1 x Bluetooth 接続可能なスマートフォン
- 1 x USB Type-C ケーブル

### 必要なソフトウェア

- [nRF Connect for Mobile (Android)](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp)
- [LightBlue App (Apple)](https://apps.apple.com/us/app/lightblue/id557428110)

### インストール

> 使用する機能は "Seeed nRF52 Boards Library" に含まれているため、別のサードパーティライブラリをインストールする必要はありません。このステップをスキップできます。

- **方法 1** (以下のコードライブラリの両方に適用可能)

ZIP ライブラリをダウンロードしたら、Arduino IDE を開き、**スケッチ > ライブラリをインクルード > .ZIP ライブラリを追加** をクリックします。ダウンロードした ZIP ファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウに **ライブラリがライブラリに追加されました** と表示されます。これでライブラリが正常にインストールされたことを意味します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" /></div>

- **方法 2** (ArduinoBLE ライブラリのみインストール可能)

ライブラリマネージャーは Arduino IDE バージョン 1.5 以降 (1.6.x) で追加されました。これは 'スケッチ' メニューの 'ライブラリをインクルード'、'ライブラリを管理...' の下にあります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/seeed_logo/Library.jpg" /></div>

ライブラリマネージャーを開くと、ワンクリックでインストール可能なライブラリのリストが表示されます。製品用のライブラリを見つけるには、製品名や 'k type'、'digitizer' などのキーワードで検索してください。目的のライブラリが表示されたら、それをクリックすると 'インストール' ボタンが表示されます。そのボタンをクリックすると、ライブラリが自動的にインストールされます。インストールが完了したら、ライブラリマネージャーを閉じます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRF.png" /></div>

## アプリケーション例

ここでは Bluetooth アプリケーションを紹介します。

### ワイヤレスで PC キーボードをモバイルフォンに接続する

**ステップ 1.** Arduino アプリケーションを起動します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>

**ステップ 2.** 開発ボードモデルを選択し、Arduino IDE に追加します。ここでは "Seeed nRF52 Boards Library" を使用します。

> ボードライブラリのインストールについては、[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_BLE/#software-setup) を参照してインストールを完了してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new.png" /></div>

**ステップ 3.** **"ファイル -> スケッチ例 -> Adafruit Bluefruit nRF52 Libraries -> Peripheral -> blehid_keyboard"** に移動し、"blehid_keyboard" の例ファイルを開きます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new1.png" /></div>

**ステップ 4.** "アップロード" をクリックし、その後 Arduino IDE の右上隅にある "モニター" を開きます。モニターは次のように表示されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new3.png" /></div>

**ステップ 5.** モバイルフォンで "nRF Connect for Mobile" アプリまたは "LightBlue" アプリを開きます。同時に、スマートフォンが Bluetooth に接続されていることを確認してください。しばらくすると、"XIAO nRF52840" という名前のデバイスがリストに表示されます。

- **nRF Connect for Mobile アプリ** の場合は次のようになります：

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new5.jpg" /></div>

- **LightBlue アプリ** の場合は次のようになります：

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new4.jpg" /></div>

**ステップ 6.** デバイスをクリックすると接続が自動的に完了します。その後、PC キーボードでモニターに文字を入力し、モバイルフォンでその結果を確認できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new6.gif" /></div>

## その他の情報

さらに多くの例を試したい場合は、`ファイル > スケッチ例 > INCOMPATIBLE > ArduinoBLE` に移動し、**ArduinoBLE** の下にあるすべての例を確認してください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>