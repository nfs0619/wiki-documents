---
description: OpenWrt Getting Started
title: Primeros Pasos con OpenWRT
keywords:
- Sorftware OpenWrt
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/OpenWrt-Getting-Started
last_update:
  date: 06/06/2025
  author: Guillermo
---



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/openwrt-wiki-thumb.png" alt="pir" width="1000" height="auto"/></p>

OpenWrt es un sistema operativo Linux de código abierto que funciona en dispositivos embebidos/router. Ofrece más características, rendimiento y seguridad que un router tradicional. Tiene un sistema de archivos completamente escribible e incluye un sistema de gestión de paquetes. Puedes usar estos paquetes para adaptar las aplicaciones a tus necesidades de diversas maneras.

Al usar OpenWrt puedes obtener varias funciones como:

- Aumentar el rendimiento general de la red cuando múltiples dispositivos están conectados
- Compartir archivos entre dispositivos mediante una unidad de almacenamiento externa conectada directamente al router
- Incrementar la seguridad de la red
- Ejecutar un cliente BitTorrent desde el router
- Conectar una impresora directamente al router para crear una impresora en red
- Limitar el uso del ancho de banda de un dispositivo en particular en la red
- Gestión activa de colas
- Monitoreo de red en tiempo real
- Crear DNS dinámico (Dynamic DNS)
- Configurar un cliente o servidor VPN

Ahora vamos a profundizar en el uso de OpenWrt en la Dual Gigabit Ethernet Carrier Board para Raspberry Pi CM4 y ODYSSEY - X86J4125.

:::note
Esta guía también funciona para ODYSSEY - X86J4105.
:::

## Hardware requerido

Necesitas preparar el siguiente hardware antes de comenzar con OpenWRT en la Dual Gigabit Ethernet Carrier Board para Raspberry Pi CM4 y ODYSSEY - X86J4125

- 1 x [Dual Gigabit Ethernet Carrier Board para Raspberry Pi CM4](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html)
- 1 x [Adaptador de corriente (5V/3A) con cable USB Tipo-C](https://www.seeedstudio.com/Wall-Adapter-Power-Supply-5VDC-3A-Type-C-p-4103.html)
- 1 x [ODYSSEY - X86J4125 con adaptador de corriente incluido](https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html)
- 2 x cables Ethernet

## Configuración inicial

### Dual Gigabit Ethernet Carrier Board para Raspberry Pi CM4

Primero explicaremos cómo instalar y configurar OpenWrt en la Dual Gigabit Ethernet Carrier Board para Raspberry Pi CM4.

#### Flashear imagen OpenWrt

Ahora necesitamos flashear la imagen de OpenWrt en el almacenamiento eMMC de la placa para que pueda funcionar en el Raspberry Pi Compute Module 4. 

Una vez que los controladores necesarios estén instalados, solo debes conectar el puerto USB Tipo-C del CM4 a tu PC, y aparecerá como una unidad externa. Sigue los pasos a continuación según tu sistema operativo.

##### Para Windows

- **Paso 1.** Descarga la **última imagen de OpenWrt** compilada por Seeed para esta placa desde [aquí](https://1drv.ms/u/s!AqG2uRmVUhlSh0NHMLMmQKLyASvi?e=mup3cd)

:::note
Elige el archivo **openwrt-bcm27xx-bcm2711-rpi-4-ext4-factory.img.gz**
:::

- **Paso 2.** Descarga y ejecuta [este instalador](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe) para instalar los controladores necesarios y la herramienta de arranque

- **Paso 3.** Busca la herramienta **rpiboot** que instalamos y ábrela

- **Paso 4.** Conecta un puente entre los pines **Boot** y **GND** como se muestra para habilitar el modo BOOT

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/connection.png" alt="pir" width="600" height="auto"/></p>

- **Paso 5.** Conecta la placa Carrier a la PC mediante un cable USB Tipo-C

Windows detectará el hardware e instalará los controladores necesarios

- **Paso 6.** Abre el **explorador de archivos** y verás el eMMC del Compute Module 4 como un dispositivo de almacenamiento masivo USB

- **Paso 7.** Descarga el software **balenaEtcher** visitando [este enlace](https://www.balena.io/etcher) según tu sistema operativo

- **Paso 8.** Ejecuta **balenaEtcher** como **administrador**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/balena-home.jpg" alt="pir" width="650" height="auto"/></p>

- **Paso 9.** Haz clic en **Flash from file** y selecciona el archivo de imagen de OpenWrt que descargaste antes

- **Paso 10.** Haz clic en **Select target** y selecciona la unidad eMMC conectada

- **Paso 11.** Finalmente, haz clic en **Flash!**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/OpenWrt/balena-finish.jpg" alt="pir" width="650" height="auto"/></p>

Por favor, espera unos minutos hasta que el proceso de flasheo finalice.

##### Para Mac/Linux

- **Paso 1.** Descarga la **última imagen de OpenWrt** compilada por Seeed para esta placa desde [aquí](https://1drv.ms/u/s!AqG2uRmVUhlSh0NHMLMmQKLyASvi?e=mup3cd)

:::note
Elige el archivo **openwrt-bcm27xx-bcm2711-rpi-4-ext4-factory.img.gz**
:::

- **Paso 2.** Abre una ventana de **Terminal** y escribe lo siguiente para actualizar la **lista de paquetes**

```sh
sudo apt update
```

- **Paso 3.** Instala **Git** con el siguiente comando

```sh
sudo apt install git
```

- **Paso 4.** Git podría producir un error si la fecha no está configurada correctamente. Escribe lo siguiente para corregirlo

```sh
sudo date MMDDhhmm
```

:::note
Donde **MM** es el mes, **DD** es el día, y **hh** y **mm** son las horas y minutos respectivamente.
:::

- **Paso 5.** Clona el repositorio de la herramienta **usbboot**

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Paso 6.** Ejecuta lo siguiente para instalar **libusb**

```sh
sudo apt install libusb-1.0-0-dev
```

- **Paso 7.** Compila e instala la herramienta usbboot

```sh
make
```

- **Paso 8.** Ejecuta la herramienta usbboot y esperará una conexión

```sh
sudo ./rpiboot
```

- **Paso 9.** Conecta un puente entre los pines **Boot** y **GND** como se muestra para habilitar el modo programación

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/connection.png" alt="pir" width="600" height="auto"/></p>

- **Paso 10.** Conecta la placa Carrier a la PC mediante un cable USB Tipo-C

- **Paso 11.** Descarga el software **balenaEtcher** visitando [este enlace](https://www.balena.io/etcher) según tu sistema operativo

- **Paso 12.** Ejecuta **balenaEtcher** como **administrador**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/balena-home.jpg" alt="pir" width="650" height="auto"/></p>

- **Paso 13.** Haz clic en **Flash from file** y selecciona el archivo de imagen de OpenWrt que descargaste antes

- **Paso 14.** Haz clic en **Select target** y selecciona la unidad eMMC conectada

- **Paso 15.** Finalmente, haz clic en **Flash!**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/OpenWrt/balena-finish.jpg" alt="pir" width="650" height="auto"/></p>

Por favor, espera unos minutos hasta que el proceso de flasheo finalice.

#### Conexión de los puertos Dual Gigabit Ethernet

Una vez que OpenWrt haya terminado de flashearse en la placa Dual Gigabit Ethernet Carrier Board para Raspberry Pi CM4, puedes conectar los cables Ethernet a la placa de la siguiente manera:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/cm4-ports-2.png" alt="pir" width="600" height="auto"/></p>

La imagen de OpenWrt ya incluye las configuraciones de red necesarias para que los puertos duales Gigabit funcionen de inmediato, por lo que no necesitas configurarlos manualmente. Sin embargo, aquí te explicamos cómo están configurados los 2 puertos.

Un puerto está configurado como una **interfaz LAN** y el otro como una **interfaz WAN**. La interfaz WAN es la que puede conectarse a Internet y está configurada como un **cliente DHCP**. Por otro lado, la interfaz LAN es la que se conecta a los dispositivos clientes y está configurada como un **servidor DHCP**.

En este caso, la interfaz LAN está configurada con una dirección IP estática de **192.168.2.1**. Sin embargo, si conectas este router OpenWrt a otro router con una puerta de enlace predeterminada con IP 192.168.2.1, podrías querer cambiar la dirección IP de la interfaz LAN, de lo contrario, OpenWrt tendrá un conflicto de IP. Por favor, consulta esta [pregunta frecuente (FAQ)](https://wiki.seeedstudio.com/OpenWrt-Getting-Started/#q1-what-if-i-connect-the-openwrt-router-to-my-exisiting-router-which-has-a-default-gateway-ip-of-19216821) para obtener más información.

### ODYSSEY - X86J4125

A continuación, explicamos cómo instalar y configurar OpenWrt en el ODYSSEY - X86J4125

#### Flashear imagen de OpenWrt

Ahora necesitamos instalar OpenWrt en la eMMC/ HDD/ SSD del ODYSSEY - X86J4125 para que pueda ejecutarse en la placa. Para ello, primero debemos crear un USB booteable con la imagen de OpenWrt. Sigue los pasos a continuación:

- **Paso 1.** Descarga la **última imagen de OpenWrt** compilada por Seeed para esta placa desde [aquí](https://1drv.ms/u/s!AqG2uRmVUhlSh0NHMLMmQKLyASvi?e=mup3cd)

:::note
Selecciona el archivo **openwrt-x86-64-generic-ext4-combined-efi.img.gz**
:::

- **Paso 2.** Inserta una unidad USB en la PC

- **Paso 3.** Descarga el software **balenaEtcher** visitando [este enlace](https://www.balena.io/etcher) según tu sistema operativo

- **Paso 4.** Ejecuta **balenaEtcher** como **administrador**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/balena-home.jpg" alt="pir" width="650" height="auto"/></p>

- **Paso 5.** Haz clic en **Flash from file** y selecciona la imagen de OpenWrt que descargaste anteriormente

- **Paso 6.** Haz clic en **Select target** y selecciona la unidad USB conectada

- **Paso 7.** Finalmente, haz clic en **Flash!**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/OpenWrt/balena-finish.jpg" alt="pir" width="650" height="auto"/></p>

Espera unos minutos hasta que finalice el proceso de flasheo.

#### Conexión de los Puertos Ethernet Gigabit Duales

Una vez que OpenWrt ha sido flasheado en la unidad USB, puedes conectar cables Ethernet a la placa como se muestra a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/odyssey-ports-2.png" alt="pir" width="700" height="auto"/></p>

La imagen de OpenWrt ya incluye las configuraciones de red necesarias para que los puertos duales Gigabit funcionen de inmediato, por lo que no necesitas configurarlos manualmente. Sin embargo, aquí te explicamos cómo están configurados los 2 puertos.

Un puerto está configurado como una **interfaz LAN** y el otro como una **interfaz WAN**. La interfaz WAN es la que puede conectarse a Internet y está configurada como un **cliente DHCP**. Por otro lado, la interfaz LAN es la que se conecta a los dispositivos clientes y está configurada como un **servidor DHCP**.

En este caso, la interfaz LAN está configurada con una dirección IP estática de **192.168.2.1**. Sin embargo, si conectas este router OpenWrt a otro router con una puerta de enlace predeterminada con IP 192.168.2.1, podrías querer cambiar la dirección IP de la interfaz LAN, de lo contrario, OpenWrt tendrá un conflicto de IP. Consulta la **FAQ** a continuación para obtener más información.

#### Instalar OpenWrt

Ahora que hemos creado previamente una unidad USB booteable, pasemos a instalar OpenWrt en el ODYSSEY - X86J4125.

- **Paso 1.** Inserta la unidad USB booteable en la placa ODYSSEY y conéctala a una pantalla y un teclado

- **Paso 2.** Enciende la placa y presiona repetidamente **F7** para ingresar al menú de arranque (boot manager)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetup.jpg" alt="pir" width="500" height="auto"/></p>

- **Paso 3.** Selecciona la unidad USB booteable y presiona ENTER

Ahora OpenWrt se ejecutará en modo Live desde la unidad USB.

- **Paso 4.** Una vez iniciado, abre un navegador web y escribe **192.168.2.1** en la barra de direcciones

- **Paso 5.** Una vez que se abra el portal de OpenWrt, navega a **System > FileTransfer**

- **Paso 6.** Haz clic en **Choose File** bajo la sección **Upload** y selecciona la imagen de OpenWrt que descargamos anteriormente

:::note
Asegúrate de que el archivo **.gz** haya sido extraído a un archivo **.img** antes
:::

- **Paso 7.** Haz clic en **Upload**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/OpenWrt-image-upload.png" alt="pir" width="1000" height="auto"/></p>

Ahora la imagen está guardada en el directorio **/tmp/upload/**

- **Paso 8.** Navega a **System > TTYD Terminal** e inicia sesión con el nombre de usuario **root**

- **Paso 9.** Escribe **lsblk** para listar los dispositivos de almacenamiento conectados

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/lsblk.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 10.** Escribe el siguiente comando para flashear la imagen de OpenWrt al dispositivo de almacenamiento conectado (eMMC/ HDD/ SSD):

```sh
dd if=/tmp/upload/openwrt-x86-64-generic-ext4-combined-efi.img of=/dev/sda 
```

:::note
**/dev/sda** corresponde al dispositivo de almacenamiento conectado
:::

- **Paso 11.** Una vez que termine de flashear al dispositivo de almacenamiento, reinicia la placa, retira la unidad USB y se iniciará OpenWrt desde el dispositivo de almacenamiento conectado.

## Ejecutar OpenWrt

Ahora que hemos terminado de configurar el software OpenWrt y los puertos Ethernet Gigabit duales, pasaremos a ejecutar OpenWrt en la placa base Dual Gigabit Ethernet para Raspberry Pi CM4 y ODYSSEY - X86J4125. Esta sección no se dividirá según las dos placas porque ambas tendrán la misma funcionalidad de OpenWrt junto con la misma interfaz web.

Una vez que los cables Ethernet estén conectados como antes y la imagen de OpenWrt haya sido flasheada, sigue los pasos a continuación:

- **Paso 1.** Enciende la placa

- **Paso 2.** Abre un navegador web y escribe **192.168.2.1**

Aquí verás la interfaz web Luci de OpenWrt. La imagen de OpenWrt compilada por Seeed incluye muchos paquetes preinstalados. ¡Así que puedes usar estos paquetes para realizar muchas aplicaciones!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/OpenWrt-UI.png" alt="pir" width="1000" height="auto"/></p>

## Ejecutar OpenWrt R23.5

Hemos actualizado la versión más reciente de OpenWrt para Rerouter, la versión R23.5. Si deseas utilizar la última versión de OpenWrt, puedes elegir la imagen del siguiente enlace:

[Imágenes OpenWrt R23.5](https://firmware-selector.openwrt.org/?version=23.05.2&target=bcm27xx%2Fbcm2711&id=rpi-4)

Una vez que los cables Ethernet estén conectados como antes y la imagen de OpenWrt haya sido flasheada, continúa con los siguientes pasos:

- **Paso 1.** Enciende la placa

- **Paso 2.** Abre un navegador web y escribe **192.168.1.1**

```text
account: root
password: password
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/R24.7OP-UI.png" alt="pir" width="1000" height="auto"/></p>

## Prueba de Velocidad de Red

Finalmente, realizaremos una prueba de velocidad de red en la placa Dual Gigabit Ethernet Carrier Board para Raspberry Pi CM4 y en la ODYSSEY - X86J4125 con OpenWrt instalado.

### Placa Dual Gigabit como Servidor y ODYSSEY como Cliente

Primero utilizaremos la placa Dual Gigabit Ethernet Carrier Board como servidor y la ODYSSEY - X86J4125 como cliente para la prueba de red.

:::note
Asegúrate de cambiar la dirección IP de la interfaz LAN en la placa ODYSSEY a **192.168.3.1** siguiendo [estas instrucciones](https://wiki.seeedstudio.com/OpenWrt-Getting-Started/#q1-what-if-i-connect-the-openwrt-router-to-my-exisiting-router-which-has-a-default-gateway-ip-of-19216821)
:::

- **Paso 1.** Conecta las placas como se muestra a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/speed-cm4-server.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 2.** Abre un navegador web e inicia sesión en ambas placas, luego accede al terminal de la siguiente manera:

**Placa Dual Gigabit Ethernet Carrier Board**

- Escribe **192.168.2.1** en la barra de búsqueda del navegador

- Navega a **System > TTYD Terminal** e inicia sesión con el nombre de usuario **root**

**ODYSSEY - X86J4125/ X86J4105**

- Escribe **192.168.3.1** en la barra de búsqueda del navegador

- Navega a **System > TTYD Terminal** e inicia sesión con el nombre de usuario **root**

:::note
Asegúrate de que ambos dispositivos no estén en el mismo rango de IP en la interfaz LAN
:::

- **Paso 3.** Instala la herramienta de prueba de rendimiento de red **iperf3** en ambos dispositivos

```sh
opkg update
opkg install iperf3
```

- **Paso 4.** En la ventana del **TTYD Terminal** de la placa Dual Gigabit Ethernet Carrier Board, escribe el siguiente comando para iniciar **iperf3** como servidor:

```sh
iperf3 -s
```

- **Paso 5.** En la ventana del **TTYD Terminal** de la ODYSSEY - X86J4125, escribe el siguiente comando para iniciar **iperf3** como cliente y conectarte al servidor creado anteriormente:

```sh
iperf3 -c 192.168.2.1
```

:::note
Aquí se debe escribir la dirección IP de la placa Dual Gigabit que está funcionando como servidor.
:::

Ahora verás los resultados de la prueba de velocidad de red como se muestra a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/TTYD-CM4-server.png
" alt="pir" width="1000" height="auto"/></p>

:::note
Aquí puedes ver que la velocidad se aproxima a 1 Gbps
:::

### ODYSSEY como Servidor y Placa Dual Gigabit como Cliente

Ahora utilizaremos la ODYSSEY - X86J4125 como servidor y la placa Dual Gigabit Ethernet Carrier Board como cliente para la prueba de red.

- **Paso 1.** Conecta las placas como se muestra a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/speed-odyssey-server.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 2.** En la ventana del **TTYD Terminal** de la ODYSSEY - X86J4125, escribe el siguiente comando para iniciar **iperf3** como servidor:

```sh
iperf3 -s
```

- **Paso 3.** En la ventana del **TTYD Terminal** de la placa Dual Gigabit Ethernet Carrier Board, escribe el siguiente comando para iniciar **iperf3** como cliente y conectarte al servidor creado anteriormente:

```sh
iperf3 -c 192.168.3.1
```

:::note
Aquí se debe escribir la dirección IP del servidor ODYSSEY-X86.
:::

Ahora verás los resultados de la prueba de velocidad de red como se muestra a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/TTYD-X86-server.png" alt="pir" width="1000" height="auto"/></p>

:::note
Aquí puedes ver que la velocidad se acerca a 1 Gbps.
:::

## Preguntas Frecuentes (FAQ)
Para más detalles, haz clic [**aquí**](/FAQs_For_openWrt)

## Recursos

- **[Página Web]** [Documentación oficial de OpenWrt](https://openwrt.org)

- **[GitHub]** [Seeed OpenWrt](https://github.com/Seeed-Studio/seeed-linux-openwrt)

- **[OneDrive]** [Imágenes OpenWrt de Seeed](https://1drv.ms/u/s!AqG2uRmVUhlSh0NHMLMmQKLyASvi?e=mup3cd)

- **[Descargar]** [Imágenes OpenWrt R23.5](https://firmware-selector.openwrt.org/?version=23.05.2&target=bcm27xx%2Fbcm2711&id=rpi-4)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurarnos de que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
