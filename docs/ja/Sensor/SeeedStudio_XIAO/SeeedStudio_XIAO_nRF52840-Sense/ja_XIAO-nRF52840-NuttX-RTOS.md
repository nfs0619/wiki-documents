---
description: XIAO nRF52840(sense) と NuttX(RTOS)
title: XIAO nRF52840(sense) と NuttX(RTOS)
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-nRF52840-NuttX/nuttx.webp
slug: /ja/xiao_nrf52840_nuttx
last_update:
    date: 2025/02/12
    author: rcsim
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio XIAO nRF52840 と NuttX(RTOS)

## はじめに

[NuttX](https://nuttx.apache.org/) は、標準準拠と小型フットプリントで広く認識されている成熟したリアルタイムオペレーティングシステム (RTOS) です。NuttX の主な特徴の一つはそのスケーラビリティであり、8ビットマイクロコントローラーから64ビットシステムまでの環境で使用することができます。この柔軟性は、POSIX および ANSI 標準に準拠することで実現されており、異なるアーキテクチャ、ファミリー、半導体ベンダーの幅広いチップで同様の NuttX 機能を試すことが可能です。

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO-nRF52840-NuttX/nuttx.svg"/></div>

さらに、NuttX は USB、Ethernet、オーディオ、グラフィックスサブシステムなど、多くの高度で便利な機能を提供します。これらの特徴により、NuttX はさまざまな種類のハードウェアで動作可能な汎用性と堅牢性を備えた RTOS を求める開発者にとって魅力的な選択肢となっています。

NuttX は、膨大で継続的に拡大する数のボードをサポートしています。[公式ドキュメント](https://nuttx.apache.org/docs/latest/platforms/) には、アーキテクチャやシステムオンチップ (SoC) シリーズごとに整理されたサポートされているボードの包括的なリストが掲載されています。

例えば、NuttX ドキュメントの [Seeed Studio Xiao nRF52840](https://nuttx.apache.org/docs/latest/platforms/arm/nrf52/boards/xiao-nrf52840/index.html) ページには、サポートされている各機能の詳細な説明と、それらを利用する方法が記載されています。また、Nordic Semiconductor nRF52 シリーズチップに関する特定のページも [NuttX ドキュメント](https://nuttx.apache.org/docs/latest/platforms/arm/nrf52/index.html) に用意されています。

## ツールのセットアップ

XIAO nRF52840 で NuttX を始める最初のステップは、hex ファイル形式を uf2 に変換するために必要な UF2 ツールをインストールし、その後 NuttX のソースコード自体をダウンロードすることです。NuttX は [ガイド](https://nuttx.apache.org/docs/latest/quickstart/install.html) を提供しており、異なるプラットフォームに対応しています。以下の手順に従ってください：

1. UF2 ツールをダウンロードします：

    ```bash
    git clone https://github.com/microsoft/uf2.git
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

Apache Nuttx は 2 つのプロジェクトに分かれています：

- Nuttx: カーネル、ドライバ、サブシステムが実装されています。
- Apps: ツール、シェル、ネットワークユーティリティ、ライブラリ、インタープリタのコレクションが含まれています。

## アプリケーション

アプリケーションを開始するには、NuttX に構成をロードする必要があります。以下のコマンドを実行してください：

```bash
./tools/configurate.sh board_name:your_application
```

また、サポートされているボードのリストを確認するには、以下のコマンドを実行できます：

```bash
./tools/configurate.sh -L
```

4. NuttX をビルドします：

    ```bash
    cd nuttx
    make distclean
    ./tools/configure.sh xiao-nrf52840:nsh
    make V=1
    ```

5. UF2 ツールを使用して nuttx.hex を UF2 形式に変換します：

    ```bash
    python3 uf2/utils/uf2conv.py -c -f 0xADA52840 -i nuttx.hex -o nuttx.uf2
    ```

6. Seeed Studio XIAO nRF52840 を接続し、ボードをブートローダーモードにするために素早く 2 回クリックします。ボードは USB マスストレージデバイスとして認識されます。その後、「nuttx.uf2」をデバイスにコピーします。

## ハンズオン

NuttXを実際に操作してみましょう。このセッションでは、NSH、USBNSH、JUMBOの3つのアプリケーションが利用可能です。

### NSH

NuttShell（NSH）は、NuttXで使用されるシェルシステムで、bashやその他の類似オプションに似ています。豊富なコマンドセット、スクリプト機能、自作アプリケーションを「ビルトイン」（同じNuttXバイナリの一部）として実行する機能をサポートしています。NSHの設定では、UART0で115200 bpsのコンソールが有効になります。

まず、以前の設定をクリアしてビルドプロセスを開始します。

```bash
cd ~/nuttxspace/nuttx
make distclean
```

次に、xiao-nrf5200ボード用のNSH設定を選択します。

```bash
./tools/configurate.sh xiao-nrf52840:nsh
```

ソースコードをコンパイルします。

```bash
make -j
```

U2Fツールを使用してnuttx.hexをUF2形式に変換します。

```bash
python3 uf2/utils/uf2conv.py -c -f 0xADA52840 -i nuttx.hex -o nuttx.uf2
```

ファームウェアをボードにロードし、USB-to-SerialをTXおよびRXピンに接続してから、miniconやpicocomなどのシリアル通信プログラムを実行します。

```bash
picocom -b 115200 /dev/ttyUSB0
```

NuttShellコンソールにアクセスします。

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> 
```

`?`を入力すると、利用可能なコマンドやビルトインアプリケーションのオプションにアクセスできます。

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

おめでとうございます！これでNuttXとの最初の対話が完了しました。

### USBNSH

NSH設定と似ていますが、CDC/ACMシリアル（USBポートでコンソールが有効、115200 bps）を使用します。

まず、以前の設定をクリアしてビルドプロセスを開始します。

```bash
cd ~/nuttxspace/nuttx
make distclean
```

次に、xiao-nrf5200ボード用のUSBNSH設定を選択します。

```bash
./tools/configurate.sh xiao-nrf52840:usbnsh
```

ソースコードをコンパイルします。

```bash
make -j
```

U2Fツールを使用してnuttx.hexをUF2形式に変換します。

```bash
python3 uf2/utils/uf2conv.py -c -f 0xADA52840 -i nuttx.hex -o nuttx.uf2
```

ファームウェアをボードにロードし、miniconやpicocomなどのシリアル通信プログラムを実行します。

```bash
picocom -b 115200 /dev/ttyACM0
```

Enterキーを3回押すと、以下のメッセージがターミナルに表示されます。

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> 
```

### JUMBO

この設定では、gpioとledsという2つのサンプルアプリケーションが有効になります。汎用入出力（GPIO）はマイクロコントローラーの最も基本的な部分であり、外部世界と接続することを可能にします。このセクションでは、NSHを使用してこれらのピンにアクセスし、設定します。まず、以前の設定をクリアします。

```bash
cd ~/nuttxspace/nuttx
make distclean
```

xiao-nrf52840ボード用のjumbo設定を選択します。

```bash
./tools/configurate.sh xiao-nrf52840:jumbo
```

ソースコードをコンパイルします。

```bash
make -j
```

ファームウェアをボードにロードし、miniconやpicocomなどのシリアル通信プログラムを実行します。

```bash
picocom -b 115200 /dev/ttyACM0
```

Enterキーを3回押すと、以下のメッセージがターミナルに表示されます。

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

GPIOデバイスファイルが作成されたことを確認するには、`ls /dev`と入力します。入力後、いくつかのGPIOが[xiao-nrf52840.h](https://github.com/apache/nuttx/blob/5b9d535ce6d7089a55742a748d7111f31ec74204/boards/arm/nrf52/xiao-nrf52840/src/xiao-nrf52840.h#L61)で定義されていることがわかります。これらは以下を表します：

- オンボードRGB LED:

  - RGB_RED   -> P0.26
  - RGB_GREEN -> P0.30
  - RGB_BLUE  -> P0.06

- GPIOs:
  - 1入力          - P0.02(/dev/gpio0)
  - 1割り込み入力 - P0.03(/dev/gpio2)
  - 1出力          - P0.28(/dev/gpio1)

```bash
nsh> ls /dev
/dev:
 console
 gpio0
 gpio1
 gpio2
 null
 ttyACM0
 userleds
 zero
nsh> 
```

以下のコマンドを使用してgpio0とgpio2（割り込み付き）を読み取り、gpio1に書き込みます。

```bash
nsh> gpio /dev/gpio0
Driver: /dev/gpio0
  Input pin:     Value=0
nsh> gpio /dev/gpio0
Driver: /dev/gpio0
  Input pin:     Value=1

nsh> gpio -o 0 /dev/gpio1
Driver: /dev/gpio1
  Output pin:    Value=1
  Writing:       Value=0
  Verify:        Value=0

nsh> gpio -w 1 /dev/gpio2
Driver: /dev/gpio2
  Interrupt pin: Value=0
  Verify:        Value=1
```

USERLEDSは、単一の操作でLEDを制御するサブシステムです。また、printfのようなコマンドラインを使用することもできます。このデモでは、オンボードのRGB LEDを1秒ごとに点灯および消灯します。

`leds`と入力すると、LEDが同時に点滅するのが観察できます。

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> leds
leds_main: Starting the led_daemon
leds_main: led_daemon started

led_daemon (pid# 3): Running
led_daemon: Opening /dev/userleds
led_daemon: Supported LEDs 0x07
led_daemon: LED set 0x01
nsh> led_daemon: LED set 0x02
led_daemon: LED set 0x03
led_daemon: LED set 0x04
led_daemon: LED set 0x05
led_daemon: LED set 0x06
led_daemon: LED set 0x07
```

以下のビデオで、GPIOとLEDのデモ例をご覧ください：

<div style={{ maxWidth: '100%', textAlign: 'center' }}>
  <video style={{ width: '100%', height: 'auto' }} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO-nRF52840-NuttX/nrf52840_nuttx_demo.mp4" type="video/mp4" />
  </video>
</div>

NuttX RTOSに関する詳細情報は、[NuttX Documentation](https://nuttx.apache.org/docs/latest/index.html)をご覧ください。

## ✨ コントリビュータープロジェクト

- このプロジェクトは、Seeed Studioの[コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)によってサポートされています。
- 特に[Rodrigo](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=92947609)さんの献身的な努力に感謝します。あなたの作業は[こちら](https://wiki.seeedstudio.com/ja/contributors/)で展示されます。

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！製品をご利用いただく際に、スムーズな体験を提供するため、さまざまなサポートを用意しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>