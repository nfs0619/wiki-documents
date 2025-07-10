---
description: Low Data Consumption Mode Config(for 4G version)
title: Configuración del Modo de Bajo Consumo de Datos (versión 4G)
keywords:
- SenseCAP_M2
- Gateway
image: https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/sensecap_m2.jpg
slug: /es/traffic_saving_config
last_update:
  date: 06/24/2025
  author: Guillermo
---

Este tutorial te guiará para configurar el **Modo de Bajo Consumo de Datos** en el Gateway SenseCAP M2 Multi-Plataforma **versión 4G**. En este modo, el tráfico mensual estimado será de aproximadamente **60 MB**, aunque puede variar dependiendo del número de paquetes enviados por los nodos conectados.

:::caution Nota
1. El estado mostrado en la app puede tener cierto **retraso**.  
2. El cambio de red y el **indicador RGB** se actualizarán tras **5 minutos**.
:::

### Verificar la Versión del Firmware

Antes de activar este modo, debes verificar la versión del sistema operativo (OS) y del firmware del dispositivo.

:::tip
- La versión del sistema operativo debe ser **posterior a 0.9.5**  
- La versión del firmware debe ser **posterior a 1.1.6**
:::

Consulta la [Guía Rápida](https://wiki.seeedstudio.com/quick_start_with_M2_MP/) para acceder a la interfaz **Luci**.

Ve a `Status` → `Overview` y verifica la versión actual:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/version-check.png" alt="pir" width={800} height="auto" /></p>

### Actualizar el Sistema Operativo

El **firmware se actualiza automáticamente**, pero el sistema operativo **requiere actualización manual**.

Dirígete a `System` → `Backup/Flash Firmware`, y haz clic en `Update`.

:::danger
No desconectes la fuente de alimentación durante la actualización.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/online-update.png" alt="pir" width={800} height="auto" /></p>

## Configuración de Lista Blanca (White List)

Esta sección permite **filtrar nodos innecesarios** para ahorrar tráfico.

- En el **modo SenseCAP**, los nodos que no sean SenseCAP se filtran automáticamente. No es necesario hacer configuración adicional.

- En los modos **Packet Forwarder** y **Basic Station**, **debes habilitar manualmente** la Lista Blanca.

 :::tip
 Si estás utilizando la plataforma **AWS**, puedes omitir este paso y configurar la lista blanca directamente en la consola de AWS.
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/aws-white-list.png" alt="pir" width={600} height="auto" /></p>
 :::

 `OUI List`: Primeros 3 bytes del EUI del nodo (para filtrar *join requests*).  
  Ejemplo: para nodos SenseCAP, el OUI es `2CF7F1`.

  `Network ID List / DevAddr`: Para filtrar *uplink packets*.  
  Ejemplo: para nodos SenseCAP, el NetID es `000013` y el rango de DevAddr es `27000000 - 27FFFFFF`. Consulta más detalles en: [NetID y DevAddr Assignments](https://www.thethingsnetwork.org/docs/lorawan/prefix-assignments/)
  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/white-list-config.png" alt="pir" width={800} height="auto" /></p>

## Configurar Parámetros de PING

Se usan para comprobar si la interfaz de red está activa.  
Dejar en blanco si se quiere asumir que la red está **siempre disponible**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/mwan3.png" alt="pir" width={800} height="auto" /></p>

## Activar el Modo de Bajo Consumo de Datos

Habilita la opción `Low Data Consumption Mode` y establece el `alive time` (tiempo de vida de sesión).  
Valor predeterminado en SenseCAP Platform: `86400` segundos (24 horas).

Luego de guardar los cambios, **reinicia el gateway** para que la configuración entre en efecto.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/mode-enable.png" alt="pir" width={800} height="auto" /></p>

