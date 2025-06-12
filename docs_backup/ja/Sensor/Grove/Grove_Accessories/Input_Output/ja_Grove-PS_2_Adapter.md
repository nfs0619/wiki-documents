---
title: Grove - PS/2 Adapter
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Grove-PS_2_Adapter/
slug: /ja/Grove-PS_2_Adapter
last_update:
  date: 05/15/2025
  author: gunengyu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

 ![](https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/img/PS221_sensor.jpg)

PS/2 Adapterは、PS2デバイスをArduino/Seeeduinoメインボードに接続することを可能にします。PS2Keyboard/PS2Mouseライブラリを使用することで、これらのPS2デバイスとArduino/Seeeduino間の橋渡しを作成することができます。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-PS%262-Adapter-p-966.html)

## 特徴

---

* 標準Groveインターフェース

* 標準PS/2インターフェース

## 仕様

---
<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> 項目
</th>
<th scope="col"> 最小値
</th>
<th scope="col"> 標準値
</th>
<th scope="col"> 最大値
</th>
<th scope="col"> 単位
</th></tr>
<tr>
<th scope="row"> 電圧
</th>
<td> 4.75
</td>
<td> 5.0
</td>
<td> 5.25
</td>
<td> V
</td></tr>
<tr>
<th scope="row"> 電流
</th>
<td colspan="3"> 100
</td>
<td> mA
</td></tr>
<tr>
<th scope="row"> 通信モード
</th>
<td colspan="3"> PS/2通信プロトコル
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> クロック周波数
</th>
<td> 10
</td>
<td> 15
</td>
<td> 33
</td>
<td> KHZ
</td></tr></table>

## 応用例

---

* PS/2マウスおよびキーボード入力

## 使用方法

---
PS/2コネクタは、PC互換コンピュータシステムにキーボードやマウスを接続するために使用される6ピンMini-DINコネクタです。キーボードとマウスのインターフェースにおけるPS/2設計は電気的に類似しており、同じ通信プロトコルを採用しています。現在、このコネクタはUSBに置き換えられていますが、Arduino/Seeeduinoでは、マウスやキーボードが必要な場合により便利で安価な選択肢としてPS/2コネクタを使用することができます。

PS/2コネクタには以下の図に示すように6つのピンがあります。ピン1とピン6は接続されていません。ピン3はグランド用で、ピン4は電源用です。他の2つのピンはクロックとデータ用です。

 ![](https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/img/MiniDIN-6_Connector.svg.png)

<table  cellspacing="0" width="702">
<tr>
<th scope="col"> ピン
</th>
<th scope="col"> 名前
</th>
<th scope="col"> 機能
</th>
<th scope="col"> Groveインターフェースに対応
</th></tr>
<tr>
<th scope="row"> 1
</th>
<td> +DATA
</td>
<td> データ
</td>
<td> DATA
</td></tr>
<tr>
<th scope="row"> 2
</th>
<td> NC
</td>
<td> 予約済み
</td>
<td> -
</td></tr>
<tr>
<th scope="row"> 3
</th>
<td> GND
</td>
<td> グランドライン
</td>
<td> GND
</td></tr>
<tr>
<th scope="row"> 4
</th>
<td> Vcc
</td>
<td> +5DCV
</td>
<td> VCC
</td></tr>
<tr>
<th scope="row"> 5
</th>
<td> +CLK
</td>
<td> クロック周波数
</td>
<td> CLK
</td></tr>
<tr>
<th scope="row"> 6
</th>
<td> NC
</td>
<td> 予約済み
</td>
<td> -
</td></tr></table>

1.PS/2マウスまたはキーボードをGrove-PS/2 Adapterに接続し、Groveを[Grove - Base Shield](https://www.seeedstudio.com/depot/grove-base-shield-p-754.html?cPath=132_134)のD5/D6に接続します。デジタルポートは自由に変更できますが、デモコードの定義でポート番号を同時に変更することを忘れないでください。

:::note
     ピン5はマウスデータピン、ピン6はクロックピンです。
:::
 2.Base ShieldをArduino/Seeeduinoに接続し、USBケーブルを介してArduino/SeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/img/PS2_sensorss.jpg)

3.[PS2 Adapterライブラリ](https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/res/PS2_Adapter_Library.zip)をダウンロードし、解凍してArduino IDEのライブラリファイルに配置します。パスは次の通りです: ..\arduino-1.0\libraries。

4.Arduino IDEを再起動し、デモコードの1つを開きます。例えば、ps2_mouseを次のパスから直接開きます: File -> Example -> PS2_Adapter -> ps2_kbd。

```
/*
 * PS/2キーボードとインターフェースするためのArduinoスケッチ。
 * また、ホストと通信し、検出した内容を報告するためにシリアルプロトコルを使用します。
 * ps2ライブラリを使用しています。
 */

#include <ps2.h>

/*
 * ピン5はPS2データピン、ピン6はクロックピンです。
 * 便利なピンを自由に使用してください。
 */

PS2 kbd(6, 5);

void kbd_init()
{
    char ack;

    kbd.write(0xff);  // リセットコードを送信
    ack = kbd.read();  // キーボードが自己テストを実行
    ack = kbd.read();  // 自己テスト完了後の別の確認応答
}

void setup()
{
    Serial.begin(9600);
    kbd_init();
}

/*
 * キーボードからキーコードを取得し、
 * シリアルラインを介してホストに報告します。
 */
void loop()
{
    unsigned char code;

    for (;;) { /* 永久ループ */
    /* キーコードを読み取る */
        code = kbd.read();
    /* データを送信 */
        Serial.println(code, HEX);
        // delay(20);  /* 調整 */
    }
}
```

アップロード方法がわからない場合は[こちら](https://www.seeedstudio.com/wiki/Upload_Code)をクリックしてください。
 MCUにファームウェアをアップロードした後、シリアルモニター（9600ボーレート）を介して状態を確認できます。

 ![](https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/img/Result.jpg)

 マウスを動かすと、XおよびY出力値が対応して変化します。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/res/Grove-PS2_Adapter_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

---

* [Grove - PS/2 アダプター Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/res/Grove-PS2_Adapter_eagle_file.zip)

* [PS2 アダプターライブラリ](https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/res/PS2_Adapter_Library.zip)

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