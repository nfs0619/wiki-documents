---
description: Conexión TTN LNS basada en Wio SX1262 con módulo XIAO esp32s3
title: Conectarse a TTN
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/40.png
slug: /es/wio_sx1262_xiao_esp32s3_LNS_TTN
sidebar_position: 1
last_update:
  date: 05/20/2025
  author: Guillermo
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/40.png" alt="pir" width={900} height="auto" /></p>

## Descripción general

LoRaWAN es un protocolo de red de baja potencia y gran alcance basado en la técnica LoRa. Conecta dispositivos de forma inalámbrica a Internet y gestiona la comunicación entre dispositivos finales y gateways de red.

Siguiendo la guía de inicio para LoRa, configuramos el Wio-SX1262 con el XIAO ESP32S3 como un gateway LoRa de un solo canal.

Esta página explica cómo configurar una red LoRaWAN usando el kit Wio-SX1262 con XIAO ESP32S3 como gateway de un solo canal para intercambiar datos con TTN. También muestra cómo conectar el nodo sensor LoRa SenseCAP S210x al kit y transmitir datos al TTN (The Things Network).


## Agregar Gateway LoRaWAN

Crea una cuenta en TTN: https://www.thethingsnetwork.org/.

Si ya tienes una cuenta, visita directamente: https://eu1.cloud.thethings.network/.

Inicia sesión y registra un nuevo gateway.

**Paso 1**. Registra el gateway.

**Paso 2**. Rellena la información correcta del `EUI del gateway`, `ID del gateway` y el `plan de frecuencias`.

**Paso 3**. Reinicia tu módulo gateway y espera aproximadamente 2 minutos. Luego, podrás verificar que el estado del gateway aparezca como conectado.

<div class="table-center">
<iframe width="700" height="600" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/video.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="false"> </iframe>
</div>

## Crear una Aplicación

Agrega una nueva aplicación en TTN.

<div class="table-center">
<iframe width="700" height="600" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/video1.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="false"> </iframe>
</div>

## Agregar Sensor LoRa SenseCAP

### Configurar el sensor LoRa mediante la app SenseCraft
Vamos a agregar un nodo sensor SenseCAP a TTN.

**Paso 1**. Descarga y abre la aplicación SenseCraft.

**Paso 2**. Presiona el botón del sensor y mantenlo pulsado por 3 segundos; el LED parpadeará con una frecuencia de 1s.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/41.png" alt="pir" width={300} height="auto" /></p>

**Paso 3**. Haz clic en “Scan” para agregar un nuevo dispositivo y escanea el código QR del sensor.

**Paso 4**. Haz clic en "Configuración Avanzada" y selecciona la plataforma "The Things Network".

**Paso 5**. Selecciona el Plan de Frecuencia consistente con el del gateway. En este caso, ya configuramos el gateway como EU868, así que seleccionamos también EU868 para el sensor.

**Paso 6**. El dispositivo utiliza OTAA para unirse a la red LoRaWAN por defecto. Anota el `Device EUI`, `App EUI` y `App Key`.

Puedes seguir estas [instrucciones detalladas](https://files.seeedstudio.com/products/SenseCAP/S210X/How%20to%20Connect%20SenseCAP%20S210X%20to%20The%20Things%20Network.pdf) Para conectar el sensor SenseCAP a la red de The Things.

### Registro en TTN
Registra un dispositivo final.

**Paso 1**. Selecciona el tipo de dispositivo final y completa el JoinEUI (AppEUI obtenido desde SenseCraft). Luego haz clic en *Confirmar*.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/42.png" alt="pir" width={600} height="auto" /></p>

**Paso 2**. Ingresa el DevEUI y el AppKey.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/43.png" alt="pir" width={600} height="auto" /></p>

**Paso 3**. Verifica que la información ingresada sea correcta y haz clic en "Registrar dispositivo final". Los datos del sensor deberían aparecer en el panel de control.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/44.png" alt="pir" width={600} height="auto" /></p>

## Recursos

* [The Things Network](https://eu1.cloud.thethings.network/)
* [Instrucciones para conectar sensores SenseCAP a TTN](https://files.seeedstudio.com/products/SenseCAP/S210X/How%20to%20Connect%20SenseCAP%20S210X%20to%20The%20Things%20Network.pdf)

## Soporte técnico y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte el soporte necesario y garantizar que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a tus preferencias y necesidades.


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


