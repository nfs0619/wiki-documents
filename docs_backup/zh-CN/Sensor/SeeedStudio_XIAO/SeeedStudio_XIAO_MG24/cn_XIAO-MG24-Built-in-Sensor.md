---
title: Seeed Studio XIAO MG24 Sense 内置传感器
description: 本文介绍如何使用 XIAO MG24 Sense 上的麦克风。
image: https://files.seeedstudio.com/wiki/mg24_mic/mg24.jpg
slug: /cn/xiao_mg24_sense_built_in_sensor
last_update:
  date: 05/15/2025
  author: Jason
keywords:
  - XIAO
  - MG24
sidebar_position: 3
---

# Seeed Studio XIAO MG24 Sense 内置传感器的使用

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## XIAO MG24 Sense IMU

### 内置传感器概述

**6轴IMU（惯性测量单元）** 像 **LSM6DS3TR-C** 这样的传感器集成了加速度计和陀螺仪，用于测量物体在三维空间中的运动和方向。具体来说，LSM6DS3TR-C 具有以下功能：

**加速度计功能：**
- 测量物体沿 X、Y 和 Z 轴的加速度。它能够感知物体的运动（例如静止、加速、减速）和倾斜变化（例如物体的角度）。
- 可用于检测步态、位置变化、振动等。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/xyz1.5.jpg" style={{width:320, height:'auto'}}/></div>

**陀螺仪功能：**
- 测量物体绕 X、Y 和 Z 轴的角速度，即物体的旋转。
- 可用于检测旋转、旋转速率和方向变化。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/xyz2.0.jpg" style={{width:320, height:'auto'}}/></div>

- **X轴角度（Roll）** 是绕 X 轴旋转方向的角度。
- **Y轴角度（Pitch）** 是绕 Y 轴旋转方向的角度。
- **Z轴角度（Yaw）** 是绕 Z 轴旋转方向的角度。

### 软件准备

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

点击 GitHub 下载链接以驱动六轴传感器。

### 代码实现
```cpp

#include <LSM6DS3.h>
#include <Wire.h>

// 创建 LSM6DS3 类的实例
LSM6DS3 myIMU(I2C_MODE, 0x6A);    // I2C 设备地址 0x6A
float aX, aY, aZ, gX, gY, gZ;
const float accelerationThreshold = 2.5; // 加速度阈值（单位：G）
const int numSamples = 119;
int samplesRead = numSamples;

void setup() {
  // 初始化设置
  Serial.begin(9600);
  while (!Serial);

  pinMode(PD5,OUTPUT);
  digitalWrite(PD5,HIGH);
  // 调用 .begin() 配置 IMU
  if (myIMU.begin() != 0) {
    Serial.println("设备错误");
  } else {
    Serial.println("aX,aY,aZ,gX,gY,gZ");
  }
}

void loop() {
  // 等待显著运动
  while (samplesRead == numSamples) {
    // 读取加速度数据
    aX = myIMU.readFloatAccelX();
    aY = myIMU.readFloatAccelY();
    aZ = myIMU.readFloatAccelZ();

    // 计算绝对值总和
    float aSum = fabs(aX) + fabs(aY) + fabs(aZ);

    // 检查是否超过阈值
    if (aSum >= accelerationThreshold) {
      // 重置读取样本计数
      samplesRead = 0;
      break;
    }
  }

  // 检查自上次检测到显著运动以来是否读取了所有所需样本
  while (samplesRead < numSamples) {
    // 检查是否有新的加速度和陀螺仪数据
    // 读取加速度和陀螺仪数据

    samplesRead++;

    // 以 CSV 格式打印数据
    Serial.print(myIMU.readFloatAccelX(), 3);
    Serial.print(',');
    Serial.print(myIMU.readFloatAccelY(), 3);
    Serial.print(',');
    Serial.print(myIMU.readFloatAccelZ(), 3);
    Serial.print(',');
    Serial.print(myIMU.readFloatGyroX(), 3);
    Serial.print(',');
    Serial.print(myIMU.readFloatGyroY(), 3);
    Serial.print(',');
    Serial.print(myIMU.readFloatGyroZ(), 3);
    Serial.println();

    if (samplesRead == numSamples) {
      // 如果是最后一个样本，添加一个空行
      Serial.println();
    }
  }
}
```
:::tip

由于 LSM6DS3 库的更新，如果您之前已经添加了该库，则需要重新下载 2.0.4 或更高版本，并将 ZIP 文件添加到 Arduino 中。

:::
### 功能概述
- **包含库文件**
  ```cpp
    #include <LSM6DS3.h> 
    #include <Wire.h>
  ```
  - 包含与 LSM6DS3 传感器通信的库。
  - 包含用于 I2C 通信的库。
    
- **创建传感器实例**
    - `LSM6DS3 myIMU(I2C_MODE, 0x6A)` 创建 LSM6DS3 类的实例，用于 IMU 传感器，指定 I2C 通信模式和设备地址 0x6A。

- **变量和常量**
    - `float aX, aY, aZ, gX, gY, gZ`: 用于存储加速度计和陀螺仪数据的变量。
    - `const float accelerationThreshold = 2.5`: 用于检测显著运动的阈值（单位：G）。
    - `const int numSamples = 119`: 检测显著运动后要收集的样本数量。
    - `int samplesRead = numSamples`: 将样本计数器初始化为总样本数，表示尚未收集数据。

- **基本设置**
  ```cpp
    pinMode(PD5,OUTPUT);
    digitalWrite(PD5,HIGH);
  ```

- 打开陀螺仪使能引脚。

- **数据处理**
    ```cpp
    aX = myIMU.readFloatAccelX();:
    aY = myIMU.readFloatAccelY();:
    aZ = myIMU.readFloatAccelZ();:
    float aSum = fabs(aX) + fabs(aY) + fabs(aZ);
    ``` 

  - 读取沿 X 轴的加速度。
  - 读取沿 Y 轴的加速度。
  - 读取沿 Z 轴的加速度。
  - 计算加速度数据绝对值的总和，`fabs()` 返回绝对值。

  ```cpp
    // 检查是否超过阈值
    if (aSum >= accelerationThreshold) {
      // 重置样本读取计数
      samplesRead = 0;
      break;
    }
  ```
  - 如果加速度绝对值的总和大于或等于设定的阈值，则将样本计数 `samplesRead` 重置为 0 并退出循环。

- **检查数据**
  ```cpp
  while (samplesRead < numSamples) {
    samplesRead++;
    .
    .
    .
    .
    .
    if (samplesRead == numSamples) {
      // 如果是最后一个样本，添加一个空行
      Serial.println();
    }
  }
  ```

  - 进入另一个循环并检查是否已读取所需数量的样本。
  - 增加 `samplesRead` 的计数。
  - 如果所有样本都已读取，则打印一个空行以分隔数据输出。

### 结果图表

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/six_resutl.png" style={{width:700, height:'auto'}}/></div>

### 更多示例

如果您需要更多示例代码，请点击：**"File" -> Example -> Seeed Arduino LSM6DS3"**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/33.png" style={{width:500, height:'auto'}}/></div>

## IMU 高级演示

### 硬件准备

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeeduino-XIAO-扩展板</th>
			<th>Seeed Studio XIAO MG24 Sense</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
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

### 软件准备

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/arduino_mouse.jpg" style={{width:500, height:'auto'}}/></div>

:::tip
我们需要在工具栏中选择对应的协议栈以烧录程序。
:::

<details>

<summary>程序代码</summary>

```cpp
#include <LSM6DS3.h>
#include "Wire.h"

#define DEVICE_NAME "XIAO MG24 Mouse"

#define IMU_ACC_X_THRESHOLD 10
#define IMU_ACC_Y_THRESHOLD 10

// 鼠标按钮事件
#define LMB_PRESSED 1

// HID 报告数据
struct mouse_data {
  int8_t delta_x;
  int8_t delta_y;
  uint8_t buttons;
};
static mouse_data report;

// HID 报告数据缓冲区
static uint8_t report_array[] = { 0x00, 0x00, 0x00 };

static uint8_t connection_handle = SL_BT_INVALID_CONNECTION_HANDLE;
static uint32_t bonding_handle = SL_BT_INVALID_BONDING_HANDLE;
static uint16_t hid_report;

// 设备信息服务
const uint8_t manufacturer[] = "Silicon Labs";
const uint8_t model_no[] = "1";
const uint8_t serial_no[] = "1";
const uint8_t hw_rev[] = "1";
const uint8_t fw_rev[] = "1";
const uint8_t sw_rev[] = "1";

static bd_addr ble_address = { 0x00u, 0x00u, 0x00u, 0x00u, 0x00u, 0x00u };
static bool button_press = false;
static bool button_press_prev = false;
static int32_t acc_x = 0, acc_y = 0;
static sl_status_t sc = SL_STATUS_OK;

static void ble_initialize_gatt_db();
static void ble_start_advertising();
static void mouse_button_callback();

// 可选连接一个按钮用于左键点击
#define MOUSE_BUTTON D1

LSM6DS3 myIMU(I2C_MODE, 0x6A);

void setup()
{
  // 初始化报告数据
  memset(&report, 0, sizeof(report));

  // 启用 IMU 电源
  pinMode(PD5, OUTPUT);
  digitalWrite(PD5, HIGH);
  delay(300);

  pinMode(MOUSE_BUTTON, INPUT_PULLUP);
  attachInterrupt(MOUSE_BUTTON, mouse_button_callback, CHANGE);

  Serial.begin(115200);

  Serial.println("XIAO MG24 BLE 鼠标");

  myIMU.begin();
  Serial.println("---");
  Serial.println("IMU 初始化完成");
}

void loop()
{
  // 更新“左键按下”位
  if (button_press) {
    report.buttons |= LMB_PRESSED;
    if (!button_press_prev) {
      button_press_prev = true;
      Serial.println("按钮按下");
    }
  } else {
    button_press_prev = false;
    report.buttons &= ~LMB_PRESSED;
  }

  // 更改 x 和 y 以适配板子的正确方向
  acc_y = (int32_t)(myIMU.readFloatAccelX() * 10.0f);
  acc_x = (int32_t)(myIMU.readFloatAccelY() * 10.0f * -1.0f);

  // 如果加速度值超过阈值（正方向或负方向），则分配阈值
  if (acc_x > IMU_ACC_X_THRESHOLD) {
    report.delta_x = IMU_ACC_X_THRESHOLD;
  } else if (acc_x < (-1 * IMU_ACC_X_THRESHOLD)) {
    report.delta_x = (-1 * IMU_ACC_X_THRESHOLD);
  } else {
    report.delta_x = acc_x;
  }

  if (acc_y > IMU_ACC_Y_THRESHOLD) {
    report.delta_y = IMU_ACC_Y_THRESHOLD;
  } else if (acc_y < (-1 * IMU_ACC_Y_THRESHOLD)) {
    report.delta_y = (-1 * IMU_ACC_Y_THRESHOLD);
  } else {
    report.delta_y = acc_y;
  }

  memcpy(report_array, &report, sizeof(report));
  if (connection_handle != SL_BT_INVALID_CONNECTION_HANDLE && bonding_handle != SL_BT_INVALID_BONDING_HANDLE) {
    // 使用 GATT 通知指示报告数据更改
    sc = sl_bt_gatt_server_notify_all(hid_report, sizeof(report_array), report_array);
    if (sc != SL_STATUS_OK) {
      Serial.print("sl_bt_gatt_server_notify_all() 返回错误代码 0x");
      Serial.println(sc, HEX);
    } else {
      Serial.print("光标 [delta-X: ");
      Serial.print(report.delta_x, DEC);
      Serial.print(" delta-Y: ");
      Serial.print(report.delta_y, DEC);
      Serial.print(" ] LMB: ");
      Serial.println(report.buttons, HEX);
    }
  }
}

/******************************************************************************
 * 鼠标按钮回调
 *****************************************************************************/
void mouse_button_callback()
{
  if (digitalRead(MOUSE_BUTTON) == LOW) {
    button_press = true;
  } else {
    button_press = false;
  }
}

/******************************************************************************
 * 蓝牙协议栈事件处理器
 * 当蓝牙协议栈发生事件时调用
 *
 * @param[in] evt 来自蓝牙协议栈的事件
 *****************************************************************************/
void sl_bt_on_event(sl_bt_msg_t* evt)
{
  sl_status_t sc = SL_STATUS_OK;
  uint8_t ble_address_type;

  switch (SL_BT_MSG_ID(evt->header)) {
    // -------------------------------
    // 此事件表示设备已启动且无线电已准备好
    case sl_bt_evt_system_boot_id:
    {
      // 获取 BLE 地址和地址类型
      sc = sl_bt_system_get_identity_address(&ble_address, &ble_address_type);
      app_assert_status(sc);

      // 打印欢迎信息
      Serial.begin(115200);
      Serial.println();
      Serial.println("蓝牙协议栈已启动");

      // 初始化应用程序特定的 GATT 数据库
      ble_initialize_gatt_db();

      // HID 输入设备需要强制安全级别和绑定
      sc = sl_bt_sm_configure(0, sl_bt_sm_io_capability_noinputnooutput);
      app_assert_status(sc);

      // 允许绑定
      sc = sl_bt_sm_set_bondable_mode(1);
      app_assert_status(sc);

      ble_start_advertising();
    }
    break;

    // -------------------------------
    // 此事件表示已打开 BLE 连接
    case sl_bt_evt_connection_opened_id:
    {
      // 存储连接句柄，发送指示时需要
      connection_handle = evt->data.evt_connection_opened.connection;
      bonding_handle = evt->data.evt_connection_opened.bonding;
      Serial.print("连接已打开 - 句柄 0x");
      Serial.println(connection_handle, HEX);

      if (bonding_handle == SL_BT_INVALID_BONDING_HANDLE) {
        Serial.println("连接尚未绑定");
      } else {
        Serial.println("连接已绑定");
      }

      Serial.println("提高安全性");
      sc = sl_bt_sm_increase_security(evt->data.evt_connection_opened.connection);
      app_assert_status(sc);
    }
    break;

    // -------------------------------
    // 此事件表示绑定成功
    case sl_bt_evt_sm_bonded_id:
    {
      Serial.print("已绑定 - 句柄: 0x");
      Serial.print(evt->data.evt_sm_bonded.connection, HEX);
      bonding_handle = evt->data.evt_sm_bonded.bonding;
      connection_handle = evt->data.evt_sm_bonded.connection;

      Serial.print(" - 安全模式: 0x");
      Serial.println(evt->data.evt_sm_bonded.security_mode, HEX);
    }
    break;

    // -------------------------------
    // 此事件表示 BLE 连接已关闭
    case sl_bt_evt_connection_closed_id:
    {
      Serial.print("连接已关闭 - 句柄: 0x");
      Serial.print(connection_handle, HEX);
      Serial.print(" 原因: 0x");
      Serial.println(evt->data.evt_connection_closed.reason, HEX);

      connection_handle = SL_BT_INVALID_CONNECTION_HANDLE;
      bonding_handle = SL_BT_INVALID_BONDING_HANDLE;

      sc = sl_bt_sm_delete_bondings();
      Serial.println("已删除绑定");
      app_assert_status(sc);

      ble_start_advertising();
    }
    break;

    // -------------------------------
    // 此事件表示连接参数已更改
    case sl_bt_evt_connection_parameters_id:
    {
      Serial.print("设置连接参数，安全模式: ");
      Serial.println(evt->data.evt_connection_parameters.security_mode, HEX);
    }
    break;

    // -------------------------------
    // 此事件表示绑定失败
    case sl_bt_evt_sm_bonding_failed_id:
    {
      Serial.print("绑定失败，原因: 0x");
      Serial.println(evt->data.evt_sm_bonding_failed.reason, HEX);
      Serial.println("删除绑定。");

      sc = sl_bt_sm_delete_bondings();
      app_assert_status(sc);

      Serial.println("绑定已删除");
      Serial.print("关闭连接 - 句柄: 0x");
      Serial.println(evt->data.evt_sm_bonding_failed.connection, HEX);
    }
    break;

    // -------------------------------
    // 默认事件处理器
    default:
      break;
  }
}

/******************************************************************************
 * 启动 BLE 广播
 * 如果首次调用，则初始化广播
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

  // 启动广播并启用连接
  sc = sl_bt_legacy_advertiser_start(advertising_set_handle, sl_bt_advertiser_connectable_scannable);
  app_assert_status(sc);

  Serial.print("已启动广播，名称为 '");
  Serial.print(DEVICE_NAME);
  Serial.print("' 地址: ");
  // 打印地址格式为 'FF:FF:FF:FF:FF:FF'
  for (uint8_t i = (sizeof(bd_addr) - 1); i > 0; i--) {
    Serial.print(ble_address.addr[i], HEX);
    Serial.print(":");
  }
  Serial.println(ble_address.addr[0], HEX);
}

/******************************************************************************
 * 初始化 GATT 数据库
 * 创建一个新的 GATT 会话并添加特定服务和特性
 *****************************************************************************/
static void ble_initialize_gatt_db()
{
  sl_status_t sc;
  uint16_t gattdb_session_id;
  uint16_t service;
  uint16_t characteristic;
  uint16_t descriptor;

  // 创建一个新的 GATT 数据库
  sc = sl_bt_gattdb_new_session(&gattdb_session_id);
  app_assert_status(sc);

  // 通用访问服务
  uint8_t generic_access_service_uuid[] = { 0x00, 0x18 };
  sc = sl_bt_gattdb_add_service(gattdb_session_id,
                                sl_bt_gattdb_primary_service,
                                SL_BT_GATTDB_ADVERTISED_SERVICE,
                                2,
                                generic_access_service_uuid,
                                &service);
  app_assert_status(sc);

  // 设备名称特性
  sl_bt_uuid_16_t device_name_uuid = { .data = { 0x00, 0x2A } };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              (SL_BT_GATTDB_CHARACTERISTIC_READ | SL_BT_GATTDB_CHARACTERISTIC_WRITE),
                                              0,
                                              0,
                                              device_name_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              strlen(DEVICE_NAME),
                                              strlen(DEVICE_NAME),
                                              (uint8_t *)DEVICE_NAME,
                                              &characteristic);
  app_assert_status(sc);

  // 外观特性
  sl_bt_uuid_16_t appearence_uuid = { .data = { 0x01, 0x2A } };
  const uint8_t appearance_value[] = { 0xC2, 0x03 };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0,
                                              0,
                                              appearence_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              2,
                                              sizeof(appearance_value),
                                              appearance_value,
                                              &characteristic);
  app_assert_status(sc);

  // 通用访问服务启动
  sc = sl_bt_gattdb_start_service(gattdb_session_id, service);
  app_assert_status(sc);

  // 电池服务
  const uint8_t battery_service_uuid[] = { 0x0F, 0x18 };
  sc = sl_bt_gattdb_add_service(gattdb_session_id,
                                sl_bt_gattdb_primary_service,
                                0,
                                sizeof(battery_service_uuid),
                                battery_service_uuid,
                                &service);
  app_assert_status(sc);

  // 电池电量特性
  const sl_bt_uuid_16_t battery_level_uuid = { .data = { 0x19, 0x2A } };
  const uint8_t battery_level_init_value = 100;
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0,
                                              0,
                                              battery_level_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              sizeof(battery_level_init_value),
                                              sizeof(battery_level_init_value),
                                              &battery_level_init_value,
                                              &characteristic);
  app_assert_status(sc);

  // 特性表示格式描述符
  const sl_bt_uuid_16_t chara_presentation_format_descriptor_uuid = { .data = { 0x04, 0x29 } };
  const uint8_t chara_presentation_format_value[] = { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };
  sc = sl_bt_gattdb_add_uuid16_descriptor(gattdb_session_id,
                                          characteristic,
                                          SL_BT_GATTDB_DESCRIPTOR_READ,
                                          0,
                                          chara_presentation_format_descriptor_uuid,
                                          sl_bt_gattdb_fixed_length_value,
                                          sizeof(chara_presentation_format_value),
                                          sizeof(chara_presentation_format_value),
                                          chara_presentation_format_value,
                                          &descriptor);
  app_assert_status(sc);

  // 客户端特性配置描述符
  const sl_bt_uuid_16_t client_configuration_descriptor_uuid = { .data = { 0x02, 0x29 } };
  const uint8_t client_configuration_value[] = { 0x00, 0x00 };
  sc = sl_bt_gattdb_add_uuid16_descriptor(gattdb_session_id,
                                          characteristic,
                                          (SL_BT_GATTDB_DESCRIPTOR_READ | SL_BT_GATTDB_DESCRIPTOR_WRITE),
                                          0,
                                          client_configuration_descriptor_uuid,
                                          sl_bt_gattdb_fixed_length_value,
                                          sizeof(client_configuration_value),
                                          sizeof(client_configuration_value),
                                          client_configuration_value,
                                          &descriptor);
  app_assert_status(sc);

  // 电池服务启动
  sc = sl_bt_gattdb_start_service(gattdb_session_id, service);
  app_assert_status(sc);

  // 设备信息服务
  const uint8_t device_info_service_uuid[] = { 0x0A, 0x18 };
  sc = sl_bt_gattdb_add_service(gattdb_session_id,
                                sl_bt_gattdb_primary_service,
                                0,
                                sizeof(device_info_service_uuid),
                                device_info_service_uuid,
                                &service);
  app_assert_status(sc);

  // 制造商名称字符串特性
  const sl_bt_uuid_16_t manufacturer_uuid = { .data = { 0x29, 0x2A } };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0,
                                              0,
                                              manufacturer_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              (sizeof(manufacturer) - 1),
                                              (sizeof(manufacturer) - 1),
                                              manufacturer,
                                              &characteristic);
  app_assert_status(sc);

  // 型号字符串特性
  const sl_bt_uuid_16_t model_no_uuid = { .data = { 0x24, 0x2A } };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0,
                                              0,
                                              model_no_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              (sizeof(model_no) - 1),
                                              (sizeof(model_no) - 1),
                                              model_no,
                                              &characteristic);
  app_assert_status(sc);

  // 序列号字符串特性
  const sl_bt_uuid_16_t serial_no_uuid = { .data = { 0x25, 0x2A } };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0,
                                              0,
                                              serial_no_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              (sizeof(serial_no) - 1),
                                              (sizeof(serial_no) - 1),
                                              serial_no,
                                              &characteristic);
  app_assert_status(sc);

  // 硬件版本字符串特性
  const sl_bt_uuid_16_t hw_rev_uuid = { .data = { 0x27, 0x2A } };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0,
                                              0,
                                              hw_rev_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              (sizeof(hw_rev) - 1),
                                              (sizeof(hw_rev) - 1),
                                              hw_rev,
                                              &characteristic);
  app_assert_status(sc);

  // 固件版本字符串特性
  const sl_bt_uuid_16_t fw_rev_uuid = { .data = { 0x26, 0x2A } };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0,
                                              0,
                                              fw_rev_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              (sizeof(fw_rev) - 1),
                                              (sizeof(fw_rev) - 1),
                                              fw_rev,
                                              &characteristic);
  app_assert_status(sc);

  // 软件版本字符串特性
  const sl_bt_uuid_16_t sw_rev_uuid = { .data = { 0x28, 0x2A } };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0,
                                              0,
                                              sw_rev_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              (sizeof(sw_rev) - 1),
                                              (sizeof(sw_rev) - 1),
                                              sw_rev,
                                              &characteristic);
  app_assert_status(sc);

  // 系统 ID 特性
  const sl_bt_uuid_16_t sys_id_uuid = { .data = { 0x23, 0x2A } };
  const uint8_t sys_id_initial_value[] = { 0x12, 0x34, 0x56, 0xFF, 0xFE, 0x9A, 0xBC, 0xDE };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0,
                                              0,
                                              sys_id_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              sizeof(sys_id_initial_value),
                                              sizeof(sys_id_initial_value),
                                              sys_id_initial_value,
                                              &characteristic);
  app_assert_status(sc);

  // PnP ID 特性
  const sl_bt_uuid_16_t pnp_id_uuid = { .data = { 0x50, 0x2A } };
  const uint8_t pnp_id_initial_value[] = { 0x02, 0x10, 0xC4, 0x00, 0x01, 0x00, 0x01 };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0,
                                              0,
                                              pnp_id_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              sizeof(pnp_id_initial_value),
                                              sizeof(pnp_id_initial_value),
                                              pnp_id_initial_value,
                                              &characteristic);
  app_assert_status(sc);

  // 设备信息服务启动
  sc = sl_bt_gattdb_start_service(gattdb_session_id, service);
  app_assert_status(sc);

  // HID 服务
  uint8_t hid_service_uuid[] = { 0x12, 0x18 };
  sc = sl_bt_gattdb_add_service(gattdb_session_id,
                                sl_bt_gattdb_primary_service,
                                SL_BT_GATTDB_ADVERTISED_SERVICE,
                                2,
                                hid_service_uuid,
                                &service);
  app_assert_status(sc);

  // 协议模式特性
  sl_bt_uuid_16_t hid_protocol_mode_uuid = { .data = { 0x4E, 0x2A } };
  const uint8_t hid_protocol_mode_init_value[] = { 1 };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              (SL_BT_GATTDB_CHARACTERISTIC_READ | SL_BT_GATTDB_CHARACTERISTIC_WRITE_NO_RESPONSE),
                                              0,
                                              0,
                                              hid_protocol_mode_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              sizeof(hid_protocol_mode_init_value),
                                              sizeof(hid_protocol_mode_init_value),
                                              hid_protocol_mode_init_value,
                                              &characteristic);
  app_assert_status(sc);

  // HID 报告特性
  const sl_bt_uuid_16_t hid_report_uuid = { .data = { 0x4D, 0x2A } };
  const uint8_t hid_report_init_value[] = { 0x00, 0x00, 0x00 };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              (SL_BT_GATTDB_CHARACTERISTIC_READ | SL_BT_GATTDB_CHARACTERISTIC_WRITE | SL_BT_GATTDB_CHARACTERISTIC_NOTIFY),
                                              0,
                                              0,
                                              hid_report_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              sizeof(hid_report_init_value),
                                              sizeof(hid_report_init_value),
                                              hid_report_init_value,
                                              &characteristic);
  app_assert_status(sc);
  hid_report = characteristic;

  // HID 报告参考描述符
  const sl_bt_uuid_16_t hid_report_reference_desc_uuid = { .data = { 0x08, 0x29 } };
  const uint8_t hid_report_reference_desc_init_val[] = { 0x00, 0x01 };
  sc = sl_bt_gattdb_add_uuid16_descriptor(gattdb_session_id,
                                          characteristic,
                                          SL_BT_GATTDB_DESCRIPTOR_READ,
                                          SL_BT_GATTDB_ENCRYPTED_READ,
                                          hid_report_reference_desc_uuid,
                                          sl_bt_gattdb_fixed_length_value,
                                          sizeof(hid_report_reference_desc_init_val),
                                          sizeof(hid_report_reference_desc_init_val),
                                          hid_report_reference_desc_init_val,
                                          &descriptor);
  app_assert_status(sc);

  // HID 报告映射特性
  const sl_bt_uuid_16_t hid_report_map_uuid = { .data = { 0x4B, 0x2A } };
  const uint8_t hid_report_map_init_value[] = { 0x05, 0x01, // 使用页面（通用桌面）
                                                0x09, 0x02, // 使用（鼠标）
                                                0xA1, 0x01, // 集合（应用程序）
                                                0x09, 0x01, //   使用 ID（指针）
                                                0xA1, 0x00, //   集合（物理）
                                                0x09, 0x30, //     使用 ID（x）
                                                0x09, 0x31, //     使用 ID（y）
                                                0x15, 0x80, //     逻辑最小值（-128）
                                                0x25, 0x7F, //     逻辑最大值（127）
                                                0x95, 0x02, //     报告计数（2）
                                                0x75, 0x08, //     报告大小（8）
                                                0x81, 0x06, //     输入（数据，变量，相对，无换行，线性，首选状态，无空位置，位字段）
                                                0x05, 0x09, //     使用页面（按钮）
                                                0x19, 0x01, //     使用 ID 最小值（按钮 1）
                                                0x29, 0x03, //     使用 ID 最大值（按钮 3）
                                                0x15, 0x00, //     逻辑最小值（0）
                                                0x25, 0x01, //     逻辑最大值（1）
                                                0x95, 0x03, //     报告计数（3）
                                                0x75, 0x01, //     报告大小（1）
                                                0x81, 0x02, //     输入（数据，变量，绝对，无换行，线性，首选状态，无空位置，位字段）
                                                0x95, 0x01, //     报告计数（1）
                                                0x75, 0x05, //     报告大小（5）
                                                0x81, 0x03, //     输入（常量，变量，绝对，无换行，线性，首选状态，无空位置，位字段）
                                                0xC0,       //   结束集合()
                                                0xC0 };     // 结束集合()
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              SL_BT_GATTDB_ENCRYPTED_READ,
                                              0,
                                              hid_report_map_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              sizeof(hid_report_map_init_value),
                                              sizeof(hid_report_map_init_value),
                                              hid_report_map_init_value,
                                              &characteristic);
  app_assert_status(sc);

  // HID 外部报告参考描述符
  const sl_bt_uuid_16_t hid_external_report_reference_descriptor_uuid = { .data = { 0x07, 0x29 } };
  const uint8_t hid_external_report_reference_value[] = { 0x00, 0x00 };
  sc = sl_bt_gattdb_add_uuid16_descriptor(gattdb_session_id,
                                          characteristic,
                                          SL_BT_GATTDB_DESCRIPTOR_READ,
                                          0,
                                          hid_external_report_reference_descriptor_uuid,
                                          sl_bt_gattdb_fixed_length_value,
                                          sizeof(hid_external_report_reference_value),
                                          sizeof(hid_external_report_reference_value),
                                          hid_external_report_reference_value,
                                          &descriptor);
  app_assert_status(sc);

  // HID 信息特性
  const sl_bt_uuid_16_t hid_info_uuid = { .data = { 0x4A, 0x2A } };
  const uint8_t hid_info_init_value[] = { 0x01, 0x11, 0x00, 0x02 };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0,
                                              0,
                                              hid_info_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              sizeof(hid_info_init_value),
                                              sizeof(hid_info_init_value),
                                              hid_info_init_value,
                                              &characteristic);
  app_assert_status(sc);

  // HID 控制点特性
  const sl_bt_uuid_16_t hid_control_point_uuid = { .data = { 0x4C, 0x2A } };
  const uint8_t hid_control_point_init_value[] = { 0x00 };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_WRITE_NO_RESPONSE,
                                              0,
                                              0,
                                              hid_control_point_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              sizeof(hid_control_point_init_value),
                                              sizeof(hid_control_point_init_value),
                                              hid_control_point_init_value,
                                              &characteristic);
  app_assert_status(sc);

  // HID 服务启动
  sc = sl_bt_gattdb_start_service(gattdb_session_id, service);
  app_assert_status(sc);

  // 提交 GATT 数据库更改
  sc = sl_bt_gattdb_commit(gattdb_session_id);
  app_assert_status(sc);
}

#ifndef BLE_STACK_SILABS
  #error "此示例仅与 Silicon Labs BLE 协议栈兼容。请在 'Tools > Protocol stack' 中选择 'BLE (Silabs)'。"
#endif
```
</details>

### 结果图表

当我们按下扩展板上的按钮时，可以观察到鼠标事件被触发！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/hid_mouse.gif" style={{width:500, height:'auto'}}/></div>

## XIAO MG24 感知麦克风(Seeed Studio 演示)

### 内置传感器概述

**麦克风传感器**如 **MSM381ACT001** 是一种 MEMS（微机电系统）麦克风，设计用于以**高灵敏度和低噪声**捕获音频信号。具体来说，MSM381ACT001 具有以下特点：

**麦克风功能：**

- 捕获声波并将其转换为电信号，从而能够在各种环境中检测音频输入。
- 它具有宽频率响应范围，通常从 20 Hz 到 20 kHz，适用于多种音频应用，包括语音识别和音乐播放。

**关键特性**

- 高灵敏度：能够检测微弱的声音，非常适合需要精确音频捕获的应用。
- 低噪声：设计提供高信噪比（SNR），即使在嘈杂环境中也能确保清晰的音频输出。
- 小巧尺寸：MEMS 技术实现了小型化设计，便于集成到智能手机和可穿戴设备等便携设备中。
- 数字输出：提供数字信号输出选项（例如 I2S），简化了与数字信号处理器（DSP）和微控制器的接口。

### 软件准备

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_Mic">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

点击 GitHub 下载链接以驱动麦克风传感器。

:::tip
目前我们需要手动修改替换文件，后续可以直接下载库文件使用，请等待我们的 Wiki 更新。
:::

- **[替换文件]** [gsdk.a](https://files.seeedstudio.com/wiki/mg24_mic/gsdk_v2.a)

**更改文件路径**
  - __/Users/yourname/Library/Arduino15/packages/SiliconLabs/hardware/silabs/2.2.0/variants/xiao_mg24/ble_silabs/__

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/file.png" style={{width:350, height:'auto'}}/></div>

### 代码实现

```cpp
#include <mic.h>
#if defined(WIO_TERMINAL)
#include "processing/filters.h"
#endif

// 设置
#if defined(WIO_TERMINAL)
#define DEBUG 1                 // 启用 ISR 期间的引脚脉冲  
#define SAMPLES 16000*3
#elif defined(ARDUINO_ARCH_NRF52840)
#define DEBUG 1                 // 启用 ISR 期间的引脚脉冲  
#define SAMPLES 800
#elif defined(ARDUINO_SILABS)
#define DEBUG 1                 // 启用 ISR 期间的引脚脉冲  
#define SAMPLES 800
#endif

mic_config_t mic_config{
  .channel_cnt = 1,
  .sampling_rate = 16000,
  .buf_size = 1600,
#if defined(WIO_TERMINAL)
  .debug_pin = 1                // 每次 DAC ISR 切换（如果 DEBUG 设置为 1）
#elif defined(ARDUINO_ARCH_NRF52840)
  .debug_pin = LED_BUILTIN      // 每次 DAC ISR 切换（如果 DEBUG 设置为 1）
#elif defined(ARDUINO_SILABS)
  .debug_pin = LED_BUILTIN      // 每次 DAC ISR 切换（如果 DEBUG 设置为 1）  
#endif
};

#if defined(WIO_TERMINAL)
DMA_ADC_Class Mic(&mic_config);
#elif defined(ARDUINO_ARCH_NRF52840)
NRF52840_ADC_Class Mic(&mic_config);
#elif defined(ARDUINO_SILABS)
MG24_ADC_Class Mic(&mic_config);
#endif

int16_t recording_buf[SAMPLES];
volatile uint8_t recording = 0;
volatile static bool record_ready = false;

#if defined(WIO_TERMINAL)
FilterBuHp filter;
#endif

void setup() {

  Serial.begin(115200);
  while (!Serial) {delay(10);}
  
#if defined(WIO_TERMINAL)  
  pinMode(WIO_KEY_A, INPUT_PULLUP);
#endif

  Mic.set_callback(audio_rec_callback);

  if (!Mic.begin()) {
    Serial.println("麦克风初始化失败");
    while (1);
  }

  Serial.println("麦克风初始化完成。");

}

void loop() { 

#if defined(WIO_TERMINAL)  
if (digitalRead(WIO_KEY_A) == LOW && !recording) {

    Serial.println("开始采样");
    recording = 1;
    record_ready = false;  
}
#endif

#if defined(WIO_TERMINAL)  
  if (!recording && record_ready)
#elif defined(ARDUINO_ARCH_NRF52840) || defined(ARDUINO_SILABS)
  if (record_ready)
#endif  
  {
  Serial.println("采样完成");
  
  for (int i = 0; i < SAMPLES; i++) {
    
  //int16_t sample = filter.step(recording_buf[i]);
  int16_t sample = recording_buf[i];
  Serial.println(sample);
  }
  
  record_ready = false; 
  }
}

static void audio_rec_callback(uint16_t *buf, uint32_t buf_len) {
  
  static uint32_t idx = 0;
  // 从 DMA 缓冲区复制样本到推理缓冲区
#if defined(WIO_TERMINAL)
  if (recording) 
#endif
  {
    for (uint32_t i = 0; i < buf_len; i++) {
  
      // 将 12 位无符号 ADC 值转换为 16 位 PCM（有符号）音频值
#if defined(WIO_TERMINAL)
      recording_buf[idx++] = filter.step((int16_t)(buf[i] - 1024) * 16);
      //recording_buf[idx++] = (int16_t)(buf[i] - 1024) * 16;  
#elif defined(ARDUINO_ARCH_NRF52840) || defined(ARDUINO_SILABS)
      recording_buf[idx++] = buf[i];
#endif

      if (idx >= SAMPLES){ 
      idx = 0;
      recording = 0;
      record_ready = true;
      break;
     } 
    }
  }

}
```

### 功能概述

**麦克风配置**

```cpp
mic_config_t mic_config{
  .channel_cnt = 1, // 设置为 1 表示单声道
  .sampling_rate = 16000, // 设置采样频率为 16000 Hz
  .buf_size = 1600, // 设置缓冲区大小为 1600
  #if defined(WIO_TERMINAL)
  .debug_pin = 1 // WIO Terminal 平台的调试引脚
  #elif defined(ARDUINO_ARCH_NRF52840)
  .debug_pin = LED_BUILTIN // NRF52840 平台的调试引脚
  #elif defined(ARDUINO_SILABS)
  .debug_pin = LED_BUILTIN // Silabs 平台的调试引脚
  #endif
};
```

- `mic_config_t`：定义麦克风配置结构体。
- `channel_cnt`：设置为 1 表示单声道。
- `sampling_rate`：设置采样频率为 16000 Hz。
- `buf_size`：设置缓冲区大小为 1600。
- `debug_pin`：根据平台设置调试引脚，用于调试时的信号指示。

**麦克风实例化**

```cpp
#if defined(WIO_TERMINAL)
DMA_ADC_Class Mic(&mic_config);
#elif defined(ARDUINO_ARCH_NRF52840)
NRF52840_ADC_Class Mic(&mic_config);
#elif defined(ARDUINO_SILABS)
MG24_ADC_Class Mic(&mic_config);
#endif
```

- 条件编译：根据不同平台创建适当的麦克风类实例，使用之前定义的配置。

**录音缓冲区和标志**

```cpp
int16_t recording_buf[SAMPLES]; // 定义一个数组用于存储录音样本
volatile uint8_t recording = 0; // 标记当前是否正在录音，防止编译器优化
volatile static bool record_ready = false; // 标记录音是否完成并准备好进行后续处理
```

**滤波器示例（针对 WIO Terminal）**

```cpp
#if defined(WIO_TERMINAL)
FilterBuHp filter; // 如果是 WIO Terminal，创建一个高通滤波器实例
#endif
```

**setup 函数**

```cpp
void setup() {
  Serial.begin(115200); // 初始化串口通信，波特率为 115200
  while (!Serial) {delay(10);} // 等待串口准备好
  
#if defined(WIO_TERMINAL)  
  pinMode(WIO_KEY_A, INPUT_PULLUP); // 在 WIO Terminal 上设置按键引脚为输入上拉模式
#endif

  Mic.set_callback(audio_rec_callback); // 设置回调函数，当录音时调用

  if (!Mic.begin()) { // 初始化麦克风
    Serial.println("Mic initialization failed"); // 如果初始化失败，打印错误信息并进入死循环
    while (1);
  }

  Serial.println("Mic initialization done."); // 初始化成功后打印信息
}
```

**loop 函数**

```cpp
void loop() { 
#if defined(WIO_TERMINAL)  
  if (digitalRead(WIO_KEY_A) == LOW && !recording) { // 检测按键按下且未录音时开始录音
    Serial.println("Starting sampling");
    recording = 1;
    record_ready = false;  
  }
#endif

#if defined(WIO_TERMINAL)  
  if (!recording && record_ready) // 如果未录音且录音已完成
#elif defined(ARDUINO_ARCH_NRF52840) || defined(ARDUINO_SILABS)
  if (record_ready) // 如果录音已完成
#endif  
  {
    Serial.println("Finished sampling"); // 打印录音完成信息
    
    for (int i = 0; i < SAMPLES; i++) { // 遍历录音缓冲区并打印每个样本值
      int16_t sample = recording_buf[i];
      Serial.println(sample);
    }
    
    record_ready = false; // 重置录音完成标志
  }
}
```

- 检测按键：在 WIO Terminal 上，当检测到按键按下且未录音时开始录音。
- 录音完成：如果录音完成且未在录音中，打印“Finished sampling”并输出缓冲区中的样本值。

**音频录音回调函数**

```cpp
static void audio_rec_callback(uint16_t *buf, uint32_t buf_len) {
  static uint32_t idx = 0; // 静态变量，用于记录缓冲区索引
  #if defined(WIO_TERMINAL)
  if (recording) 
  #endif
  {
    for (uint32_t i = 0; i < buf_len; i++) {
      #if defined(WIO_TERMINAL)
      recording_buf[idx++] = filter.step((int16_t)(buf[i] - 1024) * 16); // 对输入数据进行滤波处理
      #elif defined(ARDUINO_ARCH_NRF52840) || defined(ARDUINO_SILABS)
      recording_buf[idx++] = buf[i]; // 直接存储数据
      #endif

      if (idx >= SAMPLES){ // 如果填满缓冲区
        idx = 0; // 重置索引
        recording = 0; // 停止录音
        record_ready = true; // 设置录音完成标志
        break;
      } 
    }
  }
}
```

- 回调函数：在录音过程中调用，负责将样本从 DMA 缓冲区复制到录音缓冲区。
- 条件编译：在 WIO Terminal 上对输入数据进行滤波处理。
- 转换数据：将 12 位无符号 ADC 值转换为 16 位 PCM（有符号）音频值。
- 填充样本：将样本复制到 `recording_buf` 并更新索引。
- 完成录音：当填满样本数时，重置索引，停止录音并设置录音完成标志。

### 结果图表

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/mic_result1.png" style={{width:680, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/mic_result.png" style={{width:680, height:'auto'}}/></div>

这是识别声音的波形图，当你吹气时，可以清楚地看到波形振幅变大。

### 更多示例

如果需要更多示例代码，请点击：-> **"Example -> Seeed Arduino Mic"**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/34.png" style={{width:500, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/35.png" style={{width:500, height:'auto'}}/></div>

## XIAO MG24 Sense Microphone（Silicon Labs 示例）

:::tip
我们需要下载最新的板载包（2.3.0），以便在示例中找到最新的官方代码。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/mg24download.jpg" style={{width:400, height:'auto'}}/></div>

### 软件准备

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/mg24mic.jpg" style={{width:500, height:'auto'}}/></div>

### 代码实现

```cpp
/*
   模拟麦克风音量示例

   此示例展示了模拟 MEMS 麦克风的使用，并根据麦克风的输入音量调节板载 LED 的亮度。
   此示例兼容所有 Silicon Labs Arduino 板，但需要板载或连接到指定引脚的模拟麦克风。

   作者: Áron Gyapjas (Silicon Labs)
 */

#include <SilabsMicrophoneAnalog.h>

// 此配置适用于 Seeed Studio XIAO MG24 上的 MSM381ACT001 麦克风
// 根据您的硬件进行更改
#define MIC_DATA_PIN  PC9
#define MIC_PWR_PIN   PC8
#define NUM_SAMPLES   128
#define MIC_VALUE_MIN 735
#define MIC_VALUE_MAX 900

// 用于存储样本的缓冲区
uint32_t mic_buffer[NUM_SAMPLES];
uint32_t mic_buffer_local[NUM_SAMPLES];

volatile bool data_ready_flag = false;
MicrophoneAnalog micAnalog(MIC_DATA_PIN, MIC_PWR_PIN);
void mic_samples_ready_cb();
void calculate_and_display_voice_level();

void setup()
{
  Serial.begin(115200);
  pinMode(LED_BUILTIN, OUTPUT);

  micAnalog.begin(mic_buffer, NUM_SAMPLES);
  Serial.println("Microphone initialized...");

  micAnalog.startSampling(mic_samples_ready_cb);
  Serial.println("Sampling started...");
}

void loop()
{
  if (data_ready_flag) {
    data_ready_flag = false;
    calculate_and_display_voice_level();
  }
}

// 当麦克风提供了所需数量的样本时调用
void mic_samples_ready_cb()
{
  // 将数据复制到本地缓冲区以防止被覆盖
  memcpy(mic_buffer_local, mic_buffer, NUM_SAMPLES * sizeof(uint32_t));
  data_ready_flag = true;
}

void calculate_and_display_voice_level() {
  // 滚动平均值，用于平滑音量级别
  static uint32_t rolling_average = 0u;

  // 停止采样以防止覆盖当前数据
  micAnalog.stopSampling();

  // 获取采样值的平均值
  uint32_t voice_level = (uint32_t)micAnalog.getAverage(mic_buffer_local, NUM_SAMPLES);
  // 根据麦克风输出的最小/最大值调整音量级别
  voice_level = constrain(voice_level, MIC_VALUE_MIN, MIC_VALUE_MAX);
  // 计算滚动平均值
  rolling_average = (voice_level + rolling_average) / 2;

  // 将当前平均值映射到亮度
  int brightness = map(rolling_average, MIC_VALUE_MIN, MIC_VALUE_MAX, 0, 255);
  if (LED_BUILTIN_ACTIVE == LOW) {
    analogWrite(LED_BUILTIN, 255 - brightness);
  } else {
    analogWrite(LED_BUILTIN, brightness);
  }
  // 打印平均音量级别（可以使用串口绘图器查看此值的图形）
  Serial.println(rolling_average);

  // 重新开始采样
  micAnalog.startSampling(mic_samples_ready_cb);
}
```

### 功能概述

***头文件介绍***

```cpp
#include <SilabsMicrophoneAnalog.h>
```

- 包含 `SilabsMicrophoneAnalog.h` 头文件，该文件包含使用模拟麦克风所需的库函数和定义。

***硬件配置***
```cpp
#define MIC_DATA_PIN  PC9
#define MIC_PWR_PIN   PC8
#define NUM_SAMPLES   128
#define MIC_VALUE_MIN 735
#define MIC_VALUE_MAX 900
```

- `MIC_DATA_PIN`：定义麦克风数据引脚为 `PC9`。

- `MIC_PWR_PIN`：定义麦克风电源引脚为 `PC8`。

- `NUM_SAMPLES`：定义每次采样的样本数量为 128。

- `MIC_VALUE_MIN` 和 `MIC_VALUE_MAX`：定义麦克风输出的最小和最大范围。

***缓冲区定义***
```cpp
uint32_t mic_buffer[NUM_SAMPLES];
uint32_t mic_buffer_local[NUM_SAMPLES];
```

- `mic_buffer`：用于存储从麦克风采集的原始样本数据。

- `mic_buffer_local`：用于临时存储样本数据以防止覆盖。

***标志和对象定义***
```cpp
volatile bool data_ready_flag = false;
MicrophoneAnalog micAnalog(MIC_DATA_PIN, MIC_PWR_PIN);
```

- `data_ready_flag`：一个标志，用于指示是否有新的样本数据准备好。

- `micAnalog`：创建一个 MicrophoneAnalog 对象，用于控制麦克风。

***回调函数声明***
```cpp
void mic_samples_ready_cb();
void calculate_and_display_voice_level();
```

- `mic_samples_ready_cb()`：当采样完成时调用的回调函数。

- `calculate_and_display_voice_level()`：用于计算音量并控制 LED 亮度的函数。

***setup() 函数***
```cpp
void setup()
{
  Serial.begin(115200);
  pinMode(LED_BUILTIN, OUTPUT);

  micAnalog.begin(mic_buffer, NUM_SAMPLES);
  Serial.println("Microphone initialized...");

  micAnalog.startSampling(mic_samples_ready_cb);
  Serial.println("Sampling started...");
}
```

- 初始化串行通信，波特率为 115200。

- 将板载 LED 引脚设置为输出模式。

- 初始化麦克风并指定样本缓冲区。

- 开始采样并设置采样完成时的回调函数。

***loop() 函数***
```cpp
void loop()
{
  if (data_ready_flag) {
    data_ready_flag = false;
    calculate_and_display_voice_level();
  }
}
```

- 检查 `data_ready_flag` 是否为 `true`，表示有新数据准备好。

- 如果有新数据，调用 `calculate_and_display_voice_level()` 函数处理数据。

```cpp
void mic_samples_ready_cb()
{
  memcpy(mic_buffer_local, mic_buffer, NUM_SAMPLES * sizeof(uint32_t));
  data_ready_flag = true;
}
```

将样本数据从 `mic_buffer` 复制到 `mic_buffer_local`，以防止数据覆盖。

将 `data_ready_flag` 设置为 `true`，表示有新数据准备好。

```cpp
void calculate_and_display_voice_level() {
  static uint32_t rolling_average = 0u;

  micAnalog.stopSampling();

  uint32_t voice_level = (uint32_t)micAnalog.getAverage(mic_buffer_local, NUM_SAMPLES);
  voice_level = constrain(voice_level, MIC_VALUE_MIN, MIC_VALUE_MAX);
  rolling_average = (voice_level + rolling_average) / 2;

  int brightness = map(rolling_average, MIC_VALUE_MIN, MIC_VALUE_MAX, 0, 255);
  if (LED_BUILTIN_ACTIVE == LOW) {
    analogWrite(LED_BUILTIN, 255 - brightness);
  } else {
    analogWrite(LED_BUILTIN, brightness);
  }
  Serial.println(rolling_average);

  micAnalog.startSampling(mic_samples_ready_cb);
}
```

- 停止采样以防止数据覆盖。

- 计算样本数据的平均值，并将其限制在 `MIC_VALUE_MIN` 和 `MIC_VALUE_MAX` 之间。

- 计算滚动平均值以平滑音量变化。

- 将滚动平均值映射到 LED 亮度范围（0 到 255），并调整 LED 亮度。

- 通过串行输出滚动平均值，以观察音量变化。

- 重新开始采样以收集新的音频数据。

### 结果图表

当我们对麦克风吹气时，可以看到顶部的 LED 会随着声音的变化而变亮或变暗。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/mic.gif" style={{width:500, height:'auto'}}/></div>

### 更多示例

如果您需要更多示例代码，请点击：-> **"Example -> SilabsMicrophoneAnalog -> MicrophoneVolume"**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/mic_arduino.jpg" style={{width:500, height:'auto'}}/></div>

## 资源

### 针对 Seeed Studio XIAO MG24 Sense

- 📄 **[PDF]** [Seeed Studio 6轴IMU(LSM6DS3TR-C) 数据手册](https://statics3.seeedstudio.com/fusion/opl/sheets/314040211.pdf)
- 📄 **[PDF]** [Seeed Studio 模拟麦克风(MSM381ACT001) 数据手册](https://files.seeedstudio.com/wiki/mg24_mic/312030602_MEMSensing_MSM381ACT001_Datasheet.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>