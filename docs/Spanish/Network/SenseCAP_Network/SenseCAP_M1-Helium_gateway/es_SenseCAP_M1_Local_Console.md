---
description: SenseCAP M1 Local Console
title: Consola Local SenseCAP M1
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Local_Console
last_update:
  date: 06/21/2025
  author: Guillermo
---


# **Resumen**
=============

**Última actualización de funciones - 14 de enero de 2022:**  
Para mejorar la seguridad de la Consola Local de SenseCAP, se añadió una contraseña adicional para iniciar sesión. Además del CPUID, la contraseña predeterminada es el número de serie (S/N) del hotspot.  
**Se recomienda cambiar esta contraseña tras el primer inicio de sesión.**

**Nota:** Tu computadora y el Hotspot deben estar conectados a la misma red/router para usar la Consola Local. Si tu Hotspot está en una ubicación remota, **no podrás utilizar las funciones de la consola local.**

![Consola Local](https://www.sensecapmx.com/wp-content/uploads/2022/07/local-console.png)

# **Inicio de Sesión**
======================

**1\. Obtén el CPUID y S/N de tu Hotspot**

*   Si no tienes una cuenta del Dashboard de SenseCAP M1 o aún no has añadido tu Hotspot, consulta la etiqueta del dispositivo para obtener el S/N y el CPUID.

![Datos de acceso - método 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-16.png)

*   Si ya registraste una cuenta en el Dashboard de SenseCAP M1 y añadiste tu Hotspot, puedes copiar el S/N y CPUID directamente desde el dashboard.

![Datos de acceso - método 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-1-1.png)

**2\. Get the IP Address of your hotspot**

* Si no tienes una cuenta en el panel de control de SenseCAP M1 o no has añadido tu hotspot al panel, localiza la dirección IP del hotspot en la página de administración de tu router o ejecuta un diagnóstico desde la app de Helium. Luego, introduce esa dirección IP en un navegador para ingresar a la Consola Local.

* Si ya registraste una cuenta en el panel de SenseCAP M1 y añadiste tu hotspot, puedes ver la dirección IP desde el panel:
  * Haz clic en "**Wi-Fi IP Address**" o "**LAN IP Address**" para ir a la página de la Consola Local Turbo Sync.
  * Si estás conectado vía Wi-Fi, verás la dirección IP del hotspot por Wi-Fi.
  * Si estás conectado por cable Ethernet o red local, verás la dirección IP LAN del hotspot.

![Datos de acceso - método 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi-name-ts-1.png)


**3\. Usa el ID de CPU del hotspot y la contraseña predeterminada (Número de serie, S/N) para iniciar sesión**

![Datos de acceso - método 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/login-1.png)

![Datos de acceso - método 5](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-2-1.png)

**4\. Cambiar la contraseña predeterminada**

![Local Console Change Password](https://www.sensecapmx.com/wp-content/uploads/2022/07/change-password-1.png)

Después del primer inicio de sesión, haz clic en el botón "**Change Password**" para modificar la contraseña predeterminada. La nueva contraseña debe tener entre 8 y 32 caracteres e incluir al menos dos combinaciones de números, letras y símbolos. La contraseña será cifrada y solo se almacenará localmente en tu SenseCAP M1.

Por seguridad, **no existe la función de “Olvidé mi contraseña”**, así que asegúrate de recordarla. Si la pierdes, será necesario reescribir la tarjeta microSD para restablecerla.

Para usuarios de CLI: cada vez que cambies la contraseña, el token del dispositivo de la Consola Local se actualizará automáticamente. Recarga la página para ver el nuevo token. **No compartas tu token con nadie.**

**5\. Obtener la clave de enlace (bind-key) y añadir tu hotspot al panel SenseCAP**

![Local Console Bind Key](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-3-2.png)

Desde la página de la Consola Local, obtén el **ID de CPU del dispositivo**, la **MAC ETH del dispositivo** y la **clave de enlace (bind key)**.

* * *

**Información importante**

**Nota**: Turbo Sync puede provocar escrituras frecuentes en la tarjeta microSD. Solo se recomienda usar esta función cuando sea estrictamente necesario.

Si la altura de bloque sincronizada de tu dispositivo está cerca del blockchain (menos de 200 bloques), **no necesitas usar Turbo Sync** y no se podrá ejecutar.

![Turbo Sync](https://www.sensecapmx.com/wp-content/uploads/2022/07/TS-console.png)

El proceso de Turbo Sync puede tardar dependiendo de la velocidad de red. Mantén una buena conexión a Internet y ten paciencia.

**IMPORTANTE**: No apagues el dispositivo durante Turbo Sync. Si lo haces, el ledger podría corromperse, y el dispositivo reiniciará desde el último snapshot bendecido. En ese caso, tendrás que repetir el proceso.

* * *

**Reiniciar**
==========

**Note**: Necesitas iniciar sesión en la Consola Local.

Haz clic en el botón naranja "**Reboot**" para comenzar el reinicio.

* Cuando veas `[reboot] request sent` + `[reboot going]`, el proceso ha comenzado.

* Al aparecer `"----log stream disconnected from the host----"` y luego `"----log stream connected to the host----"`, el reinicio se ha completado.

![Reboot SenseCAP Hotspot](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4-2.png)

**Nota**: La base de datos del blockchain de Helium puede dañarse por errores en la microSD. Reiniciar desde la Consola Local puede resolver estos errores.

**IMPORTANTE**: No reinicies el hotspot con frecuencia. Solo hazlo si es necesario.

Si la altura de bloque se queda atascada en -1 o 1, realiza un **reset de bloques**.

* * *

**Apagar**
=============

La función de apagado es recomendable **antes de desconectar el dispositivo físicamente**, para evitar daños por apagado repentino.

**Cómo usar la función de apagado**

Haz clic en "**Shutdown**" y acepta el aviso.

* El apagado tomará unos minutos.
* Sabrás que terminó cuando el LED azul y las luces del puerto Ethernet estén apagadas.

![SenseCAP Shutdown Feature](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-5-2.png)

**ATENCIÓN**: Asegúrate de estar físicamente cerca del dispositivo para volver a enchufarlo si deseas encenderlo nuevamente.

* * *

**Restablecer bloques (Reset Block)**
===============

**Nota**: Necesitas iniciar sesión en la Consola Local.

Haz clic en el botón rojo "**Reset Blocks**" para iniciar el proceso.

![Reset Blocks SenseCAP](https://www.sensecapmx.com/wp-content/uploads/2022/07/reset-blocks.png)

**Nota**: SenseCAP M1 empezará a cargar el snapshot bendecido más reciente. Es normal ver el estado "**Unknown**" en el panel temporalmente.

Si necesitas ejecutar Turbo Sync, espera al menos 30 minutos para que el snapshot más reciente se cargue completamente.