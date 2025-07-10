---
description: Get Started with the SenseCAP LoRaWAN Starter Kit
title: Primeros Pasos con el Kit de Inicio SenseCAP LoRaWAN
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/M2_Kit_Getting_Started
sidebar_position: 0
last_update:
  date: 06/21/2025
  author: Guillermo
---
# **Descripción General**

## **Conceptos Básicos de LoRaWAN**

LoRaWAN (Long Range Wide Area Network) es un protocolo de comunicación inalámbrica de bajo consumo y largo alcance, diseñado específicamente para aplicaciones del Internet de las Cosas (IoT). Proporciona capacidades de comunicación a larga distancia y bajo consumo para dispositivos IoT. Las características principales de LoRaWAN incluyen:

- Comunicación de largo alcance
- Bajo consumo de energía
- Implementación pública o privada
- Conectividad a gran escala de dispositivos

Debido a estas características, se aplica ampliamente en agricultura inteligente, ciudades inteligentes, monitoreo ambiental y otras aplicaciones de sensores inalámbricos.

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/1.png
"/></div>

Para aprender más sobre LoRaWAN, haz clic aquí.

## **Kit de Inicio SenseCAP LoRaWAN**

El Kit de Inicio SenseCAP LoRaWAN está diseñado para facilitar a los usuarios la adquisición rápida y la aplicación práctica de conocimientos sobre LoRaWAN. El kit incluye la puerta de enlace multiplataforma NM2, XIAO S3, Grove Wio-E5, sensor de temperatura y humedad, sensor de humedad del suelo, y otros módulos Grove expandibles que permiten a los usuarios aprender haciendo sobre la arquitectura LoRaWAN y los capacita para desarrollar sus propios proyectos.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/2.jpg" /></div>

Como Kit de Inicio LoRaWAN, incluye todos los componentes de la arquitectura LoRaWAN, incluyendo nodos, gateways e incluso la plataforma en la nube SenseCAP. El kit ofrece un conjunto completo de funciones que te permiten experimentar a fondo la tecnología LoRaWAN. Con este kit, puedes realizar diversas actividades prácticas como pruebas de alcance, pruebas de red y desarrollo de proyectos. Proporciona una solución completa que te permite profundizar en todos los aspectos de LoRaWAN, validando su desempeño y funcionalidad mediante aplicaciones reales. Ya seas principiante o desarrollador experimentado, este kit cubre tus necesidades de aprendizaje y práctica en el ámbito de LoRaWAN.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/3.png" /></div>

Productos Relevantes:

| Nombre | Descripción |
| :- | :- |
| [S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S210x) | Una serie de sensores industriales inalámbricos LoRaWAN®. |
| [S2100 datalogger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) | Puede conectarse a sensores MODBUS-RTU RS485/Analógicos/GPIO y transmitir datos desde los sensores a la red LoRaWAN. |
| [M2 Multi-Platform LoRaWAN Indoor Gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html) | Un gateway LoRaWAN® estándar que soporta conexión a diferentes servidores de red. |
| [Wio-E5 Dev Kit](https://www.seeedstudio.com/LoRa-E5-Dev-Kit-p-4868.html) | Un conjunto de herramientas de desarrollo compacto y fácil de usar para desbloquear el potente rendimiento del módulo LoRa Wio-E5 STM32WLE5JC. |

# **Comenzando**

## **Preparación**

### **Hardware**

**Componentes Electrónicos**

El kit debe incluir los siguientes componentes electrónicos. Por favor, verifica que estén completos.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/4.jpg" /></div>

Antes de comenzar el proyecto, necesitas soldar los headers en la placa XIAO e instalar la antena.

**Soldar el header**

La XIAO ESP32S3 se envía sin headers de pines por defecto, debes preparar tus propios headers y soldarlos en los pines correspondientes de la XIAO para poder conectar la placa de expansión o el sensor.

Debido al tamaño miniatura de la XIAO ESP32S3, por favor ten cuidado al soldar los headers, no pegues pines entre sí ni pegues soldadura en el shield u otros componentes. De lo contrario, puede causar cortocircuitos o mal funcionamiento de la XIAO, y las consecuencias serán responsabilidad del usuario.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/5.png" /></div>

**Instalación de la antena**

En la parte inferior izquierda del frente de la XIAO ESP32S3, hay un conector separado llamado "Conector de Antena WiFi/BT". Para obtener mejor señal WiFi/Bluetooth, debes sacar la antena incluida en el paquete e instalarla en ese conector.

Hay un pequeño truco para la instalación de la antena: si la presionas directamente con fuerza, será difícil y te dolerán los dedos. La forma correcta es insertar un lado del conector de la antena en el bloque del conector primero, luego presionar un poco el otro lado, y así la antena quedará instalada.

Para retirar la antena no uses fuerza bruta tirando directamente; levanta un lado con cuidado y la antena saldrá fácilmente.
<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/6.png" /></div>

### **Software**

Puedes optar por usar nuestra plataforma en la nube integrada SenseCAP o utilizar un Servidor de Red LoRaWAN de terceros como The Things Network. Recomendamos usar la plataforma en la nube SenseCAP para la mejor experiencia de usuario. A continuación, los enlaces relevantes.

1. Haz clic para abrir la página web del [Portal SenseCAP](https://sensecap.seeed.cc/portal/#/login)

Escanea para descargar la app SenseCAP Mate
<div align="center"><img width={200} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/7.png" /></div>

# **Inicio rápido y sin código con el Kit de Inicio LoRaWAN**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/8.png" /></div>

## **Paso 1: Encender y conectar a Internet**

El kit incluye el [SenseCAP Multi-Platform LoRaWAN Indoor Gateway (SX1302) - EU868 - Seeed Studio](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html), que es un gateway LoRaWAN® estándar que soporta conexión a diferentes servidores de red. Puede usarse no solo para desarrollo personal LoRa, sino también con sensores industriales. En esta wiki, el flujo de datos pasará a través de SenseCAP Cloud. El modelo predeterminado que corre en este gateway es SenseCAP, por lo que no necesitas configuraciones extra, solo enciende el gateway y conéctalo a Internet por ETH o WIFI.

### **Conexión por cable Ethernet (ETH)**

La forma rápida: conecta el cable Ethernet al puerto Ethernet, y el indicador en la parte superior mostrará luz verde fija si el gateway se conecta correctamente a Internet.

### **Conexión a WIFI vía Luci**

Hay dos formas para que los usuarios ingresen a la página de configuración Luci:

**Acceso vía router**

1. Conecta tu gateway a un cable Ethernet y conecta tu PC al mismo router.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/9.png" /></div>
 
**Nota**: Tu PC y el dispositivo deben estar conectados al mismo router/red.

2. Revisa la dirección IP de tu dispositivo en la página de administración de tu router.  
3. Obtén el nombre de usuario y contraseña de tu dispositivo: puedes encontrarlos en la etiqueta del dispositivo.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/10.png" /></div>

4. Ingresa la dirección IP de tu dispositivo en un navegador para entrar a la página Luci. Luego introduce el nombre de usuario y contraseña para iniciar sesión.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/11.png" /></div>

**Acceso vía hotspot AP del dispositivo**

1. Mantén presionado el botón por 5 segundos hasta que el indicador azul parpadee lentamente para entrar en modo configuración.
2. El nombre del hotspot AP es SenseCAP\_XXXXXX (dirección MAC de 6 dígitos), la contraseña por defecto es 12345678; conecta tu computadora a este hotspot AP.

<div align="center"><img width={200} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/12.png" /></div>

3. Obtén el nombre de usuario y contraseña de tu dispositivo. Puedes encontrarlos en la etiqueta del dispositivo.

4. Ingresa la dirección IP (192.168.168.1) en tu navegador para entrar a la consola local. Luego ingresa el nombre de usuario y contraseña, y haz clic en el botón Iniciar sesión.

**Conectar a WIFI**

Haz clic en Network - Wireless

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/13.png" /></div>

Haz clic en el botón Scan para escanear las redes WIFI.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/14.png" /></div>

Selecciona tu red WIFI para unirte.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/15.png" /></div>

Ingresa la contraseña de la red WIFI y luego haz clic en Submit y Save.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/16.png" /></div>

Luego haz clic en Save and Apply para aplicar la configuración.

El indicador en la parte superior mostrará luz verde fija si el gateway se conecta correctamente al WIFI.

## **Paso 2: Conectar los nodos**

Inserta el sensor de humedad capacitiva de suelo Grove, el sensor de temperatura y humedad y el módulo inalámbrico Grove-Wio-E5 en la placa de expansión XIAO.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/17.png" /></div>

## **Paso 3: Escanear el código QR del Grove-Wio-E5**

Abre la app SenseCAP Mate después de descargar la versión correspondiente según tu sistema móvil. Si es la primera vez que usas la plataforma SenseCAP, regístrate primero.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/18.png" /></div>
<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/19.png" /></div>

Haz clic en el + en la esquina superior derecha y selecciona Añadir dispositivo para enlazar el Grove - Wio-E5..

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/20.png" /></div>

Alinea la caja en el centro de la cámara con el código QR que está en la parte trasera del Grove - Wio-E5 para escanear y enlazar tu kit. Ten en cuenta que no debes escanear el código QR que está en la parte frontal del Wio E5.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/21.png" /></div>

## **Paso 4: Visualizar los datos**

Después de enlazar exitosamente usando la app SenseCAP Mate, verás los datos del sensor en la aplicación.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/22.jpg" /></div>


:::tip
La app SenseCAP Mate no actualiza automáticamente la información de los datos; necesitarás deslizar hacia abajo en la página del sensor para actualizar. Si no ves datos nuevos por más de 10 minutos, puedes intentar reiniciar el Wio Terminal presionando una vez el botón lateral hacia abajo.
:::

## Apéndice

- [Código de Firmware Nativo](https://github.com/Seeed-Solution/lorawan-kit)

