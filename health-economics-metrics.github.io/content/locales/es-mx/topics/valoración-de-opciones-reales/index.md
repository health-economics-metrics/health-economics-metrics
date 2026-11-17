# Valoración de opciones reales

La valoración de opciones reales aplica la lógica de la fijación de precios de opciones financieras a decisiones de inversión reales (no negociadas en un mercado financiero), en concreto a la *opción de ampliación*: el derecho a ampliar un proyecto más adelante si tiene éxito, sin estar obligado a hacerlo. Un modelo binomial simplificado de un periodo (Cox, Ross, Rubinstein, 1979) valora esta flexibilidad directamente y convierte el «entregar en pequeño y ver» de una corazonada en una cifra con precio.

## Por qué importa

Un cálculo estático del valor actual pone precio al proyecto como una apuesta de todo o nada: financiar o no, a la escala de hoy, para siempre. Los proyectos reales, y en especial los despliegues de salud digital por fases, rara vez se plantean así: un sistema de salud puede financiar un piloto pequeño, ver qué ocurre y comprometer más dinero solo si funciona. Esa flexibilidad tiene un valor real, y pasarla por alto infravalora sistemáticamente las inversiones por fases frente a las de un solo pago, justo lo contrario de los procesos de compra que premian la propuesta por fases que parece más segura. La valoración de opciones reales pone precio a la propia flexibilidad, de modo que una propuesta por fases pueda compararse en justicia con la alternativa de compromiso total, en lugar de ser penalizada por parecer menor en la línea ingenua del valor actual.

## Las matemáticas

```
Probabilidad neutral al riesgo del estado «al alza»:
  p = ((1 + tasa_libre_de_riesgo) − factor_a_la_baja) / (factor_al_alza − factor_a_la_baja)

Pago por ampliación en cada estado (acotado inferiormente en cero; ampliar es opcional):
  pago_al_alza  = max(valor_del_proyecto × factor_al_alza − costo_de_ampliación, 0)
  pago_a_la_baja = max(valor_del_proyecto × factor_a_la_baja − costo_de_ampliación, 0)

Valor de la opción (pago esperado descontado):
  valor_opción = (p × pago_al_alza + (1 − p) × pago_a_la_baja) / (1 + tasa_libre_de_riesgo)

VAN ampliado = van_estático + valor_opción
```

El valor del proyecto sube (`factor_al_alza`) o baja (`factor_a_la_baja`) hasta el siguiente punto de decisión. La ampliación solo se ejerce cuando es rentable en ese estado: el suelo en cero del pago es lo que la convierte en una verdadera *opción*, no en una obligación. Para valorar la opción de reunir información primero, en lugar de la opción de ampliar después, véase [valor esperado de la información perfecta](../valor-esperado-de-la-información-perfecta/). Para el costo de esperar a esta decisión, véase [costo del retraso](../costo-de-retraso/).

## Ejemplo resuelto

Un piloto de servicio digital con `valor_del_proyecto = £1,000,000`, que puede subir 1.5× o bajar a 0.5× hasta el siguiente punto de decisión, una tasa libre de riesgo del 8 % y un costo de ampliación de £600,000:

```
p = (1.08 − 0.5) / (1.5 − 0.5) = 0.58

pago_al_alza  = max(1,000,000 × 1.5 − 600,000, 0) =  900,000
pago_a_la_baja = max(1,000,000 × 0.5 − 600,000, 0) = max(−100,000, 0) = 0

El suelo actúa: la opción NO se ejercería si el mercado decepciona;
el costo de ampliación de £600,000 supera los £500,000 que valdría el
proyecto en el estado «a la baja».

valor_opción = (0.58 × 900,000 + 0.42 × 0) / 1.08
             = 522,000 / 1.08
             ≈ £483,333.33
```

Sumando el valor de la opción a la base de VAN estático de £200,000: VAN ampliado = 200,000 + 483,333.33 ≈ **£683,333.33**. Informar solo del VAN estático de £200,000 sin el valor de esta opción infravaloraría el valor real del proyecto por fases en más del doble.

## Conexión con la ingeniería de software

Es la versión formal de «entrega ya la versión mínima y conserva la opción de invertir más si cuaja»: directamente relevante para el despliegue por fases de un producto de salud digital, paralelo estructural de los marcos de secuenciación bajo incertidumbre de [costo del retraso](../costo-de-retraso/) y [WSJF y CD3](../wsjf-y-cd3/), y complementario del [valor esperado de la información perfecta](../valor-esperado-de-la-información-perfecta/) y del [valor esperado de la información muestral](../valor-esperado-de-la-información-muestral/): los tres ponen precio a la flexibilidad o a la información bajo incertidumbre desde ángulos distintos.

## Trampas habituales

- **Tomar prestada la valoración neutral al riesgo sin el supuesto de activo negociable en que se apoya**: los modelos de opciones reales toman prestada la probabilidad neutral al riesgo de la valoración de opciones financieras, que supone que el valor subyacente es un activo *negociable*; para un proyecto real verdaderamente no negociable es una comodidad de modelización, no un hecho de mercado literal.
- **Tratar `factor_al_alza`/`factor_a_la_baja` como parámetros libres**: las entradas al alza y a la baja del binomio son en sí supuestos que necesitan justificación, no parámetros libres elegidos para obtener la respuesta deseada.
- **Informar solo del valor de la opción**: el valor de una opción real *se suma* al VAN estático del proyecto independiente; el error común es informar solo del valor de la opción y omitir el caso base, lo que exagera el caso cuando el VAN estático es negativo y lo infravalora (como en el ejemplo resuelto anterior) cuando se omite por completo el VAN estático.

## Fuentes

- Cox JC, Ross SA, Rubinstein M. "Option pricing: a simplified approach." J Financ Econ. 1979;7(3):229-63.
- Trigeorgis L. *Real Options: Managerial Flexibility and Strategy in Resource Allocation*. MIT Press. 1996.
- Driffield T, Smith PC. "A real options approach to watchful waiting: theory and an illustration." Med Decis Making. 2007;27(2):178-88 — vincula las opciones reales directamente con el contexto de decisión de la economía de la salud. <https://pubmed.ncbi.nlm.nih.gov/17395932/>
