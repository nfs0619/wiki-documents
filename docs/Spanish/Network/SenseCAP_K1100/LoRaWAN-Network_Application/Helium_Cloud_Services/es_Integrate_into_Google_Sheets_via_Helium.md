---
description: Google Sheets Integrated
title: Integración de Google Sheets
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Integrate_into_Google_Sheets_via_Helium
last_update:
  date: 06/12/2025
  author: Guillermo
---
# Integración con Google Sheets vía Helium

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/83.jpg" /></div>

Google Sheets es una aplicación web que permite a los usuarios crear, actualizar y modificar hojas de cálculo, y compartir los datos en línea en tiempo real.

La aplicación de hojas de cálculo en línea Google Sheets permite crear, editar y formatear hojas de cálculo para organizar y analizar información. Google Sheets suele compararse con Microsoft Excel, ya que ambas aplicaciones se usan para propósitos similares. Google Sheets es esencialmente la versión en la nube de Google con las funciones básicas de Microsoft Excel.

Gracias a las capacidades de integración de Helium, podemos guardar fácilmente los datos de sensores vía Google Sheets y hacer análisis simples de datos de manera sencilla.

## Actualizable a Sensores Industriales

Con el controlador SenseCAP [S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el registrador de datos [S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de robustos [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

La carcasa IP66, la configuración vía Bluetooth, la compatibilidad con la red global LoRaWAN®, la batería integrada de 19 Ah y el potente soporte desde la APP hacen que el [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) sea la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad lumínica, CO2, CE y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

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

## Crear un formulario de Google

Si no te has registrado con una cuenta de Google antes de comenzar este tutorial, por favor crea tu cuenta de Google [aquí](https://accounts.google.com/signup/v2/webcreateaccount?biz=false&flowName=GlifWebSignIn&flowEntry=SignUp&hl=en-GB) primero.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/67.png" /></div>

Una vez que hayas completado el registro de tu cuenta, inicia sesión en la [página de Google Forms](https://docs.google.com/forms/u/0/). Luego, simplemente crea un nuevo formulario de Google.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/68.png" /></div>

Recomendamos configurar las preguntas como "Respuesta corta".

Aquí, crearé una tabla usando el Módulo Vision AI como ejemplo. Esta tabla debe tener dos conjuntos de datos, uno para el número de personas detectadas y otro para el nivel de confianza.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/69.png" /></div>

:::note
    Debe seleccionarse "Respuesta corta" para cada nueva etiqueta de sensor creada.
:::

Ve a la pestaña de respuestas y dile al formulario que quieres que los resultados se envíen a Google Sheets haciendo clic en el botón de Google Sheets.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/70.png" /></div>

Simplemente ingresa el título del formulario de Google en la ventana emergente y haz clic en el botón **Crear** en la parte inferior derecha.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/71.png" /></div>

Asegúrate de que se hayan creado las columnas requeridas.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/72.png" /></div>

## Hacer el formulario público

Regresa a la página de configuración de nuestro formulario y haz clic en el botón **Enviar** en la esquina superior derecha para obtener el enlace para compartir el formulario.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/73.png" /></div>

Obtendrás un enlace para compartir como este:

`https://docs.google.com/forms/d/e/1FAIpQLSce9ozQMVwdgIYXYyutRPeE5opGba6724QGEN_I_dvoEH_Muw/viewform?usp=sf_link`

Solo necesitamos el ID del formulario, por lo que vamos a eliminar el prefijo `https://docs.google.com/forms/d/e/` y el sufijo `/viewform?usp=sf_link`. Nos quedará una cadena larga sin barras.

`1FAIpQLSce9ozQMVwdgIYXYyutRPeE5opGba6724QGEN_I_dvoEH_Muw`

Por favor, guarda este ID, que será usado en la integración con Helium.

## Agregar integración de Google Sheets en Helium

Regresa a Helium y agrega una integración de Google Sheets en la consola. Ve a **Integrations** en el menú lateral izquierdo. Selecciona la integración que quieres agregar — en este caso, la integración de Google Sheets como se muestra abajo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/74.png" /></div>

Haz clic en **Add Integration** en la página nueva.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/75.png" /></div>

En la página nueva, ingresa el ID del formulario que obtuvimos arriba en el campo correspondiente y haz clic en **Get Google Form Fields** para verificar si el ID es correcto. Si después de hacer clic puedes obtener el contenido de las etiquetas en las columnas del formulario, el enlace es correcto.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/76.png" /></div>

Haz clic en **Generate Function Body w/ Fields Above** en la parte inferior y Helium generará automáticamente el decodificador requerido para nosotros.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/77.png" /></div>

:::tip
En este punto, no es necesario que apresures en hacer clic en el botón Add Integration a la derecha, ya que la integración todavía necesita una pequeña modificación para acomodar los valores de los sensores que hemos enviado.
:::


## Crear tu decodificador

Hemos preparado el código para el decodificador completo requerido para importar todos los sensores del kit a Google Sheets, por favor revisa la tabla a continuación.

Antes de usar el código del decodificador para el sensor correspondiente, asegúrate de haber seguido el tutorial anterior para crear y compartir el formulario de Google. Y si quieres usar el código que proporcionamos directamente, **la etiqueta del sensor en tu formulario también debe coincidir con el código**.

<table align="center">
  <tbody><tr>
      <th>Tipo de Sensor</th>
      <th>Link de Descarga</th>
    </tr>
    <tr>
      <td align="center">Sensor de luz incorporado en Wio Terminal</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/Google-sheets-decoder/light.js">Descarga</a></td>
    </tr>
    <tr>
      <td align="center">Sensor IMU incorporado en Wio Terminal</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/Google-sheets-decoder/IMU.js">Descarga</a></td>
    </tr>
    <tr>
      <td align="center">Sensor de humedad de suelo</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/soil-moisture-data-decoder.js">Descarga</a></td>
    </tr>
    <tr>
      <td align="center">Sensor de gases VOC y eCO2 (SGP30)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/Google-sheets-decoder/sgp30.js">Descarga</a></td>
    </tr>
    <tr>
      <td align="center">Sensor de temperatura y humedad (SHT40)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/Google-sheets-decoder/sht40.js">Descarga</a></td>
    </tr>
    <tr>
      <td align="center">Módulo Vision AI</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/Google-sheets-decoder/visionai.js">Descarga</a></td>
    </tr>
  </tbody></table>

:::note
El decodificador usado por Google Forms no puede utilizarse con el decodificador proporcionado en la [Conexión a Helium](https://wiki.seeedstudio.com/Connecting-to-Helium/#write-decoders-function-for-different-sensors).
:::

Continuando con el paso anterior, necesitamos copiar y reemplazar el área de código en Helium con el codec del sensor que estás usando, y luego hacer clic en **Add Integration** en el lado derecho.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/78.png" /></div>

Por supuesto, no olvides que también debemos añadir la integración del decodificador y Google Forms al **Flow**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/79.png" /></div>

## Subir código para enviar datos a Helium

Por favor, sigue las instrucciones en el tutorial de [Conexión a Helium](https://wiki.seeedstudio.com/Connecting-to-Helium/#upload-code-send-data-to-helium) para subir el código que envía los valores de tu sensor a Helium.

Una vez que los datos comiencen a enviarse, podrás ver la actualización en vivo de los datos desde Google Sheets.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/81.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/84.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/85.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/86.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/87.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/88.png" /></div>

También puedes hacer como yo hice arriba: agregar varios estilos de tabla en Google Sheets para que sea más intuitivo y fácil ver o comprender tendencias en tus datos.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/K1100/80.png" /></div>

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
