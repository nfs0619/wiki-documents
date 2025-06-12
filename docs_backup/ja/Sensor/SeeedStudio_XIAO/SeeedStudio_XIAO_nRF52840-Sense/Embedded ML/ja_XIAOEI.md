---
description: エッジインパルスを使用したモーション認識
title: エッジインパルスを使用したモーション認識
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAOEI
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio XIAO nRF52840 Sense エッジインパルス入門

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/50.jpg" style={{width:1000, height:'auto'}}/></div>

このクイックスタートウィキへようこそ！ここでは、Seeed Studio XIAO nRF52840 Sense とエッジインパルスを使用して、オンボードのIMUセンサーを活用し、人間の動きを検出し、さまざまな動作を分類する方法を探ります。経験豊富な開発者でも初心者でも、このチュートリアルは、XIAO nRF52840 Sense ボードでエッジインパルスを使用するための知識とスキルを提供します。それでは、始めましょう！

<iframe width={560} height={315} src="https://www.youtube.com/embed/hLKKorpDlYw" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## はじめに

このウィキでは、Seeed Studio XIAO nRF52840 Sense の加速度センサーをエッジインパルスと組み合わせて使用し、モーション認識を実現する方法を紹介します。ここで紹介するコードは、最新バージョンの Seeed nRF52 Boards に対応しています。

> 組み込みAIアプリケーションに関しては、「Seeed nrf52 mbed-enabled Boards Library」の使用を強くお勧めします。

### ハードウェア

このウィキでは、以下の材料を準備する必要があります：

- [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- Li-poバッテリー (702025)
- [Grove - OLED Display 0.66"](https://www.seeedstudio.com/Grove-OLED-Display-0-66-SSD1306-v1-0-p-5096.html)
- デュポンケーブルまたはGroveケーブル
- 3Dプリントされたシェル
- ライトガイドプラスチックファイバー

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/BLEmotion.png" alt="pir" width={600} height="auto" /></p>

**ハードウェアのセットアップ**

- **ステップ 1**. Grove - OLED Display 0.66" のGroveベースをハンダゴテで取り外します。
- **ステップ 2**. デュポンケーブルを約3cmの長さに切り、両端の内側のケーブルを約2mm露出させます。
- **ステップ 3**. ファイバーを前面の小さな穴に通し、端をLEDに配置します。

- **ステップ 4**. 以下の図に従って、Seeed Studio XIAO nRF52840 Sense を他の要素とハンダ付けします：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition2.png" alt="pir" width={500} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition3.png" alt="pir" width={500} height="auto" /></p>

:::note
    ハンダ付け部分を強化するためにホットメルト接着剤を使用すると良いでしょう。
:::

- **ステップ 5**. すべてのコンポーネントを組み立てます：

  1. ファイバーをシェル前面の小さな穴に通します。
  2. 画面を固定位置に取り付けます。
  3. バッテリーを Seeed Studio XIAO nRF52840 と画面の間に挟みます。
  4. ワイヤーを慎重に処理します。
  5. ライトガイドプラスチックファイバーの端を Seeed Studio XIAO nRF52840 のRGBライトに配置し、余分を切り取ります。
  6. ケースを組み立てます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition4.png" alt="pir" width={400} height="auto" /></p>

組み立て後の状態：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition6.png" alt="pir" width={400} height="auto" /></p>

### ソフトウェア

必要なライブラリは以下の通りです。ここで提供されるコードを使用して、ハードウェアが正常に動作しているか確認することを強くお勧めします。ライブラリのインストールに関する問題がある場合は、[こちら](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)を参照してください。

- [Seeed_Arduino_LSM6DS3-master](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Seeed_Arduino_LSM6DS3-master.zip)
- [U8g2](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/U8g2.zip)

Seeed Studio XIAO nRF52840 Sense をエッジインパルスでセットアップするには、以下のソフトウェアをインストールする必要があります：

1. [Node.js v12](https://nodejs.org/en/) 以上。
2. [Arduino CLI](https://arduino.github.io/arduino-cli/latest/)
3. Edge Impulse CLI とシリアルモニター。以下のコマンドをコマンドプロンプトまたはターミナルで実行してインストールします：

```sh
npm install -g edge-impulse-cli 
```

:::note
CLI のインストールに問題がありますか？詳細については、[インストールとトラブルシューティング](https://docs.edgeimpulse.com/docs/cli-installation)を参照してください。
:::

## Edge Impulseへの接続

すべてのソフトウェアが準備できたら、開発ボードをEdge Impulseに接続します。

- **ステップ 1.** USB Type-Cケーブルを使用して、Seeed Studio XIAO nRF52840 Senseをコンピュータに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/bletpyecconnect.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2.** [Edge Impulse](https://studio.edgeimpulse.com/)で新しいプロジェクトを作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition9.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 3.** 「Accelerometer data」を選択し、「Let’s get started!」をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition10.png" alt="pir" width={1000} height="auto" /></p>


## データ収集とトレーニング

:::note
このステップでは、Seeed Studio XIAO nRF52840 SenseのオンボードIMUから「加速度計データ」を収集し、データセットを構築してから、Edge Impulseプラットフォームでモデルをトレーニングします。
:::

- **ステップ 4.** 「Accelerometer Raw Data」スケッチをSeeed Studio XIAO nRF52840 Senseにアップロードします。

[Seeed_Arduino_LSM6DS3ライブラリをダウンロード](https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3)し、ZIPファイルとして保存します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/LSM6DS3-github-zip.png" alt="pir" width={1000} height="auto" /></p>

Arduino IDEを開き、`スケッチ > ライブラリをインクルード > .ZIP形式のライブラリを追加...`を選択し、ダウンロードしたZIPファイルを開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

以下のコードをアップロードし、**シリアルモニタ**を開きます。

```cpp
// XIAO BLE Sense LSM6DS3 Accelerometer Raw Data 

#include "LSM6DS3.h"
#include "Wire.h"

// LSM6DS3クラスのインスタンスを作成
LSM6DS3 myIMU(I2C_MODE, 0x6A);  // I2Cデバイスアドレス 0x6A

#define CONVERT_G_TO_MS2 9.80665f
#define FREQUENCY_HZ 50
#define INTERVAL_MS (1000 / (FREQUENCY_HZ + 1))

static unsigned long last_interval_ms = 0;

void setup() {
  Serial.begin(115200);
  while (!Serial)
    ;

  if (myIMU.begin() != 0) {
    Serial.println("デバイスエラー");
  } else {
    Serial.println("デバイスOK!");
  }
}

void loop() {
  if (millis() > last_interval_ms + INTERVAL_MS) {
    last_interval_ms = millis();
    Serial.print(myIMU.readFloatAccelX() * CONVERT_G_TO_MS2, 4);
    Serial.print('\t');
    Serial.print(myIMU.readFloatAccelY() * CONVERT_G_TO_MS2, 4);
    Serial.print('\t');
    Serial.println(myIMU.readFloatAccelZ() * CONVERT_G_TO_MS2, 4);
  }
}
```

シリアルモニタに、以下のように加速度計とジャイロスコープのデータが順番に表示されます。

<p style={{textAlign: 'center'}}><img src="https://workshop.makergram.com/assets/images/raawIMUSerial-095365f65dd0cde808620906ab5a7ab8.png" alt="IMU Raw" width={800} height="auto" /></p>

- **ステップ 5.** `terminal`、`cmd`、または`powershell`で以下のコマンドを実行して開始します。

```
edge-impulse-data-forwarder
```

- **ステップ 6.** CLIを使用してSeeed Studio XIAO nRF52840 SenseをEdge Impulseに接続します。まずアカウントにログインし、プロジェクトを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition11.png" alt="pir" width={800} height="auto" /></p>

加速度計とデバイスの名前を設定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition12.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 7.** XIAO nRF52840 SenseをEdge Impulseに接続します。

Edge Impulseの「Data acquisition」ページに移動し、接続が成功すると以下のような結果が表示されます。ページの右側に"Seeed Studio XIAO nRF52840 Sense"デバイスが表示されます。

- **ステップ 8.** センサーを「3 axes」に設定します。ラベルを`up`と`down`に設定し、サンプル長（ms）を20000に変更して「Start sampling」をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition13.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 9.** Seeed Studio XIAO nRF52840 Senseを上下に振り、20秒間その動きを続けます。収集結果は以下のように表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition14.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 10.** 生データの右上をクリックして「Split Sample」を選択し、データを分割します。「+Add Segment」をクリックしてグラフを選択します。これを20回以上繰り返してセグメントを追加します。「Split」をクリックすると、1秒ごとのサンプルデータが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition30.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 11.** **ステップ 8**と**ステップ 9**を繰り返し、異なる名前でデータにラベルを付けて、異なる動作データを収集します（例：`left`と`right`、`clockwise`、`anticlockwise`など）。例として、上下、左右、円運動を分類していますが、必要に応じて変更可能です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition16.png" alt="pir" width={1000} height="auto" /></p>

:::note
ステップ9では、分割時間が1秒であるため、ステップ8で1秒間に少なくとも1回上下運動を行う必要があります。そうしないと、結果が正確になりません。また、動作速度に応じて分割時間を調整することができます。
:::

## 機械学習モデルの構築

- **ステップ 12.** データセットをリバランスするには、**Dashboard** をクリックし、ドロップダウンページから **Perform train** / **test split** を見つけます。

**Perform train / test split** をクリックし、「Yes」を選択して確認します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition17.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 13.** インパルスを作成する

**Create impulse** をクリック -> 処理ブロックを追加 -> **Spectral Analysis** を選択 -> 学習ブロックを追加 -> **Classification (Keras)** を選択 -> インパルスを保存

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew1.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 14.** スペクトル特徴

クリックして設定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew2.png" alt="pir" width={800} height="auto" /></p>

**Spectral features** をクリック -> ドロップダウンページで **Save parameters** をクリック -> **Generate features** をクリック

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew3.png" alt="pir" width={800} height="auto" /></p>

出力ページは以下のようになります：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew4.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 15.** モデルをトレーニングする

**NN Classifier** をクリック -> **Start training** をクリック -> **Unoptimized (float32)** を選択

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew5.png" alt="pir" width={800} height="auto" /></p>

:::note
トレーニングモデルの精度は最終結果に非常に重要です。出力トレーニング結果が65%未満の場合は、再トレーニングを強くお勧めします。
:::

## Seeed Studio XIAO nRF52840 Sense へのデプロイ

- **ステップ 16.** モデルテスト

**Model testing** をクリック -> **Classify all** をクリック

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition23.png" alt="pir" width={800} height="auto" /></p>

:::note
精度が低い場合は、トレーニングセットを増やし、サンプル時間を延長することでデータセットを確認できます。
:::

- **ステップ 17.** Arduino ライブラリをビルドする

**Deployment** をクリック -> **Arduino Library** をクリック -> **Build** をクリック -> .ZIP ファイルをダウンロード

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew7.png" alt="pir" width={400} height="auto" /></p>

- **ステップ 18.** .ZIP ファイルの名前は非常に重要です。デフォルトでは Edge Impulse プロジェクトの名前として設定されています。ここではプロジェクト名が "XIAO-BLE-gestures_inferencing" です。ファイルを選択して、Arduino ライブラリに「.ZIP ファイルを追加」します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition35.png" alt="pir" width={300} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition36.png" alt="pir" width={500} height="auto" /></p>

- **ステップ 19.** [ここ](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEI.ino) からコードをダウンロードします。ヘッダーファイルの名前を自分の名前に変更し、アップロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition33.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 20.** Seeed Studio XIAO nRF52840 Sense を動かしたり保持したりして、結果を確認します：

Arduino の右上隅にあるモニターをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew15a.png" alt="pir" width={800} height="auto" /></p>

Seeed Studio XIAO nRF52840 Sense を**左右方向**に動かすと：

モニターは以下のように出力します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew11a.png" alt="pir" width={500} height="auto" /></p>

出力表示は以下のようになります：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew14a.png" alt="pir" width={300} height="auto" /></p>

Seeed Studio XIAO nRF52840 Sense を**上下方向**に動かすと：

モニターは以下のように出力します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew9a.png" alt="pir" width={500} height="auto" /></p>

出力表示は以下のようになります：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew12a.png" alt="pir" width={300} height="auto" /></p>

Seeed Studio XIAO nRF52840 Sense を**アイドル状態で保持**すると：

モニターは以下のように出力します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew10a.png" alt="pir" width={500} height="auto" /></p>

出力表示は以下のようになります：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew13a.png" alt="pir" width={300} height="auto" /></p>

おめでとうございます！プロジェクトの最後まで達成しました。さらに多くの方向を試し、どの方向が最良の出力を示すかを確認することをお勧めします。

## リソース

- [Seeed Studio XIAO nRF52840 ケースファイル](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/xiao-case-pink.stl)

## 技術サポート & 製品ディスカッション

.

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>