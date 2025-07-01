---
description: Seeed Studio XIAO 套件课程
title: Seeed Studio XIAO 套件课程
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-Kit-Courses
last_update:
  date: 05/15/2025
  author: shuxu hu
---
:::note
本文档由AI翻译，如发现任何错误或需要改进的地方，请通过页面下方的评论区或访问我们的[GitHub仓库](https://github.com/Seeed-Studio/wiki-documents/issues)提出issue告知我们。
:::

# XIAO: 强大性能，小巧板载

<div align="center" class="all_container">
    <div align="left" class="xiao_topic_page_pic">
        <img src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" style={{width:300, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_vertical">
        <font size={"4"}><strong>掌握 Arduino 和 TinyML</strong></font>
        <br /><font size={"3"}><strong>作者</strong></font>
        <font size={"2"}>Lei Feng, Marcelo Rovai</font>
        <br /><font size={"3"}><strong>出版日期</strong></font>
        <font size={"2"}>2023年12月8日</font>
        <br /><font size={"3"}><strong>特别感谢</strong></font>
        <font size={"2"}>Jiamou Yang, Yanming Wen, Mengdu Li, Chunchun Tian, Haixu Liu, Tianrui Wang 和 Jianjing Huang</font>
    </div>
</div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeed-XIAO-Starter-Kit-p-5378.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p> -->

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-Starter-Kit-p-5378.html"><strong><span><font color={'FFFFFF'} size={"4"}>🖱️ 购买套件</font></span></strong></a></div>

## 简介

Seeed Studio XIAO 系列代表了 Arduino 生态系统的一次突破性演进，将小巧设计与强大性能相结合。理解并掌握其功能对于电子和机器学习领域的爱好者或专业人士来说至关重要。随着技术的快速发展以及对更小、更高效设备的需求日益增加，掌握 XIAO 及其与 TinyML 的集成至关重要。它为创新开辟了新的领域，使得在以前认为不可能的空间中创建复杂项目成为可能。该主题非常重要，因为它与电子、物联网和机器学习的未来发展方向一致，对于希望站在技术前沿的人来说不可或缺。

## 套件中的部件清单

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/s/e/seeed_studio_xiao_starter_kit_-_all_seeed_studio_xiao_series_deve_after_1_.jpg" style={{width:500, height:'auto'}}/></div>

## 关于本书

### 目标读者

《XIAO: 强大性能，小巧板载》的主要读者包括电子和机器学习领域的爱好者、学生、教育工作者以及希望探索和最大化紧凑型硬件平台潜力的专业人士。这些读者通常可能是电子爱好者、DIY项目创作者、电子教育者，甚至是初级嵌入式系统开发者。随着他们职业的发展，他们可能会瞄准电子设计工程师、物联网开发者或机器学习硬件集成者等角色。

我们的读者具备电子学概念的基本理解，但可能尚未深入研究 Arduino 编程或紧凑型硬件设计。他们可能接触过标准的 Arduino 或一般电子学入门书籍，但尚未涉足专业硬件或 TinyML。至于技能，他们可能有一些基本电子或编程的实践经验，但尚未掌握 TinyML 或高级微控制器功能的复杂性。

### 读者将学到的内容

通过阅读本书，读者将了解：

- 开源硬件的基本原理，重点介绍 Seeed Studio XIAO 系列的功能。
- 如何从基础电子项目过渡到高级项目，从简单的 LED 控制开始，到复杂的应用如遥测和语音关键词检测。
- 原型设计的概念及其在产品开发中的实际意义。

- 如何将各种模块（如红外接收器、超声波距离传感器和 RTC 时钟）与 XIAO 平台集成的细节。

- Tiny Machine Learning (TinyML) 的重要性及其应用，强调其在 XIAO nRF52840 Sense 和 ESP32S3 Sense 等硬件中的变革性力量。

- 使用 Edge Impulse Studio 等高级工具进行实际应用，如异常和物体检测，以及视频或声音分类的技术。

读者将能够：

- 设置、编程和排除所有 XIAO 系列板的项目故障，从基础硬件交互到复杂项目设计。

- 将抽象的想法转化为具体的电子产品原型，利用课程中的见解。

- 设计和实施中级项目，如使用专业传感器和模块的智能手表和空气钢琴。

- 利用 XIAO ESP32C3 的 Wi-Fi 和 MQTT 协议进行云通信和数据交换。

- 在不同的 XIAO 板上部署 TinyML，执行图像、运动和声音分类，以及异常和物体检测任务。

- 创新并扩展项目创意，从精选的 XIAO 项目集合中汲取灵感，并根据定制需求进行调整。

## 图书大纲

### [第1章：硬件和编程简介](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/chapter_1.html)

在本章中，读者将使用 Arduino IDE 从 XIAO 的基础编程开始。通过简单的示例程序，他们将学习控制 LED 灯、按钮、蜂鸣器和其他电子组件，掌握数字 I/O、模拟 I/O、音调生成和数值映射等核心编程概念。通过逐行手动输入代码示例，他们将培养良好的编码习惯并掌握编程语法。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Big_Power-Board-ebook-photo/chapter_1-6/chapter_1-6_7.jpg" style={{width:500, height:'auto'}}/></div>

### [第二章：初学者项目实践——原型设计入门](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/chapter_2.html)

在本章中，读者将通过适合初学者的项目学习使用 XIAO 设计原型的基础知识。他们将从一个想法开始，快速创建验证原型，重点放在代码的实际应用而不是逐行分析。通过利用 Arduino 库、社区资源和示例程序，读者将学习如何找到并调整代码片段以高效地实现所需效果。此外，他们还将探索如何通过创造性地将电子硬件与日常物品相结合来设计原型的外观。关键成果是掌握基于项目的方法，并培养构建简单交互原型的技能。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Big_Power-Board-ebook-photo/chapter_2-2/chapter_2-2_15.jpg" style={{width:500, height:'auto'}}/></div>

### [第三章：中级项目实践——复杂项目](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/chapter_3.html)

在本章中，读者将通过使用 XIAO 创建复杂的 IoT 项目来提升原型设计技能。他们将实现诸如 Wi-Fi 连接、MQTT 遥测和远程控制命令等功能，使用 XIAO ESP32C3。通过构建智能远程门、智能手表和空气钢琴等复杂项目，读者将磨练无线通信、云集成和嵌入式控制的编程技术。虽然提供了可选的设计蓝图，但鼓励读者探索使用替代材料进行创造性的外壳设计。关键成果是掌握中级 IoT 原型设计技能，并为高级 tinyML 应用做好准备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Big_Power-Board-ebook-photo/chapter_3-2/chapter_3-2_12.jpg" style={{width:500, height:'auto'}}/></div>

### [第四章：高级项目实践——tinyML 应用](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/chapter_4.html)

在 XIAO 系列产品中，Seeed Studio XIAO nRF52840 Sense 具有蓝牙 5.0 无线连接、低功耗，并配备板载 6 轴 IMU 和 PDM 麦克风传感器。而 XIAO ESP32S3 Sense 进一步集成了摄像头、数字麦克风和 SD 卡支持。这些功能使它们成为 TinyML（嵌入式机器学习）项目的强大工具。TinyML 以完全不同于传统编程方法的方式解决问题。本章将通过使用 Edge Impulse Studio 工具，向读者介绍这一前沿领域，涵盖从数据收集、训练、测试到部署和推理的整个机器学习工作流程。

<div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1654543/bugs-inference_fXpzxJOZRj.png?auto=compress%2Cformat&w=1280&h=960&fit=max" style={{width:500, height:'auto'}}/></div>

### [第五章：创意实验](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/chapter_5.html)

自推出以来，Seeed Studio XIAO 系列因其紧凑的尺寸、强大的性能和多样化的产品系列而备受赞誉。创客社区已经用 XIAO 制作了大量项目。由于篇幅限制，我们精选了一些由创客们使用 XIAO 制作的优秀项目。这些项目充分展示了 XIAO 的强大功能和广泛应用。让我们跟随创客的脚步，激发创造力，探索 XIAO 的无限可能性。读者可以从这些项目中汲取灵感，发挥想象力，使用 XIAO 探索新的领域。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Big_Power-Board-ebook-photo/chapter_5-1/chapter_5-1_7.jpg" style={{width:500, height:'auto'}}/></div>

<!-- 本课程包含 4 个单元和 16 节课，帮助您快速入门开发板，然后可以继续实现一些有趣的个人项目。 -->

<!-- <table align="center">
	<tr>
	    <td align="center"></td>
	    <td align="center"></td>
	</tr>
	<tr>
	    <td><img src="https://files.seeedstudio.com/wiki/XIAO-Kit/XIAO-Kit.jpg" alt="pir" width="600" height="auto"/> 
		</td>
	    <td align="left"><strong> 前言</strong>: 本课程不需要 Arduino 编程或电子知识。课程将一步步带您理解并学习这些必要知识，并在每个项目中快速实践。       <a href="https://files.seeedstudio.com/wiki/XIAO-Kit/XIAO-Kit-Preface.pdf">前言 ></a></td>
	</tr>
	<tr>
	    <td ><img src="https://files.seeedstudio.com/wiki/XIAO-Kit/xiaokitss.png" alt="pir" width="250" height="auto"/></td>
	    <td align="left"><strong>单元 1 硬件和编程介绍 </strong>: 在学习过程中，我们尽量确保每个任务的程序代码由自己编写，养成良好的习惯，避免因某些符号错误或不熟悉规则导致程序上传失败。 <a href="https://files.seeedstudio.com/wiki/XIAO-Kit/Unit-1.zip"> 介绍 ></a></td>
	</tr>
	<tr>
	    <td><img src="https://files.seeedstudio.com/wiki/XIAO-Kit/xiaokit1.png" alt="pir" width="500" height="auto" alt="pir" width="500" height="auto"/></td>
	    <td align="left"><strong>单元 2 项目实践</strong>: 在本单元中，我们将以几个经典项目为例进行项目实践，学习如何从一个想法创建一个可以快速验证的原型。在本单元中，我们不会逐行分析代码，而是只解释关键步骤。  <a href="https://files.seeedstudio.com/wiki/XIAO-Kit/Unit-2.zip">项目实践 ></a></td>
	</tr>
	<tr>
	    <td><img src="https://files.seeedstudio.com/wiki/XIAO-Kit/xiaokit2.png" alt="pir" width="500" height="auto"/></td>
	    <td align="left"><strong>单元 3 高级项目</strong>: 在本单元中，我们将实践更复杂和完整的项目。程序实现效果和设计结构更接近成品。 <a href="https://files.seeedstudio.com/wiki/XIAO-Kit/Unit-3.zip">高级项目 ></a></td>
	</tr>
	<tr>
	    <td><img src="https://files.seeedstudio.com/wiki/XIAO-Kit/xiaokit3.png" alt="pir" width="500" height="auto"/></td>
	    <td align="left"><strong>单元 4 自主开发项目</strong>: 在本单元中，我们将实践所学内容，从作品改造开始，然后共同完成一个从零开始的原型作品，并在发布会上展示。    <a href="https://files.seeedstudio.com/wiki/XIAO-Kit/Unit-4.zip">自主开发项目 ></a></td>
	</tr>
    	<tr>
	    <td><img src="https://files.seeedstudio.com/wiki/XIAO-Kit/xiaokit4.png" alt="pir" width="500" height="auto"/></td>
	    <td align="left"><strong>后记</strong>: 与本课程相关的资源、下载、链接和说明。 <a href="https://files.seeedstudio.com/wiki/XIAO-Kit/XIAO-Kit-Aferword.pdf">后记 ></a></td>
	</tr>
</table> -->

<!-- ## 资源

- **[PDF]**[Seeeduino-XIAO-in-Action-Minitype&Wearable-Projects-Step-by-Step](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-in-Action-Minitype&Wearable-Projects-Step-by-Step.pdf)
- **[DXF]**[XIAO_ADR](https://files.seeedstudio.com/wiki/XIAO-Kit/XIAO_ADR.dxf)
- **[DXF]**[XIAO_Air_Piano](https://files.seeedstudio.com/wiki/XIAO-Kit/XIAO_Air_Piano.dxf)
- **[DXF]**[XIAO_X_watch](https://files.seeedstudio.com/wiki/XIAO-Kit/XIAO_X_watch.dxf) -->

## 参考资料

### 在线课程

-   [哈佛工程与应用科学学院 - CS249r: Tiny Machine Learning](https://sites.google.com/g.harvard.edu/tinyml/home)
-   [Tiny Machine Learning (TinyML) 专业证书 -- edX/哈佛](https://www.edx.org/professional-certificate/harvardx-tiny-machine-learning)
-   [嵌入式机器学习简介 - Coursera/Edge Impulse](https://www.coursera.org/learn/introduction-to-embedded-machine-learning)
-   [嵌入式机器学习中的计算机视觉 - Coursera/Edge Impulse](https://www.coursera.org/learn/computer-vision-with-embedded-machine-learning)
-   [UNIFEI-IESTI01 TinyML: "嵌入式设备的机器学习"](https://github.com/Mjrovai/UNIFEI-IESTI01-TinyML-2023.1)

### 书籍

-   ["Python for Data Analysis by Wes McKinney"](https://wesmckinney.com/book/)
-   ["Deep Learning with Python" by François Chollet](https://www.manning.com/books/deep-learning-with-python) - [GitHub Notebooks](https://github.com/fchollet/deep-learning-with-python-notebooks)
-   ["TinyML" by Pete Warden, Daniel Situnayake](https://www.oreilly.com/library/view/tinyml/9781492052036/)
-   ["TinyML Cookbook" by Gian Marco Iodice](https://github.com/PacktPublishing/TinyML-Cookbook)
-   ["Technical Strategy for AI Engineers, In the Era of Deep Learning" by Andrew Ng](https://github.com/ajaymache/machine-learning-yearning/blob/master/full%20book/machine-learning-yearning.pdf)
-   ["AI at the Edge" book by Daniel Situnayake, Jenny Plunkett](https://www.oreilly.com/library/view/ai-at-the/9781098120191/)
-   ["MACHINE LEARNING SYSTEMS for TinyML" Collaborative effort](https://harvard-edge.github.io/cs249r_book/)

### 项目仓库

-   [Edge Impulse Expert Network](https://docs.edgeimpulse.com/experts/)

## 关于作者

**Lei Feng** 是 Seeed Studio 技术支持组和产品课程的负责人。他是一位在开源硬件和边缘计算领域经验丰富的作者，曾在中国出版过多本书籍，包括《做游戏，玩编程------零基础开发微软 Arcade 掌机游戏》、《Arduino 图形化编程轻松学》和微软中国支持的《深入浅出 IoT：完整项目通关实战》的中文版翻译。

Lei Feng 和他的团队创作了大量中文和英文教程以及开源文档。他在开发物联网和边缘计算项目方面的实践经验使他能够为初学者简化复杂概念。作为一名富有吸引力的作者和耐心的老师，Lei Feng 是使 Arduino 和 TinyML 对全球初学者更易上手的理想指导者。

*LinkedIn 个人资料:* [*https://www.linkedin.com/in/leon-feng-a029bb1/*](https://www.linkedin.com/in/leon-feng-a029bb1/)

**Marcelo Rovai** 是工程和技术教育领域的知名人物，拥有巴西伊塔茹巴联邦大学授予的荣誉教授头衔。他的教育背景包括 UNIFEI 的工程学学位，以及圣保罗大学理工学院的高级专业化课程。此外，他还获得了 IBMEC（INSPER）的 MBA 学位以及智利发展大学的数据科学硕士学位。

他的职业生涯涵盖了多个高知名度的技术公司，例如 AVIBRAS 航空航天、ATT、NCR 和 IGT，并曾担任拉丁美洲地区副总裁。他是一位多产的电子相关话题作者，并通过像 Hackster.io 这样的开放平台分享自己的知识。

除了专业工作，他还致力于教育推广，担任 UNIFEI 的志愿教授，并作为 TinyML4D 小组的联合主席，推动发展中国家的 TinyML 教育。他的工作体现了利用技术促进社会进步的承诺。

*LinkedIn 个人资料:* [*https://www.linkedin.com/in/marcelo-jose-rovai-brazil-chile/*](https://www.linkedin.com/in/marcelo-jose-rovai-brazil-chile/)

*Twitter 账号:* *\@mjrovai*

*作者公开演讲样本（YouTube 等）:* [*https://www.youtube.com/watch?v=KeXlAazzgKw*](https://www.youtube.com/watch?v=KeXlAazzgKw)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>