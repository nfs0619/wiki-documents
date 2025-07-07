---
description: Buildroot para reTerminal
title: Buildroot para reTerminal
keywords:
  - Edge
  - reTerminal OS_Installation
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal-Buildroot-SDK
last_update:
  date: 04/03/2025
  author: Erick González
---

# Buildroot para reTerminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/thumb.jpg" alt="pir" width="500" height="auto"/></p>

## Introducción

[Buildroot](https://buildroot.org) es una herramienta fácil de usar que simplifica y automatiza el proceso de construir un sistema Linux completo para un sistema embebido, utilizando cross-compilación.

Para lograr esto, Buildroot puede generar una toolchain de cross-compilación, un root filesystem, una imagen de kernel Linux y un bootloader para tu dispositivo objetivo. Buildroot se puede usar para cualquiera de estas opciones de forma independiente (por ejemplo, puedes usar una toolchain de cross-compilación existente y compilar solo tu root filesystem con Buildroot).

Tiene una estructura simple que facilita su comprensión y extensión, basándose únicamente en el lenguaje Makefile. Buildroot es un proyecto de código abierto y muchos desarrolladores contribuyen a él diariamente.

Siguiendo la guía a continuación, podrás compilar tu propia imagen de sistema para [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) utilizando Buildroot. ¡Empecemos!

## Compilar el código fuente de Buildroot

### Compilación manual en la máquina local

Ahora pasaremos a compilar manualmente la imagen de sistema para reTerminal usando Buildroot.

**Nota:** Esta guía se elaboró tras probar en un PC host con Ubuntu 20.04. Sin embargo, funcionará en otros sistemas Linux.

- **Paso 1.** Prepara el entorno de desarrollo en el PC host instalando los siguientes paquetes (git, gcc, make):

```sh
sudo apt update
sudo apt install git
sudo apt install build-essential
```

**Nota:** Si ya tienes los paquetes anteriores, puedes omitir.

- **Paso 2.** Clona el siguiente repositorio de GitHub:

```sh
git clone --depth=1 https://github.com/Seeed-Studio/seeed-linux-buildroot.git -b master
```

- **Paso 3.** Accede al directorio **seeed-linux-buildroot**:

```sh
cd seeed-linux-buildroot
```

#### Compilar con la configuración por defecto para reTerminal

Ejecuta:

```sh
make reTerminal_64_defconfig
make
```

#### Compilar con configuración propia para reTerminal

Instala el paquete necesario para configuración manual:

```sh
sudo apt install libncurses-dev
```

- **Paso 5.** Teclea:

```sh
make menuconfig
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/menuconfig.png" alt="pir" width="1000" height="auto"/></p>

Puedes navegar por las opciones y **personalizar la imagen** según tus necesidades. Si haces **Save** y **Exit** sin cambiar nada, se cargará la configuración por defecto de reTerminal.

#### Encontrar la imagen compilada

Una vez la compilación sea exitosa, en `seeed-linux-buildroot/output/images` encontrarás la imagen compilada como **sdcard.img**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/image-location-1.png" alt="pir" width="1000" height="auto"/></p>

### Descargar imagen compilada

Si deseas descargar una imagen de reTerminal ya compilada con Buildroot, sigue:

- **Paso 1.** Abre [este enlace](https://github.com/Seeed-Studio/seeed-linux-buildroot/actions) para entrar a **Actions** del repositorio **seeed-linux-buildroot**.

- **Paso 2.** Haz clic en el workflow más reciente **Seeed reTerminal buildroot**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/workflow.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 3.** Bajo **Artifacts**, haz clic en **buildroot deploy** para descargar la imagen.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/download.jpg" alt="pir" width="1000" height="auto"/></p>

**Nota:** Tras descargar la imagen, extráela para obtener el archivo **sdcard.img**.

## Flashear la imagen al reTerminal

Ahora flashearemos la imagen a la eMMC del CM4 en el reTerminal.

Sigue los pasos de [esta wiki](https://wiki.seeedstudio.com/reTerminal/#getting-started-with-reterminal-extended) y presta atención a:

**Nota:** Al abrir **Raspberry Pi Imager**, haz clic en **CHOOSE OS**, selecciona **Use custom** y elige el archivo **sdcard.img** descargado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/RPi-imager-1.png" alt="pir" width="600" height="auto"/></p>

## Primer arranque en reTerminal

Tras flashear la imagen al reTerminal, enciende el reTerminal. Verás el kernel log en la LCD y finalmente se abrirá una demo hecha con Qt.

El tiempo de arranque de la imagen por defecto es ~30 segundos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/bootup.gif" alt="pir" width="1000" height="auto"/></p>

## Analizar la imagen de Buildroot

Como se mencionó, Buildroot es muy poderoso, puede depender de librerías y herramientas de terceros para compilar rápidamente lo necesario. Para entender el tiempo de compilación, dependencias, tamaño de recursos y más, Buildroot ofrece herramientas de análisis visual con unos pocos comandos.

Instala:

```sh
sudo apt install python3-matplotlib python3-numpy
```

### Generar diagramas de dependencias

Uno de los trabajos de Buildroot es entender las dependencias entre paquetes y asegurarse de compilar en el orden correcto. A veces, estas dependencias pueden ser complejas. Buildroot puede generar diagramas de dependencias (PDF) para ayudar a entender y verificar.

- **Paso 1.** Instala:

```sh
sudo apt install graphviz
```

- **Paso 2.** Genera diagramas:

```sh
make graph-depends
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/depends-command.png" alt="pir" width="1000" height="auto"/></p>

Tras eso, se generarán en `seeed-linux-buildroot/output/graphs`:

- graph-depends.pdf
- graph-depends.dot

[![](https://files.seeedstudio.com/wiki/ReTerminal/buildroot/graph-depends-img.png)](https://files.seeedstudio.com/wiki/ReTerminal/buildroot/graph-depends-img.png)

**Nota:** Haz clic en la imagen para verla ampliada.

### Generar análisis de tamaño de recursos en la compilación

Buildroot puede generar un análisis del tamaño de recursos consumidos.

Teclea:

```sh
make graph-size
```

Tras ello, se generan en `seeed-linux-buildroot/output/graphs`:

- graph-size.pdf
- file-size-stats.csv
- package-size-stats.csv

[![](https://files.seeedstudio.com/wiki/ReTerminal/buildroot/graph-size-img.png)](https://files.seeedstudio.com/wiki/ReTerminal/buildroot/graph-size-img.png)

**Nota:** Haz clic en la imagen para ampliarla.

## Probar la imagen Buildroot

Para probar la imagen Buildroot en reTerminal, visita la [wiki reTerminal Hardware and Interfaces Usage](https://wiki.seeedstudio.com/reTerminal-hardware-interfaces-usage) y sigue los pasos.

## Recursos

- **[Página web]** [Documentación oficial de Buildroot](https://buildroot.org/docs.html)
- **[GitHub]** [seeed-linux-buildroot](https://github.com/Seeed-Studio/seeed-linux-buildroot)

## Soporte técnico y debate de productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte distintos tipos de soporte y asegurarnos de que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diversas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
