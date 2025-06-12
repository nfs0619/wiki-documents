---
description: Nvidia Jetson Workspace on SenseCraft AI Platform
title: reComputer Jetson Workspace
keywords:
- Cloud and Chain
- SenseCraft
- SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/nvidia_jetson_workspace
sidebar_position: 2
last_update:
  date: 05/15/2025
  author: Frank
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

Jetson デバイスをワークスペースに追加する前に、まず SenseCraft AI アプリを Jetson にインストールしてください。

SenseCraft AI-Jetson は、NVIDIA Jetson Edge AI デバイス向けに設計された開発ツールキットおよびプラットフォームです。「クイックスタートスクリプト」を実行するだけで、事前にロードされたビデオと AI モデルを使用した例のアプリケーションを表示するためのインタラクティブなユーザーインターフェースが提供されます。USB カメラや IP カメラを追加したい場合は、数クリックで簡単に設定できます！

**ハードウェア要件**
- NVIDIA Jetson デバイス
- Ethernet または WiFi によるインターネット接続
- ディスプレイ

**ソフトウェア要件**
- JetPack 5.1.2 (L4T 35.4.1)
- JetPack 5.1.1 (L4T 35.3.1)
- JetPack 5.1 (L4T 35.2.1)

**クイックスタート**<br />
1. Jetson をディスプレイに接続し、電源を入れる<br />
2. デバイスにマウスとキーボードを接続し、ターミナルで以下のコマンドを入力してアプリケーションを実行します

```
bash <(wget -qO- https://sensecraft-statics.seeed.cc/edge-ai/init-script/edge-ai-setup.sh)
```

3. アプリケーションのインストール中に、以下のオプション設定を行う必要があります。必要に応じて設定してください。

- **[オプション] jetson_clocks スクリプトを有効にして、CPU、GPU、EMC クロックの最大周波数を設定し、Jetson の性能を最大化しますか？ [y/n] (デフォルト: y): y**<br />
jetson_clocks スクリプトを提供し、CPU、GPU、EMC クロックの静的最大周波数を設定して Jetson の性能を最大化します。

- **[オプション] libreoffice などの不要なパッケージをアンインストールして、スワップメモリのサイズを変更してスペースを節約しますか？ (/swapfile) [y/n] (デフォルト: n): n**<br />
メモリ不足の場合 (特に Jetson Nano)、スワップを有効にしてプログラムの正常な動作を確保することをお勧めします。

- **[オプション] スワップメモリ (/swapfile) のサイズを作成または変更しますか？**<br />
Nano の性能を向上させるためにスワップをオンにします。

- **[オプション] Docker データディレクトリを外部ストレージに保存しますか？ (Docker イメージとボリューム用)**<br />

- **(ルートパーティションが 32 GB 未満の場合は推奨)。[y/n] (デフォルト: n): n**<br />

エッジ AI プログラムを実行するには最低 32G のストレージスペースが必要です。そうでない場合は、Docker データボリュームを外部ディスクにマウントすることを選択できます。

4. これで SenseCraft AI-Jetson を体験できます。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/35.png)

### デバイスの追加

1. デバイスワークスペースページで「Add Device」ボタンをクリックします。
2. デバイスのカスタム名を入力し、デバイスからバインドコードを取得します。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image28.png)

3. デバイスの SenseCraft AI アプリケーションに戻ります。「Bind to SenseCraft AI platform」をクリックすると、アプリケーションがバインドコードと一時的な名前を表示します。

- バインドコード: SenseCraft AI-Model Zoo に正しい有効なバインドコードを入力してデバイスのバインドを完了します。
- 一時的な名前: バインドコードが重複している場合は、正しい一時的な名前を入力する必要があります。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image29.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image30.png)

4. 正しい有効なバインドコードを入力し、「Confirm」ボタンをクリックします。

5. バインドが成功しました。これでデバイスを管理できます。

:::note

各アカウントは無料で最大 5 台のデバイスを追加できます。

:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image31.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image32.png)

### デバイス情報

デバイス情報は、一般情報、ビデオストリーム情報、AI モデルの 3 つの部分に分かれています。

### 一般情報

デバイス情報は、一般情報、ビデオストリーム情報、AI モデルの 3 つの部分に分かれています。詳細は以下の表をご確認ください。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image33.png)

| **項目** | **内容** |
| --- | --- |
| **デバイス名** | デバイスのカスタム名。ユーザーが名前を変更可能 |
| **デバイス SN** | デバイスの一意の製造シリアル番号 |
| **デバイス EUI** | デバイス EUI |
| **オンラインステータス** | オンライン: デバイスがオンライン<br />オフライン: デバイスがオフラインの場合、操作不可 |
| **搭載モジュール** | デバイスのモジュール |
| **CPU 使用率** | デバイスの CPU 使用率 |
| **メモリ** | デバイスの RAM 使用率 |
| **ストレージ** | デバイスのディスク使用率 |
| **IP アドレス** | デバイスのネットワーク IP アドレス |
| **MAC アドレス** | デバイスの MAC アドレス |
| **SenseCraft AI バージョン** | デバイスにインストールされている SenseCraft AI アプリケーションのバージョン |
| **収集時間** | デバイスから最後に情報が収集された時間 |

### デバイスの削除

AI モデルのデプロイが完了し、デバイスをリモートで管理する必要がない場合、デバイスをプラットフォームから削除できます。デバイスはエッジでローカル推論、ストリーム管理、AI モデル管理を独立して行うことができます。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image34.png)

### ビデオストリーム管理

ビデオストリームでは、リモートでリアルタイム推論結果を確認し、デバイスのビデオストリームを管理できます。ストリームの追加、編集、表示、削除がサポートされています。

#### リアルタイム推論

デバイスにビデオストリームが追加されている場合、ユーザーはプラットフォーム上で全ストリームのリアルタイム推論結果を確認できます。推論結果や例外のリアルタイム監視を可能にします。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image35.png)

#### ストリームの追加

「Add Stream」をクリックし、有効なストリーム情報を入力してから「Confirm」ボタンをクリックして新しいストリームをデバイスに送信します。デバイスが新しいストリームを追加するには時間がかかります。プラットフォーム情報は後で更新されます。詳細は以下の表をご確認ください。

:::note

新しいストリームを追加するにはデバイスがオンラインである必要があります。

:::

| **項目** | **内容** |
| --- | --- |
| **ストリーム名** | 1 このストリームのカスタム名<br />2 空欄不可 |
| **ビデオタイプ** | 1 IP カメラ: 有効な RTSP URL を入力して IP カメラにアクセス<br />2 USB カメラ: デバイスに USB カメラを接続し、自動的に USB を認識してビデオパスで正しい USB カメラを選択 |
| **ビデオパス** | ビデオパス。「ビデオタイプ」によって形式が決定されます。不正な場合、デフォルトビデオが使用されます。 |
| **デバイス AI モデル** | 1 デバイスに既にダウンロードされている AI モデルを選択<br />2 デバイスに AI モデルがない場合は、AI モデルページに移動してモデルをデバイスにダウンロードしてください。 |
| **信頼度閾値** | 1 検出対象の信頼度閾値<br />2 フォーマット: float [0, 1] |
| **IoU 閾値** | 1 IoU は予測されたバウンディングボックスと真実のバウンディングボックスの精度を評価するために使用されます<br />2 フォーマット: float [0, 1] |
| **FPS** | 1 ストリームの秒間フレーム数<br />2 フォーマット: INT [1,60] |
| **品質** | 1 出力ストリームの品質。デフォルト: 50<br />2 フォーマット: int [0,100] |
| **最大検出数** | 1 画像ごとの最大検出数。デフォルト: 300<br />2 フォーマット: int [0,1000] |
| **フレームレート表示** | 1 ストリームのフレームレートを表示するかどうか<br />2 フォーマット: Bool [True,False]<br />● True: FPS を表示<br />● False: FPS を表示しない |
| **時計表示** | 1 時間を表示するかどうか<br />2 フォーマット: Bool [True,False]<br />● True: 時間を表示<br />● False: 時間を表示しない |

#### ストリーム詳細

ストリームの「目」アイコンをクリックすると、ストリームの詳細情報を表示できます。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image36.png)

#### ストリームの編集

ストリームの「編集」アイコンをクリックすると、ユーザーはストリームのすべての設定を編集できます。「確認」ボタンをクリックして、変更されたストリーム情報をデバイスに送信します。デバイスがストリーミング設定を更新するには時間がかかり、その後プラットフォーム情報が更新されます。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image37.png)

#### ストリームの削除

ストリームの「削除」アイコンをクリックしてストリームを削除します。デバイスがストリームを削除するには時間がかかり、その後プラットフォーム情報が更新されます。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image38.png)

### デバイス AI モデル

デバイスにダウンロードされたすべての AI モデルを管理し、モデルの追加、詳細の表示、モデルの削除をサポートします。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image39.png)

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