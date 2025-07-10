---
description: Development_Tutorial_of_Wio-Tracker 1110 
title: Tutorial de Desarrllo de Wio Tracker 1110
keywords:
- Tracker
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/development_tutorial_for_Wio-trakcer
sidebar_position: 2
sidebar_class_name: hidden
last_update:
  date: 05/21/2025
  author: Guillermo
---

Antes de comenzar el desarrollo, por favor revisa la guía [Configura tu entorno de desarrollo](https://wiki.seeedstudio.com/setup_toolchain_for_wio_tracker/) para preparar correctamente tus herramientas.

## Visión general del hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/hard-overview.png" alt="pir" width={800} height="auto" /></p>

## Visión general del firmware

<p style={{textAlign: 'center'}}><img src="https://github.com/Seeed-Studio/Wio_Tracker_1110_Examples/raw/b2ebc5f1de0af24a9f72316418f9313de4264e0f/media/1.png
" alt="pir" width={600} height="auto" /></p>



## Grove

El Wio Tracker 1110 Dev Board cuenta con 6 interfaces Grove, compatibles con más de 300 módulos Grove. Para más detalles sobre los módulos Grove, visita [aquí](https://wiki.seeedstudio.com/Grove_Sensor_Intro/).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio-tracker-grove.png" alt="pir" width={800} height="auto" /></p>




### Grove I2C

El kit de desarrollo tiene un puerto Grove I2C con los pines `SDA` en el pin 27 y `SCL` en el pin 26.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Grove_iic.png" alt="pir" width={300} height="auto" /></p>


### Grove UART

La placa Wio Tracker 1110 dispone de dos periféricos UART: `uart0` y `uart1`. 

- `uart0` está conectado al CH340C para fines de depuración (debug).  
- `uart1` funciona como puerto Grove UART.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Grove_uart.png" alt="pir" width={300} height="auto" /></p>

Según el esquema, el pin TXD está en el pin 8 y RXD en el pin 6.

```cpp
#define     LED1                      13
#define     LED2                      14
#define     TXD                       8
#define     RXD                       6
#define     UART_TX_RX_BUF_SIZE       256
```



### Grove Digital


```cpp
#include <Adafruit_TinyUSB.h>  
#include <Wire.h>              
#include <Ultrasonic.h>        

// Define the pin to which the ultrasonic sensor is connected
constexpr int ULTRASONIC_PIN = D0;  

Ultrasonic ultrasonic(ULTRASONIC_PIN);  

void setup()
{
  delay(100);                 
  Serial.begin(115200);        // Start Serial communication at a baud rate of 115200
  while (!Serial) delay(100); 

void loop()
{
  long RangeInInches;         // Variable to store distance in inches
  long RangeInCentimeters;    // Variable to store distance in centimeters

  Serial.println("The distance to obstacles in front is: ");  

  RangeInInches = ultrasonic.MeasureInInches();  // Measure distance in inches using the Ultrasonic sensor
  Serial.print(RangeInInches);  
  Serial.println(" inch");       

  delay(250); 

  RangeInCentimeters = ultrasonic.MeasureInCentimeters();  
  Serial.print(RangeInCentimeters);  
  Serial.println(" cm");             

  delay(2500);  
}
```

### Grove Análogo



<details> 
<summary>Example Code:</summary>

```cpp
#include <Adafruit_TinyUSB.h> // for Serial

constexpr int ADCIN = A0;
constexpr float MV_PER_LSB = 3600.0f / 1024.0f; // 10-bit ADC with 3.6V input range

void setup()
{
  delay(100);
  Serial.begin(115200);
  while (!Serial) delay(100);
}

void loop()
{
	// Get a fresh ADC value
  long sum = 0;
  for (int i = 0; i < 32; i++)
  {
    sum += analogRead(ADCIN);
  }
  int adcvalue = sum / 32;

  // Display the results
  Serial.print(adcvalue);
  Serial.print(" [");
  Serial.print((float)adcvalue * MV_PER_LSB);
  Serial.println(" mV]");

  delay(1000);
}
```
</details> 

### LoRaWAN 



## Resource

**[Github]** [Seeed-Studio/Wio_Tracker_1110_Dev_Board](https://github.com/Seeed-Studio/Wio_Tracker_1110_Examples)