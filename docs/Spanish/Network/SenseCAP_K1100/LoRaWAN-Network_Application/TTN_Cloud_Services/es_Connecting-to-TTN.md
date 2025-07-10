---
description: Connect to TTN
title: Conexión a TTN
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Connecting-to-TTN
last_update:
  date: 06/17/2025
  author: Guillermo
---
# Conexión a TTN

En este capítulo, revisaremos el uso básico de la plataforma TTN (The Things Network) y cómo retransmitir datos de sensores a través de dicha plataforma.

## Actualizable a Sensores Industriales

Con el [controlador SenseCAP S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), puedes convertir fácilmente un módulo Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de ampliar tu proyecto con la serie SenseCAP de robustos [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

La carcasa con certificación IP66, la configuración vía Bluetooth, la compatibilidad con redes LoRaWAN® a nivel mundial, una batería incorporada de 19 Ah y el soporte de una potente aplicación móvil hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) la mejor elección para aplicaciones industriales. Esta serie incluye sensores para humedad del suelo, temperatura y humedad ambiental, intensidad lumínica, CO2, conductividad eléctrica (EC) y una estación meteorológica 8 en 1. Prueba el más reciente SenseCAP S210x para tu próximo proyecto industrial exitoso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody><tr><td colSpan={4} bgcolor="#0e3c49" align="center"><font color="white" size={4}><strong>SenseCAP Industrial Sensor</strong></font></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49">
        <div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> Data Logger</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> Air Temp &amp; Humidity</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> Light</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> Air Temp &amp; Humidity &amp; CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49">
        <div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> Soil Moisture &amp; Temp</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> Soil Moisture &amp; Temp &amp; EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> LoRaWAN® Controller</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> 8-in-1 Weather Station</strong></a></td>
    </tr>
  </tbody></table>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/27.png" /></div>

Si no tienes experiencia previa con TTN, te recomendamos leer primero sobre la consola de TTN.

<table align="center">
  <tbody><tr>
      <td align="cent er"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-TTN/TTN.png" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Introducción a TTN</strong><br /><br />En este capítulo, presentaremos los controles de la consola de TTN que utilizaremos para familiarizarnos con la plataforma.<br /><br /><a href="https://wiki.seeedstudio.com/es/TTN-Introduction">Comencemos &gt;</a></td>
    </tr>
  </tbody></table>

:::note
Antes de comenzar esta sección, asegúrate de que haya cobertura LoRaWAN® de TTN en el entorno donde desplegarás tu dispositivo. De lo contrario, no podrás añadir dispositivos a TTN mediante LoRa®. Para más detalles, consulta [TTN LoRaWAN®](https://www.thethingsnetwork.org/docs/lorawan/).
:::

## <span id="jump1">Añadir dispositivos Grove - Wio-E5 a la consola de TTN</span>

Para poder retransmitir los datos del sensor desde TTN, el primer paso es añadir el dispositivo Grove - Wio-E5 a una aplicación en TTN para establecer la conexión entre el dispositivo físico y la plataforma.

**Paso 1.** Obtener el DevEUI y AppEUI del Grove - Wio-E5.

Por favor, descarga el entorno necesario para Arduino y Wio Terminal en la sección de [preparación preliminar](https://wiki.seeedstudio.com/K1100-Light-Sensor-Grove-LoRa-E5/#preliminary-preparation).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/wiolora.jpg" /></div>

Haz clic [aquí](https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/example/Get-Grove-LoRa-E5-AppEUI-DevEUI/Get-Grove-LoRa-E5-AppEUI-DevEUI.ino) para descargar el código que permite obtener el DevEUI y AppEUI del Grove - Wio-E5 y súbelo al Wio Terminal.

```cpp
#include <Arduino.h>
#include "disk91_LoRaE5.h"

Disk91_LoRaE5 lorae5(&Serial); // Where the AT command and debut traces are printed

void setup() {
  Serial.begin(9600);
  uint32_t start = millis();
  while ( !Serial && (millis() - start) < 3000 );  // Open the Serial Monitor to get started or wait for 3.0"

  // init the library, search the Wio-E5 over the different WIO port available
  if ( ! lorae5.begin(DSKLORAE5_SEARCH_WIO) ) {
    Serial.println("Wio-E5 Init Failed");
    while(1); 
  }
}

void loop() {
  //Grove - Wio-E5 allows querying DevEUI, AppEUI, but not AppKey.
  lorae5.sendATCommand("AT+ID=DevEui","","+ID: ERROR","",1000,false,NULL);
  lorae5.sendATCommand("AT+ID=AppEUI","","+ID: ERROR","",1000,false,NULL);
  delay(30000);
}
```

Abre el monitor de puerto serial del Arduino IDE, configura la velocidad de baudios a **9600** y observa la configuración.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/95.png" /></div>

Toma nota de los 16 dígitos que aparecen después de **DevEUI** y **AppEUI**, ya que se utilizarán en la sesión de registro del dispositivo en TTN.

**Paso 2.** Añadir una aplicación

Haz clic en el botón **Add application** en la parte superior derecha.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/31.png" /></div>

Rellena los campos marcados con asterisco (*) según tus preferencias.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/K1100/32.png" /></div>

Luego haz clic en **Create Application**.

**Paso 3.** Añadir dispositivos

Ve a la opción **End devices** en el menú lateral izquierdo y haz clic en **+ Add end device** para ir a la página de registro del dispositivo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/33.png" /></div>

Para usar el Grove - Wio-E5 desde el repositorio de dispositivos, asegúrate de que la pestaña **From the LoRaWAN® Device Repository** esté seleccionada.

Luego, haz clic en las siguientes opciones para seleccionar:

- **Brand (Marca)** -- SenseCAP  
- **Model (Modelo)** -- LoRa-E5 STM32WLE5JC Module  
- **Hardware Ver.** -- 1.0  
- **Firmware Ver.** -- 1.0  
- **Profile (Región)** -- Elige un plan de frecuencia apropiado para tu región.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/29.png" /></div>

:::note
Elige un plan de frecuencia apropiado para tu región. Tu dispositivo y tu gateway deben usar el mismo plan de frecuencia para poder comunicarse. Diferentes regiones del mundo usan distintos [planes de frecuencia](https://www.thethingsindustries.com/docs/reference/frequency-plans/), por ejemplo: 863-870 MHz para Europa, 902-928 MHz para América del Norte, etc.
:::
Aquí, seleccionaré la banda del gateway TTN que utilizo, EU868.

Luego, introduce el **DevEUI** y **AppEUI** que obtuviste previamente en los campos correspondientes de TTN.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/35.png" /></div>

Para el campo **AppKey**, haz clic en el botón **Generate** (Generar) y luego súbelo al Wio Terminal usando el siguiente código para habilitar el Grove - Wio-E5.

Ten en cuenta que la AppKey de 32 bits generada por TTN debe reemplazar el contenido correspondiente en el código.

```c
lorae5.sendATCommand("AT+KEY=APPKEY,\"2B7E151628XXXXXXXXXX158809CF4F3C\"","","+KEY: ERROR","",1000,false,NULL);
```

Aquí está el código completo.

```cpp
#include <Arduino.h>
#include "disk91_LoRaE5.h"

Disk91_LoRaE5 lorae5(&Serial); // Where the AT command and debut traces are printed

void setup() {
  Serial.begin(9600);
  uint32_t start = millis();
  while ( !Serial && (millis() - start) < 3000 );  // Open the Serial Monitor to get started or wait for 3.0"

  // init the library, search the Wio-E5 over the different WIO port available
  if ( ! lorae5.begin(DSKLORAE5_SEARCH_WIO) ) {
    Serial.println("Wio-E5 Init Failed");
    while(1); 
  }
}

void loop() {
  //Grove - Wio-E5 allows querying DevEUI, AppEUI, but not AppKey.
  lorae5.sendATCommand("AT+KEY=APPKEY,\"2B7E151628XXXXXXXXXX158809CF4F3C\"","","+KEY: ERROR","",1000,false,NULL);
  delay(30000);
}
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/96.png" /></div>

En este punto, los tres códigos para Grove - Wio-E5 y TTN ya han sido configurados. Solo queda hacer clic en **Register end device** (Registrar dispositivo final).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/37.png" /></div>

## Escribir funciones decodificadoras para diferentes sensores

En las secciones anteriores, te explicamos cómo utilizar el Wio Terminal para leer los valores de los sensores individuales del kit. Para enviar estos valores al TTN mediante Grove - Wio-E5, es necesario utilizar comandos AT. Los datos enviados son recibidos por TTN y deben ser decodificados antes de convertirse en datos reales que podamos leer. Por esta razón, se escribe una función de decodificación (decoder).

Además, como el formato de los datos enviados no es uniforme (algunos sensores generan enteros, otros flotantes, algunos valores positivos y otros negativos, etc.), el código de decodificación requerido para cada sensor es diferente.

<table align="center">
  <tbody><tr>
      <th>Tipo de Sensor</th>
      <th>Dirección de Descarga</th>
    </tr>
    <tr>
      <td align="center">Sensor de luz integrado en Wio Terminal</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/Wio-Terminal-Light-Sensor-data-decoder.js">Descarga</a></td>
    </tr>
    <tr>
      <td align="center">Sensor IMU integrado en Wio Terminal</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/Wio-Terminal-IMU-Sensor-data-decoder.js">Descarga</a></td>
    </tr>
    <tr>
      <td align="center">Sensor de humedad del suelo</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/soil-moisture-data-decoder.js">Descarga</a></td>
    </tr>
    <tr>
      <td align="center">Sensor de gas VOC y eCO₂ (SGP30)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/SGP30-data-decoder.js">Descarga</a></td>
    </tr>
    <tr>
      <td align="center">Temp&amp;Sensor de temperatura y humedad (SHT40)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/SHT40-data-decoder.js">Descarga</a></td>
    </tr>
    <tr>
      <td align="center">Módulo de Visión Artificial</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/VisionAI-data-decoder.js">Descarga</a></td>
    </tr>
  </tbody></table>

### Opción 1. Decodificador de datos del sensor de luz Wio Terminal

En la sección anterior [Sensor de luz Wio Terminal](https://wiki.seeedstudio.com/K1100-Light-Sensor-Grove-LoRa-E5/), utilizamos una variable entera `light` para almacenar el valor de luz leído por el sensor de luz y enviamos ese valor usando la función **send_sync()**. Por lo tanto, el objetivo del decodificador que escribimos en TTN es poder interpretar estos datos enteros.

El código de configuración del decodificador es el siguiente. Por favor, pega el siguiente código en la sección de código de TTN. Haz clic en **Guardar función** para guardar este decodificador.

```java
function Decoder(bytes, port) {
 
  var decoded = {};
  if (port == 8) {
    decoded.light = bytes[0]<<8 | bytes[1];
  }
 
  return decoded;
}
```

Por favor, haz clic en **Payload formatters** --> **Uplink** --> **Custom Javascript formatter** del dispositivo, en ese orden.

Luego, simplemente pega el código del decodificador anterior en el campo **Formatter code**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/38.png" /></div>

Podemos ingresar los datos del sensor de luz de 8 bits en la ventana **Test** del lado derecho para verificar si el decodificador los interpreta correctamente.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/39.png" /></div>

### Opción 2. Decodificador de datos del sensor IMU Wio Terminal

En la sección anterior [Sensor IMU Wio Terminal](https://wiki.seeedstudio.com/K1100-IMU-Sensor-Grove-LoRa-E5/), usamos números flotantes `x_values`, `y_values`, `z_values` para almacenar los tres ejes de datos devueltos por el IMU, y multiplicamos estos tres conjuntos de datos por 100 para convertirlos a enteros y luego enviarlos juntos.

En particular, es importante tener en cuenta que estos datos pueden ser tanto positivos como negativos, por lo que también necesitamos interpretarlos y restaurarlos a su forma original en número flotante.

El código de configuración del decodificador es el siguiente. Por favor, pega el siguiente código en la sección de código de TTN. Haz clic en **Guardar cambios** para guardar este decodificador.

```java
function Decoder(bytes, port) {
 
  var decoded = {};
  
  function transformers(bytes){
    value = bytes[0] * 256 + bytes[1];
    if (value >= 32768) {
      value = 32768 - value;
    }
    value = value/100.0;
    return value;
  }
    
  if (port == 8) {
    decoded.x = transformers(bytes.slice(0,2));
    decoded.y = transformers(bytes.slice(2,4));
    decoded.z = transformers(bytes.slice(4,6));
  }
  
  return decoded;
}
```

Podemos ingresar los datos del sensor IMU de 48 bits en la sección **Test** del lado derecho para verificar si el decodificador los interpreta correctamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/97.png" /></div>

### Opción 3. Decodificador de datos del sensor de humedad de suelo Grove

En la sección anterior [Sensor de humedad de suelo Grove](https://wiki.seeedstudio.com/K1100-Soil-Moisture-Sensor-Grove-LoRa-E5/), utilizamos una variable entera `sensorValue` para almacenar el valor de humedad del suelo leído por el sensor y enviamos ese valor usando la función **send_sync()**. Por lo tanto, el objetivo del decodificador que escribimos en TTN es poder interpretar estos datos enteros.

El código de configuración del decodificador es el siguiente. Por favor, pega el siguiente código en la sección de código de TTN. Haz clic en **Guardar cambios** para guardar este decodificador.

```java
function Decoder(bytes, port) {
 
  var decoded = {};
  if (port == 8) {
    decoded.soil = bytes[0]<<8 | bytes[1];
  }
 
  return decoded;
}
```

Podemos ingresar los datos del sensor de humedad de suelo de 8 bits en la sección **Test** del lado derecho para verificar si el decodificador los interpreta correctamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-TTN/23.png" /></div>

### Opción 4. Decodificador de datos del sensor de gases Grove VOC y eCO2 (SGP30)

En la sección anterior [Sensor de gases Grove VOC y eCO2 (SGP30)](https://wiki.seeedstudio.com/K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5/), usamos las variables enteras `tvoc_ppb` y `co2_eq_ppm` para almacenar los valores de VOC y eCO2.

El código de configuración del decodificador es el siguiente. Por favor, pega el siguiente código en la sección de código de TTN. Haz clic en **Guardar cambios** para guardar este decodificador. 

```java
function Decoder(bytes, port) {
 
  var decoded = {};
  
  function transformers(bytes){
    value = bytes[0] * 256 + bytes[1];
    return value;
  }
  
  if (port == 8) {
    decoded.voc = transformers(bytes.slice(0,2));
    decoded.eco2 = transformers(bytes.slice(2,4));
  }
 
  return decoded;
}
```

Podemos ingresar los datos de 16 bits del SGP30 en la sección **Test** del lado derecho para verificar si el decodificador los interpreta correctamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-TTN/24.png" /></div>

### Opción 5. Decodificador de datos del sensor de temperatura y humedad Grove (SHT40)

En la sección anterior [Sensor de temperatura y humedad Grove (SHT40)](https://wiki.seeedstudio.com/K1100-Temp-Humi-Sensor-Grove-LoRa-E5/), usamos variables flotantes `temperature` y `humidity` para almacenar los valores de temperatura y humedad. Luego enviamos ambos valores después de haberlos multiplicado por cien para convertirlos en enteros. 

El código de configuración del decodificador es el siguiente. Por favor, pega el siguiente código en la sección de código de TTN. Haz clic en **Guardar cambios** para guardar este decodificador.


```java
function Decoder(bytes, port) {

    var decoded = {};

    function transformers(bytes){
        value = bytes[0] * 256 + bytes[1];
        if (value >= 32768) {
        value = 32768 - value;
        }
        value = value/100.0;
        return value;
    }

    if (port == 8) {
        decoded.temp = transformers(bytes.slice(0, 2));
        decoded.humi = transformers(bytes.slice(2, 4));
    }

    return decoded;
}
```

Podemos ingresar los datos de 32 bits del SHT40 en la sección **Test** del lado derecho para verificar si el decodificador los interpreta correctamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/98.png" /></div>

### Opción 6. Decodificador de datos del módulo Grove Vision AI

En la sección anterior [Módulo Grove Vision AI](https://wiki.seeedstudio.com/K1100-Vision-AI-Module-Grove-LoRa-E5/), usamos variables enteras `model` y `confi` para almacenar el tipo de modelo identificado y su nivel de confianza.

El código de configuración del decodificador es el siguiente. Por favor, pega el siguiente código en la sección de código de TTN. Haz clic en **Guardar cambios** para guardar este decodificador.

```java
function Decoder(bytes, port) {
 
  var decoded = {};
  
  function transformers(bytes){
    value = bytes[0] * 256 + bytes[1];
    return value;
  }
  
  if (port == 8) {
    decoded.model = transformers(bytes.slice(0,2));
    decoded.confidence = transformers(bytes.slice(2,4));
  }
 
  return decoded;
}
```

Podemos ingresar los datos de 16 bits del Vision AI en la sección **Test** del lado derecho para verificar si el decodificador los interpreta correctamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-TTN/26.png" /></div>

## Código para subir datos a TTN

En las diferentes páginas de sensores proporcionamos códigos detallados para subir datos. También puedes encontrar el código del sensor que quieres usar en la lista que aparece a continuación.

:::note
Antes de usar el código proporcionado en esta sección, por favor verifica que el Device EUI, App EUI y App Key en el código coincidan con la información del dispositivo que agregaste en TTN. Además, asegúrate de que la banda de frecuencia configurada para Grove - Wio-E5 sea la misma que la banda del gateway en tu área o en TTN. No hacerlo puede resultar en fallas de acceso a la red.

El código para configurar la banda LoRaWAN® es el siguiente, y la configuración predeterminada es la banda EU868. (La banda EU868 es comúnmente usada en la región europea.)<br />
    `#define Frequency DSKLORAE5_ZONE_EU868`<br />
Banda US915 (La banda US915 es comúnmente usada en Norteamérica.)<br />
    `#define Frequency DSKLORAE5_ZONE_US915`<br />
Banda AU915 (La banda AU915 es comúnmente usada en la región de Australia.)<br />
    `#define Frequency DSKLORAE5_ZONE_AU915`
:::

<table align="center">
  <tbody><tr>
      <th>Tipo de Sensor</th>
      <th>Dirección de Descarga</th>
    </tr>
    <tr>
      <td align="center">Sensor de luz integrado Wio Terminal</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Lightsensor-send-data">Descarga</a></td>
    </tr>
    <tr>
      <td align="center">Sensor IMU integrado Wio Terminal</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/IMU-send-data">Descarga</a></td>
    </tr>
    <tr>
      <td align="center">Sensor de humedad de suelo</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Soil-moisture-send-data">Descarga</a></td>
    </tr>
    <tr>
      <td align="center">Sensor de gases VOC y eCO2 (SGP30)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SGP30-send-data">Descarga</a></td>
    </tr>
    <tr>
      <td align="center">Sensor de temperatura y humedad (SHT40)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SHT40-send-data">Descarga</a></td>
    </tr>
    <tr>
      <td align="center">Módulo Vision AI</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/AI-Module-send-data">Descarga</a></td>
    </tr>
  </tbody></table>

El código anterior para enviar datos del sensor se puede subir directamente al Wio Terminal desde el IDE de Arduino y ejecutar. En ese momento, por favor abre el monitor serial y ajusta la velocidad en baudios a 9600 para observar la transmisión de datos en tiempo real.

Para más detalles, regresa a la sección sobre el uso de sensores individuales en el catálogo de referencia.

### Datos en tiempo real

En la pestaña **Application**, podemos hacer clic en **Live data** para ver la información de los datos recibidos por TTN.

Podemos ver directamente la información de los datos después de ser decodificados por el decodificador.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/40.png" /></div>

### Análisis del código fuente

Si quieres aplicar el contenido de este tutorial a tu propio desarrollo de proyecto, es esencial aprender a entender el significado del código. Aquí usaremos el código del sensor **SHT40** como ejemplo para explicar la lógica de implementación del código.

Al inicio del programa, necesitamos preparar la información necesaria del trío para conectarnos a TTN y configurar la frecuencia del Wio-E5.

```cpp
#define Frequency DSKLORAE5_ZONE_EU868
/*
Select your frequency band here.
DSKLORAE5_ZONE_EU868
DSKLORAE5_ZONE_US915
DSKLORAE5_ZONE_AS923_1
DSKLORAE5_ZONE_AS923_2
DSKLORAE5_ZONE_AS923_3
DSKLORAE5_ZONE_AS923_4
DSKLORAE5_ZONE_KR920
DSKLORAE5_ZONE_IN865
DSKLORAE5_ZONE_AU915
 */
 
char deveui[] = "2CF7FXXXXXX0A49F";
char appeui[] = "80000XXXXXX00009";
char appkey[] = "2B7E151628XXXXXXXXXX158809CF4F3C";
```

A continuación, se define una función llamada `data_decord()`. Esta función convierte los valores del sensor en tramas de datos que pueden ser interpretadas por el decodificador de TTN y que además cumplen con el protocolo LoRaWAN®, almacenándolas en el arreglo `data[]`.

En general, para evitar desbordamientos de datos, necesitamos considerar los valores máximos y mínimos que el sensor puede leer. Y dividirlos en números hexadecimales que no causen desbordamientos.

```cpp
void data_decord(int val_1, int val_2, uint8_t data[4])
{
  int val[] = {val_1, val_2};

  for(int i = 0, j = 0; i < 2; i++, j += 2)
  {
    if(val[i] < 0)
    {
      val[i] = ~val[i] + 1;
      data[j] = val[i] >> 8 | 0x80;
      data[j+1] = val[i] & 0xFF;
    }
    else
    {
      data[j] = val[i] >> 8 & 0xFF;
      data[j+1] = val[i] & 0xFF;
    }
  }
}
```

Para el sensor SHT40, habrá dos datos: uno es la temperatura y el otro la humedad, y pueden ser valores positivos y negativos, por lo que los números negativos necesitan un procesamiento especial, así como también las cifras decimales.

```cpp
int_temp = temperature*100;
int_humi = humidity*100;
```

El siguiente paso es la inicialización del SHT40 y la configuración inicial del Wio-E5. Todo esto se ejecutará en la función `setup()`.

```cpp
lorae5.begin(DSKLORAE5_SWSERIAL_WIO_P2)
```

En el código de inicialización, `DSKLORAE5_SWSERIAL_WIO_P2` representa la interfaz Grove en el lado **derecho** del Wio Terminal, mientras que `DSKLORAE5_SWSERIAL_WIO_P1` representa la interfaz Grove en el lado **izquierdo**. Para otros proyectos sin sensores externos, también puedes usar `DSKLORAE5_SEARCH_WIO`, que buscará automáticamente la interfaz Grove a la que está conectado tu Wio-E5.

```cpp
lorae5.send_sync(              //Sending the sensor values out
        8,                     // LoRaWan Port
        data,                  // data array
        sizeof(data),          // size of the data
        false,                 // we are not expecting a ack
        7,                     // Spread Factor
        14                     // Tx Power in dBm
       ) 
```

La función importante `send_sync()` se encarga de enviar los valores del sensor a través de LoRaWAN®. El primer parámetro indica el número de canal para enviar los datos, el segundo parámetro indica el contenido de los datos enviados, y el tercer parámetro indica la longitud de los datos enviados. En general, solo necesitamos enfocarnos en el contenido de los primeros tres parámetros.

```cpp
delay(15000);
```

El retardo al final del programa determina la frecuencia con la que se envían los datos. No recomendamos enviar datos con una frecuencia menor a 10 segundos, ya que enviar con tanta frecuencia puede causar un funcionamiento anormal del Wio-E5, y puede ser reconocido por TTN como un dispositivo anómalo y bloqueado por alta frecuencia.

Para conocer más sobre el código y las funcionalidades del Grove - Wio-E5, por favor consulta el [enlace del repositorio en GitHub](https://github.com/limengdu/Disk91_LoRaE5). Un agradecimiento especial a [**Paul Pinault (disk91)**](https://github.com/disk91) por escribir la librería para Grove - Wio-E5.

¡Mantente atento para más contenido!

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Statement

- The LoRa® Mark is a trademark of Semtech Corporation or its subsidiaries.
- LoRaWAN® is a mark used under license from the LoRa Alliance®.
