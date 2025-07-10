---
description: Getting Started with Microsoft Azure IoT Central
title: Conectar Wio Terminal a Microsoft Azure IoT Central
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Connect-Wio-Terminal-to-Azure-IoT-Central
last_update:
  date: 06/17/2025
  author: Guillermo
---
# Conectar Wio Terminal a Microsoft Azure IoT Central

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_send.png" alt="pir" width={1200} height="auto" /></p>

## Actualizable a Sensores Industriales

Con el [controlador SenseCAP S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), puedes convertir fácilmente el sistema Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de robustos [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

La carcasa con clasificación IP66, la configuración vía Bluetooth, la compatibilidad con redes LoRaWAN® globales, la batería integrada de 19 Ah y el sólido soporte desde la APP hacen de la [serie SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad lumínica, CO2, conductividad eléctrica (EC), y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

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

## Introducción

En este tutorial, te guiaremos paso a paso para conectar el **Wio Terminal** a **Microsoft Azure IoT Central** y enviar datos de telemetría desde los sensores/hardware integrados en el Wio Terminal, como el acelerómetro de 3 ejes, el sensor de luz y los 3 botones, hacia Microsoft Azure IoT Central. Luego podrás visualizar los datos del sensor en paneles interactivos. Además, podrás usar Azure IoT Central para controlar hardware, como activar el zumbador incorporado del Wio Terminal.

Microsoft Azure IoT Central admite los protocolos **HTTP, MQTT y AMQP** para la comunicación. En este tutorial, usaremos el **protocolo MQTT**.

### ¿Qué es Microsoft Azure?

[Microsoft Azure](https://azure.microsoft.com) es la plataforma pública de computación en la nube de Microsoft. Puedes usar Azure para desarrollar, probar, implementar y administrar aplicaciones y servicios a través de centros de datos administrados por Microsoft.

Además, ofrece una amplia gama de servicios en la nube, incluyendo cómputo, análisis, almacenamiento y redes. Microsoft Azure ofrece software como servicio (SaaS), plataforma como servicio (PaaS), infraestructura como servicio (IaaS) y servicios sin servidor (**serverless**). Por último, es compatible con muchos lenguajes de programación, herramientas y frameworks.

### ¿Qué es Microsoft Azure IoT?

[Microsoft Azure IoT](https://azure.microsoft.com/en-us/overview/iot) es un conjunto de servicios en la nube administrados por Microsoft que permiten conectar, monitorear y controlar miles de millones de dispositivos IoT. Incluye seguridad y sistemas operativos para dispositivos y equipos, junto con herramientas de datos y análisis que ayudan a las empresas a desarrollar, implementar y administrar aplicaciones IoT.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/Azure_IoT.png" alt="pir" width={1200} height="auto" /></p>

### ¿Qué es Microsoft Azure IoT Central?

[Microsoft Azure IoT Central](https://azure.microsoft.com/en-us/services/iot-central) es una solución SaaS (software como servicio) IoT completamente administrada y de alcance global, que facilita conectar, monitorear y administrar dispositivos IoT a escala. Es altamente segura, escala con tu negocio a medida que crece, asegura que tus inversiones sean repetibles e integra con tus aplicaciones empresariales existentes. También actúa como puente entre tus aplicaciones empresariales y los datos IoT. Finalmente, ofrece gestión centralizada para reconfigurar y actualizar tus dispositivos.

### ¿Qué es IoT Plug and Play?

[IoT Plug and Play](https://docs.microsoft.com/en-us/azure/iot-pnp) permite a los desarrolladores integrar dispositivos inteligentes en sus soluciones sin configuración manual. En el núcleo de IoT Plug and Play hay un modelo de dispositivo que este utiliza para anunciar sus capacidades a una aplicación compatible.

Contiene:

- **Propiedades**: representan el estado de solo lectura o escritura de un dispositivo u otra entidad.  
- **Telemetría**: datos enviados por un dispositivo.  
- **Comandos**: describen funciones u operaciones que se pueden ejecutar en un dispositivo.

Los dispositivos certificados con IoT Plug and Play eliminan la necesidad de configurar manualmente plantillas, funciones o interfaces en Azure IoT Central.

### Dispositivos Certificados IoT Plug and Play

Los dispositivos certificados con IoT Plug and Play están listados en el [Catálogo de Dispositivos Certificados de Azure](https://devicecatalog.azure.com) y tienen la insignia correspondiente.

El [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) es un dispositivo certificado con IoT Plug and Play.

<p style={{textAlign: 'center'}}><a href="https://devicecatalog.azure.com/devices/8b9c5072-68fd-4fc3-8e5f-5b15e3a20bd9"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Wiki.jpg" alt="pir" width={650} height="auto" /></a></p>

Para obtener la certificación IoT Plug and Play, es necesario cumplir con ciertos criterios, entre ellos publicar un modelo en **DTDL (Lenguaje de Definición de Gemelos Digitales)** que defina las capacidades del dispositivo en el repositorio [Azure/iot-plugandplay-models (DMR)](https://github.com/Azure/iot-plugandplay-models) en GitHub.

Esto permite que los servicios en la nube que usan dispositivos certificados IoT Plug and Play aprendan sobre sus capacidades directamente desde ese repositorio.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/PnP_devices.png" alt="pir" width={850} height="auto" /></p>

## Conectando el Wio Terminal a Microsoft Azure IoT Central mediante MQTT

Como se explicó anteriormente, usaremos el protocolo **MQTT** para la comunicación entre el **Wio Terminal** y **Microsoft Azure IoT Central**. Sin embargo, también puedes usar el puente HTTP si lo prefieres o si tu caso de uso lo requiere.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_send.png" alt="pir" width={1200} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_receive.png" alt="pir" width={1200} height="auto" /></p>

### Configuración de Microsoft Azure IoT Central

Primero, debes visitar Microsoft Azure IoT Central, iniciar sesión con tu cuenta de Microsoft y crear una nueva aplicación para tu proyecto.

**Paso 1.** Inicia sesión en Azure IoT Central.

Visita el sitio oficial de [Azure IoT Central](https://apps.azureiotcentral.com/home), haz clic en **Build (Crear)** desde el menú de navegación a la izquierda, y luego en **Custom apps (Aplicaciones personalizadas)**.

Si aún no has iniciado sesión en Azure IoT Central, se te pedirá que te registres o inicies sesión en este momento.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/1.png" /></div>

**Paso 2.** Rellena el campo **Application name (Nombre de la aplicación)** y selecciona **Standard 0** bajo el **Pricing plan (Plan de precios)**. La URL de la aplicación se generará automáticamente al completar el nombre. En este ejemplo, completaremos esta tarea con el menor costo posible.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/2.png" /></div>

:::note
Si eres un nuevo usuario de Azure IoT Central, se recomienda seleccionar el plan **Free (Gratis)** para evitar cargos.
:::
    <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_azure_central/9.png" /></div>

**Paso 3.** Crear una plantilla de dispositivo

Haz clic en **Device templates (Plantillas de dispositivo)** en la barra lateral izquierda.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/2.png" /></div>

Selecciona **Wio Terminal** como nuestra plantilla.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/3.png" /></div>

Luego, haz clic en **Create (Crear)**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/4.png" /></div>

Se creará una plantilla lista para usar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/5.png" /></div>

**Paso 5.** Crear un dispositivo

Haz clic en **Devices -> Seeed Wio Terminal** en el menú lateral izquierdo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/6.png" /></div>

Haz clic en **New (Nuevo)**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/7.png" /></div>

Haz clic en el botón **Create (Crear)** para completar la creación del dispositivo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/8.png" /></div>

Una vez creado el dispositivo, verás el que acabamos de crear en la sección **Device (Dispositivo)**. Haz clic en el dispositivo y luego haz clic en el botón **Connect (Conectar)** en la esquina superior izquierda.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/9.png" /></div>

Aquí obtendrás información importante.

```
ID scope
Device ID
Primary key
```

Toma nota de esta información, ya que la utilizaremos en los siguientes pasos.

### Configurar Wio Terminal

**Paso 1.** Descarga el firmware a tu computadora

Nuestra segunda versión de firmware, SenseCraft, es la forma más sencilla de conectar con Azure IoT Central.

En la sección de **Último lanzamiento**, haz clic en **SenseCraft-vx.x.uf2** para descargar el archivo .uf2.

<div>
  <p style={{}}><a href="https://github.com/Seeed-Studio/SenseCraft/releases" target="_blank" /></p><div align="center"><a href="https://github.com/Seeed-Studio/SenseCraft/releases" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**Paso 2.** Cargar el firmware al Wio Terminal

Conecta el Wio Terminal a tu computadora y enciéndelo. Luego, entra en **modo Bootloader** deslizando el interruptor de encendido más allá de la posición “ON”, suéltalo, vuelve a deslizar y suéltalo nuevamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" alt="pir" width={500} height="auto" /></p>

:::note
Una vez que el Wio Terminal esté en modo Bootloader, el LED azul comenzará a parpadear suavemente (de forma diferente al parpadeo normal).
:::

Abre el **Explorador de archivos** en tu PC y verás una nueva unidad externa llamada **Arduino**. Arrastra el archivo **.uf2** que descargaste anteriormente a esta unidad **Arduino**.

Ahora has subido correctamente el firmware al Wio Terminal.

**Paso 3.** Configuración de Wi-Fi y Azure IoT

Al utilizar el firmware **SenseCraft**, una unidad USB aparecerá automáticamente cuando conectes el Wio Terminal a la computadora.

:::note
Esto significa que la unidad USB aparece sin necesidad de presionar dos veces el interruptor lateral como se hacía antes.
:::

En este punto, verás un archivo llamado **config.txt** dentro de la unidad USB. Ábrelo con un editor de texto y añade la siguiente configuración:

```
SSID=WiFi_Name                        // Put your Wifi name here
PASSWORD=WiFi_Password                // Put your wifi password here          
ID_SCOPE=Default_ID_Scope             // Put your ID Scope here
DEVICE_ID=Device_ID                   // Put your device ID here
PRIMARY_KEY=Primary_Key               // Put your device Primary key here
```

Una vez completado lo anterior, guarda los cambios. Reinicia el Wio Terminal para que surtan efecto.

### Visualizar datos de telemetría en Microsoft Azure IoT Central

**Paso 1.** Conectar el Wio Terminal al Wi-Fi

Ingresa a la pestaña **Network** y selecciona **WiFi**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/51.png" /></div>

Ahora el dispositivo esperará a que se cargue la configuración.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/52.png" /></div>

Una vez que la configuración de WiFi ha sido leída, el dispositivo se conectará primero a la red WiFi y luego a Azure IoT Central. Si la conexión es exitosa, se mostrará lo siguiente:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/53.png" /></div>

**Paso 2.** Interpretar los datos del Wio Terminal

Es necesario modificar el estilo de la plantilla dentro de **Template** para visualizar correctamente los datos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/26.png" /></div>

Para adaptar el tipo de datos que entrega SenseCraft y lograr una presentación adecuada, llena los campos con base en la siguiente tabla:


| Nombre para mostrar | Nombre      | Tipo de capacidad | Tipo semántico |
|---------------------|-------------|-------------------|----------------|
| Aceleración X       | IMU0        | Telemetría        | Ninguno        |
| Aceleración Y       | IMU1        | Telemetría        | Ninguno        |
| Aceleración Z       | IMU2        | Telemetría        | Ninguno        |
| Luz                 | Light       | Telemetría        | Ninguno        |
| Sonido              | Sound       | Telemetría        | Ninguno        |
| Temperatura         | Temp_Humi0  | Telemetría        | Ninguno        |
| Humedad             | Temp_Humi1  | Telemetría        | Ninguno        |
| CO2                 | CO2_VOC0    | Telemetría        | Ninguno        |
| VOC                 | CO2_VOC1    | Telemetría        | Ninguno        |
| Humedad del suelo   | Soil        | Telemetría        | Ninguno        |
| Visión AI 1         | Vision0     | Telemetría        | Ninguno        |
| Visión AI 2         | Vision1     | Telemetría        | Ninguno        |
| Visión AI 3         | Vision2     | Telemetría        | Ninguno        |
| Visión AI 4         | Vision3     | Telemetría        | Ninguno        |
| Visión AI 5         | Vision4     | Telemetría        | Ninguno        |
| Visión AI 6         | Vision5     | Telemetría        | Ninguno        |
| Visión AI 7         | Vision6     | Telemetría        | Ninguno        |
| Visión AI 8         | Vision7     | Telemetría        | Ninguno        |
| Visión AI 9         | Vision8     | Telemetría        | Ninguno        |
| Visión AI 10        | Vision9     | Telemetría        | Ninguno        |

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/68.png" /></div>

Una vez que completes el formulario, haz clic en el botón **Save**.

Haz clic en **Overview** en el menú de navegación izquierdo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/16.png" /></div>

Despliega el menú **select a telemetry** y selecciona la telemetría que deseas visualizar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/70.png" /></div>

Haz clic en **Add tile** y verás que el panel de datos ha sido agregado al Dashboard de Azure IoT Central.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/71.png" /></div>

**Nota:** Puedes cambiar el tamaño o la visualización de los mosaicos según tu preferencia.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_azure_central/19.png" /></div>

Haz clic en **Save** y luego en **Publish**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/27.png" /></div>

Abre el panel de Azure IoT Central que configuraste previamente. Haz clic en **Devices** en el menú lateral. Verás **Seeed Wio Terminal** listado entre los dispositivos. Haz clic sobre él.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/14.png" /></div>

Haz clic en la entrada con el **nombre del dispositivo** que configuraste anteriormente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/23.png" /></div>

También puedes hacer clic en la pestaña **Raw data** para ver todos los datos de telemetría en tiempo real.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/28.png" /></div>

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
