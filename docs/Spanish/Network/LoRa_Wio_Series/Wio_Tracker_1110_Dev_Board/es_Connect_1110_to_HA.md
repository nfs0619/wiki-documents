---
description: Connect Wio Tracker 1110 to Home Assistant 
title: Integración de Home Assistant
keywords:
- Home assistant
- Wio tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/wio_tracker_home_assistant
sidebar_position: 5
last_update:
  date: 05/21/2025
  author: Guillermo
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/dog-locate.png" alt="pir" width={800} height="auto" /></p>



Integra la [Wio Tracker 1110 Dev Board](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html) en Home Assistant para seguimiento en tiempo real y análisis ambiental en vivo.  
La Wio Tracker 1110 es una plataforma de desarrollo basada en LoRa fácil de usar, ideal para desarrollar funciones personalizadas que hagan tu entorno más inteligente y responsivo.

## Primeros pasos

En este tutorial usaremos la [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html) como host, aunque puedes usar cualquier host con Supervisor. Consulta la [documentación oficial de instalación](https://www.home-assistant.io/installation/) para más detalles.

### Configuración del dispositivo

Antes de comenzar, asegúrate de haber leído la [Guía de usuario del Wio Tracker 1110](https://wiki.seeedstudio.com/Get_Started_with_Wio-Trakcer_1110/) y selecciona la plataforma `SenseCAP`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/4.jpeg" alt="pir" width={300} height="auto" /></p>


### Configuración en Home Assistant

Navega a tu [interfaz web de Home Assistant](http://homeassistant.local:8123/).

Para desbloquear todo el potencial, se recomienda habilitar el `Advanced mode`.

1. Haz clic en tu perfil.
2. Activa el interruptor de `Advanced mode`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/advanced-mode.png" alt="pir" width={800} height="auto" /></p>


#### Instalar Complementos (Add-ons)

Ve a [Ajustes > Complementos](https://my.home-assistant.io/redirect/supervisor).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-ons.png" alt="pir" width={800} height="auto" /></p>


Dentro de los complementos oficiales `add-ons`, busca e instala `File editor` y `Advanced SSH & Web Terminal`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/2-ons.png" alt="pir" width={800} height="auto" /></p>

Se recomienda activar la opción `Show in sidebar` para acceder fácilmente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/show-sidebar.png" alt="pir" width={800} height="auto" /></p>

#### Instalar HACS

**Home Assistant Community Store (HACS)** te da una interfaz avanzada para gestionar complementos y personalizaciones.

Abre la terminal y navega al directorio `config`:

```cpp
cd /config
```

Descarga y corre el script de instalación HACS:

```cpp
wget -q -O - https://install.hacs.xyz | bash -
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/comand-page.png" alt="pir" width={600} height="auto" /></p>


Después de que el script de instalación haya finalizado, reinicia Home Assistant para aplicar los cambios.

Ve a `Settings` > `System` > `Restart`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/restart.png" alt="pir" width={800} height="auto" /></p>



Navega a `Settings` -> `Devices & Services`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/device-service.png" alt="pir" width={800} height="auto" /></p>


Haz clic en `ADD INTEGRATION` para agregar una nueva integración.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-inte.png" alt="pir" width={800} height="auto" /></p>


Busca `HACS` y haz clic en él.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/HACS.png" alt="pir" width={800} height="auto" /></p>


Solo la última opción (funciones experimentales) es opcional. Asegúrate de aceptar todo lo anterior para poder configurar HACS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/submit.png" alt="pir" width={600} height="auto" /></p>


Sigue las instrucciones para autorizar a Home Assistant a acceder a tu cuenta de GitHub. Esto normalmente incluye ingresar un código de verificación proporcionado por GitHub para confirmar tu identidad.

HACS utiliza un flujo de autenticación OAuth para autorizarse con la API de GitHub.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/12.png
" alt="pir" width={600} height="auto" /></p>


#### Instalar el plugin SenseCraft

Navega a `HACS`, haz click en ícono de la esquina superior derecha, y escoge `Custom repositories`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/14.png
" alt="pir" width={800} height="auto" /></p>

Copia el `Repositorie`:

**Repositorio**: 
```cpp
https://github.com/Seeed-Solution/SenseCraft-HomeAssistant.git
```
**Categoría**: `Integración`

Haz clic en `Add`. El repositorio ahora está agregado a tu HACS y también puedes encontrar la integración `SenseCraft` en la lista bajo `Integrations`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/custom-re.png" alt="pir" width={800} height="auto" /></p>

Navega a la integración `SenseCraft` y haz clic en `DOWNLOAD`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/17.png" alt="pir" width={800} height="auto" /></p>

¡La instalación del plugin SenseCraft se ha completado con éxito!

### Agregar dispositivos

Navega a `Settings` -> `Devices & Services` -> `SenseCraft`, y haz clic en `ADD DEVICE`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-device-.png" alt="pir" width={800} height="auto" /></p>

Selecciona `Add devices using SenseCraft Account(账号集成) `.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/account-inte.png" alt="pir" width={800} height="auto" /></p>

Inicia sesión con tu cuenta de la aplicación SenseCAP Mate, y selecciona la versión `global`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/craft-login.png" alt="pir" width={800} height="auto" /></p>



Una vez conectado, verás todos los dispositivos vinculados a tu cuenta. Selecciona el que deseas conectar y haz clic en `SUBMIT`.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/craft-device.png" alt="pir" width={800} height="auto" /></p>

Una vez que la conexión sea exitosa, verás el dispositivo y su entidad mostrados en Home Assistant.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/cloud-device.png" alt="pir" width={800} height="auto" /></p>

Haz clic en el dispositivo para ver todos los datos subidos. Luego, haz clic en `ADD TO DASHBOARD`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-dashboard.png" alt="pir" width={800} height="auto" /></p>

#### Agregar tarjeta de mapa

Antes de agregar la tarjeta de mapa, necesitas añadir primero una entidad de ubicación.

Abre el `File Editor` y navega al archivo `configuration.yaml`, y añade el siguiente código:

```cpp
template:
  - sensor:
      - name: "Device Location"
        state: >
          {{ states('sensor.latitude') }},{{ states('sensor.longitude') }}
        attributes:
          latitude: "{{ states('sensor.latitude') }}"
          longitude: "{{ states('sensor.longitude') }}"
```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/yaml2.png" alt="pir" width={800} height="auto" /></p>


:::tip
`name` puede personalizarse, y el valor en `states` debe coincidir con el ID de entidad de tu dispositivo.

Puedes verificar el ID de la entidad navegando a `Settings` -> `Devices and Services` -> `Entities`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/entity-id.png" alt="pir" width={600} height="auto" /></p>
:::

Haz clic en `ADD CARD` en tu panel (`Dashboard`).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-card.png" alt="pir" width={800} height="auto" /></p>

Elige la tarjeta de tipo `Map`.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/map-card.png" alt="pir" width={800} height="auto" /></p>



Copia el siguiente código en el `CODE EDITOR` y haz clic en `SAVE`:

```cpp
type: map
entities:
  - entity: sensor.device_location
```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/code-editor.png" alt="pir" width={800} height="auto" /></p>

:::tip
La `entidad` debe coincidir con el ID de entidad de tu dispositivo.  
Puedes verificar el ID de entidad navegando a `Ajustes` -> `Dispositivos y Servicios` -> `Entidades`.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/entity-location.png" alt="pir" width={600} height="auto" /></p>
:::

Ahora puedes verificar la ubicación en tiempo real en el mapa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/map-map.png" alt="pir" width={800} height="auto" /></p>

Todos los datos de la placa de desarrollo se visualizarán en el panel de Home Assistant.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/dog-locate.png" alt="pir" width={800} height="auto" /></p>


