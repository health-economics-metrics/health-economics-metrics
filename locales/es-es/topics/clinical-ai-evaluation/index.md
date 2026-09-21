# Evaluación de IA clínica

Las estadísticas fundamentales para evaluar un modelo de IA clínica o diagnóstico: sensibilidad, especificidad, AUROC, valores predictivos y número necesario para cribar. La lección económica central: **un AUROC excelente no convierte un despliegue en coste-efectivo** — el valor depende del punto operativo, de la prevalencia y de lo que ocurre después de cada positivo.

## Por qué importa

Los reguladores (FDA, MHRA) autorizan la IA clínica en un **punto operativo fijo** — un par concreto de sensibilidad/especificidad (por ejemplo, el primer sistema autónomo de retinopatía diabética aprobado por la FDA: sensibilidad 87.2%, especificidad 90.7% en su ensayo pivotal). Los economistas de la salud plantean entonces la pregunta que las métricas de precisión no pueden responder: a la prevalencia de tu población de despliegue, ¿cuánto *cuesta* cada detección, y merece la pena actuar sobre ella? Una evaluación económica de la IA de cribado de retinopatía (npj Digital Medicine 2024) mostró que una mayor precisión por sí sola no garantizaba la coste-efectividad una vez contabilizados los costes de derivación.

## Las matemáticas

```
Sensibilidad = TP / (TP + FN)        — de los verdaderos positivos, proporción detectada
Especificidad = TN / (TN + FP)        — de los verdaderos negativos, proporción descartada
AUROC       = P(el modelo clasifica a un positivo aleatorio por encima de un negativo aleatorio)
              0.5 azar … 1.0 perfecto; independiente del umbral — y por tanto
              insuficiente para la decisión de despliegue

PPV = TP / (TP + FP)   ← dependiente de la prevalencia (Bayes); se colapsa cuando es rara
NPV = TN / (TN + FN)

NNS  ≈ 1 / (prevalencia × sensibilidad)       — cribados por cada caso verdadero encontrado
Coste por caso verdadero = coste del programa / TP      — el resultado económico final
```

## Ejemplo resuelto

Mismo modelo, dos entornos — sensibilidad 90%, especificidad 93%:

```
Clínica especializada (prevalencia 20%):
  PPV = (0.9×0.2)/(0.9×0.2 + 0.07×0.8) = 0.18/0.236 ≈ 76%  → 3 de cada 4 alertas son reales

Atención primaria (prevalencia 1%):
  PPV = (0.9×0.01)/(0.9×0.01 + 0.07×0.99) = 0.009/0.0783 ≈ 11.5%
  → 8 de cada 9 alertas son falsas; estudio diagnóstico a £350 cada uno:
  coste por caso verdadero = (0.009 + 0.0693) × 350 / 0.009 ≈ £3,045 por caso encontrado
```

Mismo modelo, economía radicalmente distinta — por lo que la evaluación específica de cada centro es un tema regulatorio, y por lo que "nuestro modelo tiene un AUROC de 0.95" es el comienzo de un caso económico, no el final. Véase [economía del cribado](../screening-economics/) para las matemáticas completas del programa.

## Conexión con la ingeniería de software

Para los ingenieros que construyen o compran IA clínica: **presenta la matriz de confusión a la prevalencia de despliegue**, no solo la curva ROC; **deja que el umbral sea una decisión económica** — el equilibrio sensibilidad/especificidad debería minimizar el coste esperado (casos perdidos × coste de perderlos frente a falsas alarmas × coste del estudio diagnóstico), no maximizar una estadística de referencia; y reconoce las mismas matemáticas en tus propias herramientas — los sistemas de alertas, los detectores de anomalías y los escáneres de seguridad son pruebas diagnósticas sobre flujos de eventos de baja prevalencia, con la fatiga de alertas como el [NNH](../number-needed-to-treat/). Las actualizaciones de modelo que desplazan el punto operativo reabren la economía (y la autorización regulatoria — véase [evaluación regulatoria de IA](../ai-regulatory-evaluation/)).

## Escollos

- **Comparar AUROC entre modelos** cuando funcionarán con un único umbral — compara en el punto operativo.
- **PPV de la prevalencia del ensayo citado para el despliegue real** — el clásico; recalcula siempre a la prevalencia local.
- **Sesgo de espectro**: los modelos validados con casos obvios frente a controles sanos rinden mejor de lo real en el terreno intermedio ambiguo que domina la práctica.
- **Sin costeo de la vía asistencial posterior**: cada positivo desencadena un estudio diagnóstico; un modelo es una intervención sobre la economía de *toda la vía*.

## Fuentes

- Referencia sobre medidas de precisión diagnóstica. <https://www.medcalc.org/en/manual/roc-curves.php>
- Evaluación económica del cribado de retinopatía con IA, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01032-9>
- Laupacis et al., NEJM 1988 (fundamentos del NNT). <https://pubmed.ncbi.nlm.nih.gov/3374545/>
