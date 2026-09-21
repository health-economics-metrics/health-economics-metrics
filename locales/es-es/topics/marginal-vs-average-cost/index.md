# Coste Marginal frente a Coste Medio

El coste medio es el coste total dividido entre las unidades producidas. El coste marginal es el coste de producir una unidad *adicional*. Las decisiones deben tomarse según el coste marginal, pero los costes unitarios publicados son casi siempre medias.

## Por qué importa

El error más común en los business case de salud digital es valorar un recurso ahorrado a su coste **medio** cuando el ahorro real es el coste **marginal**. Un día-cama hospitalario tiene un coste medio (totalmente absorbido) de más de £400, pero liberar un día-cama no ahorra £400: el edificio, la calefacción y la mayor parte de los costes de personal continúan. El efectivo realmente liberado puede ser de £50–£150, salvo que se liberen camas suficientes como para cerrar una planta.

## Las matemáticas

```
Coste medio:    AC = TC / Q
Coste marginal: MC = dTC/dQ   (coste de una unidad más/menos)

TC = coste total, Q = cantidad
```

Los costes fijos hacen que MC < AC en las reducciones de capacidad, y MC puede acercarse a cero cuando existe capacidad sobrante. Las afirmaciones de ahorro deberían usar:

```
Ahorro real = ΔQ × MC                  (cambios pequeños)
Ahorro real = cambio escalonado en TC  (cambios grandes que cruzan un umbral de capacidad, p. ej. cerrar una planta)
```

## Ejemplo resuelto

Tu software reduce la estancia media, liberando 1,000 días-cama/año en un trust.

- **Afirmación ingenua**: 1,000 × £400 de coste medio = **£400,000 ahorrados**. Incorrecto.
- **Afirmación marginal**: el coste variable por día-cama (comida, lavandería, consumibles, algo de flexibilidad de enfermería) ≈ £120. Ahorro = 1,000 × £120 = **£120,000**, *más* el valor de la capacidad liberada si las camas se rellenan con pacientes electivos en espera (ingresos bajo el pago por actividad, o reducción de la lista de espera).
- **Afirmación de cambio escalonado**: si el trust libera 7,300 días-cama/año (una planta de 20 camas), puede efectivamente cerrarla: personal + funcionamiento ≈ £1.5 millones/año de efectivo real. Ahora las matemáticas del coste medio se acercan más a la realidad.

La misma intervención, tres cifras defendibles, según si el cambio cruza o no un escalón de capacidad.

## Conexión con la ingeniería de software

La economía cloud es territorio nativo de coste marginal:

- El coste marginal de una ejecución de CI más en capacidad ya reservada es ≈ £0, mientras que el coste medio por ejecución (gasto total de la plataforma ÷ ejecuciones) puede ser de varias libras. Los sistemas de chargeback que facturan al coste medio empujan a los equipos a infrautilizar una capacidad compartida que en el margen es en realidad gratuita.
- Por el contrario, «hemos ahorrado un 30% de cómputo» solo libera efectivo si las instancias se terminan realmente o las reservas se reducen: la versión software de la trampa del día-cama. Véase [cash-releasing vs non-cash-releasing savings](../cash-releasing-vs-non-cash-releasing/).

## Trampas habituales

- **Valorar la capacidad al coste medio** y presentarlo como efectivo (el clásico).
- **Asumir que el coste marginal es constante.** Sube en escalones en los límites de capacidad (cierres de planta, niveles de licencia, compromisos de instancias reservadas).
- **Usar el coste marginal para decisiones de expansión pero el medio para las de contracción** en el mismo caso: elige según la decisión real.

## Fuentes

- York Health Economics Consortium glossary: marginal cost. <https://yhec.co.uk/glossary/marginal-cost/>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
