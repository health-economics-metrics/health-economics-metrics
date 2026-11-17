# Métricas de Compromiso

Las métricas de compromiso miden cuánto usan realmente los usuarios una aplicación de salud: la pegajosidad DAU/MAU, la frecuencia y duración de sesión, el uso de funcionalidades. En la salud digital, el compromiso no es vanidad — es **dosis**: la exposición a través de la cual debe fluir cualquier efecto clínico.

## Por qué importa

Un medicamento que se queda en el frasco no cura a nadie; una aplicación que se queda sin instalar o sin abrir es el mismo modo de fallo. Cada reclamación de economía de la salud para un producto de salud de consumo se multiplica a través del compromiso — la eficacia mostrada en ensayos se midió en algún nivel de uso, y el valor en el mundo real escala con cuán cerca llega el uso de despliegue a ese nivel. Puntos de referencia estándar del producto: la pegajosidad DAU/MAU alrededor del **20% se considera saludable** para las aplicaciones móviles en general, >25% excepcional; las aplicaciones de salud a menudo funcionan más bajo.

## El cálculo

```
Pegajosidad (DAU/MAU) = usuarios activos diarios / usuarios activos mensuales × 100
Métricas de sesión      = sesiones/usuario/periodo; duración media = tiempo total / sesiones
Compromiso de funcionalidad   = usuarios que realizan la acción clave / usuarios activos

Encuadre dosis-respuesta (la mejora de economía de la salud):
  efecto realizado ≈ efecto del ensayo × f(uso real / uso del ensayo)
  donde f proviene del análisis dosis-respuesta — ver el concepto de
  "compromiso efectivo" en adherence-and-persistence.md: uso suficiente
  para lograr el resultado previsto, que puede ser modesto y finito
```

## Ejemplo resuelto

El estudio pivotal de una aplicación de presión arterial mostró una reducción sistólica de 6 mmHg entre usuarios que registran ≥4 lecturas/semana. En un despliegue a través de 50.000 usuarios registrados:

```
MAU 20.000 (40%); de esos, registrando ≥4×/semana: 7.000
Usuarios de dosis efectiva = 7.000 / 50.000 = 14% de la base registrada

El efecto a nivel poblacional ≈ efecto del ensayo entregado al 14%, no al 100%:
cualquier modelo económico que cite "50.000 usuarios × 6 mmHg" sobreestima ~7×.
Modelo honesto: 7.000 × efecto completo + crédito parcial (de datos
dosis-respuesta, si existen) para los 13.000 usuarios subumbral.
```

Esta multiplicación — a través del embudo de compromiso hasta la dosis efectiva — es el lugar individual más común donde la economía de la salud digital se infla.

## Conexión con la ingeniería de software

Los ingenieros son dueños del embudo de compromiso, lo que los convierte en dueños de una variable *clínica*: la fricción de incorporación, la estrategia de notificaciones, el tiempo de carga y la resiliencia sin conexión mueven todos la dosis entregada. Dos implicaciones de diseño: instrumenta la **acción clínicamente significativa** (lecturas registradas, lecciones completadas), no las aperturas — el DAU construido sobre sesiones de rebote de notificaciones es fraude de dosis; y trata los objetivos de compromiso como objetivos de *suficiencia*, no de maximización — una aplicación que logra su resultado en 5 minutos/semana y se aparta del camino es clínicamente ideal y métricamente "pobre" (ver compromiso efectivo en [adherencia y persistencia](../adherencia-y-persistencia/)). Tasa el propio trabajo de compromiso vía el modelo de efecto poblacional anterior: una ganancia de 2 puntos en la cuota de dosis efectiva es una línea de AVAC cuantificable.

## Errores comunes

- **Compromiso como resultado**: el uso es un medio; el resultado es el [PROM](../resultados-informados-por-el-paciente/) o punto final clínico.
- **Promedios sobre uso bimodal**: las poblaciones de aplicaciones de salud se dividen en usuarios devotos y fantasmas; las medias no describen a nadie — segméntalas.
- **Inflación de dosis con patrones oscuros**: las rachas y las notificaciones de culpa elevan las métricas y pueden dañar a las poblaciones ansiosas a las que sirven las aplicaciones de salud; los productos clínicos conllevan ética clínica.
- **Procedencia de referencia del proveedor**: la mayoría de los puntos de referencia de compromiso publicados provienen de proveedores de analítica, no de revisión por pares; calibra contra tus propios ensayos.

## Fuentes

- Puntos de referencia de compromiso de aplicaciones. <https://getstream.io/blog/app-retention-guide/>
- Guías de KPI de aplicaciones de salud. <https://www.darly.solutions/blog/key-metrics-for-health-apps-success-a-guide-to-kpis-and-outcomes>
- Yardley L, et al. sobre compromiso efectivo. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
