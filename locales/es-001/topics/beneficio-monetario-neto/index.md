# Beneficio Monetario Neto (BMN)

El BMN convierte un resultado de coste-efectividad en un único valor monetario: la ganancia de salud tasada al umbral de disposición a pagar, menos el coste. Su gemelo, el Beneficio de Salud Neto (BSN), expresa la misma regla en unidades de salud.

## Por qué importa

Las razones ([RCEI](../ratio-de-coste-efectividad-incremental/)) son incómodas: explotan cerca de efecto cero, no pueden promediarse a través de extracciones de incertidumbre, y no pueden clasificar limpiamente tres o más opciones. El BMN arregla todo eso — es lineal, así que puedes clasificar opciones, promediar extracciones de Monte Carlo y descomponer contribuciones. También es la forma de matemática de economía de la salud que todo ingeniero ya conoce: *valor menos coste*.

## El cálculo

```
BMN = (ΔE × λ) − ΔC
BSN = ΔE − (ΔC / λ)

ΔE = efecto incremental (p. ej., AVAC)
ΔC = coste incremental
λ  = umbral de disposición a pagar (ver willingness-to-pay-thresholds.md)

Regla de decisión: adopta si BMN > 0 (equivalentemente BSN > 0).
Entre alternativas: elige el BMN más alto.
```

BMN > 0 ⇔ RCEI < λ (cuando ΔE > 0), así que las dos reglas concuerdan — el BMN simplemente se comporta mejor.

## Ejemplo resuelto

Tres opciones para un servicio de diabetes, por 1.000 pacientes, λ = £20.000/AVAC:

```
Opción           ΔC          ΔE (AVAC)   BMN = 20.000×ΔE − ΔC
Aplicación + coaching   £400.000    30           600.000 − 400.000 = £200.000
Solo aplicación         £150.000    12           240.000 − 150.000 = £90.000
Clínicas extra    £700.000    32           640.000 − 700.000 = −£60.000
```

Las clínicas extra ganan más AVAC pero destruyen valor a este umbral (BMN < 0). Aplicación + coaching gana. Nota que el BMN te permite *clasificar las tres a la vez* — los RCEI por pares necesitarían el procedimiento de frontera en [dominancia y la frontera de eficiencia](../dominancia-y-la-frontera-de-eficiencia/), y llegar a la misma respuesta.

Vista BSN del ganador: 30 − 400.000/20.000 = 30 − 20 = **10 AVAC netos** — la salud ganada más allá de lo que el mismo dinero habría producido en otro lugar.

## Conexión con la ingeniería de software

`(horas ahorradas × tarifa horaria cargada) − coste de la herramienta` — el caso de negocio de herramientas cotidiano — es literalmente un cálculo de BMN con λ = coste cargado del ingeniero. Dos mejoras que añade la economía de la salud:

- **Haz de λ una variable, no una constante.** Traza el BMN frente a λ ("valor de una hora-ingeniero") y muestra dónde se invierte la decisión; diferentes partes interesadas pueden entonces aplicar su propia valoración sin rehacer tu matemática.
- **Pensamiento BSN**: "esta plataforma ahorra 5.000 horas-ingeniero pero consume presupuesto que habría comprado 3.000 horas-ingeniero de capacidad de contratista — neto 2.000 horas" fuerza la comparación de coste de oportunidad en unidades de capacidad. Ver [coste de oportunidad](../coste-de-oportunidad/).

## Errores comunes

- **Ocultar el umbral**: un BMN es inútil sin declarar λ; informa el BMN a £20k y £30k, o traza la curva.
- **Usar el BMN para blanquear efectos diminutos**: una población enorme por un efecto insignificante por persona puede producir un BMN grande — informa los efectos por persona junto a él.
- **Olvidar que el BMN hereda toda incertidumbre** en ΔC y ΔE — combina con [análisis de sensibilidad probabilístico](../análisis-de-sensibilidad-probabilístico/).

## Fuentes

- Glosario del York Health Economics Consortium: beneficio monetario neto. <https://yhec.co.uk/glossary/net-monetary-benefit/>
- Stinnett AA, Mullahy J. "Net health benefits: a new framework for the analysis of uncertainty in cost-effectiveness analysis." <https://pmc.ncbi.nlm.nih.gov/articles/PMC2528971/>
