---
description: SenseCAP & Node-RED Usage
title: Uso de SenseCAP & Node-RED
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/K1100_sensecap_node-red
last_update:
  date: 06/12/2025
  author: Guillermo
---

# Consola SenseCAP con Node-RED Guía Rápida

**SenseCAP K1100 - El Kit Prototipo de Sensores** representa a Seeed Studio concentrando la esencia de la comunicación LoRa® en productos de tecnología e inteligencia de borde, para facilitar al máximo el despliegue y dominio de aplicaciones LoRa® e IoT.

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/K1100/banner.png" /></div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products)

## Actualizable a Sensores Industriales

Con el [controlador SenseCAP S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con el prototipado, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de robustos [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

La carcasa IP66, configuración por Bluetooth, compatibilidad con la red global LoRaWAN®, batería integrada de 19 Ah y el potente soporte desde la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad luminosa, CO2, CE y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

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

**Node-RED** es una herramienta de programación para conectar dispositivos de hardware, APIs y servicios en línea de formas nuevas e interesantes.

Proporciona un editor basado en navegador que facilita el armado de flujos usando la amplia gama de nodos en la paleta, que pueden desplegarse en su entorno de ejecución con un solo clic.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/node-red.png" /></div>

Para facilitar a nuestros usuarios la conexión de datos desde la plataforma SenseCAP a diversas otras plataformas PaaS para un procesamiento de datos más profundo, haremos una serie de tutoriales para **SenseCAP & Node-RED**.

Este tutorial, el primero de la serie, te guiará en la instalación y uso de Node-RED y cómo llamar a la API backend de SenseCAP para conectar con Node-RED.

## Instalar Node.js®

Para instalar Node-RED localmente necesitarás una [versión soportada de Node.js](https://nodered.org/docs/faq/node-versions).

Descarga la última versión LTS 14.x de Node.js desde la página oficial [Node.js](https://nodejs.org/en/). Esta te ofrecerá la mejor versión para tu sistema.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100-nodered/1.png" /></div>

:::note
Ejecuta el archivo MSI descargado. Instalar Node.js requiere derechos de administrador local; si no eres administrador local, te pedirá la contraseña de administrador al instalar. Acepta los valores por defecto durante la instalación. Al finalizar, cierra cualquier terminal abierta y ábrela de nuevo para que se actualicen las variables de entorno.
:::
Si usas una computadora que no tiene ningún entorno de programación instalado, recomendamos marcar la casilla para instalar las herramientas necesarias durante la instalación de Node.js, esto te ahorrará muchos problemas posteriores.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100-nodered/2.png" /></div>

La forma más sencilla de instalar Node-RED es usando la herramienta de gestión de paquetes de Node, **npm**. Sin embargo, no recomendamos instalar Node-RED con npm 1.x, sino actualizar a la última versión **npm 2.x**.

:::note
En **Windows** (requiere Windows 10 o superior), usa el atajo **Win+R**, escribe `cmd` en la ventana emergente para abrir la terminal y ejecuta el siguiente comando.

Si usas **MacOS** o **Linux**, ejecuta el siguiente comando en la terminal y añade `sudo` al inicio si no eres usuario root.
:::

```sh
npm install -g npm@2.x
```

Una vez instalado, abre una ventana de comandos y ejecuta el siguiente comando para asegurarte de que Node.js y npm están instalados correctamente.

```sh
node --version && npm --version
```

Deberías recibir una salida similar a:

```sh
> v16.17.0
> 2.15.12
```

## Instalar Node-RED

Instalar Node-RED como módulo global añade el comando `node-red` a la ruta de tu sistema. Ejecuta lo siguiente en la ventana de comandos:

```sh
npm install -g --unsafe-perm node-red
```

Si Node-RED está instalado como paquete npm global, ejecuta directamente el comando node-red:

```sh
node-red
```

Esto mostrará el registro (log) de Node-RED en la terminal. Debes mantener la terminal abierta para que Node-RED siga funcionando.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100-nodered/3.png" /></div>

Esto te permitirá ver el editor de Node-RED en http://localhost:1880.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/4.png" /></div>

## <span id="jump1">Obtener la API de SenseCAP</span>

Antes de continuar con esta sección, asegúrate de haber vinculado tu dispositivo K1100 en la consola SenseCAP.

Inicia sesión en la [consola SenseCAP](https://sensecap.seeed.cc/portal/#/dashboard). En la barra desplegable a la derecha del nombre de usuario en la parte superior del tablero, encontrarás la **Información de la Organización**, por favor selecciónala.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/5.png" /></div>

En la página de Información de la Organización, puedes ver el **ID de la Organización**, que puedes anotar primero y lo usaremos en los pasos posteriores.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/6.png" /></div>

Luego, también necesitamos obtener la clave API para SenseCAP. Por favor, haz clic en **Seguridad -> Claves de acceso API** en el lado izquierdo del tablero. Luego crea una Clave de Acceso.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/11.png" /></div>

Haz clic en el **ID de API** que creaste y obtendrás sus **Claves de acceso API**, por favor anótalas por ahora, las usaremos en los pasos posteriores.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/7.png" /></div>

## Crear un Nodo HTTP

La ventana del editor consta de cuatro componentes:

- El encabezado en la parte superior, que contiene el botón de desplegar, el menú principal y, si la autenticación de usuario está habilitada, el menú de usuario.
- La [paleta](https://nodered.org/docs/user-guide/editor/palette) a la izquierda, que contiene los nodos disponibles para usar.
- El [espacio de trabajo](https://nodered.org/docs/user-guide/editor/workspace) principal en el centro, donde se crean los flujos.
- La [barra lateral](https://nodered.org/docs/user-guide/editor/sidebar) a la derecha.

Sigue los enlaces anteriores para aprender más sobre cada componente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/12.png" /></div>

En este ejemplo, te mostraremos cómo usar nodos MQTT para mostrar los valores del sensor recibidos por SenseCAP. Antes de eso, aprendamos a entender los nodos que usaremos más en el futuro.

### Nodo http

#### Nodo http in

El nodo **http in** se puede usar para crear servicios web.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/k1100-nodered/13.png" /></div>

Arrastra el nodo al espacio de trabajo y haz doble clic en él para acceder a la página de configuración del nodo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/14.png" /></div>

Aquí, necesitamos establecer una URL para el servicio web que has creado, de modo que puedas acceder a la página web creada a través de la dirección `http://localhost:1880/<URL>`.

#### Nodo http response

El nodo **http response** envía la respuesta de vuelta a la solicitud recibida desde el nodo de entrada HTTP.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/k1100-nodered/15.png" /></div>

Generalmente, no es necesario configurarlo por separado, simplemente arrástralo directamente al espacio de trabajo para usarlo.

#### Nodo template

El nodo template puede establecer propiedades basadas en la plantilla proporcionada.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/k1100-nodered/17.png" /></div>

Usaremos este nodo y un lenguaje HTML sencillo para completar la configuración del contenido que se mostrará en nuestra página web.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/18.png" /></div>

Por ejemplo, queremos mostrar "¡Hola Mundo!".

<div>
  ```html
  <h1>Hello World!</h1>
  ```
</div>

Finalmente, conectamos el **http in** al **template**, y conectamos el **template** al **http response**. Luego haz clic en el botón **deploy** en la esquina superior derecha, para que se cree una página web sencilla, que es el paso básico de operación de Node-RED.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/19.png" /></div>

En este ejemplo, creamos una URL para datos del sensor, así que después del despliegue, podemos ingresar `http://localhost:1880/sensor_data` en la barra de direcciones del navegador para acceder a la página que acabamos de crear.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100-nodered/20.png" /></div>

## Crear un nodo MQTT

En esta sección, describiremos cómo obtener la información de datos de SenseCAP a través del nodo MQTT.

### Nodo debug

Muestra las propiedades seleccionadas del mensaje en la pestaña lateral de depuración y, opcionalmente, en el registro de ejecución. Por defecto muestra `msg.payload`, pero puede configurarse para mostrar cualquier propiedad, el mensaje completo o el resultado de una expresión JSONata.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/k1100-nodered/23.png" /></div>

### Nodo mqtt

Se conecta a un broker MQTT y se suscribe a mensajes del tema especificado.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/k1100-nodered/26.png" /></div>

**Paso 1.** Agrega un nuevo nodo mqtt-broker.

Arrastra un nodo **mqtt in**, haz doble clic para entrar en la página de configuración, luego haz clic en el botón de editar junto a **Add new mqtt-broker**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/27.png" /></div>

La configuración del mqtt-broker debe llenarse de la siguiente manera:

- Servidor: openstream.api.sensecap.seeed.cc
- Puerto: 1883
- Protocolo: MQTT V3.1.1
- Client ID: El formato es `org-<Organization ID>-<Random ID>`
  - `<Organization ID>` Tu ID de organización. Lo obtuvimos en [Obtener la API de SenseCAP](#jump1).
  - `<Random ID>` Usa un número o letra minúscula generado aleatoriamente por ti.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/28.png" /></div>

Luego llenamos el campo de opciones **Security** con Usuario y Contraseña.

- Usuario: El formato es `org-<Organization ID>`
  - `<Organization ID>` Tu ID de organización. Lo obtuvimos en [Obtener la API de SenseCAP](#jump1).
- Contraseña: Llena con la **Access API keys** que obtuvimos en [Obtener la API de SenseCAP](#jump1).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/29.png" /></div>

Finalmente, haz clic en el botón **Add** en la esquina superior derecha para regresar a la página de configuración del nodo **mqtt in**.

- Topic: Configurar un tópico con un formato específico determina el tipo de dispositivo y tipo de dato que se va a recibir.

Formato del tópico: `/device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>`

<table align="center">
  <tbody><tr>
      <td align="center">OrgID</td>
      <td align="center">ID de tu organización. Lo hemos obtenido en la <a href="#jump1" target="_blank">Obtención de la API de SenseCAP</a>.</td>
    </tr>
    <tr>
      <td align="center">DevEUI</td>
      <td align="center">Identificación única de los dispositivos sensores. Esta información se encuentra en la etiqueta en la parte trasera del Grove - Wio E5, así como en el dispositivo de la consola SenseCAP.</td>
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
      <td align="center">ID del valor medido. Este ID se puede encontrar en la sección de IDs de medición de la <a href="https://sensecap-docs.seeed.cc/sensor_types_list.html" target="_blank">documentación de SenseCAP</a></td>
    </tr>
  </tbody></table>

:::note
El contenido de este tutorial solo aplica para el kit K1100, por lo que por favor consulta el contenido dentro del **LoraWAN Dev Kit** para el ID del valor medido y no utilices otros IDs.
:::

<div align="center"><img width={650} src="https://files.seeedstudio.com/wiki/k1100-nodered/30.png" /></div>

Por ejemplo, si quiero obtener datos del sensor para los valores de luz enviados por Wio Terminal, entonces la información del Topic que debo llenar es:

```
/device_sensor_data/424324324324324/2CF7F1C043200002/1/+/4193
```

:::tip
El campo `<OrgID>` es obligatorio, "+" significa que este campo no tiene filtro y puede coincidir con todos. Así que, "/ + / + / + / +" significa escuchar todos los `<DeviceEUI>`, `<Channel>`, `<Reserved>`, `<MeasurementID>`.

Si quieres escuchar todos los mensajes, entonces el Topic debe ser:

```
    /device_sensor_data/424324324324324/+/+/+/+
```

:::
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/31.png" /></div>

**Paso 2.** Añadir nodo de depuración

Luego podemos agregar nodos de depuración para facilitar la comprobación de que todo está funcionando.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/34.png" /></div>

**Paso 3.** Encender el Wio Terminal y comenzar a enviar datos a SenseCAP.

Hacemos clic en el botón **Deploy** y si todo está configurado correctamente podrás ver el nodo **mqtt in** mostrando que está conectado. Una vez que el Wio Terminal se encienda y comience a funcionar y a enviar datos a SenseCAP, verás los datos ya desplegados en la ventana de depuración.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/33.png" /></div>

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
