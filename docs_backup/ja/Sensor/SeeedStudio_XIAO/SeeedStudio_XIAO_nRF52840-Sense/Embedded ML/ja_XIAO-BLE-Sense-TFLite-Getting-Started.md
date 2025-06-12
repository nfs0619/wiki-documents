---
description: はじめに
title: TensorFlow Lite を Seeed Studio XIAO nRF52840 Sense で始める
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO-BLE-Sense-TFLite-Getting-Started
last_update:
  date: 05/15/2025
  author: shuxu hu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# TensorFlow Lite を Seeed Studio XIAO nRF52840 Sense で始める

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite-thumb.jpg" alt="pir" width={1000} height="auto" /></p>

このウィキでは、Seeed Studio XIAO nRF52840 Sense 上で TensorFlow Lite を使用し、内蔵加速度センサーを用いてパンチや屈曲といったジェスチャーを検出する方法を説明します。ここでは、データのトレーニングはデバイス上で行います。

> 組み込み AI アプリケーションには、「Seeed nrf52 mbed-enabled Boards Library」の使用を強くお勧めします。

## ソフトウェアのセットアップ

まず、初期のハードウェアおよびソフトウェアのセットアップについては、["Getting Started with Seeed Studio XIAO nRF52840 (Sense)"](https://wiki.seeedstudio.com/ja/XIAO-BLE-Sense-Getting-Started) ウィキを参照してください。

それでは、残りのソフトウェアセットアップに進みましょう。

- **ステップ 1**. [Seeed_Arduino_LSM6DS3 ライブラリ](https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3) を zip ファイルとしてダウンロードします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/LSM6DS3-github-zip.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 2**. [tflite-micro-arduino-examples ライブラリ](https://github.com/lakshanthad/tflite-micro-arduino-examples) を zip ファイルとしてダウンロードします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/tflite-micro-github.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 3**. Arduino IDE を開き、`スケッチ > ライブラリをインクルード > .ZIP ライブラリを追加...` を選択し、ダウンロードした zip ファイルを順番に開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 4.** `ファイル > スケッチ例 > Seeed Arduino LSM6DS3 > IMU_Capture` に移動して **IMU_Capture.ino** を開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/select-IMUCapture-2.png" alt="pir" width={500} height="auto" /></p>

- **ステップ 5.** コードをアップロードし、**シリアルモニタ**を開きます

**注意:** コードをアップロードした後、自動的には実行されません。Arduino ウィンドウの右上にある **シリアルモニタ** をクリックする必要があります。

## データのトレーニング

### パンチ動作

シリアルモニタを開いた状態で、パンチ動作のデータトレーニングを開始します。

- **ステップ 1.** Seeed Studio XIAO nRF52840 Sense を手のひらに持ち、前方にパンチを始めると、シリアルモニタにデータが表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/train-punch.gif" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/punch-serial.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 2.** パンチ動作を約 10 回繰り返すと、各パンチ後に新しいデータが生成されます

- **ステップ 3.** シリアルモニタの出力全体をコピーしてテキストファイルに貼り付け、ファイルを **punch.csv** として保存します

**注意:** **aX,aY,aZ,gX,gY,gZ** を含む最初の行も必ずコピーしてください。

### 屈曲動作

- **ステップ 1.** USB ケーブルを Seeed Studio XIAO nRF52840 Sense に再接続し、シリアルモニタを開き、Seeed Studio XIAO nRF52840 Sense を手のひらに持って内側に屈曲を始めると、シリアルモニタにデータが表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/train-flex.gif" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/flex-serial.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 2.** 屈曲動作を約 10 回繰り返すと、各屈曲後に新しいデータが生成されます

- **ステップ 3.** シリアルモニタの出力全体をコピーしてテキストファイルに貼り付け、ファイルを **flex.csv** として保存します

**注意:** **aX,aY,aZ,gX,gY,gZ** を含む最初の行も必ずコピーしてください。

## TensorFlow Lite モデルファイルの生成

ここでは、以前作成した **punch.csv** と **flex.csv** ファイルを使用して、TensorFlow Lite モデルファイル **(model.h)** を生成します。

- **ステップ 1.** [この Python ノートブック](https://colab.research.google.com/github/arduino/ArduinoTensorFlowLiteTutorials/blob/master/GestureToEmoji/arduino_tinyml_workshop.ipynb) を開きます。このノートブックは、必要な model.h ファイルを生成するのに役立ちます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TF-notebook-1.png" alt="pir" width={7500} height="auto" /></p>

- **ステップ 2.** 左側のナビゲーションパネルにあるファイルタブに移動し、**punch.csv** と **flex.csv** ファイルをドラッグ＆ドロップします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/drop-punch-flex.png" alt="pir" width={350} height="auto" /></p>

- **ステップ 3.** **Setup Python Environment** セクション内で、コードを **pip install tensorflow==2.0.0-rc1** から **pip install tensorflow** に変更します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/tensorflow-install.png" alt="pir" width={550} height="auto" /></p>

- **ステップ 4.** `Runtime > Run all` に移動して、すべてのコードセルを実行します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/run-all.png" alt="pir" width={450} height="auto" /></p>

- **ステップ 5.** エラーメッセージが表示されたら、**Run anyway** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/run-anyway.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 6.** すべてのコードセルが実行されると、以前見た **files** タブの下に新しい **model.h** ファイルが生成されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/model.h.png" alt="pir" width={350} height="auto" /></p>

**注意:** 上記の **model.h** ファイルが表示されない場合は、ページを更新してください。

- **ステップ 7.** ファイルを右クリックして **Download** を選択し、PCにファイルをダウンロードします。

## 推論

次に、ダウンロードした TensorFlow Lite モデルファイル **(model.h)** を使用して、Seeed Studio XIAO nRF52840 Sense でパンチとフレックスの動作を認識します。

- **ステップ 1.** **Seeed_Arduino_LSM6DS3** ライブラリのライブラリパスに移動します（通常は **Documents > Arduino > libraries > Seeed_Arduino_LSM6DS3** の下にあります）。そして **examples > IMU_Classifier** を開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/file-explorer-imu.png" alt="pir" width={650} height="auto" /></p>

- **ステップ 2.** **model.h** ファイルを、先ほどダウンロードしたものに置き換えます。

- **ステップ 3.** **IMU_Classifier.ino** をダブルクリックしてコードを開き、Seeed Studio XIAO nRF52840 Sense にアップロードします。

### パンチ動作

**シリアルモニター** を開き、パンチ動作を行います。**punch** の横に **1** に近い結果が表示されるのが確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/punch-result.png" alt="pir" width={300} height="auto" /></p>

### フレックス動作

フレックス動作を行います。**flex** の横に **1** に近い結果が表示されるのが確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/flex-result.png" alt="pir" width={300} height="auto" /></p>

## リソース

- **[ウェブページ]** [TensorFlow Lite ドキュメント](https://www.tensorflow.org/lite/guide)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>