---
description: この Wiki は Isaac ROS AprilTag を使用するためのステップバイステップガイドを提供します。
title: Isaac ROS AprilTag
keywords:
- NVIDIA
- Isaac ROS
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/isaac_ros_apriltag
last_update:
  date: 5/28/2025
  author: ZhuYaoHui
---

# Isaac ROS AprilTag  

:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 前提条件  
AprilTag をデプロイする前に、reComputer 上で Isaac ROS の基本環境が正常にセットアップされていることを確認してください。[インストールガイド](/docs/Robotics/Robot_Software/ROS/Install_IsaacROS.md)。ROS2 がインストールされていない場合は、[こちらのドキュメント](/docs/Robotics/Robot_Software/ROS/Install_ROS2_Humble.md)を参照してください。  

### Isaac ROS AprilTag パッケージのトピック  
**購読されるトピック:**  

| ROS トピック       | インターフェース                  | 説明                     |  
|-----------------|----------------------------|---------------------------------|  
| image         | sensor_msgs/Image        | 入力カメラストリーム。            |  
| camera_info   | sensor_msgs/CameraInfo   | 入力カメラ内部パラメータストリーム。 |  

**公開されるトピック:**  

| ROS トピック          | 型                                              | 説明                                      |  
|--------------------|---------------------------------------------------|--------------------------------------------------|  
| tag_detections   | isaac_ros_apriltag_interfaces/AprilTagDetectionArray | AprilTag 検出メッセージの配列。           |  
| tf              | tf2_msgs/TFMessage                             | 検出された AprilTag (TagFamily:ID) のカメラの frame_id に対するポーズ。 |  


## 1. Isaac ROS AprilTag 環境セットアップ  

### ワークスペースの作成 (既に作成済みの場合はスキップ)  
```bash
mkdir -p ~/workspaces/isaac_ros-dev/src
echo "export ISAAC_ROS_WS=${HOME}/workspaces/isaac_ros-dev/" >> ~/.bashrc
source ~/.bashrc
```

### パッケージと ROS Bag データのクローン  
```bash
cd ${ISAAC_ROS_WS}/src
git clone https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_apriltag.git
cd ${ISAAC_ROS_WS}/src/isaac_ros_apriltag && \
  git lfs pull -X "" -I "resources/rosbags/quickstart.bag"
```

### Docker コンテナに入る  
```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```


## 2. ROS Bag データでのテスト  

### AprilTag パッケージのインストール (Docker 内)  
```bash
sudo apt-get install -y ros-humble-isaac-ros-apriltag
```

### AprilTag ノードの起動  
```bash
ros2 launch isaac_ros_apriltag isaac_ros_apriltag.launch.py
```

### 新しいターミナルを開く (Docker 内)  
```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```

### ROS Bag の再生  
```bash
ros2 bag play --loop src/isaac_ros_apriltag/resources/rosbags/quickstart.bag
```

### RViz2 での可視化  
ローカルターミナルで RViz2 を開き、**Image** と **TF** コンポーネントを追加します:  
```bash
ros2 run rviz2 rviz2
```

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/software/apriltag/1.png" />
</div>



## 3. USB カメラでのテスト  
ROS2 がローカルにインストールされていることを確認してください。  

### USB カメラワークスペースの作成  
```bash
cd ~/
mkdir -p usbcam/src
cd usbcam/src
```

### `usb_cam` パッケージのクローンとビルド  
```bash
git clone https://github.com/ros-drivers/usb_cam.git
cd ..
colcon build
echo "source ~/usbcam/install/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

### カメラフォーマットの確認  
カメラを接続し、そのデバイスパス (例: `/dev/video*`) を確認します。以下を使用してテストします:  
```bash
cd ~/usbcam
ros2 run usb_cam usb_cam_node_exe
```

<div align="center">
    <img width={400} 
    src="https://files.seeedstudio.com/wiki/robotics/software/apriltag/2.png" />
</div>


#### サポートされるピクセルフォーマット:  
`rgb8`, `yuyv`, `yuyv2rgb`, `uyvy`, `uyvy2rgb`, `m4202rgb`, `mono8`, `mono16`, `y102mono8`, `raw_mjpeg`  

### カメラの設定  
1. `/usbcam/src/usb_cam/config/params_1.yaml` 内の `pixel_format` を変更します。  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/software/apriltag/3.png" />
</div>

2. `frame_id` を調整します (デフォルト: `camera`)。  
3. `/usbcam/src/usb_cam/launch/camera_config.py` の 58 行目と 62 行目でトピック名を AprilTag の要件 (`/image` と `/camera_info`) に合わせてリマップします。  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/software/apriltag/4.png" />
</div>

### カメラの再ビルドと起動  
```bash
cd ~/usbcam
colcon build
ros2 launch usb_cam camera.launch.py
```

### AprilTag ノードの実行 (Docker 内)  
```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
ros2 launch isaac_ros_apriltag isaac_ros_apriltag.launch.py
```

### RViz2 での可視化  
**Fixed Frame** をカメラの `frame_id` に設定し、**Image** コンポーネントを `/image` にサブスクライブし、**TF** を有効にします。  
*注: このテストでは 200mm × 200mm の AprilTag を使用します。*  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/software/apriltag/5.png" />
</div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なるニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>