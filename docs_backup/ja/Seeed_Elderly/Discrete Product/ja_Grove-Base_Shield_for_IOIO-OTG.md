---
description: Grove - IOIO-OTG用ベースシールド
title: Grove - IOIO-OTG用ベースシールド
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Base_Shield_for_IOIO-OTG
last_update:
  date: 05/15/2025
  author: shuxu hu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

![](https://files.seeedstudio.com/wiki/Grove-Base_Shield_for_IOIO-OTG/img/Grove-Base_Shield_for_IOIO-OTG.md.jpg)

IOIOは、Androidデバイスと連携するために特別に設計されたボードです。このGrove - IOIO用ベースシールドは、IOIOが豊富なGroveリソースと連携するための拡張ボードです。ボードにはADCやI2Cなどの機能をカバーする6つのGroveソケットが用意されています。このようにして、すべてのGroveモジュールがIOIOボードで利用可能になります。IOIOを使ったプロジェクトを作成したい場合、センサーやディスプレイが必要ですか？このGrove - IOIO用ベースシールドがその利便性を提供します。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Base-Shield-for-IOIO-OTG-p-1613.html)

## インターフェース

![](https://files.seeedstudio.com/wiki/Grove-Base_Shield_for_IOIO-OTG/img/Base_Shield_for_IOIO_Interface_Function.jpg)

**J1, J2:** TWIに使用可能。

**J3, J6, J7, J8:** 入力および出力に使用可能。PWMやUARTを含む。

以下の表は、Grove - IOIO-OTG用ベースシールドボードへのピンマッピングを示しています：

<center>
<table  cellspacing="0" width="40%">
<tr>
<th scope="col"> Groveインターフェース
</th>
<th scope="col"> IOIOピン
</th>
<th scope="col"> A/D
</th>
<th scope="col"> I²C
</th>
<th scope="col"> PPSi
</th>
<th scope="col"> PPSo
</th>
<th scope="col"> PICピン
</th>
<th scope="col"> PIC機能
</th></tr>
<tr>
<td rowspan="2"> J2
</td>
<td scope="row"> 1
</td>
<td>
</td>
<td> DA1
</td>
<td> Y
</td>
<td> Y
</td>
<td> 31
</td>
<td> SDA2/RP10/GD4/CN17/RF4
</td></tr>
<tr>
<th scope="row"> 2
</th>
<td>
</td>
<td> CL1
</td>
<td> Y
</td>
<td> Y
</td>
<td> 32
</td>
<td> SCL2/RP17/GD5/CN18/RF5
</td></tr>
<tr>
<td rowspan="2"> J1
</td>
<td> 4
</td>
<td>
</td>
<td> DA0
</td>
<td> Y
</td>
<td> Y
</td>
<td> 43
</td>
<td> DPLN/SDA1/RP4/GD8/CN54/RD9
</td></tr>
<tr>
<td> 5
</td>
<td>
</td>
<td> CL0
</td>
<td> Y
</td>
<td> Y
</td>
<td> 44
</td>
<td> SCL1/RP3/GD6/CN55/RD10
</td></tr>
<tr>
<td rowspan="2"> J3
</td>
<td> 11
</td>
<td>
</td>
<td>
</td>
<td> Y
</td>
<td> Y
</td>
<td> 50
</td>
<td> DPH/RP23/CN51/RD2
</td></tr>
<tr>
<td> 12
</td>
<td>
</td>
<td>
</td>
<td> Y
</td>
<td> Y
</td>
<td> 51
</td>
<td> RP22/GEN/CN52/RD3
</td></tr>
<tr>
<td rowspan="2"> J6
</td>
<td> 13
</td>
<td>
</td>
<td>
</td>
<td> Y
</td>
<td> Y
</td>
<td> 52
</td>
<td> RP25/GCLK/CN13/RD4
</td></tr>
<tr>
<td> 14
</td>
<td>
</td>
<td>
</td>
<td> Y
</td>
<td> Y
</td>
<td> 53
</td>
<td> RP20/GPWR/CN14/RD5
</td></tr>
<tr>
<td rowspan="2"> J7
</td>
<td scope="row"> 33
</td>
<td> Y
</td>
<td>
</td>
<td> Y
</td>
<td> Y
</td>
<td> 50
</td>
<td> DPH/RP23/CN51/RD2
</td></tr>
<tr>
<th scope="row"> 34
</th>
<td> Y
</td>
<td>
</td>
<td> Y
</td>
<td> Y
</td>
<td> 51
</td>
<td> RP22/GEN/CN52/RD3
</td></tr>
<tr>
<td rowspan="2"> J8
</td>
<td scope="row"> 37
</td>
<td> Y
</td>
<td>
</td>
<td> Y
</td>
<td> Y
</td>
<td> 17
</td>
<td> PGEC2/AN6/RP6/CN24/RB6
</td></tr>
<tr>
<th scope="row"> 38
</th>
<td> Y
</td>
<td>
</td>
<td> Y
</td>
<td> Y
</td>
<td> 18
</td>
<td> PGED2/AN7/RP7/RCV/CN25/RB7
</td></tr></table>
</center>


## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Base_Shield_for_IOIO-OTG/res/Grove-Base_Shield_for_IOIO-OTG_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース

- [Grove - IOIO-OTG用ベースシールド Eagleファイル](https://files.seeedstudio.com/wiki/Grove-Base_Shield_for_IOIO-OTG/res/Grove-Base_Shield_for_IOIO-OTG_Eagle_File.zip)

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