---
description: SenseCAP M1 FAQ
title: Preguntas Frecuentes SenseCAP M1
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_FAQ
last_update:
  date: 06/21/2025
  author: Guillermo
---

**¿Cómo encuentro el ID MAC de ETH o Wi-Fi?**
------------------------------------------

El ID MAC está ubicado en la etiqueta inferior del Hotspot, como se muestra a continuación. Verás tanto el ID MAC de ETH como de Wi-Fi.

![SenseCAP M1 Mac-ID](https://www.sensecapmx.com/wp-content/uploads/2022/07/mac-ids.png)

* * *

**¿Cómo encuentro el número de serie (SN) en el dispositivo?**
--------------------------------------------------------

El número de serie está ubicado en la etiqueta inferior del Hotspot, como se muestra a continuación.

![SenseCAP M1 Número de Serie](https://www.sensecapmx.com/wp-content/uploads/2022/07/sn.webp)

* * *

**¿Cuál es la diferencia entre las versiones de 2G / 4G / 8G de RAM?**
----------------------------------------------------------------

2G / 4G / 8G hace referencia a la memoria RAM (memoria de acceso aleatorio) del Raspberry Pi 4 en el SenseCAP M1. Para la función de hotspot, no hay diferencia entre las distintas cantidades de RAM. Además, en la tienda en línea de Seeed, no se puede elegir la RAM al comprar SenseCAP M1; la distribución será aleatoria según el stock.

* * *

**¿Cómo puedo saber qué versión de RAM tengo?**
------------------------------------------------

Puedes identificarlo por el nombre del modelo. M1-X, donde X se refiere a la RAM. Por ejemplo, M1-2915 tiene 2GB de RAM, mientras que M1-4915 tiene 4GB de RAM.

* * *

**¿Por qué mi SenseCAP M1 no detecta otros hotspots de Helium?**
--------------------------------------------------------------------

Algunas posibles razones que causan señales RF bajas y corta distancia de transmisión en los hotspots Helium incluyen:

* Obstáculos como edificios, montañas y bosques en entornos densos
* Posibles interferencias electromagnéticas, interferencias de línea de vista, interferencias en la zona Fresnel o interferencias RF alrededor de ciudades
* Condiciones climáticas
* Margen operativo del sistema, sombreado o interferencias de enlace (Link Badger)

* * *

**¿Por qué mis ganancias/recompensas en SenseCAP M1 no son las esperadas?**
--------------------------------------------------------------------

El mecanismo de ganancias y recompensas es complejo. Mientras la configuración de tu hotspot sea correcta, esté bien ubicado, no tenga estado de retransmisión y la conexión a Internet sea estable, deberías estar bien.  
Si tienes dudas sobre el mecanismo, te recomendamos discutirlo en el canal de Helium para obtener más explicaciones. La **[documentación de Helium](https://docs.helium.com/)** también es útil para aprender más.

* * *

**¿Cómo mejorar las señales RF del SenseCAP M1?**
-------------------------------------------------

Configura y coloca tu dispositivo en un ambiente amplio y libre de obstáculos (por ejemplo, cerca de una ventana o coloca la antena en el exterior, como en el techo).

* * *

**¿Cuántos voltios aproximadamente consume el SenseCAP M1?**
---------------------------------------------------------------------------

Aproximadamente 5W, similar al consumo eléctrico de una bombilla común.

* * *

**¿Cuál es la distancia recomendada entre gateways?**
------------------------------------------------------

Los hotspots no deben instalarse demasiado cerca unos de otros. Una buena regla general es mantener una distancia mínima de 300 a 500 metros entre hotspots; aunque esto puede variar según el entorno (en ciudades densas puede ser menor, y en zonas rurales mayor).

* * *

**¿Existen cargos adicionales para configurar el SenseCAP M1?**
----------------------------------------------

El dispositivo incluye una tarifa de activación cubierta de $40 USD para configurar el SenseCAP M1 y una tarifa de $10 USD para establecer la ubicación del SenseCAP M1 en la aplicación Helium.

Solo pagarás tarifas adicionales si cambias la ubicación después de la primera vez, lo cual cuesta aproximadamente $10 USD. Para información detallada sobre tarifas, consulta la página de tarifas de transacción de Helium.

* * *

**¿El SenseCAP M1 soporta conexión a servidores de terceros diferentes a Helium?**
--------------------------------------------------------------------------------

No, el gateway LoRaWAN SenseCAP M1 solo es compatible con el servidor de red Helium.

* * *

**¿El SenseCAP M1 soporta PoE (Power over Ethernet)?**
---------------------------------

No. Se utiliza un adaptador de corriente de 5V-3A para alimentar la unidad a través del conector Type-C junto al puerto Ethernet. Necesitarás un inyector y divisor PoE para usar PoE en el SenseCAP M1.

* * *

**Como gateway de interior, ¿puede usarse en exteriores?**
--------------------------------------------------

SenseCAP M1 es un gateway para interior, por lo que no está diseñado para resistir ambientes exteriores adversos y no debe colocarse en exteriores sin protección adicional.

* * *

**¿Los sensores LoRaWAN de SenseCAP son compatibles con el Gateway SenseCAP M1?**
---------------------------------------------------------------------

Sí. Mientras los nodos finales (es decir, la serie de sensores LoRaWAN de SenseCAP) sean compatibles y estén registrados en la red Helium, pueden funcionar con el Gateway SenseCAP M1.

* * *

**¿Los hotspots SenseCAP M1 son hotspots completos o light hotspots?**
------------------------------------------------------

El SenseCAP M1 LoRaWAN Indoor Gateway es un hotspot completo que soporta tanto POC como transferencia de datos.

* * *

**¿Habrá un hotspot para uso en exteriores?**
--------------------------------------------

Actualmente, el SenseCAP M1 es solo para uso en interiores, pero consideraremos la solicitud.

* * *

**¿Habrá también light hotspots?**
-----------------------------------------

Sí, el SenseCAP M2 Data Only es un lightspot.

* * *

**¿Habrá versiones con frecuencias AS923, AU915, IN865 y otras?**
-------------------------------------------------------------

Actualmente solo están disponibles US915 (con certificación FCC) y EU868 (con certificación CE). Aún no se soportan otras frecuencias. Hemos detectado la necesidad de diferentes frecuencias. La especificación del hardware es para el rango 902MHz ~ 928MHz / 863MHz ~ 870MHz, por lo que es configurable para distintas frecuencias dentro de este rango.  
SIN EMBARGO, después de la configuración, el producto debe pasar certificaciones específicas para poder entrar a distintos mercados.

Actualmente nuestro equipo se enfoca en la cadena de suministro y manufactura para US915 y EU868.

* * *

**¿Todos los gateways LoRaWAN SenseCAP son hotspots Helium?**
------------------------------------------------------

Si buscas SenseCAP, encontrarás otros gateways con ese nombre. Ten en cuenta que no todos los gateways con la marca SenseCAP son hotspots Helium; el SenseCAP M1 LoRaWAN Indoor Gateway es el único que soporta la red Helium por ahora.

* * *

**Si compro el hotspot en Europa y lo llevo a India, ¿se cambiará automáticamente a 865 MHz?**
-----------------------------------------------------------------------------------------

Sí, se cambiará automáticamente. Pero solo tenemos certificaciones CE y FCC, no contamos con la certificación BIS requerida en India.

* * *

**¿El SenseCAP M1 ya aparece en la app Helium?**
-----------------------------------------------------

Sí, el SenseCAP M1 ya está agregado en la app Helium.

* * *

**¿Qué tipo de conector de antena tiene el SenseCAP M1?**
---------------------------------------------------------

El SenseCAP M1 tiene conector RP-SMA hembra, y la antena tiene conector RP-SMA macho. Nuestra antena de fibra de vidrio en stock tiene conector N macho, con cable LMR200 provisto que tiene conector N hembra y RP-SMA macho.

![Conexión de antena SenseCAP M1](https://www.sensecapmx.com/wp-content/uploads/2022/06/connectors-1.png)

* * *

**¿Qué voltaje/amperaje usa el dispositivo?**
---------------------------------------------

El voltaje es de 5V DC.

* * *

**¿Conoces las medidas del PCB?**
-------------------------------------------------

El tamaño del dispositivo es 154\*100\*44 mm y pesa 370 g.

* * *

**Algunas personas no quieren 5 GHz en su zona, ¿se puede apagar el Wi-Fi directamente en el hotspot?**
---------------------------------------------------------------------------------------------------------

Este dispositivo es un transmisor Wi-Fi. Si no está conectado al AP, dejará de emitir ondas electromagnéticas automáticamente.

* * *

**¿Por qué mi SenseCAP M1 no entra al modo de parpadeo lento al presionar el botón?**
---------------------------------------------------------------------------------------

Mantén presionado el botón entre 6 y 10 segundos sin soltar. A veces es necesario presionar fuerte el botón en la parte trasera. Si necesitas soporte adicional, visítanos en Discord.  
Ten en cuenta que si el SenseCAP M1 está actualizando el firmware, presionar el botón puede no cambiar el LED azul a modo parpadeo lento, prueba de nuevo en 10-15 minutos.

* * *

**¿Cuándo sale el SenseCAP M1 del modo de parpadeo lento?**
---------------------------------------------------

El modo de parpadeo lento dura alrededor de 10 minutos y luego vuelve al modo LED constante o parpadeo rápido.

Si el SenseCAP M1 sale del modo de parpadeo lento mientras configuras, presiona el botón durante 5-10 segundos para regresar al modo de parpadeo lento y reinicia tu configuración.

* * *

**¿Por qué el LED azul siempre está en modo parpadeo rápido?**
---------------------------------------------------------

Esto significa que el SenseCAP M1 no está conectado a Internet o está intentando conectarse a la red P2P de Helium. Después de cada arranque, puede tomar de 5 a 20 minutos conectar con la red P2P de Helium, dependiendo de la calidad de tu red.

Si el SenseCAP M1 lleva más de 20 minutos encendido, revisa el estado de tu red y asegúrate de que el cable Ethernet o el Wi-Fi estén funcionando correctamente.

Al usar cable Ethernet, presiona firmemente el cable en el puerto hasta oír un “clic” para asegurar que no esté flojo ni desconectado.

* * *

**Pasos para verificar la versión del firmware de tu Hotspot:**
-------------------------------------------------

1. Mantén presionado el botón Bluetooth del Hotspot entre 6 y 10 segundos. El LED azul comenzará a parpadear lentamente. Luego, empareja tu hotspot.
2. Ejecuta el diagnóstico y localiza la versión del firmware. Alternativamente, puedes verificarlo en el Dashboard de SenseCAP si estás registrado.

![Versión de firmware - Paso 1](https://www.sensecapmx.com/wp-content/uploads/2022/06/image-1.png)

![Versión de firmware - Paso 2](https://www.sensecapmx.com/wp-content/uploads/2022/06/image-1-1.png)

![Versión de firmware - Paso 3](https://www.sensecapmx.com/wp-content/uploads/2022/06/image-2.png)

* * *

**¿Cuál es la potencia de transmisión del SenseCAP M1 sin la antena?**
--------------------------------------------------------------

<table style={{borderCollapse: 'collapse', width: '100%', height: 125}} border={1}><tbody><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}><strong>Plan de Frecuencia</strong></td><td style={{width: '33.3333%', height: 21}}>EU868</td><td style={{width: '33.3333%', height: 21}}>US915</td></tr><tr style={{height: 20}}><td style={{width: '33.3333%', height: 20}}><strong>Certificación</strong></td><td style={{width: '33.3333%', height: 20}}>CE</td><td style={{width: '33.3333%', height: 20}}>FCC</td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}><strong>Potencia máx. por regulación</strong></td><td style={{width: '33.3333%', height: 21}}>14 dBm</td><td style={{width: '33.3333%', height: 21}}>30 dBm</td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}><strong>Potencia de transmisión con antena</strong></td><td style={{width: '33.3333%', height: 21}}>13.487 dBm</td><td style={{width: '33.3333%', height: 21}}>26.7 dBm</td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}><strong>Potencia de transmisión sin antena</strong></td><td style={{width: '33.3333%', height: 21}}>10.687 dBm</td><td style={{width: '33.3333%', height: 21}}>25 dBm</td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}><strong>Ganancia de antena incluida</strong></td><td style={{width: '33.3333%', height: 21}}>2.8 dBi</td><td style={{width: '33.3333%', height: 21}}>2.6 dBi</td></tr></tbody></table>


* * *

**¿Cuál es la lógica de control automático del ventilador (FAN)?**
---------------------------------------

![Lógica de control automático del ventilador](https://www.sensecapmx.com/wp-content/uploads/2022/07/fan-control-logic-1.png)

* * *

**¿Qué debo hacer si el uso de la tarjeta SD supera el 85%?**
------------------------------------------------------

Normalmente no necesitas preocuparte por el uso de la tarjeta SD, ya que el sistema la gestiona automáticamente.  
Si notas que no se recupera tras alcanzar el uso máximo, reinicia el dispositivo para que vuelva a su estado normal.

Si el problema persiste o el soporte técnico te sugiere reiniciar el bloque, puedes hacer clic [aquí](#) para aprender cómo "resetear los bloques".