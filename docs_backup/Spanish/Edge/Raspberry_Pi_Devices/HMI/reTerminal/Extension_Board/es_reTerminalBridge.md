---
description: reTerminal E10-1
title: reTerminal E10-1
keywords:
  - Edge
  - reTerminal Extension_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminalBridge
last_update:
  date: 04/03/2025
  author: Erick González
---

# **Primeros pasos con reTerminal E10-1**

### **Materiales necesarios**

| reTerminal                                                                                                                   | reTerminal E10-1                                                                                                              |
|-----------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
|<div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/ReTerminal/wiki_thumb.png" /></div>            |<div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reterminale10overviewnew.jpeg" /></div>|
|[**Comprar UNO Ahora**](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html)                                         |[**Comprar UNO Ahora**](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html)                                             |

### **Preparación preliminar**

#### **Conexión**

Fíjate en la orientación y coloca el reTerminal sobre el reTerminal E10-1, presionando suavemente hasta que encaje firmemente. Si el reTerminal E10-1 está encendido en este momento, el reTerminal se activará e iniciará el sistema. Si quieres saber más sobre reTerminal, haz clic en [**reTerminal**](https://wiki.seeedstudio.com/reTerminal/).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image3.png"/></div>

#### **Instalación y extracción**

Durante el uso del reTerminal E10-1, puede ser necesario quitar su carcasa para añadir periféricos.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image002.png"/></div>

#### **Instalación de driver**

Si deseas que el reTerminal use las funciones del reTerminal E10-1, primero necesitas instalar el driver para reTerminal. Por favor, sigue los siguientes comandos en la ventana de terminal del reTerminal:

```sh
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays.git
cd seeed-linux-dtoverlays
sudo ./scripts/reTerminal.sh
```

:::note
Para **SO de 32 bits** deberás añadir el siguiente paso antes de ejecutar `sudo ./scripts/reTerminal.sh`

```
echo arm_64bit=0 | sudo tee -a /boot/config.txt
```
:::

Una vez completada la instalación, reinicia el dispositivo. Luego, usa el siguiente comando para comprobar si el archivo `reTerminal-bridge.dtbo` existe y asegurar que la instalación del driver se haya completado:

```sh
ls /boot/overlays/reTerminal-bridge.dtbo
```

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image1.jpg"/></div>

#### **Instalar librerías**

Instalar librería de python3:

```sh
sudo apt-get update
sudo apt-get install python3-pip
sudo pip3 install RPi.GPIO
sudo apt-get install python3-serial
```

Instalar librería git.

```sh
sudo apt install -y git
```

### **Suministro de energía (Power Supply)**

Hay tres métodos para suministrar energía, como se muestra a continuación:

- Conector DC
- PoE
- Batería UPS -18650

La batería para este dispositivo es NCR18650B, una batería Li-ion recargable. Ten en cuenta que en el paquete no se incluye la batería, mientras que está disponible en tiendas de conveniencia habituales y el cliente debe conseguirla por su cuenta. Proponemos Panasonic NCR18650B 3.6V 3400mAh.

#### **DC Jack**

Alimentar el reTerminal, la placa de expansión y la batería con DC 12V @4A.

#### **PoE**

La entrada de alimentación PoE es RJ45 y admite un máximo de 25W de potencia de entrada.

#### **UPS -18650 battery**

2 x soporte de batería con pin fijo.

### **Ventilador (Fan)**

**Materiales necesarios**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- Ventilador (incluido) x1

Para mantener el reTerminal y reTerminal E10-1 a un nivel de temperatura normal bajo carga pesada, el reTerminal E10-1 tiene un ventilador de 3 pines.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image29.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image031.jpg"/></div>

Este ejemplo muestra cómo controlar el ventilador en reTerminal E10-1.

**Paso 1.** Podemos controlar directamente el encendido/apagado del ventilador con:

```sh
#Encender ventilador
raspi-gpio set 23 op pn dh

#Apagar ventilador
raspi-gpio set 23 op pn dl
```

**Paso 2.** También podemos habilitar y deshabilitar el ventilador detectando la temperatura de la CPU. Sigue los pasos para descargar y ejecutar el programa.

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_Fan_control.git
cd Seeed_reTerminal_Bridge_Fan_control/
sudo python3 fan.py
```

He aquí el código **fan.py** de referencia.

```python
import sys 
import time
try:
 import RPi.GPIO as GPIO 
except RuntimeError:
 print("Error importting Rpi.GPIO")

MAX_TEMP = 40.0
MIN_TEMP = 20.0
 
def cpu_temp():
 f = open("/sys/class/thermal/thermal_zone0/temp",'r') 
 return float(f.read())/1000
 
def main():
 channel = 23
 GPIO.setmode(GPIO.BCM)

 # init 23 off
 GPIO.setup(channel,GPIO.OUT,initial=GPIO.LOW)
 is_close = True
 while 1:
  temp = cpu_temp()
  if is_close:
   if temp > MAX_TEMP:
    GPIO.output(channel,GPIO.HIGH)
    is_close = False
  else:
   if temp < MIN_TEMP:
    GPIO.output(channel,GPIO.LOW)
    is_close = True
  time.sleep(2.0)
  GPIO.setwarnings(False) 
 
if __name__ == '__main__':
 main() 
```

Tras ejecutar correctamente el código, cuando la temperatura de la CPU sea superior a 40 °C, el ventilador se encenderá. Cuando la temperatura sea inferior a 20 °C, el ventilador se apagará.

### **Comunicación CAN**

Un bus CAN (Controller Area Network) es un estándar robusto diseñado para que microcontroladores y dispositivos se comuniquen sin un computador anfitrión.

**Materiales necesarios**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x2
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x2
- Cables macho a macho x2

Este ejemplo muestra cómo usar CAN en reTerminal E10-1.

**Paso 1.** Usa cables macho a macho para conectar los dos reTerminal E10-1 a través de la interfaz CAN.

H -> H
L -> L
GND -> GND

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/can.jpg"/></div>

**Paso 2.** Instala **CAN-utils** en ambos reTerminals.

```sh
sudo apt install can-utils
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image4.jpg"/></div>

CAN-utils es un conjunto de herramientas de depuración muy útiles que usan la interfaz CAN, incluyendo:

- candump – Vuelca paquetes CAN (mostrar, filtrar y registrar en disco)
- canplayer – Reproduce archivos de log CAN
- cansend – Envía un único frame
- cangen – Genera tráfico aleatorio
- canbusload – muestra la utilización del bus CAN

El código fuente de CAN-utils está en [GitHub](https://github.com/linux-can/can-utils).

**Paso 3.** Añade la información de configuración para los dos reTerminal. Abre **/boot/config.txt** con un editor y añade `dtoverlay=seeed-can-fd-hat-v2` al final; luego reinicia reTerminal.

:::note
Sin un ID EEPROM en el "hat" especificando el hardware, el kernel Linux no descubrirá automáticamente el controlador CAN en la interfaz SPI. Para cargar el driver apropiado, debes especificar la configuración de device tree overlay al arrancar.
:::

```sh
sudo nano /boot/config.txt
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image5.jpg"/></div>

**Paso 4.** La interfaz CAN se comporta igual que una interfaz de red. Puedes obtener estadísticas usando `ifconfig -a`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image6.jpg"/></div>

Usa `cangen can0 -v` para enviar datos aleatorios y probar si la comunicación CAN funciona.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image7.jpg"/></div>

**Paso 5.** Puedes manualmente activar la interfaz CAN con:

```sh
sudo ip link set can0 up type can bitrate 500000
```

**Paso 6.** Descarga el [código](https://github.com/limengdu/Seeed_reTerminal_Bridge_CAN_exmaple) al reTerminal.

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_CAN_exmaple
```

Uno de los reTerminal compila y ejecuta el código que envía datos:

```sh
cd Seeed_reTerminal_Bridge_CAN_exmaple/
gcc cantransmit.c -o cantransmit
```

He aquí el código **cantransmit.c** de referencia.

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#include <net/if.h>
#include <sys/ioctl.h>
#include <sys/socket.h>

#include <linux/can.h>
#include <linux/can/raw.h>

int main(int argc, char **argv)
{
 int s; 
 struct sockaddr_can addr;
 struct ifreq ifr;
 struct can_frame frame;

 printf("CAN Sockets Demo\r\n");

 if ((s = socket(PF_CAN, SOCK_RAW, CAN_RAW)) < 0) {
  perror("Socket");
  return 1;
 }

 strcpy(ifr.ifr_name, "can0" );
 ioctl(s, SIOCGIFINDEX, &ifr);

 memset(&addr, 0, sizeof(addr));
 addr.can_family = AF_CAN;
 addr.can_ifindex = ifr.ifr_ifindex;

 if (bind(s, (struct sockaddr *)&addr, sizeof(addr)) < 0) {
  perror("Bind");
  return 1;
 }

 frame.can_id = 0x555;
 frame.can_dlc = 5;
 sprintf(frame.data, "Hello");

 if (write(s, &frame, sizeof(struct can_frame)) != sizeof(struct can_frame)) {
  perror("Write");
  return 1;
 }

 if (close(s) < 0) {
  perror("Close");
  return 1;
 }

 return 0;
}
```

Otro reTerminal compila y ejecuta el código para recibir datos:

```sh
gcc canreceive.c -o canreceive
```

He aquí el código **canreceive.c** de referencia.

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#include <net/if.h>
#include <sys/ioctl.h>
#include <sys/socket.h>

#include <linux/can.h>
#include <linux/can/raw.h>

int main(int argc, char **argv)
{
 int s, i; 
 int nbytes;
 struct sockaddr_can addr;
 struct ifreq ifr;
 struct can_frame frame;

 printf("CAN Sockets Receive Demo\r\n");

 if ((s = socket(PF_CAN, SOCK_RAW, CAN_RAW)) < 0) {
  perror("Socket");
  return 1;
 }

 strcpy(ifr.ifr_name, "can0" );
 ioctl(s, SIOCGIFINDEX, &ifr);

 memset(&addr, 0, sizeof(addr));
 addr.can_family = AF_CAN;
 addr.can_ifindex = ifr.ifr_ifindex;

 if (bind(s, (struct sockaddr *)&addr, sizeof(addr)) < 0) {
  perror("Bind");
  return 1;
 }

 nbytes = read(s, &frame, sizeof(struct can_frame));

  if (nbytes < 0) {
  perror("Read");
  return 1;
 }

 printf("0x%03X [%d] ",frame.can_id, frame.can_dlc);

 for (i = 0; i < frame.can_dlc; i++)
  printf("%02X ",frame.data[i]);

 printf("\r\n");

 if (close(s) < 0) {
  perror("Close");
  return 1;
 }

 return 0;
}
```

Verás que los dos reTerminal envían y reciben datos a través de CAN.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image8.jpg"/></div>

Además de la lectura, tal vez quieras filtrar tramas CAN que no sean relevantes. Esto se hace a nivel del driver y puede ser más eficiente que leer cada trama en una aplicación en modo usuario.

```sh
gcc canfilter.c -o canfilter
```

He aquí el código **canfilter.c** de referencia.

```c

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#include <net/if.h>
#include <sys/ioctl.h>
#include <sys/socket.h>

#include <linux/can.h>
#include <linux/can/raw.h>

int main(int argc, char **argv)
{
 int s, i; 
 int nbytes;
 struct sockaddr_can addr;
 struct ifreq ifr;
 struct can_frame frame;

 printf("CAN Sockets Receive Filter Demo\r\n");

 if ((s = socket(PF_CAN, SOCK_RAW, CAN_RAW)) < 0) {
  perror("Socket");
  return 1;
 }

 strcpy(ifr.ifr_name, "can0" );
 ioctl(s, SIOCGIFINDEX, &ifr);

 memset(&addr, 0, sizeof(addr));
 addr.can_family = AF_CAN;
 addr.can_ifindex = ifr.ifr_ifindex;

 if (bind(s, (struct sockaddr *)&addr, sizeof(addr)) < 0) {
  perror("Bind");
  return 1;
 }

 /*
  Para configurar un filtro, inicializa una estructura can_filter o un array
  y rellena can_id y can_mask. Luego se llama a setsockopt():
 */
 struct can_filter rfilter[1];

 rfilter[0].can_id   = 0x550;
 rfilter[0].can_mask = 0xFF0;
 //rfilter[1].can_id   = 0x200;
 //rfilter[1].can_mask = 0x700;

 setsockopt(s, SOL_CAN_RAW, CAN_RAW_FILTER, &rfilter, sizeof(rfilter));

 nbytes = read(s, &frame, sizeof(struct can_frame));

 if (nbytes < 0) {
  perror("Read");
  return 1;
 }

 printf("0x%03X [%d] ",frame.can_id, frame.can_dlc);

 for (i = 0; i < frame.can_dlc; i++)
  printf("%02X ",frame.data[i]);

 printf("\r\n");

 // Finalmente, si no se requiere más el socket:
 if (close(s) < 0) {
  perror("Close");
  return 1;
 }

 return 0;
}
```

:::note
La mayoría de controladores CAN tienen filtros y máscaras en silicio (hardware). Desafortunadamente, la arquitectura actual realiza el filtrado en el kernel y no es tan óptima, aunque sigue siendo mejor que pasar todos los frames a la app en modo usuario.
:::

### **Comunicación RS485**

RS485 (o TIA-485-A o EIA-485) es un estándar de capa física para comunicación en serie con señalización balanceada que soporta sistemas multipunto. Se usa efectivamente en largas distancias y entornos con ruido eléctrico.

**Materiales necesarios**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- [USB To RS485 Industrial Isolated Converter](https://www.seeedstudio.com/USB-TO-RS232--RS485--TTL-Industrial-Isolated-Converter-p-3231.html) y cable

Este ejemplo explica cómo usar RS485 en el reTerminal E10-1.

**Paso 1.** Como la función RS485 utiliza ttyS0, debemos deshabilitar la función de interacción de sistema en ttyS0.

```sh
sudo raspi-config
```

Selecciona **Interface Options**, **Serial port**.

Cuando pregunte si quieres un shell de login sobre serial, elige **No**.

Luego, "Do you want to use serial port hardware" => **Yes**.

Después de los cambios, verás este mensaje:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image9.jpg"/></div>

**Paso 2.** Conecta el reTerminal E10-1 al PC vía RS485.

A -> A
B -> B
GND -> GND

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/rs485.jpg"/></div>

**Paso 3.** Usa `dmesg | grep tty` para ver el nombre del puerto serie. Normalmente es **ttyS0**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image10.png"/></div>

**Paso 4.** Descarga [código](https://github.com/limengdu/Seeed_reTerminal_Bridge_RS485_exmaple) al reTerminal.

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_RS485_exmaple
cd Seeed_reTerminal_Bridge_RS485_exmaple/
```

Abre el software serial en el PC. Ejecuta `sudo python3 rs485.py` en reTerminal y verás algo así:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image11.png"/></div>

Al mismo tiempo, puedes enviar 16 bytes de datos al reTerminal a través del asistente serial en 5s.

He aquí el código **rs485.py** de referencia.

```c
import serial, time
try:
    import RPi.GPIO as GPIO
except RuntimeError:
    print("Error importting Rpi.GPIO")

GPIO.setmode(GPIO.BCM)

ser = serial.Serial()
ser.port = "/dev/ttyS0"
channel1 = 25
channel2 = 17

#9600,N,8,1
ser.baudrate = 9600
ser.bytesize = serial.EIGHTBITS    #bits por byte
ser.parity = serial.PARITY_NONE    #sin paridad
ser.stopbits = serial.STOPBITS_ONE #número de stop bits

ser.timeout = 0.5                  #lectura no bloqueante 0.5s
ser.writeTimeout = 0.5             #timeout de escritura 0.5s
ser.xonxoff = False                #flujo por software desactivado
ser.rtscts = False                 #flujo hardware (RTS/CTS) desactivado
ser.dsrdtr = False                 #flujo hardware (DSR/DTR) desactivado

GPIO.setup(channel1,GPIO.OUT,initial=GPIO.LOW)
GPIO.setup(channel2,GPIO.OUT,initial=GPIO.LOW)

try:
    ser.open()
except Exception as ex:
    print ("open serial port error " + str(ex))
    exit()

if ser.isOpen():
    try:
        ser.flushInput() #limpiar buffer input
        ser.flushOutput() #limpiar buffer output
        GPIO.output(channel1,GPIO.HIGH)
        GPIO.output(channel2,GPIO.HIGH)
        time.sleep(0.1)
        #escribir datos
        ser.write("rs485 communication is on, you can try to send data...\n".encode())
        print("Sent successfully\n")
        GPIO.output(channel2,GPIO.LOW)
        time.sleep(5)  #esperar 5s
        #leer datos
        response = ser.read(16)
        print("read 16 byte data:")
        print(response)
        ser.close()
    except Exception as e1:
        print ("communicating error " + str(e1))
else:
    print ("open serial port error")
```

### **Comunicación RS232**

RS-232 es un estándar para comunicación serie introducido en 1960. Comparado con interfaces más nuevas como RS-422, RS-485, Ethernet, RS-232 tiene menor velocidad, longitud máxima de cable más corta, mayor oscilación de voltaje, etc.

**Materiales necesarios**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- [USB To RS232 Industrial Isolated Converter](https://www.seeedstudio.com/USB-TO-RS232--RS485--TTL-Industrial-Isolated-Converter-p-3231.html) y cable

Este ejemplo explica cómo usar RS232 en reTerminal E10-1.

**Paso 1.** Como la función RS232 usa ttyS0, cierra la interacción en ttyS0.

```sh
sudo raspi-config
```

Selecciona **Interface Options**, **Serial port**.

Cuando pregunte si quieres un shell de login en serial, elige **No**.

Luego, "Do you want to use serial port hardware", elige **Yes**.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image9.jpg"/></div>

**Paso 2.** Conecta reTerminal E10-1 al PC vía interfaz RS232.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/rs232.jpg"/></div>

**Paso 3.** Usa `dmesg | grep tty` para ver el nombre del puerto serie. Normalmente **ttyS0**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image12.jpg"/></div>

**Paso 4.** Descarga [código](https://github.com/limengdu/Seeed_reTerminal_Bridge_RS232_exmaple) al reTerminal.

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_RS232_exmaple
cd Seeed_reTerminal_Bridge_RS232_exmaple/
```

Uno de los reTerminal compila y ejecuta el código que envía datos:

```sh
sudo python3 rs232_send.py
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image13.jpg"/></div>

He aquí **rs232_send.py**:

```python
#!/usr/bin/env python
import time
import serial

ser = serial.Serial(
        port='/dev/ttyS0',              # Ajustar según el puerto serie en reTerminal
        baudrate = 9600,
        parity=serial.PARITY_NONE,
        stopbits=serial.STOPBITS_ONE,
        bytesize=serial.EIGHTBITS,
        timeout=1
)
counter=0
try:
        print("rs232 starts now!\n")
        ser.write("rs232 starts now!\n".encode())
        while 1:
                ser.write(("Write counter:{}\n".format(counter)).encode())
                time.sleep(1)
                counter += 1
except KeyboardInterrupt:
    exit()
```

Otro reTerminal compila y ejecuta el código que recibe datos:

```sh
sudo python3 rs232_receive.py
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image14.jpg"/></div>

He aquí **rs232_receive.py** de referencia:

```python
#!/usr/bin/env python
import time
import serial

ser = serial.Serial(
        port='/dev/ttyS0',
        baudrate = 9600,
        parity=serial.PARITY_NONE,
        stopbits=serial.STOPBITS_ONE,
        bytesize=serial.EIGHTBITS,
        timeout=1
)
try:
    print("Start receiving data now!\n")
    while 1:
            x=ser.readline()
            if x != b'':
                print(x)
except KeyboardInterrupt:
        exit()
```

### **Ethernet**

**Materiales necesarios**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1

Este ejemplo muestra cómo probar la conexión Ethernet en reTerminal E10-1.

**Paso 1.** Descarga **iperf3** para reTerminal y PC:

```sh
git clone https://github.com/esnet/iperf.git
```

**Paso 2.** Instala **iperf3**:

```
cd iperf
sudo ./configure
sudo make
sudo make install
```

**Paso 3.** Usa reTerminal como servidor:

```sh
iperf3 -s
```

Desde un PC, prueba la velocidad de red conectada al reTerminal, asegurando que estén en la misma red local:

```sh
iperf3 -c 192.168.xxx.xxx
```

*(Donde 192.168.xxx.xxx es la IP del reTerminal)*

Por ejemplo, si la IP del reTerminal es `192.168.31.187`:

```sh
iperf3 -c 192.168.31.187
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image17.jpg"/></div>

Para más funciones de prueba de red, consulta [iperf](https://github.com/esnet/iperf).

### **Módulo WM1302 (USB/SPI) LoRaWAN Gateway**

**Materiales necesarios**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- [WM1302 LoRaWAN Gateway Module (USB/SPI) US/EU](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-USB-EU868-p-4892.html) x1

Las diferencias entre versiones USB y SPI se muestran:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reTerminalLoRa.png"/></div>

Este ejemplo muestra cómo usar WM1302 LoRaWAN Gateway en reTerminal E10-1.

**Paso 1.** Instala el módulo WM1302 en reTerminal E10-1 y fíjalo con tornillos. Luego gira el botón cerca del ventilador a PCIE.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/039.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image18.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/045.jpg"/></div>

**Paso 2.** Ejecuta `sudo raspi-config`:

- Selecciona SPI => **Yes**
- Selecciona I2C => **Yes**
- Selecciona Serial Port => "Would you like a login shell..." => **No**, "Would you like the serial port hardware..." => **Yes**

Reinicia reTerminal.

**Paso 3.** Descarga el [código WM1302](https://github.com/Lora-net/sx1302_hal) en reTerminal y compila:

```sh
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo make
```

**Paso 4.** Configura el script de reset. Primero descarga el archivo a `sx1302_hal/packet_forwarder` con:

```
cd sx1302_hal/packet_forwarder
wget https://files.seeedstudio.com/wiki/reTerminal_Bridge/reset_lgw.sh
```

Luego ejecuta el código según tu versión WM1302.

```sh
USB version
$ cd packet_forwarder
$ ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

```sh
SPI version
$ cd packet_forwarder
$ ./lora_pkt_fwd -c global_conf.json.sx1250.EU868
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image20.jpg"/></div>

**Paso 5.** Regístrate en [TTN website](https://www.thethingsnetwork.org/) y entra a tu cuenta. Si no tienes, crea una. Luego en la interfaz Gateway, haz "Get Starting".

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reTerminalLoRa1.png"/></div>

Selecciona tu región.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reTerminalLoRa2.png"/></div>

Elige "Go to gateways".

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reTerminalLoRa3.png"/></div>

Haz clic en **Add gateway**:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image22.jpg"/></div>

El **Gateway EUI** aparecerá en el log cuando ejecutes la prueba en **paso 4**. La Frequency plan (ej. EU868) elige **Europe 863-870 MHz (SF9 for RX2 - recommended)**. Luego clic en **Create gateway**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image23.jpg"/></div>

**Paso 6.** (Ej. versión EU) Si es la versión SPI, edita **global_conf.json.sx1250.EU868** en `sx1302_hal/packet_forwarder`. Si es USB, edita **global_conf.json.sx1250.EU868.USB**.

Busca **gateway_conf** y:

- Cambia **gateway_ID** por el **Gateway EUI** del sitio web.
- **server_address** a la **Gateway Server address** del sitio.
- **serv_port_up** y **serv_port_down** a **1700**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image24.jpg"/></div>

**Paso 7.** Ejecuta nuevamente el comando en **paso 4** y luego verás la info de conexión en la página web.

```sh
USB version
$ ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

```sh
SPI version
$ ./lora_pkt_fwd -c global_conf.json.sx1250.EU868
```

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image25.jpg"/></div>

:::note
El tutorial anterior se basa en la versión EU de WM1302. Si utilizas la versión US, los pasos son similares, pero los archivos a modificar y ejecutar difieren. Refiérete al [repositorio sx1302_hal](https://github.com/Lora-net/sx1302_hal/tree/master/packet_forwarder).
:::

### **Expansión de Disco Duro**

**Materiales necesarios**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- Conector M.2 B key x1

Este ejemplo muestra cómo instalar y verificar el funcionamiento de un disco duro en reTerminal E10-1.

**Paso 1.** Abre la tapa trasera de reTerminal E10-1, inserta el SSD M.2 en el conector Mini-PCIe y fíjalo con tornillos. Cierra la tapa, conecta reTerminal y enciende.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/040.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image26.jpg"/></div>

Luego gira el botón al lado del ventilador a M.2.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/046.jpg"/></div>

**Paso 2.** Ingresa el comando para ver si el SSD se detecta:

```sh
sudo fdisk -l
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/025.png"/></div>

**Paso 3.** Podemos usar dd para probar velocidad de lectura/escritura del disco.

```sh
Lectura
$ sudo dd if=/dev/sda3 of=/dev/null bs=512k count=500
```

```sh
Escritura
$ sudo dd if=/dev/zero of=/dev/sda3 bs=512k count=500
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/28.jpg"/></div>

:::note
Asegúrate de usar M.2 B key.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/add_pic_1.png"/></div>
:::

#### Formatear Disco

:::caution
Los siguientes pasos borrarán todos tus datos del SSD conectado. Asegúrate de comprender.
:::

- **Herramientas de software**: `lsblk`, `fdisk`, `mkfs`, `mount`, `umount`

**Paso 1.** Localiza tu SSD con:

```sh
lsblk
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/lsblk.png"/></div>

**Paso 2.** Usa fdisk para crear partición en tu SSD:

```sh
sudo fdisk /dev/sdX
```

Ej. `sudo fdisk /dev/sda`

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/fdisk.png"/></div>

En el prompt de fdisk, presiona **d** para borrar particiones. Luego **n** para nueva partición. Tipo **p** para primaria, **1** para partición 1, ENTER para default, etc. Presiona **Y** para quitar signature. Finalmente **w** para guardar cambios.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/fdisk_sample.png"/></div>

**Paso 3.** Formatea la partición en ext4:

```bash
sudo mkfs.ext4 /dev/sda1
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/mkfs.png"/></div>

**Paso 4.** Monta la partición:

```bash
sudo mkdir /media/"TU_USUARIO"/"NOMBRE_DEL_DISCO"

sudo mount /dev/sda1 /media/"TU_USUARIO"/"NOMBRE_DEL_DISCO"
```

Ej.:

```bash
sudo mkdir /media/seeed/SSD

sudo mount /dev/sda1 /media/seeed/SSD/
```

Comprueba con `lsblk`:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/mount.png"/></div>

### **Módulo EC25-EUX 4G**

**Materiales necesarios**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- Módulo 4G EC25-EUX x1
- Tarjeta SIM x1

**Paso 1.** Abre tapa trasera del reTerminal E10-1, instala EC25-EUX y tarjeta SIM. Luego gira el botón a PCIE.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/039.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/041.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/042.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/045.jpg"/></div>

**Paso 2.** Verifica si se detecta EC25-EUX:

```
lsusb
lsusb -t
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/lsusb.png"/></div>

**Paso 3.** Instala minicom:

```sh
sudo apt install minicom
```

**Paso 4.** Conecta EC25-EUX 4G via minicom:

```sh
sudo minicom -D /dev/ttyUSB2 -b 1152008n1
```

Escribe **AT** y presiona Enter, verás **OK**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image31.png"/></div>

**Paso 5.** Activa 4G:

Inserta una SIM 4G en la ranura (micro SIM). En minicom:

```sh
AT+QCFG="usbnet"
```

Retorna algo como `+QCFG: "usbnet",0,` pero necesitamos 1 (modo ECM). Teclea:

```sh
AT+QCFG="usbnet",1
```

Luego fuerza reinicio del módem:

```sh
AT+CFUN=1,1
```

Reinicia o espera a que se conecte a Internet. También puedes usar `ifconfig` para ver el estado de red.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image33.png"/></div>

### **Audio**

Para satisfacer necesidades multimedia, reTerminal E10-1 tiene un módulo de altavoz y dos micrófonos para reproducción y grabación.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/028.jpg"/></div>

**Materiales necesarios**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html)
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html)

**Paso 1.** Descarga e instala el driver:

```sh
git clone https://github.com/Seeed-Projects/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh
```

**Paso 2.** Añade configuración. Edita `/boot/config.txt` y añade `dtoverlay=seeed-2mic-voicecard`, luego reinicia:

```sh
sudo sed -i '$s/$/\ndtoverlay=seeed-2mic-voicecard/'  /boot/config.txt
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image35.jpg"/></div>

Reinicia:

```bash
sudo reboot
```

Usa `arecord -l` para ver dispositivo de grabación:

```bash
arecord -L
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/030.png"/></div>

Vemos **card 0 device 0** para grabar.

**Paso 3.** Usa:

```sh
arecord -Dhw:0,0 -d 10 -f cd -r 44100 -c 2 -t wav test.wav
```

:::note
**Parámetros**
- **-D**: dispositivo grabación (hw:0,0 => card 0 device 0)
- **-d**: duración de grabación (s)
- **-f**: formato (cd, cdr, dat)
- **-r**: tasa de muestreo (Hz)
- **-c**: número de canales
- **-t**: formato de archivo generado
:::

**Paso 4.** Comprueba dispositivo reproducción:

```sh
aplay -l
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/031.png"/></div>

**Paso 5.** Ajusta volumen y reproduce sonido:

```sh
sudo alsamixer
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image38.jpg"/></div>

```sh
sudo aplay -Dhw:0 test.wav
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image39.jpg"/></div>

## Recursos

## FAQ

1. **¿Qué tipo de baterías 18650 son compatibles?**

   Recomendamos Panasonic NCR18650B 3.6V 3400mAh.

2. **¿Las baterías necesitan protección propia (sobreintensidad, subtensión, sobretensión)?**

   No, porque reTerminal E10-1 tiene circuito de protección de batería.

3. **¿Qué modelo de controlador CAN y RS485 usa?**

   - 485controller: TP485E
   - CAN controller: MCP2518FDT-E/QBB

4. **Instalé el E10 ayer, ¿es correcto el nivel de batería (0%) aunque estén cargadas?**

   Por ahora la función de mostrar nivel de batería no está desarrollada; tenemos en cuenta tu retroalimentación y la programaremos.

5. **¿El reTerminal extension provee otro puerto ethernet separado, así tendríamos dos puertos ethernet?**

   Sí, estos dos puertos pueden usarse simultáneamente sin afectar al otro.

6. **¿RS232 y RS485 son independientes (en algunos hardware solo puedes usar uno a la vez)?**

   Solo puedes usar RS232 **o** RS485 a la vez.

## Recursos Adicionales

- [DSN formato schematic file](https://files.seeedstudio.com/wiki/reTerminal_Bridge/source/reTerminal_Bridge.DSN)
- [Archivos de diseño PCB](https://files.seeedstudio.com/wiki/reTerminal_Bridge/source/reTerminal_Bridge.brd)
- [Schematic PDF version](https://files.seeedstudio.com/wiki/reTerminal_Bridge/source/reTerminal_Bridge_SCH.pdf)

## Soporte técnico y debate de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte distintos tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para cubrir distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
