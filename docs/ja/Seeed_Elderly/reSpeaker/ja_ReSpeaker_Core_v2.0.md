---
description: ReSpeaker Core v2.0
title: ReSpeaker Core v2.0
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ReSpeaker_Core_v2.0
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

![画像の説明を入力してください](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ReSpeaker_V2_front.JPG)

SeeedのReSpeaker Core v2.0は、音声インターフェースアプリケーション向けに設計されています。これは、最大1.5GHzで動作するクアッドコアARM Cortex A7であるRockchip RK3229をベースにしており、1GBのRAMを搭載しています。このボードは、DoA（到来方向）、BF（ビームフォーミング）、AEC（音響エコーキャンセレーション）などの音声アルゴリズムを備えた6つのマイクアレイを特徴としています。

ReSpeaker Core v2.0はGNU/Linuxオペレーティングシステムを実行します。これにより、既存のソフトウェアやツールを利用して開発、テスト、展開が可能となり、迅速な製品開発を実現します。

ReSpeaker Core v2.0は、企業が評価するための多機能な開発ボードとして設計されています。この目的のために、ボードは2つの主要なセクションで構成されています。1つ目は、CPU、メモリ（RAM）、PMUを含む中心のコアモジュールです。2つ目は、eMMC、コネクタ、無線接続コンポーネントなどの周辺機器を含む外部キャリアボードです。どちらのセクションも、Seeedのカスタマイズサービスを通じてカスタマイズ可能です。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/ReSpeaker-Core-V2.0-p-3039.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

<p style={{textAlign: 'center'}}><a href="https://www.amazon.com/dp/B07DN43Q7L" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/amaon.png"  width="300" height="48"  border="0"/></a></p>

## 特徴

- 高性能SoCを備えたオールインワンソリューション
- 1GB RAM & 4GB eMMC
- 6マイクアレイ  
- USB OTG、USBデバイス
- WiFi b/g/nおよびBLE 4.0
- 検出範囲：約5メートル
- 他のセンサー用のGroveソケット
- 3.5mmオーディオジャック & JST2.0コネクタ
- 6マイクアレイと2ループバック（ハードウェアループバック）用の8チャンネルADC

- DebianベースのLinuxシステム
- C++ SDKおよびPythonラッパー
- 音声アルゴリズム用SDKと完全なドキュメント
- 音声アルゴリズムと機能：

  - キーワードウェイクアップ
  - BF（ビームフォーミング）
  - DoA（到来方向）
  - NS（ノイズ抑制）
  - AEC（音響エコーキャンセレーション）およびAGC（自動ゲイン制御）

## 仕様

<table className="tg">
  <tbody><tr>
      <th className="tg-gcw3" colSpan={3}>特徴</th>
    </tr>
    <tr>
      <td className="tg-4646" rowSpan={6}>SoC（Rockchip RK3229）</td>
      <td className="tg-4646">CPU</td>
      <td className="tg-4646">クアッドコアCortex-A7、最大1.5GHz</td>
    </tr>
    <tr>
      <td className="tg-l711">GPU</td>
      <td className="tg-l711">Mali400MP、OpenGL ES1.1/2.0対応</td>
    </tr>
    <tr>
      <td className="tg-dc35">メモリ</td>
      <td className="tg-dc35">1GB RAM（コアモジュールにRAMとPMUを含む）</td>
    </tr>
    <tr>
      <td className="tg-us36" rowSpan={3}>システム</td>
      <td className="tg-us36">動作電圧：3.6-5V</td>
    </tr>
    <tr>
      <td className="tg-dc35">80ピンオンモジュール</td>
    </tr>
    <tr>
      <td className="tg-us36">PMUオンモジュール</td>
    </tr>
    <tr>
      <td className="tg-dc35" rowSpan={7}>周辺機器</td>
      <td className="tg-dc35">ネットワーク</td>
      <td className="tg-dc35">WiFi b/g/n;<br />BLE 4.0;<br />イーサネット</td>
    </tr>
    <tr>
      <td className="tg-us36">USB</td>
      <td className="tg-us36">2 x USBホスト; 1 x USB OTG; 1 x USB電源</td>
    </tr>
    <tr>
      <td className="tg-dc35">Grove</td>
      <td className="tg-dc35">1 x Groveソケット（I2Cおよびデジタル）</td>
    </tr>
    <tr>
      <td className="tg-us36">ビデオ</td>
      <td className="tg-us36">4K VP9および4K 10ビットH265/H264ビデオデコード、最大60fps</td>
    </tr>
    <tr>
      <td className="tg-dc35">オーディオ</td>
      <td className="tg-dc35">最大サンプルレート：96Khz;<br />6マイクアレイ;<br />3.5mmオーディオジャック;<br />JST2.0オーディオ出力コネクタ</td>
    </tr>
    <tr>
      <td className="tg-us36">ストレージ</td>
      <td className="tg-us36">4GB eMMCオンボード;<br />SDスロット</td>
    </tr>
    <tr>
      <td className="tg-dc35">その他</td>
      <td className="tg-dc35">12 x RGB LED;<br />8 GPIOピン</td>
    </tr>
    <tr>
      <td className="tg-us36" rowSpan={2}>消費電力</td>
      <td className="tg-us36">スタンバイモード</td>
      <td className="tg-us36">200mA /5V</td>
    </tr>
    <tr>
      <td className="tg-dc35">アルゴリズムモードで動作</td>
      <td className="tg-dc35">330mA /5V</td>
    </tr>
  </tbody></table>

:::note
​    この表はReSpeaker Core v2.0の基本仕様のみを記載しています。より専門的なパラメータについては、[ReSpeaker Core v2.0の音響および電気仕様](https://files.seeedstudio.com/wiki/Respeaker_V2/res/Acoustic%26Electrical_Specification_of_ReSpeaker_Core_v2.0.pdf)をご参照ください。
:::

## ハードウェア概要

**インターフェースとストレージ**

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/hardware_overview.png)

- **<font face="" size="3" font color="ff0000">①</font> 3.5mm ヘッドフォンジャック:**
オーディオ出力用。アクティブスピーカーやヘッドフォンをこのポートに接続できます。

- **<font face="" size="3" font color="ff0000">②</font> USB OTG:**
このUSBポートは、putty（または他のシリアルツール）のシリアルモードを介してコンピュータに接続するために使用されます。

- **<font face="" size="3" font color="ff0000">③</font> USB電源入力:**
このポートは、Respeaker Core v2.0に電力を供給するために使用されます。

- **<font face="" size="3" font color="ff0000">④</font> スピーカージャック:**
パッシブスピーカー用のオーディオ出力。JST 2.0ソケット。

- **<font face="" size="3" font color="ff0000">⑤</font> UART:**
このUARTポートを介して、ReSpeaker Core v2.0をコンピュータに接続することもできます。

- **<font face="" size="3" font color="ff0000">⑥</font> 8ピンGPIO:**
拡張アプリケーション用の汎用入出力インターフェース。

- **<font face="" size="3" font color="ff0000">⑦</font> SDカードスロット:**
micro-SDカードを挿入するためのスロット。

- **<font face="" size="3" font color="ff0000">⑧</font> eMMC:**
埋め込み型マルチメディアカード。イメージをeMMCに書き込むことで、ReSpeaker Core v2.0をeMMCから起動できます。

- **<font face="" size="3" font color="ff0000">⑨</font> USBホスト:**
USBマウス、USBキーボード、USBフラッシュディスクなどのUSBデバイスを、これらの2つのUSBホストを介してReSpeaker Core v2.0に接続できます。

- **<font face="" size="4" font color="ff0000">Ⓐ</font> イーサネット:**
インターネットへのアクセス。

- **<font face="" size="4" font color="ff0000">Ⓑ</font> HDMI:**
ビデオ出力。

- **<font face="" size="4" font color="ff0000">Ⓒ</font> BluetoothおよびWi-Fiアンテナ:**
オンボードアンテナはWi-FiおよびBluetooth用です。また、2.4GアンテナまたはPCBアンテナ用のインターフェースも提供されています。

- **<font face="" size="4" font color="ff0000">Ⓓ</font> Groveソケット:**
デジタルまたはI2C用のGroveソケット。

**システム図**

クリックすると元の画像を表示できます。

<a href="https://files.seeedstudio.com/wiki/Respeaker_V2/img/SYS.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Respeaker_V2/img/SYS.png"/></a>

**ピンアウト**

**ヘッダーのピンインデックス定義**

| 8ピンヘッダー | Groveソケット |
|--------------|-------------|
| ![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/GPIO.png)|![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/socketBLACK.png)|

**GPIOピン**

MRAA| ヘッダーピンインデックス | SYSFSピン |RK3229ピン
--|--|--|--
0 |0| 1091| GPIO2_D3
1 |1|   --| VCC
2 |2| 1043| GPIO1_B3
3 |3| 1127| GPIO3_D7
4 |4| 1017| GPIO0_C1
5 |5| 1067| GPIO2_A3
6 |6|   --| GND
7 |7| 1013| GPIO0_B5
8 |8| 1085| GPIO2_C5
9 |9| 1084| GPIO2_C4
10|10| --| VCC
11|11| --| GND

**I2Cピン**

|MRAA |ヘッダーピンインデックス |SYSFSピン| RK3229ピン|
|--|--|--|--|
|0 |8 |-- |I2C2_SCL|
|0 |9 |-- |I2C2_SDA|

**寸法**

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Dimension_2.png)

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Dimension_1.png)

<iframe src="https://3dwarehouse.sketchup.com/embed.html?mid=10325e7b-718b-477f-80d1-c85f5c2289c7" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="800" height="450" allowfullscreen></iframe>

## アプリケーション

- スマートスピーカー
- インテリジェント音声アシスタントシステム
- 音声レコーダー
- 音声会議システム
- 会議用通信機器
- 音声対話ロボット
- 車載音声アシスタント
- その他、音声コマンドが必要なシナリオ

## はじめに

### 準備

このセクションでは以下について説明します：

- イメージのインストール方法
- シリアルコンソールへのアクセス方法
- WiFiの設定方法
- SSHとVNCへの接続方法
- Bluetoothの設定方法
- 音声録音と再生テスト

**必要条件**

- ReSpeaker Core V2.0
- Wi-Fiネットワーク
- 4GB（またはそれ以上）のSDカードとSDカードリーダー
- PCまたはMac
- [USB To Uart Adapter](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html)（オプション）
- 5V 1A Micro USBアダプター（電源用、オプション）
- 2本のMicro-USBケーブル

:::caution
USBケーブルを慎重に接続してください。そうしないとインターフェースが損傷する可能性があります。また、内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータ転送ができません。使用しているケーブルが不明な場合は、<a href="https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"><b>こちら</b></a>から購入できます。
:::

**イメージのインストール**

Raspberry Piと同様に、ReSpeaker Core v2.0を使用するには、SDカードからイメージをインストールする必要があります。ReSpeaker Core v2.0を起動する方法は2つあります。SDカードから起動するか、eMMCから起動するかです。

**A. SDカードから起動**

- **ステップ1.** [mirror-azure](http://respeaker.seeed.io/images/)をクリックして、最新のイメージzipファイルをダウンロードします：```respeaker-debian-9-lxqt-sd-********-4gb.img.xz```または```respeaker-debian-9-iot-sd-********-4gb.img.xz```。

|セクション|説明|
|---|----|
|**iot** / **lxqt**|**lxqt**バージョンはデスクトップGUIを含み、**iot**バージョンは含みません。ReSpeaker Core v2.0を初めて使用する場合は、**lxqt**バージョンを推奨します。|
|**flasher** / **sd**|**flasher**バージョンはオンボードeMMCをフラッシュするために使用されます。フラッシュ後はSDカードを取り外すことができます。**sd**バージョンは常にSDカードを挿入したままにする必要があります。|

開発には、**lxqt + sd**バージョンを推奨します。そのため、**respeaker-debian-9-lxqt-sd-[date]-4gb.img.xz**ファイルをダウンロードしてください。

:::caution
このWikiは、**respeaker-debian-9-lxqt-sd-20180610-4gb.img.xz**イメージバージョンに基づいています。
:::

- **ステップ2.** SDカードリーダーを使用して、SDカードをPCまたはMacに接続します。容量が4GB以上のSDカードが必要です。

- **ステップ3.** [Etcher](https://etcher.io/)をダウンロードして、```*.img.xz```ファイルを直接SDカードに書き込みます。または、```*.img.xz```ファイルを解凍して```*.img```ファイルに変換し、他のイメージ書き込みツールを使用してSDカードに書き込むこともできます。
<br />
<br />プラスアイコンをクリックしてダウンロードしたイメージを追加すると、ソフトウェアが自動的に接続されたSDカードを選択します。その後、Flash!をクリックして書き込みを開始します。完了まで約10分かかります。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/v2-flash-sd.png)

- **ステップ4.** イメージをSDカードに書き込んだ後、SDカードをReSpeaker Core v2.0に挿入します。PWR_IN micro USBポートを使用してボードに電源を供給し、電源を入れた後はSDカードを取り外さないでください。ReSpeaker Core v2.0はSDカードから起動し、USER1とUSER2のLEDが点灯します。USER1は通常、起動時にハートビートパターンで点滅するように設定され、USER2は通常、SDカードアクセス中に点灯するように設定されています。次のセクション「シリアルコンソール」に進んでください。

**B. eMMCから起動**

工場出荷時にはeMMCにファームウェアがありません。PCまたはMacを使用してReSpeakerのイメージファイルをReSpeakerのeMMC（オンボードフラッシュメモリ）にフラッシュすることができます。その後、ReSpeakerはSDカードではなくeMMC（オンボードフラッシュメモリ）から起動します。

- **ステップ1.** 最新のイメージzipファイル```respeaker-debian-9-iot-flasher-********-4gb.img.xz```または```respeaker-debian-9-lxqt-flasher-********-4gb.img.xz```をmirror-azureからダウンロードします。lxqtバージョンはDebianデスクトップを含み、iotバージョンは含みません。flasherバージョンはeMMCをフラッシュするためのもので、sdバージョンはSDカードから起動するためのものです。

- **ステップ2.** ```*.img.xz```ファイルをEtcherで直接SDカードに書き込むか、```*.img.xz```ファイルを解凍して```*.img```ファイルに変換し、他のイメージ書き込みツールを使用してSDカードに書き込みます。

- **ステップ3.** SDカードを書き込んだ後、SDカードをReSpeaker Core v2.0に挿入します。PWR_IN micro USBポートを使用してボードに電源を供給し、フラッシュ中はSDカードを取り外さないでください。

フラッシュプロセス中、USER1とUSER2のLEDが交互に点滅します。完了まで約10分かかります。LEDが消灯したらボードの電源を切り、SDカードを取り外して再度電源を入れます。LEDが点灯すれば、イメージがeMMCに正しくフラッシュされたことを意味します。

次のコマンドでイメージバージョンを確認することもできます：`cat /etc/issue.net`

**シリアルコンソール**

ReSpeaker Core v2.0が起動できるようになったら、コンソールを介してLinuxシステムにアクセスし、WiFiの設定などを行いたい場合があります。コンソールにアクセスする方法は2つあります：

- A. OTG USBポート - ボード上でLinuxシステムが動作している必要があります
- B. UARTポート - コンソールにアクセスするための難しい方法で、低レベルの問題をデバッグする際に使用できます

**A. OTG経由での接続**

- **ステップ1.** Micro USBケーブルを用意し、それがデータケーブル（単なる電源ケーブルではない）であることを確認してください。Micro USB端をReSpeakerの**OTG** Micro USBポートに接続します（ReSpeakerボードには2つのMicro USBポートがあり、それぞれ異なるシルクスクリーンでラベル付けされています。一つは**PWR_IN**、もう一つは**OTG**です）。もう一方の端をコンピュータに接続します。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/lianjiediannan.jpg)

- **ステップ2.** コンピュータでシリアルポートが認識されているか確認します：

  - Windows: デバイスマネージャを確認し、新しいシリアルデバイスが```COMx```という名前で表示されます（xは増加する番号）。Windows XP/7/8を使用している場合は、[Windows CDCドライバー](https://github.com/respeaker/get_started_with_respeaker/blob/master/files/ReSpeaker_Gadget_CDC_driver.7z)をインストールする必要があるかもしれません。
  - Linux: `ls /dev/ttyACM*`を実行すると、```/dev/ttyACMx```が表示されます（xは使用したUSBポートに応じて変化します）。
  - Mac: `ls /dev/cu.usb*`を実行すると、```/dev/cu.usbmodem14xx```が表示されます（xxは使用したUSBポートに応じて変化します）。

- **ステップ 3.** お気に入りのシリアルデバッグツールを使用してシリアルポートに接続します。シリアル設定は以下の通りです：115200 ボーレート、8ビット、パリティなし、ストップビット1、フロー制御なし。例：

  - Windows: [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) を使用し、```Serial``` プロトコルを選択、ReSpeaker Core v2.0 の正しい COM ポートを入力し、```115200``` ボーレート、8ビット、パリティなし、ストップビット1、フロー制御なしを設定します。
  - Linux: 使用する USB To TTL アダプタに応じて、```screen /dev/ttyACM0(,1, など)``` 115200 または ```screen /dev/ttyUSB0(,1, など)``` 115200 を使用します。
  - Mac: 使用する USB To TTL アダプタに応じて、```screen /dev/cu.usbserial1412(,1422, など)``` 115200 または ```screen /dev/cu.usbmodem1412(,1422, など)``` 115200 を使用します。

- **ステップ 4.** デフォルトのユーザー名は ```respeaker```、パスワードも ```respeaker``` です。

**B. UART ポート経由での接続**

このセクションでは、USB To TTL アダプタを使用してコンピュータから ReSpeaker の UART ポート（ReSpeaker のスピーカープラグの左側に位置）に接続する方法を説明します。

- **ステップ 1.** UART ポートと PC/Mac を USB To TTL アダプタで接続します。RX/TX の電圧は 3.3V であることに注意してください。USB To TTL アダプタをお持ちでない場合は、[こちら](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html) から購入できます。

- **ステップ 2.** 以下のシリアルデバッグツールを使用して 115200 ボーレートで接続します：
  - Windows: [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) を使用し、```Serial``` プロトコルを選択、ReSpeaker Core v2.0 の正しい COM ポートを入力し、115200 ボーレート、8ビット、パリティなし、ストップビット1、フロー制御なしを設定します。
  - Linux: 使用する USB To TTL アダプタに応じて、```screen /dev/ttyACM0(,1, など)``` 115200 または ```screen /dev/ttyUSB0(,1, など)``` 115200 を使用します。
  - Mac: 使用する USB To TTL アダプタに応じて、```screen /dev/cu.usbserial1412(,1422, など)``` 115200 または ```screen /dev/cu.usbmodem1412(,1422, など)``` 115200 を使用します。

- **ステップ 3.** ログインユーザー名は ```respeaker```、パスワードも ```respeaker``` です。

- **ステップ 4.** USB To TTL アダプタをお持ちでない場合、Arduino を使用することもできます。Arduino を使用する場合、ジャンパーワイヤーの一端を Arduino の RESET ピンに、もう一端を GND ピンに接続します。これにより Arduino の ATMEGA MCU をバイパスし、Arduino を USB To TTL アダプタとして使用できます。ビデオチュートリアルは[こちら](https://www.youtube.com/watch?v=qqSLwK1DP8Q)をご覧ください。その後、Arduino の GND ピンを ReSpeaker の UART ポートの GND ピンに接続します。Arduino の Rx ピンを ReSpeaker の UART ポートの Rx ピンに接続し、Arduino の Tx ピンを ReSpeaker の UART ポートの Tx ピンに接続します。最後に、Arduino を USB ケーブルで PC/Mac に接続します。次に、以下のコマンドを使用して Mac または Linux PC が Arduino を認識しているか確認します：

```
ls /dev/cu.usb* (Mac)
ls /dev/ttyACM* (Linux)
```

以下のような出力が得られるはずです：

```
/dev/cu.usbmodem14XX (XX は使用した USB ポートに応じて変わります - Mac)
/dev/ttyACMX (X は使用した USB ポートに応じて変わります - Linux)
```

その後、上記のステップ 2 に従って、このシリアル接続を介して ReSpeaker に接続します。この手順は一度だけ必要で、次回以降は Wi-Fi 接続を設定し、SSH または VNC を使用して接続します。

**ネットワーク設定**

**A. Wi-Fi 設定**

ReSpeaker のネットワークを Network Manager ツール（nmtui）を使用して設定します。nmtui は ReSpeaker イメージに既にインストールされています。

```
sudo nmtui              # respeaker ユーザーには sudo が必要
```

次に以下のような設定ページが表示されます。```Activate a connection``` を選択し、```Enter``` キーを押します。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/nmtui1-1.png)

ReSpeaker v2.0 用の Wi-Fi を選択し、```Enter``` キーを押して Wi-Fi パスワードを入力し、再度 ```Enter``` キーを押します。```*``` マークが表示されたら、ReSpeaker が Wi-Fi ネットワークに正常に接続されたことを意味します。```Esc``` キーを 2 回押してネットワークマネージャー設定ツールを終了します。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/nmtui1-2.png)

次に、以下のコマンドを使用して ReSpeaker の IP アドレスを確認します。

```
ip address
```

以下の例では、この ReSpeaker の IP アドレスは ```192.168.7.108``` です。

```
root@v2:/home/respeaker# ip address

1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: sit0@NONE: <NOARP> mtu 1480 qdisc noop state DOWN group default qlen 1
    link/sit 0.0.0.0 brd 0.0.0.0
3: wlan0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether e0:76:d0:37:38:6d brd ff:ff:ff:ff:ff:ff
    inet **192.168.7.108**/24 brd 192.168.7.255 scope global dynamic wlan0
       valid_lft 604332sec preferred_lft 604332sec
    inet6 2601:647:4680:ebf0:ec0a:5965:e710:f329/64 scope global noprefixroute dynamic
       valid_lft 345598sec preferred_lft 345598sec
    inet6 fe80::64de:cac8:65ef:aac8/64 scope link
       valid_lft forever preferred_lft forever
```

Network Manager の GUI インターフェースに加えて、Network Manager にはコマンドラインツールもあります。隠し Wi-Fi ネットワークに接続する場合は、このコマンドラインツールを使用する必要があります：

```
nmcli c add type wifi con-name mywifi ifname wlan0 ssid your_wifi_ssid
nmcli con modify mywifi wifi-sec.key-mgmt wpa-psk
nmcli con modify mywifi wifi-sec.psk your_wifi_password
nmcli con up mywifi
```

**B. イーサネット接続**

イーサネットケーブルを使用してネットワークに接続することもできます。インターネットに接続されたイーサネットケーブルを差し込むだけで接続が完了します。

**SSH & VNC への接続**

**A. SSH**

SSHサーバーはReSpeaker v2.0で自動的に起動します。Windowsユーザー向けにはサードパーティのSSHクライアントが利用可能です。Linux/Macユーザー向けにはSSHクライアントが標準で組み込まれています。

- **Windows**: PUTTYを使用し、SSHプロトコルを選択して正しいIPアドレスを入力し、「Open」をクリックします。ユーザー名は`respeaker`、パスワードも`respeaker`です。

- **Linux/Mac**:

```
ssh respeaker@192.168.***.***
// パスワード: respeaker
```

:::note
SSHを使用してパフォーマンスが遅い場合は、混雑していないWi-Fiネットワークに切り替えてください。
:::

---

**B. VNC**

Alexaから認証を取得するには、VNC Viewerを使用する必要があります。システムにはVNCサーバーが組み込まれており、VNCサーバーは軽量なQtデスクトップ環境である**lxqt**デスクトップGUIを起動します。VNCサービスも自動的に開始されます。[VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/)または[Google Chrome用VNC Viewer](https://chrome.google.com/webstore/detail/vnc%C2%AE-viewer-for-google-ch/iabmpiboiopbgfabjmgeedhcmjenhbla?hl=en)を使用してReSpeaker Core v2.0のデスクトップに接続します。

VNCを使用するには、PC/MacとReSpeaker v2.0を同じWi-Fiネットワークに接続します。その後、VNC Viewerを開き、アドレスバーに```192.168.xxx.xxx```を入力します。```192.168.xxx.xxx```はボードのIPアドレスで、コマンド**ifconfig**を使用して確認できます。```Unencrypted connection```というメッセージが表示された場合は、「Continue」をクリックして続行します。パスワードは```respeaker```です。

![](https://user-images.githubusercontent.com/5130185/34665797-93b222d6-f49c-11e7-8112-704f91163038.png)

:::note
VNC接続はネットワークの品質に依存します。VNCディスプレイのリフレッシュレートが非常に低くなる可能性があることをご了承ください。
:::

---

**スピーカーまたはヘッドセットへの接続**

ボードはSOCの内蔵コーデックを使用して再生を行います。JSTスピーカーポートとヘッドセットポートの両方はそれぞれ独自のアンプによって駆動されており、両方のアンプはSOCの同じコーデックに接続されています。SEEEDが実装したサウンドカードドライバーは、キャプチャデバイスと再生デバイスの両方を駆動します。そのため、ALSAデバイスリストには個別のキャプチャまたは再生サウンドカードはありません。すべてが`seeed-8mic-voicecard`という名前で表示されます。

ボードから音を聞く最も簡単な方法は、ヘッドセットを接続することです。大音量のスピーカーを使用したい場合、ボードは最大8Wの駆動能力を出力できます。

---

**Bluetoothの設定**

**Bluetoothの有効化**

以下のコマンドを入力して、ReSpeaker Core v2.0のBluetoothを更新および有効化してください：

```
sudo apt update
sudo apt-mark hold firefox 
sudo apt upgrade
```

:::note
更新に失敗した場合は、ネットワーク状態の良い別のWi-Fiに切り替えて再度更新を試みてください。
:::

その後、以下のコマンドでBluetoothを有効化します：

```
sudo systemctl enable bt-auto-connect.service
sudo reboot -f
```

---

**ReSpeaker Core v2.0をBluetoothスピーカー（スレーブデバイス）として使用する**

ReSpeaker Core v2.0が再起動したら、スマートフォンまたはコンピュータのBluetoothを開き、**ReSpeaker-xxxx**という名前のBluetoothデバイスを見つけます。それを選択して接続します。ReSpeaker Core v2.0にスピーカーまたはヘッドセットを接続し、音楽を再生してBluetoothスピーカーを楽しんでください。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Bluetooth_connect.png)

---

**ReSpeaker Core v2.0をBluetoothプレーヤー（マスターデバイス）として使用する**

ReSpeaker Core v2.0はBluetoothスピーカーとして動作するだけでなく、BluetoothプレーヤーとしてBluetoothヘッドセットやBluetoothスピーカーを操作することもできます。以下の手順で設定を行います。

- **ステップ1.** `bluetoothctl`を入力してBluetoothシェルを開きます。

- **ステップ2.** `scan on`を入力してBluetoothデバイスをスキャンします。

- **ステップ3.** ReSpeaker Core v2.0がターゲットデバイスを見つけたら、`scan off`を入力します。この例では、MDR-1000Xヘッドセットがターゲットであり、デバイスID`04:5D:4B:81:35:84`を記録します。

```
respeaker@v2:~$ bluetoothctl
[NEW] Controller 43:43:A0:12:1F:AC ReSpeaker-1FAC [default]
Agent registered
[bluetooth]# scan on
Discovery started
[CHG] Controller 43:43:A0:12:1F:AC Discovering: yes
[NEW] Device C8:69:CD:BB:9B:B3 C8-69-CD-BB-9B-B3
[NEW] Device E1:D9:68:0E:51:C0 MTKBTDEVICE
[NEW] Device 62:15:9C:3F:40:AA 62-15-9C-3F-40-AA
[NEW] Device 56:AF:DE:C0:34:25 56-AF-DE-C0-34-25
[NEW] Device B8:86:87:99:FB:10 SOLARRAIN
[CHG] Device B8:86:87:99:FB:10 Trusted: yes
[NEW] Device 04:5D:4B:81:35:84 MDR-1000X
[CHG] Device 04:5D:4B:81:35:84 Trusted: yes
[CHG] Device 4C:04:59:38:D3:25 ManufacturerData Key: 0x004c
[CHG] Device 4C:04:59:38:D3:25 ManufacturerData Value:
  10 05 0b 10 99 18 0a                             .......
[bluetooth]# scan off
[CHG] Device 04:5D:4B:81:35:84 RSSI is nil
[CHG] Device B8:86:87:99:FB:10 TxPower is nil
[CHG] Device B8:86:87:99:FB:10 RSSI is nil
[CHG] Device 4C:04:59:38:D3:25 RSSI is nil
[CHG] Device 58:44:98:93:35:24 RSSI is nil
Discovery stopped
[bluetooth]#
```

- **ステップ4.** コマンド`pair + デバイスID`を使用して、BluetoothデバイスをReSpeaker Core v2.0とペアリングします。

- **ステップ5.** `Pairing successful`というメッセージが表示されたら、`connect + デバイスID`を入力します。

```
[bluetooth]# pair 04:5D:4B:81:35:84
Attempting to pair with 04:5D:4B:81:35:84
[CHG] Device 04:5D:4B:81:35:84 Connected: yes
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 00001108-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000110b-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000110c-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000110e-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000111e-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 ServicesResolved: yes
[CHG] Device 04:5D:4B:81:35:84 Paired: yes
Pairing successful
[CHG] Controller 43:43:A0:12:1F:AC Discoverable: no
[CHG] Device 04:5D:4B:81:35:84 ServicesResolved: no
[CHG] Device 04:5D:4B:81:35:84 Connected: no
[CHG] Controller 43:43:A0:12:1F:AC Discoverable: yes
[bluetooth]# connect 04:5D:4B:81:35:84
Attempting to connect to 04:5D:4B:81:35:84
[CHG] Device 04:5D:4B:81:35:84 Connected: yes
Connection successful
[CHG] Device 04:5D:4B:81:35:84 ServicesResolved: yes
[CHG] Controller 43:43:A0:12:1F:AC Discoverable: no
[MDR-1000X]#
```

`Connection successful`が表示されたら、設定完了です！

`exit` または `quit` を入力してシェルを終了し、以下のコマンドを使用して Bluetooth デバイスをテストしてください。

```
arecord bluetoothtest.wav
aplay bluetoothtest.wav
```

**録音と再生**

**1. ALSA を使用してテスト**

これは開発段階の技術文書であるため、サウンドデバイスのインデックスはバージョンによって変更される可能性があります。まず、以下のコマンドを使用して正しいデバイスインデックスを確認してください。

```
respeaker@v2:~$ arecord -l
**** List of CAPTURE Hardware Devices ****
card 0: seeed8micvoicec [seeed-8mic-voicecard], device 0: 100b0000.i2s1-ac108-pcm0 ac108-pcm0-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0

respeaker@v2:~$ aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: seeed8micvoicec [seeed-8mic-voicecard], device 1: 100b0000.i2s1-rk3228-hifi rk3228-hifi-1 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

**seeed** プレフィックスを持つサウンドカードを見つけてください。上記の例では、キャプチャデバイスは **hw:0,0**（カード **0** / デバイス **0**）を意味します。再生デバイスは **hw:0,1**（カード **0** / デバイス **1**）を意味します。その後、以下のコマンドを使用して録音と再生をテストします。

```
# 2 チャンネルオーディオの録音と再生
arecord -Dhw:0,0 -f S16_LE -r 16000 -c 2 hello.wav
aplay -Dhw:0,1 -r 16000 -c 2 hello.wav

# Bluetooth デバイスで音声を出力したい場合、以下のコマンドを使用してください
aplay -r 16000 -c 2 hello.wav

# 8 チャンネルオーディオの録音
# ボード上には 6 つのマイクがあり、ac108 が残りの 2 チャンネルを構成します。
arecord -Dhw:0,0 -f S16_LE -r 16000 -c 8 hello_8ch.wav
```

さらに、録音と再生を同時に行うこともできます。

```
arecord | aplay
```

**2. PulseAudio を使用してテスト**

まず、PulseAudio が実行中かどうかを確認します。

```
respeaker@v2:~$ ps aux|grep pulse|grep -v grep
respeak+  1109  0.0  0.7 363272  7932 ?        S<l  01:01   0:00 /usr/bin/pulseaudio --start --log-target=syslog
```

実行されていない場合は、PulseAudio のドキュメントを参照して PulseAudio の自動起動を有効にしてください。その後、以下のコマンドでテストします。

```
parecord --channels=8 --rate=16000 --format=s16le hello2.wav
paplay hello2.wav
```

さらに、現在のデフォルト ALSA デバイスは PulseAudio にフックされているため、以下のコマンドを使用しても PulseAudio 経由で音声を再生/録音できます。

```
arecord -v -f cd hello3.wav
aplay hello3.wav
```

これまでに、ReSpeaker Core v2.0 ボードの基本操作を学びました。次に進みましょう。ReSpeaker Core v2.0 を使用して、独自の AVS（Alexa Voice Service）デバイスや Dueros（Baidu の音声アシスタント）デバイスを構築できます。

## Wio Link を使って遊ぶ

[ReSpeaker Core V2 & Wio Link チュートリアル](https://wiki.seeedstudio.com/ja/ReSpeaker_Core_V2_&_Wio_Link/) に従って、ReSpeaker Core V2 を使用して IFTTT 経由で Wio Link を制御してください。

<iframe width="800" height="450" src="https://www.youtube.com/embed/OJ0i6QrZCSM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## GPIO を使って遊ぶ

このセクションでは、**MRAA** と **UPM** を使用して、ReSpeaker Core v2.0 上の GPIO と Grove ソケットを制御する方法を紹介します。

- **ステップ 1. MRAA と UPM ライブラリを最新バージョンに更新**

まず、最新の MRAA と UPM パッケージをインストールする必要があります。

```
sudo apt install  python-mraa python-upm libmraa1 libupm1 mraa-tools
```

- **ステップ 2. プラットフォーム情報を確認**

```
# バス 0 のみがあり、id=03(/dev/i2c-3)、0 は mraa と upm の i2c 番号です
respeaker@v2:~$ mraa-i2c list
Bus   0: id=03 type=linux

#mraa GPIO 番号、システム GPIO 番号、およびそのピンマップ
respeaker@v2:~$ mraa-gpio list
00      GPIO91: GPIO
01         VCC:
02      GPIO43: GPIO
03     GPIO127: GPIO
04      GPIO17: GPIO
05      GPIO67: GPIO
06         GND:
07      GPIO13: GPIO
08    I2C2_SCL: I2C  
09    I2C2_SDA: I2C  
10         VCC:
11         GND:
12      GPIO66: GPIO
```

ReSpeaker Core v2.0 ボードの PIN 定義の説明については、[Pin Out](#) を参照してください。

- **ステップ 3. MRAA または UPM を使用したデモ**

**A. MRAA ライブラリを使用**

**GPIO を直接制御**

必要な材料

| ReSpeaker Core v2.0 |  Grove - Buzzer |
|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ReSpeaker_V2_back_little.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Buzzer.png)|
|[今すぐ購入](https://www.seeedstudio.com/ReSpeaker-Core-V2.0-p-3039.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|

Grove PIR センサーの **SIG** ピンをジャンパーで ReSpeaker Core v2.0 のヘッダーピン **0** に接続します。同時に VCC と GND も接続することを忘れないでください。その後、以下のコードをコンソールに入力します。

``` python
respeaker@v2:~$ python
Python 2.7.13 (default, Jan 19 2017, 14:48:08)
[GCC 6.3.0 20170118] on linux2
Type "help", "copyright", "credits" or "license" for more information.
>>> import mraa
>>> x = mraa.Gpio(0)
>>> x.dir(mraa.DIR_OUT)
0
>>> x.write(0)
0
>>> x.write(1)
0
>>>
```

**x.write(1)** を入力すると、ブザーから音が聞こえます。

**PIR モーションセンサーの例**

必要な材料

| ReSpeaker Core v2.0 |  Grove - PIR モーションセンサー |
|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ReSpeaker_V2_back_little.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Grove%20-%20PIR%20Motion%20Sensor.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/ReSpeaker-Core-V2.0-p-3039.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html)|

この例では、Grove PIR センサーのトリガーを Python コードでリッスンします。
Grove PIR センサーの **D1** ピンをジャンパーで ReSpeaker Core v2.0 のヘッダーピン **0** に接続します。同時に VCC と GND も接続することを忘れないでください。
その後、以下のコードを新しいファイルにコピーして Python ファイルとして保存し、**mraa_pir.py** という名前を付けます。このファイルを ReSpeaker Core v2.0 にコピーします。

``` python
import mraa

def on_trigger(gpio):
    print("pin " + repr(gpio.getPin(True)) + " = " + repr(gpio.read()))

pin = 0

try:
    x = mraa.Gpio(pin)
    print("Starting ISR for pin " + repr(pin))
    x.dir(mraa.DIR_IN)
    # respeaker v2 は EDGE_BOTH のみサポート
    x.isr(mraa.EDGE_BOTH, on_trigger, x)
    var = raw_input("Press ENTER to stop")
    x.isrExit()
except ValueError as e:
    print(e)
```

```

次に、以下のコマンドでコードを実行します。（mraa_pir.py を保存したフォルダにいることを確認してください）

``` python
sudo python mraa_pir.py
```

結果は以下のようになります。

```
$ sudo python mraa_pir.py
Starting ISR for pin 0
Press ENTER to stoppin 1091 = 0
pin 1091 = 0
pin 1091 = 1
...
```

**B. UPMライブラリを使用する**

UPMプロジェクトはMRAAライブラリに基づいてセンサーのドライバを実装しているため、GPIOプログラミングやセンサーのI2Cアドレスを気にする必要がなくなります。特定のセンサーに関するすべてのデフォルト情報とロジックがUPMライブラリにラップされています。UPMは多くのセンサーをサポートしています。https://iotdk.intel.com/docs/master/upm/modules.html ただし、すべてのセンサーがReSpeaker Core v2.0で動作することを確認したわけではない点に注意してください。

**Groveデジタル光センサーの例**

材料

| ReSpeaker Core v2 |  Grove - デジタル光センサー |
|--------------|-------------|
|![画像説明をここに入力](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ReSpeaker_V2_back_little.jpg)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Digital_Light_Sensor.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/ReSpeaker-Core-V2.0-p-3039.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html)|

これは、UPMのGitHubリポジトリからコピーされたGroveデジタル光センサーの例です。

PIRモーションセンサーをGroveソケットを介してReSpeaker Core v2.0に接続してください。
次に、以下のコードを新しいファイルにコピーし、Pythonファイルとして保存します。ファイル名は **tsl2561.py** とします。このファイルをReSpeaker Core v2.0にコピーしてください。

``` python
#!/usr/bin/env python
# Author: Zion Orent <zorent@ics.com>
# Copyright (c) 2015 Intel Corporation.
#
# Permission is hereby granted, free of charge, to any person obtaining
# a copy of this software and associated documentation files (the
# "Software"), to deal in the Software without restriction, including
# without limitation the rights to use, copy, modify, merge, publish,
# distribute, sublicense, and/or sell copies of the Software, and to
# permit persons to whom the Software is furnished to do so, subject to
# the following conditions:
#
# The above copyright notice and this permission shall be
# included in all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
# EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
# MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
# NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
# LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
# OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
# WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

from __future__ import print_function
import time, sys, signal, atexit
from upm import pyupm_tsl2561 as upmTsl2561

def main():
    # I2C上のデジタル光センサーTSL2561をインスタンス化
    myDigitalLightSensor = upmTsl2561.TSL2561()

    ## 終了ハンドラ ##
    # Control-Cを押したときにPythonがスタックトレースを出力しないようにする関数
    def SIGINTHandler(signum, frame):
        raise SystemExit

    # 終了時にコードを実行できるようにする関数（myDigitalLightSensorの関数を含む）
    def exitHandler():
        print("終了します")
        sys.exit(0)

    # 終了ハンドラを登録
    atexit.register(exitHandler)
    signal.signal(signal.SIGINT, SIGINTHandler)

    while(1):
        print("光の値は " + str(myDigitalLightSensor.getLux()))
        time.sleep(1)
if __name__ == '__main__':
    main()
```

結果は以下のようになります。

``` python
respeaker@v2:~$ python tsl2561.py       
光の値は 0
光の値は 38
光の値は 20
光の値は 54
光の値は 13
光の値は 44
光の値は 31  
```
```

## FAQs

**Q1: Audacityで録音と再生を行う方法は？**

**A1:** **lxqt**バージョンにはAudacityがプリインストールされています。左下の**鳥のボタン**をクリックし、**Sound & Video -> Audacity**で見つけることができます。

Audacityを開いたら、小さな黒い矢印をクリックして録音および再生デバイスを選択し、以下の画像のように設定してください。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/audacity.png)

録音と再生デバイスにはSeeed-8mic-voicecardを選択してください。また、1/2/4/6/8チャンネルを選択して録音と再生が可能です。画像のように8チャンネルが表示されていますが、チャンネル7と8にはデータがありません。これは、この2つのチャンネルが再生用チャンネルであるためです。チャンネル7は3.5mmヘッドフォン用、チャンネル8はJST2.0スピーカー用です（JSTケーブルがない場合はジャンパーを使用することもできます）。例えば、JSTスピーカーを使用する場合：

- **ステップ1.** 上記の画像のように設定し、**Record**ボタンをクリックして音声を録音します。
- **ステップ2.** **Stop**ボタンをクリックすると、チャンネル7と8が空であることが確認できます。
- **ステップ3.** 再度**Record**ボタンをクリックすると、今度はチャンネル8が変化していることがわかります。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/audacity_playback.png)

**Q2: ReSpeaker Core v2.0のAPにアクセスする方法は？**

**A2:** ReSpeaker Core v2.0を2本のワイヤーケーブルで電源供給することができます。システムが稼働中の場合、ReSpeaker Core v2.0はAPとして動作します。コンピュータを使用してこのAPにアクセスできます。以下の画像を参照しながら、ReSpeaker Core v2.0のWiFiを設定する手順を進めてください。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Ap.png)

- **ステップ1.** 以下のコマンドを入力してReSpeaker Core v2.0のAPを有効化します。

```
sudo systemctl enable re-wifi.service
sudo reboot -f
```

- **ステップ2.** ReSpeaker Core v2.0のAPにアクセスします。ReSpeaker Core v2.0が再起動した後、スマートフォンやコンピュータを使用してWiFiを検索します。AP名は**ReSpeaker_xxxx**のような名前で表示され、ユーザー名は**respeaker**、パスワードも**respeaker**です。

- **ステップ3.** PuttyやSSHモードを使用してシリアルコンソールにアクセスします。Wlan1のIPは**192.168.42.1**で、このIPを使用して接続を設定します。ReSpeaker Core v2.0のユーザー名は**respeaker**、パスワードも**respeaker**です。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/AP2.png)

- **ステップ4.** シリアルコンソールにアクセスしたら、[WiFiを設定](https://wiki.seeedstudio.com/ja/ReSpeaker_Core_v2.0/#a-wi-fi-setting-up)することができます。

**Q3: 音量を調整する方法は？**

**A3:** Alsamixerを使用して再生音量や録音感度を調整できます。

- **ステップ1.** 以下のコードを入力してAlsamixerを開きます。

```
alsamixer
```

- **ステップ2.** キーボードで**F6**を押して**Seeed-8mic-voicec**カードを選択します。
- **ステップ3.** 以下の画像のようなインターフェースが表示されます。**右**または**左**キーを押して再生音声または録音チャンネルを選択し、**上**または**下**キーを押して値を調整します。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Alexamixer.png)

**Q4: ユーザーボタンを使用する方法は？**

**A4:** ReSpeaker Core v2.0の背面にはユーザーボタンがあります。以下のPythonデモを使用してその使い方を示します。

- **ステップ1.** 以下のコマンドを入力します。

```
sudo pip install evdev
```

- **ステップ2.** 以下のコードをコピーしてPythonファイルとして保存します。ファイル名を**usrer_button.py**とします。

```
from evdev import InputDevice,categorize,ecodes

key = InputDevice("/dev/input/event0")
for event in key.read_loop():
    if event.type == ecodes.EV_KEY:
        print(categorize(event))
```

- **ステップ3.** 以下のコマンドを入力してこのデモを実行します。

```
sudo python usrer_button.py
```

すると、以下のような結果が表示されます。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/userbutton.png)

**Q5: コンピュータがReSpeaker Core v2.0を認識しない場合、ドライバーの問題ですか？**

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/CDC_Driver.png)

**A5:** ReSpeaker Core v2.0をOTGまたはUART経由でコンピュータに接続した際にこの問題が発生することがあります。これはCDCシリアルドライバーが他のOTGドライバーと競合しているためです。競合しているドライバーをアンインストールし、再度ReSpeaker Core v2.0を接続してください。

**Q6: 外部アンテナを使用したい場合はどうすればよいですか？**

**A6:** ReSpeaker Core v2.0は**AP6212**を使用してWiFiとBluetoothを提供しており、これらは同じアンテナを共有しています。オンボードアンテナの代わりに外部アンテナを使用することができます。そのためには、以下のように抵抗を取り外し、新しいパッドにハンダ付けする必要があります：

- まず、オレンジ色のボックス内の抵抗を取り外します。
- 次に、緑色のボックス内にハンダ付けしてください。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ant.png)

**Q7: 独自のフラッシャーファームウェアを構築する方法は？独自のファームウェアを他のReSpeaker Core v2.0に書き込みたい場合は？**

**A7:** RAMが2GB以上のARM Debianシステムでイメージビルダーを実行してください。

以下は詳細な手順です。

- **ステップ1.** git clone <https://github.com/respeaker/image_builder>
- **ステップ2.** /publish/respeaker.io_stable.shでアップロードパスを変更します。
- **ステップ3.** sudo ./publish/respeaker.io_stable.sh

**Q8: 書き込んだSDカードをReSpeaker Core v2.0に挿入した際、デバイスマネージャーにCOMポートが表示されず、HDMIインターフェースに何も表示されない場合は？**

**A8:** USBからTTLアダプターを使用してUARTに直接接続すると、以下のエラーが表示されます。

```
[    2.119560] mmcblk0: timed out sending SET_BLOCK_COUNT command, card status 0x400900
[    2.128134] mmcblk0: command error, retrying timeout
```

原因は古いSDカードがLinuxシステムで動作しないことです。最近のSDカード（例えばScanDisk Ultraなど）に変更してください。これらはすべてのeMMCコマンドをサポートしています。

## リソース

- **[アルゴリズム]** [AEC、ビームフォーミング、ノイズ抑制（NS）、キーワードスポッティング（KWS）を含むオーディオフロントエンド処理アルゴリズム](https://github.com/respeaker/respeakerd)
- **[Google アシスタント]** [Google アシスタントデモ](https://github.com/respeaker/googleassistant_respeakerd)
- **[Microsoft]** [Microsoft 音声翻訳デモ](https://github.com/respeaker/Python-Speech-Translate)
- **[Pixel]** [RGB LED ライブラリ](https://github.com/respeaker/pixel_ring)
- **[PDF]** [この Wiki の PDF をダウンロード](https://files.seeedstudio.com/wiki/Respeaker_V2/res/ReSpeaker_Core_v2.pdf)
- **[PDF]** [Rockchip RK3229 データシート V1.1](https://files.seeedstudio.com/wiki/Respeaker_V2/res/Rockchip%20RK3229%20Datasheet%20V1.1%2020151209.pdf)
- **[PDF]** [ボードの寸法](https://files.seeedstudio.com/wiki/Respeaker_V2/res/ReSpeaker_Core_v2_Demensions.pdf)
- **[ZIP]** [ReSpeaker Core v2.0 用 3D モデル](https://files.seeedstudio.com/wiki/Respeaker_V2/res/Respeaker_Core_v2_3D_SKP.zip)
- **[ZIP]** [ReSpeaker Core v2.0 ケース](https://files.seeedstudio.com/wiki/Respeaker_V2/res/RESPEAKER_CORE_V2_Box.zip)
- **[DXF]** [ReSpeaker Core v2.0 スタンド](https://github.com/respeaker/get_started_with_respeaker/raw/8111196e821fec10c65b00d96cf011dc90111546/files/RESPEAKER_CORE_V2_CASE.dxf)
- **[PDF]** [ReSpeaker Core v2.0 スタンド組立図](https://files.seeedstudio.com/wiki/Respeaker_V2/res/ReSpeaker_Core_v2.0_case_Assembly.pdf)
- **[PDF]** [ReSpeaker Core v2.0 の音響および電気仕様](https://files.seeedstudio.com/wiki/Respeaker_V2/res/Acoustic%26Electrical_Specification_of_ReSpeaker_Core_v2.0.pdf)
- **[追加資料]** [Mraa Python ドキュメントページ](http://iotdk.intel.com/docs/master/mraa/python/)
- **[追加資料]** [Intel Mraa SDK](https://software.intel.com/en-us/mraa-sdk/documentation)
- **[追加資料]** [Snips SDK](https://snips.gitbook.io/documentation/installing-snips/respeaker-core-2.0)
- **[ソースコード]** [ReSpeaker Core v2.0 ソースコード](https://github.com/respeaker/rk-linux-develop)

## プロジェクト

**ReSpeaker Core v2.0 - Alexa デモ**

このデモでは、ReSpeaker Core v2.0 を使用して Alexa と会話します。友達のように質問をしたり、ReSpeaker Core v2.0 と話すことができます。さらに、この製品は Google アシスタントや Bing とも連携可能です。ホットワードは Snowboy ですが、自分でカスタムのウェイクアップワードを作成することもできます。

<iframe width="800" height="450" src="https://www.youtube.com/embed/q7b8iLqRiPY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<br />

**ReSpeaker Core v2.0 - ウェイクアップ距離テスト**

このデモでは、ReSpeaker Core v2.0 のウェイクアップ距離をテストしました。Alexa を使用し、ホットワードは Snowboy です。画面に表示される「Alexa:status code 204」は、Alexa が正常にウェイクアップしたことを意味します。

高度なアルゴリズムと6つの高品質マイクを備えた結果、驚くべき性能を発揮しました！ReSpeaker Core v2.0 を16メートル（52フィート）離れた場所からウェイクアップすることができます。

<iframe width="800" height="450" src="https://www.youtube.com/embed/PpcwvOLlpEw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

**ReSpeaker Core v2.0 - 音声受付システム**

このスマートシステムは、音声アシスタント（ReSpeaker Core v2.0）と電話アシスタント（Linklt One）で構成されています。訪問者が音声アシスタントに探している人の名前を伝えると、この小さなスマートアシスタントがその名前をデータベースで認識して検索します。一致する名前が見つかると、アシスタントがその人に電話をかけます。そして、その人が訪問者の身元を確認すると、「Open」というメッセージを送信するだけでドアを開けることができ、訪問者が中に入ることができます。

このような音声受付システムを自宅や職場の前に設置するのはいかがでしょうか？とてもクールではありませんか？

<iframe width="800" height="450" src="https://www.youtube.com/embed/tdIsCRXKoVI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
<br />

**ReSpeaker Core v2.0 - シンプルな音声受付システム**

受付サービスの基本機能は、訪問者を歓迎し、快適に感じてもらい、不正なアクセスを防ぐことです。ReSpeaker Core v2.0 の機能を活用して、音声受付サービスを設計しました。このシステムは訪問者と対話し、訪問先の人にメッセージを送ることができます。将来的には、小規模なオフィス従業員の電話リストデータベースを設計し、従業員がシステムにメッセージを送信できるようにする予定です。このシステムは ReSpeaker Core v2.0 の GPIO 機能を使用して訪問者のためにドアを開けることができます。Microsoft Bing の音声認識サービスと Twilio/Tencent メッセージ API を使用して Python スクリプトを作成しました。詳細については、[ReSpeaker Voice Reception System](https://project.seeedstudio.com/SeeedStudio/respeaker-voice-reception-system-209a6c) を参照してください。

<iframe width="800" height="450" src="https://www.youtube.com/embed/-nTOa3LLpVo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>