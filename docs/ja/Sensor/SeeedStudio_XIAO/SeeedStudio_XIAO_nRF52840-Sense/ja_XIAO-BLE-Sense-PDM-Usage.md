---
description: Seeed Studio XIAO nRF52840 SenseでのPDMマイクロフォンの使用
title: XIAO nRF52840 SenseのPDM使用法
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO-BLE-Sense-PDM-Usage
last_update:
  date: 05/15/2025
  author: Spencer
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio XIAO nRF52840 SenseでのPDMマイクロフォンの使用

## 概要

**Seeed Studio XIAO nRF52840 Sense**には、リアルタイムで音声データを受信し、音声認識に使用できる**PDM（パルス密度変調）マイクロフォン**が搭載されています。無線接続機能と、FPUによる音声データ処理の優れた性能を備えており、デバイスのリモート音声制御などの興味深いTinyMLプロジェクトに最適です。

:::note 注意

- **Seeed Studio XIAO nRF52840**には、このPDMマイクロフォンモジュールは搭載されていません。
- PDMマイクロフォンは、*Seeed nrf52 mbed-enabled Boards Library*を使用するとより良い性能を発揮するため、これを強く推奨します。

:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new7.png" alt="pir" width={680} height="auto" /></p>

このWikiでは、このボード上での**PDMマイクロフォンの使用方法**の基本を紹介し、以下の2つの例を含みます：

1. [生データの可視化](#demo1)：この例では、マイクロフォンからの生データをリアルタイムで可視化する方法を示します。
2. [録音した音声の保存](#demo2)：この例では、マイクロフォンから録音した音声をSDカードに保存する方法を示します。

それでは、これらの例を詳しく見ていきましょう！

## 例1: PDMマイクロフォンからの生データをリアルタイムで可視化する {#demo1}

この例では、**シリアルモニター**と**シリアルプロッター**を使用して、PDMマイクロフォンからの生データをリアルタイムで可視化します。

### 必要条件

- **ステップ1**. Arduinoライブラリを取得します。[Seeed_Arduino_Micライブラリをダウンロード](https://github.com/Seeed-Studio/Seeed_Arduino_Mic)し、zipファイルとして保存します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-zip.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ2**. Arduino IDEを開き、`スケッチ > ライブラリをインクルード > .ZIPライブラリを追加...`に移動し、ダウンロードしたzipファイルを開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

### 実行方法

- **ステップ3.** `ファイル > スケッチ例 > Seeed Arduino Mic > mic_serial_plotter`に移動し、**mic_serial_plotter**を開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-install.png" alt="pir" width={550} height="auto" /></p>

- **ステップ4.** コードをアップロードし、**シリアルモニター**を開きます。

:::note 注意
コードをアップロードしても、Arduinoウィンドウの右上にある**シリアルモニター**をクリックするまで自動的には実行されません。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-output-serial.png" alt="pir" width={550} height="auto" /></p>

これで、上記のようにシリアルモニターにリアルタイムでマイクロフォンの生データが表示されます！

### 生データの可視化

- **ステップ5.** `ツール > シリアルプロッター`に移動し、**シリアルプロッター**を開くと、リアルタイムで波形グラフとしてマイクロフォンの生データが表示されます！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-output-graph.png" alt="pir" width={700} height="auto" /></p>

## 例 2: マイクから録音した音声をSDカードに保存する {#demo2}

Seeed Studio XIAO シリーズと同様に、Seeed Studio XIAO nRF52840 Senseは[Seeeduino Seeed Studio XIAO 拡張ボード](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)と完全に互換性があります。この拡張ボードに取り付けることで、ボード上のSDカードモジュールを使用することができます。拡張ボードを使用しない場合は、**SPI**インターフェースを介して別のSDカードモジュールを接続することも可能です。

### 前提条件

- **ステップ 1.** Seeed Studio XIAO nRF52840 SenseをSeeed Studio XIAO 拡張ボードに取り付け、拡張ボードのSDカードスロットにSDカードを挿入します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SD-connect.png" alt="pir" width={500} height="auto" /></p>

:::tip

拡張ボードのライトが定期的に**緑色**に点滅している場合、接続は成功しています。

> 以前の例で*Seeed_Arduino_Mic Library*をインストール済みであれば、この例では再インストールする必要はありません。ただし、まだインストールしていない場合は、前の例の手順に従ってインストールしてください。
:::

- **ステップ 2.** [Seeed_Arduino_FS Libraryをダウンロード](https://github.com/Seeed-Studio/Seeed_Arduino_FS)し、zipファイルとして保存します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/arduino-fs-zip.png" alt="pir" width={1000} height="auto" /></p>

**注意:** このライブラリはSDカードにアクセスしてデータを保存するために必要です。

### 実行手順

- **ステップ 3.** Arduino IDEを開き、`スケッチ > ライブラリをインクルード > .ZIP形式のライブラリを追加...`を選択し、ダウンロードしたzipファイルを開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 4.** `ファイル > スケッチ例 > Seeed Arduino Mic > mic_Saved_OnSDcard`に移動し、**mic_Saved_OnSDcard**を開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-sd-install.jpg" alt="pir" width={550} height="auto" /></p>

- **ステップ 5.** コードをアップロードし、**シリアルモニター**を開きます。

### データの保存

**注意:** コードをアップロードしても、Arduinoウィンドウの右上にある**シリアルモニター**をクリックするまで自動的には実行されません。

これで音声データのサンプリングが開始され、5分間録音し、そのデータが自動的にSDカードに保存されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDMsavecodeoncard.png" alt="pir" width={800} height="auto" /></p>

この**test.9568.wav**は5秒間の音声ファイルで、SDカードに保存されています。

:::note 再サンプリングしますか？
音声データを再サンプリングしたい場合は、リセットボタンを押してから再度**シリアルモニター**をクリックしてサンプリングを開始してください。
:::