---
description: XIAO ESP32S3 Workspace on SenseCraft AI Platform
title: XIAO ESP32S3 Workspace on SenseCraft AI Platform
keywords:
- Cloud and Chain
- SenseCraft
- SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
sidebar_class_name: hidden
slug: /ja/xiao_esp32s3_workspace
last_update:
  date: 05/15/2025
  author: Frank
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

### XIAO ESP32S3 の接続

1. カメラセンサー拡張ボードのコネクタを XIAO ESP32S3 Sense の B2B コネクタに合わせて押し込み、カメラセンサーを取り付けます。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image4.png)

2. XIAO ESP32S3 Sense を USB 経由でコンピュータに接続し、USB JAG/シリアルデバッグユニットを選択してデバイスに接続します。

:::note

AIモデルを XIAO ESP32S3 Sense や Grove Vision AI v2 にデプロイする際は、Chrome、Opera、または Edge を使用してください。

:::

3. デバイスに接続すると、デバイス情報、モデル情報を読み取り、モデルを実行して推論を行います。ユーザーは Confidence と IoU 設定を調整して、モデルの推論精度を微調整できます。

- Confidence：Confidence は、モデルが予測に割り当てる確信度または確率を指します。
- IoU：IoU は、予測されたバウンディングボックスと真実のバウンディングボックスの精度を評価するために使用されます。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image5.png)

### AIモデルの置き換え

デバイスで現在実行中のモデルを置き換える必要がある場合、SenseCraft AI プラットフォームは以下の2つの方法を提供します。

1. SenseCraft AI プラットフォーム上で公開されているモデル、またはユーザーアカウント内のモデルを選択して置き換えます。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image6.png)

2. モデルを直接アップロードして置き換えます。
- モデル名：名前を入力
- モデルファイル：tflite形式のモデルをアップロード
- IDオブジェクト：モデル認識のクラス

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image7.png)

### 出力

検出されたターゲットが条件を満たした場合に、XIAO ESP32S3 の黄色LEDが点灯するように条件を設定します。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image8.png)

例：デバイスが顔を検出し、確信度が43を超えた場合、デバイスの黄色LEDを点灯させます。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image9.png)



## **技術サポート**

**SenseCAP Indicator に関するヘルプが必要ですか？私たちがサポートします！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>