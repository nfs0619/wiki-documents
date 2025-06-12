---
description: Azure IoT Edge Runtime en reTerminal DM
title: Azure IoT Edge Runtime en reTerminal DM
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal-DM_Azure_IoT
last_update:
  date: 04/03/2025
  author: Erick González
---

# Ejecutar Azure IoT Edge Runtime en el dispositivo reTerminal DM con Debian 11 (ARM32v7)

<div style={{textAlign:'center'}}><iframe width={270} height={358} frameBorder={0} src="https://devicecatalog.azure.com/embed/c40637ad-a9bf-494e-8975-f4d37e43cf6f" title="reTerminal DM - Azure Certified Device" /></div>


## Introducción

reTerminal DM es una PC Panel, HMI, PLC y Gateway IIoT todo en uno, impulsado por Raspberry Pi CM4,
con una pantalla frontal IP65 de 10.1" y ricas interfaces industriales, además de estar integrado
nativamente con Node-RED y soportar el ecosistema de software basado en Raspberry Pi.

Este documento describe cómo conectar el dispositivo reTerminal DM, que ejecuta Debian 11 (ARM32v7),
con Azure IoT Edge Runtime preinstalado y la funcionalidad de Device Management. Este proceso de
múltiples pasos incluye:

- Configurar Azure IoT Hub
- Registrar tu dispositivo IoT
- Crear y desplegar un componente cliente para probar la capacidad de administración de dispositivos

## Paso 1: Prerrequisitos

Asegúrate de contar con lo siguiente:

1. [Crear una cuenta de Azure](https://azure.microsoft.com/en-us/free/)
2. [Iniciar sesión en Azure Portal](https://portal.azure.com/#home)
3. [Configurar tu IoT hub](https://github.com/Azure/azure-iot-device-ecosystem/blob/master/setup_iothub.md)
4. [Agregar un dispositivo Edge](https://docs.microsoft.com/en-us/azure/iot-edge/quickstart-linux)
5. [Agregar módulos Edge](https://docs.microsoft.com/en-us/azure/iot-edge/quickstart-linux?view=iotedge-2018-06#deploy-a-module)

## Paso 2: Preparar tu Dispositivo

1. Enciende el dispositivo. Conecta una fuente de 12~24V al bloque terminal de 2 pines.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Azure-IoT/reTerminal-DM-Azure-IoT-EDGE.png" style={{width:300, height:'auto'}}/></div>

2. Verifica la versión de OS, bits y arquitectura.

```
$ lsb_release -irc
Distributor ID: Raspbian
Release: 11
Codename: bullseye
$ getconf LONG_BIT
32
$ uname -m
armv7l
```

:::tip
Si tu OS es anterior a Debian 11 (Bullseye) o LOG_BIT es 64, instala el Raspberry Pi OS 32-bit más reciente.
Consulta [Pasos para flashear Raspbian OS](https://wiki.seeedstudio.com/reterminal-dm-flash-OS/#steps-for-flashing-raspbian-os).
:::

:::tip
Si `uname -m` muestra aarch64, tu OS usa kernel de 64 bits. Cambia a kernel de 32 bits. Refiérete a [32-bit OS driver](https://wiki.seeedstudio.com/reterminal-dm-flash-OS/#32-bit-os-driver).
:::

## Paso 3: Prueba Manual de Azure IoT Edge en el dispositivo

### 3.1 Edge Runtime Activado

1. [Registrar tu dispositivo](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#register-your-device)

2. [Ver dispositivos registrados y obtener info de aprovisionamiento](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#view-registered-devices-and-retrieve-provisioning-information)

3. [Instalar IoT Edge](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#install-iot-edge)

```
$ curl https://packages.microsoft.com/config/debian/11/packages-microsoft-prod.deb > ./packages-microsoft-prod.deb
$ sudo apt install ./packages-microsoft-prod.deb
$ rm ./packages-microsoft-prod.deb
```

4. [Instalar un motor de contenedores](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#install-a-container-engine)

```
$ sudo apt-get update
$ sudo apt-get install moby-engine
$ sudo vi /etc/docker/daemon.json
$ sudo systemctl restart docker
```

Configura el driver de logs por defecto a `local`:

```cpp
"log-driver": "local"
```

5. [Instalar el runtime de IoT Edge](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#install-the-iot-edge-runtime)

```
$ sudo apt-get update
$ sudo apt-get install aziot-edge defender-iot-micro-agent-edge
```

6. [Aprovisionar el dispositivo con su identidad en la nube](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#provision-the-device-with-its-cloud-identity)

```
$ sudo iotedge config mp --connection-string 'PRIMARY_CONNECTION_STRING'
$ sudo iotedge config apply
```

### 3.2 Verificar el demonio iotedge

Abre terminal en tu dispositivo IoT Edge y confirma que el daemon Azure IoT edge está corriendo:

```
sudo iotedge system status
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Azure-IoT/reTerminal-DM-Azure-IoT-EDGE2.png" style={{width:900, height:'auto'}}/></div>

Abre terminal en tu dispositivo IoT Edge, confirma que el módulo desplegado desde la nube se ejecuta:

```
$ sudo iotedge list
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Azure-IoT/reTerminal-DM-Azure-IoT-EDGE3.png" style={{width:900, height:'auto'}}/></div>

En la página de detalles del dispositivo en Azure, verás los runtime modules (edgeAgent, edgeHub y
SimulatedTemperatureSensor) en estado en ejecución:

SimulatedTemperatureSensor modules are under running status

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Azure-IoT/reTerminal-DM-Azure-IoT-EDGE4.png" style={{width:900, height:'auto'}}/></div>


## Additional Links

- [What is Azure IoT Edge](https://learn.microsoft.com/en-us/azure/iot-edge/about-iot-edge)
- [Azure IoT Edge supported platforms](https://docs.microsoft.com/en-us/azure/iot-edge/support)
- [Develop your own IoT Edge modules](https://docs.microsoft.com/en-us/azure/iot-edge/module-development)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
