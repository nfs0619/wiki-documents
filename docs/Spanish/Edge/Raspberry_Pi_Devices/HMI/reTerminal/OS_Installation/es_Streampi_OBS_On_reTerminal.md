---
description: Stream-pi & OBS studio para reTerminal
title: Stream-pi & OBS studio para reTerminal
keywords:
  - Edge
  - reTerminal OS_Installation
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Streampi_OBS_On_reTerminal
last_update:
  date: 04/03/2025
  author: Erick González
---

# Seeed reTerminal con streampi para control de OBS Studio y control conveniente

## Introducción

### ¿Qué es reTerminal 🤔

El [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) es una placa todo en uno basada en Raspberry Pi, potenciada por el módulo Raspberry Pi Compute Module 4 (CM4). Integra una pantalla IPS multitáctil, Wi-Fi de doble banda 2.4GHz/5GHz y Bluetooth 5.0, un sistema operativo basado en Raspberry Pi preinstalado, 4 GB de RAM y 32 GB eMMC.

Gracias a su diseño modular, la placa viene equipada con diversos componentes y conectores de alta velocidad. Puede servir para asistencia en el hogar e inteligencia artificial personal, además de aplicar funciones industriales en instalaciones.

**Características**

- **Placa todo en uno de Raspberry Pi**: Con CM4 de 32GB, pantalla IPS multitáctil, Wi-Fi de doble banda y sistema Linux compatible preinstalado.
- **Diseño modular**: Con interfaz de expansión industrial de alta velocidad y encabezado de 40 pines compatible con Raspberry Pi.
- **Ricos interfaces y componentes**: Con puertos USB Tipo-A, Ethernet Gigabit, micro-HDMI, ranura micro-SD, interfaz de cámara MIPI, sensor de luz, acelerómetro, buzzer, RTC y botones programables.
- **Asistencia personal ordenada**: Participa en múltiples proyectos de Dashboards o IA con sensores y componentes integrados.
- **Gran instalación industrial**: Con un estable sistema basado en Raspberry Pi, múltiples conectores de nivel industrial, co-procesador criptográfico y la placa oficial de expansión reTerminal E10-1.

### ¿Qué es streampi 🤔

Stream-Pi es un software de macro-teclado robusto para artistas, creadores, gamers y geeks.

Stream-Pi es una alternativa de código abierto y ofrece un sistema de Temas rico que los usuarios pueden personalizar con CSS, además de una API rica para que desarrolladores escriban sus propios plug-ins, todo gratis y de código abierto.

### ¿Qué es OBS Studio 🤔

OBS Studio es una aplicación gratuita y de código abierto para grabación de pantalla y streaming en vivo. Escrita en C/C++ y usando Qt, OBS Studio ofrece captura en tiempo real, composición de escenas, grabación, codificación y broadcasting mediante RTMP. Puede transmitir videos a destinos que soporten RTMP: YouTube, Twitch, Instagram y Facebook.

### ¿Por qué hacemos esto 🤨

Descubrimos que la pantalla integrada del reTerminal, su excelente rendimiento y compatibilidad con el ecosistema Raspberry Pi lo hacen ideal para implementar controles inteligentes y convenientes como herramienta de productividad.

## Instalación 🐱‍🚀

- **Hardware necesario**
  - reTerminal
  - PC

Para estabilidad, nuestra guía se basa en Ubuntu 18.04 (aunque se aplica a otras distros Linux, Windows, Mac, etc.).

### Instalar OBS studio ⌛

Dos métodos:

1. **Usar paquete precompilado** (recomendado)
2. Compilar manualmente

#### Usando paquetes precompilados

```bash
sudo apt update 
sudo apt install wget git 
```

```bash
wget https://github.com/obsproject/obs-studio/releases/download/27.2.4/obs-studio_27.2.4-0obsproject1.bionic_amd64.deb
sudo apt install ./obs-studio_27.2.4-0obsproject1.bionic_amd64.deb
sudo apt install -f
```

#### OBS personalizado (custom)

```bash
sudo apt install build-essential checkinstall cmake git libmbedtls-dev libasound2-dev libavcodec-dev libavdevice-dev libavfilter-dev libavformat-dev libavutil-dev libcurl4-openssl-dev libfontconfig1-dev libfreetype6-dev libgl1-mesa-dev libjack-jackd2-dev libjansson-dev libluajit-5.1-dev libpulse-dev libqt5x11extras5-dev libspeexdsp-dev libswresample-dev libswscale-dev libudev-dev libv4l-dev libvlc-dev libx11-dev libx11-xcb1 libx11-xcb-dev libxcb-xinput0 libxcb-xinput-dev libxcb-randr0 libxcb-randr0-dev libxcb-xfixes0 libxcb-xfixes0-dev libx264-dev libxcb-shm0-dev libxcb-xinerama0-dev libxcomposite-dev libxinerama-dev pkg-config python3-dev qtbase5-dev libqt5svg5-dev swig libwayland-dev qtbase5-private-dev libpci-dev
```

```bash
git clone https://github.com/obsproject/obs-studio.git -b release/27.2 obs_27.2
cd obs-studio
git submodule update --init --recursive
```

```bash
mkdir build
cd build
cmake -DBUILD_BROWSER=OFF ..
```

### Instalar plugin websocket para OBS studio

```bash
wget https://github.com/obsproject/obs-websocket/releases/download/4.9.0/obs-websocket_4.9.0-1_amd64.deb
```

```bash
sudo apt update 
sudo apt install ./obs-websocket_4.9.0-1_amd64.deb
sudo apt install -f
```

### Instalar el servidor stream pi (en el PC)

[Versiones recomendadas](https://github.com/stream-pi/server/releases/tag/2.0.0-SNAPSHOT)

```bash
wget https://github.com/stream-pi/server/releases/download/2.0.0-SNAPSHOT/stream-pi-server-linux-x64-2.0.0-SNAPSHOT.deb
```

```bash
sudo apt install ./stream-pi-server-linux-x64-2.0.0-SNAPSHOT.deb
```

### Instalar el cliente stream pi (en reTerminal)

[Versiones recomendadas](https://github.com/stream-pi/client/releases/tag/2.0.0-SNAPSHOT)

```bash
wget https://github.com/stream-pi/server/releases/download/2.0.0-SNAPSHOT/stream-pi-server-linux-aarch64-2.0.0-SNAPSHOT-executable.zip
```

```bash
mkdir Stream_pi_client 
unzip stream-pi-server-linux-aarch64-2.0.0-SNAPSHOT-executable.zip -d Stream_pi_client
```

## Interacción cliente-servidor streampi

### Lanzar servicios

**En reTerminal**

```bash
cd Stream_pi_client
./run_desktop
```

**En PC (Ubuntu)**

Haz clic en el ícono:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/01.jpg"/></div>

### Definir funciones 😏

1. Abre streampi server

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/02.jpg"/></div>

2. Clic en file -> setting -> general

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/03.jpg"/></div>

3. Configura dirección del servidor streampi, tamaño de box y guarda

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/04.jpg"/></div>

4. Conectar a servicios obs

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/06.jpg"/></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/05.jpg"/></div>

5. En el cliente reTerminal, configura la dirección del servidor con la IP del PC y clic en save y connect

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/09.jpg"/></div>

6. Vuelve a streampi server y arrastra la pestaña correspondiente al recuadro correspondiente para obtener la función deseada

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/07.jpg"/></div>

7. También podemos escribir comandos directos para llamadas de programa, cambiar íconos, nombres, tamaños, etc.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/11.jpg"/></div>

8. Agrega una vista de pantalla y fuente de imagen en OBS Studio

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/08.jpg"/></div>

9. Finalmente, podemos presionar en reTerminal para el control correspondiente 👍👍👍

   - Esta es la interfaz en reTerminal:

   <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/10.jpg"/></div>

   - Esta es la interfaz en PC:

   <div align="center"><video width={500} controls><source src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/demo.mkv"/></video></div>

   - Apariencia de reTerminal:

   <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/12.jpg"/></div>

## Soporte técnico y debate de productos

¡Gracias por elegir nuestros productos! Queremos brindarte distintos tipos de soporte y asegurar una experiencia fluida. Ofrecemos varios canales de comunicación para diferentes preferencias.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
