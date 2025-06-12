---
description: XIAO 系列的 Wiki 功能页面。
title: XIAO 系列展览
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao_topic_page
last_update:
  date: 05/15/2025
  author: Citric
---

# Seeed Studio XIAO 系列展览

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

[Seeed Studio XIAO 系列](https://www.seeedstudio.com/xiao-series-page)以中文“小”命名，由基于多种硬件平台（如 ESP32、SAMD21、RP2040、nRF52840、RP2350、RA4M1 和 MG24）的微型开发板组成。这些指甲大小的开发板将强大的功能封装在紧凑的外形中。

我们的团队与社区合作，创建了丰富的 Wiki、应用程序和文档，使使用和开发更加轻松。为了让整个社区更高效地找到这些有用的文档，我们将它们汇总在此页面中，作为索引，帮助您快速定位所需内容。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/xiao_topicpage/compatible_software.jpg" /></div>

我们离不开社区的热爱和贡献。如果您希望为这个充满活力的生态系统做出贡献（填补空白部分），我们欢迎[您提交自己的独特开发，以激励社区中的其他人](https://wiki.seeedstudio.com/Contribution-Guide/)。

## 目录

<div align="center">
	  <div style={{width: "auto", height: 450, overflowY: 'scroll', border: '1px solid #ccc', padding: '10px', textAlign: 'left',}}>
	<ul>
		<li><a href="#product_guides"><strong>产品指南（入门、引脚使用等）</strong></a></li>
		<ul>
		<li><a href="#xiao_samd21"><strong>XIAO SAMD21</strong></a></li>
		<li><a href="#xiao_rp2040"><strong>XIAO RP2040</strong></a></li>
		<li><a href="#xiao_nrf52840_(sense)"><strong>XIAO nRF52840 (Sense)</strong></a></li>
		<li><a href="#xiao_esp32c3"><strong>XIAO ESP32C3</strong></a></li>
		<li><a href="#xiao_esp32s3_(sense)"><strong>XIAO ESP32S3 (Sense)</strong></a></li>
		<li><a href="#xiao_esp32c6"><strong>XIAO ESP32C6</strong></a></li>
		<li><a href="#xiao_rp2350"><strong>XIAO RP2350</strong></a></li>
		<li><a href="#xiao_ra4m1"><strong>XIAO RA4M1</strong></a></li>
		<li><a href="#xiao_mg24_(sense)"><strong>XIAO MG24 (Sense)</strong></a></li>
		</ul>
		<li><a href="#supported_languages/platforms"><strong>支持的语言/平台</strong></a></li>
		<ul>
		<li><a href="#platformio"><strong>PlatformIO</strong></a></li>
		<li><a href="#micropython"><strong>MicroPython</strong></a></li>
		<li><a href="#circuitpython"><strong>CircuitPython</strong></a></li>
		<li><a href="#embedded_swift"><strong>Embedded Swift</strong></a></li>
		<li><a href="#esp_idf"><strong>ESP IDF</strong></a></li>
		<li><a href="#rust"><strong>Rust</strong></a></li>
		<li><a href="#tinygo"><strong>TinyGo</strong></a></li>
		<li><strong>Lua</strong></li>
		<li><strong>图形化编程语言</strong></li>
		</ul>
		<li><a href="#supported_rtos"><strong>支持的 RTOS</strong></a></li>
		<ul>
		<li><a href="#zephyr"><strong>Zephyr</strong></a></li>
		<li><a href="#freertos"><strong>FreeRTOS</strong></a></li>
		<li><a href="#apache_nuttx_rtos"><strong>Apache NuttX RTOS</strong></a></li>
		</ul>
		<li><a href="#communications"><strong>通信</strong></a></li>
		<ul>
		<li><a href="#apache_kafka"><strong>Apache Kafka</strong></a></li>
		<li><a href="#matter"><strong>Matter</strong></a></li>
		<li><a href="#zigbee"><strong>Zigbee</strong></a></li>
		<li><a href="#espnow"><strong>ESP-NOW</strong></a></li>
		<li><a href="#meshtastic"><strong>Meshtastic</strong></a></li>
		<li><a href="#amazon_sidewalk"><strong>Amazon Sidewalk</strong></a></li>
		<li><a href="#blecon"><strong>Blecon</strong></a></li>
		<li><a href="https://github.com/marvinroger/async-mqtt-client" target="_blank"><strong>ESP32-MQTT</strong></a></li>
		</ul>
		<li><a href="#tinyml/embedded_machine_learningtinyml"><strong>TinyML/嵌入式机器学习平台</strong></a></li>
		<ul>
		<li><a href="#sensecraft_ai"><strong>SenseCraft AI</strong></a></li>
		<li><a href="#tensorflow_lite"><strong>TensorFlow Lite</strong></a></li>
		<li><a href="#edge_impulse"><strong>Edge Impulse</strong></a></li>
		</ul>
		<li><a href="#smart_home_and_automation"><strong>智能家居与自动化</strong></a></li>
		<ul>
		<li><a href="#home_assistant_esphome"><strong>Home Assistant & ESPHome</strong></a></li>
		<li><strong>OpenHAB</strong></li>
		<li><a href="#tasmota"><strong>Tasmota</strong></a></li>
		</ul>
		<li><a href="#open_source_keyboard_firmware_support"><strong>开源键盘固件支持</strong></a></li>
		<ul>
		<li><a href="#qmk"><strong>QMK</strong></a></li>
		<li><a href="#zmk"><strong>ZMK</strong></a></li>
		</ul>
		<li><a href="#other_hot_applications"><strong>其他热门应用</strong></a></li>
		<ul>
		<li><a href="#wled"><strong>WLED</strong></a></li>
		<li><a href="#chatgpt"><strong>ChatGPT</strong></a></li>
		<li><a href="#ffmpeg"><strong>FFmpeg</strong></a></li>
		<li><strong>OpenHD</strong></li>
		<li><strong>ESP32Cam</strong></li>
		<li><a href="#mros2_esp32"><strong>mROS2-ESP32</strong></a></li>
		</ul>
		<li><a href="#prototyping_tools_pcb_layout_stimulation"><strong>原型工具（PCB 布局与仿真）</strong></a></li>
		<ul>
		<li><a href="#fritzing"><strong>Fritzing</strong></a></li>
		<li><a href="#fluxai"><strong>FluxAI</strong></a></li>
		<li><a href="#wokwi"><strong>Wokwi</strong></a></li>
		</ul>
		<li><a href="#iot_clouds_and_iot_platforms"><strong>IoT 云与 IoT 平台</strong></a></li>
		<ul>
		<li><a href="#aws_iot"><strong>AWS IoT</strong></a></li>
		<li><strong>Azure IoT</strong></li>
		<li><a href="#thingspeak"><strong>ThingSpeak</strong></a></li>
		<li><a href="#ubidots"><strong>Ubidots</strong></a></li>
		<li><strong>Blynk</strong></li>
		<li><strong>Losant</strong></li>
		<li><strong>InfluxDB</strong></li>
		</ul>
	</ul>
	</div>
</div>

## <span id="product_guides">产品指南</span>

<br></br>

<span id="xiao_samd21"><strong><font size={"4"}>XIAO SAMD21</font></strong></span>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/Seeeduino-XIAO/">入门指南 WiKi</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/Seeeduino-XIAO-by-Nanase/">引脚使用</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/Seeeduino-XIAO-by-Nanase/">单周期 IOBUS</a> 作者 <a href="https://twitter.com/nanase_coder">@nanase_coder</a></th>
		</tr>
	</table>
</div>

<br></br>

<span id="xiao_rp2040"><strong><font  size={"4"}>XIAO RP2040</font></strong></span>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#getting-started">入门指南 WiKi</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#pin-multuiplexing-on-the-seeed-studio-xiao-rp2040">引脚使用</a></th>
			<th style={{width:333, height:'auto'}}></th>
		</tr>
	</table>
</div>

<br></br>

<span id="xiao_nrf52840_(sense)"><strong><font  size={"4"}>XIAO nRF52840 (Sense)</font></strong></span>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO_BLE/">入门指南 WiKi</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-BLE-Sense-Pin-Multiplexing/">引脚使用</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-BLE-Sense-IMU-Usage/">6轴 IMU 使用</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-BLE-Sense-PDM-Usage/">PDM 使用</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao-ble-qspi-flash-usage/">QSPI Flash</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-BLE-Sense-NFC-Usage/">NFC 使用</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-BLE-Sense-Bluetooth_Usage/">蓝牙库 (Seeed nRF52)</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-BLE-Sense-Bluetooth-Usage/">蓝牙库 (Seeed nRF52 mbed)</a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>

<span id="xiao_esp32c3"><strong><font  size={"4"}>XIAO ESP32C3</font></strong></span>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/">入门指南 WiKi</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO_ESP32C3_Pin_Multiplexing/">引脚使用</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO_ESP32C3_WiFi_Usage/">Wi-Fi 使用</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO_ESP32C3_Bluetooth_Usage/">蓝牙使用</a></th>
			<th style={{width:333, height:'auto'}}></th>
            <th style={{width:333, height:'auto'}}></th>
		</tr>
	</table>
</div>

<br></br>

<span id="xiao_esp32s3_(sense)"><strong><font  size={"4"}>XIAO ESP32S3 (Sense)</font></strong></span>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/">入门指南 WiKi</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32s3_pin_multiplexing/">引脚使用</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32s3_wifi_usage/">Wi-Fi 使用</a></th>
		</tr>
		<tr>			
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32s3_bluetooth/">蓝牙使用</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO_ESP32S3_Consumption/">睡眠模式</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32s3_sense_mic/">麦克风使用</a></th>          
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32s3_camera_usage/">摄像头使用</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32s3_sense_filesystem/">MicroSD 卡</a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>

<span id="xiao_esp32c6"><strong><font  size={"4"}>XIAO ESP32C6</font></strong></span>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32c6_getting_started/">入门指南 WiKi</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_pin_multiplexing_esp33c6/">引脚使用</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_wifi_usage_esp32c6/">Wi-Fi 使用</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32c6_bluetooth/">蓝牙使用</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>

<span id="xiao_rp2350"><strong><font  size={"4"}>XIAO RP2350</font></strong></span>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/getting-started-xiao-rp2350/">入门指南 WiKi</a></th>
			<th style={{width:333, height:'auto'}}><a href="">引脚使用</a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>

<span id="xiao_ra4m1"><strong><font  size={"4"}>XIAO RA4M1</font></strong></span>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/getting_started_xiao_ra4m1/">入门指南 Wiki</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_ra4m1_pin_multiplexing/">引脚使用</a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>

<span id="xiao_mg24_(sense)"><strong><font  size={"4"}>XIAO MG24 (Sense)</font></strong></span>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_mg24_getting_started/">入门指南 Wiki</a></th>
			<th style={{width:333, height:'auto'}}><a href="">引脚使用</a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

## <span id="supported_languages/platforms">支持的语言/平台</span>

<br></br>
<div><a href="https://platformio.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/platformio.png" style={{width:'auto', height:50}} /></a></div>

<span id="platformio"><strong><a href="https://platformio.org/">PlatformIO</a></strong></span>，一个备受喜爱的 Microsoft Visual Studio Code IDE 解决方案。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://docs.platformio.org/en/stable/boards/atmelsam/seeed_xiao.html">XIAO SAMD21 (Seeeduino XIAO)</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_nrf52840_with_platform_io/">XIAO nRF52840 (Sense)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://docs.platformio.org/en/latest/boards/espressif32/seeed_xiao_esp32c3.html">XIAO ESP32C3</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32c6_with_platform_io/">XIAO ESP32C6</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://docs.platformio.org/en/latest/boards/espressif32/seeed_xiao_esp32s3.html">XIAO ESP32S3 (Sense)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://taunoerik.art/2023/05/15/start-seeed-xiao-rp2040-on-platformio/">XIAO RP2040</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_rp2350_with_platform_io/">XIAO RP2350</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_mg24_with_platform_io/"> XIAO MG24 (Sense)</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_ra4m1_with_platform_io/">XIAO RA4M1</a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://micropython.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/micropython.png" style={{width:'auto', height:50}} /></a></div>

<span id="micropython"><strong><a href="https://micropython.org/">MicroPython</a></strong></span>，一个完整实现 Python 3 编程语言的版本，可直接运行在嵌入式硬件上。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-SAMD21-MicroPython/">XIAO SAMD21</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-RP2040-with-MicroPython/">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32c3_with_micropython/">XIAO ESP32C3</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32s3_with_micropython/">XIAO ESP32S3 (Sense)</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO_ESP32S3_Micropython/">XIAO ESP32S3 Sense Only (Camera, Wi-Fi)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://micropython.org/download/SEEED_XIAO_NRF52/">XIAO nRF52840 Sense</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32c6_micropython/">XIAO ESP32C6</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://micropython.org/download/SEEED_XIAO_RP2350/">XIAO RP2350</a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://circuitpython.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/circuitpython.png" style={{width:'auto', height:50}} /></a></div>

<span id="circuitpython"><strong><a href="https://circuitpython.org/">CircuitPython</a></strong></span>，一种设计用于简化低成本微控制器板实验和学习编程的语言。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/Seeeduino-XIAO-CircuitPython/">XIAO SAMD21</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-RP2040-with-CircuitPython/">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-BLE_CircutPython/">XIAO nRF52840 (Sense)</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32c3_with_circuitpython/">XIAO ESP32C3</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32s3_project_circuitpython/">XIAO ESP32S3 Sense</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32c6_with_circuitpython/">XIAO ESP32C6</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://circuitpython.org/board/seeeduino_xiao_rp2350/">XIAO RP2350</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://www.swift.org/getting-started/embedded-swift/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/swift.png" style={{width:'auto', height:50}} /></a></div>

<span id="embedded_swift"><strong><a href="https://www.swift.org/getting-started/embedded-swift/">嵌入式 Swift</a></strong></span>，一种可扩展的语言，非常适合编写桌面和移动应用程序、服务器后端以及系统软件，可运行在微控制器上。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao-esp32-swift/">XIAO ESP32C6</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://idf.espressif.com/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/espressif.png" style={{width:'auto', height:50}} /></a></div>

<span id="esp_idf"><a href="https://idf.espressif.com/"><strong>ESP IDF</strong></a></span>，Espressif 官方的 IoT 开发框架，适用于 ESP32、ESP32-S 和 ESP32-C 系列 SoC，提供一个自给自足的 SDK，用于这些平台上的任何通用应用程序开发，支持使用 C 和 C++ 等编程语言。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_idf/">XIAO ESP32 系列（入门指南）</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/getting_started_with_matter/">Matter 开发 1</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32_matter_env/">Matter 开发 2</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/matter_development_framework/">Matter 开发 3</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://www.rust-lang.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/rust.png" style={{width:'auto', height:50}} /></a></div>

<span id="rust"><strong><a href="https://www.rust-lang.org/">Rust</a></strong></span>，一种语言，赋能每个人构建可靠且高效的软件。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://github.com/atsamd-rs/atsamd/tree/master/boards/xiao_m0">XIAO SAMD21</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://tutoduino.fr/en/tutorials/programing-in-rust-the-xiao-rp2040-board/">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://forum.seeedstudio.com/t/rust-on-xiao-esp32s3/276724">XIAO ESP32S3 (Sense)</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://github.com/Wumpf/Seeed-nRF52840-Sense-projects">XIAO nRF52840 (Sense)</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://tinygo.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/tinygo.png" style={{width:'auto', height:50}} /></a></div>

<span id="tinygo"><strong><a href="https://tinygo.org/">TinyGo</a></strong></span>，一种 Go 编译器，旨在用于微控制器、WebAssembly (wasm/wasi) 和命令行工具等小型环境。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://tinygo.org/docs/reference/microcontrollers/xiao/">XIAO SAMD21</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://tinygo.org/docs/reference/microcontrollers/xiao-ble/">XIAO nRF52840 (Sense)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://tinygo.org/docs/reference/microcontrollers/xiao-rp2040/">XIAO RP2040</a></th>
		</tr>
	</table>
</div>

## <span id="supported_rtos">支持的 RTOS</span>

<br></br>
<div><a href="https://docs.zephyrproject.org/latest/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr.png" style={{width:'auto', height:70}} /></a></div>

<span id="zephyr"><strong><a href="https://docs.zephyrproject.org/latest/">Zephyr</a></strong></span>，一种可扩展的实时操作系统 (RTOS)，支持多种硬件架构，针对资源受限设备进行了优化，并以安全性为核心构建。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-SAMD21-Zephyr-RTOS/">XIAO SAMD21</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-RP2040-Zephyr-RTOS/">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-nRF52840-Zephyr-RTOS/">XIAO nRF52840 (Sense)</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-ESP32C3-Zephyr/">XIAO ESP32C3</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32s3_zephyr_rtos/">XIAO ESP32S3 (Sense)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://docs.zephyrproject.org/latest/boards/seeed/xiao_esp32c6/doc/index.html">XIAO ESP32C6</a></th>		
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://docs.zephyrproject.org/latest/boards/seeed/xiao_ra4m1/doc/index.html">XIAO RA4M1</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://docs.zephyrproject.org/latest/boards/seeed/xiao_mg24/doc/index.html">XIAO MG24</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>	
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://www.freertos.org/"><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/1.png" style={{width:'auto', height:50}} /></a></div>

<span id="freertos"><strong><a href="https://www.freertos.org/">FreeRTOS</a></strong></span>，一种用于微控制器和小型微处理器的实时操作系统。
<br></br>
<br></br>
<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}>XIAO SAMD21</th>
			<th style={{width:333, height:'auto'}}>XIAO nRF52840</th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao-esp32s3-freertos/">XIAO ESP32S3 (Sense)</a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://nuttx.apache.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/nuttxrtos.png" style={{width:'auto', height:80}} /></a></div>

<span id="apache_nuttx_rtos"><strong><a href="https://nuttx.apache.org/">Apache NuttX RTOS</a></strong></span>，一个实时操作系统（RTOS），注重标准兼容性和小型化设计。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://nuttx.apache.org/docs/latest/platforms/arm/samd2l2/boards/xiao-seeeduino/index.html">XIAO SAMD21</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao-rp2040-with-nuttx/">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://nuttx.apache.org/docs/latest/platforms/arm/nrf52/boards/xiao-nrf52840/index.html">XIAO nRF52840</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://nuttx.apache.org/docs/latest/platforms/arm/rp23xx/boards/xiao-rp2350/index.html">XIAO RP2350</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://nuttx.apache.org/docs/latest/platforms/arm/ra4m1/boards/xiao-ra4m1/index.html ">XIAO RA4M1</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://nuttx.apache.org/docs/latest/platforms/xtensa/esp32s3/boards/esp32s3-xiao/index.html">XIAO ESP32S3</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://nuttx.apache.org/docs/latest/platforms/risc-v/esp32c3/boards/esp32c3-xiao/index.html">XIAO ESP32C3</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://nuttx.apache.org/docs/latest/platforms/risc-v/esp32c6/boards/esp32c6-xiao/index.html">XIAO ESP32C6</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

## <span id="communications">通信</span>

<br></br>
<div><a href="https://kafka.apache.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/apachekafka.png" style={{width:'auto', height:50}} /></a></div>

<span id="apache_kafka"><strong><a href="https://kafka.apache.org/">Apache Kafka</a></strong></span>，一个开源的分布式事件流平台，被数千家公司用于高性能数据管道、流式分析、数据集成和关键任务应用。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32c6_kafka/">XIAO ESP32C6</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>


<br></br>
<div><a href="https://csa-iot.org/all-solutions/matter/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/matter.png" style={{width:'auto', height:50}} /></a></div>

<span id="matter"><strong><a href="https://csa-iot.org/all-solutions/matter/">Matter</a></strong></span>，一个行业统一的标准协议，为兼容设备和系统提供可靠、安全的连接。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_idf/">XIAO ESP32 系列（C3, S3, C6）</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://csa-iot.org/all-solutions/zigbee/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/zigbee.png" style={{width:'auto', height:50}} /></a></div>

<span id="zigbee"><strong><a href="https://csa-iot.org/all-solutions/zigbee/">Zigbee</a></strong></span>，一种无线技术，作为开放的全球市场连接标准开发，用于满足低成本、低功耗无线物联网数据网络的独特需求。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32c6_zigbee_arduino/">XIAO ESP32C6（Arduino）</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32c6_zigbee/">XIAO ESP32C6（IDF）</a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://www.espressif.com/en/solutions/low-power-solutions/esp-now"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/espnow.png" style={{width:'auto', height:50}} /></a></div>

<span id="espnow"><strong><a href="https://www.espressif.com/en/solutions/low-power-solutions/esp-now">ESP-NOW</a></strong></span>，一种用于快速响应和低功耗的无线通信协议，广泛应用于智能家居设备、远程控制和传感器。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32s3_espnow/">XIAO ESP32 系列（ESP32C3, ESP32S3, ESP32S3 Sense, ESP32C6）</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://meshtastic.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/mashtastic.png" style={{width:'auto', height:70}} /></a></div>

<span id="meshtastic"><strong><a href="https://meshtastic.org/">Meshtastic</a></strong></span>，一个开源的、离网的、去中心化的网状网络，旨在运行于经济实惠、低功耗的设备上。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/wio_sx1262_xiao_esp32s3_for_meshtastic/">XIAO ESP32S3 用于 Meshtastic 和 LoRa</a></th>
			<th style={{width:333, height:'auto'}}>XIAO nRF52840 </th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://aws.amazon.com/iot-core/sidewalk/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/amazonsidewalk.png" style={{width:'auto', height:50}} /></a></div>

<span id="amazon_sidewalk"><strong><a href="https://aws.amazon.com/iot-core/sidewalk/">Amazon Sidewalk</a></strong></span>，一个加密的免费连接的长距离网络，为数十亿设备提供持续的连接。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao-ble-sidewalk/">XIAO nRF52840</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://www.blecon.net/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/blecon.png" style={{width:'auto', height:60}} /></a></div>

<span id="blecon"><strong><a href="https://www.blecon.net/">Blecon</a></strong></span>，使物理产品能够通过蓝牙低功耗与云应用程序通信。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://developer.blecon.net/modem-reference/boards-and-modules/seeed-xiao-nrf52840-breakout">XIAO nRF52840</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

## <span id="tinyml/embedded_machine_learningtinyml">TinyML/嵌入式机器学习平台</span>

<br></br>
<div><a href="https://sensecraft.seeed.cc/ai/#/home"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/sensecraft.png" style={{width:'auto', height:50}} /></a></div>

<span id="sensecraft_ai"><strong><a href="https://sensecraft.seeed.cc/ai/#/home">SenseCraft AI</a></strong></span>，<strong>您的无代码模型训练、部署等的一站式解决方案。</strong>
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32s3_edgelab/">XIAO ESP32S3 Sense (模型助手)</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://ai.google.dev/edge/litert"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/tensorflowlite.png" style={{width:'auto', height:50}} /></a></div>

<span id="tensorflow_lite"><strong><a href="https://ai.google.dev/edge/litert">TensorFlow Lite</a></strong></span>，Google 的高性能设备端 AI 运行时。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-BLE-Sense-TFLite-Getting-Started/">XIAO nRF52840 (Sense)</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://edgeimpulse.com/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/edgeimpulse.png" style={{width:'auto', height:50}} /></a></div>

<span id="edge_impulse"><strong><a href="https://edgeimpulse.com/">Edge Impulse</a></strong></span>，用于边缘设备机器学习的领先开发平台。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/Seeeduino-XIAO-TinyML/">XIAO SAMD21</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-RP2040-EI/">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAOEI/">XIAO nRF52840 (Sense)-运动识别</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/tinyml_course_Key_Word_Spotting/">XIAO ESP32S3 Sense (关键词识别)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/tinyml_course_Image_classification_project/">XIAO ESP32S3 Sense (图像分类)</a></th>
		</tr>
	</table>
</div>


## <span id="smart_home_and_automation">智能家居与自动化</span>

<br></br>
<div><a href="https://www.home-assistant.io/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/homoassiatant.png" style={{width:'auto', height:50}} /></a></div>
<div><a href="https://esphome.io/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/esphome.png" style={{width:'auto', height:50}} /></a></div>


<span id="home_assistant_esphome"><strong><a href="https://www.home-assistant.io/">Home Assistant</a> & <a href="https://esphome.io/">ESPHome</a></strong></span>，一个通过简单而强大的配置文件控制微控制器的系统，并通过 Home Assistant 等家庭自动化系统远程控制它们。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO_ESP32S3_esphome/">XIAO ESP32S3 Sense</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/Connect-Grove-to-Home-Assistant-ESPHome/#grove-compatibility-list-with-esphome">通过 ESPHome 将 XIAO ESP32 + Grove 传感器连接到 HA</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao-esp32c3-esphome/">XIAO ESP32C3 + mmWave 到 HA</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/Connect-Grove-to-Home-Assistant-ESPHome/">将 XIAO ESP32C3 添加到 ESPHome</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://github.com/arendst/Tasmota"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/tasmota.png" style={{width:'auto', height:50}} /></a></div>

<span id="tasmota"><strong><a href="https://github.com/arendst/Tasmota">Tasmota</a></strong></span>，一种适用于基于 ESP8266 和 ESP32 设备的替代开源固件，具有通过 webUI 轻松配置、OTA 更新、使用定时器或规则进行自动化、可扩展性以及通过 MQTT、HTTP、串口或 KNX 完全本地控制的功能。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://templates.blakadder.com/seeedstudio_XIAO_ESP32C3.html">XIAO ESP32C3</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://templates.blakadder.com/seeedstudio_XIAO_ESP32S3.html">XIAO ESP32S3</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://templates.blakadder.com/seeedstudio_XIAO_ESP32S3_SENSE.html">XIAO ESP32S3 (Sense)</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://templates.blakadder.com/seeedstudio_XIAO_ESP32C6.html">XIAO ESP32C6</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://templates.blakadder.com/seeedstudio_mmwave_sensor_kit.html">基于 XIAO ESP32C3 的人体检测传感器套件</a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

## <span id="open_source_keyboard_firmware_support">开源键盘固件支持</span>

<br></br>
<div><a href="https://qmk.fm/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/qmk.png" style={{width:'auto', height:50}} /></a></div>

<span id="qmk"><strong><a href="https://qmk.fm/">QMK</a></strong></span>，适用于 Atmel AVR 和 Arm USB 系列的开源键盘固件。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://github.com/PJE66/hummingbird">XIAO SAMD21</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://github.com/kilipan/hummingbird_qmk">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}>XIAO nRF52840 (Sense)</th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://zmk.dev/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/zmk.png" style={{width:'auto', height:50}} /></a></div>

<span id="zmk"><strong><a href="https://zmk.dev/">ZMK</a></strong></span>，基于 Zephyr™ 项目实时操作系统 (RTOS) 构建的开源键盘固件。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://zmk.dev/docs/hardware#seeed_xiao">XIAO SAMD21</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://zmk.dev/docs/hardware#seeed_xiao">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://zmk.dev/docs/hardware#seeed_xiao">XIAO nRF52840 (Sense)</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}>XIAO RP2350</th>
			<th style={{width:333, height:'auto'}}>XIAO MG24 (Sense)</th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>


## <span id="other_hot_applications">其他热门应用</span>

<br></br>
<div><a href="https://kno.wled.ge/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/wled.png" style={{width:'auto', height:50}} /></a></div>

<span id="wled"><strong><a href="https://kno.wled.ge/">WLED</a></strong></span>，一种快速且功能丰富的 ESP8266/ESP32 网络服务器实现，用于控制 NeoPixel (WS2812B, WS2811, SK6812) LED 或基于 SPI 的芯片组。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://www.instructables.com/WLED-ON-XIAO-ESP32/">XIAO ESP32 系列 (C3, S3, S3 Sense)</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://chatgpt.com/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/chatgtp.png" style={{width:'auto', height:50}} /></a></div>

<span id="chatgpt"><strong><a href="https://chatgpt.com/">ChatGPT</a></strong></span>，InstructGPT 的姊妹模型，经过训练以遵循提示中的指令并提供详细的响应。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiaoesp32c3-chatgpt/">XIAO ESP32C3</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://www.ffmpeg.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/ffmpeg.png" style={{width:'auto', height:50}} /></a></div>

<span id="ffmpeg"><strong><a href="https://www.ffmpeg.org/">FFmpeg</a></strong></span>，一组用于处理多媒体内容（如音频、视频、字幕及相关元数据）的库和工具。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://tutoduino.fr/tutoriels/esp32-timelapse/#google_vignette">XIAO ESP32S3 Sense</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://github.com/mROS-base/mros2-esp32"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/mrosbase.png" style={{width:'auto', height:50}} /></a></div>

<span id="mros2_esp32"><strong><a href="https://github.com/mROS-base/mros2-esp32">mROS2-ESP32</a></strong></span>，一种轻量级运行时环境，用于在嵌入式 ESP32 微控制器上运行 ROS 节点。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://github.com/mROS-base/mros2-esp32/issues/7">XIAO ESP32C3</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://github.com/mROS-base/mros2-esp32/issues/24">XIAO ESP32S3</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://github.com/mROS-base/mros2-esp32/issues/23">XIAO ESP32C6</a></th>
		</tr>
	</table>
</div>

## <span id="prototyping_tools_pcb_layout_stimulation">原型工具（PCB 布局与仿真）</span>

<br></br>
<div><a href="https://fritzing.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/fritzing.png" style={{width:'auto', height:50}} /></a></div>

<span id="fritzing"><strong><a href="https://fritzing.org/">Fritzing</a></strong></span>，一个为创客、爱好者和教育工作者设计的电子设计和原型开发平台。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20SAMD21(Seeeduino).fzpz">XIAO SAMD21</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20RP2040.fzpz">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20nRF52840(Sense).fzpz">XIAO nRF52840 (Sense)</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20ESP32C3.fzpz">XIAO ESP32C3</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20ESP32C6.fzpz">XIAO ESP32C6</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20ESP32S3(Sense).fzpz">XIAO ESP32S3 (Sense)</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20RP2350.fzpz">XIAO RP2350</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/Seeed%20Studio%20XIAO%20RA4M1.fzpz">XIAO RA4M1</a></th>
            <th style={{width:333, height:'auto'}}>XIAO MG24 (Sense)</th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://www.flux.ai/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/flux.png" style={{width:'auto', height:50}} /></a></div>

<span id="fluxai"><strong><a href="https://www.flux.ai/">FluxAI</a></strong></span>，一种通过 AI 助手构建专业 PCB 的更好方式。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}>XIAO SAMD21</th>
			<th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-rp2040">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-nrf52840">XIAO nRF52840</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-nrf52840-sense">XIAO nRF52840 Sense</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32c3">XIAO ESP32C3</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32s3">XIAO ESP32S3</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32s3-sense">XIAO ESP32S3 Sense</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32c6">XIAO ESP32C6</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-rp2350">XIAO RP2350</a></th>           
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-ra4m1">XIAO RA4M1</a></th>
            <th style={{width:333, height:'auto'}}>XIAO MG24 (Sense)</th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://wokwi.com/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/wokwi.png" style={{width:'auto', height:50}} /></a></div>

<span id="wokwi"><strong><a href="https://wokwi.com/">Wokwi</a></strong></span>，世界上最先进的 ESP32 仿真器。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wokwi.com/projects/410433244849526785">XIAO ESP32C3</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wokwi.com/projects/411276781876475905">XIAO ESP32S3 (Sense)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wokwi.com/projects/411265368570177537">XIAO ESP32C6</a></th>
		</tr>
	</table>
</div>


## <span id="iot_clouds_and_iot_platforms">物联网云与物联网平台</span>

<br></br>
<div><a href="https://aws.amazon.com/iot/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/awsiot.png" style={{width:'auto', height:50}} /></a></div>

<span id="aws_iot"><strong><a href="https://aws.amazon.com/iot/">AWS IoT</a></strong></span>，支持安全连接和管理设备，收集和分析设备数据，并构建和部署能够带来更高业务价值的解决方案。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32c6_aws_iot/">XIAO ESP32C6</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://thingspeak.mathworks.com/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/thingspeak.png" style={{width:'auto', height:70}} /></a></div>

<span id="thingspeak"><strong><a href="https://thingspeak.mathworks.com/">ThingSpeak</a></strong></span>，一个带有 MATLAB 分析功能的开放物联网平台。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://elchika.com/article/433216e7-90a9-4f59-bbb3-4a7531588140/">XIAO nRF52840</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://ubidots.com/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/ubidots.png" style={{width:'auto', height:50}} /></a></div>

<span id="ubidots"><strong><a href="https://ubidots.com/">Ubidots</a></strong></span>，一个低代码物联网开发平台，适合没有时间或精力构建完整生产级物联网应用的工程师和开发者。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/L76K_Path_Tracking_on_Ubidots/">XIAO ESP32S3 + L76K GNSS 模块用于路径追踪</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>