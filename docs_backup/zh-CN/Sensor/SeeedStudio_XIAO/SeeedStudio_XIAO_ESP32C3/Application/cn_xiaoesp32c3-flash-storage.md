---
description: XIAO ESP32C3 Flash-storage
title: XIAO ESP32C3 Flash-storage
keywords:
- XIAO ESP32C3
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/xiaoesp32c3-flash-storage
last_update:
  date: 05/15/2025
  author: Citric
---

# XIAO ESP32C3 数据永久存储的不同方式

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

当我们使用开发板时，许多人希望能够使用芯片上的闪存来存储一些重要数据。这需要一种存储方法，即使在开发板异常情况下也能确保数据不会丢失。

本教程将介绍如何通过以下两种不同的存储方法将重要数据存储到 XIAO ESP32C3 的闪存中：

1. 第一个指南展示了如何使用 `Preferences.h` 库在 ESP32 闪存中**永久保存数据**。闪存中的数据在重置或断电后仍然存在。使用 `Preferences.h` 库非常适合保存网络凭证、API 密钥、阈值值或甚至 GPIO 的最后状态。您将学习如何从闪存中保存和读取数据。

2. 第二个指南解释了 XIAO ESP32C3 的 **EEPROM** 是什么以及它的用途。我们还将展示如何从 EEPROM 写入和读取数据，并构建一个项目示例来实践所学概念。

本文的大部分内容来自 [**RandomNerdTutorials.com**](https://randomnerdtutorials.com/)，部分程序和描述已稍作修改以适配 XIAO ESP32C3。特别感谢 [**RandomNerdTutorials.com**](https://randomnerdtutorials.com/) 提供教程和方法。以下是原始资源的直接链接：

- [ESP32 Flash Memory – Store Permanent Data (Write and Read)](https://randomnerdtutorials.com/esp32-flash-memory/)

- [Arduino EEPROM Explained – Remember Last LED State](https://randomnerdtutorials.com/arduino-eeprom-explained-remember-last-led-state/)

- [ESP32 Save Data Permanently using Preferences Library](https://randomnerdtutorials.com/esp32-save-data-permanently-preferences/)

## 使用 Preferences 库永久保存数据

### Preferences.h 库

当您在 Arduino IDE 中安装 XIAO ESP32C3 开发板时，该库会自动“安装”。

`Preferences.h` 库优先用于通过键值对存储变量值。永久保存数据可能很重要，例如：

- 记住变量的最后状态；

- 保存设置；

- 保存设备激活的次数；

- 或任何其他需要永久保存的数据类型。

如果您希望使用 XIAO ESP32C3 存储文件或非常长的字符串或数据，我们建议您使用扩展板和 SD 卡，而不建议使用本教程中的两种方法。

以下是 **Preferences.h 库的常用功能**

**功能 1**. `begin()` 方法用于打开一个具有定义命名空间的“存储空间”。参数 `false` 表示我们将以读写模式使用它。使用 `true` 可打开或创建命名空间为只读模式。

```c
preferences.begin("my-app", false);
```

在此示例中，命名空间名称为 `my-app`。命名空间名称限制为 15 个字符。

**功能 2**. 使用 `clear()` 清除打开的命名空间下的所有偏好设置（不会删除命名空间）：

```c
preferences.clear();
```

**功能 3**. 从打开的命名空间中移除一个键：

```c
preferences.remove(key);
```

**功能 4**. 使用 `end()` 方法关闭打开的命名空间下的偏好设置：

```c
preferences.end();
```

**功能 5**. 根据您想要保存的变量类型，应使用不同的方法。

使用 `Preferences.h` 库时，您应该定义您想要保存的数据类型。之后，如果您想读取该数据，必须知道保存的数据类型。换句话说，写入和读取的数据类型应该相同。

您可以使用 `Preferences.h` 保存以下数据类型：char、Uchar、short、Ushort、int、Uint、long、Ulong、long64、Ulong64、float、double、bool、string 和 bytes。

<table align="center">
  <tbody><tr>
      <td align="center">Char</td>
      <td align="left"><code>putChar(const char*key, int8_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Unsigned Char</td>
      <td align="left"><code>putUChar(const char* key, int8_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Short</td>
      <td align="left"><code>putShort(const char*key, int16_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Unsigned Short</td>
      <td align="left"><code>putUShort(const char* key, uint16_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Int</td>
      <td align="left"><code>putInt(const char*key, int32_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Unsigned Int</td>
      <td align="left"><code>putUInt(const char* key, uint32_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Long</td>
      <td align="left"><code>putLong(const char*key, int32_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Unsigned Long</td>
      <td align="left"><code>putULong(const char* key, uint32_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Long64</td>
      <td align="left"><code>putLong64(const char*key, int64_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Unsigned Long64</td>
      <td align="left"><code>putULong64(const char* key, uint64_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Float</td>
      <td align="left"><code>putFloat(const char*key, const float_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Double</td>
      <td align="left"><code>putDouble(const char* key, const double_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Bool</td>
      <td align="left"><code>putBool(const char*key, const bool value)</code></td>
    </tr>
    <tr>
      <td align="center">String</td>
      <td align="left"><code>putString(const char* key, const String value)</code></td>
    </tr>
    <tr>
      <td align="center">Bytes</td>
      <td align="left"><code>putBytes(const char*key, const void* value, size_t len)</code></td>
    </tr>
  </tbody></table>

**功能 6**. 同样地，根据您想要获取的变量类型，应该使用不同的方法。

<table align="center">
    <tr>
     <td align="center">Char</td>
     <td align="left"><code>getChar(const char*key, const int8_t defaultValue)</code></td>
 </tr>
 <tr>
     <td align="center">Unsigned Char</td>
     <td align="left"><code>getUChar(const char* key, const uint8_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Short</td>
     <td align="left"><code>getShort(const char*key, const int16_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Unsigned Short</td>
     <td align="left"><code>getUShort(const char* key, const uint16_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Int</td>
     <td align="left"><code>getInt(const char*key, const int32_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Unsigned Int</td>
     <td align="left"><code>getUInt(const char* key, const uint32_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Long</td>
     <td align="left"><code>getLong(const char*key, const int32_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Unsigned Long</td>
     <td align="left"><code>getULong(const char* key, const uint32_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Long64</td>
     <td align="left"><code>getLong64(const char*key, const int64_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Unsigned Long64</td>
     <td align="left"><code>gettULong64(const char* key, const uint64_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Float</td>
     <td align="left"><code>getFloat(const char*key, const float_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Double</td>
     <td align="left"><code>getDouble(const char* key, const double_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Bool</td>
     <td align="left"><code>getBool(const char*key, const bool defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">String</td>
     <td align="left"><code>getString(const char* key, const String defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">String</td>
     <td align="left"><code>getString(const char*key, char* value, const size_t maxLen)</code></td>
 </tr>
    <tr>
     <td align="center">Bytes</td>
     <td align="left"><code>getBytes(const char*key, void* buf, size_t maxLen)</code></td>
 </tr>
</table>

**功能 7**. 删除命名空间

在 Arduino 的 Preferences 实现中，没有完全删除命名空间的方法。因此，在多个项目中，ESP32 的非易失性存储 (NVS) Preferences 分区可能会变满。要完全擦除并重新格式化 Preferences 使用的 NVS 内存，可以创建一个包含以下内容的代码：

```c
#include <nvs_flash.h>

void setup() {
  nvs_flash_erase(); // 擦除 NVS 分区并...
  nvs_flash_init(); // 初始化 NVS 分区。
  while(true);
}

void loop() {

}
```

运行上述代码后，您应该立即下载一个新程序到您的开发板，否则每次上电时都会重新格式化 NVS 分区。

有关更多信息，您可以访问 [Preferences.cpp 文件](https://github.com/espressif/arduino-esp32/blob/master/libraries/Preferences/src/Preferences.cpp)。

### 使用 Preferences.h 库的一般方法

**步骤 1.** 要使用 Preferences.h 库存储数据，首先需要在代码中包含它：

```c
#include <Preferences.h>
```

**步骤 2.** 然后，您必须初始化 Preferences 库的一个实例。例如，可以将其命名为 `preferences`：

```c
Preferences preferences;
```

**步骤 3.** 在 `setup()` 中，以 115200 的波特率初始化串口监视器：

```c
Serial.begin(115200);
```

**步骤 4.** 在闪存中创建一个名为 `my-app` 的“存储空间”，以读/写模式打开。您可以使用其他名称。

```c
preferences.begin("my-app", false);
```

**步骤 5.** 使用 `get` 和 `put` 方法获取/存储数据内容。

#### 存储/获取 Key:value 键值对数据

使用 Preferences 保存的数据结构如下：

```c
namespace {
  key:value
}
```

您可以在同一个命名空间中保存不同的键，例如：

```c
namespace {
  key1: value1
  key2: value2
}
```

您也可以有多个命名空间使用相同的键（但每个键有自己的值）：

```c
namespace1{
  key:value1
}
namespace2{
  key:value2
}
```

例如，在“counter”键中存储新值：

```c
preferences.putUInt("counter", counter);
```

然后，获取 Preferences 中保存的 `counter` 键的值。如果找不到任何值，则默认返回 0（当代码第一次运行时会发生这种情况）。

```c
unsigned int counter = preferences.getUInt("counter", 0);
```

因此，您的数据结构如下：

```c
my-app{
  counter: counter
}
```

#### 存储/获取字符串数据

以下代码使用 `Preferences.h` 将您的网络凭据永久保存到 ESP32 的闪存中。

创建一个名为 `ssid` 的键，用于保存您的 SSID 值（`ssid` 变量）——使用 `putString()` 方法。

```c
preferences.putString("ssid", ssid);
```

添加另一个名为 `password` 的键，用于保存密码值（`password` 变量）：

```c
preferences.putString("password", password);
```

因此，您的数据结构如下：

```c
my-app{
  ssid: ssid
  password: password
}
```

使用 `getString()` 方法获取 SSID 和密码值。您需要使用保存变量时使用的键名，在此示例中为 `ssid` 和 `password` 键：

```c
String ssid = preferences.getString("ssid", ""); 
String password = preferences.getString("password", "");
```

在 `getString()` 函数中，我们传递了一个空字符串作为第二个参数。如果 Preferences 中没有保存 `ssid` 或 `password` 键，则返回该值。

**步骤 6.** 关闭 Preferences。

```c
preferences.end();
```

- 存储/获取 Key:value 键值对数据的完整过程如下所示。

```c
#include <Preferences.h>

Preferences preferences;

void setup() {
  Serial.begin(115200);
  delay(3000);
  Serial.println();

  // 使用 my-app 命名空间打开 Preferences。每个应用程序模块、库等
  // 都必须使用命名空间名称以防止键名冲突。我们将以读写模式打开存储空间
  // （第二个参数必须为 false）。
  // 注意：命名空间名称限制为 15 个字符。
  preferences.begin("my-app", false);

  // 删除打开的命名空间下的所有 Preferences
  //preferences.clear();

  // 或仅删除 counter 键
  //preferences.remove("counter");

  // 获取 counter 值，如果键不存在，则返回默认值 0
  // 注意：键名限制为 15 个字符。
  unsigned int counter = preferences.getUInt("counter", 0);

  // 将 counter 增加 1
  counter++;

  // 将 counter 打印到串口监视器
  Serial.printf("Current counter value: %u\n", counter);

  // 将 counter 存储到 Preferences
  preferences.putUInt("counter", counter);

  // 关闭 Preferences
  preferences.end();

  // 等待 10 秒
  Serial.println("Restarting in 10 seconds...");
  delay(10000);

  // 重启 ESP
  ESP.restart();
}

void loop() {

}
```

将代码上传到您的开发板，您将在串口监视器上看到以下内容：

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-permanently-data/1.png"/></div>

- 存储/获取字符串数据的完整过程如下所示。

使用 `Preferences.h` 保存网络凭据。

```c
#include <Preferences.h>

Preferences preferences;

const char* ssid = "REPLACE_WITH_YOUR_SSID";
const char* password = "REPLACE_WITH_YOUR_PASSWORD";

void setup() {
  Serial.begin(115200);
  delay(3000);
  Serial.println();

  preferences.begin("credentials", false);
  preferences.putString("ssid", ssid); 
  preferences.putString("password", password);

  Serial.println("Network Credentials Saved using Preferences");

  preferences.end();
}

void loop() {

}
```

将代码上传到您的开发板，您将在串口监视器上看到以下内容：

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-permanently-data/2.png"/></div>

使用保存在 Preferences 中的网络凭据连接到 Wi-Fi。

```c
#include <Preferences.h>
#include "WiFi.h"

Preferences preferences;

String ssid;
String password;

void setup() {
  Serial.begin(115200);
  delay(3000);
  Serial.println();
  
  preferences.begin("credentials", false);
 
  ssid = preferences.getString("ssid", ""); 
  password = preferences.getString("password", "");

  if (ssid == "" || password == ""){
    Serial.println("No values saved for ssid or password");
  }
  else {
    // Connect to Wi-Fi
    WiFi.mode(WIFI_STA);
    WiFi.disconnect();
    delay(100);
    WiFi.begin(ssid.c_str(), password.c_str());
    Serial.print("Connecting to WiFi ");
    Serial.println(ssid);
    Serial.println(password);
    while (WiFi.status() != WL_CONNECTED) {
      Serial.print('.');
      delay(1000);
    }
    Serial.println(WiFi.localIP());  
  }
}

void loop() {
  // put your main code here, to run repeatedly:
}
```

在运行上述代码之前，请确保您已经保存了网络凭据。将此代码上传到您的开发板，如果一切正常，您将在串口监视器上看到以下内容：

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-permanently-data/3.png"/></div>

## 使用 EEPROM 存储永久数据

### 什么是 EEPROM？

EEPROM 是 ESP32 微控制器的内部存储器，允许在板子重启后保留数据。在使用微控制器时，尤其是在意外断电（例如电源丢失）时，能够保留数据是非常有用的。

ESP32 微控制器具有一个 Flash 存储区域，可以像 Arduino 的 EEPROM 一样使用，即使板子关闭也能保留数据。

:::caution
需要注意的是，EEPROM 的容量和寿命是有限的。存储单元可以被多次读取，但写入次数限制为 **100,000** 次。因此，建议仔细考虑存储数据的大小以及更新的频率。EEPROM 存储器可以存储 512 个 0 到 255 的值，或者 128 个 IP 地址或 RFID 标签。
:::

ESP32 的微控制器具有 EEPROM（电可擦可编程只读存储器）。这是一个小型存储空间，可以存储字节变量。存储在 EEPROM 中的变量即使在重置或断电后也会保留。简单来说，EEPROM 是类似于计算机硬盘的永久存储。

EEPROM 可以通过电子方式读取、擦除和重新写入。在 Arduino 中，可以使用 EEPROM 库轻松地从 EEPROM 中读取和写入数据。

每个 EEPROM 位置可以存储一个字节，这意味着只能存储 8 位数字，包括 0 到 255 之间的整数值。

### 可用的 EEPROM 函数

要使用 Arduino IDE 从 ESP32 的 Flash 存储器中读取和写入数据，我们将使用 EEPROM 库。使用此库与 ESP32 的方式与 Arduino 的方式非常相似。因此，如果您以前使用过 Arduino 的 EEPROM，那么这并没有太大区别。

我们还建议您查看我们的文章：[Arduino EEPROM](https://randomnerdtutorials.com/arduino-eeprom-explained-remember-last-led-state/)。

**函数 1**. 初始化存储器大小

在使用函数之前，我们需要使用 `EEPROM.begin()` 初始化存储器大小。

```c
EEPROM.begin(EEPROM_SIZE);
```

**函数 2**. 写入 & 存储

要将数据写入 EEPROM，可以使用 `EEPROM.write()` 函数，该函数接受两个参数。第一个是要保存数据的 EEPROM 位置或地址，第二个是我们要保存的值：

```c
EEPROM.write(address, value);
```

`EEPROM.write()` 等效于使用 `EEPROM.put()`。

```c
EEPROM.put(address, value);
```

例如，要在地址 0 写入数字 9，可以这样写：

```c
EEPROM.write(0, 9);
```

:::tip
如果我们想存储浮点数据，通常使用 `EEPROM.put()` 方法而不是 `EEPROM.write()` 方法。如果您想使用 `write()` 方法存储浮点数据，则需要使用 `EEPROM.writeFloat()`。
:::

**函数 3**. 读取 & 获取

要从 EEPROM 中读取一个字节，可以使用 `EEPROM.read()` 函数。此函数以字节的地址作为参数。

```c
EEPROM.read(address);
```

`EEPROM.read()` 等效于使用 `EEPROM.get()`。

```c
EEPROM.get(address);
```

例如，要读取之前存储在地址 0 的字节：

```c
EEPROM.read(0);
```

这将返回 **9**，即存储在该位置的值。

:::tip
如果我们想获取浮点数据，通常使用 `EEPROM.get()` 方法而不是 `EEPROM.read()` 方法。如果您想使用 `read()` 方法获取浮点数据，则需要使用 `EEPROM.readFloat()`。
:::

**函数 4**. 更新值

`EEPROM.update()` 函数特别有用。它仅在写入的值与已保存的值不同的情况下才会写入 EEPROM。

由于 EEPROM 的写入/擦除周期有限，使用 `EEPROM.update()` 函数而不是 `EEPROM.write()` 可以节省写入周期。

您可以按以下方式使用 `EEPROM.update()` 函数：

```c
EEPROM.update(address, value);
```

目前，我们在地址 0 中存储了 9。因此，如果我们调用：

```c
EEPROM.update(0, 9);
```

它不会再次写入 EEPROM，因为当前保存的值与我们想要写入的值相同。

:::note
要了解更多关于 EEPROM 操作的信息，可以阅读 [官方 Arduino 文档](https://docs.arduino.cc/learn/programming/eeprom-guide#eeprom-clear)。
:::

### 使用 EEPROM 的通用方法

为了向您展示如何在 XIAO ESP32C3 的闪存中保存数据，我们将保存一个输出的最后状态，在本例中是一个 LED。

按照以下原理图将 LED 连接到 XIAO ESP32C3。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/XIAO_WiFi/connect-led-2.png"/></div>

首先，您需要包含 EEPROM 库。

```c
#include <EEPROM.h>
```

然后，定义 EEPROM 的大小。这是您希望在闪存中访问的字节数。在本例中，我们只保存 LED 的状态，因此 EEPROM 大小设置为 1。

```c
#define EEPROM_SIZE 1
```

我们还定义了其他变量，这些变量是使此代码正常工作的必要条件。

```c
// 常量不会改变。它们在这里用于设置引脚编号：
const int ledPin = D10;      // LED 引脚的编号

// 变量会改变：
int ledState = LOW;  // ledState 用于设置 LED 的状态

// 通常，您应该使用 "unsigned long" 来保存时间的变量
// 值会很快变得太大，int 无法存储
unsigned long previousMillis = 0;  // 将存储上次 LED 更新的时间

// 常量不会改变：
const long interval = 10000;  // 间隔时间（毫秒）
```

在 `setup()` 中，您需要使用预定义的大小初始化 EEPROM。

```c
EEPROM.begin(EEPROM_SIZE);
```

为了确保您的代码以最新的 LED 状态初始化，在 `setup()` 中，您应该从闪存中读取最后的 LED 状态。它存储在地址 0。

然后，您只需根据从闪存中读取的值打开或关闭 LED。

```c
digitalWrite (ledPin, ledState);
```

在 `loop()` 函数部分，我们需要做的只是每隔一段时间切换 LED 的状态。

```c
// 检查是否是时候闪烁 LED；也就是说，如果当前时间和上次闪烁 LED 的时间之间的差值
// 大于您希望闪烁 LED 的间隔。
unsigned long currentMillis = millis();

if (currentMillis - previousMillis >= interval) {
    // 保存上次闪烁 LED 的时间
    previousMillis = currentMillis;
    Serial.println("状态已更改");
    // 如果 LED 关闭，则将其打开，反之亦然：
    if (ledState == LOW) {
      ledState = HIGH;
    } else {
      ledState = LOW;
    }

    // 使用变量的 ledState 设置 LED：
    digitalWrite(ledPin, ledState);
}
```

接下来，我们需要确定倒计时是否结束，在倒计时结束后切换 LED 的状态，并将其存储在闪存中。

```c
EEPROM.write(0, ledState);
```

最后，我们使用 EEPROM.commit() 使更改生效。

```c
EEPROM.commit();
```

以下是完整的程序。

:::caution
请注意，您 **不应该** 长时间运行此示例。在本示例中，我们每 10 秒写入一次 EEPROM，长时间运行此示例将 **大大缩短** EEPROM 的寿命。
:::

```c
// 包含库以从闪存中读取和写入
#include <EEPROM.h>

// 定义您想要访问的字节数
#define EEPROM_SIZE 1

// 常量不会改变。它们在这里用于设置引脚编号：
const int ledPin = D10;      // LED 引脚的编号

// 变量会改变：
int ledState = LOW;  // ledState 用于设置 LED 的状态

// 通常，您应该使用 "unsigned long" 来保存时间的变量
// 值会很快变得太大，int 无法存储
unsigned long previousMillis = 0;  // 将存储上次 LED 更新的时间

// 常量不会改变：
const long interval = 10000;  // 间隔时间（毫秒）

void setup() { 
  Serial.begin(115200);
  
  // 使用预定义的大小初始化 EEPROM
  EEPROM.begin(EEPROM_SIZE);

  pinMode(ledPin, OUTPUT);

  // 从闪存中读取最后的 LED 状态
  ledState = EEPROM.read(0);
  // 将 LED 设置为最后存储的状态
  digitalWrite(ledPin, ledState);
}

void loop() {
  // 这里是您需要一直运行的代码。

  // 检查是否是时候闪烁 LED；也就是说，如果当前时间和上次闪烁 LED 的时间之间的差值
  // 大于您希望闪烁 LED 的间隔。
  unsigned long currentMillis = millis();

  if (currentMillis - previousMillis >= interval) {
    // 保存上次闪烁 LED 的时间
    previousMillis = currentMillis;
    Serial.println("状态已更改");
    // 如果 LED 关闭，则将其打开，反之亦然：
    if (ledState == LOW) {
      ledState = HIGH;
    } else {
      ledState = LOW;
    }
    // 将 LED 状态保存到闪存中
    EEPROM.write(0, ledState);
    EEPROM.commit();
    Serial.println("状态已保存到闪存中");

    // 使用变量的 ledState 设置 LED：
    digitalWrite(ledPin, ledState);
  }
}
```

将代码上传到您的开发板，您应该在串口监视器上看到以下内容：

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-permanently-data/4.png"/></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>