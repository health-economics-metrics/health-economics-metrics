# Coste Marginal frente a Promedio

El coste promedio es el coste total dividido entre las unidades producidas. El coste marginal es el coste de producir una unidad *adicional*. Las decisiones deberían tomarse sobre el coste marginal — pero los costes unitarios publicados son casi siempre promedios.

## Por qué importa

El error individual más común en los casos de negocio de salud digital es valorar un recurso ahorrado a su coste **promedio** cuando el ahorro real es el coste **marginal**. Un día-cama de hospital tiene un coste promedio (totalmente absorbido) de £400+, pero liberar un día-cama no ahorra £400 — el edificio, la calefacción y la mayoría de los costes de personal continúan. El efectivo realmente liberado puede ser £50-£150 a menos que se liberen suficientes camas para cerrar una sala.

## El cálculo

```
Coste promedio:  CP = CT / Q
Coste marginal: CM = dCT/dQ   (coste de una unidad más/una menos)

CT = coste total, Q = cantidad
```

Los costes fijos hacen que CM < CP para las reducciones de capacidad, y el CM puede acercarse a cero cuando existe capacidad libre. Las reclamaciones de ahorro deberían usar:

```
Ahorro real = ΔQ × CM          (cambios pequeños)
Ahorro real = cambio escalonado en CT (cambios grandes que cruzan un umbral de
              capacidad, p. ej. cerrar una sala)
```

## Ejemplo resuelto

Tu software reduce la duración de estancia promedio, liberando 1.000 días-cama/año en un fideicomiso.

- **Reclamación ingenua**: 1.000 × £400 coste promedio = **£400.000 ahorrados**. Incorrecto.
- **Reclamación marginal**: el coste variable por día-cama (comida, lavandería, consumibles, algo de flexibilidad de enfermería) ≈ £120. Ahorro = 1.000 × £120 = **£120.000**, *más* el valor de la capacidad liberada si las camas se rellenan con pacientes electivos en espera (ingreso bajo pago basado en actividad, o reducción de lista de espera).
- **Reclamación de cambio escalonado**: si el fideicomiso libera 7.300 días-cama/año (una sala de 20 camas) puede realmente cerrar la sala: personal + funcionamiento ≈ £1,5 millones/año de efectivo real. Ahora la matemática de coste promedio está más cerca de la verdad.

Misma intervención, tres cifras defendibles, dependiendo de si el cambio cruza un escalón de capacidad.

## Conexión con la ingeniería de software

La economía de la nube es territorio nativo de coste marginal:

- El coste marginal de una ejecución de CI más sobre capacidad ya reservada es ≈ £0, mientras que el coste promedio por ejecución (gasto total de plataforma ÷ ejecuciones) puede ser libras. Los sistemas de facturación interna que cobran el coste promedio impulsan a los equipos a infrautilizar capacidad compartida que es realmente gratis en el margen.
- A la inversa, "ahorramos 30% de cómputo" solo libera efectivo si las instancias realmente se terminan o las reservas se reducen — la versión de software de la trampa del día-cama. Ver [ahorros liberadores de efectivo frente a no liberadores de efectivo](../ahorros-liberadores-de-efectivo-frente-a-no-liberadores-de-efectivo/).

## Errores comunes

- **Valorar la capacidad al coste promedio** y presentarla como efectivo (el clásico).
- **Asumir que el coste marginal es constante.** Se escalona en los límites de capacidad (cierres de sala, niveles de licencia, compromisos de instancia reservada).
- **Usar el coste marginal para decisiones de expansión pero el promedio para contracción** en el mismo caso — elige según la decisión real.

## Fuentes

- Glosario del York Health Economics Consortium: coste marginal. <https://yhec.co.uk/glossary/marginal-cost/>
- NHS England, Colección Nacional de Costes. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
