# Simulación de cohortes de Markov

Un modelo de cohortes de Markov es la técnica de modelización estándar de la ETS para intervenciones cuyos efectos se despliegan a lo largo de varios periodos (ciclos) en lugar de producirse de golpe. Una cohorte hipotética empieza toda ella en un estado de salud y, en cada ciclo, un conjunto fijo de probabilidades de transición desplaza fracciones de la cohorte entre los estados; los costos y los QALY se acumulan en cada ciclo en proporción a la fracción de la cohorte que ocupa cada estado y luego se descuentan a su valor actual. Todo ingeniero de software que modele un caso de negocio de salud digital plurianual, en el que usuarios o pacientes se mueven entre estados como «activo», «abandonado» o «baja» con el tiempo, está construyendo esta misma estructura.

## Por qué importa

La mayoría de las decisiones reales sobre tecnologías sanitarias no son una comparación de costo y resultado de un solo periodo. Una enfermedad crónica progresa, recae, responde al tratamiento o mata, a lo largo de años, y un [análisis de costo-efectividad](../análisis-de-costo-efectividad/) de un solo periodo no puede representarlo. Las presentaciones a NICE, ICER y CADTH de intervenciones para enfermedades crónicas evaluadas mediante [evaluación de tecnologías sanitarias](../evaluación-de-tecnología-sanitaria/) se construyen casi siempre como modelos de cohortes de Markov con horizonte temporal de por vida, porque la alternativa, modelizar cada posible trayectoria individual de paciente, no es resoluble a gran escala. Un modelo de Markov a nivel de cohorte cambia parte del realismo a nivel individual (le cuesta representar la memoria de estados anteriores, de ahí lo de «Markov»: el futuro depende solo del estado actual) por un modelo transparente, auditable y lo bastante rápido como para ejecutarlo miles de veces en un [análisis de sensibilidad probabilístico](../análisis-de-sensibilidad-probabilístico/).

## Las matemáticas

```
Actualización de la cohorte en un ciclo (vector fila × matriz de transición):
  estado_nuevo[j] = suma_i estado[i] * matriz_transición[i][j]

Costo de un ciclo:
  costo_ciclo = suma_s estado[s] * costo_por_ciclo[s]

QALY de un ciclo:
  qaly_ciclo = suma_s estado[s] * utilidad[s] * duración_ciclo_años

Simulación completa durante `ciclos` ciclos, descontada a `tasa_descuento`:
  costo_descontado_total = suma_{t=0}^{ciclos-1} costo_ciclo(estado_t) / (1 + tasa_descuento)^t
  qaly_descontado_total  = suma_{t=0}^{ciclos-1} qaly_ciclo(estado_t) / (1 + tasa_descuento)^t
  donde estado_0 = distribución inicial, estado_{t+1} = avanzar_cohorte(estado_t, matriz_transición)
```

Descontar cada ciclo a valor actual usa exactamente la fórmula de [descuento y preferencia temporal](../descuento-y-preferencia-temporal/), aplicada ciclo a ciclo en lugar de año a año.

## Ejemplo resuelto

**Clínico**: un modelo de 2 estados, `Sano` y `Fallecido`, en el que el 10 % de la cohorte muere en cada ciclo y `Fallecido` es un estado absorbente (probabilidad de permanecer en sí mismo de 1.0; sin ese bucle, la masa de la cohorte desaparecería tras un ciclo en `Fallecido`). La cohorte empieza toda en `Sano`, cuesta £1,000 por ciclo mientras está `Sano` (£0 si `Fallecido`) y gana 0.8 QALY al año mientras está `Sano`. Se simulan 3 ciclos anuales con la tasa de descuento del 3.5 % de NICE:

```
Ciclo 0: estado = [1.00, 0.00] (100 % Sano)
  costo = £1,000.00, qaly = 0.800, factor de descuento = 1.000000
  descontado: costo = £1,000.00, qaly = 0.8000

Ciclo 1: estado = [0.90, 0.10] (90 % Sano, 10 % Fallecido)
  costo = £900.00, qaly = 0.720, factor de descuento = 0.966184
  descontado: costo = £869.57, qaly = 0.6957

Ciclo 2: estado = [0.81, 0.19] (81 % Sano, 19 % Fallecido)
  costo = £810.00, qaly = 0.648, factor de descuento = 0.933511
  descontado: costo = £756.14, qaly = 0.6049

Costo descontado total ≈ £2,625.71
QALY descontado total ≈ 2.1006
```

El estado de cada ciclo es el del ciclo anterior pasado por la matriz de transición: el 90 % del 90 % que sigue `Sano` en el ciclo 1 sigue `Sano` en el ciclo 2 (0.9 × 0.9 = 0.81), mientras que el 19 % restante ya ha muerto (0.9 × 0.1 + 0.1 × 1.0 = 0.19). Obsérvese que la cohorte nunca vacía del todo el estado `Sano`: con una mortalidad constante del 10 % por ciclo y sin retorno, la proporción `Sano` decrece geométricamente y no llega a cero en ningún número finito de ciclos.

## Conexión con la ingeniería de software

Para ver cómo se usa un modelo de ETS de varios ciclos en una evaluación real, véase [evaluación de tecnologías sanitarias](../evaluación-de-tecnología-sanitaria/): el caso de referencia que fija la tasa de descuento, la fuente de utilidades y el horizonte temporal que debe usar un modelo de Markov presentado.

Un modelo de cohortes de Markov es, estructuralmente, una máquina de estados con transiciones probabilísticas, ejecutada un número fijo de pasos, descontando el valor en cada paso. La misma forma simula la retención de una cohorte de usuarios y sus transiciones de estado en el tiempo; véanse las [métricas DORA](../métricas-dora/) para la versión de fiabilidad: «qué fracción del sistema está en estado degradado en este periodo y cuánto cuesta». En concreto:

- **Modelizar retención/abandono** es un modelo de cohortes de Markov con estados como «activo», «en riesgo» y «perdido»: una matriz de transición mensual fija, ejecutada 12 o 24 ciclos mensuales, da el número esperado de usuarios activos (y los ingresos) en cualquier mes futuro, igual que `Sano`/`Fallecido` da los supervivientes esperados.
- **Fiabilidad y economía de incidentes**: los estados del sistema (sano, degradado, caído) pueden modelizarse igual, con un «costo por ciclo» del daño por caída que se acumula mientras el sistema ocupa los estados degradado/caído, lo que convierte el argumento de la frecuencia de incidentes en uno de costo descontado comparable con el costo del trabajo de fiabilidad que cambiaría las probabilidades de transición.
- **Estados absorbentes como estados terminales**: `Fallecido` en el modelo clínico es exactamente «suscripción cancelada» o «desconectado de forma permanente» en un modelo de software; ambos necesitan una probabilidad explícita de permanecer en sí mismos de 1.0, o la simulación pierde masa en silencio.

## Trampas habituales

- **Probabilidades de transición que no suman 1 por fila.** Una fila que suma más o menos de 1 hace que la masa de la cohorte «se escape» o «se genere» en silencio en cada ciclo; hay que comprobar siempre las sumas por fila antes de fiarse de la salida del modelo, porque la propia estructura del modelo no señala este error.
- **Duración de ciclo demasiado gruesa para la dinámica real de la enfermedad.** Un ciclo anual para un estado que cambia en semanas infravalora las transiciones intermedias; conviene elegir una duración de ciclo corta en relación con la rapidez real del proceso modelizado.
- **Olvidar el bucle del estado absorbente.** Un estado absorbente (muerte, cancelación permanente) necesita una probabilidad de permanecer en sí mismo de exactamente 1.0. Si se omite, la masa de la cohorte se evapora de ese estado tras un ciclo y se infravaloran los costos acumulados o la pérdida de QALY.
- **Dar el modelo por validado porque se ejecuta.** Un modelo de cohortes de Markov con probabilidades de transición verosímiles puede seguir siendo estructuralmente erróneo (estados que faltan, comportamiento absorbente incorrecto); conviene validarlo frente a referencias epidemiológicas conocidas (por ejemplo, si la supervivencia a 5 años simulada coincide con las curvas de supervivencia publicadas) antes de fiarse de la salida.

## Fuentes

- Sonnenberg FA, Beck JR. "Markov models in medical decision making: a practical guide." Medical Decision Making. 1993;13(4):322-38. <https://pubmed.ncbi.nlm.nih.gov/8246705/>
- Briggs A, Sculpher M. "An introduction to Markov modelling for economic evaluation." PharmacoEconomics. 1998;13(4):397-409. <https://pubmed.ncbi.nlm.nih.gov/10178664/>
