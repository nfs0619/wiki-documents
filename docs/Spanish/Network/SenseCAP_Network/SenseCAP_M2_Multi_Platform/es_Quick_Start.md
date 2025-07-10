---
description: Quick_Start
title: Inicio Rápido
keywords:
- gateway
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/quick_start_with_M2_MP
last_update:
  date: 06/24/2025
  author: Guillermo
---

## Conexión POE

SenseCAP M2 admite PoE (Power over Ethernet) y es compatible con el estándar IEEE 802.3 af.

:::tip
Necesitarás un switch PoE adicional que proporcione 40V-57V de corriente continua como PSE (Power Sourcing Equipment) si tu módem/enrutador no admite PoE.
:::

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-poe.png" alt="pir" width={800} height="auto" /></p>

## Configuración de Red del Gateway

Conecta la antena y el adaptador de corriente al gateway.  
El LED de encendido se mostrará en rojo, y después de unos 15s, el indicador superior parpadeará en verde, lo que indica que el gateway está iniciando.

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-1.png" alt="pir" width={800} height="auto" /></p>

Hay dos formas de conectar el gateway a Internet. Elige la que se adapte a tu caso.

### Conexión por Ethernet

Conecta el cable Ethernet al puerto Ethernet.  
El indicador superior se mostrará en verde sólido si la conexión a Internet es exitosa.

### Conexión por Wi-Fi

Hay dos formas de acceder a la página de configuración Luci.

#### Acceso a través del enrutador

1. Conecta el gateway mediante cable Ethernet y tu PC al mismo enrutador.

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/image-3.png" alt="pir" width={800} height="auto" /></p>

2. Verifica la dirección IP del gateway en la página del administrador del enrutador.

3. Encuentra el nombre de usuario y contraseña del dispositivo en la etiqueta.

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4.png" alt="pir" width={800} height="auto" /></p>

4. Ingresa la IP del gateway en tu navegador para abrir la página Luci.

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/login.png" alt="pir" width={800} height="auto" /></p>

#### Acceso mediante el hotspot AP del dispositivo

1. Mantén presionado el botón del gateway por 5 segundos hasta que el indicador azul parpadee lentamente.

2. Conéctate a la red Wi-Fi `SenseCAP_XXXXXX` (contraseña por defecto: 12345678).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wifi.png" alt="pir" width={400} height="auto" /></p>

3. Accede a la IP `192.168.168.1` desde tu navegador.

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4.png" alt="pir" width={800} height="auto" /></p>

4. Ingresa el usuario y contraseña del dispositivo para iniciar sesión.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-login.png" alt="pir" width={800} height="auto" /></p>

#### Conectar a una red Wi-Fi

1. Haz clic en `Network > Wireless`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless.png" alt="pir" width={800} height="auto" /></p>

2. Presiona `Scan` para buscar redes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless2.png" alt="pir" width={800} height="auto" /></p>

3. Selecciona tu red Wi-Fi.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless3.png" alt="pir" width={800} height="auto" /></p>

4. Introduce la contraseña, luego haz clic en `Submit` y `Save & Apply`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless4.png" alt="pir" width={800} height="auto" /></p>

El indicador superior mostrará verde sólido si la conexión Wi-Fi es exitosa.

### Conexión Celular (versión 4G)

1. Inserta una tarjeta SIM en la ranura Nano-SIM.

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/%E6%8F%92%E5%9B%BE-01.jpg" alt="pir" width={666} height="auto" /></p>

2. Ingresa a la página Luci > `Network > Cellular`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/4g1.png" alt="pir" width={800} height="auto" /></p>

3. Configura el APN, luego haz clic en `Save & Apply`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/4g3.png" alt="pir" width={800} height="auto" /></p>

:::tip
Para reducir el consumo de datos, revisa: [Modo de Ahorro de Datos](https://wiki.seeedstudio.com/traffic_saving_config).
:::

### Configuración del Plan de Canal

Navega a `LoRa > Channel Plan`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP3.png" alt="pir" width={800} height="auto" /></p>

Selecciona la región y el plan de frecuencia.  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP4.png" alt="pir" width={800} height="auto" /></p>

Haz clic en `Save & Apply` para guardar.

### Comprobación del Estado del Gateway

#### Indicador LED

#### LED Indicator

<table><tr><th colspan="2" valign="top"><b>Modo</b></th><th colspan="1" valign="top"><b>Descripción</b></th></tr>
<tr><td colspan="1" rowspan="2" valign="top"><p></p><p></p><p>Verde</p></td><td colspan="1" valign="top">Fijo</td><td colspan="1" valign="top">Gateway conectado correctamente a Internet.</td></tr>
<tr><td colspan="1" valign="top">Parpadeo lento</td><td colspan="1" valign="top">Gateway iniciando.</td></tr>
<tr><td colspan="1" rowspan="3" valign="top"><p></p><p></p><p></p><p></p><p>Azul</p></td><td colspan="1" valign="top"><p></p><p>Fijo</p></td><td colspan="1" valign="top"><p>Listo para conexión.</p><p>Requiere configuración.</p></td></tr>
<tr><td colspan="1" valign="top">Parpadeo Lento</td><td colspan="1" valign="top">Modo de configuración, se cierra tras 5 minutos sin actividad.</td></tr>
<tr><td colspan="1" valign="top"><p></p><p>Parpadeo Rápido</p></td><td colspan="1" valign="top">Reinicio de fábrica tras mantener presionado el botón por 30s.</td></tr>
<tr><td colspan="1" valign="top"><p></p><p>Naranja</p></td><td colspan="1" valign="top"><p></p><p>Parpadeo lento</p></td><td colspan="1" valign="top">Actualizando firmware.<br/>No apagar ni desconectar</td></tr>
<tr><td colspan="1" valign="top"><p></p><p>Blanco</p></td><td colspan="1" valign="top"><p></p><p>Fijo</p></td><td colspan="1" valign="top">Gateway está en firmware de fábrica, se actualizará automáticamente<br/> al conectarse a Internet.</td></tr>
<tr><td colspan="1" rowspan="2" valign="top"><p></p><p>Rojo</p></td><td colspan="1" valign="top">Fijo</td><td colspan="1" valign="top">Problema de hardware o conexión a Internet fallida.</td></tr>
<tr><td colspan="1" valign="top">Parpadeo lento</td><td colspan="1" valign="top">No conectado al servidor LoRa (LNS).</td></tr>
</table>


#### Aplicación SenseCAP Mate

En la app SenseCAP Mate, el estado `Online` indica conexión exitosa del gateway.

## Vincular el Gateway

La app SenseCAP Mate permite configurar y administrar el dispositivo.

1. Descarga la app desde App Store o Google Play.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={600} height="auto" /></p>

2. Inicia sesión o regístrate.  

:::tip
Selecciona `Global` como ubicación del servidor. 
:::


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app-register.png" alt="pir" width={500} height="auto" /></p>

3. Haz clic en `+ > Agregar dispositivo`, escanea el código QR del gateway.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app2.png" alt="pir" width={500} height="auto" /></p>

4. Configura nombre y ubicación del dispositivo.

5. El gateway aparecerá en tu directorio de dispositivos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app3.png" alt="pir" width={380} height="auto" /></p>

## Conectar los Sensores SenseCAP

1. Haz clic en `+ > Agregar dispositivo`, escanea el código QR del sensor.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app2.png" alt="pir" width={500} height="auto" /></p>

2. En `Settings`, configura la plataforma y frecuencia (debe coincidir con la del gateway, por ejemplo US915).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app7.png" alt="pir" width={500} height="auto" /></p>

:::tip 
SenseCAP M2 Multi-Platform Gateway **no es compatible con la red Helium.**
:::

Para más configuraciones, consulta la documentación de sensores SenseCAP.

## Portal SenseCAP y App Mate

Ambos permiten revisar el estado del dispositivo y gestionarlo.

* [SenseCAP Mate App para iOS](https://apps.apple.com/cn/app/sensecap-mate/id1619944834)
* [SenseCAP Mate App para Android](https://install.appcenter.ms/orgs/seeed/apps/sensecap-mate/distribution_groups/public)
* [Portal Web SenseCAP](https://sensecap.seeed.cc/portal/)

### Información del Gateway

Consulta los detalles del gateway desde el portal o la app.    

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app8.png" alt="pir" width={700} height="auto" /></p>

### Datos del Sensor

Revisa los datos de tus sensores en cualquiera de las dos plataformas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app9.png" alt="pir" width={700} height="auto" /></p>
