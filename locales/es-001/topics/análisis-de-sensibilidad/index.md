# Análisis de Sensibilidad

El análisis de sensibilidad determinista (ASD) varía un supuesto a la vez a través de un rango plausible para ver si la conclusión sobrevive. La visualización estándar es un diagrama de tornado: parámetros clasificados por cuánto oscilan el resultado.

## Por qué importa

Cada modelo económico se construye sobre estimaciones — tiempo ahorrado, adopción, costes unitarios. La evaluación de tecnología sanitaria se niega a aceptar una estimación puntual ("el ROI es 340%") sin evidencia de que la conclusión es robusta ante el desacuerdo razonable sobre las entradas. Un diagrama de tornado le dice al tomador de decisiones *qué supuesto interrogar*: si el caso solo funciona cuando el parámetro más disputado está en su extremo optimista, todos pueden verlo inmediatamente.

Este es el hábito individual más transferible de la economía de la salud a los casos de negocio de software.

## El cálculo

Para cada parámetro p con rango plausible [p_bajo, p_alto]:

```
Resultado_bajo  = modelo(p = p_bajo,  todos los demás en caso base)
Resultado_alto = modelo(p = p_alto, todos los demás en caso base)
Oscilación(p)    = |Resultado_alto − Resultado_bajo|
```

Clasifica los parámetros por oscilación; traza barras horizontales alrededor del resultado de caso base. Variantes: ASD bidireccional (varía dos parámetros en una cuadrícula), análisis de umbral (encuentra el valor de parámetro donde se invierte la decisión).

## Ejemplo resuelto

Asistente de codificación con IA para 200 desarrolladores. Caso base: licencia de £39/dev/mes; 30 min/dev/día ahorrados; coste cargado £60/hora; 220 días laborables.

```
Beneficio anual de caso base = 200 × 0,5h × 220 × £60 = £1.320.000
Coste anual              = 200 × £39 × 12         = £93.600
Neto de caso base            = £1.226.400
```

Tornado (un parámetro a la vez):

```
Tiempo ahorrado 0,1–1,0 h/día: neto = £170.400 … £2.546.400   (oscilación £2,38M) ← domina
Coste cargado £40–£80/h:    neto = £786.400 … £1.666.400   (oscilación £0,88M)
Días laborables 200–240:     neto = £1.106.400 … £1.346.400 (oscilación £0,24M)
Licencia £30–£50/mes:       neto = £1.248.000 … £1.200.000 (oscilación £48k)
```

Análisis de umbral: el beneficio neto llega a cero a aproximadamente **2,1 minutos/día** ahorrados. La decisión es insensible al precio de licencia y depende enteramente de la estimación de tiempo ahorrado — así que mide eso, no el resto. (Y recuerda que el resultado es capacidad, no efectivo — ver [ahorros liberadores de efectivo frente a no liberadores de efectivo](../ahorros-liberadores-de-efectivo-frente-a-no-liberadores-de-efectivo/).)

## Conexión con la ingeniería de software

Los ingenieros ya hacen esto por instinto como "¿y si estamos equivocados sobre X?" — el ASD simplemente lo sistematiza y lo hace visible. Pon un diagrama de tornado en cada propuesta de herramientas, plan de capacidad y análisis de construir-frente-a-comprar. Convierte los argumentos sobre de quién es la intuición correcta en acuerdos sobre qué parámetro ir a medir — a menudo a través de un piloto, cuyo valor puede tasarse a sí mismo (ver [valor esperado de la información perfecta](../valor-esperado-de-la-información-perfecta/)).

## Errores comunes

- **Rangos elegidos para halagar**: ±10% alrededor de cada entrada independientemente de la incertidumbre real. Las estimaciones de tiempo ahorrado merecen ±80%; los precios de licencia ±10%.
- **Uno-a-la-vez pierde las interacciones** — los parámetros correlacionados (adopción y tiempo ahorrado) necesitan análisis bidireccional o [análisis de sensibilidad probabilístico](../análisis-de-sensibilidad-probabilístico/) completo.
- **Hacer el análisis e ignorarlo**: si el tornado dice que el caso depende de una cifra blanda, el siguiente paso es la medición, no la aprobación.

## Fuentes

- Glosario del York Health Economics Consortium: análisis de sensibilidad determinista. <https://yhec.co.uk/glossary/deterministic-sensitivity-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
