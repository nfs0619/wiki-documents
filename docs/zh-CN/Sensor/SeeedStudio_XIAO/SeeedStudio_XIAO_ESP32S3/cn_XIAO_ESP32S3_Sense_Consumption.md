---
description: XIAO ESP32 Sense 使用不同睡眠模式的功耗
title: XIAO ESP32S3 Sense 睡眠模式
keywords:
- Sleep_Modes
image: https://files.seeedstudio.com//wiki/ESP32S3_Sense_SleepMode/1.png
slug: /cn/XIAO_ESP32S3_Consumption
last_update:
  date: 05/15/2025
  author: Jason
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ESP32S3_Sense_SleepMode/background02.png" style={{width:800, height:'auto'}}/></div>


在这里，我将展示一些简单的示例来说明如何使用这些低功耗睡眠模式。所有 ESP32 开发板都非常灵活，而我在此上下文中使用的开发板是 XIAO ESP32S3 Sense。

## 硬件概览

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:300, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>


## 深度睡眠模式

### 简介
在深度睡眠模式下，ESP32 会关闭 CPU、大部分 RAM 和所有由 APB_CLK 时钟驱动的数字外设。唯一保持供电的组件是：

- RTC 控制器
- ULP 协处理器
- RTC FAST 内存
- RTC SLOW 内存

### 唤醒方式

- **定时器唤醒：**通过设置定时器，ESP32 可以在指定时间后自动唤醒。

- **触摸板中断唤醒：**设备可以通过触摸板上的活动唤醒，适用于需要用户交互的应用。

- **外部唤醒：**ESP32 可以通过外部信号（例如按钮按下）唤醒，非常适合低功耗应用。

- **ULP 协处理器活动唤醒：**ULP 协处理器可以独立运行，监控特定条件并唤醒主 CPU，以节省功耗。

- **GPIO 唤醒：**设备可以通过 GPIO 引脚状态（高或低）的变化唤醒，为各种传感器和外设提供灵活性。


以下是 XIAO ESP32 S3 Sense 使用深度睡眠模式的三个简单示例。

### 代码实现

<Tabs>
<TabItem  value="DeepSleepExample1" label="TimerWakeUP" default>

```cpp

#define uS_TO_S_FACTOR 1000000ULL 
#define TIME_TO_SLEEP  5       

RTC_DATA_ATTR int bootCount = 0;

void print_wakeup_reason() {
  esp_sleep_wakeup_cause_t wakeup_reason;

  wakeup_reason = esp_sleep_get_wakeup_cause();

  switch (wakeup_reason) {
    case ESP_SLEEP_WAKEUP_EXT0:     Serial.println("Wakeup caused by external signal using RTC_IO"); break;
    case ESP_SLEEP_WAKEUP_EXT1:     Serial.println("Wakeup caused by external signal using RTC_CNTL"); break;
    case ESP_SLEEP_WAKEUP_TIMER:    Serial.println("Wakeup caused by timer"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD: Serial.println("Wakeup caused by touchpad"); break;
    case ESP_SLEEP_WAKEUP_ULP:      Serial.println("Wakeup caused by ULP program"); break;
    default:                        Serial.printf("Wakeup was not caused by deep sleep: %d\n", wakeup_reason); break;
  }
}

void setup() {
  Serial.begin(115200);
  delay(1000);  


  ++bootCount;
  Serial.println("Boot number: " + String(bootCount));


  print_wakeup_reason();


  esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);
  Serial.println("Setup ESP32 to sleep for every " + String(TIME_TO_SLEEP) + " Seconds");

  Serial.println("Going to sleep now");
  Serial.flush();
  esp_deep_sleep_start();
  Serial.println("This will never be printed");
}

void loop() {

}
```


### 详细说明
```cpp
#define uS_TO_S_FACTOR 1000000ULL 
```
- 定义一个宏，用于将微秒转换为秒。1000000ULL 是用于转换微秒到秒的因子。

```cpp
#define TIME_TO_SLEEP  5     
```
- 定义一个宏，设置 ESP32 的睡眠时间，此处为 5 秒。

```cpp
RTC_DATA_ATTR int bootCount = 0;
```
- 声明一个整数变量 `bootCount`，并使用属性 `RTC_DATA_ATTR`，使其在深度睡眠期间保留其值。

```cpp
void print_wakeup_reason() {
```
- 定义一个名为 `print_wakeup_reason()` 的函数，用于打印 ESP32 唤醒的原因。

```cpp
esp_sleep_wakeup_cause_t wakeup_reason;
```
- 声明一个类型为 `esp_sleep_wakeup_cause_t` 的变量 `wakeup_reason`，用于存储唤醒事件的原因。

```cpp
wakeup_reason = esp_sleep_get_wakeup_cause();
```
- 调用函数 `esp_sleep_get_wakeup_cause()` 获取唤醒原因，并将其赋值给变量 `wakeup_reason`。

```cpp
  switch (wakeup_reason) {
    case ESP_SLEEP_WAKEUP_EXT0:     Serial.println("Wakeup caused by external signal using RTC_IO"); break;
    case ESP_SLEEP_WAKEUP_EXT1:     Serial.println("Wakeup caused by external signal using RTC_CNTL"); break;
    case ESP_SLEEP_WAKEUP_TIMER:    Serial.println("Wakeup caused by timer"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD: Serial.println("Wakeup caused by touchpad"); break;
    case ESP_SLEEP_WAKEUP_ULP:      Serial.println("Wakeup caused by ULP program"); break;
    default:                        Serial.printf("Wakeup was not caused by deep sleep: %d\n", wakeup_reason); break;
}
```
- `ESP_SLEEP_WAKEUP_EXT0`：此唤醒原因表明 ESP32 因检测到 GPIO 引脚上的外部信号而唤醒，该引脚配置为 RTC（实时时钟）I/O。通常用于按钮或传感器触发的唤醒。
- `ESP_SLEEP_WAKEUP_EXT1`：此唤醒原因表明唤醒是由 RTC 控制器管理的 GPIO 引脚上的外部信号引起的。与 EXT0 不同，EXT1 可以处理多个引脚，并在任何指定引脚状态变化（例如变低或变高）时唤醒。
- `ESP_SLEEP_WAKEUP_TIMER`：此唤醒原因表明 ESP32 在预定义的定时器持续时间后唤醒。这对于需要定期执行任务且无需用户交互的应用非常有用。
- `ESP_SLEEP_WAKEUP_TOUCHPAD`：此唤醒原因表明 ESP32 因触摸板事件而唤醒。如果配置为唤醒的触摸板检测到触摸，则可以将设备从睡眠模式中唤醒。
- `ESP_SLEEP_WAKEUP_ULP`：此唤醒原因表明唤醒是由 ULP（超低功耗）程序触发的。ULP 可以在主 CPU 处于深度睡眠时运行，并在满足特定条件时唤醒 ESP32，从而实现低功耗操作并最大限度地减少电池消耗。

```cpp
++bootCount;
```
- 增加启动计数，并在设备每次重启时打印。

```cpp
print_wakeup_reason();
```
- 打印 ESP32 唤醒的原因。

```cpp
esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);
Serial.println("Setup ESP32 to sleep for every " + String(TIME_TO_SLEEP) + " Seconds");

Serial.println("Going to sleep now");
Serial.flush();
esp_deep_sleep_start();
Serial.println("This will never be printed");
```

- `esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);`启用定时器，在指定时间后唤醒 ESP32。
- `Serial.flush();`确保所有串口数据在进入睡眠之前发送完毕。
- `esp_deep_sleep_start();`将 ESP32 置于深度睡眠模式。

</TabItem>

<TabItem value="DeepSleepExample2" label="ExternalWakeUp" default>

```cpp

#include "driver/rtc_io.h"

#define BUTTON_PIN_BITMASK(GPIO) (1ULL << GPIO) 
#define USE_EXT0_WAKEUP          1              
#define WAKEUP_GPIO              GPIO_NUM_33   
RTC_DATA_ATTR int bootCount = 0;


void print_wakeup_reason() {
  esp_sleep_wakeup_cause_t wakeup_reason;

  wakeup_reason = esp_sleep_get_wakeup_cause();

  switch (wakeup_reason) {
    case ESP_SLEEP_WAKEUP_EXT0:     Serial.println("Wakeup caused by external signal using RTC_IO"); break;
    case ESP_SLEEP_WAKEUP_EXT1:     Serial.println("Wakeup caused by external signal using RTC_CNTL"); break;
    case ESP_SLEEP_WAKEUP_TIMER:    Serial.println("Wakeup caused by timer"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD: Serial.println("Wakeup caused by touchpad"); break;
    case ESP_SLEEP_WAKEUP_ULP:      Serial.println("Wakeup caused by ULP program"); break;
    default:                        Serial.printf("Wakeup was not caused by deep sleep: %d\n", wakeup_reason); break;
  }
}

void setup() {
  Serial.begin(115200);
  delay(1000); 

  ++bootCount;
  Serial.println("Boot number: " + String(bootCount));

  print_wakeup_reason();

#if USE_EXT0_WAKEUP
  esp_sleep_enable_ext0_wakeup(WAKEUP_GPIO, 1); 

  rtc_gpio_pullup_dis(WAKEUP_GPIO);
  rtc_gpio_pulldown_en(WAKEUP_GPIO);

#else 
  esp_sleep_enable_ext1_wakeup_io(BUTTON_PIN_BITMASK(WAKEUP_GPIO), ESP_EXT1_WAKEUP_ANY_HIGH);

  rtc_gpio_pulldown_en(WAKEUP_GPIO); 
  rtc_gpio_pullup_dis(WAKEUP_GPIO);   
#endif

  Serial.println("Going to sleep now");
  esp_deep_sleep_start();
  Serial.println("This will never be printed");
}

void loop() {
}
```

### 详细说明

```cpp
#include "driver/rtc_io.h"
```
- 包含 RTC I/O 驱动，用于访问 RTC GPIO。

```cpp
#define BUTTON_PIN_BITMASK(GPIO) (1ULL << GPIO)  
#define USE_EXT0_WAKEUP          1              
#define WAKEUP_GPIO              GPIO_NUM_33    
RTC_DATA_ATTR int bootCount = 0;
```

- 以十六进制表示 2 ^ GPIO_NUMBER。
- 1 = EXT0 唤醒，0 = EXT1 唤醒。
- 仅允许使用 RTC IO - ESP32 引脚示例。

```cpp
  switch (wakeup_reason) {
    case ESP_SLEEP_WAKEUP_EXT0:     Serial.println("Wakeup caused by external signal using RTC_IO"); break;
    case ESP_SLEEP_WAKEUP_EXT1:     Serial.println("Wakeup caused by external signal using RTC_CNTL"); break;
    case ESP_SLEEP_WAKEUP_TIMER:    Serial.println("Wakeup caused by timer"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD: Serial.println("Wakeup caused by touchpad"); break;
    case ESP_SLEEP_WAKEUP_ULP:      Serial.println("Wakeup caused by ULP program"); break;
    default:                        Serial.printf("Wakeup was not caused by deep sleep: %d\n", wakeup_reason); break;
}
```
- `ESP_SLEEP_WAKEUP_EXT0`：此唤醒原因表示 ESP32 因检测到配置为 RTC（实时时钟）I/O 的 GPIO 引脚上的外部信号而唤醒。通常用于按钮或传感器触发唤醒。
- `ESP_SLEEP_WAKEUP_EXT1`：此唤醒原因表示唤醒是由 RTC 控制器管理的 GPIO 引脚上的外部信号引起的。与 EXT0 不同，EXT1 可以处理多个引脚，并在任何指定引脚状态变化（例如，变低或变高）时唤醒。
- `ESP_SLEEP_WAKEUP_TIMER`：此唤醒原因表示 ESP32 在预定义的计时器持续时间后唤醒。适用于需要定期执行任务的应用程序，无需用户交互。
- `ESP_SLEEP_WAKEUP_TOUCHPAD`：此唤醒原因表示 ESP32 因触摸板事件而唤醒。如果配置为唤醒的触摸板检测到触摸，它可以使设备退出睡眠模式。
- `ESP_SLEEP_WAKEUP_ULP`：此唤醒原因表示唤醒是由 ULP（超低功耗）程序触发的。ULP 可以在主 CPU 处于深度睡眠时运行，并在满足某些条件时唤醒 ESP32，从而实现低功耗操作。

```cpp
  Serial.begin(115200);
  delay(1000);  
  ++bootCount;
  Serial.println("Boot number: " + String(bootCount));
  print_wakeup_reason();
```
- `++bootCount;`增加启动计数，并在每次重启时打印。
- `print_wakeup_reason();`打印 ESP32 的唤醒原因。

```cpp
#if USE_EXT0_WAKEUP
  esp_sleep_enable_ext0_wakeup(WAKEUP_GPIO, 1);

  rtc_gpio_pullup_dis(WAKEUP_GPIO);
  rtc_gpio_pulldown_en(WAKEUP_GPIO);
```

- `esp_sleep_enable_ext0_wakeup(WAKEUP_GPIO, 1);`启用 EXT0 唤醒，当指定 GPIO 引脚变高时唤醒。
- `rtc_gpio_pullup_dis(WAKEUP_GPIO);`禁用唤醒 GPIO 引脚上的上拉电阻。
- `rtc_gpio_pulldown_en(WAKEUP_GPIO);`启用唤醒 GPIO 引脚上的下拉电阻。

```cpp
#else  
  esp_sleep_enable_ext1_wakeup_io(BUTTON_PIN_BITMASK(WAKEUP_GPIO), ESP_EXT1_WAKEUP_ANY_HIGH);

  rtc_gpio_pulldown_en(WAKEUP_GPIO);  
  rtc_gpio_pullup_dis(WAKEUP_GPIO);   
```
- `esp_sleep_enable_ext1_wakeup_io(BUTTON_PIN_BITMASK(WAKEUP_GPIO), ESP_EXT1_WAKEUP_ANY_HIGH);`启用 EXT1 唤醒。
- `rtc_gpio_pulldown_en(WAKEUP_GPIO);`将 GPIO33 接地以便在高电平时唤醒。
- `rtc_gpio_pullup_dis(WAKEUP_GPIO);`禁用上拉电阻以允许在高电平时唤醒。

- `esp_sleep_enable_ext1_wakeup_io(BUTTON_PIN_BITMASK(WAKEUP_GPIO), ESP_EXT1_WAKEUP_ANY_HIGH);`如果使用 EXT1 唤醒，可以像这样使用。
- `rtc_gpio_pulldown_en(WAKEUP_GPIO);`将 GPIO33 接地以便在高电平时唤醒。
- `rtc_gpio_pullup_dis(WAKEUP_GPIO);`禁用上拉电阻以允许在高电平时唤醒。

```cpp
  Serial.println("现在进入睡眠模式");
  esp_deep_sleep_start();
  Serial.println("这行永远不会被打印");
```
- `esp_deep_sleep_start();`将 ESP32 置于深度睡眠模式。

</TabItem>


<TabItem value="DeepSleepExample3" label="TouchWakeUp" default>

```cpp
#if CONFIG_IDF_TARGET_ESP32
#define THRESHOLD 40 
#elif (CONFIG_IDF_TARGET_ESP32S2 || CONFIG_IDF_TARGET_ESP32S3)
#define THRESHOLD 5000 
#else                  
#define THRESHOLD 500  
#endif

RTC_DATA_ATTR int bootCount = 0;
touch_pad_t touchPin;

void print_wakeup_reason() {
  esp_sleep_wakeup_cause_t wakeup_reason;

  wakeup_reason = esp_sleep_get_wakeup_cause();

  switch (wakeup_reason) {
    case ESP_SLEEP_WAKEUP_EXT0:     Serial.println("由 RTC_IO 外部信号引起的唤醒"); break;
    case ESP_SLEEP_WAKEUP_EXT1:     Serial.println("由 RTC_CNTL 外部信号引起的唤醒"); break;
    case ESP_SLEEP_WAKEUP_TIMER:    Serial.println("由定时器引起的唤醒"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD: Serial.println("由触摸板引起的唤醒"); break;
    case ESP_SLEEP_WAKEUP_ULP:      Serial.println("由 ULP 程序引起的唤醒"); break;
    default:                        Serial.printf("唤醒不是由深度睡眠引起的: %d\n", wakeup_reason); break;
  }
}

void print_wakeup_touchpad() {
  touchPin = esp_sleep_get_touchpad_wakeup_status();

#if CONFIG_IDF_TARGET_ESP32
  switch (touchPin) {
    case 0:  Serial.println("在 GPIO 4 上检测到触摸"); break;
    case 1:  Serial.println("在 GPIO 0 上检测到触摸"); break;
    case 2:  Serial.println("在 GPIO 2 上检测到触摸"); break;
    case 3:  Serial.println("在 GPIO 15 上检测到触摸"); break;
    case 4:  Serial.println("在 GPIO 13 上检测到触摸"); break;
    case 5:  Serial.println("在 GPIO 12 上检测到触摸"); break;
    case 6:  Serial.println("在 GPIO 14 上检测到触摸"); break;
    case 7:  Serial.println("在 GPIO 27 上检测到触摸"); break;
    case 8:  Serial.println("在 GPIO 33 上检测到触摸"); break;
    case 9:  Serial.println("在 GPIO 32 上检测到触摸"); break;
    default: Serial.println("唤醒不是由触摸板引起的"); break;
  }
#else
  if (touchPin < TOUCH_PAD_MAX) {
    Serial.printf("在 GPIO %d 上检测到触摸\n", touchPin);
  } else {
    Serial.println("唤醒不是由触摸板引起的");
  }
#endif
}

void setup() {
  Serial.begin(115200);
  delay(1000); 

  ++bootCount;
  Serial.println("启动次数: " + String(bootCount));

  print_wakeup_reason();
  print_wakeup_touchpad();

#if CONFIG_IDF_TARGET_ESP32

  touchSleepWakeUpEnable(T3, THRESHOLD);
  touchSleepWakeUpEnable(T7, THRESHOLD);

#else 
  touchSleepWakeUpEnable(T3, THRESHOLD);

#endif

  Serial.println("现在进入睡眠模式");
  esp_deep_sleep_start();
  Serial.println("这行永远不会被打印");
}

void loop() {

}
```

### 详细说明

```cpp
#if CONFIG_IDF_TARGET_ESP32
#define THRESHOLD 40 
#elif (CONFIG_IDF_TARGET_ESP32S2 || CONFIG_IDF_TARGET_ESP32S3)
#define THRESHOLD 5000 
#else                  
#define THRESHOLD 500  
#endif
```

- 检查目标是否为 ESP32
- 为 ESP32 定义触摸灵敏度的阈值
- 检查目标是否为 ESP32S2 或 ESP32S3
- 为 ESP32S2/S3 定义更高的触摸灵敏度阈值
- 如果目标不是上述之一
- 为其他目标定义默认的阈值

```cpp
RTC_DATA_ATTR int bootCount = 0; // 声明一个变量用于计数启动次数，存储在 RTC 内存中。
touch_pad_t touchPin; // 声明一个变量用于保存触摸板引脚状态。

void print_wakeup_reason() { // 打印唤醒原因的函数。
  esp_sleep_wakeup_cause_t wakeup_reason; // 用于保存唤醒原因的变量。

  wakeup_reason = esp_sleep_get_wakeup_cause(); // 获取唤醒原因。
```
- `RTC_DATA_ATTR int bootCount = 0;` 声明一个变量用于计数启动次数，存储在 RTC 内存中。
- `touch_pad_t touchPin;` 声明一个变量用于保存触摸板引脚状态。
- `void print_wakeup_reason()` 打印唤醒原因的函数。
- `esp_sleep_wakeup_cause_t wakeup_reason;` 用于保存唤醒原因的变量。
- `wakeup_reason = esp_sleep_get_wakeup_cause();` 获取唤醒原因。

```cpp
  switch (wakeup_reason) {
    case ESP_SLEEP_WAKEUP_EXT0:     Serial.println("由 RTC_IO 外部信号引起的唤醒"); break;
    case ESP_SLEEP_WAKEUP_EXT1:     Serial.println("由 RTC_CNTL 外部信号引起的唤醒"); break;
    case ESP_SLEEP_WAKEUP_TIMER:    Serial.println("由定时器引起的唤醒"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD: Serial.println("由触摸板引起的唤醒"); break;
    case ESP_SLEEP_WAKEUP_ULP:      Serial.println("由 ULP 程序引起的唤醒"); break;
    default:                        Serial.printf("唤醒不是由深度睡眠引起的: %d\n", wakeup_reason); break;
}
```
- `ESP_SLEEP_WAKEUP_EXT0`：此唤醒原因表明 ESP32 因检测到配置为 RTC（实时时钟）I/O 的 GPIO 引脚上的外部信号而唤醒。通常用于按钮或传感器触发的唤醒。
- `ESP_SLEEP_WAKEUP_EXT1`：表明唤醒是由 RTC 控制器管理的 GPIO 引脚上的外部信号引起的。与 EXT0 不同，EXT1 可以处理多个引脚，并在任意指定引脚状态变化（例如变低或变高）时唤醒。
- `ESP_SLEEP_WAKEUP_TIMER`：此唤醒原因表示 ESP32 在预定义的定时器持续时间后唤醒。适用于需要定期执行任务的应用。
- `ESP_SLEEP_WAKEUP_TOUCHPAD`：表明 ESP32 因触摸板事件而唤醒。如果配置为唤醒的触摸板检测到触摸，它可以将设备从睡眠模式唤醒。
- `ESP_SLEEP_WAKEUP_ULP`：此唤醒原因表示唤醒是由 ULP（超低功耗）程序触发的。ULP 可以在主 CPU 处于深度睡眠时运行，并在满足某些条件时唤醒 ESP32，从而实现低功耗操作。

```cpp
void print_wakeup_touchpad() {
  touchPin = esp_sleep_get_touchpad_wakeup_status();

#if CONFIG_IDF_TARGET_ESP32
  switch (touchPin) {
    case 0:  Serial.println("在 GPIO 4 上检测到触摸"); break;
    case 1:  Serial.println("在 GPIO 0 上检测到触摸"); break;
    case 2:  Serial.println("在 GPIO 2 上检测到触摸"); break;
    case 3:  Serial.println("在 GPIO 15 上检测到触摸"); break;
    case 4:  Serial.println("在 GPIO 13 上检测到触摸"); break;
    case 5:  Serial.println("在 GPIO 12 上检测到触摸"); break;
    case 6:  Serial.println("在 GPIO 14 上检测到触摸"); break;
    case 7:  Serial.println("在 GPIO 27 上检测到触摸"); break;
    case 8:  Serial.println("在 GPIO 33 上检测到触摸"); break;
    case 9:  Serial.println("在 GPIO 32 上检测到触摸"); break;
    default: Serial.println("唤醒不是由触摸板引起的"); break;
  }
#else
  if (touchPin < TOUCH_PAD_MAX) {
    Serial.printf("在 GPIO %d 上检测到触摸\n", touchPin);
  } else {
    Serial.println("唤醒不是由触摸板引起的");
  }
#endif
}
```

- `case 0:` 在 GPIO 4 上检测到触摸。
- `case 1:` 在 GPIO 0 上检测到触摸。
- `case 2:` 在 GPIO 2 上检测到触摸。
- `case 3:` 在 GPIO 15 上检测到触摸。
- `case 4:` 在 GPIO 13 上检测到触摸。
- `case 5:` 在 GPIO 12 上检测到触摸。
- `case 6:` 在 GPIO 14 上检测到触摸。
- `case 7:` 在 GPIO 27 上检测到触摸。
- `case 8:` 在 GPIO 33 上检测到触摸。
- `case 9:` 在 GPIO 32 上检测到触摸。
- `default:` 默认情况，如果未检测到触摸。

```cpp
void setup() {
  Serial.begin(115200);
  delay(1000); 

  ++bootCount;
  Serial.println("Boot number: " + String(bootCount));

  print_wakeup_reason();
  print_wakeup_touchpad();

#if CONFIG_IDF_TARGET_ESP32

  touchSleepWakeUpEnable(T3, THRESHOLD);
  touchSleepWakeUpEnable(T7, THRESHOLD);

#else 
  touchSleepWakeUpEnable(T3, THRESHOLD);

#endif

  Serial.println("Going to sleep now");
  esp_deep_sleep_start();
  Serial.println("This will never be printed");
}
```

- `++bootCount;` 增加启动计数。

- `print_wakeup_reason();` 打印唤醒原因。
- `print_wakeup_touchpad();` 打印触摸板唤醒状态。

- `#if CONFIG_IDF_TARGET_ESP32` 检查目标是否为 ESP32。
- `touchSleepWakeUpEnable(T3, THRESHOLD);` 为 T3 启用触摸唤醒并设置阈值。
- `touchSleepWakeUpEnable(T7, THRESHOLD);` 为 T7 启用触摸唤醒并设置阈值。
- `touchSleepWakeUpEnable(T3, THRESHOLD);` 为 T3 启用触摸唤醒并设置阈值。

- `esp_deep_sleep_start();` 使 ESP32 进入深度睡眠模式。

</TabItem>



<TabItem value="DeepSleepExample4" label="SmoothBink_ULP" default>

```cpp
#include <Arduino.h> // 引入 Arduino 核心库
#include "esp32/ulp.h" // 引入 ESP32 ULP 相关库
#include "driver/rtc_io.h" // 引入 RTC GPIO 驱动库
#include "soc/rtc_io_reg.h" // 引入 RTC IO 寄存器定义

#define RTC_dutyMeter 0 // 定义 dutyMeter 的存储位置
#define RTC_dir       4 // 定义方向的存储位置
#define RTC_fadeDelay 12 // 定义 fadeDelay 的存储位置

uint32_t *fadeCycleDelay = &RTC_SLOW_MEM[RTC_fadeDelay]; // 指向 RTC_SLOW_MEM 中 fadeDelay 的位置
#define ULP_START_OFFSET 32 // 定义 ULP 程序的起始偏移量

RTC_DATA_ATTR uint32_t ULP_Started = 0; // 变量，用于指示 ULP 程序是否已启动
// 睡眠时间
#define uS_TO_S_FACTOR 1000000ULL // 微秒到秒的转换因子
#define TIME_TO_SLEEP  5 // 进入深度睡眠的时间（秒）

void ulp_setup() { // ULP 设置函数
  if (ULP_Started) { // 如果 ULP 已经启动，则返回
    return;
  }
  *fadeCycleDelay = 5; // 初始化 fadeCycleDelay 为 5
  ULP_Started = 1; // 标记 ULP 已启动

  const gpio_num_t MeterPWMPin = GPIO_NUM_2; // 定义 PWM 引脚
  rtc_gpio_init(MeterPWMPin); // 初始化 GPIO
  rtc_gpio_set_direction(MeterPWMPin, RTC_GPIO_MODE_OUTPUT_ONLY); // 设置引脚为输出模式
  rtc_gpio_set_level(MeterPWMPin, 0); // 将引脚初始电平设置为低

  const uint32_t MeterPWMBit = rtc_io_number_get(MeterPWMPin) + RTC_GPIO_OUT_DATA_S; // 获取 PWM 引脚的位

  enum labels { // 定义 ULP 程序的标签
    INIFINITE_LOOP,
    RUN_PWM,
    NEXT_PWM_CYCLE,
    PWM_ON,
    PWM_OFF,
    END_PWM_CYCLE,
    POSITIVE_DIR,
    DEC_DUTY,
    INC_DUTY,
  };

  // 定义 ULP 程序
  const ulp_insn_t ulp_prog[] = {
    // 初始值设置
    I_MOVI(R0, 0), // 将 0 移动到寄存器 R0
    I_ST(R0, R0, RTC_dutyMeter), // 将 R0 的值存储到 dutyMeter
    I_MOVI(R1, 1), // 将 1 移动到寄存器 R1
    I_ST(R1, R0, RTC_dir), // 将 R1 的值存储到 dir

    M_LABEL(INIFINITE_LOOP), // 定义无限循环标签
    
    I_MOVI(R3, 0), // 将 0 移动到 R3
    I_LD(R3, R3, RTC_fadeDelay), // 从 fadeDelay 加载值到 R3
    M_LABEL(RUN_PWM), // 定义运行 PWM 标签

    I_MOVI(R0, 0), // 将 0 移动到 R0
    I_LD(R0, R0, RTC_dutyMeter), // 从 dutyMeter 加载值到 R0
    M_BL(NEXT_PWM_CYCLE, 1), // 跳转到下一 PWM 周期
    I_WR_REG(RTC_GPIO_OUT_W1TS_REG, MeterPWMBit, MeterPWMBit, 1), // 将 PWM 引脚设置为高电平
    M_LABEL(PWM_ON), // 定义 PWM 开启标签
    M_BL(NEXT_PWM_CYCLE, 1), // 跳转到下一 PWM 周期
    // I_DELAY(8), // 注释掉的延迟指令
    I_SUBI(R0, R0, 1), // 将 R0 减 1
    M_BX(PWM_ON), // 返回到 PWM 开启标签

    M_LABEL(NEXT_PWM_CYCLE), // 定义下一 PWM 周期标签
    I_MOVI(R0, 0), // 将 0 移动到 R0
    I_LD(R0, R0, RTC_dutyMeter), // 从 dutyMeter 加载值到 R0
    I_MOVI(R1, 100), // 将 100 移动到 R1
    I_SUBR(R0, R1, R0), // R0 = R1 - R0
    M_BL(END_PWM_CYCLE, 1), // 跳转到 PWM 周期结束标签
    I_WR_REG(RTC_GPIO_OUT_W1TC_REG, MeterPWMBit, MeterPWMBit, 1), // 将 PWM 引脚设置为低电平
    M_LABEL(PWM_OFF), // 定义 PWM 关闭标签
    M_BL(END_PWM_CYCLE, 1), // 跳转到 PWM 周期结束标签
    // I_DELAY(8), // 注释掉的延迟指令
    I_SUBI(R0, R0, 1), // 将 R0 减 1
    M_BX(PWM_OFF), // 返回到 PWM 关闭标签
    M_LABEL(END_PWM_CYCLE), // 定义 PWM 周期结束标签

    I_SUBI(R3, R3, 1), // 将 R3 减 1
    I_MOVR(R0, R3), // 将 R3 移动到 R0
    M_BGE(RUN_PWM, 1), // 如果 R3 >= 0，跳转到 RUN_PWM

    I_MOVI(R1, 0), // 将 0 移动到 R1
    I_LD(R1, R1, RTC_dutyMeter), // 从 dutyMeter 加载值到 R1
    I_MOVI(R0, 0), // 将 0 移动到 R0
    I_LD(R0, R0, RTC_dir), // 从 dir 加载值到 R0

    M_BGE(POSITIVE_DIR, 1), // 如果 R0 >= 0，跳转到 POSITIVE_DIR

    I_MOVR(R0, R1), // 将 R1 移动到 R0
    M_BGE(DEC_DUTY, 1), // 如果 R1 >= 0，跳转到 DEC_DUTY
    I_MOVI(R3, 0), // 将 0 移动到 R3
    I_MOVI(R2, 1), // 将 1 移动到 R2
    I_ST(R2, R3, RTC_dir), // 将 R2 的值存储到 dir
    M_BX(INC_DUTY), // 跳转到 INC_DUTY 标签
    M_LABEL(DEC_DUTY), // 定义 DEC_DUTY 标签
    I_SUBI(R0, R0, 2), // 将 R0 减 2
    I_MOVI(R2, 0), // 将 0 移动到 R2
    I_ST(R0, R2, RTC_dutyMeter), // 将 R0 的值存储到 dutyMeter
    M_BX(INIFINITE_LOOP), // 返回到无限循环标签

    M_LABEL(POSITIVE_DIR), // 定义 POSITIVE_DIR 标签
  
    I_MOVR(R0, R1), // 将 R1 移动到 R0
    M_BL(INC_DUTY, 100), // 跳转到 INC_DUTY 标签，参数为 100
    I_MOVI(R2, 0), // 将 0 移动到 R2
    I_ST(R2, R2, RTC_dir), // 将 R2 的值存储到 dir
    M_BX(DEC_DUTY), // 跳转到 DEC_DUTY 标签
    M_LABEL(INC_DUTY), // 定义 INC_DUTY 标签
    I_ADDI(R0, R0, 2), // 将 R0 加 2
    I_MOVI(R2, 0), // 将 0 移动到 R2
    I_ST(R0, R2, RTC_dutyMeter), // 将 R0 的值存储到 dutyMeter
  
    M_BX(INIFINITE_LOOP), // 返回到无限循环标签
  };
  // 运行 ULP 程序
  size_t size = sizeof(ulp_prog) / sizeof(ulp_insn_t); // 计算 ULP 程序的大小
  ulp_process_macros_and_load(ULP_START_OFFSET, ulp_prog, &size); // 加载 ULP 程序
  esp_sleep_pd_config(ESP_PD_DOMAIN_RTC_PERIPH, ESP_PD_OPTION_ON); // 配置 RTC 外设的电源管理
  ulp_run(ULP_START_OFFSET); // 启动 ULP 程序
}

void setup() { // Arduino 设置函数
  Serial.begin(115200); // 初始化串口通信，波特率为 115200

  ulp_setup(); // 调用 ULP 设置函数
  Serial.printf("\nStarted smooth blink with delay %ld\n", *fadeCycleDelay); // 打印启动信息

  if (*fadeCycleDelay < 195) { // 如果 fadeCycleDelay 小于 195
    *fadeCycleDelay += 10; // 增加 fadeCycleDelay
  } else {
    *fadeCycleDelay = 5; // 否则，将 fadeCycleDelay 重置为 5
  }
  Serial.println("Entering in Deep Sleep"); // 打印进入深度睡眠的信息
  esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR /*/ 4*/); // 设置定时器唤醒
  esp_deep_sleep_start(); // 进入深度睡眠
}

void loop() { // Arduino 循环函数
  // 空循环
}
```
</TabItem>

</Tabs>

:::tip
在进入深度睡眠模式后重新烧录程序时，请按住启动按钮，然后按复位按钮以重启 ESP32。
:::

### 结果展示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ESP32S3_Sense_SleepMode/deep.png" style={{width:700, height:'auto'}}/></div>

## Light-Sleep（轻睡眠）

### 简介

轻睡眠模式是 ESP32 的另一种低功耗模式，它允许设备在节约能源的同时仍然保持快速响应。在这种模式下，CPU 核心暂停运行，但 RAM 和部分外设仍保持通电状态，使设备能够快速响应某些事件。

轻睡眠模式非常适合需要低功耗但仍需保持 WiFi 或 Bluetooth 连接的应用，因为它允许无线通信模块保持活动状态。

### 唤醒方式

- **定时器唤醒：** 设备可以在指定的时间段后唤醒，从而执行周期性任务。
- **外部中断唤醒：** ESP32 可以通过外部信号唤醒，例如按键或其他硬件中断。
- **网络活动唤醒：** 设备可以响应传入的网络数据包唤醒，从而实现高效通信而无需持续处于活动状态。
- **GPIO 唤醒：** 特定的 GPIO 引脚可以配置为在事件发生时唤醒设备，例如状态或信号的变化。

### 代码实现

```cpp
#include <freertos/FreeRTOS.h>
#include <freertos/task.h>

const int sleepTime = 10000;
const int ledPin = LED_BUILTIN; 

void ledTask(void *pvParameters) {
  digitalWrite(ledPin, HIGH);
  Serial.println("LED is ON");
  vTaskDelay(pdMS_TO_TICKS(1000));
  digitalWrite(ledPin, LOW);
  Serial.println("LED is OFF");
  
  vTaskDelete(NULL); 
}

void setup() {
  Serial.begin(115200);
  pinMode(ledPin, OUTPUT);
  Serial.println("Setup complete. Going to sleep...");
}

void loop() {
  esp_sleep_enable_timer_wakeup(sleepTime * 1000);
  Serial.println("Going to sleep now...");
  esp_light_sleep_start();

  xTaskCreate(ledTask, "LED Task", 2048, NULL, 1, NULL);
  
  delay(1000);
}
```

### 详细说明

```cpp
#include <freertos/FreeRTOS.h>
#include <freertos/task.h>
```

- 引入 FreeRTOS 库

```cpp
const int sleepTime = 10000; 
const int ledPin = LED_BUILTIN; 
```

- 设置睡眠时间为 10 秒
- 使用内置 LED 引脚

```cpp
void ledTask(void *pvParameters): 
```

- 定义一个 FreeRTOS 任务来控制 LED 状态。

```cpp
digitalWrite(ledPin, HIGH); 
Serial.println("LED is ON"); 
vTaskDelay(pdMS_TO_TICKS(1000)); 
digitalWrite(ledPin, LOW);
Serial.println("LED is OFF"); 
vTaskDelete(NULL); 
```

- `vTaskDelay(pdMS_TO_TICKS(1000)); `保持 LED 点亮 1 秒
- `vTaskDelete(NULL); `删除当前任务

```cpp
esp_sleep_enable_timer_wakeup(sleepTime * 1000);
Serial.println("Going to sleep now..."); 
esp_light_sleep_start(); 
xTaskCreate(ledTask, "LED Task", 2048, NULL, 1, NULL); 
delay(1000); 
```

- `esp_sleep_enable_timer_wakeup(sleepTime * 1000);` 设置定时器唤醒
- `esp_light_sleep_start();` 进入轻睡眠模式
- `xTaskCreate(ledTask, "LED Task", 2048, NULL, 1, NULL);` 创建 LED 控制任务

### 结果展示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ESP32S3_Sense_SleepMode/light_led.gif" style={{width:300, height:'auto'}}/></div>


## Modem-Sleep（调制解调器睡眠）

### 简介

调制解调器睡眠模式是 ESP32 的另一种重要低功耗模式，与深度睡眠模式不同。调制解调器睡眠模式主要针对 ESP32 的无线通信模块进行优化。

在这种模式下，ESP32 的 WiFi/Bluetooth 模块进入睡眠状态，而 CPU 核心仍保持活动。这使得 ESP32 在显著降低功耗的同时仍能保持一定程度的无线连接。

### 唤醒方式

- 定时器唤醒

- 外部中断唤醒

- 任务唤醒

- 网络活动唤醒

### 代码实现

```cpp
#include "WiFi.h"

void setup() {
    Serial.begin(115200);
    Serial.println("Connecting to WiFi...");

    WiFi.begin("****", "****");

    while (WiFi.status() != WL_CONNECTED) {
        delay(1000);
        Serial.println("Connecting...");
    }
    Serial.println("Connected to WiFi!");
 
    WiFi.setSleep(true); 
    Serial.println("Modem-Sleep enabled.");
}

void loop() {

    Serial.println("Running...");

    delay(5000);

    WiFi.setSleep(false); 
    Serial.println("Modem-Sleep disabled. WiFi is active.");

    if (WiFi.status() == WL_CONNECTED) {
        Serial.println("Still connected to WiFi.");
    } else {
        Serial.println("WiFi disconnected.");
    }

    delay(5000);
    WiFi.setSleep(true); 
    Serial.println("Modem-Sleep enabled.");
}
```

### 详细说明
```cpp
#include "WiFi.h"
```
- 引入 WiFi 库以启用 WiFi 功能。

```cpp
Serial.println("Connecting to WiFi...");
```
- 打印消息，指示开始连接 WiFi。
```cpp
WiFi.begin("****", "****");
```
- 开始连接到指定的 WiFi 网络。

```cpp
    while (WiFi.status() != WL_CONNECTED) {
        delay(1000);
        Serial.println("Connecting...");
    }
    Serial.println("Connected to WiFi!");
```
- 循环直到成功连接到 WiFi。

```cpp
WiFi.setSleep(true);
```
- 启用调制解调器睡眠模式以节省功耗。

```cpp
WiFi.setSleep(false);
```
- 禁用调制解调器睡眠模式以激活 WiFi。

```cpp
if (WiFi.status() == WL_CONNECTED) {
```
- 检查 WiFi 状态。

```cpp
WiFi.setSleep(true);
```
- 再次启用调制解调器睡眠模式。

### 结果展示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ESP32S3_Sense_SleepMode/light.png" style={{width:700, height:'auto'}}/></div>



## 睡眠功能应用

通过以上简单示例，现在我们进一步使用这些睡眠功能在 ESP32 S3 Sense 传感器上进行应用。

### 软件准备

在开始本文之前，如果您尚未使用 XIAO ESP32S3 Sense 的所有硬件功能，请确保您已完成一些软件安装准备工作。

以下是三个功能的介绍，您可以通过以下链接找到更多信息：

### 翻译后的文档

- [麦克风使用](https://wiki.seeedstudio.com/xiao_esp32s3_sense_mic/): 学习如何在 XIAO ESP32S3 Sense 上使用麦克风捕获环境声音水平并录制音频。

- [MicroSD](https://wiki.seeedstudio.com/xiao_esp32s3_sense_filesystem/): 了解如何使用 MicroSD 卡进行数据存储，确保您能够在项目中保存和检索文件。

- [摄像头使用](https://wiki.seeedstudio.com/xiao_esp32s3_camera_usage/): 掌握如何在 XIAO ESP32S3 Sense 上使用摄像头模块拍摄照片和录制视频。

### 代码实现

<Tabs>
<TabItem value="SleepApplication1" label="深度睡眠" default>

```cpp
#include "esp_camera.h"
#include "FS.h"
#include "SD.h"
#include "SPI.h"

#define CAMERA_MODEL_XIAO_ESP32S3 

#include "camera_pins.h"

unsigned long lastCaptureTime = 0; 
int imageCount = 1;                
bool camera_sign = false;        
bool sd_sign = false;             


void photo_save(const char * fileName) {
  camera_fb_t *fb = esp_camera_fb_get();
  if (!fb) {
    Serial.println("Failed to get camera frame buffer");
    return;
  }
  writeFile(SD, fileName, fb->buf, fb->len);
  
  esp_camera_fb_return(fb);

  Serial.println("Photo saved to file");
}

void writeFile(fs::FS &fs, const char * path, uint8_t * data, size_t len){
    Serial.printf("Writing file: %s\r\n", path);

    File file = fs.open(path, FILE_WRITE);
    if (!file) {
        Serial.println("Failed to open file for writing");
        return;
    }
    if (file.write(data, len) == len) {
        Serial.println("File written");
    } else {
        Serial.println("Write failed");
    }
    file.close();
}

void setup() {
  Serial.begin(115200);
  while (!Serial); 

  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.frame_size = FRAMESIZE_UXGA;
  config.pixel_format = PIXFORMAT_JPEG; 
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;

  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }

  camera_sign = true; 

  if (!SD.begin(21)) {
    Serial.println("Card Mount Failed");
    return;
  }
  
  uint8_t cardType = SD.cardType();
  
  if (cardType == CARD_NONE) {
    Serial.println("No SD card attached");
    return;
  }

  Serial.print("SD Card Type: ");
  if (cardType == CARD_MMC) {
    Serial.println("MMC");
  } else if (cardType == CARD_SD) {
    Serial.println("SDSC");
  } else if (cardType == CARD_SDHC) {
    Serial.println("SDHC");
  } else {
    Serial.println("UNKNOWN");
  }

  sd_sign = true; 

  Serial.println("Photos will begin shortly, please be ready.");
}

void loop() {
  if (camera_sign && sd_sign) {
    unsigned long now = millis();
  
    if ((now - lastCaptureTime) >= 60000) {
      char filename[32];
      sprintf(filename, "/image%d.jpg", imageCount);
      photo_save(filename);
      Serial.printf("Saved picture: %s\r\n", filename);
      Serial.println("Entering deep sleep for 10 seconds...");
      
      esp_sleep_enable_timer_wakeup(10000000); 
      esp_deep_sleep_start(); 
      
    }
  }
}
```

### 详细说明

此代码实现了一个基于 ESP32 摄像头模块的图像捕获系统，可以每隔 60 秒自动拍摄一张照片并保存到 SD 卡中。在 `void setup()` 函数中，初始化了摄像头和 SD 卡，并确认设备状态；在 `void loop()` 函数中，检查摄像头是否可以拍照，如果条件满足，则调用 `photo_save()` 函数保存图像，并在保存后进入深度睡眠状态 10 秒以节省能源。

</TabItem>

<TabItem value="SleepApplication2" label="轻度睡眠" default>

```cpp
#include <ESP_I2S.h>
#include <freertos/FreeRTOS.h>
#include <freertos/task.h>

I2SClass I2S;

const int sleepTime = 10000;

void i2sTask(void *pvParameters) {
  Serial.println("start collecting");
  for (int i = 0; i < 10; i++) {
    int sample = I2S.read();
    if (sample && sample != -1 && sample != 1) {
      Serial.println(sample);
    }
    vTaskDelay(pdMS_TO_TICKS(1000));
  }
  vTaskDelay(pdMS_TO_TICKS(3000));
  vTaskDelete(NULL);
}

void setup() {
  Serial.begin(115200);
  while (!Serial) {
    ;
  }

  I2S.setPinsPdmRx(42, 41);

  if (!I2S.begin(I2S_MODE_PDM_RX, 16000, I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_MONO)) {
    Serial.println("Failed to initialize I2S!");
    while (1);
  }
}

void loop() {
  esp_sleep_enable_timer_wakeup(sleepTime * 1000);
  xTaskCreate(i2sTask, "I2S Task", 2048, NULL, 1, NULL);
  
  Serial.println("Going to sleep now...");
  esp_light_sleep_start();

  delay(1000);
}
```

### 详细说明

此代码实现了使用 I2S 接口捕获音频数据的功能。在 `void setup()` 函数中，初始化了串口和 I2S 接口；在 `void loop()` 函数中，启用了唤醒定时器并创建了一个任务 `void i2sTask(void *pvParameters)`，负责读取音频样本并每秒打印有效数据。任务运行 10 次后，延迟 3 秒并自我删除。

</TabItem>

<TabItem value="SleepApplication3" label="调制解调器睡眠" default>

```cpp
#include "esp_camera.h"
#include <WiFi.h>

#define CAMERA_MODEL_XIAO_ESP32S3
#include "camera_pins.h"

const char *ssid = "******";
const char *password = "******";

void startCameraServer();
void setupLedFlash(int pin);

unsigned long lastCameraOperationTime = 0;
const unsigned long sleepDelay = 10000;

void setup() {
  Serial.begin(115200);
  Serial.setDebugOutput(true);
  Serial.println();

  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sccb_sda = SIOD_GPIO_NUM;
  config.pin_sccb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.frame_size = FRAMESIZE_UXGA;
  config.pixel_format = PIXFORMAT_JPEG;
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;

  if (config.pixel_format == PIXFORMAT_JPEG) {
    if (psramFound()) {
      config.jpeg_quality = 10;
      config.fb_count = 2;
      config.grab_mode = CAMERA_GRAB_LATEST;
    } else {
      config.frame_size = FRAMESIZE_SVGA;
      config.fb_location = CAMERA_FB_IN_DRAM;
    }
  } else {
    config.frame_size = FRAMESIZE_240X240;
#if CONFIG_IDF_TARGET_ESP32S3
    config.fb_count = 2;
#endif
  }

#if defined(CAMERA_MODEL_ESP_EYE)
  pinMode(13, INPUT_PULLUP);
  pinMode(14, INPUT_PULLUP);
#endif

  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }

  sensor_t *s = esp_camera_sensor_get();
  if (s->id.PID == OV3660_PID) {
    s->set_vflip(s, 1);
    s->set_brightness(s, 1);
    s->set_saturation(s, -2);
  }
  if (config.pixel_format == PIXFORMAT_JPEG) {
    s->set_framesize(s, FRAMESIZE_QVGA);
  }

#if defined(CAMERA_MODEL_M5STACK_WIDE) || defined(CAMERA_MODEL_M5STACK_ESP32CAM)
  s->set_vflip(s, 1);
  s->set_hmirror(s, 1);
#endif

#if defined(CAMERA_MODEL_ESP32S3_EYE)
  s->set_vflip(s, 1);
#endif

#if defined(LED_GPIO_NUM)
  setupLedFlash(LED_GPIO_NUM);
#endif

  WiFi.begin(ssid, password);
  WiFi.setSleep(false);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");

  startCameraServer();

  Serial.print("Camera Ready! Use 'http://");
  Serial.print(WiFi.localIP());
  Serial.println("' to connect");
}

void loop() {
  delay(10000);

  if (WiFi.getSleep()) {
    Serial.println("WiFi is in sleep mode.");
  } else {
    Serial.println("WiFi is active.");
  }

  if (millis() - lastCameraOperationTime > sleepDelay) {
    WiFi.setSleep(true);
    Serial.println("No camera operation. WiFi is now in sleep mode.");
  } else {
    WiFi.setSleep(false);
  }
  cameraOperation();
}

void cameraOperation() {
  lastCameraOperationTime = millis();
}
```

### 详细说明

此代码实现了摄像头模块的功能，同时结合了 WiFi 的调制解调器睡眠模式。在 `void setup()` 函数中，初始化了摄像头模块和 WiFi，并启动了摄像头服务器；在 `void loop()` 函数中，定期检查 WiFi 的睡眠状态，如果超过指定时间没有摄像头操作，则将 WiFi 设置为睡眠模式以节省能源。

### 详细说明

此代码实现了使用 ESP32 摄像头模块进行图像捕获，并通过 Wi-Fi 连接。在 `void setup()` 函数中，串口、摄像头和 Wi-Fi 连接被初始化；如果初始化成功，程序会打印 Wi-Fi 地址供用户连接。在 `void loop()` 函数中，代码每 10 秒检查一次 Wi-Fi 状态，如果没有摄像头操作，Wi-Fi 将进入睡眠模式以节省能源。每次调用 `cameraOperation()` 函数都会更新上次操作的时间，以确保在事件发生期间 Wi-Fi 保持连接。

</TabItem>

</Tabs>


:::tip
这些代码不能直接使用，您需要添加关于摄像头的头文件，请查看上述关于 XIAO ESP32 S3 的示例。
:::

## 总结

### 为什么使用深度睡眠模式
最大化节能而不影响功能，以延长设备的电池寿命。  
适用场景：电池寿命至关重要的应用，例如远程传感器节点、可穿戴设备以及其他低功耗 IoT 设备。虽然唤醒时间相对较慢，但这种权衡是值得的。

### 为什么使用 Modem Sleep 模式
优化无线通信模块的功耗，同时仍保持网络连接。  
适用场景：需要保持网络连接但也要求低功耗的应用，例如间歇性工作的 IoT 设备。Modem Sleep 可以显著降低无线模块的功耗，同时仍提供快速唤醒响应。

### 总结
这三种睡眠模式为开发者提供了不同的功耗/性能权衡选项，可以根据具体应用需求灵活选择。对于有电池寿命要求的设备，深度睡眠模式是一个不错的选择；而对于需要保持网络连接的 IoT 设备，Modem Sleep 模式是最佳选择。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>