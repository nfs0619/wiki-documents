---
description: トレーニング（物体検出）の使用方法
title: 物体検出
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/1.9.webp
slug: /ja/sensecraft_ai_training_object_detection
sidebar_position: 2
last_update:
  date: 05/15/2025
  author: qiuyu wei
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# トレーニングの種類 - 物体検出

## 物体検出の特徴

Seeed SenseCraft AI プラットフォームは、物体検出タスクに特化した効率的な AI トレーニングツールです。高度な **YOLO - World 物体検出モデル** を基盤としており、以下の2つの便利なトレーニング方法を提供します：

- **クイックトレーニング**

特徴：画像データは不要です。ターゲット名を入力するだけで、単一クラスの物体検出モデルを迅速に生成できます。
利点：シンプルなシナリオに最適で、迅速なモデル作成と展開が可能です。

- **画像収集トレーニング**

特徴：ターゲット名とアップロードされた画像データを組み合わせてトレーニングを行います。
利点：多様な画像データを活用することで、生成されたモデルの検出精度を大幅に向上させ、高精度が求められるアプリケーションに適しています。

これら2つの方法により、SenseCraft プラットフォームは多様な物体検出モデルのトレーニングニーズに対応し、AI 開発の複雑さを簡素化しながら、使いやすさと精度を両立させています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.0.png" style={{width:750, height:'auto'}}/></div>

## クイックトレーニング

**人間を認識する**シンプルなデモを作成します。クイックトレーニング機能は、YOLO – World 物体検出モデルの以下の主要な特徴を活用します：

クイックトレーニング機能は、YOLO の強みを活用して単一クラス検出モデルを効率的に作成します。事前学習済みの重み、テキストセマンティクス、効率的な特徴抽出を組み合わせることで、画像データを必要とせずに「人間」などの特定のモデルを生成します。

### ステップ 1. オブジェクト名を決定する

テキストボックスにターゲット名を入力します。その後、**「トレーニング開始」** をクリックします。

:::tip
トレーニングセッションは1～3分間続きますので、しばらくお待ちください！
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.1.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 2. モデルのトレーニングとアップロード

モデルのトレーニングが完了すると、モデルが展開され、Grove Vision AI (V2) が展開先として選択されます。その後、正しいシリアルポートを選択して接続し、最終的にモデルトレーニングが完了するまで1～3分間お待ちください！

:::caution
現在、物体検出におけるデバイス選択は **Grove Vision AI (V2)** のみ対応しています。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.2.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.3.png" style={{width:1000, height:'auto'}}/></div>

### 結果のデモンストレーション

上記の手順を完了すると、モデルが正常に展開され実行されますが、**信頼度閾値** と **IoU 閾値** の設定に注意する必要があります。これらの設定はモデルの認識能力に影響を与えます。

:::tip
**信頼度閾値:** モデルが検出を有効とみなすために必要な最小信頼スコアで、低信頼度の予測をフィルタリングします。

**IoU 閾値:** 予測されたバウンディングボックスを真の正解として分類するために必要な最小の交差面積（IoU）値で、予測と実際のボックス間の重なり測定の精度を保証します。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.4.png" style={{width:800, height:'auto'}}/></div>

## 画像収集トレーニング

**イヤホンを認識する**デモを作成します。YOLO – 世界的な物体検出モデルを基に、テキストと画像のトレーニングをカスタマイズすることで、生成されたモデルの検出精度を向上させることができます。

### ステップ 1. オブジェクト名を決定する

まず、テキストボックスにターゲット名を入力し、**Grove Vision AI (V2)** を選択して接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.2.png" style={{width:1000, height:'auto'}}/></div>

:::tip
接続が成功すると、右側のボックスにカメラのライブプレビューが表示されます。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.3.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 2. 画像をキャプチャする

次に、カメラをターゲットオブジェクトに向けて **「キャプチャ」** をクリックし、ターゲットオブジェクトを赤いボックスで囲み、最後に **「確認」** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.4.png" style={{width:1000, height:'auto'}}/></div>

:::tip
画像素材が多いほど、モデルの認識精度が向上します。
:::

### ステップ 3. モデルをトレーニングしてアップロードする

**「トレーニング」** をクリックし、モデルのトレーニングが完了するまでしばらく待ちます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.5.png" style={{width:1000, height:'auto'}}/></div>

そして、いよいよモデルのデプロイメントの時間です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.6.png" style={{width:1000, height:'auto'}}/></div>

### 結果のデモンストレーション

上記の手順が完了すると、モデルが正常にトレーニングされ、デプロイされます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.7.gif" style={{width:1000, height:'auto'}}/></div>


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>