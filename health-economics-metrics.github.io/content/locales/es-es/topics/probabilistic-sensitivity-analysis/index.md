# Análisis de Sensibilidad Probabilístico (PSA)

El PSA asigna una distribución de probabilidad a cada parámetro incierto, los muestrea todos simultáneamente miles de veces (Monte Carlo), y reporta la *probabilidad* de que una opción sea la mejor elección, en lugar de una única estimación puntual.

## Por qué importa

El caso de referencia de NICE *exige* el PSA. El análisis determinista responde a "¿qué pasa si un input está equivocado?"; el PSA responde a "dado todo lo que no sabemos a la vez, ¿qué probabilidad hay de que estemos tomando la decisión correcta?" Su resultado distintivo, la **curva de aceptabilidad de coste-efectividad (CEAC)**, representa la probabilidad de que una opción sea coste-efectiva frente al umbral de disposición a pagar, convirtiendo "el ICER es de 24,000 £/QALY" en "hay un 78% de probabilidad de que esta sea la decisión correcta a 30,000 £/QALY".

## Las matemáticas

```
Para cada uno de N sorteos (N ≈ 10,000):
  muestrea cada parámetro θ de su distribución
    (costes ~ Gamma, probabilidades ~ Beta, utilidades ~ Beta, efectos ~ Normal/logNormal)
  calcula NMB_j(θ) = λ × Efecto_j(θ) − Coste_j(θ) para cada opción j

CEAC_j(λ) = fracción de sorteos en los que la opción j tiene el mayor NMB al umbral λ
```

Véase [beneficio monetario neto](../net-monetary-benefit/) para el NMB y [umbrales de disposición a pagar](../willingness-to-pay-thresholds/) para λ.

## Ejemplo trabajado

Caso de negocio de migración de plataforma. Tres inputs inciertos:

```
Coste de migración      ~ Gamma,  media 800k £, de 200k £
Beneficio anual         ~ Normal, media 350k £, de 150k £
Duración del beneficio  ~ Uniforme, 3–6 años
```

Para cada uno de los 10,000 sorteos se calcula el beneficio neto = duración × anual − coste (descuento omitido por claridad). Resultados ilustrativos:

```
Beneficio neto medio:        775k £
Probabilidad de neto > 0:    0.86
Percentil 5–95:             −180k £ … +1.9 M £
```

La estimación puntual decía "obviamente sí". El PSA dice "86% sí, con una cola real en la que perdemos 180k £ o más", que es lo que un responsable de cartera realmente necesita, y justifica el caso para realizar primero un spike de descubrimiento (véase [EVPI](../expected-value-of-perfect-information/)).

## Conexión con la ingeniería de software

Los ingenieros ya confían en Monte Carlo para la previsión de entregas (el muestreo de throughput supera a las estimaciones puntuales). Extiende la misma maquinaria al dinero: distribuciones sobre adopción, tiempo ahorrado y salario, y luego reporta "probabilidad de que esta inversión en plataforma sea neta positiva" en lugar de un ROI de falsa precisión. Una curva estilo CEAC — probabilidad de ser la mejor opción en función de cómo valora la organización una hora de ingeniero — es un artefacto genuinamente mejor para un comité de financiación que cualquier cifra única.

## Errores habituales

- **Distribuciones basura**: el PSA con desviaciones estándar inventadas es análisis determinista disfrazado. Basa las dispersiones en datos o en una elicitación estructurada de expertos.
- **Ignorar la correlación** entre parámetros (una adopción alta suele correlacionar con un tiempo ahorrado alto); el muestreo independiente subestima el riesgo de cola.
- **Reportar solo la media** de la simulación — todo el sentido del análisis es la distribución y la probabilidad de decisión.

## Fuentes

- Fenwick E, Claxton K, Sculpher M. "Representing uncertainty: the role of cost-effectiveness acceptability curves." Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11316594/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
