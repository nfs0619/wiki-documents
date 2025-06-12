---
description: XIAO ESP32C6 と NuttX(RTOS)
title: XIAO ESP32C6 と NuttX(RTOS)
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-ESP32C6-NuttX/nuttx.webp
slug: /ja/xiao_esp32c6_nuttx
last_update:
    date: 05/08/2025
    author: rcsim
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio XIAO ESP32C6 と NuttX(RTOS)

## はじめに

[NuttX](https://nuttx.apache.org/) は、標準準拠と小型フットプリントで広く認識されている成熟したリアルタイムオペレーティングシステム (RTOS) です。NuttX の主な特徴の一つはそのスケーラビリティであり、8ビットマイクロコントローラーから64ビットシステムまでの環境で使用することができます。この柔軟性は POSIX と ANSI 標準への準拠によって実現されており、異なるアーキテクチャ、ファミリー、半導体ベンダーの幅広いチップで同様の NuttX 機能を試すことが可能です。

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO-ESP32C6-NuttX/nuttx.svg"/></div>

さらに、NuttX は USB、Ethernet、Audio、Graphics サブシステムなどの多くの高度で便利な機能を提供します。これらの特徴により、さまざまな種類のハードウェアで動作可能な汎用性と堅牢性を備えた RTOS を求める開発者にとって魅力的な選択肢となっています。

NuttX は膨大で継続的に拡大する数のボードをサポートしています。[公式ドキュメント](https://nuttx.apache.org/docs/latest/platforms/) には、アーキテクチャやシステムオンチップ (SoC) シリーズごとに整理されたサポートされているボードの包括的なリストが掲載されています。

例えば、NuttX ドキュメントの [Seeed Studio XIAO ESP32C6](https://nuttx.apache.org/docs/latest/platforms/risc-v/esp32c6/boards/esp32c6-xiao/index.html) ページでは、各サポート機能の詳細な説明とその利用方法に関する指示が提供されています。また、NuttX ドキュメントには [Espressif ESP32C6](https://nuttx.apache.org/docs/latest/platforms/risc-v/esp32c6/index.html) シリーズチップに関する特定のページがあり、サポートされている MCU と周辺機器のリストを確認できます。

## インストール

NuttX ドキュメントには、さまざまなプラットフォーム向けの[ガイド](https://nuttx.apache.org/docs/latest/quickstart/install.html)が提供されています。Seeed Studio XIAO ESP32C6 の場合、以下の手順に従ってください：

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

- Nuttx: カーネル、ドライバー、サブシステムが実装されています。
- Apps: ツール、シェル、ネットワークユーティリティ、ライブラリ、インタープリタのコレクションが含まれています。

## アプリケーション

アプリケーションを開始するには、NuttX に設定をロードする必要があります。以下のコマンドを実行してください：

```bash
./tools/configurate.sh board_name:your_application
```

また、サポートされているボードのリストを確認するには、以下のコマンドを実行することも可能です：

```bash
./tools/configurate.sh -L
```

4. NuttX をビルドします (ビルドプロセスでは、nuttx.bin を含むファームウェアバイナリが生成されます)：

    ```bash
    cd nuttx
    make distclean
    ./tools/configure.sh esp32c6-xiao:usbnsh
    make V=1
    ```

5. RESET ボタンと BOOT ボタンを使用して「ブートローダーモード」に入ることができます。BOOT キーを押し続けながら電源を入れ、その後 RESET キーを一度押してください。

6. esptool.py を使用してファームウェアをロードします：

    ```bash
    make flash ESPTOOL_PORT=/dev/ttyACM0 ESPTOOL_BINDIR=./
    ```

## 実践

NuttXを実際に操作してみましょう。このセッションでは、USBNSH、GPIO、WIFIの4つのアプリケーションを利用できます。

### USBNSH

NuttShell(NSH)は、NuttXで使用されるシェルシステムで、bashやその他の類似オプションに似ています。豊富なコマンドセット、スクリプト機能、そして独自のアプリケーションを「builtin」（同じNuttXバイナリの一部）として実行する機能をサポートしています。NSHの設定では、USBコンソールを115200bpsで有効にします。

まず、以前の設定をクリアしてビルドプロセスを開始します。

```bash
cd ~/nuttxspace/nuttx
make distclean
```

次に、esp32c6-xiaoボード用のNSH設定を選択します。

```bash
./tools/configurate.sh esp32c6-xiao:usbnsh
```

ソースコードをコンパイルします。

```bash
make -j
```

ボードにファームウェアをロードし、ボードを再起動して、CDC/ACMシリアルインターフェースを使用してUSB経由でNuttShell(NSH)コンソールに接続します。

```bash
picocom -b 115200 /dev/ttyACM0
```

NuttShellコンソールにアクセスします。

```bash
NuttShell (NSH) NuttX-12.9.0
nsh> uname -a
NuttX  12.9.0 ebf883ba72 May  8 2025 17:15:47 risc-v esp32c6-xiao
nsh> 
```

`?`を入力すると、利用可能なコマンドと組み込みアプリケーションのオプションにアクセスできます。

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

おめでとうございます。これでNuttXとの最初のインタラクションが完了しました。

### GPIO

この設定では、GPIOの例を示すアプリケーションを有効にします。汎用入出力(GPIO)はマイクロコントローラーの最も基本的な部分であり、外部世界と接続することを可能にします。このセクションでは、NSHを使用してピンを自由にアクセスおよび設定します。まず、以前の設定をクリアします。

```bash
cd ~/nuttxspace/nuttx
make distclean
```

xiao-esp32c6ボード用のGPIO設定を選択します。

```bash
./tools/configurate.sh esp32c6-xiao:gpio
```

ソースコードをコンパイルします。

```bash
make -j
```

ボードにファームウェアをロードし、miniconやpicocomなどのシリアル通信プログラムを実行します。

```bash
picocom -b 115200 /dev/ttyACM0
```

```bash
NuttShell (NSH) NuttX-12.9.0
nsh>
```

このアプリケーションと対話するために受け入れられるオプションを確認するには、`gpio -h`を入力します。すると、パラメータのリストが返されます。

```bash
NuttShell (NSH) NuttX-12.9.0
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

GPIOデバイスファイルが作成されたことを確認するには、`ls/dev`を入力します。入力後、いくつかのGPIOが宣言されていることが確認できます。これらはboards/risc-v/esp32c6/esp32c6-xiao/src/esp32c6_gpio.cで定義されています。

- GPIOs
  - 1 Input w/ IRQ -> GPIO2 -> /dev/gpio1
  - 1 Output       -> GPIO1 -> /dev/gpio0

```bash
nsh> ls /dev
/dev:
 console
 gpio0
 gpio1
 null
 ttyACM0
 ttyS0
 zero
nsh> 
```

以下のコマンドを使用して、GPIO1(/dev/gpio1)を読み取り（割り込み付き）、GPIO2(/dev/gpio0)に書き込みを行います。

```bash
NuttShell (NSH) NuttX-12.9.0
nsh> gpio -o 1 /dev/gpio0
Driver: /dev/gpio0
  Output pin:    Value=1
  Writing:       Value=1
  Verify:        Value=1
nsh> 
nsh> gpio -o 0 /dev/gpio0
Driver: /dev/gpio0
  Output pin:    Value=1
  Writing:       Value=0
  Verify:        Value=0
nsh> gpio -w 1 /dev/gpio1
Driver: /dev/gpio1
  Interrupt pin: Value=0
  Verify:        Value=1
```

### WIFI

この設定では、以下のコマンドを使用して構成および初期化できる無線LANネットワークインターフェースを有効にします。

```bash
nsh> ifup wlan0
nsh> wapi psk wlan0 mypasswd 3
nsh> wapi essid wlan0 myssid 1
nsh> renew wlan0
```

この場合、SSID「myssid」を持つアクセスポイントに接続し、パスワード「mypasswd」を使用します。renewコマンドを使用してDHCP経由でIPアドレスを取得します。その結果を確認するには、後でifconfigを実行します。

まず、以前の設定をクリアします。

```bash
cd ~/nuttxspace/nuttx
make distclean
```

xiao-esp32c6ボード用のwifi設定を選択します。

```bash
./tools/configurate.sh esp32c6-xiao:wifi
```

ソースコードをコンパイルします。

```bash
make -j
```

ボードにファームウェアをロードし、miniconやpicocomなどのシリアル通信プログラムを実行します。

```bash
picocom -b 115200 /dev/ttyACM0
```

```bash
NuttShell (NSH) NuttX-12.9.0
nsh>
```

次に、[WAPI NuttXドキュメント](https://nuttx.apache.org/docs/latest/applications/wireless/wapi/index.html)に記載されているWAPIコマンドを使用します。

```bash
NuttShell (NSH) NuttX-12.9.0
nsh> wapi psk wlan0 nuttxpwd 3
nsh> wapi essid wlan0 nuttxnw 1
nsh> renew wlan0
nsh> ifconfig
wlan0   Link encap:Ethernet HWaddr a0:85:e3:0e:4a:30 at RUNNING mtu 576
        inet addr:192.168.59.144 DRaddr:192.168.59.134 Mask:255.255.255.0

nsh> ping 8.8.8.8
PING 8.8.8.8 56 bytes of data
56 bytes from 8.8.8.8: icmp_seq=0 time=50.0 ms
56 bytes from 8.8.8.8: icmp_seq=1 time=40.0 ms
56 bytes from 8.8.8.8: icmp_seq=2 time=30.0 ms
56 bytes from 8.8.8.8: icmp_seq=3 time=60.0 ms
56 bytes from 8.8.8.8: icmp_seq=4 time=100.0 ms
56 bytes from 8.8.8.8: icmp_seq=5 time=100.0 ms
56 bytes from 8.8.8.8: icmp_seq=6 time=140.0 ms
56 bytes from 8.8.8.8: icmp_seq=7 time=40.0 ms
56 bytes from 8.8.8.8: icmp_seq=8 time=50.0 ms
56 bytes from 8.8.8.8: icmp_seq=9 time=30.0 ms
10 packets transmitted, 10 received, 0% packet loss, time 10100 ms
rtt min/avg/max/mdev = 30.000/64.000/140.000/34.985 ms
nsh> nslookup google.com
Host: google.com Addr: 142.251.128.238
nsh> nslookup nuttx.apache.org
Host: nuttx.apache.org Addr: 151.101.2.132
```

以下は日本語への翻訳です：

Wi-Fiのデモ動画をご覧ください：

<div style={{ maxWidth: '100%', textAlign: 'center' }}>
  <video style={{ width: '100%', height: 'auto' }} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO-ESP32C6-NuttX/xiao-esp32c6-nuttx-wifi.mp4" type="video/mp4" />
  </video>
</div>

NuttX RTOSに関する詳細情報は、[NuttX Documentation](https://nuttx.apache.org/docs/latest/index.html)をご覧ください。

## ✨ コントリビュータープロジェクト

- このプロジェクトはSeeed Studioの[コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)によってサポートされています。
- 特に[Rodrigo](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=92947609)さんの献身的な努力に感謝します。あなたの作品は[展示](https://wiki.seeedstudio.com/ja/contributors/)されます。

## 技術サポートと製品に関するディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際の体験をスムーズにするために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>