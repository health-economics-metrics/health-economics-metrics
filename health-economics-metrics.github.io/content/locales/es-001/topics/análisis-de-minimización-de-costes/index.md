# Análisis de Minimización de Costes (AMC)

El AMC compara solo los costes y elige la opción más barata — legítimo *solo* cuando se ha demostrado que los resultados de las alternativas son equivalentes.

## Por qué importa

El AMC es el análisis más simple y el más abusado. La reclamación de equivalencia hace todo el trabajo: si los resultados genuinamente no difieren (un biosimilar frente a su original; dos proveedores del mismo servicio que cumplen la misma especificación), entonces el coste es la única pregunta y el AMC es correcto. El rigor vive en *probar* la equivalencia primero — típicamente mediante un estudio de no inferioridad con un margen preespecificado — que es exactamente el paso que los compradores suelen omitir.

## El cálculo

```
Dada evidencia de que Efecto_A ≈ Efecto_B (dentro de un margen preespecificado δ):
Elige min(Coste_A, Coste_B)

Costes medidos desde la misma perspectiva, durante el mismo horizonte,
incluyendo costes de cambio/transición.
```

Si la equivalencia no puede evidenciarse, el AMC es inválido — usa [AEC](../análisis-de-coste-efectividad/)/[ACU](../análisis-de-coste-utilidad/) en su lugar.

## Ejemplo resuelto

Un fideicomiso elige entre dos plataformas de videoconsulta. Un piloto paralelo de 3 meses muestra tasas de finalización de 94,1% frente a 93,8%, satisfacción del paciente 4,4 frente a 4,4 — diferencias dentro del δ preacordado de 2 puntos porcentuales. Resultados: equivalentes. Costes durante 3 años:

```
                     Plataforma A     Plataforma B
Licencias             £360.000       £210.000
Integración           £80.000        £150.000
Formación/soporte     £60.000        £90.000
Total                £500.000       £450.000
```

La Plataforma B gana por £50.000 — *incluyendo* su mayor coste de integración. Sin el piloto, la reclamación de equivalencia descansaría en folletos del proveedor, y una diferencia de 1 punto en la tasa de finalización (≈ miles de consultas fallidas/año) empequeñecería los £50.000.

## Conexión con la ingeniería de software

El AMC es la forma formal de la adquisición de bienes básicos: dos proveedores de CI que cumplen ANS idénticos, dos almacenes de objetos con la misma especificación de durabilidad. La lección de economía de la salud es el *orden de las operaciones*: primero evidencia la equivalencia (compara con tu carga de trabajo, pilota con tus ANS, con el margen acordado de antemano), luego compara los costes totales incluyendo la migración. "Son básicamente iguales, B es más barato" sin el primer paso es cómo las organizaciones compran la herramienta que es 10% más barata y 40% peor. Corolario: cuando un proveedor argumenta el precio, hazle estipular la equivalencia — también es vinculante en la otra dirección.

## Errores comunes

- **Equivalencia asumida** — el pecado definitorio; la ausencia de evidencia de diferencia no es evidencia de equivalencia (los pilotos infrapotenciados "muestran" equivalencia gratis).
- **Omitir costes de cambio** — la migración, la reformación y la ejecución paralela pertenecen al lado del coste.
- **Equivalencia en los resultados equivocados**: equivalente en la métrica medida, diferente en una que importa (accesibilidad, latencia de cola, salida de datos).

## Fuentes

- Glosario del York Health Economics Consortium: análisis de minimización de costes. <https://yhec.co.uk/glossary/cost-minimisation-analysis/>
- Briggs AH, O'Brien BJ. "The death of cost-minimization analysis?" Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11288052/>
