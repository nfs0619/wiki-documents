---
description: Seeed Studio XIAO nRF52840 Senseでの6軸IMUの使用方法
title: XIAO nRF52840 SenseのIMU使用方法
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO-BLE-Sense-IMU-Usage
last_update:
  date: 05/15/2025
  author: shuxu hu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio XIAO nRF52840 Senseでの6軸IMUの使用方法

**Seeed Studio XIAO nRF52840 Sense**には、高精度な**6軸慣性計測ユニット（IMU）**が搭載されています。このIMUには、**3軸加速度計**と**3軸ジャイロスコープ**が含まれており、さらに**内蔵温度センサー**も備えています。このモジュールは、TinyMLプロジェクトに大いに役立つと考えています。本Wikiでは、このボード上でIMUを使用する基本的な方法を紹介します。

**注意**

- **Seeed Studio XIAO nRF52840**には、このIMUモジュールは搭載されていません。
- IMU機能は「Seeed nrf52 mbed-enabled Boards Library」を使用することでより良いパフォーマンスを発揮します。そのため、このライブラリの使用を強くお勧めします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new7.png" alt="pir" width={600} height="auto" /></p>


## シリアルモニターで加速度計、ジャイロスコープ、温度データを表示する

この例では、Arduinoシリアルモニターを使用して、Seeed Studio XIAO nRF52840 Senseから加速度計、ジャイロスコープ、温度データを表示します。

- **ステップ1**. [Seeed_Arduino_LSM6DS3ライブラリ](https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3)をzipファイルとしてダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/LSM6DS3-github-zip.png" alt="pir" width={1000} height="auto" /></p>


- **ステップ2**. Arduino IDEを開き、`スケッチ > ライブラリをインクルード > .ZIP形式のライブラリを追加...`を選択し、ダウンロードしたzipファイルを開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>


- **ステップ3.** `ファイル > スケッチ例 > Accelerometer And Gyroscope LSM6DS3 > HighLevelExample`に移動し、**HighLevelExample**を開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/IMU-install.png" alt="pir" width={550} height="auto" /></p>


- **ステップ4.** コードをアップロードし、**シリアルモニター**を開きます。

**注意:** コードをアップロードしても、Arduinoウィンドウの右上にある**シリアルモニター**をクリックするまで自動的には実行されません。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/IMU-example-output.png" alt="pir" width={600} height="auto" /></p>

これで、上記のようにシリアルモニターに加速度計、ジャイロスコープ、温度データが順番に表示されるのが確認できます！

## その他の機能は？

さらに多くの例を試したい場合は、`ファイル > スケッチ例 > Accelerometer And Gyroscope LSM6DS3`に移動し、**Accelerometer And Gyroscope LSM6DS3**の下にあるすべての例を確認してください。