# Análisis de impacto presupuestario (BIA)

El BIA estima qué efecto tiene adoptar una intervención sobre el **presupuesto** de un pagador concreto durante los próximos 1–5 años. Responde a la *asequibilidad*; el análisis de coste-efectividad responde al *valor*. Una tecnología puede ofrecer un valor excelente y aun así ser inasequible — o ser asequible y de escaso valor. Las evaluaciones serias requieren ambas cosas.

## Por qué importa

La pregunta del director financiero nunca es "¿cuál es el ICER?" — es "¿qué efecto tiene esto sobre el presupuesto del año que viene?". La guía de buenas prácticas de ISPOR (el estándar del sector) especifica: la perspectiva propia del pagador, un horizonte de 1–5 años, flujos de caja anuales *sin descontar*, curvas de adopción realistas e incertidumbre por escenarios (no probabilística). NICE exige información de impacto presupuestario junto con la de coste-efectividad; un producto con un impacto presupuestario nacional superior a ~£20M/año en Inglaterra desencadena una negociación comercial con independencia de su ICER.

## Las matemáticas

```
BI_year_t = Cost_scenario_with_new(t) − Cost_scenario_current(t)

Cost_scenario(t) = Σ para cada grupo de pacientes:
   población elegible(t) × adopción(t) × coste neto por paciente(t)

coste neto por paciente = coste de la intervención − coste de la atención desplazada + coste de la atención inducida
```

Decisiones clave de modelización: el crecimiento de la población elegible, la curva de adopción (la adopción nunca es instantánea), qué desplaza la nueva opción y qué demanda *induce* (un acceso más fácil → más usuarios).

## Ejemplo resuelto

Un pagador que cubre a 2M de personas estudia un producto terapéutico digital a £300/paciente/año; el 1.5% de los afiliados son elegibles (30,000); la adopción es del 20% → 40% → 60% a lo largo de 3 años; cada usuario desplaza £120/año de otra atención.

```
Coste neto por usuario = 300 − 120 = £180

Año 1: 30,000 × 0.20 × 180 = £1.08M
Año 2: 30,000 × 0.40 × 180 = £2.16M
Año 3: 30,000 × 0.60 × 180 = £3.24M
```

Aunque el ICER del producto sea un excelente £8,000/QALY, el pagador debe encontrar £3.24M de *dinero nuevo* para el año 3 — los £120 desplazados se reparten de forma difusa entre otras líneas presupuestarias y no se liberarán como efectivo (véase [ahorros liberadores de efectivo frente a no liberadores de efectivo](../cash-releasing-vs-non-cash-releasing/)). Por eso el valor por unidad y la asequibilidad son obstáculos separados.

## Conexión con la ingeniería de software

El BIA es exactamente el complemento orientado al director financiero de una reivindicación de ROI por puesto: "es coste-efectivo por desarrollador, pero ¿podemos permitirnos el despliegue en toda la organización este ejercicio fiscal?". Modele los niveles de licencia, una curva de adopción en S, el gasto en herramientas desplazado que solo libera efectivo cuando los contratos antiguos realmente terminan, y la demanda inducida (una CI más barata → más CI). Presentar una tabla de impacto presupuestario a 3 años junto al ROI es lo que hace creíble ante finanzas una propuesta de herramientas empresariales.

## Escollos

- **Fantasía de adopción instantánea**: el impacto del año 1 calculado con adopción en estado estacionario.
- **Contar el coste desplazado como efectivo** cuando es capacidad difusa.
- **Ignorar la demanda inducida** — las mejoras de acceso hacen crecer el uso de la población elegible.
- **Confundir los horizontes/descuentos del BIA y del CEA**: el BIA es de horizonte corto, sin descontar, y específico del pagador por diseño.

## Fuentes

- Sullivan SD, et al. ISPOR BIA Good Practice II Task Force. Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
- Buenas prácticas de ISPOR: análisis de impacto presupuestario. <https://www.ispor.org/heor-resources/good-practices/article/principles-of-good-practice-for-budget-impact-analysis-ii>
