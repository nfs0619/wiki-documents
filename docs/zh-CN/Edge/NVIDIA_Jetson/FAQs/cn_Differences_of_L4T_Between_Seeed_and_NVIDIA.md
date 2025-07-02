---
description: 描述 Seeed 和 NVIDIA 在 L4T 上的差异
title: Seeed 和 NVIDIA 在 L4T 上的差异
keywords:
- jetson
- BSP
- L4T
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/differences_of_l4t_between_seeed_and_nvidia
last_update:
  date: 05/15/2025
  author: Dayu
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

Seeed 的 Jetson 板级支持包（BSP）基于 NVIDIA 的 Linux for Tegra (L4T) 版本 35.3.1、35.5、36.3、36.4 和 36.4.3，并进行了修改以支持 Seeed 自己的 Jetson 系列产品。以下是 Seeed 的 BSP 和 NVIDIA 官方 BSP 在这些 L4T 版本中的差异。

## L4T 36.4.3

Jetson Linux 36.4.3 是 JetPack 6.2 的一部分。在此版本中，Seeed 的 BSP 包含 NVIDIA 默认 BSP 中没有的多个额外驱动程序和功能，包括：

- 增加对 MCP251X 系列 CAN 总线控制器的支持。
- 增加对 MCP251XFD CAN-FD 控制器的支持。
- 启用了 CRC-CCITT 校验算法（用于 PPP 和类似协议）。
- 增加对通用 Intel Wi-Fi 驱动程序的支持。
- 启用了 Intel Wi-Fi 设备的跟踪支持。
- 启用了 Intel Wi-Fi 的模块化操作模式。
- 增加对 Microchip LAN743x 千兆以太网控制器的支持。
- 启用了 PPP（点对点协议）支持。
- 启用了异步串行链路上的 PPP 支持。
- 增加对 Realtek 88 系列 Wi-Fi 驱动程序的支持。
- 增加对 Realtek 8723D Wi-Fi 芯片的支持。
- 增加对 Realtek 8723DU Wi-Fi 芯片的支持。
- 增加对 Realtek 8723X 系列 Wi-Fi 芯片的支持。
- 增加对通过 USB 使用 Realtek Wi-Fi 设备的支持。
- 增加对 TI 的 TLV320AIC3X 系列音频编解码器驱动程序的支持。
- 增加对 TLV320AIC3X 编解码器的 I²C 接口支持。
- 启用了视频设备的高级调试接口。
- 增加对 MAX9296A GMSL 解串器的支持。
- 增加对 MAX96717 GMSL 解串器的支持。
- 增加对 MAX96724 GMSL 解串器的支持。
- 增加对 Maxim GMSL 聚合器的支持。

## L4T 36.4

Jetson Linux 36.4 是 JetPack 6.1 的一部分。在此版本中，Seeed 的 BSP 相较于 NVIDIA 的 BSP 增加了额外的驱动程序和功能，包括：

- 增加对 MCP251X 系列 CAN 总线控制器的支持。
- 增加对 MCP251XFD CAN-FD 控制器的支持。
- 启用了 CRC-CCITT 校验算法（用于 PPP 和其他协议）。
- 增加对 Intel Wi-Fi MVM 驱动模块的支持。
- 增加对通用 Intel 无线网卡驱动程序的支持。
- 启用了 Intel Wi-Fi 的调试跟踪功能。
- 启用了 Intel Wi-Fi 设备的 LED 指示灯控制。
- 启用了 Microchip LAN743x 千兆以太网控制器驱动程序。
- 启用了 PPP 协议支持。
- 启用了异步串行端口上的 PPP 连接支持。
- 启用了 Realtek 88 系列无线网卡核心驱动程序支持。
- 增加对 Realtek 8723D Wi-Fi 芯片的支持。
- 增加对 Realtek 8723DU Wi-Fi 芯片的支持。
- 增加对 Realtek 8723X 系列 Wi-Fi 芯片的支持。
- 增加对 Realtek RTW88 Wi-Fi 驱动核心模块的支持。
- 增加对通过 USB 使用 RTW88 系列 Wi-Fi 适配器的支持。
- 增加对 PPP 所需压缩库的支持。
- 增加对 CH341 USB 转串口转换芯片的支持。

## L4T 36.3

Jetson Linux 36.3 是 JetPack 6.0 的一部分。在此版本中，Seeed 的 BSP 提供了超出 NVIDIA 的额外驱动程序和功能，包括：

- 增加对 MCP251X 系列 CAN 总线控制器的支持。
- 增加对 MCP251XFD CAN-FD 控制器的支持。
- 启用了 CRC-CCITT 校验算法（用于 PPP 和类似协议）。
- 启用了 I²C ATR（地址转换器）协议支持。
- 增加对通用 Intel 无线网卡驱动程序的支持。
- 启用了 Intel Wi-Fi 的设备调试跟踪支持。
- 增加对 Microchip LAN743x 千兆以太网控制器的支持。
- 增加对 Realtek 88 系列 Wi-Fi 驱动核心模块的支持。
- 增加对 Realtek 8723D Wi-Fi 芯片的支持。
- 增加对 Realtek 8723DU Wi-Fi 芯片的支持。
- 增加对 Realtek 8723X 系列 Wi-Fi 芯片的支持。
- 增加对 TI 的 TLV320AIC3X 音频编解码器驱动程序的支持。
- 增加对 TLV320AIC3X 的 I²C 控制接口支持。
- 增加对 MAX96717 GMSL 解串器的支持。
- 增加对 MAX96724 GMSL 解串器的支持。
- 增加对 MAX9296A GMSL 视频解串器的支持。
- 增加对 Maxim GMSL 聚合器的支持。
- 启用了 TPM 核心支持。
- 增加对 SPI 接口上的 TPM 驱动程序的支持。
- 启用了通过 I²C 接口使用 Infineon TPM 的支持。
- 启用了 SELinux 安全模块。

## L4T 35.5

Jetson Linux 35.5 是 JetPack 5.1.3 的一部分。在此版本中，Seeed 的 BSP 增加了多个驱动程序和功能，并进行了某些配置更改，包括：

- **IMX219 摄像头驱动程序：** Seeed 将此驱动程序编译到内核中，而 NVIDIA 将其作为可加载模块提供。
- **IMX390 摄像头驱动程序：** Seeed 当前禁用了此驱动程序，而 NVIDIA 将其编译到内核中。
- **LAN743x 千兆以太网控制器驱动程序：** Seeed 将其编译到内核中，而 NVIDIA 将其作为可加载模块提供。
- 启用了对 TI DP83867 以太网 PHY（物理层）芯片的支持。
- 增加对 NXP PTN5150 USB Type-C 控制器芯片驱动程序的支持。
- 增加对 Microchip LAN743x 系列千兆以太网芯片驱动程序的支持。
- 启用了 nvmem（非易失性存储器）框架，允许驱动程序访问板载存储（如 EEPROM/NVRAM）。
- 增加对 STPMIC1 电源管理芯片的支持。
- 增加对 TI TPS65090 电源管理芯片的支持。
- 启用了 LM90 温度传感器驱动程序。
- 增加对 NTC 热敏电阻传感器的支持。
- 增加对 TI 的 TLV320AIC3X 系列音频编解码器驱动程序（I²S 接口）的支持。
- 增加对 TLV320AIC3X 的 I²C 控制接口支持。
- 启用了标准化的 USB Type-C 端口控制器接口（TCPCI）支持。
- 增加对 MediaTek MT6370 Type-C 控制器驱动程序的支持。
- 启用了 USB 控制台设备支持（用于通过 OTG 进行串行调试）。
- 启用了 CH341 USB 转串口适配器驱动程序。

## L4T 35.3.1

Jetson Linux 35.3.1 是 JetPack 5.1.1 的一部分。在此版本中，Seeed 的 BSP 增加了额外的驱动程序和功能，并进行了某些修改，包括：

- 启用了 TPM 硬件随机数生成器作为系统熵源之一。
- 启用了 `/sys/kernel/security` 挂载点，以供 SELinux、AppArmor 等使用。
- 启用了核心 TPM 接口支持（SPI/I²C TPM 所需）。
- 添加了通过 SPI 总线访问 TPM 芯片的支持。
- 启用了 TPM 支持的功能，例如安全启动和密钥存储。

## 资源

- [Seeed 的 L4T 源代码](https://github.com/Seeed-Studio/Linux_for_Tegra)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>