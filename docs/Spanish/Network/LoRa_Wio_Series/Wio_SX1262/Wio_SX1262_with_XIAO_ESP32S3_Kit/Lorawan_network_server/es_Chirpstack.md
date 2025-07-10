---
description: Chirpstack LNS connection based on Wio SX1262 with XIAO esp32s3 module 
title: Conecatarse a Chirpstack
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/51_1.png
slug: /es/wio_sx1262_xiao_esp32s3_LNS_Chirpstack
sidebar_position: 2
last_update:
  date: 05/20/2024
  author: Guillermo
---

# Kit Wio-SX1262 con XIAO ESP32S3 conectado a Chirpstack

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/51.png" alt="pir" width={900} height="auto" /></p>


## Visión General

LoRaWAN es un protocolo de red de baja potencia y gran alcance basado en la técnica LoRa. Conecta dispositivos de forma inalámbrica a Internet y gestiona la comunicación entre los dispositivos terminales (end-nodes) y las puertas de enlace (gateways) de red.

Siguiendo la guía de inicio para LoRa, configuramos el Wio-SX1262 con XIAO ESP32S3 como un gateway LoRa de un solo canal.

Esta página explica cómo configurar una red LoRaWAN basada en el kit Wio-SX1262 con XIAO ESP32S3 como gateway de un solo canal para el intercambio de datos. También se muestra cómo conectar el nodo sensor LoRa SenseCAP S210x al kit y transmitir los datos al servidor Chirpstack.

## Instalar Chirpstack localmente

Por favor, consulta estas [instrucciones](https://learn.semtech.com/mod/book/view.php?id=223&chapterid=266#:~:text=Enter%20the%20following%20to%20clone%20the%20ChirpStack%20Docker,Share%20it%20on%20any%20security%20popups%20you%20see.) para instalar Chirpstack localmente. 

1. Abre un navegador y visita http://localhost:8080 . 

Deberías ver la página de inicio de sesión de ChirpStack.

2. Inicia sesión con el usuario por defecto `admin` y contraseña `admin`.



## Agregar Perfil de Dispositivo

Agrega perfiles de dispositivo bajo Tenant:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/45.png" alt="pir" width={600} height="auto" /></p>

## Agregar Gateway LoRaWAN

Registra el gateway e ingresa el EUI del gateway:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/46.png" alt="pir" width={600} height="auto" /></p>

¡Agregado exitosamente!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/47.png" alt="pir" width={600} height="auto" /></p>


## Agregar Sensor LoRa SenseCAP

### Configurar el Sensor LoRa desde la app Sensecraft
Vamos a agregar un nodo sensor SenseCAP a TTN.

**Paso 1**. Descarga y abre la aplicación Sensecraft.

**Paso 2**. Mantén presionado el botón del sensor por 3 segundos. El LED parpadeará a una frecuencia de 1 segundo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/41.png" alt="pir" width={300} height="auto" /></p>

**Paso 3**. Haz clic en “Scan” para agregar un nuevo dispositivo y escanea el código QR del sensor.

**Paso 4**. Haz clic en "Advanced Configuration" y selecciona la plataforma "Other Platform".

**Paso 5**. Selecciona el plan de frecuencias correspondiente al gateway. Ya configuramos el gateway como EU868, así que también selecciona EU868 para el sensor.

**Paso 6**. El dispositivo utiliza OTAA para unirse a la red LoRaWAN por defecto. Anota el `device EUI`, `App EUI` y `APP key`.

### Agregar a Chirpstack
**Paso 1**. Crea una Aplicación

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/48.png" alt="pir" width={600} height="auto" /></p>

**Paso 2**. Agrega el dispositivo en la aplicación y copia el `Device EUI` y `AppKEY` en los campos correspondientes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/49.png" alt="pir" width={600} height="auto" /></p>

**Paso 3**. Verifica el estado del sensor

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/50.png" alt="pir" width={600} height="auto" /></p>

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte soporte y asegurarnos de que tu experiencia sea lo más fluida posible. Contamos con varios canales de comunicación para adaptarnos a tus necesidades y preferencias.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


