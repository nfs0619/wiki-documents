---
description: Jetson AI 开发工具
title: Jetson AI 开发工具
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Jetson-AI-developer-tools
last_update:
  date: 05/15/2025
  author: Lakshantha

no_comments: false # 用于 Disqus

---

# Jetson AI 开发工具

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

部署一个 AI 想法可以变得更快、更灵活，甚至对所有人来说都更具可扩展性。Seeed 的 Jetson 平台旨在帮助教育工作者、开发者和企业在现实世界中部署机器学习。通过整合 Seeed 的顶级硬件、来自软件合作伙伴的尖端技术以及社区中的所有开发者，我们的目标是在开源平台中实现各种 AI 场景，加速行业数字化转型。我们正在寻找合作伙伴加入我们的生态系统，共同为不同行业提供解决方案。如需更多合作生态系统信息，请发送电子邮件至 edgeai@seeed.cc。

<table style={{tableLayout: 'fixed', width: 980}}>
  <colgroup>
    <col style={{width: '275.085714px'}} />
    <col style={{width: '705.085714px'}} />
  </colgroup>
  <thead>
    <tr>
      <th />
      <th />
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/cvedia-logo.jpg" alt="pir" width={264} height={76} /></td>
      <td>CVEDIA-RT<br />CVEDIA-RT 是一个模块化、跨平台的 AI 推理引擎，为构建决策支持系统提供了坚实的基础。它从零开始设计，专为开发者和集成商考虑，提供高层和低层接口。<br /><a href="https://www.cvedia.com/cvedia-rt" target="_blank" rel="noopener noreferrer">了解更多 &gt;</a><br /><a href="https://wiki.seeedstudio.com/CVEDIA-Jetson-Getting-Started" target="_blank" rel="noopener noreferrer">在 NVIDIA® Jetson 设备上开始使用 CVEDIA-RT &gt;</a></td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/lumeo-logo.jpg" alt="pir" width={264} height={76} /></td>
      <td>Lumeo<br />Lumeo 是一个无代码视频分析平台，使您能够快速设计、部署和监控自定义视频分析以及其他视觉 AI 应用程序。<br /><a href="https://lumeo.com/" target="_blank" rel="noopener noreferrer">了解更多 &gt;</a><br /><a href="https://wiki.seeedstudio.com/Lumeo-Jetson-Getting-Started" target="_blank" rel="noopener noreferrer">在 NVIDIA® Jetson 设备上开始使用 Lumeo &gt;</a></td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/jetsonaitools83.png" alt="pir" width={264} height={76} /></td>
      <td>alwaysAI<br />alwaysAI 为开发者和企业提供了一个全面的平台，用于在物联网设备上构建、部署和管理计算机视觉应用程序。<br /><a href="https://alwaysai.co/">了解更多 &gt;</a><br /><a href="https://wiki.seeedstudio.com/alwaysAI-Jetson-Getting-Started/">在 NVIDIA® Jetson 设备上开始使用 alwaysAI &gt;</a></td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/yolov8-logo.png" alt="pir" width={264} height={76} /></td>
      <td>YOLOv8<br />Ultralytics YOLOv8 是一个尖端的、最先进（SOTA）的模型，基于之前 YOLO 版本的成功，并引入了新功能和改进，以进一步提升性能和灵活性。YOLOv8 设计快速、准确且易于使用，是广泛的目标检测和跟踪、实例分割、图像分类和姿态估计任务的绝佳选择。<br /><a href="https://github.com/ultralytics/ultralytics" target="_blank" rel="noopener noreferrer">了解更多 &gt;</a><br /><a href="https://wiki.seeedstudio.com/YOLOv8-DeepStream-TRT-Jetson" target="_blank" rel="noopener noreferrer">使用 TensorRT 和 DeepStream SDK 在 NVIDIA Jetson 上部署 YOLOv8 &gt;</a></td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/jetsonaitools80.png" alt="pir" /></td>
      <td>YOLOv5<br />YOLO 是“你只看一次”（You Only Look Once）的缩写。它是一种实时检测和识别图像中各种对象的算法。YOLOv5 🚀 是一组基于 COCO 数据集训练的复合缩放目标检测模型，包含测试时增强（TTA）、模型集成、超参数演化以及导出到 ONNX、CoreML 和 TFLite 的简单功能。<br /><a href="https://ultralytics.com/yolov5">了解更多 &gt;</a><br /><a href="https://wiki.seeedstudio.com/YOLOv5-Object-Detection-Jetson/">使用 YOLOv5 和 Roboflow 进行少样本目标检测 &gt;</a></td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/jetsonaitools81.png" alt="pir" /></td>
      <td>roboflow<br />Roboflow 让您可以直接在浏览器中快速标注图像。即使您不是机器学习专家，也可以轻松训练和部署一个工作中的计算机视觉模型。<br /><a href="https://roboflow.com/">了解更多 &gt;</a><br /><a href="https://wiki.seeedstudio.com/YOLOv5-Object-Detection-Jetson/">使用 YOLOv5 和 Roboflow 进行少样本目标检测 &gt;</a><br /><a href="https://wiki.seeedstudio.com/YOLOv5-Road-Signs-Detection-Jetson/">使用 YOLOv5 和 Ultralytics HUB 进行道路标志检测 &gt;</a><br /><a href="https://wiki.seeedstudio.com/YOLOv5-Roboflow-Wildfire-Smoke-Detection-Jetson/">使用 YOLOv5 和 Roboflow 在 NVIDIA Jetson 上进行野火烟雾检测 &gt;</a></td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/jetsonaitools4.png" alt="pir" /></td>
      <td>Allxon<br />Allxon 是一个重要的边缘设备管理解决方案，通过将 AI/IoT 生态系统（硬件（IHV）、软件（ISV）和服务提供商（SI/MSP））结合在一起，简化并优化业务运营管理。Allxon 为 NVIDIA Jetson 平台提供高效且安全的远程硬件管理服务。<br /><a href="https://www.allxon.com/">了解更多 &gt;</a><br /><a href="https://wiki.seeedstudio.com/Allxon-Jetson-Getting-Started/">开始使用 Allxon &gt;</a></td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/jetsonaitools82.png" alt="pir" /></td>
      <td>Deci<br />Deci 构建了一个端到端平台，使 AI 开发者能够在任何硬件上构建、优化和部署超快速深度学习模型。您可以使用预优化模型或自包含模型高效地从零开始训练模型，并可以自动优化硬件以提高推理性能。<br /><a href="https://deci.ai/">了解更多 &gt;</a><br /><a href="https://deci.ai/resources/videos/engineering-best-practices-deep-learning-nvidia-jetson/">如何在 NVIDIA Jetson 上部署并提升推理性能 &gt;</a><br /><a href="https://wiki.seeedstudio.com/DeciAI-Getting-Started/">在 NVIDIA® Jetson 设备上开始使用 Deci &gt;</a></td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/ei-logo.png" alt="pir" width={264} height={76} /></td>
      <td>Edge Impulse<br />Edge Impulse 是领先的边缘设备机器学习开发平台，免费供开发者使用，并受到企业的信赖。通过低代码到高级集成加速机器学习解决方案开发，并获得专家支持。<br /><a href="https://www.edgeimpulse.com/" target="_blank" rel="noopener noreferrer">了解更多 &gt;</a><br /><a href="https://wiki.seeedstudio.com/HardHat/" target="_blank" rel="noopener noreferrer">使用 Edge Impulse 进行安全帽检测 &gt;</a></td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/cochl-logo.png" alt="pir" width={264} height={76} /></td>
      <td>Cochl.Sense<br />Cochl.Sense 通过机器聆听技术使计算机能够理解声音。凭借先进的音频处理和神经网络技术，它提供了抗噪声和环境独立的机器聆听功能。只需将您的音频数据（文件或流）输入 Cochl.Sense，它就会检测并返回输入声音的类型。它可以在任何设备、任何平台上使用（智能音箱、IP 摄像头等）。<br /><a href="https://www.cochl.ai/" target="_blank" rel="noopener noreferrer">了解更多 &gt;</a><br /><a href="https://wiki.seeedstudio.com/Cochl.Sense-Jetson-Getting-Started" target="_blank" rel="noopener noreferrer">在 NVIDIA® Jetson 设备上开始使用 Cochl.Sense &gt;</a></td>
    </tr>
  </tbody>
</table>

## 技术支持与产品讨论
感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时能够尽可能顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>