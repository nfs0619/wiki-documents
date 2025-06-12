---
description: SenseCAP ポータルデバイス管理
title: デバイス管理
keywords:
- クラウドとチェーン
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
slug: /ja/Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Device_Management
last_update:
  date: 05/15/2025
  author: Matthew
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

ここでは、SenseCAP デバイスを管理するためのいくつかの方法が提供されています。これには、ゲートウェイ管理、ノードグループ管理、センサーノード管理が含まれます。

## ゲートウェイ

① EUI、周波数、ステータス、登録時間に基づいてゲートウェイをフィルタリングします。  
② ゲートウェイのリストを表示し、EUI、名前、ステータスなどを確認できます。  
③ EUI をクリックしてデバイス詳細ページに入り、基本情報、位置情報、バインディングなどを確認します。

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-1.jpg)

## ノードグループ管理

グループごとにデバイスを便利に管理できます。新しいグループを作成したり、グループを削除したり、デバイスを特定のグループに移動したりできます。  
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-2.jpg)

## センサーノード管理

センサーノードページでは、アカウントにバインドされているすべてのセンサーノードを確認できます。  
① デバイスには「LoRa」や「NB-IoT」などの種類があり、カテゴリごとに表示できます。  
② EUI、周波数、グループ、ステータス、登録時間に基づいてノードをフィルタリングします。  
③ センサーノードリストには、EUI、名前、ステータス、データタイプなどが表示されます。  
④ EUI をクリックしてデバイス詳細ページに入ります。  
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-3.jpg)

## 一般情報

一般情報ページでは、デバイス名を設定したり、デバイスのステータス、バッテリーステータス、最近のオンライン記録などを確認できます。

- バッテリーステータス: 「バッテリー不足」と表示される場合、バッテリー残量が10%未満であることを意味します。  
- 最近のオンライン記録: ゲートウェイは数分以内にオフラインになり、他のデバイスは後でオフラインになります（通常は3回のアップロード間隔後）。  

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-4.jpg)

## チャンネル

シングルチャンネルデバイス: 1つのチャンネルのみを持ち、ノードは1つのプローブにのみ接続できます（例: LoRaWAN センサーノード）。  
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-5.jpg)  
マルチチャンネルデバイス: 複数のチャンネルを持ち、複数のセンサープローブを接続できます（例: センサーハブ）。  
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-6.jpg)

## データ

各チャンネルの期間データやデバイスステータスデータを確認できます。  
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-7.jpg)

## 設定

読み取り専用キー / フルアクセスキー: これは API と共に使用されます。  
デバイス設定: デバイスのデータ収集頻度を調整します（5分から43,200分まで）。新しい収集頻度は、デバイスが次回データをアップロードする際に有効になります。  
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-8.jpg)

## 位置情報

デバイスに GPS 機能がある場合、位置情報はここで自動的に更新されます。  
デバイスに GPS がない場合は、手動で GPS を設定できます: 「位置を検索」 - 「地図上でポイントを設定」 - 「住所として設定」。

:::note
デバイスの GPS を使用する場合、デバイスを屋外に設置し、上部に遮蔽物がないようにしてください。
:::

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-9.jpg)

## デバイスのバインド

デバイスを別のアカウントに変更したり、デバイスを削除したりする場合は、このページで操作できます。  
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-10.jpg)