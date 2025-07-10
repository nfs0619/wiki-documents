---
description: Develop in Microsoft Azure IoT Central
title: Desarrollo en Microsoft Azure IoT Central
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Develop-in-Microsoft-Azure-IoT-Central
last_update:
  date: 06/17/2025
  author: Guillermo
---
# Desarrollar en Microsoft Azure IoT Central

### Agregar una regla para enviar un correo electrónico

Las reglas en IoT Central funcionan como herramientas personalizables de respuesta, que se activan con base en eventos monitoreados activamente desde los dispositivos conectados.  
Por ejemplo, en esta demostración, podemos configurar IoT Central para enviar un correo electrónico cuando el nivel de intensidad lumínica sea inferior a 50.

- **PASO 1:** Haz clic en **Rules** desde el menú de navegación izquierdo en Azure IoT Central.

- **PASO 2:** Haz clic en **+New** o **Create a rule**

- **PASO 3:** Ingresa un nombre para la regla

- **PASO 4:** En **Device template**, selecciona **Seeed Wio Terminal**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/rule_1.png" alt="pir" width={830} height="auto" /></p>

- **PASO 5:** En **Conditions**, activa la opción **time aggregation** y selecciona una **ventana de tiempo** de tu elección. En este caso, estableceremos **5 minutos**

**Nota:** Cada **xx** minutos, la regla se evalúa una vez usando los datos de los últimos **xx** minutos.

- **PASO 6:** En **Telemetry**, selecciona la variable de telemetría que desees.  
  En este ejemplo usaremos **Light intensity**

- **PASO 7:** En **Aggregation**, selecciona **Average**.  
  Esto tomará el valor promedio dentro de la ventana de tiempo seleccionada.

- **PASO 8:** En **Operator**, selecciona una condición.  
  En este caso usaremos **is less than**

- **PASO 9:** En **Value**, escribe un valor. Aquí escribiremos **50**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/conditions_1.png" alt="pir" width={1200} height="auto" /></p>

- **PASO 10:** En **Actions**, haz clic en **Email**

- **PASO 11:** Escribe un **Display name**, una **To address** y una **Note** para el correo electrónico

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/email_3.png" alt="pir" width={1200} height="auto" /></p>

**Nota:** La **dirección de correo electrónico** debe estar previamente agregada a esta **Aplicación de Azure IoT Central** y haber iniciado sesión al menos una vez.

- Navega a `Administration > Users`, haz clic en **Assign user**, completa el campo **Email**, asigna un **Role** y haz clic en **Save**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/assign_user.png" alt="pir" width={800} height="auto" /></p>

- **PASO 12:** Haz clic en **Done**

- **PASO 13:** Finalmente, haz clic en **Save**

¡Ahora hemos creado exitosamente una regla para enviar un correo electrónico!

### Controlar Hardware desde Microsoft Azure IoT Central

No solo puedes visualizar los datos de telemetría en Azure IoT Central, sino que también puedes utilizar la plataforma para controlar hardware.  
En esta demostración, controlaremos el zumbador (buzzer) incorporado en el Wio Terminal y especificaremos un tiempo de duración durante el cual emitirá un sonido.

- **PASO 1:** Haz clic en la pestaña **Command**

- **PASO 2:** Ingresa un **valor** en la columna bajo **Duration**

> **Nota:** los valores están en milisegundos. Ejemplo: 1000 = 1000 ms = 1 s

- **PASO 3:** Al hacer clic en **Run**, escucharás un sonido del zumbador durante el tiempo especificado

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/1000.png" alt="pir" width={500} height="auto" /></p>

## ¿Cómo Agregar Otros Sensores?

Puedes agregar cualquier sensor al Wio Terminal y enviar datos de telemetría del sensor conectado a Azure IoT Central.  
En este ejemplo, conectaremos un [Grove - Sensor de Temperatura y Humedad (DHT11)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html) al Wio Terminal y enviaremos datos de temperatura y humedad a Azure IoT Central para visualizarlos en los paneles.

### Configurar Microsoft Visual Studio Code

#### Descargar, Instalar y Configurar Visual Studio Code

Si queremos agregar más sensores al Wio Terminal para enviar datos de telemetría a Azure IoT Central, **no podemos utilizar fácilmente el archivo .uf2 como hicimos antes**, ya que el código ya está compilado dentro de ese archivo.  
Por lo tanto, si deseamos añadir más código al demo, necesitamos usar un IDE llamado **Microsoft Visual Studio Code**, agregar el código necesario y finalmente cargarlo en el Wio Terminal.

Pasemos ahora a instalar Microsoft Visual Studio Code en la computadora.

- **PASO 1:** Visita [code.visualstudio.com](https://code.visualstudio.com) y haz clic en **Download**

**Nota:** Elige el instalador según tu sistema operativo

- **PASO 2:** Completa el asistente de instalación

- **PASO 3:** Abre **Visual Studio Code**

- **PASO 4:** Haz clic en **Extensiones** desde el menú de navegación izquierdo y escribe **platformIO** en el cuadro de búsqueda

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformio.png" alt="pir" width={380} height="auto" /></p>

- **PASO 5:** Haz clic en **Instalar**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformio_install.png" alt="pir" width={550} height="auto" /></p>

#### Código para el Demo en Visual Studio Code

- **PASO 1:** Visita [este enlace](https://github.com/SeeedJP/wioterminal-aziot-example/releases) para encontrar las versiones disponibles dentro del repositorio [SeeedJP/wioterminal-aziot-example](https://github.com/SeeedJP/wioterminal-aziot-example)

- **PASO 2:** Navega a la **Última versión** y bajo **Assets**, haz clic en **Source code (zip)**. Esto descargará el código fuente en un archivo .zip

- **PASO 3:** Extrae el archivo **.zip**

- **PASO 4:** Regresa a Visual Studio Code y ve a `Archivo > Abrir carpeta...`

- **PASO 5:** Elige la carpeta que extrajiste anteriormente y haz clic en **Seleccionar carpeta**

- **PASO 6:** Navega a `wioterminal-aziot-example-0.10 > include > config.h` desde el menú de navegación izquierdo

- **PASO 7:** Cuando abras **config.h**, busca **"dtmi:seeedkk:wioterminal:wioterminal_aziot_example;5"** y cámbialo por **"dtmi:local:wioterminal_aziot_example;5"**

**Nota:** **dtmi:local:wioterminal_aziot_example;5** es el ID del modelo

- **PASO 8:** Navega a `wioterminal-aziot-example-0.10 > seeedkk-wioterminal-wioterminal_aziot_example.json` desde el menú de navegación izquierdo

- **PASO 9:** Cuando abras **seeedkk-wioterminal-wioterminal_aziot_example.json**, busca **"dtmi:seeedkk:wioterminal:wioterminal_aziot_example;5"** y cámbialo también por **"dtmi:local:wioterminal_aziot_example;5"**

**Nota:** **seeedkk-wioterminal-wioterminal_aziot_example.json** es el modelo DTDL que mencionamos anteriormente

Actualmente el modelo está definido para datos de **aceleración, intensidad de luz y conteo de botones**. Vamos a añadir **temperatura y humedad** a este modelo DTDL.

- **PASO 10:** Añade el siguiente código justo debajo de **"contents": [**:

```sh
  "contents": [
    {
      "@type": [
        "Telemetry",
        "Temperature"
      ],
      "name": "temp",
      "unit": "degreeCelsius",
      "displayName": {
        "en": "Temperature (C)",
        "ja": "温度"
      },
      "schema": "integer"
    },
    {
      "@type": "Telemetry",
      "name": "humi",
      "displayName": {
        "en": "Humidity (%RH)",
        "ja": "湿度"
      },
      "schema": "integer"
    },
```

**Nota:** Aquí, **name** es el identificador que usaremos para distinguir datos específicos de telemetría en el código, **unit** es la unidad correspondiente a los datos, **displayName** es el nombre que se mostrará en Azure IoT Central ("en" para inglés / "ja" para japonés) y **schema** es el tipo de dato.

- **PASO 11:** Navega a `wioterminal-aziot-example-0.10 > platformio.ini` desde el menú de navegación izquierdo.

- **PASO 12:** Cuando abras **platformio.ini**, bajo la sección **lib_deps**, agrega https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor

```sh 
lib_deps = 
    https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor
```
> **Nota:** Esta es la librería para el sensor Grove - Temperatura y Humedad (DHT11).

- **PASO 13:** Navega a `wioterminal-aziot-example-0.10 > src > main.cpp` desde el menú de navegación izquierdo.

- **PASO 14:** Cuando abras **main.cpp**, añade la librería DHT11 justo después de la línea: **#include "CliMode.h"**


```cpp
#include "CliMode.h"
#include "DHT.h"
```

- **PASO 15:** Añade las definiciones e inicializaciones para DHT11 después de la línea: **LIS3DHTR  AccelSensor;**

```cpp
LIS3DHTR<TwoWire> AccelSensor;

#define DHTPIN 0 //Define signal pin of DHT sensor 
// #define DHTPIN PIN_WIRE_SCL //Use I2C port as Digital Port */
#define DHTTYPE DHT11 //Define DHT sensor type 
DHT dht(DHTPIN, DHTTYPE); //Initializing DHT sensor
```

**Nota:** El sensor DHT11 se puede conectar a ambos puertos Grove en el Wio Terminal.  
Si se utiliza el **Puerto Digital**, el pin se puede definir como **0** y si se utiliza el **Puerto I2C**, el pin se puede definir como **PIN_WIRE_SCL**.  
El diagrama de los puertos se mostrará más adelante en este documento.

- **PASO 16:** Añade el siguiente código dentro de la función **SendTelemetry()** para analizar el archivo json junto con los datos de telemetría.

```cpp
static az_result SendTelemetry()
{
    float accelX;
    float accelY;
    float accelZ;
    AccelSensor.getAcceleration(&accelX, &accelY, &accelZ);

    int light;
    light = analogRead(WIO_LIGHT) * 100 / 1023;

    int temp; //assign variable to store temperature
    int humi; //assign variable to store humidity
    temp = dht.readTemperature(); //read temperature
    humi = dht.readHumidity(); //read humidity

    char telemetry_topic[128];
    if (az_result_failed(az_iot_hub_client_telemetry_get_publish_topic(&HubClient, NULL, telemetry_topic, sizeof(telemetry_topic), NULL)))
    {
        Log("Failed az_iot_hub_client_telemetry_get_publish_topic" DLM);
        return AZ_ERROR_NOT_SUPPORTED;
    }

    az_json_writer json_builder;
    char telemetry_payload[200];
    AZ_RETURN_IF_FAILED(az_json_writer_init(&json_builder, AZ_SPAN_FROM_BUFFER(telemetry_payload), NULL));
    AZ_RETURN_IF_FAILED(az_json_writer_append_begin_object(&json_builder));
    AZ_RETURN_IF_FAILED(az_json_writer_append_property_name(&json_builder, AZ_SPAN_LITERAL_FROM_STR("temp")));
    AZ_RETURN_IF_FAILED(az_json_writer_append_int32(&json_builder, temp));
    AZ_RETURN_IF_FAILED(az_json_writer_append_property_name(&json_builder, AZ_SPAN_LITERAL_FROM_STR("humi")));
    AZ_RETURN_IF_FAILED(az_json_writer_append_int32(&json_builder, humi));
```

- **PASO 17:** Añade el siguiente código después de la línea **ntp.begin**, para iniciar el sensor DHT11.

```cpp
dht.begin(); //start DHT sensor
```

Ahora hemos completado todo el código para esta demostración.

- **PASO 18:** Haz clic en el **icono de PlatformIO** en el menú de navegación lateral izquierdo y luego haz clic en **Build**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformio_build.png" alt="pir" width={400} height="auto" /></p>


Si ves el siguiente mensaje, has compilado el código exitosamente:

```sh
================================== [SUCCESS] Took 30.56 seconds ==================================
```

### Microsoft Azure IoT Central Set Up

Now we need to create a custom device template so that the data from the Wio Terminal can be visualized on Azure IoT Central Dashboard

### Configuración de Microsoft Azure IoT Central

Ahora necesitamos crear una plantilla de dispositivo personalizada para que los datos del Wio Terminal puedan visualizarse en el panel de Azure IoT Central.

#### Creación de una Nueva Plantilla de Dispositivo

- **PASO 1:** Visita Azure IoT Central y haz clic en `Device templates` desde el menú de navegación lateral izquierdo.

- **PASO 2:** Haz clic en **+ New**, selecciona **IoT device** y luego haz clic en **Next: Customize**.

- **PASO 3:** Escribe un nombre en el cuadro **Device template name** y haz clic en **Next: Review**.

- **PASO 4:** Haz clic en **Create**.

#### Importar un Modelo de Dispositivo Personalizado

- **PASO 1:** Haz clic en **Import a model**.

- **PASO 2:** Navega a la carpeta **wioterminal-aziot-example-0.10** que usamos anteriormente, busca el archivo **seeedkk-wioterminal-wioterminal_aziot_example.json** y haz clic en él.

- **PASO 3:** Haz clic en **Open**.

- **PASO 4:** Haz clic en **Views** desde el menú lateral y luego en **Generate default views**.

- **PASO 5:** Haz clic en **Generate default dashboard view(s)**.

- **PASO 6:** Navega a **Overview** en el menú lateral y personaliza el panel según tu preferencia.

**Nota:** Ya mencionamos en este documento cómo personalizar el panel.

- **PASO 7:** Sigue la configuración siguiente:

| Nombre del Tile        | Tamaño del Tile | Visualización del Tile  |
|-----------------------|-----------------|------------------------|
| Intensidad de Luz     | 2 x 2           | Gráfica de líneas      |
| Intensidad de Luz     | 1 x 1           | Último valor conocido  |
| Temperatura (°C), Humedad (%RH) | 2 x 2  | Gráfica de líneas      |
| Temperatura (°C)      | 1 x 1           | Último valor conocido  |
| Humedad (%RH)         | 1 x 1           | Último valor conocido  |
| Botón izquierdo       | 1 x 1           | KPI                    |
| Botón medio           | 1 x 1           | KPI                    |
| Botón derecho         | 1 x 1           | KPI                    |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/dashboard.png" alt="pir" width={1000} height="auto" /></p>

- **PASO 8:** Haz clic en **Save** y luego en **Publish**.

### Configuración del Wio Terminal

#### Configuración de Hardware

- Conecta el **sensor Grove - Temperatura y Humedad (DHT11)** al **Puerto Digital Grove** en el Wio Terminal.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/connection.png" alt="pir" width={380} height="auto" /></p>

#### Configuración de Software

##### Subir Código al Wio Terminal

Ahora necesitamos subir el código al Wio Terminal para enviar los datos de telemetría a Azure IoT Central.

- **PASO 1:** Regresa a VS Code, haz clic en el **icono de PlatformIO** y luego haz clic en **Upload**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformIO_upload.png" alt="pir" width={380} height="auto" /></p>

##### Configuración de Wi-Fi y Azure IoT

A continuación, configuraremos la conexión Wi-Fi y Azure IoT tal como lo hicimos antes.

- **PASO 1:** Mantén presionados los 3 botones y enciende el Wio Terminal para entrar al modo de configuración.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config.png" alt="pir" width={700} height="auto" /></p>

- **PASO 2:** Abre una aplicación de consola serial como [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html).

- **PASO 3:** Escribe el puerto serial **COM** correcto, configura la velocidad en **9600 baud** y entra al Wio Terminal.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config_new.png" alt="pir" width={500} height="auto" /></p>

- **PASO 4:** Presiona **ENTER** en el teclado y escribe **help** en la terminal serial para ver las opciones de configuración.

**Nota:** No es necesario ingresar el SSID y contraseña de Wi-Fi porque ya están guardados de configuraciones previas.

- **PASO 5:** Configura la conexión a Azure IoT visitando la aplicación creada previamente en [Azure IoT Central](https://apps.azureiotcentral.com).

- **PASO 6:** Navega a `Administration > Device Connection` desde el menú lateral izquierdo y **copia el ID scope** en un bloc de notas.

- **PASO 7:** Haz clic en **SAS-IoT-Devices** y copia la **primary key** en el bloc de notas.

- **PASO 8:** Vuelve a la terminal serial y escribe:  
  `set_az_iotc your_ID_scope your_primary_key your_device_name`  

**Nota:** Asegúrate de poner un espacio simple entre cada campo. Puedes elegir el nombre del dispositivo (`device name`) que prefieras.

- **PASO 9:** Reinicia el Wio Terminal deslizando el interruptor lejos de la posición ON y luego suéltalo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Reset.png" alt="pir" width={500} height="auto" /></p>

Ahora podrás ver en la pantalla LCD del Wio Terminal que se conecta a la red Wi-Fi y después a Azure IoT Hub. Luego, mostrará los datos de telemetría siendo enviados a Azure IoT Central.

### Visualización en Azure IoT Central

Regresa a Azure IoT Central y en el menú lateral izquierdo, haz clic en **Devices**, luego haz clic en el nombre de tu dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/dashboard_final1.png" alt="pir" width={1000} height="auto" /></p>

¡Ahora podrás visualizar todos los datos del sensor del Wio Terminal en el panel de Microsoft Azure IoT Central!














