---
description: この記事では、XIAO nRF52840 SenseでQSPI Flashを使用する方法について説明します。
title: XIAO nRF52840 SenseのQSPI Flash
keywords:
- QSPI Flash
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao-ble-qspi-flash-usage
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio XIAO nRF52840 SenseでのQSPI Flashの使用方法

:::tip
このチュートリアルのサポートと協力をしてくださったコミュニティユーザーの**JM_Laird**さんと**Haakonish**さんに特別な感謝を申し上げます！この記事で使用されているプログラムはGithubユーザーの**PMCheetham**さんから提供されたもので、ソースは**[こちら](https://github.com/PMCheetham/SEEED_nRF52840_QSPI/tree/main)**で確認できます。
:::

XIAO nRF52840およびXIAO nRF52840 SenseでQSPI Flashを使用するためのチュートリアルへようこそ！XIAOは、256 KB RAM、1 MB Flash、2 MBのオンボードFlashを備えた強力でコンパクトなボードです。このチュートリアルでは、XIAOボードでQSPI Flashを活用する方法を学び、ストレージ容量を大幅に拡張し、プロジェクトを高速化することができます。それでは始めましょう！

以下は、PMCheethamによって提供されたサンプルプログラムで、XIAO nRF52840 Senseで正常に動作します。このプログラムを使用することで、XIAOのQSPI Flashを自由に使用できます。

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
 * このコードの奇妙な部分...または理解できない部分
 * 
 * Setup()内の最初のREADの後、データの読み取りに成功します（0 = NRFX_SUCCESSを返します）が、
 * ステータスフラグの上位8ビットが0xFFに設定されており、これによりnrfx_qspi_mem_busy_check()が
 * 17（17 = NRFX_ERROR_BUSY）を返します。
 * しかし、STATUSレジスタを8でマスクすると、Ready Status = 1が明らかになり、QSPIが準備完了であることがわかります！
 * これがQSPI_IsReady()を書いた理由です。
 * 
 * nrf_qspi_phy_conf_tは、以下のように設定しようとすると構造体として認識されません：
 *   QSPIConfig.phy_if {
 *     .xxx = yyy,
 *     .aaa = bbb
 *   };
 *   
 * 48msのDeep Power-down Mode（DPM）の重要性がわかりません。
 * 使用されない場合、48msでDPMに入るのでしょうか？そして、指示された場合、48msで起動するのでしょうか？
 * 
 * このコードのスニペットを楽しんでください！自由に改変して使用してください。
 * Case ID: 224515でJM_LairdさんとHaakonishさんに感謝します。
 * そして、はい、もっときれいにすることもできましたが、プロジェクトにいくつかの部分を追加してそこで整理する必要があります！
 */

// QSPI設定
#define QSPI_STD_CMD_WRSR   0x01
#define QSPI_STD_CMD_RSTEN  0x66
#define QSPI_STD_CMD_RST    0x99
#define QSPI_DPM_ENTER      0x0003 // 3 x 256 x 62.5ns = 48ms
#define QSPI_DPM_EXIT       0x0003

static uint32_t               *QSPI_Status_Ptr = (uint32_t*) 0x40029604;  // SEEED XIAO BLE - nRF52840用の設定
static nrfx_qspi_config_t     QSPIConfig;
static nrf_qspi_cinstr_conf_t QSPICinstr_cfg;
static const uint32_t         MemToUse = 64 * 1024;  // 読み書きサイズを大きくするにはこれを変更、64Kbは消去サイズ
static bool                   Debug_On = true;
static uint16_t               pBuf[MemToUse / 2] = {0};  // 16ビットはこのメモリが使用される形式
static uint32_t               *BufMem = (uint32_t*) &pBuf;
static bool                   QSPIWait = false;
// QSPI設定完了

static void qspi_handler(nrfx_qspi_evt_t event, void *p_context) {
  // UNUSED_PARAMETER(p_context);
  // Serial.println("QSPI割り込み");
  // if (event == NRFX_QSPI_EVENT_DONE) {
  //   QSPI_HasFinished = true;
  // }
}

static void QSPI_Status(char ASender[]) { // QSPIステータスを出力
  Serial.print("(");
  Serial.print(ASender);
  Serial.print(") QSPIはビジー/アイドル状態... 結果 = ");
  Serial.println(nrfx_qspi_mem_busy_check() & 8);
  Serial.print("(");
  Serial.print(ASender);
  Serial.print(") QSPIステータスフラグ = 0x");
  Serial.print(NRF_QSPI->STATUS, HEX);
  Serial.print(" (NRF_QSPIから) または 0x");
  Serial.print(*QSPI_Status_Ptr, HEX);
  Serial.println(" (*QSPI_Status_Ptrから)");
}

static void QSPI_PrintData(uint16_t *AnAddress, uint32_t AnAmount) {
  uint32_t i;

  Serial.print("データ :"); 
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

static nrfx_err_t QSPI_Initialise() { // QSPIとNRF LOGを初期化
  uint32_t Error_Code;

  NRF_LOG_INIT(NULL); // NRF Logを初期化
  NRF_LOG_DEFAULT_BACKENDS_INIT();
  // QSPI設定
  QSPIConfig.xip_offset = NRFX_QSPI_CONFIG_XIP_OFFSET;                       
  QSPIConfig.pins = { // SEEED XIAO BLE - nRF52840用の設定                                                     
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
  QSPIConfig.phy_if.sck_freq   = (nrf_qspi_frequency_t)NRF_QSPI_FREQ_32MDIV1;  // この方法で設定しないとnrf_qspi_phy_conf_tが見えないとエラーが出る                                        
  // QSPIConfig.phy_if.sck_freq   = (nrf_qspi_frequency_t)NRFX_QSPI_CONFIG_FREQUENCY; 
  QSPIConfig.phy_if.spi_mode   = (nrf_qspi_spi_mode_t)NRFX_QSPI_CONFIG_MODE;
  QSPIConfig.phy_if.dpmen      = false;
  // QSPI設定完了
  // DPMを許可するようにQSPIを設定（ただしオフに設定）
  QSPIConfig.prot_if.dpmconfig = true;
  NRF_QSPI->DPMDUR = (QSPI_DPM_ENTER << 16) | QSPI_DPM_EXIT; // Nordic Q&Aページで見つけた設定、Deep power-down modeタイマーを設定
  Error_Code = 1;
  while (Error_Code != 0) {
    Error_Code = nrfx_qspi_init(&QSPIConfig, NULL, NULL);
    if (Error_Code != NRFX_SUCCESS) {
      if (Debug_On) {
        Serial.print("(QSPI_Initialise) nrfx_qspi_initが返した値: ");
        Serial.println(Error_Code);
      }
    } else {
      if (Debug_On) {
        Serial.println("(QSPI_Initialise) nrfx_qspi_initが成功しました");
      }
    }
  }
  QSPI_Status("QSPI_Initialise (QSIP_Configure_Memoryの前)");
  QSIP_Configure_Memory();
  if (Debug_On) {
    Serial.println("(QSPI_Initialise) QSPIが準備完了するのを待っています...");
  }
  NRF_QSPI->TASKS_ACTIVATE = 1;
  QSPI_WaitForReady();
  if (Debug_On) {
    Serial.println("(QSPI_Initialise) QSPIが準備完了しました");
  }
  return QSPI_IsReady(); 
}

static void QSPI_Erase(uint32_t AStartAddress) {
  uint32_t   TimeTaken;
  bool       QSPIReady = false;
  bool       AlreadyPrinted = false;

  if (Debug_On) {
    Serial.println("(QSPI_Erase) メモリを消去中");
  }
  while (!QSPIReady) {
    if (QSPI_IsReady() != NRFX_SUCCESS) {
      if (!AlreadyPrinted) {
        QSPI_Status("QSPI_Erase (待機中)");
        AlreadyPrinted = true;
      }
    } else {
      QSPIReady = true;
      QSPI_Status("QSPI_Erase (待機ループ終了)");
    }
  }
  if (Debug_On) {
    QSPI_Status("QSPI_Erase (待機終了)");
    TimeTaken = millis();
  }
  if (nrfx_qspi_erase(NRF_QSPI_ERASE_LEN_64KB, AStartAddress) != NRFX_SUCCESS) {
    if (Debug_On) {
      Serial.print("(QSPI_Initialise_Page) QSPIアドレス0x");
      Serial.print(AStartAddress, HEX);
      Serial.println("の消去に失敗しました！");
    }
  } else {     
    if (Debug_On) {
      TimeTaken = millis() - TimeTaken;
      Serial.print("(QSPI_Initialise_Page) QSPIは64Kbページの消去に");
      Serial.print(TimeTaken);
      Serial.println("msかかりました");
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
  if (nrfx_qspi_cinstr_xfer(&QSPICinstr_cfg, NULL, NULL) != NRFX_SUCCESS) { // リセット有効化を送信
    if (Debug_On) {
      Serial.println("(QSIP_Configure_Memory) QSPI 'リセット有効化送信'に失敗しました！");
    }
  } else {
    QSPICinstr_cfg.opcode = QSPI_STD_CMD_RST;
    QSPI_WaitForReady();
    if (nrfx_qspi_cinstr_xfer(&QSPICinstr_cfg, NULL, NULL) != NRFX_SUCCESS) { // リセットコマンドを送信
      if (Debug_On) {
        Serial.println("(QSIP_Configure_Memory) QSPIリセットに失敗しました！");
      }
    } else {
      QSPICinstr_cfg.opcode = QSPI_STD_CMD_WRSR;
      QSPICinstr_cfg.length = NRF_QSPI_CINSTR_LEN_3B;
      QSPI_WaitForReady();
      if (nrfx_qspi_cinstr_xfer(&QSPICinstr_cfg, &temporary, NULL) != NRFX_SUCCESS) { // QSPIモードに切り替え
        if (Debug_On) {
          Serial.println("(QSIP_Configure_Memory) QSPIモードへの切り替えに失敗しました！");
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
    Serial.println("(Setup) QSPI初期化中...");
  }
  if (QSPI_Initialise() != NRFX_SUCCESS) {
    if (Debug_On) {
      Serial.println("(Setup) QSPIメモリの起動に失敗しました！");
    }
  } else {
    if (Debug_On) {
      Serial.println("(Setup) QSPIが初期化され、準備完了です");
      QSPI_Status("Setup (初期化後)");
    }
  }

  if (Debug_On) {
    Serial.print("(Setup) QSPIが読み取りおよび消去される直前です。現在のビジー状態 = ");
    Serial.println(QSPI_IsReady());
  }

  // QSPI速度テスト
  if (Debug_On) {
    QSPI_Status("Setup (読み取り前)");
    TimeTaken = millis();
  }
  Error_Code = nrfx_qspi_read(pBuf, MemToUse, 0x0);
  if (Debug_On) {
    TimeTaken = millis() - TimeTaken;
    Serial.print("(Setup) QSPIは");
    Serial.print(TimeTaken);
    Serial.print("msで");
    Serial.print(MemToUse / 1024);
    Serial.print("Kbを読み取りました... 読み取り結果 = ");
    Serial.println(Error_Code);
    QSPI_Status("Setup (読み取り後)");
    QSPI_WaitForReady();
    QSPI_PrintData(&pBuf[0], 10);
  }
  if (Debug_On) {
    Serial.println("QSPIが64Kbのメモリを消去中");
  }
  QSPI_Erase(0); 
  if (Debug_On) {
    Serial.println("(Setup) 消去後のQSPI読み取り");
    TimeTaken = millis();
  }
  QSPI_WaitForReady();
  Error_Code = nrfx_qspi_read(pBuf, MemToUse, 0x0);
  if (Debug_On) {
    TimeTaken = millis() - TimeTaken;
    Serial.print("(Setup) QSPIは");
    Serial.print(TimeTaken);
    Serial.print("msで");
    Serial.print(MemToUse / 1024);
    Serial.print("Kbを読み取りました... 読み取り結果 = ");
    Serial.println(Error_Code);
    QSPI_WaitForReady();
    QSPI_PrintData(&pBuf[0], 10);
  }
  for (i = 0; i < MemToUse / 2; i++) {
    pBuf[i] = i * 2;
  }
  QSPI_WaitForReady();
  if (Debug_On) {
    Serial.println("(Setup) QSPI書き込み直前");
    TimeTaken = millis();
  }
  Error_Code = nrfx_qspi_write(pBuf, MemToUse, 0x0);
  if (Debug_On) {
    TimeTaken = millis() - TimeTaken;
    Serial.print("(Setup) QSPIは");
    Serial.print(TimeTaken);
    Serial.print("msで");
    Serial.print(MemToUse / 1024);
    Serial.print("Kbを書き込みました... 書き込み結果 = ");
    Serial.println(Error_Code);
  }
  QSPI_WaitForReady();
  if (Debug_On) {
    Serial.println("(Setup) QSPI読み取り直前");
    TimeTaken = millis();
  }
  Error_Code = nrfx_qspi_read(pBuf, MemToUse, 0x0);
  if (Debug_On) {
    TimeTaken = millis() - TimeTaken;
    Serial.print("(Setup) QSPIは");
    Serial.print(TimeTaken);
    Serial.print("msで");
    Serial.print(MemToUse / 1024);
    Serial.print("Kbを読み取りました... 読み取り結果 = ");
    Serial.println(Error_Code);
    QSPI_WaitForReady();
    QSPI_PrintData(&pBuf[0], 10);
  }
  QSPI_WaitForReady();
  QSPI_Status("Setup");
  // QSPI速度テスト完了
}

void loop() {
  delay(10000);
}
```

このプログラムは **mbed** ボード専用です。そのため、コンパイルおよびアップロード時には mbed タブの下で XIAO nRF52840 を選択してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new7.png" alt="pir" width={800} height="auto" /></p>


## 技術サポート & 製品ディスカッション

.

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>