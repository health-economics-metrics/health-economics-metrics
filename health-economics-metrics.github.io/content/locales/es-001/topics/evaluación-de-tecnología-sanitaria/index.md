# Evaluación de Tecnología Sanitaria (ETS)

La ETS es el proceso formal e institucionalizado mediante el cual los sistemas de salud deciden si una tecnología — medicamento, dispositivo o software — merece ser pagada. Combina evidencia de efectividad clínica con evaluación económica bajo una metodología publicada y obligatoria.

## Por qué importa

Si vendes a un sistema de salud nacional, un organismo de ETS puede literalmente decidir tu acceso al mercado. Conocer el proceso local es conocer tu verdadero regulador de valor:

- **NICE (Inglaterra)**: evaluaciones estatutarias bajo un *caso de referencia* definido — AVAC de [EQ-5D](../eq-5d/), [perspectiva](../perspectiva-del-análisis/) NHS+PSS, [descuento](../descuento-y-preferencia-temporal/) del 3,5%, [ASP](../análisis-de-sensibilidad-probabilístico/) requerido — juzgado frente a £20k–£30k/AVAC con [moduladores de gravedad](../déficit-de-avac-y-moduladores-de-gravedad/); tecnologías altamente especializadas hasta £100k+ con ponderación.
- **ICER (EE. UU., no gubernamental)**: informes de evidencia con un *punto de referencia de precio de beneficio de salud* — el precio al cual un producto sería coste-efectivo a $100k–$150k por AVAC/evLYG — usado como palanca de negociación; más "alertas de asequibilidad" de impacto presupuestario.
- **Canadá (CADTH → CDA-AMC)**: revisiones de reembolso a ≈CAD$50k/AVAC; históricamente solicitó recortes de precio en ~95% de las presentaciones.

## El cálculo

El poder de la ETS no es una fórmula sino un **método obligatorio**: cada presentación calcula el mismo [RCEI](../ratio-de-coste-efectividad-incremental/) bajo las mismas reglas de caso de referencia, así que los resultados son comparables entre productos y años. El caso de referencia especifica la medida de resultado, el instrumento de utilidad, la perspectiva, la selección de comparador, la tasa de descuento, el horizonte temporal y el análisis de incertidumbre — eliminando cada grado de libertad que un patrocinador podría manipular.

## Ejemplo resuelto

Un terapéutico digital se presenta a una evaluación estilo NICE:

```
Modelo: ΔC = +£450/paciente, ΔE = +0,03 AVAC → RCEI = £15.000/AVAC ✓ bajo £20k
Comprobaciones de caso de referencia:
  utilidades de EQ-5D-5L con conjunto de valores del Reino Unido              ✓
  comparador = vía de atención actual (no "sin tratamiento") ✓
  ASP: 71% de probabilidad coste-efectivo a £20k            ✓ (informado)
  modulador de gravedad: deficiencia bajo límites de ×1,2         — ninguno reclamado
Recomendación: comisión rutinaria, con recopilación de datos del mundo real.
```

El análisis preferido del propio patrocinador mostró £9.000/AVAC; el caso de referencia lo empujó a £15.000 al forzar el comparador honesto. Esa brecha es *por qué* existen los casos de referencia.

## Conexión con la ingeniería de software

El artefacto transferible es el **caso de referencia interno**: un método obligatorio para todos los casos de negocio de herramientas/plataforma — comparador declarado, costes unitarios estándar (ver [tarifa nacional y costes unitarios](../tarifa-nacional-y-costes-unitarios/) para el patrón), tasa de descuento fija, análisis de sensibilidad requerido, plantilla estándar. Un "dossier estilo AMCP para herramientas" presentado a un consejo de plataforma hace que las propuestas sean comparables y la manipulación visible, exactamente como lo hace la ETS para la medicina. Empieza más pequeño de lo que hizo NICE: una plantilla de dos páginas más un libro de precios publicado supera a ningún estándar en absoluto.

## Errores comunes

- **Tratar la ETS como formalidad después de la autorización regulatoria** — la autorización CE/UKCA/FDA dice que un producto es seguro; la ETS decide si *merece la pena comprarlo*. Obstáculo diferente, evidencia diferente.
- **Construir el modelo económico después del ensayo** — la generación de evidencia debería diseñarse hacia atrás desde los requisitos del caso de referencia.
- **Ignorar las diferencias de jurisdicción**: un RCEI financiable en EE. UU. a $120k/AVAC falla en NICE a £30k; planifica la evidencia y los precios por mercado.

## Fuentes

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER 2023 Value Assessment Framework. <https://icer.org/our-approach/methods-process/value-assessment-framework/>
- Agencia de Medicamentos de Canadá (CDA-AMC). <https://www.cda-amc.ca/>
