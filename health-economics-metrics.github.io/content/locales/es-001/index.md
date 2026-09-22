# Métricas de Economía de la Salud

Una introducción exhaustiva a las matemáticas, los ejemplos y el razonamiento de la economía de la salud, escrita para ingenieros de software que desarrollan soluciones para organizaciones de servicios de salud nacionales de todo el mundo. Cada archivo cubre una métrica o concepto: definición, por qué importa, las matemáticas, un ejemplo resuelto, la conexión con la ingeniería de software, los errores comunes y las fuentes.

¿Es tu primera vez aquí? Empieza por [coste de oportunidad](locales/en-gb-oxendict/topics/opportunity-cost/), [año de vida ajustado por calidad](locales/en-gb-oxendict/topics/quality-adjusted-life-year/) y [coste del retraso](locales/en-gb-oxendict/topics/cost-of-delay/) — las tres ideas sobre las que se construye todo lo demás.

## Fundamentos del razonamiento económico

- [Coste de Oportunidad](locales/en-gb-oxendict/topics/opportunity-cost/) — el valor de la mejor alternativa renunciada; por qué los presupuestos fijos convierten cada elección en un desplazamiento
- [Descuento y Preferencia Temporal](locales/en-gb-oxendict/topics/discounting-and-time-preference/) — valores presentes, la tasa del 3,5% del Green Book/NICE
- [Perspectiva del Análisis](locales/en-gb-oxendict/topics/analysis-perspective/) — pagador frente a proveedor frente a sociedad: de quién son los costes que cuentan
- [Horizonte Temporal](locales/en-gb-oxendict/topics/time-horizon/) — durante cuánto tiempo contar costes y efectos, y el juego con el horizonte
- [Coste Marginal frente a Promedio](locales/en-gb-oxendict/topics/marginal-vs-average-cost/) — por qué liberar una cama no ahorra su coste medio
- [Ahorros Liberadores de Efectivo frente a No Liberadores de Efectivo](locales/en-gb-oxendict/topics/cash-releasing-vs-non-cash-releasing/) — la prueba de honestidad para cualquier afirmación de "tiempo ahorrado"
- [Análisis de Sensibilidad](locales/en-gb-oxendict/topics/sensitivity-analysis/) — diagramas de tornado; qué supuesto sostiene tu caso
- [Análisis de Sensibilidad Probabilístico (ASP)](locales/en-gb-oxendict/topics/probabilistic-sensitivity-analysis/) — Monte Carlo, CEAC, probabilidad de tener razón
- [Valor Esperado de la Información Perfecta (VECI)](locales/en-gb-oxendict/topics/expected-value-of-perfect-information/) — poner precio al piloto antes de ejecutarlo
- [Dominancia y la Frontera de Eficiencia](locales/en-gb-oxendict/topics/dominance-and-efficiency-frontier/) — eliminar opciones que nadie debería elegir

## Medidas de resultados

- [Año de Vida Ajustado por Calidad (AVAC)](locales/en-gb-oxendict/topics/quality-adjusted-life-year/) — la moneda común del valor en salud
- [Año de Vida Ajustado por Discapacidad (AVAD)](locales/en-gb-oxendict/topics/disability-adjusted-life-year/) — el espejo del lado de la carga; la métrica de la salud global
- [EQ-5D](locales/en-gb-oxendict/topics/eq-5d/) — el instrumento detrás de la mayoría de los pesos de utilidad del QALY
- [Ratio de Coste-Efectividad Incremental (RCEI)](locales/en-gb-oxendict/topics/incremental-cost-effectiveness-ratio/) — coste adicional por unidad adicional de salud
- [Umbrales de Disposición a Pagar](locales/en-gb-oxendict/topics/willingness-to-pay-thresholds/) — las £20–30k/QALY de NICE y las demás líneas del mundo
- [Beneficio Monetario Neto (BMN)](locales/en-gb-oxendict/topics/net-monetary-benefit/) — valor menos coste, hecho correctamente
- [Años de Vida Ganados (AVG)](locales/en-gb-oxendict/topics/life-years-gained/) — matemáticas de supervivencia, y la variante de equidad evLYG
- [Esperanza de Vida Ajustada por Salud (EVAS)](locales/en-gb-oxendict/topics/health-adjusted-life-expectancy/) — contabilidad de años saludables a nivel poblacional
- [Déficit de AVAC y Moduladores de Gravedad](locales/en-gb-oxendict/topics/qaly-shortfall-and-severity-modifiers/) — por qué los QALY de las poblaciones más enfermas cuentan más

## Tipos de análisis económico

- [Análisis de Coste-Efectividad (AEC)](locales/en-gb-oxendict/topics/cost-effectiveness-analysis/) — coste por unidad natural de resultado
- [Análisis de Coste-Utilidad (ACU)](locales/en-gb-oxendict/topics/cost-utility-analysis/) — coste por QALY; comparar intervenciones distintas entre sí
- [Análisis de Coste-Beneficio (ACB)](locales/en-gb-oxendict/topics/cost-benefit-analysis/) — todo en dinero; VAN del Green Book
- [Análisis de Minimización de Costes (AMC)](locales/en-gb-oxendict/topics/cost-minimization-analysis/) — la opción más barata, tras demostrar equivalencia
- [Análisis de Coste-Consecuencia (ACC)](locales/en-gb-oxendict/topics/cost-consequence-analysis/) — la tabla desagregada; la preferencia de NICE para la salud digital
- [Análisis de Impacto Presupuestario (AIP)](locales/en-gb-oxendict/topics/budget-impact-analysis/) — asequibilidad, a diferencia del valor
- [Retorno de la Inversión (ROI)](locales/en-gb-oxendict/topics/return-on-investment/) — la métrica compartida, con parámetros declarados
- [Retorno Social de la Inversión (RSI)](locales/en-gb-oxendict/topics/social-return-on-investment/) — monetizar lo que los mercados no valoran

## Economía operativa del sistema de salud

- [Días-Cama Ahorrados](locales/en-gb-oxendict/topics/bed-days-saved/) — el beneficio de referencia, y sus trampas de valoración
- [Duración de Estancia (EDM)](locales/en-gb-oxendict/topics/length-of-stay/) — el tiempo de ciclo del hospital
- [Tasa de Reingreso](locales/en-gb-oxendict/topics/readmission-rate/) — la tasa de fallo de cambio del sistema de salud
- [Tasa de No Presentación (DNA)](locales/en-gb-oxendict/topics/did-not-attend-rate/) — citas perdidas; la métrica de desperdicio más pura
- [Evitación de Asistencia a Urgencias](locales/en-gb-oxendict/topics/emergency-attendance-avoidance/) — economía de la intervención aguas arriba
- [Tarifa Nacional y Costes Unitarios](locales/en-gb-oxendict/topics/national-tariff-and-unit-costs/) — el libro de precios del NHS y la infraestructura de costeo
- [Derivación a Tratamiento (RTT)](locales/en-gb-oxendict/topics/referral-to-treatment/) — el estándar de 18 semanas como métrica de tiempo de espera
- [Impacto en Lista de Espera](locales/en-gb-oxendict/topics/waiting-list-impact/) — convertir horas ahorradas en pacientes atendidos
- [Tiempo del Profesional](locales/en-gb-oxendict/topics/practitioner-time/) — valorar la capacidad del cuello de botella, no los salarios
- [Retención de la Fuerza Laboral](locales/en-gb-oxendict/topics/workforce-retention/) — costes de rotación y economía del desgaste profesional
- [Costes de Externalización Evitables](locales/en-gb-oxendict/topics/avoidable-outsourcing-costs/) — repatriar trabajo de tarifa prémium
- [Optimización de Recursos Posteriores](locales/en-gb-oxendict/topics/downstream-resource-optimization/) — desbloquear el rol que todos esperan
- [Intervención Más Temprana](locales/en-gb-oxendict/topics/earlier-intervention/) — la economía de tratar antes de la progresión
- [Capacidad Generadora de Valor (Cambio Operativo)](locales/en-gb-oxendict/topics/value-generating-capacity-operational-turnaround/) — acuñar capacidad sin contratar
- [Ahorros Duros Liberadores de Efectivo (Defensa del Déficit)](locales/en-gb-oxendict/topics/hard-cash-releasing-savings-deficit-defence/) — eliminar líneas presupuestarias; la métrica del director financiero

## Marcos de HTA y economía de la prevención

- [Evaluación de Tecnología Sanitaria (ETS)](locales/en-gb-oxendict/topics/health-technology-assessment/) — NICE, ICER (EE. UU.), CADTH: quién decide qué merece la pena comprar
- [Marco de Estándares de Evidencia de NICE (MEE)](locales/en-gb-oxendict/topics/nice-evidence-standards-framework/) — requisitos de evidencia graduados por riesgo para la salud digital
- [Vía Rápida DiGA de Alemania](locales/en-gb-oxendict/topics/diga-fast-track/) — aplicaciones por receta; listado provisional con una fecha límite de evidencia
- [Número Necesario a Tratar (NNT)](locales/en-gb-oxendict/topics/number-needed-to-treat/) — unidades de esfuerzo por beneficio que mantienen honestas las afirmaciones
- [Economía de la Prevención](locales/en-gb-oxendict/topics/prevention-economics/) — por qué la prevención es coste-efectiva pero rara vez ahorra costes
- [Economía del Cribado](locales/en-gb-oxendict/topics/screening-economics/) — Wilson–Jungner, el colapso del VPP con baja prevalencia, la fatiga de alertas
- [Costes Posteriores Evitados](locales/en-gb-oxendict/topics/avoided-downstream-costs/) — compensaciones de coste y las reglas que las hacen creíbles

## Ingeniería de software y entrega digital

- [Coste de Retraso (CdR)](locales/en-gb-oxendict/topics/cost-of-delay/) — £/semana o QALY/semana de no entrega; la métrica puente maestra
- [Métricas DORA](locales/en-gb-oxendict/topics/dora-metrics/) — rendimiento de entrega, traducido a términos de economía de la salud
- [Métricas de Flujo](locales/en-gb-oxendict/topics/flow-metrics/) — la Ley de Little, WIP, eficiencia de flujo; las matemáticas de colas compartidas por hospitales y pipelines
- [WSJF y CD3](locales/en-gb-oxendict/topics/wsjf-and-cd3/) — priorización por densidad de valor; el backlog como tabla de clasificación de QALY
- [SPACE y DevEx](locales/en-gb-oxendict/topics/space-and-devex/) — productividad multidimensional; la lección de EQ-5D para las métricas de ingeniería
- [Deuda Técnica](locales/en-gb-oxendict/topics/technical-debt/) — principal, interés, y economía de enfermedad crónica para las bases de código
- [Coste Total de Propiedad (CTP)](locales/en-gb-oxendict/topics/total-cost-of-ownership/) — el mantenimiento es el 50–80%; el error del precio ingenuo del medicamento, aplicado al software
- [Economía Unitaria de la Nube (FinOps)](locales/en-gb-oxendict/topics/cloud-unit-economics/) — coste por unidad de salida; el coste de referencia del servicio digital
- [Construir frente a Comprar](locales/en-gb-oxendict/topics/build-vs-buy/) — comparación ajustada al riesgo con el término de retraso valorado
- [Realización de Beneficios](locales/en-gb-oxendict/topics/benefits-realization/) — auditar que los beneficios previstos realmente sucedieron
- [Métricas de Servicio GDS](locales/en-gb-oxendict/topics/gds-service-metrics/) — coste por transacción, satisfacción, finalización, adopción

## Aceleración con IA

- [Productividad del Desarrollador con IA](locales/en-gb-oxendict/topics/ai-developer-productivity/) — el ECA de Copilot frente al ECA de METR; eficacia frente a efectividad
- [Retorno de la Inversión en IA](locales/en-gb-oxendict/topics/ai-return-on-investment/) — el hallazgo del 95% sin retorno y qué hizo diferente el 5%
- [Economía Unitaria de Inferencia](locales/en-gb-oxendict/topics/inference-unit-economics/) — coste por token, y modelar el declive imparable de los precios
- [Métricas de Calidad de la IA](locales/en-gb-oxendict/topics/ai-quality-metrics/) — tasas de alucinación como tasas de daño con un precio
- [Evaluación Clínica de la IA](locales/en-gb-oxendict/topics/clinical-ai-evaluation/) — sensibilidad, especificidad, AUROC, y por qué la prevalencia gobierna la economía
- [Evaluación Regulatoria de la IA](locales/en-gb-oxendict/topics/ai-regulatory-evaluation/) — SaMD de la FDA, los PCCP, y la economía de las actualizaciones de modelos

## Aplicaciones y dispositivos de salud para el consumidor

- [Métricas de Compromiso](locales/en-gb-oxendict/topics/engagement-metrics/) — la interacción como dosis clínica
- [Retención y Abandono](locales/en-gb-oxendict/topics/retention-and-churn/) — la ley de la atrición; las curvas de retención como ventanas de tratamiento
- [Activación y Adopción](locales/en-gb-oxendict/topics/activation-and-uptake/) — las puertas de entrada del embudo de valor
- [Adherencia y Persistencia](locales/en-gb-oxendict/topics/adherence-and-persistence/) — MPR, PDC, interacción efectiva, dosis mínima efectiva
- [Resultados Informados por el Paciente (PROM, PREM, DMCI)](locales/en-gb-oxendict/topics/patient-reported-outcomes/) — PROM, PREM, y el listón de honestidad de la MCID
- [Puntos Finales y Biomarcadores Digitales](locales/en-gb-oxendict/topics/digital-endpoints-and-biomarkers/) — de la telemetría de sensores a la evidencia de grado regulatorio
- [Validación de Wearables](locales/en-gb-oxendict/topics/wearable-validation/) — MAPE, estadísticas de concordancia, tiempo de uso, completitud
- [Economía del Monitoreo Remoto de Pacientes](locales/en-gb-oxendict/topics/remote-patient-monitoring-economics/) — conjuntos de códigos CPT y sustitución por hospitalización a domicilio
- [Economía Unitaria de Aplicaciones de Salud](locales/en-gb-oxendict/topics/health-app-unit-economics/) — CAC, LTV, PMPM, y ROI frente a VOI
- [Alcance y Equidad](locales/en-gb-oxendict/topics/reach-and-equity/) — RE-AIM; impacto poblacional = alcance × efectividad

## Actualidad de los datos de referencia

Muchas de las cifras citadas se actualizan anualmente (costes unitarios del NHS, precios del esquema de pago, clústeres DORA, recuentos de DiGA, precios de los LLM). Cada documento fecha sus datos de referencia en el propio texto; vuelve a verificarlos antes de usarlos en un caso de negocio real.

## Habilidades de Claude

Este repositorio incluye dos [Habilidades de Claude](https://code.claude.com/docs/en/skills) — coloca cualquiera de ellas en el `.claude/skills/` de un proyecto (o dirige a Claude hacia el `skills/` de este repositorio) para poner este libro a trabajar directamente dentro de una sesión de codificación con agentes:

- [health-economics-metrics-skill](https://github.com/health-economics-metrics/health-economics-metrics/blob/main/skills/health-economics-metrics-skill/SKILL.md) — para uso general: explicar un concepto, calcular una métrica a partir de tus propios números, o construir un caso de negocio con múltiples métricas, basándose en las fórmulas, ejemplos resueltos y errores comunes de este libro en lugar de en un recuerdo genérico.
- [health-economics-metrics-maintainer-skill](https://github.com/health-economics-metrics/health-economics-metrics/blob/main/skills/health-economics-metrics-maintainer-skill/SKILL.md) — para quienes mantienen este repositorio: la plantilla por tema, las convenciones de indexación del README y una lista de comprobación de validación de enlaces/sincronización para añadir o editar temas.
