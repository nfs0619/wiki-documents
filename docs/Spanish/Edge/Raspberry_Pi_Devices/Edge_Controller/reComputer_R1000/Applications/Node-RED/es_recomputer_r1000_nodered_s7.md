---
description: Aprende a configurar PLCs Siemens utilizando el protocolo S7 e integrarlos con Node-RED en un reComputer R1000 basado en Raspberry Pi para una computación en el borde eficiente. Descubre una guía paso a paso sobre la configuración de nodos S7, la creación de flujos y el monitoreo de variables del PLC.
title: Conectando PLCs Siemens Usando el Protocolo S7 con reComputer R1000

keywords:
  - Edge Controller
  - reComputer R1000
  - Node-Red
  - Siemens
  - S7
  - PLC
  
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/recomputer_r1000_nodered_s7
last_update:
  date: 02/17/2025
  author: Erick González
---

## Introducción

El **protocolo S7** es un estándar de comunicación desarrollado por Siemens para su familia de controladores lógicos programables (PLCs). Es fundamental para permitir un intercambio de datos fluido y confiable entre los PLCs de Siemens. Este protocolo opera sobre Ethernet utilizando un método llamado ISO TCP, el cual se basa en bloques de datos conocidos como Protocol Data Units (PDUs). Cada PDU es un segmento de información cuyo tamaño y estructura se determinan cuando se establece la conexión por primera vez.

En este artículo, exploraremos cómo utilizar **Node-RED**, una popular herramienta de desarrollo basada en flujos, en un **reComputer R1000 con Raspberry Pi** para interactuar con PLCs Siemens usando el protocolo S7. Esta configuración permite una integración eficiente y flexible de sistemas de automatización industrial con plataformas modernas de IoT.

## Configuración de tu PLC para el Protocolo S7

Después de diseñar tu diagrama Ladder o Function Block, el siguiente paso es configurar tu **PLC Siemens** para habilitar el protocolo S7. Los pasos exactos pueden variar según el modelo de PLC que estés utilizando. Por ejemplo, si utilizas un **[Siemens LOGO PLC](https://www.siemens.com/global/en/products/automation/systems/industrial/plc/logo.html)**, esta configuración se realizará en el software de programación **LOGO Soft**.

### Configuración de Red

En la configuración de Ethernet, debes ingresar la **dirección IP** del PLC, la **máscara de subred** y la **puerta de enlace predeterminada**.

### Habilitar el Protocolo S7

Asegúrate de marcar la opción para permitir la comunicación S7.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/logo1.PNG" /></center>

### Configuración de la Comunicación S7

Agrega una conexión Ethernet configurada como un **servidor S7**. También deberás configurar los **TSAP (Transport Service Access Point) del Cliente y del Servidor**.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/logo2.PNG" /></center>

:::note
Si estás utilizando un modelo diferente de PLC Siemens, consulta la documentación correspondiente para conocer los pasos específicos de configuración.
:::

## Configuración de Nodos S7 en Node-RED

Para integrar los PLCs Siemens con Node-RED, necesitarás utilizar el nodo `node-red-contrib-s7`. Sigue estos pasos para configurarlo:

### Instalación del Nodo S7

- Ve a la opción **Administrar Paleta** en Node-RED.
- Navega a la pestaña **Instalar** y busca `node-red-contrib-s7`.
- Instala el nodo para agregar capacidades S7 a tu entorno Node-RED.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/nodered_s7.PNG" /></center>

### Crear un Flujo

- Arrastra y suelta el nodo **S7 out** en tu espacio de trabajo, junto con dos nodos **inject**.
- Conecta los nodos inject al nodo S7 out para iniciar la comunicación con el PLC.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/s7_out.PNG" /></center>

### Configurar el Nodo S7 Out

- Primero, configura el endpoint haciendo clic en el icono `+ (más)`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/editS7.PNG" /></center>

- Ingresa la **dirección IP** de tu PLC.
- Configura el modo como **TSAP**.
- Introduce el **TSAP Local** y **TSAP Remoto** según la configuración del servidor de tu PLC.
- Asigna un **nombre reconocible** a tu PLC para facilitar su identificación.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/LOGO_endpoint.PNG" /></center>

### Agregar Variables

- Define cada variable con un **Nombre** y **Dirección**.
- Usa los espacios de direcciones adecuados según los diferentes tipos de bloques (ejemplo: bobinas, entradas). Puedes consultar la [Documentación de Direcciones S7 de Siemens](https://www.winccoa.com/documentation/WinCCOA/3.18/en_US/S7_Driver/topics/s7_address.html) para más detalles.
- Asegúrate de que cada nombre de variable corresponda con precisión a su tipo de bloque.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/logo_variables.PNG" /></center>

## Configurar el Nodo Inject

- Edita la carga útil (*payload*) del nodo inject para establecer un valor booleano. Usa un nodo inject para `true` y otro para `false`.

<center><img width={500} height={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/true.PNG" /></center>
<center><img width={500} height={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/false.PNG" /></center>

## Agregar el Nodo S7 In para Monitoreo

- Arrastra y suelta el nodo **S7 in** para monitorear los valores de las variables.
- Puedes configurar este nodo para visualizar una sola variable o todas las variables.
- Selecciona el `PLC`, el `Modo` y la `Variable` que deseas monitorear.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/s7_in.PNG" /></center>

## Desplegar tu Flujo

- Una vez que todo esté configurado, despliega (*deploy*) tu flujo para iniciar la comunicación con tu PLC Siemens.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/final.PNG" /></center>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte distintos tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>