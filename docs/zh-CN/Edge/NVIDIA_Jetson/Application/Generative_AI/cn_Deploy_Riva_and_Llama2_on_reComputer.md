---
description: 在 reComputer 上部署 Riva 和 Llama2
title: 本地语音聊天机器人
keywords:
- reComputer
- LLM
- 聊天机器人
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Local_Voice_Chatbot
last_update:
  date: 05/15/2025
  author: Youjiang
---

# 本地语音聊天机器人：在 reComputer 上部署 Riva 和 Llama2

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 简介

随着人工智能技术的快速发展，语音交互已成为人机交互中越来越重要的一种方式。尤其是在智能家居、个人助手和客户服务支持等领域，对语音聊天机器人的需求显著增长。然而，大多数现有的语音聊天机器人依赖于云计算服务，这在一定程度上引发了数据隐私和网络延迟的担忧。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/Local_Voice_Chatbot/workflow.png" />
</div>

本项目旨在通过构建一个本地运行的语音聊天机器人来解决这些问题。利用 [Nvidia Riva](https://docs.nvidia.com/deeplearning/riva/user-guide/docs/quick-start-guide.html) 和 [Meta Llama2](https://huggingface.co/meta-llama)，我们开发了一个安全、私密且响应快速的语音交互系统。

## 前置条件

- 配备超过 16GB 内存的 Jetson 设备。
- 硬件设备需要预装 jetpack [5.1.1](https://wiki.seeedstudio.com/reComputer_Intro/) 操作系统。
- [扬声器和麦克风](https://www.seeedstudio.com/ReSpeaker-USB-Mic-Array-p-4247.html?queryID=dd9c8d91c63781d66776771a7ee5ec01&objectID=4247&indexName=bazaar_retailer_products)。

**注意：** 我使用 [Jetson AGX Orin 32GB H01 Kit](https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html?queryID=012e528073e90bf80afd3880f3fc2b13&objectID=5569&indexName=bazaar_retailer_products) 完成了所有实验，但您可以尝试在内存较小的设备上加载更小的模型。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/Local_Voice_Chatbot/jetson_agx_orin.jpg" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html?queryID=a07376a957f072a4f755e1832fa0e544&objectID=5569&indexName=bazaar_retailer_products"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong></a>
</div>

## 入门指南

### 硬件连接
- 将音频输入/输出设备连接到 reComputer。
- 启动 reComputer 并确保其正常联网。

### 安装 Riva 服务器
请参考 [此处](https://docs.nvidia.com/deeplearning/riva/user-guide/docs/quick-start-guide.html#embedded) 获取更详细的信息。

**步骤1.** 访问并登录 [NVIDIA NGC](https://catalog.ngc.nvidia.com/?filters=&orderBy=weightPopularDESC&query=)。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/Local_Voice_Chatbot/setup_riva_1.png" />
</div>

**步骤2.** 获取 NGC API 密钥。

`账户（右上角）` --> `设置` --> `获取 API 密钥` --> `生成 API 密钥` --> `确认`

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/Local_Voice_Chatbot/setup_riva_2.png" />
</div>

:::info
请记录生成的 API 密钥。
:::

**步骤3.** 在 reComputer 上配置 NGC

打开 reComputer 的终端（您可以通过快捷键 `Ctrl+Alt+T` 快速打开 reComputer 桌面上的终端，或者使用另一台计算机远程访问 reComputer 的终端），并逐一输入以下命令。

```sh
cd ~ && mkdir ngc_setup && cd ngc_setup
wget --content-disposition https://api.ngc.nvidia.com/v2/resources/nvidia/ngc-apps/ngc_cli/versions/3.36.0/files/ngccli_arm64.zip && unzip ngccli_arm64.zip 
chmod u+x ngc-cli/ngc
echo "export PATH=\"\$PATH:$(pwd)/ngc-cli\"" >> ~/.bash_profile && source ~/.bash_profile
ngc config set
```

在终端交互界面中输入相关信息。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/Local_Voice_Chatbot/setup_riva_3.png" />
</div>

**步骤4.** 在 reComputer 上安装并运行 Riva 服务器。

在 reComputer 的终端中输入以下命令。

```sh
cd ~ && mkdir riva_setup && cd riva_setup
ngc registry resource download-version nvidia/riva/riva_quickstart_arm64:2.13.1
cd riva_quickstart_v2.13.1
```

使用 `Vim` 修改配置文件。

```sh
vim config.sh

# 按下键盘上的 `A` 键进入编辑模式。
# 按以下说明编辑第 18 和 20 行。

# service_enabled_nlp=true --> service_enabled_nlp=false
# service_enabled_nmt=true --> service_enabled_nmt=false

# 按下键盘上的 `ESC` 键退出编辑模式，然后使用快捷键 `Shift+Z Z` 保存编辑内容并关闭编辑器。
```

编辑后的配置文件如下：

<details>

<summary> config.sh </summary>

```sh
# Copyright (c) 2022, NVIDIA CORPORATION.  All rights reserved.
#
# NVIDIA CORPORATION 和其许可方保留对此软件、相关文档及其任何修改的所有知识产权和专有权利。
# 未经 NVIDIA CORPORATION 明确许可协议，禁止任何使用、复制、披露或分发此软件及相关文档。

# 目标平台的 GPU 系列。支持的值：tegra, non-tegra
riva_target_gpu_family="non-tegra"

# 使用的 tegra 平台名称。支持的 tegra 平台：orin, xavier
riva_tegra_platform="orin"

# 启用或禁用 Riva 服务
# 对于 en-US 以外的任何语言：service_enabled_nlp 必须设置为 false
service_enabled_asr=true
service_enabled_nlp=false
service_enabled_tts=true
service_enabled_nmt=false

# 配置翻译服务
# 文本到文本翻译 (T2T):
# - service_enabled_nmt 必须设置为 true
# - 在 models_nmt 字段中取消注释所需的源语言和目标语言模型
# 语音到文本翻译 (S2T):
# - service_enabled_asr, service_enabled_nmt 必须设置为 true
# - 在 asr_language_code 字段中设置输入语音的语言代码
# - 在 models_nmt 字段中取消注释所需的源语言和目标语言模型
# 语音到语音翻译 (S2S):
# - service_enabled_asr, service_enabled_nmt, service_enabled_tts 必须设置为 true
# - 在 asr_language_code 字段中设置输入语音的语言代码
# - 在 models_nmt 字段中取消注释所需的源语言和目标语言模型
# - 在 tts_language_code 字段中设置输出语音的语言代码

# 启用 Riva 企业版
# 如果已注册企业版，请通过在此处设置配置启用 Riva 企业版。您必须明确承认已阅读并同意 EULA。
# RIVA_API_KEY=<ngc api key>
# RIVA_API_NGC_ORG=<ngc organization>
# RIVA_EULA=accept

# 用于获取特定语言 ASR 模型的语言代码
# 支持的语言代码：ar-AR, en-US, en-GB, de-DE, es-ES, es-US, fr-FR, hi-IN, it-IT, ja-JP, ru-RU, ko-KR, pt-BR, zh-CN, es-en-US, ja-en-JP
# 对于多种语言，请输入以空格分隔的语言代码。
asr_language_code=("en-US")

# ASR 声学模型架构
# 支持的值为：conformer, conformer_xl (仅限 en-US + amd64), citrinet_1024, citrinet_256 (仅限 en-US + arm64), jasper (仅限 en-US + amd64), quartznet (仅限 en-US + amd64)
asr_acoustic_model=("conformer")

# ASR 声学模型架构变体
# 对于架构支持的值为：
# conformer: unified(de-DE, ja-JP 和 zh-CN 仅限), ml_cs(es-en-US 仅限), unified_ml_cs(ja-en-JP 仅限)
# 对于默认模型，请保持字段为空
asr_acoustic_model_variant=("")

# 用于 ASR 的解码器类型
# 如果您希望使用贪婪解码器而不是 flashlight/os2s 解码器，请将以下 $use_asr_greedy_decoder 设置为 true
use_asr_greedy_decoder=false

# 用于获取特定语言 TTS 模型的语言代码
# 支持的语言代码：en-US, es-ES, it-IT, de-DE, zh-CN
# 对于多种语言，请输入以空格分隔的语言代码
tts_language_code=("en-US")

# 指定要使用的一个或多个 GPU
# 指定多个 GPU 目前是实验性功能，可能会导致未定义的行为。
gpus_to_use="device=0"

# 指定用于部署模型的加密密钥
MODEL_DEPLOY_KEY="tlt_encode"

# 用于存储模型工件的位置
#
# 如果指定了绝对路径，数据将写入该位置
# 否则，将使用 Docker 卷（默认）。
#
# riva_init.sh 将在指定的卷或路径中创建一个 `rmir` 和 `models` 目录。
#
# RMIR ($riva_model_loc/rmir)
# Riva 使用中间表示 (RMIR) 来表示已准备好部署但尚未完全优化的模型。预训练版本可以从 NGC 获取（通过在 `riva_init.sh` 中指定 NGC 模型），并将下载到 $riva_model_loc/rmir。
#
# 由 NeMo 或 TLT 生成并使用 riva-build 准备的自定义模型也可以手动复制到 $(riva_model_loc/rmir)。
#
# 模型 ($riva_model_loc/models)
# 在 riva_init 过程中，$riva_model_loc/rmir 中的 RMIR 文件将被检查并优化以进行部署。优化后的版本存储在 $riva_model_loc/models 中。riva 服务器仅使用这些优化版本。
riva_model_loc="riva-model-repo"

if [[ $riva_target_gpu_family == "tegra" ]]; then
    riva_model_loc="`pwd`/model_repository"
fi

# 默认情况下，NGC 将下载以下 $riva-rmir 目录中的 RMIR。
# 如果您希望跳过从 NGC 下载并使用现有的 RMIR，请将以下 $use_existing_rmirs 标志设置为 true。您还可以通过将自定义 RMIR 放置在 riva_rmir_loc 目录中并使用此快速启动脚本与以下标志一起部署它们。
use_existing_rmirs=false

# 用于 Riva 服务的端口
riva_speech_api_port="50051"

# NGC 组织
riva_ngc_org="nvidia"
riva_ngc_team="riva"
riva_ngc_image_version="2.13.1"
riva_ngc_model_version="2.13.0"

# 以下预构建模型将从 NGC 下载。如果模型已存在于 $riva-rmir 中，则可以注释掉模型以跳过从 NGC 下载。

########## ASR 模型 ##########

models_asr=()

for lang_code in ${asr_language_code[@]}; do
    modified_lang_code="${lang_code//-/_}"
    modified_lang_code=${modified_lang_code,,}

    decoder=""
    if [ "$use_asr_greedy_decoder" = true ]; then
      decoder="_gre"
    fi

    if [[ ${asr_acoustic_model_variant} != "" ]]; then
      if [[ ${asr_acoustic_model} == "conformer" && ${asr_acoustic_model_variant} != "unified" && ${asr_acoustic_model_variant} != "ml_cs" && ${asr_acoustic_model_variant} != "unified_ml_cs" ]]; then
        echo "Conformer 的有效变体为：unified, ml_cs 和 unified_ml_cs。"
        exit 1
      elif [[ ${asr_acoustic_model} != "conformer" ]]; then
        echo "无效的 ${asr_acoustic_model} 变体。"
        exit 1
      fi
      asr_acoustic_model_variant="_${asr_acoustic_model_variant}"
    fi

    if [[ ${asr_acoustic_model} == "conformer_xl" && ${lang_code} != "en-US" ]]; then
      echo "Conformer-XL 声学模型仅适用于语言代码 en-US。"
      exit 1
    fi

    if [[ ${asr_acoustic_model_variant} == "_unified" && ${lang_code} != "de-DE" && ${lang_code} != "ja-JP" && ${lang_code} != "zh-CN" ]]; then
      echo "统一 Conformer 声学模型仅适用于语言代码 de-DE, ja-JP 和 zh-CN。"
      exit 1
    fi

    if [[ ${asr_acoustic_model_variant} == "_ml_cs" && ${lang_code} != "es-en-US" ]]; then
      echo "多语言代码切换 Conformer 声学模型仅适用于语言代码 es-en-US。"
      exit 1
    fi

    if [[ ${asr_acoustic_model_variant} == "_unified_ml_cs" && ${lang_code} != "ja-en-JP" ]]; then
      echo "统一多语言代码切换 Conformer 声学模型仅适用于语言代码 ja-en-JP。"
      exit 1
    fi

    if [[ $riva_target_gpu_family  == "tegra" ]]; then

      if [[ ${asr_acoustic_model} == "jasper" || \
            ${asr_acoustic_model} == "quartznet" || \
            ${asr_acoustic_model} == "conformer_xl" ]]; then
          echo "Conformer-XL, Jasper 和 Quartznet 模型不适用于 arm64 架构"
          exit 1
      fi

      if [[ ${asr_acoustic_model} == "citrinet_256" && ${lang_code} != "en-US" ]]; then
        echo "对于 arm64 架构，citrinet_256 声学模型仅适用于语言代码 en-US。"
        exit 1
      fi

      models_asr+=(
      ### 使用 CPU 解码器的流式传输，最佳延迟配置
          "${riva_ngc_org}/${riva_ngc_team}/models_asr_${asr_acoustic_model}${asr_acoustic_model_variant}_${modified_lang_code}_str:${riva_ngc_model_version}-${riva_target_gpu_family}-${riva_tegra_platform}"

      ### 使用 CPU 解码器的离线模式
      #    "${riva_ngc_org}/${riva_ngc_team}/rmir_asr_${asr_acoustic_model}${asr_acoustic_model_variant}_${modified_lang_code}_ofl${decoder}:${riva_ngc_model_version}"
      )
    else

      if [[ ${asr_acoustic_model} != "conformer" && \
            ${asr_acoustic_model} != "conformer_xl" && \
            ${asr_acoustic_model} != "citrinet_1024" && \
            ${asr_acoustic_model} != "jasper" && \
            ${asr_acoustic_model} != "quartznet" ]]; then
        echo "对于 amd64 架构，有效的声学模型为 conformer, conformer_xl, citrinet_1024, jasper 和 quartznet。"
        exit 1
      fi

      if [[ (${asr_acoustic_model} == "jasper" || \
            ${asr_acoustic_model} == "quartznet") && \
            ${lang_code} != "en-US" ]]; then
        echo "jasper 和 quartznet 声学模型仅适用于语言代码 en-US。"
        exit 1
      fi

      models_asr+=(
      ### 使用 CPU 解码器的流式传输，最佳延迟配置
          "${riva_ngc_org}/${riva_ngc_team}/rmir_asr_${asr_acoustic_model}${asr_acoustic_model_variant}_${modified_lang_code}_str${decoder}:${riva_ngc_model_version}"

      ### 使用 CPU 解码器的流式传输，最佳吞吐量配置
      #    "${riva_ngc_org}/${riva_ngc_team}/rmir_asr_${asr_acoustic_model}${asr_acoustic_model_variant}_${modified_lang_code}_str_thr${decoder}:${riva_ngc_model_version}"

      ### 使用 CPU 解码器的离线模式
          "${riva_ngc_org}/${riva_ngc_team}/rmir_asr_${asr_acoustic_model}${asr_acoustic_model_variant}_${modified_lang_code}_ofl${decoder}:${riva_ngc_model_version}"
      )
    fi

    ### 标点模型
    if [[ ${asr_acoustic_model_variant} != "_unified" && ${asr_acoustic_model_variant} != "_unified_ml_cs" ]]; then
      pnc_lang=$(echo $modified_lang_code | cut -d "_" -f 1)
      pnc_region=${modified_lang_code##*_}
      modified_lang_code=${pnc_lang}_${pnc_region}
      if [[ $riva_target_gpu_family == "tegra" ]]; then
        models_asr+=(
            "${riva_ngc_org}/${riva_ngc_team}/models_nlp_punctuation_bert_base_${modified_lang_code}:${riva_ngc_model_version}-${riva_target_gpu_family}-${riva_tegra_platform}"
        )
      else
        models_asr+=(
            "${riva_ngc_org}/${riva_ngc_team}/rmir_nlp_punctuation_bert_base_${modified_lang_code}:${riva_ngc_model_version}"
        )
      fi
    fi
done

### 说话人分离模型
models_asr+=(
#    "${riva_ngc_org}/${riva_ngc_team}/rmir_diarizer_offline:${riva_ngc_model_version}"
)

########## NLP 模型 ##########

if [[ $riva_target_gpu_family == "tegra" ]]; then
  models_nlp=(
  ### Bert 基础标点模型
      "${riva_ngc_org}/${riva_ngc_team}/models_nlp_punctuation_bert_base_en_us:${riva_ngc_model_version}-${riva_target_gpu_family}-${riva_tegra_platform}"

  ### 用于天气、小对话/个性、兴趣点/地图数据集的 misty 领域微调的 BERT 基础意图槽模型。
  #    "${riva_ngc_org}/${riva_ngc_team}/models_nlp_intent_slot_misty_bert_base:${riva_ngc_model_version}-${riva_target_gpu_family}-${riva_tegra_platform}"

  ### 用于天气、小对话/个性、兴趣点/地图数据集的 misty 领域微调的 DistilBERT 意图槽模型。
  #    "${riva_ngc_org}/${riva_ngc_team}/models_nlp_intent_slot_misty_distilbert:${riva_ngc_model_version}-${riva_target_gpu_family}-${riva_tegra_platform}"
  )
else
  models_nlp=(
  ### Bert 基础标点模型
      "${riva_ngc_org}/${riva_ngc_team}/rmir_nlp_punctuation_bert_base_en_us:${riva_ngc_model_version}"

  ### 在 GMB 数据集上微调的 BERT 基础命名实体识别模型，具有 LOC、PER、ORG 等类标签。
  #    "${riva_ngc_org}/${riva_ngc_team}/rmir_nlp_named_entity_recognition_bert_base:${riva_ngc_model_version}"

  ### 在天气数据集上微调的 BERT 基础意图槽模型。
  #    "${riva_ngc_org}/${riva_ngc_team}/rmir_nlp_intent_slot_bert_base:${riva_ngc_model_version}"

  ### 在 Squad v2 上微调的 BERT 基础问答模型。
  #    "${riva_ngc_org}/${riva_ngc_team}/rmir_nlp_question_answering_bert_base:${riva_ngc_model_version}"

  ### 在 Squad v2 上微调的 Megatron345M 问答模型。
  #    "${riva_ngc_org}/${riva_ngc_team}/rmir_nlp_question_answering_megatron:${riva_ngc_model_version}"

  ### 在 4 类（天气、气象、个性、无匹配）领域模型上微调的 Bert 基础文本分类模型。
  #    "${riva_ngc_org}/${riva_ngc_team}/rmir_nlp_text_classification_bert_base:${riva_ngc_model_version}"
  )
fi

########## TTS 模型 ##########

models_tts=()

for lang_code in ${tts_language_code[@]}; do
  modified_lang_code="${lang_code//-/_}"
  modified_lang_code=${modified_lang_code,,}

  if [[ $riva_target_gpu_family == "tegra" ]]; then
    if [[ ${lang_code} == "en-US" ]]; then
      models_tts+=(
      ### 这些模型已使用能量条件进行训练，并使用国际音标 (IPA) 进行推理和训练。
          "${riva_ngc_org}/${riva_ngc_team}/models_tts_fastpitch_hifigan_en_us_ipa:${riva_ngc_model_version}-${riva_target_gpu_family}-${riva_tegra_platform}"
      #    "${riva_ngc_org}/${riva_ngc_team}/models_tts_radtts_hifigan_en_us_ipa:${riva_ngc_model_version}-${riva_target_gpu_family}-${riva_tegra_platform}"

      ### 此模型使用 ARPABET 进行推理和训练。
      #    "${riva_ngc_org}/${riva_ngc_team}/models_tts_fastpitch_hifigan_en_us:${riva_ngc_model_version}-${riva_target_gpu_family}-${riva_tegra_platform}"
      )
    elif [[ ${lang_code} == "zh-CN" ]]; then
      models_tts+=(
      ### 此模型是多说话人模型，具有情感，并使用国际音标 (IPA) 进行推理和训练。
          "${riva_ngc_org}/${riva_ngc_team}/models_tts_fastpitch_hifigan_zh_cn_ipa:${riva_ngc_model_version}-${riva_target_gpu_family}-${riva_tegra_platform}"
      )
    else
      ### 这些模型是单说话人模型，并使用国际音标 (IPA) 进行推理和训练。
      if [[ ${lang_code} != "de-DE" ]]; then
        models_tts+=(
            "${riva_ngc_org}/${riva_ngc_team}/models_tts_fastpitch_hifigan_${modified_lang_code}_f_ipa:${riva_ngc_model_version}-${riva_target_gpu_family}-${riva_tegra_platform}"
        )
      fi
      models_tts+=(
          "${riva_ngc_org}/${riva_ngc_team}/models_tts_fastpitch_hifigan_${modified_lang_code}_m_ipa:${riva_ngc_model_version}-${riva_target_gpu_family}-${riva_tegra_platform}"
      )
    fi
  else
    if [[ ${lang_code} == "en-US" ]]; then
      models_tts+=(
      ### 这些模型已使用能量条件进行训练，并使用国际音标 (IPA) 进行推理和训练。
          "${riva_ngc_org}/${riva_ngc_team}/rmir_tts_fastpitch_hifigan_en_us_ipa:${riva_ngc_model_version}"
      #    "${riva_ngc_org}/${riva_ngc_team}/rmir_tts_radtts_hifigan_en_us_ipa:${riva_ngc_model_version}"

      ### 此模型使用 ARPABET 进行推理和训练。
      #    "${riva_ngc_org}/${riva_ngc_team}/rmir_tts_fastpitch_hifigan_en_us:${riva_ngc_model_version}"
      )
    elif [[ ${lang_code} == "zh-CN" ]]; then
      models_tts+=(
      ### 此模型是多说话人模型，具有情感，并使用国际音标 (IPA) 进行推理和训练。
          "${riva_ngc_org}/${riva_ngc_team}/rmir_tts_fastpitch_hifigan_zh_cn_ipa:${riva_ngc_model_version}"
      )
    else
      ### 这些模型是单说话人模型，并使用国际音标 (IPA) 进行推理和训练。
      if [[ ${lang_code} != "de-DE" ]]; then
        models_tts+=(
            "${riva_ngc_org}/${riva_ngc_team}/rmir_tts_fastpitch_hifigan_${modified_lang_code}_f_ipa:${riva_ngc_model_version}"
        )
      fi
      models_tts+=(
          "${riva_ngc_org}/${riva_ngc_team}/rmir_tts_fastpitch_hifigan_${modified_lang_code}_m_ipa:${riva_ngc_model_version}"
      )
    fi
  fi
done

######### NMT 模型 ###############

# 模型遵循源语言 _ 一个或多个目标语言模型架构
# 源语言或目标语言 "any" 表示模型支持文档中提到的 32 种语言。
# 例如，rmir_nmt_de_en_24x6 是一个德语到英语的 24x6 双语模型
# 和 rmir_megatronnmt_en_any_500m 是一个英语到 32 种语言的 megatron 模型

models_nmt=(
  ###### 双语模型
  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_en_de_24x6:${riva_ngc_model_version}"
  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_en_es_24x6:${riva_ngc_model_version}"
  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_en_zh_24x6:${riva_ngc_model_version}"
  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_en_ru_24x6:${riva_ngc_model_version}"
  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_en_fr_24x6:${riva_ngc_model_version}"
  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_de_en_24x6:${riva_ngc_model_version}"
  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_es_en_24x6:${riva_ngc_model_version}"
  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_ru_en_24x6:${riva_ngc_model_version}"
  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_zh_en_24x6:${riva_ngc_model_version}"
  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_fr_en_24x6:${riva_ngc_model_version}"

  ###### 多语言模型
  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_en_deesfr_24x6:${riva_ngc_model_version}"
  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_en_deesfr_12x2:${riva_ngc_model_version}"
  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_deesfr_en_24x6:${riva_ngc_model_version}"
  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_deesfr_en_12x2:${riva_ngc_model_version}"

  ###### Megatron 模型
  #"${riva_ngc_org}/${riva_ngc_team}/rmir_megatronnmt_any_en_500m:${riva_ngc_model_version}"
  #"${riva_ngc_org}/${riva_ngc_team}/rmir_megatronnmt_en_any_500m:${riva_ngc_model_version}"
)

NGC_TARGET=${riva_ngc_org}
if [[ ! -z ${riva_ngc_team} ]]; then
  NGC_TARGET="${NGC_TARGET}/${riva_ngc_team}"
else
  team="\"\""
fi

# 指定用于 TLS/SSL 凭据的 SSL 密钥和证书文件路径以实现安全连接。
# 如果任一为空，将使用不安全的连接。
# 在容器中存储于 /ssl/servert.crt 和 /ssl/server.key
# 可选，还可以指定根证书，存储在容器中的 /ssl/root_server.crt
ssl_server_cert=""
ssl_server_key=""
ssl_root_cert=""

# 定义运行 Riva 所需的 Docker 镜像
image_speech_api="nvcr.io/${NGC_TARGET}/riva-speech:${riva_ngc_image_version}"

# 定义设置 Riva 所需的 Docker 镜像
image_init_speech="nvcr.io/${NGC_TARGET}/riva-speech:${riva_ngc_image_version}-servicemaker"

# 守护进程名称
riva_daemon_speech="riva-speech"
if [[ $riva_target_gpu_family != "tegra" ]]; then
    riva_daemon_client="riva-client"
fi
```

</details>

使用类似的方法修改 `/etc/docker/daemon.json`。

```sh
sudo vim /etc/docker/daemon.json
# 添加以下行 >> "default-runtime": "nvidia"

# 按下键盘上的 `ESC` 退出编辑模式，然后使用快捷键 `Shift+Z Z` 保存编辑内容并关闭编辑器。

sudo systemctl restart docker
```

编辑后的配置文件如下所示：

<details>

<summary> /etc/docker/daemon.json </summary>

```json
{   
    "default-runtime": "nvidia",
        "runtimes": {
        "nvidia": {
            "path": "nvidia-container-runtime",
            "runtimeArgs": []
        }
    }
}
```

</details>

使用以下命令初始化并启动 Riva：

```sh
sudo bash riva_init.sh
sudo bash riva_start.sh
```

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/Local_Voice_Chatbot/setup_riva_4.png" />
</div>

:::info
请注意，您需要保持此终端处于活动状态。
:::

### 安装并运行 LLM

为了简化安装过程，我们可以参考 Dusty 的 [jetson-containers](https://github.com/dusty-nv/jetson-containers/tree/master/packages/llm/text-generation-inference) 项目来安装 [text generation inference](https://github.com/huggingface/text-generation-inference)，并使用 text generation inference 加载 [Llama2 7B](https://huggingface.co/meta-llama/Llama-2-7b-chat-hf) 大语言模型。打开一个新的终端并运行以下命令。

```sh
cd ~
git clone https://github.com/dusty-nv/jetson-containers.git
cd jetson-containers
pip install -r requirements.txt
./run.sh $(./autotag text-generation-inference)
export HUGGING_FACE_HUB_TOKEN=<your hugging face token>
text-generation-launcher --model-id meta-llama/Llama-2-7b-chat-hf --port 8899
```

:::info
您可以在 [这里](https://huggingface.co/docs/hub/security-tokens) 获取 hugging face token。
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/Local_Voice_Chatbot/install_run_llm.png" />
</div>

:::info
请注意，您需要保持此终端处于活动状态。
:::

### 克隆本地聊天机器人示例并尝试运行

现在，您应该至少打开了两个终端，一个运行 Riva 服务器，另一个运行 text generation inference 服务器。接下来，我们需要打开一个新的终端来运行我们的示例。

```sh
cd ~
git clone https://github.com/yuyoujiang/Deploy-Riva-LLama-on-Jetson.git
cd Deploy-Riva-LLama-on-Jetson

# 查询音频输入/输出设备。
python3 local_chatbot.py --list-input-devices
python3 local_chatbot.py --list-output-devices

python3 local_chatbot.py --input-device <your device id> --output-device <your device id>
# 例如: python3 local_chatbot.py --input-device 25 --output-device 30
```

## 效果演示

<div align="center">
<iframe  width={560} height={315} src="https://www.youtube.com/embed/Nc3D-qITDoU?si=aWI7Z5IEprRKfuKE" title="YouTube 视频播放器" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
</div>

## 参考资料
- [build-an-ai-chatbot-using-riva-and-openai](https://www.hackster.io/wxxniubi8/build-an-ai-chatbot-using-riva-and-openai-13dc41)
- [https://github.com/dusty-nv/jetson-containers](
https://github.com/dusty-nv/jetson-containers/tree/cb6c847f88df221e705397a1ee98424c2e893243/packages/llm/text-generation-inference)
- https://github.com/huggingface/text-generation-inference
- https://huggingface.co/meta-llama


## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>