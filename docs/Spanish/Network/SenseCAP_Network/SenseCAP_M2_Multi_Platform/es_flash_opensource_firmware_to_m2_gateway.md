---
description: This wiki will guide you on how to flash open source LoRaWAN® firmware for your M2 gateway. Based on the open source LoRaWAN® firmware, you can deeply customise your M2 gateway.
title: Flashear Firmware Opensource al M2 Gateway
image: https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/m2-white.webp
slug: /es/flash_opensource_firmware_to_m2_gateway
last_update:
  date: 06/24/2025
  author: Guillermo
---

## Instalación de Firmware de Código Abierto en SenseCAP M2

Los gateways SenseCAP M2 representan una solución económica para LoRa, basados en el chip MT7628 y el chip de banda base Semtech SX1302. Los modelos se distinguen por la banda de frecuencia de fábrica (EU868/US915/AS923/AU915), módulo opcional (4G/GPS) y red LoRa compatible (LoRaWAN®/Helium).

Esta guía te muestra cómo instalar firmware de código abierto en tu gateway M2. Con este firmware puedes personalizar profundamente el comportamiento del dispositivo, por ejemplo agregar funciones o cambiar la banda de operación (requiere adaptar la antena).

:::danger Advertencia
Después de instalar firmware de código abierto, **NO** podrás regresar al firmware original de fábrica.

Seeed Studio **NO se hace responsable** por daños ocasionados por el uso de firmware abierto o de terceros.
:::

## Productos Compatibles

- <a  href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html" target="_blank"><span> <b>M2 Multi-Platform LoRaWAN Indoor Gateway(SX1302)</b></span></a>
- <a  href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-4G-EU868-p-5599.html" target="_blank"><span> <b>M2 Multi-Platform LoRaWAN Indoor Gateway(SX1302-4G)</b></span></a>
- <a  href="https://www.seeedstudio.com/SenseCAP-M2-Data-Only-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5339.html" target="_blank"><span> <b>M2 Data-Only LoRaWAN Indoor Gateway(SX1302)</b></span></a>

## Preparar el Firmware

### Descargar firmware precompilado

Puedes descargar versiones ya compiladas desde: <a  href="https://github.com/Seeed-Solution/LoRa_Gateway_OpenWRT/releases" target="_blank"><span> Seeed-Solution/LoRa_Gateway_OpenWRT/Release</span></a>

:::tip Nota
Verifica que el nombre del archivo `.bin` coincida con tu modelo.  

Ejemplo: `openwrt-...-EU868-4G.bin` es para M2 con banda EU868 y módulo 4G.
:::

### Compilar tu propio firmware

Si tu dispositivo no es compatible con el firmware precompilado o deseas modificarlo:

Para construir tu propio firmware necesitas un sistema  **GNU/Linux, BSD o MacOSX** (Se requiere el case sensitive filesystem). Cygwin no esta soportado.

**Paso 1:** Clona el repositorio desde: <a  href="https://github.com/Seeed-Solution/LoRa_Gateway_OpenWRT" target="_blank"><span> Seeed-Solution/LoRa_Gateway_OpenWRT</span></a>

```git
git clone https://github.com/Seeed-Solution/LoRa_Gateway_OpenWRT.git
```

**Paso 2:** Instala los paquetes necesarios según esta guía: <a  href="https://openwrt.org/docs/guide-developer/toolchain/install-buildsystem" target="_blank"><span> Build system setup</span></a>

:::caution Nota
Por favor, realiza los siguientes pasos con un usuario que no sea root.
:::

**Paso 3:** Ve a la carpeta del código fuente y ejecuta `./scripts/feeds update -a` para obtener todas las definiciones de paquetes más recientes definidas en feeds.conf / feeds.conf.default

**Paso 4:** Ejecuta `./scripts/feeds install -a` para instalar enlaces simbólicos para todos los paquetes obtenidos en package/feeds/

**Paso 5:** Ejecuta `cp diffconfig-sensecap-general .config` para usar el archivo diff de SenseCAP, y luego ejecuta `make defconfig` para expandir la configuración completa

**Paso 6:** Ejecuta `make menuconfig` para seleccionar la información de hardware de tu SenseCAP

- SenseCAP Hardware->Tiene 4G (Si contiene hardware 4G)
- SenseCAP Hardware->Tiene GPS (Si contiene hardware GPS)
- SenseCAP Hardware->REGIÓN (Selecciona tu región por defecto)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource2.png" alt="pir" width={800} height="auto" /></p>

**Paso 7:** Ejecuta `make` para compilar tu firmware

Esto descargará todas las fuentes, construirá la herramienta de compilación cruzada y luego compilará el kernel GNU/Linux y todas las aplicaciones seleccionadas para tu sistema objetivo

Después de compilar, puedes encontrar el firmware llamado `openwrt-21.02.0-ramips-mt76x8-sensecap_wm7628n-squashfs-sysupgrade.bin` en el directorio `<prj>/bin/targets/ramips/mt76x8/`

## Flashear el firmware

Puedes flashear el firmware en tu gateway de tres maneras

### Flashear firmware vía Luci

Inicia sesión en Luci y navega a **System** > **Backup/Flash Firmware**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource5.png" alt="pir" width={800} height="auto" /></p>

Desplázate hacia abajo hasta **Local upgrade** y haz clic en **Flash image...**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource6.png" alt="pir" width={800} height="auto" /></p>

Busca y sube el firmware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource7.png" alt="pir" width={800} height="auto" /></p>

Cuando se complete la carga, confirma que la información del firmware subido sea correcta y haz clic en **Continue**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource8.png" alt="pir" width={800} height="auto" /></p>

Después de esto, el gateway comenzará a instalar el firmware y el LED entrará en estado de parpadeo lento en color naranja hasta que se complete la instalación.

### Flashear firmware vía TFTP

Antes de comenzar, necesitas instalar la herramienta de servidor TFTP en tu computadora y colocar el firmware en el directorio adecuado.

**Paso 1:** Usa un cable Type-C para conectar el dispositivo a la computadora, y un cable de red para colocar ambos en la misma LAN.

**Paso 2:** Conéctate al dispositivo usando el puerto serial llamado `USB-SERIAL CH340` con **baudrate 57600**.

**Paso 3:** Reinicia el dispositivo. Cuando entre en uboot, **selecciona el comando 2** para ingresar a la actualización del sistema.

**Paso 4:** Ingresa la **IP del dispositivo**, asegurándote que esté en el mismo segmento de red que tu computadora; ingresa la **IP del servidor** (IP de tu computadora) y el **nombre del firmware** (debe incluir la extensión del archivo).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource3.png" alt="pir" width={800} height="auto" /></p>

**Paso 5:** Espera a que se complete la actualización del firmware. El gateway comenzará a instalar el firmware y el LED entrará en estado de parpadeo lento en color naranja hasta que finalice la instalación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource4.png" alt="pir" width={800} height="auto" /></p>

### Flashear firmware vía Serial

:::tip
Antes de comenzar este paso, te recomendamos descargar la versión más reciente de [TeraTerm](https://github.com/TeraTermProject/teraterm/releases), ya que las siguientes operaciones están basadas en TeraTerm.
:::

**Paso 1:** Usa un cable Type-C para conectar el dispositivo a la computadora.

**Paso 2:** Conéctate al dispositivo usando el puerto serial llamado `USB-SERIAL CH340` con **baudrate 57600**.

**Paso 3:** Reinicia el dispositivo. Cuando entre en uboot, **selecciona el comando 0** para ingresar a la actualización del sistema.

**Paso 4:** Cambia el baudrate a 230400 y presiona ENTER. El dispositivo mostrará: `Ready for binary (kermit) download to 0x80100000 at 230400 bps...`

**Paso 5:** Sube el firmware utilizando el protocolo kermit. TeraTerm incluye una herramienta de transmisión kermit. Puedes referirte a la imagen siguiente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource12.png" alt="pir" width={800} height="auto" /></p>

**Paso 6:** Espera a que termine de subir el firmware. Luego, el dispositivo mostrará: `Switch baudrate to 57600 bps and press ESC...`. Sigue las indicaciones. El dispositivo instalará el firmware y se reiniciará automáticamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource11.png" alt="pir" width={800} height="auto" /></p>

## Iniciar sesión en la consola

Después de instalar el firmware, el dispositivo abrirá un punto de acceso (AP) llamado **SenseCAP_XXXX**

Usa tu celular o computadora para conectarte al AP (sin contraseña)

Ingresa **192.168.168.1** en el navegador para entrar a la interfaz LuCI

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource9.png" alt="pir" width={800} height="auto" /></p>

Inicia sesión con el usuario **root** y **sin contraseña**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource10.png" alt="pir" width={800} height="auto" /></p>

## Recursos

- \[**Sitio Web**\] <a  href="https://koen.vervloesem.eu/blog/how-to-install-alternative-firmware-to-the-sensecap-m2-data-only-lorawan-indoor-gateway/" target="_blank"><span> How to install alternative firmware to the SenseCAP M2 Data Only LoRaWAN Indoor Gateway - By Koen Vervloesem</span></a>
- \[**Github**\] <a  href="https://github.com/Seeed-Solution/LoRa_Gateway_OpenWRT" target="_blank"><span> GitHub-Seeed-Solution/Lora_Gateway_OpenWRT</span></a>
- \[**Sitio Oficial**\] <a  href="https://openwrt.org/" target="_blank"><span> OpenWrt offical website</span></a>
- \[**PDF**\] <a  href="https://files.seeedstudio.com/products/SenseCAP/M2OpensourceHarewareDescription.pdf" target="_blank"><span> M2 Gateway Hardware Description</span></a>

## Soporte Técnico

**¿Tienes problemas con el firmware de código abierto? No dudes en discutirlo con otros miembros de la comunidad a través del enlace de Discord a continuación.**

<div class="button_tech_support_container">
<a href="https://discord.gg/nFByJZnC5H" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
