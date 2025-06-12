---
description: Grafana para reTerminal
title: Grafana para reTerminal
keywords:
  - Edge
  - reTerminal Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/weather-dashboard-with-Grafana-reTerminal
last_update:
  date: 04/02/2025
  author: Erick González
---

# Crea tu propio panel de clima utilizando Grafana

![image-20220124151124558](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124151124558.png)

## Introducción

En esta guía aprenderás a construir tu propio panel de clima en el reTerminal utilizando **Grafana**, siguiendo el trabajo de [Michaelm Klementsk](https://www.the-diy-life.com/grafana-weather-dashboard-on-the-reterminal-by-seeed-studio/).

[InfluxDB](https://www.influxdata.com/) es una [base de datos de series temporales (TSDB)](https://es.wikipedia.org/wiki/Base_de_datos_de_series_temporales) de código abierto desarrollada por la empresa InfluxData. Está escrita en el lenguaje de programación [Go](https://es.wikipedia.org/wiki/Go_(lenguaje_de_programacion)) para almacenar y extraer datos de series temporales en campos como el monitoreo de operaciones, métricas de aplicaciones, datos de sensores de [Internet de las Cosas](https://es.wikipedia.org/wiki/Internet_de_las_cosas) y análisis en tiempo real.

[Grafana](https://grafana.com/) es una aplicación web de [código abierto](https://es.wikipedia.org/wiki/Software_de_c%C3%B3digo_abierto), multiplataforma, para [analítica e interactividad visual](https://es.wikipedia.org/wiki/Visualizaci%C3%B3n_interactiva). Proporciona gráficos, gráficas y alertas basadas en la web al conectarse con fuentes de datos compatibles. También existe una versión empresarial de Grafana con capacidades adicionales, disponible como instalación local o en la nube de Grafana Labs. Se puede expandir mediante un sistema de [plugins](https://es.wikipedia.org/wiki/Plug-in). Los usuarios finales pueden crear paneles de monitoreo avanzados utilizando constructores de consultas interactivas. Grafana se compone de un front end y un back end, escritos en [TypeScript](https://es.wikipedia.org/wiki/TypeScript) y [Go](https://es.wikipedia.org/wiki/Go_(lenguaje_de_programacion)), respectivamente.

Para este proyecto, usaremos un **ESP32** para recolectar lecturas de temperatura, humedad y presión. Posteriormente, se publicarán en una base de datos de series temporales en [InfluxDB](https://www.influxdata.com/products/influxdb-cloud/). InfluxDB se puede ejecutar localmente en una Raspberry Pi o en su nube; en este caso lo ejecutaremos en su servidor en la nube. Luego usaremos **Grafana** para mostrar la información almacenada en la base de datos. Grafana también se puede ejecutar localmente en la Raspberry Pi (o en el reTerminal), o en su servidor en la nube. Aquí lo instalaremos localmente en nuestro reTerminal. Si lo prefieres, no necesitas usar una Pi por separado para InfluxDB y Grafana; podrías ejecutar ambos localmente en el reTerminal. Sin embargo, no quiero dejar encendido el reTerminal todo el tiempo para recoger los datos.

![Procesamiento de datos entre ESP32 y Grafana](https://www.the-diy-life.com/wp-content/uploads/2021/12/Data-Processing-Between-ESP32-and-Grafana-1024x576.jpg)

## Materiales necesarios

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html)
- Fuente de alimentación
- ESP32
- [Sensores Grove del Beginner Kit](https://www.seeedstudio.com/Arduino-Sensor-Kit-Base-p-4743.html)
- Protoboard
- Cables de protoboard

## Configuración de Azure e InfluxDB

Primero crearemos una máquina virtual.

- **Paso 1.** Abre la siguiente página e inicia sesión en tus servicios de [Microsoft Azure](https://portal.azure.com/#home). Haz clic en `Virtual machines` y luego en `Create`.

![image-20220124131855082](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124131855082.png)

- **Paso 2.** Selecciona el sistema Ubuntu 18.04 como sistema predeterminado en la máquina virtual. Haz clic en `Review + create` para continuar.

![image-20220124132225793](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124132225793.png)

- **Paso 3.** Se mostrarán las configuraciones, haz clic en `Create`.

![image-20220124132800871](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124132800871.png)

El proceso tomará unos minutos. Cuando finalice, haz clic en `Go to resource`.

![image-20220124133101855](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124133101855.png)

Esto te llevará a la página de la máquina virtual. Haz clic en `Networking`, luego en `Add inbound port rule` y añade el puerto `8086` con cualquier destino.

<img src="https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124133706479.png" alt="image-20220124133706479" />

- **Paso 4.** Copia estos comandos para instalar Docker y habilitarlo:

```bash
sudo apt udpate
sudo apt install docker docker-compose -y
sudo systemctl enable --now docker && sudo systemctl start docker
sudo systemctl status docker
```

![image-20220124134313484](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124134313484.png)

- **Paso 5.** Usa el siguiente comando para descargar la imagen de InfluxDB:

```bash
sudo docker pull influxdb:2.1.1
```

![image-20220124134409253](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124134409253.png)

- **Paso 6.** Ejecuta InfluxDB en segundo plano:

```bash
sudo docker run -d --name influxdb -p 8086:8086 influxdb:2.1.1
```

![image-20220124135326814](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124135326814.png)

- **Paso 7.** Abre el navegador e ingresa `http://tu-ip:8086` (sustituyendo `tu-ip`). Haz clic en "Get Started".

![image-20220124135533274](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124135533274.png)

- **Paso 8.** Registra el `Organization Name` y `Bucket Name` y luego haz clic en "Continue".

![image-20220124135632177](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124135632177.png)

- **Paso 9.** Haz clic en `Data > API Tokens`

![image-20220124140028985](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124140028985.png)

Ya tenemos configurado Azure e InfluxDB, ahora pasaremos al ESP32.

## Configuración del ESP32

Para recopilar los datos del clima, usaremos un ESP32 con un sensor DHT11 conectado al pin 4 y un sensor de presión BMP280 conectado a la interfaz I2C (pines 21 y 22). El ejemplo utiliza dos módulos Grove del [beginner kit](https://amzn.to/31my42U) porque ya incluyen la electrónica necesaria (resistencias, etc.).

![Diagrama de conexión del ESP32](https://www.the-diy-life.com/wp-content/uploads/2021/12/ESP32-Circuit-Diagram-1024x576.jpg)

- **Paso 1.** Abre [Arduino IDE](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) e [instala las librerías](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/). Proponemos dos métodos de instalación:

1. **Usar Library Manager**

```
1. Abre Arduino IDE y haz clic en "Sketch" > "Include Library" > "Manage Libraries".
2. Escribe 'influxdb' en el cuadro de búsqueda.
3. Instala la librería 'InfluxDBClient for Arduino'.
```

2. **Instalación manual**

```
1. cd <arduino-sketch-location>/library.
2. git clone https://github.com/tobiasschuerg/InfluxDB-Client-for-Arduino
3. Reinicia Arduino IDE
```

- **Paso 2.** Copia el siguiente código en el sketch:

```cpp
#include <Wire.h>                                                   //Importar librerías necesarias
#include "DHT.h"
#include "Seeed_BMP280.h"
#include <WiFiMulti.h>
WiFiMulti wifiMulti;
#define DEVICE "ESP32"

#include <InfluxDbClient.h>
#include <InfluxDbCloud.h>

#define WIFI_SSID "xxxxxxxx"                                            //Nombre de red WiFi
#define WIFI_PASSWORD "xxxxxxxxxx"                                        //Contraseña WiFi
#define INFLUXDB_URL "http://xxxxxxxx:8086"                                                 //URL del servidor InfluxDB v2
#define INFLUXDB_TOKEN "xxxxxxxxx"                                                                                             //Token de API de InfluxDB v2
#define INFLUXDB_ORG "xxxxxxx"                                                                                               //Organización de InfluxDB
#define INFLUXDB_BUCKET "xxxxxxx"                                                                                            //Bucket de InfluxDB
#define TZ_INFO "JST-9"                                                                                                //Zona horaria

DHT dht(4,DHT11);                                                   //Parámetros DHT y BMP
BMP280 bmp280;

int temp = 0;                                                       //Variables para lecturas
int humid = 0;
int pressure = 0;

//InfluxDBClient client(INFLUXDB_URL, INFLUXDB_ORG, INFLUXDB_BUCKET, INFLUXDB_TOKEN, InfluxDbCloud2CACert); //Cliente InfluxDB con certificado preconfigurado
InfluxDBClient client(INFLUXDB_URL, INFLUXDB_ORG, INFLUXDB_BUCKET, INFLUXDB_TOKEN);

Point sensor("weather");                                            //Punto de datos

void setup()
{
  Serial.begin(115200);                                             //Iniciar comunicación serie

  dht.begin();                                                      //Conexión con DHT
  if(!bmp280.init())                                                //Conexión con BMP280
    Serial.println("bmp280 init error!");

  WiFi.mode(WIFI_STA);                                              //Configurar wifi
  wifiMulti.addAP(WIFI_SSID, WIFI_PASSWORD);

  Serial.print("Connecting to wifi");                               //Conectar a WiFi
  while (wifiMulti.run() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(100);
  }
  Serial.println();

  sensor.addTag("device", DEVICE);                                   //Agregar tag(s)
  sensor.addTag("SSID", WIFI_SSID);

  timeSync(TZ_INFO, "pool.ntp.org", "time.nis.gov");                 //Sincronizar hora para validación de certificados

  if (client.validateConnection())                                   //Verificar conexión con servidor
  {
    Serial.print("Connected to InfluxDB: ");
    Serial.println(client.getServerUrl());
  }
  else
  {
    Serial.print("InfluxDB connection failed: ");
    Serial.println(client.getLastErrorMessage());
  }
}

void loop()
{
  temp = dht.readTemperature();                                      //Leer temp
  humid = dht.readHumidity();                                        //Leer humedad
  pressure = bmp280.getPressure()/100;                               //Leer presión

  sensor.clearFields();                                              //Limpiar campos

  sensor.addField("temperature", temp);                              //Almacenar valor medido
  sensor.addField("humidity", humid);
  sensor.addField("pressure", pressure);

  if (wifiMulti.run() != WL_CONNECTED)
    Serial.println("Wifi connection lost");

  if (!client.writePoint(sensor))
  {
    Serial.print("InfluxDB write failed: ");
    Serial.println(client.getLastErrorMessage());
  }

  Serial.print("Temp: ");
  Serial.println(temp);
  Serial.print("Humidity: ");
  Serial.println(humid);
  Serial.print("Pressure: ");
  Serial.println(pressure);
  delay(1000);
}
```

**Nota:** Este código no está completo. Si configuras tu token de API y bucket, el código generado en la página de interfaz de Arduino (accesible desde tu panel de InfluxDB) ya contendrá la configuración correcta, solo tienes que copiarlo.

![Instrucciones de la interfaz Arduino InfluxDB](https://www.the-diy-life.com/wp-content/uploads/2021/12/InfluxDB-Arduino-Interface-Instructions-1024x576.jpg)

- **Paso 3.** Sube el código y revisa los resultados.

![image-20220124140133524](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124140133524.png)

Después de un tiempo, veremos la información disponible en la base de datos InfluxDB, confirmando que el ESP32 funciona correctamente. Ahora instalaremos Grafana en nuestro reTerminal y lo configuraremos para mostrar la información.

## Instalar y configurar Grafana en el reTerminal

A continuación instalaremos Grafana siguiendo las instrucciones en su sitio web para [instalación en Debian o Ubuntu](https://grafana.com/docs/grafana/latest/installation/debian/). Después simplemente iniciamos Grafana y configuramos para que se reinicie en cada arranque.

![Instalando Grafana](https://www.the-diy-life.com/wp-content/uploads/2021/12/Installing-Grafana-1024x542.jpg)

- **Paso 1.** Accede a la interfaz web de Grafana abriendo una pestaña nueva en el navegador, apuntando a `localhost:3000`. En el reTerminal, abre el navegador y escribe `http://localhost:3000`

![Interfaz web de Grafana en localhost3000](https://www.the-diy-life.com/wp-content/uploads/2021/12/Grafana-Web-Interface-Localhost3000-1024x534.jpg)

Luego configuramos la lectura de datos de InfluxDB ingresando la información del servidor y la autenticación. Todo puede encontrarse en la interfaz web de InfluxDB, similar a la información que tu ESP32 usa para publicar datos.

- **Paso 2.** Haz clic en el botón `Setting` y elige `Data sources`.

![image-20220124144300849](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124144300849.png)

- **Paso 3.** Teclea `InfluxDB` en el filtro y selecciona `InfluxDB`.

![image-20220124144322352](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124144322352.png)

Ya hemos instalado y configurado Grafana en el reTerminal.

## [Configurar Grafana para usar Flux](https://docs.influxdata.com/influxdb/v2.0/tools/grafana/#configure-grafana-to-use-flux)

Con **Flux** seleccionado como lenguaje de consulta en tu fuente de datos InfluxDB, configuraremos la conexión:

- **Paso 1.** Configura la **Connection** y haz clic en **Save & Test**. La información es:

  - **URL**: Tu [URL de InfluxDB](https://docs.influxdata.com/influxdb/v2.0/reference/urls/), por ejemplo:

    ```sh
    http://tu-ip:8086/
    ```

  - **Organization**: El [nombre u ID de tu organización en InfluxDB](https://docs.influxdata.com/influxdb/v2.0/organizations/view-orgs/).
  - **Token**: Tu [token de API de InfluxDB](https://docs.influxdata.com/influxdb/v2.0/security/tokens/).
  - **Default Bucket**: El [bucket](https://docs.influxdata.com/influxdb/v2.0/organizations/buckets/) por defecto para consultas Flux.
  - **Min time interval**: El [intervalo de tiempo mínimo de Grafana](https://grafana.com/docs/grafana/latest/features/datasources/influxdb/#min-time-interval).

![img](https://docs.influxdata.com/img/influxdb/2-0-tools-grafana.png)

Grafana se conectará a la fuente de datos InfluxDB 2.0 y mostrará el resultado.

- **Paso 2.** Haz clic en `Add panel`.

![image-20220124143542830](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124143542830.png)

- **Paso 3.** Vuelve a `InfluxDB`, sigue las instrucciones y crea el script.

![image-20220124143752559](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124143752559.png)

- **Paso 4.** Copia y pega los scripts en el reTerminal.

![image-20220124143812005](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124143812005.png)

![image-20220124151052928](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124151052928.png)

- **Paso 5.** Revisa los resultados en el reTerminal; la información debería verse como se muestra a continuación:

![image-20220124164221791](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124164221791.png)

![image-20220124151124558](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124151124558.png)
