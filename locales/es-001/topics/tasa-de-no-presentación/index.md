# Tasa de No Presentación (DNA)

La tasa de No Presentación (DNA) es el porcentaje de citas reservadas en las que el paciente ni asiste ni cancela. El clínico, la sala y la franja están pagados; no pasa nada. Es la métrica de desperdicio más pura en la sanidad — y una de las más corregibles con software.

## Por qué importa

Las cifras de NHS England (2019): las citas perdidas con el médico de cabecera superan los 15 millones/año a ~£30 cada una — más de **£216M/año** — y las no presentaciones ambulatorias hospitalarias rondan los 8M/año (~6,4% de las citas) con una media de ~**£160** por franja perdida. Debido a que el coste marginal de un recordatorio son céntimos y el valor recuperado es una franja clínica completamente dotada de personal, la reducción de DNA tiene algunas de las mejores aritméticas de ROI en salud digital, por lo que los recordatorios SMS, la reprogramación fácil y la sobrerreserva predictiva estuvieron entre las primeras victorias probadas de salud digital.

## El cálculo

```
Tasa DNA = DNA / citas reservadas × 100

Valor de la reducción = citas × ΔTasa DNA × valor por franja recuperada

valor por franja recuperada: la franja se rellena (valor de actividad / reducción
de lista de espera) o no (tiempo del personal parcialmente reutilizable) — el mecanismo
importa, como en bed-days-saved.md.
```

## Ejemplo resuelto

Un departamento ambulatorio: 200.000 citas/año, tasa DNA 8%. Un servicio de recordatorio-más-reprogramación (SMS con reprogramación de un toque, información de transporte, formatos accesibles) reduce el DNA al 5,5%.

```
Franjas recuperadas = 200.000 × 0,025 = 5.000/año
Rellenadas desde la lista de espera a ~£160 de valor ambulatorio promedio:
  5.000 × £160 = £800.000/año de actividad recuperada
Coste del servicio: 200.000 × £0,40 = £80.000/año

Retorno ≈ 10:1, más 5.000 pacientes de la lista de espera atendidos antes
(ver waiting-list-impact.md y referral-to-treatment.md).
```

El tamaño del efecto (2,5 puntos) es realista: los ECA de recordatorios muestran consistentemente una reducción relativa de DNA del 25-40%.

## Conexión con la ingeniería de software

- **Este es un problema de sistemas de programación**: recordatorios, reprogramación de autoservicio, relleno automático de lista de espera desde cancelaciones, y modelos de predicción de no presentación que impulsan la doble reserva dirigida. Cada uno es ingeniería de software ordinaria con un caso económico inusualmente nítido.
- **El análogo de ingeniería**: no presentaciones para capacidad reservada — franjas de CI reservadas-pero-inactivas, capacidad de nube reservada, salas de reuniones, paneles de entrevistas. La economía se traslada: un empujón automatizado barato (o liberación automática de reservas no usadas) recupera capacidad comprometida cara.
- **Vista previa de ética de predicción**: los modelos de no presentación entrenados con datos de asistencia codifican la privación y las barreras de acceso; usarlos para *despriorizar* a probables no asistentes amplifica la desigualdad, usarlos para *apoyar* la asistencia (ayuda de transporte, alternativas telefónicas) la reduce. Ver [alcance y equidad](../alcance-y-equidad/).

## Errores comunes

- **Contar lo cancelado-y-reprogramado como valor recuperado dos veces.**
- **Valorar franjas recuperadas que no se rellenan** — una franja vacía con un recordatorio enviado sigue vacía.
- **Perseguir el DNA hasta cero**: los últimos puntos de DNA son pacientes que enfrentan barreras reales; los enfoques punitivos (alta después de N DNA) recortan la métrica abandonando a los pacientes.

## Fuentes

- NHS England, "Missed GP appointments costing NHS millions" (2019). <https://www.england.nhs.uk/2019/01/missed-gp-appointments-costing-nhs-millions/>
- Resúmenes de coste de DNA. <https://www.deep-medical.ai/cost-of-missed-nhs-appointments/>
