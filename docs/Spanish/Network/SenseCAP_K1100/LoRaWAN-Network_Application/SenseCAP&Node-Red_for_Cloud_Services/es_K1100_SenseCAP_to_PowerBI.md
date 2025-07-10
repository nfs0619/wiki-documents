---
description: SenseCAP & Node-RED to Power BI
title: Conexión de SenseCAP & Node-RED a Power BI
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/K1100_SenseCAP_to_PowerBI
last_update:
  date: 06/13/2025
  author: Guillermo
---
# Conexión de SenseCAP a Power BI a través de Node-RED

**SenseCAP K1100 - El Kit Prototipo de Sensores** representa la apuesta de Seeed Studio por concentrar lo mejor de la comunicación LoRa® y la inteligencia en el borde (edge computing), facilitando al máximo el despliegue y dominio de aplicaciones de LoRa® e IoT.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/banner.png" /></div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products)

## Actualizable a Sensores Industriales

Con el [controlador SenseCAP S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), puedes convertir fácilmente un sensor Grove en un sensor LoRaWAN®. Seeed no solo te apoya en la etapa de prototipado, sino que también te ofrece la posibilidad de escalar tu proyecto con la serie SenseCAP de sensores industriales robustos.

Con carcasa IP66, configuración por Bluetooth, compatibilidad con redes globales LoRaWAN®, batería incorporada de 19 Ah y una potente app de soporte, la serie [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) es la mejor opción para aplicaciones industriales. Esta serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad lumínica, CO₂, EC, y una estación meteorológica 8-en-1. Prueba la última serie SenseCAP S210x para tu próximo proyecto industrial exitoso.


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

## Power BI

Conecta y analiza toda tu infraestructura de datos combinando Power BI con los servicios de análisis de Azure — incluyendo Azure Synapse Analytics y Azure Data Lake Storage. Analiza petabytes de datos, usa capacidades avanzadas de IA, aplica protecciones adicionales de datos y comparte insights fácilmente en toda tu organización.

En este tutorial te guiaremos para importar datos de sensores desde **SenseCAP** hacia **Power BI** para un procesamiento de datos más profundo utilizando Node-RED.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_powerbi/powerbi_logo.png" /></div>

## Preparación previa

Para completar este tutorial necesitas:

- Si no has instalado o no sabes qué es Node-RED, por favor consulta [Tutoriales Node-RED & SenseCAP](https://wiki.seeedstudio.com/K1100_sensecap_node-red/).
- Una cuenta de Power BI. Si no tienes una cuenta, regístrate para una [prueba gratuita de Power BI Pro](https://app.powerbi.com/signupredirect?pbi_source=web) antes de comenzar.
- En alguno de los siguientes wikis, debes haber subido datos exitosamente a SenseCAP:
  - [Enviar datos de sensores a SenseCAP vía LoRa®](https://wiki.seeedstudio.com/K1100-quickstart/#send-sensor-data-to-sensecap-via-lora)

<!--## Create SenseCAP node

**Step 1.** Start Node-RED

Start Node-RED by typing the command `node-red` in the terminal and open a browser and enter the address **http://localhost:1880** in the address bar to access the editor of Node-RED.

**Step 2.** Install the SenseCAP node

Click on the upper-right menu bar and select Settings.

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/6.png"/></div>

Search and install **node-red-sensecap-paas** in the **Paletts -> Install**.

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/1.png"/></div>

**Step 3.** Configure SenseCAP node

Add **sensecap.OpenStream** from the storage bar on the left，double-click it to enter the configuration page, then click the edit button to edit **sensecap.OpenStream** node.

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/2.png"/></div>

Please edit your account.

<div align=center><img width = 600 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/7.png"/></div>

In the new page, please fill in the following fields.

- Name: Name this account.
- Orgnization ID: From the **Organization Information** section, copy the Organization ID.

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/8.png"/></div>

- API Key: Please click on **Security** -> **Access API keys** on the left side of the dashboard. Then Create an Access Key.

<div align=center><img width = 700 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/9.png"/></div>

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/10.png"/></div>

Then just click on the **Update** or **Save** button.

On the screen for setting up nodes, please fill in the following fields.
- Name: Name your node.
- EUI: Please enter the EUI of your device, which can be found in the SenseCAP console.
- Measurement ID: Sensor number. Information on sensor numbers can be found in the [SenseCAP Documentation Centre](https://sensecap-docs.seeed.cc/sensor_types_list.html).
- Output Format: Select **Power BI**.

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/5.png"/></div>

!!!Note
    Our recommendation is to fill in the Measurement ID, which will be a sensor value each time it is transmitted to Power BI. If this is left blank, multiple sensor values will be transmitted at the same time and Power BI will then get a messy data.
    If you have a need to analyse values from multiple sensors at the same time, you can use multiple SenseCAP nodes.-->

## Crear nodo MQTT

**Paso 1.** Iniciar Node-RED

Inicia Node-RED escribiendo el comando `node-red` en la terminal. Luego abre un navegador y escribe la dirección **http://localhost:1880** en la barra de direcciones para acceder al editor de Node-RED.

**Paso 2.** Crear nodo MQTT

Usamos el nodo **Network -> mqtt in** y configuramos el mqtt con el formato de la API de SenseCAP como se indicó en el [tutorial previo](https://wiki.seeedstudio.com/K1100_sensecap_node-red/#mqtt-node).

- Servidor: openstream.api.sensecap.seeed.cc  
- Puerto: 1883  
- Protocolo: MQTT V3.1.1  
- Client ID: El formato es `org-<Organization ID>-<Random ID>`  
  - `<Organization ID>`: Tu ID de organización. Lo obtuvimos en el [Obtener API de SenseCAP](/K1100_sensecap_node-red#get-the-sensecap-api).  
  - `<Random ID>`: utiliza un número o letras minúsculas generados aleatoriamente.  

- Formato del Topic: `/device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>`

<table align="center">
  <tbody><tr>
      <td align="center">OrgID</td>
      <td align="center">Tu ID de organización. Lo obtuviste en la sección Obtener API de SenseCAP.</td>
    </tr>
    <tr>
      <td align="center">DevEUI</td>
      <td align="center">Identificación única del dispositivo sensor. Esta información se encuentra en la etiqueta en la parte trasera del Grove - Wio E5, así como en la consola de SenseCAP.</td>
    </tr>
    <tr>
      <td align="center">Channel</td>
      <td align="center">Una interfaz física en el dispositivo a la que está conectado el sensor. Para el kit K1100, el valor predeterminado es 1.</td>
    </tr>
    <tr>
      <td align="center">Reserved</td>
      <td align="center">Campos reservados.</td>
    </tr>
    <tr>
      <td align="center">MeasurementID</td>
      <td align="center">ID del valor medido. Este ID se puede encontrar en la sección Measurement IDs de la <a href="https://sensecap-docs.seeed.cc/sensor_types_list.html" target="_blank">documentación de SenseCAP</a></td>
    </tr>
  </tbody></table>

:::note
Se recomienda que un nodo mqtt in transmita únicamente los valores de un solo sensor para evitar confusiones por transmitir valores de múltiples sensores simultáneamente.
:::
    <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/20.png" /></div>

**Paso 3.** Validar nodos MQTT

Una vez configurado, por favor haz clic en el botón **Deploy** en la esquina superior derecha para verificar si la configuración fue exitosa. Si está correctamente configurado, se mostrará la palabra **Connected**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/1.png" /></div>

## Configurar nodo función

El reporte de datos a Power BI debe seguir un formato específico, por lo que es necesario agregar un nodo función para procesar el formato de datos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/18.png" /></div>

Arrastra el nodo función desde la barra de funciones a la izquierda, haz doble clic para abrir la página de edición, y luego copia el código en On Message.

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
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4103) {
            body.soilmoisture = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4150) {
            body.accelX = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4151) {
            body.accelY = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4152) {
            body.accelZ = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4192) {
            body.soundintensity = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4193) {
            body.lightIntensity = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4195) {
            body.tvoc = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4097) {
            body.airtemperature = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4098) {
            body.airhumidity = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4175) {
            body.AIdetection_1 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4176) {
            body.AIdetection_2 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4177) {
            body.AIdetection_3 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4178) {
            body.AIdetection_4 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4179) {
            body.AIdetection_5 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4180) {
            body.AIdetection_6 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4181) {
            body.AIdetection_7 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4182) {
            body.AIdetection_8 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4183) {
            body.AIdetection_9 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4184) {
            body.AIdetection_10 = value
            body.timestamp = msg.payload.timestamp
        }
        msg.payload = body;
    }
    return msg;
}
```

:::Tip
    El código anterior es común para todos los sensores y puedes elegir pegarlo todo en un nodo función o interceptar una sección de uno de los sensores que estés usando para utilizarla.
    Cabe destacar que el nombre del sensor en el programa debe coincidir con el nombre que se establezca posteriormente en Power BI para que el flujo de datos se transfiera correctamente. Por ejemplo, en el programa anterior el sensor de luz tiene el nombre de valor: **lightIntensity**.
:::

## Crear los conjuntos de datos en Power BI

**Paso 1.** Inicia sesión en tu [cuenta de Power BI](https://app.powerbi.com/).

**Paso 2.** Crea un espacio de trabajo.

Selecciona **Workspaces** y luego selecciona **Create a workspace**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/23.png" /></div>

En la página Crear un espacio de trabajo, ingresa **In-store analytics - checkout** como nombre del espacio de trabajo. Selecciona **Guardar**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/24.png" /></div>

**Paso 3.** Crea un conjunto de datos en streaming.

En la página del espacio de trabajo, selecciona **+ New** > **Streaming dataset**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/25.png" /></div>

En la página Nuevo conjunto de datos en streaming, elige API y luego selecciona Siguiente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/26.png" /></div>

Ingresa **Light-Sensor** como nombre del conjunto de datos.

Ingresa los valores de luz del flujo en la siguiente tabla:

| Nombre del valor          | Tipo de valor                |
|--------------------------|-----------------------------|
| Timestamp                | DataTime                    |
| lightIntensity           | Number                      |

:::tip
El nombre del valor debe ser el mismo que el nombre del programa de función en Node RED.
:::
    <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/21.png" /></div>

Ahora tienes un conjunto de datos en streaming. Por favor, anota la **Push URL** que obtienes aquí, la usaremos en el siguiente paso.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/22.png" /></div>

## Configurar nodo de solicitud HTTP

Agrega el nodo **http request** desde la barra de almacenamiento a la izquierda, haz doble clic para entrar a la página de configuración, luego haz clic en el botón de editar para modificar el nodo **http request**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/16.png" /></div>

Por favor, copia la URL obtenida en la sección anterior y pégala en el campo URL de la página del nodo http request.

Solo cambia el método a **POST** y guarda los cambios.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/17.png" /></div>

## Desplegar y observar los datos

**Paso 1.** Desplegar

Luego conectamos todos los nodos y hacemos clic en el botón **Deploy** y si todo está configurado correctamente, podrás ver que el nodo mqtt in muestra estado conectado.

Si quieres ver la información de registro de los datos, puedes agregar un nodo debug después del nodo función.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/18.png" /></div>

Una vez que el Wio Terminal comience a encenderse y a funcionar, y empiece a enviar datos al servidor SenseCAP PaaS, podremos revisar los datos en el registro de debug de Node-RED.

**Paso 2.** Configurar los paneles de Power BI

Selecciona **Workspaces** > **In-store analytics - checkout**.

Selecciona **+ New** > **Dashboard**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_powerbi/50.png" /></div>

Ingresa **Store analytics** como nombre del panel y selecciona **Create**.

### Agregar gráficos de líneas

Agrega un mosaico con un gráfico de líneas para mostrar el valor de luz de los sensores incorporados del Wio Terminal. Usa la información de la siguiente tabla para crear los mosaicos. Para agregar cada mosaico, comienza seleccionando **Edit** > **Add a tile**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/51.png" /></div>

Selecciona **Custom Streaming Data** y luego selecciona **Next**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_powerbi/52.png" /></div>

Configura la coordenada horizontal para mostrar la marca de tiempo (timestamp) y la coordenada vertical para mostrar los valores de datos en el valor.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/15.png" /></div>

Cuando el flujo de datos comience a transferirse, podrás ver el panel en forma de gráfico de líneas.

También puedes agregar más gráficos o análisis de datos para ajustarlos a tus necesidades.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/19.png" /></div>

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Statement

- The LoRa® Mark is a trademark of Semtech Corporation or its subsidiaries.
- LoRaWAN® is a mark used under license from the LoRa Alliance®.
