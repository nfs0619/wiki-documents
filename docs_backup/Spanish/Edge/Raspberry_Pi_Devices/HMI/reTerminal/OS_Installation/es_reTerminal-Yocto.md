---
description: Yocto para reTerminal
title: Yocto para reTerminal
keywords:
  - Edge
  - reTerminal OS_Installation
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal-Yocto
last_update:
  date: 04/03/2025
  author: Erick González
---

# Yocto para reTerminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/yocto-wiki-thumb.jpg" alt="pir" width="500" height="auto"/></p>

## Descripción general

### ¿Qué es Yocto Project®?

El [Yocto Project](https://www.yoctoproject.org) es un proyecto de colaboración de código abierto que ayuda a los desarrolladores a crear sistemas basados en Linux personalizados para productos embebidos, independientemente de la arquitectura de hardware.

El proyecto proporciona un conjunto flexible de herramientas y un espacio donde desarrolladores embebidos de todo el mundo pueden compartir tecnologías, stacks de software, configuraciones y buenas prácticas para crear imágenes de Linux a medida en dispositivos integrados.

También ofrece un estándar para soportar hardware y stacks de software, permitiendo intercambiar configuraciones y builds. Las herramientas permiten a los usuarios compilar y mantener personalizaciones para múltiples plataformas de hardware y stacks de software de forma escalable.

### ¿Por qué usar Yocto?

El Yocto Project tiene un modelo de desarrollo para crear Linux embebido que lo distingue de otros sistemas de compilación simples. Se llama **Modelo de Capas (Layer Model)**.

El Layer Model está diseñado para admitir colaboración y personalización simultáneamente. Las capas son repositorios con conjuntos de instrucciones relacionadas, que indican al sistema de compilación lo que debe hacer. Los usuarios pueden colaborar, compartir y reutilizar capas. Estas capas pueden contener cambios sobre instrucciones o configuraciones previas en cualquier momento.

Esta potente capacidad de override es lo que permite personalizar capas colaborativas o de la comunidad para adaptarlas a los requisitos de tu producto.

Usa diferentes capas para separar lógicamente la información en tu build. Por ejemplo, podrías tener una capa BSP, una capa GUI, una capa de configuración de distro, middleware o una aplicación. Poner todo en una sola capa complica personalizaciones futuras y reutilización. En cambio, aislar la información en capas facilita mantener y reutilizar.

### Características de Yocto

Yocto tiene las siguientes características:

- **CII Best Practices:** Es un proyecto registrado en la LF Core Infrastructure Initiative (CII) con un nivel de verificación. Indica que el software sigue buenas prácticas.

- **Reproducibilidad binaria:** Yocto controla dependencias evitando contaminación y ha logrado ~99.8% de reproducibilidad en "core-image minimal", algo menor en pruebas ampliadas.

- **Cross Platform Development Framework (CROPS):** Es un framework de desarrollo, con contenedores Docker, para un entorno manejable y extensible que permite compilar binarios en diversas arquitecturas en Windows, Linux y Mac OS.

- **Extensible SDK:** El eSDK del Yocto Project tiene herramientas para añadir fácilmente apps y librerías a una imagen, modificar fuente de un componente y probar cambios en hardware destino.

- **Toaster:** Una interfaz web para OpenEmbedded y BitBake, el sistema de build en Yocto. Permite configurar y ejecutar compilaciones, además de ver estadísticas.

- **Multi-Config:** El sistema de compilación puede construir varias arquitecturas con un solo comando.

- **Binary Builds:** Permite incluir archivos binarios sin incluir sus fuentes.

- **Generación de manifest de licencias de código abierto:** Yocto puede rastrear licencias usadas en la compilación y proporcionar un manifiesto de licencias y referencias a su código.

Siguiendo la guía, podrás crear tu propia imagen de sistema para [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) usando Yocto. ¡Empecemos!

## Compilar el código fuente de Yocto

### Compilación manual en la máquina local - usando Bitbake (línea de comandos)

Ahora compilarás manualmente la imagen de sistema para reTerminal con Yocto vía CLI.

**Nota:** Esta guía se elaboró tras probar en un PC host con Ubuntu 20.04.

#### Compilar con configuración por defecto para reTerminal

Sigue estos pasos para compilar con la configuración por defecto para reTerminal.

- **Paso 1.** Prepara el entorno de desarrollo en el PC host instalando:

```sh
sudo apt update
sudo apt install gawk wget git-core diffstat unzip texinfo gcc-multilib build-essential chrpath socat python3-distutils
```

**Nota:** Si tu PC host corre otra distro Linux, revisa [aquí](https://www.yoctoproject.org/docs/1.8/ref-manual/ref-manual.html#required-packages-for-the-host-development-system)

- **Paso 2.** Crea un directorio nuevo y entra:

```sh
mkdir reterminal-yocto
cd reterminal-yocto
```

- **Paso 3.** Crea un directorio para las capas y entra:

```sh
mkdir layers 
cd layers
```

- **Paso 4.** Clona el repositorio de poky:

```sh
git clone -b dunfell git://git.yoctoproject.org/poky
```

- **Paso 5.** Clona otros repos:

```sh
git clone -b dunfell https://github.com/Seeed-Studio/meta-seeed-cm4.git
git clone -b master git://git.yoctoproject.org/meta-raspberrypi
git clone -b dunfell https://github.com/meta-qt5/meta-qt5.git
git clone -b dunfell https://github.com/openembedded/meta-openembedded.git
```

- **Paso 6.** Cambia kernel 5.4 a 5.10 en meta-raspberrypi:

```sh
cd meta-raspberrypi/
cp -r recipes-kernel/linux/ ../
git checkout dunfell
rm -r recipes-kernel/linux/
mv -f ../linux/ recipes-kernel/
cd ../../
```

- **Paso 7.** Inicializa el entorno de compilación:

```sh
source layers/poky/oe-init-build-env
```

- **Paso 8.** Agrega las capas al entorno:

```sh
bitbake-layers add-layer ../layers/meta-raspberrypi
bitbake-layers add-layer ../layers/meta-seeed-cm4
bitbake-layers add-layer ../layers/meta-qt5
bitbake-layers add-layer ../layers/meta-openembedded/meta-oe
bitbake-layers add-layer ../layers/meta-openembedded/meta-python
```

- **Paso 9.** Vuelve al directorio **build** y compila:

```sh
MACHINE="seeed-reterminal" bitbake rpi-test-image
```

#### Encontrar la imagen compilada

Después, ve a **build/tmp/deploy/images/seeed-reterminal/** y revisa si se generó la imagen:

```sh
cd tmp/deploy/images/seeed-reterminal/;ls -lh rpi-test-image*.wic.bz2
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/Yocto-bitbake-image-location.png" alt="pir" width="1000" height="auto"/></p>

Ahí verás **rpi-test-image-seeed-reterminal.rootfs.wic.bz2**

#### Comandos Bitbake útiles

**Iniciar compilación**:

```
bitbake <imagen>
bitbake <imagen> -k
```

Ejemplo: `bitbake rpi-test-image` o `bitbake rpi-test-image -k`.

**Mostrar paquetes en la imagen**:

```
bitbake -g <imagen> && cat pn-buildlist | grep -v -e '-native' | grep -v digraph | grep -v -e '-image' | awk '{print $1}' | sort | uniq
```

Ejemplo:

```sh
bitbake -g rpi-test-image && cat pn-buildlist | grep -v -e '-native' | grep -v digraph | grep -v -e '-image' | awk '{print $1}' | sort | uniq
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/image-packages.png" alt="pir" width="800" height="auto"/></p>

**Mostrar dependencias de un paquete**:

```
bitbake -g <paquete> && cat pn-buildlist | grep -v -e '-native' | grep -v digraph | grep -v -e '-image' | awk '{print $1}' | sort | uniq
```

Ejemplo:

```sh
bitbake -g i2c-tools && cat pn-buildlist | grep -v -e '-native' | grep -v digraph | grep -v -e '-image' | awk '{print $1}' | sort | uniq
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/package-depends.png" alt="pir" width="800" height="auto"/></p>

**Task dependency explorer UI**:

```
bitbake <imagen> -g -u taskexp
```

Ejemplo:

```sh
bitbake rpi-test-image -g -u taskexp
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/task-explorer-ui.png" alt="pir" width="800" height="auto"/></p>

**Desplegar devshell para un paquete**:

```
bitbake <paquete> -c devshell
```

Ejemplo:

```sh
bitbake evtest -c devshell
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/devshell.png" alt="pir" width="800" height="auto"/></p>

**Listar tareas de un paquete**:

```
bitbake <paquete> -c listtasks
```

Ejemplo:

```sh
bitbake evtest -c listtasks
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/tasks.png" alt="pir" width="800" height="auto"/></p>

**Configuración interactiva del kernel**:

```
bitbake virtual/kernel -c menuconfig
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/kernel-config.png" alt="pir" width="800" height="auto"/></p>

**Mostrar capas**:

```
bitbake-layers show-layers
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/layers.png" alt="pir" width="800" height="auto"/></p>

**Mostrar recetas**:

```
bitbake-layers show-recipes
```

Para ver la receta usada: `bitbake-layers show-recipes | grep rpi`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/rpi-test.png" alt="pir" width="800" height="auto"/></p>

**Verificar si un paquete está presente**:

```
bitbake -s | grep <paquete>
```

Ejemplo:

```sh
bitbake -s | grep openssl
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/check-package.png" alt="pir" width="800" height="auto"/></p>

**Guardar log detallado**:

```
bitbake -v <imagen> 2>&1 | tee image_build.log
```

Ejemplo:

```sh
bitbake -v rpi-test-image 2>&1 | tee image_build.log
```

**Limpiar el entorno**:

```
bitbake -c cleanall [paquete]
```

Ejemplo:

```sh
bitbake -c cleanall i2c-tools
```

### Compilación manual en la máquina local - usando Toaster (GUI)

Ahora compilaremos manualmente la imagen para reTerminal con Yocto usando Toaster.

Toaster es una interfaz web para OpenEmbedded y BitBake, permitiendo configurar y ejecutar builds, además de ver estadísticas.

**Nota:** Guía verificada en Ubuntu 20.04.

- **Paso 1.** Actualiza:

```sh
sudo apt update
```

- **Paso 2.** Instala:

```sh
sudo apt-get install gawk wget git-core diffstat unzip texinfo gcc-multilib \
     build-essential chrpath socat cpio python3 python3-pip python3-pexpect \
     xz-utils debianutils iputils-ping python3-git python3-jinja2 libegl1-mesa libsdl1.2-dev \
     pylint3 xterm
```

**Nota:** Para otra distro de Linux, revisa [este enlace](https://www.yoctoproject.org/docs/3.1/ref-manual/ref-manual.html#required-packages-for-the-build-host)

- **Paso 3.** Clona poky:

```sh
git clone -b master git://git.yoctoproject.org/poky
```

- **Paso 4.** Entra a **poky**:

```sh
cd poky
```

- **Paso 5.** Instala paquetes Toaster:

```sh
pip3 install --user -r bitbake/toaster-requirements.txt
```

- **Paso 6.** Regresa a commit específico en poky:

```sh
git reset --hard 7ade8346b3a09983257589d22aaada47e0eec010
```

- **Paso 7.** Settea entorno:

```sh
source oe-init-build-env
```

- **Paso 8.** Desde **build**, inicia toaster:

```sh
source toaster start
```

- **Paso 9.** Accede con navegador:

```sh
http://127.0.0.1:8000
```

**Nota:** Por defecto, Toaster inicia en puerto 8000. Puedes cambiarlo con `source toaster start webport=9000`.

- **Paso 10.** En la interfaz web, clic en **New project**:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-ui.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 11.** Ingresa un **Project name**, selecciona **New project**, en **Release** => **Local Yocto Project** => **Create project**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-name.jpg" alt="pir" width="450" height="auto"/></p>

- **Paso 12.** En **Configuration** tab, bajo **Machine**, elige **raspberrypi4-64** y clic en **Save**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-rpi64.png" alt="pir" width="700" height="auto"/></p>

- **Paso 13.** Clic en **Import layer**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-import-layer.png" alt="pir" width="500" height="auto"/></p>

- **Paso 14.** Completa info:

  - Layer name: meta-raspberrypi
  - Source code: "In a Git repository"
  - URL: <https://github.com/agherzan/meta-raspberrypi.git>
  - Git revision: 8dc3a310883ea87cd9900442f46f20bb08e57583

- **Paso 15.** Clic en **Import and add to project**.

- **Paso 16.** Repite para más capas:

- **meta-qt5**
  - name: meta-qt5
  - Git: <https://github.com/meta-qt5/meta-qt5.git>
  - revision: master

- **meta-seeed-reterminal**
  - name: meta-seeed-reterminal
  - Git: <https://github.com/Seeed-Studio/meta-seeed-reterminal.git>
  - revision: main

- **meta-oe**
  - name: meta-oe
  - Git: <https://github.com/openembedded/meta-openembedded.git>
  - subdirectory: meta-oe
  - revision: master

- **meta-python**
  - name: meta-python
  - Git: <https://github.com/openembedded/meta-openembedded.git>
  - subdirectory: meta-python
  - revision: master

- **Paso 17.** Una vez importadas todas las capas, en **Layers** verás las capas añadidas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-layers.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 18.** Ve a **BitBake variables** y añade:

```
- Variable:RPI_KERNEL_DEVICETREE_OVERLAYS_append
- Value: overlays/reTerminal.dtbo overlays/i2c3.dtbo
```

**Nota:** Asegúrate de dejar un espacio antes de "overlays/xxxx".

- **Paso 19.** Repite para añadir:

```
- Variable:PACKAGECONFIG_append_pn-qtbase
- Value: eglfs
```

**Nota:** Asegúrate de espacio antes de "eglfs".

```
- Variable:DISTRO_FEATURES_remove
- Value: x11 wayland vulkan
```

**Nota:** Espacio antes de "x11...".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-variables.png" alt="pir" width="500" height="auto"/></p>

- **Paso 20.** Teclea **rpi-test-image** y clic en **Build** para iniciar la compilación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build.png" alt="pir" width="500" height="auto"/></p>

Verás el proceso:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build-process.png" alt="pir" width="1000" height="auto"/></p>

Al finalizar:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build-finish.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 21.** Haz clic en **rpi-test-image** para ver detalles.

- **Paso 22.** Bajo **Image files**, clic en **tar.bz2** para descargar la imagen compilada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build-stats-1.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 23.** Desplázate para ver el **Build Summary**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build-stats-2.png" alt="pir" width="1000" height="auto"/></p>

### Descargar imagen compilada

Si quieres una imagen de reTerminal ya compilada con Yocto, sigue:

- **Paso 1.** Abre [este enlace](https://github.com/Seeed-Studio/meta-seeed-reterminal/actions) para ir a **Actions** en **meta-seeed-reterminal**.

- **Paso 2.** Haz clic en el workflow más reciente **Seeed reTerminal Yocto embedded linux**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/workflows.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 3.** En **Artifacts**, haz clic en **yocto deploy** para descargar la imagen.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/deploy.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 4.** Tras descargarla, se llamará **yocto deploy.zip**. Descomprímela para ver **yocto-image.tar.xz**.

- **Paso 5.** Extrae **yocto-image.tar.xz** y obtendrás **yocto-image.tar**.

- **Paso 6.** Extrae **yocto-image.tar** y navega a `deploy > images > raspberrypi4-64`. Busca un archivo **.rootfs.wic.bz2**, la imagen del sistema.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/compiled-image-search.png" alt="pir" width="1000" height="auto"/></p>

## Flashear la imagen en reTerminal

Ahora flashearemos la imagen a la eMMC del CM4 del reTerminal.

Sigue los pasos [aquí](https://wiki.seeedstudio.com/reTerminal/#getting-started-with-reterminal-extended) y presta atención a:

**Nota:** Al abrir **Raspberry Pi Imager**, en **CHOOSE OS**, selecciona **Use custom** y elige **.rootfs.wic.bz2**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/RPi-imager-1.png" alt="pir" width="600" height="auto"/></p>

## Primer arranque en reTerminal

Tras flashear la imagen, enciende reTerminal. Verás el kernel log en la LCD y finalmente una demo hecha con Qt.

El tiempo de arranque de la imagen por defecto es ~17 segundos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/bootup.gif" alt="pir" width="1000" height="auto"/></p>

## Iniciar sesión en reTerminal desde PC vía consola serial

Se recomienda iniciar sesión en el OS dentro de reTerminal usando conexión serial. Consulta [esta wiki](https://wiki.seeedstudio.com/reTerminal-FAQ/#q5-how-can-i-log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-a-usb-to-serial-converter) para detalles. Ingresa como **root**.

## Probar la imagen Yocto

Para probar la imagen Yocto en reTerminal, visita [reTerminal Hardware and Interfaces Usage wiki](https://wiki.seeedstudio.com/reTerminal-hardware-interfaces-usage) y sigue pasos.

## Charla en Yocto Project Summit 2021

Esta charla se centra en cómo crear fácilmente imágenes Linux personalizadas para placas CM4, X86 y STM32 usando Yocto. Al final, hay demos HMI basadas en Qt, LVGL y una demo de OTA robusto y seguro con Mender.

<p style={{textAlign: 'center'}}><iframe width="720" height="480" src="https://www.youtube.com/embed/OHT9f_NOEpA" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Recursos

- **[Página web]** [Documentación Yocto](https://docs.yoctoproject.org/)
- **[Página web]** [Manual de Toaster](https://www.yoctoproject.org/docs/current/toaster-manual/toaster-manual.html)
- **[GitHub]** [meta-seeed-reterminal](https://github.com/Seeed-Studio/meta-seeed-reterminal)

## Soporte técnico y debate de productos

¡Gracias por elegir nuestros productos! Queremos brindarte varios tipos de soporte para garantizar la mejor experiencia posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
