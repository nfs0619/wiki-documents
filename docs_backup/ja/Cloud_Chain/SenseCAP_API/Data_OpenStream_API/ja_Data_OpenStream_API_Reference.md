---
description: Data_OpenStream_API_Quickstart
title: Data OpenStream API リファレンス
keywords:
- Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
slug: /ja/Cloud_Chain/SenseCAP_API/Data_OpenStream_API/Data_OpenStream_API_Reference
last_update:
  date: 05/15/2025
  author: Matthew
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div class="post-content">
<div id="toc">

&nbsp;

</div>
<h2 id="the-connection-information" class="clickable-header top-level-header">接続情報</h2>
<i class="icon-arrow-up back-to-top"></i>
<ul>
  <li>ホスト: 中国ステーション: sensecap-openstream.seeed.cn グローバルステーション: sensecap-openstream.seeed.cc</li>
  <li>ポート: MQTTの場合は1883、MQTT Over WebSocketの場合は8083</li>
  <li>ClientID: org-&lt;Organization ID&gt;-&lt;Random ID&gt;、&lt;Organization ID&gt;をSenseCAPポータルから取得したものに置き換え、&lt;Random ID&gt;をランダムに生成した数字と小文字の英字に置き換えてください。</li>
  <li>Username: org-&lt;Organization ID&gt;、&lt;Organization ID&gt;をダッシュボードから取得したものに置き換えてください（クイックスタートを参照）。</li>
  <li>Password: SenseCAPポータルの「セキュリティ / APIアクセスキー」でAPIキーを取得してください（クイックスタートを参照）。</li>
</ul>
<h2 id="publish-and-subscribe-model" class="clickable-header top-level-header">パブリッシュ＆サブスクライブモデル</h2>
<i class="icon-arrow-up back-to-top"></i>SenseCAP OpenStream APIはMQTTプロトコルと同様に「パブリッシュ＆サブスクライブモデル」を実装しています。MQTTまたはMQTT Over WebSocketを介してSenseCAP OpenStream APIにサーバーを接続し、標準的なパブサブプロトコルで通信することができます。

「サブスクライブ」を使用してメッセージを受信することができます。「サブスクライブ」はデバイスからのテレメトリーデータを継続的に監視する最も一般的な方法です。
<h2 id="message-topic" class="clickable-header top-level-header">メッセージトピック</h2>
<i class="icon-arrow-up back-to-top"></i>
<h3 id="receive-devices-telemeasuring-data">デバイスの測定データを受信する</h3>
トピック形式: /device_sensor_data/&lt;OrgID&gt;/&lt;DeviceEUI&gt;/&lt;Channel&gt;/&lt;Reserved&gt;/&lt;MeasurementID&gt;
<table>
<thead>
<tr>
<th>フィールド</th>
<th>説明</th>
</tr>
</thead>
<tbody>
<tr>
<td>OrgID</td>
<td>あなたの「Organization ID」。SenseCAPポータルで確認できます。ユニークなOrganization IDを所有しており、すべてのトピックに必要です。</td>
</tr>
<tr>
<td>DeviceEUI</td>
<td>デバイスのユニークな識別子</td>
</tr>
<tr>
<td>Channel</td>
<td>センサーが接続されるデバイス上の物理ソケット</td>
</tr>
<tr>
<td>Reserved</td>
<td>予約済み</td>
</tr>
<tr>
<td>MeasurementID</td>
<td>このドキュメントの「測定IDのリスト」を参照してください</td>
</tr>
</tbody>
</table>
<div class="alert alert-info" role="alert"><i class="fa fa-info-circle"></i> <b>注意:</b> 「+」はこのフィールドにフィルタリング条件がないことを意味し、すべての可能な構成に一致します。したがって、「/+/+/+/+」はすべての「&lt;DeviceEUI&gt;」、「&lt;Channel&gt;」、「&lt;SensorEUI&gt;」、「&lt;MeasurementID&gt;」をリスニングすることを意味します。</div>
トピックはフィルタリング条件を指定して、特定のデバイス、チャネル、測定タイプをリスニングすることを実現できます。例えば、デバイスIDが「2F000000000000」のデバイスのみをリスニングしたい場合、&lt;DeviceEUI&gt;フィールドを2F000000000000に置き換えることができます。

この例の「2F000000000000」は、すでにアカウントにバインドされているデバイスである必要があります。また、&lt;OrgID&gt;を必ず自分の「Organization ID」に置き換える必要があります。
<h4 id="message-body">メッセージ本文</h4>

```
{
    "value": "437",
    "timestamp": "1544151922137"
}
```

これはデバイスによってアップロードされたセンサー測定データであり、JSON形式に準拠しており、JSONパーサーで解析可能です。一般的に、ほとんどの機能要件では、本文はトピック内のいくつかのフィールドと組み合わせて使用する必要があります。
<table>
<thead>
<tr>
<th>フィールド</th>
<th>説明</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>センサーの測定値</td>
</tr>
<tr>
<td>timestamp</td>
<td>データの収集タイムスタンプ（単位: ミリ秒）</td>
</tr>
</tbody>
</table>
<h3 id="receive-devices-status-data">デバイスのステータスデータを受信する</h3>
トピック形式: /device_status_event/&lt;OrgID&gt;/&lt;DeviceEUI&gt;/&lt;Reserved&gt;/&lt;StatusID&gt;
<table>
<thead>
<tr>
<th>フィールド</th>
<th>説明</th>
</tr>
</thead>
<tbody>
<tr>
<td>OrgID</td>
<td>あなたの「Organization ID」。SenseCAPポータルで確認できます。ユニークなOrganization IDを所有しており、すべてのトピックに必要です。</td>
</tr>
<tr>
<td>DeviceEUI</td>
<td>デバイスのユニークな識別子</td>
</tr>
<tr>
<td>Reserved</td>
<td>予約済み</td>
</tr>
<tr>
<td>StatusID</td>
<td>このドキュメントの「デバイスステータスIDのリスト」を参照してください</td>
</tr>
</tbody>
</table>
必要なStatusIDをデバイスステートIDのリストに従ってサブスクライブし、予期しないIDをサブスクライブしないようにしてください。
<h4 id="message-body-1">メッセージ本文</h4>

```
{
    "value": "437",
    "timestamp": "1544151922137"
}
```

<table>
<thead>
<tr>
<th>フィールド</th>
<th>説明</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>センサーのステータス値</td>
</tr>
<tr>
<td>timestamp</td>
<td>データの収集タイムスタンプ（単位: ミリ秒）</td>
</tr>
</tbody>
</table>
</div>