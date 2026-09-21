# Evaluación Regulatoria de la IA

Los marcos regulatorios que rigen la IA en la atención sanitaria — el régimen de Software como Dispositivo Médico (SaMD) de la FDA con **Planes de Control de Cambios Predeterminados (PCCP)**, y programas de evaluación en el mundo real como el Premio NHS a la IA en Salud y Atención — y lo que cuestan y permiten económicamente.

## Por qué importa

La regulación determina tanto el **coste de evidencia de entrada al mercado** como el **coste de cada actualización posterior del modelo** — para los productos de IA, lo segundo suele importar más. El modo tradicional de la FDA (bloquear el modelo; volver a autorizar para cambios) hizo que la mejora continua fuera económicamente brutal. La **guía PCCP (finalizada en diciembre de 2024)** cambió la economía: un fabricante puede preautorizar actualizaciones futuras *específicas* del modelo — una descripción de las modificaciones planificadas, un protocolo de modificación (cómo se validará cada una) y una evaluación de impacto — de modo que las mejoras sancionadas se lanzan sin una nueva presentación. Más de 1.000 dispositivos habilitados con IA tienen autorización de la FDA; la FDA ahora también investiga el monitoreo del rendimiento en el mundo real (métricas preespecificadas: tasas basales de FP/FN, deriva de calibración, indicadores de cambio de dominio).

## El cálculo

El PCCP es la economía del [tiempo de espera de DORA](../métricas-dora/) aplicada a modelos regulados:

```
Coste por actualización de modelo (tradicional) = coste de representación + retraso de revisión × CdR
Coste por actualización de modelo (con ámbito PCCP) = solo coste de ejecución del protocolo

Economía de actualizaciones durante la vida del producto:
  N actualizaciones × (coste de presentación + meses de revisión × coste de retraso por mes)
  frente a coste único de redacción del PCCP + N × ejecuciones de protocolo
```

Para el patrón del Premio NHS a la IA, el conjunto de métricas es más amplio que la precisión: las evaluaciones independientes en el mundo real valoran el rendimiento clínico, los efectos en el flujo de trabajo/implementación y el impacto económico — la vía completa [eficacia → efectividad → coste-efectividad](../productividad-del-desarrollador-con-ia/) institucionalizada.

## Ejemplo resuelto

Un proveedor de IA en radiología planifica mejoras trimestrales del modelo durante 3 años (12 actualizaciones):

```
Tradicional: 12 × (£80k presentación + 4 meses × £50k/mes CdR de beneficio retrasado)
           = 12 × £280k = £3,36M
Vía PCCP:    £250k redacción PCCP + 12 × £30k ejecución de protocolo = £610k
Ahorro ≈ £2,75M — y los pacientes reciben cada mejora ~4 meses antes:
12 × 4 meses × el beneficio clínico de la actualización, una línea de AVAC por sí misma.
```

El PCCP es el reconocimiento regulatorio de que **la frecuencia de despliegue tiene valor clínico** — la cadena causal maestra de este repositorio, respaldada por un regulador.

## Conexión con la ingeniería de software

Diseñar bien el PCCP es un problema de software: conjuntos de evaluación preespecificados, conjuntos de datos versionados, canalizaciones de validación automatizadas, monitoreo de deriva — el primo regulado de la implementación continua, donde la "puerta de despliegue" es un protocolo validado en lugar de una revisión de código. Los equipos con infraestructura de evaluación madura ([métricas de calidad de la IA](../métricas-de-calidad-de-la-ia/)) obtienen PCCP a bajo coste; los equipos sin ella descubren que la restricción regulatoria es en realidad una restricción de madurez de ingeniería. Para productos que entran en el NHS, la pila paralela es DTAC (seguridad clínica, protección de datos, interoperabilidad) más los niveles de evidencia de [NICE ESF](../marco-de-estándares-de-evidencia-de-nice/) — presupuesta todo ello como [TCO](../coste-total-de-propiedad/) de entrada al mercado.

## Errores comunes

- **Sueños de expansión de alcance del PCCP**: solo los tipos de modificación *especificados* están preautorizados; los cambios de arquitectura o nuevos usos previstos aún necesitan revisión completa.
- **Deriva en el mundo real sin monitorear**: autorización en el rendimiento de lanzamiento + deriva poblacional silenciosa = un producto que funciona fuera de su envolvente autorizada; el monitoreo es tanto una expectativa regulatoria como autodefensa.
- **Confundir autorización con valor**: la autorización FDA/UKCA ≠ que alguien vaya a pagar — ese es el obstáculo de [ETS](../evaluación-de-tecnología-sanitaria/), gestionado por separado.

## Fuentes

- FDA, software de dispositivo habilitado con IA / SaMD. <https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-software-medical-device>
- Análisis de guía de implementación PCCP. <https://intuitionlabs.ai/articles/fda-pccp-implementation-guide-ai-ml-samd>
- NHS England, lecciones de las evaluaciones en el mundo real del Premio a la IA en Salud y Atención. <https://www.england.nhs.uk/long-read/planning-and-implementing-real-world-ai-evaluations-lessons-from-the-ai-in-health-and-care-award/>
