# Métricas DORA

Las métricas DORA (DevOps Research and Assessment) son cuatro medidas del rendimiento de la entrega de software — frecuencia de despliegue, lead time para los cambios, tasa de fallos en los cambios y tiempo de recuperación tras un despliegue fallido — más la fiabilidad como quinta medida. Son los referentes de entrega más validados del sector, y cada una tiene una lectura directa en economía de la salud.

## Por qué importa

Una década de investigación de DORA vincula estas métricas con el rendimiento organizativo. Los clústeres del informe de 2024: los equipos **de élite** despliegan bajo demanda (varias veces al día), tardan menos de un día desde el commit hasta producción, fallan en ~5 % de los cambios y se recuperan en menos de una hora; los equipos de **bajo rendimiento** despliegan mensualmente o con menor frecuencia, tardan meses, fallan en ~40 % de los cambios y se recuperan en semanas. Para un sistema de salud, esto no son cifras vanidosas de TI: determinan la rapidez con la que el valor clínico llega a los pacientes y cuánto riesgo conlleva cada cambio.

## Las matemáticas

```
Frecuencia de despliegue      = despliegues en producción / tiempo
Lead time para los cambios    = t(despliegue) − t(commit), mediana
Tasa de fallos en los cambios = cambios fallidos / cambios totales × 100
Tiempo de recuperación (MTTR) = t(restaurado) − t(fallo), mediana
Fiabilidad                    = cumplimiento del SLO (disponibilidad, latencia, corrección)
```

Traducciones a economía de la salud:

```
Lead time               → cost-of-delay.md: semanas en el pipeline × CoD (£ o QALY/semana)
Tasa de fallos          → tasa de eventos adversos del cambio de software: tasa de fallos
                           en los cambios × coste por incidencia
Tiempo de recuperación  → daño por inactividad: MTTR × (actividad clínica perdida
                           + exposición a riesgos de seguridad)/hora
Fiabilidad               → descuento del beneficio: un servicio con un 99 % de disponibilidad
                           entrega ≈ el 0.99 de su beneficio modelado — el equivalente en
                           software de la adherencia
```

## Ejemplo resuelto

El equipo de software de flujo de pacientes de un trust, antes/después de una inversión en ingeniería de entrega:

```
                    Antes       Después
Despliegues         mensual     semanal
Lead time           6 semanas   4 días
Tasa de fallos      25 %        8 %
MTTR                2 días      2 horas
```

El equipo publica ~30 mejoras al año con un valor medio por mejora de £4,000/semana ([CoD](../cost-of-delay/)). La reducción del lead time de ~5.4 semanas adelanta el flujo de beneficios de cada mejora: 30 × 5.4 × 4,000 ≈ **£648,000/año** de valor entregado antes. Mejora de la tasa de fallos: 30 × (0.25 − 0.08) = ~5 cambios fallidos menos al año × £15,000 de coste medio por incidencia (inactividad de sistemas clínicos, remediación) = **£76,500/año**. La inversión en entrega se valora en la misma moneda que cualquier intervención clínica.

## Conexión con la ingeniería de software

Esto *es* el lado del software — la conexión que merece la pena señalar es el mapeo inverso: las métricas DORA son las métricas operativas del hospital con otra ropa. Lead time ↔ [derivación a tratamiento](../referral-to-treatment/); tasa de fallos en los cambios ↔ [tasa de reingreso](../readmission-rate/) (trabajo que rebotó); MTTR ↔ respuesta de urgencias; frecuencia de despliegue ↔ rendimiento de la consulta. Los métodos de mejora se trasladan en ambas direcciones porque ambos son sistemas de colas bajo restricciones de seguridad. Nótese también el hallazgo de DORA 2025 sobre la IA: la adopción de IA ahora se correlaciona con mayor rendimiento pero *peor* estabilidad — una intervención con eficacia y efectos secundarios, que exige exactamente el análisis de beneficio neto que enseña este repositorio (véase [productividad del desarrollador con IA](../ai-developer-productivity/)).

## Errores habituales

- **Manipulación de la métrica (gaming)**: recuentos de despliegue inflados por publicaciones sin efecto real; tasa de fallos deflactada al no contar los hotfixes como fallos. Define los eventos con precisión, igual que la HTA define los endpoints.
- **Tablas comparativas entre equipos**: los clústeres de DORA comparan prácticas, no equipos con perfiles de riesgo distintos; un equipo de sistemas clínicos en el nivel "alto" puede ser óptimo donde "de élite" sería temerario.
- **Optimizar una sola métrica**: la velocidad sin tasa de fallos/fiabilidad es el trade-off entre rendimiento e inestabilidad — informa siempre las cuatro juntas (son una [tabla de coste-consecuencia](../cost-consequence-analysis/), no una puntuación).

## Fuentes

- DORA research and reports. <https://dora.dev/>
- 2024 DORA benchmarks summary. <https://octopus.com/devops/metrics/dora-metrics/>
- DORA 2025 State of AI-assisted Software Development. <https://dora.dev/dora-report-2025/>
