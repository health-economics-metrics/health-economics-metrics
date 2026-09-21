# Métricas DORA

Las métricas DORA (DevOps Research and Assessment) son cuatro medidas de rendimiento de entrega de software — frecuencia de despliegue, tiempo de espera para cambios, tasa de fallo de cambios y tiempo de recuperación de despliegue fallido — más la fiabilidad como una quinta. Son los puntos de referencia de entrega más validados del campo, y cada una tiene una lectura directa de economía de la salud.

## Por qué importa

Una década de investigación de DORA vincula estas métricas al rendimiento organizacional. Los grupos del informe de 2024: los equipos **de élite** despliegan bajo demanda (varias veces al día), tardan menos de un día del commit a producción, fallan ~5% de los cambios y se recuperan en menos de una hora; los de **bajo rendimiento** despliegan mensualmente o menos, tardan meses, fallan ~40% de los cambios y se recuperan en semanas. Para un sistema de salud, estas no son cifras vanidosas de TI: determinan cuán rápido el valor clínico llega a los pacientes y cuánto riesgo conlleva cada cambio.

## El cálculo

```
Frecuencia de despliegue    = despliegues en producción / tiempo
Tiempo de espera para cambios   = t(despliegue) − t(commit), mediana
Tasa de fallo de cambios     = cambios fallidos / total de cambios × 100
Tiempo de recuperación (TMDR)    = t(restaurado) − t(fallo), mediana
Fiabilidad             = cumplimiento de ANS (disponibilidad, latencia, corrección)
```

Traducciones de economía de la salud:

```
Tiempo de espera → cost-of-delay.md: semanas en la canalización × CdR (£ o AVAC/semana)
Tasa de fallo  → tasa de evento adverso del cambio de software: TFC × coste por incidente
Tiempo de recuperación → daño por inactividad: TMDR × (actividad clínica perdida + exposición de seguridad)/h
Fiabilidad   → descuento de beneficio: un servicio con 99% de disponibilidad entrega ≈ 0,99
                de su beneficio modelado — el análogo de software de la adherencia
```

## Ejemplo resuelto

El equipo de software de flujo de pacientes de un fideicomiso, antes/después de una inversión en ingeniería de entrega:

```
                    Antes      Después
Despliegues         mensual    semanal
Tiempo de espera    6 semanas  4 días
TFC                 25%        8%
TMDR                2 días     2 horas
```

El equipo entrega ~30 mejoras/año con un valor promedio por mejora de £4.000/semana ([CdR](../coste-de-retraso/)). Un recorte del tiempo de espera de ~5,4 semanas adelanta el flujo de beneficio de cada mejora: 30 × 5,4 × 4.000 ≈ **£648.000/año** de valor entregado antes. Mejora de TFC: 30 × (0,25 − 0,08) = ~5 cambios fallidos menos/año × £15.000 de coste medio de incidente (inactividad de sistema clínico, remediación) = **£76.500/año**. La inversión en entrega se tasa en la misma moneda que cualquier intervención clínica.

## Conexión con la ingeniería de software

Este *es* el lado del software — la conexión que vale la pena señalar es el mapeo inverso: las métricas DORA son las métricas operativas del hospital con ropa diferente. Tiempo de espera ↔ [derivación a tratamiento](../derivación-a-tratamiento/); tasa de fallo de cambios ↔ [tasa de reingreso](../tasa-de-reingreso/) (trabajo que rebotó); TMDR ↔ respuesta de emergencia; frecuencia de despliegue ↔ rendimiento de clínica. Los métodos de mejora se trasladan en ambas direcciones porque ambos son sistemas de colas bajo restricciones de seguridad. Nota también el hallazgo de IA de DORA 2025: la adopción de IA ahora se correlaciona con mayor rendimiento pero *peor* estabilidad — una intervención con eficacia y efectos secundarios, exigiendo exactamente el análisis de beneficio neto que enseña este repositorio (ver [productividad del desarrollador con IA](../productividad-del-desarrollador-con-ia/)).

## Errores comunes

- **Manipulación de métricas**: conteos de despliegue inflados por lanzamientos sin operación; TFC deflactada al no contar las correcciones urgentes como fallos. Define los eventos con precisión, como la ETS define los puntos finales.
- **Tablas de clasificación entre equipos**: los grupos de DORA comparan prácticas, no equipos con perfiles de riesgo diferentes; un equipo de sistemas clínicos en "alto" puede ser óptimo donde "élite" sería imprudente.
- **Optimizar una sola métrica**: velocidad sin TFC/fiabilidad es la compensación rendimiento-inestabilidad — informa siempre las cuatro juntas (son una [tabla de coste-consecuencia](../análisis-de-coste-consecuencia/), no una puntuación).

## Fuentes

- Investigación e informes de DORA. <https://dora.dev/>
- Resumen de puntos de referencia DORA 2024. <https://octopus.com/devops/metrics/dora-metrics/>
- DORA 2025 State of AI-assisted Software Development. <https://dora.dev/dora-report-2025/>
