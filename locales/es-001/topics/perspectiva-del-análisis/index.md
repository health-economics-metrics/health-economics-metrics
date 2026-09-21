# Perspectiva del Análisis

La perspectiva define *de quién* cuentan los costes y beneficios en un análisis económico: el del pagador, el del proveedor, o el de la sociedad en su conjunto. La misma intervención puede verse brillante desde una perspectiva y terrible desde otra.

## Por qué importa

Toda evaluación económica debe declarar su perspectiva de antemano, porque la perspectiva determina qué partidas existen:

- **Perspectiva del pagador** (p. ej., comisionado del NHS, aseguradora): solo los costes que el pagador reembolsa.
- **Perspectiva del proveedor** (p. ej., un fideicomiso hospitalario): costes internos de prestación, personal, inmuebles.
- **Perspectiva social**: todo — incluyendo el tiempo del paciente, los viajes, el cuidado informal por familiares y las pérdidas de productividad para los empleadores.

El caso de referencia de NICE usa la perspectiva del **NHS y los Servicios Sociales Personales (PSS)** para los costes. El Segundo Panel de EE. UU. sobre Coste-Efectividad recomienda informar tanto un análisis del sector sanitario como uno social con un "inventario de impacto" que enumere qué se incluye.

## El cálculo

Sin fórmula — una regla de alcance aplicada antes de cualquier cálculo:

```
Categorías de coste/beneficio incluidas = f(perspectiva)
```

Una comprobación útil: construye una tabla de inventario de impacto con una fila por coste/beneficio y una columna por perspectiva, y marca qué celdas cuentan.

## Ejemplo resuelto

Una aplicación de verificación de síntomas desvía 10.000 visitas al médico de cabecera al año hacia el autocuidado.

- **Pagador (NHS)**: ahorra 10.000 × £42 por consulta de médico de cabecera = **£420.000/año** — fuertemente positivo.
- **Proveedor (consulta de médico de cabecera)**: si las consultas se pagan por capitación, sus ingresos no cambian pero la carga de trabajo cae — levemente positivo.
- **Social**: suma el tiempo de viaje y espera ahorrado a los pacientes, digamos 10.000 × 2 horas × £15/hora = £300.000 de valor de tiempo; pero resta el daño si el 2% se tranquiliza falsamente y se presenta más tarde, más enfermo, a 200 × £3.000 = £600.000 de tratamiento adicional. Neto social: 420.000 + 300.000 − 600.000 = **£120.000/año** — positivo, pero dominado por el supuesto de seguridad.

La misma aplicación, tres respuestas diferentes. La declaración de perspectiva es lo que hace que las cifras sean comparables y honestas.

## Conexión con la ingeniería de software

El ROI de herramientas y plataformas también tiene perspectivas:

- **Presupuesto del equipo ("pagador")**: ¿la tarifa de licencia encaja en mi centro de coste?
- **Organización de plataforma ("proveedor")**: coste total incluyendo integración, soporte y mantenimiento.
- **Empresa ("social")**: incluye el impacto al cliente, las externalidades de seguridad y el tiempo de todos los equipos afectados.

Una herramienta de CI que es barata para el equipo comprador pero empuja el trabajo de migración a otros 40 equipos es la versión de software del desplazamiento de costes — visible solo desde la perspectiva más amplia. Declara la perspectiva en cada caso de negocio; los revisores no pueden cuestionar supuestos que no pueden ver.

## Errores comunes

- **Cambio silencioso de perspectiva**: contar beneficios sociales pero solo costes del pagador hace que cualquier cosa parezca coste-efectiva.
- **Doble contabilización** cuando las perspectivas se fusionan (p. ej., contar una cita de médico de cabecera ahorrada tanto como ahorro del pagador como ahorro de tiempo del paciente cuando la cifra del pagador ya incluye el tiempo del personal).
- **Ignorar el desplazamiento de costes**: "ahorros" que solo mueven el coste a pacientes, cuidadores u otro departamento.

## Fuentes

- Sanders GD, et al. "Recommendations for Conduct, Methodological Practices, and Reporting of Cost-effectiveness Analyses: Second Panel on Cost-Effectiveness in Health and Medicine." JAMA 2016. <https://jamanetwork.com/journals/jama/fullarticle/2552214>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
