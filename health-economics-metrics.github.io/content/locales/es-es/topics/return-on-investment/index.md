# Retorno de la inversión (ROI)

El ROI es la razón entre la ganancia neta y el dinero invertido. Es la métrica que la ingeniería y las finanzas ya comparten; la economía de la salud añade la disciplina que hace que una afirmación de ROI resista el escrutinio: perspectiva declarada, comparador, horizonte y categorías de beneficio.

## Por qué importa

El ROI es la lengua franca de los responsables presupuestarios, y la salud pública también lo utiliza: la revisión de referencia de Masters et al. encontró un **ROI mediano de 14.3:1** para las intervenciones de salud pública (cada 1£ genera ~14£ de retorno para la economía y el sistema de salud en general) — una cifra ampliamente usada para defender el gasto en prevención. Pero ese 14:1 es una cifra *social, de horizonte largo*; el ROI de un director financiero hospitalario tiene la perspectiva del pagador y un horizonte de 1-3 años. La mayoría de las disputas sobre el ROI son en realidad disputas sobre una perspectiva no declarada.

## Las matemáticas

```
ROI = (Beneficios − Costes) / Costes      (a menudo × 100%)

Periodo de recuperación = Costes / beneficio neto anual
```

Una afirmación de ROI está infraespecificada sin cuatro declaraciones:

1. **Perspectiva** — ¿de quién son los beneficios que cuentan? (véase [perspectiva del análisis](../analysis-perspective/))
2. **Comparador** — ¿frente a qué alternativa? (véase [coste de oportunidad](../opportunity-cost/))
3. **Horizonte** — ¿durante cuánto tiempo, y [descontado](../discounting-and-time-preference/)?
4. **Clase de beneficio** — ¿libera caja, es de capacidad o es cualitativo? (véase [beneficios que liberan caja frente a los que no](../cash-releasing-vs-non-cash-releasing/))

## Ejemplo práctico

Sistema de e-rostering (planificación electrónica de turnos), coste 500,000£ a lo largo de 3 años.

```
Libera caja:   reducción de turnos de agencia        450,000£
Capacidad:     tiempo administrativo liberado         600,000£ (valorado, no ingresado)
               de la supervisora de planta
Cualitativo:   satisfacción del personal, seguridad   no monetizado

ROI financiero estricto = (450,000 − 500,000)/500,000 = −10%
ROI económico            = (1,050,000 − 500,000)/500,000 = +110%
```

Ambas cifras son ciertas. Un proveedor que anuncie "+110% de ROI" a un director financiero que solo puede ingresar 450,000£ perderá su confianza; presentar ambas, etiquetadas, la gana. La misma separación protege a un defensor interno cuando finanzas audita los beneficios dos años después.

## Conexión con la ingeniería de software

Toda propuesta de herramientas tiene una diapositiva de ROI; casi ninguna declara los cuatro parámetros. El fallo más común es la mezcla de categorías: las ganancias de capacidad (minutos de desarrollador) presentadas como retorno financiero. Estructura el ROI de IA/plataforma como en el ejemplo práctico anterior — línea de caja, línea de capacidad, línea cualitativa — y añade un [análisis de sensibilidad](../sensitivity-analysis/) sobre las cifras blandas. Para la comprobación de realidad en la cuenta de resultados del ROI de la IA en particular, véase [retorno de la inversión en IA](../ai-return-on-investment/).

## Escollos

- **Blanqueo de perspectiva**: beneficios sociales a una década vista citados ante un responsable presupuestario con un horizonte de 12 meses.
- **Bruto en lugar de neto**: "genera 3 M£" sobre un gasto de 2 M£ es un ROI del 50%, no del 300%.
- **Maximización del ratio**: denominadores diminutos producen ROI espectaculares en inversiones triviales; ordena las carteras por VAN o [beneficio monetario neto](../net-monetary-benefit/), y usa el ROI como filtro.
- **Sin auditoría de beneficios**: un ROI previsto sin seguimiento de la [realización de beneficios](../benefits-realization/) es una promesa, no un resultado.

## Fuentes

- Masters R, et al. "Return on investment of public health interventions: a systematic review." J Epidemiol Community Health 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
- HM Treasury Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
