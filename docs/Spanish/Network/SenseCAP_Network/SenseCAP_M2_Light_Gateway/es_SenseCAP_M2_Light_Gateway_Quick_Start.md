---
description: SenseCAP M2 Light Gateway Quick Start
title: Inicio Rápido del SenseCAP M2 Light Gateway
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Network/SenseCAP_Network/SenseCAP_M2_Light_Gateway/SenseCAP_M2_Light_Gateway_Quick_Start
last_update:
  date: 06/23/2025
  author: Guillermo
---

## **Paso 1: Conecta el SenseCAP M2**

Conecta la antena, el adaptador de corriente y el cable Ethernet (opcional) al hotspot y enciéndelo.

El **LED de encendido** se encenderá en **rojo** y, tras unos 15 segundos (el tiempo puede ser un poco mayor si usas PoE), el indicador superior parpadeará en **verde**, lo que indica que el hotspot está iniciando.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image1.png)

**Conexión PoE**

El SenseCAP M2 es compatible con PoE (Power over Ethernet) bajo el estándar IEEE 802.3 af. Necesitarás un switch PoE adicional que proporcione 40V–57V DC como equipo de suministro de energía (PSE), si tu módem/router no es compatible con PoE.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image2.png)

## **Paso 2: Conecta el SenseCAP M2 a la App**

- Instala las apps [Helium Wallet](https://docs.helium.com/wallets/helium-wallet-app) y **SenseCAP Hotspot** desde la tienda de aplicaciones correspondiente.

Crea una cuenta en la app **SenseCAP Hotspot**.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image3.png)

- Elige “**Helium**” y enlaza tu billetera Helium con la app SenseCAP Hotspot.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image4.png)![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image5.png)

- Haz clic en **"Onboard New Hotspot"** en la página de la billetera y selecciona "**SenseCAP M2**" para agregarlo.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image6.png)

- Presiona el botón del M2 durante 5 segundos hasta que el indicador azul parpadee lentamente para entrar en **modo de configuración**, y sigue las instrucciones de la app para conectarlo.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image7.png)![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image8.png)

**NOTA:** Asegúrate de seleccionar "**SenseCAP M2**" para el modelo Light Hotspot. Si hay varios dispositivos cerca, puedes identificar el tuyo con la dirección MAC de 6 caracteres debajo del nombre del hotspot.

- Configura la conexión Wi-Fi

Haz clic en “**Scan Networks**”, selecciona tu red Wi-Fi e ingresa la contraseña. También puedes elegir “**Use Ethernet Instead**” si ya estás usando cable Ethernet o una tarjeta SIM (en la versión 4G).

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image9.png)

## **Paso 3: Agrega el SenseCAP M2 a la Blockchain**

- Configura y confirma la ubicación de tu hotspot, luego agrégalo a la red blockchain de Helium.

**NOTA:** El **SenseCAP M2 Light Hotspot** ya incluye en su precio la **tarifa de activación de $40** y la **primera afirmación de ubicación de $10** (total de $50). Si cambias la ubicación posteriormente, deberás pagar **$10 USD** por cada nueva afirmación.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image10.png)![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image11.png)![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image12.png)

Ahora has añadido tu **SenseCAP M2 a la blockchain** (el indicador parpadeará en blanco), pero **tu dispositivo aún no proporciona cobertura Helium**. Por favor, continúa con el **Paso 4** para activar tu hotspot.

## **Paso 4: Activar el SenseCAP M2 Light Hotspot**

[![Cómo canjear la tarjeta de licencia SenseCAP](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/redeem.png)](https://www.youtube.com/watch?v=D59QTtMUKdM)

- Inicia sesión en el [Panel de Control SenseCAP](https://status.sensecapmx.cloud/#/login?redirect=/dashboard) usando la misma cuenta de la App SenseCAP Hotspot.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image13.png)

- Haz clic en **"Redeem License"** e ingresa el código de tu tarjeta de activación.

**IMPORTANTE:** No compartas tu código de activación con nadie.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image14.png)
![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image15.png)


- Haz clic en **Confirm**, y recibirás tu licencia activa.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image16.png)

- Haz clic en **Apply** y selecciona el hotspot que deseas activar.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image17.png) ![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image18.png)

- Una vez activado, tu hotspot comenzará a **proporcionar cobertura LoRaWAN en la red Helium**, y el **indicador se pondrá en verde**.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image19.png)


#### **Compra de Licencia desde el Panel SenseCAP** 

[![Cómo comprar licencia SenseCAP](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/purchase.png)](https://youtu.be/efkWlmRGWmU)

Si tu licencia ha expirado, puedes comprar una nueva directamente desde el [Panel de Control SenseCAP](https://status.sensecapmx.cloud/#/login?redirect=/dashboard) sin necesidad de una tarjeta física.

- Ingresa al panel, ve a la pestaña **License** y haz clic en **"Purchase License"**.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image20.png)

- Selecciona el plan de licencia y la cantidad deseada. Luego, haz clic en **Checkout**.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image21.png)

- Confirma tu orden y realiza el pago mediante **PayPal**.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image22.png)![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image23.png)

- Tu licencia aparecerá en la lista **License**.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image24.png)

- Haz clic en **Apply** y selecciona el hotspot al que deseas aplicar la licencia.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image25.png)
![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image26.png)

- Tu hotspot ahora estará activado y **el indicador se pondrá en verde**, indicando que ya proporciona cobertura Helium LoRaWAN.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image27.png)

