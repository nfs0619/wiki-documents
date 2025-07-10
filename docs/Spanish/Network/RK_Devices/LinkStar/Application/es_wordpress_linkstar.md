---
description: Streamlining Web Development, The Perfect Duo - Linkstar and WordPress
title: Optimización del Desarrollo Web, La Pareja Perfecta - LinkStar y WordPress
keywords:
  - LinkStar
  - Getting started
  - WordPress
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/wordpress_linkstar 
last_update:
  date: 10/06/2025
  author: Guillermo
---
# Optimización del Desarrollo Web: La Pareja Perfecta - LinkStar y WordPress

Bienvenido a esta wiki informativa que te guiará a través del proceso de instalación de WordPress utilizando Docker y cómo acceder al panel de administración de WordPress. Aprovecha el poder transformador de LinkStar mientras personalizas tu sitio web local, cautivas a tus clientes y aumentas tus ventas. Prepárate para experimentar un crecimiento sin igual, eficiencia y destreza técnica con las capacidades de vanguardia de LinkStar. Da el primer paso hoy hacia el éxito sin límites.

## ¿Qué es Docker?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/plex/docker.png" alt="pir" width="200" height="auto"/></p>

[Docker](https://docs.docker.com/) es una plataforma de código abierto que permite a los desarrolladores automatizar el despliegue y la gestión de aplicaciones dentro de contenedores ligeros y aislados. Los contenedores son unidades autocontenidas que empaquetan una aplicación junto con sus dependencias, bibliotecas y archivos de configuración, permitiendo que se ejecuten de forma consistente en distintos entornos. Docker simplifica el proceso de creación, distribución y ejecución de aplicaciones, facilitando el desarrollo y despliegue de software de manera consistente y reproducible. Con Docker, los desarrolladores pueden encapsular sus aplicaciones y asegurar que funcionen correctamente en diferentes sistemas operativos e infraestructuras, convirtiéndolo en una herramienta invaluable para construir aplicaciones portátiles y escalables, optimizar flujos de trabajo de desarrollo y permitir una colaboración eficiente entre equipos.

## ¿Qué es Portainer?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/pontainer-bg.png" alt="pir" width="200" height="auto"/></p>

[Portainer](https://www.portainer.io/) es una interfaz de gestión potente e intuitiva de código abierto diseñada específicamente para Docker. Con su GUI web amigable, Portainer simplifica el despliegue y la administración de contenedores, imágenes, redes y volúmenes de Docker. Ofrece una representación visual del entorno de contenedores, permitiendo a los usuarios crear, iniciar, detener y eliminar contenedores fácilmente con solo unos clics. Monitorear el uso de recursos, ver registros y acceder a terminales de contenedores es muy sencillo dentro de la interfaz de Portainer. Además, Portainer admite control de acceso basado en roles, proporcionando un control granular sobre los privilegios de los usuarios. Tanto si eres principiante como un usuario avanzado de Docker, Portainer es una herramienta imprescindible que agiliza la gestión de contenedores, haciéndola accesible y eficiente para todos.

## ¿Qué es WordPress?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/wordpress.png" alt="pir" width="200" height="auto"/></p>

[WordPress](https://wordpress.com/) es un sistema de gestión de contenidos (CMS) de código abierto, muy popular y ampliamente utilizado, que impulsa millones de sitios web en todo el mundo. Ofrece una interfaz fácil de usar y un vasto ecosistema de temas, plugins y extensiones que permiten a los usuarios crear y personalizar sus sitios con facilidad. Con WordPress, puedes publicar y administrar distintos tipos de contenido fácilmente, incluidos entradas de blog, páginas, imágenes y multimedia. Su naturaleza flexible y extensible lo hace adecuado para una amplia variedad de sitios web, desde blogs simples hasta plataformas de comercio electrónico complejas. Ya seas principiante o usuario experimentado, WordPress ofrece una plataforma robusta y versátil para construir y gestionar tu presencia en línea.

## Configurar el entorno Docker en el router LinkStar con OpenWRT

Por defecto, la instalación de Docker en LinkStar tiene una capacidad de almacenamiento de alrededor de 250MB, lo cual puede no ser suficiente para instalar imágenes. Por ello, es necesario asignar más espacio a Docker para satisfacer nuestros requerimientos. Al igual que en el [WiKi del servidor Plex](https://wiki.seeedstudio.com/plex_media_server/), debes seguir los mismos pasos. Si ya lo hiciste, puedes omitir este paso.

**Nota:** Asegúrate de seguir la guía para [Configurar el entorno Docker en el router LinkStar con OpenWRT](https://wiki.seeedstudio.com/plex_media_server/#set-up-the-docker-environment-on-the-linkstar-openwrt-router) antes de continuar con esta guía.

## Instalar el contenedor de Portainer

### Paso 1: Abrir Putty y acceder al terminal de OpenWrt por SSH

Para comenzar el proceso de instalación, abre Putty y establece una conexión SSH con el terminal de OpenWrt. Ingresa los siguientes datos:

:::note

Username: root

Password: password

:::

### Paso 2: Instalar Portainer

Para ello, utiliza el siguiente comando:

```sh
docker pull portainer/portainer
``` 
Luego, escribe el siguiente comando en el terminal:

```sh
docker run -d -p 9000:9000 --name portainer --restart always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer
``` 
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer1.PNG" alt="pir" width="600" height="auto"/></p>

 Podrás observar el contenedor en ejecución desde la interfaz LuCI operando bajo Docker-Container. Puedes ver que el número de puerto es 9000.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer2.PNG" alt="pir" width="600" height="auto"/></p>

### Paso 3: Acceder a Portainer

Abre tu navegador web e ingresa la siguiente dirección: **192.168.100.1:9000**.

Esto te llevará a la página de inicio de Portainer. Para continuar, simplemente proporciona el nombre de usuario y contraseña que desees. Luego, haz clic en el botón **Create user**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer3.PNG" alt="pir" width="600" height="auto"/></p>

## Instalar WordPress

### Paso 1: Crear una plantilla personalizada de la imagen de WordPress

En la página de inicio de Portainer, navega a la sección **"App Templates"**. Desplázate hacia abajo hasta encontrar la plantilla de WordPress. Una vez localizada, haz clic en **"Copy as Custom"** para crear una configuración personalizada para tu instalación de WordPress. Esto te permitirá ajustar las opciones y parámetros según tus necesidades específicas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer4.PNG" alt="pir" width="600" height="auto"/></p>

### Paso 2: Modificar la plantilla

Al hacer clic en **"Copy as Custom"** en la plantilla de WordPress, se mostrará un formulario donde deberás proporcionar un título y una descripción para tu configuración personalizada. Llena los campos correspondientes con un título y descripción que representen adecuadamente el propósito y la naturaleza de tu instalación de WordPress.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer5.PNG" alt="pir" width="600" height="auto"/></p>

A continuación, encontrarás el script `docker-compose.yml` para WordPress. Este archivo cumple un papel crucial en la definición y configuración de la aplicación de WordPress dentro de un entorno Docker. Permite especificar una serie de parámetros como imágenes de contenedor, variables de entorno, configuraciones de red, asignación de volúmenes y dependencias entre servicios.

Al definir el estado deseado de la aplicación en el archivo `docker-compose.yml`, Docker puede crear, iniciar y gestionar automáticamente los contenedores interconectados. Esto garantiza implementaciones consistentes y reproducibles en diferentes entornos. El script `docker-compose.yml` actúa como un plano para orquestar los contenedores y sus configuraciones, lo que te permite gestionar y escalar aplicaciones complejas con eficiencia y facilidad.

**En la sección Servicios >> db >> imagen, cambia a:**

```sh
mysql/mysql-server:8.0
``` 
:::note
Puedes cambiar otros parámetros como MYSQL_USER, MYSQL_PASSWORD, etc. Pero en este caso, los dejamos tal como están.
:::
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer8.PNG" alt="pir" width="600" height="auto"/></p>

Luego, al final de la página encontrarás la opción **Create custom template**. Haz clic en ella.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer9.PNG" alt="pir" width="600" height="auto"/></p>

Después serás redirigido a una página como esta con el nombre de tu plantilla personalizada. Solo haz clic una vez sobre ella.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer10.PNG" alt="pir" width="600" height="auto"/></p>

Luego serás redirigido a una página como esta, donde debes presionar **Deploy the Stack**. Espera unos minutos para que finalice el despliegue. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer11.PNG" alt="pir" width="600" height="auto"/></p>

A continuación, verás una página como esta. Puedes ver la lista de tus stacks. Haz clic sobre el stack que acabas de crear.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer12.PNG" alt="pir" width="600" height="auto"/></p>

Ahora verás que hay dos contenedores ejecutándose, y que el número de puerto asignado a WordPress es el **49153**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer13.PNG" alt="pir" width="600" height="auto"/></p>

## Acceder a WordPress

Abre tu navegador web y escribe la dirección del router Linkstar junto con el puerto asignado, por ejemplo: **192.168.100.1:49153**. Verás la página de inicio de WordPress :)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer15.PNG" alt="pir" width="600" height="auto"/></p>

Al presionar el botón "Continuar", aparecerá un formulario para completar. Tras introducir el **título del sitio**, **nombre de usuario**, **contraseña** y **correo electrónico**, podrás acceder al panel de administración.

Aquí está el panel de administración (dashboard):

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer16.PNG" alt="pir" width="600" height="auto"/></p>

El alojamiento web local con Linkstar ofrece una gran variedad de beneficios para distintos tipos de negocios, como **cafeterías, pizzerías, instituciones educativas** y más. Al alojar sus sitios web localmente, estos negocios pueden reducir tiempos de espera y mejorar la experiencia del cliente. Con un sitio web en hosting local, los clientes pueden **acceder fácilmente a menús, realizar pedidos, hacer reservas o agendar citas desde sus propios dispositivos**. Este proceso simplificado ahorra tiempo tanto para los clientes como para el personal, lo que se traduce en **esperas más cortas y mayor eficiencia**. Además, un sitio web alojado localmente permite **publicidad más efectiva**, ya que los negocios pueden promover sus **ofertas, promociones o eventos directamente a su audiencia objetivo**. Al aprovechar el poder de Linkstar, los negocios pueden crear una **presencia en línea fluida y atractiva**, atrayendo a más clientes y mejorando su satisfacción general.

## Recursos

- **[Página Web]** [Documentación oficial de Docker](https://docs.docker.com)

- **[Página Web]** [Docker Hub](https://hub.docker.com)

- **[Página Web]** [Portainer](https://www.portainer.io/)

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes formas de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Contamos con varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>








