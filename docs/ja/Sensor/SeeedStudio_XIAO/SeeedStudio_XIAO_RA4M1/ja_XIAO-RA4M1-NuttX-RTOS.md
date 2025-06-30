---
description: XIAO RA4M1 と NuttX(RTOS)
title: XIAO RA4M1 と NuttX(RTOS)
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-nRF52840-NuttX/nuttx.webp
slug: /ja/xiao_ra4m1_nuttx
sidebar_position: 2
last_update:
    date: 03/11/2025
    author: rcsim
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio XIAO RA4M1 と NuttX(RTOS)

## はじめに

[NuttX](https://nuttx.apache.org/) は、標準準拠と小型フットプリントで広く認識されている成熟したリアルタイムオペレーティングシステム (RTOS) です。NuttX の主な特徴の一つはそのスケーラビリティであり、8ビットマイクロコントローラーから64ビットシステムまでの環境で使用することができます。この柔軟性は POSIX および ANSI 標準への準拠によって実現されており、異なるアーキテクチャ、ファミリー、半導体ベンダーの幅広いチップで類似の NuttX 機能を試すことが可能です。

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/NuttX/nuttx.svg"/></div>

さらに、NuttX は USB、Ethernet、Audio、Graphics サブシステムなど、多くの高度で便利な機能を提供します。これらの特徴により、NuttX は多様なハードウェアで動作可能な汎用性と堅牢性を備えた RTOS を求める開発者にとって魅力的な選択肢となります。

NuttX は膨大で継続的に拡大する数のボードをサポートしています。[公式ドキュメント](https://nuttx.apache.org/docs/latest/platforms/) では、アーキテクチャや System-on-Chip (SoC) シリーズごとに整理されたサポートされているボードの包括的なリストを提供しています。

例えば、NuttX ドキュメントの [Seeed Studio XIAO RA4M1](https://nuttx.apache.org/docs/latest/platforms/arm/ra4m1/boards/xiao-ra4m1/index.html) ページでは、サポートされている各機能の詳細な説明とその利用方法に関する指示が記載されています。また、Renesas RA4M1 シリーズチップに関する特定のページもあり、サポートされている MCU と周辺機器のリストを確認できます。

## インストール

NuttX ドキュメントでは、[ガイド](https://nuttx.apache.org/docs/latest/quickstart/install.html) を提供しています。Seeed Studio XIAO RA4M1 の場合、以下の手順に従ってください：

1. Renesas rfp-cli をダウンロードします (https://www.renesas.com/en/software-tool/renesas-flash-programmer-programming-gui):

    ```bash
    ~/nuttxspace/nuttx$ rfp-cli --help
    Renesas Flash Programmer CLI V1.11
    Module Version: V3.18.00.000
    Usage: rfp-cli [options...] [<hex file>...]
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

- Nuttx: カーネル、ドライバー、サブシステムが実装されています。
- Apps: ツール、シェル、ネットワークユーティリティ、ライブラリ、インタープリターのコレクションが含まれています。

## アプリケーション

アプリケーションを開始するには、NuttX に設定をロードする必要があります。以下のコマンドを実行してください：

```bash
./tools/configurate.sh board_name:your_application
```

また、サポートされているボードのリストを確認するには、以下のコマンドを実行できます：

```bash
./tools/configurate.sh -L
```

4. NuttX をビルドします (ビルドプロセスにより、nuttx.uf2 を含むファームウェアバイナリが生成されます):

    ```bash
    cd nuttx
    make distclean
    ./tools/configure.sh xiao-ra4m1:nsh
    make V=1
    ```
5. RESET ボタンと BOOT ボタンを使用して「Renesas RA USB Boot」モードに入ることができます。BOOT を GND にショートした状態でボードを再起動し、リセットボタンを2回押します (ダブルクリック)。ボードは「Renesas RA USB Boot」として認識されます。

6. rfp-cli を使用してファームウェアをロードします：

    ```bash
    rfp-cli -device ra -port /dev/ttyACM0 -p ./build/nuttx.hex
    ```

## 実践

NuttXを実際に触ってみましょう。このセッションでは、NSHとCOMBOの3つのアプリケーションが利用可能です。

### NSH

NuttShell(NSH)は、NuttXで使用されるシェルシステムで、bashやその他の類似オプションに似ています。豊富なコマンドセット、スクリプト機能、そして独自のアプリケーションを「builtin」（同じNuttXバイナリの一部）として実行する機能をサポートしています。NSHの設定では、115200 bpsでSCI2コンソールを有効にします。

まず、以前の設定をクリアしてビルドプロセスを開始します。

```bash
cd ~/nuttxspace/nuttx
make distclean
```

次に、xiao-ra4m1ボード用のNSH設定を選択します。

```bash
./tools/configurate.sh xiao-ra4m1:nsh
```

ソースコードをコンパイルします。

```bash
make -j
```

ファームウェアをボードにロードし、USB-to-SerialをTXおよびRXピンに接続した後、miniconやpicocomなどのシリアル通信プログラムを実行します。

```bash
picocom -b 115200 /dev/ttyUSB0
```

NuttShellコンソールにアクセスします。

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> 
```

`?`を入力すると、コマンドや組み込みアプリケーションの利用可能なオプションにアクセスできます。

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

NuttXに挨拶してみましょう。`hello`と入力すると、コマンドが実行されます。

```bash
nsh> hello
Hello, World!!
```

おめでとうございます！これでNuttXとの最初のインタラクションが完了しました。

### COMBO

この設定では、gpioとledsの3つの例示アプリケーションが有効になります。汎用入出力(GPIO)はマイクロコントローラーの最も基本的な部分であり、外部世界と接続することを可能にします。このセクションでは、NSHを使用してこれらのピンにアクセスし、設定を行います。まず、以前の設定をクリアします。

```bash
cd ~/nuttxspace/nuttx
make distclean
```

xiao-ra4m1ボード用のcombo設定を選択します。

```bash
./tools/configurate.sh xiao-ra4m1:combo
```

ソースコードをコンパイルします。

```bash
make -j
```

ファームウェアをボードにロードし、miniconやpicocomなどのシリアル通信プログラムを実行します。

```bash
picocom -b 115200 /dev/ttyUSB0
```

```bash
NuttShell (NSH) NuttX-12.8.0
nsh>
```

このアプリケーションと対話するために受け入れられるオプションを確認するには、`gpio -h`を入力します。すると、パラメータのリストが返されます。

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

GPIOデバイスファイルが作成されたことを確認するには、`ls/dev`を入力します。入力後、いくつかのGPIOが宣言されていることが確認できます。これらはboards/arm/ra/xiao-ra4m1/include/board.hで定義されています。

- オンボードLED:
  - 黄色            -> P011
 
- GPIOs
  - 1入力           -> P014
  - 1出力           -> P000

```bash
nsh> ls /dev
/dev:
 console
 gpio0
 gpio1
 null
 ttyS0
 userleds
 zero
nsh> 
```

以下のコマンドを使用してgpio0を読み取り、gpio1に書き込みます。現時点では、RA4M1チップセットではGPIO入力の割り込みは利用できません。

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> gpio /dev/gpio0
Driver: /dev/gpio0
  Input pin:     Value=0
nsh> gpio /dev/gpio0
Driver: /dev/gpio0
  Input pin:     Value=1
nsh> gpio -o 1 /dev/gpio1
Driver: /dev/gpio1
  Output pin:    Value=0
  Writing:       Value=1
  Verify:        Value=1
nsh> gpio -o 0 /dev/gpio1
Driver: /dev/gpio1
  Output pin:    Value=1
  Writing:       Value=0
  Verify:        Value=0
```

USERLEDSは、単一操作でLEDを制御するサブシステムです。また、printfのようなコマンドラインを使用することもできます。このデモでは、オンボードの黄色LEDを1秒ごとにオンとオフにします。

`leds`と入力すると、LEDが同時に点滅する様子が観察できます。

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

以下のデモ動画でgpioとledsの動作を確認してください。

<div style={{ maxWidth: '100%', textAlign: 'center' }}>
  <video style={{ width: '100%', height: 'auto' }} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/xiao-ra4m1-nuttx-demo.mp4" type="video/mp4" />
  </video>
</div>

NuttX RTOSに関する詳細情報は、[NuttX Documentation](https://nuttx.apache.org/docs/latest/index.html)をご覧ください。

## ✨ コントリビュータープロジェクト

- このプロジェクトは Seeed Studio [コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) によってサポートされています。
- 特に [Rodrigo](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=92947609) さんの献身的な努力に感謝します。あなたの成果は[展示](https://wiki.seeedstudio.com/ja/contributors/)される予定です。

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを用意しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>