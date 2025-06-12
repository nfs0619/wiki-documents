---
description: Seeed Studio XIAO nRF52840 を PlatformIO で使用
title: XIAO nRF52840-Sense を PlatformIO で使用
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/nRF52840_PlatformIO/1.png
slug: /ja/xiao_nrf52840_with_platform_io
last_update:
  date: 05/15/2025
  author: Jason
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/nRF52840_PlatformIO/1.png" /></div>

# **Seeed Studio XIAO nRF52840 を PlatformIO で使用**

PlatformIO は、多くの種類の開発ボードを統合し、優れた拡張性を持つ開発プラットフォームです。このプラットフォームに必要なボードタイプがない場合、自分で手動で追加することができます。Arduino で書いたコードも使用可能で、対応するライブラリを追加するだけです。

この Wiki では、PlatformIO にサンプルコードをインストールして実行する方法を紹介します。

## XIAO nRF52840 を PlatformIO で使用する

### 手順 1. 公式ウェブサイトで [PlatformIO](https://platformio.org/platformio-ide) をインストール

PlatformIO ソフトウェアをまだインストールしていない場合は、上記のリンクをクリックしてください。

### 手順 2. PlatformIO で任意のプロジェクトを作成

PlatformIO にはすでに XIAO ESP32S3 と XIAO ESP32C3 の開発ボードオプションが用意されているため、それらのいずれかを選択してファイルを作成できます。もちろん、他のファイルでも問題ありません。プロジェクト名も自由に選べます。ここでは、例として XIAO ESP32 C3 を使用します。

<table align="center">
  <tr>
      <th>操作 1</th>
      <th>操作 2</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_platformio/4.png" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_platformio/3.png" style={{width:700, height:'auto'}}/></div></td>
  </tr>
</table>

:::tip
この操作を行う前に、XIAO ESP32C6 と XIAO nRF52840 のインストールパッケージをすでにインストールしているため、操作 2 の画像には XIAO ESP32C6 と XIAO nRF52840 のオプションが表示されていますが、操作を行う際には表示されない場合があります。
:::

### 手順 3. platformio.ini ファイルを修正

PlatformIO ファイルを正常に作成すると、左側の列に多くのファイルが表示されます。その中に platform.ini という名前のファイルがあるのが確認できます。次に、その中身を置き換える必要があります。

<table align="center">
  <tr>
      <th>操作 3</th>
  </tr>
  <tr>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO_PlatformIO/platformIO_file.jpg" /></div>
  </tr>
</table>

以下のコードをコピーして、platform.ini ファイルの内容を置き換えてください。

```
[env:seeed_xiao_nrf52840_sense]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-afruitnrf52-nrf52840
framework = arduino
```
:::tip
ファイルを保存することを忘れないでください（Ctrl + S）。保存するとロードが始まります。
:::

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>