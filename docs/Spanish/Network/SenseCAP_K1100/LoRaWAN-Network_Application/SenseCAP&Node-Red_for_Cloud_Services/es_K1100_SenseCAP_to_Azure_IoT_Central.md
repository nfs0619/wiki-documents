---
description: SenseCAP & Node-RED to Microsoft Azure IoT Central
title: Conectando SenseCAP a Azure IoT Central vía Node-RED
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/K1100_SenseCAP_to_Azure_IoT_Central
last_update:
  date: 06/12/2025
  author: Guillermo
---


# Conectando SenseCAP a Azure IoT Central vía Node-RED

**SenseCAP K1100 - El Kit Prototipo de Sensores** representa a Seeed Studio concentrando la esencia de la comunicación LoRa® en tecnología y productos de inteligencia en el borde, para facilitar la implementación y dominio de aplicaciones LoRa® e IoT.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/banner.png" /></div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products)

## Actualizable a Sensores Industriales

Con el [controlador SenseCAP S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con el prototipado, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de robustos [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

La carcasa IP66, configuración Bluetooth, compatibilidad con la red global LoRaWAN®, batería integrada de 19 Ah y el potente soporte desde la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad lumínica, CO2, EC y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

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

## Microsoft Azure IoT

[Microsoft Azure IoT](https://azure.microsoft.com/en-us/overview/iot) es una colección de servicios en la nube gestionados por Microsoft que conectan, monitorean y controlan miles de millones de dispositivos IoT. Incluye seguridad y sistemas operativos para dispositivos y equipos, junto con datos y análisis que ayudan a las empresas a construir, desplegar y gestionar aplicaciones IoT.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/Azure_IoT.png" alt="pir" width={1200} height="auto" /></p>

## Microsoft Azure IoT Central

[Microsoft Azure IoT Central](https://azure.microsoft.com/en-us/services/iot-central) es una solución SaaS (software como servicio) IoT global completamente gestionada que facilita la conexión, monitoreo y gestión de tus activos IoT a gran escala. Es altamente segura, escala con tu negocio conforme crece, asegura que tus inversiones sean repetibles e integra con tus aplicaciones empresariales existentes. También cierra la brecha entre tus aplicaciones empresariales y los datos IoT. Finalmente, ofrece gestión centralizada para reconfigurar y actualizar tus dispositivos.

El contenido de este capítulo continuará utilizando Node-RED, presentado anteriormente, para facilitar la gestión del kit K1100 en Microsoft Azure IoT Central mediante Node-RED.

Si no has instalado o no sabes qué es Node-RED, por favor consulta [Node-RED & SenseCAP Tutorials](https://wiki.seeedstudio.com/K1100_sensecap_node-red/).

## Instalar SenseCraft

**SenseCraft** es una plataforma de software open source para construir sensores inteligentes sin código. Ofrece una solución completa lista para usar que permite detectar el mundo real, procesar datos y enviar esos datos a la nube de la manera más fácil y rápida posible, ¡sin experiencia en programación! Ahora es compatible con Wio Terminal.

Al usar SenseCraft, podemos transferir los valores de los sensores del kit K1100 directamente a la plataforma SenseCAP sin necesidad de programar. Esto, por supuesto, se logra vía **LoRaWAN**®.

:::note
Si quieres acceder a Azure IoT Central vía **WiFi (MQTT)**, por favor consulta este [Wiki](https://wiki.seeedstudio.com/Connect-Wio-Terminal-to-Azure-IoT-Central/).
:::

**Paso 1.** Descargar el firmware a tu computadora

En la sección de **Última versión (Latest release)**, haz clic en **SenseCraft-vx.x.uf2** para descargar el archivo .uf2.

<div>
  <p style={{}}><a href="https://github.com/Seeed-Studio/SenseCraft/releases" target="_blank" /></p><div align="center"><a href="https://github.com/Seeed-Studio/SenseCraft/releases" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**Paso 2.** Subir el firmware al Wio Terminal

Conecta el Wio Terminal a la PC y enciéndelo. Entra en **Modo Bootloader** deslizando el interruptor de encendido hacia abajo, alejándolo de la posición "ON", suelta, desliza de nuevo y suelta.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" alt="pir" width={500} height="auto" /></p>

:::note
Una vez que el Wio Terminal está en modo Bootloader, el LED azul empezará a respirar de una forma distinta a cuando parpadea.
:::

Abre el Explorador de archivos en tu PC y verás un nuevo disco externo llamado **Arduino**, arrastra el archivo **.uf2** descargado previamente a esta unidad **Arduino**.

Ahora hemos subido exitosamente SenseCraft al Wio Terminal.

## Crear Nodo MQTT

**Paso 1.** Iniciar Node-RED

Inicia Node-RED escribiendo el comando `node-red` en la terminal, abre un navegador y entra a la dirección **<http://localhost:1880>** en la barra de direcciones para acceder al editor de Node-RED.

**Paso 2.** Crear Nodo MQTT

Usamos el nodo **Network -> mqtt in** y configuramos MQTT con el formato de la API de SenseCAP como se solicitó en el [tutorial anterior](https://wiki.seeedstudio.com/K1100_sensecap_node-red/#mqtt-node).

- Servidor: openstream.api.sensecap.seeed.cc  
- Puerto: 1883  
- Protocolo: MQTT V3.1.1  
- Client ID: El formato es `org-<Organization ID>-<Random ID>`  
  - `<Organization ID>`: Tu ID de organización. Lo obtuvimos en la sección [Obtener la API de SenseCAP](/K1100_sensecap_node-red#get-the-sensecap-api).  
  - `<Random ID>`: usa tus propios números o letras minúsculas generados aleatoriamente.  

- Formato del Topic: `/device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>`

<table align="center">
  <tbody><tr>
      <td align="center">OrgID</td>
      <td align="center">Tu ID de organización. Lo obtuvimos en la sección Obtener la API de SenseCAP.</td>
    </tr>
    <tr>
      <td align="center">DevEUI</td>
      <td align="center">Identificación única de los dispositivos sensores. Esta información se encuentra en la etiqueta en la parte trasera del Grove - Wio E5, así como en el dispositivo de la consola SenseCAP.</td>
    </tr>
    <tr>
      <td align="center">Channel</td>
      <td align="center">Una interfaz física en el dispositivo a la que está conectado el sensor. Para el kit K1100, el valor predeterminado aquí es 1.</td>
    </tr>
    <tr>
      <td align="center">Reserved</td>
      <td align="center">Campos reservados.</td>
    </tr>
    <tr>
      <td align="center">MeasurementID</td>
      <td align="center">ID del valor medido. Este ID se puede encontrar en la sección de IDs de medición de la <a href="https://sensecap-docs.seeed.cc/sensor_types_list.html" target="_blank">documentación de SenseCAP</a></td>
    </tr>
  </tbody></table>

**Paso 3.** Validar los nodos MQTT

Una vez configurado, haz clic en el botón **Deploy** en la esquina superior derecha para verificar si la configuración fue exitosa. Si está todo correcto, se mostrará la palabra **Connected**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/1.png" /></div>

## Configurar Microsoft Azure IoT Central

**Paso 1.** Iniciar sesión en Azure IoT Central.

Visita el sitio oficial de [Azure IoT Central](https://apps.azureiotcentral.com/home), haz clic en **Build** en el menú de navegación izquierdo y luego en **Custom apps**.

Si aún no has iniciado sesión en Azure IoT Central, se te pedirá registrarte o iniciar sesión en este punto.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/1.png" /></div>

**Paso 2.** Rellena el campo **Application name** y elige **Standard 0** en el **Pricing plan**. La URL de la aplicación se generará automáticamente cuando completes el nombre. En este ejemplo, realizaremos esta tarea al costo mínimo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/2.png" /></div>

:::note
Si eres un usuario nuevo de Azure IoT Central, recomendamos seleccionar **Free** para evitar cargos.
:::
    <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_azure_central/9.png" /></div>

**Paso 3.** Haz clic en **Create** para crear la nueva aplicación. ¡Ahora has configurado exitosamente Azure IoT Central!

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/3.png" /></div>

**Paso 4.** Crear una plantilla de dispositivo

Crea una nueva plantilla de dispositivo haciendo clic en **Device templates** en el menú lateral izquierdo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/2.png" /></div>

Selecciona **Wio Terminal** como nuestra plantilla.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/3.png" /></div>

Luego solo haz clic en **Create**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/4.png" /></div>

Después, se creará una plantilla ya lista para usar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/5.png" /></div>

**Paso 5.** Crear un dispositivo

Haz clic en **Devices -> Seeed Wio Terminal** en el menú lateral izquierdo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/6.png" /></div>

Haz clic en **New**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/7.png" /></div>

Haz clic en el botón **Create** para completar la creación del dispositivo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/8.png" /></div>

Una vez creado el dispositivo, verás el dispositivo que acabas de crear bajo **Device**. Entra en el dispositivo y haz clic en el botón **Connect** en la esquina superior izquierda.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/9.png" /></div>

Aquí necesitamos la información que aparece ahí.

```
ID scope
Device ID
Primary key
```

Por favor, toma nota de esta información, ya que la usaremos en los siguientes pasos.

## Configurar Node-RED

**Paso 1.** Descargar los paquetes de Azure IoT

Haz clic en el menú en la parte superior derecha y selecciona **Settings** (Configuración).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/13.png" /></div>

Busca e instala **node-red-contrib-azure-iot-central** en la pestaña **Palettes -> Install**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/12.png" /></div>

**Paso 2.** Configurar el nodo Azure IoT Central

Arrastra el nodo **Azure IoT Central** desde la barra de funciones a la izquierda, haz doble clic para abrir la página de configuración, luego haz clic en el botón de editar para modificar la configuración del nodo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/14.png" /></div>

Completa la configuración con los siguientes datos:

- Transport: MQTT  
- Authentication: SAS  
- Scope ID  
- Device ID  
- Primary Key  

Los últimos tres datos son exactamente los que obtuvimos en **Configurar Microsoft Azure IoT Central**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/15.png" /></div>

**Paso 3.** Configurar el nodo Function

El reporte de datos a Azure IoT Central debe seguir un formato específico, por lo que es necesario agregar un nodo **Function** para procesar el formato de los datos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/16.png" /></div>

Arrastra el nodo **Function** desde la barra de funciones a la izquierda, haz doble clic para abrir la página de edición y copia el código en la sección **On Message**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/17.png" /></div>

```javascript
{
    var payload = msg.payload;
    var topic = msg.topic;
    var strs = topic.split("/");
    var length = strs.length
    if(length>=2){
        var measurementId = strs[length-1]
        var body = {}
        var value = payload.value
        if(measurementId==4100){
            body.co2 = value
        }else if(measurementId==4103){
            body.soilmoisture= value
        }else if(measurementId==4150){
            body.accelX= value
        }else if(measurementId==4151){
            body.accelY = value
        }else if(measurementId==4152){
            body.accelZ = value
        }else if(measurementId==4192){
            body.soundintensity = value
        }else if(measurementId==4193){
            body.lightIntensity = value
        }else if(measurementId==4195){
            body.tvoc = value
        }else if(measurementId==4097){
            body.airtemperature = value
        }else if(measurementId==4098){
            body.airhumidity = value
        }else if(measurementId==4175){
            body.AIdetection_1 = value
        }else if(measurementId==4176){
            body.AIdetection_2 = value
        }else if(measurementId==4177){
            body.AIdetection_3 = value
        }else if(measurementId==4178){
            body.AIdetection_4 = value
        }else if(measurementId==4179){
            body.AIdetection_5 = value
        }else if(measurementId==4180){
            body.AIdetection_6 = value
        }else if(measurementId==4181){
            body.AIdetection_7 = value
        }else if(measurementId==4182){
            body.AIdetection_8 = value
        }else if(measurementId==4183){
            body.AIdetection_9 = value
        }else if(measurementId==4184){
            body.AIdetection_10 = value
        }
        msg.payload = body;
    }
    return msg;
}
```

Luego conectamos todos los nodos y hacemos clic en el botón **Deploy**. Si todo está configurado correctamente, el nodo **mqtt in** mostrará el estado **connected**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/18.png" /></div>

Si quieres ver la información de registro (logging) de los datos, puedes añadir un nodo **debug** después del nodo **function**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/19.png" /></div>

Cuando el Wio Terminal se encienda y comience a enviar datos al servidor SenseCAP PaaS, podremos verificar los datos en Azure IoT Central.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/21.png" /></div>

## Presentación de datos

Sin embargo, dado que no hemos configurado el tipo de sensor, los datos visibles en la columna **Raw data** se colocan en **Unmodeled data**. Por ello, necesitamos parsear los datos según el código mencionado anteriormente.

Necesitamos cambiar el estilo de la plantilla que se muestra en **template**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/26.png" /></div>

Después de hacer los cambios, simplemente haz clic en **Save** y luego en **Publish**. Todos los cambios en el **Device template** deben ser guardados y publicados siguiendo este procedimiento para que tengan efecto.

:::tip
Por favor, rellena el campo **Display name** de acuerdo con el nombre del código JavaScript que proporcionaste anteriormente.
:::
Por supuesto, si quieres enriquecer la página de tu dashboard de datos, también puedes configurarlo para que se muestre en **Overview**.

Haz clic en **Overview** en el menú de navegación izquierdo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/16.png" /></div>

Despliega el menú desplegable **select a telemetry** y selecciona la telemetría que deseas visualizar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/70.png" /></div>

Haz clic en **Add tile** y verás que el tile se añade al Dashboard de Azure IoT Central.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/23.png" /></div>

**Nota:** Puedes redimensionar o cambiar la visualización de los tiles según tu preferencia.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/24.png" /></div>

¡Así que ahora personaliza tu panel de monitoreo de datos del sensor a tu gusto!

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/25.png" /></div>

## Solución de problemas

> **P1: ¿Por qué no puedo encontrar la Palette en Node-RED?**

Respuesta: Si no puedes encontrar la Palette en la configuración, revisa en la terminal si aparece algún mensaje de error al iniciar Node-RED.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/11.png" /></div>

El escenario más común es que la versión de npm que tienes sea demasiado antigua para iniciar el editor de Palette.

Si este es tu caso, abre **Powershell como administrador** y ejecuta el siguiente comando para actualizar npm:

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
