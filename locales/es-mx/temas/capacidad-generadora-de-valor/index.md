# Capacidad Generadora de Valor (Cambio Operativo)

La capacidad generadora de valor es el "beneficio de oportunidad" del tiempo liberado: lo que el hospital ahora puede *lograr* con las horas que tu software libera. Esta es la métrica que más importa a los Directores de Operaciones y Directores Médicos, porque habla en la moneda con la que se gestionan — actividad, objetivos y cambio.

## Por qué importa

El NHS enfrenta atrasos masivos de derivación a tratamiento, y los fideicomisos que no cumplen los estándares nacionales de tiempo de espera enfrentan escrutinio regulatorio e intervención (ver [derivación a tratamiento](../derivación-a-tratamiento/)). La contratación es lenta y limitada; los inmuebles son fijos. La única palanca rápida es obtener más actividad generadora de valor del personal y espacio existentes. El software que recupera tiempo de especialistas no solo "ahorra dinero" — *acuña capacidad*: clínicas que no podían existir, evaluaciones que no podían programarse, sin contratar ni construir.

## El cálculo

```
Capacidad oculta creada = tiempo liberado → unidades de actividad habilitadas × valor del esquema

Unidades de actividad: asistencias ambulatorias, evaluaciones preoperatorias, revisiones de monitoreo
Valor del esquema:   precios de tarifa nacional / Esquema de Pago del NHS
                (ver national-tariff-and-unit-costs.md)
```

Esta es la valoración de base de resultado del [tiempo del profesional](../tiempo-del-profesional/), escalada a una línea de servicio y expresada en las unidades de actividad en las que ya planifica el equipo de operaciones.

## Ejemplo resuelto

Las enfermeras especialistas de Banda 6 dirigen clínicas de evaluación preoperatoria. La automatización de documentación recupera 1 hora/día para cada una de 25 enfermeras; cada hora encaja 2 evaluaciones.

```
Evaluaciones extra = 25 enfermeras × 2/día × 250 días = 12.500/año
A ~£120 de valor de esquema por evaluación preoperatoria:
  12.500 × £120 = £1,5M/año de capacidad de atención creada
```

— sin contratar a una sola enfermera ni construir una sola sala. (El modelo ampliamente citado que este esbozo citaba originalmente puso la cifra en £766.920/año para una cohorte más pequeña; el patrón aritmético es el mismo — la cifra escala con enfermeras × sesiones × tarifa.) El encuadre operativo para el COO: la evaluación preoperatoria deja de ser la restricción en las listas de teatro — las operaciones canceladas el mismo día caen, y la utilización de teatro sube, que es donde comienza la *siguiente* línea de beneficio (ver [optimización de recursos posteriores](../optimización-de-recursos-posteriores/)).

## Conexión con la ingeniería de software

El mismo reencuadre rescata las reclamaciones de productividad del desarrollador de la matemática salarial: el tiempo de ingeniería liberado, expresado como *capacidad enviada que la organización no podría permitirse de otro modo* — funcionalidades, migraciones, trabajo de fiabilidad — tasado a lo que la organización paga por tal capacidad en el margen (tarifas de contratista, o equivalentes de contratación diferida). El encuadre del COO también enseña algo sobre presentar el trabajo de plataforma: expresa el beneficio en las unidades en las que se gestiona la audiencia. Los líderes de operaciones piensan en actividad y objetivos, no en horas abstractas; los líderes de ingeniería piensan en elementos de hoja de ruta y plantilla, no en minutos ahorrados.

## Errores comunes

- **Reclamaciones de capacidad sin demanda**: 12.500 franjas de evaluación extra solo importan si la cartera quirúrgica las llena — comprueba la restricción posterior.
- **Valor de tarifa sin un mecanismo de pago**: bajo pago combinado, la actividad extra puede no traer ingreso extra; el valor puede ser reducción de lista de espera en su lugar (ver [impacto en lista de espera](../impacto-en-lista-de-espera/)).
- **Presentar la capacidad como efectivo** — este es el beneficio insignia que no libera efectivo; etiquétalo (ver [ahorros liberadores de efectivo frente a no liberadores de efectivo](../ahorros-liberadores-de-efectivo-frente-a-no-liberadores-de-efectivo/)).

## Fuentes

- NHS England, Esquema de Pago del NHS. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, plan de recuperación de atención electiva. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
