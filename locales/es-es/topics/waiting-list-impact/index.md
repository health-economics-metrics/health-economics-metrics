# Impacto en la Lista de Espera

El impacto en la lista de espera convierte la capacidad clínica ahorrada en pacientes retirados de la lista de espera (o que avanzan más rápido por ella). Convertir horas ahorradas en huecos de consulta adicionales reduce directamente el tamaño de la lista de espera de un trust — la forma más tangible de mostrar a un sistema de salud para qué sirve la capacidad liberada.

## Por qué importa

La lista de espera electiva es el reto definitorio del NHS tras la pandemia (su tamaño es una métrica política nacional), y cada trust gestiona un programa de recuperación electiva frente a ella. Un business case que dice «ahorra 2,000 horas de enfermería» resulta abstracto; uno que dice «crea 4,000 citas adicionales, atiende a 3,800 pacientes en espera, reduciendo la lista de la especialidad en un 9%» es una historia que un director de operaciones (Chief Operating Officer) puede llevar a su consejo. El impacto en la lista de espera es la *unidad de cuenta* natural de la [capacidad que no libera caja](../cash-releasing-vs-non-cash-releasing/).

## Las matemáticas

```
Huecos adicionales  = horas liberadas / duración del hueco × utilización
Pacientes atendidos = huecos adicionales × (1 − tasa de inasistencia)
Reducción de lista   = pacientes atendidos − nueva demanda inducida
Ganancia en tiempo de espera = mejora de la cola por mayor tasa de servicio
                     (para colas estables, reducir el backlog N en ΔN a
                     una tasa de servicio μ adelanta a todos ~ΔN/μ)
```

Valor en salud de esperas más cortas: los pacientes pasan menos semanas en el estado de utilidad inferior previo al tratamiento — la aritmética de QALY en [referral-to-treatment](../referral-to-treatment/).

## Ejemplo práctico

Un software de documentación ambiental ahorra a cada una de 20 enfermeras de consulta 45 min/día. En 250 días: 20 × 0.75 × 250 = 3,750 horas/año.

```
Huecos (30 min, 85% aprovechable) = 3,750 / 0.5 × 0.85 = 6,375 huecos
Pacientes atendidos (7% de inasistencia) = 6,375 × 0.93 ≈ 5,929/año
```

Para una especialidad con una lista de 12,000 pacientes y 24,000 citas/año de capacidad ajustada a la demanda, ~5,900 citas adicionales reducen la espera media en aproximadamente una cuarta parte — acercando materialmente al trust al estándar de 18 semanas sin contratar. A un valor de esquema de ~£160 por cita, la actividad vale ~£949,000/año (véase [national tariff and unit costs](../national-tariff-and-unit-costs/)) — pero presentad primero el planteamiento de *lista de espera*; es aquel con el que se gestiona el sistema.

## Conexión con la ingeniería de software

Una lista de espera es un backlog, y la economía del vaciado de backlogs se traslada en ambas direcciones. De la salud al software: valorad la reducción del backlog por cuánto tiempo esperan los *usuarios* el valor, no por elementos cerrados ([cost of delay](../cost-of-delay/) por elemento en cola). Del software a la salud: la Ley de Little dice que la lista solo se reduce si la tasa de servicio supera la tasa de llegada — las ganancias de capacidad absorbidas por un aumento de derivaciones dejan las esperas sin cambios, así que modelad también las llegadas. Y en ambos dominios, priorizad por valor ponderado por gravedad (categorías de urgencia clínica ↔ [severity modifiers](../qaly-shortfall-and-severity-modifiers/)), no por orden de llegada.

## Errores habituales

- **Huecos ≠ pacientes**: olvidar las tasas de inasistencia y los fragmentos de tiempo liberado no aprovechables.
- **Demanda inducida**: la capacidad adicional visible atrae derivaciones; el impacto neto en la lista es menor que el bruto.
- **Reclamar efectivo**: el impacto en la lista de espera es valor de capacidad; la reclamación en efectivo (externalización evitada del trabajo acumulado) es una línea distinta — véase [avoidable outsourcing costs](../avoidable-outsourcing-costs/).

## Fuentes

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
