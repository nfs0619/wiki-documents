---
description: 本文档提供了在 reComputer AGX Orin 64G 上运行带语音交互的视觉语言模型的教程。
title: 运行带语音交互的 VLM
keywords:
- 多模态
- NanoVLM
- TTS
- STT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/speech_vlm
last_update:
  date: 05/15/2025
  author: YaoHui Zhu
---

# 如何在 reComputer Jetson 上运行带语音交互的 VLM

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 简介

本指南详细说明了如何在 reComputer Nvidia Jetson 设备上运行带语音交互的多模态视觉语言模型（VLM）。该模型结合了 Nvidia Jetson 平台的强大计算能力、阿里巴巴开源的语音转文本模型 SenseVoice 和 coqui-ai 的文本转语音（TTS）模型，用于执行复杂的多模态任务。通过本指南，您将能够成功安装并运行该系统，使其具备视觉识别和语音交互功能，从而为您的项目提供更智能的解决方案。

### [VLM（视觉语言模型）简介](https://docs.nvidia.com/jetson/jps/inference-services/vlm.html)

视觉语言模型（VLM）是针对 Nvidia Jetson 平台优化的多模态模型。它结合了视觉和语言处理能力，可处理复杂任务，如对象识别和生成描述性语言。VLM 可应用于自动驾驶、智能监控和智能家居等领域，提供智能且直观的解决方案。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/Multimodal_ai/audio_vlm/vlmgif.gif" />
</div>

### [SenseVoice 简介](https://github.com/FunAudioLLM/SenseVoice/tree/main)

SenseVoice 是一个专注于高精度多语言语音识别、语音情感识别和音频事件检测的开源模型。该模型基于超过 40 万小时的数据训练，支持 50 多种语言，并在性能上超越了 Whisper 模型。SenseVoice-Small 模型具有超低延迟，能够在 70 毫秒内处理 10 秒的音频。它还提供便捷的微调功能，并支持多种语言的部署，包括 Python、C++、HTML、Java 和 C#。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/Multimodal_ai/audio_vlm/sensevoice2.png" />
</div>

### [TTS（文本转语音）简介](https://github.com/coqui-ai/TTS)

TTS 模型是一个用于文本转语音任务的高性能深度学习模型。它包括 Tacotron2 等多种模型以及 MelGAN 和 WaveRNN 等声码器。TTS 模型支持多说话人 TTS、高效训练，并提供数据集管理和模型测试工具。其模块化代码库使得新功能的实现变得简单。

<div align="center">
    <img width={800} 
     src="https://raw.githubusercontent.com/coqui-ai/TTS/main/images/coqui-log-green-TTS.png" />
</div>

## 前置条件

- reComputer Jetson AGX Orin 64G 或 reComputer Jetson J4012 16G 设备，内存需大于 16GB。
- 免驱 USB 扬声器麦克风
- 一台能够输出 RTSP 流地址的 IP 摄像头。我们还提供了使用 [NVIDIA Nvstreamer](../Developer_Tools/cn_NVStreamer_Getting_Started.md) 工具将本地视频转换为 RTSP 流的说明。

:::note
我们已经在 reComputer [Orin NX 16GB](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) 和 [AGX Orin 64GB](https://www.seeedstudio.com/NVIDIArJetson-AGX-Orintm-64GB-Developer-Kit-p-5641.html) 开发套件上测试了本教程的可行性。
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/agx_orin.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html?queryID=a07376a957f072a4f755e1832fa0e544&objectID=5569&indexName=bazaar_retailer_products">
      <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 安装步骤

### 初始化系统环境

1. 在安装了 JP6 的初始系统后，您需要检查 `CUDA` 和其他库的安装情况。可以通过运行以下命令进行验证和安装：
    ```bash
    sudo apt-get install nvidia-jetpack
    ```

2. 安装 `python3-pip`、`jtop` 和 `docker-ce`。
3. 通过以下命令安装必要的依赖项：
    ```bash
    sudo apt-get install libportaudio2 libportaudiocpp0 portaudio19-dev
    sudo pip3 install pyaudio playsound subprocess wave keyboard
    sudo pip3 --upgrade setuptools
    sudo pip3 install sudachipy==0.5.2
    ```
4. 确保音频输入输出以及 USB 扬声器麦克风正常工作，并确保网络连接稳定。

### 安装 VLM

本项目的核心功能是视觉语言模型（VLM）。我们提供了关于 [如何在 reComputer Nvidia Jetson 上使用 VLM](../Generative_AI/cn_How_to_run_VLM_on_reComputer.md) 的指南。请参考该链接获取安装和使用说明。在继续以下步骤之前，请确保您已完全了解如何在 VLM 中使用文本描述进行推理。

### 安装 Pytorch Torchaudio

我们提供了一个 Nvidia Jetson 的入门 AI 课程，其中包括 [如何安装 PyTorch、Torchaudio 和 Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md) 的说明。请根据您的系统环境下载并安装这些包。

### 安装 Speech_vlm（基于 SenseVoice）
1. 克隆 Speech_vlm 包：
    ```bash
    cd ~/
    git clone https://github.com/ZhuYaoHui1998/speech_vlm.git
    ```
2. 安装 Speech_vlm 环境：
    ```bash
    cd ~/speech_vlm
    sudo pip3 install -r requement.txt
    ```

### 安装 TTS（基于 Coqui-ai）
```bash
cd ~/speech_vlm/TTS
sudo pip3 install .[all]
```

## 使用说明

`speech_vlm` 仓库的结构如下：
```bash
speech_vlm/
├── /TTS   # Coqui-ai TTS 程序
├── config # VLM 配置
├── README.md    # 项目介绍
├── requirements.txt   # SenseVoice 所需的环境库
├── compose.yaml   # VLM Docker Compose 启动文件
├── delete_id.sh     # 删除摄像头 ID 的脚本
├── example_1.wav     # 音频反馈音调模板（可替换）
├── model.py     # SenseVoice 主程序
├── set_alerts.sh     # 设置摄像头警报
├── set_describe.sh     # 文本输入以让 VLM 描述当前场景
├── set_streamer_id.sh  # 将 RTSP 摄像头添加到 VLM
├── view_rtsp.py  # 使用 OpenCV 查看 RTSP 流
└── vlm_voice.py  # 多模态主程序
```

1. 启动 VLM
```bash
cd ~/speech_vlm
sudo docker compose up -d
```

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/reComputer/Application/Multimodal_ai/audio_vlm/dockerps.png" />
</div>

2. 将 RTSP 流添加到 VLM

查看 `speech_vlm` 仓库下的 `set_streamer_id.sh` 内容：

```sh
#!/bin/bash
curl --location 'http://0.0.0.0:5010/api/v1/live-stream' \
--header 'Content-Type: application/json' \
--data '{"liveStreamUrl": "RTSP 流地址"}'
```

将 `0.0.0.0` 替换为 Jetson 设备的 IP 地址，并将 `RTSP 流地址` 替换为摄像头的 RTSP 流地址。

例如：
```sh
#!/bin/bash
curl --location 'http://192.168.49.227:5010/api/v1/live-stream' \
--header 'Content-Type: application/json' \
--data '{"liveStreamUrl": "rtsp://admin:IHFXnM8k@192.168.49.15:554//Streaming/Channels/1"}'
```

:::note
如果您没有 RTSP 摄像头，我们提供了[如何使用 NVStreamer 将本地视频流作为 RTSP](../Developer_Tools/cn_NVStreamer_Getting_Started.md)的说明，以及[如何将其添加到 VLM](../Generative_AI/cn_How_to_run_VLM_on_reComputer.md)。
:::

运行 `set_streamer_id.sh`：
```bash
cd ~/speech_vlm
sudo chmod +x ./set_streamer_id.sh
./set_streamer_id.sh
```

我们将获得一个摄像头 ID，此 ID 非常重要，需要记录下来，例如：

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/reComputer/Application/Multimodal_ai/audio_vlm/set_id.png" />
</div>

3. 运行 `vlm_voice.py`

需要替换以下两行 Python 代码中的 `0.0.0.0`：

```python
API_URL = 'http://0.0.0.0:5010/api/v1/chat/completions'  # API 端点
REQUEST_ID = ""  # 请求 ID
```

将其替换为 Jetson 的 IP 地址，并将步骤 2 返回的摄像头 ID 填入 `REQUEST_ID`。

<details>
<summary>vlm_voice.py</summary>

```python
import pyaudio
import wave
import keyboard
import subprocess
import json
from funasr import AutoModel
from funasr.utils.postprocess_utils import rich_transcription_postprocess
import time
import torch
from TTS.api import TTS
import os
# 获取设备
device = "cuda" if torch.cuda.is_available() else "cpu"

# 初始化 TTS
api = TTS("tts_models/en/ljspeech/glow-tts").to(device)

# 配置参数
FORMAT = pyaudio.paInt16  # 16 位分辨率
CHANNELS = 1  # 单声道
CHUNK = 1024  # 每块样本数
OUTPUT_FILENAME = "output.wav"  # 输出文件名
API_URL = 'http://192.168.49.227:5010/api/v1/chat/completions'  # API 端点
REQUEST_ID = "1388b691-3b9f-4bda-9d70-0ff0696f80f4"  # 请求 ID

# 初始化 PyAudio
audio = pyaudio.PyAudio()
# 准备存储录音数据的列表
frames = []

# 初始化麦克风采样率
print("可用的音频输入设备：")
for i in range(audio.get_device_count()):
    info = audio.get_device_info_by_index(i)
    print(f"设备 {i}: {info['name']} - {info['maxInputChannels']} 通道")

device_index = int(input("请选择您的 USB 麦克风的设备索引："))

device_info = audio.get_device_info_by_index(device_index)
supported_sample_rates = [8000, 16000, 32000, 44100, 48000]
supported_rate = 0
for rate in supported_sample_rates:
    try:
        if audio.is_format_supported(rate,
                                     input_device=device_index,
                                     input_channels=1,
                                     input_format=pyaudio.paInt16):
            supported_rate = rate
            print(f"{rate} Hz 是支持的。")
    except ValueError:
        print(f"{rate} Hz 不支持。")

# 初始化模型
model = "./SenseVoiceSmall"
model = AutoModel(
    model=model,
    vad_model="./speech_fsmn_vad_zh-cn-16k-common-pytorch",
    vad_kwargs={"max_single_segment_time": 30000},
    trust_remote_code=True,
    disable_log=True
)

def extract_content(json_response):
    try:
        # 解析 JSON 字符串
        data = json.loads(json_response)
        
        # 提取 content 部分
        content = data["choices"][0]["message"]["content"]
        
        print(f"{content}")
        return content
    except KeyError as e:
        print(f"键错误：{e}")
    except json.JSONDecodeError as e:
        print(f"JSON 解码错误：{e}")
    except Exception as e:
        print(f"发生了意外错误：{e}")

def start_recording():
    global frames
    frames = []
    
    try:
        stream = audio.open(format=FORMAT, channels=CHANNELS,
                            rate=supported_rate, input=True,
                            frames_per_buffer=CHUNK, input_device_index=device_index)
        print("开始录音... 按下 '2' 停止录音。")
    
        while True:
            if keyboard.is_pressed('2'):
                print("录音已停止。")
                break
            data = stream.read(CHUNK)
            frames.append(data)
    
        stream.stop_stream()
        stream.close()
    
    except Exception as e:
        print(f"录音过程中发生错误：{e}")

def save_recording():
    try:
        waveFile = wave.open(OUTPUT_FILENAME, 'wb')
        waveFile.setnchannels(CHANNELS)
        waveFile.setsampwidth(audio.get_sample_size(FORMAT))
        waveFile.setframerate(supported_rate)
        waveFile.writeframes(b''.join(frames))
        waveFile.close()
        print(f"录音已保存为 {OUTPUT_FILENAME}")
    except Exception as e:
        print(f"保存录音时发生错误：{e}")

def send_alert(text):
    # 构造 JSON 负载
    payload = {
        "messages": [
            {
                "role": "system",
                "content": "你是一个有帮助的 AI 助手。"
            },
            {
                "role": "user",
                "content": [
                    {
                        "type": "stream",
                        "stream": {
                            "stream_id": REQUEST_ID
                        }
                    },
                    {
                        "type": "text",
                        "text": text
                    }
                ]
            }
        ],
        "min_tokens": 1,
        "max_tokens": 128
    }
    
    # 将负载转换为 JSON 字符串
    json_payload = json.dumps(payload)
    
    # 使用 subprocess 执行 curl 命令
    curl_command = [
        'curl', '--location', API_URL,
        '--header', 'Content-Type: application/json',
        '--data', json_payload
    ]
    
    try:
        result = subprocess.run(curl_command, check=True, capture_output=True, text=True)
        ## 获取内容
        content_result = extract_content(result.stdout)
        # TTS 
        api.tts_to_file(
            str(content_result),
            speaker_wav="./example_1.wav",
            file_path="speech.wav"
        )
        # 转换音频采样率
        subprocess.run(['ffmpeg', '-i', 'speech.wav', '-ar', str(supported_rate), 'speech1.wav', '-y'])
        # 播放音频
        wf = wave.open('./speech1.wav', 'rb')
        stream = audio.open(format=pyaudio.paInt16,
                        channels=1,
                        rate=supported_rate,
                        output=True,
                        output_device_index=device_index)
        data = wf.readframes(1024)
        while data:
            stream.write(data)
            data = wf.readframes(1024)
        # 播放音频
        os.remove('speech.wav')
        os.remove('speech1.wav')
        stream.stop_stream()
        stream.close()
        wf.close()  # 关闭 wave 文件

        #print(f"警报发送成功：{result.stdout}")
    except subprocess.CalledProcessError as e:
        print(f"发送警报时发生错误：{e.stderr}")
    finally:
        # 即使发生错误，也尝试关闭流
        if stream.is_active():
            stream.stop_stream()
            os.remove('speech.wav')
            os.remove('speech1.wav')
            stream.close()
print("欢迎使用录音和语音转文本系统！")
print("按下 '1' 开始录音，按下 '2' 停止录音。")

while True:
    if keyboard.is_pressed('1'):
        print("准备开始录音...")
        start_recording()
        save_recording()
        
        print("正在处理录音文件，请稍候...")
        try:
            res = model.generate(
                input=f"./{OUTPUT_FILENAME}",
                cache={},
                language="auto",  # "zh", "en", "yue", "ja", "ko", "nospeech"
                use_itn=True,
                batch_size_s=60,
                merge_vad=True,
                merge_length_s=15,
            )
            text = rich_transcription_postprocess(res[0]["text"])
            print(f"语音转文本结果：\n{text}")
            
            # 将转录结果作为警报发送
            send_alert(text)
            
        except Exception as e:
            print(f"处理录音时发生错误：{e}")
        
    time.sleep(0.1)  # 减少 CPU 使用率
```
</details>

运行 Python：
```bash
cd ~/speech_vlm
sudo python3 vlm_voice.py
```
程序启动后，它会扫描所有音频输入和输出设备。您需要手动选择所需音频设备的索引 ID。程序即将开始工作，然后按下 `1` 进行录音，按下 `2` 发送。

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/reComputer/Application/Multimodal_ai/audio_vlm/select_mic.png" />
</div>

4. 查看结果

我们已经准备了一个 `view_rtsp.py` 脚本来查看输出结果。您需要将 `rtsp_url = "rtsp://0.0.0.0:5011/out"` 中的 IP 部分替换为您的 Jetson 设备的 IP 地址。

<details>
<summary>viwe_rtsp.py</summary>

```python
import cv2

rtsp_url = "rtsp://192.168.49.227:5011/out"  # 替换为您的设备 IP 地址

cap = cv2.VideoCapture(rtsp_url)

if not cap.isOpened():
    print("无法打开 RTSP 流")
    exit()

while True:
    ret, frame = cap.read()
    if not ret:
        print("无法获取帧")
        break

    height, width = frame.shape[:2]

    frame_resized = cv2.resize(frame, (int(width // 1.1), int(height // 1.1)))  # 调整帧大小

    cv2.imshow('RTSP 流', frame_resized)

    if cv2.waitKey(1) & 0xFF == ord('q'):  # 按 'q' 退出
        break

cap.release()
cv2.destroyAllWindows()
```
</details>

```bash
sudo pip3 install opencv-python
cd ~/speech_vlm
sudo python3 view_rtsp.py
```

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/reComputer/Application/Multimodal_ai/audio_vlm/view_result.png" />
</div>

### 演示

<div align="center">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/eYaA9WGXh4Y" title="在 Jetson 上运行带语音交互的 VLM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>