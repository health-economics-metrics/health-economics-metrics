# Economía de la Prevención

La economía de intervenir antes de que la enfermedad aparezca o progrese. El hallazgo principal es contraintuitivo: **la mayor parte de la prevención no ahorra dinero** — compra salud a buen precio. El análisis de referencia de Cohen, Neumann y Weinstein en el NEJM encontró que menos del 20% de las intervenciones preventivas son netamente ahorradoras de costes; el resto son, a lo sumo, coste-efectivas.

## Por qué importa

"La prevención ahorra dinero" es la afirmación falsa más repetida en política sanitaria, y los casos de negocio construidos sobre ella son desmontados por los economistas de la salud. La estructura honesta: la prevención cuesta dinero ahora (cribar poblaciones enteras, tratar factores de riesgo en personas que nunca habrían enfermado) y devuelve salud más tarde, normalmente a un *buen* coste por QALY, ocasionalmente con ahorro, a veces a un precio terrible. Saber en qué régimen se está es el análisis en sí. La distinción importa comercialmente: un producto de prevención vendido como "ahorra dinero al NHS" invita a una auditoría que perderá; vendido como "compra QALYs a 4,000 £" puede ganar con los mismos hechos. Véase [intervención más temprana](../earlier-intervention/) para la versión dentro de una misma vía asistencial.

## Las matemáticas

```
Coste neto de la prevención (por persona) =
    coste de la intervención × todos los tratados
  − costes aguas abajo evitados × los pocos que habrían progresado
  (ambos descontados — los costes evitados están a años vista; véase
   discounting-and-time-preference.md)

Ahorro de costes requiere: coste de la intervención < P(progresión) × coste evitado × factor de descuento
Coste-efectividad requiere solo: coste neto / QALYs ganados < umbral
```

La paradoja de la prevención: el coste de la intervención se multiplica sobre toda la población; los beneficios recaen solo en los pocos del contrafactual.

## Ejemplo trabajado

Una app de gestión de la hipertensión ofrecida a 100,000 adultos en riesgo, 25 £/persona/año. En 10 años previene 400 ictus (cada uno con un coste de 45,000 £ descontado, y 3 QALYs perdidos).

```
Coste:     100,000 × 25 £ × 10 años (descontado ≈ ×8.3) ≈ 20.8 M £
Compensa: 400 × 45,000 £ = 18.0 M £
Coste neto ≈ 2.8 M £ — NO ahorra costes

QALYs ganados = 400 × 3 = 1,200
Coste por QALY = 2.8 M / 1,200 ≈ 2,300 £/QALY — extraordinariamente coste-efectivo
```

Mismo programa, dos verdades a la vez: pierde 2.8 M £ en caja y compra salud a una décima parte del umbral de NICE. Financíalo con la segunda cifra; nunca prometas la primera.

## Conexión con la ingeniería de software

La calidad desplazada a la izquierda (shift-left) es economía de la prevención, con la misma salvedad incluida. Las revisiones, las pruebas y el análisis estático aplican coste a *cada* cambio para atrapar los problemas en los pocos que habrían progresado hasta incidentes en producción. La curva de coste del defecto (10–100× según la fase) desempeña el papel de los costes del ictus, y la conclusión honesta refleja la sanitaria: shift-left suele ser coste-*efectivo*, no automáticamente coste-*ahorrador*, porque la mayoría de los problemas marcados nunca habrían llegado a ser incidentes (el problema de los pocos del contrafactual). Calcúlalo: coste total de las puertas de calidad por periodo frente a incidentes realmente evitados × coste del incidente — la misma estructura del ejemplo trabajado, con [NNT](../number-needed-to-treat/) como unidad por captura.

## Errores habituales

- **Reivindicar ahorro de costes cuando la evidencia solo respalda coste-efectividad** — el error definitorio de la defensa de la prevención en ambos ámbitos.
- **Compensaciones futuras no descontadas**: beneficios a 15 años vista tomados a valor nominal.
- **Ignorar los costes del sobrediagnóstico/sobretratamiento**: la prevención también encuentra pseudoenfermedad — véase [economía del cribado](../screening-economics/).

## Fuentes

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- Masters R, et al. "Return on investment of public health interventions." JECH 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
