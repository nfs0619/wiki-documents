---
description: SenseCraft Model Assistant を使用した Seeed Studio XIAO ESP32S3 の入門ガイド。
title: SenseCraft Model Assistant with XIAO ESP32S3 (Sense)
keywords:
- esp32s3
- xiao
- tinyml
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao_esp32s3_edgelab
last_update:
  date: 05/15/2025
  author: LynnL4
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# SenseCraft Model Assistant を使用した Seeed Studio XIAO ESP32S3 の入門ガイド

## はじめに
[SenseCraft Model Assistant](https://edgelab.readthedocs.io/en/latest/) は、組み込みAIに焦点を当てたオープンソースプロジェクトです。OpenMMLab の優れたアルゴリズムを実世界のシナリオに最適化し、実装をよりユーザーフレンドリーにすることで、組み込みデバイス上での高速かつ正確な推論を実現しています。

## 必要なハードウェア
- [Seeed Studio XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)
- [Seeed Studio Round Display for XIAO](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)
- Type-C ケーブル

## 必要なソフトウェア
- ESP-IDF v4.4
- SenseCraft Model Assistant v0.1.0
- サンプルコード: [SenseCraft Model Assistant-example-esp32](https://github.com/Seeed-Studio/edgelab-example-esp32)

## インストール方法 
### ESP-IDF のインストール

[ESP-IDF 入門ガイド](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html) の指示に従って、ツールチェーンと ESP-IDF をセットアップしてください。

次の手順は、このインストールが成功し、[IDF 環境変数が設定されている](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html#step-4-set-up-the-environment-variables)ことを前提としています。具体的には、
* `IDF_PATH` 環境変数が設定されている
* `idf.py` および Xtensa-esp32 ツール（例: `xtensa-esp32-elf-gcc`）が `$PATH` に含まれている

### サブモジュールの取得
プロジェクトのルートディレクトリに移動し、以下のコマンドを実行してサブモジュールを取得します:

```
git clone https://github.com/Seeed-Studio/edgelab-example-esp32 && cd edgelab-example-esp32
git submodule init
git submodule update
```

## 使用方法
### サンプルのビルド

サンプルディレクトリ (`examples/<example_name>`) に移動し、サンプルをビルドします。

IDF_TARGET を設定します（ESP32-S3 ターゲットの場合、IDF バージョン `release/v4.4` が必要です）。

```
idf.py set-target esp32s3
```

サンプルを設定します。

```
idf.py menuconfig
```

- `Component config` -> `SenseCraft Model Assistant Configuration` -> `Camera Configuration` -> `Select Camera Pinout` でカメラモジュールを選択します。
![img](https://raw.githubusercontent.com/Seeed-Studio/sscma-example-esp32/1.0.0/docs/_static/esp32/images/esp32s3-xiao-camera.png)
- `Component config` -> `SenseCraft Model Assistant Configuration` -> `LCD Configuration` -> `Select LCD Pinout` でLCDモジュールを選択します。
![img](https://raw.githubusercontent.com/Seeed-Studio/sscma-example-esp32/1.0.0/docs/_static/esp32/images/esp32s3-xiao-lcd.png)

以下のコマンドを実行してビルドします:

```
idf.py build
```

### サンプルのロードと実行

フラッシュするには（`/dev/ttyUSB0` をデバイスのシリアルポートに置き換えてください）:
```
idf.py --port /dev/ttyUSB0 flash
```

シリアル出力を監視するには:
```
idf.py --port /dev/ttyUSB0 monitor
```

## 技術サポートと製品に関する議論

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>