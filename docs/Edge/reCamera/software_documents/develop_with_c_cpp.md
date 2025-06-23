---
description: Providing documentation and info for C/C++ developers
title: Develop with C/C++
keywords:
  - Edge
  - reCamera
  - C
  - CPP
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /recamera_develop_with_c_cpp
sidebar_position: 5
last_update:
  date: 06/09/2025
  author: Parker Hu & Yuxin Liang
---

# Develop with c&cpp

Recamera has limited resources and no compilation environment for C code is configured. If you want to use `C&CPP` to develop applications on the recamera, you need to configure the cross-compilation environment (Compile the `C&CPP` program on another Linux, then transfer the compiled file to the recamera terminal for execution).If you're using Windows, you can install Windows Subsystem for Linux (WSL) to run Linux (Ubuntu, OpenSUSE, Kali, Debian, or Arch Linux).

 **Step1**:Configuring the build environment on another Linux

```bash
sudo apt update
sudo apt install build-essential

mkdir recamera && cd recamera

wget https://github.com/Seeed-Studio/reCamera-OS/releases/download/0.1.5/reCameraOS_sdk_v0.1.5.tar.gz

tar -xzvf reCameraOS_sdk_v0.1.5.tar.gz

git clone https://github.com/sophgo/host-tools.git
git clone https://github.com/Seeed-Studio/sscma-example-sg200x.git

export SG200X_SDK_PATH=$HOME/recamera/sg2002_recamera_emmc/
export PATH=$HOME/recamera/host-tools/gcc/riscv64-linux-musl-x86_64/bin:$PATH

```

**Step2**:Compiling the instance program or the program you want to run on the Linux.Note that the created "build" directory must be located in the project's root directory ("build" should be at the same level as "CMakeLists.txt").

```bash
cd $HOME/recamera/sscma-example-sg200x/solutions/helloworld
mkdir build && cd build
cmake ..
make
```

You can view the file properties by typing `file helloworld`.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/1.png" /></div>

The green "helloworld" (with the same name as the program folder) is the compiled executable file.

**Step3**:In this step, we will transfer the compiled executable file to the recamera's Linux terminal to run.
First, we need to log in to the recamera terminal. You can use the web version as shown below.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/2.2.png" /></div>

Alternatively, you can use remote access software (e.g., MobaXterm) to connect to recamera.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/3.png" /></div>

Then,type the following code on your Linux (password required):

```bash
sudo scp helloworld recamera@{recamera_IP}:/home/recamera/
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/4.png" /></div>

The executable file has been successfully transferred.

**Step4**:Execute your executable file on the recamera terminal.

```bash
./helloworld
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/5.png" /></div>

Execution succeeded.

# More demos built with c&cpp

We provide more `C&CPP` demos for recamera.You can clone them from GitHub:https://github.com/Seeed-Studio/sscma-example-sg200x. You may have already cloned it in "Step 1".

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/6.png" /></div>

**Video_demo** is an example application demonstrating how to use the **recamera** to capture video frames, save them in different formats, and stream video over RTSP (Real-Time Streaming Protocol). 
You can follow "Step 2" to compile and "Step 3" to upload it to the recamera terminal.
*Note*: Before executing the program on the recamera terminal, you need to log in to the recamera workspace(http://192.168.42.1/#/workspace) and terminate the Flow, as this program consumes significant cache resources.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/7.png" /></div>

You need to run the program with superuser privileges to prevent memory allocation failures.

```bash
sudo ./video_demo
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/8.png" /></div>

The successful execution output is shown above.
Output Parameter Annotations:
1. The video is initialized and configured for three channels with different formats and frame rates:
   - **Channel 0**: RGB888 format, 1920x1080 resolution, 10 FPS
   - **Channel 1**: NV21 format, 1920x1080 resolution, 5 FPS
   - **Channel 2**: H.264 format, 1920x1080 resolution, 30 FPS
2. Depending on the channel:
   - For **Channel 0** and **Channel 1**: Frames are saved in RGB and NV21 formats, respectively.
   - For **Channel 2**: Frames are streamed over RTSP.

To view and save the RTSP stream, you can download VLC media player and connect to the network stream at:rtsp://192.168.42.1:8554/live0.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/9.png" /></div>

The latency of the RTSP stream is within approximately 2 seconds.

The application runs indefinitely until interrupted(Ctrl C).The application sets up signal handlers to gracefully exit upon receiving termination signals (SIGINT, SIGTERM).

This example serves as a basic introduction to using the recamera for video processing and streaming. Users can modify the code and adapt it for their specific needs, experimenting with different video formats and streaming configurations.

## Tech Support & Product Discussion

Thank you for choosing our products. We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>


<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

