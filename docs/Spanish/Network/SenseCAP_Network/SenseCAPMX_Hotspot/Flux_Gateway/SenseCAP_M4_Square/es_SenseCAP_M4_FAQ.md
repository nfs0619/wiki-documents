---
description: SenseCAP M4 FAQ
title: Preguntas y Respuestas SenseCAP M4
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Flux_Gateway/SenseCAP_M4_Square/SenseCAP_M4_FAQ
last_update:
  date: 06/23/2025
  author: Guillermo
---

FAQ
===

### **¿Cuál es el tiempo promedio de sincronización de la cadena Flux para el nodo?**

Descarga y carga un archivo de instantánea de 20 GB, y sincroniza la cadena durante aproximadamente una hora para alcanzar el último bloque. El tiempo correcto de sincronización depende de la red del dispositivo, asegúrate de que tenga una buena conexión.

### **¿SenseCAP M4 Square es compatible con NIMBUS y STRATUS?**

**No**, SenseCAP M4 Square solo es compatible con CUMULUS. Si necesitas NIMBUS, por favor haz clic [aquí](https://www.seeedstudio.com/flux?utm_source=discord&utm_campaign=sensecapm4)

### **¿Cómo verificar si mi puerto está abierto?**

SenseCAP M4 Square abre todos los puertos requeridos por Flux. La aplicación SenseCAP Hotspot proporciona detección UPnP. Si el estado de UPnP está en ON, los puertos están abiertos. Si el estado está en OFF, por favor revisa la configuración UPnP de tu router. Para más detalles, visita [Configuración de Red del Nodo Flux](https://support.runonflux.io/support/solutions/articles/151000021293-flux-node-network-setup)

### **¿El M4 necesita IP estática y es posible ejecutar varios SenseCAP M4 Square con la misma IP externa?**

Se requiere una IP externa.

Puedes ejecutar hasta un máximo de 8 dispositivos por IP, y asegúrate de que tu router sea compatible con UPnP o reenvío de puertos.

### **¿Cómo probar el ancho de banda de red para cumplir con los requisitos?**

https://www.speedtest.net

### **¿Cuál es la diferencia entre Flux y los tokens Flux?**

Los tokens Flux son Flux. Los tokens Flux son Activos Paralelos que se pagan en diferentes cadenas de bloques, como ETH Flux, BSC Flux, etc. Se pueden reclamar en la aplicación Fusion dentro de Zelcore. Selecciona "Parallel Mining Claim" desde los tres puntos en la parte superior derecha. Solo verás un monto reclamable si la cantidad de tus tokens Flux supera las tarifas requeridas para reclamar.

### **Si soy un usuario profesional, ¿puedo borrar el sistema original e instalar otro?**

Esta no es una operación recomendada. Sin embargo, es un dispositivo basado en x86 y puedes reinstalar cualquier sistema que desees, pero antes asegúrate de saber lo que estás haciendo.

Ten en cuenta que si borras el sistema estándar, perderás la garantía y será difícil volver al sistema original.

### **¿Debo elegir el enchufe de alimentación por mi cuenta?**

M4 Square incluye un adaptador de corriente de entrada amplia y viene con enchufes US/AU/UK/EU.

### **¿Necesita una antena externa?**

La antena Wi-Fi está dentro del dispositivo. El SenseCAP M4 Square-Fluxnode no requiere una antena externa.

### **¿Necesito hacer staking de los 1000 Flux?**

**Sí**, los 1000 Flux no están incluidos en el hardware, por lo que necesitas hacer staking por tu cuenta.

### **¿Puedo convertir mi M1 en un FluxNode, y usar una Raspberry Pi de 8GB como FluxNode?**

Actualmente, la Raspberry Pi de 8 GB es compatible con Flux, pero requiere un SSD externo y no se puede garantizar la estabilidad, lo que podría afectar el funcionamiento estable del equipo.
