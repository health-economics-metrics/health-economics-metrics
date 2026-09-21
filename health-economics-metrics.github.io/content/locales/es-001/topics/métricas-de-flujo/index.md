# Métricas de Flujo

Las métricas de flujo miden cómo se mueve el trabajo a través de un sistema de entrega: tiempo de ciclo, tiempo de espera, rendimiento, trabajo en curso (WIP) y eficiencia de flujo. Se rigen por la Ley de Little — la misma matemática de colas que rige las camas de hospital y las listas de espera.

## Por qué importa

La mayor parte del tiempo de entrega no es trabajo — es espera. Los estudios de eficiencia de flujo del trabajo de conocimiento rutinariamente encuentran elementos trabajados activamente solo el **5-15%** de su tiempo transcurrido; el resto son colas. Eso significa que la aceleración más barata es la eliminación de colas, no la contratación — precisamente el conocimiento que descubrieron los programas hospitalarios de flujo de pacientes sobre las camas. Para cualquier cosa con un [coste de retraso](../coste-de-retraso/), las métricas de flujo localizan dónde se acumula el coste del retraso.

## El cálculo

```
Tiempo de ciclo      = t(terminado) − t(iniciado)
Tiempo de espera     = t(entregado) − t(solicitado)     (incluye cola de pre-trabajo)
Rendimiento          = elementos completados / periodo
WIP                  = elementos iniciados pero no terminados
Eficiencia de flujo  = tiempo activo / (tiempo activo + tiempo de espera) × 100

Ley de Little:  WIP promedio = rendimiento × tiempo de ciclo promedio
               (equivalentemente: tiempo de ciclo = WIP / rendimiento)
```

La Ley de Little es la palanca: a rendimiento fijo, reducir el WIP reduce el tiempo de ciclo proporcionalmente. También rige los hospitales: `camas ocupadas = ingresos/día × duración de estancia`.

## Ejemplo resuelto

Un equipo tiene 40 elementos en curso y completa 10/semana: tiempo de ciclo = 40/10 = 4 semanas. Imponen límites de WIP, reduciendo el WIP a 15: tiempo de ciclo = 15/10 = **1,5 semanas** — mismo personal, mismo rendimiento, entrega 62% más rápida, puramente por disciplina de cola.

Tasado con CdR: si los elementos tienen un promedio de £3.000/semana de coste de retraso, cada elemento ahora pasa 2,5 semanas menos en cola: 10 elementos/semana × 2,5 × 3.000 = **£75.000/semana de coste de retraso eliminado** — de un cambio de política que no cuesta nada.

Espejo hospitalario: 40 ingresos/día × 6,0 días de EDM = 240 camas; recorta la espera no clínica dentro de la EDM a 5,6 días y 16 camas se liberan ([duración de estancia](../duración-de-estancia/)) — misma ley, misma palanca.

## Conexión con la ingeniería de software

Las métricas de flujo son el lenguaje compartido entre la ingeniería de entrega y las operaciones de salud:

- **Puntos de referencia de subetapa de PR** (LinearB, ~8M PR): tiempo de recogida de élite < 7h, revisión < 6h, ciclo total < ~26h — el tiempo de recogida es cola pura, lo primero a atacar.
- Las **[listas de espera](../impacto-en-lista-de-espera/)** son retrasos acumulados; **[RTT](../derivación-a-tratamiento/)** es tiempo de espera; la **[ocupación de camas](../días-cama-ahorrados/)** es WIP. La mejora se traslada en ambas direcciones: límites de WIP ↔ suavizado de ingresos; instrumentación de tiempo de cola ↔ seguimiento de etapa de vía.
- La eficiencia de flujo por debajo del 15% es normal en ambos dominios, y ambos la ocultan porque las *personas* están ocupadas mientras el *trabajo* espera — mide el reloj del trabajo, no el de los trabajadores.

## Errores comunes

- **Adoración de la utilización**: llevar la utilización de trabajadores hacia el 100% dispara los tiempos de cola no linealmente (M/M/1: espera ∝ ρ/(1−ρ)) — la razón por la que los hospitales ocupados al 95% se atascan y los equipos asignados al 95% se estancan.
- **Promedios sobre distribuciones sesgadas**: los tiempos de ciclo tienen colas pesadas; pronostica con percentiles (p85), no medias.
- **Reducir el WIP rechazando trabajo aguas arriba** y llamarlo mejora de flujo — la demanda no desapareció, hizo cola fuera del límite de medición (la versión hospitalaria: ambulancias esperando fuera del servicio de urgencias).

## Fuentes

- Resúmenes de la Ley de Little y métricas de flujo. <https://agility-at-scale.com/safe/lpm/flow-metrics/> ; <https://getdx.com/blog/flow-metrics/>
- Puntos de referencia de ingeniería de LinearB. <https://linearb.io/resources/engineering-benchmarks>
- Reinertsen DG, *The Principles of Product Development Flow*.
