# Costes Posteriores Evitados

Los costes posteriores evitados (compensaciones de coste) son gastos de tratamiento futuros prevenidos por una acción más temprana o mejor, netos contra el coste de la propia intervención. Las compensaciones son el mecanismo por el cual una intervención puede volverse *dominante* — más barata **y** mejor — y también son la línea más duplicada en el conteo y sobreestimada en la economía de la salud.

## Por qué importa

Casi toda propuesta de valor de salud digital contiene una reclamación de compensación: "nuestra aplicación previene ingresos", "nuestras alertas previenen el deterioro", "nuestra plataforma evita pruebas duplicadas". Cuando las compensaciones son reales, transforman la economía (ver el ejemplo resuelto de [RCEI](../ratio-de-coste-efectividad-incremental/), donde una compensación de £600k hace el caso). Los pagadores lo saben — así que las reclamaciones de compensación atraen el escrutinio más duro en cualquier evaluación. Las reglas de credibilidad siguientes son lo que separa un modelo financiable del marketing.

## El cálculo

```
Coste neto = coste de la intervención − Σ compensaciones

Una compensación válida debe ser:
  Atribuible — vinculada causalmente a la intervención (evidencia comparativa)
  Marginal    — el dinero realmente deja de gastarse, a coste marginal no
                 promedio (ver marginal-vs-average-cost.md)
  Ponderada por probabilidad — ponderada por P(el evento posterior habría ocurrido)
  Descontada  — costes futuros evitados a valor presente
  Única        — contada una vez, en una línea de beneficio
```

## Ejemplo resuelto

"Esta reclamación de riesgo de migración, hecha correctamente": una aplicación de monitoreo de heridas para 5.000 pacientes post-quirúrgicos reclama evitar reingresos relacionados con infecciones.

```
Reingreso basal por infección: 4,0%; con la aplicación (ECA): 3,1%
Eventos atribuibles evitados = 5.000 × 0,009 = 45/año
Coste por episodio de reingreso (marginal, este fideicomiso): £3.200
Compensación = 45 × 3.200 = £144.000/año
Coste de la aplicación = 5.000 × £20 = £100.000/año
Coste neto = −£44.000 → genuinamente ahorra costes, con:
  atribución de un ECA ✓  costeo marginal ✓  probabilidad de datos del ensayo ✓
```

La misma reclamación construida sobre "los reingresos cuestan £5.800 de media, evitaremos muchos" falla las cuatro pruebas y merece el rechazo que recibe.

## Conexión con la ingeniería de software

"Esta migración evita la futura reescritura" es una reclamación de compensación, y las reglas de economía de la salud la hacen honesta:

- **Coste contrafactual**: ¿cuánto costaría realmente la reescritura, evidenciado cómo?
- **Probabilidad**: ¿cuán probable es ese futuro? (No 100% — los productos se cancelan, las prioridades cambian.)
- **Descuento**: una reescritura evitada en el año 4 con un descuento del 3,5-10% vale mucho menos que su valor nominal.
- **Unicidad**: no reclames también la misma reescritura evitada en la línea de deuda técnica y en la línea de retención.

`Valor de compensación = P(evento futuro) × coste contrafactual × factor de descuento` — escribe esa línea en la propuesta y observa cómo la estimación se vuelve debatible, que es el objetivo.

## Errores comunes

- **Doble contabilización** — el mismo ingreso evitado reclamado como compensación, días de cama y AVAC con coste adjunto.
- **Compensaciones a coste promedio** para eventos cuyos costes fijos continúan de todos modos.
- **Probabilidad del 100% silenciosa** en eventos posteriores que eran meramente posibles.
- **Compensaciones a otros presupuestos** presentadas como ahorros al pagador al que se le pide pagar — ver [perspectiva del análisis](../perspectiva-del-análisis/).

## Fuentes

- Glosario del York Health Economics Consortium: compensación de coste. <https://yhec.co.uk/glossary/cost-offset/>
- Cohen JT, Neumann PJ, Weinstein MC. NEJM 2008 (las compensaciones raramente superan los costes). <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
