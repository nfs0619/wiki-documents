---
description: 介绍如何借助 SquareLine Studio 和 LVGL 开发属于自己的 Watcher UI 界面。
title: Watcher UI 集成指南
image: https://files.seeedstudio.com/wiki/watcher_software_framework/ui_framework.webp
slug: /cn/watcher_ui_integration_guide
last_update:
  date: 05/15/2025
  author: Citric
sidebar_position: 4
---

# Watcher UI 集成指南

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 1. **UI 组件结构**

在本教程中，您将学习如何将自己的 UI 设计和相关逻辑功能集成到 `view` 目录中。所有的 UI 设计和逻辑功能都将放置在 `view` 目录中，该目录包含 `ui` 和 `ui_manager` 子目录。此外，`view` 目录还包括 `view.c`、`view_alarm.c`、`view_image_preview.c`、`view_pages.c` 以及对应的 `.h` 头文件。具体框架如下所示：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_framework.png" style={{width:600, height:'auto'}}/></div>

- `ui` 子目录包含所有用户定义的 UI 设计。在本项目中，`ui` 是通过 Squareline 工具生成的。

- `ui_manager` 子目录包含自定义动画、对象组管理以及各种事件回调定义。

- 以 `view` 开头的源文件定义了全局页面及相关事件回调函数。

- UI 通过发送和监听事件与 APP 层进行交互。

:::tip
阅读以下模块定义将有助于您理解和使用整个 UI 框架。如果您想快速掌握 UI 集成，可以直接跳到第 6 章进行应用阅读。
:::

## 2. **组管理**

### 2.1 概述

SenseCAP Watcher 支持触摸屏和编码器输入设备。为了同步这些输入设备的操作并确保正确性，需要通过组管理来保持对正确对象的聚焦并避免事件冲突。

组管理功能在以下文件中实现：

- **pm.c**：包含功能实现。
- **pm.h**：包含功能原型和类型定义。

### 2.2 将对象添加到组中

```cpp
static void addObjToGroup(GroupInfo *groupInfo, lv_obj_t *objects[], int count);
```

其中，`groupInfo` 是指向将要添加对象的 `GroupInfo` 结构的指针，`objects` 是要添加到组中的对象数组，`count` 是数组中的对象数量。

**用法：**

```cpp
// 定义要添加到页面的对象
lv_obj_t *example_objects[] = {example_obj1, example_obj2, ...};
// 将对象添加到组结构变量中
addObjToGroup(&group_page_example, example_objects, sizeof(example_objects) / sizeof(example_objects[0]));
```

### 2.3 页面导航和对象管理

```cpp
void lv_pm_open_page(lv_group_t *group, 
                      GroupInfo *groupInfo, 
                      pm_operation_t operation, 
                      lv_obj_t **target, 
                      lv_scr_load_anim_t fademode,
                      int spd, 
                      int delay, 
                      void (*target_init)(void));
```

**参数说明：**
- `group`：指向 LVGL 组的指针。
- `groupInfo`：指向包含页面对象的 `GroupInfo` 结构的指针。
- `operation`：要执行的操作（将对象添加到组、不执行操作或清除组）。
- `target`：新页面的目标对象。
- `fademode`：屏幕加载动画模式。
- `spd`：屏幕加载动画的速度。
- `delay`：屏幕加载动画开始前的延迟。
- `target_init`：目标屏幕的初始化函数。

**用法：**

```cpp
// 将结构变量中的对象添加到组并导航到相应页面
lv_pm_open_page(g_example, &group_page_example, PM_ADD_OBJS_TO_GROUP, &ui_Page_Example, LV_SCR_LOAD_ANIM_NONE, 0, 0, &ui_Page_Example_screen_init);
```

### 2.4 将编码器与组关联

创建一个组，循环获取输入设备，并将编码器与组关联，以便编码器可以控制组中的对象。

```cpp
void lv_pm_init(void)
{
  // 创建一个组
  g_main = lv_group_create();
  cur_drv = NULL;
  // 循环获取输入设备
  while ((cur_drv = lv_indev_get_next(cur_drv)))
  {
    // 当输入设备是编码器时，将其与组关联
    if (cur_drv->driver->type == LV_INDEV_TYPE_ENCODER)
    {
      lv_indev_set_group(cur_drv, g_main);
      break;
    }
  }
  // 定义不同 GroupInfo 结构变量中的对象
  initGroup();
}
```

**用法：**

```cpp
// 在 `view_init` 中调用以初始化组并将编码器与组关联
int view_init(void)
{
  // 注意：对 lvgl 任务中的对象的任何操作都必须在线程锁内执行！
  lvgl_port_lock(0);
  // 初始化 UI
  ui_init();
  // 初始化组并关联编码器
  lv_pm_init();
  lvgl_port_unlock();
}
```

### 2.5 打印 GroupInfo 对象

```cpp
static void printGroup(GroupInfo *groupInfo);
```

其中，`groupInfo` 是指向将要添加对象的 `GroupInfo` 结构的指针。注意，在打印之前，需要通过 `lv_obj_set_user_data(example_obj, "example_obj_print")` 为对象设置 `user_data`。

**用法：**

```cpp
printGroup(&group_page_example);
```

### 2.6 示例用法

1. 定义一个 `GroupInfo` 变量

```cpp
GroupInfo group_page_example;
```

2. 在 `initGroup()` 中初始化对象

```cpp
lv_obj_t * example_objects[] = {example_obj1, example_obj2, ...};
```

3. 将对象添加到组中

```cpp
addObjToGroup(&group_page_example, example_objects, sizeof(example_objects) / sizeof(example_objects[0]));
```

4. 打开页面并添加组

```cpp
lv_pm_open_page(g_example, &group_page_example, PM_ADD_OBJS_TO_GROUP, &ui_Page_Example, LV_SCR_LOAD_ANIM_NONE, 0, 0, &ui_Page_Example_screen_init);
```

通过遵循这些步骤，您可以确保触摸屏和编码器输入在您的应用程序中同步且正确地运行。

## 3. 设备报警

### 3.1 概述

本节将解释如何在 Watcher 中集成和使用报警 UI 组件。通过理解和使用以下功能，您可以管理设备的 UI 报警行为。

警报 UI 的实现包含在以下文件中：

- **view_alarm.c**：包含函数实现。
- **view_alarm.h**：包含函数原型和类型定义。

### 3.2 初始化警报 UI

```cpp
int view_alarm_init(lv_obj_t *ui_screen);
```

`ui_screen` 是一个指向屏幕对象的指针，用于显示警报 UI 组件。

**用法：**

```cpp
// 在顶层创建与警报相关的 UI
view_alarm_init(lv_layer_top());
```

### 3.3 打开警报 UI

```cpp
int view_alarm_on(struct tf_module_local_alarm_info *alarm_st);
```

`alarm_st` 是一个指向 `tf_module_local_alarm_info` 结构的指针，该结构包含与警报相关的信息，例如 `警报的持续时间`、`是否显示文本和图像` 以及 `文本和图像的具体内容`。

**用法：**

```cpp
struct tf_module_local_alarm_info info;
view_alarm_on(&info);
```

### 3.4 关闭警报 UI

```cpp
void view_alarm_off();
```

**用法：**

```cpp
// 隐藏与警报相关的 UI，设置相应的标志，或执行页面切换逻辑
view_alarm_off();
```

## 4. AI 推理实时图像渲染

### 4.1 概述

本节介绍如何在设备上解码图像并在 LVGL 中显示。

此功能的实现包含在以下文件中：
- **view_image_preview.c**：包含函数实现。
- **view_image_preview.h**：包含函数原型和类型定义。

### 4.2 初始化图像预览功能

```cpp
int view_image_preview_init(lv_obj_t *ui_screen);
```

`ui_screen` 是一个指向屏幕对象的指针，用于显示实时预览。此函数初始化 JPEG 解码器、分配内存，并创建一些 UI 对象以渲染 AI 推理结果，例如目标检测框和分类名称。

**用法：**

```cpp
// 在 ViewLive 页面上创建图像预览 UI
view_image_preview_init(ui_Page_ViewLive);
```

### 4.3 刷新预览图像

```cpp
int view_image_preview_flush(struct tf_module_ai_camera_preview_info *p_info);
```

`p_info` 是一个指向 `tf_module_ai_camera_preview_info` 结构的指针，该结构包含图像和 AI 模型推理信息。

**用法：**

```cpp
struct tf_module_ai_camera_preview_info info;
view_image_preview_flush(&info);
```

## 5. UI 消息事件定义

### 5.1 概述

设备的前端 UI 需要与后端 APP 任务交互。通过监听和消费特定事件，可以实现各种 UI 更新和页面切换逻辑。有关 ESP32 事件处理的详细信息，请参考 Espressif 官方文档中的 `事件循环库` 部分。

UI 消息事件处理的实现包含在以下文件中：

- **view.c**：包含函数实现。
- **view.h**：包含函数原型和类型定义。
- **data_defs.h**：包含各种事件 ID（前端和后端）的枚举声明。

### 5.2 UI 事件处理函数

```cpp
esp_err_t esp_event_handler_instance_register_with( esp_event_loop_handle_t event_loop, 
                                                    esp_event_base_t event_base, 
                                                    int32_t event_id, 
                                                    esp_event_handler_t event_handler, 
                                                    void * event_handler_arg, 
                                                    esp_event_handler_instance_t * instance ) 
```

**参数：**
- `event_loop`：注册此处理函数的事件循环；不能为空。
- `event_base`：要为其注册处理程序的事件的基 ID。
- `event_id`：要为其注册处理程序的事件 ID。
- `event_handler`：事件分发时调用的处理函数。
- `event_handler_arg`：传递给处理函数的参数，除了事件数据外。
- `instance`：与注册的处理程序和数据关联的事件处理程序实例对象；可以为 NULL。

### 5.3 用法

#### 1. 声明和定义事件，并将 UI 事件处理程序实例注册到特定循环

```cpp
// 声明和定义 VIEW 事件基
ESP_EVENT_DECLARE_BASE(VIEW_EVENT_BASE);
esp_event_loop_handle_t app_event_loop_handle;
// 将事件 ID 声明为枚举；在 SenseCAP-Watcher 项目中，这放置在 data_defs.h 中
enum {
    VIEW_EVENT_EXAMPLE
}
// 注册实例
ESP_ERROR_CHECK(esp_event_handler_instance_register_with(app_event_loop_handle, 
                                                            VIEW_EVENT_BASE, VIEW_EVENT_EXAMPLE, 
                                                            __view_event_handler, NULL, NULL));
```

#### 2. UI 消息事件处理

```cpp
static void __view_event_handler(void* handler_args, esp_event_base_t base, int32_t id, void* event_data)
{
  // 获取 lvgl 线程锁
  lvgl_port_lock(0);
  if (base == VIEW_EVENT_BASE) {
    switch (id) {
      // 自定义事件
      case VIEW_EVENT_EXAMPLE: {
        ESP_LOGI("ui_event", "VIEW_EVENT_EXAMPLE");
        // 根据接收到的事件执行相应逻辑
        break;
      }
    }
  }
  // 释放 lvgl 线程锁
  lvgl_port_unlock();
}
```

#### 3. 发送 UI 消息事件

```cpp
// 发送事件以触发相应逻辑
esp_event_post_to(app_event_loop_handle, VIEW_EVENT_BASE, VIEW_EVENT_EXAMPLE, NULL, 0, pdMS_TO_TICKS(10000));
```

## 6. 应用

现在我们将使用上述介绍的函数，将一个简单的 UI 示例集成到 SenseCAP Watcher 设备中。这将涉及使用 Squareline 进行 UI 设计、定义 UI 回调事件、管理对象组等。

### 6.1 在 Squareline 中创建 UI 对象和回调函数

在 Squareline 中创建按钮，设置它们的名称和样式，并为每个按钮分配回调函数。在 `Events` 部分中点击 `ADD EVENT`，选择事件的触发类型，并命名回调函数。这样就完成了 UI 对象及其相关回调函数的创建。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_img1.png" style={{width:800, height:'auto'}}/></div>

### 6.2 从 Squareline 导出 `ui` 项目

在应用程序中，选择导航栏中的 `File` -> `Project Settings`，并将 `UI Files Export Path` 设置为 `project_path/ui`，其中 `project_path` 是 Squareline 项目的路径。这将设置 UI 设计的导出路径。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_img2.png" style={{width:600, height:'auto'}}/></div>

接下来，点击导航栏中的 `Export` -> `Export UI Files`，以导出包含所有 UI 设计的目录文件夹。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_img3.png" style={{width:500, height:'auto'}}/></div>


### 6.3 实现头文件中声明的回调函数

将 `ui` 文件夹导入到 SenseCAP Watcher 项目中，打开并参考 `ui` 文件夹中的 `ui_events.h` 中声明的函数，并在 `ui_manager` 文件夹中的 `ui_events.c` 中实现这些函数，以完成这些回调函数的逻辑。

例如，在 `ui_events.h` 中：

```cpp
void btn1click_cb(lv_event_t * e);
void btn2click_cb(lv_event_t * e);
void btn3click_cb(lv_event_t * e);
```

在 `ui_events.c` 中代码如下：

```cpp
void btn1click_cb(lv_event_t * e)
{
    ESP_LOGI("ui_example", "btn1click_cb");
    // 定义当点击事件触发时该对象的逻辑
}

void btn2click_cb(lv_event_t * e)
{
    ESP_LOGI("ui_example", "btn2click_cb");
    // 定义当点击事件触发时该对象的逻辑
}

void btn3click_cb(lv_event_t * e)
{
    ESP_LOGI("ui_example", "btn3click_cb");
    // 定义当点击事件触发时该对象的逻辑
}
```

### 6.4 将对象添加到结构变量中

在此步骤中，我们需要管理编码器和创建的组。向组中添加和移除对象将使编码器能够控制这些对象。

```cpp
// 定义一个 GroupInfo 变量
GroupInfo group_page_example;
// 在 initGroup() 中初始化对象
lv_obj_t * example_objects[] = {ui_Button1, ui_Button2, ui_Button3};
// 将对象添加到结构变量中，以便在不同页面中向组中添加对象
addObjToGroup(&group_page_example, example_objects, sizeof(example_objects) / sizeof(example_objects[0]));
```

### 6.5 UI 初始化

在 `view.c` 的 `view_init` 中调用 `ui_init` 来初始化 UI。这样，当 lvgl 任务线程运行时，它可以加载设计的 UI。默认加载的页面是 Squareline 中设计的第一个页面。

```cpp
int view_init(void)
{
  // 注意：在 lvgl 任务中对对象的任何操作必须在线程锁内执行！
  lvgl_port_lock(0);

  ui_init();
  lv_pm_init();
  // 有两种方式向组中添加对象
  // 第一种：清除组中的对象并逐个添加到组中
  lv_group_remove_all_objs(g_example);
  lv_group_add_obj(ui_Button1);
  lv_group_add_obj(ui_Button2);
  lv_group_add_obj(ui_Button3);

  // 第二种：通过页面切换函数将对应的对象添加到组中：
  lv_pm_open_page(g_example, &group_page_example, PM_ADD_OBJS_TO_GROUP, &ui_Page_Example, LV_SCR_LOAD_ANIM_NONE, 0, 0, &ui_Page_Example_screen_init);

  lvgl_port_unlock();

  // 其他初始化代码
}
```

### 6.6 查看运行效果

现在我们已经简单地实现了 UI 集成到项目中。接下来，我们可以编译并烧录代码到 Watcher 中查看运行效果！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_img4.png" style={{width:500, height:'auto'}}/></div>

如上图所示，通过触摸屏或旋钮点击页面上的按钮，可以在串口调试助手中看到对应对象触发回调事件，表明回调函数成功运行！


## 7. SquareLine 项目

SenseCAP-Watcher 的大部分页面是使用 Squareline 创建的。Squareline 工具允许轻松快速地修改 Watcher 中各种页面对象的样式。因此，强烈建议使用 Squareline 进行 UI 开发和迭代。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_img5.png" style={{width:800, height:'auto'}}/></div>

如上图所示，工具中的页面根据导航逻辑排列。相邻页面可以通过按钮或其他可触发对象进行导航。您可以点击对应页面和对象查看定义的事件，非常简单地修改不同页面和对象的样式，定制您的 AI 助手！但需要注意的是，当前页面中定义的对象和回调事件绑定到 Watcher 的 APP 层函数。修改它们可能会影响 Watcher 的正常运行。建议仅修改对象的样式，例如颜色和大小，以确保 Watcher 的正常功能。

## 8. 文件描述

- [`ui_intergration_demo\SenseCAP-Watcher_example`](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/tree/factory_fw/examples/factory_firmware/docs/ui_intergration_demo/SenseCAP-Watcher_example) 文件夹包含 SenseCAP-Watcher 的完整 Squareline 项目，包括几乎所有的 UI 资源设计。

- [`ui_intergration_demo\ui_intergration_example`](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/tree/factory_fw/examples/factory_firmware/docs/ui_intergration_demo/ui_intergration_example) 文件夹包含应用章节中的示例 Squareline 项目。

- [`ui_intergration_demo\view`](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/tree/factory_fw/examples/factory_firmware/docs/ui_intergration_demo/view) 文件夹包含应用章节中的 `view` 组件。您可以通过直接替换项目中的原始 `view` 来使用该示例。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

---

以上内容提供了技术支持的链接，您可以通过以下方式获取帮助：

- **论坛支持**：点击 [这里](https://forum.seeedstudio.com/) 访问 Seeed Studio 官方论坛，与社区成员交流技术问题。
- **邮件支持**：点击 [这里](https://www.seeedstudio.com/contacts) 联系 Seeed Studio 客服团队。

或者，您也可以通过以下方式加入讨论或获取支持：

- **Discord 社区**：点击 [这里](https://discord.gg/eWkprNDMU7) 加入 Seeed Studio 的 Discord 社区，与其他用户实时交流。
- **GitHub 讨论**：点击 [这里](https://github.com/Seeed-Studio/wiki-documents/discussions/69) 参与 GitHub 上的技术讨论。