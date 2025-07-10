---
description: 本教程将指导您如何在本地部署 Watcher 的 AI 服务，而无需依赖 SenseCraft 服务，从而使用 Watcher。
title: 本地部署 Watcher 的 AI 功能
image: https://files.seeedstudio.com/wiki/watcher_getting_started/watcherAI.png
slug: /cn/watcher_local_deploy
last_update:
  date: 05/15/2025
  author: Citric
sidebar_position: 3
---

# 本地部署 Watcher 的 AI 功能

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/87.png" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE">
            <strong><span><font color={'FFFFFF'} size={"4"}> Watcher 视频</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher">
            <strong><span><font color={'FFFFFF'} size={"4"}> Github 仓库</font></span></strong>
    </a>
</div><br />

SenseCAP Watcher 是一款 AI 监控设备，帮助您监控空间内的异常情况并采取相应措施。虽然 Watcher 可以利用 SenseCraft 的 AI 服务，但它也提供了在您自己的设备上本地部署 AI 功能的选项，从而为您提供更大的控制权、隐私性和灵活性。

在本综合指南中，我们将逐步引导您在本地设备上设置和部署 Watcher 的 AI 服务。无论您使用的是 Windows PC、MacOS 设备，还是 NVIDIA® Jetson AGX Orin，我们都会提供详细的操作步骤，帮助您在自己的环境中充分利用 Watcher 的 AI 功能。

在本指南中，我们将涵盖必要的软件和硬件准备工作、每个平台的部署过程，以及如何有效利用 Watcher 的本地 AI 服务来解锁新可能性并提升您的生产力。通过本指南的学习，您将全面了解如何在自己的设备上利用 Watcher 的 AI 功能，从而创建智能化、个性化的解决方案，以满足您的需求。

## 软件准备

要使用 Watcher 的本地部署功能，用户需要首先下载必要的软件。软件包包括 Watcher 应用程序和设备 AI 服务组件，这些组件使用户能够设置和配置本地 AI 服务。

用户可以通过以下下载链接获取 Watcher 应用程序：

- **Windows** 用户：

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://staticfiles.sensecraft.ai/watcher_service_latest.exe">
            <strong><span><font color={'FFFFFF'} size={"4"}> Windows 版本 🖱️</font></span></strong>
    </a>
</div>

- **macOS** 用户： 

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://staticfiles.sensecraft.ai/watcher_service_latest.dmg">
            <strong><span><font color={'FFFFFF'} size={"4"}> macOS 版本 🖱️</font></span></strong>
    </a>
</div>

- **Linux** 用户： 

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://staticfiles.sensecraft.ai/watcher_service_arm64_latest.deb">
            <strong><span><font color={'FFFFFF'} size={"4"}> Linux 版本 🖱️</font></span></strong>
    </a>
</div><br />

请根据您的操作系统选择合适的下载链接。Watcher 应用程序兼容 Windows、macOS 和主流 Linux 发行版，确保在不同平台上的无缝体验。

## 硬件准备

为了确保在本地部署 Watcher 的 AI 功能时获得流畅和最佳的体验，您的设备必须满足最低硬件要求。这些要求因操作系统而异。以下是每个平台的硬件要求：

<div class="table-center">
  <table align="center">
    <tr>
      <th></th>
      <th>Windows</th>
      <th>Mac</th>
      <th>Linux (arm64)</th>
    </tr>
    <tr>
      <th>显卡（推荐配置）</th>
      <td align="center">GeForce RTX2070</td>
      <td align="center">Apple M1 16 GB</td>
      <td align="center">GeForce RTX2070</td>
    </tr>
    <tr>
      <th>内存（最低配置）</th>
      <td align="center">8 GB</td>
      <td align="center">16 GB</td>
      <td align="center">8 GB</td>
    </tr>
    <tr>
      <th>存储空间（最低配置）</th>
      <td align="center">20 GB</td>
      <td align="center">20 GB</td>
      <td align="center">20 GB</td>
    </tr>
  </table>
</div>

需要注意的是，这些是最低要求，拥有更高的硬件规格可以显著提升 Watcher AI 服务的性能和响应速度。如果您计划同时部署多个 AI 服务或处理大量数据，我们建议使用具有更高级硬件配置的设备。

### 性能注意事项

Watcher 本地部署的 AI 服务性能可能会因设备硬件规格而异。以下是一些通用的性能指南：

- **内存（RAM）**：更大的内存容量可以实现更流畅的多任务处理，并能够处理更复杂的 AI 模型和更大的数据集。
- **显卡**：像 RTX2070 这样的独立显卡可以极大地加速 AI 计算，尤其是涉及计算机视觉和深度学习的任务。
- **存储空间**：充足的存储空间对于存储 AI 模型、数据集和生成的输出至关重要。推荐的 20 GB 存储空间可以确保 Watcher AI 服务有足够的空间运行。

在本地部署 Watcher 的 AI 服务时，务必考虑您的具体使用场景以及您计划使用的 AI 模型的复杂性。如果您需要实时处理或计划处理资源密集型任务，建议选择更高端的硬件配置以确保最佳性能。

通过满足硬件要求并考虑上述性能因素，您可以确保在本地设备上顺利高效地部署 Watcher 的 AI 功能。

### 设备基准测试

以下是我们在一些设备上部署 AI 服务后的响应时间表。

<div class="table-center">
  <table align="center">
    <tr>
      <th>设备</th>
      <th>Windows 10 32GB 配备 GeForce RTX4060 显卡</th>
      <th>Windows 10 16GB 无显卡</th>
      <th>Mac Mini M1 (16 GB)</th>
      <th>NVIDIA® Jetson AGX Orin 32GB</th>
    </tr>
    <tr>
      <th>任务分析时间</th>
      <td align="center">5秒</td>
      <td align="center">17分14秒</td>
      <td align="center">36秒</td>
      <td align="center">18秒</td>
    </tr>
    <tr>
      <th>图像分析时间</th>
      <td align="center">4秒</td>
      <td align="center">4分10秒</td>
      <td align="center">8秒</td>
      <td align="center">7秒</td>
    </tr>
  </table>
</div>

在比较 NVIDIA Jetson AGX 系列产品与 RTX 4090 等消费级显卡在 AI 相关任务中的表现时，Jetson AGX 系列具有以下几个关键优势：

1. **工业级可靠性**：Jetson AGX 系列产品专为工业和商业应用设计，具有更长的平均无故障时间（MTBF）。它们能够连续 24/7 不间断运行，而不会出现问题。相比之下，像 RTX 4090 这样的消费级显卡并非为如此高强度的全天候运行设计，可能无法提供相同级别的可靠性。

2. **紧凑的尺寸和低功耗**：Jetson AGX 系列产品专为嵌入式和边缘计算应用设计，具有更小的外形尺寸和更低的功耗。与高端消费级显卡相比，这使得它们更适合部署在空间受限的环境中，并降低整体运营成本。较低的功耗还意味着更少的热量产生，这对于嵌入式系统至关重要，有助于减少冷却需求。

此外，Jetson AGX 系列提供了针对 AI 工作负载优化的全面软件栈，使开发人员能够更轻松地创建和部署 AI 应用程序。工业级可靠性、紧凑尺寸、低功耗以及优化的软件栈的结合，使得 Jetson AGX 系列在 AI 相关项目和应用中，尤其是与 RTX 4090 等消费级显卡相比，成为一个极具吸引力的选择。

## 在 Windows 上部署

要在 Windows 设备上部署 Watcher 的 AI 功能，请按照以下简单步骤操作。

**步骤 1**. 在计算机的下载文件夹或指定位置找到已下载的 `.exe` 文件。双击 `.exe` 文件以启动安装过程。安装向导将引导您完成设置过程。在安装过程中，您无需进行任何额外的选择或配置。

**步骤 2**. 安装完成后，启动 Watcher 应用程序。首次启动应用程序时，系统会提示您选择要使用的 AI 模型。Watcher 提供了两个选项。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/88.png" style={{width:800, height:'auto'}}/></div>

1. **Llama 3.1 + LLaVA**：如果选择此选项，Watcher 将自动开始下载所需的 AI 模型和相关文件。这些额外的下载可能需要一些时间，因为文件大小可能约为 **10 GB**。在模型下载过程中，请确保您的互联网连接稳定且快速，以避免任何中断或下载不完整的情况。

2. **OpenAI**：如果您更倾向于使用 OpenAI 的模型，则需要提前准备好您的 OpenAI API 密钥。确保您拥有有效的 API 密钥以及足够的额度来使用 OpenAI 模型。当系统提示时，输入您的 API 密钥以配置 Watcher 使用 OpenAI 的服务。

选择最适合您需求和资源的选项。如果您有充足的存储空间和可靠的互联网连接，Llama 3.1 + LLaVA 选项提供了一个自包含的解决方案。如果您更喜欢 OpenAI 模型的灵活性和强大功能，并且已准备好 API 密钥，请选择 OpenAI 选项。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/96.png" style={{width:800, height:'auto'}}/></div>

一旦模型文件下载并安装完成，Watcher 就可以在您的 Windows 设备上使用了。

## 在 macOS 上部署

要在 macOS 设备上部署 Watcher 的 AI 功能，请按照以下步骤操作。

**步骤 1**. 在计算机的下载文件夹或指定位置找到已下载的 `.dmg` 文件。双击 `.dmg` 文件以打开它。一个新窗口将出现，显示安装包的内容。

**步骤 2**. 在新窗口中，您将看到 Watcher 应用程序图标和一个指向 Applications 文件夹的别名。点击并拖动 Watcher 应用程序图标到窗口中的 Applications 文件夹别名上。此操作会将 Watcher 应用程序复制到计算机的 Applications 文件夹中。一旦复制过程完成，您可以关闭 `.dmg` 窗口。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/89.png" style={{width:600, height:'auto'}}/></div>

**步骤 3**. 首次启动应用程序时，Watcher 将自动开始下载所需的 AI 模型和相关文件。这些额外的下载可能需要一些时间，因为文件大小可能约为 10 GB。在模型下载过程中，请确保您的互联网连接稳定且快速，以避免任何中断或下载不完整的情况。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/90.png" style={{width:800, height:'auto'}}/></div>

1. **Llama 3.1 + LLaVA**：如果选择此选项，Watcher 将自动开始下载所需的 AI 模型和相关文件。这些额外的下载可能需要一些时间，因为文件大小可能约为 **10 GB**。在模型下载过程中，请确保您的互联网连接稳定且快速，以避免任何中断或下载不完整的情况。

2. OpenAI：如果您更倾向于使用 OpenAI 的模型，您需要提前准备好您的 OpenAI API 密钥。确保您拥有有效的 API 密钥以及足够的额度来使用 OpenAI 模型。当系统提示时，输入您的 API 密钥以配置 Watcher 使用 OpenAI 的服务。

选择最适合您需求和资源的选项。如果您有充足的存储空间和可靠的互联网连接，Llama 3.1 + LLaVA 选项提供了一个自包含的解决方案。如果您更喜欢 OpenAI 模型的灵活性和强大功能，并且已经准备好 API 密钥，请选择 OpenAI 选项。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/96.png" style={{width:800, height:'auto'}}/></div>

一旦模型文件下载并安装完成，Watcher 就可以在您的 macOS 设备上使用了。

## 在 NVIDIA® Jetson AGX Orin / Linux 上部署

要在 NVIDIA® Jetson AGX Orin 或 Linux 设备上部署 Watcher 的 AI 功能，请按照以下步骤操作。

**步骤 1**. 在您的 Jetson AGX Orin 或 Linux 设备上打开一个终端窗口。

**步骤 2**. 使用 `cd` 命令导航到下载的 `.deb` 文件所在的目录。运行以下命令安装 Watcher。

```
sudo dpkg -i watcher_service_x.x.x_arm64.deb
```

将 `watcher_service_x.x.x_arm64.deb` 替换为实际下载的 `.deb` 文件的名称。安装过程将开始。系统可能会提示您输入系统密码以授权安装。等待安装完成。终端将显示进度和任何附加信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/91.png" style={{width:800, height:'auto'}}/></div>

**步骤 3**. 安装完成后，您可以通过在终端中输入 `watcher` 或在应用程序启动器中找到它来启动 Watcher。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/92.png" style={{width:800, height:'auto'}}/></div>

1. Llama 3.1 + LLaVA：如果您选择此选项，Watcher 将自动开始下载所需的 AI 模型和相关文件。这些额外的下载可能需要一些时间，因为它们的大小可能达到 **10 GB**。在模型下载过程中，请确保您拥有稳定且快速的互联网连接，以避免任何中断或下载不完整的情况。

2. OpenAI：如果您更倾向于使用 OpenAI 的模型，您需要提前准备好您的 OpenAI API 密钥。确保您拥有有效的 API 密钥以及足够的额度来使用 OpenAI 模型。当系统提示时，输入您的 API 密钥以配置 Watcher 使用 OpenAI 的服务。

选择最适合您需求和资源的选项。如果您有充足的存储空间和可靠的互联网连接，Llama 3.1 + LLaVA 选项提供了一个自包含的解决方案。如果您更喜欢 OpenAI 模型的灵活性和强大功能，并且已经准备好 API 密钥，请选择 OpenAI 选项。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/96.png" style={{width:800, height:'auto'}}/></div>

与 Windows 和 macOS 安装类似，Watcher 将自动开始下载所需的 AI 模型和相关文件。

## 在 SenseCraft APP 中配置本地 AI 服务的使用

要在 SenseCraft APP 中使用 Watcher 提供的本地 AI 服务，请按照以下简要步骤操作：

**步骤 1**. 在您的设备上打开 Watcher APP，然后点击左中部的 **CLICK TO START SERVICE** 按钮。等待按钮变为 **SERVICE IS STARTED**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/94.png" style={{width:800, height:'auto'}}/></div>

**步骤 2**. 在 SenseCraft APP 中，导航到 Watcher 界面并点击右上角的设置按钮。从设置菜单中选择 **Device AI Service**。

**步骤 3**. 从 Watcher APP 的主屏幕复制 URL 和 Token。

**步骤 4**. 将 URL 和 Token 粘贴到 SenseCraft APP 中 **Device AI Service** 设置的相应字段中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/93.png" style={{width:250, height:'auto'}}/></div><br />

**步骤 5**. 您现在可以通过 SenseCraft APP 向 Watcher 分配任务，Watcher 将使用其本地部署的 AI 功能处理这些任务。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/95.png" style={{width:800, height:'auto'}}/></div>

:::caution
请注意，确保您的计算机符合 **[硬件准备](#hardware-preparation)** 中推荐的计算机配置。如果低于推荐配置，您可能无法及时收到识别结果和警报消息，因为您的计算机可能正在全力分析某张图片，此时 Watcher 将显示为持续观察状态。
:::

通过完成这些步骤，您可以直接在设备上利用 Watcher 的 AI 服务，确保增强的隐私性以及方便地定制您自己的集成系统。通过本地运行的 Watcher AI 功能，您可以安全高效地执行高级任务、分析和自动化操作，同时保持对数据的控制。

我们将在应用程序目录中继续添加使用 **[HTTP 消息块](https://wiki.seeedstudio.com/cn/integrate_watcher_to_ha/#%E7%AC%AC%E5%85%AD%E6%AD%A5%E8%AE%BE%E7%BD%AE%E4%BB%BB%E5%8A%A1%E5%B9%B6%E9%85%8D%E7%BD%AE-http-%E6%B6%88%E6%81%AF%E5%9D%97)** 进行消息推送的教程，敬请期待！

## 常见问题解答

### SenseCap Watcher 服务无法工作

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/faq1.png" style={{width:800, height:'auto'}}/></div>

服务主机的 IP 应该是您的计算机 IP 地址，如果不是，SenseCAP Watcher 服务将无法工作。您需要按照以下步骤修复：

1. 按 Win + R > 输入 "ncpa.cpl" > 回车。

2. 右键单击“Wi-Fi”或“以太网” > 选择“属性”。

3. 双击 IPv4 或 IPv6 > 点击“高级”。

4. 取消勾选“自动跃点数” > 输入 1（或您期望的数字） > 点击“确定”。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/faq2.png" style={{width:800, height:'auto'}}/></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时能够获得顺畅的体验。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>