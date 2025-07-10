---
description: 介绍 SenseCAP Watcher 软件框架。
title: Watcher 软件框架
image: https://files.seeedstudio.com/wiki/watcher_software_framework/architecture_1.webp
slug: /cn/watcher_software_framework
last_update:
  date: 05/15/2025
  author: Citric
sidebar_position: 2
---

# Watcher 软件架构

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

SenseCAP Watcher 的软件架构如下图所示，主要分为三个部分：APP 应用、UI 与交互、任务流。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/architecture.png" style={{width:800, height:'auto'}}/></div>

- **APP 应用**：主要包括一些应用，例如 WiFi 连接、蓝牙配置、与平台通信、OTA 等，同时也会生成一些数据用于 UI 显示。
- **UI 与交互**：主要是 UI 界面和 UI 交互的实现。
- **任务流**：主要是任务流引擎及各种任务流功能模块的实现。

## 1. 任务流框架

### 1.1 概述

为了满足各种场景需求，设计了一个类似 Node-RED 的任务流框架，可以灵活地组织设备所具备的技能并使其协同工作。

我们将设备所具备的技能抽象为模块，这些模块可以是数据生产者或消费者，也可以同时是两者。然后根据具体任务，提取所需模块并通过生产者-消费者关系连接起来，以实现特定场景任务。

### 1.2 任务流引擎

任务流引擎的主要功能是使各种功能模块按照任务流 JSON 运行；它负责功能模块的注册、实例化和销毁，以及模块之间的连接。

任务流引擎的处理流程如下图所示：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/taskflow_engine.png" style={{width:300, height:'auto'}}/></div>

1. 初始化任务流引擎。
2. 将每个功能模块注册到任务流引擎中，使用链表存储每个模块的管理功能和信息。
3. 任务流引擎等待接收任务流。
4. 接收到新的任务流后，解析任务流 JSON，提取所需功能模块并存储到数组中。
5. 在功能模块数组中，根据模块名称从链表中找到模块的管理功能并进行排序。
6. 实例化功能模块。
7. 配置功能模块。
8. 在功能模块之间建立事件管道，用于消息传递。
9. 按顺序启动每个功能模块。
10. 启动后，任务流开始运行。

### 1.3 任务流 JSON

任务流以 JSON 格式描述，任务流引擎通过解析该 JSON 文件来运行任务流。

以下是一个任务流 JSON 模板：

```json
{
    "tlid": 123456789,
    "ctd": 123456789,
    "tn": "任务流模板",
    "type": 0,
    "task_flow": [
        {
            "id": 1,
            "type": "module1",
            "index": 0,
            "version": "1.0.0",
            "params": {
            },
            "wires": [
                [
                    2
                ]
            ]
        },
        {
            "id": 2,
            "type": "module2",
            "index": 1,
            "version": "1.0.0",
            "params": {
            },
            "wires": [
                [
                    3,
                    4
                ]
            ]
        },
        {
            "id": 3,
            "type": "module3",
            "index": 2,
            "version": "1.0.0",
            "params": {
            },
            "wires": []
        },
        {
            "id": 4,
            "type": "module4",
            "index": 3,
            "version": "1.0.0",
            "params": {
            },
            "wires": []
        }
    ]
}
```

字段说明：

- **ctd**：任务流的创建时间。
- **tlid**：任务流 ID，可以与 ctd 相同。
- **tn**：任务流名称。
- **type**：任务流类型
  - **0**：本地示例任务流。
  - **1**：通过 MQTT 下发的任务流。
  - **2**：通过蓝牙下发的任务流。
  - **3**：通过语音下发的任务流。
- **task_flow**：包含任务流中每个功能模块的详细信息。
  - **id**：模块 ID。
  - **type**：模块名称。
  - **index**：模块在任务流中的顺序；位置越靠前，值越小，用于模块排序。
  - **version**：模块版本。
  - **params**：模块参数；不同版本可能有不同的参数配置，可根据版本号进行兼容解析。
  - **wires**：模块之间的连接。详见 **任务流功能模块的事件管道**。

以下是一个火灾监控任务流 JSON 示例：

```json
{
    "tlid": 1720171506807,
    "ctd": 1720171527631,
    "tn": "应用通知火灾紧急情况",
    "task_flow": [
        {
            "id": 86464178,
            "type": "ai camera",
            "type_id": 0,
            "index": 0,
            "vision": "0.0.1",
            "params": {
                "model_type": 0,
                "model": {},
                "modes": 1,
                "conditions": [],
                "conditions_combo": 0,
                "silent_period": {
                    "time_period": {
                        "repeat": [
                            1,
                            1,
                            1,
                            1,
                            1,
                            1,
                            1
                        ],
                        "time_start": "00:00:00",
                        "time_end": "23:59:59"
                    },
                    "silence_duration": 60
                },
                "output_type": 1,
                "shutter": 0
            },
            "wires": [
                [
                    540820974
                ]
            ]
        },
        {
            "id": 540820974,
            "type": "image analyzer",
            "type_id": 3,
            "index": 1,
            "version": "0.0.1",
            "params": {
                "url": "",
                "header": "",
                "body": {
                    "prompt": "是否有火灾？",
                    "type": 1,
                    "audio_txt": "火灾警报"
                }
            },
            "wires": [
                [
                    1516408094,
                    1981533581
                ]
            ]
        },
        {
            "id": 1981533581,
            "type_id": 99,
            "type": "sensecraft alarm",
            "index": 2,
            "version": "0.0.1",
            "params": {
                "silence_duration": 10,
                "text": "火灾警报"
            },
            "wires": []
        },
        {
            "id": 1516408094,
            "type_id": 5,
            "type": "local alarm",
            "index": 3,
            "version": "0.0.1",
            "params": {
                "sound": 1,
                "rgb": 1,
                "img": 1,
                "text": 1,
                "duration": 10
            },
            "wires": []
        }
    ],
    "type": 0
}
```

此任务流程使用了四个模块：AI 摄像头、图像分析器、本地报警和 SenseCraft 报警。其连接拓扑如下所示：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/modules_connection1.png" style={{width:600, height:'auto'}}/></div>

下图展示了任务流程引擎的总体流程以及功能模块的启动过程：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/modules_connection1.png" style={{width:600, height:'auto'}}/></div>

### 1.4 模块的事件管道

功能模块之间的连接表示数据传输，其中前一个模块生成数据并将其发送到下一个模块。消息传输使用事件机制，前者发布事件，后者订阅事件。事件通过 IDF 的 `esp_event` 组件实现，该组件支持队列缓存。

每个模块都有一个唯一的 ID，作为该模块订阅的事件 ID。在执行 `sub_set` 时，模块订阅具有该 ID 的消息；在停止执行时，它会注销该事件 ID。一些模块作为激励源，没有上游模块，可以在不订阅该事件 ID 的情况下运行。

每个模块都有一个 `wires` 字段，表示下一个模块的 ID。在执行 `pub_set` 时，这些 ID 会被缓存，当有数据时会发布到这些 ID。一些模块的 `wires` 字段为空，表示没有下游模块，仅消费数据而不产生数据。

每个模块最多可以有一个输入端口，但可以有多个输出端口，表示不同的数据输出，每个输出端口可以输出到多个模块。`wires` 字段是一个二维数组，第一层表示输出端口的数量，第二层表示该端口输出到的模块 ID。

如下图所示，模块 1 在事件 ID 2 上发布消息，模块 2 接收并处理该消息；模块 2 有两个输出端口，第一个输出端口连接到模块 3 和模块 4，第二个输出端口连接到模块 5。当输出端口 1 有数据时，它会向事件 ID 3 和 4 发布消息；当输出端口 2 有数据时，它会向事件 ID 5 发布消息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/modules_connection2.png" style={{width:600, height:'auto'}}/></div>

模块 2 的对应 JSON 描述如下：

```json
{
    "id": 2,
    "type": "module name",
    "index": 1,
    "version": "1.0.0",
    "params": {
    },
    "wires": [
        [
            3,
            4
        ],
        [
            5
        ]
    ]
}
```

相关的操作函数定义在 **tf.h** 文件中（主要封装了 IDF 的 `esp_event` 相关函数），如下所示：

```cpp
esp_err_t tf_event_post(int32_t event_id,
                        const void *event_data,
                        size_t event_data_size,
                        TickType_t ticks_to_wait);

esp_err_t tf_event_handler_register(int32_t event_id,
                                    esp_event_handler_t event_handler,
                                    void *event_handler_arg);

esp_err_t tf_event_handler_unregister(int32_t event_id,
                                      esp_event_handler_t event_handler);
```

#### 1.4.1 事件管道中传输的消息类型

两个模块可以连接在一起，表示它们的数据类型一致；我们在 [tf\_module\_data\_type.h](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/blob/main/examples/factory_firmware/main/task_flow_module/common/tf_module_data_type.h) 文件中定义了数据类型及其对应的数据结构。通常，数据类型以前缀 **TF\_DATA\_TYPE\_** 定义；数据结构以前缀 **tf\_data\_** 定义。

例如，我们在类型枚举结构中定义了 **TF\_DATA\_TYPE\_BUFFER** 类型，其对应的结构如下。第一个字段 `type` 表示数据类型，其余字段表示要传输的数据。

```cpp
typedef struct {
    uint8_t  type;
    struct tf_data_buf data;
} tf_data_buffer_t;
```

当模块接收到事件数据时，它首先提取事件数据的第一个字节以获取数据类型，然后判断数据是否是它需要的。如果是，则进一步处理；否则丢弃。

当前可用的数据类型如下表所示：

<table>
  <thead>
    <tr>
      <th>数据类型</th>
      <th>数据结构</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>TF_DATA_TYPE_TIME</td>
      <td>tf_data_time_t</td>
      <td>时间戳</td>
    </tr>
    <tr>
      <td>TF_DATA_TYPE_BUFFER</td>
      <td>tf_data_buffer_t</td>
      <td>缓冲区</td>
    </tr>
    <tr>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>tf_data_dualimage_with_inference_t</td>
      <td>包含大图、小图和推理信息</td>
    </tr>
    <tr>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>tf_data_dualimage_with_audio_text_t</td>
      <td>包含大图、小图、报警音频和报警文本</td>
    </tr>
  </tbody>
</table>

- **大图**：从 Himax 获取的 640 x 480 jpeg 格式图像，使用 base64 编码存储。

- **小图**：从 Himax 获取的 416 x 416 jpeg 格式图像，使用 base64 编码存储。

- **推理信息**：从 Himax 获取的推理结果，包括框坐标数组、类别分类信息或点坐标信息，以及类别名称信息。

- **音频**：从触发模块获取的数据，格式为 .mp3。

#### 1.4.2 事件管道中的高效传输

使用 IDF 的 `esp_event` 组件进行消息传输时，在入队操作中会发生内存拷贝（请阅读 `esp_event` 源代码了解详情）；当传输大数据（如图像和音频）时，这种方式非常不友好。

因此，我们采用了一种高效的传输方法，仅传输指针。例如，在 **TF\_DATA\_TYPE\_BUFFER** 类型中，待传输的数据定义如下。第一个字段 `p_buf` 是数据缓冲区的起始地址，第二个字段 `len` 是数据的长度。

```cpp
struct tf_data_buf
{
    uint8_t *p_buf;
    uint32_t len;
};
```

对于数据生产模块，它们负责分配 `p_buf` 的内存；而下一级的数据消费模块则负责在使用后释放内存。
一些常见的数据复制和释放函数定义在 [tf\_module\_util.h](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/blob/main/examples/factory_firmware/main/task_flow_module/common/tf_module_util.h) 文件中。例如，如果接收到的事件数据类型不是您需要的，可以直接调用 **tf\_data\_free()** 函数来释放内存（此函数实现了所有数据类型的释放），如下所示：

```cpp
static void __event_handler(void *handler_args, esp_event_base_t base, int32_t id, void *p_event_data)
{
    uint32_t type = ((uint32_t *)p_event_data)[0];
    if( type !=  TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE ) {
        ESP_LOGW(TAG, "不支持的类型 %d", type);
        tf_data_free(p_event_data);
        return;
    }
    //...
}
```

### 1.5 模块的基类

我们在 [tf\_module.h](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/blob/main/examples/factory_firmware/main/task_flow_engine/include/tf_module.h) 中定义了模块的基类。任务流引擎不关心模型的具体实现，它只需要调用模块的相关接口来操作它们。每个具体模块只需实现操作函数和管理函数。

```cpp
struct tf_module_ops
{
    int (*start)(void *p_module);
    int (*stop)(void *p_module);
    int (*cfg)(void *p_module, cJSON *p_json);
    int (*msgs_sub_set)(void *p_module, int evt_id);
    int (*msgs_pub_set)(void *p_module, int output_index, int *p_evt_id, int num);
};

typedef struct tf_module_mgmt {
    tf_module_t *(*tf_module_instance)(void);
    void (*tf_module_destroy)(tf_module_t *p_module);
}tf_module_mgmt_t;
```

关于如何编写模块，请参考 [Watcher 功能模块开发指南](https://wiki.seeedstudio.com/watcher_function_module_development_guide)

## 2. 功能模块

### 2.1 列表

目前，常见的内置模块包括 AI 摄像头、报警触发器、图像分析器、本地报警、SenseCraft 报警和 UART 报警。

<table>
  <thead>
    <tr>
      <th>类别</th>
      <th>功能模块</th>
      <th>输入数据类型</th>
      <th>输出数据类型</th>
      <th>支持多实例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">激励源</td>
      <td>AI 摄像头</td>
      <td>任意数据类型</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>N</td>
    </tr>
    <tr>
      <td>定时器</td>
      <td>-</td>
      <td>TF_DATA_TYPE_TIME</td>
      <td>Y</td>
    </tr>
    <tr>
      <td rowspan="2">触发模块</td>
      <td>报警触发器</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>图像分析器</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>Y</td>
    </tr>
    <tr>
      <td rowspan="3">报警模块</td>
      <td>本地报警</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>-</td>
      <td>N</td>
    </tr>
    <tr>
      <td>SenseCraft 报警</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>-</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>UART 报警</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>-</td>
      <td>Y</td>
    </tr>
  </tbody>
</table>

### 2.2 功能模块介绍

#### 2.2.1 定时器

定时器模块是一个激励源模块，主要功能是周期性定时器。参数定义如下：

```json
{
    "type": "timer",
    "version": "1.0.0",
    "params": {
        "period": 5
    }
}
```

配置参数如下：

* **params**: 包含设备参数的对象。
  * **period**: 定时器启动的周期。

终端连接描述：

<table>
  <thead>
    <tr>
      <th>终端</th>
      <th>数据类型</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>输入</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>输出</td>
      <td>TF_DATA_TYPE_TIME</td>
      <td>输出当前时间戳</td>
    </tr>
  </tbody>
</table>

#### 2.2.2 AI 摄像头

AI 摄像头模块主要负责与 Himax 通信、模型 OTA、获取图像和推理结果，并包含一些简单的条件过滤功能。参数定义如下：

```json
{
    "type": "ai camera",
    "version": "1.0.0",
    "params": {
        "model_type": 0,
        "model": {
            "model_id": "60021",
            "version": "1.0.0",
            "arguments": {
                "size": 8199.37,
                "url": "https://sensecraft-statics.oss-accelerate.xxx",
                "icon": "https://sensecraft-statics.oss-accelerate.xxx.png",
                "task": "detect",
                "createdAt": "1695282154",
                "updatedAt": "17149mode60582",
                "iou": 50,
                "conf": 50
            },
            "model_name": "通用目标检测",
            "model_format": "TensorRT",
            "ai_framework": "2",
            "author": "SenseCraft AI",
            "algorithm": "目标检测(TensorRT, SMALL, COCO)",
            "classes": [
                "person"
            ],
            "checksum": ""
        },
        "modes": 1,
        "conditions": [{
            "class": "person",
            "mode": 1,
            "type": 1,
            "num": 1
        }],
        "conditions_combo": 0,
        "silent_period": {
            "time_period": {
                "repeat": [1, 1, 1, 1, 1, 1, 1],
                "time_start": "08:59:59",
                "time_end": "00:00:00"
            },
            "silence_duration": 60
        },
        "output_type": 1,
        "shutter": 0
    }
}
```

`params` 参数中每个字段的含义如下：

* **model\_type**: 模型类型，0 表示云端模型（模型 URL 将从 model 字段中提取以供下载和使用），1、2 和 3 表示 Himax 内置模型。
* **model**: 模型的具体信息。
  * **model\_id**: 模型的唯一标识符。
  * **version**: 模型版本。
  * **arguments**: 模型参数配置。
    * **size**: 模型大小。
    * **url**: 模型的下载 URL。
    * **icon**: 模型的图标 URL。
    * **task**: 模型的任务类型，"detect" 表示检测。
    * **createdAt**: 模型创建的时间戳。
    * **updatedAt**: 模型更新的时间戳。
    * **iou**: IOU（交并比）阈值。
    * **conf**: 置信度阈值。
  * **model\_name**: 模型名称，例如 "General Object Detection"。
  * **model\_format**: 模型格式，例如 "TensorRT"。
  * **ai\_framework**: 使用的 AI 框架。
  * **author**: 模型作者，例如 "SenseCraft AI"。
  * **algorithm**: 算法描述，例如 "Object Detect(TensorRT, SMALL, COCO)"。
  * **classes**: 模型可以检测的类别，例如 "person"。
  * **checksum**: 模型文件的校验和（MD5），目前为空。
* **modes**: 工作模式，0 表示推理模式，1 表示采样模式；当为 1 时，设备不解析 model 字段。
* **conditions**: 检测条件列表。
  * **class**: 要检测的类别，例如 "person"。
  * **mode**: 检测模式，0 表示存在检测，1 表示数值比较，2 表示数量变化。
  * **type**: 比较类型，0 表示小于，1 表示等于，2 表示大于，3 表示不等于（仅在 mode=1 时有效）。
  * **num**: 比较值（仅在 mode=1 时有效）。
* **conditions\_combo**: 多条件检测的关系，0 表示 AND，1 表示 OR。
* **silent\_period**: 静默期设置。
  * **time\_period**: 时间段设置。
    * **repeat**: 从周日到周六的重复时间段，1 表示启用。
    * **time\_start**: 静默期的开始时间。
    * **time\_end**: 静默期的结束时间。
  * **silence\_duration**: 静默持续时间，以秒为单位。
* **output\_type**: 输出图像类型，0 表示仅小图（412x412），1 表示同时输出大图和小图（640x480；412x412）。
* **shutter**: 快门模式，0 表示连续打开，1 表示由 UI 触发，2 表示由输入事件触发，3 表示单次快门。

终端连接描述：

<table>
  <thead>
    <tr>
      <th>终端</th>
      <th>数据类型</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>输入</td>
      <td>任意数据类型</td>
      <td>输入可以触发快门</td>
    </tr>
    <tr>
      <td>输出</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>输出大图、小图和推理信息（此字段仅对推理模型有效）</td>
    </tr>
  </tbody>
</table>

#### 2.2.3 报警触发器

报警触发器模块可能是 AI 摄像头的下一个模块，主要添加一些音频和文本以提供给下一个报警模块。参数定义如下：

```json
{
    "type": "alarm trigger",
    "version": "1.0.0",
    "params": {
        "text": "", 
        "audio": ""
    }
}
```

配置参数如下：

* **params**: 包含设备参数的对象。
  * **text**: 音频文本，用于生成音频内容的信息。
  * **audio**: 以 Base64 编码的 MP3 格式音频文件，表示音频内容。

终端连接描述：

<table>
  <thead>
    <tr>
      <th>终端</th>
      <th>数据类型</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>输入</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>来自 AI 摄像头模块的数据输出</td>
    </tr>
    <tr>
      <td>输出</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>输出大图、小图、推理信息、报警 MP3 音频和文本</td>
    </tr>
  </tbody>
</table>

#### 2.2.4 图像分析器

图像分析器模块可能是 AI 摄像头的下一级模块，主要调用 LLM 分析图像。当分析请求返回的结果触发报警时，将输出数据到下一级模块。参数定义如下：

```json
{
    "type": "image analyzer",
    "version": "1.0.0",
    "params": {
        "url": "",
        "header": "",
        "body": {
            "prompt": "",
            "type": 0,
            "audio_txt": ""
        }
    }
}
```

配置参数如下：

* **params**: 包含设备参数的对象。
  * **url**: 请求的 URL 地址，保留字段（通常使用设备上配置的 URL）。
  * **header**: 请求头，保留字段。
  * **body**: 包含请求体内容的对象。
    * **prompt**: 请求中包含的提示信息，为图像分析提供附加信息。
    * **type**: 请求类型，1 表示监控。
    * **audio\_txt**: 请求中包含的音频文本信息。当监控场景被触发时，接口服务会将此字段转换为 TTS 并在接口中返回。

终端连接描述：

<table>
  <thead>
    <tr>
      <th>终端</th>
      <th>数据类型</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>输入</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>来自 AI 摄像头模块的数据输出</td>
    </tr>
    <tr>
      <td>输出</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>输出大图、小图、推理信息、报警 MP3 音频和文本</td>
    </tr>
  </tbody>
</table>

#### 2.2.5 本地报警

本地报警模块是一个报警模块，主要实现设备报警，例如控制 RGB 闪烁、播放报警音频、在 LCD 上显示报警文本和报警图像等。参数定义如下：

```json
{
    "type": "local alarm",
    "version": "1.0.0",
    "params": {
        "sound": 1,
        "rgb": 1,
        "img": 1,
        "text": 1,
        "duration": 10
    }
}
```

配置参数如下：

* **params**: 包含设备参数的对象。
  * **sound**: 播放音频的开关，1 表示开启，0 表示关闭。
  * **rgb**: RGB 警报灯的开关，1 表示开启，0 表示关闭。
  * **img**: 显示警报图片的开关，1 表示开启，0 表示关闭。
  * **text**: 显示警报文字的开关，1 表示开启，0 表示关闭。
  * **duration**: 警报持续时间（秒），此处为 10 秒。

终端连接描述：

<table>
  <thead>
    <tr>
      <th>终端</th>
      <th>数据类型</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>输入</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>来自上一个触发块的数据输出</td>
    </tr>
    <tr>
      <td>输出</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

#### 2.2.6 sensecraft 警报

sensecraft 警报块是一个警报块，主要用于通知 SenseCraft 平台警报信息。参数定义如下：

```json
{
    "type": "sensecraft alarm",
    "version": "1.0.0",
    "params": {
        "silence_duration": 60,
        "text": ""
    }
}
```

配置参数如下：

* **params**: 包含设备参数的对象。
  * **silence\_duration**: 静默时间（秒），此处为 60 秒，表示最小上报间隔为 60 秒。
  * **text**: 平台警报通知的文本。

终端连接描述：

<table>
  <thead>
    <tr>
      <th>终端</th>
      <th>数据类型</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>输入</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>来自上一个触发块的数据输出</td>
    </tr>
    <tr>
      <td>输出</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

#### 2.2.7 uart 警报

uart 警报块是一个警报块，主要通过串口实现警报信息输出。参数定义如下：

```json
{
    "id": "<random number>",
    "type": "uart alarm",
    "version": "1.0.0",
    "params": {
        "output_format": 0,
        "text": "a string that you want to pass to the consumer of the uart packet.",
        "include_big_image": 0,
        "include_small_image": 0
    }
}
```

配置参数如下：

- **params**: 包含设备参数的对象。
  - **output_format**: 输出格式。
    - 0: 二进制格式。
    - 1: JSON 格式。
  - **text**: 警报文本，此文本将填充到串口输出数据包的 Prompt 字段。如果未设置此参数，将填充当前任务流的短名称。
  - **include_big_image**: 是否包含大图。
    - 0: 否。
    - 1: 是。
  - **include_small_image**: 是否包含小图。
    - 0: 否。
    - 1: 是。

终端连接描述：

<table>
  <thead>
    <tr>
      <th>终端</th>
      <th>数据类型</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>输入</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>来自上一个触发块的数据输出</td>
    </tr>
    <tr>
      <td>输出</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/image-uart.png" style={{width:500, height:'auto'}}/></div>

uart 警报将从 SenseCAP Watcher 后部的串口输出数据包。接线方式如上图所示。串口参数如下：

- 波特率：115200
- 8 位数据，1 个停止位
- 无校验位

> 注意：由于 ESP32S3 引脚 IO_19 和 IO_20 在上电时的默认行为，此串口在 SenseCAP Watcher 初次上电时会输出一些随机字节。请使用有效的数据包检测机制进行过滤。

串口输出的数据包格式根据 `output_format` 参数分为两种格式：

**A. 二进制格式**

二进制数据包格式如下：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/api.png" style={{width:800, height:'auto'}}/></div>

字段说明：
- Packet Magic Header - 数据包头，5 字节 "SEEED"
- Prompt Str Len - 提示字符串长度
- Prompt Str - 提示字符串或警报文本。当设置了 `text` 参数时，为 `text` 参数的副本。如果未设置 `text` 参数，将自动填充为描述任务目的的短文本（由云服务的任务编译接口生成）。
- Big Image Len - 大图的 base64 编码字符串的字节长度。当 `include_big_image=0` 时，值为 0。
- Big Image - 大图 JPG 的 base64 编码字符串
- Small Image Len - 小图的 base64 编码字符串的字节长度。当 `include_small_image=0` 时，值为 0。
- Small Image - 小图 JPG 的 base64 编码字符串
- Inference type - 推理结果类型；0：表示无推理信息，1：表示输出为框推理，2：表示输出为类别推理结果
- Boxes/classes - 推理结果。
- Classes name - 类别名称。

在上述字段中，`Packet Magic Header`、`Prompt Str Len` 和 `Prompt Str` 字段为必输出字段。其他字段由参数启用控制。例如，如果设置参数 `include_big_image: 1`，二进制数据包将附加 `Big Image Len` 和 `Big Image` 字段。

**B. JSON 格式**

JSON 数据包格式如下：

```
# 在串口输出流中
.....{packet object}\r\n{packet object}\r\n...
```

数据包对象：

```json
{
     "prompt": "监控一只猫",
     "big_image": "base64 编码的 JPG 图像，如果启用了 include_big_image，否则省略此字段",
     "small_image": "base64 编码的 JPG 图像，如果启用了 include_small_image，否则省略此字段",
     "inference":{
        "boxes": [
            [145, 326, 240, 208, 50, 0]
        ],
        "classes": [
            [50, 0]
        ],
        "classes_name": [
          "person"
        ]
  }
} 
```

同样地，"prompt" 字段是一个必需的输出字段。"big_image" 和 "small_image" 字段由参数控制。

#### 2.2.7 HTTP 报警

HTTP 报警模块是一个报警模块，主要用于将报警信息转发到 HTTP 服务器；参数定义如下：

```json
{
    "id":"",
    "type": "http alarm",
    "version": "1.0.0",
    "params": {
        "silence_duration": 5,
        "time_en": 1,
        "text_en": 1,
        "image_en": 1, 
        "sensor_en": 1, 
        "text": ""
    }
}
```

配置参数如下：

* **params**: 包含设备参数的对象。
  * **silence_duration**: 静默时间，以秒为单位。
  * **time_en**: 启用时间戳，1 表示开启，0 表示关闭。
  * **text_en**: 启用报警文本，1 表示开启，0 表示关闭。
  * **image_en**: 启用图片，1 表示开启，0 表示关闭。
  * **sensor_en**: 启用传感器，1 表示开启，0 表示关闭。
  * **text**: 报警文本。

终端连接描述：

<table>
  <thead>
    <tr>
      <th>终端</th>
      <th>数据类型</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>输入</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>来自前一个触发模块的数据输出</td>
    </tr>
    <tr>
      <td>输出</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您在使用我们的产品时获得顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>