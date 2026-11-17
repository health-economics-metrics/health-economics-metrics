# Comparación del ICER entre monedas

Comparar un [ICER](../ratio-de-costo-efectividad-incremental/) calculado en la moneda de un país con el [umbral de disposición a pagar](../umbrales-de-disposición-a-pagar/) de otro, o agrupar datos de costos recogidos en un ensayo multinacional, exige un paso de conversión monetaria explícito y auditable. Elegir mal el método de conversión puede invertir la decisión de adopción a partir de la misma evidencia, aunque los datos clínicos o de costos no hayan cambiado.

## Por qué importa

Las directrices metodológicas de ISPOR para ensayos clínicos multinacionales (Willke y otros, *Health Economics*, 1998) recomiendan convertir los costos de recursos con la **paridad de poder adquisitivo (PPA)** —no con el tipo de cambio de mercado— al comparar el valor económico real de los recursos entre países, y reservar el tipo de cambio de mercado para su propósito real: modelizar flujos de efectivo transfronterizos efectivos. Confundir ambos es uno de los errores metodológicos más habituales en la ETS multinacional, porque a quien no ha leído las directrices los dos le parecen «un tipo de cambio», y la hoja de cálculo no impedirá equivocarse.

## Las matemáticas

```
icer_en_moneda_local = convertir(icer_en_moneda_origen, factor_de_conversión)

el factor_de_conversión debería ser:
  factor de conversión PPA   — para comparar el valor económico real de los
                               recursos entre países (recomendación de ISPOR
                               para CEA multinacional)
  tipo de cambio de mercado  — solo para pagos en efectivo transfronterizos reales

adoptar si icer_en_moneda_local < umbral_local
```

La regla de decisión es la habitual [regla del ICER](../umbrales-de-disposición-a-pagar/) —`adoptar si ICER < λ`—; la pregunta metodológica de este tema es *qué factor de conversión* produce el `icer_en_moneda_local` al que se aplica esa regla.

## Ejemplo resuelto

Un fármaco tiene un ICER de un ensayo estadounidense de $45,000/QALY. Un país importador hipotético ha fijado su propio umbral compuesto en £34,000/QALY (cifra hipotética específica del país solo para este ejemplo; los umbrales reales varían por país y cambian con el tiempo, y siempre deben citar fuente y fecha).

**Con un factor de conversión PPA de 0.72** (cifra ilustrativa solo para este ejemplo): $45,000 × 0.72 = £32,400/QALY. £32,400 < £34,000 → **adoptar**.

**Con el tipo de cambio de mercado de 0.79** (cifra ilustrativa): $45,000 × 0.79 = £35,550/QALY. £35,550 > £34,000 → **rechazar**.

El mismo ICER de $45,000/QALY da una decisión de adoptar al convertir con PPA y una de rechazar al convertir con el tipo de mercado. Es una ilustración concreta de por qué las directrices de ISPOR consideran que la elección del factor de conversión tiene relevancia metodológica: no es un detalle de redondeo ni algo que se deje implícito en una fórmula de hoja de cálculo que nadie revisa.

## Conexión con la ingeniería de software

Es el reflejo en economía de la salud de un problema de ingeniería conocido: la corrección de la fijación de precios multimoneda i18n/l10n en el software comercial, donde una página de precios de SaaS no debe comparar en silencio un importe en `$` con un precio en `£`. La garantía a nivel de tipos que ofrece un tipo `Money` bien diseñado (un método de comparación que rechaza comparar monedas distintas y obliga a una conversión explícita primero) es el paralelo directo en ingeniería de software del punto metodológico de la economía de la salud: no compares cifras sin convertir entre monedas, ni dejes el paso de conversión implícito o sin documentar.

## Trampas habituales

- **Comparar en silencio importes de monedas distintas**: un trabajo de ETS improvisado en una hoja de cálculo que resta o compara cifras en dólares con cifras en libras sin convertir antes, el tipo de error que un tipo `Money` consciente de la moneda detecta estructuralmente en lugar de dejarlo como fallo silencioso.
- **Confundir el tipo de cambio de mercado con la PPA**: el error metodológico más habitual en la ETS multinacional según las directrices de ISPOR; las dos cifras pueden diferir mucho y responden a preguntas distintas (valor económico real frente a flujo de efectivo real).
- **No fechar el tipo de cambio ni el índice de PPA empleados**: ambos cambian con el tiempo, así que cada factor de conversión citado debe llevar fecha, como este repositorio fecha el resto de sus cifras de referencia (el precio del carbono del Green Book, el valor de una muerte evitada, etc.).

## Fuentes

- Willke RJ, Glick HA, Polsky D, Schulman K. "Estimating country-specific cost-effectiveness from multinational clinical trials." *Health Economics*. 1998;7(6):481-93.
- OECD, Purchasing Power Parities (PPP) data. <https://www.oecd.org/en/data/indicators/purchasing-power-parities-ppp.html>
