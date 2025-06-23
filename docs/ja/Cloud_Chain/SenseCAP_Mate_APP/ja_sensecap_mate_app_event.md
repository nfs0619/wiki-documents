---
description: SenseCAP Mate APP イベントバージョン 2.9.0 ユーザーマニュアル
title: イベント管理
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/sensecap_mate_app_event
last_update:
  date: 05/15/2025
  author: Matthew
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# SenseCAP Mate APP におけるイベント管理

## イベント機能

SenseCAP Mate APP バージョン 2.9.0 では、新しいイベントアラーム機能が追加され、ユーザーはデバイスのトリガー条件を設定するイベントを作成できます。デバイスが条件をトリガーすると、アラームメッセージがプッシュされます。デバイスページには新しいメッセージセンター機能があり、デバイスがトリガーしたアラームメッセージやシステムがプッシュした通知メッセージを確認できます。これにより、リアルタイムアラーム、リモート監視、リモート管理が可能になります。

### SenseCAP Mate APP V2.9.0 のインストール

- SenseCAP Mate APP にログインし、イベントページを切り替えます。
- 以下の手順でイベントアラートを設定します：

1. 追加アイコンまたは「イベント追加」ボタンをクリックしてイベントアラートを作成します。「イベント追加」ページで条件オプションを追加し、「追加」ボタンをクリックしてデバイスを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_2.png" style={{width:1000, height:'auto'}}/></div>

2. デバイスを選択し、測定タイプを選択してアラーム条件を設定します。「より大きい」または「より小さい」などの条件を選択し、スライダーバーをドラッグして値を設定し、次のステップをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_3.png" style={{width:1000, height:'auto'}}/></div>

3. 「イベント追加」ページで、デバイスが正常に戻った際のアクションを設定し、通知を送信するかどうかを選択します。「保存」をクリックし、イベント名を入力して「送信」をクリックすると、イベントアラームが正常に追加され、イベントリストに戻ります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_4.png" style={{width:1000, height:'auto'}}/></div>

4. デバイスページで「メッセージセンター」をクリックしてアラームメッセージを確認します。デバイスの警告やトリガーされたアラームのプッシュメッセージ、システム通知メッセージが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_5.png" style={{width:1000, height:'auto'}}/></div>

5. アラームメッセージをクリックすると、デバイスがトリガーした条件項目が表示され、アラームメッセージがプッシュされます。アラームの詳細を確認するにはクリックします。アラームリストに戻るとステータスが「既読」に変更されます。「編集」ボタンをクリックしてメッセージを選択し、既読、削除などの操作が可能です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_6.png" style={{width:1000, height:'auto'}}/></div>

6. システムメッセージを切り替え、システムプッシュメッセージの詳細を確認するにはクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_7.png" style={{width:1000, height:'auto'}}/></div>