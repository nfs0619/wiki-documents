---
description: Connect Seeed Studio IoT Button To Home Assistant via Zigbee
title: Connect Seeed Studio IoT Button To Home Assistant via Zigbee
keywords:
  - Zigbee
  - IoT Button
  - ESP32-C6
  - Home Assistant
image: https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.webp
slug: /seeed_iot_button_with_zigbee
last_update:
  date: 03/14/2025
  author: Citric
---

# Connect Seeed Studio IoT Button To Home Assistant via Zigbee

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.jpg" style={{width:600, height:'auto'}}/></div>

In this tutorial, we will show you how to connect the Seeed Studio IoT Button to Home Assistant using Zigbee. The Seeed Studio IoT Button features a built-in ESP32-C6 chip with Zigbee functionality, making it a versatile device for your smart home. You'll learn how to flash the Zigbee firmware, pair it with Home Assistant, and even customize the button's behavior through Arduino development.

## Materials Required

<div class="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio IoT Button</th>
      <th>Zigbee Coordinator (e.g., Home Assistant Connect ZBT-1)</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/ZBT-1.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-IoT-Button-p-6419.html">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-SkyConnect-p-5479.html">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

The Seeed Studio IoT Button is a versatile smart button with a built-in ESP32-C6 chip. It's a complete, standalone device that can be integrated with Home Assistant via Zigbee to control various devices and trigger automations. With its ESP32-C6 chip, it offers low power consumption and reliable connectivity.

## Overview of Zigbee on the IoT Button

The IoT Button uses the ESP32-C6 microcontroller which has built-in Zigbee functionality. This allows the button to:

1. Connect directly to Zigbee networks without additional hardware
2. Operate as a Zigbee End Device (ZED)
3. Send different commands based on button press patterns
4. Run on battery power for extended periods due to Zigbee's low power consumption

The button supports three different actions:
- **Single Click**: A quick press and release
- **Double Click**: Two quick presses within 400ms
- **Long Press**: Press and hold for more than 1 second (factory reset)

## Method 1: Using Pre-built Zigbee Firmware

The easiest way to get started is to use the pre-built Zigbee firmware for the IoT Button.

### Step 1: Download the Pre-built Firmware

1. Visit the [Seeed IoT Button GitHub repository](https://github.com/Seeed-Projects/Seeed_IoT_Button_Zigbee)
2. Navigate to the `Zigbee_Seeed_IoT_Button/build/factory_firmware_zigbee` directory
3. Download the firmware files:
   - `Zigbee_Seeed_IoT_Button.merged.bin` (for single-file flashing)
   - Or the individual files if you prefer to flash them separately

### Step 2: Install esptool.py

If you don't already have esptool.py installed, you can install it using pip:

```bash
pip install esptool
```

### Step 3: Flash the Firmware

1. Connect your IoT Button to your computer via USB
2. Put the device in bootloader mode (if necessary)
3. Flash the firmware using one of the following commands:

**Option 1: Using the merged binary file (recommended):**

```bash
esptool.py --chip esp32c6 --baud 921600 --before default_reset --after hard_reset write_flash 0x0 "Zigbee_Seeed_IoT_Button.merged.bin"
```

**Option 2: Using individual files:**

```bash
esptool.py --chip esp32c6 --baud 921600 --before default_reset --after hard_reset write_flash -z --flash_mode keep --flash_freq keep --flash_size keep 0x0 "Zigbee_Seeed_IoT_Button.bootloader.bin" 0x8000 "Zigbee_Seeed_IoT_Button.partitions.bin" 0xe000 "boot_app0.bin" 0x10000 "Zigbee_Seeed_IoT_Button.bin"
```

4. Wait for the flashing process to complete
5. The device will restart automatically

### Step 4: Set Up Zigbee in Home Assistant

Before pairing your IoT Button, you need to set up a Zigbee coordinator in Home Assistant:

1. **Install a Zigbee Coordinator**: Connect a Zigbee coordinator like the Home Assistant Connect ZBT-1 to your Home Assistant server
2. **Set Up Zigbee Home Automation (ZHA)**:
   - Go to Settings > Devices & Services
   - Click "Add Integration" and search for "Zigbee Home Automation"
   - Follow the prompts to set up ZHA with your coordinator

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/5.png" style={{width:1000, height:'auto'}}/></div>

### Step 5: Pair the IoT Button with Home Assistant

1. In Home Assistant, go to Settings > Devices & Services > Zigbee Home Automation
2. Click on your Zigbee coordinator device
3. Click "Add Device" to put the coordinator in pairing mode

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/15.png" style={{width:1000, height:'auto'}}/></div>

4. Press the button on your IoT Button to initiate pairing
5. Home Assistant should discover the IoT Button as "Seeed Studio IoT_Button"
6. Follow the prompts to complete the pairing process

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/iot_button_zigbee/2.png" style={{width:1000, height:'auto'}}/></div>

### Step 6: Create Automations in Home Assistant

Once paired, you can create automations based on the button's actions:

1. Go to Settings > Automations & Scenes > Create Automation
2. Select "Device" as the trigger type
3. Find your IoT Button in the device list
4. Select the trigger type:
   - "click_1" for single click
   - "click_2" for double click
5. Configure the actions you want to perform when the button is pressed
6. Save the automation

Example automation in Home Assistant YAML:

```yaml
automation:
  - alias: "IoT Button Single Click - Toggle Living Room Light"
    trigger:
      platform: device
      domain: mqtt
      device_id: [YOUR_DEVICE_ID]
      type: action
      subtype: click_1
    action:
      service: light.toggle
      target:
        entity_id: light.living_room
```

## Method 2: Developing Custom Zigbee Firmware with Arduino

If you want to customize the behavior of your IoT Button, you can develop your own Zigbee firmware using Arduino.

### Step 1: Set Up Arduino IDE for ESP32-C6

1. Install the latest version of Arduino IDE
2. Add ESP32 board support:
   - Go to File > Preferences
   - Add `https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json` to the "Additional Boards Manager URLs" field
   - Go to Tools > Board > Boards Manager
   - Search for "esp32" and install the latest version (at least 3.1.3)

### Step 2: Install Required Libraries

The IoT Button uses Espressif's Zigbee SDK which is included in the ESP32 Arduino package. No additional libraries are needed.

### Step 3: Configure Arduino IDE for Zigbee Development

1. Select the correct board:
   - Tools > Board > ESP32 Arduino > ESP32-C6 Dev Module
2. Configure Zigbee settings:
   - Tools > Zigbee mode > Zigbee Endpoint
   - Tools > Partition Scheme > Zigbee 4MB with spiffs

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/iot_button_zigbee/1.png" style={{width:800, height:'auto'}}/></div>

### Step 4: Set Up the Zigbee Multi-Button Files

1. Download the `ZigbeeMultiButton.h` and `ZigbeeMultiButton.cpp` files from the [Seeed IoT Button GitHub repository](https://github.com/Seeed-Projects/Seeed_IoT_Button_Zigbee/tree/main/Zigbee_Seeed_IoT_Button)
2. Copy these files to the Arduino Zigbee endpoint directory:
   ```
   <Arduino_Installation_Path>/libraries/Zigbee/src/ep/
   ```
3. Edit `<Arduino_Installation_Path>/libraries/Zigbee/src/Zigbee.h` to include the new header file:
   ```cpp
   // Add this line with the other endpoint includes
   #include "ep/ZigbeeMultiButton.h"
   ```

### Step 5: Create Your Custom Firmware

Create a new Arduino sketch and use the following code as a starting point:

```cpp
#ifndef ZIGBEE_MODE_ED
#error "Zigbee end device mode is not selected in Tools->Zigbee mode"
#endif

#include "Zigbee.h"

// Pin definitions
#define BUTTON_PIN 9  // GPIO9 for the button

// Zigbee endpoint configuration
#define BUTTON_ENDPOINT_ID 1

// Create a Zigbee Multi-Button endpoint
ZigbeeMultiButton zbButton = ZigbeeMultiButton(BUTTON_ENDPOINT_ID);

void setup() {
  // Initialize serial communication
  Serial.begin(115200);
  Serial.println("Seeed Studio IoT Button - Zigbee");
  
  // Initialize button pin
  pinMode(BUTTON_PIN, INPUT_PULLUP);
  
  // Configure the Zigbee button endpoint
  zbButton.setManufacturerAndModel("Seeed Studio", "IoT_Button");
  
  // Add the endpoint to Zigbee
  Zigbee.addEndpoint(&zbButton);
  
  // Create Zigbee configuration for End Device
  esp_zb_cfg_t zigbeeConfig = ZIGBEE_DEFAULT_ED_CONFIG();
  
  // Start Zigbee
  if (!Zigbee.begin(&zigbeeConfig, false)) {
    Serial.println("Zigbee failed to start!");
    Serial.println("Rebooting...");
    ESP.restart();
  }
  
  Serial.println("Connecting to Zigbee network");
  while (!Zigbee.connected()) {
    Serial.print(".");
    delay(100);
  }
  Serial.println("\nSuccessfully connected to Zigbee network");
}

// Variables for button state tracking
bool lastButtonState = HIGH;  // Button is pulled up when not pressed
unsigned long lastDebounceTime = 0;
unsigned long debounceDelay = 50;
unsigned long pressStartTime = 0;
bool isLongPress = false;
int clickCount = 0;
unsigned long lastClickTime = 0;
const unsigned long doubleClickWindow = 400;  // Time window for double click detection

void loop() {
  // Read the button state
  bool reading = digitalRead(BUTTON_PIN);
  
  // Debounce the button
  if (reading != lastButtonState) {
    lastDebounceTime = millis();
  }
  
  if ((millis() - lastDebounceTime) > debounceDelay) {
    // Button state has settled
    
    // Button pressed (LOW)
    if (reading == LOW && lastButtonState == HIGH) {
      pressStartTime = millis();
      isLongPress = false;
    }
    
    // Button released (HIGH)
    if (reading == HIGH && lastButtonState == LOW) {
      unsigned long pressDuration = millis() - pressStartTime;
      
      // Long press detection (for factory reset)
      if (pressDuration > 1000) {
        isLongPress = true;
        Serial.println("Long press detected - Factory Reset");
        Zigbee.factoryReset();
      } 
      // Short press detection (for click counting)
      else {
        clickCount++;
        lastClickTime = millis();
      }
    }
    
    lastButtonState = reading;
  }
  
  // Process click count after a delay
  if (clickCount > 0 && (millis() - lastClickTime) > doubleClickWindow) {
    if (clickCount == 1) {
      Serial.println("Single click detected");
      zbButton.sendButtonAction(1);  // Send single click event
    } else if (clickCount == 2) {
      Serial.println("Double click detected");
      zbButton.sendButtonAction(2);  // Send double click event
    }
    
    clickCount = 0;
  }
  
  // Allow Zigbee stack to process events
  delay(10);
}
```

### Step 6: Upload and Test Your Firmware

1. Connect your IoT Button to your computer via USB
2. Select the correct port in Arduino IDE
3. Click the Upload button
4. Open the Serial Monitor to view debug information
5. Follow the pairing steps from Method 1 to connect your button to Home Assistant

## Understanding the Zigbee Implementation

The IoT Button's Zigbee implementation uses the following components:

### ZigbeeMultiButton Class

This custom endpoint class extends the Zigbee functionality to support multiple button actions:

- It implements a Zigbee On/Off Switch device type
- It adds custom clusters to report button actions
- It provides methods to send different button events to the Zigbee network

### Button Action Detection

The firmware detects three types of button actions:

1. **Single Click**: A quick press and release
2. **Double Click**: Two quick presses within 400ms
3. **Long Press**: Press and hold for more than 1 second (used for factory reset)

### Zigbee Network Management

The firmware handles Zigbee network operations:

- Joining a Zigbee network automatically on startup
- Reporting button actions to the coordinator
- Factory resetting when a long press is detected

## Troubleshooting

If you encounter issues with your IoT Button's Zigbee functionality, try these troubleshooting steps:

### Pairing Issues

1. **Button not joining network**:
   - Make sure your Zigbee coordinator is in pairing mode
   - Ensure the coordinator is within range of the button
   - Try performing a factory reset by long-pressing the button

2. **Button not appearing in Home Assistant**:
   - Check that ZHA is properly configured
   - Verify that your coordinator is working correctly
   - Try restarting the ZHA integration

### Button Action Issues

1. **Button actions not detected**:
   - Check the serial output for debugging information
   - Verify that the button is properly connected to GPIO9
   - Ensure the button is properly paired with your Zigbee network

2. **Automations not triggering**:
   - Verify that the automation is correctly configured
   - Check the Zigbee logs in Home Assistant for incoming events
   - Make sure the button is within range of your coordinator

## Advanced Customization

You can further customize your IoT Button by modifying the firmware:

### Changing Button Behavior

You can modify the `loop()` function to detect different button patterns:

- Add triple-click detection
- Change the timing parameters for different press patterns
- Implement hold-and-release patterns

### Adding Battery Monitoring

The ESP32-C6 can monitor battery voltage. Add this functionality to report battery levels to Home Assistant:

```cpp
// Add to setup()
zbButton.setPowerSource(ZB_POWER_SOURCE_BATTERY, 100);  // Initial battery level

// Add to loop() periodically
int batteryLevel = readBatteryLevel();  // Implement this function
zbButton.setBatteryLevel(batteryLevel);
```

### Adding LED Feedback

You can use an LED to provide feedback for button actions:

```cpp
#define LED_PIN 8  // Example LED pin

// Add to setup()
pinMode(LED_PIN, OUTPUT);

// Add LED feedback when actions are detected
digitalWrite(LED_PIN, HIGH);
delay(100);
digitalWrite(LED_PIN, LOW);
```

## Conclusion

The Seeed Studio IoT Button with Zigbee functionality offers a versatile and power-efficient way to control your smart home. Whether you use the pre-built firmware or develop your own custom solution, the button provides a simple interface for triggering complex automations in Home Assistant.

By leveraging the ESP32-C6's built-in Zigbee capabilities, the IoT Button can operate for extended periods on battery power while maintaining reliable connectivity with your smart home ecosystem.

## Troubleshooting

### Q1: Why does my device keep dropping out and not being able to connect to the internet after replacing the battery? I can confirm that the battery is charged.

After the battery has been removed, due to the chip protection strategy of the 18650 battery, it needs to be activated a bit by a charged USB power cable to work properly.

## Resources

- **[GITHUB]** [Seeed IoT Button Github Zigbee Repository](https://github.com/Seeed-Projects/Seeed_IoT_Button_Zigbee)
- **[GITHUB]** [Seeed IoT Button Github ESPHome Repository](https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/seeedstudio-iot-button)
- **[PDF]** [Seeed IoT Button SCH PDF](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed_IoT_Button_SCH.pdf)
- **[SCH&PCB]** [Seeed IoT Button SCH & PCB](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed_IoT_Button_SCH&PCB.zip)

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