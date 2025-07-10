---
description: Getting Started with WM1302 Pi Hat for Raspberry Pi.
title: WM1302 Pi Hat para Raspberry Pi
keywords:
  - wio 
  - docusaurus
image: https://wiki.seeedstudio.com/wio_gps_board/
slug: /es/WM1302_Pi_HAT
last_update:
  date: 05/23/2025
  author: Guillermo
---

<!-- ![](https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/w/m/wm1302_pihat_preview-16_1.png) -->
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/w/m/wm1302_pihat_preview-16_1.png" alt="pir" width={600} height="auto" /></p>

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/WM1302-Pi-Hat-p-4897.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/WM1302-Pi-Hat-p-4897.html) 

# WM1302 Pi Hat para Raspberry Pi

## Introducción al Producto:

:::note
Recientemente hemos lanzado el [Módulo Gateway WM1302 LoRaWAN](https://wiki.seeedstudio.com/WM1302_module/) y la serie LoRa-E5 basada en el módulo LoRa-E5. Haz clic [aquí](https://www.seeedstudio.com/lora-c-755.html?product_list_stock=3) para conocer los nuevos miembros de la familia LoRa-E5, desde el [módulo Grove](https://wiki.seeedstudio.com/Grove_LoRa_E5_New_Version/), [mini placas de desarrollo](https://wiki.seeedstudio.com/LoRa_E5_mini/) hasta el [Kit de Desarrollo](https://wiki.seeedstudio.com/LoRa_E5_Dev_Board/). Para aprender más sobre cómo crear un nodo final LoRaWAN con STM32Cube MCU Package para la serie STM32WL (SDK), unirte y enviar datos a la red LoRaWAN, consulta las páginas wiki de las [mini placas de desarrollo](https://wiki.seeedstudio.com/LoRa_E5_mini/) y el [Kit de Desarrollo](https://wiki.seeedstudio.com/LoRa_E5_Dev_Board/).
:::

WM1302 Pi HAT es una placa de expansión diseñada específicamente para conectar el módulo Gateway WM1302 LoRaWAN basado en SX1302 a las versiones de Raspberry Pi hasta la Raspberry Pi 4B. También integra el chip de autenticación LoRaWAN y un módulo GPS.

El [módulo WM1302](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html) es una nueva generación de módulo gateway LoRaWAN con formato mini-PCIe. Basado en el chip baseband Semtech® SX1302 LoRaWAN®, WM1302 desbloquea una mayor capacidad para la transmisión inalámbrica de largo alcance en productos gateway. Ofrece mayor sensibilidad, menor consumo de energía y temperatura de operación más baja que los chips LoRa® SX1301 y SX1308 anteriores.

WM1302 Pi HAT soporta el formato mini-PCIe del módulo WM1302 y puede configurar automáticamente los 52 pines dorados estándar al conector GPIO de Raspberry Pi con un header compatible de 40 pines. Esto simplifica el proceso de desarrollo para que los usuarios integren el módulo con Raspberry Pi. WM1302 Pi HAT funciona como una placa de extensión y ayuda a añadir la funcionalidad del SX1302 en la Raspberry Pi, para soportar los protocolos LoRaWAN y LoRa para transmisión inalámbrica de largo alcance. El módulo GPS integrado también mejora la precisión del tiempo y la ubicación del módulo WM1302.

WM1302 Pi HAT, junto con el módulo Gateway WM1302 y Raspberry Pi, puede ayudar a construir gateways compactos y completos de comunicación inalámbrica LoRaWAN, ideales para agricultura inteligente, ciudades inteligentes y otros escenarios IoT.

## Características

- Formato estándar Pi Hat con header hembra de 40 pines  
- Compatible con Raspberry Pi 3 Model B+ y Raspberry Pi 4  
- Módulo GPS integrado  
- Chip de autenticación LoRaWAN integrado  

## Visión General del Hardware 

<!-- ![](https://files.seeedstudio.com/products/113100022/5371617183671_.pic_hd.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/113100022/5371617183671_.pic_hd.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/113100022/pi%20hat.png" alt="pir" width={600} height="auto" /></p>


## Aplicaciones

- Desarrollo de dispositivos/hotspots Gateway LoRaWAN  
- Desarrollo de aplicaciones de comunicación inalámbrica de largo alcance  
- Aprendizaje y experimentación basados en Raspberry Pi  
- Investigación y aprendizaje de aplicaciones LoRa y LoRaWAN  

## Specification

<table class="tg">
<thead>
  <tr>
    <th >Dimensiones</th>
    <th >56*65mm</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td >Peso</td>
    <td >0.501 g</td>
  </tr>
  <tr>
    <td>Voltaje Operativo</td>
    <td >5V</td>
  </tr>
  <tr>
    <td >Interfaz de alimentación</td>
    <td >Conector de 40 Pines o USB</td>
  </tr>
  <tr>
    <td >Pines GPIO Raspberry Pi</td>
    <td >Compatible con Raspberry Pi 4B / Raspberry Pi 3 A+/B/B+ / Raspberry Pi 2 B / Raspberry Pi A+/B+ / Raspberry Pi Zero/Zero W</td>
  </tr>
  <tr>
    <td >Conector PCIe</td>
    <td >Conector Mini-PCIe de 52 Pines</td>
  </tr>
  <tr>
    <td >GNSS</td>
    <td >Soporta GPS L1, GLONASS L1, BeiDou B1</td>
  </tr>
  <tr>
    <td >Batería</td>
    <td >No incluida</td>
  </tr>
</tbody>
</table>



<table class="tg">
<thead>
  <tr><th class="tg-f2tp" colspan="2">Lista de Componentes:</th></tr>
</thead>
<tbody>
  <tr>
    <td class="tg-uu1j" colspan="2">WM1302 Pi Hat *1</td>
  </tr>
  <tr>
    <td class="tg-uu1j" colspan="2">Tornillos APM2.5*6mm *8</td>
  </tr>
  <tr>
    <td class="tg-uu1j" colspan="2">Espárrago M2.5*11.0mm *4</td>
  </tr>
  <tr>
    <td class="tg-uu1j" colspan="2">Tornillo PM2.0*H6.0mm *2</td>
  </tr>
</tbody>
</table>

## Dimensiones

<!-- ![](https://files.seeedstudio.com/products/113100022/WM1302%20PiHat_Size-17.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/113100022/WM1302%20PiHat_Size-17.png" alt="pir" width={600} height="auto" /></p>

## Soporte Técnico y Discusión de Producto

Por favor, envía cualquier problema técnico a nuestro [foro](http://forum.seeedstudio.com/).

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
