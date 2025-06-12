---
description: ReSpeaker Mic Array v2.0
title: ReSpeaker Mic Array v2.0
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ReSpeaker_Mic_Array_v2.0
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

![](https://files.seeedstudio.com/products/107990053/01.png)

ReSpeaker Mic Array v2.0は、オリジナルの[ReSpeaker Mic Array v1.0](https://www.seeedstudio.com/ReSpeaker-Mic-Array-Far-field-w%2F-7-PDM-Microphones--p-2719.html)のアップグレード版です。この改良版は、以前使用されていたXVSM-2000よりもはるかに高性能なXMOSのXVF-3000をベースにしています。この新しいチップセットには、多くの音声認識アルゴリズムが含まれており、パフォーマンスを向上させます。このマイクアレイは、オリジナルのReSpeaker Coreの上に直接スタック（接続）することができ、音声インタラクションのパフォーマンスを大幅に向上させます。また、このバージョンではマイクも改良されており、4つのマイクのみで第1世代のマイクアレイよりも大幅な性能向上を実現しています。

ReSpeaker Mic Array v2.0は、USB Audio Class 1.0（UAC 1.0）を直接サポートしています。Windows、macOS、Linuxを含むすべての主要なオペレーティングシステムがUAC 1.0と互換性があり、ReSpeaker Coreを使用せずにサウンドカードとして機能することができます。また、これらのシステム上でDoA、BF、AECなどの音声アルゴリズムを保持します。

ReSpeaker Mic Array v2.0は、既存の製品や将来の製品に音声インターフェースを追加したいと考えている方にとって優れたソリューションです。また、より高度な音声インターフェース評価へのエントリーポイントとしても適しています。このボードは、リクエストに応じてカスタマイズの柔軟性を提供します。

ReSpeaker Mic Array v2.0には、音声アルゴリズムを含むファームウェアバージョンと、生の音声データ用のファームウェアバージョンの2種類が用意されています。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2.0-p-3053.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

<p style={{textAlign: 'center'}}><a href="https://www.amazon.com/dp/B07D29L3Q1" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/amaon.png"  width="300" height="48"  border="0"/></a></p>

## バージョン

| 製品バージョン            | 変更点                                                                 | リリース日    |
|--------------------------|--------------------------------------------------------------------------|---------------|
| ReSpeaker Mic Array v1.0 | 初期リリース                                                            | 2016年8月15日 |
| ReSpeaker Mic Array v2.0 | XVSM-2000がEOLとなり、MCUをXVF-3000に変更、マイクを7個から4個に削減。 | 2018年1月25日 |

## 特徴

- 遠距離音声キャプチャ
- USB Audio Class 1.0（UAC 1.0）対応
- 4つのマイクアレイ
- 12個のプログラム可能なRGB LEDインジケーター
- 音声アルゴリズムと機能
  - 音声活動検出（Voice Activity Detection）
  - 到来方向検出（Direction of Arrival）
  - ビームフォーミング（Beamforming）
  - ノイズ抑制（Noise Suppression）
  - 残響除去（De-reverberation）
  - 音響エコーキャンセレーション（Acoustic Echo Cancellation）

## 仕様

- XMOS製 XVF-3000
- 高性能デジタルマイク4基
- 遠距離音声キャプチャ対応
- 音声アルゴリズムをオンチップで実行
- 12個のプログラム可能なRGB LEDインジケーター  
- マイク: ST MP34DT01TR-M  
- 感度: -26 dBFS (全指向性)  
- 音響過負荷点: 120 dBSPL  
- SNR: 61 dB  
- 電源: Micro USBまたは拡張ヘッダーからの5V DC  
- 寸法: 直径70mm  
- 3.5mmオーディオジャック出力ソケット
- 消費電力: LEDオン時5V, 180mA、LEDオフ時5V, 170mA
- 最大サンプルレート: 16kHz

## ハードウェア概要

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/Hardware%20Overview.png)

- **<font face="" size="3" font color="ff0000">①</font> XMOS XVF-3000:**
高度なDSPアルゴリズムを統合しており、これには音響エコーキャンセレーション（AEC）、ビームフォーミング、残響除去、ノイズ抑制、ゲイン制御が含まれます。

- **<font face="" size="3" font color="ff0000">②</font> デジタルマイク:**
MP34DT01-Mは、超小型で低消費電力の全指向性デジタルMEMSマイクで、容量性センシング要素とICインターフェースを備えています。

- **<font face="" size="3" font color="ff0000">③</font> RGB LED:**
三色のRGB LED。

- **<font face="" size="3" font color="ff0000">④</font> USBポート:**
マイクアレイに電力を供給し、制御します。

- **<font face="" size="3" font color="ff0000">⑤</font> 3.5mmヘッドフォンジャック:**
オーディオ出力用。アクティブスピーカーまたはヘッドフォンをこのポートに接続できます。

- **<font face="" size="3" font color="ff0000">⑥</font> WM8960:**
WM8960は、クラスDスピーカードライバーを備えた低消費電力ステレオコーデックで、8Ω負荷に対して1W/チャンネルを提供します。

**システム図**
![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/system_diag.png)

**ピンマップ**
![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/Pin_Map.png)

**寸法**
![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/Dimension.png)

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/Dimension1.png)

<iframe src="https://3dwarehouse.sketchup.com/embed.html?mid=759d56d7-c97c-4aa7-ad96-3ca1e0d5a13e" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="800" height="450" allowfullscreen></iframe>

## アプリケーション

- USB音声キャプチャ
- スマートスピーカー
- インテリジェント音声アシスタントシステム
- 音声レコーダー
- 音声会議システム
- 会議用通信機器
- 音声対話ロボット
- 車載音声アシスタント
- その他の音声インターフェースシナリオ

## はじめに

:::note
ReSpeaker Mic Array v2.0は、Windows、Mac、Linuxシステム、Androidに対応しています。以下のスクリプトはPython2.7でテストされています。
:::

Androidの場合、[emteria.OS](https://help.emteria.com/kb/emteria-os-installation)（Android 7.1）をRaspberryでテストしました。Mic Array v2.0をRaspberry PiのUSBポートに接続し、ReSpeaker Mic Array v2.0をオーディオデバイスとして選択します。以下はオーディオ録音画面です。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/andriod7.1_record.png)

以下はオーディオ再生画面です。スピーカーをReSpeaker Mic Array v2.0の3.5mmオーディオジャックに接続し、録音した音声を再生します。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/andriod7.1_play.png)

### ファームウェアの更新

ファームウェアは2種類あります。1つは1チャンネルデータを含み、もう1つは6チャンネルデータ（工場出荷時のファームウェア）を含みます。以下はその違いを示す表です。

| ファームウェア             | チャンネル数 | 備考                                                                                                                                                                    |
|----------------------|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1_channel_firmware.bin  | 1              | ASR用に処理されたオーディオ |
| 6_channels_firmware.bin | 6  | チャンネル0: ASR用に処理されたオーディオ <br /> チャンネル1: マイク1の生データ <br /> チャンネル2: マイク2の生データ <br /> チャンネル3: マイク3の生データ <br /> チャンネル4: マイク4の生データ <br /> チャンネル5: 再生データの統合 |

**Linuxの場合:** Mic ArrayはUSB DFUをサポートしています。USB経由でファームウェアを更新するために、Pythonスクリプト`dfu.py`を開発しました。

```python
sudo apt-get update
sudo pip install pyusb click
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
sudo python dfu.py --download 6_channels_firmware.bin  # 6チャンネルバージョン

# 1チャンネルを使用したい場合は、以下のコマンドを使用してください:

sudo python dfu.py --download 1_channel_firmware.bin

```

以下はファームウェアダウンロード結果です。
![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/Download_firmware.png)

**Windows/Macの場合:** Windows/MacおよびLinux仮想マシンを使用してファームウェアを更新することは推奨しません。

### 開封後のデモ

以下は6チャンネルファームウェアを使用した音響エコーキャンセレーションの例です。

- ステップ1. USBケーブルをPCに接続し、オーディオジャックをスピーカーに接続します。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/playback.jpg)

- ステップ2. PC側でMic Array v2.0を出力デバイスとして選択します。
- ステップ3. Audacityを起動して録音を開始します。
- ステップ4. まずPC側で音楽を再生し、その後話します。
- ステップ5. 以下のようにAudacity画面が表示されます。各チャンネルのオーディオを聞くには**Solo**をクリックしてください。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/Audacity.png)

チャンネル0オーディオ（アルゴリズムで処理済み）:

<audio controls="controls">
  <source type="audio/wav" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel0_asr.wav" />
  <source type="audio/ogg" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel0_asr.ogg" />
</audio>

チャンネル1オーディオ（マイク1の生データ）:

<audio controls="controls">
  <source type="audio/wav" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel1_raw.wav" />
  <source type="audio/ogg" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel1_raw.ogg" />
</audio>

チャンネル5オーディオ（再生データ）:

<audio controls="controls">
  <source type="audio/wav" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel5_playback.wav" />
  <source type="audio/ogg" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel5_playback.ogg" />
</audio>

以下は提供された内容の日本語翻訳です：

---

ここにDOAとAECに関するビデオがあります。

<iframe width="800" height="450" src="https://www.youtube.com/embed/XivM-6PRgX8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### DFUおよびLED制御ドライバーのインストール  

- **Windows:** オーディオ録音と再生はデフォルトで正常に動作します。WindowsでLEDやDSPパラメータを制御するには、libusb-win32ドライバーが必要です。[便利なツール - Zadig](http://zadig.akeo.ie/)を使用して、`SEEED DFU`と`SEEED Control`の両方にlibusb-win32ドライバーをインストールします（ReSpeaker Mic ArrayはWindowsデバイスマネージャーに2つのデバイスとして表示されます）。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/usb_4mic_array_driver.png)

:::caution
    必ずlibusb-win32を選択してください。WinUSBやlibusbKを選択しないでください。
:::

- **MAC:** ドライバーは不要です。
- **Linux:** ドライバーは不要です。

### チューニング

**Linux/Mac/Windowsの場合:** 組み込みアルゴリズムのいくつかのパラメータを設定できます。

- パラメータの完全なリストを取得するには、FAQを参照してください。

```
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
python tuning.py -p
```

- 例#1、自動ゲイン制御（AGC）をオフにすることができます：

```
python tuning.py AGCONOFF 0
```

- 例#2、DOA角度を確認することができます。

```
pi@raspberrypi:~/usb_4_mic_array $ sudo python tuning.py DOAANGLE
DOAANGLE: 180
```

### LEDの制御

ReSpeaker Mic Array V2のLEDはUSBを介して制御できます。このUSBデバイスにはベンダー固有のクラスインターフェイスがあり、USBコントロール転送を通じてデータを送信できます。[pyusb Pythonライブラリ](https://github.com/pyusb/pyusb)を参考にして、[usb_pixel_ring Pythonライブラリ](https://github.com/respeaker/pixel_ring/blob/master/pixel_ring/usb_pixel_ring_v2.py)を作成しました。

LED制御コマンドはpyusbのusb.core.Device.ctrl_transfer()によって送信されます。そのパラメータは以下の通りです：

```
ctrl_transfer(usb.util.CTRL_OUT | usb.util.CTRL_TYPE_VENDOR | usb.util.CTRL_RECIPIENT_DEVICE, 0, command, 0x1C, data, TIMEOUT)
```

以下はusb_pixel_ring APIです。

| コマンド | データ                           | API                            | 備考                                                                                                              |
|---------|--------------------------------|--------------------------------|-------------------------------------------------------------------------------------------------------------------|
| 0       | [0]                            | pixel_ring.trace()             | トレースモード、LEDはVAD*とDOA*に応じて変化します                                                                |
| 1       | [red, green, blue, 0]          | pixel_ring.mono()              | モノモード、すべてのRGB LEDを単一の色に設定します。例：赤(0xFF0000)、緑(0x00FF00)、青(0x0000FF)                  |
| 2       | [0]                            | pixel_ring.listen()            | リスンモード、トレースモードに似ていますが、LEDをオフにしません                                                   |
| 3       | [0]                            | pixel_ring.speak()             | 待機モード                                                                                                       |
| 4       | [0]                            | pixel_ring.think()             | スピークモード                                                                                                   |
| 5       | [0]                            | pixel_ring.spin()              | スピンモード                                                                                                     |
| 6       | [r, g, b, 0] * 12              | pixel_ring.custimize()         | カスタムモード、各LEDを独自の色に設定します                                                                       |
| 0x20    | [brightness]                   | pixel_ring.set_brightness()    | 明るさを設定、範囲：0x00~0x1F                                                                                     |
| 0x21    | [r1, g1, b1, 0, r2, g2, b2, 0] | pixel_ring.set_color_palette() | カラーパレットを設定、例：pixel_ring.set_color_palette(0xff0000, 0x00ff00)をpixel_ring.think()と一緒に使用         |
| 0x22    | [vad_led]                      | pixel_ring.set_vad_led()       | 中央LEDを設定：0 - オフ、1 - オン、その他 - VADに依存                                                             |
| 0x23    | [volume]                       | pixel_ring.set_volume()        | 音量を表示、範囲：0 ~ 12                                                                                         |
| 0x24    | [pattern]                      | pixel_ring.change_pattern()    | パターンを設定、0 - Google Homeパターン、その他 - Echoパターン                                                   |

**Linuxの場合:** 以下はLEDを制御する例です。以下のコマンドを実行してデモを動かしてください。

```python
git clone https://github.com/respeaker/pixel_ring.git
cd pixel_ring
sudo python setup.py install
sudo python examples/usb_mic_array.py
```

以下はusb_mic_array.pyのコードです。

```python
import time
from pixel_ring import pixel_ring


if __name__ == '__main__':
    pixel_ring.change_pattern('echo')
    while True:

        try:
            pixel_ring.wakeup()
            time.sleep(3)
            pixel_ring.think()
            time.sleep(3)
            pixel_ring.speak()
            time.sleep(6)
            pixel_ring.off()
            time.sleep(3)
        except KeyboardInterrupt:
            break


    pixel_ring.off()
    time.sleep(1)

```

**Windows/Macの場合:** 以下はLEDを制御する例です。

- ステップ1. pixel_ringをダウンロードします。

```python
git clone https://github.com/respeaker/pixel_ring.git
cd pixel_ring/pixel_ring
```

- ステップ2. 以下のコードを含む[led_control.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/led_control.py)を作成し、'python led_control.py'を実行します。

```python
from usb_pixel_ring_v2 import PixelRing
import usb.core
import usb.util
import time

dev = usb.core.find(idVendor=0x2886, idProduct=0x0018)
print dev
if dev:
    pixel_ring = PixelRing(dev)

    while True:
        try:
            pixel_ring.wakeup(180)
            time.sleep(3)
            pixel_ring.listen()
            time.sleep(3)
            pixel_ring.think()
            time.sleep(3)
            pixel_ring.set_volume(8)
            time.sleep(3)
            pixel_ring.off()
            time.sleep(3)
        except KeyboardInterrupt:
            break

    pixel_ring.off()
```

:::note
画面に「None」と表示された場合は、libusb-win32 ドライバーを再インストールしてください。
:::

### DOA (到来方向)

**Windows/Mac/Linux 用:** DOA を確認するための例を以下に示します。緑色の LED が音声方向のインジケーターです。角度についてはハードウェア概要を参照してください。

- ステップ 1. usb_4_mic_array をダウンロードします。

```python
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
```

- ステップ 2. usb_4_mic_array フォルダ内に以下のコードを含む [DOA.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/DOA.py) を作成し、'python DOA.py' を実行します。

```python
from tuning import Tuning
import usb.core
import usb.util
import time

dev = usb.core.find(idVendor=0x2886, idProduct=0x0018)

if dev:
    Mic_tuning = Tuning(dev)
    print Mic_tuning.direction
    while True:
        try:
            print Mic_tuning.direction
            time.sleep(1)
        except KeyboardInterrupt:
            break
```

- ステップ 3. 以下のように DOA が表示されます。

```
pi@raspberrypi:~/usb_4_mic_array $ sudo python doa.py 
184
183
175
105
104
104
103
```

### VAD (音声活動検出)

**Windows/Mac/Linux 用:** VAD を確認するための例を以下に示します。赤色の LED が VAD のインジケーターです。

- ステップ 1. usb_4_mic_array をダウンロードします。

```python
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
```

- ステップ 2. usb_4_mic_array フォルダ内に以下のコードを含む [VAD.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/VAD.py) を作成し、'python VAD.py' を実行します。

```python
from tuning import Tuning
import usb.core
import usb.util
import time

dev = usb.core.find(idVendor=0x2886, idProduct=0x0018)
#print dev
if dev:
    Mic_tuning = Tuning(dev)
    print Mic_tuning.is_voice()
    while True:
        try:
            print Mic_tuning.is_voice()
            time.sleep(1)
        except KeyboardInterrupt:
            break
```

- ステップ 3. 以下のように VAD が表示されます。

```
pi@raspberrypi:~/usb_4_mic_array $ sudo python VAD.py 
0
0
0
1
0
1
0
```

:::note
VAD のしきい値については、GAMMAVAD_SR を使用して設定することもできます。詳細は [Tuning](https://wiki.seeedstudio.com/ja/ReSpeaker_Mic_Array_v2.0/#tuning) を参照してください。
:::

### 音声の抽出

USB を介して音声を抽出するために [PyAudio Python ライブラリ](https://people.csail.mit.edu/hubert/pyaudio/) を使用します。

**Linux 用:** 以下のコマンドを使用して音声を録音または再生できます。

```python
arecord -D plughw:1,0 -f cd test.wav # 録音、まず arecord -l を使用してカードとハードウェアを確認してください
aplay -D plughw:1,0 -f cd test.wav # 再生、まず aplay -l を使用してカードとハードウェアを確認してください
arecord -D plughw:1,0 -f cd |aplay -D plughw:1,0 -f cd # 録音と再生を同時に行う
```

Python スクリプトを使用して音声を抽出することもできます。

- ステップ 1. 以下のスクリプトを実行して Mic Array のデバイスインデックス番号を取得します。

```python
sudo pip install pyaudio
cd ~
nano get_index.py
```

- ステップ 2. 以下のコードをコピーして [get_index.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/get_index.py) に貼り付けます。

```python
import pyaudio

p = pyaudio.PyAudio()
info = p.get_host_api_info_by_index(0)
numdevices = info.get('deviceCount')

for i in range(0, numdevices):
        if (p.get_device_info_by_host_api_device_index(0, i).get('maxInputChannels')) > 0:
            print "Input Device id ", i, " - ", p.get_device_info_by_host_api_device_index(0, i).get('name')
```

- ステップ 3. `Ctrl` + `X` を押して終了し、Y を押して保存します。

- ステップ 4. 'sudo python get_index.py' を実行すると、以下のようにデバイス ID が表示されます。

```
Input Device id  2  -  ReSpeaker 4 Mic Array (UAC1.0): USB Audio (hw:1,0)
```

- ステップ 5. `RESPEAKER_INDEX = 2` をインデックス番号に変更します。Python スクリプト [record.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/record.py) を実行して音声を録音します。

```python
import pyaudio
import wave

RESPEAKER_RATE = 16000
RESPEAKER_CHANNELS = 6 # ファームウェアに基づいて変更、1_channel_firmware.bin は 1、6_channels_firmware.bin は 6
RESPEAKER_WIDTH = 2
# getDeviceInfo.py を実行してインデックスを取得
RESPEAKER_INDEX = 2  # 入力デバイス ID を参照
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

print("* recording")

frames = []

for i in range(0, int(RESPEAKER_RATE / CHUNK * RECORD_SECONDS)):
    data = stream.read(CHUNK)
    frames.append(data)

print("* done recording")

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

- ステップ 6. 6 チャンネルからチャンネル 0 のデータを抽出したい場合は、以下のコードを使用します。他のチャンネル X を抽出する場合は、[0::6] を [X::6] に変更してください。

```python
import pyaudio
import wave
import numpy as np

RESPEAKER_RATE = 16000
RESPEAKER_CHANNELS = 6 # ファームウェアに基づいて変更、1_channel_firmware.bin は 1、6_channels_firmware.bin は 6
RESPEAKER_WIDTH = 2
# getDeviceInfo.py を実行してインデックスを取得
RESPEAKER_INDEX = 3  # 入力デバイス ID を参照
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

print("* recording")

frames = [] 

for i in range(0, int(RESPEAKER_RATE / CHUNK * RECORD_SECONDS)):
    data = stream.read(CHUNK)
    # 6 チャンネルからチャンネル 0 のデータを抽出、チャンネル 1 を抽出したい場合は [1::6] に変更
    a = np.fromstring(data,dtype=np.int16)[0::6]
    frames.append(a.tostring())

print("* done recording")

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

**Windowsの場合:**

- ステップ1. 以下のコマンドを実行してpyaudioをインストールします。

```
 pip install pyaudio
```

- ステップ2. [get_index.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/get_index.py) を使用してデバイスインデックスを取得します。

```
C:\Users\XXX\Desktop>python get_index.py
Input Device id  0  -  Microsoft Sound Mapper - Input
Input Device id  1  -  ReSpeaker 4 Mic Array (UAC1.0)
Input Device id  2  -  Internal Microphone (Conexant I)
```

- ステップ3. [record.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/record.py) のデバイスインデックスとチャンネルを変更し、音声を抽出します。

```
C:\Users\XXX\Desktop>python record.py
* recording
* done recording
```

:::caution
「Error: %1 is not a valid Win32 application.」というエラーが表示された場合は、PythonのWin32バージョンをインストールしてください。
:::

**Macの場合:**

- ステップ1. 以下のコマンドを実行してpyaudioをインストールします。

```
 pip install pyaudio
```

- ステップ2. [get_index.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/get_index.py) を使用してデバイスインデックスを取得します。

```
MacBook-Air:Desktop XXX$ python get_index.py 
Input Device id  0  -  Built-in Microphone
Input Device id  2  -  ReSpeaker 4 Mic Array (UAC1.0)
```

- ステップ3. [record.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/record.py) のデバイスインデックスとチャンネルを変更し、音声を抽出します。

```
MacBook-Air:Desktop XXX$ python record.py 
2018-03-24 14:53:02.400 Python[2360:16629] 14:53:02.399 WARNING:  140: This application, or a library it uses, is using the deprecated Carbon Component Manager for hosting Audio Units. Support for this will be removed in a future release. Also, this makes the host incompatible with version 3 audio units. Please transition to the API's in AudioComponent.h.
* recording
* done recording
```

### リアルタイム音源定位と追跡

[ODAS](https://github.com/introlab/odas) は、Open embeddeD Audition Systemの略です。このライブラリは、音源の定位、追跡、分離、ポストフィルタリングを実行するために設計されています。これを使って楽しみましょう。

**Linuxの場合:**

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

- ステップ2. [ODAS Studio](https://github.com/introlab/odas_web/releases) を取得して開きます。

```
sudo apt install nodejs
sudo apt install npm
git clone https://github.com/introlab/odas_web
cd odas_web
npm install
npm start
```

- ステップ3. odascoreは **odas/bin/odaslive** にあり、**設定ファイル**は [odas.cfg](https://raw.githubusercontent.com/respeaker/usb_4_mic_array/master/odas.cfg) です。

- ステップ4. 4チャンネルの生オーディオデータを含む6_channels_firmware.binでマイクアレイをアップグレードします。

<iframe width="800" height="500" src="https://www.youtube.com/embed/K5gZabfaaPI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

**Windows/Macの場合:** [ODAS](https://github.com/introlab/odas) を参照してください。

## FAQ

**Q1: 内蔵アルゴリズムのパラメータ**

```
pi@raspberrypi:~/usb_4_mic_array $ python tuning.py -p
name   type max min r/w info
-------------------------------
AECFREEZEONOFF   int 1 0 rw Adaptive Echo Canceler updates inhibit.
                                                            0 = 適応有効
                                                            1 = 適応停止、フィルタのみ
AECNORM          float 16 0.25 rw AECフィルタ係数のノルムの制限
AECPATHCHANGE    int 1 0 ro AECパス変更検出。
                                                            0 = 検出なし
                                                            1 = 検出あり
AECSILENCELEVEL  float 1 1e-09 rw AECの信号検出閾値 [-inf .. 0] dBov (デフォルト: -80dBov = 10log10(1x10-8))
AECSILENCEMODE   int 1 0 ro AEC遠端無音検出ステータス。
                                                            0 = 信号検出
                                                            1 = 無音検出
AGCDESIREDLEVEL  float 0.99 1e-08 rw 出力信号の目標電力レベル。
                                                            [−inf .. 0] dBov (デフォルト: −23dBov = 10log10(0.005))
AGCGAIN          float 1000 1 rw 現在のAGCゲイン係数。
                                                            [0 .. 60] dB (デフォルト: 0.0dB = 20log10(1.0))
AGCMAXGAIN       float 1000 1 rw 最大AGCゲイン係数。
                                                            [0 .. 60] dB (デフォルト: 30dB = 20log10(31.6))
AGCONOFF         int 1 0 rw 自動ゲイン制御。
                                                            0 = OFF
                                                            1 = ON
AGCTIME          float 1 0.1 rw ランプアップ/ダウンの時間定数（秒）。
CNIONOFF         int 1 0 rw コンフォートノイズ挿入。
                                                            0 = OFF
                                                            1 = ON
DOAANGLE         int 359 0 ro DOA角度。現在の値。方向はビルド構成に依存。
ECHOONOFF        int 1 0 rw エコー抑制。
                                                            0 = OFF
                                                            1 = ON
FREEZEONOFF      int 1 0 rw 適応ビームフォーマーの更新。
                                                            0 = 適応有効
                                                            1 = 適応停止、フィルタのみ
FSBPATHCHANGE    int 1 0 ro FSBパス変更検出。
                                                            0 = 検出なし
                                                            1 = 検出あり
FSBUPDATED       int 1 0 ro FSB更新決定。
                                                            0 = 更新なし
                                                            1 = 更新あり
GAMMAVAD_SR      float 1000 0 rw 音声活動検出の閾値を設定。
                                                            [−inf .. 60] dB (デフォルト: 3.5dB 20log10(1.5))
GAMMA_E          float 3 0 rw エコー（直接および初期成分）の過剰減衰係数。最小..最大減衰
GAMMA_ENL        float 5 0 rw 非線形エコーの過剰減衰係数。最小..最大減衰
GAMMA_ETAIL      float 3 0 rw エコー（尾部成分）の過剰減衰係数。最小..最大減衰
GAMMA_NN         float 3 0 rw 非定常ノイズの過剰減衰係数。最小..最大減衰
GAMMA_NN_SR      float 3 0 rw ASR用非定常ノイズの過剰減衰係数。
                                                            [0.0 .. 3.0] (デフォルト: 1.1)
GAMMA_NS         float 3 0 rw 定常ノイズの過剰減衰係数。最小..最大減衰
GAMMA_NS_SR      float 3 0 rw ASR用定常ノイズの過剰減衰係数。
                                                            [0.0 .. 3.0] (デフォルト: 1.0)
HPFONOFF         int 3 0 rw マイク信号のハイパスフィルタ。
                                                            0 = OFF
                                                            1 = ON - 70 Hzカットオフ
                                                            2 = ON - 125 Hzカットオフ
                                                            3 = ON - 180 Hzカットオフ
MIN_NN           float 1 0 rw 非定常ノイズ抑制のゲインフロア。
                                                            [−inf .. 0] dB (デフォルト: −10dB = 20log10(0.3))
MIN_NN_SR        float 1 0 rw ASR用非定常ノイズ抑制のゲインフロア。
                                                            [−inf .. 0] dB (デフォルト: −10dB = 20log10(0.3))
MIN_NS           float 1 0 rw 定常ノイズ抑制のゲインフロア。
                                                            [−inf .. 0] dB (デフォルト: −16dB = 20log10(0.15))
MIN_NS_SR        float 1 0 rw ASR用定常ノイズ抑制のゲインフロア。
                                                            [−inf .. 0] dB (デフォルト: −16dB = 20log10(0.15))
NLAEC_MODE       int 2 0 rw 非線形AECトレーニングモード。
                                                            0 = OFF
                                                            1 = ON - フェーズ1
                                                            2 = ON - フェーズ2
NLATTENONOFF     int 1 0 rw 非線形エコー減衰。
                                                            0 = OFF
                                                            1 = ON
NONSTATNOISEONOFF int 1 0 rw 非定常ノイズ抑制。
                                                            0 = OFF
                                                            1 = ON
NONSTATNOISEONOFF_SR int 1 0 rw ASR用非定常ノイズ抑制。
                                                            0 = OFF
                                                            1 = ON
RT60             float 0.9 0.25 ro 現在のRT60推定値（秒）
RT60ONOFF        int 1 0 rw AES用RT60推定。0 = OFF 1 = ON
SPEECHDETECTED   int 1 0 ro 音声検出ステータス。
                                                            0 = 検出なし
                                                            1 = 検出あり
STATNOISEONOFF   int 1 0 rw 定常ノイズ抑制。
                                                            0 = OFF
                                                            1 = ON
STATNOISEONOFF_SR int 1 0 rw ASR用定常ノイズ抑制。
                                                            0 = OFF
                                                            1 = ON
TRANSIENTONOFF   int 1 0 rw 瞬間エコー抑制。
                                                            0 = OFF
                                                            1 = ON
VOICEACTIVITY    int 1 0 ro VAD音声活動ステータス。
                                                            0 = 活動なし
                                                            1 = 活動あり
```

**Q2: ImportError: No module named usb.core**

A2: `sudo pip install pyusb` を実行して pyusb をインストールしてください。

```
pi@raspberrypi:~/usb_4_mic_array $ sudo python tuning.py DOAANGLE
Traceback (most recent call last):
  File "tuning.py", line 5, in <module>
    import usb.core
ImportError: No module named usb.core
pi@raspberrypi:~/usb_4_mic_array $ sudo pip install pyusb
Collecting pyusb
  Downloading pyusb-1.0.2.tar.gz (54kB)
    100% |████████████████████████████████| 61kB 101kB/s 
Building wheels for collected packages: pyusb
  Running setup.py bdist_wheel for pyusb ... done
  Stored in directory: /root/.cache/pip/wheels/8b/7f/fe/baf08bc0dac02ba17f3c9120f5dd1cf74aec4c54463bc85cf9
Successfully built pyusb
Installing collected packages: pyusb
Successfully installed pyusb-1.0.2
pi@raspberrypi:~/usb_4_mic_array $ sudo python tuning.py DOAANGLE
DOAANGLE: 180
```

**Q3: Raspberry Alexa アプリケーションの例はありますか？**

A3: はい、Mic Array v2.0 を Raspberry の USB ポートに接続し、[Raspberry Pi Quick Start Guide with Script](https://github.com/alexa/avs-device-sdk/wiki/Raspberry-Pi-Quick-Start-Guide-with-Script) に従って Alexa と音声対話を行うことができます。

**Q4: Mic Array v2.0 を ROS システムで使用する例はありますか？**

A4: はい、Yuki さんが共有してくださった [ReSpeaker Mic Array v2 を ROS (Robot Operating System) ミドルウェアと統合するパッケージ](https://github.com/furushchev/respeaker_ros) をご利用いただけます。

**Q5: 3.5mm オーディオポートを USB ポートと同時に信号を受信できるようにする方法は？**

A5: [新しいファームウェア](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/i2s_i1o2.bin) をダウンロードし、[ファームウェアの更新方法](https://wiki.seeedstudio.com/ja/ReSpeaker_Mic_Array_v2.0/#update-firmware) に従って XMOS を書き込んでください。

## リソース

- **[PDF]** [ReSpeaker MicArray v2.0 回路図](https://files.seeedstudio.com/products/107990053/ReSpeakerMicArrayv2.0.1Schematic.zip)
- **[PDF]** [ReSpeaker MicArray v2.0 製品概要](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/ReSpeaker%20MicArray%20v2.0%20Product%20Brief.pdf)
- **[PDF]** [ReSpeaker MicArray v2.0 3Dモデル](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/RESPEAKER%20MIC%20v2.0.pdf)
- **[SKP]** [ReSpeaker MicArray v2.0 3Dモデル](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/Respeaker%20Microphone%20Array%20v2.0_20180316.skp.zip)
- **[STP]** [ReSpeaker MicArray v2.0 3Dモデル](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/RESPEAKER%20MIC-3D%20v2.0.stp.zip)
- **[PDF]** [XVF3000 製品概要](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/XVF3000-3100-product-brief_1.4.pdf)
- **[PDF]** [XVF3000 データシート](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/XVF3000-3100-TQ128-Datasheet_1.0.pdf)
- **[Github]** [ReSpeaker Mic Array v2 を ROS (Robot Operating System) ミドルウェアと統合](https://github.com/furushchev/respeaker_ros)

## 技術サポート & 製品ディスカッション

弊社製品をご利用いただきありがとうございます！製品の使用体験をスムーズにするために、さまざまなサポートを提供しています。異なるニーズや好みに応じたコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>