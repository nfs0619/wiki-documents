---
description: Seeed Studio XIAO SAMD21でのCircuitPython
title: CircuitPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino-XIAO-CircuitPython
last_update:
  date: 05/15/2025
  author: shuxu hu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio XIAO SAMD21でのCircuitPython

<!-- ![](https://files.seeedstudio.com/wiki/Circuitpython-XIAO/XIAO-CP.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/XIAO-CP.png" alt="pir" width={600} height="auto" /></p>

このWikiでは、[Seeed Studio XIAO SAMD21開発ボード](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)でAdafruit Industriesの公式[CircuitPython](https://circuitpython.org/)をインストールして実行する方法を紹介します！

CircuitPythonは、低コストのマイクロコントローラーボード上での実験やプログラミング学習を簡素化するために設計されたプログラミング言語です。デスクトップソフトウェアの事前ダウンロードが不要で、セットアップがこれまで以上に簡単になります。ボードをセットアップしたら、任意のテキストエディタを開いてコードの編集を開始できます。詳細については[こちら](https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython)をご覧ください。

## CircuitPythonのインストール

1. 公式の[**Seeed Studio XIAO SAMD21用CircuitPythonブートローダー**](https://circuitpython.org/board/seeeduino_xiao/)をダウンロードします。`.uf2`ファイルがダウンロードされます。

2. USB Type-Cを使用してSeeed Studio XIAO SAMD21をPCに接続します。

3. ジャンパーを使用してRSTピンを2回素早く短絡させ、DFUブートローダーモードに入ります。詳細については[こちら](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/#reset)も参照してください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" /></div>

4. PCに`Arduino`という名前の外部ドライブが表示されます。ダウンロードしたCircuitPythonのuf2ファイルを`Arduino`ドライブにドラッグします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2.png" /></div>

5. CircuitPythonブートローダーがロードされたら、USB Type-Cを抜いて再接続します。`CIRCUITPY`という新しい外部ドライブが表示されます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2-2.png" /></div>

6. これで、Seeed Studio XIAO SAMD21にCircuitPythonがロードされました！Pythonプログラムを書いて`main.py`という名前を付け、それを`CIRCUITPY`ドライブにドラッグするだけです。

## CircuitPythonの基本

CircuitPythonを使用して`Blink`を実行する：

**注意:** 以下のコードをコピーして保存し、`main.py`という名前を付けて`CIRCUITPY`ドライブにドラッグしてください。

```py
import time
import board
from digitalio import DigitalInOut, Direction

led = DigitalInOut(board.LED_INVERTED)
led.direction = Direction.OUTPUT

while True:
    led.value = True
    time.sleep(1)
    led.value = False
    time.sleep(1)
```

内蔵LEDが点滅し始めるはずです！

### Groveモジュールで遊ぶ

CircuitPythonでシンプルなアナログ/デジタルインターフェースを持つGroveモジュールを使用できます。例えば、Grove - Light SensorをSeeeduino XIAOの`A0`ポートに接続し、以下を実行します：

```py
import time
import board
from analogio import AnalogIn

analog_in = AnalogIn(board.A0) # Seeeduino XIAOのアナログピン

def get_voltage(pin):
    return (pin.value * 3.3) / 65536
 
while True:
    print("Voltage: ", get_voltage(analog_in))
    time.sleep(0.1)
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/CP.png" /></div>

CircuitPython APIの詳細については、[**CircuitPython Essentials**](https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials)をご覧ください。

## リソース

- [**CircuitPython Essentials**](https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials)

- [**Seeed Studio Xiao SAMD21へのCircuitPythonのインストール**](https://makeandymake.github.io/2020/05/02/installing-circuitpython-on-seeeduino-xiao.html)

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