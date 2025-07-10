---
description: Wio Terminal IMU Sensor
title: Sensor IMU en Wio Terminal
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/K1100-IMU-Sensor-Grove-LoRa-E5
last_update:
  date: 06/13/2025
  author: Guillermo
---
# Sensor IMU en Wio Terminal

En esta sección, detallaremos cómo funcionan los sensores, cómo obtener datos del sensor usando el Wio Terminal y cómo enviar los datos utilizando el Wio Terminal y el Grove - Wio-E5.

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

## Working Principle of Sensors

In this section we need to learn to use the IMU sensor built into the Wio Terminal.

The LIS3DHTR acceleration sensor is a piezoelectric sensor, which converts the acceleration of the object to be measured into the change of the voltage of the sensing unit, and then converts the value of the change of the sensing unit into a voltage value through a conversion circuit, followed by the corresponding amplification of the signal and the filtering process to process the analog quantity into a suitable and stable output signal, at which time the output signal is a voltage value, and finally converted into a digital signal through an ADC converter.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/137.png" /></div>

For more information on the use of IMU sensors its reference [here](https://wiki.seeedstudio.com/Wio-Terminal-IMU-Overview/).

## Materials Required

<table align="center">
  <tbody><tr>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-GROVE.jpeg" /></div></td>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/products/113020091/%E5%AE%98%E7%BD%91/11302009_Preview-34.png" /></div></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal</td>
      <td align="center">Grove - Wio-E5</td>
    </tr>
  </tbody></table>

## Preparación Preliminar

### Conexión

En esta rutina, necesitamos conectarnos a una puerta de enlace LoRa® cercana con la ayuda del Grove LoRa® E5. Debemos configurar el puerto Grove en el lado derecho del Wio Terminal como un puerto serial por software para recibir comandos AT.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/wiolora.jpg" /></div>

:::note
¿Por qué no usar el puerto Grove del lado izquierdo?
> La interfaz Grove del lado izquierdo es compatible con IIC, y usamos la interfaz IIC para la mayoría de los sensores, por lo que conservarla es una mejor solución.
:::

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

## Obtener el valor del sensor IMU integrado del Wio Terminal

**Paso 1.** Descargar la librería del sensor IMU

Visita el repositorio [Seeed_Arduino_LIS3DHTR](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/tree/master) y descarga todo el repositorio a tu computadora local.

<div>
  <p style={{}}><a href="https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/tree/master" target="_blank" /></p><div align="center"><a href="https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/tree/master" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**Paso 2.** Añadir la librería al IDE de Arduino

Ahora, la librería del Acelerómetro Digital de 3 Ejes puede instalarse en el IDE de Arduino. Abre el IDE de Arduino y haz clic en `Programa -> Incluir Librería -> Añadir Biblioteca .ZIP`, y selecciona el archivo `Seeed_Arduino_LIS3DHTR` que acabas de descargar.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" /></div>

**Paso 3.** Obtener los datos de 3 ejes del sensor IMU

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-IMU-value" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-IMU-value" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

Este repositorio demuestra cómo usar el sensor IMU integrado como un componente dentro del Wio Terminal. Usando las funciones de la librería **getAccelerationX()**, **getAccelerationY()** y **getAccelerationZ()**, puedes obtener directamente los valores de desplazamiento del sensor IMU en los ejes X, Y y Z. Estos tres valores pueden ser números flotantes positivos o negativos.

```cpp
#include"LIS3DHTR.h"
LIS3DHTR<TwoWire> lis;
 
void setup() {
  Serial.begin(115200);
  lis.begin(Wire1);
 
  if (!lis) {
    Serial.println("ERROR");
    while(1);
  }
  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //Data output rate
  lis.setFullScaleRange(LIS3DHTR_RANGE_2G); //Scale range set to 2g
}
 
void loop() {
  float x_values, y_values, z_values;
  x_values = lis.getAccelerationX();
  y_values = lis.getAccelerationY();
  z_values = lis.getAccelerationZ();
 
  Serial.print("X: "); Serial.print(x_values);
  Serial.print(" Y: "); Serial.print(y_values);
  Serial.print(" Z: "); Serial.print(z_values);
  Serial.println();
  delay(50);
}
```

Abre el monitor serial del IDE de Arduino, selecciona una velocidad de baudios de 115200 y observa el resultado.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/138.png" /></div>

## Enviar datos mediante Grove - Wio-E5

Combinamos el código anterior del Grove - Wio-E5 para conectarnos a la red LoRa®. Utilizando comandos AT es posible enviar el valor del sensor IMU a través de la red LoRa®.

Como ya vimos en el código de la sección anterior para obtener los valores del sensor IMU, estos valores corresponden a tres números flotantes separados que pueden tener valores tanto positivos como negativos, y con precisión de hasta dos decimales.

Debido a las limitaciones al enviar datos, primero debemos resolver el problema de convertir los números flotantes en enteros del lado del transmisor, para garantizar que los datos enviados sean enteros. Por lo tanto, multiplicamos los datos de los tres ejes por 100.

De este modo, determinamos el contenido, tamaño y formato de los datos a enviar mediante comandos AT. Podemos establecer un arreglo lo suficientemente grande, almacenar en él las cadenas que deseamos enviar y, finalmente, utilizar la función **send_sync()** para transmitir el arreglo.

El pseudocódigo para esta idea es aproximadamente el siguiente.

```c
  ......
  float x_values, y_values, z_values;
  x_values = lis.getAccelerationX();
  y_values = lis.getAccelerationY();
  z_values = lis.getAccelerationZ();

  int x = x_values*100;
  int y = y_values*100;
  int z = z_values*100;

  static uint8_t data[6] = { 0x00 };  //Use the data[] to store the values of the sensors

  data_decord(x, y, z, data);

  if ( lorae5.send_sync(              //Sending the sensor values out
        8,                            // LoRaWan Port
        data,                         // data array
        sizeof(data),                 // size of the data
        false,                        // we are not expecting a ack
        7,                            // Spread Factor
        14                            // Tx Power in dBm
       ) 
  )
  ......
```

Lo siguiente que necesitamos hacer es usar la función `begin()` para inicializar el Grove - Wio-E5 y la función `setup()` para configurar la información del triplete del Grove - Wio-E5. Cuando enviamos un mensaje de datos usando la función `send_sync()`, intentaremos unirnos a la red LoRaWAN® al mismo tiempo, y una vez que se logre la conexión, los datos serán enviados y se devolverá información como la intensidad de señal y la dirección.

Puedes encontrar el ejemplo de código completo [aquí](https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/IMU-send-data).

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/IMU-send-data" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/IMU-send-data" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

:::tip
No recomendamos que subas el código ahora para ver los resultados, ya que en este punto aún no has configurado Helium o TTN, y obtendrás un resultado de "Join failed". Recomendamos que subas este código después de haber completado el capítulo [Conexión a Helium](https://wiki.seeedstudio.com/Connecting-to-Helium/) o [Conexión a TTN](https://wiki.seeedstudio.com/Connecting-to-TTN/) para completar el proceso de envío de datos.
:::
Una vez que hayas experimentado y comprendido cómo funciona el sensor IMU y el formato de los datos, continúa con el siguiente paso del tutorial para unirte a LoRaWAN®.

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
