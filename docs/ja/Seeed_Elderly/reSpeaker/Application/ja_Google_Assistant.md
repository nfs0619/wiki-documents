---
description: reSpeaker 用 Google Assistant
title: reSpeaker 用 Google Assistant
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Google_Assistant
last_update:
  date: 05/15/2025
  author: shuxu hu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Front.jpg)

この Wiki は ReSpeaker Core v2.0 用です。まず [ReSpeaker Core v2.0 の Wiki](https://wiki.seeedstudio.com/ja/ReSpeaker_Core_v2.0/#preparation) を読むことをお勧めします。

## 始める前に

以下の準備が必要です：

- 最新のイメージを搭載した ReSpeaker Core v2.0
- Wi-Fi ネットワーク（このネットワークで Google に ping を送信できることを確認してください）
- PC または Mac
- Micro-USB ケーブル 1 本
- [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

[準備](https://wiki.seeedstudio.com/ja/ReSpeaker_Core_v2.0/#preparation) を読み、WiFi とシリアルの設定をすでに完了しているものとします。

では、始めましょう 😃

## はじめに

### ハードウェア

この部分は簡単です。ReSpeaker Core v2.0 を `OTG` ポートを介してコンピュータに接続するだけです。

### ソフトウェア

#### プロジェクトの設定

- **ステップ 1. プロジェクトを追加する**

[リンク](https://console.actions.google.com/?pli=1) を開いてプロジェクトを追加します。

:::note
    Google アカウントを持っていない場合は、まず google.com でサインインしてください。
:::

`Add/Import project` をクリックします。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_0.png)

次に `Project name` を入力し、`Country/region` を選択します。その後、`CREATE PROJECT` をクリックして続行します。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_1.png)

- **ステップ 2. モデルを登録する**

`Connected properties -> DEVICE MODELS -> REGISTER MODEL` をクリックします（以下の画像を参照）。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_2.png)

製品情報を入力し、`REGISTER MODEL` をクリックして続行します。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_3.png)

`NEXT` をクリックします。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_4.png)

`ALL 7 traits` オプションを選択していることを確認してください。これにより、すべての権限をオンにできます。その後、`SAVE TRAITS` をクリックします。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_5.png)

次に、作成したプロジェクト名をクリックしてください。このデモでは、`ReSpeaker Core v2.0` を使用しています。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_6.png)

以下の画像のような情報が表示されます。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_7.png)

`Model Id` を記録してください。このデモでは `respeaker-xxxx-respeaker-core-v2.0-xxxxx` です。これは重要で、後で使用します。

次に、JSON ファイルをダウンロードします。右上のボタンをクリックし、`Download credentials.json` をクリックして JSON ファイルをコンピュータにダウンロードします。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_8.png)

その後、[WinCP](https://winscp.net/eng/docs/lang:chs) やその他の転送ツールを使用して JSON ファイルを ReSpeaker Core v2.0 にコピーします。例えば、`/home/respeaker` パスにコピーします。

次に、左上のギアをクリックし、`Project settings` をクリックして `Project ID` を記録します。このデモでは `` です。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_9.png)
![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_10.png)

さて、このセクションでは 2 つの ID を取得します。

Model ID `respeaker-xxxx-respeaker-core-v2.0-xxxxx`

Project ID `respeaker-440eb`

これらは後で使用します。

#### Google Assistant API を有効化する

選択したプロジェクトで Google Assistant API を有効化します（[利用規約](https://developers.google.com/assistant/sdk/terms-of-service) を参照）。これを Cloud Platform Console で行う必要があります。

[こちら](https://console.developers.google.com/apis/api/embeddedassistant.googleapis.com/overview) をクリックして Google Assistant API を有効化してください。

以下のトグルスイッチが有効（青色）であることを確認してください：

- `Web & App Activity`
- また、`Include Chrome browsing history and activity from websites and apps that use Google services` チェックボックスを選択してください。
- `Device Information`
- `Voice & Audio Activity`

#### SDK とサンプルコードのインストール

この部分の詳細については [Google ドキュメント](https://developers.google.com/assistant/sdk/guides/service/python/embed/install-sample) を参照してください。

この部分は Python 2.7 と Python 3 の両方で実行できます。このデモでは Python 2.7 を使用します。

**Python 2.7 の場合**

**ステップ 1.**

以下のコマンドを入力してください：
```
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install python-dev python-virtualenv
sudo virtualenv env --no-site-packages  
env/bin/python -m pip install --upgrade pip setuptools wheel
source env/bin/activate
```

**ステップ 2. パッケージを取得する**

Google Assistant SDK パッケージには、デバイス上で Google Assistant を実行するために必要なすべてのコードが含まれており、サンプルコードも含まれています。

パッケージのシステム依存関係をインストールします：

```
sudo apt-get install portaudio19-dev libffi-dev libssl-dev
Use pip to install the latest version of the Python package in the virtual environment:
sudo python -m pip install --upgrade google-assistant-sdk[samples]
```

**ステップ 3. 認証情報を生成する**

認証ツールをインストールまたは更新します：

```
sudo python -m pip install --upgrade google-auth-oauthlib[tool]==0.2
```

ターゲットフォルダを作成します。

```
sudo mkdir –p /path/to/assistant-sdk/
```

以下のコマンドを使用して `credentials.json` をターゲットの場所にコピーします。

```
sudo cp /home/respeaker/credentials.json /path/to/assistant-sdk/ 
```

以下のコマンドを入力してトークン生成コードを取得します。

```
google-oauthlib-tool --scope https://www.googleapis.com/auth/assistant-sdk-prototype \
          --save --headless --client-secrets /path/to/assistant-sdk/credentials.json
```

:::note
    上記のコマンドを使用することで、毎回異なる認証コードが生成されます。必ず確認してください。
:::

その後、`Please visit this URL to authorize this application:` の後に表示されるコードをコピーしてください。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/code0.png)

コードをインターネットブラウザに貼り付け、`Enter`キーを押してください。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/code1.png)

すべてが正常に進むと、以下のウィンドウが表示されます。Googleアカウントを選択し、`ALLOW`を選択してください。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/code2.png)
![](https://files.seeedstudio.com/wiki/Google-Assitant/img/code3.png)

次に、以下の画像のように認証コードが表示されます。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/code4.png)

このコードをコンソールにコピーしてください。
![](https://files.seeedstudio.com/wiki/Google-Assitant/img/code5.png)

その後、`credentials saved: /path/to/.config/google-oauthlib-tool/credentials.json`という通知が表示されます。これで、ここまでの手順が正常に完了したことを意味します。

#### Respeakerdをインストールする

以下のコマンドを入力してRespeakerdをインストールしてください。

```
sudo apt-get install portaudio19-dev libffi-dev libssl-dev
git clone https://github.com/respeaker/googleassistant_respeakerd
cd googleassistant_respeakerd
sudo python setup.py install
sudo cp script/io.respeaker.respeaker.conf /etc/dbus-1/system.d/
# respeakerdをpulseモードに設定
sudo vim /etc/respeaker/respeakerd.conf 
# 再起動して動作を確認
sudo reboot
```

#### Google Assistantを有効化する

以前に記録した2つのIDを覚えていますか？今、それらを使用する時です。

以下のコマンドを、自分のIDに置き換えてください。

```
googlesamples-assistant-respeakerd --project-id my-dev-project --device-model-id my-model
```

上記のコマンドでは、`my-dev-project`を自分の`project-id`に、`my-model`を自分の`Model ID`に変更してください。

このデモの場合、以下のようになります。

```
googlesamples-assistant-respeakerd --project-id respeaker-440eb --device-model-id respeaker-xxxx-respeaker-core-v2.0-xxxxx
```

これで完了です！乾杯！

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/codel.png)

私たちの製品をお選びいただきありがとうございます！私たちは、製品の使用体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>