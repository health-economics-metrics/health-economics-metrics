# Validación de Wearables

Las métricas de validación cuantifican cuán bien concuerdan las mediciones de un wearable con un estándar de oro clínico (ECG para frecuencia cardíaca, polisomnografía para el sueño): **MAPE**, correlación de concordancia, acuerdo de Bland-Altman — más las métricas operativas que condicionan la calidad de datos del mundo real: **cumplimiento de tiempo de uso** y **completitud de datos**.

## Por qué importa

La validación es la precondición para todo lo posterior: un dispositivo que no puede probar concordancia con la medición de referencia no puede anclar [puntos finales digitales](../puntos-finales-y-biomarcadores-digitales/), apoyar [facturación PMR](../economía-del-monitoreo-remoto-de-pacientes/), o conllevar reclamaciones clínicas. Los umbrales aceptados del campo para la frecuencia cardíaca: **MAPE ≤5%** (estricto) o **≤10%** (indulgente) frente a ECG. Puntos de referencia de la literatura: MAPE de FC en reposo de Oura Gen 3 1,67% (CCC 0,97); MAPE de Fitbit Charge 6 ~5,5% — los dispositivos de consumo ahora abarcan el límite de grado clínico, que es exactamente por qué la medición importa por dispositivo y por condición.

## El cálculo

```
MAPE = (1/n) Σ |medido_i − referencia_i| / referencia_i × 100

CCC (correlación de concordancia) = acuerdo que incluye tanto la correlación
      como el sesgo sistemático (Pearson r penalizado por cambio de ubicación/escala)

Bland-Altman: sesgo medio ± 1,96 DE límites de acuerdo — muestra si
      el error depende de la magnitud del valor

Puertas operativas:
Cumplimiento de tiempo de uso = tiempo usado / tiempo de protocolo × 100
Completitud de datos    = puntos de datos observados / esperados × 100
```

La validación debe informarse **por condición de actividad** (reposo, movimiento, sueño) y por población — la detección óptica PPG se degrada con artefactos de movimiento, contacto pobre y tonos de piel más oscuros, un modo de fallo documentado relevante para la equidad.

## Ejemplo resuelto

Un programa de sala virtual selecciona un wearable de monitoreo. Candidato A: MAPE en reposo 2,1%, MAPE en ejercicio 11,4%. Candidato B: reposo 3,8%, ejercicio 6,9%.

```
Caso de uso: detección de paciente en deterioro en casa — las alertas se
activan por FC elevada sostenida, a menudo durante actividad.
El titular del Candidato A (2,1%) gana el folleto; el candidato B gana el
caso de uso: en la condición relevante para la alerta (movimiento), el error
del 11,4% de A a FC 100 = ±11 lpm — abarcando toda la banda de umbral
de alerta, generando escaladas falsas (cada una una llamada de enfermería, ~£40)
o perdiendo casos.

Economía de falsas alertas: 500 pacientes × 2 alertas falsas extra/semana × £40
= £2,08M/año de coste de error por elegir la cifra de validación equivocada.
```

## Conexión con la ingeniería de software

Para los ingenieros que construyen o compran wearables: **envía la matriz de confusión en la condición de despliegue**, no solo la curva ROC sola; **deja que el umbral sea una decisión económica** — el compromiso sens/espec debería minimizar el coste esperado (casos perdidos × coste de pérdida frente a falsas alarmas × coste de estudio), no maximizar una estadística de referencia; y reconoce las mismas matemáticas en tus propias herramientas — sensores, detectores de anomalías y escáneres de seguridad son pruebas diagnósticas sobre flujos de eventos de baja prevalencia, con fatiga de alertas como el [NNH](../número-necesario-a-tratar/). Las actualizaciones de modelo que desplazan el punto de operación reabren la economía (y la autorización regulatoria — ver [evaluación regulatoria de la IA](../evaluación-regulatoria-de-la-ia/)).

## Errores comunes

- **MAPE agregado ocultando fallo específico de condición** — la trampa del ejemplo resuelto.
- **Población de validación ≠ población de despliegue**: la edad, el tono de piel, el temblor, la obesidad cambian todos el error del sensor óptico; comprueba la demografía del estudio.
- **Correlación informada donde se necesita acuerdo**: un r de Pearson alto con sesgo sistemático aún clasifica erróneamente frente a umbrales absolutos — insiste en CCC/Bland-Altman.
- **Completitud inflada por imputación**: huecos rellenados informados como datos observados.

## Fuentes

- Consumer wearable HR validation (Oura Gen 3/4). <https://pmc.ncbi.nlm.nih.gov/articles/PMC12367097/>
- Wearable validity thresholds (MAPE standards). <https://formative.jmir.org/2025/1/e70835>
- Multi-device validation studies. <https://pmc.ncbi.nlm.nih.gov/articles/PMC6431828/>
