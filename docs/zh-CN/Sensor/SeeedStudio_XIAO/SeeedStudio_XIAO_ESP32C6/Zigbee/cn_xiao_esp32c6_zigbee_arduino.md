---
description: 在本教程中，我们将探索使用 XIAO ESP32C6 开发板进行 Zigbee 应用开发的旅程。XIAO ESP32C6 是一款紧凑而强大的开发板，搭载 ESP32-C6 芯片，提供集成的 Wi-Fi 和蓝牙低功耗 (BLE) 连接。通过利用 ESP Zigbee SDK，我们可以充分发挥 XIAO ESP32C6 的潜力，并扩展其功能以支持 Zigbee。
title: XIAO ESP32C6 Zigbee 快速入门指南 (Arduino)
image: https://files.seeedstudio.com/wiki/xiaoc6_zigbee/3.webp
slug: /cn/xiao_esp32c6_zigbee_arduino
last_update:
  date: 05/15/2025
  author: Spencer
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 概述

本教程将指导您在 Seeed Studio **XIAO ESP32C6** 开发板上实现 [Zigbee](https://en.wikipedia.org/wiki/Zigbee) 应用。该开发板搭载 ESP32-C6 芯片，结合了 **Wi-Fi**、**蓝牙低功耗 (BLE)** 和 **Zigbee** 连接，非常适合 **物联网应用**。本指南中的示例使用 **esp-arduino Zigbee SDK** 来实现 Zigbee 功能。

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/0.png"
    style={{ width: 680, height: 'auto', "border-radius": '12.8px' }}
  />
</div>

### 您将学到什么

:::note 前提条件：Arduino 开发环境设置

如果您尚未准备好 Arduino IDE，请参考 **[入门指南](https://chatgpt.com/xiao_esp32c6_getting_started/#software-preparation)**。确保 **esp-arduino 板卡版本**为 **v3.0.6 或更高**，以支持 Zigbee 功能。

:::

本指南专注于使用 XIAO ESP32C6 的 Zigbee 功能的核心内容，确保您清晰理解其实际应用：

1. [Zigbee 概述](#zigbee_overview)：了解 Zigbee 协议及其网络结构。
2. [Zigbee Arduino 示例](#examples)：在 ESP32-C6 上实现 Zigbee 示例，如灯泡和开关。

## Zigbee 概述 {#zigbee_overview}

Zigbee 是一种基于 IEEE 802.15.4 标准的 **低功耗**、**低带宽**无线通信协议。它专为 **物联网场景**（如 **家庭自动化**、**智慧城市** 和 **工业控制**）设计，提供强大的网状网络功能，可在动态环境中实现可靠通信。

### Zigbee 数据模型

Zigbee 通信依赖于 **Zigbee Cluster Library (ZCL)**，定义了设备如何组织其功能并进行交互。关键组成部分包括：

1. **设备类型**
   Zigbee 设备（如开关、传感器、灯具）具有预定义的特定行为，并分组到功能性 **Cluster** 中。

2. **Cluster**
   Cluster 是以下内容的逻辑分组：

   - **属性 (Attributes)**：表示设备状态，例如亮度或温度。
   - **命令 (Commands)**：触发操作，例如打开灯或将亮度设置为 50%。

   示例：

   - **开关 Cluster (On/Off Cluster)**：控制二进制状态，如电源。
   - **亮度控制 Cluster (Level Control Cluster)**：调整强度或亮度。
   - **温度测量 Cluster (Temperature Measurement Cluster)**：发送温度读数。
   - **场景 Cluster (Scenes Cluster)**：保存和调用预设配置。

3. **属性与命令**
   属性存储设备数据（例如状态、配置），而命令用于启动操作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/datamodel.png" style={{width:800, height:'auto'}}/></div>

### Zigbee 网络架构

一个 Zigbee 网络由三种主要节点类型组成：

1. **Zigbee 协调器 (ZC)**  
   - 作为网络的中心枢纽。  
   - 负责网络创建、设备认证和地址分配。  
   - 负责初始化和管理网络。  
   - 每个 Zigbee 网络只能有 **一个协调器**。  

2. **Zigbee 路由器 (ZR)**  
   - 通过在设备之间中继消息来扩展网络范围。  
   - 支持其他设备加入网络。  
   - 通常使用市电供电，以确保持续运行和可靠的消息中继。  
   - 路由器也可以使用电池供电，但由于更高的能耗需求较少见。  

3. **Zigbee 终端设备 (ZED)**  
   - 轻量级且节能的设备，与父节点（协调器或路由器）通信。  
   - 不会向其他设备路由消息。  
   - 优化为电池供电，通常进入睡眠模式以节省能源。

:::note

- **地址分配与路由**：
  - Zigbee 使用 16 位地址方案。设备通过直接或间接地址进行通信。  
  - 路由决策由路由器使用诸如 AODV（按需距离矢量）等算法进行。  

- **电源管理**：
  - Zigbee 终端设备经过优化以实现低功耗。它们通常处于睡眠模式，仅在需要时唤醒。  
  - 路由器和协调器通常使用市电供电，以确保持续可用性。

:::

#### 网络拓扑结构

根据应用需求和环境，Zigbee 支持三种主要网络拓扑结构：

#### 1. 网状拓扑 (Mesh Topology)

- 一个协调器和多个路由器组成一个自愈、可靠的网络。  
- 如果通信路径中断，设备可以动态重新路由消息，确保高可靠性。  
- 非常适合需要广覆盖和冗余的大规模网络。  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNptkcEOgjAQRH9lsydI5CDcuIo_oJ5MLxu6AlG6pLYmxvjvVlFSgj3NtG9nmvaBtWjGEgGgsTS0cKiUgXFtRKzuDDmxSRKZNIUsy2An3rFdJ8koYJ2m_0YjNp_YPGK_OR9ua3TFt67mEBs0jGYWHeOjLqbYYsHlMff3bKrMZ5XLGxZzvJjhoRlX2LPtqdPhPR_vYYWu5Z4VlkFqsmeFyjwDR97J_m5qLJ31vEIrvml_xg-aHFcdhQ_psTzR5Rp2BzJHkZ9_vgDkroUg" style={{width:380, height:'auto', "border-radius": '1px'}}/></div>

- **主要特点**：  
  - 动态重新路由确保高可靠性。  
  - 支持大规模网络，具有可扩展覆盖范围。  
  - 自愈机制提高容错能力。  

#### 2. 树形拓扑 (Tree Topology)

- 协调器作为层级结构的根节点，路由器形成分支。  
- 每个分支可以拥有多个终端设备或额外的路由器，形成树状结构。  
- 通信依赖于层级路径，这可能引入单点故障风险。  

<div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNqF0MEKwjAMBuBXCTmt4A5OT7s6X0A9SS9hjW7omlFbQcR3tzqVFQV7yl--_IdcsRbDWCIA7B31DWwqbWF4CxFnWkteXJaNglKQ5zmsJHh20ywbBpgq9Wt1ZIuPLUb21fN0S2sqPrc1x9o4wxCS6p-8SPh3e5HyWcJn__g84XOlcIIdu45aE093fSxr9A13rLGMoyF30KjtLToKXtYXW2PpXeAJOgn7BssdHU8xhd6Q56qlePzu89uT3Yq88-0OO1R_gA" style={{width:600, height:'auto', "border-radius": '1px'}}/></div>

- **主要特点**:  
  - 适用于结构化环境。  
  - 比网状网络更容易设置和管理。  
  - 易受分支故障影响，可能导致整个子网络断开。  

#### 3. 星型拓扑

- 所有设备直接与协调器通信。  
- 部署简单，但协调器是单点故障。  
- 最适合设备靠近协调器的小型网络。  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNqNkMEKwjAMhl8l5LTCdth269X5BHqSXsIat6JtR20FGXt3K0Nx4MGc_i_kCyEz9l4zSgSAIdA0wrFTDtbaeR-0cRR9KIovEAKqqoK90x3fTc91UeQMK0AtxK8NW6XZKM0_SrtRWiGwRMvBktH5_vm1QGEc2bJCmaOmcFGo3JLnKEV_eLgeZQyJSww-DSPKM11vmdKkKXJnKH_AfroTuZP3b16etDldgQ" style={{width:480, height:'auto', "border-radius": '1px'}}/></div>

- **主要特点**:  
  - 设置和管理简单。  
  - 由于范围和设备容量限制，扩展性有限。  
  - 对协调器的通信依赖降低了容错能力。  

在快速了解这些概念后，让我们开始在 XIAO ESP32C6 上进行 Zigbee 开发吧。

## Arduino 示例 {#examples}

参考 [Zigbee 示例 - Arduino](https://github.com/espressif/arduino-esp32/tree/master/libraries/Zigbee/examples)

### 示例 1: 灯泡和灯开关 {#Light_Bulb_switch}

首先，准备两个 XIAO ESP32C6，一个作为 **Zigbee 灯泡**，另一个作为 **Zigbee 灯开关**。

使用 `Zigbee_On_Off_Light` 和 `Zigbee_On_Off_Switch` 示例来了解 Zigbee 设备在实际场景中的交互方式。准备好了吗？让我们开始开发吧！

#### Zigbee 灯泡

确保您选择了 `Zigbee ED(end device)` 作为 Zigbee 模式。

一些常量：

```cpp
#define LED_PIN               LED_BUILTIN
#define BUTTON_PIN            9  // ESP32-C6/H2 启动按钮
#define ZIGBEE_LIGHT_ENDPOINT 10
```

- `LED_PIN` 用于控制内置 LED。
- `BUTTON_PIN` 用于出厂重置按钮。
- `ZIGBEE_LIGHT_ENDPOINT` 表示灯泡的 Zigbee 端点，类似于网络中的服务标识符。

##### 定义 Zigbee 灯设备

```cpp
ZigbeeLight zbLight = ZigbeeLight(ZIGBEE_LIGHT_ENDPOINT);
```

此行定义了一个带有端点 ID 的 `ZigbeeLight` 对象。端点用于表示 Zigbee 设备中的不同功能。

##### 设备状态控制函数

`setLED()` 函数控制 LED 状态：

```cpp
void setLED(bool value) {
  digitalWrite(LED_PIN, value);
}
```

`setLED()` 函数接受一个布尔值，根据输入值打开或关闭 LED。

##### `setup()` 函数

`setup()` 函数初始化设备，包括 LED、按钮和 Zigbee 设置。

```cpp
void setup() {
  pinMode(LED_PIN, OUTPUT);
  digitalWrite(LED_PIN, LOW);
```

首先，我们将 LED 引脚配置为输出，并初始关闭。

```cpp
  pinMode(BUTTON_PIN, INPUT_PULLUP);
```

按钮引脚配置为带内部上拉电阻的输入。

```cpp
  zbLight.setManufacturerAndModel("Espressif", "ZBLightBulb");
```

设置设备的制造商和型号名称，有助于在 Zigbee 网络中识别设备。

```cpp
  zbLight.onLightChange(setLED);
```

注册 `setLED()` 作为回调函数，当灯状态发生变化时调用。

```cpp
  Zigbee.addEndpoint(&zbLight);
```

将 `zbLight` 添加为 Zigbee 核心的端点。这允许其他 Zigbee 设备与此端点交互。

```cpp
  Zigbee.begin();
```

最后，我们调用 `Zigbee.begin()` 初始化 Zigbee 栈，并将设备作为网络中的终端设备启动。

##### `loop()` 函数

主循环处理按钮按下以执行出厂重置：

```cpp
void loop() {
  if (digitalRead(BUTTON_PIN) == LOW) {
    delay(100);  // 按键防抖处理
    int startTime = millis();
    while (digitalRead(BUTTON_PIN) == LOW) {
      delay(50);
      if ((millis() - startTime) > 3000) {
        Serial.printf("正在重置 Zigbee 到出厂设置，重启中。\n");
        Zigbee.factoryReset();
      }
    }
  }
  delay(100);
}
```

此代码检查按钮是否被按下：

- 如果按下，等待 100 毫秒（用于防抖处理）。
- 如果按钮持续按下超过 3 秒，通过调用 `Zigbee.factoryReset()` 触发出厂重置。

当用户需要因网络或配对问题重新配置设备时，此功能非常有用。

:::tip
官方例程仍在不断更新中，我们的文档可能无法第一时间同步最新程序，如有差异，请参考 **[Espressif 的程序示例](https://github.com/espressif/arduino-esp32/blob/3.0.7/libraries/Zigbee/examples/Zigbee_On_Off_Light/Zigbee_On_Off_Light.ino)**。
:::

```cpp title=Zigbee_On_Off_Light.ino showLineNumbers
#ifndef ZIGBEE_MODE_ED
#error "未在 Tools->Zigbee mode 中选择 Zigbee 终端设备模式"
#endif

#include "ZigbeeCore.h"
#include "ep/ZigbeeLight.h"

#define LED_PIN               LED_BUILTIN
#define BUTTON_PIN            9  // ESP32-C6/H2 启动按钮
#define ZIGBEE_LIGHT_ENDPOINT 10

ZigbeeLight zbLight = ZigbeeLight(ZIGBEE_LIGHT_ENDPOINT);

/********************* RGB LED 函数 **************************/
void setLED(bool value) {
  digitalWrite(LED_PIN, value);
}

/********************* Arduino 函数 **************************/
void setup() {
  // 初始化 LED 并关闭 (如果 LED_PIN == RGB_BUILTIN，将在底层使用 rgbLedWrite())
  pinMode(LED_PIN, OUTPUT);
  digitalWrite(LED_PIN, LOW);

  // 初始化按钮用于出厂重置
  pinMode(BUTTON_PIN, INPUT_PULLUP);

  // 可选：设置 Zigbee 设备名称和型号
  zbLight.setManufacturerAndModel("Espressif", "ZBLightBulb");

  // 设置灯状态变化的回调函数
  zbLight.onLightChange(setLED);

  // 将端点添加到 Zigbee 核心
  log_d("将 ZigbeeLight 端点添加到 Zigbee 核心");
  Zigbee.addEndpoint(&zbLight);

  // 当所有端点注册完成后，启动 Zigbee。默认作为 ZIGBEE_END_DEVICE
  log_d("调用 Zigbee.begin()");
  Zigbee.begin();
}

void loop() {
  // 检查按钮用于出厂重置
  if (digitalRead(BUTTON_PIN) == LOW) {  // 按钮被按下
    // 按键防抖处理
    delay(100);
    int startTime = millis();
    while (digitalRead(BUTTON_PIN) == LOW) {
      delay(50);
      if ((millis() - startTime) > 3000) {
        // 如果按钮按下超过 3 秒，重置 Zigbee 并重启
        Serial.printf("正在重置 Zigbee 到出厂设置，重启中。\n");
        Zigbee.factoryReset();
      }
    }
  }
  delay(100);
}
```

#### Zigbee 灯光开关

在这里，XIAO ESP32C6 作为 **Zigbee Coordinator**（Zigbee 协调器），负责控制其他 Zigbee 设备。而 **Zigbee Switch**（Zigbee 开关）则作为控制器，通过绑定到 Zigbee 灯光设备并发送命令（如开灯或关灯）来控制它。

##### 包含和定义

```cpp
#include "ZigbeeCore.h"
#include "ep/ZigbeeLight.h"

#define SWITCH_ENDPOINT_NUMBER 5
#define GPIO_INPUT_IO_TOGGLE_SWITCH 9
#define PAIR_SIZE(TYPE_STR_PAIR) (sizeof(TYPE_STR_PAIR) / sizeof(TYPE_STR_PAIR[0]))
```

- `SWITCH_ENDPOINT_NUMBER` 被定义为 `5`，表示开关的端点编号。与灯泡示例类似，端点编号用于定义 Zigbee 设备中的特定功能。
- `GPIO_INPUT_IO_TOGGLE_SWITCH` 指的是 GPIO 引脚 `9`，它作为开关按钮。
- `PAIR_SIZE()` 是一个宏，用于计算给定数组的大小，这里用于处理按钮配置。

##### 开关配置类型和功能

代码定义了与开关功能相关的多个枚举和数据结构：

```cpp
typedef enum {
  SWITCH_ON_CONTROL,
  SWITCH_OFF_CONTROL,
  SWITCH_ONOFF_TOGGLE_CONTROL,
  SWITCH_LEVEL_UP_CONTROL,
  SWITCH_LEVEL_DOWN_CONTROL,
  SWITCH_LEVEL_CYCLE_CONTROL,
  SWITCH_COLOR_CONTROL,
} SwitchFunction;

typedef struct {
  uint8_t pin;
  SwitchFunction func;
} SwitchData;

typedef enum {
  SWITCH_IDLE,
  SWITCH_PRESS_ARMED,
  SWITCH_PRESS_DETECTED,
  SWITCH_PRESSED,
  SWITCH_RELEASE_DETECTED,
} SwitchState;
```

- **`SwitchFunction`** 枚举了开关可以执行的不同功能，例如开灯、关灯、切换、调节亮度等。
- **`SwitchData`** 是一个结构体，将 GPIO 引脚与特定功能配对，这在添加具有不同功能的多个按钮时可以更好地组织。
- **`SwitchState`** 表示用户交互过程中开关的不同状态（例如空闲、按下、释放）。

##### 实例化 Zigbee 开关

```cpp
static SwitchData buttonFunctionPair[] = {{GPIO_INPUT_IO_TOGGLE_SWITCH, SWITCH_ONOFF_TOGGLE_CONTROL}};
ZigbeeSwitch zbSwitch = ZigbeeSwitch(SWITCH_ENDPOINT_NUMBER);
```

- **`buttonFunctionPair`** 是一个数组，用于定义按钮的功能。在这里，连接到 `GPIO 9` 的按钮将用于切换灯光的开关状态。
- **`zbSwitch`** 创建了一个 `ZigbeeSwitch` 的实例，端点编号为 `5`。

##### Zigbee 功能和 GPIO 中断处理

```cpp
static void onZbButton(SwitchData *button_func_pair) {
  if (button_func_pair->func == SWITCH_ONOFF_TOGGLE_CONTROL) {
    zbSwitch.lightToggle();  // 发送切换命令到灯光。
  }
}
```

**`onZbButton()`** 在按钮被按下时调用。在这种情况下，它发送一个 Zigbee 命令来切换灯光。

###### 处理 GPIO 事件

```cpp
static void IRAM_ATTR onGpioInterrupt(void *arg) {
  xQueueSendFromISR(gpio_evt_queue, (SwitchData *)arg, NULL);
}
```

**`onGpioInterrupt()`** 是用于处理 GPIO 引脚中断的中断服务程序（ISR）。每当按钮被按下时，它会将一个事件放入队列中。

```cpp
static void enableGpioInterrupt(bool enabled) {
  for (int i = 0; i < PAIR_SIZE(buttonFunctionPair); ++i) {
    if (enabled) {
      enableInterrupt((buttonFunctionPair[i]).pin);
    } else {
      disableInterrupt((buttonFunctionPair[i]).pin);
    }
  }
}
```

**`enableGpioInterrupt()`** 根据参数 `enabled` 的值为 `true` 或 `false` 来启用或禁用 GPIO 中断。

##### Setup 函数

```cpp
void setup() {
  Serial.begin(115200);
  while (!Serial) {
    delay(10);
  }

  zbSwitch.setManufacturerAndModel("Espressif", "ZigbeeSwitch");
  zbSwitch.allowMultipleBinding(true);

  Zigbee.addEndpoint(&zbSwitch);
  Zigbee.setRebootOpenNetwork(180);

  for (int i = 0; i < PAIR_SIZE(buttonFunctionPair); i++) {
    pinMode(buttonFunctionPair[i].pin, INPUT_PULLUP);
    gpio_evt_queue = xQueueCreate(10, sizeof(SwitchData));
    if (gpio_evt_queue == 0) {
      log_e("Queue was not created and must not be used");
      while (1);
    }
    attachInterruptArg(buttonFunctionPair[i].pin, onGpioInterrupt, (void *)(buttonFunctionPair + i), FALLING);
  }

  Zigbee.begin(ZIGBEE_COORDINATOR);

  Serial.println("Waiting for Light to bound to the switch");
  while (!zbSwitch.isBound()) {
    Serial.printf(".");
    delay(500);
  }

  std::list<zb_device_params_t *> boundLights = zbSwitch.getBoundDevices();
  for (const auto &device : boundLights) {
    Serial.printf("Device on endpoint %d, short address: 0x%x\n", device->endpoint, device->short_addr);
    Serial.printf(
      "IEEE Address: %02X:%02X:%02X:%02X:%02X:%02X:%02X:%02X\n", device->ieee_addr[0], device->ieee_addr[1], device->ieee_addr[2], device->ieee_addr[3],
      device->ieee_addr[4], device->ieee_addr[5], device->ieee_addr[6], device->ieee_addr[7]
    );
    Serial.printf("Light manufacturer: %s", zbSwitch.readManufacturer(device->endpoint, device->short_addr));
    Serial.printf("Light model: %s", zbSwitch.readModel(device->endpoint, device->short_addr));
  }
  Serial.println();
}
```

- **串口通信初始化**：初始化串口用于调试。
- **设备信息**：设置制造商和型号，允许绑定多个设备，并将一个端点添加到 Zigbee 核心。
- **网络初始化**：在重启后打开 Zigbee 网络 `180` 秒以允许设备加入。
- **按钮初始化**：设置按钮的 GPIO 引脚，创建队列以处理 GPIO 中断，并将中断附加到按钮。
- **等待绑定**：协调器等待与灯光设备绑定后再继续。一旦绑定，它会打印绑定设备的信息。

##### Loop 函数

```cpp
void loop() {
  uint8_t pin = 0;
  SwitchData buttonSwitch;
  static SwitchState buttonState = SWITCH_IDLE;
  bool eventFlag = false;

  if (xQueueReceive(gpio_evt_queue, &buttonSwitch, portMAX_DELAY)) {
    pin = buttonSwitch.pin;
    enableGpioInterrupt(false);
    eventFlag = true;
  }
  while (eventFlag) {
    bool value = digitalRead(pin);
    switch (buttonState) {
      case SWITCH_IDLE:           buttonState = (value == LOW) ? SWITCH_PRESS_DETECTED : SWITCH_IDLE; break;
      case SWITCH_PRESS_DETECTED: buttonState = (value == LOW) ? SWITCH_PRESS_DETECTED : SWITCH_RELEASE_DETECTED; break;
      case SWITCH_RELEASE_DETECTED:
        buttonState = SWITCH_IDLE;
        (*onZbButton)(&buttonSwitch);
        break;
      default: break;
    }
    if (buttonState == SWITCH_IDLE) {
      enableGpioInterrupt(true);
      eventFlag = false;
      break;
    }
    vTaskDelay(10 / portTICK_PERIOD_MS);
  }

  static uint32_t lastPrint = 0;
  if (millis() - lastPrint > 10000) {
    lastPrint = millis();
    zbSwitch.printBoundDevices();
  }
}
```

- **loop 函数**通过读取中断队列 (`gpio_evt_queue`) 来管理按钮按下事件，并相应地更新 `buttonState`。
- 当按钮被按下并释放（`SWITCH_RELEASE_DETECTED`）时，会调用 `onZbButton()` 回调函数来切换灯光状态。
- 每隔 **10 秒**，会打印绑定的灯光信息以便进行监控。

:::tip
官方例程仍在不断更新中，我们的文档可能无法第一时间同步最新的程序。如果有任何不一致，请参考 **[Espressif 的程序示例](https://github.com/espressif/arduino-esp32/blob/3.0.7/libraries/Zigbee/examples/Zigbee_On_Off_Switch/Zigbee_On_Off_Switch.ino)**。
:::

```cpp title=Zigbee_On_Off_Switch.ino showLineNumbers
#ifndef ZIGBEE_MODE_ZCZR
#error "Zigbee coordinator mode is not selected in Tools->Zigbee mode"
#endif

#include "ZigbeeCore.h"
#include "ep/ZigbeeLight.h"

#define SWITCH_ENDPOINT_NUMBER 5

/* 开关配置 */
#define GPIO_INPUT_IO_TOGGLE_SWITCH 9
#define PAIR_SIZE(TYPE_STR_PAIR)    (sizeof(TYPE_STR_PAIR) / sizeof(TYPE_STR_PAIR[0]))

typedef enum {
  SWITCH_ON_CONTROL,
  SWITCH_OFF_CONTROL,
  SWITCH_ONOFF_TOGGLE_CONTROL,
  SWITCH_LEVEL_UP_CONTROL,
  SWITCH_LEVEL_DOWN_CONTROL,
  SWITCH_LEVEL_CYCLE_CONTROL,
  SWITCH_COLOR_CONTROL,
} SwitchFunction;

typedef struct {
  uint8_t pin;
  SwitchFunction func;
} SwitchData;

typedef enum {
  SWITCH_IDLE,
  SWITCH_PRESS_ARMED,
  SWITCH_PRESS_DETECTED,
  SWITCH_PRESSED,
  SWITCH_RELEASE_DETECTED,
} SwitchState;

static SwitchData buttonFunctionPair[] = {{GPIO_INPUT_IO_TOGGLE_SWITCH, SWITCH_ONOFF_TOGGLE_CONTROL}};

ZigbeeSwitch zbSwitch = ZigbeeSwitch(SWITCH_ENDPOINT_NUMBER);

/********************* Zigbee 函数 **************************/
static void onZbButton(SwitchData *button_func_pair) {
  if (button_func_pair->func == SWITCH_ONOFF_TOGGLE_CONTROL) {
    // 发送切换命令到灯光
    zbSwitch.lightToggle();
  }
}

/********************* GPIO 函数 **************************/
static QueueHandle_t gpio_evt_queue = NULL;

static void IRAM_ATTR onGpioInterrupt(void *arg) {
  xQueueSendFromISR(gpio_evt_queue, (SwitchData *)arg, NULL);
}

static void enableGpioInterrupt(bool enabled) {
  for (int i = 0; i < PAIR_SIZE(buttonFunctionPair); ++i) {
    if (enabled) {
      enableInterrupt((buttonFunctionPair[i]).pin);
    } else {
      disableInterrupt((buttonFunctionPair[i]).pin);
    }
  }
}

/********************* Arduino 函数 **************************/
void setup() {

  Serial.begin(115200);
  while (!Serial) {
    delay(10);
  }

  // 可选：设置 Zigbee 设备名称和型号
  zbSwitch.setManufacturerAndModel("Espressif", "ZigbeeSwitch");

  // 可选：允许多个灯光绑定到开关
  zbSwitch.allowMultipleBinding(true);

  // 将端点添加到 Zigbee 核心
  log_d("Adding ZigbeeSwitch endpoint to Zigbee Core");
  Zigbee.addEndpoint(&zbSwitch);

  // 启动后 180 秒内打开网络
  Zigbee.setRebootOpenNetwork(180);

  // 初始化按钮开关
  for (int i = 0; i < PAIR_SIZE(buttonFunctionPair); i++) {
    pinMode(buttonFunctionPair[i].pin, INPUT_PULLUP);
    /* 创建队列以处理来自 ISR 的 GPIO 事件 */
    gpio_evt_queue = xQueueCreate(10, sizeof(SwitchData));
    if (gpio_evt_queue == 0) {
      log_e("Queue was not created and must not be used");
      while (1);
    }
    attachInterruptArg(buttonFunctionPair[i].pin, onGpioInterrupt, (void *)(buttonFunctionPair + i), FALLING);
  }

  // 当所有端点注册完成后，以 ZIGBEE_COORDINATOR 模式启动 Zigbee
  log_d("Calling Zigbee.begin()");
  Zigbee.begin(ZIGBEE_COORDINATOR);

  Serial.println("Waiting for Light to bound to the switch");
  // 等待开关绑定到灯光：
  while (!zbSwitch.isBound()) {
    Serial.printf(".");
    delay(500);
  }

  // 可选：从绑定的灯光读取制造商和型号名称
  std::list<zb_device_params_t *> boundLights = zbSwitch.getBoundDevices();
  // 列出所有绑定的灯光
  for (const auto &device : boundLights) {
    Serial.printf("Device on endpoint %d, short address: 0x%x\n", device->endpoint, device->short_addr);
    Serial.printf(
      "IEEE Address: %02X:%02X:%02X:%02X:%02X:%02X:%02X:%02X\n", device->ieee_addr[0], device->ieee_addr[1], device->ieee_addr[2], device->ieee_addr[3],
      device->ieee_addr[4], device->ieee_addr[5], device->ieee_addr[6], device->ieee_addr[7]
    );
    Serial.printf("Light manufacturer: %s", zbSwitch.readManufacturer(device->endpoint, device->short_addr));
    Serial.printf("Light model: %s", zbSwitch.readModel(device->endpoint, device->short_addr));
  }

  Serial.println();
}

void loop() {
  // 在 loop() 中处理按钮开关
  uint8_t pin = 0;
  SwitchData buttonSwitch;
  static SwitchState buttonState = SWITCH_IDLE;
  bool eventFlag = false;

  /* 检查是否有队列接收，如果有则读取 buttonSwitch */
  if (xQueueReceive(gpio_evt_queue, &buttonSwitch, portMAX_DELAY)) {
    pin = buttonSwitch.pin;
    enableGpioInterrupt(false);
    eventFlag = true;
  }
  while (eventFlag) {
    bool value = digitalRead(pin);
    switch (buttonState) {
      case SWITCH_IDLE:           buttonState = (value == LOW) ? SWITCH_PRESS_DETECTED : SWITCH_IDLE; break;
      case SWITCH_PRESS_DETECTED: buttonState = (value == LOW) ? SWITCH_PRESS_DETECTED : SWITCH_RELEASE_DETECTED; break;
      case SWITCH_RELEASE_DETECTED:
        buttonState = SWITCH_IDLE;
        /* 回调到按钮处理函数 */
        (*onZbButton)(&buttonSwitch);
        break;
      default: break;
    }
    if (buttonState == SWITCH_IDLE) {
      enableGpioInterrupt(true);
      eventFlag = false;
      break;
    }
    vTaskDelay(10 / portTICK_PERIOD_MS);
  }

  // 每 10 秒打印绑定的灯光
  static uint32_t lastPrint = 0;
  if (millis() - lastPrint > 10000) {
    lastPrint = millis();
    zbSwitch.printBoundDevices();
  }
}
```

#### 演示

<iframe
  className="youtube-video-r"
  src="https://www.youtube.com/embed/Z2NROYx7hcQ"
  title="XIAO Zigbe Light bulb/switch Example"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  style={{ width: '380px', height: '640px' }}
></iframe>

恭喜你成功完成了基于 Zigbee 控制的照明项目！还有许多令人兴奋的 Zigbee 应用等待你去探索。继续保持出色的工作吧！

## 参考资料

- [Zigbee 示例 - Arduino](https://github.com/espressif/arduino-esp32/blob/master/libraries/Zigbee/examples)
- [ESP Zigbee SDK](https://docs.espressif.com/projects/esp-zigbee-sdk/en/latest/esp32c6/introduction.html)
- [Arduino Core for ESP32 增加了 Zigbee 封装库](https://www.cnx-software.com/2024/08/23/arduino-core-for-esp32-gets-a-zigbee-wrapper-library/)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时能够获得流畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>