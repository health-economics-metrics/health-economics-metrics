# Perspectiva del análisis

La perspectiva define *de quién* cuentan los costes y beneficios en un análisis económico: los del pagador, los del proveedor o los de la sociedad en su conjunto. La misma intervención puede parecer brillante desde una perspectiva y terrible desde otra.

## Por qué importa

Toda evaluación económica debe declarar su perspectiva de antemano, porque la perspectiva determina qué partidas existen:

- **Perspectiva del pagador** (p. ej., un comisionado del NHS, una aseguradora): solo los costes que reembolsa el pagador.
- **Perspectiva del proveedor** (p. ej., un trust hospitalario): costes internos de prestación, personal, infraestructuras.
- **Perspectiva societal**: todo — incluyendo el tiempo del paciente, los desplazamientos, los cuidados informales de la familia y las pérdidas de productividad para los empleadores.

El caso de referencia de NICE utiliza la perspectiva del **NHS y los Servicios Sociales Personales (PSS)** para los costes. El Second Panel on Cost-Effectiveness de EE. UU. recomienda presentar tanto un análisis del sector sanitario como un análisis societal, con un "inventario de impacto" que enumere qué se incluye.

## Las matemáticas

Sin fórmula — una regla de alcance aplicada antes de cualquier cálculo:

```
Categorías de coste/beneficio incluidas = f(perspectiva)
```

Una comprobación útil: construya una tabla de inventario de impacto con una fila por cada coste/beneficio y una columna por cada perspectiva, y marque qué celdas cuentan.

## Ejemplo resuelto

Una aplicación de comprobación de síntomas desvía 10,000 visitas al médico de cabecera al año hacia el autocuidado.

- **Pagador (NHS)**: ahorra 10,000 × £42 por consulta de médico de cabecera = **£420,000/año** — claramente positivo.
- **Proveedor (consulta de médico de cabecera)**: si las consultas se pagan por capitación, sus ingresos no cambian pero la carga de trabajo disminuye — ligeramente positivo.
- **Societal**: añada el tiempo de desplazamiento y espera ahorrado a los pacientes, digamos 10,000 × 2 horas × £15/hora = £300,000 de valor del tiempo; pero reste el daño si el 2% recibe una falsa tranquilidad y acude más tarde, más enfermo, a 200 × £3,000 = £600,000 de tratamiento adicional. Neto societal: 420,000 + 300,000 − 600,000 = **£120,000/año** — positivo, pero dominado por el supuesto de seguridad.

La misma aplicación, tres respuestas distintas. La declaración de la perspectiva es lo que hace que las cifras sean comparables y honestas.

## Conexión con la ingeniería de software

El ROI de herramientas y plataformas también tiene perspectivas:

- **Presupuesto del equipo ("pagador")**: ¿la cuota de licencia encaja en mi centro de coste?
- **Organización de plataforma ("proveedor")**: coste total incluyendo integración, soporte y mantenimiento.
- **Empresa ("societal")**: incluya el impacto en el cliente, las externalidades de seguridad y el tiempo de todos los equipos afectados.

Una herramienta de CI que es barata para el equipo comprador pero traslada trabajo de migración a otros 40 equipos es la versión software del desplazamiento de costes — visible solo desde la perspectiva más amplia. Declare la perspectiva en cada caso de negocio; los revisores no pueden cuestionar supuestos que no pueden ver.

## Trampas habituales

- **Cambio silencioso de perspectiva**: contar beneficios societales pero solo costes del pagador hace que cualquier cosa parezca coste-efectiva.
- **Doble contabilización** cuando se combinan perspectivas (p. ej., contar una cita de médico de cabecera ahorrada tanto como ahorro del pagador como ahorro de tiempo del paciente, cuando la cifra del pagador ya incluye el tiempo del personal).
- **Ignorar el desplazamiento de costes**: "ahorros" que simplemente trasladan el coste a los pacientes, a los cuidadores o a otro departamento.

## Fuentes

- Sanders GD, et al. "Recommendations for Conduct, Methodological Practices, and Reporting of Cost-effectiveness Analyses: Second Panel on Cost-Effectiveness in Health and Medicine." JAMA 2016. <https://jamanetwork.com/journals/jama/fullarticle/2552214>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
