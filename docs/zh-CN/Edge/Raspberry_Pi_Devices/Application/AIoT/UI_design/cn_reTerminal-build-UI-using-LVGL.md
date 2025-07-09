---
description: LVGL for reTerminal
title:  LVGL for reTerminal
keywords:
  - Edge
  - reTerminal 应用
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal-build-UI-using-LVGL
last_update:
  date: 05/15/2025
  author: jianjing Huang
---

#  define USE_MONITOR         1

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl_banner.jpg" alt="pir" width="800" height="auto"/></p>

## 简介

LVGL 提供了创建嵌入式 GUI 所需的一切，包括易于使用的图形元素、美观的视觉效果以及低内存占用。LVGL 是一个面向资源有限的微控制器的图形库。然而，它也可以用于创建运行 Linux 操作系统的高端微处理器和开发板的嵌入式 GUI。目前有两种实现方式：

- 使用 SDL 2 跨平台库的 PC 模拟器
- 简单地使用 Linux 的帧缓冲设备（通常为 /dev/fb0）。

在本 Wiki 文章中，我们将使用带有 SDL2 的 PC 模拟器示例，并稍作修改以全屏显示 UI，而不是在窗口中显示。

#### 特性

- 强大的[构建模块](https://docs.lvgl.io/master/widgets/index.html)：按钮、图表、列表、滑块、图像等。
- 高级图形引擎：动画、抗锯齿、不透明度、平滑滚动、混合模式等。
- 支持[多种输入设备](https://docs.lvgl.io/master/overview/indev.html)：触摸屏、鼠标、键盘、编码器、按钮等。
- 支持[多显示器](https://docs.lvgl.io/master/overview/display.html)。
- 硬件无关，可与任何微控制器和显示器一起使用。
- 可扩展以使用极少的内存（64 kB Flash，16 kB RAM）。
- 支持多语言，包含 UTF-8 处理、CJK、双向和阿拉伯语脚本支持。
- 通过 [CSS 样式](https://docs.lvgl.io/master/overview/style.html)完全自定义图形元素。
- 强大的布局功能，灵感来自 CSS：[Flexbox](https://docs.lvgl.io/master/layouts/flex.html) 和 [Grid](https://docs.lvgl.io/master/layouts/grid.html)。
- 支持但不依赖于操作系统、外部内存和 GPU。（内置支持 STM32 DMA2D 和 NXP PXP 及 VGLite）。
- 即使使用[单帧缓冲区](https://docs.lvgl.io/master/porting/display.html)也能实现平滑渲染。
- 使用 C 编写，并兼容 C++。
- Micropython 绑定通过 [Micropython 中的 LVGL API](https://blog.lvgl.io/2019-02-20/micropython-bindings) 提供支持。
- [模拟器](https://docs.lvgl.io/master/get-started/pc-simulator.html) 可在无需嵌入式硬件的情况下在 PC 上开发。
- 超过 100 个简单的[示例](https://github.com/lvgl/lvgl/tree/master/examples)。
- [文档](http://docs.lvgl.io/)和 API 参考在线和 PDF 格式可用。

## 准备开发环境

### 在 reTerminal 上

在 Raspberry Pi OS 上，你可以通过终端轻松安装 SDL2：

```bash
sudo apt-get update && sudo apt-get install build-essential libsdl2-dev cmake  -y
```

然后克隆模拟器项目及相关子模块：

```bash
git clone --recursive https://github.com/littlevgl/pc_simulator.git
```

### 在主机 PC 上

<iframe width="800" height="450" src="https://www.youtube.com/embed/UrSkzbuuGaw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

EdgeLine 是 LVGL 的所见即所得 (WYSIWYG) 编辑器，允许用户创建界面并导出 C/Micropython 代码以在目标设备上使用。目前它处于功能有限的测试阶段，可用于 Windows 和 Linux。

Windows 版本：[链接](https://lvgl.io/assets/edgeline/EdgeLine_Setup_v0_3_installer.exe)  
Linux 版本：[链接](https://lvgl.io/assets/edgeline/EdgeLine_v0_3_linux.zip)

由于 EdgeLine 处于测试阶段，请在 [LVGL 论坛 EdgeLine 子论坛](https://forum.lvgl.io/c/edgeline/15) 检查是否有更新版本。

对于 Linux 版本，请确保 Edgeline.x86_64 和 server/micropython 是可执行的。（```chmod +x 文件名```）

之后可以通过以下命令运行 EdgeLine：

```bash
./Edgeline.x86_64
```

导出的代码默认不会加载任何屏幕，因此需要手动在所需屏幕上调用 `lv_scr_load(scr_name)`。

## 运行演示

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl.gif" alt="pir" width="800" height="auto"/></p>

以下步骤可以在 Raspberry Pi OS 上使用 CMake 运行。

确保已安装 CMake，即在终端中可以运行 `cmake` 命令。

```bash
cd pc_simulator/
mkdir build
cd build
cmake ..
make -j4
```

生成的二进制文件位于 `pc_simulator/build/bin/main`，可以通过以下命令运行：

```bash
DISPLAY=:0 ./bin/main
```

这将在窗口模式下显示小部件演示——如果需要更改为全屏模式，请打开
```pc_simulator/lv_drivers/sdl/sdl.c```
并将第 #L344 行更改为：

```c
static void window_create(monitor_t * m)
{
    m->window = SDL_CreateWindow("TFT Simulator",
                            SDL_WINDOWPOS_UNDEFINED, SDL_WINDOWPOS_UNDEFINED,
                            1280 , 720 , SDL_WINDOW_FULLSCREEN);       /*最后一个参数：SDL_WINDOW_BORDERLESS 用于隐藏边框*/
}
```

此外，在 `pc_simulator/lv_drv_conf.h` 文件的第 #L90 行更改屏幕分辨率：

```conf
/*-------------------
 *  PC 显示器
 *-------------------*/
#ifndef USE_MONITOR

#endif

#if USE_MONITOR
#  define MONITOR_HOR_RES     1280
#  define MONITOR_VER_RES     720
```

重新编译并执行二进制文件以查看全屏模式的演示应用程序！

```bash
make -j4
DISPLAY=:0 ./bin/main
```

如果触摸方向不正确，需要将 `/boot/config.txt` 文件的第 89 行更改为 `dtoverlay=reTerminal,tp_rotate=0`。

## 构建您自己的 GUI 应用程序

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl_reterminal.gif" alt="pir" width="800" height="auto"/></p>

要了解如何使用 LVGL 8.0 为 reTerminal 构建自己的 UI 应用程序，可以查看 [此 GitHub 仓库](https://github.com/AIWintermuteAI/Seeed_reTerminal_LVGL_UI_Demo) 中的示例代码。

所有必要的组件都在 `main.c` 中导入并初始化，之后调用主 UI 函数。UI 描述、回调和辅助函数位于 **lv_demo_reterminal_UI/lv_demo_reterminal_UI.c** 文件中。

```cpp
    tv = lv_tabview_create(lv_scr_act(), LV_DIR_TOP, tab_h);

    lv_obj_set_style_text_font(lv_scr_act(), font_normal, 0);

    lv_obj_t * tab_btns = lv_tabview_get_tab_btns(tv);
    lv_obj_set_style_pad_left(tab_btns, 0, 0);

    lv_obj_t * t1 = lv_tabview_add_tab(tv, "Assistant");
    lv_obj_t * t2 = lv_tabview_add_tab(tv, "Debug");
    lv_obj_t * t3 = lv_tabview_add_tab(tv, "Stats");
```

我们在活动屏幕上创建了一个 Tabview 小部件，并用三个标签页填充它：Assistant、Debug 和 Stats。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl-1.png" alt="pir" width="800" height="auto"/></p>

每个标签页的内容分别在对应的函数中初始化：

```cpp
    assistant_create(t1);
    debug_create(t2);
    stats_create(t3);

    color_changer_create(tv);

    evdev_lis3dh_init();
```

此外，还在 Tabview 小部件上创建了颜色更改元素，并初始化了内置加速度计。之后，我们创建了三个带有虚拟输入数据的定时器回调：

```cpp
    static uint32_t user_data = 10;
    lv_timer_t * time_timer = lv_timer_create(time_timer_cb, 1,  &user_data);
    lv_timer_t * system_timer = lv_timer_create(system_timer_cb, 500,  &user_data);
    lv_timer_t * accelerometer_timer = lv_timer_create(accelerometer_timer_cb, 50,  &user_data);
```

这些回调分别负责获取系统时间、系统状态（CPU、内存、磁盘空间、以太网当前速度等）和加速度计读数。您可以在 `lv_demo_reterminal_UI.c` 文件的底部找到这三个回调函数。

```cpp
void time_timer_cb(lv_timer_t * timer)
{

    time_t t = time(NULL);
    struct tm *local = localtime(&t);

    sprintf(timeString, "%02d:%02d:%02d", local->tm_hour, local->tm_min, local->tm_sec);
    sprintf(dateString, "%s\n%s %02d %04d", DAY[local->tm_wday], MONTH[local->tm_mon], local->tm_mday, local->tm_year + 1900);

    lv_label_set_text(clock_label, timeString);
    lv_label_set_text(date_label, dateString);

}

void system_timer_cb(lv_timer_t * timer)
{

    lv_meter_indicator_t *indic1 = timer->user_data;
    cpu_pct = 100 - lv_timer_get_idle();

    lv_mem_monitor_t mon;
    lv_mem_monitor(&mon);

    uint32_t used_size = mon.total_size - mon.free_size;;
    uint32_t used_kb = used_size / 1024;
    uint32_t used_kb_tenth = (used_size - (used_kb * 1024)) / 102;
    mem_pct = mon.used_pct;

    dsk_pct = get_available_space();
    eth0_num = get_current_network_speed();
    //light_num = get_light_sensor();

}

void accelerometer_timer_cb(lv_timer_t * timer)
{

    evdev_lis3dh_read(&data);

    lv_chart_set_next_value(chart1, x_ser, data.x_val);
    lv_chart_set_next_value(chart1, y_ser, data.y_val);
    lv_chart_set_next_value(chart1, z_ser, data.z_val);

}
```

对于您的特定应用程序，可能更适合使用其他小部件而不是 Tabview。您可以参考 [LVGL 8.0 小部件的完整描述](https://docs.lvgl.io/master/widgets/index.html) 以获取用法和示例。

如果您决定在使用 LVGL 为 reTerminal 创建第一个 UI 应用程序时紧密遵循我们的演示应用程序，以下是关于其中一个函数（**assistant_create()**）内部发生的更详细信息。创建新应用程序的工作流程将类似：

1) 在屏幕上初始化小部件
2) 创建基于定时器或事件的回调以从传感器/系统获取数据
3) 根据数据更改小部件的内容——通常通过在代码顶部声明的全局变量完成

**assistant_create**
我们为标签页创建一个面板对象并设置其高度。

```cpp
    lv_obj_t * panel1 = lv_obj_create(parent);
    lv_obj_set_height(panel1, lv_pct(100));
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl-2.png" alt="pir" width="800" height="auto"/></p>

然后，我们从位于 `assets` 文件夹中的 C 数组创建一个图像按钮对象，该数组是通过 [LVGL 图像转换工具](https://lvgl.io/tools/imageconverter) 获得的。我们还初始化并分配了按钮按下时的样式转换（按钮按下时变为绿色）。此外，将事件回调 **speech_event_cb** 分配给按钮按下事件——由于这是一个模拟示例，它只会在终端中打印出一段文本。但在实际应用中，它可以用于启动智能助手。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl-3.png" alt="pir" height="400" height="auto"/></p>

```cpp
    LV_IMG_DECLARE(speech_btn_img);

    /* 创建一个宽度变换和重新着色的过渡动画。 */
    static lv_style_prop_t tr_prop[] = {LV_STYLE_IMG_RECOLOR_OPA, 0};
    static lv_style_transition_dsc_t tr;
    lv_style_transition_dsc_init(&tr, tr_prop, lv_anim_path_linear, 500, 0, NULL);

    static lv_style_t style_def;
    lv_style_init(&style_def);
    lv_style_set_text_color(&style_def, lv_color_white());
    lv_style_set_transition(&style_def, &tr);

    /* 按下按钮时使其变暗并变宽 */
    static lv_style_t style_pr;
    lv_style_init(&style_pr);
    lv_style_set_img_recolor_opa(&style_pr, LV_OPA_70);
    lv_style_set_img_recolor(&style_pr, lv_palette_main(LV_PALETTE_GREEN));

    /* 创建一个图像按钮 */
    lv_obj_t * speech_btn = lv_imgbtn_create(panel1);
    lv_imgbtn_set_src(speech_btn, LV_IMGBTN_STATE_RELEASED, NULL, &speech_btn_img, NULL);
    //lv_img_set_zoom(speech_btn, 128);
    lv_obj_set_size(speech_btn, 300, 300);
    lv_obj_add_event_cb(speech_btn, speech_event_cb, LV_EVENT_ALL, NULL);
    lv_obj_add_style(speech_btn, &style_def, 0);
    lv_obj_add_style(speech_btn, &style_pr, LV_STATE_PRESSED);
```

在下一个代码块中，我们为时间、日期和用户问候创建文本标签。这些标签使用默认文本初始化，并将在 `time_timer` 回调中每秒更新一次。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl-4.png" alt="pir" width="600" height="auto"/></p>

```cpp
    lv_obj_t * name = lv_label_create(panel1);
    lv_label_set_text(name, "Hi there, Username");
    lv_obj_add_style(name, &style_large, 0);

    clock_label = lv_label_create(panel1);
    lv_obj_add_style(clock_label, &style_clock, 0);
    lv_label_set_text(clock_label, timeString);
    lv_label_set_long_mode(clock_label, LV_LABEL_LONG_WRAP);

    lv_obj_t * time_icn = lv_label_create(panel1);
    lv_obj_add_style(time_icn, &style_large, 0);
    lv_label_set_text(time_icn, LV_SYMBOL_BELL);

    date_label = lv_label_create(panel1);
    lv_label_set_text(date_label, dateString);
    lv_obj_add_style(date_label, &style_large, 0);
```

最后，我们使用网格布局来组织放置在此选项卡中的小部件。网格布局是 CSS Flexbox 的一个子集。

它可以将项目排列成具有行或列（轨道）的二维“表格”。项目可以跨越多个列或行。轨道的大小可以设置为像素、最大项目大小（```LV_GRID_CONTENT```）或“自由单位”（FR），以按比例分配空闲空间。

要将对象设置为网格容器，请调用 ```lv_obj_set_layout(obj, LV_LAYOUT_GRID)```。

请注意，LVGL 的网格布局功能需要在 ```lv_conf.h``` 中通过 ```LV_USE_GRID``` 全局启用。

您可以通过[此链接](https://docs.lvgl.io/master/layouts/grid.html)详细了解 LVGL 中的布局。

```cpp
    static lv_coord_t grid_main_col_dsc[] = {LV_GRID_FR(1), LV_GRID_FR(1), LV_GRID_TEMPLATE_LAST};
    static lv_coord_t grid_main_row_dsc[] = {LV_GRID_CONTENT, LV_GRID_CONTENT, LV_GRID_TEMPLATE_LAST};

    /* 创建顶部面板 */
    static lv_coord_t grid_1_col_dsc[] = {400, 50, LV_GRID_CONTENT, LV_GRID_FR(2), LV_GRID_FR(1), LV_GRID_FR(1), LV_GRID_TEMPLATE_LAST};
    static lv_coord_t grid_1_row_dsc[] = {200, 100, 100, LV_GRID_CONTENT, 10, LV_GRID_CONTENT, LV_GRID_CONTENT, LV_GRID_TEMPLATE_LAST};

    lv_obj_set_grid_dsc_array(parent, grid_main_col_dsc, grid_main_row_dsc);

    lv_obj_set_grid_cell(panel1, LV_GRID_ALIGN_STRETCH, 0, 2, LV_GRID_ALIGN_CENTER, 0, 1);

    lv_obj_set_grid_dsc_array(panel1, grid_1_col_dsc, grid_1_row_dsc);
    lv_obj_set_grid_cell(speech_btn, LV_GRID_ALIGN_CENTER, 0, 1, LV_GRID_ALIGN_CENTER, 0, 5);
    lv_obj_set_grid_cell(name, LV_GRID_ALIGN_START, 2, 2, LV_GRID_ALIGN_CENTER, 0, 1);
    lv_obj_set_grid_cell(clock_label, LV_GRID_ALIGN_STRETCH, 2, 4, LV_GRID_ALIGN_START, 1, 1);
    lv_obj_set_grid_cell(time_icn, LV_GRID_ALIGN_CENTER, 2, 1, LV_GRID_ALIGN_CENTER, 3, 1);
    lv_obj_set_grid_cell(date_label, LV_GRID_ALIGN_START, 3, 1, LV_GRID_ALIGN_CENTER, 3, 1);
```

其余选项卡包含不同的小部件，但整体工作流程相同。如果您需要了解特定小部件的参数或用法，请查阅 LVGL 文档。

要编译应用程序，请在项目文件夹（包含 main.c 源文件）中运行以下命令：

```bash
mkdir build
cd build.
cmake ..
make -j4
```

二进制文件将位于 ../bin/main，可以通过以下命令运行：

```bash
DISPLAY=:0 ./../bin/main
```

如果您向项目添加了其他文件夹，请确保相应修改 CMakeLists.txt 并从构建目录重新运行 cmake ..，否则会遇到链接错误。

## 资源

- **[GitHub]** [LVGL](https://lvgl.io/)
- **[网页]** [官方 LVGL 文档](https://docs.lvgl.io/master/index.html)
- **[GitHub]** [PC 模拟器源代码](https://github.com/lvgl/lv_sim_eclipse_sdl)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
