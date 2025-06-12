---
description: Seeed Studio XIAO SAMD21でのSPI通信
title: Seeed Studio XIAO SAMD21でのSPI通信
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO-SPI-Communication-Interface
last_update:
  date: 05/15/2025
  author: shuxu hu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

### SPI通信インターフェース

### ハードウェア

**必要な材料**

- [Seeed Studio XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) x 1

- [Grove-高精度圧力センサー](https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html)

- Type-Cケーブル x1

**ハードウェア接続**

- **ステップ1.** Grove-高精度圧力センサーの**CSK**をSeeed Studio XIAOの**SCK**に接続します。

- **ステップ2.** センサーの**CS**をSeeed Studio XIAOの**D3**に接続します。

- **ステップ3.** センサーの**SDO**をSeeed Studio XIAOの**MISO**に接続します。

- **ステップ4.** センサーの**SDI**をSeeed Studio XIAOの**MOSI**に接続します。

- **ステップ5.** センサーの**GND**をSeeed Studio XIAOの**GND**に接続します。

- **ステップ6.** センサーの**3V3**をSeeed Studio XIAOの**3.3V**に接続します。

- **ステップ7.** Type-Cケーブルを使用してSeeed Studio XIAOをPCに接続します。

### ソフトウェア

:::note

Arduinoを初めて使用する場合は、開始する前に[Arduinoの始め方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

- **ステップ1.** Githubから[DPS310-Pressure-Sensor](https://github.com/Infineon/DPS310-Pressure-Sensor.git)ライブラリをダウンロードします。

- **ステップ2.** [Arduinoライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

- **ステップ3.** 以下のコードをArduino IDEにコピーしてアップロードします。

```c
#include <Dps310.h>

// Dps310オブジェクト
Dps310 Dps310PressureSensor = Dps310();

void setup()
{
  // スレーブセレクトラインのピン番号
  // XMC2GO
  int16_t pin_cs = 3;
  // XMC 1100 Bootkit & XMC4700 Relax Kitの場合は以下の行をコメント解除
  // int16_t pin_cs = 10;

  Serial.begin(9600);
  while (!Serial);

  // Dps310を初期化するためにbeginを呼び出します
  // パラメータpin_nrはマイコンのCSピン番号です
  Dps310PressureSensor.begin(SPI, pin_cs);

  // 温度測定レート（0から7の値）
  // 2^temp_mr 温度測定結果/秒
  int16_t temp_mr = 2;
  // 温度オーバーサンプリングレート（0から7の値）
  // 2^temp_osr 内部温度測定/結果
  // 高い値は精度を向上させます
  int16_t temp_osr = 2;
  // 圧力測定レート（0から7の値）
  // 2^prs_mr 圧力測定結果/秒
  int16_t prs_mr = 2;
  // 圧力オーバーサンプリングレート（0から7の値）
  // 2^prs_osr 内部圧力測定/結果
  // 高い値は精度を向上させます
  int16_t prs_osr = 2;
  // startMeasureBothContはバックグラウンドモードを有効にします
  // 温度と圧力が自動的に測定されます
  // 高精度と高測定レートを同時に使用することはできません。
  // 詳細はデータシートを参照してください（または試行錯誤）。
  int16_t ret = Dps310PressureSensor.startMeasureBothCont(temp_mr, temp_osr, prs_mr, prs_osr);
  // 温度または圧力のみを測定するには、以下のコメント行を使用してください
  // int16_t ret = Dps310PressureSensor.startMeasureTempCont(temp_mr, temp_osr);
  // int16_t ret = Dps310PressureSensor.startMeasurePressureCont(prs_mr, prs_osr);

  if (ret != 0)
  {
    Serial.print("初期化失敗! ret = ");
    Serial.println(ret);
  }
  else
  {
    Serial.println("初期化完了!");
  }
}

void loop()
{
  uint8_t pressureCount = 20;
  float pressure[pressureCount];
  uint8_t temperatureCount = 20;
  float temperature[temperatureCount];

  // この関数は連続測定の結果を指定された配列に書き込みます
  // temperatureCountとpressureCountは関数呼び出し時に配列のサイズを保持する必要があります
  // 関数終了後、temperatureCountとpressureCountは配列に書き込まれた値の数を保持します
  // 注意: Dps310は32以上の結果を保存できません。結果バッファが満杯になると、新しい測定結果は保存されません
  int16_t ret = Dps310PressureSensor.getContResults(temperature, temperatureCount, pressure, pressureCount);

  if (ret != 0)
  {
    Serial.println();
    Serial.println();
    Serial.print("失敗! ret = ");
    Serial.println(ret);
  }
  else
  {
    Serial.println();
    Serial.println();
    Serial.print(temperatureCount);
    Serial.println(" 個の温度値が見つかりました: ");
    for (int16_t i = 0; i < temperatureCount; i++)
    {
      Serial.print(temperature[i]);
      Serial.println(" 度 Celsius");
    }

    Serial.println();
    Serial.print(pressureCount);
    Serial.println(" 個の圧力値が見つかりました: ");
    for (int16_t i = 0; i < pressureCount; i++)
    {
      Serial.print(pressure[i]);
      Serial.println(" Pascal");
    }
  }

  // Dps310がバッファを再充填できるように少し待ちます
  delay(10000);
}
```

- **ステップ4.** アップロードが成功した後、**ツール** > **シリアルモニタ**をクリックするか、**Ctrl+Shift+M**を同時に押してシリアルモニタを開きます。出力は以下のように表示されます：

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/spi.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/spi.png" alt="pir" width={600} height="auto" /></p>