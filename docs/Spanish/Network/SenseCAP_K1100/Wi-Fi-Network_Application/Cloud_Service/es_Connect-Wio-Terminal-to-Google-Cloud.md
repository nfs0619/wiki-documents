---
description: Google Cloud IoT
title: Uso de Google Cloud IoT
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Connect-Wio-Terminal-to-Google-Cloud
last_update:
  date: 06/17/2025
  author: Guillermo
---
# Conectar Wio Terminal a Google Cloud IoT Core

<!-- ![](https://files.seeedstudio.com/wiki/Google_Cloud_IoT/thumb.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/thumb.png" alt="pir" width={600} height="auto" /></p>

## Actualizable a Sensores Industriales

Con el [controlador SenseCAP S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), puedes convertir fácilmente el sistema Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales robustos](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

La carcasa IP66, la configuración por Bluetooth, la compatibilidad con redes LoRaWAN® globales, la batería integrada de 19 Ah y el sólido soporte a través de la app hacen que los [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) sean la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad lumínica, CO₂, conductividad eléctrica (EC), y una estación meteorológica 8 en 1. Prueba los últimos SenseCAP S210x para tu próximo proyecto industrial exitoso.

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

## Introducción

En este tutorial, te guiaremos paso a paso por el proceso de conexión del Wio Terminal a **Google Cloud IoT Core**, y cómo enviar datos de telemetría desde el Wio Terminal hacia Google Cloud IoT Core. Esta guía está dividida en dos secciones: la primera explica cómo usar bibliotecas ya disponibles para enviar datos preconfigurados en el código, mientras que la segunda sección detalla cómo añadir tus propios sensores al Wio Terminal para enviar la telemetría a Google Cloud IoT Core. Google Cloud IoT Core admite tanto los protocolos **HTTP** como **MQTT** para la comunicación, pero en este tutorial utilizaremos el protocolo **MQTT**.

### ¿Qué es Google Cloud?

[Google Cloud](https://cloud.google.com/) está compuesto por un conjunto de activos físicos, como computadoras y discos duros, y recursos virtuales, como máquinas virtuales (VM), alojados en los centros de datos de Google distribuidos por todo el mundo. Esta distribución de recursos ofrece varios beneficios, como redundancia en caso de fallos y menor latencia al ubicar los recursos más cerca de los clientes.

En la computación en la nube, lo que antes se concebía como productos de hardware y software, se convierte en servicios. Estos servicios proporcionan acceso a los recursos subyacentes. La [lista de servicios disponibles en Google Cloud](https://cloud.google.com/products) es extensa y sigue creciendo. Cuando desarrollas tu sitio web o aplicación en Google Cloud, puedes combinar estos servicios para construir la infraestructura que necesitas, y luego añadir tu código para crear los escenarios deseados.

### ¿Qué es Google Cloud Platform?

[Google Cloud Platform (GCP)](https://console.cloud.google.com/) es una colección de servicios de computación en la nube. Con un conjunto de herramientas de gestión, ofrece una serie de servicios modulares que incluyen computación, almacenamiento de datos, análisis de datos y aprendizaje automático. Proporciona infraestructura como servicio (IaaS), plataforma como servicio (PaaS) y entornos de computación sin servidor (serverless).

### ¿Qué es Google Cloud IoT Core?

[Google Cloud IoT Core](https://cloud.google.com/iot/docs) es un servicio completamente gestionado para conectar y administrar dispositivos IoT de forma segura, desde unos pocos hasta millones. Permite recibir datos de dispositivos conectados y construir aplicaciones avanzadas que se integren con otros servicios de big data de Google Cloud Platform.

### ¿Qué es Google Cloud Console?

[Google Cloud Console](https://console.cloud.google.com/) es una interfaz gráfica basada en la web que puedes usar para administrar los recursos de Google Cloud Platform. Al usar la consola, puedes crear un nuevo proyecto o elegir uno existente, y los recursos que crees estarán dentro del contexto de ese proyecto. Puedes crear múltiples proyectos para separar tu trabajo de la forma que más te convenga. Por ejemplo, puedes comenzar un nuevo proyecto para restringir el acceso a ciertos miembros del equipo, mientras que todos los miembros pueden seguir accediendo a los recursos de otro proyecto.

## Conectar el Wio Terminal a Google Cloud IoT Core vía MQTT

Como se explicó anteriormente, utilizaremos el **puente MQTT** disponible para la comunicación entre el Wio Terminal y Google Cloud IoT Core. Sin embargo, también puedes usar el puente HTTP si así lo prefieres o lo requiere tu aplicación.

<!-- ![](https://files.seeedstudio.com/wiki/Google_Cloud_IoT/5555555.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/5555555.png" alt="pir" width={600} height="auto" /></p>

### Configuración en Google Cloud Console

Primero, necesitamos visitar la consola de Google Cloud, crear un registro de dispositivos de Cloud IoT Core y registrar un dispositivo.

#### Configuración inicial

- **PASO 1:** Visita [este enlace](https://console.cloud.google.com/) para crear un nuevo proyecto.

**Nota:** Inicia sesión en tu cuenta de Google si se te solicita.

- **PASO 2:** Haz clic en el menú **Seleccionar un proyecto**.

- **PASO 3:** Haz clic en **NUEVO PROYECTO** e ingresa un **nombre para el proyecto**.

- **PASO 4:** Haz clic en **CREAR**.

- **PASO 5:** Habilita la facturación para tu proyecto de Cloud. Esto es necesario para verificar que no eres un robot y **no se te cobrará**. Elige **Facturación** en el menú de navegación y sigue el proceso de configuración.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/1111111.png" alt="pir" width={500} height="auto" /></p>

- **PASO 6:** Visita [este enlace](https://console.cloud.google.com/flows/enableapi?apiid=cloudiot.googleapis.com%2Cpubsub&authuser=3&_ga=2.254170561.853675115.1607885458-878786893.1606048800) para habilitar las APIs de **Cloud IoT Core** y **Cloud Pub/Sub**.

**Nota:** Asegúrate de seleccionar el proyecto que creaste anteriormente en el menú desplegable.

#### Crear un Registro de Dispositivos

- **PASO 1:** Visita la [página de Google Cloud IoT Core](https://console.cloud.google.com/iot/registries) en la Consola de Cloud.

- **PASO 2:** Haz clic en **Crear registro**.

- **PASO 3:** Ingresa un **ID de registro**.

**Nota:** Este será el nombre de tu registro.

- **PASO 4:** Selecciona una **Región**.

**Nota:** Si estás en EE.UU., selecciona `us-central1` como región. Si estás fuera de EE.UU., elige tu región preferida.

- **PASO 5:** En el menú desplegable **Seleccionar un tema de Cloud Pub/Sub**, selecciona **Crear un tema** e ingresa un **ID de tema** de tu preferencia.

- **PASO 6:** Haz clic en **CREAR TEMA**.

- **PASO 7:** Haz clic en **MOSTRAR OPCIONES AVANZADAS**.

- **PASO 8:** Los campos **Tema de estado del dispositivo** y **Valor del certificado** son opcionales, por lo que puedes dejarlos en blanco.

- **PASO 9:** Selecciona **MQTT** como **Protocolo**.

- **PASO 10:** Haz clic en **Crear** en la página de Cloud IoT Core.

Ahora hemos creado un registro de dispositivos con un tema de Cloud Pub/Sub para publicar eventos de telemetría del dispositivo.

#### Generar un Par de Claves del Dispositivo (Claves EC)

Cloud IoT Core utiliza autenticación mediante claves públicas (o asimétricas):

- El dispositivo utiliza una **clave privada** para firmar un [JSON Web Token (JWT)](https://cloud.google.com/iot/docs/how-tos/credentials/jwts). Este token se envía a Cloud IoT Core como prueba de identidad del dispositivo.
- El servicio utiliza la **clave pública del dispositivo** (cargada previamente antes de enviar el JWT) para verificar la identidad del dispositivo.

Cloud IoT Core admite los algoritmos RSA y de Curva Elíptica (Elliptic Curve), y en este tutorial usaremos claves de **Curva Elíptica**.

- **PASO 1:** Crea una nueva carpeta en tu computadora.

- **PASO 2:** Navega a esa carpeta desde una ventana de terminal y escribe el siguiente comando para generar un par de claves EC tipo P-256:

```sh
openssl ecparam -genkey -name prime256v1 -noout -out ec_private.pem
openssl ec -in ec_private.pem -pubout -out ec_public.pem
```

**Nota:** Asegúrate de tener instalado **openssl** siguiendo [este enlace](https://slproweb.com/products/Win32OpenSSL.html) y agrega la ubicación del directorio a la variable de entorno `PATH`.

Los comandos anteriores generarán el siguiente par de claves pública/privada:

- **ec_private.pem**: Clave privada que debe almacenarse de forma segura en el dispositivo y utilizarse para firmar el JWT de autenticación.
- **ec_public.pem**: Clave pública que debe almacenarse en Cloud IoT Core y se utilizará para verificar la firma del JWT de autenticación.

#### Extract the Private Key

We need to extract the private key bytes and copy them into  the private key string in the Arduino project that we will create later in this tutorial. Save these keys for now to use later.

#### Extraer la Clave Privada

Necesitamos extraer los bytes de la clave privada y copiarlos como una cadena en el proyecto de Arduino que crearemos más adelante en este tutorial. Guarda estas claves por ahora para su uso posterior.

- **PASO 1:** Abre una ventana de terminal y navega a la carpeta que contiene el par de claves de Curva Elíptica que generamos anteriormente.

- **PASO 2:** Escribe el siguiente comando:

```sh
openssl ec -in ec_private.pem -noout -text
```

- **PASO 3:** Copia y pega los bytes generados de la clave privada que aparecen debajo de **priv:** en un bloc de notas y guárdalo para su uso posterior.

#### Agregar un Dispositivo al Registro

- **PASO 1:** Visita la [página de Registros](https://console.cloud.google.com/iot/registries) y selecciona el registro que creaste anteriormente.

- **PASO 2:** Selecciona la pestaña **Dispositivos** y haz clic en **CREAR UN DISPOSITIVO**.

- **PASO 3:** Ingresa un **ID de dispositivo**.

- **PASO 4:** El campo **Metadatos del dispositivo** es opcional, así que déjalo en blanco.

- **PASO 5:** Haz clic en el menú desplegable **COMUNICACIÓN, REGISTRO EN LA NUBE, AUTENTICACIÓN**.

- **PASO 6:** Selecciona **Permitir** en la opción **Comunicación del dispositivo**.

- **PASO 7:** Dentro del campo **Autenticación**, en **Método de entrada**, selecciona **Cargar**.

- **PASO 8:** Selecciona **ES256** del menú desplegable **Formato de clave pública**.

- **PASO 9:** En **Valor de la clave pública**, presiona el botón **EXAMINAR**, navega a la carpeta del **par de claves de Curva Elíptica** que creamos anteriormente y selecciona **ec_public.pem**.

- **PASO 10:** Haz clic en **Crear**.

Ahora has agregado un dispositivo a tu registro. La clave ES256 aparecerá en la página de detalles del dispositivo.

#### Configurar un Suscriptor

Ahora que hemos creado un registro de dispositivos, un tema (topic) y agregado un dispositivo a ese registro, pasemos a crear un suscriptor para suscribirse al tema que creamos, con el fin de capturar los datos de telemetría del Wio Terminal.

- **PASO 1:** Escribe **Pub** en la barra de búsqueda de la Consola de Google Cloud y selecciona **Pub/Sub** de los resultados

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/333333.png" alt="pir" width={700} height="auto" /></p>

- **PASO 2:** Haz clic en **Suscripciones** en el menú de navegación

- **PASO 3:** Haz clic en **CREAR SUSCRIPCIÓN**

- **PASO 4:** Ingresa un **ID de suscripción** de tu elección

- **PASO 5:** Selecciona el **tema de Pub/Sub** que creamos anteriormente desde el menú desplegable **Selecciona un tema de Cloud Pub/Sub**

- **PASO 6:** Selecciona **Pull** como tipo de entrega

- **PASO 7:** Haz clic en **Crear**

Ahora hemos terminado de configurar Google Cloud IoT Core. A continuación, pasaremos a configurar el Wio Terminal junto con el entorno de desarrollo Arduino.

### Configuración de Arduino con Wio Terminal

#### Librerías Necesarias

Necesitamos dos librerías para este tutorial:

1. **lwMQTT** - Librería MQTT para Arduino  
2. **Google Cloud IoT** - Librería para conectar con Google Cloud IoT

Para descargar estas librerías:

- **PASO 1:** Abre el IDE de Arduino  
- **PASO 2:** Navega a `Programa > Incluir Librería > Administrar Bibliotecas`  
- **PASO 3:** Escribe **lwMQTT** y **Google Cloud IoT** en la barra de búsqueda e instala ambas librerías

#### Configuración de Credenciales e Información de Cuenta

Ahora necesitamos establecer las credenciales de red Wi-Fi y la información de Google Cloud IoT Core en el archivo **ciotc_config.h**.

- **PASO 1:** En el IDE de Arduino, ve a `Archivo > Ejemplos > Google Cloud IoT JWT > Esp32-lwmqtt`

- **PASO 2:** Navega al archivo **ciotc_config.h**

- **PASO 3:** Cambia los **detalles de la red Wi-Fi**

```cpp
const char *ssid = "Enter_SSID";
const char *password = "Enter_Password";
```

- **PASO 4:** Cambia los **detalles de Google Cloud IoT**

```cpp
const char *project_id = "Enter_Project_ID";
const char *location = "Enter_location";
const char *registry_id = "Enter_Registry_ID";
const char *device_id = "Enter_Device_ID";
```

- **PASO 5:** Copia los bytes de la clave privada que obtuviste de **ec_private.pem** y que guardaste previamente en el bloc de notas

```cpp
const char *private_key_str =
    "6e:b8:17:35:c7:fc:6b:d7:a9:cb:cb:49:7f:a0:67:"
    "63:38:b0:90:57:57:e0:c0:9a:e8:6f:06:0c:d9:ee:"
    "31:41";
```

**Nota:** La longitud de la clave debe ser de 32 pares de dígitos hexadecimales

#### Cambiar los Métodos de Tiempo NTP

Abre el archivo **esp32-mqtt.h** y reemplaza todo su contenido con el siguiente código. Aquí hemos sustituido la función `configTime` por una implementación que obtiene la hora NTP vía UDP.

```cpp
#include <Client.h>
#include <rpcWiFi.h>
#include <WiFiClientSecure.h>

#include <MQTT.h>

#include <CloudIoTCore.h>
#include <CloudIoTCoreMqtt.h>
#include "ciotc_config.h" // Update this file with your configuration

// !!REPLACEME!!
// The MQTT callback function for commands and configuration updates
// Place your message handler code here.
void messageReceived(String &topic, String &payload){
  Serial.println("incoming: " + topic + " - " + payload);
}
///////////////////////////////

// Initialize WiFi and MQTT for this board
//Client *netClient;
CloudIoTCoreDevice *device;
CloudIoTCoreMqtt *mqtt;
MQTTClient *mqttClient;
unsigned long iat = 0;
String jwt;
WiFiUDP udp;

unsigned int localPort = 2390;
unsigned long devicetime;
const int NTP_PACKET_SIZE = 48; // NTP time stamp is in the first 48 bytes of the message
byte packetBuffer[NTP_PACKET_SIZE]; //buffer to hold incoming and outgoing packets

// send an NTP request to the time server at the given address
unsigned long sendNTPpacket(const char* address) {
    // set all bytes in the buffer to 0
    for (int i = 0; i < NTP_PACKET_SIZE; ++i) {
        packetBuffer[i] = 0;
    }
    // Initialize values needed to form NTP request
    // (see URL above for details on the packets)
    packetBuffer[0] = 0b11100011;   // LI, Version, Mode
    packetBuffer[1] = 0;     // Stratum, or type of clock
    packetBuffer[2] = 6;     // Polling Interval
    packetBuffer[3] = 0xEC;  // Peer Clock Precision
    // 8 bytes of zero for Root Delay & Root Dispersion
    packetBuffer[12] = 49;
    packetBuffer[13] = 0x4E;
    packetBuffer[14] = 49;
    packetBuffer[15] = 52;

    // all NTP fields have been given values, now
    // you can send a packet requesting a timestamp:
    udp.beginPacket(address, 123); //NTP requests are to port 123
    udp.write(packetBuffer, NTP_PACKET_SIZE);
    udp.endPacket();
}

unsigned long getNTPtime() {

    // module returns a unsigned long time valus as secs since Jan 1, 1970 
    // unix time or 0 if a problem encounted

    //only send data when connected
    if (WiFi.status() == WL_CONNECTED) {
        //initializes the UDP state
        //This initializes the transfer buffer
        udp.begin(WiFi.localIP(), localPort);
        sendNTPpacket(ntp_primary); // send an NTP packet to a time server
        // wait to see if a reply is available
        delay(1000);
        if (udp.parsePacket()) {
//            Serial.println("udp packet received");
//            Serial.println("");
            // We've received a packet, read the data from it
            udp.read(packetBuffer, NTP_PACKET_SIZE); // read the packet into the buffer

            //the timestamp starts at byte 40 of the received packet and is four bytes,
            // or two words, long. First, extract the two words:

            unsigned long highWord = word(packetBuffer[40], packetBuffer[41]);
            unsigned long lowWord = word(packetBuffer[42], packetBuffer[43]);
            // combine the four bytes (two words) into a long integer
            // this is NTP time (seconds since Jan 1 1900):
            unsigned long secsSince1900 = highWord << 16 | lowWord;
            // Unix time starts on Jan 1 1970. In seconds, that's 2208988800:
            const unsigned long seventyYears = 2208988800UL;
            // subtract seventy years:
            unsigned long epoch = secsSince1900 - seventyYears;

            // adjust time for timezone offset in secs +/- from UTC
            // WA time offset from UTC is +8 hours (28,800 secs)
            // + East of GMT
            // - West of GMT
//            long tzOffset = 28800UL;
            long tzOffset = 0UL;

            // WA local time 
            unsigned long adjustedTime;
            return adjustedTime = epoch + tzOffset;
        }
        else {
            // were not able to parse the udp packet successfully
            // clear down the udp connection
            udp.stop();
            return 0; // zero indicates a failure
        }
        // not calling ntp time frequently, stop releases resources
        udp.stop();
    }
    else {
        // network not connected
        return 0;
    }

}

///////////////////////////////
// Helpers specific to this board
///////////////////////////////
String getDefaultSensor(){
  return "Wifi: " + String(WiFi.RSSI()) + "db";
}

String getJwt(){
  Serial.println("Refreshing JWT");
  iat = getNTPtime();
  Serial.println(iat);
  jwt = device->createJWT(iat, jwt_exp_secs);

  Serial.println(jwt);
  return jwt;
}

void setupWifi(){
  Serial.println("Starting wifi");

  WiFi.mode(WIFI_STA);
  // WiFi.setSleep(false); // May help with disconnect? Seems to have been removed from WiFi
  WiFi.begin(ssid, password);
  Serial.println("Connecting to WiFi");
  while (WiFi.status() != WL_CONNECTED){
    delay(100);
  }

//  configTime(0, 0, ntp_primary, ntp_secondary);
  Serial.println("Waiting on time sync...");
//  Serial.println(getNTPtime());

  while (getNTPtime() < 1510644967){
    delay(10);
  }
}

void connectWifi(){
  Serial.print("checking wifi...");
  while (WiFi.status() != WL_CONNECTED){
    Serial.print(".");
    delay(1000);
  }
}

///////////////////////////////
// Orchestrates various methods from preceeding code.
///////////////////////////////
bool publishTelemetry(String data){
  return mqtt->publishTelemetry(data);
}

bool publishTelemetry(const char *data, int length){
  return mqtt->publishTelemetry(data, length);
}

bool publishTelemetry(String subfolder, String data){
  return mqtt->publishTelemetry(subfolder, data);
}

bool publishTelemetry(String subfolder, const char *data, int length){
  return mqtt->publishTelemetry(subfolder, data, length);
}

void connect(){
  connectWifi();
  mqtt->mqttConnect();
}


WiFiClientSecure netClient;
void setupCloudIoT(){
  device = new CloudIoTCoreDevice(
      project_id, location, registry_id, device_id,
      private_key_str);

  setupWifi();
//  netClient = new WiFiClientSecure();
  mqttClient = new MQTTClient(512);
  mqttClient->setOptions(180, true, 1000); // keepAlive, cleanSession, timeout
  mqtt = new CloudIoTCoreMqtt(mqttClient, &netClient, device);
  mqtt->setUseLts(true);
  mqtt->startMQTT();
}
```

#### Agregar Definición de Macro a Esp32-lwmqtt.ino

Agrega la definición del board Wio Terminal dentro de las macros en el archivo **Esp32-lwmqtt.ino**

```cpp
#if defined(ESP32) || defined(WIO_TERMINAL)
#define __ESP32_MQTT_H__
#endif
```

Ahora hemos terminado la configuración del Arduino IDE. Finalmente, necesitas subir este código al Wio Terminal. Abre el Monitor Serial y verás lo siguiente mostrado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/4444444.png" alt="pir" width={700} height="auto" /></p>

### Mostrar Datos de Telemetría

Ahora necesitamos mostrar los datos de telemetría entrantes desde el Wio Terminal. En este código de ejemplo, la intensidad de la señal Wi-Fi se enviará como dato de telemetría.

- **PASO 1:** Visita **Pub/Sub** en la Consola de Google Cloud

**Nota:** Puedes buscar **Pub** en la barra de búsqueda dentro de la Consola de Google Cloud

- **PASO 2:** Navega a **Subscriptions** en el Menú de Navegación

- **PASO 3:** Selecciona el ID de suscripción que creamos anteriormente

- **PASO 4:** Haz clic en **VIEW MESSAGES**

- **PASO 5:** Haz clic en **PULL** y verás los datos de telemetría entrantes como se muestra a continuación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/6666666.png" alt="pir" width={950} height="auto" /></p>

### ¿Cómo agregar otros sensores?

Puedes agregar cualquier sensor al Wio Terminal y enviar datos de telemetría a Google Cloud IoT Core. Para simplificar, usaremos el sensor de luz integrado en el Wio Terminal para enviar los niveles de intensidad de luz a Google Cloud IoT Core.

#### Configuración en Google Cloud IoT

- **PASO 1:** Visita **IoT Core** en la Consola de Google Cloud

**Nota:** Puedes buscar **IoT Core** en la barra de búsqueda dentro de la Consola de Google Cloud

- **PASO 2:** Selecciona el registro que creamos anteriormente

- **PASO 3:** Bajo **Temas de Cloud Pub/Sub** selecciona **Agregar o editar temas**

- **PASO 4:** Haz clic en **AGREGAR TEMA ADICIONAL**

- **PASO 5:** Haz clic en **CREAR UN TEMA** en el menú desplegable de **Seleccionar un tema de Cloud Pub/Sub**

- **PASO 6:** Ingresa un **ID de tema** y haz clic en **CREAR TEMA**

- **PASO 7:** Ingresa un **nombre de subcarpeta** dentro de la columna **Subfolder**

**Nota:** El nombre de la subcarpeta se usará para relacionar el tema en el código de Arduino

- **PASO 8:** Haz clic en **ACTUALIZAR**

- **PASO 9:** Crea una **nueva suscripción** como se explicó anteriormente

#### Configuración en Arduino

Navega a **Esp32-lwmqtt.ino** y agrega lo siguiente:

- **PASO 1:** Después del `loop()`, agrega el siguiente código para el sensor de luz integrado

```cpp
void loop() {
  int light = analogRead(WIO_LIGHT); //assign variable to store light sensor values 
  light = map(light,0,1023,0,100); //Map sensor values  
```

- **PASO 2:** Agrega el topic con el nombre de la subcarpeta

```cpp
    publishTelemetry(getDefaultSensor());
    publishTelemetry("/light",String(light));
```

**Nota:** Si no se agrega un nombre de subcarpeta, los datos de telemetría se enviarán al topic por defecto. En este caso, los datos de telemetría de la intensidad de señal Wi-Fi, como se explicó anteriormente, se enviarán al primer topic que creamos antes, que es el topic por defecto.

Después de subir el código al Wio Terminal, haz un pull (suscripción) al topic recién creado y verás el siguiente resultado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/222222.png" alt="pir" width={950} height="auto" /></p>

### ¿Cómo agregar otros sensores y visualizar los datos en dashboards?

Aunque Google Cloud IoT Core no ofrece un dashboard listo para usar para visualizar los datos de sensores, aquí explicaremos cómo lograrlo utilizando **InfluxDB** y **Grafana**.

[InfluxDB](https://www.influxdata.com/) es una base de datos de series temporales, es decir, cada dato en InfluxDB está asociado a una marca de tiempo (timestamp) que indica la fecha y hora correspondiente al dato almacenado. Por otro lado, [Grafana](https://grafana.com/) es una solución open source para análisis de datos, que permite extraer métricas útiles de grandes volúmenes de datos y monitorear aplicaciones a través de dashboards personalizables.

Básicamente, conectaremos un sensor de temperatura/humedad al Wio Terminal, utilizaremos una **Google Cloud Function** para transmitir los datos desde un tópico Pub/Sub hacia una instancia de InfluxDB ubicada en un clúster GKE (Google Kubernetes Engine), y finalmente mostraremos los datos almacenados en InfluxDB mediante dashboards interactivos en Grafana.

<!-- ![](https://files.seeedstudio.com/wiki/Google_Cloud_IoT/thumb.png) -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/thumb.png" alt="pir" width={600} height="auto" /></p>

#### Configuración de Hardware para Arduino

Conecta el sensor Grove - Temperatura y Humedad (DHT11) al puerto Grove - Digital/Analógico (D0) del Wio Terminal.

#### Configuración de Software para Arduino

- **PASO 1:** Visita el [repositorio del sensor Grove - Temperatura y Humedad](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor) y descárgalo como archivo zip.

- **PASO 2:** Abre Arduino, ve a `Sketch > Include Library > Add .ZIP Library` y selecciona la librería descargada para instalarla.

Navega al archivo **Esp32-lwmqtt.ino** que usaste anteriormente y agrega lo siguiente:

- **PASO 1:** Añade lo siguiente después de **#include "esp32-mqtt.h"**

```cpp
#include "DHT.h" //DHT library

#define DHTPIN 0 //Define Signal Pin of DHT
#define DHTTYPE DHT11 //Define DHT Sensor Type
DHT dht(DHTPIN, DHTTYPE); //Initializing DHT sensor  
```

- **PASO 2:** Agrega lo siguiente dentro de setup() para iniciar el sensor DHT

```cpp
dht.begin(); 
```

- **PASO 3:** Agrega lo siguiente dentro del **if** en el **void loop()**

```cpp
int temperature = dht.readTemperature(); //Assign variable to store temperature
int humidity = dht.readHumidity(); //Assign variable to store humidity

String payload = String("{\"timestamp\":") + getNTPtime() +
                  String(",\"temperature\":") temperature +
                  String(",\"humidity\":") + humidity +
                  String("}");
publishTelemetry(payload); 
```

**Nota**: Aquí convertimos todos los datos a una cadena para enviarlos a influxDB. Parsear el **timestamp** es importante porque influxDB es una base de datos de series de tiempo. Además, la función **publishTelemetry** enviará los datos al tópico por defecto que creamos al inicio de este tutorial.

- **PASO 4:** Sube el código al Wio Terminal

#### Configuración de Google Cloud IoT

- **PASO 1:** Visita [este](https://github.com/lakshanthad/esp32-cloud-iot-core-k8s) repositorio y descárgalo como archivo zip.

- **PASO 2:** Extrae el archivo zip descargado.

- **PASO 3:** Abre Google Cloud Console y navega a [Google Kubernetes Engine](https://console.cloud.google.com/kubernetes/list), espera a que el sistema se inicialice.

- **PASO 4:** Inicia el Cloud Shell presionando el botón en la esquina superior derecha.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/cloud_shell_1.png" alt="pir" width={700} height="auto" /></p>

- **PASO 5:** Escribe los siguientes comandos para configurar los valores predeterminados de la herramienta de línea de comandos gcloud.

```sh
export ZONE=<enter_zone> # e.g. us-central1-a, see https://cloud.google.com/compute/docs/regions-zones/#available
export PROJECT_ID=<enter_project-id> # project ID name 
gcloud config set project $PROJECT_ID
gcloud config set compute/zone $ZONE
```

- **PASO 6:** Escribe los siguientes comandos para crear un clúster GKE con un nodo n1-standard-1.

```sh
gcloud container clusters create influxdb-grafana \
                --num-nodes 1 \
                --machine-type n1-standard-1 \
                --zone $ZONE
```

- **PASO 7:** Escribe los siguientes comandos para crear un secreto donde se almacenará la información de autenticación de InfluxDB y Grafana.

```sh
kubectl create secret generic influxdb-grafana \
  --from-literal=influxdb-user=admin \
  --from-literal=influxdb-password=passw0rd \
  --from-literal=grafana-user=admin \
  --from-literal=grafana-password=passw0rd
```

**Nota:** Puedes cambiar los nombres de usuario y contraseñas de InfluxDB/Grafana según tu preferencia.

- **PASO 8:** Haz clic en **Open Editor** dentro de Google Shell.

- **PASO 9:** Arrastra y suelta la carpeta previamente descargada y extraída dentro del **Cloud Shell Editor**.

- **PASO 10:** Haz clic en **Open Terminal** para volver a la terminal. Navega al directorio **05-influxdb_grafana_k8s** escribiendo lo siguiente.

```sh
cd esp32-cloud-iot-core-k8s-master/05-influxdb_grafana_k8s
```

- **PASO 11:** Escribe los siguientes comandos para desplegar InfluxDB y Grafana en Kubernetes.

```sh
kubectl create -f k8s/
```

#### Configuración de Grafana

- **PASO 1:** Escribe lo siguiente para verificar las IPs externas / puertos de los servicios.

```sh
kubectl get services
```

- **PASO 3:** Visita `http://<ip externa del servicio de grafana>:3000`

**Nota:** Pega la IP externa de Grafana copiada previamente en `<ip externa del servicio de grafana>`

- **PASO 4:** Inicia sesión en Grafana con las credenciales configuradas previamente.

- **PASO 5:** Haz clic en el ícono de engranaje y navega a `Configuración > Fuentes de datos`

- **PASO 6:** Haz clic en **Agregar fuente de datos** y selecciona **influxDB**

- **PASO 7:** Introduce lo siguiente en el campo **URL**

```sh
http://influxdb:8086
```

- **PASO 8:** Introduce lo siguiente en el campo **Base de datos** y haz clic en **Guardar y probar**

```sh
iot
```

**Nota:** Deberías ver el mensaje **La fuente de datos funciona**, si configuraste correctamente la fuente de datos **InfluxDB** en Grafana.

#### Crear una Función de Google Cloud

Ahora necesitamos crear una Función de Google Cloud para transmitir datos desde un tópico en Pub/Sub a InfluxDB y mostrar los datos de InfluxDB en Grafana usando paneles interactivos.

- **PASO 1:** Regresa a la **Google Cloud Console** y abre el **Cloud Shell**.

- **PASO 2:** Escribe lo siguiente para habilitar la **API de Cloud Functions**.

```sh
gcloud services enable cloudfunctions.googleapis.com
```

- **PASO 3:** Navega al directorio **06-cloud_function** escribiendo lo siguiente.

```sh
cd esp32-cloud-iot-core-k8s-master/06-cloud_function
```

- **PASO 4:** Abre el archivo **main.py** con el editor de texto **vim**.

```sh
cd esp32-cloud-iot-core-k8s-master/06-cloud_function
```

- **PASO 5:** Presiona **i** en el teclado para entrar en **modo edición**.

- **PASO 6:** Modifica las **variables de InfluxDB** (host, puerto, usuario, contraseña) en la función **_get_influxdb_client**.

**Nota:** Obtén el host de InfluxDB escribiendo lo siguiente en Cloud Shell y copiando la IP externa.

```sh
kubectl get services
```

- **PASO 7:** Guarda el archivo escribiendo **:wq**.

- **PASO 8:** Despliega la **Función Cloud** escribiendo lo siguiente.

```sh
export PUBSUB_TOPIC="enter_topic-name>"
export REGION="enter_region" # https://cloud.google.com/functions/docs/locations
gcloud functions deploy iotcore_pubsub_to_influxdb --runtime python37 --trigger-topic $PUBSUB_TOPIC --region $REGION
```

#### Regreso a la Configuración de Grafana

- **PASO 1:** Abre Grafana y navega a `Dashboards > Manage`

- **PASO 2:** Haz clic en **New Dashboard** y luego en **Add new panel**

- **PASO 3:** Navega a **Visualization** y selecciona **Graph**

- **PASO 4:** Bajo **Query**, en la pestaña **FROM**, haz clic en **select measurement** y selecciona **temperature** del menú desplegable

- **PASO 5:** Haz clic en **+ Query** y repite el mismo paso que en el **paso 12** para **humidity**

- **PASO 6:** Cambia las demás configuraciones según tu preferencia

- **PASO 7:** Haz clic en **Apply**

- **PASO 8:** Haz clic en **Add panel** y luego en **Add new panel**

- **PASO 9:** Navega a **Visualization** y selecciona **Gauge**

- **PASO 10:** Bajo **Query**, en la pestaña **FROM**, haz clic en **select measurement** y selecciona **temperature** del menú desplegable

- **PASO 11:** En la pestaña **Field**, bajo **Unit**, selecciona `Temperature > Celsius` del menú desplegable

- **PASO 12:** Establece un valor mínimo y máximo para el medidor escribiendo en **Min** y **Max**

- **PASO 13:** Bajo **Display name**, escribe `Temperature`

- **PASO 14:** Repite lo mismo para **humidity** siguiendo desde el **paso 15**

- **PASO 15:** Haz clic en **Apply**

Ahora verás el dashboard creado en Grafana.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/grafana_dash_1.png" alt="pir" width={900} height="auto" /></p>

## Soporte técnico y discusión de producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
