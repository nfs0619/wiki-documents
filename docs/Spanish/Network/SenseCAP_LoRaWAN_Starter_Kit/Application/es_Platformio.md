---
description: Beginner's Guide to LoRa Communication with Wio-E5 Module and Arduino on PlatformIO
title: LoRaWAN Usando Wio-E5 en PlatformIO
keywords:
    - lorawan
    - grove
    - platformio
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/4.jpg
slug: /es/platformio_wio_e5
toc_max_heading_level: 4
sidebar_position: 1
last_update:
    date: 2024-01-26T06:59:58.390Z
    author: Guillermo
---

# Primeros Pasos con LoRaWAN Usando Wio-E5 y Arduino en PlatformIO

Si deseas aprender sobre LoRa y sus características, como su arquitectura de red y aplicaciones, puedes consultar este artículo: [LoRapedia, que presenta LoRa y LoRaWAN en detalle](https://www.seeedstudio.com/blog/2020/08/03/lorapedia-an-introduction-of-lora-and-lorawan-technology/). Explica qué es LoRa, cómo funciona, así como sus ventajas y desventajas.

<div style={{ textAlign: 'center' }}>

<img width={680} src="https://wdcdn.qpic.cn/MTIzNDU2Nzg5_993734_kw1N-KbhpVV3i5EZ_1693791639?w=1844&h=904" alt="LoRaWAN Framework " />
<div style={{ marginTop: '-8px' }}><em>LoRaWAN Network Framework</em></div>

</div>  

## Introducción

Esta guía detalla cómo usar el módulo LoRa Wio-E5 con el XIAO ESP32S3 en PlatformIO, siendo aplicable también a cualquier placa compatible con Arduino.

### Lo que aprenderás:

1. **Programación con bibliotecas de Arduino para Wio-E5**: Utilización de bibliotecas en lugar de depender únicamente de comandos AT.
2. **Integración a la red LoRaWAN**: Pasos para conectar el Wio-E5 a una red LoRaWAN.
3. **Implementación de Envío y Recepción de Datos**: Gestión de la transmisión (uplink) y recepción (downlink) de datos.

Esta aplicación adapta el hardware estándar para incluir una pantalla OLED para visualización directa de datos y un LED circular para indicar la recepción de datos, además del reporte de datos desde un sensor DHT11, facilitando así el aprendizaje práctico. 

<!-- 上传下达数据的说明 不够清晰 -->

## Requisitos Previos

### Hardware

- **[XIAO ESP32S3](/xiao_esp32s3_getting_started/)**: Una placa versátil compatible con Arduino, ideal para proyectos IoT. Puedes sustituirla por cualquier otra placa compatible con Arduino.
- **[Grove - DHT11](/Grove-TemperatureAndHumidity_Sensor)**: Para recolección de datos ambientales, esencial en muchas aplicaciones IoT.
- **[Grove - LED Circular](/Grove-Circular_LED)**: Usado para control de luz. Puedes reemplazarlo por otro componente a tu elección.
- **[Grove - Pantalla OLED](https://wiki.seeedstudio.com/Grove-OLED-Display-0.96-SSD1315/)**: Añade visualización de datos a tu proyecto. Es opcional pero recomendada para una interfaz más interactiva.
- **[Grove - Módulo LoRa Wio-E5](/Grove_LoRa_E5_New_Version/)**: Proporciona comunicación inalámbrica de largo alcance y bajo consumo, ideal para aplicaciones LoRaWAN.
- **[Gateway SenseCAP M2 Multi-Plataforma](/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_Multi_Platform_Overview/)**: Componente crítico para habilitar la comunicación entre el módulo Wio-E5 y la red LoRaWAN.

### Software

#### PlatformIO

<div align="center">
    <img class="border-radius: 10px;" src="https://cdn.platformio.org/images/platformio-logo.17fdc3bc.png" height="220" alt="PlatformIO Logo"  title="PlatformIO: a professional collaborative platform for embedded development"/>
</div>

Para este proyecto utilizaremos PlatformIO, que ofrece múltiples ventajas:

- **Gestión Eficiente de Bibliotecas**: PlatformIO permite gestionar bibliotecas de forma sencilla y efectiva, asegurando que tu proyecto esté siempre actualizado.
- **Integración con VSCode**: Mejora significativamente la experiencia de desarrollo con resaltado de sintaxis, IntelliSense y una interfaz fluida.
- **Agregado y Configuración Sencilla de Bibliotecas**: Con PlatformIO, puedes añadir y configurar librerías fácilmente, adaptando tu proyecto a necesidades específicas.

:::info
Si eres nuevo en PlatformIO o deseas profundizar en su uso, te recomendamos estos recursos:

- [Cómo Usar PlatformIO IDE para Programar en Arduino](/Software-PlatformIO) – Guía amigable para principiantes.
- [Sitio Web Oficial de PlatformIO](https://platformio.org/) – Para instrucciones detalladas y completas.
:::

#### Servidor de Red LoRaWAN (ChirpStack)

Esta sección proporciona una guía para conectarse a un servidor de red LoRaWAN local, usando la plataforma [ChirpStack](https://www.chirpstack.io/) como ejemplo principal. Nos enfocaremos específicamente en el uso del [Gateway SenseCAP M2 Multi-Plataforma LoRaWAN para interiores (EU868)](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html) para este propósito.

:::info
Si no estás familiarizado con los siguientes pasos en ChirpStack, tales como:

- Crear un perfil de dispositivo
- Agregar una aplicación
- Registrar un dispositivo bajo una aplicación

Puedes aprender más en estos recursos:

- [Registrar el dispositivo en el servidor de red LoRaWAN](/SenseCAP_Indicator_Application_LoRaWAN/#21-configure-the-sensecap-lorawan-gateway)
- [Configuración del Gateway SenseCAP M2 MP](/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_MP_Gateway_LNS_Configuration)

*Lo haremos paso a paso en la siguiente sección*.
:::

:::tip
Para quienes prefieran plataformas alternativas como AWS IoT o TTN, consulta las siguientes guías:

- [Conexión a AWS IoT](/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-AWS-IoT/)
- [Conexión a TTN (The Things Network)](/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-The-Things-Network/)
:::

## Trabajo Preparatorio

Ahora vamos a comenzar. Haremos lo siguiente:

### Red LoRaWAN

Para asegurar la comunicación exitosa con la red LoRaWAN a través del módulo Wio-E5, hay algunos aspectos clave que debes verificar:

1. **Cobertura LoRaWAN:**
   - Asegúrate de que tu dispositivo esté dentro del área de cobertura de una red LoRaWAN. Por ejemplo, en mi caso, el dispositivo está cubierto por un gateway M2 que opera en la banda de frecuencia EU868. Esto es crucial, ya que el dispositivo necesita comunicarse con un gateway LoRaWAN cercano que soporte la misma banda.

2. **Vinculación del Gateway con el LNS:**
   - También es esencial confirmar que uno de estos gateways esté vinculado al Servidor de Red LoRaWAN (LNS) que piensas utilizar. Esta conexión es vital porque el gateway actúa como puente entre tu dispositivo Wio-E5 y el servidor, y define el camino que seguirán los datos para llegar al LNS.

#### Obtener los Parámetros de Unión

Asumiendo que ya configuraste el servidor de red ChirpStack en la sección anterior, el siguiente paso es obtener los parámetros necesarios para unirse a la red. Estos parámetros son fundamentales para que tu dispositivo pueda acceder a la red correctamente.

Para un tutorial más detallado paso a paso, consulta la sección:  
[Registrar el dispositivo en el servidor de red LoRaWAN](/SenseCAP_Indicator_Application_LoRaWAN/#21-configure-the-sensecap-lorawan-gateway)

#### Agregar un Perfil de Dispositivo

El módulo Wio-E5 está configurado por defecto para usar el Parámetro Regional *V102B*. Esta información proviene de la sección `4.28.13 VER` de la [Especificación de Comandos AT del Wio-E5](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf).

Por lo tanto, seleccionaremos `LoRaWAN 1.0.2` como versión MAC y `RP002-1.0.2` como revisión del parámetro regional.

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/device_profile.png"/>
</div>

Si necesitas usar la **Clase C** para tu dispositivo, puedes activarla haciendo clic en el siguiente botón:

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/activate_class_c.png"/>
</div>

<!-- Additional CodeC information will be added here -->

#### Agregar una Aplicación

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/add_application.png"/>
</div>

#### Agregar un Dispositivo

Debes ingresar el **Device EUI (EUI64)** obtenido previamente en la información de tu dispositivo.
<!-- TBD -->

Si lo has cambiado, dirígete a esta [sección](#get_eui) para obtener el `DevAddr`, `DevEui` y `AppEui`.

Alternativamente, si prefieres usar un nuevo `DevEUI`, puedes regenerarlo y luego enviarlo.

<div align="center">
  <img class='border-radius: 10px;' width={520} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/add_device.png"/>
</div>

Y luego obtén la `AppKey`:

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/get_appKey.png"/>
</div>

:::note Información del Dispositivo
Hasta este punto, hemos obtenido las siguientes credenciales necesarias para la operación de unión a la red LoRaWAN:

- **DevEUI:** `2cf7f1205100a785`
- **AppKey:** `19aee7bedec56509a9c66a44b7956b6f`

Estas credenciales son esenciales para el registro y comunicación segura del dispositivo con la red LoRaWAN.
:::

:::tip ¿Por Qué No Necesitamos AppEUI?
En el contexto de LoRaWAN, `DevEUI` y `AppKey` son fundamentales para la identificación del dispositivo y su comunicación segura. El `AppEUI` (también conocido como `JoinEUI` en LoRaWAN 1.1 y versiones posteriores) se utiliza normalmente durante el proceso de unión para identificar la instancia del servidor de aplicaciones a la que debe conectarse el dispositivo.

Sin embargo, en algunas configuraciones de red o con ciertas implementaciones del servidor de red, como **The Things Network (TTN)**, el `AppEUI` puede no ser esencial o ya estar predefinido. Este enfoque simplifica la configuración del dispositivo, al reducir la cantidad de parámetros necesarios. Por tanto, dependiendo de la configuración de tu servidor de red, **puede que no sea necesario utilizar explícitamente un AppEUI para el proceso de unión**.
:::

## Manos a la Obra

#### Crear un Nuevo Proyecto en PlatformIO

Para comenzar, crearás un proyecto en PlatformIO. Sigue estos pasos:

1. **Abre PlatformIO:** Inicia la IDE de PlatformIO en tu computadora.

2. **Crea un Nuevo Proyecto:** Desde el menú principal selecciona **New Project** (Nuevo Proyecto).

Aquí tienes una imagen de ejemplo mostrando la creación del proyecto en PlatformIO:

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/create_project.png"/>
</div>

Para este proyecto, selecciona **XIAO ESP32S3** como la placa de desarrollo.

Ejemplo de creación de proyecto para XIAO ESP32S3:

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/xiaos3_prj.png"/>
</div>


### Agregar las Bibliotecas Necesarias

Después de crear tu proyecto, necesitas incluir varias bibliotecas esenciales. Puedes agregarlas directamente en tu archivo `platformio.ini` para que PlatformIO las descargue automáticamente:

```ini
[env:seeed_xiao_esp32s3]
platform = espressif32
board = seeed_xiao_esp32s3
framework = arduino
lib_deps = 
    olikraus/U8g2@^2.35.9
    plerup/EspSoftwareSerial@^8.2.0
    https://github.com/dok-net/ghostl # Issue Fix: https://github.com/plerup/espsoftwareserial/issues/305#issuecomment-1880188894
    seeed-studio/Grove Temperature And Humidity Sensor@^2.0.2
    seeed-studio/Grove LED Bar@^1.0.0
    https://github.com/andresoliva/LoRa-E5
```

Una vez que el Administrador de Librerías de PlatformIO haya terminado de procesar tus solicitudes, podrás ver todas las librerías que se han añadido a tu proyecto. Estas librerías se almacenan en el directorio: `.pio/libdeps/seeed_xiao_esp32s3`. Este directorio es específico para la tarjeta seleccionada, que en este caso es la Seeed XIAO ESP32S3.

Aquí tienes una imagen que muestra cómo se verá tu entorno de PlatformIO después de haber añadido correctamente las librerías:

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/platformio_libraries.png"/>
</div>

En este directorio encontrarás carpetas para cada librería que hayas especificado en tu archivo `platformio.ini`. Estas carpetas contienen los archivos necesarios para cada librería, como el código fuente, ejemplos y metadatos adicionales.

Esta organización facilita la gestión y actualización de las librerías. PlatformIO se encarga automáticamente de la compatibilidad y la resolución de dependencias, lo que asegura que tu proceso de desarrollo sea fluido y eficiente. También puedes actualizar o eliminar librerías fácilmente utilizando el Administrador de Librerías de PlatformIO, manteniendo así tu entorno de desarrollo al día con las últimas versiones.

#### Unirse a la Red LoRaWAN (Pruebas)

En esta sección, utilizaremos la biblioteca andresoliva/LoRa-E5 (https://github.com/andresoliva/LoRa-E5) para controlar el módulo Wio-E5 y conectarlo a la red LoRaWAN, en lugar de usar comandos AT manualmente.

```cpp
#include <Arduino.h>
#include <LoRa-E5.h> //main LoRa

#ifdef U8X8_HAVE_HW_SPI
    #include <SPI.h>
#endif
#ifdef U8X8_HAVE_HW_I2C
    #include <Wire.h>
#endif

// highlight-start
#if defined(ARDUINO_ARCH_AVR)
    #define serialLog Serial

#elif defined(ARDUINO_ARCH_SAMD) || defined(ARDUINO_ARCH_SAM)
    #define serialLog SerialUSB
#else
    #define serialLog Serial
#endif
// highlight-end

const int RXPin = D7, TXPin = D6; // Replace with your Wio-E5 RX,TX pin number

/************************LORA SET UP*******************************************************************/
#define LoRa_APPKEY           "19aee7bedec56509a9c66a44b7956b6f" /*Custom key for this App*/
#define LoRa_FREQ_standard    EU868                              /*International frequency band. see*/
#define LoRa_DR               DR4                                /*DR5=5.2kbps //data rate. see at https://www.thethingsnetwork.org/docs/lorawan/regional-parameters/    */
#define LoRa_DEVICE_CLASS     CLASS_C                            /*CLASS_A for power restriction/low power nodes. Class C for other device applications */
#define LoRa_PORT_BYTES       8                                  /*node Port for binary values to send, allowing the app to know it is recieving bytes*/
#define LoRa_PORT_STRING      7                                  /*Node Port for string messages to send, allowing the app to know it is recieving characters/text */
#define LoRa_POWER            14                                 /*Node Tx (Transmition) power*/
#define LoRa_CHANNEL          0                                  /*Node selected Tx channel. Default is 0, we use 2 to show only to show how to set up*/
#define LoRa_ADR_FLAG         false                              /*ADR(Adaptative Dara Rate) status flag (True or False). Use False if your Node is moving*/
/*Time to wait for transmiting a packet again*/
#define Tx_delay_s            9.5 /*delay between transmitions expressed in seconds*/
/*Packet information*/
#define PAYLOAD_FIRST_TX      10   /*bytes to send into first packet*/
#define Tx_and_ACK_RX_timeout 6000 /*6000 for SF12,4000 for SF11,3000 for SF11, 2000 for SF9/8/, 1500 for SF7. All examples consering 50 bytes payload and BW125*/
/*Buffers used to send*/
unsigned char buffer_binary[128] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20};
char          buffer_char[50]    = "I am sending this message to a LoRa Gateway."; /**/
/*******************************************************************/
/*Set up the LoRa module with the desired configuration */
void LoRa_setup(void) {
    lora.setDeviceMode(LWOTAA); /*LWOTAA or LWABP. We use LWOTAA in this example*/
    lora.setDataRate((_data_rate_t)LoRa_DR, (_physical_type_t)LoRa_FREQ_standard);
    lora.setKey(NULL, NULL, LoRa_APPKEY);                /*Only App key is seeted when using OOTA*/
    lora.setClassType((_class_type_t)LoRa_DEVICE_CLASS); /*set device class*/
    lora.setPort(LoRa_PORT_BYTES);                       /*set the default port for transmiting data*/
    lora.setPower(LoRa_POWER);                           /*sets the Tx power*/
    lora.setChannel(LoRa_CHANNEL);                       /*selects the channel*/
    lora.setAdaptiveDataRate(LoRa_ADR_FLAG);             /*Enables adaptative data rate*/
}

void setup() {
    serialLog.begin(9600);
    while (!serialLog)
        ; // Wait until Serial is ready
    lora.init(TXPin, RXPin);
    /*set up device. You must set up all your parameters BEFORE Joining.
     If you make any change (outside channel or port setup), you should join again the network for proper working*/
    LoRa_setup();
    /*Enters in a while Loop until the join process is completed*/
    serialLog.println("Waiting to join the network...");
    while (lora.setOTAAJoin(JOIN, 10000) == 0)
        ; // will attempt to join network until the ends of time. https://www.thethingsnetwork.org/docs/lorawan/message-types/
    /*POWER DOWN the LoRa module until next Tx (Transmition) cicle*/
    lora.setDeviceLowPower();
    serialLog.println("Joining network successful!");
}

void loop() {

    /*Wake Up the LoRa module*/
    lora.setDeviceWakeUp(); /*if the module is not in sleep state, this command does nothing*/

    /*-----------sending a string message*/
    lora.setPort(LoRa_PORT_STRING); /*set port configured in reception Gateway for expecting Strings*/
    lora.transferPacketWithConfirmed(buffer_char, Tx_and_ACK_RX_timeout);
    /*--------sending bytes message*/
    lora.setPort(LoRa_PORT_BYTES); /*set port configured in reception Gateway for expecting bytes*/
    lora.transferPacketWithConfirmed(buffer_binary, PAYLOAD_FIRST_TX, Tx_and_ACK_RX_timeout);

    /*POWER DOWN the LoRa module until next Tx Transmition (Tx) cicle*/
    lora.setDeviceLowPower();
    delay((unsigned int)(Tx_delay_s*1000));/*Convert the value in seconds to miliseconds*/
}
```
Let's build and flash it to the board.

<!-- <div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/build_flash.png"/>
</div> -->

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/flash_success_lorawan_test.png"/> 
</div>

<!-- add a flag to build and flash -->

Ahora podemos ver que aparece el mensaje, y notamos que hay **dos mensajes** ahí:

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/lorawan_event_package.png"/> 
</div>

Es fácil entender el dato `00010203040506070809`, que proviene del arreglo `buffer_binary`.

También aparece este dato codificado: `SSBhbSBzZW5kaW5nIHRoaXMgbWVzc2FnZSB0byBhIExvUmEgR2F0ZXdheS4=`, ¿qué significa? Ese paquete está codificado en **Base64**. Podemos usar esta herramienta para decodificarlo:  
[base64 Decode](https://emn178.github.io/online-tools/base64_decode.html)

<div style={{ textAlign: 'center' }}>

<img class='border-radius: 10px;' width={420} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/lorawan_string_decode.png" alt="decode " />
<div style={{ marginTop: '-8px' }}><em><a href="https://emn178.github.io/online-tools/base64_decode.html?input=SSBhbSBzZW5kaW5nIHRoaXMgbWVzc2FnZSB0byBhIExvUmEgR2F0ZXdheS4%3D">🖱️ Haz clic aquí para decodificar</a></em></div>

</div>

Sí, proviene del arreglo `buffer_char`: `I am sending this message to a LoRa Gateway` (Estoy enviando este mensaje a una pasarela LoRa).

## Solución de Problemas

### P1: Problema con la librería Grove_LED_Bar

Si estás experimentando problemas con la librería `Grove_LED_Bar`, agrega las siguientes definiciones de macros al inicio del archivo `Grove_LED_Bar.cpp`:

```cpp
#include "Grove_LED_Bar.h"
// Add these macros to resolve conflicts
// highlight-start
#define max(a, b) (((a) > (b)) ? (a) : (b))
#define min(a, b) (((a) < (b)) ? (a) : (b))
// highlight-end
```

Este código define las macros `max` y `min`, lo cual puede ayudar a resolver errores de compilación relacionados con estas funciones dentro de la librería.

## Recursos

- [Grove - Wio-E5 | Wiki](/Grove_LoRa_E5_New_Version/)
- [Especificación de Comandos AT para Wio-E5](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)

#### Librerías para LoRaE5
Existen varias librerías disponibles para el módulo Wio E5:

- [andresoliva/LoRa-E5](https://github.com/andresoliva/LoRa-E5)
- [idreamsi/LoRaE5](https://github.com/idreamsi/LoRaE5)
- [disk91/Disk91_LoRaE5](https://github.com/disk91/Disk91_LoRaE5)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes formas de soporte y asegurarnos de que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>