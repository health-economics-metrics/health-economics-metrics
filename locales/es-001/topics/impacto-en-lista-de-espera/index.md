# Impacto en Lista de Espera

El impacto en lista de espera convierte la capacidad clínica ahorrada en pacientes retirados de (o movidos más rápido a través de) la lista de espera. Convertir horas ahorradas en franjas de clínica extra reduce directamente el tamaño de la lista de espera de un fideicomiso — la forma más tangible de mostrar a un sistema de salud para qué *sirve* la capacidad liberada.

## Por qué importa

La lista de espera electiva es el desafío definitorio postpandémico del NHS (su tamaño es una métrica política nacional), y cada fideicomiso ejecuta un programa de recuperación electiva contra ella. Un caso de negocio que dice "ahorra 2.000 horas-enfermera" es abstracto; uno que dice "crea 4.000 franjas de cita adicionales, atiende a 3.800 pacientes en espera, recorta la lista de la especialidad en 9%" es una historia que un Director de Operaciones puede llevar a su consejo. El impacto en lista de espera es la *unidad de cuenta* natural para la [capacidad no liberadora de efectivo](../ahorros-liberadores-de-efectivo-frente-a-no-liberadores-de-efectivo/).

## El cálculo

```
Franjas extra        = horas liberadas / duración de franja × utilización
Pacientes atendidos   = franjas extra × (1 − tasa de DNA)
Reducción de lista   = pacientes atendidos − nueva demanda inducida
Ganancia de tiempo de espera  = mejora de cola por mayor tasa de servicio
                     (para colas estables, recortar el atraso N en ΔN a
                     tasa de servicio μ adelanta a todos ~ΔN/μ)
```

Valor de salud de esperas más cortas: los pacientes pasan menos semanas en el estado de utilidad pre-tratamiento más bajo — la aritmética de AVAC en [derivación a tratamiento](../derivación-a-tratamiento/).

## Ejemplo resuelto

El software de documentación ambiental ahorra a cada una de 20 enfermeras de clínica 45 min/día. En 250 días: 20 × 0,75 × 250 = 3.750 horas/año.

```
Franjas (30 min, 85% utilizable) = 3.750 / 0,5 × 0,85 = 6.375 franjas
Pacientes atendidos (7% DNA)     = 6.375 × 0,93       ≈ 5.929/año
```

Para una especialidad con una lista de 12.000 pacientes y 24.000 citas/año de capacidad ajustada a la demanda, ~5.900 citas adicionales recortan las esperas promedio en aproximadamente un cuarto — moviendo al fideicomiso materialmente hacia el estándar de 18 semanas sin contratar. A ~£160 de valor de esquema por asistencia, la actividad vale ~£949.000/año (ver [tarifa nacional y costes unitarios](../tarifa-nacional-y-costes-unitarios/)) — pero presenta el encuadre de *lista de espera* primero; es el que gestiona el sistema.

## Conexión con la ingeniería de software

Una lista de espera es un atraso acumulado, y la economía de reducción de atraso se traslada en ambas direcciones. De la salud al software: valora la reducción de atraso por cuánto tiempo esperan los *usuarios* por el valor, no por elementos cerrados ([coste de retraso](../coste-de-retraso/) por elemento en cola). Del software a la salud: la Ley de Little dice que la lista se encoge solo si la tasa de servicio supera la tasa de llegada — las ganancias de capacidad absorbidas por derivaciones crecientes dejan las esperas sin cambios, así que modela también las llegadas. Y en ambos dominios, prioriza por valor ponderado por gravedad (categorías de urgencia clínica ↔ [moduladores de gravedad](../déficit-de-avac-y-moduladores-de-gravedad/)), no primero-en-entrar-primero-en-salir.

## Errores comunes

- **Franjas ≠ pacientes**: olvidar las tasas de DNA y los fragmentos inutilizables del tiempo liberado.
- **Demanda inducida**: la capacidad extra visible atrae derivaciones; el impacto neto en la lista es menor que el bruto.
- **Reclamar efectivo**: el impacto en lista de espera es valor de capacidad; la reclamación de efectivo (externalización evitada de trabajo de atraso) es una línea diferente — ver [costes de externalización evitables](../costes-de-externalización-evitables/).

## Fuentes

- NHS England, estadísticas de tiempos de espera RTT. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, plan de recuperación de atención electiva. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
