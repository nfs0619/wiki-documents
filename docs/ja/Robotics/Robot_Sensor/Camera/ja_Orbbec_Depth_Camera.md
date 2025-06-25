---
description: この Wiki は、ROS を使用して reComputer 上で Orbbec Depth カメラを使用するためのステップバイステップガイドを提供します。
title: ROS を使用した Orbbec Depth カメラ
keywords:
- Jetson Nano
- reComputer
- Orbbec
- Depth Camera
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/orbbec_depth_camera_on_ros
last_update:
  date: 05/15/2025
  author: Lidayu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# ROS を使用して reComputer 上で Orbbec Depth カメラを使用する方法

## はじめに
このチュートリアルでは、[reComputer J30/J40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) シリーズデバイス上で ROS を介して Orbbec Depth カメラを使用する方法をステップバイステップで説明します。Orbbec Gemini 2 を例に取り、深度画像と点群のトピックデータを取得し、それらを rviz 上で可視化します。

<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## 前提条件
- __[reComputer J30/40 シリーズ](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__: このチュートリアルは [JetPack 5.x システム](/reComputer_J4012_Flash_Jetpack) と [ROS Noetic 環境](/installing_ros1) を基にしています。

- 依存関係をインストールします（ROS のディストリビューションに注意してください）:
  
  ```bash
  # ROS 環境をソースしていることを前提とします。以下も同様です。
  sudo apt install libgflags-dev ros-$ROS_DISTRO-image-geometry ros-$ROS_DISTRO-camera-info-manager \
  ros-$ROS_DISTRO-image-transport ros-$ROS_DISTRO-image-publisher libgoogle-glog-dev libusb-1.0-0-dev libeigen3-dev \
  ros-$ROS_DISTRO-diagnostic-updater ros-$ROS_DISTRO-diagnostic-msgs libdw-dev
  ```

## 始めるにあたって
### カメラの接続
Orbbec Depth カメラを USB Type-C を介して Jetson に接続し、[ROS がすでにインストールされている](/installing_ros1) ことを確認してください。

<div align="center">
      <img width={700} 
      src="https://i.imgur.com/0gAng8s.jpg" />
  </div>

### インストール
**OBcamera_ws をプロジェクトからクローンしている場合は、以下のリンクからクローンする必要はありません。**

- **ステップ 1:** ROS ワークスペースを作成します（**まだ作成していない場合**）:

```bash
mkdir -p OBcamera_ws/src
```

- **ステップ 2:** ソースコードを取得します:

```bash
cd OBcamera_ws/src
git clone https://github.com/orbbec/OrbbecSDK_ROS1.git
```

- **ステップ 3:** パッケージをビルドします:

```bash
cd OBcamera_ws
catkin_make
```

- **ステップ 4:** udev ルールをインストールします:

```bash
source ./devel/setup.bash
roscd orbbec_camera
sudo bash ./scripts/install_udev_rules.sh
```

### カメラを起動する

カメラモデル **Gemini2** の場合、ターミナル 1 に以下を入力します:

```bash
source ./devel/setup.bash
roslaunch orbbec_camera gemini2.launch
```

ターミナル 2 では以下を入力します:

```bash
source ./devel/setup.bash
rviz
```

ターミナル 3 で `rostpoic list` コマンドを入力すると、Orbbec カメラによって公開されているトピックを確認できます。利用可能なトピックは以下の通りです:

- `/camera/color/camera_info`: カラーカメラ情報。
- `/camera/color/image_raw`: カラーストリーム画像。
- `/camera/depth/camera_info`: 深度カメラ情報。
- `/camera/depth/image_raw`: 深度ストリーム画像。
- `/camera/depth/points`: 点群。`enable_point_cloud` が `true` の場合のみ利用可能。
- `/camera/depth_registered/points`: カラー点群。`enable_colored_point_cloud` が `true` の場合のみ利用可能。
- `/camera/left_ir/camera_info`: 左 IR カメラ情報。
- `/camera/left_ir/image_raw`: 左 IR ストリーム画像。
- `/camera/right_ir/camera_info`: 右 IR カメラ情報。
- `/camera/right_ir/image_raw`: 右 IR ストリーム画像。
- `/diagnostics`: カメラの診断情報。現在、診断情報にはカメラの温度のみが含まれています。

RVIZ を起動し、RVIZ インターフェースの左下のボタンを使用してトピックを追加すると、以下のようなレンダリングを取得できます:
<div align="center">
      <img width={700} 
      src="https://i.imgur.com/7jmfnZ4.png" />
  </div>

使用しているカメラモデルが異なる場合は、以下の表から対応する起動ファイル名を見つけ、ターミナル 1 の `gemini2.launch` を適切に置き換えてください。

| 製品シリーズ                       | 起動ファイル名              |
| ----------------------------------- | -------------------------- |
| astra+                              | astra_adv.launch           |
| astra mini/astra mini pro/astra pro | astra.launch               |
| astra mini s pro                    | astra.launch               |
| astra2                              | astra2.launch              |
| astra stereo s                      | stereo_s_u3.launch         |
| astra pro2                          | astra_pro2.launch          |
| dabai                               | dabai.launch               |
| dabai d1                            | dabai_d1.launch            |
| dabai dcw                           | dabai_dcw.launch           |
| dabai dw                            | dabai_dw.launch            |
| dabai pro                           | dabai_pro.launch           |
| deeya                               | deeya.launch               |
| femto / femto w                     | femto.launch               |
| femto mega                          | femto_mega.launch          |
| femto bolt                          | femto_bolt.launch          |
| gemini                              | gemini.launch              |
| gemini2 / dabai DCL                 | gemini2.launch             |
| gemini2L                            | gemini2L.launch            |
| gemini e                            | gemini_e.launch            |
| gemini e lite                       | gemini_e_lite.launch       |
| dabai max                           | dabai_max.launch           |
| dabai max pro                       | dabai_max_pro.launch       |
| gemini uw                           | gemini_uw.launch           |
| dabai dcw2                          | dabai_dcw2.launch          |
| dabai dw2                           | dabai_dw2.launch           |
| gemini ew                           | gemini_ew.launch           |
| gemini ew lite                      | gemini_ew_lite.launch      |
| gemini 330 series                   | gemini_330_series.launch   |

**すべての起動ファイルは基本的に類似しており、主な違いは同じシリーズ内の異なるモデルに設定されたパラメーターのデフォルト値です。USB 2.0とUSB 3.0などのUSB規格の違いにより、これらのパラメーターを調整する必要がある場合があります。起動に失敗した場合は、仕様書を慎重に確認してください。特に起動ファイル内の解像度設定やその他のパラメーターに注意を払い、互換性と最適なパフォーマンスを確保してください。**

## 技術サポートと製品に関する議論

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>