# Métricas de calidad de la IA

Métricas de la corrección del contenido generado por IA: precisión frente a la verdad de referencia, **fidelidad/fundamentación** (*faithfulness/groundedness*: ¿está cada afirmación respaldada por el contexto proporcionado?) y **tasa de alucinación** (¿qué fracción de las salidas contiene contenido no respaldado o falso?). En entornos sanitarios, esto no son sutilezas de calidad — son tasas de daño.

## Por qué importa

Los puntos de referencia en el ámbito médico han medido tasas de alucinación **superiores al 60% en LLM sin fundamentación** en tareas médicas (algunos modelos abiertos >80%), mientras que la fundamentación, la recuperación de información y los modos de razonamiento reducen drásticamente las tasas (por ejemplo, el modo de razonamiento de GPT-5 redujo las alucinaciones en HealthBench del 3.6% al 1.6% en un punto de referencia). Una dosis alucinada o una cita fabricada en un flujo de trabajo clínico es un **evento de información falsa con una vía de daño** — pertenece al brazo de daños de cualquier modelo económico, con un precio análogo al de los falsos positivos de la [economía del cribado](../screening-economics/): cada uno desencadena un coste posterior (actuar sobre información incorrecta, trabajo de verificación, exposición médico-legal, erosión de la confianza).

## Las matemáticas

```
Tasa de alucinación = salidas con contenido no respaldado/falso / total de salidas
  intrínseca:  contradice el contexto proporcionado
  extrínseca:  fabricación no verificable más allá del contexto

Fidelidad (estilo RAGAS) = afirmaciones respaldadas en la respuesta / total de afirmaciones en la respuesta
Precisión/exhaustividad del contexto = calidad de la recuperación que alimenta al generador

Ponderación económica — no todas las alucinaciones cuestan igual:
  coste de daño esperado = Σ por tipo de error (tasa × P(no detectado) ×
                       P(actuado) × coste por error actuado)
  La capa de revisión humana determina P(no detectado) — y su coste
  también debe figurar en el modelo (minutos del revisor × volumen).
```

## Ejemplo resuelto

Un asistente de codificación clínica con IA procesa 200,000 episodios/año; la auditoría muestra que el 2% de las salidas contiene un error de codificación material; los codificadores humanos detectan el 85% de ellos:

```
Errores que llegan a la presentación = 200,000 × 0.02 × 0.15 = 600/año
Coste por error no detectado (facturación incorrecta media + exposición a auditoría) ≈ £250
Coste de error esperado         = 600 × 250 = £150,000/año
Coste de revisión (2 min × 200k × £0.50/min)  = £200,000/año

Caso de mejora: la fundamentación por recuperación reduce la tasa de error al 0.8%
→ errores no detectados 240, coste de error £60,000 (−£90k/año); el tiempo
  de revisión también puede reducirse (muestreo en lugar de revisión completa)
  — la inversión en calidad se amortiza antes de cualquier afirmación sobre velocidad.
```

## Conexión con la ingeniería de software

Trate la calidad del modelo como la economía de la cobertura de pruebas, con la disciplina propia del ámbito sanitario: **los conjuntos de evaluación son su ensayo clínico** — preregistrados, representativos de *su* combinación de casos, actualizados frente al deterioro (drift); **la fundamentación supera a la escala en tareas factuales** (la recuperación combinada con instrucciones que exigen citación suele ser la reducción de alucinaciones más barata disponible — cf. [economía unitaria de la inferencia](../inference-unit-economics/) para su sobrecoste en tokens); y **publique el punto de operación**: como con la [sensibilidad/especificidad](../clinical-ai-evaluation/), "97% fiel" no significa nada sin la distribución de tareas y el umbral de detección. Las matemáticas de la capa de revisión anteriores son la misma aritmética de [NNT/NNH](../number-needed-to-treat/) que cualquier puerta de cribado.

## Trampas habituales

- **Trasplante de banco de pruebas a producción**: las tasas de alucinación dependen enormemente de la tarea; su combinación de casos es el único punto de referencia que cuenta.
- **Revisión humana sin coste asignado**: "un clínico lo revisa todo" reduce el beneficio a la mitad y debe figurar en la línea de coste — y la vigilancia decae (complacencia por automatización), por lo que P(no detectado) aumenta con la confianza.
- **Optimizar la calidad media mientras el riesgo de cola acumula el daño**: una nota de alergia fabricada pesa más que mil frases torpes; pondere los errores por consecuencia, según la fórmula de daño esperado.

## Fuentes

- Métodos y métricas de evaluación de alucinaciones. <https://www.braintrust.dev/articles/ai-hallucination-evaluations-metrics-methods-2026>
- Estadísticas de alucinación de LLM médicos. <https://sqmagazine.co.uk/llm-hallucination-statistics/>
- Métricas de fidelidad de RAG. <https://www.getmaxim.ai/articles/measuring-llm-hallucinations-the-metrics-that-actually-matter-for-reliable-ai-apps/>
