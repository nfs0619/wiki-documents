---
description: 音声認識
title: 音声認識
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO-BLE-Sense-TFLite-Mic
last_update:
  date: 05/15/2025
  author: shuxu hu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio XIAO nRF52840 Senseでの音声認識

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/TFLite-mic-thumb.png" alt="pir" width={1000} height="auto" /></p>

このWikiでは、Seeed Studio XIAO nRF52840 Sense上でTensorFlow Liteを使用し、オンボードマイクを利用して音声認識を行う方法を説明します。

> 組み込みAIアプリケーションに関しては、「Seeed nrf52 mbed-enabled Boards Library」の使用を強くお勧めします。

## ソフトウェアセットアップ

まずは、初期のハードウェアおよびソフトウェアセットアップのために["Getting Started with Seeed Studio XIAO nRF52840 (Sense)"](https://wiki.seeedstudio.com/ja/XIAO_BLE/)のWikiを参照してください。

次に、残りのソフトウェアセットアップに進みます。

- **ステップ 1**. [tflite-micro-arduino-examplesライブラリ](https://github.com/lakshanthad/tflite-micro-arduino-examples)をzipファイルとしてダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/tflite-mic-github.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 2**. Arduino IDEを開き、`スケッチ > ライブラリを含める > .ZIPライブラリを追加...`に移動し、ダウンロードしたzipファイルを開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

## データのトレーニングとTensorFlow Liteモデルの生成

次に、Google Colabノートブックを使用してデータトレーニングを行い、TensorFlow Liteモデルを生成します。

- **ステップ 1.** [このPythonノートブック](https://colab.research.google.com/github/tensorflow/tflite-micro/blob/main/tensorflow/lite/micro/examples/micro_speech/train/train_micro_speech_model.ipynb)を開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/TF-notebook-mic.jpg" alt="pir" width={1000} height="auto" /></p>

デフォルトでは、[このデータセット](https://storage.googleapis.com/download.tensorflow.org/data/speech_commands_v0.02.tar.gz)がロードされ、以下の単語を認識できます：**"yes", "no", "up", "down", "left", "right", "on", "off", "stop", "go", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "bed", "bird", "cat", "dog", "happy", "house", "marvin", "sheila", "tree", "wow"**

- **ステップ 2.** **Configure Defaults**列の下で、モデルが認識する単語に応じて**WANTED_WORDS**パラメータを変更します。以下の単語から選択できます：**"yes", "no", "up", "down", "left", "right", "on", "off", "stop", "go", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "bed", "bird", "cat", "dog", "happy", "house", "marvin", "sheila", "tree", "wow"**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/TF-notebook-wanted-words.png" alt="pir" width={600} height="auto" /></p>

**注:** この例では、**yes, no, up, down**の単語が選択されています。

- **ステップ 3.** `Runtime > Run all`に移動して、すべてのコードセルを実行します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/micro-speech-run-all.png" alt="pir" width={450} height="auto" /></p>

- **ステップ 4.** 表示されるエラーメッセージに対して**Run anyway**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/run-anyway.png" alt="pir" width={600} height="auto" /></p>

**注:** このプロセスは約2時間かかります。

- **ステップ 5.** すべてのコードセルが実行されたら、左上の**files**タブに移動し、**models**フォルダ内に新しい**model.cc**ファイルが生成されていることを確認します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/model-cc.png" alt="pir" width={300} height="auto" /></p>

**注:** 上記の**model.cc**ファイルが表示されない場合は、ページを更新してください。

- **ステップ 6.** ファイルを右クリックし、**Download**をクリックしてPCにファイルをダウンロードします。

## 推論

次に、ダウンロードした TensorFlow Lite モデルファイル **(model.cc)** を使用して、Seeed Studio XIAO nRF52840 Sense のマイクを使い、異なる単語を認識します。

- **ステップ 1.** **tflite-micro-arduino-examples** ライブラリのパスに移動します (通常は **Documents > Arduino > libraries > tflite-micro-arduino-examples** の下にあります)。**examples > micro_speech** フォルダを開き、**micro_features_model.cpp** を開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/micro-features-model-open.png" alt="pir" width={550} height="auto" /></p>

- **ステップ 2.** **model.cc** ファイルから取得した新しい値で、**const unsigned char g_model[] DATA_ALIGN_ATTRIBUTE = {** の下の値を置き換えます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/model-values.png" alt="pir" width={550} height="auto" /></p>

- **ステップ 3.** **model.cc** から取得した値に基づいて **g_model_len** を変更します。ここでは **26720** を使用します。

```cpp
const int g_model_len = 26720;
```

- **ステップ 4.** **micro_speech** フォルダ内の **micro_features_micro_model_settings.cpp** を開き、トレーニングプロセスで定義したすべての単語を追加します。ここでは **yes, no, up, down** を使用します。

```cpp
#include "micro_features_micro_model_settings.h"

const char* kCategoryLabels[kCategoryCount] = {
    "silence",
    "unknown",
    "yes",
    "no",
    "up",
    "down",
};
```

- **ステップ 5.** **micro_speech** フォルダ内の **micro_features_micro_model_settings.h** を開き、定義したカテゴリ数に基づいて **constexpr int kCategoryCount** を変更します。ここでは 6 カテゴリを使用します。

```cpp
constexpr int kCategoryCount = 6;
```

- **ステップ 6.** **micro_speech** フォルダ内の **micro_speech.ino** を開き、コードを Seeed Studio XIAO nRF52840 Sense にアップロードします。

- **ステップ 7.** **シリアルモニターウィンドウ** を開き、トレーニングプロセスで定義した単語を大声で話します。シリアルモニターが認識後に正しい単語を出力するのが確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/mic-capture.png" alt="pir" width={300} height="auto" /></p>

## 技術サポートと製品に関する議論

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>