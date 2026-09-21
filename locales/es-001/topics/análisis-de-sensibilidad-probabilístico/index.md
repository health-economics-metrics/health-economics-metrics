# Análisis de Sensibilidad Probabilístico (ASP)

El ASP asigna una distribución de probabilidad a cada parámetro incierto, los muestrea todos simultáneamente miles de veces (Monte Carlo), e informa la *probabilidad* de que una opción sea la mejor elección — en lugar de una única estimación puntual.

## Por qué importa

El caso de referencia de NICE *requiere* ASP. El análisis determinista responde "¿qué pasa si una entrada está equivocada?"; el ASP responde "dado todo lo que no sabemos a la vez, ¿cuán probable es que estemos tomando la decisión correcta?" Su resultado insignia, la **curva de aceptabilidad de coste-efectividad (CEAC)**, traza la probabilidad de que una opción sea coste-efectiva frente al umbral de disposición a pagar — convirtiendo "el RCEI es £24.000/AVAC" en "hay una probabilidad del 78% de que esta sea la elección correcta a £30.000/AVAC".

## El cálculo

```
Para cada uno de N sorteos (N ≈ 10.000):
  muestrea cada parámetro θ de su distribución
    (costes ~ Gamma, probabilidades ~ Beta, utilidades ~ Beta, efectos ~ Normal/logNormal)
  calcula BMN_j(θ) = λ × Efecto_j(θ) − Coste_j(θ) para cada opción j

CEAC_j(λ) = fracción de sorteos en los que la opción j tiene el BMN más alto al umbral λ
```

Ver [beneficio monetario neto](../beneficio-monetario-neto/) para BMN y [umbrales de disposición a pagar](../umbrales-de-disposición-a-pagar/) para λ.

## Ejemplo resuelto

Caso de negocio de migración de plataforma. Tres entradas inciertas:

```
Coste de migración      ~ Gamma,  media £800k, de £200k
Beneficio anual         ~ Normal, media £350k, de £150k
Duración del beneficio  ~ Uniforme, 3–6 años
```

Para cada uno de 10.000 sorteos calcula beneficio neto = duración × anual − coste (descuento omitido por claridad). Resultados ilustrativos:

```
Beneficio neto medio:      £775k
Probabilidad neto > 0:   0,86
Percentil 5.º–95.º:  −£180k … +£1,9M
```

La estimación puntual dijo "obviamente sí". El ASP dice "86% sí, con una cola real donde perdemos £180k+" — que es lo que un dueño de cartera realmente necesita, y tasa el caso de ejecutar primero un sprint exploratorio (ver [VECI](../valor-esperado-de-la-información-perfecta/)).

## Conexión con la ingeniería de software

Los ingenieros ya confían en Monte Carlo para la previsión de entrega (el muestreo de rendimiento supera las estimaciones puntuales). Extiende la misma maquinaria al dinero: distribuciones sobre adopción, tiempo ahorrado y salario, luego informa "probabilidad de que esta inversión de plataforma sea neta positiva" en lugar de un ROI de falsa precisión. Una curva estilo CEAC — probabilidad de ser la mejor opción como función de cómo la organización valora una hora-ingeniero — es un artefacto genuinamente mejor para un comité de financiación que cualquier número único.

## Errores comunes

- **Distribuciones basura**: el ASP con desviaciones estándar inventadas es análisis determinista con bata de laboratorio. Basa los dispersiones en datos o elicitación estructurada de expertos.
- **Ignorar la correlación** entre parámetros (la alta adopción usualmente se correlaciona con alto tiempo ahorrado); el muestreo independiente subestima el riesgo de cola.
- **Informar solo la media** de la simulación — todo el punto es la distribución y la probabilidad de decisión.

## Fuentes

- Fenwick E, Claxton K, Sculpher M. "Representing uncertainty: the role of cost-effectiveness acceptability curves." Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11316594/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
