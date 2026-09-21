# Retorno de la Inversión (ROI)

El ROI es la razón de la ganancia neta al dinero invertido. Es la métrica que la ingeniería y las finanzas ya comparten — la economía de la salud añade la disciplina que hace que una reclamación de ROI sobreviva al escrutinio: perspectiva declarada, comparador, horizonte y categorías de beneficio.

## Por qué importa

El ROI es la lengua franca de los titulares de presupuesto, y la salud pública también lo usa: la revisión histórica de Masters et al. encontró un **ROI mediano de 14,3:1** para las intervenciones de salud pública (cada £1 devuelve ~£14 a la economía y sistema de salud más amplios) — una cifra ampliamente usada para argumentar el gasto en prevención. Pero ese 14:1 es una cifra *social, de horizonte largo*; el ROI de un CFO de fideicomiso es de perspectiva de pagador y 1-3 años. La mayoría de las peleas de ROI son en realidad peleas de perspectiva no declarada.

## El cálculo

```
ROI = (Beneficios − Costes) / Costes      (a menudo × 100%)

Periodo de recuperación = Costes / beneficio neto anual
```

Una reclamación de ROI está infraespecificada sin cuatro declaraciones:

1. **Perspectiva** — ¿de quién cuentan los beneficios? (ver [perspectiva del análisis](../perspectiva-del-análisis/))
2. **Comparador** — ¿frente a qué alternativa? (ver [coste de oportunidad](../coste-de-oportunidad/))
3. **Horizonte** — ¿durante cuánto tiempo, y [descontado](../descuento-y-preferencia-temporal/)?
4. **Clase de beneficio** — ¿libera efectivo, es capacidad, o cualitativo? (ver [ahorros liberadores de efectivo frente a no liberadores de efectivo](../ahorros-liberadores-de-efectivo-frente-a-no-liberadores-de-efectivo/))

## Ejemplo resuelto

Sistema de programación electrónica, coste £500.000 en 3 años.

```
Libera efectivo:  reducción de turnos de agencia         £450.000
Capacidad:        tiempo admin de gestor de sala liberado £600.000 (tasado, no capitalizado)
Cualitativo:      satisfacción del personal, seguridad    no monetizado

ROI financiero estricto  = (450.000 − 500.000)/500.000 = −10%
ROI económico            = (1.050.000 − 500.000)/500.000 = +110%
```

Ambas cifras son verdaderas. Un proveedor que cita "+110% de ROI" a un CFO que solo puede capitalizar £450k perderá confianza; presentar ambas, etiquetadas, la gana. La misma división protege a un defensor interno cuando finanzas audita los beneficios dos años después.

## Conexión con la ingeniería de software

Cada propuesta de herramientas tiene una diapositiva de ROI; casi ninguna declara los cuatro parámetros. El fallo más común es la mezcla de categorías: ganancias de capacidad (minutos de desarrollador) presentadas como retorno financiero. Estructura el ROI de IA/plataforma como el ejemplo resuelto anterior — línea de efectivo, línea de capacidad, línea cualitativa — y añade [análisis de sensibilidad](../análisis-de-sensibilidad/) sobre las cifras blandas. Para la comprobación de realidad de P&G sobre el ROI de IA específicamente, ver [retorno de la inversión en IA](../retorno-de-la-inversión-en-ia/).

## Errores comunes

- **Blanqueo de perspectiva**: beneficios sociales durante una década citados a un titular de presupuesto con horizonte de 12 meses.
- **Bruto en lugar de neto**: "devuelve £3M" con un gasto de £2M es 50% de ROI, no 300%.
- **Maximización de ratio**: los denominadores pequeños producen ROI espectaculares en inversiones triviales; clasifica las carteras por VPN o [beneficio monetario neto](../beneficio-monetario-neto/), usa el ROI como cribado.
- **Sin auditoría de beneficios**: el ROI previsto sin seguimiento de [realización de beneficios](../realización-de-beneficios/) es una promesa, no un resultado.

## Fuentes

- Masters R, et al. "Return on investment of public health interventions: a systematic review." J Epidemiol Community Health 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
- HM Treasury Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
