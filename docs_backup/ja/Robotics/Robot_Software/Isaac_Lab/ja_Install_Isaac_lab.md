---
description: このウィキは、Isaac Lab をインストールするためのステップバイステップガイドを提供します。
title: Isaac Lab のインストール
keywords:
- NVIDIA
- Isaac Lab
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/install_isaaclab
last_update:
  date: 5/28/2025
  author: ZhuYaoHui
---

# Isaac Lab のインストール

:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

このウィキは、Isaac Lab をインストールするためのステップバイステップガイドを提供します。Isaac Lab には Isaac Sim が必要です。このチュートリアルでは、まず pip を使用して Isaac Sim をインストールし、その後ソースコードから Isaac Lab をインストールします。

:::tip
- このチュートリアルは Ubuntu 20.04 および 22.04 システムにのみ適用され、現在 Windows はサポートされていません。お使いのコンピュータに NVIDIA グラフィックスドライバと CUDA 12+ が GPU に基づいてインストールされていることを確認してください。

- ハードウェアが要件を満たしているかどうかを確認するには、公式の Isaac Sim リンクを確認してください。

- Miniconda の使用を推奨しており、事前にインストールされている必要があります。
:::

## Miniconda を使用した仮想環境の作成  
まず仮想環境を作成することをお勧めします。仮想環境内の Python バージョンが Python 3.10 であることを確認してください。  

```bash
conda create -n env_isaaclab python=3.10  
conda activate env_isaaclab  
```  

## PyTorch と torchvision のインストール  
次に、CUDA バージョンに応じて PyTorch と Torchvision をインストールします。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>


<TabItem value="CUDA 11+" label="CUDA 11+">

```bash
pip install torch==2.5.1 torchvision==0.20.1 --index-url https://download.pytorch.org/whl/cu118
```


</TabItem>

<TabItem value="CUDA 12+" label="CUDA 12+">

```bash
pip install torch==2.5.1 torchvision==0.20.1 --index-url https://download.pytorch.org/whl/cu121
```


</TabItem>

</Tabs>

## Isaac Sim のインストール  
```bash
pip install --upgrade pip  
pip install 'isaacsim[all,extscache]==4.5.0' --extra-index-url https://pypi.nvidia.com  
```  

## Isaac Sim のインストール確認  
```bash
isaacsim  
```  

:::note
Isaac Sim を初めて実行する際、必要なすべての拡張機能がレジストリから取得されます。このプロセスには **10 分以上** かかる場合があり、各エクスペリエンスファイルの初回実行時に必要です。一度拡張機能がダウンロードされると、同じエクスペリエンスファイルを使用する後続の実行ではキャッシュされた拡張機能が使用されます。  
:::

### Isaac Lab のインストール  

**Isaac Lab リポジトリをクローン**  
```bash
git clone https://github.com/isaac-sim/IsaacLab.git  
```  

**Isaac Lab の依存関係をインストール**  
```bash
sudo apt install cmake build-essential  
```  

**Isaac Lab の強化学習ライブラリをインストール**  
```bash
./isaaclab.sh --install  # または "./isaaclab.sh -i"  
```  
特定の RL ライブラリを個別にインストールすることもできます:  
```bash
./isaaclab.sh --install rl_games  # または "rsl_rl, sb3, skrl, robomimic"  
```  

**Isaac Lab のインストール確認**  
クローンした Isaac Lab ディレクトリに移動します。  

**オプション 1: シェルスクリプトを使用して起動**  
```bash
./isaaclab.sh -p scripts/tutorials/00_sim/create_empty.py  
```  

**オプション 2: Python を使用して起動**  
```bash
python scripts/tutorials/00_sim/create_empty.py  
```  

:::note
上記のコマンドを実行すると、シミュレータが起動し、以下のような黒いビューポートを持つウィンドウが表示されるはずです。スクリプトを終了するには、ターミナルで **Ctrl+C** を押してください。Windows では、**Ctrl+Break** または **Ctrl+fn+B** をコマンドプロンプトで使用してプロセスを終了します。
:::

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/isaac_lab/1.png" />
</div>

### シンプルなロボットのトレーニング  

提供されているサンプルスクリプトを使用して、複数のスパイダーをトレーニングできます:  
```bash
./isaaclab.sh -p scripts/reinforcement_learning/rsl_rl/train.py --task=Isaac-Ant-v0 --headless
```  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/isaac_lab/3.jpg" />
</div>


または、1 匹の犬をトレーニングすることもできます:  
```bash
./isaaclab.sh -p scripts/reinforcement_learning/rsl_rl/train.py --task=Isaac-Velocity-Rough-Anymal-C-v0 --headless
```  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/isaac_lab/2.jpg" />
</div>

### Isaac Gym のインストール（オプション）  
前述のインストール手順で十分ですが、強化学習部分のみを Isaac Gym で体験したい場合は、Isaac Gym を個別にインストールできます。  

**[Isaac Gym コード](https://developer.nvidia.com/isaac-gym/download) をダウンロードして解凍**  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/isaac_lab/4.png" />
</div>

ホームディレクトリに解凍し、Conda 環境を作成して依存関係をインストールします:  
```bash
conda create --name isaac python=3.8  
conda activate isaac  
conda install pytorch torchvision torchaudio pytorch-cuda=12.4 -c pytorch -c nvidia  
conda install numpy=1.23  
```  

**Isaac Gym のインストール**  
```bash
cd <path_to_isaacgym>/IsaacGym_Preview_4_Package/isaacgym/python  
pip install -e .  
```  

**Isaac Gym のインストール確認**  
```bash
cd <path_to_isaacgym>/IsaacGym_Preview_4_Package/isaacgym/python/examples  
python 1080_balls_of_solitude.py  
```  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/isaac_lab/5.png" />
</div>


:::warning
**発生する可能性のあるエラーと解決方法**  
Python スクリプトを実行すると、以下のエラーが発生する場合があります:  
```plaintext
ImportError: libpython3.8.so.1.0: cannot open shared object file: No such file or directory  
```  
以下のコマンドで修正できます（パスを自分のものに置き換えてください）:  
```bash
export LD_LIBRARY_PATH=${LD_LIBRARY_PATH}:/home/{Your Username}/anaconda3/envs/pi/lib  
```  
:::