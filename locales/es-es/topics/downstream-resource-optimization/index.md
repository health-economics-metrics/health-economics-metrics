# Optimización de Recursos Aguas Abajo

Ahorrar una hora a un profesional sénior —un médico de cabecera, un especialista en formación sénior (registrar), un consultor— a menudo evita retrasos de cuello de botella para todo un equipo multidisciplinar (MDT) de enfermeras, personal administrativo y terapeutas que esperan validaciones clínicas. El valor de desbloquear el cuello de botella es el rendimiento de todos los que están aguas abajo de él.

## Por qué importa

La sanidad funciona mediante cadenas de autorización: las altas esperan la validación del consultor, los planes de tratamiento esperan la revisión del MDT, las derivaciones esperan el triaje. Cuando se retrasa el rol que actúa de puerta, el coste no es la hora de una sola persona: es tiempo inactivo o bloqueado en todos los roles dependientes, más el tiempo del paciente en el limbo ([días de cama](../bed-days-saved/) adicionales, esperas de [RTT](../referral-to-treatment/) más largas). Esta es la teoría de las restricciones aplicada a las vías asistenciales: una hora ahorrada *en la restricción* vale el rendimiento marginal de todo el sistema; una hora ahorrada en otro sitio vale mucho menos.

## Las matemáticas

```
Valor de desbloquear = Σ sobre roles aguas abajo (horas bloqueadas liberadas × coste unitario)
                        + ganancia de rendimiento de la vía × valor por finalización de vía

Contraste: el valor de la misma hora ahorrada en un rol que no actúa de puerta ≈
solo el valor de capacidad de ese rol (véase practitioner-time.md).
```

Identifica la restricción empíricamente: ¿dónde se acumula el trabajo durante más tiempo? ¿A la bandeja de entrada de quién se remontan los retrasos?

## Ejemplo resuelto

Las altas de una planta requieren revisión del consultor cada mañana. El consultor dedica 90 minutos al día a reunir información dispersa por varios sistemas; las revisiones terminan a las 14:00, y 6 altas al día se completan demasiado tarde ese día — cada una con el coste de un día de cama evitable.

Un panel de resumen del alta (analíticas, medicación, alertas en una sola vista) reduce la reunión de información a 20 minutos; las revisiones terminan a las 11:30:

```
Días de cama evitados = 4 de las 6 altas tardías × 365 ≈ 1,460 días de cama/año
Desbloqueo aguas abajo: 2 coordinadores de alta + farmacia + transporte,
                        antes inactivos y luego desbordados cada tarde —
                        ~3 horas de personal/día de tiempo bloqueado liberadas ≈ 1,100 h/año
```

Los propios 70 minutos del consultor son la parte *más pequeña* del valor — el objetivo de esta métrica. Valora los días de cama por mecanismo (véase [días de cama ahorrados](../bed-days-saved/)) y las horas de personal como capacidad.

## Conexión con la ingeniería de software

Esto es la revisión de código, la validación de arquitectura y la bandeja de entrada del ingeniero sénior (staff engineer). Cuando cinco ingenieros esperan un día a la única persona que puede aprobar un diseño, el coste son cinco días-ingeniero más un día de [coste del retraso](../cost-of-delay/) sobre el propio trabajo — no una hora-revisor. Las herramientas que comprimen la tarea del rol que actúa de puerta (mejor contexto de revisión, comprobaciones previas automatizadas, paneles que reúnen lo que necesita quien aprueba) compran rendimiento del sistema, no comodidad individual. Mide el tiempo de recogida/espera en la restricción (véase [métricas de flujo](../flow-metrics/)) — es el equivalente en software del precipicio del alta de las 14:00.

## Errores habituales

- **Optimizar algo que no es una restricción**: unas herramientas magníficas para un rol tras el que nada se acumula producen un valor de sistema casi nulo.
- **Migración de la restricción**: desbloquea al consultor y la restricción se desplaza (a farmacia, a transporte) — modela la *siguiente* restricción antes de reclamar ganancias de rendimiento completas.
- **Contar las horas aguas abajo como dinero**: la liberación de tiempo bloqueado es capacidad, sujeta a la [prueba de redespliegue](../cash-releasing-vs-non-cash-releasing/) habitual.

## Fuentes

- Goldratt EM, *The Goal* (theory of constraints).
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
