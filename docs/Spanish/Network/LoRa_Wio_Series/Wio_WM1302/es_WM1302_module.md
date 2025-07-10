---
description: Getting Started with LoRaWAN® Gateway Module WM1302.
title: Módulo WM1302 Gateway LoRaWAN®  
keywords:
  - wio 
  - docusaurus
image: https://files.seeedstudio.com/wiki/WM1302_module/WM1302_3.webp
slug: /es/WM1302_module
last_update:
  date: 05/23/2025
  author: Guillermo
---

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/WM1302_3.jpeg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_3.jpeg" alt="pir" width={600} height="auto" /></p>

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html)
> LoRaWAN® es una marca utilizada bajo licencia de la LoRa Alliance®.
La marca LoRa® es una marca registrada de Semtech Corporation o sus subsidiarias.

:::note
Recientemente hemos lanzado la serie Wio-E5 basada en el módulo Wio-E5.

Haz clic [aquí](https://www.seeedstudio.com/lora-c-755.html?product_list_stock=3) para conocer a los nuevos miembros de la familia LoRa-E5, desde el [módulo Wio-E5](https://wiki.seeedstudio.com/LoRa-E5_STM32WLE5JC_Module/), [módulo Grove](https://wiki.seeedstudio.com/Grove_LoRa_E5_New_Version/), [mini placas de desarrollo](https://wiki.seeedstudio.com/LoRa_E5_mini/) hasta el [Kit de Desarrollo](https://wiki.seeedstudio.com/LoRa_E5_Dev_Board/).

Para saber más sobre cómo crear un nodo final LoRaWAN® usando el paquete STM32Cube MCU para la serie STM32WL (SDK), unirse y enviar datos a la red LoRaWAN®, consulta las páginas wiki de las [mini placas de desarrollo](https://wiki.seeedstudio.com/LoRa_E5_mini/) y el [Kit de Desarrollo](https://wiki.seeedstudio.com/LoRa_E5_Dev_Board/).
:::

El módulo WM1302 es una nueva generación de módulo gateway LoRaWAN® con factor de forma mini-PCIe. Basado en el chip de banda base Semtech® SX1302, WM1302 desbloquea un mayor potencial de transmisión inalámbrica de largo alcance para productos gateway. Presenta mayor sensibilidad, menor consumo de energía y menor temperatura de operación que los chips anteriores SX1301 y SX1308.

El módulo gateway LoRaWAN® WM1302 cuenta con versiones SPI y USB para las bandas de frecuencia US915 y EU868, lo que te permite elegir entre una amplia gama de planes de frecuencia LoRaWAN®, incluyendo EU868, US915, AS923, AS920, AU915, KR920 e IN865.

El módulo WM1302 cuenta con certificaciones CE, FCC y Telec, lo que ayuda a simplificar el desarrollo y proceso de certificación de dispositivos gateway LoRaWAN®.

WM1302 está diseñado para aplicaciones M2M e IoT, y puede aplicarse ampliamente en escenarios compatibles con gateway LPWAN. Es una opción ideal para reducir significativamente las dificultades técnicas y el tiempo de desarrollo al crear dispositivos gateway LoRa®, incluyendo gateways LoRaWAN®, hotspots, etc.

## Características

- **Impulsado por el chip de banda base Semtech® SX1302 LoRa®**, con consumo de energía extremadamente bajo y alto rendimiento.
- **Factor de forma mini-PCIe con conector estándar de 52 pines**, fácil de integrar con diversos dispositivos gateway.
- **Temperatura de operación ultra baja**, no requiere disipación de calor adicional, reduciendo el tamaño del gateway LoRaWAN®.
- **Alta sensibilidad**, hasta -139 dBm @SF12 con el front-end SX1250 TX/RX; potencia de transmisión hasta 26 dBm @3.3V.
- **Certificado con CE, FCC y TELEC**, lo que simplifica el proceso de certificación del producto final.

## Visión General del Hardware

### Diagrama

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/diagram.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/diagram.jpg" alt="pir" width={600} height="auto" /></p>

### Pinout

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/WM1302_1.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_1.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_2.jpeg" alt="pir" width={600} height="auto" /></p>

## Especificaciones

<table class="tg">
<thead>
<tr><th class="tg-4onr">Región</th><th class="tg-ev79">EU868</th><th class="tg-ev79">US915</th></tr>
</thead>
<tbody>
  <tr>
    <td class="tg-4onr">Frecuencia</td>
    <td class="tg-f42p">863-870MHz</td>
    <td class="tg-f42p">902-928MHz</td>
  </tr>
  <tr>
    <td class="tg-4onr">Sensitividad</td>
    <td class="tg-f42p">-125dBm @125K/SF7<br />-139dBm @125K/SF12</td>
    <td class="tg-f42p">-125dBm @125K/SF7<br />-139dBm @125K/SF12</td>
  </tr>
  <tr>
    <td class="tg-4onr">Poder TX</td>
    <td class="tg-f42p">26 dBm (with 3.3V power supply)</td>
    <td class="tg-f42p">25 dBm (with 3.3V power supply)</td>
  </tr>
  <tr>
    <td class="tg-4onr">LEDs</td>
    <td class="tg-f42p" colspan="2">Power: Green Config: Red TX: Green RX: Blue</td>
  </tr>
  <tr>
    <td class="tg-4onr">Form Factor</td>
    <td class="tg-f42p" colspan="2">Mini PCIe, 52pin Golden Finger</td>
  </tr>
  <tr>
    <td class="tg-4onr">Consumo energético (Versión SPI)</td>
    <td class="tg-f42p" colspan="2">Reposo: 7.5 mA<br />TX al máximo: 415 mA<br />RX: 40 mA</td>
  </tr>
  <tr>
    <td class="tg-4onr">Consumo energético (Versión USB)</td>
    <td class="tg-f42p" colspan="2">Reposo: 20 mA<br />TX al máximo: 425 mA<br />RX: 53 mA</td>
  </tr>
  <tr>
    <td class="tg-4onr">LBT(Listen Before Talk)</td>
    <td class="tg-f42p" colspan="2">Soportado</td>
  </tr>
  <tr>
    <td class="tg-4onr">Conector de Antena</td>
    <td class="tg-f42p" colspan="2">U.FL</td>
  </tr>
  <tr>
    <td class="tg-4onr">Temperatura Operativa</td>
    <td class="tg-f42p" colspan="2">-40°C a 85°C</td>
  </tr>
  <tr>
    <td class="tg-4onr">Dimensiones</td>
    <td class="tg-f42p" colspan="2">30 mm (ancho) × 50.95 mm (largo)</td>
  </tr>
  <tr>
    <td class="tg-4onr">Certificación</td>
    <td class="tg-f42p" colspan="2">CE</td>
  </tr>
</tbody>
</table>

## Applicación

- Desarrollo de dispositivos gateway LPWAN

- Desarrollo de cualquier aplicación de comunicación inalámbrica de largo alcance

- Aprendizaje e investigación en aplicaciones LoRa® y LoRaWAN®

## Dimensiones

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/WM1302_4.jpeg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_4.jpeg" alt="pir" width={600} height="auto" /></p>

## Primeros Pasos

### Diferencias entre la versión SPI y la versión USB

Para la versión SPI del Módulo Gateway LoRaWAN® WM1302, los chips Semtech SX1302 y SX126x están conectados a la Raspberry Pi mediante el mismo bus SPI pero con diferentes pines de selección de chip (CS).

Para la versión USB del Módulo Gateway LoRaWAN® WM1302, los chips Semtech SX1302 y SX126x están conectados a un microcontrolador STM32L4, y este MCU programado de fábrica funcionará como un dispositivo USB, actuando como un puente entre la Raspberry Pi y los chips SX1302/SX126x.

### Inicio Rápido con WM1302

#### Hardware Necesario

- Módulo Gateway LoRaWAN® WM1302

- Placas Raspberry Pi con encabezado GPIO de 40 pines (por ejemplo, Raspberry Pi 4B o Raspberry Pi 3B+)

- WM1302 Pi Hat para Raspberry Pi

- Adaptador de corriente para Raspberry Pi

- Una antena LoRa®

- Una tarjeta SD de 8 GB o más y un lector de tarjetas

- Un cable USB tipo C si se usa la versión USB del Módulo Gateway LoRaWAN® WM1302

#### Software Necesario

- [Última imagen de Raspberry Pi OS](https://www.raspberrypi.org/software/operating-systems/): Se recomienda Raspberry Pi OS Lite

- [Balena Etcher](https://www.balena.io/etcher/): Para grabar la imagen de Raspberry Pi OS en la tarjeta SD

- [Putty](https://www.putty.org/): Para conectarse a la Raspberry Pi vía SSH en Windows

#### Paso 1. Montar el Pi Hat de WM1302 en la Raspberry Pi e instalar el módulo WM1302

Es fácil montar el Pi Hat en el encabezado de 40 pines de la Raspberry Pi. Primero apaga la Raspberry Pi, inserta el módulo WM1302 en el Pi Hat como se muestra en la imagen siguiente y atorníllalo en su lugar.

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki1.jpg" alt="pir" width={600} height="auto" /></p>
Si se utiliza la versión USB del módulo WM1302, también se debe conectar su puerto Tipo C al puerto USB de la Raspberry Pi usando un cable USB Tipo C.

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki2.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki2.jpg" alt="pir" width={600} height="auto" /></p>

#### Paso 2. Habilitar la interfaz I2C y SPI en Raspbian

El módulo WM1302 se comunica con la Raspberry Pi mediante SPI e I2C. Sin embargo, estas dos interfaces no están habilitadas por defecto en Raspbian, por lo que el desarrollador debe habilitarlas antes de usar el WM1302. Aquí presentamos una forma mediante línea de comandos para habilitar las interfaces SPI e I2C.

Primero, inicia sesión en la Raspberry Pi vía SSH o usando un monitor (no uses la consola serie ya que el módulo GPS en el Pi Hat utiliza los pines UART de hardware de la Pi), luego escribe `sudo raspi-config` en la línea de comandos para abrir la herramienta de configuración de software de Raspberry Pi:

```shell
sudo raspi-config
```

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki3.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki3.png" alt="pir" width={600} height="auto" /></p>

1. Selecciona `Interface Options`

2. Selecciona `SPI`, luego elige `Yes` para habilitarlo.

3. Selecciona `I2C`, luego elige `Yes` para habilitarlo.

4. Selecciona `Serial Port`, luego elige `No` para "Would you like a login shell..." y selecciona `Yes` para "Would you like the serial port hardware...".

5. Después de esto, reinicia la Raspberry Pi para asegurarte de que estas configuraciones funcionen.

#### Paso 3. Obtener y compilar el código fuente de SX1302

Ahora instalemos `git` y descarguemos `sx1302_hal` (biblioteca y programas para el gateway LoRa SX1302) desde GitHub:

```shell
sudo apt update
sudo apt install -y git
cd ~
git clone https://github.com/Lora-net/sx1302_hal
```

Desplazate a la carpeta `sx1302_hal` y compila todo:

```shell
cd ~/sx1302_hal
make
```

#### Paso 4. Ejecutar el reenviador de paquetes Semtech SX1302

En el nuevo kernel de Linux, la **interfaz sysfs** ha sido reemplazada por la **interfaz chardev**.

Esto provoca que el script `reset_lgw.sh` proporcionado en el repositorio de sx1302 no reinicie correctamente el módulo y se muestren los siguientes registros:

```shell
...
./reset_lgw.sh: 26: echo: echo: I/O error
./reset_lgw.sh: 27: echo: echo: I/O error
./reset_lgw.sh: 28: echo: echo: I/O error
./reset_lgw.sh: 29: echo: echo: I/O error
./reset_lgw.sh: 32: cannot create /sys/class/gpio/gpio17/direction: Directory nonexistent
./reset_lgw.sh: 33: cannot create /sys/class/gpio/gpio5/direction: Directory nonexistent
./reset_lgw.sh: 34: cannot create /sys/class/gpio/gpio18/direction: Directory nonexistent
./reset_lgw.sh: 35: cannot create /sys/class/gpio/gpio13/direction: Directory nonexistent
CoreCell reset through GPIO17...
SX1261 reset through GPIO17...
CoreCell power enable through GPIO18...
CoreCell ADC reset through GPIO13...
./reset_lgw.sh: 45: cannot create /sys/class/gpio/gpio18/value: Directory nonexistent
./reset_lgw.sh: 47: cannot create /sys/class/gpio/gpio17/value: Directory nonexistent
./reset_lgw.sh: 48: cannot create /sys/class/gpio/gpio17/value: Directory nonexistent
./reset_lgw.sh: 50: cannot create /sys/class/gpio/gpio5/value: Directory nonexistent
./reset_lgw.sh: 51: cannot create /sys/class/gpio/gpio5/value: Directory nonexistent
./reset_lgw.sh: 53: cannot create /sys/class/gpio/gpio13/value: Directory nonexistent
./reset_lgw.sh: 54: cannot create /sys/class/gpio/gpio13/value: Directory nonexistent
...
```

Para determinar que el sistema en el que lo estas corriendo aun tenga la **interfaz sysfs**, puedes correr el siguiente comando:

```shell
ls /sys/class/gpio
```

:::

**Para Linux con interfaz sysfs:**

Si aparece una serie de carpetas `gpiox`, significa que el kernel de tu sistema aún tiene la **interfaz sysfs**, y puedes usar el script mencionado anteriormente para reiniciar el módulo.

Modifica el `pin de reinicio` para SX1302 y SX1261 en el script `reset_lgw.sh`, con el editor de texto `nano`:

```shell
nano tools/reset_lgw.sh
```

El siguiente código se muestra al inicio del editor de texto:

```shell
# GPIO mapping has to be adapted with HW
#

SX1302_RESET_PIN=23     # SX1302 reset
SX1302_POWER_EN_PIN=18  # SX1302 power enable
SX1261_RESET_PIN=22     # SX1261 reset (LBT / Spectral Scan)
AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

Usa las teclas de navegación para mover el cursor, cambia `SX1302_RESET_PIN=23` por `SX1302_RESET_PIN=17` y `SX1261_RESET_PIN=22` por `SX1261_RESET_PIN=5`, como se muestra a continuación:

```shell
# GPIO mapping has to be adapted with HW
#

SX1302_RESET_PIN=17     # SX1302 reset
SX1302_POWER_EN_PIN=18  # SX1302 power enable
SX1261_RESET_PIN=5      # SX1261 reset (LBT / Spectral Scan)
AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

Guarda estos cambios presionando `CTRL + x`, luego `y`, y finalmente `Enter` para cerrar el editor de texto.

**Para Linux sin interfaz sysfs:**

Si no hay ninguna carpeta llamada `gpiox`, entonces necesitas controlar los GPIO utilizando el paquete **Libgpiod**.

El script `reset_lgw.sh` para controlar los GPIO utilizando el paquete Libgpiod es el siguiente:

<details>
<summary>reset_lgw.sh</summary>

```shell
SX1302_RESET_PIN=17     # SX1302 reset
SX1302_POWER_EN_PIN=18  # SX1302 power enable
SX1261_RESET_PIN=5     # SX1261 reset (LBT / Spectral Scan)


WAIT_GPIO() {
    sleep 0.1
}

reset() {
    echo "CoreCell reset through GPIO$SX1302_RESET_PIN..."
    echo "SX1261 reset through GPIO$SX1261_RESET_PIN..."
    echo "CoreCell power enable through GPIO$SX1302_POWER_EN_PIN..."

    # write output for SX1302 CoreCell power_enable and reset
    gpioset gpiochip0 $SX1302_POWER_EN_PIN=1; WAIT_GPIO
    
    gpioset gpiochip0 $SX1302_RESET_PIN=1; WAIT_GPIO
    gpioset gpiochip0 $SX1302_RESET_PIN=0; WAIT_GPIO

    gpioset gpiochip0 $SX1261_RESET_PIN=0; WAIT_GPIO
    gpioset gpiochip0 $SX1261_RESET_PIN=1; WAIT_GPIO
}

case "$1" in
    start)
    reset
    ;;
    stop)
    reset
    ;;
    *)
    echo "Usage: $0 {start|stop}"
    exit 1
    ;;
esac

exit 0
```

</details>

Copia `reset_lgw.sh` a la carpeta `packet_forwarder`, luego ejecuta `lora_pkt_fwd`. Ten en cuenta que debes seleccionar un archivo de configuración `global_conf.json.sx1250.xxxx` según el módulo que estés utilizando:

```shell
cp tools/reset_lgw.sh packet_forwarder/
cd packet_forwarder

# Por favor, selecciona uno de los siguientes comandos según tu módulo:

# Para el Módulo Gateway LoRaWAN WM1302 (SPI) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868

# Para el Módulo Gateway LoRaWAN WM1302 (USB) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB

# Para el Módulo Gateway LoRaWAN WM1302 (SPI) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915

# Para el Módulo Gateway LoRaWAN WM1302 (USB) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB
```

Ahora, el packet forwarder puede ejecutarse correctamente. Pero aún hay algunas cosas que hacer si los desarrolladores necesitan reenviar paquetes LoRa® a su servidor LoRa® (por ejemplo, TTN o ChirpStack).

Para lograr este objetivo, los desarrolladores deben agregar primero la gateway Raspberry Pi al servidor LoRa. Tomando como ejemplo [TTNv3](https://www.thethingsindustries.com/docs/getting-started/), inicia sesión en la [consola de TTNv3](https://eu1.cloud.thethings.network/console), haz clic en `Go to gateways` y luego en `Add gateway`. En la página `Add gateway` encontrarás varios campos para completar. En lo que debes enfocarte es en `Gateway EUI`, `Gateway Server address` y `Frequency plan`, los demás campos pueden dejarse con los valores predeterminados.

- `Gateway EUI`: Un identificador único extendido de 64 bits para tu gateway. En esta wiki, lo hemos definido como `AA555A0000000000`.

- `Gateway Server address`: La dirección del servidor a la que se conectará el gateway. Cópiala al portapapeles; los desarrolladores deberán guardarla en el archivo de configuración más adelante.

- `Frequency plan`: Si utilizas un módulo EU868, selecciona `Europe 863-870 MHz (SF9 for RX2)`; si usas un módulo US915, selecciona `United States 902-928 MHz, FSB 2`.

<!-- 
![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki4.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki4.png" alt="pir" width={600} height="auto" /></p>
Después de agregar la gateway, vuelve a la Raspberry Pi, presiona `CTRL + C` para detener `lora_pkt_fwd`, luego edita el archivo de configuración `global_conf.json.sx1250.xxxx` que usaste antes con el editor de texto `nano`:

```shell
# Por favor, selecciona uno de los siguientes comandos según tu módulo:

# Para el Módulo Gateway LoRaWAN WM1302 (SPI) - EU868
nano global_conf.json.sx1250.EU868

# Para el Módulo Gateway LoRaWAN WM1302 (USB) - EU868
nano global_conf.json.sx1250.EU868.USB

# Para el Módulo Gateway LoRaWAN WM1302 (SPI) - US915
nano global_conf.json.sx1250.US915

# Para el Módulo Gateway LoRaWAN WM1302 (USB) - US915
nano global_conf.json.sx1250.US915.USB
```

Básicamente, necesitas modificar estos parámetros: `"gateway_ID"`, `"server_address"`, `"serv_port_up"` y `"serv_port_down"`, que se encuentran al final del archivo de configuración.  
Copia la dirección del servidor del gateway (`Gateway Server address`) en `"server_address"`, y cambia `"serv_port_up"` y `"serv_port_down"` a `1700`.  

Estos parámetros deberían quedar editados de la siguiente manera:

```json
"gateway_conf": {
    "gateway_ID": "AA555A0000000000",
    /* change with default server address/ports */
    "server_address": "eu1.cloud.thethings.network",
    "serv_port_up": 1700,
    "serv_port_down": 1700,
```

Guarda estos cambios presionando `CTRL + x`, luego `y` y finalmente `Enter` para cerrar el editor de texto.

Reinicia `lora_pkt_fwd`, y verás que tu Gateway Raspberry Pi estará conectado a TTNv3.

```shell
# Please select one of the following comands based on your module
# for WM1302 LoRaWAN Gateway Module (SPI) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868

# for WM1302 LoRaWAN Gateway Module (USB) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB

# for WM1302 LoRaWAN Gateway Module (SPI) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915

# for WM1302 LoRaWAN Gateway Module (USB) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB
```

## Fuentes

- [Hoja de datos Semtech SX1302](https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/2R000000Hkyg/U8CIV3e9yI9T_aILFMxuzLNs_6_0Io1WIaksrNYyCMQ)

## Certificados

- [Certificado CE WM1302 (USB)](https://files.seeedstudio.com/products/114992549/SHEA587_EU_Cert.pdf)
- [Certificado CE WM1302 (SPI)](https://files.seeedstudio.com/products/114992549/SHEA588_EU_Cert.pdf)

## Soporte Técnico y Discusión de Producto

Por favor, envía cualquier problema técnico a nuestro [foro](http://forum.seeedstudio.com/).

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
