---
description: Soil moisture monitor alarm system
title: Sistema de alarma para monitoreo de humedad del suelo
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/K1111-Quick-Start-Guide
last_update:
  date: 06/10/2025
  author: Guillermo
---
# Sistema de alarma para monitoreo de humedad del suelo

En esta wiki, te mostraremos cómo utilizar el Wio Terminal para conectar el Grove - Wio-E5 y el Grove - Sensor de Humedad del Suelo, incluidos en el kit, y enlazarlos con las plataformas Helium y Azure IoT Central, para construir un monitor de macetas en tiempo real y un recordatorio de riego, como una introducción al Internet de las Cosas.

## Actualizable a Sensores Industriales

Con el [controlador SenseCAP S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), puedes convertir fácilmente los módulos Grove en sensores LoRaWAN®. Seeed no solo te ayuda con el prototipado, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie de robustos [sensores industriales SenseCAP](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

La carcasa con certificación IP66, la configuración vía Bluetooth, la compatibilidad con redes globales LoRaWAN®, la batería integrada de 19 Ah y el sólido soporte mediante la app convierten a la [serie SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) en la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad lumínica, CO₂, EC y una estación meteorológica 8-en-1. Prueba la última generación de SenseCAP S210x para tu próximo proyecto industrial exitoso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody><tr><td colSpan={4} bgcolor="#0e3c49" align="center"><font color="white" size={4}><strong>SenseCAP Industrial Sensor</strong></font></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> Data Logger</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> Temp de Aire &amp; Humedad</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> Light</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> Temp de Aire &amp; Humedad &amp; CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> Humedad de Suelo &amp; Temp</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> Humedad de Suelo &amp; Temp &amp; EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> LoRaWAN® Controller</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> Estación Meteorológica 8-en-1</strong></a></td>
    </tr>
  </tbody></table>

## Requisitos Previos

Antes de comenzar, debemos cumplir con los siguientes requisitos:

### Materiales Requeridos

<table align="center">
  <tbody><tr>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-GROVE.jpeg" /></div></td>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/products/113020091/%E5%AE%98%E7%BD%91/11302009_Preview-34.png" /></div></td>
      <td align="center"><div align="center"><img width={310} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/images/Moisture_sensor_.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal</td>
      <td align="center">Grove - Wio-E5</td>
      <td align="center">Sensor de Humedad del Suelo Grove</td>
    </tr>
  </tbody></table>

**Software**

<div>
  - <a href="https://www.arduino.cc/" target="_blank"><span>Arduino</span></a>
</div>

Subiremos el programa al Wio Terminal mediante Arduino. Si es tu primera vez usando Arduino con Wio Terminal, te recomendamos que consultes la guía 
  <a href="https://wiki.seeedstudio.com/Preliminary-Preparation/" target="_blank"><span>Primeros Pasos con Wio Terminal</span></a>.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png" /></div>

**Otros**

- Maceta

En esta demostración inicial estamos usando un sensor de humedad del suelo. Por lo tanto, una maceta con tierra lo suficientemente profunda será ideal.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit32.png" /></div>

### Registro en Helium para Conectar

<a href="https://console.helium.com/" target="_blank"><span>Helium</span> </a>es una red global y distribuida de Hotspots que crean cobertura inalámbrica pública de largo alcance para dispositivos IoT habilitados con LoRaWAN®.

Nos permite enviar cierta cantidad de datos mediante LoRa® de forma gratuita, y lo conectaremos al Wio Terminal. Toda la información necesaria para conectar el Wio Terminal se encuentra **en la primera página** tras registrarse:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/125.png" /></div>

:::note
El dispositivo suele tardar casi 20 minutos en estar listo. Se recomienda añadirlo al inicio del proceso.
:::

### Registro en Azure IoT para Notificaciones

<a href="https://portal.azure.com/" target="_blank"><span>Azure IoT Central</span> </a>
 es un servicio administrado alojado en la nube que actúa como un centro de mensajes central para la comunicación entre una aplicación IoT y sus dispositivos conectados.

Nos ayuda a gestionar los datos LoRa® y realizar algunas acciones de forma gratuita durante la primera semana. Lo integraremos con Helium para **monitorear datos** y configurar un **recordatorio automático de riego de maceta**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit30.png" /></div>

## Introducción al Monitor de Humedad del Suelo

En esta demostración rápida solo requerimos una conexión LoRa® sencilla con el Sensor de Humedad del Suelo Grove, con el propósito de monitorear automáticamente la humedad del suelo y generar alertas.

### Inicio del Equipamiento

- **Paso 1**. Usa un cable Grove para conectar todo, colocando el Sensor de Humedad del Suelo Grove a la **derecha** del Wio Terminal y el Grove - Wio-E5 a la **izquierda**.

:::note
La posición donde se conecta el Grove - Wio-E5 afectará el código que se suba.
:::

- **Paso 2**. Conecta una PC y el Wio Terminal mediante un cable Tipo-C.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit33.jpg" /></div>

### Conectar el Wio Terminal con Helium

- **Paso 1**. Abre la página de <a href="https://console.helium.com/" target="_blank"><span>Helium</span></a>
 en la PC y haz clic en "Devices" en la columna izquierda. **Agrega un nuevo dispositivo**, luego revisa la siguiente información (ejemplo):

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit3a.png" /></div>

- **Paso 2**. Descarga el siguiente código Arduino y ábrelo con el IDE de Arduino.

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Soil-moisture-send-data" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Soil-moisture-send-data" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></a></div><p />
</div>

- **Paso 3**. Busca la línea específica del código y completa con la información de conexión de Helium que obtuvimos, donde debemos saber que **solo se deben cambiar las letras y números**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit4a.png" /></div>

- **Paso 4**. Selecciona la placa (Board) y el puerto correctos. Podemos proceder a subir el código haciendo clic en el botón en la esquina superior izquierda.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit3.png" /></div>

- **Paso 5**. Abre el "Monitor Serial" en la parte superior derecha del IDE de Arduino, y podremos ver que la conexión se ha realizado y que los datos han sido enviados.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit5a.png" /></div>

- **Paso 6**. Regresa al sitio web de Helium y revisa la sección "Devices". Al final de la página podemos ver que efectivamente se han recibido algunos datos.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/7.jpg" /></div>

Debido a la naturaleza de la comunicación LoRa®, la presentación de los datos aparece como un arreglo de números y letras que puede resultar confuso. Por lo tanto, necesitamos decodificarlo para obtener la información real.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/172.png" /></div>

### Datos Recibidos Decodificados en Helium

- **Paso 1**. Haz clic en "Function" en la columna izquierda de la página y añade una función personalizada.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/184.png" /></div>

- **Paso 2**. Copia el siguiente código y añádelo en el campo "CUSTOM SCRIPT", luego guárdalo.

```cpp
function Decoder(bytes, port) {
  var decoded = {};
  if (port == 8) {
    decoded.soil = bytes[0]<<8 | bytes[1];
  }
  return decoded;
}
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit8.png" /></div>

- **Paso 3**. Haz clic en **"Flows"** en la columna izquierda y arrastra los bloques **"Devices"** y **"Functions"** al área de trabajo. Enlázalos como se muestra a continuación:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit9.png" /></div>

Esto nos ayuda a traducir nuestros datos para que sean legibles.

- **Paso 4 (opcional)**. Regresa a la página de **"Function"** y podemos 
<a href="https://wiki.seeedstudio.com/Connecting-to-Helium/#upload-code-send-data-to-helium" target="_blank"><span>obtener los datos hexadecimales de entrada</span></a> del dispositivo. 
Selecciona el puerto como **'8'** y haz clic en el botón **"RUN"**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/185.png" /></div>

Ahora podemos leer nuestros datos, pero el proceso es un poco complicado y no muy fácil de usar.  
**¿Qué podemos hacer para que los datos se presenten de forma continua?**

### Integrar la Plataforma Azure IoT

Podemos integrar otra plataforma, **Azure IoT**, para presentar y gestionar nuestros datos,  
e incluso realizar algunas acciones con ellos.

- **Paso 1**. Abre primero la página de **Helium**, haz clic en **"Integrations"** en la columna izquierda y selecciona **"Azure IoT Central"**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit15.png" /></div>

- **Paso 2**. Crea una nueva aplicación en <a href="https://apps.azureiotcentral.com/" target="_blank"><span>Azure IoT Central</span></a>. Luego integra **Azure IoT Central** en Helium llenando la información requerida como se muestra a continuación:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit16.png" /></div>

- **Paso 3**. Haz clic en **"Flows"** en la columna izquierda de la página,  
arrastra el bloque de **Azure IoT Central** y conéctalo después de la función personalizada. El orden debe ser como el siguiente:

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit17.png" /></div>

- **Paso 4**. Ve a la página de **Azure IoT Central** y selecciona **"Devices"** en el menú lateral. Podremos ver un dispositivo con un nombre compuesto por números aleatorios que aparece automáticamente.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit18.png" /></div>

- **Paso 5**. Selecciona el dispositivo y revisa la información de **"Raw data"** como se muestra en la siguiente figura. La información contiene todos los datos provenientes de Helium, incluyendo los ya decodificados:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit19.png" /></div>

Ahora ya tenemos nuestros datos mostrándose de forma continua.  
Pero, ¿es posible mostrarlos en un **gráfico** y quizás realizar algunas **acciones automatizadas** con ellos?

### Funciones Avanzadas en Azure IoT Central

Podemos gestionar todos los datos provenientes de Helium y elegir los que nos interesen  
para construir una **alerta automática por correo electrónico** basada en dichos datos.

- **Paso 1**. Haz clic en **"Unformatted data"** en la página de **"Devices"** y crea una plantilla automática de dispositivo.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit20.png" /></div>

- **Paso 2**. Ve a **"Device template"**, donde podremos ver que la plantilla incluye y separa los datos del mismo tipo, almacenándolos en bloques individuales.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit21.png" /></div>

- **Paso 3**. Selecciona **"Overview"** y podremos ver que se han creado automáticamente algunos gráficos que muestran el valor de los datos.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit21a.png" /></div>

Modifica el bloque que muestra los datos de humedad del suelo que queremos visualizar y **renombra el gráfico**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit22.png" /></div>

Recuerda hacer clic en **"Save"** y luego en **"Publish"** para guardar la plantilla una vez finalizada:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit23.png" /></div>

- **Paso 4**. Ve a **"Rules"** en el menú lateral y crea una nueva regla.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit24.png" /></div>

- **Paso 5**. Llena la información necesaria para crear una **alerta automática por correo electrónico**:

Selecciona la **plantilla del dispositivo** (usualmente es la predeterminada):

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit25.png" /></div>

Establece el tipo de dato y el **valor umbral** que activará la alerta:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit11.png" /></div>

Introduce el **correo electrónico registrado** en Azure IoT Central y el mensaje que deseas enviar.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit12.png" /></div>

**Resultado**

- Regresa a la pestaña **"Devices"** y selecciona el dispositivo. Podrás ver los datos presentados en un gráfico (sketch).

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit31.png" /></div>

- Mientras tanto, si el valor establecido alcanza el umbral, se enviarán de forma continua los **correos electrónicos automáticos** configurados anteriormente.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit26.png" /></div>

Contenido del correo:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit27.png" /></div>

¡Recuerda regar la maceta!

¡Gracias!

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes formas de soporte para que tu experiencia con nuestros dispositivos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Upgradable to Industrial Sensors

With the SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) and [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), you can easily turn the Grove into a LoRaWAN® sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN® network, built-in 19 Ah battery, and powerful support from APP make the [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>

## Declaración

- La marca LoRa® es una marca registrada de Semtech Corporation o sus subsidiarias.  
- LoRaWAN® es una marca utilizada bajo licencia de la LoRa Alliance®.

