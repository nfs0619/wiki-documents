---
description: 本教程描述了如何在 XIAO ESP32S3 上使用 microSD 卡和文件系统。
title: Sense 版本的 MicroSD 卡
keywords:
  - xiao esp32s3
  - esp32s3
  - tf
  - sd
  - 文件
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao_esp32s3_sense_filesystem
last_update:
  date: 05/15/2025
  author: Priyanshu Roy
---

# 文件系统与 XIAO ESP32S3 Sense

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

在本教程中，我们将重点介绍 XIAO ESP32S3 的文件系统使用，主要是 Sense 版本的 microSD 卡插槽使用。同时，我们还将介绍官方 ESP 文件系统 SPIFFS、芯片内置的 Flash 等内容。

:::tip
本教程中的 microSD 卡部分 **仅适用于** **XIAO ESP32S3 Sense**，其余内容适用于 ESP32-S3 芯片，因此除了 microSD 卡部分，您可以在 XIAO ESP32S3 上运行示例。
:::

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3</th>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## 入门指南

由于本教程将使用 microSD 卡，因此我们需要提前安装 Sense 扩展板并准备好 microSD 卡。

### 安装扩展板（适用于 Sense）

安装扩展板非常简单，您只需将扩展板上的连接器与 XIAO ESP32S3 上的 B2B 连接器对齐，用力按压并听到“咔哒”声，安装即完成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

### 准备 microSD 卡

XIAO ESP32S3 Sense 支持最大 **32GB** 的 microSD 卡，因此如果您准备为 XIAO 购买 microSD 卡，请参考此规格。在使用 microSD 卡之前，请将其格式化为 **FAT32** 格式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/67.png" style={{width:250, height:'auto'}}/></div>

格式化后，您可以将 microSD 卡插入 microSD 卡插槽。请注意插入方向，带有金手指的一面应朝内。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/66.jpg" style={{width:500, height:'auto'}}/></div>

:::tip
如果 microSD 卡未被 ESP32S3 识别，但可以被您的电脑识别 **且** 错误类似于以下内容：

```shell
[  7273][E][sd_diskio.cpp:200] sdCommand(): Card Failed! cmd: 0x00
[  7274][E][sd_diskio.cpp:759] sdcard_mount(): f_mount failed: (3) The physical drive cannot work
[  7588][E][sd_diskio.cpp:200] sdCommand(): Card Failed! cmd: 0x00
Card Mount Failed
```

请执行以下步骤：

- 使用 Windows 格式化工具

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/sdcard1.png" style={{width:500, height:'auto'}}/></div>

- 使用 [SD Card Formatter](https://www.sdcard.org/downloads/formatter/)（第三方软件）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/sdcard2.png" style={{width:500, height:'auto'}}/></div>

**注意：**

- 此过程将比快速格式化耗时更长。

- 如果您重复使用之前用于其他用途的 microSD 卡（例如，曾用于存储 Linux 操作系统），可能会出现上述情况。

:::

### 扩展板的卡槽电路设计

XIAO ESP32S3 Sense 卡槽占用了 ESP32-S3 的 4 个 GPIO，具体占用的引脚详情如下表所示。

<div class="table-center">
    <table align="center">
        <tr>
            <th align="center">ESP32-S3 GPIO</th>
            <th align="center">microSD 卡槽</th>
        </tr>
        <tr>
            <td align="center">GPIO21</td>
            <td align="center">CS</td>
        </tr>
        <tr>
            <td align="center">D8 / A8 / Qt7 / GPIO7</td>
            <td align="center">SCK</td>
        </tr>
        <tr>
            <td align="center">D9 / A9 / Qt8 / GPIO8</td>
            <td align="center">MISO</td>
        </tr>
        <tr>
            <td align="center">D10 / A10 / Qt9 / GPIO9</td>
            <td align="center">MOSI</td>
        </tr>
    </table>
</div>

这也意味着，如果您选择使用扩展板的 microSD 卡功能，则无法同时使用 XIAO ESP32S3 的 SPI 功能。您可以通过连接/断开 J3 的焊盘来开启/关闭 microSD 卡功能。

<table align="center">
	<tr>
	    <th>如果您想使用 SPI 引脚 / 禁用扩展板的 SD 卡</th>
	    <th>如果您想启用扩展板上的 SD 卡 / 禁用 SPI 引脚</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/33.png" style={{width:300, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/36.JPG" style={{width:300, height:'auto'}}/></div></td>
	</tr>
  <tr>
    <td>沿着白色细线切割以断开焊盘连接。</td>
    <td>将两个焊盘焊接在一起。</td>
  </tr>
</table>

:::tip
默认情况下，安装扩展板后，microSD 卡功能会自动启用。
:::

## 修改 microSD 卡中的文件

:::caution
本节仅适用于 XIAO ESP32S3 Sense。
:::

在 Arduino IDE 中有几个示例展示了如何使用 XIAO ESP32S3 处理 microSD 卡上的文件。在 Arduino IDE 中，导航到 **File > Examples > SD > SD_Test**，或者复制以下代码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/68.png" style={{width:700, height:'auto'}}/></div>

```cpp
#include "FS.h"
#include "SD.h"
#include "SPI.h"

// 列出目录中的文件和子目录
void listDir(fs::FS &fs, const char * dirname, uint8_t levels){
    Serial.printf("列出目录: %s\n", dirname);

    File root = fs.open(dirname);
    if(!root){
        Serial.println("打开目录失败");
        return;
    }
    if(!root.isDirectory()){
        Serial.println("不是一个目录");
        return;
    }

    File file = root.openNextFile();
    while(file){
        if(file.isDirectory()){
            Serial.print("  目录: ");
            Serial.println(file.name());
            if(levels){
                listDir(fs, file.path(), levels -1);
            }
        } else {
            Serial.print("  文件: ");
            Serial.print(file.name());
            Serial.print("  大小: ");
            Serial.println(file.size());
        }
        file = root.openNextFile();
    }
}

// 创建目录
void createDir(fs::FS &fs, const char * path){
    Serial.printf("创建目录: %s\n", path);
    if(fs.mkdir(path)){
        Serial.println("目录已创建");
    } else {
        Serial.println("创建目录失败");
    }
}

// 删除目录
void removeDir(fs::FS &fs, const char * path){
    Serial.printf("删除目录: %s\n", path);
    if(fs.rmdir(path)){
        Serial.println("目录已删除");
    } else {
        Serial.println("删除目录失败");
    }
}

// 读取文件内容
void readFile(fs::FS &fs, const char * path){
    Serial.printf("读取文件: %s\n", path);

    File file = fs.open(path);
    if(!file){
        Serial.println("打开文件失败");
        return;
    }

    Serial.print("文件内容: ");
    while(file.available()){
        Serial.write(file.read());
    }
    file.close();
}

// 写入文件内容
void writeFile(fs::FS &fs, const char * path, const char * message){
    Serial.printf("写入文件: %s\n", path);

    File file = fs.open(path, FILE_WRITE);
    if(!file){
        Serial.println("打开文件失败");
        return;
    }
    if(file.print(message)){
        Serial.println("文件已写入");
    } else {
        Serial.println("写入失败");
    }
    file.close();
}

// 追加内容到文件
void appendFile(fs::FS &fs, const char * path, const char * message){
    Serial.printf("追加内容到文件: %s\n", path);

    File file = fs.open(path, FILE_APPEND);
    if(!file){
        Serial.println("打开文件失败");
        return;
    }
    if(file.print(message)){
        Serial.println("内容已追加");
    } else {
        Serial.println("追加失败");
    }
    file.close();
}

// 重命名文件
void renameFile(fs::FS &fs, const char * path1, const char * path2){
    Serial.printf("重命名文件 %s 为 %s\n", path1, path2);
    if (fs.rename(path1, path2)) {
        Serial.println("文件已重命名");
    } else {
        Serial.println("重命名失败");
    }
}

// 删除文件
void deleteFile(fs::FS &fs, const char * path){
    Serial.printf("删除文件: %s\n", path);
    if(fs.remove(path)){
        Serial.println("文件已删除");
    } else {
        Serial.println("删除失败");
    }
}

// 测试文件输入输出性能
void testFileIO(fs::FS &fs, const char * path){
    File file = fs.open(path);
    static uint8_t buf[512];
    size_t len = 0;
    uint32_t start = millis();
    uint32_t end = start;
    if(file){
        len = file.size();
        size_t flen = len;
        start = millis();
        while(len){
            size_t toRead = len;
            if(toRead > 512){
                toRead = 512;
            }
            file.read(buf, toRead);
            len -= toRead;
        }
        end = millis() - start;
        Serial.printf("%u 字节读取耗时 %u 毫秒\n", flen, end);
        file.close();
    } else {
        Serial.println("打开文件失败");
    }

    file = fs.open(path, FILE_WRITE);
    if(!file){
        Serial.println("打开文件失败");
        return;
    }

    size_t i;
    start = millis();
    for(i=0; i<2048; i++){
        file.write(buf, 512);
    }
    end = millis() - start;
    Serial.printf("%u 字节写入耗时 %u 毫秒\n", 2048 * 512, end);
    file.close();
}

void setup(){
    Serial.begin(115200);
    while(!Serial);
    if(!SD.begin(21)){
        Serial.println("SD 卡挂载失败");
        return;
    }
    uint8_t cardType = SD.cardType();

    if(cardType == CARD_NONE){
        Serial.println("未检测到 SD 卡");
        return;
    }

    Serial.print("SD 卡类型: ");
    if(cardType == CARD_MMC){
        Serial.println("MMC");
    } else if(cardType == CARD_SD){
        Serial.println("SDSC");
    } else if(cardType == CARD_SDHC){
        Serial.println("SDHC");
    } else {
        Serial.println("未知类型");
    }

    uint64_t cardSize = SD.cardSize() / (1024 * 1024);
    Serial.printf("SD 卡大小: %lluMB\n", cardSize);

    listDir(SD, "/", 0);
    createDir(SD, "/mydir");
    listDir(SD, "/", 0);
    removeDir(SD, "/mydir");
    listDir(SD, "/", 2);
    writeFile(SD, "/hello.txt", "Hello ");
    appendFile(SD, "/hello.txt", "World!\n");
    readFile(SD, "/hello.txt");
    deleteFile(SD, "/foo.txt");
    renameFile(SD, "/hello.txt", "/foo.txt");
    readFile(SD, "/foo.txt");
    testFileIO(SD, "/test.txt");
    Serial.printf("总空间: %lluMB\n", SD.totalBytes() / (1024 * 1024));
    Serial.printf("已用空间: %lluMB\n", SD.usedBytes() / (1024 * 1024));
}

void loop(){

}
```

:::caution
请注意，您不能直接使用示例程序，您需要对程序进行一些小的修改以确保其正常运行。修改内容是将 `Setup()` 函数中的原始代码 `SD.begin()` 更改为 `SD.begin(21)`，以指定初始化的引脚编号。
:::

将程序上传到 XIAO ESP32S3 Sense，打开串口监视器，您将看到文件创建过程和写入过程。您还可以通过 microSD 转 USB 访问计算机上的新创建文件及其内容。

<div class="table-center">
    <table align="center">
        <tr>
            <td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/65.png" style={{width:500, height:'auto'}}/></div></td>
            <td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/69.png" style={{width:500, height:'auto'}}/></div></td>
        </tr>
    </table>
</div>

### 程序注释

首先，你需要包含以下库：**FS.h** 用于处理文件，**SD.h** 用于与 microSD 卡接口，以及 **SPI.h** 用于使用 SPI 通信协议。

1. 在 `setup()` 中，以下代码行使用 `SD.begin(21)` 初始化 microSD 卡。这里我们需要为 `SD.begin()` 传递一个参数，即 CS 引脚。对于扩展板的 microSD 卡设计，CS 引脚连接到 **GPIO 21**。如果你使用的是 XIAO 的圆形显示屏，那么传递的参数应该是 **D2**。

2. 以下代码行会在串口监视器上打印 microSD 卡的类型。

```c
uint8_t cardType = SD.cardType();

if(cardType == CARD_NONE){
    Serial.println("没有连接 SD 卡");
    return;
}

Serial.print("SD 卡类型: ");
if(cardType == CARD_MMC){
    Serial.println("MMC");
} else if(cardType == CARD_SD){
    Serial.println("SDSC");
} else if(cardType == CARD_SDHC){
    Serial.println("SDHC");
} else {
    Serial.println("未知");
}
```

3. 你可以通过调用 `cardSize()` 方法获取 microSD 卡的大小：

```c
uint64_t cardSize = SD.cardSize() / (1024 * 1024);
Serial.printf("SD 卡大小: %lluMB\n", cardSize);
```

**示例提供了几个用于处理 microSD 卡上文件的函数。**

4. `listDir()` 函数列出 SD 卡上的目录。此函数接受文件系统（SD）、主目录名称和目录深度作为参数。

   以下是调用此函数的示例。`/` 对应于 microSD 卡的根目录。

```c
listDir(SD, "/", 0);
```

5. `createDir()` 函数用于创建新目录。将 `SD` 文件系统和目录路径作为参数传递。例如，以下命令在根目录下创建一个名为 `mydir` 的新目录。

```c
createDir(SD, "/mydir");
```

6. 要从 microSD 卡中删除目录，可以使用 `removeDir()` 函数，并将 SD 文件系统和目录路径作为参数传递。

```c
removeDir(SD, "/mydir");
```

7. `readFile()` 函数读取文件内容并在串口监视器中打印内容。与之前的函数一样，将 `SD` 文件系统和文件路径作为参数传递。例如，以下代码行读取 `hello.txt` 文件的内容。

```c
readFile(SD, "/hello.txt")
```

8. 要向文件写入内容，可以使用 `writeFile()` 函数。将 `SD` 文件系统、文件路径和消息作为参数传递。以下代码行在 `hello.txt` 文件中写入 `Hello`。

```c
writeFile(SD, "/hello.txt", "Hello ");
```

9. 同样，你可以使用 `appendFile()` 函数向文件追加内容（而不覆盖之前的内容）。以下代码行在 `hello.txt` 文件中追加消息 `World!\n`。`\n` 表示下次写入文件时，内容将写在新的一行。

```c
appendFile(SD, "/hello.txt", "World!\n");
```

10. 你可以使用 `renameFile()` 函数重命名文件。将 SD 文件系统、原始文件名和新文件名作为参数传递。以下代码行将 `hello.txt` 文件重命名为 `foo.txt`。

```c
renameFile(SD, "/hello.txt", "/foo.txt");
```

11. 使用 `deleteFile()` 函数删除文件。将 SD 文件系统和要删除的文件路径作为参数传递。以下代码行从 microSD 卡中删除 `foo.txt` 文件。

```c
deleteFile(SD, "/foo.txt");
```

12. `testFileIO()` 函数显示读取文件内容所需的时间。以下函数测试 `test.txt` 文件。

```c
testFileIO(SD, "/test.txt");
```

## 基于气体数据记录的 MicroSD 卡应用

:::caution
本节仅适用于 XIAO ESP32S3 Sense。
:::

此项目展示了如何使用 XIAO ESP32S3 Sense 将带有时间戳的数据记录到 TF 卡中。作为示例，我们将每 10 分钟记录一次来自多通道气体传感器的温度读数。在每次读取之间，XIAO ESP32S3 将处于深度睡眠模式，并通过网络时间协议（NTP）请求日期和时间。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/72.jpg" style={{width:800, height:'auto'}}/></div>

要完成此项目，你需要提前准备以下硬件。

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio XIAO 扩展底板（带 Grove OLED）</th>
        <th>Grove - 多通道气体传感器 v2</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/04.png" style={{width:250, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

对于软件部分，您需要提前在 Arduino IDE 中安装以下库：

- 由 Taranais 分叉的 NTPClient 库

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/taranais/NTPClient">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

- 多通道气体传感器库

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_MultiGas">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

以下是完整的示例程序。在程序中，我们需要使用网络配对时间，因此您需要将程序中的 WiFi 名称和密码更改为您的信息。

```cpp
#include "FS.h"
#include "SD.h"
#include <SPI.h>

// 多通道气体传感器库
#include <Multichannel_Gas_GMXXX.h>
#include <Wire.h>

// 用于从 NTP 服务器获取时间的库
#include <NTPClient.h>
#include <WiFiUdp.h>

#include "WiFi.h"

// 定义深度睡眠选项
uint64_t uS_TO_S_FACTOR = 1000000;  // 微秒到秒的转换因子
// 睡眠 10 分钟 = 600 秒
uint64_t TIME_TO_SLEEP = 600;

// 替换为您的网络凭证
const char* ssid     = "REPLACE_WITH_YOUR_SSID"; // 替换为您的 WiFi 名称
const char* password = "REPLACE_WITH_YOUR_PASSWORD"; // 替换为您的 WiFi 密码

// 定义 SD 卡模块的 CS 引脚
#define SD_CS 21

// 在 RTC 内存中保存读取编号
RTC_DATA_ATTR int readingID = 0;

String dataMessage;

// 气体传感器变量
int NO2_val, C2H5CH_val, VOC_val, CO_val;
GAS_GMXXX<TwoWire> gas;

// 定义 NTP 客户端以获取时间
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP);

// 用于保存日期和时间的变量
String formattedDate;
String dayStamp;
String timeStamp;

void setup() {
  // 启动串口通信以进行调试
  Serial.begin(115200);

  // 使用 SSID 和密码连接到 Wi-Fi 网络
  Serial.print("正在连接到 ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi 已连接。");

  // 初始化 NTP 客户端以获取时间
  timeClient.begin();
  // 设置时区偏移时间（以秒为单位），例如：
  // GMT +1 = 3600
  // GMT +8 = 28800
  // GMT -1 = -3600
  // GMT 0 = 0
  timeClient.setTimeOffset(3600);

  // 初始化 SD 卡
  SD.begin(SD_CS);
  if(!SD.begin(SD_CS)) {
    Serial.println("SD 卡挂载失败");
    return;
  }
  uint8_t cardType = SD.cardType();
  if(cardType == CARD_NONE) {
    Serial.println("未连接 SD 卡");
    return;
  }
  Serial.println("正在初始化 SD 卡...");
  if (!SD.begin(SD_CS)) {
    Serial.println("错误 - SD 卡初始化失败！");
    return;    // 初始化失败
  }

  // 如果 data.txt 文件不存在
  // 在 SD 卡上创建一个文件并写入数据标签
  File file = SD.open("/data.txt");
  if(!file) {
    Serial.println("文件不存在");
    Serial.println("正在创建文件...");
    writeFile(SD, "/data.txt", "读取编号, 日期, 时间, NO2, C2H5CH, VOC, CO \r\n");
  }
  else {
    Serial.println("文件已存在");
  }
  file.close();

  // 启动气体传感器
  gas.begin(Wire, 0x08); // 使用硬件 I2C

  getReadings();
  getTimeStamp();
  logSDCard();

  // 每次新读取时递增 readingID
  readingID++;

  // 启动深度睡眠
  Serial.println("完成！现在进入睡眠模式。");

  // 启用定时器唤醒
  esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);
  esp_deep_sleep_start();
}

void loop() {
  // ESP32 将处于深度睡眠状态
  // 它永远不会到达 loop()
}

// 获取传感器数据的函数
void getReadings(){
  // GM102B NO2 传感器 ppm
  NO2_val = gas.getGM102B();
  // GM302B C2H5CH 传感器 ppm
  C2H5CH_val = gas.getGM302B();
  // GM502B VOC 传感器
  VOC_val = gas.getGM502B();
  // GM702B CO 传感器
  CO_val = gas.getGM702B();

  Serial.print("NO2 值为: ");
  Serial.println(NO2_val);

  Serial.print("C2H5CH 值为: ");
  Serial.println(C2H5CH_val);

  Serial.print("VOC 值为: ");
  Serial.println(VOC_val);

  Serial.print("CO 值为: ");
  Serial.println(CO_val);
}

// 从 NTP 客户端获取日期和时间的函数
void getTimeStamp() {
  while(!timeClient.update()) {
    timeClient.forceUpdate();
  }
  // formattedDate 的格式如下：
  // 2018-05-28T16:00:13Z
  // 我们需要提取日期和时间
  formattedDate = timeClient.getFormattedDate();
  Serial.println(formattedDate);

  // 提取日期
  int splitT = formattedDate.indexOf("T");
  dayStamp = formattedDate.substring(0, splitT);
  Serial.println(dayStamp);
  // 提取时间
  timeStamp = formattedDate.substring(splitT+1, formattedDate.length()-1);
  Serial.println(timeStamp);
}

// 将传感器读取数据写入 SD 卡
void logSDCard() {
  dataMessage = String(readingID) + "," + String(dayStamp) + "," + String(timeStamp) + "," +
                String(NO2_val) + "," + String(C2H5CH_val) + "," + String(VOC_val) + "," +
                String(CO_val) + "\r\n";
  Serial.print("保存数据: ");
  Serial.println(dataMessage);
  appendFile(SD, "/data.txt", dataMessage.c_str());
}

// 写入 SD 卡的函数（请勿修改此函数）
void writeFile(fs::FS &fs, const char * path, const char * message) {
  Serial.printf("正在写入文件: %s\n", path);

  File file = fs.open(path, FILE_WRITE);
  if(!file) {
    Serial.println("打开文件失败");
    return;
  }
  if(file.print(message)) {
    Serial.println("文件已写入");
  } else {
    Serial.println("写入失败");
  }
  file.close();
}

// 向 SD 卡追加数据的函数（请勿修改此函数）
void appendFile(fs::FS &fs, const char * path, const char * message) {
  Serial.printf("正在追加到文件: %s\n", path);

  File file = fs.open(path, FILE_APPEND);
  if(!file) {
    Serial.println("打开文件失败");
    return;
  }
  if(file.print(message)) {
    Serial.println("消息已追加");
  } else {
    Serial.println("追加失败");
  }
  file.close();
}
```

编译并上传程序，然后打开串口监视器。如果程序运行顺利，您将在串口监视器中看到以下消息输出。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/70.png" style={{width:700, height:'auto'}}/></div>

您可以随时取出 microSD 卡，并通过读卡器访问保存的传感器数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/71.png" style={{width:500, height:'auto'}}/></div>

:::note
为了方便测试，效果显示为每分钟保存一次数据，实际提供的示例代码是每十分钟保存一次数据。
:::

:::caution
关于此项目需要注意以下几点：

1. 多通道气体传感器需要一段时间的预热，才能获得准确的数值。因此，记录的前几组数据如果误差较大，可以考虑丢弃。
2. 串口监视器只会输出一次保存的信息，因为此示例使用了深度睡眠功能，相当于唤醒后重置，也就是说您需要重新打开 Arduino 的串口才能看到下一次调试信息。但请放心，如果卡没有问题，传感器数据会按照您设置的时间准时收集。
:::

### 程序注释

在此示例中，XIAO ESP32S3 在每次读取之间处于深度睡眠模式。在深度睡眠模式下，所有代码都应该放在 `setup()` 函数中，因为 XIAO ESP32S3 永远不会到达 `loop()`。

此示例使用从微秒到秒的转换因子，因此您可以在 `TIME_TO_SLEEP` 变量中以秒为单位设置睡眠时间。在此情况下，我们将 XIAO ESP32S3 设置为睡眠 10 分钟（600 秒）。如果您希望 XIAO ESP32S3 睡眠不同的时间段，只需在 `TIME_TO_SLEEP` 变量中输入深度睡眠的秒数即可。

```c
// 定义深度睡眠选项
uint64_t uS_TO_S_FACTOR = 1000000; // 微秒到秒的转换因子
// 睡眠 10 分钟 = 600 秒
uint64_t TIME_TO_SLEEP = 600;
```

接下来，定义 microSD 卡的 CS 引脚。在此示例中，它设置为 **GPIO 21**。

```c
#define SD_CS 21
```

创建一个名为 `readingID` 的变量来保存读取 ID。这是一种组织读取数据的方法。为了在深度睡眠期间保存变量值，我们可以将其保存在 RTC 内存中。要在 RTC 内存中保存数据，只需在变量定义之前添加 `RTC_DATA_ATTR`。

创建一个字符串变量来保存要保存到 microSD 卡上的数据。

以下两行定义了一个 NTPClient，用于从 NTP 服务器请求日期和时间。

```c
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP);
```

接下来，在 `Setup()` 函数中初始化 NTP 客户端以从 NTP 服务器获取日期和时间。您可以使用 `setTimeOffset(<time>)` 方法调整您的时区时间。

在完成所有初始化后，我们可以获取读取值、时间戳，并将所有内容记录到 microSD 卡中。

为了使代码更易于理解，我们创建了以下函数：

- `getReadings()`: 从多通道气体传感器读取气体值；
- `getTimeStamp()`: 从 NTP 服务器获取日期和时间；
- `logSDcard()`: 将上述数据记录到 microSD 卡中。

最后，ESP32 开始深度睡眠。

```c
esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);
esp_deep_sleep_start();
```

我们建议您将这两个函数一起使用。确保在设置唤醒时间后，XIAO 能尽快进入深度睡眠模式。

## 串行外设接口闪存文件系统 (SPIFFS)

:::caution
此部分适用于 XIAO ESP32C3、XIAO ESP32S3 或 XIAO ESP32S3 Sense，但此部分不支持 Arduino IDE 2.X。
:::

ESP32 包含一个串行外设接口闪存文件系统 (SPIFFS)。SPIFFS 是为带有闪存芯片的微控制器创建的轻量级文件系统，该闪存芯片通过 SPI 总线连接，例如 ESP32 的闪存存储器。在本文中，我们将展示如何使用 Arduino IDE 的插件轻松地将文件上传到 ESP32 文件系统。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/73.jpg" style={{width:1000, height:'auto'}}/></div>

SPIFFS 允许您像在计算机中的普通文件系统一样访问闪存，但更简单且功能有限。您可以读取、写入、关闭和删除文件。在撰写本文时，SPIFFS 不支持目录，因此所有内容都保存在平面结构中。

使用 SPIFFS 和 XIAO ESP32 特别有用：

- 创建带有设置的配置文件
- 永久保存数据
- 创建文件以保存少量数据，而不是使用 microSD 卡
- 保存 HTML 和 CSS 文件以构建 Web 服务器
- 保存图像、图形和图标

### 安装 Arduino ESP32 文件系统上传器

您可以通过在 Arduino IDE 上自己编写代码来创建、保存和写入 ESP32 文件系统中的文件。这并不十分实用，因为您必须在 Arduino 草图中输入文件内容。

幸运的是，Arduino IDE 有一个插件允许您直接从计算机上的文件夹将文件上传到 ESP32 文件系统。这使得处理文件变得非常简单方便。让我们安装它。

:::note
注意：在撰写本文时，ESP32 文件系统上传器插件 **不支持 Arduino 2.0**。
:::

#### Windows

**步骤 1.** 访问 [发布页面](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/) 并点击 [ESP32FS-1.1.zip](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/download/1.1/ESP32FS-1.1.zip) 文件进行下载。

**步骤 2.** 找到您的 Sketchbook 位置。在 Arduino IDE 中，转到 **File > Preferences** 并检查您的 Sketchbook 位置。在我的情况下，它位于以下路径：`C:\Users\mengd\Documents\Arduino`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/73.png" style={{width:700, height:'auto'}}/></div>

### 第三步：前往草图文件夹位置，并创建一个 **tools** 文件夹。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/74.png" style={{width:400, height:'auto'}}/></div>

### 第四步：解压下载的 _.zip_ 文件夹。打开它并将 ESP32FS 文件夹复制到上一步创建的 tools 文件夹中。你的文件夹结构应该类似如下：

`<Sketchbook-location>/tools/ESP32FS/tool/esp32fs.jar`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/75.png" style={{width:500, height:'auto'}}/></div>

### 第五步：最后，重启你的 Arduino IDE。

要检查插件是否成功安装，打开 Arduino IDE。选择 **XIAO ESP32S3** 或 **XIAO ESP32C3**，然后进入 **Tools** 菜单，检查是否有 **ESP32 Sketch Data Upload** 选项。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/76.png" style={{width:600, height:'auto'}}/></div>

#### MacOS

### 第一步：前往 [releases 页面](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/)，点击 [ESP32FS-1.1.zip](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/download/1.1/ESP32FS-1.1.zip) 文件进行下载。

### 第二步：解压文件。

### 第三步：在 `/Documents/Arduino/` 中创建一个名为 **tools** 的文件夹。

### 第四步：将解压后的 **ESP32FS** 文件夹复制到 **tools** 目录中。你的文件夹结构应该类似如下：

`~Documents/Arduino/tools/ESP32FS/tool/esp32fs.jar`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/77.png" style={{width:500, height:'auto'}}/></div>

### 第五步：最后，重启你的 Arduino IDE。

要检查插件是否成功安装，打开 Arduino IDE。选择 **XIAO ESP32S3** 或 **XIAO ESP32C3**，然后进入 **Tools** 菜单，检查是否有 **ESP32 Sketch Data Upload** 选项。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/78.png" style={{width:600, height:'auto'}}/></div>

### 使用文件系统上传器上传文件

按照以下说明将文件上传到 ESP32 文件系统。

### 第六步：创建一个 Arduino 草图并保存它。为了演示，你可以保存一个空白草图。

### 第七步：然后，打开草图文件夹。你可以通过 **Sketch > Show Sketch Folder** 打开草图保存的文件夹。

### 第八步：在该文件夹中创建一个名为 **data** 的新文件夹。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/79.png" style={{width:400, height:'auto'}}/></div>

### 第九步：将你想保存到 ESP32 文件系统的文件放入 data 文件夹中。例如，创建一个包含一些文本的 _.txt_ 文件，命名为 **test_example**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/80.png" style={{width:700, height:'auto'}}/></div>

### 第十步：然后，在 Arduino IDE 中上传文件，只需进入 **Tools > ESP32 Sketch Data Upload**。

:::caution
上传器会覆盖你之前保存在文件系统中的任何内容。
:::

当你看到 **SPIFFS Image Uploaded** 消息时，文件已成功上传到 ESP32 文件系统。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/81.png" style={{width:800, height:'auto'}}/></div>

### 测试上传器

现在，让我们检查文件是否确实保存到了 ESP32 文件系统中。只需将以下代码上传到你的 ESP32 开发板。

```cpp
#include "SPIFFS.h"

void setup() {
  Serial.begin(115200);
  while(!Serial);

  if(!SPIFFS.begin(true)){
    Serial.println("挂载 SPIFFS 时发生错误");
    return;
  }

  File file = SPIFFS.open("/test_example.txt");
  if(!file){
    Serial.println("打开文件失败");
    return;
  }

  Serial.println("文件内容：");
  while(file.available()){
    Serial.write(file.read());
  }
  file.close();

}

void loop() {

}
```

上传后，在波特率为 115200 的情况下打开串口监视器。它应该在串口监视器上打印出你的 _.txt_ 文件的内容。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/82.png" style={{width:800, height:'auto'}}/></div>

## Flash 数据存储

:::caution
本节适用于 XIAO ESP32C3、XIAO ESP32S3 或 XIAO ESP32S3 Sense。
:::

在使用开发板时，许多人希望能够使用芯片上的 Flash 存储一些重要数据。这需要一种存储方法，确保即使开发板出现异常也不会丢失数据。

本教程将介绍如何通过以下两种存储方法在 XIAO ESP32 的 Flash 存储中保存重要数据：

1. 第一个指南展示了如何使用 Preferences.h 库将数据永久保存到 ESP32 的 Flash 存储中。存储在 Flash 中的数据在复位或断电后仍然存在。使用 Preferences.h 库非常适合保存网络凭据、API 密钥、阈值值，甚至 GPIO 的最后状态。你将学习如何从 Flash 存储中保存和读取数据。

2. 第二个指南解释了什么是 XIAO ESP32C3 的 EEPROM 以及它的用途。我们还将展示如何从 EEPROM 写入和读取数据，并构建一个项目示例来实践所学的概念。

本节内容是为 XIAO ESP32C3 编写的，并完全兼容新的 XIAO ESP32S3，因此你可以直接使用这里的例程，因此我们在此不再赘述。

- [XIAO ESP32C3 数据永久存储的不同方法](https://wiki.seeedstudio.com/xiaoesp32c3-flash-storage/)

## 故障排除

## 引用与参考

本文借鉴了 **[Random Nerd Tutorials](https://randomnerdtutorials.com/)** 关于 ESP32 的文件系统内容，并在 Seeed Studio XIAO ESP32S3 Sense 上进行了验证。

特别感谢 **Random Nerd Tutorials** 的作者们所付出的辛勤努力！

以下是原文文章的参考链接，欢迎通过以下链接了解更多关于 ESP32 文件系统的内容。

- [ESP32: 使用 Arduino IDE 的 MicroSD 卡模块指南](https://randomnerdtutorials.com/esp32-microsd-card-arduino/)
- [ESP32 数据记录：将温度记录到 MicroSD 卡](https://randomnerdtutorials.com/esp32-data-logging-temperature-to-microsd-card/)
- [在 Arduino IDE 中安装 ESP32 文件系统上传工具](https://randomnerdtutorials.com/install-esp32-filesystem-uploader-arduino-ide/)

关于使用 ESP32 开发板的更多信息，请访问 Random Nerd Tutorials 的官方网站。

- [Random Nerd Tutorials](https://randomnerdtutorials.com/)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供了多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>