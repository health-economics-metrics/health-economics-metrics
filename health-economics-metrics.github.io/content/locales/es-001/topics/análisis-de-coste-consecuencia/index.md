# Análisis de Coste-Consecuencia (ACC)

El ACC presenta los costes junto a una **tabla desagregada de todos los resultados** — clínicos, operativos, experienciales — sin colapsarlos en una única razón o puntuación. El tomador de decisiones pondera las compensaciones explícitamente.

## Por qué importa

El ACC es el **formato económico preferido de NICE para la mayoría de las tecnologías de salud digital** bajo el Marco de Estándares de Evidencia. Los productos digitales producen efectos heterogéneos (tiempo ahorrado, satisfacción, reducción de inasistencias, pequeñas ganancias clínicas) que se resisten a una agregación honesta en un único número de AVAC. En lugar de forzar un compuesto frágil, el ACC muestra el libro mayor completo. Para la mayoría de los casos de negocio de software, es tanto el formato más honesto como el más persuasivo, porque cada parte interesada puede encontrar su propia fila relevante para la decisión.

## El cálculo

Deliberadamente no hay fórmula de agregación. El resultado es una tabla:

```
                          Intervención   Comparador   Diferencia
Costes (anuales)          £X             £Y           ΔC
Resultado 1 (unidades naturales)  …      …            Δ1
Resultado 2                …             …             Δ2
Resultados cualitativos    descritos, no puntuados
```

Cada fila mantiene sus propias unidades. Reglas: cada consecuencia preespecificada (sin selección tras los resultados); mismo [perspectiva](../perspectiva-del-análisis/) y [horizonte](../horizonte-temporal/) en todo; incertidumbre por fila.

## Ejemplo resuelto

Plataforma de evaluación digital preoperatoria frente a proceso telefónico, por año, un fideicomiso:

```
                              Digital      Teléfono    Diferencia
Coste de funcionamiento       £180.000     £95.000     +£85.000
Horas de enfermería en evaluaciones  6.200        11.800      −5.600 h
Cancelaciones de cirugía el mismo día  92           174         −82
Satisfacción del paciente (CSAT)   4,5/5        3,9/5       +0,6
Evaluaciones perdidas/incompletas  1,2%         4,8%        −3,6 pp
```

Ninguna puntuación única — pero la decisión es fácil de razonar: £85.000 compran 5.600 horas de enfermería (≈ £15/hora, muy por debajo de cualquier coste de personal), 82 cancelaciones evitadas (cada una desperdiciando una franja de quirófano que vale ~£1.200), y mejor experiencia. Un comité también puede ver exactamente lo que *no* está obteniendo: ningún AVAC reclamado ni efecto de mortalidad.

## Conexión con la ingeniería de software

El ACC es la versión formal del cuadro de mando equilibrado que ya usa una buena propuesta de plataforma: coste junto a métricas DORA, puntuaciones DevEx, recuentos de incidentes — sin agregar. La disciplina de economía de la salud a añadir: **preespecifica las filas** (decide qué cuenta antes del piloto, para que no puedas eliminar silenciosamente la métrica que empeoró), y **muestra filas desfavorables** — un ACC con solo buenas noticias es marketing. Usa el ACC cuando no existe un compuesto defendible, que para las herramientas de desarrollador es casi siempre.

## Errores comunes

- **Consecuencias seleccionadas selectivamente** — la integridad del formato depende de la preespecificación.
- **Agregación encubierta**: la codificación por colores o las "puntuaciones generales" reintroducen los pesos arbitrarios que el ACC existe para evitar.
- **Parálisis de decisión**: el ACC necesita un tomador de decisiones dispuesto a ponderar compensaciones; combínalo con una recomendación y el razonamiento.

## Fuentes

- Marco de Estándares de Evidencia de NICE para tecnologías de salud digital (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- Tablas de estándares de evidencia del ESF. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>
