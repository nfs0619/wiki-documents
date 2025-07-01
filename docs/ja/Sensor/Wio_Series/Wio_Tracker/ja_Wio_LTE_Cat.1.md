---
title: Wio LTE Cat.1
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Wio_LTE_Cat.1/
slug: /ja/Wio_LTE_Cat.1
last_update:
  date: 05/15/2025
  author: gunengyu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/wio_lte_v1.3.jpg)

Wio Tracker（Wireless Input Output）は、より迅速なIoT GPSソリューションを可能にするオープンソースのゲートウェイです。これはArduinoおよびGrove互換の開発ボードであり、地球上のほぼすべての移動物を追跡し、そのデータをワイヤレスでアップロードすることができます。Wio LTEはWio TrackerのLTEバージョンであり、現在2つのバージョンのWio Trackerが存在します。LTE（4G）バージョンはいくつかの違いをもたらします。

Wio LTEと2Gバージョンを比較すると、主に3つの更新点があります。まず、名前からわかるように、Wio LTEはLTE（4G）通信をサポートしており、2Gよりもはるかに高速で普及しています。次に、Wio LTEは合計4つの異なるGNSS（GPS、Beidou、GLONASS、Galileo）をサポートしており、さらにQZSSもボーナスとしてサポートされています。より多くのGNSSをサポートすることで、位置情報がより正確になります。第三に、Wio LTEのMCUはSTM32にアップグレードされており、Cortex-M4をベースとしているため、2Gバージョンよりも5倍高速です。さらに、フラッシュとRAMもそれぞれ1Mバイトと192+4kバイトに増加しています。

これらの主な更新点を除けば、LTEバージョンはほぼ2Gバージョンと同じです。**もしあなたのプロジェクトが2Gバージョンを使用している場合、LTEバージョンへのアップデートは非常に簡単です。移植可能で拡張可能なATコマンドライブラリを準備しています。** ArduinoおよびGrove互換性により、多数のライブラリとサポートコミュニティを通じて迅速な開発が可能です。ボードに付属するGPSライブラリはArduinoに限定されず、C/C++で開発する場合でも同様に機能します。オンボードの6つのGrove接続により、開発者は180以上のセンサーとアクチュエータを組み合わせてプロジェクトを構築し、問題を解決することができます。プロトタイピングと開発フェーズを簡素化することが私たちの目標です。

Wio LTEは、デバイスがGPS衛星に接続し、取り付けられたアイテムのリアルタイム位置を提供できる屋外プロジェクトに非常に適しています。LTEは広帯域を提供し、ユーザーとデバイス間のインタラクションをはるかに高速化します。自転車共有サービス、ペットや家畜の追跡、車両の位置特定、さらには子供の追跡などのプロジェクトを構築する場合、Wio LTEは最適なソリューションです。

<iframe width="800" height="450" src="https://www.youtube.com/embed/D6DX5P9ncrc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

:::caution 
    USB電源供給が十分でない場合に備え、常に3.7Vリポバッテリーを接続してください。
:::

|製品名 | 購入方法|
|----------------|-----------|
|Wio LTE JPバージョン|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Wio-LTE-JP-Version-v1-3-4G-Cat-1-p-3044.html)|
|Wio LTE AUバージョン|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Wio-LTE-AU-Version-v1-3-4G-Cat-1-GNSS-p-2947.html)|
|Wio LTE EUバージョン|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Wio-LTE-EU-Version-v1-3-4G-Cat-1-GNSS-p-3212.html)|
|Wio LTE USバージョン|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Wio-LTE-US-Version-v1-3-4G-Cat-1-p-4523.html)|

## バージョン
| 製品バージョン | 変更内容                                  | リリース日       |
|-----------------|------------------------------------------|------------------|
| Wio Lte v1.0    | 初版                                     | 2017年7月24日    |
| Wio Lte v1.1    | 生産方法の最適化                         | 2017年10月18日   |
| Wio Lte v1.3    | 電源供給の改善を伴うハードウェア変更     | 2018年3月9日     |
| Wio Lte v1.3b   | レイアウトの調整                         | 2018年3月29日    |

**Wio Lte v1.3 リリースノート**

この製品の発売以来、多くのユーザーからフィードバックや提案をいただきました。これらのフィードバックを基に製品をさらに改善することを決定し、Wio Lte v1.3をリリースしました。

電源回路に以下の変更を加えました：

- PMIC（電源管理IC）をMP2617に変更し、より安定性を向上。
- LTEモジュールに電力を供給するDC-DCモジュールを削除し、このバージョンではメイン回路またはリポバッテリーからLTEモジュールに電力を供給。
- 電力をより安定させるために100μFのコンデンサを2つ追加。

以下の画像で変更点をご確認ください。

                      v1.3                                  v1.0

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/wio_ver1.jpg)
![](https://files.seeedstudio.com/wiki/Wio_LTE/img/wio_ver2.jpg)

電源回路の変更に伴い、電源インジケーターのロジックも変更されました。

LEDの状態 | バッテリーの状態
-----|----
LED点灯 | 充電中
LED消灯 | 充電完了
LED点滅 | バッテリーエラー（バッテリー未接続を含む）

さらに、**リセットキー**のロジックも変更されました。

操作 | リセット範囲
---|---
リセットボタンを短時間押す（2秒以内） | MCUリセット / LTEモジュールはリセットされない
リセットボタンを長時間押す（10秒以上） | ボード全体がリセットされる

## 特徴

* 低コスト、低消費電力のLTE接続で、広範なIoTアプリケーションに最適化
* 世界中で利用可能なLTEおよびUMTS/HSPA+
* 超低消費電力のディープスリープ電流を特徴とする組み込み電源管理ユニット（PMU）
* GPS/BeiDou/GLONASS/GalileoおよびQZSS対応
* Wio Tracker用の移植可能で拡張可能なATコマンドライブラリ
* Arduino IDE互換
* 6つのGroveコネクター
* Nano SIMおよびTFカードの2-in-1ソケット

## 仕様

| 項目            | 機能                   | 値                                                                               |
| --------------- | ---------------------- | -------------------------------------------------------------------------------- |
| マイクロコントローラー | プロセッサ              | STM32F405RG, ARM 32-bit Cortex-M4, 168MHz                                        |
|                 | フラッシュメモリ       | 1MB                                                                              |
|                 | SRAM                   | 192+4KB                                                                          |
|                 | 動作電圧               | 3.3V                                                                             |
|                 | I/OピンあたりのDC電流  | 7mA                                                                              |
| LTE             | LTE Cat.1              | ATコマンド: 3GPP TS27.007および拡張ATコマンド                                   |
|                 | データ                 | LTE-FDD 最大10Mbps（ダウンロード） 最大5Mbps（アップロード）                     |
|                 |                        | プロトコル: TCP/UDP/PPP/FTP/HTTP/NTP/PING/QMI/HTTPS*/SMTP*/MMS*/FTPS*/SMTPS*/SSL* |
|                 | SMS                    | ピアツーピアメッセージ、SMSブロードキャスト、テキストおよびPDUモード             |
|                 | オーディオ             | エコーキャンセル、ノイズ除去                                                     |
| GNSS            | システム               | GPS/BeiDou/GLONASS/Galileo/QZSS                                                 |
|                 | 精度                   | &lt;2.5m CEP                                                                        |
| 周辺機器        | Grove                  | 2 x デジタルポート                                                               |
|                 |                        | 2 x アナログポート                                                               |
|                 |                        | 1 x UART                                                                         |
|                 |                        | 1 x I2C                                                                          |
|                 | アンテナ               | 2 x LTEアンテナ                                                                  |
|                 |                        | 1 x GPSアンテナ                                                                  |
|                 | その他                 | USB: 電源供給およびプログラムアップロード                                        |
|                 |                        | JST 1.0コネクター（バッテリー用）                                                |
|                 |                        | 3.5mmオーディオジャック                                                          |
|                 |                        | MCUリセットボタン、MCUブート（DFU）ボタン、EC21電源ボタン                        |
|                 |                        | 1 x ユーザーRGB LED SK6812                                                      |
|                 |                        | Nano SIMおよびTFカードの2-in-1ソケット                                           |
| サイズ          | 長さ                   | 54.7mm                                                                           |
|                 | 幅                     | 48.2mm                                                                           |
| 重量            |                        | 18g                                                                              |

## 消費電力
| 状態                                                                                  | 電流                              | 電圧                           |
| -------------------------------------------------------------------------------------- | -------------------------------- |--------------------------------|
| 通常起動（起動時）                                                                     | 700mA                            |5V                              |       
| 起動後（アイドルモード）                                                               | 300mA                            |5V                              |  
| 起動後、通常の通信状態（ネットワーク送信機能）                                         | 約600mA、ピーク時は2Aに達する     |5V                              |  
| 通話およびSMS（信号が良好）                                                           | 100-300mA                        |5V                              |  
| ディープスリープモード、すべての機能をオフにし、外部からのウェイクアップが必要（リセットのみでウェイクアップ） | 300uA                            |4.2V                            |  
| MCUディープスリープモード、モジュールに接続されたウェイクアップピン、モジュール経由でウェイクアップ | 300uA以上（テストが必要）         |4.2V                            |  

:::note
    動作条件は2つあります。一つは5V USB電源供給、もう一つは4.2Vバッテリー供給です。   
:::

## アプリケーションアイデア

* 歩数計
* スマートスキー
* スマート二輪車
* シェアリング自転車
* ペット追跡機
* 子供用位置ウォッチ
* スマートウォッチ
* 交通位置システム
* 車両位置システム
* 財産安全管理

:::tip
    Groveモジュールを使用してアプリケーションを拡張してください。ボード上には6つのGroveコネクタがあります。Groveについて初めて聞いた場合は、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご覧ください。簡単に言えば、Groveは標準スタイルのセンサーで、センサー、アクチュエータ、ディスプレイ、通信を含む数百種類のモジュールで構成されています。
:::

## ハードウェア概要

![](https://files.seeedstudio.com/wiki/Wio_Tracker_LTE/img/wio_tracker_lte_v1._top.png)

![](https://files.seeedstudio.com/wiki/Wio_Tracker_LTE/img/wio_tracker_lte_v1_buttom.png)

:::tip
    オンボードのGroveコネクタを使用する場合は、digitalWrite(B10, HIGH)を使用して3V3_Bをオンにしてください。ただし、D38はデフォルトで電源がオンになっています。それ以外の場合、Groveモジュールに電力を供給することはできません。
:::

**EC21モジュール**

EC21には9つのバリエーションがあります：EC21-E、EC21-A、EC21-V、EC21-AUT、EC21-AUV、EC21-AU、EC21-KL、EC21-J、EC21-CEL。これにより、既存のEDGEおよびGSM/GPRSネットワークとの後方互換性が確保され、LTEから2Gまたは3Gネットワークへの移行が容易になります。

そして、**EC21-A**はWIO Tracker - LTEで使用しているもので、AT&TおよびT-mobileのSIMカードをサポートしています。他の地域向けにEC21モジュールをカスタマイズしたい場合は、fae@seeed.ccまでお気軽にメールしてください。

<div>
  {/* eslint-disable-next-line react/no-danger */}
  <style dangerouslySetInnerHTML={{__html: `
    .tg  {border-collapse:collapse;border-spacing:0;}
    .tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
    .tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
    .tg .tg-yw4l{vertical-align:top}
  `}} />
  <table className="tg">
    <tbody>
      <tr>
        <th className="tg-031e" colSpan="2">周波数</th>
        <th className="tg-yw4l">EC21-E</th>
        <th className="tg-yw4l">EC21-A</th>
        <th className="tg-yw4l">EC21-V</th>
        <th className="tg-yw4l">EC21-AUT</th>
      </tr>
      <tr>
        <td className="tg-031e" rowSpan="2">LTE</td>
        <td className="tg-031e">FDD-LTE</td>
        <td className="tg-yw4l">B1/ B3/ B5/ B7/ B8/ B20</td>
        <td className="tg-yw4l">B2/ B4/ B12</td>
        <td className="tg-yw4l">B4/ B13</td>
        <td className="tg-yw4l">B1/ B3/ B5/ B7/ B28</td>
      </tr>
      <tr>
        <td className="tg-031e">TDD-LTE</td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
      </tr>
      <tr>
        <td className="tg-031e">3G</td>
        <td className="tg-031e">WCDMA</td>
        <td className="tg-yw4l">B1/ B5/ B8</td>
        <td className="tg-yw4l">B2/ B4/ B5</td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l">B1/ B5</td>
      </tr>
      <tr>
        <td className="tg-031e" colSpan="2">GSM/EDGE</td>
        <td className="tg-yw4l">B3/ B8</td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
      </tr>
      <tr>
        <td className="tg-031e" colSpan="2">組み込みGNSS</td>
        <td className="tg-yw4l">オプション</td>
        <td className="tg-yw4l">オプション</td>
        <td className="tg-yw4l">オプション</td>
        <td className="tg-yw4l">オプション</td>
      </tr>
      <tr>
        <td className="tg-yw4l" colSpan="2">Wi-Fiインターフェース</td>
        <td className="tg-yw4l">Y</td>
        <td className="tg-yw4l">Y</td>
        <td className="tg-yw4l">Y</td>
        <td className="tg-yw4l">Y</td>
      </tr>
      <tr>
        <td className="tg-yw4l" colSpan="2">地域</td>
        <td className="tg-yw4l">EMEA、韓国、タイ、インド</td>
        <td className="tg-yw4l">北米</td>
        <td className="tg-yw4l">北米</td>
        <td className="tg-yw4l">オーストラリア</td>
      </tr>
      <tr>
        <td className="tg-yw4l" colSpan="2">認証</td>
        <td className="tg-yw4l">CE/ GCF/ Vodafone</td>
        <td className="tg-yw4l">FCC/ PTCRB/ AT&amp;T/ IC/ ROGERS</td>
        <td className="tg-yw4l">FCC/ GCF/ Verizon</td>
        <td className="tg-yw4l">RCM/ Telstra</td>
      </tr>
    </tbody>
  </table>
  <br />
</div>

<div>
  {/* eslint-disable-next-line react/no-danger */}
  <style dangerouslySetInnerHTML={{__html: `
    .tg  {border-collapse:collapse;border-spacing:0;}
    .tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
    .tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
    .tg .tg-yw4l{vertical-align:top}
  `}} />
  <table className="tg">
    <tbody>
      <tr>
        <th className="tg-031e" colSpan="2">周波数</th>
        <th className="tg-yw4l">EC21-AUV</th>
        <th className="tg-yw4l">EC21-AU</th>
        <th className="tg-yw4l">EC21-KL</th>
        <th className="tg-yw4l">EC21-J</th>
        <th className="tg-yw4l">EC20-CEL</th>
      </tr>
      <tr>
        <td className="tg-031e" rowSpan="2">LTE</td>
        <td className="tg-031e">FDD-LTE</td>
        <td className="tg-yw4l">B1/ B3/ B5/ B8/ B28</td>
        <td className="tg-yw4l">B1/ B2&#9312;/ B3/ B4/ B5/ B7/ B8/ B28</td>
        <td className="tg-yw4l">B1/ B3/ B5/ B7/ B8</td>
        <td className="tg-yw4l">B1/ B3/ B8/ B18/ B19/ B26</td>
        <td className="tg-yw4l">B1/ B3/ B5</td>
      </tr>
      <tr>
        <td className="tg-031e">TDD-LTE</td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l">B40</td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
      </tr>
      <tr>
        <td className="tg-031e">3G</td>
        <td className="tg-031e">WCDMA</td>
        <td className="tg-yw4l">B1/ B5/ B8</td>
        <td className="tg-yw4l">B1/ B2/ B5/ B8</td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
      </tr>
      <tr>
        <td className="tg-031e" colSpan="2">GSM/EDGE</td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l">クアッドバンド</td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
      </tr>
      <tr>
        <td className="tg-031e" colSpan="2">組み込みGNSS</td>
        <td className="tg-yw4l">N<br />			</td>
        <td className="tg-yw4l">オプション<br />			</td>
        <td className="tg-yw4l">N<br />			</td>
        <td className="tg-yw4l">N<br />			</td>
        <td className="tg-yw4l">N</td>
      </tr>
      <tr>
        <td className="tg-yw4l" colSpan="2">Wi-Fiインターフェース</td>
        <td className="tg-yw4l">Y</td>
        <td className="tg-yw4l">Y</td>
        <td className="tg-yw4l">Y</td>
        <td className="tg-yw4l">Y</td>
        <td className="tg-yw4l">Y</td>
      </tr>
      <tr>
        <td className="tg-yw4l" colSpan="2">地域</td>
        <td className="tg-yw4l">Vodafoneオーストラリア</td>
        <td className="tg-yw4l">南米、ANZ、台湾</td>
        <td className="tg-yw4l">韓国</td>
        <td className="tg-yw4l">日本</td>
        <td className="tg-yw4l">中国電信</td>
      </tr>
      <tr>
        <td className="tg-yw4l" colSpan="2">認証</td>
        <td className="tg-yw4l">RCM</td>
        <td className="tg-yw4l">RCM/ Anatel/ NCC</td>
        <td className="tg-yw4l">KC/ SKT/KT&#42;/ LGU+&#42;</td>
        <td className="tg-yw4l">JATE/ TELEC/ DOCOMO&#42;</td>
        <td className="tg-yw4l">CCC/ SRRC/ NAL</td>
      </tr>
    </tbody>
  </table>
</div>

## はじめに

### USBドライバーのインストール

- **Windowsユーザー**: ほとんどのWindowsバージョンでは、USB通信ポート用の組み込みドライバーが自動的に読み込まれません。STのUSBドライバー [STM32 Virtual COM Port Driver](https://www.st.com/en/development-tools/stsw-stm32102.html#get-software) をダウンロードする必要があります。

- **Mac OS XおよびChromebookユーザー**: ボードを接続するだけでドライバーなしで動作します！

### DFUドライバーの変更

**Windowsユーザー向け**:

- ステップ1. BOOTボタンを押し続けながらコンピュータに接続すると、デバイスマネージャーに **STM32 Device in DFU Mode** が表示されます。

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/before_driver_installation.png)

- ステップ2. [zadig_xx.exe](https://files.seeedstudio.com/wiki/Wio_LTE/res/zadig_2.1.2.exe) を使用して、DFUドライバーを **STTub30** から **WinUSB** に変更します。Zadigに情報が表示されない場合は、Options--> List All Devices をクリックし、STM32 Virtual COM Portsを選択してください。

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/zadig.png)

- ステップ3. デバイスマネージャーに "STMicroelectronics Virtual COM Port" が表示されます。

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/after_driver_installation.png)

### Arduinoで遊ぶ

**1. ソフトウェア設定**

- ステップ1. Arduino IDEをインストールします。推奨バージョンは1.8.0以上です。
- ステップ2. [SeeedボードをArduino IDEに追加する方法](https://wiki.seeedstudio.com/ja/Seeed_Arduino_Boards/) に従って、Wio_LTEをArduinoボードマネージャーに追加します。

:::note
こんにちは、"Wio LTE Cat.1"ボードは "Wio Terminal" のように "Seeed SAMD Boards" パッケージに保存されています。[こちら](https://wiki.seeedstudio.com/ja/Wio-Terminal-Getting-Started#software) を参照してパッケージをインストールしてください。
![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/addBoard.png)
:::

- ステップ3. [Wio_LTEライブラリ](https://github.com/Seeed-Studio/Wio_LTE_Arduino_Library) をGithubからダウンロードします。
- ステップ4. [Arduinoライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library) を参照してライブラリをインストールします。

**2. SMS送信で遊ぶ**

- ステップ1. Nano SIMカードをPCBボード側のNano SIMスロットに挿入します。
- ステップ2. File--> Examples-->Wio_LTE_Arduino_Library-->SMSSendスケッチを選択します。
- ステップ3. 電話番号と情報を変更します。
- ステップ4. Wio LTEの背面のBOOTボタンを押し続けながらUSBをPCに接続します。
- ステップ5. デバイスマネージャーに **STM BOOTLARDER** が表示されます。
- ステップ6. Tools-->Boards-->Wio_Tracker_LTEを選択します。
- ステップ7. COMポートを空白のままにします。
- ステップ8. Sketch-->Uploadを選択してコードをWio_LTEにアップロードします。
- ステップ9. **RST**ボタンを押してCOMポートを有効にします。

```cpp
#include "wio_tracker.h"

char message[128] = "Hello from Wio Traker!";

WioTracker wio = WioTracker();

void setup() {
  wio.Power_On();
  SerialUSB.println("Power On!");

  if(!wio.waitForNetworkRegister())
  {
    SerialUSB.println("Network error!");
    return;
  } else {
    SerialUSB.println("Network ready!");
  }

  // テスト用の電話番号にxxxxxxxxxxxを変更してください
  if(wio.sendSMS("185XXX26402", message))
  {
    SerialUSB.println("Send OK!");
  }
  else
  {
    SerialUSB.println("Send Error!");
  }

}

void loop() {
  AT_bypass();
}
```

- ステップ10. COMモニターツールを使用してシリアルメッセージを表示します。**Arduino IDEのCOMモニターは使用しないでください！これにより次回のダウンロードが失敗する可能性がありますが、Arduino IDEを再起動すれば問題は解決します**。
- ステップ11. 電話番号の所有者がメッセージを受信します。

```cpp
Power On!


Network ready!



Send OK!
```

**3. SMS受信で遊ぶ**

- ステップ1. Nano SIMカードをPCBボード側のNano SIMスロットに挿入します。
- ステップ2. File--> Examples-->Wio_LTE_Arduino_Library-->SMSReadスケッチを選択します。
- ステップ3. Wio LTEの背面のBOOTボタンを押し続けながらUSBをPCに接続します。
- ステップ4. デバイスマネージャーに **STM BOOTLARDER** が表示されます。
- ステップ5. Tools-->Boards-->Wio_Tracker_LTEを選択します。
- ステップ6. COMポートを空白のままにします。
- ステップ7. Sketch-->Uploadを選択してコードをWio_LTEにアップロードします。
- ステップ8. **RST**ボタンを押してCOMポートを有効にします。

```cpp
#include "wio_tracker.h"

uint16_t newSMSNumber = -1;
char message[128];
char phone[32];
char dateTime[32];


WioTracker wio = WioTracker();

void setup() {
  wio.Power_On();
  SerialUSB.println("Power On!");
  SerialUSB.println("Wait for network registered...");

  if(!wio.waitForNetworkRegister())
  {
    SerialUSB.println("Network error!");
    return;
  } else {
    SerialUSB.println("Network ready!");
  }
  wio.readAllRecUnreadSMS();  // すべての "REC UNREAD SMS" を "REC READ SMS" に設定
}

void loop() {
  int id = wio.detectRecUnreadSMS();
  if(-1 != id){
    newSMSNumber = id;
    wio.readSMS(newSMSNumber, message, 128, phone, dateTime);
    SerialUSB.println("++++++++++++++ Start +++++++++++++++++");
    SerialUSB.print("From: ");
    SerialUSB.println(phone);
    SerialUSB.print("Date: ");
    SerialUSB.println(dateTime);
    SerialUSB.println(message);
    SerialUSB.println("++++++++++++++++ End +++++++++++++++");
  } else {
    SerialUSB.println("Waiting for new SMS!");
  }

  delay(1000);
}

```

- ステップ9. COMモニターツールを使用してシリアルメッセージを表示します。**Arduino IDEのCOMモニターは使用しないでください！これにより次回のダウンロードが失敗する可能性がありますが、Arduino IDEを再起動すれば問題は解決します**。
- ステップ10. シリアルモニターを開き、**Waitting for new SMS!** が表示されたら、ボードにメッセージを送信します。新しいメッセージが電話番号、時間、内容とともにすぐに表示されます。

```cpp
Power On!
Wait for network registered...


Network ready!


Waiting for new SMS!
Waiting for new SMS!
Waiting for new SMS!

++++++++++++++ Start +++++++++++++++++
From: 1375002xxxx
Date: 17/12/20,17:40:38+32
Hello tracker
++++++++++++++++ End +++++++++++++++
Waiting for new SMS!
Waiting for new SMS!
```

**4. GPSで遊ぶ**

- ステップ1. Nano SIMカードをPCBボード側のNano SIMスロットに挿入します。
- ステップ2. File--> Examples-->Wio_LTE_Arduino_Library-->GNNS-->GNSS_Show_Coordinateスケッチを選択します。
- ステップ3. Wio LTEの背面のBOOTボタンを押し続けながらUSBをPCに接続します。
- ステップ4. デバイスマネージャーに **STM BOOTLARDER** が表示されます。
- ステップ5. Tools-->Boards-->Wio_Tracker_LTEを選択します。
- ステップ6. COMポートを空白のままにします。
- ステップ7. Sketch-->Uploadを選択してコードをWio_LTEにアップロードします。
- ステップ8. **RST**ボタンを押してCOMポートを有効にします。

```cpp
#include "gnss.h"


GNSS gnss = GNSS();

void setup() {
  gnss.Power_On();
  while(false == gnss.Check_If_Power_On()){
    SerialUSB.println("モジュールが起動するのを待っています...");
    delay(1000);
  }
  SerialUSB.println("\n\r電源オン完了!");

  if(!(gnss.open_GNSS())){
    SerialUSB.println("\n\rGNSS 初期化失敗!");
    return;
  }

  SerialUSB.println("GNSS オープン成功.");
  delay(2000);
}

void loop() {
  if(gnss.getCoordinate()){
    SerialUSB.println();
    SerialUSB.print("GNSS: \r\n");

    // double型で出力
    SerialUSB.print("double型のデータ: ");
    SerialUSB.print(gnss.longitude, 6);
    SerialUSB.print(",");
    SerialUSB.println(gnss.latitude, 6);

    // char*型で出力
    SerialUSB.print("文字列型のデータ: ");
    SerialUSB.print(gnss.str_longitude);
    SerialUSB.print(",");
    SerialUSB.println(gnss.str_latitude);
  } else{
    SerialUSB.print("...");
  }
}

```

- ステップ9. COMモニターツールを使用してシリアルメッセージを表示します。**Arduino IDEのCOMモニターは使用しないでください！次回のダウンロードが失敗する可能性がありますが、Arduino IDEを再起動することで問題を解決できます**。
- ステップ10. 画面に緯度と経度の情報が表示されます。

```cpp
モジュールが起動するのを待っています...
モジュールが起動するのを待っています...
モジュールが起動するのを待っています...

RDY
AT

OK


電源オン完了!


GNSS オープン成功.
.................................
GNSS:
double型のデータ: 113.966255,22.583820
文字列型のデータ: 113.966255,22.583819

GNSS:
double型のデータ: 113.966248,22.583818
文字列型のデータ: 113.966248,22.583818

GNSS:
double型のデータ: 113.966248,22.583817
文字列型のデータ: 113.966248,22.583816

GNSS:
double型のデータ: 113.966248,22.583820
文字列型のデータ: 113.966248,22.583819
```

**5. NMEAモードでGPSを操作する**

- ステップ1. Nano SIMカードをPCB基板側のNano SIMスロットに挿入します。
- ステップ2. File--> Examples-->Wio_LTE_Arduino_Library-->GNNS-->GNSS_NMEAスケッチを選択します。
- ステップ3. Wio LTEの背面にあるBOOTボタンを押しながらUSBをPCに接続します。
- ステップ4. デバイスマネージャーに**STM BOOTLARDER**が表示されます。
- ステップ5. Tools-->Boards-->Wio_Tracker_LTEを選択します。
- ステップ6. COMポートを空白のままにします。
- ステップ7. Sketch-->Uploadを選択してコードをWio_LTEにアップロードします。
- ステップ8. **RST**ボタンを押してCOMポートを有効にします。

```cpp
#include "gnss.h"


char nmea_sentence[192];
char nmea_GSV_sentence[512];
GNSS gnss = GNSS();

void setup() {
  gnss.Power_On();
  while(false == gnss.Check_If_Power_On()){
    SerialUSB.println("モジュールが起動するのを待っています...");
    delay(1000);
  }
  SerialUSB.println("\n\r電源オン完了!");

  if(!(gnss.open_GNSS())){
    SerialUSB.println("\n\rGNSS 初期化失敗!");
    return;
  }
  SerialUSB.println("GNSS オープン成功.");
  gnss.enable_NMEA_mode();  // NMEAモードで出力文を設定
}

void loop() {  
  clean_buffer(nmea_sentence, 192);
  gnss.read_NMEA(GGA, nmea_sentence);
  SerialUSB.print(nmea_sentence);

  clean_buffer(nmea_sentence, 192);
  gnss.read_NMEA(RMC, nmea_sentence);
  SerialUSB.print(nmea_sentence);

  clean_buffer(nmea_sentence, 192);
  gnss.read_NMEA(GSA, nmea_sentence);
  SerialUSB.print(nmea_sentence);

  clean_buffer(nmea_sentence, 192);
  gnss.read_NMEA(VTG, nmea_sentence);
  SerialUSB.print(nmea_sentence);

  clean_buffer(nmea_GSV_sentence, 512);
  gnss.read_NMEA_GSV(nmea_sentence);
  SerialUSB.print(nmea_sentence);

  SerialUSB.println("\r\n");

  delay(1000);
}

```
- ステップ9. COMモニターツールを使用してシリアルメッセージを表示します。**Arduino IDEのCOMモニターは使用しないでください！次回のダウンロードが失敗する可能性がありますが、Arduino IDEを再起動することで問題を解決できます**。
- ステップ10. 以下のログが表示されます。

```cpp
モジュールが起動するのを待っています...
モジュールが起動するのを待っています...
モジュールが起動するのを待っています...
モジュールが起動するのを待っています...



電源オン完了!


GNSS オープン成功.

$GPRMC,,V,,,,,,,,,,N*53
$GPGSA,A,1,,,,,,,,,,,,,,,*1E
$GPVTG,,T,,M,,N,,K,N*2C
$GPGSV,3,1,12,16,60,324,40,27,54,171,40,03,19,253,,08,21,198,*7B
$GPGSV,3,2,12,09,02,322,,14,32,147,,21,04,080,,22,17,233,*7E
$GPGSV,3,3,12,23,32,314,,26,45,018,,31,35,073,,32,10,149,*7C


$GPGGA,,,,,,0,,,,,,,,*66
$GPRMC,,V,,,,,,,,,,N*53
$GPGSA,A,1,,,,,,,,,,,,,,,*1E
$GPVTG,,T,,M,,N,,K,N*2C
$GPGSV,3,1,12,03,19,253,38,08,21,198,34,14,32,147,37,16,60,324,42*70
$GPGSV,3,2,12,22,17,233,37,23,32,314,38,26,45,018,40,27,54,171,44*7D
$GPGSV,3,3,12,31,35,073,40,09,02,322,,21,04,080,,32,10,149,*75


$GPGGA,,,,,,0,,,,,,,,*66
$GPRMC,,V,,,,,,,,,,N*53
$GPGSA,A,1,,,,,,,,,,,,,,,*1E
$GPVTG,,T,,M,,N,,K,N*2C
$GPGSV,4,1,13,03,19,253,40,04,,,37,08,21,198,36,09,02,322,33*43
$GPGSV,4,2,13,14,32,147,37,16,60,324,41,22,17,233,40,23,32,314,39*72
$GPGSV,4,3,13,26,45,018,41,27,54,171,41,31,35,073,40,21,04,080,*78
$GPGSV,4,4,13,32,10,149,*47


$GPGGA,,,,,,0,,,,,,,,*66
$GPRMC,,V,,,,,,,,,,N*53
$GPGSA,A,1,,,,,,,,,,,,,,,*1E
$GPVTG,,T,,M,,N,,K,N*2C
$GPGSV,4,1,14,03,19,253,39,04,,,37,08,21,198,36,09,02,322,34*4D
$GPGSV,4,2,14,14,32,147,36,16,60,324,41,22,17,233,37,23,32,314,39*74
$GPGSV,4,3,14,26,45,018,41,27,54,171,41,31,35,073,41,21,04,080,*7E
$GPGSV,4,4,14,32,10,149,,33,,,34*47
$GPVTG,,T,,M,,N,,K,N*2C


$GPGGA,110917.30,2235.028403,N,11357.974736,E,1,10,0.9,52.2,M,-1.0,M,,*43
$GPRMC,110917.30,A,2235.028403,N,11357.974736,E,0.0,,050118,2.3,W,A*0B
$GPGSA,A,3,03,08,09,14,16,22,23,26,27,31,,,1.8,0.9,1.6*37
$GPVTG,,T,2.3,M,0.0,N,0.0,K,A*0C
$GPGSV,4,1,15,03,19,253,38,04,,,36,08,21,198,34,09,02,322,33*49
$GPGSV,4,2,15,14,32,147,36,16,60,324,40,22,17,233,36,23,32,314,38*74
$GPGSV,4,3,15,26,45,018,40,27,54,171,40,31,35,073,40,21,04,080,*7E
$GPGSV,4,4,15,32,10,149,,33,,,34,46,,,34*43
$GPVTG,,T,2.3,M,0.0,N,0.0,K,A*0C

```

**6. 通話機能を試す**

- ステップ1. Nano SIMカードをPCB基板側のNano SIMスロットに挿入します。
- ステップ2. File--> Examples-->Wio_LTE_Arduino_Library-->Callupスケッチを選択します。
- ステップ3. 電話番号を変更します。
- ステップ4. Wio LTEの背面にあるBOOTボタンを押しながらUSBをPCに接続します。
- ステップ5. デバイスマネージャーに**STM BOOTLARDER**が表示されます。
- ステップ6. Tools-->Boards-->Wio_Tracker_LTEを選択します。
- ステップ7. COMポートを空白のままにします。
- ステップ8. Sketch-->Uploadを選択してコードをWio_LTEにアップロードします。
- ステップ9. **RST**ボタンを押してCOMポートを有効にします。
- ステップ10. COMモニターツールを使用してシリアルメッセージを表示します。**Arduino IDEのCOMモニターは使用しないでください！次回のダウンロードが失敗する可能性がありますが、Arduino IDEを再起動することで問題を解決できます**。
- ステップ11. 電話番号の所有者が通話を受け取ります。

```cpp
#include "wio_tracker.h"

WioTracker wio = WioTracker();

void setup() {
  wio.Power_On();
  SerialUSB.println("電源オン!");

  while(!wio.init()){
    delay(1000);
    SerialUSB.println("ネットワークにアクセス中...");
  }
  SerialUSB.println("初期化完了...");

  bool ret = wio.waitForNetworkRegister();
  if(true == ret){
      SerialUSB.println("ネットワークにアクセス成功!");
  }else {
      SerialUSB.println("ネットワークにアクセス失敗!");
      return;
  }

  // 電話をかける
  wio.callUp("185XXX26402");
  SerialUSB.println("通話中...");

}

void loop() {
  /* デバッグ */
  AT_bypass();
}

```

**7. ソケット TCP/UDP クライアントを操作する**

- ステップ 1. Nano SIM カードを PCB ボード側の Nano SIM スロットに挿入します。
- ステップ 2. File--> Examples-->Wio_LTE_Arduino_Library-->TCPConnect を選択します。
- ステップ 3. 電話番号を変更します。
- ステップ 4. Wio LTE の背面にある BOOT ボタンを押しながら、USB を PC に接続します。
- ステップ 5. デバイスマネージャーで **STM BOOTLARDER** が表示されます。
- ステップ 6. Tools-->Boards-->Wio_Tracker_LTE を選択します。
- ステップ 7. COM ポートを空白のままにします。
- ステップ 8. Sketch-->Upload を選択して、コードを Wio_LTE にアップロードします。

```cpp
#include "ethernet.h"

Ethernet eth = Ethernet();


// const char apn[10] = "CMNET";
const char apn[10] = "UNINET";
const char URL[100] = "mbed.org";
char http_cmd[100] = "GET /media/uploads/mbed_official/hello.txt HTTP/1.0\n\r\n\r";
int port = 80;

int ret = 0;


void setup() {
  SerialUSB.println("開始...");
  eth.Power_On();
  while(false == eth.Check_If_Power_On()){
    SerialUSB.println("モジュールが起動するのを待っています...");
    delay(1000);
  }

  while(!eth.init()){
    delay(1000);
    SerialUSB.println("ネットワークにアクセス中...");
  }
  SerialUSB.println("初期化完了...");

  eth.join(apn);
  SerialUSB.print("\n\rIP: ");
  SerialUSB.print(eth.ip_string);

  if(eth.connect(URL, port, TCP))
  {
    eth.write(http_cmd);
    while(MODULE_PORT.available()){
        serialDebug.write(MODULE_PORT.read());
    }    
    eth.close(1);
  }
  else {
    SerialUSB.println("接続エラー!");
  }

}

void loop() {
  /* デバッグ */
  AT_bypass();
}
```
- ステップ 9. **RST** ボタンを押して COM ポートを有効にします。
- ステップ 10. COM モニターツールを使用してシリアルメッセージを表示します。**Arduino IDE の COM モニターは使用しないでください！次回のダウンロードが失敗する可能性がありますが、Arduino IDE を再起動すれば問題が解決します。**

```
開始...
モジュールが起動するのを待っています...
モジュールが起動するのを待っています...
モジュールが起動するのを待っています...




初期化完了...





IP: 10.229.226.108




+QIURC: "recv",0,389
HTTP/1.1 200 OK
Server: nginx/1.11.12
Date: Mon, 25 Dec 2017 04:45:01 GMT
Content-Type: text/plain
Content-Length: 14
Connection: close
Last-Modified: Fri, 27 Jul 2012 13:30:34 GMT
Accept-Ranges: bytes
Cache-Control: max-age=36000
Expires: Mon, 25 Dec 2017 14:44:58 GMT
X-Upstream-L1-next-hop: 217.140.101.22:8080
X-Upstream-L1: developer-sjc-cyan-border-nginx

Hello world!


+QIURC: "closed",0
```

**8. SDカードを操作する**

:::note
    Epruino ファームウェア v1.94 は SD カードドライブをサポートしていません。v1.96 以降を使用してください。最新バージョンは v1.99 です。
:::
- ステップ 1. micro SD カードを SD カードスロットに挿入します。
- ステップ 2. File--> Examples-->Wio_LTE_Arduino_Library-->SDCard->CardInfo を選択します。
- ステップ 3. 電話番号を変更します。
- ステップ 4. Wio LTE の背面にある BOOT ボタンを押しながら、USB を PC に接続します。
- ステップ 5. デバイスマネージャーで **STM BOOTLARDER** が表示されます。
- ステップ 6. Tools-->Boards-->Wio_Tracker_LTE を選択します。
- ステップ 7. COM ポートを空白のままにします。
- ステップ 8. Sketch-->Upload を選択して、コードを Wio_LTE にアップロードします。

```cpp
 // SD ライブラリをインクルード
#include <SD.h>

// SD ユーティリティライブラリ関数を使用して変数を設定
Sd2Card card;
SdVolume volume;
SdFile root;

const int chipSelect = 43;

void setup()
{

  SerialUSB.print("\nSDカードを初期化中...");
  pinMode(SS, OUTPUT);


  // ユーティリティライブラリの初期化コードを使用
  // カードが動作しているかどうかをテストします
  while (!card.init(SPI_HALF_SPEED, chipSelect)) {
    SerialUSB.println("初期化に失敗しました。以下を確認してください:");
    SerialUSB.println("* カードが挿入されていますか?");
    SerialUSB.println("* 配線が正しいですか?");
    SerialUSB.println("* chipSelect ピンをシールドまたはモジュールに合わせて変更しましたか?");
  }

  // カードの種類を出力
  SerialUSB.print("\nカードタイプ: ");
  switch(card.type()) {
    case SD_CARD_TYPE_SD1:
      SerialUSB.println("SD1");
      break;
    case SD_CARD_TYPE_SD2:
      SerialUSB.println("SD2");
      break;
    case SD_CARD_TYPE_SDHC:
      SerialUSB.println("SDHC");
      break;
    default:
      SerialUSB.println("不明");
  }

  // 'volume'/'partition' を開こうとします - FAT16 または FAT32 である必要があります
  if (!volume.init(card)) {
    SerialUSB.println("FAT16/FAT32 パーティションが見つかりません。\nカードをフォーマットしたことを確認してください");
    return;
  }


  // 最初の FAT タイプボリュームの種類とサイズを出力
  uint32_t volumesize;
  SerialUSB.print("\nボリュームタイプは FAT");
  SerialUSB.println(volume.fatType(), DEC);
  SerialUSB.println();

  volumesize = volume.blocksPerCluster();    // クラスターはブロックの集合
  volumesize *= volume.clusterCount();       // 多くのクラスターがあります
  volumesize *= 512;                            // SD カードブロックは常に 512 バイト
  SerialUSB.print("ボリュームサイズ (バイト): ");
  SerialUSB.println(volumesize);
  SerialUSB.print("ボリュームサイズ (キロバイト): ");
  volumesize /= 1024;
  SerialUSB.println(volumesize);
  SerialUSB.print("ボリュームサイズ (メガバイト): ");
  volumesize /= 1024;
  SerialUSB.println(volumesize);


  SerialUSB.println("\nカード上で見つかったファイル (名前、日付、バイト単位のサイズ): ");
  root.openRoot(volume);

  // カード内のすべてのファイルを日付とサイズ付きでリスト
  root.ls(LS_R | LS_DATE | LS_SIZE);
}


void loop(void) {

}
```

- ステップ 9. **RST** ボタンを押して COM ポートを有効にします。
- ステップ 10. COM モニターツールを使用してシリアルメッセージを表示します。**Arduino IDE の COM モニターは使用しないでください！次回のダウンロードが失敗する可能性がありますが、Arduino IDE を再起動すれば問題が解決します。**

```cpp

SDカードを初期化中...
カードタイプ: SDHC

ボリュームタイプは FAT32

ボリュームサイズ (バイト): 2689048576
ボリュームサイズ (キロバイト): 2626024
ボリュームサイズ (メガバイト): 2564

カード上で見つかったファイル (名前、日付、バイト単位のサイズ):

```

**9. Groveモジュールで遊ぶ**

**9.1 Groveデジタルモジュールで遊ぶ**  

[温湿度センサー(Grove-TemperatureAndHumidity_Sensor)](https://wiki.seeedstudio.com/ja/Grove-TemperatureAndHumidity_Sensor/)をデジタル入力として使用し、Wio LTEのD20に接続します。

- ステップ1. Wio LTEの背面にあるBOOTボタンを押し続けながら、USBをPCに接続します。
- ステップ2. デバイスマネージャーに**STM BOOTLARDER**が表示されます。
- ステップ3. ツール-->ボード-->Wio_Tracker_LTEを選択します。
- ステップ4. COMポートを空白のままにします。
- ステップ5. Githubから [WioLTEforArduinoライブラリ](https://github.com/SeeedJP/WioLTEforArduino/archive/master.zip) と [Grove-TemperatureAndHumidity_Sensorライブラリ](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor/archive/master.zip) をダウンロードします。[Arduinoライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照してライブラリをインストールしてください。
- ステップ6. 以下のコードをスケッチにコピーします。
- ステップ7. アップロードをクリックしてコードをWio LTEにアップロードします。

```c
#include <WioLTEforArduino.h>
#include "DHT.h"
#define DHTPIN  (WIOLTE_D20)
#define INTERVAL    (100)

// 使用しているタイプをアンコメントしてください！
#define DHTTYPE DHT11   // DHT 11 
//#define DHTTYPE DHT22   // DHT 22  (AM2302)
//#define DHTTYPE DHT21   // DHT 21 (AM2301)

WioLTE Wio;
DHT dht(DHTPIN, DHTTYPE);

void setup()
{
  delay(200);
  SerialUSB.println("### I/O 初期化中。");
  Wio.Init();
  SerialUSB.println("### 電源供給ON。");
  Wio.PowerSupplyGrove(true);
  delay(500);
  SerialUSB.println("### 温湿度センサーを初期化中。");
  dht.begin();
}

void loop()
{
    // 温度または湿度の読み取りには約250ミリ秒かかります！
    // センサーの読み取り値は最大2秒前の値になる場合があります（非常に遅いセンサーです）
    float h = dht.readHumidity();
    float t = dht.readTemperature();

    // 返り値が有効かどうかを確認します。NaN（数値ではない）が返された場合、何か問題が発生しています！
    if (isnan(t) || isnan(h)) 
    {
        SerialUSB.println("DHTからの読み取りに失敗しました");
    } 
    else 
    {
        SerialUSB.print("湿度: "); 
        SerialUSB.print(h);
        SerialUSB.print(" %\t");
        SerialUSB.print("温度: "); 
        SerialUSB.print(t);
        SerialUSB.println(" *C");
    }
}
```

- ステップ8. **RST**ボタンを押してCOMポートを有効にします。
- ステップ9. COMモニターツールを使用してシリアルメッセージを表示します。**Arduino IDEのCOMモニターは使用しないでください！次回のダウンロードが失敗する可能性がありますが、Arduino IDEを再起動すれば問題は解決します**。

```
### I/O 初期化中。
### 電源供給ON。
### 温湿度センサーを初期化中。
湿度: 40.00 %	温度: 27.00 *C
湿度: 40.00 %	温度: 27.00 *C
湿度: 40.00 %	温度: 27.00 *C
湿度: 40.00 %	温度: 27.00 *C
湿度: 39.00 %	温度: 27.00 *C
```

**9.2 Groveアナログモジュールで遊ぶ**  

[Grove-光センサー](https://wiki.seeedstudio.com/ja/Grove-Light_Sensor/)をアナログ入力として使用し、Wio LTEのA4（12ビットADC）に接続します。

- ステップ1. Wio LTEの背面にあるBOOTボタンを押し続けながら、USBをPCに接続します。
- ステップ2. デバイスマネージャーに**STM BOOTLARDER**が表示されます。
- ステップ3. ツール-->ボード-->Wio_Tracker_LTEを選択します。
- ステップ4. COMポートを空白のままにします。
- ステップ5. Githubから [WioLTEforArduinoライブラリ](https://github.com/SeeedJP/WioLTEforArduino/archive/master.zip) をダウンロードします。[Arduinoライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照してライブラリをインストールしてください。
- ステップ6. 以下のコードをスケッチにコピーします。
- ステップ7. アップロードをクリックしてコードをWio LTEにアップロードします。

```c
#include <WioLTEforArduino.h>
#define LIGHT_PIN  (WIOLTE_A4)
WioLTE Wio;

void setup() {
  delay(200);
  SerialUSB.println("### I/O 初期化中。");
  Wio.Init();
  SerialUSB.println("### 電源供給ON。");
  Wio.PowerSupplyGrove(true);
  delay(500);
  SerialUSB.println("### ピンモードを設定中。");
  pinMode(LIGHT_PIN, INPUT_ANALOG);
}

void loop() {
  int light = analogRead(LIGHT_PIN);
  SerialUSB.println(light);
  delay(1000);
}
```

- ステップ8. **RST**ボタンを押してCOMポートを有効にします。
- ステップ9. COMモニターツールを使用してシリアルメッセージを表示します。**Arduino IDEのCOMモニターは使用しないでください！次回のダウンロードが失敗する可能性がありますが、Arduino IDEを再起動すれば問題は解決します**。

```
### I/O 初期化中。
### 電源供給ON。
### ピンモードを設定中。
2531
2530
2530
2530
2531
2533
2532
2531
```

**9.3 Grove I2Cモジュールで遊ぶ**  

[Grove - 3軸デジタル加速度センサー(±16g)](https://wiki.seeedstudio.com/ja/Grove-3-Axis_Digital_Accelerometer-16g/)をI2Cデバイスとして使用し、Wio LTEのI2Cポートに接続します。

- ステップ1. Wio LTEの背面にあるBOOTボタンを押し続けながら、USBをPCに接続します。
- ステップ2. デバイスマネージャーに**STM BOOTLARDER**が表示されます。
- ステップ3. ツール-->ボード-->Wio_Tracker_LTEを選択します。
- ステップ4. COMポートを空白のままにします。
- ステップ5. Githubから [WioLTEforArduinoライブラリ](https://github.com/SeeedJP/WioLTEforArduino/archive/master.zip) と [ADXL345ライブラリ](https://github.com/Seeed-Studio/Accelerometer_ADXL345/archive/master.zip) をダウンロードします。[Arduinoライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照してライブラリをインストールしてください。
- ステップ6. 以下のコードをスケッチにコピーします。
- ステップ7. アップロードをクリックしてコードをWio LTEにアップロードします。

```c
#include <WioLTEforArduino.h>
#include <ADXL345.h>       

#define INTERVAL    (100)

WioLTE Wio;
ADXL345 Accel;

void setup()
{ 
  delay(200);
  SerialUSB.println("### I/O 初期化中。");
  Wio.Init(); 
  SerialUSB.println("### 電源供給ON。");
  Wio.PowerSupplyGrove(true);
  delay(500);
  Accel.powerOn();
  SerialUSB.println("### セットアップ完了。");
}

void loop()
{
  int x;
  int y;
  int z;
  Accel.readXYZ(&x, &y, &z);
  SerialUSB.print(x);
  SerialUSB.print(' ');
  SerialUSB.print(y);
  SerialUSB.print(' ');
  SerialUSB.println(z); 
  delay(INTERVAL);
}
```

- ステップ8. **RST**ボタンを押してCOMポートを有効にします。
- ステップ9. COMモニターツールを使用してシリアルメッセージを表示します。**Arduino IDEのCOMモニターは使用しないでください！次回のダウンロードが失敗する可能性がありますが、Arduino IDEを再起動すれば問題は解決します**。

```
### I/O 初期化中。
### 電源供給ON。
### セットアップ完了。
-224 -51 -82
-227 -40 -90
-231 -37 -91
-229 -37 -90
-227 -38 -90
-229 -39 -90
```

**9.4 Grove UARTモジュールで遊ぶ**  

私たちは [Grove-CO2](https://wiki.seeedstudio.com/ja/Grove-CO2_Sensor/) をUARTデバイスとして使用し、Wio LTEのUARTポートに接続します。

- ステップ 1. Wio LTEの背面にあるBOOTボタンを押し続けながら、USBをPCに接続します。
- ステップ 2. デバイスマネージャーで **STM BOOTLARDER** が表示されます。
- ステップ 3. ツール-->ボード-->Wio_Tracker_LTE を選択します。
- ステップ 4. COMポートを空白のままにします。
- ステップ 5. Githubから [WioLTEforArduinoライブラリ](https://github.com/SeeedJP/WioLTEforArduino/archive/master.zip) をダウンロードします。Arduino用ライブラリのインストール方法については、[ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library) を参照してください。
- ステップ 6. 以下のコードをスケッチにコピーします。
- ステップ 7. アップロードをクリックして、コードをWio LTEにアップロードします。

```c
#include <WioLTEforArduino.h>
#include <ADXL345.h>       
#define INTERVAL    (100)

const unsigned char cmd_get_sensor[] =
{
    0xff, 0x01, 0x86, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x79
};

unsigned char dataRevice[9];
int temperature;
int CO2PPM;

WioLTE Wio;

void setup()
{ 
  delay(200);
  SerialUSB.println("### I/O Initialize.");
  Wio.Init(); 
  SerialUSB.println("### Power supply ON.");
  Wio.PowerSupplyGrove(true);
  delay(500);
  SerialUSB.println("Initial UART.");
  Serial.begin(9600);
}

void loop() {
    if(dataRecieve())
    { 
        SerialUSB.print("Temperature: ");
        SerialUSB.print(temperature);
        SerialUSB.print("  CO2: ");
        SerialUSB.print(CO2PPM);
        SerialUSB.println("");
    }
    delay(1000); 
}


bool dataRecieve(void)
{
    byte data[9];
    int i = 0;

    // コマンドデータを送信
    for(i=0; i<sizeof(cmd_get_sensor); i++)
    {
        Serial.write(cmd_get_sensor[i]);
    }
    delay(10);
    // データ受信を開始
    if(Serial.available())
    {
        while(Serial.available())
        {
            for(int i=0;i<9; i++)
            {
                data[i] = Serial.read();
            }
        }
    }

    for(int j=0; j<9; j++)
    {
        Serial.print(data[j]);
        Serial.print(" ");
    }
    Serial.println("");

    if((i != 9) || (1 + (0xFF ^ (byte)(data[1] + data[2] + data[3] + data[4] + data[5] + data[6] + data[7]))) != data[8])
    {
        return false;
    }

    CO2PPM = (int)data[2] * 256 + (int)data[3];
    temperature = (int)data[4] - 40;

    return true;
}
```

- ステップ 8. **RST** ボタンを押してCOMポートを有効にします。
- ステップ 9. COMモニターツールを使用してシリアルメッセージを表示します。**Arduino IDEのCOMモニターは使用しないでください！これを使用すると、次回のダウンロードが失敗する可能性がありますが、Arduino IDEを再起動することで問題を解決できます。**

```
### I/O Initialize.
### Power supply ON.
### Initial UART.
Temperature: 22  CO2: 410
Temperature: 22  CO2: 1031
Temperature: 22  CO2: 2699
Temperature: 22  CO2: 2579
Temperature: 22  CO2: 2972
```

## FAQ

**Q1: Arduino IDEを使用してプログラムをダウンロードできず、Arduino IDEの下部に以下のエラー情報が表示されます。**

A3: これはバグです。Arduinoのシリアルポートを使用して情報を出力すると、Arduino IDEがシリアルポート番号を記憶します。そのため、新しいプログラムをダウンロードするためのシリアルポートが利用できなくなります。一時的な解決策として、Arduino IDEを再起動してください。予防策として、SSCOMなどの他のCOMモニターソフトウェアを使用してください。プログラムのダウンロード中に進行バーが表示されることを確認してください。そうでない場合、以下の情報が表示され、プログラムがダウンロードされません。

```
Sketch uses 23068 bytes (2%) of program storage space. Maximum is 1048576 bytes.
Global variables use 13864 bytes of dynamic memory.
DFU begin
dfu-util 0.8

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2014 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to dfu-util@lists.gnumonks.org

Invalid DFU suffix signature
A valid DFU suffix will be required in a future dfu-util release!!!
No DFU capable USB device available
DFU end
```

**Q2: dfuドライバーを変更した後、デバイスマネージャーでCOMポートが表示されません。**

A5: RSTボタンを押してください。これでデバイスマネージャーにCOMポートが表示されます。

**Q3: Zadigソフトウェアで何も情報が表示されません。**

A6: オプション-->「すべてのデバイスをリスト」をクリックし、STM32 Virtual COM Portsを選択してください。

## Wio LTE AU バージョン v1.3b 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20AU%20Version%20v1.3b-%204G%2C%20Cat.1%2C%20GNSS%2C%20Espruino%20Compatible.zip" style={{borderRadius: '0px 0px 4px 4px', height: '500px', borderStyle: 'solid', borderWidth: '1px', borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: '1280px', maxHeight: '700px', boxSizing: 'border-box'}}></div>


## Wio LTE EU バージョン v1.3b 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20EU%20Version%20v1.3b-%204G%2C%20Cat.1%2C%20GNSS%2C%20Espruino%20Compatible.zip" style={{borderRadius: '0px 0px 4px 4px', height: '500px', borderStyle: 'solid', borderWidth: '1px', borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: '1280px', maxHeight: '700px', boxSizing: 'border-box'}}></div>


## Wio LTE JP バージョン v1.3b 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20JP%20Version%20v1.3b-%204G%2C%20Cat.1%2C%20Espruino%20Compatible.zip" style={{borderRadius: '0px 0px 4px 4px', height: '500px', borderStyle: 'solid', borderWidth: '1px', borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: '1280px', maxHeight: '700px', boxSizing: 'border-box'}}></div>


## Wio LTE US バージョン v1.3b 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20US%20Version%20v1.3b%20-%204G%2C%20Cat.1%2C%20GNSS%2C%20Espruino%20Compatible.zip" style={{borderRadius: '0px 0px 4px 4px', height: '500px', borderStyle: 'solid', borderWidth: '1px', borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: '1280px', maxHeight: '700px', boxSizing: 'border-box'}}></div>



## リソース

- **[Eagle&PDF]** [Wio LTE AU バージョン v1.3b](https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20AU%20Version%20v1.3b-%204G%2C%20Cat.1%2C%20GNSS%2C%20Espruino%20Compatible.zip)

- **[Eagle&PDF]** [Wio LTE EU バージョン v1.3b](https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20EU%20Version%20v1.3b-%204G%2C%20Cat.1%2C%20GNSS%2C%20Espruino%20Compatible.zip)

- **[Eagle&PDF]** [Wio LTE JP バージョン v1.3b](https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20JP%20Version%20v1.3b-%204G%2C%20Cat.1%2C%20Espruino%20Compatible.zip)

- **[Eagle&PDF]** [Wio LTE US バージョン v1.3b](https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20US%20Version%20v1.3b%20-%204G%2C%20Cat.1%2C%20GNSS%2C%20Espruino%20Compatible.zip)

- **[ライブラリ]** [Wio_LTE_Arduino_Library](https://github.com/Seeed-Studio/Wio_LTE_Arduino_Library)

- **[データシート]** [AT Command](https://files.seeedstudio.com/wiki/Wio_LTE/res/AT_Command.zip)

## プロジェクト

**Google Map を使用した輸送データの可視化**：Wio LTE cat.1 を使用して輸送の GPS やその他の情報を監視します。コールドチェーンでは、GPS の位置情報と温度や湿度を一緒に監視できます。自転車では、GPS の位置情報と心拍数を一緒に監視できます。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/SeeedStudio/transportation-data-visualization-with-google-map-517ce4/embed' width='350'></iframe>


**大気汚染の可視化**：大気汚染問題はますます注目を集めています。今回は Wio LTE と新しいレーザー PM2.5 センサーを使用して PM2.5 を監視してみました。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/SeeedStudio/atmospheric-pollution-visualization-1940f4/embed' width='350'></iframe>

## 技術サポートと製品ディスカッション
技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を投稿してください。  
弊社の製品をお選びいただきありがとうございます！お客様が弊社の製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>