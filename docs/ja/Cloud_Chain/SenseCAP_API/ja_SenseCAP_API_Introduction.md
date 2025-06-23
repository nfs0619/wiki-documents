---
description: SenseCAP API の紹介
title: SenseCAP API の紹介
keywords:
- クラウドとチェーン
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Cloud_Chain/SenseCAP_API/SenseCAP_API_Introduction
last_update:
  date: 05/15/2025
  author: Matthew
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# SenseCAP API の紹介

=============================

![](https://sensecap-docs.seeed.cc/images/open_api/introduction.png)

SenseCAP API は、IoT デバイスとデータを管理するためのものです。HTTP プロトコル、MQTT プロトコル、Websocket プロトコルの 3 種類の API メソッドを組み合わせています。

*   HTTP API を使用すると、ユーザーは LoRa および NB-IoT デバイスを管理し、RAW データや履歴データを取得できます。
*   MQTT API を使用すると、ユーザーは MQTT プロトコルを介してセンサーのリアルタイム測定データを購読できます。
*   Websocket API を使用すると、ユーザーは Websocket プロトコルを介してセンサーのリアルタイム測定データを取得できます。