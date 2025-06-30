---
description: Seeed Studio XIAO SAMD21でのTinyML
title: Seeed Studio XIAO SAMD21でのTinyML
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino-XIAO-TinyML
last_update:
  date: 05/15/2025
  author: shuxu hu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio XIAOシリーズでのTinyML

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/Seeeduino-XIAO-pinout.jpg" /></div>

モデル最適化の最近の進展と、マイクロコントローラ上で機械学習モデルの推論を実行するために特化したフレームワークの登場のおかげで、これらの小型デバイスにより多くの知能を持たせることが可能になりました。現在では、オーディオシーン認識（例：象の活動やガラスが割れる音）、ホットワード検出（特定のフレーズでデバイスを起動）や、簡単な画像認識タスクのために、ニューラルネットワークをマイクロコントローラ上にデプロイすることができます。組み込みマイクロコントローラを搭載したデバイスは、古いセンサーに新しい生命と意味を与えるために使用できます。例えば、異常検出や予知保全のために機構に取り付けられた加速度計を使用したり、[このデモ](https://wiki.seeedstudio.com/ja/Wio-Terminal-Edge-Impulse-Distinguish-Alochol/)のように様々な種類のリキュールを区別することができます！
<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/booze.jpg" /></div>

**TinyMLの可能性は本当に無限大です。**

私たちは、別のSeeed Studio製品であるプラスチックケースに収められたコンパクトな開発ボードWio TerminalにTinyMLモデルをデプロイする[一連のシリーズ](https://wiki.seeedstudio.com/ja/Wio-Terminal-TinyML/)を作成しました。しかし、さらに小型化し、ARM Cortex M0+および[Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)ボードに同様のモデルをデプロイすることも可能です。このボードは親指ほどの大きさ（21×17.8mm）で、消費電力はわずか1.33mAh（つまり、150mAのバッテリーで約112時間動作可能、ディープスリープに入れればさらに長時間）で、価格はわずか4.3USDです。

このプロジェクトでは、Seeed Studio XIAO SAMD21およびSeeed Studio XIAO RP2040開発ボードへのモデルのトレーニングとデプロイをカバーします。追加情報については、対応するビデオをご覧ください！

<iframe width={560} height={315} src="https://www.youtube.com/embed/04_7U8MzVKg" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## データ収集とモデルトレーニング

ソフトウェアエンジニアは、椅子に座って画面を見つめる時間が長くなりがちです。そして、日が進むにつれて正しい姿勢を維持するのが難しくなります。もし、自分の特定の体勢を学習し、正しい姿勢と間違った姿勢を認識し、猫背になりすぎたり「Pythonポーズ」になったときに警告してくれるデバイスがあればいいのに…と思いませんか？実は、それが可能です！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/utxkrcg5yss61.png" /></div>

このタスクに最適なセンサーで、機械学習モデルにデータを提供するのは、明らかに加速度計です。オリジナルのSeeed Studio XIAO SAMD21およびSeeed Studio XIAO RP2040は非常に小型であるため、加速度計センサーは内蔵されていませんが、新しいSeeed Studio XIAO nRF52840 Senseには内蔵加速度計が搭載されています。

オリジナルのSeeed Studio XIAO SAMD21およびXIAO RP2040を使用する場合は、[Grove LIS3DH加速度計](https://wiki.seeedstudio.com/ja/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR/)モジュールを[Seeed Studio XIAO拡張ボード](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)に接続し、データ収集を開始できます。各姿勢について3つのデータサンプルを収集し、デバイスを背中のTシャツに取り付けて60秒間記録します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/image-31.png" /></div>

各サンプルでは、同じ姿勢を維持しますが、通常の動きをシミュレートするために腕、頭、胴体を少し動かします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/image-32.png" /></div>

非常にゆっくりとした動きのデータを扱うため、5秒間のタイムウィンドウと1秒のウィンドウシフト、そしてFlatten処理ブロックを選択します。非常にシンプルな全結合ネットワークでも良好な精度を提供しました。この記事の最後の参考セクションには、Edge Impulseプロジェクトの公開バージョンへのリンクがあります。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/image-33.png" /></div>

さらにデータを収集し、デバイスの衣服上の位置にいくらかの変動を加えても正しい姿勢と不正な姿勢を認識できるようにすることで、改善が可能です。このデバイスは個人使用を想定しているため、他の人の姿勢に一般化する必要はなく、簡単に再トレーニングできます。トレーニング後にLive classificationタブで姿勢検出の精度を確認できます。

## モデルのデプロイ

精度に満足したら、結果として得られたモデルをArduinoライブラリとしてダウンロードし、それをArduinoのスケッチ/ライブラリフォルダにコピーしてください。この記事の下部にある「リファレンス」セクションでサンプルコードを見つけることができます。このサンプルコードは、5秒間のサンプルを収集し、推論を実行し、不適切な姿勢のいずれかが検出された場合にブザーをオンにします。

```cpp
void loop()
{

    ei_printf("サンプリング中...\n");

    // IMUから読み取る値のためのバッファをここで確保します
    float buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE] = { 0 };

    for (size_t ix = 0; ix < EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE; ix += 3) {
        // 次のタイミングを決定（後でスリープ）
        uint64_t next_tick = micros() + (EI_CLASSIFIER_INTERVAL_MS * 1000);

        lis.getAcceleration(&buffer[ix], &buffer[ix+1], &buffer[ix + 2]);
        buffer[ix + 0] *= CONVERT_G_TO_MS2;
        buffer[ix + 1] *= CONVERT_G_TO_MS2;
        buffer[ix + 2] *= CONVERT_G_TO_MS2;

        delayMicroseconds(next_tick - micros());
    }

    // 生のバッファを分類可能な信号に変換します
    signal_t signal;
    int err = numpy::signal_from_buffer(buffer, EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE, &signal);
    if (err != 0) {
        ei_printf("バッファから信号を作成できませんでした (%d)\n", err);
        return;
    }

    // 分類器を実行します
    ei_impulse_result_t result = { 0 };

    err = run_classifier(&signal, &result, debug_nn);
    if (err != EI_IMPULSE_OK) {
        ei_printf("エラー: 分類器の実行に失敗しました (%d)\n", err);
        return;
    }

    // 予測結果を出力します
    ei_printf("予測結果 ");
    ei_printf("(DSP: %d ms., 分類: %d ms., 異常検知: %d ms.)",
        result.timing.dsp, result.timing.classification, result.timing.anomaly);
    ei_printf(": \n");
    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: %.5f\n", result.classification[ix].label, result.classification[ix].value);
    }
#if EI_CLASSIFIER_HAS_ANOMALY == 1
    ei_printf("    異常スコア: %.3f\n", result.anomaly);
#endif
    
  if (result.classification[1].value > ALARM_THRESHOLD || result.classification[2].value > ALARM_THRESHOLD)
  {     
  tone(BUZZER_PIN, 523, 250);
  delay(250);
  noTone(BUZZER_PIN);
  delay(250);  
  tone(BUZZER_PIN, 523, 250);
  delay(250);  
  noTone(BUZZER_PIN);    
  }

}
```

これは比較的ゆっくりと変化するデータであり、迅速な応答時間を必要としないため、通常の逐次推論パイプラインがこのアプリケーションには適しています。

さらに一歩進めると、最新のSeeed Studio XIAO nRF52840を使用し、デバイスをユーザーのスマートフォンに接続することで、より良いアラート、統計情報などを提供することができます。

楽しく tinkering を楽しみ、良い姿勢を保つことを忘れないでください！

## リファレンス

- [Edge Impulse Public project](https://studio.edgeimpulse.com/public/20025/latest)

- [Project Github](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/SeeeduinoXIAO_TinyML_7_Posture_Detection)