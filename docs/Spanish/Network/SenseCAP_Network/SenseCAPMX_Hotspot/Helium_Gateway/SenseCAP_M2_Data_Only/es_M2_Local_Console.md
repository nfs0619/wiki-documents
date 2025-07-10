---
description: SenseCAP M2 Data Only Local Console
title: Consola Local del SenseCAP M2 Data Only
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Data_Only/M2_Local_Console
last_update:
  date: 02/14/2023
  author: Guillermo
---

**Cómo acceder a la Consola Local**
===================================

Hay dos formas de acceder a la Consola Local.

* * *

**Acceso vía router**
---------------------

*   **Paso 1**: Conecta tu computadora y el Hotspot al mismo router.

Puedes conectar el dispositivo al router mediante un cable de red, o configurar la conexión Wi-Fi desde la app SenseCAP Hotspot.

**Nota**: Tu computadora y el dispositivo deben estar conectados al mismo router/red.

![SenseCAP M2 Local Console Step 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-3.png)

*   **Paso 2**: Obtén la dirección IP de tu dispositivo

Si no tienes una cuenta del SenseCAP MX Dashboard, o no has añadido tu dispositivo al panel, por favor encuentra la dirección IP de tu dispositivo en la página de administración del router, o ejecuta un diagnóstico en tu app Helium para obtenerla.

Si ya tienes una cuenta registrada en SenseCAP MX Dashboard y has añadido tu dispositivo, puedes ver la IP desde el panel:

*   *   Si estás conectado vía Wi-Fi, verás la IP del Wi-Fi del dispositivo.
    *   Si estás conectado por cable Ethernet o red LAN local, verás la dirección LAN del dispositivo.

*   **Paso 3**: Obtén el usuario y contraseña del dispositivo

Puedes encontrarlos en la etiqueta en la parte posterior del dispositivo.

**Por razones de seguridad, cada dispositivo tiene una contraseña única. Después de iniciar sesión, puedes cambiar la contraseña.**

![SenseCAP M2 Local Console Step 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4.png)

*   **Paso 4**: Abre el navegador en tu computadora e inicia sesión

Escribe la dirección IP que obtuviste en un navegador para ingresar a la Consola Local. Luego ingresa el usuario y contraseña del dispositivo y haz clic en el botón de inicio de sesión.

![SenseCAP M2 Local Console Login](https://www.sensecapmx.com/wp-content/uploads/2022/07/login.png)

* * *

**Acceso vía hotspot AP del dispositivo**
-----------------------------------------

*   **Paso 1**: Activa el hotspot AP del dispositivo

Presiona el botón durante 5 segundos hasta que el indicador azul parpadee lentamente para entrar al modo de configuración.

*   **Paso 2**: Conéctate al hotspot AP

El nombre del AP es SenseCAP\_XXXXXX (dirección MAC de 6 caracteres). Conecta tu computadora a este AP.

*   **Paso 3**: Obtén el usuario y contraseña del dispositivo  
*   **Paso 4**: Abre el navegador e inicia sesión

Introduce la dirección IP (**192.168.168.1**) en un navegador para entrar a la Consola Local. Luego introduce el usuario y contraseña del dispositivo y haz clic en el botón de inicio de sesión.

* * *

**Estado**
==========

En la página principal se muestran principalmente estados como conexión de red, paquetes LoRa enviados y recibidos, información del sistema, uso de memoria, etc.

**NOTA:** Deberás esperar un momento para que toda la información aparezca.

![SenseCAP M2 Local Console Guide](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-5.png)

**NOTA:** En el histograma de paquetes LoRa, no necesariamente se muestran paquetes válidos de la red Helium.

En la información del sistema puedes ver la versión del programa Helium, la dirección del hotspot y el parámetro de región en uso.

![SenseCAP M2 Local Console Guide Region](https://www.sensecapmx.com/wp-content/uploads/2022/07/system.png)

* * *

**Sistema**
===========

**Sistema y hora**
------------------

*   _Ruta de página_: System -> System

Aquí puedes configurar aspectos fundamentales del dispositivo como su nombre de host o zona horaria. También puedes modificar la configuración de sincronización de tiempo. En general, no necesitas cambiar nada aquí.

![SenseCAP M2 Local Console Guide Time](https://www.sensecapmx.com/wp-content/uploads/2022/07/time.png)

* * *

**Luz de respiración**
----------------------

*   _Ruta de página_: System -> Breathing Light

La luz de respiración es un indicador del hotspot; puedes configurar su comportamiento.

![SenseCAP M2 Local Console Guide Breathing Light](https://www.sensecapmx.com/wp-content/uploads/2022/07/breathing-light.png)

* * *

**Región**
----------

*   _Ruta de página_: System -> Region

Aquí puedes cambiar el parámetro de región. El valor predeterminado de fábrica es ‘AUTO’, lo que significa:

*   Si no has afirmado una ubicación para el hotspot, se usará la región según el modelo del dispositivo. Por ejemplo, M2-EU868 usará la región EU868.
*   Si has afirmado ubicación en el hotspot, la región se ajustará automáticamente de acuerdo con esa ubicación.

Generalmente no necesitas cambiar la región. En casos especiales: si no tienes ubicación afirmada para un hotspot (Solo Datos), puedes elegir otra región. Por ejemplo, el modelo M2-US915 puede configurarse a AU915 si estás en Australia.

![SenseCAP M2 Local Console Guide Breathing Region Config](https://www.sensecapmx.com/wp-content/uploads/2022/07/region.png)

**NOTA:** Si has afirmado una ubicación en el hotspot, la región DEBE estar en **AUTO**.

* * *

**LuCi Password**
-----------------

**Contraseña de LuCi**
----------------------

*   _Ruta de página_: System -> Administration

Aquí puedes cambiar la contraseña de LuCi.

![SenseCAP M2 Local Console Guide Breathing LuCi Password](https://www.sensecapmx.com/wp-content/uploads/2022/07/change-password.png)

* * *

**Restaurar valores de fábrica**
-------------------------------

*   _Ruta de página_: System -> Firmware

Puedes recuperar la contraseña de LuCi restaurando los valores de fábrica si la has olvidado. Sin embargo, el dispositivo se actualizará nuevamente después de restaurar.

![SenseCAP M2 Local Console Guide Breathing LuCi Password](https://www.sensecapmx.com/wp-content/uploads/2022/07/change-password.png)

* * *

**Reiniciar**
-------------

*   _Ruta de página_: System -> Reboot

Puedes reiniciar el dispositivo desde aquí o configurar un reinicio programado.

![SenseCAP M2 Local Console Reboot](https://www.sensecapmx.com/wp-content/uploads/2022/07/reboot.png)

* * *

**Red**
=======

**Interfaces**
--------------

*   _Ruta de página_: Network -> Interfaces

Aquí puedes obtener información sobre la interfaz de red. La IP LAN por defecto es "192.168.168.1". Si la puerta de enlace de tu router también usa esta IP, debes cambiar la IP LAN del dispositivo.

![SenseCAP M2 Local Console Guide Network Interface](https://www.sensecapmx.com/wp-content/uploads/2022/07/network_interface.png)

**Wi-Fi**
---------

*   _Ruta de página_: Network -> Wireless

Aquí puedes conectarte a una red Wi-Fi. Los pasos son:

*   **Paso 1**: Haz clic en el botón '**scan**' para buscar redes Wi-Fi cercanas.

![SenseCAP M2 Local Console Guide Network Interface Wireless](https://www.sensecapmx.com/wp-content/uploads/2022/07/wireless_home.png)

*   **Paso 2**: Selecciona tu red Wi-Fi para unirte.

![SenseCAP M2 Local Console Guide Network Interface Wifi](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi_join.png)

*   **Paso 3**: Ingresa tu contraseña de Wi-Fi, luego haz clic en enviar y guardar.

![SenseCAP M2 Local Console Guide Network Interface Wifi Guide](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi_submit.png)

![SenseCAP M2 Local Console Guide Network Interface Wifi Save](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi_save.png)

En unos momentos, podrás conectarte a la red Wi-Fi, lo cual se reflejará en la página de interfaz.

* * *

**MultiWan**
------------

*   _Ruta de página_: Network -> MultiWan

Aquí puedes ver la prioridad y el estado de las interfaces de red. La prioridad de MultiWAN es: wan (ETH) > wwan (Wi-Fi) > wwan0 (4G\*).

![SenseCAP M2 Local Console Guide Network Interface MultiWan](https://www.sensecapmx.com/wp-content/uploads/2022/07/multiwan.png)

* * *

**Diagnóstico**
---------------

*   _Ruta de página_: Network -> Diagnostics

Aquí puedes medir la velocidad de tu conexión a Internet.

![SenseCAP M2 Local Console Guide Network Interface Network Test](https://www.sensecapmx.com/wp-content/uploads/2022/07/network_test.png)