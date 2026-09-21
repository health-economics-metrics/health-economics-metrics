# Métricas de Flujo

Las métricas de flujo miden cómo se mueve el trabajo a través de un sistema de entrega: tiempo de ciclo, tiempo de espera (lead time), rendimiento (throughput), trabajo en curso (WIP) y eficiencia de flujo. Se rigen por la Ley de Little — la misma matemática de colas que rige las camas hospitalarias y las listas de espera.

## Por qué importa

La mayor parte del tiempo de entrega no es trabajo — es espera. Los estudios de eficiencia de flujo del trabajo del conocimiento encuentran habitualmente que los elementos se trabajan activamente solo el **5–15 %** de su tiempo transcurrido; el resto son colas. Eso significa que la aceleración más barata es la eliminación de colas, no la contratación — precisamente la idea que descubrieron los programas hospitalarios de flujo de pacientes sobre las camas. Para cualquier cosa con [coste del retraso](../cost-of-delay/), las métricas de flujo localizan dónde se acumula ese coste.

## Las matemáticas

```
Tiempo de ciclo    = t(terminado) − t(iniciado)
Tiempo de espera   = t(entregado) − t(solicitado)     (incluye la cola previa al trabajo)
Rendimiento        = elementos completados / periodo
WIP                = elementos iniciados pero no terminados
Eficiencia de flujo = tiempo activo / (tiempo activo + tiempo de espera) × 100

Ley de Little:  WIP medio = rendimiento × tiempo de ciclo medio
                (equivalente: tiempo de ciclo = WIP / rendimiento)
```

La Ley de Little es la palanca: a rendimiento fijo, reducir el WIP reduce el tiempo de ciclo proporcionalmente. También rige los hospitales: `camas ocupadas = ingresos/día × estancia media`.

## Ejemplo práctico

Un equipo tiene 40 elementos en curso y completa 10/semana: tiempo de ciclo = 40/10 = 4 semanas. Imponen límites de WIP, reduciéndolo a 15: tiempo de ciclo = 15/10 = **1.5 semanas** — mismas personas, mismo rendimiento, 62 % más rápido en la entrega, únicamente por disciplina de colas.

Valorado con CoD: si los elementos promedian £3,000/semana de coste de retraso, cada elemento pasa ahora 2.5 semanas menos en cola: 10 elementos/semana × 2.5 × 3,000 = **£75,000/semana de coste de retraso eliminado** — a partir de un cambio de política que no cuesta nada.

Espejo hospitalario: 40 ingresos/día × 6.0 días de estancia = 240 camas; reduzca la espera no clínica dentro de la estancia a 5.6 días y se liberan 16 camas ([estancia media](../length-of-stay/)) — misma ley, misma palanca.

## Conexión con la ingeniería de software

Las métricas de flujo son el lenguaje compartido entre la ingeniería de entrega y las operaciones sanitarias:

- **Referencias de subetapas de PR** (LinearB, ~8M de PR): tiempo de recogida de élite < 7h, revisión < 6h, ciclo total < ~26h — el tiempo de recogida es cola pura, lo primero a atacar.
- **[Listas de espera](../waiting-list-impact/)** son backlogs; **[RTT](../referral-to-treatment/)** es tiempo de espera; **[ocupación de camas](../bed-days-saved/)** es WIP. La mejora se transfiere en ambas direcciones: límites de WIP ↔ suavizado de ingresos; instrumentación del tiempo en cola ↔ seguimiento de etapas de la vía.
- Una eficiencia de flujo por debajo del 15 % es normal en ambos dominios, y ambos lo ocultan porque las *personas* están ocupadas mientras el *trabajo* espera — mida el reloj del trabajo, no el de los trabajadores.

## Escollos

- **El culto a la utilización**: llevar la utilización de los trabajadores hacia el 100 % dispara los tiempos de cola de forma no lineal (M/M/1: espera ∝ ρ/(1−ρ)) — la razón por la que los hospitales al 95 % de ocupación se bloquean y los equipos al 95 % de asignación se estancan.
- **Medias sobre distribuciones sesgadas**: los tiempos de ciclo tienen colas pesadas; pronostique con percentiles (p85), no con medias.
- **Reducir el WIP rechazando trabajo aguas arriba** y llamarlo mejora de flujo — la demanda no desapareció, se puso en cola fuera del límite de medición (la versión hospitalaria: ambulancias esperando fuera de urgencias).

## Fuentes

- Visiones generales de la Ley de Little y las métricas de flujo. <https://agility-at-scale.com/safe/lpm/flow-metrics/> ; <https://getdx.com/blog/flow-metrics/>
- Referencias de ingeniería de LinearB. <https://linearb.io/resources/engineering-benchmarks>
- Reinertsen DG, *The Principles of Product Development Flow*.
