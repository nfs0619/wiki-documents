---
description: ReSpeaker 6-Mic Circular Array Kit for Raspberry Pi
title: ReSpeaker 6-Mic Circular Array Kit for Raspberry Pi
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ReSpeaker_6-Mic_Circular_Array_kit_for_Raspberry_Pi
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

![画像の説明を入力してください](https://files.seeedstudio.com/products/107990055/01.png)

Seeed の ReSpeaker 6-Mic Circular Array Kit は、Raspberry Pi 用に設計された拡張ボード（HAT）です。これは円形のマイクアレイキットで、6つのマイクを備え、AIや音声アプリケーション向けに設計されています。つまり、Raspberry Pi を使用して、Amazon Alexa Voice Service や Google Assistant などを統合した、より強力で柔軟な音声製品を構築することができます。

ReSpeaker 6-Mic Circular Array Kit for Raspberry Pi は、2つのボードで構成されています。1つは音声アクセサリ HAT、もう1つは6つのマイクを備えた円形アレイです。

ReSpeaker 6-Mic Circular Array Kit for Raspberry Pi は、Raspbian システムで8入力＆8出力チャンネルをサポートします。最初の6つの入力チャンネルはマイク録音用で、残りの2つの入力チャンネルは再生のエコーチャンネルです。最初の2つの出力チャンネルは再生用で、残りの6つの出力チャンネルはダミーです。

<iframe width="800" height="450" src="https://www.youtube.com/embed/NxZx9nz67Bc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/ReSpeaker-6-Mic-Circular-Array-Kit-for-Raspberry-Pi-p-3067.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

- 2つのADCチップと1つのDACチップ
- 8入力および8出力チャンネル
- 6つのマイクアレイ
- Grove サポート
- Raspberry Pi 互換（Raspberry Pi Zero および Zero W、Raspberry Pi B+、Raspberry Pi 2 B、Raspberry Pi 3 B、Raspberry Pi 3 B+、Raspberry Pi 3 A+、Raspberry Pi 4 をサポート）
- ヘッドセットおよびスピーカー音声出力

## 仕様

- 2 x X-Power AC108 ADC
- 6 x 高性能マイク
- 1 x X-Power AC101 DAC
- 音声出力:
  - 3.5mm ヘッドセットオーディオジャック
  - スピーカージャック
- Raspberry Pi 40ピンヘッダーと互換
- マイク: MSM321A3729H9CP
- 感度: -22 dBFS（全方向性）
- SNR: 59 dB
- 最大サンプルレート: 48Khz

## 応用例

- スマートスピーカー
- インテリジェント音声アシスタントシステム
- 音声レコーダー
- 音声会議システム
- 会議用通信機器
- 音声対話ロボット
- 車載音声アシスタント
- その他の音声コマンドが必要なシナリオ

## ハードウェア概要

**システム図**

<a href="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc.png"/></a>

**インターフェース**

![](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/hardware.jpg)

:::note
接続後、必ずマルチメーターを使用して、回路の導通が上記の図に示されている通りであることを確認してください。
:::

## 組立図

![](https://files.seeedstudio.com/wiki/Bazaar_file/107990055/img/ab.png)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bazaar_file/107990055/img/6-mic_array_assemble.gif" /></p>

## はじめに

### ハードウェア

**必要条件**

ReSpeaker 6-Mic Circular Array x1

[Raspberry Pi 3B または 3B+](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B%2B-p-3037.html?utm_source=homepage&utm_medium=homepagebanner&utm_campaign=hp_0605) x1

[Micro-USB ケーブル](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) x1

PC x1

イヤホンまたはスピーカー x1

:::tip
実際には、ReSpeaker 6-Mic Circular Array は Raspberry Pi Zero、Raspberry Pi 1 B+、Raspberry Pi 2 B、Raspberry Pi 3 B、Raspberry Pi 3 Model B+、Raspberry Pi 3 A+、および Raspberry Pi 4 をサポートしています。このガイドでは Raspberry Pi 3 を使用しています。
:::

**接続**

**ステップ 1.** *ReSpeaker Voice Accessory HAT* を *ReSpeaker 6-Mic Circular Array* にリボンケーブルで接続します。

**ステップ 2.** *ReSpeaker Voice Accessory HAT* を 40 ピン GPIO を介して *Raspberry Pi* に差し込みます。

**ステップ 3.** *イヤホン* を *3.5mm ヘッドセットオーディオジャック* に差し込むか、*スピーカー* を *JST 2.0 スピーカージャック* に差し込みます。

**ステップ 4.** *Raspberry Pi* を *PC* に micro-USB ケーブルで接続します。

![画像はこちら](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/6-mic.jpg)

### ソフトウェア

**必要条件**

*プラン A*

[PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

*Putty* またはその他の *ssh* ツールを使用して Raspberry Pi に接続する必要があります。開始する前に以下を確認してください：

1. Raspberry Pi の *ssh* 機能を有効にして、Putty が接続できるようにします。*ssh* を有効にする方法がわからない場合は、`how to setup ssh raspberry pi` を Google で検索してください。

2. Raspberry Pi と PC が同じ WiFi ネットワーク上で動作していることを確認します。WiFi を設定する方法がわからない場合は、`how to setup wifi raspberry pi` を Google で検索してください。

3. Raspberry Pi の IP アドレスを取得します。IP アドレスの取得方法がわからない場合は、[Raspberry Pi 公式ドキュメント](https://www.raspberrypi.org/documentation/remote-access/ip-address.md) を参照してください。

4. IP アドレスを使用して、Putty の ssh サーバーを介して Raspberry Pi と PC を接続します。

![画像](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/putty.png)

次に、ホスト名とパスワードを入力してください。デフォルトの ID は `pi`、パスワードは `raspberry` です。

```
login as: pi
pi@192.168.43.210's password:raspberry
```

これで接続完了です。Putty 内でコマンドを入力して Raspberry Pi を操作できます。

[VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/)

このキットを Alexa または DuerOS と連携させるには、認証を取得するためにウェブサイトを開く必要があります。そのため、*VNC Viewer* を使用して Amazon または Baidu アカウントにログインする必要があります。Raspberry Pi の *VNC* サービスを有効にしていることを確認してください。

または、プラン B を検討することもできます。

*プラン B*

上記の手順が面倒な場合は、HDMI モニターを使用し、USB キーボードと USB マウスを Raspberry Pi に接続するだけで簡単に動作します。

**ステップ 1. seeed-voicecard をインストール**

seeed voice card のソースコードを取得し、すべての Linux カーネルドライバーをインストールします。

```
sudo apt-get update
sudo apt-get upgrade
git clone https://github.com/respeaker/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh   
sudo reboot
```

**ステップ 2. サウンドカードを確認**

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

録音して再生するか、録音と再生を同時に行うことができます。

```
#AC108で音声をキャプチャし、a.wavとして保存します
arecord -Dac108 -f S32_LE -r 16000 -c 8 a.wav
#キャプチャされたマイク音声は最初の6チャンネルにあります

#AC101で音声ファイルa.wavを再生します
aplay -D ac101 a.wav
#waveファイルが単一チャンネルの場合を除き、-D plughw:1,0を直接使用しないでください。

#録音と再生を同時に行う
arecord -D hw:1,0 -f S32_LE -r 16000 -c 8 to_be_record.wav &
#mono_to_play.wavは再生する単一チャンネルのwaveファイルです
aplay -D plughw:1,0 -r 16000 mono_to_play.wav

```

:::note
6-Mic Circular Array Kit（または4-Mics Linear Array Kit）を使用してキャプチャと再生を同時に行う際の制限事項：

-1. キャプチャは必ず先に開始する必要があります。そうしないと、キャプチャチャンネルが乱れる可能性があります。

-2. 再生出力チャンネルには、8つの同じチャンネルデータまたは4つの同じステレオチャンネルデータを入力する必要があります。そうしないと、スピーカーやヘッドフォンが音を出さない可能性があります。

-3. 同時に再生と録音を行いたい場合、再生する音楽ファイルはモノラルである必要があります。そうでない場合、このコマンドを使用して再生することはできません。
:::

Audacityを使用して再生と録音を行うこともできます。

:::tip
Audacityを開く際はVNCを使用するか、モニターを使用して開いてください。
:::

```
sudo apt update
sudo apt install audacity
audacity                      // Audacityを実行
```

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/audacity.png)

### LEDを使った再生

6-Mic Circular Arrayには12個のGRB LEDが搭載されています。これらのLEDを自分で設定することができます。では、LEDを点灯させる方法を見てみましょう。

```
git clone --depth 1 https://github.com/respeaker/pixel_ring.git
cd pixel_ring
pip install -U -e .
python examples/respeaker_4mic_array.py
```

LEDが点灯して動作するのが確認できます。また、`python examples/respeaker_4mic_array.py`ファイルを参照して独自のエフェクトを作成することもできます。

## リアルタイム音源定位と追跡

[ODAS](https://github.com/introlab/odas)はOpen embeddeD Audition Systemの略で、音源の定位、追跡、分離、ポストフィルタリングを行うためのライブラリです。これを使って楽しんでみましょう。

- ステップ1. ODASを取得してビルドします。

```
sudo apt-get install libfftw3-dev libconfig-dev libasound2-dev libgconf-2-4
sudo apt-get install cmake
git clone https://github.com/introlab/odas.git
mkdir odas/build
cd odas/build
cmake ..
make
```

- ステップ2. [ODAS Studio](https://github.com/introlab/odas_web/releases)を取得して開きます。

- ステップ3. odascoreは**odas/bin/odaslive**にあり、**設定ファイル**は[こちら](https://raw.githubusercontent.com/xiongyihui/odas/master/config/odaslive/respeaker_6_mic_array.cfg)にあります。

![](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/odas.png)

## 音声の抽出

音声を抽出するために[PyAudio Pythonライブラリ](https://people.csail.mit.edu/hubert/pyaudio/)を使用します。

- ステップ1. 以下のスクリプトを実行して6 Mic Pi Hatのデバイスインデックス番号を取得します。

```python
sudo pip install pyaudio
cd ~
nano get_index.py
```

- ステップ2. 以下のコードをコピーしてget_index.pyに貼り付けます。

```python
import pyaudio

p = pyaudio.PyAudio()
info = p.get_host_api_info_by_index(0)
numdevices = info.get('deviceCount')

for i in range(0, numdevices):
        if (p.get_device_info_by_host_api_device_index(0, i).get('maxInputChannels')) > 0:
            print "Input Device id ", i, " - ", p.get_device_info_by_host_api_device_index(0, i).get('name')
```

- ステップ3. Ctrl + Xを押して終了し、Yを押して保存します。

- ステップ4. 'sudo python get_index.py'を実行すると、以下のようにデバイスIDが表示されます。

```
Input Device id  2  -  seeed-8mic-voicecard: - (hw:1,0)
```

- ステップ5. `RESPEAKER_INDEX = 2`をインデックス番号に変更します。Pythonスクリプトrecord.pyを実行して音声を録音します。

```python
import pyaudio
import wave

RESPEAKER_RATE = 16000
RESPEAKER_CHANNELS = 8 
RESPEAKER_WIDTH = 2
# getDeviceInfo.pyを実行してインデックスを取得
RESPEAKER_INDEX = 2  # 入力デバイスIDを参照
CHUNK = 1024
RECORD_SECONDS = 5
WAVE_OUTPUT_FILENAME = "output.wav"

p = pyaudio.PyAudio()

stream = p.open(
            rate=RESPEAKER_RATE,
            format=p.get_format_from_width(RESPEAKER_WIDTH),
            channels=RESPEAKER_CHANNELS,
            input=True,
            input_device_index=RESPEAKER_INDEX,)

print("* 録音中")

frames = []

for i in range(0, int(RESPEAKER_RATE / CHUNK * RECORD_SECONDS)):
    data = stream.read(CHUNK)
    frames.append(data)

print("* 録音完了")

stream.stop_stream()
stream.close()
p.terminate()

wf = wave.open(WAVE_OUTPUT_FILENAME, 'wb')
wf.setnchannels(RESPEAKER_CHANNELS)
wf.setsampwidth(p.get_sample_size(p.get_format_from_width(RESPEAKER_WIDTH)))
wf.setframerate(RESPEAKER_RATE)
wf.writeframes(b''.join(frames))
wf.close()
```

- ステップ6. 8チャンネルからチャンネル0のデータを抽出したい場合は、以下のコードを使用してください。他のチャンネルXの場合は、[0::8]を[X::8]に変更してください。

```python
import pyaudio
import wave
import numpy as np

RESPEAKER_RATE = 16000
RESPEAKER_CHANNELS = 8
RESPEAKER_WIDTH = 2
# getDeviceInfo.pyを実行してインデックスを取得
RESPEAKER_INDEX = 2  # 入力デバイスIDを参照
CHUNK = 1024
RECORD_SECONDS = 3
WAVE_OUTPUT_FILENAME = "output.wav"

p = pyaudio.PyAudio()

stream = p.open(
            rate=RESPEAKER_RATE,
            format=p.get_format_from_width(RESPEAKER_WIDTH),
            channels=RESPEAKER_CHANNELS,
            input=True,
            input_device_index=RESPEAKER_INDEX,)

print("* 録音中")

frames = [] 

for i in range(0, int(RESPEAKER_RATE / CHUNK * RECORD_SECONDS)):
    data = stream.read(CHUNK)
    # 8チャンネルからチャンネル0のデータを抽出。チャンネル1を抽出する場合は[1::8]に変更
    a = np.fromstring(data,dtype=np.int16)[0::8]
    frames.append(a.tostring())

print("* 録音完了")

stream.stop_stream()
stream.close()
p.terminate()

wf = wave.open(WAVE_OUTPUT_FILENAME, 'wb')
wf.setnchannels(1)
wf.setsampwidth(p.get_sample_size(p.get_format_from_width(RESPEAKER_WIDTH)))
wf.setframerate(RESPEAKER_RATE)
wf.writeframes(b''.join(frames))
wf.close()
```

## DOA

### キーワードを使用した DOA

**要件**

- pyaudio
- numpy
- snowboy

**インストール**

pyaudio、numpy、および snowboy をインストールします。仮想 Python 環境として virtualenv を使用してください。

```shell
sudo apt install python-pyaudio python-numpy python-virtualenv
sudo apt-get install swig python-dev libatlas-base-dev build-essential make
git clone --depth 1 https://github.com/Kitt-AI/snowboy.git
cd snowboy
virtualenv --system-site-packages env
source env/bin/activate
python setup.py build
python setup.py bdist_wheel
pip install dist/snowboy*.whl
git clone https://github.com/voice-engine/voice-engine.git
cd voice-engine
python setup.py bdist_wheel
pip install dist/*.whl
```

**Snowboy を試してみましょう**

- ステップ 1. `kws_doa.py` を実行します。

```shell
cd ~/voice-engine/examples/respeaker_6mic_array_for_pi/
python kws_doa.py
```

以下は `kws_doa.py` のコードです。

```python
"""
キーワード "snowboy" を検索します。
キーワードを検出した後、到来方向 (DOA) を推定します。

ハードウェア: ReSpeaker 6 Mic Array for Raspberry Pi
"""

import sys
import time
from voice_engine.source import Source
from voice_engine.channel_picker import ChannelPicker
from voice_engine.kws import KWS
from voice_engine.doa_respeaker_6mic_array import DOA


def main():
    src = Source(rate=16000, channels=8)
    ch0 = ChannelPicker(channels=src.channels, pick=0)
    kws = KWS(model='snowboy', sensitivity=0.6, verbose=True)
    doa = DOA(rate=16000)

    src.link(ch0)
    ch0.link(kws)
    src.link(doa)

    def on_detected(keyword):
        print('検出されたキーワード: {}、方向: {}'.format(keyword, doa.get_direction()))

    kws.set_callback(on_detected)

    src.recursive_start()
    while True:
        try:
            time.sleep(1)
        except KeyboardInterrupt:
            break

    src.recursive_stop()

    # 他のスレッドが終了するのを待つために 1 秒待機
    time.sleep(1)


if __name__ == '__main__':
    main()
```

- ステップ 2. "snowboy" と言ってみて、DOA の出力を確認します。

```shell
(env) pi@raspberrypi:~/voice-engine/examples/respeaker_6mic_array_for_pi $ python kws_doa.py 
['arecord', '-t', 'raw', '-f', 'S16_LE', '-c', '8', '-r', '16000', '-D', 'default', '-q']
0000000000000000000000000000000000000000000000000000000000000000000000000000000002222222222222222222222222222222222222222222222/usr/local/lib/python2.7/dist-packages/voice_engine-0.1.3-py2.7.egg/voice_engine/gcc_phat.py:22: RuntimeWarning: invalid value encountered in divide
  cc = np.fft.irfft(R / np.abs(R), n=(interp * n))
検出されたキーワード: 1、方向: 283.32811392
3000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002222222222222222222222222222222222222222222222検出されたキーワード: 1、方向: 210.0
30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002222222222222222222222222222222222222222222222検出されたキーワード: 1、方向: 62.5448292531
30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002222222222222222222222222222222222222222222222222検出されたキーワード: 1、方向: 62.5448292531
300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002222222222222222222222222222222222222222222検出されたキーワード: 1、方向: 223.32811392
300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022222222222222222222222222222222222222222222222222検出されたキーワード: 1、方向: 223.32811392
30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000222222222222222222222222222222222222222検出されたキーワード: 1、方向: 283.32811392
300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002222222222222222222222222222222222222222222検出されたキーワード: 1、方向: 237.455170747
```

## ボタン

ReSpeaker 6-Mic が Raspberry Pi に正しくインストールされているか確認したい場合、ボタンを使用するのは良い方法です。以下のコードを使用して確認できます。

```python
import RPi.GPIO as GPIO
import time

BUTTON = 26

GPIO.setmode(GPIO.BCM)
GPIO.setup(BUTTON, GPIO.IN)

while True:
    state = GPIO.input(BUTTON)
    if state:
        print("オフ")
    else:
        print("オン")
    time.sleep(1)
```

## FAQ

**Q1: マイクアレイには6つのマイクしかないのに、どうして8チャンネルになるのですか？**

A1: このアレイには2つのAC108が搭載されており、各AC108チップは4チャンネルの出力を持っています。そのため、合計で8チャンネルとなります。このうち6つはマイク用で、残りの2つは再生チャンネルです。

**Q2: Raspberry Pi が ReSpeaker 2-Mics HAT を検出できるのに、ReSpeaker 6-Mics Circular Array を検出できない場合は？**

A2: Raspberry Pi の「Preferences」->「Raspberry Pi Configuration」をクリックし、「Interfaces」タブを選択してください。そして、1-Wire が無効になっていることを確認してください。

## リソース

- **[PDF]** [AC101 データシート](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/AC101_User_Manual_v1.1.pdf)
- **[PDF]** [AC108 データシート](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/AC108_Datasheet_V1.2.pdf)
- **[Dxf]** [ReSpeaker Circular Array for Voice Accessory HAT with 6 Microphones ケースファイル](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/ReSpeaker%20Circular%20Array%20for%20Voice%20Accessory%20HAT%20with%206%20Microphones.dxf)
- **[Dxf]** [ReSpeaker Circular Array for Voice Accessory HAT with 6 Microphone 2D ファイル](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/2d.zip)
- **[Driver]** [Seeed-Voice ドライバ](https://github.com/respeaker/seeed-voicecard)
- **[Algorithms]** [DOA、VAD、NS を含むアルゴリズム](https://github.com/respeaker/mic_array)
- **[Voice Engine]** [Voice Engine プロジェクト、音声対応オブジェクトを作成するためのビルディングブロックを提供](https://github.com/voice-engine/voice-engine)
- **[Algorithms]** [AEC](https://github.com/voice-engine/ec)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>