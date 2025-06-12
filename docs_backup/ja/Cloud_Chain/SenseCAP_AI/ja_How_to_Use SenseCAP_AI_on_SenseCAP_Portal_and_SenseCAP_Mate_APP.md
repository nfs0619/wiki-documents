---
description: SenseCAP AIをSenseCAPポータルおよびSenseCAP Mateアプリで使用する方法
title: SenseCAP AIをSenseCAPポータルおよびSenseCAP Mateアプリで使用する方法
keywords:
- AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/How_to_Use_SenseCAP_AI_on_SenseCAP_Portal_and_SenseCAP_Mate_APP
last_update:
  date: 05/15/2025
  author: Lee
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# SenseCAP AIをSenseCAPポータルおよびSenseCAP Mateアプリで使用する方法

## 概要

**SenseCAP AI**は、センサーデータを最大限に活用し、その潜在能力を引き出すためのAI駆動型ソリューションです。SenseCAPセンサーをSenseCAPプラットフォームに接続することで、温度、湿度、光、空気質などの環境要因に関するデータを簡単に収集および分析できます。一方で、強力なAIアルゴリズムがこれらのデータを使用して、運用の最適化、コスト削減、効率向上に役立つ実用的な洞察と推奨事項を提供します。

空気質の監視、作物成長の最適化、効率の向上を目指している場合でも、SenseCAP AIは成功に必要なツールを提供します。SenseCAP AIは現在、[SenseCAPポータル](https://sensecap.seeed.cc/portal/#/login)および[SenseCAP Mateアプリ](http://sensecap-mate-download.seeed.cc/)でリリースされており、ユーザーはいつでも利用できます。使いやすいプラットフォームとアプリを使用すれば、センサーを迅速に接続し、数分で貴重な洞察を受け取ることができます。

AI駆動型センサーデータ分析の利点を見逃さないでください。今すぐSenseCAP AIをお試しください！

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/1.png
"/></div>

## 測定項目
SenseCAP AIは現在、以下の測定項目とデバイスタイプを分析しており、ユーザーは以下の測定項目を含むデバイスを選択できます。

| 測定項目               | デバイスタイプ                                        |
|-------------------------|-----------------------------------------------------|
| 空気温度               |[SenseCAP S2103 LoRaWAN® CO2、温度、湿度センサー](https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html)|
|                         |[SenseCAP S2101 LoRaWAN® 空気温度および湿度センサー](https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html)|
|                         |[S-H2S-01 工業用MODBUS RS485 H2Sセンサー（H2S、温度、湿度）](https://www.seeedstudio.com/RS485-H2S-Sensor-Connector-p-5114.html)|
|                         |[S-NH3-01 工業用MODBUS RS485 NH3センサー（NH3、温度、湿度）](https://www.seeedstudio.com/RS485-NH3-Sensor-Connector-p-5113.html)|
|                         |[SenseCAP S500 コンパクト気象ステーション](https://www.seeedstudio.com/SenseCAP-S500-5-in-1-Compact-Weather-Station-p-5652.html)|
|                         |SenseCAP S300 コンパクト気象ステーション|
|                         |SenseCAP S400 コンパクト気象ステーション|
|                         |[SenseCAP S700 コンパクト気象ステーション](https://www.seeedstudio.com/SenseCAP-S700-7-in-1-Compact-Weather-Station-p-5651.html)|
|                         |[SenseCAP S900 コンパクト気象ステーション](https://www.seeedstudio.com/SenseCAPONE-S900-9in1-Compact-Weather-Sensor-p-4881.html)|
|                         |[SenseCAP S2120 LoRaWAN 8-in-1 コンパクト気象ステーション](https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html)|
|                         |[SenseCAP S800 コンパクト気象ステーション](https://www.seeedstudio.com/SenseCAP-S800-8-in-1-Compact-Weather-Station-p-5653.html)|
|                         |[SenseCAP S1000 コンパクト気象ステーション 10-in-1](https://www.seeedstudio.com/SenseCAP-S1000-10-in-1-Compact-Weather-Station-p-5654.html)|
| 空気湿度               |デバイスタイプは空気温度と同じ                        |
| 光強度                 |[SenseCAP S2102 LoRaWAN 光強度センサー](https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html)|
|                         |SenseCAP S400 コンパクト気象ステーション |
|                         |[SenseCAP S700 コンパクト気象ステーション](https://www.seeedstudio.com/SenseCAP-S700-7-in-1-Compact-Weather-Station-p-5651.html)|
|                         |[SenseCAP S900 コンパクト気象ステーション](https://www.seeedstudio.com/SenseCAPONE-S900-9in1-Compact-Weather-Sensor-p-4881.html)|
|                         |[SenseCAP S2120 LoRaWAN 8-in-1 コンパクト気象ステーション](https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html)|
|                         |[SenseCAP S1000 コンパクト気象ステーション 10-in-1](https://www.seeedstudio.com/SenseCAP-S1000-10-in-1-Compact-Weather-Station-p-5654.html)|
| CO2                     | CO2センサー                                          |
|                         |[SenseCAP S2103 LoRaWAN® CO2、温度、湿度センサー](https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html)|
|                         |[SenseCAP S1000 コンパクト気象ステーション 10-in-1](https://www.seeedstudio.com/SenseCAP-S1000-10-in-1-Compact-Weather-Station-p-5654.html)|
| 土壌温度               | 土壌水分および温度センサー                            |
|                         |[SenseCAP ワイヤレス土壌温度、VWC & ECセンサー](https://www.seeedstudio.com/SenseCAP-Wireless-Soil-Temperature-VWC-EC-Sensor-LoRaWAN-AS923-MT20-p-4996.html)|
|                         | 土壌温度およびVWCセンサー                            |
|                         |[SenseCAP S2105 LoRaWAN® 土壌水分、温度、ECセンサー](https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html)|
| 土壌水分               |デバイスタイプは土壌温度と同じ                        |
| 電気伝導率             |[SenseCAP ワイヤレス土壌温度、VWC & ECセンサー](https://www.seeedstudio.com/SenseCAP-Wireless-Soil-Temperature-VWC-EC-Sensor-LoRaWAN-AS923-MT20-p-4996.html)|
|                         |[SenseCAP S2105 LoRaWAN® 土壌水分、温度、ECセンサー](https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html)|
| NH3                     |[S-NH3-01 工業用MODBUS RS485 NH3センサー（NH3、温度、湿度）](https://www.seeedstudio.com/RS485-NH3-Sensor-Connector-p-5113.html)|
| H2S                     |[S-H2S-01 工業用MODBUS RS485 H2Sセンサー（H2S、温度、湿度）](https://www.seeedstudio.com/RS485-H2S-Sensor-Connector-p-5114.html)|
| 光合成有効放射（PAR）  |[工業用PARセンサー S-PAR](https://www.seeedstudio.com/RS485-S-PAR-02B-p-4830.html)|

## SenseCAP Mate アプリ
1 [SenseCAP Mate アプリ](https://app.sensecapmx.com/)をダウンロードしてログインします。

2 デバイスページにアクセスし、**+** アイコンをクリックしてデバイスのQRコードをスキャンし、SenseCAPセンサーをバインドします。

3 センサーがSenseCAPプラットフォームにデータを送信していることを確認してください。SenseCAP AIサービスはセンサーのデータを使用する必要があります。

4 デバイスページでSenseCAP AIをクリックして、AIによるセンサーデータ分析を開始します。

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/2.png
"/></div>

5 育てている作物または動物とその場所を入力します。

6 センサーデータの期間を選択します。

- 月: 過去1か月のセンサーデータ
- 6か月: 過去6か月のセンサーデータ
- 年: 過去1年間のセンサーデータ

7 測定項目を選択します（最大5つまで）。**+** アイコンをクリックします。

- デバイスを選択し、その後測定項目を選択します。

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/3.png
"/></div>

8 情報をSenseCAP AIに送信すると、SenseCAP AIが提案を返します。

注意: AIの回答は参考情報として提供されます。SenseCAPはAIサービスの使用に起因するいかなる結果についても責任を負いませんので、慎重にご利用ください。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/4.png
"/></div>

## SenseCAP ポータル

1 [SenseCAP ポータル(グローバル)](https://sensecap.seeed.cc/portal/#/login)にログインします。

[SenseCAP ポータル(中国)](http://sensecap.seeed.cn/portal/#/login)

2 センサーのSNとコードを入力してSenseCAPセンサーをバインドします。

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/5.png
"/></div>

3 センサーがSenseCAPプラットフォームにデータを送信していることを確認してください。SenseCAP AIサービスはセンサーのデータを使用する必要があります。

4 SenseCAP AIにアクセスして、AIによるセンサーデータ分析を開始します。

5 育てている作物または動物とその場所を入力します。

6 センサーデータの期間を選択します。

- 月: 過去1か月のセンサーデータ
- 6か月: 過去6か月のセンサーデータ
- 年: 過去1年間のセンサーデータ

7 測定項目を選択します（最大5つまで）。**+** アイコンをクリックします。

- デバイスを選択し、その後測定項目を選択します。

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/6.png
"/></div>

8 情報をSenseCAP AIに送信すると、SenseCAP AIが提案を返します。

注意: AIの回答は参考情報として提供されます。SenseCAPはAIサービスの使用に起因するいかなる結果についても責任を負いませんので、慎重にご利用ください。

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/7.png
"/></div>