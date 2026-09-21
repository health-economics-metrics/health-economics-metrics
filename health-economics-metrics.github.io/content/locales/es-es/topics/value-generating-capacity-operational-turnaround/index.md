# Capacidad Generadora de Valor (Recuperación Operativa)

La capacidad generadora de valor es el «beneficio de oportunidad» del tiempo liberado: lo que el hospital puede ahora *lograr* con las horas que libera vuestro software. Esta es la métrica que más importa a los directores de operaciones (Chief Operating Officers) y a los directores médicos, porque habla en la moneda con la que se les gestiona: actividad, objetivos y tiempos de resolución.

## Por qué importa

El NHS se enfrenta a listas de espera masivas entre la derivación y el tratamiento, y los trusts que incumplen los estándares nacionales de tiempos de espera se exponen a escrutinio regulatorio e intervención (véase [referral to treatment](../referral-to-treatment/)). La contratación es lenta y está limitada; las infraestructuras son fijas. La única palanca rápida es extraer más actividad generadora de valor del personal y el espacio ya existentes. El software que recupera tiempo especializado no solo «ahorra dinero»: *acuña capacidad* — consultas que no podrían existir, valoraciones que no podrían programarse, sin contratar ni construir.

## Las matemáticas

```
Capacidad oculta creada = tiempo liberado → unidades de actividad habilitadas × valor del esquema

Unidades de actividad: consultas ambulatorias, valoraciones preoperatorias, revisiones de monitorización
Valor del esquema:     precios del national tariff / NHS Payment Scheme
                (véase national-tariff-and-unit-costs.md)
```

Esta es la valoración por resultados del [tiempo del profesional sanitario](../practitioner-time/), escalada a una línea de servicio y expresada en las unidades de actividad con las que ya planifica el equipo de operaciones.

## Ejemplo práctico

Enfermeras especialistas de Banda 6 dirigen consultas de valoración preoperatoria. La automatización de la documentación recupera 1 hora/día para cada una de 25 enfermeras; cada hora permite realizar 2 valoraciones.

```
Valoraciones adicionales = 25 enfermeras × 2/día × 250 días = 12,500/año
A un valor de esquema de ~£120 por valoración preoperatoria:
  12,500 × £120 = £1.5M/año de capacidad asistencial creada
```

— sin contratar a una sola enfermera ni construir una sola sala. (El modelo ampliamente citado del que originalmente procedía este esbozo situaba la cifra en £766,920/año para una cohorte más pequeña; el patrón aritmético es el mismo — la cifra escala con enfermeras × sesiones × tarifa.) El planteamiento operativo para el COO: la valoración preoperatoria deja de ser la restricción sobre las listas de quirófano — las operaciones canceladas el mismo día disminuyen y la utilización de quirófanos aumenta, que es donde empieza la *siguiente* línea de beneficio (véase [downstream resource optimization](../downstream-resource-optimization/)).

## Conexión con la ingeniería de software

El mismo replanteamiento rescata las afirmaciones sobre productividad de desarrolladores de las matemáticas de salarios: el tiempo de ingeniería liberado, expresado como *capacidad entregada que la organización no podría permitirse de otro modo* — funcionalidades, migraciones, trabajo de fiabilidad — valorado según lo que la organización paga por esa capacidad en el margen (tarifas de contratistas, o equivalentes de contratación diferida). El enfoque del COO también enseña algo sobre cómo presentar el trabajo de plataforma: expresad el beneficio en las unidades con las que se gestiona a la audiencia. Los líderes de operaciones piensan en actividad y objetivos, no en horas abstractas; los líderes de ingeniería piensan en elementos de la hoja de ruta y en plantilla, no en minutos ahorrados.

## Errores habituales

- **Afirmaciones de capacidad sin demanda**: 12,500 huecos de valoración adicionales solo importan si el flujo quirúrgico los llena — comprobad la restricción aguas abajo.
- **Valor de tarifa sin mecanismo de pago**: bajo un pago mixto (blended payment), la actividad adicional puede no generar ingresos adicionales; el valor puede residir en la reducción de la lista de espera (véase [waiting list impact](../waiting-list-impact/)).
- **Presentar la capacidad como si fuera efectivo** — este es el beneficio insignia que no libera caja; etiquetadlo como tal (véase [cash-releasing vs non-cash-releasing](../cash-releasing-vs-non-cash-releasing/)).

## Fuentes

- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
