# Días-Cama Ahorrados

Un día-cama es un paciente ocupando una cama de hospital durante un día. Los "días-cama ahorrados" — mediante alta más temprana, evitación de ingresos o salas virtuales — es el beneficio de trabajo pesado de los casos de negocio digitales del NHS, y el más comúnmente sobrevalorado.

## Por qué importa

Las camas son la restricción vinculante de la atención aguda: cuando las camas se llenan, la cirugía electiva se cancela, las ambulancias hacen cola y el servicio de urgencias se satura. Las intervenciones que liberan días-cama por lo tanto conllevan valor real — pero el *tipo* de valor depende enteramente de qué pasa con la cama liberada. Los directores financieros han aprendido a descontar fuertemente las reclamaciones ingenuas de días-cama; acertar en esta aritmética es una prueba de credibilidad.

## El cálculo

```
Días-cama ahorrados = pacientes afectados × Δ duración de estancia (o ingresos evitados × EDM promedio)

El valor depende del uso de la capacidad liberada:
  rellenada con actividad electiva → valor = ingreso de actividad o beneficio de lista de espera
  sala cerrada / reducida          → valor = personal + coste de funcionamiento liberado (efectivo)
  absorbida como holgura            → valor ≈ solo coste marginal (hotel), £50–£150/día
```

El coste medio totalmente absorbido de un día-cama agudo a menudo se cita en £400+ (la Colección Nacional de Costes históricamente ~£350 para días-cama en exceso) — pero ver [coste marginal frente a promedio](../coste-marginal-frente-a-promedio/): el promedio casi nunca es el ahorro.

## Ejemplo resuelto

Una "sala virtual" de monitoreo remoto permite a 600 pacientes/año irse a casa 2 días antes: 1.200 días-cama ahorrados.

- **Reclamación ingenua**: 1.200 × £400 = £480.000. Incorrecto a menos que se cierre una sala.
- **Reclamación honesta**: el fideicomiso rellena las camas con pacientes electivos de ortopedia. 1.200 días-cama ÷ estancia media de 3 días = 400 episodios electivos adicionales a ~£6.000 de ingreso cada uno bajo pago basado en actividad = **£2,4M de actividad financiada adicional** (menos el coste marginal de tratar a esos pacientes), *más* 400 pacientes fuera de la lista de espera. El coste de funcionamiento de la sala virtual (£350.000) se compensa con esto.

La capacidad liberada que se *reutiliza* a menudo vale más que la reclamación de efectivo ingenua — pero es un tipo diferente de valor y debe etiquetarse como tal ([liberador de efectivo frente a no liberador de efectivo](../ahorros-liberadores-de-efectivo-frente-a-no-liberadores-de-efectivo/)).

## Conexión con la ingeniería de software

"Días de servidor ahorrados" se comporta idénticamente. Desmantelar entornos siempre activos solo libera efectivo cuando las instancias se terminan realmente o las reservas caducan; la capacidad absorbida de vuelta en el conjunto vale su coste marginal (~0 sobre gasto comprometido). La disciplina paralela: para cada ahorro reclamado, nombra el *mecanismo* — terminado, rellenado con trabajo valioso, o evaporado. El software que reduce la duración de estancia hospitalaria (coordinación de altas, monitoreo remoto, tiempo de respuesta de diagnóstico) debería modelar los tres escenarios y dejar que el fideicomiso elija por sala.

## Errores comunes

- **Valoración a coste promedio** de capacidad marginal — el error canónico.
- **Doble contabilización**: días-cama ahorrados *y* ingresos evitados *y* reducción de lista de espera de la misma cama liberada.
- **Asumir que los días ahorrados son los días caros**: los días ahorrados al final de la estancia son los más baratos (baja agudeza).

## Fuentes

- NHS England, Colección Nacional de Costes. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- Economics by Design, calculadora de costes del NHS. <https://economicsbydesign.com/tools/nhs-cost-calculator/>
