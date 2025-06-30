---
description: このチュートリアルでは、XIAO ESP32C6 開発ボードを使用して Zigbee アプリケーション開発を探求する旅に出ます。XIAO ESP32C6 はコンパクトながら強力なボードで、Wi-Fi と Bluetooth Low Energy (BLE) 接続を統合した ESP32-C6 チップを搭載しています。ESP Zigbee SDK を活用することで、XIAO ESP32C6 の可能性を最大限に引き出し、Zigbee 機能を追加することができます。
title: XIAO ESP32C6 Zigbee クイックスタートガイド (Arduino)
image: https://files.seeedstudio.com/wiki/xiaoc6_zigbee/3.webp
slug: /ja/xiao_esp32c6_zigbee_arduino
last_update:
  date: 05/15/2025
  author: Spencer
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 概要

このチュートリアルでは、Seeed Studio **XIAO ESP32C6** 開発ボードで [Zigbee](https://en.wikipedia.org/wiki/Zigbee) アプリケーションを実装する方法を案内します。このボードは ESP32-C6 チップを搭載しており、**Wi-Fi**、**Bluetooth Low Energy (BLE)**、および **Zigbee** 接続を組み合わせた機能を提供します。これにより、**IoT アプリケーション**に最適です。このガイドの例では、**esp-arduino Zigbee SDK** を使用して Zigbee 機能を実現します。

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/0.png"
    style={{ width: 680, height: 'auto', "border-radius": '12.8px' }}
  />
</div>

### 学べること

:::note 前提条件: Arduino 開発環境の準備

Arduino IDE をまだ準備していない場合は、**[Getting Started Guide](https://chatgpt.com/xiao_esp32c6_getting_started/#software-preparation)** を参照してください。**esp-arduino ボードバージョン**が **v3.0.6 以降**であることを確認してください。このバージョンは Zigbee 機能をサポートしています。

:::

このガイドでは、XIAO ESP32C6 を使用した Zigbee の基本的な使用方法に焦点を当て、実際のアプリケーションでの明確な理解を提供します：

1. [Zigbee 概要](#zigbee_overview): Zigbee プロトコルとそのネットワーク構造を理解します。
2. [Zigbee Arduino の例](#examples): ESP32-C6 上で電球やスイッチなどの Zigbee の例を実装します。

## Zigbee 概要 {#zigbee_overview}

Zigbee は、IEEE 802.15.4 標準に基づいた**低消費電力**、**低帯域幅**の無線通信プロトコルです。**ホームオートメーション**、**スマートシティ**、**産業制御**などの IoT シナリオ向けに設計されており、動的な環境での信頼性の高い通信を可能にする強力なメッシュネットワーク機能を提供します。

### Zigbee データモデル

Zigbee 通信は、デバイスの機能を整理し、相互作用する方法を定義する **Zigbee Cluster Library (ZCL)** に依存しています。主な構成要素は以下の通りです：

1. **デバイスタイプ**  
   Zigbee デバイス（例：スイッチ、センサー、ライト）は、特定の動作が事前定義されており、機能的な**クラスタ**にグループ化されています。

2. **クラスタ**  
   クラスタは以下を論理的にグループ化したものです：

   - **属性**: 明るさや温度など、デバイスの状態を表します。
   - **コマンド**: ライトをオンにしたり、明るさを 50% に設定したりするなどのアクションをトリガーします。

   例：

   - **オン/オフクラスタ**: 電源のオン/オフなどのバイナリ状態を制御します。
   - **レベル制御クラスタ**: 強度や明るさを調整します。
   - **温度測定クラスタ**: 温度データを送信します。
   - **シーンクラスタ**: プリセット構成を保存および呼び出します。

3. **属性とコマンド**  
   属性はデバイスデータ（例：状態、構成）を保存し、コマンドはアクションを開始します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/datamodel.png" style={{width:800, height:'auto'}}/></div>

### Zigbee ネットワークアーキテクチャ

Zigbee ネットワークは、以下の 3 つの主要なノードタイプで構成されています：

1. **Zigbee コーディネーター (ZC)**  
   - ネットワークの中心的なハブとして機能します。  
   - ネットワークの作成、デバイス認証、アドレス割り当てを処理します。  
   - ネットワークの初期化と管理を担当します。  
   - 各 Zigbee ネットワークには **1 つのコーディネーター**しか存在できません。  

2. **Zigbee ルーター (ZR)**  
   - メッセージを中継することでネットワーク範囲を拡張します。  
   - ネットワークへの追加デバイスの参加をサポートします。  
   - 通常、一定の動作と信頼性の高いメッセージ中継を確保するために電源供給されています。  
   - バッテリー駆動のルーターも可能ですが、エネルギー需要が高いため一般的ではありません。  

3. **Zigbee エンドデバイス (ZED)**  
   - 軽量で省電力のデバイスで、親ノード（コーディネーターまたはルーター）と通信します。  
   - 他のデバイスへのメッセージのルーティングは行いません。  
   - バッテリー動作に最適化されており、通常は省エネのためにスリープモードに入ります。

:::note

- **アドレス指定とルーティング**:
  - Zigbee は 16 ビットのアドレス指定方式を使用します。デバイスは直接および間接的なアドレス指定を組み合わせて通信します。  
  - ルーティングの決定は、AODV（アドホックオンデマンド距離ベクトル）などのアルゴリズムを使用してルーターによって行われます。  

- **電力管理**:
  - Zigbee エンドデバイスは低消費電力に最適化されています。通常はスリープモードで動作し、必要な時にのみ起動します。  
  - ルーターとコーディネーターは、一定の可用性を確保するために通常電源供給されています。

:::

#### ネットワークトポロジー

Zigbee は、アプリケーションの要件や環境に応じて、以下の 3 つの主要なネットワークトポロジーをサポートします：

#### 1. メッシュトポロジー

- 1 つのコーディネーターと複数のルーターが自己修復可能で堅牢なネットワークを形成します。  
- 通信経路が途絶した場合、デバイスは動的にメッセージを再ルーティングすることができ、高い信頼性を確保します。  
- 広範囲のカバレッジと冗長性を必要とする大規模ネットワークに最適です。  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNptkcEOgjAQRH9lsydI5CDcuIo_oJ5MLxu6AlG6pLYmxvjvVlFSgj3NtG9nmvaBtWjGEgGgsTS0cKiUgXFtRKzuDDmxSRKZNIUsy2An3rFdJ8koYJ2m_0YjNp_YPGK_OR9ua3TFt67mEBs0jGYWHeOjLqbYYsHlMff3bKrMZ5XLGxZzvJjhoRlX2LPtqdPhPR_vYYWu5Z4VlkFqsmeFyjwDR97J_m5qLJ31vEIrvml_xg-aHFcdhQ_psTzR5Rp2BzJHkZ9_vgDkroUg" style={{width:380, height:'auto', "border-radius": '1px'}}/></div>

- **主な特徴**:  
  - 動的な再ルーティングにより高い信頼性を確保。  
  - 大規模ネットワークに対応可能で、拡張性のあるカバレッジを提供。  
  - 自己修復機能により耐障害性が向上。  

#### 2. ツリートポロジー

- コーディネーターは階層構造のルートとして機能し、ルーターが枝を形成します。  
- 各枝には複数のエンドデバイスや追加のルーターを持つことができ、木構造を形成します。  
- 通信は階層的なパスに依存しており、単一障害点が発生する可能性があります。  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNqF0MEKwjAMBuBXCTmt4A5OT7s6X0A9SS9hjW7omlFbQcR3tzqVFQV7yl--_IdcsRbDWCIA7B31DWwqbWF4CxFnWkteXJaNglKQ5zmsJHh20ywbBpgq9Wt1ZIuPLUb21fN0S2sqPrc1x9o4wxCS6p-8SPh3e5HyWcJn__g84XOlcIIdu45aE093fSxr9A13rLGMoyF30KjtLToKXtYXW2PpXeAJOgn7BssdHU8xhd6Q56qlePzu89uT3Yq88-0OO1R_gA" style={{width:600, height:'auto', "border-radius": '1px'}}/></div>

- **主な特徴**:  
  - 構造化された環境に適している。  
  - メッシュネットワークよりも設定と管理が容易。  
  - 枝の障害により、サブネット全体が切断される可能性がある。  

#### 3. スタートポロジー

- すべてのデバイスがコーディネーターと直接通信します。  
- 展開が簡単ですが、コーディネーターが単一障害点となります。  
- デバイスがコーディネーターの近くに配置されている小規模ネットワークに最適です。  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNqNkMEKwjAMhl8l5LTCdth269X5BHqSXsIat6JtR20FGXt3K0Nx4MGc_i_kCyEz9l4zSgSAIdA0wrFTDtbaeR-0cRR9KIovEAKqqoK90x3fTc91UeQMK0AtxK8NW6XZKM0_SrtRWiGwRMvBktH5_vm1QGEc2bJCmaOmcFGo3JLnKEV_eLgeZQyJSww-DSPKM11vmdKkKXJnKH_AfroTuZP3b16etDldgQ" style={{width:480, height:'auto', "border-radius": '1px'}}/></div>

- **主な特徴**:  
  - 設定と管理が簡単。  
  - 範囲とデバイス容量の制約によりスケーラビリティが限定される。  
  - すべての通信がコーディネーターに依存するため、耐障害性が低い。  

これらの概念を簡単に理解したところで、XIAO ESP32C6でのZigbee開発を始めましょう。

## Arduinoの例 {#examples}

[Zigbeeの例 - Arduino](https://github.com/espressif/arduino-esp32/tree/master/libraries/Zigbee/examples)を参照してください。

### 例1: ライトバルブとライトスイッチ {#Light_Bulb_switch}

まず、2つのXIAO ESP32C6を準備します。一方を**Zigbeeライトバルブ**、もう一方を**Zigbeeライトスイッチ**として使用します。

`Zigbee_On_Off_Light`と`Zigbee_On_Off_Switch`の例を使用して、Zigbee対応デバイスが実際のシナリオでどのように相互作用するかを理解します。準備はできましたか？それでは開発を始めましょう！

#### Zigbeeライトバルブ

Zigbeeモードとして`Zigbee ED（エンドデバイス）`を選択してください。

いくつかの定数:

```cpp
#define LED_PIN               LED_BUILTIN
#define BUTTON_PIN            9  // ESP32-C6/H2 ブートボタン
#define ZIGBEE_LIGHT_ENDPOINT 10
```

- `LED_PIN`は内蔵LEDを制御するために使用されます。
- `BUTTON_PIN`はファクトリリセットボタン用です。
- `ZIGBEE_LIGHT_ENDPOINT`はライトバルブのZigbeeエンドポイントを表し、ネットワーク内のサービス識別子のように機能します。

##### Zigbeeライトデバイスの定義

```cpp
ZigbeeLight zbLight = ZigbeeLight(ZIGBEE_LIGHT_ENDPOINT);
```

この行は、エンドポイントIDを持つ`ZigbeeLight`オブジェクトを定義します。エンドポイントは、Zigbeeデバイス内の異なる機能を表すために使用されます。

##### デバイス状態制御関数

`setLED()`関数はLEDの状態を制御します:

```cpp
void setLED(bool value) {
  digitalWrite(LED_PIN, value);
}
```

`setLED()`関数はブール値を受け取り、その値に基づいてLEDをオンまたはオフにします。

##### `setup()`関数

`setup()`関数は、デバイス（LED、ボタン、Zigbee設定を含む）を初期化します。

```cpp
void setup() {
  pinMode(LED_PIN, OUTPUT);
  digitalWrite(LED_PIN, LOW);
```

まず、LEDピンを出力として設定し、初期状態でオフにします。

```cpp
  pinMode(BUTTON_PIN, INPUT_PULLUP);
```

ボタンピンを内部プルアップ抵抗付きの入力として設定します。

```cpp
  zbLight.setManufacturerAndModel("Espressif", "ZBLightBulb");
```

これにより、デバイスの製造元とモデル名が設定され、Zigbeeネットワーク上で識別されます。

```cpp
  zbLight.onLightChange(setLED);
```

これにより、ライトの状態が変化したときに呼び出されるコールバック関数として`setLED()`が登録されます。

```cpp
  Zigbee.addEndpoint(&zbLight);
```

`zbLight`をZigbeeコアのエンドポイントとして追加します。これにより、他のZigbeeデバイスがこのエンドポイントと相互作用できるようになります。

```cpp
  Zigbee.begin();
```

最後に、`Zigbee.begin()`を呼び出してZigbeeスタックを初期化し、ネットワーク内でエンドデバイスとしてデバイスを起動します。

##### `loop()`関数

メインループは、ファクトリリセットを実行するためのボタン押下を処理します:

```cpp
void loop() {
  if (digitalRead(BUTTON_PIN) == LOW) {
    delay(100);  // キーデバウンス処理
    int startTime = millis();
    while (digitalRead(BUTTON_PIN) == LOW) {
      delay(50);
      if ((millis() - startTime) > 3000) {
        Serial.printf("Zigbeeをファクトリ設定にリセットし、再起動します。\n");
        Zigbee.factoryReset();
      }
    }
  }
  delay(100);
}
```

このコードはボタンが押されたかどうかを確認します:

- 押された場合、100ms待機（デバウンス処理）。
- ボタンが3秒以上押されたままの場合、`Zigbee.factoryReset()`を呼び出してファクトリリセットをトリガーします。

この機能は、ネットワークやペアリングの問題によりデバイスを再構成する必要がある場合に便利です。

:::tip
公式のルーチンは継続的に更新されているため、ドキュメントが最新のプログラムと同期していない場合があります。相違がある場合は、**[Espressifのプログラム例](https://github.com/espressif/arduino-esp32/blob/3.0.7/libraries/Zigbee/examples/Zigbee_On_Off_Light/Zigbee_On_Off_Light.ino)**を参照してください。
:::

```cpp title=Zigbee_On_Off_Light.ino showLineNumbers
#ifndef ZIGBEE_MODE_ED
#error "ZigbeeエンドデバイスモードがTools->Zigbee modeで選択されていません"
#endif

#include "ZigbeeCore.h"
#include "ep/ZigbeeLight.h"

#define LED_PIN               LED_BUILTIN
#define BUTTON_PIN            9  // ESP32-C6/H2 ブートボタン
#define ZIGBEE_LIGHT_ENDPOINT 10

ZigbeeLight zbLight = ZigbeeLight(ZIGBEE_LIGHT_ENDPOINT);

/********************* RGB LED関数 **************************/
void setLED(bool value) {
  digitalWrite(LED_PIN, value);
}

/********************* Arduino関数 **************************/
void setup() {
  // LEDを初期化し、OFFにする（LED_PIN == RGB_BUILTINの場合、rgbLedWrite()が内部で使用されます）
  pinMode(LED_PIN, OUTPUT);
  digitalWrite(LED_PIN, LOW);

  // ファクトリリセット用ボタンを初期化
  pinMode(BUTTON_PIN, INPUT_PULLUP);

  // オプション: Zigbeeデバイス名とモデルを設定
  zbLight.setManufacturerAndModel("Espressif", "ZBLightBulb");

  // ライト変更用のコールバック関数を設定
  zbLight.onLightChange(setLED);

  // Zigbeeコアにエンドポイントを追加
  log_d("ZigbeeLightエンドポイントをZigbeeコアに追加します");
  Zigbee.addEndpoint(&zbLight);

  // すべてのエンドポイントが登録されたら、Zigbeeを開始します。デフォルトではZIGBEE_END_DEVICEとして動作します
  log_d("Zigbee.begin()を呼び出します");
  Zigbee.begin();
}

void loop() {
  // ファクトリリセット用ボタンを確認
  if (digitalRead(BUTTON_PIN) == LOW) {  // ボタンが押された
    // キーデバウンス処理
    delay(100);
    int startTime = millis();
    while (digitalRead(BUTTON_PIN) == LOW) {
      delay(50);
      if ((millis() - startTime) > 3000) {
        // ボタンが3秒以上押された場合、Zigbeeをファクトリリセットして再起動
        Serial.printf("Zigbeeをファクトリ設定にリセットし、再起動します。\n");
        Zigbee.factoryReset();
      }
    }
  }
  delay(100);
}
```

#### Zigbeeライトスイッチ

ここでは、XIAO ESP32C6が**Zigbeeコーディネーター**として機能し、他のZigbeeデバイスを制御します。一方、**Zigbeeスイッチ**はコントローラーとして機能し、Zigbeeライトデバイスにバインドして、ライトのオン/オフ切り替えなどのコマンドを通じて制御します。

##### インクルードと定義

```cpp
#include "ZigbeeCore.h"
#include "ep/ZigbeeLight.h"

#define SWITCH_ENDPOINT_NUMBER 5
#define GPIO_INPUT_IO_TOGGLE_SWITCH 9
#define PAIR_SIZE(TYPE_STR_PAIR) (sizeof(TYPE_STR_PAIR) / sizeof(TYPE_STR_PAIR[0]))
```

- `SWITCH_ENDPOINT_NUMBER` は `5` として定義されています。これはスイッチのエンドポイントを表します。電球の例と同様に、エンドポイント番号はZigbeeデバイス内の特定の機能を定義するために使用されます。
- `GPIO_INPUT_IO_TOGGLE_SWITCH` はGPIOピン `9` を指し、スイッチボタンとして機能します。
- `PAIR_SIZE()` は、配列のサイズを計算するためのマクロで、ここではボタン構成を処理するために使用されます。

##### スイッチ構成タイプと関数

コードでは、スイッチ機能に関連するいくつかの列挙型とデータ構造を定義しています：

```cpp
typedef enum {
  SWITCH_ON_CONTROL,
  SWITCH_OFF_CONTROL,
  SWITCH_ONOFF_TOGGLE_CONTROL,
  SWITCH_LEVEL_UP_CONTROL,
  SWITCH_LEVEL_DOWN_CONTROL,
  SWITCH_LEVEL_CYCLE_CONTROL,
  SWITCH_COLOR_CONTROL,
} SwitchFunction;

typedef struct {
  uint8_t pin;
  SwitchFunction func;
} SwitchData;

typedef enum {
  SWITCH_IDLE,
  SWITCH_PRESS_ARMED,
  SWITCH_PRESS_DETECTED,
  SWITCH_PRESSED,
  SWITCH_RELEASE_DETECTED,
} SwitchState;
```

- **`SwitchFunction`** は、ライトのオン/オフ、トグル、明るさの調整など、スイッチが実行できるさまざまな機能を列挙します。
- **`SwitchData`** は、GPIOピンと特定の機能をペアリングする構造体で、異なる機能を持つ複数のボタンを追加する際に整理を容易にします。
- **`SwitchState`** は、ユーザー操作中のスイッチの異なる状態（例：アイドル、押下、リリース）を表します。

##### Zigbeeスイッチのインスタンス化

```cpp
static SwitchData buttonFunctionPair[] = {{GPIO_INPUT_IO_TOGGLE_SWITCH, SWITCH_ONOFF_TOGGLE_CONTROL}};
ZigbeeSwitch zbSwitch = ZigbeeSwitch(SWITCH_ENDPOINT_NUMBER);
```

- **`buttonFunctionPair`** はボタンの機能を定義する配列です。ここでは、`GPIO 9` に接続されたボタンがライトのオン/オフ切り替えに使用されます。
- **`zbSwitch`** は、エンドポイント番号 `5` を持つ `ZigbeeSwitch` のインスタンスを作成します。

##### Zigbee関数とGPIO割り込み処理

```cpp
static void onZbButton(SwitchData *button_func_pair) {
  if (button_func_pair->func == SWITCH_ONOFF_TOGGLE_CONTROL) {
    zbSwitch.lightToggle();  // ライトにトグルコマンドを送信します。
  }
}
```

**`onZbButton()`** はボタンが押されたときに呼び出されます。この場合、Zigbeeコマンドを送信してライトをトグルします。

###### GPIOイベントの処理

```cpp
static void IRAM_ATTR onGpioInterrupt(void *arg) {
  xQueueSendFromISR(gpio_evt_queue, (SwitchData *)arg, NULL);
}
```

**`onGpioInterrupt()`** はGPIOピン割り込みを処理する割り込みサービスルーチン（ISR）です。ボタンが押されたときにイベントをキューに配置します。

```cpp
static void enableGpioInterrupt(bool enabled) {
  for (int i = 0; i < PAIR_SIZE(buttonFunctionPair); ++i) {
    if (enabled) {
      enableInterrupt((buttonFunctionPair[i]).pin);
    } else {
      disableInterrupt((buttonFunctionPair[i]).pin);
    }
  }
}
```

**`enableGpioInterrupt()`** は、パラメータ `enabled` が `true` または `false` に応じてGPIO割り込みを有効または無効にします。

##### セットアップ関数

```cpp
void setup() {
  Serial.begin(115200);
  while (!Serial) {
    delay(10);
  }

  zbSwitch.setManufacturerAndModel("Espressif", "ZigbeeSwitch");
  zbSwitch.allowMultipleBinding(true);

  Zigbee.addEndpoint(&zbSwitch);
  Zigbee.setRebootOpenNetwork(180);

  for (int i = 0; i < PAIR_SIZE(buttonFunctionPair); i++) {
    pinMode(buttonFunctionPair[i].pin, INPUT_PULLUP);
    gpio_evt_queue = xQueueCreate(10, sizeof(SwitchData));
    if (gpio_evt_queue == 0) {
      log_e("Queue was not created and must not be used");
      while (1);
    }
    attachInterruptArg(buttonFunctionPair[i].pin, onGpioInterrupt, (void *)(buttonFunctionPair + i), FALLING);
  }

  Zigbee.begin(ZIGBEE_COORDINATOR);

  Serial.println("Waiting for Light to bound to the switch");
  while (!zbSwitch.isBound()) {
    Serial.printf(".");
    delay(500);
  }

  std::list<zb_device_params_t *> boundLights = zbSwitch.getBoundDevices();
  for (const auto &device : boundLights) {
    Serial.printf("Device on endpoint %d, short address: 0x%x\n", device->endpoint, device->short_addr);
    Serial.printf(
      "IEEE Address: %02X:%02X:%02X:%02X:%02X:%02X:%02X:%02X\n", device->ieee_addr[0], device->ieee_addr[1], device->ieee_addr[2], device->ieee_addr[3],
      device->ieee_addr[4], device->ieee_addr[5], device->ieee_addr[6], device->ieee_addr[7]
    );
    Serial.printf("Light manufacturer: %s", zbSwitch.readManufacturer(device->endpoint, device->short_addr));
    Serial.printf("Light model: %s", zbSwitch.readModel(device->endpoint, device->short_addr));
  }
  Serial.println();
}
```

- **シリアル通信の初期化**: デバッグ用にシリアル通信を初期化します。
- **デバイス情報**: メーカーとモデルを設定し、複数のデバイスのバインドを許可し、Zigbeeコアにエンドポイントを追加します。
- **ネットワーク初期化**: 再起動後にデバイスが参加できるように、Zigbeeネットワークを `180` 秒間開きます。
- **ボタン初期化**: ボタン用のGPIOピンを設定し、GPIO割り込みを処理するためのキューを作成し、ボタンに割り込みをアタッチします。
- **バインド待機**: コーディネーターはライトデバイスにバインドされるまで待機します。バインドされると、バインドされたデバイス情報を出力します。

##### ループ関数

```cpp
void loop() {
  uint8_t pin = 0;
  SwitchData buttonSwitch;
  static SwitchState buttonState = SWITCH_IDLE;
  bool eventFlag = false;

  if (xQueueReceive(gpio_evt_queue, &buttonSwitch, portMAX_DELAY)) {
    pin = buttonSwitch.pin;
    enableGpioInterrupt(false);
    eventFlag = true;
  }
  while (eventFlag) {
    bool value = digitalRead(pin);
    switch (buttonState) {
      case SWITCH_IDLE:           buttonState = (value == LOW) ? SWITCH_PRESS_DETECTED : SWITCH_IDLE; break;
      case SWITCH_PRESS_DETECTED: buttonState = (value == LOW) ? SWITCH_PRESS_DETECTED : SWITCH_RELEASE_DETECTED; break;
      case SWITCH_RELEASE_DETECTED:
        buttonState = SWITCH_IDLE;
        (*onZbButton)(&buttonSwitch);
        break;
      default: break;
    }
    if (buttonState == SWITCH_IDLE) {
      enableGpioInterrupt(true);
      eventFlag = false;
      break;
    }
    vTaskDelay(10 / portTICK_PERIOD_MS);
  }

  static uint32_t lastPrint = 0;
  if (millis() - lastPrint > 10000) {
    lastPrint = millis();
    zbSwitch.printBoundDevices();
  }
}
```

- **ループ関数**は、割り込みキュー（`gpio_evt_queue`）からボタンの押下を読み取り、`buttonState`を適切に更新します。
- ボタンが押されて離された場合（`SWITCH_RELEASE_DETECTED`）、`onZbButton()`コールバックが呼び出され、ライトのトグルが行われます。
- **10秒ごと**に、バインドされたライトが監視目的で出力されます。

:::tip
公式のルーチンは継続的に更新されています。本ドキュメントが最新のプログラムと同期できない場合がありますので、相違がある場合は**[Espressifのプログラム例](https://github.com/espressif/arduino-esp32/blob/3.0.7/libraries/Zigbee/examples/Zigbee_On_Off_Switch/Zigbee_On_Off_Switch.ino)**を参照してください。
:::

```cpp title=Zigbee_On_Off_Switch.ino showLineNumbers
#ifndef ZIGBEE_MODE_ZCZR
#error "Tools->Zigbee modeでZigbeeコーディネーターモードが選択されていません"
#endif

#include "ZigbeeCore.h"
#include "ep/ZigbeeLight.h"

#define SWITCH_ENDPOINT_NUMBER 5

/* スイッチ設定 */
#define GPIO_INPUT_IO_TOGGLE_SWITCH 9
#define PAIR_SIZE(TYPE_STR_PAIR)    (sizeof(TYPE_STR_PAIR) / sizeof(TYPE_STR_PAIR[0]))

typedef enum {
  SWITCH_ON_CONTROL,
  SWITCH_OFF_CONTROL,
  SWITCH_ONOFF_TOGGLE_CONTROL,
  SWITCH_LEVEL_UP_CONTROL,
  SWITCH_LEVEL_DOWN_CONTROL,
  SWITCH_LEVEL_CYCLE_CONTROL,
  SWITCH_COLOR_CONTROL,
} SwitchFunction;

typedef struct {
  uint8_t pin;
  SwitchFunction func;
} SwitchData;

typedef enum {
  SWITCH_IDLE,
  SWITCH_PRESS_ARMED,
  SWITCH_PRESS_DETECTED,
  SWITCH_PRESSED,
  SWITCH_RELEASE_DETECTED,
} SwitchState;

static SwitchData buttonFunctionPair[] = {{GPIO_INPUT_IO_TOGGLE_SWITCH, SWITCH_ONOFF_TOGGLE_CONTROL}};

ZigbeeSwitch zbSwitch = ZigbeeSwitch(SWITCH_ENDPOINT_NUMBER);

/********************* Zigbee関数 **************************/
static void onZbButton(SwitchData *button_func_pair) {
  if (button_func_pair->func == SWITCH_ONOFF_TOGGLE_CONTROL) {
    // ライトにトグルコマンドを送信
    zbSwitch.lightToggle();
  }
}

/********************* GPIO関数 **************************/
static QueueHandle_t gpio_evt_queue = NULL;

static void IRAM_ATTR onGpioInterrupt(void *arg) {
  xQueueSendFromISR(gpio_evt_queue, (SwitchData *)arg, NULL);
}

static void enableGpioInterrupt(bool enabled) {
  for (int i = 0; i < PAIR_SIZE(buttonFunctionPair); ++i) {
    if (enabled) {
      enableInterrupt((buttonFunctionPair[i]).pin);
    } else {
      disableInterrupt((buttonFunctionPair[i]).pin);
    }
  }
}

/********************* Arduino関数 **************************/
void setup() {

  Serial.begin(115200);
  while (!Serial) {
    delay(10);
  }

  // オプション: Zigbeeデバイス名とモデルを設定
  zbSwitch.setManufacturerAndModel("Espressif", "ZigbeeSwitch");

  // オプション: 複数のライトをスイッチにバインド可能にする
  zbSwitch.allowMultipleBinding(true);

  // Zigbee Coreにエンドポイントを追加
  log_d("ZigbeeSwitchエンドポイントをZigbee Coreに追加中");
  Zigbee.addEndpoint(&zbSwitch);

  // 起動後180秒間ネットワークを開放
  Zigbee.setRebootOpenNetwork(180);

  // ボタンスイッチを初期化
  for (int i = 0; i < PAIR_SIZE(buttonFunctionPair); i++) {
    pinMode(buttonFunctionPair[i].pin, INPUT_PULLUP);
    /* ISRからのGPIOイベントを処理するためのキューを作成 */
    gpio_evt_queue = xQueueCreate(10, sizeof(SwitchData));
    if (gpio_evt_queue == 0) {
      log_e("キューが作成されず、使用できません");
      while (1);
    }
    attachInterruptArg(buttonFunctionPair[i].pin, onGpioInterrupt, (void *)(buttonFunctionPair + i), FALLING);
  }

  // すべてのEPが登録されたら、ZIGBEE_COORDINATORモードでZigbeeを開始
  log_d("Zigbee.begin()を呼び出し中");
  Zigbee.begin(ZIGBEE_COORDINATOR);

  Serial.println("スイッチにバインドされるライトを待機中");
  // スイッチがライトにバインドされるのを待つ
  while (!zbSwitch.isBound()) {
    Serial.printf(".");
    delay(500);
  }

  // オプション: バインドされたライトからメーカー名とモデル名を読み取る
  std::list<zb_device_params_t *> boundLights = zbSwitch.getBoundDevices();
  // バインドされたすべてのライトをリスト表示
  for (const auto &device : boundLights) {
    Serial.printf("エンドポイント%dのデバイス、ショートアドレス: 0x%x\n", device->endpoint, device->short_addr);
    Serial.printf(
      "IEEEアドレス: %02X:%02X:%02X:%02X:%02X:%02X:%02X:%02X\n", device->ieee_addr[0], device->ieee_addr[1], device->ieee_addr[2], device->ieee_addr[3],
      device->ieee_addr[4], device->ieee_addr[5], device->ieee_addr[6], device->ieee_addr[7]
    );
    Serial.printf("ライトメーカー: %s", zbSwitch.readManufacturer(device->endpoint, device->short_addr));
    Serial.printf("ライトモデル: %s", zbSwitch.readModel(device->endpoint, device->short_addr));
  }

  Serial.println();
}

void loop() {
  // ループ内でボタンスイッチを処理
  uint8_t pin = 0;
  SwitchData buttonSwitch;
  static SwitchState buttonState = SWITCH_IDLE;
  bool eventFlag = false;

  /* キューが受信されているか確認し、受信されていればbuttonSwitchを読み取る */
  if (xQueueReceive(gpio_evt_queue, &buttonSwitch, portMAX_DELAY)) {
    pin = buttonSwitch.pin;
    enableGpioInterrupt(false);
    eventFlag = true;
  }
  while (eventFlag) {
    bool value = digitalRead(pin);
    switch (buttonState) {
      case SWITCH_IDLE:           buttonState = (value == LOW) ? SWITCH_PRESS_DETECTED : SWITCH_IDLE; break;
      case SWITCH_PRESS_DETECTED: buttonState = (value == LOW) ? SWITCH_PRESS_DETECTED : SWITCH_RELEASE_DETECTED; break;
      case SWITCH_RELEASE_DETECTED:
        buttonState = SWITCH_IDLE;
        /* button_handlerへのコールバック */
        (*onZbButton)(&buttonSwitch);
        break;
      default: break;
    }
    if (buttonState == SWITCH_IDLE) {
      enableGpioInterrupt(true);
      eventFlag = false;
      break;
    }
    vTaskDelay(10 / portTICK_PERIOD_MS);
  }

  // 10秒ごとにバインドされたライトを出力
  static uint32_t lastPrint = 0;
  if (millis() - lastPrint > 10000) {
    lastPrint = millis();
    zbSwitch.printBoundDevices();
  }
}
```

#### デモンストレーション

<iframe
  className="youtube-video-r"
  src="https://www.youtube.com/embed/Z2NROYx7hcQ"
  title="XIAO Zigbe Light bulb/switch Example"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  style={{ width: '380px', height: '640px' }}
></iframe>

おめでとうございます！Zigbee制御の照明プロジェクトを無事に完成させましたね！まだまだ多くのエキサイティングなZigbeeアプリケーションがあなたを待っています。これからも素晴らしい取り組みを続けてください！

## 参考資料

- [Zigbee Examples- Arduino](https://github.com/espressif/arduino-esp32/blob/master/libraries/Zigbee/examples)
- [ESP Zigbee SDK](https://docs.espressif.com/projects/esp-zigbee-sdk/en/latest/esp32c6/introduction.html)
- [Arduino Core for ESP32 gets a Zigbee wrapper library](https://www.cnx-software.com/2024/08/23/arduino-core-for-esp32-gets-a-zigbee-wrapper-library/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご用意しております。異なるニーズやご希望に応じた複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>