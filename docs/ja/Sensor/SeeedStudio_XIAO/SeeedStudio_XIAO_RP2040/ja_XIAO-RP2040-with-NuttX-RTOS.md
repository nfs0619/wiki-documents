---
description: Seeed Studio XIAO RP2040とNuttX
title: XIAO RP2040とNuttX(RTOS)
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/xiao-rp2040-with-nuttx
last_update:
    date: 8/18/2024
    author: halyssonJr
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio XIAO RP2040とNuttX(RTOS)

## はじめに

[NuttX](https://nuttx.apache.org/)は、標準準拠と小型フットプリントで広く認識されている成熟したリアルタイムオペレーティングシステム（RTOS）です。NuttXの主な特徴の1つはそのスケーラビリティであり、8ビットマイクロコントローラーから64ビットシステムまでの環境で使用することができます。この柔軟性はPOSIXおよびANSI標準への準拠によって実現されており、異なるアーキテクチャ、ファミリー、半導体ベンダーの幅広いチップで類似したNuttX機能を試すことが可能です。

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/NuttX/nuttx.svg"/></div>

さらに、NuttXはUSB、Ethernet、Audio、Graphicsサブシステムなど、多くの高度で便利な機能を提供します。これらの特徴により、NuttXはさまざまな種類のハードウェアで動作可能な汎用性と堅牢性を備えたRTOSを求める開発者にとって魅力的な選択肢となります。

NuttXは、広範囲にわたる、そして継続的に拡大している数多くのボードをサポートしています。[公式ドキュメント](https://nuttx.apache.org/docs/latest/platforms/)には、アーキテクチャやSystem-on-Chip (SoC)シリーズごとに整理されたサポートボードの包括的なリストが掲載されています。

例えば、NuttXドキュメントの[Seeed Studio Xiao RP2040](https://nuttx.apache.org/docs/latest/platforms/arm/rp2040/boards/seeed-xiao-rp2040/index.html)ページでは、各サポート機能の詳細な説明とその利用方法についての指示が提供されています。

## ツールセットアップ

NuttXを始める最初のステップは、必要なツール一式、作業するアーキテクチャ用のツールチェーン、そしてNuttXのソースコード自体をダウンロードすることです。Nuttxは異なるプラットフォーム向けの[ガイド](https://nuttx.apache.org/docs/latest/quickstart/install.html)を提供しています。

環境をインストールしてセットアップした後、以下の手順に従ってください：

1. Raspberry Pi Pico SDKをダウンロードします：

```
git clone -b 1.1.2 https://github.com/raspberrypi/pico-sdk.git
```

2. PICO_SDK_PATH環境変数を設定します：

```
export PICO_SDK_PATH=<pico-sdkディレクトリへの絶対パス>
```

3. ワークスペースを作成します：

```
mkdir nuttxspace
```

4. リポジトリをクローンします：

```
cd nuttxspace
git clone https://github.com/apache/nuttx.git nuttx
git clone https://github.com/apache/nuttx-apps apps
```

Apache Nuttxは2つのプロジェクトに分かれています：

- Nuttx: カーネル、ドライバー、サブシステムが実装されています。
- Apps: ツール、シェル、ネットワークユーティリティ、ライブラリ、インタープリターのコレクションが含まれています。

## アプリケーション

アプリケーションを開始するには、NuttXで構成をロードする必要があります。以下のコマンドを実行してください：

```
./tools/configurate.sh board_name:your_application
```

また、サポートされているボードのリストを確認するには、以下のコマンドを実行することも可能です：

```
./tools/configurate.sh -L
```

スクリプトを実行した後、NuttXをコンパイルする必要があります。これには、[Make](https://nuttx.apache.org/docs/latest/quickstart/compiling_make.html)または[CMake](https://nuttx.apache.org/docs/latest/quickstart/compiling_cmake.html)を使用する2つの方法があります。

## プログラミング

コンパイルが成功した後、次の目標はBOOTSELを使用してプログラミングを行うことです。そのためには、以下の手順に従ってください。

**ステップ 1**: ボタン `B`（ブート）を押しながら、Seed Studio XIAO RP2040 をUSBポートに接続します。ボードはUSBマスストレージデバイス `RPI-RP2` として認識されます。

**ステップ 2**: ワークスペースで `nuttx` ディレクトリに移動し、`nuttx.uf2` を Seed Studio XIAO RP2040 にコピーします。

**ステップ 3**: コンピュータ上で新しいUSBデバイスを検索します。

**ステップ 4**: Seed Studio XIAO RP2040 とシリアル通信を開きます。

## ハンズオン

NuttX を実際に操作してみましょう。このセッションでは、USB NSH、GPIO、USERLEDS、WS2812 ドライバの4つのアプリケーションが利用可能です。

### USBNSH

NuttXShell(NSH) は、NuttXで使用されるシェルシステムで、bashやその他の類似オプションに似ています。豊富なコマンドセット、スクリプト作成、および独自のアプリケーションを「組み込み」として実行する機能をサポートしています（NuttXバイナリの一部として）。

ビルドプロセスを開始するには、以前の設定をクリアします。

```
$ cd ~/nuttxspace/nuttx
$ make distclean
```

次に、seeed-xiao-rp2040 ボード用の USBNSH 設定を選択します。

```
$ ./tools/configurate.sh seeed-xiao-rp2040:usbnsh
```

ソースコードをコンパイルします。

```
$ make -j
```

プログラミング後、シリアル通信を開きます。

```
picocom -b 115200 /dev/ttyACM0
```

Enterキーを3回押すと、次のメッセージがターミナルに表示されます。

```
NuttShell (NSH) NuttX-12.5.1
nsh> 
```

`?` を入力すると、コマンドと組み込みアプリケーションの利用可能なオプションにアクセスできます。

```
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

NuttX に挨拶してみましょう。`hello` と入力すると、次のようにコマンドが実行されます。

```      
nsh> hello
Hello, World!!
```

おめでとうございます！NuttX との最初のインタラクションが完了しました。

### GPIO ドライバ

汎用入出力（GPIO）は、マイクロコントローラの最も基本的な部分であり、外部世界と接続することを可能にします。このセクションでは、NSH を使用してこれらのピンにアクセスし、設定します。まず、以前の設定をクリアします。

```
$ cd ~/nuttxspace/nuttx
$ make distclean
```

seeed-xiao-rp2040 ボード用の GPIO 設定を選択します。

```
$ ./tools/configurate.sh seeed-xiao-rp2040:gpio
```

ソースコードをコンパイルします。

```
$ make -j
```

プログラミング後、シリアル通信を開きます。

```
picocom -b 115200 /dev/ttyACM0
```

Enterキーを3回押すと、次のメッセージがターミナルに表示されます。

```
NuttShell (NSH) NuttX-12.5.1
nsh>
```

このアプリケーションと対話するために受け入れられるオプションを確認するには、`gpio -h` を入力します。すると、パラメータのリストが返されます。

```
NuttShell (NSH) NuttX-12.5.1
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

GPIO デバイスファイルが作成されたことを確認するには、`ls /dev` を入力します。入力後、いくつかの GPIO が [seed-studio-gpio.c](https://github.com/apache/nuttx/blob/9d5b9b7c056e59c2fcc81e7029c95a995140063c/boards/arm/rp2040/seeed-xiao-rp2040/src/rp2040_gpio.c#L49-L61) に定義されていることがわかります。これらは以下を表します：

- オンボードの3つのLED（gpio 18、gpio 17、gpio 16）
- 1つの入力（gpio 6）
- 1つの割り込み入力（gpio 7）

```
nsh> ls /dev
/dev:
 console
 gpio16
 gpio17
 gpio18
 gpio6
 gpio7
 null
 ttyACM0
```

Seeed Studio RP2040 の回路図によると、GPIO レベルがゼロに設定されるとボードのLEDが点灯します。

GPIO 出力を制御するには、パラメータ `-o`、値（ゼロまたは1）、およびパス（/dev/gpio）を渡す必要があります。

以下の2つのコマンドを実行すると、黄色のLEDが点滅します。
```
nsh> gpio -o 0 /dev/gpio17
Driver: /dev/gpio17
  Output pin:    Value=1
  Writing:       Value=0
  Verify:        Value=0

nsh> gpio -o 1 /dev/gpio17
Driver: /dev/gpio17
  Output pin:    Value=1
  Writing:       Value=1
  Verify:        Value=1
```
<div align="center"><img width ="{50}" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/NuttX/seeed-studio-rp2040-gpio-turn-on-led-green.jpg"/></div>

同様に、赤色のLEDでも同じ結果が得られます。
```
nsh> gpio -o 0 /dev/gpio16
Driver: /dev/gpio16
  Output pin:    Value=1
  Writing:       Value=0
  Verify:        Value=0

nsh> gpio -o 1 /dev/gpio16
Driver: /dev/gpio16
  Output pin:    Value=1
  Writing:       Value=1
  Verify:        Value=1
```
<div align="center"><img width ="{50}" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/NuttX/seeed-studio-rp2040-gpio-turn-on-led-red.jpg"/></div>

### USERLED

USERLEDS は、単一の操作でLEDを制御できるサブシステムです。また、printfのようなコマンドラインを使用することもできます。このデモでは、オンボードのLEDを1秒ごとに点灯および消灯させます。

まず、以前の設定をクリアします。

```
$ cd ~/nuttxspace/nuttx
$ make distclean
```

次のコマンドを使用して、userled アプリケーション用にボードを設定します。

```
$ ./tools/configurate.sh seeed-xiao-rp2040:userleds
```

ソースコードをコンパイルします。

```
$ make -j
```

プログラミング後、シリアル通信を開き、Enterキーを3回押します。これまでのアプリケーションで示した手順に従ってください。

`ls /dev/` を入力すると、デバイスのリストが表示され、`userleds` ファイルが作成されたことが確認できます。

```
nsh> ls /dev/
/dev:
 console
 userleds
 null
 ttyACM0
 ttyS0
```

`leds` を入力すると、LED が同時に点滅するのが観察できます。

```
NuttShell (NSH) NuttX-12.5.1
nsh> leds
leds_main: Starting the led_daemon
leds_main: led_daemon started

led_daemon (pid # 3): Running
led_daemon: Opening /dev/userled
led_daemon: Supported LEDs 0x07
led_daemon: LED set 0x01
led_daemon: LED set 0x00
led_daemon: LED set 0x01
led_daemon: LED set 0x00
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/NuttX/seeed-studio-userleds.gif" style={{width:300, height:'auto'}}/></div>

## WS2812 LED

WS2812 ドライバを使用すると、ws2812 プロトコルを使用するスマートピクセルを制御できます。このアプリケーションは NSH 上でコマンドを呼び出してサンプルを実行できます。

前の設定をクリアする

```
$ cd ~/nuttxspace/nuttx
$ make distclean
```

seeed-xiao-rp2040 ボード用に ws2812 設定を選択します。

```
$ ./tools/configurate.sh seeed-xiao-rp2040:ws2812
```

ソースコードをコンパイルします。

```
$ make -j
```

コンパイルが完了したら、ボードをプログラミングし、シリアル通信を開いて Enter を 3 回押します。前のアプリケーションで示した手順に従います。`?` を入力すると、ws2812 アプリケーションが利用可能であることが確認できます。

```
NuttShell (NSH) NuttX-12.5.1
nsh> ?
help usage:  help [-v] [<cmd>]

    .           cp          exit        mkdir       rm          uname       
    [           cmp         expr        mkrd        rmdir       umount      
    ?           dirname     false       mount       set         unset       
    alias       dd          fdinfo      mv          sleep       uptime      
    unalias     df          free        pidof       source      usleep      
    basename    dmesg       help        printf      test        xd          
    break       echo        hexdump     ps          time        
    cat         env         kill        pwd         true        
    cd          exec        ls          reboot      truncate    

Builtin Apps:
    getprime    hello       nsh         ostest      sh          ws2812      
nsh> 
```

アプリケーションを実行する前に、`ls /dev/` フォルダが作成され、`leds0` ファイルが存在することを確認する必要があります。このファイルは ws2812 ドライブに使用されます。

```
nsh> ls /dev/
/dev:
 console
 leds0
 null
 ttyACM0
 ttyS0
```

`ws2812 -h` を入力すると、このアプリケーションと対話するために受け入れられるパラメータのリストが表示されます。

```
nsh> ws2812 -h
Usage: ws2812 [OPTIONS]

Arguments are "sticky".  For example, once the device path is
specified, that path will be re-used until it is changed.
  [-p path] selects the ws2812 device.  Default: /dev/leds0 Current: /dev/leds0
  [-l leds] selects number of ws2812s in the chain.  Default: 1 Current: 1
  [-r repeat] selects the number change cycles.  Default: 4 Current: 4
  [-d delay] selects delay between updates.  Default: 20000 us Current: 20000 us
```

アプリケーションを開始するには、`ws2812` と入力します。すると、LED の色が変化するのが確認できます。

```
nsh> ws2812
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/NuttX/seeed-studio-rp2040-rgb.gif" style={{width:400, height:'auto'}}/></div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できるだけスムーズな体験を提供するために、さまざまなサポートを提供しております。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>