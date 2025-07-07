---
description: Jetson-FAQ
title: FAQs para usar la Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Jetson_FAQ
last_update:
  date: 7/5/2023
  author: Seraphina
---


Este documento contiene todas las preguntas frecuentes relacionadas con los productos de la serie Jetson. Esto será muy útil si tienes algún problema al utilizar la Jetson.

#### P1: Solución de problemas de instalación

Para más detalles, haz click [aquí](/Troubleshooting_Installation)

#### P2: El espacio restante en el eMMC en la reComputer recibida es solo de aproximadamente 2 GB, ¿cómo resolver el problema de espacio insuficiente?

Para más detalles, haz click [aquí](/solution_of_insufficient_space)

#### P3: ¿Cómo resolver el problema de compatibilidad entre reComputer y la cámara VEYE?

Para más detalles, haz click [aquí](/es/Solution_for_the_Compatibility_Issue_between_reComputer_and_VEYE_Camera)

#### P4: ¿Cómo resolver el problema de compatibilidad entre la cámara IMX477 y la Carrier Board A603?

Para más detalles, haz click [aquí](/es/Use_IMX477_Camera_with_A603_Jetson_Carrier_Board)

#### P5: ¿Cómo obtener el registro del sistema de la reComputer J30/J40?

Para más detalles, haz click [aquí](/es/get_the_system_log_of_recomputer_j30_and_j40)

#### P6: Problema de tiempo de espera durante el flasheo de Jetpack

Para más detalles, haz click [aquí](/es/usb_timeout_during_flash)

#### P7: No puedo usar el puerto USB-A, el puerto Ethernet o no hay salida HDMI después de flashear el dispositivo  

**R:** Por favor, verifique la integridad del archivo (por ejemplo, proporcionamos las sumas de verificación SHA256). Para algunas placas portadoras (especialmente la serie A60X), asegúrese de que el parche del controlador se haya copiado/aplicado correctamente en el directorio **Linux_for_Tegra**. Hay archivos que requieren permisos de **sudo**, y cuando copie directorios, asegúrese de incluir el parámetro **-r** en su comando.  

#### P8: Mi sistema se bloqueó/no puede arrancar/pantalla negra/perdí los controladores de periféricos después de ejecutar los comandos "sudo apt-get update && sudo apt-get upgrade"  

**R:** Estos problemas pueden resumirse como **"¿Por qué no puedo actualizar el sistema con apt upgrade en placas portadoras personalizadas?"** La respuesta corta es: **No** ejecute el comando apt upgrade en placas portadoras **personalizadas o de terceros**. Además, evite ejecutar scripts que incluyan comandos apt upgrade o usar herramientas de actualización gráfica en Ubuntu. Los paquetes Debian del servidor no tienen en cuenta el diseño específico de nuestras placas personalizadas, y forzar la actualización puede causar incompatibilidades que pueden inutilizar su dispositivo. Este proceso solo es compatible con el kit de desarrollo oficial. Para solucionar estos problemas, siga nuestra guía para volver a flashear JetPack.  

#### P9: ¿Cómo puedo actualizar los paquetes de software si me dijeron que no puedo ejecutar apt upgrade? ¿Habrá riesgos de seguridad si no actualizo el software?  

Para más detalles, haga clic [aquí](/es/upgrade_software_packages_for_jetson).

## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
