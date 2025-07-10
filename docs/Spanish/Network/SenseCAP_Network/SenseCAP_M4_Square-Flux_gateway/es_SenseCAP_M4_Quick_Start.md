---
description: SenseCAP M4 Quick Start
title: Inicio Rápido al SenseCAP M4
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_Quick_Start
last_update:
  date: 06/24/2025
  author: Guillermo
---

**Inicio Rápido SenseCAP M4 Square**
====================================

**SenseCAP M4 Square** proporciona la forma más fácil de desplegar la próxima generación de redes computacionales (FluxNode). Sin comandos Linux, sin necesidad de configurar un entorno, y solo 4 pasos para completar el despliegue.

**Requisitos previos**

*   Velocidad de subida de red suficiente para desplegar un CUMULUS FluxNode **(mínimo 25 Mbps de subida)**

*   Un nuevo nodo CUMULUS FluxNode creado

lo que necesitas
================

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start.png)

Stake Flux Nodo CUMULUS
=======================

El tutorial usa Binance como ejemplo

Paso 1: Ir al exchange para comprar Flux
----------------------------------------

1. Descarga la [App Binance](https://www.binance.com/zh-CN/download) y registra una cuenta

2. Flux no puede comprarse con moneda fiat. Primero compra USDT, luego convierte USDT a Flux

4. En la página de Trade, selecciona spot y en Market selecciona FLUX/USDT

5. Ingresa la cantidad de USDT y asegúrate que el Flux convertido sea mayor a 1000

6. Haz clic en el botón Comprar, ahora has comprado Flux exitosamente

![](https://www.sensecapmx.com/wp-content/uploads/2023/01/Pasted-into-Stake-Flux-CUMULUS-Node.jpg)

Paso 2: Descargar la app Zelcore y registrar tu cuenta
------------------------------------------------------

1. Descarga [Zelcore App](https://zelcore.io/) e ingresa a tu cuenta Zelcore

2. En la página Portfolio, haz clic en el botón Add Assets para agregar el activo FLUX BSC (cartera de pagos)

![](https://www.sensecapmx.com/wp-content/uploads/2023/01/Pasted-into-Stake-Flux-CUMULUS-Node-1.png)

Paso 3: Retirar Flux de Binance a la Wallet Zelcore
---------------------------------------------------

1. Abre la app Binance y visita la página Wallet

2. Ve a Flux, haz clic en Withdraw y selecciona Send via Crypto Network

![](https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_342796_dUNV1mJGFQqnbdUX_1672995944?w=1200&h=1200)

3. Ingresa la información de retiro y envía

*   Dirección: Abre Zelcore App, copia la dirección de recepción FLUX BSC y pégala en Binance

![](https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_846590_gzvPZu5rXihuT8F5_1672996316?w=1280&h=1268.796498905908)

*   Red: Selecciona Binance Smart Chain (BEP20)

*   Cantidad: 1000+ Flux

*   Enviar desde: Spot & Funding Wallet

![](https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_462161_Dwa_CwJs_TZZu9PS_1672996442?w=1200&h=1200)

4. Verifica la información de retiro y envía a Zelcore

Paso 4: Crear un nuevo Nodo Flux Cumulus
----------------------------------------

1. Abre Zelcore App y verifica que tu Flux haya llegado a tu activo FLUX BSC (cartera de pagos)

2. Ve a la página Apps y abre Fusion para intercambiar FLUX BSC a Flux (cartera de pagos)

*   Vender activo: Selecciona FLUX BSC

*   Comprar activo: Selecciona FLUX

Nota: Asegúrate de tener suficiente BNB para pagar la comisión del intercambio

![](https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_153450_KYFKcuB_o6xATDxg_1672996615?w=1200&h=1200)

3. Envía el Flux desde la cartera de pagos a otra cartera, como la cartera Mining Flux

4. ¡Ahora puedes desplegar el nuevo nodo Flux Cumulus en SenseCAP M4 Square!

![](https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_337290_CDU9M2a95R8QqPsg_1672997135?w=1280&h=1277.1806167400882)

Desplegar FluxNode en SenseCAP M4 Square
========================================

**Paso 1: Encender y conectar a internet**
------------------------------------------

1. Conecta el adaptador de corriente 12V/2A al conector DC-IN.

2. Conecta el cable de red al puerto Ethernet2.

3. El dispositivo se configurará automáticamente. El indicador naranja fijo en L3 indica que la configuración y la conexión a internet fueron exitosas.

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-1.png)

**Paso 2: Instalar SenseCAP Hotspot App y Zelcore App**
--------------------------------------------------------

1. SenseCAP Hotspot App está diseñada para configurar y administrar dispositivos. Escanea el siguiente código QR para instalar SenseCAP Hotspot App.

2. Regístrate con tu correo o inicia sesión directamente.

[![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-2.png)](https://app.sensecapmx.com/)

3. Zelcore App es desarrollada por Flux para encontrar, gestionar, intercambiar y poseer realmente tus activos digitales, **FluxNode** e información. Haz clic en la siguiente imagen para instalar Zelcore App.

[![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-3.png)](https://zelcore.io/)

**Paso 3: Configurar SenseCAP M4**
----------------------------------

1. Presiona la tapa en la parte inferior izquierda del dispositivo, levanta y retírala.

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-4.png)

2. Mantén presionado el botón B1 por 5 segundos hasta que el indicador L2 parpadee en azul para activar el modo de configuración Bluetooth.

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-5.png)

3. Selecciona Flux y haz clic en Setup en la app SenseCAP Hotspot

*   Escanea el dispositivo vía Bluetooth

*   Selecciona el dispositivo para conectar  

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start.jpg)

4. La app se conecta exitosamente al dispositivo. Ahora haz clic en el botón instalar para instalar la dApp Flux en el dispositivo.

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-7.png)

**Paso 4: Desplegar Flux Node**
-------------------------------

1. La instalación de la dApp Flux está completa, ahora haz clic en el botón Abrir y comienza a desplegar el nodo CUMULUS FluxNode.

**Nota: Por favor compra 1000 Flux como colateral y transfiérelos a tu cartera Flux en Zelcore para configurar el nodo CUMULUS FluxNode.**

**Guías**

*   [Guía de configuración FluxNode](https://medium.com/@mmalik4/flux-light-node-setup-as-easy-as-it-gets-833f17c73dbb)
    
*   [Video tutorial configuración Flux Light Node (el tutorial de Zelcore y depósito Flux va del minuto 8:07 al 12:30)](https://www.youtube.com/watch?v=RT1uaSrurv4)
    

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-8.png)

2. Ingresa la Clave de Identidad, TX ID del colateral, Índice de salida, Zel ID y dirección de Kadena desde la app Zelcore. Por favor descarga Zelcore para más información.

>   **Clave de Identidad**: Haz clic en Apps > FluxNodes > selecciona tu FluxNode > clic en Editar > clic en Identity Key para copiarla.  
>   **Collateral TX ID**: Apps > FluxNodes > tu nodo > Edit > clic en Collateral TX ID para copiarlo.  
>   **Índice de salida (Output Index)**: Apps > FluxNodes > tu nodo > Edit > clic en Output Index para copiarlo.  
>   **Zel ID**: Apps > clic en Zel ID > clic en código QR para copiar el Zel ID.  
>   **Dirección Kadena**: NIMBUS y STRATUS pueden ingresar dirección de Kadena para recibir recompensas KDA. Para CUMULUS no es necesario. Ve a Portfolio > Mostrar saldo cero > Kadena > Detalles > Recibir > código QR para copiar.

3. Haz clic en **Start Deploy** y SenseCAP M4 desplegará automáticamente el FluxNode. El tiempo depende de la red del dispositivo, asegúrate de tener una buena conexión. Puedes cerrar la app o seguir monitoreando el progreso desde la app.

**Nota: Asegúrate de que tu red tenga una IP pública, velocidad de descarga ≥ 25 Mbps y de subida ≥ 25 Mbps. De lo contrario, el benchmark de Flux fallará.**

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-13.png)

4. Cuando inicie la sincronización de la cadena Flux, ve a la app Zelcore e ingresa la IP pública y el nombre en tu FluxNode. Luego haz clic en **Start** para iniciarlo.

Si el nodo funciona correctamente y pasa los benchmarks, se necesitará 1 bloque minado para cambiar a estado “Started” y de 1 a 10 bloques (2 a 20 minutos) para cambiar a “Confirmed”. Puedes comprobarlo en FluxOS actualizando la página de inicio.

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-14.png)

**Funciones Avanzadas**
========================

Configuración UPnP
-------------------

UPnP (Universal Plug and Play) permite a los dispositivos solicitar automáticamente la apertura de puertos en el router para tráfico entrante. Es útil si tu router lo soporta correctamente.

Si deseas desplegar múltiples SenseCAP M4 con una sola IP externa, asegúrate de que **tu router tenga activado UPnP**.

Nota: una IP externa puede soportar **máximo 8 nodos Flux**.

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-16.png)

* 1. Un SenseCAP M4 Square ya tiene FluxNode desplegado  

* 2. Conecta la app SenseCAP Hotspot al M4 vía Bluetooth  

* 3. Haz clic en el ícono de configuración y selecciona UPnP Setting  

* 4. Habilita UPnP y elige un puerto libre  

* 5. Haz clic en Confirmar y envía la configuración  

* 6. El estado UPnP será ENABLE  

![](https://www.sensecapmx.*com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-1.jpg)

Configuración Fractus
----------------------

El nodo Fractus incrementa el almacenamiento en la red Flux. Es un nodo Cumulus con **mínimo 10 TB** de almacenamiento y recompensa adicional del 15% en Flux.

**Requisitos mínimos para nodo Fractus**:

*   1000 Flux como colateral  
*   2 núcleos CPU  
*   4 hilos CPU  
*   240 eventos CPU por segundo  
*   9250 GB de almacenamiento en una sola partición (se permite RAID)  
*   80 MB/s velocidad de escritura en disco  
*   100 Mb/s de descarga y subida  

![](https://wdcdn.qpic.cn/MTMxMDI3MDEwODc4Njk2MTk_47467_AZXsjpYcOQweNFnJ_1675844077?w=1200&h=654)

* 1. SenseCAP M4 Square ya tiene FluxNode desplegado  

* 2. Conecta un disco de 10 TB en el puerto USB3.1 del M4  

* 3. Conecta con la app Hotspot vía Bluetooth  

* 4. Haz clic en configuración > Fractus Setting  

* 5. Activa Fractus y confirma  

* 6. El estado Fractus será True 

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/稿定设计导出-20230220-153442.jpg)

Agregar al Panel de Control
----------------------------

Para más información sobre tu dispositivo, agrégalo al panel de control SenseCAP.

*   **Agregar directamente**: en la página FluxNode, haz clic en +, introduce un nombre personalizado y el número de serie (SN en la etiqueta del dispositivo)  
*   **Agregar por Bluetooth**: si tu M4 ya tiene FluxNode desplegado, conéctalo por Bluetooth desde la app SenseCAP Hotspot y luego agrégalo al panel  

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-15.png)

Restaurar Bloques
------------------

Conecta el M4 con la app Hotspot vía Bluetooth, abre la app Flux y haz clic en **Restore Block**. El dispositivo restaurará automáticamente los bloques. El tiempo depende de la calidad de la red.

Eliminar
--------

**¡Opera con cuidado!** Elimina el nodo FluxNode desplegado en SenseCAP M4. Conecta vía Bluetooth y desde la app Flux haz clic en **Delete**.

Reinstalar
----------

**¡Opera con cuidado!** Esta acción eliminará automáticamente el nodo anterior. Conecta vía Bluetooth y haz clic en **Redeploy**, luego ingresa la nueva información para desplegar.

**Lista de dApps Descentralizadas Soportadas**
==============================================

*   Flux Cumulus Node  
*   Flux Cumulus Fractus (pendiente)

**Configuración de Red para Flux Cumulus Node**
===============================================

Para un funcionamiento adecuado del nodo, configura la red correctamente:

**Requisitos**

*   Dirección IP externa — Máximo 8 nodos Flux por IP  
*   Red cableada estable, ≥25 Mbps  
*   Router con UPnP o reenvío de puertos para redirigir hacia el dispositivo  

**Configuración Nodo Único**

[Ver documentación oficial de Flux](https://support.runonflux.io/support/solutions/articles/151000021293-flux-node-network-setup)

**Configuración Multi-nodo**

SenseCAP M4 Square **no soporta múltiples nodos Flux simultáneos**