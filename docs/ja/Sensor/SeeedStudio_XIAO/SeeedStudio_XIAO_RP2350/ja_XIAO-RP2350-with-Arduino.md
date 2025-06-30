---
description: XIAO RP2350 ボードで Arduino を使用する方法
title: Seeed Studio XIAO RP2350(Arduino) の使い方
image: https://files.seeedstudio.com/wiki/XIAO-RP2350/img/2-102010550_XIAO_RP2350-45font_1.webp
slug: /ja/xiao_rp2350_arduino
sidebar_position: 1
last_update:
  date: 05/15/2025
  author: Spencer
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Seeed Studio XIAO RP2350 と Arduino

Seeed Studio XIAO RP2350 ボードは、[arduino-pico core](https://github.com/earlephilhower/arduino-pico) のおかげで、Arduino を使用したプログラミングをサポートするようになりました。このガイドでは、RP2350 ボードで Arduino を設定して使用する方法を説明します。

## 必要条件

始める前に以下を準備してください：

- RP2350 ボード
- Arduino IDE
- USB ケーブル

## ソフトウェアのセットアップ

### 1. Arduino IDE のインストール

公式サイトから最新の Arduino IDE をダウンロードしてインストールしてください：[Arduino Software](https://www.arduino.cc/en/software)。

### 2. RP2350 ボードサポートの追加

1. Arduino IDE を開き、**ファイル** > **環境設定** に移動します。
2. **追加のボードマネージャーの URL** フィールドに以下の URL を追加します：

    ```shell
    https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json
    ```

    <div style={{ textAlign: 'center' }}>
    <img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/arduino-url.png" style={{ width: 680, height: 'auto', "border-radius": '12.8px' }} />
    </div>

3. **OK** をクリックして設定を保存します。
4. **ツール** > **ボード** > **ボードマネージャー** に移動します。
5. ボードマネージャーで **pico** を検索し、**インストール** をクリックします。
6. インストール後、**ツール** > **ボード** に移動し、以下のボードを選択してください。

:::note
XIAO RP2350 ボードを完全にサポートするには、バージョン 4.2.0 以降をインストールしてください。
:::

<div style={{ textAlign: 'center' }}>
<img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/arduino-board-option.png" style={{ width: 680, height: 'auto', "border-radius": '12.8px' }} />
</div>

### 3. スケッチのアップロード

スケッチをアップロードする前に、XIAO RP2350 を BOOT モードにする必要があります。以下の方法のいずれかを使用してください：

<Tabs>
<TabItem value="method1" label="方法 1: コンピュータに接続する前" default>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-no-charge.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/><div style={{ marginTop: '-8px' }}><em>BOOT を押しながら -> ケーブルを接続 -> BOOT を離す</em></div></div>

</TabItem>

<TabItem value="method2" label="方法 2: コンピュータに接続中">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-charged.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/><div style={{ marginTop: '-8px' }}><em>BOOT を押しながら -> リセットをクリック -> BOOT を離す</em></div></div>

</TabItem>
</Tabs>

1. Arduino IDE を開き、新しいスケッチを作成します。
2. コードを書きます。例えば、`Blink` の例を使用してください。
3. **ツール** > **ポート** に移動し、RP2350 が接続されているポートを選択します。

<div style={{ textAlign: 'center' }}>
<img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/arduino-firmware-upload.png" style={{ width: 680, height: 'auto', "border-radius": '12.8px' }} />
</div>

## 追加リソース

- [arduino-pico GitHub](https://github.com/earlephilhower/arduino-pico)
- [Arduino-Pico Core Documentation](https://arduino-pico.readthedocs.io/en/latest/install.html)

## サポートとディスカッション

Seeed 製品をご利用いただきありがとうございます！サポートやコミュニティディスカッションのための複数のチャネルを提供しています：

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>