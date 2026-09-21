# WSJF y CD3

CD3 (Cost of Delay Divided by Duration, coste de retraso dividido entre duración) y WSJF (Weighted Shortest Job First, tarea más corta ponderada primero) son reglas de priorización que ordenan el trabajo por **densidad de valor**: cuánto coste de retraso se elimina por unidad de capacidad escasa consumida. Bajo una capacidad compartida y fija, priorizar por CD3 más alto es la secuencia matemáticamente óptima para minimizar el coste de retraso total.

## Por qué importa

Todo backlog es un problema de racionamiento: muchos elementos con mérito, una sola cadena de entrega. La economía de la salud resolvió el mismo problema para los presupuestos sanitarios con tablas de clasificación de coste-efectividad — clasificar las intervenciones por salud ganada por libra, financiar la lista hacia abajo hasta agotar el presupuesto. CD3 es la lógica idéntica para la capacidad de entrega: beneficio por unidad del *recurso restringido*, financiado por orden de clasificación. Acertar con la secuenciación es dinero gratis — mismo trabajo, misma capacidad, menos coste de retraso total.

## Las matemáticas

```
CD3  = Coste de Retraso (£/semana) / Duración (semanas)   — unidades reales (Black Swan Farming)

WSJF = (valor para el usuario/negocio + criticidad temporal + reducción de riesgo/
        habilitación de oportunidad) / tamaño de la tarea    — proxy de escala relativa
                                                              de SAFe, puntuaciones Fibonacci
                                                              modificadas
```

CD3 con una moneda genuina ([cost of delay](../cost-of-delay/)) es estrictamente más robusto que los puntos sin unidades de WSJF — WSJF es a CD3 lo que la puntuación multicriterio es al [cost-utility analysis](../cost-utility-analysis/) completo: útil cuando monetizar resulta poco práctico, manipulable cuando las puntuaciones no tienen anclaje.

## Ejemplo práctico

Tres funcionalidades, un equipo:

```
Funcionalidad  CoD (£/sem)  Duración   CD3
A              30,000       10 sem     3,000
B              12,000       2 sem      6,000
C              5,000        1 sem      5,000
```

Orden por CD3: B, C, A. Comparad el coste de retraso total frente a «mayor CoD primero» (A, B, C):

```
Orden CD3 (B,C,A): A espera 3 sem, C espera 2 → 30k×3 + 5k×2  = £100k de coste de retraso
Orden CoD (A,B,C): B espera 10, C espera 12    → 12k×10 + 5k×12 = £180k
```

Mismas funcionalidades, mismo equipo — la secuenciación por sí sola ahorra £80,000. La intuición: los elementos pequeños y urgentes van primero porque liberan su coste de retraso de forma barata; el elemento grande pierde poco por esperar brevemente.

## Conexión con la ingeniería de software

Para carteras de software sanitario, denominad el CoD en las unidades que enseña este repositorio: QALY/semana × umbral + £/semana operativas, y el backlog se vuelve directamente comparable con la forma en que el sistema de salud clasifica todo lo demás que compra. Dos notas prácticas: (1) la duración significa *tiempo de calendario ocupando la restricción*, no esfuerzo — un elemento con 2 semanas transcurridas que necesita 2 días del equipo cuello de botella es más barato de lo que parece (véase [downstream resource optimization](../downstream-resource-optimization/)); (2) los hospitales aplican la misma regla implícitamente cuando ordenan las listas de quirófano por rendimiento ponderado por urgencia — las categorías de priorización clínica son un CD3 ponderado por gravedad (véase [QALY shortfall and severity modifiers](../qaly-shortfall-and-severity-modifiers/)).

## Errores habituales

- **Teatro de puntuación WSJF**: los debates Fibonacci sin unidades convergen hacia quien argumente más alto; anclad al menos los elementos superiores del backlog en CoD real.
- **Manipulación de la duración**: dividir elementos para inflar la clasificación por CD3 — correcto cuando las divisiones entregan valor de forma independiente, fraudulento cuando no lo hacen.
- **Ignorar los perfiles de urgencia**: el CoD con forma de plazo límite (fechas regulatorias) rompe el supuesto de tasa constante; programad esos por viabilidad de fecha, y aplicad CD3 al resto.
- **Reordenación constante**: CD3 es para decisiones de secuenciación en el momento del compromiso, no para reorganizar a diario el trabajo en curso (véase [flow metrics](../flow-metrics/) sobre el WIP).

## Fuentes

- Black Swan Farming, CD3 and WSJF. <https://blackswanfarming.com/wsjf-weighted-shortest-job-first/>
- SAFe, WSJF. <https://framework.scaledagile.com/wsjf>
- Reinertsen DG, *The Principles of Product Development Flow*.
