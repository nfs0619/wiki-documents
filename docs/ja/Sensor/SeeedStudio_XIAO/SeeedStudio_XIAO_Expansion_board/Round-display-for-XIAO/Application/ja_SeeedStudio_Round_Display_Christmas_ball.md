---
description: XIAO ラウンドディスプレイ クリスマスボール
title: クリスマスツリー用の小さなクリスマスボールを作成する
keywords:
- XIAO
- ラウンドディスプレイ
- クリスマス
image: https://files.seeedstudio.com/wiki/Christmas_round_display/Christmas_ball_1.gif
slug: /ja/round_display_christmas_ball
last_update:
  date: 05/15/2025
  author: Bruno Santos
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio ラウンドディスプレイを使用した XIAO クリスマスボール

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Christmas_round_display/Christmas_ball.gif" style={{width:400, height:'auto'}}/>
</div>

このチュートリアルでは、雪が降り背景画像が変化するクリスマスボールを作成する方法を紹介します。

プログラムは以下を実行します：
- C 配列として保存された背景画像を表示します。
- 画像上に雪の粒子が風の効果とともに降る様子をシミュレートします。
- タッチ入力を検出し、背景画像のセットを循環します。
- スムーズなアニメーションのためにダブルバッファリングを使用します。

## 環境準備
### ハードウェア
このプロジェクトでは以下が必要です：
- [Seeed Studio ラウンドディスプレイ For XIAO](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)
- [XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)

XIAO ESP32S3 を使用する理由はメモリです。PNGDEC は動作するために約 40kbytes のメモリを必要とします。

### ソフトウェア準備

ラウンドディスプレイを使用するには、[Getting Started with Round Display for XIAO](https://wiki.seeedstudio.com/ja/get_start_round_display/#getting-started) にアクセスして必要なライブラリをインストールしてください。

いくつかの例を試して、すべてが正常に動作しているか確認してください。

### ライブラリ
このプロジェクトでは、[Seeed Studio ラウンドディスプレイ For XIAO](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html) に付属しているライブラリを使用します。

[Getting Started with Round Display for XIAO](https://wiki.seeedstudio.com/ja/get_start_round_display/#getting-started) のチュートリアルに記載されているように、すべてのライブラリをインストールしてください。
その後、以下が必要です：
- PNGdec ライブラリ
- **LVGL ライブラリの更新**（または Seeed Studio GitHub からインストールしない）

## 画像
画像は PNG 形式でフラッシュ配列に保存されています。これらは PNGdec ライブラリを使用して表示されます。

**すべての画像は PNG 形式である必要があります**

以下は使用した画像です - すべて AI によって生成されています。
<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/Christmas_round_display/background1.png" style={{width:200, height:'auto'}}/>
<img src="https://files.seeedstudio.com/wiki/Christmas_round_display/background2.png" style={{width:200, height:'auto'}}/>
<img src="https://files.seeedstudio.com/wiki/Christmas_round_display/background3.png" style={{width:200, height:'auto'}}/>
</div>

背景画像は TFT_eSPI が表示できるように準備し、XIAO 用ラウンドディスプレイに適合させる必要があります。

### 画像の準備
#### 画像のリサイズ
XIAO 用ラウンドディスプレイの解像度は 240x240 です。画像をリサイズする必要があります。[GIMP](https://www.gimp.org/) を使用してその方法を説明します。

1. 画像を開く
2. **画像 > 画像のスケール** に移動
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot1.jpg" style={{width:600, height:'auto'}}/></div>

3. 幅と高さを 240 に設定します。**比率を保持**（チェーン）が選択されているため、**幅**を変更すると**高さ**も変更されます。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot2.jpg" style={{width:400, height:'auto'}}/></div>

4. **スケール**ボタンを押します。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot3.jpg" style={{width:400, height:'auto'}}/></div>

5. 画像を保存します（古いものを上書きします）。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot4.jpg" style={{width:400, height:'auto'}}/></div>

#### フラッシュ配列の作成

**注意:** この手順は TFT_eSPI Flash_PNG の例に記載されています。

フラッシュ配列を作成するには、[File to C style array converter](https://notisrac.github.io/FileToCArray/) にアクセスしてください。

手順は以下の通りです：
1. **Browse** を使用して画像をアップロードします。画像をアップロードした後
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot5.jpg" style={{width:800, height:'auto'}}/></div>

2. いくつかのオプションを設定する必要があります
- **バイナリとして扱う**
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot6.jpg" style={{width:800, height:'auto'}}/></div>

他のオプションはすべてグレーアウトされます。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot7.jpg" style={{width:600, height:'auto'}}/></div>

3. **データ型**を**char**に変更します。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot8.jpg" style={{width:800, height:'auto'}}/></div>

4. **変換**を押します。これにより画像が配列に変換されます。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot9.jpg" style={{width:800, height:'auto'}}/></div>

5. **Save as file** ボタンを押して画像を保存し、Arduino スケッチに追加するか、**Copy to clipboard** ボタンを押します。
**Copy to clipboard** を選択した場合、Arduino エディタの右側にある 3 つのドットを押して**新しいタブ**を選択する必要があります。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot10.jpg" style={{width:400, height:'auto'}}/></div>

名前を付けます（通常は画像名に .h 拡張子を付けます）。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot11.jpg" style={{width:600, height:'auto'}}/></div>

最終的にすべての画像が *.h* ファイルとして保存されます。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot12.jpg" style={{width:800, height:'auto'}}/></div>

## コード
以下はクリスマスボールのコードです。
コードの主要な機能について簡単に説明します。コードにはいくつかのコメントも含まれています。

### ヘッダーとライブラリ
まず、いくつかのライブラリをインクルードします。
```cpp
#include <PNGdec.h>
#include <TFT_eSPI.h>
#include <Wire.h>

#include "background1.h"
#include "background2.h"
#include "background3.h"

#define USE_TFT_ESPI_LIBRARY
#include "lv_xiao_round_screen.h"
```
Seeed Studioライブラリがインストールされている必要があることを忘れないでください。

### 背景画像
背景画像を管理するための関数を以下に示します。
```cpp
struct Background {
  const uint8_t *data;
  size_t size;
};

const Background backgrounds[] = {
    {(const uint8_t *)background1, sizeof(background1)},
    {(const uint8_t *)background2, sizeof(background2)},
    {(const uint8_t *)background3, sizeof(background3)},
};

```
- **構造体**: 各背景画像は以下を含むBackground構造体として保存されます。
  - data: PNGデータへのポインタ。
  - size: PNGファイルのサイズ。

- **配列**: `backgrounds`配列はすべての背景画像を格納します。`currentBackground`変数は現在表示されている背景を追跡します。

### 雪の粒子シミュレーション
1. 粒子の初期化
```cpp
void initParticles() {
  for (int i = 0; i < numParticles; i++) {
    particles[i].x = random(0, sprite.width());
    particles[i].y = random(0, sprite.height());
    particles[i].speed = random(3, 8);
  }
}
```
- *numParticles*をランダムな位置と速度で初期化します。

2. 粒子の更新
```cpp
void updateParticles() {
  for (int i = 0; i < numParticles; i++) {
    particles[i].speed += random(-1, 2); // 速度の変化
    particles[i].speed = constrain(particles[i].speed, 3, 8);
    particles[i].y += particles[i].speed; // 下方向に移動
    particles[i].x += random(-1, 2);      // 風の影響
    // ラップアラウンドロジック
    if (particles[i].y > sprite.height()) {
      particles[i].y = 0;
      particles[i].x = random(0, sprite.width());
      particles[i].speed = random(3, 8);
    }
    if (particles[i].x < 0) particles[i].x = sprite.width();
    if (particles[i].x > sprite.width()) particles[i].x = 0;
  }
}
```
- 粒子の位置を以下の方法で更新します：
  - **落下効果**: 各粒子が下方向に移動します。
  - **風の影響**: わずかな水平ドリフトを追加します。
  - **ラップアラウンド**: 粒子が画面の下端を超えると、上端にリセットされます。

3. 粒子の描画
```cpp
void renderParticlesToSprite() {
  for (int i = 0; i < numParticles; i++) {
    sprite.fillCircle(particles[i].x, particles[i].y, 2, TFT_WHITE);
  }
}
```
- 各粒子を小さな白い円として描画します。

### PNGデコード
```cpp
int16_t rc = png.openFLASH((uint8_t *)backgrounds[currentBackground].data,
                           backgrounds[currentBackground].size,
                           pngDrawToSprite);
if (rc != PNG_SUCCESS) {
  Serial.println("Failed to open PNG file!");
  return;
}
png.decode(NULL, 0);
```
- 現在の背景PNGを*png.openFLASH()*関数を使用して読み込み、デコードします。

### タッチ操作
```cpp
if (chsc6x_is_pressed()) {
  currentBackground = (currentBackground + 1) % numBackgrounds; // 背景を循環
  delay(300); // デバウンス
}
```
- *chsc6x_is_pressed()*を使用してタッチイベントを検出し、*currentBackground*をインクリメントして背景画像を変更します。

### セットアップとループ
- **セットアップ:**
```cpp
void setup() {
  Serial.begin(115200);
  tft.begin();
  tft.fillScreen(TFT_BLACK);
  sprite.createSprite(240, 240); // ディスプレイサイズに合わせる
  pinMode(TOUCH_INT, INPUT_PULLUP);
  Wire.begin();
  initParticles();
}
```
- ディスプレイ、タッチ入力、雪の粒子を初期化します。

- **メインループ:**
```cpp
void loop() {
  sprite.fillScreen(TFT_BLACK);
  // 背景と雪を描画
  int16_t rc = png.openFLASH((uint8_t *)backgrounds[currentBackground].data,
                             backgrounds[currentBackground].size,
                             pngDrawToSprite);
  if (rc == PNG_SUCCESS) {
    png.decode(NULL, 0);
    updateParticles();
    renderParticlesToSprite();
    sprite.pushSprite(0, 0);
  }
  // タッチ入力を処理
  if (chsc6x_is_pressed()) {
    currentBackground = (currentBackground + 1) % numBackgrounds;
    delay(300);
  }
  delay(10); // 約100FPS
}
```
- スプライトをクリアし、現在のフレーム（背景＋粒子）を描画し、ユーザー入力を確認します。

### ダブルバッファリング
雪の粒子のアニメーションのちらつきを減らし、滑らかさを向上させるために**ダブルバッファリング**を使用します。

これにより、画面に表示する前にオフスクリーンバッファで描画できます。
#### ダブルバッファリングの実装
このプロジェクトでは、TFT_eSPIライブラリのTFT_eSpriteクラスがダブルバッファリングを実装しています。
1. **スプライトの作成**
- スプライト（オフスクリーンバッファ）はsetup()関数で作成されます：
```cpp
sprite.createSprite(240, 240); // ディスプレイサイズに合わせる
```
2. **バッファへの描画**
- 背景描画や雪粒子アニメーションなどのすべての描画操作はスプライト上で行われます：
```cpp
sprite.fillScreen(TFT_BLACK); // スプライトをクリア
renderParticlesToSprite();   // 雪粒子を描画
```

3. **ディスプレイの更新**
- スプライト内でフレームが完全に描画された後、1回の操作でディスプレイにプッシュされます：
```cpp
sprite.pushSprite(0, 0);
```
- これにより、バッファの内容が瞬時に画面に転送されます。

4. **再利用**
- スプライトは*loop()*の開始時にクリアされ、各フレームで再利用されます：
```cpp
sprite.fillScreen(TFT_BLACK);
```
### ダブルバッファリングの利点
- **滑らかな雪のアニメーション**: 雪粒子がちらつきなくシームレスに更新されます。
- **動的な背景切り替え**: タッチによる背景変更が遅延やアーティファクトなしで行われます。
- **効率的な描画**: メモリ（RAM）内での描画は、ディスプレイをラインごとに直接更新するよりも高速です。

**プロジェクトの完全なコードはこちらです**：
```cpp
/**
*
* 画像をC配列として作成するには、以下を訪問してください：
* https://notisrac.github.io/FileToCArray/
*
*/
#include <PNGdec.h>
#include <TFT_eSPI.h>

#include "background1.h"
#include "background2.h"
#include "background3.h"

#define USE_TFT_ESPI_LIBRARY
#include "lv_xiao_round_screen.h"

// PNGデコーダーとTFTディスプレイインスタンス
PNG png;
//TFT_eSPI tft = TFT_eSPI();
TFT_eSprite sprite = TFT_eSprite(&tft); // オフスクリーンバッファ

#define MAX_IMAGE_WIDTH 240 

// スノーグローブの背景
struct Background {
  const uint8_t *data;
  size_t size;
};

// 明示的キャストを使用して背景を定義
const Background backgrounds[] = {
    {(const uint8_t *)background1, sizeof(background1)},
    {(const uint8_t *)background2, sizeof(background2)},
    {(const uint8_t *)background3, sizeof(background3)},
};
const size_t numBackgrounds = sizeof(backgrounds) / sizeof(backgrounds[0]);

int currentBackground = 0; // 現在の背景のインデックス

// 雪粒子のプロパティ
const int numParticles = 100; // 雪粒子の数
struct Particle {
  int16_t x, y;   // 位置
  int16_t speed;  // 垂直速度
};
Particle particles[numParticles];

// PNGデコーダーのコールバック関数としてスプライトに描画
void pngDrawToSprite(PNGDRAW *pDraw) {
  uint16_t lineBuffer[MAX_IMAGE_WIDTH];
  png.getLineAsRGB565(pDraw, lineBuffer, PNG_RGB565_BIG_ENDIAN, 0xffffffff);
  sprite.pushImage(0, pDraw->y, pDraw->iWidth, 1, lineBuffer);
}

// 雪粒子を初期化
void initParticles() {
  for (int i = 0; i < numParticles; i++) {
    particles[i].x = random(0, sprite.width());
    particles[i].y = random(0, sprite.height());
    particles[i].speed = random(3, 8); // 各雪粒子のランダムな速度
  }
}

// 雪粒子の位置を更新
void updateParticles() {
  for (int i = 0; i < numParticles; i++) {
    particles[i].speed += random(-1, 2); // 速度のランダムな変化
    particles[i].speed = constrain(particles[i].speed, 3, 8);
    particles[i].y += particles[i].speed;
    particles[i].x += random(-1, 2); // 風の影響

    // 画面のラップアラウンド
    if (particles[i].y > sprite.height()) {
      particles[i].y = 0;
      particles[i].x = random(0, sprite.width());
      particles[i].speed = random(3, 8);
    }
    if (particles[i].x < 0) particles[i].x = sprite.width();
    if (particles[i].x > sprite.width()) particles[i].x = 0;
  }
}

// 雪粒子をスプライトに描画
void renderParticlesToSprite() {
  for (int i = 0; i < numParticles; i++) {
    sprite.fillCircle(particles[i].x, particles[i].y, 2, TFT_WHITE);
  }
}

void setup() {
  Serial.begin(115200);
  Serial.println("\n\nPNGdecライブラリを使用したタッチ操作");

  // TFTを初期化
  tft.begin();
  tft.fillScreen(TFT_BLACK);
  sprite.createSprite(240, 240); // ディスプレイサイズに合わせる

  // タッチ割り込みピンを初期化
  pinMode(TOUCH_INT, INPUT_PULLUP);
  Wire.begin();

  // 粒子を初期化
  initParticles();

  Serial.println("セットアップ完了。");
}

void loop() {
  // 新しいフレームのためにスプライトをクリア
  sprite.fillScreen(TFT_BLACK);

  // 現在の背景をスプライトに描画  
  int16_t rc = png.openFLASH((uint8_t *)backgrounds[currentBackground].data,
                           backgrounds[currentBackground].size,
                           pngDrawToSprite);


  if (rc != PNG_SUCCESS) {
    Serial.println("PNGファイルを開くのに失敗しました！");
    return;
  }
  png.decode(NULL, 0); // 背景をデコードして描画

  // 雪粒子を更新して描画
  updateParticles();
  renderParticlesToSprite();

  // スプライトをディスプレイにプッシュ
  sprite.pushSprite(0, 0);

  // chsc6x_is_pressedを使用してタッチ入力を確認
  if (chsc6x_is_pressed()) {
    currentBackground = (currentBackground + 1) % numBackgrounds; // 背景を循環
    delay(300); // デバウンス遅延
  }

  delay(10); // 約100FPS
}
```

今や、自分の写真を使って魔法のようなクリスマスボールを作成することができます。

## ✨ コントリビュータープロジェクト

- このプロジェクトは Seeed Studio の [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) によってサポートされています。
- [Bruno Santos](https://github.com/orgs/Seeed-Studio/projects/6/views/1?sliceBy%5Bvalue%5D=feiticeir0&pane=issue&itemId=90657934&issue=Seeed-Studio%7Cwiki-documents%7C1993) さんに感謝します。あなたの作品は [展示](https://wiki.seeedstudio.com/ja/contributors/) されます。

## 技術サポート & 製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様の製品体験がスムーズに進むよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>