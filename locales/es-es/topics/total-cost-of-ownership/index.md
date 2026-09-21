# Coste total de propiedad (TCO)

El TCO es el coste completo de un sistema a lo largo de su vida: adquisición o construcción, integración, operación, mantenimiento, soporte, formación y desmantelamiento. La línea base incómoda: **el mantenimiento supone el 50-80% del TCO del software** — aproximadamente tres cuartas partes del coste de por vida llegan *después* del lanzamiento.

## Por qué importa

La evaluación de tecnologías sanitarias aprendió hace tiempo que el precio de un fármaco no es su coste — la administración, la monitorización y el manejo de los efectos secundarios pertenecen todos al modelo. Los casos de negocio de software que solo cuentan el coste de construcción/licencia repiten el error ingenuo del precio del fármaco y subestiman sistemáticamente el lado del coste de cada [ICER](../incremental-cost-effectiveness-ratio/) y cada [impacto presupuestario](../budget-impact-analysis/) que alimentan. Para la contratación del NHS, la disciplina del TCO es lo que hace honesta la afirmación de coste-efectividad de un producto digital — y es donde pierden las opciones de apariencia barata.

## Las matemáticas

```
TCO = coste inicial (construcción/licencia + integración + migración de datos + formación)
    + Σ_t [operaciones + mantenimiento + soporte + infraestructura + actualizaciones
           + cumplimiento/garantía]_t / (1 + r)^t
    + coste de desmantelamiento (salida, extracción de datos, funcionamiento en paralelo)

Horizonte: 3-5 años en el ámbito comercial, vida útil del sistema para infraestructura clínica
r: 3.5% sector público (Green Book), 8-12% comercial
Referencias: el mantenimiento anual ≈ 15-20% del coste de construcción; ~78% del TCO
de por vida llega tras el lanzamiento; ignorar el desmantelamiento y el bloqueo de proveedor (vendor lock-in) tiene un precio propio.
```

## Ejemplo práctico

Dos opciones para un sistema de observaciones electrónicas, horizonte de 5 años:

```
                              SaaS del proveedor   Construcción propia
Año 0 (licencia/construcción)  250,000£             900,000£
Integración + formación        180,000£             150,000£
Operación anual (años 1-5)     120,000£/año         190,000£/año  (alojamiento + 1.5 FTE mant.)
Salida/desmantelamiento        60,000£              30,000£

TCO sin descontar               1,090,000£           2,030,000£
```

La estimación de ingeniería de la opción de construcción propia (900,000£) fue solo el 44% de su TCO real — y las propias estimaciones de construcción suelen desviarse un 30-40% al alza (véase [construir frente a comprar](../build-vs-buy/)). A menos que la opción propia entregue *resultados* materialmente distintos, se aplica la lógica de [minimización de costes](../cost-minimization-analysis/) y el SaaS gana por ~940.000£.

## Conexión con la ingeniería de software

Los ingenieros infraponderan los propios datos de mantenimiento de su campo al defender la construcción propia: la regla del 15-20% anual de mantenimiento sobre el coste de construcción significa que todo sistema de 1 M£ compromete silenciosamente 150,000-200.000£/año de capacidad futura — un pasivo que pertenece al mismo balance mental que la [deuda técnica](../technical-debt/). El TCO es también la mitad del coste de cada métrica de este repositorio: el coste por despliegue, la [economía unitaria de la nube](../cloud-unit-economics/), y la disciplina del denominador que la HTA impone a los patrocinadores de fármacos. Cuando se cuestiona el precio de tu producto, una comparación de TCO que incluya los costes de operación reales del incumbente suele ser el reenfoque más sólido disponible.

## Escollos

- **Anclaje al coste de lanzamiento**: comparar opciones por su coste en el año 0 cuando la clasificación se invierte para el año 3.
- **La falacia del trabajo interno gratuito**: el mantenimiento propio contabilizado a coste cero porque "el equipo ya está pagado" — véase [coste de oportunidad](../opportunity-cost/).
- **Ignorar los costes de salida**: la extracción de datos, la rescisión de contratos y el funcionamiento en paralelo son donde un SaaS "barato" se vuelve caro.
- **Infracciones del mismo horizonte**: comparar el TCO de un SaaS a 3 años con la amortización de una construcción propia a 10 años (véase [horizonte temporal](../time-horizon/)).

## Fuentes

- IBM, total cost of ownership. <https://www.ibm.com/think/topics/total-cost-of-ownership>
- Referencias de coste de mantenimiento de software. <https://pegotec.net/software-maintenance-cost-percentage-2026-industry-benchmarks/>
