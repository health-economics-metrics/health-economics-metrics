# Análisis de minimización de costes (CMA)

El CMA compara únicamente los costes y elige la opción más barata — legítimo *solo* cuando se ha demostrado que los resultados de las alternativas son equivalentes.

## Por qué importa

El CMA es el análisis más simple y el más abusado. La afirmación de equivalencia hace todo el trabajo: si los resultados genuinamente no difieren (un biosimilar frente a su originador; dos proveedores del mismo servicio que cumplen la misma especificación), entonces el coste es la única pregunta y el CMA es correcto. El rigor reside en *demostrar* primero la equivalencia — típicamente mediante un estudio de no inferioridad con un margen preespecificado — que es exactamente el paso que los compradores suelen saltarse.

## Las matemáticas

```
Dada la evidencia de que Efecto_A ≈ Efecto_B (dentro de un margen preespecificado δ):
Elegir min(Coste_A, Coste_B)

Costes medidos desde la misma perspectiva, durante el mismo horizonte,
incluyendo los costes de cambio/transición.
```

Si la equivalencia no puede evidenciarse, el CMA no es válido — usa [CEA](../cost-effectiveness-analysis/)/[CUA](../cost-utility-analysis/) en su lugar.

## Ejemplo resuelto

Un trust elige entre dos plataformas de videoconsulta. Un piloto paralelo de 3 meses muestra tasas de finalización del 94.1% frente al 93.8%, satisfacción del paciente 4.4 frente a 4.4 — diferencias dentro del δ preacordado de 2 puntos porcentuales. Resultados: equivalentes. Costes a lo largo de 3 años:

```
                     Plataforma A   Plataforma B
Licencias             £360,000       £210,000
Integración           £80,000        £150,000
Formación/soporte     £60,000        £90,000
Total                 £500,000       £450,000
```

La Plataforma B gana por £50,000 — *incluyendo* su mayor coste de integración. Sin el piloto, la afirmación de equivalencia descansaría en folletos de proveedor, y una diferencia de 1 punto en la tasa de finalización (≈ miles de consultas fallidas al año) eclipsaría los £50,000.

## Conexión con la ingeniería de software

El CMA es la forma formal de la contratación de bienes homogéneos (commodities): dos proveedores de CI que cumplen los mismos SLO, dos almacenes de objetos con la misma especificación de durabilidad. La lección de la economía de la salud es el *orden de las operaciones*: primero evidencia la equivalencia (compara con tu carga de trabajo, pilota frente a tus SLO, con el margen acordado de antemano), después compara los costes totales incluyendo la migración. "Son básicamente iguales, B es más barato" sin el primer paso es como las organizaciones acaban comprando la herramienta que es un 10% más barata y un 40% peor. Corolario: cuando un proveedor argumenta por precio, hazle estipular la equivalencia — es vinculante también en la otra dirección.

## Escollos

- **Equivalencia asumida** — el pecado definitorio; la ausencia de evidencia de diferencia no es evidencia de equivalencia (los pilotos infradimensionados "muestran" equivalencia gratis).
- **Omitir los costes de cambio** — la migración, el reciclaje formativo y el funcionamiento en paralelo pertenecen al lado del coste.
- **Equivalencia en los resultados equivocados**: equivalente en la métrica medida, distinto en una que importa (accesibilidad, latencia de cola, salida de datos).

## Fuentes

- Glosario de York Health Economics Consortium: análisis de minimización de costes. <https://yhec.co.uk/glossary/cost-minimisation-analysis/>
- Briggs AH, O'Brien BJ. "The death of cost-minimization analysis?" Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11288052/>
