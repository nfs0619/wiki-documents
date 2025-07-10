---
description: SenseCAP M4 FAQ
title: Preguntas Frecuentes SenseCAP M4
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_FAQ
last_update:
  date: 06/24/2025
  author: Guillermo
---

FAQ
===

### **¿Cuál es el tiempo promedio de sincronización completa de la cadena para el nodo?**

Descarga y carga un archivo snapshot de 20GB, y sincroniza la cadena durante aproximadamente una hora para ponerse al día con el último bloque. El tiempo correcto de sincronización depende de la red del dispositivo, asegúrate de que el dispositivo tenga una buena conexión.

### **¿SenseCAP M4 Square soporta NIMBUS y STRATUS?**

**No**, SenseCAP M4 Square solo soporta CUMULUS. Si necesitas NIMBUS, por favor haz clic [aquí](https://www.seeedstudio.com/flux?utm_source=discord&utm_campaign=sensecapm4)

### **¿Cómo verificar si mi puerto está abierto?**

SenseCAP M4 Square abre todos los puertos requeridos por Flux. La app SenseCAP Hotspot proporciona detección UPNP. Si el estado UPNP está ON, los puertos están abiertos. Si el estado está OFF, revisa la configuración UPNP de tu router. Para más detalles, visita [Configuración de Red de Nodo Flux](https://support.runonflux.io/support/solutions/articles/151000021293-flux-node-network-setup)

### **¿M4 necesita IP estática y es posible correr múltiples SenseCAP M4 Squares con la misma IP externa?**

Se requiere una IP externa.

Máximo 8 dispositivos por IP, y asegúrate que tu router soporte UPnP o redirección de puertos.

### **¿Cómo probar el ancho de banda de la red para cumplir con el requerimiento?**

https://www.speedtest.net

### **¿Cuál es la diferencia entre flux y los tokens flux?**

Los tokens Flux son Flux. Los tokens Flux son activos paralelos que se pagan en diferentes blockchains, como ETH Flux, BSC Flux, etc. Se pueden reclamar en la app Fusion dentro de Zelcore. Selecciona "Parallel Mining Claim" en los tres puntos arriba a la derecha. Solo verás un monto reclamable si tu cantidad de tokens Flux es mayor a las tarifas necesarias para reclamar.

### **Si soy un usuario profesional, ¿puedo borrar el sistema original e instalar otro?**

No es una operación recomendada. Sin embargo, es un dispositivo basado en x86 y puedes reinstalar cualquier sistema que desees. Antes, asegúrate de saber lo que haces.

Pero ten en cuenta que si borras el sistema estándar, perderás la garantía y será difícil revertir al sistema original.

### **¿Necesito elegir el tipo de enchufe de alimentación?**

M4 Square incluye un adaptador de corriente de entrada amplia y tiene enchufes US/AU/UK/EU.

### **¿Necesito una antena externa?**

La antena WiFi está dentro del dispositivo. SenseCAP M4 Square-Fluxnode no requiere antena externa.

### **¿Necesito hacer staking de los 1000 Flux?**

**Sí**, los 1000 Flux no están incluidos en el hardware, por lo que necesitas hacer staking tú mismo.

### **¿Puede mi M1 convertirse en FluxNode y convertir un Pi de 8GB en un FluxNode?**

Actualmente, Raspi 8GB es soportado por Flux, pero requiere un SSD externo y no se garantiza la estabilidad, lo que puede afectar el funcionamiento estable del equipo.
