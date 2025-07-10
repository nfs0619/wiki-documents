---
description: SenseCAP Solar Node for Meshtastic & LoRa
title:  Nodo Solar SenseCAP (Solar Node)
keywords:
- Meshtastic
- Solar
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.webp
slug: /es/meshtastic_solar_node
sidebar_position: 1
last_update:
  date: 05/29/2025
  author: Guillermo
---



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.png" alt="pir" width={800} height="auto" /></p>

Es un nodo o repetidor de comunicaciones solar económico basado en Meshtastic, que integra el controlador principal XIAO nRF52840 Plus y el módulo LoRa Wio-SX1262.  
Está diseñado específicamente para zonas sin cobertura de red. Soporta comunicación de largo alcance, posicionamiento preciso y operación de bajo consumo.  
Es ideal para ampliar la cobertura de red en áreas exteriores.

## Comparación de versiones

El nodo solar está disponible en dos variantes:  
[SenseCAP Solar Node P1](https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-for-Meshtastic-LoRa-p-6425.html) y  
[SenseCAP Solar Node P1-Pro](https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshtastic-LoRa-p-6412.html).

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-114993633-1_1.jpeg" alt="pir" width={800} height="auto" /></p>

## Descripción general

### Características

* Integra un panel solar de 5W y admite baterías externas (que deben ser proporcionadas por el usuario).
* El dispositivo viene con el firmware Meshtastic preinstalado desde fábrica. Se integra perfectamente en el ecosistema Meshtastic.
* Compatible con el ecosistema Grove, y admite conexión plug-and-play de sensores como sensores de temperatura, humedad, luz, etc.
* Apto para uso prolongado en exteriores.
* Admite transmisión de 8 a 9 KM en áreas abiertas. Puede funcionar como nodo o repetidor exterior, ampliando fácilmente la red Mesh y mejorando la cobertura.

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-114993633-3.png" alt="pir" width={800} height="auto" /></p>

### Especificaciones

<table>
  <tr>
    <th><b>Controlador principal</b></th>
    <th>
      <a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html" target="_blank">XIAO nRF52840 Plus</a><br />
      (Nordic nRF52840, procesador ARM® Cortex®-M4 de 32 bits con FPU, 64 MHz, 256KB RAM, 1MB Flash, 2MB Flash integrada)
    </th>
  </tr>
  <tr>
    <td><b>Módulo LoRa</b></td>
    <td>
      <a href="https://www.seeedstudio.com/Wio-SX1262-Wireless-Module-p-5981.html" target="_blank">Wio-SX1262 Module</a><br />
      (Semtech SX1262, TXOP=22dBm@862-930MHz)
    </td>
  </tr>
  <tr>
    <td><b>Módulo GPS (solo en versión P1-Pro)</b></td>
    <td>
      <a href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">XIAO L76K</a><br />
      (Soporta GPS/GLONASS/Galileo)
    </td>
  </tr>
  <tr>
    <td rowSpan="3"><b>Antena</b></td>
    <td>
      <p>LoRa:</p>
      <p>Tipo: Goma en forma de vara</p>
      <p>Rango de Frecuencias: 868-915MHz</p>
      <p>Ganancia: 2dBi</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>GNSS:</p>
      <p>GPS L1 C/A: 1575.42MHz</p>
      <p>GLONASS L1: 1602MHz</p>
      <p>BeiDou B1: 1561.098MHz</p>
    </td>
  </tr>
  <tr>
    <td>Bluetooth 5.0</td>
  </tr>
  <tr>
    <td><b>Panel Solar</b></td>
    <td>5W</td>
  </tr>
  <tr>
    <td rowSpan="2"><b>Interfaz</b></td>
    <td>Grove *1: IIC/GPIO/UART</td>
  </tr>
  <tr>
    <td>USB-C debugging</td>
  </tr>
  <tr>
    <td rowSpan="3"><b>Botones</b></td>
    <td>Encendido/Apagado</td>
  </tr>
  <tr>
    <td>Reset</td>
  </tr>
  <tr>
    <td>Definido por el usuario</td>
  </tr>
  <tr>
    <td rowSpan="4"><b>LED</b></td>
    <td>Indicadores de carga *2</td>
  </tr>
  <tr>
    <td>Indicador de estado del panel solar *1</td>
  </tr>
  <tr>
    <td>LED de latido Mesh *1</td>
  </tr>
  <tr>
    <td>Definido por el usuario *1</td>
  </tr>
  <tr>
    <td><b>Alimentación</b></td>
    <td>Tipo-C: 5V 1A</td>
  </tr>
  <tr>
    <td></td>
    <td>Suministro de energía solar: 5V 1A</td>
  </tr>
  <tr>
    <td><b>Resistencia al agua</b></td>
    <td>IPX5</td>
  </tr>
  <tr>
    <td><b>Batería(para versión P1-Pro)</b></td>
    <td>
      <p>- 4 baterías de litio 18650 (3350mAh cada una)</p>
      <p>- Soporta carga Tipo-C y solar.</p>
      <p>- Temperatura de descarga: -40～60°C</p>
      <p>- Temperatura de carga: 0-50°C</p>
    </td>
  </tr>
  <tr>
    <td><b>Certificación</b></td>
    <td>FCC、CE</td>
  </tr>
  <tr>
    <td><b>Dimensiones</b></td>
    <td>191.2 x 201.2 x 42.1 mm</td>
  </tr>
</table>


### Botones

| Acción del botón | Descripción |
|------------------|-------------|
| Presionar 3 segundos | Encender |
| Presionar dos veces | Actualizar información del nodo/ubicación |
| Presionar tres veces | Encender/apagar el GPS |
| Presionar 5 segundos | Apagar |


### Visión General del Hardware

**Items Interactivos**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/interactive.png" alt="pir" width={800} height="auto" /></p>

**Accesorios**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/accessory.png" alt="pir" width={800} height="auto" /></p>

**Diagrama**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar_node_diagram.png" alt="pir" width={800} height="auto" /></p>

## Soporte Técnico y Discusión de Producto

**¡Necesitas ayuda con tu Wio-WM1110 Dev Kit? ¡Estamos aquí para ayudarte!**

Por favor, envía cualquier problema técnico a nuestro [foro](http://forum.seeedstudio.com/).

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender distintas preferencias y necesidades.