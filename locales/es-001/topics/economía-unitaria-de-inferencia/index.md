# Economía Unitaria de Inferencia

La economía unitaria de inferencia tasa las funcionalidades de IA por su cómputo marginal: **coste por token**, agregado a coste por transacción, por usuario, por episodio clínico. La dinámica definitoria: los precios de LLM han caído aproximadamente **un orden de magnitud cada 1-2 años** a capacidad constante — una tasa de deflación sin precedentes en el costeo de tecnología sanitaria.

## Por qué importa

Dos consecuencias se siguen del colapso de precios. Comercialmente, una funcionalidad de IA que es marginal hoy puede ser trivialmente rentable en 18 meses — y un competidor con precios basados en los costes actuales será desplazado. Para la evaluación económica, cualquier modelo de coste-efectividad para un servicio clínico habilitado con IA que congele los precios de inferencia de 2024 **sobreestima materialmente el coste continuo** — el análisis necesita escenarios de caída de precios de la forma en que los modelos de medicamentos manejan la expiración de patentes y la entrada de genéricos. (Puntos de referencia de la investigación: tokens de salida de frontera ~$15–75/M a mediados de 2026, modelos de nivel medio un orden más baratos, capacidad nivel GPT-4 cayendo de ~$20/M en 2022 a ~$0,40/M; Epoch AI midió caídas de 9×–900×/año dependiendo del hito de capacidad.)

## El cálculo

```
Coste por llamada     = tokens de entrada × tarifa de entrada + tokens de salida × tarifa de salida
Coste por unidad     = Σ llamadas por unidad de resultado de negocio (por episodio de
                    triaje, por carta redactada, por resumen de consulta)

Realidad combinada   = llamada base + reintentos + contexto RAG (intensivo en entrada)
                    + llamadas de evaluación/protección (a menudo 20–50% de sobrecarga)

Escenario de caída de precios para modelos plurianuales:
  coste_t = coste_0 × d^t, prueba d ∈ {0,3, 0,5, 0,7}/año en análisis de sensibilidad
```

## Ejemplo resuelto

Un servicio de resumen de alta con IA: el resumen promedio usa 12.000 tokens de entrada (contexto del registro) + 1.200 de salida, más una pasada de verificación (6.000 entrada / 300 salida). A $3/M entrada, $15/M salida:

```
Borrador:   12.000 × 3/1M + 1.200 × 15/1M  = $0,036 + $0,018 = $0,054
Verificar:   6.000 × 3/1M +   300 × 15/1M  = $0,018 + $0,0045 ≈ $0,023
Por resumen ≈ $0,077 → por 100.000 resúmenes/año ≈ $7.700

Frente a ~20 minutos-clínico ahorrados por resumen (≈ £25), la inferencia
es 0,25% del valor creado — la economía está dominada por todo
EXCEPTO los tokens: integración, evaluación, gobernanza, adopción.
```

Esa conclusión — el coste de inferencia rara vez es la restricción vinculante, a precios actuales, para tareas clínicas de alto valor — es en sí misma el hallazgo que vale la pena llevar a las reuniones de precios.

## Conexión con la ingeniería de software

Esta es la [economía unitaria de la nube](../economía-unitaria-de-la-nube/) especializada para IA, con tres notas prácticas: **mide por unidad de negocio**, no por llamada API, para que la cifra encaje directamente en los modelos de [RCEI](../ratio-de-coste-efectividad-incremental/)/[impacto presupuestario](../análisis-de-impacto-presupuestario/); **observa la asimetría entrada/salida** (la salida típicamente cuesta ~4× el precio de entrada; las arquitecturas RAG son intensivas en entrada — las decisiones de arquitectura son decisiones de precios); y **enruta por nivel de tarea** — hacer coincidir la capacidad del modelo con la dificultad de la tarea (modelos baratos para clasificación, de frontera para síntesis) recorta rutinariamente el coste combinado 5-10× a igual calidad, la versión de software de usar la intervención efectiva más barata ([minimización de costes](../análisis-de-minimización-de-costes/), equivalencia demostrada).

## Errores comunes

- **Modelos plurianuales con precio congelado** — sobreestima el coste; pero también **modelos de ingresos con deflación asumida** — una guerra de precios no es un contrato; haz escenarios de ambos.
- **Ignorar la sobrecarga de evaluación**: las protecciones, los jueces y los reintentos son tokens reales, a menudo la mayoría en entornos regulados.
- **Miopía por token**: la latencia, los límites de tasa y las restricciones de ventana de contexto conllevan costes que ningún precio de token captura.

## Fuentes

- Epoch AI, tendencias de precios de inferencia de LLM. <https://epoch.ai/data-insights/llm-inference-price-trends>
- Comparaciones de precios de LLM. <https://www.silicondata.com/blog/llm-cost-per-token>
