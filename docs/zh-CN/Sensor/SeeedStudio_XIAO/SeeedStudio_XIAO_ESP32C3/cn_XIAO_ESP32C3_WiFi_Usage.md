---
description: Seeed Studio XIAO ESP32C3 的 WiFi 使用
title: WiFi 使用
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO_ESP32C3_WiFi_Usage
last_update:
  date: 05/15/2025
  author: Spencer
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 开始

Seeed Studio XIAO ESP32C3 支持符合 IEEE 802.11b/g/n 的 WiFi 连接。本篇 Wiki 将介绍在该开发板上使用 WiFi 的基础知识。

:::caution 注意
⚠️ 请在将开发板用作热点（接入点）时小心操作。开发板可能会过热并导致烫伤。
:::

## 硬件设置

- **步骤 1.** 将附带的 **WiFi/蓝牙天线** 连接到开发板上的 **IPEX 接口**

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-6.png" alt="pir" width={130} height="auto" /></div>

- **步骤 2.** 使用 USB Type-C 数据线将 XIAO ESP32C3 连接到您的电脑

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png" alt="pir" width={120} height="auto" /></div>

## 模式 1：STA 模式（站点模式） - 扫描 WiFi 网络

### 扫描 WiFi 接入点

在此示例中，我们将使用 XIAO ESP32C3 扫描其周围可用的 WiFi 网络。此时开发板将被配置为站点（STA）模式。

- **步骤 1.** 将以下代码复制并粘贴到 Arduino IDE 中

<Tabs>
  <TabItem value="basic wifi scan" label="基础 Wi-Fi 扫描" default>

```cpp
#include "WiFi.h"

void setup() {
  Serial.begin(115200);

  // 设置 WiFi 为站点模式，并断开之前连接的 AP
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);

  Serial.println("Setup done");
}

void loop() {
  Serial.println("scan start");

  // WiFi.scanNetworks 将返回找到的网络数量
  int n = WiFi.scanNetworks();
  Serial.println("scan done");
  if (n == 0) {
    Serial.println("no networks found");
  } else {
    Serial.print(n);
    Serial.println(" networks found");
    for (int i = 0; i < n; ++i) {
      // 打印每个找到的网络的 SSID 和 RSSI
      Serial.print(i + 1);
      Serial.print(": ");
      Serial.print(WiFi.SSID(i));
      Serial.print(" (");
      Serial.print(WiFi.RSSI(i));
      Serial.print(")");
      Serial.println((WiFi.encryptionType(i) == WIFI_AUTH_OPEN) ? " " : "*");
      delay(10);
    }
  }
  Serial.println("");

  // 扫描前等待一会儿
  delay(5000);
}
```

  </TabItem>
  <TabItem value="advan-wifi-scan" label="高级 Wi-Fi 扫描">

```cpp title="https://github.com/espressif/arduino-esp32/blob/master/libraries/WiFi/examples/WiFiScan/WiFiScan.ino"
/*
 *  此代码展示如何扫描 WiFi 网络。
 *  API 基于 Arduino WiFi Shield 库，但进行了显著修改以支持更新的 WiFi 功能。
 *  例如，`encryptionType()` 的返回值不同，因为支持更现代的加密方式。
 */
#include "WiFi.h"

void setup() {
  Serial.begin(115200);

  // 设置 WiFi 为站点模式，并断开之前连接的 AP
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);

  Serial.println("Setup done");
}

void loop() {
  Serial.println("Scan start");

  // WiFi.scanNetworks 将返回找到的网络数量
  int n = WiFi.scanNetworks();
  Serial.println("Scan done");
  if (n == 0) {
    Serial.println("no networks found");
  } else {
    Serial.print(n);
    Serial.println(" networks found");
    Serial.println("Nr | SSID                             | RSSI | CH | Encryption");
    for (int i = 0; i < n; ++i) {
      // 打印每个找到的网络的 SSID 和 RSSI
      Serial.printf("%2d", i + 1);
      Serial.print(" | ");
      Serial.printf("%-32.32s", WiFi.SSID(i).c_str());
      Serial.print(" | ");
      Serial.printf("%4ld", WiFi.RSSI(i));
      Serial.print(" | ");
      Serial.printf("%2ld", WiFi.channel(i));
      Serial.print(" | ");
      switch (WiFi.encryptionType(i)) {
        case WIFI_AUTH_OPEN:            Serial.print("open"); break;
        case WIFI_AUTH_WEP:             Serial.print("WEP"); break;
        case WIFI_AUTH_WPA_PSK:         Serial.print("WPA"); break;
        case WIFI_AUTH_WPA2_PSK:        Serial.print("WPA2"); break;
        case WIFI_AUTH_WPA_WPA2_PSK:    Serial.print("WPA+WPA2"); break;
        case WIFI_AUTH_WPA2_ENTERPRISE: Serial.print("WPA2-EAP"); break;
        case WIFI_AUTH_WPA3_PSK:        Serial.print("WPA3"); break;
        case WIFI_AUTH_WPA2_WPA3_PSK:   Serial.print("WPA2+WPA3"); break;
        case WIFI_AUTH_WAPI_PSK:        Serial.print("WAPI"); break;
        default:                        Serial.print("unknown");
      }
      Serial.println();
      delay(10);
    }
  }
  Serial.println("");

  // 删除扫描结果以释放内存
  WiFi.scanDelete();

  // 扫描前等待一会儿
  delay(5000);
}
```
  </TabItem>
</Tabs>

**步骤 2.** 上传代码并打开串口监视器以开始扫描 WiFi 网络

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-1.jpg" alt="pir" width={500} height="auto" /></div>

### 连接到 WiFi 网络

在此示例中，我们将使用 XIAO ESP32C3 连接到一个 WiFi 网络。

- **步骤 1.** 将以下代码复制并粘贴到 Arduino IDE 中

<Tabs>
  <TabItem value="basic wifi connect" label="基础 Wi-Fi 连接" default>

```cpp
#include <WiFi.h>

const char* ssid = "your-ssid";
const char* password = "your-password";

void setup() {
  Serial.begin(115200);
  delay(10);

  // 开始连接到 WiFi 网络
  Serial.println();
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}
void loop() {}
```

  </TabItem>
  <TabItem value="advan-wifi-connect" label="高级 Wi-Fi 连接">

```cpp title="https://github.com/espressif/arduino-esp32/blob/master/libraries/WiFi/examples/WiFiClientConnect/WiFiClientConnect.ino"
#include <WiFi.h>

const char *ssid = "your-ssid";
const char *password = "your-password";

void setup() {
  Serial.begin(115200);
  delay(10);

  // 开始连接到 WiFi 网络
  Serial.println();
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  // 尝试连接约 10 秒（20 次 500ms）
  int tryDelay = 500;

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  while (true) {
      switch (WiFi.status()) {
        case WL_NO_SSID_AVAIL: Serial.println("[WiFi] SSID not found"); break;
        case WL_CONNECT_FAILED:
          Serial.print("[WiFi] Failed - WiFi not connected! Reason: ");
          return;
          break;
        case WL_CONNECTION_LOST: Serial.println("[WiFi] Connection was lost"); break;
        case WL_SCAN_COMPLETED:  Serial.println("[WiFi] Scan is completed"); break;
        case WL_DISCONNECTED:    Serial.println("[WiFi] WiFi is disconnected"); break;
        case WL_CONNECTED:
          Serial.println("[WiFi] WiFi is connected!");
          Serial.print("[WiFi] IP address: ");
          Serial.println(WiFi.localIP());
          return;
          break;
        default:
          Serial.print("[WiFi] WiFi Status: ");
          Serial.println(WiFi.status());
          break;
      }
          delay(tryDelay);

    if (numberOfTries <= 0) {
      Serial.print("[WiFi] Failed to connect to WiFi!");
      // 使用 disconnect 函数强制停止连接尝试
      WiFi.disconnect();
      return;
    } else {
      numberOfTries--;
    }
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}
void loop() {}
```

</TabItem>
</Tabs>

**步骤 2.** 上传代码并打开串行监视器，检查开发板是否已连接到 WiFi 网络

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-2.jpg" alt="pir" width={500} height="auto" /></div>

## 模式 2: Soft-AP 模式（作为 STA 工作）- 用作接入点

在此示例中，我们将使用 XIAO ESP32C3 作为 WiFi 接入点，其他设备可以连接到它。这类似于手机上的 WiFi 热点功能。

- **步骤 1.** 将以下代码复制并粘贴到 Arduino IDE 中

```cpp
#include "WiFi.h"
void setup() {
  Serial.begin(115200);
  WiFi.softAP("ESP_AP", "123456789");
}

void loop() {
  Serial.print("Host Name:");
  Serial.println(WiFi.softAPgetHostname());
  Serial.print("Host IP:");
  Serial.println(WiFi.softAPIP());
  Serial.print("Host IPV6:");
#if ESP_ARDUINO_VERSION_MAJOR < 3
  Serial.println(WiFi.softAPIPv6());
#else
  Serial.println(WiFi.softAPlinkLocalIPv6());
#endif
  Serial.print("Host SSID:");
  Serial.println(WiFi.SSID());
  Serial.print("Host Broadcast IP:");
  Serial.println(WiFi.softAPBroadcastIP());
  Serial.print("Host mac Address:");
  Serial.println(WiFi.softAPmacAddress());
  Serial.print("Number of Host Connections:");
  Serial.println(WiFi.softAPgetStationNum());
  Serial.print("Host Network ID:");
  Serial.println(WiFi.softAPNetworkID());
  Serial.print("Host Status:");
  Serial.println(WiFi.status());
  delay(1000);
}
```

:::caution 注意
如果您的 ESP32 开发板版本已经更新到 3.0.0，您需要将代码中的 ```softAPIPv6()``` 更改为 ```softAPlinkLocalIPv6()```。
:::

**步骤 2.** 上传代码并打开串行监视器以检查有关 WiFi 接入点的更多详细信息

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-3.png" alt="pir" width={700} height="auto" /></div>

**步骤 3.** 在电脑或手机上扫描 WiFi 网络，您将能够使用我们在代码中指定的密码连接到这个新创建的网络

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-4.png" alt="pir" width="{300}" height="auto" /></div>

现在，您会看到串行监视器上的 **Number of Host Connections** 已更新为 **1**

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-5.png" alt="pir" width={700} height="auto" /></div>

## XIAO ESP32C3 与 Home Assistant

我们很高兴地宣布，我们已经为 XIAO ESP32C3 提供了对 ESPHome 和 Home Assistant 的支持！

有关此部分的更多信息，请参考相关教程。

- [使用 ESPHome 将 Grove 模块连接到 Home Assistant](https://wiki.seeedstudio.com/Connect-Grove-to-Home-Assistant-ESPHome/)
- [LinkStar Home Assistant](https://wiki.seeedstudio.com/h68k-ha-esphome/)

## 参考资料

- [Wi-Fi API - esp-arduino](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/wifi.html)

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>