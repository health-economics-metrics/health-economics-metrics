# Deuda Técnica

La deuda técnica es el coste futuro implícito de decisiones pasadas expeditivas en una base de código: el trabajo de remediación adeudado (**principal**) y el lastre continuo que ejerce sobre la entrega (**interés**). Los métodos de cuantificación como SQALE la convierten de metáfora en un pasivo con coste.

## Por qué importa

Sin cuantificar, la deuda técnica es una queja; cuantificada, es un caso de negocio. Las líneas base de la industria (CAST Appmarq, 1.400 apps / 550M LOC): históricamente ≈ **$3,61 de principal de deuda técnica por línea de código**, con bases de código típicas llevando una ratio de deuda del 15-20% del coste de reconstrucción, frente a un listón de salud comúnmente usado de ≤5% (el grado "A" de SonarQube). El marco de economía de la salud encaja precisamente: la deuda es una *condición crónica* — no tratada, progresa, su "interés" se acumula como entrega más lenta y tasas de defecto más altas, y la remediación compite por capacidad contra el trabajo de funcionalidades exactamente como la prevención compite con el tratamiento.

## El cálculo

```
Principal SQALE   = Σ sobre violaciones (tiempo de remediación) × tarifa de coste del desarrollador
Ratio de deuda técnica (RDT) = coste de remediación / coste de redesarrollo × 100
                    (grados SonarQube: A ≤ 5%, B ≤ 10%, C ≤ 20%, D ≤ 50%)

Interés (la cifra que justifica el pago):
  interés/año = Δ velocidad de entrega × valor por unidad de velocidad
                + Δ tasa de defectos × coste por defecto
Caso de pago  = VP(interés evitado durante el horizonte) − coste de remediación
                (descontado — ver discounting-and-time-preference.md)
```

El principal declara el pasivo; el **interés** hace el caso de inversión. Pagar £500k de principal para evitar £40k/año de interés es un mal trato; para evitar £400k/año, excelente.

## Ejemplo resuelto

Una capa de integración de registros clínicos de 400k LOC: principal SQALE 3.800 horas × £75 = **£285k**; RDT ≈ 12% (grado C). Interés medido: los equipos que tocan esta capa muestran tiempos de ciclo 40% más largos y tasas de fallo de cambios 2× frente a la línea base del parque. La capa absorbe 6.000 horas-dev/año:

```
Interés ≈ 6.000 × 0,40 × £75      = £180.000/año (lastre de velocidad)
         + 12 fallos extra × £8.000 = £96.000/año (retrabajo/incidentes)
         ≈ £276.000/año

Remedia el peor 30% del principal (£85k) apuntando a puntos calientes → reducción
de interés modelada del 60%: ahorra ~£166k/año. Recuperación ≈ 6 meses.
```

La focalización en puntos calientes importa: el interés de deuda se concentra donde la frecuencia de cambio × densidad de deuda alcanza el máximo — remediar deuda rara vez tocada no compra nada, como tratar una condición que nunca habría progresado ([economía de la prevención](../economía-de-la-prevención/)).

## Conexión con la ingeniería de software

Las importaciones de economía de la salud que mejoran los argumentos de deuda técnica: expresa el parque como un **inventario de carga** (estilo [AVAD](../año-de-vida-ajustado-por-discapacidad/) — ¿dónde están los años-ingeniero saludables perdidos?); justifica el pago con matemática de progresión, honestamente (usualmente coste-efectivo, no coste-ahorrador); pondera la remediación de los peores sistemas por [déficit de gravedad](../déficit-de-avac-y-moduladores-de-gravedad/); y presenta grandes propuestas de remediación con un análisis de compensación que sobrevive a las reglas de [costes posteriores evitados](../costes-posteriores-evitados/) — ponderado por probabilidad, descontado, contado una vez.

## Errores comunes

- **Informe solo de principal**: una gran cifra aterradora sin estimación de interés no justifica nada.
- **Cifras de deuda generadas por herramienta tomadas literalmente**: SQALE cuenta violaciones de reglas; se pierde la deuda arquitectónica (el tipo caro) y cuenta trivialidades.
- **Utopismo de deuda cero**: el nivel óptimo de deuda no es cero — la deuda es apalancamiento; la pregunta es la tasa de interés.
- **"La reescritura la evita toda"**: las propuestas de reescritura deben superar las mismas reglas de compensación — coste contrafactual, probabilidad, descuento.

## Fuentes

- CAST, technical debt estimation. <https://www.castsoftware.com/glossary/technical-debt-estimation>
- Letouzey J-L, "The SQALE method for evaluating Technical Debt." <https://www.researchgate.net/publication/239763591_The_SQALE_method_for_evaluating_Technical_Debt>
