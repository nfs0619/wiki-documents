---
description: Grove Vision AI Module
title: Modulo Grove Vision AI
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/K1100-Vision-AI-Module-Grove-LoRa-E5
last_update:
  date: 06/16/2025
  author: Guillermo
---
# Módulo Grove Vision AI

En esta sección, detallaremos cómo funciona el sensor, cómo obtener los datos del sensor utilizando el Wio Terminal y cómo enviar los datos utilizando Wio Terminal y Grove - Wio-E5.

## Ampliable a Sensores Industriales

Con el [controlador SenseCAP S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos SenseCAP S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), puedes convertir fácilmente los módulos Grove en sensores LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie de robustos [sensores industriales SenseCAP](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

La carcasa con protección IP66, la configuración por Bluetooth, la compatibilidad con la red global LoRaWAN®, la batería incorporada de 19 Ah y el potente soporte desde la app hacen de los [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) la mejor opción para aplicaciones industriales. Esta serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad lumínica, CO₂, conductividad eléctrica (EC) y una estación meteorológica 8 en 1. Prueba los últimos SenseCAP S210x para tu próximo proyecto industrial exitoso.

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

## Principio de Funcionamiento de los Sensores

La cámara en vivo de un dispositivo puede usarse para detectar objetos en un entorno mediante aprendizaje automático (Machine Learning).

La transmisión en vivo de una cámara puede identificar objetos en el mundo físico. Utilizando el modo de “transmisión” de la API de Detección y Seguimiento de Objetos de **ML Kit**, una cámara puede detectar objetos y usarlos como entrada para realizar una **búsqueda visual** (una consulta que usa una imagen como entrada) con el modelo de clasificación de imágenes de nuestra aplicación (aún en desarrollo).

Buscar con una cámara en vivo puede ayudar a los usuarios a aprender más sobre los objetos que los rodean, ya sea un perro o un gato.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/197.jpeg" /></div>

Para más información sobre el uso del **Módulo Grove Vision AI**, consulta la referencia [aquí](https://wiki.seeedstudio.com/Grove-Vision-AI-Module/).

Si deseas entrenar tus propios modelos, por favor consulta el contenido [aquí](https://wiki.seeedstudio.com/Train-Deploy-AI-Model/).

## Materiales Necesarios

<table align="center">
  <tbody><tr>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-GROVE.jpeg" /></div></td>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/products/113020091/%E5%AE%98%E7%BD%91/11302009_Preview-34.png" /></div></td>
      <td align="center"><div align="center"><img width={170} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/camera.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal</td>
      <td align="center">Grove - Wio-E5</td>
      <td align="center">Grove Vision AI Module</td>
    </tr>
  </tbody></table>

## Preparación Preliminar

### Conexión

En esta rutina, necesitamos conectarnos a una **puerta de enlace LoRa®** cercana con la ayuda del **Grove - Wio-E5**. Para ello, debemos configurar el **puerto Grove del lado derecho** del Wio Terminal como un **puerto serie por software** para recibir comandos AT. El **Módulo Vision AI** debe conectarse al **puerto Grove del lado izquierdo**, según el diagrama que se muestra a continuación.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/aivision.jpg" /></div>

### Preparación del Software

**Paso 1.** Instala el software de Arduino.

<div>
  <p style={{}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank" /></p><div align="center"><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></div><p />
</div>

**Paso 2.** Lanza la aplicación de Arduino.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>

**Paso 3.** Añade el Wio Terminal al IDE de Arduino.

Abre el IDE de Arduino, haz clic en `Archivo > Preferencias` y copia la siguiente URL en **Gestor de URLs Adicionales de Tarjetas**:

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" /></div>

Haz clic en `Herramientas > Placa > Gestor de tarjetas` y busca **Wio Terminal** en el gestor de tarjetas.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/addBoard.png" /></div>

**Paso 4.** Selecciona tu placa y puerto

Debes seleccionar la entrada en el menú `Herramientas > Placa` que corresponda a tu Arduino. Selecciona **Wio Terminal**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png" /></div>

Selecciona el dispositivo serial de la placa Wio Terminal desde el menú `Herramientas -> Puerto`. Es probable que sea COM3 o superior (COM1 y COM2 suelen estar reservados para puertos seriales de hardware). Para averiguarlo, puedes desconectar tu Wio Terminal y volver a abrir el menú; la entrada que desaparezca será tu placa. Vuelve a conectarla y selecciona ese puerto.

:::tip
Para usuarios de Mac, será algo como `/dev/cu.usbmodem141401`.

 Si no puedes cargar el sketch, lo más probable es que el IDE de Arduino no haya podido poner el Wio Terminal en modo bootloader (porque el MCU se detuvo o tu programa está manejando el USB). Una solución es poner el Wio Terminal en modo bootloader manualmente.
:::
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

**Paso 5.** Descarga la librería Grove - Wio-E5

Visita el repositorio [Disk91_LoRaE5](https://github.com/disk91/Disk91_LoRaE5) y descarga todo el repositorio en tu computadora local.

<div>
  <p style={{}}><a href="https://github.com/disk91/Disk91_LoRaE5" target="_blank" /></p><div align="center"><a href="https://github.com/disk91/Disk91_LoRaE5" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**Paso 6.** Añadir librerías al IDE de Arduino

Ahora, la librería del Acelerómetro Digital de 3 Ejes puede instalarse en el IDE de Arduino. Abre el IDE de Arduino y haz clic en `Programa -> Incluir Librería -> Añadir Biblioteca .ZIP`, y selecciona el archivo `Disk91_LoRaE5` que acabas de descargar.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" /></div>

## Obtener el valor del Módulo Grove Vision AI

**Paso 1.** Descargar la librería del Módulo Grove Vision AI

Visita el repositorio [Seeed-Grove-Vision-AI-Moudle](https://github.com/limengdu/Seeed-Grove-Vision-AI-Moudle) y descarga todo el repositorio a tu equipo local.

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Grove-Vision-AI-Moudle" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Grove-Vision-AI-Moudle" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**Paso 2.** Agregar las librerías al Arduino IDE

Ahora puedes instalar la librería del Módulo Vision AI en el Arduino IDE. Abre el Arduino IDE y haz clic en  
`Sketch -> Include Library -> Add .ZIP Library`, y selecciona el archivo `Seeed-Grove-Vision-AI-Moudle` que acabas de descargar.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" /></div>

**Paso 3.** Obtener datos del Módulo Grove Vision AI

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-AI-Module-value" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-AI-Module-value" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

Visita el repositorio [Get-AI-Module-value](https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-AI-Module-value) para consultar el código que permite obtener los datos del módulo.

```cpp
#include "Seeed_Arduino_GroveAI.h"
#include <Wire.h>

GroveAI ai(Wire);
uint8_t state = 0;
void setup()
{
  Wire.begin();
  Serial.begin(115200);
  
  Serial.println("begin");
  if (ai.begin(ALGO_OBJECT_DETECTION, MODEL_EXT_INDEX_1)) // Object detection and pre-trained model 1
  {
    Serial.print("Version: ");
    Serial.println(ai.version());
    Serial.print("ID: ");
    Serial.println( ai.id());
    Serial.print("Algo: ");
    Serial.println( ai.algo());
    Serial.print("Model: ");
    Serial.println(ai.model());
    Serial.print("Confidence: ");
    Serial.println(ai.confidence());
    state = 1;
  }
  else
  {
    Serial.println("Algo begin failed.");
  }
}

void loop()
{
  if (state == 1)
  {
    uint32_t tick = millis();
    if (ai.invoke()) // begin invoke
    {
      while (1) // wait for invoking finished
      {
        CMD_STATE_T ret = ai.state(); 
        if (ret == CMD_STATE_IDLE)
        {
          break;
        }
        delay(20);
      }

     uint8_t len = ai.get_result_len(); // receive how many people detect
     if(len)
     {
       int time1 = millis() - tick; 
       Serial.print("Time consuming: ");
       Serial.println(time1);
       Serial.print("Number of people: ");
       Serial.println(len);
       object_detection_t data;       //get data

       for (int i = 0; i < len; i++)
       {
          Serial.println("result:detected");
          Serial.print("Detecting and calculating: ");
          Serial.println(i+1);
          ai.get_result(i, (uint8_t*)&data, sizeof(object_detection_t)); //get result
  
          Serial.print("confidence:");
          Serial.print(data.confidence);
          Serial.println();
        }
     }
     else
     {
       Serial.println("No identification");
     }
    }
    else
    {
      delay(1000);
      Serial.println("Invoke Failed.");
    }
  }
  else
  {
    state == 0;
  }
}
```

Abre el monitor serial del Arduino IDE, selecciona una tasa de baudios de 115200 y observa el resultado.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/198.png" /></div>

## Enviar datos mediante Grove - Wio-E5

Combinamos el código anterior del Grove - Wio-E5 para conectarnos a la red LoRa®. Usando comandos AT, es posible enviar el valor obtenido del Módulo Grove Vision AI a través de la red LoRa®.

En el código de la sección anterior, sabemos que la salida (el número de objetos detectados y el nivel de confianza) son **enteros positivos**, y **ambos son datos de no más de 8 bits**.

De esta forma, determinamos el **contenido, tamaño y formato** de los datos que se enviarán usando comandos AT. Podemos declarar un arreglo lo suficientemente grande, almacenar en él la cadena con los datos que necesitamos enviar y, finalmente, usar la función **send_sync()** para transmitir el arreglo.

El pseudocódigo de esta idea sería algo similar a lo siguiente:

```c
  ......
  static uint8_t data_val[4] = { 0x00 };  //Use the data[] to store the values of the sensors
  
  if (state == 1)
  {
    if (ai.invoke()) // begin invoke
    {
      while (1) // wait for invoking finished
      {
        CMD_STATE_T ret = ai.state(); 
        if (ret == CMD_STATE_IDLE)
        {
          break;
        }
        delay(20);
      }
      uint8_t len = ai.get_result_len(); // receive how many people detect
      if(len)
      {
        Serial.print("Number of people: "); Serial.println(len);
        object_detection_t data;       //get data
    
        for (int i = 0; i < len; i++)
        {
          Serial.println("result:detected");
          Serial.print("Detecting and calculating: ");
          Serial.println(i+1);
          ai.get_result(i, (uint8_t*)&data, sizeof(object_detection_t)); //get result
    
          Serial.print("confidence:"); Serial.println(data.confidence);

          data_decord(len, data.confidence, data_val);
          
          if ( lorae5.send_sync(              //Sending the sensor values out
                8,                            // LoRaWan Port
                data_val,                     // data array
                sizeof(data_val),             // size of the data
                false,                        // we are not expecting a ack
                7,                            // Spread Factor
                14                            // Tx Power in dBm
               ) 
          )
          ......
```

El resto de lo que necesitamos hacer es usar la función `begin()` para inicializar el Grove - Wio-E5 y la función `setup()` para configurar la información del triplete del Grove - Wio-E5. Cuando enviamos un mensaje de datos usando la función `send_sync()`, intentaremos unirnos a la red LoRaWAN® al mismo tiempo y, una vez que se logre la conexión, se enviarán los datos y se devolverá información como la intensidad de la señal y la dirección.

Puedes encontrar el código completo del ejemplo [aquí](https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/AI-Module-send-data).

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/AI-Module-send-data" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/AI-Module-send-data" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

:::tip
No recomendamos que cargues el código en este momento para ver los resultados, porque aún no has configurado Helium o TTN y obtendrás un resultado de "Join failed". Recomendamos que cargues este código después de haber completado el capítulo [Conectarse a Helium](https://wiki.seeedstudio.com/Connecting-to-Helium/) o [Conectarse a TTN](https://wiki.seeedstudio.com/Connecting-to-TTN/)
:::

Una vez que hayas experimentado y comprendido cómo funciona el Grove Vision AI Module y el formato de datos, por favor continúa con el siguiente paso del tutorial para unirte a LoRaWAN®.

<table align="center">
  <tbody><tr>
      <td colSpan={2} bgcolor="8FBC8F"><b>Sección Helium</b></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/178.jpeg" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Introducción a Helium</strong><br /><br />En este capítulo, presentaremos los controles de la consola de Helium para obtener una primera impresión sobre su funcionamiento.<br /><br /><a href="https://wiki.seeedstudio.com/Helium-Introduction">Ir al capítulo &gt;</a></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/helium.png" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Conexión a Helium</strong><br /><br />Esta sección describe cómo configurar Helium para que los datos del sensor puedan subirse y visualizarse correctamente en la consola.<br /><br /><a href="https://wiki.seeedstudio.com/Connecting-to-Helium">Ir al capítulo &gt;</a></td>
    </tr>
    <tr>
      <td colSpan={2} bgcolor="8FBC8F"><b>Sección TTN</b></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-TTN/TTN.png" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Introducción a TTN</strong><br /><br />En este capítulo, presentaremos los controles de la consola de TTN para familiarizarte con su entorno.
        <br /><br /><a href="https://wiki.seeedstudio.com/TTN-Introduction">Ir al capítulo &gt;</a></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/K1100/ttncon.jpg" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Conexión a TTN</strong><br /><br />Esta sección describe cómo configurar TTN para que los datos del sensor puedan subirse y visualizarse correctamente en la consola.
        <br /><br /><a href="https://wiki.seeedstudio.com/Connecting-to-TTN">Ir al capítulo &gt;</a></td>
    </tr>
  </tbody></table>

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender distintas preferencias y necesidades.

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
