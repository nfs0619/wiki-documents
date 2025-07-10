---
description: Grove Temp&Humi Sensor (SHT40)
title: Sensor Grove Temperatura y Humedad (SHT40)
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/K1100-Temp-Humi-Sensor-Grove-LoRa-E5
last_update:
  date: 06/16/2025
  author: Guillermo
---
# Sensor de Temperatura y Humedad Grove (SHT40)

En esta sección, detallaremos cómo funcionan los sensores, cómo obtener los datos del sensor usando el Wio Terminal y cómo enviar los datos utilizando el Wio Terminal junto con el Grove - Wio-E5.

## Actualizable a Sensores Industriales

Con el [controlador SenseCAP S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos SenseCAP S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), puedes convertir fácilmente un sensor Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la etapa de prototipado, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

La carcasa con certificación IP66, la configuración vía Bluetooth, la compatibilidad con redes LoRaWAN® a nivel mundial, la batería interna de 19 Ah y el sólido soporte desde la app hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad lumínica, CO₂, conductividad eléctrica (EC) y una estación meteorológica 8-en-1. Prueba el nuevo SenseCAP S210x para tu próximo proyecto industrial exitoso.

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

La temperatura en el SHT40 se mide utilizando un método de termopar. Un termopar consta de dos tipos de hilos metálicos de diferentes materiales. Un extremo de los dos hilos está soldado para formar el extremo de trabajo, que se coloca en la zona cuya temperatura se desea medir. El otro extremo se llama extremo libre y se conecta al controlador principal para formar un circuito cerrado. Cuando hay una diferencia de temperatura entre el extremo de trabajo y el extremo libre, aparece un potencial termoeléctrico en el circuito. El cambio en este voltaje se envía al microcontrolador (SCM) a través de un circuito de conversión, y se transforma en una señal que puede ser reconocida por la máquina.

La humedad en el SHT40 se mide utilizando una película de poliamina o acetato (un compuesto altamente fraccionado) depositada sobre dos electrodos conductores. Cuando la película absorbe o pierde agua, cambia la constante dieléctrica entre los dos electrodos, lo que a su vez provoca un cambio en la capacidad del condensador. Este cambio de capacitancia puede ser capturado y convertido mediante circuitos de medición externos, y finalmente se muestra como una señal fácilmente identificable en la salida.



<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/165.png" /></div>

For more information on the use of Grove Temp&Humi Sensor its reference [here](https://wiki.seeedstudio.com/Grove-SHT4x/).

## Materials Required

<table align="center">
  <tbody><tr>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-GROVE.jpeg" /></div></td>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/products/113020091/%E5%AE%98%E7%BD%91/11302009_Preview-34.png" /></div></td>
      <td align="center"><div align="center"><img width={160} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/SHT40.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal</td>
      <td align="center">Grove - Wio-E5</td>
      <td align="center">Grove Temp&amp;Humi Sensor (SHT40)</td>
    </tr>
  </tbody></table>

## Preparación Preliminar

### Conexión

En esta rutina, necesitamos conectarnos a una pasarela LoRa® cercana con la ayuda del Grove - Wio-E5. Debemos configurar el puerto Grove del lado **derecho** del Wio Terminal como un puerto serial por software para recibir comandos AT. El sensor Grove Temp&Humi (en el lado **izquierdo**) debe conectarse según el siguiente diagrama:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/SHT40.jpg" /></div>

### Preparación del Software

**Paso 1.** Instalar el software de Arduino.

<div>
  <p style={{}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank" /></p><div align="center"><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></div><p />
</div>

**Paso 2.** Ejecuta la aplicación de Arduino.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>

**Paso 3.** Agrega el Wio Terminal al entorno de Arduino IDE.

Abre Arduino IDE, haz clic en `Archivo > Preferencias`, y copia la siguiente URL en "Gestor de URLs Adicionales de Tarjetas":  

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" /></div>

Luego haz clic en `Herramientas > Placa > Gestor de tarjetas` y busca **Wio Terminal** en el Gestor de Tarjetas.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/addBoard.png" /></div>

**Paso 4.** Selecciona tu placa y puerto

Debes seleccionar la entrada en el menú `Herramientas > Placa` que corresponda a tu placa Arduino, en este caso, **Wio Terminal**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png" /></div>

Selecciona el dispositivo serial de la placa Wio Terminal desde el menú `Herramientas -> Puerto`. Es probable que sea COM3 o superior (COM1 y COM2 suelen estar reservados para puertos seriales de hardware). Para identificarlo fácilmente, desconecta tu Wio Terminal y vuelve a abrir el menú; la entrada que desaparezca será la de tu placa. Luego vuelve a conectarlo y selecciona ese puerto.

:::tip
Para usuarios de Mac, será algo como `/dev/cu.usbmodem141401`.

Si no puedes subir el programa, generalmente es porque Arduino IDE no logró poner el Wio Terminal en modo bootloader (puede ser que el MCU esté detenido o tu programa esté manipulando el USB). La solución es poner manualmente el Wio Terminal en modo bootloader.
:::

 <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

**Paso 5.** Descargar la librería Grove - Wio-E5

Visita el repositorio [Disk91_LoRaE5](https://github.com/disk91/Disk91_LoRaE5) y descarga el repositorio completo en tu disco local.

<div>
  <p style={{}}><a href="https://github.com/disk91/Disk91_LoRaE5" target="_blank" /></p><div align="center"><a href="https://github.com/disk91/Disk91_LoRaE5" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**Paso 6.** Agregar la librería al IDE de Arduino

Ahora puedes instalar la librería del Acelerómetro Digital de 3 Ejes al entorno Arduino IDE. Abre el IDE, haz clic en `Programa -> Incluir Librería -> Añadir Librería .ZIP`, y selecciona el archivo `Disk91_LoRaE5` que acabas de descargar.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" /></div>

## Obtener el valor del Sensor Grove Temp&Humi (SHT40)

**Paso 1.** Descargar la librería del Sensor Grove Temp&Humi

Visita el repositorio [arduino-i2c-sht4x](https://github.com/Sensirion/arduino-i2c-sht4x) y descarga todo el repositorio a tu disco local.

<div>
  <p style={{}}><a href="https://github.com/Sensirion/arduino-i2c-sht4x" target="_blank" /></p><div align="center"><a href="https://github.com/Sensirion/arduino-i2c-sht4x" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

Visita también el repositorio [Sensirion Arduino Core Library](https://github.com/Sensirion/arduino-core) y descarga todo el repositorio a tu disco local.

<div>
  <p style={{}}><a href="https://github.com/Sensirion/arduino-core" target="_blank" /></p><div align="center"><a href="https://github.com/Sensirion/arduino-core" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**Paso 2.** Agregar las librerías al IDE de Arduino

Ahora puedes instalar la librería del sensor Grove Temp&Humi al entorno de desarrollo Arduino IDE. Abre el IDE de Arduino, haz clic en `Programa -> Incluir Librería -> Añadir Biblioteca .ZIP`, y selecciona el archivo `arduino-i2c-sht4x` que acabas de descargar.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" /></div>

**Paso 3.** Obtener los datos de temperatura y humedad desde el SHT40

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-SHT40-value" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-SHT40-value" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

Este repositorio nos muestra cómo obtener los datos de temperatura y humedad. En el código, se utiliza la función `measureHighPrecision()` para obtener la información de temperatura y humedad, la cual es positiva y en formato de número flotante (float).

```cpp
#include <Arduino.h>
#include <SensirionI2CSht4x.h>
#include <Wire.h>

SensirionI2CSht4x sht4x;

void setup() {

    Serial.begin(115200);
    while (!Serial) {
        delay(100);
    }

    Wire.begin();

    uint16_t error;
    char errorMessage[256];

    sht4x.begin(Wire);

    uint32_t serialNumber;
    error = sht4x.serialNumber(serialNumber);
    if (error) {
        Serial.print("Error trying to execute serialNumber(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("Serial Number: ");
        Serial.println(serialNumber);
    }
}

void loop() {
    uint16_t error;
    char errorMessage[256];

    delay(1000);

    float temperature;
    float humidity;
    error = sht4x.measureHighPrecision(temperature, humidity);
    if (error) {
        Serial.print("Error trying to execute measureHighPrecision(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("Temperature:");
        Serial.print(temperature);
        Serial.print("\t");
        Serial.print("Humidity:");
        Serial.println(humidity);
    }
}
```

Abre el monitor serial del IDE de Arduino, selecciona una tasa de baudios de **115200** y observa el resultado.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/166.png" /></div>

## Enviar datos a través de Grove - Wio-E5

Vamos a combinar el código anterior del Grove - Wio-E5 para conectarlo a la red LoRa®. Utilizando comandos AT es posible enviar el valor del sensor Grove Temp&Humi a la red LoRa®.

En el código de la sección anterior, sabemos que los valores de temperatura y humedad generalmente consisten en dos cifras enteras y dos decimales, y son valores positivos en formato flotante (`float`).

Debido a las limitaciones al enviar datos, necesitamos resolver el problema de convertir los números flotantes a enteros en el lado del envío, para asegurarnos de que los datos enviados sean enteros. Por ello, **multiplicamos todos los valores de temperatura y humedad por 100**.

De esta forma, determinamos el contenido, tamaño y formato de los datos a enviar mediante comandos AT. Podemos declarar un arreglo lo suficientemente grande, almacenar en él las cadenas que queremos enviar, y finalmente usar la función **send_sync()** para enviar ese arreglo.

El pseudocódigo para esta idea sería aproximadamente el siguiente:

```c
  ......
  error = sht4x.measureHighPrecision(temperature, humidity);

  int_temp = temperature*100;
  int_humi = humidity*100;
  
  static uint8_t data[4] = { 0x00 };  //Use the data[] to store the values of the sensors

  data_decord(int_temp, int_humi, data);
  
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

El resto de lo que necesitamos hacer es usar la función `begin()` para inicializar el Grove - Wio-E5 y la función `setup()` para configurar la **tripleta** de autenticación del Grove - Wio-E5 (DevEUI, AppEUI y AppKey). Cuando enviamos un mensaje de datos utilizando la función `send_sync()`, intentaremos unirnos a la red LoRaWAN® al mismo tiempo, y una vez que tenga éxito, los datos serán enviados y se mostrará información como la intensidad de señal y la dirección del nodo.

Puedes encontrar el ejemplo completo de código en el siguiente enlace:  
[github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SHT40-send-data](https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SHT40-send-data)

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SHT40-send-data" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SHT40-send-data" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

:::tip
No se recomienda subir el código en este momento para verificar los resultados, ya que aún no has configurado Helium o TTN, lo que resultará en un error de conexión tipo **"Join failed"**.  
Te sugerimos subir este código **después** de haber completado los capítulos de configuración de [Helium](https://wiki.seeedstudio.com/Connecting-to-Helium/) o [TTN](https://wiki.seeedstudio.com/Connecting-to-TTN/) para completar el proceso de envío de datos correctamente.
:::

Una vez que hayas experimentado y comprendido cómo funciona el sensor de temperatura y humedad Grove Temp&Humi (SHT40), así como su formato de datos, continúa con el siguiente paso del tutorial: unirse a **LoRaWAN®**.

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
