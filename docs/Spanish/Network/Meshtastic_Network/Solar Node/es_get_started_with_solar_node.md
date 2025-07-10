---
description: Get Started with SenseCAP Solar Node for Meshtastic & LoRa
title:  Primeros Pasos con el Nodo Solar SenseCAP
keywords:
- Meshtastic
- Solar
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.webp
slug: /es/get_started_with_meshtastic_solar_node
sidebar_position: 2
last_update:
  date: 05/29/2025
  author: Guillermo
---

## Primeros Pasos

Antes del despliegue formal, por favor realiza pruebas y configura el nodo correctamente.

### Instalar la Batería y el Módulo GPS (Opcional)

La versión P1-Pro incluye batería y módulo GPS integrados.  
Para la versión P1, el usuario debe instalar manualmente ambos si son necesarios.

* Paso 1: Retira todos los tornillos y la tapa del dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

* Paso 2: Instala la batería y el módulo GPS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/install-bat-gps.png" alt="pir" width={800} height="auto" /></p>

### Encender el Dispositivo

Conecta el cable USB para activar el dispositivo.

### Conexión mediante la App

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS App">

* Selecciona el dispositivo objetivo desde el panel de Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

* Introduce el código (el código predeterminado es `123456`) y luego haz clic en `OK` para conectar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

* Haz clic en `+` y selecciona el dispositivo objetivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

* Introduce el código (el código predeterminado es `123456`) y luego haz clic en `OK` para conectar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

  
</TabItem>
</Tabs>

### Configurar los Parámetros

Para comenzar a comunicarte mediante la red mesh, debes configurar tu región.  
Esta configuración define qué rango de frecuencias utilizará tu dispositivo y debe coincidir con la legislación local.

<Tabs>
<TabItem value="ios" label="IOS App">


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>



</TabItem>

<TabItem value="android" label="Android App">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>


</TabItem>
</Tabs>

### Lista de Regiones

|**Código de Región**|**Descripción**|**Rango de Frecuencia (MHz)**|**Ciclo de Trabajo (%)**|**Límite de Potencia (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Sin definir|N/A|N/A|N/A|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_868|Unión Europea 868MHz|869.4 - 869.65|10|27|

Consulta la [Lista de regiones LoRa por país](https://meshtastic.org/docs/configuration/region-by-country/) para ver más opciones compatibles con tu zona.

:::info
**EU_868** debe cumplir con una limitación del ciclo de trabajo del 10% por hora, calculado cada minuto sobre una base deslizante de una hora.  
Tu dispositivo dejará de transmitir si alcanzas este límite, y esperará hasta que pueda reanudar.
:::

Una vez que hayas configurado la región LoRa, puedes continuar ajustando otras [configuraciones LoRa](https://meshtastic.org/docs/configuration/radio/lora/) según tus necesidades.

## Instalación

* **Lista de Componentes**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/part-list.png" alt="pir" width={800} height="auto" /></p>

* Paso 1: Conecta la pieza 1 a la parte inferior del dispositivo usando las arandelas y tornillos.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Universal-Joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

* Paso 2: Une la rótula universal (pieza 2) con el soporte (pieza 3) usando tornillos.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

* Paso 3: Conecta el cable RF (pieza 4) y la antena (pieza 5).

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

* Paso 4: Instala el anillo de sujeción en la posición adecuada.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/hoop-ring.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

* Paso 5: Conecta el soporte de la rótula universal.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connector.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

* Paso 6: Afloja los tornillos, ajusta la rótula universal a la posición deseada y vuelve a apretar los tornillos.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

* Paso 7: Conecta la antena al dispositivo.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna2.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Soporte Técnico y Discusión de Producto

**¡Necesitas ayuda con tu Wio-WM1110 Dev Kit? ¡Estamos aquí para ayudarte!**

Por favor, envía cualquier problema técnico a nuestro [foro](http://forum.seeedstudio.com/).

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender distintas preferencias y necesidades.
