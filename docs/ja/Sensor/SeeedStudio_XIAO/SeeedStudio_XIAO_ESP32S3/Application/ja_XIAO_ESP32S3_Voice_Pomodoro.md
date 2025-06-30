---
description: 音声コマンドを使用して、Seeed Studio XIAO ESP32S3 Sense と丸型 LCD ディスプレイを活用したコンパクトな CircuitPython ベースのポモドーロタイマーを構築します。
title: XIAO ESP32S3 と CircuitPython を使用した音声操作ポモドーロタイマーの構築
keywords:
  - XIAO
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/xiao_esp32s3_voice_pomodoro
last_update:
  date: 05/15/2025
  author: Peter Machona
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# AskLou.io ポモドーロタイマー

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32s3_sense_pomodoro_timer/AskLou_01.png" style={{width:800, height:'auto'}}/></div>

> Seeed Studio XIAO ESP32S3 Sense と Round Display for XIAO を使用して構築された音声制御ポモドーロタイマー。ハンズフリーで時間管理を行い、生産性を向上させましょう！

## プロジェクト概要

AskLou.io ポモドーロタイマーは、人気のある時間管理手法「ポモドーロ・テクニック」を実践するためのコンパクトで音声操作可能な生産性ツールです。簡単な音声コマンドを使用して、作業セッションを開始したり、休憩を取ったり、コンピュータやスマートフォンに触れることなく生産性を管理できます。

## なぜ AskLou.io ポモドーロタイマーなのか？

従来のポモドーロタイマーは手動操作が必要で、集中力や作業の流れを中断してしまいます。AskLou.io は音声コマンドを使用することでこの問題を解決し、指一本動かさずに時間を管理できます。エレガントな円形ディスプレイは、現在のセッションの状態を一目で確認できるため、集中力を維持しやすくなります。

## 特徴

- **音声制御**: 簡単な音声コマンドでタイマーを開始・一時停止
- **複数のセッションタイプ**: 標準作業セッション（25分）、短い休憩（5分）、長い休憩（15分）
- **視覚的な進捗追跡**: 残り時間を示す直感的な円形進捗インジケーター
- **集中力を妨げない**: アプリや通知なしで、集中した生産性を実現
- **カスタマイズ可能**: セッションの時間を簡単に変更して、個人のワークフローに合わせられる
- **低消費電力**: デスクでの終日使用に最適
- **スタンドアロン動作**: 設定後はスマートフォンやコンピュータ不要

## ハードウェア

### 必要なコンポーネント

- [Seeed Studio XIAO ESP32S3 Sense](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Sense-Pre-Soldered-p-6335.html)
- [Seeed Studio Round Display for XIAO (1.28" 240x240 GC9A01 LCD)](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)
- 電源用 USB-C ケーブル
- オプション: 3D プリントケース（プロジェクトにファイルが含まれています）

### このハードウェアを選んだ理由

XIAO ESP32S3 Sense にはオンボードマイクが搭載されており、音声制御アプリケーションに最適です。そのコンパクトなフォームファクターと美しい丸型ディスプレイの組み合わせにより、作業スペースの美観を損なわないエレガントなデスクトップアクセサリを実現します。

## 作成プロセス

### 1. ハードウェアの組み立て

- 丸型ディスプレイを XIAO ESP32S3 Sense ボードに接続します
- ディスプレイは XIAO のピンに直接接続され、はんだ付けは不要です！
- オプション: 3D プリントケースに取り付けて仕上げを行います

### 2. ソフトウェアのセットアップ

**CircuitPython のセットアップ**

- [CircuitPython.org](https://circuitpython.org/) から CircuitPython 8.x 以降をダウンロードします
- ボードをブートローダーモードにする（リセットボタンをダブルクリック）
- CircuitPython UF2 ファイルをボードのドライブにドラッグ＆ドロップします

**必要なライブラリのインストール**

- [CircuitPython バンドル](https://github.com/adafruit/Adafruit_CircuitPython_Bundle/releases) から以下のライブラリをダウンロードします：
  - adafruit_display_text
  - adafruit_display_shapes
  - gc9a01.mpy
  - analogio（マイク機能用）
- これらを CircuitPython デバイスの lib フォルダにコピーします。

### 3. コードのデプロイ

この [リポジトリ](https://github.com/AskLou-io/Pomodoro_Circuit_Python) から code.py ファイルを CircuitPython デバイスにコピーするだけで、タイマーが自動的に動作を開始します！

## 仕組み

- **音声検出**: 搭載されたマイクが閾値を超える音を検知します  
- **コマンドシミュレーション**: デモ版では、コマンドがプリセットリストを循環します  
- **タイマーロジック**: 作業セッション、短い休憩、長い休憩を追跡します  
- **視覚的フィードバック**: 円形ディスプレイがセッションの種類と残り時間を表示します  
- **進捗インジケーター**: 点灯するアークが現在のセッションの進捗を示します  

AskLou.io ポモドーロタイマーは以下の音声コマンドに応答します:

- 「タイマー開始」 - 25分間の作業セッションを開始します  
- 「タイマー一時停止」 - 現在のセッションを一時停止します  
- 「短い休憩開始」 - 5分間の休憩を開始します  
- 「長い休憩開始」 - 15分間の休憩を開始します  

## カスタマイズオプション

AskLou.io ポモドーロタイマーは以下の方法でカスタマイズできます:

- **セッションの長さ**: `session_durations` 辞書を変更して作業や休憩の長さを調整します  
- **音声感度**: 環境に応じて `LOUD_THRESHOLD` 値を調整します  
- **ビジュアルテーマ**: セッションの種類ごとにアークの色を変更します  
- **コマンドワード**: `voice_commands` リストを更新して異なるフレーズを使用します  

## 将来の拡張

将来のバージョンでの潜在的な改善点:

- より信頼性の高いコマンド検出のための音声認識の向上  
- セッション終了時の触覚または音声フィードバック  
- 生産性アプリとの接続によるセッションログの記録  
- オーディオ通知用の小型スピーカー  
- 携帯性を高めるためのバッテリー駆動  

## リソース

- [GitHub リポジトリ](https://github.com/AskLou-io/Pomodoro_Circuit_Python/blob/main/README.md)  
- [Hackster.io プロジェクト](https://www.hackster.io/peter-machona/asklou-io-pomodoro-timer-a7a1f2)  
- [XIAO ESP32S3 ドキュメント](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/)  
- [ラウンドディスプレイドキュメント](https://wiki.seeedstudio.com/ja/get_start_round_display/)  

## クレジット

- ハードウェアプラットフォーム: Seeed Studio  
- ポモドーロテクニック: Francesco Cirillo  
- [プロジェクト作成者: Peter Machona](https://github.com/AskLou-io/Pomodoro_Circuit_Python)  

## ライセンス

このプロジェクトは Creative Commons Attribution-NonCommercial (CC BY-NC) ライセンスの下で公開されています。このライセンスにより、以下が可能です:

- **共有** — 素材をあらゆる媒体や形式でコピーおよび再配布する  
- **改変** — 素材をリミックス、変形、または構築する  

以下の条件に従う必要があります:

- **帰属** — 適切なクレジットを表示し、ライセンスへのリンクを提供し、変更があった場合はその旨を示す必要があります。ただし、ライセンサーがあなたやあなたの使用を推奨しているような方法では行わないでください。  
- **非営利** — 素材を商業目的で使用することはできません。  

---

AskLou.io ポモドーロタイマー - 集中した生産性を、ただ頼むだけで。

## ✨ コントリビュータープロジェクト

- このプロジェクトは Seeed Studio の [コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) によってサポートされています。  
- 特に [Peter Machona](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=92639112&issue=Seeed-Studio%7Cwiki-documents%7C2074) 氏の献身的な努力に感謝します。あなたの作品は [展示されます](https://wiki.seeedstudio.com/ja/contributors/)。  

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>
<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>