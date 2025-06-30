---
description: XIAO ESP32C3 フラッシュストレージ
title: XIAO ESP32C3 フラッシュストレージ
keywords:
- XIAO ESP32C3
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/xiaoesp32c3-flash-storage
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# XIAO ESP32C3 データを異なる方法で永続的に保存する

開発ボードを使用する際、多くの人がチップ上のフラッシュメモリを使用して重要なデータを保存したいと考えるでしょう。これには、異常な開発ボードの状況でもデータが失われないようにする保存方法が必要です。

このチュートリアルでは、以下の2つの異なる保存方法を使用して、XIAO ESP32C3のフラッシュメモリに重要なデータを保存する方法を紹介します。

1. 最初のガイドでは、`Preferences.h`ライブラリを使用してESP32のフラッシュメモリに**データを永続的に保存する**方法を説明します。フラッシュメモリに保存されたデータは、リセットや電源障害が発生しても保持されます。`Preferences.h`ライブラリを使用すると、ネットワーク認証情報、APIキー、しきい値、またはGPIOの最後の状態などのデータを保存するのに便利です。フラッシュメモリからデータを保存および読み取る方法を学びます。

2. 次のガイドでは、XIAO ESP32C3の**EEPROM**とは何か、それが何に役立つのかを説明します。また、EEPROMへの書き込みと読み取り方法を示し、学んだ概念を実践するためのプロジェクト例を構築します。

この記事の大部分は[**RandomNerdTutorials.com**](https://randomnerdtutorials.com/)からのものであり、一部のプログラムや説明はXIAO ESP32C3に適合するように若干修正されています。[**RandomNerdTutorials.com**](https://randomnerdtutorials.com/)に感謝し、チュートリアルと方法を提供していただきました。以下は元のソースへの直接リンクです。

- [ESP32 Flash Memory – Store Permanent Data (Write and Read)](https://randomnerdtutorials.com/esp32-flash-memory/)

- [Arduino EEPROM Explained – Remember Last LED State](https://randomnerdtutorials.com/arduino-eeprom-explained-remember-last-led-state/)

- [ESP32 Save Data Permanently using Preferences Library](https://randomnerdtutorials.com/esp32-save-data-permanently-preferences/)

## Preferencesライブラリを使用してデータを永続的に保存する

### Preferences.h ライブラリ

このライブラリは、Arduino IDEにXIAO ESP32C3ボードをインストールすると自動的に「インストール」されます。

`Preferences.h`ライブラリは、キーと値のペアを通じて変数の値を保存するために使用されます。データを永続的に保存することは以下のような場合に重要です：

- 変数の最後の状態を記憶する;

- 設定を保存する;

- 家電が何回作動したかを保存する;

- または、永続的に保存する必要があるその他のデータ型。

XIAO ESP32C3を使用してファイルや非常に長い文字列やデータを保存したい場合は、拡張ボードとSDカードを使用することをお勧めします。このチュートリアルで紹介する2つの方法は推奨しません。

以下は**Preferences.hライブラリの便利な関数**です。

**Func 1**. `begin()`メソッドは、定義された名前空間で「ストレージスペース」を開きます。`false`引数は、読み書きモードで使用することを意味します。読み取り専用モードで名前空間を開くまたは作成するには、`true`を使用します。

```c
preferences.begin("my-app", false);
```

この場合、名前空間の名前は`my-app`です。名前空間の名前は15文字に制限されています。

**Func 2**. 開かれた名前空間のすべての設定をクリアするには、`clear()`を使用します（名前空間自体は削除されません）：

```c
preferences.clear();
```

**Func 3**. 開かれた名前空間からキーを削除します：

```c
preferences.remove(key);
```

**Func 4**. 開かれた名前空間の設定を閉じるには、`end()`メソッドを使用します：

```c
preferences.end();
```

**Func 5**. 保存したい変数の型に応じて異なるメソッドを使用する必要があります。

`Preferences.h`ライブラリを使用する場合、保存したいデータ型を定義する必要があります。その後、そのデータを読み取る場合、保存されたデータ型を知っている必要があります。言い換えれば、書き込みと読み取りのデータ型は同じである必要があります。

`Preferences.h`を使用して以下のデータ型を保存できます：char、Uchar、short、Ushort、int、Uint、long、Ulong、long64、Ulong64、float、double、bool、string、およびbytes。

<table align="center">
  <tbody><tr>
      <td align="center">Char</td>
      <td align="left"><code>putChar(const char*key, int8_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Unsigned Char</td>
      <td align="left"><code>putUChar(const char* key, int8_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Short</td>
      <td align="left"><code>putShort(const char*key, int16_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Unsigned Short</td>
      <td align="left"><code>putUShort(const char* key, uint16_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Int</td>
      <td align="left"><code>putInt(const char*key, int32_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Unsigned Int</td>
      <td align="left"><code>putUInt(const char* key, uint32_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Long</td>
      <td align="left"><code>putLong(const char*key, int32_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Unsigned Long</td>
      <td align="left"><code>putULong(const char* key, uint32_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Long64</td>
      <td align="left"><code>putLong64(const char*key, int64_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Unsigned Long64</td>
      <td align="left"><code>putULong64(const char* key, uint64_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Float</td>
      <td align="left"><code>putFloat(const char*key, const float_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Double</td>
      <td align="left"><code>putDouble(const char* key, const double_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Bool</td>
      <td align="left"><code>putBool(const char*key, const bool value)</code></td>
    </tr>
    <tr>
      <td align="center">String</td>
      <td align="left"><code>putString(const char* key, const String value)</code></td>
    </tr>
    <tr>
      <td align="center">Bytes</td>
      <td align="left"><code>putBytes(const char*key, const void* value, size_t len)</code></td>
    </tr>
  </tbody></table>

**Func 6**. 同様に、取得したい変数の型に応じて異なるメソッドを使用する必要があります。

<table align="center">
    <tr>
     <td align="center">Char</td>
     <td align="left"><code>getChar(const char*key, const int8_t defaultValue)</code></td>
 </tr>
 <tr>
     <td align="center">Unsigned Char</td>
     <td align="left"><code>getUChar(const char* key, const uint8_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Short</td>
     <td align="left"><code>getShort(const char*key, const int16_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Unsigned Short</td>
     <td align="left"><code>getUShort(const char* key, const uint16_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Int</td>
     <td align="left"><code>getInt(const char*key, const int32_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Unsigned Int</td>
     <td align="left"><code>getUInt(const char* key, const uint32_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Long</td>
     <td align="left"><code>getLong(const char*key, const int32_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Unsigned Long</td>
     <td align="left"><code>getULong(const char* key, const uint32_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Long64</td>
     <td align="left"><code>getLong64(const char*key, const int64_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Unsigned Long64</td>
     <td align="left"><code>gettULong64(const char* key, const uint64_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Float</td>
     <td align="left"><code>getFloat(const char*key, const float_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Double</td>
     <td align="left"><code>getDouble(const char* key, const double_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Bool</td>
     <td align="left"><code>getBool(const char*key, const bool defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">String</td>
     <td align="left"><code>getString(const char* key, const String defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">String</td>
     <td align="left"><code>getString(const char*key, char* value, const size_t maxLen)</code></td>
 </tr>
    <tr>
     <td align="center">Bytes</td>
     <td align="left"><code>getBytes(const char*key, void* buf, size_t maxLen)</code></td>
 </tr>
</table>

**Func 7**. 名前空間を削除する

Arduino の Preferences 実装では、名前空間を完全に削除する方法がありません。その結果、複数のプロジェクトを経ると、ESP32 の不揮発性ストレージ (NVS) の Preferences パーティションがいっぱいになる可能性があります。Preferences に使用される NVS メモリを完全に消去して再フォーマットするには、以下のコードを含むスケッチを作成してください。

```c
#include <nvs_flash.h>

void setup() {
  nvs_flash_erase(); // NVS パーティションを消去し...
  nvs_flash_init(); // NVS パーティションを初期化します。
  while(true);
}

void loop() {

}
```

上記のコードを実行した後は、すぐに新しいスケッチをボードにダウンロードしてください。そうしないと、電源が入るたびに NVS パーティションが再フォーマットされます。

詳細については、Preferences.cpp ファイルを [こちら](https://github.com/espressif/arduino-esp32/blob/master/libraries/Preferences/src/Preferences.cpp) で確認できます。

### Preferences.h ライブラリの一般的な使用方法

**ステップ 1.** Preferences.h ライブラリを使用してデータを保存するには、まずスケッチにインクルードする必要があります。

```c
#include <Preferences.h>
```

**ステップ 2.** 次に、Preferences ライブラリのインスタンスを初期化します。例えば、`preferences` と呼ぶことができます。

```c
Preferences preferences;
```

**ステップ 3.** `setup()` 内で、シリアルモニターを 115200 のボーレートで初期化します。

```c
Serial.begin(115200);
```

**ステップ 4.** フラッシュメモリ内に `my-app` という名前の「ストレージスペース」を作成します（読み書きモード）。他の名前を付けることもできます。

```c
preferences.begin("my-app", false);
```

**ステップ 5.** get および put メソッドを使用してデータを取得/保存します。

#### Key:value ペアデータの保存/取得

Preferences を使用して保存されたデータは以下のように構造化されています：

```c
namespace {
  key:value
}
```

同じ名前空間に異なるキーを保存することができます。例えば：

```c
namespace {
  key1: value1
  key2: value2
}
```

また、同じキーを持つ複数の名前空間を持つこともできます（ただし、各キーにはそれぞれの値があります）。

```c
namespace1{
  key:value1
}
namespace2{
  key:value2
}
```

例えば、「counter」キーに新しい値を保存します：

```c
preferences.putUInt("counter", counter);
```

次に、Preferences に保存された `counter` キーの値を取得します。値が見つからない場合、デフォルトで 0 を返します（このコードが初めて実行された場合に発生します）。

```c
unsigned int counter = preferences.getUInt("counter", 0);
```

したがって、データは以下のように構造化されます：

```c
my-app{
  counter: counter
}
```

#### String データの保存/取得

以下のコードは、`Preferences.h` を使用してネットワーク認証情報を ESP32 のフラッシュメモリに永続的に保存します。

SSID 値（`ssid` 変数）を保存するキー `ssid` を作成します – `putString()` メソッドを使用します。

```c
preferences.putString("ssid", ssid);
```

パスワード値（`password` 変数）を保存するキー `password` を追加します：

```c
preferences.putString("password", password);
```

したがって、データは以下のように構造化されます：

```c
my-app{
  ssid: ssid
  password: password
}
```

`getString()` メソッドを使用して SSID とパスワードの値を取得します。変数を保存するために使用したキー名（この場合は `ssid` と `password` キー）を使用する必要があります：

```c
String ssid = preferences.getString("ssid", ""); 
String password = preferences.getString("password", "");
```

`getString()` 関数の第 2 引数として空の String を渡しました。これは、Preferences に `ssid` または `password` キーが保存されていない場合に返される値です。

**ステップ 6.** Preferences を閉じます。

```c
preferences.end();
```

- Key:value ペアデータの保存/取得の完全な手順は以下の通りです。

```c
#include <Preferences.h>

Preferences preferences;

void setup() {
  Serial.begin(115200);
  delay(3000);
  Serial.println();

  // my-app 名前空間で Preferences を開きます。各アプリケーションモジュール、ライブラリなどは
  // キー名の衝突を防ぐために名前空間名を使用する必要があります。ストレージを RW モードで開きます
  // （第 2 パラメータは false にする必要があります）。
  // 注意: 名前空間名は 15 文字に制限されています。
  preferences.begin("my-app", false);

  // 開いている名前空間のすべての Preferences を削除します
  //preferences.clear();

  // または、counter キーのみを削除します
  //preferences.remove("counter");

  // counter 値を取得します。キーが存在しない場合、デフォルト値 0 を返します。
  // 注意: キー名は 15 文字に制限されています。
  unsigned int counter = preferences.getUInt("counter", 0);

  // counter を 1 増加させます
  counter++;

  // シリアルモニターに counter を表示します
  Serial.printf("Current counter value: %u\n", counter);

  // Preferences に counter を保存します
  preferences.putUInt("counter", counter);

  // Preferences を閉じます
  preferences.end();

  // 10 秒待機します
  Serial.println("Restarting in 10 seconds...");
  delay(10000);

  // ESP を再起動します
  ESP.restart();
}

void loop() {

}
```

ボードにコードをアップロードすると、シリアルモニターに以下のような出力が表示されるはずです：

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-permanently-data/1.png"/></div>

- 文字列データの保存/取得の完全な手順は以下の通りです。

`Preferences.h`を使用してネットワーク認証情報を保存します。

```c
#include <Preferences.h>

Preferences preferences;

const char* ssid = "REPLACE_WITH_YOUR_SSID";
const char* password = "REPLACE_WITH_YOUR_PASSWORD";

void setup() {
  Serial.begin(115200);
  delay(3000);
  Serial.println();

  preferences.begin("credentials", false);
  preferences.putString("ssid", ssid); 
  preferences.putString("password", password);

  Serial.println("ネットワーク認証情報がPreferencesを使用して保存されました");

  preferences.end();
}

void loop() {

}
```

コードをボードにアップロードすると、シリアルモニターに以下のような出力が表示されるはずです：

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-permanently-data/2.png"/></div>

Preferencesに保存されたネットワーク認証情報を使用してWi-Fiに接続します。

```c
#include <Preferences.h>
#include "WiFi.h"

Preferences preferences;

String ssid;
String password;

void setup() {
  Serial.begin(115200);
  delay(3000);
  Serial.println();
  
  preferences.begin("credentials", false);
 
  ssid = preferences.getString("ssid", ""); 
  password = preferences.getString("password", "");

  if (ssid == "" || password == ""){
    Serial.println("ssidまたはpasswordに保存された値がありません");
  }
  else {
    // Wi-Fiに接続
    WiFi.mode(WIFI_STA);
    WiFi.disconnect();
    delay(100);
    WiFi.begin(ssid.c_str(), password.c_str());
    Serial.print("WiFiに接続中: ");
    Serial.println(ssid);
    Serial.println(password);
    while (WiFi.status() != WL_CONNECTED) {
      Serial.print('.');
      delay(1000);
    }
    Serial.println(WiFi.localIP());  
  }
}

void loop() {
  // 繰り返し実行するメインコードをここに記述
}
```

前述のコードをアップロードした後にこのコードをボードにアップロードしてください（認証情報が保存されていることを確認するため）。すべてが期待通りに動作すれば、シリアルモニターに以下のような出力が表示されるはずです。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-permanently-data/3.png"/></div>

## EEPROMを使用して永続的なデータを保存する

### EEPROMとは？

EEPROMはESP32マイクロコントローラーの内部メモリであり、ボードを再起動した後もデータを保持することができます。マイクロコントローラーを使用する際、特にカードが意図的または意図せずに電源が切れる場合（例えば電力喪失の場合）にデータをメモリに保持することは重要です。

ESP32マイクロコントローラーにはフラッシュメモリ領域があり、ArduinoのEEPROMのようにインターフェースを介してボードがオフになった後でもデータを保持することができます。

:::caution
重要な点として、EEPROMにはサイズと寿命の制限があります。メモリセルは必要なだけ読み取ることができますが、書き込みサイクルの数は**100,000**回に制限されています。保存するデータのサイズと更新頻度に注意を払うことをお勧めします。EEPROMメモリは0から255までの512値、または128個のIPアドレスやRFIDタグを保存できます。
:::

ESP32のマイクロコントローラーにはEEPROM（電気的に消去可能なプログラム可能な読み取り専用メモリ）が搭載されています。この小さなスペースはバイト変数を保存することができます。EEPROMに保存された変数は、ESP32をリセットしたり電源を切ったりしても保持されます。簡単に言えば、EEPROMはコンピューターのハードドライブに似た永続的なストレージです。

EEPROMは電子的に読み取り、消去、再書き込みが可能です。Arduinoでは、EEPROMライブラリを使用して簡単にEEPROMから読み書きできます。

EEPROMの各位置は1バイトを保存できるため、8ビットの数値（0から255までの整数値）のみを保存できます。

### 使用可能なEEPROM関数

Arduino IDEを使用してESP32のフラッシュメモリから読み書きするには、EEPROMライブラリを使用します。このライブラリをESP32で使用する方法は、Arduinoで使用する方法と非常に似ています。そのため、Arduino EEPROMを以前に使用したことがある場合、大きな違いはありません。

また、[Arduino EEPROM](https://randomnerdtutorials.com/arduino-eeprom-explained-remember-last-led-state/)に関する記事を参照することをお勧めします。

**関数1**. メモリサイズの初期化

関数を使用する前に、`EEPROM.begin()`を使用してメモリサイズを初期化する必要があります。

```c
EEPROM.begin(EEPROM_SIZE);
```

**関数2**. 書き込み & 保存

EEPROMにデータを書き込むには、2つの引数を取る`EEPROM.write()`関数を使用します。1つ目はデータを保存するEEPROMの位置またはアドレス、2つ目は保存したい値です。

```c
EEPROM.write(address, value);
```

`EEPROM.write()`は`EEPROM.put()`を使用するのと同等です。

```c
EEPROM.put(address, value);
```

例えば、アドレス0に9を書き込む場合は以下のようになります：

```c
EEPROM.write(0, 9);
```

:::tip
浮動小数点データを保存したい場合は、通常`EEPROM.put()`メソッドを使用します。`write()`メソッドを使用して保存したい場合は、`EEPROM.writeFloat()`を使用する必要があります。
:::

**関数3**. 読み取り & 取得

EEPROMからバイトを読み取るには、`EEPROM.read()`関数を使用します。この関数はバイトのアドレスを引数として取ります。

```c
EEPROM.read(address);
```

`EEPROM.read()`は`EEPROM.get()`を使用するのと同等です。

```c
EEPROM.get(address);
```

例えば、以前にアドレス0に保存されたバイトを読み取る場合：

```c
EEPROM.read(0);
```

これにより、その場所に保存された値**9**が返されます。

:::tip
浮動小数点データを取得したい場合は、通常`EEPROM.get()`メソッドを使用します。`read()`メソッドを使用して取得したい場合は、`EEPROM.readFloat()`を使用する必要があります。
:::

**関数4**. 値の更新

`EEPROM.update()`関数は特に便利です。この関数は、保存されている値と異なる場合にのみEEPROMに書き込みを行います。

EEPROMは書き込み/消去サイクルが制限されているため、`EEPROM.write()`の代わりに`EEPROM.update()`を使用することでサイクルを節約できます。

`EEPROM.update()`関数は以下のように使用します：

```c
EEPROM.update(address, value);
```

現在、アドレス 0 に 9 が保存されています。そのため、以下のコードを呼び出した場合：

```c
EEPROM.update(0, 9);
```

現在保存されている値が書き込みたい値と同じであるため、EEPROM に再度書き込むことはありません。

:::note
EEPROM の操作について詳しく知りたい場合は、[公式 Arduino ドキュメント](https://docs.arduino.cc/learn/programming/eeprom-guide#eeprom-clear)を参照してください。
:::

### EEPROM の一般的な使用方法

XIAO ESP32C3 のフラッシュメモリにデータを保存する方法を示すために、今回は出力の最後の状態、具体的には LED の状態を保存します。

以下の回路図に示すように、LED を XIAO ESP32C3 に接続してください。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/XIAO_WiFi/connect-led-2.png"/></div>

まず、EEPROM ライブラリをインクルードする必要があります。

```c
#include <EEPROM.h>
```

次に、EEPROM のサイズを定義します。これはフラッシュメモリ内でアクセスしたいバイト数を指定します。この場合、LED の状態だけを保存するため、EEPROM サイズは 1 に設定します。

```c
#define EEPROM_SIZE 1
```

さらに、このスケッチを動作させるために必要な他の変数を定義します。

```c
// 定数は変更されません。ここではピン番号を設定するために使用されます:
const int ledPin = D10;      // LED ピンの番号

// 変数は変更されます:
int ledState = LOW;  // LED の状態を設定するために使用される ledState

// 一般的に、時間を保持する変数には "unsigned long" を使用するべきです
// 値が大きくなりすぎて int では保持できなくなるため
unsigned long previousMillis = 0;  // LED が最後に更新された時間を保持

// 定数は変更されません:
const long interval = 10000;  // 点滅間隔 (ミリ秒単位)
```

`setup()` では、事前に定義したサイズで EEPROM を初期化します。

```c
EEPROM.begin(EEPROM_SIZE);
```

コードが最新の LED 状態で初期化されるようにするために、`setup()` 内でフラッシュメモリから最後の LED 状態を読み取る必要があります。この状態はアドレス 0 に保存されています。

その後、フラッシュメモリから読み取った値に応じて LED を ON または OFF にするだけです。

```c
digitalWrite (ledPin, ledState);
```

`loop()` 関数セクションでは、一定の時間間隔で LED の状態を反転させるだけです。

```c
// LED を点滅させる時間かどうかを確認します。つまり、現在の時間と
// LED を最後に点滅させた時間の差が、LED を点滅させたい間隔よりも
// 大きいかどうかを確認します。
unsigned long currentMillis = millis();

if (currentMillis - previousMillis >= interval) {
    // LED を最後に点滅させた時間を保存します
    previousMillis = currentMillis;
    Serial.println("状態が変更されました");
    // LED が OFF の場合は ON にし、逆の場合は OFF にします:
    if (ledState == LOW) {
      ledState = HIGH;
    } else {
      ledState = LOW;
    }

    // 変数の ledState に基づいて LED を設定します:
    digitalWrite(ledPin, ledState);
}
```

次に、カウントダウンが終了したかどうかを判断し、終了後に LED の状態を反転させ、フラッシュメモリに保存します。

```c
EEPROM.write(0, ledState);
```

最後に、変更を有効にするために EEPROM.commit() を使用します。

```c
EEPROM.commit();
```

以下は完成した手順です。

:::caution
この例を長時間実行しないでください。この例では 10 秒ごとに EEPROM に書き込みを行いますが、長時間実行すると EEPROM の寿命が**大幅に短くなります**。
:::

```c
// フラッシュメモリから読み書きするためのライブラリをインクルード
#include <EEPROM.h>

// アクセスしたいバイト数を定義
#define EEPROM_SIZE 1

// 定数は変更されません。ここではピン番号を設定するために使用されます:
const int ledPin = D10;      // LED ピンの番号

// 変数は変更されます:
int ledState = LOW;  // LED の状態を設定するために使用される ledState

// 一般的に、時間を保持する変数には "unsigned long" を使用するべきです
// 値が大きくなりすぎて int では保持できなくなるため
unsigned long previousMillis = 0;  // LED が最後に更新された時間を保持

// 定数は変更されません:
const long interval = 10000;  // 点滅間隔 (ミリ秒単位)

void setup() { 
  Serial.begin(115200);
  
  // 事前に定義したサイズで EEPROM を初期化
  EEPROM.begin(EEPROM_SIZE);

  pinMode(ledPin, OUTPUT);

  // フラッシュメモリから最後の LED 状態を読み取る
  ledState = EEPROM.read(0);
  // 保存された最後の状態に基づいて LED を設定
  digitalWrite(ledPin, ledState);
}

void loop() {
  // 常に実行する必要があるコードをここに記述します。

  // LED を点滅させる時間かどうかを確認します。つまり、現在の時間と
  // LED を最後に点滅させた時間の差が、LED を点滅させたい間隔よりも
  // 大きいかどうかを確認します。
  unsigned long currentMillis = millis();

  if (currentMillis - previousMillis >= interval) {
    // LED を最後に点滅させた時間を保存します
    previousMillis = currentMillis;
    Serial.println("状態が変更されました");
    // LED が OFF の場合は ON にし、逆の場合は OFF にします:
    if (ledState == LOW) {
      ledState = HIGH;
    } else {
      ledState = LOW;
    }
    // LED の状態をフラッシュメモリに保存
    EEPROM.write(0, ledState);
    EEPROM.commit();
    Serial.println("フラッシュメモリに状態が保存されました");

    // 変数の ledState に基づいて LED を設定します:
    digitalWrite(ledPin, ledState);
  }
}
```

コードをボードにアップロードすると、シリアルモニタで以下のような出力が得られます。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-permanently-data/4.png"/></div>

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>