# Economía de la Prevención

La economía de intervenir antes de que ocurra o progrese una enfermedad. El hallazgo titular es contraintuitivo: **la mayoría de la prevención no ahorra dinero** — compra salud a buen precio. El análisis histórico de Cohen, Neumann y Weinstein en NEJM encontró que menos del 20% de las intervenciones preventivas ahorran costes netos; el resto son, en el mejor de los casos, coste-efectivas.

## Por qué importa

"La prevención ahorra dinero" es la falsa reclamación más repetida en política de salud, y los casos de negocio construidos sobre ella son demolidos por economistas de la salud. La estructura honesta: la prevención cuesta dinero ahora (cribar poblaciones enteras, tratar factores de riesgo en personas que nunca se habrían enfermado) y devuelve salud después — usualmente a un *buen* coste por AVAC, ocasionalmente con un ahorro, a veces a un precio terrible. Saber en qué régimen estás es el análisis. La distinción importa comercialmente: un producto de prevención vendido como "ahorra dinero al NHS" invita a una auditoría que fallará; vendido como "compra AVAC a £4.000" puede ganar con los mismos hechos. Ver [intervención más temprana](../intervención-más-temprana/) para la versión dentro de la vía.

## El cálculo

```
Coste neto de la prevención (por persona) =
    coste de la intervención × todos los tratados
  − costes posteriores evitados × los pocos que habrían progresado
  (ambos descontados — los costes evitados están años de distancia; ver
   discounting-and-time-preference.md)

Ahorro de coste requiere: coste de intervención < P(progresión) × coste evitado × factor de descuento
Coste-efectividad requiere solo: coste neto / AVAC ganados < umbral
```

La paradoja de la prevención: el coste de intervención se multiplica sobre toda la población; los beneficios se acumulan solo en los pocos contrafactuales.

## Ejemplo resuelto

Una aplicación de gestión de hipertensión ofrecida a 100.000 adultos en riesgo, £25/persona/año. En 10 años previene 400 accidentes cerebrovasculares (cada uno costando £45.000 descontados, y 3 AVAC perdidos).

```
Coste:    100.000 × £25 × 10 años (descontado ≈ ×8,3) ≈ £20,8M
Compensaciones: 400 × £45.000 = £18,0M
Coste neto ≈ £2,8M — NO ahorra coste

AVAC ganados = 400 × 3 = 1.200
Coste por AVAC = 2,8M / 1.200 ≈ £2.300/AVAC — excepcionalmente coste-efectivo
```

Mismo programa, ambas verdades: pierde £2,8M en efectivo y compra salud a una décima parte del umbral de NICE. Fináncialo con la segunda cifra; nunca prometas la primera.

## Conexión con la ingeniería de software

La calidad shift-left es economía de la prevención, con su advertencia incluida. Las revisiones, pruebas y análisis estático aplican coste a *cada* cambio para capturar problemas en los pocos que habrían progresado a incidentes de producción. La curva de coste de defecto (10-100× por etapa) juega el papel de los costes de accidente cerebrovascular — y la conclusión honesta refleja la salud: el shift-left suele ser coste-*efectivo*, no automáticamente coste-*ahorrador*, porque la mayoría de los problemas marcados nunca se habrían convertido en incidentes (el problema de los pocos contrafactuales). Calcúlalo: coste total de puerta por periodo frente a incidentes realmente evitados × coste de incidente — la misma estructura de ejemplo resuelto, con [NNT](../número-necesario-a-tratar/) como la unidad por captura.

## Errores comunes

- **Reclamar ahorros de coste cuando la evidencia respalda la coste-efectividad** — el error definitorio de la defensa de la prevención en ambos dominios.
- **Compensaciones futuras no descontadas**: beneficios a 15 años vista al valor nominal.
- **Ignorar los costes de sobrediagnóstico/sobretratamiento**: la prevención también encuentra pseudo-enfermedad — ver [economía del cribado](../economía-del-cribado/).

## Fuentes

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- Masters R, et al. "Return on investment of public health interventions." JECH 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
