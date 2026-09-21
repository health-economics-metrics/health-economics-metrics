# Métricas de Engagement

Las métricas de engagement miden cuánto usan realmente los usuarios una aplicación de salud: la "stickiness" DAU/MAU, la frecuencia y duración de las sesiones, el uso de funciones. En la salud digital, el engagement no es vanidad — es **dosis**: la exposición a través de la cual debe fluir cualquier efecto clínico.

## Por qué importa

Un medicamento que se queda en el bote no cura a nadie; una aplicación que se queda sin instalar o sin abrir es el mismo modo de fallo. Toda afirmación económico-sanitaria sobre un producto de salud de consumo se multiplica a través del engagement — la eficacia mostrada en los ensayos se midió a cierto nivel de uso, y el valor en el mundo real escala según lo cerca que el uso en despliegue esté de ese nivel. Referencias de producto estándar: un DAU/MAU en torno al **20 % se considera saludable** para aplicaciones móviles en general, >25 % es excepcional; las aplicaciones de salud a menudo funcionan más bajo.

## Las matemáticas

```
Stickiness (DAU/MAU) = usuarios activos diarios / usuarios activos mensuales × 100
Métricas de sesión    = sesiones/usuario/periodo; duración media = tiempo total / sesiones
Engagement de función = usuarios que realizan la acción clave / usuarios activos

Enfoque dosis-respuesta (la mejora de la economía de la salud):
  efecto realizado ≈ efecto del ensayo × f(uso real / uso en el ensayo)
  donde f procede del análisis dosis-respuesta — véase el concepto de
  "engagement efectivo" en adherence-and-persistence.md: el uso suficiente
  para lograr el resultado previsto, que puede ser modesto y finito
```

## Ejemplo práctico

El estudio pivotal de una aplicación de presión arterial mostró una reducción sistólica de 6 mmHg entre los usuarios que registraban ≥4 lecturas/semana. En el despliegue con 50,000 usuarios registrados:

```
MAU 20,000 (40 %); de ellos, con ≥4 registros/semana: 7,000
Usuarios de dosis efectiva = 7,000 / 50,000 = 14 % de la base registrada

Efecto a nivel poblacional ≈ efecto del ensayo entregado al 14 %, no al 100 %:
cualquier modelo económico que cite "50,000 usuarios × 6 mmHg" sobreestima ~7×.
Modelo honesto: 7,000 × efecto completo + crédito parcial (a partir de datos
dosis-respuesta, si los hay) para los 13,000 usuarios por debajo del umbral.
```

Esta multiplicación — a través del embudo de engagement hasta la dosis efectiva — es el lugar más común donde la economía de la salud digital se infla.

## Conexión con la ingeniería de software

Los ingenieros son dueños del embudo de engagement, lo que los convierte en dueños de una variable *clínica*: la fricción de incorporación, la estrategia de notificaciones, el tiempo de carga y la resiliencia sin conexión mueven todos la dosis entregada. Dos implicaciones de diseño: instrumentar la **acción clínicamente significativa** (lecturas registradas, lecciones completadas), no las aperturas — un DAU construido sobre sesiones de rebote por notificación es fraude de dosis; y tratar los objetivos de engagement como objetivos de *suficiencia*, no de maximización — una aplicación que logra su resultado en 5 minutos/semana y se aparta es clínicamente ideal y métricamente "pobre" (véase el engagement efectivo en [adherencia y persistencia](../adherence-and-persistence/)). Valore el propio trabajo de engagement mediante el modelo de efecto poblacional anterior: una ganancia de 2 puntos en la cuota de dosis efectiva es una línea de AVAC cuantificable.

## Escollos

- **El engagement como resultado**: el uso es un medio; el resultado es el [PROM](../patient-reported-outcomes/) o el criterio clínico de valoración.
- **Medias sobre uso bimodal**: las poblaciones de aplicaciones de salud se dividen en usuarios devotos y fantasmas; las medias no describen a nadie — segmente por cohortes.
- **Inflación de dosis por patrones oscuros**: las rachas y las notificaciones de culpa elevan las métricas y pueden dañar a las poblaciones ansiosas a las que sirven las aplicaciones de salud; los productos clínicos llevan ética clínica.
- **Procedencia de las referencias de proveedores**: la mayoría de las referencias de engagement publicadas proceden de proveedores de analítica, no de revisión por pares; calibre contra sus propios ensayos.

## Fuentes

- Referencias de engagement de aplicaciones. <https://getstream.io/blog/app-retention-guide/>
- Guías de KPI de aplicaciones de salud. <https://www.darly.solutions/blog/key-metrics-for-health-apps-success-a-guide-to-kpis-and-outcomes>
- Yardley L, et al. sobre engagement efectivo. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
