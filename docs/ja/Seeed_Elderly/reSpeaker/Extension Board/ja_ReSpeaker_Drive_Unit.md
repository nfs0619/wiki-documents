---
description: ReSpeaker Drive Unit
title: ReSpeaker Drive Unit
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ReSpeaker_Drive_Unit
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

![](https://files.seeedstudio.com/wiki/ReSpeaker_Drive_Unit/img/Meow_King_Drive_Unit.jpg)

ReSpeaker Drive Unitは、ReSpeaker Core専用に設計された独立したスピーカードライブユニットです。

このドライブユニットを使用することで、Amazon Alexa Voice Servicesやその他の音声サービスを利用したスマートスピーカーを構築できます。さらに、Airplayをサポートしているため、スマートフォン、PC、Macを介して音楽をストリーミングすることが可能です。もちろん、ローカル音楽の再生も可能です。

ReSpeaker Coreは強力な拡張性を備えており、プロトタイプや製品に音声機能を簡単に追加できることを期待しています。

## 特徴

- 充電可能なバッテリーを内蔵
- タッチボタン
- Airplay対応
- インピーダンスは4Ω、定格出力は5W
- ReSpeaker CoreにインジケータLEDを搭載

## 仕様

- 定格出力: 5W
- インピーダンス: 4Ω
- SNR: ≥ 75dBA
- 感度: 550 ± 50mV
- 歪み率: ≤ 0.5%
- 周波数応答: 85Hz - 20kHz
- 電源供給: USB経由で5V、または3.7V、1500mAhバッテリー
- スピーカー直径: 40mm

## 開封ガイド

### ReSpeaker Coreの準備

Meow Kingドライブユニットを駆動するには、ReSpeaker Coreのファームウェアを更新する必要があります。元のストックファームウェアとこのファームウェアの違いについては、[こちらの変更ログ](https://onedrive.live.com/?authkey=%21AKD3ZD6g0DE2M9E&cid=5219529519B9B6A1&id=5219529519B9B6A1%21720&parId=5219529519B9B6A1%21721&o=OneUp)を参照してください。

では、ファームウェアを更新しましょう。まず、[OneDrive](https://1drv.ms/f/s!AqG2uRmVUhlShUyg92Q-oNAxNjPR)から`ramips-openwrt-v1.0.01-LinkIt7688-squashfs-sysupgrade.bin`をダウンロードします。ファームウェアをSDカードにコピーし、SDカードをReSpeaker Coreに挿入します。[こちらの手順](https://wiki.seeedstudio.com/ja/ReSpeaker_Core/#2-connect-to-serial-console)に従ってシリアルコンソールに接続してください。なお、USBシリアルを動作させるには、Arduinoチップ（ATMega32U4）の[デフォルトファームウェア](https://files.seeedstudio.com/wiki/ReSpeaker_Drive_Unit/res/respeaker_arduino_library/examples/pixels_pattern/pixels_pattern.ino)を復元する必要があります（変更している場合）。USBシリアルが取得できたら、以下のコマンドを入力してファームウェアを更新します：

```shell
mount /dev/mmcblk0p1 /mnt
cd /mnt
sysupgrade -n -F ramips-openwrt-v1.0.01-LinkIt7688-squashfs-sysupgrade.bin
```

システムイメージが書き込まれると、ReSpeaker Coreは再起動します。

### 組み立て

以下の画像のように、ReSpeaker CoreをMeow Kingドライブユニットに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ReSpeaker_Drive_Unit/img/mk_1.jpg" /></div>

電源ロゴを5秒以上押すと、ドライブユニットが電源オンになり、ReSpeaker Coreボードも起動します。

:::Note
電源制御回路はドライブユニット内にあるため、ReSpeaker Coreを取り外しても、電源ロゴを5秒以上押すとドライブユニットが電源オンになります。
:::

デバイス全体の電源をオフにするには、再度電源ロゴを5秒以上押してください。

デバイスが電源オンになると、ReSpeaker Coreは起動プロセスに入ります。LEDリングが1秒間赤色に点灯し、ReSpeaker Coreが起動中であることを示します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ReSpeaker_Drive_Unit/img/mk_2.jpg" /></div>

数秒待ち、スマートフォンを用意して、Meow Kingドライブユニットに音楽をストリーミングする準備をしてください。

### 音楽をストリーミング

#### iOSの場合

1. iOSデバイスとReSpeakerを同じWi-Fiネットワークに接続します。
2. iOSデバイスで、画面の下から上にスワイプしてコントロールセンターを開きます。
3. コントロールセンターで、横にスワイプして「再生中」画面を見つけます。
4. 以下の画像のようにReSpeakerを選択します：

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ReSpeaker_Drive_Unit/img/airplay.png" /></div>

5. ヘッドフォン/スピーカーをReSpeakerに接続し、音楽を楽しむことができます。

#### Androidの場合

1. スマートフォンを**ReSpeakerのWi-Fi**に接続します。
2. スマートフォンでAirPlayクライアントソフトウェア（例：*AllConnect*）を開きます。
3. 以下の画像のようにReSpeakerを選択します：

<div className="text-center">
  <img src="https://files.seeedstudio.com/wiki/ReSpeaker_Drive_Unit/img/dlna.png" width="50%" height="50%" />
</div>

4. ヘッドフォン/スピーカーをReSpeakerに接続し、音楽を楽しむことができます。

:::note
再生後に音が聞こえない場合は、プレーヤーアプリケーションの音量を上げてみてください。
:::

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>