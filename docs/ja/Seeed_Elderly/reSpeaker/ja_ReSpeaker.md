---
description: ReSpeakerの紹介
title: ReSpeakerの紹介
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ReSpeaker
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

ReSpeakerは、周囲のものを操作するためのオープンモジュラー音声インターフェースです。家庭用電化製品、植物、オフィス、インターネット接続されたデバイス、または日常生活のあらゆるものと音声でやり取りすることができます。ReSpeakerプロジェクトは、音声対応デバイスを構築するためのハードウェアコンポーネントとソフトウェアライブラリを提供します。

![](https://files.seeedstudio.com/wiki/ReSpeaker/img/vui.png)

## ハードウェア

ハードウェアコンポーネントには、Raspberry Pi用のI2Sマイクアレイ、Linux/Windows/macOS用のUSBマイクアレイ、単体のReSpeaker Core v1.0 & v2.0が含まれます。

### マイクアレイ

|              |  USB 6+1 マイクアレイ  | Raspberry Pi用4マイクアレイ | Raspberry Pi用2マイクアレイ | USB 4マイクアレイ |
|:------------:|:-----------------------:|:---------------------------:|:---------------------------:|:-----------------:|
|  マイク数    |          7              |          4                 |          2                 |        4         |
|     形状     |       円形              |       四角形               |      長方形               |     円形         |
|   インターフェース |         USB           |         I2S                |         I2S                |       USB        |
|   RGB LED    |          12             |         12                 |          3                 |        12        |
| オーディオ出力 |         モノラル        |         NA                 |       ステレオ             |       モノラル    |
|     備考     | 内蔵アルゴリズム        |                            |                            |   近日公開       |

### 単体ReSpeaker Core

|             | ReSpeaker Core v1 (MT7688)  | ReSpeaker Core v2 (RK3229)                    |
|-------------|-----------------------------|-----------------------------------------------|
| CPU         | MT7688 (MIPS24KEc, 580 MHz) | RK3229 (4 ARM Cortex A7コア, 1.5GHz)          |
| RAM         | 256 MB                      | 1 GB                                          |
| マイク数    | 1                           | 6                                             |
| 形状        | 円形                        | 六角形                                         |
| インターフェース | WiFi, USBデバイス         | WiFi, Bluetooth, Ethernet, HDMI, USB otg/host |
| ループバック | NA                          | 2チャンネル                                   |

## ソフトウェア

VAD、DOA、ビームフォーミング、NS、AEC、KWSなどの音声処理アルゴリズムが利用可能で、急速に進化しています。

![](https://files.seeedstudio.com/wiki/ReSpeaker/img/mic_array.png)

## 製品一覧

---
以下はSeeed WiKiで見つけることができるReSpeakerボードの一覧です。このリストは随時更新されます。

- [ReSpeaker 2-Mics Pi HAT](https://wiki.seeedstudio.com/ja/ReSpeaker_2_Mics_Pi_HAT/)
- [ReSpeaker 4-Mic Array for Raspberry Pi](https://wiki.seeedstudio.com/ja/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/)
- [ReSpeaker Core](https://wiki.seeedstudio.com/ja/ReSpeaker_Core/)
- [ReSpeaker Core v2.0](https://wiki.seeedstudio.com/ja/ReSpeaker_Core_v2.0/)
- [ReSpeaker Drive Unit](https://wiki.seeedstudio.com/ja/ReSpeaker_Drive_Unit/)
- [ReSpeaker Mic Array](https://wiki.seeedstudio.com/ja/ReSpeaker_Mic_Array/)
- [ReSpeaker Mic Array v2.0](https://wiki.seeedstudio.com/ja/ReSpeaker_Mic_Array_v2.0/)
- [ReSpeaker 4-Mic Linear Array Kit for Raspberry Pi](https://wiki.seeedstudio.com/ja/ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi/)
- [ReSpeaker 6-Mic Circular Array kit for Raspberry Pi](https://wiki.seeedstudio.com/ja/ReSpeaker_6-Mic_Circular_Array_kit_for_Raspberry_Pi/)

## ReSpeakerプロジェクト

詳細については[ReSpeaker.io](https://respeaker.io/)をご参照ください。
弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>