# Días de cama ahorrados

Un día de cama es un paciente ocupando una cama hospitalaria durante un día. Los "días de cama ahorrados" — mediante altas más tempranas, ingresos evitados o salas virtuales — son el beneficio de referencia de los casos de negocio digitales del NHS, y el más habitualmente sobrevalorado.

## Por qué importa

Las camas son la restricción vinculante de la atención aguda: cuando las camas se llenan, se cancela la cirugía electiva, las ambulancias hacen cola y el servicio de urgencias se satura. Las intervenciones que liberan días de cama tienen, por tanto, un valor real — pero el *tipo* de valor depende por completo de lo que ocurra con la cama liberada. Los directores financieros han aprendido a descontar fuertemente las afirmaciones ingenuas sobre días de cama; hacer bien esta aritmética es una prueba de credibilidad.

## Las matemáticas

```
Días de cama ahorrados = pacientes afectados × Δ duración de la estancia
                          (o ingresos evitados × estancia media)

El valor depende del uso de la capacidad liberada:
  se rellena con actividad electiva → valor = ingresos por actividad o beneficio de lista de espera
  la sala se cierra o se reduce      → valor = personal + coste de funcionamiento liberado (caja)
  se absorbe como holgura            → valor ≈ solo coste marginal (hotelero), £50-£150/día
```

El coste medio totalmente absorbido de un día de cama agudo suele citarse en £400+ (la National Cost Collection históricamente ~£350 para días de cama en exceso) — pero véase [coste marginal frente a coste medio](../marginal-vs-average-cost/): la media casi nunca es el ahorro real.

## Ejemplo resuelto

Una "sala virtual" de monitorización remota permite que 600 pacientes/año se vayan a casa 2 días antes: 1,200 días de cama ahorrados.

- **Afirmación ingenua**: 1,200 × £400 = £480,000. Incorrecta a menos que se cierre una sala.
- **Afirmación honesta**: el trust rellena las camas con pacientes de traumatología y ortopedia electivos. 1,200 días de cama ÷ 3 días de estancia media = 400 episodios electivos adicionales a ~£6,000 de ingresos cada uno bajo el pago basado en actividad = **£2.4M de actividad financiada adicional** (menos el coste marginal de tratar a esos pacientes), *más* 400 pacientes fuera de la lista de espera. El coste de funcionamiento de la sala virtual (£350,000) se compensa frente a esto.

La capacidad liberada que se *reutiliza* suele valer más que la afirmación de caja ingenua — pero es un tipo de valor diferente y debe etiquetarse como tal ([liberador de caja frente a no liberador de caja](../cash-releasing-vs-non-cash-releasing/)).

## Conexión con la ingeniería de software

Los "días de servidor ahorrados" se comportan de forma idéntica. Dar de baja entornos siempre activos solo libera caja cuando las instancias se terminan o las reservas caducan; la capacidad absorbida de vuelta en el conjunto vale su coste marginal (~0 sobre el gasto comprometido). La disciplina paralela: para cada ahorro reclamado, nombre el *mecanismo* — terminado, rellenado con trabajo valioso o evaporado. El software que reduce la duración de la estancia hospitalaria (coordinación del alta, monitorización remota, tiempos de respuesta de diagnóstico) debería modelar los tres escenarios y dejar que el trust elija según cada sala.

## Trampas habituales

- **Valoración a coste medio** de capacidad marginal — el error canónico.
- **Doble contabilización**: días de cama ahorrados *y* ingresos evitados *y* reducción de lista de espera a partir de la misma cama liberada.
- **Asumir que los días ahorrados son los días caros**: los días ahorrados al final de la estancia son los más baratos (de menor complejidad).

## Fuentes

- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- Economics by Design, calculadora de costes del NHS. <https://economicsbydesign.com/tools/nhs-cost-calculator/>
