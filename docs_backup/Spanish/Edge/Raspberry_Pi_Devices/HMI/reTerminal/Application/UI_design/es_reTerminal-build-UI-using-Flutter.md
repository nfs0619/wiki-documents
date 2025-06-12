---
description: Flutter para reTerminal
title: Flutter para reTerminal
keywords:
  - Edge
  - reTerminal Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal-build-UI-using-Flutter
last_update:
  date: 04/03/2025
  author: Erick González
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-13.png" alt="pir" width="800" height="auto"/></p>

## Introducción

Este wiki explica cómo construir tu propia interfaz de usuario utilizando Flutter. **Flutter** es un kit de desarrollo de software de interfaz de usuario de código abierto creado por Google. Se utiliza para desarrollar aplicaciones multiplataforma para Android, iOS, Linux, Mac, Windows, Google Fuchsia y la web a partir de una única base de código. Esto significa que puedes usar un lenguaje de programación y una base de código para crear varias aplicaciones (para iOS, Android, etc.).

Para desarrollar con Flutter, necesitas un lenguaje de programación llamado **Dart**. Dart es un lenguaje de programación de propósito general, orientado a objetos y de código abierto con sintaxis estilo C desarrollado por Google.

Aquí utilizaremos Flutter para desarrollar una aplicación en la PC y luego ejecutarla en el reTerminal usando **flutter-pi**. flutter-pi es un motor (engine) de Flutter ligero para Raspberry Pi que se ejecuta sin X. Esto significa que no necesitas iniciar en el escritorio de Raspberry Pi OS ni cargar X11 y LXDE; solo necesitas iniciar en la línea de comandos y ejecutar tu aplicación.

Siguiendo la guía a continuación, podrás crear una aplicación para controlar los pines GPIO en el reTerminal simplemente haciendo clic en los botones de la pantalla LCD. ¡Empecemos!

## Preparar el entorno de desarrollo

### En el reTerminal

Primero debemos instalar **flutter-pi** en el reTerminal.

> Haz clic [aquí](https://github.com/ardera/flutter-pi) para acceder al repositorio de GitHub de flutter-pi.

- **Paso 1.** Inicia sesión en el reTerminal como se explica en [este wiki](https://wiki.seeedstudio.com/reTerminal/#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet) e instala los **binarios del motor de flutter** en el reTerminal:

```sh
git clone --depth 1 https://github.com/ardera/flutter-engine-binaries-for-arm.git engine-binaries
cd engine-binaries
sudo ./install.sh
```

- **Paso 2.** Instala cmake, librerías gráficas, bibliotecas del sistema y fuentes:

```sh
sudo apt install cmake libgl1-mesa-dev libgles2-mesa-dev libegl1-mesa-dev libdrm-dev libgbm-dev ttf-mscorefonts-installer fontconfig libsystemd-dev libinput-dev libudev-dev  libxkbcommon-dev
```

- **Paso 3.** Actualiza las fuentes del sistema:

```sh
sudo fc-cache
```

- **Paso 4.** Clona flutter-pi y accede al directorio clonado:

```sh
git clone https://github.com/ardera/flutter-pi
cd flutter-pi
```

- **Paso 5.** Compila flutter-pi:

```sh
mkdir build && cd build
cmake ..
make -j`nproc`
```

- **Paso 6.** Instala flutter-pi:

```sh
sudo make install
```

- **Paso 7.** Abre raspi-config:

```sh
sudo raspi-config
```

- **Paso 8.** Cambia al modo consola navegando a `System Options > Boot / Auto Login` y selecciona **Console o Console (Autologin)**.

- **Paso 9.** Habilita el controlador gráfico V3D navegando a `Advanced Options > GL Driver > GL (Fake KMS)`.

- **Paso 10.** Configura la memoria GPU navegando a `Performance Options -> GPU Memory` e ingresa **64**.

- **Paso 11.** Presiona **ESC** en el teclado para salir de la ventana de **raspi-config**.

- **Paso 12.** Otorga permiso al reTerminal para usar aceleración 3D. (NOTA: riesgo potencial de seguridad. Si no deseas hacer esto, inicia flutter-pi con **sudo** en su lugar):

```sh
usermod -a -G render pi
```

- **Paso 13.** Reinicia el reTerminal:

```sh
sudo reboot
```

Ahora hemos terminado de instalar las herramientas necesarias en el reTerminal.

### En la PC Host

A continuación, prepararemos nuestra PC Host para el desarrollo. Instalaremos **Flutter SDK**, que contiene los paquetes necesarios para el desarrollo con Flutter, y **Android Studio** para editar el código y probarlo en un emulador.

- **Paso 1.** Descarga e instala el [Flutter SDK](https://flutter.dev/docs/get-started/install) según tu sistema operativo.

- **Paso 2.** Abre una ventana de terminal y verifica si la instalación del SDK de Flutter fue exitosa:

```sh
flutter --version
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/flutter-version.png" alt="pir" width="800" height="auto"/></p>

- **Paso 3.** Descarga e instala [Android Studio](https://developer.android.com/studio) según tu sistema operativo.

- **Paso 4.** Abre Android Studio y navega a `Configure > Plugins`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-6.png" alt="pir" width="650" height="auto"/></p>

- **Paso 5.** Bajo **Marketplace**, escribe **flutter** en la barra de búsqueda y haz clic en **Install**:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-7.png" alt="pir" width="650" height="auto"/></p>

- **Paso 6.** Haz clic en **Install** en la ventana emergente para instalar también el plugin de **Dart**:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-8.png" alt="pir" width="650" height="auto"/></p>

- **Paso 7.** Haz clic en **Restart IDE** para reiniciar el IDE con los plugins instalados:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-9.png" alt="pir" width="650" height="auto"/></p>

- **Paso 8.** Una vez que el IDE se abra de nuevo, ve a `Configure > AVD Manager`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/android-studio-open.png" alt="pir" width="800" height="auto"/></p>

- **Paso 9.** Haz clic en **Create Virtual Device**:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-1.png" alt="pir" width="800" height="auto"/></p>

- **Paso 10.** Haz clic en **New Hardware Profile**:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-2.png" alt="pir" width="800" height="auto"/></p>

- **Paso 11.** Configura los ajustes de la siguiente manera:

  - **Device Name**: reTerminal
  - **Device Type**: Phone/ Tablet
  - **Screen**:
    - Screen size: 5inch
    - Resolution: 1280 x 720
  - **Memory**: RAM: 2048MB
  - **Input**: [✓] Has Hardware Buttons (Back/Home/Menu)
  - **Supported device states**: [✓] Landscape

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-3.png" alt="pir" width="800" height="auto"/></p>

- **Paso 12.** Haz clic en **Finish** y luego en **Next**.

- **Paso 13.** Selecciona la imagen de Android más reciente y haz clic en **Next**:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-4.png" alt="pir" width="800" height="auto"/></p>

- **Paso 14.** Bajo **Emulated Performance**, selecciona **Hardware - GLES 2.0** para un rendimiento acelerado:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-5.png" alt="pir" width="800" height="auto"/></p>

- **Paso 15.** Finalmente, haz clic en **Finish**.

Ahora hemos terminado de preparar el entorno de desarrollo.

## Aplicación Smart Lamp en Flutter

### Conexiones de hardware

Conectaremos un LED al GPIO 24 del reTerminal para fines de prueba. Luego, podrás agregar un relé y controlar electrodomésticos usando el GPIO.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/LED-connection-1.png" alt="pir" width="800" height="auto"/></p>

**Nota:** Se necesita una resistencia entre el pin GPIO y el LED, de lo contrario, este podría quemarse.

### Crear e inicializar la aplicación

- **Paso 1.** Abre Android Studio y haz clic en **Create New Flutter Project**:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-10.png" alt="pir" width="550" height="auto"/></p>

- **Paso 2.** La ruta **Flutter SDK path** se configurará automáticamente:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-11.png" alt="pir" width="800" height="auto"/></p>

**Nota:** Si la ruta de Flutter SDK no aparece, puedes especificarla manualmente.

- **Paso 3.** Completa los datos del proyecto como se muestra y haz clic en **Finish**:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-12.png" alt="pir" width="800" height="auto"/></p>

Ahora tu proyecto de ejemplo se abrirá con **main.dart**.

### Crear el main.dart (app principal)

Usaremos el archivo **main.dart** dentro de la carpeta **lib** para crear la aplicación Flutter.

Abre el archivo **main.dart** y copia el siguiente código:

```dart
//imports de librerías
import 'package:flutter/material.dart';
import 'package:flutter_gpiod/flutter_gpiod.dart';

//punto de entrada para la app
void main() {
  runApp(MyApp());
}

// Este es el widget principal de la aplicación.
class MyApp extends StatelessWidget {
  // Función para controlar el GPIO
  void ledState(state) {
    // Obtener la lista de chips GPIO.
    final chips = FlutterGpiod.instance.chips;

    // Obtener la línea con índice 24 del primer chip.
    // Esto corresponde al pin BCM 24 en la Raspberry Pi.
    final chip = chips.singleWhere(
          (chip) => chip.label == 'pinctrl-bcm2711',
      orElse: () =>
          chips.singleWhere((chip) => chip.label == 'pinctrl-bcm2835'),
    );

    final line2 = chip.lines[24];

    // Solicitar BCM 24 como salida.
    line2.requestOutput(consumer: "flutter_gpiod test", initialValue: false);
    line2.setValue(state);
    line2.release();
  }

  @override
  Widget build(BuildContext context) {
    // Widget MaterialApp
    return MaterialApp(
      // Ocultar la bandera de debug en la esquina superior derecha
      debugShowCheckedModeBanner: false,
      // Widget Scaffold
      home: Scaffold(
        // color de fondo de la app
        backgroundColor: Colors.grey[700],
        // Widget AppBar
        appBar: AppBar(
          // color de fondo del AppBar
          backgroundColor: Colors.black,
          // centrar el texto dentro del AppBar
          title: Center(
            child: Text(
              'LIVING ROOM',
            ),
          ),
        ),
        body: Center(
          // Widget Row
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              // Función del botón ON
              ElevatedButton(
                child: Text('ON'),
                onPressed: () {
                  print('ON');
                  ledState(true);
                },
                // Estilo del botón ON
                style: ElevatedButton.styleFrom(
                    primary: Colors.orange[700],
                    padding: EdgeInsets.symmetric(horizontal: 30, vertical: 10),
                    textStyle:
                    TextStyle(fontSize: 40, fontWeight: FontWeight.normal)),
              ),
              // Ícono de bombilla de Google Material
              Icon(
                Icons.lightbulb_outline,
                color: Colors.white,
                size: 200,
              ),
              // Función del botón OFF
              ElevatedButton(
                child: Text('OFF'),
                onPressed: () {
                  print('OFF');
                  ledState(false);
                },
                // Estilo del botón OFF
                style: ElevatedButton.styleFrom(
                    primary: Colors.orange[300],
                    padding: EdgeInsets.symmetric(horizontal: 30, vertical: 10),
                    textStyle:
                    TextStyle(fontSize: 40, fontWeight: FontWeight.normal)),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
```

#### Widgets de Flutter usados

Los widgets de Flutter se construyen usando un framework moderno que se inspira en React. La idea principal es que creas tu interfaz de usuario a partir de widgets. Los widgets describen cómo debería verse su vista dada su configuración y estado actuales.

**StatelessWidget:** Los widgets sin estado son útiles cuando la parte de la interfaz de usuario que describes no depende de nada más que de la información de configuración en el propio objeto y del BuildContext en el que se infla el widget.

**MaterialApp:** El widget MaterialApp es un widget que envuelve varios widgets que se requieren comúnmente para aplicaciones con diseño material.

**Scaffold:** Un Scaffold Widget proporciona un marco que implementa la estructura básica de diseño visual de material de la aplicación flutter. Proporciona APIs para mostrar paneles laterales, snack bars y bottom sheets.

**AppBar:** AppBar es un widget que contiene la barra de herramientas en la aplicación Flutter.

**Row:** Row se utiliza para mostrar sus hijos en una disposición horizontal. Aquí colocamos los elementos de la interfaz.

**ElevatedButton:** ElevatedButton es un widget que consiste en un botón que puede reaccionar cuando se presiona.

#### Íconos de Google Material

Hemos usado el ícono de **bombilla** dentro de la app desde **Google Material Icons**. Para explorar más íconos de Google Material, sigue [este enlace](https://fonts.google.com/icons), busca el ícono, selecciónalo y revisa el código flutter.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-14.png" alt="pir" width="800" height="auto"/></p>

### Instalar la librería GPIO

Ahora instalaremos la librería de control GPIO en nuestra aplicación Flutter. Usaremos la librería [**flutter_gpiod**](https://pub.dev/packages/flutter_gpiod/versions/0.4.0-nullsafety).

- **Paso 1.** Para instalar la librería GPIO, ve al archivo **pubspec.yaml** de tu proyecto Flutter y añade lo siguiente bajo **dependencies:**

```yaml
dependencies:
  flutter_gpiod: ^0.4.0-nullsafety
```

- **Paso 2.** Guarda el archivo y haz clic en **Pub get**:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-17.jpg" alt="pir" width="520" height="auto"/></p>

### Probar la app

- **Paso 1.** Abre el archivo **main.dart**.

- **Paso 2.** Haz clic en el botón **no device selected** y selecciona el dispositivo Android que creamos antes:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-13.1.jpg" alt="pir" width="800" height="auto"/></p>

Ahora verás la siguiente salida:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-5.png" alt="pir" width="800" height="auto"/></p>

- **Paso 3.** Haz clic en el **botón play** para ejecutar la aplicación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-14.png" alt="pir" width="800" height="auto"/></p>

Ahora verás la siguiente aplicación ejecutándose en el emulador de Android:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-13.png" alt="pir" width="800" height="auto"/></p>

### Compilar la aplicación y transferir al reTerminal

A continuación, compilaremos nuestra aplicación Flutter y la transferiremos al reTerminal.

- **Paso 1.** Abre una ventana de terminal dentro de Android Studio yendo a `View > Tool Windows > Terminal`.

- **Paso 2.** Escribe lo siguiente para preparar la compilación:

```sh
flutter clean
```

- **Paso 3.** Compila el proyecto:

```sh
flutter build bundle
```

- **Paso 4.** Enciende el reTerminal.

**Nota:** Verás que el reTerminal se inicia en modo línea de comandos.

- **Paso 5.** Transfiere el proyecto compilado al reTerminal:

```sh
scp -r ./build/flutter_assets pi@<ip_address_of_reTerminal>:/home/pi/testapp
```

## Lanzar la aplicación en reTerminal

- **Paso 1.** Escribe lo siguiente en la línea de comandos del reTerminal:

```sh
flutter-pi /home/pi/testapp
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-13.png" alt="pir" width="800" height="auto"/></p>

Cuando presiones los botones **ON** y **OFF**, notarás que el LED conectado al GPIO 24 reaccionará en consecuencia.

También puedes ampliar esto agregando un relé a los pines GPIO y controlar electrodomésticos para construir una solución de hogar inteligente completa en el reTerminal.

## Demo adicional

Si quieres probar una demo más interesante con Flutter, puedes revisar [este repositorio de GitHub](https://github.com/lakshanthad/Flutter_reTerminal_Smart_Home_UI)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/smart_home_demo.gif" alt="pir" width="800" height="auto"/></p>

## Recursos

- **[GitHub]** [flutter-pi](https://github.com/ardera/flutter-pi)
- **[Página web]** [Documentación oficial de Flutter](https://flutter.dev/docs)
- **[GitHub]** [Flutter Demo Source Code](https://github.com/lakshanthad/Flutter_reTerminal_LED_UI)

## Soporte técnico y debate de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte distintos tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para cubrir diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
