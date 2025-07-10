---
description: 总太阳辐射传感器
title: 总太阳辐射传感器
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image1.webp
slug: /cn/total_solar_radiation_sensor
last_update:
  date: 05/15/2025
  author: Leo
---

# 总太阳辐射传感器

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image1.png" alt="pir" width={800} height="auto" /></p>

IP68 RS485 总太阳辐射传感器可测量 300 至 1100 纳米范围内的实时太阳总辐射，非常适合环境监测和农业应用。将其与 SenseCAP 传感器集线器 4G 数据记录仪或 SenseCAP S2100 LoRaWAN® 数据记录仪配对，可实现无缝的数据采集和管理。

## 可升级为工业传感器

通过 SenseCAP S2100 [数据记录仪](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html?queryID=ec697c44483ad32db968bd7daaf7839d&objectID=5361&indexName=bazaar_retailer_products)，您可以轻松将此传感器升级为 LoRaWAN® 传感器。Seeed 不仅帮助您完成原型设计，还为您提供通过 SenseCAP 系列的 [工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) 扩展项目的可能性。

## 搭配 S2100 LoRaWAN 数据记录仪使用

在本页面中，我们将指导您如何将 S2100 LoRaWAN 数据记录仪与总太阳辐射传感器连接，从而在短短五分钟内创建一个坚固的工业级 LoRaWAN 无线传感器，可用于商业用途。

### 硬件准备

<table align="center">
 <tr>
     <th>SenseCAP S2100 数据记录仪</th>
      <th>总太阳辐射传感器</th>
    <th>十字螺丝刀</th>
 </tr>
 <tr>
     <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image1.png" alt="pir" width={800} height="auto" /></p></td>
     <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image2.png" alt="pir" width={800} height="auto" /></p></td>
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image3.png" alt="pir" width={800} height="auto" /></p></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-p-5691.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
  <td>
  </td>
 </tr>
</table>

**数据记录仪**：它是一个 LoRaWAN 转换器，可将 MODBUS RS485/模拟量/GPIO 传感器转换为支持 LoRa 的传感器，从而通过 LoRaWAN 协议传输数据。

**总太阳辐射传感器**：总太阳辐射传感器利用硅光电探测器，当光照射时会产生与入射光强度成比例的电流信号，并可直接输出以 W/㎡ 为单位的测量值。

**十字螺丝刀**：用于组装传感器探头。

**网关**：LoRaWAN 传感器将数据传输到 LoRaWAN 网关，然后网关将数据传输到云服务器。如果您没有网关，有以下两种选择：

- 选项 1：传感器在 Helium 网络覆盖的区域工作（可在 [Helium Explorer](https://explorer.helium.com/) 上检查）。只要有 Helium 网络，您就可以使用传感器传输数据，而无需购买网关。
- 选项 2：购买一个 [网关](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html)。

**下载 SenseCAP Mate App 进行配置：**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image4.png" alt="pir" width={300} height="auto" /></p>

准备工作完成了。让我们开始吧！

### 2. 网络架构

让我们从 LoRaWAN 的网络架构开始。
数据记录仪将传感器数据转换为 LoRa 数据并上传到网关。网关将数据上传到服务器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image5.png" alt="pir" width={800} height="auto" /></p>

### 将总太阳辐射传感器连接到 SenseCAP 数据记录仪

- **步骤 1：** 拧下数据记录仪上的三个螺丝

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/70.jpg"/></div>

- **步骤 2：** 移除底盖并取出内部 PCBA，直到螺丝端子可见。您无需取出整个电路板

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

- **步骤 3：** 通过顺时针方向拧松移除螺纹盖

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/72.jpg"/></div>

- **步骤 4：** 将附带的电缆穿过螺纹盖和底盖

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/73.jpg"/></div>

- **步骤 5：** 将电缆的导线连接到螺丝端子，如下所示

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

**提示**：如果您使用的是其他协议，例如 4-20mA，请参考引脚表：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image6.png" alt="pir" width={800} height="auto" /></p>

总太阳辐射传感器的接线顺序，默认包含防水连接器，为了与 S2100 连接，需要剪掉连接器：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image7.png" alt="pir" width={800} height="auto" /></p>

- **步骤 6：** 将硬件单元放回外壳内，从底部盖子关闭并拧紧螺丝

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/75.jpg"/></div>

- **步骤 7：** 拧紧螺纹盖并固定电缆位置

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/76.jpg"/></div>

当总太阳辐射传感器和数据记录仪的所有连接完成后，应该如下图所示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image8.jpg" alt="pir" width={800} height="auto" /></p>

### 配置 RS485 通信设置

**步骤 1：** 选择 **S2100 数据记录仪** 并在配置页面点击 **Setup**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image9.png" alt="pir" width={800} height="auto" /></p>

**步骤 2：** 按住按钮 **3** 秒，绿色 LED 将以 1 秒的频率闪烁。然后点击 **Scan** 开始扫描数据记录仪的蓝牙。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/gif1.gif" alt="pir" width={800} height="auto" /></p>

**步骤 3：** 配置 LoRaWAN 和传感器参数（包括 RS485 Modbus-RTU 命令）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image10.png" alt="pir" width={800} height="auto" /></p>

#### 如何导入模板

**步骤 1：** 请点击以下链接并选择您的浏览器下载文件。[总太阳辐射传感器](https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/Total%20Solar%20Radiation%20Sensor.seeed)

**步骤 2：** 点击右上角的 "➕"，选择 "导入模板"，然后选择下载的文件，模板将被导入。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image11.png" alt="pir" width={800} height="auto" /></p>

**步骤 3：** 点击发送并通过点击 **Measure** 测试传感器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image12.png" alt="pir" width={600} height="auto" /></p>

传感器的总太阳辐射数据已成功获取！

## 资源

- **[PDF]** [总太阳辐射传感器用户手册](https://files.seeedstudio.com/products/SenseCAP/rs485%E4%BC%A0%E6%84%9F%E5%99%A8/Total%20Solar%20Radiation%20Sensor%20(S-ZFS-02)%20User's%20Manual.pdf)
- **[PDF]** [SenseCAP S2100 数据记录仪用户指南](https://files.seeedstudio.com/products/SenseCAP/S2100/SenseCAP%20S2100%20LoRaWAN%20Data%20Logger%20User%20Guide.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>