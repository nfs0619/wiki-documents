---
description: Seeed Studio XIAO SAMD21 を使用して DAPLink デバイスを構築する
title: Seeed Studio XIAO SAMD21 を使用して DAPLink デバイスを構築する
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino-XIAO-DAPLink
last_update:
  date: 05/15/2025
  author: shuxu hu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio XIAO SAMD 21 DAPLink

現在、[Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) や [Seeeduino Xiao](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) などの **Arduino ボード（SAMD シリーズ）で動作する DAPLink ファームウェアを開発しました**。これにより、DAPLink をサポートする開発ボードを最もコスト効率の良い方法でアップロードおよびデバッグすることができます！

## 特徴

- Arm Cortex CPU のデバッグとフラッシュ
- 仮想シリアルポートを提供し、USB からシリアルポートへの変換が不要
- ドラッグ＆ドロップでファームウェアをアップロード（近日公開）

## はじめに

Arduino DAPLink のスタートガイド Wiki をこちらでご覧ください。

### `uf2` メソッド

利便性のために、Wio Terminal のファームウェアをアップロードするための `uf2` メソッドも提供しています。以下から `uf2` ファイルをダウンロードしてください。

- [**simple_daplink_xiao**](http://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/simple_daplink_xiao.uf2) `uf2` ファイルをダウンロードします。

電源スイッチを素早く 2 回スライドさせてブートローダーモードに入ります。詳細については、[こちら](https://wiki.seeedstudio.com/ja/Wio-Terminal-Getting-Started/#faq) も参照してください。

PC に `Arduino` という名前の外部ドライブが表示されるはずです。ダウンロードした `uf2` ファイルを `Arduino` ドライブにドラッグしてください。

### 接続ピン配置

以下を参考にしてください：

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/daplink-xiao.jpg" /></div>

## 技術サポートと製品ディスカッション

当社の製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>