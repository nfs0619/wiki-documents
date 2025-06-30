---
description: キーワードスポッティング
title: キーワードスポッティング
keywords:
- tinyml コース
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/tinyml_course_Key_Word_Spotting
last_update:
  date: 05/15/2025
  author: Salman
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# XIAO ESP32S3-Sense キーワードスポッティング

このチュートリアルでは、TinyML を使用して XIAO ESP32S3 Sense マイクロコントローラーボード上でキーワードスポッティング (KWS) システムを実装する方法を説明します。データ収集とモデルトレーニングには Edge Impulse を使用します。KWS は音声認識システムにとって重要であり、TinyML の力を借りれば、小型で低消費電力のデバイスでも実現可能です。Edge Impulse と XIAO ESP32S3 Sense を使用して、自分だけの KWS システムを構築してみましょう！

## 1. はじめに

このプロジェクトを開始する前に、以下の準備手順に従って、このプロジェクトに必要なソフトウェアとハードウェアを準備してください。

### ハードウェア

このプロジェクトを成功させるために、以下のハードウェアを準備する必要があります。

- XIAO ESP32S3 Sense
- microSD カード（32GB 以下）
- microSD カードリーダー
- USB-C データケーブル

:::info

arduino-esp32 バージョン 2.x を使用してください。3.x とは互換性がありません。

:::

microSD カードを microSD カードスロットに挿入します。挿入方向に注意してください。金色の端子が内側を向くようにしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/66.jpg" style={{width:500, height:'auto'}}/></div>

### ソフトウェア

初めて XIAO ESP32S3 Sense を使用する場合は、開始する前に以下の 2 つの Wiki を読んで、使用方法を学ぶことをお勧めします。

- [Seeed Studio XIAO ESP32S3 (Sense) の使い方](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/)
- [Seeed Studio XIAO ESP32S3 マイクの使用方法](https://wiki.seeedstudio.com/ja/xiao_esp32s3_sense_mic/)

## 2. オフライン音声データのキャプチャ

### ステップ 1. 録音した音声サンプルを .wav オーディオファイルとして microSD カードに保存します。

オンボードの SD カードリーダーを使用して .wav オーディオファイルを保存します。まず、XIAO の PSRAM を有効にする必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/94.png" style={{width:600, height:'auto'}}/></div>

次に、以下のプログラムをコンパイルして XIAO ESP32S3 にアップロードします。

:::tip
このコードは、Seeed XIAO ESP32S3 Sense ボードの I2S インターフェースを使用して音声を録音し、録音を SD カード上の .wav ファイルとして保存します。また、シリアルモニターから送信されるコマンドを通じて録音プロセスを制御できます。オーディオファイルの名前はカスタマイズ可能で（トレーニングで使用するクラスラベルである必要があります）、複数の録音を行い、それぞれを新しいファイルに保存できます。さらに、録音の音量を増加させる機能も含まれています。
:::

```cpp
/* 
 * Seeed XIAO ESP32S3 Sense 用 WAV レコーダー
 * 
 * 注意: このコードを実行するには、ESP-32 チップの PSRAM 機能を使用する必要があります。
 * アップロード前に有効にしてください。
 * ツール > PSRAM: "OPI PSRAM"
 * 
 * M.Rovai による改変 @May23、元の Seeed コードから
*/

#include <I2S.h>
#include "FS.h"
#include "SD.h"
#include "SPI.h"

// 必要に応じて変更
#define RECORD_TIME   10  // 秒、最大値は 240
#define WAV_FILE_NAME "data"

// 最適な設定のため変更しない
#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16
#define WAV_HEADER_SIZE 44
#define VOLUME_GAIN 2

int fileNumber = 1;
String baseFileName;
bool isRecording = false;

void setup() {
  Serial.begin(115200);
  while (!Serial) ;
  
  I2S.setAllPins(-1, 42, 41, -1, -1);
  if (!I2S.begin(PDM_MONO_MODE, SAMPLE_RATE, SAMPLE_BITS)) {
    Serial.println("I2S の初期化に失敗しました！");
    while (1) ;
  }
  if(!SD.begin(21)){
    Serial.println("SD カードのマウントに失敗しました！");
    while (1) ;
  }
  Serial.printf("ラベル名を入力してください\n");
  //record_wav();
}

void loop() {
  if (Serial.available() > 0) {
    String command = Serial.readStringUntil('\n');
    command.trim();
    if (command == "rec") {
      isRecording = true;
    } else {
      baseFileName = command;
      fileNumber = 1; // 新しいベースファイル名が設定されるたびにファイル番号をリセット
      Serial.printf("録音を開始するには rec を送信してください \n");
    }
  }
  if (isRecording && baseFileName != "") {
    String fileName = "/" + baseFileName + "." + String(fileNumber) + ".wav";
    fileNumber++;
    record_wav(fileName);
    delay(1000); // 複数のファイルを一度に録音しないように遅延
    isRecording = false;
  }
}

void record_wav(String fileName)
{
  uint32_t sample_size = 0;
  uint32_t record_size = (SAMPLE_RATE * SAMPLE_BITS / 8) * RECORD_TIME;
  uint8_t *rec_buffer = NULL;
  Serial.printf("録音を開始します...\n");
   
  File file = SD.open(fileName.c_str(), FILE_WRITE);
  // WAV ファイルにヘッダーを書き込む
  uint8_t wav_header[WAV_HEADER_SIZE];
  generate_wav_header(wav_header, record_size, SAMPLE_RATE);
  file.write(wav_header, WAV_HEADER_SIZE);

  // PSRAM を使用して録音用メモリを確保
  rec_buffer = (uint8_t *)ps_malloc(record_size);
  if (rec_buffer == NULL) {
    Serial.printf("メモリ確保に失敗しました！\n");
    while(1) ;
  }
  Serial.printf("バッファ: %d バイト\n", ESP.getPsramSize() - ESP.getFreePsram());

  // 録音を開始
  esp_i2s::i2s_read(esp_i2s::I2S_NUM_0, rec_buffer, record_size, &sample_size, portMAX_DELAY);
  if (sample_size == 0) {
    Serial.printf("録音に失敗しました！\n");
  } else {
    Serial.printf("録音 %d バイト\n", sample_size);
  }

  // 音量を増加
  for (uint32_t i = 0; i < sample_size; i += SAMPLE_BITS/8) {
    (*(uint16_t *)(rec_buffer+i)) <<= VOLUME_GAIN;
  }

  // WAV ファイルにデータを書き込む
  Serial.printf("ファイルに書き込み中...\n");
  if (file.write(rec_buffer, record_size) != record_size)
    Serial.printf("ファイル書き込みに失敗しました！\n");

  free(rec_buffer);
  file.close();
  Serial.printf("録音完了: \n");
  Serial.printf("新しいサンプルを録音するには rec を送信するか、新しいラベルを入力してください\n\n");
}

void generate_wav_header(uint8_t *wav_header, uint32_t wav_size, uint32_t sample_rate)
{
  // 参考: http://soundfile.sapp.org/doc/WaveFormat/
  uint32_t file_size = wav_size + WAV_HEADER_SIZE - 8;
  uint32_t byte_rate = SAMPLE_RATE * SAMPLE_BITS / 8;
  const uint8_t set_wav_header[] = {
    'R', 'I', 'F', 'F', // ChunkID
    file_size, file_size >> 8, file_size >> 16, file_size >> 24, // ChunkSize
    'W', 'A', 'V', 'E', // Format
    'f', 'm', 't', ' ', // Subchunk1ID
    0x10, 0x00, 0x00, 0x00, // Subchunk1Size (16 for PCM)
    0x01, 0x00, // AudioFormat (1 for PCM)
    0x01, 0x00, // NumChannels (1 channel)
    sample_rate, sample_rate >> 8, sample_rate >> 16, sample_rate >> 24, // SampleRate
    byte_rate, byte_rate >> 8, byte_rate >> 16, byte_rate >> 24, // ByteRate
    0x02, 0x00, // BlockAlign
    0x10, 0x00, // BitsPerSample (16 bits)
    'd', 'a', 't', 'a', // Subchunk2ID
    wav_size, wav_size >> 8, wav_size >> 16, wav_size >> 24, // Subchunk2Size
  };
  memcpy(wav_header, set_wav_header, sizeof(set_wav_header));
}
```

次に、コードをXIAOにアップロードし、キーワード（hello と stop）のサンプルを取得します。また、ノイズや他の単語をキャプチャすることもできます。シリアルモニターは、記録するラベルを受け取るように促します。

ラベル（例: **hello**）を送信します。プログラムは次のコマンド **rec** を待機します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/2.png" style={{width:600, height:'auto'}}/></div>

そして、コマンド **rec** が送信されるたびに新しいサンプルの記録を開始します。ファイルは hello.1.wav、hello.2.wav、hello.3.wav などとして保存されます。新しいラベル（例: **stop**）が送信されるまでこのプロセスが続きます。この場合、各新しいサンプルに対してコマンド **rec** を送信する必要があり、それぞれ stop.1.wav、stop.2.wav、stop.3.wav などとして保存されます。

最終的に、保存されたファイルは SD カードに保存されます。

:::note
各ラベルサンプルに十分な音声を用意することをお勧めします。10秒間の録音セッション中にキーワードを何度も繰り返すことができますが、後続のステップでサンプルを分割する際に、キーワード間にある程度の間隔を空ける必要があります。
:::

## 3. トレーニングデータの取得

### ステップ 2. 収集した音声データのアップロード

生データセットが定義され収集されたら、[Edge Impulse](https://edgeimpulse.com/)で新しいプロジェクトを開始する必要があります。プロジェクトを作成したら、**Data Acquisition** セクションで **Upload Existing Data** ツールを選択します。アップロードするファイルを選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/3.png" style={{width:1000, height:'auto'}}/></div>

そして、それらを Studio にアップロードします（データを自動的にトレーニング/テストに分割することができます）。すべてのクラスとすべての生データに対してこの手順を繰り返します。

データセット内のすべてのデータは 1 秒の長さですが、前のセクションで記録されたサンプルは 10 秒であり、1 秒のサンプルに分割する必要があります。サンプル名の後の三点リーダーをクリックし、**Split sample** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/5.png" style={{width:600, height:'auto'}}/></div>

ツール内に入ったら、データを 1 秒ごとの記録に分割します。必要に応じてセグメントを追加または削除してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/4.png" style={{width:1000, height:'auto'}}/></div>

この手順をすべてのサンプルに対して繰り返します。

### ステップ 3. インパルスの作成（前処理 / モデル定義）

インパルスは生データを取り込み、信号処理を使用して特徴を抽出し、その後学習ブロックを使用して新しいデータを分類します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/6.png" style={{width:1000, height:'auto'}}/></div>

まず、1 秒のウィンドウでデータポイントを取得し、データを拡張し、そのウィンドウを 500ms ごとにスライドさせます。**zero-pad data** オプションが設定されていることに注意してください。これは、1 秒未満のサンプルをゼロで埋めるために重要です（場合によっては、ノイズやスパイクを避けるために **split tool** で 1000ms のウィンドウを縮小しました）。

各 1 秒の音声サンプルは前処理され、画像（例: 13 x 49 x 1）に変換される必要があります。ここでは、MFCC（Mel Frequency Cepstral Coefficients）を使用します。これは音声信号から特徴を抽出するためのもので、人間の声に適しています。

次に、分類のために **KERAS** を選択します。これは、畳み込みニューラルネットワークを使用して画像分類を行い、ゼロからモデルを構築します。

### ステップ 4. 前処理（MFCC）

次のステップでは、次のフェーズでトレーニングするための画像を作成します。デフォルトのパラメータ値を保持するか、DSP の **Autotuneparameters option** を活用することができます。ここでは後者を使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/7.png" style={{width:1000, height:'auto'}}/></div>

## 4. 機械学習モデルの構築

### ステップ5. モデル設計とトレーニング

Convolution Neural Network (CNN) モデルを使用します。基本的なアーキテクチャは、Conv1D + MaxPooling の2つのブロック（それぞれ8ニューロンと16ニューロン）と0.25のドロップアウトで構成されています。最後の層では、フラット化後に4つのニューロン（各クラスに1つ）を使用します。

ハイパーパラメータとして、学習率は0.005、モデルは100エポックでトレーニングされます。また、データ拡張としてノイズを追加します。結果は良好に見えます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/8.png" style={{width:600, height:'auto'}}/></div>

## 5. XIAO ESP32S3 Senseへのデプロイ

### ステップ6. XIAO ESP32S3 Senseへのデプロイ

Edge Impulseは、必要なすべてのライブラリ、前処理関数、およびトレーニング済みモデルをパッケージ化し、それをコンピュータにダウンロードします。「Arduino Library」オプションを選択し、下部で「Quantized (Int8)」を選択して「Build」ボタンを押してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/9.png" style={{width:600, height:'auto'}}/></div>

Edge ImpulseはESP32S3用のESP NNアクセラレータを使用するSDKをまだリリースしていませんが、Dmitry Maslovのおかげで、ESP32-S3用にアセンブリ最適化が復元および修正されています。このソリューションはまだ公式ではなく、EIは他のボードとの競合を修正した後にEI SDKに含める予定です。

:::caution
現在のところ、これは非EONバージョンでのみ動作します。そのため、「Enable EON Compiler」オプションを選択しないようにしてください。
:::

「Build」ボタンを選択すると、Zipファイルが作成され、コンピュータにダウンロードされます。

ダウンロードしたライブラリを使用する前に、**ESP NN**アクセラレータを有効にする必要があります。そのためには、[プロジェクトのGitHub](https://github.com/Mjrovai/XIAO-ESP32S3-Sense/blob/main/ESP-NN.zip)から予備バージョンをダウンロードし、解凍して、Arduinoライブラリフォルダ内の`src/edge-impulse-sdk/porting/espressif/ESP-NN`にあるESP NNフォルダと置き換えてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/10.png" style={{width:800, height:'auto'}}/></div>

Arduino IDEで、「スケッチ」タブに移動し、「.ZIPライブラリを追加」オプションを選択して、Edge Impulseによってダウンロードされた.zipファイルを選択します。

完全なコードは[プロジェクトのGitHub](https://github.com/Mjrovai/XIAO-ESP32S3-Sense/tree/main/xiao_esp32s3_microphone_led)で確認できます。スケッチをボードにアップロードし、実際の推論をテストしてください。

:::tip
コードにインポートされたライブラリは、使用するライブラリの名前に更新する必要があります。また、点灯ロジックは、実際にトレーニングしたラベルの順序に基づいて修正する必要があります。
:::

```cpp
/* Edge Impulse Arduino examples
 * Copyright (c) 2022 EdgeImpulse Inc.
 *
 * 本ソフトウェアおよび関連文書ファイル（以下「ソフトウェア」）を無償で取得した者に対し、
 * ソフトウェアを制限なく使用、複製、変更、結合、公開、配布、サブライセンス、
 * または販売する権利を許可します。
 *
 * 上記の著作権表示および本許諾表示は、ソフトウェアのすべてのコピーまたは
 * 重要な部分に含まれるものとします。
 *
 * ソフトウェアは「現状のまま」提供され、明示的または黙示的を問わず、
 * 商品性、特定目的への適合性、および非侵害性に関する保証を含むがこれに限定されない、
 * いかなる保証もありません。
 * 著者または著作権者は、契約、不法行為、またはその他の理由に基づくかを問わず、
 * ソフトウェアまたはその使用またはその他の取引に起因または関連する
 * いかなる請求、損害、またはその他の責任についても責任を負いません。
 */

// メモリが制限されているターゲットの場合、このマクロを削除して10K RAMを節約
#define EIDSP_QUANTIZE_FILTERBANK   0

/*
 ** 注意: TFLiteアリーナ割り当ての問題が発生した場合。
 **
 ** これは動的メモリの断片化が原因である可能性があります。
 ** boards.local.txtに"-DEI_CLASSIFIER_ALLOCATION_STATIC"を定義して
 ** このファイルを`<ARDUINO_CORE_INSTALL_PATH>/arduino/hardware/<mbed_core>/<core_version>/`にコピーしてください。
 **
 ** 詳細は以下を参照してください：
 ** (https://support.arduino.cc/hc/en-us/articles/360012076960-Where-are-the-installed-cores-located-)
 **
 ** 問題が解決しない場合、このモデルとアプリケーションに十分なメモリがありません。
 */

/* インクルード ---------------------------------------------------------------- */
#include <XIAO-ESP32S3-KWS_inferencing.h>

#include <I2S.h>
#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16

#define LED_BUILT_IN 21 

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
static bool debug_nn = false; // 生信号から生成された特徴量などを表示するにはtrueに設定
static bool record_status = true;

/**
 * @brief      Arduinoセットアップ関数
 */
void setup()
{
    // 初回実行時のセットアップコード
    Serial.begin(115200);
    // USB接続待機をキャンセルするには以下の行をコメントアウト
    while (!Serial);
    Serial.println("Edge Impulse Inferencing Demo");

    pinMode(LED_BUILT_IN, OUTPUT); // ピンを出力として設定
    digitalWrite(LED_BUILT_IN, HIGH); // 消灯
    
    I2S.setAllPins(-1, 42, 41, -1, -1);
    if (!I2S.begin(PDM_MONO_MODE, SAMPLE_RATE, SAMPLE_BITS)) {
      Serial.println("I2Sの初期化に失敗しました！");
    while (1) ;
  }
    
    // 推論設定の概要（model_metadata.hから）
    ei_printf("推論設定:\n");
    ei_printf("\t間隔: ");
    ei_printf_float((float)EI_CLASSIFIER_INTERVAL_MS);
    ei_printf(" ms.\n");
    ei_printf("\tフレームサイズ: %d\n", EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE);
    ei_printf("\tサンプル長: %d ms.\n", EI_CLASSIFIER_RAW_SAMPLE_COUNT / 16);
    ei_printf("\tクラス数: %d\n", sizeof(ei_classifier_inferencing_categories) / sizeof(ei_classifier_inferencing_categories[0]));

    ei_printf("\n2秒後に連続推論を開始します...\n");
    ei_sleep(2000);

    if (microphone_inference_start(EI_CLASSIFIER_RAW_SAMPLE_COUNT) == false) {
        ei_printf("エラー: オーディオバッファ（サイズ %d）を割り当てられませんでした。この問題はモデルのウィンドウ長が原因である可能性があります\r\n", EI_CLASSIFIER_RAW_SAMPLE_COUNT);
        return;
    }

    ei_printf("録音中...\n");
}

/**
 * @brief      Arduinoメイン関数。推論ループを実行します。
 */
void loop()
{
    bool m = microphone_inference_record();
    if (!m) {
        ei_printf("エラー: オーディオの録音に失敗しました...\n");
        return;
    }

    signal_t signal;
    signal.total_length = EI_CLASSIFIER_RAW_SAMPLE_COUNT;
    signal.get_data = &microphone_audio_signal_get_data;
    ei_impulse_result_t result = { 0 };

    EI_IMPULSE_ERROR r = run_classifier(&signal, &result, debug_nn);
    if (r != EI_IMPULSE_OK) {
        ei_printf("エラー: クラス分類の実行に失敗しました (%d)\n", r);
        return;
    }

    int pred_index = 0;     // pred_indexを初期化
    float pred_value = 0;   // pred_valueを初期化

    // 推論結果を表示
    ei_printf("予測 ");
    ei_printf("(DSP: %d ms., 分類: %d ms., 異常: %d ms.)",
        result.timing.dsp, result.timing.classification, result.timing.anomaly);
    ei_printf(": \n");
    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: ", result.classification[ix].label);
        ei_printf_float(result.classification[ix].value);
        ei_printf("\n");

        if (result.classification[ix].value > pred_value){
           pred_index = ix;
           pred_value = result.classification[ix].value;
      }
    }
    // 推論結果を表示
    if (pred_index == 3){
      digitalWrite(LED_BUILT_IN, LOW); // 点灯
    }
    else{
      digitalWrite(LED_BUILT_IN, HIGH); // 消灯
    }

    
#if EI_CLASSIFIER_HAS_ANOMALY == 1
    ei_printf("    異常スコア: ");
    ei_printf_float(result.anomaly);
    ei_printf("\n");
#endif
}

static void audio_inference_callback(uint32_t n_bytes)
{
    for(int i = 0; i < n_bytes>>1; i++) {
        inference.buffer[inference.buf_count++] = sampleBuffer[i];

        if(inference.buf_count >= inference.n_samples) {
          inference.buf_count = 0;
          inference.buf_ready = 1;
        }
    }
}

static void capture_samples(void* arg) {

  const int32_t i2s_bytes_to_read = (uint32_t)arg;
  size_t bytes_read = i2s_bytes_to_read;

  while (record_status) {

    /* i2sから一度にデータを読み取る - XIAO ESP2S3 SenseおよびI2S.hライブラリ用に修正 */
    // i2s_read((i2s_port_t)1, (void*)sampleBuffer, i2s_bytes_to_read, &bytes_read, 100);
    esp_i2s::i2s_read(esp_i2s::I2S_NUM_0, (void*)sampleBuffer, i2s_bytes_to_read, &bytes_read, 100);

    if (bytes_read <= 0) {
      ei_printf("I2S読み取りエラー : %d", bytes_read);
    }
    else {
        if (bytes_read < i2s_bytes_to_read) {
        ei_printf("部分的なI2S読み取り");
        }

        // データをスケール（そうしないと音が小さすぎる）
        for (int x = 0; x < i2s_bytes_to_read/2; x++) {
            sampleBuffer[x] = (int16_t)(sampleBuffer[x]) * 8;
        }

        if (record_status) {
            audio_inference_callback(i2s_bytes_to_read);
        }
        else {
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
 * @return     { 戻り値の説明 }
 */
static bool microphone_inference_start(uint32_t n_samples)
{
    inference.buffer = (int16_t *)malloc(n_samples * sizeof(int16_t));

    if(inference.buffer == NULL) {
        return false;
    }

    inference.buf_count  = 0;
    inference.n_samples  = n_samples;
    inference.buf_ready  = 0;

//    if (i2s_init(EI_CLASSIFIER_FREQUENCY)) {
//        ei_printf("I2Sの開始に失敗しました！");
//    }

    ei_sleep(100);

    record_status = true;

    xTaskCreate(capture_samples, "CaptureSamples", 1024 * 32, (void*)sample_buffer_size, 10, NULL);

    return true;
}

/**
 * @brief      新しいデータを待機
 *
 * @return     完了時にtrue
 */
static bool microphone_inference_record(void)
{
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
static int microphone_audio_signal_get_data(size_t offset, size_t length, float *out_ptr)
{
    numpy::int16_to_float(&inference.buffer[offset], out_ptr, length);

    return 0;
}

/**
 * @brief      PDMを停止し、バッファを解放
 */
static void microphone_inference_end(void)
{
    free(sampleBuffer);
    ei_free(inference.buffer);
}

#if !defined(EI_CLASSIFIER_SENSOR) || EI_CLASSIFIER_SENSOR != EI_CLASSIFIER_SENSOR_MICROPHONE
#error "現在のセンサーに対して無効なモデルです。"
#endif
```

アイデアとしては、キーワード **HELLO** が検出されたときに LED が点灯するというものです。同様に、LED を点灯させる代わりに、これは導入部分で説明したように外部デバイスの「トリガー」として使用することもできます。

## ToDo

- [ ] 独自の KWS プロジェクトを構築し、XIAO ESP32S3 Sense 上で実行する。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/11.png" style={{width:700, height:'auto'}}/></div>

## 特別な感謝

**[MJRoBot (Marcelo Rovai)](https://mjrobot.org/)** に感謝します。XIAO ESP32S3 Sense を使用した Edge Impulse アクセスに関するチュートリアルコンテンツを提供していただきました。元の記事は非常に詳細で、機械学習に関する多くの知識が含まれています。

この記事の元の内容を読みたい場合は、下にスクロールして元の記事に直接アクセスできます。

- [TinyML Made Easy: KeyWord Spotting (KWS)](https://www.hackster.io/mjrobot/tinyml-made-easy-keyword-spotting-kws-5fa6e7#toc-capturing--offline--audio-data-with-the-xiao-esp32s3-sense-5)

MJRoBot はまた、XIAO ESP32S3 に関する非常に興味深いプロジェクトを多数公開しています。

- [Exploring Machine Learning with the new XIAO ESP32S3](https://www.hackster.io/mjrobot/exploring-machine-learning-with-the-new-xiao-esp32s3-6463e5)
- [TinyML Made Easy: Image Classification](https://www.hackster.io/mjrobot/tinyml-made-easy-image-classification-cb42ae)