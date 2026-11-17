# Economía de la Prevención

La economía de intervenir antes de que ocurra o progrese una enfermedad. El hallazgo titular es contraintuitivo: **la mayoría de la prevención no ahorra dinero** — compra salud a buen precio. El análisis histórico de Cohen, Neumann y Weinstein en NEJM encontró que menos del 20% de las intervenciones preventivas ahorran costos netos; el resto son, en el mejor de los casos, costo-efectivas.

## Por qué importa

"La prevención ahorra dinero" es la falsa reclamación más repetida en política de salud, y los casos de negocio construidos sobre ella son demolidos por economistas de la salud. La estructura honesta: la prevención cuesta dinero ahora (cribar poblaciones enteras, tratar factores de riesgo en personas que nunca se habrían enfermado) y devuelve salud después — usualmente a un *buen* costo por AVAC, ocasionalmente con un ahorro, a veces a un precio terrible. Saber en qué régimen estás es el análisis. La distinción importa comercialmente: un producto de prevención vendido como "ahorra dinero al NHS" invita a una auditoría que fallará; vendido como "compra AVAC a £4.000" puede ganar con los mismos hechos. Ver [intervención más temprana](../intervención-más-temprana/) para la versión dentro de la vía. Antes de costear un programa de prevención, la [fracción atribuible poblacional](../fracción-atribuible-poblacional/) responde primero a la pregunta de escala: qué proporción de la carga de enfermedad objetivo podría eliminar de forma plausible el factor de riesgo que aborda el programa.

## El cálculo

```
Costo neto de la prevención (por persona) =
    costo de la intervención × todos los tratados
  − costos posteriores evitados × los pocos que habrían progresado
  (ambos descontados — los costos evitados están años de distancia; ver
   discounting-and-time-preference.md)

Ahorro de costo requiere: costo de intervención < P(progresión) × costo evitado × factor de descuento
Costo-efectividad requiere solo: costo neto / AVAC ganados < umbral
```

La paradoja de la prevención: el costo de intervención se multiplica sobre toda la población; los beneficios se acumulan solo en los pocos contrafactuales.

## Ejemplo resuelto

Una aplicación de gestión de hipertensión ofrecida a 100.000 adultos en riesgo, £25/persona/año. En 10 años previene 400 accidentes cerebrovasculares (cada uno costando £45.000 descontados, y 3 AVAC perdidos).

```
Costo:    100.000 × £25 × 10 años (descontado ≈ ×8,3) ≈ £20,8M
Compensaciones: 400 × £45.000 = £18,0M
Costo neto ≈ £2,8M — NO ahorra costo

AVAC ganados = 400 × 3 = 1.200
Costo por AVAC = 2,8M / 1.200 ≈ £2.300/AVAC — excepcionalmente costo-efectivo
```

Mismo programa, ambas verdades: pierde £2,8M en efectivo y compra salud a una décima parte del umbral de NICE. Fináncialo con la segunda cifra; nunca prometas la primera.

## Conexión con la ingeniería de software

La calidad shift-left es economía de la prevención, con su advertencia incluida. Las revisiones, pruebas y análisis estático aplican costo a *cada* cambio para capturar problemas en los pocos que habrían progresado a incidentes de producción. La curva de costo de defecto (10-100× por etapa) juega el papel de los costos de accidente cerebrovascular — y la conclusión honesta refleja la salud: el shift-left suele ser costo-*efectivo*, no automáticamente costo-*ahorrador*, porque la mayoría de los problemas marcados nunca se habrían convertido en incidentes (el problema de los pocos contrafactuales). Calcúlalo: costo total de puerta por periodo frente a incidentes realmente evitados × costo de incidente — la misma estructura de ejemplo resuelto, con [NNT](../número-necesario-a-tratar/) como la unidad por captura.

## Errores comunes

- **Reclamar ahorros de costo cuando la evidencia respalda la costo-efectividad** — el error definitorio de la defensa de la prevención en ambos dominios.
- **Compensaciones futuras no descontadas**: beneficios a 15 años vista al valor nominal.
- **Ignorar los costos de sobrediagnóstico/sobretratamiento**: la prevención también encuentra pseudo-enfermedad — ver [economía del cribado](../economía-del-cribado/).

## Fuentes

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- Masters R, et al. "Return on investment of public health interventions." JECH 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
