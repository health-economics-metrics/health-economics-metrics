# Horizonte Temporal

El horizonte temporal es el periodo durante el cual un análisis cuenta costes y efectos. Debe ser lo suficientemente largo para capturar todas las diferencias significativas entre las opciones comparadas.

## Por qué importa

Elige un horizonte corto y te pierdes los beneficios tardíos (prevención) y los costes tardíos (mantenimiento). Elige un horizonte excesivamente largo y todo se ahoga en incertidumbre. La evaluación de tecnología sanitaria a menudo usa un horizonte de **por vida** para tratamientos con efectos de mortalidad; el [análisis de impacto presupuestario](../análisis-de-impacto-presupuestario/) usa deliberadamente un horizonte corto de **1-5 años** porque su pregunta es la asequibilidad, no el valor. El horizonte es una elección de modelado declarada, y los horizontes desajustados son una forma clásica de manipular una comparación.

## El cálculo

El horizonte es el límite superior de la suma en cualquier evaluación:

```
Valor presente neto = Σ_t [ (Beneficios_t − Costes_t) / (1 + r)^t ]

T = horizonte temporal (años)
r = tasa de descuento (ver discounting-and-time-preference.md)
```

Los resultados deberían informarse con el horizonte declarado, e idealmente mostrarse en múltiples horizontes.

## Ejemplo resuelto

Un sistema de prescripción electrónica cuesta £2 millones implementar y £200.000/año funcionar. Previene errores de medicación por valor de £600.000/año (coste de tratamiento del daño evitado).

Beneficio neto por horizonte (no descontado, para claridad):

```
Horizonte 1 año:  −2.000.000 − 200.000 + 600.000  = −£1.600.000
Horizonte 3 años: −2.000.000 + 3 × 400.000        = −£800.000
Horizonte 5 años: −2.000.000 + 5 × 400.000        =  £0
Horizonte 10 años:−2.000.000 + 10 × 400.000       = +£2.000.000
```

El sistema "falla" en cualquier horizonte menor a 5 años y "tiene éxito" a 10. Ninguno es la respuesta verdadera; el informe honesto declara el punto de equilibrio y justifica el horizonte por la vida útil del sistema (¿cuánto tiempo antes del reemplazo?).

## Conexión con la ingeniería de software

- **Las evaluaciones de herramientas medidas en un solo sprint** se pierden sistemáticamente la caída de la curva de aprendizaje (costes cargados al frente) y el mantenimiento a largo plazo (costes cargados al final). Los pilotos de asistente de codificación con IA medidos en la semana 2 capturan la novedad máxima, no el estado estable.
- **La duración del contrato ≠ el horizonte de beneficio.** Un contrato SaaS de 1 año todavía puede evaluarse durante 5 años si esperas realistamente la renovación — pero dilo.
- **Los casos de reemplazo de sistemas heredados** deberían correr hasta el fin de vida creíble del sistema antiguo, no hasta un número redondo arbitrario.

## Errores comunes

- **Compra de horizonte**: elegir el horizonte que hace ganar a tu opción. Preregistra el horizonte antes de calcular los resultados.
- **Horizontes diferentes para opciones diferentes** en la misma comparación.
- **Horizontes de por vida sin análisis de descuento o incertidumbre** — los beneficios del año 30 al valor nominal son ficción. Combina los horizontes largos con [análisis de sensibilidad](../análisis-de-sensibilidad/).

## Fuentes

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Sullivan SD, et al. "Budget Impact Analysis — Principles of Good Practice: Report of the ISPOR 2012 Budget Impact Analysis Good Practice II Task Force." Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
