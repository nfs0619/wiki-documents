---
description: Get Started with Wio-WM1110 Dev Kit
title: Primeros Pasos con el Wio-WM1110 Dev Kit
keywords:
- Wio-WM1110 Dev Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Get_Started_with_Wio-WM1110_Dev_Kit
sidebar_position: 2
last_update:
  date: 05/28/2025
  author: Guillermo
---

## Preparación

* Wio-WM1110 Dev Kit x 1  
* Computadora x 1  
* Cable USB Tipo-C x 1  
* Programador J-Link Debug x 1  

### Conexión del dispositivo

Conecta la placa de desarrollo Wio-WM1110 al programador J-Link Debug de la siguiente manera:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/hardware_connection.png" alt="pir" width={800} height="auto" /></p>


:::info Conexión:
**3V3** (Wio-WM1110 Dev Board) -> **VTref** (Pin 1 del programador J-Link Debug)  
**CLK** (Wio-WM1110 Dev Board) -> **SWCLK** (Pin 9 del programador J-Link Debug)  
**DIO** (Wio-WM1110 Dev Board) -> **SWDIO** (Pin 7 del programador J-Link Debug)  
**GND** (Wio-WM1110 Dev Board) -> **GND** (GND del programador J-Link Debug)  
:::

### Configura tu cadena de herramientas

Antes de comenzar a desarrollar, se requieren las siguientes herramientas para esta guía de inicio rápido.

#### SEGGER Embedded Studio (SES)

SES es una solución todo en uno para gestionar, construir, probar y desplegar aplicaciones embebidas. Esto significa operaciones de desarrollo fluidas y eficientes gracias a su amplia gama de funcionalidades. El potente gestor de proyectos permite administrar proyectos grandes y pequeños. Las características de control de versiones permiten el despliegue automático de aplicaciones.


<a  href="https://www.segger.com/products/development-tools/embedded-studio/" target="_blank"><span>SEGGER Embedded Studio (SES)-Download</span></a>


:::tip 
Se recomienda usar la versión 5.68
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/5.68version.png" alt="pir" width={800} height="auto" /></p>

#### Paquete de Software y Documentación SEGGER J-Link

<a  href="https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack" target="_blank"><span>Descarga del Paquete de Software y Documentación SEGGER J-Link</span></a>

#### nRF5 SDK

El nRF5 SDK proporciona un entorno de desarrollo completo para dispositivos de la serie nRF5, incluyendo una amplia selección de controladores, librerías, ejemplos para periféricos, SoftDevices y protocolos propietarios de radio.

Todos los ejemplos de código incluidos en el SDK están diseñados para compilarse y ejecutarse en el Wio-WM1110 Dev Kit.


<a  href="https://www.nordicsemi.com/Products/Development-software/nRF5-SDK/Download#infotabs" target="_blank"><span>nRF5 SDK - Descarga</span></a>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/SDK_version.png" alt="pir" width={800} height="auto" /></p>

#### Paquete de Ejemplo Seeed

Seeed ofrece un proyecto de ejemplo para que los desarrolladores puedan comenzar más rápidamente. Este ejemplo incluye comunicación LoRaWAN, adquisición de información de posicionamiento, adquisición de datos de sensores a bordo, entre otros.

<a  href="https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board" target="_blank"><span>Ejemplo de Seeed - Descarga</span></a>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/list.png" alt="pir" width={600} height="auto" /></p>


## Ejecutando una Primera Prueba

**Agregar el archivo de ejemplo Seeed al nRF5 SDK**

Copia el [archivo de ejemplo Seeed](https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board) en la siguiente ruta del nRF5 SDK:  
`.../nRF5_SDK_17.1.0_ddde560/examples/peripheral/`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/copyfile.png" alt="pir" width={800} height="auto" /></p>

Compilaremos el proyecto "ses_blinky" para verificar si tu cadena de herramientas está configurada correctamente.  
Importa el proyecto "ses_blinky".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/opensolution.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/open-project.png" alt="pir" width={800} height="auto" /></p>

**Compilando la aplicación de prueba**

Selecciona "Build" > "Compile project_target".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/complie.png" alt="pir" width={800} height="auto" /></p>

**Programando la aplicación de prueba**

Después de compilar la aplicación, puedes programarla en la placa de desarrollo.

Haz click en "Target" -- "Connect J-Link"
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/connect-to-JLink.png" alt="pir" width={800} height="auto" /></p>

Haz click en "Build" -- "Build and Run" para compilar el ejemplo de parpadeao.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/run.png" alt="pir" width={800} height="auto" /></p>

Verás un mensaje de "Download successful" (Descarga exitosa) cuando se complete.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/download-seccessful.png" alt="pir" width={800} height="auto" /></p>

Luego los 2 LEDs en la placa parpadearan de la siguiente forma:
<div align="center"><img width={253} src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/blink-test.gif" /></div>




## Comenzando

Este capítulo te guiará para mostrar la información de la ubicación actual en Node-Red vía TTN, y explica cómo configurar todos los servidores requeridos (Servidor de Red (NS) y Servidor de Aplicación (AS)).

**Arquitectura y Flujo de Datos**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/flow.png" alt="pir" width={800} height="auto" /></p>


### Configurar las Claves

Antes de que un dispositivo pueda comunicarse a través del NS, es necesario registrarlo con las 3 claves.

El Wio-WM1110 DK permite a los usuarios configurar el DevEUI, AppEUI y AppKey. Esto es necesario en los siguientes pasos, por lo que puedes definir tus propios parámetros en el archivo 'lorawan_key_config.h' y luego flashearlo en el DK.

Archivo ubicado en:  
`.../nRF5_SDK_17.1.0_ddde560/examples/peripheral/Seeed_Wio_WM1110_Dev_Board/apps/common/lorawan_key_config.h`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/keys.png" alt="pir" width={800} height="auto" /></p>

O bien, puedes obtener las claves generadas por TTN, luego rellenarlas en el archivo `lorawan_key_config.h` y ejecutarlo en el DK.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device3.png" alt="pir" width={800} height="auto" /></p>

### Servicios de Modem y Geolocalización de LoRa Cloud™

Los Servicios de Modem y Geolocalización de LoRa Cloud™ proporcionan un conjunto completo de funciones para la gestión del ciclo de vida de dispositivos LoRa® que operan en una red LoRaWAN. Estas funciones incluyen, pero no se limitan a:

* Telemetría completa del dispositivo  
* Configuración del dispositivo y de la aplicación  
* Sincronización de reloj  
* Servicios avanzados de transporte de datos con robustez contra pérdida de paquetes y fragmentación transparente de datos (transmisión en buffer y carga de archivos).  
* Geolocalización

Para comenzar, visita el [portal de LoRa Cloud™](https://www.loracloud.com/?__hstc=212684107.3eb7c02aaa159a9e414cb1b589ca989c.1678419369281.1686727930327.1686794688289.35&__hssc=212684107.3.1686794688289&__hsfp=1476773244) y regístrate para obtener una cuenta.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/signup.png" alt="pir" width={800} height="auto" /></p>

#### Paso 1: Crear un Propietario
Para crear un token, primero necesitas crear un propietario.  
Navega a la página DEVICE OWNERS.  
Haz clic en CREATE NEW OWNER.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_owner.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_owner2.png" alt="pir" width={800} height="auto" /></p>

#### Paso 2: Obtener un Token

Se requiere un token para que el servidor de aplicaciones pueda autenticar llamadas al servidor de Servicios de Módem y Geolocalización de LoRa Cloud.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/tokens.png" alt="pir" width={800} height="auto" /></p>

#### Paso 3: URL de la API

La URL de los Servicios de Módem y Geolocalización de LoRa Cloud depende de la región en la que se desplegará el dispositivo.  
Haz clic en Manage Tokens, luego podrás verificar la URL de la API:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MGS.png" alt="pir" width={800} height="auto" /></p>

:::tip
Cuando se recibe un dato de un dispositivo, este se registra automáticamente en el servidor de Servicios de Módem y Geolocalización de LoRa Cloud. Esto significa que no es necesario registrar el dispositivo previamente.
:::

### Servidor de Red LoRaWAN® (TTN)

Actualmente utilizamos [The Things Network V3](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-end-nodes/developer-walk-through/?url=lns.html#the-things-network-v3)

Para comenzar, regístrate con una cuenta en The Things Industries o The Things Network.

#### Paso 1: Crear una aplicación

Navega a la página de Applications y haz clic en +Create application.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application.png" alt="pir" width={800} height="auto" /></p>

Ingresa un Application ID, luego haz clic en Create Application para guardar los cambios.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application1.png" alt="pir" width={800} height="auto" /></p>

#### Paso 2: Registrar el dispositivo

Haz clic en **Register end device**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device.png" alt="pir" width={800} height="auto" /></p>

Establece los siguientes parámetros:

**Frequency Plan**: Selecciona el plan de frecuencia apropiado para tu región.

**LoRaWAN version**: Especificación LoRaWAN 1.0.3

**Regional Parameters version**: V1.0.3 REV A

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device1.png" alt="pir" width={800} height="auto" /></p>

:::tip
JoinEUI / DevEUI / AppEUI: Los que definiste en el archivo `lorawan_key_config.h` en la configuración anterior.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device5.png" alt="pir" width={800} height="auto" /></p>

#### Paso 3: Crear credenciales
El servidor de red The Things Network V3 requiere que generes una contraseña MQTT única. En la página de la aplicación dentro de la consola:

* Haz clic en Integrations y luego en MQTT.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MQTT1.png" alt="pir" width={800} height="auto" /></p>

* Selecciona Generate new API Key.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/API_key.png" alt="pir" width={800} height="auto" /></p>

* Copia los valores de los siguientes campos: Server Address, Username y Password.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MQTT2.png" alt="pir" width={800} height="auto" /></p>

### Servidor de Aplicación

El servidor de aplicación gestiona los datos de las aplicaciones y los marcos de gestión del dispositivo. Como no existe una conexión directa entre el servidor de red LoRaWAN® y los servicios LoRa Cloud™ Modem & Geolocation, todos los *uplinks* relacionados con el tráfico del módem deben ser reenviados por el servidor de aplicación a los servicios LoRa Cloud Modem & Geolocation.

Utilizamos Node-RED como servidor de aplicación. Node-RED es una herramienta de programación visual basada en navegador que permite crear prototipos rápidamente. Basada en Node.js, Node-RED permite conectar flujos utilizando una amplia variedad de nodos, que pueden desplegarse en el entorno de ejecución de Node-RED con un solo clic.

#### Instalar Node.js®

Para instalar Node-RED localmente, necesitarás una <a  href="https://nodered.org/docs/faq/node-versions" target="_blank"><span> versión compatible de Node </span></a>

Descarga la última versión LTS 16.x de Node.js desde el sitio oficial de <a  href="https://nodejs.org/en/" target="_blank"><span>Node.js</span></a>
 El sitio te ofrecerá automáticamente la mejor versión para tu sistema.
 
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/nodejs_version.png" alt="pir" width={600} height="auto" /></p>

Al instalar Node.js, si estás usando una computadora que no tiene ningún entorno de programación instalado, te recomendamos que marques la casilla para instalar las herramientas necesarias durante la instalación. Esto te ahorrará muchos problemas más adelante.

La forma más sencilla de instalar Node-RED es utilizando la herramienta de gestión de paquetes de Node, **npm**. Sin embargo, no se recomienda instalar Node-RED con **npm 1.x**, sino actualizarlo a la última versión **npm 2.x**.

:::note
En Windows (se requiere Windows 10 o superior), usa el atajo **Win+R**, escribe `cmd` en la ventana emergente para abrir la terminal y ejecuta el siguiente comando.
:::

Si estás usando **macOS** o **Linux**, ejecuta el siguiente comando en la terminal y agrega `sudo` al inicio si no eres usuario root.

```cpp
npm install -g npm@2.x
```

Una vez instalado, abre una ventana de comandos y ejecuta el siguiente comando para asegurarte de que Node.js y npm se hayan instalado correctamente.

```cpp
node --version && npm --version
```

Deberías recibir una salida similar a la siguiente:

```cpp
> v18.7.0
> 9.6.5
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/npm_version.png" alt="pir" width={600} height="auto" /></p>


#### Instalar Node-RED

Instalar Node-RED como un módulo global agrega el comando `node-red` a la ruta del sistema. Ejecuta lo siguiente en la línea de comandos:

```cpp
npm install -g --unsafe-perm node-red
```

Si Node-RED se instala como un paquete global de npm, entonces ejecuta directamente el siguiente comando:

```cpp
node-red
```

Esto te permitirá ver el editor Node-RED en http://localhost:1880.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/node-red.png" alt="pir" width={600} height="auto" /></p>

La interfaz de usuario tiene tres áreas clave:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/nodered1.png" alt="pir" width={800} height="auto" /></p>

* **Paleta**: Aquí puedes seleccionar nodos; estos son bloques funcionales que se pueden arrastrar y soltar, y luego se pueden enlazar entre sí para crear un flujo.
* **Flujo**: Este es el código fuente del programa. En este panel, puedes enlazar nodos para crear una aplicación.
* **Barra lateral**: La barra lateral muestra cualquier ayuda o información de depuración disponible para el nodo seleccionado.

#### Instalar librerías

Para configurar la demostración, instalaremos 2 librerías adicionales:

* [node-red-contrib-loracloud-utils](https://www.npmjs.com/package/@semtech-wsp-apps/node-red-contrib-loracloud-utils): Maneja las conexiones con los servidores de LoRa Cloud™

* [node-red-contrib-web-worldmap](https://www.npmjs.com/package/node-red-contrib-web-worldmap): Página web de mapa mundial para mostrar "cosas" en un mapa

Haz clic en el menú en la esquina superior derecha y selecciona "Manage palette" (Administrar paleta).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/install.png" alt="pir" width={800} height="auto" /></p>

Selecciona **Instalar** en el menú de la paleta.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/install_pak.png" alt="pir" width={800} height="auto" /></p>

Busca **"node-red-contrib-loracloud-utils"** e instálalo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/install_loracloud.png" alt="pir" width={800} height="auto" /></p>

Repite estos pasos para instalar la librería **"node-red-contrib-web-worldmap"**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/install_worldmap.png" alt="pir" width={800} height="auto" /></p>

#### Importar el flujo

El paquete de Seeed incluye ejemplos útiles para guiarte en este proyecto. Solo necesitas importar estos 2 archivos de configuración.

```
.../nRF5_SDK_17.1.0_ddde560/examples/peripheral/Seeed_Wio_WM1110_Dev_Board-master/apps/examples/geolocation_application_server/modem.json

.../nRF5_SDK_17.1.0_ddde560/examples/peripheral/Seeed_Wio_WM1110_Dev_Board-master/apps/examples/geolocation_application_server/geolocation.json
```


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/importflow.png" alt="pir" width={800} height="auto" /></p>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/importflow1.png" alt="pir" width={800} height="auto" /></p>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/importflow2.png" alt="pir" width={800} height="auto" /></p>

A continuación verás los siguientes flujos:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/importflow3.png" alt="pir" width={800} height="auto" /></p>

#### Configurar el Flujo

**Configuración del Servidor de Red LoRaWAN (MQTT)**  
Todos los conectores del servidor de red están activados por defecto; sin embargo, la conexión MQTT debe configurarse por separado.

Antes de comenzar, obtén los siguientes datos:

* Dirección del servidor MQTT  
* Puerto MQTT  
* Nombre de usuario MQTT  
* Contraseña MQTT  

Estos datos se pueden obtener en el **Paso 3: Crear Credenciales**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MQTT2.png" alt="pir" width={800} height="auto" /></p>

Haz doble clic en el nodo "TTN v3-Uplinks", y edita el nodo MQTT.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/configure_mqtt1.png" alt="pir" width={800} height="auto" /></p>

Puedes encontrar el servidor y el puerto en el [paso anterior](https://wiki.seeedstudio.com/Wio-WM1110_Dev_Kit_Server_Configuration/#step-3-create-credentials:~:text=Copy%20the%20values%20from%20the%20following%20fields%3A%20Server%20Address%2C%20Username%2C%20and%20Password.).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/TTN_TLS.png" alt="pir" width={800} height="auto" /></p>

Luego añade el nombre de usuario y la contraseña en la sección "Security".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/TTN_se.png" alt="pir" width={800} height="auto" /></p>

Haz clic en Add y luego en Done.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/add_and_done.png" alt="pir" width={600} height="auto" /></p>

Haz doble clic en el nodo "TTN joinReq" y selecciona el servidor MQTT que añadimos en el paso anterior.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/select_server.png" alt="pir" width={800} height="auto" /></p>

**Configuración del Servicio de Módem y Geolocalización**

Para configurar el servidor, utiliza los valores de URL de MGS (MGS URL) y el TOKEN de MGS obtenidos en el [paso anterior](https://wiki.seeedstudio.com/Wio-WM1110_Dev_Kit_Server_Configuration/#step-2-get-a-token).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/set_token.png" alt="pir" width={800} height="auto" /></p>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/set_url.png" alt="pir" width={800} height="auto" /></p>

Llena el EUI de tu dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/set_eui.png" alt="pir" width={800} height="auto" /></p>

Haz click en "Deploy" para compilar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/deploy.png" alt="pir" width={800} height="auto" /></p>


#### Vista de Datos

Haz clic en **Debug** para ver los datos que devuelve el servicio LoRa Cloud Modem & Geolocation Services:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/debug_page.png" alt="pir" width={800} height="auto" /></p>

**Geolocalización**

Para mostrar el mapa, añade `/worldmap` a la URL en tu navegador web.  
Por ejemplo: `http://127.0.0.1:1880/worldmap`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/map_page.png" alt="pir" width={800} height="auto" /></p>

## Recursos

[Seeed_Wio_WM1110_Dev_Board (Github)](https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board)

[nRF5-SDK](https://www.nordicsemi.com/Products/Development-software/nRF5-SDK/Download#infotabs)

[SEGGER J-Link Software and Documentation Pack](https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack)

## Soporte Técnico y Discusión de Producto

**¡Necesitas ayuda con tu Wio-WM1110 Dev Kit? ¡Estamos aquí para ayudarte!**

Por favor, envía cualquier problema técnico a nuestro [foro](http://forum.seeedstudio.com/).

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions" class="button_discussion"></a>
</div>
