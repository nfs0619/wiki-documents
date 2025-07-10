---
description: Integrate into Azure IoT Hub
title: Integrate into Azure IoT Hub
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Integrate-into-Azure-IoT-Hub
last_update:
  date: 06/12/2025
  author: Guillermo
---
# Integración con Azure IoT Hub

El Internet de las Cosas (IoT) es una red de dispositivos físicos que se conectan e intercambian datos con otros dispositivos y servicios a través de Internet u otra red. Actualmente hay más de diez mil millones de dispositivos conectados en el mundo y se agregan más cada año. Cualquier cosa que pueda ser equipada con los sensores y software necesarios puede conectarse a Internet.

Azure IoT Hub es un servicio gestionado alojado en la nube que actúa como un centro central de mensajes para la comunicación entre una aplicación IoT y sus dispositivos conectados. Puedes conectar millones de dispositivos y sus soluciones backend de manera confiable y segura. Casi cualquier dispositivo puede conectarse a un IoT Hub.

Se soportan varios patrones de mensajería, incluyendo telemetría de dispositivo a la nube, subida de archivos desde dispositivos y métodos de solicitud-respuesta para controlar tus dispositivos desde la nube. IoT Hub también soporta monitoreo para ayudarte a rastrear la creación de dispositivos, conexiones y fallos.

- Para más información sobre el uso de Microsoft Azure IoT Hub, consulta [aquí](https://docs.microsoft.com/en-us/azure/iot-hub/iot-concepts-and-iot-hub).

En este capítulo, necesitarás cambiar a [Microsoft Azure](https://portal.azure.com/#home). Después, tal vez necesites registrarte para obtener una cuenta gratuita. Un nuevo [registro de cuenta](https://azure.microsoft.com/en-gb/free/?v=exp&adobe_mc_sdid=SDID%3D15AD43418726D152-6CD00D48F523D667%7CMCORGID%3DEA76ADE95776D2EC7F000101%40AdobeOrg%7CTS%3D1646905124&adobe_mc_ref=https%3A%2F%2Fazure.microsoft.com%2Fzh-cn%2Ffree%2F) te otorgará un crédito gratuito de $200, que puedes usar completamente para completar nuestros procedimientos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/143.png" /></div>

## Crear grupos de recursos

Un grupo de recursos es un contenedor que agrupa recursos relacionados para una solución Azure. El grupo de recursos puede incluir todos los recursos para la solución, o solo aquellos recursos que deseas administrar como grupo. Tú decides cómo asignar los recursos a los grupos basado en lo que tiene más sentido para tu organización. Generalmente, agrupa recursos que comparten el mismo ciclo de vida para que puedas desplegarlos, actualizarlos y eliminarlos fácilmente como grupo.

Primero, por favor inicia sesión en el [portal de Azure](https://portal.azure.com/) con tu cuenta registrada.

Selecciona **Grupos de recursos**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/144.png" /></div>

Selecciona **Crear**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/145.png" /></div>

Ingresa los siguientes valores:

- **Suscripción**: Selecciona tu suscripción de Azure.

- **Grupo de recursos**: Ingresa un nombre nuevo para el grupo de recursos.

- **Región**: Selecciona una ubicación de Azure, como Norte de Europa.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/146.png" /></div>

Selecciona **Revisar + Crear**.

Selecciona **Crear**. Tomará unos segundos crear el grupo de recursos.

Selecciona **Actualizar** en el menú superior para refrescar la lista de grupos de recursos, y luego selecciona el grupo recién creado para abrirlo. O selecciona **Notificaciones** (el ícono de campana) en la parte superior, y luego selecciona **Ir al grupo de recursos** para abrir el grupo creado.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/147.png" /></div>

## Crear un IoT Hub en Microsoft Azure

Este paso describe cómo crear y gestionar un IoT Hub de Microsoft Azure utilizando el portal de Microsoft Azure. Desde la página principal de Azure, selecciona el botón **Crear un recurso**, y luego escribe *IoT Hub* en el campo de búsqueda del Marketplace.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/11.jpg" /></div>

Selecciona *IoT Hub* de los resultados de búsqueda, y luego haz clic en **Crear**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/12.jpg" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/13.jpg" /></div>

En la pestaña **Básico**, completa los campos de la siguiente manera:

- **Suscripción**: Selecciona la suscripción que deseas usar para tu hub.

- **Grupo de recursos**: Selecciona un grupo de recursos existente o crea uno nuevo. Para crear uno nuevo, selecciona **Crear nuevo** y escribe el nombre que deseas utilizar. Para usar uno existente, selecciónalo de la lista. Para más información, consulta [Administrar grupos de recursos de Azure Resource Manager](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal).

- **Región**: Selecciona la región en la que deseas ubicar tu hub. Elige la ubicación más cercana a ti. Algunas funciones, como [IoT Hub device streams](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-device-streams-overview), solo están disponibles en regiones específicas. Para estas funciones limitadas, debes seleccionar una de las regiones compatibles.

- **Nombre del IoT Hub**: Ingresa un nombre para tu hub. Este nombre debe ser único a nivel global, con una longitud entre 3 y 50 caracteres alfanuméricos. El nombre también puede incluir el carácter guion ('-').

:::note
Como el IoT Hub será accesible públicamente como un punto DNS, asegúrate de no ingresar información sensible o identificable personalmente al nombrarlo.
:::
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/148.png" /></div>

Selecciona **Siguiente: Redes** para continuar con la creación de tu hub.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/149.png" /></div>

Selecciona **Siguiente: Administración** para continuar con la creación de tu hub.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/150.png" /></div>

Aquí puedes aceptar la configuración predeterminada. Si lo deseas, puedes modificar cualquiera de los siguientes campos:

Elige los puntos de conexión que los dispositivos pueden usar para conectarse a tu IoT Hub. Puedes seleccionar la opción predeterminada, **Acceso público**, o elegir **Acceso privado**. Para este ejemplo, acepta la opción predeterminada.

- **Nivel de precios y escalado**

Tu nivel seleccionado. Puedes elegir entre varios niveles, dependiendo de cuántas funciones necesites y cuántos mensajes envíes por día a través de tu solución. El nivel gratuito está destinado para pruebas y evaluación. Permite conectar hasta 500 dispositivos al hub y enviar hasta 8,000 mensajes diarios. Cada suscripción de Azure puede crear un IoT Hub en el nivel gratuito.

Si estás siguiendo una guía de inicio rápido para *IoT Hub device streams*, selecciona el nivel gratuito.

- **Unidades del IoT Hub**

La cantidad de mensajes permitidos por unidad al día depende del nivel de precios de tu hub. Por ejemplo, si deseas que el hub admita la entrada de 700,000 mensajes, debes elegir dos unidades del nivel S1. Para más detalles sobre las opciones de nivel, consulta [Elegir el nivel adecuado de IoT Hub](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-scaling).

- **Microsoft Defender para IoT**

Activa esta opción para añadir una capa adicional de protección contra amenazas para el IoT y tus dispositivos. Esta opción no está disponible para hubs en el nivel gratuito. Obtén más información sobre recomendaciones de seguridad para IoT Hub en Defender for IoT.

- **Control de acceso basado en roles**

Elige cómo se gestiona el acceso al IoT Hub: si se permiten políticas de acceso compartido o si solo se admite el control de acceso basado en roles (RBAC). Para más información, consulta [Controlar el acceso al IoT Hub usando Azure Active Directory](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-dev-guide-azure-ad-rbac).

- **Particiones de dispositivo a la nube**

Esta propiedad relaciona los mensajes de dispositivo a la nube con el número de lectores simultáneos de los mensajes. La mayoría de los hubs solo requieren cuatro particiones.

Selecciona **Siguiente: Etiquetas** para continuar con la siguiente pantalla.

Las etiquetas son pares nombre/valor. Puedes asignar la misma etiqueta a varios recursos y grupos de recursos para categorizarlos y consolidar la facturación. En este documento, no se agregarán etiquetas. Para más información, consulta [Usar etiquetas para organizar tus recursos de Azure](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/151.png" /></div>

Selecciona **Siguiente: Revisar + crear** para revisar tus selecciones. Verás una pantalla similar a esta, pero con los valores que elegiste al crear el hub.

Dejamos el resto de la configuración con los valores predeterminados y no realizamos modificaciones.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/33.jpg" /></div>

Selecciona **Crear** para iniciar la implementación de tu nuevo hub. La implementación tardará unos minutos mientras se crea el hub. Una vez finalizada, selecciona **Ir al recurso** para abrir el nuevo hub.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/16.jpg" /></div>

Puedes cambiar la configuración de un IoT Hub existente después de haberlo creado desde el panel de IoT Hub.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/17.jpg" /></div>

## Crear clave secreta compartida

Haz clic en **Agregar política de acceso compartido** y crea una nueva política de acceso con los siguientes permisos: **Lectura de registro**, **Escritura de registro**, **Conexión de dispositivo**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/35.jpg" /></div>

Después de crearla, se generarán automáticamente cuatro conjuntos de claves secretas. La que necesitamos copiar es la **Cadena de conexión primaria** (*Primary connection string*).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/154.png" /></div>

:::note
No compartas tu cadena de conexión primaria. De lo contrario, otras personas podrían acceder a tu Azure IoT Hub en cualquier momento y obtener todos los permisos que has configurado.
:::

## Integración con Helium

Ahora podemos regresar a la [consola de Helium](https://console.helium.com/integrations) y crear la integración entre Azure y Helium.

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/152.png" /></div>

Haz clic en **Add Integration** en la nueva página.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/153.png" /></div>

En la nueva página, pega la **Cadena de conexión primaria** generada anteriormente. Helium completará automáticamente el resto del contenido.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/155.png" /></div>

Finalmente, solo asigna un nombre a esta integración.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/156.png" /></div>

## Conexión de la Integración

Ahora, utiliza la interfaz de arrastrar y soltar en la consola de Helium para conectar el dispositivo a la función (*Decoder*) y luego a la integración de Azure, como se muestra en los [pasos anteriores](https://wiki.seeedstudio.com/Helium-Introduction/#helium-console-flows).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/21.jpg" /></div>

En este punto, sigue los [pasos anteriores](https://wiki.seeedstudio.com/Connecting-to-Helium/#upload-code-send-data-to-helium) para volver a subir el código, y Wio Terminal se reconectará a Helium y enviará los datos.

Una vez completada la integración y cuando tu dispositivo esté unido a LoRaWAN® enviando datos a Helium constantemente, el dispositivo debería aparecer en el panel de dispositivos del Azure IoT Hub con el ID de dispositivo desde la red Helium.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/37.jpg" /></div>

También puedes confirmar el envío exitoso de datos revisando los datos devueltos por el monitor serial.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/24.jpg" /></div>

Cuando hagas clic en “Overview” dentro del IoT Hub, también deberías ver flujos de mensajes y un dispositivo listado como “Connected”.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/23.jpg" /></div>

- **Número de mensajes usados:** Número total de mensajes utilizados (máximo).

- **Mensajes de dispositivo a la nube:** Mensajes de telemetría enviados (conteo).

- **Dispositivos conectados:** Dispositivos conectados (máximo).

- **Total de dispositivos IoT:** Total de dispositivos (máximo).

En este punto del tutorial, has completado todo el despliegue del sensor local hacia la nube de Azure. A continuación, tienes la opción de personalizar el procesamiento de los datos según tus necesidades. Consulta [aquí](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-messaging) para más información.

Por supuesto, también puedes continuar con nuestro contenido del tutorial para aprender a usar la integración con la Web APP de Microsoft y completar la visualización de tus datos.

<table align="center">
  <tbody><tr>
      <td align="cent er"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/webapp.png" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Configuración de visualización con Web APP</strong><br /><br />Esta sección describe cómo visualizar la información de los datos recibidos por Microsoft Azure utilizando la integración gratuita con Web APP.<br /><br /><a href="https://wiki.seeedstudio.com/Configuring-Web-APP-Visualization">Empecemos &gt;</a></td>
    </tr>
  </tbody></table>

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte distintos tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Statement

- The LoRa® Mark is a trademark of Semtech Corporation or its subsidiaries.
- LoRaWAN® is a mark used under license from the LoRa Alliance®.
