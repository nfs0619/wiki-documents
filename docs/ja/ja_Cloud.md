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

<strong><span style={{color: '8DC215', fontSize: '1.2em'}}>このセクションでは、Seeed Studio が提供するさまざまなクラウドサービスを紹介し、さまざまな産業用 IoT アプリケーションに対応しています。以下の分野について詳しく調べることができます：</span></strong>

- SenseCAP クラウドサービスとエコシステムのカタログ
- 各クラウド製品のデータ管理およびデバイス管理の手順
- さまざまな接続目的のための API
- クラウドの概要

### SenseCAP Dashboard / ポータル

<div className="title_container">
    <div className="title_item" style={{textAlign: 'center'}}>
            <div className="start_card_title" style={{textAlign: 'center'}}><span style={{color: '8DC215', fontSize: '1.5em'}}>SenseCAP ポータル</span></div>
            <div className="start_card_title" style={{textAlign: 'center'}}><span style={{color: 'FFFFFF', fontSize: '1em'}}>これは SenseCAP センサー ノードおよび SenseCAP ゲートウェイのデータ監視用ポータルです。</span></div>
    </div>
</div>

<div className="intro_container">
    <div className="intro_item" style={{textAlign: 'center'}}>
            <div className="start_card_title" style={{textAlign: 'center'}}><span style={{color: '8DC215', fontSize: '1.3em'}}>SenseCAP Dashboard</span></div>
            <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Dashboard/Dashboard_Basics" target="_blank"><span><span style={{color: 'FFFFFF', fontSize: '0.9em'}}> Dashboard 基本情報 </span></span></a>
            <br/>
            <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Dashboard/Dashboard_Registration" target="_blank"><span><span style={{color: 'FFFFFF', fontSize: '0.9em'}}> Dashboard 登録 </span></span></a>
            <br/>
            <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Dashboard/Hotspot_Registration" target="_blank"><span><span style={{color: 'FFFFFF', fontSize: '0.9em'}}> ホットスポット登録 </span></span></a>
            <br/>
    </div>
    <div className="intro_item" style={{textAlign: 'center'}}>
            <div className="start_card_title" style={{textAlign: 'center'}}><span style={{color: '8DC215', fontSize: '1.3em'}}>データ管理</span></div>
            <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Data_Management#table" target="_blank"><span><span style={{color: 'FFFFFF', fontSize: '0.9em'}}> 表形式で表示される詳細データ </span></span></a>
            <br/>
            <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Data_Management#graph" target="_blank"><span><span style={{color: 'FFFFFF', fontSize: '0.9em'}}> グラフ形式で表示されるデータ </span></span></a>
            <br/>
            <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Data_Management#check-account-info" target="_blank"><span><span style={{color: 'FFFFFF', fontSize: '0.9em'}}> アカウント情報の確認 </span></span></a>
            <br/>
    </div>
</div>

<div className="independent_container">
    <div className="independent_item" style={{textAlign: 'left'}}>
            <div className="independent_title" style={{textAlign: 'center'}}><span style={{color: '8DC215', fontSize: '1.3em'}}>デバイス管理</span></div>
            <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Device_Management#gateway" target="_blank"><span><span style={{color: 'FFFFFF', fontSize: '0.9em'}}> <strong>SenseCAP ゲートウェイ</strong> - EUI、名前、ステータスなどの情報を表示。</span></span></a>
            <br/>
            <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Device_Management#node-group-management" target="_blank"><span><span style={{color: 'FFFFFF', fontSize: '0.9em'}}> <strong>SenseCAP ノードグループ</strong> - グループでデバイスを便利に管理。</span></span></a>
            <br/>
            <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Device_Management#sensor-node-management" target="_blank"><span><span style={{color: 'FFFFFF', fontSize: '0.9em'}}> <strong>SenseCAP センサーノード</strong> - EUI、名前、ステータス、データタイプなどを表示。</span></span></a>
            <br/>
            <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Device_Management#general-information" target="_blank"><span><span style={{color: 'FFFFFF', fontSize: '0.9em'}}> <strong>デバイスの一般情報</strong> - バッテリーステータス、最近のオンライン記録など。</span></span></a>
            <br/>
            <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Device_Management#settings" target="_blank"><span><span style={{color: 'FFFFFF', fontSize: '0.9em'}}> <strong>設定</strong> - デバイスのデータ収集頻度の調整など。</span></span></a>
            <br/>
            <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Device_Management#location" target="_blank"><span><span style={{color: 'FFFFFF', fontSize: '0.9em'}}> <strong>デバイスの位置情報</strong></span></span></a> 
            /
            <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Device_Management#bind-device" target="_blank"><span><span style={{color: 'FFFFFF', fontSize: '0.9em'}}> <strong>デバイスのバインド</strong></span></span></a>
            /
            <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Device_Management#channel" target="_blank"><span><span style={{color: 'FFFFFF', fontSize: '0.9em'}}> <strong>デバイスのチャネル</strong></span></span></a>
            /
            <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Device_Management#data" target="_blank"><span><span style={{color: 'FFFFFF', fontSize: '0.9em'}}> <strong>デバイスのデータ</strong></span></span></a>
    </div>
</div>

### SenseCAP HotSpot APP

<div className="title_container">
    <div className="title_item" style={{textAlign: 'center'}}>
            <div className="start_card_title" style={{textAlign: 'center'}}><span style={{color: '8DC215', fontSize: '1.5em'}}>SenseCAP HotSpot APP</span></div>
            これは、モバイルフォンでLoRaWANホットスポットを管理するためのSenseCAP HotSpot APPです。
            <br/>
            > <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Hotspot_APP/Download_APP" target="_blank"><span><span style={{color: 'FFFFFF', fontSize: '1em'}}>ダウンロード</span></span></a> / <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Hotspot_APP/Hotspot_Management" target="_blank"><span><span style={{color: 'FFFFFF', fontSize: '1em'}}>ホットスポット管理</span></span></a> / <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Hotspot_APP/Remote Reboot" target="_blank"><span><span style={{color: 'FFFFFF', fontSize: '1em'}}>リモート再起動</span></span></a> / <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Hotspot_APP/Hotspot_Onboarding" target="_blank"><span><span style={{color: 'FFFFFF', fontSize: '1em'}}>Dashboardでのホットスポット登録</span></span></a>
    </div>
</div>

### SenseCAP Mate APP

<div className="title_container">
    <div className="title_item" style={{textAlign: 'center'}}>
            <div className="start_card_title" style={{textAlign: 'center'}}><span style={{color: '8DC215', fontSize: '1.5em'}}>SenseCAP Mate APP</span></div>
            これは、モバイルフォンでSenseCAPセンサーのデータを表示するためのSenseCAP Mate APPです。
            <br/>
            > <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Mate_APP/SenseCAP_APP#download" target="_blank"><span><span style={{color: 'FFFFFF', fontSize: '1em'}}>ダウンロード</span></span></a> / <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Mate_APP/SenseCAP_APP#config" target="_blank"><span><span style={{color: 'FFFFFF', fontSize: '1em'}}>デバイスのバインド</span></span></a> / <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Mate_APP/SenseCAP_APP#account" target="_blank"><span><span style={{color: 'FFFFFF', fontSize: '1em'}}>アカウント</span></span></a> / <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_Mate_APP/SenseCAP_APP#user" target="_blank"><span><span style={{color: 'FFFFFF', fontSize: '1em'}}>ユーザー</span></span></a>
    </div>
</div>

### SenseCAP AI

<div className="title_container">
    <div className="title_item" style={{textAlign: 'center'}}>
            <div className="start_card_title" style={{textAlign: 'center'}}><span style={{color: '8DC215', fontSize: '1.5em'}}>SenseCAP AI </span></div>
            SenseCAP PortalおよびSenseCAP Mate APPでSenseCAP AIを使用します。
            <br/>
            > <a href="https://wiki.seeedstudio.com/ja/How_to_Use_SenseCAP_AI_on_SenseCAP_Portal_and_SenseCAP_Mate_APP" target="_blank"><span><span style={{color: 'FFFFFF', fontSize: '1em'}}>はじめに</span></span></a> 
            > <a href="https://wiki.seeedstudio.com/ja/xiao_esp32c3_sensecapai/" target="_blank"><span><span style={{color: 'FFFFFF', fontSize: '1em'}}>XIAO ESP32C3を接続に使用</span></span></a>
    </div>
</div>

### SenseCAP API

<div className="title_container">
    <div className="title_item" style={{textAlign: 'center'}}>
            <div className="start_card_title" style={{textAlign: 'center'}}><span style={{color: '8DC215', fontSize: '1.5em'}}>SenseCAP API </span></div>
            これは、デバイスおよびデータ管理のためのSenseCAP APIです。
            <br/>
            > <a href="https://sensecap-docs.seeed.cc/pdf/sensecap_opanapi_document_en.pdf" target="_blank"><span><span style={{color: 'FFFFFF', fontSize: '1em'}}>PDFをダウンロード</span></span></a> / <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_API/SenseCAP_API_Introduction" target="_blank"><span><span style={{color: 'FFFFFF', fontSize: '1em'}}>概要</span></span></a> / <a href="https://wiki.seeedstudio.com/ja//Cloud_Chain/SenseCAP_API/API_pricing" target="_blank"><span><span style={{color: 'FFFFFF', fontSize: '1em'}}>API料金</span></span></a>
    </div>
</div>