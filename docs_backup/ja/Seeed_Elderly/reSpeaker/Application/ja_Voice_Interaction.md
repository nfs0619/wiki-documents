---
description: 音声インタラクション
title: 音声インタラクション
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Voice_Interaction
last_update:
  date: 05/15/2025
  author: shuxu hu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

ここでは、世界中の音声インタラクションサービスの全体像を紹介します。

## 1. Alexa

Alexaは、Amazonおよびサードパーティのデバイスメーカーが提供する数千万台のデバイスで利用可能なAmazonのクラウドベースの音声サービスです。Alexaを使用すると、顧客が日常的に使用するテクノロジーとより直感的にやり取りできる自然な音声体験を構築できます。ツール、API、リファレンスソリューション、ドキュメントのコレクションにより、誰でも簡単にAlexaを活用できます。

**Alexaで何が構築できるのか？**
- **Alexaに機能を追加する**: Alexa Skills Kit (ASK) を使用して、Alexaに機能やスキルを追加します。ASKは、セルフサービスAPI、ツール、ドキュメント、コードサンプルのコレクションです。スキルはAlexaをより賢くし、顧客が音声でより多くのことを行えるようにします。私たちのツールキットを使用して自然な音声優先の体験を構築し、顧客がテクノロジーとやり取りする方法を再定義する手助けをしてください。
- **Alexaをデバイスに統合する**: Alexa Voice Service (AVS) を使用して、Alexaを製品に直接統合し、ハンズフリーの音声制御の利便性をあらゆる接続デバイスに提供します。AVSを通じて、製品に新しいインテリジェントインターフェースを追加し、Alexaの機能、スマートホーム統合、スキルの増加する数にアクセスできるようにします。
- **デバイスをAlexaに接続する**: Alexaをデバイスに接続して、顧客に楽しく直感的な体験を提供します。スマートホームデバイスにAlexaを追加して、スマートカメラ、照明、エンターテインメントシステムなどを音声で制御できるようにします。また、独自のAlexa Gadgetsを構築したり、Echo ButtonsなどのAlexa Gadgetsと連携するインタラクティブなスキルを作成することもできます。

**開発者リソース**

- [Alexa Voice Service Get Started](https://developer.amazon.com/zh/alexa-voice-service)
- [avs-device-sdk](https://github.com/alexa/avs-device-sdk/wiki)

## 2. Google アシスタント

Google Assistant SDKを使用すると、ホットワード検出、音声制御、自然言語理解、Googleのスマート機能をデバイスに追加できます。デバイスは発話（例: 「私のカレンダーには何がある？」のような音声リクエスト）をキャプチャし、それをGoogle Assistantに送信します。そして、発話の生テキストに加えて、音声応答を受け取ります。

**何ができるのか？**
- **タスク管理**: テキストを送信したり、リマインダーを設定したり、バッテリーセーバーをオンにしたり、メールを即座に確認したりできます。
- **1日の計画**: フライト状況を確認したり、ディナーの予約をしたり、映画の上映時間を確認したり、ルート上のコーヒーショップを見つけたりできます。
- **エンターテインメントを楽しむ**: Google PlayやYouTube Musicで音楽をコントロールできます。また、Google Homeでお気に入りのポッドキャストを途中から再生することもできます。
- **思い出を作る**: 写真を簡単に見つけたり、撮影したりすることができます。
- **答えを得る**: 天気、交通、金融、スポーツなどの最新情報をリアルタイムで取得できます。旅行中に翻訳をすばやく見つけることもできます。
- **家をコントロールする**: スマートホームデバイスを電話で制御できます。温度や照明を調整したり、外出先からでも操作できます。

**開発者リソース**

- [Google Assistant](https://assistant.google.com/)
- [SDK](https://developers.google.com/assistant/sdk/overview)

## 3. Bing Speech

Bing Speechには、音声をテキストに変換し、意図を理解し、テキストを音声に戻して自然な応答を実現する機能が含まれています。

**音声認識**  
話された音声をテキストに変換します。このAPIは、マイクからリアルタイムで入力される音声を認識するように設定したり、別のリアルタイム音声ソースからの音声を認識したり、ファイル内の音声を認識するように設定できます。いずれの場合もリアルタイムストリーミングが可能で、音声がサーバーに送信されると同時に部分的な認識結果が返されます。

Speech to Text APIを使用すると、音声でトリガーされるスマートアプリを構築できます。動作を確認するには、ターゲット言語を選択し、マイクをクリックして話し始めてください。または、サンプル音声フレーズの1つをクリックして、音声認識の仕組みを確認することもできます。このデモを使用することで、サービス改善の目的でMicrosoftに音声入力データを提供することに同意したものとみなされます。

**テキスト読み上げ**  
テキストを音声に変換します。アプリケーションがユーザーに「話しかける」必要がある場合、このAPIを使用してアプリが生成したテキストを音声に変換し、ユーザーに再生することができます。

Text-To-Speech APIを使用すると、話すことができるスマートアプリを構築できます。今すぐ試してみてください。ターゲット言語を選択し、文章を追加して再生ボタンをクリックすると、音声合成の仕組みを確認できます。このデモを使用することで、サービス改善の目的でMicrosoftに音声入力データを提供することに同意したものとみなされます。

**開発者リソース**

- [API](https://docs.microsoft.com/en-us/azure/cognitive-services/speech/home)

## 4. Baidu

Baidu Speechには、STT（音声からテキストへの変換）、TTS（テキストから音声への変換）、音声インタラクション、オフラインウェイクアップ機能が含まれています。

**開発者リソース**

- [SDK](https://github.com/MyDuerOS/DuerOS-Python-Client)  
- [API](http://ai.baidu.com/docs#/ASR-Android-SDK/top)

## 音声インタラクションチュートリアルリスト

以下は音声インタラクションのチュートリアルリストです。

<!-- - [ReSpeaker Core V2 & Wio Link](/ReSpeaker_Core_V2_&_Wio_Link/)
- [Google Assistant](/Google_Assistant) -->
弊社の製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>