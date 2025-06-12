---
description: LoNet 808 - Mini GSM/GPRS Plus GPS Breakout
title: LoNet 808 - Mini GSM/GPRS Plus GPS Breakout
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout
last_update:
  date: 05/15/2025
  author: shuxu hu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

![](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/113990107%200.jpg)

このボードは最新のSIMCOM SIM808 GSM/GPSモジュールを基にしており、セルラーGSMおよびGPRSデータとGPS技術による衛星ナビゲーションを提供します。

ボードはスリープモードで超低消費電力を特徴としており、プロジェクトに非常に長い待機時間をもたらします。さらに、LiPoバッテリーで使用可能なオンボードバッテリー充電回路を備えています。

GPS受信機は非常に感度が高く、22の追跡チャネルと66の取得チャネルを備えており、屋内位置特定のための補助GPS（A-GPS）もサポートしています。ボードはUART経由でATコマンドによって制御され、3.3Vおよび5Vの論理レベルをサポートします。ミニGPSおよびGSMアンテナが付属していますが、バッテリーはオプションです。

このボードは2G（3GまたはLTEではない）GSMネットワークを使用します。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/LoNet-808-Mini-GSM%26GPRS-%2B-GPS-Breakout-p-2493.html)

## 特徴
---
* クワッドバンド 850/900/1800/1900MHz

* GPRSマルチスロットクラス12接続性: 最大85.6kbps（ダウンロード/アップロード）

* GPRSモバイルステーションクラスB

* ATコマンドによる制御（3GPP TS 27.007, 27.005およびSIMCOM拡張ATコマンド）

* リチウムイオンバッテリーの充電制御をサポート

* リアルタイムクロックをサポート

* 電源電圧範囲 3.4V ~ 4.4V

* 統合GPS/CNSSおよびA-GPSをサポート

* 3.0Vから5.0Vの論理レベルをサポート

* 低消費電力、スリープモードで1mA

* GPS NMEAプロトコルをサポート

* コンパクトサイズ 27mm x 46mm x 10mm

* 標準SIMカード対応

## GPS仕様
---
* 受信チャネル: 22追跡 / 66取得

* 粗取得コード: GPS L1

* 追跡感度: -165dBm

* コールドスタート時間: 30秒（標準）

* ホットスタート時間: 1秒（標準）

* ウォームスタート時間: 28秒（標準）

* 水平位置精度: &lt; 2.5m CEP

* 消費電力 - 取得時: 42mA

* 消費電力 - 継続追跡時: 24mA

* 更新レート: 5Hz

## インターフェース
---
![](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/Mappings-01.png)

① 電源ボタン: モジュールのハード電源スイッチです。モジュールが電源オンの場合、ボタンを2秒間押すことでモジュールをオンまたはオフにできます。

② リチウムイオンバッテリー: モジュールの電源供給で、入力電圧は3.4Vから4.4Vです。JST-2.0mmコネクタを使用しており、3.7V Li-Poバッテリーへの接続が便利です。

③ MicroUSB: リチウムイオンバッテリーの充電インターフェースで、入力電圧範囲は5Vから7Vです。

④ GSMアンテナ: uFL GSMアンテナコネクタで、GSM信号を受信するためにGSMアンテナを接続します。

⑤ GPSアンテナ: uFL GPSアンテナコネクタです。パッシブまたはアクティブGPSアンテナを接続できます。アクティブGPSアンテナは2.8Vで動作します。

⑥ ネットワークインジケータ: 赤色LEDで、モジュールがネットワークに接続している状態を示します。

⑦ ステータスインジケータ: 緑色LEDで、モジュールがオンかどうかを示します。モジュールが動作中の場合に点灯します。

⑧ ブレークアウトピン: 詳細はピン定義を参照してください。

⑨ SIMカードホルダー: 標準SIMカード用のSIMカードホルダーです。

⑩ 電源供給ピン: 電源のはんだ付けおよびテストに使用されます。

### ピン定義

<table >
<tr>
<th scope="col"> **名前**
</th>
<th scope="col"> **I/O**
</th>
<th scope="col"> **説明**
</th>
<th scope="col"> **備考**
</th></tr>
<tr>
<th scope="row"> BAT
</th>
<td> I/0
</td>
<td> 電源入力 / 出力
</td>
<td> 3.4V - 4.4V DC
</td></tr>
<tr>
<td> GND
</td>
<td> I/0
</td>
<td> 電源グラウンド / 論理グラウンド
</td>
<td>
</td></tr>
<tr>
<td> VIO
</td>
<td> I
</td>
<td> 論理レベル参照
</td>
<td> 2.8V - 5.0V DC
</td></tr>
<tr>
<td> DTR
</td>
<td> I
</td>
<td> スリープモード制御ピン
</td>
<td> スリープモード時にプルアップ
</td></tr>
<tr>
<td> PWR
</td>
<td> O
</td>
<td> 電源スイッチ
</td>
<td> 2秒間アクティブロー
</td></tr>
<tr>
<td> RI
</td>
<td> O
</td>
<td> イベント / メッセージピン
</td>
<td>
</td></tr>
<tr>
<td> TXD
</td>
<td> O
</td>
<td> データ送信
</td>
<td> SIM808からのUART出力
</td></tr>
<tr>
<td> RXD
</td>
<td> I
</td>
<td> データ受信
</td>
<td> SIM808へのUART入力
</td></tr>
<tr>
<td> RST
</td>
<td> I
</td>
<td> リセットピン
</td>
<td> アクティブロー
</td></tr></table>

### インジケータLED

<table >
<tr>
<th scope="col"> **インジケータLED**
</th>
<th scope="col"> **ステータス**
</th>
<th scope="col"> **動作**
</th></tr>
<tr>
<th scope="row"> 動作ステータス（緑色）
</th>
<td> オフ
</td>
<td> SIM808が動作していない
</td></tr>
<tr>
<td>
</td>
<td> オン
</td>
<td> SIM808が動作中
</td></tr>
<tr>
<th scope="row"> ネットワークステータス（赤色）
</th>
<td> オフ
</td>
<td> SIM808が動作していない
</td></tr>
<tr>
<td>
</td>
<td> 64msオン / 800msオフ
</td>
<td> SIM808がネットワークに登録されていない
</td></tr>
<tr>
<td>
</td>
<td> 64msオン / 3000msオフ
</td>
<td> SIM808がネットワークに登録されている
</td></tr>
<tr>
<td>
</td>
<td> 64msオン / 300msオフ
</td>
<td> PPP GPRS通信が確立されている
</td></tr></table>

## アクセサリー
---

アンテナのほかに、LoNet 808 を使用する際に以下のアクセサリーが必要になる場合があります。

 ![](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/Simcard.jpg)
SIMカード  
GSM/GPRS通信用

 [![](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/Battery_2200ma.jpg)](https://www.seeedstudio.com/depot/Polymer-Lithium-Ion-Battery-2200mAh-37V-p-1709.html?cPath=1_3)
 3.7V リチウムイオンバッテリー  
電源供給用

 [![](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/Power_Converter.jpg)](https://www.seeedstudio.com/depot/Adjustable-DCDC-Power-Converter-125V-35V3A-p-1534.html?cPath=1_4)
DC/DC 電圧レギュレーター  
電源供給用

[![](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/100cmUSBc.jpg)](https://www.seeedstudio.com/depot/USB-To-Uart-5V3V3-p-1832.html)
 MicroUSBケーブル  
バッテリー充電用

[![](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/USB_To_Uart_5V3V3.jpg)](https://www.seeedstudio.com/depot/USB-To-Uart-5V3V3-p-1832.html)
 USB to UART ツール  
PC上でATコマンドをテストするため

[![](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/3wsp.JPG)](https://www.seeedstudio.com/depot/3W-Solar-Panel-138X160-p-954.html?cPath=1_118)
 ソーラーパネル  
バッテリー充電用


## 使用方法
---
### 参考回路

**&gt; MCUへの接続**

![](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/C1-01.png)

**&gt; PCへの接続**

![](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/C2-01.png)

### ATコマンドの使い方

```
// このスケッチはArduinoでLoNetをテストするためのものです

// VIOを+5Vに接続
// GNDをグランドに接続
// RX（SIM808へのデータ入力）をデジタル11に接続
// TX（SIM808からのデータ出力）をデジタル10に接続

#include <SoftwareSerial.h>

SoftwareSerial mySerial(10, 11); // RX, TX

void setup()
{
    // シリアル通信を開始し、ポートが開くのを待つ
    Serial.begin(9600);
    mySerial.begin(9600);
}

void loop() // 繰り返し実行
{
    if (mySerial.available())
    Serial.write(mySerial.read());

    if (Serial.available())
    {
        while(Serial.available())
        {
            mySerial.write(Serial.read());
        }
        mySerial.println();
    }
}
```

#### ボーレートの設定と充電機能の有効化

初めてモジュールを使用する際に、このプロセスを実行することをお勧めします。以下の表の「Serial Monitor」列では、ATコマンドの入力は黒字、モジュールの返答はオレンジ色で示されています。

<table>
<tr>
<th>シリアルモニター</th>
<th>説明</th>
</tr>
<tr>
<td>AT  
OK</td>
<td>コマンド「AT」を送信してボーレートを同期します。モジュールのシリアルポートはデフォルトで自動ボーレートモードに設定されており、このモードではモジュールがオンになってもインジケーションを出力しません。</td>
</tr>
<tr>
<td>AT+IPR=9600  
OK</td>
<td>ボーレートを9600bpsに設定します。1200bpsから115200bpsまでサポートしています。</td>
</tr>
<tr>
<td>AT+ECHARGE=1  
OK</td>
<td>コマンド「AT+ECHARGE=1」を送信してバッテリー充電機能を有効にします。デフォルトでは充電機能は無効です。</td>
</tr>
<tr>
<td>AT&amp;W  
OK</td>
<td>パラメータ設定を保存します。</td>
</tr>
<tr>
<td>AT+CPOWD=1  
NORMAL POWER DOWN</td>
<td>モジュールをシャットダウンします。</td>
</tr>
<tr>
<td>RDY  
+CFUN: 1  
GPS Ready  
+CPIN: READY  
Call Ready  
SMS Ready</td>
<td>電源ボタンでモジュールを再度オンにすると、GPSおよびGSMのステータスが応答されます。</td>
</tr>
<tr>
<td>AT+CBC  
+CBC: 1,96,4175  
OK</td>
<td>充電状態とバッテリー残量を確認します。</td>
</tr>
<tr>
<td>AT+CSQ  
+CSQ: 14,0  
OK</td>
<td>GSM信号品質を確認します。</td>
</tr>
</table>

#### GPSで位置情報を取得する

<table cellpadding="0">
<tr>
<th scope="col" width="11">シリアルモニター</th>
<th scope="col" width="700">説明</th>
</tr>
<tr>
<td>AT+CGPSPWR=1  
OK</td>
<td>GPSをオンにします。</td>
</tr>
<tr>
<td>AT+CGPSSTATUS?  
+CGPSSTATUS: Location Not Fix  
OK</td>
<td>GPSの固定状態を確認します。「Location Not Fix」は位置情報の取得に失敗していることを意味します。初回起動時には少なくとも30秒かかります。_**GPSは窓際または屋外でテストする必要があります。**_</td>
</tr>
<tr>
<td>AT+CGPSSTATUS?  
+CGPSSTATUS: Location 3D Fix  
OK</td>
<td>GPSが3Dステータスで固定されました。</td>
</tr>
<tr>
<td>AT+CGPSINF=0  
+CGPSINF:  
0,2234.931817,11357.122485,  
92.461185,20141031041141.000,  
88,12,0.000000,0.000000</td>
<td>現在のGPS位置情報を取得します。パラメータ形式: &lt;mode&gt;, &lt;altitude&gt;, &lt;longitude&gt;, &lt;UTC time&gt;, &lt;TTFF&gt;, &lt;num&gt;, &lt;speed&gt;, &lt;course&gt;</td>
</tr>
<tr>
<td>AT+CGPSOUT=32  
OK  
$GPRMC,043326.000,A,  
2234.9414,N,11357.1187,E,  
0.000,143.69,311014,,,A*50</td>
<td>NMEA $GPRMCデータを読み取ります。この中で「2234.9414 N, 11357.1187 E」が位置座標です。NMEA文についての詳細は[こちらのサイト](http://www.gpsinformation.org/dale/nmea.htm)を参照してください。</td>
</tr>
<tr>
<td>AT+CGPSRST=0  
OK</td>
<td>GPSをコールドスタートモードでリセットします。</td>
</tr>
<tr>
<td>AT+CGPSRST=1  
OK</td>
<td>GPSをホットスタートモードでリセットします。</td>
</tr>
<tr>
<td>AT+CGPSPWR=0  
OK</td>
<td>GPSをオフにします。</td>
</tr>
</table>

## ダウンロード
---
*   [LoNet_808_回路図](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/res/LoNet_808_Schematic.pdf)

*   [SIM800_ATコマンドマニュアル](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/res/SIM800_ATCommand_Manual_V1.02.pdf)

*   [SIM808_ハードウェア設計マニュアル](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/res/SIM808_Hardware_Design_V1.00.pdf)

*   [SIM808_GPSアプリケーションノート](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/res/SIM808_GPS_Application_Note_V1.00.pdf)

## リソース
---
*   [GitHub上のGPRS_Shieldライブラリ](https://github.com/Seeed-Studio/GPRS_Shield_Suli)

*   [Adafruit_FONA_Library](https://github.com/adafruit/Adafruit_FONA_Library/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>