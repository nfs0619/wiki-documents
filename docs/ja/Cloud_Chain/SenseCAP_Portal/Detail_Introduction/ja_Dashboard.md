---
description: SenseCAP ポータル ダッシュボード
title: ダッシュボード
keywords:
- クラウドとチェーン
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
slug: /ja/Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Dashboard
last_update:
  date: 05/15/2025
  author: Matthew
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

ダッシュボード は、デバイスの状態やセンサーデータをリアルタイムで監視することができます。

## 概要

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-dashboard-1.jpg)

① 「シーン」または「チャート」を追加します。  
② デバイス概要：デバイスの総数を表示します。  
③ 監視：すべてのオフラインデバイスおよび低電力デバイスをカウントします。  
④ データ更新間隔：ページ（ウェブページ）がどのように、またはどのタイミングで更新されるかを設定します。  
⑤ お知らせ：ポータルのバージョンアップグレードやその他の情報を通知します。  
⑥ シーン：センサーエリアに応じた視覚的な表示モジュールを構成します。  
⑦ チャート：同じタイプの1つ以上のセンサーを選択して、一定期間の履歴データを表示します。

## シーンの設定

設置場所やアプリケーションシナリオに応じて、異なるデータをグループ化し、アイコン形式で最新データを表示するシーンデータを作成できます。  
例：アカウントには複数のグループ（station-1、station-2、station-3…）があります。station-1 のシーンを作成します。  
① 名前をカスタマイズし、「station-1」のシーン表示を作成し、「測定タイプを追加」を選択します。

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-dashboard-2.jpg)

② グループ「station-1」に表示する測定データを選択し、確認します。

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-dashboard-3.jpg)

## チャートの設定

測定タイプ、デバイス EUI、時間範囲などの情報を表示するチャートを作成できます。  
① 「追加」-「チャート」を選択します。  
② 名前をカスタマイズし、「測定タイプを追加」を選択します。  
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-dashboard-4.jpg)  
③ 表示するデータタイプと時間を選択します。  
④ グループを選択します。  
⑤ グループ内の特定のセンサーノードを選択します。  
⑥ 測定タイプを選択します。  
⑦ 確認します。

:::note
1つのチャートには1つの測定タイプしか追加できません。1つのチャートに最大5つの曲線を追加できます。
:::

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-dashboard-5.jpg)