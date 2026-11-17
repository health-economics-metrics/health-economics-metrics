# Realización de Beneficios

La gestión de realización de beneficios (GRB) es la disciplina de identificar, establecer líneas base, rastrear y *demostrar* que los beneficios prometidos en un caso de negocio realmente se materializaron después de la entrega. En la inversión pública del Reino Unido vive dentro del **Modelo de Cinco Casos** del Green Book de HM Treasury; en medicina, su prima es la vigilancia post-comercialización.

## Por qué importa

Los casos de negocio son promesas; la realización de beneficios es la auditoría. Las evaluaciones de los principales programas digitales del NHS encontraron repetidamente beneficios previstos que nunca se materializaron — y cuando los beneficios no liberaban efectivo, no hicieron nada por el resultado final del fideicomiso. La respuesta del Green Book: cada caso de gasto debe pasar **cinco casos** (estratégico, económico, comercial, financiero, de gestión), con la realización de beneficios planificada en el caso de gestión *antes de la aprobación* — propietarios nombrados, líneas base capturadas, fechas de medición fijadas. Sin esto, "el software ahorró 30 minutos por enfermera" sigue siendo ficción del proveedor para siempre.

## El cálculo

```
Tasa de realización = beneficios realizados / beneficios previstos   (por beneficio, por periodo)

Mecánica que lo hace computable:
  línea base capturada ANTES de la puesta en marcha (si no, el delta es inmedible)
  cada beneficio: propietario, métrica, fuente de datos, calendario de medición
  previsión ajustada por sesgo de optimismo en la evaluación (mandato del Green Book)
  beneficios clasificados efectivo / no efectivo / cualitativos y rastreados por separado
  (ver cash-releasing-vs-non-cash-releasing.md)
```

## Ejemplo resuelto

Un caso de negocio de programación electrónica prometió, por año: £450k de reducción de gasto en agencias (efectivo), 8.000 horas de gestor de sala (capacidad), mejor cumplimiento de la tasa de cobertura (cualitativo). Doce meses después de la puesta en marcha:

```
Beneficio          Previsto    Realizado    Tasa   Evidencia
Gasto en agencia   £450.000    £287.000     64%    libro mayor frente a año base
Horas de gestor    8.000       5.100        64%    muestra de estudio de tiempos
Cumplimiento cob.  +10pp       +12pp        120%   datos del sistema de programación

Acciones de la revisión (el objetivo de la GRB):
el déficit de agencia se rastreó hasta dos salas nunca incorporadas → incorporarlas;
el error de optimismo del 30% del modelo de previsión se registró → aplicado al siguiente caso.
```

64% de realización no es fracaso — es *conocimiento*. Los casos no medidos reclaman 100% para siempre.

## Conexión con la ingeniería de software

Las organizaciones de ingeniería aprueban inversiones en plataforma sobre beneficios previstos y casi nunca las auditan — la patología exacta que corrige la GRB. El puerto ligero: cada propuesta por encima de un umbral nombra propietarios de beneficios, métricas base y una fecha de revisión T+6 meses; las tasas de realización retroalimentan cuánto descuenta la organización la siguiente previsión de ese equipo (o proveedor). Esta también es la respuesta al escepticismo sobre herramientas de IA: el [hallazgo de MIT de que ~95% de los pilotos de IA generativa no mostraron retorno medible de P&G](../retorno-de-la-inversión-en-ia/) es un resultado de realización de beneficios — los pilotos que *sí* retornaron tenían líneas de beneficio rastreables y con propietario. Prever → medir → recalibrar es el mismo bucle que los pilotos tasados con [VECI](../valor-esperado-de-la-información-perfecta/), ejecutado a escala de cartera.

## Errores comunes

- **Sin línea base previa a la puesta en marcha** — la omisión fatal, irreparable.
- **Orfandad de beneficio**: sin propietario nombrado significa que nadie recopila los datos y cada revisión dice "en general en camino".
- **Beneficios contados dos veces entre programas** reclamando la misma capacidad liberada — mantén un registro de beneficios en toda la cartera.
- **Teatro de realización**: medir las victorias cualitativas fáciles mientras las líneas de efectivo pasan silenciosamente sin examinar.

## Fuentes

- HM Treasury, Green Book y guía del Modelo de Cinco Casos. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Evaluación del programa Global Digital Exemplar (lecciones de beneficios digitales del NHS). <https://pmc.ncbi.nlm.nih.gov/articles/PMC8685936/>
