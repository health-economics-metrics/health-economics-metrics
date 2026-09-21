# WSJF y CD3

CD3 (Coste de Retraso Dividido por Duración) y WSJF (Trabajo Más Corto Ponderado Primero) son reglas de priorización que programan el trabajo por **densidad de valor**: cuánto coste de retraso se elimina por unidad de capacidad escasa consumida. Bajo una capacidad compartida y fija, el CD3-más-alto-primero es la secuencia matemáticamente óptima para minimizar el coste total de retraso.

## Por qué importa

Todo atraso es un problema de racionamiento: muchos elementos dignos, una sola canalización. La economía de la salud resolvió el mismo problema para los presupuestos de salud con tablas de clasificación de coste-efectividad — clasifica las intervenciones por salud ganada por libra, financia hacia abajo en la lista hasta que el presupuesto se agota. El CD3 es la lógica idéntica para la capacidad de entrega: beneficio por unidad del *recurso restringido*, financiado en orden de clasificación. Acertar en la secuenciación es dinero gratis — mismo trabajo, misma capacidad, menor coste total de retraso.

## El cálculo

```
CD3  = Coste de Retraso (£/semana) / Duración (semanas)      — unidades reales (Black Swan Farming)

WSJF = (valor de negocio-usuario + criticidad temporal + reducción de riesgo/habilitación
        de oportunidad) / tamaño del trabajo              — proxy de escala relativa de SAFe,
                                                        puntuaciones Fibonacci modificadas
```

El CD3 con moneda genuina ([coste de retraso](../coste-de-retraso/)) es estrictamente más fuerte que los puntos sin unidad de WSJF — WSJF es al CD3 lo que la puntuación multicriterio es al [análisis de coste-utilidad](../análisis-de-coste-utilidad/) completo: utilizable cuando la monetización es poco práctica, manipulable cuando las puntuaciones no tienen un ancla.

## Ejemplo resuelto

Tres funcionalidades, un equipo:

```
Funcionalidad   CdR (£/sem)   Duración   CD3
A         30.000       10 sem     3.000
B         12.000       2 sem      6.000
C         5.000        1 sem      5.000
```

Orden CD3: B, C, A. Compara el coste total de retraso contra "mayor CdR primero" (A, B, C):

```
Orden CD3  (B,C,A): A espera 3 sem, C espera 2 → 30k×3 + 5k×2  = £100k coste de retraso
Orden CdR  (A,B,C): B espera 10, C espera 12   → 12k×10 + 5k×12 = £180k
```

Mismas funcionalidades, mismo equipo — la secuenciación sola ahorra £80.000. La intuición: los elementos pequeños y urgentes van primero porque liberan su coste de retraso de forma barata; el elemento grande pierde poco esperando brevemente.

## Conexión con la ingeniería de software

Para las carteras de software sanitario, denomina el CdR en las unidades que enseña este repositorio: AVAC/semana × umbral + £/semana operativo, y el atraso se vuelve directamente comparable con cómo el sistema de salud clasifica todo lo demás que compra. Dos notas prácticas: (1) la duración significa *tiempo de calendario ocupando la restricción*, no esfuerzo — un elemento de 2 semanas transcurridas que necesita 2 días del equipo de cuello de botella es más barato de lo que parece (ver [optimización de recursos posteriores](../optimización-de-recursos-posteriores/)); (2) los hospitales ejecutan la misma regla implícitamente cuando ordenan las listas de teatro por rendimiento ponderado por urgencia — las categorías de priorización clínica son CD3 ponderado por gravedad (ver [déficit de AVAC y moduladores de gravedad](../déficit-de-avac-y-moduladores-de-gravedad/)).

## Errores comunes

- **Teatro de puntuación WSJF**: los debates Fibonacci sin unidad convergen hacia quien argumenta más alto; ancla al menos los elementos de la parte superior del atraso en CdR real.
- **Manipulación de duración**: dividir elementos para inflar la clasificación CD3 — bien cuando las divisiones entregan valor independientemente, fraude cuando no lo hacen.
- **Ignorar los perfiles de urgencia**: el CdR con forma de plazo (fechas regulatorias) rompe la suposición de tasa constante; programa esos por viabilidad de fecha, luego aplica CD3 al resto.
- **Rotación de reclasificación**: el CD3 es para decisiones de secuenciación en el momento del compromiso, no para la reorganización diaria del trabajo en curso (ver [métricas de flujo](../métricas-de-flujo/) sobre WIP).

## Fuentes

- Black Swan Farming, CD3 and WSJF. <https://blackswanfarming.com/wsjf-weighted-shortest-job-first/>
- SAFe, WSJF. <https://framework.scaledagile.com/wsjf>
- Reinertsen DG, *The Principles of Product Development Flow*.
