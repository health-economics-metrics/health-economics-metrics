# SPACE y DevEx

SPACE (Satisfacción y bienestar, Rendimiento (Performance), Actividad, Comunicación y colaboración, Eficiencia y flujo) y DevEx (bucles de retroalimentación, carga cognitiva, estado de flujo) son marcos para medir la productividad de los desarrolladores de forma **multidimensional** — la respuesta del sector al descubrimiento de que ninguna métrica única sobrevive al contacto con la realidad.

## Por qué importa

Ambos marcos codifican la misma lección, aprendida a un alto precio, que la investigación de resultados en salud descubrió décadas antes: un único número (líneas de código; presión arterial) tergiversa una realidad multidimensional, y optimizarlo produce manipulación del indicador, no mejora. SPACE prescribe combinar métricas de al menos tres dimensiones, mezclando telemetría con autoinforme — estructuralmente idéntico a cómo [EQ-5D](../eq-5d/) perfila cinco dimensiones antes de calcular ningún índice, y por qué existen los [PROM](../patient-reported-outcomes/) junto a las medidas clínicas. La satisfacción/el bienestar tampoco es un adorno blando: alimenta la economía de la [retención de la plantilla](../workforce-retention/), donde la rotación se valora en meses de salario cargado.

## Las matemáticas

Ninguno de los dos marcos es una fórmula; ambos son diseños de medición:

```
Regla de SPACE: ≥ 3 dimensiones, ≥ 1 métrica perceptual (encuesta) + ≥ 1 métrica de sistema (telemetría)

Dimensiones de DevEx y ejemplos de emparejamiento:
  bucles de retroalimentación → duración de la CI (telemetría) + "esperar se siente lento" (encuesta)
  carga cognitiva             → facilidad para encontrar documentación, tiempo de incorporación + esfuerzo percibido
  estado de flujo             → densidad de reuniones/interrupciones + concentración autoinformada

Índices derivados (p. ej., el DXI de DX) traducen compuestos de encuesta a tiempo:
afirmación del proveedor ≈ 13 min/desarrollador/semana por punto de índice — trátese como
una referencia del proveedor que hay que validar localmente, no como una constante universal.
```

## Ejemplo práctico

Un equipo de plataforma justifica una inversión en DevEx (aceleración de la CI + revisión de la documentación) para 300 desarrolladores:

```
Base: CI p75 = 28 min; encuesta "pierdo la concentración esperando builds": 62% de acuerdo
Después: CI p75 = 9 min; de acuerdo 24%

Tiempo recuperado (telemetría): 6 builds/día × 19 min × 0.4 utilizable = ~45 min/día/desarrollador
Valor de capacidad: 300 × 0.75h × 220d × 60£/h ≈ 2.97 M£/año (no libera caja —
véase cash-releasing-vs-non-cash-releasing.md; el factor de utilización 0.4 es el
descuento por fragmentación de practitioner-time.md)
La corroboración perceptual es lo que hace creíble la afirmación de la telemetría — cualquiera
de las dos por separado es manipulable; juntas triangulan.
```

## Conexión con la ingeniería de software

Este documento *es* el lado del software; la transferencia va hacia la economía de la salud. Un "año-ingeniero ajustado por calidad" — tiempo ponderado por un índice de experiencia estandarizado — es la construcción del [QALY](../quality-adjusted-life-year/) aplicada a la capacidad de ingeniería, y hereda las reglas del QALY: ponderaciones de un instrumento validado (encuesta coherente, puntuación publicada), obtenidas *antes* de la comparación, nunca ajustadas para favorecer a una herramienta preferida. También se aplica la lección de [SF-6D frente a EQ-5D](../eq-5d/): instrumentos distintos dan cifras sistemáticamente distintas, así que nunca compares índices de DevEx entre los instrumentos de distintos proveedores.

## Escollos

- **Colapso en una sola métrica**: los paneles que reducen SPACE a una única puntuación recrean el problema que el marco existe para prevenir.
- **Métricas de actividad como resultados**: los commits, las PR y los story points son Actividad — la dimensión que SPACE advierte explícitamente que es la más manipulable (análogo en salud: contar procedimientos, no recuperaciones).
- **Fatiga de encuestas y efectos Hawthorne**: los instrumentos trimestrales y ligeros superan al interrogatorio semanal.
- **Comparar equipos**: como las tablas de clasificación hospitalarias sin ajuste por case-mix — las diferencias de contexto (dominio, carga heredada, guardias) dominan.

## Fuentes

- Forsgren N, et al. "The SPACE of Developer Productivity." ACM Queue 2021. <https://queue.acm.org/detail.cfm?id=3454124>
- Noda A, Forsgren N, Storey MA, Greiler M. "DevEx: What Actually Drives Productivity." ACM Queue 2023. <https://queue.acm.org/detail.cfm?id=3595878>
