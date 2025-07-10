---
description: SenseCAP M1 Local Console
title: Consola Local del SenseCAP M1
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/SenseCAP_M1_Local_Console
last_update:
  date: 06/23/2025
  author: Guillermo
---

**Descripción General**
=======================

**Última actualización de funciones (14 de enero de 2022):**  
Para mejorar el nivel de seguridad de la Consola Local de SenseCAP, se ha agregado una contraseña adicional para iniciar sesión, además del CPUID. La contraseña predeterminada es el número de serie del hotspot. **Se recomienda encarecidamente cambiar esta contraseña después del primer inicio de sesión.**

**Nota**: Tu computadora y tu Hotspot deben estar conectados a la **misma red/router** para usar la Consola Local. Si tu Hotspot está en una ubicación remota, actualmente **NO podrás** ejecutar ninguna de las funciones de la Consola Local.

![Consola Local](https://www.sensecapmx.com/wp-content/uploads/2022/07/local-console.png)

**Inicio de Sesión**
====================

**1. Obtén el CPU ID y el N° de Serie de tu Hotspot**

* Si **no tienes cuenta en el panel de SenseCAP M1** o no has agregado tu Hotspot, busca la etiqueta del dispositivo y obtén el **S/N** y **CPU ID**.

![Detalles de inicio de sesión](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-16.png)

* Si **ya tienes cuenta en el panel de SenseCAP M1** y has agregado el Hotspot, puedes copiar el CPU ID y el S/N desde el panel.

![Detalles desde el panel](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-1-1.png)

**2. Obtén la dirección IP de tu Hotspot**

* Si no tienes cuenta en el panel, encuentra la dirección IP desde tu router o ejecuta el diagnóstico en la app de Helium.
* Si ya tienes cuenta, puedes encontrar la IP desde el panel:
    * Haz clic en "**Wi-Fi IP Address**" o "**LAN IP Address**" según la conexión.
    * Si estás por Wi-Fi, verás la IP correspondiente.
    * Si estás por cable Ethernet, verás la IP LAN.

![Dirección IP](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi-name-ts-1.png)

**3. Usa el CPU ID y la contraseña predeterminada (S/N) para iniciar sesión**

![Inicio de sesión](https://www.sensecapmx.com/wp-content/uploads/2022/07/login-1.png)

![Pantalla de acceso](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-2-1.png)

**4. Cambia la contraseña predeterminada**

![Cambio de contraseña](https://www.sensecapmx.com/wp-content/uploads/2022/07/change-password-1.png)

Después del primer inicio de sesión, haz clic en "**Change Password**" para modificar tu contraseña.  
Debe tener de 8 a 32 caracteres, con al menos dos combinaciones de **números, letras y símbolos**.

**Importante**: No hay función para “olvidé mi contraseña”, así que asegúrate de recordarla. Si la pierdes, tendrás que **volver a flashear la tarjeta microSD** para restaurar la contraseña por defecto. Para usuarios CLI: cada vez que cambies la contraseña, el **token del dispositivo** se actualizará. Refresca la página de la consola local y verás el nuevo token.

**5. Obtén la bind-key y agrega tu Hotspot al panel de SenseCAP**

![Bind Key](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-3-2.png)

Obtén el CPU ID del dispositivo, la MAC ETH y la **bind key** desde esta sección en la Consola Local.

* * *

**Información Importante**

**Nota**: Turbo Sync puede provocar escrituras y borrados frecuentes en la tarjeta microSD. Úsalo **solo si es estrictamente necesario**. Si tu altura de bloque está **a menos de 200 bloques** de la cadena, **Turbo Sync no es necesario** y no podrás ejecutarlo.

![Turbo Sync](https://www.sensecapmx.com/wp-content/uploads/2022/07/TS-console.png)

Turbo Sync puede tardar un tiempo dependiendo de tu conexión. Mantén una buena conexión y **no apagues el equipo durante el proceso**, de lo contrario el ledger se corromperá y tendrás que repetirlo.

* * *

**Reiniciar**
=============

Necesitas haber iniciado sesión en la Consola Local.

Haz clic en el botón naranja "**Reboot**" para reiniciar.

* Cuando veas `[reboot] request sent + [reboot going]`, el proceso ha iniciado.

* Cuando veas `"----log stream disconnected from the host----"` y luego `"----log stream connected to the host----"`, el proceso ha terminado.

![Reinicio](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4-2.png)

**Importante**: No reinicies el Hotspot con frecuencia. Hazlo solo cuando sea necesario (por ejemplo, si el bloque está estancado en -1 o 1).

* * *

**Apagar**
==========

Es recomendable apagar el dispositivo antes de desconectarlo de la corriente para evitar daños.

**Cómo apagar:**

* Haz clic en "**Shutdown**" y acepta el mensaje.
* Espera unos minutos.
* Verás que el LED azul y los LEDs del puerto Ethernet están apagados.

![SenseCAP Shutdown Feature](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-5-2.png)

**Atención**: Solo podrás encenderlo de nuevo conectando manualmente el adaptador.

* * *

**Resetear Bloques**
====================

Necesitas iniciar sesión en la Consola Local.

Haz clic en el botón rojo "**Reset Blocks**".

![Reset Blocks](https://www.sensecapmx.com/wp-content/uploads/2022/07/reset-blocks.png)

**Nota**: El dispositivo comenzará a cargar el **último snapshot bendecido**.  
Durante este proceso, el estado de sincronización puede mostrar "Unknown" temporalmente.

Si necesitas ejecutar Turbo Sync, espera unos 30 minutos a que cargue el snapshot.