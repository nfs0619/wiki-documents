---
description: 本文档提供了使用 MLC 在 reComputer Jetson 设备上部署 DeepSeek 模型的分步指南，以实现优化的边缘 AI 推理。
title: 使用 MLC 在 reComputer Jetson 上部署 DeepSeek
keywords:
- reComputer
- Jetson
- LLM
- MLC
- deepseek
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/deploy_deepseek.webp
slug: /cn/deploy_deepseek_on_jetson_with_mlc
last_update:
  date: 05/15/2025
  author: Youjiang
---

# 使用 MLC 在 reComputer Jetson 上部署 DeepSeek

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 简介

DeepSeek 是一套先进的 AI 模型，专注于效率、准确性和实时处理。通过针对边缘计算的高级优化，DeepSeek 能够在 Jetson 设备上实现快速、低延迟的 AI 推理，减少对云计算的依赖，同时最大化性能。

在[之前的文档](/deploy_deepseek_on_jetson)中，我们提供了在 Jetson 上快速部署 DeepSeek 的指南。然而，成功部署的模型并未达到最佳推理速度。

本文档将提供使用 [MLC](https://llm.mlc.ai/) 在 reComputer Jetson 设备上部署 [DeepSeek](https://www.deepseek.com/) 的分步指南，以实现高效的边缘 AI 推理。

## 前提条件

- 具有超过 8GB 内存的 Jetson 设备。
- 设备需预先刷入 JetPack [5.1.1](https://wiki.seeedstudio.com/reComputer_Intro/) 或更高版本的操作系统。

:::note
在本文档中，我们将使用 [reComputer J4012 - Edge AI Computer with NVIDIA® Jetson™ Orin™ NX 16GB](https://www.seeedstudio.com/reComputer-J4012-p-5586.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlQ29tcHV0ZXIgSjQwMTIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjo0LCJjX3RvdGFsX3Jlc3VsdHMiOjUyLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D) 完成相关任务，但您也可以尝试使用其他 Jetson 设备。
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/j4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlQ29tcHV0ZXIgSjQwMTIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjo0LCJjX3RvdGFsX3Jlc3VsdHMiOjUyLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 开始使用

### 硬件连接
- 将 Jetson 设备连接到网络、鼠标、键盘和显示器。

:::note
当然，您也可以通过本地网络使用 SSH 远程访问 Jetson 设备。
:::

### 安装和配置 Jetson 的 Docker

首先，我们需要按照 Jetson AI Lab 提供的[教程](https://www.jetson-ai-lab.com/tips_ssd-docker.html)安装 Docker。

步骤1. 安装 `nvidia-container` 包。

```bash
sudo apt update
sudo apt install -y nvidia-container
```

:::info
如果您使用 SDK Manager 在 Jetson 上刷入 **Jetson Linux (L4T) R36.x (JetPack 6.x)** 并通过 apt 安装 nvidia-container，在 JetPack 6.x 上不会自动安装 Docker。

因此，您需要运行以下命令手动安装 Docker 并进行设置。
```bash
sudo apt update
sudo apt install -y nvidia-container curl
curl https://get.docker.com | sh && sudo systemctl --now enable docker
sudo nvidia-ctk runtime configure --runtime=docker
```
:::

步骤2. 重启 Docker 服务并将您的用户添加到 docker 组。

```bash
sudo systemctl restart docker
sudo usermod -aG docker $USER
newgrp docker
```

步骤3. 在 `/etc/docker/daemon.json` 中添加默认运行时。

```bash
sudo apt install -y jq
sudo jq '. + {"default-runtime": "nvidia"}' /etc/docker/daemon.json | \
  sudo tee /etc/docker/daemon.json.tmp && \
  sudo mv /etc/docker/daemon.json.tmp /etc/docker/daemon.json
```

步骤4. 重启 Docker。

```bash
sudo systemctl daemon-reload && sudo systemctl restart docker
```

### 加载并运行 DeepSeek

我们可以参考 `Jetson AI Lab` 提供的 Docker 容器，在 Jetson 上快速部署经过 MLC 量化的 DeepSeek 模型。
打开 [Jetson AI Lab](https://www.jetson-ai-lab.com/index.html) 网站并找到部署命令。

`Models` --> `Orin NX` --> `docker run` --> `copy`

:::info
在复制安装命令之前，我们可以在左侧修改相关参数。
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/deploy_deepseek.png" />
</div>

在 Jetson 设备上打开终端窗口，将刚刚复制的安装命令粘贴到终端中，并按键盘上的 `Enter` 键运行命令。
当我们在终端窗口中看到以下内容时，表示 DeepSeek 模型已成功加载到 Jetson 设备上。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/success_install_deepseek.png" />
</div>

此时，我们可以打开一个新的终端窗口并输入以下命令，测试模型是否能够正确执行推理。

:::danger
请注意，不要关闭运行 DeepSeek 模型的终端窗口。
:::

```bash
curl http://0.0.0.0:9000/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer none" \
  -d '{
    "model": "*",
    "messages": [{"role":"user","content":"为什么 LLM 要过马路？"}],
    "temperature": 0.6,
    "top_p": 0.95,
    "stream": false,
    "max_tokens": 100
  }'
```

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/get_response.png" />
</div>

### 安装 Open WebUI

```bash
sudo docker run -d --network=host \
    -v ${HOME}/open-webui:/app/backend/data \
    -e OLLAMA_BASE_URL=http://127.0.0.1:11434 \
    --name open-webui \
    --restart always \
    ghcr.io/open-webui/open-webui:main
```

安装程序运行完成后，您可以在浏览器中输入 http://<jetson_ip>:8080 来启动 UI 界面。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/install_webui.png" />
</div>

然后，我们需要为 OpenWebUI 配置大型模型推理引擎。

`用户（右上角）` --> `设置` --> `管理员设置` --> `连接`

将 OpenAI URL 更改为已加载 DeepSeek 的本地 MLC 推理服务器。

例如，如果我的 Jetson 设备的 IP 地址是 `192.168.49.241`，那么我的 URL 应该是 `http://192.168.49.241:9000/v1`

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/cfg_model.png" />
</div>

保存配置后，我们可以创建一个新的聊天窗口，体验本地 DeepSeek 模型的极快推理速度！

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/chat.png" />
</div>

### 测试推理速度

在这里，我们可以使用以下 Python 脚本来粗略测试模型的推理速度。

在 Jetson 设备上，创建一个名为 `test_inference_speed.py` 的新 Python 文件，并填入以下代码。

然后，在终端中运行命令 `python test_inference_speed.py` 来执行脚本。

<details>

<summary> test_inference_speed.py </summary>

```python
import time
import requests


url = "http://0.0.0.0:9000/v1/chat/completions"
headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer none"
}

data = {
    "model": "*",
    "messages": [{"role": "user", "content": "为什么 LLM 要过马路？"}],  # 翻译注释：用户输入的内容
    "temperature": 0.6,
    "top_p": 0.95,
    "stream": True,
    "max_tokens": 1000
}

start_time = time.time()
response = requests.post(url, headers=headers, json=data, stream=True)

token_count = 0
for chunk in response.iter_lines():
    if chunk:
        token_count += 1
        print(chunk)

end_time = time.time()
elapsed_time = end_time - start_time
tokens_per_second = token_count / elapsed_time

print(f"总 Token 数: {token_count}")  # 翻译注释：打印总 Token 数
print(f"耗时: {elapsed_time:.3f} 秒")  # 翻译注释：打印耗时
print(f"每秒 Token 数: {tokens_per_second:.2f} tokens/second")  # 翻译注释：打印每秒 Token 数
```

</details>


<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/test_infer_speed.png" />
</div>

计算结果显示，部署在 Jetson Orin NX 设备上的 MLC 编译的 deepseek1.5B 模型推理速度约为 **60 tokens/s**。

## 效果演示

在演示视频中，Jetson 设备功耗不到 20W，却实现了令人印象深刻的推理速度。

<div align="center">
<iframe width="800" height="450" src="https://www.youtube.com/embed/ohd_T95br90" title="deploy deepseek on jetson with mlc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 参考资料
- https://www.jetson-ai-lab.com/models.html
- https://www.deepseek.com/
- https://wiki.seeedstudio.com/deploy_deepseek_on_jetson/
- https://www.seeedstudio.com/tag/nvidia.html


## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>