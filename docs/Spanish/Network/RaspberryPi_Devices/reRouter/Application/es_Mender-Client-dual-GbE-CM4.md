---
description: Mender Client on Dual GbE CM4
title: Uso de Mender
keywords:
- Sorftware Mender
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Mender-Client-dual-GbE-CM4
last_update:
  date: 06/06/2025
  author: Guillermo
---



Podemos instalar Mender Client en una placa portadora Dual Gigabit Ethernet para la Compute Module 4 de Raspberry Pi, y luego recibir actualizaciones OTA desde un servidor Mender alojado (Hosted) o autogestionado (Self-Hosted).

Esta guía se centra en el uso de la placa portadora Dual Gigabit Ethernet para RPi CM4 ejecutando un sistema Linux personalizado compilado usando el proyecto Yocto.

## Resultados de prueba

Las versiones del Proyecto Yocto que aparecen en la siguiente tabla han sido probadas por la comunidad de Mender. Puedes actualizarla si has probado esta integración en otras versiones del [Proyecto Yocto](https://wiki.yoctoproject.org/wiki/Releases?target=_blank):

| Proyecto Yocto     | Compilación | Ejecución |
|--------------------|-------------|-----------|
| dunfell (3.1 / 5.3.0) | funciona   | funciona  |

- **Compilación:** el build del Proyecto Yocto con integración Mender finaliza sin errores y genera imágenes.
- **Ejecución:** Mender funciona correctamente en la placa. Para placas con U-Boot, se ha verificado la [lista de verificación](https://docs.mender.io/devices/integrating-with-u-boot/integration-checklist?target=_blank).

## Requisitos previos

- Una distribución Linux compatible y dependencias instaladas como se describe en el [Yocto Mega Manual](https://www.yoctoproject.org/docs/current/mega-manual/mega-manual.html#detailed-supported-distros).
  - **Nota:** las instrucciones varían según la versión de Yocto.
- [Placa Dual Gigabit Ethernet para RPi CM4](https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM-4-p-4898.html)

## Configuración del build

### Configuración del entorno Yocto

Crea un directorio para el entorno `mender-dual-gbe-cm4`.

```
mkdir mender-dual-gbe-cm4 && cd mender-dual-gbe-cm4
```

Clona las capas necesarias:

```
git clone -b master git://git.yoctoproject.org/poky layers/poky
git clone -b dunfell https://github.com/Seeed-Studio/meta-seeed-cm4.git layers/meta-seeed-cm4
git clone -b master git://git.yoctoproject.org/meta-raspberrypi layers/meta-raspberrypi
git clone -b dunfell https://github.com/openembedded/meta-openembedded.git layers/meta-openembedded
git clone -b dunfell git://github.com/mendersoftware/meta-mender layers/meta-mender
```

Actualiza la versión de GStreamer en poky para que sea compatible con meta-raspberrypi.

```
cd layers/poky
cp -r meta/recipes-multimedia/gstreamer/ ../
git checkout dunfell
rm -r meta/recipes-multimedia/gstreamer/
cp -r ../gstreamer/ meta/recipes-multimedia/
rm -r ../gstreamer/
```
Modifica meta-raspberrypi para evitar errores de compilación.

```
cd layers/meta-raspberrypi
rm dynamic-layers/meta-python/recipes-connectivity/lirc/*.bbappend
sed -i '/^LAYERSERIES_COMPAT_raspberrypi/s/= .*$/= "honister dunfell"/g' conf/layer.conf
sed -i 's/arm\/armv8a\///g' conf/machine/raspberrypi4-64.conf
```

Modifica meta-mender para evitar errores de compilación.

```
cd layers/meta-mender
rm meta-mender-raspberrypi/recipes-kernel/linux/linux-raspberrypi-rt_%.bbappend
sed -i 's/"0x4000"/"0x1f000"/g' meta-mender-raspberrypi/recipes-bsp/u-boot/u-boot-raspberrypi.inc
sed -i 's/bootfiles/rpi-bootfiles/g' meta-mender-core/classes/mender-part-images.bbclass
```

### Inicializar el entorno de compilación

Inicializa el entorno de compilación:

```
source layers/poky/oe-init-build-env 
```

Agrega las capas necesarias de Yocto al entorno:

```
bitbake-layers add-layer ../layers/meta-raspberrypi
bitbake-layers add-layer ../layers/meta-seeed-cm4
bitbake-layers add-layer ../layers/meta-openembedded/meta-oe
bitbake-layers add-layer ../layers/meta-openembedded/meta-python
bitbake-layers add-layer ../layers/meta-mender/meta-mender-core
bitbake-layers add-layer ../layers/meta-mender/meta-mender-raspberrypi
bitbake-layers add-layer ../layers/meta-mender/meta-mender-demo
```

### Configurar la URL del servidor Mender (opcional)

Esta sección no es obligatoria para una compilación exitosa. Sin embargo, las imágenes que se generan por defecto solo son adecuadas para usarse con el cliente de Mender en [despliegues independientes](https://docs.mender.io/architecture/standalone-deployments?target=_blank), debido a la falta de configuración del servidor.

Puedes editar el archivo `conf/local.conf` para proporcionar la configuración de tu servidor Mender, asegurando que las imágenes generadas y los Artefactos de Mender se conecten al servidor que estás utilizando. Ya debería existir una sección comentada en el archivo generado `conf/local.conf`, y simplemente puedes descomentar las opciones de configuración relevantes y asignarles los valores apropiados.

### Compilar para Hosted Mender:


```
# To get your tenant token:
#    - log in to https://hosted.mender.io
#    - click your email at the top right and then "My organization"
#    - press the "COPY TO CLIPBOARD"
#    - assign content of clipboard to MENDER_TENANT_TOKEN
#
MENDER_SERVER_URL = "https://hosted.mender.io"
MENDER_TENANT_TOKEN = "<copy token here>"
```

Compilar para el servidor de demostración de Mender:

```
# https://docs.mender.io/administration/demo-installation
#
MENDER_DEMO_HOST_IP_ADDRESS = "<IP address of Mender demo server>"
```

Compilar para Mender en producción / Autoalojado (on-prem):

```
# https://docs.mender.io/3.1/system-updates-yocto-project/build-for-production
#
# Uncomment below and update the URL to match your configured domain
# name and provide the path to the generated server.crt file.
#
# Note that a custom server.crt file is only necessary if you are using
# self-signed certificates.
#
# NOTE! It is recommend that you provide below information in your custom
# Yocto layer and this is only for demo purposes. See linked documentation
# for additional information.
MENDER_SERVER_URL = "<URL of Self-Hosted Mender Server>"
FILESEXTRAPATHS_prepend_pn-mender-client := "<DIRECTORY-CONTAINING-server.crt>:"
SRC_URI_append_pn-mender-client = " file://server.crt"
```

## Construcción de la imagen

Ahora puedes proceder con la construcción de una imagen:

```
MACHINE="dual-gbe-cm4-mender" bitbake core-image-base
```

Reemplaza `core-image-base` con el objetivo de imagen que desees.

## Uso del resultado de la compilación

Después de una compilación exitosa, las imágenes y artefactos generados se encuentran en:

- `build/tmp/deploy/images/dual-gbe-cm4-mender/core-image-base-dual-gbe-cm4-mender.sdimg.bz2`

Si ya tienes Mender ejecutándose en tu dispositivo y quieres desplegar una actualización del sistema de archivos raíz (rootfs) usando esta compilación, deberías usar los archivos de [Mender Artifact](https://docs.mender.io/architecture/mender-artifacts?target=_blank), que tienen la extensión `.mender`. Puedes desplegar este Artifact en modo gestionado con el servidor Mender (subiéndolo en Releases desde la interfaz del servidor) o utilizando únicamente el cliente Mender en [despliegues independientes](https://docs.mender.io/architecture/standalone-deployments?target=_blank).

## Instrucciones de flasheo

Por favor, sigue [esta guía en la wiki](https://wiki.seeedstudio.com/Dual-Gigabit-Ethernet-Carrier-Board-for-Raspberry-Pi-CM4/#flash-to-emmc-cm4-emmc-version) para aprender cómo flashear la imagen anterior al eMMC en la placa.

Una vez flasheada, al encender el reTerminal, arrancará desde la imagen compilada.

## Arranque exitoso

Si ves el siguiente log desde el UART, significa que el sistema ha arrancado correctamente.

```
[  OK  ] Started Kernel Logging Service.
[  OK  ] Started System Logging Service.
[  OK  ] Started D-Bus System Message Bus.
[  OK  ] Started Getty on tty1.
         Starting Telephony service...
[  OK  ] Started Serial Getty on ttyS0.
[  OK  ] Reached target Login Prompts.
[    7.340436] audit: type=1334 audit(1638186061.687:4): prog-id=7 op=LOAD
[    7.347278] audit: type=1334 audit(1638186061.691:5): prog-id=8 op=LOAD
         Starting Login Service...
[  OK  ] Started Save/Restore Sound Card State.
[    7.386306] Bluetooth: Core ver 2.22
[    7.390103] NET: Registered protocol family 31
[    7.394856] Bluetooth: HCI device and connection manager initialized
[[    7.401967] Bluetooth: HCI socket layer initialized
  OK      7.407591] Bluetooth: L2CAP socket layer initialized
0m] Reac[    7.413409] Bluetooth: SCO socket layer initialized
hed target Sound Card.
[  OK  ] Started Telephony service.
[  OK  ] Started Avahi mDNS/DNS-SD Stack.
[  OK  ] Started Login Service.

Poky (Yocto Project Reference Distro) 3.1.12 dual-gbe-cm4-mender ttyS0

dual-gbe-cm4-mender login: root
root@dual-gbe-cm4-mender:~#
```

## Recursos

- **[Página Web]** [Documentación oficial de Mender](https://docs.mender.io)
- **[Página Web]** [Documentación oficial de Yocto](https://docs.yoctoproject.org)
- **[Página Web]** [Documentación oficial de Raspberry Pi CM4](https://www.raspberrypi.com/documentation/computers/compute-module.html)

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
