# SPACE y DevEx

SPACE (Satisfacción y bienestar, Rendimiento, Actividad, Comunicación y colaboración, Eficiencia y flujo) y DevEx (bucles de retroalimentación, carga cognitiva, estado de flujo) son marcos para medir la productividad del desarrollador **multidimensionalmente** — la respuesta del campo al descubrimiento de que ninguna métrica individual sobrevive al contacto con la realidad.

## Por qué importa

Ambos marcos codifican la misma lección duramente ganada que la investigación de resultados de salud aprendió décadas antes: una sola cifra (líneas de código; presión arterial) tergiversa una realidad multidimensional, y optimizarla produce manipulación, no mejora. SPACE prescribe combinar métricas de al menos tres dimensiones, mezclando telemetría con autoinforme — estructuralmente idéntico a cómo [EQ-5D](../eq-5d/) perfila cinco dimensiones antes de calcular cualquier índice, y por qué existen los [PROM](../resultados-informados-por-el-paciente/) junto a las medidas clínicas. La satisfacción/bienestar tampoco es guarnición blanda: alimenta la economía de [retención de fuerza laboral](../retención-de-la-fuerza-laboral/), donde la atrición se tasa en meses de salario cargado.

## El cálculo

Ninguno de los marcos es una fórmula; ambos son diseños de medición:

```
Regla SPACE: ≥ 3 dimensiones, ≥ 1 métrica perceptual (encuesta) + ≥ 1 métrica de sistema (telemetría)

Dimensiones de DevEx y ejemplos de emparejamiento:
  bucles de retroalimentación  → duración de CI (telemetría) + "esperar se siente lento" (encuesta)
  carga cognitiva  → capacidad de encontrar documentación, tiempo de incorporación + esfuerzo percibido
  estado de flujo      → densidad de reuniones/interrupciones + concentración autoinformada

Índices derivados (p. ej., el DXI de DX) mapean compuestos de encuesta a tiempo:
reclamación del proveedor ≈ 13 min/dev/semana por punto de índice — trátalo como un
punto de referencia de proveedor a validar localmente, no una constante de la naturaleza.
```

## Ejemplo resuelto

Un equipo de plataforma justifica una inversión en DevEx (aceleración de CI + revisión de documentación) para 300 desarrolladores:

```
Línea base: CI p75 = 28 min; encuesta "pierdo la concentración esperando compilaciones": 62% de acuerdo
Después:    CI p75 = 9 min;  acuerdo 24%

Tiempo recuperado (telemetría): 6 compilaciones/día × 19 min × 0,4 utilizable = ~45 min/día/dev
Valor de capacidad: 300 × 0,75h × 220d × £60/h ≈ £2,97M/año (no libera efectivo —
ver cash-releasing-vs-non-cash-releasing.md; el factor de usabilidad 0,4 es el
descuento de fragmentación de practitioner-time.md)
La corroboración perceptual es lo que hace creíble la reclamación de telemetría — cualquiera
solo es manipulable; juntos triangulan.
```

## Conexión con la ingeniería de software

Este documento *es* el lado del software; el traslado corre hacia la economía de la salud. Un "año-ingeniero ajustado por calidad" — tiempo ponderado por un índice de experiencia estandarizado — es la construcción del [AVAC](../año-de-vida-ajustado-por-calidad/) aplicada a la capacidad de ingeniería, y hereda las reglas del AVAC: pesos de un instrumento validado (encuesta consistente, puntuación publicada), obtenidos *antes* de la comparación, nunca ajustados para halagar a una herramienta favorecida. La lección de [SF-6D frente a EQ-5D](../eq-5d/) también se aplica: instrumentos diferentes dan cifras sistemáticamente diferentes, así que nunca compares índices DevEx entre instrumentos de proveedores.

## Errores comunes

- **Colapso de métrica única**: los paneles que reducen SPACE a una puntuación recrean el problema que el marco existe para prevenir.
- **Métricas de actividad como resultados**: los commits, PR y story points son Actividad — la dimensión que SPACE advierte explícitamente que es la más manipulable (análogo de salud: contar procedimientos, no recuperaciones).
- **Fatiga de encuestas y efectos Hawthorne**: los instrumentos trimestrales de toque ligero superan al interrogatorio semanal.
- **Comparar equipos**: como tablas de clasificación hospitalarias sin ajuste de mezcla de casos — las diferencias de contexto (dominio, carga heredada, guardias) dominan.

## Fuentes

- Forsgren N, et al. "The SPACE of Developer Productivity." ACM Queue 2021. <https://queue.acm.org/detail.cfm?id=3454124>
- Noda A, Forsgren N, Storey MA, Greiler M. "DevEx: What Actually Drives Productivity." ACM Queue 2023. <https://queue.acm.org/detail.cfm?id=3595878>
