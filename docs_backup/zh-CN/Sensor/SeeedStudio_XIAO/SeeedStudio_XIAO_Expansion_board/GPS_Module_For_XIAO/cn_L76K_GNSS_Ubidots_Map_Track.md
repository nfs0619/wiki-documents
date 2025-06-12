---
title: 在 Ubidots 上实现 L76K 路径追踪
description: 将 L76K GNSS 模块和 SeeedStudio XIAO 连接到 Ubidots，实现地图上的位置路径追踪
keywords: 
  - XIAO
  - XIAO 扩展板
  - XIAO GPS 模块
  - 在 Ubidots 上实现 L76K 路径追踪
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/L76K_Path_Tracking_on_Ubidots
last_update:
  date: 05/15/2025
  author: Harrison Xu
---

# 将 L76K GNSS 模块和 SeeedStudio XIAO 连接到 Ubidots，实现地图上的位置路径追踪

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic00_Track.png" alt="pir" width={600} height="auto"/>
</p>

## 简介
在完成 [L76K GNSS 模块快速入门指南](https://wiki.seeedstudio.com/get_start_l76k_gnss/) 后，您可能希望使用 L76K GNSS 模块定位物体并在地图上显示其轨迹。为此，我们可以结合 SeeedStudio XIAO 开发板和 Ubidots 物联网数据平台来实现。

[Ubidots](https://ubidots.com/) 是一个低代码物联网开发平台，适合没有时间或精力自行构建完整生产级物联网应用的工程师和开发者。从设备友好的 API 到干净的用户界面，Ubidots 提供了实现快速上市所需的基本构建模块，而无需雇佣昂贵的工程师团队来开发和维护定制化解决方案。

### 特性
- 在连接 Wi-Fi 时上传实时位置信息（经纬度）
- 在地图上显示由位置点连接的路径

## 快速入门
### 第一步：获取 Ubidots Token
首先，在浏览器中打开 https://ubidots.com，注册一个账户。确认您的邮箱并登录到 Ubidots 控制台。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic02_SignUp.png" alt="pir" width={600} height="auto"/>
</p>

点击右上角的头像 - “My Profile”，向下滚动并将“Decimal places”（小数位数）从 2 改为 6，以提高经纬度的精度。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic04_Setting.png" alt="pir" width={600} height="auto"/>
</p>

然后在左侧导航栏中进入“API Credentials”，复制 Token（**不是 API Key**），以备后续使用。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic05_Token.png" alt="pir" width={600} height="auto"/>
</p>

### 第二步：上传代码到 XIAO
将 SeeedStudio XIAO 开发板（本文以 SeeedStudio XIAO ESP32S3 为例）、L76K GNSS 模块、GNSS 天线和 Wi-Fi 天线连接在一起，并将其连接到您的电脑。

:::danger **警告**
请特别注意模块的安装方向，切勿反向插入，否则可能会烧毁模块或 XIAO。
:::

接下来，启动 Arduino IDE。记得在库管理器中添加 `EspSoftwareSerial` 和 `TinyGPSPlus` 库，同时下载 [Ubidots ESP32 Library](https://github.com/ubidots/ubidots-esp32) 并添加到 IDE 中。

选择对应的开发板和端口，然后粘贴以下代码：

```cpp
#include <SoftwareSerial.h>
#include <TinyGPSPlus.h>
#include <WiFi.h>
#include <Ubidots.h>

// 定义 GPS 模块的 RX 和 TX 引脚
static const int RXPin = D7, TXPin = D6;
static const uint32_t GPSBaud = 9600;

// Wi-Fi 和 Ubidots 配置信息
const char WIFI_SSID[]     = "输入您的 Wi-Fi 名称";
const char WIFI_PASS[]     = "输入您的 Wi-Fi 密码";
const char UBIDOTS_TOKEN[] = "输入您的 Ubidots Token";

SoftwareSerial MySerial(RXPin, TXPin);
TinyGPSPlus gps;
Ubidots ubidots(UBIDOTS_TOKEN, UBI_UDP);
double lat;
double lng;

void setup() {
  Serial.begin(115200);
  MySerial.begin(GPSBaud);
  ubidots.setDebug(true);    // 用于观察 Ubidots 上传日志。您也可以将其改为 "false" 以简化串口监视器输出。
  Serial.println("\nTinyGPSPlus 库版本: " + String(TinyGPSPlus::libraryVersion()));

  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  while (WiFi.status() != 3) {
    WiFi.begin(WIFI_SSID, WIFI_PASS);
    Serial.println(WiFi.status());
    delay(5000);
  }

  /*
    WL_NO_SHIELD        = 255,    // 与 WiFi Shield 库兼容
    WL_IDLE_STATUS      = 0,
    WL_NO_SSID_AVAIL    = 1,
    WL_SCAN_COMPLETED   = 2,
    WL_CONNECTED        = 3,
    WL_CONNECT_FAILED   = 4,
    WL_CONNECTION_LOST  = 5,
    WL_DISCONNECTED     = 6
  */

  Serial.println("Wi-Fi 已连接！");
}

void loop() {
  while (MySerial.available() > 0) {
    if (gps.encode(MySerial.read())) {
      getLocation();
      sendToUbidots();
      delay(10 * 1000);  // 修改此处的参数以调整获取和上传位置的间隔时间。
    }
  }

  if (millis() > 5000 && gps.charsProcessed() < 10) {
    Serial.println("未检测到 GPS，请检查接线。");
  }
}

void getLocation() {
  if (gps.location.isValid()) {
    lat = gps.location.lat();
    lng = gps.location.lng();

    Serial.print("位置: ");
    Serial.print(gps.location.lat(), 6);
    Serial.print(", ");
    Serial.print(gps.location.lng(), 6);
    Serial.println();
  } else {
    Serial.println("当前无法获取位置");
  }
}

void sendToUbidots() {
  if (lat != 0 && lng != 0) {
    char charLat[20];
    char charLng[20];
    sprintf(charLat, "%.6lf", lat);
    sprintf(charLng, "%.6lf", lng);

    ubidots.addContext("lat", charLat);
    ubidots.addContext("lng", charLng);
    char* context = (char*)malloc(sizeof(char) * 60);
    ubidots.getContext(context);
    ubidots.add("position", 1, context);

    if (ubidots.send()) {
      Serial.println("数据已发送");
    } else {
      Serial.println("数据未发送");
    }
    free(context);
  }
}
```

将代码上传到开发板，很快您将在串口监视器中看到类似以下的输出：

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic06_SerialMonitor.png" alt="pir" width={600} height="auto"/>
</p>

<!--硬件连接正常工作与屏幕截图放一起-->

如上图所示，连接到 Wi-Fi 网络并从卫星获取位置信息需要等待一段时间是正常的。如果这些错误输出持续了几分钟，请尝试通过 USB-C 端口旁边的小“R”按钮重新启动 XIAO 板。

:::tip
L76K GNSS 模块适用于户外使用，因此请将其放置在没有遮挡的开阔位置，否则可能无法获取位置信息。
:::

### 第三步：在地图上显示数据
现在，L76K GNSS 模块和 SeeedStudio XIAO 正在从 GNSS 获取位置信息，并将纬度和经度信息发送到 Ubidots。让我们回到 Ubidots 检查一下。访问 https://industrial.ubidots.com/app/devices，您会发现一个新的“设备”，这是由于我们通过令牌发送了新数据而由 Ubidots 自动创建的。点击设备名称，您可以看到该设备的位置已自动设置为我们上传的数据。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic08_DeviceInfo.png" alt="pir" width={600} height="auto"/>
</p>

接下来，让我们创建一个地图来显示轨迹。点击顶部的“Data” - “Dashboards”，点击“Demo Dashboard”旁边的汉堡菜单按钮，然后“CREATE”一个新的仪表板。您可以像这样修改设置，或者根据自己的需求进行自定义。记得“SAVE”新的仪表板。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic10_NewDashboard.png" alt="pir" width={600} height="auto"/>
</p>

在新的仪表板中，点击“Add new widget”，向下滚动找到“Map”。点击“ADD MARKER GROUP”，设置我们刚刚检查的设备，地图就会出现。将光标移动到地图的右下角以调整大小。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic11_NewWidget.png" alt="pir" width={600} height="auto"/>
</p>

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic12_MapSetting.png" alt="pir" width={600} height="auto"/>
</p>

太棒了！由位置点连接的路径就显示在我们面前了！

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic00_Track.png" alt="pir" width={600} height="auto"/>
</p>

:::tip
如果 L76K GNSS 模块保持在固定位置而没有移动，地图上只会显示一个点，而不是路径。
:::

## 参考链接
- [GPS Location | Ubidots API Reference](https://docs.ubidots.com/reference/gps-location)

- [Create Map Widgets in Ubidots | Ubidots Help Center](https://help.ubidots.com/en/articles/1712418-create-map-widgets-in-ubidots)

- [How to create a real-time map? | Ubidots Help Center](https://help.ubidots.com/en/articles/693652-how-to-create-a-real-time-map)

- [Ubidots ESP32 Library on GitHub](https://github.com/ubidots/ubidots-esp32)

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