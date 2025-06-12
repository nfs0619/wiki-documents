---
description: 使用 Seeed Studio XIAO ESP32S3 的 WiFi 功能。
title: 两种版本的 WiFi 使用
keywords:
- esp32s3
- xiao
- wifi 使用
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao_esp32s3_wifi_usage
last_update:
  date: 05/15/2025
  author: Citric
---

# 使用 Seeed Studio XIAO ESP32S3 的 WiFi 功能（Sense）

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3</th>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

Seeed Studio XIAO ESP32S3 是一款嵌入式开发板，凭借其支持 2.4GHz WiFi - 802.11b/g/n 和蓝牙低功耗（BLE）双无线通信，提供了卓越的射频性能。这种能力使 XIAO ESP32S3 能够为各种物联网（IoT）应用提供可靠且高速的无线连接。此外，该开发板支持 U.FL 天线连接，可以将通信范围扩展到 100 米以上，非常适合需要远程无线连接的项目。在本教程中，我们将探讨如何利用 XIAO ESP32S3 的 Wi-Fi 功能连接到 Wi-Fi 网络并执行基本的网络任务。

## 入门指南

### 安装天线

在 XIAO ESP32S3 的正面左下角，有一个单独的“WiFi/BT 天线连接器”。为了获得更好的 WiFi/蓝牙信号，您需要取出包装内的天线并将其安装到连接器上。

安装天线有一个小技巧，如果直接用力按压，您会发现很难按下，并且手指会疼！正确的安装方法是先将天线连接器的一侧插入连接器块，然后稍微按压另一侧，天线就会安装好。

拆卸天线也是如此，不要用蛮力直接拔出天线，而是先从一侧用力提起，这样天线就很容易取下。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/5.gif" style={{width:500, height:'auto'}}/></div>

:::note
如果未安装天线，可能无法连接到 WiFi 网络。

如果条件允许，我建议您使用大棒天线，这样可以获得更好的体验。
:::

## WiFi 库的常用接口

ESP32-S3 提供了广泛的 WiFi 网络功能。通常，我们可以查看 ESP32 内置包中的 WiFi 库功能，并选择相应的功能来实现所需的功能。接下来，我们将列出一些常用接口并介绍它们的用法。

### 通用 WiFi 功能

- `WiFiGenericClass::getHostname()` -- 这是 ESP32 的 WiFi 库中的一个函数，用于返回设备的主机名（hostname）作为字符串。主机名是网络中标识设备的唯一名称。此函数会检索之前使用 `WiFiGenericClass::setHostname()` 设置的主机名。如果未设置主机名，将返回默认主机名。

- `WiFiGenericClass::persistent(bool persistent)` -- 是一个方法，用于启用或禁用 ESP32 WiFi 库的持久模式。当启用持久模式时，Wi-Fi 配置会存储在非易失性存储器（NVM）中，即使断电或重置后也会保留。当禁用持久模式时，配置存储在 RAM 中，断电或重置后会丢失。

	- **输入参数**
		- **persistent**: 如果参数为 true，则启用持久模式。如果参数为 false，则禁用持久模式。

- `WiFiGenericClass::enableLongRange(bool enable)` -- 此函数用于启用或禁用 WiFi 模块的长距离（LR）功能。启用后，LR 功能允许模块连接到更远的 WiFi 网络，但数据速率较低。

	- **输入参数**
		- **enable**: 参数设置为 true 时启用该功能，设置为 false 时禁用。

- `WiFiGenericClass::mode(wifi_mode_t m)` -- 此函数用于设置设备的 WiFi 模式。

	- **输入参数**
		- **m**: 参数 m 指定要设置的模式，可以是 wifi_mode_t 枚举中定义的以下常量之一：
			- **WIFI_MODE_NULL**: 禁用 WiFi 站点和接入点模式。
			- **WIFI_MODE_STA**: 启用 WiFi 站点模式以连接到现有 WiFi 网络。
			- **WIFI_MODE_AP**: 启用接入点模式以创建新的 WiFi 网络。
			- **WIFI_MODE_APSTA**: 同时启用 WiFi 站点和接入点模式。

- `WiFiGenericClass::setSleep(wifi_ps_type_t sleepType)` -- 此函数设置 WiFi 模块的省电模式。

	- **输入参数**
		- **sleepType**: 参数 sleepType 是一个枚举类型，用于指定使用的省电模式类型。可能的睡眠类型有以下三种：
			- **WIFI_PS_NONE**: 默认睡眠模式，WiFi 模块不会进入省电模式。
			- **WIFI_PS_MIN_MODEM**: 在此模式下，WiFi 模块关闭调制解调器，同时保持与接入点（AP）的连接。
			- **WIFI_PS_MAX_MODEM**: 在此模式下，WiFi 模块关闭调制解调器和站点，导致与 AP 的断开连接。

### STA 功能

- `WiFiSTAClass::status()` -- 返回连接状态。

	- **输出**: wl_status_t 中定义的值之一。
		- **WL_NO_SHIELD**: 此状态码表示 Wi-Fi 模块不存在。
    	- **WL_IDLE_STATUS**: 此状态码表示 Wi-Fi 模块未执行任何操作。
    	- **WL_NO_SSID_AVAIL**: 此状态码表示在扫描期间未找到任何 Wi-Fi 网络。
    	- **WL_SCAN_COMPLETED**: 此状态码表示 Wi-Fi 扫描已成功完成。
    	- **WL_CONNECTED**: 此状态码表示 ESP32 已成功连接到 Wi-Fi 网络。
    	- **WL_CONNECT_FAILED**: 此状态码表示连接到 Wi-Fi 网络失败。
    	- **WL_CONNECTION_LOST**: 此状态码表示与 Wi-Fi 网络的连接已丢失。
    	- **WL_DISCONNECTED**: 此状态码表示 ESP32 之前已连接到 Wi-Fi 网络，但当前未连接到任何网络。

- `WiFiSTAClass::begin(const char* wpa2_ssid, wpa2_auth_method_t method, const char* wpa2_identity, const char* wpa2_username, const char *wpa2_password, const char* ca_pem, const char* client_crt, const char* client_key, int32_t channel, const uint8_t* bssid, bool connect)` -- 使用 WPA2 Enterprise AP 启动 Wi-Fi 连接。

	- **输入参数** (可选)
		- **ssid**: 指向 SSID 字符串的指针。
		- **method**: WPA2 的认证方法 (WPA2_AUTH_TLS, WPA2_AUTH_PEAP, WPA2_AUTH_TTLS)。
		- **wpa2_identity**: 指向身份的指针。
		- **wpa2_username**: 指向用户名的指针。
		- **wpa2_password**: 指向密码的指针。
		- **ca_pem**: 指向包含 CA 证书的 .pem 文件内容的字符串的指针。
		- **client_crt**: 指向包含客户端证书的 .crt 文件内容的字符串的指针。
		- **client_key**: 指向包含客户端密钥的 .key 文件内容的字符串的指针。
		- **channel**: 可选。AP 的频道。
		- **bssid**: 可选。AP 的 BSSID / MAC 地址。
		- **connect**: 可选。是否调用连接。

- `WiFiSTAClass::reconnect()` -- 强制断开连接，然后开始重新连接到 AP。

	- **输出**: True/False。

- `WiFiSTAClass::disconnect(bool wifioff, bool eraseap)` -- 从网络断开连接。

	- **输入参数**
		- **wifioff**: 如果为 `true`，则关闭 Wi-Fi 无线电。
		- **eraseap**: 如果为 `true`，则从 NVS 内存中擦除 AP 配置。
	
	- **输出**: True/False。

- `WiFiSTAClass::config(IPAddress local_ip, IPAddress gateway, IPAddress subnet, IPAddress dns1, IPAddress dns2)` -- 更改 IP 配置设置并禁用 DHCP 客户端。

	- **输入参数**
		- **local_ip**: 静态 IP 配置。
		- **gateway**: 静态网关配置。
		- **subnet**: 静态子网掩码。
		- **dns1**: 静态 DNS 服务器 1。
		- **dns2**: 静态 DNS 服务器 2。

- `WiFiSTAClass::setAutoConnect(bool autoConnect)` -- 已弃用。设置 ESP32 站点在上电时是否自动连接到记录的 AP。默认启用自动连接。

	- **输入参数**
		- **autoConnect**: autoConnect 布尔值。

	- **输出**: False。

- `WiFiSTAClass::waitForConnectResult(unsigned long timeoutLength)` -- 等待 Wi-Fi 连接达到结果。

	- **输入参数**
		- **timeoutLength**: 参数指定等待建立连接的最长时间（毫秒）。

	- **输出**: wl_status_t 中定义的值之一。

- `WiFiSTAClass::localIP()` -- 获取站点接口的 IP 地址。

	- **输出**: IPAddress 站点 IP。

- `WiFiSTAClass::macAddress(uint8_t* mac)` -- 获取站点接口的 MAC 地址。

	- **输入参数**
		- **mac** (可选): 指向长度为 WL_MAC_ADDR_LENGTH 的 uint8_t 数组的指针。

	- **输出**: 指向 uint8_t * 的指针。

- `WiFiSTAClass::SSID()` -- 返回与网络关联的当前 SSID。

	- **输出**: SSID。

- `WiFiSTAClass::RSSI(void)` -- 返回当前网络的 RSSI。

	- **输出**: RSSI。

### AP 功能

- `WiFiAPClass::softAP(const char* ssid, const char* passphrase, int channel, int ssid_hidden, int max_connection, bool ftm_responder)` -- 这是 ESP32-S3 的 Wi-Fi 库中的一个函数，用于设置 SoftAP（软件接入点），允许其他设备连接到 ESP32-S3 并访问其资源。

	- **输入参数**
		-  **ssid**:              指向 SSID 的指针（最多 63 个字符）。
 		-  **passphrase**:        （对于 WPA2 至少 8 个字符，对于开放网络使用 NULL）。
 		-  **channel**:           Wi-Fi 频道号，1 - 13。
 		-  **ssid_hidden**:       网络隐藏（0 = 广播 SSID，1 = 隐藏 SSID）。
 		-  **max_connection**:    最大同时连接的客户端数量，1 - 4。

	- **输出**: True/False。

- `WiFiAPClass::softAPgetStationNum()` -- 获取连接到 softAP 接口的站点/客户端数量。

	- **输出**: 站点数量。

- `WiFiAPClass::softAPConfig(IPAddress local_ip, IPAddress gateway, IPAddress subnet, IPAddress dhcp_lease_start)` -- 配置 SoftAP 的函数。

	- **输入参数**
		- **local_ip**:      接入点 IP。
		- **gateway**:       网关 IP。
		- **subnet**:        子网掩码。

	- **输出**: True/False。

- `WiFiAPClass::softAPIP()` -- 获取 softAP 接口的 IP 地址。

	- **输出**: IPAddress softAP IP。

- `WiFiAPClass::softAPmacAddress(uint8_t* mac)` -- 获取 softAP 接口的 MAC 地址。

	- **输入参数**
		- **mac** (可选):   指向长度为 WL_MAC_ADDR_LENGTH 的 uint8_t 数组的指针。

	- **输出**: 指向 uint8_t* 的指针或字符串 mac。

### WiFi 扫描功能

- `WiFiScanClass::scanNetworks(bool async, bool show_hidden, bool passive, uint32_t max_ms_per_chan, uint8_t channel, const char * ssid, const uint8_t * bssid)` -- 开始扫描可用的 Wi-Fi 网络。

	- **输入参数**
		- **async**: 此参数是一个布尔值，决定扫描是否异步执行。如果设置为 true，函数会立即返回，稍后可以通过调用 getScanResults() 函数获取扫描结果。如果设置为 false，函数会阻塞直到扫描完成。
		- **show_hidden**: 此参数是一个布尔值，决定函数是否应在扫描结果中包含隐藏网络。
		- **passive**: 此参数是一个布尔值，决定函数是否执行被动扫描。如果设置为 true，函数在扫描期间不会发送任何数据包，这可能会耗时更长，但在某些情况下可能有用。
		- **max_ms_per_chan**: 此参数是每个频道扫描的最大时间（毫秒）。
		- **channel**: 此参数是要扫描的 Wi-Fi 频道。如果设置为 0，函数将扫描所有可用频道。
		- **ssid**: 此参数是指向包含要扫描的网络 SSID 的空终止字符串的指针。如果设置为 nullptr，函数将扫描所有可用网络。
		- **bssid**: 此参数是指向包含接入点 MAC 地址的 6 字节数组的指针。如果设置为 nullptr，函数将扫描所有接入点。

### WiFi 扫描功能

- **输出**: 此函数的返回值是一个整数，表示扫描到的网络数量。

- `WiFiScanClass::getNetworkInfo(uint8_t i, String &ssid, uint8_t &encType, int32_t &rssi, uint8_t* &bssid, int32_t &channel)` -- 将扫描到的 WiFi 网络的所有信息加载到指针参数中。

	- **输入参数**
		- **i**: 用于指定要检索的扫描网络的索引。
		- **ssid**: ssid 参数是一个 String 类型的引用变量，函数会将网络的 SSID 存储在其中。
		- **encType**: encType 参数是一个 uint8_t 类型的引用变量，函数会将网络的加密类型存储在其中（0 = 开放, 1 = WEP, 2 = WPA_PSK, 3 = WPA2_PSK, 4 = WPA_WPA2_PSK）。
		- **rssi**: rssi 参数是一个 int32_t 类型的引用变量，函数会将网络的接收信号强度指示 (RSSI) 存储在其中。
		- **bssid**: bssid 参数是一个 uint8_t* 指针的引用变量，函数会将网络的 BSSID（MAC 地址）存储在其中。
		- **channel**: channel 参数是一个 int32_t 类型的引用变量，函数会将网络的信道号存储在其中。

	- **输出**: 返回 True 或 False。

- `WiFiScanClass::SSID(uint8_t i)` -- 返回扫描网络时发现的 SSID。

	- **输入参数**
		- **i**: 指定要从哪个网络项获取信息。

	- **输出**: 指定网络项的 SSID 字符串。

- `WiFiScanClass::RSSI(uint8_t i)` -- 返回扫描网络时发现的 RSSI。

	- **输入参数**
		- **i**: 指定要从哪个网络项获取信息。

	- **输出**: 指定网络项的 RSSI 的有符号值。

### WiFi 客户端功能

- `WiFiClient::connect(IPAddress ip, uint16_t port, int32_t timeout)` -- 此函数用于 WiFiClient 库中，用于在指定的超时时间内连接到远程 IP 地址和端口。

	- **输入参数**
		- **ip**:   要连接的服务器的 IP 地址。
		- **port**: 要连接的服务器的端口号。
		- **timeout** (可选): 建立连接的最大等待时间（以毫秒为单位）。如果在此时间内未建立连接，函数将返回错误。如果 timeout 设置为 0，函数将无限期等待连接建立。

- `WiFiClient::stop()` -- 此函数用于断开客户端与服务器的连接，并释放客户端使用的套接字/端口。一旦调用此函数，客户端将无法再发送或接收数据。

- `WiFiClient::setTimeout(uint32_t seconds)` -- 此函数设置客户端等待连接建立或接收数据的最大秒数。如果连接或数据传输超过指定的超时时间，连接将关闭。

	- **输入参数**
		- **seconds**:   超时时间（以秒为单位）。

- `WiFiClient::write(uint8_t data)` -- 通过 WiFiClient 实例向连接的服务器写入单个字节数据。或者 `WiFiClient::write(const uint8_t *buf, size_t size)`。

	- **输入参数**
		- **data**:   需要通过已建立的网络连接发送的单个字节数据。

- `WiFiClient::read()` -- 此函数从连接的服务器读取单个字节的传入数据。它以整数值返回读取的字节。如果没有可用数据，则返回 -1。或者 `read(uint8_t *buf, size_t size)`。

	- **输出**: 一个整数值，表示接收的字节数。如果返回值为 0，则表示服务器已关闭连接。

- `WiFiClient::peek()` -- 此函数用于检查是否有任何数据可从服务器读取，而无需实际读取数据。

	- **输出**: 它返回传入数据的下一个字节，而不将其从接收缓冲区中移除。如果没有可用数据，则返回 -1。

- `WiFiClient::available()` -- 此函数用于检查从服务器读取的数据字节数。

	- **输出**: 它返回一个整数值，表示可读取的字节数。

### WiFi 服务器功能

- `WiFiServer::stopAll()` -- 此函数是 Arduino WiFi 库中 WiFiServer 类的方法。此方法停止使用 WiFiServer 类创建的所有服务器实例。当您想一次性停止所有服务器，而不是为每个实例单独调用 `stop()` 方法时，此方法非常有用。

- `WiFiServer::begin(uint16_t port, int enable)` -- 此函数用于在指定端口启动服务器。服务器将监听传入的客户端连接。

	- **输入参数**
		- **port**: 要监听的端口号。
		- **enable** (可选): 一个标志，用于指示服务器是否应在启动后立即启用。此标志默认为 true。

- `WiFiServer::hasClient()` -- 此函数用于检查服务器上是否有任何传入的客户端连接可用。此函数可在循环中使用，以持续检查新连接。

	- **输出**: 如果有客户端连接，则返回一个 WiFiClient 对象；如果没有客户端等待连接，则返回一个 NULL 指针。

- `WiFiServer::end()` -- 此函数用于停止服务器并释放相关资源。一旦调用，服务器将无法再接受新的客户端连接。任何现有的客户端连接将保持打开状态，直到客户端或服务器关闭它们为止。`WiFiServer::close()` 和 `WiFiServer::stop()` 具有相同的功能。

### WiFi 多功能

- `WiFiMulti::addAP(const char* ssid, const char *passphrase)` -- 此函数用于向 WiFiMulti 对象的可用接入点 (AP) 列表中添加一个新的接入点。

	- **输入参数**
		- **ssid**: 指向 SSID 的指针（最多 63 个字符）。
		- **passphrase**: （对于 WPA2，最少 8 个字符；对于开放网络，使用 NULL）。

	- **输出**: 返回 True 或 False。

- `WiFiMulti::run(uint32_t connectTimeout)` -- 此函数尝试按顺序连接到保存的接入点之一，直到成功连接为止。

- **输入参数**
  - **connectTimeout**: 此参数指定等待连接的最长时间（以毫秒为单位）。如果 `connectTimeout` 设置为 0，函数将不会超时，并会无限尝试连接。

- **输出**: status

## 扫描附近的 WiFi 网络

以下是一个使用 XIAO ESP32S3 扫描附近 WiFi 网络的示例程序。

在 Arduino IDE 中，依次点击 **File > Examples > WiFi > WiFiScan**。这将加载一个用于扫描 XIAO ESP32S3 范围内 WiFi 网络的示例代码。

这对于检查您尝试连接的 WiFi 网络是否在开发板的范围内或其他应用程序非常有用。您的 WiFi 项目可能无法正常工作，因为它可能由于 WiFi 信号强度不足而无法连接到路由器。

```c
#include "WiFi.h"

void setup() {
  Serial.begin(115200);

  // 将 WiFi 设置为站点模式，并断开之前连接的 AP
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
      Serial.println((WiFi.encryptionType(i) == WIFI_AUTH_OPEN)?" ":"*");
      delay(10);
    }
  }
  Serial.println("");

  // 扫描前等待片刻
  delay(5000);
}
```

上传并运行程序，您应该会在串口监视器中看到由 XIAO ESP32S3 搜索到的附近 WiFi 网络。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/37.png" style={{width:600, height:'auto'}}/></div>

### 程序注释

要使用 XIAO ESP32S3 的 WiFi 功能，首先需要在代码中包含 **WiFi.h** 库，如下所示：

```c
#include <WiFi.h>
```

XIAO ESP32S3 可以作为 WiFi 站点（Station）、接入点（Access Point）或两者兼具。使用 `WiFi.mode()` 并设置所需模式作为参数来设置 WiFi 模式。

```c
WiFi.mode(WIFI_STA);
```

当 ESP32 被设置为 WiFi 站点时，它可以连接到其他网络（如您的路由器）。

`WiFi.scanNetworks()` 返回找到的网络数量。在扫描完成后，您可以访问每个网络的参数。`WiFi.SSID()` 打印特定网络的 SSID。

`WiFi.RSSI()` 返回该网络的 RSSI。RSSI 是接收信号强度指示器的缩写，它是一个估算的功率水平，表示 RF 客户端设备从接入点或路由器接收到的信号强度。

最后，`WiFi.encryptionType()` 返回网络的加密类型。该示例在网络为开放网络时显示一个 *。不过，该函数可以返回以下选项之一（不仅限于开放网络）：
- WIFI_AUTH_OPEN
- WIFI_AUTH_WEP
- WIFI_AUTH_WPA_PSK
- WIFI_AUTH_WPA2_PSK
- WIFI_AUTH_WPA_WPA2_PSK
- WIFI_AUTH_WPA2_ENTERPRISE

## 连接到 WiFi 网络

要将 ESP32 连接到特定 WiFi 网络，您需要知道其 SSID 和密码。此外，该网络必须在 ESP32 的 WiFi 范围内（可以使用前面的示例扫描 WiFi 网络来检查）。

以下是一个使用 XIAO ESP32S3 连接到指定网络的示例程序，其中 `initWiFi()` 函数在程序中负责连接到网络。

```c
#include "WiFi.h"

// 替换为您的网络凭据
const char* ssid = "REPLACE_WITH_YOUR_SSID";
const char* password = "REPLACE_WITH_YOUR_PASSWORD";

void initWiFi() {
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi ..");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print('.');
    delay(1000);
  }
  Serial.println();
  Serial.println(WiFi.localIP());
}

void setup() {
  Serial.begin(115200);

  // 将 WiFi 设置为站点模式，并断开之前连接的 AP
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);

  initWiFi();
}

void loop() {
  
}
```

上传并运行程序以打开串口监视器。当连接到网络时，串口监视器将打印一串点，直到连接成功，然后将打印 XIAO 的 IP 地址。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/38.png" style={{width:600, height:'auto'}}/></div>

### 程序注释

让我们快速了解此函数的工作原理。

首先，设置 WiFi 模式。如果 XIAO ESP32S3 将连接到另一个网络（接入点/热点），它必须处于站点模式。

```c
WiFi.mode(WIFI_STA);
```

然后，使用 `WiFi.begin()` 连接到网络。您必须将网络 SSID 和密码作为参数传递：

```c
WiFi.begin(ssid, password);
```

连接到 WiFi 网络可能需要一些时间，因此我们通常添加一个 while 循环，不断检查连接是否已建立，方法是使用 `WiFi.status()`。当连接成功建立时，它将返回 `WL_CONNECTED`。

如果您想获取 WiFi 连接的信号强度，可以在连接 WiFi 后简单调用 `WiFi.RSSI()`。

## softAP 使用

如果将 XIAO ESP32S3 设置为接入点（热点），您可以使用任何具有 WiFi 功能的设备连接到 ESP32，而无需连接到路由器。

简单来说，当您将 XIAO ESP32S3 设置为接入点时，您创建了一个自己的 WiFi 网络，附近的 WiFi 设备（站点）可以连接到它（例如您的智能手机或计算机）。

在 Arduino IDE 中，依次点击 **File > Examples > WiFi > WiFiAccessPoint**。此示例将向您展示如何使用 XIAO ESP32S3 创建一个热点，并通过连接到该热点的简单网页控制灯的开关。

:::note
1. 我们对示例程序做了一些小改动，注释掉了 `LED_BUILTIN`，因为 XIAO ESP32S3 有自己的用户指示灯，无需外接 LED。
2. 仅当 XIAO ESP32S3 上的用户 LED 引脚设置为高电平时，LED 才会关闭；仅当引脚设置为低电平时，LED 才会打开。
3. 您还需要在程序中将热点名称和密码修改为您想要的值。
:::

```c
/*
  WiFiAccessPoint.ino 创建一个 WiFi 接入点并在其上提供一个 Web 服务器。

  步骤：
  1. 连接到接入点 "yourAp"
  2. 在浏览器中访问 http://192.168.4.1/H 以打开 LED 或 http://192.168.4.1/L 以关闭 LED
     或者
     在 PuTTY 终端中运行原始 TCP "GET /H" 和 "GET /L"，将 IP 地址设置为 192.168.4.1，端口设置为 80

  为 arduino-esp32 创建于 2018 年 7 月 4 日
  作者：Elochukwu Ifediora (fedy0)
*/

#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>

//#define LED_BUILTIN 2   // 设置连接测试 LED 的 GPIO 引脚，或者如果开发板有内置 LED，则注释掉此行

// 设置为您希望的凭据。
const char *ssid = "XIAO_ESP32S3";
const char *password = "password";

WiFiServer server(80);

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);

  Serial.begin(115200);
  Serial.println();
  Serial.println("配置接入点...");

  // 如果希望接入点开放，可以移除密码参数。
  WiFi.softAP(ssid, password);
  IPAddress myIP = WiFi.softAPIP();
  Serial.print("接入点 IP 地址: ");
  Serial.println(myIP);
  server.begin();

  Serial.println("服务器已启动");
}

void loop() {
  WiFiClient client = server.available();   // 监听传入的客户端

  if (client) {                             // 如果有客户端连接，
    Serial.println("新客户端。");           // 在串口打印消息
    String currentLine = "";                // 创建一个字符串以保存来自客户端的传入数据
    while (client.connected()) {            // 当客户端连接时循环
      if (client.available()) {             // 如果客户端有字节可读，
        char c = client.read();             // 读取一个字节，然后
        Serial.write(c);                    // 在串口监视器上打印出来
        if (c == '\n') {                    // 如果字节是换行符

          // 如果当前行为空，则表示连续收到两个换行符。
          // 这是客户端 HTTP 请求的结束，因此发送响应：
          if (currentLine.length() == 0) {
            // HTTP 头总是以响应代码（例如 HTTP/1.1 200 OK）开始
            // 和内容类型，以便客户端知道接下来是什么，然后是一个空行：
            client.println("HTTP/1.1 200 OK");
            client.println("Content-type:text/html");
            client.println();

            // HTTP 响应的内容紧随头之后：
            client.print("点击 <a href=\"/H\">这里</a> 打开 LED。<br>");
            client.print("点击 <a href=\"/L\">这里</a> 关闭 LED。<br>");

            // HTTP 响应以另一个空行结束：
            client.println();
            // 跳出 while 循环：
            break;
          } else {    // 如果收到换行符，则清除 currentLine：
            currentLine = "";
          }
        } else if (c != '\r') {  // 如果收到的不是回车符，
          currentLine += c;      // 将其添加到 currentLine 的末尾
        }

        // 检查客户端请求是否为 "GET /H" 或 "GET /L"：
        if (currentLine.endsWith("GET /H")) {
          digitalWrite(LED_BUILTIN, LOW);                 // "GET /H" 打开 LED
        }
        if (currentLine.endsWith("GET /L")) {
          digitalWrite(LED_BUILTIN, HIGH);                // "GET /L" 关闭 LED
        }
      }
    }
    // 关闭连接：
    client.stop();
    Serial.println("客户端已断开连接。");
  }
}
```

上传并运行程序后，XIAO ESP32S3 将创建一个名为 "XIAO_ESP32S3" 的热点。您可以使用电脑或手机连接到该网络，密码为 "password"。然后，在浏览器中打开 "192.168.4.1" 来访问控制 LED 开关的网页。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/39.png" style={{width:800, height:'auto'}}/></div>

### 程序注释

在 `setup()` 中有一个部分，用于通过 `softAP()` 方法将 ESP32 设置为接入点：

```c
WiFi.softAP(ssid, password);
```

接下来，我们需要使用 `softAPIP()` 方法获取接入点的 IP 地址，并在串口监视器中打印出来。

```c
IPAddress myIP = WiFi.softAPIP();
Serial.print("接入点 IP 地址: ");
Serial.println(myIP);
server.begin();
```

这些是您需要包含在 Web 服务器代码中的代码片段，用于将 XIAO ESP32S3 设置为接入点。

## WiFi 和 MQTT 使用

XIAO ESP32S3 是一款强大的主板，支持 MQTT 协议，非常适合需要可靠高效设备间通信的 IoT 项目。

```c
#include <WiFi.h>
#include <PubSubClient.h>

// 替换为您的网络凭据
const char* ssid = "your_SSID";
const char* password = "your_PASSWORD";

// MQTT 代理 IP 地址
const char* mqtt_server = "test.mosquitto.org";

// 初始化 WiFi 和 MQTT 客户端对象
WiFiClient espClient;
PubSubClient client(espClient);

void setup() {
  Serial.begin(115200);

  // 连接到 WiFi 网络
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("正在连接到 WiFi...");
  }

  Serial.println("已连接到 WiFi");

  // 设置 MQTT 代理服务器 IP 地址和端口
  client.setServer(mqtt_server, 1883);

  // 连接到 MQTT 代理
  while (!client.connected()) {
    if (client.connect("ESP32Client")) {
      Serial.println("已连接到 MQTT 代理");
    } else {
      Serial.print("连接到 MQTT 代理失败，返回码=");
      Serial.print(client.state());
      Serial.println(" 5 秒后重试");
      delay(5000);
    }
  }

  // 订阅 MQTT 主题
  client.subscribe("test/topic");
}

void loop() {
  // 检查 MQTT 客户端是否已连接
  if (!client.connected()) {
    // 重新连接到 MQTT 代理
    if (client.connect("ESP32Client")) {
      Serial.println("已连接到 MQTT 代理");
      // 重新连接后订阅 MQTT 主题
      client.subscribe("test/topic");
    }
  }

  // 处理 MQTT 消息
  client.loop();

  // 向 MQTT 代理发布消息
  client.publish("test/topic", "Hello from XIAO ESP32S3");
  delay(5000);
}
```

在此示例程序中，XIAO ESP32S3 通过 WiFi 连接到网络，并连接到指定的 MQTT broker，订阅主题 **test/topic**，并每隔 5 秒向该主题发布一条消息。

当 XIAO ESP32S3 从 MQTT broker 接收到消息时，可以在 `client.onMessage` 回调函数中处理。您需要将示例程序中的变量 `ssid`、`password`、`mqtt_server` 等替换为您自己的网络和 MQTT 服务器信息。

:::tip
示例程序中提供的 MQTT 服务器地址是 `test.mosquitto.org`，仅供测试使用。请不要向该地址发送任何个人信息，因为任何人都可以通过此链接获取您的信息。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/41.png" style={{width:800, height:'auto'}}/></div>

## WiFi 和 HTTP/HTTPS 的使用

这一部分可以参考我们为 XIAO ESP32C3 编写的访问 ChatGPT 的示例，其中详细介绍了 WiFiClient 和 HTTPClient 的使用方法。

- [学习在 XIAO ESP32C3 上使用 WiFiClient 和 HTTPClient - XIAO ESP32C3 与 ChatGPT 实战](https://wiki.seeedstudio.com/xiaoesp32c3-chatgpt)

## WiFi Mesh

根据 [Espressif 文档](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/mesh.html)：

“ESP-MESH 是基于 Wi-Fi 协议构建的网络协议。ESP-MESH 允许大量设备（称为节点）分布在大面积物理区域（包括室内和室外）内，并在单个 WLAN（无线局域网）下互联。ESP-MESH 是自组织和自愈的，这意味着网络可以自主构建和维护。”

在传统的 Wi-Fi 网络架构中，单个节点（接入点——通常是路由器）连接到所有其他节点（站点）。每个节点都可以通过接入点相互通信。然而，这种方式受限于接入点的 Wi-Fi 覆盖范围。每个站点必须在范围内才能直接连接到接入点。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/42.png" style={{width:800, height:'auto'}}/></div>

使用 ESP-MESH，节点无需连接到中心节点。节点负责中继彼此的传输。这允许多个设备分布在大面积物理区域内。节点可以自组织并动态相互通信，以确保数据包到达最终的目标节点。如果网络中的任何节点被移除，它能够自组织以确保数据包到达目的地。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/43.png" style={{width:800, height:'auto'}}/></div>

[painlessMesh 库](https://gitlab.com/painlessMesh/painlessMesh) 使我们能够轻松地使用 ESP32 板创建一个 Mesh 网络。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/44.png" style={{width:800, height:'auto'}}/></div>

如果弹出一个窗口提示我们下载一些依赖包以使用此库，我们也需要一起下载它们。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/45.png" style={{width:500, height:'auto'}}/></div>

如果此窗口没有显示，您需要安装以下库依赖项：

- [ArduinoJson](https://github.com/bblanchon/ArduinoJson) (作者：bblanchon)
- [TaskScheduler](https://github.com/arkhipenko/TaskScheduler)
- [AsyncTCP](https://github.com/me-no-dev/AsyncTCP) (ESP32)

为了开始使用 ESP-MESH，我们将首先尝试库的基本示例。此示例创建了一个 Mesh 网络，其中所有板都会向其他所有板广播消息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/46.png" style={{width:700, height:'auto'}}/></div>

在上传代码之前，您可以设置 `MESH_PREFIX`（类似于 Mesh 网络的名称）和 `MESH_PASSWORD` 变量（可以设置为您喜欢的任何值）。

然后，我们建议您为每块板更改以下行，以便轻松识别发送消息的节点。例如，对于节点 1，将消息更改如下：

```c
String msg = "Hi from node 1 ";
```

接下来，我们将以两个 XIAO ESP32S3 为例。联网后的概念图大致如下。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/47.png" style={{width:700, height:'auto'}}/></div>

分别将程序上传到两个 XIAO，打开串口监视器并将波特率设置为 115200。（如果有两个 XIAO，您可能需要额外的串口软件），如果程序运行顺利，您将看到以下结果：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/48.png" style={{width:800, height:'auto'}}/></div>

### 程序注释

首先包含 painlessMesh 库。然后，添加 Mesh 的详细信息。`MESH_PREFIX` 指的是 Mesh 的名称。`MESH_PASSWORD`，顾名思义，是 Mesh 的密码。Mesh 中的所有节点都应使用相同的 `MESH_PREFIX` 和 `MESH_PASSWORD`。`MESH_PORT` 指的是您希望 Mesh 服务器运行的 TCP 端口，默认值为 **5555**。

建议在 Mesh 网络代码中避免使用 `delay()`。为了维护 Mesh，需要在后台执行一些任务。使用 `delay()` 会阻止这些任务的执行，从而导致 Mesh 不稳定或崩溃。相反，建议使用 `TaskScheduler` 来运行您的任务，这也是 painlessMesh 本身使用的。以下代码行创建了一个名为 `userScheduler` 的新 `Scheduler`。

```c
Scheduler userScheduler; // 控制您的个人任务
```

创建一个名为 `mesh` 的 `painlessMesh` 对象，用于处理 Mesh 网络。

```c
painlessMesh  mesh;
```

创建一个名为 `taskSendMessage` 的任务，用于在程序运行期间每秒调用一次 `sendMessage()` 函数。

```c
Task taskSendMessage(TASK_SECOND * 1 , TASK_FOREVER, &sendMessage);
```

`sendMessage()` 函数向消息网络中的所有节点（广播）发送一条消息。

```c
void sendMessage() {
  String msg = "Hello from node 1";
  msg += mesh.getNodeId();
  mesh.sendBroadcast( msg );
  taskSendMessage.setInterval(random(TASK_SECOND * 1, TASK_SECOND * 5));
}
```

消息内容包括“Hello from node 1”文本以及板载芯片 ID。

要广播一条消息，只需在 mesh 对象上使用 `sendBroadcast()` 方法，并将要发送的消息（msg）作为参数传递。

```c
mesh.sendBroadcast(msg);
```

每次发送新消息时，代码会更改消息之间的时间间隔（1 到 5 秒）。

```c
taskSendMessage.setInterval(random(TASK_SECOND * 1, TASK_SECOND * 5));
```

接下来，创建几个回调函数，这些函数将在 mesh 中发生特定事件时被调用。`receivedCallback()` 函数打印消息发送者（from）和消息内容（`msg.c_str()`）。

```c
void receivedCallback( uint32_t from, String &msg ) {
  Serial.printf("startHere: Received from %u msg=%s\n", from, msg.c_str());
}
```

`newConnectionCallback()` 函数在新节点加入网络时运行。此函数仅打印新节点的芯片 ID。您可以修改此函数以执行其他任务。

```c
void newConnectionCallback(uint32_t nodeId) {
  Serial.printf("--> startHere: New Connection, nodeId = %u\n", nodeId);
}
```

`changedConnectionCallback()` 函数在网络连接发生变化时运行（当节点加入或离开网络时）。

```c
void changedConnectionCallback() {
  Serial.printf("Changed connections\n");
}
```

`nodeTimeAdjustedCallback()` 函数在网络调整时间时运行，以便所有节点同步。它会打印偏移量。

```c
void nodeTimeAdjustedCallback(int32_t offset) {
  Serial.printf("Adjusted time %u. Offset = %d\n", mesh.getNodeTime(),offset);
}
```

在 `setup()` 中，初始化串口监视器。选择所需的调试消息类型：

```c
//mesh.setDebugMsgTypes( ERROR | MESH_STATUS | CONNECTION | SYNC | COMMUNICATION | GENERAL | MSG_TYPES | REMOTE ); // all types on

mesh.setDebugMsgTypes( ERROR | STARTUP );  // 在 init() 之前设置，以便可以看到启动消息
```

使用之前定义的详细信息初始化 mesh。

```c
mesh.init(MESH_PREFIX, MESH_PASSWORD, &userScheduler, MESH_PORT);
```

将所有回调函数分配给其对应的事件。

```c
mesh.onReceive(&receivedCallback);
mesh.onNewConnection(&newConnectionCallback);
mesh.onChangedConnections(&changedConnectionCallback);
mesh.onNodeTimeAdjusted(&nodeTimeAdjustedCallback);
```

最后，将 `taskSendMessage` 函数添加到 `userScheduler` 中。调度器负责在正确的时间处理和运行任务。

```c
userScheduler.addTask(taskSendMessage);
```

最后，启用 `taskSendMessage`，以便程序开始向 mesh 发送消息。

```c
taskSendMessage.enable();
```

为了保持 mesh 运行，在 `loop()` 中添加 `mesh.update()`。

```c
void loop() {
  // 它还将运行用户调度器
  mesh.update();
}
```

## 故障排查

### Q1: 为什么在使用 softAP 示例时无法连接到 XIAO ESP32S3 热点？

这可能是由于 XIAO ESP32S3 的天线信号强度不足或 XIAO ESP32S3 过热引起的。经过测试，XIAO ESP32S3 的芯片在运行此示例时最高温度可达 50 摄氏度。如果长时间运行，可能会导致网络异常。此时可以尝试降温后重新连接。

如果排除了过热原因，则可能是天线信号导致的问题。自带天线的强度通常无法支持高强度的网络工作，因此如果需要，可以购买合适的棒状天线使用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/40.jpg" style={{width:600, height:'auto'}}/></div>

## 引用与参考

本文参考了 **[Random Nerd Tutorials](https://randomnerdtutorials.com/)** 网站关于 ESP32 的内容，并在 Seeed Studio XIAO ESP32S3 上进行了验证。

特别感谢 **Random Nerd Tutorials** 作者的辛勤工作！

以下是原文的参考链接，欢迎通过以下链接了解更多关于 ESP32 网络的内容：

- [ESP32 Useful Wi-Fi Library Functions (Arduino IDE)](https://randomnerdtutorials.com/esp32-useful-wi-fi-functions-arduino/)
- [ESP32 MQTT – Publish and Subscribe with Arduino IDE](https://randomnerdtutorials.com/esp32-mqtt-publish-subscribe-arduino-ide/)
- [ESP-MESH with ESP32 and ESP8266: Getting Started (painlessMesh library)](https://randomnerdtutorials.com/esp-mesh-esp32-esp8266-painlessmesh/)

有关使用 ESP32 开发板的更多信息，请阅读 Random Nerd Tutorials 的官方网站。

- [Random Nerd Tutorials](https://randomnerdtutorials.com/)

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