---
description:  SenseCAP ONE 紧凑型气象站
title:  SenseCAP ONE 紧凑型气象站
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/SenseCAP-One-Series-Meteorological-Sensors
last_update:
  date: 05/15/2025
  author: jianjing Huang
---

# SenseCAP ONE 系列气象传感器

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

![sensecap one](https://files.seeedstudio.com/products/113990896/wiki/sensecap%20one/SenseCAP-ONE-1030x754.png)

##### _(SenseCAP ONE 系列紧凑型气象站)_

## 产品介绍

如今，关于局部天气（称为微气候）的数据是更精确和准确天气预报的新前沿。因此，天气数据的收集正变得越来越小型化和网格化。鉴于此，作为收集天气数据最便捷的方式，气象站的需求正在上升。

SenseCAP ONE 紧凑型气象站由多个气象传感器组成，可测量以下参数：空气温度与湿度、大气压力、光照、降水量、风速、风向、PM2.5 和 PM10。通过采用模块化设计，SenseCAP ONE 使您能够根据实际应用需求，方便地将不同组合的传感器集成到一个紧凑型气象站中。

这些产品按照工业标准设计，具有 IP66 防护等级，特点包括高精度、高可靠性和稳定性以及强大的耐用性。SenseCAP ONE 系列支持 RS485/RS422 (Modbus) 和 SDI-12 接口，便于与其他相应接口的传感器扩展。SenseCAP ONE 易于部署，能够在户外恶劣环境中长期运行，非常适合智能城市、电网、电厂、道路气象站、机场和智慧农业等场景的应用。

![sensecap one catagories](https://files.seeedstudio.com/products/113990896/wiki/sensecap%20one/overall.png)

总共有六款 SenseCAP 产品，包含不同组合的传感器。为了找到适合您特定场景的产品，以下图表清晰展示了 SenseCAP ONE 的外观以及每款产品可以测量的参数。

### SenseCAP ONE S700 7 合 1 紧凑型气象传感器

SenseCAP ONE S700 7 合 1 紧凑型气象传感器可以帮助您收集和监测环境和天气数据，这些数据在智能城市项目等不同应用场景中至关重要。SenseCAP ONE S700 配备了传感器，可测量以下七个参数：空气温度、相对湿度、大气压力、光照强度、降雨量、风速和风向。

SenseCAP ONE 通过了 IP66 认证，具有强大的耐用性，能够承受最恶劣的户外环境。用于测量风速和风向的传感器采用超声波技术，而不是传统的机械三杯式或风向标式风速计。使用超声波传感器的优势在于减少了可移动部件，从而降低了传感器损坏的可能性，并且无需牺牲精度或人力即可更容易维护。

SenseCAP ONE 系列使用 RS 485 (MODBUS-RTU) / 232 / 422 (Modbus) / SDI-12 通信协议。因此，SenseCAP ONE 紧凑型气象传感器可以与支持 RS 485 (MODBUS-RTU) / 232 / 422 (Modbus) / SDI-12 的任何数据记录器一起使用。

我们还提供了 SenseCAP [Sensor Hub 4G 数据记录器](https://solution.seeedstudio.com/product/sensor-hub-4g-data-logger/)（支持太阳能供电和直流墙插电源），可与 SenseCAP ONE 系列气象传感器配合使用。数据可以传输到 Sensor Hub，然后传输到 SenseCAP 服务器或私有服务器。如果您选择使用 SenseCAP 服务器，我们还提供 API，方便您轻松开发自己的应用程序。

![](https://sensecap-solution-upload.cdn.seeed.cn/cc/2020/05/Picture16.png?x-oss-process=image%2Fformat,webp)

## 特性

- **多种气象参数测量集成于一体**：包括降雨强度、空气温度、相对湿度、大气压力、光强、降水强度、风速和风向等。

- **内置电子罗盘**：便于安装，您可以选择禁用电子罗盘并手动调整至北向。

- **配备法兰盘和3米电缆**，适用于杆式安装。

- **IP66等级**：防水、防尘，支持加热器，适用于恶劣的户外环境。

- **超声波风速和风向传感器，无活动部件**

- **体积小巧，已校准，易于安装，无需维护且用户友好**

- **配备辐射屏蔽**，确保准确的环境测量。

- **支持的接口**：RS 485 (MODBUS-RTU) / 232 / 422 (Modbus) / SDI-12

- **CE、FCC认证正在进行中**，即将推出……

## 测量规格

![measurement](https://files.seeedstudio.com/products/113990896/wiki/sensecap%20one/measurement%20specification.png)

## 通用规格

![general](https://files.seeedstudio.com/products/113990896/wiki/sensecap%20one/general%20specifications.png)

## 演示

这里我们将向您展示如何使用 [SenseCAP ONE S700](https://www.seeedstudio.com/SenseCAPONE-S700-7in1-Compact-Weather-Sensor.html) 和 [Raspberry Pi](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html) 创建您自己的气象站！通过最少的设置和易于使用的代码，这是一个非常适合初学者的教程，可以让您快速上手。

![](https://lh4.googleusercontent.com/CFwdaJ3jBZHVROiCzg1Mfu2dF5pNJwH3DAt7dloC4IKyKO_nFwISY_J-3JpZIqiZCazf9Y5DAxB7OxwNwhnwot3BY_I4Wx3CBdWrZNUwJMoDe9bCSzLmS4yxLVz0JYrm9HhjZl7N)

### 为什么需要气象站？

当我们谈到天气数据时，很容易认识到它在航空、海运和建筑行业的重要性，以及预测极端气候的作用。然而，对于普通人来说，这些信息可能仅在我们决定是否需要带伞出门时才显得相关。

如果我告诉您，由于新的应用，天气数据的潜力和相关性将变得更大，您会怎么想？

在服装行业，每年约35%的收入损失是由于不准确的销售预测以及服装销售与时间、季节和天气变化、节假日等因素之间关系的统计数据造成的。

为了缓解这一问题，为什么不使用准确的天气预测数据来规划库存分配呢？例如，我们可以估算未来天气变化将如何影响羽绒服的需求。

事实上，许多国家已经开始使用气象数据来驱动商业决策。在德国，“啤酒指数”表明，当气温超过22°C时，啤酒销量会激增。而每升高1°C，每天会多售出230万瓶啤酒。绝对令人惊叹！

除了“啤酒指数”，还有“汽车指数”、“冰淇淋指数”、“泳装指数”、“食品霉变指数”等，企业可以根据这些指数提前制定生产和营销计划。由此可见，气象数据的商业化有着巨大的想象空间。

如今，局部天气数据（即微气候）是更精确和准确天气预测的新前沿。因此，天气数据的收集变得越来越小型化和网格化。在这种背景下，气象站作为收集天气数据最方便的手段，需求正在上升。在今天的演示中，我们将向您展示如何使用 SenseCAP ONE S700 和 Raspberry Pi 仅需几个步骤就能让您的气象站运行起来。

### 所需材料

要完成本教程，建议准备以下材料。如果您手头有旧的 Raspberry Pi 3，也可以使用，但 Raspberry Pi 4 将提供更多的性能和灵活性，适合您用于其他项目。

- [Raspberry Pi 4 8GB](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html) x1

- [RS-485 Shield for Raspberry HAT](https://www.seeedstudio.com/RS-485-Shield-for-Raspberry-Pi.html) x1

- [SenseCAP ONE S700](https://www.seeedstudio.com/SenseCAPONE-S700-7in1-Compact-Weather-Sensor.html) x1

### 硬件设置

首先，将 Seeed RS-485 Shield 安装到 Raspberry Pi 上，注意与 Raspberry Pi 的 1 到 25 号引脚对齐，如下图所示。

![](https://lh4.googleusercontent.com/h4i69Ct7UV4euxBaw8dLj09gJGfhTm4mo2hXmlq2hDKmANg116M79P_U1P50W8B_1-3h1ckTUjew8NsUALx8-CDoiisaYnyq_fwyekfAffY6ZMf5vVL6WEn02xZoRlw_uSZw2G46)

然后，将 SenseCAP ONE S700 通过 RS-485 连接线连接到 RS-485 Shield。完成！

### 软件设置

#### 第一步：配置 SenseCAP ONE S700

我们首先需要在 SenseCAP ONE S700 上设置协议。首先下载并安装适用于您操作系统的最新 SenseCAP ONE 配置工具 [这里](https://github.com/Seeed-Solution/SenseCAP-One-Configuration-Tool/releases)。

打开配置工具后，通过 USB Type-C 将 SenseCAP ONE 连接到您的电脑，并在串口下选择它。然后点击“Connect”。

接下来，选择“Settings”。在“Main Port Protocol”下选择 RS-485 ASCII，如下图所示。然后点击“Write To Device”。

![](https://lh5.googleusercontent.com/IaVOWjPMua04nLj8I1LP89rZ0JBNxpyEhSfDWupO9cMIYtsV6lsR90k1esRGWLsBgzCHB2Odj5kb3BIPF5kkCyRBwsnf_-a8L9gnQuTM5cEXfHpMA-WzaWt50AqNtHZZEhqXcEgx)

#### 第二步：配置 Raspberry Pi

本教程假设 Raspberry Pi 上运行的是 Raspberry Pi OS，并且已经设置了互联网连接。如果您是 Raspberry Pi 的新手，可以在 [这里](https://www.seeedstudio.com/blog/2021/01/25/three-methods-to-configure-raspberry-pi-wifi/) 学习如何设置 WiFi。

首先，确保您的 Raspberry Pi 上已安装 Node.JS v10.22.x。如果尚未安装，请运行以下脚本进行安装。

```
curl -L https://raw.githubusercontent.com/tj/n/master/bin/n -o n
bash n 10
```

下一步是启用 /dev/ttyS0 上的硬件串口。在终端窗口中运行以下命令启动 Raspi 配置工具：

```
sudo raspi-config
```

### 运行气象站

完成设置后，运行气象站非常简单。在您的 Raspberry Pi 上执行以下命令以安装并运行气象站服务器和网站。

```
git@github.com:Seeed-Solution/SenseCAP-WeatherStation-Raspberry-Pi-Visualization.git
mv SenseCAP-WeatherStation-Raspberry-Pi-Visualization /opt/SenseCAP-WeatherStation-Raspberry-Pi-Visualization
cd /opt/SenseCAP-WeatherStation-Raspberry-Pi-Visualization

cd server && install --unsafe
cd website && install --unsafe

# pm2 启动
npm install -g -y --unsafe pm2 http-server
pm2 start run-server.sh
pm2 start run-website.sh
pm2 save
pm2 ls
```

确保您的 PC 和 Raspberry Pi 在同一个局域网内，通过浏览器访问以下 URL 来查看气象站数据。

```
http://{Raspberry Pi IP}:8080
```

如果您不确定 Raspberry Pi 的 IP 地址，可以运行以下命令并记录 inet 后面的 IP 地址。

```
ifconfig wlan0
```

![](https://lh3.googleusercontent.com/1MviIYqYAIagHWvDDj8BXoRjBWAbqYATtQ4wyTrl4W3Z-XTwa9VcO63zkZ7_qD5mvu88EsJ9Euu8G4GAi8IW7WOy_047ZdO-7BWMGL1Qvz59Sv1n5vTZ6_OzzOY5JSBcAENfNrc5)

### 完成

完成所有设置并成功访问 URL 后，您应该会看到实时可视化的气象数据，如下图所示。SenseCAP ONE S700 是一个集成平台，不仅可以获取基本数据如温度和湿度，还可以查看包括风向和风速、气压、降雨量甚至光照量在内的高级信息。

![](https://lh6.googleusercontent.com/SGQuzJr3kZIRojr79-Iu1-onBBQoCDNH6gFFPTh7eFJy7yYYlO97Y6uvtEgSvMmt68q1LBUlMJSgOUn7kFK3Meu2d1mv6oAovEiKlCwNkJaOmhEwBBeDVNDZMTrggOiZsHh2JHEq)

通过这些步骤，我们不仅可以在几分钟内拥有一个功能齐全的气象站，还可以扩展它以远程可视化数据。此外，我们还可以存储气象数据以进行强大的数据分析和预测。

### 总结

希望您喜欢这个演示，展示了如何使用 Raspberry Pi 和 [SenseCAP ONE S700](https://www.seeedstudio.com/SenseCAPONE-S700-7in1-Compact-Weather-Sensor.htmlhttps://www.seeedstudio.com/SenseCAPONE-S700-7in1-Compact-Weather-Sensor.html) 在几步内创建一个气象站！虽然这个项目很简单，但它所启发的可能性仅受您的想象力限制。

除了与 Raspberry Pi 4 8GB 配合使用，SenseCAP ONE 系列产品还可以轻松部署并与我们的 [SenseCAP Sensor Hub 4G 数据记录仪](https://www.seeedstudio.com/SenseCAP-Sensor-Hub-4G-Data-Logger-with-builtin-battery-p-4852.html) 配合使用。作为一个易于部署的工业级 4G 蜂窝站，Sensor Hub 使用 MODBUS-RTU RS485 协议与传感器通信，并能够同时收集各种传感器数据。具有 IP66 防护等级、防水防尘的 Sensor Hub 4G 数据记录仪适用于长期可靠的户外应用，例如智能农业、智能气象站和智慧城市等。

现在，您会如何使用您自己的气象站呢？

## 应用场景

![sensecap one 应用场景](https://files.seeedstudio.com/products/113990896/wiki/sensecap%20one/SenseCAP-ONE-Applications-1030x379.png)