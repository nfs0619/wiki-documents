---
description: Wio Tracker Meshtastic® Kit Firmware Flashing
title:  Flash Firmware Meshtastic Kit
keywords:
- Meshtastic
- Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/flash_meshtastic_kit
last_update:
  date: 06/02/2025
  author: Guillermo
---

Este tutorial guiará a los usuarios para flashear el [Wio Tracker 1110 Dev Board](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html) con la versión de Meshtastic, para quienes deseen utilizar la red Meshtastic.

:::tip
Si deseas volver a flashear la placa con la versión LoRaWAN, consulta este [tutorial](https://wiki.seeedstudio.com/flash_to_wio_tracker/).
:::

### Preparación

* Placa Wio Tracker 1110 x 1  
* Computadora x 1  
* Cable USB tipo C x 1

### Conexión

Conecta la placa de desarrollo a tu PC mediante el cable USB.

### Flashear el bootloader

<Tabs>
<TabItem value="uf2" label="UF2">

* [Descargar bootloader](https://files.seeedstudio.com/wiki/SenseCAP/respeaker/update-wio_tracker_1110_bootloader-0.9.1_nosd.uf2)

Haz doble clic en el botón `Reset`, debería aparecer una unidad llamada `WM1110_BOOT` en tu computadora.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wm1110-boot.png" alt="pir" width={600} height="auto" /></p>

Arrastra el archivo `update-wio_tracker_1110_bootloader-0.9.1_nosd.uf2` a esa unidad. La descarga se ejecutará automáticamente y la unidad se desmontará al finalizar.

</TabItem>
<TabItem value="serial" label="Serial">

* [Descargar bootloader](https://files.seeedstudio.com/wiki/SenseCAP/respeaker/wio_tracker_1110_bootloader-0.9.1_s140_7.3.0.zip)

**Paso 1: Instalación de Adafruit-nrfutil**

**Prerrequisitos**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="pypi" label="Installing from PyPI">

Este es el método recomendado para instalar la versión más reciente:

```
pip3 install --user adafruit-nrfutil
```
  
</TabItem>

<TabItem value="sou" label="Installing from Source">

Usa este método si tienes problemas instalando con PyPi o deseas modificar la herramienta. Primero, clona este repositorio y entra en su carpeta.

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

Nota: los siguientes comandos usan `python3`, sin embargo, si estás en Windows, puede que necesites cambiarlo por `python`, ya que la instalación de Python 3.x en Windows todavía usa el nombre `python.exe`.

Instalación en el directorio del usuario:

```
pip3 install -r requirements.txt
python3 setup.py install
```

Si obtienes errores de permisos al ejecutar `pip3 install`, es posible que tu `pip3` sea antiguo o esté configurado para intentar instalar en directorios del sistema. En ese caso, usa la opción `--user`:

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

Instalación en directorios del sistema (no recomendado en general):

```
sudo pip3 install -r requirements.txt
sudo python3 setup.py install
```

Para generar un archivo ejecutable binario autónomo de la utilidad (para Windows o macOS), ejecuta los siguientes comandos:

```
pip3 install pyinstaller
cd Adafruit_nRF52_nrfutil
pip3 install -r requirements.txt
cd Adafruit_nRF52_nrfutil\nordicsemi
pyinstaller __main__.py --onefile --clean --name adafruit-nrfutil
```

Encontrarás el `.exe` en `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil` (con `.exe` si estás en Windows).  
Cópialo o muévelo a otro lugar para tu conveniencia, como un directorio incluido en tu variable de entorno %PATH%.

</TabItem>
</Tabs>

**Paso 2: Flashear el bootloader**

Haz doble clic en el botón `Reset` de la placa y ejecuta el siguiente comando:

* **Para Windows**: 
```
adafruit-nrfutil --verbose dfu serial --package wio_tracker_1110_bootloader-0.9.1_s140_7.3.0.zip -p COMxx -b 115200
```

* **Para otros**: 
```
adafruit-nrfutil --verbose dfu serial --package wio_tracker_1110_bootloader-0.9.1_s140_7.3.0.zip -p /dev/tty.SLAB_USBtoUART -b 115200
```

Reemplaza el puerto serie con el puerto correspondiente de tu dispositivo. Ejemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>
</TabItem>
</Tabs>

### Descargar la aplicación

Puedes usar el [Meshtastic Web Flasher](https://flasher.meshtastic.org/) para descargar y copiar el firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flasher.png" alt="pir" width={800} height="auto" /></p>

Selecciona el dispositivo `Seeed Wio WM1110 Tracker` y elige el firmware más reciente. Luego descarga el archivo `UF2`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/download-uf2.png" alt="pir" width={800} height="auto" /></p>

<Tabs>
<TabItem value="uf2" label="UF2">

Haz doble clic en el botón `Reset`, debería aparecer una unidad `WM1110_BOOT` en tu PC.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wm1110-boot.png" alt="pir" width={600} height="auto" /></p>

Arrastra el archivo `.uf2` a esa unidad. La descarga se iniciará automáticamente y, una vez completada, la unidad se desmontará.

:::tip
Ignora este mensaje de error, el dispositivo se ha actualizado correctamente.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/error-prompt.png" alt="pir" width={600} height="auto" /></p>
:::

</TabItem>

<TabItem value="serial" label="Serial">

Haz doble clic en el botón `Reset` de la placa y ejecuta el siguiente comando:

* **Para Windows**: 

```
adafruit-nrfutil --verbose dfu serial --package wio_tracker_1110_bootloader-0.9.1_s140_7.3.0.zip -p COMxx -b 115200
```

* **Para otros**:

```
adafruit-nrfutil --verbose dfu serial --package firmware-wio-tracker-wm1110-2.3.14.681ae9d8.zip --port /dev/tty.SLAB_USBtoUART -b 115200
```

Flasheo exitoso:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/mesh-flash-done.png" alt="pir" width={800} height="auto" /></p>
  
</TabItem>
</Tabs>
