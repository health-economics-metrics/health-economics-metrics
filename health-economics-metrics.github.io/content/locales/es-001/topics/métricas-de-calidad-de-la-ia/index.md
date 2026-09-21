# Métricas de Calidad de la IA

Métricas para la corrección de los resultados generados por IA: precisión frente a la verdad fundamental, **fidelidad/fundamentación** (¿está cada afirmación respaldada por el contexto proporcionado?), y **tasa de alucinación** (¿qué fracción de los resultados contiene contenido no respaldado o falso?). En entornos sanitarios estas no son sutilezas de calidad — son tasas de daño.

## Por qué importa

Los puntos de referencia en el dominio médico han medido tasas de alucinación **superiores al 60% para LLM sin fundamentar** en tareas médicas (algunos modelos abiertos >80%), mientras que la fundamentación, la recuperación y los modos de razonamiento reducen drásticamente las tasas (p. ej., el modo de pensamiento de GPT-5 redujo las alucinaciones en HealthBench de 3,6% a 1,6% en un punto de referencia). Una dosis alucinada o una cita fabricada en un flujo de trabajo clínico es un **evento de información falsa con una vía de daño** — pertenece al brazo de daños de cualquier modelo económico, tasado como los falsos positivos de la [economía del cribado](../economía-del-cribado/): cada uno desencadena un coste posterior (actuar sobre información incorrecta, trabajo de verificación, exposición médico-legal, erosión de la confianza).

## El cálculo

```
Tasa de alucinación = resultados con contenido no respaldado/falso / total de resultados
  intrínseca:  contradice el contexto proporcionado
  extrínseca:  fabricación no verificable más allá del contexto

Fidelidad (estilo RAGAS) = afirmaciones respaldadas en la respuesta / total de afirmaciones en la respuesta
Precisión/exhaustividad del contexto = calidad de recuperación que alimenta al generador

Ponderación económica — no todas las alucinaciones cuestan igual:
  coste de daño esperado = Σ sobre tipos de error (tasa × P(no detectado) ×
                       P(actuado) × coste por error actuado)
  La capa de revisión humana fija P(no detectado) — y su coste
  pertenece también al modelo (minutos del revisor × volumen).
```

## Ejemplo resuelto

Un asistente de codificación clínica con IA procesa 200.000 episodios/año; la auditoría muestra que el 2% de los resultados contienen un error de codificación material; los codificadores humanos detectan el 85% de ellos:

```
Errores que llegan a la presentación = 200.000 × 0,02 × 0,15 = 600/año
Coste por error no detectado (facturación errónea media + exposición a auditoría) ≈ £250
Coste de error esperado         = 600 × 250 = £150.000/año
Coste de revisión (2 min × 200k × £0,50/min)  = £200.000/año

Caso de mejora: la fundamentación por recuperación reduce la tasa de error al 0,8%
→ errores no detectados 240, coste de error £60.000 (−£90k/año); el tiempo
  de revisión también puede caer (muestreo en lugar de revisión completa) — la
  inversión en calidad se paga antes de cualquier reclamación de velocidad.
```

## Conexión con la ingeniería de software

Trata la calidad del modelo como la economía de la cobertura de pruebas, con disciplina de nivel sanitario: **los conjuntos de evaluación son tu ensayo clínico** — preregistrados, representativos de *tu* mezcla de casos, actualizados contra la deriva; **la fundamentación supera a la escala para tareas fácticas** (la recuperación + el prompting con cita requerida suele ser la reducción de alucinación más económica disponible — cf. [economía unitaria de inferencia](../economía-unitaria-de-inferencia/) para su sobrecarga de tokens); y **publica el punto de operación**: como [sensibilidad/especificidad](../evaluación-clínica-de-la-ia/), "97% fiel" no significa nada sin la distribución de tareas y el umbral de detección. Las matemáticas de la capa de revisión anteriores son la misma aritmética de [NNT/NND](../número-necesario-a-tratar/) que cualquier puerta de cribado.

## Errores comunes

- **Trasplante de referencia a producción**: las tasas de alucinación dependen enormemente de la tarea; tu mezcla de casos es el único punto de referencia que cuenta.
- **Revisión humana sin costear**: "un clínico lo revisa todo" reduce el beneficio a la mitad y debe aparecer en la línea de coste — y la vigilancia decae (complacencia por automatización), por lo que P(no detectado) aumenta con la confianza.
- **Optimizar la calidad media mientras el riesgo de cola conlleva el daño**: una nota de alergia fabricada supera a mil frases torpes; pondera los errores por consecuencia, según la fórmula de daño esperado.

## Fuentes

- Métodos y métricas de evaluación de alucinaciones. <https://www.braintrust.dev/articles/ai-hallucination-evaluations-metrics-methods-2026>
- Estadísticas de alucinación de LLM médicos. <https://sqmagazine.co.uk/llm-hallucination-statistics/>
- Métricas de fidelidad RAG. <https://www.getmaxim.ai/articles/measuring-llm-hallucinations-the-metrics-that-actually-matter-for-reliable-ai-apps/>
