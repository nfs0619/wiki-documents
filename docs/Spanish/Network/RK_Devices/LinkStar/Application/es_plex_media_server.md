---
description: The Future of Home Entertainment, LinkStar-H68K Router and Plex Media Server
title: El Futuro del Entretenimiento en Casa Router LinkStar-H68K y Plex Media Server
keywords:
  - LinkStar
  - Getting started
  - plex media server
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/plex_media_server
last_update:
  date: 10/06/2025
  author: Guillermo
---
# El Futuro del Entretenimiento en Casa: Router LinkStar-H68K y Plex Media Server

Descubre la idea revolucionaria de convertir tu router en un servidor de medios de entretenimiento compacto pero potente. Imagina una puerta de entrada a un mundo ilimitado de opciones de entretenimiento, todo consolidado en un solo dispositivo. Esta innovación rompe las capacidades convencionales de un dispositivo de red, enriqueciendo tu vida diaria y transformando pequeños negocios como cafeterías y restaurantes, ofreciendo experiencias extraordinarias a los clientes. Prepárate para sumergirte en un mundo de posibilidades cautivadoras, mejorando cada momento y garantizando entretenimiento sin igual. Aquí algunos usos potenciales y factores a considerar si buscas esta transformación increíble en un router.

## ¿Qué es Docker?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/plex/docker.png" alt="pir" width="200" height="auto"/></p>

[Docker](https://docs.docker.com/) es una plataforma de código abierto que permite a los desarrolladores automatizar el despliegue y la gestión de aplicaciones dentro de contenedores ligeros y aislados. Los contenedores son unidades autocontenidas que empaquetan una aplicación junto con sus dependencias, librerías y archivos de configuración, permitiendo que se ejecute de manera consistente en diferentes entornos. Docker simplifica la creación, distribución y ejecución de aplicaciones, facilitando el desarrollo y despliegue de software de forma reproducible y uniforme. Con Docker, los desarrolladores pueden encapsular sus aplicaciones para asegurar que funcionen correctamente en diversos sistemas operativos e infraestructuras, siendo una herramienta invaluable para construir aplicaciones portables y escalables, optimizar flujos de trabajo y facilitar la colaboración en equipo.

## ¿Qué es Plex?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/plex/Plex_logo.png" alt="pir" width="200" height="auto"/></p>

[Plex Media Server](https://www.plex.tv) es una potente plataforma de gestión y transmisión de medios que permite a los usuarios organizar, acceder y transmitir su biblioteca personal de medios en diversos dispositivos. Con Plex Media Server, los usuarios pueden centralizar fácilmente su colección de películas, series, música, fotos y más, creando un centro de medios unificado dentro de su red doméstica. Plex organiza e indexa automáticamente los archivos de medios, obteniendo metadatos como descripciones, imágenes y subtítulos, para ofrecer una interfaz atractiva y fácil de usar. El servidor se puede acceder mediante aplicaciones dedicadas en smartphones, tablets, smart TVs y dispositivos de streaming, permitiendo la transmisión fluida de contenido tanto en casa como de forma remota. Plex Media Server también ofrece funciones robustas como control parental, soporte multiusuario y capacidades de transcodificación, asegurando compatibilidad y calidad óptima de streaming en diferentes dispositivos y condiciones de red. En resumen, Plex Media Server permite a los usuarios disfrutar de su colección personal de medios en cualquier momento y lugar, brindando una experiencia de entretenimiento completa e inmersiva.

## Configurar el entorno Docker en el router LinkStar con OpenWRT

- **Paso 01** Instalación de OpenWRT en LinkStar

Para iniciar el proceso de instalación de OpenWRT en tu dispositivo LinkStar, consulta la guía completa de instalación que se encuentra en el Wiki de LinkStar. Este tutorial está enfocado en el uso del sistema OpenWRT y muestra cómo instalar el contenedor Plex, asegurando que LinkStar funcione como un router soft. Elige una de las siguientes opciones según tu preferencia para instalar OpenWRT en LinkStar:  
1. Flashear OpenWRT en la tarjeta TF. [Aquí está el tutorial](https://wiki.seeedstudio.com/linkstar-install-system/#flash-openwrt-to-the-tf-card)  
2. Flashear OpenWRT en el eMMC. [Aquí está el tutorial](https://wiki.seeedstudio.com/linkstar-install-system/#flash-openwrt-to-emmc)

- **Paso 2**: Configurar la red en LinkStar

Para comenzar a configurar la red en tu dispositivo LinkStar, establece una conexión conectándolo a tu computadora mediante un cable de red. Accede al backend del sistema operativo OpenWRT ingresando la dirección IP 192.168.100.1 en tu navegador web. La contraseña inicial de la cuenta es:

```
Account: root
Password: password
```

Una vez dentro, el siguiente paso es establecer la conexión a internet para tu dispositivo LinkStar.  
Tienes la opción de conectar mediante cable de red o por WiFi. Escoge el método que mejor se adapte a tu configuración y preferencias. En este ejemplo se usa la conexión inalámbrica. Después de seleccionar la red WiFi, simplemente introduce la contraseña, guarda y aplica los cambios.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img1.png"/></div>

- **Paso 3**: Aumentar la capacidad de almacenamiento para Docker

Por defecto, la instalación de Docker en LinkStar tiene una capacidad de almacenamiento de alrededor de 250MB, lo cual puede no ser suficiente para instalar imágenes. Por eso, es necesario asignar más espacio a Docker para cubrir nuestras necesidades.
Para comenzar, navega a la sección **System** en el backend de OpenWRT. Luego, haz clic en **Disk Man** y localiza la opción **EDIT**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img2.png"/></div>


En la columna **"END SECTOR"**, especifica el tamaño deseado para el espacio adicional que quieres asignar a Docker. En este ejemplo, añadiremos 20GB de almacenamiento. Después de ingresar el valor, haz clic en el botón **"NEW"** para crear la nueva partición.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img3.png"/></div>

Selecciona el formato **ext4**, luego haz clic en el botón **FORMAT**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img4.png"/></div>

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img5.png"/></div>

Una vez completada la asignación, notarás que se añadió un nuevo espacio de 20GB. Sin embargo, este espacio aún no está montado y necesita asociarse con Docker. Para continuar, ve a la sección **System** en el backend de OpenWRT y selecciona **Mount Points**. Busca la sección **Mount Point** y haz clic en el botón **"ADD"**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img6.png"/></div>

Selecciona el nuevo espacio que acabas de crear.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img7.png"/></div>

Elige el uso del punto de montaje como **Docker data (/opt)**. No olvides marcar la casilla **Enable this mount**, luego haz clic en el botón **SAVE & APPLY**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img8.png"/></div>


Después de realizar la configuración necesaria para la expansión del almacenamiento, el último paso es reiniciar el dispositivo LinkStar para aplicar los cambios.

Para iniciar el reinicio, ve a la sección **System** en el backend de OpenWRT y selecciona **Reboot**. Haz clic en el botón **"PERFORM REBOOT"** para comenzar el proceso. Espera a que OpenWRT reinicie y luego inicia sesión nuevamente cuando el sistema esté listo.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img9.png"/></div>

## Crear el contenedor Docker de Plex Media Server

Lo siguiente es obtener la imagen Docker de Plex. Para más detalles, visita este [enlace](https://hub.docker.com/r/linuxserver/plex).

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/pull_img.PNG"/></div>

Luego, ve a la pestaña **Containers** y haz clic en el botón **Add**. 

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/LinkStar/plex/pull_img2.png"/></div>

Después verás un formulario para completar.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/plex3.PNG"/></div>

- **Paso 1**: Configurar el nombre del contenedor y la red

    - Asigna el nombre del contenedor como **"plex"**.
    - Elige el modo de red como **"host"**.


- **Paso 2**: Configurar variables de entorno

    - Obtén la zona horaria visitando este [enlace](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) y copia el nombre de la zona en formato TZ.
    - Configura la variable de entorno así:
      ```
      TZ=<zona_horaria>
      ```
    - Obtén el token de reclamo (claimToken) visitando [este enlace](https://www.plex.tv/claim/) y copia/pega el token.
    - Configura la variable de entorno así:
      ```
      PLEX_CLAIM=<claimToken>
      ```

- **Paso 3**: Configurar los Bind Mounts (montajes de directorios)

    En la sección de bind mounts, añade las siguientes líneas una por una:
    ```
    /plex/database:/config
    /plex/temp:/transcode
    /plex/media:/data
    ```

- **Paso 4**: Guardar la configuración

    Después de configurar el nombre del contenedor, la red, las variables de entorno y los bind mounts, haz clic en el botón **Submit** para guardar los cambios.

       
    Siguiendo estos pasos, habrás configurado correctamente el contenedor Plex con las opciones especificadas.

## Ejecutar y Configurar Plex Media Server
- **Paso 1:**

    En los contenedores de Docker puedes ver la información del contenedor. Haz clic en el botón de check y presiona iniciar (start).

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/LinkStar/plex/docker 1.PNG"/></div>

- **Paso 2**: Abre la Configuración Inicial de Plex Media Server

    En tu navegador web, ingresa la dirección 192.168.2.1:32400/web. Esto abrirá la página de configuración inicial de Plex Media Server. Ten en cuenta que 32400 es el puerto donde está corriendo el contenedor Docker de Plex.

- **Paso 3**: Establece un Nombre para el Servidor

    Escribe un nombre deseado para el servidor en el campo proporcionado y haz clic en "SIGUIENTE" para continuar.

- **Paso 4**: Organiza la Biblioteca de Medios

    Para comenzar a organizar tu biblioteca de medios, haz clic en el botón "AGREGAR BIBLIOTECA".

- **Paso 5**: Selecciona el Tipo de Biblioteca

    Elige el tipo de biblioteca apropiado para tu contenido, como Películas, Series, Música, etc., y haz clic en "SIGUIENTE".

- **Paso 6**: Añade la Carpeta de Medios

    Haz clic en "EXAMINAR CARPETA DE MEDIOS" y selecciona la carpeta de datos. Al configurar previamente el contenedor Plex, esta carpeta de datos está vinculada a la carpeta /plex/media en OpenWrt. Haz clic en "AGREGAR BIBLIOTECA" para confirmar.

- **Paso 7**: Completa la Configuración

    Haz clic en "SIGUIENTE" y luego en "FINALIZAR" para concluir el proceso de configuración inicial.

Ahora serás recibido con la interfaz de usuario de Plex Media Server, que te permitirá acceder y administrar tu colección de medios sin problemas.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/plex interface.PNG"/></div>

## Montar el Directorio de Plex en la PC y Transferir el Contenido

- **Paso 1.** En la interfaz Luci de OpenWrt, navega a `NAS > Comparticiones de Red > AÑADIR`

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/NAS1.PNG"/></div>

- **Paso 2.** Llena los campos de la siguiente manera:

        - Nombre: Plex 
        - Ruta: /plex
        - Navegable: marcado
        - Permitir invitados: marcado
        - Máscara de creación: 0666
        - Máscara de directorio: 0777

- **Paso 3.** Presiona **Guardar y aplicar**

- **Paso 4.** Ve al explorador de archivos de Windows y haz clic en **Conectar unidad de red**. Luego escribe: `\\192.168.100.1\plex`

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/NAS2.PNG"/></div>

- **Paso 5.** Agrega tus películas o música favoritas a la carpeta `media`.

- **Paso 6.** Vuelve al servidor de medios Plex y haz clic en **Más**

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/LinkStar/plex/NAS3.PNG"/></div>

- **Paso 7.** Luego haz clic en los tres puntos y selecciona **Escanear archivos de biblioteca**. Ahora podrás ver las películas o canciones que agregaste recientemente a tu biblioteca.

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/LinkStar/plex/NAS4.PNG"/></div>

Implementar un servidor de medios, ya sea en casa o en un pequeño hotel o cafetería, permite ofrecer una experiencia de entretenimiento excepcional a ti mismo, a tu familia, a los huéspedes o a los clientes. Es una solución económica que centraliza el almacenamiento de medios, reduce el desorden de dispositivos y ofrece acceso remoto y opciones de personalización.

## Recursos

- **[Página Web]** [Documentación Oficial de Docker](https://docs.docker.com)

- **[Página Web]** [Docker Hub](https://hub.docker.com)

- **[Página Web]** [Plex Media Server](https://www.plex.tv)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte distintos tipos de soporte y asegurarnos de que tu experiencia con nuestros dispositivos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>





