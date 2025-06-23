---
description: ホットスポット管理
title: ホットスポット管理
keywords:
- クラウドとチェーン
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Cloud_Chain/SenseCAP_Hotspot_APP/Hotspot_Management
last_update:
  date: 05/15/2025
  author: Matthew
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

**ホットスポット管理**
======================

**ホットスポット情報**
=======================

SenseCAP ホットスポットアプリは、SenseCAP Dashboard とユーザーのウォレットの両方に登録されているホットスポットを管理します。ホットスポットが SenseCAP Dashboard アカウントに追加されている場合、SenseCAP アプリは報酬、オンラインステータス、P2Pステータス、ウィットネス、位置情報など、ホットスポットに関するすべての情報を提供します。

SenseCAP アプリがホットスポットに提供する情報と操作は、以下の4つのステータスによって決まります。

1.  **SenseCAP**: SenseCAP ホットスポットが Dashboard アカウントに追加されており、さらにホットスポットが属する Helium ウォレットが SenseCAP アプリに追加されています。
2.  **ウォレットのみ**: SenseCAP ホットスポットのウォレットが SenseCAP アプリに追加されています。
3.  **Dashboard のみ**: SenseCAP ホットスポットが Dashboard アカウントに追加されています。
4.  **他メーカー**: SenseCAP ホットスポットではなく、そのウォレットも SenseCAP アプリに追加されていません。

<table style={{borderCollapse: 'collapse', width: '100%', height: 105}} border={1}><tbody><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}><strong>ステータスタイプ</strong></td><td style={{width: '33.3333%', height: 21}}><strong>情報</strong></td><td style={{width: '33.3333%', height: 21}}><strong>操作</strong></td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}>SenseCAP</td><td style={{width: '33.3333%', height: 21}}>すべての情報</td><td style={{width: '33.3333%', height: 21}}>すべての操作</td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}>ウォレットのみ</td><td style={{width: '33.3333%', height: 21}}>報酬<br />スケール<br />位置情報<br />リレード<br />ウィットネス<br />Helium オンラインステータス</td><td style={{width: '33.3333%', height: 21}}>すべての操作</td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}>Dashboard のみ</td><td style={{width: '33.3333%', height: 21}}>すべての情報</td><td style={{width: '33.3333%', height: 21}}>タグ設定<br />フォロー<br />アドレスコピー<br />Dashboard に追加</td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}>他メーカー</td><td style={{width: '33.3333%', height: 21}}>-</td><td style={{width: '33.3333%', height: 21}}>-</td></tr></tbody></table>

![SenseCAP ホットスポットアプリ](https://www.sensecapmx.com/wp-content/uploads/2022/07/hotspot-app-sensecap.png)

**ホットスポット操作**
=====================

SenseCAP アプリは Helium ホットスポットアプリと SenseCAP Dashboard を統合し、以下の操作を提供してホットスポットと報酬を管理します。

*   **位置情報の更新**: ホットスポットの位置情報を Helium ブロックチェーンに更新
*   **アンテナの更新**: ホットスポットのアンテナ情報を Helium ブロックチェーンに更新
*   **ペアリング（Wi-Fiの更新または診断の実行）**: Bluetoothを使用してホットスポットのWi-Fiを設定し、診断を実行
*   **タグ**: SenseCAP Dashboard のようにタグを設定
*   **アドレスコピー**: ホットスポットアドレスまたは所有者アドレスをコピー
*   その他...