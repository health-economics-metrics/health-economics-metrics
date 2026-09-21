# Coste del Retraso (CoD)

El coste del retraso (Cost of Delay, CoD) es el valor económico que se pierde por unidad de tiempo mientras una funcionalidad, producto o servicio *no* se entrega. Es el puente más sólido entre las métricas de entrega de software y la economía de la salud: convierte "lo hemos entregado tarde" en dinero, o en QALY.

## Por qué importa

La regla de Reinertsen: "Si solo vas a cuantificar una cosa, cuantifica el coste del retraso". La mayoría de las organizaciones saben lo que cuesta un proyecto, pero no lo que cuesta un mes de retraso, así que optimizan presupuestos mientras sangran valor-tiempo. En el software sanitario, lo que está en juego es literal: cada semana que se retrasa la mejora de una vía asistencial, los pacientes esperan más tiempo en peores estados de salud. El CoD es el marco matemático más sólido para presentar a los interlocutores del NHS porque pone precio a la *ausencia* de tu software.

## Las matemáticas

```
CoD = beneficio por unidad de tiempo perdido mientras no se entrega   (£/semana o QALY/semana)

Pérdida total por retraso = CoD × duración del retraso

Para la priorización, véase wsjf-and-cd3.md: CD3 = CoD / duración.
```

Para software clínico, expresa el resultado tanto en salud como en dinero:

```
CoD_salud   = pacientes afectados por semana × ganancia de QALY por paciente
CoD_dinero  = CoD_salud × λ (umbral de disposición a pagar, £20k–30k/QALY)
              + ahorros operativos por semana perdidos
```

## Ejemplo resuelto

**Operativo**: el software ahorra £200 por paciente en una vía asistencial; un trust procesa 50 pacientes de este tipo por semana.

```
CoD = 200 × 50 = £10,000/semana
Un retraso de 10 semanas en la contratación cuesta 200 × 50 × 10 = £100,000 de desperdicio evitable.
```

**Clínico**: una mejora en el triaje elimina 5 semanas de espera (utilidad 0.68 → 0.80 antes) para 100 pacientes/semana:

```
Ganancia de QALY por paciente = (5/52) × 0.12 ≈ 0.0115
CoD_salud  = 100 × 0.0115 = 1.15 QALY/semana
CoD_dinero = 1.15 × £20,000 ≈ £23,000/semana de valor en salud
```

Un retraso de 6 meses en el despliegue "cuesta" ~30 QALY: el argumento que reformula un retraso en la puesta en marcha de un sistema informático como un evento clínico. (Referencia de escala: el célebre análisis de Maersk de Black Swan Farming encontró funcionalidades individuales con un CoD ≈ 200.000 $/semana que habían esperado 38 semanas.)

## Conexión con la ingeniería de software

El CoD es la métrica que hace legibles económicamente el [lead time de DORA](../dora-metrics/) y la [eficiencia de flujo](../flow-metrics/): lead time × CoD = dinero (o salud) quemado en colas. Usos:

- **Priorización**: ordenar el trabajo por CoD/duración ([WSJF/CD3](../wsjf-and-cd3/)) en lugar de por el interlocutor más ruidoso.
- **Economía del proceso**: un ciclo de publicación de 2 semanas tiene un coste de retraso esperado de ~1 semana × CoD por funcionalidad frente a la entrega continua: pon precio al lote.
- **Contratación pública**: los ciclos de contratación del NHS, de 6 a 18 meses, tienen un CoD; mostrarlo cambia las conversaciones sobre urgencia (véase el [análisis de impacto presupuestario](../budget-impact-analysis/) como contrapartida de asequibilidad).

## Errores habituales

- **Suponer un CoD lineal**: algunos trabajos tienen un valor con forma de plazo límite (fechas regulatorias: CoD infinito después de la fecha, cero antes) o un valor decreciente (ventanas de ser el primero en el mercado). Clasifica el perfil de urgencia antes de multiplicar.
- **CoD sobre resultados que nadie quiere**: el retraso solo cuesta si lo que se retrasa tiene valor; retrasar basura sale gratis.
- **Contar dos veces el retraso y el descuento**: el [descuento](../discounting-and-time-preference/) ya pone precio al tiempo en horizontes plurianuales; el CoD es la versión operativa dentro del horizonte. Usa el CoD para semanas/meses, el desplazamiento del NPV para años.

## Fuentes

- Reinertsen DG, *The Principles of Product Development Flow*.
- Black Swan Farming, Cost of Delay. <https://blackswanfarming.com/cost-of-delay/>
- Resumen sobre el coste del retraso. <https://en.wikipedia.org/wiki/Cost_of_delay>
