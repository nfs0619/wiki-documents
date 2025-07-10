---
description: Connect to Helium
title: Conectándose a Helium
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Connecting-to-Helium
last_update:
  date: 06/12/2025
  author: Guillermo
---

# Conectándose a Helium

En este capítulo, repasaremos el uso básico de la plataforma Helium y cómo retransmitir datos de sensores a través de la plataforma Helium.

## Actualizable a sensores industriales

Con el controlador SenseCAP [S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el registrador de datos [S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con el prototipado, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de robustos [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

La carcasa IP66, la configuración vía Bluetooth, la compatibilidad con la red global LoRaWAN®, la batería integrada de 19 Ah y el potente soporte desde la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad lumínica, CO2, CE y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<div>
  <table style={{marginLeft: 'auto', marginRight: 'auto'}}>
    <tbody><tr><td colSpan={4} bgcolor="#0e3c49" align="center"><font color="white" size={4}><strong>SenseCAP Industrial Sensor</strong></font></td>
      </tr>
      <tr>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></a></div>
        </td>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
        </td>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></a></div>
        </td>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
        </td>
      </tr>
      <tr>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> Data Logger</strong></a></td>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> Air Temp &amp; Humidity</strong></a></td>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> Light</strong></a></td>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> Air Temp &amp; Humidity &amp; CO2</strong></a></td>
      </tr>
      <tr>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></a></div>
        </td>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></a></div>
        </td>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></a></div>
        </td>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></a></div>
        </td>
      </tr>
      <tr>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> Soil Moisture &amp; Temp</strong></a></td>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> Soil Moisture &amp; Temp &amp; EC</strong></a></td>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> LoRaWAN® Controller</strong></a></td>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> 8-in-1 Weather Station</strong></a></td>
      </tr>
    </tbody></table>
  <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/28.png" /></div>
  Si eres completamente inexperto con Helium, te recomendamos leer primero sobre la consola Helium.
  <table align="center">
    <tbody><tr>
        <td align="cent er"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/178.jpeg" alt="pir" width={500} height="auto" /></p></td>
        <td align="left"><strong>Helium Introduction</strong><br /><br />          En este capítulo, te presentamos los controles de la consola Helium para que tengas una primera impresión de su funcionamiento.<br /><br />.<br /><br /><a href="https://wiki.seeedstudio.com/Helium-Introduction">Let's get started &gt;</a></td>
      </tr>
    </tbody></table>
</div>

:::note
Antes de comenzar esta sección, asegúrate de tener cobertura Helium LoRaWAN® en tu entorno de despliegue, de lo contrario no podrás agregar dispositivos a Helium vía LoRa®. Para más detalles, por favor lee [Helium LoRaWAN®](https://www.helium.com/lorawan).
:::

## <span id="jump1">Agregar dispositivos Grove - Wio-E5 a la consola Helium</span>

Para retransmitir datos de sensores desde Helium, el primer paso es agregar Grove - Wio-E5 a la consola Helium para establecer la conexión entre el dispositivo local y la plataforma Helium.

Para agregar Grove - Wio-E5, ve a **Devices** y haz clic en el icono **+** Añadir dispositivo en la parte superior derecha de la ventana.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/125.png" /></div>

Como se describió anteriormente para el dispositivo de la consola Helium, en este punto se genera automáticamente un triplete de datos: **DevEUI**, **AppEUI** y **AppKey**.

Comenzaremos llenando el nombre del dispositivo, aquí lo llamaré **lora wio terminal**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/129.png" /></div>

:::note
Por favor descarga el entorno necesario para Arduino y Wio Terminal en [contenido pre-aprobado](https://wiki.seeedstudio.com/K1100-Light-Sensor-Grove-LoRa-E5/#preliminary-preparation).
:::
   <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/wiolora.jpg" /></div>

Grove - Wio-E5 permite a los usuarios establecer su propio **DevEUI**, **AppEUI** y **AppKey**, por lo que podemos llenar la información del triplete generado por Helium arriba en las columnas correspondientes.

Abre el IDE de Arduino y copia el siguiente código en el IDE de Arduino.

```c
#include <Arduino.h>
#include "disk91_LoRaE5.h"

Disk91_LoRaE5 lorae5(&Serial); // Where the AT command and debut traces are printed

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

void setup() {

  Serial.begin(9600);
  uint32_t start = millis();
  while ( !Serial && (millis() - start) < 1500 );  // Open the Serial Monitor to get started or wait for 1.5"

  // init the library, search the LORAE5 over the different WIO port available
  if ( ! lorae5.begin(DSKLORAE5_SEARCH_WIO) ) {
    Serial.println("LoRa E5 Init Failed");
    while(1); 
  }

  // Setup the LoRaWan Credentials
  if ( ! lorae5.setup(
        Frequency,     // LoRaWan Radio Zone EU868 here
        deveui,
        appeui,
        appkey
     ) ){
    Serial.println("LoRa E5 Setup Failed");
    while(1);         
  }
}

void loop() {

}
```

:::note
El código anterior no tiene restricciones sobre la conexión del Grove - Wio-E5, buscará automáticamente el puerto Grove al que está conectado el Grove - Wio-E5, pero el proceso de búsqueda puede tardar un rato (alrededor de un minuto).
:::

Por favor, selecciona la banda LoRaWAN® que deseas usar. Esta banda debe coincidir con la banda del gateway que estás utilizando. Las bandas de frecuencia disponibles están en los comentarios del código a continuación. En los tutoriales que usamos, el valor por defecto es la banda **EU868**.

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
```

:::tip
La banda **EU868** se usa comúnmente en la región **Europea**.<br />
La banda **US915** se usa comúnmente en **Norteamérica**.<br />
La banda **AU915** se usa comúnmente en la región de **Australia**.
:::

Por favor reemplaza el **DevEUI**, **AppEUI** y **AppKey** generados por Helium con el código siguiente.

```c
char deveui[] = "2CF7FXXXXXX0A49F";
char appeui[] = "80000XXXXXX00009";
char appkey[] = "2B7E151628XXXXXXXXXX158809CF4F3C";
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/89.png" /></div>

Carga el código para el Wio Terminal y abre el monitor de puerto serial del Arduino IDE, configura la velocidad en baudios a 9600 y observa la configuración.

<div align="center"><img width="{700}" src="https://files.seeedstudio.com/wiki/K1100/90.png" /></div>

Después de asegurarte que la información anterior está completa, haz clic en **Guardar dispositivo** abajo para terminar de agregar el dispositivo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/130.png" /></div>

Por favor espera pacientemente mientras se agrega el dispositivo. (Esto tomará alrededor de 20 minutos.)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/131.png" /></div>

## Escribir función decodificadora para diferentes sensores

En las secciones anteriores, te indicamos cómo usar el Wio Terminal para leer los valores de los sensores individuales del kit. Para enviar los valores del sensor a Helium a través de Grove - Wio-E5, es necesario usar comandos AT. Los datos enviados son recibidos por Helium y necesitan ser decodificados antes de convertirse en datos reales que podamos leer. Por eso escribimos el decodificador.

Además, dado que el formato de datos enviado no es uniforme, con sensores que tienen datos enteros, flotantes, positivos, negativos, etc., el código decodificador requerido para cada sensor es diferente.

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
      <td align="center">Sensor de gases VOC y eCO2 (SGP30)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/SGP30-data-decoder.js">Descarga</a></td>
    </tr>
    <tr>
      <td align="center">Sensor de temperatura y humedad (SHT40)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/SHT40-data-decoder.js">Descarga</a></td>
    </tr>
    <tr>
      <td align="center">Módulo Vision AI</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/VisionAI-data-decoder.js">Descarga</a></td>
    </tr>
  </tbody></table>

### Opción 1. Decodificador de datos del sensor de luz del Wio Terminal

Creamos un nuevo Script Personalizado y lo nombramos **Light_data**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/132.png" /></div>

En la sección anterior [Sensor de luz Wio Terminal](https://wiki.seeedstudio.com/K1100-Light-Sensor-Grove-LoRa-E5/), usamos una variable entera `light` para almacenar el valor de luz leído por el sensor de luz y enviamos ese valor usando la función **send_sync()**. Por lo tanto, el objetivo del decodificador que escribimos en Helium es poder interpretar estos datos enteros.

El código de configuración de su decodificador es el siguiente. Por favor pega el siguiente código en la sección de código de Helium. Haz clic en **Guardar función** para guardar este decodificador.

```java
function Decoder(bytes, port) {
 
  var decoded = {};
  if (port == 8) {
    decoded.light = bytes[0]<<8 | bytes[1];
  }
 
  return decoded;
}
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/133.png" /></div>

Podemos ingresar los datos del sensor de luz de 8 bits en el **VALIDADOR DE SCRIPT** (SCRIPT VALIDATOR) al lado derecho para verificar si el decodificador interpreta correctamente.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/134.png" /></div>

Regresa a Flujos (Flows) y conecta el dispositivo al decodificador.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/180.png" /></div>

### Opción 2. Decodificador de datos del sensor IMU del Wio Terminal

Creamos un nuevo Script Personalizado y lo nombramos **IMU_data**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/135.png" /></div>

En la sección anterior [Sensor IMU Wio Terminal](https://wiki.seeedstudio.com/K1100-IMU-Sensor-Grove-LoRa-E5/), usamos números de punto flotante `x_values`, `y_values`, `z_values` para almacenar los datos de los tres ejes que devuelve el IMU, y multiplicamos estos tres valores por 100 para convertirlos en enteros y enviarlos juntos.

En particular, es importante notar que estos datos pueden ser tanto positivos como negativos, por lo que también necesitamos interpretar esto y restaurarlos a números de punto flotante.

El código de configuración de su decodificador es el siguiente. Por favor, pega el siguiente código en la sección de código de Helium. Haz clic en **Guardar función** para guardar este decodificador.

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

Podemos ingresar los datos del sensor IMU de 48 bits en el **VALIDADOR DE SCRIPT** (SCRIPT VALIDATOR) al lado derecho para verificar si el decodificador interpreta correctamente.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/91.png" /></div>

Regresa a Flujos (Flows) y conecta el dispositivo al decodificador.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/179.png" /></div>

### Opción 3. Decodificador de datos del sensor de humedad del suelo Grove

Creamos un nuevo Script Personalizado y lo nombramos **Soil_data**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/184.png" /></div>

En la sección anterior [Sensor de humedad del suelo Grove](https://wiki.seeedstudio.com/K1100-Soil-Moisture-Sensor-Grove-LoRa-E5/), usamos una variable entera `sensorValue` para almacenar el valor de humedad del suelo leído por el sensor y enviamos ese valor usando la función **send_sync()**. Por lo tanto, el objetivo del decodificador que escribimos en Helium es poder interpretar estos datos enteros.

El código de configuración de su decodificador es el siguiente. Por favor, pega el siguiente código en la sección de código de Helium. Haz clic en **Guardar función** para guardar este decodificador.

```java
function Decoder(bytes, port) {
 
  var decoded = {};
  if (port == 8) {
    decoded.soil = bytes[0]<<8 | bytes[1];
  }
 
  return decoded;
}
```

Podemos ingresar los datos del sensor de humedad del suelo de 8 bits en el **VALIDADOR DE SCRIPT** (SCRIPT VALIDATOR) al lado derecho para verificar si el decodificador interpreta correctamente.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/185.png" /></div>

Regresa a Flujos (Flows) y conecta el dispositivo al decodificador.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/186.png" /></div>

### Opción 4. Decodificador de datos del sensor de gases VOC y eCO2 Grove (SGP30)

Creamos un nuevo Script Personalizado y lo nombramos **SGP30_data**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/173.png" /></div>

En la sección anterior [Sensor de gases VOC y eCO2 Grove (SGP30)](https://wiki.seeedstudio.com/K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5/), usamos las variables enteras `tvoc_ppb` y `co2_eq_ppm` para almacenar los valores de VOC y eCO2.

El código de configuración de su decodificador es el siguiente. Por favor, pega el siguiente código en la sección de código de Helium. Haz clic en **Guardar función** para guardar este decodificador.

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

Podemos ingresar los datos del sensor SGP30 de 16 bits en el **VALIDADOR DE SCRIPT** (SCRIPT VALIDATOR) al lado derecho para verificar si el decodificador interpreta correctamente.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/174.png" /></div>

Regresa a Flujos (Flows) y conecta el dispositivo al decodificador.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/181.png" /></div>

### Opción 5. Decodificador de datos del sensor Temp&Humi Grove (SHT40)

Creamos un nuevo Script Personalizado y lo nombramos **SHT40_data**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/189.png" /></div>

En la sección anterior [Sensor Temp&Humi Grove (SHT40)](https://wiki.seeedstudio.com/K1100-Temp-Humi-Sensor-Grove-LoRa-E5/), usamos variables de punto flotante `temperature` y `humidity` para almacenar los valores de temperatura y humedad. Y enviamos los dos valores después de haberlos multiplicado por cien para convertirlos a enteros.

El código de configuración de su decodificador es el siguiente. Por favor, pega el siguiente código en la sección de código de Helium. Haz clic en **Guardar función** para guardar este decodificador.

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

Podemos ingresar los datos de 32 bits del sensor SHT40 en el **VALIDADOR DE SCRIPT** (SCRIPT VALIDATOR) al lado derecho para verificar si el decodificador interpreta correctamente.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/92.png" /></div>

Regresa a Flujos (Flows) y conecta el dispositivo al decodificador.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/190.png" /></div>

### Opción 6. Decodificador de datos del módulo Grove Vision AI

Creamos un nuevo Script Personalizado y lo nombramos **AI_Version_data**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/195.png" /></div>

En la sección anterior [Módulo Grove Vision AI](https://wiki.seeedstudio.com/K1100-Vision-AI-Module-Grove-LoRa-E5/), usamos variables enteras `model` y `confi` para almacenar el tipo de modelo identificado y su nivel de confianza.

El código de configuración de su decodificador es el siguiente. Por favor, pega el siguiente código en la sección de código de Helium. Haz clic en **Guardar función** para guardar este decodificador.

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

Podemos ingresar los datos de 16 bits del Vision AI en el **VALIDADOR DE SCRIPT** (SCRIPT VALIDATOR) al lado derecho para verificar si el decodificador interpreta correctamente.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/200.png" /></div>

Regresa a Flujos (Flows) y conecta el dispositivo al decodificador.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/196.png" /></div>

## Subir código para enviar datos a Helium

En las diferentes páginas de sensores proporcionamos códigos detallados para subir datos. También puedes encontrar el código del sensor que deseas usar en la lista que aparece a continuación.

:::note
Antes de usar el código proporcionado en esta sección, ten en cuenta que el Device EUI, App EUI y App Key en el código deben coincidir con la información del dispositivo agregada en Helium. Además, verifica que la banda de frecuencia configurada para Grove - Wio-E5 sea la misma que la banda del gateway en tu área o en Helium. No hacerlo puede ocasionar fallas en el acceso a la red.

El código para configurar la banda LoRaWAN® es el siguiente, y la configuración predeterminada es la banda EU868. (La banda EU868 es comúnmente usada en la región Europea.)
    `#define Frequency DSKLORAE5_ZONE_EU868`
US915 band (The US915 band is commonly used in North America.)
    `#define Frequency DSKLORAE5_ZONE_US915`
AU915 band (The AU915 band is commonly used in Australia Region.)
    `#define Frequency DSKLORAE5_ZONE_AU915`
:::

<table align="center">
  <tbody><tr>
      <th>Tipo de Sensor</th>
      <th>Link de Descarga</th>
    </tr>
    <tr>
      <td align="center">Sensor de luz integrado en Wio Terminal</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Lightsensor-send-data">Descarga</a></td>
    </tr>
    <tr>
      <td align="center">Sensor IMU integrado en Wio Terminal</td>
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

El código anterior para enviar datos del sensor puede cargarse directamente en el Wio Terminal desde el Arduino IDE y ejecutarse. En ese momento, por favor enciende el monitor serial y ajusta la velocidad de transmisión a **9600** baudios para observar la transmisión de datos en tiempo real.

Para más detalles, por favor regresa a la sección sobre el uso de sensores individuales en el catálogo de referencia.

### Datos en tiempo real y depuración

Una vez que tengamos el dispositivo conectado, puedes comenzar a ver las transferencias de datos en los paquetes en tiempo real y en el registro de eventos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/93.png" /></div>

:::note
En la última versión de la actualización de Helium, Helium ya no regala 10,000 CRÉDITOS DE DATOS a los usuarios nuevos, solo **250 CRÉDITOS DE DATOS**. Puedes ajustar libremente la frecuencia de envío de datos para reducir el consumo de créditos, o comprarlos según tu elección.
:::

En la pestaña **My Devices**, podemos hacer clic en el **botón de escarabajo** a la derecha de la pantalla para ver la información sobre los datos recibidos por Helium.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/172.png" /></div>

Podemos prestar especial atención a la información en las siguientes secciones.

- **payload**: Información sobre los datos enviados a Helium en formato base64.

- **port**: El número de puerto donde se recibieron los datos.

:::note
En nuestro código, el número de puerto para enviar mensajes está configurado en **8**, así que en la ventana de depuración, todos los mensajes sobre el sensor deberían ser payload para el puerto **8**. Para leer y decodificar el payload, puedes hacerlo con la ayuda de este [sitio web de decodificación](https://cryptii.com/pipes/base64-to-hex).
:::

   <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/175.png" /></div>

### Análisis del Código Fuente

Si deseas aplicar el contenido de este tutorial a tu propio desarrollo de proyecto, es esencial aprender a entender el significado del código. Aquí usaremos el código del sensor **SHT40** como ejemplo para explicar la lógica de la implementación del código.

Al inicio del programa, necesitamos preparar la información triada necesaria para conectarnos a Helium y para configurar la frecuencia del Wio-E5.

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

A continuación, se define una función `data_decord()`. Esta función convierte los valores del sensor en data frames que pueden ser interpretados por el decodificador de Helium y que además cumplen con el protocolo LoRaWAN®, almacenándolos en el arreglo `data[]`.

En general, para prevenir desbordamientos de datos, necesitamos considerar los valores máximos y mínimos que el sensor puede leer. Y dividirlos en números hexadecimales que no causen overflow.

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

Para el sensor SHT40, tendremos dos datos: uno de temperatura y otro de humedad, y pueden ser valores positivos o negativos, por lo que los números negativos deben ser procesados, además de manejar los decimales.

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

La función `send_sync()` tiene el papel importante de enviar los valores del sensor a través de LoRaWAN®. El primer parámetro indica el número de canal para enviar los datos, el segundo parámetro indica el contenido de los datos enviados, y el tercer parámetro indica la longitud de los datos enviados. En general, solo necesitamos enfocarnos en el contenido de los primeros tres parámetros.

```cpp
delay(15000);
```

El retardo al final del programa determina con qué frecuencia quieres enviar datos. No recomendamos enviar a una tasa menor a 10 segundos, ya que enviar con una frecuencia tan alta puede hacer que el Wio-E5 funcione de manera anormal, y puede ser reconocido por Helium como un dispositivo anormal y bloqueado debido a la alta frecuencia.

Para aprender más sobre el código y las características de Grove - Wio-E5, por favor consulta el [repositorio en GitHub](https://github.com/limengdu/Disk91_LoRaE5). Un agradecimiento especial a [**Paul Pinault (disk91)**](https://github.com/disk91) por escribir la librería para Grove - Wio-E5.

La sección anterior es una guía paso a paso sobre cómo usar el dispositivo para conectarse a Helium y recibir datos. Sin embargo, desde un punto de vista práctico, los datos enviados actualmente a Helium no son legibles para humanos. Si tienes un requerimiento para la visualización de datos, puedes referirte a los siguientes pasos para completar el tutorial sobre la integración de Helium con los hubs de Microsoft Azure IoT, que te guiarán en el proceso de mostrar los datos de forma gráfica.

<div>
  <table align="center">
    <tbody><tr>
        <td align="cent er"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/azure.png" alt="pir" width={500} height="auto" /></p></td>
        <td align="left"><strong>Integración de Helium en Azure IoT Hub</strong><br /><br />Esta sección describe cómo configurar Microsoft Azure e integrarlo con Helium para subir datos a la plataforma Microsoft Azure.<br /><br /><a href="https://wiki.seeedstudio.com/Integrate-into-Azure-IoT-Hub">Comencemos &gt;</a></td>
      </tr>
    </tbody></table>
  Además de esto, puedes elegir más plataformas según tus necesidades.
  <table align="center">
    <tbody><tr>
        <td colSpan={2} bgcolor="8FBC8F"><b>Sección de Plataformas en la Nube</b></td>
      </tr>
      <tr>
        <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/K1100/Google-Sheets.jpeg" alt="pir" width={500} height="auto" /></p></td>
        <td align="left"><strong>Integración de Helium en Google Sheets</strong><br /><br />Esta sección introduce el uso de Google Forms en la integración con Helium, y cómo usar Google Forms para almacenar datos de sensores.<br /><br /><a href="https://wiki.seeedstudio.com/Configuring-Web-APP-Visualization">Ir al capítulo &gt;</a></td>
      </tr>
      <tr>
        <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/K1100/AWS.png" alt="pir" width={500} height="auto" /></p></td>
        <td align="left"><strong>Integración de Helium en AWS IoT Core</strong><br /><br />Esta sección describe cómo visualizar la información de datos recibidos usando la integración gratuita de la Web APP.<br /><br /><a href="https://wiki.seeedstudio.com/Configuring-Web-APP-Visualization">Ir al capítulo &gt;</a></td>
      </tr>
    </tbody></table>
</div>

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

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
