---
description: LVGL para reTerminal
title: LVGL para reTerminal
keywords:
  - Edge
  - reTerminal Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal-build-UI-using-LVGL
last_update:
  date: 04/03/2025
  author: Erick González
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl_banner.jpg" alt="pir" width="800" height="auto"/></p>

## Introducción

LVGL te ofrece todo lo necesario para crear una interfaz gráfica integrada (GUI) con elementos gráficos fáciles de usar, efectos visuales atractivos y un bajo consumo de memoria. LVGL es una biblioteca gráfica pensada para microcontroladores con recursos limitados, aunque también puede usarse para crear GUIs integradas en procesadores avanzados y placas con Linux. Existen dos maneras de hacerlo:

- Simulador de PC con la biblioteca multiplataforma **SDL 2**
- Simplemente usando el dispositivo de frame buffer de Linux (típicamente `/dev/fb0`).

En este artículo usaremos el ejemplo del simulador de PC con SDL2 y lo modificaremos ligeramente para mostrar la UI a pantalla completa en lugar de una ventana.

#### Características

- Potentes [bloques de construcción](https://docs.lvgl.io/master/widgets/index.html): botones, gráficos (charts), listas, deslizadores, imágenes, etc.
- Motor gráfico avanzado: animaciones, suavizado (anti-aliasing), opacidad, desplazamiento suave, modos de fusión, etc.
- Soporte para [dispositivos de entrada variados](https://docs.lvgl.io/master/overview/indev.html): pantalla táctil, ratón, teclado, codificador, botones, etc.
- Soporta [múltiples pantallas](https://docs.lvgl.io/master/overview/display.html)
- Independiente del hardware, puede usarse con cualquier microcontrolador y pantalla
- Escalable para operar con poca memoria (64 kB Flash, 16 kB RAM)
- Soporte multilenguaje con manejo de UTF-8, CJK, escritura bidireccional y árabe
- Elementos gráficos completamente personalizables via [estilos similares a CSS](https://docs.lvgl.io/master/overview/style.html)
- Potentes diseños inspirados en CSS: [Flexbox](https://docs.lvgl.io/master/layouts/flex.html) y [Grid](https://docs.lvgl.io/master/layouts/grid.html)
- No requiere S.O., memoria externa ni GPU, pero los soporta (soporte integrado para STM32 DMA2D, NXP PXP y VGLite)
- Renderizado fluido incluso con un [buffer de cuadro único](https://docs.lvgl.io/master/porting/display.html)
- Escrito en C y compatible con C++
- Enlace (binding) para Micropython que expone la [API de LVGL en Micropython](https://blog.lvgl.io/2019-02-20/micropython-bindings)
- [Simulador](https://docs.lvgl.io/master/get-started/pc-simulator.html) para desarrollar en PC sin hardware embebido
- Más de 100 [ejemplos](https://github.com/lvgl/lvgl/tree/master/examples)
- [Documentación](http://docs.lvgl.io/) y referencias de API en línea y en PDF

## Preparar entorno de desarrollo

### En reTerminal

En Raspberry Pi OS puedes instalar fácilmente SDL2 usando la terminal:

```bash
sudo apt-get update && sudo apt-get install build-essential libsdl2-dev cmake  -y
```

Luego clona el proyecto del simulador y sus submódulos relacionados:

```bash
git clone --recursive https://github.com/littlevgl/pc_simulator.git
```

### En la PC Host

<iframe width="800" height="450" src="https://www.youtube.com/embed/UrSkzbuuGaw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

EdgeLine es un editor WYSIWYG para LVGL que permite a los usuarios crear interfaces y luego exportar el código C/Micropython para usarse en el dispositivo de destino. Actualmente está en fase beta con funcionalidades limitadas y disponible tanto para Windows como para Linux.

- Versión para Windows: [LINK](https://lvgl.io/assets/edgeline/EdgeLine_Setup_v0_3_installer.exe)
- Versión para Linux: [LINK](https://lvgl.io/assets/edgeline/EdgeLine_v0_3_linux.zip)

Dado que EdgeLine está en fase beta, revisa si hay versiones más recientes en el [subforo de EdgeLine del foro de LVGL](https://forum.lvgl.io/c/edgeline/15)

Para la versión de Linux, asegúrate de que **Edgeline.x86_64** y **server/micropython** sean ejecutables (`chmod +x nombre_archivo`).

Luego, para ejecutar EdgeLine:

```bash
./Edgeline.x86_64
```

El código exportado no carga ninguna de las pantallas por defecto, así que necesitas llamar manualmente a `lv_scr_load(scr_name)` en la pantalla que desees.

## Ejecutar demos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl.gif" alt="pir" width="800" height="auto"/></p>

Los siguientes pasos pueden usarse con CMake en Raspberry Pi OS.

Asegúrate de que CMake esté instalado, es decir, que el comando `cmake` funcione en la terminal.

```bash
cd pc_simulator/
mkdir build
cd build.
cmake ..
make -j4
```

El binario estará en `pc_simulator/build/bin/main`, y puedes ejecutarlo con:

```bash
DISPLAY=:0 ./bin/main
```

Esto mostrará la demo de widget en modo ventana. Para cambiarlo a pantalla completa, abre

```pc_simulator/lv_drivers/sdl/sdl.c```

y en la línea #L344 modifica:

```c
static void window_create(monitor_t * m)
{
    m->window = SDL_CreateWindow("TFT Simulator",
                            SDL_WINDOWPOS_UNDEFINED, SDL_WINDOWPOS_UNDEFINED,
                            1280 , 720 , SDL_WINDOW_FULLSCREEN);       /*último parámetro. SDL_WINDOW_BORDERLESS para ocultar bordes*/
```

Además, cambia la resolución de la pantalla en `pc_simulator/lv_drv_conf.h` línea #L90:

```conf
/*-------------------
 *  Monitor de PC
 *-------------------*/
#ifndef USE_MONITOR
#  define USE_MONITOR         1
#endif

#if USE_MONITOR
#  define MONITOR_HOR_RES     1280
#  define MONITOR_VER_RES     720
```

Recompila y ejecuta el binario para ver la aplicación demo a pantalla completa:

```bash
make -j4
DISPLAY=:0 ./bin/main
```

Si la dirección táctil no es la correcta, deberás cambiar la línea 89 de `/boot/config.txt` a `dtoverlay=reTerminal,tp_rotate=0`

## Construir tu propia aplicación GUI

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl_reterminal.gif" alt="pir" width="800" height="auto"/></p>

Para aprender a construir tu propia aplicación de interfaz gráfica para reTerminal con LVGL 8.0, puedes consultar el código de ejemplo en [este repositorio de GitHub](https://github.com/AIWintermuteAI/Seeed_reTerminal_LVGL_UI_Demo).

Todos los componentes necesarios se importan e inicializan en `main.c`, después de lo cual se llama la función principal de UI. La descripción de la interfaz, sus callbacks y funciones auxiliares se ubican en **lv_demo_reterminal_UI/lv_demo_reterminal_UI.c**.

```cpp
    tv = lv_tabview_create(lv_scr_act(), LV_DIR_TOP, tab_h);

    lv_obj_set_style_text_font(lv_scr_act(), font_normal, 0);

    lv_obj_t * tab_btns = lv_tabview_get_tab_btns(tv);
    lv_obj_set_style_pad_left(tab_btns, 0, 0);

    lv_obj_t * t1 = lv_tabview_add_tab(tv, "Assistant");
    lv_obj_t * t2 = lv_tabview_add_tab(tv, "Debug");
    lv_obj_t * t3 = lv_tabview_add_tab(tv, "Stats");
```

Creamos un widget de Tabview en la pantalla activa y añadimos tres pestañas: Assistant, Debug y Stats.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl-1.png" alt="pir" width="800" height="auto"/></p>

El contenido de cada pestaña se inicializa por separado en la función correspondiente:

```cpp
    assistant_create(t1);
    debug_create(t2);
    stats_create(t3);

    color_changer_create(tv);

    evdev_lis3dh_init();
```

Adicionalmente, se crean elementos para cambiar el color (color changer) en el widget Tabview y se inicializa el acelerómetro integrado. Luego creamos tres callbacks de temporizador con datos ficticios:

```cpp
    static uint32_t user_data = 10;
    lv_timer_t * time_timer = lv_timer_create(time_timer_cb, 1,  &user_data);
    lv_timer_t * system_timer = lv_timer_create(system_timer_cb, 500,  &user_data);
    lv_timer_t * accelerometer_timer = lv_timer_create(accelerometer_timer_cb, 50,  &user_data);
```

Estos se encargan de obtener la hora del sistema, estado del sistema (CPU, Mem, espacio en disco, velocidad Ethernet, etc) y lecturas del acelerómetro respectivamente. Puedes encontrar las tres funciones de callback al final de lv_demo_reterminal_UI.c.

```cpp
void time_timer_cb(lv_timer_t * timer)
{

    time_t t = time(NULL);
    struct tm *local = localtime(&t);

    sprintf(timeString, "%02d:%02d:%02d", local->tm_hour, local->tm_min, local->tm_sec);
    sprintf(dateString, "%s\n%s %02d %04d", DAY[local->tm_wday], MONTH[local->tm_mon], local->tm_mday, local->tm_year + 1900);

    lv_label_set_text(clock_label, timeString);
    lv_label_set_text(date_label, dateString);

}

void system_timer_cb(lv_timer_t * timer)
{

    lv_meter_indicator_t *indic1 = timer->user_data;
    cpu_pct = 100 - lv_timer_get_idle();

    lv_mem_monitor_t mon;
    lv_mem_monitor(&mon);

    uint32_t used_size = mon.total_size - mon.free_size;;
    uint32_t used_kb = used_size / 1024;
    uint32_t used_kb_tenth = (used_size - (used_kb * 1024)) / 102;
    mem_pct = mon.used_pct;

    dsk_pct = get_available_space();
    eth0_num = get_current_network_speed();
    //light_num = get_light_sensor();

}

void accelerometer_timer_cb(lv_timer_t * timer)
{

    evdev_lis3dh_read(&data);

    lv_chart_set_next_value(chart1, x_ser, data.x_val);
    lv_chart_set_next_value(chart1, y_ser, data.y_val);
    lv_chart_set_next_value(chart1, z_ser, data.z_val);

}
```

Para tu aplicación particular, quizás te convenga usar otros widgets en lugar de Tabview. Consulta la [descripción completa de los widgets en LVGL 8.0](https://docs.lvgl.io/master/widgets/index.html) para ver usos y ejemplos.

Si decides seguir de cerca nuestra demo de aplicación al crear tu primera interfaz con LVGL para reTerminal, abajo tienes más detalles sobre lo que pasa dentro de una de esas funciones (`assistant_create()`). Tu flujo de trabajo para crear nuevas apps será similar:

1) Inicializar widgets en la(s) pantalla(s)
2) Crear callbacks basados en temporizador o eventos para obtener datos de sensores/sistema
3) Cambiar el contenido de los widgets basándose en dichos datos; usualmente se usan variables globales declaradas al inicio del código

**assistant_create**
Creamos un objeto panel para la pestaña y definimos su altura.

```cpp
    lv_obj_t * panel1 = lv_obj_create(parent);
    lv_obj_set_height(panel1, lv_pct(100));
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl-2.png" alt="pir" width="800" height="auto"/></p>

Luego creamos un objeto de botón de imagen (image button) a partir de un array C ubicado en la carpeta assets, obtenido con la [herramienta de conversión de imágenes de LVGL](https://lvgl.io/tools/imageconverter). También inicializamos y asignamos un estilo de transformación para el botón cuando se presiona (el botón se vuelve verde). Además, se asigna la función de evento **speech_event_cb** para la pulsación del botón; en este ejemplo solo imprime texto en la terminal, pero en una aplicación real podría usarse para iniciar un Asistente Inteligente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl-3.png" alt="pir" height="400"/></p>

```cpp
    LV_IMG_DECLARE(speech_btn_img);

    /*Crear una animación de transición en la transformación de ancho y recolor.*/
    static lv_style_prop_t tr_prop[] = {LV_STYLE_IMG_RECOLOR_OPA, 0};
    static lv_style_transition_dsc_t tr;
    lv_style_transition_dsc_init(&tr, tr_prop, lv_anim_path_linear, 500, 0, NULL);

    static lv_style_t style_def;
    lv_style_init(&style_def);
    lv_style_set_text_color(&style_def, lv_color_white());
    lv_style_set_transition(&style_def, &tr);

    /*Oscurecer el botón cuando se presiona y hacerlo más ancho*/
    static lv_style_t style_pr;
    lv_style_init(&style_pr);
    lv_style_set_img_recolor_opa(&style_pr, LV_OPA_70);
    lv_style_set_img_recolor(&style_pr, lv_palette_main(LV_PALETTE_GREEN));

    /*Crear un image button*/
    lv_obj_t * speech_btn = lv_imgbtn_create(panel1);
    lv_imgbtn_set_src(speech_btn, LV_IMGBTN_STATE_RELEASED, NULL, &speech_btn_img, NULL);
    //lv_img_set_zoom(speech_btn, 128);
    lv_obj_set_size(speech_btn, 300, 300);
    lv_obj_add_event_cb(speech_btn, speech_event_cb, LV_EVENT_ALL, NULL);
    lv_obj_add_style(speech_btn, &style_def, 0);
    lv_obj_add_style(speech_btn, &style_pr, LV_STATE_PRESSED);
```

En el siguiente bloque de código creamos etiquetas de texto para la hora, fecha y un saludo al usuario. Estas se inicializan con texto predeterminado, que se actualizará en el callback `time_timer` cada segundo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl-4.png" alt="pir" width="600" height="auto"/></p>

```cpp
    lv_obj_t * name = lv_label_create(panel1);
    lv_label_set_text(name, "Hi there, Username");
    lv_obj_add_style(name, &style_large, 0);

    clock_label = lv_label_create(panel1);
    lv_obj_add_style(clock_label, &style_clock, 0);
    lv_label_set_text(clock_label, timeString);
    lv_label_set_long_mode(clock_label, LV_LABEL_LONG_WRAP);

    lv_obj_t * time_icn = lv_label_create(panel1);
    lv_obj_add_style(time_icn, &style_large, 0);
    lv_label_set_text(time_icn, LV_SYMBOL_BELL);

    date_label = lv_label_create(panel1);
    lv_label_set_text(date_label, dateString);
    lv_obj_add_style(date_label, &style_large, 0);
```

Finalmente, estructuramos los widgets colocados en esta pestaña usando Grid layout. El Grid layout es un subconjunto de CSS Flexbox.

Puede organizar elementos en una "tabla" 2D con filas o columnas (tracks). Un elemento puede abarcar múltiples columnas o filas. El tamaño de la pista puede configurarse en píxeles, ajustarse al elemento más grande (`LV_GRID_CONTENT`) o en "Unidad Libre" (FR) para distribuir el espacio libre proporcionalmente.

Para hacer que un objeto sea contenedor de cuadrícula, llama a `lv_obj_set_layout(obj, LV_LAYOUT_GRID)`.

Nota: la característica grid layout de LVGL debe habilitarse globalmente con `LV_USE_GRID` en `lv_conf.h`.

Puedes leer más sobre Layouts en LVGL siguiendo [este enlace](https://docs.lvgl.io/master/layouts/grid.html).

```cpp
    static lv_coord_t grid_main_col_dsc[] = {LV_GRID_FR(1), LV_GRID_FR(1), LV_GRID_TEMPLATE_LAST};
    static lv_coord_t grid_main_row_dsc[] = {LV_GRID_CONTENT, LV_GRID_CONTENT, LV_GRID_TEMPLATE_LAST};

    /*Crear el panel superior*/
    static lv_coord_t grid_1_col_dsc[] = {400, 50, LV_GRID_CONTENT, LV_GRID_FR(2), LV_GRID_FR(1), LV_GRID_FR(1), LV_GRID_TEMPLATE_LAST};
    static lv_coord_t grid_1_row_dsc[] = {200, 100, 100, LV_GRID_CONTENT, 10, LV_GRID_CONTENT, LV_GRID_CONTENT, LV_GRID_TEMPLATE_LAST};

    lv_obj_set_grid_dsc_array(parent, grid_main_col_dsc, grid_main_row_dsc);

    lv_obj_set_grid_cell(panel1, LV_GRID_ALIGN_STRETCH, 0, 2, LV_GRID_ALIGN_CENTER, 0, 1);

    lv_obj_set_grid_dsc_array(panel1, grid_1_col_dsc, grid_1_row_dsc);
    lv_obj_set_grid_cell(speech_btn, LV_GRID_ALIGN_CENTER, 0, 1, LV_GRID_ALIGN_CENTER, 0, 5);
    lv_obj_set_grid_cell(name, LV_GRID_ALIGN_START, 2, 2, LV_GRID_ALIGN_CENTER, 0, 1);
    lv_obj_set_grid_cell(clock_label, LV_GRID_ALIGN_STRETCH, 2, 4, LV_GRID_ALIGN_START, 1, 1);
    lv_obj_set_grid_cell(time_icn, LV_GRID_ALIGN_CENTER, 2, 1, LV_GRID_ALIGN_CENTER, 3, 1);
    lv_obj_set_grid_cell(date_label, LV_GRID_ALIGN_START, 3, 1, LV_GRID_ALIGN_CENTER, 3, 1);
```

El resto de pestañas tienen widgets diferentes, pero el flujo de trabajo general es el mismo. Para más información sobre parámetros o uso de un widget específico, revisa la documentación de LVGL.

Para compilar la aplicación, desde tu carpeta de proyecto (que contiene el archivo `main.c`):

```bash
mkdir build
cd build.
cmake ..
make -j4
```

El binario estará en `../bin/main`, y puedes ejecutarlo con:

```bash
DISPLAY=:0 ./../bin/main
```

Si agregas otras carpetas al proyecto, asegúrate de modificar `CMakeLists.txt` en consecuencia y volver a ejecutar `cmake ..` desde el directorio build. De lo contrario, tendrás errores de enlace.

## Recursos

- **[GitHub]** [LVGL](https://lvgl.io/)
- **[Página web]** [Documentación oficial de LVGL](https://docs.lvgl.io/master/index.html)
- **[GitHub]** [Código fuente del PC Simulator](https://github.com/lvgl/lv_sim_eclipse_sdl)

## Soporte técnico y debate de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
