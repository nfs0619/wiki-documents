---
description: SenseCAP M1 Trouble Shooting
title: Solución de Problemas del SenseCAP M1
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Troubleshooting
last_update:
  date: 06/21/2025
  author: Guillermo
---


Solución de Problemas del SenseCAP M1
=====================================

Relacionado con el Hardware
===========================

* * *

**El LED azul no parpadea**
---------------------------

![SenseCAP M1 LED Azul](https://www.sensecapmx.com/wp-content/uploads/2022/07/blue-led-1.webp)

![SenseCAP M1 LED Azul No Funciona](https://www.sensecapmx.com/wp-content/uploads/2022/08/back-front-led-m1.png)

**Pasos para solucionar el problema**

1. Verifica si el LED de ETH parpadea. Si las luces verde y amarilla de ETH están encendidas y el LED azul está apagado, **[por favor flashea primero una nueva tarjeta SD](https://www.sensecapmx.com/docs/sensecap-m1/m1-troubleshooting/#how-to-flash-a-new-image-to-a-new-micro-sd-card)**. Si la luz azul sigue apagada, podría tratarse de un defecto de hardware.
2. Si los LED verde y amarillo están apagados, asegúrate de que el adaptador de corriente funcione. Puedes comprobarlo reemplazándolo con un cargador de teléfono de 5V-3A con cable tipo C y usando un nuevo cable de red para ver si se resuelve el problema.
3. Si el hotspot se conecta a Internet mediante Wi-Fi, verifica si la luz roja está encendida en el panel frontal. Si no lo está, podría ser un problema de hardware.

* * *

Relacionado con la Red
===============

* * *

**¿No puedes conectarte a Internet?**
--------------------------------------

Tener la configuración de red correcta es fundamental. Asegúrate de leer todos los detalles a continuación para una configuración adecuada.

Los hotspots de Helium pueden no funcionar si están detrás de un firewall o si utilizan un tipo de NAT incompatible (ver más abajo). En otros casos, podría deberse a la configuración del router o simplemente a que no hay conexión a Internet.

**Nota**: Si no puedes configurar adecuadamente tu red o los pasos siguientes no funcionan, visita nuestro >> Canal Oficial de Discord para obtener más ayuda.

### **Pasos para solucionar el problema - Conexión Ethernet**

**Verifica tus cables Ethernet si no estás usando Wi-Fi**: Asegúrate de que el cable Ethernet esté conectado firmemente entre el router/modem y el Hotspot.

- **Luces ámbar parpadeantes junto al puerto Ethernet del Hotspot**: Conexión sólida establecida.
- Si no ves luces ámbar parpadeantes en el puerto Ethernet, prueba con otro cable, ya que los cables tienden a fallar con el tiempo.

**Verifica tu conexión a Internet**: Asegúrate de que puedas conectarte a Internet desde tu computadora/portátil/teléfono en la misma red. Si no puedes conectarte, contacta a tu proveedor de servicios de Internet (ISP) para asistencia.

### **Pasos para solucionar el problema - Conexión Wi-Fi**

- **Si estás usando Wi-Fi**: Verifica que puedes conectarte a tu red inalámbrica con tu contraseña de seguridad WEP o WPA (también conocida como contraseña Wi-Fi). Si no sabes cómo conectarte o acceder a tu módem inalámbrico, deberás contactar directamente al fabricante del equipo.
- Si no puedes conectarte a Internet, reinicia tu router. Desconecta tu Hotspot y el router de la toma de corriente o del regulador por 2 minutos. Luego, vuelve a conectarlos para ver si ya puedes acceder a Internet.

* * *

**¿Cómo conectar el Hotspot al Wi-Fi de mi teléfono?**
--------------------------------------------------

**Este ejemplo se muestra para dispositivos Apple iOS.**

*   Ve a "**Configuración**" en tu teléfono.
*   Haz clic en "**Hotspot Personal**".

![iOS Hotspot Personal](https://www.sensecapmx.com/wp-content/uploads/2022/07/hotspot.png)

*   Activa la opción para permitir que otros se conecten.
*   Empareja tu Hotspot.
*   Conecta tu Hotspot al nombre del Hotspot Personal de tu iPhone (Apple iOS).

![Configuración Hotspot iOS](https://www.sensecapmx.com/wp-content/uploads/2022/07/hotspot-setup.png)

Ahora puedes emparejar tu Gateway SenseCAP al hotspot personal de tu teléfono mediante Wi-Fi para solucionar problemas de actualizaciones de firmware y conectividad de red.

* * *

Relacionado con la Tarjeta SD
=============================

* * *

**¿Cómo reemplazar el archivo 'config.json'?**
----------------------------------------------

**PROCEDER CON PRECAUCIÓN**: Los siguientes pasos deben utilizarse **ÚNICAMENTE** si han sido recomendados por nuestro equipo de Soporte Técnico. No es necesario realizar estos pasos si **NO** se te ha indicado hacerlo.

**NOTA IMPORTANTE**: **NO** uses el mismo archivo '**config.json**' en otros Hotspots. Cada dispositivo tiene un archivo único vinculado a su número de serie.

* * *

**Instrucciones**

Las siguientes instrucciones te ayudarán a reemplazar el archivo `config.json` en la tarjeta Micro SD. Si tu dispositivo se queda atascado en una versión antigua del firmware y sospechas que este puede ser el error, sigue estos pasos para resolverlo.

**NOTA**: Verifica primero tu conexión a Internet para asegurarte de que el problema no esté relacionado con la red antes de continuar con estos pasos.

* * *

**Requisitos**

1. Tarjeta Micro SD del Hotspot SenseCAP M1  
2. Lector de tarjetas Micro SD  
3. Destornillador  
4. El archivo `config.json` copiado desde la tarjeta original  

**Nota**: Si no puedes recuperar el archivo original, solicita uno a nuestro equipo de Soporte Técnico.

![Elementos necesarios para reemplazar config.json](https://www.sensecapmx.com/wp-content/uploads/2022/07/requirements-sd-flash.png)

_Elementos requeridos_

* * *

**Pasos**

*   **Paso 1**: Apaga tu Hotspot
*   **Paso 2**: Retira la antena
*   **Paso 3**: Gira el dispositivo al panel frontal

![Cambio de config.json - Paso 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step1-1.png)

*   **Paso 4**: Usa un destornillador para aflojar los dos tornillos del panel frontal

![ConCambio de config.json - Paso 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step2-1.png)

*   **Paso 5**: Retira el panel frontal y colócalo a un lado

![Cambio de config.json - Paso 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step3-1.png)

*   **Paso 6**: Usa pinzas para quitar el sello amarillo que cubre la tarjeta Micro SD y extrae la tarjeta

![Cambio de config.json - Paso 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step4-1.png)

![Cambio de config.json - Paso 5](https://www.sensecapmx.com/wp-content/uploads/2022/07/step5-1.png)

![Cambio de config.json - Paso 6](https://www.sensecapmx.com/wp-content/uploads/2022/07/step6-1.png)

*   **Paso 7**: Inserta la tarjeta Micro SD en un lector de tarjetas y conéctala a tu computadora

![Cambio de config.json - Paso 7](https://www.sensecapmx.com/wp-content/uploads/2022/07/step7-1.png)

![Cambio de config.json - Paso 7B](https://www.sensecapmx.com/wp-content/uploads/2022/07/step8-1.png)

**NOTA (Windows)**: Si aparece el mensaje "**Necesita formatear el disco en la unidad 'X' antes de poder usarlo**", haz clic en "**Cancelar**" para evitar perder los datos.

![Mensaje de formateo en Windows](https://www.sensecapmx.com/wp-content/uploads/2022/07/format-1.png)

_Mensaje de advertencia en Windows al insertar la tarjeta_

*   **Paso 8**: Localiza el archivo `config.json` en la carpeta `resin-boot`  
Ábrelo con el Bloc de Notas y verifica su contenido.

Si **NO está vacío**, el error puede deberse a un problema de red o de actualización OTA. Verifica tu conexión y configuraciones de firewall.

Si **está vacío**, reemplázalo con el nuevo archivo `config.json` proporcionado por el soporte técnico.

![Archivo config.json vacío](https://www.sensecapmx.com/wp-content/uploads/2022/07/config-1.png)

*   **Paso 9**: Reemplaza el archivo `config.json`. Arrastra el nuevo archivo a la carpeta y selecciona “Reemplazar”.

**NOTA**: No elimines otros archivos del disco.

**NOTA**: Cada dispositivo tiene un archivo `config.json` único. **No compartas tu archivo ni uses archivos de otros dispositivos.**

**En macOS**

![Copiar config.json en macOS](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-1.png)  

_MacOS - Copy_ 'config.json' _File_

![Reemplazar config.json en macOS](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-2.png)

**En Windows**

![Copiar config.json en Windows](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-1.png)  

_Windows - Copy "config.json" File_

![Reemplazar config.json en Windows](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-2.png)

**Note**: Verifica que el archivo `config.json` contenga datos después de copiarlo, abriéndolo nuevamente con el Bloc de Notas.

*   **Paso 10**: Vuelve a insertar la tarjeta Micro SD en el Hotspot

**TIP**: Ensambla el panel frontal solo después de confirmar que el Hotspot ha arrancado correctamente.

![Ensamblar SenseCAP M1 - 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step10-1.png)

![Ensamblar SenseCAP M1 - 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step11-1.png)

![Ensamblar SenseCAP M1 - 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step12-1.png)

![Ensamblar SenseCAP M1 - 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step13-1.png)

*   **Paso 11**: Reconecta la antena y enciende el Hotspot

Conéctalo a Internet (preferiblemente por cable Ethernet), espera ~20 minutos para actualizaciones OTA, y verifica el estado en el Dashboard:([**https://status.sensecapmx.cloud/**](https://status.sensecapmx.cloud/)) o ejecuta diagnósticos desde la app de Helium.

¿Tienes más dudas o problemas? Abre un ticket de soporte aquí: [**https://support.sensecapmx.com**](https://support.sensecapmx.com)

* * *

**¿Cómo flashear una nueva imagen en una tarjeta Micro SD nueva?**
------------------------------------------------------------------

**PROCEDER CON PRECAUCIÓN**: Los siguientes pasos deben utilizarse **ÚNICAMENTE** si han sido recomendados por nuestro equipo de Soporte Técnico. No es necesario realizar estos pasos si **NO** se te ha indicado hacerlo.

El mal uso del Hotspot, como encender/apagar frecuentemente o conectar y desconectar la tarjeta microSD de forma constante, puede causar errores desconocidos, como desalineación del sistema de archivos.

**Si te han indicado reemplazar la tarjeta microSD para diagnosticar un problema, sigue cuidadosamente estas instrucciones.**

* * *

**Instrucciones**

Las siguientes instrucciones te ayudarán a flashear una imagen en una nueva tarjeta microSD y reemplazar la original en el SenseCAP M1, para corregir errores relacionados con la tarjeta.

**Nota**: Antes de realizar estos pasos, asegúrate de que el problema no esté relacionado con tu conexión a Internet.

* * *

**Requisitos**

**Nota**: Ahora puedes adquirir el kit de reemplazo de tarjeta SD haciendo clic [**aquí**](https://www.seeedstudio.com/SenseCAP-M1-SD-Card-Replacement-Kit-p-5279.html) .

![Kit de reemplazo de tarjeta SD SenseCAP M1](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card.png)

_El kit incluye un destornillador, lector de tarjeta microSD, tarjeta microSD de 64 GB y una guía de instrucciones._

1. Nueva tarjeta microSD (SanDisk High Endurance 64GB)  
2. Lector de tarjeta microSD  
3. Destornillador  
4. Archivo `config.json` copiado desde la tarjeta original  
    - 1. **Nota**: Si no puedes recuperarlo, solicita uno a nuestro equipo de Soporte Técnico.

* * *

**Pasos**

1. Apaga el dispositivo, abre el panel frontal, retira la etiqueta amarilla que cubre la microSD (puedes usar pinzas), y extrae la tarjeta.
2. Conecta la tarjeta original a tu computadora con un lector microSD y copia el archivo `config.json` desde la partición `resin-boot`. Guárdalo en tu computadora.  
   - **Nota**: Si no puedes obtener el archivo, pide ayuda al Soporte Técnico.
3. Descarga la imagen del sistema para SenseCAP M1 desde aquí:  
   [**sensecap-m1-sd-version-20220213.img.zip**](https://drive.google.com/open?id=17nbsZ6wnQVxOh4KVfImaNwHNbdWz6LBh&authuser=0)
4. Descarga la herramienta **Balena Etcher** desde este enlace:  
   [**balenaEtcher - Flashear imágenes a tarjetas SD y USB**](https://www.balena.io/etcher/)
5. Usa Balena Etcher para flashear la imagen de SenseCAP M1 en la nueva tarjeta microSD.
6. Una vez flasheada, copia el archivo `config.json` a la partición `resin-boot` de la nueva tarjeta.
7. Expulsa la tarjeta microSD y colócala dentro del SenseCAP M1.
8. Enciende el SenseCAP M1, conéctalo a Internet (preferentemente por cable Ethernet), espera alrededor de 20 minutos para las actualizaciones automáticas (OTA), y verifica el estado desde el Dashboard:  
   [https://status.sensecapmx.cloud](https://status.sensecapmx.cloud)  
   o realiza diagnósticos desde la app de Helium.

**NOTA**: Ensambla el panel frontal del Hotspot **solo después de confirmar que el dispositivo funciona correctamente**.

* * *

**Cómo abrir el SenseCAP M1 y reemplazar la tarjeta Micro SD**

*   **Paso 1**: Apaga tu Hotspot y retira la antena.

![SenseCAP M1 SD Card Paso 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-1-1.png)

*   **Paso 2**: Usa un destornillador para aflojar los dos tornillos del panel frontal.

![SenseCAP M1 SD Card Paso 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-2.png)

*   **Paso 3**: Retira el panel frontal y colócalo a un lado.

![SenseCAP M1 SD Card Paso 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-3.png)

*   **Paso 4**: Retira la etiqueta amarilla sobre la tarjeta Micro SD (puedes usar pinzas).

![SenseCAP M1 SD Card Paso 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4.png)

![SenseCAP M1 SD Card Paso 4B](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4a.png)

* * *

## **Cómo Leer la Micro SD y Flashear la Imagen**

*   **Paso 1**: Inserta una nueva tarjeta Micro SD en el lector de tarjetas Micro SD.

![SenseCAP M1 SD Card Image Paso 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-1-1.png)

_Nueva tarjeta Micro SD en el lector de tarjetas Micro SD_

![SenseCAP M1 SD Card Image Paso 1B](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-2.png)

_Asegúrate de que esté completamente conectada_

*   **Paso 2**: Flashea la imagen de SenseCAP M1 a la nueva tarjeta Micro SD usando Balena Etcher.
    *   Descarga la **imagen de SenseCAP M1** desde aquí: [**sensecap-m1.img.zip**](https://drive.google.com/file/d/1fZf09U2_jQOpsSKPWc8TAZ_Jl82X9tzx/view?usp=sharing)
    *   Descarga la **herramienta Balena Etcher** desde aquí: [**balenaEtcher - Flash OS images to SD cards & USB drives**](https://www.balena.io/etcher/)

![Balena Etcher](https://www.sensecapmx.com/wp-content/uploads/2022/07/balena.png)

_Selecciona según tu sistema operativo_

![Balena Etcher 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/balena-2.png)

_Arrastra el archivo .ZIP de la imagen a Balena Etcher_

*   **Paso 3**: Después de haber flasheado correctamente la imagen en la tarjeta MicroSD, copia el archivo "config.json" que te proporcionamos (o que guardaste previamente) desde tu computadora a una partición llamada "resin-boot".

**Para MacOS**

![MacOS Copy Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-1.png)

_MacOS - Copiar archivo '_config.json'_

**Para Windows**

![Windows Copy Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-1.png)

*   **Paso 4**: Desconecta la nueva tarjeta Micro SD de tu computadora.
*   **Paso 5**: Inserta la nueva tarjeta Micro SD en tu SenseCAP M1.

![SenseCAP M1 SD Card Paso 5](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-5.png)

*   **Paso 6**: Enciende el SenseCAP M1 y vuelve a conectarlo a Internet (preferentemente con cable Ethernet).
*   **Paso 7**: Espera aproximadamente 20 minutos para que se apliquen las actualizaciones y revisa el Dashboard (**[https://status.sensecapmx.cloud/](https://status.sensecapmx.cloud/)**) o ejecuta el diagnóstico en la app de Helium una vez que se haya completado.

![SenseCAP M1 SD Card Paso 6](https://www.sensecapmx.com/wp-content/uploads/2022/07/diagnostics-1.png)

**Nota**: Debes ensamblar el panel frontal del Hotspot solo después de confirmar que todo funciona correctamente.

Si tienes más problemas o preguntas, por favor abre un ticket aquí: [**https://support.sensecapmx.com/**](https://support.sensecapmx.com/)

* * *

**HCómo Formatear la Tarjeta Micro SD y Flashear la Imagene**
-------------------------------------------------------

**PROCEDA CON PRECAUCIÓN**: Los siguientes pasos deben usarse **ÚNICAMENTE** si has recibido esta indicación por parte de nuestro equipo de Soporte Técnico. No necesitas realizar estos pasos si **NO** se te ha recomendado hacerlo.

Debido al mal uso de los Hotspots por parte de algunos usuarios, hemos descubierto que el encendido y apagado frecuente, así como conectar y desconectar repetidamente la tarjeta Micro SD, puede provocar errores desconocidos, como desalineación del sistema de archivos.

**Si se te ha indicado reemplazar la tarjeta Micro SD para solucionar un problema, por favor sigue cuidadosamente las instrucciones que se detallan a continuación.**

* * *

## **Instrucciones**

Las siguientes instrucciones te ayudarán a flashear una imagen en una nueva tarjeta Micro SD y reemplazar la original en tu SenseCAP M1 para corregir errores potenciales en la tarjeta.

**NOTA**: Por favor revisa tu conexión a Internet primero, para asegurarte de que el problema no esté relacionado con la red antes de continuar con el reemplazo de la Micro SD.

* * *

## **Requisitos**

1.  Tarjeta Micro SD de tu Hotspot SenseCAP M1  
2.  Lector de tarjetas Micro SD  
3.  Destornillador  
4.  Archivo '**config.json**' copiado desde la tarjeta original  
    1.  **Nota**: Si no puedes recuperarlo, solicita uno al equipo de Soporte Técnico.  
5.  SD Card Formatter 5.0.1  
6.  Para **Windows** => [**Haz clic aquí**](https://drive.google.com/file/d/15KMqnVpeOMRcFOYIRLbwA4CJooNsdkLM/view?usp=sharing) para descargar e instalar  
7.  Para **Mac OS** => [**Haz clic aquí**](https://drive.google.com/file/d/1FjxMOdGDjW3iKx3COeexY7E2bpF2cqDy/view?usp=sharing) para descargar e instalar  
8.  Imagen de SenseCAP M1 => [**Haz clic aquí**](https://drive.google.com/open?id=17nbsZ6wnQVxOh4KVfImaNwHNbdWz6LBh&authuser=0) para descargar  
9.  Balena Etcher => [**Haz clic aquí**](https://www.balena.io/etcher/) para descargar  

![SenseCAP M1 Replacement SD Card Kit](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card.png)

_El kit incluye un destornillador, un lector de tarjetas MicroSD, una tarjeta MicroSD de 64GB y una guía de reemplazo._

* * *

**Pasos**

1.  Apaga el dispositivo, abre el panel frontal, retira la etiqueta amarilla en la parte superior de la tarjeta Micro SD y desconéctala.
2.  Conecta la tarjeta Micro SD a tu computadora usando un lector de tarjetas y copia el archivo '**config.json**' desde la partición "resin-boot", guárdalo en tu computadora.  
    1.  **Nota**: Si no puedes recuperar el archivo original, solicita uno al equipo de Soporte Técnico.
3.  Formatea la tarjeta Micro SD usando “**SD Card Formatter 5.0.1**”.
4.  Flashea la **imagen de SenseCAP M1** en la tarjeta Micro SD con **Balena Etcher**.
5.  Copia el archivo '**config.json**' desde tu computadora a la partición "**resin-boot**" de la tarjeta.
6.  Inserta nuevamente la tarjeta Micro SD en el Hotspot SenseCAP M1.
7.  Enciende el SenseCAP M1, conéctalo a Internet (preferentemente con cable Ethernet), espera aproximadamente 20 minutos para las actualizaciones OTA, y revisa el estado en el [**Dashboard**](https://docs.sensecapmx.com/home/sensecap-dashboard) o ejecuta diagnósticos en la app de Helium.

**Nota**: Ensambla el panel frontal del Hotspot **solo después** de confirmar que todo está funcionando correctamente.

* * *

## **Cómo Abrir el SenseCAP M1 y Reemplazar la Tarjeta Micro SD**

*   **Paso 1:** Apaga tu Hotspot y retira la antena.

![SenseCAP M1 SD Card Paso 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-1-1.png)

*   **Paso 2**: Usa el destornillador para aflojar los dos tornillos del panel frontal.

![SenseCAP M1 SD Card Paso 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-2.png)

*   **Paso 3**: Retira el panel frontal y colócalo a un lado.

![SenseCAP M1 SD Card Paso 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-3.png)

*   **Paso 4**: Retira la etiqueta amarilla en la parte superior de la tarjeta Micro SD (puedes usar pinzas).

![SenseCAP M1 SD Card Paso 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4.png)

![SenseCAP M1 SD Card Paso 4B](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4a.png)

* * *

**Cómo Formatear la Tarjeta Micro SD (Windows)**

*   **Paso 1**: Inserta una nueva tarjeta Micro SD en el lector de tarjetas Micro SD.    
    
![SenseCAP M1 SD Card Image Step 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-1-1.png)

_Nueva tarjeta Micro SD en el lector de tarjetas_

![SenseCAP M1 SD Card Image Step 1B](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-2.png)

_Asegúrate de que esté completamente conectada_

*   **Paso 2**: Instala y ejecuta el programa SD Card Formatter.

![SD Card Formatter](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-formatter-1.png)

*   **Paso 3**: Selecciona la tarjeta Micro SD conectada a tu computadora, elige “Overwrite format”, escribe “resin-boot” en la etiqueta de volumen (Volume Label) y haz clic en el botón “Format”.   

![SD Card Formatter Resin-Boot Folder](https://www.sensecapmx.com/wp-content/uploads/2022/07/formatter-resin-1.png)

*   **Paso 4**: Selecciona "Yes" en la ventana de diálogo.  

![Format SD Card](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-1-2.png)

*   **Paso 5**: Espera aproximadamente 30 a 45 minutos hasta que finalice el proceso de formateo.

![SD Card Formatter Screen](https://www.sensecapmx.com/wp-content/uploads/2022/07/formatter-3-1.png)

* * *

**Cómo Formatear la Tarjeta Micro SD (MacOS)**

Los pasos son similares. Consulta las siguientes imágenes:

![SD Card Formatter MacOS](https://www.sensecapmx.com/wp-content/uploads/2022/07/mac-formatter-1-1.png)

![SD Card Formatter MacOS Complete](https://www.sensecapmx.com/wp-content/uploads/2022/07/mac-formatter-2-1.png)

* * *

**Cómo Flashear la Imagen en la Tarjeta Micro SD**

*   Descarga la **imagen de SenseCap M1** desde aquí: [**sensecap-m1-sd-version-20220213.img.zip**](https://drive.google.com/open?id=17nbsZ6wnQVxOh4KVfImaNwHNbdWz6LBh&authuser=0)
*   Descarga la **herramienta Balena Etcher** desde aquí: [**balenaEtcher - Flash OS images to SD cards & USB drives**](https://www.balena.io/etcher/)

![Balena Etcher](https://www.sensecapmx.com/wp-content/uploads/2022/07/balena.png)

_Selecciona según tu sistema operativo_

![Balena Etcher 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/balena-2.png)

_Arrastra el archivo .ZIP de la imagen a Balena Etcher_

* * *

**Cómo Agregar el Archivo 'config.json' a la Tarjeta Micro SD**
------------------------------------------------------

Después de haber flasheado exitosamente la imagen en la tarjeta MicroSD, copia el archivo "**config.json**" que te proporcionamos (o que copiaste previamente) desde tu computadora a la partición llamada "resin-boot".

**NOTA**: Por favor, **NO elimines** ningún otro archivo en esa partición, de lo contrario podrían ocurrir errores inesperados con tu SenseCAP M1.

**NOTA**: Cada dispositivo tiene un archivo '**config.json**' único registrado para él. **No compartas** tu archivo '**config.json**' ni uses archivos de otros dispositivos.

**Para macOS**

![MacOS Copy Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-1.png)

_MacOS - Copiar archivo 'config.json'_

![MacOS Swap Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-2.png)

**Para Windows**

![Windows Copy Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-1.png)

_Windows - Copiar archivo 'config.json'_

![Windows Swap Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-2.png)

* * *

**Después de Formatear la Tarjeta Micro SD y Flashear la Imagen**
-------------------------------------------------------------

*   **Paso 1**: Desconecta la nueva tarjeta Micro SD de tu computadora.  
*   **Paso 2**: Inserta la nueva tarjeta Micro SD en tu SenseCAP M1.

![SenseCAP M1 SD Card Paso 5](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-5.png)

*   **Paso 3**: Enciende el SenseCAP M1 y vuelve a conectarlo a Internet (preferentemente por cable Ethernet).  
*   **Paso 4**: Espera aproximadamente 20 minutos para que se apliquen las actualizaciones y revisa el panel de control (**[https://status.sensecapmx.cloud/](https://status.sensecapmx.cloud/)**) o ejecuta diagnósticos desde la app de Helium.

![SenseCAP M1 SD Card Paso 6](https://www.sensecapmx.com/wp-content/uploads/2022/07/diagnostics-1.png)

**Nota**: Debes ensamblar el panel frontal del Hotspot **solo después** de confirmar que el dispositivo funciona correctamente.

¿Tienes más dudas o problemas? Abre un ticket aquí: [**https://support.sensecapmx.com/**](https://support.sensecapmx.com/)

* * *

Error en la App de Helium
================

**No se Encontró Clave de Incorporación (Onboarding Key)**
---------------------------

Por favor abre un ticket de soporte aquí: [**https://support.sensecapmx.com**](https://support.sensecapmx.com) y envía el número de serie (SN) de tu hotspot para que podamos ayudarte a resolver el problema.

![Helium App - No Onboarding Key Found](https://www.sensecapmx.com/wp-content/uploads/2022/07/onboarding.png)

* * *

**No se Encontró Hotspot**
--------------------

Mensaje "No Hotspots Found" mostrado en la app de Helium.

### **Pasos para Solucionar el Problema**

1.  Verifica primero el LED azul. Debería estar parpadeando lentamente.  
2.  Si no lo está, eso indica que tu SenseCAP M1 no ha activado el modo de configuración por Bluetooth. Verifica que tanto tu hotspot como tu teléfono móvil tengan el Bluetooth activado.  
3.  Presiona el botón en la parte trasera del SenseCAP M1 durante 6 a 10 segundos para activar el modo de configuración. Verás que el LED azul comienza a parpadear lentamente (una vez cada 2 segundos), luego intenta escanear nuevamente el hotspot.

![Helium App Errors - Not Hotspots Found](https://www.sensecapmx.com/wp-content/uploads/2022/07/no-hotspots-found.png)

* * *

**Dispositivo Desconectado**
-----------------------

El dispositivo se desconectó durante el emparejamiento por Bluetooth.

**Pasos para Solucionar el Problema**

Este problema de compatibilidad ocurre cuando se utiliza un teléfono Samsung más nuevo que el modelo S9.

Por favor, [**flashea la tarjeta SD con una nueva imagen**](https://www.sensecapmx.com/docs/sensecap-m1/m1-troubleshooting/#how-to-flash-a-new-image-to-a-new-micro-sd-card).

![Helium App Errors - Device Disconnected](https://www.sensecapmx.com/wp-content/uploads/2022/07/error-device-disconnected.png)

* * *

**Error al Escribir Característica (Characteristic Write Failed)**
-------------------------------

No se puede registrar el Hotspot dentro de la app de Helium.

**Pasos para Solucionar el Problema**

1.  Si intentas registrar tu hotspot justo después de conectarlo por Ethernet o Wi-Fi, es probable que aparezca este error ya que se están ejecutando actualizaciones OTA (Over-the-Air).  
2.  Por favor, deja tu Hotspot conectado por Ethernet o Wi-Fi por al menos 10 minutos más para que finalicen las actualizaciones.  
3.  Luego, mantén presionado el botón durante 6 a 10 segundos para ingresar al modo de configuración e intenta registrar nuevamente.

![Helium App Errors - Characteristic Write Failed](https://www.sensecapmx.com/wp-content/uploads/2022/07/unable-to-register.webp)

* * *

**Error: Lectura de Característica Fallida (Characteristic Read Failed)**
------------------------------

Error al emparejar por Bluetooth o al conectar a una red Wi-Fi.

Si recibes este mensaje de error al intentar emparejar tu Hotspot por Bluetooth o al conectarte a Wi-Fi, significa que el SSID de tu red contiene caracteres no válidos que no son reconocidos.

Por favor, evita usar caracteres no alfanuméricos (por ejemplo, cualquier cosa que no sea letras a-z o números 0-9) y símbolos.

**Solución**: Cambia el nombre de tu red Wi-Fi eliminando símbolos y caracteres no alfanuméricos.

![Helium App Errors - Characteristic Read Failed](https://www.sensecapmx.com/wp-content/uploads/2022/07/read-error.png)

* * *

**Error al Construir la Transacción de Agregar Hotspot**
----------------------------------------

La app de Helium muestra un error al construir la transacción para registrar el Hotspot.

### **Pasos para Solucionar el Problema**

1.  Si intentas registrar tu Hotspot justo después de conectarlo por Ethernet o Wi-Fi, verás este error debido a que se están ejecutando actualizaciones OTA (Over-the-Air) o aún no se han sincronizado todos los bloques.  
2.  Mantén tu Hotspot conectado a Ethernet o Wi-Fi al menos 30 minutos para permitir que termine la actualización del firmware y la sincronización de bloques. Luego, mantén presionado el botón durante 6 a 10 segundos para entrar al modo de configuración y vuelve a intentar el registro.  
3.  Verifica que el firmware esté actualizado usando la herramienta de diagnóstico o el Dashboard de SenseCAP.  
    1.  **Nota**: Si tu dispositivo no puede actualizar el firmware a la versión más reciente, se recomienda cambiar a otra red, como el hotspot de tu teléfono móvil, y repetir el paso anterior.  
    2.  **Nota**: Si los bloques no se sincronizan completamente después de actualizar el firmware, se recomienda restablecer los bloques desde la consola local.  

![Helium App Errors - Constructing Add Hotspot Transaction](https://www.sensecapmx.com/wp-content/uploads/2022/07/transaction-failed-add-hotspot.png)

* * *

**Error al Establecer Ubicación o Antena (Asserting Location/Antenna)**
-------------------------------------------------------------------------

Al intentar actualizar los detalles de la antena o establecer la ubicación, aparece el siguiente error.

**Pasos para Solucionar el Problema**

Este error está relacionado con la conexión de red o con la aplicación. Intenta reiniciar la app o vuelve a intentarlo más tarde.

![Helium App Errors - Asserting Location/Antenna](https://www.sensecapmx.com/wp-content/uploads/2022/07/assert-location-error.png)