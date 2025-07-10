---
description: SenseCAP & Node-RED to Twilio
title: Conexión de SenseCAP & Node-RED a Twilio
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/K1100_SenseCAP_to_twilio
last_update:
  date: 06/13/2025
  author: Guillermo
---

# Conectando SenseCAP a Twilio vía Node-RED

**SenseCAP K1100 - El Kit Prototipo de Sensores** representa la concentración de Seeed Studio en la esencia de la comunicación LoRa® aplicada a productos de tecnología e inteligencia, para el despliegue y dominio más sencillo de aplicaciones LoRa® e IoT.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/banner.png" /></div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products)

## Actualizable a Sensores Industriales

Con el controlador SenseCAP [S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el registrador de datos [S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de ampliar tu proyecto con la serie SenseCAP de robustos [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

La carcasa IP66, configuración por Bluetooth, compatibilidad con la red global LoRaWAN®, batería integrada de 19 Ah y potente soporte desde la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad lumínica, CO2, CE y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

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

## Twilio

Twilio es una plataforma de interacción con clientes utilizada por cientos de miles de empresas y más de diez millones de desarrolladores en todo el mundo para crear experiencias únicas y personalizadas para sus clientes.

Twilio es conocido por democratizar canales como voz, texto, chat, video y correo electrónico a través de APIs, facilitando que cualquier organización construya interacciones significativas con los clientes en los canales que prefieren.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/1.jpg" alt="pir" width={700} height="auto" /></p>

Esta sección usará el kit SenseCAP K1100 así como la consola SenseCAP y Node-RED para completar la tarea de activar un envío de mensaje Twilio bajo ciertas condiciones.

Si no has instalado o no sabes qué es Node-RED, por favor consulta [Tutoriales de Node-RED & SenseCAP](https://wiki.seeedstudio.com/K1100_sensecap_node-red/).

## Crear Nodo MQTT

**Paso 1.** Iniciar Node-RED

Inicia Node-RED escribiendo el comando `node-red` en la terminal, luego abre un navegador e ingresa la dirección **<http://localhost:1880>** en la barra de direcciones para acceder al editor de Node-RED.

**Paso 2.** Crear Nodo MQTT

Usamos el nodo **Network -> mqtt in** y configuramos MQTT con el formato de la API de SenseCAP como se indica en el [tutorial anterior](https://wiki.seeedstudio.com/K1100_sensecap_node-red/#mqtt-node).

- Servidor: openstream.api.sensecap.seeed.cc  
- Puerto: 1883  
- Protocolo: MQTT V3.1.1  
- ID de Cliente: El formato es `org-<Organization ID>-<Random ID>`  
  - `<Organization ID>` Tu ID de organización. Lo obtuviste en la sección [Obtener la API de SenseCAP](/K1100_sensecap_node-red#get-the-sensecap-api).  
  - `<Random ID>` Usa un número o letras minúsculas generados aleatoriamente.  

- Formato del tópico: `/device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>`

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

**Paso 3.** Validar nodos MQTT

Una vez configurado, por favor haz clic en el botón **Deploy** en la esquina superior derecha para comprobar si la configuración fue exitosa. Si está todo correctamente rellenado, aparecerá la palabra **Connected**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/1.png" /></div>

## Configurar Twilio

**Paso 1.** Regístrate o inicia sesión en Twilio

Si ya te has registrado en Twilio, por favor inicia sesión en la [página de Twilio](https://www.twilio.com/login).

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/3.png" /></div>

Si no has usado o registrado una cuenta en Twilio, completa tu registro e inicia sesión [aquí](https://www.twilio.com/try-twilio).

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/2.png" /></div>

**Paso 2.** Obtener la información necesaria

Podemos probar usando un servicio gratuito que envía mensajes SMS al teléfono móvil que verificaste durante el registro.

Haz clic en **Get a trial phone number** en la pantalla principal.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/4.png" /></div>

Twilio generará automáticamente un número de teléfono Twilio para ti.

En la parte inferior de la pantalla principal, bajo **Account Info**, encontrarás lo que necesitamos para conectar con Twilio.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/5.png" /></div>

Por favor anota el **Account SID**, **Auth Token** y **My Twilio phone number**, que usaremos más adelante en Node-RED.

## Configurar Node-RED

**Paso 1.** Descargar el paquete de Twilio

Haz clic en la barra de menú superior derecha y selecciona **Settings**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/13.png" /></div>

Busca e instala **node-red-node-twilio** en la pestaña **Palettes -> Install**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/6.png" /></div>

Agrega el nodo **twilio out** desde la barra de almacenamiento a la izquierda, haz doble clic para entrar a la página de configuración, luego haz clic en el botón de editar para configurar el nodo **twilio out**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/7.png" /></div>

**Paso 2.** Editar nodo **twilio out**

Por favor, rellena los campos correspondientes con la información obtenida en la configuración previa de Twilio. Luego, haz clic en el botón **Add** en la esquina superior derecha.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/8.png" /></div>

Después, rellena el número de teléfono móvil que registraste en Twilio.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/9.png" /></div>

:::note
Ten en cuenta que debes agregar el prefijo "**+ código de país**" al número de teléfono móvil que ingreses aquí.
:::

**Paso 3.** Configurar el nodo función

El contenido del SMS puede definirse dentro del nodo función, y las condiciones para disparar el envío pueden ser reglas basadas en los datos reportados por la plataforma PaaS, todo esto puede personalizarse en el bloque función.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/18.png" /></div>

Arrastra un nodo función desde la barra de funciones a la izquierda, haz doble clic para entrar a la página de edición, y luego copia el código dentro del evento **On Message**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/17.png" /></div>

Por ejemplo, en esta sección, cuando se recibe un valor del sensor, el valor se envía al teléfono móvil, y el código podría ser algo así.

```javascript
{
    var payload = msg.payload;
    var topic = msg.topic;
    var strs = topic.split("/");
    var length = strs.length
    if (length >= 2) {
        var measurementId = strs[length - 1]
        var value = payload.value
        if (measurementId == 4100) {
            msg.payload = "CO2:" + value
        } else if (measurementId == 4103) {
            msg.payload = "soilmoisture:" + value
        } else if (measurementId == 4150) {
            msg.payload = "accelX:" + value
        } else if (measurementId == 4151) {
            msg.payload = "accelY:" + value
        } else if (measurementId == 4152) {
            msg.payload = "accelZ:" + value
        } else if (measurementId == 4192) {
            msg.payload = "sound:" + value
        } else if (measurementId == 4193) {
            msg.payload = "light:" + value
        } else if (measurementId == 4195) {
            msg.payload = "tvoc:" + value
        } else if (measurementId == 4097) {
            msg.payload = "temperature:" + value
        } else if (measurementId == 4098) {
            msg.payload = "humidity:" + value
        } else if (measurementId == 4175) {
            msg.payload = "AIdetection_1:" + value
        } else if (measurementId == 4176) {
            msg.payload = "AIdetection_2:" + value
        } else if (measurementId == 4177) {
            msg.payload = "AIdetection_3:" + value
        } else if (measurementId == 4178) {
            msg.payload = "AIdetection_4:" + value
        } else if (measurementId == 4179) {
            msg.payload = "AIdetection_5:" + value
        } else if (measurementId == 4180) {
            msg.payload = "AIdetection_6:" + value
        } else if (measurementId == 4181) {
            msg.payload = "AIdetection_7:" + value
        } else if (measurementId == 4182) {
            msg.payload = "AIdetection_8:" + value
        } else if (measurementId == 4183) {
            msg.payload = "AIdetection_9:" + value
        } else if (measurementId == 4184) {
            msg.payload = "AIdetection_10:" + value
        }
    }
    return msg;
}
```

:::note
¡Por favor, mantente atento al saldo de tu cuenta! El código anterior enviará un SMS diferente por cada sensor cada cinco minutos. ¡Esto puede agotar rápidamente tu saldo si usas el código directamente! Recomendamos programar para un sensor específico en lugar de enviar cada valor de sensor una vez.
:::

**Paso 4.** Implementar (Deploy)

Luego conectamos todos los nodos y hacemos clic en el botón **Deploy**, y si todo está correctamente configurado, el nodo **mqtt in** mostrará el estado **connected**.

Si deseas ver la información de registro de los datos, puedes agregar un nodo de depuración (**debug**) después del nodo función.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/10.png" /></div>

Una vez que el Wio Terminal se enciende y comienza a funcionar, enviará datos al servidor SenseCAP PaaS, y podremos revisar los datos en el registro de depuración de Node-RED.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/11.png" /></div>

Si todo funciona correctamente, también recibirás un mensaje de texto de Twilio con los valores del sensor.

## Solución de Problemas

> **P1: ¿Por qué no puedo encontrar la pestaña Palettes en Node-RED?**

**R:** Si no puedes encontrar la pestaña **Palettes** en la configuración, revisa tu terminal para ver si aparece un mensaje de error al iniciar Node-RED.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/11.png" /></div>

El escenario más común es que tu versión de `npm` sea demasiado antigua para iniciar el editor de Palettes.

Si ese es tu caso, ejecuta **PowerShell como administrador** e ingresa el siguiente comando para actualizar `npm`:

```sh
npm install -g npm
```

Luego solamente reinicia tu Node-RED.

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
