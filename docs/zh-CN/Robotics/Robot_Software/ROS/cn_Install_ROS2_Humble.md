---
description: 本维基提供了安装 ROS2 Humble 的分步指南。
title: 安装 ROS2 Humble
keywords:
- NVIDIA
- Isaac ROS
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/install_ros2_humble
last_update:
  date: 2025/5/28
  author: ZhuYaoHui
---

# ROS2 Humble 安装指南

## 前置条件
- ReComputer 必须安装 Jetpack 5.1.2 和 Ubuntu 20.04 环境

## 设置语言环境
```bash
locale  # 检查是否为 UTF-8
sudo apt update && sudo apt install locales
sudo locale-gen en_US en_US.UTF-8
sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
export LANG=en_US.UTF-8
locale  # 验证设置
```

## 安装依赖项
```bash
sudo apt update && sudo apt install gnupg wget
sudo apt install software-properties-common
sudo add-apt-repository universe
```

## 初始化源（选择一个区域）
```bash
# 美国区域
echo 'deb https://isaac.download.nvidia.com/isaac-ros/ubuntu/main focal main' | sudo tee -a /etc/apt/sources.list

# 中国区域
echo 'deb https://isaac.download.nvidia.cn/isaac-ros/ubuntu/main focal main' | sudo tee -a /etc/apt/sources.list
```

## 添加 ROS 2 APT 仓库
```bash
sudo apt update && sudo apt install curl -y \
&& sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu focal main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
```

## 安装 ROS2
```bash
sudo apt update
sudo apt install ros-humble-desktop-full  # 可选项: ros-humble-desktop-full, ros-humble-desktop, 或 ros-humble-ros-base
```

## 安装额外的构建工具
```bash
sudo apt install ros-dev-tools
```

## 初始化 ROS 环境
```bash
sudo rosdep init
rosdep update
```

## 设置 ROS 环境变量
```bash
echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>