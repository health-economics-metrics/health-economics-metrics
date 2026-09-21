# Realización de beneficios

La gestión de la realización de beneficios (BRM, por sus siglas en inglés) es la disciplina de identificar, establecer una línea base, hacer seguimiento y *evidenciar* que los beneficios prometidos en un caso de negocio realmente se materializaron tras la implantación. En la inversión pública del Reino Unido, vive dentro del **Modelo de los Cinco Casos** (Five Case Model) del Green Book de HM Treasury; en medicina, su prima hermana es la vigilancia poscomercialización.

## Por qué importa

Los casos de negocio son promesas; la realización de beneficios es la auditoría. Las evaluaciones de los grandes programas digitales del NHS han encontrado repetidamente beneficios previstos que nunca se materializaron — y cuando los beneficios no eran liberadores de efectivo, no hicieron nada por el resultado financiero del trust. La respuesta del Green Book: todo caso de gasto debe superar **cinco casos** (estratégico, económico, comercial, financiero, de gestión), con la realización de beneficios planificada en el caso de gestión *antes de la aprobación* — con propietarios nombrados, líneas base capturadas y fechas de medición fijadas. Sin esto, "el software ahorró 30 minutos por enfermera" sigue siendo ficción del proveedor para siempre.

## Las matemáticas

```
Tasa de realización = beneficios realizados / beneficios previstos   (por beneficio, por periodo)

Mecánica que lo hace computable:
  línea base capturada ANTES de la puesta en marcha (si no, el delta es inmedible)
  cada beneficio: propietario, métrica, fuente de datos, calendario de medición
  previsión ajustada por sesgo de optimismo en la evaluación (mandato del Green Book)
  beneficios clasificados como liberadores de efectivo / no liberadores de efectivo / cualitativos y seguidos por separado
  (véase cash-releasing-vs-non-cash-releasing.md)
```

## Ejemplo resuelto

Un caso de negocio de turnos electrónicos (e-rostering) prometía, por año: £450k de reducción de gasto en agencias (efectivo), 8,000 horas de supervisoras de planta (capacidad), mejora del cumplimiento de la tasa de cobertura (cualitativo). Doce meses después de la puesta en marcha:

```
Beneficio             Previsto    Realizado   Tasa   Evidencia
Gasto en agencias      £450,000    £287,000    64%    libro mayor vs año base
Horas de supervisión   8,000       5,100       64%    muestreo de tiempos y movimientos
Cumplimiento cobertura +10pp       +12pp       120%   datos del sistema de turnos

Acciones derivadas de la revisión (el objetivo de la BRM):
el déficit de agencias se rastreó hasta dos plantas nunca incorporadas → incorporarlas;
el error de optimismo del 30% del modelo de previsión quedó registrado → se aplicará al siguiente caso.
```

Una tasa de realización del 64% no es un fracaso — es *conocimiento*. Los casos sin medir reclaman el 100% para siempre.

## Conexión con la ingeniería de software

Las organizaciones de ingeniería aprueban inversiones en plataformas basándose en beneficios previstos y casi nunca los auditan — exactamente la patología que corrige la BRM. La versión ligera: toda propuesta por encima de un umbral nombra propietarios de beneficios, métricas de línea base y una fecha de revisión a T+6 meses; las tasas de realización retroalimentan cuánto descuenta la organización la próxima previsión de ese equipo (o proveedor). Esta es también la respuesta al escepticismo sobre las herramientas de IA: el [hallazgo del MIT de que ~95% de los pilotos de IA generativa no mostraron retorno medible en cuenta de resultados](../ai-return-on-investment/) es un resultado de realización de beneficios — los pilotos que *sí* dieron retorno tenían líneas de beneficio rastreables y con propietario. Prever → medir → recalibrar es el mismo bucle que los pilotos valorados con [EVPI](../expected-value-of-perfect-information/), ejecutado a escala de cartera.

## Escollos

- **Ausencia de línea base previa a la puesta en marcha** — la omisión fatal e irreparable.
- **Orfandad del beneficio**: sin propietario nombrado, nadie recoge los datos y toda revisión dice "en general, según lo previsto".
- **Beneficios contabilizados por duplicado entre programas** que reclaman la misma capacidad liberada — mantener un registro de beneficios a nivel de cartera.
- **Teatro de la realización**: medir las victorias cualitativas fáciles mientras las líneas de efectivo quedan silenciosamente sin examinar.

## Fuentes

- HM Treasury, guía del Green Book y del Modelo de los Cinco Casos. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Evaluación del programa Global Digital Exemplar (lecciones de beneficios digitales del NHS). <https://pmc.ncbi.nlm.nih.gov/articles/PMC8685936/>
