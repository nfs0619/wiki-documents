---
description: このWikiは、Isaac ROS Visual SLAMの使用方法をステップバイステップで解説します。
title: Isaac ROS Visual SLAM
keywords:
- NVIDIA
- Isaac ROS
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/isaac_ros_visual_slam
last_update:
  date: 5/28/2025
  author: ZhuYaoHui
---


# Isaac ROS Visual SLAM デプロイメント  

:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 前提条件  
Visual SLAMをデプロイする前に、Isaac ROS環境がReComputer上で正しくセットアップされていることを確認してください。[インストールガイド](./ja_Install_IsaacROS.md)を参照してください。ROS2がインストールされていない場合は、[こちらのドキュメント](./ja_Install_ROS2_Humble.md)を参照してください。


## 1. 環境設定  

### ワークスペースの作成（既存の場合はスキップ）  
```bash
mkdir -p ~/workspaces/isaac_ros-dev/src
echo "export ISAAC_ROS_WS=${HOME}/workspaces/isaac_ros-dev/" >> ~/.bashrc
source ~/.bashrc
```

### Visual SLAMパッケージのクローン  
```bash
cd ${ISAAC_ROS_WS}/src
git clone https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_visual_slam.git
```

### Dockerコンテナに入る  
```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```

## 2. ROS Bagデータを使用したテスト  

### Visual SLAMパッケージのインストール（Docker内）  
```bash
sudo apt-get install -y ros-humble-isaac-ros-visual-slam
```

### Visual SLAMノードの起動  
```bash
ros2 launch isaac_ros_visual_slam isaac_ros_visual_slam.launch.py
```

### RViz2を開いて可視化  
**ローカルターミナル**（Docker外）で以下を実行：  
```bash
cd ${ISAAC_ROS_WS}/src
rviz2 -d isaac_ros_visual_slam/isaac_ros_visual_slam/rviz/default.cfg.rviz
```

### ステレオカメラROS Bagの再生  
**3つ目のターミナル**で以下を実行：  
```bash
cd ${ISAAC_ROS_WS}/src
ros2 bag play isaac_ros_visual_slam/isaac_ros_visual_slam/test/test_cases/rosbags/small_pol_test/
```

### 期待される出力:  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/software/apriltag/6.png" />
</div>


### 注意事項:  
1. ROS Bagには**ステレオカメラ画像**（左/右フレーム）が含まれている必要があります。  
2. 必要に応じてRViz2の設定を調整してください（例：マップの可視化、軌跡設定）。  

トラブルシューティングについては、[公式ドキュメント](https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_visual_slam)を参照してください。  

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