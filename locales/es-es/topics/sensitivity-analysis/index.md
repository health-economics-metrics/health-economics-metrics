# Análisis de sensibilidad

El análisis de sensibilidad determinista (DSA) varía un supuesto cada vez dentro de un rango plausible para comprobar si la conclusión se mantiene. La visualización estándar es un diagrama de tornado: los parámetros ordenados según cuánto hacen oscilar el resultado.

## Por qué importa

Todo modelo económico se construye sobre estimaciones — tiempo ahorrado, adopción, costes unitarios. La evaluación de tecnologías sanitarias se niega a aceptar una estimación puntual ("el ROI es del 340%") sin pruebas de que la conclusión es robusta frente a un desacuerdo razonable sobre los datos de entrada. Un diagrama de tornado le dice al responsable de la decisión *qué supuesto interrogar*: si el caso solo funciona cuando el parámetro más discutido está en su extremo optimista, todo el mundo puede verlo de inmediato.

Este es el hábito más transferible desde la economía de la salud hacia los casos de negocio del software.

## Las matemáticas

Para cada parámetro p con un rango plausible [p_bajo, p_alto]:

```
Resultado_bajo  = modelo(p = p_bajo,  todos los demás en el caso base)
Resultado_alto  = modelo(p = p_alto,  todos los demás en el caso base)
Oscilación(p)   = |Resultado_alto − Resultado_bajo|
```

Ordena los parámetros por oscilación; representa barras horizontales en torno al resultado del caso base. Variantes: DSA bidireccional (varía dos parámetros en una cuadrícula), análisis de umbral (encuentra el valor del parámetro en el que la decisión cambia).

## Ejemplo práctico

Asistente de codificación con IA para 200 desarrolladores. Caso base: licencia de 39£/desarrollador/mes; 30 min/desarrollador/día ahorrados; coste cargado 60£/hora; 220 días laborables.

```
Beneficio anual del caso base = 200 × 0.5h × 220 × 60£ = 1,320,000£
Coste anual                   = 200 × 39£ × 12          = 93,600£
Neto del caso base             = 1,226,400£
```

Tornado (un parámetro cada vez):

```
Tiempo ahorrado 0.1–1.0 h/día: neto = 170,400£ … 2,546,400£   (oscilación 2.38 M£) ← domina
Coste cargado 40–80£/h:        neto = 786,400£ … 1,666,400£   (oscilación 0.88 M£)
Días laborables 200–240:       neto = 1,106,400£ … 1,346,400£ (oscilación 0.24 M£)
Licencia 30–50£/mes:           neto = 1,248,000£ … 1,200,000£ (oscilación 48.000£)
```

Análisis de umbral: el beneficio neto llega a cero con aproximadamente **2.1 minutos/día** ahorrados. La decisión es insensible al precio de la licencia y depende por completo de la estimación de tiempo ahorrado — así que mide eso, no lo demás. (Y recuerda que el resultado es capacidad, no caja — véase [beneficios que liberan caja frente a los que no](../cash-releasing-vs-non-cash-releasing/).)

## Conexión con la ingeniería de software

Los ingenieros ya hacen este ejercicio por instinto como "¿y si nos equivocamos sobre X?" — el DSA simplemente lo hace sistemático y visible. Incluye un diagrama de tornado en toda propuesta de herramientas, plan de capacidad y análisis de construir frente a comprar. Convierte discusiones sobre de quién es la intuición correcta en acuerdos sobre qué parámetro hay que ir a medir — a menudo mediante un piloto, cuyo valor puede a su vez ponerse en precio (véase el [valor esperado de la información perfecta](../expected-value-of-perfect-information/)).

## Escollos

- **Rangos elegidos para favorecer**: ±10% en torno a cada dato de entrada sin importar la incertidumbre real. Las estimaciones de tiempo ahorrado merecen ±80%; los precios de licencia, ±10%.
- **Uno a la vez pasa por alto las interacciones** — los parámetros correlacionados (adopción y tiempo ahorrado) necesitan un análisis bidireccional o un [análisis de sensibilidad probabilístico](../probabilistic-sensitivity-analysis/) completo.
- **Hacer el análisis e ignorarlo**: si el tornado dice que el caso depende de una única cifra blanda, el siguiente paso es medirla, no dar el visto bueno.

## Fuentes

- York Health Economics Consortium, glosario: análisis de sensibilidad determinista. <https://yhec.co.uk/glossary/deterministic-sensitivity-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
