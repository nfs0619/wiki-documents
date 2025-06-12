---
description: この Wiki は Myactuator シリーズモーターのチュートリアルを提供します。
title: MyActuator シリーズモーターの入門
keywords:
- アクチュエータ
- モーター
- アーム
- ロボティクス
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/myactuator_series
last_update:
  date: 05/29/2025
  author: ZhuYaoHui
---

# MyActuator X シリーズモーターの入門

:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

この記事では、MyActuator シリーズモーターの使い方と、Python および ROS を使用して reComputer Mini Jetson Orin で操作する方法を紹介します。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/all.png" />
</div>


## 仕様

以下は、すべてのモーターモデルのパラメータを記載した完全な表です：

<table>
  <thead>
    <tr>
      <th>パラメータ</th>
      <th>X2-7</th>
      <th>X4-10</th>
      <th>X4-36</th>
      <th>X8-120</th>
      <th>X12-320</th>
      <th>X15-450</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>ギア比</td><td>28.17</td><td>12.6</td><td>36</td><td>19.61</td><td>20</td><td>20.25</td></tr>
    <tr><td>入力電圧 (V)</td><td>24</td><td>24</td><td>24</td><td>48</td><td>48</td><td>72</td></tr>
    <tr><td>無負荷速度 (RPM)</td><td>178</td><td>317</td><td>111</td><td>158</td><td>125</td><td>108</td></tr>
    <tr><td>無負荷入力電流 (A)</td><td>1</td><td>1</td><td>0.9</td><td>1.6</td><td>2.7</td><td>3.5</td></tr>
    <tr><td>定格速度 (RPM)</td><td>142</td><td>238</td><td>83</td><td>127</td><td>100</td><td>98</td></tr>
    <tr><td>定格トルク (N.m)</td><td>2.5</td><td>4</td><td>10.5</td><td>43</td><td>85</td><td>145</td></tr>
    <tr><td>定格出力 (W)</td><td>37</td><td>100</td><td>100</td><td>574</td><td>900</td><td>1480</td></tr>
    <tr><td>定格相電流 A(rms)</td><td>3</td><td>7.8</td><td>6.1</td><td>17.6</td><td>30</td><td>25</td></tr>
    <tr><td>ピークトルク (N.m)</td><td>7</td><td>10</td><td>34</td><td>120</td><td>320</td><td>450</td></tr>
    <tr><td>ピーク相電流 A(rms)</td><td>8.1</td><td>19.5</td><td>21.5</td><td>43.8</td><td>100</td><td>69.2</td></tr>
    <tr><td>効率 (%)</td><td>63</td><td>69.5</td><td>63.1</td><td>79</td><td>75</td><td>82.4</td></tr>
    <tr><td>モーターバックEMF定数 (Vdc/Krpm)</td><td>4.3</td><td>6</td><td>6</td><td>19.2</td><td>17.9</td><td>29.9</td></tr>
    <tr><td>モジュールトルク定数 (N.m/A)</td><td>0.8</td><td>0.8</td><td>1.9</td><td>2.4</td><td>3.3</td><td>5.8</td></tr>
    <tr><td>モーター相抵抗 (Ω)</td><td>0.61</td><td>0.32</td><td>0.35</td><td>0.18</td><td>0.12</td><td>0.08</td></tr>
    <tr><td>モーター相インダクタンス (mH)</td><td>0.13</td><td>0.14</td><td>0.17</td><td>0.31</td><td>0.05</td><td>0.14</td></tr>
    <tr><td>ポールペア</td><td>13</td><td>13</td><td>13</td><td>10</td><td>20</td><td>20</td></tr>
    <tr><td>3相接続</td><td colspan="6">Y</td></tr>
    <tr><td>バックドライブトルク (N.m)</td><td>0.4</td><td>0.8</td><td>1.14</td><td>3.21</td><td>3.8</td><td>4</td></tr>
    <tr><td>バックラッシュ (Arcmin)</td><td>12</td><td>10</td><td>10</td><td>10</td><td>10</td><td>10</td></tr>
    <tr><td>出力ベアリングタイプ</td><td colspan="2">深溝玉軸受</td><td colspan="4">交差ローラーベアリング</td></tr>
    <tr><td>軸方向耐荷重 (KN)</td><td>0.25</td><td>1.2</td><td>1.3</td><td>4</td><td>4.5</td><td>5.4</td></tr>
    <tr><td>軸方向応力 (KN)</td><td>0.25</td><td>1.2</td><td>1.3</td><td>1</td><td>4.5</td><td>5.4</td></tr>
    <tr><td>ラジアル荷重 (KN)</td><td>1</td><td>1.2</td><td>1.5</td><td>4.5</td><td>5</td><td>6</td></tr>
    <tr><td>慣性 (Kg.cm²)</td><td>0.17</td><td>0.25</td><td>0.3</td><td>1.5</td><td>12.9</td><td>31.6</td></tr>
    <tr><td>エンコーダタイプ & インターフェース</td><td colspan="6">デュアルエンコーダ ABS-17BIT (入力) / 17-18BIT (出力)</td></tr>
    <tr><td>制御精度 (度)</td><td colspan="6">&lt;0.01</td></tr>
    <tr><td>通信</td><td colspan="6">CAN BUS / EtherCAT</td></tr>
    <tr><td>重量 (Kg)</td><td>0.26</td><td>0.33</td><td>0.36</td><td>1.40</td><td>2.37</td><td>3.50</td></tr>
    <tr><td>絶縁等級</td><td colspan="6">F</td></tr>
  </tbody>
</table>

## RMD-X V4シリーズの命名規則
- **RMD**: ブランド名 R-Reducer（減速機） M-Motor（モーター） D-Drive（ドライブ）
- **X2**: Xはシリーズ名を表し、統合型遊星アクチュエータを意味します。2はモーターモデル番号を表します（例：X2、X4、X6、X8など）。
- **P28**: 遊星ギア比を表します（例：P12、P28、P32など）。
- **7**: ピークトルク7N.m
- **E**: 通信方式 E: CAN BUS & EtherCAT

## 主な特徴

1. **CAN BUS & EtherCAT**
2. **交差ローラーベアリング**
3. **デュアルエンコーダ**
4. **高トルク密度**
5. **高精度**
6. **中空設計**

## 使用開始
### 使用前の環境準備
**PCのWindowsシステム**
- [対応する製品マニュアルをダウンロード](https://www.myactuator.com/_files/archives/cab28a_b3f2a1c77d4645a08052a923690b40fc.zip?dn=MYACTUATOR_Setup%20Software_V4.0_20250206.zip)してください。
- [MYACTUATOR_Setup Software_V4.0.zip](https://www.myactuator.com/_files/archives/cab28a_b3f2a1c77d4645a08052a923690b40fc.zip?dn=MYACTUATOR_Setup%20Software_V4.0_20250206.zip)をダウンロードしてください。

- `MYACTUATOR_Setup Software_V4.0.zip`を解凍し、以下をインストールしてください：
    - `Required Runtime Environment\ZLGUSBCAN_Driver`ディレクトリ内の`USBCAN_AllInOne_x86_x64_2.0.0.1.exe`
    - `Required Microsoft Runtime Libraries`ディレクトリ内の`MSVBCRT.AIO.2019.10.19.X86 X64.exe`

### 回路の接続
ここではX4-36モーターを選択し、そのインターフェース図を以下に示します。

<div align="center">
    <img width={500} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/X4-36-circuit.png" />
</div>

<table>
  <tr>
    <th>ポート定義</th>
    <th>ポート説明</th>
  </tr>
  <tr>
    <td>① VCC</td>
    <td>電源正極</td>
  </tr>
  <tr>
    <td>② GND</td>
    <td>電源負極</td>
  </tr>
  <tr>
    <td>③ CAN_H</td>
    <td>CAN_Hネットワーク信号端子</td>
  </tr>
  <tr>
    <td>④ CAN_L</td>
    <td>CAN_Lネットワーク信号端子</td>
  </tr>
  <tr>
    <td>⑤ EtherCAT_IN</td>
    <td>EtherCAT入力端子</td>
  </tr>
  <tr>
    <td>⑥ EtherCAT_OUT</td>
    <td>EtherCAT出力端子</td>
  </tr>
  <tr>
    <td>⑦ T+</td>
    <td>マスターがモジュールに制御コマンドを送信</td>
  </tr>
  <tr>
    <td>⑧ T-</td>
    <td>モジュールがマスターにステータスフィードバックを送信</td>
  </tr>
  <tr>
    <td>⑨ R+</td>
    <td>マスターがモジュールのステータスデータを反映</td>
  </tr>
  <tr>
    <td>⑩ R-</td>
    <td>モジュールがマスターの制御コマンドを反映</td>
  </tr>
</table>

ここではCAN通信方式を使用します。この場合、Windows上の上位コンピュータでデバッグするために追加のUSB-CANインターフェースが必要です。

<div align="center">
    <img width={500} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/6.jpg" />
</div>

ここで、モーター用に別途24V電源を提供し、USBをコンピュータに接続する必要があります。

### `MYACTUATOR Setup Software 250206.exe`を使用してモーターをテストする

| **ID設定と接続** | **モーター情報の読み取り** | **モーターのキャリブレーション** | **モーターのキャリブレーション** | **モーター回転テストの実行** |
|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/1.png) | ![fig2](https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/2.png) | ![fig3](https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/3.png) | ![fig4](https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/4.png) |![fig5](https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/5.png) |
| デフォルトのモーターIDは1です。IDを1として入力し、「Connect」をクリックします。 | 接続後、「Read」をクリックしてモーターの現在の情報を取得します。| 初回使用時は「Calibrate Motor」をクリックしてキャリブレーションを実行します。| キャリブレーション後、「Read」と「Save」をクリックします。 | モーターの動作セクションで異なるモーター制御モードをテストできます。 |

詳細な機能については、[MYACTUATOR_Setup Software_V4.0.zip](https://www.myactuator.com/_files/archives/cab28a_b3f2a1c77d4645a08052a923690b40fc.zip?dn=MYACTUATOR_Setup%20Software_V4.0_20250206.zip)ファイルに含まれる​**Setup Software Instruction Manual - V3.0.pdf**を参照してください。

## モーターを [​reComputer Mini Jetson Orin](/docs/Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Mini/reComputer_Mini_Getting_Started.md) を使用して制御する

現在、市場で最も一般的なモーター用のCAN通信インターフェースは、**XT30 (2+2)** および **JSTコネクタ**を使用しています。私たちの **reComputer Mini Jetson Orin** デバイスは、**デュアルXT30 (2+2)ポート**と**JSTベースのCANインターフェース**を備えており、シームレスな互換性を提供します。

<div align="center">
    <img width={500} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg" />
</div>

CANの使用に関する詳細は、この[wiki](https://wiki.seeedstudio.com/recomputer_jetson_mini_hardware_interfaces_usage/#can)を参照してください。

### CANインターフェースを有効化する

**ステップ1:** CAN0およびCAN1を使用する前に、底面カバーを取り外し、両方の120Ω終端抵抗をONの位置に設定してください。

<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/7.png" />
</div>

**ステップ2:** モーターをXT30 (2+2)インターフェースを介して直接reComputer MiniのCAN0に接続します。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/8.jpg" />
</div>

:::danger
この電源供給は単一モーターの学習およびテスト専用です。複数のモーターを使用する場合は、別途電源ボードを設計し、Jetsonの電源供給をモーターの電源供給から分離して、高電流が直接Jetsonを通過するのを防いでください。
:::

#### Jetson CAN通信を有効化する
ターミナルを開き、以下のコマンドを入力してGPIOピンをハイに設定し、CAN0を有効化します：
```bash
gpioset --mode=wait 0 43=0
```

JSTインターフェースCAN1を使用する場合は、ピン106をハイに設定します。
```bash
gpioset --mode=wait 0 106=0
```

このターミナルを開いたままにして、新しいターミナルを起動し、CAN0を設定します。
```bash
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

### PythonおよびC++環境を構築する

**ステップ1:** SDKをGitクローンします。
```bash
git clone https://github.com/ZhuYaoHui1998/myactuator_rmd.git
```

**ステップ2:** このドライバSDKには以下の依存関係が必要です。Debian Linuxでは、以下のコマンドでaptを使用してインストールできます：
```bash
sudo apt-get install -y build-essential cmake
sudo apt install linux-modules-extra-5.15.0-1025-nvidia-tegra # Jetson Jetpack 6.0用
```

Pythonバインディングを使用する場合は、追加でPython 3、pip、およびpybind11をインストールする必要があります：
```bash
sudo apt-get install -y python3 python3-pip python3-pybind11 python3-setuptools
```

依存関係をインストールした後、以下の手順に従ってC++ライブラリまたはPythonパッケージとしてドライバSDKをインストールします。どちらの場合もCMakeを使用してC++コードをコンパイルします。

#### C++ライブラリのビルド

C++ドライバSDKをビルドするには、このフォルダ内で新しいターミナルを開き、以下のコマンドを実行します。古いLinuxバージョンでは、エラーメッセージ `error: 'const struct can_frame' has no member named 'len'` が表示される場合があり、その場合は[issue 5](https://github.com/2b-t/myactuator_rmd/issues/5)で議論されているコード修正を適用する必要があります。

```bash
cd ~/myactuator_rmd
mkdir build
cd build
cmake .. -D PYTHON_BINDINGS=on
make -j $(nproc)
sudo make install
```

フラグ `PYTHON_BINDINGS`（デフォルトはoff）は、C++ライブラリに加えてPythonバインディングをビルドします。C++ライブラリのみを使用する場合は、このフラグをオフのままにしても問題ありません。この方法でPythonバインディングをビルドすると、共有ライブラリとしてコンパイルされますが、インストールはされません。そのため、ライブラリを手動でインストールするか、ビルドフォルダ内でローカルにインポートする必要があります。

パッケージをアンインストールする場合は、以下のコマンドを使用します：
```bash
xargs rm < install_manifest.txt
```

#### Pythonライブラリのビルド

このSDKのPythonバインディングをビルドしてインストールするには、メインフォルダ内で新しいターミナルを開き、以下のコマンドを実行します：
```bash
cd ~/myactuator_rmd
pip3 install .
```

これにより、`setup.py` がCMakeを呼び出し、バインディングをC++ライブラリとしてインストールします。再度削除する場合は、以下のコマンドを実行します：

```bash
pip3 uninstall myactuator-rmd-py
```

### C++を使用した制御

1. プロジェクトディレクトリ構造を作成する  
コードのsrcディレクトリ内にプロジェクトディレクトリを作成します。例えば、`myactuator_example`という名前を付け、そのサブディレクトリ内にsrcフォルダを作成します。

```bash  
cd ~/myactuator_rmd
mkdir -p ~/myactuator_rmd/src/myactuator_example/src  
cd ~/myactuator_rmd/src/myactuator_example  
```  

2. CMakeLists.txtを作成する  
`~/myactuator_rmd/src/myactuator_example/CMakeLists.txt` ファイルに以下の内容を書き込みます：
```bash
touch CMakeLists.txt
```

```cmake  
cmake_minimum_required(VERSION 3.20)  
project(myactuator_example)  

# myactuator_rmdライブラリを探す  
find_package(myactuator_rmd REQUIRED)  

# 実行可能ファイルを作成  
add_executable(myactuator_node  
src/main.cpp  
)  

# C++17標準を使用  
target_compile_features(myactuator_node PUBLIC  
cxx_std_17  
)  

# myactuator_rmdライブラリをリンク  
target_link_libraries(myactuator_node PUBLIC  
myactuator_rmd::myactuator_rmd  
)  
```

3. main.cppを書く  
`~/myactuator_rmd/src/myactuator_example/src/main.cpp` ファイルに以下のコードを書き込みます：

```bash
touch src/main.cpp
```

```cpp
#include <cstdlib>
#include <iostream>
#include <myactuator_rmd/myactuator_rmd.hpp>

int main() {
myactuator_rmd::CanDriver driver {"can0"};
myactuator_rmd::ActuatorInterface actuator {driver, 1};

std::cout << actuator.getVersionDate() << std::endl;
std::cout << actuator.sendPositionAbsoluteSetpoint(180.0, 500.0) << std::endl;
actuator.shutdownMotor();
return EXIT_SUCCESS;
}
```

4. プロジェクトをビルドする  
```bash
cd ~/myactuator_rmd/src/myactuator_example
mkdir build && cd build
cmake .. -DCMAKE_BUILD_TYPE=Release
make
```

5. プログラムを実行する  
```bash
sudo ./myactuator_node
```

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/Cresult.png" />
</div>

**前提条件**  
- CANインターフェース `can0` が正しく設定されていること（モーターとCANバスが正しく接続されていることを確認してください）。  
- `myactuator_rmd` ライブラリが正しくインストールされていること（インストールされていない場合は、最初にインストールしてください）。

C++ の実装詳細については、`myactuator_rmd.hpp` のすべての内容を参照してください。ここでは、Python の使用方法について詳しく紹介します。

### Python を使用した制御

`~/myactuator_rmd/src/myactuator_example` ディレクトリ内に scripts という名前のフォルダを作成し、Python スクリプトを保存します。
```bash
cd ~/myactuator_rmd/src/myactuator_example
mkdir scripts
```

#### **バージョン番号の取得**

scripts ディレクトリ内に `test.py` という名前のカスタム Python スクリプトを作成し、以下のコードを記述します。
```python
import myactuator_rmd_py as rmd
import time

# CAN ドライバとアクチュエータインターフェースの初期化
driver = rmd.CanDriver("can0")  # can0 を使用
actuator = rmd.ActuatorInterface(driver, 1)  # CAN ID を 1 に設定

# バージョン番号の取得
print("バージョン番号:", actuator.getVersionDate())
```
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/8.png" />
</div>

ライブラリをロードし、特定のネットワークインターフェース（ここでは can0）とドライブ（ここでは 1、CAN アドレス 0x140 + 1 = 0x141 に対応）を作成します。

#### **モーターのステータスを取得**
```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# モーターのステータス 1
status1 = actuator.getMotorStatus1()
print(f"""
モーターのステータス 1:
温度: {status1.temperature}°C
ブレーキステータス: {'解除済み' if status1.is_brake_released else 'ロック中'}
電圧: {status1.voltage}V
エラーコード: {status1.error_code}
""")

# モーターのステータス 2
status2 = actuator.getMotorStatus2()
print(f"""
モーターのステータス 2:
温度: {status2.temperature}°C
電流: {status2.current}A
シャフト速度: {status2.shaft_speed} RPM
シャフト角度: {status2.shaft_angle}°
""")

# モーターのステータス 3
status3 = actuator.getMotorStatus3()
print(f"""
モーターのステータス 3:
温度: {status3.temperature}°C
フェーズ A 電流: {status3.current_phase_a}A
フェーズ B 電流: {status3.current_phase_b}A
フェーズ C 電流: {status3.current_phase_c}A
""")

## トルク計算

import myactuator_rmd_py as rmd
from myactuator_rmd_py.actuator_constants import X4_24  # モーターのモデルに応じてインポート

def get_normalized_torque(actuator):
    """電流から正規化されたトルクを計算"""
    # 電流値を取得
    status = actuator.getMotorStatus2()
    current = status.current
    
    # 正規化されたトルクを計算（電流/定格値）
    torque_ratio = current / X4_24.rated_current
    actual_torque = torque_ratio * X4_24.rated_torque
    return actual_torque

# 使用例
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

try:
    while True:
        torque = get_normalized_torque(actuator)
        print(f"現在のトルク: {torque:.3f} Nm (定格: {X4_24.rated_torque} Nm)", end='\r')
        time.sleep(0.1)
except KeyboardInterrupt:
    actuator.shutdownMotor()
```

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/9.png" />
</div>

#### **制御モード**
- **現在の制御モードを取得**
```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)
mode = actuator.getControlMode()
print(f"現在の制御モード: {mode}")
```
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/10.png" />
</div>

- **絶対位置制御**
```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# 180 度の位置に 100 deg/s で移動
actuator.sendPositionAbsoluteSetpoint(180.0, 300.0)
time.sleep(5)  # モーターが目標位置に到達するまで待機

# 現在の位置を取得
angle = actuator.getMultiTurnAngle()
print(f"現在の位置: {angle}°")

time.sleep(5)
mode = actuator.getControlMode()
print(f"現在の制御モード: {mode}")
actuator.shutdownMotor()
```

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/11.png" />
</div>

モーターが 180 度の位置に回転する様子が確認できます。

- **相対位置制御**
```python
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# 現在の位置からさらに 90 度移動
current_angle = actuator.getMultiTurnAngle()
target_angle = current_angle + 90.0
actuator.sendPositionAbsoluteSetpoint(target_angle, 50.0)
time.sleep(3)
angle = actuator.getMultiTurnAngle()
print(f"現在の位置: {angle}°")
mode = actuator.getControlMode()
print(f"現在の制御モード: {mode}")
actuator.shutdownMotor()
```

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/12.png" />
</div>

モーターが反時計回りに 90 度回転する様子が確認できます。

- **速度制御**
```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# 500 RPM で連続回転
actuator.sendVelocitySetpoint(500.0)
time.sleep(15)

# モーターを停止
actuator.stopMotor()

# 現在の位置を取得
angle = actuator.getMultiTurnAngle()
print(f"現在の位置: {angle}°")

mode = actuator.getControlMode()
print(f"現在の制御モード: {mode}")
```

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/13.png" />
</div>

- **トルク制御**
```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# 0.5A の電流（トルク）を適用
actuator.sendCurrentSetpoint(0.5)
time.sleep(2)

# トルク出力を停止
actuator.stopMotor()

# 現在の位置を取得
angle = actuator.getMultiTurnAngle()
print(f"現在の位置: {angle}°")

mode = actuator.getControlMode()
print(f"現在の制御モード: {mode}")
```

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/14.png" />
</div>

- **閉ループモーション制御**
```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time

# 初期化
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# フィードバック付き位置制御
feedback = actuator.sendPositionAbsoluteSetpoint(180.0, 100.0)
time.sleep(5)
print(feedback)

    
# フィードバック付き速度制御
feedback = actuator.sendVelocitySetpoint(20.0)
time.sleep(5)
print(feedback)
    
# フィードバック付きトルク制御
torque_constant = 0.32  # モーターのモデルに応じて設定
feedback = actuator.sendTorqueSetpoint(1.5, torque_constant)
time.sleep(5)
print(feedback)

actuator.stopMotor()
```

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/15.png" />
</div>

#### モーターブレーキ制御
```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# ブレーキをかける
actuator.lockBrake()
print("ブレーキがかかりました")

# ブレーキを解除する
actuator.releaseBrake()
print("ブレーキが解除されました")
```

#### モーターパワー制御
```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# モーターの電源をオフにする
actuator.shutdownMotor()
print("モーターの電源がオフになりました")
```

#### エンコーダー機能
- **マルチターンエンコーダー位置を取得**
```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)
encoder_pos = actuator.getMultiTurnEncoderPosition()
print(f"マルチターンエンコーダー位置: {encoder_pos}")
```

- **現在の位置をゼロ点として設定（再起動が必要）**
```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)
actuator.setCurrentPositionAsEncoderZero()
print("現在の位置がエンコーダーのゼロ点として設定されました")
```

- **カスタムゼロ点を設定（再起動が必要）**
```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time

driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# 現在の位置をゼロ点として取得
current_pos = actuator.getMultiTurnEncoderOriginalPosition()
print(f"生のエンコーダー位置: {current_pos}")

# ゼロオフセットを設定
actuator.setEncoderZero(current_pos)
print(f"エンコーダーのゼロ点が設定されました: {current_pos}")

# 設定を適用するために再起動
actuator.shutdownMotor()
time.sleep(1)  # シャットダウンを待つ
actuator = rmd.ActuatorInterface(driver, 1)  # 再初期化

# 検証
new_pos = actuator.getMultiTurnEncoderPosition()
print(f"再起動後の位置（0付近であるべき）: {new_pos}")
```

#### 加速度設定
```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
from myactuator_rmd_py.actuator_state import AccelerationType

# 初期化
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

## 初期加速度を取得
print(f"初期加速度: {actuator.getAcceleration()}")

actuator.setAcceleration(5000, AccelerationType.POSITION_PLANNING_ACCELERATION)

## 修正後の加速度を取得
print(f"修正後の加速度: {actuator.getAcceleration()}")

# 異なる加速度タイプを設定
actuator.setAcceleration(1000, AccelerationType.POSITION_PLANNING_ACCELERATION)
actuator.setAcceleration(800, AccelerationType.POSITION_PLANNING_DECELERATION)
actuator.setAcceleration(1200, AccelerationType.VELOCITY_PLANNING_ACCELERATION)
actuator.setAcceleration(1000, AccelerationType.VELOCITY_PLANNING_DECELERATION)
```

## 技術サポートと製品に関する議論

弊社製品をご利用いただきありがとうございます！製品の使用体験をスムーズにするために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>