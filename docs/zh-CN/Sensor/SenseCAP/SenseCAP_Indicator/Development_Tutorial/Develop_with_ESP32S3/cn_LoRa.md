---
description: LoRa®
title: LoRa®
keywords:
- SenseCAP Indicator ESP32 Development Tutorial Lora
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_ESP32_LoRa
last_update:
  date: 05/15/2025
  author: Thomas
---

# **LoRa®**

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

SenseCAP 指示器内嵌了 SX1262 LoRa® 模块，可以实现点对点（p2p）通信。

## **发送数据包**

以下示例代码展示了如何在 LoRa® 模式下使用 LoRa® 无线电模块以发送模式发送数据包的基本示例。它定义了 LoRa® 调制方案的频率、带宽、扩频因子、编码率、前导码长度以及其他参数。

```c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include "esp_log.h"
#include "radio.h"
#include "bsp_board.h"

#define RF_FREQUENCY                                868000000 // Hz
#define LORA_BANDWIDTH                              0         // [0: 125 kHz,
                                                              //  1: 250 kHz,
                                                              //  2: 500 kHz,
                                                              //  3: 保留]
#define LORA_SPREADING_FACTOR                       12         // [SF7..SF12]
#define LORA_CODINGRATE                             1         // [1: 4/5,
                                                              //  2: 4/6,
                                                              //  3: 4/7,
                                                              //  4: 4/8]
#define LORA_PREAMBLE_LENGTH                        8         // 发送和接收相同
#define LORA_SYMBOL_TIMEOUT                         5         // 符号
#define LORA_FIX_LENGTH_PAYLOAD_ON                  false
#define LORA_IQ_INVERSION_ON                        false

static RadioEvents_t RadioEvents;

static const char *TAG = "app_main";

void OnTxDone( void )
{
    ESP_LOGI(TAG, "发送完成");
}

void demo_lora_tx(void)
{
    int cnt = 0;
    ESP_LOGI(TAG, "系统启动");
    ESP_LOGI(TAG, "LoRa 发送示例");
    ESP_ERROR_CHECK(bsp_board_init());

    RadioEvents.TxDone = OnTxDone;
    Radio.Init( &RadioEvents );

    Radio.SetChannel( RF_FREQUENCY );
    Radio.SetTxConfig( MODEM_LORA,22, 0, LORA_BANDWIDTH,
                                   LORA_SPREADING_FACTOR, LORA_CODINGRATE,
                                   LORA_PREAMBLE_LENGTH, LORA_FIX_LENGTH_PAYLOAD_ON,
                                   true, 0, 0, LORA_IQ_INVERSION_ON, 3000 );

    Radio.SetMaxPayloadLength( MODEM_LORA, 255 );

    while(1) {
        printf("发送中... %d\n", cnt++);
        Radio.Send( "1234567890", sizeof("1234567890") );
        vTaskDelay(5000 / portTICK_PERIOD_MS);
    }
}
```

## **接收数据包**

以下示例代码设置了一个使用 SX126x 无线电模块的 LoRa® 接收器，并将接收到的数据包记录到控制台。它可以作为开发需要通过低功耗实现长距离数据接收的 LoRa® 应用的起点。

```c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include "esp_log.h"
#include "radio.h"
#include "bsp_board.h"

#define RF_FREQUENCY                                868000000 // Hz
#define LORA_BANDWIDTH                              0         // [0: 125 kHz,
                                                              //  1: 250 kHz,
                                                              //  2: 500 kHz,
                                                              //  3: 保留]
#define LORA_SPREADING_FACTOR                       7         // [SF7..SF12]
#define LORA_CODINGRATE                             1         // [1: 4/5,
                                                              //  2: 4/6,
                                                              //  3: 4/7,
                                                              //  4: 4/8]
#define LORA_PREAMBLE_LENGTH                        8         // 发送和接收相同
#define LORA_SYMBOL_TIMEOUT                         5         // 符号
#define LORA_FIX_LENGTH_PAYLOAD_ON                  false
#define LORA_IQ_INVERSION_ON                        false

static RadioEvents_t RadioEvents;

static const char *TAG = "app_main";

void OnRxDone( uint8_t *payload, uint16_t size, int16_t rssi, int8_t snr )
{
    int i = 0;
    ESP_LOGI(TAG, "rssi:%d dBm, snr:%d dB, 长度:%d, 数据包内容:", rssi, snr, size);
    for( i = 0; i < size; i++) {
        printf("0x%x ",payload[i] );
    }
    printf("\n");
}

void demo_lora_rx(void)
{
    int cnt = 0;
    ESP_LOGI(TAG, "系统启动");
    ESP_LOGI(TAG, "LoRa 接收示例");
    bsp_sx126x_init();

    RadioEvents.RxDone = OnRxDone;
    Radio.Init( &RadioEvents );

    Radio.SetChannel( RF_FREQUENCY );
    Radio.SetTxConfig( MODEM_LORA,22, 0, LORA_BANDWIDTH,
                                   LORA_SPREADING_FACTOR, LORA_CODINGRATE,
                                   LORA_PREAMBLE_LENGTH, LORA_FIX_LENGTH_PAYLOAD_ON,
                                   true, 0, 0, LORA_IQ_INVERSION_ON, 3000 );

    Radio.SetRxConfig( MODEM_LORA, LORA_BANDWIDTH, LORA_SPREADING_FACTOR,
                                   LORA_CODINGRATE, 0, LORA_PREAMBLE_LENGTH,
                                   LORA_SYMBOL_TIMEOUT, LORA_FIX_LENGTH_PAYLOAD_ON,
                                   0, true, 0, 0, LORA_IQ_INVERSION_ON, true );
    Radio.SetMaxPayloadLength( MODEM_LORA, 255 );

    Radio.Rx( 0 );
    while(1) {
        printf("计数: %d\n", cnt++);
        vTaskDelay(10000 / portTICK_PERIOD_MS);
    }
}
```

# **技术支持**

别担心，我们为您提供支持！请访问我们的 [Seeed 官方 Discord 频道](https://discord.com/invite/QqMgVwHT3X) 提问！

如果您有大批量订单或定制需求，请联系 iot@seeed.cc