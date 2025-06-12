---
description: XIAOのPCB設計
title: XIAOのPCB設計
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/PCB_Design_XIAO
last_update:
  date: 05/15/2025
  author: Matthew
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Flux.aiでXIAOコンポーネントを作成する

FluxはブラウザベースのPCB設計ツールで、電子機器チーム間のシームレスなコラボレーションを可能にします。このツールの直感的なインターフェースにより、ユーザーは迅速かつ簡単に回路図やレイアウトを作成でき、内蔵されたシミュレーション機能によって設計が正確でエラーがないことを確認できます。

このセクションでは、Flux.aiでSeeed Studio XIAOシリーズのコンポーネントを作成する方法を説明します。

## ブラウザでのSeeed Studio XIAOシリーズPCB設計

### Seeed Studio XIAO SAMD21

<iframe height={450} width={800} allowFullScreen src="https://www.flux.ai/cnaville89/seeed-xiao-samd21?editor=pcb_3d&embed=1">
</iframe>


### Seeed Studio XIAO RP2040

<iframe height="450" width="800" allowfullscreen src="https://www.flux.ai/seeedstudio/seeed-studio-xiao-rp2040?editor=pcb_3d&embed=1" />


### Seeed Studio XIAO nRF52840

<iframe height="450" width="800" allowfullscreen src="https://www.flux.ai/seeedstudio/seeed-studio-xiao-nrf52840?editor=pcb_3d&embed=1" />


### Seeed Studio XIAO nRF52840 Sense

<iframe height={450} width={800} allowFullScreen src="https://www.flux.ai/gokux/seeed-studio-xiao-nrf52840-sense?editor=pcb_3d&embed=1">
</iframe>


### Seeed Studio XIAO ESP32C3

<iframe height="450" width="800" allowfullscreen src="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32c3?editor=pcb_3d&embed=1" />


### Seeed Studio XIAO ESP32S3

<iframe height={450} width={800} allowFullScreen src="https://www.flux.ai/gokux/seeed-studio-xiao-esp32s3?editor=schematic&embed=1">
</iframe>


### Seeed Studio XIAO ESP32S3 Sense

<iframe height="450" width="800" allowfullscreen src="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32s3-sense?editor=pcb_3d&embed=1" />


## Flux.aiに関する知識 - パーツの作成

Fluxのパーツは主に5つの主要コンポーネントで構成されています。これらのコンポーネントはすべてオプションですが、コンポーネントが欠けている場合、パーツはその完全な機能を提供できません。

| 概念 | 説明 |
| --- | --- |
| 回路図 | パーツの「内部」ビューで、端子のみで表されます。 |
| シンボル | 他のプロジェクトにドラッグされたときのパーツの表現で、通常は他のツールで見慣れたものです。 |
| フットプリント | 物理的なパーツが基板上にどのように配置されるかを表します。 |
| 3Dモデル | パーツの3D形状と寸法を示します。 |
| シミュレーションモデル | シミュレーション中にパーツがどのように動作するべきかを記述します。 |

## 始め方

### ステップ1 - 新しいパーツ回路図の作成

最初のステップは、新しい空白プロジェクトを作成することです。これは、右上のFluxメニューで行うことができます。端子はFluxで作成されるすべてのパーツの基礎です。端子は回路の他の部分と相互作用するために必要です。新しいパーツに端子を追加するには、ライブラリに移動し、「Terminal」を検索して必要な数だけドラッグします。

この例では、Seeed Studio XIAO ESP32S3を追加するために、14個の端子ピンを追加し、それぞれに名前と番号を付けました。

パーツのプロパティで、製造者部品番号（MPN）、製造者名、データシートURLなどの情報を追加することができます。コンポーネントのMPNを入力すると、現在の在庫状況や価格を確認するのに役立ちます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO.png" /></div>

### ステップ2 - シンボルの作成

Fluxは他のツールとは少し異なる動作をします。Fluxでは、パーツには回路図とシンボルの2つの異なるビューがあります。ステップ1の回路図ビューには端子のみが含まれています。シンボルは、パーツがプロジェクトに配置されたときにのみ表示されます。次に、XIAOのシンボルを作成しますが、これにはIllustratorやInkscapeなどの外部ツールを使用する必要があります。設計されたシンボル形式は.svgである必要があります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO2.png" /></div>

シンボルを設計する際に考慮すべき点：
- すべての形状と線は白で、ストローク幅は1px、塗りなしである必要があります。
- ピンの長さは通常10〜18ピクセルです。
シンボルをSVGファイルとしてエクスポートします。

### ステップ3 - SVGをアセットとして追加

SVGファイルを取得したら、それをアセットとして追加します。外部ファイルをアセットとして追加するには、オブジェクトが選択されていないことを確認します（空のキャンバスをクリックします）。右側のドロワーをスクロールしてアセットパネルを見つけます。それを開き、「Add」（または「Manage」）をクリックします。これによりアセットダイアログが開きます。その後、「Add item」をクリックしてローカルドライブからファイルを選択します。
**カスタムシンボルとピン位置を一致させます。**
デフォルトでは、すべての端子はシンボルの中心に配置されます。端子を希望する位置に配置するには、いくつかの手順を実行する必要があります。

1. パーツをライブラリに公開します。
2. 新しい空白プロジェクトを作成し、インポートするパーツをドラッグします。
3. 両方の端子がシンボルの中心にあることに気付くでしょう。次にインポートしたパーツに戻ります。
4. パーツ内のすべての端子についてこのプロセスを実行する必要があります。
a) 端子を選択し、右側のパネルにある「Properties」メニューを見つけます。
b) 「Symbol Pin Position」フィールドに、端子をシンボル上に配置するための希望するx座標とy座標を入力します。
c) パーツを公開し、新しいプロジェクトに戻ります。左下に「Update available for your parts」というメッセージが表示されます。「Review」をクリックして変更を承認します。
d) 端子が移動したことに気付くでしょう。このプロセスを数回繰り返して、完璧な位置を決定する必要があるかもしれません。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO3.png" /></div>


### ステップ4 - フットプリントの作成

Fluxでフットプリントを作成するのは非常に簡単です。フットプリントは、パッド、線、形状、テキストノードで構成されており、FluxのPCエディターで直接追加できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO4.png" /></div>

フットプリントを Flux で初めて作成すると、すべてのパッドが1か所に集まり、小さな点として表示されます。
- パッドの位置を変更するには：
  - 右側のパネルで移動したいパッドを選択し、オブジェクト固有のルールで「位置ルール」を見つけます。
  - 希望する x および y の位置をミリメートル単位で入力します。

### ステップ 5 - パッドのサイズと形状の変更

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO5.png" /></div>

パッドの1つをクリックすることで、その形状、位置、穴の直径、その他のプロパティを変更できます。XIAOの場合、3mm×2mmのサイズのパッドと1.1mmの穴を選択しました。各ピンを2.54mm間隔で配置し、x および y の位置をミリメートル単位で調整しました。

**3Dモデルの追加**

次に、XIAOの3Dモデルを追加する必要があります。Fluxは3Dモデル用の .step ファイルをサポートしています。公式Wikiページからダウンロードできます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO6.png" /></div>

アシストセクションから3Dモデルをアップロードできます。3Dモデルの追加に関する詳細はビデオで確認できます。
オブジェクト固有のルールを使用して、x, y, z の位置や回転を変更できます。これを使用して、3Dモデルをはんだ付けパッドの上に配置します。

**ライブラリへの公開**

コンポーネントを作成した後は、それを公開する時です。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO7.png" /></div>

左上の Flux ロゴを選択し、「変更を公開」を選択します。
これで、作成したコンポーネントが自分のプロファイルに表示されるようになり、パブリックライブラリの検索にも表示されます。

## その他 - チュートリアルビデオ

<iframe width={560} height={315} src="https://www.youtube.com/embed/5cGg5n6sXJE?si=nSYvVSl-q3axb4Ss" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />

## ✨ 貢献者プロジェクト

- このプロジェクトは [Seeed Studio Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6) によってサポートされています。
- [Gokul](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=42323283) の努力に感謝します。あなたの作業は [こちら](https://wiki.seeedstudio.com/ja/Honorary-Contributors/) に展示されます。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>