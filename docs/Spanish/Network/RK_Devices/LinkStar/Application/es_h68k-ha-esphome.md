---
description: Building a smart home control centre around Home Assistant
title: Construyendo un centro de control para el hogar inteligente con Home Assistant
keywords:
  - LinkStar
  - Getting started
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/h68k-ha-esphome
last_update:
  date: 06/10/2025
  author: Guillermo
---

<p><meta name="google-site-verification" content="2bq3L0F_PFVokQM-qT-al7x9FcSNJOO8TtJfAHW43lE" /></p>

# Construyendo un centro de control para el hogar inteligente con Home Assistant

En este artículo detallaremos cómo configurar Home Assistant en el nuevo producto LinkStar H68K de Seeed Studio y desplegar el entorno ESPHome. ESPHome es un servicio muy común en Home Assistant. Debido a las limitaciones del sistema de soft routing, usaremos ESPHome como ejemplo para guiarte en un método inteligente para instalar este servicio.

## Comenzando

Si deseas seguir este tutorial paso a paso, necesitarás preparar lo siguiente.

<table align="center">
 <tr>
     <th>LinkStar H68K con Wi-Fi 6</th>
      <th>reRouter CM4 1432 (Opcional)</th>
      <th>XIAO ESP32C3</th>
 </tr>
  <tr>
      <td><div align="center"><img width ={210} src="https://files.seeedstudio.com/wiki/LinkStar/OVerview.jpg"/></div></td>
      <td><div align="center"><img width ={210} src="https://files.seeedstudio.com/wiki/Mini_Router/mini_router_overview.png"/></div></td>
      <td><div align="center"><img width ={100} src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png"/></div></td>
  </tr>
 <tr>
      <td align = "center"><a href="https://www.seeedstudio.com/LinkStar-H68K-1432-p-5501.html">Consigue uno ahora</a></td>
      <td align = "center"><a href="https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM4-Case-p-5029.html">Consigue uno ahora</a></td>
      <td align = "center"><a href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html">Consigue uno ahora</a></td>
 </tr>
</table>

*El reRouter CM4 1432 también es compatible con este tutorial. Puedes comprar LinkStar o reRouter.

El objetivo de este proyecto es instalar Home Assistant y ESPHome usando el servicio Docker de LinkStar, y luego configurar un hotspot de LinkStar para conectarse a LinkStar usando las capacidades WiFi del XIAO ESP32C3 para completar la red.

Luego, combinado con el vasto ecosistema Grove, podrás crear aún más posibilidades en Home Assistant.

El contenido de este tutorial cubrirá ampliamente los siguientes pasos:

1. [Configurar el entorno Docker en LinkStar OpenWRT](#configure-home-assistant-panel)
2. [Instalación y configuración de Home Assistant y ESPHome](#installation-and-configuration-of-home-assistant-esphome)
3. [Agregar Seeed Studio XIAO ESP32C3 a ESPHome](#add-seeed-studio-xiao-esp32c3-to-esphome)
4. [Módulos Grove con ESPHome y Home Assistant](#grove-modules-with-esphome-and-home-assistant)

## Configurar el entorno Docker en LinkStar OpenWRT

### Paso 1. Instalar OpenWRT en LinkStar

Hemos detallado cómo instalar varios sistemas en LinkStar en la Wiki de LinkStar. En este tutorial tomaremos como ejemplo el sistema OpenWRT y explicaremos cómo instalar el contenedor Home Assistant asegurando que LinkStar funcione como enrutador suave.

- [Flashear OpenWRT en la tarjeta TF](https://wiki.seeedstudio.com/linkstar-install-system/#flash-openwrt-to-the-tf-card)
- [Flashear OpenWRT en eMMC](https://wiki.seeedstudio.com/linkstar-install-system/#flash-openwrt-to-emmc)

Por favor, selecciona arriba la ubicación del sistema donde deseas instalar OpenWRT para LinkStar.

### Paso 2. Configurar la red de LinkStar

Conéctate a LinkStar mediante un cable de red e ingresa la dirección IP: `192.168.100.1` en tu navegador para acceder al backend operativo de OpenWRT.

La contraseña inicial de la cuenta es:

```
Account: root
Password: password
```

Luego necesitamos conectar LinkStar a Internet.

Necesitas comprar un LinkStar con red inalámbrica, para que puedas elegir conectar un cable de red a LinkStar o usar WiFi.

- Si es red por cable, configura tu red según las instrucciones de tu operador.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/53.png"/></div>

- Si quieres usar una LAN inalámbrica, puedes buscar una red en las opciones de **Wireless**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/54.png"/></div>

Después de eso, solo ingresa tu contraseña de red, haz clic en **Save and Apply**.

Asegúrate de tener una buena conexión antes de continuar con los siguientes pasos.

### Paso 3. Asignar más espacio a Docker

Por defecto, Docker tiene solo unos 250MB, lo cual no es suficiente para instalar las imágenes, así que primero necesitamos ampliar la capacidad para Docker.

Haz clic en **System** --> **Disk Man** --> **EDIT**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/1.png"/></div>

En la última línea, escribe el tamaño del espacio a agregar en la columna END SECTOR. En mi caso, es `+20G`. Luego haz clic en el botón **NEW**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/2.png"/></div>

Selecciona el formato **ext4** y después haz clic en **FORMAT**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/3.png"/></div>

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/4.png"/></div>

Cuando termine, verás que se ha añadido un espacio nuevo de 20GB. Sin embargo, es un espacio libre; necesitas montarlo para Docker.

Luego elige **System** --> **Mount Points**, encuentra la sección **Mount Point**, y haz clic en **ADD**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/5.png"/></div>

Elige el espacio nuevo que acabas de crear.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/6.png"/></div>

Selecciona el punto de montaje **Use as Docker data (/opt)**. No olvides marcar la casilla **Enable this mount**, luego haz clic en **SAVE & APPLY**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/7.png"/></div>

Todas las configuraciones para la expansión están completas, solo necesitas reiniciar para que sea efectivo.

Selecciona **System** --> **Reboot**, haz clic en el botón **PERFORM REBOOT**. Espera a que OpenWRT se reinicie y vuelve a iniciar sesión.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/8.png"/></div>

## Instalación y configuración de Home Assistant y ESPHome

### Paso 4. Instalar Home Assistant con Docker

Una mejor forma de instalar Home Assistant en OpenWRT es hacerlo mediante Docker, lo cual garantiza que LinkStar sea estable como enrutador suave y además permite desplegar Home Assistant.

Todo lo que necesitamos hacer es descargar una imagen específica de Home Assistant. Esta imagen también nos servirá más adelante para instalar el servicio ESPHome.

```
homeassistant/qemuarm-64-homeassistant:latest
```

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/12.png"/></div>

Usamos la imagen descargada para crear un contenedor.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/11.png"/></div>

En la página donde se crea el contenedor, debemos hacer algunas configuraciones simples:

- Nombre del contenedor: el nombre que desees
- Imagen de Docker: selecciona la imagen descargada **qemuarm-64-homeassistant**
- Red: selecciona el modo **host**
- Variables de entorno (-e): tus variables de entorno (si necesitas)

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/13.png"/></div>

Una vez llenados los campos anteriores, haz clic en Guardar y aplicar. Verás que el contenedor ha sido creado. Ahora simplemente inícialo.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/14.png"/></div>

### Paso 5. Instalar ESPHome con Docker

Como hemos instalado Home Assistant como contenedor, no podemos simplemente descargar ESPHome desde la tienda de complementos, por lo tanto, necesitamos una solución alternativa.

Repitiendo los pasos anteriores, descargamos la imagen de ESPHome:

```
esphome/esphome:latest
```

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/17.png"/></div>

En la página donde se crea el contenedor, configuramos lo siguiente:

- Nombre del contenedor: el nombre que desees
- Imagen de Docker: selecciona la imagen descargada **esphome**
- Red: selecciona el modo **host**
- Variables de entorno (-e): tus variables de entorno (si necesitas)

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/18.png"/></div>

Después de llenar los campos, haz clic en Guardar y aplicar. Verás que se ha creado el contenedor. No olvides iniciarlo.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/19.png"/></div>

### Paso 6. Añadir el servicio ESPHome a Home Assistant

Para lograr el mismo efecto que si hubiéramos descargado ESPHome desde Home Assistant, necesitamos modificar el archivo de configuración de Home Assistant.

Accede al contenedor de Home Assistant.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/55.png"/></div>

Abrimos la terminal dentro del contenedor de Home Assistant.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/56.png"/></div>

Escribe el siguiente comando:

```sh
vi configuration.yaml
```

Añade el siguiente contenido al final del archivo `configuration.yaml`:

```
# Example configuration.yaml entry
panel_iframe:
  esphome:
    title: "ESPHome"
    url: "http://192.168.100.1:6052"
    icon: mdi:chip
```

Sal del contenedor de Docker escribiendo ```exit``` en la terminal de Home Assistant. Una vez hecho esto, reinicia el contenedor de Home Assistant.

Abre una nueva pestaña en el navegador, entra a la dirección IP `192.168.100.1:8123` y registra tu cuenta de Home Assistant. Verás que ESPHome aparece en la barra lateral izquierda.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/57.png"/></div>

## Añadir Seeed Studio XIAO ESP32C3 a ESPHome

- **Paso 1.** Haz clic en **+ NUEVO DISPOSITIVO**

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/8.png"/></div>

- **Paso 2.** Haz clic en **CONTINUAR**

<div align="center"><img width ={350} src="https://files.seeedstudio.com/wiki/ESPHome/9.png"/></div>

- **Paso 3.** Ingresa un **Nombre** para el dispositivo y escribe tus credenciales WiFi, como el **nombre de red** y la **contraseña**. Luego haz clic en **SIGUIENTE**

<div align="center"><img width ={350} src="https://files.seeedstudio.com/wiki/ESPHome/10.png"/></div>

- **Paso 4.** Selecciona **ESP32-C3** y haz clic

<div align="center"><img width ={350} src="https://files.seeedstudio.com/wiki/ESPHome/11.png"/></div>

- **Paso 5.** Haz clic en **OMITIR**, ya que configuraremos esta placa manualmente

<div align="center"><img width ={350} src="https://files.seeedstudio.com/wiki/ESPHome/12.png"/></div>

- **Paso 6.** Haz clic en **EDITAR** bajo la placa recién creada

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/ESPHome/13.png"/></div>

- **Paso 7.** Esto abrirá un archivo **YAML** que se utilizará para establecer todas las configuraciones de la placa. Edita el contenido bajo la sección **esp32** como se muestra a continuación:

```sh
esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    version: 2.0.5
    platform_version: 5.2.0
```

Nota: Aquí estamos utilizando la versión más reciente del [núcleo de Arduino para ESP32](https://github.com/espressif/arduino-esp32/releases) y el [soporte de ESP32 para PlatformIO](https://github.com/platformio/platform-espressif32/releases)

<div align="center"><img width ={350} src="https://files.seeedstudio.com/wiki/ESPHome/14.png"/></div>

- **Paso 8.** Luego, haz clic en el botón **Guardar** en la esquina superior derecha.

El LinkStar H68K no admite el reconocimiento de dispositivos MCU externos, por lo tanto, primero necesitamos descargar el firmware compilado y luego cargarlo desde otra PC.

- **Paso 9.** Haz clic en el botón **Instalar** en la esquina superior derecha. Luego selecciona la última opción: **Descarga manual**.

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/30.png"/></div>

- **Paso 10.** Selecciona el formato **Moderno**.

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/31.png"/></div>

Este proceso tardará un poco, ya que se compila y descarga el firmware. Por favor, ten paciencia. Una vez completado, el firmware se descargará automáticamente a tu computadora.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/33.png"/></div>

- **Paso 11.** Para cargar el firmware al XIAO ESP32C3 hay un par de opciones. Aquí mostramos 2 formas de hacerlo:

  - **Opción 1:** Usando la herramienta [ESPHome Web](https://web.esphome.io/?dashboard_install) para subir el firmware.

Asegúrate de tener instalados los controladores adecuados. A continuación se muestran los controladores para los chips más comunes usados en dispositivos ESP:

1. Controladores CP2102: [Windows y Mac](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)
2. Controladores CH342, CH343, CH9102: [Windows](https://www.wch.cn/downloads/CH343SER_ZIP.html), [Mac](https://www.wch.cn/downloads/CH34XSER_MAC_ZIP.html)
3. Controladores CH340, CH341: [Windows](https://www.wch.cn/downloads/CH341SER_ZIP.html), [Mac](https://www.wch.cn/downloads/CH341SER_MAC_ZIP.html)

Abre la [herramienta web de ESPHome](https://web.esphome.io/?dashboard_install) usando el navegador Chrome o Edge.

Haz clic en **CONNECT**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/34.png"/></div>

Selecciona el puerto serie del XIAO ESP32 en la ventana emergente.

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/64.png"/></div>

Haz clic en **INSTALL** y luego selecciona el archivo `.bin` que descargaste en los pasos anteriores.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/35.png"/></div>

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/38.png"/></div>

- **Opción 2:** Usando la herramienta [esphome-flasher](https://github.com/esphome/esphome-flasher)

Si aún no puedes cargar el firmware utilizando el método uno, incluso después de instalar los controladores y cambiar de navegador, entonces puedes intentar con el método dos. Consulta el tutorial oficial para conocer los métodos de instalación específicos e instrucciones de uso.

:::tip
Si deseas observar los mensajes del registro del XIAO ESP32C3, también puedes verlos mediante el botón **View Logs** de esta herramienta.
<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/41.png"/></div>
:::

Una vez que se complete la carga del firmware, puedes desconectar el XIAO ESP32C3 del PC (a menos que necesites ver los registros) y simplemente alimentarlo de forma independiente.

Si todo funciona correctamente, el XIAO ESP32C3 buscará y se conectará a la red WiFi que configuraste.

En mi caso, uso la red del LinkStar H68K. Puedes encontrarlo en las opciones de red y ver la dirección IP que el LinkStar H68K le asignó.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/42.png"/></div>

- **Paso 12.** Si ves que el estado de la placa aparece como **ONLINE**, significa que la placa se conectó exitosamente al WiFi.

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/ESPHome/21.png"/></div>

- **Paso 13.** Conéctate al XIAO ESP32C3

Si no tienes muchos dispositivos de Home Assistant en tu red local, Home Assistant puede buscar automáticamente y agregar tus dispositivos ESP en la pestaña **Dispositivos**. Puedes ver este dispositivo dentro de **Settings > Devices & Services**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/66.png"/></div>

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/67.png"/></div>

Si no lo detecta automáticamente, también puedes conectarte al XIAO ESP32C3 mediante su dirección IP.

Haz clic en **ADD INTEGRATION** y busca **esphome**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/43.png"/></div>

Luego, introduce la dirección IP del XIAO ESP32C3 con el puerto **6053** y haz clic en **SUBMIT**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/44.png"/></div>

Si la IP y el puerto ingresados son correctos, se te pedirá ingresar la clave de cifrado (Encryption Key), que guardamos en el archivo YAML.

Después, haz clic en **SUBMIT**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/68.png"/></div>

En este punto, se habrán completado correctamente los pasos para agregar el dispositivo.

## Módulos Grove con ESPHome y Home Assistant

Ahora conectaremos módulos Grove al Seeed Studio XIAO ESP32C3 para poder mostrar datos de sensores o controlar dispositivos desde Home Assistant.

### Conecta los módulos Grove al XIAO ESP32C3

Para utilizar los módulos Grove con el Seeed Studio XIAO ESP32C3, utilizaremos un [Grove Shield para Seeed Studio XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) y conectaremos el XIAO ESP32C3 en él.

<div align="center"><img width ={450} src="https://files.seeedstudio.com/wiki/ESPHome/51.png"/></div>

Después de eso, podrás utilizar los conectores Grove de la placa para conectar los módulos Grove.

### Definición de Pines

Debes seguir la siguiente tabla para usar los números de pines internos apropiados al conectar los módulos Grove a los conectores Grove del **Grove Shield para Seeed Studio XIAO**.

| Número de pin interno | Mapeo de pin |
|--- |--- |
| 2  | D0  |
| 3  | D1  |
| 4  | D2  |
| 5  | D3  |
| 6  | D4  |
| 7  | D5  |
| 21  | D6  |
| 20  | D7  |
| 8  | D8  |
| 9  | D9  |
| 10  | D10  |
| 6  | SDA  |
| 7  | SCL  |

Por ejemplo, si deseas conectar un módulo Grove al puerto **D0**, debes definir el pin en ESPHome como **2**.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/ESPHome/50.png"/></div>

### Lista de Compatibilidad de Módulos Grove con ESPHome

Actualmente, los siguientes módulos Grove son compatibles con ESPHome:

<table>
<thead>
  <tr>
    <th>Módulo Grove</th>
    <th>Categoría</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Laser-PM2-5-Sensor-HM3301.html">Grove - Sensor de Polvo Láser PM2.5</a></td>
    <td>Gas</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-All-in-one-Environmental-Sensor-SEN55-p-5373.html">Grove - Sensor Ambiental Todo-en-Uno SEN55</a>, NOx, PM, VOC, RH, Temp</td>
    <td>Gas</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-All-in-one-Environmental-Sensor-SEN54-p-5374.html">Grove - Sensor Ambiental Todo-en-Uno SEN54</a>, PM, VOC, RH, Temp</td>
    <td>Gas</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911.html">Grove - CO2 &amp; Temperatura &amp; Humedad (SCD30)</a></td>
    <td>Gas</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD41-p-5025.html">Grove - CO2 &amp; Temperatura &amp; Humedad - SCD41</a></td>
    <td>Gas</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-VOC-and-eCO2-Gas-Sensor-for-Arduino-SGP30.html">Grove - VOC y eCO2 Sensor de Gas - SGP30</a></td>
    <td>Gas</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-ADS1115-16-bit-ADC-p-4599.html">Grove - ADC de 4 Canales de 16-bit (ADS1115)</a></td>
    <td>ADC</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Time-of-Flight-Distance-Sensor-VL53L0X.html">Grove - Sensor de Distancia, ToF (VL53L0X)</a></td>
    <td>Distancia</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Ultrasonic-Distance-Sensor.html">Grove - Sensor Ultrasónico</a></td>
    <td>Distancia</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html">Grove - AHT20 I2C Sensor de Humedad y Temperatura de Grado Industrial</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html">Grove - Temperatura &amp; Sensor de Humedad V2.0 (DHT20)</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-Pro-AM2302-DHT22.html">Grove - Temperatura &amp; Sensor de Humedad Pro (DHT22/AM2302)</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html">Grove - Temp&amp;Humi&amp;Barómetro (BME280)</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html">Grove - Sensor de Temperatura, Humedad, Presión y Gas para Arduino - BME680</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Barometer-Sensor-BMP280.html">Grove Sensor de Temperatura y Barómetro (BMP280)</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/One-Wire-Temperature-Sensor-p-1235.html">Sensor de Temperatura de un cable - DS18B20</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html">Grove - Temperatura &amp; Sensor de Humedad (DHT11)</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html">Grove - Sensor I2C de Temperatura de Alta Precisión - MCP9808</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html">Grove - Temperatura &amp; Sensor de Humedad (SHT31)</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT40-p-5384.html" target="_blank" rel="noopener noreferrer">Grove - Sensor de Temperatura &amp; Humedad (SHT40)</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html" target="_blank" rel="noopener noreferrer">Grove - Senosor de Presión Barométrico de Alta Precisión (DPS310)</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-I2C-Thermocouple-Amplifier-MCP9600.html" target="_blank" rel="noopener noreferrer">Grove - Amplificador Termopar I2C (MCP9600)</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-I2C-Color-Sensor-V2.html">Grove - I2C Color Sensor V2</a></td>
    <td>Color</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-I2C-Color-Sensor-V2.html">Grove - Sensor Digital de Luz - TSL2561</a></td>
    <td>Luz</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-ADC-for-Load-Cell-HX711-p-4361.html">Grove - para Celdas de Carga (HX711)</a></td>
    <td>Peso</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V3-MPR121-p-4694.html">Grove - Sensor Capacitivo de 12 Teclas I2C V3 (MPR121)</a></td>
    <td>Capacitivo</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-16-Channel-PWM-Driver-PCA9685.html">Grove - Controlador PWM de 16 Canales (PCA9685)</a></td>
    <td>PWM</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-4-Digit-Display.html">Grove - Pantalla de 4 Dígitos</a></td>
    <td>Display</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-OLED-Display-0-66-SSD1306-v1-0-p-5096.html">Grove - Pantalla OLED 0.66" (SSD1306)</a></td>
    <td>Display</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Relay.html">Grove - Relé</a></td>
    <td>Relé</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-SPDT-Relay-30A.html">Grove - Relé SPDT (30A)</a></td>
    <td>Relé</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Solid-State-Relay-V2-p-3128.html">Grove - Relé de Estado Sólido V2</a></td>
    <td>Relé</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-2-Channel-SPDT-Relay.html">Grove - Relé SPDT de 2 Canales</a></td>
    <td>Relé</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-PIR-Motion-Sensor.html">Grove - PIR Motion Sensor</a></td>
    <td>Movimiento</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-mini-PIR-motion-sensor-p-2930.html">Grove - Sensor de Movimiento PIR</a></td>
    <td>Movimiento</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html">Grove - Sensor de Movimiento PIR Digital (12m)</a></td>
    <td>Movimiento</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Servo.html" target="_blank" rel="noopener noreferrer">Grove - Servo</a></td>
    <td>Actuador</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-8-Channel-I2C-Hub-TCA9548A-p-4398.html" target="_blank" rel="noopener noreferrer">Grove - Multiplexor/Hub I2C de 8 Canales (TCA9548A)</a></td>
    <td>Multiplexor</td>
  </tr>
</tbody>
</table>

Ahora seleccionaremos 6 módulos Grove de la tabla anterior y explicaremos cómo se pueden conectar con ESPHome y Home Assistant.

### Grove - Sensor de Temperatura y Humedad (AHT20)

#### Configuración

- **Paso 1.** Conecta el [Grove - Sensor de Temperatura y Humedad (AHT20)](https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html) a uno de los conectores I2C en el Grove Shield para Seeed Studio XIAO.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/ESPHome/52.png"/></div>

- **Paso 2.** Dentro del archivo **xiao-esp32c3.yaml** que creamos anteriormente, añade lo siguiente al final del archivo y súbelo vía OTA al XIAO ESP32C3:

```sh
i2c:
  sda: 6
  scl: 7

sensor:
  - platform: aht10
    temperature:
      name: "Temperature"
    humidity:
      name: "Humidity"
```

Puedes aprender más sobre el **componente AHT10** [aquí](https://esphome.io/components/sensor/aht10.html). Permite usar sensores basados en **AHT10, AHT20** y **AHT21**. Aquí añadimos el componente [Bus I²C](https://esphome.io/components/i2c.html) porque el AHT20 se comunica usando el protocolo I2C.

#### Visualización en el Panel

- **Paso 1.** En la página **Overview** de Home Assistant, haz clic en los **3 puntos** y selecciona **Editar Panel**

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/30.png"/></div>

- **Paso 2.** Haz clic en **+ AGREGAR TARJETA**

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/31.png"/></div>

- **Paso 3.** Selecciona **Por ENTIDAD**, escribe **temperature** y marca la **casilla** junto a **Temperature**

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/ESPHome/32.png"/></div>

- **Paso 4.** Repite lo mismo para **Humidity**

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/ESPHome/33.png"/></div>

- **Paso 5.** Haz clic en **CONTINUAR**

<div align="center"><img width ={250} src="https://files.seeedstudio.com/wiki/ESPHome/34.png"/></div>

- **Paso 6.** Haz clic en **AGREGAR AL PANEL**

<div align="center"><img width ={450} src="https://files.seeedstudio.com/wiki/ESPHome/35.png"/></div>

Ahora tu panel de Home Assistant se verá así:

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/37.png"/></div>

- **Paso 7.** También puedes visualizar los datos del sensor como medidores. Haz clic en **Gauge** bajo **POR TARJETA**

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/39.png"/></div>

- **Paso 8.** Selecciona **Temperature** del menú desplegable

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ESPHome/42.png"/></div>

- **Paso 9.** Haz clic en **GUARDAR**

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/43.png"/></div>

- **Paso 10.** Repite lo mismo para **Humidity**

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/44.png"/></div>

Ahora tu panel se verá así:

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/45.png"/></div>

Para el **Grove - Sensor de Gas VOC y eCO2 (SGP30)** y el **Grove - Sensor de CO2, Temperatura y Humedad (SCD41)** en esta wiki, puedes seguir un procedimiento similar para visualizar los datos del sensor en el panel.

### Grove - Sensor de Gas VOC y eCO2 (SGP30)

#### Configuración

- **Paso 1.** Conecta el [Grove - Sensor de Gas VOC y eCO2 (SGP30)](https://www.seeedstudio.com/Grove-VOC-and-eCO2-Gas-Sensor-for-Arduino-SGP30.html) a uno de los conectores I2C en el Grove Shield para Seeed Studio XIAO

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/ESPHome/52.png"/></div>

- **Paso 2.** Dentro del archivo **xiao-esp32c3.yaml** que creamos anteriormente, añade lo siguiente al final del archivo y súbelo vía OTA al XIAO ESP32C3:

```sh
i2c:
  sda: 6
  scl: 7

sensor:
  - platform: sgp30
    eco2:
      name: "eCO2"
      accuracy_decimals: 1
    tvoc:
      name: "TVOC"
      accuracy_decimals: 1
```

Puedes aprender más sobre el **componente SGP30** [aquí](https://esphome.io/components/sensor/sgp30.html).

### Grove - Sensor de CO2, Temperatura y Humedad (SCD41)

#### Configuración

- **Paso 1.** Conecta el [Grove - Sensor de CO2, Temperatura y Humedad (SCD41)](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD41-p-5025.html) a uno de los conectores I2C en el Grove Shield para Seeed Studio XIAO

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/ESPHome/52.png"/></div>

- **Paso 2.** Dentro del archivo **xiao-esp32c3.yaml** que creamos anteriormente, añade lo siguiente al final del archivo y súbelo vía OTA al XIAO ESP32C3:

```sh
i2c:
  sda: 6
  scl: 7

sensor:
  - platform: scd4x
    co2:
      name: "CO2"
    temperature:
      name: "Temperature"
    humidity:
      name: "Humidity"
```

Puedes aprender más sobre el **componente SGP4x** [aquí](https://esphome.io/components/sensor/scd4x.html).

### Grove - Relay

#### Configuración

- **Paso 1.** Conecta el [Grove - Relay](https://www.seeedstudio.com/Grove-Relay.html) a uno de los puertos **Digitales** en el Grove Shield para Seeed Studio XIAO. Aquí seleccionamos el puerto **D0**.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/ESPHome/53.png"/></div>

- **Paso 2.** Dentro del archivo **xiao-esp32c3.yaml** que creamos anteriormente, añade lo siguiente al final del archivo y súbelo vía OTA al XIAO ESP32C3:

```sh
switch:
  - platform: gpio
    pin: 2
    name: "Relay"
```

Puedes aprender más sobre el **componente Relay** [aquí](https://esphome.io/cookbook/relay.html).

#### Visualización en el Panel

- **Paso 1.** Bajo **+ AGREGAR TARJETA** que mencionamos antes, selecciona **POR ENTIDAD**, escribe **relay**, selecciónalo y haz clic en **CONTINUAR**

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/55.png"/></div>

- **Paso 2.** Haz clic en **AGREGAR AL PANEL**

<div align="center"><img width ={450} src="https://files.seeedstudio.com/wiki/ESPHome/56.png"/></div>

Ahora puedes encender o apagar el relay usando el interruptor de palanca

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/57.jpg"/></div>

## Grove - Mini sensor de movimiento PIR

#### Configuración

- **Paso 1.** Conecta el [Grove - mini PIR motion sensor](https://www.seeedstudio.com/Grove-mini-PIR-motion-sensor-p-2930.html) a uno de los puertos **Digitales** en el Grove Shield para Seeed Studio XIAO. Aquí seleccionamos el puerto **D0**.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/ESPHome/53.png"/></div>

- **Paso 2.** Dentro del archivo **xiao-esp32c3.yaml** que creamos anteriormente, añade lo siguiente al final del archivo y súbelo vía OTA al XIAO ESP32C3:

```sh
binary_sensor:
  - platform: gpio
    pin: 2
    name: "PIR Sensor"
    device_class: motion
```

Puedes aprender más sobre el **componente PIR** [aquí](https://esphome.io/cookbook/pir.html).

#### Visualización en el Panel

- **Paso 1.** Bajo **+ AGREGAR TARJETA** que mencionamos antes, selecciona **POR ENTIDAD**, escribe **pir**, selecciónalo y haz clic en **CONTINUAR**

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/58.png"/></div>

- **Paso 2.** Haz clic en **AGREGAR AL PANEL**

<div align="center"><img width ={450} src="https://files.seeedstudio.com/wiki/ESPHome/59.png"/></div>

Ahora, si se detecta movimiento, se mostrará como **Detected**

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/60.png"/></div>

## ¿Qué sigue?

¡Felicidades! Has aprendido a completar el despliegue de Home Assistant en LinkStar y eres capaz de usar el plugin ESPHome. Para cualquier situación similar donde no puedas instalar un contenedor de Home Assistant con un Add-on, puedes usar este método para instalar otros plugins de Home Assistant.

También esperamos que te unas a nuestro equipo de creadores y nos traigas más ejemplos útiles.

Por supuesto, el XIAO ESP32C3 tiene mucho más que solo soporte para el MR24HPCB1 en Home Assistant, y puedes encontrar más tutoriales para tu propio uso en este documento.

- [Conectar módulos Grove a Home Assistant usando ESPHome (Odyssey)](https://wiki.seeedstudio.com/Connect-Grove-to-Home-Assistant-ESPHome/)
- [XIAO ESP32C3 accede a Home Assistant vía el servicio ESPHome](https://wiki.seeedstudio.com/xiao-esp32c3-esphome/)

¡Deja fluir tu creatividad!

## Solución de problemas

**FAQ1: Recibí el siguiente error al subir el firmware usando la herramienta web de ESPHome, ¿cómo puedo solucionarlo?**

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/37.png"/></div>

> R: Si aparece este mensaje mientras subes el firmware, desconecta el XIAO ESP32C3 de la PC. Luego, mantén presionado el **BOTÓN BOOT**, conecta la placa a tu PC mientras sigues presionando el botón BOOT y luego suéltalo para entrar en modo bootloader. En este punto basta con reconectar y subir el firmware nuevamente.

**FAQ2: No puedo instalar esphome flasher en Linux siguiendo el tutorial de esphome flasher. ¿Qué hago?**

> R: Al ejecutar los siguientes comandos, debes seleccionar la versión de tu sistema, de lo contrario ocurrirá un error. Por ejemplo, si tu computadora es Ubuntu 22.04, el comando a ejecutar es el siguiente:

```
sudo apt install python3

pip3 install -U \
    -f https://extras.wxpython.org/wxPython4/extras/linux/gtk3/ubuntu-22.04/ \
    wxPython

pip3 install esphomeflasher
```

**FAQ3: Ingresé correctamente el WiFi y la contraseña, ¿por qué no veo la dirección IP del XIAO ESP32C3?**

> R: Cuando te encuentres con este problema, por favor verifica que la antena del XIAO ESP32C3 esté conectada correctamente. Si la antena ya está conectada, asegúrate de que el XIAO no esté a más de 3 metros del LinkStar (a menos que hayas reemplazado la antena por una más potente).
Si aún no ves el XIAO, puedes usar el software [esphome flasher](https://github.com/esphome/esphome-flasher) para revisar los logs del XIAO y verificar la conexión a través de ellos.
También puedes desconectar y reconectar el XIAO para que intente buscar la red WiFi y conectarse de nuevo.

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Contamos con varios canales de comunicación para atender distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
