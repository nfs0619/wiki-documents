---
description: Qt para reTerminal con Python
title: Qt para reTerminal con Python
keywords:
  - Edge
  - reTerminal Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal-build-UI-using-Qt-for-Python
last_update:
  date: 04/03/2025
  author: Erick González
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/final-output.png" alt="pir" width="1000" height="auto"/></p>

## Introducción

En este wiki se explica cómo crear tu propia interfaz de usuario usando **Qt para Python** en el reTerminal. Aquí hemos usado **PySide2** para el desarrollo. PySide2 es el módulo oficial de Python del proyecto Qt for Python, que proporciona acceso a todo el framework Qt5. Qt para Python te permite crear interfaces de usuario interactivas de forma más amigable. Además, es muy flexible y tiene una curva de aprendizaje corta.

Siguiendo la guía a continuación, podrás crear una aplicación para controlar los LEDs STA y USR del reTerminal simplemente haciendo clic en los botones de la pantalla LCD. ¡Empecemos!

## Preparar el entorno de desarrollo

### En el reTerminal

- **Paso 1.** Accede al reTerminal usando la **pantalla LCD integrada, una pantalla externa o SSH**, tal como se explica [aquí](https://wiki.seeedstudio.com/reTerminal/#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet) y escribe lo siguiente en una ventana de terminal:

```sh
sudo apt install qml-module-qtquick-shapes python3-pyside2.qtqml python3-pyside2.qtcore python3-pyside2.qtnetwork python3-pyside2.qtgui python3-pyside2.qtwidgets python3-pyside2.qtquick qtquickcontrols2-5-dev qml-module-qtcharts qml-module-qtquick-controls qml-module-qtquick-controls2
```

- **Paso 2.** Instala las herramientas de compilación para instalar manualmente el componente **QtQuick.Studio**:

```sh
sudo apt install qt5-qmake
```

**Nota:** Tenemos que instalar QtQuick.Studio manualmente porque Debian y Ubuntu no incluyen este módulo por defecto.

- **Paso 3.** Instala el módulo **QtQuick.Studio**:

```sh
git clone https://github.com/Pillar1989/qtquickdesigner-components.git
cd qtquickdesigner-components
qmake
make
sudo make install
```

**Nota:** Debido a que la versión más reciente de QtQuick.Studio no funciona en la actual Raspberry Pi OS, la hemos adaptado (portado) a Debian GNU/Linux 10 (buster).

Podemos ignorar este mensaje de error:

```txt
Some of the required modules (qtHaveModule(quick)) are not available.
Skipped.
```

Ahora hemos terminado de instalar los paquetes necesarios en el reTerminal.

### En la PC Host

- **Paso 1.** Descarga e instala [Microsoft Visual Studio Code](https://code.visualstudio.com/)

**Nota:** Descarga el instalador adecuado para tu sistema operativo.

- **Paso 2.** Haz clic en la pestaña **Extensions** en el menú de navegación de la izquierda y escribe **remote development** en la barra de búsqueda

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remote-dev-extension.png" alt="pir" width="800" height="auto"/></p>

- **Paso 3.** Selecciona **Remote Development** y haz clic en **Install**

- **Paso 4.** Presiona **F1**, escribe **ssh** y selecciona **Remote-SSH:Connect to Host...**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remote-ssh.png" alt="pir" width="800" height="auto"/></p>

- **Paso 5.** Ingresa lo siguiente:

```sh
pi@192.xxx.xx.xx
```

**Nota:** **pi** es el nombre de usuario y **192.xxx.xx.xx** es la dirección IP del reTerminal.

- **Paso 6.** Ingresa la contraseña del usuario.

Ahora has iniciado sesión en el reTerminal usando SSH.

- **Paso 7.** Instala la extensión **Python** como en el paso 2 anterior

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/python-extension.png" alt="pir" width="800" height="auto"/></p>

- **Paso 8.** Instala la extensión **Qt for Python**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/qt-python-extension.png" alt="pir" width="800" height="auto"/></p>

- **Paso 9.** Ve a `File > Open Folder...` y selecciona la carpeta que quieras abrir

**Nota:** Luego usaremos Visual Studio Code para crear archivos dentro del reTerminal y construir nuestro proyecto.

Ahora hemos terminado de preparar el entorno de desarrollo.

## Construir el proyecto

Pasemos a construir el proyecto. El flujo de trabajo es el siguiente:

1. Diseñar la UI en un **software de diseño gráfico**
2. Crear un archivo **.qml** y construir la UI basándose en las posiciones de los elementos obtenidos del software de diseño gráfico
3. Crear otro archivo **.qml** para la aplicación de interfaz completa a pantalla completa
4. Crear un archivo **python** con las funciones para controlar los LEDs
5. Crear un archivo **Python** para ejecutar la app
6. Crear un **script** para ejecutar ese archivo python
7. Crear un **acceso directo** en el Escritorio para abrir la app haciendo doble clic en un ícono

Los archivos que necesitamos crear son:

- **LedGui.qml** - UI con elementos gráficos
- **App.qml** - Aplicación de UI a pantalla completa
- **ledControl.py** - Funciones para controlar los LEDs
- **main.py** - Ejecutar la app
- **led_start.sh** - Ejecutar el archivo Python
- **led.desktop** - Abrir la app

### Diseñar la UI

Primero diseñamos la interfaz de usuario. Para ello usaremos un software de diseño gráfico online y gratuito llamado **Gravit Designer**.

- **Paso 1.** Haz clic en [este enlace](https://www.designer.io/) para abrir Gravit Designer

- **Paso 2.** Haz clic en **Get Started**, crea una cuenta gratuita o inicia sesión con Facebook o Google

- **Paso 3.** Define el tamaño del lienzo en **1280 x 720px** y haz clic en **Create!**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/gravit-dimensions.png" alt="pir" width="800" height="auto"/></p>

**Nota:** Elegimos 1280x720px porque esa es la resolución de la LCD del reTerminal.

- **Paso 4.** Selecciona la forma **Rectangle**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/create-rect.png" alt="pir" width="800" height="auto"/></p>

- **Paso 5.** Dibuja un rectángulo para la **barra de título de la UI** manteniendo presionado el botón izquierdo del ratón, arrastra y suelta

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/rect-draw.jpg" alt="pir" width="800" height="auto"/></p>

- **Paso 6.** Dibuja el resto de rectángulos para el **título de la UI** repitiendo el proceso.

- **Paso 7.** Dibuja las siguientes formas para los **botones de la UI**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/rect-buttons.png" alt="pir" width="800" height="auto"/></p>

- **Paso 8.** Selecciona la forma y bajo la pestaña **INSPECTOR**, selecciona **Fills**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/rect-color.png" alt="pir" width="500" height="auto"/></p>

- **Paso 9.** Haz clic en un color para rellenar la forma seleccionada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/rect-title-fill.png" alt="pir" width="800" height="auto"/></p>

- **Paso 10.** Rellena las demás formas así:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/gravit-colored-blocks.png" alt="pir" width="800" height="auto"/></p>

- **Paso 11.** Añade un botón de cierre (close)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/gravit-close.png" alt="pir" width="800" height="auto"/></p>

- **Paso 12.** Haz clic en la herramienta de **Texto**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/gravit-text.png" alt="pir" width="600" height="auto"/></p>

- **Paso 13.** Coloca un bloque de texto y escribe "LED TEST"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/gravit-text-2.png" alt="pir" width="800" height="auto"/></p>

- **Paso 14.** Haz clic en el bloque de texto, cambia el tamaño y color

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/gravit-text-3.png" alt="pir" width="350" height="auto"/></p>

- **Paso 15.** Repite lo mismo hasta obtener lo siguiente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/gravit-text-4.png" alt="pir" width="800" height="auto"/></p>

Ahora hemos terminado de diseñar la interfaz.

### Construir la UI en qml

Transferiremos el diseño de Gravit Designer a qml para construir la UI.

- **Paso 1.** Conéctate al reTerminal por SSH con Microsoft Visual Code y abre una carpeta como se mencionó.

- **Paso 2.** Haz clic derecho y selecciona **New Folder**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-1.png" alt="pir" width="700" height="auto"/></p>

- **Paso 3.** Escribe un nombre para la carpeta y entra en ella

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-2.png" alt="pir" width="500" height="auto"/></p>

- **Paso 4.** Haz clic derecho en la carpeta y selecciona **New File**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-3.png" alt="pir" width="500" height="auto"/></p>

- **Paso 4.** Escribe un nombre para el archivo con extensión **.qml**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-4.png" alt="pir" width="600" height="auto"/></p>

**Nota:** Asegúrate de que la primera letra sea **Mayúscula**.

- **Paso 5.** Abre el archivo **.qml** y copia el siguiente código:

```qml
// importar librerías
import QtQuick 2.8
import QtQuick.Controls 2.1

/* El tipo Item es la base para todos los elementos visuales en Qt Quick. Aquí 1280 y 720
son elegidos por la resolución de la pantalla del reTerminal */
Item {
    // Identificar qml
    id: ledControl
    // Definir ancho y alto de la app
    width: 1280
    height: 720

    // Bloque rectangular para el encabezado
    Rectangle {
        id: titleBlock
        x: 0 // Posición en el eje X
        y: 0 // Posición en el eje Y
        width: 1280 // Ancho
        height: 175 // Alto
        color: "green" // Color del rectángulo
        /* También se pueden usar valores hexadecimales para el color */
    }

    // Botón superior izquierdo (ON)
    Button {
        id: staGreenOn
        x: 159
        y: 272
        width: 200
        height: 91
        text: "ON" // Texto del botón
        font.pointSize: 28 // Tamaño de fuente
        palette.button: "green" // Color del botón
        palette.buttonText: "white" // Color del texto
        // Usado para acceder a la clase de control del botón en el archivo Python y encender el LED
        onClicked:
        {
            _Setting.staGreenOn()
        }
    }

    // Botón inferior izquierdo (OFF)
    Button {
        id: staGreenOff
        x: 159
        y: 496
        width: 200
        height: 91
        text: "OFF"
        font.pointSize: 28
        palette.button: "green"
        palette.buttonText: "white"
        onClicked:
        {
            _Setting.staGreenOff()
        }
    }

    // Botón superior medio (ON)
    Button {
        id: staRedOn
        x: 540
        y: 272
        width: 200
        height: 91
        text: "ON"
        font.pointSize: 28
        palette.button: "red"
        palette.buttonText: "white"
        onClicked:
        {
            _Setting.staRedOn()
        }
    }

    // Botón inferior medio (OFF)
    Button {
        id: staRedOff
        x: 540
        y: 496
        width: 200
        height: 91
        text: "OFF"
        font.pointSize: 28
        palette.button: "red"
        palette.buttonText: "white"
        onClicked:
        {
            _Setting.staRedOff()
        }
    }

    // Botón superior derecho (ON)
    Button {
        id: usrGreenOn
        x: 918
        y: 272
        width: 200
        height: 91
        text: "ON"
        font.pointSize: 28
        palette.button: "green"
        palette.buttonText: "white"
        onClicked:
        {
            _Setting.usrGreenOn()
        }
    }

    // Botón inferior derecho (OFF)
    Button {
        id: usrGreenOff
        x: 918
        y: 496
        width: 200
        height: 91
        text: "OFF"
        font.pointSize: 28
        palette.button: "green"
        palette.buttonText: "white"
        onClicked:
        {
            _Setting.usrGreenOff()
        }
    }

    // Botón de cierre
    Button {
        id: close
        x: 1200
        y: 0
        width: 80
        height: 31
        palette.button: "red"
        palette.buttonText: "white"
        text: "X"
        onClicked:
        {
            _Setting.closeWindow()
        }
    }

    // Encabezado
    Text {
        id: title
        x: 500
        y: 37
        color: "white"
        text: "LED TEST"
        font.pixelSize: 60
    }

    // Texto STA GREEN
    Text {
        id: staGreen
        x: 135
        y: 400
        text: "STA GREEN"
        font.pixelSize: 45
    }

    // Texto STA RED
    Text {
        id: staRed
        x: 547
        y: 400
        text: "STA RED"
        font.pixelSize: 45
    }

    // Texto USR GREEN
    Text {
        id: usrGreen
        x: 891
        y: 400
        text: "USR GREEN"
        font.pixelSize: 45
    }
}
```

#### Obtener posición y tamaño de las formas

En **Gravit Designer**, selecciona un bloque de forma y obtén la **posición y tamaño** en la pestaña **INSPECTOR**:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/build-ui-4.5.png" alt="pir" width="350" height="auto"/></p>

#### Obtener posición y tamaño del texto

En **Gravit Designer**, selecciona un bloque de texto y obtén su **posición y tamaño** en la pestaña **INSPECTOR**:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-5.jpg" alt="pir" width="350" height="auto"/></p>

### Construir la UI a pantalla completa

Sigamos con la interfaz de pantalla completa.

- **Paso 1.** Abre la carpeta raíz y crea un nuevo archivo **.qml** en ella

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-6.png" alt="pir" width="400" height="auto"/></p>

- **Paso 2.** Abre el archivo **.qml** y copia lo siguiente:

```qml
// importar librería
import QtQuick.Controls 2.1

// propiedades de la ventana de aplicación que contiene los elementos de la UI
ApplicationWindow {
    id: application
    width: 1280
    height: 720
    visible: true
    visibility: "FullScreen"

    // inicializar la primera ventana de la aplicación
    property var iniITEM: "LedGui.qml"

    // modelo de navegación basado en stack
    StackView {
        id: stackview
        initialItem: iniITEM
    }
}
```

Ya hemos creado la app a pantalla completa.

### Métodos para controlar los LEDs

Ahora crearemos un archivo python para manejar los métodos de control de los LEDs en el reTerminal.

- **Paso 1.** Abre la carpeta raíz y crea un nuevo archivo Python **.py**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/python-1.png" alt="pir" width="400" height="auto"/></p>

- **Paso 2.** Abre el archivo **.py** y copia lo siguiente:

```py
# importar librerías
import sys
import os
from PySide2.QtCore import *

# clase para manejar botones
class Setting(QObject):

    # STA GREEN ON/OFF
    @Slot()
    def staGreenOn(self):
        # encender
        os.system("sudo sh -c 'echo 255 > /sys/class/leds/usr_led2/brightness'")
    @Slot()
    def staGreenOff(self):
        # apagar
        os.system("sudo sh -c 'echo 0 > /sys/class/leds/usr_led2/brightness'")

    # STA RED
    @Slot()
    def staRedOn(self):
        os.system("sudo sh -c 'echo 255 > /sys/class/leds/usr_led1/brightness'")
    @Slot()
    def staRedOff(self):
        os.system("sudo sh -c 'echo 0 > /sys/class/leds/usr_led1/brightness'")

    # USR GREEN
    @Slot()
    def usrGreenOn(self):
        os.system("sudo sh -c 'echo 255 > /sys/class/leds/usr_led0/brightness'")
    @Slot()
    def usrGreenOff(self):
        os.system("sudo sh -c 'echo 0 > /sys/class/leds/usr_led0/brightness'")

    # close
    @Slot()
    def closeWindow(self):
        sys.exit()
```

Ya terminamos el archivo para controlar los LEDs.

### Preparar el archivo Python para ejecutar la APP

Ahora crearemos un archivo Python para ejecutar la app que hemos creado.

- **Paso 1.** Abre la carpeta raíz y crea un nuevo archivo **.py**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildui-7.png" alt="pir" width="400" height="auto"/></p>

- **Paso 2.** Abre el archivo y copia el siguiente código:

```py
# importar librerías
from PySide2.QtQml import QQmlApplicationEngine
from PySide2.QtWidgets import *
from PySide2.QtCore import *
from ledControl import Setting

# lanzar la app
if __name__ == '__main__':
    app = QApplication([])
    engine = QQmlApplicationEngine()
    # ubicación de la app de pantalla completa que creamos
    url = QUrl("./App.qml")
    context = engine.rootContext()
    seting = Setting()
    context.setContextProperty("_Setting", seting)
    engine.load(url)
    app.exec_()
```

### Preparar un script para ejecutar el archivo python

- **Paso 1.** Abre la carpeta raíz y crea un nuevo archivo **.sh**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildui-8.png" alt="pir" width="400" height="auto"/></p>

- **Paso 2.** Abre el archivo creado y pon lo siguiente:

```sh
#!/bin/bash
cd $HOME/ledApp
DISPLAY=:0 python3 main.py
```

**Nota:** **$HOME/ledApp** es la ubicación de tu archivo **main.py**.

- **Paso 3.** Abre una ventana de terminal en el reTerminal y navega al directorio raíz de la app

```sh
example:
cd /ledApp
```

- **Paso 4.** Convierte led_start.sh en un archivo ejecutable

```sh
chmod +x led_start.sh
```

### Preparar un archivo de escritorio para lanzar la app

- **Paso 1.** Abre la carpeta raíz y crea un nuevo archivo **.desktop**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildui-9.png" alt="pir" width="400" height="auto"/></p>

- **Paso 2.** Abre el archivo creado y escribe:

```sh
[Desktop Entry]
Encoding=UTF-8
Name=LED Test
Comment=IconTest Link
Exec=/home/pi/ledApp/led_start.sh
Type=Application
Categories=Application;Development;
```

**Nota:** **Exec** es la ruta del script que creamos antes.

- **Paso 3.** Abre la ventana de terminal en el reTerminal y ve al directorio raíz de la app

```sh
example:
cd /ledApp
```

- **Paso 4.** Convierte led_start.sh en un archivo ejecutable

```sh
chmod +x led.desktop
```

### Lanzar la app

- **Paso 1.** Ve a la carpeta **ledApp** usando la pantalla del reTerminal

- **Paso 2.** Haz doble clic en el archivo **LED Test**

Verás la siguiente salida:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/final-output.png" alt="pir" width="1000" height="auto"/></p>

Ahora puedes hacer clic en los botones y verás cómo se encienden los LEDs.

### Depurar la app

Revisemos cómo depurar la app mientras la desarrollas.

- **Paso 1.** Inicia sesión en el reTerminal vía **SSH** con **Microsoft Visual Studio Code** como se explicó.

- **Paso 2.** Inicia sesión en el reTerminal vía SSH con una aplicación como [MobaXterm](https://mobaxterm.mobatek.net/) y la función **X11 server**.

**Nota:** X11 es necesario para redirigir la pantalla del reTerminal y que aparezca en la PC.

- **Paso 3.** Después de escribir todo el código en Microsoft Visual Studio Code, ejecuta **main.py** usando MobaXterm:

```sh
python3 main.py
```

## Prueba directa

Sigue los pasos anteriores para configurar tu entorno, luego copia el código directamente y ejecútalo.

```bash
git clone https://github.com/lakshanthad/Python_ReTerminalQt5_LED_UI
cd Python_ReTerminalQt5_LED_UI
python3 main.py
```

Finalmente verás la salida en una ventana nueva. Si hay errores en el código, aparecerán en la ventana de terminal de MobaXterm.

## Demo adicional

Si quieres experimentar una demo más interesante con Qt para Python, revisa [este repositorio de GitHub](https://github.com/Seeed-Studio/Seeed_Python_ReTerminalQt5Examples)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Qt-Demo.gif" alt="pir" width="1000" height="auto"/></p>

## Recursos

- **[GitHub]** [Python_ReTerminalQt5_LED_UI](https://github.com/lakshanthad/Python_ReTerminalQt5_LED_UI)
- **[Página web]** [Documentación de Qt](https://doc.qt.io/qt-5/index.html)

## Soporte técnico y debate de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para cubrir diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
