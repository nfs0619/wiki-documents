---
description: Connect SenseCAP M2 Multi-Platform Gateway to TTN
title: Conectar a TTN
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-The-Things-Network
last_update:
  date: 06/24/2025
  author: Guillermo
---



Hay dos formas de conectar tu gateway a The Things Network: **Packet Forwarder** y **LoRa Basics™ Station**. A continuación se describe cómo configurar cada uno.

## **Conexión mediante Packet Forwarder**

El **Semtech UDP Packet Forwarder** es el reenvío de paquetes LoRaWAN® original, que se conecta a servidores usando el protocolo UDP de Semtech.

### Configuración en TTN

**Paso 1**: Inicia sesión en [The Things Stack](https://eu1.cloud.thethings.network/console). Si no tienes una cuenta, regístrate primero.

**Paso 2**: Registra el gateway

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/register2.png" alt="pir" width={600} height="auto" /></p>

- **Gateway EUI**: Lo encontrarás en la etiqueta del dispositivo o en la Consola Local.  

- **Gateway ID**: Identificador único para tu gateway (solo letras minúsculas, números y guiones).  

- **Nombre del Gateway**: El nombre que prefieras.  

- **Plan de frecuencia**: Selecciona la frecuencia correspondiente según tu versión del gateway.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/set1.png" alt="pir" width={600} height="auto" /></p>


Luego de registrarlo, podrás ver tu gateway en la sección de resumen:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/set2.png" alt="pir" width={600} height="auto" /></p>


### Configuración del Gateway

Configura el gateway desde la interfaz web. Consulta la [Guía de inicio rápido](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf) para acceder a la consola local.

**Paso 1**: Navega a **LoRa > LoRa Network**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/lora_network.png" alt="pir" width={600} height="auto" /></p>

**Paso 2**: Configura el modo en **Packet Forward**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/packet.png" alt="pir" width={600} height="auto" /></p>

**Paso 3**: Configuración del Packet Forwarder:

1. **Gateway EUI**: Se detecta automáticamente.  
2. **Dirección del servidor**: Usa la dirección del servidor correspondiente de TTN. Consulta: [Server Addresses](https://www.thethingsindustries.com/docs/the-things-stack/concepts/server-addresses/).  
3. **Puerto de subida/bajada**: Usualmente es **1700** para ambos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/server_address.png" alt="pir" width={600} height="auto" /></p>

Haz clic en **Save & Apply** para guardar los cambios.

**Paso 4**: Plan de canales

Navega a **LoRa > Channel Plan**, selecciona tu región y el plan de frecuencia correspondiente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/lora_network.png" alt="pir" width={600} height="auto" /></p>

Navega a **LoRa > Channel Plan**, selecciona tu región y el plan de frecuencia correspondiente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/setting3.png" alt="pir" width={600} height="auto" /></p>

Haz clic en **Save & Apply** para aplicar la configuración.



## **Conexión mediante LoRa Basics™ Station (Recomendado)**

**LoRa Basics™ Station** es el método preferido para conectar gateways a The Things Stack.

### Configuración en TTN

**Paso 1**: Registra el gateway

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/register2.png" alt="pir" width={600} height="auto" /></p>

**Paso 2**: Habilita la opción **Require authenticated connection**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/enable_setting.png" alt="pir" width={600} height="auto" /></p>

Esto permitirá que solo gateways que usen TLS y autenticación se conecten.

**Paso 3**: Crea una clave API (API Key)

Genera automáticamente una clave API para el servicio **CUPS** o **LNS**, lo que autoriza al gateway a conectarse.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/APIkey.png" alt="pir" width={600} height="auto" /></p>

Elige el servidor deseado y haz clic en **Register gateway**.

- **LNS (LoRaWAN Network Server)**: Maneja el envío y recepción de datos LoRaWAN.  
- **CUPS (Configuration and Update Server)**: Permite la configuración remota y actualización del firmware del gateway.

Más información en el [Portal de desarrolladores de Semtech](https://lora-developers.semtech.com/resources/tools/lora-basics/lora-basics-for-gateways/).

**Configuration and Update Server (CUPS)**

CUPS allows a Network Server to configure gateways remotely, and to update gateway firmware. CUPS is not required for sending and receiving LoRaWAN data, but it can greatly simplify the management of gateways. Configuring CUPS will also automatically retrieve LNS credentials and configure LNS on your gateway.

More information about LoRa Basics™ Station is available at [Semtech’s Developer Portal](https://lora-developers.semtech.com/resources/tools/lora-basics/lora-basics-for-gateways/).





### Configuración del Gateway

**Paso 1**: Navega a **LoRa > LoRa Network**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/lora_network.png" alt="pir" width={600} height="auto" /></p>

**Paso 2**: Establece el modo en **Basics Station**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/basic.png" alt="pir" width={600} height="auto" /></p>

Paso 3**: Configuración de Basics Station:

1. **Gateway EUI**: Se detecta automáticamente  
2. **Servidor**: Selecciona **CUPS** o **LNS**  
   - **CUPS**: `https://server-address:443`  
   - **LNS**: `wss://server-address:8887`  
3. **Modo de autenticación**: Autenticación TLS del servidor y token del cliente  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/url.png" alt="pir" width={600} height="auto" /></p>

4. **trust**: Es el [certificado de autoridad (CA)](https://en.wikipedia.org/wiki/Certificate_authority).  
   Puedes descargar el archivo .pem desde la [referencia de certificados raíz de The Things Stack](https://www.thethingsindustries.com/docs/reference/root-certificates/)  
   Copia el contenido en texto del archivo.

5. **token:** Authorization:Bearer <Your_API_Key>

Otros parámetros pueden dejarse por defecto.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/token.png" alt="pir" width={600} height="auto" /></p>

## Verificar el estado del Gateway

Después de completar la configuración, puedes verificar si el gateway está activo y transmitiendo datos en tiempo real desde la consola de TTN.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/status.png" alt="pir" width={600} height="auto" /></p>
