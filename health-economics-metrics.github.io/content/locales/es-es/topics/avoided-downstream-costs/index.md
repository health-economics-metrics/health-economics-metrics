# Costes posteriores evitados

Los costes posteriores evitados (compensaciones de coste, *cost offsets*) son gastos de tratamiento futuros prevenidos por una acción más temprana o mejor, compensados frente al propio coste de la intervención. Las compensaciones son el mecanismo por el cual una intervención puede volverse *dominante* — más barata **y** mejor — y también son la línea más duplicada y sobreestimada de la economía de la salud.

## Por qué importa

Casi toda propuesta de valor de la salud digital contiene una afirmación de compensación: "nuestra aplicación previene ingresos", "nuestras alertas previenen el deterioro", "nuestra plataforma evita pruebas duplicadas". Cuando las compensaciones son reales, transforman la economía (véase el ejemplo resuelto del [ICER](../incremental-cost-effectiveness-ratio/), donde una compensación de £600k decanta el caso). Los pagadores lo saben — por lo que las afirmaciones de compensación atraen el escrutinio más duro en cualquier evaluación. Las reglas de credibilidad siguientes son lo que separa un modelo financiable del marketing.

## Las matemáticas

```
Coste neto = coste de la intervención − Σ compensaciones

Una compensación válida debe ser:
  Atribuible   — causalmente vinculada a la intervención (evidencia comparativa)
  Marginal     — el dinero deja realmente de gastarse, a coste marginal no
                 medio (véase marginal-vs-average-cost.md)
  Ponderada por — ponderada por P(el evento posterior habría ocurrido)
  probabilidad
  Descontada   — costes futuros evitados a valor presente
  Única        — contabilizada una sola vez, en una única línea de beneficio
```

## Ejemplo resuelto

"Esta afirmación de riesgo de migración, hecha bien": una aplicación de monitorización de heridas para 5,000 pacientes postquirúrgicos afirma evitar reingresos relacionados con infecciones.

```
Reingreso basal por infección: 4.0% ; con la aplicación (ECA): 3.1%
Eventos atribuibles evitados = 5,000 × 0.009 = 45/año
Coste por episodio de reingreso (marginal, este trust): £3,200
Compensación = 45 × 3,200 = £144,000/año
Coste de la aplicación = 5,000 × £20 = £100,000/año
Coste neto = −£44,000 → genuinamente generador de ahorro, con:
  atribución de un ECA ✓  costeo marginal ✓  probabilidad de datos de ensayo ✓
```

La misma afirmación construida sobre "los reingresos cuestan £5,800 de media, evitaremos muchos" no supera ninguna de las cuatro pruebas y merece el rechazo que recibe.

## Conexión con la ingeniería de software

"Esta migración evita la futura reescritura" es una afirmación de compensación, y las reglas de la economía de la salud la hacen honesta:

- **Coste contrafactual**: ¿cuánto costaría realmente la reescritura, evidenciado cómo?
- **Probabilidad**: ¿qué probabilidad tiene ese futuro? (No el 100% — los productos se cancelan, las prioridades cambian.)
- **Descuento**: una reescritura evitada en el año 4 con un descuento del 3.5-10% vale mucho menos que su valor nominal.
- **Unicidad**: no reclame también la misma reescritura evitada en la línea de deuda técnica y en la línea de retención.

`Valor de la compensación = P(evento futuro) × coste contrafactual × factor de descuento` — escriba esa línea en la propuesta y observe cómo la estimación se vuelve discutible, que es precisamente el objetivo.

## Trampas habituales

- **Doble contabilización** — el mismo ingreso evitado reclamado como compensación, días de cama y AVAC con coste asociado.
- **Compensaciones a coste medio** para eventos cuyos costes fijos continúan de todos modos.
- **Probabilidad del 100% silenciosa** en eventos posteriores que eran meramente posibles.
- **Compensaciones a otros presupuestos** presentadas como ahorros para el pagador al que se le pide que pague — véase [perspectiva del análisis](../analysis-perspective/).

## Fuentes

- Glosario del York Health Economics Consortium: cost offset. <https://yhec.co.uk/glossary/cost-offset/>
- Cohen JT, Neumann PJ, Weinstein MC. NEJM 2008 (las compensaciones rara vez superan los costes). <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
