---
description: The XIAO ESP32C3-powered 7.5-inch E-Ink Display is a compact, energy-efficient solution for showcasing data via Arduino. 
title: Works with Arduino
keywords:
- ePaper display
- arduino
image: https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/cover2.webp
slug: /xiao_075inch_epaper_panel_arduino
sidebar_position: 3
last_update:
  date: 03/26/2025
  author: Allen
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/203.png" style={{width:900, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html"><strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>


## Overview

The XIAO 7.5" ePaper Panel can be programmed using the Arduino IDE, making it accessible for makers and developers familiar with the Arduino ecosystem. This guide will walk you through setting up the Arduino development environment and getting started with basic examples.

The ePaper Panel features:

- 7.5" monochrome ePaper display with 800x480 resolution
- XIAO ESP32-C3 microcontroller for wireless connectivity
- Built-in 2000mAh battery for portable use
- USB Type-C interface for programming and power
- Compact design with integrated stand

Through Arduino programming, you can:

- Display text and graphics
- Create custom user interfaces
- Show real-time data and sensor readings
- Build interactive applications
- Implement low-power applications leveraging ePaper's zero power retention

This guide covers the initial setup process and provides example code to help you start developing your own Arduino applications for the ePaper Panel.



## Getting Started

### Step 1. Download Arduino IDE

First, if you don't have Arduino IDE yet, please go to [Arduino IDE](https://www.arduino.cc/en/software) and download the latest version. 

:::tip
If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::

### Step 2. Install ESP32 Board Support

Go to **File** -> **Preferences** and add the following URL to **Additional Boards Manager URLs**, [click here to see detail steps.](http://localhost:3000/XIAO_ESP32C3_Getting_Started/#software-setup)

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

### Step 3. Install Seeed Arduino LCD Library

:::tip
This library has same function as TFT library and no compatible with this library. If you have installed TFT library, please uninstall it first.
:::

Download and install the Seeed Arduino LCD library from GitHub.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/50.png" style={{width:800, height:'auto'}}/></div>  

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Click here to download</button></p>
</a>
</div>

After downloading the library, go to **Sketch** -> **Include Library** -> **Add .ZIP Library** and select the downloaded library.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

There are 4 basic examples, open a basic example you like:
1. Bitmap: Display a bitmap image.
2. Clock: Display a clock.
3. Clock_digital: Display a digital clock.
4. Shape: Display different sizes of words and shape randomly.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/52.png" style={{width:800, height:'auto'}}/></div>

### Step 4. Upload the Code

Before uploading the code, you need to open **User_Setup_Select.h** in Seeed_Arduino_LCD library.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/53.png" style={{width:800, height:'auto'}}/></div>

Comment line 160 and uncomment line 163 and then **save the file**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/54.png" style={{width:800, height:'auto'}}/></div>

After that, go to **Tools** -> **Board** -> **Seeeduino XIAO ESP32C3** and **Tools** -> **Port** -> **Select the port your board is connected to**. Then click **Upload** to upload the code.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/55.png" style={{width:800, height:'auto'}}/></div>

Now you will see the feedback in your epaper screen! Following are the results of Bitmap and Clock examples.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/56.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/57.png" style={{width:800, height:'auto'}}/></div>

## Resources

- **[STP]**: [3D Model enclosure](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3D_model.zip)
- **[PDF]**: [ePaper Driver Board SCH PDF](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)


## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
