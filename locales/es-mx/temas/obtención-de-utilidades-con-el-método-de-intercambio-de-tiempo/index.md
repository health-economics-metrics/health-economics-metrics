# Obtención de utilidades con el método de intercambio de tiempo (TTO)

El TTO es el método estándar para obtener el valor de utilidad de un estado de salud directamente de quien responde, en lugar de inventarlo. Es uno de los métodos de obtención (junto con la lotería estándar y los experimentos de elección discreta) que producen los conjuntos de valores que hay detrás de instrumentos como el [EQ-5D](../eq-5d/) y, por tanto, detrás de la mayoría de los cálculos posteriores de [QALY](../año-de-vida-ajustado-por-calidad/).

## Por qué importa

Cada peso de utilidad que entra en un cálculo de QALY tuvo que salir de algún sitio. El TTO es el «cómo»: para un estado considerado mejor que la muerte, se pregunta a quien responde cuántos años `X` en salud perfecta equivalen a `T` años en el estado deteriorado (`X < T`); la utilidad es `X / T`. Para un estado que algunos encuestados consideran peor que la muerte, la fórmula estándar deja de funcionar (no puede representar limpiamente una utilidad por debajo de cero), así que se usa el TTO ampliado. Un ingeniero de software o un analista que trata un peso de utilidad como un dato de entrada dado, sin saber que hizo falta un protocolo de obtención validado para conseguirlo, está a un paso de una cifra que no podrá defender cuando se la cuestionen.

## Las matemáticas

```
TTO estándar (estado mejor que la muerte):
  utilidad = tiempo_en_salud_perfecta / tiempo_en_estado_deteriorado

TTO ampliado (estado peor que la muerte):
  utilidad = -tiempo_cambiado_por_la_muerte / (duración_total - tiempo_cambiado_por_la_muerte)
```

`tiempo_en_salud_perfecta` / `tiempo_en_estado_deteriorado`: `X` años en salud perfecta considerados equivalentes a `T` años en el estado deteriorado. `tiempo_cambiado_por_la_muerte` / `duración_total`: en el planteamiento peor-que-la-muerte, de `T` años de vida restante, los años `a` que la persona cambiaría por la muerte inmediata, prefiriendo `T − a` años en salud perfecta seguidos de la muerte a `T` años en el estado peor que la muerte. El resultado es negativo, anclado de modo que la muerte = 0.

## Ejemplo resuelto

**Estándar**: una persona está en un estado deteriorado durante 10 años y es indiferente ante 7 años en salud perfecta: utilidad = 7 / 10 = **0.7**.

**Peor que la muerte**: de 10 años de vida restante, la persona cambiaría 2 años por la muerte inmediata (prefiere 8 años en salud perfecta seguidos de la muerte a 10 años en el estado peor que la muerte): utilidad = −2 / (10 − 2) = −2 / 8 = **−0.25**.

## Conexión con la ingeniería de software

El mismo punto con el que se topa una encuesta de DevEx o de compromiso cuando pide a la gente que puntúe algo en una escala de 0–10 sin validar se aplica aquí a la inversa: el TTO existe justamente porque «simplemente pide a la gente que lo puntúe» no es en sí un método de obtención validado. Antes de construir un índice compuesto (una puntuación de DevEx, un índice de compromiso, una escala de agotamiento) sobre una cifra autoinformada, conviene preguntar con qué se obtuvo y si ese método estaba validado; es la misma pregunta que se hacen los economistas de la salud sobre un peso de utilidad antes de que entre en un QALY.

## Trampas habituales

- **Generalizar a partir de un único valor**: los valores de TTO se obtienen de una *muestra* del público (o de pacientes), no de la persona cuya atención se decide; usar el valor de TTO de una sola persona como si se generalizara es un error muestral.
- **Formular mal el estado**: la fórmula de TTO estándar supone que el estado es inequívocamente mejor que la muerte; aplicarla a un estado que algunos encuestados considerarían peor que la muerte sin pasar a la formulación ampliada da en silencio una utilidad errónea (positiva).
- **Duraciones no comparables**: los valores de TTO obtenidos con distintas vidas restantes `T` para la comparación peor-que-la-muerte no son directamente comparables sin comprobar que el diseño del estudio mantuvo `T` constante.

## Fuentes

- Torrance GW. "Social preferences for health states: an empirical evaluation of three measurement techniques." Socioecon Plan Sci. 1976;10(3):129-36.
- Patrick DL, Starks HE, Cain KC, Uhlmann RF, Pearlman RA. "Measuring preferences for health states worse than death." Med Decis Making. 1994;14(1):9-18.
