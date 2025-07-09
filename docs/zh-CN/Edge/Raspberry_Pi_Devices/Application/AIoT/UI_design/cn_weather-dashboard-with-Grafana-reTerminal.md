---
description: 使用 Grafana 构建 reTerminal 的天气仪表盘
title: 使用 Grafana 构建 reTerminal 的天气仪表盘
keywords:
  - Edge
  - reTerminal 应用
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/weather-dashboard-with-Grafana-reTerminal
last_update:
  date: 05/15/2025
  author: jianjing Huang
---

# 使用 Grafana 构建您自己的天气 仪表盘

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

![image-20220124151124558](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124151124558.png)

## 简介

在这里，我们将向您介绍如何使用 Grafana 在您的 reTerminal 上制作自己的天气仪表盘，特别感谢 [Michaelm Klementsk](https://www.the-diy-life.com/grafana-weather-dashboard-on-the-reterminal-by-seeed-studio/) 的贡献。

[InfluxDB](https://www.influxdata.com/) 是由 InfluxData 公司开发的一个[开源](https://en.wikipedia.org/wiki/Open-source_software)的[时间序列数据库](https://en.wikipedia.org/wiki/Time_series_database) (TSDB)。它使用 [Go 编程语言](https://en.wikipedia.org/wiki/Go_(programming_language)) 编写，用于存储和检索在操作监控、应用程序指标、[物联网](https://en.wikipedia.org/wiki/Internet_of_Things)传感器数据以及实时分析等领域的[时间序列](https://en.wikipedia.org/wiki/Time_series)数据。它还支持处理来自 [Graphite](https://en.wikipedia.org/wiki/Graphite_(software)) 的数据。

[Grafana](https://grafana.com/) 是一个[多平台](https://en.wikipedia.org/wiki/Multi-platform)的[开源](https://en.wikipedia.org/wiki/Open_source)分析和[交互式可视化](https://en.wikipedia.org/wiki/Interactive_visualization)的 Web 应用程序。当连接到支持的数据源时，它可以为 Web 提供图表、图形和警报。Grafana 还提供一个具有额外功能的授权企业版本，可以作为自托管安装或 Grafana Labs 云服务上的账户使用。它通过一个[插件系统](https://en.wikipedia.org/wiki/Plug-in_(computing))实现扩展。终端用户可以使用交互式查询构建器创建复杂的监控仪表盘。Grafana 分为[前端和后端](https://en.wikipedia.org/wiki/Front_end_and_back_end)，分别使用 [TypeScript](https://en.wikipedia.org/wiki/TypeScript) 和 [Go](https://en.wikipedia.org/wiki/Go_(programming_language)) 编写。

我们将使用 ESP32 来收集温度、湿度和气压数据。这些数据将被发送到 [InfluxDB](https://www.influxdata.com/products/influxdb-cloud/) 中的时间序列数据库。InfluxDB 可以在 Raspberry Pi 本地运行，也可以运行在其云服务器上，我们将使用其云服务器。然后，我们将使用一个名为 [Grafana](https://grafana.com/) 的分析和可视化应用程序来显示存储在数据库中的信息。Grafana 也可以在我们的 Raspberry Pi（或在本例中是 reTerminal）上本地运行，或者运行在其云服务器上。我们将把它安装并运行在我们的 reTerminal 上。您不需要为 InfluxDB 和 Grafana 使用单独的 Pi，如果您愿意，可以将两者都本地运行在您的 reTerminal 上——我只是希望不需要一直让 reTerminal 运行来收集数据。

![ESP32 和 Grafana 之间的数据处理](https://www.the-diy-life.com/wp-content/uploads/2021/12/Data-Processing-Between-ESP32-and-Grafana-1024x576.jpg)

## 所需材料

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html)
- 电源
- ESP32
- [Grove 传感器（来自初学者套件）](https://www.seeedstudio.com/Arduino-Sensor-Kit-Base-p-4743.html)
- 面包板
- 面包板跳线

## Azure 和 InfluxDB 设置

我们需要首先创建一个虚拟机。

- **步骤 1.** 打开以下页面并登录到您的 [Microsoft Azure](https://portal.azure.com/#home) 服务。点击 `Virtual machines`，然后点击 `Create`。

![image-20220124131855082](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124131855082.png)

- **步骤 2.** 在虚拟机中选择 Ubuntu 18.04 系统作为默认系统。点击 `Review + create` 并进入下一页。

![image-20220124132225793](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124132225793.png)

- **步骤 3.** 所有配置选择完成后，点击 `Create`。

![image-20220124132800871](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124132800871.png)

此过程需要一些时间，完成后点击 `Go to resource` 按钮。

![image-20220124133101855](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124133101855.png)

然后会跳转到以下页面。点击 `Networking`，选择 `Add inbound port rule` 并添加 `8086` 端口，目标设置为任意。

<img src="https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124133706479.png" alt="image-20220124133706479" />

- **步骤 4.** 复制以下命令以安装 Docker 并启用它。

```bash
sudo apt udpate
sudo apt install docker docker-compose -y
sudo systemctl enable --now docker && sudo systemctl start docker
sudo systemctl status docker
```

![image-20220124134313484](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124134313484.png)

- **步骤 5.** 使用以下命令拉取 InfluxDB 镜像。

```bash
sudo docker pull influxdb:2.1.1
```

![image-20220124134409253](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124134409253.png)

- **步骤 6.** 使用以下命令在后台运行 InfluxDB。

```bash
sudo docker run -d --name influxdb -p 8086:8086 influxdb:2.1.1
```

![image-20220124135326814](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124135326814.png)

- **步骤 7.** 打开浏览器并输入 `http://yourip:8086`（您的 IP）。点击 "Get Started" 开始使用。

![image-20220124135533274](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124135533274.png)

- **步骤 8.** 记录您的 `Organization Name` 和 `Bucket Name`，然后点击 "Continue"。

![image-20220124135632177](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124135632177.png)

- **步骤 9.** 点击 `Data > API Tokens`。

![image-20220124140028985](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124140028985.png)

Azure 和 InfluxDB 现在已经设置完成，接下来我们将转到 ESP32。

## ESP32 设置

为了收集天气数据，我们将使用一个 ESP32，连接到 pin 4 的 DHT11 传感器和连接到 I2C 接口（pin 21 和 22）的 BMP280 压力传感器。这里的示例使用了 [初学者套件](https://amzn.to/31my42U) 中的两个 Grove 传感器模块，因为它们已经包含了所有所需的电子元件（额外的电阻等）。

![ESP32 电路图](https://www.the-diy-life.com/wp-content/uploads/2021/12/ESP32-Circuit-Diagram-1024x576.jpg)

- **步骤 1.** 打开 [Arduino IDE](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) 并[安装库](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/)。这里提供两种安装方式。

1. 使用库管理器

```
1. 打开 Arduino IDE，点击 "Sketch" 菜单，然后选择 Include Library > Manage Libraries。
2. 在搜索框中输入 'influxdb'。
3. 安装 'InfluxDBClient for Arduino' 库。
```

2. 手动安装

```
1. cd <arduino-sketch-location>/library。
2. git clone https://github.com/tobiasschuerg/InfluxDB-Client-for-Arduino。
3. 重启 Arduino IDE。
```

- **步骤 2.** 将以下代码复制到草图中。

```cpp
#include <Wire.h>                                                   //导入所需库
#include "DHT.h"
#include "Seeed_BMP280.h"
#include <WiFiMulti.h>
WiFiMulti wifiMulti;
#define DEVICE "ESP32"

#include <InfluxDbClient.h>
#include <InfluxDbCloud.h>

#define WIFI_SSID "xxxxxxxx"                                            //网络名称
#define WIFI_PASSWORD "xxxxxxxxxx"                                        //网络密码
#define INFLUXDB_URL "http://xxxxxxxx:8086"                                                 //InfluxDB v2 服务器 URL，例如 https://eu-central-1-1.aws.cloud2.influxdata.com (使用: InfluxDB UI -> Load Data -> Client Libraries)
#define INFLUXDB_TOKEN "xxxxxxxxx"                                                                                             //InfluxDB v2 服务器或云 API 令牌 (使用: InfluxDB UI -> Data -> API Tokens -> <选择令牌>)
#define INFLUXDB_ORG "xxxxxxx"                                                                                               //InfluxDB v2 组织 ID (使用: InfluxDB UI -> User -> About -> Common Ids )
#define INFLUXDB_BUCKET "xxxxxxx"                                                                                            //InfluxDB v2 存储桶名称 (使用: InfluxDB UI -> Data -> Buckets)
#define TZ_INFO "JST-9"                                                                                                //InfluxDB v2 时区

DHT dht(4,DHT11);                                                   //DHT 和 BMP 传感器参数
BMP280 bmp280;

int temp = 0;                                                       //用于存储传感器读数的变量
int humid = 0;
int pressure = 0;

//InfluxDBClient client(INFLUXDB_URL, INFLUXDB_ORG, INFLUXDB_BUCKET, INFLUXDB_TOKEN, InfluxDbCloud2CACert);                 //带预配置 InfluxCloud 证书的 InfluxDB 客户端实例
InfluxDBClient client(INFLUXDB_URL, INFLUXDB_ORG, INFLUXDB_BUCKET, INFLUXDB_TOKEN); 

Point sensor("weather");                                            //数据点

void setup() 
{
  Serial.begin(115200);                                             //启动串行通信
  
  dht.begin();                                                      //连接到 DHT 传感器
  if(!bmp280.init())                                                //连接到压力传感器
    Serial.println("bmp280 初始化错误！");

  WiFi.mode(WIFI_STA);                                              //设置 WiFi 连接
  wifiMulti.addAP(WIFI_SSID, WIFI_PASSWORD);

  Serial.print("正在连接到 WiFi");                               //连接到 WiFi
  while (wifiMulti.run() != WL_CONNECTED) 
  {
    Serial.print(".");
    delay(100);
  }
  Serial.println();

  sensor.addTag("device", DEVICE);                                   //添加标签 - 根据需要重复
  sensor.addTag("SSID", WIFI_SSID);

  timeSync(TZ_INFO, "pool.ntp.org", "time.nis.gov");                 //准确时间对于证书验证和批量写入是必要的

  if (client.validateConnection())                                   //检查服务器连接
  {
    Serial.print("已连接到 InfluxDB: ");
    Serial.println(client.getServerUrl());
  } 
  else 
  {
    Serial.print("InfluxDB 连接失败: ");
    Serial.println(client.getLastErrorMessage());
  }
}

void loop()                                                          //循环函数
{
  temp = dht.readTemperature();                                      //记录温度
  humid = dht.readHumidity();                                        //记录湿度
  pressure = bmp280.getPressure()/100;                               //记录压力

  sensor.clearFields();                                              //清除字段以重复使用数据点。标签将保持不变

  sensor.addField("temperature", temp);                              //将测量值存储到数据点
  sensor.addField("humidity", humid);                                //将测量值存储到数据点
  sensor.addField("pressure", pressure);                             //将测量值存储到数据点

    
  if (wifiMulti.run() != WL_CONNECTED)                               //检查 WiFi 连接并在需要时重新连接
    Serial.println("WiFi 连接丢失");

  if (!client.writePoint(sensor))                                    //写入数据点
  {
    Serial.print("InfluxDB 写入失败: ");
    Serial.println(client.getLastErrorMessage());
  }
  
  Serial.print("温度: ");                                            //在串行监视器上显示读数
  Serial.println(temp);
  Serial.print("湿度: ");
  Serial.println(humid);
  Serial.print("压力: ");
  Serial.println(pressure);
  delay(1000);                                                      //等待 60 秒
}
```

**注意：** 代码尚未完成。如果您设置了 API 令牌和存储桶，那么通过 InfluxDB 仪表板访问的 Arduino 接口页面生成的代码已经包含正确的设置信息，因此您只需将其复制到您的代码中即可。

![InfluxDB Arduino 接口说明](https://www.the-diy-life.com/wp-content/uploads/2021/12/InfluxDB-Arduino-Interface-Instructions-1024x576.jpg)

- **步骤 3.** 上传代码并检查结果。

![image-20220124140133524](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124140133524.png)

过一段时间后，我们可以看到信息现在已经存储在我们的 InfluxDB 数据库中，因此我们知道 ESP32 工作正常。接下来，我们可以继续在 reTerminal 上安装 Grafana 并设置它以显示数据库中的信息。

## 在 reTerminal 上安装和设置 Grafana

接下来，我们将按照其网站上针对 [Debian 或 Ubuntu 的安装说明](https://grafana.com/docs/grafana/latest/installation/debian/) 来安装 Grafana。然后我们只需启动 Grafana 并设置为开机自动启动。

![安装 Grafana](https://www.the-diy-life.com/wp-content/uploads/2021/12/Installing-Grafana-1024x542.jpg)

- **步骤 1.** 通过在浏览器中打开一个新标签页访问 Grafana 的 Web 界面，指向 localhost 的 3000 端口。您可以在 reTerminal 的浏览器中输入 `http://localhost:3000`

![Grafana Web 界面 Localhost3000](https://www.the-diy-life.com/wp-content/uploads/2021/12/Grafana-Web-Interface-Localhost3000-1024x534.jpg)

然后我们需要配置它以读取 InfluxDB 中的数据，方法是输入服务器和身份验证信息。这些信息可以通过您的 InfluxDB Web 界面找到，与您的 ESP32 发布数据的信息非常相似。

- **步骤 2.** 点击 `Setting` 按钮并选择 `Data sources`。

![image-20220124144300849](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124144300849.png)

- **步骤 3.** 在过滤器中输入 `InfluxDB` 并选择 `InfluxDB`。

![image-20220124144322352](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124144322352.png)

现在我们已经在 reTerminal 上安装并设置了 Grafana。

## [配置 Grafana 使用 Flux](https://docs.influxdata.com/influxdb/v2.0/tools/grafana/#configure-grafana-to-use-flux)

在您的 InfluxDB 数据源中选择 **Flux** 作为查询语言后，我们将配置 InfluxDB 连接：

- **步骤 1.** 设置 **Connection** 并点击 **Save & Test**。相关信息如下：

  - **URL**: 您的 [InfluxDB URL](https://docs.influxdata.com/influxdb/v2.0/reference/urls/)。

     ```sh
     http://yourip:8086/
     ```

     [更改 InfluxDB URL](https://docs.influxdata.com/influxdb/v2.0/tools/grafana/#)
  - **Organization**: 您的 InfluxDB [组织名称 **或** ID](https://docs.influxdata.com/influxdb/v2.0/organizations/view-orgs/)。
  - **Token**: 您的 InfluxDB [API 令牌](https://docs.influxdata.com/influxdb/v2.0/security/tokens/)。
  - **Default Bucket**: Flux 查询中使用的默认 [存储桶](https://docs.influxdata.com/influxdb/v2.0/organizations/buckets/)。
  - **Min time interval**: [Grafana 最小时间间隔](https://grafana.com/docs/grafana/latest/features/datasources/influxdb/#min-time-interval)。

![img](https://docs.influxdata.com/img/influxdb/2-0-tools-grafana.png)

Grafana 应该连接到 InfluxDB 2.0 数据源并返回测试结果。

- **步骤 2.** 在此处添加面板。

![image-20220124143542830](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124143542830.png)

- **步骤 3.** 返回 `InfluxDB`，按照以下说明创建脚本。

![image-20220124143752559](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124143752559.png)

- **步骤 4.** 复制脚本并将其粘贴到 reTerminal。

![image-20220124143812005](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124143812005.png)

![image-20220124151052928](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124151052928.png)

- **步骤 5.** 在 reTerminal 上检查结果，信息应显示如下。

![image-20220124164221791](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124164221791.png)

![image-20220124151124558](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124151124558.png)