---
description: 在 reTerminal 上安装 Mender 客户端
title: 在 reTerminal 上安装 Mender 客户端
keywords:
  - 边缘
  - reTerminal 应用
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Mender-Client-reTerminal
last_update:
  date: 05/15/2025
  author: jianjing Huang
---

# 在 reTerminal 上安装 Mender 客户端

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

我们可以在 reTerminal 上设置 Mender 客户端，然后从托管或自托管的 Mender 服务器接收 OTA 更新。

本指南重点介绍使用通过 Yocto 项目编译的自定义 Linux 系统运行的 reTerminal。

## 测试结果

下表中的 Yocto 项目版本已由 Mender 社区测试。如果您在其他 [Yocto 项目版本](https://wiki.yoctoproject.org/wiki/Releases?target=_blank) 上测试了此集成，请更新表格：

| Yocto 项目 | 构建 | 运行时 |
|---|---|---|
| dunfell (3.1 / 5.3.0) | 测试通过 | 测试通过 |

**构建** 表示使用此 Mender 集成的 Yocto 项目构建完成且无错误，并输出镜像。  
**运行时** 表示已验证 Mender 在板上正常工作。对于基于 U-Boot 的板，已验证 [集成检查表](https://docs.mender.io/devices/integrating-with-u-boot/integration-checklist?target=_blank)。

## 前置条件

- 在您的工作站/笔记本电脑上安装支持的 Linux 发行版和依赖项，如 [Yocto Mega Manual](https://www.yoctoproject.org/docs/current/mega-manual/mega-manual.html#detailed-supported-distros) 中所述
  - 注意：具体说明取决于您打算使用的 Yocto 版本。
- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html)

## 配置构建

### 设置 Yocto 环境

创建一个目录以存放 `mender-reterminal` 设置，并克隆元信息。

```
mkdir mender-reterminal && cd mender-reterminal
```

获取所有必要的层：

```
git clone -b master git://git.yoctoproject.org/poky layers/poky
git clone -b dunfell https://github.com/Seeed-Studio/meta-seeed-cm4.git layers/meta-seeed-cm4
git clone -b master git://git.yoctoproject.org/meta-raspberrypi layers/meta-raspberrypi
git clone -b dunfell https://github.com/meta-qt5/meta-qt5.git layers/meta-qt5
git clone -b dunfell https://github.com/openembedded/meta-openembedded.git layers/meta-openembedded
git clone -b dunfell git://github.com/mendersoftware/meta-mender layers/meta-mender
```

为了与 meta-raspberrypi 兼容，将 poky 的 gstreamer 版本更改为最新版本：

```
cd layers/poky
cp -r meta/recipes-multimedia/gstreamer/ ../
git checkout dunfell
rm -r meta/recipes-multimedia/gstreamer/
cp -r ../gstreamer/ meta/recipes-multimedia/
rm -r ../gstreamer/
```

修改 meta-raspberrypi 以避免编译错误：

```
cd layers/meta-raspberrypi
rm dynamic-layers/meta-python/recipes-connectivity/lirc/*.bbappend
sed -i '/^LAYERSERIES_COMPAT_raspberrypi/s/= .*$/= "honister dunfell"/g' conf/layer.conf
sed -i 's/arm\/armv8a\///g' conf/machine/raspberrypi4-64.conf
```

修改 meta-mender 以避免编译错误：

```
cd layers/meta-mender
rm meta-mender-raspberrypi/recipes-kernel/linux/linux-raspberrypi-rt_%.bbappend
sed -i 's/"0x4000"/"0x1f000"/g' meta-mender-raspberrypi/recipes-bsp/u-boot/u-boot-raspberrypi.inc
sed -i 's/bootfiles/rpi-bootfiles/g' meta-mender-core/classes/mender-part-images.bbclass
```

修改 meta-seeed-cm4 以避免编译错误：

```
cd layers/meta-seeed-cm4
sed -i 's/eudev/udev/g' recipes-lvgl/lvgl/lvgl_demo_git.bb
```

### 设置构建环境

初始化构建环境：

```
source layers/poky/oe-init-build-env 
```

添加 Yocto 项目层：

```
bitbake-layers add-layer ../layers/meta-raspberrypi
bitbake-layers add-layer ../layers/meta-seeed-cm4
bitbake-layers add-layer ../layers/meta-qt5
bitbake-layers add-layer ../layers/meta-openembedded/meta-oe
bitbake-layers add-layer ../layers/meta-openembedded/meta-python
bitbake-layers add-layer ../layers/meta-mender/meta-mender-core
bitbake-layers add-layer ../layers/meta-mender/meta-mender-raspberrypi
bitbake-layers add-layer ../layers/meta-mender/meta-mender-demo
```

### 配置 Mender 服务器 URL（可选）

此部分不是成功构建所必需的，但默认生成的镜像仅适用于 [独立部署](https://docs.mender.io/architecture/standalone-deployments?target=_blank) 中的 Mender 客户端，因为缺少服务器配置。

您可以编辑 `conf/local.conf` 文件以提供您的 Mender 服务器配置，确保生成的镜像和 Mender Artifacts 连接到您正在使用的 Mender 服务器。在生成的 `conf/local.conf` 文件中应该已经有一个注释部分，您可以简单地取消注释相关配置选项并为其分配适当的值。

为托管 Mender 构建：

```
# 获取您的租户令牌：
#    - 登录 https://hosted.mender.io
#    - 点击右上角的您的邮箱，然后选择“我的组织”
#    - 点击“复制到剪贴板”
#    - 将剪贴板内容分配给 MENDER_TENANT_TOKEN
#
MENDER_SERVER_URL = "https://hosted.mender.io"
MENDER_TENANT_TOKEN = "<复制令牌到此处>"
```

为 Mender 演示服务器构建：

```
# https://docs.mender.io/administration/demo-installation
#
MENDER_DEMO_HOST_IP_ADDRESS = "<Mender 演示服务器的 IP 地址>"
```

为 Mender 生产/自托管（本地）构建：

```
# https://docs.mender.io/3.1/system-updates-yocto-project/build-for-production
#
# 取消注释以下内容并更新 URL 以匹配您配置的域名，并提供生成的 server.crt 文件的路径。
#
# 请注意，仅当您使用自签名证书时才需要自定义 server.crt 文件。
#
# 注意！建议您在自定义 Yocto 层中提供以下信息，这仅用于演示目的。有关更多信息，请参阅链接文档。
MENDER_SERVER_URL = "<自托管 Mender 服务器的 URL>"
FILESEXTRAPATHS_prepend_pn-mender-client := "<包含 server.crt 的目录>:"
SRC_URI_append_pn-mender-client = " file://server.crt"
```

## 构建镜像

现在可以开始构建镜像：

```
MACHINE="seeed-reterminal-mender" bitbake rpi-test-image
```

将 `rpi-test-image` 替换为您想要的镜像目标。

## 使用构建输出

构建成功后，生成的镜像和构建工件位于：

- `build/tmp/deploy/images/seeed-reterminal-mender/rpi-test-image-seeed-reterminal-mender.sdimg.bz2`

如果您的设备上已经运行了 Mender，并希望使用此构建部署 rootfs 更新，则应使用 [Mender Artifact](https://docs.mender.io/architecture/mender-artifacts?target=_blank) 文件，这些文件具有 `.mender` 后缀。您可以通过 Mender 服务器的托管模式（在服务器 UI 的 Releases 中上传）或仅使用 Mender 客户端的[独立部署](https://docs.mender.io/architecture/standalone-deployments?target=_blank)来部署此 Artifact。

## 刷写说明

请参考[此 Wiki 指南](https://wiki.seeedstudio.com/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc)了解如何将上述镜像刷写到 reTerminal 的 eMMC 上。

刷写完成后，当您打开 reTerminal 时，它将从编译的镜像启动。

## 启动成功

如果您从 UART 中看到以下日志，则表示系统已成功启动：

```
[  OK  ] Started Kernel Logging Service.
[  OK  ] Started System Logging Service.
[  OK  ] Started D-Bus System Message Bus.
[  OK  ] Started Getty on tty1.
         Starting Telephony service...
[  OK  ] Started Serial Getty on ttyS0.
[  OK  ] Reached target Login Prompts.
[    7.340436] audit: type=1334 audit(1638186061.687:4): prog-id=7 op=LOAD
[    7.347278] audit: type=1334 audit(1638186061.691:5): prog-id=8 op=LOAD
         Starting Login Service...
[  OK  ] Started Save/Restore Sound Card State.
[    7.386306] Bluetooth: Core ver 2.22
[    7.390103] NET: Registered protocol family 31
[    7.394856] Bluetooth: HCI device and connection manager initialized
[[    7.401967] Bluetooth: HCI socket layer initialized
  OK      7.407591] Bluetooth: L2CAP socket layer initialized
0m] Reac[    7.413409] Bluetooth: SCO socket layer initialized
hed target Sound Card.
[  OK  ] Started Telephony service.
[  OK  ] Started Avahi mDNS/DNS-SD Stack.
[  OK  ] Started Login Service.

Poky (Yocto Project Reference Distro) 3.1.12 seeed-reterminal-mender ttyS0

seeed-reterminal-mender login: root
root@seeed-reterminal-mender:~#
```

## 资源

- **[网页]** [Mender 官方文档](https://docs.mender.io)

- **[网页]** [Yocto 官方文档](https://docs.yoctoproject.org)

- **[网页]** [Raspberry Pi CM4 官方文档](https://www.raspberrypi.com/documentation/computers/compute-module.html)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>