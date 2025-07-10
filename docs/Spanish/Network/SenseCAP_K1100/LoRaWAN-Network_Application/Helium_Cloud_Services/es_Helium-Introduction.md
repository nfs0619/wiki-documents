---
description: Helium Introduction
title: Introducción a Helium
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Helium-Introduction
last_update:
  date: 06/12/2025
  author: Guillermo
---
# Introducción a Helium

En este capítulo, presentaremos los controles de la consola Helium que usamos para obtener una primera impresión de la consola Helium.

## Actualizable a Sensores Industriales

Con el controlador SenseCAP [S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el registrador de datos [S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), puedes convertir fácilmente tu Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con el prototipado, sino que también te ofrece la posibilidad de ampliar tu proyecto con la serie SenseCAP de robustos [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

La carcasa IP66, configuración por Bluetooth, compatibilidad con la red global LoRaWAN®, batería incorporada de 19 Ah y un potente soporte desde la APP hacen que el [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) sea la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad lumínica, CO2, CE y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

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

## Uso de Helium por primera vez

Si es la primera vez que usas Helium, por favor consulta esta sección para completar el registro de tu cuenta Helium y el uso de los componentes.

### Registro de una cuenta Helium

Ingresa al [sitio web de Helium](https://console.helium.com/), luego escribe el correo electrónico con el que quieres registrarte, haz clic en **Submit**. Helium enviará un correo de acceso a esa dirección para completar el registro.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/105.png" /></div>

Accede a tu correo, abre el correo enviado por Helium y regresa a la página de inicio de sesión de Helium para completar el registro. El método para futuros inicios de sesión será igual.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/106.png" /></div>

Cuando te conviertas en un nuevo miembro de Helium y tengas datos de dispositivos para enviar, recibirás **250 DATA CREDITS**. 1 DC = paquete de 24 Bytes = $0.00001 USD. Solo 250 DC pueden no ser suficientes para operar tu proyecto. Puedes elegir obtener más créditos (DC) desde Helium.

### Consola Helium - Flujos (Flows)

Flows es una vista visual centrada en los elementos clave de la Consola que permite a los usuarios entender instantáneamente la relación entre dispositivos, funciones e integraciones.

Cuando la configuración completa esté lista, cada elemento clave aparecerá en la columna Flow y los elementos se conectarán directamente mediante líneas discontinuas personalizadas.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/107.png" /></div>

En la esquina superior izquierda del espacio de trabajo hay una pestaña llamada **Nodes**. Los nodos son representaciones gráficas de los elementos de la Consola y para identificarlos rápidamente están codificados por colores. Los puntos de conexión se usan para crear relaciones entre nodos.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/108.png" /></div>

- Dispositivos: Los nodos de dispositivos representan el hardware que envía los paquetes. Como los dispositivos son la fuente de datos y las integraciones solo reciben datos, solo tienen un punto de conexión para las conexiones.

<div align="center"><img width={230} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/109.png" /></div>

- Etiquetas (Labels): Los nodos de etiquetas representan un grupo de dispositivos con características comunes.

<div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/110.png" /></div>

- Funciones: los usuarios pueden transformar y/o analizar los payloads antes de enviarlos a un endpoint. Las funciones pueden recibir datos de dispositivos y luego enviar datos a integraciones tras realizar acciones.

<div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/111.png" /></div>

- Integraciones: permiten que los dispositivos envíen datos a endpoints personalizados vía HTTP o MQTT.

<div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/112.png" /></div>

Las aristas (Edges) representan el flujo de datos desde nodos de dispositivos o etiquetas, moviéndose de izquierda a derecha. Las aristas usan puntos de conexión para crear relaciones entre nodos.

Los usuarios pueden controlar el flujo de datos de los dispositivos usando aristas (edges) para crear las siguientes conexiones desde dispositivos o grupos de dispositivos (vía etiquetas):

- hacia integraciones  
- hacia funciones  
- hacia funciones y luego a integraciones

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/113.png" /></div>

Podemos construir conexiones entre diferentes nodos arrastrando con el botón izquierdo del ratón y haciendo clic en los puntos de conexión en ambos lados de los nodos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/124.png" /></div>

El Inspector ofrece la capacidad de:

- Inspeccionar visualmente los detalles de un nodo  
- Realizar cambios comunes en la configuración del nodo  
- Acceder al nodo en otras áreas de la Consola para ediciones más completas

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/114.png" /></div>

Para acceder al Inspector simplemente haz clic en un nodo y aparecerán diferentes opciones para:

- Dispositivos o Etiquetas  
- Funciones  
- Integraciones  

La herramienta de depuración (Debug) de la Consola te permite examinar rápida y fácilmente los mensajes de los dispositivos. Esto facilita la verificación y solución de problemas sin necesidad de enviar los datos primero a un endpoint de aplicación. Por razones de seguridad y privacidad, la herramienta Debug no guarda los datos. En cambio, se acumulan los 40 eventos más recientes desde que se abre la ventana de Debug.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/115.png" /></div>

- Para más información sobre el modo Debug, visita [aquí](https://docs.helium.com/use-the-network/console/debug).

- Para más información sobre cómo configurar Flow en este tutorial, por favor consulta aquí.

### Consola Helium - Dispositivos

La consola Helium permite a los desarrolladores agregar dispositivos y obtener los identificadores del dispositivo para cargarlos en el firmware, de modo que el dispositivo se autentique e identifique en la red Helium.

Para agregar un dispositivo, ve a **Devices** y haz clic en el ícono **+ Add Device** en la parte superior derecha de la ventana.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/116.png" /></div>

:::note
Los usuarios de la consola Helium están limitados a una sola Organización y 10 dispositivos por cuenta.
:::

Cuando se te solicite, ingresa un nombre para tu dispositivo. Los nombres de dispositivo no necesitan ser únicos (ya que a cada dispositivo se le asignará un identificador único generado por la consola). **DevEUI**, **AppEUI** y **AppKey** se generan automáticamente al crear un nuevo dispositivo en la consola Helium. Sin embargo, puedes ingresar tu propio **DevEUI**, **AppEUI** y **AppKey** si tu dispositivo ya está provisionado con estas credenciales.

- Device EUI - Identificador de dispositivo final de 64 bits, a veces llamado Manufacturer EUI  
- App EUI - Identificador de aplicación de 64 bits  
- App Key - Clave AES de 128 bits, usada para asegurar la comunicación entre el dispositivo y la red  

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/117.png" /></div>

Una vez agregado, verás una vista consolidada con todos los detalles de tu dispositivo, así como el método de activación (actualmente solo se soporta OTAA) y los canales LoRaWAN® US usados por la red Helium (que siempre serán la subbanda 2).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/118.png" /></div>

:::note
Este proceso inicial de unión puede tomar hasta 20 minutos dependiendo de:

- cuándo se agrega esta transacción (agrupada con otras) a la blockchain  
- el desempeño general de la blockchain  

Después de la unión inicial, futuras reconexiones del mismo dispositivo serán mucho más rápidas.
:::

- Para más detalles sobre dispositivos Helium, consulta [aquí](https://docs.helium.com/use-the-network/console/migrating-devices).

- Para información sobre cómo agregar dispositivos Grove - Wio-E5 a Helium Console, consulta [aquí](#jump1).

### Consola Helium - Funciones

Con la función **Decoder**, los usuarios pueden transformar y/o analizar un *payload* bruto antes de que se envíe a un endpoint.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/119.png" /></div>

Cuando una función Decoder se aplica a un dispositivo o integración, el código de la función se ejecuta sobre el *payload* enviado por el dispositivo. La función Decoder puede escribirse usando código JavaScript personalizado proporcionado por el usuario o seleccionarse entre decodificadores preconstruidos (actualmente Browan Object Locator y Cayenne LPP).

Los decodificadores de la consola son compatibles con los decodificadores de The Things Network (TTN), que ya están disponibles para una gran variedad de dispositivos.

Para comenzar a crear una nueva función dentro de Helium Console, selecciona **Functions** en el menú lateral izquierdo. Luego crea una nueva función haciendo clic en el icono **+ Add New Function**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/120.png" /></div>

Nombra tu nueva función, selecciona "Decoder" como tipo de función y "Custom Script" como formato si quieres ingresar tu propio script, o elige uno de los decodificadores predefinidos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/121.png" /></div>

Luego debemos ingresar el JavaScript que decodificará nuestros *payloads*. El validador de scripts te permite probar fácilmente entradas en formato hexadecimal para asegurarte de que tu script funcionará correctamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/122.png" /></div>

- Además de proporcionar un decodificador personalizado, hay una lista creciente de funciones creadas por la comunidad que puedes encontrar [aquí](https://github.com/helium/console-decoders).

- Para más información sobre cómo crear y adjuntar funciones, mira nuestro video de Tips y Trucos [aquí](https://youtu.be/UNUOLbIKXww).

- Cómo escribir el decodificador personalizado para cada sensor en este tutorial lo puedes encontrar [aquí].

### Consola Helium - Integraciones

Las integraciones permiten que los dispositivos se conecten a aplicaciones en la nube preconfiguradas o envíen datos directamente por HTTP o MQTT.

Para agregar una nueva integración, ve a la página **Integrations** usando la navegación lateral izquierda, haz clic en **+ Add New Integration** y luego selecciona una de las integraciones disponibles.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/123.png" /></div>

Un número indica cuántas integraciones han sido añadidas.

- Para un video explicativo sobre cómo usar Integrations, revisa nuestro video de Tips y Trucos [aquí](https://youtu.be/lnERw1f7TGE).

- Cómo agregar la integración de Azure IoT Hub en este tutorial lo puedes encontrar [aquí](https://wiki.seeedstudio.com/Integrate-into-Azure-IoT-Hub/).

Por favor, continúa con el siguiente paso del tutorial [Conectando a Helium](https://wiki.seeedstudio.com/Connecting-to-Helium/).

<table align="center">
  <tbody><tr>
      <td align="cent er"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/helium.png" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Conectándose a Helium</strong><br /><br />Esta sección describe cómo configurar Helium para que los datos del sensor puedan subirse y mostrarse correctamente en Helium.<br /><br /><a href="https://wiki.seeedstudio.com/Connecting-to-Helium">Comencemos &gt;</a></td>
    </tr></tbody></table>

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

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
