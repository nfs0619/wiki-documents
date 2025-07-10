---
description: Develop with Ubidots
title: Uso de Ubidots
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Getting_started_with_Ubidots
last_update:
  date: 06/17/2025
  author: Guillermo
---
# Desarrollo con Ubidots

**Ubidots** es una plataforma que permite a integradores de sistemas, emprendedores de IoT y fabricantes (OEMs) construir fácilmente aplicaciones de Internet de las Cosas (IoT) y servicios conectados mediante herramientas de recopilación, análisis y visualización de datos. En la planificación del kit, elegimos la plataforma Ubidots como alternativa sin LoRaWAN®. Puedes usar la función WiFi que viene con el Wio Terminal para obtener la presentación de datos en el tablero de Ubidots con los datos de los sensores que necesites, a través del protocolo MQTT.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/1.png" /></div>

En este capítulo te mostraremos cómo enviar datos desde sensores a Ubidots mediante programación en Arduino.

## Preparación preliminar

### Conexión

Los sensores dentro del kit SenseCAP - K1100 pueden conectarse todos al conector Grove bajo el Wio Terminal usando el cable Grove. La siguiente tabla describe la ubicación del conector Grove al que se conecta cada sensor.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_ubidots/2.png" /></div>

<table align="center">
  <tbody><tr>
      <th align="center">Tipo de Sensor</th>
      <th align="center">Protocolo de Comunicación</th>
      <th align="center">Interfaz Grove Conectada</th>
    </tr>
    <tr>
      <td align="center">Sensor Grove de Temperatura y Humedad (SHT40)</td>
      <td align="center">I2C</td>
      <td align="center">Interfaz Grove <strong>izquierda</strong> del Wio Terminal</td>
    </tr>
    <tr>
      <td align="center">Sensor de Gases VOC y eCO2 Grove (SGP30)</td>
      <td align="center">I2C</td>
      <td align="center">Interfaz Grove <strong>izquierda</strong> del Wio Terminal</td>
    </tr>
    <tr>
      <td align="center">Módulo Grove Vision AI</td>
      <td align="center">I2C</td>
      <td align="center">Interfaz Grove <strong>izquierda</strong> del Wio Terminal</td>
    </tr>
    <tr>
      <td align="center">Sensor de Humedad de Suelo Grove
      </td><td align="center">ADC</td>
      <td align="center">Interfaz Grove <strong>derecha</strong> del Wio Terminal</td>
    </tr>
  </tbody></table>

### Preparación del Software

**Paso 1.** Necesitas instalar el software de Arduino.

<div>
  <p style={{}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank" /></p><div align="center"><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></div><p />
</div>

**Paso 2.** Abre la aplicación de Arduino.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>

**Paso 3.** Añade el Wio Terminal al Arduino IDE.

Abre tu Arduino IDE, haz clic en `File > Preferences` y copia la siguiente URL en el campo **Additional Boards Manager URLs**:

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" /></div>

Haz clic en `Tools > Board > Board Manager` y busca **Wio Terminal** en el gestor de placas.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/addBoard.png" /></div>

**Paso 4.** Selecciona tu placa y puerto.

Debes seleccionar la entrada en el menú `Tools > Board` que corresponde a tu Arduino. Selecciona **Wio Terminal**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png" /></div>

Selecciona el dispositivo serial de la placa Wio Terminal en el menú `Tools -> Port`. Probablemente sea COM3 o superior (COM1 y COM2 suelen estar reservados para puertos seriales de hardware). Para identificarlo, puedes desconectar tu Wio Terminal y reabrir el menú; la entrada que desaparezca será la placa Arduino. Vuelve a conectar la placa y selecciona ese puerto serial.

:::tip
Para usuarios de Mac, será algo como `/dev/cu.usbmodem141401`.
:::
 Si no puedes cargar el sketch, probablemente sea porque el Arduino IDE no pudo poner el Wio Terminal en modo bootloader (por ejemplo, si el MCU está detenido o tu programa está manejando el USB). La solución es poner manualmente el Wio Terminal en modo bootloader.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

**Paso 5.** Instala la librería requerida para el sensor que elijas.

<table align="center">
  <tbody><tr>
      <th align="center">Tipo de Sensor</th>
      <th align="center">Link 1</th>
      <th align="center">Link 2</th>
    </tr>
    <tr>
      <td align="center">Sensor IMU Wio Terminal</td>
      <td align="center"><a href="https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/tree/master" target="_blank">Descarga</a></td>
      <td align="center">-</td>
    </tr>
    <tr>
      <td align="center">Sensor de Temperatura y Humedad Grove (SHT40)</td>
      <td align="center"><a href="https://github.com/Sensirion/arduino-i2c-sht4x" target="_blank">Descarga</a></td>
      <td align="center"><a href="https://github.com/Sensirion/arduino-core" target="_blank">Descarga</a></td>
    </tr>
    <tr>
      <td align="center">Sensor de Gas VOC y eCO2 Grove (SGP30)</td>
      <td align="center"><a href="https://github.com/Seeed-Studio/SGP30_Gas_Sensor" target="_blank">Descarga</a></td>
      <td align="center">-</td>
    </tr>
    <tr>
      <td align="center">Módulo AI de Visión Grove</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Grove-Vision-AI-Moudle" target="_blank">Descarga</a></td>
      <td align="center">-</td>
    </tr>
  </tbody></table>

:::note
Los sensores que no están listados en la tabla anterior indican que no es necesario descargar una biblioteca por separado.
:::

**Paso 6.** Bibliotecas necesarias para Wi-Fi

Necesitamos las siguientes bibliotecas para comenzar a usar Wi-Fi en el Wio Terminal. Puedes buscar estas bibliotecas escribiendo el nombre de la biblioteca en el cuadro de búsqueda del Administrador de Bibliotecas de Arduino.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_ubidots/20.png" /></div>

- [**Seeed_Arduino_rpcWiFi**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcWiFi) - search for `seeed rpcwifi`

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100_ubidots/21.png" /></div>

- [**Seeed_Arduino_rpcUnified**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcUnified) - search for `seeed rpcunified`

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100_ubidots/23.png" /></div>

- [**Seeed_Arduino_mbedtls**](https://github.com/Seeed-Studio/Seeed_Arduino_mbedtls) - search for `seeed mbedtls`

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100_ubidots/24.png" /></div>

- [**Seeed_Arduino_FS**](https://github.com/Seeed-Studio/Seeed_Arduino_FS) - search for `seeed fs`

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100_ubidots/25.png" /></div>

- [**Seeed_Arduino_SFUD**](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD) - search for `seeed sfud`

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100_ubidots/26.png" /></div>

- [**PubSubClinet**](https://github.com/knolleary/pubsubclient) - search for `PubSubClient`

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100_ubidots/22.png" /></div>

## Pasos de Operación

**Paso 1.** Regístrate e inicia sesión en Ubidots

Si es la primera vez que usas Ubidots, por favor ve al [sitio web de Ubidots](https://ubidots.com/) y crea una cuenta propia.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/3.png" /></div>

Una vez registrado, inicia sesión en Ubidots con tu cuenta registrada.

**Paso 2.** Asigna tu **TOKEN** único de Ubidots

Cada solicitud a Ubidots requiere un TOKEN. La forma más fácil de obtenerlo es haciendo clic en “API Credentials” desde el menú desplegable de usuario.

Ve a tu menú desplegable de usuario y haz clic en Credenciales API:

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/k1100_ubidots/4.png" /></div>

**Tokens**: Llaves temporales y revocables para usar en tus solicitudes API. Por favor guarda el TOKEN, lo usaremos más adelante.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/5.png" /></div>

:::note
 Todas las llamadas API solo aceptan tu **TOKEN**. ¡No intentes usar tu clave API, no funcionará! También puedes acceder a todas tus claves API de Ubidots en la sección de configuración de Mi Perfil en el menú desplegable de usuario. Selecciona **Mi Perfil** –> **Credenciales API** para revisar la lista de TOKENS API asociados a tu cuenta Ubidots específica.
:::
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/6.png" /></div>

**Paso 3.** Prepárate con la información necesaria

Para establecer una conexión MQTT, necesitaremos preparar la siguiente información con anticipación.

- **SSID de WiFi**  
  - Ingresa el SSID de WiFi al que el Wio Terminal pueda conectarse. El Wio Terminal buscará redes WiFi en su entorno y tratará de conectarse a la indicada.
- **Contraseña del SSID de WiFi**  
  - Ingresa la contraseña del SSID WiFi al que el Wio Terminal pueda conectarse.
- **TOKEN de Ubidots**  
  - Este es el TOKEN generado en el **paso 2**.
- **Etiqueta de variable**  
  - Este es el nombre del valor del sensor que el usuario proporciona a Ubidots. Ubidots asocia diferentes datos con base en este nombre proporcionado por el usuario. Si la etiqueta de variable no existe antes de enviar el primer dato, Ubidots la creará automáticamente.
- **Etiqueta de dispositivo**  
  - Este es el nombre del dispositivo. El nombre que el usuario proporcione será usado por Ubidots para identificar el dispositivo. Si la etiqueta de dispositivo no existe antes de enviar el primer dato, Ubidots la creará automáticamente.
- **Nombre del cliente MQTT**  
  - Esto es especial porque es el ID con el que tu dispositivo será identificado por el broker, por lo que **DEBE** ser único. Si tu dispositivo intenta conectarse con un ID que ya está siendo usado por otro dispositivo, la conexión será rechazada. Por favor, crea un nombre de cliente MQTT único con caracteres alfanuméricos de entre 8 y 12 o más caracteres e ingrésalo en el código.
  
  ¿Necesitas ayuda para crear un nombre de cliente MQTT único? Prueba este [generador aleatorio ASCII](https://www.random.org/strings/), o simplemente usa la dirección MAC de tu dispositivo, ya que cada MAC es globalmente única.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_ubidots/7.png" /></div>

Al inicio del programa que mostramos a continuación, definiremos estos valores en la parte superior del código, por favor llena con tu propia información según corresponda.

```cpp
//examples
#define WIFISSID "<YOUR-WIFISSD>" // Put your WifiSSID here
#define PASSWORD "<YOUR-WIFI-PASSWORD" // Put your wifi password here
#define TOKEN "<YOUR-UBIDOTS-TOKEN>" // Put your Ubidots' TOKEN
#define VARIABLE_LABEL "light" // Assign the variable label
#define DEVICE_LABEL "wio-terminal" // Assign the device label
#define MQTT_CLIENT_NAME "r6y1ax7mq8" // MQTT client Name
```

### Enviar datos de sensores integrados a Ubidots

Si deseas enviar datos de detección de los sensores integrados del Wio Terminal a Ubidots, copia y pega el siguiente código completo en el Arduino IDE y súbelo al Wio Terminal.

```cpp
#include <PubSubClient.h>
#include <rpcWiFi.h>
#include <TFT_eSPI.h>
#include"LIS3DHTR.h"

LIS3DHTR<TwoWire> lis;

//Required Information
#define WIFISSID "<YOUR-WIFISSD>" // Put your WifiSSID here
#define PASSWORD "<YOUR-WIFI-PASSWORD" // Put your wifi password here
#define TOKEN "<YOUR-UBIDOTS-TOKEN>" // Put your Ubidots' TOKEN
#define VARIABLE_LABEL1 "light" // Assign the variable label
#define VARIABLE_LABEL2 "IMUx"
#define VARIABLE_LABEL3 "IMUy"
#define VARIABLE_LABEL4 "IMUz"
#define VARIABLE_LABEL5 "sound"
#define DEVICE_LABEL "wio-terminal" // Assign the device label
#define MQTT_CLIENT_NAME "r6y1ax7mq8" // MQTT client Name

const long interval = 100;
unsigned long previousMillis = 0;

TFT_eSPI tft;

char mqttBroker[] = "industrial.api.ubidots.com";

WiFiClient wifiClient;
PubSubClient client(wifiClient);

//sensor values
static int lightValue = 0;
static float imuxValue = 0;
static float imuyValue = 0;
static float imuzValue = 0;
static int soundValue = 0;

// Space to store values to send
static char str_light[6];
static char str_imux[6];
static char str_imuy[6];
static char str_imuz[6];
static char str_sound[6];
char payload[700];
char topic[150];

void callback(char* topic, byte* payload, unsigned int length){
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i=0;i<length;i++) {
    Serial.print((char)payload[i]);
  }
}

void reconnect() {
  // Loop until we're reconnected
  while (!client.connected()) {
    Serial.println("Attempting MQTT connection...");

  // Attempt to connect
  if (client.connect(MQTT_CLIENT_NAME, TOKEN,"")) {
    Serial.println("connected");
  }
  else {
    Serial.print("failed, rc=");
    Serial.print(client.state());
    Serial.println(" try again in 2 seconds");
    // Wait 2 seconds before retrying
    delay(2000);
    }
  }
}

//Reading built-in sensor values
void read_builtin()
{
  lightValue = analogRead(WIO_LIGHT);
  Serial.print("Light = ");
  Serial.println(lightValue);
  
  imuxValue = lis.getAccelerationX();
  Serial.print("IMU_x = ");
  Serial.println(imuxValue);
  imuyValue = lis.getAccelerationY();
  Serial.print("IMU_y = ");
  Serial.println(imuyValue);
  imuzValue = lis.getAccelerationZ();
  Serial.print("IMU_z = ");
  Serial.println(imuzValue);
  
  soundValue = analogRead(WIO_MIC);
  Serial.print("Sound = ");
  Serial.println(soundValue);
}

//Sending data to Ubidots
void send_data()
{
  dtostrf(lightValue, 4, 0, str_light);
  dtostrf(imuxValue, 4, 3, str_imux);
  dtostrf(imuyValue, 4, 3, str_imuy);
  dtostrf(imuzValue, 4, 3, str_imuz);
  dtostrf(soundValue, 4, 0, str_sound);

  if (!client.connected()) {
    reconnect();
  }
  
  // Builds the topic
  sprintf(topic, "%s", ""); // Cleans the topic content
  sprintf(topic, "%s%s", "/v2.0/devices/", DEVICE_LABEL);

  //Builds the payload
  sprintf(payload, "%s", ""); // Cleans the payload
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL1); // Adds the variable label
  sprintf(payload, "%s%s", payload, str_light); // Adds the value
  sprintf(payload, "%s}", payload); // Closes the dictionary brackets
  client.publish(topic, payload);
  delay(500);

  sprintf(payload, "%s", ""); // Cleans the payload
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL2); // Adds the variable label
  sprintf(payload, "%s%s", payload, str_imux); // Adds the value
  sprintf(payload, "%s}", payload); // Closes the dictionary brackets
  client.publish(topic, payload);
  delay(500);

  sprintf(payload, "%s", ""); // Cleans the payload
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL3); // Adds the variable label
  sprintf(payload, "%s%s", payload, str_imuy); // Adds the value
  sprintf(payload, "%s}", payload); // Closes the dictionary brackets
  client.publish(topic, payload);
  delay(500);

  sprintf(payload, "%s", ""); // Cleans the payload
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL4); // Adds the variable label
  sprintf(payload, "%s%s", payload, str_imuz); // Adds the value
  sprintf(payload, "%s}", payload); // Closes the dictionary brackets
  client.publish(topic, payload);
  delay(500);

  sprintf(payload, "%s", ""); // Cleans the payload
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL5); // Adds the variable label
  sprintf(payload, "%s%s", payload, str_sound); // Adds the value
  sprintf(payload, "%s}", payload); // Closes the dictionary brackets
  client.publish(topic, payload);
  delay(500);

  client.loop();
}

void setup() {
  Serial.begin(115200);
  lis.begin(Wire1);
  pinMode(WIO_MIC, INPUT);
  pinMode(WIO_LIGHT, INPUT);

  tft.begin();
  tft.setRotation(3);
  tft.setTextSize(2);
  tft.fillScreen(TFT_BLACK);

  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //Data output rate
  lis.setFullScaleRange(LIS3DHTR_RANGE_2G);
  
//  while(!Serial);

  // Set WiFi to station mode and disconnect from an AP if it was previously connected
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  
  tft.drawString("Connecting to WiFi...",20,120);
  WiFi.begin(WIFISSID, PASSWORD);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    WiFi.begin(WIFISSID, PASSWORD);
  }
  
  tft.fillScreen(TFT_BLACK);
  tft.drawString("Connected to the WiFi",20,120);

  delay(1000);
  client.setServer(mqttBroker, 1883);
  client.setCallback(callback);

}

void loop() {
  read_builtin();   //Reading buile-in sensor values
  send_data();   //Sending data to Ubidots
  delay(5000);
}
```

### Enviar datos del sensor de humedad de suelo Grove a Ubidots

Si deseas enviar datos del sensor de humedad de suelo Grove a Ubidots, copia y pega el siguiente código completo en el Arduino IDE y súbelo al Wio Terminal.

```cpp
#include <PubSubClient.h>
#include <rpcWiFi.h>
#include <TFT_eSPI.h>

//Required Information
#define WIFISSID "<YOUR-WIFISSD>" // Put your WifiSSID here
#define PASSWORD "<YOUR-WIFI-PASSWORD" // Put your wifi password here
#define TOKEN "<YOUR-UBIDOTS-TOKEN>" // Put your Ubidots' TOKEN
#define VARIABLE_LABEL "light" // Assign the variable label
#define DEVICE_LABEL "wio-terminal" // Assign the device label
#define MQTT_CLIENT_NAME "r6y1ax7mq8" // MQTT client Name

const long interval = 100;
unsigned long previousMillis = 0;

TFT_eSPI tft;

char mqttBroker[] = "industrial.api.ubidots.com";

WiFiClient wifiClient;
PubSubClient client(wifiClient);

//Soil moisture pins and sensor values
int sensorPin = A0;
static int soilValue = 0;

// Space to store values to send
char str_soil[6];
char payload[700];
char topic[150];

void callback(char* topic, byte* payload, unsigned int length){
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i=0;i<length;i++) {
    Serial.print((char)payload[i]);
  }
}

void reconnect() {
  // Loop until we're reconnected
  while (!client.connected()) {
    Serial.println("Attempting MQTT connection...");

  // Attempt to connect
  if (client.connect(MQTT_CLIENT_NAME, TOKEN,"")) {
    Serial.println("connected");
  }
  else {
    Serial.print("failed, rc=");
    Serial.print(client.state());
    Serial.println(" try again in 2 seconds");
    // Wait 2 seconds before retrying
    delay(2000);
    }
  }
}

//Reading soil moisture sensor values
void read_soil()
{
  soilValue = analogRead(sensorPin);
  Serial.print("Moisture = ");
  Serial.println(soilValue);
}

//Sending data to Ubidots
void send_data()
{
  dtostrf(soilValue, 4, 0, str_soil);

  if (!client.connected()) {
    reconnect();
  }
  
  // Builds the topic
  sprintf(topic, "%s", ""); // Cleans the topic content
  sprintf(topic, "%s%s", "/v2.0/devices/", DEVICE_LABEL);

  //Builds the payload
  sprintf(payload, "%s", ""); // Cleans the payload
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL); // Adds the variable label
  sprintf(payload, "%s%s", payload, str_soil); // Adds the value
  sprintf(payload, "%s}", payload); // Closes the dictionary brackets

  client.publish(topic, payload);
  delay(500);

  client.loop();
}


void setup() {
  Serial.begin(115200);

  tft.begin();
  tft.setRotation(3);
  tft.setTextSize(2);
  tft.fillScreen(TFT_BLACK);

  // Set WiFi to station mode and disconnect from an AP if it was previously connected
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  
  tft.drawString("Connecting to WiFi...",20,120);
  WiFi.begin(WIFISSID, PASSWORD);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    WiFi.begin(WIFISSID, PASSWORD);
  }
  
  tft.fillScreen(TFT_BLACK);
  tft.drawString("Connected to the WiFi",20,120);

  delay(1000);
  client.setServer(mqttBroker, 1883);
  client.setCallback(callback);
}

void loop() {
  read_soil();   //Reading soil moisture sensor values
  send_data();   //Sending data to Ubidots
  delay(5000);
}
```

### Enviar datos del sensor de gases VOC y eCO2 Grove a Ubidots

Si deseas enviar datos del sensor de gases VOC y eCO2 Grove a Ubidots, copia y pega el siguiente código completo en el Arduino IDE y súbelo al Wio Terminal.

```cpp
#include <PubSubClient.h>
#include <rpcWiFi.h>
#include <TFT_eSPI.h>
#include "sensirion_common.h"
#include "sgp30.h"

#define WIFISSID "<YOUR-WIFISSD>" // Put your WifiSSID here
#define PASSWORD "<YOUR-WIFI-PASSWORD" // Put your wifi password here
#define TOKEN "<YOUR-UBIDOTS-TOKEN>" // Put your Ubidots' TOKEN
#define VARIABLE_LABEL1 "voc" // Assign the variable label
#define VARIABLE_LABEL2 "co2"
#define DEVICE_LABEL "wio-terminal" // Assign the device label
#define MQTT_CLIENT_NAME "r6y1ax7mq8" // MQTT client Name

const long interval = 100;
unsigned long previousMillis = 0;

char mqttBroker[] = "industrial.api.ubidots.com";

WiFiClient wifiClient;
PubSubClient client(wifiClient);

TFT_eSPI tft = TFT_eSPI();

static unsigned short int VOC = 0;
static unsigned short int CO2 = 0;

// Space to store values to send
char str_voc[6];
char str_co2[6];
char payload[700];
char topic[150];

void callback(char* topic, byte* payload, unsigned int length){
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i=0;i<length;i++) {
    Serial.print((char)payload[i]);
  }
}

void reconnect() {
  // Loop until we're reconnected
  while (!client.connected()) {
    Serial.println("Attempting MQTT connection...");

  // Attempt to connect
  if (client.connect(MQTT_CLIENT_NAME, TOKEN,"")) {
    Serial.println("connected");
  }
  else {
    Serial.print("failed, rc=");
    Serial.print(client.state());
    Serial.println(" try again in 2 seconds");
    // Wait 2 seconds before retrying
    delay(2000);
    }
  }
}

void read_sgp30()
{
  s16 err = 0;
  sgp_measure_iaq_blocking_read(&VOC, &CO2);
  if (err == STATUS_OK) {
      Serial.print("tVOC  Concentration:");
      Serial.print(VOC);
      Serial.println("ppb");

      Serial.print("CO2eq Concentration:");
      Serial.print(CO2);
      Serial.println("ppm");
  } else {
      Serial.println("error reading IAQ values\n");
  }
}

void send_data()
{
  dtostrf(VOC, 4, 0, str_voc);
  dtostrf(CO2, 4, 0, str_co2);
  
  if (!client.connected()) {
    reconnect();
  }
  
  // Builds the topic
  sprintf(topic, "%s", ""); // Cleans the topic content
  sprintf(topic, "%s%s", "/v2.0/devices/", DEVICE_LABEL);

  //Builds the payload
  sprintf(payload, "%s", ""); // Cleans the payload
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL1); // Adds the variable label
  sprintf(payload, "%s%s", payload, str_voc); // Adds the value
  sprintf(payload, "%s}", payload); // Closes the dictionary brackets
  client.publish(topic, payload);
  Serial.println(payload);
  delay(500);

  sprintf(payload, "%s", ""); // Cleans the payload
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL2); // Adds the variable label
  sprintf(payload, "%s%s", payload, str_co2); // Adds the value
  sprintf(payload, "%s}", payload); // Closes the dictionary brackets
  client.publish(topic, payload);
  Serial.println(payload);
  delay(500);

  client.loop();
}

void setup() {
  Serial.begin(115200);
  while (sgp_probe() != STATUS_OK) {
      Serial.println("SGP failed");
  }
  sgp_set_absolute_humidity(13000);
  sgp_iaq_init();

  tft.begin();
  tft.setRotation(3);
  tft.setTextSize(2);
  tft.fillScreen(TFT_BLACK);
  
//  while(!Serial);

  // Set WiFi to station mode and disconnect from an AP if it was previously connected
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  
  tft.drawString("Connecting to WiFi...",20,120);
  WiFi.begin(WIFISSID, PASSWORD);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    WiFi.begin(WIFISSID, PASSWORD);
  }
  
  tft.fillScreen(TFT_BLACK);
  tft.drawString("Connected to the WiFi",20,120);

  delay(1000);
  client.setServer(mqttBroker, 1883);
  client.setCallback(callback);
}

void loop() {
  read_sgp30();    //Reading sgp30 sensor values
  send_data();     //Sending data to Ubidots
  delay(5000);
}
```

### Enviar datos del sensor de temperatura y humedad Grove a Ubidots

Si deseas enviar datos del sensor de temperatura y humedad Grove a Ubidots, copia y pega el siguiente código completo en el Arduino IDE y súbelo al Wio Terminal.

```cpp
#include <PubSubClient.h>
#include <rpcWiFi.h>
#include <TFT_eSPI.h>
#include <SensirionI2CSht4x.h>
#include <Wire.h>

#define WIFISSID "<YOUR-WIFISSD>" // Put your WifiSSID here
#define PASSWORD "<YOUR-WIFI-PASSWORD" // Put your wifi password here
#define TOKEN "<YOUR-UBIDOTS-TOKEN>" // Put your Ubidots' TOKEN
#define VARIABLE_LABEL1 "temperature" // Assign the variable label
#define VARIABLE_LABEL2 "humidity"
#define DEVICE_LABEL "wio-terminal" // Assign the device label
#define MQTT_CLIENT_NAME "r6y1ax7mq8" // MQTT client Name

const long interval = 100;
unsigned long previousMillis = 0;

char mqttBroker[] = "industrial.api.ubidots.com";

WiFiClient wifiClient;
PubSubClient client(wifiClient);

TFT_eSPI tft = TFT_eSPI();
SensirionI2CSht4x sht4x;

static float temp = 0;
static float humi = 0;

// Space to store values to send
char str_temp[6];
char str_humi[6];
char payload[700];
char topic[150];

void callback(char* topic, byte* payload, unsigned int length){
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i=0;i<length;i++) {
    Serial.print((char)payload[i]);
  }
}

void reconnect() {
  // Loop until we're reconnected
  while (!client.connected()) {
    Serial.println("Attempting MQTT connection...");

  // Attempt to connect
  if (client.connect(MQTT_CLIENT_NAME, TOKEN,"")) {
    Serial.println("connected");
  }
  else {
    Serial.print("failed, rc=");
    Serial.print(client.state());
    Serial.println(" try again in 2 seconds");
    // Wait 2 seconds before retrying
    delay(2000);
    }
  }
}

void read_sht40()
{
  uint16_t error;
  char errorMessage[256];
  error = sht4x.measureHighPrecision(temp, humi);
  if (error) {
      Serial.print("Error trying to execute measureHighPrecision(): ");
      errorToString(error, errorMessage, 256);
      Serial.println(errorMessage);
  } else {
      Serial.print("Temperature:");
      Serial.print(temp);
      Serial.print("\t");
      Serial.print("Humidity:");
      Serial.println(humi);
  }
}

void send_data()
{
  dtostrf(temp, 4, 2, str_temp);
  dtostrf(humi, 4, 2, str_humi);
  
  if (!client.connected()) {
    reconnect();
  }
  
  // Builds the topic
  sprintf(topic, "%s", ""); // Cleans the topic content
  sprintf(topic, "%s%s", "/v2.0/devices/", DEVICE_LABEL);

  //Builds the payload
  sprintf(payload, "%s", ""); // Cleans the payload
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL1); // Adds the variable label
  sprintf(payload, "%s%s", payload, str_temp); // Adds the value
  sprintf(payload, "%s}", payload); // Closes the dictionary brackets
  client.publish(topic, payload);
  delay(500);

  sprintf(payload, "%s", ""); // Cleans the payload
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL2); // Adds the variable label
  sprintf(payload, "%s%s", payload, str_humi); // Adds the value
  sprintf(payload, "%s}", payload); // Closes the dictionary brackets
  client.publish(topic, payload);
  delay(500);

  client.loop();
}

void setup() {
  Serial.begin(115200);
  Wire.begin();
  sht4x.begin(Wire);

  tft.begin();
  tft.setRotation(3);
  tft.setTextSize(2);
  tft.fillScreen(TFT_BLACK);
  
//  while(!Serial);

  // Set WiFi to station mode and disconnect from an AP if it was previously connected
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  
  tft.drawString("Connecting to WiFi...",20,120);
  WiFi.begin(WIFISSID, PASSWORD);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    WiFi.begin(WIFISSID, PASSWORD);
  }
  
  tft.fillScreen(TFT_BLACK);
  tft.drawString("Connected to the WiFi",20,120);

  delay(1000);
  client.setServer(mqttBroker, 1883);
  client.setCallback(callback);
}

void loop() {
  read_sht40();    //Reading sht40 sensor values
  send_data();     //Sending data to Ubidots
  delay(5000);
}
```

### Enviar datos del módulo Grove Vision AI a Ubidots

Si deseas enviar datos del módulo Grove Vision AI a Ubidots, copia y pega el siguiente código completo en el Arduino IDE y súbelo al Wio Terminal.

```cpp
#include <PubSubClient.h>
#include <rpcWiFi.h>
#include <TFT_eSPI.h>
#include"LIS3DHTR.h"
#include "Seeed_Arduino_GroveAI.h"

//Required Information
#define WIFISSID "<YOUR-WIFISSD>" // Put your WifiSSID here
#define PASSWORD "<YOUR-WIFI-PASSWORD" // Put your wifi password here
#define TOKEN "<YOUR-UBIDOTS-TOKEN>" // Put your Ubidots' TOKEN
#define VARIABLE_LABEL1 "num" // Assign the variable label
#define VARIABLE_LABEL2 "confidence"
#define DEVICE_LABEL "wio-terminal" // Assign the device label
#define MQTT_CLIENT_NAME "r6y1ax7mq8" // MQTT client Name

const long interval = 100;
unsigned long previousMillis = 0;

char mqttBroker[] = "industrial.api.ubidots.com";

WiFiClient wifiClient;
PubSubClient client(wifiClient);

GroveAI ai(Wire);
uint8_t state = 0;
TFT_eSPI tft = TFT_eSPI();

static int num = 0;
static int conf = 0;

// Space to store values to send
char str_num[6];
char str_conf[6];
char payload[700];
char topic[150];

void callback(char* topic, byte* payload, unsigned int length){
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i=0;i<length;i++) {
    Serial.print((char)payload[i]);
  }
}

void reconnect() {
  // Loop until we're reconnected
  while (!client.connected()) {
    Serial.println("Attempting MQTT connection...");

  // Attempt to connect
  if (client.connect(MQTT_CLIENT_NAME, TOKEN,"")) {
    Serial.println("connected");
  }
  else {
    Serial.print("failed, rc=");
    Serial.print(client.state());
    Serial.println(" try again in 2 seconds");
    // Wait 2 seconds before retrying
    delay(2000);
    }
  }
}

//Vision AI init
void VisionAI_Init()
{
  Serial.println("begin");
  if (ai.begin(ALGO_OBJECT_DETECTION, MODEL_EXT_INDEX_1)) // Object detection and pre-trained model 1
  {
    state = 1;
  }
  else
  {
    Serial.println("Algo begin failed.");
  }
}

//Read VisionAI values: number of characters recognized, confidence level for each person
void read_VisionAI()  
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
         Serial.print("Number of people: ");

         num = len;
         Serial.println(num);

         object_detection_t data;       //get data
         for (int i = 0; i < len; i++)
         {
            ai.get_result(i, (uint8_t*)&data, sizeof(object_detection_t)); //get result
            Serial.print("confidence:");
            
            conf = data.confidence;
            Serial.println(conf);
          }
      }
     else
     {
       Serial.println("No identification");
       num = 0;
       conf = 0;
     }
   }
    else
    {
      Serial.println("Invoke Failed.");
      num = 0;
      conf = 0;
      delay(1000);
    }
  }
}

void send_data()
{
  dtostrf(num, 4, 0, str_num);
  dtostrf(conf, 4, 0, str_conf);
  
  if (!client.connected()) {
    reconnect();
  }
  
  // Builds the topic
  sprintf(topic, "%s", ""); // Cleans the topic content
  sprintf(topic, "%s%s", "/v2.0/devices/", DEVICE_LABEL);

  //Builds the payload
  sprintf(payload, "%s", ""); // Cleans the payload
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL1); // Adds the variable label
  sprintf(payload, "%s%s", payload, str_num); // Adds the value
  sprintf(payload, "%s}", payload); // Closes the dictionary brackets
  client.publish(topic, payload);
  delay(500);

  sprintf(payload, "%s", ""); // Cleans the payload
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL2); // Adds the variable label
  sprintf(payload, "%s%s", payload, str_conf); // Adds the value
  sprintf(payload, "%s}", payload); // Closes the dictionary brackets
  client.publish(topic, payload);
  delay(500);

  client.loop();
}

void setup() {
  Serial.begin(115200);
  Wire.begin();

  tft.begin();
  tft.setRotation(3);
  tft.setTextSize(2);
  tft.fillScreen(TFT_BLACK);
  VisionAI_Init();

  // Set WiFi to station mode and disconnect from an AP if it was previously connected
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  
  tft.drawString("Connecting to WiFi...",20,120);
  WiFi.begin(WIFISSID, PASSWORD);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    WiFi.begin(WIFISSID, PASSWORD);
  }
  
  tft.fillScreen(TFT_BLACK);
  tft.drawString("Connected to the WiFi",20,120);

  delay(1000);
  client.setServer(mqttBroker, 1883);
  client.setCallback(callback);
}

void loop() {
  read_VisionAI(); //Reading visionai sensor values
  send_data();     //Sending data to Ubidots
  delay(5000);
}
```

### Paneles de Ubidots

Una vez que el código ha sido subido, podemos prepararnos para configurar el dashboard y ver cómo se han subido los datos.

Ubidots tiene una interfaz muy sencilla y si quieres ver información sobre tu dispositivo, puedes seleccionar **Devices** (Dispositivos) en la parte superior del dashboard.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/16.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/11.png" /></div>

Haz clic en el nombre de tu dispositivo aquí para poder ver todas las pestañas de historial. Esto está determinado por el **VARIABLE_LABEL** en el código.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/19.png" /></div>

:::note
La versión gratuita de Ubidots solo soporta la creación de **un TOKEN** y **diez labels**. Una vez que tengas más de diez labels, las etiquetas que hayas subido así como los datos serán descartados.
:::

Si quieres ver la información de los datos de tu dispositivo, puedes seleccionar **Data** (Datos).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/17.png" /></div>

También puedes seleccionar una pantalla diferente del dashboard en la esquina superior izquierda de la página principal. Por defecto, para comenzar, Ubidots creará automáticamente un dashboard llamado **Demo Dashboard**. Una vez que el Wio Terminal esté conectado a la red y enviando datos, podrás ver un dashboard llamado **wio terminal dashboard**. Esto está definido en el código bajo **DEVICE_LABEL**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/18.png" /></div>

Puedes añadir diferentes paneles dentro del dashboard actual, lo cual requiere que hagas clic en el signo **+** en la esquina superior derecha.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/13.png" /></div>

A continuación se muestra una lista de los paneles soportados por Ubidots.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_ubidots/15.png" /></div>

Tomemos como ejemplo la creación de un gráfico de líneas. Si quieres dibujar un gráfico de líneas de los valores del sensor IMU, entonces necesitas crear tres labels y **los nombres de los labels deben coincidir con el VARIABLE_LABEL en tu código**, luego deja todo en manos de Ubidots y se generará automáticamente para ti.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_ubidots/14.png" /></div>

Ubidots también tiene funciones de personalización muy potentes, como mostrar u ocultar valores, el nombre del eje Y y cuántos datos mostrar, todo lo cual puedes configurar libremente.

## Recursos

Para todos los códigos usados en este tutorial, haz clic en el ícono para acceder a ellos.

<div>
  <p style={{}}><a href="https://github.com/limengdu/K1100_Ubidots" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/K1100_Ubidots" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

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

## Statement

- The LoRa® Mark is a trademark of Semtech Corporation or its subsidiaries.
- LoRaWAN® is a mark used under license from the LoRa Alliance®.
