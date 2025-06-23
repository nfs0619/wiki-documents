---
description: Data_OpenStream_API_Quickstart
title: Data OpenStream API クイックスタート
keywords:
- Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
slug: /ja/Cloud_Chain/SenseCAP_API/Data_OpenStream_API/Data_OpenStream_API_Quickstart
last_update:
  date: 05/15/2025
  author: Matthew
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div class="post-content">
<div class="summary">

このガイドでは、デバイスのメッセージを購読する方法と、特定のデバイスにコマンドを送信する方法について説明します。Eclipse Mosquitto の CLI を使用してメッセージを購読または公開します。

</div>
<div id="toc"></div>
<h2 id="setup" class="clickable-header top-level-header">セットアップ</h2>
<i class="icon-arrow-up back-to-top"></i>
<ul>
  <li>Mosquitto をインストールするか、<a href="https://mosquitto.org/download/">ダウンロード</a>してください。</li>
</ul>
<h2 id="credentials" class="clickable-header top-level-header">認証情報</h2>
<i class="icon-arrow-up back-to-top"></i> SenseCAP ポータルにアクセスし、「Security/Access API keys」に移動して、「Create Access Key」をクリックします。これにより「Access API keys」を取得できます。これを &lt;Password&gt; として設定し、「Organization ID」を &lt;OrgID&gt; として設定します。
<figure><img class="docimage" src="https://sensecap-docs.seeed.cc/images/open_api/access_key_en.png" alt="" /></figure>
<figure><img class="docimage" src="https://sensecap-docs.seeed.cc/images/open_api/access_key_en_2.png" alt="" /></figure>
<figure><img class="docimage" src="https://sensecap-docs.seeed.cc/images/open_api/access_key_en_3.png" alt="" /></figure>
<h2 id="receive-devices-messages" class="clickable-header top-level-header">デバイスのメッセージを受信する</h2>
<i class="icon-arrow-up back-to-top"></i>すべてのデバイスのメッセージをリッスンしてみましょう。

1. ターミナルウィンドウを開き、以下のコマンドを実行します。

- OrgID = Organization ID
- Password = Access API keys

```bash
mosquitto_sub \
    -h sensecap-openstream.seeed.cn \
    -t '/device_sensor_data/<OrgID>/+/+/+/+' \
    -u 'org-<OrgID>' \
    -P '<Password>' \
    -I 'org-<OrgID>-quickstart' \
    -v
```

先ほど取得した Organization ID と Access API Key を、上記の &lt;OrgID&gt; と &lt;Password&gt; に置き換えてください。

2. デバイスの電源を入れます。デバイスがメッセージを送信し続ける間、以下のようなデータを受信するはずです。

```
/device_sensor_data/1234/2CF7F12000000001/1/vs/4105 {"value":2,"timestamp":1544151824139}
/device_sensor_data/xxxx/2CF7F12XXXXXXXXX/1/vs/4097 {"value":23,"timestamp":1544151900992}
/device_sensor_data/xxxx/2CF7F12XXXXXXXXX/1/vs/4101 {"value":101629,"timestamp":1544151901112}
/device_sensor_data/xxxx/2CF7F12XXXXXXXXX/1/vs/4098 {"value":71,"timestamp":1544151900992}
/device_sensor_data/xxxx/2CF7F12XXXXXXXXX/1/vs/4099 {"value":69.12,"timestamp":1544151902224}
/device_sensor_data/xxxx/2CF7F12XXXXXXXXX/1/vs/4100 {"value":437,"timestamp":1544151922137}
```

<table>
<thead>
<tr>
<th>例</th>
<th>フィールド</th>
<th>説明</th>
</tr>
</thead>
<tbody>
<tr>
<td>1234</td>
<td>OrgId</td>
<td>組織ID</td>
</tr>
<tr>
<td>2CF7F12000000001</td>
<td>DeviceEUI</td>
<td>デバイスの一意の識別子</td>
</tr>
<tr>
<td>1</td>
<td>Channel</td>
<td>センサーを接続するためのデバイス上の物理ソケット</td>
</tr>
<tr>
<td>vs</td>
<td>Reserved</td>
<td>予約済みフィールド</td>
</tr>
<tr>
<td>4105</td>
<td>MeasureID</td>
<td>測定の種類、4105は風速を表します</td>
</tr>
<tr>
<td>2</td>
<td>value</td>
<td>収集された測定値、風速は2m/sです</td>
</tr>
<tr>
<td>1544151824139</td>
<td>timestamp</td>
<td>データ収集のタイムスタンプ</td>
</tr>
</tbody>
</table>
<h2 id="subscribe-a-specific-key" class="clickable-header top-level-header">特定のキーを購読する</h2>
<i class="icon-arrow-up back-to-top"></i>特定のキーを指定することで、特定のデバイスまたはチャネルのデータを購読できます。

例:
エア温湿度センサー（DeviceEUI: 2CF7F12210400083; Channel: 1;）によって収集された温度値を購読します。温度測定IDは4097です。
&lt;OrgID&gt;を組織IDに、&lt;Password&gt;をアクセスAPIキーに置き換え、以下のコマンドを実行します:

```bash
mosquitto_sub \
    -h sensecap-openstream.seeed.cn \
    -t '/device_sensor_data/<OrgID>/2CF7F12210400083/1/vs/4097' \
    -u 'org-<OrgID>' \
    -P '<Password>' \
    -I 'org-<OrgID>-quickstart' \
    -v
```

データを受信しました:
```cpp
/device_sensor_data/521853156991/2CF7F12210400083/1/vs/4097 {"value":28,"timestamp":1561373812474}
```
おめでとうございます！これで、MQTTを使用してメッセージを監視および受信する方法を理解しました。素晴らしいものを作りましょう！

</div>
