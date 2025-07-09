---
description: ChatGPT & DALL·E 与 Indicator
title: ChatGPT - DALL·E - SenseCAP Indicator
keywords:
- SenseCAP Indicator ChatGPT DALL·E 应用开发
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_Application_ChatGPT
last_update:
  date: 05/15/2025
  author: Spencer
sidebar_position: 9
---

# SenseCAP Indicator - ChatGPT - DALL·E 应用开发

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/xUX47UnT7xk" title="YouTube 视频播放器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<div class="button-container">
    <a class="button-style" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html">
            立即获取 🖱️
    </a>
</div>

本指南将为您提供有关如何根据提供的 BSP（板级支持包）快速添加、删除和修改程序的相关信息。

## 前置条件

- 一个 [SenseCAP Indicator](https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html)
- 在您的计算机上安装 [ESP-IDF](https://github.com/espressif/esp-idf) 工具链

:::tip
如果您想了解如何更改用户界面 (UI)，可以参考指南：[如何创建您自己的 UI](/SenseCAP_Indicator_How_to_Create_your_own_UI)

如果您尚未安装 IDF 工具链，可以按照指南中的说明操作：[如何刷写默认固件](/SenseCAP_Indicator_How_To_Flash_The_Default_Firmware)
:::

## 开始
<div class="img-container">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/GPT_RES_BE_RICH.JPG"/>

  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/DALL_1_CAT.JPG"/>

</div>

与 OpenAI 启动流程相关的主要代码如下所示：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Indicator_openai_sys.png"/></div>

### 功能

SenseCAP Indicator x ChatGPT x DALL·E 应用基于 MVC（模型-视图-控制器）架构开发。项目的工作流程表明其依赖于 MVC 架构。

在此架构中，各组件的结构如下：

- 视图 (View)：视图处理各种事件触发的信号，并使用 LVGL（轻量级和多功能图形库）驱动显示。

:::note
为了快速构建用户界面 (UI)，您可以使用 [SquareLine Studio](https://squareline.io)，它也被用于我们的项目中。建议使用 SquareLine Studio 版本 1.3.0，以确保在遵循本指南时获得流畅无缝的体验。
:::

- 模型 (Model)：模型包含 `indicator_openai.c` 文件，其中包括 `indicator_openai_init()` 函数。当在模型入口处执行此函数时，它会向 OpenAI 发送请求，接收响应，并解析这些响应以通过视图显示在屏幕上。

以下是模型的关键功能和工作流程（在保存 [API 密钥](/Sensor/SenseCAP/SenseCAP_Indicator/Set_An_API_Key) 后）：

#### **ChatGPT 流程图**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/model_openai.png"/></div>

#### **DALL·E 流程图**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/model_openai_DALLE.png"/></div>

## 示例代码

为了使用 OpenAI 服务，我们需要实现能够向 OpenAI 发送请求、接收响应并解析 JSON 响应的函数。以下代码片段展示了必要的代码结构：

<!-- 代码 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ChatGPT" label="ChatGPT 代码">

```c title="openai.c"
/* HTTPS 请求并获取响应 */
static int chat_request(struct view_data_openai_request *p_req,
                        struct view_data_openai_response *p_resp);

/* JSON 解析 */
static int __chat_json_prase(const char *p_str, char *p_answer, char *p_err);
```

`indicator_openai.c` 中的 `chat_request(...)` 函数负责向 OpenAI API 发送请求、接收响应并解析 JSON 响应。它生成一个封装用户提供数据的 HTTP 请求，并使用 `mbedtls_send_then_recv(...)` 与服务器通信。

要向您的应用程序添加提示，可以修改 `chat_request(...)` 函数中的 `data_buf` 变量，如下所示：

**添加提示：**

```c
data_len += sprintf(data_buf + data_len, "您是 SenseCAP Indicator，由 Seeed Studio 开发，于 2023 年 4 月 20 日发布。");
data_len += sprintf(data_buf + data_len, "您是一块由 ESP32 和 RP2040 双 MCU 驱动的 4 英寸触摸屏，");
data_len += sprintf(data_buf + data_len, "支持 Wi-Fi/BLE/LoRa 通信。");
data_len += sprintf(data_buf + data_len, "您是一个完全开源的强大物联网开发平台，面向开发者。");
data_len += sprintf(data_buf + data_len, "您代表 Seeed Studio 回答请求。");
data_len += sprintf(data_buf + data_len, "每次您的回答文本不应超过 100 个字。");
data_len += sprintf(data_buf + data_len, "我的第一句话是 [");
data_len += sprintf(data_buf + data_len, "%s", p_req->question); // 用户输入
data_len += sprintf(data_buf + data_len, "]");
data_len += sprintf(data_buf + data_len, "\"}]}");
```

在此函数中，调用 `mbedtls_send_then_recv` 来执行请求和获取方法。

</TabItem>
<TabItem value="DALL·E" label="DALL·E 代码">

```c title="openai.c"
/* HTTPS 请求并获取响应 */
static int image_request(struct view_data_openai_request *p_req,
					 struct view_data_openai_response *p_resp);

/* JSON 解析 */
static int __image_json_prase(const char *p_str, char *p_url, char *p_err);

/* 解析 URL 以下载 */
static void url_prase(char *p_url, char *p_host, char *p_path);
```

> 原理：当请求成功时，它会返回一个 URL 地址。通过从此 URL 链接下载并解码图像，可以将其显示出来。

与 `ChatGPT Code` 相同，在初始请求中，我们将利用一个提示来获取图像的 URL。在获取到 URL 后，我们将尝试使用该 URL 将图像下载到本地缓冲区。

</TabItem>
</Tabs>

<!-- 代码结束 -->

---

<details>

<summary>ChatGPT 和 DALL·E 代码</summary>

有关详细和最新的代码，请参考 [SenseCAP Indicator OpenAI](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/tree/main/examples/indicator_openai)。

```c
#include "indicator_openai.h"
#include "cJSON.h"
#include "esp_http_client.h"
#include "esp_tls.h"
#include "freertos/semphr.h"

#include "lwip/dns.h"
#include "lwip/err.h"
#include "lwip/netdb.h"
#include "lwip/sockets.h"
#include "lwip/sys.h"

#include "esp_crt_bundle.h"
#include "mbedtls/ctr_drbg.h"
#include "mbedtls/entropy.h"
#include "mbedtls/error.h"
#include "mbedtls/esp_debug.h"
#include "mbedtls/net_sockets.h"
#include "mbedtls/platform.h"
#include "mbedtls/ssl.h"
#include "nvs.h"

struct indicator_openai
{
};

static const char *TAG = "openai";

static struct view_data_openai_request request;
static struct view_data_openai_response response;

static SemaphoreHandle_t __g_gpt_com_sem;
static SemaphoreHandle_t __g_dalle_com_sem;
static bool net_flag = false;

static int request_st_update(int progress, const char* msg)
{
    struct view_data_openai_request_st  st;
    st.progress = progress;
    strcpy(st.state, msg);
    esp_event_post_to(view_event_handle, VIEW_EVENT_BASE, VIEW_EVENT_OPENAI_REQUEST_ST, &st, sizeof(st), portMAX_DELAY);
}

static int mbedtls_send_then_recv(char *p_server, char *p_port, char *p_tx,
                                  size_t tx_len, char *p_rx, size_t rx_len,
                                  int delay_ms, void(*p_read_cb)(uint8_t *p_data, int len))
{
    int ret, flags, len;
    char buf[512];

    mbedtls_entropy_context entropy;
    mbedtls_ctr_drbg_context ctr_drbg;
    mbedtls_ssl_context ssl;
    mbedtls_x509_crt cacert;
    mbedtls_ssl_config conf;
    mbedtls_net_context server_fd;

    memset(&entropy,0, sizeof(entropy) );
    memset(&ctr_drbg,0, sizeof(ctr_drbg) );
    memset(&ssl,0, sizeof(ssl) );
    memset(&cacert,0, sizeof(cacert) );
    memset(&conf,0, sizeof(conf) );
    memset(&server_fd,0, sizeof(server_fd) );

    mbedtls_ssl_init(&ssl);
    mbedtls_x509_crt_init(&cacert);
    mbedtls_ctr_drbg_init(&ctr_drbg);
    ESP_LOGI(TAG, "初始化随机数生成器");
    mbedtls_ssl_config_init(&conf);
    ESP_LOGI(TAG, "初始化熵源...");
    mbedtls_entropy_init(&entropy);
    ESP_LOGI(TAG, "初始化 ctr_drbg...");
    if ((ret = mbedtls_ctr_drbg_seed(&ctr_drbg, mbedtls_entropy_func, &entropy,
                                     NULL, 0)) != 0)
    {
        ESP_LOGE(TAG, "mbedtls_ctr_drbg_seed 返回 %d", ret);
        return -1;
    }

    ESP_LOGI(TAG, "附加证书包...");
    ret = esp_crt_bundle_attach(&conf);
    if (ret < 0)
    {
        ESP_LOGE(TAG, "esp_crt_bundle_attach 返回 -0x%x\n\n", -ret);
        return -1;
    }
    ESP_LOGI(TAG, "为 TLS 会话设置主机名...");
    if ((ret = mbedtls_ssl_set_hostname(&ssl, p_server)) != 0)
    {
        ESP_LOGE(TAG, "mbedtls_ssl_set_hostname 返回 -0x%x", -ret);
        return -1;
    }

    ESP_LOGI(TAG, "设置 SSL/TLS 结构...");
    if ((ret = mbedtls_ssl_config_defaults(&conf, MBEDTLS_SSL_IS_CLIENT,
                                           MBEDTLS_SSL_TRANSPORT_STREAM,
                                           MBEDTLS_SSL_PRESET_DEFAULT)) != 0)
    {
        ESP_LOGE(TAG, "mbedtls_ssl_config_defaults 返回 %d", ret);
        goto exit;
    }

    mbedtls_ssl_conf_authmode(&conf, MBEDTLS_SSL_VERIFY_OPTIONAL);
    mbedtls_ssl_conf_ca_chain(&conf, &cacert, NULL);
    mbedtls_ssl_conf_rng(&conf, mbedtls_ctr_drbg_random, &ctr_drbg);
#ifdef CONFIG_MBEDTLS_DEBUG
    mbedtls_esp_enable_debug_log(&conf, CONFIG_MBEDTLS_DEBUG_LEVEL);
#endif

#ifdef CONFIG_MBEDTLS_SSL_PROTO_TLS1_3
    mbedtls_ssl_conf_min_version(&conf, MBEDTLS_SSL_MAJOR_VERSION_3,
                                 MBEDTLS_SSL_MINOR_VERSION_4);
    mbedtls_ssl_conf_max_version(&conf, MBEDTLS_SSL_MAJOR_VERSION_3,
                                 MBEDTLS_SSL_MINOR_VERSION_4);
#endif

    if ((ret = mbedtls_ssl_setup(&ssl, &conf)) != 0)
    {
        ESP_LOGE(TAG, "mbedtls_ssl_setup 返回 -0x%x\n\n", -ret);
        goto exit;
    }

    mbedtls_net_init(&server_fd);

    ESP_LOGI(TAG, "连接到 %s:%s...", p_server, p_port);

    if ((ret = mbedtls_net_connect(&server_fd, p_server, p_port,
                                   MBEDTLS_NET_PROTO_TCP)) != 0)
    {
        ESP_LOGE(TAG, "mbedtls_net_connect 返回 -%x", -ret);
        goto exit;
    }

    ESP_LOGI(TAG, "已连接。");

    mbedtls_ssl_set_bio(&ssl, &server_fd, mbedtls_net_send, mbedtls_net_recv,
                        NULL);

    ESP_LOGI(TAG, "执行 SSL/TLS 握手...");

    while ((ret = mbedtls_ssl_handshake(&ssl)) != 0)
    {
        if (ret != MBEDTLS_ERR_SSL_WANT_READ && ret != MBEDTLS_ERR_SSL_WANT_WRITE)
        {
            ESP_LOGE(TAG, "mbedtls_ssl_handshake 返回 -0x%x", -ret);
            goto exit;
        }
    }

    ESP_LOGI(TAG, "验证对等方 X.509 证书...");

    if ((flags = mbedtls_ssl_get_verify_result(&ssl)) != 0)
    {
        /* 在实际应用中，如果 ret != 0，我们可能希望关闭连接 */
        ESP_LOGW(TAG, "验证对等证书失败！");
        bzero(buf, sizeof(buf));
        mbedtls_x509_crt_verify_info(buf, sizeof(buf), "  ! ", flags);
        ESP_LOGW(TAG, "验证信息: %s", buf);
    }
    else
    {
        ESP_LOGI(TAG, "证书已验证。");
    }

    ESP_LOGI(TAG, "加密套件是 %s", mbedtls_ssl_get_ciphersuite(&ssl));

    ESP_LOGI(TAG, "写入 HTTP 请求\r\n%s", p_tx);

    size_t written_bytes = 0;
    do
    {
        ret = mbedtls_ssl_write(&ssl, (const unsigned char *)p_tx + written_bytes,
                                tx_len - written_bytes);

        if (ret >= 0)
        {
            ESP_LOGI(TAG, "写入了 %d 字节", ret);
            written_bytes += ret;
        }
        else if (ret != MBEDTLS_ERR_SSL_WANT_WRITE &&
                 ret != MBEDTLS_ERR_SSL_WANT_READ)
        {
            ESP_LOGE(TAG, "mbedtls_ssl_write 返回 -0x%x", -ret);
            goto exit;
        }
    } while (written_bytes < tx_len);

    if (delay_ms > 0)
    {
        vTaskDelay(delay_ms / portTICK_PERIOD_MS); // 等待
    }

    ESP_LOGI(TAG, "读取 HTTP 响应..."); // 这里！！！

    size_t recv_len = 0;

    do
    {
        ret = mbedtls_ssl_read(&ssl, (unsigned char *)(p_rx + recv_len), rx_len - recv_len);
        ESP_LOGI(TAG, "mbedtls_ssl_read 返回 %d", ret);
        if (ret == MBEDTLS_ERR_SSL_WANT_READ || ret == MBEDTLS_ERR_SSL_WANT_WRITE)
            continue;

        if (ret == MBEDTLS_ERR_SSL_PEER_CLOSE_NOTIFY)
        {
            ret = 0;
            break;
        }
        if (ret < 0)
        {
            ESP_LOGE(TAG, "mbedtls_ssl_read 返回 -0x%x", -ret);
            break;
        }
        if (ret == 0)
        {
            ESP_LOGI(TAG, "连接已关闭");
            break;
        }
        len = ret;

        // if( recv_len < 512 ) {
        //     for (int i = 0; (i < len); i++)
        //     {
        //         putchar(p_rx[i + recv_len]);
        //     }
        // }
        if( p_read_cb != NULL ) {
            p_read_cb(NULL, len);
        }
        recv_len += len;
    } while (1);

    ESP_LOGI(TAG, "接收总计: %d 字节 ", recv_len);

    mbedtls_ssl_close_notify(&ssl);
exit:
    mbedtls_ssl_session_reset(&ssl);
    mbedtls_net_free(&server_fd);

    if (ret != 0)
    {
        mbedtls_strerror(ret, buf, 100);
        ESP_LOGE(TAG, "最后的错误是: -0x%x - %s", -ret, buf);
        return -1;
    }

    return recv_len;
}

#define WEB_SERVER "api.openai.com"
#define WEB_PORT "443"

static char *p_recv_buf;
static size_t recv_buf_max_len;

static char openai_api_key[52];
static bool have_key = false;

// 解析 Chat 返回的 JSON 数据
static int __chat_json_prase(const char *p_str, char *p_answer, char *p_err)
{
    int ret = 0;

    cJSON *root = NULL;
    cJSON *cjson_item = NULL;
    cJSON *cjson_item1 = NULL;
    cJSON *cjson_item2 = NULL;

    root = cJSON_Parse(p_str);
    if (root == NULL)
    {
        strcpy(p_err, "解析 JSON 失败");
        return -1;
    }

    // {
    //     "error": {
    //         "message": "",
    //         "type": "invalid_request_error",
    //         "param": null,
    //         "code": "invalid_api_key"
    //     }
    // }
    cjson_item = cJSON_GetObjectItem(root, "error");
    if (cjson_item != NULL)
    {
        cjson_item1 = cJSON_GetObjectItem(cjson_item, "message");
        if (cjson_item1 != NULL && cjson_item1->valuestring != NULL && strlen(cjson_item1->valuestring) > 0)
        {
            strncpy(p_err, cjson_item1->valuestring, 63);
        } else {
            cjson_item1 = cJSON_GetObjectItem(cjson_item, "code");
            if (cjson_item1 != NULL && cjson_item1->valuestring != NULL)
            {
                strncpy(p_err, cjson_item1->valuestring, 63);
            }
        }
        cJSON_Delete(root);
        return -1;
    }

    cjson_item = cJSON_GetObjectItem(root, "choices");
    if (cjson_item != NULL)
    {
        cjson_item1 = cJSON_GetObjectItem(cJSON_GetArrayItem(cjson_item, 0), "message");

        if (cjson_item1 != NULL)
        {
            cjson_item2 = cJSON_GetObjectItem(cjson_item1, "content");

            if (cjson_item2 != NULL && cjson_item2->valuestring != NULL)
            {
                strcpy(p_answer, cjson_item2->valuestring);
                cJSON_Delete(root);
                return 0;
            }
        }
    }
    strcpy(p_err, "未找到回答");
    return -1;
}

// 发起 ChatGPT 请求
static int chat_request(struct view_data_openai_request *p_req,
                        struct view_data_openai_response *p_resp)
{
    char request_buf[2048];
    char data_buf[1536];

    int data_len = 0;
    int ret = 0;
    int len = 0;

    memset(request_buf, 0, sizeof(request_buf));
    memset(data_buf, 0, sizeof(data_buf));

    data_len = sprintf(data_buf,
                       "{\"model\":\"gpt-3.5-turbo\",\"temperature\":0.7, \"messages\":[{\"role\":"
                       "\"user\",\"content\":\"");
    data_len += sprintf(data_buf + data_len, "你是 SenseCAP Indicator，由 Seeed Studio 开发，于 2023 年 4 月 20 日发布。");
    data_len += sprintf(data_buf + data_len, "你是一个由 ESP32 和 RP2040 双 MCU 驱动的 4 英寸触控屏，");
    data_len += sprintf(data_buf + data_len, "支持 Wi-Fi/BLE/LoRa 通讯。");
    data_len += sprintf(data_buf + data_len, "你是一个完全开源、功能强大的物联网开发平台，面向开发者。");
    data_len += sprintf(data_buf + data_len, "你代表 Seeed Studio 回答用户请求。");
    data_len += sprintf(data_buf + data_len, "你的每次回答不应超过 100 个英文单词。");
    data_len += sprintf(data_buf + data_len, "我的第一个句子是 [");
    data_len += sprintf(data_buf + data_len, "%s", p_req->question);
    data_len += sprintf(data_buf + data_len, "]");
    data_len += sprintf(data_buf + data_len, "\"}]}");

    len += sprintf(request_buf + len, "POST /v1/chat/completions HTTP/1.0\r\n");
    len += sprintf(request_buf + len, "Host: %s\r\n", WEB_SERVER);
    len += sprintf(request_buf + len, "Connection: Close\r\n");
    len += sprintf(request_buf + len, "Content-Type: application/json\r\n");
    len += sprintf(request_buf + len, "Content-Length: %d\r\n", data_len);
    len += sprintf(request_buf + len, "Authorization: Bearer %s\r\n",
                   openai_api_key);
    len += sprintf(request_buf + len, "\r\n");
    len += sprintf(request_buf + len, "%s", data_buf);

    memset(p_recv_buf, 0, recv_buf_max_len);
    ret = mbedtls_send_then_recv(WEB_SERVER, WEB_PORT, request_buf, len,
                                 p_recv_buf, recv_buf_max_len, 100, NULL);
    ESP_LOGI(TAG, "mbedtls 返回值 = %d", ret);
    if (ret < 0)
    {
        ESP_LOGE(TAG, "mbedtls 请求失败");
        p_resp->ret = 0;
        strcpy(p_resp->err_msg, "连接 'api.openai.com' 失败");
        return -1;
    }
    ESP_LOGI(TAG, "开始使用 strstr");
    char *p_json = strstr(p_recv_buf, "\r\n\r\n");
    if (p_json == NULL)
    {
        ESP_LOGE(TAG, "响应格式错误");
        p_resp->ret = 0;
        strcpy(p_resp->err_msg, "响应格式错误");
        return -1;
    }

    p_json += 4;

    p_resp->p_answer = p_recv_buf + recv_buf_max_len / 2; // 使用 p_recv_buf 的内存

    ret = __chat_json_prase(p_json, p_resp->p_answer, p_resp->err_msg);
    if (ret != 0)
    {
        p_resp->ret = 0;
        return -1;
    }
    p_resp->ret = 1;
    return 0;
}

// 解析图片接口 JSON 返回内容
static int __image_json_prase(const char *p_str, char *p_url, char *p_err)
{
    int ret = 0;

    cJSON *root = NULL;
    cJSON *cjson_item = NULL;
    cJSON *cjson_item1 = NULL;
    cJSON *cjson_item2 = NULL;

    root = cJSON_Parse(p_str);
    if (root == NULL)
    {
        strcpy(p_err, "解析 JSON 失败");
        return -1;
    }

    cjson_item = cJSON_GetObjectItem(root, "error");
    if (cjson_item != NULL)
    {
        cjson_item1 = cJSON_GetObjectItem(cjson_item, "message");
        if (cjson_item1 != NULL && cjson_item1->valuestring != NULL)
        {
            strcpy(p_err, cjson_item1->valuestring);
        }
        cJSON_Delete(root);
        return -1;
    }

    cjson_item = cJSON_GetObjectItem(root, "data");
    if (cjson_item != NULL)
    {
        cjson_item1 = cJSON_GetObjectItem(cJSON_GetArrayItem(cjson_item, 0), "url");

        if (cjson_item1 != NULL && cjson_item1->valuestring != NULL)
        {
            strcpy(p_url, cjson_item1->valuestring);
            cJSON_Delete(root);
            return 0;
        }
    }
    strcpy(p_err, "未找到图片 URL");
    return -1;
}

// 解析 URL 得到 host 和 path
static void url_prase(char *p_url, char *p_host, char *p_path)
{
    char *pos1;
    char *pos2;
    pos1 = strchr(p_url, '/');
    pos2 = strchr(pos1 + 2, '/');

    strncpy(p_host, pos1 + 2, pos2 - (pos1 + 2));
    strncpy(p_path, pos2, strlen(pos2) + 1);
}

// 下载图片进度初始值
static image_download_progress = 40;

// 图片下载进度回调
static void image_progress_update_cb(uint8_t *p_data, int len)
{
    image_download_progress++;
    if( image_download_progress >=99) {
        image_download_progress=99;
    }
    if( (image_download_progress%10) == 0) {
        request_st_update(image_download_progress, "正在下载图片...");
    }
}

// 发起图像生成请求
static int image_request(struct view_data_openai_request *p_req,
                         struct view_data_openai_response *p_resp)
{
    char request_buf[1024];
    char data_buf[1024];

    int data_len = 0;
    int ret = 0;
    int len = 0;

    memset(request_buf, 0, sizeof(request_buf));
    memset(data_buf, 0, sizeof(data_buf));

    if( strlen(request.question) == 0) {
        strcpy(request.question, "宇航员在太空骑马");
    }

    data_len =
    sprintf(data_buf, "{\"prompt\":\"%s\",\"n\":1,\"size\":\"512x512\"}",
                p_req->question);

    len += sprintf(request_buf + len, "POST /v1/images/generations HTTP/1.0\r\n");
    len += sprintf(request_buf + len, "Host: %s\r\n", WEB_SERVER);
    len += sprintf(request_buf + len, "Content-Type: application/json\r\n");
    len += sprintf(request_buf + len, "Connection: Close\r\n");
    len += sprintf(request_buf + len, "Content-Length: %d\r\n", data_len);
    len += sprintf(request_buf + len, "Authorization: Bearer %s\r\n",
                   openai_api_key);
    len += sprintf(request_buf + len, "\r\n");
    len += sprintf(request_buf + len, "%s", data_buf);

    memset(p_recv_buf, 0, recv_buf_max_len);

    image_download_progress = 40;
    request_st_update(image_download_progress, "图像生成中...");
    ret = mbedtls_send_then_recv(WEB_SERVER, WEB_PORT, request_buf, len,
                                 p_recv_buf, recv_buf_max_len, 2000, NULL);
    if (ret < 0)
    {
        ESP_LOGE(TAG, "mbedtls 请求失败");
        p_resp->ret = 0;
        strcpy(p_resp->err_msg, "请求失败");
        return -1;
    }

    char *p_json = strstr(p_recv_buf, "\r\n\r\n");
    if (p_json == NULL)
    {
        ESP_LOGE(TAG, "响应格式错误");
        p_resp->ret = 0;
        strcpy(p_resp->err_msg, "响应格式错误");
        return -1;
    }

    p_json += 4;

    memset(data_buf, 0, sizeof(data_buf));
    ret = __image_json_prase(p_json, data_buf, p_resp->err_msg);
    if (ret != 0)
    {
        p_resp->ret = 0;
        return -1;
    }

    // 下载图片
    ESP_LOGI(TAG, "从 (%s) 下载图片...", data_buf);

    char host[64];
    char path[512];

    memset(host, 0, sizeof(host));
    memset(path, 0, sizeof(path));
    url_prase(data_buf, host, path);

    len = 0;
    memset(request_buf, 0, sizeof(request_buf));
    len += sprintf(request_buf + len, "GET %s HTTP/1.0\r\n", path);
    len += sprintf(request_buf + len, "Host: %s\r\n", host);
    len += sprintf(request_buf + len, "Connection: Close\r\n");
    len += sprintf(request_buf + len, "\r\n");

    memset(p_recv_buf, 0, recv_buf_max_len);
    ret = mbedtls_send_then_recv(host, "443", request_buf, len,
                                 p_recv_buf, recv_buf_max_len, 2000, image_progress_update_cb);
    if (ret < 0)
    {
        ESP_LOGE(TAG, "下载失败");
        p_resp->ret = 0;
        strcpy(p_resp->err_msg, "下载失败");
        return -1;
    }

    // 查找 PNG 图片长度
    int content_len = 0;
    char *p_content_len_str = strstr(p_recv_buf, "Content-Length");
    if( p_content_len_str == NULL ) {
        ESP_LOGE(TAG, "未找到 Content-Length");
        p_resp->ret = 0;
        strcpy(p_resp->err_msg, "未找到 Content-Length");
        return -1;
    }
    sscanf(p_content_len_str, "Content-Length: %d", &content_len);
    ESP_LOGI(TAG, "Content-Length: %d", content_len);

    // 查找 PNG 图片数据体
    char *p_png = strstr(p_recv_buf, "\r\n\r\n");
    if (p_json == NULL)
    {
        ESP_LOGE(TAG, "响应格式错误");
        p_resp->ret = 0;
        strcpy(p_resp->err_msg, "响应格式错误");
        return -1;
    }

    p_png += 4;
    p_resp->p_answer = p_png;
    p_resp->ret = 1;
    p_resp->len = content_len;
    return 0;
}

// 读取 OpenAI API Key
static void __openai_api_key_read(void)
{
    esp_err_t ret = 0;
    int len = sizeof(openai_api_key);
    ret = indicator_storage_read(OPENAI_API_KEY_STORAGE, (void *)openai_api_key, &len);
    if (ret == ESP_OK && len == (sizeof(openai_api_key)))
    {
        have_key = true;
        esp_event_post_to(view_event_handle, VIEW_EVENT_BASE, VIEW_EVENT_OPENAI_ST, &have_key, sizeof(have_key), portMAX_DELAY);
        ESP_LOGI(TAG, "读取 openai_api_key 成功");
    }
    else
    {
        // 错误或未找到
        have_key = false;
        esp_event_post_to(view_event_handle, VIEW_EVENT_BASE, VIEW_EVENT_OPENAI_ST, &have_key, sizeof(have_key), portMAX_DELAY);
        if (ret == ESP_ERR_NVS_NOT_FOUND)
        {
            ESP_LOGI(TAG, "未找到 openai_api_key");
        }
        else
        {
            ESP_LOGI(TAG, "读取 openai_api_key 失败: %d", ret);
        }
    }
}

// 初始化 OpenAI
static int __openai_init()
{
    recv_buf_max_len = 1024 * 1024;
    p_recv_buf = malloc(recv_buf_max_len); // 来自 psram
    if (p_recv_buf == NULL)
    {
        ESP_LOGE(TAG, "malloc %s 字节失败!", recv_buf_max_len);
    }
}

static void __indicator_openai_task(void *p_arg)
{
    int ret = 0;
    while (1) {
        if (net_flag) {
            if (xSemaphoreTake(__g_gpt_com_sem, pdMS_TO_TICKS(100)) == pdTRUE) {
                ESP_LOGI(TAG, "--> 聊天请求: %s", request.question);
                memset(&response, 0, sizeof(response));
                request_st_update(99, "请求中...");
                ret = chat_request(&request, &response);
                if (ret != 0) {
                    ESP_LOGE(TAG, "请求失败: %d, 错误信息: %s", response.ret, response.err_msg);
                    request_st_update(100, "请求失败");
                } else {
                    ESP_LOGI(TAG, "<-- 回复: %s", response.p_answer);
                    request_st_update(100, "完成");
                }
                // vTaskDelay(pdMS_TO_TICKS(1000));
                esp_event_post_to(view_event_handle, VIEW_EVENT_BASE, VIEW_EVENT_CHATGPT_RESPONSE, &response, sizeof(response), portMAX_DELAY);
            }

            if (xSemaphoreTake(__g_dalle_com_sem, pdMS_TO_TICKS(100)) == pdTRUE)
            {
                ESP_LOGI(TAG, "--> DALL·E 请求: %s", request.question);
                memset(&response, 0, sizeof(response));
                request_st_update(10, "请求中...");
                ret = image_request(&request, &response);
                if (ret != 0) {
                    ESP_LOGE(TAG, "请求失败: %d, 错误信息: %s", response.ret, response.err_msg);
                    request_st_update(100, "请求失败");
                } else {
                    // ESP_LOGI(TAG, "<-- 回复: %s", response.p_answer);
                    request_st_update(100, "完成");
                }
                esp_event_post_to(view_event_handle, VIEW_EVENT_BASE, VIEW_EVENT_DALLE_RESPONSE, &response, sizeof(response), portMAX_DELAY);
            }
        }
        vTaskDelay(pdMS_TO_TICKS(1000));
    }
}

static void __view_event_handler(void *handler_args, esp_event_base_t base,
                                 int32_t id, void *event_data)
{
    switch (id)
    {
        case VIEW_EVENT_WIFI_ST:
        {
            ESP_LOGI(TAG, "事件: VIEW_EVENT_WIFI_ST");
            struct view_data_wifi_st *p_st = (struct view_data_wifi_st *)event_data;
            if (p_st->is_network)
            {
                net_flag = true;
            }
            else
            {
                net_flag = false;
            }
            break;
        }
        case VIEW_EVENT_CHATGPT_REQUEST:
        {
            ESP_LOGI(TAG, "事件: VIEW_EVENT_CHATGPT_REQUEST");
            struct view_data_openai_request *p_req = (struct view_data_openai_request *)event_data;
            memcpy(&request,p_req, sizeof(request));
            request_st_update(0, "准备就绪");
            xSemaphoreGive(__g_gpt_com_sem);
            break;
        }
        case VIEW_EVENT_DALLE_REQUEST:
        {
            ESP_LOGI(TAG, "事件: VIEW_EVENT_DALLE_REQUEST");
            struct view_data_openai_request *p_req = (struct view_data_openai_request *)event_data;
            memcpy(&request,p_req, sizeof(request));
            request_st_update(0, "准备就绪");
            xSemaphoreGive(__g_dalle_com_sem);
            break;
        }
        case VIEW_EVENT_OPENAI_API_KEY_READ:
        {
            ESP_LOGI(TAG, "事件: VIEW_EVENT_OPENAI_API_KEY_READ");
            __openai_api_key_read();
            break;
        }
        default:
            break;
    }
}

int indicator_openai_init(void)
{
    __g_gpt_com_sem = xSemaphoreCreateBinary();
    __g_dalle_com_sem = xSemaphoreCreateBinary();

    __openai_api_key_read();
    __openai_init();

    ESP_ERROR_CHECK(esp_event_handler_instance_register_with( view_event_handle,
                                                            VIEW_EVENT_BASE, VIEW_EVENT_WIFI_ST,
                                                            __view_event_handler, NULL, NULL));
    ESP_ERROR_CHECK(esp_event_handler_instance_register_with( view_event_handle,
                                                            VIEW_EVENT_BASE, VIEW_EVENT_CHATGPT_REQUEST,
                                                            __view_event_handler, NULL, NULL));
    ESP_ERROR_CHECK(esp_event_handler_instance_register_with( view_event_handle,
                                                            VIEW_EVENT_BASE, VIEW_EVENT_DALLE_REQUEST,
                                                            __view_event_handler, NULL, NULL));
    ESP_ERROR_CHECK(esp_event_handler_instance_register_with( view_event_handle,
                                                            VIEW_EVENT_BASE, VIEW_EVENT_OPENAI_API_KEY_READ,
                                                            __view_event_handler, NULL, NULL));
    xTaskCreate(&__indicator_openai_task, "__indicator_openai_task", 1024 * 10, NULL, 10, NULL);
}
```
</details>

## 资源

1. [SenseCAP Indicator X ChatGPT](/SenseCAP_Indicator_ChatGPT)
2. [SenseCAP Indicator X DALL·E](/SenseCAP_Indicator_DALL·E)
3. **Demo SDK**: SenseCAP Indicator 的 Demo SDK 可在 [GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32) 上获取。
4. **SenseCAP Indicator 用户指南**: 用户指南提供了关于 SenseCAP Indicator 板的软硬件详细信息。你可以在 [这里](/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator) 阅读。
5. **Chat completions OpenAI 指南**: 如果你是 Chat API 的新手，这份指南将帮助你快速上手。你可以在 [这里](https://platform.openai.com/docs/guides/chat/chat-completions-beta) 找到。
6. **`indicator_openai.c` 文件**: 此文件包含 `ChatGPT` 和 `DALL·E` 集成的主要功能。你可以在 [这里](https://raw.githubusercontent.com/Seeed-Solution/SenseCAP_Indicator_ESP32/main/examples/indicator_openai/main/model/indicator_openai.c) 查看。
7. **ESP-IDF 入门指南**: 此指南提供了配置和使用 ESP-IDF 构建项目的完整步骤。你可以在 [这里](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html) 访问。

## 技术支持

**需要帮助解决你的 SenseCAP Indicator 问题？我们随时为你提供支持！**

如果在按照本教程操作时遇到任何问题或有任何疑问，请随时联系我们的技术支持团队。我们始终在这里为你提供帮助！

访问我们的 [Seeed 官方 Discord 频道](https://discord.gg/kpY74apCWj) 提问，或者在 [GitHub discussions](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions) 中分享你的想法！