# Análisis de coste-consecuencia (CCA)

El CCA presenta los costes junto a una **tabla desagregada de todos los resultados** — clínicos, operativos, de experiencia — sin colapsarlos en un único ratio o puntuación. Quien toma la decisión pondera explícitamente los compromisos.

## Por qué importa

El CCA es el **formato económico preferido por NICE para la mayoría de las tecnologías de salud digital** bajo el Marco de Estándares de Evidencia (Evidence Standards Framework). Los productos digitales producen efectos heterogéneos (tiempo ahorrado, satisfacción, reducción de inasistencias, pequeñas ganancias clínicas) que se resisten a una agregación honesta en una única cifra de QALY. En lugar de forzar un compuesto frágil, el CCA muestra el libro mayor completo. Para la mayoría de los casos de negocio de software, es a la vez el formato más honesto y el más persuasivo, porque cada parte interesada puede encontrar su propia fila relevante para la decisión.

## Las matemáticas

Deliberadamente no hay fórmula de agregación. El resultado es una tabla:

```
                          Intervención   Comparador   Diferencia
Costes (anuales)          £X             £Y           ΔC
Resultado 1 (unidades naturales) …       …            Δ1
Resultado 2                …             …            Δ2
Resultados cualitativos   descritos, no puntuados
```

Cada fila conserva sus propias unidades. Reglas: cada consecuencia preespecificada (sin selección interesada de resultados a posteriori); misma [perspectiva](../analysis-perspective/) y [horizonte](../time-horizon/) en todo momento; incertidumbre por fila.

## Ejemplo resuelto

Plataforma digital de evaluación preoperatoria frente a proceso telefónico, por año, un trust:

```
                                    Digital      Telefónico   Diferencia
Coste de funcionamiento             £180,000     £95,000      +£85,000
Horas de enfermería en evaluaciones 6,200        11,800       −5,600 hrs
Cancelaciones de cirugía el mismo día 92         174          −82
Satisfacción del paciente (CSAT)    4.5/5        3.9/5        +0.6
Evaluaciones perdidas/incompletas   1.2%         4.8%         −3.6 pp
```

Sin una puntuación única — pero la decisión es fácil de razonar: £85,000 compran 5,600 horas de enfermería (≈ £15/hora, muy por debajo de cualquier coste de personal), 82 cancelaciones evitadas (cada una desperdiciando un espacio de quirófano valorado en ~£1,200), y una mejor experiencia. Un comité también puede ver exactamente lo que *no* está obteniendo: ningún efecto reclamado sobre QALY ni mortalidad.

## Conexión con la ingeniería de software

El CCA es la versión formal del cuadro de mando equilibrado que ya usa una buena propuesta de plataforma: coste junto a métricas DORA, puntuaciones de DevEx, recuentos de incidentes — sin agregar. La disciplina de la economía de la salud que hay que añadir: **preespecifica las filas** (decide qué cuenta antes del piloto, para no poder retirar discretamente la métrica que empeoró), y **muestra las filas desfavorables** — un CCA con solo buenas noticias es marketing. Usa el CCA cuando no exista un compuesto defendible, lo cual, para las herramientas de desarrollo, es casi siempre.

## Escollos

- **Consecuencias seleccionadas de forma interesada** — la integridad del formato depende de la preespecificación.
- **Agregación encubierta**: el código de colores o las "puntuaciones globales" reintroducen los pesos arbitrarios que el CCA existe para evitar.
- **Parálisis de decisión**: el CCA necesita a alguien dispuesto a ponderar los compromisos; combínalo con una recomendación y su razonamiento.

## Fuentes

- Marco de Estándares de Evidencia de NICE para tecnologías de salud digital (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- Tablas de estándares de evidencia del ESF. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>
