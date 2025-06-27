---
description: ReSpeaker Core V2 & Wio Link
title: ReSpeaker Core V2 & Wio Link
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ReSpeaker_Core_V2_&_Wio_Link
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

こちらは、ReSpeaker Core V2を使用して[Wio Link](https://wiki.seeedstudio.com/ja/Wio_Link/)を[IFTTT](https://ifttt.com/)を通じて制御する方法に関するチュートリアルです。

## 1. ReSpeaker Core v2.0 のセットアップ

ReSpeaker Core v2.0の[Out of Box Demo](https://wiki.seeedstudio.com/ja/ReSpeaker_Core_v2.0/#out-of-box-demo)に従って、ReSpeaker Coreをセットアップし、ユーザー名とパスワードでAlexaにログインしてください。

## 2. Wio Link を Wio APP でセットアップ

[Wio Link Get Starting](https://wiki.seeedstudio.com/ja/Wio_Link/#get-started)に従って、D0ポートにLEDを接続し、Wio APPをセットアップしてください。

## 3. IFTTT のセットアップ

- ステップ 1. [IFTTTアカウント](https://ifttt.com/join)にサインアップします。
- ステップ 2. **My Applets** を選択します。
- ステップ 3. **New Applet** を選択します。
- ステップ 4. **+this** をクリックします。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/this.png)

- ステップ 5. **amazon alexa** を選択し、ReSpeaker Core v2.0と同じAmazonアカウントでログインします。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/alexa.png)

- ステップ 6. **Say a specific phrase** を選択します。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/say_a_specific_phase.png)

- ステップ 7. 小文字のキーワード **on** を入力し、**Create Trigger** をクリックします。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/key_word.png)

- ステップ 8. **+that** をクリックします。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/that.png)

- ステップ 9. アクションサービスとして **Seeed Wio** を選択します。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/wio.png)

- ステップ 10. **on, off or trigger Grove** を選択します。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/choose_action.png)

- ステップ 11. 正しいオンラインGroveモジュールを選択し、**on** を **do** として設定します。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/on.png)

- ステップ 12. ステップ 3 ～ ステップ 11 を繰り返して、**off** 機能を追加します。

## 4. Alexa を使って楽しむ

「Alexa trigger on」と言うとGrove-LEDが点灯し、「Alexa trigger off」と言うとLEDが消灯するのが確認できます。また、Wio Linkの他の機能（LEDストリングなど）も使用できます。

:::note
    Googleアシスタントを使用してWio Linkと連携することも可能です。
:::

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様のニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>