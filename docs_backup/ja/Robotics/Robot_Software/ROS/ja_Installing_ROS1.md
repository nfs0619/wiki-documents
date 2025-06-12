---
description: このウィキでは、reComputer に ROS1 をインストールする方法を提供します。
title: ROS1 のインストール
keywords:
- ROS1
- ROS インストール
- Jetson Nano
- ロボティクス
- ロボットオペレーティングシステム
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/installing_ros1
last_update:
  date: 05/15/2025
  author: ZhuYaoHui
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reComputer に ROS1 をインストールする方法

## はじめに
ROS（Robot Operating System）は、ロボティクスの開発と研究で広く使用されているオープンソースのフレームワークです。スタンフォード大学で最初に開発され、その後 Willow Garage によって進化した ROS1 は、異種コンピューティングプラットフォーム、さまざまなプログラミング言語、およびモジュール設計をサポートしています。トピック、サービス、パラメータサーバーを介した通信メカニズム、Catkin を使用した効率的なパッケージ管理、rviz、gazebo、rosbag などの豊富な開発ツールを備えており、複雑なロボットシステムの構築と統合に不可欠なツールとなっています。

このウィキでは、[reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) シリーズに ROS Noetic をインストールする方法を学びます。以下の手順に従って開発環境をセットアップしてください。

## 前提条件
- __[reComputer J30/40 シリーズ](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__。

  :::note
  reComputer デバイスに _JetPack 5.x_ がインストールされており、必要な CUDA および関連ドライバーがすべて含まれていることを確認してください。以下に記載されているハードウェア接続のセットアップ手順に従ってください。
  :::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/software/install_ros1/fig1.gif" />
</div>

## 始めましょう

### ROS1 のインストール
- **ステップ 1:** ターミナルを開き、システムパッケージを更新します。
  ```bash
  sudo apt update 
  sudo apt upgrade
  ```
- **ステップ 2:** 基本ツールをインストールします。
  ```bash
  sudo apt install curl gnupg2 lsb-release
  ```
- **ステップ 3:** ROS リポジトリキーを追加します。
  ```bash
  sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc | sudo apt-key add -
  ```
- **ステップ 4:** ROS リポジトリを追加します。
  ```bash
  sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
  ```
- **ステップ 5:** パッケージリストを更新します。
  ```bash
  sudo apt update
  ```
- **ステップ 6:** ros-noetic-desktop-full をインストールします。
  ```bash
  sudo apt install ros-noetic-desktop-full
  sudo apt-get install python3-rosdep
  ```
- **ステップ 7:** rosdep を初期化します。
  ```bash
  sudo rosdep init
  rosdep update
  ```
- **ステップ 8:** ROS 環境変数を設定します。
  ```bash
  echo "source /opt/ros/noetic/setup.bash">> ~/.bashrc &&
  source ~/.bashrc
  ```
- **ステップ 9:** 依存ツールをインストールします。
  ```bash
  sudo apt install python3-rosinstall python3-rosinstall-generator python3-wstool build-essential
  ```
- **ステップ 10:** インストールをテストします。
  ```bash
  roscore
  ```
  <div align="center">
      <img width={800} 
      src="https://files.seeedstudio.com/wiki/robotics/software/install_ros1/fig2.png" />
  </div>


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>