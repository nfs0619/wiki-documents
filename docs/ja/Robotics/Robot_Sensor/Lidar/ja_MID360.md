---
description: この Wiki は、reComputer J30/40 上で ROS を使用して MID360 LiDAR をインストールおよび設定するためのステップバイステップガイドを提供します。
title: Mid360 with ROS
keywords:
- Jetson Nano
- reComputer
- Mid360
- Lidar
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/mid360
last_update:
  date: 05/15/2025
  author: ZhuYaoHui
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reComputer 上で MID360 LiDAR を使用する方法

## はじめに
MID360 LIDAR センサーは、さまざまな用途向けに高精度な 3D ポイントクラウドデータを提供します。このガイドでは、ROS Noetic を実行している [reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) デバイス上で MID360 をセットアップする方法に焦点を当てています。

この Wiki は、[reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) Jetson 上で MID360 LiDAR をインストールおよび設定し、ポイントクラウドデータを視覚化するためのステップバイステップガイドを提供します。
<!-- <div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig1.gif" />
</div> -->


## 前提条件
- __[reComputer J30/40 シリーズ](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__: チュートリアルに従って [JetPack 5.x のインストール](/reComputer_J4012_Flash_Jetpack) システムおよび [ROS Noetic 環境](/installing_ros1) をすでに完了していること。

- __MID360 LIDAR__

<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## 始めるにあたって

### SDK2 のインストール
- **ステップ 1:** Livox-SDK2 をインストール
  ```bash
  git clone https://github.com/Livox-SDK/Livox-SDK2.git
  cd ./Livox-SDK2/
  mkdir build
  cd build
  cmake .. && make -j8
  sudo make install
  ```

- **ステップ 2:** livox_ros_driver2 をインストール:
  ```bash
  git clone https://github.com/Livox-SDK/livox_ros_driver2.git ~/ws_livox/src/livox_ros_driver2
  cd ~/ws_livox/src/livox_ros_driver2
  source /opt/ros/noetic/setup.sh
  ./build.sh ROS1
  ```

### reComputer の IP アドレスを設定
MID360 LiDAR のデフォルト IP アドレスは **_192.168.1.2xx_** であり、ターゲットホストマシンの IP アドレスは **_192.168.1.50_** です。ハードウェアを接続した後、reComputer の IP アドレスを手動で設定する必要があります。

- **ステップ 1:** イーサネット設定を開く。
  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig7.png" />
  </div>
- **ステップ 2:** IPv4 フィールドで手動設定を選択し、IP アドレス **192.168.1.50** とマスク **255.255.255.0** を入力します。
  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/MID360/change_ip.png" />
  </div>

- **ステップ 3:** 設定パラメータ。
  次に、`livox_ros_driver2` 内の `~/src/livox_ros_driver2/config` ファイルを変更します。青い下線部分は静的 IP と一致する必要があります。赤い下線部分は `192.168.1.1xx` に設定する必要があり、最後の 2 桁は MID360 のブロードキャストコードの最後の 2 桁に対応します。例えば、ブロードキャストコードが 47MDL1C0010081（14 文字）の場合、IP アドレスは `192.168.1.181` に設定する必要があります。

  - `livox_ros_driver2/config/MID360_config.json`
      <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/MID360/MID360_config.png" />
      </div>
  - `livox_ros_driver2/launch_ROS1/rviz_MID360.launch`
      <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/MID360/RVIZ_MID360.png" />
      </div>
  - `livox_ros_driver2/launch_ROS1/msg_MID360.launch`
      <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/MID360/MSG_MID360.png" />
      </div>


### Lidar コードの実行
  Lidar を開始:
  ```bash
  cd ~/ws_livox/
  source devel/setup.bash
  roslaunch livox_ros_driver2 msg_MID360.launch
  ```
  
  新しいターミナルを開く:
  ```bash
  cd ~/ws_livox/
  source devel/setup.bash
  roslaunch livox_ros_driver2 rviz_MID360.launch
  ```
  <div align="center">
  <img width={500} 
  src="https://files.seeedstudio.com/wiki/robotics/hardware/MID360/reesult.png" />
  </div>

## 技術サポートと製品ディスカッション

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>