# Valor de una vida estadística (VSL)

El valor de una vida estadística (VSL), en el uso británico «valor de una muerte evitada» (VPF), es la cantidad que una *población* está dispuesta a pagar colectivamente por reducir el riesgo de una muerte estadística, derivada de estudios de compensación salario-riesgo (cuánto salario adicional exigen los trabajadores por un empleo más peligroso) y de encuestas de preferencias declaradas. No es el precio de la vida de ninguna persona identificada; es una construcción de riesgo poblacional, y un ingeniero de software que construye sistemas que reducen riesgos (algoritmos de triaje, despacho de ambulancias, monitorización de seguridad) debe saber que procede de una tradición teórica distinta de los [umbrales de disposición a pagar](../umbrales-de-disposición-a-pagar/).

## Por qué importa

El VSL/VPF es la herramienta estándar para monetizar reducciones del riesgo de mortalidad en el análisis de costo-beneficio regulatorio: la seguridad del transporte, la regulación ambiental y algunas intervenciones de salud pública construyen sus casos de negocio con ella. El Green Book del HM Treasury publica una cifra de VPF derivada de datos del mercado laboral y de encuestas del Reino Unido, y el Departamento de Transporte la usa directamente al evaluar la seguridad vial. Es una tradición de valoración realmente distinta de la metodología QALY × umbral de disposición a pagar: el enfoque del umbral valora la ganancia de salud frente a lo que el *presupuesto sanitario* produce hoy en el margen, mientras que el VSL/VPF valora la reducción del riesgo frente a lo que la gente revela, en el mercado laboral o en una encuesta, que pagaría por ella. Los dos marcos no siempre son compatibles, y usar ambos en un mismo caso sin reconocerlo es un error analítico habitual.

## Las matemáticas

```
Muertes evitadas = población × reducción_de_riesgo_por_persona
  (reducción_de_riesgo_por_persona es una probabilidad, p. ej., 0.000001 =
   una reducción de uno en un millón del riesgo anual de mortalidad)

Beneficio_de_mortalidad_monetizado = muertes_evitadas × valor_de_una_muerte_evitada
```

## Ejemplo resuelto

Una región de 800,000 habitantes se beneficia de una intervención digital de despacho/triaje en seguridad vial que reduce el riesgo anual de mortalidad de cada persona en uno entre un millón (0.000001):

```
Muertes evitadas = 800,000 × 0.000001 = 0.8
```

Con el valor de una muerte evitada del Reino Unido de £2,180,000 (cifra de HM Treasury/DfT, precios de 2023/24; el Green Book la actualiza anualmente, así que conviene verificarla antes de citarla en un análisis en curso):

```
Beneficio de mortalidad monetizado = 0.8 × £2,180,000 = £1,744,000/año
```

Algo menos de £1.75 millones al año de beneficio de mortalidad monetizado, por una reducción del riesgo que la mayor parte de la población afectada nunca notaría individualmente.

## Conexión con la ingeniería de software

Los equipos de software crítico para la seguridad (firmware de dispositivos médicos, software de vehículos autónomos, sistemas de control industrial) afrontan este mismo problema de fijación de precios al construir el caso de costo-beneficio de una inversión en seguridad: ¿cómo se pone precio a «evitar un fallo catastrófico» cuando el fallo es raro, grave y está repartido entre una gran población de usuarios? El VSL/VPF ofrece un precedente real, público y de décadas para poner una cifra a una reducción rara y grave del riesgo a nivel poblacional: la misma forma de argumento que poner precio a una inversión de SRE frente a una caída catastrófica poco frecuente, solo que con un resultado de mortalidad en lugar de uno de tiempo de inactividad.

## Trampas habituales

- **Tratar el VSL como el «precio de una vida identificada»**: no lo es. El VSL/VPF es una construcción estadística poblacional derivada de compensaciones de reducción de riesgo entre muchas personas, no una valoración de la vida o la muerte de ningún individuo concreto.
- **Doble contabilización con un cálculo de beneficio monetario neto basado en QALY**: usar una cifra de VSL/VPF y un cálculo aparte de QALY × umbral en el mismo caso, sin conciliarlos, cuenta en silencio dos veces el valor de las mismas muertes evitadas. Hay que elegir un marco por caso.
- **Trasladar una estimación de VSL entre contextos sin ajustar**: un VSL derivado del mercado laboral o de datos salario-riesgo de la población activa de un país, aplicado sin ajuste a otro contexto de renta o a otra población (niños, personas mayores), es una cuestión metodológica realmente disputada y de larga data, no resuelta.

## Fuentes

- HM Treasury, The Green Book: Central Government Guidance on Appraisal and Evaluation — guía complementaria sobre el Value of a Prevented Fatality (precios de 2023/24; los valores del Green Book se actualizan anualmente). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- US EPA, "Mortality Risk Valuation" (para la tradición estadounidense del VSL, aportada como contraste con la cifra de VPF británica anterior). <https://www.epa.gov/environmental-economics/mortality-risk-valuation>
- Viscusi WK, Aldy JE. "The Value of a Statistical Life: A Critical Review of Market Estimates Throughout the World." J Risk Uncertain. 2003;27(1):5-76.
