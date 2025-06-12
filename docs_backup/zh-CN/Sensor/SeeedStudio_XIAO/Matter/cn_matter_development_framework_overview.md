---
description: 以灯光代码为例，介绍 Matter 的开发框架。
title: Matter 开发框架概述
keywords:
- matter
- XIAO
- light
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/matter_development_framework
last_update:
  date: 05/15/2025
  author: Citric
---

# Matter 开发框架概述

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

:::tip
本文是 Seeed Studio XIAO ESP32 开发 Matter 系列的第四篇教程。如果您尚未阅读前面的教程，建议您先阅读它们，以确保您的设备已按要求配置。

- **[使用 Espressif ESP-IDF 在 XIAO 上开发](https://wiki.seeedstudio.com/xiao_idf)**
- **[快速入门 XIAO ESP32 系列的 Matter](https://wiki.seeedstudio.com/getting_started_with_matter)**
- **[使用 XIAO ESP32 系列进行 Matter 开发](https://wiki.seeedstudio.com/xiao_esp32_matter_env/)**
:::

通过本教程，您将踏上探索 Matter 开发世界的旅程。以经典的灯光示例为切入点，我们将深入讲解 Matter 开发框架的基本概念和知识。从集群、属性到命令及其他内容，本教程将为您提供掌握 Matter 框架的工具。准备好点亮您的 Matter 开发技能，让我们一起探索这个连接设备的精彩世界吧！

## 教程大纲

1. **[理解灯光示例](#understanding-the-light-example)**
2. **[设备初始化](#device-initialisation)**
3. **[创建 Matter 节点](#create-matter-node)**
4. **[设置端点的属性](#sets-the-attribute-of-the-endpoint)**
5. **[创建端点并自动匹配集群](#create-endpoint--auto-match-cluster)**
6. **[首次使用默认值设置 Matter 设备](#setting-up-the-matter-device-for-the-first-time-with-default-values)**
7. **[数据更新和延迟持久化](#data-updates-and-deferred-persistence)**

在本节中，我们将重点关注 ESP-Matter 提供的 [light](https://github.com/espressif/esp-matter/tree/main/examples/light) 示例，该示例详细描述了 Matter 开发框架中集群、属性和命令的基本概念。通过阅读本文，您将更好地理解 Matter 开发框架的结构和核心知识。

## 理解灯光示例

首先，让我们看一下 ESP-Matter 环境中的文件目录及其作用。

```
- esp-matter/
   - components/
      - esp_matter
      - esp_matter_bridge
      - esp_matter_console
      - esp_matter_controller
      - esp_matter_rainmaker
      - esp_matter_thread_br
   - connectedhomeip/
   - device_hal/
      - button_driver
      - device
      - led_driver
   - docs/
   - examples/
   - tools/
      - mfg_tool
   CMakeLists.txt
   RELEASE_NOTES.md
   export.sh
   install.sh
   requirements.txt
   ...
```

**esp-matter**：这是整个 Matter 开发框架的根目录。

**components**：此目录包含各种组件，是 Matter 框架的核心。
   - esp_matter：这是 ESP32 上 Matter 协议栈的实现，包括数据模型、应用层逻辑等。
   - esp_matter_bridge：此组件负责将 ESP 设备桥接到其他非 ESP 设备，实现互操作性。
   - esp_matter_console：基于 REPL 的交互式控制台，用于调试和控制 Matter 设备。
   - esp_matter_controller：此组件实现 Matter 控制器功能，可以控制其他 Matter 设备。
   - esp_matter_rainmaker：此组件与 Espressif 的 RainMaker 云平台集成，实现云端控制。
   - esp_matter_thread_br：此组件实现 Thread 边界路由器功能，用于创建 Thread 网络。

**connectedhomeip**：这是 Matter 协议栈的上游开源项目，ESP-Matter 从中同步代码。

**device_hal**：此目录包含硬件抽象层驱动。
   - button_driver：按钮驱动。
   - device：设备抽象，定义通用设备接口。
   - led_driver：LED 驱动。

**docs**：存储 ESP-Matter 开发文档和 API 参考手册。

**examples**：各种示例代码，展示如何使用 Matter 框架进行开发。

**tools**：包含各种开发工具脚本。
   - mfg_tool：用于生成制造商证书的工具。

**CMakeLists.txt**：CMake 构建脚本，定义项目的编译规则。

**RELEASE_NOTES.md**：版本说明，记录每个版本的变更。

**export.sh**：导出脚本，用于导出与 Matter 相关的环境变量。

**install.sh**：安装脚本，用于安装 Matter 开发所需的依赖项和工具链。

**requirements.txt**：Python 依赖列表，指定运行 Matter 开发框架所需的 Python 库。

此目录结构反映了 Matter 开发框架的模块化设计理念。核心协议栈、硬件抽象、应用组件、辅助工具及其他部分各司其职，同时有机结合，为开发者提供了完整的 Matter 开发环境。

以 **examples/light** 为例，ESP-Matter 提供的示例结构如下：

```
- light/
   - main/
      - CMakeLists.txt
      - app_driver.cpp
      - app_main.cpp
      - app_priv.h
      - idf_components.yml
   CMakeLists.txt
   README.md
   partitions.csv
   sdkconfig.defaults
   ...
```

- **main**：此子目录包含主要应用代码和配置文件。
   - CMakeLists.txt：灯光应用的 CMake 构建脚本。
   - app_driver.cpp：灯光应用的驱动代码。
   - app_main.cpp：灯光应用的主入口点。
   - app_priv.h：包含灯光应用的私有声明的头文件。
   - idf_components.yml：灯光应用使用的 ESP-IDF 组件的配置文件。

- **CMakeLists.txt**: 用于 light 示例的顶层 CMake 构建脚本。

- **README.md**: 提供 light 示例信息和说明的自述文件。

- **partitions.csv**: 定义 light 示例分区表的文件。

- **sdkconfig.defaults**: light 示例的默认配置设置。

## 设备初始化

接下来，我们深入 light 的代码，通过代码分析和理论结合来加深对 Matter 开发过程的理解。以下代码位于 [manin/app_main.cpp](https://github.com/espressif/esp-matter/blob/main/examples/light/main/app_main.cpp)。

```cpp
app_driver_handle_t light_handle = app_driver_light_init();
app_driver_handle_t button_handle = app_driver_button_init();
app_reset_button_register(button_handle);
```

`app_driver_handle_t light_handle = app_driver_light_init();`：此行初始化灯光驱动程序，并返回灯光驱动实例的句柄。

`app_driver_handle_t button_handle = app_driver_button_init();`：与灯光初始化类似，此行初始化按钮驱动程序。

`app_reset_button_register(button_handle);`：此行注册按钮以处理特定功能，例如复位操作。

以 `app_driver_light_init()` 函数为例，以下程序初始化了所有灯泡，但只使用第一个灯泡（设置为默认颜色和亮度值）。这也是示例程序只能使用一个灯泡的原因。

```cpp
// app_driver.cpp
app_driver_handle_t app_driver_light_init()
{
#if CONFIG_BSP_LEDS_NUM > 0
    /* 初始化 LED */
    led_indicator_handle_t leds[CONFIG_BSP_LEDS_NUM];
    ESP_ERROR_CHECK(bsp_led_indicator_create(leds, NULL, CONFIG_BSP_LEDS_NUM));
    led_indicator_set_hsv(leds[0], SET_HSV(DEFAULT_HUE, DEFAULT_SATURATION, DEFAULT_BRIGHTNESS));
    
    return (app_driver_handle_t)leds[0];
#else
    return NULL;
#endif
}
```

## 创建 Matter 节点

Matter 设备配置主线代码的下一步是创建一个 Matter 节点。代码如下：

```cpp
node::config_t node_config;

// 节点句柄可用于添加/修改其他端点。
node_t *node = node::create(&node_config, app_attribute_update_cb, app_identification_cb);
ABORT_APP_ON_FAILURE(node != nullptr, ESP_LOGE(TAG, "Failed to create Matter node"));
```

Matter 数据模型是 Matter 生态系统中表示和组织数据的标准化方式。它定义了一种通用语言和结构，用于设备、属性和交互，从而实现 Matter 兼容设备之间的互操作性和无缝通信。

下图展示了 Matter 数据模型中这种表示方式的简化视图。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/34.png" style={{width:600, height:'auto'}}/></div>

**Matter 节点**：
Matter 节点表示 Matter 生态系统中的物理设备或逻辑实体。它是 Matter 数据模型的顶级组件。每个 Matter 节点都有一个唯一标识符，并且可以包含一个或多个端点。
   - Matter 节点表示 Matter 生态系统中的**一个物理设备**。
   - 它类似于一个房子，可以包含多个端点（房间）。
   - 每个 Matter 节点都有自己的唯一标识符，用于网络中的识别和寻址。

## 设置端点的属性

创建 Matter 节点后，需要为端点的属性设置默认值。

```cpp
extended_color_light::config_t light_config;
light_config.on_off.on_off = DEFAULT_POWER;
light_config.on_off.lighting.start_up_on_off = nullptr;
light_config.level_control.current_level = DEFAULT_BRIGHTNESS;
light_config.level_control.lighting.start_up_current_level = DEFAULT_BRIGHTNESS;
light_config.color_control.color_mode = (uint8_t)ColorControl::ColorMode::kColorTemperature;
light_config.color_control.enhanced_color_mode = (uint8_t)ColorControl::ColorMode::kColorTemperature;
light_config.color_control.color_temperature.startup_color_temperature_mireds = nullptr;
```

1. `light_config.on_off.on_off = DEFAULT_POWER;`
   - 将端点的初始开/关状态设置为 `DEFAULT_POWER`。
   - `DEFAULT_POWER` 是一个预定义常量，表示默认的电源状态（例如，`true` 表示开，`false` 表示关）。

2. `light_config.on_off.lighting.start_up_on_off = nullptr;`
   - 将端点的启动开/关状态设置为 `nullptr`。
   - 当设备重启或断电重启时，如果该值为 `nullptr`，表示使用上一次的开/关状态。
   - 如果设置为非 `nullptr` 值，则表示使用指定的开/关状态。

3. `light_config.level_control.current_level = DEFAULT_BRIGHTNESS;`
   - 将端点的初始亮度级别设置为 `DEFAULT_BRIGHTNESS`（64）。
   - `DEFAULT_BRIGHTNESS` 是一个预定义常量，表示默认亮度级别（例如，0 到 254 之间的值）。

4. `light_config.level_control.lighting.start_up_current_level = DEFAULT_BRIGHTNESS;`
   - 将端点的启动亮度级别设置为 `DEFAULT_BRIGHTNESS`（64）。
   - 当设备重启或断电重启时，如果该值为非 `nullptr`，表示使用指定的亮度级别。
   - 如果设置为 `nullptr`，表示使用上一次的亮度级别。

5. `light_config.color_control.color_mode = (uint8_t)ColorControl::ColorMode::kColorTemperature;`
   - 将端点的颜色模式设置为 `ColorControl::ColorMode::kColorTemperature`。
   - 这表示端点使用颜色温度模式，通过调整颜色温度来控制灯光的颜色。
   - `(uint8_t)` 是一种类型转换，将枚举值转换为无符号 8 位整数。

6. `light_config.color_control.enhanced_color_mode = (uint8_t)ColorControl::ColorMode::kColorTemperature;`
   - 将端点的增强颜色模式设置为 `ColorControl::ColorMode::kColorTemperature`。
   - 增强颜色模式提供了更多的颜色控制选项，但这里也设置为颜色温度模式。

7. `light_config.color_control.color_temperature.startup_color_temperature_mireds = nullptr;`
   - 将端点的启动色温设置为 `nullptr`。
   - 当设备重新启动或断电后，如果该值为 `nullptr`，表示使用上次的色温设置。
   - 如果设置为非 `nullptr` 值，则表示使用指定的色温值。

Matter 中的属性类似于设备的属性或特性。它们存储有关设备状态的信息，例如设备是否开启或关闭、亮度级别或色温。这些属性被组织到称为 Cluster 的组中，这些组与设备的特定功能相关。

属性使不同设备和应用程序能够轻松地通信和协作。通过标准化表示和访问设备属性的方式，Matter 简化了智能家居系统的开发，并确保来自不同品牌的设备能够高效地互相配合。

`esp_matter_endpoint.h` 是 ESP Matter SDK 中的重要头文件，它定义了与端点相关的常量、数据类型和函数。在 Matter 中，端点表示设备的逻辑接口，每个端点包含一组描述和控制设备特定功能的属性和命令。

```cpp
namespace extended_color_light {
typedef struct config {
    cluster::descriptor::config_t descriptor;
    cluster::identify::config_t identify;
    cluster::groups::config_t groups;
    cluster::scenes_management::config_t scenes_management;
    cluster::on_off::config_t on_off;
    cluster::level_control::config_t level_control;
    cluster::color_control::config_t color_control;
} config_t;

uint32_t get_device_type_id();
uint8_t get_device_type_version();
endpoint_t *create(node_t *node, config_t *config, uint8_t flags, void *priv_data);
esp_err_t add(endpoint_t *endpoint, config_t *config);
} /* extended_color_light */
```

## 创建端点及自动匹配 Cluster

在上文中，我们首先提到了 Matter 中两个重要的术语：端点（Endpoints）和 Cluster。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/35.png" style={{width:500, height:'auto'}}/></div>

**端点 [设备类型]**:
端点是 Matter Node 中一个特定功能或服务的逻辑表示。它封装了与特定设备类型相关的一组能力和行为。一个 Matter Node 可以有多个端点，每个端点表示不同的设备类型。设备类型定义了端点的具体特性和功能。Matter 定义了一组标准设备类型，例如灯泡、恒温器、门锁等。每种设备类型都有唯一标识符以及与之关联的预定义 Cluster、属性和命令。

- 端点是 Matter Node 中的逻辑组件，表示设备的特定功能或服务。
- 就像房子里的房间一样，每个端点都有其专属用途，例如卧室、厨房或客厅。
- 每个端点与特定设备类型相关联，例如灯泡、恒温器或门锁。
- 一个 Matter Node 可以有多个端点，每个端点表示不同的设备类型和功能。

**Cluster**:
Cluster 是端点内相关属性和命令的逻辑分组。它表示设备的特定功能或特性。Cluster 提供了一种组织和分类端点能力的方式。例如，“开/关 Cluster”包含与设备开关相关的属性和命令，而“亮度控制 Cluster”处理设备的亮度或级别控制。

- Cluster 是端点内的逻辑分组，包含相关属性和命令。
- 它就像房间里的家具或设备，例如灯、电视或空调，每个都有自己的属性和操作。
- 每个 Cluster 表示设备的特定功能或特性。
- 例如，“开/关 Cluster”包含与设备开关状态相关的属性和命令，而“亮度控制 Cluster”包含调整设备亮度或级别的属性和命令。
- 一个端点可以有多个 Cluster，每个负责不同的功能。

总结来说，Matter Node 就像一座房子，包含多个端点（房间）。每个端点就像一个房间，表示设备的特定功能或服务。Cluster 就像每个房间里的家具或设备，包含用于控制和交互的相关属性和命令。

这种层次化的组织方式使设备能够清晰地描述其功能和特性，从而使应用程序和其他设备更容易与之交互和控制。通过标准化设备类型、Cluster、属性和命令，Matter 实现了不同制造商设备之间的互操作性和兼容性。

在代码中，设置完属性后，最终通过以下代码片段创建端点。它会自动匹配设置属性的 Cluster。

```cpp
endpoint_t *endpoint = extended_color_light::create(node, &light_config, ENDPOINT_FLAG_NONE, light_handle);
ABORT_APP_ON_FAILURE(endpoint != nullptr, ESP_LOGE(TAG, "Failed to create extended color light endpoint"));
```

自动匹配 Cluster 是如何实现的？我们以设置一个属性的代码片段为例：

```cpp
light_config.level_control.lighting.start_up_current_level = DEFAULT_BRIGHTNESS;
```

`light_config.level_control` 是在端点中定义的属性（esp_matter_endpoint.h）。而 `light_config.level_control.lighting` 是在 Cluster 中定义的属性（esp_matter_cluster）。通过这种设置，系统可以自动匹配与属性对应的 Cluster，而无需开发者手动设置。

## 使用默认值首次设置 Matter 设备

一旦上述的 Attributes、Clusters 和 Endpoints 已被配置，我们就可以开始启动 Matter 设备。启动的步骤和方法如下。

```cpp
light_endpoint_id = endpoint::get_id(endpoint);
ESP_LOGI(TAG, "Light created with endpoint_id %d", light_endpoint_id);

/* Matter start */
err = esp_matter::start(app_event_cb);
ABORT_APP_ON_FAILURE(err == ESP_OK, ESP_LOGE(TAG, "Failed to start Matter, err:%d", err));

/* 使用默认值启动驱动程序 */
app_driver_light_set_defaults(light_endpoint_id);
```

如您所见，设置默认值的函数是 `app_driver_light_set_defaults()`，我们需要传入一个 endpoint ID 作为参数。同时，我们需要关注如何获取某个 cluster 的值、某个 attribute 的值，以及如何设置默认的 cluster 和 attribute 值。这些细节可以在 `app_driver.cpp` 中找到。

```cpp
esp_err_t err = ESP_OK;
void *priv_data = endpoint::get_priv_data(endpoint_id);
led_indicator_handle_t handle = (led_indicator_handle_t)priv_data;
node_t *node = node::get();
endpoint_t *endpoint = endpoint::get(node, endpoint_id);
cluster_t *cluster = NULL;
attribute_t *attribute = NULL;
esp_matter_attr_val_t val = esp_matter_invalid(NULL);

/* 设置亮度 */
cluster = cluster::get(endpoint, LevelControl::Id);
attribute = attribute::get(cluster, LevelControl::Attributes::CurrentLevel::Id);
attribute::get_val(attribute, &val);
err |= app_driver_light_set_brightness(handle, &val);
```

### 1. 获取 Cluster：
   - 要获取一个 cluster，首先需要使用 `endpoint::get(node, endpoint_id)` 函数获取指向 endpoint 的指针，其中 `node` 是指向节点的指针，`endpoint_id` 是 endpoint 的 ID。
   - 一旦获取了 endpoint 指针，可以使用 `cluster::get(endpoint, LevelControl::Id)` 函数获取所需 cluster 的指针，指定 endpoint 和 cluster ID（在此示例中为 `LevelControl::Id`）。

### 2. 获取特定 Attribute：
   - 获取 cluster 指针后，可以使用 `attribute::get(cluster, LevelControl::Attributes::CurrentLevel::Id)` 函数获取该 cluster 中的特定 attribute 的指针。
   - 在此示例中，我们正在从 `LevelControl` cluster 中检索 `CurrentLevel` attribute。

### 3. 检索 Attribute 的值：
   - 要检索 attribute 的当前值，需要声明一个 `esp_matter_attr_val_t` 类型的变量来存储 attribute 值。
   - 在代码片段中，变量 `val` 使用 `esp_matter_invalid(NULL)` 初始化。
   - 然后，可以使用 `attribute::get_val(attribute, &val)` 函数获取 attribute 的当前值，并将其存储在 `val` 变量中。

### 4. 设置灯光的亮度：
   - 要设置灯光的亮度，需要有与 endpoint 关联的 LED 指示器的句柄。
   - 在代码片段中，通过将私有数据指针 (`priv_data`) 转换为适当的类型 (`led_indicator_handle_t`) 来获取 LED 指示器句柄。
   - 最后，可以调用 `app_driver_light_set_brightness(handle, &val)` 函数来设置 LED 指示器的亮度。
   - `handle` 参数是 LED 指示器句柄，`&val` 是指向包含所需亮度值的 `esp_matter_attr_val_t` 变量的指针。

### 步骤总结：
1. 使用 `endpoint::get(node, endpoint_id)` 获取 endpoint 指针。
2. 使用 `cluster::get(endpoint, LevelControl::Id)` 获取 cluster 指针。
3. 使用 `attribute::get(cluster, LevelControl::Attributes::CurrentLevel::Id)` 获取 attribute 指针。
4. 使用 `attribute::get_val(attribute, &val)` 检索 attribute 的当前值。
5. 使用 `app_driver_light_set_brightness(handle, &val)` 设置灯光的亮度，其中 `handle` 是与 endpoint 关联的 LED 指示器句柄。

通过遵循这些步骤，可以获取 cluster 和 attribute 的必要指针，检索 attribute 的当前值，并相应地设置灯光的亮度。

---

## 数据更新和延迟持久化

在 `app_driver.cpp` 的代码中，使用 `app_driver_attribute_update()` 函数更新 attribute 的值。

```cpp
if (endpoint_id == light_endpoint_id) {
   led_indicator_handle_t handle = (led_indicator_handle_t)driver_handle;
   if (cluster_id == OnOff::Id) {
      if (attribute_id == OnOff::Attributes::OnOff::Id) {
            err = app_driver_light_set_power(handle, val);
      }
   } else if (cluster_id == LevelControl::Id) {
      if (attribute_id == LevelControl::Attributes::CurrentLevel::Id) {
            err = app_driver_light_set_brightness(handle, val);
      }
   } else if (cluster_id == ColorControl::Id) {
      if (attribute_id == ColorControl::Attributes::CurrentHue::Id) {
            err = app_driver_light_set_hue(handle, val);
      } else if (attribute_id == ColorControl::Attributes::CurrentSaturation::Id) {
            err = app_driver_light_set_saturation(handle, val);
      } else if (attribute_id == ColorControl::Attributes::ColorTemperatureMireds::Id) {
            err = app_driver_light_set_temperature(handle, val);
      }
   }
}
```

该代码片段定义了一个名为 `app_driver_attribute_update` 的函数，该函数接收多个参数，包括驱动程序句柄（`driver_handle`）、endpoint ID（`endpoint_id`）、cluster ID（`cluster_id`）、attribute ID（`attribute_id`）以及指向 attribute 值的指针（`val`）。

此函数的目的是根据接收到的数据更新灯光 endpoint 的 attribute 值。它遵循特定的逻辑来确定需要更新灯光 endpoint 的哪个 attribute。

### 数据更新逻辑的逐步解析：

1. 函数首先检查 `endpoint_id` 是否与 `light_endpoint_id` 匹配。这确保了更新是针对灯光 endpoint 的。

2. 如果 `endpoint_id` 匹配，函数将 `driver_handle` 转换为适当的类型（`led_indicator_handle_t`），以获取与灯光 endpoint 关联的 LED 指示器的句柄。

3. 然后，该函数检查 `cluster_id` 以确定属性属于哪个集群。它支持三个集群：`OnOff`、`LevelControl` 和 `ColorControl`。

4. 根据 `cluster_id`，函数进一步检查 `attribute_id` 以识别该集群中的具体属性。

5. 基于 `cluster_id` 和 `attribute_id`，函数调用相应的 setter 函数来更新属性值：
   - 如果 `cluster_id` 是 `OnOff::Id` 且 `attribute_id` 是 `OnOff::Attributes::OnOff::Id`，它调用 `app_driver_light_set_power(handle, val)` 来设置灯的电源状态。
   - 如果 `cluster_id` 是 `LevelControl::Id` 且 `attribute_id` 是 `LevelControl::Attributes::CurrentLevel::Id`，它调用 `app_driver_light_set_brightness(handle, val)` 来设置灯的亮度级别。
   - 如果 `cluster_id` 是 `ColorControl::Id`，它进一步检查 `attribute_id`：
     - 如果 `attribute_id` 是 `ColorControl::Attributes::CurrentHue::Id`，它调用 `app_driver_light_set_hue(handle, val)` 来设置灯的色调。
     - 如果 `attribute_id` 是 `ColorControl::Attributes::CurrentSaturation::Id`，它调用 `app_driver_light_set_saturation(handle, val)` 来设置灯的饱和度。
     - 如果 `attribute_id` 是 `ColorControl::Attributes::ColorTemperatureMireds::Id`，它调用 `app_driver_light_set_temperature(handle, val)` 来设置灯的色温。

总体来说，该函数作为更新灯端点属性值的核心点。它接收必要的信息（端点 ID、集群 ID、属性 ID 和属性值），并根据集群和属性 ID 将更新分派到适当的 setter 函数。

通过以这种方式组织逻辑，代码变得更加模块化且易于维护。它允许通过一个函数更新灯端点的不同属性（电源状态、亮度、色调、饱和度、色温），简化了根据接收到的数据更新灯特性的过程。

但并不是所有属性都实时更新。标记那些可能频繁变化的属性为延迟持久性（deferred persistence）的代码可以提高性能，同时减少对非易失性存储器的写入次数并延长设备寿命。

```cpp
/* 为一些可能快速变化的属性标记延迟持久性 */
cluster_t *level_control_cluster = cluster::get(endpoint, LevelControl::Id);
attribute_t *current_level_attribute = attribute::get(level_control_cluster, LevelControl::Attributes::CurrentLevel::Id);
attribute::set_deferred_persistence(current_level_attribute);

cluster_t *color_control_cluster = cluster::get(endpoint, ColorControl::Id);
attribute_t *current_x_attribute = attribute::get(color_control_cluster, ColorControl::Attributes::CurrentX::Id);
attribute::set_deferred_persistence(current_x_attribute);
```

## 定义自己的数据模型

本节展示了如何创建符合 Matter 规范的标准端点、集群、属性和命令。

#### 端点

可以通过编辑示例中的 *app_main.cpp* 文件中的端点/设备类型来自定义设备。示例：

-  on_off_light:

```cpp
   on_off_light::config_t light_config;
   endpoint_t *endpoint = on_off_light::create(node, &light_config, ENDPOINT_FLAG_NONE);
```

-  temperature_sensor:

```cpp
    esp_matter::endpoint::temperature_sensor::config_t temperature_sensor_config;
    endpoint_t *endpoint = temperature_sensor::create(node, &temperature_sensor_config, ENDPOINT_FLAG_NONE, NULL);
```

-  fan:

```cpp
   fan::config_t fan_config;
   endpoint_t *endpoint = fan::create(node, &fan_config, ENDPOINT_FLAG_NONE);
```

-  door_lock:

```cpp
   door_lock::config_t door_lock_config;
   endpoint_t *endpoint = door_lock::create(node, &door_lock_config, ENDPOINT_FLAG_NONE);
```

-  window_covering_device:

```cpp
   window_covering_device::config_t window_covering_device_config(static_cast<uint8_t>(chip::app::Clusters::WindowCovering::EndProductType::kTiltOnlyInteriorBlind));
   endpoint_t *endpoint = window_covering_device::create(node, &window_covering_config, ENDPOINT_FLAG_NONE);
```

   ``window_covering_device`` 的 ``config_t`` 结构包含一个构造函数，允许指定一个与默认值不同的终端产品类型，默认值为“卷帘”。  
   一旦 ``config_t`` 实例被实例化，其终端产品类型将无法修改。

- pump

```cpp
   pump::config_t pump_config(1, 10, 20);
   endpoint_t *endpoint = pump::create(node, &pump_config, ENDPOINT_FLAG_NONE);
```

   ``pump`` 的 ``config_t`` 结构包含一个构造函数，允许指定最大压力、最大速度和最大流量值。如果未设置，它们将默认为 null。  
   一旦 ``config_t`` 实例被实例化，这三个值将无法修改。

### 集群

还可以向端点添加额外的集群。示例：

-  on_off:

```cpp
   on_off::config_t on_off_config;
   cluster_t *cluster = on_off::create(endpoint, &on_off_config, CLUSTER_FLAG_SERVER, on_off::feature::lighting::get_id());
```

-  temperature_measurement:

```cpp
   temperature_measurement::config_t temperature_measurement_config;
   cluster_t *cluster = temperature_measurement::create(endpoint, &temperature_measurement_config, CLUSTER_FLAG_SERVER);
```

- window_covering:

```cpp
   window_covering::config_t window_covering_config(static_cast<uint8_t>(chip::app::Clusters::WindowCovering::EndProductType::kTiltOnlyInteriorBlind));
   cluster_t *cluster = window_covering::create(endpoint, &window_covering_config, CLUSTER_FLAG_SERVER);
```

   ``window_covering`` 的 ``config_t`` 结构包含一个构造函数，允许指定一个与默认值不同的终端产品类型，默认值为“卷帘”。  
   一旦 ``config_t`` 实例被实例化，其终端产品类型将无法修改。

- pump_configuration_and_control:

```cpp
   pump_configuration_and_control::config_t pump_configuration_and_control_config(1, 10, 20);
   cluster_t *cluster = pump_configuration_and_control::create(endpoint, &pump_configuration_and_control_config, CLUSTER_FLAG_SERVER);
```

``pump_configuration_and_control`` 的 ``config_t`` 结构体包含一个构造函数，该构造函数允许指定最大压力、最大速度和最大流量值。如果这些值未设置，它们将默认设置为 null。一旦实例化了 ``config_t`` 实例，这三个值将无法再被修改。

### 属性和命令

还可以向集群添加额外的属性和命令。  
示例：

- 属性：on_off：

```cpp
   bool default_on_off = true;
   attribute_t *attribute = on_off::attribute::create_on_off(cluster, default_on_off);
```

- 属性：cluster_revision：

```cpp
   uint16_t default_cluster_revision = 1;
   attribute_t *attribute = global::attribute::create_cluster_revision(cluster, default_cluster_revision);
```

- 命令：toggle：

```cpp
   command_t *command = on_off::command::create_toggle(cluster);
```

- 命令：move_to_level：

```cpp
   command_t *command = level_control::command::create_move_to_level(cluster);
```

### 特性

还可以为集群添加适用的可选特性。

- 特性：taglist：Descriptor 集群：

```cpp
   cluster_t* cluster = cluster::get(endpoint, Descriptor::Id);
   descriptor::feature::taglist::add(cluster);
```

### 添加自定义数据模型字段

本节演示如何创建不在 Matter 规范中定义的自定义端点、集群、属性和命令，这些可以是特定于供应商的。

#### 端点

可以创建非标准端点，无需任何集群。

- 创建端点：

```cpp
   endpoint_t *endpoint = endpoint::create(node, ENDPOINT_FLAG_NONE);
```

#### 集群

也可以创建非标准/自定义集群：

- 创建集群：

```cpp
   uint32_t custom_cluster_id = 0x131bfc00;
   cluster_t *cluster = cluster::create(endpoint, custom_cluster_id, CLUSTER_FLAG_SERVER);
```

#### 属性和命令

可以在任何集群上创建非标准/自定义属性：

- 创建属性：

```cpp
   uint32_t custom_attribute_id = 0x0;
   uint16_t default_value = 100;
   attribute_t *attribute = attribute::create(cluster, custom_attribute_id, ATTRIBUTE_FLAG_NONE, esp_matter_uint16(default_value);
```

- 创建命令：

```cpp
   static esp_err_t command_callback(const ConcreteCommandPath &command_path, TLVReader &tlv_data, void
   *opaque_ptr)
   {
      ESP_LOGI(TAG, "Custom command callback");
      return ESP_OK;
   }

   uint32_t custom_command_id = 0x0;
   command_t *command = command::create(cluster, custom_command_id, COMMAND_FLAG_ACCEPTED, command_callback);
```

Matter 数据模型以分层方式组织这些组件。一个 Matter 节点包含一个或多个端点，每个端点代表一个特定的设备类型。每个端点由多个集群组成，这些集群将相关的属性和命令分组在一起。属性存储集群的状态和配置，而命令用于与设备交互和控制设备。

通过这种方式构建数据模型，Matter 实现了不同制造商设备之间的互操作性和标准化。开发人员可以使用定义的设备类型、集群、属性和命令来创建能够无缝控制和与 Matter 兼容设备通信的应用程序。

Matter 数据模型为设备提供了一种通用语言和框架，用于描述其功能并相互交互，从而实现更统一和一致的智能家居体验。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>