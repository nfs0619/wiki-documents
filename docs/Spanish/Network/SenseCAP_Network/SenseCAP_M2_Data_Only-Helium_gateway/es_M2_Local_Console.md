---
description: SenseCAP M2 Data Only Local Console
title: Consola Local SenseCAP M2
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/M2_Local_Console
last_update:
  date: 06/21/2025
  author: Guillermo
---

**Cómo acceder a la Consola Local**
===================================

Existen dos formas de acceder a la Consola Local.

* * *

**Acceso vía router**
---------------------

*   **Paso 1**: Conecta tu computadora y el Hotspot al mismo router.

Puedes conectar el dispositivo al router mediante un cable de red o configurar la conexión Wi-Fi usando la app SenseCAP Hotspot.

**Nota**: Tu computadora y el dispositivo deben estar conectados al mismo router/red.

![SenseCAP M2 Local Console Step 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-3.png)

*   **Paso 2**: Obtén la dirección IP de tu dispositivo

Si no tienes una cuenta en el Dashboard de SenseCAP MX, o no has añadido tu dispositivo al Dashboard, busca la dirección IP en la página de administración de tu router, o ejecuta un diagnóstico desde la app Helium para obtener la dirección IP.

Si ya tienes registrada una cuenta en SenseCAP MX Dashboard y has añadido tu dispositivo, puedes ver la IP desde el dashboard:

*   *   Si estás conectado por Wi-Fi, verás la dirección IP Wi-Fi del dispositivo para hacer clic.
    *   Si estás conectado por cable Ethernet o LAN local, verás la dirección LAN del dispositivo para hacer clic.

*   **Paso 3**: Obtén el nombre de usuario y contraseña de tu dispositivo

La información está en la parte trasera del dispositivo.

**Por seguridad, cada dispositivo tiene una contraseña única. Después de iniciar sesión, puedes cambiarla.**

![SenseCAP M2 Local Console Step 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4.png)

*   **Paso 4**: Abre el navegador en la computadora e inicia sesión

Introduce la dirección IP (que obtuviste) en el navegador para entrar a la Consola Local. Luego ingresa el usuario y contraseña, y haz clic en el botón de Iniciar sesión.

![SenseCAP M2 Local Console Login](https://www.sensecapmx.com/wp-content/uploads/2022/07/login.png)

* * *

**Acceso vía AP hotspot del dispositivo**
--------------------------------

*   **Paso 1**: Enciende el AP hotspot del dispositivo

Mantén presionado el botón durante 5 segundos hasta que el indicador azul parpadee lentamente para entrar en modo configuración.

*   **Paso 2**: Conéctate al AP hotspot

El nombre del AP es SenseCAP\_XXXXXX (las 6 últimas cifras de la MAC). Conecta tu computadora a este AP.

*   **Paso 3**: Obtén el nombre de usuario y contraseña de tu dispositivo  
*   **Paso 4**: Abre el navegador en la computadora e inicia sesión

Introduce la dirección IP (**192.168.168.1**) en el navegador para entrar a la Consola Local. Luego ingresa usuario y contraseña, y haz clic en Iniciar sesión.

* * *

**Estado**
==========

En la página principal verás principalmente algunas indicaciones de estado, como conexión de red, paquetes LoRa enviados y recibidos, información del sistema, uso de memoria, etc.

**NOTA:** Deberás esperar un momento para que aparezca toda la información.

![SenseCAP M2 Local Console Guide](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-5.png)

**NOTA:** En el histograma de paquetes LoRa, no necesariamente todos son paquetes válidos en la red Helium.

En la información del sistema podrás ver la versión del programa Helium, la dirección del hotspot y el parámetro de región que está en uso.

![SenseCAP M2 Local Console Guide Region](https://www.sensecapmx.com/wp-content/uploads/2022/07/system.png)

* * *

**Sistema**
==========

**Sistema y Hora**
-------------------

*   _Ruta de la página_: Sistema -> Sistema

Aquí puedes configurar los aspectos fundamentales de tu dispositivo, como el nombre del host o la zona horaria. También puedes modificar la configuración de sincronización de tiempo. Por lo general, no necesitas cambiar nada en esta página.

![SenseCAP M2 Local Console Guide Time](https://www.sensecapmx.com/wp-content/uploads/2022/07/time.png)

* * *

**Luz Respiratoria (Breathing Light)**
-------------------

*   _Ruta de la página_: Sistema -> Luz Respiratoria

La Luz Respiratoria es un indicador del dispositivo hotspot; puedes configurar el comportamiento de esta luz.

![SenseCAP M2 Local Console Guide Breathing Light](https://www.sensecapmx.com/wp-content/uploads/2022/07/breathing-light.png)

* * *

**Región**
----------

*   _Ruta de la página_: Sistema -> Región

Aquí puedes cambiar el parámetro de región. El valor predeterminado de fábrica es ‘AUTO’, que significa:

*   Si no tienes una ubicación asignada para el hotspot, la región usada se basa en el tipo de hotspot; por ejemplo, el modelo M2-EU868 usa la región EU868.
*   Si tienes una ubicación asignada para el hotspot, la región se ajusta automáticamente según la ubicación.

En general, no necesitas configurar la región. En casos especiales: Si no tienes una ubicación asignada para un hotspot (Solo Datos), puedes elegir otra región. Por ejemplo, el modelo M2-US915 puede configurarse como AU915 en Australia.

![SenseCAP M2 Local Console Guide Breathing Region Config](https://www.sensecapmx.com/wp-content/uploads/2022/07/region.png)

**NOTA:** Si tienes una ubicación asignada para el hotspot, la configuración de Región DEBE ser **AUTO**.

* * *

**Contraseña LuCi**
-----------------

*   _Ruta de la página_: Sistema -> Administración

Aquí puedes cambiar la contraseña de LuCi.

![SenseCAP M2 Local Console Guide Breathing LuCi Password](https://www.sensecapmx.com/wp-content/uploads/2022/07/change-password.png)

* * *

**Restaurar valores de fábrica**
----------------------------

*   _Ruta de la página_: Sistema -> Firmware

Puedes recuperar tu contraseña de LuCi restaurando los valores de fábrica si la has olvidado. Sin embargo, después de restaurar los valores de fábrica, el dispositivo se actualizará nuevamente.

![SenseCAP M2 Local Console Guide Breathing LuCi Password](https://www.sensecapmx.com/wp-content/uploads/2022/07/change-password.png)

* * *

**Reinicio**
----------

*   _Ruta de la página_: Sistema -> Reinicio

Aquí puedes reiniciar el dispositivo o configurar un reinicio programado.

![SenseCAP M2 Local Console Reboot](https://www.sensecapmx.com/wp-content/uploads/2022/07/reboot.png)

* * *

**Red**
===========

**Interfaces**
--------------

*   _Ruta de la página_: Red -> Interfaces

Aquí puedes obtener información sobre la interfaz de red. La IP LAN por defecto es "192.168.168.1". Si la IP de la puerta de enlace (gateway) de tu router es la misma, necesitarás cambiar la IP LAN del dispositivo.

![SenseCAP M2 Local Console Guide Network Interface](https://www.sensecapmx.com/wp-content/uploads/2022/07/network_interface.png)

**Inalámbrico (Wireless)**
------------

*   _Ruta de la página_: Red -> Inalámbrico

Aquí puedes conectarte a una red Wi-Fi. Los pasos son:

*   **Paso 1**: Haz clic en el botón '**scan**' para buscar redes Wi-Fi en tu área.

![SenseCAP M2 Local Console Guide Network Interface Wireless](https://www.sensecapmx.com/wp-content/uploads/2022/07/wireless_home.png)

*   **Paso 2**: Selecciona tu red Wi-Fi para unirte a ella.

![SenseCAP M2 Local Console Guide Network Interface Wifi](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi_join.png)

*   **Paso 3**: Ingresa la contraseña de tu Wi-Fi, luego envía y guarda.

![SenseCAP M2 Local Console Guide Network Interface Wifi Guide](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi_submit.png)

![SenseCAP M2 Local Console Guide Network Interface Wifi Save](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi_save.png)

En unos momentos podrás conectarte a la red Wi-Fi, como se muestra en la página de la interfaz.

* * *

**MultiWan**
------------

*   _Ruta de la página_: Red -> MultiWan

Aquí puedes ver la prioridad y el estado de las interfaces de red. La prioridad MultiWAN es: wan (ETH) > wwan (Wi-Fi) > wwan0 (4G*).

![SenseCAP M2 Local Console Guide Network Interface MultiWan](https://www.sensecapmx.com/wp-content/uploads/2022/07/multiwan.png)

* * *

**Diagnósticos**
---------------

*   _Ruta de la página_: Red -> Diagnósticos

Aquí puedes medir la velocidad de tu conexión a Internet.

![SenseCAP M2 Local Console Guide Network Interface Network Test](https://www.sensecapmx.com/wp-content/uploads/2022/07/network_test.png)