---
description: AWS IoT Platform Integrated
title: Integración de Plataforma AWS IoT
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Connect_AWS_via_helium
last_update:
  date: 06/12/2025
  author: Guillermo
---
# Conexión a AWS IoT Core mediante Helium

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Connect_AWS_via_Helium/AWS_IOT_Monitor.png" /></div>

## Actualización a Sensores Industriales

Con el [controlador SenseCAP S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), puedes convertir fácilmente los sensores Grove en sensores LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie de sensores industriales robustos [SenseCAP](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

La carcasa con certificación IP66, configuración vía Bluetooth, compatibilidad con redes LoRaWAN® a nivel global, batería integrada de 19 Ah y el potente soporte mediante APP convierten a la serie [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) en la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad lumínica, CO₂, conductividad eléctrica (EC) y una estación meteorológica 8 en 1. Prueba los más recientes dispositivos SenseCAP S210x para tu próximo proyecto industrial exitoso.

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

## Introducción a AWS IoT Core

AWS IoT Core proporciona los servicios en la nube que conectan tus dispositivos IoT con otros dispositivos y servicios en la nube de AWS. AWS IoT ofrece software para dispositivos que facilita la integración de tus dispositivos IoT en soluciones basadas en AWS IoT. Si tus dispositivos pueden conectarse a AWS IoT, AWS IoT puede conectarlos con los servicios en la nube que AWS ofrece.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Connect_AWS_via_Helium/what-is-aws-iot.png" /></div>

AWS IoT te permite seleccionar las tecnologías más adecuadas y actualizadas para tu solución. Para ayudarte a administrar y soportar tus dispositivos IoT en campo, AWS IoT Core soporta estos protocolos:

- MQTT (Message Queuing and Telemetry Transport)
- MQTT sobre WSS (Websockets Secure)
- HTTPS (Hypertext Transfer Protocol - Secure)
- LoRaWAN® (Long Range Wide Area Network)

AWS IoT Core es una plataforma potente que permite a los desarrolladores crear aplicaciones y servicios basados en dispositivos sobre la nube de AWS. Y esta integración a través de Helium Console automatiza la complejidad de conectar de forma segura tus dispositivos a AWS IoT Core.

:::note
Es posible que debas pagar por el uso de AWS IoT Core para experimentar todo el contenido de este tutorial. Puedes consultar una lista detallada de pagos y costos aproximados [aquí](https://calculator.aws/#/estimate).

Basado en la frecuencia de envío del código que proporcionamos (envío de datos aproximadamente cada 15 segundos), se enviarán cerca de 178,560 mensajes en un mes, con un tamaño de mensaje de 3 a 4 KB aproximadamente, y un costo mensual aproximado de 0.18 USD.
<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/K1100/66.png"/></div>
:::

## Registro en AWS IoT Core

Por favor, ingresa al [sitio web de AWS IoT Core](https://portal.aws.amazon.com/billing/signup#/start/email) y crea una cuenta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/45.png" /></div>

Llena el formulario con tu correo electrónico y un nombre de usuario. Recibirás un correo electrónico de AWS con un código de verificación de seis dígitos necesario para completar el registro.

Introduce el código de verificación y la cuenta quedará registrada. Luego inicia sesión en AWS IoT Core con el correo que usaste para el registro.

Después de iniciar sesión, deberás completar información personal como contraseña y datos de contacto. También se te pedirá vincular una tarjeta de crédito para verificar tu identidad.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/46.png" /></div>

Cuando ingreses a la consola de AWS IoT Core, selecciona el **usuario Root** para iniciar sesión.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/48.png" /></div>

## Crear acceso a AWS IoT Core

Crea un nuevo usuario con permisos limitados que esta integración utilizará en AWS.

1. Abre la [Consola de AWS](https://console.aws.amazon.com/).

2. Haz clic en el menú **Servicios** en la esquina superior izquierda, ve a **Seguridad, Identidad y Cumplimiento** y luego haz clic en **IAM**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/47.png" /></div>

Ahora vamos a crear un nuevo **Usuario**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/49.png" /></div>

Configura el nombre de usuario y selecciona solo **Clave de acceso - Acceso programático**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/50.png" /></div>

En la siguiente página, selecciona **Adjuntar políticas existentes directamente**, escribe **AWSIoTConfigAccess** en el cuadro de **Filtrar políticas** y marca la casilla a la izquierda de la fila.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/55.png" /></div>

En las demás páginas dejamos los valores por defecto o vacíos y simplemente seguimos haciendo clic en **Siguiente** en la esquina inferior derecha.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/51.png" /></div>

Ahora adjuntamos una política al usuario recién creado que define qué permisos tiene.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/52.png" /></div>

:::note
Asegúrate de registrar y almacenar estas claves de forma segura, ¡ya que no tendrás otra oportunidad para acceder a ellas!
:::
   <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/K1100/56.png" /></div>

## Añadir la integración de AWS IoT Core en Helium

Podemos regresar a la [consola de Helium](https://console.helium.com/integrations) y crear la integración de AWS IoT Core con Helium.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/43.png" /></div>

Haz clic en **Add Integration** en la nueva página.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/44.png" /></div>

Completa la integración Helium AWS IoT Core con la **Access Key** y **Secret Key** respectivamente, que se generaron en el apartado de **Crear acceso a AWS IoT Core**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/57.png" /></div>

En Región, debes ingresar el mismo código de región que la dirección donde se encuentra el servidor AWS IoT Core. Esto se encuentra en la esquina superior derecha de la consola AWS IoT Core, junto al nombre de usuario.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/K1100/61.png" /></div>

El área resaltada puede ser ajustada por el usuario. Aquí, por ejemplo, seleccioné la región donde está el servidor como **US East (N. Virginia)** y el código de región como **us-east-1**. Correspondientemente, en la Región de Helium debo llenar **us-east-1**.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/K1100/62.png" /></div>

El campo **Topic** es el tópico MQTT de AWS IoT al que esta integración publicará los mensajes uplink desde los dispositivos.

Finalmente, asignamos un nombre a nuestra nueva integración y hacemos clic en **Create Integration**. Tu nueva integración ya está lista para usarse.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/58.png" /></div>

## Conectando integraciones a dispositivos

Ahora, usa la interfaz de arrastrar y soltar en la consola Helium para conectar el dispositivo con la función (Decoder) y con AWS IoT Core como se mostró [anteriormente](https://wiki.seeedstudio.com/Helium-Introduction/#helium-console-flows).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/59.png" /></div>

En este punto, sigue los [pasos anteriores](https://wiki.seeedstudio.com/Connecting-to-Helium/#upload-code-send-data-to-helium) para subir el código nuevamente, y el Wio Terminal se reconectará a Helium y enviará los datos.

También podemos verificar el éxito del envío de datos revisando la información devuelta por el monitor serial.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/24.jpg" /></div>

En la consola de AWS IoT Core, busca **IoT Core** para acceder a la interfaz de gestión de datos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/60.png" /></div>

- En el panel de **Monitor** puedes ver y configurar varios paneles de detección de datos para visualizar mejor cómo se están recibiendo los datos del sensor.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Connect_AWS_via_Helium/Final_1.png" /></div>

- En **AWS IOT core -> All devices -> Things** puedes ver la información de ID del dispositivo actual y también el estado de actividad de los datos en **AWS IOT core -> All devices -> Things -> Activity**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/63.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Connect_AWS_via_Helium/Final_4.png" /></div>

- Los mensajes uplink de los datos puedes verlos en **AWS IOT core -> MQTT test client**.

En la pestaña **Subscribe to a topic**, ingresa el nombre del tópico para suscribirte al tópico en el que tu dispositivo publica. Para la app de ejemplo para comenzar, suscríbete a **#**, que se suscribe a todos los tópicos de mensajes.

La página de registro de mensajes del tópico, **#** se abre y **#** aparece en la lista de **Subscriptions**. Si el dispositivo que configuraste en Configura tu dispositivo está ejecutando el programa de ejemplo, deberías ver los mensajes que envía a AWS IoT en el registro de mensajes **#**. Las entradas del registro aparecerán debajo de la sección Publish cuando AWS IoT reciba mensajes del tópico suscrito.

Los mensajes publicados a los tópicos suscritos aparecen en el registro de mensajes a medida que se reciben, mostrando primero el mensaje más reciente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/64.png" /></div>

El mensaje recibido es similar al que se muestra abajo. Los datos que nos interesan generalmente son el contenido que sigue al **payload**, que muestra los valores de los sensores.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/65.png" /></div>

En este punto, hemos completado toda la integración de Helium en AWS IoT Core. Si quieres hacer más con tus datos a través de AWS IoT Core, puedes consultar el [Centro de documentación de AWS IoT Core](https://docs.aws.amazon.com/iot/index.html) para seguir aprendiendo en profundidad.

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para cubrir distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
