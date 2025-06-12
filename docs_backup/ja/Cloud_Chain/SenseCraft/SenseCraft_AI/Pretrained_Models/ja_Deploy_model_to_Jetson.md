---
description: Sensecraft AI プラットフォームで Jetson にモデルをデプロイする
title: for reComputer Jetson
keywords:
- Cloud and Chain
- SenseCraft
- SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
slug: /ja/sensecraft_deploy_model_to_jetson
sidebar_position: 4
last_update:
  date: 05/15/2025
  author: Frank
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

SenseCraft AI プラットフォームは、Jetson Orin、XIAO ESP32 などのエッジデバイスに AI モデルをデプロイする非常に簡単な方法を提供します。シームレスなエッジ AI モデルのデプロイを今すぐお楽しみください！<br />

1. Jetson デバイス用の AI モデルを選択またはアップロードします<br />
2. AI モデルの詳細ページにアクセスし、「Deploy Model」ボタンをクリックします<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/10.png)

### **ステップ 1 SenseCraft AI-Jetson をインストールする**

1. Jetson デバイスにすでに SenseCraft AI がインストールされている場合は、直接ステップ 2 に進んでください。

2. Jetson をディスプレイに接続し、電源を入れます。

3. デバイスにマウスとキーボードを接続し、ターミナルで以下のコマンドを入力してアプリケーションを実行します。

```
bash <(wget -qO- https://sensecraft-statics.seeed.cc/edge-ai/init-script/edge-ai-setup.sh)
```

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/11.png)

4. SenseCraft AI-Jetson のインストールが完了したら、ステップ 2 に進んでください。<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/12.png)

### **ステップ 2 デバイスを選択する**
1. すでにプラットフォームにデバイスを追加している場合は、デバイスを直接選択し、「Next」をクリックしてステップ 3 に進んでください。<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/13.png)

2. 新しいデバイスを追加する必要がある場合は、「Add Device」ボタンをクリックすると、Add Device ウィンドウが表示されます。<br />
3. デバイス名を入力します。<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/14.png)

4. デバイス上の SenseCraft AI-Jetson アプリケーションにアクセスし、設定ページに移動します。<br />
5. 「Bind to SenseCraft AI platform」設定を有効にし、バインドコードを取得します。<br />
6. SenseCraft AI プラットフォームに戻り、有効なバインドコードを入力して追加を完了します。<br />

:::note
このバインドコードが重複している場合、一時的な名前を入力する必要があります。
:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/15.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/16.png)

7. デバイスを選択し、「Next」をクリックしてステップ 3 に進みます。

### **ステップ 3 ストリームを選択する**
1. デバイスの既存のビデオストリームに AI モデルを適用したい場合は、ビデオストリームを直接選択し、「Send」をクリックしてモデルをデバイスに送信します。<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/17.png)

2. 新しいビデオストリームに AI モデルを適用したい場合は、「Add Stream」ボタンをクリックし、新しいストリームの情報を入力します。<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/18.png)

ストリーム情報の詳細は以下の表を参照してください。

| **フィールド** | **内容** |
| --- | --- |
| **Stream Name** | 1 このストリームのカスタム名<br />2 空欄にはできません |
| **Video Type** | 1 IP カメラ：IP カメラにアクセスするには、有効な rtsp URL を入力する必要があります<br />2 USB カメラ：USB カメラをデバイスに接続し、自動的に USB を認識した後、ビデオパスで正しい USB カメラを選択します。<br />3 ビデオ：デバイスに内蔵されたビデオで、ビデオパスに入力します |
| **Video Path** | ビデオパス。「Video Type」によって形式が決まります。間違っている場合、デフォルトのビデオが使用されます。 |
| **Confidence Threshold** | 1 検出のためのオブジェクト信頼度の閾値<br />2 フォーマット：float [0, 1] |
| **IoU Threshold** | 1 IoU は、予測されたバウンディングボックスと真実のバウンディングボックスの精度を評価するために使用されます<br />2 フォーマット：float [0, 1] |
| **FPS** | 1 ストリームのフレームレート<br />2 フォーマット：INT [1,60] |
| **Quality** | 1 出力ストリームの品質。デフォルト：50<br />2 フォーマット：int [0,100] |
| **Maximum Detections** | 1 画像ごとの最大検出数。デフォルト：300<br />2 フォーマット：int [0,1000] |
| **Display Frame Rate** | 1 ストリームのフレームレートを表示するかどうか<br />2 フォーマット：Bool [True,False]<br />● True: FPS を表示<br />● False: FPS を表示しない |
| **Display Clock** | 1 時間を表示するかどうか<br />2 フォーマット：Bool [True,False]<br />● True: 時間を表示<br />● False: 時間を表示しない |

3. 「Send」ボタンをクリックしてモデルをデバイスに送信します。モデルのデプロイには約 5 分かかります。プレビュー画面を閉じても問題ありません。デプロイ完了後、デバイスのワークスペースで確認してください。

4. デバイスまたは AI プラットフォーム上のデバイスワークスペースで新しいモデルを確認します。<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/19.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/20.png)

## **技術サポート**

**SenseCAP インジケーターに関するサポートが必要ですか？私たちがお手伝いします！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>