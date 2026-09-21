# Adherencia y Persistencia

La adherencia es cuán fielmente el uso real coincide con el uso prescrito (intensidad); la persistencia es cuánto tiempo continúa el uso antes de la interrupción (duración). La farmacia tiene medidas estandarizadas — **MPR** y **PDC**, con ≥80% como el umbral convencional de "adherente" — y los terapéuticos digitales heredan tanto los conceptos como el problema: la adherencia es el multiplicador entre la eficacia y el valor realizado.

## Por qué importa

Los pagadores ya operan con estas cifras: PDC ≥80% alimenta las calificaciones Medicare Star de EE. UU., que mueven ingresos reales de los pagadores — la adherencia es infraestructura financieramente estructural, no una métrica blanda. Para los terapéuticos digitales el patrón se repite: los datos de DiGA muestran volúmenes de prescripción fuertes con adherencia sostenida débil, y el precio de los DTx basado en resultados (que llega a Alemania desde 2026) pagará según resultados condicionados a la adherencia. La actualización conceptual desde la investigación en salud digital: **compromiso efectivo** — compromiso *suficiente* para lograr el resultado previsto — y su corolario, la **dosis mínima efectiva**, establecida empíricamente por intervención en lugar de asumirse como "más es mejor".

## El cálculo

```
MPR = Σ días de suministro dispensado / días en el periodo × 100   (puede superar el 100%;
      sobreestima vía reabastecimientos anticipados)
PDC = días cubiertos por el suministro / días en el periodo × 100     (limitado al 100%;
      el estimador conservador, preferido por CMS)
Adherencia digital = eventos de uso real / eventos de uso prescritos × 100
Persistencia        = días desde el inicio hasta la interrupción
                    (informar % persistente a N meses; métodos de supervivencia)

Condicionamiento de valor: resultado realizado ≈ eficacia × g(adherencia)
  donde g es la función dosis-respuesta; por debajo de la dosis
  mínima efectiva, g ≈ 0 — se incurre en coste, se pierde el beneficio
```

## Ejemplo resuelto

Un producto digital de TCC para el insomnio, prescrito como 6 módulos en 6 semanas; eficacia del ensayo 0,025 AVAC entre quienes completan ≥4 módulos (la dosis mínima efectiva establecida empíricamente):

```
1.000 prescripciones a £250 → £250.000 gasto del pagador
Finalización de módulos: ≥4 módulos 38%; 1-3 módulos 34%; cero módulos 28%

AVAC realizados = 1.000 × 0,38 × 0,025 = 9,5
Coste por AVAC  = 250.000 / 9,5 ≈ £26.300 — marginal en los umbrales de NICE

La ingeniería de adherencia (rediseño de recordatorios, acortamiento de sesiones) eleva
la finalización de ≥4 módulos al 50%: 12,5 AVAC → £20.000/AVAC. El producto
cruzó el umbral de financiación sin tocar el contenido terapéutico.
```

Bajo un precio de rendimiento estilo 2026, el mismo cambio mueve *ingresos* directamente — la ingeniería de adherencia se convierte en la hoja de ruta comercial.

## Conexión con la ingeniería de software

Dos vocabularios convergen en un concepto: la analítica de software ([activación](../activación-y-adopción/), [pegajosidad](../métricas-de-compromiso/), [retención](../retención-y-abandono/)) y la farmacia clínica (MPR, PDC, persistencia) miden ambas la exposición a una intervención — mapea los eventos de tu producto al vocabulario clínico y los pagadores podrán leer tus paneles. La ingeniería posee las palancas de adherencia: la lógica de recordatorios (los pitidos diarios tontos entrenan el descarte; el temporizado adaptativo no), el coste de sesión (un módulo de 20 minutos se completa menos que 3 de 7 minutos), y la telemetría de fricción que localiza *dónde* en el protocolo los usuarios abandonan. Instrumenta la respuesta a la dosis desde el día uno — el análisis de dosis mínima efectiva que condiciona todo el modelo económico necesita datos de uso vinculados al resultado que solo el producto puede recopilar.

## Errores comunes

- **Confusión MPR/PDC**: MPR infla; indica qué estimador y usa PDC para todo lo que se muestre a pagadores.
- **Adherencia a la métrica, no a la terapia**: las aperturas contadas como dosis (ver [métricas de compromiso](../métricas-de-compromiso/)).
- **Objetivos de compromiso "más es mejor"** cuando la intervención tiene una dosis finita — la graduación es éxito, el uso perpetuo no lo es.
- **Reclamaciones de eficacia basadas en supervivientes**: los resultados entre los adherentes incluyen efectos de selección (las personas adherentes son diferentes); la estimación causal honesta necesita aleatorización o ajuste cuidadoso.

## Fuentes

- MPR frente a PDC. <https://phslrx.com/medication-adherence-metrics/>
- Yardley L, et al., compromiso efectivo. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
- Hallazgos de adherencia DiGA, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
