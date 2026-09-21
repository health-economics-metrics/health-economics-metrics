# Validación de Wearables

Las métricas de validación cuantifican en qué medida las mediciones de un wearable concuerdan con un patrón de referencia clínico (ECG para la frecuencia cardíaca, polisomnografía para el sueño): **MAPE**, correlación de concordancia, concordancia de Bland–Altman — además de las métricas operativas que condicionan la calidad de los datos en el mundo real: **cumplimiento del tiempo de uso** y **completitud de los datos**.

## Por qué importa

La validación es la condición previa para todo lo que viene después: un dispositivo que no puede demostrar concordancia con la medición de referencia no puede anclar [digital endpoints](../digital-endpoints-and-biomarkers/), respaldar la [facturación de RPM](../remote-patient-monitoring-economics/), ni sostener afirmaciones clínicas. Los umbrales aceptados por el campo para la frecuencia cardíaca: **MAPE ≤5%** (estricto) o **≤10%** (permisivo) frente al ECG. Puntos de referencia de la literatura: Oura Gen 3, MAPE de frecuencia cardíaca en reposo 1.67% (CCC 0.97); Fitbit Charge 6, MAPE ~5.5% — los dispositivos de consumo ya se sitúan a ambos lados del umbral de grado clínico, precisamente por lo que la medición importa dispositivo por dispositivo y condición por condición.

## Las matemáticas

```
MAPE = (1/n) Σ |medido_i − referencia_i| / referencia_i × 100

CCC (correlación de concordancia) = concordancia que incluye tanto la
      correlación como el sesgo sistemático (r de Pearson penalizada
      por el desplazamiento de posición/escala)

Bland–Altman: sesgo medio ± límites de concordancia de 1.96 DE — muestra si
      el error depende de la magnitud del valor

Filtros operativos:
Cumplimiento del tiempo de uso = tiempo llevado / tiempo de protocolo × 100
Completitud de los datos       = puntos de datos observados / esperados × 100
```

La validación debe reportarse **por condición de actividad** (reposo, movimiento, sueño) y por población — la detección óptica PPG se degrada con el artefacto de movimiento, el mal contacto y los tonos de piel más oscuros, un modo de fallo documentado y relevante para la equidad.

## Ejemplo práctico

Un programa de sala virtual (virtual ward) selecciona un wearable de monitorización. Candidato A: MAPE en reposo 2.1%, MAPE en ejercicio 11.4%. Candidato B: reposo 3.8%, ejercicio 6.9%.

```
Caso de uso: detección de deterioro del paciente en el domicilio — las
alertas se disparan por frecuencia cardíaca elevada sostenida, a menudo
durante la actividad.
El titular del candidato A (2.1%) gana el folleto; el candidato B gana
el caso de uso: en la condición relevante para la alerta (movimiento),
el error del 11.4% de A con FC 100 = ±11 lpm — abarcando toda la banda
del umbral de alerta, generando falsas escaladas (cada una una
llamada de enfermería, ~£40) o pérdidas de casos reales.

Economía de las falsas alertas: 500 pacientes × 2 falsas alertas
adicionales/semana × £40 = £2.08M/año de coste de error por elegir
el número de validación equivocado.
```

## Conexión con la ingeniería de software

Los ingenieros consumen datos de validación al elegir sensores y los *producen* al construir funcionalidades de medición — ambos roles necesitan la misma disciplina: probar en la condición de despliegue, no en la condición de demostración (el análogo en software: hacer benchmarking sobre vuestra carga de trabajo de producción, no sobre la del proveedor). El tiempo de uso y la completitud son resultados de ingeniería de producto — la comodidad, la duración de la batería, el diseño del ritual de carga y la fiabilidad de la sincronización determinan si se cumple el requisito de facturación de RPM de 16 días de 30 ([remote patient monitoring economics](../remote-patient-monitoring-economics/)) y si los conjuntos de datos del ensayo son analizables. Tratad la falta de datos como una señal diseñada: distinguid «no llevado», «llevado pero sin señal» y «fallo de sincronización» en el esquema desde el primer día — colapsados en un valor nulo, envenenan cualquier análisis posterior.

## Errores habituales

- **MAPE agregado que oculta un fallo específico de una condición** — la trampa del ejemplo práctico.
- **Población de validación ≠ población de despliegue**: la edad, el tono de piel, el temblor y la obesidad desplazan todos el error del sensor óptico; comprobad la demografía del estudio.
- **Reportar correlación cuando lo que se necesita es concordancia**: una r de Pearson alta con sesgo sistemático sigue clasificando mal frente a umbrales absolutos — exigid CCC/Bland–Altman.
- **Completitud inflada por imputación**: huecos rellenados reportados como datos observados.

## Fuentes

- Consumer wearable HR validation (Oura Gen 3/4). <https://pmc.ncbi.nlm.nih.gov/articles/PMC12367097/>
- Wearable validity thresholds (MAPE standards). <https://formative.jmir.org/2025/1/e70835>
- Multi-device validation studies. <https://pmc.ncbi.nlm.nih.gov/articles/PMC6431828/>
