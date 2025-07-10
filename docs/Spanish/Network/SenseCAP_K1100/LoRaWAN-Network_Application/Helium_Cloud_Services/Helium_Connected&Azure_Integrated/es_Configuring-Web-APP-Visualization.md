---
description: Configure Web APP Visualization
title: Configuración de la Visualización en la Aplicación Web
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Configuring-Web-APP-Visualization
last_update:
  date: 06/12/2025
  author: Guillermo
---
# Configuración de la Visualización en la Aplicación Web

Ahora que tenemos un dispositivo conectado a la Red Helium y los datos fluyen desde el dispositivo a la Red Helium hacia Microsoft Azure IoT Hubs, comencemos a explorar cómo analizar y visualizar estos datos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/192.png" /></div>

## Preparación del entorno

Para usar esta rutina, por favor descarga y configura [Git](https://www.git-scm.com/downloads) y la CLI de Azure para tu computadora con anticipación.

No entraremos en la instalación y configuración de Git aquí, sino que nos enfocaremos en la instalación de la CLI de Azure para sistemas Windows y MacOS.

La Interfaz de Línea de Comandos de Azure (CLI) es una herramienta multiplataforma que permite conectarse a Azure y ejecutar comandos administrativos sobre los recursos de Azure. Permite ejecutar comandos a través de un terminal usando prompts interactivos o scripts.

Para uso interactivo, primero se abre un shell como cmd.exe en Windows, o Bash en Linux o macOS, y luego se emite un comando en el prompt del shell. Para automatizar tareas repetitivas, se ensamblan los comandos CLI en un script shell usando la sintaxis del shell elegido, y luego se ejecuta el script.

### Instalación en Windows

Para Windows, la CLI de Azure se instala mediante un MSI, que te da acceso a la CLI a través del Símbolo del sistema (CMD) o PowerShell. Al instalar para Windows Subsystem for Linux (WSL), hay paquetes disponibles para tu distribución Linux.

La versión actual de la CLI de Azure es **2.37.0**. Para información sobre la última versión, consulta las [notas de la versión](https://docs.microsoft.com/en-us/cli/azure/release-notes-azure-cli). Para ver la versión instalada y si necesitas actualizar, ejecuta [az version](https://docs.microsoft.com/en-us/cli/azure/reference-index#az_version).

También puedes instalar la CLI de Azure usando PowerShell. Abre PowerShell como administrador y ejecuta el siguiente comando:

:::note
    PowerShell debe ejecutarse como administrador.
:::
Abre PowerShell como administrador y ejecuta el siguiente comando:

```sh
$ProgressPreference = 'SilentlyContinue'; Invoke-WebRequest -Uri https://aka.ms/installazurecliwindows -OutFile .\AzureCLI.msi; Start-Process msiexec.exe -Wait -ArgumentList '/I AzureCLI.msi /quiet'; rm .\AzureCLI.msi
```

Esto descargará e instalará la última versión de la CLI de Azure para Windows. Si ya tienes una versión instalada, el instalador actualizará la versión existente.

Para instalar una versión específica, reemplaza el argumento `-Uri` con `https://azcliprod.blob.core.windows.net/msi/azure-cli-<version>.msi`, cambiando el segmento `<version>` por la versión deseada. Las versiones disponibles se pueden consultar en las [notas de la versión de Azure CLI](https://docs.microsoft.com/en-us/cli/azure/release-notes-azure-cli).

:::note
Después de que finalice la instalación, deberás volver a abrir PowerShell para usar la CLI de Azure.
:::

Ahora puedes ejecutar la CLI de Azure con el comando `az` desde el Símbolo del sistema de Windows o PowerShell.

### Instalación en macOS

Para la plataforma macOS, puedes instalar la CLI de Azure con el [gestor de paquetes Homebrew](https://brew.sh/). Homebrew facilita mantener actualizada tu instalación de la CLI. El paquete ha sido probado en versiones de macOS desde la 10.9 en adelante.

La versión actual de la CLI de Azure es **2.34.1**. Para más información sobre la última versión, consulta las [notas de la versión](https://docs.microsoft.com/en-us/cli/azure/release-notes-azure-cli). Para verificar la versión instalada y saber si necesitas actualizar, ejecuta [az version](https://docs.microsoft.com/en-us/cli/azure/reference-index#az_version).

Puedes instalar la CLI de Azure en macOS actualizando tu repositorio de brew y luego ejecutando el comando `install`:

```sh
brew update && brew install azure-cli
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/1.jpg" /></div>

:::note
La CLI de Azure tiene una dependencia con el paquete `python@3.10` de Homebrew, y se instalará automáticamente.
:::

## Iniciar sesión en Microsoft Azure CLI

La primera vez que utilices la CLI de Microsoft Azure en tu computadora, deberás iniciar sesión en los IoT Hubs. Para ello, escribe `az login` en la ventana de comandos para que se abra la ventana de inicio de sesión. En ese momento, completa el proceso de autenticación.

Si la CLI puede abrir tu navegador predeterminado, iniciará el [flujo de código de autorización](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) y cargará una página de inicio de sesión de Azure en el navegador.

De lo contrario, iniciará el [flujo de código de dispositivo](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-device-code) y te indicará que abras una página del navegador en <https://aka.ms/devicelogin> e ingreses el código mostrado en tu terminal.

Inicia sesión con las credenciales de tu cuenta en el navegador.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/161.png" /></div>

## Conectar la CLI de Microsoft Azure al IoT Hub de Microsoft Azure

Los*grupos de consumidores proporcionan vistas independientes del flujo de eventos, lo que permite que aplicaciones y servicios de Azure consuman datos de manera independiente desde el mismo punto de conexión del Event Hub. En esta sección, agregarás un grupo de consumidores al punto de conexión integrado de tu IoT Hub, el cual será utilizado por la aplicación web para leer los datos.

Los IoT Hubs se crean con varias políticas de acceso predeterminadas. Una de estas políticas es la service policy (política de servicio), que otorga permisos suficientes a un servicio para leer y escribir en los puntos de conexión del IoT Hub. Ejecuta el siguiente comando para obtener una cadena de conexión para tu IoT Hub que respete la service policy:


```sh
az iot hub connection-string show --hub-name ${YourIotHub} --policy-name service
```

Donde la variable de entorno `${YourIotHub}` indica el nombre de tu Azure IoT Hub, como se muestra a continuación.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/157.png" /></div>

La cadena de conexión debería tener un formato similar al siguiente:

```sh
"HostName={YourIotHubName}.azure-devices.net;SharedAccessKeyName=service;SharedAccessKey={YourSharedAccessKey}"
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/27.jpg" /></div>

**Anota la cadena de conexión del servicio**, la necesitarás más adelante en este tutorial.

:::note
Si por alguna razón no puedes instalar Azure CLI en tu computadora, puedes considerar ejecutar bash con el entorno de Azure CLI directamente desde el panel de IoT Hubs para ayudarte con los siguientes pasos.
:::
   <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/158.png" /></div>

    Puedes ingresar el comando `az` anterior directamente aquí para obtener la cadena de conexión.
   <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/159.png" /></div>

## Descargar el framework del servicio Web APP

Por favor, descarga la biblioteca correspondiente según el tipo de sensor que desees utilizar.

<table align="center">
  <tbody><tr>
      <th>Tipo de sensor</th>
      <th>Link de descarga</th>
    </tr>
    <tr>
      <td align="center">Sensor de luz incorporado en Wio Terminal</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/webapp/lightsensor-Web-APP">Descarga</a></td>
    </tr>
    <tr>
      <td align="center">Sensor IMU incorporado en Wio Terminal</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/webapp/IMUsensor-Web-APP">Descarga</a></td>
    </tr>
    <tr>
      <td align="center">Sensor de humedad del suelo</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/webapp/soil-moisture-Azure-IoT-hub-Web-APP">Descarga</a></td>
    </tr>
    <tr>
      <td align="center">Sensor de gas VOC y eCO₂ (SGP30)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/webapp/SGP30-Azure-IoT-hub-Web-APP">Descarga</a></td>
    </tr>
    <tr>
      <td align="center">Sensor de temperatura y humedad (SHT40)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/webapp/SHT40-Azure-IoT-hub-Web-APP">Descarga</a></td>
    </tr>
    <tr>
      <td align="center">Módulo Vision AI</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/webapp/VisionAI-Azure-IoT-hub-Web-APP">Descarga</a></td>
    </tr>
  </tbody></table>

Abre la librería Web APP en tu editor favorito. A continuación se muestra la estructura de archivos vista en VS Code:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/38.jpg" /></div>

Tómate un momento para examinar los siguientes archivos:

- **Chart-device-data.js** es un script del lado cliente que escucha el socket web, realiza un seguimiento de cada DeviceId y almacena los últimos 50 puntos de datos entrantes para cada dispositivo. Luego, enlaza los datos del dispositivo seleccionado al objeto del gráfico.

- **Index.html** maneja el diseño de la interfaz de usuario para la página web y referencia los scripts necesarios para la lógica del lado cliente.

- **Event-hub-reader.js** es un script del lado servidor que se conecta al endpoint integrado del IoT hub usando la cadena de conexión y grupo de consumidores especificados. Extrae el DeviceId y EnqueuedTimeUtc de los metadatos de los mensajes entrantes y luego retransmite el mensaje usando el método callback registrado por server.js.

- **Server.js** es un script del lado servidor que inicializa el socket web y la clase envoltorio (wrapper) del Event Hub. Proporciona un callback a la clase wrapper del Event Hub que esta usa para difundir los mensajes entrantes al socket web.

## Configurar variables de entorno para la Web APP

Para leer datos de tu IoT hub, la Web APP necesita la cadena de conexión de tu IoT hub y el nombre del grupo de consumidores que debe usar para leer. Obtiene estas cadenas del entorno del proceso en las siguientes líneas de **server.js**:

```c
const iotHubConnectionString = process.env.IotHubConnectionString;
const eventHubConsumerGroup = process.env.EventHubConsumerGroup;
```

Habrá dos métodos para este paso, así que comencemos con el más común.

- Primer método. Configura las variables de entorno en la ventana de comandos con los siguientes comandos. Reemplaza los valores de ejemplo por la cadena de conexión de servicio de tu IoT hub y el nombre del grupo de consumidores que creaste previamente. No uses comillas para las cadenas.

```sh
set IotHubConnectionString = YourIoTHubConnectionString
set EventHubConsumerGroup = YourConsumerGroupName
```

- En el segundo método, podemos hacer cambios directamente en el código. Esto es útil en casos donde, por ejemplo, agregar variables de entorno es complicado en MacOS.

Por favor, abre el archivo **server.js** con un editor y modifica el código según el nombre del grupo de consumidores que creaste y la cadena de conexión obtenida en [**step2**](https://wiki.seeedstudio.com/Configuring-Web-APP-Visualization/#connecting-microsoft-azure-cli-to-microsoft-azure-iot-hub). Consulta la siguiente figura para la modificación.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/160.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/29.jpg" /></div>

## Ejecutar la Web APP

Por favor, sube el código según el contenido de la [wiki previa](https://wiki.seeedstudio.com/Connecting-to-Helium/#upload-code-send-data-to-helium). Asegúrate de que tu dispositivo esté encendido y enviando datos.

En la ventana de comandos, ejecuta las siguientes líneas para descargar e instalar los paquetes referenciados y arrancar el sitio web:

```sh
npm install
npm start
```

Deberías ver en la consola una salida que indica que la Web APP se ha conectado correctamente a tu IoT hub y está escuchando en el puerto 3000:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/30.jpg" /></div>

## Abre una página web para ver los datos desde Azure IoT hub

Abre un navegador en `http://localhost:3000`.

En la caja de selección de lista en la esquina superior izquierda, selecciona el número de ID de tu dispositivo. Espera a que llegue el siguiente conjunto de datos enviados y podrás observar el gráfico de líneas con los cambios de datos.

### Visualización en vivo del sensor de luz

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/31.png" /></div>

También deberías ver en la consola la salida que muestra los mensajes que tu Web APP está transmitiendo al cliente del navegador:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/32.jpg" /></div>

### Visualización en vivo del sensor IMU

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/176.png" /></div>

También deberías ver en la consola la salida que muestra los mensajes que tu Web APP está transmitiendo al cliente del navegador:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/177.png" /></div>

### Visualización en vivo del sensor de humedad del suelo

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/188.png" /></div>

También deberías ver en la consola la salida que muestra los mensajes que tu Web APP está transmitiendo al cliente del navegador:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/187.png" /></div>

### Visualización en vivo del sensor SHT40

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/194.png" /></div>

También deberías ver en la consola la salida que muestra los mensajes que tu Web APP está transmitiendo al cliente del navegador:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/193.png" /></div>

### Visualización en vivo del sensor SGP30

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/182.png" /></div>

También deberías ver en la consola la salida que muestra los mensajes que tu Web APP está transmitiendo al cliente del navegador:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/183.png" /></div>

### Visualización en vivo del módulo Grove Vision AI

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/201.png" /></div>

También deberías ver en la consola la salida que muestra los mensajes que tu Web APP está transmitiendo al cliente del navegador:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/199.png" /></div>

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
