# Número necesario a cribar (NNS)

El NNS es el número de personas que hay que cribar (no solo tratar) para evitar **un** resultado adverso durante un seguimiento definido, dado el riesgo basal de la población y la reducción relativa del riesgo que logran la detección precoz y el tratamiento. Es el análogo a nivel de programa de cribado del NNT: el NNT pregunta a cuántos hay que *tratar* para evitar un resultado; el NNS pregunta cuántas personas deben recorrer todo el camino de *cribado y luego tratamiento* para llegar a ello.

## Por qué importa

Rembold introdujo el NNS en 1998 precisamente para que los programas de cribado pudieran compararse en igualdad de base con el tratamiento, porque la cifra de reducción relativa del riesgo de una prueba de cribado oculta dos cosas que el tratamiento no oculta: el riesgo basal de la población que realmente se invita a cribar, y el hecho de que todas las personas cribadas soportan el costo de la prueba y la carga de los falsos positivos, no solo la minoría que luego se beneficia. El umbral de costo-efectividad del Comité Nacional de Cribado del Reino Unido (véase [economía del cribado](../economía-del-cribado/)) se construye sobre esta misma distinción: un programa de cribado con una reducción relativa del riesgo impresionante en una población de bajo riesgo basal puede tener aun así un NNS de miles, y entonces el costo del programa por resultado evitado se convierte en la pregunta real.

## Las matemáticas

```
NNS = 1 / (riesgo_basal × reducción_relativa_del_riesgo)

riesgo_basal                   = probabilidad del resultado en la población cribada
                                 durante el seguimiento (0–1)
reducción_relativa_del_riesgo  = reducción proporcional del riesgo que logra el
                                 tratamiento precoz posibilitado por el cribado (0–1)

costo_del_programa_por_resultado_evitado = NNS × costo_por_cribado
```

Compárese directamente con el [NNT](../número-necesario-a-tratar/): el NNS pliega la eficacia de todo el embudo cribado → diagnóstico → tratamiento en una sola cifra, mientras que el NNT presupone que el paciente ya está diagnosticado y ha empezado el tratamiento.

## Ejemplo resuelto

La población objetivo de un programa de cribado tiene un riesgo basal del evento del 2 % durante el periodo de estudio (`riesgo_basal = 0.02`) y la detección precoz logra una reducción relativa del riesgo del 25 % (`reducción_relativa_del_riesgo = 0.25`):

```
NNS = 1 / (0.02 × 0.25) = 1 / 0.005 = 200

Hay que cribar a 200 personas para evitar un resultado.

A £50 por cribado:
Costo del programa por resultado evitado = 200 × £50 = £10,000
```

Esos £10,000 deben contrastarse con el costo del propio resultado y con los QALY que habría costado, la misma comparación que hace la [economía de la prevención](../economía-de-la-prevención/) para los programas de prevención en general.

## Conexión con la ingeniería de software

El NNS es «cuántos usuarios, eventos o solicitudes deben pasar por un flujo de detección o triaje para atrapar un verdadero positivo accionable», directamente relevante para los sistemas de monitorización y triaje basados en alertas, donde una condición objetivo de baja prevalencia infla el NNS igual que hunde el valor predictivo positivo (véanse [economía del cribado](../economía-del-cribado/) y [evaluación de IA clínica](../evaluación-clínica-de-la-ia/)). Una regla de monitorización que debe procesar 200 eventos por cada captura real solo merece ejecutarse si esa captura vale al menos 200 veces el costo de triaje por evento: la misma aritmética que el ejemplo sanitario anterior.

## Trampas habituales

- **Ignorar la dependencia del riesgo basal**: la misma prueba o programa de cribado tiene un NNS (y una costo-efectividad) muy distinto en poblaciones de alto y bajo riesgo. No presentes nunca un NNS sin nombrar la población para la que se calculó.
- **Leer mal el denominador**: el NNS cuenta a las personas *cribadas*, no a las que dan positivo o inician el tratamiento; ya incorpora la eficacia de todo el embudo, así que nunca debe compararse con una medida que cuente solo a los positivos.
- **Comparar entre periodos de seguimiento**: un seguimiento más corto suele inflar el NNS porque se observan menos eventos en esa ventana. Las cifras de NNS solo son comparables cuando se calculan para la misma duración de seguimiento.

## Fuentes

- Rembold CM. "Number needed to screen: development of a statistic for disease screening." BMJ. 1998;317(7154):307-12.
