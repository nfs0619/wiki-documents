---
description: A Guide to Integrating LinkStar, Grocy, and BookStack in Your Office
title: Una Guía para Integrar LinkStar, Grocy y BookStack en tu Oficina
keywords:
  - LinkStar
  - Getting started
  - Bookstack
  - Grocy
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/grocy-bookstack-linkstar
last_update:
  date: 06/10/2025
  author: Guillermo
---
# Tomando el Control: Soluciones Autoalojadas para la Gestión de Oficinas con LinkStar, Grocy y BookStack
La integración de Grocy y BookStack dentro de un servidor de oficina autoalojado potenciado por un router LinkStar ofrece una solución atractiva para operaciones eficientes y organizadas. Con Grocy, las empresas pueden gestionar eficazmente sus productos de abarrotes, listas de compras y tareas, asegurando procesos optimizados y reducción de desperdicios. Por otro lado, BookStack proporciona una plataforma centralizada de documentación que fomenta la colaboración, el intercambio de conocimiento y el fácil acceso a información importante. Al alojar ambas aplicaciones en el router LinkStar, las empresas obtienen control sobre sus datos, mejoran la seguridad y eliminan la dependencia de servicios externos. Esta configuración autoalojada permite a las oficinas optimizar flujos de trabajo, aumentar la productividad y crear un ambiente laboral bien estructurado y eficiente. En esta publicación, exploraremos la importancia de integrar Grocy y BookStack dentro de un servidor de oficina potenciado por LinkStar, destacando los beneficios y mostrando cómo esta combinación revoluciona la gestión de oficinas.

## ¿Qué es Docker?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/plex/docker.png" alt="pir" width="200" height="auto"/></p>

[Docker](https://docs.docker.com/) es una plataforma de código abierto que permite a los desarrolladores automatizar el despliegue y la gestión de aplicaciones dentro de contenedores ligeros y aislados. Los contenedores son unidades autónomas que empaquetan una aplicación junto con sus dependencias, librerías y archivos de configuración, permitiendo que se ejecute consistentemente en diferentes entornos. Docker simplifica el proceso de creación, distribución y ejecución de aplicaciones, facilitando el desarrollo y despliegue de software de manera consistente y reproducible. Con Docker, los desarrolladores pueden encapsular sus aplicaciones y asegurarse de que funcionen sin problemas en distintos sistemas operativos e infraestructuras, convirtiéndolo en una herramienta invaluable para construir aplicaciones portátiles y escalables, optimizar flujos de trabajo de desarrollo y facilitar la colaboración eficiente entre equipos.

## ¿Qué es Portainer?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/pontainer-bg.png" alt="pir" width="200" height="auto"/></p>

[Portainer](https://www.portainer.io/) es una interfaz de gestión poderosa e intuitiva de código abierto diseñada específicamente para Docker. Con su interfaz gráfica web amigable, Portainer simplifica el despliegue y la administración de contenedores, imágenes, redes y volúmenes Docker. Ofrece una representación visual del entorno de contenedores, permitiendo a los usuarios crear, iniciar, detener y eliminar contenedores con unos pocos clics. La monitorización del uso de recursos, visualización de logs y acceso a terminales de contenedores se realiza de forma sencilla dentro de la interfaz de Portainer. Además, Portainer soporta control de acceso basado en roles, proporcionando control granular sobre los privilegios de usuarios. Ya seas principiante o usuario avanzado de Docker, Portainer es una herramienta invaluable que simplifica la gestión de contenedores, haciéndola accesible y eficiente para todos.

## ¿Qué es BookStack?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstackicon.png" alt="pir" width="200" height="auto"/></p>

[BookStack](https://www.bookstackapp.com/) es una plataforma poderosa y fácil de usar de código abierto diseñada para crear y gestionar documentación y bases de conocimiento. Con su interfaz intuitiva, BookStack permite a equipos y organizaciones organizar y compartir información eficientemente. Ofrece una estructura jerárquica donde el contenido se puede organizar en libros, capítulos y páginas, facilitando la navegación y recuperación de información. BookStack soporta edición de texto enriquecido, permitiendo a los usuarios formatear y dar estilo a su contenido de forma efectiva. También ofrece características como inserción de imágenes, control de versiones y herramientas de colaboración, fomentando el trabajo en equipo fluido y la gestión eficiente del conocimiento. Ya sea para documentación interna, soporte al cliente o propósitos educativos, BookStack es una solución versátil y ampliamente usada que facilita el proceso de crear y mantener bases de conocimiento completas.

## ¿Qué es Grocy?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/grocy_logo.svg" alt="pir" width="200" height="auto"/></p>

[Grocy](https://grocy.info/) es una aplicación web autoalojada y de código abierto que ayuda a los usuarios a gestionar sus abarrotes, artículos del hogar y tareas. Proporciona funciones para rastrear inventario de alimentos, crear listas de compras, gestionar recetas y llevar control de fechas de caducidad.

## Configurar el entorno Docker en el router LinkStar OpenWRT.

Por defecto, la instalación de Docker en LinkStar tiene una capacidad de almacenamiento de alrededor de 250MB, lo que puede no ser suficiente para instalar imágenes. Por lo tanto, necesitamos asignar más espacio a Docker para satisfacer nuestros requerimientos. Al igual que en la [Wiki del servidor de medios Plex](https://wiki.seeedstudio.com/plex_media_server/), debes seguir ciertos pasos. Si ya lo has hecho, puedes omitir este paso.

**Nota:** Asegúrate de seguir la guía [Configurar el entorno Docker en el router LinkStar OpenWRT](https://wiki.seeedstudio.com/plex_media_server/#set-up-the-docker-environment-on-the-linkstar-openwrt-router) antes de continuar con esta guía.

## Instalar el contenedor Portainer

Este tema se discute en la integración de WordPress con LinkStar. Por lo tanto, debes seguir estos pasos si instalas Portainer por primera vez. Aquí está el enlace para [instalar el contenedor Portainer](https://wiki.seeedstudio.com/wordpress_linkstar/#install-portainer-container).

## Instalar BookStack

### Paso 01: Crear una nueva pila (stack)

En el contexto del uso de aplicaciones, una pila se refiere a un conjunto de servicios relacionados. Por lo tanto, nuestro primer paso es establecer una nueva pila. Para ello, navega a la barra lateral y localiza la opción **Stacks**. Haz clic y selecciona **Add Stack** para continuar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstack1.PNG" alt="pir" width="600" height="auto"/></p>

### Paso 02: Instalar BookStack usando el editor web

En este paso, deberás proporcionar un nombre para la pila y copiar el siguiente texto en formato docker-compose al editor web.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstack2.PNG" alt="pir" width="600" height="auto"/></p>

```sh
---
version: "2"
services:
  bookstack:
    image: lscr.io/linuxserver/bookstack
    container_name: bookstack
    environment:
      - APP_URL=http://192.168.100.1:6875
      - DB_HOST=bookstack_db
      - DB_PORT=3306
      - DB_USER=bookstack
      - DB_PASS=yourdbpass
      - DB_DATABASE=bookstackapp
    volumes:
      - ./bookstack_app_data:/config
    ports:
      - 6875:80
    restart: unless-stopped
    depends_on:
      - bookstack_db
  bookstack_db:
    image: lscr.io/linuxserver/mariadb
    container_name: bookstack_db
    environment:
      - MYSQL_ROOT_PASSWORD=yourdbpass
      - TZ=Asia/Colombo
      - MYSQL_DATABASE=bookstackapp
      - MYSQL_USER=bookstack
      - MYSQL_PASSWORD=yourdbpass
    volumes:
      - ./bookstack_db_data:/config
    restart: unless-stopped

```

El archivo docker-compose proporcionado incluye dos contenedores Docker distintos: uno para la aplicación BookStack y otro para la base de datos SQL. Este es el método recomendado para instalar BookStack. Sin embargo, hay algunos cambios importantes que deben hacerse antes de continuar.

Primero, reemplaza `"yourappurl"` con la URL deseada a través de la cual planeas acceder a la aplicación BookStack. Además, modifica `"yourdbpass"` por una contraseña de tu preferencia. Es fundamental que la misma contraseña se use en ambos contenedores para mantener la consistencia.

Finalmente, recuerda ajustar la variable `"TZ"` para que coincida con tu [zona horaria](https://es.wikipedia.org/wiki/Anexo:Zonas_horarias) específica.

Al hacer estas modificaciones necesarias, podrás configurar exitosamente el archivo docker-compose para tu instalación de BookStack.

Debajo de la página encontrarás el botón **Deploy Stack**; haz clic en él.

### Paso 03: Acceder a BookStack

Después de que termine el proceso de despliegue, podrás ver que se creó una nueva pila (stack). En nuestro caso, se llama `bookstack`. Haz clic sobre ella.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstack3.PNG" alt="pir" width="600" height="auto"/></p>

Luego podrás observar que dos contenedores están en ejecución y el puerto asignado es el 6875.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstack4.PNG" alt="pir" width="600" height="auto"/></p>

A continuación, abre tu navegador web y escribe `192.168.100.1:6875`. Serás dirigido a la página de inicio de sesión.

:::note

Email: admin@admin.com

Password: password

:::

Después de esto, podrás acceder exitosamente a la página principal de BookStack.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstack5.PNG" alt="pir" width="600" height="auto"/></p>

## Instalar Grocy

### Paso 01: Crear una nueva pila (stack)

Al igual que en el primer paso de la instalación de BookStack, necesitamos crear una nueva pila. Puedes seguir la guía anterior sobre cómo crear una nueva pila.

### Paso 02: Instalar Grocy usando el editor web

Al igual que en el segundo paso de la instalación de BookStack, debes proporcionar un nombre para la pila. Luego, copia y pega el siguiente texto docker-compose en el editor web.

```sh
---
version: "2.1"
services:
  grocy:
    image: lscr.io/linuxserver/grocy
    container_name: grocy
    environment:
      - TZ=Asia/Colombo
    volumes:
      - /grocy/config:/config
    ports:
      - 9283:80
    restart: unless-stopped

```
Debajo de la página encontrarás el botón **Deploy Stack**; haz clic en él.

### Paso 03: Acceder a Grocy

Después de que termine el proceso de despliegue, podrás ver que se creó una nueva pila (stack). En nuestro caso, se llama `grocy`. Haz clic sobre ella.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/grocy1.PNG" alt="pir" width="600" height="auto"/></p>

Luego podrás observar que el contenedor de Grocy está en ejecución y el puerto asignado es el 9283.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/grocy2.PNG" alt="pir" width="600" height="auto"/></p>

 A continuación, abre tu navegador web y escribe `192.168.100.1:9283`. Serás dirigido a la página de inicio de sesión.


:::note

Username: admin

Password: admin

:::

Después de esto, podrás acceder exitosamente a la página principal de Grocy.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/grocy3.PNG" alt="pir" width="600" height="auto"/></p>

## Recursos

- **[Página Web]** [Documentación Oficial de Docker](https://docs.docker.com)

- **[Página Web]** [Docker Hub](https://hub.docker.com)

- **[Página Web]** [Portainer](https://www.portainer.io/)

- **[Página Web]** [BookStack](https://www.bookstackapp.com/)

- **[Página Web]** [Grocy](https://grocy.info/)

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
