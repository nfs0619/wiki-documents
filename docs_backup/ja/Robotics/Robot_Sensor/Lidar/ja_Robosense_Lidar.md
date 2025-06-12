---
description: このWikiは、reComputer J30/40上でROSを使用してRoboSense LiDARをインストールおよび設定するためのステップバイステップガイドを提供します。
title: RoboSense Lidar with ROS
keywords:
- Jetson Nano
- reComputer
- Robosense
- Lidar
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/robosense_lidar
last_update:
  date: 05/15/2025
  author: ZhuYaoHui
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reComputerでRoboSense LiDARを使用する方法

## はじめに
RoboSense LiDARセンサーは、さまざまなアプリケーション向けに高精度な3Dポイントクラウドデータを提供します。このガイドでは、ROS Noeticを実行する[reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)デバイス上でRS32モデルを設定する方法に焦点を当てています。

このWikiは、[reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) Jetson上でRoboSense LiDARをインストールおよび設定し、ポイントクラウドデータを可視化するためのステップバイステップガイドを提供します。
<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig1.gif" />
</div>


## 前提条件
- __[reComputer J30/40シリーズ](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__: チュートリアルに従って[JetPack 5.x](/reComputer_J4012_Flash_Jetpack)システムおよび[ROS Noetic環境](/installing_ros1)のインストールを完了していること。

- __RoboSense全シリーズLiDAR__

<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## 始めましょう

### Robosense SDKのインストール
- **ステップ1:** 基本的な依存関係をインストール
  ```bash
  sudo apt-get update &&
  sudo apt-get install -y libyaml-cpp-dev libpcap-dev
  ```
- **ステップ2:** ワークスペースを作成
  ```bash
  mkdir -p catkin_ws/src
  cd catkin_ws/src
  ```
- **ステップ3:** rslidar_sdkをクローン
  ```bash
  git clone https://github.com/RoboSense-LiDAR/rslidar_sdk.git
  cd rslidar_sdk
  git submodule init
  git submodule update
  ```
- **ステップ4:** **_catkin_ws/src/rslidar_sdk/CMakeLists.txt_**にある**CMakeLists.txt**ファイルを開き、ファイルの上部にある変数**_COMPILE_METHOD_**を**_CATKIN_**に変更します。

  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig3.png" />
  </div>

- **ステップ4:** **_catkin_ws/src/rslidar_sdk/_**ディレクトリにある既存の**package.xml**ファイルを削除し、**package_ros1.xml**ファイルを**package.xml**にリネームします。
  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig4.png" />
  </div>

- **ステップ5:** ターミナルで以下のコマンドを入力
  ```bash
  cd ~/catkin_ws/src/rslidar_sdk/
  mkdir build && cd build
  cmake .. && make -j4
  cd ~/catkin_ws/
  catkin_make
  ```
### ハードウェアの接続
- **ステップ1:** 電源、Robosense RS32 LiDAR、インターフェースボックス、イーサネットケーブルを以下のようにreComputer J4012に接続します。
<div align="center">
    <img width={500} 
    src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig5.gif" />
</div>

- **ステップ2:** **_/catkin_ws/src/rslidar_sdk/config/config.yaml_**にあるconfig.yamlファイルを開き、**10行目**の**lidar_type**を**RS32**に変更します。ファイルを保存して閉じます。デバイスに応じて正しいLiDARモデルを記入してください。
<div align="center">
    <img width={400} 
    src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig6.png" />
</div>

### reComputerのIPアドレスを設定
Robosense RS32 LiDARのデフォルトIPアドレスは**_192.168.1.200_**、ターゲットホストマシンのIPアドレスは**_192.168.1.102_**、MSOPパケットポート番号は6699、DIFOPパケットポート番号は7788です。ハードウェアを接続した後、reComputerのIPアドレスを手動で設定する必要があります。

- **ステップ1:** イーサネット設定を開きます。
  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig7.png" />
  </div>
- **ステップ2:** IPv4フィールドで手動設定を選択し、IPアドレス**192.168.1.102**とマスク**255.255.255.0**を入力します。
  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig8.png" />
  </div>

  ```bash
  ping 192.168.1.200
  ```
  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig9.png" />
  </div>
  LiDARからデータを受信した場合、接続が成功したことを示します。

### LiDARコードの実行
  ```bash
  cd ~/catkin_ws/
  source devel/setup.bash
  roslaunch rslidar_sdk start.launch
  ```
  <div align="center">
      <img width={800} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig10.png" />
  </div>

  
## 技術サポートと製品ディスカッション

当社の製品をお選びいただきありがとうございます！お客様の製品体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>