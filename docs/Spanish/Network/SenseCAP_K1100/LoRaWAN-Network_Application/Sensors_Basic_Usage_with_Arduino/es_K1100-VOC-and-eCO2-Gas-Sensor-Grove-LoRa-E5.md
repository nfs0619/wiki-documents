---
description: Grove VOC and eCO2 Gas Sensor (SGP30)
title: Sensor de Gas Grove VOC y eCO2 (SGP30)
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5
last_update:
  date: 06/17/2025
  author: Guillermo
---
# Sensor de Gas Grove VOC y eCO2 (SGP30)

En esta sección, detallaremos cómo funcionan los sensores, cómo obtener datos del sensor usando el Wio Terminal y cómo enviar los datos utilizando el Wio Terminal junto con el Grove - Wio-E5.

## Actualizable a Sensores Industriales

Con el controlador SenseCAP [S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el registrador de datos [S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de robustos [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

La carcasa con clasificación IP66, la configuración vía Bluetooth, la compatibilidad con la red global LoRaWAN®, la batería incorporada de 19 Ah y el potente soporte desde la aplicación móvil hacen que el [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) sea la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad lumínica, CO2, conductividad eléctrica (EC) y una estación meteorológica 8 en 1. Prueba el nuevo SenseCAP S210x para tu próximo proyecto industrial exitoso.


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

El SGP30 es un sensor de gas para interiores basado en óxidos metálicos, con múltiples elementos de detección en un solo núcleo. Incorpora cuatro elementos sensores de gas y proporciona una señal de salida totalmente calibrada para la calidad del aire, enfocándose principalmente en su detección.

La parte sensible (MEMS) del SGP30 se basa en una película calentada de nanopartículas de óxido metálico (MOx). El material sensible al gas reacciona con el oxígeno adsorbido en las partículas del óxido metálico al entrar en contacto con el gas objetivo, liberando así electrones. Esto provoca un cambio en la resistencia de la capa de óxido metálico, que es medida por el sensor.

En resumen, la presencia de un gas reductor hace que disminuya la concentración de oxígeno en la superficie del material sensible al gas, lo que cambia la resistencia (o conductividad) del semiconductor. La detección posterior de la resistencia, el procesamiento de señales y la conversión son realizados por la sección del circuito (ASIC).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/168.png" /></div>

Para más información sobre el uso del sensor de gas Grove VOC y eCO2, puedes consultar su referencia [aquí](https://wiki.seeedstudio.com/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/).

## Materiales Necesarios

<table align="center">
  <tbody><tr>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-GROVE.jpeg" /></div></td>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/products/113020091/%E5%AE%98%E7%BD%91/11302009_Preview-34.png" /></div></td>
      <td align="center"><div align="center"><img width={170} src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/IMG_0012a.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal</td>
      <td align="center">Grove - Wio-E5</td>
      <td align="center">Sensor de Gas Grove VOC y eCO2 (SGP30)</td>
    </tr>
  </tbody></table>

## Preparación Preliminar

### Conexión

En esta rutina, necesitamos conectarnos a una puerta de enlace LoRa® cercana con la ayuda del Grove - Wio-E5. Debemos configurar el puerto Grove en el lado derecho del Wio Terminal como un puerto serial por software para recibir comandos AT. El sensor de gas Grove VOC y eCO2 se conecta en el lado izquierdo, de acuerdo con el siguiente diagrama.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/sgp30.jpg" /></div>

### Preparación del Software

**Paso 1.** Instala el software de Arduino.

<div>
  <p style={{}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank" /></p><div align="center"><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></div><p />
</div>

**Paso 2.** Abre la aplicación de Arduino.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>

**Paso 3.** Agrega el Wio Terminal al IDE de Arduino.

Abre tu Arduino IDE, haz clic en `Archivo > Preferencias`, y copia la siguiente URL en "Gestor de URLs Adicionales de Tarjetas":

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" /></div>

Luego, haz clic en `Herramientas > Placa > Gestor de Tarjetas` y busca **Wio Terminal** en el gestor.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/addBoard.png" /></div>

**Paso 4.** Selecciona tu placa y puerto

Deberás seleccionar la entrada en el menú `Herramientas > Placa` que corresponda a tu Arduino. En este caso, selecciona **Wio Terminal**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png" /></div>

Selecciona el dispositivo serial del Wio Terminal en el menú `Herramientas -> Puerto`. Probablemente sea COM3 o superior (COM1 y COM2 normalmente están reservados para puertos seriales de hardware). Para saber cuál es, puedes desconectar tu Wio Terminal y volver a abrir el menú; la entrada que desaparezca será la de tu placa Arduino. Luego vuelve a conectar la placa y selecciona ese puerto serial.

:::tip
Para usuarios de Mac, será algo como `/dev/cu.usbmodem141401`.

Si no puedes cargar el sketch, normalmente se debe a que el IDE de Arduino no puede poner el Wio Terminal en modo bootloader (porque el MCU se detuvo o tu programa está manejando el USB). La solución es poner manualmente tu Wio Terminal en modo bootloader.
:::

 <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

**Paso 5.** Descarga la biblioteca Grove - Wio-E5

Visita el repositorio [Disk91_LoRaE5](https://github.com/disk91/Disk91_LoRaE5) y descarga todo el repositorio a tu disco local.

<div>
  <p style={{}}><a href="https://github.com/disk91/Disk91_LoRaE5" target="_blank" /></p><div align="center"><a href="https://github.com/disk91/Disk91_LoRaE5" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**Paso 6.** Agregar bibliotecas al IDE de Arduino

Ahora, puedes instalar la biblioteca del Acelerómetro Digital de 3 Ejes en el IDE de Arduino. Abre el IDE, haz clic en `Programa -> Incluir biblioteca -> Añadir biblioteca .ZIP`, y selecciona el archivo `Disk91_LoRaE5` que acabas de descargar.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" /></div>

## Obtener el valor del sensor de gas Grove VOC y eCO2 (SGP30)

**Paso 1.** Descargar la biblioteca del sensor Grove VOC y eCO2

Visita el repositorio [SGP30_Gas_Sensor](https://github.com/Seeed-Studio/SGP30_Gas_Sensor) y descarga todo el repositorio a tu disco local.

<div>
  <p style={{}}><a href="https://github.com/Seeed-Studio/SGP30_Gas_Sensor" target="_blank" /></p><div align="center"><a href="https://github.com/Seeed-Studio/SGP30_Gas_Sensor" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**Paso 2.** Agregar la biblioteca al IDE de Arduino

Ahora puedes instalar la biblioteca del sensor Grove VOC y eCO2 en el IDE de Arduino. Abre el IDE, y haz clic en `Programa -> Incluir biblioteca -> Añadir biblioteca .ZIP`, y selecciona el archivo `SGP30_Gas_Sensor` que acabas de descargar.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" /></div>

**Paso 3.** Obtener datos de VOC y eCO2 del SGP30

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-SGP30-value" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-SGP30-value" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

Este repositorio muestra cómo obtener los datos de VOC y eCO2. En el código, usamos la función `sgp_measure_signals_blocking_read()` para obtener la información de VOC y eCO2, la cual se devuelve como valores enteros positivos.

```cpp
#include <Arduino.h>
#include "sensirion_common.h"
#include "sgp30.h"

void setup() {
    s16 err;
    u32 ah = 0;
    u16 scaled_ethanol_signal, scaled_h2_signal;
    Serial.begin(115200);
    Serial.println("serial start!!");

    /*  Init module,Reset all baseline,The initialization takes up to around 15 seconds, during which
        all APIs measuring IAQ(Indoor air quality ) output will not change.Default value is 400(ppm) for co2,0(ppb) for tvoc*/
    while (sgp_probe() != STATUS_OK) {
        Serial.println("SGP failed");
        while (1);
    }
    /*Read H2 and Ethanol signal in the way of blocking*/
    err = sgp_measure_signals_blocking_read(&scaled_ethanol_signal,
                                            &scaled_h2_signal);
    if (err == STATUS_OK) {
        Serial.println("get ram signal!");
    } else {
        Serial.println("error reading signals");
    }

    // Set absolute humidity to 13.000 g/m^3
    //It's just a test value
    sgp_set_absolute_humidity(13000);
    err = sgp_iaq_init();
}

void loop() {
    s16 err = 0;
    u16 tvoc_ppb, co2_eq_ppm;
    err = sgp_measure_iaq_blocking_read(&tvoc_ppb, &co2_eq_ppm);
    if (err == STATUS_OK) {
        Serial.print("tVOC  Concentration:");
        Serial.print(tvoc_ppb);
        Serial.println("ppb");

        Serial.print("CO2eq Concentration:");
        Serial.print(co2_eq_ppm);
        Serial.println("ppm");
    } else {
        Serial.println("error reading IAQ values\n");
    }
    delay(1000);
}
```

Abre el monitor serial del IDE de Arduino y selecciona la velocidad de baudios a 115200 para observar el resultado.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/171.png" /></div>

## Enviar datos vía Grove - Wio-E5

Combinamos el código anterior del Grove - Wio-E5 para conectarnos a la red LoRa®. Usando comandos AT es posible enviar los valores del sensor Grove VOC y eCO2 a la red LoRa®.

En el código de la sección anterior, sabemos que los valores de VOC y eCO2 son enteros positivos. Además, la longitud de estos dos enteros no excederá los 8 bits.

De esta forma, determinamos el contenido, tamaño y formato de los datos a enviar mediante comandos AT. Podemos también configurar un arreglo lo suficientemente grande, almacenar en él las cadenas que necesitamos enviar y finalmente usar la función **send_sync()** para enviar el arreglo.

El pseudocódigo para esta idea es aproximadamente el siguiente.

```c
  ......
  s16 err = 0;
  u16 tvoc_ppb, co2_eq_ppm;
  err = sgp_measure_iaq_blocking_read(&tvoc_ppb, &co2_eq_ppm);
  
  static uint8_t data[4] = { 0x00 };  //Use the data[] to store the values of the sensors

  data_decord(tvoc_ppb, co2_eq_ppm, data);

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

El resto de lo que necesitamos hacer es usar la función `begin()` para inicializar el Grove - Wio-E5 y la función `setup()` para configurar la información del triplete del Grove - Wio-E5. Cuando enviamos un mensaje de datos usando la función `send_sync()`, intentaremos unirnos a la red LoRaWAN® al mismo tiempo, y una vez que se logre, los datos serán enviados y se devolverá información como la intensidad de la señal y la dirección.

El ejemplo completo del código se puede encontrar [aquí](https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SGP30-send-data).

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SGP30-send-data" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SGP30-send-data" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

:::tip
No recomendamos subir el código ahora para ver los resultados, porque en este punto aún no has configurado Helium/TTN y obtendrás un resultado de "Join failed" (Fallo en la unión). Recomendamos subir este código después de haber completado el capítulo de [Conexión a Helium](https://wiki.seeedstudio.com/Connecting-to-Helium/) o [Conexión a TTN](https://wiki.seeedstudio.com/Connecting-to-TTN/) para completar el proceso completo de envío de datos.
:::

Una vez que hayas experimentado y entendido cómo funciona el sensor Grove VOC y eCO2 y el formato de los datos, por favor continúa con el siguiente paso del tutorial para unirte a LoRaWAN®.

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
