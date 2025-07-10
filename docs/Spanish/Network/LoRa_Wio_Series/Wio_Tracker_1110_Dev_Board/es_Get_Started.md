---
description: Get Started with Wio Tracker 1110 
title: Configuración rápida del Wio Tracker 1110 
keywords:
- Tracker
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Get_Started_with_Wio-Trakcer_1110
sidebar_position: 2
last_update:
  date: 05/22/2025
  author: Guillermo
---

## Configuración rápida del Wio Tracker 1110 con firmware de fábrica

En este tutorial, guiaremos a los usuarios para configurar rápidamente el desarrollo Wio Tracker 1110 utilizando el firmware de fábrica, conectarlo a la nube de SenseCAP y verificar los datos transmitidos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/image.png" alt="pir" width={800} height="auto" /></p>

### Vincular la placa de desarrollo

Descarga la aplicación **SenseCAP Mate** desde la tienda de aplicaciones correspondiente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={500} height="auto" /></p>

:::tip Note
Al registrarte, asegúrate de seleccionar la versión **Global**.
:::


Haz click en `+` -> `Add Device`.

Escanea el código QR ubicado en la etiqueta de la placa para iniciar el proceso de vinculación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/bind-board.png" alt="pir" width={500} height="auto" /></p>

Nombra tu dispositivo y selecciona el `Grupo de Dispositivos` (opcional), luego haz clic en `Vincular a la cuenta`.<br/>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/bind-dev.png" alt="pir" width={300} height="auto" /></p>

### Configura la frecuencia y conéctate a la pasarela (gateway)

Regresa a la página de `Dispositivo`, entonces verás que la placa de desarrollo ya ha sido vinculada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/bind-done.png" alt="pir" width={300} height="auto" /></p>

Haz clic en `Configurar ahora`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/1.jpeg" alt="pir" width={300} height="auto" /></p>

Haz clic en `Listo, ir al siguiente paso`, que consiste en buscar el dispositivo.

:::info Note
El dispositivo debe estar encendido primero.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/2.jpeg" alt="pir" width={300} height="auto" /></p>

Busca el dispositivo mediante `Escanear`, y cuando encuentres un elemento en la lista con el mismo `código S/N` que tu propio dispositivo, haz clic para entrar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/3.jpeg" alt="pir" width={300} height="auto" /></p>

Ve a la página de `Configuración`, y elige la plataforma: ya sea `SenseCAP para The Things Network` o `SenseCAP para Helium`.

:::info Nota
También puedes elegir otras plataformas, pero en ese caso no podrás utilizar la plataforma SenseCAP.
:::


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/4.jpeg" alt="pir" width={300} height="auto" /></p>

<table align="center">
  <caption> <h2>Plataforma</h2> </caption>
  <tbody>
    <tr>
    <td><h4>Plataforma</h4></td>
    <td><h4>Descripción</h4></td>
    </tr>
    <tr>
      <td>SenseCAP para The Things Network</td>
    <td>Plataforma predeterminada.
Debe usarse con una pasarela SenseCAP. SenseCAP construye un servidor TTN propietario que permite utilizar los sensores directamente al emparejarlos con una pasarela SenseCAP. <br /> <br />
    <a href="https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html" target="_blank"><span>SenseCAP Outdoor Gateway</span></a><br />
    <a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html" target="_blank"><span>SenseCAP Indoor Gateway</span></a></td>
    </tr>
        <tr>
    <td>SenseCAP para Helium</td>
    <td>Cuando haya cobertura de la red Helium, los datos pueden subirse a través de Helium. Los dispositivos funcionan en una consola privada de Helium de SenseCAP. Los usuarios no necesitan crear dispositivos en la consola de Helium; funcionan directamente con la aplicación SenseCAP Mate y el portal. <br />

<a href="https://explorer.helium.com/" target="_blank"><span>Helium Coverage</span></a></td>
    </tr>
        <tr>
    <td>Helium</td>
    <td>Conecta el dispositivo a tu consola pública de Helium</td>
    </tr>
            <tr>
    <td>The Things Network</td>
    <td>Conecta el dispositivo a tu servidor TTN (TTS)</td>
    </tr>
            <tr>
    <td>Otra Plataforma</td>
    <td>Otro servidor de red LoRaWAN</td>
    </tr>
  </tbody></table>

Elige el `Plan de Frecuencia`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/5.jpeg" alt="pir" width={300} height="auto" /></p>

Ingresa el `Intervalo de Envío de Posición (en minutos)` y el `Intervalo de Envío de Sensor (en minutos)`.

| Parámetros                        | Descripción                                                                                          |
|----------------------------------|------------------------------------------------------------------------------------------------------|
| Intervalo de Envío de Posición (minutos) | Envío programado de información de ubicación.<br/>Valor predeterminado: 5 minutos.<br/>A mayor frecuencia, mayor consumo de energía. |
| Intervalo de Envío de Sensor (minutos)   | Envío programado de datos del sensor.<br/>Valor predeterminado: 5 minutos.<br/>A mayor frecuencia, mayor consumo de energía.         |


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/6.jpeg" alt="pir" width={300} height="auto" /></p>

Una vez que toda la información en Configuración se alinee con tus requisitos, puedes hacer clic en `Enviar` para transmitirla al **Tracker Wio 1110**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/7.jpeg" alt="pir" width={300} height="auto" /></p>

Ve a la página de `Medición`, haz clic en `Medir`, y obtendrás los valores de los sensores.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/8.jpeg" alt="pir" width={500} height="auto" /></p>


### Verifica los datos

Enciende la placa de desarrollo y asegúrate de que haya cobertura de red cercana. Cuando la placa se conecte correctamente a la red, aparecerá como `en línea` en la página de `Dispositivo`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/9.jpeg" alt="pir" width={300} height="auto" /></p>

Si tu zona tiene una señal deficiente, simplemente instala un gateway LoRaWAN; es tan fácil como configurar un router Wi-Fi. La belleza de LoRa radica en su flexibilidad y facilidad para expandir la red. Esta solución confiable también es rentable. Por ejemplo, la [Gateway LoRaWAN de Interior SenseCAP M2](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html) puede extender tu cobertura ¡hasta 10 km!

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTI1MQ_873855_RPfBjpKfW2xWddri_1693817031?w=680&h=446&type=image/png" alt="pir" width={600} height="auto" /></p>


:::tip
Por favor, coloca tu placa de desarrollo cerca de una ventana o en un lugar sin obstrucciones, para que haya una mejor señal GPS y la placa pueda obtener correctamente los datos de ubicación.
:::

Puedes verificar los datos de ubicación y del sensor en la aplicación SenseCAP Mate o en el Portal SenseCAP.

**Aplicación SenseCAP Mate**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/app-data.png" alt="pir" width={500} height="auto" /></p>

**Portal SenseCAP**

Si has creado una cuenta a través de la aplicación, puedes iniciar sesión directamente.  
Navega a la página de tu dispositivo y haz clic en `Datos` para consultarlos.

:::info
[Guía del Usuario del Portal SenseCAP](https://sensecap-docs.seeed.cc/quickstart.html)
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/por.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/portal-da.png" alt="pir" width={800} height="auto" /></p>

### Cómo subir datos de inmediato

1. Cuando se agita la placa de desarrollo y se generan vibraciones, se activa **el sensor acelerómetro de tres ejes**, lo que hace que se recopilen y suban datos inmediatamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/shake.GIF" alt="pir" width={800} height="auto" /></p>

Puedes ver la información en el monitor serial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/image-shake.png" alt="pir" width={800} height="auto" /></p>

La interfaz de la aplicación SenseCAP Mate mostrará paquetes de datos cuando el dispositivo se agite.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/shake-app.JPG" alt="pir" width={300} height="auto" /></p>

2. Presiona el `BOTÓN` una vez, y el dispositivo recopilará y subirá datos de inmediato.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/button.GIF" alt="pir" width={800} height="auto" /></p>

Puedes ver la información en el monitor serial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/image-button.png" alt="pir" width={800} height="auto" /></p>

La interfaz de la aplicación SenseCAP Mate mostrará señales SOS y paquetes de datos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/sos-app.JPG" alt="pir" width={300} height="auto" /></p>


### Añadir sensor Grove (opcional)


Además de los sensores integrados, las posibilidades son infinitas con la placa de desarrollo Wio Tracker 1110.  
En el firmware de fábrica, los siguientes sensores Grove también están permitidos para conectarse a esta placa y son reconocidos automáticamente.



<table align="center">
  <caption> <h2>Modulos Grove</h2> </caption>
  <tbody>
    <tr>
    <td><h4>Sensor</h4></td>
    <td><h4>Consigue uno ahora</h4></td>
    <td><h4>Sensor</h4></td>
    <td><h4>Consigue uno ahora</h4></td>
    </tr>
    <tr>
    <td>Sensor de sonido basado en el amplificador LM358</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Sound-Sensor-Based-on-LM358-amplifier-Arduino-Compatible.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/c_6.png" alt="" width={200} height="auto"/></a>
</div></td>
    <td>Sensor-DPS310 Barómetro de Alta Precisión</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html" target="_blank" rel="noopener"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove-high-precision-barometer-sensor-dps310-preview.jpg" alt="" width={200} height="auto"/></a>
</div></td>
</tr>
<tr>
    <td>Sensor de Cálidad de Aire(SGP41)</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html" target="_blank" rel="noopener"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-voc-and-eco2-gas-sensor_sgp41_-v1.0-45font.jpg" alt="" width={200} height="auto"/></a>
</div></td>
    <td>Sensor de luz solar-SI1151</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Sunlight-Sensor.html" target="_blank" rel="noopener"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-07bazaar885583_3.jpg" alt="" width={200} height="auto"/></a>
</div></td>
</tr>
<tr>
    <td>Sensor Ultrasónico de Distancia</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Ultrasonic-Distance-Sensor.html" target="_blank" rel="noopener"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove---ultrasonic-distance-sensor-preview_1.png" alt="" width={200} height="auto"/></a>
</div></td>
</tr>

  </tbody></table>

Conecta el sensor Grove al puerto Grove correspondiente en la placa de desarrollo Wio Tracker.

También puedes usar un [Hub Grove-I2C](https://www.seeedstudio.com/Grove-I2C-Hub.html) para conectar múltiples sensores I2C a la placa.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WM1110-A-Grove.jpg" alt="pir" width={800} height="auto" /></p>

## Flashear el Firmware 

* [Último Firmware](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio_tracker_app_release_sw_0.5_2024-06-06.uf2)

Haz doble clic en el botón `Reset`, debería aparecer un controlador llamado `WM1110_BOOT` en tu PC.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wm1110-boot.png" alt="pir" width={600} height="auto" /></p>

Arrastra el archivo `.uf2` al controlador. La descarga se ejecutará automáticamente y luego el controlador desaparecerá.


## API de SenseCAP

La API de SenseCAP permite a los usuarios gestionar dispositivos y datos IoT. Incluye 3 tipos de métodos API: protocolo HTTP, protocolo MQTT y protocolo Websocket.

* Con la API HTTP, los usuarios pueden gestionar dispositivos LoRa, obtener datos en crudo o datos históricos.
* Con la API MQTT, los usuarios pueden suscribirse a los datos de medición en tiempo real de los sensores mediante el protocolo MQTT.
* Con la API Websocket, los usuarios pueden obtener datos de medición en tiempo real de los sensores a través del protocolo Websocket.

Por favor, consulta la [Guía del Usuario de la API](https://sensecap-docs.seeed.cc/) para más detalles.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/api_page.png" alt="pir" width={800} height="auto" /></p>
