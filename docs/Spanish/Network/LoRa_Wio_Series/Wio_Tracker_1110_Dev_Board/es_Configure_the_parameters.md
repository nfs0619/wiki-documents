---
description: Configure_the_Parameters_of_Wio_Tracker_1110 
title: Configuración de Parámetros
keywords:
- Tracker
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/configure_param_for_wio_tracker
sidebar_position: 9
sidebar_class_name: hidden
last_update:
  date: 05/21/2025
  author: Guillermo
---



Antes de comenzar, asegúrate de haber revisado primero la sección 
[Configura tu entorno de desarrollo](https://wiki.seeedstudio.com/setup_toolchain_for_wio_tracker).

### Configuración de región

La región predeterminada del firmware de fábrica es **EU868**. 
Para configurar la región y cumplir con los requisitos de frecuencia de distintas zonas, sigue estos pasos:

1. Sustituye la parte `'Region'` en el ejemplo de **LoRaWAN**.

```cpp
REGION = SMTC_MODEM_REGION_'Region'
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/set-region.png" alt="pir" width={800} height="auto" /></p>

2. Haz clic en `Upload` para cargar el programa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/program.png" alt="pir" width={800} height="auto" /></p>

3. También puedes usar el botón `Serial Monitor` en la esquina superior derecha para ver los registros.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/port-monitor.png" alt="pir" width={800} height="auto" /></p>

### Configuración de la información del trío (Triad Info)

La placa Wio Tracker 1110 permite definir: DevEUI, AppEUI y AppKey

Abre el ejemplo `LoRaWAN/TTN Example`, define la información del trío, haz clic en `Upload`.


```cpp
static const uint8_t DEV_EUI[8]  = { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };
static const uint8_t JOIN_EUI[8] = { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };
static const uint8_t APP_KEY[16] = { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/change-3-codes.png" alt="pir" width={800} height="auto" /></p>


<details>
<summary>Info</summary>

También puedes obtener el trío desde el servidor (por ejemplo, TTS) y copiarlo en la sección `Constants`.

Ejemplo de The Things Stack:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device3.png" alt="pir" width={800} height="auto" /></p>

</details>