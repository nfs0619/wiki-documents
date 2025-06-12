---
title: フォトリフレクティブセンサー
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Photo_Reflective_Sensor/
slug: /ja/Photo_Reflective_Sensor
last_update:
  date: 05/15/2025
  author: gunengyu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

![https://www.seeedstudio.com/depot/images/product/rs081.jpg](http://bz.seeedstudio.com/depot/images/product/rs081.jpg)

これは、GaA1As赤外線発光ダイオードと高感度ダーリントンフォトトランジスタを組み合わせた小型パッケージの反射型センサーです。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Photo-Reflective-Sensor-p-543.html)

## 特徴

---

* コンパクト

* 高性能

* 高出力

* PCBへの取り付けが簡単

* 幅広い用途に対応

## 応用例

---

* タイミングセンサー

* エッジセンサー

* マイクロフロッピーディスクドライバー

* 液体のレベルセンサー

## 仕様

---

### 最大定格 (Ta=25℃)

<table>
<tr>
<td colspan="2" width="400px"> 項目
</td>
<td width="200px"> 記号
</td>
<td width="200px"> 定格
</td>
<td width="200px"> 単位
</td></tr>
<tr>
<td colspan="1" rowspan="4">入力
</td>
<td>消費電力
</td>
<td>PD
</td>
<td>100
</td>
<td>mW
</td></tr>
<tr>
<td>逆電圧
</td>
<td>VR
</td>
<td>5
</td>
<td>V
</td></tr>
<tr>
<td>順電流
</td>
<td>IF
</td>
<td>50
</td>
<td>mA
</td></tr>
<tr>
<td>パルス順電流 *1
</td>
<td>IFP
</td>
<td>1
</td>
<td>A
</td></tr>
<tr>
<td colspan="1" rowspan="4">出力
</td>
<td>コレクター消費電力
</td>
<td>Pc
</td>
<td>100
</td>
<td>mW
</td></tr>
<tr>
<td>コレクター電流
</td>
<td>Ic
</td>
<td>20
</td>
<td>mA
</td></tr>
<tr>
<td>C-E電圧
</td>
<td>VCEO
</td>
<td>30
</td>
<td>V
</td></tr>
<tr>
<td>E-C電圧
</td>
<td>VECO
</td>
<td>5
</td>
<td>V
</td></tr>
<tr>
<td colspan="2">動作温度
</td>
<td>Topr
</td>
<td> -10~+65
</td>
<td>℃
</td></tr>
<tr>
<td colspan="2">保存温度
</td>
<td>Tstg
</td>
<td> -25~+85
</td>
<td>℃
</td></tr>
<tr>
<td colspan="2">はんだ付け温度*2
</td>
<td>Tsol
</td>
<td>260
</td>
<td>℃
</td></tr></table>

### 電気光学特性 (Ta=25℃)

<table>
<tr>
<td colspan="2" width="300px"> 項目
</td>
<td width="100px"> 記号
</td>
<td width="200px"> 条件
</td>
<td width="100px"> 最小
</td>
<td width="100px"> 標準
</td>
<td width="100px"> 最大
</td>
<td width="100px"> 単位
</td></tr>
<tr>
<td colspan="1" rowspan="4">入力
</td>
<td>順電圧
</td>
<td>VF
</td>
<td>IF=20mA
</td>
<td>
</td>
<td>1.2
</td>
<td>1.6
</td>
<td>V
</td></tr>
<tr>
<td>逆電流
</td>
<td>IR
</td>
<td>VR=5V
</td>
<td>
</td>
<td>
</td>
<td>10
</td>
<td>µA
</td></tr>
<tr>
<td>静電容量
</td>
<td>Ct
</td>
<td>V=0V, f=1kHZ
</td>
<td>
</td>
<td>25
</td>
<td>
</td>
<td>pF
</td></tr>
<tr>
<td>ピーク波長
</td>
<td>λP
</td>
<td>
</td>
<td>
</td>
<td>940
</td>
<td>
</td>
<td>nm
</td></tr>
<tr>
<td colspan="1" rowspan="3">出力
</td>
<td>コレクター暗電流
</td>
<td>ICEO
</td>
<td>VCE=20V
</td>
<td>
</td>
<td>
</td>
<td>0.1
</td>
<td>µA
</td></tr>
<tr>
<td>光電流
</td>
<td>IL
</td>
<td>VCE=5V,IF=20mA
</td>
<td>50
</td>
<td>
</td>
<td>
</td>
<td>µA
</td></tr>
<tr>
<td>漏れ電流
</td>
<td>ICEOD
</td>
<td>VCE=5V,IF=10mA
</td>
<td>
</td>
<td>
</td>
<td>1
</td>
<td>µA
</td></tr>
<tr>
<td colspan="1" rowspan="2">スイッチング速度
</td>
<td>立ち上がり時間
</td>
<td>tr
</td>
<td colspan="1" rowspan="2">Vcc=5V, Ic=1mA, RL=1kΩ
</td>
<td>
</td>
<td>15
</td>
<td>
</td>
<td>µsec
</td></tr>
<tr>
<td>立ち下がり時間
</td>
<td>tf
</td>
<td>
</td>
<td>15
</td>
<td>
</td>
<td>µsec
</td></tr></table>

## 機械的寸法

![](https://files.seeedstudio.com/wiki/Photo_Reflective_Sensor/img/Photo-ref-dimen.JPG)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験をスムーズにするために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>