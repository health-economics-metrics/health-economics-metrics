# Beneficio Monetario Neto (NMB)

El NMB convierte un resultado de coste-efectividad en un único valor monetario: la ganancia de salud valorada al umbral de disposición a pagar, menos el coste. Su gemelo, el Beneficio Sanitario Neto (NHB), expresa la misma regla en unidades de salud.

## Por qué importa

Los ratios ([ICER](../incremental-cost-effectiveness-ratio/)) son incómodos: se disparan cerca de un efecto nulo, no se pueden promediar entre extracciones de incertidumbre y no permiten clasificar limpiamente tres o más opciones. El NMB resuelve todo esto: es lineal, así que puedes clasificar opciones, promediar extracciones de Monte Carlo y descomponer contribuciones. Es también la forma de las matemáticas de la economía de la salud que cualquier ingeniero ya conoce: *valor menos coste*.

## Las matemáticas

```
NMB = (ΔE × λ) − ΔC
NHB = ΔE − (ΔC / λ)

ΔE = efecto incremental (p. ej., QALYs)
ΔC = coste incremental
λ  = umbral de disposición a pagar (véase willingness-to-pay-thresholds.md)

Regla de decisión: adoptar si NMB > 0 (equivalentemente NHB > 0).
Entre alternativas: elegir el NMB más alto.
```

NMB > 0 ⇔ ICER < λ (cuando ΔE > 0), así que las dos reglas coinciden: el NMB simplemente se comporta mejor.

## Ejemplo resuelto

Tres opciones para un servicio de diabetes, por cada 1,000 pacientes, λ = £20,000/QALY:

```
Opción            ΔC          ΔE (QALYs)   NMB = 20,000×ΔE − ΔC
App + coaching    £400,000    30           600,000 − 400,000 = £200,000
Solo app          £150,000    12           240,000 − 150,000 = £90,000
Consultas extra   £700,000    32           640,000 − 700,000 = −£60,000
```

Las consultas extra ganan más QALYs pero destruyen valor a este umbral (NMB < 0). App + coaching gana. Nótese que el NMB permite *clasificar las tres a la vez*: los ICER por pares necesitarían el procedimiento de frontera de [dominance and the efficiency frontier](../dominance-and-efficiency-frontier/), y llegan a la misma respuesta.

Vista NHB del ganador: 30 − 400,000/20,000 = 30 − 20 = **10 QALYs netos**: la salud ganada más allá de lo que el mismo dinero habría producido en otro sitio.

## Conexión con la ingeniería de software

`(horas ahorradas × tarifa horaria cargada) − coste de la herramienta`: el business case cotidiano de herramientas, es literalmente un cálculo de NMB con λ = coste cargado del ingeniero. Dos mejoras que aporta la economía de la salud:

- **Convierte λ en una variable, no en una constante.** Representa el NMB frente a λ ("valor de una hora-ingeniero") y muestra dónde se invierte la decisión; distintos interesados pueden entonces aplicar su propia valoración sin rehacer tus cálculos.
- **Pensamiento NHB**: «esta plataforma ahorra 5,000 horas-ingeniero pero consume presupuesto que habría comprado 3,000 horas-ingeniero de capacidad de contratista: 2,000 horas netas» obliga a la comparación de coste de oportunidad en unidades de capacidad. Véase [opportunity cost](../opportunity-cost/).

## Trampas habituales

- **Ocultar el umbral**: un NMB no tiene sentido sin indicar λ; informa el NMB a £20k y £30k, o representa la curva.
- **Usar el NMB para blanquear efectos diminutos**: una población enorme multiplicada por un efecto por persona insignificante puede producir un NMB grande: informa los efectos por persona junto a él.
- **Olvidar que el NMB hereda toda la incertidumbre** de ΔC y ΔE: combínalo con el [análisis de sensibilidad probabilístico](../probabilistic-sensitivity-analysis/).

## Fuentes

- York Health Economics Consortium glossary: net monetary benefit. <https://yhec.co.uk/glossary/net-monetary-benefit/>
- Stinnett AA, Mullahy J. "Net health benefits: a new framework for the analysis of uncertainty in cost-effectiveness analysis." <https://pmc.ncbi.nlm.nih.gov/articles/PMC2528971/>
