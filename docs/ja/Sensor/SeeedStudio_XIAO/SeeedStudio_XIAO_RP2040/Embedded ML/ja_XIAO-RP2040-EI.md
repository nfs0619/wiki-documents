---
description: Edge Impulseを使用した動作認識
title: Edge Impulseを使用した動作認識
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO-RP2040-EI
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# SEEED XIAO RP2040でのTinyML（動作認識）

このWikiでは、Seeed Studio XIAO RP2040に搭載された加速度センサーをEdge Impulseと組み合わせて使用し、動作認識を実現する方法を紹介します。ここで紹介するコードは、最新バージョンのXIAO RP2040ボードでサポートされています。

## 必要な材料

### ハードウェア

このWikiでは、以下の材料を準備する必要があります：

- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html)
- [Grove - Shield for Seeeduino Xiao](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)
- [Grove - 3-Axis Digital Accelerometer(±1.5g)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-1-5g.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao_rp2040_ei_all_in_one.jpg" alt="pir" width={800} height="auto" /></p>

**ハードウェアのセットアップ**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao_rp2040_ei_all_in_one_connect.jpg" alt="pir" width={400} height="auto" /></p>

### ソフトウェア

以下のライブラリが必要です。ここで提供されているコードを使用して、ハードウェアが正常に動作しているか確認することを強くお勧めします。ライブラリのインストールに問題がある場合は、[こちら](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)を参照してください。

- [Seeed_Arduino_LSM6DS3-master](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Seeed_Arduino_LSM6DS3-master.zip)

## 始めましょう

まず、ボードとディスプレイ画面が正常に動作しているか確認するためにいくつかのデモを実行します。問題がなければ、次の手順に進むことができます。

### 回路接続と加速度センサーの確認

Arduino IDEを開き、[スケッチ] -> [ライブラリを含める] -> [ライブラリを管理...]に移動し、ライブラリマネージャで`U8g2 library`を検索してインストールします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition29.png" alt="pir" width={400} height="auto" /></p>

インストール後、以下のコードをコピーして実行します。

```cpp
#include <Wire.h>
#include "MMA7660.h"
MMA7660 accelemeter;
#define CONVERT_G_TO_MS2    9.80665f

void setup() {
    Serial.begin(115200);
    while (!Serial);
    accelemeter.init();
}

 
void loop() {

    float ax, ay, az;
    accelemeter.getAcceleration(&ax, &ay, &az);

    Serial.print(ax * CONVERT_G_TO_MS2,4);
    Serial.print('\t');
    Serial.print(ay * CONVERT_G_TO_MS2,4);
    Serial.print('\t');
    Serial.println(az * CONVERT_G_TO_MS2,4);
    
}

```

コードをアップロードし、Seeed Studio XIAO RP2040を接続解除した後、シリアルモニターを開くと、以下のような出力が表示されます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao_rp2040_ei_serial_monitor.jpg" alt="pir" width={400} height="auto" /></p>

すべてが正常であれば、次に進み、Seeed Studio XIAO RP2040をEdge Impulseに接続します。

## Edge Impulseとの接続

トレーニングモデルの精度は最終結果にとって非常に重要です。もしトレーニング結果の精度が65%未満の場合、再トレーニングを行うか、データを追加することを強くお勧めします。

- **ステップ 1.** [Edge Impulse](https://studio.edgeimpulse.com/)で新しいプロジェクトを作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/01.jpg" alt="pir" width={800} height="auto" /></p>

- **ステップ 2.** 「Accelerometer data」を選択し、「Let’s get started!」をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/02.jpg" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/03.jpg" alt="pir" width={800} height="auto" /></p>

- **ステップ 3.** [Edge Impulse CLI](https://docs.edgeimpulse.com/docs/cli-installation)をコンピュータにインストールします。

- **ステップ 4.** `terminal`、`cmd`、または`powershell`で以下のコマンドを実行して開始します。

```bash
sudo edge-impulse-data-forwarder
```

- **ステップ 5.** CLIを使用してSeeed Studio XIAO RP2040をEdge Impulseに接続します。まずアカウントにログインし、プロジェクトを選択します。

加速度計とデバイスに名前を付けます。

Edge Impulseの「Data acquisition」ページに戻ると、接続が成功していれば次のように表示されます。ページの右側に「XIAO RP2040」というデバイスが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/04.jpg" alt="pir" width={800} height="auto" /></p>

- **ステップ 6.** センサーを「3 axes」に選択します。ラベルを`up`と`down`に設定し、サンプル長（ms）を20000に変更してサンプリングを開始します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/05.jpg" alt="pir" width={800} height="auto" /></p>

- **ステップ 7.** [Seeed Studio XIAO RP2040](https://wiki.seeedstudio.com/ja/XIAO-RP2040/)を上下に振り、20秒間その動きを続けます。取得したデータは次のように表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/06.jpg" alt="pir" width={800} height="auto" /></p>

- **ステップ 8.** 生データの右上をクリックして「Split Sample」を選択し、データを分割します。「+Add Segment」をクリックし、グラフをクリックします。これを20回以上繰り返してセグメントを追加します。「Split」をクリックすると、1秒ごとのサンプルデータが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/07.jpg" alt="pir" width={800} height="auto" /></p>

- **ステップ 9.** **ステップ 7.**と**ステップ 8.**を繰り返し、異なる名前でデータにラベルを付けて、異なる動作データを取得します（例：`circle`や`line`など）。例として、上下、左右、円の分類を行っていますが、必要に応じて変更可能です。

:::note
ステップ 8での分割時間は1秒です。つまり、ステップ 7で1秒間に少なくとも1回上下に振る必要があります。そうしないと、結果が正確になりません。また、動作速度に応じて分割時間を調整することができます。
:::

- **ステップ 10.** インパルスを作成します。

**Create impulse**をクリック -> 処理ブロックを追加 -> **Spectral Analysis**を選択 -> 学習ブロックを追加 -> **Classification (Keras)**を選択 -> インパルスを保存

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/08.jpg" alt="pir" width={800} height="auto" /></p>

- **ステップ 11.** スペクトル特徴

クリックして設定します。

**Spectral features**をクリック -> ページを下にスクロールして「Save parameters」をクリック -> **Generate features**をクリック

出力ページは次のようになります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/09.jpg" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/10.jpg" alt="pir" width={800} height="auto" /></p>

- **ステップ 12.** モデルをトレーニングします。

**NN Classifier**をクリック -> **Start training**をクリック -> **Unoptimized (float32)**を選択

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/11.jpg" alt="pir" width={800} height="auto" /></p>

- **ステップ 13.** モデルテスト

**Model testing**をクリック -> **Classify all**をクリック

**精度が低い場合は、トレーニングセットを増やしたり、サンプル時間を延長してデータセットを確認してください。**

モデルをダウンロードする際に評価結果も取得できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/12.jpg" alt="pir" width={800} height="auto" /></p>

- **ステップ 14.** Arduinoライブラリをビルドします。

**Deployment**をクリック -> **Arduino Library**をクリック -> **Build**をクリック -> .ZIPファイルをダウンロード

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/13.jpg" alt="pir" width={800} height="auto" /></p>

- **ステップ 15.** .ZIPファイルの名前は非常に重要です。デフォルトではEdge Impulseプロジェクトの名前に設定されています。ここではプロジェクト名が「RP2040」です。このファイルを選択して「.ZIPファイル」をArduinoライブラリに追加します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/14.jpg" alt="pir" width={800} height="auto" /></p>

- **ステップ 16.** Arduinoを開きます -> **Sketch**をクリック -> **Include Library**をクリック -> **ADD .ZIP Library**を選択

以下のコードをコピーします。Edge Impulseでプロジェクト名をカスタマイズしている場合、ZIPアーカイブのテキストも同じ名前になります。最初の`include`行を自分のヘッダーファイル名に変更してください。

```c
#include <XIAO_RP2040_inferencing.h> // カスタム名の場合、このヘッダーファイルを自分のファイル名に変更してください
#include <Wire.h>
#include "MMA7660.h"
MMA7660 accelemeter;

#define CONVERT_G_TO_MS2    9.80665f
#define MAX_ACCEPTED_RANGE  2.0f         

static bool debug_nn = false; 

void setup()
{
    Serial.begin(115200);
    while (!Serial);
    Serial.println("Edge Impulse Inferencing Demo");
    accelemeter.init();
}

float ei_get_sign(float number) {
    return (number >= 0.0) ? 1.0 : -1.0;
}

void loop()
{
    ei_printf("\nStarting inferencing in 2 seconds...\n");

    delay(2000);

    ei_printf("Sampling...\n");

    // IMUから読み取る値のためのバッファをここで確保します
    float buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE] = { 0 };

    for (size_t ix = 0; ix < EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE; ix += 3) {
        // 次のティックを決定（その後スリープ）
        uint64_t next_tick = micros() + (EI_CLASSIFIER_INTERVAL_MS * 1000);
        accelemeter.getAcceleration(&buffer[ix], &buffer[ix + 1], &buffer[ix + 2]);

        for (int i = 0; i < 3; i++) {
            if (fabs(buffer[ix + i]) > MAX_ACCEPTED_RANGE) {
                buffer[ix + i] = ei_get_sign(buffer[ix + i]) * MAX_ACCEPTED_RANGE;
            }
        }

        buffer[ix + 0] *= CONVERT_G_TO_MS2;
        buffer[ix + 1] *= CONVERT_G_TO_MS2;
        buffer[ix + 2] *= CONVERT_G_TO_MS2;

        delayMicroseconds(next_tick - micros());
    }

    // 生のバッファを信号に変換し、分類を実行
    signal_t signal;
    int err = numpy::signal_from_buffer(buffer, EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE, &signal);
    if (err != 0) {
        ei_printf("バッファから信号を作成できませんでした (%d)\n", err);
        return;
    }

    // 分類器を実行
    ei_impulse_result_t result = { 0 };

    err = run_classifier(&signal, &result, debug_nn);
    if (err != EI_IMPULSE_OK) {
        ei_printf("ERR: 分類器の実行に失敗しました (%d)\n", err);
        return;
    }

    // 予測結果を出力
    ei_printf("予測結果 ");
    ei_printf("(DSP: %d ms., 分類: %d ms., 異常値: %d ms.)",
        result.timing.dsp, result.timing.classification, result.timing.anomaly);
    ei_printf(": \n");
    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: %.5f\n", result.classification[ix].label, result.classification[ix].value);
    }
#if EI_CLASSIFIER_HAS_ANOMALY == 1
    ei_printf("    異常スコア: %.3f\n", result.anomaly);
#endif

}

```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/15.jpg" alt="pir" width={800} height="auto" /></p>

- **ステップ 17.** Seeed Studio XIAO RP2040 を動かすか保持し、結果を確認します：

Arduino の右上隅にあるモニターをクリックします。

Seeed Studio XIAO RP2040 を **円と線** の方向に動かすと：

モニターには以下のような出力が表示されます：

```bash
15:45:45.434 -> 
15:45:45.434 -> 2秒後に推論を開始します...
15:45:47.414 -> サンプリング中...
15:45:48.439 -> 予測結果 (DSP: 6 ms., 分類: 1 ms., 異常検出: 0 ms.): 
15:45:48.439 ->     Circle: 0.59766
15:45:48.439 ->     line: 0.40234
15:45:48.439 -> 
```

おめでとうございます！プロジェクトの最後まで達成しました。ぜひ他の方向も試してみて、どの方向が最も良い出力を得られるか確認してみてください。

## リソース

- [Seeed Studio XIAO RP2040](https://wiki.seeedstudio.com/ja/XIAO-RP2040/)
- [Edge Impulse CLI](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供できるよう、さまざまなサポートを用意しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
