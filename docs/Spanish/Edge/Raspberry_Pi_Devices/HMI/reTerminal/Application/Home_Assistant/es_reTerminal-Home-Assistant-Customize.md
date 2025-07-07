---
description:  Cómo personalizar Home Assistant
title:  Cómo personalizar Home Assistant
keywords:
  - Edge
  - reTerminal Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal-Home-Assistant-Customize
last_update:
  date: 04/02/2025
  author: Erick González
---

# Cómo personalizar Home Assistant

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/105.png"/></div>

## Introducción

En wikis anteriores, explicamos cómo instalar Home Assistant en el [reTerminal](https://wiki.seeedstudio.com/reTerminal_Home_Assistant), [ODYSSEY-X86](https://wiki.seeedstudio.com/ODYSSEY-X86-Home-Assistant) y cómo mostrar la interfaz de tablero en PC, smartphones, tablets y en modo Kiosko en la pantalla LCD del reTerminal.

Este wiki te guiará paso a paso sobre cómo construir el tablero realizando las configuraciones necesarias y también cómo usar algunos de los complementos (add-ons) importantes que vienen con Home Assistant. ¡Así que comencemos!

## Add-ons, HACS y Integraciones

Home Assistant ofrece principalmente tres maneras de extender sus capacidades:

- Add-ons
- Integrations (Integraciones)
- HACS (Home Assistant Community Store)

[Addons](https://www.home-assistant.io/addons) te permiten extender la funcionalidad de Home Assistant instalando aplicaciones adicionales. Por ejemplo, conectar sensores inteligentes con ESPHome, realizar respaldos automáticos de Home Assistant en Google Drive y mucho más.

[Integrations](https://www.home-assistant.io/integrations) te permiten conectar Home Assistant con otros servicios. Por ejemplo, luces inteligentes, cámaras de CCTV y más.

[HACS (Home Assistant Community Store)](https://hacs.xyz/) te permite añadir componentes para integraciones de interfaz personalizadas dentro de Home Assistant. Por ejemplo, nuevo soporte de hardware/sensores o temas personalizados.

En este wiki profundizaremos brevemente en las capacidades mencionadas. Sin embargo, si quieres aprender más, hay muchos recursos en línea sobre Home Assistant y aquí tienes algunos canales de YouTube que pueden guiarte:

- [EverythingSmartHome](https://www.youtube.com/c/EverythingSmartHome)
- [TheHookUp](https://www.youtube.com/c/TheHookUp)
- [PaulHibbert](https://www.youtube.com/c/PaulHibbert)
- [MakeItWorkTech](https://www.youtube.com/c/MakeItWorkTech)
- [MarkWattTech](https://www.youtube.com/c/MarkWattTech)
- [SmartHomeSolver](https://www.youtube.com/c/SmartHomeSolver)
- [mostlychris](https://www.youtube.com/c/mostlychris)
- [KPeyanski](https://www.youtube.com/c/KPeyanski)

## Addons

Por defecto, no todos los Add-ons estarán habilitados. Para habilitarlos todos, necesitas activar el "Advanced Mode" (Modo avanzado).

- **Paso 1.** Haz clic en el **nombre de usuario** y activa **Advanced Mode**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/17.png"/></div>

Ahora necesitamos acceder al panel de Add-ons.

- **Paso 2.** Ve a **Settings > Add-ons**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/18.png"/></div>

- **Paso 3.** Haz clic en **ADD-ON STORE**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/19.png"/></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/20.png"/></div>

Además de los complementos predeterminados de Home Assistant, puedes añadir **complementos de terceros** desarrollados por la comunidad. Sin embargo, estos no son mantenidos por los desarrolladores de Home Assistant. Más adelante te mostraremos cómo añadir estos complementos de terceros.

### Introducción al uso de Addons

A continuación configuraremos algunos de los addons. Aquí te mostraremos cómo instalar los siguientes add-ons:

- Terminal & SSH
- File editor
- Glances
- Google Drive Backup

También puedes instalar add-ons como **Node-RED, ESPHome, Adguard Home, BitWarden, Samba Share, Mosquitto broker, BookStack, Uptime Kuma, Cloudflared Tunnel y más**.

#### Instalando un addon

El proceso de instalación de un add-on es el mismo para todos. Así que lo explicaremos aquí:

- **Paso 1.** Visita **Add-on Store** como se explicó antes.

- **Paso 2.** Selecciona un Add-on o escribe en la barra de búsqueda. Por ejemplo, aquí seleccionaremos el Add-on **Terminal & SSH**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/21.png"/></div>

- **Paso 3.** Haz clic en **INSTALL**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/22.png"/></div>

- **Paso 4.** Configura más ajustes como **Start on boot, Watchdog, Auto update y Show in sidebar**. Puedes activarlos todos si lo prefieres y luego haz clic en **START**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/23.png"/></div>

Verás este **Punto verde** si el add-on se inició y está en ejecución

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/25.png"/></div>

- **Paso 5.** Después de que el Add-on inicie, haz clic en la pestaña **Log** y verifica que el Add-on haya comenzado correctamente

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/24.png"/></div>

#### File editor add-on

Aunque puedes configurar la mayor parte de Home Assistant directamente desde la interfaz de usuario en **Settings**, para algunas partes necesitas editar ciertos archivos como **configuration.yaml**, que contiene integraciones para cargar junto con sus configuraciones. Puedes añadir fragmentos de código a este archivo de configuración para habilitar funcionalidades específicas.

Sin embargo, para acceder a estos archivos de configuración, necesitamos un editor de archivos. Ahí es donde entra en juego el add-on **File editor**.

- **Paso 1.** Busca el add-on **File editor** en **Add-on Store**, **INSTALL** y **START**.

- **Paso 2.** Puedes hacer clic en **OPEN WEB UI** o en **File editor** en el panel de navegación a la izquierda para acceder.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/26.png"/></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/27.png"/></div>

#### Glances add-on

Después de instalar Home Assistant, es posible que desees comprobar el uso de recursos de hardware en el dispositivo host. El add-on **Glances** te brinda una descripción general de todos los recursos de hardware que se están utilizando.

- **Paso 1.** Busca el add-on **Glances** dentro de **Add-on Store**, **INSTALL** y **START**.

- **Paso 2.** Puedes hacer clic en **OPEN WEB UI** o en **Glances** en el panel de navegación a la izquierda para acceder.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/28.png"/></div>

**Nota:** Asegúrate de que **Protection mode** esté desactivado, de lo contrario Glances no se iniciará.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/29.png"/></div>

#### Google Drive Backup add-on

Como se mencionó antes, puedes instalar add-ons de terceros en Home Assistant y **Google Drive Backup** es uno de ellos. Después de invertir mucho tiempo y esfuerzo en configurar Home Assistant para que se ajuste a tus necesidades, si el sistema falla, todo el trabajo se perdería. Ahí es donde los respaldos pueden salvarte.

Por defecto, Home Assistant tiene la capacidad de hacer respaldos y guardarlos sin conexión en el dispositivo host que ejecuta Home Assistant. Sin embargo, si el dispositivo host no responde y ni siquiera puedes acceder a él, ¿cómo restaurarás desde un respaldo anterior?

El add-on Google Drive Backup te permite configurar respaldos automáticos que se cargarán en tu Google Drive a diario. Así que si no puedes acceder al dispositivo host, puedes descargar tu respaldo guardado desde Google Drive y restaurarlo en el dispositivo.

- **Paso 1.** Ve a **Add-on Store**, haz clic en los **3 puntos** en la esquina superior derecha y selecciona **Repositories**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/30.png"/></div>

- **Paso 2.** Copia y pega **`https://github.com/sabeechen/hassio-google-drive-backup`** en la columna vacía y haz clic en **ADD**

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Home-Assistant/31.png"/></div>

Verás lo siguiente si se ha añadido correctamente

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Home-Assistant/32.png"/></div>

- **Paso 3.** Ve a **Settings > System** y haz clic en **RESTART** para reiniciar Home Assistant

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/33.png"/></div>

- **Paso 4.** Ve a **Add-on Store**, busca **Home Assistant Google Drive Backup** add-on, **INSTALL** y **START**.

- **Paso 5.** Puedes hacer clic en **OPEN WEB UI** o en **Backups** en el panel de navegación a la izquierda para acceder.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/34.png"/></div>

- **Paso 6.** Haz clic en **AUTHENTICATE WITH GOOGLE DRIVE** y se abrirá una nueva ventana. Inicia sesión con tu cuenta de Google y concede el acceso.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/36.png"/></div>

- **Paso 7.** Haz clic en **COPY** para copiar la Cadena de Autorización.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/37.png"/></div>

- **Paso 8.** Regresa a la interfaz de Home Assistant y pega la cadena copiada, luego haz clic en **SAVE**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Home-Assistant/38.png"/></div>

Ahora hemos configurado correctamente Google Drive Backups.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/39.png"/></div>

Si deseas configurar ajustes adicionales como la frecuencia de respaldo y el número de respaldos a mantener, puedes hacer clic en **Settings** para ingresar a la página de configuración.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/40.png"/></div>

## Integraciones

Ahora exploremos las integraciones en Home Assistant. Aquí te mostraremos cómo configurar las siguientes integraciones:

- Control de lámpara inteligente
- Transmisión de cámara CCTV

También puedes configurar integraciones como **Philips Hue, Shelly, Tuya, Sonos, Z-Wave, HomeKit, WLED y más**.

- **Paso 1.** Navega a **Settings > Devices & Services**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/41.png"/></div>

- **Paso 2.** Haz clic en **+ ADD INTEGRATION**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/42.png"/></div>

¡Aquí encontrarás muchas integraciones!

### Integración de luz inteligente

Agreguemos la integración de **Xiaomi Smart Light** para poder encender/apagar luces inteligentes. Antes de continuar, asegúrate de tener acceso a una Xiaomi Smart Light. Si tienes otra luz inteligente como **Philips Hue**, puedes agregar la integración de **Philips Hue** y los pasos serán casi iguales.

- **Paso 1.** Busca **Yeelight** y selecciónalo

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/43.png"/></div>

- **Paso 2.** Escribe la dirección IP de la luz inteligente y haz clic en **SUBMIT**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Home-Assistant/44.png"/></div>

- **Paso 3.** Haz clic en **FINISH**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Home-Assistant/45.png"/></div>

- **Paso 4.** En la página **Overview**, haz clic en los 3 puntos en la esquina superior izquierda y selecciona **Edit Dashboard**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/46.png"/></div>

- **Paso 5.** Aquí no necesitamos la tarjeta con el nombre de usuario. Así que elimínala haciendo clic en los **3 puntos** y seleccionando **Delete card**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/47.png"/></div>

- **Paso 6.** Confirma la eliminación

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Home-Assistant/48.png"/></div>

- **Paso 7.** Haz clic en **+ ADD CARD** y luego en la tarjeta **Light**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/49.png"/></div>

- **Paso 8.** Cambia el **Name** y haz clic en **SAVE**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/50.png"/></div>

- **Paso 9.** Haz clic en **DONE**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/51.png"/></div>

- **Paso 9.** Ahora puedes encender la luz y controlar el brillo también

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Home-Assistant/52.png"/></div>

- **Paso 10.** Si haces clic en los **3 puntos**, tendrás más control sobre la luz, incluyendo la capacidad de cambiar el color y la temperatura de color.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/53.png"/></div>

### Integración de cámara IP CCTV

Aquí agregaremos una integración de cámara para poder ver la transmisión de video en tiempo real desde una cámara CCTV a través del protocolo RTSP. Antes de continuar, asegúrate de tener acceso a una cámara CCTV con función IP y la capacidad de transmitir vía RTSP.

- **Paso 1.** En la página **Integrations**, bajo **Set up a new integration**, busca **generic camera** y selecciónalo.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/54.png"/></div>

- **Paso 2.** Añade la **URL RTSP stream**, ingresa **usuario, contraseña** si es necesario, cambia **framerate** y haz clic en **SUBMIT**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Home-Assistant/55.png"/></div>

- **Paso 3.** En la página **Overview**, ingresa a **+ ADD CARD** como antes y haz clic en la tarjeta **Picture Entity**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/56.png"/></div>

- **Paso 4.** Escribe **camera** en **Entity** y verás la cámara que configuramos antes. Haz clic en ella.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/57.png"/></div>

- **Paso 5.** Cambia **Name**, cambia **Camera View** a **live** y haz clic en **SAVE**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/58.png"/></div>

Ahora verás la transmisión de video en vivo en el panel.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/59.png"/></div>

## HACS (Home Assistant Community Store)

Ahora exploremos HACS en Home Assistant. HACS proporciona varias integraciones y opciones de personalización para la interfaz. Aquí te mostraremos cómo configurar lo siguiente:

- Cambiar el tema de Home Assistant
- Agregar una tarjeta de clima (Weather card) al panel

### Instalando HACS

- **Paso 1.** Abre el add-on **Terminal & SSH** que instalamos antes

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Home-Assistant/60.png"/></div>

- **Paso 2.** Escribe el siguiente comando en la ventana de la terminal para instalar HACS

```sh
wget -O - https://get.hacs.xyz | bash -
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/61.png"/></div>

- **Paso 3.** Una vez que la instalación de HACS haya terminado, reinicia Home Assistant con el siguiente comando

```sh
ha ha restart
```

- **Paso 4.** En la página **Integrations**, bajo **Set up a new integration**, busca **HACS** y selecciónalo.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant/62.png"/></div>

- **Paso 5.** Selecciona todas las opciones para aceptar todo y haz clic en **SUBMIT**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant/63.png"/></div>

- **Paso 6.** Copia el código de autorización y luego haz clic en el enlace para iniciar sesión en GitHub.

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Home-Assistant/70.jpg"/></div>

- **Paso 7.** Inicia sesión en GitHub, pega el código copiado y haz clic en **Continue**

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Home-Assistant/71.jpg"/></div>

- **Paso 8.** Haz clic en **Authorize HACS**

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Home-Assistant/72.jpg"/></div>

- **Paso 9.** Haz clic en **FINISH**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Home-Assistant/68.png"/></div>

¡HACS está instalado!

- **Paso 10.** Es recomendable reiniciar el sistema ahora yendo a **Settings > System > Hardware**, haz clic en los **3 puntos** en la esquina superior derecha y haz clic en **Reboot Host**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/69.png"/></div>

- **Paso 11.** Después de que el sistema se reinicie, verás **HACS** en el panel de navegación a la izquierda

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/73.png"/></div>

### Cambiar el tema de Home Assistant

Ahora cambiemos el tema predeterminado usando HACS. De fábrica, Home Assistant solo viene con un único tema en modo oscuro. Sin embargo, si quieres personalizarlo, sigue los pasos a continuación:

- **Paso 1.** Antes de instalar un tema personalizado, debemos agregar algo de código en el archivo **configuration.yaml**. Abre **File editor** y haz clic en el **icono de la carpeta** para explorar el sistema de archivos.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/76.jpg"/></div>

- **Paso 2.** Haz clic en **configuration.yaml**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/77.png"/></div>

- **Paso 3.** Agrega lo siguiente al final de este archivo

```sh
frontend:
  themes: !include_dir_merge_named themes
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Home-Assistant/78.jpg"/></div>

- **Paso 4.** Haz clic en el botón de guardar

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/79.png"/></div>

- **Paso 5.** Es buena práctica verificar que la configuración que hicimos sea válida. De lo contrario, Home Assistant fallará al iniciar la próxima vez. Ve a **Developer Tools** y haz clic en **CHECK CONFIGURATION**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/80.png"/></div>

Si ves el mensaje **Configuration valid!**, ¡todo está bien!

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/81.png"/></div>

- **Paso 6.** Haz clic en **RESTART** para reiniciar Home Assistant

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/82.png"/></div>

- **Paso 7.** Dentro de la ventana de **HACS**, haz clic en **Frontend**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/74.png"/></div>

- **Paso 8.** Haz clic en **+ EXPLORE & DOWNLOAD REPOSITORIES**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/75.jpg"/></div>

- **Paso 9.** Aquí verás muchos temas. Por ejemplo, instalaremos un tema de iOS. Busca **iOS** y selecciona **iOS Themes - Dark Mode and Light Mode**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/85.png"/></div>

- **Paso 10.** Haz clic en **DOWNLOAD**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/86.png"/></div>

- **Paso 11.** Haz clic en **DOWNLOAD** de nuevo en la ventana emergente

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/87.png"/></div>

- **Paso 12.** Una vez finalizada la descarga, haz clic en tu nombre de usuario y en **Theme**, selecciona **ios-dark-mode-blue-red**. También puedes seleccionar todos los otros colores de este tema si lo prefieres.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/88.jpg"/></div>

Ahora la página **Overview** se verá así con el nuevo tema cargado.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/89.png"/></div>

**Nota:** Si no ves el tema cargado correctamente, reinicia Home Assistant.

### Agregar una tarjeta de clima al tablero

Ahora instalaremos una tarjeta de clima usando HACS y la añadiremos al tablero.

Antes de instalar esta tarjeta de clima, necesitamos conectarnos con **openweathermap** para obtener la información del clima. Y antes de conectarnos con openweathermap, necesitamos obtener una clave API de openweathermap.

- **Paso 1.** Visita [este enlace](https://home.openweathermap.org/users/sign_up) para registrarte en una cuenta de openweathermap.

- **Paso 2.** Visita [este enlace](https://home.openweathermap.org/users/sign_in) para iniciar sesión en la cuenta recién creada.

- **Paso 3.** Bajo el nombre de la cuenta, haz clic en **My API keys**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/97.png"/></div>

- **Paso 4.** Escribe un nombre para la clave API y haz clic en **Generate**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/98.png"/></div>

- **Paso 5.** Copia la clave API generada

<div align="center"><img width={650} src="https://files.seeedstudio.com/wiki/Home-Assistant/99.png"/></div>

Ahora añadiremos esta clave API

- **Paso 6.** En Home Assistant, ve a **Settings > Devices & Services > Integrations > + ADD INTEGRATION**, busca **OpenWeathermap** y haz clic.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/96.png"/></div>

- **Paso 7.** Pega la **API key** copiada, cambia la **Latitud y Longitud** según tu ubicación (puedes encontrarlas fácilmente con una búsqueda en Google), cambia **Mode** a **hourly** y haz clic en **SUBMIT**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Home-Assistant/101.png"/></div>

- **Paso 8.** Haz clic en **Finish**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Home-Assistant/102.png"/></div>

Ahora instalaremos la tarjeta de clima desde HACS

- **Paso 9.** Navega a **HACS > Frontend > + EXPLORE & DOWNLOAD REPOSITORIES**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/90.jpg"/></div>

- **Paso 10.** Escribe **weather** y haz clic en **Weather Card**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/91.png"/></div>

- **Paso 11.** Haz clic en **DOWNLOAD**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/92.png"/></div>

- **Paso 12.** Haz clic en **DOWNLOAD** de nuevo en la ventana emergente

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/93.png"/></div>

- **Paso 13.** En la página **Overview**, entra a **+ ADD CARD** como antes y haz clic en **Custom: Weather Card**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/103.png"/></div>

- **Paso 14.** Ingresa el **City Name** acorde a la **Latitud y Longitud** que ingresaste antes y haz clic en **SAVE**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/104.png"/></div>

Ahora el tablero se verá así

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/105.png"/></div>

## Recursos

- [Documentación de Home Assistant](https://www.home-assistant.io/docs)
