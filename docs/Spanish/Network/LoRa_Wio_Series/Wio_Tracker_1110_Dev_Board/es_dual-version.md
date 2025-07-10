---
description: Wio Tracker Dual Stack Version
title:  Rastreo de Activos sin Interrupciones con Amazon Sidewalk y Redes LoRaWAN
keywords:
- Tracker
- AWS
- Sidewalk
- LoRaWAN
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/wio_tracker_dual_stack
sidebar_position: 8
sidebar_class_name: hidden
last_update:
  date: 05/21/2025
  author: Guillermo
---


# Rastreo de Activos sin Interrupciones con Amazon Sidewalk y Redes LoRaWAN

## Introducción

Experimenta una integración de red sin interrupciones con esta demostración de doble dispositivo. La configuración incluye la versátil placa de desarrollo Seeed Studio Wio Tracker y el robusto dispositivo rastreador Seeed Studio SenseCAP T1000-S, ambos mostrando transiciones fluidas entre redes LoRaWAN y Sidewalk para una cobertura óptima.





* **Soporte de Red Dual**: Con solo presionar un botón, cambia entre LoRaWAN y Sidewalk para mantener una conectividad persistente.
* **Conectado a la Nube**: Observa la transferencia de datos en tiempo real hacia AWS IoT Core, visualizada a través de una aplicación web de AWS en un monitor o pantalla de laptop.
* **Eficiencia con Batería**: Los dispositivos aseguran un funcionamiento constante, sin cables, para una experiencia verdaderamente móvil.

El proceso se divide en los siguientes pasos principales:

* [Instalación y Configuración del SDK](https://wiki.seeedstudio.com/wio_tracker_dual_stack#setup-toolchain)
* [Flasheo del Firmware](https://wiki.seeedstudio.com/wio_tracker_dual_stack#build-and-flash-the-demo)
* Configuración de AWS IoT Core
* Configuración de Amazon Location
* [Configuración de la Aplicación Web](https://wiki.seeedstudio.com/wio_tracker_dual_stack#building-web-app)




## Requisitos Previos

### Instalación del SDK de nRF Connect

Existen diferentes formas de instalar el SDK de nRF Connect, dependiendo de tu entorno de desarrollo preferido y la [herramienta de gestión del toolchain](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/installation/recommended_versions.html#toolchain-management-tools):

* Usando Visual Studio Code y la extensión nRF Connect para VS Code (recomendado)
* Usando la línea de comandos y nRF Util

**Paso 1: Actualiza el sistema operativo**

Antes de comenzar a configurar el entorno de desarrollo, instala las actualizaciones disponibles para tu sistema operativo. Consulta los [Requisitos](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/installation/recommended_versions.html#requirements) para obtener información sobre los sistemas operativos compatibles.

**Paso 2: Instalar prerrequisitos**


<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="VSc" label="Visual Studio Code">

  
* La versión más reciente del paquete de <a href="https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/installation/recommended_versions.html#requirements-clt">nRF Command Line Tools</a>. Descárgalo desde la página de <a href="https://www.nordicsemi.com/Software-and-Tools/Development-Tools/nRF-Command-Line-Tools">nRF Command Line Tools</a>.<br/>

* La versión más reciente de Visual Studio Code para tu sistema operativo desde la <a href="https://code.visualstudio.com/download">página de descarga de Visual Studio Code</a>.<br/>

* En Visual Studio Code, la versión más reciente del <a href="https://marketplace.visualstudio.com/items?itemName=nordic-semiconductor.nrf-connect-extension-pack">paquete de extensiones nRF Connect para VS Code</a>.

</TabItem>
<TabItem value="CLine" label="Línea de Comandos">

* La versión más reciente de <a href="https://www.nordicsemi.com/Products/Development-tools/nrf-util">nRF Util</a>, una herramienta de línea de comandos unificada para productos de Nordic.<br/>



<div className="tip" style={{backgroundColor: 'lightblue', padding: '1em', borderRadius: '0.5em'}}>
  <p style={{marginBottom: '0.5em'}}>
    <strong>Note:</strong>
  </p>
  <p style={{marginTop: '0'}}>
      Después de descargar el ejecutable nRF Util, muévelo a un directorios que se encuentra en el sistema <code>PATH</code>. En macOS y Linux, el archivo descargado necesitará permiso para ejecutarse, escribiendo <code>chmod +x nrfutil</code> o marcando la casilla en las propiedades del archivo.
  </p>
</div>

* La versión más reciente del paquete de <a href="https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/installation/recommended_versions.html#requirements-clt">nRF Command Line Tools</a>. Descárgala desde la <a href="https://www.nordicsemi.com/Software-and-Tools/Development-Tools/nRF-Command-Line-Tools">página de nRF Command Line Tools</a>.


<div className="tip" style={{backgroundColor: 'lightblue', padding: '1em', borderRadius: '0.5em'}}>
    <p style={{marginBottom: '0.5em'}}>
      <strong>Nota:</strong>
    </p>
    <p style={{marginTop: '0'}}>
      Después de descargar e instalar las herramientas, agrega nrfjprog al <code>PATH</code> del sistema en las variables de entorno.
    </p>
  </div>

</TabItem>
</Tabs>




**Paso 3: Instala el toolchain de nRF Connect SDK**

<Tabs>
<TabItem value="VScode" label="nRF Connect for Visual Studio Code">
  

* Abre la extensión **nRF Connect** en Visual Studio Code haciendo clic en su ícono en la <code>Barra de Actividades</code>.<br/><br/>
* En la <code>Vista de Bienvenida</code> de la extensión, haz clic en <code>Instalar Toolchain</code>.<br/><br/>
* Selecciona la versión del toolchain que deseas instalar. La versión del toolchain debe coincidir con la versión del SDK de nRF Connect con la que vas a trabajar. Usamos la versión <code>V2.5.0</code> (recomendada).<br/><br/>

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/bar2.png"/></div>
Después de instalar el toolchain, puedes acceder nuevamente a la opción <code>Install Toolchain</code> haciendo clic en <code>Manage toolchains</code>.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/manage-toolchain.png"/></div>

</TabItem>
<TabItem value="CL" label="Command Line">

* Abre una ventana de terminal.

* Ejecuta el siguiente comando para instalar el comando `toolchain-manager` de nRF Util:
 ```cpp
 nrfutil install toolchain-manager
 ```

* Ejecuta el siguiente comando para listar las instalaciones disponibles:
 ```cpp
 nrfutil toolchain-manager search
 ```

Las versiones de esta lista corresponden a las versiones del SDK de nRF Connect y se utilizarán en el siguiente paso.

* Ejecuta el siguiente comando para instalar la versión del toolchain correspondiente a la versión del SDK que elijas:
 ```cpp
 nrfutil toolchain-manager install --ncs-version version
 ```

 Por ejemplo:
 ```cpp
 nrfutil toolchain-manager install --ncs-version v2.5.0
 ```
Este comando instala el toolchain requerido para el SDK de nRF Connect versión v2.5.0 (recomendado).

:::tip
El toolchain se instala por defecto en:
- C:/ncs/toolchains en Windows
- ~/ncs/toolchains en Linux
- /opt/nordic/ncs/toolchains en macOS
:::

Para verificar la configuración actual, usa el siguiente comando: <code>nrfutil toolchain-manager config --show</code><br/>Para más información sobre estos comandos, puedes usar: <code>nrfutil toolchain-manager --help</code>.
  </TabItem>
</Tabs>



**Paso 4: Obtener el código del SDK de nRF Connect**


  <Tabs>
  <TabItem value="VScode4" label="nRF Connect for Visual Studio Code">

Para clonar el código del SDK de nRF Connect, completa los siguientes pasos:

* Abre la extensión **nRF Connect** en Visual Studio Code haciendo clic en su ícono en la <code>Barra de Actividades</code>.

* En la <code>Vista de Bienvenida</code> de la extensión, haz clic en <code>Manage SDKs</code>. Aparecerá una lista de acciones en el selector rápido de Visual Studio Code.

* Haz clic en <code>Install SDK</code>. Aparecerá la lista de versiones disponibles del SDK en el selector rápido de Visual Studio Code.

* Selecciona la versión del SDK que deseas instalar; nosotros usamos la versión `V2.5.0`.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/manage-sdk2.png"/></div>




La instalación de SDK comenzará y puede tomar varios minutos.

  </TabItem>
  <TabItem value="CLine4" label="Command Line">

Para clonar los repositorios, completa los siguientes pasos:

* En la línea de comandos, abre el directorio `ncs`. Por defecto, este se encuentra un nivel arriba del lugar donde instalaste el toolchain. Este directorio contendrá todos los repositorios del SDK de nRF Connect.

* Inicia el entorno del toolchain para tu sistema operativo usando el siguiente comando:

  Windows
  ```cpp
  nrfutil toolchain-manager launch --terminal
  ```
  Linux/macOS
  ```cpp
  nrfutil toolchain-manager launch --shell
  ```

* Determina el identificador de la revisión del SDK de nRF Connect con la que deseas trabajar. Consulta la tabla anterior para obtener más información. Cuando instales el SDK de nRF Connect por primera vez, se recomienda instalar las versiones más recientes del SDK y del toolchain.

* Inicializa west con la revisión del SDK de nRF Connect que deseas utilizar, reemplazando nRFConnectSDK_revision con el identificador correspondiente:

  ```cpp
  west init -m https://github.com/nrfconnect/sdk-nrf --mr nRFConnectSDK_revision
  ```
Por ejemplo:

  **Versión específica**: Para cambiar a la versión v2.5.0, introduce el siguiente comando:

  ```cpp
  west init -m https://github.com/nrfconnect/sdk-nrf --mr v2.5.0
  ```
  **Etiqueta de desarrollo**: Para cambiar a la etiqueta v1.9.2-dev1, introduce el siguiente comando:
  ```cpp
  west init -m https://github.com/nrfconnect/sdk-nrf --mr v1.9.2-dev1
  ```

  **Rama**: Para cambiar a la rama principal que incluye el estado más reciente del desarrollo, introduce el siguiente comando:
  ```cpp
  west init -m https://github.com/nrfconnect/sdk-nrf --mr main
  ```
Esto clonará el repositorio del manifiesto sdk-nrf dentro del directorio nrf.

Inicializar west con una revisión específica del archivo de manifiesto no bloquea tus repositorios en esa versión. Cambiar a otra rama o etiqueta en el repositorio sdk-nrf y ejecutar west update modificará la versión del SDK de nRF Connect con la que estás trabajando.


<div className="tip" style={{backgroundColor: 'lightblue', padding: '1em', borderRadius: '0.5em'}}>
    <p style={{marginBottom: '0.5em'}}>
      <strong>Nota:</strong>
    </p>
    <p style={{marginTop: '0'}}>
      Si recibes un mensaje de error al ejecutar west, actualiza west a la versión más reciente. Ve a <a href="https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/zephyr/develop/west/troubleshooting.html#west-troubleshooting">Solución de problemas con West</a> en la documentación de Zephyr para obtener más información.
    </p>
  </div>
  
  

* Introduce el siguiente comando para clonar los repositorios del proyecto:
  ```cpp
  west update
  ```

Dependiendo de tu conexión, esto puede tardar un poco.

* Exporta un paquete CMake de Zephyr. Esto permite que CMake cargue automáticamente el código base necesario para compilar aplicaciones del SDK de nRF Connect:
  ```cpp
  west zephyr-export
  ```

Consulta [Instalación del SDK de nRF Connect](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/installation/install_ncs.html#id9) para más detalles.

</TabItem>
</Tabs>


### Configuración del entorno Sidewalk

Sigue estos pasos para descargar la aplicación Sidewalk para el SDK de nRF Connect:

* Abre una ventana de terminal. La estructura de tu directorio debería verse así:

```cpp
.
|___ .west
|___ bootloader
|___ modules
|___ nrf
|___ nrfxlib
|___ zephyr
|___ ...
```

* Asegúrate de que la ruta del manifiesto apunte a west.yml dentro del directorio nrf:

```cpp
west manifest --path
/path-to-ncs-folder/nrf/west.yml
```
En caso de que la ruta del manifiesto apunte a un archivo diferente, usa el siguiente comando:

```cpp
west config manifest.path nrf
```
* Habilita el filtro de grupo Sidewalk para west.

```cpp
west config manifest.group-filter "+sidewalk"
```

Verifica la presencia de Sidewalk en west:

```cpp
west list sidewalk
sidewalk     sidewalk                     <sidewalk_revision> https://github.com/nrfconnect/sdk-sidewalk
```

* Actualiza todos los repositorios:
```cpp
west update
```

Dependiendo de tu conezión, la actualización tomará algo de tiempo.

* Instala los requerimientos de Python para Sidewalk.
```cpp
pip install -r sidewalk/requirements.txt
```

### Agregar LR11xx a la Extensión Sidewalk del SDK de nRF Connect

Este repositorio contiene el controlador de software que permite a la familia de silicio [LR11xx](https://www.semtech.com/products/wireless-rf/lora-edge) soportar el protocolo Sidewalk cuando se combina con el [MCU Nordic nRF52840](https://www.nordicsemi.com/Products/Development-hardware/nrf52840-dk) y el SDK de nRF Connect. El controlador se ofrece en forma binaria, como una biblioteca estática que implementa las interfaces de la "Capa de Abstracción de Plataforma" necesarias para soportar conectividad LoRa o FSK. La biblioteca estática contiene una implementación completa del controlador SWDR001 (LR11xx Driver) de Semtech, que puede usarse para acceder a otras funciones del silicio LR11xx, como escaneo y localización WIFI y GNSS.


* Descarga el [SWDM016](https://drive.google.com/drive/folders/1vHJVEFgyx4arHHPlSjdMkffVStnTpHqg?usp=sharing)

* Con tu directorio de trabajo en el repositorio clonado de Nordic, en el directorio raíz, es decir, ``~/ncs/<versión>/sidewalk``:

 ```cpp
 patch -p1 < ../nRF52840_LR11xx_driver_v010000.diff
 ```
La ruta del directorio padre `..` asume que colocaste el archivo diff ahí, de lo contrario puedes especificar la ruta completa a su ubicación.

* Copia las bibliotecas del controlador de radio ``lib*.a`` dentro del proyecto sidewalk a ``~/ncs/<versión>/sidewalk/lib/lora_fsk/``  
Se proporcionan dos bibliotecas, una con ``LOG_RUNTIME_FILTERING`` habilitado y otra sin él.

* Copia la carpeta ``~/template_lbm_wio_tracker/boards/arm/wio_tracker_1110`` a ``~/ncs/v2.5.0/zephyr/boards/arm``.


```cpp
·
├─── .west/
├─── modules/
├─── nrf/
├─── ...
└─── zephyr/
     └─── Boards/
          └─── arm/
               └─── wio_tracker_1110/
```

### Crear Recursos

**Paso 1: Desplegar el entorno Cloud9**

En esta sección crearás todos los recursos que necesitamos antes de comenzar. Como primer paso crearás un espacio de trabajo Cloud9 que usarás para construir y desplegar otros recursos. Luego desplegarás una pila CDK que contiene todos los recursos backend para la aplicación Asset Tracker. Finalmente, instalarás todas las dependencias del frontend y configurarás la aplicación.

* Abre la [Consola AWS Cloud9](https://us-east-1.console.aws.amazon.com/cloud9/home?region=us-east-1) y haz clic en `Create Environment`.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/cloud-9-environment.png"/></div>

* Deja todas las demás configuraciones por defecto excepto el **Tipo de instancia**. Selecciona `m5.large`.

<div align="center"><img width="{600}" src="https://static.us-east-1.prod.workshops.aws/public/f3adb45a-50d1-499b-a20d-93bbbb82ee26/static/images/001/002/c9.3.png"/></div>

**Paso 2: Configurar los prerrequisitos**

* Abre el IDE de Cloud9.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/open-cloud9.png"/></div>

* Clona el repositorio de GitHub en el terminal de tu entorno Cloud9 ejecutando el siguiente comando:

 ```cpp
 git clone --recurse-submodules https://github.com/aws-samples/aws-iot-asset-tracker-demo.git /home/ec2-user/environment/asset-tracking-workshop
 ``` 
<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/open-could9.png"/></div>

* Navega al directorio de la aplicación de ejemplo:

 ```cpp
 cd ~/environment/asset-tracking-workshop
 ```

* Redimensiona el volumen EBS de la instancia EC2 subyacente.  

 ```cpp
 npm run utils:resizeC9EBS
 ```

* Instala las dependencias del proyecto:  
 ```cpp
 npm ci
 ```

* Despliega la infraestructura backend:  
 ```cpp
 # Prepare the AWS account for CDK
 npm run infra:bootstrap
 # Deploy the backend resources
 npm run infra:deploy
 ```

* Crea un archivo de configuración:  

 ```cpp
 npm run utils:createConfig
 ```




## Configuración LoRaWAN

### Agregar Gateway LoRaWAN en AWS

Consulta este [Get Started](https://wiki.seeedstudio.com/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-AWS-IoT/#add-gateway) para agregar el [gateway SenseCAP M2 Multi-Platform](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html) a AWS IoT Core.

### Agregar Dispositivo LoRaWAN en AWS

**Paso 1: Definir las llaves**

Define el `DevEUI/JoinEUI/APPkey` y la `REGIÓN` en `src/lorawan_v4/example_options.h`.

:::tip
JoinEUI también conocido como AppEUI
:::


<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/3-params.png"/></div>

**Paso 2: Crear perfiles**

Inicia sesión en la [Consola de AWS IoT](https://console.aws.amazon.com/iot/home), navega a `Devices` y haz clic en `Profiles`.

* Perfil de dispositivo

Los perfiles de dispositivo definen las capacidades del dispositivo y los parámetros de arranque que el servidor de red utiliza para configurar el servicio de acceso radio LoRaWAN. Incluye la selección de parámetros como la banda de frecuencia LoRa, la versión de parámetros regionales LoRa y la versión MAC del dispositivo.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/device-profiles.png"/></div>


Para conocer las diferentes bandas de frecuencia, consulta [Considerar la selección de bandas de frecuencia LoRa para tus gateways y conexión de dispositivos](https://docs.aws.amazon.com/iot-wireless/latest/developerguide/lorawan-rfregion-permissions.html#lorawan-frequency-bands).


* Perfil de servicio


Recomendamos dejar habilitada la opción `AddGWMetaData` para que recibas metadatos adicionales del gateway por cada carga útil, como RSSI y SNR de la transmisión de datos.


<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/service-profiles.png"/></div>

**Paso 3: Agregar dispositivo**

Navega a `LPWAN devices` > `Devices` y haz clic en `Add wireless device`.

`Especificación del dispositivo inalámbrico`: OTAAv1.0x

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS20.PNG" alt="pir" width={800} height="auto" /></p>

Selecciona el perfil del dispositivo y destino que creaste en el paso anterior.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/device-eui2.png" alt="pir" width={800} height="auto" /></p>


Navega a la página de Dispositivos (Devices) y selecciona el dispositivo que agregaste anteriormente.

## Configuración de Sidewalk

### Configuración de un gateway Sidewalk (Opcional)

Puedes configurar un gateway Sidewalk, configurarlo y asociar tu gateway con tu cuenta de Amazon. Tu endpoint Sidewalk se conectará y comunicará con el gateway Sidewalk después de que esté registrado en Amazon Sidewalk.

Consulta [Configuración de un gateway Sidewalk](https://docs.sidewalk.amazon/getting-started/sidewalk-onboard-prereq-gateway.html) para más detalles.

### Configuración de tu dispositivo Sidewalk

#### Añade tu dispositivo Sidewalk

**Paso 1: Añade el perfil de dispositivo y el dispositivo final Sidewalk**

Antes de crear un dispositivo inalámbrico, primero crea un perfil de dispositivo.

Navega a la [pestaña Sidewalk del hub de Dispositivos](https://console.aws.amazon.com/iot/home#/wireless/devices?tab=sidewalk), selecciona `Provision device` y realiza los siguientes pasos.

**Paso 2: Obtén el archivo JSON del dispositivo**

Para obtener el archivo JSON para provisionar tu dispositivo Sidewalk:

* Ve al [hub de dispositivos Sidewalk](https://console.aws.amazon.com/iot/home#/wireless/devices?tab=sidewalk).

* Selecciona el dispositivo que agregaste a AWS IoT Core para Amazon Sidewalk para ver sus detalles.

* Descarga el archivo JSON seleccionando `Download device JSON file` en la página de detalles del dispositivo agregado.

Se descargará un archivo `certificate.json` que contiene la información necesaria para provisionar tu dispositivo final. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/dual/download-json.png" alt="pir" width={800} height="auto" /></p>
 


**Paso 3: Provisiona tu endpoint Sidewalk**

**Genera la imagen binaria**

* Instala el archivo de requerimientos

Ve a la carpeta del SDK de Sidewalk `$[Amazon Sidewalk repository]/tools/scripts/public/provision/` y ejecuta el siguiente comando para instalar el archivo `requirements`.

 ```cpp
 pip3 install -r requirements.txt
 ```


* Genera la imagen binaria de fabricación

Ejecuta el script `provision.py` para generar el archivo de imagen binaria de fabricación que se usará para provisionar la placa de desarrollo que estés utilizando como endpoint Sidewalk.

* Si estás usando el archivo JSON combinado que obtuviste desde la consola de AWS IoT, utiliza el parámetro certificate_json para especificar este archivo como entrada al ejecutar el script de provisión.

 ```cpp
 python3 provision.py aws --output_bin mfg.bin --certificate_json certificate.json \ 
    --config config/[device_vendor]/[device]_dk/config.yaml
 ```
 Si estás usando los archivos JSON separados que obtuviste como respuestas de las operaciones API GetDeviceProfile y GetWirelessDevice, utiliza los parámetros wireless_device_json y device_profile_json para especificar estos archivos como entrada al ejecutar el script de provisión.

 ```cpp
 python3 provision.py aws --output_bin mfg.bin \  
    --wireless_device_json wireless_device.json \
    --device_profile_json device_profile.json \ 
    --config config/[device_vendor]/[device]_dk/config.yaml
 ```

Deberás ver la siguiente salida:

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/gen-files.png"/></div>



* Flashea el archivo mfg.hex

  Tu archivo de provisión generalmente estará ubicado en el directorio `EdgeDeviceProvisioning`.

  Para flashear la imagen binaria, usa la dirección `0xFD000` para cargar la imagen binaria en el Nordic Semiconductor HDK. Para más información sobre cómo flashear la imagen binaria, consulta la documentación de Nordic Semiconductor.

**Paso 4: Compilar y flashear la demo**

* Abre una ventana de terminal.

* Navega al directorio `template_lbm_wio_tracker`.

  Por ejemplo:


  ```cpp
  cd /opt/nordic/ncs/v2.5.0/sidewalk/samples/template_lbm_wio_tracker
  ```

* Construye la aplicación utilizando el siguiente comando west

 ```cpp
 west build --board wio_tracker_1110 -- -DRADIO=LR1110_SRC
 ```
o con la librería pre-compilada del driver de radio:
 ```cpp
 west build --board wio_tracker_1110 -- -DRADIO=LR1110
 ```

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/comparing.png"/></div>


* Flashea la aplicación usando el siguiente comando flash:

 ```cpp
 west flash
 ```

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/flash-suc.png"/></div>





### Registro de Sidewalk

Después de haber provisionado el endpoint Sidewalk, es necesario registrarlo para que pueda comunicarse a través de la red Sidewalk.

Para registrar tu endpoint Sidewalk, puedes usar el registro automático sin contacto con Sidewalk Frustration Free Networking (FFN), o registrar manualmente tu dispositivo usando una Mac o una máquina nativa Ubuntu que ejecute el script de registro.

| Criterio                          | Registro automático (usando Sidewalk FFN)                                      | Registro manual                                 |
|----------------------------------|-------------------------------------------------------------------------------|------------------------------------------------|
| Asociación de usuario y endpoint | Este método no requiere asociación entre el endpoint Sidewalk y un usuario. El endpoint puede unirse a la red Sidewalk sin estar asociado a ningún usuario. | Este método requiere asociación entre el endpoint Sidewalk y la cuenta Amazon del usuario. |
| LWA (Login with Amazon)           | No es requerido.                                                              | Es requerido para vincular la cuenta Amazon del usuario con la cuenta AWS usada por el desarrollador del endpoint Sidewalk. |

**Para realizar el registro usando Sidewalk FFN:**

* Tu gateway Sidewalk y el endpoint deben estar encendidos.
* El gateway debe estar inscrito en Sidewalk y cerca del endpoint. Recomendamos mantener los dispositivos a menos de 10 metros de distancia.

Para registro manual de Sidewalk y más detalles, consulta [aquí](https://docs.sidewalk.amazon/provisioning/iot-sidewalk-register-endpoint.html).

### Cambio de red

La red predeterminada es LoRaWAN, presiona el `User Button` para cambiar de red.

 <div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/click-button.png"/></div>


### Ver Mensaje

#### Agregar Destino

En la [consola de IoT Core](https://us-east-1.console.aws.amazon.com/iot/home?region=us-east-1#/home), selecciona `LPWAN devices` en el menú lateral y luego `Destinations`.

Selecciona `Edit` y elige `Publish to AWS IoT Core message broker`. En el cuadro de texto para el topic, ingresa **assets** como el Tema MQTT.

En `Permissions` selecciona `Create a new service role` y deja el campo `Role name` en blanco.

- **ExpressionType**: `MqttTopic`
- **Expression**: `EmbeddedWorldTrackerDemo`

#### Agregar Regla de Decodificador

Navega a la pestaña `Message routing` → `Rules`, y haz clic en el botón `Create Rule`.


<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules.png"/></div>

Nombra tu regla y envíala.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules2.png"/></div>


Desde la regla de IoT Core, selecciona la función `Lambda` y luego haz clic en `Create a Lambda function`.


Crear función desde cero<br/>
`Function name`: Nombra tu función.<br/>
`Runtime`: Node.js 14.x<br/>
`Architecture`: x86_64<br/>

Haz clic en el botón `Create function` para crear una nueva función.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cre-function.png"/></div>

En la página de configuración de la función que aparece, elimina todo el código y reemplázalo con el siguiente script. Luego, haz clic en el botón `Deploy`.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/decod.png"/></div>



<details>
<summary>Código Lambda</summary>

```javascript
const {IoTDataPlaneClient, PublishCommand} = require("@aws-sdk/client-iot-data-plane");
const {IoTWirelessClient, GetWirelessDeviceCommand} = require("@aws-sdk/client-iot-wireless");
const client = new IoTDataPlaneClient({
    "region": "us-east-1"
});
const wireless_client = new IoTWirelessClient({
    "region": "us-east-1"
});

function decodeUplink(input) {
    const originMessage = input.toLocaleUpperCase()
    const decoded = {
        valid: true,
        err: 0,
        payload: input,
        messages: []
    }
    let measurement = messageAnalyzed(originMessage)
    if (measurement.length === 0) {
        decoded.valid = false
        return {data: decoded}
    }

    for (let message of measurement) {
        if (message.length === 0) {
            continue
        }
        let elements = []
        for (let element of message) {
            if (element.errorCode) {
                decoded.err = element.errorCode
                decoded.errMessage = element.error
            } else {
                elements.push(element)
            }
        }
        if (elements.length > 0) {
            decoded.messages.push(elements)
        }
    }
    return {data: decoded}
}

function messageAnalyzed(messageValue) {
    try {
        let frames = unpack(messageValue)
        let measurementResultArray = []
        for (let i = 0; i < frames.length; i++) {
            let item = frames[i]
            let dataId = item.dataId
            let dataValue = item.dataValue
            let measurementArray = deserialize(dataId, dataValue)
            measurementResultArray.push(measurementArray)
        }
        return measurementResultArray
    } catch (e) {
        return e.toString()
    }
}

function unpack(messageValue) {
    return [{dataId: 0, dataValue: messageValue}]
}

function deserialize(dataId, dataValue) {
    let measurementArray = null
    measurementArray = [
        {
            measurementId: '4198',
            type: 'Latitude',
            measurementValue: parseFloat(getSensorValue(dataValue.substring(0, 8), 1000000))
        },
        {
            measurementId: '4197',
            type: 'Longitude',
            measurementValue: parseFloat(getSensorValue(dataValue.substring(8, 16), 1000000))
        },
        {
            measurementId: '4097',
            type: 'Air Temperature',
            measurementValue: getSensorValue(dataValue.substring(16, 20), 10)
        },
        {
            measurementId: '4098',
            type: 'Air Humidity',
            measurementValue: getSensorValue(dataValue.substring(20, 22))
        }
    ]
    return measurementArray
}

function getSensorValue(str, dig) {
    if (str === '8000') {
        return null
    } else {
        return loraWANV2DataFormat(str, dig)
    }
}

function bytes2HexString(arrBytes) {
    var str = ''
    for (var i = 0; i < arrBytes.length; i++) {
        var tmp
        var num = arrBytes[i]
        if (num < 0) {
            tmp = (255 + num + 1).toString(16)
        } else {
            tmp = num.toString(16)
        }
        if (tmp.length === 1) {
            tmp = '0' + tmp
        }
        str += tmp
    }
    return str
}

function loraWANV2DataFormat(str, divisor = 1) {
    let strReverse = bigEndianTransform(str)
    let str2 = toBinary(strReverse)
    if (str2.substring(0, 1) === '1') {
        let arr = str2.split('')
        let reverseArr = arr.map((item) => {
            if (parseInt(item) === 1) {
                return 0
            } else {
                return 1
            }
        })
        str2 = parseInt(reverseArr.join(''), 2) + 1
        return '-' + str2 / divisor
    }
    return parseInt(str2, 2) / divisor
}

function bigEndianTransform(data) {
    let dataArray = []
    for (let i = 0; i < data.length; i += 2) {
        dataArray.push(data.substring(i, i + 2))
    }
    return dataArray
}

function toBinary(arr) {
    let binaryData = arr.map((item) => {
        let data = parseInt(item, 16)
            .toString(2)
        let dataLength = data.length
        if (data.length !== 8) {
            for (let i = 0; i < 8 - dataLength; i++) {
                data = `0` + data
            }
        }
        return data
    })
    return binaryData.toString().replace(/,/g, '')
}

exports.handler = async (event) => {
    try {
        let device_id = event['WirelessDeviceId'];
        let lorawan_info = null;
        let sidewalk_info = null;
        let payload = null
        let timestamp = null

        let queryDeviceRequest = {
            Identifier: device_id,
            IdentifierType: "WirelessDeviceId"
        }
        let deviceInfo = await wireless_client.send(new GetWirelessDeviceCommand(queryDeviceRequest))
        console.log("device_info：" + JSON.stringify(deviceInfo))
        if (!deviceInfo || deviceInfo.name) {
            return {
                statusCode: 500,
                body: 'can not find this wirelessDeviceId: ' + device_id
            };
        }
        let device_name = deviceInfo.Name

        if (event["WirelessMetadata"]["LoRaWAN"]) {
            lorawan_info = event["WirelessMetadata"]["LoRaWAN"]
            timestamp = lorawan_info["Timestamp"]
            let bytes = Buffer.from(event["PayloadData"], 'base64');
            payload = bytes2HexString(bytes)
        } else if (event["WirelessMetadata"]["Sidewalk"]) {
            timestamp = new Date().getTime()
            let origin = new Buffer(event["PayloadData"], 'base64')
            payload = origin.toString('utf8')
        }

        console.log(`event.PayloadData: ${payload}`)
        const resolved_data = decodeUplink(payload);
        
        // publish all measurement data
        const input = { // PublishRequest
            topic: `tracker/EmbeddedWorldTrackerDemo/sensor/${device_id}`,
            qos: 0,
            retain: false,
            payload: JSON.stringify({
                DeviceName: "assettracker",
                timestamp: timestamp,
                data: resolved_data.data,
                WirelessDeviceId: device_id,
                PayloadData: event['PayloadData'],
                WirelessMetadata: event["WirelessMetadata"]
            })
        };

        const command = new PublishCommand(input);
        const response = await client.send(command);
        console.log("response: " + JSON.stringify(response));
        return {
            statusCode: 200,
            body: 'Message published successfully' + JSON.stringify(event)
        };
    } catch (error) {
        console.error('Error publishing message:', error);

        return {
            statusCode: 500,
            body: 'Error publishing message'
        };
    }
};
```
</details>



<div align="center"><img width="{600}" src="https://static.us-east-1.prod.workshops.aws/public/f3adb45a-50d1-499b-a20d-93bbbb82ee26/static/images/004/001/lambda.1.png"/></div>

Ahora regresa a `Device Destination`, ingresa un nombre para la regla y escribe el nombre de la función que acabas de crear.



Luego, navega a la `AWS IoT Core Console`, selecciona `MQTT Test Client` y suscríbete al topic.





#### Agregar regla para el tracker

Repite los pasos anteriores para crear una nueva regla y copia el siguiente código Lambda:

<details>
<summary>Código Lambda</summary>

```javascript
const {IoTDataPlaneClient, PublishCommand} = require("@aws-sdk/client-iot-data-plane");

const {LocationClient, BatchUpdateDevicePositionCommand} = require("@aws-sdk/client-location")

const {IoTWirelessClient, UpdateResourcePositionCommand } = require("@aws-sdk/client-iot-wireless");
const client = new IoTDataPlaneClient({
    "region": "us-east-1"
});
const wireless_client = new IoTWirelessClient({
    "region": "us-east-1"
});

exports.handler = async (event) => {
    console.log(`message received: ${JSON.stringify(event)}`)
    let device_id = event['WirelessDeviceId']
    let device_name = event['DeviceName']
    let measurements = event['data']['messages']
    let resolver_time = event['timestamp']
    let network = 1; // 1: lorawan 2: sidewalk
    if (event["WirelessMetadata"] && event["WirelessMetadata"]["Sidewalk"]) {
        network = 2
    }

    let longitude;
    let latitude;
    let gps_data = null
    let sensor_map = {}
    if (measurements && measurements.length > 0) {
        for (let i = 0; i < measurements.length; i++) {
            for (let j = 0; j < measurements[i].length; j++) {
                if (measurements[i][j].measurementId === "4097") {
                    sensor_map["Temperature"] = measurements[i][j].measurementValue;
                }
                if (measurements[i][j].measurementId === "4098") {
                    sensor_map["Humidity"] = measurements[i][j].measurementValue;
                }
                if (measurements[i][j].measurementId === "4197") {
                    longitude = measurements[i][j]["measurementValue"];
                }
                if (measurements[i][j].measurementId === "4198") {
                    latitude = measurements[i][j]["measurementValue"];
                }

                if (latitude && longitude) {
                    try {
                        gps_data = {
                            "type": "Point",
                            "coordinates": [longitude, latitude]
                            // "coordinates": [33.3318, -22.2155, 13.123]
                        }
                    } catch (e) {
                        console.log(`===>error`, e)
                    }
                }
            }
        }
    }

    if (gps_data) {
        console.log(`update device location : ${JSON.stringify(gps_data)}`)
        await updateDevicePosition(gps_data, device_id);
        const input = { // PublishRequest
            topic: `tracker/EmbeddedWorldTrackerDemo/location/${device_id}`,
            qos: 0,
            retain: false,
            payload: JSON.stringify({
                timestamp: resolver_time,
                deviceId: device_id,
                deviceName: device_name,
                latitude: gps_data.coordinates[1],
                longitude: gps_data.coordinates[0],
                positionProperties: {'batteryLevel': 90, "sensor:": 60}
            })
        };
        const command = new PublishCommand(input);
        const response = await client.send(command);
        console.log("mqtt push response: " + JSON.stringify(response));

        let locationClient = new LocationClient()
        let location_info = {
            TrackerName: 'AssetTracker',
            Updates: [
                {
                    DeviceId: 'assettracker',
                    SampleTime: new Date(resolver_time),
                    Position: [
                        gps_data.coordinates[0], gps_data.coordinates[1]
                    ],
                    Accuracy: {
                        Horizontal: 1,
                    },
                    PositionProperties: {
                        "context": JSON.stringify({net: network}),
                        "sensor": JSON.stringify(sensor_map)
                    }
                }
            ]
        }
        let loc_response = await locationClient.send(new BatchUpdateDevicePositionCommand(location_info))
        console.log("loc update response: " + JSON.stringify(loc_response));

    }
}

async function updateDevicePosition(gps_data, device_id) {
    const input = { // UpdateResourcePositionRequest
        ResourceIdentifier: device_id, // required
        ResourceType: "WirelessDevice", // required
        GeoJsonPayload: JSON.stringify(gps_data),
    };
    const command = new UpdateResourcePositionCommand(input);
    const wireless_response = await wireless_client.send(command);
    console.log(wireless_response)
}
```
</details>



## Construcción de la Aplicación Web

Vamos a desplegar los recursos necesarios de Amazon Location Service para mostrar nuestro dispositivo en un mapa.

### Crear el Mapa

Como primer paso, necesitarás crear un nuevo recurso de mapa en Amazon Location Service usando la consola de AWS.

* Abre la [Consola de Amazon Location Service](https://console.aws.amazon.com/location/home).

* Luego, expande la barra de navegación en el lado izquierdo de la pantalla y selecciona Maps.

* En esta pantalla, crea un nuevo mapa:

* Ingresa el nombre del mapa y selecciona el estilo de mapa `HERE Explore`, después haz clic en `Create map`.


<div align="center"><img width="{600}" src="https://static.us-east-1.prod.workshops.aws/public/f3adb45a-50d1-499b-a20d-93bbbb82ee26/static/images/003/create-map.2.png"/></div>

### Crear Calculadora de Rutas

* Abre la [Consola de Amazon Location Service](https://console.aws.amazon.com/location/home).

* Luego, expande la barra de navegación en el lado izquierdo de la pantalla y selecciona `Route calculators`.


<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/router-cal.png"/></div>



Continúa seleccionando `HERE` como Proveedor de Datos, y haz clic en el botón `Create route calculator`



<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/create-router.png"/></div>

### Crear Rastreador

Navega a **Trackers** -> **Create tracker**:

Ingresa el nombre del rastreador y selecciona `Time-based filtering` en el filtrado de posición.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/time-based.png"/></div>

Luego, desplázate hacia abajo y activa la opción `Enable EventBridge events` en la configuración de EventBridge, y haz clic en `Create tracker`.


<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/enable-bridge.png"/></div>


### Crear Colección de Geocercas

Navega a `Geofence collections` y haz clic en `create geofence collection`.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/geolocate.png"/></div>



## Mostrar la Aplicación Web

### Desplegar la App en CloudFront

* En tu terminal de Cloud9, navega a `/home/ec2-user/environment/asset-tracking-workshop`:

 ```cpp
 cd /home/ec2-user/environment/asset-tracking-workshop
 ```

* Corre el siguiente comando:

 ```cpp
 npm run frontend:publish
 ```

* Una vez completado, recibirás el URL del sitio web
 

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/web-url.png"/></div>


* Navega a esta URL en tu navegador para ver tu aplicación de rastreo.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/s3-map.png"/></div>




## Recursos

[SWDM016](https://drive.google.com/drive/folders/1vHJVEFgyx4arHHPlSjdMkffVStnTpHqg?usp=sharing)

[template_lbm_wio_tracker](https://drive.google.com/drive/folders/1UVte1UbfFor1remgAcpfmCHSKXvOGyYn)