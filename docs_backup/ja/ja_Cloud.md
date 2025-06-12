---
description: クラウドサービスは、コンピューティングボードからの処理済みデータ管理を促進し、ユーザーにリアルタイムの操作を提供する重要なコンポーネントです。このページでは、Seeed の産業用グレード SenseCAP クラウドサービスおよび多様なニーズに合わせたその他のクラウドサービスアプリケーションを網羅しています。
title: クラウド
keywords:
- クラウド
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Cloud
last_update:
  date: 05/15/2025
  author: Matthew
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

クラウドサービスは、コンピューティングボードからの処理済みデータ管理を促進し、ユーザーにリアルタイムの操作を提供する重要なコンポーネントです。このページでは、Seeed の産業用グレード SenseCAP クラウドサービスおよび多様なニーズに合わせたその他のクラウドサービスアプリケーションを網羅しています。堅牢なクラウドインフラストラクチャを通じて、Seeed はユーザーに安全なデータ保存、分析、活用の能力を提供し、データ駆動型の意思決定を可能にし、さまざまな分野での運用効率を向上させます。

## SenseCAP クラウドサービス

<strong><font color={'8DC215'} size={"4"}>このセクションでは、Seeed Studio が提供するさまざまなクラウドサービスを紹介し、さまざまな産業用 IoT アプリケーションに対応しています。以下の分野について詳しく調べることができます：</font></strong>

- SenseCAP クラウドサービスとエコシステムのカタログ
- 各クラウド製品のデータ管理およびデバイス管理の手順
- さまざまな接続目的のための API
- クラウドの概要

### SenseCAP Dashboard / ポータル

<div class="title_container">
    <div class="title_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"6"}>SenseCAP ポータル</font></div>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'FFFFFF'} size={"3"}>これは SenseCAP センサー ノードおよび SenseCAP ゲートウェイのデータ監視用ポータルです。</font></div>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>SenseCAP Dashboard</font></div>
            <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Dashboard/Dashboard_Basics" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Dashboard 基本情報 </font></span></a>
            <br/>
            <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Dashboard/Dashboard_Registration" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Dashboard 登録 </font></span></a>
            <br/>
            <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Dashboard/Hotspot_Registration" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ホットスポット登録 </font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>データ管理</font></div>
            <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Data_Management#table" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 表形式で表示される詳細データ </font></span></a>
            <br/>
            <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Data_Management#graph" target="_blank"><span><font color={'FFFFFF'} size={"2"}> グラフ形式で表示されるデータ </font></span></a>
            <br/>
            <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Data_Management#check-account-info" target="_blank"><span><font color={'FFFFFF'} size={"2"}> アカウント情報の確認 </font></span></a>
            <br/>
    </div>
</div>

<div class="independent_container">
    <div class="independent_item" style={{textAlign: 'left'}}>
            <div class="independent_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>デバイス管理</font></div>
            <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Device_Management#gateway" target="_blank"><span><font color={'FFFFFF'} size={"2"}> <strong>SenseCAP ゲートウェイ</strong> - EUI、名前、ステータスなどの情報を表示。</font></span></a>
            <br/>
            <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Device_Management#node-group-management" target="_blank"><span><font color={'FFFFFF'} size={"2"}> <strong>SenseCAP ノードグループ</strong> - グループでデバイスを便利に管理。</font></span></a>
            <br/>
            <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Device_Management#sensor-node-management" target="_blank"><span><font color={'FFFFFF'} size={"2"}> <strong>SenseCAP センサーノード</strong> - EUI、名前、ステータス、データタイプなどを表示。</font></span></a>
            <br/>
            <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Device_Management#general-information" target="_blank"><span><font color={'FFFFFF'} size={"2"}> <strong>デバイスの一般情報</strong> - バッテリーステータス、最近のオンライン記録など。</font></span></a>
            <br/>
            <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Device_Management#settings" target="_blank"><span><font color={'FFFFFF'} size={"2"}> <strong>設定</strong> - デバイスのデータ収集頻度の調整など。</font></span></a>
            <br/>
            <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Device_Management#location" target="_blank"><span><font color={'FFFFFF'} size={"2"}> <strong>デバイスの位置情報</strong></font></span></a> 
            /
            <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Device_Management#bind-device" target="_blank"><span><font color={'FFFFFF'} size={"2"}> <strong>デバイスのバインド</strong></font></span></a>
            /
            <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Device_Management#channel" target="_blank"><span><font color={'FFFFFF'} size={"2"}> <strong>デバイスのチャネル</strong></font></span></a>
            /
            <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Device_Management#data" target="_blank"><span><font color={'FFFFFF'} size={"2"}> <strong>デバイスのデータ</strong></font></span></a>
    </div>
</div>

### SenseCAP HotSpot APP

<div class="title_container">
    <div class="title_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"6"}>SenseCAP HotSpot APP</font></div>
            これは、モバイルフォンでLoRaWANホットスポットを管理するためのSenseCAP HotSpot APPです。
            <br/>
            > <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Hotspot_APP/Download_APP" target="_blank"><span><font color={'FFFFFF'} size={"3"}>ダウンロード</font></span></a> / <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Hotspot_APP/Hotspot_Management" target="_blank"><span><font color={'FFFFFF'} size={"3"}>ホットスポット管理</font></span></a> / <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Hotspot_APP/Remote Reboot" target="_blank"><span><font color={'FFFFFF'} size={"3"}>リモート再起動</font></span></a> / <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Hotspot_APP/Hotspot_Onboarding" target="_blank"><span><font color={'FFFFFF'} size={"3"}>Dashboardでのホットスポット登録</font></span></a>
    </div>
</div>

### SenseCAP Mate APP

<div class="title_container">
    <div class="title_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"6"}>SenseCAP Mate APP</font></div>
            これは、モバイルフォンでSenseCAPセンサーのデータを表示するためのSenseCAP Mate APPです。
            <br/>
            > <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Mate_APP/SenseCAP_APP#download" target="_blank"><span><font color={'FFFFFF'} size={"3"}>ダウンロード</font></span></a> / <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Mate_APP/SenseCAP_APP#config" target="_blank"><span><font color={'FFFFFF'} size={"3"}>デバイスのバインド</font></span></a> / <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Mate_APP/SenseCAP_APP#account" target="_blank"><span><font color={'FFFFFF'} size={"3"}>アカウント</font></span></a> / <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Mate_APP/SenseCAP_APP#user" target="_blank"><span><font color={'FFFFFF'} size={"3"}>ユーザー</font></span></a>
    </div>
</div>

### SenseCAP AI

<div class="title_container">
    <div class="title_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"6"}>SenseCAP AI </font></div>
            SenseCAP PortalおよびSenseCAP Mate APPでSenseCAP AIを使用します。
            <br/>
            > <a href="https://wiki.seeedstudio.com/ja/How_to_Use_SenseCAP_AI_on_SenseCAP_Portal_and_SenseCAP_Mate_APP" target="_blank"><span><font color={'FFFFFF'} size={"3"}>はじめに</font></span></a> 
            > <a href="https://wiki.seeedstudio.com/ja/xiao_esp32c3_sensecapai/" target="_blank"><span><font color={'FFFFFF'} size={"3"}>XIAO ESP32C3を接続に使用</font></span></a>
    </div>
</div>

### SenseCAP API

<div class="title_container">
    <div class="title_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"6"}>SenseCAP API </font></div>
            これは、デバイスおよびデータ管理のためのSenseCAP APIです。
            <br/>
            > <a href="https://sensecap-docs.seeed.cc/pdf/sensecap_opanapi_document_en.pdf" target="_blank"><span><font color={'FFFFFF'} size={"3"}>PDFをダウンロード</font></span></a> / <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_API/SenseCAP_API_Introduction" target="_blank"><span><font color={'FFFFFF'} size={"3"}>概要</font></span></a> / <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_API/API_pricing" target="_blank"><span><font color={'FFFFFF'} size={"3"}>API料金</font></span></a>
    </div>
</div>