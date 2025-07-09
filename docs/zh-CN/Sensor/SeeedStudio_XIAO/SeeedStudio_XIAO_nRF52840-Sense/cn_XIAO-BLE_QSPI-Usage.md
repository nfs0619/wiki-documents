---
description: 本文档描述了如何在 XIAO nRF52840 Sense 上使用 QSPI Flash。
title: XIAO nRF52840 Sense 的 QSPI Flash
keywords:
- QSPI Flash
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao-ble-qspi-flash-usage
last_update:
  date: 05/15/2025
  author: Citric
---

# 在 Seeed Studio XIAO nRF52840 Sense 上使用 QSPI Flash

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

:::tip
特别感谢社区用户 **JM_Laird** 和 **Haakonish** 对本教程的支持和帮助！本文使用的程序来源于 Github 用户 **PMCheetham**，源代码可以在 **[这里](https://github.com/PMCheetham/SEEED_nRF52840_QSPI/tree/main)** 找到。
:::

欢迎来到使用 XIAO nRF52840 和 XIAO nRF52840 Sense 上的 QSPI Flash 的教程！XIAO 是一款功能强大的紧凑型开发板，拥有 256 KB RAM、1 MB Flash 和 2 MB 板载 Flash。在本教程中，您将学习如何在 XIAO 开发板上使用 QSPI Flash，这可以极大地扩展存储容量并加快您的项目开发速度。让我们开始吧！

以下是 PMCheetham 提供的一个示例程序，它可以很好地运行在 XIAO nRF52840 Sense 上。通过以下程序，您可以自由使用 XIAO 上的 QSPI Flash。

```cpp
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include "nrfx_qspi.h"
#include "app_util_platform.h"
#include "nrf_log.h"
#include "nrf_log_ctrl.h"
#include "nrf_log_default_backends.h"
#include "sdk_config.h"
#include "nrf_delay.h"
#include "avr/interrupt.h"

/* 
 * 代码中的一些奇怪部分...或者我不理解的地方
 * 
 * 在 Setup() 中的第一次读取后，它成功读取了数据（返回 0 = NRFX_SUCCESS），但状态标志的高 8 位设置为 0xFF，
 * 这导致 nrfx_qspi_mem_busy_check() 显示 17（返回 17 = NRFX_ERROR_BUSY）。
 * 然而，将 STATUS 寄存器与 8 进行掩码后显示 Ready 状态 = 1，QSPI 已准备好！
 * 这就是我编写 QSPI_IsReady() 的原因。
 * 
 * 如果尝试像这样设置，nrf_qspi_phy_conf_t 作为结构不可见：
 *   QSPIConfig.phy_if {
 *     .xxx = yyy,
 *     .aaa = bbb
 *   };
 *   
 * 我不知道 48ms 深度休眠模式（DPM）的意义是什么。
 * 如果在 48ms 内未使用，它是否会进入 DPM，然后在指令下需要 48ms 才能唤醒？
 * 
 * 希望您喜欢这段代码片段！随意修改和使用它。
 * 感谢 JM_Laird 和 Haakonish 在 Case ID: 224515 中的帮助。
 * 是的，我本可以让它更整洁，但确实需要将其中的一些部分添加到项目中并在那里整理！
 */

// QSPI 设置
#define QSPI_STD_CMD_WRSR   0x01
#define QSPI_STD_CMD_RSTEN  0x66
#define QSPI_STD_CMD_RST    0x99
#define QSPI_DPM_ENTER      0x0003 // 3 x 256 x 62.5ns = 48ms
#define QSPI_DPM_EXIT       0x0003

static uint32_t               *QSPI_Status_Ptr = (uint32_t*) 0x40029604;  // 针对 SEEED XIAO BLE - nRF52840 的设置
static nrfx_qspi_config_t     QSPIConfig;
static nrf_qspi_cinstr_conf_t QSPICinstr_cfg;
static const uint32_t         MemToUse = 64 * 1024;  // 修改此值以创建更大的读写，64Kb 是擦除的大小
static bool                   Debug_On = true;
static uint16_t               pBuf[MemToUse / 2] = {0};  // 使用 16 位，因为这段内存将用于此目的
static uint32_t               *BufMem = (uint32_t*) &pBuf;
static bool                   QSPIWait = false;
// QSPI 设置完成

static void qspi_handler(nrfx_qspi_evt_t event, void *p_context) {
  // UNUSED_PARAMETER(p_context);
  // Serial.println("QSPI 中断");
  // if (event == NRFX_QSPI_EVENT_DONE) {
  //   QSPI_HasFinished = true;
  // }
}

static void QSPI_Status(char ASender[]) { // 打印 QSPI 状态
  Serial.print("(");
  Serial.print(ASender);
  Serial.print(") QSPI 正忙/空闲...结果 = ");
  Serial.println(nrfx_qspi_mem_busy_check() & 8);
  Serial.print("(");
  Serial.print(ASender);
  Serial.print(") QSPI 状态标志 = 0x");
  Serial.print(NRF_QSPI->STATUS, HEX);
  Serial.print(" (来自 NRF_QSPI) 或 0x");
  Serial.print(*QSPI_Status_Ptr, HEX);
  Serial.println(" (来自 *QSPI_Status_Ptr)");
}

static void QSPI_PrintData(uint16_t *AnAddress, uint32_t AnAmount) {
  uint32_t i;

  Serial.print("数据 :"); 
  for (i = 0; i < AnAmount; i++) {
    Serial.print(" 0x");
    Serial.print(*(AnAddress + i), HEX);
  }
  Serial.println("");
}

static nrfx_err_t QSPI_IsReady() {
  if (((*QSPI_Status_Ptr & 8) == 8) && (*QSPI_Status_Ptr & 0x01000000) == 0) {
    return NRFX_SUCCESS;  
  } else {
   return NRFX_ERROR_BUSY; 
  }
}

static nrfx_err_t QSPI_WaitForReady() {
  while (QSPI_IsReady() == NRFX_ERROR_BUSY) {
    if (Debug_On) {
      Serial.print("*QSPI_Status_Ptr & 8 = ");
      Serial.print(*QSPI_Status_Ptr & 8);
      Serial.print(", *QSPI_Status_Ptr & 0x01000000 = 0x");
      Serial.println(*QSPI_Status_Ptr & 0x01000000, HEX);
      QSPI_Status("QSPI_WaitForReady");
    }   
  }
  return NRFX_SUCCESS;
}

static nrfx_err_t QSPI_Initialise() { // 初始化 QSPI 和 NRF LOG
  uint32_t Error_Code;

  NRF_LOG_INIT(NULL); // 初始化 NRF 日志
  NRF_LOG_DEFAULT_BACKENDS_INIT();
  // QSPI 配置
  QSPIConfig.xip_offset = NRFX_QSPI_CONFIG_XIP_OFFSET;                       
  QSPIConfig.pins = { // 针对 SEEED XIAO BLE - nRF52840 的设置                                                     
   .sck_pin     = 21,                                
   .csn_pin     = 25,                                
   .io0_pin     = 20,                                
   .io1_pin     = 24,                                
   .io2_pin     = 22,                                
   .io3_pin     = 23,                                
  };                                                                  
  QSPIConfig.irq_priority = (uint8_t)NRFX_QSPI_CONFIG_IRQ_PRIORITY;           
  QSPIConfig.prot_if = {                                                        
    // .readoc     = (nrf_qspi_readoc_t)NRFX_QSPI_CONFIG_READOC,
    .readoc     = (nrf_qspi_readoc_t)NRF_QSPI_READOC_READ4O,       
    // .writeoc    = (nrf_qspi_writeoc_t)NRFX_QSPI_CONFIG_WRITEOC,     
    .writeoc    = (nrf_qspi_writeoc_t)NRF_QSPI_WRITEOC_PP4O,
    .addrmode   = (nrf_qspi_addrmode_t)NRFX_QSPI_CONFIG_ADDRMODE,   
    .dpmconfig  = false,                                            
  };                   
  QSPIConfig.phy_if.sck_freq   = (nrf_qspi_frequency_t)NRF_QSPI_FREQ_32MDIV1;  // 我必须这样做，因为它抱怨 nrf_qspi_phy_conf_t 不可见                                        
  // QSPIConfig.phy_if.sck_freq   = (nrf_qspi_frequency_t)NRFX_QSPI_CONFIG_FREQUENCY; 
  QSPIConfig.phy_if.spi_mode   = (nrf_qspi_spi_mode_t)NRFX_QSPI_CONFIG_MODE;
  QSPIConfig.phy_if.dpmen      = false;
  // QSPI 配置完成
  // 设置 QSPI 以允许 DPM，但将其关闭
  QSPIConfig.prot_if.dpmconfig = true;
  NRF_QSPI->DPMDUR = (QSPI_DPM_ENTER << 16) | QSPI_DPM_EXIT; // 在 Nordic Q&A 页面上找到的，设置深度休眠模式计时器
  Error_Code = 1;
  while (Error_Code != 0) {
    Error_Code = nrfx_qspi_init(&QSPIConfig, NULL, NULL);
    if (Error_Code != NRFX_SUCCESS) {
      if (Debug_On) {
        Serial.print("(QSPI_Initialise) nrfx_qspi_init 返回 : ");
        Serial.println(Error_Code);
      }
    } else {
      if (Debug_On) {
        Serial.println("(QSPI_Initialise) nrfx_qspi_init 成功");
      }
    }
  }
  QSPI_Status("QSPI_Initialise (在 QSIP_Configure_Memory 之前)");
  QSIP_Configure_Memory();
  if (Debug_On) {
    Serial.println("(QSPI_Initialise) 等待 QSPI 准备好...");
  }
  NRF_QSPI->TASKS_ACTIVATE = 1;
  QSPI_WaitForReady();
  if (Debug_On) {
    Serial.println("(QSPI_Initialise) QSPI 已准备好");
  }
  return QSPI_IsReady(); 
}

static void QSPI_Erase(uint32_t AStartAddress) {
  uint32_t   TimeTaken;
  bool       QSPIReady = false;
  bool       AlreadyPrinted = false;

  if (Debug_On) {
    Serial.println("(QSPI_Erase) 擦除内存");
  }
  while (!QSPIReady) {
    if (QSPI_IsReady() != NRFX_SUCCESS) {
      if (!AlreadyPrinted) {
        QSPI_Status("QSPI_Erase (等待中)");
        AlreadyPrinted = true;
      }
    } else {
      QSPIReady = true;
      QSPI_Status("QSPI_Erase (等待循环结束)");
    }
  }
  if (Debug_On) {
    QSPI_Status("QSPI_Erase (完成等待)");
    TimeTaken = millis();
  }
  if (nrfx_qspi_erase(NRF_QSPI_ERASE_LEN_64KB, AStartAddress) != NRFX_SUCCESS) {
    if (Debug_On) {
      Serial.print("(QSPI_Initialise_Page) QSPI 地址 0x");
      Serial.print(AStartAddress, HEX);
      Serial.println(" 擦除失败！");
    }
  } else {     
    if (Debug_On) {
      TimeTaken = millis() - TimeTaken;
      Serial.print("(QSPI_Initialise_Page) QSPI 花费了 ");
      Serial.print(TimeTaken);
      Serial.println("ms 擦除一个 64Kb 页面");
    }
  }
}

static void QSIP_Configure_Memory() {
  // uint8_t  temporary = 0x40;
  uint8_t  temporary[] = {0x00, 0x02};
  uint32_t Error_Code;
  
  QSPICinstr_cfg = {
    .opcode    = QSPI_STD_CMD_RSTEN,
    .length    = NRF_QSPI_CINSTR_LEN_1B,
    .io2_level = true,
    .io3_level = true,
    .wipwait   = QSPIWait,
    .wren      = true
  };
  QSPI_WaitForReady();
  if (nrfx_qspi_cinstr_xfer(&QSPICinstr_cfg, NULL, NULL) != NRFX_SUCCESS) { // 发送复位使能
    if (Debug_On) {
      Serial.println("(QSIP_Configure_Memory) QSPI '发送复位使能' 失败！");
    }
  } else {
    QSPICinstr_cfg.opcode = QSPI_STD_CMD_RST;
    QSPI_WaitForReady();
    if (nrfx_qspi_cinstr_xfer(&QSPICinstr_cfg, NULL, NULL) != NRFX_SUCCESS) { // 发送复位命令
      if (Debug_On) {
        Serial.println("(QSIP_Configure_Memory) QSPI 复位失败！");
      }
    } else {
      QSPICinstr_cfg.opcode = QSPI_STD_CMD_WRSR;
      QSPICinstr_cfg.length = NRF_QSPI_CINSTR_LEN_3B;
      QSPI_WaitForReady();
      if (nrfx_qspi_cinstr_xfer(&QSPICinstr_cfg, &temporary, NULL) != NRFX_SUCCESS) { // 切换到 QSPI 模式
        if (Debug_On) {
          Serial.println("(QSIP_Configure_Memory) QSPI 切换到 QSPI 模式失败！");
        }
      } else {
          QSPI_Status("QSIP_Configure_Memory");
      }
    }
  }
}

void setup() {
  uint32_t Error_Code;
  uint32_t TimeTaken;
  uint16_t i;

  delay(10000);
  Serial.begin(9600);
  while (!Serial) {}

  if (Debug_On) {
    Serial.println("(Setup) QSPI 初始化中...");
  }
  if (QSPI_Initialise() != NRFX_SUCCESS) {
    if (Debug_On) {
      Serial.println("(Setup) QSPI 内存启动失败！");
    }
  } else {
    if (Debug_On) {
      Serial.println("(Setup) QSPI 已初始化并准备好");
      QSPI_Status("Setup (初始化后)");
    }
  }

  if (Debug_On) {
    Serial.print("(Setup) QSPI 即将被读取然后擦除。当前忙状态为 = ");
    Serial.println(QSPI_IsReady());
  }

  // QSPI 速度测试
  if (Debug_On) {
    QSPI_Status("Setup (读取前)");
    TimeTaken = millis();
  }
  Error_Code = nrfx_qspi_read(pBuf, MemToUse, 0x0);
  if (Debug_On) {
    TimeTaken = millis() - TimeTaken;
    Serial.print("(Setup) QSPI 花费了 ");
    Serial.print(TimeTaken);
    Serial.print("ms 读取 ");
    Serial.print(MemToUse / 1024);
    Serial.print("Kb ... 读取结果 = ");
    Serial.println(Error_Code);
    QSPI_Status("Setup (读取后)");
    QSPI_WaitForReady();
    QSPI_PrintData(&pBuf[0], 10);
  }
  if (Debug_On) {
    Serial.println("QSPI 擦除 64Kb 内存");
  }
  QSPI_Erase(0); 
  if (Debug_On) {
    Serial.println("(Setup) 擦除后读取 QSPI");
    TimeTaken = millis();
  }
  QSPI_WaitForReady();
  Error_Code = nrfx_qspi_read(pBuf, MemToUse, 0x0);
  if (Debug_On) {
    TimeTaken = millis() - TimeTaken;
    Serial.print("(Setup) QSPI 花费了 ");
    Serial.print(TimeTaken);
    Serial.print("ms 读取 ");
    Serial.print(MemToUse / 1024);
    Serial.print("Kb ... 读取结果 = ");
    Serial.println(Error_Code);
    QSPI_WaitForReady();
    QSPI_PrintData(&pBuf[0], 10);
  }
  for (i = 0; i < MemToUse / 2; i++) {
    pBuf[i] = i * 2;
  }
  QSPI_WaitForReady();
  if (Debug_On) {
    Serial.println("(Setup) 在 QSPI 写入之前");
    TimeTaken = millis();
  }
  Error_Code = nrfx_qspi_write(pBuf, MemToUse, 0x0);
  if (Debug_On) {
    TimeTaken = millis() - TimeTaken;
    Serial.print("(Setup) QSPI 花费了 ");
    Serial.print(TimeTaken);
    Serial.print("ms 写入 ");
    Serial.print(MemToUse / 1024);
    Serial.print("Kb ... 写入结果 = ");
    Serial.println(Error_Code);
  }
  QSPI_WaitForReady();
  if (Debug_On) {
    Serial.println("(Setup) 在 QSPI 读取之前");
    TimeTaken = millis();
  }
  Error_Code = nrfx_qspi_read(pBuf, MemToUse, 0x0);
  if (Debug_On) {
    TimeTaken = millis() - TimeTaken;
    Serial.print("(Setup) QSPI 花费了 ");
    Serial.print(TimeTaken);
    Serial.print("ms 读取 ");
    Serial.print(MemToUse / 1024);
    Serial.print("Kb ... 读取结果 = ");
    Serial.println(Error_Code);
    QSPI_WaitForReady();
    QSPI_PrintData(&pBuf[0], 10);
  }
  QSPI_WaitForReady();
  QSPI_Status("Setup");
  // QSPI 速度测试完成
}

void loop() {
  delay(10000);
}
```

该程序仅适用于 **mbed** 开发板，因此在编译和上传时，请在 mbed 选项卡下选择 XIAO nRF52840。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new7.png" alt="pir" width={800} height="auto" /></p>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>