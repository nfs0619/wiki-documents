---
description: SenseCAP & Node-RED to Datacake
title: Consexión de SenseCAP & Node-RED a Datacake
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/K1100_SenseCAP_to_datacake
last_update:
  date: 06/12/2025
  author: shuxu hu
---
# Conectando SenseCAP a Datacake via Node-RED

**SenseCAP K1100 - The Sensor Prototype Kit** es la propuesta de Seeed Studio que concentra la esencia de la comunicación LoRa® junto con tecnología e inteligencia en el borde (edge intelligence), facilitando el despliegue y control de aplicaciones IoT y LoRa® de manera sencilla y eficiente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/banner.png" /></div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products)

## Actualizable a Sensores Industriales

Con el controlador SenseCAP [S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el registrador de datos [S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con el prototipado, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de robustos [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

La carcasa IP66, configuración vía Bluetooth, compatibilidad con la red global LoRaWAN®, batería incorporada de 19 Ah, y el potente soporte desde la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, CE y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

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

## Datacake

Datacake es una plataforma IoT de propósito múltiple y bajo código que no requiere habilidades de programación y demanda muy poco tiempo para crear aplicaciones IoT personalizadas.

El contenido de este capítulo continuará usando Node-RED, presentado anteriormente, y facilitará la gestión del kit K1100 en Datacake mediante el uso de Node-RED.

Si no has instalado o no sabes qué es Node-RED, consulta por favor [Tutoriales Node-RED & SenseCAP](https://wiki.seeedstudio.com/K1100_sensecap_node-red/).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/1.png" alt="pir" width={600} height="auto" /></p>

## Crear Nodo MQTT

**Paso 1.** Iniciar Node-RED

Inicia Node-RED escribiendo el comando `node-red` en la terminal, abre un navegador e ingresa la dirección **<http://localhost:1880>** en la barra de direcciones para acceder al editor de Node-RED.

**Paso 2.** Crear Nodo MQTT

Usamos el nodo **Network -> mqtt in** y configuramos mqtt con el formato de la API SenseCAP según lo solicitado en el [tutorial anterior](https://wiki.seeedstudio.com/K1100_sensecap_node-red/#mqtt-node).

- Servidor: openstream.api.sensecap.seeed.cc  
- Puerto: 1883  
- Protocolo: MQTT V3.1.1  
- Client ID: El formato es `org-<Organization ID>-<Random ID>`  
  - `<Organization ID>` Tu ID de organización. Lo obtuvimos en [Obtener la API SenseCAP](/K1100_sensecap_node-red#get-the-sensecap-api).  
  - `<Random ID>` usa tus propios números o letras minúsculas generados aleatoriamente.

- Formato del Tema (Topic): `/device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>`

<table align="center">
  <tbody><tr>
      <td align="center">OrgID</td>
      <td align="center">Tu ID de organización. Lo obtuvimos en Obtener la API SenseCAP.</td>
    </tr>
    <tr>
      <td align="center">DevEUI</td>
      <td align="center">Identificación única del dispositivo sensor. Esta información se encuentra en la etiqueta en la parte trasera del Grove - Wio E5, así como en la consola de dispositivos SenseCAP.</td>
    </tr>
    <tr>
      <td align="center">Channel</td>
      <td align="center">Interfaz física en el dispositivo a la que está conectado el sensor. Para el kit K1100, el valor predeterminado aquí es 1.</td>
    </tr>
    <tr>
      <td align="center">Reserved</td>
      <td align="center">Campos reservados.</td>
    </tr>
    <tr>
      <td align="center">MeasurementID</td>
      <td align="center">ID del valor medido. Este ID puede encontrarse en la sección Measurement IDs de la <a href="https://sensecap-docs.seeed.cc/sensor_types_list.html" target="_blank">docuemntación de SenseCAP</a></td>
    </tr>
  </tbody></table>

**Paso 3.** Validar nodos MQTT

Una vez configurados, haz clic en el botón **Deploy** en la esquina superior derecha para verificar si la configuración fue exitosa. Si está correctamente configurado, aparecerá la palabra **Connected**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/1.png" /></div>

## Configurar Datacake

**Paso 1.** Registrarse o iniciar sesión en Datacake

Si ya estás registrado en Datacake, por favor inicia sesión en el [sitio web de Datacake](https://datacake.co/).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/3.png" /></div>

Si no estás registrado en Datacake, completa tu registro e inicia sesión [aquí](https://app.datacake.de/signup).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/2.png" /></div>

**Paso 2.** Nuevo espacio de trabajo

Una vez dentro de Datacake, haz clic en tu nombre de usuario en la esquina superior izquierda y selecciona **Add Workspace**. Luego, elige un nombre para tu espacio de trabajo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/8.png" /></div>

**Paso 3.** Nuevo dispositivo

Después de entrar al espacio de trabajo recién creado, crea un nuevo dispositivo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/9.png" /></div>

Selecciona **API**.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/4.png" /></div>

Selecciona **New Product** y ponle un nombre al producto.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/5.png" /></div>

En esta sección, elige la opción gratuita para completar.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/7.png" /></div>

**Paso 4.** Configurar el dispositivo

Haz clic en el dispositivo nuevo que acabas de crear y selecciona **Configuration**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/10.png" /></div>

Ubica la sección "Fields" y haz clic en **Add Field**. Luego ingresa el nombre del dato que quieres gestionar en Datacake.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/11.png" /></div>

:::note
 Ten en cuenta que los campos IDENTIFIER están en mayúsculas, y en el nodo función de Node-RED que se configura más adelante, el contenido que se pasa también debe estar en mayúsculas.
:::

**Paso 5.** Obtener el token API

Haz clic en tu nombre de usuario en la esquina superior izquierda y selecciona **Edit Profile**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/12.png" /></div>

Luego guarda el **token API** que aparece en la API, el cual usaremos en Node-RED en un momento.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/13.png" /></div>

## Configurar Node-RED

**Paso 1.** Descargar los Palettes de Datacake

Haz clic en el menú de la esquina superior derecha y selecciona **Settings**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/13.png" /></div>

Busca e instala **node-red-contrib-datacake** en la pestaña **Palettes -> Install**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/14.png" /></div>

Agrega el nodo **datacake - out** desde la barra de almacenamiento a la izquierda, haz doble clic para entrar a la página de configuración, luego haz clic en el botón editar para configurar el nodo **datacake - out**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/15.png" /></div>

**Paso 2.** Editar el nodo **datacake - out**

Llena el campo **API Token** con el token API que obtuvimos en la configuración previa de Datacake. Luego, solo haz clic en el botón **Add** en la esquina superior derecha.

Después selecciona el nombre del workspace que creaste anteriormente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/16.png" /></div>

El dispositivo se actualizará automáticamente al nuevo dispositivo creado y el menú desplegable de campos mostrará el nuevo campo que creaste. Si no quieres asignar un campo aquí, también puedes modificar el fieldName del payload para configurar el campo vía código.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/17.png" /></div>

**Paso 3.** Configurar el nodo función

El reporte de datos a Datacake debe seguir un formato específico, por lo que es necesario agregar un nodo función para procesar el formato de datos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/18.png" /></div>

Arrastra el nodo función desde la barra de funciones a la izquierda, haz doble clic para entrar a la página de edición y luego copia el código en On Message.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/17.png" /></div>

```javascript
{
    var payload = msg.payload;
    var topic = msg.topic;
    var strs = topic.split("/");
    var length = strs.length
    if (length >= 2) {
        var measurementId = strs[length - 1]
        msg.payload = payload.value
        if (measurementId == 4150) {
            msg.fieldName = "ACCELX"
        } else if (measurementId == 4151) {
            msg.fieldName = "ACCELY"
        } else if (measurementId == 4152) {
            msg.fieldName = "ACCELZ"
        } else if (measurementId == 4192) {
            msg.fieldName = "VOLUME"
        } else if (measurementId == 4193) {
            msg.fieldName = "LIGHTINTENSITY"
        } else if (measurementId == 4103) {
            msg.fieldName = "SOILMOISTURE"
        } else if (measurementId == 4195) {
            msg.fieldName = "TVOC"
        } else if (measurementId == 4100) {
            msg.fieldName = "CO2"
        } else if (measurementId == 4097) {
            msg.fieldName = "AIRTEMPERATURE"
        } else if (measurementId == 4098) {
            msg.fieldName = "AIRHUMIDITY"
        } else if (measurementId == 4175) {
            msg.fieldName = "AIDETECTION1"
        } else if (measurementId == 4176) {
            msg.fieldName = "AIDETECTION2"
        } else if (measurementId == 4177) {
            msg.fieldName = "AIDETECTION3"
        } else if (measurementId == 4178) {
            msg.fieldName = "AIDETECTION4"
        } else if (measurementId == 4179) {
            msg.fieldName = "AIDETECTION5"
        } else if (measurementId == 4180) {
            msg.fieldName = "AIDETECTION6"
        } else if (measurementId == 4181) {
            msg.fieldName = "AIDETECTION7"
        } else if (measurementId == 4182) {
            msg.fieldName = "AIDETECTION8"
        } else if (measurementId == 4183) {
            msg.fieldName = "AIDETECTION9"
        } else if (measurementId == 4184) {
            msg.fieldName = "AIDETECTION10"
        }
    }
    return msg;
}
```

**Paso 4.** Desplegar

Luego conectamos todos los nodos y hacemos clic en el botón **Deploy**. Si todo está configurado correctamente, podrás ver que el nodo **mqtt in** muestra el estado conectado.

Si quieres ver la información de los registros de datos, puedes agregar un nodo de depuración (debug) después del nodo función.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/18.png" /></div>

Una vez que el Wio Terminal comience a encenderse y funcionar, enviando datos al servidor SenseCAP PaaS, podrás revisar los datos en el log de depuración de Node-RED.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/19.png" /></div>

De vuelta en el panel de Datacake, puedes ver toda la información de datos en la sección **History** de este dispositivo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/20.png" /></div>

## Solución de Problemas

> P1: ¿Por qué no puedo encontrar el Palette en Node-RED?

R: Si no puedes encontrar el Palette en la configuración, revisa tu terminal para ver si hay mensajes de error cuando inicias Node-RED.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/11.png" /></div>

El escenario más común es que la versión de npm sea muy antigua para iniciar el editor de Palette.

Si este es tu caso, ejecuta **Powershell como administrador** y escribe el siguiente comando para actualizar npm.

```sh
npm install -g npm
```

Luego solo reinicia el Node-RED.

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte todo el soporte necesario y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible.
Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
