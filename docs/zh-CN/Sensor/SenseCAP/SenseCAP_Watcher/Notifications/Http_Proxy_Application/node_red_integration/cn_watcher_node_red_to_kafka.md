---
description: 从 Watcher 和 Node-RED 发送消息到 Kafka
title: Watcher 和 Node-RED 到 Kafka
keywords:
- watcher
- kafka
image: https://files.seeedstudio.com/wiki/watcher_to_kafka_image/head_image.png
slug: /cn/watcher_node_red_to_kafka
last_update:
  date: 05/15/2025
  author: Allen
---

# Watcher 和 Node-RED 到 Kafka 快速入门

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/head_image.png" style={{width:1000, height:'auto'}}/></div>

## 第一部分：[Kafka](https://kafka.apache.org) 是什么

Apache Kafka 是一个分布式事件流平台，专为高吞吐量和容错数据处理而设计。它通过允许生产者将消息发布到主题，同时消费者可以订阅这些主题来处理数据，从而实现实时数据流。Kafka 广泛用于构建数据管道、实时分析以及集成各种数据源。其强大的架构确保了可扩展性和持久性，使其成为现代数据驱动应用的热门选择。

## 第二部分：在 Docker 中构建 Kafka 集群

为什么使用 Docker？因为 Docker 可以在单台机器上模拟多个计算机的环境，并轻松部署应用程序。因此，在本项目中，我们将使用 Docker 来设置环境并提高效率。

### 第一步：下载 Docker

根据您的计算机选择不同类型的安装程序。点击[这里](https://www.docker.com/products/docker-desktop)跳转。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/1.png" style={{width:1000, height:'auto'}}/></div>

:::提示
如果您的计算机是 **Windows**，请不要安装 Docker，直到完成 **第二步**。
:::

### 第二步：安装 WSL（Windows Subsystem for Linux）

:::提示
此步骤适用于 **Windows**。如果您的计算机是 Mac 或 Linux，可以跳过此步骤。
:::

1. 以管理员身份运行以下代码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/3.png" style={{width:1000, height:'auto'}}/></div>

```bash
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

2. 从[这里](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)下载此工具并双击安装。

3. 打开 **Microsoft Store** 搜索并下载您喜欢的 Linux 版本，这里我安装了 Ubuntu。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/4.png" style={{width:1000, height:'auto'}}/></div>

4. 安装 Linux 后，您需要打开它并设置用户名和密码，然后等待几分钟进行初始化。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/5.png" style={{width:1000, height:'auto'}}/></div>

5. 运行以下指令以使用 **WSL**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/6.png" style={{width:1000, height:'auto'}}/></div>

6. 安装 WSL 后，现在您可以双击 Docker 安装程序进行安装。当您看到以下图像时，说明安装成功。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/2.png" style={{width:1000, height:'auto'}}/></div>

### 第三步：构建 Kafka 镜像并运行

1. 找一个位置创建 **docker-compose.yml** 文件，并将以下代码复制到其中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/15.png" style={{width:1000, height:'auto'}}/></div>

```yml
services:
  zookeeper:
    image: wurstmeister/zookeeper   ## 镜像
    container_name: zookeeper
    ports:
      - "2181:2181"                 ## 外部暴露的端口号
  kafka:
    image: wurstmeister/kafka       ## 镜像
    container_name: kafka
    volumes: 
        - ./volume:/volume ## 挂载位置
    ports:
      - "9092:9092"
    environment:
      KAFKA_ADVERTISED_HOST_NAME: 127.0.0.1         ## 主机 IP
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181       ## Kafka 依赖于 zookeeper
      KAFKA_ADVERTISED_PORT: 9092
      KAFKA_LOG_RETENTION_HOURS: 120
      KAFKA_MESSAGE_MAX_BYTES: 10000000
      KAFKA_REPLICA_FETCH_MAX_BYTES: 10000000
      KAFKA_GROUP_MAX_SESSION_TIMEOUT_MS: 60000
      KAFKA_NUM_PARTITIONS: 3
      KAFKA_DELETE_RETENTION_MS: 1000
  kafka-manager:
    image: sheepkiller/kafka-manager                ## 镜像：开源的 Kafka 集群管理界面
    container_name: kafka-manager
    environment:
        ZK_HOSTS: 127.0.0.1                         ## 主机 IP
    ports:  
      - "9009:9000"                                 ## 暴露端口
```

2. 在容器中运行 Kafka 并进入容器
```
docker-compose up -d

docker exec -it kafka /bin/bash
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/1.png" style={{width:1000, height:'auto'}}/></div>

3. 创建一个新主题，生产消息并消费消息，以测试 Kafka 是否正常工作。
```
kafka-topics.sh --create --topic watcher --zookeeper zookeeper:2181 --replication-factor 1 --partitions 1

kafka-console-producer.sh --topic=watcher --broker-list kafka:9092

kafka-console-consumer.sh --bootstrap-server kafka:9092 --from-beginning --topic watcher
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/2.png" style={{width:1000, height:'auto'}}/></div>

## 第三部分：在 Node-RED 中运行 Kafka 消息模块

### 第四步：安装 Kafka 消息模块

1. 点击 **Manage palette**。如果您尚未安装 Node-RED，[请点击这里](https://wiki.seeedstudio.com/watcher_to_node_red/)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/3.png" style={{width:600, height:'auto'}}/></div>

2. 搜索 **kafka-manager** 并安装它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/4.png" style={{width:600, height:'auto'}}/></div>

### 第五步：配置 Kafka 消息模块

1. 将以下模块（**inject, kafka producer, kafka consumer, debug**）拖入工作区。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/5.png" style={{width:800, height:'auto'}}/></div>

2. 双击 **Kafka Producer** 进行配置。在执行步骤 3 时，您需要**添加一个新的 broker**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/6.png" style={{width:800, height:'auto'}}/></div>

3. 双击 **Kafka Consumer** 按如下方式进行配置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/7.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/12.png" style={{width:600, height:'auto'}}/></div>

4. 配置完成后，点击 **Deploy** 按钮进行部署。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/8.png" style={{width:1000, height:'auto'}}/></div>

:::tip
任何更改后，都需要点击 **Deploy** 按钮。
:::

5. 点击 **方形按钮** 发送一个时间戳以测试整个流程是否正常工作。如果一切正常，您应该在 **Kafka Consumer** 端接收到时间戳。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/9.png" style={{width:1000, height:'auto'}}/></div>

## 第四部分：在 Watcher 中运行任务

1. 首先，您需要按照下面的视频在 Watcher 中运行一个任务。如果您想了解更多信息，[请点击这里](https://wiki.seeedstudio.com/getting_started_with_watcher_task/)。

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

2. 在 Watcher 中运行任务完成后，您应该[参考此链接](https://wiki.seeedstudio.com/watcher_to_node_red/)将 Watcher 消息发送到 Node-RED。

## 第五部分：在 Kafka 中接收数据

1. 将 **timestamp** 模块替换为 **OpenStream** 和 **function** 模块，并双击进行配置。记得点击 Deploy 进行部署。

```javascript
node.send({ payload: msg.payload.value[0].content });

node.send({ payload: msg.payload.value[0].image_url });
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/10.png" style={{width:1000, height:'auto'}}/></div>

2. 我在 Watcher 中运行了一个 **People Detection**（人员检测）模型。因此，当 Watcher 检测到人员时，它会向 Kafka 发送消息，您可以通过打开链接查看照片。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/11.png" style={{width:1000, height:'auto'}}/></div>

恭喜您完成了 Watcher 到 Kafka 的应用！Kafka 中还有许多有用的功能等待您探索。继续保持良好的工作，深入挖掘更多令人兴奋的可能性吧！

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供了多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>