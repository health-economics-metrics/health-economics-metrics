# Retorno de la inversión en IA

El ROI de la IA es el retorno medible en la cuenta de resultados atribuible a las iniciativas de IA. El punto de referencia aleccionador: la investigación "GenAI Divide" de 2025 del MIT encontró que, pese a los 30.000-40.000 millones de dólares de inversión empresarial en IA generativa, **~95% de los pilotos no mostraron retorno medible en la cuenta de resultados** — y el 5% que tuvo éxito compartía hábitos identificables.

## Por qué importa

Los sistemas de salud tienen un nombre para el patrón de los pilotos de IA: **pilotitis** — el cementerio del NHS de aplicaciones prometedoras pilotadas para siempre y escaladas nunca. Los hallazgos del MIT encajan perfectamente con lo que la evaluación de tecnologías sanitarias ya sabe: las afirmaciones de valor necesitan criterios de valoración preespecificados, la atribución necesita comparadores, y "todo el mundo siente que ayuda" no es una línea de beneficio. La minoría exitosa en los datos del MIT se concentraba en la automatización de back-office con líneas base de coste rastreables, y **las herramientas compradas tuvieron éxito ~67% de las veces frente a los desarrollos internos, con aproximadamente un tercio de esa tasa** — premisas que deberían formar parte de todo caso de inversión en IA (véase [comprar frente a construir](../build-vs-buy/)).

## Las matemáticas

```
ROI de la IA = (beneficio atribuible − coste total de la IA) / coste total de la IA

Coste total de la IA = licencias/inferencia (véase inference-unit-economics.md)
              + integración + preparación de datos + evaluación
              + rediseño del flujo de trabajo + gobernanza/garantía
              (la licencia suele ser la parte minoritaria del denominador)

Beneficio atribuible: medido frente a una línea base o control, clasificado
como caja / capacidad / calidad según cash-releasing-vs-non-cash-releasing.md
```

## Ejemplo resuelto

Un grupo hospitalario despliega IA para dos casos de uso:

```
Caso de uso A — redacción de cartas clínicas (back office, rastreable):
  línea base: transcripción externalizada £380k/año
  después:    contrato de transcripción cancelado; tiempo de revisión clínica +£60k
  coste de la IA:  £120k/año todo incluido
  ROI = (380k − 60k − 120k) / 120k ≈ 167% — libera caja, auditable ✓

Caso de uso B — "copiloto de IA para clínicos" (amplio, sin seguimiento):
  afirmación de beneficio: "ahorra tiempo en 4,000 empleados" — sin línea base capturada
  efecto medido en la cuenta de resultados: ninguno demostrable
  → el grupo del 95%, independientemente de si realmente ayuda o no
```

La diferencia no es la calidad de la IA — es si el beneficio tenía una **línea base, un responsable y una línea presupuestaria** ([realización de beneficios](../benefits-realization/)).

## Conexión con la ingeniería de software

El manual con forma de HTA para la inversión en IA: **escalone la evidencia como los [niveles del NICE ESF](../nice-evidence-standards-framework/)** — evidencia de nivel demo para herramientas de bajo riesgo, pilotos controlados antes del gasto a escala de toda la organización, con puertas de despliegue preregistradas (el patrón de [listado provisional con plazo de DiGA](../diga-fast-track/)); **contabilice la evitación de costes como la economía de la salud contabiliza la evitación de demanda** — real solo cuando se mueve una línea presupuestaria específica; y **ponga precio al propio piloto con [EVPI](../expected-value-of-perfect-information/)** — un piloto que no puede cambiar la decisión de despliegue vale £0. Para el segmento específico de herramientas de desarrollo, véase [productividad de desarrolladores con IA](../ai-developer-productivity/).

## Trampas habituales

- **Difusión del beneficio**: el valor repartido finamente entre miles de usuarios es, por construcción, inmedible; elija casos de uso con líneas base concentradas y rastreables.
- **Costeo solo por licencia**: la integración, la evaluación y el rediseño del flujo de trabajo suelen dominar el verdadero denominador.
- **Robo de atribución**: la IA desplegada junto con un rediseño de procesos se atribuye todo el delta.
- **Escalada del piloto hundido**: prolongar pilotos fallidos porque detenerlos admite el fracaso — la fecha de cierre debe acordarse de antemano.

## Fuentes

- Cobertura del "GenAI Divide" del MIT Project NANDA. <https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/>
- Resumen de hallazgos del ROI de GenAI del MIT. <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- MIT Technology Review, encontrar el ROI de la IA. <https://www.technologyreview.com/2025/10/28/1126693/finding-return-on-ai-investments-across-industries/>
