---
description: Seeed Studio XIAO nRF52840 と CircuitPython
title: CircuitPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO-BLE_CircutPython
last_update:
  date: 05/15/2025
  author: shuxu hu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# **Seeed Studio XIAO nRF52840 と CircuitPython**

CircuitPython は、低コストのマイクロコントローラーボード上での実験やプログラミング学習を簡素化するために設計されたプログラミング言語です。デスクトップへの事前ダウンロードが不要で、これまで以上に簡単に始められます。ボードをセットアップしたら、任意のテキストエディタを開いてコードの編集を開始するだけです。それほど簡単です。

## **はじめに**

### インストール

**ステップ 1** ブートローダーモードに入る

CircuitPython を Seeed Studio XIAO nRF52840 にインストールする前に、ブートローダーモードに入る必要があります。リセットボタンを2回クリックすることでブートローダーモードに入ることができます：

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/functional2b.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/functional2b.jpg" alt="pir" width={600} height="auto" /></p>

すると、ディスクが表示されます：

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu1.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu1.png" alt="pir" width={600} height="auto" /></p>

**ステップ 2** Seeed Studio XIAO nRF52840 用の [ファームウェア](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-Circuitpython.uf2) をダウンロードします。

**ステップ 3** .urf ファイルをディスクドライブ（"XIAO-SENSE"）にドラッグします。

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu3.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu3.png" alt="pir" width={600} height="auto" /></p>

**ステップ 4** ディスクドライブの名前が "CIRCUITPY" に変更されているか確認します。

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu2.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu2.png" alt="pir" width={600} height="auto" /></p>

これで、Seeed Studio XIAO nRF52840 ボードに CircuitPython を正常にインストールできました。

### アプリケーション

**ステップ 1** CircuitPython エディタ - [Mu Editor](https://codewith.mu/en/download) をダウンロードして開きます。

**ステップ 2** "Mode" をクリックし、モードを "CircuitPython" に設定します。

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu4.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu4.png" alt="pir" width={600} height="auto" /></p>

**ステップ 3** 以下のコードをコピーしてアップロードします：

```cpp
"""Seeed Studio XIAO nRF52840 の例。内蔵 LED を点滅させます。"""
import time
import board
import digitalio

led = digitalio.DigitalInOut(board.LED)
led.direction = digitalio.Direction.OUTPUT

while True:
    led.value = True
    time.sleep(0.5)
    led.value = False
    time.sleep(0.5)
```

"Serial" をクリックして REPL を開き、コードを 'code.py' または 'main.py' として REPL に保存します。

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu5.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu5.png" alt="pir" width={600} height="auto" /></p>

すると、Seeed Studio XIAO nRF52840 のユーザー LED が点滅します。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートをご用意しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>