---
description: Quick Start With Blynk
title: Uso de Blynk
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Quick-Start-to-using-Blynk
last_update:
  date: 06/17/2025
  author: Guillermo
---
# Guía Rápida para Usar Blynk

En este tutorial, proporcionaremos una guía rápida sobre cómo configurar el módulo Grove Vision AI con Wio Terminal para subir los datos de detección, tales como conteo de personas y valor de confianza de detección vía Wi-Fi, y luego utilizar el dashboard de la App móvil Blynk para visualizar la salida de detección del módulo Grove Vision AI.

## Materiales Requeridos

<table align="center">
  <tbody><tr>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-GROVE.jpeg" /></div></td>
      <td align="center"><div align="center"><img width={170} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/camera.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal</td>
      <td align="center">Grove Vision AI module</td>
    </tr>
  </tbody></table>

## Preparación Preliminar

### Conexión

En esta rutina, necesitamos conectar el módulo Vision AI en el lado izquierdo según el diagrama siguiente.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/K1100/vi.jpg" /></div>

### Preparación del Software

**Paso 1.** Necesitas instalar el software de Arduino.

<div>
  <p style={{}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank" /></p><div align="center"><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></div><p />
</div>

**Paso 2.** Abre la aplicación de Arduino.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>

**Paso 3.** Agrega Wio Terminal al Arduino IDE.

Abre tu Arduino IDE, haz clic en `Archivo > Preferencias`, y copia la siguiente URL en el campo **URLs adicionales de gestor de placas**:

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" /></div>

Luego haz clic en `Herramientas > Placa > Gestor de Placas` y busca **Wio Terminal** en el gestor.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/addBoard.png" /></div>

**Paso 4.** Selecciona tu placa y puerto

Necesitarás seleccionar la opción correspondiente a tu Arduino en el menú `Herramientas > Placa`. Selecciona la **Wio Terminal**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png" /></div>

Selecciona el dispositivo serial de la placa Wio Terminal en el menú `Herramientas -> Puerto`. Probablemente sea COM3 o un número superior (COM1 y COM2 usualmente están reservados para puertos seriales de hardware). Para verificarlo, puedes desconectar tu placa Wio Terminal y volver a abrir el menú; la entrada que desaparezca será la placa Arduino. Reconecta la placa y selecciona ese puerto serial.

:::tip
Para usuarios de Mac, será algo como `/dev/cu.usbmodem141401`.

Si no puedes subir el sketch, probablemente sea porque el Arduino IDE no pudo poner la Wio Terminal en modo bootloader (debido a que el MCU estaba detenido o tu programa está manejando el USB). La solución es poner la Wio Terminal en modo bootloader manualmente.
:::

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

## Guía Paso a Paso

### Paso 1. Crear una cuenta

Por favor ve al [sitio web oficial de Blynk](https://blynk.io/), y crea una cuenta. Se te pedirá tu correo electrónico para registrarte, y deberás verificarlo mediante un correo para completar el registro de tu cuenta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/18.png" /></div>

### Paso 2. Agregar una Nueva Plantilla

Una vez que inicies sesión en la consola de Blynk, cancela y omite el asistente emergente, y haz clic en el botón **New Template** para crear una nueva plantilla.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/1.png" /></div>

Sigue el asistente de configuración. En la ventana emergente, nombra tu plantilla y elige **Seeed Wio Terminal** como **HARDWARE**, y **WiFi** como **CONNECTION TYPE**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1101/2.png" /></div>

Después de hacer clic en "done", deberías ver la página de la plantilla. Para confirmar toda la información de la nueva plantilla, haz clic en **save** en la esquina superior derecha.

### Paso 3. Agregar un Nuevo Dispositivo

Después de agregar la plantilla, haz clic en la pestaña **My Devices**, y luego en el botón **New Device**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/4.png" /></div>

Luego elige la opción **From template**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1101/5.png" /></div>

Selecciona el nombre de la plantilla creada en el **Paso 2** en el menú desplegable TEMPLATE. En este ejemplo se llama **wio terminal vision ai**, e ingresa un nombre para el dispositivo en el campo DEVICE NAME.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/K1101/6.png" /></div>

Después, la información del nuevo dispositivo se mostrará en un panel emergente. Verás el Template ID, Device Name y el Auth Token. Haz clic en **Copy to clipboard** para copiar y guardar esta información para uso posterior.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/7.png" /></div>

### Paso 4. Agregar la biblioteca necesaria de Arduino

Necesitamos agregar la biblioteca necesaria de Arduino para utilizar el módulo Grove Vision AI con el Wio Terminal. Por favor haz clic en el ícono a continuación para descargar la biblioteca de Arduino.

<div>
  <p style={{}}><a href="https://files.seeedstudio.com/wiki/K1101/libraries.zip" target="_blank" /></p><div align="center"><a href="https://files.seeedstudio.com/wiki/K1101/libraries.zip" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

Una vez descargado el archivo .zip, descomprímelo en la siguiente ruta:

- En Windows: `C:\Users\{Tu Nombre de Usuario}\Documents\Arduino\libraries`

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/36.png" /></div>

- En Mac: `/Users/{Tu Nombre de Usuario}/Documents/Arduino/libraries`

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/37.png" /></div>

### Paso 5. Preparar el código del firmware

Podemos generar el código base para conectar el Wio Terminal al servidor de Blynk desde [este enlace](https://examples.blynk.cc/?board=Wio%20Terminal&shield=rpcWiFi&example=GettingStarted%2FPushData&auth=an8FkwZgCjShpV5NGCW-Lxl1qohRigeZ&dev=Quickstart%20Device&tmpl=TMPLx3C44oO0).

También hemos preparado un código de ejemplo completo para esta guía rápida, que se muestra a continuación:

```c
// Template ID, Device Name and Auth Token are provided by the Blynk.Cloud
// See the Device Info tab, or Template settings
#define BLYNK_TEMPLATE_ID ""
#define BLYNK_DEVICE_NAME ""
#define BLYNK_AUTH_TOKEN ""

// Your WiFi credentials.
// Set password to "" for open networks.
char ssid[] = "";
char pass[] = "";

// Comment this out to disable prints and save space
#define BLYNK_PRINT Serial

#include <rpcWiFi.h>
#include <WiFiClient.h>
#include <BlynkSimpleWioTerminal.h>
#include "Seeed_Arduino_GroveAI.h"
#include <Wire.h>

GroveAI ai(Wire);
uint8_t state = 0;

char auth[] = BLYNK_AUTH_TOKEN;

BlynkTimer timer;

// This function sends Arduino's up time every second to Virtual Pin (5).
// In the app, Widget's reading frequency should be set to PUSH. This means
// that you define how often to send data to Blynk App.
void myTimerEvent()
{
  // You can send any value at any time.
  // Please don't send more that 10 values per second.
  if (state == 1)
  {
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
       Serial.println(len);
       object_detection_t data;       //get data

       for (int i = 0; i < len; i++)
       {
          Serial.println("result:detected");
          Serial.print("Detecting and calculating: ");
          Serial.println(i+1);
          ai.get_result(i, (uint8_t*)&data, sizeof(object_detection_t)); //get result
          Serial.print("confidence:");
          Serial.print(data.confidence);
          Serial.println();
          Blynk.virtualWrite(V5, data.confidence);
          Blynk.virtualWrite(V4, len);
        }
     }
     else
     {
       Serial.println("No identification");
       Blynk.virtualWrite(V4, 0);
       Blynk.virtualWrite(V5, 0);
     }
    }
    else
    {
      delay(1000);
      Serial.println("Invoke Failed.");
    }
  }
  else
  {
    state == 0;
  }
}

void setup()
{
  // Debug console
  Serial.begin(115200);

  Wire.begin();
  
  Serial.println("begin");
  if (ai.begin(ALGO_OBJECT_DETECTION, MODEL_EXT_INDEX_1)) // Object detection and pre-trained model 1
  {
    Serial.print("Version: ");
    Serial.println(ai.version());
    Serial.print("ID: ");
    Serial.println( ai.id());
    Serial.print("Algo: ");
    Serial.println( ai.algo());
    Serial.print("Model: ");
    Serial.println(ai.model());
    Serial.print("Confidence: ");
    Serial.println(ai.confidence());
    state = 1;
  }
  else
  {
    Serial.println("Algo begin failed.");
  }

  Blynk.begin(auth, ssid, pass);
  // You can also specify server:
  //Blynk.begin(auth, ssid, pass, "blynk.cloud", 80);
  //Blynk.begin(auth, ssid, pass, IPAddress(192,168,1,100), 8080);

  // Setup a function to be called every second
  timer.setInterval(1000L, myTimerEvent);
}

void loop()
{
  Blynk.run();
  timer.run(); // Initiates BlynkTimer
}
```

Necesitas completar los encabezados necesarios al inicio del código de ejemplo anterior para poder conectar tu Wio Terminal a tu red WiFi y luego enviar datos al servidor de Blynk.

```c
#define BLYNK_TEMPLATE_ID ""
#define BLYNK_DEVICE_NAME ""
#define BLYNK_AUTH_TOKEN ""

char ssid[] = "";
char pass[] = "";
```

Las primeras 3 líneas de definición corresponden a la información del dispositivo Blynk que se generó automáticamente durante el **Paso 3**. Simplemente copia y reemplaza esas primeras 3 líneas.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/7.png" /></div>

Después, completa las variables **ssid[]** y **pass[]** con el nombre y la contraseña de la red WiFi a la que se conectará el Wio Terminal. Por ejemplo:

```c
#define BLYNK_TEMPLATE_ID           "TMPLx3C44oO0"
#define BLYNK_DEVICE_NAME           "Quickstart Device"
#define BLYNK_AUTH_TOKEN            "an8FkwZgCjShpV5NGCW-Lxl1qohRigeZ"

char ssid[] = "SeeedStudio";
char pass[] = "yyds2022";
```

:::note
Recomendamos usar el hotspot personal de tu celular para probar esta guía rápida, ya que es más estable que una red pública desconocida o compleja.
:::

### Paso 6. Configurar el Panel Web de Blynk

Por favor, regresa a la consola de Blynk para configurar algunos widgets del panel según el código del firmware anterior. Primero, selecciona la plantilla que creaste y luego haz clic en el botón **Edit** ubicado en la esquina superior derecha.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/19.png" /></div>

Después, haz clic en la pestaña **Datastreams** para configurar los flujos de datos. Haz clic en **New Datastream** y selecciona **Virtual Pin** como fuente de datos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/11.png" /></div>

En el **Paso 5**, usamos los pines virtuales 4 y 5 para enviar datos del módulo Grove Vision AI, tales como el número de personas detectadas y el porcentaje de confianza en la inferencia.

```c
Blynk.virtualWrite(V5, data.confidence); #confidence
Blynk.virtualWrite(V4, len); #head count
```

Por lo tanto, necesitas configurar dos **Virtual Pins** en la pestaña **Datastreams** de la consola de Blynk: V4 y V5 respectivamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/20.png" /></div>

En la sección **Web Dashboard**, puedes definir la distribución de la información. En este caso, se añadieron tres widgets de visualización comunes: **Label**, **Gauge** y **Chart**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/21.png" /></div>

Puedes configurar qué datos mostrar haciendo clic en el ícono de engranaje que aparece al pasar el cursor sobre cada widget.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/22.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/23.png" /></div>

Una vez que hayas terminado de configurar la visualización de los datos, haz clic en el botón **Save And Apply** en la esquina superior derecha.

### Paso 7. Cargar el código y observar los datos

Finalmente, conecta el módulo Grove Vision AI al puerto izquierdo del Wio Terminal utilizando un cable Grove. Luego, carga el firmware actualizado (después del paso 7) y regresa a la consola de dispositivos de Blynk.  
Deberías ver los valores de conteo de personas y el porcentaje de confianza actualizarse en tiempo real cuando el módulo Grove Vision AI detecte una persona con éxito.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/17.png" /></div>

## Usar la App Móvil de Blynk para Observar Datos en Tiempo Real

Blynk no solo admite el panel web para mostrar datos en tiempo real del sensor, sino que también permite visualizarlos desde su aplicación móvil. Sin embargo, es necesario completar los pasos anteriores para poder ver los datos desde la app móvil.

### Paso 1. Descargar la App de Blynk

- Si estás usando un dispositivo **iOS**, por favor descarga [Blynk IoT](https://apps.apple.com/cn/app/blynk-iot-new/id1559317868).
- Si estás usando un dispositivo **Android**, descarga [Blynk IoT NEW](https://play.google.com/store/apps/details?id=cloud.blynk).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1101/25.png" /></div>

### Paso 2. Iniciar sesión en tu cuenta desde la App de Blynk

Una vez descargada e instalada la app de Blynk, ábrela e inicia sesión con la misma cuenta que usaste para la consola web. Así, las plantillas que creaste en los pasos anteriores se sincronizarán automáticamente con la app móvil.

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/K1101/26.png" /></div>

### Paso 3. Configurar el panel de datos en la App Móvil

Después de iniciar sesión en la app, desliza hacia la derecha y toca **My Profile** para ingresar a la vista de configuración del perfil. Asegúrate de que **Developer Mode** esté habilitado.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1101/29.png" /></div>

Luego, regresa a la página principal y toca el ícono de llave inglesa (wrench) en la esquina superior derecha para entrar a la configuración de la plantilla.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/K1101/30.png" /></div>

Aquí podrás ver las plantillas que creaste previamente, además de algunas plantillas de ejemplo proporcionadas por Blynk.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/K1101/31.png" /></div>

Ahora toca la plantilla **Seeed Wio Terminal** para entrar en la configuración del panel móvil. Una vez dentro, pulsa el botón **+** en la esquina superior derecha; se abrirá una ventana con los widgets disponibles.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/K1101/32.png" /></div>

El proceso de configuración aquí es similar al del panel web: selecciona un widget de tipo **Value Display** y otro de tipo **Labeled Value**, asígnales un nombre y elige el flujo de datos correcto (pines virtuales V4 y V5). De esta manera, los datos de detección recogidos por el módulo Grove Vision AI se sincronizarán y actualizarán tanto en la consola web como en la app móvil continuamente.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/K1101/33.png" /></div>

### Paso 4. Subir el nuevo código y observar los resultados

Una vez que hayas subido el nuevo código al Wio Terminal y este se conecte a la red WiFi, el dispositivo debería aparecer en la app móvil de Blynk como se muestra a continuación:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/K1101/34.png" /></div>

Podrás observar los datos del sensor simplemente tocando el dispositivo que aparece en la app móvil de Blynk.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/42.jpg" /></div>

## Statement

- The LoRa® Mark is a trademark of Semtech Corporation or its subsidiaries.
- LoRaWAN® is a mark used under license from the LoRa Alliance®.
