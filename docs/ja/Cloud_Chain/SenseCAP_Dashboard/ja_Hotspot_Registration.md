---
description: ホットスポット登録
title: ホットスポット登録
keywords:
- クラウドとチェーン
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Cloud_Chain/SenseCAP_Dashboard/Hotspot_Registration
last_update:
  date: 05/15/2025
  author: Matthew
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# ホットスポット登録

**Heliumウォレットを使用したホットスポットの登録方法**
===============================================

* [**https://status.sensecapmx.cloud/**](https://status.sensecapmx.cloud/) にアクセスしてSenseCAP Dashboardにログインしてください。
* "Helium APP"が最新バージョンであることを確認し、Heliumウォレットにログインしてください。

最新バージョンは[**Android Store**](https://play.google.com/store/apps/details?id=com.helium.wallet&hl=en_US)または[**iOS Store**](https://apps.apple.com/app/id1450463605)からダウンロードできます。

* SenseCAP Dashboardで、左側のメニューから「Hotspot」をクリックし、青い「+ Add New Hotspot」ボタンをクリックします。

その後、以下のようにHeliumウォレットからホットスポットをインポートするためのQRコードが表示されます：

![SeneseCAP Hotspot Registration](https://www.sensecapmx.com/wp-content/uploads/2022/07/dash-qr.png)

Helium Appを使用してDashboardに表示されているQRコードをスキャンしてください。

![SenseCAP Hotspot Registration 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-1-register.png)

HeliumウォレットでQRコードをスキャンし、ウォレットをリンクするよう求められた際に"Helium App"で許可を与えてください。

**注意**: これはウォレットのシードフレーズへのアクセスを誰にも与えるものではありません。この操作はダッシュボードが接続し、ホットスポットをダッシュボードに追加することを許可するだけです。

![SenseCAP Hotspot Registration 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-2-register.png)

追加したいホットスポットを選択し、SenseCAP Dashboardに追加してボタンをクリックしてください。

![SenseCAP Hotspot Registration 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-3-register.png)

ウォレットが正常にリンクされた場合、以下のメッセージが表示されます。**これで準備完了です！**

![SenseCAP Hotspot Registration 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4-register.png)

**デバイス情報を使用したホットスポットの登録**
=============================================

**注意**: ホットスポットをダッシュボードに登録するには、Heliumウォレットまたはデバイス情報のいずれかを使用できます。デバイス情報を使用してホットスポットを登録する場合は、ホットスポットのローカルコンソールにログインしてデバイス情報を取得する必要があります。

![SenseCAP Hotspot Registration 5](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-6-1.png)

* ダッシュボードにログイン ⇒ [**https://status.sensecapmx.cloud/**](https://status.sensecapmx.cloud/)
* 登録時に作成した資格情報を入力してログイン
* 左側のメニュー列で「Hotspot」に移動
* 「Add new Hotspot」をクリック

![SenseCAP Hotspot Registration 6](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-7-1.png)

* "**SN", "ETH MAC**"アドレス、"**CPU ID**"および"**bind key**"を入力するよう求められます。"**SN**"はSenseCAP M1の底面ラベルに記載されており、その他の情報はローカルコンソールページにあります。
* 「**Confirm**」をクリックすると、ホットスポットがダッシュボードに追加されます。

**注意**: CPU IDは通常、1で始まり、その後に7つのゼロが続きます。例: _**10000000**_

**おめでとうございます**！ホットスポットをダッシュボードに正常に追加し、監視を開始する準備が整いました。追加のホットスポットを監視する場合は、これらの手順を繰り返してください。