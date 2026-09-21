# Análisis de Impacto Presupuestario (AIP)

El AIP estima qué le hace la adopción de una intervención al **presupuesto** de un pagador específico durante los próximos 1-5 años. Responde a la *asequibilidad*; la coste-efectividad responde al *valor*. Una tecnología puede tener un valor excelente y aun así ser inasequible — o asequible y de valor pobre. Las evaluaciones serias requieren ambos.

## Por qué importa

La pregunta del director financiero nunca es "¿cuál es el RCEI?" — es "¿qué le hace esto al presupuesto del año que viene?" La guía de buenas prácticas de ISPOR (el estándar del campo) especifica: la perspectiva propia del pagador, un horizonte de 1-5 años, flujos de efectivo anuales *no descontados*, curvas de adopción realistas e incertidumbre por escenario (no probabilística). NICE requiere información de impacto presupuestario junto con la coste-efectividad; un producto con impacto presupuestario nacional superior a ~£20M/año en Inglaterra desencadena la negociación comercial independientemente de su RCEI.

## El cálculo

```
IP_año_t = Coste_escenario_con_nuevo(t) − Coste_escenario_actual(t)

Coste_escenario(t) = Σ sobre grupos de pacientes:
   población elegible(t) × adopción(t) × coste neto por paciente(t)

coste neto por paciente = coste de la intervención − coste de atención desplazada + coste de atención inducida
```

Elecciones clave de modelado: crecimiento de la población elegible, la curva de adopción (la adopción nunca es instantánea), qué desplaza la nueva opción y cualquier demanda que *induce* (acceso más fácil → más usuarios).

## Ejemplo resuelto

Un pagador que cubre a 2M de personas considera un terapéutico digital a £300/paciente/año; 1,5% de los miembros son elegibles (30.000); adopción 20% → 40% → 60% durante 3 años; cada usuario desplaza £120/año de otra atención.

```
Coste neto por usuario = 300 − 120 = £180

Año 1: 30.000 × 0,20 × 180 = £1,08M
Año 2: 30.000 × 0,40 × 180 = £2,16M
Año 3: 30.000 × 0,60 × 180 = £3,24M
```

Incluso si el RCEI del producto es un estelar £8.000/AVAC, el pagador debe encontrar £3,24M de *dinero nuevo* para el año 3 — los £120 desplazados se dispersan finamente entre otras líneas de presupuesto y no se liberarán como efectivo (ver [liberador de efectivo frente a no liberador de efectivo](../ahorros-liberadores-de-efectivo-frente-a-no-liberadores-de-efectivo/)). Por eso el valor por unidad y la asequibilidad son obstáculos separados.

## Conexión con la ingeniería de software

El AIP es exactamente el complemento orientado al CFO de una reclamación de ROI por asiento: "es coste-efectivo por desarrollador, pero ¿podemos permitirnos el despliegue en toda la organización este año fiscal?" Modela niveles de licencia, una curva de adopción en S, gasto en herramientas desplazado que solo libera efectivo cuando los contratos antiguos realmente terminan, y uso inducido (CI más barato → más CI). Presentar una tabla de impacto presupuestario de 3 años junto al ROI es lo que hace que una propuesta de herramientas empresarial sea creíble financieramente.

## Errores comunes

- **Fantasía de adopción instantánea**: impacto del año 1 calculado con adopción en estado estable.
- **Contar el coste desplazado como efectivo** cuando es capacidad difusa.
- **Ignorar la demanda inducida** — las mejoras de acceso aumentan el uso de la población elegible.
- **Confundir horizontes/descuentos de AIP y AEC**: el AIP es de horizonte corto, no descontado, específico del pagador por diseño.

## Fuentes

- Sullivan SD, et al. ISPOR BIA Good Practice II Task Force. Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
- ISPOR buenas prácticas: análisis de impacto presupuestario. <https://www.ispor.org/heor-resources/good-practices/article/principles-of-good-practice-for-budget-impact-analysis-ii>
