---
description: XIAO nRF52840 (Sense) の NFC 使用方法
title: 両バージョンの NFC 使用方法
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO-BLE-Sense-NFC-Usage
last_update:
  date: 05/15/2025
  author: Matthew
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio XIAO nRF52840 (Sense) の NFC 使用方法

<!-- :::note
Seeed Studio XIAO nRF52840 ボードの NFC 機能は現在一時的に動作していません。新しい NFC ライブラリがリリースされ次第、新しい Wiki が更新されます。
::: -->

:::note
Seeed nRF52 Boards バージョン 1.1.3 と Seeed nRF52 mbed-enabled Boards バージョン 2.9.2 はテスト済みで承認されています。
:::

**Seeed Studio XIAO nRF52840** および **Seeed Studio XIAO nRF52840 Sense** の両方には **NFC (近距離無線通信) モジュール**が搭載されています。この Wiki では、これらのボードで NFC を使用する方法を紹介します。ここでは、NFC アンテナにスマートフォンを置いた後、ボードからスマートフォンにテキスト文字列を送信する基本的な例を示します。

## 準備作業

> NFC 機能は "Seeed nRF52 mbed-enabled Boards Library" を使用することで良好に動作します。

ボードライブラリのインストールについては、[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_BLE/#software-setup)を参照してインストールを完了してください。すでにインストール済みの場合は、プロジェクトを進めることができます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new7.png" /></div>

## 必要なハードウェア

- 1 x [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) または [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- 1 x NFC アンテナ
- 1 x USB Type-C ケーブル
- 1 x スマートフォン

## 必要なソフトウェア

- [NFC TagInfo App (Android)](https://play.google.com/store/apps/details?id=com.nxp.taginfolite&hl=en&gl=US)
- [NFC TagInfo App (Apple)](https://apps.apple.com/us/app/nfc-taginfo-by-nxp/id1246143596)

## ハードウェア接続

NFC アンテナを Seeed Studio XIAO nRF52840 (Sense) に以下のようにハンダ付けします：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFC-antenna-3.png" alt="pir" width={550} height="auto" /></p>

## NFC を使用してテキスト文字列を送信する

- **ステップ 1.** Arduino IDE を開き、以下のコードをアップロードします

```cpp
#include <NFCT.h>

void setup() { 
  // NFC メッセージを最初のパラメータとして設定し、言語コードを2番目のパラメータとして設定
  NFC.setTXTmessage("Hello World!", "en");
  // NFC モジュールを開始
  NFC.start();
}

void loop() {
}

```

ここでは単純にテキスト文字列 "Hello World!" を送信します。

- **ステップ 2.** "NFC TagInfo" モバイルアプリを開き、**Scan & Launch** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFCconnect3.jpg" alt="pir" width={300} height="auto" /></p>

- **ステップ 3.** NFC アンテナをスマートフォンの近くに置くと、以下の出力が表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFCconnect2.png" alt="pir" width={850} height="auto" /></p>