---
description: SenseCAP M2 Multi-Platform Gateway LNS Configuration
title: Configuración LNS del Gateway Multi-plataforma SenseCAP M2
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_MP_Gateway_LNS_Configuration
last_update:
  date: 06/24/2025
  author: Guillermo
---

## Configuración del Gateway

Configura el gateway a través de la interfaz web. Consulta la [Guía de Inicio Rápido](https://files.seeedstudio.com/products/SenseCAP%20M2/Quick%20Start%20for%20SenseCAP%20M2%20Multi-Platfrom%20Gateway%20&%20Sensors.pdf) para acceder a Luci.

### Configuración del Plan de Canal

Navega a `LoRa` > `Channel Plan`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP3.png" alt="pir" width={800} height="auto" /></p>

Selecciona la Región y el Plan de Frecuencia.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP4.png" alt="pir" width={800} height="auto" /></p>

Después de configurar, haz clic en `Save & Apply`.

### Configuración del Servidor de Red Local

Navega a `LoRa` > `LoRa Network`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP1.png" alt="pir" width={800} height="auto" /></p>

Establece el Modo en `Local Network Server`, agrega tu información MQTT (Host/Port/Usuario/Contraseña). Los demás parámetros pueden quedar por defecto.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP2.png" alt="pir" width={800} height="auto" /></p>

Haz clic en `Save & Apply` para aplicar la configuración.

:::tip Nota
El proceso tardará aproximadamente 1 minuto en iniciar, luego podrás acceder a la configuración por GUI.
:::

## Configuración de la Interfaz Gráfica de ChirpStack

Accede a la interfaz web de ChirpStack mediante `http://localhost:8080`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP.png" alt="pir" width={800} height="auto" /></p>

La cuenta y contraseña por defecto es: `admin`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP5.png" alt="pir" width={800} height="auto" /></p>

Una vez dentro, verás el panel principal.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP6.png" alt="pir" width={800} height="auto" /></p>

### Verifica las Regiones

Navega a `Network Server` > `Regions`.

Debería aparecer un ID de Región. Haz clic en él y confirma que coincida con tu configuración previa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP7.png" alt="pir" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP8.png" alt="pir" width={800} height="auto" /></p>

### Agregar Perfil de Dispositivo

Navega a `Tenant` > `Device Profiles`, luego haz clic en `Add Profile`.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP9.png" alt="pir" width={800} height="auto" /></p>

**Versión MAC**: LoRaWAN 1.0.3  

**Parámetros regionales (reversión)**: A  

**Algoritmo ADR**: Algoritmo ADR por defecto (solo LoRa)  

**Intervalo de subida esperado**: Personalizado, por defecto 3600s

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP10.png" alt="pir" width={800} height="auto" /></p>

Navega a la pestaña `Codec`, selecciona `JavaScript functions` y copia el [Decodificador SenseCAP para TTN](https://github.com/Seeed-Solution/SenseCAP-Decoder), luego envíalo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/decode.png" alt="pir" width={800} height="auto" /></p>

### Agregar Gateway

Navega a `Gateway` y haz clic en `Add Gateway`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP11.png" alt="pir" width={800} height="auto" /></p>

Define el nombre y el ID del gateway (puedes generarlo aleatoriamente), luego envía el formulario.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP13.png" alt="pir" width={800} height="auto" /></p>

### Agregar Dispositivo

Navega a `Tenant` > `Application` y haz clic en `Add Application`.

Asigna un nombre a tu aplicación y envíala.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/add-applications.png" alt="pir" width={800} height="auto" /></p>

Luego entra a tu aplicación y haz clic en `Add device`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP14.png" alt="pir" width={800} height="auto" /></p>

Pega el Device EUI y selecciona el perfil de dispositivo previamente creado.  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP15.png" alt="pir" width={800} height="auto" /></p>

Después, pega la clave de aplicación (Application Key) y haz clic en enviar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP16.png" alt="pir" width={800} height="auto" /></p>

### Verificar el estado del dispositivo

Consulta la sección `Events` (Eventos) de tu dispositivo; verás el paquete de unión cuando el dispositivo se conecte a la red.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP17.png" alt="pir" width={800} height="auto" /></p>

También puedes consultar los detalles del paquete.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP18.png" alt="pir" width={800} height="auto" /></p>

## Integraciones

Este capítulo está destinado al desarrollo de servicios en la nube. Las siguientes guías son de referencia.

### MQTT

#### Tema (Topic)

La integración MQTT expone todos los eventos según lo documentado por los tipos de evento.

El tema por defecto es:

```cpp
application/APPLICATION_ID/device/DEV_EUI/event/EVENT
```

Consulta [Tipos de Eventos](https://www.chirpstack.io/docs/chirpstack/integrations/events.html) para más detalles.

Puedes encontrar el ID de la aplicación en la pestaña de tu aplicación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP19.png" alt="pir" width={800} height="auto" /></p>

- **Tipos de Evento**

| Código | Descripción                      |
|--------|----------------------------------|
| up     | Evento de subida (Uplink)        |
| status | Estado de margen y batería       |
| join   | Evento de unión del dispositivo  |
| ack    | Confirmación de bajada (ack/nack) |
| txack  | Confirmación de transmisión      |
| log    | Evento de log o error            |
| location | Evento de localización         |
| integration | Evento de integración       |

:::info Nota
`+` significa que se recibirán todos los mensajes.
:::

**Ejemplos**:

- Para recibir mensajes uplink de todos los dispositivos bajo un gateway específico:

```cpp
gateway/<GATEWAY_EUI>/device/+/event/up
```

- Para recibir todos los mensajes de todos los dispositivos bajo la aplicación:

```cpp
application/+/device/+/event/+
```

- Para recibir todos los mensajes de todos los dispositivos y gateways:

```cpp
gateway/+/device/+/event/+
```

Puedes usar el `gatewayid` para distinguir entre diferentes gateways:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/gateway-id.png" alt="pir" width={800} height="auto" /></p>

#### Payload (Carga útil)

Cuando `object.valid` es verdadero, significa que el análisis de datos fue exitoso. Entonces puedes recorrer `object.messages` y extraer el tipo de dato que necesites.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP20.png" alt="pir" width={800} height="auto" /></p>

1) Ejemplo de evento uplink de sensores SenseCAP LoRaWAN S210X:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP21.png" alt="pir" width={800} height="auto" /></p>

- `upload_battery`: Nivel de batería  
- `upload_interval`: Intervalo de carga (segundos)  
- `upload_version`: Versión de hardware/firmware  
- `report_telemetry`: Valor de la medición  

Consulta el `measurementId` dentro de `report_telemetry` en [Measurement ID de SenseCAP](https://sensecap-statics.seeed.cn/hardware/lorapp/httpserver/src/constants/sensor-name-lang-dictionary.json) para más detalles.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP22.png" alt="pir" width={800} height="auto" /></p>

2) Ejemplo de evento uplink para el registrador de datos SenseCAP:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP23.png" alt="pir" width={600} height="auto" /></p>

Consulta también el `measurementId` en [Measurement ID de SenseCAP](https://sensecap-statics.seeed.cn/hardware/lorapp/httpserver/src/constants/sensor-name-lang-dictionary.json)

### HTTP

Haz clic en `+` en la pestaña HTTP para añadir una nueva integración HTTP.

El servidor LNS enviará mensajes como POST a la URL configurada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP24.png" alt="pir" width={800} height="auto" /></p>

Envía la información de tu URL.

:::info Nota
Solo se admite HTTP, no HTTPS.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP25.png" alt="pir" width={800} height="auto" /></p>

La integración HTTP realizará solicitudes POST al endpoint o endpoints configurados (se pueden usar múltiples URLs separadas por comas). El parámetro `event` en la URL indica el tipo de evento.

Todos los eventos están documentados en [Tipos de Eventos](https://www.chirpstack.io/docs/chirpstack/integrations/events.html).

**Ejemplo**:

<details>
<summary>main.py</summary>

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

</details>

### Downlink (Mensajes de bajada)

:::info
Se recomienda marcar el mensaje de bajada como "retained" (retenido), para evitar que el comando se ejecute repetidamente.
:::

El tema (topic) por defecto es:  
`application/APPLICATION_ID/device/DEV_EUI/command/down`

`command`: Consulta el **Manual del Usuario del Dispositivo** para obtener más detalles sobre los comandos disponibles.

| Campo       | Descripción                                                                 |
|-------------|------------------------------------------------------------------------------|
| Topic       | `application/APPLICATION_ID/device/DEV_EUI/command/down`                   |
| devEUI      | Identificador único del dispositivo                                         |
| confirmed   | `true/false` (si el mensaje debe enviarse como confirmado o no)            |
| fPort       | Puerto FPort a utilizar (debe ser > 0)                                      |
| data        | Datos codificados en base64 (en texto plano, serán cifrados por ChirpStack) |

**Ejemplo 1: Reiniciar sensores SenseCAP S210x LoRaWAN**

**Topico:**

`application/dbf6\*\*\*\*6c92/device/2CF7F1C2\*\*\*/command/down`

**Json：** 

```cpp
{

"devEui":"2CF7F1C2\*\*\*", 

"confirmed":true, 

"fPort":2, 

"data":"AMgAAAAAACsm" 

} 
```

**Ejemplo 2: Establecer intervalo de carga de datos a 1 minuto**

**Topico**：

`application/dbf6\*\*\*\*6c92/device/2CF7F1C2\*\*\*/command/down`

**Json**：
```cpp
{

"devEui":"2CF7F1C2\*\*\*", 

"confirmed":true, 

"fPort":2, 

"data":"AIkAESIBAJBQ" 

} 
```

