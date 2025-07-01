---
description: 使用 Seeed Studio XIAO RA4M1 构建一个简单的时钟。
title: 使用 Seeed Studio XIAO RA4M1 驱动的空心时钟
keywords:
- ra4m1
- xiao
- 时钟
image: https://files.seeedstudio.com/wiki/RA4M1_Application/top.webp
side_position: 2
slug: /cn/xiao_ra4m1_clock
last_update:
  date: 05/15/2025
  author: Jason
sidebar_class_name: hidden 
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/RA4M1_Application/1.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## 灵感来源

[空心时钟](https://www.youtube.com/watch?v=jvoOgxK4EvI&ab_channel=TheWrench) 曾在 YouTube 上大受欢迎，其原始设计由 [sh1ura](https://www.instructables.com/Hollow-Clock-4/) 提供，[酷炫的演示视频](https://youtu.be/hRpLiRoMx34) 和 [3D 设计文件在 Thingsverse 上提供](https://www.thingiverse.com/thing:5636482)。向 sh1ura 致敬，感谢他的伟大灵感。

站在巨人的肩膀上，我们现在使用拇指大小的 [XIAO RA4M1](https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html) 和一个定制的小型电机驱动板重新混合了一个版本！

## 硬件概览

### MCU

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO RA4M1</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

### 电路板

与 XIAO 体积相同，只需焊接母座并将 XIAO 和电机插入其中即可运行。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RA4M1_Application/2.png" style={{width:500, height:'auto'}}/></div>

具体信息请参阅文末的资源部分。

:::tip
电机和组件需要自行购买。
:::

### 软件概览
```c
// 此代码控制一个步进电机，用于时钟项目，
// 使分针能够根据时间精确旋转。

// 如果时钟快或慢，请调整以下值。
// 理论上，标准值为每分钟 60000 毫秒。
#define MILLIS_PER_MIN 60000 // 每分钟的毫秒数

// 电机和时钟参数
// 分针转子完整旋转所需的总步数
// 计算公式为 4096 步每转 * 90 度 / 12 小时
#define STEPS_PER_ROTATION 30720 // 分针转子完整旋转的步数

// 步进电机单步的等待时间
int delaytime = 2;

// 用于控制步进电机的端口
// 如果电机旋转方向相反，
// 可根据需要更改端口号的顺序。
int port[4] = {0, 1, 2, 3};

// 步进电机控制序列
// 此数组定义了电机相位的控制序列。
int seq[8][4] = {
  {  LOW, HIGH, HIGH,  LOW},
  {  LOW,  LOW, HIGH,  LOW},
  {  LOW,  LOW, HIGH, HIGH},
  {  LOW,  LOW,  LOW, HIGH},
  { HIGH,  LOW,  LOW, HIGH},
  { HIGH,  LOW,  LOW,  LOW},
  { HIGH, HIGH,  LOW,  LOW},
  {  LOW, HIGH,  LOW,  LOW}
};

// 根据指定的步数旋转步进电机的函数
void rotate(int step) {
  static int phase = 0;
  int i, j;
  int delta = (step > 0) ? 1 : 7; // 确定旋转方向
  int dt = 20; // 初始延迟时间

  step = (step > 0) ? step : -step; // 转换为正步数
  for(j = 0; j < step; j++) {
    phase = (phase + delta) % 8; // 更新相位
    for(i = 0; i < 4; i++) {
      digitalWrite(port[i], seq[phase][i]); // 控制电机
    }
    delay(dt); // 等待指定的延迟时间
    if(dt > delaytime) dt--; // 逐渐减少延迟
  }
  // 断电：停止电机
  for(i = 0; i < 4; i++) {
    digitalWrite(port[i], LOW);
  }
}

// 设置函数，启动时运行一次
void setup() {
  // 初始化电机控制端口为输出
  pinMode(port[0], OUTPUT);
  pinMode(port[1], OUTPUT);
  pinMode(port[2], OUTPUT);
  pinMode(port[3], OUTPUT);
  
  // 执行初始校准运行以定位分针
  rotate(-20); // 一个方向的校准运行
  rotate(20);  // 另一个方向的校准运行
  rotate(STEPS_PER_ROTATION / 60); // 定位分针
}

// 主循环，持续运行
void loop() {
  static long prev_min = 0, prev_pos = 0; // 跟踪前一分钟和位置
  long min;
  static long pos;
  
  min = millis() / MILLIS_PER_MIN; // 获取当前分钟
  if(prev_min == min) {
    return; // 如果分钟未改变，则退出
  }
  prev_min = min; // 更新前一分钟
  pos = (STEPS_PER_ROTATION * min) / 60; // 计算目标位置
  rotate(-20); // 一个方向的校准运行
  rotate(20);  // 另一个方向的校准运行
  if(pos - prev_pos > 0) {
    rotate(pos - prev_pos); // 如果需要，旋转到新位置
  }
  prev_pos = pos; // 更新前位置
}
```

- **确保步进电机连接**：
将步进电机的四根控制线连接到 `port` 数组中指定的端口（0, 1, 2, 3）。

- **调整时间设置**：
根据实际情况调整 `MILLIS_PER_MIN` 的值，以确保时钟准确。如果时钟运行过快或过慢，请相应调整此值。

- **确认步数计算**：
确保 `STEPS_PER_ROTATION` 的值根据电机的实际步数和系统设计正确计算。

- **调整延迟时间**：
`delaytime` 控制每步之间的延迟时间。根据电机性能和需求微调此参数，以优化电机运行。

- **控制序列设置**：
`seq` 数组定义了步进电机的控制序列。如果电机旋转方向错误，可以调整此数组中的值。

- **函数说明**：
`rotate(int step)`：控制电机旋转指定的步数。可以传递正值或负值以控制方向。电机在每次旋转后会逐渐减少延迟以提高速度。

- **setup():** 在启动时运行一次，用于初始化控制端口并执行初始定位。这是设置电机的必要步骤。

- **loop():** 主循环会持续运行，用于计算当前分钟并更新分针的位置。此函数将在每次分钟更新时调用 `rotate()` 函数以旋转分针。

:::tip

- 确保电源适合您的步进电机，并检查所有连接是否正确。

- 在测试期间，监控电机的运行情况以确保其按预期工作，并根据需要进行调整。
:::

如果您有更多的想法和修改，欢迎使用 XIAO 系列展示它们！

## 资源

- 📄 **[原理图]** [电机驱动板](https://files.seeedstudio.com/wiki/RA4M1_Application/4.zip)
- 📄 **[PCB]** [电机驱动板](https://files.seeedstudio.com/wiki/RA4M1_Application/xiao.pcb)
- 📄 **[3D]** [时钟 3D 建模](https://files.seeedstudio.com/wiki/RA4M1_Application/clock.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>