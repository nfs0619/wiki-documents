---
description: Electron para reTerminal
title: Electron para reTerminal
keywords:
  - Edge
  - reTerminal Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal-build-UI-using-Electron
last_update:
  date: 04/02/2025
  author: Erick González
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-17.png" alt="pir" width="1000" height="auto"/></p>

## Introducción

En esta guía, aprenderás a crear tu propia interfaz de usuario usando Electron. Electron es un framework de código abierto que permite crear aplicaciones de escritorio nativas (Windows, Mac, Linux) utilizando tecnologías web como HTML, CSS y JavaScript. Esto significa que si sabes construir un sitio web, puedes crear fácilmente una aplicación de escritorio.

Siguiendo los pasos a continuación, podrás crear una aplicación que controle los pines GPIO en el reTerminal simplemente haciendo clic en los botones en la pantalla LCD. ¡Comencemos!

## Preparar el entorno de desarrollo

### En el reTerminal

Primero instalaremos **Node.js** junto con **npm** en el reTerminal. npm es un administrador de paquetes para Node.js.

- **Paso 1.** Accede al reTerminal usando la **pantalla LCD integrada, una pantalla externa o SSH**, tal y como se explica [aquí](https://wiki.seeedstudio.com/reTerminal/#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet)

- **Paso 2.** Actualiza los paquetes

```sh
sudo apt update
sudo apt full-upgrade 
```

- **Paso 3.** Descarga el script para instalar Node.js

```sh
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
```

- **Paso 4.** Instala Node.js

```sh
sudo apt install -y nodejs
```

Ahora Node.js está instalado en el reTerminal. Para comprobar si la instalación fue exitosa, ejecuta los siguientes comandos y verifica la versión de **Node.js** y **npm**:

```sh
node -v
npm -v
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/node-2.png" alt="pir" width="300" height="auto"/></p>

### En el PC Host

A continuación, configuraremos Microsoft Visual Studio Code para nuestro desarrollo.

- **Paso 1.** Descarga e instala [Microsoft Visual Studio Code](https://code.visualstudio.com/)

**Nota:** Descarga el instalador adecuado para tu sistema operativo.

- **Paso 2.** Haz clic en la pestaña **Extensions** en el menú de navegación de la izquierda y escribe **remote development** en la barra de búsqueda

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remote-dev-extension.png" alt="pir" width="800" height="auto"/></p>

- **Paso 3.** Selecciona **Remote Development** y haz clic en **Install**

- **Paso 4.** Presiona **F1** en el teclado, escribe **ssh** y selecciona **Remote-SSH: Connect to Host...**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remote-ssh.png" alt="pir" width="800" height="auto"/></p>

- **Paso 5.** Ingresa lo siguiente:

```sh
pi@192.xxx.xx.xx
```

**Nota:** **pi** es el nombre de usuario y **192.xxx.xx.xx** es la dirección IP del reTerminal.

- **Paso 6.** Ingresa la contraseña del usuario

Ahora has iniciado sesión correctamente en el reTerminal usando SSH y has terminado de preparar el entorno de desarrollo.

## Aplicación de Electron para controlar luces

Crearemos una aplicación **Smart Light** con Electron que nos permitirá controlar los GPIO del reTerminal con simples clics en la pantalla LCD. Luego podrás conectar relés a los GPIO y controlar electrodomésticos.

### Conexiones de hardware

Conectaremos un **LED** al **GPIO 24** del reTerminal para propósitos de prueba. Más adelante, podrás agregar un relé y controlar electrodomésticos usando el GPIO.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/LED-connection-1.png" alt="pir" width="1000" height="auto"/></p>

**Nota:** Se necesita una resistencia entre el pin GPIO y el LED para evitar que el LED se queme.

### Crear e inicializar la aplicación

- **Paso 1.** Abre VSCode en el PC Host e inicia sesión en el reTerminal vía SSH como se explicó antes.

- **Paso 2.** Ve a `File > Open Folder...` y selecciona una carpeta de tu elección en el reTerminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-1.png" alt="pir" width="600" height="auto"/></p>

- **Paso 3.** Crea una nueva carpeta y asígnale un nombre

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-2.png" alt="pir" width="550" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-3.png" alt="pir" width="550" height="auto"/></p>

- **Paso 4.** Ve a `Terminal > New Terminal` y navega a la carpeta recién creada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-4.png" alt="pir" width="550" height="auto"/></p>

**Nota:** Aquí usamos **cd** para cambiar de directorio

- **Paso 5.** Escribe lo siguiente en la ventana de terminal para crear un archivo **package.json** con las configuraciones necesarias para nuestra app de Node.js

```sh
npm init
```

**Nota:** Sigue presionando **ENTER** para usar los valores predeterminados, pero establece el **entry point: (index.js)** como **main.js** y **test command:** como **electron .** (asegúrate de incluir un espacio y un punto después de **electron**)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-5.png" alt="pir" width="550" height="auto"/></p>

Si más adelante quieres cambiar las configuraciones, puedes visitar el archivo **package.json** dentro de la carpeta principal de la app.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-6.png" alt="pir" width="650" height="auto"/></p>

- **Paso 6.** En la terminal de VSCode, escribe lo siguiente para instalar **Electron**

```sh
npm install --save-dev electron
```

Verás la siguiente salida si Electron se instaló correctamente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-7.png" alt="pir" width="700" height="auto"/></p>

También verás la carpeta **node_modules** generada con los paquetes requeridos para ejecutar Electron

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-8.png" alt="pir" width="500" height="auto"/></p>

#### Instalar el módulo onoff de npm

El módulo onoff de npm permite acceder y controlar los GPIO en el reTerminal usando la aplicación de Electron.

- **Paso 1.** Abre una ventana de terminal en VSCode como se explicó antes y navega a nuestro directorio principal de la app.

- **Paso 2.** Escribe lo siguiente para instalar el módulo **onoff**:

```sh
npm install onoff
```

#### Instalar y ejecutar electron-rebuild

El módulo electron-rebuild recompila los módulos nativos de Node.js según la versión de Node.js que use tu proyecto de Electron. Esto permite usar módulos nativos de Node.js en las apps de Electron sin que la versión del sistema de Node.js coincida exactamente (lo cual a menudo no sucede, y a veces ni siquiera es posible).

- **Paso 1.** Instala **electron-rebuild**

```sh
npm install --save-dev electron-rebuild
```

- **Paso 2.** Ejecuta electron-rebuild

```sh
./node_modules/.bin/electron-rebuild
```

**Nota:** Cada vez que instales un nuevo paquete npm, vuelve a ejecutar electron-rebuild.

### Crear el HTML (interfaz básica)

Utilizaremos el archivo HTML para crear la interfaz de usuario básica sin estilos avanzados. Este archivo se encarga de mostrar los elementos de la interfaz en pantalla.

Dentro de nuestro directorio principal de la app, crea un nuevo archivo llamado **index.html** y copia el siguiente código:

```html
<!doctype html>
<html>
    <head>
        <!-- Especificar la codificación de caracteres para el documento HTML -->
        <meta charset="UTF-8">
        <!-- Barra de título de la aplicación -->
        <title>Test Application</title>
        <!-- Cargar la API de material icons -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <!-- Cargar la API de Google Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
        <!-- Cargar style.css con estilos de UI -->
        <link rel="stylesheet" href="style.css">
        <!-- Insertar código JavaScript -->
        <script>
            // Cargar el módulo ipcRenderer
            const { ipcRenderer } = require('electron');
            // Función para encender el GPIO al presionar el botón
            function buttonclick1()
            {
                // Esto enviará 1 como mensaje al proceso principal usando el canal "msg1"
                ipcRenderer.send("msg1",1)
            }
            
            // Función para apagar el GPIO al presionar el botón
            function buttonclick2()
            {
                ipcRenderer.send("msg2",0)
            }

            // Función para cerrar la app al presionar el botón
            function buttonclick3()
            {
                ipcRenderer.send("close-me")
            }
        </script>
    </head>
    <body>
        <!-- Botón para cerrar la aplicación -->
        <button class="button3" onclick="buttonclick3()">X</button>
        <br>
        <!-- Encabezado de la aplicación -->
        <h1>SMART LAMP</h1>
        <!-- Ícono de bombilla de la API de material icons -->
        <i class="material-icons">lightbulb</i>
        <br>
        <!-- Líneas vacías -->
        <br>
        <!-- Botón ON con atributo class para estilos 
        y atributo onclick para el evento de clic -->
        <button class="button1" onclick="buttonclick1()">ON</button>
        <br>
        <button class="button2" onclick="buttonclick2()">OFF</button>
    </body>
</html>
```

**Nota:** El **módulo ipcRenderer** es un EventEmitter. Proporciona métodos para enviar mensajes desde el proceso render (página web - html/css) al proceso principal (main.js). También puedes recibir respuestas del proceso principal.

Ahora hemos terminado de crear el archivo HTML.

Ejecuta **npm test** para ver la siguiente salida:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-15.png" alt="pir" width="1000" height="auto"/></p>

### Crear el CSS (estilos)

Usaremos el archivo CSS para añadir estilos a la interfaz de usuario creada con HTML.

Dentro del directorio principal de la app, crea un nuevo archivo llamado **style.css** y copia el siguiente código:

```css
/* Estilo para el cuerpo de la aplicación */
body {
    background-color: rgb(141, 141, 141);
}

/* Estilo para el encabezado de la aplicación */
h1 {
    font-size: 60px;
    text-align: center;
    font-family: "Roboto", "Courier New", monospace;
    color: rgb(255, 255, 255);
}

/* Estilo para el ícono de la bombilla */
.material-icons{
    font-size: 250px;
    color: rgb(204, 202, 71);
    display: flex;
    justify-content: center;
}

/* Estilo para el botón ON */
.button1 {
    display: inline-block;
    padding: 15px 25px;
    font-size: 35px;
    text-align: center;
    outline: none;
    color: rgb(255, 255, 255);
    background-color:rgb(76, 175, 80);
    border: none;
    border-radius: 15px;
    width: 20%;
    margin:auto;
    display:grid;
  }

/* Efecto de pulsación para el botón ON */
.button1:active {
  box-shadow: 0 5px rgb(104, 99, 99);
  transform: translateY(4px);
}

/* Efecto hover para el botón ON */
.button1:hover {background-color: rgb(62, 142, 65)}

/* Estilo para el botón OFF */
.button2 {
    display: inline-block;
    padding: 15px 25px;
    font-size: 35px;
    text-align: center;
    outline: none;
    color: rgb(255, 255, 255);
    background-color:rgb(207, 85, 85);
    border: none;
    border-radius: 15px;
    width: 20%;
    margin:auto;
    display:grid;
}

/* Efecto de pulsación para el botón OFF */
.button2:active {
  box-shadow: 0 5px rgb(104, 99, 99);
  transform: translateY(4px);
}
  
/* Efecto hover para el botón OFF */  
.button2:hover {background-color: rgb(179, 44, 44)}

/* Estilo para el botón de cierre */
.button3 {
  padding: 8px 25px;
  font-size: 20px;
  text-align: center;
  outline: none;
  color: rgb(255, 255, 255);
  background-color:rgb(179, 44, 44);
  border: none;
  width: 6%;
  margin:auto;
  display:grid;
  float: right;
}
```

El resultado final de la app se verá así:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-16.png" alt="pir" width="1000" height="auto"/></p>

### Crear el archivo Javascript (cargar y ejecutar la app)

Usaremos un archivo Javascript para crear la ventana de la aplicación, cargar el archivo HTML y agregar la funcionalidad de GPIO.

Dentro del directorio principal de la app, crea un nuevo archivo llamado **main.js** y copia el siguiente código:

```javascript
var Gpio = require('onoff').Gpio; // Incluir el módulo onoff para interactuar con GPIO
var LED = new Gpio(24, 'out'); // Inicializar GPIO 24 como salida

// Incluir app, BrowserWindow e ipcMain
const { app, BrowserWindow, ipcMain } = require('electron')
/* Usar ipcMain para recibir los mensajes enviados desde ipcRenderer y 
encender el GPIO */
ipcMain.on("msg1",(event,data)=>{
  LED.writeSync(data);
})

/* Usar ipcMain para recibir los mensajes enviados desde ipcRenderer y 
apagar el GPIO */
ipcMain.on("msg2",(event,data)=>{
  LED.writeSync(data);
})

/* Usar ipcMain para recibir los mensajes enviados desde ipcRenderer y 
cerrar la aplicación */
ipcMain.on("close-me", (event, arg) => {
    app.quit()
})

// Crear la ventana de la aplicación
app.on('ready', function() {
    var mainWindow = new BrowserWindow({
        // Hacer que la app sea fullscreen
        "fullscreen": true,
        webPreferences: {
            // habilitar la comunicación entre el proceso principal y el render
            nodeIntegration: true,
            contextIsolation: false
          }
    });
    // Cargar la página HTML con estilos CSS
    mainWindow.loadFile('index.html');
});
```

**Nota:** **ipcMain** proporciona métodos para recibir mensajes enviados desde el proceso render (página web).

### Probar la app

Verás la salida tan pronto como guardes el archivo anterior, porque tenemos **electron-rebuild** activado. Sin embargo, si has cerrado la app, puedes volver a abrirla con **npm test** y verás algo como esto:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-17.png" alt="pir" width="1000" height="auto"/></p>

## Preparar un script para ejecutar la app

- **Paso 1.** Abre la carpeta raíz que creamos antes y crea un nuevo archivo **.sh** en esa carpeta

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-18.png" alt="pir" width="350" height="auto"/></p>

- **Paso 2.** Abre el archivo creado y escribe lo siguiente:

```sh
#!/bin/bash
cd $HOME/Desktop/testapp
DISPLAY=:0 npm test
```

**Nota:** Aquí **$HOME/Desktop/testapp** es la ubicación del proyecto de Electron.

- **Paso 3.** Abre una ventana de terminal en VSCode y navega al directorio raíz de la app

```sh
example:
cd ~/Desktop/testapp
```

- **Paso 4.** Convierte ledstart.sh en un archivo ejecutable

```sh
sudo chmod +x ledstart.sh
```

## Preparar un archivo de escritorio para lanzar la app

- **Paso 1.** Abre la carpeta **Desktop** y crea un nuevo archivo **.desktop** en esa carpeta

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-20.png" alt="pir" width="340" height="auto"/></p>

- **Paso 2.** Abre el archivo creado y escribe lo siguiente:

```sh
[Desktop Entry]
Encoding=UTF-8
Name=LED Test
Comment=IconTest Link
Exec=/home/pi/Desktop/testapp/ledStart.sh
Type=Application
Categories=Application;Development;
```

**Nota:** **Exec** es la ubicación del script que creamos antes.

- **Paso 3.** Abre una ventana de terminal en VSCode y navega a la carpeta Desktop

```sh
example:
cd ~/Desktop
```

- **Paso 4.** Convierte **ledStart.desktop** en un archivo ejecutable

```sh
sudo chmod +x ledStart.desktop
```

### Lanzar la app

Haz doble clic en el archivo **LED Test** en el escritorio (Desktop) del reTerminal LCD.

Verás la siguiente salida:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-17.png" alt="pir" width="1000" height="auto"/></p>

Ahora puedes hacer clic en los botones y verás cómo el LED se enciende.

## Depurar la app

Veamos cómo depurar tu app mientras la desarrollas:

- **Paso 1.** Inicia sesión en el reTerminal vía **SSH** usando **Microsoft Visual Studio Code** como se mencionó antes.

- **Paso 2.** Inicia sesión en el reTerminal vía SSH usando una aplicación SSH como [MobaXterm](https://mobaxterm.mobatek.net/) con la función **X11 server**.

**Nota:** X11 es necesario para redirigir la pantalla del reTerminal y que aparezca en la PC.

- **Paso 3.** Después de escribir todo el código en Microsoft Visual Studio Code hacia el reTerminal, navega a la carpeta principal de la app y ejecuta lo siguiente:

```sh
npm test
```

Al final verás la salida en una nueva ventana. Si hay errores en el código, aparecerán en la ventana de la terminal de MobaXterm.

## FAQ

### P: ¿Cómo configurar actualizaciones automáticas a la app mientras guardo?

Para ello puedes configurar la función de Hot Reload usando el módulo **electron-reloader** de npm.

- **Paso 1.** Instala **electron-reloader**

```sh
npm install --save-dev electron-reloader
```

- **Paso 2.** Agrega la siguiente línea al final del archivo **main.js**:

```javascript
try {
  require('electron-reloader')(module)
} catch (_) {}
```

Ahora ejecuta el archivo una vez con **npm test** y la aplicación se actualizará cada vez que guardes los archivos. No necesitarás ejecutar **npm test** cada vez que cambies el contenido de tu proyecto.

## Demo adicional

Si quieres probar una demo más interesante con Electron, puedes revisar este [repositorio de GitHub](https://github.com/lakshanthad/Electron_reterminal_hardware)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/electron-reterminal-hw-demo.jpg" alt="pir" width="1000" height="auto"/></p>

## Recursos

- **[GitHub]** [Electron_reTerminal_Smart_Lamp_UI](https://github.com/lakshanthad/Electron_reTerminal_Smart_Lamp_UI)
- **[Página web]** [Documentación de Electron](https://www.electronjs.org/docs/api)

## Soporte técnico y debate de productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte distintos tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para cubrir diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
