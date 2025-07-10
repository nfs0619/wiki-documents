---
description: Connect SenseCAP M2 Multi-Platform Gateway to AWS
title: Conexión a AWS IoT
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-AWS-IoT
last_update:
  date: 06/23/2025
  author: Guillermo
---

## Configuración de AWS IoT

Inicia sesión en [AWS](https://signin.aws.amazon.com).  
Si no tienes una cuenta, primero crea una.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS2.PNG" alt="pir" width={800} height="auto" /></p>

### Agregar Gateway

Navega a **Internet of Things** > **IoT Core**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS1.PNG" alt="pir" width={800} height="auto" /></p>

Selecciona **LPWAN devices** > **Gateway** para agregar un gateway

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS4.PNG" alt="pir" width={800} height="auto" /></p>

**EUI del Gateway:** Puedes encontrar el EUI en la etiqueta del dispositivo o en la [Consola Local](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf)

**Banda de frecuencia:** Selecciona el plan de frecuencia según tu ubicación real.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS2.PNG" alt="pir" width={800} height="auto" /></p>

#### Crear certificado

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS7.PNG" alt="pir" width={800} height="auto" /></p>

Descarga los archivos del certificado y los certificados de confianza del servidor.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS6.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS5.PNG" alt="pir" width={800} height="auto" /></p>

Elige el Rol: **IoT Wireless Gateway Cert Manager Role**, luego envía la configuración.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS9.PNG" alt="pir" width={800} height="auto" /></p>

#### Verifica el estado de conexión del gateway

Navega a la página **Gateways** y selecciona el que agregaste.  
En la sección de detalles LoRaWAN, verás el estado de conexión y la fecha/hora del último uplink recibido.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS8.PNG" alt="pir" width={800} height="auto" /></p>

### Agregar Perfiles

Los perfiles de dispositivo y servicio permiten definir configuraciones comunes para facilitar la integración de múltiples dispositivos. AWS IoT Core for LoRaWAN soporta ambos tipos.

#### Agregar perfil de dispositivo

Navega a **Devices** > **Profiles**, haz clic en "Add device profile"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS11.PNG" alt="pir" width={800} height="auto" /></p>

Asigna un nombre, selecciona la banda de frecuencia (RfRegion) usada por tu dispositivo y gateway, y deja el resto de valores predeterminados.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS10.PNG" alt="pir" width={800} height="auto" /></p>

#### Agregar perfil de servicio

Navega a **Devices** > **Profiles**, haz clic en "Add service profile"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS13.PNG" alt="pir" width={800} height="auto" /></p>

Se recomienda mantener la opción **AddGWMetaData** habilitada para recibir metadatos adicionales del gateway como RSSI y SNR por cada transmisión.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS12.PNG" alt="pir" width={800} height="auto" /></p>

### Agregar Destino

Navega a **Devices** > **Destination**, haz clic en "Add destination"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS15.PNG" alt="pir" width={800} height="auto" /></p>

Publica hacia el broker de mensajes de AWS IoT Core

**Permisos**: Selecciona un rol de servicio existente > *IoT Wireless Gateway Cert Manager Role*

:::tip Nota
El nombre del destino solo puede contener caracteres alfanuméricos, guiones (-) y guiones bajos (_). No puede contener espacios.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS14.PNG" alt="pir" width={800} height="auto" /></p>

### Agregar Dispositivos LoRaWAN

#### Agregar dispositivo inalámbrico

Navega a **LPWAN devices** > **Devices**, haz clic en "Add wireless device"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS18.PNG" alt="pir" width={800} height="auto" /></p>

#### Configurar dispositivo

**Especificación del dispositivo inalámbrico:** OTAA v1.0x  

**DevEUI:** El `DevEUI/APP EUI/APP key` se encuentra en la etiqueta del dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS17.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS20.PNG" alt="pir" width={800} height="auto" /></p>

#### Verificar estado de conexión del dispositivo

Navega a la página **Devices** y selecciona el dispositivo agregado.  
En la sección de detalles, verás la última vez que se recibió un uplink.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS19.PNG" alt="pir" width={800} height="auto" /></p>

## Configuración del Gateway

Inicia sesión en la Consola Local. Consulta la [Guía de Inicio Rápido](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS22.PNG" alt="pir" width={800} height="auto" /></p>

### Configuración de Red LoRaWAN

Navega a **LoRa** > **LoRa Network**

- **Modo:** Basics Station  

- **Gateway EUI:** Se obtiene automáticamente del gateway conectado  

- **Servidor:** Elige CUPS o LNS (CUPS usa puerto 443, LNS usa 8887)  
  Más información en [CUPS y LNS Server](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-gateways/)

**Modo de Autenticación:** Autenticación TLS Cliente y Servidor

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS21.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS23.PNG" alt="pir" width={800} height="auto" /></p>

Haz clic en **Save & Apply** cuando termines la configuración.

