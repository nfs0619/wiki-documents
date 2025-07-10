---
description: SenseCAP M4 Quick Start
title: Inicio Rápido al SenseCAP M4
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Flux_Gateway/SenseCAP_M4_Square/SenseCAP_M4_Quick_Start
last_update:
  date: 06/23/2025
  author: Guillermo
---

**Inicio Rápido de SenseCAP M4 Square**
=======================================

**SenseCAP M4 Square** ofrece la forma más sencilla de desplegar la red computacional de nueva generación (FluxNode).  
Sin comandos de Linux, sin necesidad de configurar entornos, y solo **4 pasos** para completar el despliegue.

**Requisitos Previos**

* Velocidad de carga de red suficiente para desplegar un nodo **CUMULUS FluxNode (mínimo 25 Mbps de subida)**
* Un nodo CUMULUS Flux ya creado

Lo que necesitas
================

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start.png)

Staking para Nodo Flux CUMULUS
==============================

Este tutorial toma Binance como ejemplo.

Paso 1: Ve al exchange y compra Flux
------------------------------------

1. Descarga la [App de Binance](https://www.binance.com/zh-CN/download) y registra una cuenta.

2. Flux no se puede comprar directamente con moneda fiduciaria. Primero compra USDT y luego conviértelo a Flux.

3. En la página de Trading, selecciona "Spot" y en el mercado elige **FLUX/USDT**.

4. Ingresa la cantidad de USDT y asegúrate de que el equivalente en Flux sea **mayor a 1000**.

5. Haz clic en el botón **Comprar**, ahora ya tienes Flux con éxito.

![](https://www.sensecapmx.com/wp-content/uploads/2023/01/Pasted-into-Stake-Flux-CUMULUS-Node.jpg)

Paso 2: Descarga la App Zelcore y registra tu cuenta
-----------------------------------------------------

1. Descarga la [App Zelcore](https://zelcore.io/) e inicia sesión con tu cuenta de Zelcore.

2. En la página de "Portfolio", haz clic en el botón **Add Assets** para agregar el activo **FLUX BSC** (portafolio de pagos).

![](https://www.sensecapmx.com/wp-content/uploads/2023/01/Pasted-into-Stake-Flux-CUMULUS-Node-1.png)

Paso 3: Retira Flux de Binance a tu billetera Zelcore
------------------------------------------------------

1. Abre la app de Binance y ve a la página de **Billetera**.

2. Busca Flux, haz clic en **Retirar** y selecciona **Enviar vía red cripto**.

![](https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_342796_dUNV1mJGFQqnbdUX_1672995944?w=1200&h=1200)

3. Ingresa la información del retiro y envía:

* **Dirección**: Abre la app Zelcore, copia la dirección de recepción de **FLUX BSC** y pégala en Binance.

![](https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_846590_gzvPZu5rXihuT8F5_1672996316?w=1280&h=1268.796498905908)

* **Red**: Selecciona **BSC Smart Chain (BEP20)** 

* **Cantidad**: 1000+ Flux  

* **Desde**: Billetera Spot & Fondos  

![](https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_462161_Dwa_CwJs_TZZu9PS_1672996442?w=1200&h=1200)

4. Revisa la información del retiro y envíala a tu billetera Zelcore.

Paso 4: Crea un nuevo nodo Flux Cumulus
---------------------------------------

1. Abre la App Zelcore y verifica que hayas recibido tu activo **FLUX BSC** (portafolio de Pagos).

2. Ve a la pestaña "Apps" y abre **Fusion** para intercambiar **FLUX BSC** por **Flux** (portafolio de Pagos).

*   **Vender Activo**: Selecciona FLUX BSC  
*   **Comprar Activo**: Selecciona FLUX  

**Nota**: Asegúrate de tener suficiente BNB para cubrir la tarifa de intercambio.

![](https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_153450_KYFKcuB_o6xATDxg_1672996615?w=1200&h=1200)

3. Envía el Flux desde el portafolio de Pagos a otro portafolio, como el portafolio de **Minería (Flux asset)**.

4. ¡Ahora puedes desplegar tu nuevo nodo **Flux Cumulus** en el **SenseCAP M4 Square**!

![](https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_337290_CDU9M2a95R8QqPsg_1672997135?w=1280&h=1277.1806167400882)

Desplegar FluxNode en SenseCAP M4 Square
========================================

**Paso 1: Conectar alimentación y red**
---------------------------------------

1. Conecta el adaptador de corriente de 12V/2A incluido al conector **DC-IN**.

2. Conecta el cable de red al puerto **Ethernet2**.

3. El dispositivo se configurará automáticamente. Una luz **naranja fija en L3** indica que la configuración y conexión a Internet fueron exitosas.

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-1.png)

**Paso 2: Instalar la App SenseCAP Hotspot y la App Zelcore**
--------------------------------------------------------------

1. La App SenseCAP Hotspot está diseñada para configurar y gestionar dispositivos. Escanea el siguiente código QR para instalarla:

2. Regístrate con tu correo electrónico o inicia sesión directamente.

[![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-2.png)](https://app.sensecapmx.com/)

3. La App Zelcore es desarrollada por Flux para gestionar, comerciar y ser dueño de tus activos digitales y FluxNodes. Instálala aquí:

[![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-3.png)](https://zelcore.io/)

**Paso 3: Configurar SenseCAP M4**
----------------------------------

1. Presiona el pin en la esquina inferior izquierda del dispositivo, levanta la tapa y retírala.

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-4.png)

2. Presiona el botón **B1** durante 5 segundos hasta que el indicador **L2** parpadee en azul para activar el modo de configuración Bluetooth.

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-5.png)

3. Selecciona **Flux** y haz clic en **Setup** en la app SenseCAP Hotspot:

* Escanea el dispositivo vía Bluetooth  
* Selecciona el dispositivo y haz clic en **Connect**  

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start.jpg)

4. Cuando la app se conecte con éxito al dispositivo, haz clic en **Install** para instalar la dApp de Flux.

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-7.png)

**Paso 4: Desplegar el nodo Flux**
----------------------------------

1. Una vez instalada la dApp de Flux, haz clic en **Open** y comienza a desplegar el nodo **CUMULUS FluxNode**.

> **Nota**: Asegúrate de comprar **1000 Flux como colateral** y transferirlos a tu billetera Flux en Zelcore para la configuración del nodo CUMULUS.

**Guías útiles**:

*   [Guía de configuración de FluxNode (Medium)](https://medium.com/@mmalik4/flux-light-node-setup-as-easy-as-it-gets-833f17c73dbb)
    
*   [Guía en video (Zelcore & depósito de Flux desde 8:07 a 12:30)](https://www.youtube.com/watch?v=RT1uaSrurv4)
    

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-8.png)

2. Ingresa la siguiente información desde la app Zelcore:

> **Identity Key**: Apps > FluxNodes > tu nodo > Edit > copiar *Identity Key*  
> **Collateral TX ID**: Apps > FluxNodes > tu nodo > Edit > copiar *Collateral TX ID*  
> **Output Index**: Apps > FluxNodes > tu nodo > Edit > copiar *Output Index*  
> **Zel ID**: Apps > Zel ID > Código QR > copiar  
> **Dirección de Kadena**: Solo se usa en NIMBUS y STRATUS para recompensas KDA adicionales.  
> Si estás desplegando CUMULUS no necesitas ingresarla.  
> Portfolio > Mostrar saldos en cero > Kadena > Detalles > Recibir > Código QR

3. Haz clic en **Start Deploy**, el SenseCAP M4 desplegará automáticamente tu FluxNode. El tiempo de despliegue depende de la red del dispositivo, asegúrate de tener buena conexión. Puedes cerrar la app o seguir monitoreando el progreso.

**Nota: Asegúrate de que tu dispositivo tenga IP pública y velocidades mínimas de descarga y subida de **25 Mb/s**, de lo contrario fallará el benchmark.**

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-13.png)

4. Una vez que comience la sincronización de la cadena Flux, ve a la app Zelcore y **agrega la IP pública y nombre** a tu FluxNode. Luego haz clic en **Start**.

Si tu nodo Flux está funcionando correctamente y pasa el benchmark, tardará 1 bloque en cambiar su estado a **Started** y de 1 a 10 bloques (2 a 20 minutos) para cambiar a **Confirmed**. Revisa en FluxOS actualizando la página principal. El estado se mostrará como "Confirmed".

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-14.png)

**Funciones Avanzadas**
=======================

Configuración de UPnP
---------------------

UPnP significa "Universal Plug and Play", lo que permite que los dispositivos en tu red soliciten que el router abra puertos para el tráfico entrante. UPnP puede ser una solución más fácil si tu router lo soporta y sigue correctamente los estándares de UPnP.

Si deseas desplegar múltiples dispositivos SenseCAP M4 Square en una sola dirección IP externa, asegúrate de que **el router al que está conectado el dispositivo soporte UPnP y que esté activado**.

**Nota**: Una única IP externa **admite como máximo el despliegue de 8 nodos Flux**.

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-16.png)

*   1. Un SenseCAP M4 Square ha desplegado un nodo Flux
*   2. Conecta el M4 vía Bluetooth con la app SenseCAP Hotspot
*   3. Haz clic en el ícono de configuración y en "UPnP Setting"  
*   4. Habilita UPnP y elige un puerto no utilizado  
*   5. Haz clic en "Confirm" y envía la configuración  
*   6. Ahora UPnP está habilitado y su estado es **ENABLE** 
    
![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-1.jpg)

Configuración de Fractus
-------------------------

El nodo Fractus nació para aumentar el almacenamiento de la red Flux. Un nodo Fractus es un nodo del nivel Cumulus que proporciona al menos 10 TB de almacenamiento. Los nodos Fractus obtienen un 15% adicional de Flux sobre la recompensa nativa por bloque.

**Requisitos mínimos para ejecutar nodos Fractus**:

* 1000 Flux como colateral  
* 2 núcleos de CPU  
* 4 hilos de CPU  
* 240 eventos de CPU por segundo  
* 9250 GB de almacenamiento en una sola partición (se permite RAID)  
* Velocidad de escritura en disco de 80 MB/s  
* 100 Mb/s de descarga y subida  

![](https://wdcdn.qpic.cn/MTMxMDI3MDEwODc4Njk2MTk_47467_AZXsjpYcOQweNFnJ_1675844077?w=1200&h=654)

*   1. Un SenseCAP M4 Square ya tiene desplegado un nodo Flux  
*   2. Conecta un disco de 10 TB al puerto USB 3.1 del M4  
*   3. Conecta el M4 vía Bluetooth con la app SenseCAP Hotspot  
*   4. Haz clic en el ícono de configuración y en "Fractus Setting"  
*   5. Activa Fractus y haz clic en "Confirm" para enviar la configuración  
*   6. Ahora Fractus está activo y su estado es **True**

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/稿定设计导出-20230220-153442.jpg)

Agregar al Panel de Control
---------------------------

Para obtener más información sobre tu SenseCAP M4 Square, agrégalo al panel de control de SenseCAP.

* **Agregar directamente**: En la página de FluxNode, haz clic en el ícono "+" e ingresa un nombre personalizado y el número de serie (etiqueta del dispositivo).

* **Agregar vía Bluetooth**: Si tu M4 ya tiene un nodo Flux desplegado, conéctalo mediante Bluetooth con la app SenseCAP Hotspot y agrégalo desde allí.

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-15.png)

Restaurar Bloques
-----------------

Conecta el M4 a la app SenseCAP Hotspot vía Bluetooth. Luego abre la app Flux y haz clic en el botón **Restore Block**.  
El M4 restaurará automáticamente los bloques, sin pasos adicionales.  
El tiempo de restauración depende de la red del dispositivo; asegúrate de tener buena conexión.

Eliminar
--------

**¡Operar con precaución!**  
Eliminará el nodo **CUMULUS FluxNode** desplegado en el SenseCAP M4.  
Conéctalo vía Bluetooth con la app SenseCAP Hotspot y, dentro de la app Flux, haz clic en el botón **Delete** para eliminar el nodo.

Reinstalar (Redeploy)
---------------------

**¡Operar con precaución!**  
Esta función elimina automáticamente el nodo desplegado antes de reinstalarlo. Conecta el M4 vía Bluetooth con la app SenseCAP Hotspot, abre la app Flux, haz clic en **Redeploy** e ingresa la nueva información del nodo para desplegarlo de nuevo.

**Lista de Aplicaciones Descentralizadas Soportadas**
=====================================================

* Nodo Flux Cumulus  

* Flux Cumulus Fractus *(próximamente)*  

**Configuración de Red para Nodo Flux Cumulus**
===============================================

Para asegurar el funcionamiento adecuado de tu nodo Flux, asegúrate de configurar correctamente tu red. A continuación se detallan los requisitos para una red de nodo único y de múltiples nodos.

**Requisitos**

* Una dirección IP externa (máximo 8 nodos Flux por IP). Si tienes más de 8 dispositivos, necesitarás más direcciones IP.

* Red cableada estable, con al menos **25 Mbps de ancho de banda**

* El router debe soportar **UPnP** y funciones de reenvío de puertos (port forwarding) para redirigir los puertos al dispositivo.

**Configuración de Nodo Único**

[Consulta la documentación oficial de Flux](https://support.runonflux.io/support/solutions/articles/151000021293-flux-node-network-setup)

**Configuración de Múltiples Nodos**

El SenseCAP M4 Square no es compatible con múltiples nodos Flux
