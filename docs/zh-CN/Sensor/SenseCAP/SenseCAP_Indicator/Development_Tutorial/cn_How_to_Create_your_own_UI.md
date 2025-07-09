---
description: 基于 LVGL 编码或使用 Squareline Studio 创建自己的 UI
title: 如何创建自己的 UI
keywords:
- 指示器开发教程
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_How_to_Create_your_own_UI
last_update:
  date: 05/15/2025
  author: Thomas
sidebar_position: 4
---

# **如何创建自己的 UI**

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## **LvGL**

[LvGL](https://docs.lvgl.io/master/intro/index.html) 是一个开源图形库，提供了创建嵌入式 GUI 所需的一切，包括易于使用的图形元素、美观的视觉效果以及低内存占用。

### **示例代码**

我们提供了 UI 界面的演示代码，[lvGL 示例文件](https://docs.lvgl.io/master/examples.html)中有许多用于绘制 UI 的示例代码供参考，您可以修改示例代码或自定义自己的 UI。

```c
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "esp_log.h"
#include "bsp_board.h"
#include "lv_demos.h"
#include "lv_port.h"
#include "ui_demo1.h"
#include "ui_demo2.h"

#define LOG_MEM_INFO        1

static const char *TAG = "app_main";

void app_main(void)
{
    ESP_LOGI("TAG", "系统启动");

    ESP_ERROR_CHECK(bsp_board_init());
    lv_port_init();

#if CONFIG_LCD_AVOID_TEAR
    ESP_LOGI(TAG, "避免 LCD 撕裂效果");
#if CONFIG_LCD_LVGL_FULL_REFRESH
    ESP_LOGI(TAG, "LVGL 全刷新模式");
#elif CONFIG_LCD_LVGL_DIRECT_MODE
    ESP_LOGI(TAG, "LVGL 直接模式");
#endif
#endif

    lv_port_sem_take();
    lv_demo_widgets();      /* 一个小部件示例。这是默认提供的内容 */
    //lv_demo_music();        /* 一个现代化的、类似智能手机的音乐播放器演示。 */
    //lv_demo_stress();       /* 一个用于 LVGL 的压力测试。 */
    //lv_demo_benchmark();    /* 一个用于测量 LVGL 性能或比较不同设置的演示。 */
    // ui_demo1_init();         /* 一个显示虚拟打印机的演示（必须为 800*480） */
    //ui_demo2_init();         /* 一个显示虚拟调谐器的演示
                                /* （必须为 480*800，在 menuconfig 中设置 LCD_EVB_SCREEN_ROTATION_90） */
    lv_port_sem_give();

#if LOG_MEM_INFO
    static char buffer[128];    /* 确保缓冲区足够用于 `sprintf` */
    while (1) {
        sprintf(buffer, "   最大块 /     空闲 /    总计\n"
                "\t  DRAM : [%8d / %8d / %8d]\n"
                "\t PSRAM : [%8d / %8d / %8d]",
                heap_caps_get_largest_free_block(MALLOC_CAP_INTERNAL),
                heap_caps_get_free_size(MALLOC_CAP_INTERNAL),
                heap_caps_get_total_size(MALLOC_CAP_INTERNAL),
                heap_caps_get_largest_free_block(MALLOC_CAP_SPIRAM),
                heap_caps_get_free_size(MALLOC_CAP_SPIRAM),
                heap_caps_get_total_size(MALLOC_CAP_SPIRAM));
        ESP_LOGI("MEM", "%s", buffer);

        vTaskDelay(pdMS_TO_TICKS(10000));
    }
#endif
}
```

## **Squareline Studio（可选）**

[Squareline Studio](https://docs.squareline.io/docs/squareline/) 是一个跨平台设计工具，使用可视化界面帮助设计师和开发者快速高效地工作。SquareLine Studio 通过为您的项目生成完美的代码实现这一目标。无论您使用 C 或 Python，都可以导出两者的代码。

如果需要创建更复杂或高级的 UI 界面，建议使用 Squareline Studio 进行开发。

[Squareline Studio 安装指南](https://docs.squareline.io/docs/introduction/install)

我们提供了一个 UI 页面演示项目：

[SenseCAP Indicator/squareline_project](https://github.com/Seeed-Solution/sensecap_indicator_esp32/blob/main/examples/squareline_demo/doc/squareline_project.zip)

### **替换为您自己的 UI**

* 第一步：您可以在我们的演示项目中进行修改，或创建一个新的 UI 页面

打开演示项目并进行修改：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/squareline.png"/></div>

创建一个新项目：

**注意**：屏幕分辨率为 480*480。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/create.png"/></div>

* 第二步：将完成的页面导出为 UI 文件

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/export.png"/></div>

* 第三步：删除所有原始 UI 文件，并将您自己的 UI 文件复制到此目录中

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/ui.png"/></div>

* 第四步：构建并烧录项目

运行以下命令以构建、烧录并监控项目：

`idf.py -p PORT build flash monitor`

# **技术支持**

**需要帮助解决您的 SenseCAP 指示器问题？我们随时为您提供支持！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>