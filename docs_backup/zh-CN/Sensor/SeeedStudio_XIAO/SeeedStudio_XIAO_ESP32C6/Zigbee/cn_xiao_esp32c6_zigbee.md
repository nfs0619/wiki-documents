---
description: 在本教程中，我们将探索使用 XIAO ESP32C6 开发板进行 Zigbee 应用开发的过程。XIAO ESP32C6 是一款紧凑而强大的开发板，搭载 ESP32-C6 芯片，集成了 Wi-Fi 和蓝牙低功耗（BLE）连接功能。通过利用 ESP Zigbee SDK，我们可以充分发挥 XIAO ESP32C6 的潜力，并扩展其功能以支持 Zigbee。
title: XIAO ESP32C6 Zigbee 快速入门指南 (ESP-IDF)
image: https://files.seeedstudio.com/wiki/xiaoc6_zigbee/3.jpg
slug: /cn/xiao_esp32c6_zigbee
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

Zigbee 是一种被广泛采用的无线通信协议，在家庭自动化、智能能源管理和物联网（IoT）应用中得到了广泛应用。Zigbee 以其低功耗、可靠的数据传输和网状网络功能而闻名，是构建可扩展高效无线网络的绝佳选择。

在本教程中，我们将探索使用 XIAO ESP32C6 开发板进行 Zigbee 应用开发的过程。XIAO ESP32C6 是一款紧凑而强大的开发板，搭载 ESP32-C6 芯片，集成了 Wi-Fi 和蓝牙低功耗（BLE）连接功能。通过利用 ESP Zigbee SDK，我们可以充分发挥 XIAO ESP32C6 的潜力，并扩展其功能以支持 Zigbee。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/0.png" style={{width:800, height:'auto'}}/></div>

为了深入了解 Zigbee 开发，我们将重点研究 ESP Zigbee SDK 提供的两个示例程序：HA_on_off_light 和 HA_on_off_switch。这些示例分别展示了 Zigbee 灯设备和 Zigbee 开关设备的实现。通过深入分析这些示例的代码结构、数据模型和工作原理，我们将全面了解 Zigbee 设备开发。

在整个教程中，我们将涵盖以下关键内容：

1. 为 XIAO ESP32C6 和 ESP Zigbee SDK 设置开发环境。
2. 分析 HA_on_off_light 和 HA_on_off_switch 示例的代码结构和组织。
3. 理解 Zigbee 设备数据模型及其在代码中的定义方式。
4. 探索 Zigbee 设备的初始化过程和事件处理机制。
5. 检查 Zigbee 设备之间的通信模式和消息交换。

通过本教程的学习，您将掌握使用 XIAO ESP32C6 和 ESP Zigbee SDK 进行 Zigbee 开发的坚实基础。凭借这些知识和实践技能，您将能够创建自己的基于 Zigbee 的项目，并为不断增长的 Zigbee 设备生态系统做出贡献。

那么，让我们开始这段使用 XIAO ESP32C6 进行 Zigbee 开发的激动人心的旅程，解锁这一强大无线通信协议的全部潜力吧！

## 硬件准备

在本教程中，我们将使用 **两块** XIAO ESP32C6 作为示例来讲解 Zigbee。您可以通过以下链接购买。一块作为 Zigbee 终端设备（End Device），另一块作为 Zigbee 协调器（Coordinator）。

<div class="table-center">
	<table>
		<tr>
			<th>Seeed Studio XIAO ESP32C6</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html
        ">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## 环境准备与演示

在本节中，我们将指导您配置开发环境并上传示例中的两个程序。

### 步骤 1. 准备 ESP-IDF 环境

要使用 Zigbee SDK，建议使用 Espressif 的 ESP-IDF 开发框架。ESP-IDF 的安装和环境配置在 Espressif 官方网站上提供了针对不同系统的详细安装过程，您可以通过以下按钮跳转阅读。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://docs.espressif.com/projects/esp-idf/en/v5.1.3/esp32h2/get-started/index.html#installation">
            <strong><span><font color={'FFFFFF'} size={"4"}> 前往页面 🖱️</font></span></strong>
    </a>
</div>

如果您使用的是 Ubuntu 系统，大致需要在终端中执行以下命令：

```
git clone --recursive https://github.com/espressif/esp-idf.git
cd esp-idf
git checkout v5.1.3
git submodule update --init --recursive
./install.sh
source ./export.sh
cd ..
```

:::tip
Espressif 推荐使用 **ESP-IDF v5.1.3** 进行 Zigbee 开发，这是本教程验证过的版本。
:::

### 步骤 2. 下载 Zigbee SDK

克隆 esp-zigbee-sdk：

```
git clone https://github.com/espressif/esp-zigbee-sdk.git
cd esp-zigbee-sdk/examples/esp_zigbee_HA_sample
```

### 步骤 3. 编写 HA_on_off_light 程序

让我们准备第一块 XIAO ESP32C6。我们将为其编写并烧录终端设备（End Device）程序。

```
cd HA_on_off_light/main
```

由于示例程序中使用 GPIO8 作为 LED，但 XIAO 上的 LED 是 GPIO15，因此我们需要对示例程序进行一些简单的修改以展示效果。

需要修改的程序位于 `main` 文件夹中的 `esp_zb_light.c` 文件。修改后的完整代码如下：

```cpp
#include "esp_zb_light.h"
#include "esp_check.h"
#include "esp_log.h"
#include "nvs_flash.h"
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "ha/esp_zigbee_ha_standard.h"
#include "driver/gpio.h"

#if !defined ZB_ED_ROLE
#error Define ZB_ED_ROLE in idf.py menuconfig to compile light (End Device) source code.
#endif

static const char *TAG = "ESP_ZB_ON_OFF_LIGHT";
#define BLINK_GPIO 15
/********************* Define functions **************************/
static esp_err_t deferred_driver_init(void)
{
    light_driver_init(LIGHT_DEFAULT_OFF);
    return ESP_OK;
}

static void configure_led(void)
{
    ESP_LOGI(TAG, "Example configured to blink GPIO LED!");
    gpio_reset_pin(BLINK_GPIO);
    /* Set the GPIO as a push/pull output */
    gpio_set_direction(BLINK_GPIO, GPIO_MODE_OUTPUT);
}

static void bdb_start_top_level_commissioning_cb(uint8_t mode_mask)
{
    ESP_RETURN_ON_FALSE(esp_zb_bdb_start_top_level_commissioning(mode_mask) == ESP_OK, , TAG, "Failed to start Zigbee commissioning");
}

void esp_zb_app_signal_handler(esp_zb_app_signal_t *signal_struct)
{
    uint32_t *p_sg_p       = signal_struct->p_app_signal;
    esp_err_t err_status = signal_struct->esp_err_status;
    esp_zb_app_signal_type_t sig_type = *p_sg_p;
    switch (sig_type) {
    case ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP:
        ESP_LOGI(TAG, "Initialize Zigbee stack");
        esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_INITIALIZATION);
        break;
    case ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START:
    case ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT:
        if (err_status == ESP_OK) {
            ESP_LOGI(TAG, "Deferred driver initialization %s", deferred_driver_init() ? "failed" : "successful");
            ESP_LOGI(TAG, "Device started up in %s factory-reset mode", esp_zb_bdb_is_factory_new() ? "" : "non");
            if (esp_zb_bdb_is_factory_new()) {
                ESP_LOGI(TAG, "Start network steering");
                esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_STEERING);
            } else {
                ESP_LOGI(TAG, "Device rebooted");
            }
        } else {
            /* commissioning failed */
            ESP_LOGW(TAG, "Failed to initialize Zigbee stack (status: %s)", esp_err_to_name(err_status));
        }
        break;
    case ESP_ZB_BDB_SIGNAL_STEERING:
        if (err_status == ESP_OK) {
            esp_zb_ieee_addr_t extended_pan_id;
            esp_zb_get_extended_pan_id(extended_pan_id);
            ESP_LOGI(TAG, "Joined network successfully (Extended PAN ID: %02x:%02x:%02x:%02x:%02x:%02x:%02x:%02x, PAN ID: 0x%04hx, Channel:%d, Short Address: 0x%04hx)",
                     extended_pan_id[7], extended_pan_id[6], extended_pan_id[5], extended_pan_id[4],
                     extended_pan_id[3], extended_pan_id[2], extended_pan_id[1], extended_pan_id[0],
                     esp_zb_get_pan_id(), esp_zb_get_current_channel(), esp_zb_get_short_address());
        } else {
            ESP_LOGI(TAG, "Network steering was not successful (status: %s)", esp_err_to_name(err_status));
            esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb, ESP_ZB_BDB_MODE_NETWORK_STEERING, 1000);
        }
        break;
    default:
        ESP_LOGI(TAG, "ZDO signal: %s (0x%x), status: %s", esp_zb_zdo_signal_to_string(sig_type), sig_type,
                 esp_err_to_name(err_status));
        break;
    }
}

static esp_err_t zb_attribute_handler(const esp_zb_zcl_set_attr_value_message_t *message)
{
    esp_err_t ret = ESP_OK;
    bool light_state = 0;

    ESP_RETURN_ON_FALSE(message, ESP_FAIL, TAG, "Empty message");
    ESP_RETURN_ON_FALSE(message->info.status == ESP_ZB_ZCL_STATUS_SUCCESS, ESP_ERR_INVALID_ARG, TAG, "Received message: error status(%d)",
                        message->info.status);
    ESP_LOGI(TAG, "Received message: endpoint(%d), cluster(0x%x), attribute(0x%x), data size(%d)", message->info.dst_endpoint, message->info.cluster,
             message->attribute.id, message->attribute.data.size);
    if (message->info.dst_endpoint == HA_ESP_LIGHT_ENDPOINT) {
        if (message->info.cluster == ESP_ZB_ZCL_CLUSTER_ID_ON_OFF) {
            if (message->attribute.id == ESP_ZB_ZCL_ATTR_ON_OFF_ON_OFF_ID && message->attribute.data.type == ESP_ZB_ZCL_ATTR_TYPE_BOOL) {
                light_state = message->attribute.data.value ? *(bool *)message->attribute.data.value : light_state;
                ESP_LOGI(TAG, "Light sets to %s", light_state ? "On" : "Off");
                gpio_set_level(BLINK_GPIO, light_state);
                // light_driver_set_power(light_state);
            }
        }
    }
    return ret;
}

static esp_err_t zb_action_handler(esp_zb_core_action_callback_id_t callback_id, const void *message)
{
    esp_err_t ret = ESP_OK;
    switch (callback_id) {
    case ESP_ZB_CORE_SET_ATTR_VALUE_CB_ID:
        ret = zb_attribute_handler((esp_zb_zcl_set_attr_value_message_t *)message);
        break;
    default:
        ESP_LOGW(TAG, "Receive Zigbee action(0x%x) callback", callback_id);
        break;
    }
    return ret;
}

static void esp_zb_task(void *pvParameters)
{
    /* initialize Zigbee stack */
    esp_zb_cfg_t zb_nwk_cfg = ESP_ZB_ZED_CONFIG();
    esp_zb_init(&zb_nwk_cfg);
    esp_zb_on_off_light_cfg_t light_cfg = ESP_ZB_DEFAULT_ON_OFF_LIGHT_CONFIG();
    esp_zb_ep_list_t *esp_zb_on_off_light_ep = esp_zb_on_off_light_ep_create(HA_ESP_LIGHT_ENDPOINT, &light_cfg);
    esp_zb_device_register(esp_zb_on_off_light_ep);
    esp_zb_core_action_handler_register(zb_action_handler);
    esp_zb_set_primary_network_channel_set(ESP_ZB_PRIMARY_CHANNEL_MASK);
    ESP_ERROR_CHECK(esp_zb_start(false));
    esp_zb_main_loop_iteration();
}

void app_main(void)
{
    configure_led();
    esp_zb_platform_config_t config = {
        .radio_config = ESP_ZB_DEFAULT_RADIO_CONFIG(),
        .host_config = ESP_ZB_DEFAULT_HOST_CONFIG(),
    };
    ESP_ERROR_CHECK(nvs_flash_init());
    ESP_ERROR_CHECK(esp_zb_platform_config(&config));
    xTaskCreate(esp_zb_task, "Zigbee_main", 4096, NULL, 5, NULL);
}
```

### 第四步：烧录 HA_on_off_light 程序

现在将您的 XIAO ESP32C6 板连接到计算机，并检查该板在哪个串口下可见。

串口通常具有以下命名模式：`/dev/tty`。通常，您的计算机可能有许多以 `tty` 开头的端口。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/11.png" style={{width:800, height:'auto'}}/></div>

确定端口也很简单，您可以使用查询命令查看在未连接 XIAO 时默认存在的端口。

```
ls /dev/tty*
```

然后，在将 XIAO 连接到计算机并再次查询后，额外的串口名称即为 XIAO 的端口号。

设置目标设备。

```
idf.py set-target esp32c6
```

通过运行以下命令构建项目：

```
idf.py build
```

要烧录您在前一步中为 ESP32 构建的二进制文件，需要运行以下命令：

```
idf.py -p PORT flash
```

将 `PORT` 替换为 XIAO ESP32C6 的 USB 端口名称。如果未定义 **PORT**，`idf.py` 将尝试使用可用的 USB 端口自动连接。根据我们在第一步中查询的设备端口号，对于我来说，我应该输入以下命令来烧录程序。

```
idf.py -p /dev/ttyACM0 flash
```

如果在烧录过程结束时没有问题，XIAO ESP32C6 将重新启动并启动 Zigbee 灯应用程序。

### 第五步：烧录 HA_on_off_switch 程序

类似地，我们取出另一块 XIAO ESP32C6，并为其上传开关程序。步骤相似。

```
cd ../HA_on_off_switch
idf.py set-target esp32c6
idf.py build
idf.py -p PORT flash
```

如果一切顺利，那么接下来您可以使用运行 SWITCH 程序的 XIAO 上的 **BOOT** 按钮来控制运行 LIGHT 程序的 XIAO 的 LED 灯开关。

<div class="table-center">
<iframe width="800" height="350" src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/2.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## HA_on_off_light 和 HA_on_off_switch 的程序结构

该文件夹包含展示 Zigbee HA 标准设备的示例：

* `HA_on_off_light` 是一个标准的 HA 开关灯泡示例，展示了 Zigbee 终端设备。
* `HA_on_off_switch` 是一个标准的 HA 开关示例，展示了 Zigbee 协调器角色。它提供一个开关功能来控制 Zigbee HA 开关灯。

在本教程中，我们将深入分析 ESP Zigbee SDK 提供的两个示例程序：`HA_on_off_light` 和 `HA_on_off_switch`。通过分析这些示例的代码结构和组织，我们将全面了解如何开发 Zigbee 设备应用程序。

```
- esp_zigbee_HA_sample/
    - HA_on_off_light/
        - main/
          - CMakeLists.txt
          - esp_zb_light.c
          - esp_zb_light.h
          - idf_component.yml
        - CMakeLists.txt
        - partitions.csv
        - sdkconfig.defaults
        ...
    - HA_on_off_switch/
        - main/
          - CMakeLists.txt
          - esp_zb_switch.c
          - esp_zb_switch.h
          - idf_component.yml
        - CMakeLists.txt
        - partitions.csv
        - sdkconfig.defaults
        ...
```

1. esp_zigbee_HA_sample/: 此目录包含 ESP Zigbee SDK 提供的家庭自动化 (HA) 示例项目。

2. HA_on_off_light/: 此子目录表示“开关灯”示例项目。
   - main/: 此目录包含“开关灯”示例的主要源文件。
     - CMakeLists.txt: 此文件由 CMake 构建系统使用，用于指定“开关灯”示例的源文件和依赖项。
     - esp_zb_light.c: 此文件包含 Zigbee 灯设备的主要实现代码，包括初始化、事件处理以及与其他 Zigbee 设备的通信。
     - esp_zb_light.h: 此头文件包含 Zigbee 灯设备所需的函数声明、常量和数据结构。
     - idf_component.yml: 此文件是 ESP-IDF 组件配置文件，用于指定“开关灯”示例的组件依赖项和构建设置。
   - CMakeLists.txt: 此文件是“开关灯”示例项目的顶级 CMakeLists 文件，包含必要的配置和构建目标。
   - partitions.csv: 此文件定义了“开关灯”示例的分区表，指定了各种分区（如引导加载程序、应用程序和存储）的内存布局和大小。
   - sdkconfig.defaults: 此文件包含“开关灯”示例项目的默认配置设置，用户可以覆盖这些设置。

3. HA_on_off_switch/: 此子目录表示“开关”示例项目。
   - main/: 此目录包含“开关”示例的主要源文件。
     - CMakeLists.txt: 与“开关灯”示例类似，此文件由 CMake 构建系统使用，用于指定“开关”示例的源文件和依赖项。
     - esp_zb_switch.c: 此文件包含 Zigbee 开关设备的主要实现代码，包括初始化、事件处理以及与其他 Zigbee 设备的通信。
     - esp_zb_switch.h: 此头文件包含 Zigbee 开关设备所需的函数声明、常量和数据结构。
     - idf_component.yml: 此文件是“开关”示例的 ESP-IDF 组件配置文件。
   - CMakeLists.txt: 此文件是“开关”示例项目的顶级 CMakeLists 文件。
   - partitions.csv: 此文件定义了“开关”示例的分区表。
   - sdkconfig.defaults: 此文件包含“开关”示例项目的默认配置设置。

这些文件协同工作，为使用 ESP Zigbee SDK 的 Zigbee 设备提供完整的示例实现。`.c` 和 `.h` 文件包含实际的代码实现，而 CMakeLists.txt、partitions.csv 和 sdkconfig.defaults 文件用于构建配置和内存分区。

## Zigbee终端设备和Zigbee数据模型

在本教程中，我们将探讨基于Zigbee数据模型的Zigbee HA开关灯示例代码的结构。通过理解代码与数据模型之间的关系，您将能够更好地解读和修改代码以满足您的具体需求。

在深入代码之前，首先需要掌握Zigbee数据模型的关键概念：

- **节点 (Node)**: 节点表示一个基于ESP32-H2的产品以及Zigbee网络中的一个网络节点。一个节点可以拥有多个端点。

- **端点 (Endpoint)**: 端点由1到240之间的数字标识，定义了运行在Zigbee节点上的一个应用程序。一个节点可以有多个端点，每个端点服务于不同的目的或代表一个独立的设备。

- **簇 (Cluster)**: 簇由一个16位数字标识，是一个应用对象，用于定义与端点相关的功能和数据。簇包含属性和命令。

- **属性 (Attribute)**: 属性由一个16位数字标识，表示簇中的当前状态或物理量。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/datamodel.png" style={{width:800, height:'auto'}}/></div>

现在，让我们检查HA开关灯示例代码，并了解它如何映射到Zigbee数据模型。

### 1. 创建端点

在示例代码中，`esp_zb_on_off_light_ep_create()`函数用于创建一个HA开关灯端点。该函数定义了端点ID、设备ID以及相关的簇。

```cpp
static void esp_zb_task(void *pvParameters)
{
    /* 初始化Zigbee栈 */
    esp_zb_cfg_t zb_nwk_cfg = ESP_ZB_ZED_CONFIG();
    esp_zb_init(&zb_nwk_cfg);
    esp_zb_on_off_light_cfg_t light_cfg = ESP_ZB_DEFAULT_ON_OFF_LIGHT_CONFIG();
    esp_zb_ep_list_t *esp_zb_on_off_light_ep = esp_zb_on_off_light_ep_create(HA_ESP_LIGHT_ENDPOINT, &light_cfg);
    esp_zb_device_register(esp_zb_on_off_light_ep);
    esp_zb_core_action_handler_register(zb_action_handler);
    esp_zb_set_primary_network_channel_set(ESP_ZB_PRIMARY_CHANNEL_MASK);
    ESP_ERROR_CHECK(esp_zb_start(false));
    esp_zb_main_loop_iteration();
}
```

### 2. 注册设备

创建端点后，调用`esp_zb_device_register()`函数将Zigbee设备与创建的端点进行注册。

```cpp
esp_zb_device_register(esp_zb_on_off_light_ep);
```

### 3. 属性回调

示例代码使用`esp_zb_core_action_handler_register()`注册属性更改回调。此回调在某些属性被修改时调用，允许您根据应用逻辑处理属性更改。

```cpp
esp_zb_core_action_handler_register(zb_action_handler);
```

在`zb_action_handler`函数中，您可以实现当开关属性更改时的期望行为，例如控制LED灯。

### 4. Zigbee栈配置和启动

示例代码使用`ESP_ZB_ZED_CONFIG()`配置Zigbee终端设备，并使用`esp_zb_init()`初始化Zigbee栈。然后通过`esp_zb_start()`启动栈，主循环由`esp_zb_main_loop_iteration()`处理。

```cpp
esp_zb_cfg_t zb_nwk_cfg = ESP_ZB_ZED_CONFIG();
esp_zb_init(&zb_nwk_cfg);
...
ESP_ERROR_CHECK(esp_zb_start(false));
esp_zb_main_loop_iteration();
```

`esp_zb_app_signal_handler`函数负责处理来自Zigbee应用层的各种信号。

```cpp
void esp_zb_app_signal_handler(esp_zb_app_signal_t *signal_struct)
{
    uint32_t *p_sg_p       = signal_struct->p_app_signal;
    esp_err_t err_status = signal_struct->esp_err_status;
    esp_zb_app_signal_type_t sig_type = *p_sg_p;
    switch (sig_type) {
    case ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP:
        ESP_LOGI(TAG, "初始化Zigbee栈");
        esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_INITIALIZATION);
        break;
    case ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START:
    case ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT:
        if (err_status == ESP_OK) {
            ESP_LOGI(TAG, "延迟驱动初始化 %s", deferred_driver_init() ? "失败" : "成功");
            ESP_LOGI(TAG, "设备以%s出厂重置模式启动", esp_zb_bdb_is_factory_new() ? "" : "非");
            if (esp_zb_bdb_is_factory_new()) {
                ESP_LOGI(TAG, "启动网络引导");
                esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_STEERING);
            } else {
                ESP_LOGI(TAG, "设备已重启");
            }
        } else {
            /* 配置失败 */
            ESP_LOGW(TAG, "初始化Zigbee栈失败 (状态: %s)", esp_err_to_name(err_status));
        }
        break;
    case ESP_ZB_BDB_SIGNAL_STEERING:
        if (err_status == ESP_OK) {
            esp_zb_ieee_addr_t extended_pan_id;
            esp_zb_get_extended_pan_id(extended_pan_id);
            ESP_LOGI(TAG, "成功加入网络 (扩展PAN ID: %02x:%02x:%02x:%02x:%02x:%02x:%02x:%02x, PAN ID: 0x%04hx, 频道:%d, 短地址: 0x%04hx)",
                     extended_pan_id[7], extended_pan_id[6], extended_pan_id[5], extended_pan_id[4],
                     extended_pan_id[3], extended_pan_id[2], extended_pan_id[1], extended_pan_id[0],
                     esp_zb_get_pan_id(), esp_zb_get_current_channel(), esp_zb_get_short_address());
        } else {
            ESP_LOGI(TAG, "网络引导未成功 (状态: %s)", esp_err_to_name(err_status));
            esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb, ESP_ZB_BDB_MODE_NETWORK_STEERING, 1000);
        }
        break;
    default:
        ESP_LOGI(TAG, "ZDO信号: %s (0x%x), 状态: %s", esp_zb_zdo_signal_to_string(sig_type), sig_type,
                 esp_err_to_name(err_status));
        break;
    }
}
```

1. 首先，函数从传递的`esp_zb_app_signal_t`结构中获取信号类型`sig_type`和错误状态`err_status`。

2. 然后，它使用`switch`语句根据信号类型执行不同的操作：

- `ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP`：该信号表示跳过 Zigbee 协议栈的启动。在这种情况下，我们初始化 Zigbee 协议栈，然后调用 `esp_zb_bdb_start_top_level_commissioning` 函数以模式 `ESP_ZB_BDB_MODE_INITIALIZATION` 启动顶层调试流程。

- `ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START` 和 `ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT`：这些信号表示设备的首次启动或重启。如果错误状态为 `ESP_OK`，我们执行一些初始化任务，例如延迟驱动程序初始化。然后，我们检查设备是否处于出厂新状态。如果是，则启动网络引导流程；否则，输出一条消息，指示设备已重启。如果错误状态不是 `ESP_OK`，我们输出一条消息，指示 Zigbee 协议栈初始化失败。

- `ESP_ZB_BDB_SIGNAL_STEERING`：该信号表示网络引导流程的结果。如果错误状态为 `ESP_OK`，则表示设备成功加入网络。在这种情况下，我们输出一些网络信息，例如 PAN ID、信道号和短地址。如果错误状态不是 `ESP_OK`，则表示网络引导失败，我们输出一条错误消息。然后，我们使用 `esp_zb_scheduler_alarm` 函数设置一个定时器，在 1 秒延迟后重新启动网络引导流程。

- 其他信号：我们简单地输出信号名称、类型和错误状态。

此函数的目的是根据不同的 Zigbee 应用层信号执行适当的操作。它是 Zigbee 应用的核心部分之一，处理设备启动、初始化和网络加入等关键流程。

## Zigbee 协调器

对于 Zigbee 协调器设备，其初始化和 RTOS 任务与终端设备类似，不同之处在于 RTOS 任务中少了注册回调函数的步骤。

因此，对于 Zigbee 协调器，最关键的部分是搜索并匹配相应的设备，并向设备发出控制命令。

```cpp
void esp_zb_app_signal_handler(esp_zb_app_signal_t *signal_struct)
{
    uint32_t *p_sg_p       = signal_struct->p_app_signal;
    esp_err_t err_status = signal_struct->esp_err_status;
    esp_zb_app_signal_type_t sig_type = *p_sg_p;
    esp_zb_zdo_signal_device_annce_params_t *dev_annce_params = NULL;
    switch (sig_type) {
    case ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP:
        ESP_LOGI(TAG, "Initialize Zigbee stack");
        esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_INITIALIZATION);
        break;
    case ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START:
    case ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT:
        if (err_status == ESP_OK) {
            ESP_LOGI(TAG, "Deferred driver initialization %s", deferred_driver_init() ? "failed" : "successful");
            ESP_LOGI(TAG, "Device started up in %s factory-reset mode", esp_zb_bdb_is_factory_new() ? "" : "non");
            if (esp_zb_bdb_is_factory_new()) {
                ESP_LOGI(TAG, "Start network formation");
                esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_FORMATION);
            } else {
                ESP_LOGI(TAG, "Device rebooted");
            }
        } else {
            ESP_LOGE(TAG, "Failed to initialize Zigbee stack (status: %s)", esp_err_to_name(err_status));
        }
        break;
    case ESP_ZB_BDB_SIGNAL_FORMATION:
        if (err_status == ESP_OK) {
            esp_zb_ieee_addr_t extended_pan_id;
            esp_zb_get_extended_pan_id(extended_pan_id);
            ESP_LOGI(TAG, "Formed network successfully (Extended PAN ID: %02x:%02x:%02x:%02x:%02x:%02x:%02x:%02x, PAN ID: 0x%04hx, Channel:%d, Short Address: 0x%04hx)",
                     extended_pan_id[7], extended_pan_id[6], extended_pan_id[5], extended_pan_id[4],
                     extended_pan_id[3], extended_pan_id[2], extended_pan_id[1], extended_pan_id[0],
                     esp_zb_get_pan_id(), esp_zb_get_current_channel(), esp_zb_get_short_address());
            esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_STEERING);
        } else {
            ESP_LOGI(TAG, "Restart network formation (status: %s)", esp_err_to_name(err_status));
            esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb, ESP_ZB_BDB_MODE_NETWORK_FORMATION, 1000);
        }
        break;
    case ESP_ZB_BDB_SIGNAL_STEERING:
        if (err_status == ESP_OK) {
            ESP_LOGI(TAG, "Network steering started");
        }
        break;
    case ESP_ZB_ZDO_SIGNAL_DEVICE_ANNCE:
        dev_annce_params = (esp_zb_zdo_signal_device_annce_params_t *)esp_zb_app_signal_get_params(p_sg_p);
        ESP_LOGI(TAG, "New device commissioned or rejoined (short: 0x%04hx)", dev_annce_params->device_short_addr);
        esp_zb_zdo_match_desc_req_param_t  cmd_req;
        cmd_req.dst_nwk_addr = dev_annce_params->device_short_addr;
        cmd_req.addr_of_interest = dev_annce_params->device_short_addr;
        /* find color dimmable light once device joining the network */
        esp_zb_zdo_find_color_dimmable_light(&cmd_req, user_find_cb, NULL);
        break;
    case ESP_ZB_NWK_SIGNAL_PERMIT_JOIN_STATUS:
        if (err_status == ESP_OK) {
            if (*(uint8_t *)esp_zb_app_signal_get_params(p_sg_p)) {
                ESP_LOGI(TAG, "Network(0x%04hx) is open for %d seconds", esp_zb_get_pan_id(), *(uint8_t *)esp_zb_app_signal_get_params(p_sg_p));
            } else {
                ESP_LOGW(TAG, "Network(0x%04hx) closed, devices joining not allowed.", esp_zb_get_pan_id());
            }
        }
        break;
    default:
        ESP_LOGI(TAG, "ZDO signal: %s (0x%x), status: %s", esp_zb_zdo_signal_to_string(sig_type), sig_type,
                 esp_err_to_name(err_status));
        break;
    }
}
```

让我们逐一分析不同的情况及其功能：

1. `ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP`：
   - 此信号表示应跳过 Zigbee 协议栈初始化。
   - 它记录一条消息，指示 Zigbee 协议栈的初始化。
   - 它以模式 `ESP_ZB_BDB_MODE_INITIALIZATION` 启动顶层调试流程。

2. `ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START` 和 `ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT`：
   - 这些信号表示设备首次启动或重新启动。
   - 如果错误状态为 `ESP_OK`，它会记录有关延迟驱动程序初始化状态的消息，以及设备是否以出厂重置模式启动。
   - 如果设备处于出厂新模式，它会通过调用 `esp_zb_bdb_start_top_level_commissioning` 并将模式设置为 `ESP_ZB_BDB_MODE_NETWORK_FORMATION` 来启动网络形成过程。
   - 如果设备不是出厂新模式，它会记录一条消息，表明设备已重新启动。
   - 如果错误状态不是 `ESP_OK`，它会记录一条错误消息。

3. `ESP_ZB_BDB_SIGNAL_FORMATION`：
   - 此信号表示网络形成过程的状态。
   - 如果错误状态为 `ESP_OK`，它会检索扩展 PAN ID，记录有关已形成网络的信息（PAN ID、频道、短地址），并通过调用 `esp_zb_bdb_start_top_level_commissioning` 并将模式设置为 `ESP_ZB_BDB_MODE_NETWORK_STEERING` 来启动网络引导过程。
   - 如果错误状态不是 `ESP_OK`，它会记录一条消息以重新启动网络形成，并安排一个警报在 1000 毫秒后调用 `bdb_start_top_level_commissioning_cb`。

4. `ESP_ZB_BDB_SIGNAL_STEERING`：
   - 此信号表示网络引导过程的状态。
   - 如果错误状态为 `ESP_OK`，它会记录一条消息，表明网络引导已启动。

5. `ESP_ZB_ZDO_SIGNAL_DEVICE_ANNCE`：
   - 当新设备被调试或重新加入网络时，会触发此信号。
   - 它检索设备公告参数，并记录一条消息，其中包含新设备的短地址。
   - 它准备一个匹配描述符请求（`esp_zb_zdo_match_desc_req_param_t`），目标和感兴趣地址设置为新设备的短地址。
   - 它调用 `esp_zb_zdo_find_color_dimmable_light` 来寻找一个彩色可调光设备，并指定 `user_find_cb` 作为回调函数。

6. `ESP_ZB_NWK_SIGNAL_PERMIT_JOIN_STATUS`：
   - 此信号表示网络允许加入状态的状态。
   - 如果错误状态为 `ESP_OK`，它会记录一条消息，表明网络是否开放加入以及开放的持续时间。如果网络关闭，它会记录一条警告消息。

7. 默认情况：
   - 对于任何其他信号类型，它会记录一条包含信号类型和错误状态的通用消息。

总体而言，此代码处理各种与 Zigbee 相关的事件，并执行诸如初始化 Zigbee 堆栈、形成网络、引导网络、处理设备公告以及寻找彩色可调光设备等操作。

示例的其余部分涉及按键稳定化和按键中断的逻辑。如果您感兴趣，可以自行阅读和理解。

## 故障排除

### Q1：关于 ESP_ZB_ON_OFF_LIGHT 的问题：网络引导未成功匹配到另一个 XIAO。

首先，请检查您使用的 ESP-IDF 版本，确保您使用的是 **ESP-IDF v5.1.3** 来编译 Zigbee 示例应用程序。如果不是，请更改 IDF 版本。

接下来，尝试重新插拔设备。您可以尝试先启动上传了 **HA_on_off_switch** 程序的设备，然后启动上传了 **HA_on_off_light** 程序的设备。

如果仍然无法工作，请擦除所有闪存并重新上传程序。

```
idf.py erase_flash flash monitor
```

如果以上方法都不起作用，请向 Espressif 提交问题。

### Q2：成功匹配后，我想匹配新设备该怎么办？

直接使用 flash 命令上传程序不会擦除 flash 保存的历史配对记录。请使用以下命令重新上传程序以匹配新设备。

```
idf.py erase_flash flash monitor
```

## 资源

- **[Espressif 官方文档]** [使用 ESP Zigbee SDK 开发](https://docs.espressif.com/projects/esp-zigbee-sdk/en/latest/esp32/developing.html)
- **[GITHUB]** [Zigbee SDK 仓库](https://github.com/espressif/esp-zigbee-sdk)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持，以确保您使用我们的产品时获得流畅的体验。我们提供多个交流渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>