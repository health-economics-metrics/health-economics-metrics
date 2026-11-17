# Fracción atribuible poblacional (PAF)

La PAF es la proporción de la carga de enfermedad o de un resultado en una población que es atribuible a la exposición a un factor de riesgo concreto: la proporción que desaparecería si se eliminara por completo esa exposición. Convierte «este factor de riesgo duplica tus probabilidades» en una cifra a nivel poblacional en torno a la cual un planificador puede planificar de verdad: cuánto vale la pena combatir esta exposición en casos y en costo.

## Por qué importa

Levin introdujo la PAF en 1953 para responder a una pregunta estrecha y concreta: si nadie fumara, ¿cuánto cáncer de pulmón desaparecería? La misma aritmética dimensiona hoy la planificación preventiva nacional en todas partes, desde las estrategias contra el tabaco y la obesidad hasta las clasificaciones de factores de riesgo del estudio de la Carga Mundial de Morbilidad de la OMS, porque el riesgo relativo por sí solo dice muy poco sobre el impacto: un factor de riesgo puede duplicar la probabilidad de un evento raro y apenas mover la carga de enfermedad de la población, o aumentar un poco la de un evento común y aun así explicar la mayor parte de los casos. La PAF convierte «el factor de riesgo X es peligroso» en «eliminar el factor de riesgo X evitaría tantos casos al año», la cifra que un caso de negocio de un programa de prevención necesita realmente. Véase [economía de la prevención](../economía-de-la-prevención/) para costear actuar sobre esa cifra una vez que se tiene.

## Las matemáticas

```
PAF = prevalencia_exposición × (riesgo_relativo − 1) / (1 + prevalencia_exposición × (riesgo_relativo − 1))

prevalencia_exposición = proporción de la población expuesta al factor de riesgo (0–1)
riesgo_relativo        = riesgo del resultado en expuestos frente a no expuestos (p. ej., 2.5 = 2.5×)

casos_atribuibles = casos_totales × PAF
```

La PAF crece tanto con la prevalencia de la exposición como con el riesgo relativo: un riesgo relativo moderadamente elevado (digamos 1.5×) ligado a una exposición muy común puede dar una PAF mayor que un riesgo relativo espectacular (digamos 5×) ligado a una exposición rara. Esa es toda la razón de que exista como cifra distinta del riesgo relativo.

## Ejemplo resuelto

Un factor de riesgo está presente en el 30 % de la población (`prevalencia_exposición = 0.3`) y multiplica por 2.5 el riesgo del resultado (`riesgo_relativo = 2.5`):

```
PAF = 0.3 × (2.5 − 1) / (1 + 0.3 × (2.5 − 1))
    = 0.3 × 1.5 / (1 + 0.3 × 1.5)
    = 0.45 / 1.45
    ≈ 0.3103 (31.0 %)

Con 1,000 casos al año en la población:
casos_atribuibles = 1,000 × 0.3103 ≈ 310 casos al año
```

Algo menos de un tercio de la carga anual de este resultado es atribuible a la exposición: eliminarla por completo (un techo teórico; ninguna intervención real logra eliminar el 100 % de la exposición) evitaría aproximadamente 310 de cada 1,000 casos cada año.

## Conexión con la ingeniería de software

La PAF es la versión epidemiológica de la pregunta «¿qué fracción del volumen de nuestros incidentes es atribuible a esta causa raíz?», la misma clase de pregunta que se hacen los equipos al medir una clase concreta de despliegues o dependencias frente al conjunto de incidentes de producción, en lugar de tratar cada incidente como igualmente digno de arreglo. Una categoría de causa raíz que aparece en la mayoría de los despliegues y tiene solo un riesgo relativo moderado de provocar un incidente puede superar a una categoría rara de alto riesgo relativo en cuanto a dónde dirigir primero el esfuerzo de ingeniería: exactamente la observación de la PAF, reformulada.

## Trampas habituales

- **Sumar PAF entre factores de riesgo**: las PAF de varios factores que influyen en el mismo resultado no suman 100 %; en conjunto pueden superarlo, porque los factores interactúan y comparten vías causales. Hay que tratar cada PAF como «si solo se eliminara este factor», nunca como un reparto del riesgo total.
- **Trasladar el riesgo relativo entre poblaciones**: un riesgo relativo estimado en una población (distinta prevalencia basal de exposición, distintos factores de confusión) da una PAF engañosa si se aplica a la prevalencia de exposición de otra población.
- **Confundir la PAF con el riesgo atribuible en expuestos**: la PAF es a nivel poblacional y depende de la prevalencia de la exposición; el riesgo atribuible en los expuestos es a nivel individual y no depende de ella. Responden a preguntas distintas: no uses una para responder a la pregunta de la otra.

## Fuentes

- Levin ML. "The occurrence of lung cancer in man." Acta Unio Int Contra Cancrum. 1953;9(3):531-41.
- Rockhill B, Newman B, Weinberg C. "Use and misuse of population attributable fractions." Am J Public Health. 1998;88(1):15-9.
