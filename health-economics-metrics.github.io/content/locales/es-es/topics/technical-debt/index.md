# Deuda técnica

La deuda técnica es el coste futuro implícito de decisiones pasadas tomadas por conveniencia en una base de código: el trabajo de remediación adeudado (**principal**) y el lastre continuo que ejerce sobre la entrega (**interés**). Métodos de cuantificación como SQALE la convierten de metáfora en pasivo con coste.

## Por qué importa

Sin cuantificar, la deuda técnica es una queja; cuantificada, es un caso de negocio. Referencias del sector (CAST Appmarq, 1,400 aplicaciones / 550 millones de LOC): históricamente ≈ **3.61 $ de principal de deuda técnica por línea de código**, con bases de código típicas que arrastran un ratio de deuda del 15-20% del coste de reconstrucción, frente a un umbral saludable de uso común de ≤5% (la calificación "A" de SonarQube). El marco de la economía de la salud encaja con precisión: la deuda es una *enfermedad crónica* — sin tratar, progresa, su "interés" se acumula como una entrega más lenta y tasas de defectos más altas, y la remediación compite por capacidad con el trabajo de funcionalidades exactamente igual que la prevención compite con el tratamiento.

## Las matemáticas

```
Principal SQALE   = Σ sobre las infracciones (tiempo de remediación) × tarifa de coste del desarrollador
Ratio de deuda técnica (TDR) = coste de remediación / coste de reconstrucción × 100
                    (calificaciones de SonarQube: A ≤ 5%, B ≤ 10%, C ≤ 20%, D ≤ 50%)

Interés (la cifra que justifica la amortización):
  interés/año = Δ velocidad de entrega × valor por unidad de velocidad
              + Δ tasa de defectos × coste por defecto
Caso de amortización = VP(interés evitado durante el horizonte) − coste de remediación
                (descontado — véase discounting-and-time-preference.md)
```

El principal expresa el pasivo; el **interés** justifica la inversión. Pagar 500.000£ de principal para evitar 40.000£/año de interés es un mal negocio; para evitar 400.000£/año, es excelente.

## Ejemplo práctico

Una capa de integración de registros clínicos de 400.000 LOC: principal SQALE 3,800 horas × 75£ = **285.000£**; TDR ≈ 12% (calificación C). Interés medido: los equipos que tocan esta capa muestran tiempos de ciclo un 40% más largos y tasas de fallo de cambios el doble que la línea base del parque. La capa absorbe 6,000 horas-desarrollador/año:

```
Interés ≈ 6,000 × 0.40 × 75£        = 180,000£/año (lastre de velocidad)
        + 12 fallos adicionales × 8,000£ = 96,000£/año (retrabajo/incidentes)
        ≈ 276,000£/año

Remediar el peor 30% del principal (85.000£) dirigido a los puntos calientes → reducción
modelada del interés del 60%: ahorra ~166.000£/año. Amortización ≈ 6 meses.
```

La focalización en puntos calientes importa: el interés de la deuda se concentra donde el pico de frecuencia de cambio × densidad de deuda es mayor — remediar deuda que rara vez se toca no compra nada, como tratar una condición que nunca habría progresado ([economía de la prevención](../prevention-economics/)).

## Conexión con la ingeniería de software

Las importaciones de la economía de la salud que mejoran los argumentos sobre deuda técnica: expresar el parque como un **inventario de carga** (al estilo [DALY](../disability-adjusted-life-year/) — ¿dónde están los años-ingeniero saludables perdidos?); justificar la amortización con las matemáticas de progresión, con honestidad (por lo general es coste-efectiva, no coste-ahorradora); ponderar la remediación de los peores sistemas por el [déficit de gravedad](../qaly-shortfall-and-severity-modifiers/); y presentar las grandes propuestas de remediación con un análisis de compensación que resista las reglas de [costes posteriores evitados](../avoided-downstream-costs/) — ponderado por probabilidad, descontado, contado una sola vez.

## Escollos

- **Informar solo del principal**: una cifra grande y alarmante sin una estimación del interés no justifica nada.
- **Tomar al pie de la letra las cifras de deuda generadas por herramientas**: SQALE cuenta infracciones de reglas; se le escapa la deuda arquitectónica (la cara) y cuenta trivialidades.
- **Utopismo de deuda cero**: el nivel óptimo de deuda no es cero — la deuda es apalancamiento; la cuestión es el tipo de interés.
- **"La reescritura la elimina toda"**: las propuestas de reescritura deben superar las mismas reglas de compensación — coste contrafactual, probabilidad, descuento.

## Fuentes

- CAST, technical debt estimation. <https://www.castsoftware.com/glossary/technical-debt-estimation>
- Letouzey J-L, "The SQALE method for evaluating Technical Debt." <https://www.researchgate.net/publication/239763591_The_SQALE_method_for_evaluating_Technical_Debt>
