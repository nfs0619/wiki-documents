---
description: SenseCAP M2 Light Gateway Quick Start
title: Inicio Rápido del SenseCAP M2 Light Gateway
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Light/Quick_Start
last_update:
  date: 06/23/2025
  author: Guillermo
---

## **Paso 1: Conectar el SenseCAP M2**

Conecta la antena, el adaptador de corriente y el cable Ethernet (opcional) al hotspot y enciéndelo.

El **LED de encendido** se iluminará en **rojo**, y después de unos 15 segundos (si usas PoE este tiempo puede ser un poco mayor), el indicador en la parte superior parpadeará en **verde**, lo que indica que el hotspot está arrancando.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image1.png)

**Conexión PoE**

SenseCAP M2 es compatible con PoE (alimentación por Ethernet) y cumple con el estándar IEEE 802.3 af. Si tu módem/enrutador no soporta PoE, necesitarás un switch PoE adicional que proporcione alimentación DC de 40V-57V como dispositivo fuente de energía (PSE).

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image2.png)

## **Paso 2: Conectar SenseCAP M2 a la APP**

- Instala la [App Helium Wallet](https://docs.helium.com/wallets/helium-wallet-app) y la App SenseCAP Hotspot.  

Crea una cuenta para usar la App SenseCAP Hotspot.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image3.png)

- Selecciona “Helium” y vincula tu billetera Helium con la App SenseCAP Hotspot.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image4.png)![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image5.png)

- En la página de la billetera, haz clic en "Onboard New Hotspot" y selecciona “SenseCAP M2” para agregarlo.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image6.png)

- Presiona el botón del M2 durante 5 segundos hasta que el LED azul parpadee lentamente para entrar en modo de configuración y sigue las instrucciones de la app.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image7.png)![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image8.png)

**NOTA:** Asegúrate de elegir “**SenseCAP M2″** para el SenseCAP M2 Light Hotspot. Si hay más de un hotspot cerca, puedes identificar el tuyo con la dirección MAC de 6 caracteres debajo del nombre.

- Configura la conexión Wi-Fi 

Haz clic en “Scan Networks”, selecciona tu red Wi-Fi e ingresa la contraseña; o selecciona “Use Ethernet Instead” si ya estás usando cable Ethernet o SIM (solo para la versión 4G).

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image9.png)

## **Paso 3: Añadir SenseCAP M2 a la Blockchain**

- Establece y confirma la ubicación de tu hotspot y agrégalo a la blockchain.

**NOTA:** El SenseCAP M2 Light Hotspot incluye en el precio los \$40 de activación de red Helium y \$10 por la primera asignación de ubicación (total de \$50). Puedes cambiar de ubicación después, pero deberás pagar \$10 cada vez que lo hagas.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image10.png)![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image11.png)![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image12.png)

Ahora has agregado tu SenseCAP M2 a la blockchain (el indicador parpadeará en blanco), pero el dispositivo aún **no proporciona cobertura Helium**, continúa con el paso 4 para activarlo.

## **Paso 4: Activar el SenseCAP M2 Light Hotspot**

[![Cómo canjear la licencia SenseCAP](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/redeem.png)](https://www.youtube.com/watch?v=D59QTtMUKdM)




- Inicia sesión en el [Panel de SenseCAP](https://status.sensecapmx.cloud/#/login?redirect=/dashboard) con tu cuenta de la App SenseCAP Hotspot.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image13.png)

- Haz clic en **Redeem License** e ingresa el código de tu tarjeta de canje.

**NOTA:** No compartas tu código de canje con otras personas.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image14.png)
![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image15.png)

- Haz clic en "Confirm" y recibirás tu licencia.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image16.png)

- Haz clic en **Apply** y selecciona el hotspot que deseas activar.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image17.png) ![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image18.png)

- Ahora tu hotspot comenzará a proporcionar cobertura Helium LoRaWAN, y el indicador del dispositivo se pondrá en verde.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image19.png)


#### **Comprar licencia para SenseCAP M2 Light Hotspot**

[![Cómo comprar licencia SenseCAP](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/purchase.png)](https://youtu.be/efkWlmRGWmU)

Cuando tu licencia haya expirado, puedes comprar una nueva directamente desde el [Panel SenseCAP](https://status.sensecapmx.cloud/#/login?redirect=/dashboard) y aplicarla al dispositivo sin necesidad de adquirir otra tarjeta de canje.

- En la página de licencias, haz clic en **Purchase License**

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image20.png)

- Selecciona el plan de licencia y la cantidad, luego haz clic en "Checkout"

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image21.png)

- Confirma tu pedido y paga con PayPal

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image22.png)![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image23.png)

- Luego podrás ver tu licencia en la lista de **Licenses**

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image24.png)

- Haz clic en **Apply** y selecciona el hotspot que deseas activar.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image25.png)
![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image26.png)

- Entonces tu hotspot comenzará a proporcionar cobertura Helium LoRaWAN, y el indicador se pondrá en verde.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image27.png)

