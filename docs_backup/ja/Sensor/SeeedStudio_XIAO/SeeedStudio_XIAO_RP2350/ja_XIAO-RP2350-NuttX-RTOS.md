---
description: XIAO RP2350 と NuttX(RTOS)
title: XIAO RP2350 と NuttX(RTOS)
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-nRF52840-NuttX/nuttx.webp
slug: /ja/xiao_rp2350_nuttx
sidebar_position: 3
last_update:
    date: 03/11/2025
    author: rcsim
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio XIAO RP2350 と NuttX(RTOS)

## はじめに

[NuttX](https://nuttx.apache.org/) は、標準準拠と小型フットプリントで広く認識されている成熟したリアルタイムオペレーティングシステム (RTOS) です。NuttX の主な特徴の一つはそのスケーラビリティであり、8ビットマイクロコントローラーから64ビットシステムまでの環境で使用することができます。この柔軟性は POSIX および ANSI 標準への準拠によって実現されており、異なるアーキテクチャ、ファミリー、半導体ベンダーの幅広いチップで類似した NuttX 機能を試すことが可能です。

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/NuttX/nuttx.svg"/></div>

さらに、NuttX は USB、Ethernet、Audio、Graphics サブシステムなど、多くの高度で便利な機能を提供します。これらの特徴により、NuttX はさまざまな種類のハードウェアで動作可能な汎用性の高い堅牢な RTOS を求める開発者にとって魅力的な選択肢となります。

NuttX は膨大で継続的に拡大する数のボードをサポートしています。[公式ドキュメント](https://nuttx.apache.org/docs/latest/platforms/) では、アーキテクチャや System-on-Chip (SoC) シリーズごとに整理されたサポートされているボードの包括的なリストを提供しています。

例えば、NuttX ドキュメントの [Seeed Studio XIAO RP2350](https://nuttx.apache.org/docs/latest/platforms/arm/rp23xx/boards/xiao-rp2350/index.html) ページでは、各サポート機能の詳細な説明とその利用方法についての指示が記載されています。また、NuttX ドキュメントには [Raspberry Pi RP2350](https://nuttx.apache.org/docs/latest/platforms/arm/rp23xx/index.html) シリーズチップに関する特定のページもあります。

## インストール

NuttX ドキュメントでは、異なるプラットフォーム向けの[ガイド](https://nuttx.apache.org/docs/latest/quickstart/install.html)を提供しています。Seeed Studio XIAO RP2350 の場合、以下の手順に従ってください：

1. picotool ツールをダウンロードします（オプション）：

    ```bash
    git clone https://github.com/raspberrypi/picotool.git picotool
    cd picotool
    mkdir build
    cd build
    cmake ..
    make
    cp picotool ~/local/bin # PATH に含まれる場所にコピー
    ```

2. ワークスペースを作成します

    ```bash
    mkdir nuttxspace
    ```

3. リポジトリをクローンします

    ```bash
    cd nuttxspace
    git clone https://github.com/apache/nuttx.git nuttx
    git clone https://github.com/apache/nuttx-apps apps
    ```

Apache Nuttx は2つのプロジェクトに分かれています：

- Nuttx: カーネル、ドライバー、サブシステムを実装しています。
- Apps: ツール、シェル、ネットワークユーティリティ、ライブラリ、インタープリタのコレクションを含んでいます。

## アプリケーション

アプリケーションを開始するには、NuttX に設定をロードする必要があります。以下のコマンドを実行してください：

```bash
./tools/configurate.sh board_name:your_application
```

また、サポートされているボードのリストを確認するには、以下のコマンドを実行することができます：

```bash
./tools/configurate.sh -L
```

4. NuttX をビルドします（ビルドプロセスにより、nuttx.uf2 を含むファームウェアバイナリが生成されます）：

    ```bash
    cd nuttx
    make distclean
    ./tools/configure.sh xiao-rp2350:nsh
    make V=1
    ```

5. picotool を使用してファームウェアをロードします：

    ```bash
    picotool load nuttx -t elf
    ```

6. RESET ボタンと BOOT ボタンを使用してブートローダーモードに入ることができます。BOOT ボタンを押し続けた状態で RESET ボタンを押して離します。その後、ボードは USB 経由で接続されたコンピュータにストレージデバイスとして認識されます。このデバイスに .UF2 ファイルを保存すると、RP2350 の Flash ROM の内容が置き換えられます。

## ハンズオン

NuttXを実際に操作してみましょう。このセッションでは、NSH、USBNSH、COMBOの3つのアプリケーションが利用可能です。

### NSH

NuttShell(NSH)は、NuttXで使用されるシェルシステムで、bashやその他の類似オプションに似ています。豊富なコマンドセット、スクリプト機能、自作アプリケーションを「組み込み」として実行する機能（同じNuttXバイナリの一部として）をサポートしています。NSHの設定では、UART0コンソールが115200 bpsで有効になります。

まず、以前の設定をクリアしてビルドプロセスを開始します。

```bash
cd ~/nuttxspace/nuttx
make distclean
```

次に、xiao-nrf5200ボード用のNSH設定を選択します。

```bash
./tools/configurate.sh xiao-rp2350:nsh
```

ソースコードをコンパイルします。

```bash
make -j
```

ファームウェアをボードにロードし、USB-to-SerialをTXおよびRXピンに接続してから、minicomやpicocomなどのシリアル通信プログラムを実行します。

```bash
picocom -b 115200 /dev/ttyUSB0
```

NuttShellコンソールにアクセスします。

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> 
```

`?`を入力すると、利用可能なコマンドや組み込みアプリケーションのオプションにアクセスできます。

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

NuttXに挨拶してみましょう。`hello`と入力すると、以下のようにコマンドが実行されます。

```bash
nsh> hello
Hello, World!!
```

おめでとうございます！NuttXとの最初の対話が完了しました。

### USBNSH

NSH設定と似ていますが、CDC/ACMシリアル（USBポートでコンソールが有効、115200 bps）を使用します。

まず、以前の設定をクリアしてビルドプロセスを開始します。

```bash
cd ~/nuttxspace/nuttx
make distclean
```

次に、xiao-nrf5200ボード用のUSBNSH設定を選択します。

```bash
./tools/configurate.sh xiao-rp2350:usbnsh
```

ソースコードをコンパイルします。

```bash
make -j
```

ファームウェアをボードにロードし、minicomやpicocomなどのシリアル通信プログラムを実行します。

```bash
picocom -b 115200 /dev/ttyACM0
```

Enterキーを3回押すと、以下のメッセージがターミナルに表示されます。

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> 
```

### COMBO

この設定では、gpio、leds、ws2812の3つのサンプルアプリケーションが有効になります。汎用入出力（GPIO）はマイクロコントローラの最も基本的な部分であり、外部世界と接続することを可能にします。このセクションでは、NSHを使用してこれらのピンにアクセスし、設定します。まず、以前の設定をクリアします。

```bash
cd ~/nuttxspace/nuttx
make distclean
```

xiao-rp2350ボード用のCOMBO設定を選択します。

```bash
./tools/configurate.sh xiao-rp2350:combo
```

ソースコードをコンパイルします。

```bash
make -j
```

ファームウェアをボードにロードし、minicomやpicocomなどのシリアル通信プログラムを実行します。

```bash
picocom -b 115200 /dev/ttyUSB0
```

```bash
NuttShell (NSH) NuttX-12.8.0
nsh>
```

このアプリケーションと対話するために受け入れられるオプションを確認するには、`gpio -h`と入力します。すると、パラメータのリストが返されます。

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

GPIOデバイスファイルが作成されたことを確認するには、`ls /dev`と入力します。入力後、boards/arm/rp23xx/xiao-rp2350/include/board.hで定義されたいくつかのGPIOが表示されます。これらは以下を表します：

- オンボードLED：
  - 黄色 -> GPIO25

- GPIO：
  - 1入力 -> GPIO27
  - 1割り込み入力 -> GPIO26
  - 1出力 -> GPIO28

```bash
nsh> ls /dev
/dev:
 console
 gpio26
 gpio27
 gpio28
 leds0
 null
 ttyS0
 userleds
 zero
nsh> 
```

以下のコマンドを使用して、gpio27とgpio26（割り込み付き）を読み取り、gpio28に書き込みます。

```bash
nsh> gpio -w 1 /dev/gpio26
Driver: /dev/gpio26
  Interrupt pin: Value=0
  Verify:        Value=0
nsh> gpio /dev/gpio27
Driver: /dev/gpio27
  Input pin:     Value=0
nsh> gpio /dev/gpio27
Driver: /dev/gpio27
  Input pin:     Value=1
nsh> gpio -o 1 /dev/gpio28
Driver: /dev/gpio28
  Output pin:    Value=0
  Writing:       Value=1
  Verify:        Value=1
nsh> gpio -o 0 /dev/gpio28
Driver: /dev/gpio28
  Output pin:    Value=1
  Writing:       Value=0
  Verify:        Value=0
```

USERLEDSは、単一の操作でLEDを制御するサブシステムです。また、printfのようなコマンドラインを使用することもできます。このデモでは、オンボードの黄色LEDを1秒ごとに点灯および消灯します。

`leds`と入力すると、LEDが同時に点滅するのが観察できます。

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> leds
leds_main: Starting the led_daemon
leds_main: led_daemon started

led_daemon (pid# 3): Running
led_daemon: Opening /dev/userleds
led_daemon: Supported LEDs 0x01
led_daemon: LED set 0x01
nsh> led_daemon: LED set 0x00
led_daemon: LED set 0x01
led_daemon: LED set 0x00
led_daemon: LED set 0x01
led_daemon: LED set 0x00
```

Seeed Studio XIAO RP2350には、ws2812アドレス指定可能なLEDも搭載されており、ws2812アプリケーションを使用してテストできます。

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> ws2812
```

以下のビデオで、gpio、leds、ws2812のデモをご覧ください：

<div style={{ maxWidth: '100%', textAlign: 'center' }}>
  <video style={{ width: '100%', height: 'auto' }} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/Nuttx/xiao-rp2350-nuttx-demo.mp4" type="video/mp4" />
  </video>
</div>

NuttX RTOS に関する詳細情報は、[NuttX Documentation](https://nuttx.apache.org/docs/latest/index.html) をご覧ください。

## ✨ コントリビュータープロジェクト

- このプロジェクトは Seeed Studio の [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) によってサポートされています。
- 特に [Rodrigo](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=92947609) さんの献身的な努力に感謝します。あなたの作業は [展示](https://wiki.seeedstudio.com/ja/contributors/) されます。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートをご用意しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>