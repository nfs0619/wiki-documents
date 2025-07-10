---
description: Plex Media Server on Docker
title: Plex Media Server con Docker
keywords:
- Sorftware OpenWrt
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/OpenWrt-Plex-Media-Server-on-Docker
last_update:
  date: 06/06/2023
  author: Guillermo
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/thumb-1.png" alt="pir" width="1000" height="auto"/></p>

Esta guía explica cómo configurar Plex Media Server como un contenedor Docker en el firmware Seeed OpenWrt. ¡Usando Plex Media Server, puedes reproducir en streaming todos tus archivos multimedia locales desde cualquier parte del mundo! Aquí, OpenWrt puede ejecutarse en la [placa ODYSSEY – X86](https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html) o en la [placa Carrier Dual Gigabit Ethernet para Raspberry Pi Compute Module 4](https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM4-Case-p-5029.html).

**Nota:** Asegúrate de seguir la [guía de inicio de OpenWrt](https://wiki.seeedstudio.com/OpenWrt-Getting-Started) antes de continuar con esta guía.

## ¿Qué es Docker?

[Docker](https://docs.docker.com/) es una plataforma abierta para desarrollar, enviar y ejecutar aplicaciones. Docker permite empaquetar y ejecutar una aplicación en un entorno aislado llamado contenedor. Este aislamiento y seguridad permiten ejecutar varios contenedores simultáneamente en un mismo host. Los contenedores son livianos y contienen todo lo necesario para ejecutar la aplicación, por lo que no dependes de lo que esté instalado actualmente en el host. Puedes compartir fácilmente contenedores mientras trabajas, asegurándote de que todos tengan el mismo contenedor funcionando de la misma manera.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/vertical-logo-monochromatic.png" alt="pir" width="200" height="auto"/></p>

## ¿Qué es Plex Media Server?

[Plex Media Server](https://www.plex.tv) es una herramienta que te permite acceder a la música, fotos y videos almacenados en un dispositivo desde muchos otros dispositivos. Puedes instalar el software Plex Media Server en una computadora con Windows, Mac o Linux, en un dispositivo de almacenamiento conectado en red (NAS) o incluso en un router. Puedes reproducir en streaming todos los archivos multimedia almacenados en tu Plex Media Server de forma remota por internet y acceder desde cualquier parte del mundo usando la app de Plex.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/Plex_logo.png" alt="pir" width="200" height="auto"/></p>

## Plex Media Server en Docker

Ahora veamos el proceso para ejecutar Plex Media Server como un contenedor Docker en OpenWrt.

### Crear una cuenta Plex

Primero, necesitamos tener una cuenta Plex

- **Paso 1.** Haz clic en [este enlace](https://www.plex.tv) para visitar la página web de Plex

- **Paso 2.** Haz clic en **Sign Up** y crea una nueva cuenta Plex

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/plex-sign-up.jpg" alt="pir" width="1000" height="auto"/></p>

### Conectar almacenamiento externo para guardar los medios

Ahora necesitamos conectar unidades de almacenamiento externas para ampliar el almacenamiento en las placas X86 y CM4 para poder guardar todos nuestros medios.

ODYSSEY - X86J4125 tiene varias opciones de almacenamiento como:

- PCIe SSD
- SATA SSD
- SATA HDD
- Tarjeta Micro-SD
- Memorias USB

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/X86-external-storage.png" alt="pir" width="650" height="auto"/></p>

La placa Dual Gigabit Ethernet Carrier para Raspberry Pi CM4 tiene varias opciones de almacenamiento como:

- Memorias USB
- Tarjeta Micro-SD
- Expansión USB mediante conector de 9 pines

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/cm4-storage-2.jpg" alt="pir" width="1000" height="auto"/></p>

Puedes conectar cualquier almacenamiento externo que prefieras, basándote en las opciones anteriores.

### Montar el almacenamiento externo en OpenWrt

Después de conectar un dispositivo de almacenamiento externo, necesitamos montarlo para poder usarlo.

- **Paso 1.** Abre un navegador web y accede al dispositivo OpenWrt

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/Luci.png" alt="pir" width="1000" height="auto"/></p>

**Nota:** Hemos configurado previamente la IP **192.168.2.1** para acceder a OpenWrt. Puedes escribir esta IP en el navegador.

- **Paso 2.** Navega a `System > Disk Man` y verás las unidades de almacenamiento conectadas al dispositivo OpenWrt

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/Disk-man-1.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 3.** Bajo la unidad de almacenamiento conectada, haz clic en **EDIT**

- **Paso 4.** En **Partitions Info**, elimina todas las particiones haciendo clic en **REMOVE** junto a cada una

- **Paso 5.** En **Device Info**, selecciona **GPT** para la tabla de particiones

- **Paso 6.** En **Partitions Info**, haz clic en **NEW** para crear una partición

- **Paso 7.** En la partición recién creada, haz clic en **FORMAT**, elige **ext4** y confirma en **FORMAT** para formatear la partición

- **Paso 8.** Navega de nuevo a `System > Disk Man`

- **Paso 9.** En **Mount Point**, selecciona la partición que creaste antes

- **Paso 10.** Deja **File system** en **auto**

- **Paso 11.** En **Mount Options** escribe **rw** para permitir acceso de lectura y escritura

- **Paso 12.** En **Mount Point** escribe **/plex** y haz clic en **MOUNT** para montar la partición

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/disk-mount-1.png" alt="pir" width="1000" height="auto"/></p>

### Crear el contenedor Docker de Plex Media Server

Ahora vamos a crear el contenedor Docker de Plex Media Server

- **Paso 1.** En la interfaz Luci de OpenWrt, navega a `Docker > Images`

- **Paso 2.** En **Pull Image** escribe **linuxserver/plex** y haz clic en **PULL** para descargar la imagen Docker de Plex Media Server

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/plex-image.png" alt="pir" width="1000" height="auto"/></p>

**Nota:** Espera unos segundos hasta que se descargue la imagen

- **Paso 3.** Navega a `Docker > Containers` y haz clic en **ADD**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/docker-add.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 4.** Haz clic en **COMMAND LINE** e ingresa lo siguiente:

```sh
docker run \
-d \
--name plex \
--network=host \
-e TZ=<enter timezone> \
-e PLEX_CLAIM=<enter claimToken> \
-v /plex/database:/config \
-v /plex/temp:/transcode \
-v /plex/media:/data \
linuxserver/plex
```

**Nota:** Para obtener la **zona horaria (timezone)**, visita [este enlace](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) y copia el **nombre de la base de datos TZ**. Para obtener el **claimToken**, visita [este enlace](#www.plex.tv/claim) y copia/pega el token.

- **Paso 5.** Finalmente haz clic en **SUBMIT**

### Ejecutar y Configurar Plex Media Server

- **Paso 1.** Ahora verás el contenedor listado. Haz clic en la **casilla** y luego en **START** para iniciar el contenedor

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/docker-start.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 2.** Escribe **192.168.2.1:32400/web** para abrir la configuración inicial de Plex Media Server

**Nota:** 32400 es el puerto donde está corriendo el contenedor Docker de Plex.

- **Paso 3.** Escribe un **nombre para el servidor** y haz clic en **NEXT**

- **Paso 4.** Bajo **Organizar medios (Organize Media)**, haz clic en **ADD LIBRARY**

- **Paso 5.** Selecciona el **tipo de biblioteca (library type)** y haz clic en **NEXT**

- **Paso 6.** Haz clic en **BROWSE FOR MEDIA FOLDER**, selecciona la carpeta **data** y haz clic en **ADD LIBRARY**

**Nota:** Como configuramos anteriormente, la carpeta **data** dentro del contenedor plex está vinculada con la carpeta **/plex/media** en OpenWrt.

- **Paso 7.** Haz clic en **NEXT** y luego en **DONE** para terminar la configuración inicial.

Ahora verás la interfaz de usuario de Plex Media Server

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/plex-ui.png" alt="pir" width="1000" height="auto"/></p>

### Montar el Directorio Plex en la PC y Transferir los Medios

Después de montar el almacenamiento externo, ahora necesitamos montar el directorio **/plex** en la PC para que sea accesible fácilmente.

- **Paso 1.** En la interfaz Luci de OpenWrt, navega a `Services > Network Shares`

- **Paso 2.** Bajo **Shared Directories**, haz clic en **ADD**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/network-shares.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 3.** Completa la fila según lo siguiente:

        - nombre: Plex 
        - Ruta (Path): /plex
        - Navegable (Browse-able): marcado
        - Forzar Root (Force Root): marcado
        - Permitir invitados (Allow guests): marcado
        - Máscara para creación (Create mask): 0666
        - Máscara para directorio (Directory mask): 0777

**Nota:** El campo **nombre (name)** puede ser cualquier nombre que elijas. **Forzar Root** está habilitado para permitir acceso root a esta carpeta.

- **Paso 4.** Haz clic en **SAVE** y luego en **SAVE & APPLY**

- **Paso 5.** Ve al **Explorador de archivos (File Explorer)** en la PC y haz clic en **Network**

- **Paso 6.** Navega a `OpenWrt > plex > media` y copia todos los medios dentro de este directorio

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/PC-shares.png" alt="pir" width="1000" height="auto"/></p>

### Reproducir los Medios en las Aplicaciones Cliente de Plex

Ahora puedes usar las aplicaciones cliente de Plex para ver todos tus medios dentro del Plex Media Server. La aplicación Plex puede instalarse en varios dispositivos como teléfonos móviles, PCs, televisores inteligentes, etc.

Visita [este enlace](https://www.plex.tv/media-server-downloads/#plex-app) para ver los dispositivos compatibles y poder instalar la aplicación Plex.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/plex-client.jpg" alt="pir" width="1000" height="auto"/></p>

Ahora puedes navegar en la aplicación cliente Plex, iniciar sesión y reproducir todas tus películas, música, fotos y otros medios almacenados en el Plex Media Server.

### Convertir un TV Normal en un Smart TV para Ejecutar Plex

Es muy conveniente reproducir medios como películas desde tu Plex Media Server usando un Smart TV en casa. Necesitas un Smart TV porque la aplicación Plex puede instalarse si el TV tiene una tienda de aplicaciones. Sin embargo, si tienes un TV normal, puedes convertirlo en un Smart TV usando un Raspberry Pi.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/rpi-tv.jpg" alt="pir" width="1000" height="auto"/></p>

Puedes seguir [este enlace](https://pimylifeup.com/raspberry-pi-android-tv-lineageos) para aprender más.

## Recursos

- **[Página Web]** [Documentación oficial de Docker](https://docs.docker.com)

- **[Página Web]** [Docker Hub](https://hub.docker.com)

- **[Página Web]** [Plex Media Server](https://www.plex.tv)

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes canales de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
