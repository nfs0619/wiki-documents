---
description: Seeed Studio XIAO MG24 を PlatformIO で使用する
title: XIAO MG24 を PlatformIO で使用する
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/mg24_platform/top_mg24_platform02.webp
slug: /ja/xiao_mg24_with_platform_io
last_update:
  date: 05/15/2025
  author: Jason
  sidebar_position: 5
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/mg24_platform/top_mg24_platform02.webp" /></div>

## PlatformIO の紹介

PlatformIO は、多くの種類の開発ボードを統合し、優れた拡張性を持つ開発プラットフォームです。もしプラットフォームに必要なボードタイプがない場合、自分で手動で追加することができます。Arduino で書いたコードも使用可能で、対応するライブラリを追加するだけで利用できます。

この Wiki では、PlatformIO でサンプルコードをインストールして実行する方法を紹介します。

## XIAO MG24 を PlatformIO で使用する

### 手順 1. 公式ウェブサイトから [PlatformIO](https://platformio.org/platformio-ide) をインストールする

まだ PlatformIO のソフトウェアをインストールしていない場合は、上記のリンクをクリックしてください。

### 手順 2. PlatformIO で任意のプロジェクトを作成する

ここでは、任意の開発バージョンを選択してプロジェクトファイルを作成できます。例として、XIAO ESP32 C3 を使用します。

<table align="center">
  <tr>
      <th>操作 1</th>
      <th>操作 2</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_platform/mg24patform2.jpg" style={{width:400, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_PlatformIO/mg24_platformIO.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
</table>

### 手順 3. platformio.ini ファイルを修正する

PlatformIO ファイルを正常に作成すると、左側の列に多くのファイルが表示されます。その中に platform.ini という名前のファイルがあるのがわかります。次に、その中身を置き換える必要があります。

<table align="center">
  <tr>
      <th>操作 3</th>
  </tr>
  <tr>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/mg24_platform/mg24platform.jpg"/></div>
  </tr>
</table>

以下のコードをコピーして、platform.ini ファイルの内容を置き換えてください。

```
[env:seeed_xiao_mg24]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-mg24
framework = arduino
```

:::tip
ファイルを保存するのを忘れないでください（Ctrl + S）。保存するとロードが始まります。
:::

### 手順 4. コンパイルと書き込み

**次に、このコードを使用してコンパイルと書き込みを行います。**

```cpp
#include <Arduino.h>
void setup() {
  // デジタルピン LED_BUILTIN を出力として初期化
  pinMode(LED_BUILTIN, OUTPUT);
}

// ループ関数は永遠に繰り返し実行されます
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);  // LED を点灯 (HIGH は電圧レベル)
  delay(1000);                      // 1秒待機
  digitalWrite(LED_BUILTIN, LOW);   // LED を消灯 (LOW は電圧レベル)
  delay(1000);                      // 1秒待機
}
```

<table align="center">
  <tr>
      <th>操作 4</th>
  </tr>
  <tr>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/mg24_platform/mg.png" /></div>
  </tr>
</table>

コンパイルが正常に完了したことが表示されます。その後、XIAO MG24 にアクセスして書き込みを行うことができます。

### 手順 5. 結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/00.gif" style={{width:500, height:'auto'}}/></div>

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