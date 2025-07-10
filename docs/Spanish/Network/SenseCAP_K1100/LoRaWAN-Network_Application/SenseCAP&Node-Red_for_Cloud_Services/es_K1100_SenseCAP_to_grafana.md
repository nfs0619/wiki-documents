---
description: SenseCAP & Node-RED to Grafana
title: Conexión de SenseCAP & Node-RED a Grafana
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/K1100_SenseCAP_to_grafana
last_update:
  date: 06/12/2025
  author: Guillermo
---
# Conectando SenseCAP a Grafana vía Node-RED

**SenseCAP K1100 - El Kit Prototipo de Sensores** representa a Seeed Studio concentrando la esencia de la comunicación LoRa® en tecnología y productos de inteligencia en el borde, para facilitar al máximo el despliegue y dominio de aplicaciones LoRa® e IoT.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/banner.png" /></div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products)

## Actualizable a Sensores Industriales

Con el controlador SenseCAP [S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el registrador de datos [S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con el prototipado, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de robustos [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

La carcasa IP66, configuración Bluetooth, compatibilidad con la red global LoRaWAN®, batería incorporada de 19 Ah y el potente soporte desde la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, CE, y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

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

## Grafana

Grafana es una solución de código abierto para ejecutar análisis de datos, obtener métricas que permiten entender la gran cantidad de datos y monitorear nuestras aplicaciones mediante dashboards personalizables y atractivos. Grafana se conecta con todas las posibles fuentes de datos, comúnmente conocidas como bases de datos, tales como Graphite, Prometheus, InfluxDB, ElasticSearch, MySQL, PostgreSQL, entre otras. Al ser una solución open source, Grafana también nos permite crear plugins desde cero para integrarnos con diferentes fuentes de datos. Esta herramienta nos ayuda a estudiar, analizar y monitorear datos durante un periodo de tiempo, lo que técnicamente se llama análisis de series temporales.

Nos ayuda a rastrear el comportamiento de los usuarios, el comportamiento de la aplicación, la frecuencia de aparición de errores en producción o en un ambiente de pre-producción, el tipo de errores que aparecen y los escenarios contextuales, proporcionando datos relativos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/1.png" alt="pir" width={800} height="auto" /></p>

El contenido de este capítulo continuará usando Node-RED, introducido anteriormente, y usará Grafana para visualizar datos de tu instancia InfluxDB 2.4.

Antes de comenzar, por favor prepara lo siguiente:

1. Si no has instalado o no sabes qué es Node-RED, consulta por favor [Tutoriales de Node-RED y SenseCAP](https://wiki.seeedstudio.com/K1100_sensecap_node-red/).

2. Empieza desplegando SenseCAP en Node-RED para InfluxDB; los detalles están disponibles en el wiki [Conectar SenseCAP a InfluxDB vía Node-RED](https://wiki.seeedstudio.com/K1100_SenseCAP_to_influxdb/).

## Crear Nodo MQTT

**Paso 1.** Iniciar Node-RED

Inicia Node-RED escribiendo el comando `node-red` en la terminal y abre un navegador ingresando la dirección **<http://localhost:1880>** en la barra de direcciones para acceder al editor de Node-RED.

**Paso 2.** Crear Nodo MQTT

Usamos el nodo **Network -> mqtt in** y configuramos MQTT en el formato de la API SenseCAP según lo solicitado en el [tutorial previo](https://wiki.seeedstudio.com/K1100_sensecap_node-red/#mqtt-node).

- Servidor: openstream.api.sensecap.seeed.cc  
- Puerto: 1883  
- Protocolo: MQTT V3.1.1  
- Client ID: El formato es `org-<Organization ID>-<Random ID>`  
  - `<Organization ID>` Tu ID de organización. Lo obtuvimos en [Obtener la API SenseCAP](/K1100_sensecap_node-red#get-the-sensecap-api).  
  - `<Random ID>` Usa números o letras minúsculas generados aleatoriamente.

- Formato del Tema (Topic): `/device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>`

<table align="center">
  <tbody><tr>
      <td align="center">OrgID</td>
      <td align="center">Tu ID de organización. Lo obtuvimos en Obtener la API SenseCAP.</td>
    </tr>
    <tr>
      <td align="center">DevEUI</td>
      <td align="center">Identificación única de los sensores. Se encuentra en la etiqueta en la parte trasera del Grove - Wio E5 y en la consola SenseCAP.</td>
    </tr>
    <tr>
      <td align="center">Channel</td>
      <td align="center">Interfaz física en el dispositivo donde está conectado el sensor. Para el kit K1100, el valor por defecto es 1.</td>
    </tr>
    <tr>
      <td align="center">Reserved</td>
      <td align="center">Campos reservados.</td>
    </tr>
    <tr>
      <td align="center">MeasurementID</td>
      <td align="center">ID del valor medido. Se puede encontrar en la sección Measurement IDs de la <a href="https://sensecap-docs.seeed.cc/sensor_types_list.html" target="_blank">documentación de SenseCAP </a></td>
    </tr>
  </tbody></table>

**Paso 3.** Validar nodos MQTT

Una vez configurado, haz clic en el botón **Deploy** en la esquina superior derecha para verificar si la configuración fue exitosa. Si todo está correcto, aparecerá la palabra **Connected**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/1.png" /></div>

## Iniciar InfluxDB OSS

:::tip
Puedes consultar el [tutorial detallado](https://docs.influxdata.com/influxdb/v2.4/install/?t=Windows#start-influxdb) proporcionado por InfluxDB para completar la instalación y el despliegue de InfluxDB, compatible con diferentes sistemas operativos. A continuación, se muestra una guía de instalación usando un sistema Windows 11 como ejemplo.
:::

**Paso 1.** Descargar InfluxDB v2.4

Haz clic [aquí](https://dl.influxdata.com/influxdb/releases/influxdb2-2.4.0-windows-amd64.zip) para descargar el archivo zip de InfluxDB v2.4.

Descomprime el archivo descargado en `C:\Program Files\InfluxData\` y cambia el nombre de las carpetas o archivos si lo deseas.

**Paso 2.** Iniciar InfluxDB

En PowerShell, navega a `C:\Program Files\InfluxData\influxdb` y ejecuta el daemon de InfluxDB con el siguiente comando:

```shell
cd -Path 'C:\Program Files\InfluxData\influxdb'
.\influxd
```

:::tip
Usa PowerShell o WSL para ejecutar los comandos `influx` e `influxd`. Los ejemplos de línea de comandos en esta documentación usan `influx` e `influxd` como si estuvieran instalados en el `PATH` del sistema. Si estos binarios no están en tu `PATH`, reemplaza `influx` e `influxd` en los ejemplos proporcionados por `.\influx` y `.\influxd` respectivamente.
:::

Por defecto, InfluxDB usa el puerto TCP `8086` para la comunicación cliente-servidor mediante la [API HTTP de InfluxDB](https://docs.influxdata.com/influxdb/v2.4/reference/api/).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/3.png" /></div>

## Configurar InfluxDB

**Paso 1.** Registrar una cuenta en InfluxDB

Continúa con los pasos anteriores y registra una cuenta en la página que se abrirá.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/11.png" /></div>

Por favor, toma nota del **Nombre de la Organización** que definas aquí, ya que lo utilizaremos más adelante en la configuración de Node-RED.

**Paso 2.** Obtener URL

Por defecto, InfluxDB usa el puerto TCP `8086` para la comunicación cliente-servidor mediante la API HTTP.

```
http://localhost:8086/
```

Para esta sección, la URL de InfluxDB es la anterior. Por favor, anótala, ya que la necesitaremos más adelante en la configuración de Node-RED.

**Paso 3.** Obtener el Token de API

Ve a la página de *API Tokens* como se muestra a continuación, crea una nueva interfaz de API para Node-RED y anota el Token.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/12.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/13.png" /></div>

## Configurar Node-RED

**Paso 1.** Descargar el paquete de InfluxDB

Haz clic en el menú en la esquina superior derecha y selecciona **Settings** (Configuraciones).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/13.png" /></div>

Busca e instala **node-red-contrib-influxdb** en la sección **Palettes -> Install**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/12.png" /></div>

Agrega un nodo **influx.batch** desde la barra lateral izquierda (sección *storage*), haz doble clic para abrir la página de configuración y luego haz clic en el botón de editar para configurar el nodo **influx.batch**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/13.png" /></div>

**Paso 2.** Editar el nodo **influx.batch**:

- **Versión**: 2.0  
- **URL**: <http://localhost:8086/>  
- **TOKEN**: El token que generaste en la sección **Obtener el Token de API**

Una vez que hayas terminado, haz clic en el botón **Add** (Agregar) en la esquina superior derecha para volver a la página de propiedades del nodo **influx.batch**. En este punto, por favor completa con el **Nombre de tu Organización** y el **Nombre del Bucket**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/20.png" /></div>

**Paso 3.** Configurar el nodo de función

El envío de datos a InfluxDB debe seguir un formato específico, por lo que es necesario añadir un nodo de función para procesar los datos correctamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/18.png" /></div>

Arrastra un nodo de tipo **function** desde la barra de funciones a la izquierda, haz doble clic para ingresar a la página de edición, y luego copia el código dentro del apartado **On Message**.

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

Luego conectamos todos los nodos y hacemos clic en el botón **Deploy**. Si todo está configurado correctamente, podrás ver que el nodo **mqtt in** muestra el estado **connected** (conectado).

Si deseas ver la información del registro de datos, puedes agregar un nodo de **debug** después del nodo de función.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/17.png" /></div>

Una vez que el **Wio Terminal** se encienda y comience a funcionar, enviará datos al servidor SenseCAP PaaS, y podrás ver esos datos en el registro de depuración (debug log) de Node-RED.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/21.png" /></div>

## Configurar Grafana

**Paso 1.** Instalar Grafana

Grafana se puede instalar en muchos sistemas operativos diferentes. Para conocer los requisitos mínimos de hardware y software, así como las instrucciones de instalación, consulta la guía oficial: [Instalar Grafana](https://grafana.com/docs/grafana/v9.0/setup-grafana/installation/).

Tomando como ejemplo Windows 11, descarga el instalador desde el [sitio web de Grafana](https://grafana.com/grafana/download?platform=windows) y haz doble clic para comenzar la instalación.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/16.png" /></div>

**Paso 2.** Iniciar sesión en Grafana

Abre tu navegador web y ve a `http://localhost:3000/`. El puerto predeterminado que Grafana utiliza es el `3000`, a menos que se haya configurado otro.

En la página de inicio de sesión, escribe `admin` como nombre de usuario y contraseña.

Haz clic en **Sign in** (Iniciar sesión). Si la autenticación es exitosa, se te pedirá cambiar la contraseña.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/17.png" /></div>

**Paso 3.** Agregar fuente de datos (Data Source)

En la página principal, haz clic en el icono del engranaje en la parte inferior izquierda y luego selecciona **Add data source** (Agregar fuente de datos).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/18.png" /></div>

Selecciona **InfluxDB** de la lista de fuentes disponibles.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/7.png" /></div>

**Paso 4.** Configurar la fuente de datos InfluxDB

En la página de configuración de la fuente de datos, introduce un nombre para identificarla.

Luego, completa lo siguiente:

- **Query Language (Lenguaje de Consulta)**: Flux  
- En la sección **HTTP**, escribe:
  - **URL**: <http://localhost:8086/>
- En la sección **Auth**, haz lo siguiente:
  - Desactiva **Basic auth**.
- En la sección **InfluxDB Details**, completa:
  - **Organization**: tu ID de organización. Este puede verse en la página **About** (Acerca de) de InfluxDB.
  - **Token**: tu token de API de InfluxDB.
  - **Default Bucket**: el bucket predeterminado que se usará en las consultas Flux.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/14.png" /></div>

Haz clic en **Save & Test** (Guardar y probar). Grafana intentará conectarse a la fuente de datos InfluxDB 2.4 y mostrará los resultados de la prueba. Si todo está bien configurado, verás el siguiente mensaje:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/15.png" /></div>

## Consultar y visualizar datos

Con la conexión a InfluxDB ya configurada, puedes usar Grafana y el lenguaje **Flux** para consultar y visualizar datos de series temporales almacenados en tu instancia de InfluxDB.

Para obtener más información sobre cómo usar Grafana, consulta la [documentación oficial de Grafana](https://grafana.com/docs/).  
Si estás comenzando con Flux, te recomendamos empezar por [Introducción a Flux](https://docs.influxdata.com/flux/v0.x/get-started/).

¡También te invitamos a enviarnos tus paneles de datos (dashboards)! Estamos ansiosos por ver tu trabajo.

## Soporte técnico y discusión sobre productos

¡Gracias por elegir nuestros productos!  
Estamos aquí para ofrecerte diferentes tipos de soporte con el fin de que tu experiencia con nuestros productos sea lo más fluida posible.  
Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
