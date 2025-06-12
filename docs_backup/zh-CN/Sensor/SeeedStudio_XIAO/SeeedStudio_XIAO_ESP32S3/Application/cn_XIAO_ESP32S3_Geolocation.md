---
description: 使用 XIAO ESP32S3 制作一个超紧凑的全球定位追踪器。
title: 使用 XIAO ESP32S3 (Sense) 实现地理位置追踪
keywords:
- 位置
- 追踪器
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/geolocation_tracker_with_XIAO_ESP32S3
last_update:
  date: 05/15/2025
  author: Citric
---

# 使用 XIAO ESP32S3 实现地理位置追踪

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/main.jpg" style={{width:1000, height:500}}/></div>

市面上的自制追踪器通常面临几个问题。例如，追踪精度差、体积庞大，并且对使用环境有较高的要求。XIAO 以其出色的体积控制吸引了众多创作者。那么，我们能否仅使用 XIAO 制作一个可以全球定位的追踪器呢？

在本教程中，我们将探索两种流行的方法，使用 XIAO（无需 GPS 模块）创建一个令人惊讶的追踪器。

## 概述

本文将介绍两种定位方式，一种是通过获取 XIAO 所连接网络的 IP 地址来获取位置信息，从而实现定位。另一种是使用 Wi-Fi 定位系统（通常称为 WiPS 或 WFPS）。

- **方法 1：通过 IP 地址定位**

通过 IP 地址定位的原理是使用一个将 IP 地址映射到物理位置的数据库。这一过程通常称为地理定位。

IP 地址查找涉及使用反向 DNS 查找来检索与 IP 地址关联的域名。然后可以使用该域名来识别托管网站或服务的服务器的地理位置。

IP 地址映射涉及使用一个将 IP 地址映射到物理位置的数据库。该数据库可能包含与每个 IP 地址相关的城市、地区和国家等信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/iplocation.png" style={{width:700, height:'auto'}}/></div>

IP 地址地理定位的准确性可能因所用方法和可用数据的质量而异。通常，对于固定设备（如台式电脑和服务器），IP 地址地理定位的准确性最高，因为它们通常与固定的物理位置相关联。移动设备（如智能手机和平板电脑）可能更难准确定位，因为它们可以移动并连接到不同的 Wi-Fi 网络。

- **方法 2：通过 [WFPS](https://en.wikipedia.org/wiki/Wi-Fi_positioning_system) 定位**

Wi-Fi 定位系统是一种地理定位系统，它利用附近 Wi-Fi 热点和其他无线接入点的特性来发现设备的位置。

它用于卫星导航（如 GPS）因多路径和室内信号阻塞等原因而不足的场景，或者在获取卫星信号需要很长时间的情况下。此类系统包括辅助 GPS、通过热点数据库的城市定位服务和室内定位系统。Wi-Fi 定位利用了 21 世纪初期城市地区无线接入点的快速增长。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/wfps.png" style={{width:700, height:'auto'}}/></div>

最常见和广泛使用的无线接入点定位技术基于测量接收到的信号强度（接收信号强度指示或 RSSI）和“指纹识别”方法。用于定位无线接入点的典型参数包括其 SSID 和 MAC 地址。准确性取决于附近接入点的数量，这些接入点的位置已被输入数据库。Wi-Fi 热点数据库通过将移动设备 GPS 位置数据与 Wi-Fi 热点 MAC 地址相关联来填充。可能发生的信号波动可能会增加用户路径中的误差和不准确性。为了最小化接收信号中的波动，可以应用某些技术来过滤噪声。

这就是 XIAO 在无需 GPS 模块辅助的情况下获取位置的理论基础。我们还将结合以上两种方法，比较最佳定位方式，并使用圆形显示屏将坐标作为地图显示在屏幕上。以下是目录和本文的摘要。

- [连接网络并获取 XIAO ESP32S3 的公共 IP](#connect-to-the-network-and-obtain-public-ip-with-the-xiao-esp32s3)
- [通过 ipstack 平台获取位置坐标](#obtain-location-coordinates-with-the-ipstack-platform)
- [通过 HTTPS 服务从 Google Maps 下载静态图像](#download-static-images-from-google-maps-via-https-service)
- [在圆形显示屏上显示位置地图](#display-the-location-map-on-the-round-display)
- [使用 WFPS 方法定位](#positioning-using-the-wfps-method)
- [实时更新最新位置](#live-updates-on-the-latest-location)

## 入门

要成功完成此项目，您可能需要使用以下硬件。所有 XIAO ESP32 系列均支持。

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3</th>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio 圆形显示屏（适用于 XIAO）</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:250, height:'auto'}}/></div></td>
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
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

除了上述内容外，你还可以准备一个小型锂电池、microSD卡和外壳，以组成一个完整的追踪器形式。

<iframe width="100%" height="500" src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/install.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

## 使用 XIAO ESP32S3 连接网络并获取公网 IP

:::tip
如果你对 XIAO ESP32S3 的网络功能不熟悉，可以阅读 [Seeed Studio XIAO ESP32S3 (Sense) 的 WiFi 使用指南](https://wiki.seeedstudio.com/xiao_esp32s3_wifi_usage/)。
:::

在 XIAO ESP32S3 的基础使用教程中，我们已经掌握了使用 XIAO ESP32S3 连接网络的方法。

```cpp
#include <WiFi.h>

// 网络配置
const char* ssid = "<YOUR_WIFI_SSID_HERE>";
const char* password = "<YOUR_WIFI_PW_HERE>";

void setup() {
  Serial.begin(115200);

  Serial.print("尝试连接到 ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while(WiFi.status() != WL_CONNECTED){
    Serial.print(".");
  }
  Serial.println("Wi-Fi 已连接！");
}

void loop() {
}
```

使用 IP 地址进行位置查询的核心是获取 XIAO 的 IP 地址。可能很自然地想到我们需要使用 `WiFi.localIP()` 函数来查询。

然而，实际上路由器会为 XIAO 分配一个内部 IP 地址，例如 192.168.xxx.xxx，这种地址无法用于位置查询。我们需要的是公网 IP。因此我们需要使用以下代码。

```cpp
// 获取本地 IP 地址
IPAddress publicIP;
if (WiFi.hostByName("ip-api.com", publicIP)) {
    Serial.print("公网 IP 地址: ");
    Serial.println(publicIP);
} else {
    Serial.println("获取公网 IP 地址失败");
    return;
}
```

然后我们可以得到以下效果，这是第一步。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/7.png" style={{width:600, height:'auto'}}/></div>

## 使用 ipstack 平台获取位置坐标

使用 IP 地址进行位置查询通常需要一些公共服务器库的信息。我们可以借助某些平台的 API 接口来获取这些服务器信息。例如，在本教程中，我们将使用 [ipstack](https://ipstack.com) 平台。

ipstack 提供了一个强大的实时 IP 到地理位置 API，能够查询准确的位置信息并评估来自风险 IP 地址的安全威胁。结果以 JSON 或 XML 格式在毫秒内返回。

ipstack 提供免费/付费查询服务，[价格列表](https://ipstack.com/product)可以在下图中找到。在本示例中，我们仅展示示例，使用 **免费服务（每月100次查询）** 已足够。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/8.png" style={{width:800, height:'auto'}}/></div>

### 第一步：获取 ipstack API 访问密钥

如果这是你第一次使用 ipstack，你需要 [注册一个新账户](https://ipstack.com/signup/free)。

注册并登录后，你将能够看到你的 API 密钥，请复制并保存到安全的地方，我们稍后会使用它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/9.png" style={{width:800, height:'auto'}}/></div>

### 第二步：学习如何使用 ipstack API

ipstack 提供了详细的 [文档](https://ipstack.com/documentation)，解释如何使用 ipstack API。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/10.png" style={{width:800, height:'auto'}}/></div>

非常简单，对吧？只需发送 **服务器地址 + IP 地址 + API 密钥**。

接下来我们需要知道 ipstack 会返回什么样的 JSON 消息，并提取我们需要的信息，例如城市、国家以及经纬度。

```json
{
  "ip": "134.201.250.155",
  "hostname": "134.201.250.155",
  "type": "ipv4",
  "continent_code": "NA",
  "continent_name": "North America",
  "country_code": "US",
  "country_name": "United States",
  "region_code": "CA",
  "region_name": "California",
  "city": "Los Angeles",
  "zip": "90013",
  "latitude": 34.0453,
  "longitude": -118.2413,
  "location": {
    "geoname_id": 5368361,
    "capital": "Washington D.C.",
    "languages": [
        {
          "code": "en",
...
```

然后，我们只需借助 ArduinoJSON 库提取所需信息。

### 第三步：通过 HTTP 服务获取 IP 地址的坐标

总结来说，我们首先安装 **ArduinoJSON** 库。可以直接在 Arduino IDE 中搜索并下载。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/11.png" style={{width:400, height:'auto'}}/></div>

然后我们编写 `getLocation()` 函数，用于获取 ipstack 返回的国家、城市以及经纬度信息，并打印出来。

```cpp
// 对于 ipstack
const char* IPStack_key = "<YOUR_API_KEY_HERE>";
String ip_address;

// 根据 XIAO 当前 IP 地址获取大致坐标位置。
bool getLocation(){
  // 向 IPStack API 发起 HTTP 请求
  HTTPClient http;
  String url = "http://api.ipstack.com/" + String(ip_address) + "?access_key=" + String(IPStack_key);
  Serial.println("请求 URL: " + url);
  http.begin(url);
  int httpCode = http.GET();

  // 解析 JSON 响应
  if (httpCode == 200) {
    String payload = http.getString();
    Serial.println("响应内容: " + payload);
    DynamicJsonDocument doc(1024);
    deserializeJson(doc, payload);
    String country_name = doc["country_name"].as<String>();
    String region_name = doc["region_name"].as<String>();
    String city = doc["city"].as<String>();
    latitude = doc["latitude"].as<double>();
    longitude = doc["longitude"].as<double>();
    Serial.println("国家: " + country_name);
    Serial.println("地区: " + region_name);
    Serial.println("城市: " + city);
    Serial.println("纬度: " + String(latitude));
    Serial.println("经度: " + String(longitude));
    http.end(); // 关闭连接
    return true;
  } else {
    Serial.println("HTTP 错误代码: " + String(httpCode));
    http.end(); // 关闭连接
    return false;
  }
}
```

在上述程序中，请将 ipstack API Key 替换为您自己的。

接下来，我们可以通过 IP 地址查看定位的准确性。以下地图中[红色标记点](https://www.google.com/maps/place/22%C2%B034'26.5%22N+113%C2%B054'53.1%22E/@22.5729214,113.9171335,16z/data=!4m4!3m3!8m2!3d22.5740278!4d113.91475?hl=zh-CN&entry=ttu)是通过 IP 地址定位的准确位置。而红线的另一端是我实际所在的位置。两者之间的距离为 2.4 公里。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/1.png" style={{width:1000, height:'auto'}}/></div>

可以看出，这种定位方式的误差在公里范围内，与我们对追踪器的期望相差甚远。

## 通过 HTTPS 服务从 Google Maps 下载静态图片

纬度和经度坐标在我们的视角中并不直观。即使它们包含了国家和城市的信息。所以我们想知道是否可以将这些纬度和经度坐标标记在地图上并显示在屏幕上。于是我们找到了 Google Cloud 的地图服务。

在开始之前，我认为了解 [Google Maps 服务的定价](https://mapsplatform.google.com/pricing/)是很重要的，以便决定是否继续。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/12.png" style={{width:800, height:'auto'}}/></div>

如果您是首次注册用户，将会有 **$300** 的免费额度。这里我们主要使用的是 Maps Static API，其费用为 **$2.00 每 1000 次调用**。

### 第 4 步：[设置您的 Google Cloud 项目](https://developers.google.com/maps/documentation/elevation/cloud-setup)并完成后续的设置说明

### 第 5 步：启用 Google Maps API

您需要一个 Google API Key 来验证 Google API。前往 [Google Developers Console](https://console.developers.google.com/apis) 启用 GeoLocation API。如果没有这个 API Key，您将会收到错误响应。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/2.png" style={{width:1000, height:'auto'}}/></div>

一旦您获得了 API Key，请妥善保管，我们将在后续的编程步骤中使用它。

:::note
如果您对当前使用 API 的环境有顾虑，可以开启 API 调用的限制，以避免因滥用而产生额外费用。开启某些限制可能需要对您的程序进行更改。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/4.png" style={{width:1000, height:'auto'}}/></div>
:::

## 在圆形显示屏上显示位置地图

:::tip
如果您是首次使用 XIAO 的圆形显示屏，那么您可能需要参考 [此处的 Wiki](https://wiki.seeedstudio.com/get_start_round_display/) 来为圆形屏幕配置您的 Arduino 环境。
:::

### 第 6 步：学习如何调用 Google Cloud Static Maps API

点击[这里](https://developers.google.com/maps/documentation/maps-static/overview)阅读 Google Cloud Static Maps API 的文档。

文档中提供了一个使用该 API 的示例代码，如下所示：

```
https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
&markers=color:red%7Clabel:C%7C40.718217,-73.998284
&key=YOUR_API_KEY&signature=YOUR_SIGNATURE
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/staticmap.png" style={{width:700, height:'auto'}}/></div>

Maps Static API 的 URL 必须符合以下格式：

```
https://maps.googleapis.com/maps/api/staticmap?parameters
```

Maps Static API 使用以下 URL 参数定义地图图像：

- `center`（如果未提供 markers 则为必需）定义地图的中心点，该点与地图所有边缘等距。此参数接受一个以逗号分隔的 {latitude,longitude} 坐标对（例如 "40.714728,-73.998672"）或一个字符串地址（例如 "city hall, new york, ny"），用于标识地球表面上的唯一位置。
- `zoom`（如果未提供 markers 则为必需）定义地图的缩放级别，决定地图的放大程度。此参数接受一个数值，表示所需区域的缩放级别。
- `size`（必需）定义地图图像的矩形尺寸。此参数接受一个格式为 `{horizontal_value}x{vertical_value}` 的字符串。
- `maptype`（可选）定义要构建的地图类型。可能的 maptype 值包括 roadmap、satellite、hybrid 和 terrain。
- `markers`（可选）定义一个或多个标记，附加到指定位置的图像上。此参数接受一个带有以管道符号（|）分隔的参数的标记定义。只要具有相同样式，多个标记可以放置在同一个 markers 参数中；您可以通过添加额外的 markers 参数来添加不同样式的标记。请注意，如果您为地图提供了标记，则无需指定（通常是必需的）center 和 zoom 参数。
- `key`（必需）允许您在 Google Cloud Console 中监控应用程序的 API 使用情况，并确保 Google 可以在必要时联系您关于您的应用程序的信息。

:::tip
上述仅展示了最基本的参数，如果您需要自定义此静态地图，可以点击 **[这里](https://developers.google.com/maps/documentation/maps-static/start)** 阅读完整的参数列表。
:::

总结一下，我们可以拼接形成一个完整的字符串以发送请求。

```cpp
// For google static maps
const char * host = "maps.googleapis.com";
const String defaultPath = "/maps/api/staticmap?center=";
const String Googlemaps_key = "<YOUR_API_KEY_HERE>";
int zoomLevel = 14;
double latitude;
double longitude;

// Stitching to form commands sent to Google Maps
String getPath(){
  String newPath = defaultPath;
  newPath += latitude;
  newPath += ",";
  newPath += longitude;
  newPath += "&zoom=";
  newPath += String(zoomLevel);
  newPath += "&size=240x240";
  newPath += "&maptype=roadmap";
  newPath += "&markers=size:tiny%7Ccolor:red%7C";
  newPath += latitude;
  newPath += ",";
  newPath += longitude;
  newPath += "&format=jpg-baseline";
  newPath += "&key=";
  newPath += Googlemaps_key;
  Serial.println(newPath);
  return newPath;
}
```

请将上述代码替换为您自己的 Google Cloud Maps API。

### 第七步：通过 HTTPS 获取返回的图像并写入 microSD 卡

我们需要一个足够大的存储介质来保存返回的静态图像，以便它们可以被程序读取并显示在屏幕上。圆形显示屏恰好支持 microSD 卡。

```cpp
// 从 Google Cloud Services 获取坐标的静态图像
bool getStaticMapImage(const char *host, const char *path, String fileName){
  int contentLength = 0;
  int httpCode;

  WiFiClientSecure client;

  client.setCACert(GlobalSignCA);
  client.connect(host, 443);

  Serial.printf("尝试连接: %s:443...", host);
  
  if(!client.connected()){
    client.stop();
    Serial.printf("*** 无法连接. ***\n-------\n");
    return false;
  }

  Serial.println("HTTPS 已连接!");
  client.print("GET ");
  client.print(path);
  client.print(" HTTP/1.0\r\nHost: ");
  client.print(host);
  client.print("\r\nUser-Agent: ESP32S3\r\n");
  client.print("\r\n");

  while(client.connected()){
    String header = client.readStringUntil('\n');
    if(header.startsWith(F("HTTP/1."))){
      httpCode = header.substring(9, 12).toInt();
      if(httpCode != 200){
        client.stop();
        return false;
      }
    }
    if(header.startsWith(F("Content-Length: "))){
      contentLength = header.substring(15).toInt();
    }
    if(header == F("\r")){
      break;
    }
    
  }
  if(!(contentLength > 0)){
    client.stop();
    return false;
  }
  fs::File f = SD.open(fileName, "w");
  if(!f){
    Serial.println(F("文件打开失败"));
    client.stop();
    return false;
  }
  int remaining = contentLength;
  int received;
  uint8_t buff[512] = {0};
  while(client.available() && remaining > 0){
    received = client.readBytes(buff, ((remaining > sizeof(buff)) ? sizeof(buff) : remaining));
    f.write(buff, received);
    if(remaining > 0){
      remaining -= received;
    }
    yield();
  }
  f.close();
  client.stop();
  Serial.println("下载完成");
  return (remaining == 0 ? true : false);
}
```

### 第八步：在圆形显示屏上显示 JPEG 图像

通常，圆形显示屏支持的 TFT 图形库仅支持显示 BMP 格式的图像。如果我们需要显示其他格式的图像，则需要使用一些第三方库，这里我们使用 **[TJpg_Decoder](https://github.com/Bodmer/TJpg_Decoder)** 库。

请下载此库的 zip 文件并添加到您的 Arduino 环境中。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Bodmer/TJpg_Decoder">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

我们参考该库提供的示例程序重写了我们的程序：

```cpp
// 此函数将在解码 JPEG 文件时调用，以将每个块渲染到 TFT。
// 如果您使用不同的 TFT 库，则需要调整此函数以适应。
bool tft_output(int16_t x, int16_t y, uint16_t w, uint16_t h, uint16_t* bitmap)
{
   // 如果图像超出屏幕底部，则停止进一步解码
  if ( y >= tft.height() ) return 0;

  // 此函数会自动在 TFT 边界剪裁图像块渲染
  tft.pushImage(x, y, w, h, bitmap);

  // 返回 1 以解码下一个块
  return 1;
}

void setup() {
  // 初始化 TFT
  tft.init();
  tft.setRotation(2);
  tft.fillScreen(TFT_BLACK);
  tft.setSwapBytes(true); // 我们需要交换颜色字节（字节序）

  // 在初始化 TFT 之前初始化 SD
  if (!SD.begin(SD_CS)) {
    Serial.println(F("SD.begin 失败!"));
    return;
  }
  Serial.println("\r\n初始化完成.");

  // JPEG 图像可以按比例缩放，比例因子为 1、2、4 或 8
  TJpgDec.setJpgScale(1);

  // 解码器必须指定上面定义的渲染函数的确切名称
  TJpgDec.setCallback(tft_output);

  if(WiFi.status() == WL_CONNECTED){
    if(getLocation() && getStaticMapImage(host, getPath().c_str(), mapFile)){
      TJpgDec.drawSdJpg(0, 0, mapFile);
    }
  }
}
```

该项目的完整程序可以在以下链接中找到。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO-ESP32S3-Geolocation/blob/main/IP-address-location-method/IP-address-location-method.ino">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载代码</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

运行程序后，您可以在串行监视器中看到输出结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/5.png" style={{width:700, height:'auto'}}/></div>

屏幕上还会显示与您的 IP 地址对应的地理位置图片。

## 使用 WFPS 方法进行定位

正如我们在前面的步骤中比较过的，使用 IP 地址进行定位的精度确实很差。因此，接下来我们将使用 WFPS 方法改进程序，看看精度是否有所变化。

当然，这种算法对我们来说实现起来较为困难，因此我们仍然依赖 Google Maps 服务中的 [Geolocation API](https://developers.google.com/maps/documentation/geolocation/overview)。

Geolocation API 是一种服务，它接受包含移动客户端可检测到的基站和 WiFi 接入点的 HTTPS 请求。它返回纬度/经度坐标以及一个表示结果精度的半径。

在社区中，**[gmag11](https://github.com/gmag11)** 和他们的团队编写了可以直接调用此服务的库。我们可以直接在这里使用它。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/gmag11/WifiLocation/tree/master">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

同时，您还需要 **QuickDebug** 库用于调试消息。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/gmag11/QuickDebug">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

接下来，我们只需修改 `getLocation()` 函数。

```cpp
//For google geolocation
WifiLocation location (Googlemaps_key);

// Set time via NTP, as required for x.509 validation
void setClock () {
    configTime (0, 0, "pool.ntp.org", "time.nist.gov");

    Serial.print ("Waiting for NTP time sync: ");
    time_t now = time (nullptr);
    while (now < 8 * 3600 * 2) {
        delay (500);
        Serial.print (".");
        now = time (nullptr);
    }
    struct tm timeinfo;
    gmtime_r (&now, &timeinfo);
    Serial.print ("\n");
    Serial.print ("Current time: ");
    Serial.print (asctime (&timeinfo));
}

// Get the exact coordinates of XIAO by WiFi location method
void getLocation(){
  setClock();
  location_t loc = location.getGeoFromWiFi();

  Serial.println("Location request data");
  Serial.println(location.getSurroundingWiFiJson()+"\n");
  Serial.println ("Location: " + String (loc.lat, 7) + "," + String (loc.lon, 7));
  latitude = loc.lat;
  longitude = loc.lon;
  Serial.println ("Accuracy: " + String (loc.accuracy));
  Serial.println ("Result: " + location.wlStatusStr (location.getStatus ()));
}
```

让我们看看通过 WFPS 方法获取的坐标与实际位置的差异。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/13.png" style={{width:1000, height:'auto'}}/></div>

位置偏差已经在 1 公里左右！这种性能甚至比某些 GPS 模块还要好。

## 实时更新最新位置

最后一步，我们将完成这个全球定位追踪器。让它实现自动地图刷新功能。

:::tip
在使用此程序时，请估算您的 Google Cloud 服务费用消耗，否则频繁的 API 调用可能会导致高额账单！
:::

```cpp
void loop() {
  // Make sure you pay attention to the number of API calls! This could cost you extra spending!
  
  if(WiFi.status() == WL_CONNECTED){
    getLocation();
    if(latitude != last_latitude || longitude != last_longitude){  // Update of the location image is performed only when the location is updated
      last_latitude = latitude;
      last_longitude = longitude;
      if(getStaticMapImage(host, getPath().c_str(), mapFile)){
        TJpgDec.drawSdJpg(0, 0, mapFile);
      }
    }
  }
  delay(10000);
}
```

在主循环中，我们每隔 10 秒获取周围网络并更新当前位置坐标。如果返回的坐标与上次不同，则地图将重新下载并在屏幕上刷新。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/6.png" style={{width:800, height:'auto'}}/></div>

使用我们的 3D 打印外壳，是不是看起来真的像一个追踪器！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/final.jpg" style={{width:800, height:'auto'}}/></div>

最后，通过 WFPS 方法获取定位的完整程序代码可以通过下面的按钮下载。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO-ESP32S3-Geolocation/blob/main/WFPS-location-method/WFPS-location-method.ino">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载代码</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

## 资源

- **[GITHUB]** [源代码](https://github.com/limengdu/XIAO-ESP32S3-Geolocation)
- **[STP]** [XIAO ESP32S3 Sense 外壳设计（顶部）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(top).stp)
- **[STP]** [XIAO ESP32S3 Sense 外壳设计（底部）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(bottom).stp)

## 故障排查

### Q1: 为什么使用 `WiFi.hostByName()` 函数时无法获得准确的 IP 地址？

当使用 `WiFi.hostByName()` 函数查询路由器的公网 IP 地址时，请确保您的路由器可以通过 DNS 解析器解析到相应的 IP 地址。如果您的路由器使用的是 ISP 提供的 DNS 服务器，可能会遇到 DNS 解析失败的情况。在这种情况下，您可以尝试使用其他 DNS 服务器，例如 Google 的公共 DNS 服务器 8.8.8.8 或 8.8.4.4。

如果仍然无法查询到正确的公网 IP 地址，可能是由于网络连接问题或其他网络配置问题。您可以尝试以下方法解决问题：

1. **尝试其他公网 IP 地址查询服务**：如果您使用的是 api.ipify.org 服务查询公网 IP 地址，但仍无法获得正确的 IP 地址，可以尝试使用其他公网 IP 地址查询服务，例如 ip-api.com 或 whatismyip.com。

2. **检查路由器配置**：检查您的路由器配置，确保 NAT 和端口转发功能已正确配置，并且没有阻止外部网络的访问。您还可以尝试在路由器上启用 UPnP 功能，以自动配置端口转发。

3. **重启路由器和 ESP32S3 设备**：有时，重启路由器和 ESP32S3 设备可以解决网络连接和配置问题。

如果仍然无法解决问题，我们建议使用第二种方法，或者在路由器查询到公网 IP 后直接为 XIAO 赋值。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您在使用我们的产品时获得顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>