---
description: SenseCAP Meshtastic & LoRa 太阳能节点
title:  SenseCAP太阳能节点基本介绍
keywords:
- Meshtastic
- Solar
image: https://files.seeedstudio.com/wiki/wiki-platform/solar-node.webp
slug: /cn/meshtastic_solar_node
sidebar_position: 3
last_update:
  date: 4/1/2025
  author: Jessie
---



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.png" alt="pir" width={800} height="auto" /></p>



这是一款基于 Meshtastic 的经济型太阳能通信节点或中继器，集成了 XIAO nRF52840 Plus 主控和 Wio-SX1262 LoRa 模块。它专为无网络覆盖区域设计，支持远距离通信、精准定位和低功耗运行。非常适合用于扩展户外区域的网络覆盖范围。

## 版本对比
 
太阳能节点目前有两个版本: [SenseCAP Solar Node P1](https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-for-Meshtastic-LoRa-p-6425.html) and [SenseCAP Solar Node P1-Pro](https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshtastic-LoRa-p-6412.html).

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-114993633-1_1.jpeg" alt="pir" width={800} height="auto" /></p>

## 概述

### 产品特性

* 集成5W太阳能板。

* 出厂预装 Meshtastic 固件，可无缝接入 Meshtastic 网络生态。

* 兼容 Grove 生态系统，支持温湿度、光照等传感器即插即用。

* 适用于长期户外部署。

* 在空旷区域支持8至9公里传输距离，可作为户外节点或中继器使用，轻松扩展 Mesh 网络并增强覆盖能力。


### 规格参数


<table>
  <tr>
    <th><b>主控</b></th>
    <th>
      <a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html" target="_blank">XIAO nRF52840 Plus</a><br />
      (Nordic nRF52840, ARM® Cortex®-M4 32-bit processor with FPU, 64 MHz, 256KB RAM, 1MB Flash, 2MB onboard Flash)
    </th>
  </tr>
  <tr>
    <td><b>LoRa模组</b></td>
    <td>
      <a href="https://www.seeedstudio.com/Wio-SX1262-Wireless-Module-p-5981.html" target="_blank">Wio-SX1262 Module</a><br />
      (Semtech SX1262, TXOP=22dBm@862-930MHz)
    </td>
  </tr>
  <tr>
    <td><b>GPS模组(P1-Pro版本)</b></td>
    <td>
      <a href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">XIAO L76K</a><br />
      (支持GPS/GLONASS/Galileo)
    </td>
  </tr>
  <tr>
    <td rowSpan="3"><b>天线</b></td>
    <td>
      <p>LoRa:</p>
      <p>类型: 棒状橡胶天线</p>
      <p>频率范围: 868-915MHz</p>
      <p>增益: 2dBi</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>GNSS:</p>
      <p>GPS L1 C/A: 1575.42MHz</p>
      <p>GLONASS L1: 1602MHz</p>
      <p>BeiDou B1: 1561.098MHz</p>
    </td>
  </tr>
  <tr>
    <td>Bluetooth 5.0</td>
  </tr>
  <tr>
    <td><b>太阳能板</b></td>
    <td>5W</td>
  </tr>
  <tr>
    <td rowSpan="2"><b>接口</b></td>
    <td>Grove *1: IIC/GPIO/UART</td>
  </tr>
  <tr>
    <td>USB-C</td>
  </tr>
  <tr>
    <td rowSpan="3"><b>按键</b></td>
    <td>开/关机</td>
  </tr>
  <tr>
    <td>重置</td>
  </tr>
  <tr>
    <td>用户自定义</td>
  </tr>
  <tr>
    <td rowSpan="4"><b>LED</b></td>
    <td>充电状态指示灯 *2</td>
  </tr>
  <tr>
    <td>太阳能板状态指示灯 *1</td>
  </tr>
  <tr>
    <td>Mesh心跳指示灯 *1</td>
  </tr>
  <tr>
    <td>用户自定义 *1</td>
  </tr>
  <tr>
    <td><b>电源</b></td>
    <td>Type-C: 5V 1A</td>
  </tr>
  <tr>
    <td></td>
    <td>太阳能供电: 5V 1A</td>
  </tr>
  <tr>
    <td><b>防护等级</b></td>
    <td>IPX5</td>
  </tr>
  <tr>
    <td><b>电池(P1-Pro版本)</b></td>
    <td>
      <p>- 4 x 18650锂电池(每个3350mAh)</p>
      <p>- 支持 Type-C 和太阳能充电.</p>
      <p>- 放电环境: -40～60°C</p>
      <p>- 充电环境: 0-50°C</p>
    </td>
  </tr>
  <tr>
    <td><b>认证</b></td>
    <td>FCC、CE</td>
  </tr>
  <tr>
    <td><b>尺寸</b></td>
    <td>191.2 x 201.2 x 42.1 mm</td>
  </tr>
</table>

### 硬件概览


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/interactive.png" alt="pir" width={800} height="auto" /></p>



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/accessory.png" alt="pir" width={800} height="auto" /></p>


