# Tasa de Inasistencia (DNA)

La tasa de DNA (Did-Not-Attend, inasistencia) es el porcentaje de citas reservadas en las que el paciente ni acude ni cancela. Se paga al clínico, la sala y el hueco de la agenda; no ocurre nada. Es la métrica de desperdicio más pura de la sanidad, y una de las más solucionables mediante software.

## Por qué importa

Las cifras de NHS England (2019): las citas de médico de cabecera (GP) perdidas superan los 15 millones al año a ~£30 cada una — más de **216 millones de libras al año** — y las inasistencias en consultas externas hospitalarias rondan los 8 millones al año (~6.4 % de las citas) con un valor medio de ~**£160** por hueco perdido. Como el coste marginal de un recordatorio son céntimos y el valor recuperado es un hueco clínico con personal completo, la reducción de la DNA tiene una de las mejores aritméticas de retorno de la inversión (ROI) en salud digital, razón por la cual los recordatorios por SMS, la re-reserva sencilla y el overbooking predictivo estuvieron entre las primeras victorias probadas de la salud digital.

## Las matemáticas

```
Tasa de DNA = inasistencias / citas reservadas × 100

Valor de la reducción = citas × ΔTasa de DNA × valor por hueco recuperado

valor por hueco recuperado: el hueco se vuelve a ocupar (valor de actividad /
reducción de lista de espera) o no se ocupa (tiempo de personal parcialmente
reutilizable) — el mecanismo importa, como en bed-days-saved.md.
```

## Ejemplo resuelto

Un departamento de consultas externas: 200,000 citas/año, tasa de DNA del 8 %. Un servicio de recordatorio y re-reserva (SMS con re-reserva en un toque, información de transporte, formatos accesibles) reduce las inasistencias al 5.5 %.

```
Huecos recuperados = 200,000 × 0.025 = 5,000/año
Reocupados desde la lista de espera a un valor medio de consulta externa de ~£160:
  5,000 × £160 = £800,000/año de actividad recuperada
Coste del servicio: 200,000 × £0.40 = £80,000/año

Retorno ≈ 10:1, más 5,000 pacientes en lista de espera atendidos antes
(véase waiting-list-impact.md y referral-to-treatment.md).
```

El tamaño del efecto (2.5 puntos) es realista: los ensayos aleatorizados de recordatorios muestran sistemáticamente reducciones relativas de la DNA del 25–40 %.

## Conexión con la ingeniería de software

- **Este es un problema de sistemas de agenda**: recordatorios, re-reserva de autoservicio, relleno automático de huecos desde la lista de espera a partir de cancelaciones y modelos de predicción de inasistencia que orientan el doble reservado dirigido. Cada uno es ingeniería de software ordinaria con un caso económico inusualmente nítido.
- **El equivalente en ingeniería**: las inasistencias en capacidad reservada — huecos de CI reservados-pero-inactivos, capacidad de nube reservada, salas de reuniones, paneles de entrevista. La economía se traslada: un recordatorio automatizado barato (o la liberación automática de reservas no usadas) recupera capacidad comprometida cara.
- **Anticipo ético sobre la predicción**: los modelos de inasistencia entrenados con datos de asistencia codifican privación y barreras de acceso; usarlos para *despriorizar* a quienes probablemente no acudirán amplifica la inequidad, usarlos para *apoyar* la asistencia (ayuda con el transporte, alternativas telefónicas) la reduce. Véase [alcance y equidad](../reach-and-equity/).

## Errores habituales

- **Contar como valor recuperado dos veces lo cancelado-y-re-reservado.**
- **Valorar huecos recuperados que no se reocupan** — un hueco vacío con un recordatorio enviado sigue vacío.
- **Perseguir la DNA hasta cero**: los últimos puntos de DNA son pacientes que enfrentan barreras reales; los enfoques punitivos (dar de baja tras N inasistencias) reducen la métrica abandonando a los pacientes.

## Fuentes

- NHS England, "Missed GP appointments costing NHS millions" (2019). <https://www.england.nhs.uk/2019/01/missed-gp-appointments-costing-nhs-millions/>
- Resúmenes de coste de la DNA. <https://www.deep-medical.ai/cost-of-missed-nhs-appointments/>
