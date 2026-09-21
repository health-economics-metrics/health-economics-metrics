# Evaluación regulatoria de la IA

Los marcos regulatorios que gobiernan la IA en la atención sanitaria — el régimen de Software como Producto Sanitario (SaMD) de la FDA con **Planes de Control de Cambios Predeterminados (PCCP)**, y programas de evaluación en condiciones reales como el NHS AI in Health and Care Award — y lo que cuestan y permiten económicamente.

## Por qué importa

La regulación determina tanto el **coste de evidencia para entrar en el mercado** como el **coste de cada actualización posterior del modelo** — para los productos de IA, lo segundo suele importar más. El modo tradicional de la FDA (bloquear el modelo; volver a autorizarlo para cada cambio) hacía que la mejora continua fuera económicamente durísima. La **guía de PCCP (finalizada en diciembre de 2024)** cambió la economía: un fabricante puede preautorizar *actualizaciones futuras específicas* del modelo — una descripción de las modificaciones previstas, un protocolo de modificación (cómo se validará cada una) y una evaluación de impacto — de modo que las mejoras sancionadas se publican sin necesidad de una nueva solicitud. Más de 1,000 dispositivos habilitados con IA cuentan con autorización de la FDA; esta también investiga ahora la monitorización del rendimiento en condiciones reales (métricas preespecificadas: tasas basales de FP/FN, deriva de calibración, indicadores de cambio de dominio).

## Las matemáticas

El PCCP es la economía del [plazo de entrega de DORA](../dora-metrics/) aplicada a modelos regulados:

```
Coste por actualización de modelo (tradicional) = coste de nueva solicitud + retraso de revisión × CdR
Coste por actualización de modelo (con PCCP)     = solo coste de ejecución del protocolo

Economía de las actualizaciones a lo largo de la vida del producto:
  N actualizaciones × (coste de solicitud + meses de revisión × coste de retraso por mes)
  frente a coste único de redacción del PCCP + N × ejecuciones de protocolo
```

Para el patrón del NHS AI Award, el conjunto de métricas es más amplio que la precisión: las evaluaciones independientes en condiciones reales valoran el rendimiento clínico, los efectos en el flujo de trabajo/implementación y el impacto económico — la vía completa de [eficacia → efectividad → coste-efectividad](../ai-developer-productivity/) institucionalizada.

## Ejemplo resuelto

Un proveedor de IA para radiología planea mejoras trimestrales del modelo durante 3 años (12 actualizaciones):

```
Tradicional: 12 × (£80k de solicitud + 4 meses × £50k/mes de CdR por beneficio retrasado)
           = 12 × £280k = £3.36M
Vía PCCP:    £250k de redacción del PCCP + 12 × £30k de ejecución de protocolo = £610k
Ahorro ≈ £2.75M — y los pacientes reciben cada mejora ~4 meses antes:
12 × 4 meses × el beneficio clínico de la actualización, una línea de AVAC por derecho propio.
```

El PCCP es un reconocimiento regulatorio de que **la frecuencia de despliegue tiene valor clínico** — la cadena causal maestra del repositorio, refrendada por un regulador.

## Conexión con la ingeniería de software

Ingeniar bien el PCCP es un problema de software: conjuntos de evaluación preespecificados, conjuntos de datos versionados, canalizaciones de validación automatizadas, monitorización de deriva — el primo regulado del despliegue continuo, donde la "puerta de despliegue" es un protocolo validado en lugar de una revisión de código. Los equipos con infraestructura de evaluación madura ([métricas de calidad de la IA](../ai-quality-metrics/)) obtienen PCCP de forma económica; los que no la tienen descubren que la restricción regulatoria es en realidad una restricción de madurez de ingeniería. Para los productos que entran en el NHS, la pila paralela es DTAC (seguridad clínica, protección de datos, interoperabilidad) más los niveles de evidencia del [NICE ESF](../nice-evidence-standards-framework/) — presupueste todo ello como [TCO](../total-cost-of-ownership/) de entrada al mercado.

## Trampas habituales

- **Sueños de expansión del alcance del PCCP**: solo los tipos de modificación *especificados* están preautorizados; los cambios de arquitectura o los nuevos usos previstos siguen necesitando revisión completa.
- **Deriva en condiciones reales sin monitorizar**: autorización con el rendimiento del lanzamiento + deriva poblacional silenciosa = un producto que funciona fuera de su margen autorizado; la monitorización es tanto una expectativa regulatoria como autodefensa.
- **Confundir la autorización con el valor**: la autorización de la FDA/UKCA no significa que alguien vaya a pagar — ese es el obstáculo de la [HTA](../health-technology-assessment/), que se gestiona por separado.

## Fuentes

- FDA, software de dispositivos habilitados con IA / SaMD. <https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-software-medical-device>
- Análisis de la guía de implementación del PCCP. <https://intuitionlabs.ai/articles/fda-pccp-implementation-guide-ai-ml-samd>
- NHS England, lecciones de las evaluaciones en condiciones reales del AI in Health and Care Award. <https://www.england.nhs.uk/long-read/planning-and-implementing-real-world-ai-evaluations-lessons-from-the-ai-in-health-and-care-award/>
