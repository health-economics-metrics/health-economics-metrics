# Evaluación Clínica de la IA

Las estadísticas centrales para evaluar un modelo clínico de IA o diagnóstico: sensibilidad, especificidad, AUROC, valores predictivos y número necesario a cribar. La lección económica central: **un gran AUROC no hace un despliegue coste-efectivo** — el valor depende del punto de operación, la prevalencia y lo que sucede tras cada positivo.

## Por qué importa

Los reguladores (FDA, MHRA) autorizan la IA clínica en un **punto de operación bloqueado** — un par específico de sensibilidad/especificidad (p. ej., el primer sistema autónomo de retinopatía diabética aprobado por la FDA: sensibilidad 87,2%, especificidad 90,7% en su ensayo pivotal). Los economistas de la salud entonces hacen la pregunta que las métricas de precisión no pueden responder: a la prevalencia de tu población de despliegue, ¿cuánto *cuesta* cada detección, y merece la pena actuar sobre ella? Una evaluación económica de IA de cribado de retinopatía (npj Digital Medicine 2024) mostró que la mayor precisión por sí sola no garantizaba la coste-efectividad una vez contados los costes de derivación.

## El cálculo

```
Sensibilidad = VP / (VP + FN)        — de los verdaderos positivos, proporción capturada
Especificidad = VN / (VN + FP)        — de los verdaderos negativos, proporción despejada
AUROC       = P(el modelo clasifica a un positivo aleatorio por encima de un negativo aleatorio)
              0,5 azar … 1,0 perfecto; independiente del umbral — y por tanto
              insuficiente para la decisión de despliegue

VPP = VP / (VP + FP)   ← dependiente de la prevalencia (Bayes); colapsa cuando es rara
VPN = VN / (VN + FN)

NNC  ≈ 1 / (prevalencia × sensibilidad)       — cribados por caso verdadero encontrado
Coste por caso verdadero = coste del programa / VP      — el resultado final económico
```

## Ejemplo resuelto

Mismo modelo, dos entornos — sensibilidad 90%, especificidad 93%:

```
Clínica especializada (prevalencia 20%):
  VPP = (0,9×0,2)/(0,9×0,2 + 0,07×0,8) = 0,18/0,236 ≈ 76%  → 3 de 4 alertas reales

Atención primaria (prevalencia 1%):
  VPP = (0,9×0,01)/(0,9×0,01 + 0,07×0,99) = 0,009/0,0783 ≈ 11,5%
  → 8 de 9 alertas falsas; estudio a £350 cada uno:
  coste por caso verdadero = (0,009 + 0,0693) × 350 / 0,009 ≈ £3.045 por caso encontrado
```

Mismo modelo, economía radicalmente diferente — por eso la evaluación específica del sitio es un tema regulatorio y por eso "nuestro modelo tiene 0,95 de AUROC" es el comienzo de un caso económico, no el final. Ver [economía del cribado](../economía-del-cribado/) para las matemáticas completas del programa.

## Conexión con la ingeniería de software

Para ingenieros que construyen o compran IA clínica: **envía la matriz de confusión en la prevalencia de despliegue**, no solo la curva ROC; **deja que el umbral sea una decisión económica** — la compensación sensibilidad/especificidad debería minimizar el coste esperado (casos perdidos × coste de fallo frente a falsas alarmas × coste de estudio), no maximizar una estadística de referencia; y reconoce las mismas matemáticas en tus propias herramientas — los sistemas de alerta, detectores de anomalías y escáneres de seguridad son pruebas diagnósticas sobre flujos de eventos de baja prevalencia, con la fatiga de alertas como el [NND](../número-necesario-a-tratar/). Las actualizaciones de modelo que desplazan el punto de operación reabren la economía (y la autorización regulatoria — ver [evaluación regulatoria de la IA](../evaluación-regulatoria-de-la-ia/)).

## Errores comunes

- **Compra de AUROC**: comparar modelos por AUROC cuando funcionarán en un solo umbral — compara en el punto de operación.
- **VPP de prevalencia de ensayo citado para despliegue en el mundo real** — el clásico; recalcula siempre a la prevalencia local.
- **Sesgo de espectro**: los modelos validados en casos obvios frente a controles sanos rinden mejor de lo real en el medio ambiguo que domina la práctica.
- **Sin costeo de vía posterior**: cada positivo desencadena un estudio; un modelo es una intervención sobre la economía de *toda la vía*.

## Fuentes

- Referencia de medidas de precisión diagnóstica. <https://www.medcalc.org/en/manual/roc-curves.php>
- Evaluación económica del cribado de retinopatía con IA, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01032-9>
- Laupacis et al., NEJM 1988 (fundamentos de NNT). <https://pubmed.ncbi.nlm.nih.gov/3374545/>
