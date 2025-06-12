---
description: ReSpeaker 4-Mic Linear Array Kit
title: ReSpeaker 4-Mic Linear Array Kit
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

![画像説明を入力してください](https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/main_wiki.jpg)

SeeedのReSpeaker 4-Mic Linear Array Kitは、Raspberry Pi用に設計された拡張ボード、別名HATです。これは直線型のマイクアレイキットで、4つのマイクを搭載しており、AIや音声アプリケーション向けに設計されています。つまり、Raspberry Piを使用して、Amazon Alexa Voice ServiceやGoogle Assistantなどを統合した、より強力で柔軟な音声製品を構築することができます。

Raspberry Pi用ReSpeaker 4-Mic Linear Array Kitは、2つのボードで構成されています。一つは音声アクセサリHAT、もう一つは4つのマイク直線アレイです。

<iframe width="800" height="450" src="https://www.youtube.com/embed/NxZx9nz67Bc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Raspberry Pi用ReSpeaker 4-Mic Linear Array Kitは、Raspberry Pi OSで8入力＆8出力チャンネルをサポートします。最初の6入力チャンネルはマイク録音用（最初の4入力チャンネルのみが有効なキャプチャデータ）、残りの2入力チャンネルは再生のエコーチャンネルです。最初の2出力チャンネルは音声出力用で、残りの6出力チャンネルはダミーです。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/ReSpeaker-4-Mic-Linear-Array-Kit-p-3066.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

- 2つのADCチップと1つのDACチップ
- 8入力＆8出力チャンネル
- 4つのマイクアレイ
- Grove対応
- Raspberry Pi互換（Raspberry Pi ZeroおよびZero W、Raspberry Pi B+、Raspberry Pi 2 B、Raspberry Pi 3 B、Raspberry Pi 3 B+、Raspberry Pi 3 A+、Raspberry Pi 4をサポート）
- ヘッドセットおよびスピーカー音声出力

## 仕様

- 2 x X-Power AC108 ADC
- 4 x 高性能アナログマイク
- 1 x X-Power AC101 DAC
- 音声出力：
  - 3.5mmヘッドセットオーディオジャック
  - スピーカージャック
- Raspberry Pi 40ピンヘッダー互換
- マイク：MSM321A3729H9BP
- 感度：-22 dBFS（全方向性）
- SNR：59 dB
- 最大サンプリングレート：48Khz

## アプリケーションアイデア

- スマートスピーカー
- インテリジェント音声アシスタントシステム
- 音声レコーダー
- 音声会議システム
- 会議用通信機器
- 音声対話型ロボット
- 車載音声アシスタント
- その他音声コマンドが必要なシナリオ

## ハードウェア概要

**システム図**

<a href="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc-correct.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc-correct.png"/></a>

**インターフェース**

![](https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/Hardware.jpg)

:::note
接続後、必ずマルチメーターを使用して、回路の導通が上記の図に示されている通りであるか確認してください。
:::

## 組立図

![](https://files.seeedstudio.com/wiki/Bazaar_file/107990055/img/ab.png)

## はじめに

**ReSpeaker 4-Mic Array を Raspberry Pi に接続する**

**ステップ 1.** *ReSpeaker Voice Accessory HAT* を *ReSpeaker 4-Mic Linear Array* にリボンケーブルで接続します。

**ステップ 2.** *ReSpeaker Voice Accessory HAT* を 40 ピン GPIO を介して *Raspberry Pi* に差し込みます。

**ステップ 3.** *イヤホン* を *3.5mm ヘッドセットオーディオジャック* に差し込むか、*スピーカー* を *JST 2.0 スピーカージャック* に接続します。

**ステップ 4.** *Raspberry Pi* を micro-USB ケーブルを使用して *PC* に接続します。

![画像はこちら](https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/4-mic.jpg)

### ソフトウェア

**ステップ 1. seeed-voicecard をインストールする**

seeed voice card のソースコードを取得し、すべての Linux カーネルドライバをインストールします。

```
sudo apt-get update
git clone https://github.com/HinTak/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh  
sudo reboot
```

**ステップ 2. サウンドカードを確認する**

以下のコマンドを入力して録音デバイスを確認します。

```
pi@raspberrypi:~ $ arecord -L
```

以下のように表示されるはずです：

```
pi@raspberrypi:~ $ arecord -L
null
    Discard all samples (playback) or generate zero samples (capture)
default
    Playback/recording through the PulseAudio sound server
ac108
dmixer
ac101
sysdefault:CARD=seeed8micvoicec
    seeed-8mic-voicecard, 
    Default Audio Device
dmix:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Direct sample mixing device
dsnoop:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Direct sample snooping device
hw:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Direct hardware device without any conversions
plughw:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Hardware device with all software conversions
```

以下のコマンドを使用して再生デバイスを確認します。

```
pi@raspberrypi:~ $ aplay -L
```

以下のように表示されるはずです：

```
pi@raspberrypi:~ $ aplay -L
null
    Discard all samples (playback) or generate zero samples (capture)
default
    Playback/recording through the PulseAudio sound server
ac108
dmixer
ac101
sysdefault:CARD=ALSA
    bcm2835 ALSA, bcm2835 ALSA
    Default Audio Device
dmix:CARD=ALSA,DEV=0
    bcm2835 ALSA, bcm2835 ALSA
    Direct sample mixing device
dmix:CARD=ALSA,DEV=1
    bcm2835 ALSA, bcm2835 IEC958/HDMI
    Direct sample mixing device
dsnoop:CARD=ALSA,DEV=0
    bcm2835 ALSA, bcm2835 ALSA
    Direct sample snooping device
dsnoop:CARD=ALSA,DEV=1
    bcm2835 ALSA, bcm2835 IEC958/HDMI
    Direct sample snooping device
hw:CARD=ALSA,DEV=0
    bcm2835 ALSA, bcm2835 ALSA
    Direct hardware device without any conversions
hw:CARD=ALSA,DEV=1
    bcm2835 ALSA, bcm2835 IEC958/HDMI
    Direct hardware device without any conversions
plughw:CARD=ALSA,DEV=0
    bcm2835 ALSA, bcm2835 ALSA
    Hardware device with all software conversions
plughw:CARD=ALSA,DEV=1
    bcm2835 ALSA, bcm2835 IEC958/HDMI
    Hardware device with all software conversions
sysdefault:CARD=seeed8micvoicec
    seeed-8mic-voicecard, 
    Default Audio Device
dmix:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Direct sample mixing device
dsnoop:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Direct sample snooping device
hw:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Direct hardware device without any conversions
plughw:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Hardware device with all software conversions
```

**ステップ 3. 録音と再生**

録音してから再生するか、同時に録音と再生を行うことができます。

```
# AC108 で音声をキャプチャし、a.wav として保存します
arecord -Dac108 -f S32_LE -r 16000 -c 8 a.wav
# キャプチャされたマイク音声は最初の6チャンネルにあります

# a.wav 音声ファイルを AC101 で再生します
aplay -D ac101 a.wav
# wave ファイルが単一チャンネルでない限り、-D plughw:1,0 を直接使用しないでください。
```

:::note
4-Mic Linear Array Kit を使用してキャプチャと再生を同時に行う際の制限：

1. キャプチャは再生より先に開始する必要があります。そうしないと、キャプチャチャンネルが乱れる可能性があります。

2. 再生出力チャンネルには、8つの同じチャンネルデータまたは4つの同じステレオチャンネルデータを入力する必要があります。そうしないと、スピーカーやヘッドホンが音を出さない可能性があります。

3. 同時に再生と録音を行う場合、再生する音楽ファイルはモノラルである必要があります。そうでない場合、このコマンドを使用して再生することはできません。
:::

また、Audacity を使用して再生と録音を行うこともできます。

:::tip
Audacity を開くには VNC を使用するか、モニターを使用して直接開いてください。
:::

```
sudo apt update
sudo apt install audacity
audacity                      // Audacity を実行
```

![](https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/audacity.png)

## 使用概要

以下の例を実行するには、Raspberry Pi に <https://github.com/respeaker/4mics_hat.git> リポジトリをクローンしてください。

```
git clone https://github.com/respeaker/4mics_hat.git
```

以下の例で言及されているすべての Python スクリプトは、このリポジトリ内にあります。必要な依存関係をインストールするには、mic_hat リポジトリフォルダ内で以下を実行してください。

```
sudo apt-get install portaudio19-dev libatlas-base-dev
pip3 install -r requirements.txt
```

### Python で音声を録音する

Python を使用して音声を録音するために、[PyAudio Python ライブラリ](https://people.csail.mit.edu/hubert/pyaudio/) を使用します。

まず、以下のスクリプトを実行して、2 Mic pi hat のデバイスインデックス番号を取得します。

```
python3 recording_examples/get_device_index.py
```

以下のようにデバイス ID が表示されます。

```
Input Device id  2  -  seeed-8mic-voicecard: - (hw:1,0)
```

音声を録音するには、```recording_examples/record.py``` ファイルを nano または他のテキストエディタで開き、`RESPEAKER_INDEX = 2` をシステム上の ReSpeaker のインデックス番号に変更します。その後、Python スクリプト record.py を実行して録音を行います。

```
python3 recording_examples/record.py
```

- ステップ 6. 8 チャンネルからチャンネル 0 のデータを抽出したい場合は、```record_one_channel.py``` の内容を確認してください。他のチャンネル X の場合は、[0::8] を [X::8] に変更してください。

```
python3 recording_examples/record_one_channel.py
```

録音したサンプルを再生するには、aplay システムユーティリティを使用できます。例えば：

```bash
aplay -f cd -Dhw:0 output.wav # ステレオサウンド用
aplay -D plughw:0,0 output_one_channel.wav # 1 チャンネルのモノラルサウンド用
```

## FAQ

**Q1: マイクアレイには 4 つのマイクしかないのに、どうして 8 チャンネルになるのですか？**

A1: このアレイには 2 つの AC108 があり、それぞれの AC108 チップは 4 チャンネルの出力を持っています。そのため、合計で 8 チャンネルになります。このうち 4 チャンネルはマイク用、2 チャンネルは再生用、残りの 2 チャンネルは使用されていません。

**Q2: Raspberry が ReSpeaker 2-mics hat を検出できるのに、ReSpeaker 4-mics linear array を検出できない場合は？**

A2: Raspberry -> Preferences -> Raspberry Pi Configuration をクリックし、Interfaces タブを選択して、1-Wire が無効になっていることを確認してください。

## リソース

- **[PDF]** [AC101 データシート](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/AC101_User_Manual_v1.1.pdf)
- **[PDF]** [AC108 データシート](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/AC108_Datasheet_V1.2.pdf)
- **[ドライバ]** [Seeed-Voice ドライバ](https://github.com/respeaker/seeed-voicecard)
- **[アルゴリズム]** [DOA、VAD、NS を含むアルゴリズム](https://github.com/respeaker/mic_array)
- **[Voice Engine]** [Voice Engine プロジェクト、音声対応オブジェクトを作成するためのビルディングブロックを提供](https://github.com/voice-engine/voice-engine)
- **[アルゴリズム]** [AEC](https://github.com/voice-engine/ec)
- **[機械図面]** [2D 図面](https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/res/2d.zip)

## プロジェクト

[Mojing Mojing - ReSpeaker を使用したスマートミラー！](https://www.hackster.io/SeeedStudio/mojing-mojing-a-smart-mirror-with-respeaker-e1ae20): ReSpeaker を介した音声インターフェース制御を備えたスマートミラーです。また、Wio Link を接続して他のオブジェクトを制御します！Raspberry Pi をベースにしています。

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>