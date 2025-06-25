---
description: このウィキは、Isaac ROS をインストールするためのステップバイステップガイドを提供します。
title: Isaac ROS のインストール
keywords:
- NVIDIA
- Isaac ROS
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/install_isaacros
last_update:
  date: 5/28/2025
  author: ZhuYaoHui
---

:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## Isaac ROS 初期環境セットアップ

### ReComputer 要件
#### ハードウェア環境:
- Jetson Orin/Jetson Xavier

#### ソフトウェア環境:
- JetPack 5.1.2
- Ubuntu 20.04+
- [ROS2 Humble](./ja_Install_ROS2_Humble.md)



## 1. 初期依存関係のインストール
NVIDIA の公式イメージと Seeed Wiki のフラッシングガイドに従ってください:
```bash
sudo apt-get install python3-pip # python3 をインストール
sudo apt-get install nvidia-jetpack # 開発者ツールをインストール
sudo pip3 install jetson-stats # Jetpack バージョンを確認するために Jtop をインストール
sudo apt-get install git-lfs # git-lfs をインストール
```


## 2. Docker-CE のインストール
ソフトウェアソースを更新:
```bash
sudo apt-get update
```

基本的な依存関係をインストール:
```bash
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common # HTTPS 経由で apt を使用するための必須パッケージをインストール
```

Docker の公式 GPG キーを追加:
```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

Docker の安定版リポジトリを追加:
```bash
sudo add-apt-repository \
   "deb [arch=arm64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

パッケージリストを再度更新（新しいリポジトリが追加されたため）:
```bash
sudo apt-get update
```

Docker CE（コミュニティエディション）をインストール:
```bash
sudo apt-get install docker-ce
```

Docker が起動することを確認:
```bash
sudo systemctl enable docker
sudo systemctl start docker
```

権限を追加（ユーザーを Docker グループに追加）:
```bash
sudo usermod -aG docker $USER
```

システムを再起動またはログアウト:
```bash
sudo reboot
```


## 3. Isaac ROS 共通パッケージの設定
ワークスペースを作成し、環境に追加:
```bash
mkdir -p ~/workspaces/isaac_ros-dev/src
echo "export ISAAC_ROS_WS=${HOME}/workspaces/isaac_ros-dev/" >> ~/.bashrc
source ~/.bashrc
```

ワークスペースに入り、パッケージをクローン:
```bash
cd ${ISAAC_ROS_WS}/src
git clone https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_common.git
```

公式の Isaac Common Docker イメージをプルし、Docker に入る:
```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```

初期環境設定が完了しました。


## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>