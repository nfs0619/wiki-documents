---
description: 光のコードを例として使用し、Matterの開発フレームワークを紹介します。
title: Matter開発フレームワーク概要
keywords:
- matter
- XIAO
- light
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/matter_development_framework
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Matter開発フレームワーク概要

:::tip
この記事はSeeed Studio XIAO ESP32開発Matterシリーズの第4回チュートリアルです。以前のチュートリアルをまだ読んでいない場合は、まずそれらを読むことをお勧めします。これにより、デバイスが必要な設定を満たしているか確認できます。

- **[Espressif ESP-IDFを使用したXIAOでの開発](https://wiki.seeedstudio.com/ja/xiao_idf)**
- **[XIAO ESP32シリーズでMatterを迅速に始める](https://wiki.seeedstudio.com/ja/getting_started_with_matter)**
- **[XIAO ESP32シリーズでのMatter開発](https://wiki.seeedstudio.com/ja/xiao_esp32_matter_env/)**
:::

Matter開発の世界への明るい旅に出発しましょう。この包括的なチュートリアルでは、典型的な光の例を通じて、Matter開発の基盤を形成する基本的な概念と知識を紹介します。クラスタや属性、コマンドなどの基本から始め、このチュートリアルはMatterフレームワークを自信を持って操作するためのツールを提供します。Matter開発スキルのスイッチをオンにして、接続されたデバイスの輝かしい世界に飛び込みましょう！

## チュートリアル概要

1. **[光の例を理解する](#understanding-the-light-example)**
2. **[デバイスの初期化](#device-initialisation)**
3. **[Matterノードの作成](#create-matter-node)**
4. **[エンドポイントの属性を設定する](#sets-the-attribute-of-the-endpoint)**
5. **[エンドポイントの作成とクラスタの自動マッチング](#create-endpoint--auto-match-cluster)**
6. **[デフォルト値でMatterデバイスを初めて設定する](#setting-up-the-matter-device-for-the-first-time-with-default-values)**
7. **[データ更新と遅延永続化](#data-updates-and-deferred-persistence)**

このセクションでは、ESP-Matterで提供されている[光](https://github.com/espressif/esp-matter/tree/main/examples/light)の例に焦点を当てます。この例は、Matter開発フレームワークの基本概念であるクラスタ、属性、コマンドについて詳しく説明しています。この記事を読むことで、Matter開発フレームワークの構造と認識をより深く理解することができます。

## 光の例を理解する

まず、ESP-Matter環境内のファイルディレクトリとその役割を見てみましょう。

```
- esp-matter/
   - components/
      - esp_matter
      - esp_matter_bridge
      - esp_matter_console
      - esp_matter_controller
      - esp_matter_rainmaker
      - esp_matter_thread_br
   - connectedhomeip/
   - device_hal/
      - button_driver
      - device
      - led_driver
   - docs/
   - examples/
   - tools/
      - mfg_tool
   CMakeLists.txt
   RELEASE_NOTES.md
   export.sh
   install.sh
   requirements.txt
   ...
```

**esp-matter**: Matter開発フレームワーク全体のルートディレクトリです。

**components**: このディレクトリにはさまざまなコンポーネントが含まれており、Matterフレームワークの中核を成しています。
   - esp_matter: ESP32上でのMatterプロトコルスタックの実装で、データモデルやアプリケーション層のロジックなどを含みます。
   - esp_matter_bridge: ESPデバイスを他の非ESPデバイスに橋渡しし、相互運用性を実現するコンポーネントです。
   - esp_matter_console: REPLに基づくインタラクティブコンソールで、Matterデバイスのデバッグや制御に使用されます。
   - esp_matter_controller: Matterコントローラーの機能を実装し、他のMatterデバイスを制御できます。
   - esp_matter_rainmaker: EspressifのRainMakerクラウドプラットフォームと統合し、クラウド制御を可能にします。
   - esp_matter_thread_br: Thread Border Router機能を実装し、Threadネットワークを作成するために使用されます。

**connectedhomeip**: Matterプロトコルスタックの上流オープンソースプロジェクトであり、ESP Matterがコードを同期する元です。

**device_hal**: このディレクトリにはハードウェア抽象化層のドライバが含まれています。
   - button_driver: ボタンドライバ。
   - device: デバイス抽象化で、汎用デバイスインターフェースを定義します。
   - led_driver: LEDドライバ。

**docs**: ESP-Matter開発文書やAPIリファレンスマニュアルが保存されています。

**examples**: Matterフレームワークを使用した開発方法を示すさまざまな例コード。

**tools**: さまざまな開発ツールスクリプトが含まれています。
   - mfg_tool: メーカー証明書を生成するツール。

**CMakeLists.txt**: CMakeビルドスクリプトで、プロジェクトのコンパイルルールを定義します。

**RELEASE_NOTES.md**: リリースノートで、各バージョンの変更点を記録しています。

**export.sh**: Matter関連の環境変数をエクスポートするスクリプト。

**install.sh**: Matter開発に必要な依存関係やツールチェーンをインストールするスクリプト。

**requirements.txt**: Python依存関係リストで、Matter開発フレームワークを実行するために必要なPythonライブラリを指定します。

このディレクトリ構造はMatter開発フレームワークのモジュール設計哲学を反映しています。コアプロトコルスタック、ハードウェア抽象化、アプリケーションコンポーネント、補助ツールなどの各部分がそれぞれの役割を果たしながら有機的に結合され、開発者に完全なMatter開発環境を提供します。

**examples/light**を例に取ると、ESP-Matterが提供する例の構造は以下の通りです。

```
- light/
   - main/
      - CMakeLists.txt
      - app_driver.cpp
      - app_main.cpp
      - app_priv.h
      - idf_components.yml
   CMakeLists.txt
   README.md
   partitions.csv
   sdkconfig.defaults
   ...
```

- **main**: このサブディレクトリには、メインアプリケーションコードと設定ファイルが含まれています。
   - CMakeLists.txt: メインアプリケーションのCMakeビルドスクリプト。
   - app_driver.cpp: 光アプリケーションのドライバコード。
   - app_main.cpp: 光アプリケーションのメインエントリポイント。
   - app_priv.h: 光アプリケーションのプライベート宣言を含むヘッダファイル。
   - idf_components.yml: 光アプリケーションで使用されるESP-IDFコンポーネントの設定ファイル。

- **CMakeLists.txt**: ライト例のためのトップレベルの CMake ビルドスクリプト。

- **README.md**: ライト例に関する情報と手順を提供するリードミーファイル。

- **partitions.csv**: ライト例のパーティションテーブルを定義するファイル。

- **sdkconfig.defaults**: ライト例のデフォルト設定を定義するファイル。

## デバイスの初期化

次に、Matter の開発プロセスをコード分析と理論の組み合わせを通じて深く理解するために、ライトのコードを見ていきます。以下のコードは [manin/app_main.cpp](https://github.com/espressif/esp-matter/blob/main/examples/light/main/app_main.cpp) にあります。

```cpp
app_driver_handle_t light_handle = app_driver_light_init();
app_driver_handle_t button_handle = app_driver_button_init();
app_reset_button_register(button_handle);
```

`app_driver_handle_t light_handle = app_driver_light_init();`: この行はライトドライバを初期化し、ライトドライバインスタンスへのハンドルを返します。

`app_driver_handle_t button_handle = app_driver_button_init();`: ライトの初期化と同様に、この行はボタンドライバを初期化します。

`app_reset_button_register(button_handle);`: この行はリセット操作を処理するための特定の機能にボタンを登録します。

`app_driver_light_init()` 関数を例に取ると、以下のプログラムはすべての電球を初期化しますが、最初の電球（デフォルトの色と明るさの値に設定）しか使用しません。このため、例のプログラムでは1つの電球しか使用できません。

```cpp
// app_driver.cpp
app_driver_handle_t app_driver_light_init()
{
#if CONFIG_BSP_LEDS_NUM > 0
    /* LED を初期化 */
    led_indicator_handle_t leds[CONFIG_BSP_LEDS_NUM];
    ESP_ERROR_CHECK(bsp_led_indicator_create(leds, NULL, CONFIG_BSP_LEDS_NUM));
    led_indicator_set_hsv(leds[0], SET_HSV(DEFAULT_HUE, DEFAULT_SATURATION, DEFAULT_BRIGHTNESS));
    
    return (app_driver_handle_t)leds[0];
#else
    return NULL;
#endif
}
```

## Matter ノードの作成

Matter デバイス構成のメインコードの次のステップは、Matter ノードを作成することです。コードは以下の通りです：

```cpp
node::config_t node_config;

// ノードハンドルは他のエンドポイントを追加/変更するために使用できます。
node_t *node = node::create(&node_config, app_attribute_update_cb, app_identification_cb);
ABORT_APP_ON_FAILURE(node != nullptr, ESP_LOGE(TAG, "Failed to create Matter node"));
```

Matter データモデルは、Matter エコシステム内でデータを表現し整理するための標準化された方法です。これは、デバイス、属性、および相互作用のための共通の言語と構造を定義し、Matter 対応デバイス間の相互運用性とシームレスな通信を可能にします。

以下の図は、Matter のデータモデルでこれがどのように表現されるかを簡略化して示しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/34.png" style={{width:600, height:'auto'}}/></div>

**Matter ノード**:
Matter ノードは、Matter エコシステム内の物理デバイスまたは論理エンティティを表します。これは Matter データモデルの最上位コンポーネントです。各 Matter ノードには一意の識別子があり、1つ以上のエンドポイントを含むことができます。
   - Matter ノードは、Matter エコシステム内の**物理デバイス**を表します。
   - これは、複数のエンドポイント（部屋）を含むことができる家のようなものです。
   - 各 Matter ノードには、ネットワーク内での認識とアドレス指定のための一意の識別子があります。

## エンドポイントの属性を設定する

Matter ノードが作成された後、エンドポイントのプロパティにデフォルト値を設定する必要があります。

```cpp
extended_color_light::config_t light_config;
light_config.on_off.on_off = DEFAULT_POWER;
light_config.on_off.lighting.start_up_on_off = nullptr;
light_config.level_control.current_level = DEFAULT_BRIGHTNESS;
light_config.level_control.lighting.start_up_current_level = DEFAULT_BRIGHTNESS;
light_config.color_control.color_mode = (uint8_t)ColorControl::ColorMode::kColorTemperature;
light_config.color_control.enhanced_color_mode = (uint8_t)ColorControl::ColorMode::kColorTemperature;
light_config.color_control.color_temperature.startup_color_temperature_mireds = nullptr;
```

1. `light_config.on_off.on_off = DEFAULT_POWER;`
   - エンドポイントの初期オン/オフ状態を `DEFAULT_POWER` に設定します。
   - `DEFAULT_POWER` は、デフォルトの電源状態を表す事前定義された定数です（例: `true` はオン、`false` はオフ）。

2. `light_config.on_off.lighting.start_up_on_off = nullptr;`
   - エンドポイントの起動時のオン/オフ状態を `nullptr` に設定します。
   - デバイスが再起動または電源サイクルを行った場合、この値が `nullptr` の場合、最後のオン/オフ状態を使用することを意味します。
   - 非 `nullptr` の値に設定されている場合、指定されたオン/オフ状態を使用することを示します。

3. `light_config.level_control.current_level = DEFAULT_BRIGHTNESS;`
   - エンドポイントの初期輝度レベルを `DEFAULT_BRIGHTNESS` (64) に設定します。
   - `DEFAULT_BRIGHTNESS` は、デフォルトの輝度レベルを表す事前定義された定数です（例: 0 から 254 の間の値）。

4. `light_config.level_control.lighting.start_up_current_level = DEFAULT_BRIGHTNESS;`
   - エンドポイントの起動時の輝度レベルを `DEFAULT_BRIGHTNESS` (64) に設定します。
   - デバイスが再起動または電源サイクルを行った場合、この値が非 `nullptr` の場合、指定された輝度レベルを使用することを意味します。
   - `nullptr` に設定されている場合、最後の輝度レベルを使用することを示します。

5. `light_config.color_control.color_mode = (uint8_t)ColorControl::ColorMode::kColorTemperature;`
   - エンドポイントのカラーモードを `ColorControl::ColorMode::kColorTemperature` に設定します。
   - これは、エンドポイントが色温度モードを使用することを意味し、光の色を色温度を調整することで制御します。
   - `(uint8_t)` は、列挙値を符号なし 8 ビット整数に変換する型キャストです。

6. `light_config.color_control.enhanced_color_mode = (uint8_t)ColorControl::ColorMode::kColorTemperature;`
   - エンドポイントの拡張カラーモードを `ColorControl::ColorMode::kColorTemperature` に設定します。
   - 拡張カラーモードは、より多くの色制御オプションを提供しますが、ここでは色温度モードに設定されています。

7. `light_config.color_control.color_temperature.startup_color_temperature_mireds = nullptr;`
   - エンドポイントの起動時の色温度を `nullptr` に設定します。
   - デバイスが再起動または電源サイクルを行った場合、この値が `nullptr` の場合、最後の色温度設定を使用することを意味します。
   - 非 `nullptr` の値に設定されている場合、指定された色温度値を使用することを示します。

Matter の属性は、デバイスの状態に関する情報を格納するプロパティや特性のようなものです。これには、オン/オフ状態、輝度レベル、色温度などが含まれます。これらの属性は、デバイスの特定の機能に関連するクラスターと呼ばれるグループに整理されています。

属性は、異なるデバイスやアプリがシームレスに通信し、連携するのを容易にします。デバイスプロパティを表現しアクセスする標準的な方法を提供することで、Matter はスマートホームシステムの開発を簡素化し、さまざまなブランドのデバイスが効率的に相互運用できるようにします。

`esp_matter_endpoint.h` は、エンドポイントに関連する定数、データ型、および関数を定義する ESP Matter SDK の重要なヘッダーファイルです。Matter では、エンドポイントはデバイスの論理インターフェースを表し、各エンドポイントにはデバイスの特定の機能を記述および制御する属性とコマンドのセットが含まれています。

```cpp
namespace extended_color_light {
typedef struct config {
    cluster::descriptor::config_t descriptor;
    cluster::identify::config_t identify;
    cluster::groups::config_t groups;
    cluster::scenes_management::config_t scenes_management;
    cluster::on_off::config_t on_off;
    cluster::level_control::config_t level_control;
    cluster::color_control::config_t color_control;
} config_t;

uint32_t get_device_type_id();
uint8_t get_device_type_version();
endpoint_t *create(node_t *node, config_t *config, uint8_t flags, void *priv_data);
esp_err_t add(endpoint_t *endpoint, config_t *config);
} /* extended_color_light */
```

## エンドポイントの作成とクラスタの自動マッチング

上記では、Matterにおいて重要な用語である「エンドポイント」と「クラスタ」について説明しました。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/35.png" style={{width:500, height:'auto'}}/></div>

**エンドポイント（Endpoint(s)）[デバイスタイプ（Device-Type(s)）]**:
エンドポイントは、Matterノード内の特定の機能やサービスを論理的に表現するものです。これは、特定のデバイスタイプに関連する一連の機能や動作をカプセル化します。Matterノードは複数のエンドポイントを持つことができ、それぞれが異なるデバイスタイプを表します。デバイスタイプは、エンドポイントの具体的な特性や機能を定義します。Matterでは、電球、サーモスタット、ドアロックなどの標準的なデバイスタイプが定義されています。各デバイスタイプには、固有の識別子と、それに関連するクラスタ、属性、コマンドの事前定義セットがあります。

- エンドポイントはMatterノード内の論理的なコンポーネントであり、デバイスの特定の機能やサービスを表します。
- 家の部屋のように、各エンドポイントには専用の目的があります（例：寝室、キッチン、リビングルーム）。
- 各エンドポイントは、電球、サーモスタット、ドアロックなどの特定のデバイスタイプに関連付けられています。
- Matterノードは複数のエンドポイントを持つことができ、それぞれが異なるデバイスタイプや機能を表します。

**クラスタ（Cluster(s)）**:
クラスタは、エンドポイント内で関連する属性やコマンドを論理的にグループ化したものです。クラスタはデバイスの特定の機能や特徴を表します。クラスタは、エンドポイントの機能を整理し分類する方法を提供します。例えば、「オン/オフクラスタ」はデバイスのオン/オフに関連する属性やコマンドを含み、「レベルコントロールクラスタ」はデバイスの明るさやレベルを制御するためのものです。

- クラスタはエンドポイント内の論理的なグループであり、関連する属性やコマンドを含みます。
- 部屋の家具やデバイスのようなもので、ライト、テレビ、エアコンなど、それぞれに固有の属性や操作があります。
- 各クラスタはデバイスの特定の機能や特徴を表します。
- 例えば、「オン/オフクラスタ」はデバイスのオン/オフ状態に関連する属性やコマンドを含み、「レベルコントロールクラスタ」はデバイスの明るさやレベルを調整するための属性やコマンドを含みます。
- エンドポイントは複数のクラスタを持つことができ、それぞれが異なる機能を担当します。

まとめると、Matterノードは家のようなもので、複数のエンドポイント（部屋）を含んでいます。各エンドポイントは部屋のように、デバイスの特定の機能やサービスを表します。クラスタは各部屋の家具やデバイスのようなもので、制御や操作のための関連する属性やコマンドを含んでいます。

この階層的な構造により、デバイスはその機能や特性を明確に記述できるため、アプリケーションや他のデバイスがそれらを簡単に操作・制御できるようになります。デバイスタイプ、クラスタ、属性、コマンドを標準化することで、Matterは異なるメーカーのデバイス間の相互運用性と互換性を実現します。

コードでは、属性を設定した後、以下のスニペットによって最終的にエンドポイントが作成されます。そして、設定された属性のクラスタが自動的にマッチングされます。

```cpp
endpoint_t *endpoint = extended_color_light::create(node, &light_config, ENDPOINT_FLAG_NONE, light_handle);
ABORT_APP_ON_FAILURE(endpoint != nullptr, ESP_LOGE(TAG, "Failed to create extended color light endpoint"));
```

クラスタの自動マッチングはどのように実現されるのでしょうか？以下のような属性を設定するスニペットを例に説明します。

```cpp
light_config.level_control.lighting.start_up_current_level = DEFAULT_BRIGHTNESS;
```

`light_config.level_control` はエンドポイント（esp_matter_endpoint.h）内で定義された属性です。そして、`light_config.level_control.lighting` はクラスタ（esp_matter_cluster）内で定義された属性です。この設定により、システムは対応するクラスタを自動的に属性にマッチングさせることができ、開発者が手動で設定する必要がありません。

## Matterデバイスを初期設定で初めてセットアップする

上記の属性、クラスター、エンドポイントが設定されたら、Matterアプライアンスの起動を開始できます。起動の手順と方法は以下の通りです。

```cpp
light_endpoint_id = endpoint::get_id(endpoint);
ESP_LOGI(TAG, "Light created with endpoint_id %d", light_endpoint_id);

/* Matter開始 */
err = esp_matter::start(app_event_cb);
ABORT_APP_ON_FAILURE(err == ESP_OK, ESP_LOGE(TAG, "Failed to start Matter, err:%d", err));

/* デフォルト値でドライバーを開始 */
app_driver_light_set_defaults(light_endpoint_id);
```

ご覧の通り、デフォルト値を設定する関数は`app_driver_light_set_defaults()`であり、エンドポイントIDをパラメータとして渡す必要があります。また、特定のクラスターや属性の値を取得する方法、デフォルトのクラスターや属性値を設定する方法について注意が必要です。その秘密は`app_driver.cpp`に示されています。

```cpp
esp_err_t err = ESP_OK;
void *priv_data = endpoint::get_priv_data(endpoint_id);
led_indicator_handle_t handle = (led_indicator_handle_t)priv_data;
node_t *node = node::get();
endpoint_t *endpoint = endpoint::get(node, endpoint_id);
cluster_t *cluster = NULL;
attribute_t *attribute = NULL;
esp_matter_attr_val_t val = esp_matter_invalid(NULL);

/* 明るさを設定 */
cluster = cluster::get(endpoint, LevelControl::Id);
attribute = attribute::get(cluster, LevelControl::Attributes::CurrentLevel::Id);
attribute::get_val(attribute, &val);
err |= app_driver_light_set_brightness(handle, &val);
```

1. クラスターの取得:
   - クラスターを取得するには、まず`endpoint::get(node, endpoint_id)`関数を使用してエンドポイントへのポインタを取得する必要があります。ここで、`node`はノードへのポインタであり、`endpoint_id`はエンドポイントのIDです。
   - エンドポイントポインタを取得したら、`cluster::get(endpoint, LevelControl::Id)`関数を使用して、指定したエンドポイントとクラスターID（この場合は`LevelControl::Id`）を指定して目的のクラスターへのポインタを取得できます。

2. 特定の属性の取得:
   - クラスターのポインタを取得した後、`attribute::get(cluster, LevelControl::Attributes::CurrentLevel::Id)`関数を使用して、そのクラスター内の特定の属性へのポインタを取得できます。
   - この例では、`LevelControl`クラスターから`CurrentLevel`属性を取得しています。

3. 属性値の取得:
   - 属性の現在の値を取得するには、属性値を格納するための型`esp_matter_attr_val_t`の変数を宣言する必要があります。
   - コードスニペットでは、変数`val`が`esp_matter_invalid(NULL)`で初期化されています。
   - 次に、`attribute::get_val(attribute, &val)`関数を使用して属性の現在の値を取得し、それを`val`変数に格納できます。

4. ライトの明るさを設定:
   - ライトの明るさを設定するには、エンドポイントに関連付けられたLEDインジケータのハンドルを取得する必要があります。
   - コードスニペットでは、プライベートデータポインタ（`priv_data`）を適切な型（`led_indicator_handle_t`）にキャストすることでLEDインジケータハンドルを取得しています。
   - 最後に、`app_driver_light_set_brightness(handle, &val)`関数を呼び出してLEDインジケータの明るさを設定できます。
   - `handle`パラメータはLEDインジケータハンドルであり、`&val`は目的の明るさ値を含む`esp_matter_attr_val_t`変数へのポインタです。

以下は手順の概要です:
1. `endpoint::get(node, endpoint_id)`を使用してエンドポイントポインタを取得します。
2. `cluster::get(endpoint, LevelControl::Id)`を使用してクラスターポインタを取得します。
3. `attribute::get(cluster, LevelControl::Attributes::CurrentLevel::Id)`を使用して属性ポインタを取得します。
4. `attribute::get_val(attribute, &val)`を使用して属性の現在の値を取得します。
5. `app_driver_light_set_brightness(handle, &val)`を使用してライトの明るさを設定します。ここで`handle`はエンドポイントに関連付けられたLEDインジケータハンドルです。

これらの手順を実行することで、クラスターと属性の必要なポインタを取得し、属性の現在の値を取得し、それに基づいてライトの明るさを設定できます。

## データ更新と遅延永続化

`app_driver.cpp` のコードでは、`app_driver_attribute_update()` 関数を使用して属性の値を更新します。

```cpp
if (endpoint_id == light_endpoint_id) {
   led_indicator_handle_t handle = (led_indicator_handle_t)driver_handle;
   if (cluster_id == OnOff::Id) {
      if (attribute_id == OnOff::Attributes::OnOff::Id) {
            err = app_driver_light_set_power(handle, val);
      }
   } else if (cluster_id == LevelControl::Id) {
      if (attribute_id == LevelControl::Attributes::CurrentLevel::Id) {
            err = app_driver_light_set_brightness(handle, val);
      }
   } else if (cluster_id == ColorControl::Id) {
      if (attribute_id == ColorControl::Attributes::CurrentHue::Id) {
            err = app_driver_light_set_hue(handle, val);
      } else if (attribute_id == ColorControl::Attributes::CurrentSaturation::Id) {
            err = app_driver_light_set_saturation(handle, val);
      } else if (attribute_id == ColorControl::Attributes::ColorTemperatureMireds::Id) {
            err = app_driver_light_set_temperature(handle, val);
      }
   }
}
```

このコードスニペットでは、`app_driver_attribute_update` という名前の関数が定義されており、ドライバハンドル (`driver_handle`)、エンドポイント ID (`endpoint_id`)、クラスター ID (`cluster_id`)、属性 ID (`attribute_id`)、および属性値へのポインタ (`val`) を含む複数のパラメータを受け取ります。

この関数の目的は、受信したデータに基づいてライトエンドポイントの属性値を更新することです。特定のロジックに従って、どのライトエンドポイントの属性を更新する必要があるかを判断します。

以下はデータ更新ロジックのステップごとの説明です：

1. 関数はまず、`endpoint_id` が `light_endpoint_id` と一致するかどうかを確認します。これにより、更新がライトエンドポイントを対象としていることを確認します。

2. `endpoint_id` が一致する場合、`driver_handle` を適切な型 (`led_indicator_handle_t`) にキャストして、ライトエンドポイントに関連付けられた LED インジケータのハンドルを取得します。

3. 次に、関数は `cluster_id` を確認して、属性がどのクラスターに属しているかを判断します。サポートされているクラスターは `OnOff`、`LevelControl`、および `ColorControl` の3つです。

4. `cluster_id` に応じて、関数はさらに `attribute_id` を確認し、そのクラスター内の特定の属性を識別します。

5. `cluster_id` と `attribute_id` に基づいて、対応するセッター関数を呼び出して属性値を更新します：
   - `cluster_id` が `OnOff::Id` で、`attribute_id` が `OnOff::Attributes::OnOff::Id` の場合、`app_driver_light_set_power(handle, val)` を呼び出してライトの電源状態を設定します。
   - `cluster_id` が `LevelControl::Id` で、`attribute_id` が `LevelControl::Attributes::CurrentLevel::Id` の場合、`app_driver_light_set_brightness(handle, val)` を呼び出してライトの明るさレベルを設定します。
   - `cluster_id` が `ColorControl::Id` の場合、さらに `attribute_id` を確認します：
     - `attribute_id` が `ColorControl::Attributes::CurrentHue::Id` の場合、`app_driver_light_set_hue(handle, val)` を呼び出してライトの色相を設定します。
     - `attribute_id` が `ColorControl::Attributes::CurrentSaturation::Id` の場合、`app_driver_light_set_saturation(handle, val)` を呼び出してライトの彩度を設定します。
     - `attribute_id` が `ColorControl::Attributes::ColorTemperatureMireds::Id` の場合、`app_driver_light_set_temperature(handle, val)` を呼び出してライトの色温度を設定します。

全体として、この関数はライトエンドポイントの属性値を更新するための中央ポイントとして機能します。必要な情報（エンドポイント ID、クラスター ID、属性 ID、属性値）を受け取り、クラスターと属性 ID に基づいて更新を適切なセッター関数にディスパッチします。

このようにロジックを整理することで、コードはよりモジュール化され、保守が容易になります。この関数を使用することで、受信データに基づいてライトの特性（電源状態、明るさ、色相、彩度、色温度）を簡単に更新できます。

しかし、すべての属性がリアルタイムで更新されるわけではありません。頻繁に変更される可能性のある属性を遅延永続化としてマークするコードを使用することで、パフォーマンスを向上させるとともに、不揮発性メモリへの書き込み回数を減らし、デバイスの寿命を延ばすことができます。

```cpp
/* 頻繁に変更される可能性のある属性を遅延永続化としてマーク */
cluster_t *level_control_cluster = cluster::get(endpoint, LevelControl::Id);
attribute_t *current_level_attribute = attribute::get(level_control_cluster, LevelControl::Attributes::CurrentLevel::Id);
attribute::set_deferred_persistence(current_level_attribute);

cluster_t *color_control_cluster = cluster::get(endpoint, ColorControl::Id);
attribute_t *current_x_attribute = attribute::get(color_control_cluster, ColorControl::Attributes::CurrentX::Id);
attribute::set_deferred_persistence(current_x_attribute);
```

## 独自のデータモデルの定義

このセクションでは、Matter仕様で定義されている標準的なエンドポイント、クラスター、属性、およびコマンドを作成する方法を示します。

#### エンドポイント

デバイスは、例の *app_main.cpp* 内で作成されたエンドポイント/デバイスタイプを編集することでカスタマイズできます。例:

-  on_off_light:

```cpp
   on_off_light::config_t light_config;
   endpoint_t *endpoint = on_off_light::create(node, &light_config, ENDPOINT_FLAG_NONE);
```

-  temperature_sensor:

```cpp
    esp_matter::endpoint::temperature_sensor::config_t temperature_sensor_config;
    endpoint_t *endpoint = temperature_sensor::create(node, &temperature_sensor_config, ENDPOINT_FLAG_NONE, NULL);
```

-  fan:

```cpp
   fan::config_t fan_config;
   endpoint_t *endpoint = fan::create(node, &fan_config, ENDPOINT_FLAG_NONE);
```

-  door_lock:

```cpp
   door_lock::config_t door_lock_config;
   endpoint_t *endpoint = door_lock::create(node, &door_lock_config, ENDPOINT_FLAG_NONE);
```

-  window_covering_device:

```cpp
   window_covering_device::config_t window_covering_device_config(static_cast<uint8_t>(chip::app::Clusters::WindowCovering::EndProductType::kTiltOnlyInteriorBlind));
   endpoint_t *endpoint = window_covering_device::create(node, &window_covering_config, ENDPOINT_FLAG_NONE);
```

   ``window_covering_device`` の ``config_t`` 構造体には、デフォルトの「ローラーシェード」と異なるエンドプロダクトタイプを指定できるコンストラクタが含まれています。
   一度 ``config_t`` インスタンスが生成されると、そのエンドプロダクトタイプは変更できません。

- pump:

```cpp
   pump::config_t pump_config(1, 10, 20);
   endpoint_t *endpoint = pump::create(node, &pump_config, ENDPOINT_FLAG_NONE);
```

   ``pump`` の ``config_t`` 構造体には、最大圧力、最大速度、および最大流量値を指定できるコンストラクタが含まれています。これらが設定されていない場合、デフォルトで null に設定されます。
   一度 ``config_t`` インスタンスが生成されると、これら3つの値は変更できません。

### クラスター

エンドポイントに追加のクラスターを追加することもできます。例:

-  on_off:

```cpp
   on_off::config_t on_off_config;
   cluster_t *cluster = on_off::create(endpoint, &on_off_config, CLUSTER_FLAG_SERVER, on_off::feature::lighting::get_id());
```

-  temperature_measurement:

```cpp
   temperature_measurement::config_t temperature_measurement_config;
   cluster_t *cluster = temperature_measurement::create(endpoint, &temperature_measurement_config, CLUSTER_FLAG_SERVER);
```

- window_covering:

```cpp
   window_covering::config_t window_covering_config(static_cast<uint8_t>(chip::app::Clusters::WindowCovering::EndProductType::kTiltOnlyInteriorBlind));
   cluster_t *cluster = window_covering::create(endpoint, &window_covering_config, CLUSTER_FLAG_SERVER);
```

   ``window_covering`` の ``config_t`` 構造体には、デフォルトの「ローラーシェード」と異なるエンドプロダクトタイプを指定できるコンストラクタが含まれています。
   一度 ``config_t`` インスタンスが生成されると、そのエンドプロダクトタイプは変更できません。

- pump_configuration_and_control:

```cpp
   pump_configuration_and_control::config_t pump_configuration_and_control_config(1, 10, 20);
   cluster_t *cluster = pump_configuration_and_control::create(endpoint, &pump_configuration_and_control_config, CLUSTER_FLAG_SERVER);
```

   ``pump_configuration_and_control`` の ``config_t`` 構造体には、最大圧力、最大速度、および最大流量値を指定できるコンストラクタが含まれています。これらが設定されていない場合、デフォルトで null に設定されます。
   一度 ``config_t`` インスタンスが生成されると、これら3つの値は変更できません。

### 属性とコマンド

クラスターに追加の属性やコマンドを追加することもできます。
例:

-  属性: on_off:

```cpp
   bool default_on_off = true;
   attribute_t *attribute = on_off::attribute::create_on_off(cluster, default_on_off);
```

-  属性: cluster_revision:

```cpp
   uint16_t default_cluster_revision = 1;
   attribute_t *attribute = global::attribute::create_cluster_revision(cluster, default_cluster_revision);
```

-  コマンド: toggle:

```cpp
   command_t *command = on_off::command::create_toggle(cluster);
```

-  コマンド: move_to_level:

```cpp
   command_t *command = level_control::command::create_move_to_level(cluster);
```

### 機能

クラスターに適用可能なオプション機能を追加することもできます。

- 機能: taglist: Descriptor クラスター:

```cpp
   cluster_t* cluster = cluster::get(endpoint, Descriptor::Id);
   descriptor::feature::taglist::add(cluster);
```

### カスタムデータモデルフィールドの追加

このセクションでは、Matter仕様で定義されていない、ベンダー固有のカスタムエンドポイント、クラスター、属性、およびコマンドを作成する方法を示します。

#### エンドポイント

クラスターなしで非標準エンドポイントを作成できます。

-  エンドポイント作成:

```cpp
   endpoint_t *endpoint = endpoint::create(node, ENDPOINT_FLAG_NONE);
```

#### クラスター

非標準/カスタムクラスターも作成できます:

-  クラスター作成:

```cpp
   uint32_t custom_cluster_id = 0x131bfc00;
   cluster_t *cluster = cluster::create(endpoint, custom_cluster_id, CLUSTER_FLAG_SERVER);
```

#### 属性とコマンド

非標準/カスタム属性を任意のクラスターに作成できます:

-  属性作成:

```cpp
   uint32_t custom_attribute_id = 0x0;
   uint16_t default_value = 100;
   attribute_t *attribute = attribute::create(cluster, custom_attribute_id, ATTRIBUTE_FLAG_NONE, esp_matter_uint16(default_value);
```

-  コマンド作成:

```cpp
   static esp_err_t command_callback(const ConcreteCommandPath &command_path, TLVReader &tlv_data, void
   *opaque_ptr)
   {
      ESP_LOGI(TAG, "Custom command callback");
      return ESP_OK;
   }

   uint32_t custom_command_id = 0x0;
   command_t *command = command::create(cluster, custom_command_id, COMMAND_FLAG_ACCEPTED, command_callback);
```

Matterデータモデルは、これらのコンポーネントを階層的に整理しています。Matterノードは1つ以上のエンドポイントを含み、それぞれが特定のデバイスタイプを表します。各エンドポイントは複数のクラスターで構成されており、関連する属性とコマンドをグループ化しています。属性はクラスターの状態と設定を保存し、コマンドはデバイスとの相互作用や制御に使用されます。

このようにデータモデルを構造化することで、Matterは異なるメーカーのデバイス間での相互運用性と標準化を可能にします。開発者は定義されたデバイスタイプ、クラスター、属性、コマンドを使用して、Matter対応デバイスをシームレスに制御および通信できるアプリケーションを作成できます。

Matterデータモデルは、デバイスがその機能を記述し、相互にやり取りするための共通言語とフレームワークを提供し、より統一された一貫性のあるスマートホーム体験を実現します。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>