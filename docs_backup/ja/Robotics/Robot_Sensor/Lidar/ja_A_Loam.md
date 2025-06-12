---
description: この Wiki は、RoboSense RS32 LiDAR センサーを使用して reComputer Jetson 上で A-LOAM アルゴリズムをセットアップして実行するための詳細な手順を提供します。
title: A-LOAM 3D SLAM の実行
keywords:
- A-LOAM
- SLAM
- reComputer
- Jetson nano
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/a_loam
last_update:
  date: 05/15/2025
  author: ZhuYaoHui
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reComputer 上で A-LOAM 3D SLAM を実行する方法

## A-LOAM の概要

[A-LOAM](https://github.com/HKUST-Aerial-Robotics/A-LOAM/tree/devel) は、J. Zhang と S. Singh による元の LOAM (Lidar Odometry and Mapping) アルゴリズムの高度な実装です。A-LOAM の主な特徴は以下の通りです：
- リアルタイムの LiDAR オドメトリとマッピング。
- Eigen と Ceres Solver を使用した簡潔なコード構造。
- 多様な環境での高い性能と堅牢性。

A-LOAM は、自動運転、ロボティクス、3D マッピングなどのさまざまな用途に使用できます。

この Wiki では、RoboSense RS32 LiDAR センサーを使用して reComputer Jetson シリーズ上で A-LOAM (Advanced LOAM) アルゴリズムをセットアップして実行するための詳細な手順を提供します。A-LOAM は、効率的でリアルタイムのマッピングとローカリゼーションを実現するために Eigen と Ceres Solver を活用した LOAM の高度な実装です。
  <div align="center">
      <img width={800} 
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig0.gif" />
  </div>

## 前提条件
- __[reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__.

- __RoboSense RS32 Lidar__.

  :::note
    - reComputer が Jetpack 5.x を実行していることを確認してください。Ubuntu 20.04 と ROS Noetic でのみテストされています。このガイドに記載されている [reComputer 用 ROS1 のインストール](/installing_ros1) を参照して ROS 環境のセットアップを完了してください。
    - [reComputer 上で RoboSense RS32 LiDAR を ROS で起動する](/robosense_lidar) チュートリアルに従い、ポイントクラウドデータを正常に可視化できることを確認してください。
  :::

<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## 始める前に

### 環境セットアップ
 - **ステップ 1:** gflags、google-glog、suitesparse、cxsparse3、cxsparse をインストールします。
    ```bash
    sudo apt-get install libgflags-dev libgoogle-glog-dev
    sudo apt-get install libsuitesparse-dev libcxsparse3 libcxsparse-dev
    ```
- **ステップ 2:** PCL (Point Cloud Library) をインストールします。
  ```bash
  sudo apt install libpcl-dev
  ```
- **ステップ 3:** Ceres をインストールします。
  ```bash
  wget ceres-solver.org/ceres-solver-1.14.0.tar.gz
  tar xvf ceres-solver-1.14.0.tar.gz
  cd ceres-solver-1.14.0
  mkdir build
  cd build
  cmake ..
  make -j4 
  sudo make install
  ```
- **ステップ 4:** ワークスペース (~/catkin_ws/src) の src ディレクトリに A-LOAM コードをクローンします。
  ```bash
  cd ~/catkin_ws/src
  git clone https://github.com/HKUST-Aerial-Robotics/A-LOAM.git
  ```
### 設定ファイルとソースコードの変更

- **ステップ 1:** A-LOAM アルゴリズムはポイントクラウドタイプを **XYZIRT** とする必要がありますが、RS32 LiDAR のデフォルト出力は **XYZI** です。そのため、**_~/catkin_ws/src/rslidar_sdk/_** ディレクトリ内の **CMakeLists.txt** ファイルの **8 行目** を変更し、**XYZI** を **XYZIRT** に変更します。
  <div align="center">
      <img width={400} 
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig1.png" />
  </div>

- **ステップ 2:** A-LOAM がサブスクライブするデフォルトのポイントクラウドトピックは **_/velodyne_points_** ですが、RS32 LiDAR のデフォルト出力トピックは **_/rslidar_points_** です。そのため、**_~/catkin_ws/src/rslidar_sdk/config/config.yaml_** ファイルの **26 行目** のトピック名を **_/velodyne_points_** に変更します。
  <div align="center">
      <img width={400} 
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig2.png" />
  </div>

- **ステップ 3:** C++14 を使用している場合、**_~/catkin_ws/src/A-LOAM/_** ディレクトリ内の **CMakeLists.txt** ファイルの **5 行目** を変更し、**_C++11_** を **_C++14_** に変更します。
  <div align="center">
      <img width={400} 
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig3.png" />
  </div>

- **ステップ 4:** **OpenCV 4.x** を使用している場合、**_~/catkin_ws/src/A-LOAM/src_** ディレクトリ内の **scanRegistration.cpp** ファイルの **44 行目** の OpenCV ヘッダーファイル参照を更新する必要があります (OpenCV 3.x を使用している場合、このステップはスキップ可能です)。

  コードを以下のように置き換えます：
  ```c++
  #include <opencv/cv.h>
  ```
  
  以下に変更：
  ```c++
  #include <opencv2/opencv.hpp>
  ```

  <div align="center">
      <img width={400} 
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig4.png" />
  </div>

- **ステップ 5:** **_~/catkin_ws/src/A-LOAM/src/kittiHelper.cpp_** の **91 行目** と **93 行目** で **_CV_LOAD_IMAGE_GRAYSCALE_** を **_cv::IMREAD_GRAYSCALE_** に変更します。
  <div align="center">
      <img width={400} 
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig5.png" />
  </div>

- **ステップ 6:** **tf2** を使用している場合、**_~/catkin_ws/src/A-LOAM/src/_** ディレクトリ内のすべての **.cpp** ファイル **(kittiHelper.cpp, laserMapping.cpp, laserOdometry.cpp, scanRegistration.cpp)** を変更し、**_frame_id=/camera_init_** を **_frame_id=camera_init_** に変更し、**'/'** 記号のみを削除します。
  <div align="center">
      <img width={400} 
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig6.png" />
  </div>

### パッケージのコンパイル

-  **ステップ 1:** ワークスペースに戻り、機能パックを再コンパイルして環境をリロードします。
  ```bash
  cd ~/catkin_ws
  catkin_make
  source ~/catkin_ws/devel/setup.bash
  ```

### 3D SLAM の開始
- **ステップ 1:** LiDAR コードを実行します。
  ```bash
    roslaunch rslidar_sdk start.launch
  ```
- **ステップ 2:** A-LOAM コードを実行します。
  ```bash
  roslaunch aloam_velodyne aloam_velodyne_HDL_32.launch
  ```
  <div align="center">
      <img width={800} 
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig7.png" />
  </div>

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>