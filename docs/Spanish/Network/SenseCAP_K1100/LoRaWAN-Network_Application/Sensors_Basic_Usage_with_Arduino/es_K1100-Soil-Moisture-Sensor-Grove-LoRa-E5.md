---
description: Grove Soil Moisture Sensor
title: Grove Soil Moisture Sensor
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/K1100-Soil-Moisture-Sensor-Grove-LoRa-E5
last_update:
  date: 06/13/2025
  author: Guillermo
---
# Grove Soil Moisture Sensor

En esta sección detallaremos cómo funcionan los sensores, cómo obtener datos usando Wio Terminal y cómo enviar esos datos usando Wio Terminal junto con Grove - Wio-E5.

## Actualizable a Sensores Industriales

Con el controlador SenseCAP [S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el registrador de datos [S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), puedes transformar fácilmente tu Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con el prototipado, sino que también ofrece la posibilidad de ampliar tu proyecto con la serie SenseCAP de robustos [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

El encapsulado IP66, la configuración vía Bluetooth, la compatibilidad con la red global LoRaWAN®, la batería integrada de 19 Ah y el soporte potente desde la app hacen que la serie [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) sea la mejor opción para aplicaciones industriales. Esta serie incluye sensores para humedad del suelo, temperatura y humedad ambiental, intensidad de luz, CO2, EC, y una estación meteorológica 8-en-1. Prueba la última serie SenseCAP S210x para tu próximo proyecto industrial exitoso.


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

En esta sección, primero daremos una breve introducción a los sensores de humedad del suelo para ayudarte a entender con más claridad cómo funcionan los sensores.

El sensor Grove - Humedad del Suelo puede medir la humedad del suelo para las plantas. El sensor de humedad del suelo consta de dos sondas que permiten que la corriente pase a través del suelo y luego obtiene valores de resistencia para medir el contenido de humedad del suelo. Puede usarse para decidir si las plantas en un jardín necesitan riego. También puedes usar sensores de humedad del suelo en jardines para automatizar el riego de las plantas. Se puede usar de manera muy sencilla insertando el sensor en el suelo y leyendo la salida mediante un ADC.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/162.jpg" /></div>

Para más información sobre el uso de sensores de humedad del suelo, su referencia está [aquí](https://wiki.seeedstudio.com/Grove-Moisture_Sensor/).

## Materiales Requeridos


<table align="center">
  <tbody><tr>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-GROVE.jpeg" /></div></td>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/products/113020091/%E5%AE%98%E7%BD%91/11302009_Preview-34.png" /></div></td>
      <td align="center"><div align="center"><img width={310} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/images/Moisture_sensor_.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal</td>
      <td align="center">Grove - Wio-E5</td>
      <td align="center">Sensor de Humedad del Suelo Grove</td>
    </tr>
  </tbody></table>

## Preparación Preliminar

### Preparación del Software

**Paso 1.** Necesitas instalar el software de Arduino.

<div>
  <p style={{}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank" /></p><div align="center"><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></div><p />
</div>

**Paso 2.** Ejecuta la aplicación de Arduino.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>

**Paso 3.** Añade Wio Terminal al Arduino IDE.

Abre tu Arduino IDE, haz clic en `Archivo > Preferencias` y copia la siguiente URL en **URLs adicionales para el Gestor de Placas**:

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" /></div>

Luego, haz clic en `Herramientas > Placa > Gestor de Placas` y busca **Wio Terminal** en el Gestor de Placas.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/addBoard.png" /></div>

**Paso 4.** Selecciona tu placa y puerto

Debes seleccionar la opción en el menú `Herramientas > Placa` que corresponda a tu Arduino. Selecciona **Wio Terminal**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png" /></div>

Selecciona el dispositivo serial de la placa Wio Terminal en el menú `Herramientas -> Puerto`. Normalmente será COM3 o superior (COM1 y COM2 suelen estar reservados para puertos seriales de hardware). Para identificarlo, desconecta la placa Wio Terminal y vuelve a abrir el menú; la entrada que desaparezca será la placa Arduino. Reconecta la placa y selecciona ese puerto serial.

:::tip
Para usuarios Mac, será algo como `/dev/cu.usbmodem141401`.

Si no puedes cargar el sketch, normalmente es porque el Arduino IDE no pudo poner el Wio Terminal en modo bootloader (por ejemplo, porque el MCU está detenido o tu programa está manejando el USB). La solución es poner el Wio Terminal manualmente en modo bootloader.
:::

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

**Paso 5.** Descargar la librería Grove - Wio-E5

Visita el repositorio [Disk91_LoRaE5](https://github.com/disk91/Disk91_LoRaE5) y descarga todo el repositorio a tu disco local.

<div>
  <p style={{}}><a href="https://github.com/disk91/Disk91_LoRaE5" target="_blank" /></p><div align="center"><a href="https://github.com/disk91/Disk91_LoRaE5" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**Paso 6.** Añadir librerías al Arduino IDE

Ahora, la librería del Acelerómetro Digital 3-Ejes puede ser instalada en el Arduino IDE. Abre el Arduino IDE, y haz clic en `Sketch -> Incluir Librería -> Añadir librería .ZIP`, y elige el archivo `Disk91_LoRaE5` que acabas de descargar.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" /></div>

## Obtener el valor del Sensor de Humedad del Suelo

**Paso 1.** Conectar los sensores

Si quieres usar el sensor de humedad del suelo, por favor asegúrate de conectar el sensor de suelo al puerto Grove en el **lado derecho** del Wio Terminal y conectar el Grove - Wio-E5 al puerto Grove en el **lado izquierdo**. Esto es diferente a otros sensores.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit33.jpg" /></div>

:::tip
La razón por la que el método de conexión del sensor de humedad del suelo es diferente a otros sensores es porque usa una interfaz de entrada analógica, la cual la interfaz IIC del lado izquierdo no tiene, por lo que no se puede obtener el valor de voltaje devuelto por el sensor de humedad del suelo.
:::

**Paso 2.** Obtener el valor de humedad del sensor de humedad del suelo.

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-soil-moisture-value" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-soil-moisture-value" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

Este repositorio demuestra cómo usar el sensor de humedad del suelo. El sensor de humedad del suelo usa una interfaz analógica donde simplemente puedes leer el valor de humedad del suelo leyendo sus pines.

```cpp
int sensorPin = A0;
int sensorValue = 0;
 
void setup() {
    Serial.begin(9600);
}
void loop() {
    // read the value from the sensor:
    sensorValue = analogRead(sensorPin);
    Serial.print("Moisture = " );
    Serial.println(sensorValue);
    delay(1000);
}
```

Abre el monitor serial del Arduino IDE y selecciona la velocidad en baudios a 9600, luego observa el resultado.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/164.png" /></div>

## Enviar datos vía Grove - Wio-E5

Combinamos el código anterior del Grove - Wio-E5 para conectarnos a la red LoRa®. Usando comandos AT es posible enviar el valor del sensor de humedad del suelo a la red LoRa®.

Como sabemos por el código en la sección anterior para obtener el valor del sensor de humedad del suelo, el valor de humedad obtenido es un dato entero de menos de ocho bits.

De esta manera, determinamos el contenido, tamaño y formato de los datos a enviar vía comandos AT. Podemos también configurar un arreglo lo suficientemente grande, almacenar las cadenas que necesitamos enviar en el arreglo, y finalmente usar la función **send_sync()** para enviar el arreglo.

El pseudocódigo para la idea anterior es aproximadamente el siguiente.

```c
  ......
  sensorValue = analogRead(sensorPin);

  static uint8_t data[2] = { 0x00 };  //Use the data[] to store the values of the sensors

  data_decord(sensorValue, data);

  if ( lorae5.send_sync(              //Sending the sensor values out
        8,                            // LoRaWan Port
        data,                         // data array
        sizeof(data),                 // size of the data
        false,                        // we are not expecting a ack
        7,                            // Spread Factor
        14                            // Tx Power in dBm
       ) 
  )
  .......
```

El resto de lo que necesitamos hacer es usar la función `begin()` para inicializar el Grove - Wio-E5 y la función `setup()` para configurar la información del triplete del Grove - Wio-E5. Cuando enviamos un mensaje de datos usando la función `send_sync()`, intentaremos unirnos a LoRaWAN® al mismo tiempo, y una vez que tenga éxito, los datos serán enviados y se devolverá información como la intensidad de señal y la dirección.

El ejemplo completo de código se puede encontrar [aquí](https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Soil-moisture-send-data).

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Soil-moisture-send-data" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Soil-moisture-send-data" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

:::tip
No recomendamos que subas el código ahora para ver resultados, porque en este punto aún no has configurado Helium/TTN y obtendrás un resultado de "Join failed" (unión fallida). Recomendamos que subas este código después de haber completado el capítulo de [Conexión a Helium](https://wiki.seeedstudio.com/Connecting-to-Helium/) o [Conexión a TTN](https://wiki.seeedstudio.com/Connecting-to-TTN/) para completar el proceso de envío de datos.
:::

Una vez que hayas experimentado y comprendido cómo funciona el sensor de humedad del suelo y el formato de los datos, por favor continúa con el siguiente paso del tutorial para unirse a LoRaWAN®.

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
