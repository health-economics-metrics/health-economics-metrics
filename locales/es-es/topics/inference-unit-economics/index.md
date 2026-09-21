# Economía Unitaria de la Inferencia

La economía unitaria de la inferencia asigna precio a las funcionalidades de IA según su cómputo marginal: **coste por token**, agregado hasta el coste por transacción, por usuario, por episodio clínico. La dinámica definitoria: los precios de los LLM han caído aproximadamente **un orden de magnitud cada 1-2 años** a capacidad constante: una tasa de deflación sin precedentes en la valoración de tecnología sanitaria.

## Por qué importa

Del colapso de precios se derivan dos consecuencias. En el plano comercial, una funcionalidad de IA que hoy es marginal puede ser trivialmente rentable en 18 meses, y un competidor con precios basados en los costes actuales quedará expuesto a ser desplazado. Para la evaluación económica, cualquier modelo de coste-efectividad de un servicio clínico habilitado por IA que congele los precios de inferencia de 2024 **sobreestima de forma sustancial el coste continuado**: el análisis necesita escenarios de caída de precios del mismo modo que los modelos de fármacos gestionan la expiración de patentes y la entrada de genéricos. (Puntos de referencia de la investigación: tokens de salida de frontera ~$15–75/M a mediados de 2026, modelos de nivel medio un orden de magnitud más baratos, capacidad de nivel GPT-4 bajando de ~$20/M en 2022 a ~$0.40/M; Epoch AI midió caídas de 9×–900×/año según el hito de capacidad.)

## Las matemáticas

```
Coste por llamada   = tokens de entrada × tarifa de entrada + tokens de salida × tarifa de salida
Coste por unidad    = Σ llamadas por unidad de resultado de negocio (por episodio
                      de triaje, por carta redactada, por resumen de consulta)

Realidad combinada  = llamada base + reintentos + contexto RAG (intensivo en entrada)
                      + llamadas de evaluación/salvaguarda (a menudo 20-50% de sobrecarga)

Escenario de caída de precios para modelos multianuales:
  coste_t = coste_0 × d^t, probar d ∈ {0.3, 0.5, 0.7}/año en análisis de sensibilidad
```

## Ejemplo resuelto

Un servicio de resúmenes de alta con IA: el resumen medio usa 12,000 tokens de entrada (contexto del historial) + 1,200 de salida, más una pasada de verificación (6,000 de entrada / 300 de salida). A $3/M de entrada, $15/M de salida:

```
Borrador:    12,000 × 3/1M + 1,200 × 15/1M  = $0.036 + $0.018 = $0.054
Verificación: 6,000 × 3/1M +   300 × 15/1M  = $0.018 + $0.0045 ≈ $0.023
Por resumen ≈ $0.077 → por 100,000 resúmenes/año ≈ $7,700

Frente a ~20 minutos-clínico ahorrados por resumen (≈ £25), la inferencia
supone el 0.25% del valor creado: la economía está dominada por todo
EXCEPTO los tokens: integración, evaluación, gobernanza, adopción.
```

Esa conclusión —el coste de inferencia rara vez es la restricción vinculante, a los precios actuales, para tareas clínicas de alto valor— es en sí misma el hallazgo que merece la pena llevar a las reuniones de precios.

## Conexión con la ingeniería de software

Esto es [cloud unit economics](../cloud-unit-economics/) especializada para IA, con tres notas prácticas: **mide por unidad de negocio**, no por llamada a la API, para que la cifra se incorpore directamente a los modelos de [ICER](../incremental-cost-effectiveness-ratio/)/[impacto presupuestario](../budget-impact-analysis/); **vigila la asimetría entrada/salida** (la salida suele costar ~4× el precio de la entrada; las arquitecturas RAG son intensivas en entrada: las decisiones de arquitectura son decisiones de precio); y **enruta por nivel de tarea**: adaptar la capacidad del modelo a la dificultad de la tarea (modelos económicos para clasificación, de frontera para síntesis) reduce habitualmente el coste combinado entre 5 y 10 veces con igual calidad, la versión software de usar la intervención efectiva más barata ([minimización de costes](../cost-minimization-analysis/), con equivalencia demostrada).

## Trampas habituales

- **Modelos multianuales de precio congelado**: sobreestiman el coste; pero también los **modelos de ingresos con deflación asumida**: una guerra de precios no es un contrato; contempla ambos escenarios.
- **Ignorar la sobrecarga de evaluación**: las salvaguardas, los jueces y los reintentos son tokens reales, a menudo la mayoría en entornos regulados.
- **Miopía del per-token**: la latencia, los límites de tasa y las restricciones de ventana de contexto conllevan costes que ningún precio por token captura.

## Fuentes

- Epoch AI, LLM inference price trends. <https://epoch.ai/data-insights/llm-inference-price-trends>
- LLM pricing comparisons. <https://www.silicondata.com/blog/llm-cost-per-token>
