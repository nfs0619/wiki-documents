---
description: 使用 MLC LLM 在 Jetson 上运行量化的 Llama2-7B
title: 使用 MLC 加速推理
keywords:
  - 边缘计算
  - reComputer
  - Jetson
  - Llama2
  - MLC LLM
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Quantized_Llama2_7B_with_MLC_LLM_on_Jetson
last_update:
  date: 05/15/2025
  author: Jiahao
no_comments: false # 用于 Disqus

---

# 使用 MLC LLM 在 Jetson 上运行量化的 Llama2-7B

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 简介

近年来，大型语言模型（如 GPT-3）在自然语言处理任务中取得了革命性进展。然而，大多数这些模型都是基于大规模数据集训练的，需要强大的计算资源，因此不适合在边缘设备上部署。为了解决这个问题，研究人员开发了量化技术，可以在不牺牲性能的情况下将大型模型压缩为较小的模型。

在本项目中，我们介绍了一个量化版本的 [Llama2-7B](https://huggingface.co/meta-llama/Llama-2-7b-hf)，这是一个基于 1.5TB 数据训练的大型语言模型，并将其部署在 Jetson Orin 上。同时，我们利用 [Machine Learning Compiler Large Language Model](https://llm.mlc.ai) (MLC LLM) 来加速模型的推理速度。通过在 [Jetson Orin NX](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) 上部署量化的 Llama2-7B 和 MLC LLM，开发者可以构建高精度、低延迟的自然语言处理应用程序，适用于边缘设备。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/MLC_LLM.gif" /></div>

## 硬件组件
<div class="table-center">
	<table align="center">
		<tr>
			<th>reComputer（或其他基于 Jetson 的设备）</th>
		</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" style={{width:1000, height:'auto'}}/></div></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## 安装依赖项：

```shell
sudo apt-get update && sudo apt-get install git python3-pip
```
```shell
git clone --depth=1 https://github.com/dusty-nv/jetson-containers
```
```shell
cd jetson-containers pip3 install -r requirements.txt
```
```shell 
cd ./data && git clone https://github.com/LJ-Hao/MLC-LLM-on-Jetson-Nano.git && cd ..
```

## 安装并运行容器

### 第一步：安装镜像

```shell
./run.sh --env HUGGINGFACE_TOKEN=<YOUR-ACCESS-TOKEN> $(./autotag mlc) /bin/bash -c 'ln -s $(huggingface-downloader meta-llama/Llama-2-7b-chat-hf) /data/models/mlc/dist/models/Llama-2-7b-chat-hf'
```
使用 ```sudo docker images``` 检查镜像是否已安装。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/docker_image.png" alt="pir" width={1000} height="auto"/></p>

### 第二步：安装 Llama2-7b-chat-hf 并使用 MLC 对模型进行量化
```shell
./run.sh $(./autotag mlc) \
python3 -m mlc_llm.build \
--model Llama-2-7b-chat-hf \
--quantization q4f16_ft \
--artifact-path /data/models/mlc/dist \
--max-seq-len 4096 \
--target cuda \
--use-cuda-graph \
--use-flash-attn-mqa
```

### 第三步：运行并进入 Docker 容器
```shell
./run.sh <YOUR IMAGE NAME> 
# 对我来说是 dustynv/mlc:51fb0f4-builder-r35.4.1，检查第一步的结果
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/docker_run.png" alt="pir" width={1000} height="auto"/></p>

## 开始运行
### 在未量化的情况下运行 Llama（未使用 MLC LLM 量化）

```shell
cd /data/MLC-LLM-on-Jetson && python3 Llama-2-7b-chat-hf.py 
```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Llama-2-7b-chat-hf.png" alt="pir" width={1000} height="auto"/></p>

可以看到，在未使用 MLC 量化的情况下，Jetson Nano 16GB 可以加载模型，但无法运行。

### 在量化的情况下运行 Llama（使用 MLC LLM 量化）

```shell
cd /data/MLC-LLM-on-Jetson && python3 Llama-2-7b-chat-hf-q4f16_ft.py 
```
运行结果如下：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Llama-2-7b-chat-hf-q4f16_ft.png" alt="pir" width={1000} height="auto"/></p>

## 在 Jetson Orin NX 16GB 上运行 Llama 和 MLC 的视频：

<iframe width="560" height="315" src="https://www.youtube.com/embed/hyhh0Tc6g9Q" title="Llama2-7b 在 Jetson Orin NX 16GB 上运行，使用 MLC 4bit 量化" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 项目展望

在本项目中，我们展示了如何在 Jetson Orin 上部署量化版本的 Llama2-7B 和 MLC LLM。借助 Jetson Orin 的强大计算能力，开发者可以构建高精度、低延迟的自然语言处理应用程序，适用于边缘设备。未来，我们将继续探索在边缘设备上部署大型语言模型的潜力，并开发更高效、更优化的部署方法。