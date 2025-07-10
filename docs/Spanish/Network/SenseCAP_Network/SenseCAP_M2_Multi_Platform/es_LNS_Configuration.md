---
description: SenseCAP M2 Multi-Platform Gateway LNS Configuration
title: Configuración LNS
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_m2_LNS_config
last_update:
  date: 06/24/2025
  author: Guillermo
---

SenseCAP M2 Multi Platform Gateway tiene un Servidor de Red LoRaWAN incorporado, basado en Chirpstack, y proporciona una solución rápida y confiable para lanzar una red LoRaWAN.

## Configuración del Gateway

Configura el gateway a través de la Interfaz Web. Consulta la [Guía Rápida](https://files.seeedstudio.com/products/SenseCAP%20M2/Quick%20Start%20for%20SenseCAP%20M2%20Multi-Platfrom%20Gateway%20&%20Sensors.pdf) para iniciar sesión en Luci.

### Configuración del Plan de Canales

Navega a `LoRa` > `Channel Plan`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP3.png" alt="pir" width={800} height="auto" /></p>

Selecciona la región y el plan de frecuencia.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP4.png" alt="pir" width={800} height="auto" /></p>

Después de configurar, haz clic en `Save&Apply`.

### Configuración del Servidor de Red Local

Navega a `LoRa` > `LoRa Network`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP1.png" alt="pir" width={800} height="auto" /></p>

Establece el modo como `Local Network Server`, agrega tu información MQTT (Host/Port/Usuario/Contraseña). Los demás parámetros pueden mantenerse con los valores predeterminados.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP2.png" alt="pir" width={800} height="auto" /></p>

Haz clic en `Save&Apply` para aplicar tu configuración.

:::tip Nota
El proceso tardará aproximadamente 1 minuto en iniciarse, luego podrás acceder a la interfaz de configuración GUI.
:::

## Configuración de la GUI de ChirpStack

Inicia sesión en la GUI de ChirpStack vía `http://localhost:8080`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP.png" alt="pir" width={800} height="auto" /></p>

La cuenta y contraseña predeterminadas son: `admin`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP5.png" alt="pir" width={800} height="auto" /></p>

Luego verás la página del panel de control.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP6.png" alt="pir" width={800} height="auto" /></p>

### Verificar las Regiones

Navega a `Network Server` > `Regions`.

Debe aparecer un ID de región, haz clic en él y confirma la información. Debe coincidir con la configuración del paso anterior.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP7.png" alt="pir" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP8.png" alt="pir" width={800} height="auto" /></p>

### Agregar Perfil de Dispositivo

Navega a `Tenant` > `Device Profiles` y haz clic en `Add Profile`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP9.png" alt="pir" width={800} height="auto" /></p>

**Versión MAC:** LoRaWAN 1.0.3  

**Parámetros regionales - versión:** A  

**Algoritmo ADR:** Algoritmo ADR predeterminado (solo LoRa)  

**Intervalo esperado de subida:** Personalizado, predeterminado 3600s

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP10.png" alt="pir" width={800} height="auto" /></p>

Navega a `Codec`, selecciona `JavaScript functions`, copia el [Decoder de SenseCAP para TTN](https://github.com/Seeed-Solution/SenseCAP-Decoder) y envíalo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/decode.png" alt="pir" width={800} height="auto" /></p>

### Agregar Gateway

Navega a `Gateway` y haz clic en `Add Gateway`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP11.png" alt="pir" width={800} height="auto" /></p>

Define el Nombre y el ID del Gateway (puedes hacer clic para generarlo aleatoriamente), luego envíalo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP13.png" alt="pir" width={800} height="auto" /></p>

### Agregar Dispositivo

Navega a `Tenant` > `Application` y haz clic en `Add Application`.

Asigna un nombre a tu aplicación y envíala.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/add-applications.png" alt="pir" width={800} height="auto" /></p>

Navega a tu aplicación y haz clic en `Add device`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP14.png" alt="pir" width={800} height="auto" /></p>

Pega el EUI de tu dispositivo y selecciona el perfil de dispositivo que agregaste antes, luego haz clic en enviar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP15.png" alt="pir" width={800} height="auto" /></p>

Pega la clave de aplicación (Application Key) y haz clic en enviar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP16.png" alt="pir" width={800} height="auto" /></p>

:::tip
Por favor, consulta la guía del usuario para configurar el dispositivo correctamente. Selecciona la plataforma como `Other Platform`.
:::

### Verifica el estado del dispositivo

Revisa los `Eventos` de tu dispositivo. Recibirás el paquete de unión (join) cuando el dispositivo se conecte a la red.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP17.png" alt="pir" width={800} height="auto" /></p>

También puedes verificar los detalles del paquete.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP18.png" alt="pir" width={800} height="auto" /></p>

## Integraciones

Este capítulo está orientado al desarrollo de servicios en la nube. La siguiente guía es solo de referencia.

### MQTT 

#### Tópico

La integración MQTT expone todos los eventos como se documenta en los Tipos de Evento.

El tópico de eventos por defecto es:  

```cpp
application/APPLICATION\_ID/device/DEV\_EUI/event/EVENT
```

Consulta los [Tipos de Evento](https://www.chirpstack.io/docs/chirpstack/integrations/events.html) para más detalles.

Puedes encontrar el ID de Aplicación en la pestaña de tu aplicación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP19.png" alt="pir" width={800} height="auto" /></p>

- **Tipos de evento**

| Evento | Descripción |
| - | - |
| up | Evento de subida de datos |
| status | Estado de margen y batería |
| join | Evento de unión del dispositivo |
| ack | Confirmación de recepción descendente |
| txack | Confirmación de transmisión descendente |
| log | Evento de registro o error |
| location | Evento de ubicación |
| integration | Evento de integración |

:::info Nota
`+` significa recibir todos los mensajes
:::

**Ejemplo:**  
* Para recibir mensajes ascendentes de todos los dispositivos bajo un gateway específico:

```cpp
gateway/<GATEWAY\_EUI>/device/+/event/up
```

* Para recibir todos los mensajes de todos los dispositivos bajo una aplicación:

```cpp
application/+/device/+/event/+
```

* Para recibir todos los mensajes de todos los dispositivos desde todos los gateways:

```cpp
gateway/+/device/+/event/+
```

Puedes revisar el `gatewayid` para distinguir entre los gateways.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/gateway-id.png" alt="pir" width={800} height="auto" /></p>

#### Payload

Cuando `object.valid` es verdadero, significa que el análisis de datos fue exitoso. Luego puedes recorrer `object.messages` y extraer el tipo de dato que necesites.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP20.png" alt="pir" width={800} height="auto" /></p>

1) Evento `up` para sensores SenseCAP LoRaWAN S210X, ejemplo de payload:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP21.png" alt="pir" width={800} height="auto" /></p>

- `upload_battery`: Nivel de batería  
- `upload_interval`: Intervalo de subida (segundos)  
- `upload_version`: Versión de hardware/firmware  
- `report_telemetry`: Valor medido

Consulta el [`measurementId`](https://sensecap-statics.seeed.cn/hardware/lorapp/httpserver/src/constants/sensor-name-lang-dictionary.json) en el mensaje `report_telemetry` para conocer el significado de cada ID.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP22.png" alt="pir" width={800} height="auto" /></p>

2) Evento `up` para el registrador de datos SenseCAP, ejemplo de payload:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP23.png" alt="pir" width={600} height="auto" /></p>

Consulta el [`measurementId`](https://sensecap-statics.seeed.cn/hardware/lorapp/httpserver/src/constants/sensor-name-lang-dictionary.json) en el mensaje `report_telemetry` para conocer más detalles.

### HTTP

Haz clic en `+` en la pestaña HTTP para añadir una nueva integración HTTP.

LNS enviará los mensajes como POST a la URL configurada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP24.png" alt="pir" width={800} height="auto" /></p>

Envía tu información de URL.

:::info Nota
Solo se admite HTTP, no HTTPS.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP25.png" alt="pir" width={800} height="auto" /></p>

La integración HTTP realizará peticiones POST a los endpoints configurados. Puedes configurar múltiples URLs separadas por comas. El parámetro `event` en la URL indica el tipo de evento.

La integración HTTP expone todos los eventos tal como se documenta en [Tipo de Evento](https://www.chirpstack.io/docs/chirpstack/integrations/events.html).

**Ejemplo**:

(main.py) 

```cpp
from http.server import HTTPServer, BaseHTTPRequestHandler 

from urllib.parse import urlparse, parse\_qs 

from chirpstack\_api import integration 

from google.protobuf.json\_format import Parse 

class Handler(BaseHTTPRequestHandler): 

\# True - JSON marshaler 

\# False - Protobuf marshaler (binary) 

json = False 

def do\_POST(self): 

self.send\_response(200) 

self.end\_headers() 

query\_args = parse\_qs(urlparse(self.path).query) 

content\_len = int(self.headers.get('Content-Length', 0)) 

body = self.rfile.read(content\_len) 

if query\_args["event"][0] == "up": 

self.up(body) 

elif query\_args["event"][0] == "join": 

self.join(body) 

else:

print("handler for event %s is not implemented" % query\_args["event"][0]) 

def up(self, body): 

up = self.unmarshal(body, integration.UplinkEvent()) 

print("Uplink received from: %s with payload: %s" % (up.device\_info.dev\_eui, up.data.hex())) 

def join(self, body): 

join = self.unmarshal(body, integration.JoinEvent()) 

print("Device: %s joined with DevAddr: %s" % (join.device\_info.dev\_eui, join.dev\_addr)) 

def unmarshal(self, body, pl): 

if self.json: 

return Parse(body, pl) 

pl.ParseFromString(body) 

return pl 

httpd = HTTPServer(('', 8090), Handler) 

httpd.serve\_forever() 
```


### Mensajes Downlink

Mensaje descendente (Downlink):

:::info 
Se recomienda marcar el downlink como **retained**. De este modo, el comando no se ejecutará repetidamente.
:::

El tópico por defecto es:  
`application/APPLICATION_ID/device/DEV_EUI/command/down`

`command`: Consulta los comandos descendentes en el **Manual de Usuario del Dispositivo** para más detalles.

| Campo | Descripción |
| - | - |
| Tópico | application/APPLICATION_ID/device/DEV_EUI/command/down |
| devEUI | EUI del dispositivo |
| confirmed | true/false (si el mensaje debe enviarse como dato confirmado o no) |
| fPort | Puerto F a utilizar (debe ser > 0) |
| data | Datos codificados en base64 (texto plano, será cifrado por ChirpStack) |

**Ejemplo 1:**

Reiniciar los sensores SenseCAP S210x LoRaWAN

**Tópico:**

`application/dbf6****6c92/device/2CF7F1C2***/command/down`

**Json：** 

```cpp
{

"devEui":"2CF7F1C2\*\*\*", 

"confirmed":true, 

"fPort":2, 

"data":"AMgAAAAAACsm" 

} 
```

**Ejemplo 2:**

Configurar el intervalo de subida de los sensores SenseCAP S210x LoRaWAN a 1 minuto:

**Tópico:**

`application/dbf6\*\*\*\*6c92/device/2CF7F1C2\*\*\*/command/down`

**Json**：
```cpp
{

"devEui":"2CF7F1C2\*\*\*", 

"confirmed":true, 

"fPort":2, 

"data":"AIkAESIBAJBQ

" 
} 
```

