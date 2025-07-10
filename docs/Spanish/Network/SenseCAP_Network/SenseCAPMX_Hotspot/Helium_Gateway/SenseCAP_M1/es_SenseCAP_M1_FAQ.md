---
description: SenseCAP M1 FAQ
title: Preguntas y Respuestas SenseCAP M1 
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/SenseCAP_M1_FAQ
last_update:
  date: 02/14/2025
  author: Guillermo
---

**¿Cómo encuentro la dirección MAC de ETH o Wi-Fi?**
----------------------------------------------------

La dirección MAC se encuentra en la etiqueta inferior del Hotspot, como se muestra a continuación. Verás tanto la MAC de Ethernet (ETH) como la de Wi-Fi.

![SenseCAP M1 Mac-ID](https://www.sensecapmx.com/wp-content/uploads/2022/07/mac-ids.png)

* * *

**¿Cómo encuentro el número de serie (SN) del dispositivo?**
------------------------------------------------------------

El número de serie se encuentra en la etiqueta inferior del Hotspot, como se muestra a continuación.

![SenseCAP M1 Serial Number](https://www.sensecapmx.com/wp-content/uploads/2022/07/sn.webp)

* * *

**¿Cuál es la diferencia entre las versiones de 2G / 4G / 8G de RAM?**
----------------------------------------------------------------------

2G / 4G / 8G hacen referencia a la cantidad de memoria RAM del Raspberry Pi 4 en el SenseCAP M1.  
Para la función de hotspot, **no hay diferencia entre las versiones de RAM**.

Además, en la tienda en línea de Seeed, **no es posible elegir la versión de RAM al comprar el SenseCAP M1**. La distribución se realiza de forma aleatoria según el inventario disponible.

* * *

**¿Cómo saber qué versión de RAM tengo?**
------------------------------------------

Puedes saberlo por el nombre del modelo. M1-X, donde "X" indica la RAM.  
Por ejemplo: `M1-2915` → 2GB de RAM, `M1-4915` → 4GB de RAM

* * *

**¿Por qué mi SenseCAP M1 no puede hacer *witnessing* a otros hotspots de Helium?**
-----------------------------------------------------------------------------------

Algunas posibles razones para señales de RF débiles y corto alcance en los Hotspots Helium incluyen:

* Obstáculos como edificios, montañas o árboles en ambientes densos  

* Posible interferencia electromagnética, interferencia visual, zona de Fresnel o interferencia de RF en zonas urbanas  

* Condiciones climáticas adversas  

* Margen operativo del sistema, efecto de sombra o problemas de enlace (*Link Budget*)

* * *

**¿Por qué mis recompensas del SenseCAP M1 no son las esperadas?**
-------------------------------------------------------------------

El sistema de recompensas y ganancias de Helium es complejo.  
Mientras tu Hotspot esté correctamente configurado, en buena ubicación, no tenga estado de "relayed" y esté bien conectado a Internet, **todo debería estar bien**.

Si aún tienes dudas, puedes consultar en el canal de Helium para recibir explicaciones adicionales. También puedes leer la **[documentación oficial de Helium](https://docs.helium.com/)** para aprender más.

* * *

**¿Cómo mejorar las señales RF del SenseCAP M1?**
--------------------------------------------------

Coloca el dispositivo en un lugar amplio y sin obstáculos, como cerca de una ventana o con la antena en el exterior (por ejemplo, en el techo).

* * *

**¿Cuántos voltios consume aproximadamente el SenseCAP M1?**
-------------------------------------------------------------

Alrededor de **5W**, lo mismo que una bombilla común.

* * *

**¿Cuál es la distancia recomendada entre gateways?**
-----------------------------------------------------

Los Hotspots **no deben colocarse demasiado cerca entre sí**.  
Una regla general es dejar entre **300 y 500 metros de distancia** entre Hotspots.  
Esto puede variar dependiendo del entorno: más cerca en ciudades densas y más lejos en zonas rurales.

* * *

**¿Hay tarifas adicionales para configurar el SenseCAP M1?**
-------------------------------------------------------------

Sí. El dispositivo incluye una tarifa de activación de **\$40 USD**, y una tarifa de **\$10 USD** para establecer la ubicación en la app de Helium.

Solo pagarás tarifas adicionales si vuelves a establecer una nueva ubicación después de la primera vez, lo cual cuesta aproximadamente \$10 USD. Consulta la página de **tarifas de transacción de Helium** para más detalles.

* * *

**¿El SenseCAP M1 puede conectarse a un servidor que no sea Helium?**
---------------------------------------------------------------------

**No.** El gateway SenseCAP M1 LoRaWAN **solo es compatible con el servidor de la red Helium**.

* * *

**¿El SenseCAP M1 admite PoE?**
-------------------------------

No. El dispositivo utiliza un adaptador de corriente de **5V-3A** a través del conector **Type-C** junto al puerto Ethernet.  
Para utilizar PoE en el SenseCAP M1, necesitarás un **inyector PoE y un divisor (splitter)**.

* * *

**Como gateway de interior, ¿se puede usar en exteriores?**
-----------------------------------------------------------

El SenseCAP M1 está diseñado para uso en interiores.  
**No está preparado para resistir entornos exteriores hostiles**, por lo que **no debe colocarse al aire libre sin protección adicional**.

* * *

**¿Los sensores LoRaWAN de SenseCAP son compatibles con el gateway SenseCAP M1?**
----------------------------------------------------------------------------------

Sí. Siempre que los nodos finales (por ejemplo, los sensores SenseCAP LoRaWAN) sean compatibles y estén registrados en la **Red Helium**, pueden trabajar con el gateway SenseCAP M1.

* * *

**¿El SenseCAP M1 es un hotspot completo o un light hotspot?**
--------------------------------------------------------------

El SenseCAP M1 LoRaWAN Indoor Gateway es un **hotspot completo**, compatible con **Proof of Coverage (PoC)** y **transferencia de datos**.

* * *

**¿Habrá un hotspot para uso exterior?**
----------------------------------------

Actualmente, el SenseCAP M1 es solo para uso en interiores, pero **se está considerando la solicitud** de un modelo exterior.

* * *

**¿Habrá también light hotspots?**
----------------------------------

Sí. El **SenseCAP M2 Data Only** es un **light hotspot**.

* * *

**¿Habrá versiones para AS923, AU915, IN865 y otras frecuencias?**
------------------------------------------------------------------

Por ahora, solo están disponibles las versiones **US915 (con certificación FCC)** y **EU868 (con certificación CE)**. Otras frecuencias aún no son compatibles. El hardware admite un rango de frecuencias entre **902–928 MHz** y **863–870 MHz**, por lo tanto, es **configurable**,  
pero **requiere certificación específica** para su uso en cada región.

Actualmente, el equipo se está enfocando en la fabricación y cadena de suministro de **US915 y EU868**.

* * *

**¿Todos los gateways LoRaWAN de SenseCAP son hotspots de Helium?**
-------------------------------------------------------------------

Al buscar "SenseCAP", verás que hay varios gateways bajo esa marca.  
**No todos los gateways SenseCAP son compatibles con la red Helium**.  
El **SenseCAP M1 LoRaWAN Indoor Gateway** es el **único** que **soporta la red Helium actualmente**.

* * *

**Si compro el hotspot en Europa y lo llevo a la India, ¿cambiará automáticamente a 865 MHz?**
----------------------------------------------------------------------------------------------

Sí, cambiará automáticamente.  
Pero **solo tiene certificación CE y FCC**, **no cuenta con certificación BIS**, que **es requerida en India**.

* * *

**¿El SenseCAP M1 está listado en la app de Helium?**
-----------------------------------------------------

Sí, el **SenseCAP M1 ya está integrado en la app de Helium**.

* * *

**¿Qué tipo de conector de antena tiene el SenseCAP M1?**
----------------------------------------------------------

El SenseCAP M1 tiene un conector **RP-SMA hembra**, y la antena tiene un conector **RP-SMA macho**.  
Las antenas de fibra de vidrio en inventario tienen conector **N macho**, junto con un cable **LMR200** que tiene conectores **N hembra y RP-SMA macho**.

![Conexión de antena SenseCAP M1](https://www.sensecapmx.com/wp-content/uploads/2022/06/connectors-1.png)

* * *

**¿Qué voltaje/corriente utiliza el dispositivo?**
---------------------------------------------------

Funciona con un voltaje de **5V DC**.

* * *

**¿Conoces el tamaño/medidas del PCB?**
---------------------------------------

El tamaño del dispositivo es **154 × 100 × 44 mm**, y su peso es de **370g**.

* * *

**A algunas personas no les gusta el Wi-Fi de 5GHz, ¿se puede apagar el Wi-Fi del dispositivo?**
------------------------------------------------------------------------------------------------

Este dispositivo es un transmisor Wi-Fi.  
Si **no está conectado a un punto de acceso (AP)**, **dejará de emitir señales electromagnéticas automáticamente**.

* * *

**¿Por qué mi SenseCAP M1 no entra en el modo de parpadeo lento al presionar el botón?**
-----------------------------------------------------------------------------------------

Mantén presionado el botón durante **6 a 10 segundos sin soltarlo**. A veces es necesario presionarlo con fuerza en la parte trasera del dispositivo.  
Si necesitas soporte adicional, puedes visitarnos en **Discord**. Nota: si el SenseCAP M1 está **actualizando su firmware**, al presionar el botón **puede que no cambie el LED azul al modo de parpadeo lento**. En ese caso, **intenta de nuevo después de 10–15 minutos**.

* * *

**¿Cuándo sale el SenseCAP M1 del modo de parpadeo lento?**
-----------------------------------------------------------

El modo de parpadeo lento dura aproximadamente **10 minutos**. Luego, el LED volverá al estado **constante** o al **modo de parpadeo rápido**.

Si el SenseCAP M1 **sale del modo de parpadeo lento durante la configuración**, presiona nuevamente el botón durante **5–10 segundos** para regresar al modo de parpadeo lento y **reinicia la configuración**.

* * *

**¿Por qué el LED azul siempre permanece en modo de parpadeo rápido?**
----------------------------------------------------------------------

Esto indica que el SenseCAP M1 **no está conectado a Internet** o **está intentando conectarse a la red P2P de Helium**.  
Después de cada encendido, el dispositivo puede tardar entre **5 y 20 minutos** en conectarse a Helium, dependiendo de la calidad de tu red.

Si el dispositivo lleva más de **20 minutos encendido**, verifica el estado de tu red: Asegúrate de que el cable Ethernet o la conexión Wi-Fi funcionen correctamente. Si usas cable Ethernet, **presiónalo firmemente hasta escuchar un "clic"**, asegurando que **no esté flojo ni defectuoso**.

* * *

**Pasos para verificar la versión del firmware de tu Hotspot:**
---------------------------------------------------------------

1. Mantén presionado el botón Bluetooth del Hotspot durante **6–10 segundos**, el LED azul parpadeará lentamente.

2. Empareja tu Hotspot.

3. Ejecuta **Diagnóstico** y busca la **versión del firmware del Hotspot**. También puedes verificar la versión de firmware en el **Dashboard de SenseCAP** una vez registrado.

![SenseCAP M1 Firmware Version](https://www.sensecapmx.com/wp-content/uploads/2022/06/image-1.png)

![SenseCAP M1 Firmware Version Step2](https://www.sensecapmx.com/wp-content/uploads/2022/06/image-1-1.png)

![SenseCAP M1 Firmware Version Step3](https://www.sensecapmx.com/wp-content/uploads/2022/06/image-2.png)

* * *

**¿Cuál es la potencia de transmisión del SenseCAP M1 sin la antena?**
----------------------------------------------------------------------

<table style={{borderCollapse: 'collapse', width: '100%', height: 125}} border={1}><tbody><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}><strong>Plan de Frecuencia</strong></td><td style={{width: '33.3333%', height: 21}}>EU868</td><td style={{width: '33.3333%', height: 21}}>US915</td></tr><tr style={{height: 20}}><td style={{width: '33.3333%', height: 20}}><strong>Certificación</strong></td><td style={{width: '33.3333%', height: 20}}>CE</td><td style={{width: '33.3333%', height: 20}}>FCC</td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}><strong>Potencia Máx. Regulada</strong></td><td style={{width: '33.3333%', height: 21}}>14 dBm</td><td style={{width: '33.3333%', height: 21}}>30 dBm</td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}><strong>Potencia con Antena de Fábrica</strong></td><td style={{width: '33.3333%', height: 21}}>13.487 dBm</td><td style={{width: '33.3333%', height: 21}}>26.7 dBm</td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}><strong>Potencia sin Antena</strong></td><td style={{width: '33.3333%', height: 21}}>10.687 dBm</td><td style={{width: '33.3333%', height: 21}}>25 dBm</td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}><strong>Ganancia de la Antena de Fábrica</strong></td><td style={{width: '33.3333%', height: 21}}>2.8 dBi</td><td style={{width: '33.3333%', height: 21}}>2.6 dBi</td></tr></tbody></table>


* * *

**¿Cuáles son las reglas de control automático del ventilador?**
----------------------------------------------------------------

![Lógica de Control Automático del Ventilador SenseCAP M1](https://www.sensecapmx.com/wp-content/uploads/2022/07/fan-control-logic-1.png)

* * *

**¿Qué debo hacer si el uso de la tarjeta SD supera el 85%?**
--------------------------------------------------------------

Normalmente **no necesitas preocuparte** por el uso de la tarjeta SD, ya que el sistema la **gestiona automáticamente**.  
Si notas que la tarjeta SD **no se recupera** del uso elevado, puedes **reiniciar el dispositivo** para que vuelva a la normalidad.

Si aún así **no se resuelve** el problema, o si el soporte técnico **te sugiere restablecer los bloques**, puedes hacer clic [aquí](https://www.sensecapmx.com/support/) para aprender cómo **"resetear los bloques"**.
