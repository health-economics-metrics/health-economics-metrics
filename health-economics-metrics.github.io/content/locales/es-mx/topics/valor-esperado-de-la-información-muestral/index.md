# Valor Esperado de la Información Muestral (EVSI)

El EVSI es el valor de *un estudio concreto propuesto* (con un diseño y un tamaño muestral dados) antes de realizarlo, a diferencia del [EVPI](../valor-esperado-de-la-información-perfecta/), que valora eliminar por completo toda la incertidumbre. El EVSI responde a la pregunta a la que se enfrenta de verdad el financiador de una investigación: «¿vale la pena *este* estudio, con *este* tamaño?».

## Por qué importa

El EVPI da un techo al valor que podría tener cualquier estudio; nunca dice si el estudio que se tiene delante supera el listón. Un financiador nacional de investigación que elige entre un piloto de 50 pacientes y un ensayo decisivo de 500 necesita saber el valor de *cada diseño*, no solo el de saberlo todo. El EVSI da esa cifra y, como escala con el tamaño muestral, el financiador puede hallar el tamaño que maximiza el beneficio neto esperado en lugar de adivinarlo.

Por eso el EVSI es siempre menor o igual que el EVPI: una muestra finita resuelve la incertidumbre solo en parte, y un estudio que parezca valer más que la información perfecta es señal de un error de cálculo, no un resultado real.

## Las matemáticas

```
Caso general:
EVSI(n) = E_datos[ max_d E_θ|datos[NB(d,θ)] ]  −  max_d E_θ[NB(d,θ)]
  (esperanza anidada: la externa sobre los posibles resultados del estudio,
  la interna sobre la creencia posterior sobre θ tras ver ese resultado;
  suele estimarse con Monte Carlo anidado / actualización bayesiana sobre
  las extracciones del análisis de sensibilidad probabilístico)

Aproximación normal de forma cerrada (un parámetro incierto, modelo normal-normal
conjugado; atajo habitual, no exacto para todo modelo):
EVSI(n) = EVPI × n / (n + n0)

n  = tamaño muestral del estudio propuesto
n0 = «tamaño muestral equivalente de la creencia previa»: el tamaño muestral
     hipotético que aportaría la misma información que la creencia actual,
     derivado del cociente entre la varianza de los datos y la de la previa
ENBS(n) = EVSI(n) − Costo(n)
EVSI poblacional = EVSI_por_decisión × decisiones_afectadas
```

La forma general es una esperanza anidada porque el resultado futuro del estudio es en sí incierto: hay que promediar sobre cada conjunto de datos posible y, para cada uno, recalcular la mejor decisión con la creencia actualizada (posterior). La aproximación normal cambia ese costo de cálculo por un único cociente, válido cuando el parámetro incierto y los datos son (aproximadamente) normales y conjugados: una comodidad, no una ley universal. El Monte Carlo anidado completo es el método de uso general cuando ese supuesto no se cumple. Véase [análisis de sensibilidad probabilístico](../análisis-de-sensibilidad-probabilístico/) para las extracciones de PSA a partir de las que suele estimarse el EVSI.

## Ejemplo resuelto

Continuando el ejemplo resuelto del [EVPI](../valor-esperado-de-la-información-perfecta/) (despliegue de un asistente de documentación con IA en 5,000 clínicas, donde el EVPI resultó ser de £1.2 millones), aquí se escribe ese mismo EVPI completo: **EVPI = £1,200,000**.

Un piloto propuesto abarca 50 clínicas. A partir del cociente entre la varianza de la creencia previa y la precisión de medición del piloto, el tamaño muestral equivalente de la previa es `n0 = 75`:

```
EVSI(50) = 1,200,000 × 50 / (50 + 75)
         = 1,200,000 × 50 / 125
         = 1,200,000 × 0.4
         = £480,000
```

El piloto cuesta £120,000:

```
ENBS = EVSI − Costo = 480,000 − 120,000 = £360,000
```

Un ENBS claramente positivo: financiar el piloto. Si la misma decisión de adquisición se repite en 3 trusts regionales similares, el valor del piloto se escala en consecuencia:

```
EVSI poblacional = 480,000 × 3 = £1,440,000
```

## Conexión con la ingeniería de software

El EVSI es la economía de *cuán grande* debe ser un piloto o una prueba A/B, no solo de si hacerlo:

- **El tamaño muestral es una decisión de inversión.** Una beta de 50 usuarios y un despliegue por fases hasta 5,000 son «estudios» distintos con EVSI y costos distintos; el EVSI permite compararlos en igualdad de base en lugar de recurrir al valor por defecto de «más datos siempre es mejor».
- **La prueba de suscripción es ENBS, no solo EVSI.** Un estudio con un EVSI alto cuyo costo se lo come casi todo es una propuesta débil; la regla de decisión es el beneficio neto esperado de la muestra, igual que un caso de negocio pone el beneficio frente al costo en lugar de informar solo del beneficio.
- **El rendimiento marginal decreciente se ve con claridad.** Como el EVSI(n) crece como `n/(n+n0)`, duplicar el tamaño del piloto nunca duplica su valor: la versión formal de la intuición del ingeniero de que un experimento mayor tiene un valor informativo marginal decreciente.

## Trampas habituales

- **Usar la aproximación normal fuera de sus supuestos.** Solo es aproximadamente válida para la incertidumbre conjugada de un parámetro; un modelo de decisión realmente no lineal o con varios parámetros necesita el Monte Carlo anidado completo, no este atajo.
- **Comparar el EVSI solo con el costo en efectivo.** El EVSI debe contrastarse con el costo *completo* del estudio, incluido el costo de retrasar la propia decisión (véase [costo del retraso](../costo-de-retraso/)), no solo la factura del estudio.
- **Tratar un EVSI > EVPI como un hallazgo real.** Por construcción, el EVSI nunca puede superar al EVPI; un cálculo que lo produce es un error de modelo, no un descubrimiento.

## Fuentes

- Ades AE, Lu G, Claxton K. "Expected value of sample information calculations in medical decision modeling." Medical Decision Making 2004;24(2):207-27.
- Willan AR, Pinto EM. "The value of information and optimal clinical trial design." Statistics in Medicine 2005;24(12):1791-806.
- Strong M, Oakley JE. "When is a model-based value of information analysis feasible?" Medical Decision Making 2014.
