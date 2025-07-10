---
description: Connect SenseCAP M2 Multi-Platform Gateway to ChirpStack
title: Conexión a ChirpStack
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-ChirpStack
last_update:
  date: 06/24/2025
  author: Guillermo
---

### Configuración de ChirpStack

ChirpStack proporciona componentes de código abierto para redes LoRaWAN. Juntos, forman una solución lista para usar que incluye una interfaz web fácil de usar para la gestión de dispositivos y APIs para integración.

#### Agregar Gateway

Antes de comenzar, por favor inicia sesión en el [ChirpStack Application Server](https://www.chirpstack.io/application-server/use/login/).

Credenciales predeterminadas:  
**Usuario**: admin  
**Contraseña**: admin

:::tip Nota
Si aún no has conectado tu instancia del [ChirpStack Application Server](https://www.chirpstack.io/project/application-server/) con una instancia del [ChirpStack Network Server](https://www.chirpstack.io/project/network-server/), primero necesitas hacerlo. Consulta [Network servers](https://www.chirpstack.io/application-server/use/network-servers/). También debes conectar la organización con el servidor de red creando un [perfil de servicio (Service profile)](https://www.chirpstack.io/application-server/use/service-profiles/).
:::

Navega a **Gateways > Add gateway**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/add-gateway.png" alt="pir" width={800} height="auto" /></p>

- **Nombre del Gateway**: Un nombre para tu gateway  

- **Gateway EUI**: Puede encontrarse en la etiqueta del dispositivo o en la Consola Local

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_2.png" alt="pir" width={800} height="auto" /></p>

#### Agregar perfil de dispositivo

Antes de agregar un dispositivo a ChirpStack, debes crear un [Device-profile](https://www.chirpstack.io/application-server/use/device-profiles/) si aún no lo has hecho.

Navega a **Device profile > Add device profile**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_3.png" alt="pir" width={800} height="auto" /></p>

- **Nombre**: Un nombre para tu perfil  

- **Región**: Selecciona el plan regional de acuerdo con tu gateway  

- **Versión MAC**: LoRaWAN 1.0.3  

- **Revisión de parámetros regionales**: A  

- **Algoritmo ADR**: Default ADR algorithm (solo LoRa)

:::note
Selecciona versión MAC, parámetros regionales y algoritmo ADR según tu dispositivo. Para más detalles, visita: https://lora-alliance.org/resource_hub/
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_4.png" alt="pir" width={800} height="auto" /></p>

#### Agregar dispositivo

Navega a **Application > Add Application**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_5.png" alt="pir" width={800} height="auto" /></p>

Haz clic en la aplicación a la que deseas agregar el dispositivo. Luego, en la pestaña **Devices**, haz clic en **Add device**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_6.png" alt="pir" width={800} height="auto" /></p>

- **Nombre**: Un nombre para tu dispositivo  

- **Device EUI**: Puedes encontrarlo en la etiqueta del dispositivo o en la app SenseCAP Mate  

- **Perfil del dispositivo**: Selecciona el perfil creado en el paso anterior

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_7.png" alt="pir" width={800} height="auto" /></p>

### Configuración del Gateway

Configura el gateway mediante la interfaz web. Consulta la [Guía de Inicio Rápido](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf) para iniciar sesión en la Consola Local.

#### Configuración de Red LoRa

Navega a **LoRa > LoRa Network**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_8.png" alt="pir" width={800} height="auto" /></p>

- **Modo:** Packet Forwarder

**Configuración del Packet Forwarder**:

- **Gateway EUI**: Se obtiene automáticamente del gateway conectado  

- **Dirección del servidor**: Dirección de tu servidor ChirpStack  

- **Puerto del servidor (Up/Down)**: 1700  

El resto de configuraciones pueden dejarse por defecto o ajustarse según tus necesidades.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_9.png" alt="pir" width={800} height="auto" /></p>

#### Configuración del Plan de Canal

Navega a **LoRa > Channel Plan**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_10.png" alt="pir" width={800} height="auto" /></p>

Selecciona la región y el plan de frecuencia de acuerdo a tu ubicación.

Después de configurar, haz clic en **Save & Apply**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_11.png" alt="pir" width={800} height="auto" /></p>

### Visualización de Datos

#### Datos del Gateway

Navega a **Gateways** y selecciona el que deseas verificar

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_12.png" alt="pir" width={800} height="auto" /></p>

#### Datos del Dispositivo

Después de agregar tu dispositivo LoRaWAN a ChirpStack, verifica que pueda activarse (en caso de OTAA) y enviar datos.

Navega a **Applications > Devices**, selecciona el dispositivo que quieres verificar.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_13.png" alt="pir" width={800} height="auto" /></p>
