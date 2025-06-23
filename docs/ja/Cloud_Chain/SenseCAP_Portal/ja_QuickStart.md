---
description: SenseCAP ポータル クイックスタート
title: SenseCAP ポータル クイックスタート
keywords:
- クラウドとチェーン
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
slug: /ja/Cloud_Chain/SenseCAP_Portal/QuickStart
last_update:
  date: 05/15/2025
  author: Matthew
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

SenseCAP ポータルをどのように使用しますか？さあ、始めましょう！

## はじめに

SenseCAP ポータルの主な機能は、SenseCAP デバイスの管理とデータの保存です。このポータルは、Microsoft の安全で信頼性の高いクラウドサービスである Azure 上に構築されています。アカウントを申請し、すべてのデバイスをこのアカウントに紐付けることができます。SenseCAP はウェブポータルと API を提供しています。ウェブポータルには、ダッシュボード、デバイス管理、データ管理、アクセスキー管理が含まれ、API はさらなる開発のためにユーザーに公開されています。

## ウェブサイト

- グローバルステーション: <a href="https://sensecap.seeed.cc/">https://sensecap.seeed.cc</a>

## 新しいアカウントを作成する

① アカウント登録を選択し、メール情報を入力して「登録」をクリックします。登録メールがユーザーのメールボックスに送信されます。

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-register-1.jpg)

② 「SenseCAP…」メールを開き、リンクをクリックしてジャンプし、関連情報を入力して登録を完了します。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-register-2.jpg)

③ ログイン画面に戻り、ログインを完了します。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-register-3.jpg)

:::note
メールが見つからない場合、自動的に「迷惑メール」として識別され、「ゴミ箱」に入れられている可能性があります。<br />
ログイン時にパスワードを忘れた場合は、メールを通じて再取得することができます。
:::

## SenseCAP アプリをダウンロードする

SenseCAP アプリをインストールしてログインします。

- Android: <a href="http://sensecap-app-download.seeed.cn/">http://sensecap-app-download.seeed.cn</a> をクリックして QR コードをスキャンしてください。
- iOS: App Store で「SenseCAP」を検索してください。

## デバイスを紐付ける

SenseCAP デバイスには筐体にラベルが貼られており、図のように表示されています。EUI は SenseCAP デバイスのユニークコードです。Key は暗号化フィールドであり、無視することができます。
SenseCAP アプリのメインページで「Bind」ボタンをクリックし、QR コードをスキャンしてデバイスを紐付けます。

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/label.jpg)

## データを確認する

SenseCAP ポータルにログインし、「Device/Sensor Node」でデバイスのステータスと基本情報を確認し、「Data/Table」でセンサーデータを確認します。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/data_overview.jpg)