---
description: SenseCraft APP
title:  紹介と使用方法
keywords:
- アプリ
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/sensecraft_app
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

:::tip note
SenseCAP Mate Appは正式に`SenseCraft` Appに改名されました！
:::


SenseCraft APPは、データの可視化とデバイス管理のための強力なアプリです。

## 特徴

* 時間を節約 - スキャン＆プレイ体験を提供し、ユーザーが4ステップで全体の設定を完了できるようにします
* 技術的な背景が少ない、またはない人でも簡単にセンサーデータを始められるように設計されています
* クリーンなユーザーインターフェースでデータを取得し、表示
* 時間間隔を設定: バッテリー効率を向上
* 閾値を設定: 行動を起こす必要があるデータに集中 - 近日公開
* 安全範囲外のデータがある場合にアラームを送信 - 近日公開

## ダウンロード

SenseCraft Appは、iOS版とAndroid版の両方で利用可能です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_1.png" alt="pir" width={600} height="auto" /></p>


## アカウント

SenseCraftはデバイスの設定とリモート管理をサポートしています。SenseCAP Portalプラットフォームやその他の機能を使用するには、アカウントを登録してください。

:::tip Note
サーバーの場所として`Global`を選択してください。また、<a href="http://sensecap.seeed.cc">SenseCAP Portal</a>を通じてアカウントを作成することもできます。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/login-page.PNG" alt="pir" width={300} height="auto" /></p>


## デバイス

* デバイスページでは、右上の`+`をクリックして新しいデバイスを追加できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/add-new.png" alt="pir" width={500} height="auto" /></p>

* 対象のデバイスをクリックしてデータを表示します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/data.png" alt="pir" width={500} height="auto" /></p>


* 右上のベルアイコンをクリックしてメッセージセンターに入ります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/message-center.png" alt="pir" width={500} height="auto" /></p>


## AIGC

AIGCは、センサーデータを最大限に活用し、その可能性を引き出すAI駆動のソリューションです。<br/>
SenseCAPセンサーをSenseCAPプラットフォームに接続することで、温度、湿度、光、空気品質などの環境要因に関するデータを簡単に収集・分析できます。その一方で、強力なAIアルゴリズムがこれらのデータを使用して、運用の最適化、コスト削減、効率向上に役立つ実用的な洞察と推奨を提供します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/AIGC.PNG" alt="pir" width={300} height="auto" /></p>


詳細については[こちら](https://wiki.seeedstudio.com/ja/How_to_Use_SenseCAP_AI_on_SenseCAP_Portal_and_SenseCAP_Mate_APP/)をクリックしてください。

## MALL

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/MAll.PNG" alt="pir" width={300} height="auto" /></p>

## イベント

通知を受け取るためにイベントを追加します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/add-event.PNG" alt="pir" width={300} height="auto" /></p>

1. イベントアラートを作成するには、追加アイコンまたは「Add Event」ボタンをクリックします。「Add Event」ページで条件を追加するオプションを設定し、「Add」ボタンをクリックしてデバイスを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_2.png" style={{width:1000, height:'auto'}}/></div>

2. デバイスを選択し、測定タイプを選択、アラーム条件を設定します。「より大きい」または「より小さい」などの条件を選択し、スライダーバーをドラッグして値を設定し、次のステップをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_3.png" style={{width:1000, height:'auto'}}/></div>

3. 「Add Event」ページで、デバイスが正常に戻った際のアクションを設定し、通知を送信するかどうかを選択します。「Save」をクリックし、イベント名を入力して「Submit」をクリックすると、イベントアラームが正常に追加され、イベントリストに戻ります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_4.png" style={{width:1000, height:'auto'}}/></div>

4. デバイスページで「Message Center」をクリックしてアラームメッセージを確認します。デバイスの警告やアラームのプッシュメッセージ、システム通知メッセージが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_5.png" style={{width:1000, height:'auto'}}/></div>

5. アラームメッセージをクリックすると、デバイスが条件項目をトリガーした際のアラームメッセージがプッシュされます。アラームの詳細を確認するにはクリックします。アラームリストに戻ると、ステータスが「既読」に変更されます。編集ボタンをクリックしてメッセージを選択し、既読、削除などの操作が可能です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_6.png" style={{width:1000, height:'auto'}}/></div>

6. システムメッセージを切り替え、システムプッシュメッセージの詳細を確認するにはクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_7.png" style={{width:1000, height:'auto'}}/></div>

## ユーザー

アカウントの詳細や設定、アプリのバージョンなどを確認します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/user-page.PNG" alt="pir" width={300} height="auto" /></p>

**アカウント削除**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/delete.png" alt="pir" width={600} height="auto" /></p>

## Bluetooth 設定

対応する製品を選択して、迅速にバインドします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/configuration.png" alt="pir" width={500} height="auto" /></p>