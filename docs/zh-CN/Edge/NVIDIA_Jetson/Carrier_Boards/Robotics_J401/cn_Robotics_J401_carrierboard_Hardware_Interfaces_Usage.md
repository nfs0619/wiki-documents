---
description: 本文档介绍了 reComputer Jetson Robotics J401 载板的硬件和接口。
title: 接口使用
tags:
  - Robotics J401 载板
  - Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/recomputer_jetson_robotics_j401_getting_started
last_update:
  date: 05/15/2025
  author: Yaohui
---

# reComputer Jetson Robotics J401 硬件和快速入门

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

reComputer Robotics J401 是一款紧凑型高性能边缘 AI 载板，专为高级机器人设计。兼容 NVIDIA Jetson Orin Nano/Orin NX 模块（Super/MAXN 模式），可提供高达 157 TOPS 的 AI 性能。配备丰富的连接选项，包括双千兆以太网端口、用于 5G 和 Wi-Fi/BT 模块的 M.2 插槽、6 个 USB 3.2 端口、CAN、GMSL2（通过可选扩展）、I2C 和 UART，它是一个强大的机器人“大脑”，能够处理来自各种传感器的复杂数据。预装 JetPack 6 和 Linux BSP，确保无缝部署。

支持 NVIDIA Isaac ROS、Hugging Face、PyTorch 和 ROS 2/1 等框架，reComputer Robotics J401 将大语言模型驱动的决策与物理机器人控制（如运动规划和传感器融合）相结合。它非常适合快速开发自主机器人，通过即用型接口和优化的 AI 框架加速上市时间。

## reComputer Jetson Robotics J401 载板概览

| **顶部视图** |
|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/carrier_board/top.png) |
| **正面视图** |
| ![fig2](https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/carrier_board/fornt.png) |
| **底部视图** |
| ![fig3](https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/carrier_board/bottom.png) |

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱</font></span></strong>
    </a>
</div>

## 包装清单
- reComputer Robotics J401 载板 x 1
- 电源和 JST 扩展板 x 1
- XT30 转 DC 电缆 x 1
- USB 数据线，Type A 转 Type C x 1
- 扩展板散热片 x 1
- 支柱 (M3*30) x 5
- M3 六角螺母 x 5
- 螺丝 (CM2.5*L.4) 用于 Jetson 模块和 M.2 Key M x 3
- 螺丝 (CM2*3.0) 用于 M.2 Key E x 1
- 支柱 (M2*2.0) 用于 M.2 Key B x 1
- 螺丝 (CM3*4.0) 用于 M.2 Key B x 1
- 用户手册 x 1

:::note
1. 在高电压供电和操作温度下，请根据《热设计指南》设计一个可靠的散热解决方案。
2. 请为模块安装散热片以获得更好的性能。
3. 在高电压输入和高负载操作时，请勿触摸散热片以防烫伤。
4. 电源适配器推荐：请使用 Seeed 官方网站推荐的电源适配器。
  - 19V/4.74A 5525 圆形插头电源适配器
  - 确保满足最大功耗需求。
5. AC 电源线兼容性：
  - 根据您的所在地购买适配的 AC 三叶草电源线。
6. 配件兼容性：
  - 仅使用官方推荐的配件（如无线模块、摄像头、外设）以确保最佳性能和兼容性。
:::

## 规格参数

### 载板规格

<table border="1" cellPadding="8" cellSpacing="0">
  <thead>
    <tr>
      <th>类别</th>
      <th>项目</th>
      <th>详情</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowSpan="1">存储</th>
      <td>M.2 KEY M PCIe</td>
      <td>1x M.2 KEY M PCIe（包含 M.2 NVMe 2242 SSD 128G）</td>
    </tr>
    <tr>
      <th rowSpan="3">网络</th>
      <td>M.2 KEY E</td>
      <td>1x M.2 Key E 用于 WiFi/Bluetooth 模块</td>
    </tr>
    <tr>
      <td>M.2 KEY B</td>
      <td>1x M.2 Key B 用于 5G 模块</td>
    </tr>
    <tr>
      <td>以太网</td>
      <td>2x RJ45 千兆以太网</td>
    </tr>
    <tr>
      <th rowSpan="13">I/O</th>
      <td>USB</td>
      <td>6x USB 3.2 Type-A (5Gbps);<br />1x USB 3.0 Type-C (Host/DP 1.4);<br />1x USB 2.0 Type-C (设备模式/调试)</td>
    </tr>
    <tr>
      <td>摄像头</td>
      <td>1x 4 合 1 GMSL2 (mini fakra)（可选板）</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>2x CAN0 (XT30(2+2));<br />3x CAN1 (4-Pin JST Header)</td>
    </tr>
    <tr>
      <td>显示</td>
      <td>1x DP1.4 (Type C Host)</td>
    </tr>
    <tr>
      <td>UART</td>
      <td>1x UART 4-Pin JST Header</td>
    </tr>
    <tr>
      <td>I2C</td>
      <td>2x I2C 4-Pin JST Header</td>
    </tr>
    <tr>
      <td>风扇</td>
      <td>1x 4-Pin 风扇连接器 (5V PWM);<br />1x 4-Pin 风扇连接器 (12V PWM)</td>
    </tr>
    <tr>
      <td>扩展端口</td>
      <td>1x 摄像头扩展头（用于 GMSL2 板）</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC 2 针;<br />1x RTC 插槽</td>
    </tr>
    <tr>
      <td>LED</td>
      <td>3x LED (PWR, ACT 和用户 LED)</td>
    </tr>
    <tr>
      <td>针孔按钮</td>
      <td>1x PWR;<br />1x RESET</td>
    </tr>
    <tr>
      <td>DIP 开关</td>
      <td>1x REC</td>
    </tr>
    <tr>
      <td>天线孔</td>
      <td>5x 天线孔</td>
    </tr>
    <tr>
      <th rowSpan="1">电源</th>
      <td colSpan="2">19-54V XT30(2+2)（包含 XT30 转 5525 DC 插头电缆）</td>
    </tr>
    <tr>
      <th rowSpan="1">Jetpack 版本</th>
      <td colSpan="2">Jetpack 6</td>
    </tr>
    <tr>
      <th rowSpan="3">机械</th>
      <td>尺寸 (宽 x 深 x 高)</td>
      <td>115mm x 115mm x 38mm</td>
    </tr>
    <tr>
      <td>重量</td>
      <td>141g</td>
    </tr>
    <tr>
      <td>安装方式</td>
      <td>桌面、壁挂</td>
    </tr>
    <tr>
      <th rowSpan="1">工作温度</th>
      <td colSpan="2">-20℃~60℃ (25W 模式);<br />-20℃~55℃ (MAXN 模式);<br />(配备 reComputer Robotics 散热片和风扇)</td>
    </tr>
    <tr>
      <th rowSpan="1">保修</th>
      <td colSpan="2">2 年</td>
    </tr>
    <tr>
      <th rowSpan="1">认证</th>
      <td colSpan="2">RoHS, REACH, CE, FCC, UKCA, Telec, KC</td>
    </tr>
  </tbody>
</table>

## 资源
- [reComputer Robotics J401 Carrier Board Bazaar 套件页面](https://www.seeedstudio.com/reComputer-Robotics-Bundle.html)
- [reComputer Robotics J401 Carrier Board 数据手册](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_robotics_J401_datasheet.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时拥有顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>