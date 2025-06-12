---
description: Skeleton_Bot-4WD_hercules_mobile_robotic_platform
title: Skeleton Bot 4WD ヘラクレスモバイルロボットプラットフォーム
keywords:
- Skeleton_Bot-4WD_hercules_mobile_robotic_platform
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Skeleton_Bot-4WD_hercules_mobile_robotic_platform
last_update:
  date: 05/15/2025
  author: Matthew
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

![](https://files.seeedstudio.com/wiki/Skeleton_Bot-4WD_hercules_mobile_robotic_platform/img/4WD_Robot_Car_Body.jpg)

4WD ヘラクレスモバイルロボットプラットフォームは、強力なパワーと完全な機能を備えた精神に基づいており、自分自身のロボットモバイルプラットフォームを作成するための仲間となります。ギリシャ神話のタイタンであるヘラクレスは、その強さと冒険心で広く知られています。

|![](https://files.seeedstudio.com/wiki/Skeleton_Bot-4WD_hercules_mobile_robotic_platform/img/Hercules_02.jpg)|![](https://files.seeedstudio.com/wiki/Skeleton_Bot-4WD_hercules_mobile_robotic_platform/img/Hercules_01.jpg)
|---|---|

このプラットフォームは、ヘラクレスモーターコントローラー、ヘラクレススケルトン、ギアモーターなどのコンポーネントで構成されています。ヘラクレスモーターコントローラーは、15Aまでの電流と6V-20Vの範囲の駆動電圧を一貫してサポートできるため、プラットフォーム全体に強力な動力を供給できます。ヘラクレススケルトンは、アルミニウム合金プレートで構成されており、しっかりしていながら柔軟な質感を持ち、プロジェクト内でさまざまなアクセサリーを運び、表示し、接続することができます。4つの強力なギアモーター、特に Seeed のオリジナルエンコーダーを備えた2つのモーターは、プラットフォームの走行速度を監視し、形成された閉ループ制御によってプロセスパラメータを修正することができます。これにより、正確なプロセス制御が可能になります。さらに、ホイール、銅シリンダー、アクリルガードプレートなどの他のアクセサリーが、プラットフォームを完全なモバイルプラットフォームにします。

![](https://files.seeedstudio.com/wiki/Skeleton_Bot-4WD_hercules_mobile_robotic_platform/img/Hercules_03.jpg)

ヘラクレスはオープンプラットフォームのスイートです。ボード上の穴を通じて、さまざまなコンポーネントを簡単に取り付けることができます。さらに、ボード上に予約された Grove コネクタは、発明者がさまざまな種類のセンサーデータをシステムに入力するのを助けます。さらに、ヘラクレスコントローラーは Arduino 互換であるため、デバイスドライバやプログラムを自由に変更できます。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Skeleton-Bot-4WD-Hercules-Mobile-Robotic-Platform-p-1504.html)

## 特徴
---
*   強力な動力

*   頑丈なシェル、素晴らしい外観

*   閉ループ制御システム

*   Arduino 互換ボード

*   オープンで拡張可能、回路に他のコンポーネントを自由に配置して個人用モバイルプラットフォームを作成可能。

## 部品リスト
---
![](https://files.seeedstudio.com/wiki/Skeleton_Bot-4WD_hercules_mobile_robotic_platform/img/Parts_lists.jpg)

<table  cellspacing="0" width="80%">
<tr>
<th scope="col">
</th>
<th scope="col"> 部品名
</th>
<th scope="col"> 仕様
</th>
<th scope="col"> 材質
</th>
<th scope="col"> 数量
</th></tr>
<tr>
<th scope="row"> 1
</th>
<td> ブラケット-1
</td>
<td> 200*35*20mm*3.0mm
</td>
<td> L アルミ押出 6061
</td>
<td> 2 個
</td></tr>
<tr>
<th scope="row"> 2
</th>
<td> ブラケット-2
</td>
<td> 135*35*20mm*3.0mm
</td>
<td> L アルミ押出 6061
</td>
<td> 2 個
</td></tr>
<tr>
<th scope="row"> 3
</th>
<td> 減速モーター
</td>
<td> 25GA-370
</td>
<td> 310rpm DC6V 停止トルク：70kg
</td>
<td> 2 個
</td></tr>
<tr>
<th scope="row"> 4
</th>
<td> エンコーダ付き減速モーター
</td>
<td> 25GA-370
</td>
<td> 310rpm DC6V 停止トルク：≥7.0 Kg.cm
</td>
<td> 2 個
</td></tr>
<tr>
<th scope="row"> 5
</th>
<td> ブラケットアダプタプレート
</td>
<td> 29*12*2.0mm
</td>
<td> 冷間圧延板
</td>
<td> 4 個
</td></tr>
<tr>
<th scope="row"> 6
</th>
<td> ネジ
</td>
<td> 3*10mm
</td>
<td> 金属
</td>
<td> 30 個
</td></tr>
<tr>
<th scope="row"> 7
</th>
<td> ナット
</td>
<td> M3*2.5mm
</td>
<td> 金属
</td>
<td> 4 個
</td></tr>
<tr>
<th scope="row"> 8
</th>
<td> モーターコネクタ
</td>
<td> Ф4mm*W12mm*L18mm
</td>
<td> 金属
</td>
<td> 4 個
</td></tr>
<tr>
<th scope="row"> 9
</th>
<td> ホイール
</td>
<td> Ф85mm*W31mm
</td>
<td> プラスチック+ゴム
</td>
<td> 4 個
</td></tr>
<tr>
<th scope="row"> 10
</th>
<td> スプリングシム
</td>
<td> Ф7mm*Ф4mm
</td>
<td> 金属
</td>
<td> 4 個
</td></tr>
<tr>
<th scope="row"> 11
</th>
<td> ネジ
</td>
<td> M4*8mm
</td>
<td> 金属
</td>
<td> 4 個
</td></tr>
<tr>
<th scope="row"> 12
</th>
<td> アンダープレート
</td>
<td> 199*129*2.0mm
</td>
<td> ティーブラック アクリル
</td>
<td> 1 個
</td></tr>
<tr>
<th scope="row"> 13
</th>
<td> ワッシャー
</td>
<td> Ф5.0*Ф3*5mm
</td>
<td> PA
</td>
<td> 4 個
</td></tr>
<tr>
<th scope="row"> 14
</th>
<td> 電源スイッチ
</td>
<td> /
</td>
<td> /
</td>
<td> 1 個
</td></tr>
<tr>
<th scope="row"> 15
</th>
<td> [ヘラクレスデュアル15A 6-20Vモーターコントローラー](/Hercules_Dual_15A_6-20V_Motor_Controller)
</td>
<td>
</td>
<td>
</td>
<td> 1 個
</td></tr>
<tr>
<th scope="row"> 16
</th>
<td> ネジ
</td>
<td> M3*21mm
</td>
<td> 金属
</td>
<td> 4 個
</td></tr>
<tr>
<th scope="row"> 17
</th>
<td> アクリルプレート
</td>
<td> 53*12*2.0mm
</td>
<td> 透明アクリル
</td>
<td> 2 個
</td></tr>
<tr>
<th scope="row"> 18
</th>
<td> カバープレート
</td>
<td> 184*132*2.0mm
</td>
<td> ティーブラック アクリル
</td>
<td> 1 個
</td></tr>
<tr>
<th scope="row"> 19
</th>
<td> 銅柱
</td>
<td> M3*30mm-6mm
</td>
<td> シグナルスタッド
</td>
<td> 4 個
</td></tr>
<tr>
<th scope="row"> 20
</th>
<td> トッププレート
</td>
<td> 216*138*1.5mm
</td>
<td> アルミプレート
</td>
<td> 1 個
</td></tr>
<tr>
<th scope="row"> 21
</th>
<td> ネジ
</td>
<td> M3*21mm
</td>
<td> 金属
</td>
<td> 4 個
</td></tr>
<tr>
<th scope="row"> 22
</th>
<td> ドライバー
</td>
<td> M3-85mm
</td>
<td> /
</td>
<td> 1 個
</td></tr>
<tr>
<th scope="row"> 23
</th>
<td> ドライバー
</td>
<td> 2.5-53mm
</td>
<td> /
</td>
<td> 1 個
</td></tr>
<tr>
<th scope="row"> 24
</th>
<td> 電源ケーブル
</td>
<td> 150mm
</td>
<td> /
</td>
<td> 1 個
</td></tr>
<tr>
<th scope="row"> 25
</th>
<td> ワイヤー
</td>
<td> 160mm
</td>
<td> /
</td>
<td> 1 個
</td></tr></table>

**注意:**

<dl><dd> 1) コントロールパネルの詳細については、[こちら](https://www.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller)をご参照ください。
</dd><dd> 2) 25GA-370 減速モーターの製品仕様。
</dd></dl>
<table  cellspacing="0" width="80%">
<tr>
<th colspan="2" scope="col"> 項目
</th>
<th scope="col"> パラメータ
</th></tr>
<tr>
<th colspan="2" scope="row">動作電圧
</th>
<td> 4.0-7.0 DCV
</td></tr>
<tr>
<th colspan="2" scope="row"> 回転方向
</th>
<td> CCW
</td></tr>
<tr>
<th rowspan="2"> 無負荷
</th>
<td> 電流
</td>
<td> 280mA
</td></tr>
<tr>
<td> 回転速度
</td>
<td> 310±12% r/min
</td></tr>
<tr>
<th rowspan="2"> 負荷時
</th>
<td> 電流
</td>
<td> 1600mA(最大)
</td></tr>
<tr>
<td> 回転速度
</td>
<td> 260±12% rpm
</td></tr>
<tr>
<th colspan="2" scope="row"> 回転方向
</th>
<td> CCW
</td></tr>
<tr>
<th colspan="2" scope="row"> 起動電圧
</th>
<td> ≤1.2V
</td></tr>
<tr>
<th colspan="2" scope="row">負荷トルク
</th>
<td> 1500.0 g.cm
</td></tr>
<tr>
<th colspan="2" scope="row"> 停止トルク
</th>
<td> ≥7.0 Kg.cm
</td></tr>
<tr>
<th colspan="2" scope="row"> 停止電流
</th>
<td> ≤9.0A
</td></tr></table>

## 組み立て図
---
![](https://files.seeedstudio.com/wiki/Skeleton_Bot-4WD_hercules_mobile_robotic_platform/img/Assemble_Step2.jpg)

![](https://files.seeedstudio.com/wiki/Skeleton_Bot-4WD_hercules_mobile_robotic_platform/img/Assemble_Step3.jpg)

![](https://files.seeedstudio.com/wiki/Skeleton_Bot-4WD_hercules_mobile_robotic_platform/img/Assemble_Step4.jpg)

![](https://files.seeedstudio.com/wiki/Skeleton_Bot-4WD_hercules_mobile_robotic_platform/img/Assemble_Step5.jpg)

![](https://files.seeedstudio.com/wiki/Skeleton_Bot-4WD_hercules_mobile_robotic_platform/img/Step7.jpg)

**図:**

![](https://files.seeedstudio.com/wiki/Skeleton_Bot-4WD_hercules_mobile_robotic_platform/img/4WD_Robot_Car_Body.jpg)

キットの使用方法については、[こちら](https://www.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller#Expand_Usage)をクリックしてください。  
こちらは、Hercules の強力さを示すビデオです: [https://www.youtube.com/watch?v=uc4-Dqgwrq8](https://www.youtube.com/watch?v=uc4-Dqgwrq8)。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Skeleton_Bot-4WD_hercules_mobile_robotic_platform/res/Source_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース
---
- [4WD ロボットコントローラー Eagle ファイル](https://files.seeedstudio.com/wiki/Skeleton_Bot-4WD_hercules_mobile_robotic_platform/res/Source_file.zip)

- [モーター仕様書](https://files.seeedstudio.com/wiki/Skeleton_Bot-4WD_hercules_mobile_robotic_platform/res/Specifications_for_Motor.pdf)

## 技術サポート & 製品ディスカッション

 <br/>
弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートをご用意しております。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>