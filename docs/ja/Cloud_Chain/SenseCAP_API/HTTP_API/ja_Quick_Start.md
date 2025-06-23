---
description: HTTP API クイックスタート
title: HTTP API クイックスタート
keywords:
- HTTP API 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Cloud_Chain/SenseCAP_API/HTTP_API/Quick_Start
last_update:
  date: 05/15/2025
  author: shuxu hu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 前提条件
  アカウントをお持ちでない場合は、SenseCAP ポータルに登録してください。
  - [中国ステーション](https://sensecap.seeed.cn)
  - [中国ステーション](https://sensecap.seeed.cc)

:::note
   LoRaWAN デバイスはグローバルステーションで使用されます。
:::

## アクセスキーを取得する

1. SenseCAP ポータルにログインします。
2. 「Security/Access API keys」に移動します。
3. 「Create Access Key」をクリックします。
4. 「API ID」をクリックし、パスワードを入力した後に「API ID」と「Access API keys」を取得します。

![](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_API/1.png)

![](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_API/2.png)


## すべてのデバイスグループを取得する
curl を使用して HTTP リクエストを送信します。以下の例では、アカウント内のすべてのデバイスグループを取得する API を呼び出します。

- username = API ID
- password = Access API keys

```bash
curl --user "username":"password" \
     https://sensecap.seeed.cc/openapi/list_groups
```

取得した API ID と Access API keys を置き換えてください。このコマンドを実行すると、以下のような出力が得られます。

```cpp
{
    "code": "0",
    "data": [
        {
            "group_name": "Default",
            "group_uuid": ""
        },
        {
            "group_name": "test group",
            "group_uuid": "80523B280630E611"
        },
        {
            "group_name": "demo",
            "group_uuid": "EBAD5387C4FC8711"
        }
    ]
}
```

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>