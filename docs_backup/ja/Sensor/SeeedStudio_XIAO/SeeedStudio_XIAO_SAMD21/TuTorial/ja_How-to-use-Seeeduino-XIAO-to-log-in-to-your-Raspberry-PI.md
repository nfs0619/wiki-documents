---
description: Seeed Studio XIAO SAMD21 を使用して Raspberry Pi に接続する方法
title: Seeed Studio XIAO SAMD21 を使用して Raspberry Pi に接続する方法
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI
last_update:
  date: 05/15/2025
  author: shuxu hu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio XIAO SAMD21 を使用して Raspberry Pi にログインする方法

Raspberry Pi を使用する際、以下のような状況が私たちを悩ませることがあります：余分な HDMI ディスプレイがない、マウスやキーボードの接続が難しい、USB からシリアルアダプタを使用して Raspberry Pi にログインすることを選んだが高価すぎる。しかし、Seeed Studio XIAO SAMD21 を使用すれば、これらの問題はすべて簡単に解決できます。

## ハードウェア

## 必要な材料

- [Seeed Studio XIAO SAMD21 x1](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [Raspberry PI Zero x1](https://www.seeedstudio.com/Raspberry-Pi-Zero-W-p-4257.html)

- [ジャンパーケーブル x3](https://www.seeedstudio.com/Breadboard-Jumper-Wire-Pack-200mm-100m-p-1032.html)

- [Type-C ケーブル x1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)

### ハードウェア接続

- **ステップ 1.** Raspberry PI の **TX** を Seeed Studio XIAO SAMD21 の **RX** に接続します。

- **ステップ 2.** Raspberry PI の **RX** を Seeed Studio XIAO SAMD21 の **TX** に接続します。

- **ステップ 3.** Raspberry PI の **GND** を Seeed Studio XIAO SAMD21 の **GND** に接続します。

- **ステップ 4.** Seeed Studio XIAO SAMD21 を Type-C ケーブルを使用して PC に接続します。

- **ステップ 5.** Raspberry Pi を電源に接続します。

<!-- ![](https://files.seeedstudio.com/products/102010328/img/pin-with-marks.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102010328/img/pin-with-marks.png" alt="pir" width={600} height="auto" /></p>

## ソフトウェア

Raspberry Pi 公式システムがインストールされている TF カード上の config.txt ファイルを見つけ、末尾に以下の一文を追加します：

```c
enable_uart=1
```

### Seeed Studio XIAO SAMD21 の設定

- **ステップ 1.** [Arduino IDE](https://www.arduino.cc/en/Main/Software) を開き、[こちらのリンク](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/#software)に従って Seeed Studio XIAO SAMD21 を追加します。

- **ステップ 2.** 以下のコードを Arduino IDE にコピーし、Seeed Studio XIAO SAMD21 にアップロードします。

```cpp
uint32_t baud;
uint32_t old_baud;
void setup() {

  // 初期設定コード（1回だけ実行されます）
  SerialUSB.begin(115200);
  baud = SerialUSB.baud();
  old_baud = baud;
  Serial1.begin(baud);
  while (!Serial);
  while (!SerialUSB);
}

void loop() {
  // メインコード（繰り返し実行されます）
  baud = SerialUSB.baud();
  if (baud != old_baud) {
    Serial1.begin(baud);
    while (!Serial);
    old_baud = baud;
    //     SerialUSB.println(baud);
  }
  if (SerialUSB.available() > 0)
  {
    char c = SerialUSB.read();
    Serial1.write(c);
  }
  if (Serial1.available() > 0) {
    char c = Serial1.read();
    SerialUSB.write(c);
  }
}
```

### Putty の設定

- **ステップ 1.** [こちらのリンク](https://www.putty.org/)に従って Putty をダウンロードしてインストールします。

- **ステップ 2.** シリアルポートのボーレートを 115200 に設定します（これはデフォルトのシリアルポートボーレートです。Raspberry Pi のシリアルポートボーレートと一致していれば正しく通信できます）。

<p align="center">
  <img src="https://files.seeedstudio.com/products/102010328/img/Putty%20config.png" />
</p>

- **ステップ 3.** その後、ターミナルウィンドウに起動情報が表示されます。

<p align="center">
  <img src="https://files.seeedstudio.com/products/102010328/img/Terminal.png" />
</p>

これで、Seeed Studio XIAO SAMD21 を通じて Raspberry Pi にアクセスできるようになりました！

<p align="center">
  <img src="https://files.seeedstudio.com/products/102010328/img/new%20pins.gif" />
</p>