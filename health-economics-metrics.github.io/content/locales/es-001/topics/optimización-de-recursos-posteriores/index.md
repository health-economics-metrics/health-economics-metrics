# Optimización de Recursos Posteriores

Ahorrar una hora a un profesional senior — un médico de cabecera, un registrador senior, un consultor — a menudo previene retrasos de cuello de botella para todo un equipo multidisciplinar (EMD) de enfermeras, administrativos y terapeutas que esperan aprobaciones clínicas. El valor de desbloquear el cuello de botella es el rendimiento de todos los que están posteriormente a él.

## Por qué importa

La atención sanitaria funciona con cadenas de autorización: las altas esperan la aprobación del consultor, los planes de tratamiento esperan la revisión del EMD, las derivaciones esperan el triaje. Cuando el rol de puerta se retrasa, el coste no es la hora de una persona — es tiempo inactivo o bloqueado en cada rol dependiente, más el tiempo del paciente en el limbo ([días-cama](../días-cama-ahorrados/) extra, esperas de [RTT](../derivación-a-tratamiento/) más largas). Esta es la teoría de restricciones aplicada a las vías clínicas: una hora ahorrada *en la restricción* vale el rendimiento marginal de todo el sistema; una hora ahorrada en otro lugar vale mucho menos.

## El cálculo

```
Valor de desbloquear = Σ sobre roles posteriores (horas bloqueadas liberadas × coste unitario)
                    + ganancia de rendimiento de vía × valor por finalización de vía

Contraste: el valor de la misma hora ahorrada en un rol no bloqueante ≈ solo
el valor de capacidad de ese rol (ver practitioner-time.md).
```

Identifica la restricción empíricamente: ¿dónde hace cola el trabajo durante más tiempo? ¿A qué bandeja de entrada se remontan los retrasos?

## Ejemplo resuelto

Las altas de una sala requieren revisión del consultor cada mañana. El consultor pasa 90 min/día reuniendo información dispersa entre sistemas; las revisiones terminan hacia las 14:00, y 6 altas/día se completan demasiado tarde para ese día — cada una costando un día-cama evitable.

Un panel de resumen de alta (analíticas, medicación, alertas en una sola vista) reduce la reunión a 20 minutos; las revisiones terminan hacia las 11:30:

```
Días-cama evitados     = 4 de las 6 altas tardías × 365 ≈ 1.460 días-cama/año
Desbloqueo posterior: 2 coordinadores de alta + farmacia + transporte
                       previamente inactivos-luego-agobiados cada tarde —
                       ~3 horas-personal/día de tiempo bloqueado liberado ≈ 1.100 h/año
```

Los propios 70 minutos del consultor son la parte *más pequeña* del valor — el punto de esta métrica. Tasa los días-cama por mecanismo (ver [días-cama ahorrados](../días-cama-ahorrados/)) y las horas de personal como capacidad.

## Conexión con la ingeniería de software

Esto es la revisión de código, la aprobación de arquitectura y la bandeja de entrada del ingeniero senior. Cuando cinco ingenieros esperan un día a la única persona que puede aprobar un diseño, el coste son cinco días-ingeniero más un día de [coste de retraso](../coste-de-retraso/) sobre el propio trabajo — no una hora-revisor. Las herramientas que comprimen la tarea del rol de puerta (mejor contexto de revisión, verificaciones previas automatizadas, paneles que reúnen lo que necesita el aprobador) compran rendimiento del sistema, no comodidad individual. Mide el tiempo de recogida/espera en la restricción (ver [métricas de flujo](../métricas-de-flujo/)) — es el equivalente de software del precipicio de alta de las 14:00.

## Errores comunes

- **Optimizar algo que no es la restricción**: herramientas hermosas para un rol tras el cual nadie hace cola producen valor de sistema casi nulo.
- **Migración de restricciones**: desbloquea al consultor y la restricción se mueve (a farmacia, a transporte) — modela la *siguiente* restricción antes de reclamar ganancias de rendimiento completas.
- **Contar las horas posteriores como efectivo**: la liberación de tiempo bloqueado es capacidad, sujeta a la habitual [prueba de redespliegue](../ahorros-liberadores-de-efectivo-frente-a-no-liberadores-de-efectivo/).

## Fuentes

- Goldratt EM, *The Goal* (teoría de restricciones).
- NHS England, productividad del NHS. <https://www.england.nhs.uk/long-read/nhs-productivity/>
