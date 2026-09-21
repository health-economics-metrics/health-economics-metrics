# Evitación de Asistencia a Urgencias

La evitación de asistencia a urgencias cuenta las visitas a urgencias e ingresos de emergencia prevenidos por intervención anterior — aplicaciones de triaje, monitoreo remoto, salas virtuales, redirección de atención urgente. Convierte "lo detectamos antes" en una reclamación tasada.

## Por qué importa

La atención de urgencias es el entorno rutinario más caro del sistema (los costes unitarios de asistencia a urgencias están en el rango de £250-£400 según cifras de la Colección Nacional de Costes/PSSRU; un ingreso de emergencia son miles), y el hacinamiento de urgencias se propaga en retrasos de ambulancias y cirugías electivas canceladas. Cualquier cosa que resuelva la demanda de forma segura anteriormente — consejo de autocuidado, atención primaria el mismo día, respuesta comunitaria — compra capacidad del sistema en su punto más estresado. Esta es la línea de beneficio estándar para verificadores de síntomas, servicios de triaje estilo 111, y [monitoreo remoto de pacientes](../economía-del-monitoreo-remoto-de-pacientes/).

## El cálculo

```
Asistencias evitadas = población × (tasa base − tasa de intervención)
Ahorro bruto        = asistencias evitadas × coste unitario por asistencia
                      (+ ingresos evitados × coste de ingreso, contado por separado)

Ahorro neto          = ahorro bruto − coste de intervención − coste de uso de nueva vía
                      (la demanda redirigida no es gratis: una llamada al 111, una franja
                       de médico de cabecera, un día de sala virtual tienen todos costes unitarios)
```

La reclamación causal necesita un comparador: las tasas de asistencia tienen tendencia y varían estacionalmente, así que antes/después por sí solo no prueba nada.

## Ejemplo resuelto

Un servicio de monitoreo remoto de EPOC para 3.000 pacientes de alto riesgo. Una evaluación con control emparejado muestra que la asistencia a urgencias relacionada con exacerbación cae de 0,9 a 0,7 por paciente-año, y los ingresos de emergencia de 0,5 a 0,42.

```
Asistencias evitadas = 3.000 × 0,2  = 600 × £300   = £180.000
Ingresos evitados   = 3.000 × 0,08 = 240 × £3.800 = £912.000
Bruto                                              £1.092.000/año

Costes: servicio de monitoreo £600.000; respuestas extra de enfermería comunitaria £150.000
Neto ≈ +£342.000/año — más las ganancias de AVAC de exacerbaciones tratadas antes.
```

Nota que la línea de ingresos domina: la evitación de asistencia sola rara vez paga un servicio de monitoreo; la evitación de *ingresos* es donde está el dinero.

## Conexión con la ingeniería de software

Esta es **economía de evitación de incidentes**. El valor de la observabilidad, los despliegues canario y los sistemas de alerta temprana son "asistencias a urgencias" evitadas — buscapersonas, salas de guerra, sev-1 — cada una con un coste cargado (horas-ingeniero × tarifa + impacto al cliente). Se aplican las mismas reglas de modelado: neta el coste de la nueva vía anterior (el triaje de alertas no es gratis), cuidado con la sustitución (las alertas que crean trabajo sin prevenir incidentes son ansiedad de salud, no salud), y prueba el contrafactual con un control (las tasas de incidentes de los equipos tienen tendencia y regresan a la media, exactamente como la asistencia a urgencias).

## Errores comunes

- **Regresión a la media**: las cohortes de alto riesgo seleccionadas en un mal año mejoran sin tratamiento; los controles emparejados o los diseños de cuña escalonada son esenciales.
- **Demanda inducida por la oferta**: el triaje digital fácil puede *aumentar* los contactos totales (umbral más bajo para buscar ayuda) mientras disminuye la proporción de urgencias — cuenta el coste total del sistema.
- **Valorar las asistencias a coste promedio** cuando los costes fijos de urgencias no caen — ver [coste marginal frente a promedio](../coste-marginal-frente-a-promedio/).

## Fuentes

- NHS England, Colección Nacional de Costes. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
