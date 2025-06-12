---
description: Integración de reTerminal y módulos de cámara Pi
title: reTerminal y módulos de cámara Pi
keywords:
  - Edge
  - reTerminal
  - piCamera
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal-piCam
last_update:
  date: 04/03/2025
  author: Erick González
---

# reTerminal y módulos de cámara Pi

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/cam_images.jpg" alt="pir" width="600" height="auto"/></p>

La cámara Raspberry Pi, a menudo llamada PiCam, es un módulo de cámara diseñado específicamente para las placas Raspberry Pi. Ofrece una solución compacta y cómoda para capturar imágenes y grabar videos directamente desde tu dispositivo.

A continuación, se muestran las especificaciones de cada versión de PiCam:

**PiCam v1 (Camera Module v1.3):**

- Sensor: OmniVision OV5647
- Resolución: 5 megapíxeles
- Modos de video: 1080p30, 720p60, 640x480p60/90

**PiCam v2 (Camera Module v2):**
- Sensor: Sony IMX219
- Resolución: 8 megapíxeles (3280 x 2464 píxeles)
- Modos de video: 1080p30, 720p60, 640x480p90

**PiCam v3 (Camera Module 3):**
- Sensor: Sony IMX708
- Resolución: 12 megapíxeles (4056 x 3040 píxeles)
- Modos de video: 1080p30, 720p60, 640x480p90

| Raspberry Pi Camera Module V1 | Raspberry Pi Camera Module V2 | Raspberry Pi Camera Module 3 |
|----------|---------------------|--------------|
|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/pi_cam3.jpg)|
|[¡CÓMPRALO AHORA!](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-p-1659.html?queryID=9e37f656a0eb0086c424e93bcfffadf4&objectID=1242&indexName=bazaar_retailer_products)|[¡CÓMPRALO AHORA!](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)|[¡CÓMPRALO AHORA!](https://www.seeedstudio.com/Raspberry-Pi-Camera-3-p-5574.html?queryID=11243e5e9f95c4f4f0716b229dd8dcf0&objectID=5574&indexName=bazaar_retailer_products)|

|Raspberry Pi Camera Module 3 Wide NoIR | Raspberry Pi Camera Module 3 NoIR | Raspberry Pi Camera Module 3 Wide |
|----------|---------------------|--------------|
|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picamWN.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picamnoir.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam3w.jpg)|
|[¡CÓMPRALO AHORA!](https://www.seeedstudio.com/Raspberry-Pi-Camera-3-Wide-NoIR-p-5577.html?queryID=f7e448b5e2e91156540a55c164fe9806&objectID=5577&indexName=bazaar_retailer_products)|[¡CÓMPRALO AHORA!](https://www.seeedstudio.com/Raspberry-Pi-Camera-3-NoIR-p-5575.html?queryID=580ed0215d20c7d125b592090e007ba6&objectID=5575&indexName=bazaar_retailer_products)|[¡CÓMPRALO AHORA!](https://www.seeedstudio.com/Raspberry-Pi-Camera-3-Wide-p-5576.html?queryID=b165ed9d2e2ff82f45003dbb7c921182&objectID=5576&indexName=bazaar_retailer_products)|

Todas las versiones de PiCam se conectan a la Raspberry Pi mediante la interfaz MIPI CSI-2, ofreciendo una conexión directa y de alta velocidad para transmitir datos de imagen y video.

La PiCam ofrece una gama de funciones y capacidades adecuadas para varias aplicaciones, como fotografía, videografía, proyectos de visión por computadora, vigilancia y mucho más. Gracias a su pequeño tamaño y fácil integración con Raspberry Pi, es una opción popular entre aficionados, makers y profesionales.

Ten en cuenta que las especificaciones mencionadas son para los módulos PiCam estándar; puede haber variaciones o módulos de cámara alternativos ofrecidos por fabricantes de terceros.

Al instalar la PiCam, tienes dos opciones. La primera es usar imágenes precompiladas proporcionadas por Seeed Studio (disponibles en nuestra wiki). Estas imágenes están configuradas específicamente para la PiCam, garantizando compatibilidad y facilidad de uso. Sin embargo, estas imágenes **solo funcionan con PiCam v1 (sensor OmniVision OV5647)**.

Como alternativa, puedes instalar la última versión de Raspberry Pi OS desde el sitio oficial, con acceso a las funciones más recientes. Seeed Studio recomienda este enfoque y ofrece instrucciones en nuestra wiki para instalar los drivers necesarios y componentes relacionados para asegurar el correcto funcionamiento de PiCam en una instalación fresca de Raspberry Pi OS.

## Usar imágenes precompiladas de Raspberry Pi

Para instalar PiCam en el reTerminal de Seeed Studio, puedes usar imágenes precompiladas de Seeed Studio disponibles en nuestro wiki, diseñadas específicamente para reTerminal.

:::note
Ten en cuenta que actualmente las imágenes precompiladas **solo soportan PiCam v1** (sensor OmniVision OV5647). Esto significa que puedes capturar imágenes o videos usando el comando `raspistill`.
:::

- **Paso 1**: Visita la página wiki de Seeed Studio dedicada a reTerminal y busca la sección con imágenes precompiladas (puedes consultar este [enlace](https://wiki.seeedstudio.com/reTerminal-FAQ/#q2-how-can-i-flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal) para obtener imágenes y procedimiento de instalación). Si ya lo hiciste, ignora este paso.
- **Paso 2**: Apaga el reTerminal y conecta el módulo PiCam v1 a la interfaz de cámara en el reTerminal. Asegúrate de que quede bien sujeto.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/reterminal_inside.png" alt="pir" width="600" height="auto"/></p>

- **Paso 3**: Vuelve a armar el reTerminal y enciéndelo. Ve al ícono de reTerminal (en el escritorio) para habilitar la cámara y reinicia.

- **Paso 4**: Abre una terminal o SSH en el reTerminal.
- **Paso 5**: Usa el comando `raspistill` para capturar imágenes. (Visita [este enlace](https://projects.raspberrypi.org/en/projects/getting-started-with-picamera/3) para más comandos)

```sh
raspistill -o Desktop/image.jpg
```

## Para una instalación fresca de Raspberry Pi OS

Recomendamos Raspberry Pi OS Bullseye 64-bit del sitio oficial de Raspberry Pi para reTerminal de Seeed Studio:

- **Paso 1**: Seeed Studio provee instrucciones detalladas sobre cómo instalar drivers tras flashear un nuevo Raspberry Pi OS u otro OS. Revisa la wiki de reTerminal y sigue las secciones ["Flash new Raspberry Pi OS"](https://wiki.seeedstudio.com/reTerminal#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc) y ["Cómo instalar drivers de reTerminal"](https://wiki.seeedstudio.com/reTerminal/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os). Si ya lo hiciste, ignora.

- **Paso 2**: Apaga el reTerminal y conecta el módulo PiCam a la interfaz de cámara. Asegúrate de que quede firme.

- **Paso 3**: Abre una terminal o SSH en tu reTerminal y edita config.txt:

```sh
sudo nano /boot/config.txt
```

- **Paso 4**: Dentro de config.txt, haz lo siguiente:

  - Localiza `camera_auto_detect=1` y coméntalo con `#`. Así desactivamos la auto-detección del módulo.

  - Añade:
    
    ```
    dtoverlay=ov5647,cam0
    dtoverlay=camera-mux-2port
    ```

    :::note
    Si usas PiCam v3 NoIR wide en vez de PiCam v1, usa **dtoverlay=imx708,cam0** en lugar de **dtoverlay=ov5647,cam0**. La configuración dtoverlay especifica el módulo de cámara y el multiplexor.
    :::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/muxcam.PNG" alt="pir" width="600" height="auto"/></p>

- **Paso 5**: Guarda los cambios (Ctrl + X, Y, Enter) y reinicia:

```sh
sudo reboot
```

Tras el reinicio, PiCam estará lista para usarse con reTerminal. Ya puedes capturar imágenes o grabar videos con **libcamera**.

- **Paso 6**: Abre terminal y prueba:

```sh
sudo libcamera-hello
```

`libcamera-hello` es el "hola mundo" de la cámara; inicia la cámara, muestra la ventana de previsualización, y nada más.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/imx708.PNG" alt="pir" width="600" height="auto"/></p>

Para más detalles, consulta la [documentación de libcamera](https://www.raspberrypi.com/documentation/computers/camera_software.html).