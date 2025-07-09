---
description: Comenzando con TensorFlow Lite en reTerminal
title: Comenzando con TensorFlow Lite en reTerminal
keywords:
  - Edge
  - Aplicación reTerminal
  - Embedded_ML
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal_ML_TFLite_spanish
last_update:
  date: 02/18/2025
  author: Erick González
---


# Comenzando con TensorFlow Lite en reTerminal

<p align="center">
  <img alt="Light" src="https://www.tensorflow.org/site-assets/images/project-logos/tensorflow-lite-logo-social.png" width="45%"/>
&nbsp; &nbsp;
  <img alt="Dark" src="https://raw.githubusercontent.com/lakshanthad/Image/master/CM4_wiki/wiki_thumb.png" width="45%"/>
</p>

TensorFlow Lite es un conjunto de herramientas que habilita el aprendizaje automático en el dispositivo, ayudando a los desarrolladores a ejecutar sus modelos en dispositivos móviles, embebidos y de IoT.
Las características clave de TensorFlow Lite están optimizadas para el aprendizaje automático en el dispositivo, con un enfoque en la latencia, privacidad, conectividad, tamaño y consumo de energía. El marco está diseñado para proporcionar soporte a múltiples plataformas, incluidos dispositivos Android e iOS, Linux embebido y microcontroladores. También tiene soporte integrado para una variedad de lenguajes, como Java, Swift, Objective-C, C++, y Python, y ofrece un alto rendimiento con aceleración de hardware y optimización de modelos. Proporciona ejemplos de extremo a extremo para tareas comunes de aprendizaje automático, como clasificación de imágenes, detección de objetos, estimación de poses, respuesta a preguntas y clasificación de texto, en múltiples plataformas.

## Instalación del paquete de ejecución de TensorFlow Lite

El paquete tflite_runtime es un paquete Python más pequeño y simplificado que incluye el código mínimo necesario para ejecutar inferencias con TensorFlow Lite. Este paquete es ideal cuando lo único que deseas hacer es ejecutar modelos .tflite y evitar ocupar espacio en disco con la gran biblioteca de TensorFlow.

Para obtener el mejor rendimiento, se recomienda usar un sistema operativo de 64 bits y el paquete TFLite correspondiente, con el delegado XNNPACK optimizado habilitado. Estos se pueden compilar desde el código fuente por ti mismo o instalar utilizando los binarios precompilados proporcionados por Seeed Studio. Alternativamente, puedes instalar la última versión estable con pip.

#### Última versión estable (compilaciones oficiales)

```sh
pip3 install --index-url https://google-coral.github.io/py-repo/ tflite_runtime
```

#### Paquete optimizado para rendimiento para sistema operativo de 64 bits con XNNPACK habilitado

No estaban disponibles los binarios oficiales precompilados para Python 3.7 en sistema operativo de 64 bits con optimizaciones XNNPACK al momento de escribir este artículo, por lo que los compilamos y compartimos nosotros mismos.

```sh
wget www.files.seeedstudio.com/ml/TFLite/tflite_runtime-2.6.0-cp37-cp37m-linux_aarch64.whl
pip3 install tflite_runtime-2.6.0-cp37-cp37m-linux_aarch64.whl
```

Una vez que la instalación esté completa, intenta importar el paquete tflite:

```sh
pi@raspberrypi:~ $ python3
Python 3.7.3 (default, Jul 25 2020, 13:03:44) 
[GCC 8.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import tflite_runtime
>>> tflite_runtime.__version__
'2.6.0'
```

## Ejemplos

Es posible usar el TFLite Converter para convertir cualquier modelo de TensorFlow a formato .tflite, siempre que solo consista en operaciones compatibles con TFLite Runtime. A continuación se presenta una lista de demos actualmente probadas en reTerminal, que se ampliarán y completarán en el futuro:

## Tabla de Ejemplos

### Detección de objetos
![Detección de objetos](https://files.seeedstudio.com/wiki/reTerminal_ML/000402.jpg)

**Demo**: Detección de vehículos  
[Jupyter Notebook](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/blob/main/jupyter_notebooks/aXeleRate_multi_stage.ipynb)  
[Scripts de ejemplo](https://github.com/AIWintermuteAI/aXeleRate/tree/master/example_scripts/tensorflow_lite/detector)  
- alpha 0.25 224x224 66.7 FPS (15 ms.)
- alpha 0.5 224x224 40 FPS (25 ms.)
- alpha 0.75 320x320 14.9 FPS (67 ms.)
- alpha 1.0 320x320 10.4 FPS (96 ms.)

### Clasificación de imágenes
![Clasificación de imágenes](https://files.seeedstudio.com/wiki/reTerminal_ML/belt.png)

**Demo**: Identificación de desgarrones en cinta industrial  
[Jupyter Notebook](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/blob/main/jupyter_notebooks/aXeleRate_conveyor_belt_rip_recognition.ipynb)  
[Scripts de ejemplo](https://github.com/AIWintermuteAI/aXeleRate/tree/master/example_scripts/tensorflow_lite/classifier)

### Segmentación semántica
![Segmentación semántica](https://files.seeedstudio.com/wiki/reTerminal_ML/CHNCXR_0331_1.png)

**Demo**: Segmentación pulmonar  
[Jupyter Notebook](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/blob/main/jupyter_notebooks/aXeleRate_lung_segmentation.ipynb)  
[Scripts de ejemplo](https://github.com/AIWintermuteAI/aXeleRate/tree/master/example_scripts/tensorflow_lite/segnet)

### Reconocimiento de edad/género facial
![Reconocimiento de edad/género facial](https://files.seeedstudio.com/wiki/reTerminal_ML/output.gif)

**Demo**: Inferencia multi-etapa: MobileNet YOLOv3 alpha 0.25 -> MobileFaceNet  
[Repositorio de Github](https://github.com/AIWintermuteAI/edge_ml_age_gender_recognition/tree/master)  
[Scripts de ejemplo](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/tree/main/examples/tensorflow_lite/multi_stage_inference_age_gender)  
~16-20 FPS (con [ARM NN](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/tree/main/examples/armnn/face_age-gender))

### Reconocimiento de expresiones faciales
![Reconocimiento de expresiones faciales](https://files.seeedstudio.com/wiki/reTerminal_ML/emotion/emotions.gif)

**Demo**: Inferencia multi-etapa: MobileNet YOLOv3 alpha 0.25 -> MobileFaceNet  
[Repositorio de Github](https://github.com/AIWintermuteAI/edge_ml_emotion_recognition/tree/master)  
[Scripts de ejemplo](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/tree/main/examples/tensorflow_lite/multi_stage_inference_emotion)  
~11 FPS

### Anti-suplantación facial
![Anti-suplantación facial](https://files.seeedstudio.com/ml/face_anti-spoofing/face_anti-spoofing.gif)

**Demo**: Inferencia multi-etapa: MobileNet YOLOv3 alpha 0.25 -> MobileNet v1 alpha 0.25  
[Jupyter Notebook](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/blob/main/jupyter_notebooks/aXeleRate_face_anti_spoofing.ipynb)  
[Scripts de ejemplo](https://github.com/AIWintermuteAI/aXeleRate/tree/master/example_scripts/tensorflow_lite/classifier)  
~23 FPS (ARM NN)

### Reconocimiento facial
![Reconocimiento facial](https://files.seeedstudio.com/wiki/reTerminal_ML/face_recognition.gif)

**Demo**: Inferencia multi-etapa: Ultra Light Face Detector con Landmark Detection -> MobileFaceNet  
Jupyter Notebook  
[Scripts de ejemplo](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/tree/main/examples/armnn/face_recognition)  
~15 FPS (ARM NN)

## Optimización adicional

Los FPS y los resultados de inferencia en la tabla de ejemplos corresponden a la inferencia de modelos cuantizados INT8 en TensorFlow Lite, a menos que se indique lo contrario. <br />
Dado que reTerminal se basa en Raspberry Pi 4, no tiene aceleradores de hardware adicionales para inferencia de redes neuronales, por lo que solo se pueden aplicar métodos estándar de optimización para inferencia en CPU.
El video de resumen de este tema se presenta aquí:

<iframe width="800" height="450" src="https://www.youtube.com/embed/BEDEscDQFxk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

A continuación se presenta una breve descripción de los métodos de optimización de inferencia en CPU:

1) **Diseño de redes más pequeñas**. Si el objetivo es lo suficientemente simple (clasificación de imágenes con < 100 clases o detección de objetos con < 10 clases o similar), una red más pequeña puede lograr una precisión aceptable y ejecutarse muy rápido. Por ejemplo, MobileNet v1 alpha 0.25 YOLOv2 entrenado para detectar solo una clase de objetos (rostros humanos) logra 62.5 FPS sin ninguna optimización adicional.

**Inferencia FP32 estándar de TensorFlow Lite:**
MobileNetv1(alpha 0.25) YOLOv2 1 clase 0.89 MB 62.5 FPS
MobileNetv1(alpha 1.0) YOLOv3 20 clases 13.1 MB  7 FPS

2) **Cuantización**. La cuantización es el proceso de reducir la precisión de los pesos de la red neuronal, generalmente de FP32 a INT8. Reduce el tamaño en un 4x y la latencia en un ~60-80% usando los kernels predeterminados de TensorFlow Lite. La pérdida de precisión se puede minimizar usando QAT (entrenamiento consciente de cuantización), que es el proceso de ajustar finamente la red con nodos de cuantización insertados.

**Inferencia INT8 estándar de TensorFlow Lite:**
MobileNetv1(alpha 0.25) YOLOv2 1 clase 0.89 MB 77 FPS
MobileNetv1(alpha 1.0) YOLOv3 20 clases 13.1 MB  11.5 FPS

3) Uso de **kernels optimizados**. La velocidad de inferencia se puede mejorar utilizando marcos que tienen kernels de CNN optimizados para un conjunto de instrucciones de CPU específico, por ejemplo, instrucciones SIMD NEON para ARM. Ejemplos de tales redes incluyen ARM NN y XNNPACK.

El SDK de ARM NN es un conjunto de software y herramientas de código abierto que habilita cargas de trabajo de aprendizaje automático en dispositivos de bajo consumo.
La descripción y los puntos de referencia proporcionados parecen prometedores, pero el procedimiento de instalación en el último Raspberry Pi OS es doloroso en este momento; la única forma adecuada de instalar la última versión de ARM NN actualmente es compilarla desde el código fuente.

**Inferencia FP32 ARM NN:**
MobileNetv1(alpha 0.25) YOLOv2 1 clase 0.89 MB 83 FPS
MobileNetv1(alpha 1.0) YOLOv3 20 clases 13.1 MB 7.2 FPS

XNNPACK es una biblioteca para acelerar la inferencia de redes neuronales para arquitecturas ARM, x86 y WebAssembly en Android, iOS, Windows, Linux y macOS. Está integrada en TensorFlow Lite como un delegado, que está habilitado por defecto para la compilación de Android, pero en otros entornos necesita ser habilitado manualmente. Así que, si deseas usar XNNPACK en Raspberry Pi 4, tendrás que compilar el paquete TensorFlow Lite Interpreter desde el código fuente o descargar uno de los binarios de terceros, como el que proporcionamos arriba.

**Inferencia FP32 de TensorFlow Lite con delegado XNNPACK:**
MobileNetv1(alpha 0.25) YOLOv2 1 clase 0.89 MB 83 FPS
MobileNetv1(alpha 1.0) YOLOv3 20 clases 13.1 MB 7.2 FPS

El principal problema con los kernels optimizados es el soporte desigual de diferentes arquitecturas/operadores NN/tipos de precisión en diferentes marcos. Por ejemplo, los kernels optimizados para INT8 están en progreso tanto en ARM NN como en XNNPACK.

4) **Poda e inferencia dispersa**. La poda es el proceso de ajustar finamente una red neuronal entrenada para encontrar pesos que no contribuyen a las predicciones correctas. Esto permite reducir tanto el tamaño como la latencia de los modelos. Se puede lograr hasta un 80% de dispersión con un impacto insignificante en la precisión.

## F.A.Q

#### Q1: La política de mi empresa no permite el uso de binarios de terceros

Puedes usar el paquete oficial del intérprete TFLite o, alternativamente, compilarlo desde el código fuente siguiendo las instrucciones [aquí](https://github.com/PINTO0309/TensorflowLite-bin#2-tensorflow-v230-version-or-later).

## Recursos

- **[Página Web]** [Página oficial de TensorFlow Lite](https://www.tensorflow.org/lite)

- **[Página Web]** [Documentación oficial de TensorFlow Lite](https://www.tensorflow.org/lite/guide)
