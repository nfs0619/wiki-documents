---
title: 使用 Platform IO 打造赛博桌面 —— Cursor AI 的使用和尝试
image: https://files.seeedstudio.com/wiki/CyberDesk_Wio-Terminal/CyberDesk_Wio-Terminal.gif
slug: /cn/CyberDeck_Wio-Terminal
last_update:
  date: 2024/12/09
  author: 潘昊
---

# Wio Terminal 的 PC 监控教程 - 赛博朋克风格

- [**项目概述**](#jump1)
- [**Cursor AI 使用教程**](#jump2)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/CyberDesk_Wio-Terminal/CyberDesk_Wio-Terminal.gif" style={{width:500, height:'auto'}}/></div>

:::info
Click here to see the [English Version](/CyberDeck_Wio-Terminal)
:::

## <span id="jump1"> 项目概述 </span>

创建一个赛博朋克风格的 PC 监控系统，使用 Wio Terminal 作为显示终端，实时监控电脑的各种性能指标。

## 硬件需求

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)  
- USB-C 数据线  
- 一台运行 Windows 的电脑  

## 软件需求

- [VSCode](https://code.visualstudio.com/) + PlatformIO 插件  
- [Python 3.x](https://www.python.org/)
- Open Hardware Monitor（用来获取温度数据）  

## 详细步骤

### 1. 环境配置

- 安装 Python 包：
  ```bash
  pip install psutil pyserial GPUtil wmi pywin32
  ```

- 安装 VSCode 插件：
  1. 安装 **PlatformIO IDE** 插件  
  2. 安装并运行 **OpenHardwareMonitor**  

### 2. 创建项目

- 创建一个 PlatformIO 项目：  
  1. 打开 VSCode  
  2. 点击 PlatformIO 图标  
  3. 选择 "New Project"  
  4. 配置如下：  
     - **Board:** "Seeed Wio Terminal"  
     - **Framework:** "Arduino"  

### 3. 实现代码

#### (a) 配置 `platformio.ini`

```ini
[env:seeed_wio_terminal]
platform = atmelsam
board = seeed_wio_terminal
framework = arduino
lib_deps = 
    Seeed_Arduino_LCD@2.1.0
```

#### (b) 创建 PC 监控脚本 (`pc_stats.py`)

```python
import psutil
import serial
import time
import GPUtil
import socket
import wmi
from datetime import datetime

def get_cpu_temp():
    try:
        w = wmi.WMI(namespace="root\wmi")
        temperature_info = w.MSAcpi_ThermalZoneTemperature()[0]
        temp = float(temperature_info.CurrentTemperature) / 10.0 - 273.15
        return max(0, min(temp, 100))
    except Exception as e:
        print(f"[WARN] 无法读取 CPU 温度: {e}")
        return 0.0

# 配置串口（根据实际情况修改 COM 端口）
ser = serial.Serial('COM10', 115200)
while True:
    try:
        # 获取系统数据
        cpu_usage = psutil.cpu_percent()
        ram_usage = psutil.virtual_memory().percent
        cpu_temp = get_cpu_temp()
        disk_usage = psutil.disk_usage('/').percent
        
        # 获取 GPU 信息
        try:
            gpus = GPUtil.getGPUs()
            gpu_usage = gpus[0].load * 100
            gpu_temp = gpus[0].temperature
        except:
            gpu_usage = gpu_temp = 0
            
        # 发送数据到 Wio Terminal
        data = f"{cpu_usage},{ram_usage},{cpu_temp},{gpu_usage},{gpu_temp},{disk_usage},{socket.gethostbyname(socket.gethostname())}\n"
        ser.write(data.encode())
        time.sleep(0.5)
        
    except KeyboardInterrupt:
        ser.close()
        break
```

#### (c) 创建 Wio Terminal 代码 (`main.cpp`)

```cpp
#include <Arduino.h>
#include "TFT_eSPI.h"

TFT_eSPI tft;
int currentPage = 0;

// 按键定义
const int BTN_1 = WIO_KEY_A;
const int BTN_2 = WIO_KEY_B;
const int BTN_3 = WIO_KEY_C;

// PC 状态结构体
struct PCStats {
    int cpuUsage = 0;
    int ramUsage = 0;
    float cpuTemp = 0.0;
    int diskUsage = 0;
    int gpuUsage = 0;
    float gpuTemp = 0.0;
    char ipAddress[16] = "0.0.0.0";
    unsigned long lastUpdate = 0;
} pcStats;

// 绘制函数
void drawBox(int x, int y, int w, int h) {
    tft.drawRect(x, y, w, h, TFT_GREEN);
}

void drawTitle(const char* title) {
    tft.drawString("<<", 10, 10);
    tft.drawString(title, 40, 10);
    tft.drawString(">>", 270, 10);
    drawBox(5, 5, 310, 230);
    tft.drawLine(10, 30, 300, 30, TFT_GREEN);
}

// [更多绘制函数...]

void setup() {
    Serial.begin(115200);
    tft.begin();
    tft.setRotation(3);
    tft.setTextSize(2);
    
    pinMode(BTN_1, INPUT_PULLUP);
    pinMode(BTN_2, INPUT_PULLUP);
    pinMode(BTN_3, INPUT_PULLUP);
    
    drawPage(currentPage);
}

void loop() {
    // 接收并解析数据
    if (Serial.available()) {
        String data = Serial.readStringUntil('\n');
        // 解析数据...
    }
    
    // 按键处理
    if (digitalRead(BTN_1) == LOW) {
        currentPage = 0;
        drawPage(currentPage);
        delay(200);
    }
    // [更多按键处理...]

    // 更新显示
    if (currentPage == 0) {
        drawSystemStatus();
        delay(100);
    }
}
```

### 4. 运行项目
1. 将代码上传到 Wio Terminal  
2. 运行 **OpenHardwareMonitor**  
3. 运行 Python 脚本：
   ```bash
   python pc_stats.py
   ```
4. 使用 Wio Terminal 上的按键切换页面：  
   - **按键 A:** 系统状态  
   - **按键 B:** 性能监控  
   - **按键 C:** 网络信息  

---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/CyberDesk_Wio-Terminal/cyberdesk_wio-terminal.jpg" style={{width:300, height:'auto'}}/></div>

## 自定义建议

1. **调整显示风格：** 修改颜色（如 `TFT_GREEN`）、布局和字体大小。  
2. **添加动画效果：** 为更具赛博朋克风格的体验增加动画效果。  
3. **添加新功能：**  
   - 网络速度监控  
   - 磁盘读写速度  
   - 系统进程信息  

---

## 故障排除
1. **串口连接问题：**  
   - 检查 COM 端口是否正确  
   - 确认波特率设置（115200）  

2. **温度读取问题：**  
   - 确保 **OpenHardwareMonitor** 正在运行  
   - 检查管理员权限  

3. **显示问题：**  
   - 检查显示坐标是否超出范围  
   - 使用 `clearArea` 函数避免残影  

---

## 高级优化

- 添加数据记录功能  
- 实现警告阈值  
- 定制显示主题  
- 添加图表显示  
- 实现 WiFi 功能  

该项目非常适合初学者入门，同时提供了大量扩展空间。建议先实现基本功能，然后逐步添加新特性。

---

## <span id="jump2"> Cursor AI 开发教程 —— 基于 Wio Terminal PC 监控项目 </span>

## 1. Cursor AI 基础

### 1.1 项目初始化

1. 打开 Cursor 编辑器。  
2. 告诉 AI 你想创建什么：  
   > “我想创建一个 Wio Terminal 项目，用来显示电脑的系统信息，风格是赛博朋克。”  
3. AI 将帮助你：  
   - 推荐项目结构  
   - 创建必要文件  
   - 提供初始代码  

---

### 1.2 协作模式

- **描述清晰明确：** 一次专注一个功能点。  
- **及时反馈问题：** 遇到问题时，与 AI 沟通。  

---

## 2. 实际案例分析

### 2.1 创建基础显示功能

**良好的提问方式：**  
> “帮我创建一个 Wio Terminal 的显示程序，需要显示 CPU 使用率、内存使用率和温度信息。”  

- AI 将提供：  
  - 必要的头文件  
  - 基础代码结构  
  - 显示函数的实现  

---

### 2.2 解决具体问题

**示例：** 修复温度读取问题  
**良好的提问方式：**  
> “CPU 温度读取不到，显示为 0，如何解决这个问题？”  

- AI 的响应：  
  1. 分析可能原因  
  2. 提供多种解决方案  
  3. 展示实现代码  

---

### 2.3 优化显示效果

**良好的提问方式：**  
> “如何优化显示效果，让它更有赛博朋克风格？”  

- AI 将：  
  - 提供设计建议  
  - 实现具体代码  

---

## 3. 调试技巧

### 3.1 处理代码报错

- 遇到编译错误时，将错误信息复制给 AI：  
  > “编译时遇到这个错误：[错误信息]”  

- AI 将：  
  - 分析错误原因  
  - 提供修复方案  
  - 解释解决思路  

---

### 3.2 处理逻辑问题

**良好的描述方式：**  
> “更新屏幕数字时存在残影，该如何解决？”  

- AI 的解决流程：  
  1. 理解问题本质  
  2. 提供区域清除函数  
  3. 提供完整解决方案  

---

## 4. 最佳实践

### 4.1 提问技巧

1. **明确功能：**  
   - “我想实现 [具体功能]。”  
2. **提供上下文：**  
   - “我已经实现了 [A 功能]，现在想添加 [B 功能]。”  
3. **描述问题：**  
   - “运行时遇到 [具体问题]，错误信息是 [错误内容]。”  

---

### 4.2 代码优化

1. **请求代码审查：**  
   - “能帮我检查这段代码，看看有什么可以优化的地方吗？”  
2. **性能优化：**  
   - “这段代码运行较慢，如何优化性能？”  
3. **代码风格改进：**  
   - “如何让代码更易读和维护？”  

---

### 4.3 功能扩展

1. **渐进式开发：**  
   - “我想为项目添加 [新功能]，应该如何开始？”  
2. **模块化请求：**  
   - “如何将这个功能模块化，以便后续扩展？”  

---

## 5. 常见陷阱

### 5.1 避免的做法

- **问题描述不清：**  
  - ❌ “代码不工作了，怎么办？”  
- **信息不完整：**  
  - ❌ “有错误，帮我看看。”  
- **范围过大：**  
  - ❌ “帮我完成整个项目。”  

---

### 5.2 推荐的做法

- **清晰的问题描述：**  
  - ✅ “CPU 使用率显示异常，数值一直是 0。”  
- **提供完整信息：**  
  - ✅ “运行时出现这个错误：[完整错误信息]，使用的库版本是...”  
- **合理任务划分：**  
  - ✅ “先实现基础显示功能，然后逐步添加其他功能。”  

---

## 6. 总结

- **渐进式开发：** 从基础功能开始，逐步添加新特性。  
- **及时解决问题：** 遇到问题时及时修复。  
- **高效沟通：** 明确描述需求并提供上下文。  
- **持续优化：** 定期审查并改进代码。  

通过该项目的开发过程，你将看到 Cursor AI 能显著提升开发效率。关键在于学会如何与 AI 高效协作。清晰的问题和明确的需求能帮助你获得更好的结果。