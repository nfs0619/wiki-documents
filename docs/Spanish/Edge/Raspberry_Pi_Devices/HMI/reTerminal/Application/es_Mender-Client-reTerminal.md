---
description: Cliente de Mender en reTerminal
title: Cliente de Mender en reTerminal
keywords:
  - Edge
  - reTerminal Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Mender-Client-reTerminal
last_update:
  date: 04/03/2025
  author: Erick González
---

# Instalación del Cliente de Mender en reTerminal

Podemos configurar el Cliente de Mender en un reTerminal y luego recibir actualizaciones OTA desde un servidor Mender alojado (Hosted) o autoalojado (Self-Hosted).

Esta guía se centra en usar un reTerminal que ejecute un sistema Linux personalizado compilado con el Proyecto Yocto.

## Resultados de prueba

Las versiones del Proyecto Yocto en la tabla a continuación han sido probadas por la comunidad de Mender. Actualiza la tabla si has probado esta integración en otras [versiones del Proyecto Yocto](https://wiki.yoctoproject.org/wiki/Releases?target=_blank):

| Yocto Project         | Build        | Runtime      |
|-----------------------|--------------|--------------|
| dunfell (3.1 / 5.3.0) | test works   | test works   |

**Build** significa que la compilación de Yocto usando esta integración de Mender se completa sin errores y produce imágenes.
**Runtime** significa que se ha verificado que Mender funciona en la placa. Para placas basadas en U-Boot, se ha verificado la [lista de comprobación de integración](https://docs.mender.io/devices/integrating-with-u-boot/integration-checklist?target=_blank).

## Requisitos previos

- Una distribución de Linux compatible y las dependencias instaladas en tu estación de trabajo/portátil tal como se describe en el [Yocto Mega Manual](https://www.yoctoproject.org/docs/current/mega-manual/mega-manual.html#detailed-supported-distros)
  - NOTA: Las instrucciones dependen de la versión de Yocto que pretendas usar.
- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html)

## Configuración de la compilación

### Preparar el entorno Yocto

Crea un directorio para tu configuración `mender-reterminal` y clona la información meta:

```
mkdir mender-reterminal && cd mender-reterminal
```

Obtén todas las capas necesarias:

```
git clone -b master git://git.yoctoproject.org/poky layers/poky
git clone -b dunfell https://github.com/Seeed-Studio/meta-seeed-cm4.git layers/meta-seeed-cm4
git clone -b master git://git.yoctoproject.org/meta-raspberrypi layers/meta-raspberrypi
git clone -b dunfell https://github.com/meta-qt5/meta-qt5.git layers/meta-qt5
git clone -b dunfell https://github.com/openembedded/meta-openembedded.git layers/meta-openembedded
git clone -b dunfell git://github.com/mendersoftware/meta-mender layers/meta-mender
```

Para ser compatible con meta-raspberrypi, cambia la versión de gstreamer de poky a la más reciente:

```
cd layers/poky
cp -r meta/recipes-multimedia/gstreamer/ ../
git checkout dunfell
rm -r meta/recipes-multimedia/gstreamer/
cp -r ../gstreamer/ meta/recipes-multimedia/
rm -r ../gstreamer/
```

Modifica meta-raspberrypi para evitar un error de compilación:

```
cd layers/meta-raspberrypi
rm dynamic-layers/meta-python/recipes-connectivity/lirc/*.bbappend
sed -i '/^LAYERSERIES_COMPAT_raspberrypi/s/= .*$/= "honister dunfell"/g' conf/layer.conf
sed -i 's/arm\/armv8a\///g' conf/machine/raspberrypi4-64.conf
```

Modifica meta-mender para evitar un error de compilación:

```
cd layers/meta-mender
rm meta-mender-raspberrypi/recipes-kernel/linux/linux-raspberrypi-rt_%.bbappend
sed -i 's/"0x4000"/"0x1f000"/g' meta-mender-raspberrypi/recipes-bsp/u-boot/u-boot-raspberrypi.inc
sed -i 's/bootfiles/rpi-bootfiles/g' meta-mender-core/classes/mender-part-images.bbclass
```

Modifica meta-seeed-cm4 para evitar un error de compilación:

```
cd layers/meta-seeed-cm4
sed -i 's/eudev/udev/g' recipes-lvgl/lvgl/lvgl_demo_git.bb
```

### Preparar el entorno de compilación

Inicializa el entorno de compilación:

```
source layers/poky/oe-init-build-env
```

Agrega las capas de Yocto:

```
bitbake-layers add-layer ../layers/meta-raspberrypi
bitbake-layers add-layer ../layers/meta-seeed-cm4
bitbake-layers add-layer ../layers/meta-qt5
bitbake-layers add-layer ../layers/meta-openembedded/meta-oe
bitbake-layers add-layer ../layers/meta-openembedded/meta-python
bitbake-layers add-layer ../layers/meta-mender/meta-mender-core
bitbake-layers add-layer ../layers/meta-mender/meta-mender-raspberrypi
bitbake-layers add-layer ../layers/meta-mender/meta-mender-demo
```

### Configurar la URL del servidor Mender (opcional)

Esta sección no es obligatoria para una compilación exitosa, pero las imágenes generadas por defecto solo son adecuadas para usar el cliente de Mender en [despliegues independientes](https://docs.mender.io/architecture/standalone-deployments?target=_blank), debido a la falta de configuración del servidor.

Puedes editar el archivo `conf/local.conf` para proporcionar tu configuración del servidor Mender, asegurando que las imágenes y Artifacts de Mender generados se conecten con el servidor Mender que estés usando. Debería existir una sección comentada en `conf/local.conf` donde simplemente puedes descomentar las opciones relevantes y asignarles valores adecuados.

**Compilar para Hosted Mender:**

```
# Para obtener tu tenant token:
#    - inicia sesión en https://hosted.mender.io
#    - haz clic en tu email en la esquina superior derecha y luego "My organization"
#    - presiona "COPY TO CLIPBOARD"
#    - asigna el contenido al MENDER_TENANT_TOKEN
#
MENDER_SERVER_URL = "https://hosted.mender.io"
MENDER_TENANT_TOKEN = "<copia token aquí>"
```

**Compilar para Mender Demo Server:**

```
# https://docs.mender.io/administration/demo-installation
#
MENDER_DEMO_HOST_IP_ADDRESS = "<Dirección IP del servidor demo de Mender>"
```

**Compilar para Mender en Producción / Self-Hosted (on-prem):**

```
# https://docs.mender.io/3.1/system-updates-yocto-project/build-for-production
#
# Descomenta abajo y actualiza la URL para que coincida con tu dominio
# y proporciona la ruta al archivo server.crt generado.
#
# Nota: un server.crt personalizado solo es necesario si usas certificados auto-firmados.
#
# NOTA: Se recomienda proporcionar esta información en tu capa personalizada de Yocto;
# esto es solo para propósitos de demo. Ver documentación enlazada para más detalles.
MENDER_SERVER_URL = "<URL de tu servidor Mender Self-Hosted>"
FILESEXTRAPATHS_prepend_pn-mender-client := "<DIRECTORIO-CON-server.crt>:"
SRC_URI_append_pn-mender-client = " file://server.crt"
```

## Construir la imagen

Ahora puedes compilar la imagen:

```
MACHINE="seeed-reterminal-mender" bitbake rpi-test-image
```

Reemplaza `rpi-test-image` con la imagen que desees compilar.

## Uso de la salida de la compilación

Tras compilar con éxito, las imágenes y artefactos de compilación se encuentran en:

- `build/tmp/deploy/images/seeed-reterminal-mender/rpi-test-image-seeed-reterminal-mender.sdimg.bz2`

Si ya tienes Mender corriendo en tu dispositivo y deseas desplegar una actualización rootfs usando esta compilación, deberías usar los [Mender Artifacts](https://docs.mender.io/architecture/mender-artifacts?target=_blank) (archivos con extensión `.mender`). Puedes desplegar este Artifact en modo gestionado con el servidor Mender (subiéndolo en "Releases" en la interfaz del servidor) o usando solo el cliente de Mender en [despliegues independientes](https://docs.mender.io/architecture/standalone-deployments?target=_blank).

## Instrucciones de flasheo

Sigue [esta guía](https://wiki.seeedstudio.com/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc) para aprender a flashear la imagen anterior a la eMMC del reTerminal.

Una vez flasheado, al encender el reTerminal, iniciará con la imagen compilada.

## Éxito en el arranque

Si ves el siguiente log por UART, significa que el sistema ha arrancado correctamente:

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

Poky (Yocto Project Reference Distro) 3.1.12 seeed-reterminal-mender ttyS0

seeed-reterminal-mender login: root
root@seeed-reterminal-mender:~#
```

## Recursos

- **[Página Web]** [Documentación oficial de Mender](https://docs.mender.io)
- **[Página Web]** [Documentación oficial de Yocto](https://docs.yoctoproject.org)
- **[Página Web]** [Documentación oficial Raspberry Pi CM4](https://www.raspberrypi.com/documentation/computers/compute-module.html)

## Soporte técnico y debate de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurarnos de que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
