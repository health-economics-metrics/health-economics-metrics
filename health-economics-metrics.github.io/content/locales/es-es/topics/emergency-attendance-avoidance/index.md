# Evitación de Asistencias a Urgencias

La evitación de asistencias a urgencias contabiliza las visitas a urgencias (A&E) y los ingresos de emergencia prevenidos mediante intervención previa — aplicaciones de triaje, monitorización remota, salas virtuales, derivación a atención urgente. Convierte el "lo detectamos antes" en una afirmación costeada.

## Por qué importa

La atención de urgencias es el entorno rutinario más caro del sistema (los costes unitarios de una asistencia a urgencias se sitúan en el rango de £250–£400 según las cifras de la National Cost Collection / PSSRU; un ingreso de emergencia cuesta miles), y la saturación de urgencias se propaga en retrasos de ambulancias y cancelaciones de cirugía programada. Cualquier cosa que resuelva la demanda de forma segura antes de llegar ahí — consejos de autocuidado, atención primaria el mismo día, respuesta comunitaria — compra al sistema capacidad en su punto más tensionado. Esta es la línea de beneficio estándar para los verificadores de síntomas, los servicios de triaje tipo 111 y la [monitorización remota de pacientes](../remote-patient-monitoring-economics/).

## Las matemáticas

```
Asistencias evitadas = población × (tasa base − tasa con intervención)
Ahorro bruto         = asistencias evitadas × coste unitario por asistencia
                       (+ ingresos evitados × coste del ingreso, contados aparte)

Ahorro neto          = ahorro bruto − coste de la intervención − coste del uso de la nueva vía
                       (la demanda redirigida no es gratis: una llamada al 111, una cita de
                        médico de cabecera, un día de sala virtual tienen costes unitarios)
```

La afirmación causal necesita un comparador: las tasas de asistencia tienen tendencia y varían estacionalmente, así que el antes/después por sí solo no demuestra nada.

## Ejemplo práctico

Un servicio de monitorización remota de EPOC para 3,000 pacientes de alto riesgo. Una evaluación con controles emparejados muestra que la asistencia a urgencias por exacerbación cae de 0.9 a 0.7 por paciente-año, y los ingresos de emergencia de 0.5 a 0.42.

```
Asistencias evitadas = 3,000 × 0.2  = 600 × £300   = £180,000
Ingresos evitados     = 3,000 × 0.08 = 240 × £3,800 = £912,000
Bruto                                                £1,092,000/año

Costes: servicio de monitorización £600,000; respuestas extra de enfermería
comunitaria £150,000
Neto ≈ +£342,000/año — más las ganancias de AVAC de las exacerbaciones tratadas antes.
```

Obsérvese que la línea de ingresos domina: la evitación de asistencias por sí sola rara vez cubre el coste de un servicio de monitorización; la evitación de *ingresos* es donde está el dinero.

## Conexión con la ingeniería de software

Esto es **economía de evitación de incidentes**. El valor de la observabilidad, los despliegues canary y los sistemas de alerta temprana son las "asistencias a urgencias" evitadas — avisos, salas de crisis, sev-1 — cada una con un coste cargado (horas de ingeniero × tarifa + impacto en el cliente). Se aplican las mismas reglas de modelización: hay que descontar el coste de la nueva vía previa (el triaje de alertas no es gratis), cuidado con la sustitución (las alertas que generan trabajo sin prevenir incidentes son ansiedad sanitaria, no salud), y demostrar el contrafactual con un control (las tasas de incidentes de los equipos tienen tendencia y regresan a la media, exactamente igual que las asistencias a urgencias).

## Escollos

- **Regresión a la media**: las cohortes de alto riesgo seleccionadas en un mal año mejoran sin tratamiento; son esenciales los controles emparejados o los diseños en cuña escalonada.
- **Demanda inducida por la oferta**: el triaje digital fácil puede *aumentar* los contactos totales (menor umbral para buscar ayuda) mientras reduce la cuota de urgencias — cuente el coste total del sistema.
- **Valorar las asistencias al coste medio** cuando los costes fijos de urgencias no bajan — véase [coste marginal frente a coste medio](../marginal-vs-average-cost/).

## Fuentes

- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
