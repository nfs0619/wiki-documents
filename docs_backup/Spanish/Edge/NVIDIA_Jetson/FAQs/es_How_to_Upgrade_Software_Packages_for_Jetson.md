---
description: This is a FAQ about Using OTA or incremental updates may lead to system instability and security risks, so it is recommended to perform full ROM updates to maintain system security and stability, avoiding partial updates.
title: Upgrade Software Packages for Jetson
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/upgrade_software_packages_for_jetson
last_update:
  date: 2/11/2025
  author: Youjiang
---

#### ¿Cómo puedo actualizar los paquetes de software si me dijeron que no puedo ejecutar apt upgrade? ¿Habrá riesgos de seguridad si no actualizo el software?  

**R:** Primero, es importante entender que las **actualizaciones OTA (Over the Air)/incrementales/parciales** pueden dañar su sistema operativo, ya que permiten actualizar solo un subconjunto de paquetes. Este enfoque puede generar incompatibilidades de dependencias, inestabilidad en el sistema y omisión de parches de seguridad, lo que aumenta el riesgo de fallos o vulnerabilidades en el software. Además, la gestión de actualizaciones parciales suele requerir intervención manual, lo que puede llevar a errores.  

Por el contrario, las **actualizaciones completas del sistema (Full ROM/full updates)** garantizan que todos los paquetes y dependencias se actualicen juntos, manteniendo la compatibilidad y estabilidad del sistema. Al aplicar parches de seguridad y correcciones de errores en todo el sistema, las actualizaciones completas ayudan a mantener la seguridad y coherencia, reduciendo la posibilidad de conflictos. Aunque las actualizaciones completas pueden tardar más, generalmente se consideran más seguras y confiables a largo plazo.  

Para nuestros dispositivos Jetson, lanzamos versiones de JetPack después de que NVIDIA publique las suyas (lo mismo aplica para versiones de controladores y la creación de su propio JetPack), lo que garantiza un sistema más estable y seguro en comparación con la actualización mediante apt.  

Si le preocupa el software desactualizado y desea actualizar paquetes específicos, aquí tiene algunas opciones:  

1. Si está seguro de que su paquete de software no depende de paquetes del sistema, ejecute `"sudo apt-get install <Su_Paquete>"` para actualizarlo.  
2. Para la mayoría del software de código abierto, descargue el archivo fuente y compílelo usted mismo.  
3. Espere al lanzamiento de una nueva versión de JetPack.


## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


