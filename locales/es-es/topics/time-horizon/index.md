# Horizonte temporal

El horizonte temporal es el periodo durante el cual un análisis contabiliza costes y efectos. Debe ser lo bastante largo para captar todas las diferencias relevantes entre las opciones que se comparan.

## Por qué importa

Elige un horizonte corto y te perderás beneficios tardíos (prevención) y costes tardíos (mantenimiento). Elige un horizonte demasiado largo y todo se ahoga en la incertidumbre. La evaluación de tecnologías sanitarias suele usar un horizonte **de por vida (lifetime)** para tratamientos con efectos sobre la mortalidad; el [análisis de impacto presupuestario](../budget-impact-analysis/) usa deliberadamente un horizonte corto de **1-5 años** porque su pregunta es la asequibilidad, no el valor. El horizonte es una decisión de modelización declarada, y los horizontes desiguales son una forma clásica de manipular una comparación.

## Las matemáticas

El horizonte es el límite superior de la suma en cualquier evaluación:

```
Valor actual neto = Σ (t = 0 … T) [ (Beneficios_t − Costes_t) / (1 + r)^t ]

T = horizonte temporal (años)
r = tasa de descuento (véase discounting-and-time-preference.md)
```

Los resultados deben reportarse indicando el horizonte y, idealmente, mostrarse en varios horizontes.

## Ejemplo práctico

Un sistema de prescripción electrónica cuesta 2 millones de libras implementarlo y 200,000£/año mantenerlo. Evita errores de medicación por valor de 600,000£/año (coste del tratamiento del daño evitado).

Beneficio neto por horizonte (sin descontar, por claridad):

```
Horizonte 1 año:   −2,000,000 − 200,000 + 600,000  = −1,600,000£
Horizonte 3 años:  −2,000,000 + 3 × 400,000         = −800,000£
Horizonte 5 años:  −2,000,000 + 5 × 400,000         =  0£
Horizonte 10 años: −2,000,000 + 10 × 400,000        = +2,000,000£
```

El sistema "fracasa" en cualquier horizonte inferior a 5 años y "tiene éxito" a 10. Ninguno es la respuesta verdadera; el informe honesto indica el punto de equilibrio y justifica el horizonte por la vida útil del sistema (¿cuánto falta para su sustitución?).

## Conexión con la ingeniería de software

- **Las evaluaciones de herramientas medidas en un solo sprint** pasan sistemáticamente por alto el bache de la curva de aprendizaje (costes concentrados al principio) y el mantenimiento a largo plazo (costes concentrados al final). Los pilotos de asistentes de codificación con IA medidos en la semana 2 capturan el pico de novedad, no el estado estable.
- **La duración del contrato ≠ el horizonte de beneficio.** Un contrato SaaS de 1 año puede evaluarse igualmente a 5 años si realistamente se espera su renovación — pero hay que decirlo.
- **Los casos de sustitución de sistemas heredados** deberían extenderse hasta el fin de vida creíble del sistema antiguo, no hasta una cifra redonda arbitraria.

## Escollos

- **Compra de horizonte (horizon shopping)**: elegir el horizonte que hace ganar a tu opción. Preinscribe el horizonte antes de calcular los resultados.
- **Horizontes distintos para opciones distintas** dentro de la misma comparación.
- **Horizontes de por vida sin descuento ni análisis de incertidumbre** — los beneficios del año 30 a valor nominal son ficción. Combina los horizontes largos con el [análisis de sensibilidad](../sensitivity-analysis/).

## Fuentes

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Sullivan SD, et al. "Budget Impact Analysis — Principles of Good Practice: Report of the ISPOR 2012 Budget Impact Analysis Good Practice II Task Force." Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
