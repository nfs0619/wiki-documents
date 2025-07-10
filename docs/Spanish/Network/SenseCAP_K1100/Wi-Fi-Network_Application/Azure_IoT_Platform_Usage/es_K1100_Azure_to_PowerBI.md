---
description: Data visualisation with Power BI
title: Visualización de datos con Power BI
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/K1100_Azure_to_PowerBI
last_update:
  date: 06/17/2025
  author: Guillermo
---
# Visualización de datos de Microsoft Azure IoT con Power BI

**SenseCAP K1100 - El Kit Prototipo de Sensores** representa a Seeed Studio concentrando la esencia de la comunicación LoRa® en productos de tecnología e inteligencia en el borde, para facilitar al máximo el despliegue y manejo de aplicaciones LoRa® e IoT.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/banner.png" /></div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products)

## Actualizable a Sensores Industriales

Con el controlador SenseCAP [S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el registrador de datos [S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con el prototipado, sino que también te ofrece la posibilidad de ampliar tu proyecto con la serie SenseCAP de robustos [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

La carcasa IP66, configuración por Bluetooth, compatibilidad con la red global LoRaWAN®, batería incorporada de 19 Ah y el potente soporte desde la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad lumínica, CO2, CE, y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody><tr><td colSpan={4} bgcolor="#0e3c49" align="center"><font color="white" size={4}><strong>SenseCAP Industrial Sensor</strong></font></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49">
        <div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> Data Logger</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> Air Temp &amp; Humidity</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> Light</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> Air Temp &amp; Humidity &amp; CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49">
        <div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></a></div>
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

[Microsoft Azure IoT](https://azure.microsoft.com/en-us/overview/iot) es un conjunto de servicios en la nube gestionados por Microsoft que conectan, monitorean y controlan miles de millones de dispositivos IoT. Incluye seguridad y sistemas operativos para dispositivos y equipos, junto con datos y análisis que ayudan a las empresas a construir, desplegar y administrar aplicaciones IoT.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/Azure_IoT.png" alt="pir" width={1200} height="auto" /></p>

## Power BI

Conecta y analiza todo tu conjunto de datos combinando Power BI con los servicios analíticos de Azure — incluyendo Azure Synapse Analytics y Azure Data Lake Storage. Analiza petabytes de datos, usa capacidades avanzadas de IA, aplica protección adicional a los datos y comparte fácilmente insights en toda tu organización.

Convierte tus datos en una ventaja competitiva usando Power BI y Azure juntos para conectar, combinar y analizar todo tu conjunto de datos.

En este tutorial, configurarás tu aplicación de IoT Central para exportar la telemetría recopilada desde los dispositivos. Luego usarás Power BI para crear un panel personalizado para que el gerente de la tienda visualice los insights derivados de la telemetría.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_powerbi/powerbi_logo.png" /></div>

En este tutorial aprenderás a:

- Configurar una aplicación de IoT Central para exportar telemetría a un event hub.
- Usar Logic Apps para enviar datos de un event hub a un conjunto de datos de streaming en Power BI.
- Crear un panel en Power BI para visualizar los datos en el conjunto de streaming.

## Preparación preliminar

Para completar este tutorial necesitas:

- Una suscripción de Azure. Si no tienes una, crea una [cuenta gratuita](https://azure.microsoft.com/free/?WT.mc_id=A261C142F) antes de comenzar.
- Una cuenta de Power BI. Si no tienes una, regístrate para una [prueba gratuita de Power BI Pro](https://app.powerbi.com/signupredirect?pbi_source=web) antes de comenzar.
- En cualquiera de los siguientes wikis, ya debes haber subido datos exitosamente a Azure IoT Central:
  - [Conectar SenseCAP a Azure IoT Central vía Node-RED](https://wiki.seeedstudio.com/K1100_SenseCAP_to_Azure_IoT_Central/)
  - [Conectar Wio Terminal a Microsoft Azure IoT Central (WiFi)](https://wiki.seeedstudio.com/Connect-Wio-Terminal-to-Azure-IoT-Central/)

## Crear un Grupo de Recursos

Antes de crear tu event hub y la lógica de aplicación (logic app), necesitas crear un **grupo de recursos** para gestionarlos. El grupo de recursos debe estar en la misma región que tu aplicación IoT Central llamada *In-store analytics - checkout*. Para crear un grupo de recursos:

**Paso 1.** Inicia sesión en el [portal de Azure](https://portal.azure.com/).

**Paso 2.** En la navegación izquierda, selecciona **Grupos de recursos**. Luego selecciona **Crear**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/1.png" /></div>

- Para **Suscripción**, selecciona el nombre de la suscripción de Azure que usaste para crear tu aplicación IoT Central.
- Para el nombre del **Grupo de recursos**, ingresa **retail-store-analysis**.
- Para la **Región**, selecciona la misma región que elegiste para la aplicación IoT Central.

**Paso 3.** Selecciona **Revisar + crear**.

En la página de revisión, selecciona **Crear**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_powerbi/2.png" /></div>

Ahora tienes un grupo de recursos llamado *retail-store-analysis* en tu suscripción.

## Configurar un Event Hub

Antes de configurar la aplicación de monitoreo para exportar telemetría, necesitas crear un event hub para recibir los datos exportados. Los siguientes pasos muestran cómo crear tu event hub:

**Paso 4.** En el [portal de Azure](https://portal.azure.com/), selecciona **Crear un recurso** en la parte superior izquierda de la pantalla.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/3.png" /></div>

**Paso 5.** En la búsqueda del Marketplace, escribe *Event Hubs* y presiona Enter.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/4.png" /></div>

**Paso 6.** Crear un event hub

En la página de Event Hubs, selecciona **Crear**. En la página Crear Namespace realiza lo siguiente:

- Selecciona la misma **Suscripción** que usaste para crear tu aplicación IoT Central.
- Selecciona el grupo de recursos **retail-store-analysis**.
- Ingresa un nombre único para el namespace, por ejemplo **k1100-retail-store-analysis**.
- Selecciona la misma ubicación que usaste para tu aplicación IoT Central.
- Elige el nivel de precio *Basic*.

Selecciona **Revisar + crear**. Puede que tengas que esperar algunos minutos para que se provisionen los recursos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/5.png" /></div>

**Paso 7.** Obtener la clave compartida de Event Hubs

En el [portal de Azure](https://portal.azure.com/), navega al grupo de recursos **retail-store-analysis**.

Espera a que la implementación se complete. Es posible que debas seleccionar **Actualizar** para refrescar el estado. También puedes verificar el estado en Notificaciones.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/6.png" /></div>

Dentro del grupo de recursos **retail-store-analysis**, selecciona el **Namespace de Event Hubs**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/7.png" /></div>

Verás la página principal de tu Namespace de Event Hubs en el portal.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/8.png" /></div>

Necesitas una **cadena de conexión** con permisos de envío (send) para conectar desde IoT Central. Para crear la cadena de conexión:

- En tu Namespace de Event Hubs en el portal de Azure, selecciona **Políticas de acceso compartido (Shared access policies)**. Selecciona **+ Agregar**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/9.png" /></div>

- Ingresa **SendPolicy** como nombre de la política, selecciona **Enviar (Send)** y luego selecciona **Crear**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/10.png" /></div>

- Selecciona **SendPolicy** en la lista de políticas. Anota el valor de **Cadena de conexión - clave primaria (Connection string-primary key)**. Lo usarás para configurar el destino de exportación en IoT Central.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/11.png" /></div>

**Paso 8.** Obtener la clave para administrar y escuchar Event Hubs

Necesitas una cadena de conexión con permisos para administrar y escuchar para conectar al event hub desde tu lógica de aplicación (logic app). Para obtener esta cadena de conexión:

- En el Namespace de Event Hubs en el portal, selecciona Políticas de acceso compartido.

- Selecciona **RootManageSharedAccessKey** en la lista de políticas. Anota el valor de **Cadena de conexión - clave primaria (Connection string-primary key)**. Lo usarás para configurar la lógica de aplicación y extraer telemetría de tu event hub.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/12.png" /></div>

**Paso 9.** Crear un event hub para usar

Ahora que tienes un Namespace de Event Hubs, puedes crear un event hub para usar con tu aplicación IoT Central:

- En la página principal de tu Namespace de Event Hubs en el portal, selecciona **+ Event Hub**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/13.png" /></div>

- En la página Crear Event Hub, ingresa **store-telemetry** como nombre y luego selecciona **Crear**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/14.png" /></div>

Ahora tienes un event hub que puedes usar para configurar la exportación de datos desde tu aplicación IoT Central.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/15.png" /></div>

## Configurar la exportación de datos

Ahora que tienes un event hub, puedes configurar tu aplicación IoT Central para exportar la telemetría de los dispositivos conectados. Los siguientes pasos muestran cómo configurar la exportación.

**Paso 1.** Inicia sesión en tu [Aplicación IoT Central](https://apps.azureiotcentral.com/home).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/16.png" /></div>

**Paso 2.** Exportación de datos

Selecciona **Data export** (Exportación de datos) en el panel izquierdo. Selecciona **+ New export** (Nueva exportación).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/18.png" /></div>

- Ingresa **Telemetry export** como nombre de la exportación.
- Selecciona **Telemetry** como tipo de datos a exportar.
- En la sección Destinations (Destinos), selecciona **create a new one** (crear uno nuevo).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/19.png" /></div>

- Nuevo destino
  - Ingresa **Store data event hub** como **Nombre del destino**.
  - Selecciona **Azure Event Hubs** como **Tipo de destino**.
  - Selecciona **Connection string** como método de **Autorización**.
  - Pega la cadena de conexión del **SendPolicy** que guardaste al crear el event hub.
  - Ingresa **store-telemetry** como el nombre del Event Hub.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/20.png" /></div>

Selecciona **Create** (Crear) y luego **Save** (Guardar).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/21.png" /></div>

En la página de Telemetry export, espera a que el estado de la exportación cambie a **Healthy** (Saludable).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/22.png" /></div>

La exportación de datos puede tardar unos minutos en comenzar a enviar telemetría a tu event hub. Puedes verificar el estado de la exportación en la página de Data exports.

## Crear los conjuntos de datos en Power BI

Tu panel de Power BI mostrará los datos de tu aplicación de monitoreo en tienda. En esta solución, usarás conjuntos de datos de streaming en Power BI como fuente de datos para el panel. En esta sección, definirás el esquema de los conjuntos de datos de streaming para que la Logic App pueda reenviar los datos desde el Event Hub. Los siguientes pasos muestran cómo crear dos conjuntos de datos de streaming para los sensores ambientales y uno para el sensor de ocupación:

**Paso 1.** Inicia sesión en tu [cuenta de Power BI](https://app.powerbi.com/).

**Paso 2.** Crea un espacio de trabajo.

Selecciona **Workspaces** (Espacios de trabajo), y luego selecciona **Create a workspace** (Crear un espacio de trabajo).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/23.png" /></div>

En la página de creación del espacio de trabajo, ingresa **In-store analytics - checkout** como nombre del espacio de trabajo. Selecciona **Save** (Guardar).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/24.png" /></div>

**Paso 3.** Crea un conjunto de datos de streaming.

En la página del espacio de trabajo, selecciona **+ New** > **Streaming dataset** (Nuevo > Conjunto de datos de streaming).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/25.png" /></div>

En la página del nuevo conjunto de datos de streaming, elige **API**, y luego selecciona **Next** (Siguiente).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/26.png" /></div>

Ingresa **Sensor** como nombre del conjunto de datos.

Ingresa los siguientes valores del flujo:

| Nombre del valor          | Tipo de valor                |
|---------------------------|------------------------------|
| Timestamp                 | DateTime (Fecha y hora)      |
| Light                     | Número                       |
| Acceleration X            | Número                       |
| Acceleration Y            | Número                       |
| Acceleration Z            | Número                       |
| Sound                     | Número                       |

Ya tienes un conjunto de datos de streaming. La Logic App redirigirá la telemetría desde el Wio Terminal conectado a tu aplicación de análisis en tienda al conjunto de datos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/27.png" /></div>

## Crear una Logic App

En esta solución, la Logic App lee la telemetría desde el Event Hub, analiza los datos y luego los envía a los conjuntos de datos de streaming de Power BI que creaste.

Antes de crear la Logic App, necesitas el ID del dispositivo Wio Terminal que conectaste a tu aplicación de IoT Central.

**Paso 1.** Anotar el ID del dispositivo

- Inicia sesión en tu [aplicación de IoT Central](https://apps.azureiotcentral.com/myapps). Selecciona **Devices** (Dispositivos) en el panel izquierdo. Luego selecciona **Seeed Wio Terminal**.

Toma nota del **Device ID**. En la siguiente imagen, el ID es **k1100**:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/28.png" /></div>

**Paso 2.** Crear la Logic App

- Inicia sesión en el [portal de Azure](https://portal.azure.com/) y selecciona **Create a resource** (Crear un recurso) en la parte superior izquierda de la pantalla.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/3.png" /></div>

- En "Search the Marketplace", escribe **Logic App** y presiona Enter.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/29.png" /></div>

En la página de creación de la Logic App:

- Selecciona la misma **Subscription** que usaste para crear tu aplicación de IoT Central.
- Selecciona el grupo de recursos **retail-store-analysis**.
- Ingresa un nombre único para tu Logic App, como por ejemplo **tunombre-retail-store-analysis**.
- Selecciona la misma ubicación que usaste para la aplicación de IoT Central.
- En **Type**, elige **Consumption** (Consumo).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/30.png" /></div>

Selecciona **Create** (Crear). Es posible que tengas que esperar unos minutos mientras se aprovisionan los recursos.

**Paso 3.** Configurar el diseñador de Logic Apps

En el portal de Azure, navega hasta tu nueva Logic App. En la página del diseñador de Logic Apps, desplázate hacia abajo y selecciona **Blank Logic App** (Aplicación en blanco).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/31.png" /></div>

- En **Search connectors and triggers** (Buscar conectores y desencadenadores), escribe **Event Hubs**.
- En **Triggers** (Desencadenadores), selecciona **When events are available in Event Hub** (Cuando haya eventos disponibles en Event Hub).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/32.png" /></div>

- Ingresa **Store telemetry** como **Connection name** (Nombre de la conexión).
- Selecciona **Access key** como tipo de autenticación (**Authentication Type**).
- Pega el connection string del Event Hub para la política **RootManageSharedAccessKey** que anotaste anteriormente, y selecciona **Create**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/33.png" /></div>

En la acción **When events are available in Event Hub**:

- En **Event Hub name**, selecciona **store-telemetry**.
- En **Content type**, selecciona **application/json**.
- Establece el **Interval** en 3 y la **Frequency** en segundos.
- Selecciona **Save** (Guardar) para guardar tu Logic App.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/34.png" /></div>

Para agregar la lógica al diseño de tu Logic App, selecciona **Code view** (Vista de código):

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/35.png" /></div>

Reemplaza `"actions": {},` con el siguiente JSON. Luego, sustituye el marcador `[YOUR RUUVITAG DEVICE ID]` por el ID de tu Wio Terminal.

```JSON
"actions": {
            "Initialize_Device_ID_variable": {
                "inputs": {
                    "variables": [
                        {
                            "name": "DeviceID",
                            "type": "String"
                        }
                    ]
                },
                "runAfter": {},
                "type": "InitializeVariable"
            },
            "Parse_Telemetry": {
                "inputs": {
                    "content": "@triggerBody()?['ContentData']",
                    "schema": {
                        "properties": {
                            "deviceId": {
                                "type": "string"
                            },
                            "enqueuedTime": {
                                "type": "string"
                            },
                            "telemetry": {
                                "properties": {
                                    "accelX": {
                                        "type": "number"
                                    },
                                    "accelY": {
                                        "type": "number"
                                    },
                                    "accelZ": {
                                        "type": "number"
                                    }
                                },
                                "type": "object"
                            },
                            "templateId": {
                                "type": "string"
                            }
                        },
                        "type": "object"
                    }
                },
                "runAfter": {
                    "Initialize_Device_ID_variable": [
                        "Succeeded"
                    ]
                },
                "type": "ParseJson"
            },
            "Set_Device_ID_variable": {
                "inputs": {
                    "name": "DeviceID",
                    "value": "@body('Parse_Telemetry')?['deviceId']"
                },
                "runAfter": {
                    "Parse_Telemetry": [
                        "Succeeded"
                    ]
                },
                "type": "SetVariable"
            },
            "Switch_by_DeviceID": {
                "cases": {
                    "Occupancy": {
                        "actions": {},
                        "case": "Occupancy"
                    },
                    "Sensor_environment": {
                        "actions": {},
                        "case": "k1100"
                    }
                },
                "default": {
                    "actions": {}
                },
                "expression": "@variables('DeviceID')",
                "runAfter": {
                    "Set_Device_ID_variable": [
                        "Succeeded"
                    ]
                },
                "type": "Switch"
            }
        },
```

Selecciona **Save** (Guardar) y luego selecciona **Designer** (Diseñador) para ver la versión visual de la lógica que agregaste.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/36.png" /></div>

Selecciona **Switch by DeviceID** para expandir la acción. Luego selecciona **Sensor environment** y haz clic en **Add an action** (Agregar una acción).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/37.png" /></div>

En **Search connectors and actions** (Buscar conectores y acciones), escribe **Add rows to a dataset**. Selecciona la acción **Power BI - Add rows to a dataset**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/38.png" /></div>

Haz clic en **Sign in** (Iniciar sesión) y sigue las indicaciones para iniciar sesión en tu cuenta de Power BI. Una vez completado el inicio de sesión, en la acción **Add rows to a dataset**:

- Selecciona **In-store analytics - checkout** como el **Workspace** (espacio de trabajo).
- Selecciona **Sensor** como el **Dataset** (conjunto de datos).
- Selecciona **RealTimeData** como la **Table** (tabla).
- Haz clic en **Add new parameter** (Agregar nuevo parámetro) y luego selecciona los campos: **Timestamp**, **Light**, **Acceleration X**, **Acceleration Y**, **Acceleration Z** y **Sound**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_powerbi/40.png" /></div>

- Para el campo **Timestamp**, selecciona **enqueuedTime** de la lista de contenido dinámico.
- Para el campo **Light**, haz clic en **See more** (Ver más) junto a **Parse Telemetry**, luego selecciona **Light**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_powerbi/41.png" /></div>

- Para el campo **Acceleration X**, haz clic en **See more** junto a **Parse Telemetry** y selecciona **accelX**.
- Para el campo **Acceleration Y**, haz clic en **See more** junto a **Parse Telemetry** y selecciona **accelY**.
- Para el campo **Acceleration Z**, haz clic en **See more** junto a **Parse Telemetry** y selecciona **accelZ**.
- Para el campo **Sound**, haz clic en **See more** junto a **Parse Telemetry** y selecciona **Sound**.

Haz clic en **Save** para guardar los cambios. La acción **Sensor environment** se verá como en la siguiente imagen.

Luego selecciona la acción **Zone 2 environment**, y haz clic en **Add an action**.

En **Search connectors and actions**, escribe **Add rows to a dataset**.

La Logic App se ejecuta automáticamente. Para ver el estado de cada ejecución, navega a la página **Overview** (Resumen) de tu Logic App en el portal de Azure y selecciona **Runs history** (Historial de ejecuciones). Haz clic en **Refresh** (Actualizar) para ver la lista más reciente de ejecuciones.

## Crear un panel en Power BI

Ahora que tienes telemetría fluyendo desde tu aplicación de IoT Central a través del Event Hub, y tu Logic App analiza los mensajes y los agrega a un conjunto de datos de transmisión en Power BI, puedes crear un panel para visualizar la telemetría:

**Paso 1.** Inicia sesión en tu [cuenta de Power BI](https://app.powerbi.com/).

**Paso 2.** Selecciona **Workspaces** > **In-store analytics - checkout**.

**Paso 3.** Selecciona **+ New** > **Dashboard** (Nuevo > Panel).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_powerbi/50.png" /></div>

Escribe **Store analytics** como el nombre del panel, y selecciona **Create** (Crear).

### Agregar gráficos de líneas

Agrega gráficos de líneas para mostrar los datos de los sensores triaxiales integrados del Wio Terminal. Usa la siguiente información para crear las gráficas. Para agregar cada visualización, comienza seleccionando **Edit** > **Add a tile** (Editar > Agregar un elemento).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/51.png" /></div>

Selecciona **Custom Streaming Data** (Datos de transmisión personalizados) y luego haz clic en **Next** (Siguiente).

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_powerbi/52.png" /></div>

Configura el eje horizontal para mostrar la marca de tiempo (**timestamp**) y el eje vertical para mostrar los valores de los ejes **X**, **Y** y **Z**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/53.png" /></div>

Cuando comience a fluir la transmisión de datos, podrás ver el panel como un gráfico de líneas.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/55.png" /></div>

<!--### Add cards to show environmental data

### Add tiles to show checkout occupancy data-->

## Soporte técnico y discusión de producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
