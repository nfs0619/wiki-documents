---
description: Wio Tracker L1 Meshtastic Node Introduction
title:  Nodo Meshtastic Wio Tracker L1
keywords:
- Meshtastic
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-L1.webp
slug: /es/wio_tracker_l1_node
sidebar_position: 1
last_update:
  date: 06/02/2025
  author: Guillermo
---



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.jpg" alt="pir" width={600} height="auto" /></p>


La Serie Wio Tracker L1 es un nodo Meshtastic de bajo consumo y alta extensibilidad que incorpora LoRa (862–930 MHz), el nRF52840 para procesamiento eficiente y el módulo GPS L76K para rastreo preciso de ubicación. Diseñado para ser flexible, es compatible con pantallas OLED y E-Ink, así como con paneles solares y alimentación por batería, lo que lo hace ideal para una amplia gama de aplicaciones IoT y fuera de la red.


## Comparación de Versiones

:::tip
La Serie Wio Tracker L1 está disponible en cuatro versiones. Elige la que mejor se adapte a tus necesidades.
:::

|Nombre del producto|Wio Tracker L1 Lite|Wio Tracker L1|Wio Tracker L1 Pro|Wio Tracker L1 E-Ink|
|------------------|------------------|--------------------------|-----------------------|-----------------------|
|Imagen|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993653-wio-tracker-l1-lite.jpg" alt="pir" width={300} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993648-wio-tracker-l1.jpg" alt="pir" width={300} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993649-wio-tracker-l1-pro.jpg" alt="pir" width={300} height="auto" />|<img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/L1-e-ink.png" alt="pir" width={300} height="auto" />|
|Enlace de compra|<p style={{textAlign: 'center'}}>[¡Consigue uno ahora!](https://www.seeedstudio.com/Wio-Tracker-L1-Lite-p-6455.html)</p>|<p style={{textAlign: 'center'}}>[¡Consigue uno ahora!](https://www.seeedstudio.com/Wio-Tracker-L1-p-6453.html)</p>|<p style={{textAlign: 'center'}}>[¡Consigue uno ahora!](https://www.seeedstudio.com/Wio-Tracker-L1-Pro-p-6454.html)</p>|<p style={{textAlign: 'center'}}>[¡Consigue uno ahora!](https://www.seeedstudio.com/Wio-Tracker-L1-Lite-p-6455.html)</p>|
|LoRa|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|
|GPS|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|
|Pantalla|<p style={{textAlign: 'center'}}>-</p>|<p style={{textAlign: 'center'}}>OLED de 1,3 pulgadas</p><br/><p style={{textAlign: 'center'}}>Resolución: 128 × 64 píxeles</p>|<p style={{textAlign: 'center'}}>OLED de 1,3 pulgadas</p><br/><p style={{textAlign: 'center'}}>Resolución: 128 × 64 píxeles</p>|<p style={{textAlign: 'center'}}>E-ink de 2,13 pulgadas</p><br/><p style={{textAlign: 'center'}}>Resolución: 122 × 250 píxeles</p>|
|Conector Solar+Batería|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>Batería de 2000mAh incorporada</p>|<p style={{textAlign: 'center'}}>✅</p>|
|Carcasa|<p style={{textAlign: 'center'}}>-</p>|<p style={{textAlign: 'center'}}>-</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>-</p>|

## Visión General

### Características

* **Firmware Meshtastic preinstalado**  
Listo para usarse desde el primer momento con firmware Meshtastic ya cargado, para una configuración sin complicaciones.

* **Tres Opciones de Alimentación**  
Admite carga rápida mediante USB tipo C, entrada solar y batería de ion de litio, ofreciendo una implementación flexible en diversos entornos —ideal para aplicaciones móviles y al aire libre.

* **Compatibilidad con Pantallas Flexibles**  
Soporta pantallas opcionales OLED de 1.3 pulgadas y E-Ink de 2.13 pulgadas, brindando opciones versátiles de visualización según las necesidades de consumo energético y retroalimentación visual.

* **Alta Expansibilidad**  
Totalmente compatible con el ecosistema Grove, incluye headers PTH e interfaz de depuración SWD para expansión de hardware personalizada y desarrollo avanzado.

### Especificación

### Vista General del Hardware

**Wio Tracker L1**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/l1.png" alt="pir" width={800} height="auto" /></p>


**Wio Tracker L1 Lite**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/l1-lite.png" alt="pir" width={800} height="auto" /></p>


**Wio Tracker L1 Pro**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/l1-pro.png" alt="pir" width={800} height="auto" /></p>

**Diagrama**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/l1-diagram.png" alt="pir" width={800} height="auto" /></p>

