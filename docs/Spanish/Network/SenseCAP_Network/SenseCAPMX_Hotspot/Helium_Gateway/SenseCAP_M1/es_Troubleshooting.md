---
description: SenseCAP M1 Trouble Shooting
title: TroubleShooting
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/Troubleshooting
last_update:
  date: 06/23/2025
  author: Guillermo
---

Solución de Problemas del SenseCAP M1
=====================================

Problemas de Hardware
=====================

* * *

**El LED azul no parpadea**
---------------------------

![SenseCAP M1 LED Azul](https://www.sensecapmx.com/wp-content/uploads/2022/07/blue-led-1.webp)

![SenseCAP M1 Sin LED Azul](https://www.sensecapmx.com/wp-content/uploads/2022/08/back-front-led-m1.png)

**Pasos para solucionar el problema**

1. Verifica si el LED de ETH parpadea. Si las luces verde y amarilla de ETH están encendidas y el LED azul está apagado, **[por favor flashea primero una nueva tarjeta SD](https://www.sensecapmx.com/docs/sensecap-m1/m1-troubleshooting/#how-to-flash-a-new-image-to-a-new-micro-sd-card)**. Si la luz azul sigue apagada, puede tratarse de un defecto de hardware.
2. Si los LEDs verde y amarillo están apagados, asegúrate de que el adaptador de corriente funciona correctamente. Puedes verificarlo reemplazándolo por un cargador de teléfono de 5V-3A con cable tipo-C y usando un nuevo cable de red para ver si se resuelve el problema.
3. Si el hotspot se conecta a internet vía Wi-Fi, revisa si la luz roja está encendida en el panel frontal. Si no lo está, es probable que se trate de un defecto de hardware.

* * *

Problemas de Red
================

* * *

**¿No puedes conectarte a Internet?**
-------------------------------------

Tener una configuración de red correcta es clave. Asegúrate de leer todos los detalles a continuación para una configuración adecuada.

Los hotspots de Helium pueden no funcionar si están detrás de un firewall o usan un tipo de NAT incompatible (descrito más abajo). También puede deberse a la configuración del router/red o simplemente a que no hay conexión a Internet.

**Nota**: Si no puedes configurar la red correctamente o los pasos a continuación no te funcionan, visita nuestro >> Canal Oficial de Discord para recibir orientación adicional.

**Pasos de solución – Conexión por Ethernet**

**Verifica tus cables Ethernet si no estás usando Wi-Fi**: Asegúrate de que el cable esté conectado firmemente desde el router/modem al hotspot.

* **Luces ámbar parpadeando al lado del puerto Ethernet del Hotspot**: Conexión establecida correctamente.
* Si no ves luces ámbar parpadeando, prueba con otro cable, ya que con el tiempo pueden fallar.

**Verifica tu conexión a Internet**: Asegúrate de poder conectarte a Internet desde tu computadora/portátil/teléfono usando la misma red. Si no puedes conectarte, contacta a tu proveedor de servicios de Internet (ISP) para asistencia.

**Pasos de solución – Conexión por Wi-Fi**

* **Si estás usando Wi-Fi**: Asegúrate de poder conectarte a tu red inalámbrica usando tu contraseña de seguridad WEP o WPA (también conocida como contraseña Wi-Fi). Si no sabes cómo acceder o configurar tu módem inalámbrico, contacta directamente al fabricante del equipo.
* Si no puedes conectarte a Internet, reinicia tu router. Desconecta el hotspot y el router de la corriente durante 2 minutos. Luego vuelve a conectarlos y verifica si ya tienes conexión.

* * *

**¿Cómo conectar el Hotspot al Wi-Fi de mi teléfono?**
-------------------------------------------------------

**Este ejemplo está basado en dispositivos Apple iOS.**

* Abre "**Configuración**" en tu teléfono.
* Haz clic en "**Hotspot Personal**".

![Hotspot Personal iOS](https://www.sensecapmx.com/wp-content/uploads/2022/07/hotspot.png)

* Activa la opción para permitir que otros se conecten.
* Empareja tu Hotspot.
* Conecta tu Hotspot al nombre del Hotspot Personal de tu iPhone.

![Configuración Hotspot iOS](https://www.sensecapmx.com/wp-content/uploads/2022/07/hotspot-setup.png)

Ahora puedes conectar tu gateway SenseCAP al hotspot personal de tu teléfono vía Wi-Fi para solucionar problemas de actualizaciones de firmware y conectividad de red.

* * *

Problemas con la Tarjeta SD
===========================

* * *

**¿Cómo reemplazar el archivo 'config.json'?**
---------------------------------------------

**PROCEDER CON PRECAUCIÓN**: Los siguientes pasos deben realizarse **ÚNICAMENTE** si has sido instruido por nuestro equipo de soporte técnico. No repitas estos pasos si **NO** has recibido dicha recomendación.

**NOTA**: No utilices archivos '**config.json**' de otros Hotspots. Cada Hotspot tiene un archivo '**config.json**' único vinculado a su número de serie.

* * *

**Instrucciones**

Las siguientes instrucciones te ayudarán a reemplazar el archivo 'config.json' en la tarjeta Micro SD.  
Si detectas que el dispositivo está atascado con un firmware desactualizado y consideras que esto puede estar causando fallos, sigue los pasos a continuación para resolver el problema.

**NOTA**: Primero revisa tu conexión a Internet para asegurarte de que el problema no esté relacionado con la red antes de proceder con el reemplazo de la tarjeta Micro SD.

* * *

**Requisitos**

1. Tarjeta Micro SD en tu Hotspot SenseCAP M1  
2. Lector de tarjetas Micro SD  
3. Destornillador  
4. El archivo '**config.json**' copiado de la tarjeta original  

**Nota**: Si no puedes obtener el archivo original, solicita uno a nuestro equipo de soporte técnico.

![Requisitos para reemplazar config.json](https://www.sensecapmx.com/wp-content/uploads/2022/07/requirements-sd-flash.png)

_Elementos requeridos_

* * *

**Pasos**

* **Paso 1**: Apaga tu Hotspot  
* **Paso 2**: Retira la antena  
* **Paso 3**: Coloca el panel frontal hacia arriba  

![Paso 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step1-1.png)

* **Paso 4**: Usa un destornillador para aflojar los dos tornillos del panel frontal  

![Paso 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step2-1.png)

* **Paso 5**: Retira el panel frontal y colócalo a un lado  

![Paso 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step3-1.png)

* **Paso 6**: Retira la cubierta amarilla sobre la tarjeta Micro SD con unas pinzas y saca la tarjeta  

![Paso 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step4-1.png)  
![Paso 5](https://www.sensecapmx.com/wp-content/uploads/2022/07/step5-1.png)  
![Paso 6](https://www.sensecapmx.com/wp-content/uploads/2022/07/step6-1.png)

* **Paso 7**: Inserta la tarjeta Micro SD en el lector y conéctala a tu computadora  

![Paso 7](https://www.sensecapmx.com/wp-content/uploads/2022/07/step7-1.png)  
![Paso 7B](https://www.sensecapmx.com/wp-content/uploads/2022/07/step8-1.png)

**NOTA**: Si usas Windows y aparece el mensaje "**Debes formatear el disco en la unidad X antes de poder usarlo**", haz clic en "**Cancelar**" para evitar perder los datos.

![Mensaje de formato en Windows](https://www.sensecapmx.com/wp-content/uploads/2022/07/format-1.png)

_Mensaje de Windows al insertar tarjeta SD_

* **Paso 8**: Abre la carpeta '**resin-boot**' y localiza el archivo '**config.json**'. Ábrelo con Bloc de notas para confirmar si está vacío.

- Si **NO** está vacío, el problema puede deberse a una actualización OTA (por red) interrumpida. Revisa tu red y configuraciones de seguridad/firewall.
- Si **SÍ** está vacío, reemplázalo con el nuevo archivo 'config.json' que te proporcionamos.

![Archivo config.json vacío](https://www.sensecapmx.com/wp-content/uploads/2022/07/config-1.png)

* **Paso 9**: Si el archivo '**config.json**' está vacío, reemplázalo con el nuevo arrastrándolo a la carpeta del disco y haz clic en "Reemplazar".

**NOTA**: No elimines ningún otro archivo, ya que podrías provocar problemas con el funcionamiento del SenseCAP M1.

**NOTA**: Cada dispositivo tiene su propio archivo 'config.json'. No compartas este archivo ni uses uno que no te corresponda.

**Para MacOS**

![Copiar config.json en Mac](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-1.png)  
_MacOS - Copiar archivo_ 'config.json'  
![Reemplazo en MacOS](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-2.png)

**Para Windows**

![Copiar config.json en Windows](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-1.png)  
_Windows - Copiar archivo "config.json"_  
![Reemplazo en Windows](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-2.png)

**Nota**: Se recomienda verificar que el nuevo archivo '**config.json**' contiene datos abriéndolo en el Bloc de notas.

* **Paso 10**: Vuelve a insertar la tarjeta Micro SD dentro del Hotspot  

**TIP**: Vuelve a colocar el panel frontal sólo después de confirmar que tu Hotspot está funcionando correctamente.

![Montar SenseCAP M1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step10-1.png)  
![Montar SenseCAP M1 - 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step11-1.png)  
![Montar SenseCAP M1 - 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step12-1.png)  
![Montar SenseCAP M1 - 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step13-1.png)

* **Paso 11**: Conecta la antena y enciende tu Hotspot

Enciende el SenseCAP M1, conéctalo a Internet (preferentemente con cable Ethernet), espera ~20 minutos para las actualizaciones OTA y revisa el estado en el panel de control: [https://status.sensecapmx.cloud/](https://status.sensecapmx.cloud/) O realiza un diagnóstico desde la App de Helium.

¿Tienes más preguntas o problemas? Abre un ticket aquí: [https://support.sensecapmx.com](https://support.sensecapmx.com)

* * *

**Cómo Flashear una Nueva Imagen en una Nueva Tarjeta Micro SD**
----------------------------------------------------------------

**PROCEDER CON PRECAUCIÓN**: Los siguientes pasos deben realizarse **ÚNICAMENTE** si has sido instruido por nuestro equipo de soporte técnico.  
No necesitas seguir estos pasos si **NO** has recibido esa indicación.

Debido al uso inadecuado de los Hotspots, hemos detectado que el encendido/apagado frecuente y el insertar/quitar la tarjeta Micro SD pueden provocar errores desconocidos, como problemas en la alineación del sistema de archivos.

**Si te han indicado reemplazar la tarjeta Micro SD para depurar el problema, sigue cuidadosamente las instrucciones a continuación.**

* * *

**Instrucciones**

Las siguientes instrucciones te guiarán para flashear una imagen en una nueva tarjeta Micro SD y reemplazar la tarjeta original del SenseCAP M1 para solucionar errores potenciales en la SD.

**NOTA**: Verifica primero tu conexión a Internet para asegurarte de que el problema no esté relacionado con la red antes de reemplazar la tarjeta Micro SD.

* * *

**Requisitos**

**Nota**: Ahora contamos con un kit de reemplazo disponible para su compra haciendo clic [**aquí**](https://www.seeedstudio.com/SenseCAP-M1-SD-Card-Replacement-Kit-p-5279.html)

![Kit de reemplazo de tarjeta SD SenseCAP M1](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card.png)

_El kit incluye un destornillador, un lector de tarjetas MicroSD, una MicroSD de 64GB y una guía de reemplazo._

1. Nueva tarjeta Micro SD (SanDisk High Endurance 64GB)  
2. Lector de tarjetas Micro SD  
3. Destornillador  
4. Archivo '**config.json**' copiado de la tarjeta original  
   1. **Nota**: Si no puedes recuperarlo, solicita una copia al equipo de soporte técnico.

* * *

**Pasos**

1. Apaga el dispositivo, abre el panel frontal, retira la pegatina amarilla sobre la tarjeta Micro SD (puedes usar pinzas), y saca la tarjeta original.
2. Conecta la tarjeta Micro SD original a tu computadora usando un lector y copia el archivo `config.json` desde la partición "**resin-boot**" a tu computadora.  
   1. **Nota**: Si no puedes obtenerla, solicita el archivo a nuestro equipo de soporte técnico.
3. Descarga la **imagen de SenseCAP M1** desde este enlace:  
   [**sensecap-m1-sd-version-20220213.img.zip**](https://drive.google.com/open?id=17nbsZ6wnQVxOh4KVfImaNwHNbdWz6LBh&authuser=0)
4. Descarga la herramienta **Balena Etcher** desde:  
   [**balenaEtcher - Flashea imágenes de SO a tarjetas SD y USBs**](https://www.balena.io/etcher/)
5. Usa **Balena Etcher** para flashear la imagen descargada en la nueva tarjeta Micro SD.
6. Copia el archivo `config.json` que guardaste a la partición "**resin-boot**" de la nueva Micro SD después de flashearla.
7. Retira la tarjeta Micro SD de la computadora y colócala dentro del SenseCAP M1.
8. Enciende el SenseCAP M1, conéctalo a Internet (de preferencia con cable Ethernet), espera aproximadamente 20 minutos para las actualizaciones, y revisa el estado desde el panel:  
   [**https://status.sensecapmx.cloud**](https://status.sensecapmx.cloud) o corre el diagnóstico desde la app de Helium.

**Nota**: Solo vuelve a ensamblar el panel frontal del Hotspot después de confirmar que todo funciona correctamente.

* * *

**Cómo Abrir el SenseCAP M1 y Reemplazar la Tarjeta Micro SD**
---------------------------------------------------------------

* **Paso 1:** Apaga tu Hotspot y luego retira la antena.

![SenseCAP M1 Paso SD 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-1-1.png)

* **Paso 2**: Usa un destornillador para aflojar los dos tornillos del panel frontal.

![SenseCAP M1 Paso SD 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-2.png)

* **Paso 3**: Retira el panel frontal y colócalo a un lado.

![SenseCAP M1 Paso SD 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-3.png)

* **Paso 4**: Retira la pegatina amarilla que cubre la tarjeta Micro SD (puedes usar pinzas).

![SenseCAP M1 Paso SD 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4.png)  
![SenseCAP M1 Paso SD 4B](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4a.png)

* * *

**Cómo Leer la Tarjeta Micro SD y Flashear la Imagen**
------------------------------------------------------

* **Paso 1**: Inserta una nueva tarjeta Micro SD en el lector de tarjetas Micro SD.

![Paso Imagen SD 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-1-1.png)  
_Nueva tarjeta Micro SD en lector_

![Paso Imagen SD 1B](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-2.png)  
_Asegúrate de que esté completamente insertada_

* **Paso 2**: Flashea la imagen de SenseCAP M1 en la nueva tarjeta Micro SD usando Balena Etcher.
    * Descarga la imagen desde aquí:  
      [**sensecap-m1.img.zip**](https://drive.google.com/file/d/1fZf09U2_jQOpsSKPWc8TAZ_Jl82X9tzx/view?usp=sharing)
    * Descarga **Balena Etcher** desde:  
      [**balenaEtcher - Flashea imágenes de SO en SD/USB**](https://www.balena.io/etcher/)

![Balena Etcher](https://www.sensecapmx.com/wp-content/uploads/2022/07/balena.png)  
_Selecciona según tu sistema operativo_

![Balena Etcher 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/balena-2.png)  
_Arrastra el archivo ZIP a Balena Etcher_

* **Paso 3**: Luego de flashear exitosamente, copia el archivo `"config.json"` (proporcionado por soporte o previamente guardado) a la partición `"resin-boot"` de la nueva tarjeta.

**Para macOS**

![macOS copiar config.json](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-1.png)  
_macOS – Copiar archivo `config.json`_

**Para Windows**

![Windows copiar config.json](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-1.png)

* **Paso 4**: Expulsa la nueva tarjeta Micro SD de la computadora.
* **Paso 5**: Inserta la nueva tarjeta Micro SD en el SenseCAP M1.

![SenseCAP M1 Paso SD 5](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-5.png)

* **Paso 6**: Enciende el SenseCAP M1 y vuelve a conectarlo a Internet (preferentemente por cable Ethernet).
* **Paso 7**: Espera aproximadamente 20 minutos para que se apliquen las actualizaciones. Luego revisa el estado en el panel: [https://status.sensecapmx.cloud/](https://status.sensecapmx.cloud/)  
o corre diagnóstico desde la app de Helium.

![SenseCAP M1 Diagnóstico](https://www.sensecapmx.com/wp-content/uploads/2022/07/diagnostics-1.png)

**Nota**: Solo debes volver a ensamblar el panel frontal después de confirmar que tu Hotspot funciona correctamente.

¿Tienes más dudas o problemas? Abre un ticket en: [https://support.sensecapmx.com/](https://support.sensecapmx.com/)

* * *

**Cómo Formatear la Tarjeta Micro SD y Flashear la Imagen**
------------------------------------------------------------

**PROCEDER CON PRECAUCIÓN**: Los siguientes pasos deben seguirse **ÚNICAMENTE** si has sido instruido por el equipo de Soporte Técnico.  
No realices estos pasos si **NO** se te ha indicado hacerlo.

Debido al uso incorrecto de los Hotspots por algunos usuarios, se ha detectado que el encendido/apagado constante o insertar/quitar la tarjeta SD puede causar errores como desalineación del sistema de archivos.

**Si se te ha indicado reemplazar la tarjeta SD para depurar el problema, sigue cuidadosamente las instrucciones.**

* * *

**Instrucciones**

A continuación, se detallan los pasos para flashear una imagen en una nueva tarjeta Micro SD y reemplazar la original en el SenseCAP M1, corrigiendo errores potenciales en la SD.

**NOTA**: Asegúrate primero de que el problema no esté relacionado con tu conexión a Internet antes de proceder.

* * *

1. Tarjeta Micro SD del Hotspot SenseCAP M1  
2. Lector de tarjetas Micro SD  
3. Destornillador  
4. Archivo `config.json` copiado de la tarjeta original  
   - **Nota**: Si no puedes obtenerlo, solicita una copia al equipo de soporte técnico  
5. SD Card Formatter 5.0.1  
6. Para **Windows** 👉 [**Clic aquí**](https://drive.google.com/file/d/15KMqnVpeOMRcFOYIRLbwA4CJooNsdkLM/view?usp=sharing) para descargar  
7. Para **Mac OS** 👉 [**Clic aquí**](https://drive.google.com/file/d/1FjxMOdGDjW3iKx3COeexY7E2bpF2cqDy/view?usp=sharing) para descargar  
8. Imagen SenseCAP M1 👉 [**Descargar aquí**](https://drive.google.com/open?id=17nbsZ6wnQVxOh4KVfImaNwHNbdWz6LBh&authuser=0)  
9. Balena Etcher 👉 [**Descargar aquí**](https://www.balena.io/etcher/)

![Kit de reemplazo](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card.png)

_El kit incluye un destornillador, lector de tarjetas MicroSD, una MicroSD de 64GB y guía de instalación._

* * *

**Pasos**

1. Apaga el dispositivo, abre el panel frontal, retira la etiqueta amarilla sobre la Micro SD y extrae la tarjeta.
2. Conecta la tarjeta Micro SD a tu computadora mediante el lector y **copia el archivo `config.json`** desde la partición **`resin-boot`** a tu equipo.  
   - **Nota**: Si no puedes obtener el archivo, solicítalo al soporte técnico.
3. Formatea la Micro SD usando **SD Card Formatter 5.0.1**
4. Flashea la imagen de SenseCAP M1 en la tarjeta usando **Balena Etcher**
5. Copia el archivo `config.json` a la partición **`resin-boot`** de la Micro SD ya flasheada.
6. Inserta la tarjeta de nuevo en tu SenseCAP M1.
7. Enciende el SenseCAP M1, conéctalo a Internet (preferentemente por cable Ethernet), espera unos **20 minutos** para actualizaciones OTA y verifica el estado en el [**Dashboard**](https://docs.sensecapmx.com/home/sensecap-dashboard) o en la App de Helium.

**Importante**: No cierres el panel frontal del Hotspot hasta confirmar que funciona correctamente.

* * *

**HoCómo Abrir el SenseCAP M1 y Reemplazar la Tarjeta Micro SD**

* **Paso 1:** Apaga tu Hotspot y quita la antena.

![SenseCAP M1 SD Card Step 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-1-1.png)

* **Paso 2:** Usa un destornillador para aflojar los dos tornillos del panel frontal.

![SenseCAP M1 SD Card Step 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-2.png)

* **Paso 3:** Retira el panel frontal y colócalo a un lado.

![SenseCAP M1 SD Card Step 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-3.png)

* **Paso 4:** Retira la etiqueta amarilla encima de la Micro SD (puedes usar pinzas).

![SenseCAP M1 SD Card Step 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4.png)

![SenseCAP M1 SD Card Step 4B](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4a.png)

* * *

**Cómo Formatear la Tarjeta Micro SD (Windows)**

* **Paso 1:** Inserta una nueva tarjeta Micro SD en el lector de tarjetas Micro SD.

![SenseCAP M1 - Paso 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-1-1.png)

_Nueva tarjeta Micro SD en el lector_

![Verifica conexión completa](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-2.png)

_Asegúrate de que esté completamente insertada_

* **Paso 2:** Instala y ejecuta **SD Card Formatter**.

![SD Card Formatter](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-formatter-1.png)

* **Paso 3:** Selecciona la tarjeta Micro SD, elige “**Overwrite format**”, escribe `resin-boot` como etiqueta del volumen (Volume Label) y haz clic en “**Format**”.

![Etiqueta resin-boot](https://www.sensecapmx.com/wp-content/uploads/2022/07/formatter-resin-1.png)

* **Paso 4:** Haz clic en **"Yes"** en la ventana de confirmación.

![Confirmación de formato](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-1-2.png)

* **Paso 5:** Espera de **30 a 45 minutos** para que el proceso se complete.

![Formato completo](https://www.sensecapmx.com/wp-content/uploads/2022/07/formatter-3-1.png)

* * *

Los pasos son similares. Observa las siguientes imágenes como referencia:

![Formateo en MacOS](https://www.sensecapmx.com/wp-content/uploads/2022/07/mac-formatter-1-1.png)  

![Formateo completo en MacOS](https://www.sensecapmx.com/wp-content/uploads/2022/07/mac-formatter-2-1.png)

* * *

**Cómo Flashear la Imagen en la Tarjeta Micro SD**

* Descarga la imagen de SenseCAP M1 desde aquí: [**sensecap-m1-sd-version-20220213.img.zip**](https://drive.google.com/open?id=17nbsZ6wnQVxOh4KVfImaNwHNbdWz6LBh&authuser=0)

* Descarga la herramienta Balena Etcher desde aquí: [**balenaEtcher - Flash OS images to SD cards & USB drives**](https://www.balena.io/etcher/)

![Balena Etcher](https://www.sensecapmx.com/wp-content/uploads/2022/07/balena.png)  
_Selecciona tu sistema operativo_

![Balena Etcher - Uso](https://www.sensecapmx.com/wp-content/uploads/2022/07/balena-2.png)  
_Arrastra el archivo ZIP de la imagen a Balena Etcher_

* * *

**Cómo Añadir el Archivo 'config.json' a la Tarjeta Micro SD**
--------------------------------------------------------------

Después de flashear correctamente la imagen en la tarjeta MicroSD, copia el archivo **`config.json`** (que te proporcionamos o que copiaste anteriormente) desde tu computadora a la partición llamada `resin-boot`.

**NOTA**: No elimines ningún otro archivo de la partición, ya que esto puede generar errores en el SenseCAP M1.

**NOTA**: Cada dispositivo tiene un archivo `config.json` único registrado. No lo compartas ni uses archivos de otros dispositivos.

### Para macOS

![Copiar config.json - macOS](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-1.png)  
_macOS - Copiar archivo `config.json`_

![Reemplazar config.json - macOS](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-2.png)

### Para Windows

![Copiar config.json - Windows](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-1.png)  
_Windows - Copiar archivo `config.json`_

![Reemplazar config.json - Windows](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-2.png)

* * *

**Después de Formatear la Tarjeta Micro SD y Flashear la Imagen**
-------------------------------------------------------------------

* **Paso 1:** Desconecta la nueva tarjeta Micro SD de tu computadora.  
* **Paso 2:** Inserta la nueva tarjeta Micro SD en tu SenseCAP M1.

![Paso - Insertar MicroSD](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-5.png)

* **Paso 3:** Enciende el SenseCAP M1 y vuelve a conectarlo a Internet (se recomienda usar cable Ethernet).
* **Paso 4:** Espera aproximadamente **20 minutos** para que se apliquen las actualizaciones OTA (Over-the-Air) y revisa el estado desde el [**Panel de Control**](https://status.sensecapmx.cloud/) o usa la app Helium para correr diagnósticos.

![Diagnóstico Helium](https://www.sensecapmx.com/wp-content/uploads/2022/07/diagnostics-1.png)

**Nota:** No ensambles el panel frontal hasta confirmar que tu Hotspot funciona correctamente.

¿Tienes más dudas o problemas? Abre un ticket de soporte en: [https://support.sensecapmx.com/](https://support.sensecapmx.com/)

* * *

Helium App – Errores Comunes
=============================

**No se Encontró la Clave de Registro (Onboarding Key)**
---------------------------------------------------------

Abre un ticket de soporte en:  
[https://support.sensecapmx.com](https://support.sensecapmx.com)  
y proporciona el número de serie (SN) de tu Hotspot.

![Error - Onboarding](https://www.sensecapmx.com/wp-content/uploads/2022/07/onboarding.png)



* * *

**No se Encontró Ningún Hotspot**
---------------------------------

Mensaje “No Hotspots Found” en la app de Helium.

**Pasos para Solucionar**

1. Revisa el LED azul. Debe estar **parpadeando lentamente**.  
2. Si no es así, indica que el SenseCAP M1 **no ha entrado en modo de configuración Bluetooth**.  
3. Mantén presionado el botón trasero del SenseCAP M1 durante **6 a 10 segundos**. El LED azul debe empezar a parpadear lentamente (1 vez cada 2 segundos). Intenta escanear el Hotspot nuevamente.

![No Hotspot Found](https://www.sensecapmx.com/wp-content/uploads/2022/07/no-hotspots-found.png)

* * *

**Dispositivo Desconectado**
----------------------------

Mensaje de desconexión al emparejar por Bluetooth.

**Solución**

Esto suele ocurrir con teléfonos Samsung más recientes que el modelo **S9**.

[Flashea nuevamente la tarjeta SD con una nueva imagen](https://www.sensecapmx.com/docs/sensecap-m1/m1-troubleshooting/#how-to-flash-a-new-image-to-a-new-micro-sd-card)

![Error - Dispositivo Desconectado](https://www.sensecapmx.com/wp-content/uploads/2022/07/error-device-disconnected.png)

* * *

**Fallo al Escribir Características (Characteristic Write Failed)**
-------------------------------------------------------------------

Error al registrar el Hotspot en la app de Helium.

**Pasos para Solucionar**

1. Si intentas registrar el Hotspot justo después de conectarlo por Ethernet o Wi-Fi, podrías ver este error debido a que se están realizando actualizaciones OTA.
2. Deja conectado el dispositivo por al menos **10 minutos más**.
3. Mantén presionado el botón durante **6 a 10 segundos** para ingresar al modo de configuración. Luego intenta registrar el Hotspot nuevamente.

![Characteristic Write Failed](https://www.sensecapmx.com/wp-content/uploads/2022/07/unable-to-register.webp)

* * *

**Fallo al Leer Características (Characteristic Read Failed)**
--------------------------------------------------------------

Error al emparejar por Bluetooth o conectar a Wi-Fi.

**Causa**: El nombre de tu red Wi-Fi (**SSID**) contiene **caracteres no válidos** (por ejemplo: símbolos o acentos).

**Solución**: Cambia el nombre de tu red Wi-Fi para que contenga **solo letras y números** (a-z, 0-9), sin símbolos especiales.

![Read Failed](https://www.sensecapmx.com/wp-content/uploads/2022/07/read-error.png)

* * *

**Error al Construir la Transacción de Añadir Hotspot**
------------------------------------------------------

La app de Helium muestra un error al construir la transacción para registrar el Hotspot.

**Pasos para Solucionar**

1. Si intentas registrar tu Hotspot justo después de conectarlo por Ethernet o Wi-Fi, verás este error porque están en curso las actualizaciones OTA (Over-the-Air) o los bloques aún no se han sincronizado completamente.
2. Deja el Hotspot conectado a Ethernet o Wi-Fi por al menos **30 minutos** para que termine las actualizaciones OTA y el proceso de sincronización de bloques. Luego, mantén presionado el botón durante 6-10 segundos para entrar en modo configuración y vuelve a intentar registrar el Hotspot.
3. Verifica la versión del firmware usando los diagnósticos o el Panel de Control SenseCAP para asegurarte que esté actualizado.  
    1. **Nota:** Si el firmware no se actualiza a la última versión, intenta cambiar la red a la que está conectado el dispositivo, por ejemplo, usa el hotspot de tu teléfono móvil, y luego repite el paso 2.
    2. **Nota:** Si el dispositivo no puede sincronizar completamente los bloques luego de la actualización OTA, se recomienda realizar un reseteo de bloques en la consola local.

![Error al Construir Transacción](https://www.sensecapmx.com/wp-content/uploads/2022/07/transaction-failed-add-hotspot.png)

---

**Error al Confirmar Ubicación/Antena**
---------------------------------------

Al intentar actualizar los detalles de la antena o confirmar la ubicación, aparece el siguiente error.

**Pasos para Solucionar**

Este problema está relacionado con la conexión de red o la app. Prueba reiniciar la app o intenta nuevamente más tarde.

![Error al Confirmar Ubicación/Antena](https://www.sensecapmx.com/wp-content/uploads/2022/07/assert-location-error.png)
