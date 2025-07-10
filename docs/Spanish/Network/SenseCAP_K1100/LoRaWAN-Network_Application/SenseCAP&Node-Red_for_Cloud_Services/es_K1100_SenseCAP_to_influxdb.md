---
description: SenseCAP & Node-RED to InfluxDB
title: Conexión de SenseCAP & Node-RED a InfluxDB
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/K1100_SenseCAP_to_influxdb
last_update:
  date: 06/13/2025
  author: Guillermo
---

# Conectando SenseCAP a InfluxDB vía Node-RED

**SenseCAP K1100 - El Kit de Prototipos de Sensores** representa el esfuerzo de Seeed Studio por concentrar la esencia de la comunicación LoRa® en productos con tecnología de inteligencia en el borde, facilitando al máximo el despliegue y dominio de aplicaciones LoRa® e IoT.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/banner.png" /></div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products)

## Actualizable a Sensores Industriales

Con el [controlador S2110 de SenseCAP](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), puedes convertir fácilmente los módulos Grove en sensores LoRaWAN®. Seeed no solo te ayuda en la fase de prototipado, sino que también te ofrece la posibilidad de escalar tu proyecto utilizando la serie SenseCAP de [sensores industriales robustos](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

La carcasa con protección IP66, configuración vía Bluetooth, compatibilidad con redes LoRaWAN® globales, batería integrada de 19 Ah y el soporte completo desde la APP convierten a la serie [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) en la mejor opción para aplicaciones industriales. Esta serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC y una estación meteorológica 8-en-1. Prueba el último modelo SenseCAP S210x para asegurar el éxito de tu próximo proyecto industrial.

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
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> Air Temp &amp; Humidity</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> Light</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> Air Temp &amp; Humidity &amp; CO2</strong></a></td>
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
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> Soil Moisture &amp; Temp</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> Soil Moisture &amp; Temp &amp; EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> LoRaWAN® Controller</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> 8-in-1 Weather Station</strong></a></td>
    </tr>
  </tbody></table>

## Acerca de InfluxDB

**InfluxDB** es una base de datos de series temporales de código abierto, centrada en lectura de alto rendimiento, escritura eficiente, almacenamiento optimizado y análisis en tiempo real de datos masivos. Además de protocolos nativos como HTTP y UDP, también es compatible con protocolos de comunicación de componentes como CollectD, Graphite, OpenTSDB y Prometheus. Es ampliamente utilizada en monitoreo DevOps, monitoreo IoT, análisis en tiempo real y otros escenarios.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/1.png" /></div>

Este capítulo continuará utilizando Node-RED, como se introdujo anteriormente, y facilitará la gestión del kit K1100 en InfluxDB mediante el uso de Node-RED.

Si aún no has instalado o no sabes qué es Node-RED, por favor consulta [Tutoriales de Node-RED y SenseCAP](https://wiki.seeedstudio.com/K1100_sensecap_node-red/).

## Crear Nodo MQTT

**Paso 1.** Iniciar Node-RED

Inicia Node-RED escribiendo el comando `node-red` en la terminal y abre un navegador ingresando la dirección **<http://localhost:1880>** en la barra de direcciones para acceder al editor de Node-RED.

**Paso 2.** Crear Nodo MQTT

Usamos el nodo **Network -> mqtt in** y configuramos MQTT en el formato que requiere la API de SenseCAP, como se indica en el [tutorial anterior](https://wiki.seeedstudio.com/K1100_sensecap_node-red/#mqtt-node).

- **Servidor**: `openstream.api.sensecap.seeed.cc`
- **Puerto**: `1883`
- **Protocolo**: `MQTT V3.1.1`
- **Client ID**: El formato es `org-<Organization ID>-<Random ID>`
  - `<Organization ID>`: tu ID de organización. Lo obtuviste en la sección [Obtener la API de SenseCAP](/K1100_sensecap_node-red#get-the-sensecap-api).
  - `<Random ID>`: usa números o letras minúsculas generados aleatoriamente.

- **Formato del Tópico**:

<table align="center">
  <tbody><tr>
      <td align="center">OrgID</td>
      <td align="center">Tu ID de organización. Se obtuvo en la sección *Obtener la API de SenseCAP*.</td>
    </tr>
    <tr>
      <td align="center">DevEUI</td>
      <td align="center">Identificación única del dispositivo sensor. Esta información se encuentra en la etiqueta detrás del Grove - Wio E5 y también en la consola de dispositivos de SenseCAP.</td>
    </tr>
    <tr>
      <td align="center">Channel</td>
      <td align="center">Interfaz física del dispositivo a la que está conectado el sensor. Para el kit K1100, el valor predeterminado es `1`.</td>
    </tr>
    <tr>
      <td align="center">Reserved</td>
      <td align="center">Campos reservados.</td>
    </tr>
    <tr>
      <td align="center">MeasurementID</td>
      <td align="center">ID del valor medido. Este ID se puede encontrar en la sección de *Measurement IDs* de la <a href="https://sensecap-docs.seeed.cc/sensor_types_list.html" target="_blank">documentación de SenseCAP</a></td>
    </tr>
  </tbody></table>

**Paso 3.** Validar nodos MQTT

Una vez configurado, haz clic en el botón **Deploy** en la esquina superior derecha para comprobar si la configuración fue exitosa.  
Si se completó correctamente, aparecerá el mensaje **Connected**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/1.png" /></div>

## Configurar InfluxDB

**Paso 1.** Regístrate o inicia sesión en InfluxDB

Si ya te has registrado en InfluxDB, inicia sesión en el [sitio web de InfluxDB](https://www.influxdata.com/).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/2.png" /></div>

Si aún no usas ni te has registrado en InfluxDB, completa tu registro e inicia sesión [aquí](https://cloud2.influxdata.com/signup).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/3.png" /></div>

:::tip
Al registrarte, puede aparecer una ventana solicitando que elijas un proveedor. Puedes elegir según tu preferencia o simplemente seleccionar uno al azar.
:::
   <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/4.png" /></div>

**Paso 2.** Obtener Token de API

Como se muestra a continuación, haz clic en **Bucket**.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_influxdb/5.png" /></div>

Luego haz clic en **CREATE BUCKET**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/6.png" /></div>

En la nueva ventana emergente, ingresa el nombre del bucket y selecciona el periodo de retención de datos gratuito: **30 días**.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_influxdb/7.png" /></div>

Después, haz clic en **API Tokens**.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/k1100_influxdb/8.png" /></div>

Ahora elige crear un **Custom API Token** (Token API personalizado).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/9.png" /></div>

Asigna permisos de **lectura** y **escritura** al bucket que acabas de crear, y luego haz clic en el botón **Create**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/10.png" /></div>

Una vez creado, copia el token de API al portapapeles y guárdalo en un lugar seguro. Lo utilizaremos más adelante.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/11.png" /></div>

:::note
Si cierras esta ventana sin copiar el token, no podrás recuperarlo más adelante.
:::

## Configurar Node-RED

**Paso 1.** Descargar paleta de InfluxDB

Haz clic en el menú superior derecho y selecciona **Settings** (Configuración).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/13.png" /></div>

Busca e instala **node-red-contrib-influxdb** en **Palettes -> Install**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/12.png" /></div>

Agrega el nodo **influx.batch** desde la barra de almacenamiento en la izquierda. Haz doble clic en él para entrar en la página de configuración, y luego haz clic en el botón de edición para editar el nodo **influx.batch**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/13.png" /></div>

**Paso 2.** Editar nodo **influx.batch**

- **Versión**: 2.0  
- **URL**: Obtenida desde **Settings** -> **Organization Profile**
    <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_influxdb/14.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/15.png" /></div>

- **TOKEN**: El token que generaste en la sección **Obtener Token de API**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/16.png" /></div>

Una vez completado, haz clic en el botón **Add** en la esquina superior derecha para volver a la página de propiedades del nodo **influx.batch**. En este punto, por favor completa tu **Organization** (por defecto es el correo electrónico con el que te registraste en InfluxDB) y el nombre del **Bucket** que creaste.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/20.png" /></div>

**Paso 3.** Configurar el nodo **function**

El envío de datos a InfluxDB requiere un formato de datos específico, por lo que es necesario añadir un nodo de función para procesar dicho formato.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/18.png" /></div>

Arrastra un nodo **function** desde la barra de funciones a la izquierda, haz doble clic en él para abrir la página de edición y luego copia el siguiente código en la sección **On Message**:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/17.png" /></div>

```javascript
{
    var payload = msg.payload;
    var topic = msg.topic;
    var strs = topic.split("/");
    var length = strs.length
    if (length >= 2) {
        var measurementId = strs[length - 1]
        var body = {}
        var value = payload.value
        if (measurementId == 4100) {
            body.co2 = value
            measurement = "co2"
        } else if (measurementId == 4103) {
            body.soilmoisture = value
            measurement = "soilmoisture"
        } else if (measurementId == 4150) {
            body.accelX = value
            measurement = "accelX"
        } else if (measurementId == 4151) {
            body.accelY = value
            measurement = "accelY"
        } else if (measurementId == 4152) {
            body.accelZ = value
            measurement = "accelZ"
        } else if (measurementId == 4192) {
            body.soundintensity = value
            measurement = "soundintensity"
        } else if (measurementId == 4193) {
            body.lightIntensity = value
            measurement = "lightIntensity"
        } else if (measurementId == 4195) {
            body.tvoc = value
            measurement = "tvoc"
        } else if (measurementId == 4097) {
            body.airtemperature = value
            measurement = "airtemperature"
        } else if (measurementId == 4098) {
            body.airhumidity = value
            measurement = "airhumidity"
        } else if (measurementId == 4175) {
            body.AIdetection_1 = value
            measurement = "AIdetection_1"
        } else if (measurementId == 4176) {
            body.AIdetection_2 = value
            measurement = "AIdetection_2"
        } else if (measurementId == 4177) {
            body.AIdetection_3 = value
            measurement = "AIdetection_3"
        } else if (measurementId == 4178) {
            body.AIdetection_4 = value
            measurement = "AIdetection_4"
        } else if (measurementId == 4179) {
            body.AIdetection_5 = value
            measurement = "AIdetection_5"
        } else if (measurementId == 4180) {
            body.AIdetection_6 = value
            measurement = "AIdetection_6"
        } else if (measurementId == 4181) {
            body.AIdetection_7 = value
            measurement = "AIdetection_7"
        } else if (measurementId == 4182) {
            body.AIdetection_8 = value
            measurement = "AIdetection_8"
        } else if (measurementId == 4183) {
            body.AIdetection_9 = value
            measurement = "AIdetection_9"
        } else if (measurementId == 4184) {
            body.AIdetection_10 = value
            measurement = "AIdetection_10"
        }
        msg.payload = [{
            measurement: measurement,
            fields: body,
            tags: {
                device: "SenseCAP K1100"
            },
            timestamp: new Date()
        }];
    }
    return msg;
}
```

Luego conectamos todos los nodos y hacemos clic en el botón **Deploy**.  
Si todo está configurado correctamente, verás que el nodo **mqtt in** muestra el estado **connected**.

Si deseas ver la información de registro de los datos, puedes añadir un nodo **debug** después del nodo **function**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/17.png" /></div>

Una vez que el Wio Terminal se enciende y comienza a enviar datos al servidor SenseCAP PaaS, podremos verificar los datos desde el log de depuración de Node-RED.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/21.png" /></div>

## Configurar paneles visuales en InfluxDB

Para obtener una visualización más clara de los datos del sensor, podemos crear gráficos de línea.

Regresa a **InfluxDB Cloud** y haz clic en **CREATE DASHBOARD**, luego en **ADD CELL**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/19.png" /></div>

Si SenseCAP ya ha comenzado a enviar mensajes de datos a InfluxDB, entonces podrás ver la etiqueta del sensor en esta página. Para mostrar el contenido de los datos, simplemente marca la casilla correspondiente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/22.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/23.png" /></div>

## Solución de Problemas

> **P1: ¿Por qué no puedo encontrar la Paleta en Node-RED?**

**R:** Si no puedes encontrar la opción **Palette** en la configuración, revisa el terminal para ver si aparece algún mensaje de error al iniciar Node-RED.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/11.png" /></div>

El escenario más común es que la versión de **npm** sea demasiado antigua para iniciar el editor de paletas.

Si tu situación es como se describe arriba, ejecuta **PowerShell como administrador** e ingresa el siguiente comando para actualizar npm:

```sh
npm install -g npm
```

Luego simplemente reinicia Node-RED.

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte distintos tipos de soporte y asegurar que tu experiencia con nuestros dispositivos sea lo más fluida posible.  
Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
