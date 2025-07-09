---
description: 使用 Seeed Studio XIAO MG24 的蓝牙功能。
title: Seeed Studio XIAO MG24 蓝牙使用
keywords:
- MG24
- xiao
- ble
- 蓝牙
image: https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/ble-cover.webp
slug: /cn/xiao_mg24_bluetooth
last_update:
  date: 05/15/2025
  author: Hugo
---

# 使用 Seeed Studio XIAO MG24 的蓝牙功能

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO MG24</th>
			<th>Seeed Studio XIAO MG24 Sense</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop0.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

Seeed Studio XIAO MG24 是一款支持 Bluetooth LE 5.3 和蓝牙 Mesh 的强大开发板，非常适合需要无线连接的各种物联网应用。凭借其卓越的射频性能，XIAO MG24 提供可靠的高速无线通信，适用于短距离和长距离的多种应用场景。在本教程中，我们将探索 XIAO MG24 蓝牙功能的基本特性，包括如何扫描附近的蓝牙设备、建立蓝牙连接，以及通过该连接发送和接收数据。

## 切换天线的方法

Seeed Studio XIAO MG24 提供两种天线选项：内置天线和外置天线。为了方便起见，您可以选择使用内置天线；如果需要增强信号强度，可以选择外置天线。以下是切换两种天线的方法。

PB04 用于选择使用内置天线还是外置天线。在此之前，您需要将 PB05 设置为高电平以启用此功能。如果 PB04 设置为低电平，则使用内置天线；如果设置为高电平，则使用外置天线。默认设置为低电平。如果您想将其设置为高电平，可以参考以下代码。

```cpp
#define RF_SW_PW_PIN PB5
#define RF_SW_PIN PB4

void setup() {
  // 启用天线功能
  pinMode(RF_SW_PW_PIN, OUTPUT);  
  digitalWrite(RF_SW_PW_PIN, HIGH);

  delay(100);

  // HIGH -> 使用外置天线 / LOW -> 使用内置天线
  pinMode(RF_SW_PIN, OUTPUT);  
  digitalWrite(RF_SW_PIN, HIGH);
```

## 蓝牙低功耗 (BLE) 使用

蓝牙低功耗（简称 BLE）是蓝牙的一种节能变体。BLE 的主要应用是短距离传输少量数据（低带宽）。与始终开启的传统蓝牙不同，BLE 除非建立连接，否则始终处于休眠模式。

由于其特性，BLE 非常适合需要定期交换少量数据并运行在纽扣电池上的应用。例如，BLE 在医疗保健、健身、追踪、信标、安全和家庭自动化行业中非常有用。

这使得它的功耗非常低。根据使用场景，BLE 的功耗约为传统蓝牙的 1/100。

关于 XIAO MG24 的 BLE 部分，我们将在以下章节中介绍其使用方法。

- [一些基本概念](#一些基本概念) -- 我们将首先了解一些在 BLE 中可能经常使用的概念，以帮助我们理解 BLE 程序的执行过程和思路。
- [BLE 扫描器](#ble-扫描器) -- 本节将解释如何搜索附近的蓝牙设备并在串口监视器中打印出来。
- [BLE 服务端/客户端](#ble-服务端客户端) -- 本节将解释如何将 XIAO MG24 用作服务端和客户端来发送和接收指定的数据消息。它还将用于从手机向 XIAO 发送或接收消息。
<!-- - [BLE 传感器数据交换](#ble-传感器数据交换) -- 这是完整教程的最后一部分，我们将通过一个传感器示例来解释如何通过 BLE 发送传感器数据。 -->

### 一些基本概念

#### 服务端和客户端

在蓝牙低功耗中，有两种类型的设备：服务端和客户端。XIAO MG24 可以充当客户端或服务端。

服务端广播其存在，以便其他设备可以找到它，并包含客户端可以读取的数据。客户端扫描附近的设备，当找到目标服务端时，它会建立连接并监听传入数据。这被称为点对点通信。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/ble.png" style={{width:800, height:'auto'}}/></div>

#### 属性

属性实际上是一段数据。每个蓝牙设备都用于提供服务，而服务是数据的集合，这个集合可以称为数据库，数据库中的每一条记录就是一个属性（Attribute）。因此，这里可以将属性理解为数据条目。您可以将蓝牙设备想象成一张表格，表格中的每一行就是一个属性。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/52.png" style={{width:600, height:'auto'}}/></div>

#### GATT

当两个蓝牙设备建立连接时，它们需要一个协议来确定如何通信。GATT（通用属性配置文件）就是这样一个协议，它定义了蓝牙设备之间如何传输数据。

在 GATT 协议中，设备的功能和属性被组织成称为服务（services）、特性（characteristics）和描述符（descriptors）的结构。服务表示设备提供的一组相关功能和特性。每个服务可以包含多个特性，这些特性定义了服务的某些属性或行为，例如传感器数据或控制命令。每个特性都有一个唯一标识符和一个值，可以通过读取或写入该值进行通信。描述符用于描述特性的元数据，例如特性值的格式和访问权限。

通过使用 GATT 协议，蓝牙设备可以在不同的应用场景中进行通信，例如传输传感器数据或控制远程设备。

#### BLE 特性

ATT，全称属性协议（Attribute Protocol）。最终，ATT 是由一组 ATT 命令组成的，即请求和响应命令。ATT 也是蓝牙空包的最上层，即 ATT 是我们分析蓝牙数据包时最常接触的部分。

ATT 命令正式名称为 ATT PDU（协议数据单元，Protocol Data Unit）。它包括四种类别：读取（read）、写入（write）、通知（notify）和指示（indicate）。这些命令可以分为两种类型：如果需要响应，则会跟随一个请求；相反，如果只需要一个 ACK 而不需要响应，则不会跟随请求。

服务（Service）和特性（Characteristic）是在 GATT 层中定义的。服务端提供服务，服务是数据，而数据是属性。服务和特性是数据的逻辑表示，或者说用户可以看到的数据最终会转化为服务和特性。

让我们从移动端的角度看看服务和特性是什么样子。nRF Connect 是一个应用程序，它可以非常直观地展示每个数据包的样子。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/62.png" style={{width:400, height:'auto'}}/></div>

如您所见，在蓝牙规范中，每个特定的蓝牙应用程序由多个服务组成，每个服务由多个特性组成。一个特性由 UUID、属性（Properties）和值（Value）组成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/50.png" style={{width:300, height:'auto'}}/></div>

属性用于描述对特性进行操作的类型和权限，例如是否支持读取、写入、通知等。这类似于 ATT PDU 中包含的四种类别。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/51.png" style={{width:800, height:'auto'}}/></div>

#### UUID

每个服务、特性和描述符都有一个 UUID（通用唯一标识符，Universally Unique Identifier）。UUID 是一个唯一的 128 位（16 字节）数字。例如：

```
ea094cbd-3695-4205-b32d-70c1dea93c35
```

对于所有类型、服务和由 [SIG（蓝牙特别兴趣小组）](https://www.bluetooth.com/specifications/gatt/services) 指定的配置文件，都有缩短的 UUID。但如果您的应用程序需要自己的 UUID，可以使用此 [UUID 生成器网站](https://www.uuidgenerator.net/) 来生成。

### BLE 扫描器

创建一个 XIAO MG24 BLE 扫描器非常简单。以下是一个创建扫描器的示例程序。

```cpp
/*
   BLE 扫描示例

   此示例扫描其他 BLE 设备，并打印出每个发现设备的地址、RSSI、频道和名称。

   有关 Silabs BLE API 使用的更多信息，请访问：https://docs.silabs.com/bluetooth/latest/bluetooth-stack-api/

   此示例仅适用于 'BLE (Silabs)' 协议栈变体。

   兼容的开发板：
   - Arduino Nano Matter
   - SparkFun Thing Plus MGM240P
   - xG27 DevKit
   - xG24 Explorer Kit
   - xG24 Dev Kit
   - BGM220 Explorer Kit
   - Ezurio Lyra 24P 20dBm Dev Kit
   - Seeed Studio XIAO MG24 (Sense)

   作者: Tamas Jozsi (Silicon Labs)
 */
#define RF_SW_PW_PIN PB5
#define RF_SW_PIN PB4

void setup() {
  Serial.begin(115200);
}

void loop() {
  
}

static String get_complete_local_name_from_ble_advertisement(sl_bt_evt_scanner_legacy_advertisement_report_t* response);

/**************************************************************************/ /**
 * 蓝牙栈事件处理器
 * 当 BLE 栈上发生事件时调用
 *
 * @param[in] evt 来自蓝牙栈的事件
 *****************************************************************************/
void sl_bt_on_event(sl_bt_msg_t* evt) {
  static uint32_t scan_report_num = 0u;
  sl_status_t sc;

  switch (SL_BT_MSG_ID(evt->header)) {
    // 当 BLE 设备成功启动时接收到此事件
    case sl_bt_evt_system_boot_id:
      // 打印欢迎信息
      Serial.begin(115200);

      // 打开天线功能
      pinMode(RF_SW_PW_PIN, OUTPUT); 
      digitalWrite(RF_SW_PW_PIN, HIGH);

      delay(100);
      // HIGH -> 使用外部天线 / LOW -> 使用内置天线
      pinMode(RF_SW_PIN, OUTPUT); 
      digitalWrite(RF_SW_PIN, HIGH);

      Serial.println();
      Serial.println("Silicon Labs BLE 扫描示例");
      Serial.println("BLE 栈已启动");
      // 开始扫描其他 BLE 设备
      sc = sl_bt_scanner_set_parameters(sl_bt_scanner_scan_mode_active,  // 模式
                                        16,                              // 间隔（值 * 0.625 毫秒）
                                        16);                             // 窗口（值 * 0.625 毫秒）
      app_assert_status(sc);
      sc = sl_bt_scanner_start(sl_bt_scanner_scan_phy_1m,
                               sl_bt_scanner_discover_generic);
      app_assert_status(sc);
      Serial.println("开始扫描...");
      break;

    // 当扫描到其他 BLE 设备的广告时接收到此事件
    case sl_bt_evt_scanner_legacy_advertisement_report_id:
      scan_report_num++;
      Serial.print(" -> #");
      Serial.print(scan_report_num);
      Serial.print(" | 地址: ");
      for (int i = 5; i >= 0; i--) {
        Serial.printf("%02x", evt->data.evt_scanner_legacy_advertisement_report.address.addr[i]);
        if (i > 0) {
          Serial.print(":");
        }
      }
      Serial.print(" | RSSI: ");
      Serial.print(evt->data.evt_scanner_legacy_advertisement_report.rssi);
      Serial.print(" dBm");
      Serial.print(" | 频道: ");
      Serial.print(evt->data.evt_scanner_legacy_advertisement_report.channel);
      Serial.print(" | 名称: ");
      Serial.println(get_complete_local_name_from_ble_advertisement(&(evt->data.evt_scanner_legacy_advertisement_report)));
      break;

    // 默认事件处理器
    default:
      Serial.print("BLE 事件: 0x");
      Serial.println(SL_BT_MSG_ID(evt->header), HEX);
      break;
  }
}

/**************************************************************************/ /**
 * 在 BLE 广告中查找完整的本地名称
 *
 * @param[in] response 从扫描中接收到的 BLE 响应事件
 *
 * @return 如果找到完整的本地名称则返回，否则返回 "N/A"
 *****************************************************************************/
static String get_complete_local_name_from_ble_advertisement(sl_bt_evt_scanner_legacy_advertisement_report_t* response) {
  int i = 0;
  // 遍历响应数据
  while (i < (response->data.len - 1)) {
    uint8_t advertisement_length = response->data.data[i];
    uint8_t advertisement_type = response->data.data[i + 1];

    // 如果长度超过设备名称的最大可能长度
    if (advertisement_length > 29) {
      continue;
    }

    // 类型 0x09 = 完整的本地名称，0x08 = 缩短的名称
    // 如果字段类型与完整的本地名称匹配
    if (advertisement_type == 0x09) {
      // 复制设备名称
      char device_name[advertisement_length + 1];
      memcpy(device_name, response->data.data + i + 2, advertisement_length);
      device_name[advertisement_length] = '\0';
      return String(device_name);
    }
    // 跳到下一个广告记录
    i = i + advertisement_length + 1;
  }
  return "N/A";
}

#ifndef BLE_STACK_SILABS
#error "此示例仅与 Silicon Labs BLE 栈兼容。请在 'Tools > Protocol stack' 中选择 'BLE (Silabs)'。"
#endif
```

:::提示
需要注意的是，在编译之前，必须在“Tools > Protocol stack”中选择“BLE (Silabs)”。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/tool_select.png" style={{width:800, height:'auto'}}/></div>
:::

现在你可以选择 XIAO MG24 主板并上传程序。如果程序运行顺利，打开串行监视器并将波特率设置为 115200，你将看到以下结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/scan_result.png" style={{width:700, height:'auto'}}/></div>

该程序会打印出扫描到的蓝牙设备的名称、MAC 地址、频道和信号。

#### 程序注释

此示例演示如何使用 Silicon Labs BLE 栈扫描附近的蓝牙低功耗 (BLE) 设备，并打印每个发现设备的地址、RSSI（接收信号强度指示器）、频道和名称。

代码首先定义了一个事件处理函数 `sl_bt_on_event`，用于处理由 BLE 栈生成的各种蓝牙低功耗 (BLE) 事件。此函数使用 switch 语句区分事件类型，例如当 BLE 设备启动时以及接收到附近设备的广告报告时。在接收到启动事件后，它初始化串行通信，配置 GPIO 引脚以控制天线，并以指定参数开始扫描 BLE 设备。

当扫描过程检测到来自 BLE 设备的广告报告时，会触发 `sl_bt_evt_scanner_legacy_advertisement_report_id` 案例。在这种情况下，函数会为每个检测到的设备递增计数器，并提取关键信息，包括设备的地址、RSSI、频道和本地名称。它利用辅助函数 `get_complete_local_name_from_ble_advertisement` 从广告数据中检索设备的完整名称，然后将其打印到串行输出。

辅助函数 `get_complete_local_name_from_ble_advertisement` 遍历广告数据以定位完整的本地名称字段。它检查每个广告记录是否包含与完整本地名称对应的类型，并将其作为字符串返回。如果未找到完整名称，函数返回“N/A”。这种系统化的方法使应用程序能够有效地发现和识别附近的 BLE 设备，并在扫描过程中提供有价值的信息。

### BLE 服务器/客户端

如前所述，XIAO MG24 可以充当服务器和客户端。让我们看看作为服务器的程序以及如何使用它。在将以下程序上传到 XIAO 后，它将充当服务器并向所有连接到 XIAO 的蓝牙设备发送“Hello World”消息。

```cpp
// 服务器代码
#define RF_SW_PW_PIN PB5
#define RF_SW_PIN PB4

bool notification_enabled = false;

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  Serial.begin(115200);
  Serial.println("Silicon Labs BLE 发送 Hello World 示例");

  // 打开天线功能
  pinMode(RF_SW_PW_PIN, OUTPUT);
  digitalWrite(RF_SW_PW_PIN, HIGH);

  delay(100);

  // HIGH -> 使用外部天线 / LOW -> 使用内置天线
  pinMode(RF_SW_PIN, OUTPUT);
  digitalWrite(RF_SW_PIN, LOW);
}

void loop() {
  if (notification_enabled) {
    // 每两秒发送一次通知，消息为 'hello world'
    send_helloworld_notification();
  }
  delay(2000);
}

static void ble_initialize_gatt_db();
static void ble_start_advertising();

static const uint8_t advertised_name[] = "XIAO_MG24 Server";  // BLE 设备名称
static uint16_t gattdb_session_id;
static uint16_t generic_access_service_handle;
static uint16_t name_characteristic_handle;
static uint16_t my_service_handle;
static uint16_t led_control_characteristic_handle;
static uint16_t notify_characteristic_handle;

/**************************************************************************/ /**
 * 蓝牙栈事件处理器
 * 当 BLE 栈发生事件时调用
 *
 * @param[in] evt 来自蓝牙栈的事件
 *****************************************************************************/
void sl_bt_on_event(sl_bt_msg_t *evt) {
  switch (SL_BT_MSG_ID(evt->header)) {
    // -------------------------------
    // 此事件表示设备已启动，且无线电已准备好。
    // 在接收到此启动事件之前，请勿调用任何栈命令！
    case sl_bt_evt_system_boot_id:
      {
        Serial.println("BLE 栈已启动");

        // 初始化应用程序特定的 GATT 表
        ble_initialize_gatt_db();

        // 开始广播
        ble_start_advertising();
        Serial.println("BLE 广播已启动");
      }
      break;

    // -------------------------------
    // 此事件表示已打开新连接
    case sl_bt_evt_connection_opened_id:
      Serial.println("BLE 连接已打开");
      break;

    // -------------------------------
    // 此事件表示连接已关闭
    case sl_bt_evt_connection_closed_id:
      Serial.println("BLE 连接已关闭");
      // 重新启动广播
      ble_start_advertising();
      Serial.println("BLE 广播已重新启动");
      break;

    // -------------------------------
    // 此事件表示远程 GATT 客户端更改了本地 GATT 数据库中属性的值
    case sl_bt_evt_gatt_server_attribute_value_id:
      // 检查更改的特性是否为 LED 控制
      if (led_control_characteristic_handle == evt->data.evt_gatt_server_attribute_value.attribute) {
        Serial.println("收到 LED 控制特性数据");
        // 检查接收到的数据长度
        if (evt->data.evt_gatt_server_attribute_value.value.len == 0) {
          break;
        }
        // 获取接收到的字节
        uint8_t received_data = evt->data.evt_gatt_server_attribute_value.value.data[0];
        // 根据接收到的数据打开/关闭 LED
        // 如果接收到 '0' - 关闭 LED
        // 如果接收到 '1' - 打开 LED
        if (received_data == 0x00) {
          digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
          Serial.println("LED 关闭");
        } else if (received_data == 0x01) {
          Serial.println("LED 打开");
          digitalWrite(LED_BUILTIN, LED_BUILTIN_ACTIVE);
        }
      }
      break;

    // -------------------------------
    // 此事件在 GATT 特性状态更改时接收
    case sl_bt_evt_gatt_server_characteristic_status_id:
      // 如果 'Notify' 特性已更改
      if (evt->data.evt_gatt_server_characteristic_status.characteristic == notify_characteristic_handle) {
        // 客户端刚刚启用了通知 - 发送当前状态的通知
        if (evt->data.evt_gatt_server_characteristic_status.client_config_flags & sl_bt_gatt_notification) {
          Serial.println("通知已启用");
          notification_enabled = true;
        } else {
          Serial.println("通知已禁用");
          notification_enabled = false;
        }
      }
      break;

    // -------------------------------
    // 默认事件处理器
    default:
      break;
  }
}

/**************************************************************************/ /**
 * 如果启用了通知，则向客户端发送 BLE 通知
 *****************************************************************************/
static void send_helloworld_notification() {
  uint8_t str[12] = "Hello World";
  sl_status_t sc = sl_bt_gatt_server_notify_all(notify_characteristic_handle,
                                                sizeof(str),
                                                (const uint8_t *)&str);
  if (sc == SL_STATUS_OK) {
    Serial.println("发送通知！");
  }
}

/**************************************************************************/ /**
 * 启动 BLE 广播
 * 如果首次调用，则初始化广播
 *****************************************************************************/
static void ble_start_advertising() {
  static uint8_t advertising_set_handle = 0xff;
  static bool init = true;
  sl_status_t sc;

  if (init) {
    // 创建一个广播集
    sc = sl_bt_advertiser_create_set(&advertising_set_handle);
    app_assert_status(sc);

    // 将广播间隔设置为 100ms
    sc = sl_bt_advertiser_set_timing(
      advertising_set_handle,
      160,  // 最小广播间隔（毫秒 * 1.6）
      160,  // 最大广播间隔（毫秒 * 1.6）
      0,    // 广播持续时间
      0);   // 最大广播事件数
    app_assert_status(sc);

    init = false;
  }

  // 生成广播数据
  sc = sl_bt_legacy_advertiser_generate_data(advertising_set_handle, sl_bt_advertiser_general_discoverable);
  app_assert_status(sc);

  // 开始广播并启用连接
  sc = sl_bt_legacy_advertiser_start(advertising_set_handle, sl_bt_advertiser_connectable_scannable);
  app_assert_status(sc);
}

/**************************************************************************/ /**
 * 初始化 GATT 数据库
 * 创建一个新的 GATT 会话并添加某些服务和特性
 *****************************************************************************/
static void ble_initialize_gatt_db() {
  sl_status_t sc;
  // 创建一个新的 GATT 数据库
  sc = sl_bt_gattdb_new_session(&gattdb_session_id);
  app_assert_status(sc);

  // 将通用访问服务添加到 GATT 数据库
  const uint8_t generic_access_service_uuid[] = { 0x00, 0x18 };
  sc = sl_bt_gattdb_add_service(gattdb_session_id,
                                sl_bt_gattdb_primary_service,
                                SL_BT_GATTDB_ADVERTISED_SERVICE,
                                sizeof(generic_access_service_uuid),
                                generic_access_service_uuid,
                                &generic_access_service_handle);
  app_assert_status(sc);

  // 将设备名称特性添加到通用访问服务
  // 设备名称特性的值将被广播
  const sl_bt_uuid_16_t device_name_characteristic_uuid = { .data = { 0x00, 0x2A } };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              generic_access_service_handle,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0x00,
                                              0x00,
                                              device_name_characteristic_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              sizeof(advertised_name) - 1,
                                              sizeof(advertised_name) - 1,
                                              advertised_name,
                                              &name_characteristic_handle);
  app_assert_status(sc);

  // 启动通用访问服务
  sc = sl_bt_gattdb_start_service(gattdb_session_id, generic_access_service_handle);
  app_assert_status(sc);

  // 将我的 BLE 服务添加到 GATT 数据库
  // UUID: de8a5aac-a99b-c315-0c80-60d4cbb51224
  const uuid_128 my_service_uuid = {
    .data = { 0x24, 0x12, 0xb5, 0xcb, 0xd4, 0x60, 0x80, 0x0c, 0x15, 0xc3, 0x9b, 0xa9, 0xac, 0x5a, 0x8a, 0xde }
  };
  sc = sl_bt_gattdb_add_service(gattdb_session_id,
                                sl_bt_gattdb_primary_service,
                                SL_BT_GATTDB_ADVERTISED_SERVICE,
                                sizeof(my_service_uuid),
                                my_service_uuid.data,
                                &my_service_handle);
  app_assert_status(sc);

  // 将 'LED 控制' 特性添加到 Blinky 服务
  // UUID: 5b026510-4088-c297-46d8-be6c736a087a
  const uuid_128 led_control_characteristic_uuid = {
    .data = { 0x7a, 0x08, 0x6a, 0x73, 0x6c, 0xbe, 0xd8, 0x46, 0x97, 0xc2, 0x88, 0x40, 0x10, 0x65, 0x02, 0x5b }
  };
  uint8_t led_char_init_value = 0;
  sc = sl_bt_gattdb_add_uuid128_characteristic(gattdb_session_id,
                                               my_service_handle,
                                               SL_BT_GATTDB_CHARACTERISTIC_READ | SL_BT_GATTDB_CHARACTERISTIC_WRITE,
                                               0x00,
                                               0x00,
                                               led_control_characteristic_uuid,
                                               sl_bt_gattdb_fixed_length_value,
                                               1,                            // 最大长度
                                               sizeof(led_char_init_value),  // 初始值长度
                                               &led_char_init_value,         // 初始值
                                               &led_control_characteristic_handle);

  // 启动 Blinky 服务
  sc = sl_bt_gattdb_start_service(gattdb_session_id, my_service_handle);
  app_assert_status(sc);

  // 将 'Notify' 特性添加到我的 BLE 服务
  // UUID: 61a885a4-41c3-60d0-9a53-6d652a70d29c
  const uuid_128 btn_report_characteristic_uuid = {
    .data = { 0x9c, 0xd2, 0x70, 0x2a, 0x65, 0x6d, 0x53, 0x9a, 0xd0, 0x60, 0xc3, 0x41, 0xa4, 0x85, 0xa8, 0x61 }
  };
  uint8_t notify_char_init_value = 0;
  sc = sl_bt_gattdb_add_uuid128_characteristic(gattdb_session_id,
                                               my_service_handle,
                                               SL_BT_GATTDB_CHARACTERISTIC_READ | SL_BT_GATTDB_CHARACTERISTIC_NOTIFY,
                                               0x00,
                                               0x00,
                                               btn_report_characteristic_uuid,
                                               sl_bt_gattdb_fixed_length_value,
                                               1,                               // 最大长度
                                               sizeof(notify_char_init_value),  // 初始值长度
                                               &notify_char_init_value,         // 初始值
                                               &notify_characteristic_handle);

  // 启动我的 BLE 服务
  sc = sl_bt_gattdb_start_service(gattdb_session_id, my_service_handle);
  app_assert_status(sc);

  // 提交 GATT 数据库更改
  sc = sl_bt_gattdb_commit(gattdb_session_id);
  app_assert_status(sc);
}

#ifndef BLE_STACK_SILABS
#error "此示例仅兼容 Silicon Labs BLE 栈。请在 'Tools > Protocol stack' 中选择 'BLE (Silabs)'。"
#endif
```

同时，您可以在主要的移动应用商店中搜索并下载 **nRF Connect** 应用程序，该应用程序允许您的手机搜索并连接蓝牙设备。

- 安卓: [nRF Connect](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en)
- IOS: [nRF Connect](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)

下载软件后，请按照以下步骤搜索并连接 XIAO_MG24，您将看到广播的 "Hello World"。

<table align="center">
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/BLEServer-1.jpg" style={{width:200, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/BLEServer-2.jpg" style={{width:200, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/BLEServer-3.jpg" style={{width:200, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/BLEServer-4.jpg" style={{width:200, height:'auto'}}/></div></td>
	</tr>
</table>

如果您希望使用另一个 XIAO MG24 作为客户端来接收来自服务器的消息，那么您可以为客户端 XIAO 使用以下过程。

```cpp
// 客户端代码
#define RF_SW_PW_PIN PB5
#define RF_SW_PIN PB4

// 连接状态
enum conn_state_t {
  ST_BOOT,
  ST_SCAN,
  ST_CONNECT,
  ST_SERVICE_DISCOVER,
  ST_CHAR_DISCOVER,
  ST_READY
};

conn_state_t connection_state = ST_BOOT;
uint8_t connection_handle = __UINT8_MAX__;
uint32_t blinky_service_handle = __UINT32_MAX__;
uint16_t led_control_char_handle = __UINT16_MAX__;
bool gatt_procedure_in_progress = false;

// 如果没有内置按钮，请设置一个连接按钮的引脚
#ifndef BTN_BUILTIN
#define BTN_BUILTIN D0
#endif

void setup() {
  // 将内置 LED 设置为输出
  pinMode(LED_BUILTIN, OUTPUT);
  // 关闭内置 LED
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  // 将内置按钮设置为输入
  pinMode(BTN_BUILTIN, INPUT);
  // 启动串口
  Serial.begin(115200);

  // 打开天线功能
  pinMode(RF_SW_PW_PIN, OUTPUT);
  digitalWrite(RF_SW_PW_PIN, HIGH);

  delay(100);

  // HIGH -> 使用外部天线 / LOW -> 使用内置天线
  pinMode(RF_SW_PIN, OUTPUT);
  digitalWrite(RF_SW_PIN, LOW);
}

void loop() {
  // 静态变量，用于记住按钮的前一个状态
  static uint8_t btn_state_prev = LOW;
  // 如果连接已完全建立且没有正在进行的 GATT 操作
  if (connection_state == ST_READY && !gatt_procedure_in_progress) {
    // 读取按钮的当前状态
    uint8_t btn_state = digitalRead(BTN_BUILTIN);
    // 如果当前状态与前一个状态不同
    if (btn_state_prev != btn_state) {
      // 更新前一个状态
      btn_state_prev = btn_state;
      // 反转状态（SL 板按钮按下时为 0，释放时为 1）
      uint8_t btn_state_inv = !btn_state;
      // 记录状态变化
      Serial.print("发送按钮状态: ");
      Serial.println(btn_state_inv);
      // 通过写入其他设备的 LED 控制特性，通过 BLE 发送新状态
      sl_status_t sc = sl_bt_gatt_write_characteristic_value(connection_handle, led_control_char_handle, sizeof(uint8_t), &btn_state_inv);
      app_assert_status(sc);
      gatt_procedure_in_progress = true;
    }
  }
}

// Blinky 服务
// UUID: de8a5aac-a99b-c315-0c80-60d4cbb51224
const uuid_128 blinky_service_uuid = {
  .data = { 0x24, 0x12, 0xb5, 0xcb, 0xd4, 0x60, 0x80, 0x0c, 0x15, 0xc3, 0x9b, 0xa9, 0xac, 0x5a, 0x8a, 0xde }
};

// LED 控制特性
// UUID: 5b026510-4088-c297-46d8-be6c736a087a
const uuid_128 led_control_characteristic_uuid = {
  .data = { 0x7a, 0x08, 0x6a, 0x73, 0x6c, 0xbe, 0xd8, 0x46, 0x97, 0xc2, 0x88, 0x40, 0x10, 0x65, 0x02, 0x5b }
};
const uint8_t advertised_name[] = "XIAO_MG24 Server";

static bool find_complete_local_name_in_advertisement(sl_bt_evt_scanner_legacy_advertisement_report_t* response);

/**************************************************************************/ /**
 * 蓝牙堆栈事件处理程序
 * 当 BLE 堆栈上发生事件时调用
 *
 * @param[in] evt 来自蓝牙堆栈的事件
 *****************************************************************************/
void sl_bt_on_event(sl_bt_msg_t* evt) {
  static uint32_t scan_report_num = 0u;
  sl_status_t sc;

  switch (SL_BT_MSG_ID(evt->header)) {
    // 当 BLE 设备成功启动时接收到此事件
    case sl_bt_evt_system_boot_id:
      // 打印欢迎消息
      Serial.println();
      Serial.println("Silicon Labs BLE 灯开关客户端示例");
      Serial.println("BLE 堆栈已启动");
      // 开始扫描其他 BLE 设备
      sc = sl_bt_scanner_set_parameters(sl_bt_scanner_scan_mode_active, 16, 16);
      app_assert_status(sc);
      sc = sl_bt_scanner_start(sl_bt_scanner_scan_phy_1m,
                               sl_bt_scanner_discover_generic);
      app_assert_status(sc);
      Serial.println("开始扫描...");
      connection_state = ST_SCAN;
      break;

    // 当我们扫描到另一个 BLE 设备的广播时接收到此事件
    case sl_bt_evt_scanner_legacy_advertisement_report_id:
      scan_report_num++;
      Serial.print(" -> #");
      Serial.print(scan_report_num);
      Serial.print(" | 地址: ");
      for (int i = 5; i >= 0; i--) {
        Serial.printf("%02x", evt->data.evt_scanner_legacy_advertisement_report.address.addr[i]);
        if (i > 0) {
          Serial.print(":");
        }
      }
      Serial.print(" | RSSI: ");
      Serial.print(evt->data.evt_scanner_legacy_advertisement_report.rssi);
      Serial.print(" dBm");
      Serial.print(" | 通道: ");
      Serial.print(evt->data.evt_scanner_legacy_advertisement_report.channel);
      Serial.print(" | 名称: ");
      Serial.println(find_complete_local_name_in_advertisement(&(evt->data.evt_scanner_legacy_advertisement_report)));

      // 如果我们找到其他设备的名称
      if (find_complete_local_name_in_advertisement(&(evt->data.evt_scanner_legacy_advertisement_report))) {
        Serial.println("目标设备已找到!");
        Serial.print("正在连接到 ");
        for (int i = 5; i >= 0; i--) {
          Serial.printf("%02x", evt->data.evt_scanner_legacy_advertisement_report.address.addr[i]);
          if (i > 0) {
            Serial.print(":");
          }
        }
        Serial.println(" ");

        // 停止扫描
        sc = sl_bt_scanner_stop();
        app_assert_status(sc);
        // 连接到设备
        sc = sl_bt_connection_open(evt->data.evt_scanner_legacy_advertisement_report.address,
                                   evt->data.evt_scanner_legacy_advertisement_report.address_type,
                                   sl_bt_gap_phy_1m,
                                   NULL);
        // app_assert_status(sc);
        connection_state = ST_CONNECT;

        Serial.println("我们现在已连接到 BLE 服务器");
      }
      break;

    // 当 BLE 连接已打开时接收到此事件
    case sl_bt_evt_connection_opened_id:
      Serial.println("连接已打开");
      digitalWrite(LED_BUILTIN, LED_BUILTIN_ACTIVE);
      connection_handle = evt->data.evt_connection_opened.connection;
      // 在连接的设备上发现 Health Thermometer 服务
      sc = sl_bt_gatt_discover_primary_services_by_uuid(connection_handle,
                                                        sizeof(blinky_service_uuid),
                                                        blinky_service_uuid.data);
      app_assert_status(sc);
      gatt_procedure_in_progress = true;
      connection_state = ST_SERVICE_DISCOVER;
      break;

    // 当 BLE 连接已关闭时接收到此事件
    case sl_bt_evt_connection_closed_id:
      Serial.println("连接已关闭");
      digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
      connection_handle = __UINT8_MAX__;
      // 重新开始扫描
      sc = sl_bt_scanner_start(sl_bt_scanner_scan_phy_1m,
                               sl_bt_scanner_discover_generic);
      app_assert_status(sc);
      Serial.println("重新开始扫描...");
      connection_state = ST_SCAN;
      break;

    // 当发现新服务时生成此事件
    case sl_bt_evt_gatt_service_id:
      Serial.println("GATT 服务已发现");
      // 存储已发现的 Thermometer 服务的句柄
      blinky_service_handle = evt->data.evt_gatt_service.service;
      break;

    // 当发现新特性时生成此事件
    case sl_bt_evt_gatt_characteristic_id:
      Serial.println("GATT 特性已发现");
      // 存储已发现的 Temperature Measurement 特性的句柄
      led_control_char_handle = evt->data.evt_gatt_characteristic.characteristic;
      break;

    // 当 GATT 操作完成时接收到此事件
    case sl_bt_evt_gatt_procedure_completed_id:
      Serial.println("GATT 操作已完成");
      gatt_procedure_in_progress = false;

      if (connection_state == ST_SERVICE_DISCOVER) {
        Serial.println("GATT 服务发现已完成");
        // 在连接的设备上发现 thermometer 特性
        sc = sl_bt_gatt_discover_characteristics_by_uuid(evt->data.evt_gatt_procedure_completed.connection,
                                                         blinky_service_handle,
                                                         sizeof(led_control_characteristic_uuid.data),
                                                         led_control_characteristic_uuid.data);
        app_assert_status(sc);
        gatt_procedure_in_progress = true;
        connection_state = ST_CHAR_DISCOVER;
        break;
      }

      if (connection_state == ST_CHAR_DISCOVER) {
        Serial.println("GATT 特性发现已完成");
        connection_state = ST_READY;
        break;
      }
      break;

    // 默认事件处理程序
    default:
      Serial.print("BLE 事件: 0x");
      Serial.println(SL_BT_MSG_ID(evt->header), HEX);
      break;
  }
}

/**************************************************************************/ /**
 * 在 BLE 广播中查找配置的名称
 *
 * @param[in] response 从扫描接收到的 BLE 响应事件
 *
 * @return 如果找到则返回 true，否则返回 false
 *****************************************************************************/
static bool find_complete_local_name_in_advertisement(sl_bt_evt_scanner_legacy_advertisement_report_t* response) {
  int i = 0;
  bool found = false;

  // 遍历响应数据
  while (i < (response->data.len - 1)) {
    uint8_t advertisement_length = response->data.data[i];
    uint8_t advertisement_type = response->data.data[i + 1];

    // 类型 0x09 = 完整本地名称，0x08 = 缩短名称
    // 如果字段类型匹配完整本地名称
    if (advertisement_type == 0x09) {
      // 检查设备名称是否匹配
      if (memcmp(response->data.data + i + 2, advertised_name, strlen((const char*)advertised_name)) == 0) {
        found = true;
        break;
      }
    }
    // 跳到下一个广播记录
    i = i + advertisement_length + 1;
  }
  return found;
}

#ifndef BLE_STACK_SILABS
#error "此示例仅与 Silicon Labs BLE 堆栈兼容。请在 'Tools > Protocol stack' 中选择 'BLE (Silabs)'。"
#endif
```

上述程序将 XIAO 转变为一个客户端，并搜索附近的蓝牙设备。当蓝牙设备的 UUID 与您提供的 UUID 匹配时，它将连接到该设备并获取其特征值。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/BLEClient_result.png" style={{width:800, height:'auto'}}/></div>

#### 程序注释

让我们快速了解 BLE 服务器示例代码的工作原理。它首先导入了 BLE 功能所需的库。然后，您需要为服务和特征定义一个 UUID。

```c
// 将我的 BLE 服务添加到 GATT 数据库
// UUID: de8a5aac-a99b-c315-0c80-60d4cbb51224
const uuid_128 my_service_uuid = {
  .data = { 0x24, 0x12, 0xb5, 0xcb, 0xd4, 0x60, 0x80, 0x0c, 0x15, 0xc3, 0x9b, 0xa9, 0xac, 0x5a, 0x8a, 0xde }
};

// 将 'Notify' 特征添加到我的 BLE 服务
// UUID: 61a885a4-41c3-60d0-9a53-6d652a70d29c
const uuid_128 btn_report_characteristic_uuid = {
  .data = { 0x9c, 0xd2, 0x70, 0x2a, 0x65, 0x6d, 0x53, 0x9a, 0xd0, 0x60, 0xc3, 0x41, 0xa4, 0x85, 0xa8, 0x61 }
};
```

您可以保留默认的 UUID，也可以访问 [uuidgenerator.net](https://www.uuidgenerator.net/) 来为您的服务和特征生成随机 UUID。

接下来，您创建一个名为 “XIAO_MG24 Server” 的 BLE 设备。您可以将此名称更改为您喜欢的任何名称。在接下来的代码中，您将 BLE 设备设置为服务器。之后，您为 BLE 服务器创建一个服务，并使用之前定义的 UUID。

```c
sl_status_t sc;
// 创建一个新的 GATT 数据库会话
sc = sl_bt_gattdb_new_session(&gattdb_session_id);
app_assert_status(sc);

// 将通用访问服务添加到 GATT 数据库
const uint8_t generic_access_service_uuid[] = { 0x00, 0x18 };
sc = sl_bt_gattdb_add_service(gattdb_session_id,
                              sl_bt_gattdb_primary_service,
                              SL_BT_GATTDB_ADVERTISED_SERVICE,
                              sizeof(generic_access_service_uuid),
                              generic_access_service_uuid,
                              &generic_access_service_handle);
app_assert_status(sc);

// 将设备名称特征添加到通用访问服务
// 设备名称特征的值将被广播
const sl_bt_uuid_16_t device_name_characteristic_uuid = { .data = { 0x00, 0x2A } };
sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                            generic_access_service_handle,
                                            SL_BT_GATTDB_CHARACTERISTIC_READ,
                                            0x00,
                                            0x00,
                                            device_name_characteristic_uuid,
                                            sl_bt_gattdb_fixed_length_value,
                                            sizeof(advertised_name) - 1,
                                            sizeof(advertised_name) - 1,
                                            advertised_name,
                                            &name_characteristic_handle);
app_assert_status(sc);

// 启动通用访问服务
sc = sl_bt_gattdb_start_service(gattdb_session_id, generic_access_service_handle);
app_assert_status(sc);

// 将我的 BLE 服务添加到 GATT 数据库
// UUID: de8a5aac-a99b-c315-0c80-60d4cbb51224
const uuid_128 my_service_uuid = {
  .data = { 0x24, 0x12, 0xb5, 0xcb, 0xd4, 0x60, 0x80, 0x0c, 0x15, 0xc3, 0x9b, 0xa9, 0xac, 0x5a, 0x8a, 0xde }
};
sc = sl_bt_gattdb_add_service(gattdb_session_id,
                              sl_bt_gattdb_primary_service,
                              SL_BT_GATTDB_ADVERTISED_SERVICE,
                              sizeof(my_service_uuid),
                              my_service_uuid.data,
                              &my_service_handle);
app_assert_status(sc);
```

然后，您为该服务设置特征。如您所见，您还使用了之前定义的 UUID，并需要传递特征的属性作为参数。在本例中，属性为：READ 和 NOTIFY。

```c
// 将 'Notify' 特征添加到我的 BLE 服务
// UUID: 61a885a4-41c3-60d0-9a53-6d652a70d29c
const uuid_128 btn_report_characteristic_uuid = {
  .data = { 0x9c, 0xd2, 0x70, 0x2a, 0x65, 0x6d, 0x53, 0x9a, 0xd0, 0x60, 0xc3, 0x41, 0xa4, 0x85, 0xa8, 0x61 }
};
uint8_t notify_char_init_value = 0;
sc = sl_bt_gattdb_add_uuid128_characteristic(gattdb_session_id,
                                              my_service_handle,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ | SL_BT_GATTDB_CHARACTERISTIC_NOTIFY,
                                              0x00,
                                              0x00,
                                              btn_report_characteristic_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              1,                               // 最大长度
                                              sizeof(notify_char_init_value),  // 初始值长度
                                              &notify_char_init_value,         // 初始值
                                              &notify_characteristic_handle);

// 启动我的 BLE 服务
sc = sl_bt_gattdb_start_service(gattdb_session_id, my_service_handle);
app_assert_status(sc);

// 提交 GATT 数据库的更改
sc = sl_bt_gattdb_commit(gattdb_session_id);
app_assert_status(sc);
```

创建特征后，您可以使用 `sl_bt_gatt_server_notify_all()` 方法设置其值。在本例中，我们将值设置为文本 “Hello World”。您可以将此文本更改为您喜欢的任何内容。在未来的项目中，此文本可以是传感器读数或灯的状态，例如。

最后，您可以启动服务和广播，以便其他 BLE 设备可以扫描并找到此 BLE 设备。

```c
// 开始广播
ble_start_advertising();
```

这是一个关于如何创建 BLE 服务器的简单示例。该程序的功能是每两秒发送一次通知，内容为 "Hello World"。

### BLE 传感器数据交换

接下来，我们将进入实际案例。在这个案例中，我们将使用 XIAO MG24 的 `getCPUTemp()` 函数来测量当前 MCU 的温度，然后通过蓝牙将 MCU 的温度值发送到另一个 XIAO MG24，以模拟健康温度计。

我们需要准备两个 XIAO，一个作为服务器，一个作为客户端。以下是作为服务器的示例程序。作为服务器的 XIAO 主要有以下任务：
- 首先，使用 `getCPUTemp()` 函数获取当前 MCU 的温度；
- 其次，创建蓝牙服务器；
- 第三，通过蓝牙广播温度值；
- 第四，显示实时温度。

```c
// 服务器端

/*
   BLE 健康温度计示例

   此示例实现了一个最小的 BLE 健康温度计配置文件，用于通过 BLE 提供温度测量数据。

   启动时，程序将以配置的名称启动 BLE 广播，然后接受任何传入的连接。当设备连接并启用健康温度计特性的指示时，
   设备将发送其 CPU 温度读数作为温度计数据。
   使用 EFR Connect 应用程序，您可以通过进入“Demo”选项卡并选择“Health Thermometer”来测试此功能。
   或者，您可以通过将另一个 BLE 板刷写为 'ble_health_thermometer_client' 示例来测试此示例，
   并让两个板通过 BLE 交换温度测量数据。

   有关 API 使用的更多信息，请访问：https://docs.silabs.com/bluetooth/latest/bluetooth-stack-api/

   此示例仅适用于 'BLE (Silabs)' 协议栈变体。

   您可以使用 EFR Connect 应用程序测试温度计设备：
    - https://play.google.com/store/apps/details?id=com.siliconlabs.bledemo
    - https://apps.apple.com/us/app/efr-connect-ble-mobile-app/id1030932759

   兼容的开发板：
   - Arduino Nano Matter
   - SparkFun Thing Plus MGM240P
   - xG27 DevKit
   - xG24 Explorer Kit
   - xG24 Dev Kit
   - BGM220 Explorer Kit
   - Ezurio Lyra 24P 20dBm Dev Kit
   - Seeed Studio XIAO MG24 (Sense)

   作者: Tamas Jozsi (Silicon Labs)
 */
 
#define RF_SW_PW_PIN PB5
#define RF_SW_PIN PB4

static void handle_temperature_indication();
static void ble_initialize_gatt_db();
static void ble_start_advertising();

const uint8_t advertised_name[] = "XIAOMG24_BLE";
uint8_t connection_handle = 0u;
uint16_t temp_measurement_characteristic_handle = 0u;
bool indication_enabled = false;

void setup()
{
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  Serial.begin(115200);
  
  // 启用天线功能
  pinMode(RF_SW_PW_PIN, OUTPUT);  
  digitalWrite(RF_SW_PW_PIN, HIGH);

  delay(100);

  // HIGH -> 使用外部天线 / LOW -> 使用内置天线
  pinMode(RF_SW_PIN, OUTPUT);  
  digitalWrite(RF_SW_PIN, LOW);
}

void loop()
{
  handle_temperature_indication();
}

/**************************************************************************//**
 * 如果启用了指示，则通过 BLE 向连接的设备发送当前温度的指示，然后等待一秒钟
 *****************************************************************************/
static void handle_temperature_indication()
{
  // 如果未启用指示，则立即返回
  if (!indication_enabled) {
    return;
  }

  // 获取当前 CPU 温度
  float temperature = getCPUTemp();

  // 将温度转换为 IEEE 11073 浮点值
  int32_t millicelsius = (int32_t)(temperature * 1000);
  uint8_t buffer[5];
  uint32_t tmp_value = ((uint32_t)millicelsius & 0x00ffffffu) | ((uint32_t)(-3) << 24);
  buffer[0] = 0;
  buffer[1] = tmp_value & 0xff;
  buffer[2] = (tmp_value >> 8) & 0xff;
  buffer[3] = (tmp_value >> 16) & 0xff;
  buffer[4] = (tmp_value >> 24) & 0xff;

  // 发送指示
  sl_bt_gatt_server_send_indication(connection_handle, temp_measurement_characteristic_handle, sizeof(buffer), buffer);

  // 记录温度
  Serial.print("已发送温度指示 - 当前温度: ");
  Serial.print(temperature);
  Serial.println(" C");

  // 等待一秒钟
  delay(1000);
}

/**************************************************************************//**
 * 蓝牙栈事件处理程序
 * 当蓝牙栈上发生事件时调用
 *
 * @param[in] evt 来自蓝牙栈的事件
 *****************************************************************************/
void sl_bt_on_event(sl_bt_msg_t *evt)
{
  switch (SL_BT_MSG_ID(evt->header)) {
    // 当 BLE 设备成功启动时接收到此事件
    case sl_bt_evt_system_boot_id:
    {
      // 打印欢迎信息
      Serial.begin(115200);
      Serial.println();
      Serial.println("Silicon Labs BLE 健康温度计示例");
      Serial.println("BLE 栈已启动");
      // 初始化应用程序特定的 GATT 数据库
      ble_initialize_gatt_db();
      // 开始广播
      ble_start_advertising();
    }
    break;

    // 当打开 BLE 连接时接收到此事件
    case sl_bt_evt_connection_opened_id:
      // 存储连接句柄，用于发送指示
      connection_handle = evt->data.evt_connection_opened.connection;
      Serial.println("连接已打开");
      digitalWrite(LED_BUILTIN, LED_BUILTIN_ACTIVE);
      break;

    // 当关闭 BLE 连接时接收到此事件
    case sl_bt_evt_connection_closed_id:
      // 重置存储的值
      connection_handle = 0u;
      indication_enabled = false;
      Serial.println("连接已关闭");
      digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
      // 重新启动广播
      ble_start_advertising();
      break;

    // 当 GATT 特性状态发生变化时接收到此事件
    case sl_bt_evt_gatt_server_characteristic_status_id:
    {
      // 如果温度测量特性已更改
      if (evt->data.evt_gatt_server_characteristic_status.characteristic == temp_measurement_characteristic_handle) {
        uint16_t client_config_flags = evt->data.evt_gatt_server_characteristic_status.client_config_flags;
        uint8_t status_flags = evt->data.evt_gatt_server_characteristic_status.status_flags;
        if ((client_config_flags == 0x02) && (status_flags == 0x01)) {
          // 如果客户端配置标志中启用了指示 (0x02)，并且状态标志显示这是一个更改
          Serial.println("温度指示已启用");
          indication_enabled = true;
        } else if ((client_config_flags == 0x00) && (status_flags == 0x01)) {
          // 如果客户端配置标志中禁用了指示 (0x00)，并且状态标志显示这是一个更改
          Serial.println("温度指示已禁用");
          indication_enabled = false;
        }
      }
    }
    break;

    // 默认事件处理程序
    default:
      Serial.print("BLE 事件: 0x");
      Serial.println(SL_BT_MSG_ID(evt->header), HEX);
      break;
  }
}

/**************************************************************************//**
 * 开始 BLE 广播
 * 如果是首次调用，则初始化广播
 *****************************************************************************/
static void ble_start_advertising()
{
  static uint8_t advertising_set_handle = 0xff;
  static bool init = true;
  sl_status_t sc;

  if (init) {
    // 创建一个广播集
    sc = sl_bt_advertiser_create_set(&advertising_set_handle);
    app_assert_status(sc);

    // 设置广播间隔为 100ms
    sc = sl_bt_advertiser_set_timing(
      advertising_set_handle,
      160,   // 最小广播间隔（毫秒 * 1.6）
      160,   // 最大广播间隔（毫秒 * 1.6）
      0,     // 广播持续时间
      0);    // 最大广播事件数
    app_assert_status(sc);

    init = false;
  }

  // 生成广播数据
  sc = sl_bt_legacy_advertiser_generate_data(advertising_set_handle, sl_bt_advertiser_general_discoverable);
  app_assert_status(sc);

  // 开始广播并启用连接
  sc = sl_bt_legacy_advertiser_start(advertising_set_handle, sl_bt_advertiser_connectable_scannable);
  app_assert_status(sc);

  Serial.print("已开始广播，名称为 '");
  Serial.print((const char*)advertised_name);
  Serial.println("'...");
}

/**************************************************************************//**
 * 初始化 GATT 数据库
 * 创建一个新的 GATT 会话并添加某些服务和特性
 *****************************************************************************/
static void ble_initialize_gatt_db()
{
  sl_status_t sc;
  uint16_t gattdb_session_id;
  uint16_t service_handle;
  uint16_t device_name_characteristic_handle;
  uint16_t temp_type_characteristic_handle;

  // 创建一个新的 GATT 数据库
  sc = sl_bt_gattdb_new_session(&gattdb_session_id);
  app_assert_status(sc);

  // 通用访问服务
  const uint8_t generic_access_service_uuid[] = { 0x00, 0x18 };
  sc = sl_bt_gattdb_add_service(gattdb_session_id,
                                sl_bt_gattdb_primary_service,
                                SL_BT_GATTDB_ADVERTISED_SERVICE,
                                sizeof(generic_access_service_uuid),
                                generic_access_service_uuid,
                                &service_handle);
  app_assert_status(sc);

  // 设备名称特性
  const sl_bt_uuid_16_t device_name_characteristic_uuid = { .data = { 0x00, 0x2A } };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service_handle,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0x00,
                                              0x00,
                                              device_name_characteristic_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              sizeof(advertised_name) - 1,
                                              sizeof(advertised_name) - 1,
                                              advertised_name,
                                              &device_name_characteristic_handle);
  app_assert_status(sc);

  sc = sl_bt_gattdb_start_service(gattdb_session_id, service_handle);
  app_assert_status(sc);

  // 健康温度计服务
  const uint8_t thermometer_service_uuid[] = { 0x09, 0x18 };
  sc = sl_bt_gattdb_add_service(gattdb_session_id,
                                sl_bt_gattdb_primary_service,
                                SL_BT_GATTDB_ADVERTISED_SERVICE,
                                sizeof(thermometer_service_uuid),
                                thermometer_service_uuid,
                                &service_handle);
  app_assert_status(sc);

  // 温度测量特性
  const sl_bt_uuid_16_t temp_measurement_characteristic_uuid = { .data = { 0x1C, 0x2A } };
  uint8_t temp_initial_value[5] = { 0, 0, 0, 0, 0 };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service_handle,
                                              SL_BT_GATTDB_CHARACTERISTIC_INDICATE,
                                              0x00,
                                              0x00,
                                              temp_measurement_characteristic_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              5,
                                              5,
                                              temp_initial_value,
                                              &temp_measurement_characteristic_handle);
  app_assert_status(sc);

  // 温度类型特性
  const sl_bt_uuid_16_t temp_type_characteristic_uuid = { .data = { 0x1D, 0x2A } };
  // 温度类型：身体 (2)
  uint8_t temp_type_initial_value = 2;
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service_handle,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0x00,
                                              0x00,
                                              temp_type_characteristic_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              1,
                                              1,
                                              &temp_type_initial_value,
                                              &temp_type_characteristic_handle);
  app_assert_status(sc);

  // 启动健康温度计服务
  sc = sl_bt_gattdb_start_service(gattdb_session_id, service_handle);
  app_assert_status(sc);

  // 提交 GATT 数据库更改
  sc = sl_bt_gattdb_commit(gattdb_session_id);
  app_assert_status(sc);
}

#ifndef BLE_STACK_SILABS
  #error "此示例仅兼容 Silicon Labs BLE 栈。请在 'Tools > Protocol stack' 中选择 'BLE (Silabs)'。"
#endif
```

在为其中一个 XIAO 上传程序后，如果程序运行顺利，那么您可以拿出手机并使用 nRF Connect APP 搜索名为 **XIAOMG24_BLE** 的蓝牙设备，连接它，并点击如下所示的按钮，您将收到温度数据的信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/BLEServer-5.jpg" style={{width:300, height:'auto'}}/></div>

接下来，我们需要拿出另一个 XIAO，它将作为客户端来收集和显示数据。

```c
// 客户端

/*
   BLE 健康温度计客户端示例

   此示例连接到运行“BLE 健康温度计”示例的另一个板，并通过 BLE 读取温度。

   启动时，程序将开始扫描运行“ble_health_thermometer”示例并以“Thermometer Example”广播的其他板。
   一旦找到其他板，它将建立连接，发现其服务和特性，然后订阅温度测量。
   订阅后，示例将定期从其他板接收温度数据，并将其打印到串口。

   有关 API 使用的更多信息，请访问：https://docs.silabs.com/bluetooth/latest/bluetooth-stack-api/

   此示例仅适用于“BLE (Silabs)”协议栈变体。

   兼容的开发板：
   - Arduino Nano Matter
   - SparkFun Thing Plus MGM240P
   - xG27 DevKit
   - xG24 Explorer Kit
   - xG24 Dev Kit
   - BGM220 Explorer Kit
   - Ezurio Lyra 24P 20dBm Dev Kit
   - Seeed Studio XIAO MG24 (Sense)

   作者: Tamas Jozsi (Silicon Labs)
 */

#define RF_SW_PW_PIN PB5
#define RF_SW_PIN PB4

void setup()
{
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  Serial.begin(115200);

  // 打开此天线功能
  pinMode(RF_SW_PW_PIN, OUTPUT);  
  digitalWrite(RF_SW_PW_PIN, HIGH);

  delay(100);

  // HIGH -> 使用外部天线 / LOW -> 使用内置天线
  pinMode(RF_SW_PIN, OUTPUT);  
  digitalWrite(RF_SW_PIN, LOW);
}

void loop()
{
}

// 连接状态
enum conn_state_t {
  ST_BOOT,
  ST_SCAN,
  ST_CONNECT,
  ST_SERVICE_DISCOVER,
  ST_CHAR_DISCOVER,
  ST_REQUEST_INDICATION,
  ST_RECEIVE_DATA
};

// IEEE 11073 浮点结构
typedef struct {
  uint8_t mantissa_l;
  uint8_t mantissa_m;
  int8_t mantissa_h;
  int8_t exponent;
} IEEE_11073_float;

static bool find_complete_local_name_in_advertisement(sl_bt_evt_scanner_legacy_advertisement_report_t *response);
static float translate_IEEE_11073_temperature_to_float(IEEE_11073_float const *IEEE_11073_value);

const uint8_t thermometer_service_uuid[] = { 0x09, 0x18 };
const sl_bt_uuid_16_t temp_measurement_characteristic_uuid = { .data = { 0x1C, 0x2A } };
const uint8_t advertised_name[] = "XIAOMG24_BLE";

uint32_t thermometer_service_handle = __UINT32_MAX__;
uint16_t temp_measurement_char_handle = __UINT16_MAX__;
conn_state_t connection_state = ST_BOOT;

/**************************************************************************//**
 * 蓝牙栈事件处理程序
 * 当 BLE 栈上发生事件时调用
 *
 * @param[in] evt 来自蓝牙栈的事件
 *****************************************************************************/
void sl_bt_on_event(sl_bt_msg_t *evt)
{
  sl_status_t sc;

  switch (SL_BT_MSG_ID(evt->header)) {
    // 当 BLE 设备成功启动时接收到此事件
    case sl_bt_evt_system_boot_id:
      // 打印欢迎信息
      Serial.println();
      Serial.println("Silicon Labs BLE 健康温度计客户端示例");
      Serial.println("BLE 栈已启动");
      // 开始扫描其他 BLE 设备
      sc = sl_bt_scanner_set_parameters(sl_bt_scanner_scan_mode_active, 16, 16);
      app_assert_status(sc);
      sc = sl_bt_scanner_start(sl_bt_scanner_scan_phy_1m,
                               sl_bt_scanner_discover_generic);
      app_assert_status(sc);
      Serial.println("开始扫描...");
      connection_state = ST_SCAN;
      break;

    // 当扫描到其他 BLE 设备的广播时接收到此事件
    case sl_bt_evt_scanner_legacy_advertisement_report_id:
      Serial.println("接收到 BLE 扫描报告");
      // 如果找到其他设备的名称
      if (find_complete_local_name_in_advertisement(&(evt->data.evt_scanner_legacy_advertisement_report))) {
        Serial.println("目标设备已找到");
        // 停止扫描
        sc = sl_bt_scanner_stop();
        app_assert_status(sc);
        // 连接到设备
        sc = sl_bt_connection_open(evt->data.evt_scanner_legacy_advertisement_report.address,
                                   evt->data.evt_scanner_legacy_advertisement_report.address_type,
                                   sl_bt_gap_phy_1m,
                                   NULL);
        app_assert_status(sc);
        connection_state = ST_CONNECT;
      }
      break;

    // 当打开 BLE 连接时接收到此事件
    case sl_bt_evt_connection_opened_id:
      Serial.println("连接已打开");
      digitalWrite(LED_BUILTIN, LED_BUILTIN_ACTIVE);
      // 在连接的设备上发现健康温度计服务
      sc = sl_bt_gatt_discover_primary_services_by_uuid(evt->data.evt_connection_opened.connection,
                                                        sizeof(thermometer_service_uuid),
                                                        thermometer_service_uuid);
      app_assert_status(sc);
      connection_state = ST_SERVICE_DISCOVER;
      break;

    // 当 BLE 连接关闭时接收到此事件
    case sl_bt_evt_connection_closed_id:
      Serial.println("连接已关闭");
      digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
      // 重新开始扫描
      sc = sl_bt_scanner_start(sl_bt_scanner_scan_phy_1m,
                               sl_bt_scanner_discover_generic);
      app_assert_status(sc);
      Serial.println("重新开始扫描...");
      connection_state = ST_SCAN;
      break;

    // 当发现新服务时生成此事件
    case sl_bt_evt_gatt_service_id:
      Serial.println("发现 GATT 服务");
      // 存储发现的温度计服务的句柄
      thermometer_service_handle = evt->data.evt_gatt_service.service;
      break;

    // 当发现新特性时生成此事件
    case sl_bt_evt_gatt_characteristic_id:
      Serial.println("发现 GATT 特性");
      // 存储发现的温度测量特性的句柄
      temp_measurement_char_handle = evt->data.evt_gatt_characteristic.characteristic;
      break;

    // 当 GATT 操作完成时接收到此事件
    case sl_bt_evt_gatt_procedure_completed_id:
      Serial.println("GATT 操作完成");

      if (connection_state == ST_SERVICE_DISCOVER) {
        Serial.println("GATT 服务发现完成");
        // 在连接的设备上发现温度计特性
        sc = sl_bt_gatt_discover_characteristics_by_uuid(evt->data.evt_gatt_procedure_completed.connection,
                                                         thermometer_service_handle,
                                                         sizeof(temp_measurement_characteristic_uuid.data),
                                                         temp_measurement_characteristic_uuid.data);
        app_assert_status(sc);
        connection_state = ST_CHAR_DISCOVER;
        break;
      }

      if (connection_state == ST_CHAR_DISCOVER) {
        Serial.println("GATT 特性发现完成");
        // 启用温度测量指示
        sc = sl_bt_gatt_set_characteristic_notification(evt->data.evt_gatt_procedure_completed.connection,
                                                        temp_measurement_char_handle,
                                                        sl_bt_gatt_indication);
        app_assert_status(sc);
        connection_state = ST_REQUEST_INDICATION;
        break;
      }

      if (connection_state == ST_REQUEST_INDICATION) {
        Serial.println("温度测量指示已启用");
        connection_state = ST_RECEIVE_DATA;
      }
      break;

    // 当接收到特性值（如指示）时接收到此事件
    case sl_bt_evt_gatt_characteristic_value_id:
    {
      Serial.println("接收到 GATT 数据");
      // 从事件中获取接收到的数据
      uint8_t* char_value = &(evt->data.evt_gatt_characteristic_value.value.data[0]);
      // 将其转换回浮点数
      float temperature = translate_IEEE_11073_temperature_to_float((IEEE_11073_float *)(char_value + 1));
      // 打印到串口
      Serial.print("接收到的温度：");
      Serial.print(temperature);
      Serial.println(" C");

      sc = sl_bt_gatt_send_characteristic_confirmation(evt->data.evt_gatt_characteristic_value.connection);
      app_assert_status(sc);
    }
    break;

    // 默认事件处理程序
    default:
      Serial.print("BLE 事件: 0x");
      Serial.println(SL_BT_MSG_ID(evt->header), HEX);
      break;
  }
}

/**************************************************************************//**
 * 在 BLE 广播中查找配置的名称
 *
 * @param[in] response 从扫描中接收到的 BLE 响应事件
 *
 * @return 如果找到返回 true，否则返回 false
 *****************************************************************************/
static bool find_complete_local_name_in_advertisement(sl_bt_evt_scanner_legacy_advertisement_report_t *response)
{
  int i = 0;
  bool found = false;

  // 遍历响应数据
  while (i < (response->data.len - 1)) {
    uint8_t advertisement_length = response->data.data[i];
    uint8_t advertisement_type = response->data.data[i + 1];

    // 类型 0x09 = 完整本地名称, 0x08 = 缩短名称
    // 如果字段类型匹配完整本地名称
    if (advertisement_type == 0x09) {
      // 检查设备名称是否匹配
      if (memcmp(response->data.data + i + 2, advertised_name, strlen((const char*)advertised_name)) == 0) {
        found = true;
        break;
      }
    }
    // 跳到下一个广播记录
    i = i + advertisement_length + 1;
  }
  return found;
}

/**************************************************************************//**
 * 将 IEEE-11073 温度值转换为浮点数
 *
 * @param[in] IEEE_11073_value 要转换的 IEEE 11073 浮点值
 *
 * @return 转换后的浮点值，失败时返回 NAN
 *****************************************************************************/
static float translate_IEEE_11073_temperature_to_float(IEEE_11073_float const *IEEE_11073_value)
{
  int32_t mantissa = 0;
  uint8_t mantissa_l;
  uint8_t mantissa_m;
  int8_t mantissa_h;
  int8_t exponent;

  // 错误参数：传递了 NULL 指针
  if (!IEEE_11073_value) {
    return NAN;
  }

  // 缓存字段
  mantissa_l = IEEE_11073_value->mantissa_l;
  mantissa_m = IEEE_11073_value->mantissa_m;
  mantissa_h = IEEE_11073_value->mantissa_h;
  exponent =  IEEE_11073_value->exponent;

  // IEEE-11073 标准 NaN 值
  if ((mantissa_l == 0xFF) && (mantissa_m == 0xFF) && (mantissa_h == 0x7F) && (exponent == 0x00)) {
    return NAN;
  }

  // 将 24 位有符号值转换为 32 位有符号值
  mantissa |= mantissa_h;
  mantissa <<= 8;
  mantissa |= mantissa_m;
  mantissa <<= 8;
  mantissa |= mantissa_l;
  mantissa <<= 8;
  mantissa >>= 8;

  return ((float)mantissa) * pow(10.0f, (float)exponent);
}

#ifndef BLE_STACK_SILABS
  #error "此示例仅兼容 Silicon Labs BLE 栈。请在 'Tools > Protocol stack' 中选择 'BLE (Silabs)'。"
#endif
```

最后，如果服务器和客户端程序运行顺利，您可以通过串口看到客户端打印以下信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/BLEClient_result-1.png" style={{width:700, height:'auto'}}/></div>

#### 程序注释

对于上述程序，我们将挑选一些重要部分进行解释。我们从服务器程序开始。

在程序的开头，我们定义了蓝牙服务器的名称，这个名称可以是您设置的名称，但需要记住它，因为您需要依赖这个名称来搜索该蓝牙设备。

```c
const uint8_t advertised_name[] = "XIAOMG24_BLE";
```

在教程的前面部分，我们已经讨论过，在服务器下会有特性（Characteristic），特性下会有值和其他内容。因此，当我们创建广告时，需要遵循这一原则。

```c
// 健康温度计服务
const uint8_t thermometer_service_uuid[] = { 0x09, 0x18 };
sc = sl_bt_gattdb_add_service(gattdb_session_id,
                              sl_bt_gattdb_primary_service,
                              SL_BT_GATTDB_ADVERTISED_SERVICE,
                              sizeof(thermometer_service_uuid),
                              thermometer_service_uuid,
                              &service_handle);
app_assert_status(sc);

// 温度测量特性
const sl_bt_uuid_16_t temp_measurement_characteristic_uuid = { .data = { 0x1C, 0x2A } };
uint8_t temp_initial_value[5] = { 0, 0, 0, 0, 0 };
sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                            service_handle,
                                            SL_BT_GATTDB_CHARACTERISTIC_INDICATE,
                                            0x00,
                                            0x00,
                                            temp_measurement_characteristic_uuid,
                                            sl_bt_gattdb_fixed_length_value,
                                            5,
                                            5,
                                            temp_initial_value,
                                            &temp_measurement_characteristic_handle);
app_assert_status(sc);
```

在上述程序中，您可以看到 `sl_bt_gattdb_add_service()` 用于创建服务器。参数是一个特定的 UUID：**0x1809**。根据 GATT 的规则，**0x1809** 表示温度计类型数据，而同一特性的 UUID：**0x2A1C** 也有特殊含义。在 GATT 中，它表示温度测量。这与我们的温度值情况相符，因此这里我将其定义为这样。您可以在[这里](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/GATT.pdf)阅读 GATT 为我们准备的一些特定 UUID 的含义。

当然，您也可以设置不遵循 GATT 标准的 UUID，只需确保这两个值是唯一的，并且不会影响客户端通过识别这些 UUID 找到值。您可以访问 [uuidgenerator.net](https://www.uuidgenerator.net/) 来为您的服务和特性创建随机 UUID。

最后，我们在 `loop` 中每秒测量一次 MCU 的温度值并进行广告。

接下来是客户端程序，这部分看起来会复杂得多。

在程序的开头，仍然是非常熟悉的内容。您需要确保这些内容与服务器端配置的一致。

```c
const uint8_t thermometer_service_uuid[] = { 0x09, 0x18 };
const sl_bt_uuid_16_t temp_measurement_characteristic_uuid = { .data = { 0x1C, 0x2A } };
const uint8_t advertised_name[] = "XIAOMG24_BLE";
```

接下来，我们将编写一个蓝牙堆栈事件处理函数，主要处理由各种蓝牙事件触发的回调任务，包括蓝牙设备的初始化、蓝牙的连接和断开，以及搜索附近的蓝牙设备。

```c
/**************************************************************************//**
 * 蓝牙堆栈事件处理器
 * 当蓝牙堆栈上发生事件时调用
 *
 * @param[in] evt 来自蓝牙堆栈的事件
 *****************************************************************************/
void sl_bt_on_event(sl_bt_msg_t *evt)
```

以下过程是服务器中查找温度值的关键。首先，在我们成功定位服务器 UUID 并找到服务器下的特性 UUID 后，我们将处理获取的数据，如以下代码片段所示。最后，通过串口打印出处理后的数据。这种解析方法与蓝牙的数据结构是一一对应的。

```c
void sl_bt_on_event(sl_bt_msg_t *evt)
{
  sl_status_t sc;

  switch (SL_BT_MSG_ID(evt->header)) {
    
    ...

    // 当接收到特性值（例如指示）时，会触发此事件
    case sl_bt_evt_gatt_characteristic_value_id:
    {
      Serial.println("接收到 GATT 数据");
      // 从事件中获取接收到的数据
      uint8_t* char_value = &(evt->data.evt_gatt_characteristic_value.value.data[0]);
      // 将其转换回浮点数
      float temperature = translate_IEEE_11073_temperature_to_float((IEEE_11073_float *)(char_value + 1));
      // 打印到串口
      Serial.print("接收到的温度：");
      Serial.print(temperature);
      Serial.println(" °C");

      sc = sl_bt_gatt_send_characteristic_confirmation(evt->data.evt_gatt_characteristic_value.connection);
      app_assert_status(sc);
    }
    break;

    ...
  
  }
}
```


:::tip
上述示例提供了一个单传感器单值的最简单示例，来源于 Silicon Labs。如果您希望更深入地了解 SiliconLabs BLE API 的使用，我们建议阅读以下教程。

- [SiliconLabs 蓝牙堆栈 API 参考](https://docs.silabs.com/bluetooth/latest/bluetooth-stack-api/)
:::

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>