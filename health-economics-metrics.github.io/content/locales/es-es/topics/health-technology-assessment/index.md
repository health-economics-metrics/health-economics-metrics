# Evaluación de Tecnologías Sanitarias (HTA)

La HTA es el proceso formal e institucionalizado mediante el cual los sistemas de salud deciden si una tecnología —fármaco, dispositivo o software— merece ser financiada. Combina la evidencia de efectividad clínica con la evaluación económica bajo una metodología publicada y obligatoria.

## Por qué importa

Si vendes a un servicio nacional de salud, un organismo de HTA puede decidir literalmente tu acceso al mercado. Conocer el proceso local es conocer a tu verdadero regulador de valor:

- **NICE (Inglaterra)**: evaluaciones estatutarias bajo un *caso de referencia* definido: QALY a partir de [EQ-5D](../eq-5d/), [perspectiva](../analysis-perspective/) NHS+PSS, [descuento](../discounting-and-time-preference/) del 3.5%, [PSA](../probabilistic-sensitivity-analysis/) obligatorio; evaluadas frente a un umbral de £20k–£30k/QALY con [modificadores de severidad](../qaly-shortfall-and-severity-modifiers/); las tecnologías altamente especializadas pueden llegar a más de £100k con ponderación.
- **ICER (EE. UU., no gubernamental)**: informes de evidencia con un *punto de referencia de precio por beneficio sanitario* (health-benefit price benchmark): el precio al que un producto sería coste-efectivo a $100k–$150k por QALY/evLYG; utilizado como palanca de negociación, además de «alertas de asequibilidad» de impacto presupuestario.
- **Canadá (CADTH → CDA-AMC)**: revisiones de reembolso en torno a ≈CAD$50k/QALY; históricamente ha solicitado reducciones de precio en ~95% de las presentaciones.

## Las matemáticas

El poder de la HTA no reside en una fórmula, sino en un **método obligatorio**: cada presentación calcula el mismo [ICER](../incremental-cost-effectiveness-ratio/) bajo las mismas reglas del caso de referencia, de modo que los resultados son comparables entre productos y años. El caso de referencia especifica la medida de resultado, el instrumento de utilidad, la perspectiva, la selección del comparador, la tasa de descuento, el horizonte temporal y el análisis de incertidumbre, eliminando cualquier grado de libertad que un promotor pudiera manipular.

## Ejemplo resuelto

Una terapéutica digital se presenta a una evaluación de estilo NICE:

```
Modelo: ΔC = +£450/paciente, ΔE = +0.03 QALYs → ICER = £15,000/QALY ✓ por debajo de £20k
Comprobaciones del caso de referencia:
  utilidades a partir de EQ-5D-5L con el conjunto de valores del Reino Unido   ✓
  comparador = vía asistencial actual (no "ausencia de tratamiento")          ✓
  PSA: 71% de probabilidad de ser coste-efectivo a £20k                       ✓ (reportado)
  modificador de severidad: déficit por debajo de los límites ×1.2           — ninguno reclamado
Recomendación: financiación habitual, con recogida de datos de vida real.
```

La propia analítica preferida del promotor mostraba £9,000/QALY; el caso de referencia lo llevó a £15,000 al forzar el comparador honesto. Esa brecha es *por qué* existen los casos de referencia.

## Conexión con la ingeniería de software

El artefacto transferible es el **caso de referencia interno**: un método obligatorio único para todos los business case de herramientas/plataformas —comparador declarado, costes unitarios estándar (véase [national tariff and unit costs](../national-tariff-and-unit-costs/) para el patrón), tasa de descuento fija, análisis de sensibilidad obligatorio, plantilla estándar. Un «dosier tipo AMCP para herramientas» presentado a un consejo de plataforma hace que las propuestas sean comparables y la manipulación visible, exactamente como hace la HTA para los medicamentos. Empieza más pequeño de lo que hizo NICE: una plantilla de dos páginas más un libro de precios publicado supera con creces la ausencia de cualquier estándar.

## Trampas habituales

- **Tratar la HTA como un trámite tras el visto bueno regulatorio**: el marcado CE/UKCA/FDA dice que un producto es seguro; la HTA decide si *merece la pena comprarlo*. Es un listón distinto, con evidencia distinta.
- **Construir el modelo económico después del ensayo**: la generación de evidencia debe diseñarse hacia atrás a partir de los requisitos del caso de referencia.
- **Ignorar las diferencias entre jurisdicciones**: un ICER financiable en EE. UU. a $120k/QALY fracasa ante NICE a £30k; planifica la evidencia y el precio por mercado.

## Fuentes

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER 2023 Value Assessment Framework. <https://icer.org/our-approach/methods-process/value-assessment-framework/>
- Canada's Drug Agency (CDA-AMC). <https://www.cda-amc.ca/>
