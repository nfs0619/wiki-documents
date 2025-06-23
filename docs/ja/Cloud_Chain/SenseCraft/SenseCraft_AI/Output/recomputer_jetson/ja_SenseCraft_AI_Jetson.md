---
description: SenseCraft AI Jetson
title: Tolkit for reComputer Jetson
keywords:
- Cloud and Chain
- SenseCraft
- SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
slug: /ja/sensecraft_ai_jetson
sidebar_position: 1
last_update:
  date: 05/15/2025
  author: Frank
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

SenseCraft AI-Jetsonは、NVIDIA Jetson Edge AIデバイス向けに設計された開発ツールキットおよびプラットフォームです。「Quickstart Script」を実行するだけで、事前にロードされたビデオとAIモデルを使用した例のアプリケーションを表示するインタラクティブなユーザーインターフェースが提供されます。USBカメラやIPカメラを追加したい場合は、数回のクリックで簡単に追加できます！

提供されるさまざまな組み込みAIモデルに加えて、SenseCraft AIプラットフォーム上の多数の公開モデルにアクセスでき、特定のシナリオに合わせたAIモデルをダウンロードして展開し、ニーズに基づいた個別のAIソリューションを作成することができます。SenseCraft AIは、視覚AIのためのインテリジェントな意思決定パートナーであり、シンプルで柔軟かつ効率的な推論とソリューション構築能力を提供します。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/video.gif)

## SenseCraft AI-Jetsonのインストール

**ハードウェア要件**
- NVIDIA Jetsonデバイス
- EthernetまたはWiFiによるインターネット接続
- ディスプレイ

**ソフトウェア要件**
- JetPack 5.1.2 (L4T 35.4.1)
- JetPack 5.1.1 (L4T 35.3.1)
- JetPack 5.1 (L4T 35.2.1)

**クイックスタート**<br />
1. Jetsonをディスプレイに接続し、電源を入れる<br />
2. デバイスにマウスとキーボードを接続し、ターミナルで以下のコマンドを入力してアプリケーションを実行します

```
bash <(wget -qO- https://sensecraft-statics.seeed.cc/edge-ai/init-script/edge-ai-setup.sh)
```

3. アプリケーションのインストール中に以下のオプション設定を行う必要がありますので、ニーズに応じて設定してください

- **[オプション] jetson_clocksスクリプトを有効にして、CPU、GPU、EMCクロックの最大周波数を設定してJetsonの性能を最大化しますか？ [y/n] (デフォルト: y): y**<br />
jetson_clocksスクリプトを提供し、CPU、GPU、EMCクロックの静的最大周波数を設定してJetsonの性能を最大化します。

- **[オプション] libreofficeなどの不要なパッケージをアンインストールして、スワップメモリのサイズを変更してスペースを節約しますか？ (/swapfile) [y/n] (デフォルト: n): n**<br />
メモリ不足の場合（特にjetson nano）、スワップを有効にしてプログラムの正常な動作を確保することをお勧めします。

- **[オプション] スワップメモリを作成またはサイズを変更しますか？ (/swapfile)?**<br />
nanoの性能を向上させるためにスワップをオンにします。

- **[オプション] Dockerデータディレクトリを外部に保存しますか？ (dockerイメージとボリューム用)?**<br />

- **(ルートパーティションが32GB未満の場合に推奨)。 [y/n] (デフォルト: n): n**<br />

エッジAIプログラムを実行するには最低32GBのストレージスペースが必要です。足りない場合は、Dockerデータボリュームを外部ディスクにマウントすることを選択できます。

4. これでSenseCraft AI-Jetsonを体験できます

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/35.png)

### **新しいモデルの展開**
1. 「AI Models」ページにアクセスし、必要なAIモデルを選択します<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/36.png)

2. 「Deploy Model」ボタンをクリックします

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/37.png)

3. デバイスにSenseCraft AI-Jetsonがインストールされていること、AIモデルがデバイスタイプに適合していることを確認するためにREADMEを確認します。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/38.png)

4. オンラインデバイスを選択します

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/39.png)

5. AIモデルにはビデオストリームが必要です。ストリームがない場合は、まず有効なストリームを追加してください。モデルズーはストリーム情報をデバイスに直接送信します。

:::note 
ストリーム情報の詳細については、Streams Managementを確認してください
:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/40.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/41.png)

6. AIモデルとストリーム情報をデバイスに送信します。AIモデルの展開には数分かかるため、現在のページを離れて数分後にデバイスに移動し、展開されたAIモデルを確認してください。

### **ストリーム管理**

SenseCraft AI-Jetsonは複数のビデオストリームの追加をサポートしており、必要に応じてUSBカメラやIPカメラを追加することができます。

追加できるビデオストリームの数はデバイスのCPUおよびメモリリソースに依存します。デバイスのリソース使用量に注意してください。

#### **ストリームの追加**

1. Streamsページにアクセスし、+アイコンをクリックします<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/42.png)

2. 新しいビデオストリームの有効なメッセージを設定します。詳細については以下の表を確認してください<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/43.png)

| **フィールド** | **内容** |
| --- | --- |
| **ストリーム名** | 1 このストリームのカスタム名<br />2 空白にはできません |
| **ビデオタイプ** | 1 IPカメラ：有効なRTSP URLを入力してIPカメラにアクセス<br />2 USBカメラ：デバイスにUSBカメラを接続し、USBを自動認識してビデオパスで正しいUSBカメラを選択 |
| **ビデオパス** | ビデオパス、"ビデオタイプ"によって形式が決定されます。不正な場合、デフォルトビデオが使用されます。 |
| **デバイスAIモデル** | 1 デバイスに既にダウンロードされているAIモデルを選択<br />2 デバイスにAIモデルがない場合は、AI Modelsページに移動してモデルをデバイスにダウンロードしてください。 |
| **信頼度閾値** | 1 検出対象の信頼度閾値<br />2 フォーマット: float [0, 1] |
| **IoU閾値** | 1 IoUは予測されたバウンディングボックスと真実のバウンディングボックスの精度を評価するために使用されます<br />2 フォーマット: float [0, 1] |
| **FPS** | 1 ストリームの秒間フレーム数<br />2 フォーマット: INT [1,60] |
| **品質** | 1 出力ストリームの品質。デフォルト: 50<br />2 フォーマット: int [0,100] |
| **最大検出数** | 1 画像ごとの最大検出数。デフォルト: 300<br />2 フォーマット: int [0,1000] |
| **フレームレート表示** | 1 ストリームのフレームレートを表示するかどうか<br />2 フォーマット: Bool [True,False]<br />● True: FPSを表示<br />● False: FPSを表示しない |
| **時計表示** | 1 時間を表示するかどうか<br />2 フォーマット: Bool [True,False]<br />● True: 時間を表示<br />● False: 時間を表示しない |

3. 「保存」ボタンをクリックし、ホームページに戻って新しいストリームとAI検出結果を確認します。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/44.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/45.png)


#### **ストリームの削除**
ストリームの詳細ページに移動し、「削除」アイコンをクリックしてストリームを削除します。<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/46.png)

### **AIモデル管理**

デバイスにダウンロードされたすべてのAIモデルを管理します。

- AIモデルには、そのモデルを使用しているストリームの名前が表示されます。<br />
- ストリームで使用されていないAIモデルは削除可能です。<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/47.png)

### **設定**

#### **概要**

デバイス情報については、以下の表を参照してください。<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/48.png)

| **項目** | **内容** |
| --- | --- |
| **製品** | デバイスのモジュール |
| **IP** | デバイスのネットワークIPアドレス |
| **シリアル番号** | デバイスの一意の製造シリアル番号 |
| **MACアドレス** | ネットワークMACアドレス |
| **CPU使用率** | デバイスのCPU使用率 |
| **RAM** | デバイスのRAM |
| **スワップ** | デバイスのスワップ |
| **ディスク使用量** | デバイスのディスク使用量 |
| **Cudaバージョン** | デバイスにインストールされているCudaのバージョン |
| **Jetpackバージョン** | デバイスにインストールされているJetpackのバージョン |

#### **SenseCraft AIプラットフォームへのバインド**
SenseCraft AI -JetsonはエッジAI向けに設計されています。AI推論とビデオストリーム処理はデバイス上でローカルに行われます。追加のAIモデルをダウンロードする必要がある場合のみ、デバイスを[SenseCraft AI-Model Zoo](https://sensecraft.seeed.cc/ai/#/home)にバインドする必要があります。ダウンロード後はプラットフォームからデバイスを削除することができます。

1. [SenseCraft AI-Model Zoo](https://sensecraft.seeed.cc/ai/#/home)にアクセスします。<br />
2. 有効なメールアドレスで登録します。SenseCraft-AI Model ZooアカウントはSenseCAPクラウドアカウントと同じです。すでにSenseCAPクラウドアカウントをお持ちの場合は、直接ログインできます。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/49.png)

3. 「デバイスワークスペース」にアクセスし、「デバイスを追加」ボタンをクリックします。<br />
4. デバイスのカスタム名を入力し、デバイスからバインドコードを取得します。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/50.png)

5. デバイスのSenseCraft AIアプリケーションに戻ります。「SenseCraft AIプラットフォームにバインド」をクリックすると、アプリケーションがバインドコードと一時的な名前を表示します。

- バインドコード: [SenseCraft AI-Model Zoo](https://sensecraft.seeed.cc/ai/#/home)で正しい有効なバインドコードを入力してデバイスのバインドを完了します。<br />
- 一時的な名前: バインドコードが重複している場合は、正しい一時的な名前を入力する必要があります。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/51.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/52.png)

6. 正しい有効なバインドコードを入力し、「確認」ボタンをクリックします。<br />
7. バインドが成功すると、モデルズーから新しいAIモデルを追加できるようになります。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/53.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/54.png)

#### **バインド解除**
AIプラットフォームでデバイスをリモート管理する必要がなくなった場合、AIプラットフォームのアカウントからデバイスを削除できます。デバイスまたはプラットフォーム上でバインド解除を行うことができます。<br />

- AIモデルズーからデバイスをバインド解除するには、「削除」をクリックします。<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/59.png)

- 「SenseCraft AIプラットフォームへのバインド」を無効にしてデバイスをバインド解除します。<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/55.png)


### **アプリの更新**

SenseCraft AIアプリの更新は、自動更新と手動更新に分類されており、ニーズに応じて設定できます。

**自動更新**: 5分ごとに更新を確認し、新しいバージョンが検出されると情報が自動的に更新されます。手動で行う必要はありません。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/56.png)

**手動更新**: 更新を手動で確認し、新しいバージョンが検出された場合は「更新」ボタンをクリックして更新します。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/57.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/58.png)

## **技術サポート**

**SenseCAP インジケーターに関するサポートが必要ですか？私たちがサポートします！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>