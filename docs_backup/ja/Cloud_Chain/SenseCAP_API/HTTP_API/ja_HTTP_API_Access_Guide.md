---
description: HTTP API アクセスガイド
title: HTTP API アクセスガイド
keywords:
- HTTP API 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Cloud_Chain/SenseCAP_API/HTTP_API/HTTP_API_Access_Guide
last_update:
  date: 05/15/2025
  author: shuxu hu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## HTTP リクエストとレスポンス

  リクエストは HTTP ベーシック認証を使用して認証されます。

### HTTP ホスト

- 中国ステーション: https://sensecap.seeed.cn/openapi
- グローバルステーション: https://sensecap.seeed.cc/openapi

### HTTP ヘッダー
 #### リクエスト
<table >
<tr>
<th> キー
</th>
<th> 説明
</th></tr>
<tr>
<td width="300"> API-VERSION
</td>
<td width="300"> API バージョン
</td></tr></table>

 #### レスポンス
<table >
<tr>
<th> キー
</th>
<th> 説明
</th></tr>
<tr>
<td width="300"> api-gateway-excute-second
</td>
<td width="300"> API 実行にかかった秒数
</td>
</tr>
<tr>
<td width="300"> api-gateway-mpuo-consume
</td>
<td width="300"> API 実行で消費されたクォータ
</td></tr></table>

 #### HTTP ベーシック認証
  [HTTP ベーシック認証](https://en.wikipedia.org/wiki/Basic_access_authentication)は、RESTful API 認証の最も一般的な方法の1つです。ユーザー名として Access ID を、パスワードとして Access Key を使用します。すべての HTTP クライアントライブラリには、ベーシック認証の組み込みサポートがあるはずです。このドキュメントでは、curl を使用しており、–user オプションを使用してベーシック認証の資格情報を指定します。

  SenseCAP ポータルを通じてアクセスキーを作成できます。アクセスキーの取得方法については、クイックスタートを参照してください。

 #### API レスポンス
 すべてのレスポンスキーは、小文字とアンダースコアの規約に従います。

  #### 文字列を含む成功レスポンス
  ```cpp
    {
       "code":"0",
       "data":"
           // 文字列
       "
   }
  ```
  #### オブジェクトを含む成功レスポンス
  ```cpp
      {
       "code":"0",
       "data":{
           // オブジェクト
       }
   }
  ```
  #### 配列を含む成功レスポンス
  ```cpp
      {
       "code":"0",
       "data":[
           // 配列
       ]
   }
  ```
  #### エラーレスポンス
  ```cpp
   {
       "code":"1001",
       "msg":"エラーメッセージ"
   }
  ```

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>