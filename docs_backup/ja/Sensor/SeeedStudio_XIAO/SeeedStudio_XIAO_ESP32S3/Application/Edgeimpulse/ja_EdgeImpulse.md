---
description: EdgeImpulseの紹介。
title: Edgeimpulse
keywords:
- tinyml コース
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/edgeimpulse
last_update:
  date: 05/15/2025
  author: Salman
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## Edge Impulse

Edge Impulseは、エッジデバイス上での機械学習のための主要な開発プラットフォームであり、開発者に無料で提供され、世界中の企業に信頼されています。

* Edge Impulseを使用することで、ソフトウェア開発者、エンジニア、専門家は、博士号や高度な組み込み技術のスキルがなくても、エッジデバイス上で機械学習を活用して実際の問題を解決できます。初めての利用から生産環境でのMLOpsまで、Edge ImpulseはMCUからCPUまで幅広いハードウェアで最大の効率と速度を提供します。

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/MakerGram/workshops/main/docs/tiny-ml-workshop/img/edgeimpulse/EI_homepage.png" style={{width:1000, height:'auto'}}/></div> 

Edge Impulseを使用すると以下が可能です：
* デバイスから直接データセットを収集
* .zipファイル、API、または他のサードパーティクラウドからデータセットを収集
* テストデータとトレーニングデータを作成し、異なるラベルに分類
* モデルをトレーニング
* 適切な機械学習アルゴリズムを選択可能 - Edge Impulseはデータセットに基づいて推奨アルゴリズムを提供
* ハードウェア上にデプロイ
* TinyMLプロジェクトのバージョン管理によるコラボレーション
* その他、TinyMLアプリケーションの構築を支援する多くの機能

### 簡単なハンズオン体験

Edge Impulseの学習プロセス全体を進める前に、事前に生成されたArduinoライブラリを提供し、スケッチから直接XIAO ESP32S3 SenseにこのArduinoプログラムをフラッシュすることで結果を確認できます。

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/EdgeImpulse/src/img/EdegeImpulse-lib.png" style={{width:1000, height:'auto'}}/></div> 

### ArduinoでXIAO ESP32S3 Senseをセットアップ

Edge Impulseライブラリを使用する前に、Arduino IDEでXIAO ESP32S3をセットアップする必要があります。ガイドは[こちら](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/)をご覧ください。

#### Blink例をコンパイルしてアップロード

```cpp
// setup関数はリセットボタンを押すかボードに電源を入れたときに一度だけ実行されます
void setup() {
  // LED_BUILTINピンを出力として初期化
  pinMode(LED_BUILTIN, OUTPUT);
}

// loop関数は永遠に繰り返し実行されます
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);  // LEDをオンにする（HIGHは電圧レベル）
  delay(1000);                      // 1秒待機
  digitalWrite(LED_BUILTIN, LOW);   // LEDをオフにする（LOWは電圧レベル）
  delay(1000);                      // 1秒待機
}
```

アップロードする前に正しいボードとポートを選択してください。

#### ToDo
- [ ] Arduino IDEにXIAO ESP32S3ボードをインストール
- [ ] XIAO ESP32S3にBlink例をコンパイルしてアップロード

### 利用可能なEdge Impulseライブラリ

XIAO ESP32S3 Senseで直接動作するように検証および編集されたEdge ImpulseエクスポートArduinoライブラリを並行して進めています。ライブラリを使用することで、プログラム内でより多くの制御が可能となり、意思決定を行うことができます。

- [音声キーワード認識（Yes & No）Arduinoライブラリ](https://github.com/salmanfarisvp/TinyML/raw/main/XIAO-esp32-S3-Sense/KeyWordSpotting(KWS)/src/lib/XIAO_Esp32_KWS_inferencing.zip)
- [果物識別（リンゴ、バナナ、ブドウ）Arduinoライブラリ](https://files.seeedstudio.com/wiki/tinyml-topic/res/xiao-esp32s3-fruits-classify_inferencing.zip)

### Edge Impulse Arduinoライブラリの使用方法

一般的なArduinoライブラリと同様に、まずArduino IDEにインストールし、デモを実行するためのサンプルコードを使用します。

### 音声キーワード認識（Yes & No）Arduinoライブラリ

#### デモ

<iframe width="560" height="315" src="https://www.youtube.com/embed/oa0BGRXnb8w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### 仕組み

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/XIAO-esp32-S3-Sense/KeyWordSpotting(KWS)/src/img/KWS_Diagram.png" style={{width:1000, height:'auto'}}/></div> 

#### ステップ1. KWSデモライブラリをダウンロード
[音声キーワード認識（Yes & No）Arduinoライブラリ](https://github.com/salmanfarisvp/TinyML/raw/main/XIAO-esp32-S3-Sense/KeyWordSpotting(KWS)/src/lib/XIAO_esp32S3_YesNo_inferencing.zip)を.zip形式でダウンロードします。

#### ステップ2. ZIPライブラリをArduino IDEに追加

ZIPライブラリをダウンロードしたら、Arduino IDEを開き、Sketch > Include Library > Add .ZIP Libraryをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:1000, height:'auto'}}/></div> 

ダウンロードしたZIPファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウにライブラリが追加されたことが表示されます。これでライブラリが正常にインストールされたことを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/upload_complete.png" style={{width:1000, height:'auto'}}/></div> 

#### ステップ3. 推論スケッチを実行

```cpp
/* Edge Impulse Arduino examples
 * Copyright (c) 2022 EdgeImpulse Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 * このコードはMarcelo RovaiによってXIAO ESP32S3で動作するように適応されました。
 * 2023年5月29日
 * Salman Farisによって修正されました。
 * 2023年8月14日
 * 
 */

// メモリが制限されているターゲットの場合、このマクロを削除して10K RAMを節約
#define EIDSP_QUANTIZE_FILTERBANK 0

/*
 ** 注意: TFLiteアリーナ割り当て問題が発生した場合。
 **
 ** これは動的メモリの断片化による可能性があります。
 ** boards.local.txtに"-DEI_CLASSIFIER_ALLOCATION_STATIC"を定義してみてください（存在しない場合は作成）。
 ** このファイルを`<ARDUINO_CORE_INSTALL_PATH>/arduino/hardware/<mbed_core>/<core_version>/`にコピーしてください。
 **
 ** Arduinoがコアをインストールする場所については、以下を参照してください：
 ** (https://support.arduino.cc/hc/en-us/articles/360012076960-Where-are-the-installed-cores-located-)
 **
 ** 問題が解決しない場合、このモデルとアプリケーションには十分なメモリがありません。
 */

/* インクルード ---------------------------------------------------------------- */
#include <XIAO_esp32S3_YesNo_inferencing.h>

#include <I2S.h>
#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16

/** オーディオバッファ、ポインタ、セレクタ */
typedef struct {
  int16_t *buffer;
  uint8_t buf_ready;
  uint32_t buf_count;
  uint32_t n_samples;
} inference_t;

static inference_t inference;
static const uint32_t sample_buffer_size = 2048;
static signed short sampleBuffer[sample_buffer_size];
static bool debug_nn = false;  // 生の信号から生成された特徴などを表示する場合はtrueに設定
static bool record_status = true;

/**
 * @brief      Arduino setup関数
 */
void setup() {
  // 初回実行時のセットアップコード
  Serial.begin(115200);

  pinMode(LED_BUILTIN, OUTPUT);
  // USB接続を待機する場合は以下の行をコメントアウト
  while (!Serial)
    ;
  Serial.println("Edge Impulse Inferencing Demo");

  I2S.setAllPins(-1, 42, 41, -1, -1);
  if (!I2S.begin(PDM_MONO_MODE, SAMPLE_RATE, SAMPLE_BITS)) {
    Serial.println("Failed to initialize I2S!");
    while (1)
      ;
  }

  // 推論設定の概要（model_metadata.hから）
  ei_printf("Inferencing settings:\n");
  ei_printf("\tInterval: ");
  ei_printf_float((float)EI_CLASSIFIER_INTERVAL_MS);
  ei_printf(" ms.\n");
  ei_printf("\tFrame size: %d\n", EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE);
  ei_printf("\tSample length: %d ms.\n", EI_CLASSIFIER_RAW_SAMPLE_COUNT / 16);
  ei_printf("\tNo. of classes: %d\n", sizeof(ei_classifier_inferencing_categories) / sizeof(ei_classifier_inferencing_categories[0]));

  ei_printf("\nStarting continious inference in 2 seconds...\n");
  ei_sleep(2000);

  if (microphone_inference_start(EI_CLASSIFIER_RAW_SAMPLE_COUNT) == false) {
    ei_printf("ERR: Could not allocate audio buffer (size %d), this could be due to the window length of your model\r\n", EI_CLASSIFIER_RAW_SAMPLE_COUNT);
    return;
  }

  ei_printf("Recording...\n");
}

/**
 * @brief      Arduino main関数。推論ループを実行。
 */
void loop() {
  bool m = microphone_inference_record();
  if (!m) {
    ei_printf("ERR: Failed to record audio...\n");
    return;
  }

  signal_t signal;
  signal.total_length = EI_CLASSIFIER_RAW_SAMPLE_COUNT;
  signal.get_data = &microphone_audio_signal_get_data;
  ei_impulse_result_t result = { 0 };

  EI_IMPULSE_ERROR r = run_classifier(&signal, &result, debug_nn);
  if (r != EI_IMPULSE_OK) {
    ei_printf("ERR: Failed to run classifier (%d)\n", r);
    return;
  }

  int pred_index = 0;    // pred_indexを初期化
  float pred_value = 0;  // pred_valueを初期化

  // 予測結果を表示
  ei_printf("Predictions ");
  ei_printf("(DSP: %d ms., Classification: %d ms., Anomaly: %d ms.)",
            result.timing.dsp, result.timing.classification, result.timing.anomaly);
  ei_printf(": \n");
  for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
    ei_printf("    %s: ", result.classification[ix].label);
    ei_printf_float(result.classification[ix].value);
    ei_printf("\n");

    if (result.classification[ix].value > pred_value) {
      pred_index = ix;
      pred_value = result.classification[ix].value;
    }
  }

    // 推論結果を表示
    if ((pred_index == 0 && (pred_value > 0.8))) {
      digitalWrite(LED_BUILTIN, HIGH);  //オンにする
    } else if ((pred_index == 2) && (pred_value > 0.8)) {
      digitalWrite(LED_BUILTIN, LOW);  //オフにする
    } else {
      //何もしない
    }

#if EI_CLASSIFIER_HAS_ANOMALY == 1
    ei_printf("    anomaly score: ");
    ei_printf_float(result.anomaly);
    ei_printf("\n");
#endif
  }

  static void audio_inference_callback(uint32_t n_bytes) {
    for (int i = 0; i < n_bytes >> 1; i++) {
      inference.buffer[inference.buf_count++] = sampleBuffer[i];

      if (inference.buf_count >= inference.n_samples) {
        inference.buf_count = 0;
        inference.buf_ready = 1;
      }
    }
  }

  static void capture_samples(void *arg) {

    const int32_t i2s_bytes_to_read = (uint32_t)arg;
    size_t bytes_read = i2s_bytes_to_read;

    while (record_status) {

      /* i2sから一度にデータを読み取る */
      esp_i2s::i2s_read(esp_i2s::I2S_NUM_0, (void *)sampleBuffer, i2s_bytes_to_read, &bytes_read, 100);

      if (bytes_read <= 0) {
        ei_printf("Error in I2S read : %d", bytes_read);
      } else {
        if (bytes_read < i2s_bytes_to_read) {
          ei_printf("Partial I2S read");
        }

        // データをスケール（そうしないと音が静かすぎる）
        for (int x = 0; x < i2s_bytes_to_read / 2; x++) {
          sampleBuffer[x] = (int16_t)(sampleBuffer[x]) * 8;
        }

        if (record_status) {
          audio_inference_callback(i2s_bytes_to_read);
        } else {
          break;
        }
      }
    }
    vTaskDelete(NULL);
  }

  /**
 * @brief      推論構造体を初期化し、PDMをセットアップ/開始
 *
 * @param[in]  n_samples  サンプル数
 *
 * @return     { return_valueの説明 }
 */
  static bool microphone_inference_start(uint32_t n_samples) {
    inference.buffer = (int16_t *)malloc(n_samples * sizeof(int16_t));

    if (inference.buffer == NULL) {
      return false;
    }

    inference.buf_count = 0;
    inference.n_samples = n_samples;
    inference.buf_ready = 0;

    //    if (i2s_init(EI_CLASSIFIER_FREQUENCY)) {
    //        ei_printf("Failed to start I2S!");
    //    }

    ei_sleep(100);

    record_status = true;

    xTaskCreate(capture_samples, "CaptureSamples", 1024 * 32, (void *)sample_buffer_size, 10, NULL);

    return true;
  }

  /**
 * @brief      新しいデータを待機
 *
 * @return     完了時にtrue
 */
  static bool microphone_inference_record(void) {
    bool ret = true;

    while (inference.buf_ready == 0) {
      delay(10);
    }

    inference.buf_ready = 0;
    return ret;
  }

  /**
 * 生のオーディオ信号データを取得
 */
  static int microphone_audio_signal_get_data(size_t offset, size_t length, float *out_ptr) {
    numpy::int16_to_float(&inference.buffer[offset], out_ptr, length);

    return 0;
  }

  /**
 * @brief      PDMを停止し、バッファを解放
 */
  static void microphone_inference_end(void) {
    free(sampleBuffer);
    ei_free(inference.buffer);
  }


#if !defined(EI_CLASSIFIER_SENSOR) || EI_CLASSIFIER_SENSOR != EI_CLASSIFIER_SENSOR_MICROPHONE
#error "Invalid model for current sensor."
#endif
```

上記のコードをコピーするか、[こちら](https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/KeyWordSpotting(KWS)/src/XIAO_esp32_s3_sense_kWS_Yes_No.ino)からダウンロードして、コードをXIAOにアップロードしてください。

```cpp
 // 推論結果を出力
  ei_printf("予測結果 ");
  ei_printf("(DSP: %d ms., 分類: %d ms., 異常検知: %d ms.)",
            result.timing.dsp, result.timing.classification, result.timing.anomaly);
  ei_printf(": \n");
  for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
    ei_printf("    %s: ", result.classification[ix].label);
    ei_printf_float(result.classification[ix].value);
    ei_printf("\n");

    if (result.classification[ix].value > pred_value) {
      pred_index = ix;
      pred_value = result.classification[ix].value;
    }
  }

    // 推論結果を表示
    if ((pred_index == 0 && (pred_value > 0.8))) {
      digitalWrite(LED_BUILTIN, HIGH);  //LEDを点灯
    } else if ((pred_index == 2) && (pred_value > 0.8)) {
      digitalWrite(LED_BUILTIN, LOW);  //LEDを消灯
    } else {
      // 何もしない
    }
```

上記のコードでは、**LEDを点灯**または**消灯**するための判断がどこで行われているかがわかります。また、ここに他のロジックを追加して、KWSを使用してプロジェクトを制御することもできます。
<hr></hr>

### 果物識別（リンゴ、バナナ、ブドウ）Arduinoライブラリ
#### ステップ 1. 果物識別ライブラリをダウンロード
[果物識別（リンゴ、バナナ、ブドウ）Arduinoライブラリ](https://files.seeedstudio.com/wiki/tinyml-topic/res/xiao-esp32s3-fruits-classify_inferencing.zip) を.Zip形式でダウンロードしてください。

#### ステップ 2. ZIPライブラリをArduino IDEに追加

ZIPライブラリをダウンロードしたら、Arduino IDEを開き、[スケッチ] > [ライブラリをインクルード] > [.ZIPライブラリを追加]をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:1000, height:'auto'}}/></div> 

ダウンロードしたZIPファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウに「ライブラリがライブラリに追加されました」と表示されます。これでライブラリが正常にインストールされたことを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/upload_complete.png" style={{width:1000, height:'auto'}}/></div> 

#### ステップ 3. サンプルスケッチを実行

サンプルスケッチは、**ファイル -> スケッチ例 -> xiao-esp323-fruits-classify_inferencing -> XIAO-ESP32S3-Sense**の下にあります。

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/fruitClassifications_Lib_path.png" style={{width:1000, height:'auto'}}/></div> 

#### デモを試してみましょう

[こちら](https://www.kaggle.com/kritikseth/fruit-and-vegetable-image-recognition)からデータセットサンプルページを開き、果物の画像を開きます。その後、XIAO ESP32S3カメラを果物の画像に向け、画面に表示される結果を確認してください。

# ToDo
- [ ] XIAO ESP32S3をArduinoにインストール
- [ ] コンパイルとアップロード
- [ ] KWS Arduinoライブラリをインストールしてサンプルを実行
- [ ] 画像認識ライブラリをインストールしてサンプルを実行

## リソース

- **[GITHUB]** [SenseCraft モデルアシスタントモデル](https://github.com/Seeed-Studio/edgelab-model-zoo/tree/main/detection)
- **[GITHUB]** [プロジェクトのGithub](https://github.com/Mjrovai/XIAO-ESP32S3-Sense)
- **[EDGE-IMPULSE]** [Edge Impulse KWS デモ](https://studio.edgeimpulse.com/public/270277/latest)
- **[EDGE-IMPULSE]** [Edge Impulse フルーツ分類デモ](https://studio.edgeimpulse.com/public/269519/latest)