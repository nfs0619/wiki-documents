---
description: 本项目演示了如何使用 SenseCAP Indicator 实现单通道 LoRa 网关（LoRaHub）。
title: 单通道网关 - SenseCAP Indicator
keywords:
- SenseCAP Indicator
- LoRaWAN
- ESP32S3
- 单通道网关
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/61.webp
slug: /cn/SenseCAP_Indicator_Single_Channel_Gateway
last_update:
  date: 05/15/2025
  author: Leo Liu
toc_max_heading_level: 4
sidebar_position: 5
---

# 单通道 LoRaWAN 网关 - SenseCAP Indicator

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/61.png" style={{width:800, height:'auto'}}/></div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>SenseCAP Indicator D1Pro</th>
      <th>SenseCAP Indicator D1L</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1Pro-p-5644.html">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1L-p-5646.html">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

本项目演示了如何使用 SenseCAP Indicator 实现单通道 LoRaWAN 网关（LoRaHub）。该设备以 ESP32S3 作为主控 MCU，搭配 SX1262 LoRa 射频模块，并在 The Things Network (TTN) 上构建 LoRaWAN 应用。通过升级固件，为那些对 LoRa 技术感兴趣并希望连接到 LNS（LoRa 网络服务器）的人提供了一个实用的解决方案。

单通道网关（称为 One-Channel Hub）是一种低成本工具，用户可以通过它开始探索 LoRa 领域。这些网关可以接收特定扩频因子和信道上的 LoRa 数据包，并促进这些数据包与网络的交换。由于其经济性，许多用户已经开始构建自己的单通道网关来实验 LoRa 技术。

这是 GitHub 项目链接：[SenseCAP Indicator LoRaHub 演示](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/tree/main/examples/indicator_lorahub)。

## 烧录固件

固件已准备好安装。只需从 [bin 库](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases/tag/v1.0.3-beta-lorahub-demo) 下载最新版本即可。

:::tip
我们还在 GitHub 上提供了固件的合并版本。以下说明基于分离版本，以便初学者更容易理解。如果您希望直接烧录[合并版本](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases/tag/v1.0.3-beta-lorahub-demo)，请将烧录地址设置为 0x0。
:::

如果您没有使用完整的 ESP-IDF 环境，也可以使用 **esptool** 工具烧录提供的二进制文件。

点击下载固件：

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Indicator_single_channel_gateway_20241106.zip"><strong><span><font color={'FFFFFF'} size={"4"}> 下载 ⏬ </font></span></strong></a>
</div>

## 自定义并构建固件

如果您希望重置配置，以下说明可以帮助您在 ESP-IDF 环境下自行构建固件。

### 设置环境

本项目基于 Espressif ESP-IDF 开发，请参考此[指南](https://docs.espressif.com/projects/esp-idf/zh_CN/stable/esp32/get-started/index.html#installation)设置环境。

#### 获取 ESP-IDF

```linux
mkdir -p ~/esp
cd ~/esp
git clone -b v5.2.1 --recursive https://github.com/espressif/esp-idf.git
```

#### 设置工具

```linux
cd esp-idf/
./install.sh
```

### 安装单通道 Hub

**步骤 1**：将 Hub 克隆到本地仓库，并导航到项目路径。

```linux
git clone https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32.git

cd ~/this_project_directory/
```

**步骤 2**：安装所需驱动

- 获取射频驱动：

```
cd ~/this_project_directory/components/radio_drivers
```

- SX126x 驱动（sx1261, sx1262, sx1268）：
```
git clone -b v2.3.2 https://github.com/Lora-net/sx126x_driver.git sx126x_driver
```

- llcc68 驱动：
```
git clone -b v2.3.2 https://github.com/Lora-net/llcc68_driver.git llcc68_driver
```

- lr11xx 驱动（lr1121）：
```
git clone -b v2.4.1 https://github.com/Lora-net/SWDR001.git lr11xx_driver
```

### 构建固件

**步骤 1**：进入 lorahub 目录。
```
cd ~/this_project_directory/lorahub
```

为从命令行使用 ESP-IDF 构建项目，准备您的 Linux/MAC 终端。在 Windows 上可以跳过此步骤，因为安装的 'ESP-IDF x.x CMD' 工具会自动准备环境。

```
. ~/esp/esp-idf/export.sh
```

配置 ESP32 目标以进行构建。

```
idf.py set-target esp32s3
```

如有必要，可自定义构建：

```
idf.py menuconfig
```

构建项目：

```
idf.py all
```

### 使用 esp-idf 烧录

识别与要烧录的单通道 Hub 相关联的串口设备。
对于 Linux 和 Mac，可以通过以下命令检查串口：

```
ls /dev/cu*
```

然后使用 `idf.py` 烧录，替换 **port**：

```
idf.py -p port flash
```

如果返回 **权限错误**，请检查当前用户是否属于 dialout 组。如果不是，请执行以下操作，重启 Linux 机器后重试：

```
sudo usermod -a -G dialout $USERNAME
```

在 **Windows** 环境中，假设设备挂载为 COM14，上述命令将变为：

```
idf.py -p COM14 flash
```

启动监控控制台以查看日志（可选）。

```
idf.py -p port monitor
```

### 使用 esptool 烧录

如果不使用完整的 ESP-IDF 环境，也可以使用 `esptool` 工具烧录提供的二进制文件。

https://docs.espressif.com/projects/esptool/en/latest/esp32/

```cpp
// 合并版本
esptool.py --chip esp32s3 -p port -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 Indicator_Lorahub_v1.0.0.bin
// 分离版本
esptool.py --chip esp32s3 -p port -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 bootloader.bin 0x10000 indicator_lorahub.bin 0x8000 partition-table.bin
```

在 Windows 环境中，使用 esptool 烧录的命令为：

```cpp
// 合并版本
py -m esptool --chip esp32s3 -p COM -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 Indicator_Lorahub_v1.0.0.bin
// 分离版本
py -m esptool --chip esp32s3 -p COM -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 bootloader.bin 0x10000 indicator_lorahub.bin 0x8000 partition-table.bin
```

将 `port` 和 `COM` 替换为使用的串口名称。如果连接失败，请参阅 [故障排除](https://docs.espressif.com/projects/esptool/en/latest/esp32/troubleshooting.html#troubleshooting)。

### 使用 esptool-JS 烧录

推荐使用 [在线 esptool](https://espressif.github.io/esptool-js/) 进行烧录。

**步骤1**：将波特率设置为 115200 并连接到正确的端口。

**步骤2**：选择 bin 文件并填写对应的烧录地址。

- 合并版本：

|**烧录地址**|**文件**|
|----|----|
|0x0|Indicator_Lorahub_v1.0.0.bin|

- 分离版本：

|**烧录地址**|**文件**|
|----|----|
|0x0|bootloader.bin|
|0x10000|indicator_lorahub.bin|
|0x8000|partition-table.bin|

## 指示器配置

**步骤1**. 进入 **Wi-Fi** 页面配置网络，选择合适的 SSID 并输入密码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image.png" style={{width:480, height:'auto'}}/></div>

**步骤2**. 在 **LoRa Gateway** 页面配置参数，将 LNS 和端口设置为 "1700"，点击 "configure"，然后点击 "reboot"。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/62.png" style={{width:480, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image1.png" style={{width:480, height:'auto'}}/></div>

## 连接到 The Things Network (TTN)

**步骤1**：登录 TTN 平台并进入 `console`，点击 `Gateways->Register gateway`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image2.png" style={{width:600, height:'auto'}}/></div>

**步骤2**：将指示器的 `Gateway ID` 输入到 `Gateway EUI` 中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image3.png" style={{width:600, height:'auto'}}/></div>

**步骤3**：填写自定义网关名称，选择对应的频率计划（必须与指示器上的配置匹配），然后点击 `Register gateway`。此时，指示器的单通道网关已添加到 TTN。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image4.png" style={{width:600, height:'auto'}}/></div>

**步骤4**：添加指示器单通道网关后，点击 `Applications` 添加设备。本示例中，使用 `SenseCAP T1000 Tracker` 作为节点设备。详细连接步骤请参考 Wiki：https://wiki.seeedstudio.com/SenseCAP_T1000_tracker_TTN/。在 `End devices`->`General settings`->`Network layer`->`Advanced MAC settings` 中，需要将 `Adaptive data rate (ADR)` 设置为 **Static mode**，并根据指示器上设置的 `spreading factor` 配置 `ADR data rate index`。例如，如果 `spreading factor` 设置为 9，则 `ADR data rate index` 应设置为 3，其他值以此类推。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image5.png" style={{width:600, height:'auto'}}/></div>

**步骤5**：如下图所示，可以在添加的节点设备的 Live data 中查看 `EVENT DETAILS`，以查看相关日志。可以看到节点设备通过新添加的指示器单通道网关上报数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image6.png" style={{width:600, height:'auto'}}/></div>

## 连接到 ChirpStack

**步骤1**：参考 <a href="https://www.chirpstack.io/docs/getting-started/debian-ubuntu.html" target="_blank"><span>在 Ubuntu/Debian 上设置 ChirpStack</span></a> 安装 ChirpStack。

**步骤2**：安装 ChirpStack 后，需要在 `/etc/chirpstack` 目录下添加单通道区域定义。

在本 Wiki 中，我们在 EU868 频段下创建一个单通道定义，使用 868.1Mhz 频道。
<details>
<summary>region_eu868_1ch.toml</summary>

```toml
# 本文件包含一个 EU868 配置示例。
[[regions]]

  # ID 是用户定义的该区域标识符。
  id="eu868_1ch"

  # 描述是该区域的简短描述。
  description="EU868_1CH"

  # common-name 指的是 LoRa 联盟定义的该区域的通用名称。
  common_name="EU868"

  # 网关配置。
  [regions.gateway]

    # 强制将网关设为私有。
    #
    # 如果启用，网关只能被同一租户下的设备使用。
    force_gws_private=false

    # 网关后端配置。
    [regions.gateway.backend]

      # 启用的后端类型。
      enabled="mqtt"

      # MQTT 配置。
      [regions.gateway.backend.mqtt]

        # 主题前缀。
        #
        # 主题前缀可用于定义网关所属的区域。
        # 注意：不需要在前缀末尾添加 '/'，系统会自动添加。
        topic_prefix="eu868"

        # MQTT 服务器（例如 scheme://host:port，其中 scheme 可以是 tcp、ssl 或 ws）
        server="tcp://$MQTT_BROKER_HOST:1883"

        # 使用指定的用户名连接（可选）
        username=""

        # 使用指定的密码连接（可选）
        password=""

        # 服务质量等级
        #
        # 0：最多一次
        # 1：至少一次
        # 2：仅一次
        #
        # 注意：增大该值会降低性能。
        # 更多信息请参考：https://www.hivemq.com/blog/mqtt-essentials-part-6-mqtt-quality-of-service-levels
        qos=0

        # 清除会话
        #
        # 客户端连接 MQTT 服务器时设置“清除会话”标志。
        # 设置该标志表示客户端不希望服务器保留任何会话消息。
        clean_session=false

        # 客户端 ID
        #
        # 客户端连接 MQTT 服务器时使用的 ID，长度不得超过 23 个字符。
        # 如果留空，ChirpStack 将会自动生成一个随机 ID。
        client_id=""

        # 保活间隔。
        #
        # 定义客户端与服务器之间最大无通信时间。
        keep_alive_interval="30s"

        # CA 证书文件（可选）
        #
        # 在建立安全连接（当服务器使用 ssl://...）时使用，
        # 如果服务器使用的证书不被任何 CA 信任（例如自签名证书），可以通过此文件提供。
        ca_cert=""

        # TLS 证书文件（可选）
        tls_cert=""

        # TLS 密钥文件（可选）
        tls_key=""

  # 区域特定的网络配置。
  [regions.network]

    # ADR 引擎使用的安装裕量（dB）。
    #
    # 数值越大，网络服务器会保留更多裕量，
    # 这会降低数据速率，但减少设备因无法连接周边网关而断线的风险。
    installation_margin=10

    # 接收窗口（Class-A）。
    #
    # 设置为：
    # 0：RX1 / RX2
    # 1：仅 RX1
    # 2：仅 RX2
    rx_window=0

    # RX1 延迟（1 - 15 秒）。
    rx1_delay=1

    # RX1 数据速率偏移量
    rx1_dr_offset=0

    # RX2 数据速率
    rx2_dr=0

    # RX2 频率（Hz）
    rx2_frequency=869525000

    # 在 RX1 数据速率低于此值时优先使用 RX2。
    #
    # 基于 RX1 的数据速率优先使用 RX2。
    # 如果 RX1 的数据速率小于设定值，网络服务器会首先尝试在 RX2 下发数据；
    # 若失败（例如网关在 RX2 时间上已有负载），则会尝试 RX1。
    rx2_prefer_on_rx1_dr_lt=0

    # 基于链路预算优先使用 RX2。
    #
    # 当 RX2 的链路预算好于 RX1 时，网络服务器会优先在 RX2 下发数据；
    # 若失败，则会回退到 RX1。
    rx2_prefer_on_link_budget=false

    # 下行发射功率（dBm）
    #
    # 设置为 -1 时，使用配置频段中的默认下行发射功率。
    #
    # 请参考 LoRaWAN 区域参数以及本地法规以获取有效合法的配置项。
    # 注意，所配置的发射功率必须得到你的网关硬件支持。
    downlink_tx_power=-1

    # 是否禁用 ADR。
    adr_disabled=true

    # 最小数据速率。
    min_dr=5

    # 最大数据速率。
    max_dr=5

    # 在 min_dr/max_dr 配置之后添加如下内容
    enabled_uplink_channels=[0]
```

</details>

您还可以自定义您的单通道区域，请参阅 <a href="https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/RQ000005dqn4/HobR.KifrmqWNy0bUjfceXByxDWzvwtR37OE5EouVu8" target="_blank"><span> LoRaWAN 单通道 Hub 理论</span></a>。

**步骤 3：** 修改 `/etc/chirpstack/chirpstack.toml` 文件以启用新定义的区域。

```toml
enabled_regions={
  ...,
  "eu868_1ch",
  ...,
}
```

**步骤 4：** 登录 ChirpStack 控制台并添加单通道网关。

在添加网关之前，请检查单通道区域是否已成功启用。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Single_Channel_Gateway/single-channel-1.png" alt="pir" width={600} height="auto" /></p>

如果单通道区域已成功启用，请将单通道网关添加到 ChirpStack。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Single_Channel_Gateway/single-channel-2.png" alt="pir" width={600} height="auto" /></p>

**步骤 5：** 在 LoRa 网关页面配置参数，将地址设置为您的 ChirpStack 服务器地址，点击 `configure`，然后点击 `reboot`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image1.png" alt="pir" width={600} height="auto" /></p>

重启后，您可以在 ChirpStack 控制台中看到状态变为在线。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Single_Channel_Gateway/single-channel-3.png" alt="pir" width={600} height="auto" /></p>

**步骤 6：** 我们可以通过使用与单通道网关相同的数据速率来优化终端设备的入网时间。

参考单通道网关配置 `SF7 BW125`，我们将 T1000-A 的数据速率调整为 `DR5`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Single_Channel_Gateway/single-channel-4.png" alt="pir" width={600} height="auto" /></p>

配置好 T1000-A 的数据速率后，我们需要为其创建一个设备配置文件。

选择区域为 `EU868`，区域配置为 `EU868_1CH`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Single_Channel_Gateway/single-channel-5.png" alt="pir" width={600} height="auto" /></p>

如下图所示，您可以看到 T1000-A 成功通过单通道网关将数据上传到 ChirpStack。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Single_Channel_Gateway/single-channel-6.png" alt="pir" width={600} height="auto" /></p>

## 资源

* [SenseCAP Indicator 单通道 Hub 固件](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Indicator_single_channel_gateway_20241031.zip)
* [Github 仓库](https://github.com/Lora-net/one_channel_hub)
* [Semtech 应用说明](https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/RQ000005dqn4/HobR.KifrmqWNy0bUjfceXByxDWzvwtR37OE5EouVu8)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>