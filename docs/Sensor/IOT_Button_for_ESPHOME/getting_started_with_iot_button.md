---
description: Getting Started with Seeed Studio IoT Button
title: Getting Started with Seeed Studio IoT Button
keywords:
  - IoT Button
  - ESP32-C6
image: https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button_buzzer.webp
slug: /getting_started_with_seeed_iot_button
last_update:
  date: 04/08/2025
  author: Citric
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-IoT-Button-p-6419.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Introduction


The IoT Button is a versatile smart switch offering dual Home Assistant integrations through ESPHome and Zigbee. Powered by ESP32-C6, it features customizable RGB LED indicators, programmable event triggers, USB-C charging, and flexible mounting options - everything you need for intuitive smart home control.

### Features

- Home Assistant Ready 
- One Switch, Customizable Actions
- Reliable Power Supply
- Easy Mounting Solution
- Open for Customization

## Hardware Overview

Before everything starts, it is quite essential to have some basic parameters of the product. The following table provides information about the characteristics of IoT Button.

<div class="table-center">
	<table align="center">
		<tr>
			<th>Parameter</th>
			<th>Description</th>
		</tr>
		<tr>
			<td>MCU</td>
			<td>Espressif ESP32-C6</td>
		</tr>
		<tr>
			<td>Flash</td>
			<td>4MB</td>
		</tr>
        <tr>
			<td>LED</td>
			<td>User RGB LED: WS2812B (GPIO19 To use it, you need to enable GPIO18 at the same time.)<br />Charge LED: Green<br />User LED: Blue (GPIO2)</td>
		</tr>
        <tr>
			<td>Wireless</td>
			<td>2.4GHz Wi-Fi<br />Zigbee</td>
		</tr>
        <tr>
			<td>Battery</td>
			<td>3.6V Li-ion 18650 Rechargeable battery</td>
		</tr>
        <tr>
			<td>Charging Interface</td>
			<td>USB Type-C</td>
		</tr>
        <tr>
			<td>Battery Protection</td>
			<td>Reverse polarity protection</td>
		</tr>
        <tr>
			<td>Firmware Update</td>
			<td>Support OTA</td>
		</tr>
        <tr>
			<td>Dimensions</td>
			<td>92x32x25 mm</td>
		</tr>
	</table>
</div>



<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/3.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/4.png" style={{width:800, height:'auto'}}/></div>



## Getting Started

### Step 1: Initial Setup

When you first receive your IoT Button, it's essential to perform an initial activation step before use. Please follow these instructions:

1. Use a standard 5V USB Type-C data cable to connect the IoT Button to a power source
2. **This initial power connection is crucial as it activates the built-in battery**
3. **Without this activation step, the device will not function properly**

:::note
The IoT Button features a power-saving sleep mode:
- In unconfigured state: The device will enter sleep mode after 2 minutes of inactivity. A single button press is required to wake it up.

- After ESPHome configuration: The device will enter sleep mode 9 seconds after releasing the button to conserve battery. You may need to press the button once to wake it up before performing any button operations.
:::

The IoT Button comes pre-loaded with ESPHome-compatible firmware, so once activated, you can proceed directly to integrating it with Home Assistant following the steps below.

:::note
Make sure to use a compliant 5V USB Type-C cable for the activation process. Using non-standard cables may result in improper activation.
:::

### Step 2: Setting Up Home Assistant

1. **Installation**: For optimal performance, it's recommended to install [Home Assistant OS](https://www.home-assistant.io/installation/) on a Raspberry Pi. Follow the official installation guide on the Home Assistant website.

    :::tip install Home Assistant
    We have also written how to install Home Assistant for some of Seeed Studio products, please refer to them.

    - [Getting Started with Home Assistant on ODYSSEY-X86](/ODYSSEY-X86-Home-Assistant)
    - [Getting Started with Home Assistant on reTerminal](/reTerminal_Home_Assistant)
    - [Getting Started with Home Assistant on LinkStar H68K/reRouter CM4](/h68k-ha-esphome)
    :::

    Alternatively, you can click the button below to shop Home Assistant Green or Home Assistant Yellow to use Home Assistant directly.

    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html">
                <strong><span><font color={'FFFFFF'} size={"3"}>Home Assistant Green</font></span></strong>
        </a>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Yellow-Kit-with-selectable-CM4-p-5680.html">
                <strong><span><font color={'FFFFFF'} size={"3"}>Home Assistant Yellow</font></span></strong>
        </a>
    </div><br />

2. **Enabling ESPHome Add-on**:
   - Access the Home Assistant dashboard.
   - Navigate to the "Add-ons" section and search for the ESPHome add-on.
   - Click "Install" and then "Start" to enable it.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/5.png" style={{width:1000, height:'auto'}}/></div>

By gathering the necessary components and setting up Home Assistant with the ESPHome add-on, you'll be ready to proceed with the integration of the IoT Button.



### Step 3: Preparing the Kit

By default, your device comes pre-flashed with firmware for IoT Button. However, there are two scenarios where you may need to update the firmware:

1. **Re-flashing the Firmware**: If the existing firmware is corrupted or you need to start fresh.
2. **Upgrading the Firmware**: If there is a newer version of the firmware with improved functionality.

There are two simple methods for flashing the firmware:

<Tabs>
<TabItem value='Web Tool'>

You can use this [Web Tool](https://gadgets.seeed.cc/) for an easy and direct method to flash your firmware.

**Step 1**: Connect your IoT Button to your computer using a USB cable.

**Step 2**: Click the "Install" button on the Web Flasher page.

**Step 3**: Select the correct USB port from the popup dialog.

**Step 4**: The browser will automatically download and flash the firmware to your device.

If something goes wrong, follow the on-screen troubleshooting steps or switch to the `ESPHome Web` method to complete the process.

</TabItem>
<TabItem value='ESPHome Web'>

For this method, you'll need to download the `bin` firmware file from [here](https://github.com/Seeed-Studio/xiao-esphome-projects/releases)(you'll need to unzip the downloaded file).

1. Connect the IoT Button to your PC.
2. Visit the [ESPHome Web](https://web.esphome.io/) page.
3. Select the firmware file with the `*.factory.bin` suffix.

Watch the following video for a detailed walkthrough of flashing the firmware via ESPHome Web:

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="Install firmware via ESPHome Web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

</TabItem>
</Tabs>

With either method, you'll have your firmware updated and ready for integration with Home Assistant.

#### Connect to the kit's hotspot

With the firmware, you could power on the IoT Button, and a Wi-Fi access point will appear: `seeedstudio-iot-button`.

Navigate to `192.168.4.1` to configure your Home Assistant server's local network settings. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/opt-for-wifi-ap.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-enter-psw.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

### Step 4: Discovering and Adding the Device in Home Assistant {#discovering-and-adding-the-device-in-home-assistant}

In this section, we'll go through the process using the Home Assistant app, where the logic is the same as on the web.

1. **Open the App**: Once you launch the app, select your Home Assistant server. The app will automatically find your server.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-server-option.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

2. **Create an Account**: If you haven't created an account, you'll need to do so. After that, log in with your credentials.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-login.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

3. **Navigate to the Integration Page**: Once logged in, go to the "Integrations" page in Home Assistant. If you have installed the ESPHome add-on and both the IoT Button and your Home Assistant server are on the same network, you should see the device `Seeed Studio IoT Button` appear under discovered devices.

4. **Add the Device**: Click to add the device to your Home Assistant setup.
  
  Click the `CONFIGURE` button, confirm by pressing the `SUBMIT` button, and assign the device to your preferred area (e.g., Living Room). After this, the device will be managed through your ESPHome integration, enabling full control and monitoring in Home Assistant.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/18.png" style={{width:1000, height:'auto'}}/></div>

  :::note
  If the prompt does not require you to assign an area during the setup process, you can manually assign it later by navigating to the "Integrations" section in Home Assistant, selecting your device, and configuring the area from there.
  :::

## Creating Automations with the IoT Button

Now that your IoT Button is set up, you can create automations to control devices in your smart home. Let's create a simple automation that turns on a light when you press the button.

1. In Home Assistant, go to **Settings** > **Automations & scenes**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/21.png" style={{width:1000, height:'auto'}}/></div>

2. Click **CREATE AUTOMATION**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/22.png" style={{width:1000, height:'auto'}}/></div>

3. Set up your automation:

- **Name**: Give your automation a descriptive name, like "IoT Button Single Press - Turn On Light"
- **Trigger**: Select "State" as the trigger type
   - Entity: Select "Switch 1" (for single press)
   - From: "off"
   - To: "on"
- **Action**: Choose the device you want to control
   - For example, select a light and set it to turn on

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/23.png" style={{width:1000, height:'auto'}}/></div>

4. Click **SAVE** to create the automation.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/24.png" style={{width:1000, height:'auto'}}/></div>

## Advanced Usage: Controlling Different Devices with Different Press Patterns

One of the powerful features of the IoT Button configuration is the ability to detect different press patterns. Here are some ideas for using each pattern:

1. **Single Press (Switch 1)**:
   - Turn on/off lights in the current room
   - Toggle a frequently used device

2. **Double Press (Switch 2)**:
   - Activate a scene (e.g., "Movie Night" that dims lights and turns on the TV)
   - Control a group of devices simultaneously

3. **Long Press (Switch 3)**:
   - Activate security features (arm/disarm alarm)
   - Trigger emergency routines
   - Power off multiple devices at once

To set up these advanced automations, create additional automations following the steps above, but select the appropriate switch (Switch 1, 2, or 3) as the trigger and configure the desired actions.


## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

