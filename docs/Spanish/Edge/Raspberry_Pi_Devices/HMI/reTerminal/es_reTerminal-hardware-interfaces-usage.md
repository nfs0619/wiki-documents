---
description: Uso de Hardware e Interfaces
title: Uso de Hardware e Interfaces
keywords:
  - Edge
  - reTerminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal-hardware-interfaces-usage
last_update:
  date: 04/03/2025
  author: Erick González
---

# Uso de Hardware e Interfaces

Este wiki introduce los distintos componentes de hardware e interfaces en el reTerminal y cómo utilizarlos para expandir tus ideas de proyecto.

**Nota:** Para cierto hardware e interfaces, las instrucciones de uso varían entre la imagen de Raspberry Pi OS, la [imagen Buildroot](https://wiki.seeedstudio.com/reTerminal-Buildroot-SDK) y la [imagen Yocto](https://wiki.seeedstudio.com/reTerminal-Yocto). Por defecto se describen los pasos para Raspberry Pi OS. Cuando difiera en Buildroot o Yocto, se indicará explícitamente.

## Visión General de Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/HW_overview.png" alt="pir" width="1000" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/hw-overview-internal-v1.3.jpg" alt="pir" width="1000" height="auto"/></p>

## Pines de 40 pines compatibles con Raspberry Pi

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/pinout-v2.jpg" alt="pir" width="1000" height="auto"/></p>

Los **40 pines** constan de **26 GPIO**, hasta **5 × I2C**, hasta **5 × SPI**, hasta **5 × UART**, **1 x PCM**, **1 x PWM**, **1 × interfaz SDIO**, **1 × DPI (Parallel RGB Display)**, hasta **3× GPCLK outputs** y **1 interfaz USB**.

La **interfaz USB** se extiende desde la **interfaz USB 2.0 interna** del Compute Module 4, lo que permite expandir más conectores USB y lograr velocidades de hasta **480 Mbit/s** usando esta interfaz.

También puedes usar estos 40 pines para conectar **Hats compatibles con Raspberry Pi** y expandir tus proyectos.

[Visita aquí](https://www.seeedstudio.com/hats-shields-c-840.html) para explorar varias Hats de Raspberry Pi que ofrece Seeed Studio y [aquí](https://uk.pi-supply.com/collections/all-raspberry-pi-hats-and-phats) para más Hats de terceros.

Los GPIO pueden consumir una corriente máxima de **50 mA** en total. Esto significa 50 mA distribuidos entre todos los pines. Por lo tanto, cada pin GPIO individual puede consumir **16 mA** de forma segura. En cambio, el consumo máximo para cada uno de los pines restantes es **2 A**. Tenlo en cuenta al conectar hardware adicional.

### Esquemático

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/40-pin_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/ReTerminal/40-pin_sch.jpg) para una imagen de mayor resolución.

### Uso - GPIO

1. **Configurar pin como GPIO**

```sh
sudo -i   #habilita privilegios de root
cd /sys/class/gpio
echo 23 > export #GPIO23 es el Pin 16
cd gpio23
```

2. **Configurar GPIO como entrada/salida**

```sh
echo in > direction  #GPIO como entrada
echo out > direction  #GPIO como salida
```

3. **Configurar GPIO en nivel alto/bajo**

```sh
echo 1 > value  #GPIO nivel alto
echo 0 > value  #GPIO nivel bajo
```

4. **Obtener estado de entrada/salida**

```sh
cat direction
```

5. **Obtener estado de nivel**

```sh
cat value
```

6. **Reiniciar pin**

```sh
cd ..
echo 23 > unexport
```

#### Uso en imagen Buildroot

- Reemplaza **sudo -i** con **su -** para privilegios root.
- Los demás pasos son iguales.

#### Uso en imagen Yocto

- No hace falta **sudo -i** pues ya somos **root**.
- Pasos restantes son iguales.

### Uso - I2C

1. Enciende reTerminal, clic en el ícono de Raspberry Pi en la UI Desktop => `Preferences > Raspberry Pi Configuration`.

2. Clic en la pestaña `Interfaces` y habilita **I2C**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/i2c-enable-1.png" alt="pir" width="1000" height="auto"/></p>

3. Clic en **OK**.

4. Conecta un dispositivo I2C al reTerminal.

5. Lista los buses I2C:

```sh
i2cdetect -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/i2cdetect-l.png" alt="pir" width="750" height="auto"/></p>

6. Escanea direcciones estándar en bus I2C 1 (i2c-1):

```sh
i2cdetect -y 1
```

**Nota**: el `1` representa el número de bus I2C.

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/i2c-detect-2.png" alt="pir" width="600" height="auto"/></p>

La imagen anterior muestra dispositivos I2C con direcciones 0x20, 0x51, 0x45, 0x19, 0x29 y 0x5c.

#### Uso en Buildroot

- No necesitas activar I2C, viene habilitado por defecto.
- Los pasos restantes son iguales.

#### Uso en Yocto

- I2C no se activa al encender. Solo funciona con **modprobe i2c-dev** tras cada arranque. Se actualizará cuando se corrija.

### Uso - SPI

1. Enciende reTerminal, clic ícono Raspberry Pi => `Preferences > Raspberry Pi Configuration`.

2. Pestaña `Interfaces`, habilita **SPI**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/spi-enable-1.png" alt="pir" width="1000" height="auto"/></p>

3. Conecta un dispositivo SPI al reTerminal.

4. Lista dispositivos SPI:

```sh
ls /dev/spi*
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/spi_list.png" alt="pir" width="450" height="auto"/></p>

5. Descarga herramienta de prueba SPI:

```sh
wget https://files.seeedstudio.com/wiki/102110497/spidev_test
```

6. Cambia permisos:

```sh
chmod +x spidev_test
```

7. Con un jumper, cortocircuita **GPIO 10 (Pin 19)** y **GPIO 9 (Pin 21)** (MOSI y MISO).

8. Ejecuta la herramienta:

```sh
./spidev_test -D /dev/spidev0.0 -v -p hello
```

Si ves salida similar a la imagen, SPI funciona correctamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SPI_test.jpg" alt="pir" width="1000" height="auto"/></p>

#### Uso en Buildroot/ Yocto

- Para activar SPI, edita **config.txt** con `vi /boot/config.txt`, añade `dtparam=spi=on`, guarda y reinicia.
- La herramienta **spidev_test** presenta problemas en Buildroot/Yocto. Se actualizará.

## Interfaz de Alta Velocidad para Módulos de Expansión

En la parte trasera del reTerminal hay un conector de expansión de alta velocidad. Consta de 1 PCIe 1-lane Host Gen 2 (hasta 5Gbps), 1 USB 2.0, 1 PoE y 26 GPIO. Estos 26 GPIO pueden usarse como 2 I2C, 2 SPI y 1 UART.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Expansion_Schematic.png" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Clic [aquí](https://files.seeedstudio.com/wiki/ReTerminal/Expansion_Schematic.png) para imagen de mayor resolución.

:::note
PCIe, USB 3.0, 2 x CAN-FD y SDIO3.0 están definidos para productos futuros, por lo que no son utilizables actualmente.
:::

Planeamos módulos de expansión futuros para reTerminal, usando este conector:

- Matriz de micrófonos y altavoz
- Módulo de cámara
- E/S industriales
- Módulo LoRaWAN
- Módulo 5G/4G
- Módulo PoE
- Switch Ethernet

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/external_modules.png" alt="pir" width="750" height="auto"/></p>

Hay 2 orificios M4 a los lados del reTerminal para fijar estos módulos.

## Interfaz de cámara CSI

El reTerminal tiene una interfaz de cámara MIPI CSI de 2 carriles, lo que permite conectar hasta 2 cámaras: uno con **15 pines** y otro con **22 pines**. Asegúrate de usar el cable flex adecuado. Estas interfaces sirven para detección de objetos y machine learning.

### Esquemático

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/CSI_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Clic [aquí](https://files.seeedstudio.com/wiki/ReTerminal/CSI_sch.jpg) para mayor resolución.

#### Uso

1. Conecta cámara al conector **FPC de 15 pines** o **22 pines**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FPC-label-1.jpg" alt="pir" width="800" height="auto"/></p>

2. Enciende reTerminal, clic en ícono Raspberry Pi => `Preferences > Raspberry Pi Configuration`.

3. Pestaña `Interfaces`, habilita **Camera**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Cam-enable.jpg" alt="pir" width="1000" height="auto"/></p>

4. Clic en **Yes** para reiniciar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/cam-reboot.jpg" alt="pir" width="1000" height="auto"/></p>

5. Abre terminal y toma una foto:

```sh
raspistill -o Desktop/image.jpg
```

**Nota:** Cambia la ubicación según prefieras.

6. Haz doble clic en el archivo de Desktop para ver la imagen.

7. Graba un video:

```sh
raspivid -o Desktop/video.h264
```

8. Reproduce el video haciendo doble clic.

Más info en [documentación oficial de Raspberry Pi](https://projects.raspberrypi.org/en/projects/getting-started-with-picamera/3).

#### Uso en Buildroot/ Yocto

- No probado aún, se actualizará.

## LCD de 5 pulgadas

La pantalla LCD de 5" en reTerminal se conecta vía **DSI de 30 pines**. Soporta **táctil multipunto (5 puntos)**, conectada al **conector TP**.

### Esquemático

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/LCD_sch.png" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Clic [aquí](https://files.seeedstudio.com/wiki/ReTerminal/LCD_sch.png) para mayor resolución.

## Panel Táctil para LCD

### Uso

El panel táctil se conecta vía un conector FPC de **6 pines**. Para probarlo, usa **evtest**:

1. Instala evtest:

```sh
sudo apt install evtest
```

2. Ejecuta evtest:

```sh
evtest
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/evtest-1.png" alt="pir" width="680" height="auto"/></p>

3. Teclea **1**, verás salida:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/tp-1.png" alt="pir" width="720" height="auto"/></p>

4. Toca la pantalla y verás:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/tp-2.png" alt="pir" width="850" height="auto"/></p>

#### Uso en Buildroot

- **evtest** ya está instalado.
- Primero haz **su -** para root.
- Demás pasos igual.

#### Uso en Yocto

- **evtest** ya instalado.
- Pasos igual.

### Conectar otros dispositivos a conector FPC vía I2C

El panel táctil se comunica por I2C. Puedes conectar otros dispositivos I2C a este conector FPC de 6 pines. El diagrama:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FPC-I2C-connection.png" alt="pir" width="900" height="auto"/></p>

Luego sigue los pasos de la sección I2C.

## 4 Botones Programables

Hay 4 botones programables en la parte frontal de reTerminal. Pueden asignarse para encender/apagar distintas funciones según tu aplicación.

### Esquemático

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/keys_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Clic [aquí](https://files.seeedstudio.com/wiki/ReTerminal/keys_sch.jpg) para mayor resolución.

### Uso

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/key-label.jpg" alt="pir" width="500" height="auto"/></p>

1. Abre evtest:

```sh
evtest
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/evtest.png" alt="pir" width="680" height="auto"/></p>

2. Teclea **0** y verás:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/button-test.jpg" alt="pir" width="680" height="auto"/></p>

3. Pulsa los botones de izquierda a derecha y verás:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/button-test-result.png" alt="pir" width="800" height="auto"/></p>

**Nota:** Los botones se configuran como **a s d f** de izquierda a derecha por defecto.

4. Para configurar, edita:

```sh
sudo nano /boot/config.txt
```

5. Añade al final:

```sh
dtoverlay=reTerminal,key0=0x100,key1=0x101,key2=0x102,key3=0x103,tp_rotate=1
```

Los valores hexadecimales 100,101,102 y 103 se asignan a key0, key1, key2, key3.

#### Uso en Buildroot

- **evtest** ya instalado.
- Primero **su -**.
- Demás pasos igual.

#### Uso en Yocto

- **evtest** ya instalado.
- Pasos igual.

## 3 LEDs Programables

Hay 2 LED programables en la parte frontal del reTerminal. El LED **USR** en color **verde**, el LED **STA** en color **rojo** o **verde**.

### Esquemático

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/LEDs_sch.jpg" alt="pir" width="700" height="auto"/></p>

**Consejo:** Clic [aquí](https://files.seeedstudio.com/wiki/ReTerminal/LEDs_sch.jpg) para mayor resolución.

### Uso

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/led-label.jpg" alt="pir" width="550" height="auto"/></p>

1. Hazte root:

```sh
sudo -i
```

2. Ve a:

```sh
cd /sys/class/leds
```

3. Dirígete a LED **USR Verde**:

```sh
cd usr_led0
```

4. Enciende LED al brillo máximo:

```sh
echo 255 > brightness
```

**Nota:** valores 1-255 para brillo.

5. Apaga LED:

```sh
echo 0 > brightness
```

6. LED **STA Rojo**:

```sh
cd ..
cd usr_led1
```

7. Repite pasos 4-5.

8. LED **STA Verde**:

```sh
cd ..
cd usr_led2
```

9. Repite pasos 4-5.

#### Buildroot

- Cambia **sudo -i** por **su -**.
- Pasos iguales.

#### Yocto

- No hace falta **sudo -i** (ya somos root).
- Pasos iguales.

## Puerto Gigabit Ethernet

reTerminal posee un conector Ethernet RJ45 Gigabit, conectado al PHY Gigabit del CM4 (Broadcom BCM54210PE), compatible con **IEEE 1588-2008**.

### Esquemático

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ethernet_sch.png" alt="pir" width="900" height="auto"/></p>

**Consejo:** Clic [aquí](https://files.seeedstudio.com/wiki/ReTerminal/Ethernet_sch.png) para mayor resolución.

## Co-procesador de Encriptación

reTerminal incluye un co-procesador criptográfico **Microchip ATECC608A** con almacenamiento seguro de claves en hardware. Soporta ECDSA y algoritmos simétricos, networking key management y secure boot.

### Esquemático

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Encrypt_sch.jpg" alt="pir" width="800" height="auto"/></p>

**Consejo:** Clic [aquí](https://files.seeedstudio.com/wiki/ReTerminal/Encrypt_sch.jpg) para mayor resolución.

### Uso

1. Lista buses I2C:

```sh
i2cdetect -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/i2cdetect-l.png" alt="pir" width="750" height="auto"/></p>

2. Escanea direcciones en I2C-3:

```sh
i2cdetect -y 3
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/i2cdetect-y3.png" alt="pir" width="530" height="auto"/></p>

El dispositivo con dirección **0x60** es el co-procesador.

#### Buildroot

- Funciona igual.

#### Yocto

- I2C no activado al arrancar. Necesita **modprobe i2c-dev** tras cada reinicio.

## RTC

El reTerminal trae un RTC **NXP PCF8563T** con pila **CR1220**. Bajo consumo de respaldo ~0.25µA. Útil para funciones de hora.

**Nota:** Una pila CR1220 viene preinstalada.

### Esquemático

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/RTC_sch.jpg" alt="pir" width="800" height="auto"/></p>

**Consejo:** Clic [aquí](https://files.seeedstudio.com/wiki/ReTerminal/RTC_sch.jpg) para mayor resolución.

### Uso

```sh
sudo hwclock
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/hwclock.png" alt="pir" width="370" height="auto"/></p>

#### Buildroot

- Escribe **su -** y luego **hwclock**.

#### Yocto

- No hace falta sudo.
- Solo **hwclock**.

## Sensor de Luz

reTerminal incluye un sensor digital de luz **Levelek LTR-303ALS-01**, conectado al conector FPC de 6 pines. Útil para ajuste automático de brillo LCD según luz ambiente.

### Esquemático

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/light_sch.jpg" alt="pir" width="700" height="auto"/></p>

**Consejo:** Clic [aquí](https://files.seeedstudio.com/wiki/ReTerminal/light_sch.jpg) para mayor resolución.

### Uso

1. root:

```sh
sudo -i
```

2. Ve a:

```sh
cd /sys/bus/iio/devices/iio:device0
```

3. Lee intensidad lumínica en **Lux**:

```sh
cat in_illuminance_input
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/light-lux.png" alt="pir" width="900" height="auto"/></p>

El sensor se comunica vía I2C. Puedes conectar otros dispositivos I2C al mismo conector FPC:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/light-i2c.png" alt="pir" width="1000" height="auto"/></p>

Luego sigue pasos de I2C.

#### Buildroot

- Cambia **sudo -i** por **su -**.
- Pasos restantes igual.

#### Yocto

- No hace falta sudo.
- Pasos iguales.

## Acelerómetro

Un acelerómetro **ST LIS3DHTR** de 3 ejes. Se puede usar, por ejemplo, para rotar la pantalla automáticamente al inclinar reTerminal.

### Esquemático

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/accel_sch.jpg" alt="pir" width="600" height="auto"/></p>

**Consejo:** [aquí](https://files.seeedstudio.com/wiki/ReTerminal/accel_sch.jpg) para mayor resolución.

### Uso

1. `evtest`

```sh
evtest
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/evtest.png" alt="pir" width="680" height="auto"/></p>

2. Teclea **1** para ver valores X,Y,Z.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/accel-test.png" alt="pir" width="700" height="auto"/></p>

#### Buildroot

- evtest ya instalado.
- Primero **su -**.
- Resto igual.

#### Yocto

- evtest ya instalado.
- Igual.

## Buzzer

Incluye un buzzer integrado controlable via software. Útil como indicador.

### Esquemático

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buzzer_sch.jpg" alt="pir" width="500" height="auto"/></p>

**Consejo:** [aquí](https://files.seeedstudio.com/wiki/ReTerminal/buzzer_sch.jpg) para mayor resolución.

### Uso

1. root:

```sh
sudo -i
```

2. Ve a:

```sh
cd /sys/class/leds/usr_buzzer
```

3. Enciende buzzer:

```sh
echo 1 > brightness
```

4. Apaga buzzer:

```sh
echo 0 > brightness
```

#### Buildroot

- Reemplaza **sudo -i** con **su -**.
- Igual.

#### Yocto

- No sudo.
- Igual.

## Puertos USB 2.0

El CM4 trae un hub USB 2.0 integrado. Se extiende a **2 puertos USB 2.0** como **USB HOST**.

### Esquemático

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/USB_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**Consejo:** [aquí](https://files.seeedstudio.com/wiki/ReTerminal/USB_sch.jpg) para alta resolución.

### Uso

1. Conecta un dispositivo USB a uno de los puertos del reTerminal.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/USB-port.jpg" alt="pir" width="130" height="auto"/></p>

2. Lista el dispositivo:

```sh
lsusb
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/USB-connected.png" alt="pir" width="850" height="auto"/></p>

3. Más info:

```sh
lsblk
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/USB-mount.png" alt="pir" width="680" height="auto"/></p>

4. Accede a la unidad y lista archivos:

```sh
cd /media/pi/NEW VOLUME
ls -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/USB-access.png" alt="pir" width="730" height="auto"/></p>

**Nota:** El punto de montaje varía.

## Ranura Micro-SD

reTerminal tiene ranura micro-SD, útil para instalar SO en micro-SD con CM4 sin eMMC. Se recomienda al menos 8GB. [Más info aquí](https://wiki.seeedstudio.com/reTerminal/#flash-to-micro-sd-card-cm4-non-emmc-version).

### Esquemático

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/SD_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**Consejo:** [aquí](https://files.seeedstudio.com/wiki/ReTerminal/SD_sch.jpg) para alta resolución.

## Puerto Micro HDMI

reTerminal ofrece micro HDMI, compatible con displays HDMI vía cable micro-HDMI a HDMI. Hasta 4K@60fps.

### Esquemático

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/HDMI_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**Consejo:** [aquí](https://files.seeedstudio.com/wiki/ReTerminal/HDMI_sch.jpg) para alta resolución.

### Uso

1. Conecta una pantalla HDMI al puerto micro-HDMI con el cable respectivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/HDMI-port.jpg" alt="pir" width="130" height="auto"/></p>

2. Enciende reTerminal y verás UI en LCD y pantalla HDMI.

**Nota:** Si conectas la pantalla mientras está encendido, ejecuta **sudo service lightdm restart** para mostrar la UI.

3. Instala la utilidad Screen Configuration:

```sh
sudo apt install arandr
```

4. Clic en ícono Raspberry Pi => `Preferences > Screen Configuration`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/screen-config-setup.png" alt="pir" width="1000" height="auto"/></p>

5. Pestaña "Screen Layout Editor" => `Configure > Screens > HDMI-1 > Resolution` para ajustar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/screen-drag.png" alt="pir" width="1000" height="auto"/></p>

**Nota:** también cambias frecuencia y orientación.

6. Arrastra los dos recuadros para organizar monitores.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/screen-setting.png" alt="pir" width="1000" height="auto"/></p>

7. Clic en la marca de verificación para aplicar ajustes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/screen-apply.png" alt="pir" width="1000" height="auto"/></p>

#### Buildroot/ Yocto

- El hot-plug no funciona actualmente. Actualizaremos.
- Necesitas conectar primero el display y luego encender reTerminal.
- **arandr** no disponible en Buildroot.

## Puerto USB Tipo-C

El **Puerto USB-C** se usa para **alimentar reTerminal con 5V/4A** (recomendado). Pero también puede actuar como **USB Device** para conectar reTerminal a un **PC HOST** y acceder a la **eMMC** interna, flashear un SO, etc. [Más info aquí](https://wiki.seeedstudio.com/reTerminal/#flash-to-emmc-cm4-emmc-version).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/type-c.png" alt="pir" width="130" height="auto"/></p>

## Montura de cámara estándar (1/4 pulgada)

reTerminal tiene una montura de cámara estándar de **1/4 pulgada**. Puedes montar el reTerminal en un trípode estándar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/tripod.png" alt="pir" width="450" height="auto"/></p>

## Librería Python para reTerminal

Hemos preparado una **librería Python** para usar el hardware incorporado del reTerminal. Actualmente soporta **acelerómetro, LEDs de usuario, botones de usuario y buzzer**.

### Instalación

En reTerminal, ejecuta:

```sh
sudo pip3 install seeed-python-reterminal
```

**Nota:** El código fuente [aquí](https://github.com/Seeed-Studio/Seeed_Python_ReTerminal).

### Uso

1. Crea un archivo Python nuevo y ábrelo con nano:

```sh
nano test.py
```

2. Pega el código.
3. Pulsa **CTRL + X**, luego **Y** para guardar.
4. Ejecuta:

```sh
python3 test.py
```

A continuación, ejemplos de códigos:

#### Test de LEDs de Usuario

```python
import seeed_python_reterminal.core as rt
import time

print("STA ON, USR OFF")
rt.sta_led = True
rt.usr_led = False
time.sleep(1)

print("STA OFF, USR ON")
rt.sta_led = False
rt.usr_led = True
time.sleep(1)

print("STA RED, USR OFF")
rt.sta_led_green = False
rt.sta_led_red = True
rt.usr_led = False
time.sleep(1)

print("STA OFF, USR OFF")
rt.sta_led = False
rt.usr_led = False
```

#### Test Buzzer

```python
import seeed_python_reterminal.core as rt
import time

print("BUZZER ON")
rt.buzzer = True
time.sleep(1)

print("BUZZER OFF")
rt.buzzer = False
```

#### Test Botones de Usuario

```python
import seeed_python_reterminal.core as rt
import seeed_python_reterminal.button as rt_btn


device = rt.get_button_device()
while True:
    for event in device.read_loop():
        buttonEvent = rt_btn.ButtonEvent(event)
        if buttonEvent.name != None:
            print(f"name={str(buttonEvent.name)} value={buttonEvent.value}")
```

#### Test Acelerómetro

```python
import seeed_python_reterminal.core as rt
import seeed_python_reterminal.acceleration as rt_accel


device = rt.get_acceleration_device()
while True:
    for event in device.read_loop():
        accelEvent = rt_accel.AccelerationEvent(event)
        if accelEvent.name != None:
            print(f"name={str(accelEvent.name)} value={accelEvent.value}")
```

#### Test Acelerómetro + Botones

```python
import asyncio
import seeed_python_reterminal.core as rt
import seeed_python_reterminal.acceleration as rt_accel
import seeed_python_reterminal.button as rt_btn


async def accel_coroutine(device):
    async for event in device.async_read_loop():
        accelEvent = rt_accel.AccelerationEvent(event)
        if accelEvent.name != None:
            print(f"accel name={str(accelEvent.name)} value={accelEvent.value}")


async def btn_coroutine(device):
    async for event in device.async_read_loop():
        buttonEvent = rt_btn.ButtonEvent(event)
        if buttonEvent.name != None:
            print(f"name={str(buttonEvent.name)} value={buttonEvent.value}")


accel_device = rt.get_acceleration_device()
btn_device = rt.get_button_device()

asyncio.ensure_future(accel_coroutine(accel_device))
asyncio.ensure_future(btn_coroutine(btn_device))

loop = asyncio.get_event_loop()
loop.run_forever()
```

#### Buildroot

- Esta librería se añadirá más adelante al Buildroot.
- Primero "su -" para root.
- `pip3 install seeed-python-reterminal`.
- Usa **vi** en lugar de nano.
- El demo accel+button presenta problemas. Se actualizará.

#### Yocto

- Aunque Python está instalado, pip no lo está. Luego incluiremos esta librería en la imagen.

## Soporte técnico y debate de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte y asegurar que tu experiencia sea fluida. Ofrecemos varios canales de comunicación para diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>