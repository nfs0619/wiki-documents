---
description: 如何设置 API 密钥
title: 如何设置 API 密钥
keywords:
- 开始使用 SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Sensor/SenseCAP/SenseCAP_Indicator/Set_An_API_Key
last_update:
  date: 05/15/2025
  author: Thomas
sidebar_position: 4
---

# **如何设置 API 密钥**

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

:::caution 地理限制
**注意**：OpenAI API 服务可能在某些国家不可用，例如中国、伊朗和俄罗斯。请参考 [支持的国家和地区列表](https://platform.openai.com/docs/supported-countries) 了解更多信息。

确保您的网络环境允许连接到 OpenAI API。
:::

### 获取 API 密钥

- **步骤 1：** 登录 https://platform.openai.com/signup  
  如果您还没有账户，需要注册一个。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/login.png"/></div>

- **步骤 2：** 访问您的 [OpenAI 密钥页面](https://platform.openai.com/account/api-keys) 或点击菜单项 "View API keys"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/key1.png"/></div>

- **步骤 3：** 点击 "Create new secret key" 按钮创建一个新的密钥。参考下图。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/newkey.png"/></div>

> **速率限制：**  
> OpenAI 对您可以向 API 发出的请求施加速率限制。这些限制基于每分钟的请求数、每分钟的令牌数，或者对于图像模型来说，是每分钟的图像数。
>
> 在 [速率限制文档](https://platform.openai.com/docs/guides/rate-limits/overview) 中了解更多信息，或者参考您的模型的 [默认速率限制](https://platform.openai.com/docs/guides/rate-limits/what-are-the-rate-limits-for-our-api)。

### 设置密钥

- **步骤 4：** 通过 **串口** 连接到 Indicator（这里使用 Arduino IDE 提供的串口监视器工具）。

选择板子和端口。

- **板子**：Seeed INDICATOR RP2040  
- **端口**：usbserial 端口

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/chooseboard.png"/></div>

- **步骤 5：** 打开端口监视器。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/monitor.png"/></div>

- **步骤 6：** 向设备发送以下命令以设置 API 密钥：

```sh
openai_api -k {sk-your apikey}
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/setkey.png"/></div>

您会看到日志显示："`openai_api_key read successful`"，然后您就设置完成了。现在开始您的 AI 之旅吧！

# **技术支持**
**需要帮助解决您的 SenseCAP Indicator 问题？我们随时为您提供支持！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>