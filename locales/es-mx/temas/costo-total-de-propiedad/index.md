# Costo Total de Propiedad (CTP)

El CTP es el costo completo de un sistema durante su vida: adquisición o construcción, integración, operación, mantenimiento, soporte, formación y desmantelamiento. La línea base incómoda: **el mantenimiento es el 50–80% del CTP del software** — aproximadamente tres cuartas partes del costo de vida llegan *después* del lanzamiento.

## Por qué importa

La evaluación de tecnología sanitaria aprendió hace mucho que el precio de un medicamento no es su costo — la administración, el monitoreo y el manejo de efectos secundarios pertenecen todos al modelo. Los casos de negocio de software que solo cuentan el costo de construcción/licencia repiten el error ingenuo del precio del medicamento y subestiman sistemáticamente el lado del costo de cada [RCEI](../ratio-de-costo-efectividad-incremental/) e [impacto presupuestario](../análisis-de-impacto-presupuestario/) que alimentan. Para las adquisiciones del NHS, la disciplina del CTP es lo que hace honesta la reclamación de costo-efectividad de un producto digital — y es donde pierden las opciones que parecen baratas.

## El cálculo

```
CTP = costo inicial (construcción/licencia + integración + migración de datos + formación)
    + Σ_t [operaciones + mantenimiento + soporte + infraestructura + actualizaciones
           + cumplimiento/garantía]_t / (1 + r)^t
    + costo de desmantelamiento (salida, extracción de datos, ejecución paralela)

Horizonte: 3–5 años comercial, vida útil del sistema para infraestructura clínica
r: 3,5% sector público (Green Book), 8–12% comercial
Puntos de referencia: mantenimiento anual ≈ 15–20% del costo de construcción; ~78% de la vida
del CTP posterior al lanzamiento; ignorar el desmantelamiento y el bloqueo de proveedor se tasa a sí mismo.
```

## Ejemplo resuelto

Dos opciones para un sistema de observaciones electrónicas, horizonte de 5 años:

```
                        SaaS del proveedor     Construcción interna
Año 0 (licencia/construcción)  £250.000        £900.000
Integración + formación  £180.000        £150.000
Funcionamiento anual (años 1–5)    £120.000/año     £190.000/año  (hosting + 1,5 FTE mant.)
Salida/desmantelamiento       £60.000         £30.000

CTP no descontado        £1.090.000      £2.030.000
```

La estimación de ingeniería de la opción de construcción (£900k) fue solo el 44% de su CTP real — y las estimaciones de construcción por sí mismas típicamente sobrepasan un 30-40% (ver [construir frente a comprar](../construir-frente-a-comprar/)). A menos que la opción interna entregue *resultados* materialmente diferentes, la lógica de [minimización de costo](../análisis-de-minimización-de-costos/) se aplica y SaaS gana por ~£940k.

## Conexión con la ingeniería de software

Los ingenieros subestiman los datos de mantenimiento de su propio campo al defender construcciones: la regla de mantenimiento anual del 15-20% del costo de construcción significa que cada sistema de £1M compromete silenciosamente £150-200k/año de capacidad futura — un pasivo que pertenece al mismo balance mental que la [deuda técnica](../deuda-técnica/). El CTP también es la mitad de costo de cada métrica en este repositorio: costo por despliegue, [economía unitaria de la nube](../economía-unitaria-de-la-nube/), y la disciplina del denominador que la ETS impone a los patrocinadores de medicamentos. Cuando se desafía el precio de tu producto, una comparación de CTP que incluye los costos de funcionamiento reales del incumbente suele ser el reencuadre más fuerte disponible. Una cifra de TCO plurianual como la anterior es la suma de muchas partidas de costo a lo largo del tiempo; véase [agregación de costos segura para monedas](../agregación-de-costos-segura-para-monedas/) para saber por qué esa suma debería ser decimal exacta y no de coma flotante en cuanto el modelo deba cuadrar al céntimo, y [asignación exacta de costos al céntimo](../asignación-exacta-de-costos-al-céntimo/) para repartir un total de TCO entre centros de costo sin perder céntimos.

## Errores comunes

- **Anclaje al costo de lanzamiento**: comparar opciones al costo del año 0 cuando la clasificación se invierte para el año 3.
- **Falacia de la mano de obra interna gratuita**: mantenimiento interno tasado en cero porque "el equipo ya está pagado" — ver [costo de oportunidad](../costo-de-oportunidad/).
- **Ignorar los costos de salida**: la salida de datos, la terminación de contratos y la ejecución paralela son donde el SaaS "barato" se vuelve caro.
- **Violaciones de horizonte igual**: comparar un CTP de SaaS de 3 años contra una amortización de construcción de 10 años (ver [horizonte temporal](../horizonte-temporal/)).

## Fuentes

- IBM, total cost of ownership. <https://www.ibm.com/think/topics/total-cost-of-ownership>
- Puntos de referencia de costo de mantenimiento de software. <https://pegotec.net/software-maintenance-cost-percentage-2026-industry-benchmarks/>
