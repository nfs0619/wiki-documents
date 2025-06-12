---
description: XIAO ESP32S3 と NuttX(RTOS)
title: XIAO ESP32S3 と NuttX(RTOS)
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-nRF52840-NuttX/nuttx.webp
slug: /ja/xiao_esp32s3_nuttx
sidebar_position: 2
last_update:
    date: 04/08/2025
    author: rcsim
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio XIAO ESP32S3 と NuttX(RTOS)

## はじめに

[NuttX](https://nuttx.apache.org/) は、標準準拠と小型フットプリントで広く認識されている成熟したリアルタイムオペレーティングシステム (RTOS) です。NuttX の主な特徴の一つはそのスケーラビリティであり、8ビットマイクロコントローラーから64ビットシステムまでの環境で使用することができます。この柔軟性は、POSIX および ANSI 標準への準拠によって実現されており、異なるアーキテクチャ、ファミリー、半導体ベンダーの幅広いチップで同様の NuttX 機能を試すことが可能です。

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/NuttX/nuttx.svg"/></div>

さらに、NuttX は USB、Ethernet、オーディオ、グラフィックスサブシステムなど、多くの高度で便利な機能を提供します。これらの特徴により、NuttX はさまざまな種類のハードウェアで動作可能な汎用性が高く堅牢な RTOS を求める開発者にとって魅力的な選択肢となっています。

NuttX は膨大で継続的に拡大する数のボードをサポートしています。[公式ドキュメント](https://nuttx.apache.org/docs/latest/platforms/) では、アーキテクチャやシステムオンチップ (SoC) シリーズごとに整理されたサポートされているボードの包括的なリストを提供しています。

例えば、NuttX ドキュメント内の [Seeed Studio XIAO ESP32S3](https://nuttx.apache.org/docs/latest/platforms/arm/esp32s3/boards/xiao-esp32s3/index.html) ページでは、サポートされている各機能の詳細な説明と、それらを利用する方法についての指示が記載されています。また、[Espressif ESP32S3](https://nuttx.apache.org/docs/latest/platforms/xtensa/esp32s3/index.html) シリーズチップに関する特定のページもあり、サポートされている MCU と周辺機器のリストを確認できます。

## インストール

NuttX ドキュメントでは、さまざまなプラットフォーム向けの[ガイド](https://nuttx.apache.org/docs/latest/quickstart/install.html)を提供しています。Seeed Studio XIAO ESP32S3 の場合、以下の手順に従ってください：

1. Espressif esptool をダウンロードします (https://docs.espressif.com/projects/esptool/en/latest/esp32/)：

    ```bash
    ~/nuttxspace/nuttx$ esptool.py version
    esptool.py v4.8.1
    4.8.1
    ```

2. ワークスペースを作成します：

    ```bash
    mkdir nuttxspace
    ```

3. リポジトリをクローンします：

    ```bash
    cd nuttxspace
    git clone https://github.com/apache/nuttx.git nuttx
    git clone https://github.com/apache/nuttx-apps apps
    ```

Apache Nuttx は2つのプロジェクトに分かれています：

- Nuttx: カーネル、ドライバ、サブシステムが実装されています。
- Apps: ツール、シェル、ネットワークユーティリティ、ライブラリ、インタプリタのコレクションが含まれています。

## アプリケーション

アプリケーションを開始するには、NuttX 上で設定をロードする必要があります。以下のコマンドを実行してください：

```bash
./tools/configurate.sh board_name:your_application
```

また、サポートされているボードのリストを確認するには、以下のコマンドを実行できます：

```bash
./tools/configurate.sh -L
```

4. NuttX をビルドします（ビルドプロセスにより、nuttx.uf2 を含むファームウェアバイナリが生成されます）：

    ```bash
    cd nuttx
    make distclean
    ./tools/configure.sh xiao-esp32s3:nsh
    make V=1
    ```

5. RESET ボタンと BOOT ボタンを使用して「ブートローダーモード」に入ります。BOOT キーを押しながら電源を入れ、その後 RESET キーを一度押します。

6. esptool.py を使用してファームウェアをロードします：

    ```bash
    make flash ESPTOOL_PORT=/dev/ttyACM0 ESPTOOL_BINDIR=./
    ```

## 実践

NuttX を実際に触ってみましょう。このセッションでは、USBNSH と COMBO の2つのアプリケーションが利用可能です。

### NSH

NuttShell (NSH) は、NuttX で使用されるシェルシステムで、bash やその他の類似オプションに似ています。豊富なコマンドセット、スクリプト機能、自分のアプリケーションを「ビルトイン」として実行する機能（NuttX バイナリの一部として）をサポートしています。NSH の設定では、115200 bps の USB コンソールが有効になります。

まず、以前の設定をクリアしてビルドプロセスを開始します。

```bash
cd ~/nuttxspace/nuttx
make distclean
```

次に、xiao-esp32s3 ボード用の NSH 設定を選択します。

```bash
./tools/configurate.sh xiao-esp32s3:usbnsh
```

ソースコードをコンパイルします。

```bash
make -j
```

ファームウェアをボードにロードし、ボードを再起動して、CDC/ACM シリアルインターフェースを使用して USB 経由で NuttShell (NSH) コンソールに接続します。

```bash
picocom -b 115200 /dev/ttyACM0
```

NuttShell コンソールにアクセスします。

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> uname -a
NuttX 12.8.0 2c845426da-dirty Apr  6 2025 22:53:57 xtensa esp32s3-xiao
nsh> 
```

`?` を入力すると、利用可能なコマンドやビルトインアプリケーションのオプションを確認できます。

```bash
nsh> ?
help usage: [-v] [<cmd>]

    .           cp          exec        ls          reboot      truncate    
    [           cmp         exit        mkdir       rm          uname       
    ?           dirname     expr        mkrd        rmdir       umount      
    alias       date        false       mount       set         unset       
    unalias     dd          fdinfo      mv          sleep       uptime      
    basename    df          free        pidof       source      usleep      
    break       dmesg       help        printf      test        xd          
    cat         echo        hexdump     ps          time        
    cd          env         kill        pwd         true        

Builtin Apps:
    getprime    hello       nsh         ostest      sh 
```

NuttX に挨拶してみましょう。`hello` と入力すると、以下のようにコマンドが実行されます。

```bash
nsh> hello
Hello, World!!
```

おめでとうございます！これで NuttX との最初のやり取りが完了しました。

### COMBO

この設定では、gpio と leds の3つの例示アプリケーションが有効になります。汎用入出力 (GPIO) はマイクロコントローラの最も基本的な部分であり、外部世界と接続することを可能にします。このセクションでは、NSH を使用してこれらのピンを自由にアクセスおよび設定します。ただし、まず以前の設定をクリアします。

```bash
cd ~/nuttxspace/nuttx
make distclean
```

xiao-esp32s3 ボード用の combo 設定を選択します。

```bash
./tools/configurate.sh xiao-esp32s3:combo
```

ソースコードをコンパイルします。

```bash
make -j
```

ファームウェアをボードにロードし、minicon や picocom などのシリアル通信プログラムを実行します。

```bash
picocom -b 115200 /dev/ttyACM0
```

```bash
NuttShell (NSH) NuttX-12.8.0
nsh>
```

このアプリケーションと対話するために受け入れられるオプションを確認するには、`gpio -h` を入力します。すると、パラメータのリストが表示されます。

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> gpio -h
USAGE: gpio [-t <pintype>] [-w <signo>] [-o <value>] <driver-path>
       gpio -h
Where:
 <driver-path>: The full path to the GPIO pin driver.
 -t <pintype>:  Change the pin to this pintype (0-10):
 -w <signo>:    Wait for a signal if this is an interrupt pin.
 -o <value>:    Write this value (0 or 1) if this is an output pin.
mation and exit.
Pintypes:
  0: GPIO_INPUT_PIN
  1: GPIO_INPUT_PIN_PULLUP
IO_INPUT_PIN_PULLDOWN
  3: GPIO_OUTPUT_PIN
  4: GPIO_OUTPUT_PIN_OPENDRAIN
  5: GPIO_INTERRUPT_PIN
  6: GPIO_INTERRUPT_HIGH_PIN
  7: GPIO_INTERRUPT_LOW_PIN
  8: GPIO_INTERRUPT_RISING_PIN
  9: GPIO_INTERRUPT_FALLING_PIN
 10: GPIO_INTERRUPT_BOTH_PIN
```

GPIO デバイスファイルが作成されたことを確認するには、`ls /dev` を入力します。入力後、いくつかの GPIO が宣言されているのが確認できます。これらは `boards/arm/ra/xiao-esp32s3/include/board.h` に定義されています。

- オンボード LED:
  - 黄色 -> GPIO21

- GPIOs:
  - 1 入力 -> GPIO1
  - 1 入力（IRQ付き） -> GPIO3
  - 1 出力 -> GPIO2

```bash
nsh> ls /dev
/dev:
 console
 gpio0
 gpio1
 gpio2
 null
 ttyACM0
 ttyS0
 userleds
 zero
nsh> 
```

以下のコマンドを使用して、GPIO1 (/dev/gpio1) と GPIO3 (/dev/gpio2) を読み取り（割り込み付き）、GPIO2 (/dev/gpio0) に書き込みを行います。

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> gpio -o 1 /dev/gpio0
Driver: /dev/gpio0
  Output pin:    Value=0
  Writing:       Value=1
  Verify:        Value=1
nsh> gpio -o 0 /dev/gpio0
  Driver: /dev/gpio0
  Output pin:    Value=1
  Writing:       Value=0
  Verify:        Value=0
nsh> gpio /dev/gpio1
Driver: /dev/gpio1
  Input pin:     Value=0
nsh> gpio /dev/gpio1
Driver: /dev/gpio1
  Input pin:     Value=1
nsh> gpio /dev/gpio1
Driver: /dev/gpio1
  Input pin:     Value=0
nsh> gpio -w 1 /dev/gpio2
Driver: /dev/gpio2
  Interrupt pin: Value=0
  Verify:        Value=1
nsh> gpio -w 1 /dev/gpio2
Driver: /dev/gpio2
  Interrupt pin: Value=0
  Verify:        Value=1
```

USERLEDS は、単一操作で LED を制御できるサブシステムです。また、`printf` のようなコマンドラインを使用することもできます。このデモでは、オンボードの黄色い LED を1秒ごとに点灯・消灯させます。

`leds` と入力すると、LED が点滅する様子が観察できます。

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> leds
leds_main: Starting the led_daemon
leds_main: led_daemon started

led_daemon (pid# 7): Running
led_daemon: Opening /dev/userleds
led_daemon: Supported LEDs 0x01
led_daemon: LED set 0x01
nsh> led_daemon: LED set 0x00
led_daemon: LED set 0x01
led_daemon: LED set 0x00
led_daemon: LED set 0x01
led_daemon: LED set 0x00
led_daemon: LED set 0x01
led_daemon: LED set 0x00
```

以下のデモビデオで、gpio と leds の動作を確認してください。

<div style={{ maxWidth: '100%', textAlign: 'center' }}>
  <video style={{ width: '100%', height: 'auto' }} controls>
    <source src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiao-esp32s3-nuttx-demo.mp4" type="video/mp4" />
  </video>
</div>

NuttX RTOS に関する詳細情報は、[NuttX Documentation](https://nuttx.apache.org/docs/latest/index.html) をご覧ください。

## ✨ コントリビュータープロジェクト

- このプロジェクトは Seeed Studio の [コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) によってサポートされています。
- 特に [Rodrigo](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=92947609) さんの献身的な努力に感謝します。あなたの作業は [展示](https://wiki.seeedstudio.com/ja/contributors/) されます。

## 技術サポート & 製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社の製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>