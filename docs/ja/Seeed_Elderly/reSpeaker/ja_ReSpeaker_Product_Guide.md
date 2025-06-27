---
description: ReSpeaker 製品ガイド
title: ReSpeaker 製品ガイド
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ReSpeaker_Product_Guide
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# **ReSpeaker 製品ガイド**

## 開発者向けのオープンボイスエコシステム

[![すべての ReSpeaker 開発ボード](https://files.seeedstudio.com/wiki/ReSpeakerSolutions/img/FullReSpeakerLine.png)](https://www.seeedstudio.com/series/Respeaker-10.html)

## **ReSpeaker の選択**

ReSpeaker ラインの目的や使用方法について、[ソリューションページ](https://wiki.seeedstudio.com/ja/ReSpeaker_Solutions/)や[紹介ページ](https://wiki.seeedstudio.com/ja/ReSpeaker/)で少し学んだかもしれませんが、実際にどの製品があなたのニーズに合うのでしょうか？心配しないでください。この自己認識型ページがその選択をお手伝いします。

## **3つのカテゴリ**

現在、ReSpeaker ラインには主に3つのボードカテゴリがあります。これらの3つのカテゴリはすべて音声インターフェースを可能にするために設計されていますが、それぞれがプロジェクトに統合される方法は異なります。

- SBC ソリューション
- マイクアレイソリューション
- Raspberry Pi マイクアレイソリューション

### **SBC ソリューション**

![SBC ソリューション](https://files.seeedstudio.com/wiki/ReSpeakerProductGuide/img/SBC_Solution.png)

完全に音声インタラクションを中心としたプロジェクトには、ReSpeaker Core ラインが理想的です。SBC として機能し、音声を聞くだけでなく、フロントエンドのオーディオ処理のためのソフトウェアベースの DSP を実行し、プロジェクト全体のプロセスを制御することができます。ハードウェアの操作から高度なユーザーアプリケーションコードの実行まで、ReSpeaker Core ラインはプロジェクトの中心となるよう設計されています。

推奨対象: 開発者、企業

**[ReSpeaker Core v2.0](https://wiki.seeedstudio.com/ja/ReSpeaker_Core_v2.0/)** は、強力な処理能力と統合された6マイクの円形アレイを備えています。ボードの中央には SoC、メモリ（RAM）、PMU を含むコアモジュールがあり、ボードの外縁にはコネクタ、WiFi モジュール、LED、マイクアレイなどの周辺機器があります。これによりカスタマイズが容易になり、ReSpeaker Core v2.0 はプロジェクトのスケールアップ時にコストを削減する優れたオールインワンボードソリューションとなります。

### **マイクアレイソリューション**

![マイクアレイソリューション](https://files.seeedstudio.com/wiki/ReSpeakerProductGuide/img/Mic_Array_Solution.png)

ReSpeaker Mic Array ラインは、フロントエンドの加速のためにハードウェア DSP を使用し、統合されたシステムにクリーンな音声を返します。これにより、音声インターフェースの恩恵を受ける既存のプロジェクトに追加するのに最適です。

推奨対象: 開発者、プロのメイカー、企業

**[ReSpeaker Mic Array v2.0](https://wiki.seeedstudio.com/ja/ReSpeaker_Mic_Array_v2.0/)** は、XMOS XVF3000 によって駆動される円形マイクアレイです。ハードウェア対応のフロントエンドオーディオ処理を特徴とし、Windows、macOS、多くの Linux ディストリビューションを含むほとんどの一般的な OS と互換性があります。また、オーディオ出力も可能で、使用時には AEC を実現します。マイクの構成は設定およびカスタマイズ可能です。

### **Raspberry Pi マイクアレイソリューション**

![a](https://files.seeedstudio.com/wiki/ReSpeakerProductGuide/img/Raspberry_Pi_Mic_Array_Solutions.png)

Raspberry Pi 用にいくつかの ReSpeaker シールドを作成しました。簡単な音声コマンドを試したい、独自の Amazon Echo や Google Home を作成したい、または Raspberry Pi 上で開発したいユーザーにとって、Raspberry Pi 用のマイクアレイは優れた選択肢です。他の ReSpeaker 製品と同様に、これらもカスタマイズ可能です。

推奨対象: メイカー、プロのメイカー、開発者

**[ReSpeaker 4-Mic Linear Array Kit](https://wiki.seeedstudio.com/ja/ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi/)** は、壁に固定されたプロジェクトに最適です。180°の音声検出が可能で、相対的な位置を検出したり、特定の方向に焦点を合わせて他の音声入力を無視することができます。このキットには柔軟なケーブルが付属しており、さまざまな方向に配置できるため、エンクロージャーデザインの選択肢が広がります。他のボードとは異なり、青色 LED が1つだけ含まれています。

主な特徴:

- 4マイクリニアアレイ
- 柔軟な配置が可能なリボンケーブル
- 1 x 青色 LED
- 2 x Grove コネクタ (I2C & デジタル)
- 1 x 3.5mm オーディオジャック (ステレオ)
- 1 x JST スピーカーコネクタ (モノラル)

**[ReSpeaker 6-Mic Circular Array Kit](https://wiki.seeedstudio.com/ja/ReSpeaker_6-Mic_Circular_Array_kit_for_Raspberry_Pi/)** は、人々の中心に配置されるプロジェクトに最適です。360°の音声検出が可能で、相対的な位置を検出したり、特定の方向に焦点を合わせて他の音声入力を無視することができます。このアレイには柔軟なケーブルが付属しており、さまざまな方向に配置できるため、エンクロージャーデザインの選択肢が広がります。

主な特徴:

- 6マイク円形アレイ
- 柔軟な配置が可能なリボンケーブル
- 12 x RGB LED
- 2 x Grove コネクタ (I2C & デジタル)
- 1 x 3.5mm オーディオジャック (ステレオ)
- 1 x JST スピーカーコネクタ (モノラル)

**[ReSpeaker 4-Mic Array](https://wiki.seeedstudio.com/ja/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/)**（円形）は、360°の音声検出が可能です。ただし、他のボードとは異なり、オーディオ出力機能がないため、Raspberry Pi がすべてのオーディオ出力をサポートする必要があります。このボードには4つのマイク、12個の RGB LED、および2つの Grove コネクタが搭載されています。

主な特徴:

- 4マイク円形アレイ
- 12 RGB LED
- 2 x Grove コネクタ (I2C & GPIO)

:::note
Raspberry Pi 用 ReSpeaker 4-Mic Array にはオーディオ出力インターフェースがありません。これは音声キャプチャ専用です。オーディオ出力には [Raspberry Pi のヘッドフォンジャック](https://www.raspberrypi.org/documentation/configuration/audio-config.md) を使用できます。プロジェクトで高品質のオーディオ出力が必要な場合は、別の製品を選択してください。
:::

**[ReSpeaker 2-Mic Pi HAT](https://wiki.seeedstudio.com/ja/ReSpeaker_2_Mics_Pi_HAT/)** は、エントリーレベルとして非常に優れた選択肢です。ただし、このカテゴリの他のアイテムとは異なり、2-Mic HAT は話者の方向を検出することはできません。遠距離の音声入力専用に設計されています。

主な特徴:

- デュアルマイク
- 柔軟な配置が可能なリボンケーブル
- 3 x RGB LED
- 2 x Grove コネクタ (I2C & デジタル)
- 1 x 3.5mm オーディオジャック (ステレオ)
- 1 x JST スピーカーコネクタ (モノラル)

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを用意しております。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>