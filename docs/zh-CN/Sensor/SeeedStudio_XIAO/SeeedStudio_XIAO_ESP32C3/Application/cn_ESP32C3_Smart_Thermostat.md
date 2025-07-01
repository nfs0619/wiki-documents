---
description: XIAO ESP32C3 ESPHome 智能恒温器
title: Xiao ESP32C3 ESPHome 智能恒温器
keywords:
- 贡献
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/esp32c3_smart_thermostat
last_update:
  date: 05/15/2025
  author: Chris (Echo7394)
---

# Xiao ESP32C3 ESPHome 智能恒温器

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/9.jpg" alt="pir" width={500} height="auto" /></p>

本教程将逐步指导您如何制作一个 Xiao ESP32C3 ESPHome 智能恒温器。现在让我们开始吧！

## 硬件准备

如果您想完整地跟随本教程，您需要准备以下物品。

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32C3</th>
      <th>Seeed Studio 扩展板</th>
      <th>Home Assistant 设备 <br /> 例如 Seeed Studio Home Assistant Yellow</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Home-Assistant/1.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://wiki.seeedstudio.com/home_assistant_topic/#-devices-for-home-assistant-">
            <strong><span><font color={'FFFFFF'} size={"4"}> 查看更多 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

**Grove 传感器**

<table align="center">
  <tbody><tr>
      <th>Grove - 温湿度传感器 Pro (DHT22/AM2302)</th>
      <th>Grove - 双通道 SPDT 继电器</th>
      <th>Grove - 高电流继电器 5V/10A</th>
      <th>Grove - OLED 显示屏 0.96" (SSD1315)</th>
      <th>瞬时按钮 (任何类型均可)</th>
    </tr>
    <tr>
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/2.jpg" alt="pir" width={210} height="auto" /></p></td>
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/3.jpg" alt="pir" width={210} height="auto" /></p></td>
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/4.jpg" alt="pir" width={210} height="auto" /></p></td>
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/5.jpg" alt="pir" width={210} height="auto" /></p></td> 
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/8.jpg" alt="pir" width={400} height="auto" /></p></td> 
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-Pro-AM2302-DHT22.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-2-Channel-SPDT-Relay.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Relay.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

### Grove 单通道继电器

<!-- ![image4](./4.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/4.jpg" alt="pir" width={1000} height="auto" /></p>

### Grove SSD1315 模块

<!-- ![image5](./5.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/5.jpg" alt="pir" width={1000} height="auto" /></p>

### （可选）Seeed Studio 扩展板

<!-- ![image6](./6.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/6.jpg" alt="pir" width={1000} height="auto" /></p>

### （可选）[Seeed Studio Home Assistant Yellow](https://www.seeedstudio.com/Home-Assistant-Yellow-Kit-with-selectable-CM4-p-5680.html) 或其他设备

<!-- ![image7](./7.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/7.jpg" alt="pir" width={1000} height="auto" /></p>

### 按钮（任何类型的按钮均可）

<!-- ![image8](./8.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/8.jpg" alt="pir" width={1000} height="auto" /></p>

---

## 软件准备

### 安装 Home Assistant

确保您已经安装并运行了 Home Assistant。这里有多个 Wiki 介绍如何将 Home Assistant 刷入 [相关产品](https://wiki.seeedstudio.com/home_assistant_topic/#-devices-for-home-assistant-)。我使用的是由 Raspberry Pi CM4 驱动的 Home Assistant Yellow，因此我可以[直接使用官方方法将操作系统刷入 Home Assistant Yellow](https://yellow.home-assistant.io/power-supply/)。

### 在 Home Assistant 上安装 ESPHome

ESPHome 可作为 **Home Assistant 插件**，可以通过插件商店轻松安装。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/esphome.jpg" alt="pir" width={1000} height="auto" /></p>

- **步骤 1.** 点击 **INSTALL**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/2.png" style={{width:900, height:'auto'}}/></div>

- **步骤 2.** 启用所有选项，然后点击 **START**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/3.png" style={{width:900, height:'auto'}}/></div>

如果 ESPHome 成功加载，您将看到以下窗口：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/4.png" style={{width:900, height:'auto'}}/></div>

---

## 入门

当所有的软件和硬件都准备好后，我们就可以开始了。

### 1. 将 Seeed Studio XIAO ESP32C3 添加到 ESPHome

- **步骤 1.** 点击 **+ NEW DEVICE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/5.png" style={{width:900, height:'auto'}}/></div>

- **步骤 2.** 点击 **CONTINUE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/6.png" style={{width:900, height:'auto'}}/></div>

- **步骤 3.** 输入设备的 **Name**，以及 WiFi 的 **Network name** 和 **Password**，然后点击 **NEXT**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/7.png" style={{width:900, height:'auto'}}/></div>

- **步骤 4.** 选择 **ESP32-C3** 并点击

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/8.png" style={{width:900, height:'auto'}}/></div>

- **步骤 5.** 点击 **SKIP**，因为我们将手动配置此板

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/14.png" style={{width:400, height:'auto'}}/></div>

---

### 2. 创建并上传 YAML 配置

- **步骤 1.** 点击新创建板下的 **EDIT**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/9.png" style={{width:900, height:'auto'}}/></div>

---

### 创建并上传 YAML 配置

以下代码的解释：

- **名称：** "thermostat"

- **板配置：**  
  Flash 模式设置为 DIO。  
  板指定为 "seeed_xiao_esp32c3"，使用 Arduino 框架。

- **启动时的操作：**  
  显示日志消息："Booting thermostat."  
  关闭三个继电器：加热、冷却和风扇。  
  延迟 500 毫秒。  
  执行名为 "boot_beep" 的脚本。

- **脚本配置：**  
  启动蜂鸣脚本：  
  打开蜂鸣器，设置频率以产生蜂鸣声，并在 300 毫秒后关闭。

- **API 和 OTA 配置：**  
  API：  
  指定加密密钥。  
  OTA：  
  设置密码为 "13371337" 以进行 OTA 更新。

- **蜂鸣器输出：**  
  使用 LEDC 平台配置，使用引脚 5。

- **WiFi 配置：**  
  指定用于连接 Wi-Fi 的 SSID 和密码。  
  配置备用热点（捕获门户），SSID 为 "Xiao-Esp32C3"，密码为 "13371337"。

- **I2C 配置：**<br />
  配置 I2C 通信，使用 SDA 引脚 6 和 SCL 引脚 7。

- **字体配置：**<br />
  为显示屏定义两种不同大小的字体。

- **显示配置：**<br />
  使用 SSD1315 I2C 显示屏，并通过 lambda 函数格式化和显示信息。<br />
  显示华氏温度、湿度、Wi-Fi 信号强度和 IP 地址。

- **传感器配置：**<br />
  使用 DHT22 传感器进行温度和湿度读取，更新间隔为 10 秒。<br />
  包括一个 Wi-Fi 信号传感器，更新间隔为 20 秒。

- **文本传感器配置：**<br />
  显示恒温器的 IP 地址和 ESPHome 版本。

- **开关配置：**<br />
  配置三个 GPIO 开关，分别用于 relay_heat、relay_cooling 和 relay_fan。

- **二进制传感器配置：**<br />
  配置一个二进制传感器，用于检测循环风扇按钮按下。<br />
  按下时控制气候系统的风扇模式。

- **气候配置：**<br />
  使用指定的温度传感器实现恒温器控制。<br />
  定义加热、制冷、风扇模式和空闲的操作。<br />
  设置温度限制、步长和默认预设。

将此内容粘贴到您的 ESPHome 设备配置 yaml 文件中。您也可以在 [这里](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/esp32c3config.yaml) 下载完整的 .yaml 文件。

```yaml
esphome:
  name: ecostat
  platformio_options:
    board_build.flash_mode: dio
  on_boot:
    priority: 750
    then:
      - logger.log: "Booting EcoStat"
      - delay: 500ms
      - lambda: |-
          id(relay_heat).turn_off();
          id(relay_cooling).turn_off();
          id(relay_fan).turn_off();
          id(ecostat_control_heat).mode = CLIMATE_MODE_OFF;
          id(ecostat_control_cooling).mode = CLIMATE_MODE_OFF;
      - script.execute: boot_beep

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

#logger:
 # level: VERY_VERBOSE

api:
  encryption:
    key: "YOURKEYHERE"

ota:
  password: "13371337"

script:
- id: boot_beep
  then:
    # First ^E
    - output.turn_on: buzzer
    - output.ledc.set_frequency:
        id: buzzer
        frequency: 659.25Hz  # E
    - output.set_level:
        id: buzzer
        level: "50%"
    - delay: 150ms
    - output.turn_off: buzzer
    - output.turn_on: buzzer
    - output.ledc.set_frequency:
        id: buzzer
        frequency: 1000Hz
    - output.set_level:
        id: buzzer
        level: "50%"
    - delay: 150ms
    - output.turn_off: buzzer
output:
  - platform: ledc
    pin: 5
    id: buzzer

wifi:
  ssid: YOURWIFINAME
  password: YOURWIFIPASS

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "13371337"

i2c:
  sda: 6
  scl: 7
  scan: False

font:
  # gfonts://family[@weight]
  - file: "gfonts://Roboto"
    id: roboto
    size: 20

  - file: "gfonts://Poppins@700"
    id: inter
    size: 10

display:
  - platform: SSD1315_i2c
    id: oled
    model: "SSD1315 128x64"
    address: 0x3C
    lambda: |-
      float temp_celsius = id(temp).state;
      float temp_fahrenheit = (temp_celsius * 9.0 / 5.0) + 32.0;
      char temp_str[6]; // Buffer for temperature string
      dtostrf(temp_celsius, 4, 1, temp_str); // Convert Celsius to string with 1 decimal place

      it.print(28, 0, id(inter), id(ip_address).state.c_str());
      it.printf(0, 18, id(roboto), "T: %.1f  ", temp_fahrenheit);
      it.printf(70, 18, id(roboto), "H: %d", int(id(humidity).state));
      it.printf(31, 45, id(inter), "RSSI: %d", int(id(rssi).state));

climate:
  - platform: thermostat
    name: "EcoStat Heating"
    id: ecostat_control_heat
    sensor: temp
    heat_deadband: 2 °F
    heat_overrun: 0
    min_heating_run_time: 60s
    min_heating_off_time: 120s
    min_idle_time: 3min
    visual:
      min_temperature: 60 °F
      max_temperature: 80 °F
      temperature_step:
        current_temperature: 0.1
        target_temperature: 1.0
        target_temperature_low: 65 °F
    heat_action:
      - switch.turn_on: relay_heat
    idle_action:
      - switch.turn_off: relay_heat
    default_preset: Normal
    preset:
      - name: Normal
        default_target_temperature_low: 65 °F


  - platform: thermostat
    name: "EcoStat Cooling"
    id: ecostat_control_cooling
    sensor: temp
    cool_deadband: 2 °F
    cool_overrun: 0
    min_cooling_off_time: 20s
    min_cooling_run_time: 60s
    min_idle_time: 3min
    visual:
      min_temperature: 60 °F
      max_temperature: 80 °F
      temperature_step:
        current_temperature: 0.1
        target_temperature: 1.0
        target_temperature_low: 70 °F
    cool_action:
      - switch.turn_on: relay_cooling
    idle_action:
      - switch.turn_off: relay_cooling
    min_fan_mode_switching_time: 20s
    fan_mode_on_action:
      - switch.turn_on: relay_fan
    fan_mode_off_action:
      - switch.turn_off: relay_fan
    default_preset: Normal
    preset:
      - name: Normal
        default_target_temperature_high: 70 °F

sensor:
  - platform: dht
    pin: 20
    model: DHT22
    update_interval: 10s
    temperature:
      name: "EcoStat Temperature"
      id: temp
    humidity:
      name: "EcoStat Humidity"
      id: humidity
  - platform: wifi_signal
    name: "Wi-Fi Signal Strength"
    id: rssi
    update_interval: 20s

text_sensor:
  - platform: wifi_info
    ip_address:
      name: "EcoStat IP Address"
      id: ip_address
  - platform: version
    name: "EcoStat ESPHome Version"

switch:
  - platform: gpio
    id: relay_heat
    pin:
      number: 10
      mode: OUTPUT
  - platform: gpio
    id: relay_cooling
    pin:
      number: 9
      mode: OUTPUT
  - platform: gpio
    id: relay_fan
    pin:
      number: 21
      mode: OUTPUT

binary_sensor:
  - platform: gpio
    id: tempup
    pin:
      number: 8
      mode: INPUT_PULLUP
    filters:
      - delayed_on: 50ms
      - delayed_off: 50ms
    on_press:
      then:
        - lambda: |-
            if (id(ecostat_control_heat).mode == esphome::climate::CLIMATE_MODE_HEAT) {
              auto current_target_temp = id(ecostat_control_heat).target_temperature_low;
              id(ecostat_control_heat).target_temperature_low = current_target_temp + 0.56;
              auto current_target_temp_high = id(ecostat_control_heat).target_temperature_high;
              id(ecostat_control_heat).target_temperature_high = current_target_temp_high + 0.56;
            } else if (id(ecostat_control_cooling).mode == esphome::climate::CLIMATE_MODE_COOL) {
              auto current_target_temp = id(ecostat_control_cooling).target_temperature_low;
              id(ecostat_control_cooling).target_temperature_low = current_target_temp + 0.56;
              auto current_target_temp_high = id(ecostat_control_cooling).target_temperature_high;
              id(ecostat_control_cooling).target_temperature_high = current_target_temp_high + 0.56;
            }

  - platform: gpio
    id: tempdown
    pin:
      number: 2
      mode: INPUT_PULLUP
    filters:
      - delayed_on: 50ms
      - delayed_off: 50ms
    on_press:
      then:
        - lambda: |-
            if (id(ecostat_control_heat).mode == esphome::climate::CLIMATE_MODE_HEAT) {
              auto current_target_temp = id(ecostat_control_heat).target_temperature_low;
              id(ecostat_control_heat).target_temperature_low = current_target_temp - 0.56;
              auto current_target_temp_high = id(ecostat_control_heat).target_temperature_high;
              id(ecostat_control_heat).target_temperature_high = current_target_temp_high - 0.56;
            } else if (id(ecostat_control_cooling).mode == esphome::climate::CLIMATE_MODE_COOL) {
              auto current_target_temp = id(ecostat_control_cooling).target_temperature_low;
              id(ecostat_control_cooling).target_temperature_low = current_target_temp - 0.56;
              auto current_target_temp_high = id(ecostat_control_cooling).target_temperature_high;
              id(ecostat_control_cooling).target_temperature_high = current_target_temp_high - 0.56;
            }

  - platform: gpio
    id: modeswitch
    pin:
      number: 3
      mode: INPUT_PULLUP
    filters:
      - delayed_on: 50ms
      - delayed_off: 50ms
    on_press:
      then:
        - lambda: |-
            auto current_mode = id(ecostat_control_heat).mode;
            if (current_mode == esphome::climate::CLIMATE_MODE_OFF) {
              id(ecostat_control_heat).mode = esphome::climate::CLIMATE_MODE_HEAT;
            } else if (current_mode == esphome::climate::CLIMATE_MODE_HEAT) {
              id(ecostat_control_heat).mode = esphome::climate::CLIMATE_MODE_COOL;
            } else if (current_mode == esphome::climate::CLIMATE_MODE_COOL) {
              id(ecostat_control_heat).mode = esphome::climate::CLIMATE_MODE_OFF;
            }

  - platform: gpio
    id: momentaryswitch0
    pin:
      number: 4
      mode: INPUT_PULLUP
    filters:
      - delayed_on: 50ms
      - delayed_off: 50ms
    on_press:
      then:
        - if:
            condition:
              switch.is_off: relay_fan
            then:
              - climate.control: 
                  id: ecostat_control_cooling
                  fan_mode: "on"
            else:
              - climate.control: 
                  id: ecostat_control_cooling
                  fan_mode: "off"
```

### 3. 选择组装外壳（可选）

以下是我为本项目使用的外壳的 STL 文件。

[EcoStatV2 ecostatcase](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/EcoStatV2-ecostatcase.stl)

[EcoStatV2 ecostatlid](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/EcoStatV2-ecostatlid.stl)

您可以随意使用或修改这些文件。如果您没有 3D 打印机，可以使用许多在线服务，这些服务可以根据您的需求打印这些文件，并选择任何材料。

<!-- ![image10](./3dfile.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/3dfile.png" alt="pir" width={1000} height="auto" /></p>

### 4. 安装组件

#### 步骤 1 将所有列出的组件安装到外壳中

使用 M2x4 和 M2x6 螺丝，将之前列出的所有组件安装到外壳中的对应位置。<br />
（DHT22 传感器可以直接按压固定到位）。

<!-- ![image11](./11.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/11.jpg" alt="pir" width={500} height="auto" /></p>

#### 步骤 2 将所有传感器和外设连接到 YAML 文件中指定的对应引脚

以下是我在连接过程中使用的方法：

- **DHT22/SSD1315 - 使用 JST 连接器：** 将 DHT22 和 SSD1315 的连接器从其 PCB 上焊接并翻转到另一侧，以确保正确安装。

<!-- 我使用了包含的 JST -->
<!-- 连接器和杜邦连接的组合。对于 DHT22 和 SSD1315，我使用了 JST。 -->
<!-- 对于继电器，我在一侧使用 JST，另一侧使用杜邦连接器连接到扩展板上的 GPIO 引脚。如下图所示，我还将一个 3.7V 锂电池插入扩展板的电池连接器，以便在主电源丢失时作为备用电池使用。 -->

- **两种类型的继电器 - 使用 JST/杜邦连接器：** 对于继电器，我在一侧使用 JST，另一侧使用杜邦连接器连接到扩展板上的 GPIO 引脚。

- **电池连接：** 我还将一个 3.7V 锂电池插入扩展板的电池连接器，以便在主电源丢失时作为备用电池使用。

<!-- ![image12](./10.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/10.jpg" alt="pir" width={500} height="auto" /></p>

#### 步骤 3 将所需样式的瞬时按钮连接到外壳的内部前部

我通过使用少量热胶将按钮固定到位来完成此步骤。然后，我将电线焊接到瞬时按钮的对角引脚上，并在电线的另一端安装杜邦连接器，以连接到扩展板上的正确 GPIO 引脚。

<!-- ![image13](./12.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/12.jpg" alt="pir" width={1000} height="auto" /></p>

#### 步骤 4 将屏幕组装到前盖的后部

将屏幕组装到前盖的后部（用少量热胶固定）。然后使用 3 个 M4x6 螺丝将前盖固定到外壳上，如下图所示。

<!-- ![image14](./9.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/9.jpg" alt="pir" width={500} height="auto" /></p>

### 5. 将线缆连接到 EcoStat 上的对应继电器

智能恒温器完成！只需拆下您家现有的恒温器，并使用下图将正确的线缆连接到 EcoStat 上的对应继电器！

<!-- ![image15](./13.jpg) -->
<img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/13.jpg" alt="pir" width={500} height="auto" />

## ✨ 贡献者项目

- 本项目由 Seeed Studio [贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) 支持。
- 感谢 Chris 的努力，您的作品将被 [展示](https://wiki.seeedstudio.com/Honorary-Contributors/)。

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供不同的支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>