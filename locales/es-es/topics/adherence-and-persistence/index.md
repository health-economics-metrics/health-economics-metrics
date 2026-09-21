# Adherencia y persistencia

La adherencia es el grado en que el uso real coincide con el uso prescrito (intensidad); la persistencia es cuánto tiempo continúa el uso antes de la interrupción (duración). La farmacia cuenta con medidas estandarizadas — **MPR** y **PDC**, con ≥80% como umbral convencional de "adherente" — y las terapias digitales heredan tanto los conceptos como el problema: la adherencia es el multiplicador entre la eficacia y el valor realizado.

## Por qué importa

Los pagadores ya operan con estas cifras: un PDC ≥80% alimenta las Star Ratings de Medicare en EE. UU., que mueven ingresos reales de los pagadores — la adherencia es infraestructura financieramente determinante, no una métrica blanda. En las terapias digitales el patrón se repite: los datos de DiGA muestran volúmenes de prescripción sólidos con una adherencia sostenida débil, y la fijación de precios de las DTx basada en resultados (que llega a Alemania a partir de 2026) pagará en función de resultados condicionados a la adherencia. La actualización conceptual procedente de la investigación en salud digital: el **compromiso eficaz** (*effective engagement*) — un compromiso *suficiente* para lograr el resultado previsto — y su corolario, la **dosis mínima eficaz**, establecida empíricamente para cada intervención en lugar de asumir que "más es mejor".

## Las matemáticas

```
MPR = Σ días de suministro dispensado / días del periodo × 100   (puede superar el 100%;
      sobrestima por reposiciones anticipadas)
PDC = días cubiertos por el suministro / días del periodo × 100     (limitado al 100%;
      el estimador conservador, preferido por CMS)
Adherencia digital = eventos de uso reales / eventos de uso prescritos × 100
Persistencia       = días desde el inicio hasta la interrupción
                    (informar % persistente a N meses; métodos de supervivencia)

Condicionamiento del valor: resultado realizado ≈ eficacia × g(adherencia)
  donde g es la función dosis-respuesta; por debajo de la dosis mínima
  eficaz, g ≈ 0 — se incurre en el coste, se pierde el beneficio
```

## Ejemplo resuelto

Un producto digital de TCC para el insomnio, prescrito como 6 módulos a lo largo de 6 semanas; eficacia en ensayo de 0.025 AVAC entre quienes completan ≥4 módulos (la dosis mínima eficaz establecida empíricamente):

```
1,000 prescripciones a £250 → £250,000 de gasto del pagador
Finalización de módulos: ≥4 módulos 38%; 1–3 módulos 34%; cero módulos 28%

AVAC realizados = 1,000 × 0.38 × 0.025 = 9.5
Coste por AVAC  = 250,000 / 9.5 ≈ £26,300 — marginal en los umbrales de NICE

La ingeniería de la adherencia (rediseño de recordatorios, acortamiento de
sesiones) eleva la finalización de ≥4 módulos al 50%: 12.5 AVAC → £20,000/AVAC.
El producto cruzó el umbral de financiación sin tocar el contenido terapéutico.
```

Con la fijación de precios por resultados al estilo 2026, el mismo cambio mueve los *ingresos* directamente — la ingeniería de la adherencia se convierte en la hoja de ruta comercial.

## Conexión con la ingeniería de software

Dos vocabularios convergen en un mismo concepto: la analítica de software ([activación](../activation-and-uptake/), [stickiness](../engagement-metrics/), [retención](../retention-and-churn/)) y la farmacia clínica (MPR, PDC, persistencia) miden ambas la exposición a una intervención — mapee los eventos de su producto sobre el vocabulario clínico y los pagadores podrán leer sus paneles. La ingeniería controla las palancas de la adherencia: la lógica de recordatorios (los avisos diarios simples entrenan al usuario a descartarlos; la temporización adaptativa no lo hace), el coste de sesión (un módulo de 20 minutos se completa menos que tres de 7 minutos) y la telemetría de fricción que localiza *dónde* del protocolo abandonan los usuarios. Instrumente la dosis-respuesta desde el primer día — el análisis de dosis mínima eficaz que condiciona todo el modelo económico necesita datos de uso vinculados a resultados que solo el producto puede recopilar.

## Trampas habituales

- **Confusión entre MPR y PDC**: el MPR infla las cifras; indique qué estimador utiliza y use PDC para cualquier cosa dirigida al pagador.
- **Adherencia a la métrica, no a la terapia**: aperturas contadas como dosis (véase [métricas de compromiso](../engagement-metrics/)).
- **Objetivos de compromiso de "cuanto más, mejor"** cuando la intervención tiene una dosis finita — la graduación es éxito, el uso perpetuo no lo es.
- **Afirmaciones de eficacia basadas en supervivientes**: los resultados entre quienes son adherentes incluyen efectos de selección (las personas adherentes son diferentes); la estimación causal honesta requiere aleatorización o un ajuste cuidadoso.

## Fuentes

- MPR frente a PDC. <https://phslrx.com/medication-adherence-metrics/>
- Yardley L, et al., compromiso eficaz. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
- Hallazgos de adherencia de DiGA, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
